module.exports = (config) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');

  const COMMON = {
    [CONSTANTS.PAGE_INSTANCE_ID]: config.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
    [CONSTANTS.PAGE_PAGEINFO_SERVER]: config.globalServices.host,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  };

  const INFORMATION = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.vinculateDimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.information
  };
  const AGREE_INFORMATION = utils.getAdvancedFootprint(INFORMATION);

  const ACEPTED = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.vinculateDimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.acceptance
  };
  const AGREE_ACEPTED = utils.getAdvancedFootprint(ACEPTED);

  const USEDDATA = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.vinculateDimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.dataUsageInformation
  };
  const AGREE_USEDDATA = utils.getAdvancedFootprint(USEDDATA);

  const DATAACEPTED = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.vinculateDimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.acceptance,
    [CONSTANTS.APPLICATION_INTERACTION_LEVEL]: LITERALS.commons.agreeToProvideData
  };
  const AGREE_DATAACEPTED = utils.getInteractionLink('', DATAACEPTED);

  const STEP_OTP = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.vinculateDimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.otp
  };
  const AGREE_STEP_OTP = utils.getAdvancedFootprint(STEP_OTP);

  const COMPLETED = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.vinculateDimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulLink
  };
  const AGREE_COMPLETED = utils.getAdvancedFootprint(COMPLETED);

  const SERVICE_ERROR = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.vinculateDimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.serviceError,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.commons.serviceError
  };
  const AGREE_SERVICE_ERROR = utils.getAdvancedFootprint(SERVICE_ERROR);

  const R_ACEPTED = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.desvinculatedimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.acceptance
  };
  const REMOVE_ACEPTED = utils.getAdvancedFootprint(R_ACEPTED);

  const R_USEDDATA = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.desvinculatedimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.dataQuery
  };
  const REMOVE_USEDDATA = utils.getAdvancedFootprint(R_USEDDATA);

  const R_DATAACEPTED = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.desvinculatedimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.acceptance,
    [CONSTANTS.APPLICATION_INTERACTION_LEVEL]: LITERALS.commons.agreeToUnlinkData
  };
  const REMOVE_DATAACEPTED = utils.getInteractionLink('', R_DATAACEPTED);

  const R_CONFIRM = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.desvinculatedimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.confirmUnlinking
  };
  const REMOVE_CONFIRM = utils.getAdvancedFootprint(R_CONFIRM);

  const R_STEP_OTP = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.desvinculatedimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.otp
  };
  const REMOVE_STEP_OTP = utils.getAdvancedFootprint(R_STEP_OTP);

  const R_COMPLETED = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.desvinculatedimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulUnlink
  };
  const REMOVE_COMPLETED = utils.getAdvancedFootprint(R_COMPLETED);

  const R_SERVICE_ERROR = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.desvinculatedimo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.serviceError,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.commons.serviceError
  };
  const REMOVE_SERVICE_ERROR = utils.getAdvancedFootprint(R_SERVICE_ERROR);

  const ANALYTICS_FEATURE_FLAG = {
    key: 'glomo.analytics.dimoConsent',
    defaultValue: true
  };

  [
    AGREE_INFORMATION,
    AGREE_ACEPTED,
    AGREE_USEDDATA,
    AGREE_DATAACEPTED,
    AGREE_STEP_OTP,
    AGREE_COMPLETED,
    AGREE_SERVICE_ERROR,
    REMOVE_ACEPTED,
    REMOVE_USEDDATA,
    REMOVE_DATAACEPTED,
    REMOVE_CONFIRM,
    REMOVE_STEP_OTP,
    REMOVE_COMPLETED,
    REMOVE_SERVICE_ERROR
  ].forEach(item => utils.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));

  return {
    AGREE_INFORMATION,
    AGREE_ACEPTED,
    AGREE_USEDDATA,
    AGREE_DATAACEPTED,
    AGREE_STEP_OTP,
    AGREE_COMPLETED,
    AGREE_SERVICE_ERROR,
    REMOVE_ACEPTED,
    REMOVE_USEDDATA,
    REMOVE_DATAACEPTED,
    REMOVE_CONFIRM,
    REMOVE_STEP_OTP,
    REMOVE_COMPLETED,
    REMOVE_SERVICE_ERROR
  };
};