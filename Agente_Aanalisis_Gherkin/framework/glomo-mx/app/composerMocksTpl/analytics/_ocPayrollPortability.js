module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const utils = require('./common/_utils');
  const analyticsFeatureFlagPayrollPortability = {
    'key': 'glomo.analytics.ocPayrollPortability',
    'defaultValue': true
  };
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_VERSION]: '1.0',
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonPageLabel = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.applicationName.ocPayrollPortability
  };
  const commonApplication = {
    ...common,
    ...commonPageLabel,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.payrollPortability,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.ocPayrollPortability,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const commonProducts = {
    ...commonApplication,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount
  };
  const commonOnClickStartData = {
    ...common,
    ...commonPageLabel,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.payrollPortability,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.ocPayrollPortability,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
  };
  const commonAppOnClickStart = {
    ...common,
    ...utils.OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' },
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication'},
    [constants.APPLICATION_APPLICATION_NAME]: { bind: 'name'},
    [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type'},
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.onlineOffline
  };
  const APP_ON_CLICK_START = utils.getOnClickStart(literals.commons.opportunities, literals.commons.information, commonAppOnClickStart);
  const appPageVisit = utils.getPageVisitWithLevel3(
    '1 ' + literals.commons.oneBenefits,
    commonProducts,
    {
      [constants.QUALIFIED_VISITS]: 'true',
      [constants.APPLICATION_TYPOLOGY]: {
        bind: 'typology'
      }
    }
  );
  const appStarted = utils.getAppStarted(
    '1 ' + literals.commons.oneBenefits,
    commonProducts,
    {
      [constants.APPLICATION_STEP]: `${literals.commons.start}`,
      [constants.APPLICATION_TYPOLOGY]: {
        bind: 'typology'
      }
    }
  );
  const appCompleted = utils.getAppCompletedRaw(
    commonProducts,
    {
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.APPLICATION_OPERATION_NUMBER]: {
        bind: 'applicationOperationNumber'
      },
      [constants.APPLICATION_STATE]: {
        bind: 'applicationState'
      },
      [constants.APPLICATION_TYPOLOGY]: {
        bind: 'typology'
      },
      [constants.PRODUCT_STATE]: {
        bind: 'applicationState'
      },
      [constants.USER_SEGMENT_PROFILE]: {
        bind: 'userSegmentProfile'
      }
    }
  );
  const appStep = (numberStep, level3) => {
    let obj = {
      ...commonProducts,
      [constants.APPLICATION_TYPOLOGY]: {
        bind: 'typology'
      }
    };
    let analytics = utils.getAppStepWithLevel3(numberStep, level3, obj);
    utils.addFeatureFlag(analytics, analyticsFeatureFlagPayrollPortability);
    return analytics;
  };
  const getAdvancedFootprint = (level3) => {
    let analyticsView = utils.getAdvancedFootprintWithLevel3(level3, {...common, ...commonPageLabel});
    utils.addFeatureFlag(analyticsView, analyticsFeatureFlagPayrollPortability);
    return analyticsView;
  };
  const appOnClickStart = utils.getOnClickStart(
    literals.commons.global_position,
    literals.commons.information,
    {
      ...commonOnClickStartData,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position
    }
  );

  const appOnClickStartOpportunities = utils.getOnClickStart(
    literals.commons.opportunities,
    literals.commons.information,
    commonOnClickStartData
  );
  [
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appCompleted,
    appOnClickStart,
    appOnClickStartOpportunities
  ].forEach(item => utils.addFeatureFlag(item, analyticsFeatureFlagPayrollPortability));
  return {
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStep,
    appCompleted,
    getAdvancedFootprint,
    appOnClickStart,
    appOnClickStartOpportunities,
    analyticsFeatureFlagPayrollPortability
  };
};