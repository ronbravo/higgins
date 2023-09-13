import './component/higgins/index.js';

export async function start () {
  let dom;
  dom = document.querySelector('#app');
  if (dom) {
    dom.innerHTML = '<hgn-higgins-app></hgn-higgins-app>';
  }
}

start ();
