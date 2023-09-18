import { getSketch } from './hgn-sketch.js';
import { createTabsFromScenarios } from './scenarios.js';
import mustache from 'mustache';

import './hgn-sketch.less';

export class HgnSketchComponent extends HTMLElement {
  constructor () {
    super ();
  }

  connectedCallback () {
    console.log ('connected');
    this.innerHTML = createHtml ();
    this.classList.add ('hgn-sketch', 'app', 'root');
  }
}

export function createHtml (data = {}) {
  let html, sketch;
  sketch = getSketch ();
  data.name = 'bob';
  data.markdown = sketch.markdown;
  createTabsFromScenarios ({ sketch, data });

  html = mustache.render (TEMPLATE, data);
  return html;
}


export const TEMPLATE = `
<div class="hgn-main-component uk-card uk-card-default uk-card-small uk-card-body">
  <div class="hgn-sketch app title">
    <nav aria-label="Breadcrumb">
      <ul class="uk-breadcrumb">
        <li><a href="/">Home</a></li>
        <li><a href="https://blender.org" target="_blank">Sketch: FFAM-26601</a></li>
        <li><span>Hide Redundant Nest Payment Card on Loan Overview</span></li>
      </ul>
    </nav>
    <ul uk-accordion>
      <li class="">
        <div class="uk-accordion-title" href="#">
        </div>
        <div class="uk-accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="body">
    <ul uk-tab>
      {{{ tabs }}}
    </ul>
    <ul class="uk-switcher uk-margin">
      {{{ panels }}}
    </ul>
  </div>
</div>
`;
