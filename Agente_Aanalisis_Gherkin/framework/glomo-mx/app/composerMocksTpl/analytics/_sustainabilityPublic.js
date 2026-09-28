const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');


const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'sostenibilidad',
  [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
  [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
  [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: 'online',
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
  [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: 'online',
  [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
  [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: 'BBVA Mexico',
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.USER_USERSTATE]: 'logado'
};

const PAGE_VIEW = {
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'dashboard',
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:sostenibilidad:dashboard'
  }
};

const PAGE_NEWS = {
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'noticias',
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:sostenibilidad:noticias'
  }
};

const PAGE_GLOSSARY = {
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'glosario',
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:sostenibilidad:glosario'
  }
};

module.exports = () => ({
  PAGE_VIEW,
  PAGE_NEWS,
  PAGE_GLOSSARY
});