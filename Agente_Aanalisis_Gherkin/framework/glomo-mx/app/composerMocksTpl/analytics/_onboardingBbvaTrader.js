const constants = require('./common/_constants');
const {
  getOnClickStart,
  getPageVisit,
  getAppStartedWithLevel2,
  getAppStep,
  getAppCompletedRaw,
  getAdvancedFootprintWithLevel3,
  getAdvancedFootprintWithLevel2,
  getDownloadLinkWithLevel2,
  getAdvancedFootprintErrorLevel2,
  getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError
} = require('./common/_utils');
const literals = require('./common/_literals');
module.exports = () => {
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.applicationName.contractInvestments,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
  };
  const commonApplication = {
    ...common,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.contractInvestments,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.hireInvestment,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.investments
  };
  const appOnClickStart = getOnClickStart(
    literals.commons.interestedOportunities,
    literals.commons.information, {
      ...commonApplication,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
      [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication' },
      [constants.APPLICATION_APPLICATION_NAME]: { bind: 'name' },
      [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type' },
      [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
      [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' },
      [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    }
  );
  const onPageInit = getPageVisit('1 ' + literals.commons.oneBenefits,
    {
      ...commonApplication,
      [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
    }
  );
  const invitationAccept = getAppStartedWithLevel2('1 ' + literals.commons.oneBenefits,
    {
      ...commonApplication,
      [constants.APPLICATION_STEP]: literals.commons.continue
    }
  );
  const getApplicationStep = (step, level2Literal, extraFields = {}) => getAppStep(
    step,
    {
      ...commonApplication,
      [constants.APPLICATION_STEP]: step + ' ' + level2Literal,
      [constants.PAGE_PAGEINFO_LEVEL2]: step + ' ' + level2Literal,
      ...extraFields
    }
  );
  const getAppStepBeneficiaries = getApplicationStep('2', literals.sections.recipients);
  const getAppStepTermsAndCondi = getApplicationStep('3', literals.commons.termsAndConditions);
  const getAppStepConfirmation = getApplicationStep('4', literals.commons.confirmation);
  const getAppStepOtp = getApplicationStep('5', literals.commons.otp, {
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });
  const getAppStepAppComplete = getAppCompletedRaw(
    {
      ...commonApplication,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
      [constants.APPLICATION_OPERATION_NUMBER]: {bind: 'operationFolio'},
      [constants.APPLICATION_STATE]: literals.commons.ended,
      [constants.PRODUCT_STATE]: literals.commons.ended
    }
  );
  const getBeneficiaryFootprint = (action) => getAdvancedFootprintWithLevel3(
    action,
    {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: '2 ' + literals.sections.recipients,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    }
  );
  const getAppStepAddBeneficiaries = getBeneficiaryFootprint(literals.commons.add);
  const getAppStepEditBeneficiaries = getBeneficiaryFootprint(literals.commons.modify);
  const getAppStepDeleteBeneficiaries = getBeneficiaryFootprint(literals.commons.remove);
  const getFootprintWithLevel2 = (literal) => getAdvancedFootprintWithLevel2(
    literal,
    {
      ...common,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    }
  );
  const getAppLinkAccount = getFootprintWithLevel2(literals.commons.linkAccount);
  const getAppDownloadPdf = getDownloadLinkWithLevel2(
    { bind: 'titlePdf' },
    '3 ' + literals.commons.termsAndConditions,
    {
      ...common,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    }
  );
  const getServiceError = (errorLiteral) => getAdvancedFootprintErrorLevel2(
    literals.applicationName.contractInvestments,
    errorLiteral,
    {
      ...common,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    }
  );
  const getServiceErrorOtp = getServiceError(literals.errors.operationError);
  [
    appOnClickStart,
    onPageInit,
    invitationAccept,
    getAppStepBeneficiaries,
    getAppStepTermsAndCondi,
    getAppStepConfirmation,
    getAppStepOtp,
    getAppStepAppComplete,
    getAppStepAddBeneficiaries,
    getAppStepEditBeneficiaries,
    getAppStepDeleteBeneficiaries,
    getAppLinkAccount
  ].forEach(item => getAnalyticFeatureFlag('onboardingBbvaTrader', item));
  [
    getServiceErrorOtp
  ].forEach(item => getAnalyticFeatureFlagError('onboardingBbvaTrader', item));
  [
    getAppDownloadPdf
  ].forEach(item => getAnalyticFeatureFlag('onboardingBbvaTrader.customTagging', item));

  return {
    APP_ON_CLICK_START: appOnClickStart,
    onPageInit,
    invitationAccept,
    getAppStepBeneficiaries,
    getAppStepTermsAndCondi,
    getAppStepConfirmation,
    getAppStepOtp,
    getAppStepAppComplete,
    getAppStepAddBeneficiaries,
    getAppStepEditBeneficiaries,
    getAppStepDeleteBeneficiaries,
    getAppLinkAccount,
    getAppDownloadPdf,
    getServiceErrorOtp
  };
};
