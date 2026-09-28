module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getOnClickStart, getAppPageVisitLevel2, getAppStartedWithLevel2, getAppStep, getAppCompletedRaw, getAdvancedFootprint } = require('./common/_utils');
  const featureFlag = 'travelInsurance';
  const _addFeatureFlag = (data) => getAnalyticFeatureFlag(featureFlag, data);
  const _getOfferStepAnalytic = (step, data) => _addFeatureFlag(getAppStep(step, data));
  const _getAdvancedFootprint = (data) => _addFeatureFlag(getAdvancedFootprint(data));
  const pageCommon = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.travelInsurance,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement
  };
  const commonOpportunities = {
    ...pageCommon,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.featureFlag.opportunities,
    [constants.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:oportunidades',
    [constants.INTERNAL_CAMPAIGN_LOCATION]: 'oportunidades--centro-1-3',
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.reward.format,
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: '',
    [constants.INTERNAL_CAMPAIGN_NAME]: '-solicita tu seguro de viaje',
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.insurances,
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: literals.commons.numberInfo,
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: ''
  };
  const pageCommonClickStart = {
    ...commonOpportunities,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.smartInsurance,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.travelInsurance,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.insurances
  };
  const commonOffer = {
    ...pageCommon,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.travelInsurance,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.smartInsurance,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.insurances,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.travelInsurance
  };
  const commonStepBind = {
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'dates'
    },
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    },
    [constants.PRODUCT_PRODUCT_NUMBER_OF_HOLDERS]: {
      bind: 'numberOfHolders'
    }
  };
  const commonStep = {
    ...commonOffer,
    ...commonStepBind,
    [constants.PRODUCT_CURRENCY]: literals.currencies.MXN,
    [constants.APPLICATION_OFFER]: {
      bind: 'applicationOffer'
    },
    [constants.APPLICATION_PROCESS]: {
      bind: 'insuranceKid'
    },
    [constants.PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  };
  const _setLevel2Data = (level2) => ({
    ...commonStep,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.APPLICATION_STEP]: level2
  });
  const commonAppCompleted = {
    ..._setLevel2Data(literals.commons.successfulPage),
    [constants.PRODUCT_STATE]: literals.commons.contracted
  };
  const commonPawPrintDetailTravelers = {
    ...pageCommon,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.travelInsurance,
    [constants.PAGE_PAGEINFO_LEVEL3]: 'informacion viajeros',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const commonPawPrintCoveragesInfo = {
    ...pageCommon,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.travelInsurance,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.coverageInformation,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const APP_ON_CLICK_START = _addFeatureFlag(
    getOnClickStart(
      literals.commons.interested,
      literals.tag.information,
      pageCommonClickStart
    )
  );
  const appPageVisit = _addFeatureFlag(
    getAppPageVisitLevel2(
      literals.commons.first_detail,
      {
        ...commonOffer,
        [constants.QUALIFIED_VISITS]: {
          bind: 'isQualifiedVisits'
        }
      }
    )
  );
  const appStarted = _addFeatureFlag(
    getAppStartedWithLevel2(
      literals.commons.first_detail,
      {
        ...commonOffer,
        [constants.APPLICATION_STEP]: {
          bind: 'stepName'
        }
      }
    )
  );
  const appStep2 = _getOfferStepAnalytic('2', {
    ...commonOffer,
    ...commonStepBind,
    [constants.PAGE_PAGEINFO_LEVEL2]: {
      bind: 'levelTwo'
    },
    [constants.APPLICATION_STEP]: {
      bind: 'stepName'
    }
  });
  const getAppSteps = (step) => {
    const steps = {
      travelersStep: appStep2,
      paymentMethodStep: _getOfferStepAnalytic('3', _setLevel2Data('3 metodo de pago')),
      termsAndConditionsStep: _getOfferStepAnalytic('4', _setLevel2Data(literals.commons.fourthTermsAndConditions)),
      confirmationStep: _getOfferStepAnalytic('5', _setLevel2Data(literals.commons.fifthConfirmation)),
      tokenStep: _getOfferStepAnalytic('6', _setLevel2Data(literals.commons.sixthOtp))
    };
    return steps[step];
  };
  const getAdvancedPawFootprint = (footprint) => {
    const footprintData = {
      firstPaw: commonOpportunities,
      coverageInfo: {
        ...commonPawPrintCoveragesInfo,
        [constants.APPLICATION_APPLICATION]: {
          bind: 'applicationObject'
        }
      },
      detailTravelers: {
        ...commonPawPrintDetailTravelers,
        [constants.APPLICATION_APPLICATION]: {
          bind: 'applicationObject'
        },
        [constants.PAGE_PAGEINFO_LEVEL2]: {
          bind: 'levelTwo'
        }
      }
    };
    return _getAdvancedFootprint(footprintData[footprint]);
  };
  const appCompleted = _addFeatureFlag(
    getAppCompletedRaw({
      ...commonAppCompleted,
      [constants.APPLICATION_STATE]: {
        bind: 'applicationState'
      },
      [constants.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      }
    })
  );
  return {
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    getAppSteps,
    getAdvancedPawFootprint,
    appCompleted
  };
};