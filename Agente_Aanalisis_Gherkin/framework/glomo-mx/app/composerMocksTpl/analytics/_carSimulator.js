module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    addFeatureFlag,
    getAppOnClickStartLevel3,
    getAdvancedFootprint,
    getAdvancedFootprintWithLevel3,
    getAdvancedFootprintWithLevel4,
    getInternalLinkWithPageActivityLevel3,
    getInteractionLinkWithLevel3,
    getAdvancedFootprintError
  } = require('./common/_utils');

  const analyticsFeatureFlag = {
    key: 'glomo.analytics.carSimulator',
    defaultValue: true
  };

  const sustainableCarSimulator = literals.sections.sustainabilityCar;

  const generalCommon = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.sustainability,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.sections.carSimulator.carSimulator,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };

  const _createAdvancedFootprint = (applicationCustomFields = false, level3 = '') => {
    const _base = {
      ...generalCommon,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3
    };
    if (applicationCustomFields) {
      Object.assign(_base, {
        [constants.APPLICATION_CUSTOM_FIELDS]: {
          bind: 'applicationCustomFields'
        }
      });
    }
    const _getAdvancedFootprint = getAdvancedFootprint(_base);
    addFeatureFlag(_getAdvancedFootprint, {
      'key': 'glomo.analytics.carSimulator.footprint',
      'defaultValue': true
    });
    return _getAdvancedFootprint;
  };

  const _createOnClickStart = (
    level3 = false,
    productSubtype = false,
    applicationName = false,
    applicationStep = false,
    applicationCustomFields = false,
    featureFlag = 'analitycsFeatureFlagCarPreapproved'
  ) => {
    const _base = {
      ...generalCommon,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.carLoan,
      [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.preApprovedLoan.creditCar,
      [constants.APPLICATION_STEP]: literals.sections.carSimulator.carSimulatorPromoDetail
    };
    if (applicationCustomFields) {
      Object.assign(_base, {
        [constants.APPLICATION_CUSTOM_FIELDS]: {
          bind: 'applicationCustomFields'
        }
      });
    }
    if (level3) {
      Object.assign(_base, {
        [constants.PAGE_PAGEINFO_LEVEL3]: `${level3}`
      });
    }
    if (productSubtype) {
      Object.assign(_base, {
        [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: `${productSubtype}`
      });
    }
    if (applicationName) {
      Object.assign(_base, {
        [constants.APPLICATION_APPLICATION_NAME]: `${applicationName}`
      });
    }
    if (applicationStep) {
      Object.assign(_base, {
        [constants.APPLICATION_STEP]: `${applicationStep}`
      });
    }
    if (featureFlag === 'analitycsFeatureFlagCarNonPreapproved') {
      Object.assign(_base, {
        [constants.USER_SEGMENT_PROFILE]: literals.preApprovedLoan.nonPreApproved
      });
    }
    const _getOnClickStart = getAppOnClickStartLevel3(literals.sections.sustainability, literals.sections.carSimulator.carSimulator, literals.sections.carSimulator.promotionDetail, _base);
    const analyticFeatureFlags = {
      analitycsFeatureFlagCarPreapproved: {
        'key': 'glomo.analytics.carSimulator.preapproved',
        'defaultValue': true
      },
      analitycsFeatureFlagCarNonPreapproved: {
        'key': 'glomo.analytics.carSimulator.nonPreapproved',
        'defaultValue': true
      }
    };
    addFeatureFlag(_getOnClickStart, analyticFeatureFlags[`${featureFlag}`]);
    return _getOnClickStart;
  };

  const pageViewCustomizeExpenses = getAdvancedFootprintWithLevel3(literals.sections.carSimulator.customizeExpenses, {...generalCommon,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  });

  const pageViewDetail = getAdvancedFootprintWithLevel3(literals.sections.carSimulator.compareExpenses, {...generalCommon,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  });
  const pageViewCarPromotions = getAdvancedFootprintWithLevel3(literals.sections.carSimulator.promotions, {...generalCommon});

  const pageViewPromotionDetail = getAdvancedFootprintWithLevel3(literals.sections.carSimulator.promotionDetail, {...generalCommon,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  });

  const pageViewCalculateConsent = getAdvancedFootprintWithLevel3(literals.sections.carSimulator.calculateConsent, {...generalCommon});

  const pageViewTermsConditions = getAdvancedFootprintWithLevel4(literals.sections.carSimulator.detailPromotion, literals.commons.termsAndConditions, {...generalCommon});

  const internalLink = getInternalLinkWithPageActivityLevel3(literals.sections.carSimulator.update, literals.sections.carSimulator.customizeExpenses, {...generalCommon,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  });

  const interactionLink = getInteractionLinkWithLevel3(literals.sections.carSimulator.customizeExpenses, {...generalCommon,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    },
    [constants.APPLICATION_INTERACTION_LEVEL]: literals.sections.carSimulator.restoreAllInformation
  });

  const errorModal = getAdvancedFootprintError(literals.errors.noInformation, {
    ...generalCommon,
    [constants.PAGE_PAGEINFO_PAGENAME]: {
      bind: 'pageName'
    },
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.noInformation
  });

  const analitycsFeatureFlagCarErrorModal = {
    'key': 'glomo.analytics.carSimulator.errorModal',
    'defaultValue': true
  };

  addFeatureFlag(errorModal, analitycsFeatureFlagCarErrorModal);

  [
    pageViewCustomizeExpenses,
    pageViewDetail,
    pageViewCarPromotions,
    pageViewPromotionDetail,
    pageViewCalculateConsent,
    pageViewTermsConditions,
    internalLink,
    interactionLink
  ].forEach((analytic) => addFeatureFlag(analytic, analyticsFeatureFlag));

  return {
    pageViewCustomizeExpenses,
    pageViewDetail,
    pageViewCarPromotions,
    pageViewPromotionDetail,
    pageViewCalculateConsent,
    pageViewTermsConditions,
    internalLink,
    interactionLink,
    errorModal,
    _createOnClickStart,
    _createAdvancedFootprint
  };
};
