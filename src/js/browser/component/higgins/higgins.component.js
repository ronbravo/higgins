import './higgins.less';

export class HigginsComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('connected');
    this.innerHTML = TEMPLATE;
    this.classList.add('hgn-higgins', 'app', 'root');
  }
}

export const TEMPLATE = `
<div class="hgn-main-component uk-card uk-card-default uk-card-small uk-card-body">
  <div class="hgn-higgins app title">
    <h2>Sketch</h2>
    <div class="description">
      <a href="https://blender.org">FFAM-26601</a>
      <span>Hide Redundant Nest Payment Card on Loan Overview</span>
    </div>
  </div>
  <div class="body">
    <ul uk-tab>
      <li><a href="#">Scenario 1</a></li>
      <li><a href="#">Scenario 2</a></li>
      <li><a href="#">Scenario 3</a></li>
      <li><a href="#">Scenario 4</a></li>
    </ul>
    <ul class="uk-switcher uk-margin">
      <li>
        <div class="hgn-preview app">
          <div class="hgn-preview sidebar">
            <div>Markdown</div>
          </div>
          <div class="hgn-preview main">
            <ul class="uk-tab-bottom uk-flex-right" uk-tab>
              <li><a href="#">vitejs</a></li>
              <li><a href="#">webpack</a></li>
            </ul>
            <ul class="uk-switcher uk-margin">
              <li><iframe src="http://localhost:3001/"></iframe></li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
          </div>
        </div>
      </li>
      <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
      <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
      <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
    </ul>
  </div>
</div>
`;