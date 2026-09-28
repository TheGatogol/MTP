'use strict';

module.exports = CONFIG => {
  const { useNames, createPrefixFromPageName, addFeatureFlag } = require('./common/helpers/_utils');
  const PAGE_NAME = 'settings';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;

  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const _localStorage = require('./common/_local-storage');

  const analyticsMobilePayment = require('./analytics/_mobilePayment')({});
  const analyticsCodi = require('./analytics/_codiSettings')({});

  const SETTINGS_ITEMS = [
    { name: 'notifications' },
    { name: 'operations'    },
    { name: 'configure'     },
    { name: 'security'      },
    { name: 'mobilePayment' },
    { name: 'codi'          }
  ];

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'fade',
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: true,
      footerHeight: 48,
      footerFixed: true,
      headerFixed: true,
      extraHeaderClass: 'dark-blue-bg',
      iOSFixedHeader: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      rightDrawer: true,
      disableEdgeSwipe: !!CONFIG.nativeShell,
      avoidToggleMenu: !!CONFIG.nativeShell,
      edgeSwipeSensitivity: 50,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
    }
  };

  const handlerLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('reset')]: {
            bind: 'reset'
          },
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_device_info_get_nfc_status: {
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
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [getChannelName('go_back')]: {
            bind: 'goBack'
          },

          [getChannelName('navigate_to_page')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('close_page')]: {
            bind: 'header-left-button',
            backStep: true
          },
          [getChannelName('navigate_to_notifications_settings')]: {
            bind: 'navigation-to-notificationsSettings',
            link: {
              page: 'notificationsSettingsPage'
            }
          },
          [getChannelName('navigate_to_operational_limits')]: {
            bind: 'navigation-to-operationalLimits',
            link: addFeatureFlag('configuration.operationalLimits', {
              page: 'operationalLimits'
            })
          },
          [getChannelName('navigate_to_configure_products')]: {
            bind: 'navigation-to-configureProductsPage',
            link: {
              page: 'configureProductsPage'
            }
          },
          [getChannelName('navigate_to_security_settings')]: {
            bind: 'navigation-to-securitySettings',
            link: {
              page: 'comingSoon'
            }
          },
          [getChannelName('navigate_to_codi_settings')]: {
            bind: 'navigation-to-codiSettings',
            link: {
              page: 'codiSettings'
            },
            analytics: analyticsCodi.codiSettings
          },
          [getChannelName('navigate_to_mobilePayment_settings')]: {
            bind: 'navigation-to-mobilePayment',
            analytics: analyticsMobilePayment.internalLinks.settings,
            link: {
              page: 'mobilePayment',
              params: {
                continue: 'operation'
              }
            }
          },
          navigate_to_modal_business_debit_card: {
            bind: 'navigation-to-noClientBusinessDebitCardInfo',
            link: {
              page: 'noClientBusinessDebitCardInfo'
            }
          },
          settings_navigate_to_income_limits: {
            bind: 'navigation-to-incomeLimitsPage',
            link: {
              page: 'incomeLimitsPage'
            }
          },
          settings_navigate_to_language_settings: {
            bind: 'navigation-to-languageSettings',
            link: {
              page: 'languageSettings'
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
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--white',
      leftIcon: 'coronita:return-12',
      titleName: 'Configuraciones',
      cellsConnections: {
        in: {},
        out: {
          [getChannelName('go_back')]: {
            bind: 'click-left-button'
          }
        }
      }
    },
    propertiesSpherica: {
      leftIcon: 'coronita:back-mini',
      className: 'header--core-grey header',
      variant: 'primary-alt',
      leftIconText: 'cells-molecule-header-spherica-go-back',
      titleName: 'cells-molecule-header-spherica-settings-title'
    }
  };

  const buttonList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-button-list',
    tagSpherica: 'glomo-button-list-spherica',
    properties: {
      className: 'delete-outline no-padding',
      addDivisor: true,
      cellsConnections: {
        in: {
          [getChannelName('set_items')]: {
            bind: 'buttons'
          }
        },
        out: {
          [getChannelName('item_clicked')]: {
            bind: 'button-clicked'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'button-list-padding gap-m',
      addDivisor: false
    }
  };


  const toastDelete = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-toast',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-notification-toast',
    familyPathSpherica: '@bbva-spherica-components/bbva-notification-toast',
    properties: {
      type: 'success',
      iconExplainer: 'coronita:correct',
      fixedBottom: 'true',
      simpleLinkText: 'codi-refeactor-settings-log-deleted',
      duration: '3000',
      autoHide: 'true',
      cellsConnections: {
        in: {
          codi_settings_show_toast_delete_codi: {
            bind: 'show'
          },
          codi_settings_set_simple_link_toast_detele: {
            bind: isSpherica ? 'alertText' : 'simpleLinkText'
          }
        },
        out: {

        }
      }
    },
    propertiesSpherica: {
      iconExplainer: 'spherica:right',
      className: 'u-margin--1 u-margin-bottom--2 u-max-width--2',
      simpleLinkText: ''
    }
  };


  const glomoSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-settings-dm-mx',
    familyPath: 'glomo-settings-dm',
    properties: {
      items: SETTINGS_ITEMS,
      removedNotificationsInHms: true,
      filterItems: true,
      ignoreNotificationsState: true,
      isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'getItems'
          },
          [getChannelName('item_clicked')]: {
            bind: 'manageSetting'
          },
          show_settings_page: {
            bind: 'receiveFlags'
          },
          global_cache_channel: {
            bind: 'getCacheStorage'
          },
          account_is_tdde_monoproduct: {
            bind: 'isTddeMonoproduct'
          },
          global_storage_get_monoproduct_success: {
            bind: 'setStorageMonoproduct'
          },
          global_storage_get_monoproduct_error: {
            bind: 'hasMonoproductStorageError'
          },
          global_device_get_device_nfc_status_success: {
            bind: 'nfcStatus'
          },
          global_financial_overview_success: {
            bind: 'hasValidIncomeLimit'
          },
          global_feature_flag_collection_updated: {
            bind: 'setIncomeLimitFlag'
          }
        },
        out: {
          [getChannelName('set_items')]: {
            bind: 'items-configuration-changed'
          },
          [getChannelName('navigate_to_page')]: {
            bind: 'navigate-to-setting'
          },
          settings_send_flags: {
            bind: 'request-to-params'
          },
          open_bottom_modal: {
            bind: 'open-unregister-modal'
          },
          SEND_IS_MONO_ADDITIONAL_USER_VALUE: {
            bind: 'send-is-mono-additional-user-value'
          },
          global_get_from_storage: {
            bind: 'get-native-local-storage',
            'forward-to-native': true
          },
          navigation_settings_to_invitation_non_account_link: {
            bind: 'invitation-non-account-link',
            link: {
              page: 'invitationNonAccountClient'
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'settings',
    currentPage: {
      url: '/settings',
      params: []
    },
    pages: pages,
    template,
    components: [
      handlerLifeCycle,
      navigationHandler,
      header,
      buttonList,
      glomoSettings,
      toastDelete
    ]
  };

  _localStorage.addOutStorageChannels(base.components, [ 'monoproduct' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
