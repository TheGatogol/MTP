module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'preguntas frecuentes',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.commons.glomo
  };

  const PAGE_COMMON_CLICK_START = {
    ...PAGE_COMMON,
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: {
      bind: 'name'
    },
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operativa
  };

  const PAGE_VIEW_FIRST = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON
    }
  };

  const PAGE_VIEW_CLICK = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {
        bind: 'pageName'
      }
    }
  };

  const APP_ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON_CLICK_START,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {
        bind: 'pageName'
      },
      [CONSTANTS.APPLICATION_STEP]: {
        bind: 'pageName'
      },
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
        bind: 'glAp'
      }
    }
  };

  return {
    PAGE_VIEW_FIRST,
    PAGE_VIEW_CLICK,
    APP_ON_CLICK_START
  };
};