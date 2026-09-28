/* eslint-disable no-shadow */
'use strict';
module.exports = (CONFIG) => {
  const { useNames, createPrefixFromPageName, headerHeightMinimum } = require('./common/helpers/_utils');
  const pageName = 'magicLog';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const _localStorage = require('./common/_local-storage');
  const analyticsMagic = require('./analytics/_magicLog')(CONFIG);
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        customersV1
      }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerHeight: headerHeightMinimum,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      requiredToken,
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
          [getGlobalName('init_page')]: {
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
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      cellsConnections: {
        in: {
          magicLog_navigation_to_upgrade: {
            bind: 'navigateToPage'
          },
          magicLog_navigation_to_payroll: {
            bind: 'navigateToPage'
          },
          magicLog_navigation_to_proceedings: {
            bind: 'navigateToPage'
          },
          magicLog_navigation_to_comingSoon: {
            bind: 'navigateToPage'
          },
          magicLog_back_navigation: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('navigation_upgradeN2N4')]: {
            bind: 'navigation-to-upgradeN2N4',
            link: {
              page: 'upgradeN2N4',
              skipHistory: true
            }
          },
          [getChannelName('navigation_payroll')]: {
            bind: 'navigation-to-payrollLink',
            link: {
              page: 'payrollLink',
              skipHistory: true
            }
          },
          magicLog_navigation_proceedings: {
            bind: 'navigation-to-proceedings',
            link: {
              page: 'proceedings',
              skipHistory: true
            }
          },
          global_logout_sesion_expiration: {
            bind: 'navigation-to-comingSoon'
          }
        }
      }
    }
  };
  const magicLogComponent = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'bbva-widget-account-configuration-section',
    tagSpherica: 'bbva-widget-account-configuration-section-spherica',
    familyPath: '@glomo-web-components/bbva-widget-account-configuration-section',
    familyPathSpherica: '@glomo-web-components/bbva-widget-account-configuration-section-spherica',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      customersApiVersion: customersV1,
      customerAddressesApiVersion: customersV1,
      appSettingsKey: 'externalUrlFallInOptionLinkCard',
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          global_client_id: {
            bind: 'clientId'
          },
          global_financial_overview_details: {
            bind: 'dataReceived'
          },
          geolocation_consent_success: {
            bind: 'operationCodeGeo'
          },
          global_user: {
            bind: 'getDataCustomer'
          },
          global_storage_get_magic_log_success: {
            bind: 'getCardDetailLocalStorage'
          },
          global_storage_get_magic_log_error: {
            bind: 'getCardDetailLocalStorageError'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'bbva-widget-account-configuration-section-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'bbva-widget-account-configuration-section-set-data-storage'
          },
          global_logout_sesion_expiration: {
            bind: 'bbva-widget-account-configuration-section-go-back'
          },
          magicLog_navigation_to_upgrade: {
            bind: 'bbva-widget-account-configuration-section-navigate-to-upgrade'
          },
          magicLog_navigation_to_payroll: {
            bind: 'bbva-widget-account-configuration-section-navigate-to-payroll'
          },
          OPEN_UPGRADE_MODULAR: {
            bind: 'bbva-widget-account-configuration-section-data-upgrate-n2-n4'
          },
          payroll_send_account_info: {
            bind: 'bbva-widget-account-configuration-section-data-link'
          },
          payroll_send_customer_info: {
            bind: 'bbva-widget-account-configuration-section-data-name'
          },
          payroll_send_assign: {
            bind: 'bbva-widget-account-configuration-section-assign-local'
          },
          global_landing_page_manager_next_flow: {
            bind: 'bbva-widget-account-configuration-section-next-flow-navigation'
          },
          navigation_product_detail_to_receive_payroll: {
            bind: 'bbva-widget-account-configuration-section-data-portabilty'
          },
          payroll_benefist_email: {
            bind: 'bbva-widget-account-configuration-section-email'
          },
          ocPayrollPortability_new_payroll_on_product_selected: {
            bind: 'bbva-widget-account-configuration-section-data-account-selected'
          },
          payroll_portability_magic_log_on: {
            bind: 'bbva-widget-account-configuration-section-assign-local'
          },
          [getChannelName('page_view_magic')]: {
            bind: 'bbva-widget-account-configuration-section-page-view-magic',
            analytics: analyticsMagic.pageViewMagic
          },
          magicLog_navigation_to_proceedings: {
            bind: 'bbva-widget-account-configuration-section-navigate-to-proceedings'
          },
          magicLog_navigation_to_comingSoon: {
            bind: 'bbva-widget-account-configuration-section-navigate-to-comingSoon'
          },
          navigate_to_proceedings: {
            bind: 'bbva-widget-account-configuration-section-data-proceedings'
          },
          global_action_launcher_uri: {
            bind: 'bbva-widget-account-configuration-section-modal-navigate-to-credit-card'
          },
          magicLog_back_navigation: {
            bind: 'bbva-widget-account-configuration-section-go-back',
            backStep: true
          },
          magicLog_send_email_to_proceedings: {
            bind: 'bbva-widget-account-configuration-section-email-proceedings'
          }
        }
      }
    },
    propertiesSpherica: {
      isExitModalHeaderFixed: nativeIos
    }
  };
  const base = {
    hash: 'magic-log',
    currentPage: {
      url: '/magic-log'
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      magicLogComponent
    ]
  };
  _localStorage.addOutStorageChannels(base.components, [ 'magic_log' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
