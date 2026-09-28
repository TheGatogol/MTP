module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintWithLevel1,
    addFeatureFlag,
    getAnalyticFeatureFlag,
    getOnClickStart,
    getInternalLink
  } = require('./common/_utils');
  const fulfillmentModelMap = {
    'default': 'online',
    '0TDC': 'online/offline',
    '0793': 'online/offline',
    'HIPO': 'offline',
    '0HIP': 'offline',
    'ANOM': 'online/offline',
    '0823': 'online/offline',
    '0NOM': 'online',
    '0PPI': 'online',
    '0693': 'online'
  };
  const primaryCategoryMap = {
    'default': '',
    'HIPO': 'prestamos',
    '0HIP': 'prestamos',
    '0TDC': 'tarjetas',
    '0786': 'depositos',
    '0813': 'inversiones',
    '0NOM': 'prestamos',
    '0PPI': 'prestamos',
    '0835': 'cuentas',
    '0693': ''
  };
  const productSubtypeMap = {
    'default': '',
    'HIPO': '',
    '0HIP': '',
    '0TDC': 'tarjetas credito',
    '0786': '',
    '0813': 'fondos inversion',
    '0NOM': '',
    '0PPI': '',
    '0693': ''
  };
  const productNameMap = {
    'default': '',
    'HIPO': 'credito hipotecario',
    '0HIP': 'credito hipotecario',
    '0TDC': 'tarjeta de credito',
    '0786': 'pagare',
    '0813': 'fondo de inversion',
    '0NOM': 'prestamo nomina',
    '0PPI': 'prestamo personal inmediato',
    '0835': 'cuenta nomina',
    '0693': ''
  };
  const typologyMap = {
    'default': '',
    '0693': 'proceso cliente'
  };
  const analyticsFeatureFlagDashboardOutstanding = {
    key: 'glomo.analytics.dashboard.outstanding',
    defaultValue: true
  };
  const analyticsFeatureFlagDashboardOutstandingCampaigns = {
    key: 'glomo.analytics.dashboard.outstanding.campaigns',
    defaultValue: true
  };
  const analyticsFeatureFlagDashboardProducts = {
    key: 'glomo.analytics.dashboard.products',
    defaultValue: true
  };
  const analyticsFeatureFlagDashboarExperiences = {
    key: 'glomo.analytics.dashboard.experiences',
    defaultValue: true
  };
  const analyticsFeatureFlagDiscreetModeToggle = {
    key: 'glomo.analytics.discreetModeClick',
    defaultValue: true
  };
  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.futura
  };
  const COMMON_LEVEL1 = {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position
  };
  const COMMON_APP_ON_CLICK_START_OFFERS = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.outstanding,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.futura,
    [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication' },
    [constants.APPLICATION_APPLICATION_NAME]: { bind: 'name' },
    [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type' },
    [constants.APPLICATION_FULLFILMENT]: { bind: 'fulfillmentModel' },
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: { bind: 'primaryCategory' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtype' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' }
  };
  const COMMON_APP_ON_CLICK_START_CARD = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.outstanding,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.creditCardHolder,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.oneClickCreditCard,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.onlineOffline,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_PRODUCT_SUBTYPE]: literals.commons.creditCards,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customefields' }
  };
  const COMMON_INTERNAL_CAMPAINGS_BINDING = {
    [constants.INTERNAL_CAMPAIGN_FORMAT]: { bind: 'campaignFormat' },
    [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName' },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'collectiveCode' },
    [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'location' },
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: {bind: 'product'},
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: {bind: 'productCode'},
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: { bind: 'quantity' },
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  };
  const COMMONS_INTERNAL_LINK = {
    ...COMMON_LEVEL1,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.outstanding
  };
  const pageViewOutstanding = getAdvancedFootprintWithLevel2(
    literals.commons.outstanding, {
      ...COMMON_LEVEL1
    }
  );
  const pageViewCampaignsOutstanding = getAdvancedFootprintWithLevel2(
    literals.commons.outstanding, {
      ...COMMON_LEVEL1,
      [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'internalCampaigns' }
    }
  );
  const pageViewProducts = getAdvancedFootprintWithLevel2(
    literals.commons.products, {
      ...COMMON_LEVEL1
    }
  );
  const pageViewExperiencesAll = getAdvancedFootprintWithLevel1(
    literals.commons.experiences,
    commons
  );
  const getOnClickStartOffers = (type, flagName, appStep) => {
    const types = {
      dataQuery: getAnalyticFeatureFlag(flagName,
        getOnClickStart(appStep, literals.commons.information, {
          ...COMMON_APP_ON_CLICK_START_OFFERS,
          ...COMMON_INTERNAL_CAMPAINGS_BINDING
        }
        ))
    };
    return types[type];
  };
  const getOnClickStartCreditCard = (type, flagName, appStep) => {
    const types = {
      dataQuery: getAnalyticFeatureFlag(flagName,
        getOnClickStart(appStep, literals.commons.information, {
          ...COMMON_APP_ON_CLICK_START_CARD,
          ...COMMON_INTERNAL_CAMPAINGS_BINDING
        }
        ))
    };
    return types[type];
  };
  const internalLinkDiscreetModeToggle = getInternalLink(
    literals.discreetMode.eyeToggle, COMMONS_INTERNAL_LINK
  );
  addFeatureFlag(pageViewOutstanding, analyticsFeatureFlagDashboardOutstanding);
  addFeatureFlag(pageViewCampaignsOutstanding, analyticsFeatureFlagDashboardOutstandingCampaigns);
  addFeatureFlag(pageViewProducts, analyticsFeatureFlagDashboardProducts);
  addFeatureFlag(pageViewExperiencesAll, analyticsFeatureFlagDashboarExperiences);
  addFeatureFlag(internalLinkDiscreetModeToggle, analyticsFeatureFlagDiscreetModeToggle);
  return {
    pageViewOutstanding,
    pageViewCampaignsOutstanding,
    pageViewProducts,
    pageViewExperiencesAll,
    getOnClickStartOffers,
    getOnClickStartCreditCard,
    internalLinkDiscreetModeToggle,
    fulfillmentModelMap,
    primaryCategoryMap,
    productSubtypeMap,
    productNameMap,
    typologyMap
  };
};
