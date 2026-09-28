'use strict';

module.exports = CONFIG => {
  const { connectionsIn, connectionsOut, get } = require('./common/helpers/_utils');
  const product = 'loan';
  const base = require('./product/_loan-payment')(product, 'car')(CONFIG);
  const getComponent = get(base);

  connectionsIn(base)('cells-handle-life-cycle').__bridge_page_carLoanPayment = {
    bind: 'init'
  };

  delete connectionsIn(base)('cells-handle-life-cycle').__bridge_page_loanPayment;

  connectionsIn(base)('bbva-feature-loan-payment-mx').navigation_from_deep_link_to_operations = {
    bind: 'parametersFromPushNotification'
  };

  connectionsIn(base)('bbva-feature-loan-payment-mx').global_financial_overview_details = {
    bind: 'financialOverviewDetails'
  };

  connectionsIn(base)('bbva-feature-loan-payment-mx').global_feature_flag_collection_updated = {
    bind: 'featureFlagCollection'
  };

  connectionsOut(base)('bbva-feature-loan-payment-mx').loan_payment_push_navigation_to_dashboard = {
    bind: 'navigation-to-dashboard',
    link: {
      page: 'dashboard',
      skipHistory: true
    }
  };

  const loanPaymentFeatureComponent = getComponent('bbva-feature-loan-payment-mx');
  loanPaymentFeatureComponent.familyPath = '@glomo-web-components/bbva-feature-loan-payment-mx-spherica';
  loanPaymentFeatureComponent.tag = 'bbva-feature-loan-payment-mx-spherica';

  return base;
};