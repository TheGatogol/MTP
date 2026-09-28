const {
  getOnClickStart,
  getPageVisitWithLevel3,
  getAnalyticFeatureFlag,
  getAppStarted,
  getAppStepWithLevel3,
  getAppCompletedRaw,
  getAdvancedFootprint,
  getAdvancedFootprintWithLevel3
} = require('./common/_utils');
const { btrader, commons, sections, applicationName } = require('./common/_literals');
const constants = require('./common/_constants');
const btraderFeatureFlag = 'btrader';

const commonsBtrader = {
  [constants.PAGE_PAGEINFO_AREA]: commons.private,
  [constants.PAGE_PAGEINFO_LEVEL1]: btrader.investmentContract,
  [constants.PAGEINSTANCES_ID]: 'de',
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
  [constants.PAGE_PAGEINFO_BUSINESSUNIT]: commons.bbvaMexico,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.diy,
  [constants.APPLICATION_FULLFILMENT]: commons.online,
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: commons.investments,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: commons.investmentFunds
};

const commonsPurchase = {
  ...commonsBtrader,
  [constants.PAGE_PAGEINFO_LEVEL2]: btrader.purchase,
  [constants.APPLICATION_GLOBAL_APPLICATION]: btrader.purchaseInvestment,
  [constants.APPLICATION_APPLICATION_NAME]: btrader.investPurchase,
  [constants.APPLICATION_APPLICATION_TYPE]: commons.engagement
};

const commonsSell = {
  ...commonsBtrader,
  [constants.PAGE_PAGEINFO_LEVEL2]: btrader.sale,
  [constants.APPLICATION_GLOBAL_APPLICATION]: btrader.saleInvestment,
  [constants.APPLICATION_APPLICATION_NAME]: btrader.investSale,
  [constants.APPLICATION_APPLICATION_TYPE]: commons.operative
};

const commonsCancel = {
  ...commonsBtrader,
  [constants.PAGE_PAGEINFO_LEVEL2]: commons.cancel,
  [constants.APPLICATION_GLOBAL_APPLICATION]: btrader.cancelInvestment,
  [constants.APPLICATION_APPLICATION_TYPE]: commons.operative,
  [constants.APPLICATION_APPLICATION_NAME]: btrader.investCancelPurchase
};

const commonsInfo = {
  ...commonsBtrader,
  [constants.PAGE_PAGEINFO_LEVEL2]: commons.detail,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: '',
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: ''
};

const appStepSelection = {
  [constants.APPLICATION_TYPOLOGY]: {bind: 'tipology'}
};

const typeDetail = (type) => {
  const typeAnalytics = {
    issuerDetail: {
      level: constants.PAGE_PAGEINFO_LEVEL3,
      literal: btrader.issuer
    },
    investBalance: {
      level: constants.PAGE_PAGEINFO_LEVEL2,
      literal: btrader.investBalance
    },
    myOrdersDetail: {
      level: constants.PAGE_PAGEINFO_LEVEL2,
      literal: btrader.myOrders
    },
    orderDetail: {
      level: constants.PAGE_PAGEINFO_LEVEL2,
      literal: btrader.orderDetail
    },
    editAlias: {
      level: constants.PAGE_PAGEINFO_LEVEL2,
      literal: applicationName.editAlias
    },
    successfulAlias: {
      level: constants.PAGE_PAGEINFO_LEVEL2,
      literal: btrader.successfulAlias
    }
  };
  const {level, literal} = typeAnalytics[type];
  return {[level]: literal};
};

const appOnClickStartCancel = {
  ...commonsCancel,
  [constants.PAGE_PAGEINFO_LEVEL2]: btrader.orderDetail
};

const appPageVisitCancel = {
  ...commonsCancel,
  [constants.PAGE_PAGEINFO_LEVEL3]: '1 orden de venta',
  [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
  [constants.PRODUCT_QUANTITY]: {bind: 'titlesQuantity' }
};

const appStartedCancel = {
  ...commonsCancel,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
  [constants.APPLICATION_STEP]: {bind: 'confirm'},
  [constants.PRODUCT_QUANTITY]: {bind: 'titlesQuantity' }
};

const appCompletedCancel = {
  ...commonsCancel,
  ...appPageVisitCancel,
  [constants.PAGE_PAGEINFO_LEVEL3]: commons.successfulPage,
  [constants.APPLICATION_STEP]: commons.successfulPage,
  [constants.APPLICATION_TYPOLOGY]: {bind: 'tipology'},
  [constants.APPLICATION_STATE]: {bind: 'state'},
  [constants.APPLICATION_OPERATION_NUMBER]: {bind: 'operationNumber'},
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'amountOperation'},
  [constants.PRODUCT_CURRENCY]: {bind: 'currency'},
  [constants.PRODUCT_QUANTITY]: {bind: 'quantity'}
};

