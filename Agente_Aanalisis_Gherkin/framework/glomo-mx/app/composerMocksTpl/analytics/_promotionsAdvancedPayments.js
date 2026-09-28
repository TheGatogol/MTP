module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');

  const flagPromotionsAdvancedPayments =  'promotionsAdvancedPayments';

  const {
    getAnalyticFeatureFlag,
    getOnClickStart,
    getPageVisit,
    getAppStartedWithLevel2,
    getAppStep,
    getAppCompletedLevel2
  } = require('./common/_utils');
  const setFeatureFlags = (featureFlag, analytic, value) => (getAnalyticFeatureFlag(featureFlag, analytic, value));

  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'advances payments promotions',
    [constants.APPLICATION_APPLICATION_NAME]: 'anticipo promocion',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn
  };

  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: CONFIG.businessUnit,
    ...commonApplication
  };

  const commonsProductAttributes = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'pagar anticipo a promocion',
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_PRODUCT_SUBTYPE]: literals.commons.creditCards,
    [constants.PRODUCT_PRODUCT_NAME]: { bind: 'cardData.productName' },
    [constants.APPLICATION_AMOUNT]: { bind: 'cardData.amount' },
    [constants.APPLICATION_CURRENCY]: { bind: 'cardData.currency' },
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };

  const commonsProductAttributesLevel1 = {
    [constants.PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION]: { bind: 'productName' },
    [constants.PRODUCT_PRODUCT_1_AMOUNT]: { bind: 'totalAmount' },
    [constants.PRODUCT_PRODUCT_1_CURRENCY]: { bind: 'currency' }
  };

  const commonsWithProductAttributes = {
    ...commons,
    ...commonsProductAttributes
  };

  const appOnClickStart = setFeatureFlags(
    flagPromotionsAdvancedPayments,
    getOnClickStart(
      'pagar anticipo a promocion',
      literals.commons.information,
      {
        ...commons,
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
        [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.credit,
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail
      }
    )
  );

  const appPageVisit = setFeatureFlags(
    flagPromotionsAdvancedPayments,
    getPageVisit(
      '1 promocion',
      {
        ...commonsWithProductAttributes
      }
    )
  );

  const appStarted = setFeatureFlags(
    flagPromotionsAdvancedPayments,
    getAppStartedWithLevel2(
      '1 promocion',
      {
        ...commonsWithProductAttributes,
        [constants.APPLICATION_STEP]: { bind: 'applicationStep' }
      }
    )
  );

  const appStepNumber = (stepNumber, applicationStep, data) => {
    return setFeatureFlags(
      flagPromotionsAdvancedPayments,
      getAppStep(
        `${stepNumber}`,
        {
          ...commonsWithProductAttributes,
          [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.cards,
          [constants.PAGE_PAGEINFO_LEVEL2]: `${stepNumber} ${applicationStep}`,
          [constants.APPLICATION_STEP]: `${stepNumber} ${applicationStep}`,
          [constants.APPLICATION_TYPOLOGY]: { bind: 'applicationTypology' },
          ...data
        }
      ));
  };

  const appCompleted = setFeatureFlags(
    flagPromotionsAdvancedPayments,
    getAppCompletedLevel2(
      literals.commons.successfulPage,
      literals.commons.ended, {
        ...commonsWithProductAttributes,
        ...commonsProductAttributesLevel1,
        [constants.APPLICATION_TYPOLOGY]: { bind: 'applicationTypology' },
        [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
      }
    )
  );

  const appStep = (stepNumber) => {
    const stepConfig = {
      '2': appStepNumber('2', literals.commons.amount),
      '3': appStepNumber('3', literals.tag.thirdAccountPayment),
      '4': appStepNumber('4', literals.commons.confirmation, commonsProductAttributesLevel1),
      '5': appStepNumber('5', literals.commons.otp, {
        ...commonsProductAttributesLevel1,
        [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
      })
    };
    return stepConfig[stepNumber];
  };

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStep,
    appCompleted
  };
};
