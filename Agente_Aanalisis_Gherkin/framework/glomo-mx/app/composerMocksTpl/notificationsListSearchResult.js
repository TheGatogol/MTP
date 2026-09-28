/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const { useNames } = utils;
  const PAGE_NAME = 'notificationsListSearchResult';
  const pages = require('./common/_pages')(CONFIG)('notificationsListSearchResult');
  const OPERATIVE_PREFIX = PAGE_NAME.toLowerCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS = require('./analytics/_notificationList')(CONFIG);
  const LANGUAGE = utils.getLanguage();


  const TEMPLATE_COMPONENT = {
    tag: 'cells-template-coronita',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      avoidToggleMenu: !!CONFIG.nativeShell,
      disableEdgeSwipe: true,
      offset: 120,
      fixOffset: 70,
      rightDrawer: true,
      edgeSwipeSensitivity: 50,
      hasFooter: true,
      footerHeight: 49,
      headerFixed: true,
      animationType: 'verticalUp',
      cellsConnections: {
        in: {
          [getChannelName('_set_initial_filters')]: {
            bind: 'recalculateHeader'
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
          [ '__bridge_page_' + PAGE_NAME ]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('RESET_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('_init_page')]: {
            bind: 'init-page',
            analytics: ANALYTICS._getAdvancedFootprintNotifications('withLevel2', 'resultados')
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
          [getChannelName('BUTTON_DETAIL_NOTIFICATION')]: {
            bind: 'navigate'
          },
          [getChannelName('BUTTON_DELETE_NOTIFICATION')]: {
            bind: 'navigate'
          }
        },
        out: {
          [getChannelName('EXIT_PAGE')]: {
            bind: 'navigate-to-previous-page',
            backStep: true
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
      iconLeftPrimary: 'coronita:return-12',
      text: 'bbva-manager-notifications-list-search-result-header',
      cellsConnections: {
        in: {
          [getChannelName('_set_header_text')]: {
            bind: 'text'
          }
        },
        out: {
          [getChannelName('_header_return')]: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const FORM_FILTER_COMPONENT = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-form-filter',
    familyPath: '@bbva-web-components/bbva-form-filter',
    render: 'litElement',
    properties: {
      editableLabel: 'bbva-manager-notifications-list-search-result-edit',
      ambient: 'dark 400',
      cellsConnections: {
        in: {
          [getChannelName('_set_initial_filters')]: {
            bind: 'filters'
          },
          [getChannelName('_request_update_form_filter')]: {
            bind: 'requestUpdate'
          }
        },
        out: {
          [getChannelName('_form_filter_edit_click')]: {
            bind: 'form-filter-edit-click',
            backStep: true
          },
          [getChannelName('_form_filter_close_click')]: {
            bind: 'form-filter-close-click'
          }
        }
      }
    }
  };

  const TEXT_DATE_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      ambientColor: 'secondary500',
      text: 'bbva-manager-notifications-list-search-result-order-by',
      textColor: 'secondary500'
    }
  };

  const BBVA_AGGREGATION_SWIPE_LIST_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-swipe-list',
    familyPath: '@glomo-web-components/bbva-aggregation-swipe-list',
    render: 'litElement',
    properties: {
      textWithoutNotifications: '',
      language: LANGUAGE,
      cellsConnections: {
        in: {
          [getChannelName('list_notifications')]: {
            bind: 'notifications'
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

  const MANAGER_MESSAGE_CENTER_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-message-center',
    familyPath: '@glomo-web-components/bbva-manager-message-center',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'customerId'
          },
          [getChannelName('_header_return')]: {
            bind: 'resetSearchResult'
          },
          [getChannelName('_succes_pagination_notifications')]: {
            bind: 'succesNotifications'
          },
          [getChannelName('_error_pagination_notifications')]: {
            bind: 'errorNotifications'
          },
          [getChannelName('_succes_all_pagination_notifications')]: {
            bind: 'setNotificationsPage'
          },
          [getChannelName('_error_all_pagination_notifications')]: {
            bind: 'errorGetNotificationsPage'
          },
          [getChannelName('_form_filter_close_click')]: {
            bind: 'formFilterCloseItem'
          },
          notificationslistsearch_navigate_to_search_result: {
            bind: 'handleFilters'
          },
          [getChannelName('BUTTON_DETAIL_NOTIFICATION')]: {
            bind: 'detailNotifications'
          }
        },
        out: {
          [getChannelName('_set_text_no_notifications')]: {
            bind: 'set-text-card-advice'
          },
          [getChannelName('_notifications_list_hidden')]: {
            bind: 'set-notifications-hidden'
          },
          [getChannelName('_notifications_list_set_panel_hidden_state')]: {
            bind: 'set-notifications-list-panel-hidden-state'
          },
          [getChannelName('_set_initial_filters')]: {
            bind: 'set-initial-filters'
          },
          [getChannelName('_request_update_form_filter')]: {
            bind: 'request-update-form-filter'
          },
          [getChannelName('list_notifications')]: {
            bind: 'set-notifications-list-config'
          },
          global_notifications_list_notification_detail: {
            bind: 'show-detail-event'
          }
        }
      }
    }
  };

  const base = {
    hash: 'notifications-list-search-result',
    currentPage: {
      url: '/notifications-list-search-result'
    },
    template: TEMPLATE_COMPONENT,
    pages,
    components: [
      LIFECYCLE_COMPONENT,
      NAVIGATION_HANDLER_COMPONENT,
      HEADER_COMPONENT,
      FORM_FILTER_COMPONENT,
      TEXT_DATE_COMPONENT,
      BBVA_AGGREGATION_SWIPE_LIST_COMPONENT,
      CARD_COMPONENT,
      SPINNER,
      MANAGER_MESSAGE_CENTER_COMPONENT
    ]
  };

  return base;
};
