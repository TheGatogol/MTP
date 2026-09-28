/* eslint-disable no-shadow */
const CONSTANTS = require('./common/_constants');
const { featureFlag } = require('./common/_literals');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');
const featureFlagsSos = (featureFlag, analytic) => (UTILS.getAnalyticFeatureFlag(featureFlag, analytic));
const featureFlagsSosError = (featureFlagsSos, analytic) => (UTILS.getAnalyticFeatureFlagError(featureFlag, analytic));

module.exports = () => {
  const EMERGENCY_REPORTS_FLAGS = 'emergencyReports';
  const EMERGENCY_REPORTS_FLAGS_LINKS = 'emergencyReports.links';

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.loggedIn,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency
  };

  const EMERGENCY_REPORTS_MODAL_ATM = {
    ...PAGE_COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'cajero automatico no entrego efectivo'
  };

  const APP_ONCLICK_OPTIONS_CARD = featureFlagsSos(EMERGENCY_REPORTS_FLAGS_LINKS, UTILS.getInternalLinkWithLevel2({ bind: 'linkName' }, { bind: 'level2' }, PAGE_COMMON));

  const APP_ONCLICK_CLOSE_MODAL_ATM = featureFlagsSos(EMERGENCY_REPORTS_FLAGS_LINKS, UTILS.getInternalLink({ bind: 'linkName' }, EMERGENCY_REPORTS_MODAL_ATM));

  const PAGE_VIEW_CHANGE_VEHICLE = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' }
    }
  };

  const PAGE_VIEW_MODAL_ERROR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' },
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: { bind: 'errorPage' }
    }
  };

  const _getAdvancedFootprint = (param) => {
    const typeFootprint = {
      singeFootprintWithLevel2: featureFlagsSos(EMERGENCY_REPORTS_FLAGS, UTILS.getAdvancedFootprintWithLevel2('de que es tu emergencia', PAGE_COMMON)),
      dynamicFootprintWithLevel2: featureFlagsSos(EMERGENCY_REPORTS_FLAGS, UTILS.getAdvancedFootprintWithLevel2({ bind: 'level2' }, PAGE_COMMON)),
      singleFootprint: featureFlagsSos(EMERGENCY_REPORTS_FLAGS, UTILS.getAdvancedFootprint(EMERGENCY_REPORTS_MODAL_ATM)),
      dynamicFootprintWithLevel3: featureFlagsSos(EMERGENCY_REPORTS_FLAGS, PAGE_VIEW_CHANGE_VEHICLE),
      dynamicFootprintWithErrorLevel3: featureFlagsSosError(EMERGENCY_REPORTS_FLAGS, PAGE_VIEW_MODAL_ERROR)
    };
    return typeFootprint[param];
  };

  return {
    APP_ONCLICK_OPTIONS_CARD,
    APP_ONCLICK_CLOSE_MODAL_ATM,
    _getAdvancedFootprint
  };
};


