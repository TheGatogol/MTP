const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getAppStep, getPageVisit, getAppStarted, getAppCompleted, getOnClickStart, getAnalyticFeatureFlag, getAdvancedFootprint, getAdvancedFootprintWithLevels2And3, getAdvancedFootprintError, addFeatureFlag, getInternalLink } = require('./common/_utils');
const analyticsFeatureFlag = {
  key: 'glomo.analytics.cashZonePaymentsMpos',
  defaultValue: true
};
const analyticsErrorFeatureFlag  = {
  key: 'glomo.analytics.cashZonePaymentsMpos.errors',
  defaultValue: true
};
const mposPurchaseFlag = 'cashZonePaymentsMpos.mposPurchase';
const common = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cashZone,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.mercurio
};
const funnelCommon = {
  ...common,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn + '/' + literals.commons.fulfillmentOff,
  [constants.APPLICATION_APPLICATION_NAME]: literals.operative.cashZonePayment,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.collect,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative
};
const primaryCategory = {
  [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.account
};
const commonLevel2 = {
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.executeCharge
};
const dynamicCommon = {
  [constants.APPLICATION_STEP]: {
    bind: 'step'
  },
  [constants.PAGE_PAGEINFO_LEVEL2]: {
    bind: 'level2'
  },
  [constants.PAGE_PAGEINFO_LEVEL3]: {
    bind: 'level3'
  }
};
const dynamicCommonSteps = {
  [constants.APPLICATION_TYPOLOGY]: {
    bind: 'typology'
  },
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
    bind: 'amount'
  },
  [constants.APPLICATION_PROCESS]: {
    bind: 'process'
  },
  [constants.PRODUCT_CURRENCY]: {
    bind: 'currency'
  }
};
const getDataLayer = ({ dynamic, level2, step }) => ({
  ...funnelCommon,
  ...primaryCategory,
  ...(dynamic && dynamicCommon),
  ...(level2 && commonLevel2),
  ...(step && dynamicCommonSteps)
});
const appPageVisit = {
  ...getPageVisit(
    literals.commons.executeCharge, getDataLayer({ dynamic: true, level2: true}))
};
const appStarted = {
  ...getAppStarted({
    bind: 'level3'
  }, {
    ...getDataLayer({level2: true}),
    [constants.APPLICATION_STEP]: {
      bind: 'detail'
    }
  })
};

const getAppSteps = (numberStep) => getAppStep(numberStep, getDataLayer({ dynamic: true, level2: true, step: true}));

const appCompleted = {
  ...getAppCompleted(literals.commons.successfulPage, {
    bind: 'state'
  }, getDataLayer({ level2: true, step: true}))
};
const appOnClickStart = {
  ...getOnClickStart({
    bind: 'step'
  },
  literals.commons.information, getDataLayer({dynamic: true}))
};
const clickTopHire = getInternalLink(literals.actions.internalLink, {
  ...common,
  [constants.PAGE_PAGEACTIVITY_LINK_NAME]: literals.commons.top
});
const clickMposPurchase = getAnalyticFeatureFlag(mposPurchaseFlag,
  getOnClickStart(
    literals.commons.cardReader,
    literals.commons.information,
    {
      ...funnelCommon,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
      [constants.APPLICATION_APPLICATION_NAME]: literals.ocCashZone.buyReader,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.onboardingMpos
    }
  )
);
[
  appPageVisit,
  appStarted,
  getAppSteps,
  appCompleted,
  appOnClickStart,
  clickTopHire
].forEach((analytic) => addFeatureFlag(analytic, analyticsFeatureFlag));
const getAppPageView = (param) => {
  const pageView = {
    pageViewBluetoothError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.cardReaderBluetoothError, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.cardReaderBluetoothError,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.cardReaderBluetoothError
    })),
    pageViewChargeError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.cardReaderChargeError, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.cardReaderChargeError,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.cardReaderChargeError
    })),
    pageViewInitTopUnavailableError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.unavailableCharge, {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.executeChargeTop,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.unavailableCharge
    })),
    pageViewExecuteChargeTopLimitError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.unfinishedPhonePayment, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.unfinishedPhonePayment
    })),
    pageViewNoReadedCardError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.noReadedCard, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.noReadedCard,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.noReadedCard
    })),
    pageViewChargeFail: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.operationError, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.operationError,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.operationError
    })),
    pageViewExecuteChargeNoValidCardError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.noValidCard, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.noValidCard,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.noValidCard
    })),
    pageViewExecuteChargeInsufficientBalanceError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.noBalanceCard, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.noBalanceCard,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.noBalanceCard
    })),
    pageViewRefundUnavailableError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.refund, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.refund,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.refund
    })),
    pageViewInitTopCommonError: getAnalyticFeatureFlag(analyticsErrorFeatureFlag, getAdvancedFootprintError(literals.errors.initTopCommon, {
      ...common,
      ...commonLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.initTopCommon,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.initTopCommon
    })),
    pageViewChargeFootprint: getAnalyticFeatureFlag(analyticsFeatureFlag, getAdvancedFootprintWithLevels2And3(literals.commons.executeCharge, literals.commons.cardReader, common)),
    pageViewAvailableTopAgainFootprint: getAnalyticFeatureFlag(analyticsFeatureFlag, getAdvancedFootprintWithLevels2And3(literals.commons.executeChargeTop, literals.commons.allowedCharge, common)),
    pageViewStepFootprint: getAnalyticFeatureFlag(analyticsFeatureFlag, getAdvancedFootprintWithLevels2And3(literals.commons.executeCharge,  literals.commons.applicationData, common)),
    pageViewActivateTapToPayFootprint: getAnalyticFeatureFlag(analyticsFeatureFlag, getAdvancedFootprint({
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.activateTopIPhone
    })),
    pageViewDashboardFootprint: getAnalyticFeatureFlag(analyticsFeatureFlag, getAdvancedFootprint({
      ...common
    }))
  };
  return pageView[param];
};
const analyticsConfig =
{
  steps: {
    1: 'page-view',
    2: 'step-payment-method',
    3: 'step-summary'
  },
  items: {
    ...[ ...Array(10).keys() ],
    description: literals.commons.description,
    units: literals.commons.units,
    delete: literals.commons.delete,
    add: literals.commons.more,
    profile: literals.errors.cardReaderOperationRejected,
    receipt: {
      level2: literals.commons.executeCharge,
      level3: literals.commons.successfulPage
    },
    stepValues: {
      1: literals.commons.calculator,
      2: literals.commons.paymentMethod,
      3: literals.commons.summary
    },
    processes: {
      PRESENT_CARD: literals.commons.cardReader,
      PAYMENT_LINK: literals.commons.paymentLink,
      TAP_ON_PHONE: literals.commons.executeChargeTop
    },
    states: {
      success: literals.commons.approve,
      generated: 'en ' + literals.commons.reviewing,
      rejected: literals.commons.rejected
    },
    appSteps: {
      dashboard: `${literals.commons.executeCharge} ${literals.commons.cashZone}`,
      receipt: literals.commons.executeAnotherCharge
    }
  }
};
module.exports = {
  appPageVisit,
  appStarted,
  appCompleted,
  appOnClickStart,
  getAppPageView,
  getAppSteps,
  analyticsConfig,
  clickTopHire,
  clickMposPurchase
};
