import './hgn-dashboard.less';

export class HgnDashboardComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('connected');
    this.innerHTML = TEMPLATE;
    // this.classList.add('hgn-higgins', 'app', 'root');
  }
}

export const TEMPLATE = `
<div>dashboard</div>
<div>
  <a href="/sketch">Sketch</a>
</div>
<div class="uk-width-1-2@s uk-width-2-5@m">
    <ul class="uk-nav-default" uk-nav="multiple: true">
        <li class="uk-active"><a href="#">Active</a></li>
        <li class="uk-parent">
            <a href="#">Parent <span uk-nav-parent-icon></span></a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li>
                    <a href="#">Sub item</a>
                    <ul>
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="uk-parent">
            <a href="#">Parent <span uk-nav-parent-icon></span></a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
    </ul>
</div>
`;
