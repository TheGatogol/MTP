module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getOnClickStart,
    getAdvancedFootprint
  } = require('./common/_utils');

  const sustainableSustainabilitySection = literals.sections.sustainability;

  const generalCommon = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.sustainability,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.sections.dashboard,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };

  const pageView = getAdvancedFootprint({ ...generalCommon });

  const createOnClickStart = (
    globalApplication = false,
    applicationStep = false,
    applicationTypology = false
  ) => {
    const _base = {
      ...generalCommon,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.ocLoan,
      [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
      [constants.APPLICATION_APPLICATION_NAME]: literals.preApprovedLoan.personalLoanClick,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.personalLoan,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
        bind: 'pruductName'
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
    const _getOnClickStart = getOnClickStart(sustainableSustainabilitySection, literals.empty, _base);
    getAnalyticFeatureFlag('sustainabilitySection', _getOnClickStart);
    return _getOnClickStart;
  };

  getAnalyticFeatureFlag('sustainabilitySection.footprint', pageView);
  return {
    pageView,
    createOnClickStart
  };
};
