import page from 'page';
import './component/index.js';

const shared = {
  appDom: null,
}

export async function start () {

  shared.appDom = document.querySelector ('#app');
  if (shared.appDom) {
    page ('/', indexPage);
    page ('/sketch', sketchPage);
    page ();
    // page('/user/:user', show)
    // page('/user/:user/edit', edit)
    // page('/user/:user/album', album)
    // page('/user/:user/album/sort', sort)
    // page('*', notfound)
  }
}

start ();

export function indexPage() {
  shared.appDom.innerHTML = '<hgn-dashboard></hgn-dashboard>';
}

export function sketchPage() {
  shared.appDom.innerHTML = '<hgn-sketch></hgn-sketch>';
}
