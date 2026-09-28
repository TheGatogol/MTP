'use strict';
var getPages = CONFIG => fromPage => {
  const routes = CONFIG.routes;
  const preRenderPages = CONFIG.preRenderPages;

  let pages = {};

  (preRenderPages[fromPage] || []).forEach(el => pages[el] = { url: routes[el] });

  return pages;

};

module.exports =  getPages;