const appOnClickStart = {
  [constants.PAGE_PAGEINFO_LEVEL1]: btrader.investmentContract,
  [constants.PAGE_PAGEINFO_LEVEL2]: commons.detail,
  [constants.PAGE_PAGEINFO_LEVEL3]: btrader.issuer,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information
};

const appOnClickStartPurchase = {
  [constants.PAGE_PAGEINFO_LEVEL2]: commons.detail,
  [constants.PAGE_PAGEINFO_LEVEL3]: btrader.issuer,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
  [constants.APPLICATION_STEP]: btrader.buyTitles
};

const appStarted = {
  [constants.PAGE_PAGEINFO_LEVEL1]: btrader.investmentContract,
  [constants.APPLICATION_STEP]: commons.continue
};

const appStartedPurchase = {
  [constants.PAGE_PAGEINFO_LEVEL3]: '1 orden de compra',
  [constants.APPLICATION_STEP]: {bind: 'appStep'}
};

const appStepConfirmation = {
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'orderAmount'},
  [constants.PRODUCT_CURRENCY]: {bind: 'currency'},
  [constants.PRODUCT_QUANTITY]: {bind: 'titleQuantity'},
  [constants.APPLICATION_SERVICE_CHARGE]: {bind: 'commission'},
  [constants.APPLICATION_TYPOLOGY]: {bind: 'tipology'}
};

const appCompleted = {
  [constants.PAGE_PAGEINFO_LEVEL3]: commons.successfulPage,
  [constants.APPLICATION_STEP]: commons.successfulPage,
  [constants.APPLICATION_STATE]: {bind: 'state'},
  [constants.APPLICATION_OPERATION_NUMBER]: {bind: 'operationFolio'},
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'orderAmount'},
  [constants.PRODUCT_CURRENCY]: {bind: 'currency'},
  [constants.PRODUCT_QUANTITY]: {bind: 'titleQuantity'},
  [constants.APPLICATION_SERVICE_CHARGE]: {bind: 'commission'},
  [constants.APPLICATION_TYPOLOGY]: {bind: 'tipology'}
};

