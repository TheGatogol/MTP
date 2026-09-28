const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getOnClickStart,
  getPageVisit,
  getAppStartedWithLevel2,
  getAppStepLevel2AppOffer,
  getAppCompletedLevel2,
  getAdvancedFootprintWithLevel2,
  getAdvancedFootprintWithLevel3,
  getAnalyticFeatureFlag
} = require('./common/_utils');
const analyticsFeatureFlag = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
const analitycsFeatureFlag = {
  'key': 'glomo.analytics.bnpl',
  'defaultValue': false
};
const analyticsFeatureFlagError = {
  'key': 'glomo.analytics.bnpl.errors',
  'defaultValue': false
};
let flagAppStarted = false;

module.exports = () => {
  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'credito revolvente',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const applicationCommon = {
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'revolving credit line',
    [constants.APPLICATION_APPLICATION_NAME]: 'bbva elije tu plazo',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn
  };

  const dynamicProductsCommonBnpl = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: { bind: 'primaryCategory' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'numberOfPayments' },
    [constants.PRODUCT_PRODUCT_RATE_PAYMENTSTYPE]: { bind: 'paymentType' }
  };

  const commonAnalytics = {
    ...commons,
    ...dynamicProductsCommonBnpl,
    ...applicationCommon
  };

  const onClickStart = () => {
    const data = {
      ...commonAnalytics,
      [constants.PAGE_PAGEINFO_LEVEL2]: 'elegir plazo'
    };
    const pageVisit = getOnClickStart(
      literals.commons.information,
      'elegir plazo',
      data
    );
    return analyticsFeatureFlag(analitycsFeatureFlag, pageVisit);
  };

  const appPageVisit = (step) => {
    const pageVisit = getPageVisit('1 terminos y condiciones', {
      [constants.APPLICATION_STEP]: step,
      ...commonAnalytics
    });
    return analyticsFeatureFlag(analitycsFeatureFlag, pageVisit);
  };

  const appStarted = (step) => {
    if (!flagAppStarted) {
      const started = getAppStartedWithLevel2(`1 ${literals.commons.termsAndConditions}`, {
        [constants.APPLICATION_STEP]: step,
        ...commonAnalytics
      });
      flagAppStarted = true;
      return analyticsFeatureFlag(analitycsFeatureFlag, started);
    }
  };

  const appStartedStep = (numberStep, nameLevel, otp = false) => {
    let data = { ...commonAnalytics };
    if (otp) {
      data = {
        ...data,
        [constants.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
      };
    }
    const started = getAppStepLevel2AppOffer(numberStep, nameLevel, '', data);
    return analyticsFeatureFlag(analitycsFeatureFlag, started);
  };

  const appCompleted = (step) => {
    const completed = getAppCompletedLevel2(
      literals.commons.successfulPage,
      literals.commons.approved,
      {
        [constants.APPLICATION_STEP]: step,
        ...commonAnalytics,
        [constants.APPLICATION_CUSTOM_FIELDS]: {
          bind: 'firma'
        },
        [constants.PRODUCT_STATE]: literals.commons.approved
      }
    );
    return analyticsFeatureFlag(analitycsFeatureFlag, completed);
  };

  const footprintsLvl3 = (textLevel3) => {
    const data = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle compras y disponible linea de credito'
    };
    const footprintAnalytics = getAdvancedFootprintWithLevel3(textLevel3, data);
    return analyticsFeatureFlag(analitycsFeatureFlag, footprintAnalytics);
  };

  const footprintsLvl2 = (textLevel2, errorPage = '') => {
    const data = {
      ...commons,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage
    };
    const footprintAnalytics = getAdvancedFootprintWithLevel2(textLevel2, data);
    return analyticsFeatureFlag(
      analyticsFeatureFlagError,
      footprintAnalytics
    );
  };

  return {
    onClickStart,
    appPageVisit,
    appStarted,
    appStartedStep,
    appCompleted,
    footprintsLvl3,
    footprintsLvl2
  };
};
