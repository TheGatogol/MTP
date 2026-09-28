module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {addFeatureFlag, getPageVisitWithLevel3, getPageVisitRaw, getAppStarted, getAppCompletedRaw, getSiteError} = require('./common/_utils');

  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_LANGUAGE]: literals.commons.language,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentsFunds,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.increaseFund,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.btrader.buyTitles,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    ['user.device.root']: 'no root'
  };

  const applicationCommon = {
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.increaseFund,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.fundsContribution,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.PRODUCT_PRODUCT_SUBTYPE]: literals.commons.investmentFunds
  };

  const successState = {
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'amount'},
    [constants.APPLICATION_CURRENCY]: {bind: 'currency'}
  };

  const analyticsFeatureFlag = {
    analyticsFeatureFlagFunel: {
      'key': 'glomo.analytics.investmentfunds.fundTransactionServicingFundsContribution.funel',
      'defaultValue': true
    },
    analyticsFeatureFlagErrors: {
      'key': 'glomo.analytics.investmentfunds.fundTransactionServicingFundsContribution.errors',
      'defaultValue': true
    }
  };

  const pageView = getPageVisitWithLevel3(literals.btrader.buyTitles, {...commons,
    ...applicationCommon,
    [constants.APPLICATION_STEP]: literals.btrader.buyTitles});

  const appPageVisit = getPageVisitRaw({...commons,
    ...applicationCommon,
    [constants.APPLICATION_STEP]: literals.btrader.buyTitles});

  const appOnClick = getAppStarted(literals.btrader.buyTitles, {...commons,
    ...applicationCommon,
    [constants.APPLICATION_STEP]: literals.commons.quantityAmount});

  const appCompletedSuccess = getAppCompletedRaw({...commons,
    ...applicationCommon,
    ...successState,
    [constants.APPLICATION_STATE]: literals.commons.approve
  });

  const appCompletedPending = getAppCompletedRaw({...commons,
    ...applicationCommon,
    ...successState,
    [constants.APPLICATION_STATE]: literals.commons.underReview
  });

  const createSiteError = (message) => getSiteError(message, {...commons});

  const appOnClickError = createSiteError(literals.errors.operationNotDone);

  const appOnClickErrorInfoNotLoaded = createSiteError('error no se cargo la informacion');

  const appOnClickErrorSerie = createSiteError('error la serie del fondo no permite comprar');
  [
    pageView,
    appOnClick,
    appCompletedSuccess,
    appCompletedPending,
    appPageVisit
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagFunel));

  [
    appOnClickError,
    appOnClickErrorInfoNotLoaded,
    appOnClickErrorSerie
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagErrors));

  return {
    pageView,
    appOnClick,
    appCompletedSuccess,
    appCompletedPending,
    appOnClickError,
    appOnClickErrorInfoNotLoaded,
    appOnClickErrorSerie,
    appPageVisit
  };
};
