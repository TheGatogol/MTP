const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAdvancedFootprintWithLevels2And3,
  getAdvancedFootprintWithLevel2,
  getInternalLinkWithLevel2,
  getAnalyticFeatureFlag,
  getAppCompletedRaw,
  getAppStep
} = require('./common/_utils');

module.exports = () => {
  const internationalTransfersContact  = 'internationalTransfersContacts';
  const internationalTransfersContactLinks = 'internationalTransfersContacts.links';

  const pageCommonInternational = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_USERSTATE]: literals.commons.loggedIn,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.operative.transferInternational
  };

  const stepCommonInternationalLevelTwo = {
    ...pageCommonInternational,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.internationalTransfers,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.internationalTransfers,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: {bind: 'level2'},
    [constants.APPLICATION_STEP]: {bind: 'level2'}
  };

  const commonDataApplication = {
    ...stepCommonInternationalLevelTwo,
    [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'},
    [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'}
  };

  const commonDataWithProcess = {
    ...commonDataApplication,
    [constants.APPLICATION_PROCESS]: {bind: 'process'},
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'productAmount'},
    [constants.PRODUCT_QUANTITY]: {bind: 'productQuantity'},
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: {bind: 'productCurrency'}
  };

  const commonDataConfirmation = {
    ...commonDataWithProcess,
    [constants.APPLICATION_OFFER]: {bind: 'offer'}
  };

  const commonDataWithCompleted = {
    ...commonDataConfirmation,
    [constants.APPLICATION_STATE]: {bind: 'state'},
    [constants.APPLICATION_OPERATION_NUMBER]: {bind: 'operationNumber'}
  };

  const stepTwoDestination = getAnalyticFeatureFlag(internationalTransfersContact, getAppStep('2', {...stepCommonInternationalLevelTwo}));
  const stepThreeEconomic = getAnalyticFeatureFlag(internationalTransfersContact, getAppStep('3', {...commonDataApplication}));
  const stepFourImport = getAnalyticFeatureFlag(internationalTransfersContact, getAppStep('4', {...commonDataApplication}));
  const stepFiveConcept = getAnalyticFeatureFlag(internationalTransfersContact, getAppStep('5', {...commonDataWithProcess}));
  const stepSixConfirmation = getAnalyticFeatureFlag(internationalTransfersContact, getAppStep('6', {...commonDataConfirmation}));
  const stepSevenOtp = getAnalyticFeatureFlag(internationalTransfersContact, getAppStep('7', {...commonDataConfirmation}));
  const viewComplete = getAnalyticFeatureFlag(internationalTransfersContact, getAppCompletedRaw(commonDataWithCompleted));
  const internalLinkContact = getAnalyticFeatureFlag(internationalTransfersContactLinks, getInternalLinkWithLevel2({bind: 'linkName'}, {bind: 'level2'}, pageCommonInternational));
  const pageViewLevelTwo =  getAnalyticFeatureFlag(internationalTransfersContact, getAdvancedFootprintWithLevel2({bind: 'level2'}, pageCommonInternational));
  const pageViewLevelThree = getAnalyticFeatureFlag(internationalTransfersContact, getAdvancedFootprintWithLevels2And3({bind: 'level2'}, {bind: 'level3'}, pageCommonInternational));

  return {
    internalLinkContact,
    stepTwoDestination,
    stepThreeEconomic,
    stepFourImport,
    stepFiveConcept,
    stepSixConfirmation,
    stepSevenOtp,
    pageViewLevelTwo,
    pageViewLevelThree,
    viewComplete
  };
};