module.exports = () => {
  const btsAppOnClickStart = getOnClickStart(btrader.sellTitles, commons.information, {...commonsSell, ...appOnClickStart});
  const btpAppOnClickStart = getOnClickStart(commons.buyTitles, commons.information, {...commonsPurchase, ...appOnClickStartPurchase});
  const btcAppOnClickStart = getOnClickStart(commons.cancel, commons.information, appOnClickStartCancel);

  const btsAppPageVisit = getPageVisitWithLevel3('1 orden de venta', {...commonsSell, [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction });
  const btpAppPageVisit = getPageVisitWithLevel3('1 orden de compra', {...commonsPurchase, [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction });
  const btcAppPageVisit = getPageVisitWithLevel3(commons.cancel, appPageVisitCancel);

  const btsAppStarted = getAppStarted('1 orden de venta', { ...commonsSell, ...appStarted, [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction });
  const btpAppStarted = getAppStarted('1 orden de compra', { ...commonsPurchase, ...appStartedPurchase, [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction });
  const btcAppStarted = getAppStarted('1 orden de venta', appStartedCancel);

  const btsAppStepSelection = getAppStepWithLevel3('2', '2 detalle orden', { ...commonsSell, ...appStepSelection, [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction});
  const btpAppStepSelection = getAppStepWithLevel3('2', '2 detalle orden', { ...commonsPurchase, ...appStepSelection, [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction});

  const btsAppStepConfirmation = getAppStepWithLevel3('3', commons.third_confirmaton, { ...commonsSell, ...appStepConfirmation, [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction });
  const btpAppStepConfirmation = getAppStepWithLevel3('3', commons.third_confirmaton, { ...commonsPurchase, ...appStepConfirmation, [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction });

  const btsAppCompleted = getAppCompletedRaw({[constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction, ...commonsSell, ...appCompleted });
  const btcAppCompleted = getAppCompletedRaw(appCompletedCancel);
  const btpAppCompleted = getAppCompletedRaw({[constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction, ...commonsPurchase, ...appCompleted });

  const btpFootprintChangeCurrency = getAdvancedFootprintWithLevel3(
    btrader.changeValidity,
    {[constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
      ...commonsPurchase,
      [constants.APPLICATION_APPLICATION]: [],
      [constants.PRODUCTS_ATTRIBUTES]: []
    });

  const btsFootprintChangeCurrency = getAdvancedFootprintWithLevel3(
    btrader.changeValidity,
    {[constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
      ...commonsSell,
      [constants.APPLICATION_APPLICATION]: [],
      [constants.PRODUCTS_ATTRIBUTES]: []
    });

  const btpFootprintCommission = getAdvancedFootprint(
    {...commonsPurchase,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL3]: btrader.commission,
      [constants.APPLICATION_APPLICATION]: [],
      [constants.PRODUCTS_ATTRIBUTES]: []
    });

  const btsFootprintCommission = getAdvancedFootprint(
    {...commonsSell,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL3]: btrader.commission,
      [constants.APPLICATION_APPLICATION]: [],
      [constants.PRODUCTS_ATTRIBUTES]: []
    });

  const btAnalyticsFootprint = (type, aditional) => {
    const types = {
      info: { ...commonsInfo, ...aditional },
      sell: { ...commonsSell, ...aditional },
      purchase: { ...commonsPurchase, ...aditional }
    };
    return getAdvancedFootprint(types[type]);
  };

  const btsiFingerprintProductDetail = btAnalyticsFootprint('info', commonsInfo);
  const btsiFingerprintIssuerDetail = btAnalyticsFootprint('info', typeDetail('issuerDetail'));
  const btsiFingerprintInvestBalance = btAnalyticsFootprint('info', typeDetail('investBalance'));
  const btsiFingerprintMyOrdersDetail = btAnalyticsFootprint('info', typeDetail('myOrdersDetail'));
  const btsiFingerprintOrderDetail = btAnalyticsFootprint('info', typeDetail('orderDetail'));
  const btsiFingerprintEditAlias = btAnalyticsFootprint('info', typeDetail('editAlias'));
  const btsiFingerprintSuccessfulAlias = btAnalyticsFootprint('info', typeDetail('successfulAlias'));

  [
    btsAppOnClickStart,
    btsAppPageVisit,
    btsAppStarted,
    btsAppStepSelection,
    btsAppStepConfirmation,
    btsAppCompleted,
    btsFootprintChangeCurrency,
    btsFootprintCommission,
    btpAppOnClickStart,
    btpAppPageVisit,
    btpAppStarted,
    btpAppStepSelection,
    btpAppStepConfirmation,
    btpAppCompleted,
    btpFootprintChangeCurrency,
    btpFootprintCommission,
    btcAppOnClickStart,
    btcAppPageVisit,
    btcAppStarted,
    btcAppCompleted,
    btsiFingerprintProductDetail,
    btsiFingerprintIssuerDetail,
    btsiFingerprintInvestBalance,
    btsiFingerprintMyOrdersDetail,
    btsiFingerprintOrderDetail,
    btsiFingerprintEditAlias,
    btsiFingerprintSuccessfulAlias
  ].forEach(analytic => getAnalyticFeatureFlag(btraderFeatureFlag, analytic));

  return {
    btsAppPageVisit,
    btsAppOnClickStart,
    btsAppStarted,
    btsAppStepSelection,
    btsAppStepConfirmation,
    btsAppCompleted,
    btsFootprintChangeCurrency,
    btsFootprintCommission,
    btpAppOnClickStart,
    btpAppPageVisit,
    btpAppStarted,
    btpAppStepSelection,
    btpAppStepConfirmation,
    btpAppCompleted,
    btpFootprintChangeCurrency,
    btpFootprintCommission,
    btcAppOnClickStart,
    btcAppPageVisit,
    btcAppStarted,
    btcAppCompleted,
    btsiFingerprintProductDetail,
    btsiFingerprintIssuerDetail,
    btsiFingerprintInvestBalance,
    btsiFingerprintMyOrdersDetail,
    btsiFingerprintOrderDetail,
    btsiFingerprintEditAlias,
    btsiFingerprintSuccessfulAlias
  };
};
