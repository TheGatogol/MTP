module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado,
    [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: 'App BBVA Mexico'
  };
  const HUELLA_PAGEVIEW = {
    action: LITERALS.actions.mark,
    type: LITERALS.types.view,
    digitalData: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'permisos aplicacion',
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:permisos aplicacion'
    }
  };
  const MODAL_HELP_VIEW = {
    action: LITERALS.actions.mark,
    type: LITERALS.types.view,
    digitalData: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'permisos aplicacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'info',
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:permisos aplicacion:info'
    }
  };
  return {
    HUELLA_PAGEVIEW,
    MODAL_HELP_VIEW
  };

};