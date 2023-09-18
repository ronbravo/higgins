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
        <li><iframe src=""></iframe></li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
      </ul>
    </div>
  </div>
</li>
`;
