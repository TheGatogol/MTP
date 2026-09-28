'use strict';

module.exports = config => {
  const {
    globalServices: {host, requiredToken = 'tsec', versions: {customersV1, taxDocuments}},
    native = false,
    nativeIos = false
  } = config;
  const { createPrefixFromPageName, useNames, headerHeightMinimum } = require('./common/helpers/_utils');
  const analytics = require('./analytics/_profileUpdateRFC')();
  const pageName = 'profileUpdateRfc';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, 'profileUpdateRfc');
  const operativePrefix = createPrefixFromPageName(pageName);
  const pages = require('./common/_pages')(config)(pageName);
  const [ getChannelName ] = useNames(operativePrefix);

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      disableEdgeSwipe: true,
      headerHeight: headerHeightMinimum,
      iOSFixedHeader: nativeIos,
      animationType: 'verticalUp'
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName ]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('INIT_GET_EMAIL_UPDATE_RFC')]: {
            bind: 'init-page'
          },
          [getChannelName('INIT_RESET_MULTISTEP_UPDATE_RFC')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const customersApiDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host,
      requiredToken,
      customerAddressesApiVersion: customersV1,
      customersApiVersion: customersV1,
      customersContactDetailsApiVersion: customersV1,
      headers: { 'Accept-Language': 'es' },
      native,
      cellsConnections: {
        in: {
          [getChannelName('request_unmasked_email')]: {
            bind: 'getCustomerContacts'
          }
        },
        out: {
          [getChannelName('customer_email_unmasked')]: {
            bind: 'set-customer-contacts'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };

  const BbvaFeatureUpdateRfc = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-update-rfc-mx',
    tagSpherica: 'bbva-feature-update-rfc-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-update-rfc-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-update-rfc-mx-spherica',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      taxDocumentsApiVersion: taxDocuments,
      cellsConnections: {
        in: {
          [getChannelName('INIT_RESET_MULTISTEP_UPDATE_RFC')]: {
            bind: 'initPage'
          },
          dashboard_set_operationals: {
            bind: 'setProducts'
          },
          global_user_id: {
            bind: 'getCustomerId'
          },
          profile_get_customer_fiscal_data_success: {
            bind: 'setFiscalData'
          },
          [getChannelName('INIT_GET_EMAIL_UPDATE_RFC')]: {
            bind: 'requestEmail'
          },
          [getChannelName('customer_email_unmasked')]: {
            bind: 'getContactDetail'
          },
          connection_status_profileUpdateRfc_offline: {
            bind: 'lostConnection'
          },
          connection_status_profileUpdateRfc__online: {
            bind: 'resetConnection'
          }
        },
        out: {
          [getChannelName('exit_update_rfc')]: {
            bind: 'update-rfc-exit',
            backStep: true
          },
          [getChannelName('request_unmasked_email')]: {
            bind: 'unmasked-email-update-rfc',
            analytics: analytics.appPageVisitCyr
          },
          [getChannelName('analytics_app_onclick_other')]: {
            bind: 'analytics-app-onclick-other',
            analytics: analytics.appOnClickStartOther
          },
          [getChannelName('analytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: analytics.appPageStartedCyr
          },
          [getChannelName('analytics_app_select_period')]: {
            bind: 'analytics-app-stepTwo',
            analytics: analytics.appStepSelectPeriodCyr
          },
          [getChannelName('analytics_app_confirm_cfdi')]: {
            bind: 'analytics-app-stepThree',
            analytics: analytics.appStepConfirmCfdiCyr
          },
          [getChannelName('analytics_app_terms_conditions')]: {
            bind: 'analytics-app-stepFour',
            analytics: analytics.appStepTermsAndConditionsCyr
          },
          [getChannelName('analytics_app_confirm_adjustment')]: {
            bind: 'analytics-app-stepFive',
            analytics: analytics.appStepConfirmAdjustmentCyr
          },
          [getChannelName('analytics_app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompletedCyr
          },
          open_control_veil: {
            bind: 'profile-update-rfc-open-veil'
          },
          close_control_veil: {
            bind: 'profile-update-rfc-close-veil'
          },
          global_action_launcher_dialer: {
            bind: 'call-line-bbva'
          }
        }
      }
    },
    propertiesSpherica: {
      isNativeIos: nativeIos
    }
  };

  const base = {
    hash: 'profile-update-rfc',
    currentPage: {
      url: '/profile/update-rfc'
    },
    pages,
    template,
    components: [
      lifeCycle,
      customersApiDM,
      BbvaFeatureUpdateRfc
    ]
  };

  addCommonErrors(base.components)();

  const signConnector = require('./common/_sign-connector')(config)(base);
  const signConnectorFeature = require('./common/_widget-sign-connector')(config)(base);

  signConnectorFeature('bbva-feature-update-rfc-mx');

  signConnector(
    'cells-dm-global-apis-customers-mx-bgadpmock', pageName, [
      'set-customer-contacts',
      'error-on-get-customer-contacts'
    ]
  );

  return sphericaPageUtils.spherize(base);
};
