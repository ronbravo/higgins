import mustache from 'mustache';

export function createTabsFromScenarios (details) {
  let { data, sketch } = details;
  data.tabs = createTabs (sketch);
  data.panels = createTabPanels (sketch);
}

export function createTabs (sketch) {
  let { scenarios = [] } = sketch;
  let tabs;

  tabs = '';
  scenarios.forEach ((scenario, index) => {
    tabs = tabs + mustache.render (TAB_TEMPLATE, { index: (index + 1) });
  });
  return tabs;
}

export function createTabPanels (sketch) {
  let { scenarios = [] } = sketch;
  let panels;

  panels = '';
  scenarios.forEach ((scenario) => {
    panels = panels + mustache.render (PANEL_TEMPLATE, { scenario });
  });
  return panels;
}

export const TAB_TEMPLATE = `<li><a href="#">Scenarion {{ index }}</a></li>`;

export const PANEL_TEMPLATE = `
<li>
  <div class="hgn-preview app">
    <div class="hgn-preview sidebar">
      <div class="">
        <button onclick="globalThis.route1 ()">Route 1</button>
        <button onclick="globalThis.route2 ()">Route 2</button>
        <button onclick="globalThis.data1 ()">Data 1</button>
        <button onclick="globalThis.data2 ()">Data 2</button>
        {{{ scenario }}}
      </div>
    </div>
    <div class="hgn-preview main">
      <ul class="uk-tab-bottom uk-flex-right" uk-tab>
        <li><a href="#">vitejs - proto</a></li>
        <li><a href="#">webpack - proto</a></li>
        <li><a href="#">vitejs</a></li>
        <li><a href="#">webpack</a></li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <li><iframe id="iframe-01" src="http://localhost:3003/preview/Component1"></iframe></li>
        <li><iframe id="iframe-02" src="http://localhost:3002/preview/Component2"></iframe></li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
      </ul>
    </div>
  </div>
</li>
`;

// -------------------
import { eachSeries } from 'async';
import { connectToChild } from 'penpal';

const shared = {
  iframes: [],
  children: [],
  send (key, data) {
    switch (key) {
      case 'update /comm/frame/1/route':
        shared.children.forEach ((child) => {
          child.changeRoute (data);
        });
        break;

      case 'update /comm/frame/1/data':
        shared.children.forEach ((child) => {
          child.changeData (data);
        });
        break;
    }
  },
}

globalThis.send = shared.send;
globalThis.data1 = function () {
  send ('update /comm/frame/1/data');
}
globalThis.data2 = function () {
  send ('update /comm/frame/1/data');
}

globalThis.route1 = function () {
  send ('update /comm/frame/1/route');
}

globalThis.route2 = function () {
  send ('update /comm/frame/1/route');
}

export function clearFrames () {
  shared.iframes = [];
  shared.children = [];
}

export async function connectFrames () {
  let list = [].slice.call (document.querySelectorAll('.hgn-preview.app iframe'));
  await eachSeries (list, connectChild);
}

export async function connectChild (iframe) {
  try {
    if (shared.iframes.indexOf (iframe) === -1) {
      shared.iframes.push (iframe);
      const connection = connectToChild({
        iframe,
        methods: {
          getStatus () { return { ok: true }; },
        },
      });

      const child = await connection.promise;
      child.iframe = iframe;
      shared.children.push (child);
      const result = await child.getStatus ();

      if (!result.ok) { throw new Error (`Unable to connect to child iframe.`); }
    }
  }
  catch (err) {
    logError ({ err });
  }
}

export function logError({ err, log = console, warn }) {
  if (shared.log === false) {
    return;
  }
  let msg;
  msg = [`%cERROR:`, `color: #ff1e1e`, err.message];
  if (warn === true) {
    msg = [`%cWARNING:`, `color: #d3a900`, err.message];
  }
  log.groupCollapsed.apply(log, msg);
  log.info(err);
  log.groupEnd();
}
