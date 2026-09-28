const {
  getOnClickStart,
  getPageVisit,
  getAppStartedWithLevel2,
  getAdvancedFootprintWithLevel2,
  getAnalyticFeatureFlag,
  getAppCompletedRaw
} = require('./common/_utils');
const { highRiskClient, commons, sections, errors } = require('./common/_literals');
const constants = require('./common/_constants');

const highRiskClientFeatureFlag = 'kycHighRisk';

const highRiskClientFootprintFeatureFlag = 'kycHighRisk.footprint';
const RELACIONES_FINANCIERAS = `1 ${highRiskClient.financialRelations}`;
const PUBLIC_ACTIVITY = `2 ${highRiskClient.publicActivity}`;

const commonsHighRiskClient = {
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
  [constants.PAGE_PAGEINFO_BUSINESSUNIT]: commons.bbvaMexico,
  [constants.PAGE_PAGEINFO_AREA]: commons.private,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.glomo,
  [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
};

const commonsHighRiskClientValidation = {
  ...commonsHighRiskClient,
  [constants.APPLICATION_FULLFILMENT]: commons.onlineOffline,
  [constants.APPLICATION_GLOBAL_APPLICATION]: sections.financialHabits,
  [constants.APPLICATION_APPLICATION_TYPE]: commons.autogestion,
  [constants.APPLICATION_APPLICATION_NAME]: highRiskClient.highRiskValidation,
  [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: commons.account
};

const commonsHighRiskClientAppStarted = {
  ...commonsHighRiskClientValidation,
  [constants.PAGE_PAGEINFO_LEVEL1]: highRiskClient.highRiskValidation,
  [constants.PAGE_PAGEINFO_LEVEL2]: RELACIONES_FINANCIERAS
};

const commonsHighRiskClientFootprint = {
  ...commonsHighRiskClient,
  [constants.PAGE_PAGEINFO_LEVEL1]: highRiskClient.highRiskValidation,
  [constants.USER_SEGMENT_PROFILE]: { bind: 'segmentProfile' }
};

const appPageVisit = {
  [constants.PAGE_PAGEINFO_LEVEL1]: highRiskClient.highRiskValidation,
  [constants.PAGE_PAGEINFO_LEVEL2]: RELACIONES_FINANCIERAS,
  [constants.APPLICATION_STEP]: RELACIONES_FINANCIERAS,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' }
};

const appStartedLink = {
  [constants.APPLICATION_STEP]: commons.privacyAdvice,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' }
};

const appStartedButton = {
  [constants.APPLICATION_STEP]: commons.continue,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' }
};

const appStepPublicActivity = {
  [constants.PAGE_PAGEINFO_LEVEL2]: PUBLIC_ACTIVITY,
  [constants.APPLICATION_STEP]: PUBLIC_ACTIVITY
};

const appCompleted = {
  [constants.PAGE_PAGEINFO_LEVEL2]: commons.successfulPage,
  [constants.APPLICATION_STEP]: commons.successfulPage,
  [constants.APPLICATION_STATE]: commons.ended,
  [constants.PRODUCT_STATE]: commons.ended
};

const footprintPageViewOperationNotAvailable = {
  [constants.PAGE_PAGEINFO_LEVEL2]: errors.errorOperationNotAvailable,
  [constants.PAGE_PAGEINFO_ERRORPAGE]: errors.errorOperationNotAvailable
};

const footprintPageViewGoToBranch = {
  [constants.PAGE_PAGEINFO_LEVEL2]: errors.goToBranch,
  [constants.PAGE_PAGEINFO_ERRORPAGE]: errors.goToBranch
};

const footprintPageViewAccessToDocuments = {
  [constants.PAGE_PAGEINFO_LEVEL2]: highRiskClient.accessToDocuments,
  [constants.PAGE_PAGEINFO_ERRORPAGE]: highRiskClient.accessToDocuments
};

const footprintPageViewSectionNotSaved = {
  [constants.PAGE_PAGEINFO_LEVEL2]: errors.sectionNotSaved,
  [constants.PAGE_PAGEINFO_ERRORPAGE]: errors.sectionNotSaved
};

module.exports = () => {
  const baseConfig = {
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_AREA]: commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.glomo,
    [constants.APPLICATION_GLOBAL_APPLICATION]: sections.financialHabits,
    [constants.APPLICATION_APPLICATION_TYPE]: commons.autogestion,
    [constants.APPLICATION_APPLICATION_NAME]: highRiskClient.highRiskValidation,
    [constants.PAGE_PAGEINFO_LEVEL1]: commons.profile,
    [constants.APPLICATION_FULLFILMENT]: commons.onlineOffline
  };

  const getAppOnClickStartMyProfile = getOnClickStart(commons.profile, commons.profile, {
    ...baseConfig,
    [constants.APPLICATION_STEP]: commons.profile
  });

  const getAppPageVisit = getPageVisit(RELACIONES_FINANCIERAS, {
    ...commonsHighRiskClientValidation,
    ...appPageVisit
  });

  const getAppStartedLink = getAppStartedWithLevel2(RELACIONES_FINANCIERAS, {
    ...commonsHighRiskClientAppStarted,
    ...appStartedLink
  });

  const getAppStartedButton = getAppStartedWithLevel2(RELACIONES_FINANCIERAS, {
    ...commonsHighRiskClientAppStarted,
    ...appStartedButton
  });

  const getAppStepPublicActivity = getPageVisit(PUBLIC_ACTIVITY, {
    ...commonsHighRiskClientAppStarted,
    ...appStepPublicActivity
  });

  const getAppCompleted = getAppCompletedRaw(commons.successfulPage, {
    ...commonsHighRiskClientAppStarted,
    ...appCompleted
  });

  const getFootprintPageViewUsingYourAccount = getAdvancedFootprintWithLevel2(highRiskClient.usingYourAccount, {
    ...commonsHighRiskClientFootprint,
    [constants.PAGE_PAGEINFO_LEVEL2]: highRiskClient.usingYourAccount
  });

  const getFootprintPageViewPersonalInformation = getAdvancedFootprintWithLevel2(commons.personalInformation, {
    ...commonsHighRiskClientFootprint,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.personalInformation
  });

  const getFootprintPageViewWorkAndIncome = getAdvancedFootprintWithLevel2(highRiskClient.workIncome, {
    ...commonsHighRiskClientFootprint,
    [constants.PAGE_PAGEINFO_LEVEL2]: highRiskClient.workIncome
  });

  const getFootprintPageViewPrivacyNotice = getAdvancedFootprintWithLevel2(commons.privacyAdvice, {
    ...commonsHighRiskClientFootprint,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.privacyAdvice
  });

  const getFootprintPageViewOperationNotAvailable = getAdvancedFootprintWithLevel2(errors.errorOperationNotAvailable, {
    ...commonsHighRiskClientFootprint,
    ...footprintPageViewOperationNotAvailable
  });

  const getFootprintPageViewGoToBranch = getAdvancedFootprintWithLevel2(errors.goToBranch, {
    ...commonsHighRiskClientFootprint,
    ...footprintPageViewGoToBranch
  });

  const getFootprintPageViewAccessToDocuments = getAdvancedFootprintWithLevel2(highRiskClient.accessToDocuments, {
    ...commonsHighRiskClientFootprint,
    ...footprintPageViewAccessToDocuments
  });

  const getFootprintPageViewSectionNotSaved = getAdvancedFootprintWithLevel2(errors.sectionNotSaved, {
    ...commonsHighRiskClientFootprint,
    ...footprintPageViewSectionNotSaved
  });

  const getFootprintPageViewRequirements = getAdvancedFootprintWithLevel2(highRiskClient.documentUploadRequirements, {
    ...commonsHighRiskClientFootprint,
    [constants.PAGE_PAGEINFO_LEVEL2]: highRiskClient.documentUploadRequirements
  });

  [
    getAppOnClickStartMyProfile,
    getAppPageVisit,
    getAppStartedLink,
    getAppStartedButton,
    getAppStepPublicActivity,
    getAppCompleted
  ].forEach(analytic => getAnalyticFeatureFlag(highRiskClientFeatureFlag, analytic));

  [
    getFootprintPageViewUsingYourAccount,
    getFootprintPageViewPersonalInformation,
    getFootprintPageViewWorkAndIncome,
    getFootprintPageViewPrivacyNotice,
    getFootprintPageViewOperationNotAvailable,
    getFootprintPageViewGoToBranch,
    getFootprintPageViewAccessToDocuments,
    getFootprintPageViewSectionNotSaved,
    getFootprintPageViewRequirements
  ].forEach(analytic => getAnalyticFeatureFlag(highRiskClientFootprintFeatureFlag, analytic));

  return {
    getAppOnClickStartMyProfile,
    getAppPageVisit,
    getAppStartedLink,
    getAppStartedButton,
    getFootprintPageViewUsingYourAccount,
    getFootprintPageViewPersonalInformation,
    getFootprintPageViewWorkAndIncome,
    getAppStepPublicActivity,
    getAppCompleted,
    getFootprintPageViewPrivacyNotice,
    getFootprintPageViewOperationNotAvailable,
    getFootprintPageViewGoToBranch,
    getFootprintPageViewAccessToDocuments,
    getFootprintPageViewSectionNotSaved,
    getFootprintPageViewRequirements
  };
};