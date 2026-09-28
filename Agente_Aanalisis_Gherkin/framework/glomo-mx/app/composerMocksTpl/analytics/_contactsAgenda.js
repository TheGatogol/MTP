module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');

  const bindLiterals = {
    PROJECT_NAME_GLOMO: LITERALS.sections.glomo,
    PROJECT_NAME_GLOMO_ALWAYSON: LITERALS.sections.glomoAlwaysOn
  };

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_SYSENV]: 'app',
    'page.pageInfo.server': 'window.location.hostname',
    [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: 'BBVA Mexico',
    'page.pageInfo.siteAppName': 'App BBVA Mexico',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const TRANSFERSAVEDCONTACTS = {
    ..._COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'transferencias',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'contactos guardados'
  };

  const SIDEBARSAVEDCONTACTS = {
    ..._COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'contactos guardados'
  };

  const PAGE_VIEW_1 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...TRANSFERSAVEDCONTACTS,
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: {
        bind: 'pagePageInfoProjectName'
      }
    }
  };

  const PAGE_VIEW_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...SIDEBARSAVEDCONTACTS
    }
  };

  return {
    PAGE_VIEW_1,
    PAGE_VIEW_2,
    bindLiterals
  };
};