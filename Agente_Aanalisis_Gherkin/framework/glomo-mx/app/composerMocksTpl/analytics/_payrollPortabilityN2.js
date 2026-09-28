module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
    getOnClickStart,
    addFeatureFlag
  } = require('./common/_utils');

  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick
  };

  const commonProducts = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount
  };

  const commonAppOnClickStart = {
    ...common,
    ...commonProducts,
    ...OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' },
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.payrollPortability,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.ocPayrollPortability,
    [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type'}
  };

  const APP_ON_CLICK_START = getOnClickStart('me interesa oportunidades clientes n2', literals.commons.information, commonAppOnClickStart);

  const analyticsFeatureFlagPayrollPortability = {
    key: 'glomo.analytics.contractProductSection.ocPayrollPortabilityN2',
    defaultValue: true
  };
  [ APP_ON_CLICK_START ].forEach((item) =>
    addFeatureFlag(item, analyticsFeatureFlagPayrollPortability)
  );
  return {
    APP_ON_CLICK_START
  };
};
