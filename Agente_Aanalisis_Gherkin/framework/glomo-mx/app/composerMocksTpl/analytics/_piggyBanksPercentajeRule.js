/* eslint-disable no-use-before-define */
module.exports = () => {
  const analyticsFeatureFlag = 'piggyBanksPercentageRule';
  const _setFeatureFlag = (...data) => getAnalyticFeatureFlag(analyticsFeatureFlag, ...data);
  const {
    getOnClickStart,
    getPageVisit,
    getAppStartedWithLevel2,
    getAppStep,
    getAppCompletedRaw,
    getAnalyticFeatureFlag
  } = require('./common/_utils');
  const {
    commons: { private: _private, online, information, persons, account, onboarding, createPocket, confirmation,
      rejected, successfulPage, transaction, operative, pockets, cards, refused,
      creditCards, approve }, sections: { glomo }, applicationName: { automaticContributionSection }
  } = require('./common/_literals');
  const { PAGE_PAGEINFO_AREA, PAGE_PAGEINFO_PAGEINTENT, PAGE_PAGEINFO_PAGESEGMENT,
    PAGE_PAGEINFO_PROJECTNAME, PAGE_PAGEINFO_LEVEL1, APPLICATION_APPLICATION_NAME, APPLICATION_STATE,
    PRODUCT_STATE, APPLICATION_APPLICATION_TYPE, APPLICATION_FULLFILMENT, APPLICATION_GLOBAL_APPLICATION,
    PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY, PAGE_PAGEINFO_LEVEL2, PAGE_PAGEINFO_LEVEL3, APPLICATION_STEP,
    PRODUCT_ATTRIBUTES_PRODUCT_NAME, PRODUCT_PRODUCT_1_PRIMARY_CATEGORY, PRODUCT_PRODUCT_1_RATE_STATE,
    PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION, PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE_DESTINATION
  } = require('./common/_constants');
  const common = {
    [PAGE_PAGEINFO_AREA]: _private,
    [PAGE_PAGEINFO_PAGEINTENT]: information,
    [PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [PAGE_PAGEINFO_PROJECTNAME]: glomo,
    [PAGE_PAGEINFO_LEVEL1]: account,
    [APPLICATION_APPLICATION_NAME]: automaticContributionSection,
    [APPLICATION_APPLICATION_TYPE]: operative,
    [APPLICATION_FULLFILMENT]: online,
    [APPLICATION_GLOBAL_APPLICATION]: pockets,
    [PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: account
  };
  const commonCompleted = {
    [PAGE_PAGEINFO_LEVEL2]: automaticContributionSection,
    [PAGE_PAGEINFO_LEVEL3]: successfulPage,
    [PAGE_PAGEINFO_PAGEINTENT]: transaction,
    [APPLICATION_APPLICATION_NAME]: automaticContributionSection,
    [APPLICATION_GLOBAL_APPLICATION]: pockets,
    [APPLICATION_APPLICATION_TYPE]: operative,
    [APPLICATION_STEP]: successfulPage,
    [APPLICATION_FULLFILMENT]: online,
    [PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: cards,
    [PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION]: { bind: 'cardName' },
    [PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE_DESTINATION]: creditCards,
    [PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: account
  };
  const dynamicDataPageName = {
    [PAGE_PAGEINFO_LEVEL2]: automaticContributionSection,
    [PAGE_PAGEINFO_PAGEINTENT]: transaction,
    [PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: account
  };
  const appCompletedSuccess = {
    ...common,
    ...commonCompleted,
    [APPLICATION_STATE]: approve,
    [PRODUCT_STATE]: approve,
    [PRODUCT_PRODUCT_1_RATE_STATE]: approve
  };
  const appCompletedRejected = {
    ...common,
    ...commonCompleted,
    [APPLICATION_STATE]: refused,
    [PRODUCT_STATE]: rejected,
    [PRODUCT_PRODUCT_1_RATE_STATE]: rejected
  };
  const fullData = {
    ...common,
    ...dynamicDataPageName
  };
  const clickstart = _setFeatureFlag(getOnClickStart('', information, {
    ...common,
    [PAGE_PAGEINFO_LEVEL2]: 'apartado',
    [PAGE_PAGEINFO_LEVEL3]: onboarding,
    [PAGE_PAGEINFO_PAGEINTENT]: information,
    [APPLICATION_STEP]: createPocket
  }));
  const pageVisit = _setFeatureFlag(getPageVisit('', {
    ...fullData,
    [PAGE_PAGEINFO_LEVEL3]: '1 datos del apartado',
    [APPLICATION_STEP]: '1 datos del apartado'
  }));
  const appStarted = _setFeatureFlag(getAppStartedWithLevel2(pockets, {
    ...fullData,
    [PAGE_PAGEINFO_LEVEL3]: '1 datos del apartado',
    [APPLICATION_STEP]: 'seleccion tarjeta',
    [PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' }
  }));
  const appStepConfirmation = _setFeatureFlag(getAppStep('2', {
    ...fullData,
    [PAGE_PAGEINFO_LEVEL3]: `2 ${confirmation}`,
    [APPLICATION_STEP]: `2 ${confirmation}`,
    [PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: cards,
    [PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION]: { bind: 'cardName' },
    [PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE_DESTINATION]: creditCards
  }));
  const appCompleted = _setFeatureFlag(getAppCompletedRaw(appCompletedSuccess));
  const operationError = _setFeatureFlag(getAppCompletedRaw(appCompletedRejected));
  return {
    clickstart,
    pageVisit,
    appStarted,
    appStepConfirmation,
    operationError,
    appCompleted
  };
};
