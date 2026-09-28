'use strict';
const constants = require('./common/_constants');
const literals = require('./common/_literals');

const {
  getAdvancedFootprint,
  getError,
  getOnClickStart,
  getPageVisit,
  getAppStarted,
  getAppStep,
  getAppCompleted,
  addFeatureFlag
} = require('./common/_utils');

const analyticCbmFeatureFlag = {
  key: 'glomo.analytics.cardBlockManagement',
  value: true
};
const analyticCbmErrorFeatureFlag = {
  key: 'glomo.analytics.cardBlockManagement.error',
  value: true
};

const commonAdvancedFootprint = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.operative.requestReplacement,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.fulfillmentOn,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments
};

const productDataAndApplicationScheme = {
  ...commonAdvancedFootprint,
  [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.cards,
  [constants.PRODUCT_PRODUCT_SUBTYPE]: { bind: 'productSubtype'},
  [constants.PRODUCT_PRODUCT_NAME]: { bind: 'productName' },
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.operative.replacementCard,
  [constants.APPLICATION_APPLICATION_NAME]: literals.operative.requestReplacement,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn
};

const amount = {
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: { bind: 'currency' }
};

const appPageFootprintNewTargetOption = getAdvancedFootprint({
  ...commonAdvancedFootprint,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.cbm.newCard
});

const appPageFootprintBranchPage = getAdvancedFootprint({
  ...commonAdvancedFootprint,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.cbm.branchLocation
});

const appPageFootprintOperationNotPerformed = getError('', {
  ...commonAdvancedFootprint,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.operationNotDone,
  [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.commons.operationNotDone
});

const appPageFootprintInformationNotAvailable = getError('', {
  ...commonAdvancedFootprint,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
  [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'productSubtype'},
  [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail,
  [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.infoNotAvailable,
  [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.commons.infoNotAvailable
});

const appPageFootprintInformationAddressNotAvailable = getError('', {
  ...commonAdvancedFootprint,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.cbm.addressDelivery,
  [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'unmasked' },
  [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.infoNotLoaded,
  [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.commons.infoNotLoaded
});

const appOnClickStart = getOnClickStart(literals.commons.REQUEST_REPOSITION, literals.commons.information, {
  ...productDataAndApplicationScheme,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
  [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'productSubtype'},
  [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail,
  [constants.PAGE_PAGEINFO_LEVEL4]: literals.cbm.operatives,
  [constants.APPLICATION_STEP]: literals.commons.card_detail,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
});


const appPageVisit = getPageVisit('', {
  ...productDataAndApplicationScheme,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.operative.requestReplacement,
  [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
  [constants.APPLICATION_STEP]: { bind: 'level2' }
});

const appStarted = getAppStarted('', {
  ...productDataAndApplicationScheme,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.operative.requestReplacement,
  [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
  [constants.APPLICATION_STEP]: { bind: 'step' }
});

const getAppStepData = (step) => {
  const stepData = {
    ...productDataAndApplicationScheme,
    ...amount,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
    [constants.APPLICATION_STEP]: { bind: 'level2' },
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constants.APPLICATION_PROCESS]: { bind: 'process' }
  };

  if (step !== '2') {
    stepData[constants.APPLICATION_CUSTOM_FIELDS] = { bind: 'customField' };
  }
  return getAppStep(step, stepData);
};

const appOtpFootprint = getAdvancedFootprint({
  ...commonAdvancedFootprint,
  [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'otpType' },
  [constants.PAGE_PAGEINFO_LEVEL2]: 'otp'
});

const appCompleted = getAppCompleted('', literals.commons.ended, {
  ...productDataAndApplicationScheme,
  ...amount,
  [constants.APPLICATION_STEP]: literals.commons.successfulPage,
  [constants.APPLICATION_STATE]: literals.commons.ended,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
  [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
  [constants.APPLICATION_PROCESS]: { bind: 'process' },
  [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
});

[
  appPageFootprintNewTargetOption,
  appPageFootprintBranchPage,
  appPageVisit,
  appCompleted,
  appStarted,
  appOnClickStart,
  appOtpFootprint
].forEach(element => addFeatureFlag(element, analyticCbmFeatureFlag));

[
  appPageFootprintInformationNotAvailable,
  appPageFootprintOperationNotPerformed,
  appPageFootprintInformationAddressNotAvailable
].forEach(element => addFeatureFlag(element, analyticCbmErrorFeatureFlag));

module.exports = {
  getAppStepData,
  appPageFootprintNewTargetOption,
  appPageFootprintBranchPage,
  appPageVisit,
  appCompleted,
  appStarted,
  appOnClickStart,
  appOtpFootprint,
  appPageFootprintInformationNotAvailable,
  appPageFootprintOperationNotPerformed,
  appPageFootprintInformationAddressNotAvailable
};
