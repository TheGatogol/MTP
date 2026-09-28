const _utils = require('./common/_utils');

module.exports = (CONFIG) => {

  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');

  const COMMONS = {

    [CONSTANTS.VERSION]: '20250414_5.0',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'aclaraciones',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: CONFIG.businessUnit,
    [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: CONFIG.siteAppName,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const PAGE_VIEW_IN_PROCESS = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'en proceso'
    }
  };

  const PAGE_VIEW_FINISHED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'terminadas'
    }
  };

  const ANALYTICS_FEATURE_FLAG_CLARIFICATIONS_IN_PROCESS_LIST_CARE = {
    'key': 'glomo.analytics.clarificationsInProcessListCare',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_CLARIFICATIONS_FINISH_LIST_CARE = {
    'key': 'glomo.analytics.clarificationsFinishListCare',
    'defaultValue': true
  };

  _utils.addFeatureFlag(PAGE_VIEW_IN_PROCESS, ANALYTICS_FEATURE_FLAG_CLARIFICATIONS_IN_PROCESS_LIST_CARE);
  _utils.addFeatureFlag(PAGE_VIEW_FINISHED, ANALYTICS_FEATURE_FLAG_CLARIFICATIONS_FINISH_LIST_CARE);

  return {
    PAGE_VIEW_IN_PROCESS,
    PAGE_VIEW_FINISHED
  };
};
