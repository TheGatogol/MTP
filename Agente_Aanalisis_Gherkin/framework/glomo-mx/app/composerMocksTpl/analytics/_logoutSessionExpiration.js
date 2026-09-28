module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_SYSENV]: 'app',
    'page.pageInfo.server': 'window.location.hostname',
    [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: 'BBVA Mexico',
    'page.pageInfo.siteAppName': 'App BBVA Mexico',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: 'no logado'
  };

  const LOGOUT = {
    ..._COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: {bind: 'level1'}
  };

  const LOGOUT_LINK = {
    type: LITERALS.types.link,
    action: LITERALS.actions.logout,
    [CONSTANTS.DATALAYER_NAME]: {
      ...LOGOUT
    }
  };

  return {
    LOGOUT_LINK
  };
};
