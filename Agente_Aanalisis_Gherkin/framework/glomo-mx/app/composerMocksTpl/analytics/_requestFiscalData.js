module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const PAGE_VIEW_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.editTaxData,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const COMMON = {
    ...PAGE_VIEW_COMMON,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.taxDocumentation,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.editTaxData,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.applicationName.selfManagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };
  const COMPLETED_SUCCESS = {
    ...COMMON,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.ended,
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.commons.token
  };
  const _dynamicStep = (text) => ({ [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: text, [CONSTANTS.APPLICATION_STEP]: text });
  const APP_ON_CLICK_START = UTILS.getOnClickStart(LITERALS.commons.myprofile, LITERALS.commons.information, COMMON, {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.myprofile,
    [CONSTANTS.USER_PROFILE_ID]: {
      bind: 'userProfileId'
    }
  });
  const APP_PAGE_VISIT = UTILS.getAppPageVisitLevel2('1 ' + LITERALS.commons.taxReform, COMMON);
  const COMMON_APP_STARTED = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 ' + LITERALS.commons.taxReform
  };
  const APP_STARTED = UTILS.getDynamicAppStarted('', COMMON_APP_STARTED);
  const _appStep = (stepNumber, text) => {
    return UTILS.getAppStep(stepNumber, {
      ...COMMON,
      ..._dynamicStep(text)
    });
  };
  const APP_COMPLETED  = UTILS.getAppCompletedRaw(_dynamicStep(LITERALS.commons.successfulPage), COMPLETED_SUCCESS);
  const HUELLA_INFO_MODAL = UTILS.getAdvancedFootprintWithLevel2(LITERALS.commons.taxRegimeInformation, PAGE_VIEW_COMMON);
  const HUELLA_GENERIC_ERROR = UTILS.getAdvancedFootprintError(LITERALS.commons.serviceError, PAGE_VIEW_COMMON, {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.serviceError
  });
  [
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    _appStep,
    APP_COMPLETED,
    HUELLA_INFO_MODAL,
    HUELLA_GENERIC_ERROR
  ].forEach(key => UTILS.getAnalyticFeatureFlag(LITERALS.featureFlag.taxData, key));
  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    _appStep,
    APP_COMPLETED,
    HUELLA_INFO_MODAL,
    HUELLA_GENERIC_ERROR
  };
};
