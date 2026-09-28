'use strict';

module.exports = CONFIG => {
  const { connectionsIn, connectionsOut, addProperty } = require('./common/helpers/_utils');
  const product = 'mortgage';

  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'mortgagePayment');
  const isNativeiOS = CONFIG.nativeIos;
  const base = require('./product/_loan-payment')(product, product)(CONFIG);
  const setComponentProperty = addProperty(base);
  base.template.propertiesSpherica = {
    className: ''
  };

  connectionsIn(base)('bbva-feature-mortgage-payment-mx').navigation_from_deep_link_to_operations = {
    bind: 'parametersFromPushNotification'
  };
  connectionsIn(base)('bbva-feature-mortgage-payment-mx').global_financial_overview_details = {
    bind: 'financialOverviewDetails'
  };
  connectionsIn(base)('bbva-feature-mortgage-payment-mx').global_feature_flag_collection_updated = {
    bind: 'featureFlagCollection'
  };
  connectionsOut(base)('bbva-feature-mortgage-payment-mx').mortgage_payment_push_navigation_to_dashboard = {
    bind: 'navigation-to-dashboard',
    skipHistory: true,
    link: {
      page: 'dashboard'
    }
  };
  setComponentProperty('bbva-feature-mortgage-payment-mx').tagSpherica = 'bbva-feature-mortgage-payment-mx-spherica';
  setComponentProperty('bbva-feature-mortgage-payment-mx').familyPathSpherica = '@glomo-web-components/bbva-feature-mortgage-payment-mx-spherica';
  setComponentProperty('bbva-feature-mortgage-payment-mx').propertiesSpherica = {
    iOSFixedHeader: isNativeiOS
  };
  return sphericaPageUtils.spherize(base);
};