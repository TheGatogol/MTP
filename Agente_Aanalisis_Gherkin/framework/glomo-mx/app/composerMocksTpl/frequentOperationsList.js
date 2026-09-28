/* eslint-disable no-dupe-keys */
'use strict';
module.exports = CONFIG => {
  const { useNames, createSpinner, getLanguage, footerHeight } = require('./common/helpers/_utils');
  const pageName = 'frequentOperationsList';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const operativePrefix = pageName.toLowerCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const isNativeShell = CONFIG.nativeShell || false;
  const { appOnclickstartList, modalPageView } = require('./analytics/_frequentOperations')(CONFIG);
  const templateComponet = {
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
      footerHeight,
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
  const lifecycleComponent = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
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
          [`__bridge_page_${pageName}`]: {
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
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const navigationHandlerComponent = {
    zone: 'app__header',
    type: 'DM',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [pageName + '_navigate_to_page']: {
            bind: 'navigateToPage'
          },
          [getChannelName('BUTTON_DELETE_OPERATION')]: {
            bind: 'navigate'
          },
          [getChannelName('navigate_to_search_page')]: {
            bind: 'navigateToPage'
          },
          [getChannelName('navigate_to_previous')]: {
            bind: 'goBack'
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
          }
        }
      }
    }
  };
  const headerComponent = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      id: 'frequenOperations',
      accessibilityTextIconRightPrimary: 'Close',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      iconRightPrimaryExpanded: true,
      text: 'frequent-operations-list-title',
      cellsConnections: {
        out: {
          [getChannelName('navigate_to_previous')]: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };
  const descriptionText = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-top--1 u-margin-bottom--5 text-margin-0',
      size: 'S',
      cellsConnections: {
        in: {
          frequen_operation_list_text: {
            bind: 'text'
          },
          frequen_operation_list_text_alignment: {
            bind: 'alignment'
          }
        }
      }
    }
  };
  const imageHeader = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-banner-image',
    familyPath: '@bbva-web-components/bbva-banner-image',
    render: 'litElement',
    properties: {
      variant: 'large',
      fullwidth: false,
      imageSrc: './images/sustainability/Empty-State-Day.svg',
      cellsConnections: {
        in: {
          frequen_operation_list_empty_image: {
            bind: 'hidden'
          }
        }
      }
    }
  };
  const frequentOperations = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-widget-intelligent-frequent-operations',
    familyPath: '@glomo-web-components/bbva-widget-intelligent-frequent-operations',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      cellsConnections: {
        in: {
          dashboard_accounts: {
            bind: 'globalAccounts'
          },
          global_dashboard_cards: {
            bind: 'globalCards'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          [getChannelName('init_page')]: {
            bind: 'receiveItemsList'
          },
          dashboard_frequent_operations_navigation_operations_list: {
            bind: 'receiveItemsList'
          },
          frequent_operations_get_suggested_operations_success: {
            bind: 'setFrequentOperationsList'
          },
          dashboard_frequent_operations_send_response: {
            bind: 'setFrequentOperationsList'
          },
          frequent_operation_execute_navigation: {
            bind: 'startOneClickNavigation'
          },
          frequen_operation_update_list: {
            bind: 'filterListItems'
          },
          frequent_operations_list_help_modal_button_click: {
            bind: 'setBalanceButtonOperations'
          },
          frequent_operations_list_help_modal_link_click: {
            bind: 'setBalanceLinkOperations'
          },
          frequent_operations_reset_list_filter: {
            bind: 'resetOperationsFilterTags'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          frequen_operation_list: {
            bind: 'frequent-operations-notifications-list'
          },
          frequen_operation_list_text: {
            bind: 'frequent-operations-list-text'
          },
          frequen_operation_list_text_alignment: {
            bind: 'frequent-operations-list-text-alignment'
          },
          frequen_operation_list_empty_image: {
            bind: 'frequent-operations-empty-imagen'
          },
          frequent_operations_filter_tags: {
            bind: 'frequent-operations-filter-items'
          },
          navigate_frequent_transfer: {
            bind: 'navigate-frequent-operations-transfer',
            link: {
              page: 'ocFrequentOperationsTransfer'
            }
          },
          navigate_credit_card_payment: {
            bind: 'navigate-frequent-operations-credit-card-payment',
            link: {
              page: 'ocFrequentOperationsCreditCardPayment'
            }
          },
          frequent_operations_list_set_panel_info_heading: {
            bind: 'frequent-operations-set-panel-info-heading'
          },
          frequent_operations_list_set_panel_info_text: {
            bind: 'frequent-operations-set-panel-info-text'
          },
          frequent_operations_list_set_help_modal_button: {
            bind: 'frequent-operations-set-help-modal-button'
          },
          frequent_operations_list_set_help_modal_link: {
            bind: 'frequent-operations-set-help-link-button'
          },
          frequent_operations_list_open_help_modal: {
            bind: 'frequent-operations-open-help-modal'
          },
          frequent_operations_list_close_help_modal: {
            bind: 'frequent-operations-close-help-modal'
          },
          frequent_operation_execute_navigation: {
            bind: 'view-notification'
          },
          frequent_operation_analytics_app_on_click_start: {
            bind: 'view-notification'
          },
          frequent_operations_transfer_analyitics_app_huella: {
            bind: 'analytics-app-huella'
          },
          dashboard_frequent_operations_send_operation_services: {
            bind: 'navigate-frequent-operations-bill-payments',
            link: {
              page: 'billPayments'
            }
          }
        }
      }
    }
  };
  const analyticsFrequentOperations = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytics-widget-intelligent-frequent-operations',
    familyPath: '@glomo-web-components/bbva-widget-intelligent-frequent-operations',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          frequent_operation_analytics_app_on_click_start: {
            bind: 'filterAppOnClickStart'
          },
          frequent_operations_transfer_analyitics_app_huella: {
            bind: 'fireAnalyticsAppErrorFrequent'
          }
        },
        out: {
          frequent_operation_app_onclick_start: {
            bind: 'app-on-click-start',
            analytics: appOnclickstartList
          },
          frequent_operation_app_huella: {
            bind: 'analytics-app-huella-launch',
            analytics: modalPageView
          }
        }
      }
    }
  };
  const frequentOperationsModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    properties: {
      id: 'frequentOperationsModalList',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal',
      closeModalElements: [ 'header-right-primary' ],
      iconRightPrimary: 'bbva:close',
      headerText: 'frequent-operations-insufficient-balance',
      cellsConnections: {
        in: {
          frequent_operations_list_set_help_modal_button: {
            bind: 'buttonText'
          },
          frequent_operations_list_set_help_modal_link: {
            bind: 'linkText'
          },
          frequent_operations_list_open_help_modal: {
            bind: 'open'
          },
          frequent_operations_list_close_help_modal: {
            bind: 'close'
          }
        },
        out: {
          frequent_operations_list_help_modal_button_click: {
            bind: 'help-modal-footer-button-click'
          },
          frequent_operations_list_help_modal_link_click: {
            bind: 'help-modal-footer-link-click'
          }
        }
      }
    }
  };
  const frequentOperationsPanelInfo = {
    zone: 'frequentOperationsModalList.slot-content',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      headingLevelTitle: 'h3',
      microillustration: 'info',
      cellsConnections: {
        in: {
          frequent_operations_list_set_panel_info_heading: {
            bind: 'heading'
          },
          frequent_operations_list_set_panel_info_text: {
            bind: 'text'
          }
        }
      }
    }
  };
  const base = {
    hash: 'frequent-operations',
    currentPage: {
      url: '/frequent-operations-list'
    },
    template: templateComponet,
    pages,
    components: [
      frequentOperationsModal,
      frequentOperationsPanelInfo,
      lifecycleComponent,
      navigationHandlerComponent,
      headerComponent,
      imageHeader,
      descriptionText,
      frequentOperations,
      analyticsFrequentOperations,
      createSpinner(CONFIG)
    ]
  };
  return base;
};
