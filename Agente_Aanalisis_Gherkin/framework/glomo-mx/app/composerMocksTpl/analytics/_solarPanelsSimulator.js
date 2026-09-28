module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    addFeatureFlag,
    getOnClickStart,
    getAdvancedFootprint,
    getAdvancedFootprintError
  } = require('./common/_utils');

  const sustainableSolarPanelsSimulator = literals.sections.sustainabilitySolarPanels;

  const generalCommon = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.sustainability,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.sections.solarPanelsSimulator,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };

  const createAdvancedFootprint = (level3 = '', level4 = '') => {
    const _base = {
      ...generalCommon,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3
    };
    if (level4) {
      Object.assign(_base, {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${level4}`
      });
    }
    const _getAdvancedFootprint = getAdvancedFootprint(_base);
    addFeatureFlag(_getAdvancedFootprint, {
      'key': 'glomo.analytics.solarPanelsSimulator.footprint',
      'defaultValue': true
    });
    return _getAdvancedFootprint;
  };

  const createOnClickStart = (
    globalApplication = false,
    applicationStep = false,
    applicationTypology = false,
    featureFlag = 'analitycsFeatureFlagSolarPanelsPreapproved'
  ) => {
    const _base = {
      ...generalCommon,
      [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
      [constants.APPLICATION_APPLICATION_NAME]: literals.preApprovedLoan.personalLoanClick,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.personalLoan,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
        bind: 'productName'
      }
    };
    if (globalApplication) {
      Object.assign(_base, {
        [constants.APPLICATION_GLOBAL_APPLICATION]: `${globalApplication}`
      });
    }
    if (applicationStep) {
      Object.assign(_base, {
        [constants.APPLICATION_STEP]: `${applicationStep}`
      });
    }
    if (applicationTypology) {
      Object.assign(_base, {
        [constants.APPLICATION_TYPOLOGY]: `${applicationTypology}`
      });
    }
    const _getOnClickStart = getOnClickStart(sustainableSolarPanelsSimulator, literals.empty, _base);
    const analyticFeatureFlags = {
      analitycsFeatureFlagSolarPanelsPreapproved: {
        'key': 'glomo.analytics.solarPanelsSimulator.preapproved',
        'defaultValue': true
      },
      analitycsFeatureFlagSolarPanelsNonPreapproved: {
        'key': 'glomo.analytics.solarPanelsSimulator.nonPreapproved',
        'defaultValue': true
      }
    };
    addFeatureFlag(_getOnClickStart, analyticFeatureFlags[`${featureFlag}`]);
    return _getOnClickStart;
  };

  const errorModal = getAdvancedFootprintError(literals.errors.noInformation, {
    ...generalCommon,
    [constants.PAGE_PAGEINFO_PAGENAME]: {
      bind: 'pageName'
    },
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.noInformation
  });

  const analitycsFeatureFlagSolarPanelsErrorModal = {
    'key': 'glomo.analytics.solarPanelsSimulator.errorModal',
    'defaultValue': true
  };

  addFeatureFlag(errorModal, analitycsFeatureFlagSolarPanelsErrorModal);

  return {
    errorModal,
    createOnClickStart,
    createAdvancedFootprint
  };
};
