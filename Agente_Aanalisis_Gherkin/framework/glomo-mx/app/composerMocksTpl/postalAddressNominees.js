'use strict';
module.exports = (config) => {
  const pageName = 'postalAddressNominees';
  const pages = require('./common/_pages')(config)(pageName);
  const { SPINNER: spinner, useNames, createPrefixFromPageName } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const isNativeIos = config.nativeIos || false;
  const literals = require('./analytics/common/_literals');
  const analytics = require('./analytics/_postalAddressNominees')(config);
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      className: isNativeIos ? 'ios-top-padding' : '',
      extraHeaderClass: 'bbva-core-blue',
      iOSFixedHeader: isNativeIos,
      disableEdgeSwipe: true,
      headerFixed: true,
      cellsConnections: {
        in: {
          [getChannelName + '_init_channel']: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
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
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName + '_init_channel']: {
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
  const glomoNavigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'postalAddressNomineesReceipt',
      cellsConnections: {
        in: {
          [getChannelName('receipt_navigation')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('navigation_to_postalAddressNomineesReceipt')]: {
            bind: 'navigation-to-postalAddressNomineesReceipt',
            link: {
              page: 'postalAddressNomineesReceipt',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      secondaryClass: 'header--core',
      titleName: 'glomo-payroll-address-title-update-address'
    }
  };
  const stepInput = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-input-address',
    properties: {
      className: 'medium-blue',
      stepTitle: 'glomo-update-address-step-one-title',
      changeLabel: 'glomo-update-address-step-change-label',
      stepSubTitle: 'glomo-update-address-step-one-subtitle',
      stepId: 'step-update-address',
      currentStep: 1,
      active: true,
      collapsed: false,
      privacyLabelTitle: 'glomo-payroll-address-privacy-title-label-update-address',
      privacyLabelSubtitle: 'glomo-payroll-address-privacy-subtitle-label-update-address',
      privacyLabelLink: 'glomo-update-address-list-file-notice-privacy',
      showPrivacyNotice: true,
      avoidAutoCollapse: true,
      inputMode: 'numeric',
      continueButton: 'glomo-update-address-accept-continue',
      additionalFontClass: 'additional-font-weight',
      cellsConnections: {
        in: {
          [getChannelName('response_list_places')]: {
            bind: 'setResponseListPlaces'
          },
          [getChannelName('error_on_get_list_places')]: {
            bind: 'errorGetListPlaces'
          },
          [getChannelName('clear_postal_code_input')]: {
            bind: 'resetPostalCode'
          }
        },
        out: {
          [getChannelName('save_data_input')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('analytics_handle_app_started_input')]: {
            bind: 'cells-molecule-input-focus'
          },
          [getChannelName('service_list_places')]: {
            bind: 'get-list-places-service'
          },
          [getChannelName('open_privacy_modal')]: {
            bind: 'privacy-notice-clicked'
          },
          [getChannelName('clear_postal_code_input')]: {
            bind: 'cells-molecule-input-clear'
          }
        }
      }
    }
  };
  const geographicPlaces = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-geographicplaces',
    properties: {
      host: config.globalServices.host,
      native: config.native || false,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          [getChannelName('service_list_places')]: {
            bind: 'getListPlaces'
          }
        },
        out: {
          [getChannelName('response_list_places')]: {
            bind: 'set-list-places'
          },
          [getChannelName('error_on_get_list_places')]: {
            bind: 'error-on-get-list-places'
          }
        }
      }
    }
  };
  const customersGlobalApis = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: config.globalServices.host,
      native: config.native || false,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      customersApiVersion: config.globalServices.versions.customersV1,
      cellsConnections: {
        in: {
          [getChannelName('put_address_data')]: {
            bind: 'putAddress'
          },
          [getChannelName('set_customer_data')]: {
            bind: 'customerId'
          },
          [getChannelName('set_address_data')]: {
            bind: 'addressId'
          },
          [getChannelName('get_address_data')]: {
            bind: 'getCustomerAddresses'
          },
          [getChannelName('get_email_data')]: {
            bind: 'getCustomerContacts'
          }
        },
        out: {
          [getChannelName('set_response_put_address_success')]: {
            bind: 'put-contact-detail-address'
          },
          [getChannelName('set_response_put_address_error')]: {
            bind: 'error-on-put-contact-detail-address'
          },
          [getChannelName('set_response_get_customer_address_success')]: {
            bind: 'set-customer-addresses'
          },
          [getChannelName('set_response_get_customer_email_success')]: {
            bind: 'set-customer-contacts'
          },
          [getChannelName('send_otp_analytics')]: {
            bind: 'signature-required-first-step-dm'
          }
        }
      }
    }
  };
  const glomoUpdateAddressPayrollManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-update-address-payroll-manager',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName + '_init_channel']: {
            bind: 'initGlobal'
          },
          [getChannelName('save_data_input')]: {
            bind: 'saveDataInput'
          },
          [getChannelName('analytics_handle_app_started_input')]: {
            bind: 'handleAppStartedInput'
          },
          [getChannelName('open_privacy_modal')]: {
            bind: 'privacyModal'
          },
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          [getChannelName('set_response_get_customer_address_success')]: {
            bind: 'customerAddressResponse'
          },
          [getChannelName('set_response_put_address_success')]: {
            bind: 'parsePutAddressResponse'
          },
          [getChannelName('set_response_get_customer_email_success')]: {
            bind: 'customerEmailResponse'
          },
          [getChannelName('set_response_put_address_error')]: {
            bind: 'putAddressError'
          },
          [getChannelName('send_otp_analytics')]: {
            bind: 'fireOtp'
          },
          global_postal_address_nominess_modal_accept: {
            bind: 'onClickStart'
          },
          global_postal_address_nominess_modal_error_accept: {
            bind: 'closeOperative'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'open-modal-postal-address-nominees'
          },
          [getChannelName('set_address_data')]: {
            bind: 'address-id-changed'
          },
          [getChannelName('set_customer_data')]: {
            bind: 'customer-id-changed'
          },
          [getChannelName('put_address_data')]: {
            bind: 'put-address'
          },
          [getChannelName('get_address_data')]: {
            bind: 'get-customer-address'
          },
          [getChannelName('get_email_data')]: {
            bind: 'get-customer-email'
          },
          [getChannelName('analytics_first_info_modal')]: {
            bind: 'analytics-fire-previous-information-modal',
            analytics: analytics.footprintPreviousInformation
          },
          [getChannelName('analytics_app_on_click_start')]: {
            bind: 'analytics-fire-app-on-click-start',
            analytics: analytics.appOnClickStart
          },
          [getChannelName('analytics_app_page_visit')]: {
            bind: 'analytics-fire-app-page-visit',
            analytics: analytics.appPageVisit
          },
          [getChannelName('analytics_app_started_street')]: {
            bind: 'analytics-fire-app-started-street',
            analytics: analytics._getAppStarted(literals.commons.street)
          },
          [getChannelName('analytics_app_started_ext_number')]: {
            bind: 'analytics-fire-app-started-ext-number',
            analytics: analytics._getAppStarted(literals.commons.externalNumber)
          },
          [getChannelName('analytics_app_started_int_number')]: {
            bind: 'analytics-fire-app-started-int-number',
            analytics: analytics._getAppStarted(literals.commons.internalNumber)
          },
          [getChannelName('analytics_app_started_postal_code')]: {
            bind: 'analytics-fire-app-started-postal-code',
            analytics: analytics._getAppStarted(literals.commons.postalCode)
          },
          [getChannelName('analytics_app_step_otp')]: {
            bind: 'analytics-fire-app-step-otp',
            analytics: analytics.appStep4
          },
          [getChannelName('receipt_navigation')]: {
            bind: 'navigate-to-receipt',
            analytics: analytics.appCompleted
          },
          [getChannelName('receipt_result')]: {
            bind: 'receipt-result'
          },
          [getChannelName('analytics_privacy_modal_data')]: {
            bind: 'analytics-fire-open-privacy-modal',
            analytics: analytics.footprintPrivacyNotice
          },
          [getChannelName('analytics_error_request_contract')]: {
            bind: 'analytics-fire-error-request-contract',
            analytics: analytics.footprintErrorService
          },
          close_control_veil: {
            bind: 'history-credit-close-control-veil'
          },
          global_logout_sesion_expiration: {
            bind: 'postal-address-nominees-logout'
          }
        },
        params: {
          globalUser: 'global_user'
        }
      }
    }
  };
  const base = {
    hash: 'postal-address-nominess',
    currentPage: {
      url: '/postal-address-nominees'
    },
    pages,
    template,
    components: [
      spinner(config),
      lifeCycle,
      glomoNavigationHandler,
      header,
      stepInput,
      geographicPlaces,
      customersGlobalApis,
      glomoUpdateAddressPayrollManager
    ]
  };
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', pageName, ['put-contact-detail-address', 'error-on-put-contact-detail-address']);
  return base;
};