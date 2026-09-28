'use strict';

module.exports = CONFIG => {
  const { connectionsIn, connectionsOut, addProperty } = require('./common/helpers/_utils');
  const product = 'loan';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'loanPayment');
  const base = require('./product/_loan-payment')(product, product)(CONFIG);
  const setComponentProperty = addProperty(base);
  const isNativeiOS = CONFIG.nativeIos;

  base.template.propertiesSpherica = {
    className: ''
  };
  connectionsIn(base)('bbva-feature-loan-payment-mx').navigation_from_deep_link_to_operations = {
    bind: 'parametersFromPushNotification'
  };
  connectionsIn(base)('bbva-feature-loan-payment-mx').bbva_feature_pledge_loanPayment = {
    bind: 'parametersFromPushNotification'
  };
  connectionsIn(base)('bbva-feature-loan-payment-mx').sing_modal_reseated = {
    bind: 'onSignOtpModalIsCanceled'
  };
  connectionsIn(base)('bbva-feature-loan-payment-mx').sign_modal_close_reset = {
    bind: 'onSignOtpModalIsCanceled'
  };
  connectionsIn(base)('bbva-feature-loan-payment-mx').sign_modal_cancelled = {
    bind: 'onSignOtpModalIsCanceled'
  };
  connectionsIn(base)('bbva-feature-loan-payment-mx').global_financial_overview_details = {
    bind: 'financialOverviewDetails'
  };
  connectionsIn(base)('bbva-feature-loan-payment-mx').global_feature_flag_collection_updated = {
    bind: 'featureFlagCollection'
  };
  connectionsOut(base)('bbva-feature-loan-payment-mx').refresh_loan_payment = {
    bind: 'refresh-amount-account'
  };
  connectionsOut(base)('bbva-feature-loan-payment-mx').dashboard_refresh_financial_overview = {
    bind: 'refresh-amount-account'
  };
  connectionsOut(base)('bbva-feature-loan-payment-mx').loan_payment_push_navigation_to_dashboard = {
    bind: 'navigation-to-dashboard',
    skipHistory: true,
    link: {
      page: 'dashboard'
    }
  };
  setComponentProperty('bbva-feature-loan-payment-mx').tagSpherica = 'bbva-feature-loan-payment-mx-spherica';
  setComponentProperty('bbva-feature-loan-payment-mx').familyPathSpherica = '@glomo-web-components/bbva-feature-loan-payment-mx-spherica';
  setComponentProperty('bbva-feature-loan-payment-mx').propertiesSpherica = {
    iOSFixedHeader: isNativeiOS
  };

  return sphericaPageUtils.spherize(base);
};
