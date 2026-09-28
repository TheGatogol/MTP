const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getAnalyticFeatureFlag, getAppPageVisitLevel2, getAppStartedWithLevel2, getAppCompletedLevel2, getAdvancedFootprintWithLevel2, getAdvancedFootprintWithLevel3, getAdvancedFootprint, getAdvancedFootprintError, getInternalLinkWithPageActivityLevel3 } = require('./common/_utils');
const analyticsFeatureFlag = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
const ANALYTICS_FEATURE_FLAG = {
  'key': 'payByBank',
  'defaultValue': false
};
const ANALYTICS_FEATURE_FLAG_ERROR = {
  'key': 'payByBank.errors',
  'defaultValue': false
};
let flagAppStarted = false;

module.exports = (CONFIG) => {
  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'pagar ecommerce',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.payments,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LANGUAGE]: literals.commons.language,
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: literals.commons.empty,
    [constants.USER_DEVICE_MOBILE]: literals.commons.yes,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    }
  };

  const dynamicFunnelManager = {
    [constants.APPLICATION_STEP]: {
      bind: 'step'
    }
  };

  const dynamicFunnel = (step) => {
    return {
      [constants.APPLICATION_STEP]: step
    };
  };

  const applicationCommon = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'ecommerce payments',
    [constants.APPLICATION_APPLICATION_NAME]: 'pagar ecommerce',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn
  };

  const dynamicApplicationCommon = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };

  const dynamicCustomerExperienceReset = {
    ['customerExperience.attributes.length']: 0
  };

  const dynamicProductsCommon = {
    ['products.attributes.length']: 1,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: {
      bind: 'primaryCategory'
    },
    [constants.PRODUCT_PRODUCT_SUBTYPE]: {
      bind: 'productSubtype'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    },
    [constants.PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [constants.PRODUCT_CURRENCY]: {
      bind: 'currency'
    },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'numberOfPayments'
    },
    [constants.PRODUCT_PRODUCT_RATE_PAYMENTSTYPE]: {
      bind: 'paymentType'
    }
  };

  const commonAnalytics = {
    ...commons,
    ...dynamicCustomerExperienceReset,
    ...dynamicProductsCommon,
    ...applicationCommon
  };

  const appPageVisit = (step) => {
    const pageVisit = getAppPageVisitLevel2('1 confirmar pago', {
      ...dynamicFunnel(step),
      ...commonAnalytics,
      ...dynamicApplicationCommon
    });
    return analyticsFeatureFlag(ANALYTICS_FEATURE_FLAG.key, pageVisit);
  };


  const appStarted = () => {
    if (!flagAppStarted) {
      const started = getAppStartedWithLevel2('1 confirmar pago', {
        ...commonAnalytics,
        ...dynamicApplicationCommon,
        ...dynamicFunnelManager

      });
      flagAppStarted = true;
      return analyticsFeatureFlag(ANALYTICS_FEATURE_FLAG.key, started);
    }
  };

  const appCompleted = (step) => {
    const completed = getAppCompletedLevel2(literals.commons.successfulPage, 'finalizado', {
      ...dynamicFunnel(step),
      ...commonAnalytics,
      ...dynamicApplicationCommon,
      [constants.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      }
    });

    return analyticsFeatureFlag(ANALYTICS_FEATURE_FLAG.key, completed);
  };

  const footprintsLvl2 = (textLevel2, otp = false) => {
    const footprintAnalytics = getAdvancedFootprintWithLevel2(textLevel2, {...commons});
    return analyticsFeatureFlag(ANALYTICS_FEATURE_FLAG.key, footprintAnalytics);
  };

  const footprintsLvl3 = (textLevel3, pageIntent = literals.commons.information) => {
    const data = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.payInDigitalCommerce,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: pageIntent
    };
    return analyticsFeatureFlag(
      ANALYTICS_FEATURE_FLAG.key,
      getAdvancedFootprintWithLevel3(textLevel3, data)
    );
  };

  const internalLinkLvl3 = (textLevel3, linkAction = 'salir', pageIntent = literals.commons.information) => {
    const data = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.payInDigitalCommerce,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: pageIntent
    };
    const internalLinkPageAnalytic = getInternalLinkWithPageActivityLevel3(linkAction, textLevel3, data);
    return analyticsFeatureFlag(ANALYTICS_FEATURE_FLAG.key, internalLinkPageAnalytic);
  };

  const footprintsErrorLvl3 = (textLevel1, textLevel2, error) => {
    const data = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL1]: textLevel1,
      [constants.PAGE_PAGEINFO_LEVEL2]: textLevel2,
      [constants.PAGE_PAGEINFO_LEVEL3]: error,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: error,
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'errorReason'
      }
    };
    const footprintAnalytics = getAdvancedFootprint(data);
    return analyticsFeatureFlag(ANALYTICS_FEATURE_FLAG_ERROR.key, footprintAnalytics);
  };

  const footprintPageError = (errorMessage) => {
    return analyticsFeatureFlag(ANALYTICS_FEATURE_FLAG_ERROR.key,
      getAdvancedFootprintError(errorMessage, {
        ...commons,
        [constants.PAGE_PAGEINFO_LEVEL2]: errorMessage
      })
    );
  };

  return {
    appPageVisit,
    appStarted,
    appCompleted,
    footprintsLvl2,
    footprintPageError,
    footprintsErrorLvl3,
    footprintsLvl3,
    internalLinkLvl3
  };
};
