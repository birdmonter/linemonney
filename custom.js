eruda.init({
  // tool: [ ]
});
eruda.add(erudaDom);

let dom = eruda.get('dom')._$el;
el_dom = dom
  .parent()
  .parent()
  .find(
    'div.eruda-nav-bar-container > div.eruda-nav-bar > div:nth-child(8)',
  )[0];
el_con = dom
  .parent()
  .parent()
  .find(
    'div.eruda-nav-bar-container > div.eruda-nav-bar > div:nth-child(1)',
  )[0];
el_dom.parentNode.insertBefore(el_dom, el_con);
