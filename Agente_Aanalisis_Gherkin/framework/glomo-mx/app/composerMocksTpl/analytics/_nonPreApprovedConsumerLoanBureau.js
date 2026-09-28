/* eslint-disable camelcase, no-use-before-define */
module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');
  const get_custom_analytics_feture_flag = (analytics) => UTILS.getAnalyticFeatureFlag('nonPreapprovedConsumerLoan', analytics);
  const get_base_common = (projectName) => ({
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: projectName,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private
  });
  const get_custom_common = (projectName) => ({
    ...get_base_common(projectName),
    ...COMMON
  });
  const COMMON = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.preApprovedLoan,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.preApprovedLoan.personalLoanClick,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.actions.online
  };
  const COMMON_SIMULATION = {
    ...get_custom_common(LITERALS.sections.diy),
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_TYPOLOGY]: LITERALS.preApprovedLoan.nonPreApproved,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN
  };
  const ON_CLICK_STARTED = {
    ...get_custom_common(LITERALS.sections.glomo),
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.loans,
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  };
  const COMMON_PRODUCTS = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.loans,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'productAmount' },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [CONSTANTS.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'numberOfPayments' }
  };
  const PAGE_VISIT = {
    ...COMMON,
    ...COMMON_SIMULATION,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.preApprovedLoan.personalLoanClick,
    [CONSTANTS.APPLICATION_STEP]: '1 ' + LITERALS.preApprovedLoan.simulation,
    [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.qualifiedVisitsTrue,
    ...COMMON_PRODUCTS
  };
  const STARTED = {
    ...COMMON,
    ...COMMON_SIMULATION,
    ...COMMON_PRODUCTS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 ' + LITERALS.preApprovedLoan.simulation,
    [CONSTANTS.APPLICATION_STEP]: {bind: 'applicationStep'}
  };
  const custom_app_completed = ({userSegmentProfile, productState} = {}) => ({
    ...COMMON_SIMULATION,
    ...COMMON_PRODUCTS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.loans,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.preApprovedLoan.personalLoanClick,
    [CONSTANTS.USER_SEGMENT_PROFILE]: userSegmentProfile || '',
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.loans,
    [CONSTANTS.PRODUCT_STATE]: productState || ''
  });
  const get_page_view = ({ pageIntent } = {}) => ({
    ...get_base_common(LITERALS.sections.glomo),
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.preApprovedLoan.nonPreApprovedLoan,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: pageIntent
  });
  const APP_ON_CLICK_START = get_custom_analytics_feture_flag(UTILS.getOnClickStart(LITERALS.commons.opportunities, LITERALS.commons.information, ON_CLICK_STARTED));
  const APP_PAGE_VISIT = get_custom_analytics_feture_flag(UTILS.getAppPageVisitLevel2('1 ' + LITERALS.preApprovedLoan.simulation, PAGE_VISIT));
  const APP_STARTED = get_custom_analytics_feture_flag(UTILS.getAppStartedWithLevel2(LITERALS.preApprovedLoan.personalLoanClick, STARTED));
  const custom_get_advanced_footprint_with_level2 = ({level2, pageIntent} = {}) => get_custom_analytics_feture_flag(UTILS.getAdvancedFootprintWithLevel2(level2, get_page_view({pageIntent})));
  const app_completed = ({applicationState, userSegmentProfile} = {}) => get_custom_analytics_feture_flag(
    UTILS.getAppCompleted(
      LITERALS.commons.successfulPage,
      applicationState,
      custom_app_completed({userSegmentProfile, productState: applicationState})
    ));
  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    app_completed,
    custom_get_advanced_footprint_with_level2
  };
};