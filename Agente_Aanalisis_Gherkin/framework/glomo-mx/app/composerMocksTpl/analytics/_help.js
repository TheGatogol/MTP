const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');

const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: 'publica',
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'general',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'servicios digitales',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'linea bbva',
  [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: 'online',
  [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
  [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: 'BBVA Mexico',
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: 'llamar a linea bbva',
  [CONSTANTS.USER_USERSTATE]: 'no logado'
};

const PAGE_VIEW = {
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON
  }
};

const EXTERNAL_LINK = {
  type: LITERALS.types.link,
  action: LITERALS.actions.externalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON
  }
};

module.exports = () => ({
  PAGE_VIEW,
  EXTERNAL_LINK
});