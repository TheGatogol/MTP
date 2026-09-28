const constants = require('./common/_constants');
const literals = require('./common/_literals');
const  {
  getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError,
  getAppOnClickStartLevel2,
  getPageVisitWithLevel3,
  getAppStarted,
  getAppStepWithLevel3,
  getAppCompletedRaw,
  getAdvancedFootprintWithLevel3,
  getAdvancedFootprintWithLevel4,
  getInteractionLinkWithLevel3,
  getAdvancedFootprintError,
  getExternalLink,
  getProduct,
  getDownloadLink
} = require('./common/_utils');

module.exports = () => {
  const commonArea = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.oneClickCreditCard,
    ...commonArea
  };
  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.creditCardHolder,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.oneClickCreditCard,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.onlineOffline
  };
  const productData = getProduct(literals.commons.cards, literals.commons.creditCards);
  const dynamicData = {
    ...productData,
    [constants.APPLICATION_PROCESS]: {
      bind: 'applicationProcess'
    },
    [constants.PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [constants.PRODUCT_CURRENCY]: {
      bind: 'currency'
    },
    [constants.APPLICATION_OFFER]: {
      bind: 'applicationOffer'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customField'
    },
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'segmentProfile'
    }
  };
  const typology = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'deliveryMethod'
    }
  };
  const commonData = {
    ...common,
    ...commonApplication,
    ...productData
  };
  const commonDynamicData = {
    ...common,
    ...commonApplication,
    ...dynamicData
  };

  const appPageVisit = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica',
      getPageVisitWithLevel3(
        '1 ' + literals.commons.oneBenefits,
        {
          ...commonData,
          [constants.APPLICATION_PROCESS]: {
            bind: 'applicationProcess'
          },
          [constants.APPLICATION_OFFER]: {
            bind: 'applicationOffer'
          },
          [constants.APPLICATION_CUSTOM_FIELDS]: {
            bind: 'customField'
          },
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          },
          [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
        }
      )
    );
  };
  const appStarted = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica',
      getAppStarted(
        '1 ' + literals.commons.oneBenefits,
        {
          ...commonData,
          [constants.APPLICATION_PROCESS]: {
            bind: 'applicationProcess'
          },
          [constants.APPLICATION_STEP]: {
            bind: 'applicationStep'
          },
          [constants.APPLICATION_OFFER]: {
            bind: 'applicationOffer'
          },
          [constants.APPLICATION_CUSTOM_FIELDS]: {
            bind: 'customField'
          },
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          }
        }
      )
    );
  };
  const  getStepAnalytic = (step) => {
    const steps = {
      stepInformation: getAppStepWithLevel3(
        '2',
        '2 ' + literals.commons.request,
        commonDynamicData
      ),
      stepSettings: getAppStepWithLevel3(
        '3',
        '3 ' + literals.commons.paymentType,
        commonDynamicData
      ),
      stepAddress: getAppStepWithLevel3(
        '4',
        '4 ' + literals.commons.threeAddress,
        commonDynamicData
      ),
      stepTerms: getAppStepWithLevel3(
        '5',
        '5 ' + literals.commons.termsAndConditions,
        commonDynamicData,
        typology
      ),
      appSummary: getAppStepWithLevel3(
        '6',
        '6 ' + literals.commons.confirmation,
        commonDynamicData,
        typology
      )
    };
    return getAnalyticFeatureFlag('creditCardHolderSpherica', steps[step]);
  };
  const appCompletedSuccess = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica',
      getAppCompletedRaw(
        {
          ...commonDynamicData,
          ...typology,
          [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
          [constants.APPLICATION_STEP]: literals.commons.successfulPage,
          [constants.APPLICATION_STATE]: { bind: 'applicationState' },
          [constants.PRODUCT_STATE]: { bind: 'productState' },
          [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
        }
      )
    );
  };
  const appBenefitsDetail = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica.benefitsDetail',
      getAdvancedFootprintWithLevel4(
        '1 ' + literals.commons.oneBenefits,
        literals.commons.detail,
        common
      )
    );
  };
  const appCardDelivery = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica.paymentTypeInfo',
      getAdvancedFootprintWithLevel4(
        '4 ' + literals.commons.deliveryAddress,
        literals.commons.cardDelivery,
        common
      )
    );
  };
  const appPaymentDirectDebit = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica.paymentTypeInfo',
      getAdvancedFootprintWithLevel4(
        '3 ' + literals.commons.paymentType,
        literals.commons.paymentDirectDebit,
        common
      )
    );
  };
  const appPaymentDeadline = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica.deadLine',
      getInteractionLinkWithLevel3(
        '3 ' + literals.commons.paymentType,
        {
          ...common,
          [constants.APPLICATION_INTERACTION_LEVEL]: literals.commons.changePaymentDeadline,
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          }
        }
      )
    );
  };
  const appOperationNotPerfomedError = () => {
    return getAnalyticFeatureFlagError('creditCardHolderSpherica',
      getAdvancedFootprintError(
        literals.errors.operationError,
        {
          ...common,
          [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.operationError,
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          }
        }
      )
    );
  };
  const appRfcValidation = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica',
      getAdvancedFootprintWithLevel3(
        literals.commons.yourData,
        {
          ...common,
          [constants.APPLICATION_CUSTOM_FIELDS]: {
            bind: 'applicationProcess'
          },
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          },
          [constants.APPLICATION_CUSTOM_FIELDS]: {
            bind: 'customField'
          }
        }
      )
    );
  };
  const appRfcValidationError = () => {
    return getAnalyticFeatureFlagError('creditCardHolderSpherica.rfcValidation',
      getAdvancedFootprintWithLevel3(
        literals.errors.rfcValidation,
        {
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          },
          [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.rfcValidation,
          ...common
        }
      )
    );
  };
  const apptermsPdf = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica.terms',
      getDownloadLink(
        {
          ...common,
          [constants.PAGE_PAGEINFO_LEVEL3]: '5 ' + literals.commons.termsAndCondi,
          [constants.PAGE_PAGEACTIVITY_LINK_URL]: {
            bind: 'linkUrl'
          },
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          }
        }
      )
    );
  };
  const appOtp = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica',
      getAdvancedFootprintWithLevel3(
        literals.commons.otp,
        {
          [constants.APPLICATION_INTERACTION_LEVEL]: literals.commons.otp,
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          },
          [constants.APPLICATION_CUSTOM_FIELDS]: {
            bind: 'customField'
          },
          ...common
        }
      )
    );
  };
  const appDocuments = () => {
    return getAnalyticFeatureFlag('creditCardHolderSpherica.successDocuments',
      getExternalLink(
        {
          ...common,
          [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
          [constants.PAGE_PAGEACTIVITY_LINK_URL]: {
            bind: 'pageActivityLink'
          },
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'segmentProfile'
          }
        }
      )
    );
  };

  return {
    appPageVisit,
    appStarted,
    getStepAnalytic,
    appCompletedSuccess,
    appBenefitsDetail,
    appCardDelivery,
    appPaymentDirectDebit,
    appPaymentDeadline,
    appOperationNotPerfomedError,
    appRfcValidation,
    appRfcValidationError,
    apptermsPdf,
    appOtp,
    appDocuments
  };
};
