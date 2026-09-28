/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const { useNames } = utils;
  const PAGE_NAME = 'notificationsListSearch';
  const pages = require('./common/_pages')(CONFIG)('notificationsListSearch');
  const OPERATIVE_PREFIX = PAGE_NAME.toLowerCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS = require('./analytics/_notificationList')(CONFIG);

  const TEMPLATE_COMPONENT = {
    tag: 'cells-template-coronita',
    properties: {
      extraHeaderClass: 'bbva-core-blue',
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
      animationType: 'verticalUp'
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
          [getChannelName('_init_page')]: {
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
          },
          [getChannelName('navigate_to_search_result_page')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('EXIT_PAGE')]: {
            bind: 'navigate-to-previous-page',
            backStep: true
          },
          [getChannelName('navigate_to_search_result')]: {
            bind: 'navigation-to-notificationsListSearchResult',
            link: {
              page: 'notificationsListSearchResult'
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
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      text: 'bbva-manager-notifications-list-search',
      variant: 'modal',
      cellsConnections: {
        out: {
          [getChannelName('_header_close')]: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const FORM_CHECKBOX_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-checkbox',
    familyPath: '@bbva-web-components/bbva-form-checkbox',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid bbva-form-checkbox-variant-icon-clip-color--colorsPrimaryCoreLight',
      checkIcon: 'coronita:checkmark',
      variant: 'icon',
      entity: 'coronita:transfer',
      entitySize: 'medium',
      required: true,
      id: 'expense',
      cellsConnections: {
        in: {
          [getChannelName('_set_checkbox_label_out')]: {
            bind: 'labelOut'
          },
          [getChannelName('_set_checkbox_label_movements')]: {
            bind: 'label'
          },
          [getChannelName('_set_checked_filters')]: {
            bind: 'checked'
          }
        }
      }
    }
  };

  const DIVIDER1_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      size: 'full'
    }
  };

  const FORM_CHECK_BOX2_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-checkbox',
    familyPath: '@bbva-web-components/bbva-form-checkbox',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid bbva-form-checkbox-variant-icon-clip-color--colorsPrimaryCoreLight',
      checkIcon: 'coronita:checkmark',
      variant: 'icon',
      entity: 'coronita:info',
      entitySize: 'medium',
      required: true,
      id: 'alert',
      cellsConnections: {
        in: {
          [getChannelName('_set_checkbox_label_informatives')]: {
            bind: 'label'
          },
          [getChannelName('_set_checked_filters')]: {
            bind: 'checked'
          }
        }
      }
    }
  };

  const DIVIDER2_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      size: 'full'
    }
  };
  const FORM_CHECK_BOX3_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-checkbox',
    familyPath: '@bbva-web-components/bbva-form-checkbox',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid bbva-form-checkbox-variant-icon-clip-color--colorsTertiaryType8Dark',
      checkIcon: 'coronita:checkmark',
      variant: 'icon',
      entity: 'coronita:sales',
      entitySize: 'medium',
      id: 'sales',
      required: true,
      cellsConnections: {
        in: {
          [getChannelName('_set_checkbox_label_promotions')]: {
            bind: 'label'
          },
          [getChannelName('_set_checked_filters')]: {
            bind: 'checked'
          }
        }
      }
    }
  };

  const PANEL_BUTTON_FIXED_COMPONENT = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      show: true,
      sticky: false,
      className: 'u-box-shadow--none',
      cellsConnections: {
        in: {
          [getChannelName('_set_confirm_button_text')]: {
            bind: 'buttonText'
          },
          [getChannelName('_set_cancel_button_text')]: {
            bind: 'footerLink'
          }
        },
        out: {
          [getChannelName('_search_button_clicked')]: {
            bind: 'panel-button-fixed-item-click'
          },
          [getChannelName('_delete_filters_clicked')]: {
            bind: 'panel-button-fixed-footer-link-click'
          }
        }
      }
    }
  };

  const MANAGER_MESSAGE_CENTER = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-message-center',
    familyPath: '@glomo-web-components/bbva-manager-message-center',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('_init_page')]: {
            bind: 'initNotificationsListSearchPage'
          },
          [getChannelName('_header_close')]: {
            bind: 'deleteFilters'
          },
          global_login_success: {
            bind: 'customerId'
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
          [getChannelName('_delete_filters_clicked')]: {
            bind: 'deleteFilters'
          },
          [getChannelName('_search_button_clicked')]: {
            bind: 'searchFiltersSelected'
          },
          notificationslist_list_notifications: {
            bind: 'allNotifications'
          },
          [getChannelName('BUTTON_DETAIL_NOTIFICATION')]: {
            bind: 'detailNotifications'
          },
          notificationslist_navigate_to_search_page: {
            bind: 'setNotificationsStored'
          }
        },
        out: {
          [getChannelName('_set_checkbox_label_out')]: {
            bind: 'set-form-checkbox-label-out'
          },
          [getChannelName('_set_checkbox_label_movements')]: {
            bind: 'set-form-checkbox-label-movements'
          },
          [getChannelName('_set_checkbox_label_informatives')]: {
            bind: 'set-form-checkbox-label-informatives'
          },
          [getChannelName('_set_checkbox_label_promotions')]: {
            bind: 'set-form-checkbox-label-promotions'
          },
          [getChannelName('_set_confirm_button_text')]: {
            bind: 'set-button-confirm-text'
          },
          [getChannelName('_set_cancel_button_text')]: {
            bind: 'set-button-cancel-text'
          },
          [getChannelName('_set_checked_filters')]: {
            bind: 'set-checked-filters'
          },
          [getChannelName('navigate_to_search_result_page')]: {
            bind: 'navigate-to-search-result'
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

  const base = {
    hash: 'notifications-list-search',
    currentPage: {
      url: '/notifications-list-search'
    },
    template: TEMPLATE_COMPONENT,
    pages,
    components: [
      LIFECYCLE_COMPONENT,
      NAVIGATION_HANDLER_COMPONENT,
      HEADER_COMPONENT,
      SPINNER,
      FORM_CHECKBOX_COMPONENT,
      DIVIDER1_COMPONENT,
      FORM_CHECK_BOX2_COMPONENT,
      DIVIDER2_COMPONENT,
      FORM_CHECK_BOX3_COMPONENT,
      PANEL_BUTTON_FIXED_COMPONENT,
      MANAGER_MESSAGE_CENTER
    ]
  };

  return base;
};
