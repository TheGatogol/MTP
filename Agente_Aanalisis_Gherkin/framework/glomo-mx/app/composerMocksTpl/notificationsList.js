/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const {
    useNames,
    SPINNER: spinner,
    APP_SIDEBAR: appSidebar,
    appFooter,
    getLanguage,
    get
  } = require('./common/helpers/_utils');
  const PAGE_NAME = 'notificationsList';
  const pages = require('./common/_pages')(CONFIG)('notificationsList');
  const OPERATIVE_PREFIX = PAGE_NAME.toLowerCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const SPINNER = spinner(CONFIG);
  const ANALYTICS = require('./analytics/_notificationList')(CONFIG);
  const APP_FOOTER = appFooter(CONFIG, 'notificationsList');
  const isNativeShell = CONFIG.nativeShell || false;
  const LANGUAGE = getLanguage();
  const localStorage = require('./common/_local-storage');

  const secureCallTags = [
    'A000000591',
    'A000000592',
    'A000000593',
    'A000000594',
    'A000000595',
    'A000000596',
    'A000000597',
    'A000000765',
    'A000000766',
    'A000000767',
    'A000000768',
    'A000000817',
    'A000000850',
    'A000000857'
  ];

  const TEMPLATE_COMPONENT = {
    tag: 'cells-template-coronita',
    properties: {
      extraHeaderClass: 'bbva-core-blue',
      drawerWidth: '100%',
      disableScrollLock: true,
      avoidToggleMenu: isNativeShell,
      disableEdgeSwipe: isNativeShell,
      offset: 120,
      fixOffset: 70,
      rightDrawer: true,
      edgeSwipeSensitivity: 50,
      hasFooter: true,
      footerHeight: 49,
      headerFixed: true,
      cellsConnections: {
        in: {
          global_open_native_menu: {
            bind: 'toggleMenu'
          },
          [getChannelName('_set_button_row_options')]: {
            bind: 'recalculateHeader'
          }
        },
        out: {
          [getChannelName('_transactions_template_scroll_complete')]: {
            bind: 'template-content-scroll-final'
          }
        }
      }
    }
  };

  const LIFECYCLE_COMPONENT = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
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
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('RESET_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('init_page')]: {
            bind: 'init-page-first-time'
          },
          [getChannelName('init_local_storage')]: {
            bind: 'init-page-first-time'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const NAVIGATION_HANDLER_COMPONENT = {
    zone: 'app__header',
    type: 'DM',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigate-to-previous-page',
      continue: 'comingSoon',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_navigate_to_page']: {
            bind: 'navigateToPage'
          },
          [getChannelName('BUTTON_DELETE_NOTIFICATION')]: {
            bind: 'navigate'
          },
          [getChannelName('navigate_to_search_page')]: {
            bind: 'navigateToPage'
          },
          [getChannelName('navigate_to_coming_soon')]: {
            bind: 'navigate'
          }
        },
        out: {
          [getChannelName('EXIT_PAGE')]: {
            bind: 'navigate-to-previous-page',
            backStep: true
          },
          [getChannelName('NAVIGATE_SEARCH')]: {
            bind: 'navigation-to-notificationsListSearch',
            link: {
              page: 'notificationsListSearch'
            }
          },
          [getChannelName('NAVIGATE_TO_COMINGSOON')]: {
            bind: 'navigation-to-comingSoon',
            link: {
              page: 'comingSoon'
            }
          }
        }
      }
    }
  };

  const HEADER_COMPONENT = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      iconRightPrimary: 'coronita:menu',
      text: 'bbva-manager-notifications-list-message-center',
      variant: 'modal',
      cellsConnections: {
        out: {
          global_open_native_menu: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const BBVA_BUTTONS_OPERATIONS_COMPONENT = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-button-row',
    familyPath: '@bbva-spherica-components/bbva-button-row',
    render: 'litElement',
    properties: {
      variant: 'simple',
      ambient: 'dark',
      cellsConnections: {
        in: {
          [getChannelName('_set_button_row_options')]: {
            bind: 'options'
          }
        },
        out: {
          [getChannelName('_button_row_redirect')]: {
            bind: 'button-row-item-click'
          }
        }
      }
    }
  };

  const MANAGER_MESSAGE_CENTER_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-message-center',
    familyPath: '@glomo-web-components/bbva-manager-message-center',
    render: 'litElement',
    properties: {
      secureCallTags: secureCallTags,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initPageMessageCenter'
          },
          global_login_success: {
            bind: 'globalLogin'
          },
          [getChannelName('_succes_get_notifications')]: {
            bind: 'firstSuccessNotifications'
          },
          [getChannelName('_error_get_notifications')]: {
            bind: 'errorNotifications'
          },
          [getChannelName('_notifications_complete_last_response')]: {
            bind: 'succesNotifications'
          },
          [getChannelName('_pagination_result')]: {
            bind: 'pagination'
          },
          [getChannelName('_succes_all_pagination_notifications')]: {
            bind: 'successAllPaginationNotifications'
          },
          [getChannelName('_error_all_pagination_notifications')]: {
            bind: 'errorGetNotificationsPage'
          },
          [getChannelName('_button_row_redirect')]: {
            bind: 'redirectToNextPage'
          },
          [getChannelName('_transactions_template_scroll_complete')]: {
            bind: 'scrollMax'
          },
          [getChannelName('BUTTON_DETAIL_NOTIFICATION')]: {
            bind: 'detailNotifications'
          },
          [getChannelName('init_local_storage')]: {
            bind: 'getStorageMonoproduct'
          },
          global_storage_get_monoproduct_success: {
            bind: 'setStorageMonoproduct'
          },
          global_storage_get_monoproduct_error: {
            bind: 'hasMonoproductStorageError'
          }
        },
        out: {
          [getChannelName('_set_text_no_notifications')]: {
            bind: 'set-text-card-advice'
          },
          [getChannelName('_set_button_row_options')]: {
            bind: 'set-button-row-options'
          },
          [getChannelName('_get_pagination_notifications')]: {
            bind: 'request-notifications'
          },
          [getChannelName('_get_last_response_notifications')]: {
            bind: 'get-last-response'
          },
          [getChannelName('_get_next_paginations_notifications')]: {
            bind: 'get-notifications-page'
          },
          [PAGE_NAME + '_get_notifications_non_commercial']: {
            bind: 'get-notifications-list-non-commercial'
          },
          [getChannelName('_notifications_list_show')]: {
            bind: 'show-notifications'
          },
          [getChannelName('_update_monoproduct_user')]: {
            bind: 'update-is-monoproduct-user'
          },
          global_get_from_storage: {
            bind: 'get-native-local-storage',
            'forward-to-native': true
          },
          [getChannelName('_notifications_list_hidden')]: {
            bind: 'set-notifications-hidden',
            analytics: ANALYTICS._getAdvancedFootprintNotifications('withLevel2', 'sin notificaciones')
          },
          [getChannelName('_notifications_list_set_panel_hidden_state')]: {
            bind: 'set-notifications-list-panel-hidden-state'
          },
          [getChannelName('list_notifications')]: {
            bind: 'set-notifications-list-config',
            analytics: ANALYTICS._getAdvancedFootprintNotifications('default')
          },
          [getChannelName('navigate_to_search_page')]: {
            bind: 'navigate-to-search-page',
            analytics: ANALYTICS._getAdvancedFootprintNotifications('withLevel2', 'filtrar')
          },
          [getChannelName('navigate_to_coming_soon')]: {
            bind: 'navigate-to-coming-soon'
          },
          global_notifications_list_notification_detail: {
            bind: 'show-detail-event'
          },
          [getChannelName('analytics_financial_operation')]: {
            bind: 'set-analitics-financial-operation',
            analytics: ANALYTICS._getAdvancedFootprintNotifications('withLevel3', 'movimientos de dinero', 'detalle')
          },
          [getChannelName('analytics_management_operation')]: {
            bind: 'set-analitics-management-operation',
            analytics: ANALYTICS._getAdvancedFootprintNotifications('withLevel3', 'avisos informativos', 'detalle')

          },
          [getChannelName('analytics_sales_operation')]: {
            bind: 'set-analitics-sales',
            analytics: ANALYTICS._getAdvancedFootprintNotifications('withLevel3', 'ofertas y promociones', 'detalle')
          }
        }
      }
    }
  };

  const GLOBAL_APIS_NOTIFICATIONS_COMPONENT = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-notifications-list',
    familyPath: '@glomo-web-components/bbva-dataprovider-notifications-list',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('_get_pagination_notifications')]: {
            bind: 'getNotifications'
          },
          [getChannelName('_get_last_response_notifications')]: {
            bind: 'getNotificationsLastResponse'
          },
          [getChannelName('_get_next_paginations_notifications')]: {
            bind: 'getNotifications'
          }
        },
        out: {
          [getChannelName('_succes_get_notifications')]: {
            bind: 'get-mx-notfications-v0-success'
          },
          [getChannelName('_error_get_notifications')]: {
            bind: 'get-mx-notifications-v0-error'
          },
          [getChannelName('_error_get_notifications')]: {
            bind: 'api-dm-error'
          },
          [getChannelName('_pagination_result')]: {
            bind: 'get-mx-notfications-v0-pagination'
          },
          [getChannelName('_notifications_complete_last_response')]: {
            bind: 'get-mx-notfications-v0-last-response'
          },
          [getChannelName('_succes_all_pagination_notifications')]: {
            bind: 'set-notifications-page'
          },
          [getChannelName('_error_all_pagination_notifications')]: {
            bind: 'error-on-get-notifications-page'
          }
        }
      }
    }
  };

  const HEADER_CATEGORY_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    properties: {
      variant: 'alert',
      text: 'bbva-header-category-notifications-title'
    }
  };

  const BBVA_AGGREGATION_SWIPELIST_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-swipe-list',
    familyPath: '@glomo-web-components/bbva-aggregation-swipe-list',
    render: 'litElement',
    properties: {
      textWithoutNotifications: '',
      hidden: true,
      language: LANGUAGE,
      cellsConnections: {
        in: {
          [getChannelName('list_notifications')]: {
            bind: 'notifications'
          },
          [getChannelName('_notifications_list_show')]: {
            bind: 'hidden'
          },
          [getChannelName('_notifications_list_hidden')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('BUTTON_DETAIL_NOTIFICATION')]: {
            bind: 'view-notification'
          },
          [getChannelName('BUTTON_DELETE_NOTIFICATION')]: {
            bind: 'delete-notification'
          },
          [getChannelName('BUTTON_SHARE_NOTIFICATION')]: {
            bind: 'share-notification'
          }
        }
      }
    }
  };

  const CARD_COMPONENT = {
    zone: 'app__main',
    tag: 'cells-card-advice',
    type: 'UI',
    properties: {
      hidden: true,
      className: 'no-wrapper empty-state',
      imageUrl: './images/empty_state_day.svg',
      isBackgroundLight: true,
      cellsConnections: {
        in: {
          [getChannelName('_notifications_list_set_panel_hidden_state')]: {
            bind: 'hidden'
          },
          [getChannelName('_set_text_no_notifications')]: {
            bind: 'text'
          }
        }
      }
    }
  };

  const base = {
    hash: 'notifications-list',
    currentPage: {
      url: '/notifications-list'
    },
    template: TEMPLATE_COMPONENT,
    pages,
    components: [
      LIFECYCLE_COMPONENT,
      NAVIGATION_HANDLER_COMPONENT,
      HEADER_COMPONENT,
      BBVA_BUTTONS_OPERATIONS_COMPONENT,
      HEADER_CATEGORY_COMPONENT,
      BBVA_AGGREGATION_SWIPELIST_COMPONENT,
      SPINNER,
      MANAGER_MESSAGE_CENTER_COMPONENT,
      GLOBAL_APIS_NOTIFICATIONS_COMPONENT,
      CARD_COMPONENT
    ]
  };

  if (APP_FOOTER) {
    APP_FOOTER.properties.cellsConnections.in = {
      ...APP_FOOTER.properties.cellsConnections.in,
      [getChannelName('_update_monoproduct_user')]: {
        bind: 'isMonoproductUser'
      }
    };

    APP_FOOTER.properties.cellsConnections.out = {
      ...APP_FOOTER.properties.cellsConnections.out,
      [getChannelName('_navigate_to_invitation_non_account')]: {
        bind: 'invitation-non-account-link',
        link: {
          page: 'invitationNonAccountClient'
        }
      }
    };
    base.components.splice(5, 0, APP_FOOTER);
  }

  if (CONFIG.nativeShell) {
    const getComponent = get(base);
    getComponent('bbva-header-main').properties.cellsConnections.out = {
      global_open_native_menu: {
        bind: 'header-main-icon-right-primary-click',
        'forward-to-native': true
      }
    };
  } else {
    base.components.push(appSidebar(CONFIG));
  }
  localStorage.addOutStorageChannels(base.components, [ 'monoproduct' ], CONFIG);
  return base;
};
