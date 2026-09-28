/* eslint-disable camelcase */
module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');
  const _set_feature_flags = (featureFlag, analytic) => (UTILS.getAnalyticFeatureFlag(featureFlag, analytic));
  const FEATURE_FLAG = 'addVideoSelfie';
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'validar identificacion',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'video selfie'
  };
  const PAGE_COMMON = {
    ...COMMON,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'customer validation',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'validar identificacion',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.selfManagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };
  const BIND_LITERALS = {
    INTERACTION_DOCUMENT: LITERALS.videoSelfie.removeIne,
    INTERACTION_SELFIE: LITERALS.videoSelfie.removeSelfie,
    INTERACTION_VIDEO: LITERALS.videoSelfie.removeVideoSelfie,
    UNFINISHED_OPERATION_ERROR: LITERALS.commons.operationNotDone,
    INFORMATION_ERROR: LITERALS.videoSelfie.informationError,
    IDENTITY_VALIDATION_ERROR: LITERALS.videoSelfie.identityValidationError,
    VALIDATE_CREDENTIAL_ERROR: LITERALS.videoSelfie.validateCredentialError
  };
  const APP_PAGE_VISIT = UTILS.getPageVisitWithLevel3('1 ' + LITERALS.commons.add, PAGE_COMMON);
  const APP_STARTED = UTILS.getStaticAppStarted('tu ine o ife', '1 ' + LITERALS.commons.add, PAGE_COMMON);
  const APP_COMPLETED = UTILS.getAppCompleted(LITERALS.commons.successfulPage, LITERALS.commons.ended, PAGE_COMMON);
  const INTERACTION_LINK = UTILS.getInteractionLinkWithLevel3('1 ' + LITERALS.commons.add, {
    ...COMMON,
    [CONSTANTS.APPLICATION_INTERACTION_LEVEL]: {
      bind: 'interaction'
    }
  });
  const get_app_step_with_level3 = (numberStep, appStep) => _set_feature_flags(FEATURE_FLAG, UTILS.getAppStepWithLevel3(numberStep, appStep, PAGE_COMMON));
  const get_advanced_foot_print_level3 = (level3) => _set_feature_flags(FEATURE_FLAG, UTILS.getAdvancedFootprintWithLevel3(level3, COMMON));
  const error_page_view = (flag) => _set_feature_flags(FEATURE_FLAG + '.' + flag, UTILS.getError({ bind: 'errorPage' }, COMMON));
  [
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED,
    INTERACTION_LINK
  ].forEach(item => _set_feature_flags(FEATURE_FLAG, item));
  return {
    BIND_LITERALS,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED,
    INTERACTION_LINK,
    get_app_step_with_level3,
    get_advanced_foot_print_level3,
    error_page_view
  };
};