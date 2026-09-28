const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAdvancedFootprint,
  getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError,
  getAppCompletedRaw,
  getAppStep,
  getPageVisitRaw,
  getOnClickStart,
  getAppStartedWithoutLevel
} = require('./common/_utils');
module.exports = () => {
  const applicationTypology = {
    MPOS_TOP: literals.ocCashZone.withReaderSelector,
    MPOS: literals.ocCashZone.withoutReaderSelector,
    MPOS_WITHOUT_STOCKCK: literals.ocCashZone.withoutStockOfReader
  };

  const applicationProccess = {
    WITH_CARD_READER: literals.ocCashZone.withOpenpayMiniReader,
    WITHOUT_CARD_READER: literals.ocCashZone.withoutOpenpayMiniReader
  };

  const analyticAppStartedActions = {
    KNOW_MORE_DETAILS: 'knowMoreDetails',
    KNOW_OTHER_COMMISSIONS: 'knowOtherCommissions',
    CONTINUE: 'continue',
    ASK_FOR_ADVICE: 'askForAdvice'
  };

  const analyticAppStepActions = {
    ORDER_INFO_SHOW: 'orderInfoShow',
    INCOME_ACCOUNT_SHOW: 'incomeAccountShow',
    TERMS_AND_CONDITIONS_SHOW: 'termsAndConditionsShow',
    COMPLETE_SUMMARY_SHOW: 'completeSummaryShow'
  };

  const analyticFootprintActions = {
    PAYMENT_METHODS_DETAILS_SHOW: 'paymentMethodsDetailsShow',
    COMMISSIONS_DETAILS_SHOW: 'commissionsDetailsShow',
    DELIVERY_DETAILS_SHOW: 'deliveryDetailsShow',
    PRIVACY_NOTICE_SHOW: 'privacyNoticeShow',
    ALERT_MPOS_PRICE_STOCK_SHOW: 'alertMposPriceStockShow',
    ALERT_MPOS_PRICE_INSUFFICIENT_STOCK: 'alertMposPriceInsufficientStock',
    CARD_READER_SHOW: 'cardReaderShow',
    DELIVERY_ADDRESS_SHOW: 'deliveryAddressShow',
    PAYMENT_ACCOUNT_SHOW: 'paymentAccountShow',
    SERVICE_PAYMENTS_OTP_SHOW: 'servicePaymentsOtpShow',
    OFFER_TOP_SHOW: 'offerTopShow',
    THANK_YOU_TOP_SHOW: 'thankYouPageShow'
  };
  const featureFlag = literals.featureFlag.ocCashZone;
  const topFeatureFlag = literals.featureFlag.ocCashZoneTop;
  const insuficientStockErrorFeatureFlag = literals.featureFlag.ocCashZoneInsuficientStock;
  const commonPage = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.mercurio
  };
  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.onboardingMpos,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.contractCashZone,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn + '/' + literals.commons.fulfillmentOff
  };
  const common = {
    ...commonPage,
    ...commonApplication,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
  };
  const commonFootprint = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cashZone,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    ...commonPage
  };
  const getAppStartedData = (step, typology) => ({
    ...common,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cashZone,
    [constants.PAGE_PAGEINFO_LEVEL2]: '1 ' + literals.commons.characteristics,
    [constants.APPLICATION_STEP]: step,
    [constants.APPLICATION_TYPOLOGY]: typology

  });
  const getAppStepData = (step, typology, data = {}) => ({
    ...common,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cashZone,
    [constants.PAGE_PAGEINFO_LEVEL2]: step,
    [constants.APPLICATION_STEP]: step,
    [constants.APPLICATION_TYPOLOGY]: typology,
    ...data
  });
  const getAdvancedFootprintData = (pageName, data = {}) => ({
    ...commonFootprint,
    [constants.PAGE_PAGEINFO_LEVEL2]: pageName,
    ...data
  });
  const getAdvancedFootprintDataError = (pageName) => ({
    ...commonFootprint,
    [constants.PAGE_PAGEINFO_LEVEL2]: pageName,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: pageName
  });
  const getAppStarted = (selectedAction, typology) => {
    const actions = {
      [analyticAppStartedActions.KNOW_MORE_DETAILS]: getAppStartedWithoutLevel(
        getAppStartedData(literals.ocCashZone.knowMoreDetails, typology)
      ),
      [analyticAppStartedActions.KNOW_OTHER_COMMISSIONS]: getAppStartedWithoutLevel(
        getAppStartedData(literals.ocCashZone.knowOtherCommissions, typology)
      ),
      [analyticAppStartedActions.CONTINUE]: getAppStartedWithoutLevel(
        getAppStartedData(literals.commons.continue, typology)
      ),
      [analyticAppStartedActions.ASK_FOR_ADVICE]: getAppStartedWithoutLevel(
        getAppStartedData(literals.ocCashZone.askForAdvice, typology)
      )
    };
    return getAnalyticFeatureFlag(featureFlag, actions[selectedAction]);
  };
  const getAppSteps = (selectedAction, typology, applicationProcess = '') => {
    const applicationProcessData = applicationProcess ? { [constants.APPLICATION_PROCESS]: applicationProcess } : {};
    const actions = {
      [analyticAppStepActions.ORDER_INFO_SHOW]: getAppStep(
        '2',
        getAppStepData('2 ' + literals.commons.contractingData, typology)
      ),
      [analyticAppStepActions.INCOME_ACCOUNT_SHOW]: getAppStep(
        '3',
        getAppStepData('3 ' + literals.commons.incomeAccount, typology)
      ),
      [analyticAppStepActions.TERMS_AND_CONDITIONS_SHOW]: getAppStep(
        '4',
        getAppStepData('4 ' + literals.commons.termsAndConditions, typology, applicationProcessData)
      ),
      [analyticAppStepActions.COMPLETE_SUMMARY_SHOW]: getAppStep(
        '5',
        getAppStepData('5 ' + literals.commons.confirmation, typology, applicationProcessData)
      )
    };
    return getAnalyticFeatureFlag(featureFlag, actions[selectedAction]);
  };
  const getfootprint = (selectedAction) => {
    const actions = {
      [analyticFootprintActions.PAYMENT_METHODS_DETAILS_SHOW]:
        getAnalyticFeatureFlag(
          featureFlag,
          getAdvancedFootprint(
            getAdvancedFootprintData(literals.ocCashZone.detailsOfPaymentsMethods)
          )
        ),
      [analyticFootprintActions.COMMISSIONS_DETAILS_SHOW]:
        getAnalyticFeatureFlag(
          featureFlag,
          getAdvancedFootprint(
            getAdvancedFootprintData(literals.commons.commissionsInformation)
          )
        ),
      [analyticFootprintActions.DELIVERY_DETAILS_SHOW]:
        getAnalyticFeatureFlag(
          featureFlag,
          getAdvancedFootprint(
            getAdvancedFootprintData(literals.commons.deliveryInformation)
          )
        ),
      [analyticFootprintActions.PRIVACY_NOTICE_SHOW]: getAnalyticFeatureFlag(
        featureFlag,
        getAdvancedFootprint(
          getAdvancedFootprintData(literals.commons.privacyAdvice)
        )
      ),
      [analyticFootprintActions.ALERT_MPOS_PRICE_STOCK_SHOW]:
        getAnalyticFeatureFlagError(
          featureFlag,
          getAdvancedFootprint(
            getAdvancedFootprintDataError(literals.commons.informationIsNotAvailable)
          )
        ),
      [analyticFootprintActions.ALERT_MPOS_PRICE_INSUFFICIENT_STOCK]:
        getAnalyticFeatureFlagError(
          insuficientStockErrorFeatureFlag,
          getAdvancedFootprint(
            getAdvancedFootprintDataError(literals.ocCashZone.outOfStock)
          )
        ),
      [analyticFootprintActions.CARD_READER_SHOW]: getAnalyticFeatureFlag(
        featureFlag,
        getAdvancedFootprint(
          getAdvancedFootprintData(literals.ocCashZone.addCardReader)
        )
      ),
      [analyticFootprintActions.DELIVERY_ADDRESS_SHOW]:
        getAnalyticFeatureFlag(
          featureFlag,
          getAdvancedFootprint(
            getAdvancedFootprintData(literals.commons.deliveryAddress)
          )
        ),
      [analyticFootprintActions.PAYMENT_ACCOUNT_SHOW]: getAnalyticFeatureFlag(
        featureFlag,
        getAdvancedFootprint(
          getAdvancedFootprintData(literals.commons.paymentDetails)
        )
      ),
      [analyticFootprintActions.SERVICE_PAYMENTS_OTP_SHOW]: getAnalyticFeatureFlag(
        featureFlag,
        getAdvancedFootprint(
          getAdvancedFootprintData(literals.commons.otp, {
            [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
          })
        )
      ),
      [analyticFootprintActions.OFFER_TOP_SHOW]: getAnalyticFeatureFlag(
        topFeatureFlag,
        getAdvancedFootprint(
          getAdvancedFootprintData(literals.ocCashZone.touchPayment, {
            [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.characteristics
          })
        )
      ),
      [analyticFootprintActions.THANK_YOU_TOP_SHOW]: getAnalyticFeatureFlag(
        topFeatureFlag,
        getAdvancedFootprint(
          getAdvancedFootprintData(literals.ocCashZone.touchPayment, {
            [constants.PAGE_PAGEINFO_LEVEL3]: literals.ocCashZone.activationRealized
          })
        )
      )
    };
    return actions[selectedAction];
  };
  const APP_ON_CLICK_START = getOnClickStart(
    literals.commons.opportunities,
    literals.commons.information,
    {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
      [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
        bind: 'siteActionName'
      },
      [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
        bind: 'offers'
      },
      [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick
    }
  );

  const getAppPageVisit = (typology) => {
    return getAnalyticFeatureFlag(
      featureFlag,
      getPageVisitRaw(
        getAppStepData('1 ' + literals.commons.characteristics, typology, {
          [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
        })
      )
    );
  };

  const getAppCompleted = (typology, applicationProcess) => {
    const appCompleteData = {
      [constants.APPLICATION_PROCESS]: applicationProcess,
      [constants.APPLICATION_STATE]: literals.state.contracted,
      [constants.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      },
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
        bind: 'amount'
      },
      [constants.PRODUCT_CURRENCY]: literals.currencies.MXN,
      [constants.PRODUCT_STATE]: literals.state.contracted,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
    };
    return getAnalyticFeatureFlag(
      featureFlag,
      getAppCompletedRaw(getAppStepData(literals.commons.successfulPage, typology, appCompleteData)
      ));
  };
  getAnalyticFeatureFlag(featureFlag, APP_ON_CLICK_START);
  return {
    applicationTypology,
    applicationProccess,
    analyticAppStartedActions,
    analyticAppStepActions,
    analyticFootprintActions,
    APP_ON_CLICK_START,
    getAppPageVisit,
    getAppCompleted,
    getAppStarted,
    getAppSteps,
    getfootprint
  };
};
