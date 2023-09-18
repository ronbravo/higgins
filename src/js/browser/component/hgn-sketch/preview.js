
export function createTabs () {}

export function createPanels () {}


export const TAB_TEMPLATE = `<li><a href="#">{{ name }}</a></li>`;

export const PANEL_TEMPLATE = `<li><iframe src="{{ url }}"></iframe></li>`;


export const OLD_PANEL_TEMPLATE = `
<li>
  <div class="hgn-preview app">
    <div class="hgn-preview sidebar">
      <div class="">
        {{{scenario}}}
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
