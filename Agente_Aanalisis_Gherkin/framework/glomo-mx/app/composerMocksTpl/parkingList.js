'use strict';
module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    getLocalCurrency,
    createSpinner
  } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { payments } },
    native,
    nativeIos
  } = CONFIG;
  const pageName = 'parkingList';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const operativePrefix = createPrefixFromPageName(pageName);
  const [getChannelName, getLocaleName] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();
  const getLocalePrefix = channelName => `glomo-${getLocaleName(channelName)}`;
  const analyticsEnrollment = require('./analytics/_parkingEnrollment')(CONFIG);
  const analyticsRecharge = require('./analytics/_parkingRecharge')(CONFIG);
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector');

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
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          },
          [getGlobalName('good_bye')]: {
            bind: 'reset'
          },
          [getGlobalName('navigate_to_parkingInfoList')]: {
            bind: 'reset'
          },
          [getGlobalName('complete_navigate_enrollment')]: {
            bind: 'reset'
          },
          [getGlobalName('complete_navigate_recharge')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('init_channel')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          [getGlobalName('reset_list_flow')]: {
            bind: 'reset'
          }
        }
      }
    }
  };
  const globalPayments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-payments',
    properties: {
      host,
      headers: { 'Accept-Language': 'es' },
      requiredToken,
      native,
      paymentsApiVersion: payments,
      cellsConnections: {
        in: {
          [getGlobalName('request_accounts')]: {
            bind: 'getStoredServices'
          },
          [getGlobalName('request_delete_account')]: {
            bind: 'deleteStoredService'
          }
        },
        out: {
          [getGlobalName('success_list_services')]: {
            bind: 'set-stored-services-list'
          },
          [getGlobalName('error_list_services')]: {
            bind: 'error-on-get-stored-services'
          },
          [getGlobalName('success_on_request_delete')]: {
            bind: 'stored-service-deleted'
          },
          [getGlobalName('error_on_request_delete')]: {
            bind: 'error-on-stored-service-deleted'
          }
        }
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      iOSFixedHeader: nativeIos,
      disableEdgeSwipe: true,
      extraHeaderClass: 'header--core',
      headerFixed: true,
      preventScrollWithOverlay: true,
      topOnConfirm: true
    },
    propertiesSpherica: {
      className: 'bg-light-grey'
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      accessibilityTextIconLeftPrimary: 'Return',
      accessibilityTextIconRightSecondary: 'Help',
      iconLeftPrimary: 'coronita:return-12',
      iconRightSecondary: 'coronita:help',
      text: getLocalePrefix('header-list'),
      cellsConnections: {
        out: {
          [getGlobalName('back_to_top_up_page')]: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          },
          [getGlobalName('go_to_answer_faqs')]: {
            bind: 'header-main-icon-right-secondary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'first-level-sequential',
      rightIconLabel: 'bbva-header-main-help-aria-label',
      leftIconLabel: 'bbva-header-main-return-aria-label',
      leftButtons: [
        {
          icon: 'spherica:back-mini',
          defaultEventIconName: 'header-main-icon-left-primary-click',
          label: 'bbva-header-main-return-aria-label'
        }
      ],
      rightButtons: [ {
        id: 'btn-right-secondary',
        defaultEventIconName: 'header-main-icon-right-secondary-click',
        name: 'Help',
        icon: 'spherica:help',
        accessibilityText: 'bbva-header-main-a11y-help-label',
        showNotification: false,
        label: 'bbva-header-main-help-aria-label'
      } ]
    }
  };
  const titleCounts = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: getLocalePrefix('title-accounts')
    },
    propertiesSpherica: {
      text: getLocalePrefix('title-accounts-spherica'),
      className: 'u-margin--1'
    }
  };
  const panelMove = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      heading: getLocalePrefix('panel-move-title'),
      hidden: true,
      text: getLocalePrefix('panel-move-text'),
      cellsConnections: {
        in: {
          [getGlobalName('hide_panel')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      microillustration: 'emptyState',
      text: getLocalePrefix('panel-move-text-spherica'),
      variant: 'primary-alt',
      defaultImageSize: '2XL',
      typeTextSize: '2XL'
    }
  };
  const managerParkingList = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-parking-enrollment',
    familyPath: '@glomo-web-components/bbva-manager-parking-enrollment',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      provider: 'Mueve Ciudad',
      cellsConnections: {
        in: {
          [getGlobalName('go_to_answer_faqs')]: {
            bind: 'goToAnswerFacs'
          },
          [getGlobalName('go_to_enrollment')]: {
            bind: 'goToEnrollment'
          },
          [getGlobalName('init_channel')]: {
            bind: 'init'
          },
          [getGlobalName('open_confirm_delete_account_modal')]: {
            bind: 'openConfirmModalDeleteAccount'
          },
          [getGlobalName('success_list_services')]: {
            bind: 'checkViewList'
          },
          [getGlobalName('accept_delete_account')]: {
            bind: 'deleteParkingAccount'
          },
          [getGlobalName('success_on_request_delete')]: {
            bind: 'handleAccountDeletion'
          },
          [getGlobalName('go_to_recharge_page')]: {
            bind: 'goToRecharge'
          },
          [getGlobalName('error_list_services')]: {
            bind: 'errorListParkingAccounts'
          },
          [getGlobalName('error_on_request_delete')]: {
            bind: 'errorDeleteParkingAccounts'
          },
          [getGlobalName('reset_list_flow')]: {
            bind: 'resetList'
          },
          global_set_app_settings: {
            bind: 'getParkingCityData'
          }
        },
        out: {
          [getGlobalName('request_accounts')]: {
            bind: 'request-accounts'
          },
          [getGlobalName('navigate_to_answer')]: {
            bind: 'navigate-to-answer',
            link: {
              page: 'parkingInfoList'
            }
          },
          [getGlobalName('set_button_row_options')]: {
            bind: 'set-button-row-options'
          },
          [getGlobalName('hide_panel')]: {
            bind: 'hide-panel'
          },
          [getGlobalName('list_parking_accounts')]: {
            bind: 'set-items-event'
          },
          [getGlobalName('hide_add_account_button')]: {
            bind: 'hide-add-account-button'
          },
          [getGlobalName('show_notification_message')]: {
            bind: 'show-notification-message'
          },
          [getGlobalName('open_delete_confirmation_modal')]: {
            bind: 'open-delete-confirmation-modal'
          },
          [getGlobalName('open_toast_modal')]: {
            bind: 'open-toast-modal'
          },
          [getGlobalName('request_delete_account')]: {
            bind: 'request-delete-account'
          },
          [getGlobalName('navigate_to_parking_enrollment')]: {
            bind: 'navigate-to-parking-enrollment',
            link: {
              page: 'parkingEnrollment'
            }
          },
          [getGlobalName('navigate_to_parking_recharge')]: {
            bind: 'navigate-to-parking-recharge',
            link: {
              page: 'parkingRecharge'
            }
          },
          [getGlobalName('fire_page_view_analytics_event')]: {
            bind: 'fire-page-view-analytics-event'
          },
          [getGlobalName('set_data_modal_body_text')]: {
            bind: 'set-data-modal-body-text'
          },
          [getGlobalName('set_data_modal_button_text')]: {
            bind: 'set-data-modal-button-text'
          },
          [getGlobalName('set_data_cancel_link_delete_modal')]: {
            bind: 'set-data-cancel-link-delete-modal'
          },
          [getGlobalName('exit_operative')]: {
            bind: 'exit-operative',
            backStep: true
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };
  const aggregationList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-contact-list',
    familyPath: '@glomo-web-components/bbva-aggregation-contact-list',
    tagSpherica: 'bbva-aggregation-contact-list-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-contact-list-spherica',
    render: 'litElement',
    properties: {
      className: 'accounts',
      currencyCode: getLocalCurrency(),
      flagAccounts: true,
      localCurrency: getLocalCurrency(),
      clipBoxImage: './images/parking/Clip_negro.svg',
      noLink: true,
      cellsConnections: {
        in: {
          [getGlobalName('list_parking_accounts')]: {
            bind: 'items'
          }
        },
        out: {
          [getGlobalName('go_to_recharge_page')]: {
            bind: 'left-button-event'
          },
          [getGlobalName('open_confirm_delete_account_modal')]: {
            bind: 'right-button-event'
          }
        }
      }
    },
    propertiesSpherica: {
      ambient: 'primary'
    }
  };
  const buttonAdd = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-row',
    familyPath: '@bbva-spherica-components/bbva-button-row',
    tagSpherica: 'bbva-button-row-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('set_button_row_options')]: {
            bind: 'options'
          },
          [getGlobalName('hide_add_account_button')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getGlobalName('go_to_enrollment')]: {
            bind: 'button-row-item-click'
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'spherica:add',
      ambient: 'primary',
      newCellsConnections: {
        add: {
          out: {
            global_parking_list_go_to_enrollment: {
              bind: 'button-row-item-button-1-click'
            }
          }
        }
      }
    }
  };
  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      message: getLocalePrefix('message-notification'),
      cellsConnections: {
        in: {
          [getGlobalName('show_notification_message')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--1',
      messageTitle: getLocalePrefix('message-notification'),
      bookTitle: true,
      message: ''
    }
  };
  const modalDelete = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'modalDelete',
      modalType: 'warning',
      fullHeight: false,
      titleIcon: 'bbva:warning',
      cellsConnections: {
        in: {
          [getGlobalName('open_delete_confirmation_modal')]: {
            bind: 'open'
          },
          [getGlobalName('set_data_modal_body_text')]: {
            bind: 'bodyText'
          },
          [getGlobalName('set_data_modal_button_text')]: {
            bind: 'buttonText'
          },
          [getGlobalName('set_data_cancel_link_delete_modal')]: {
            bind: 'linkText'
          }
        },
        out: {
          [getGlobalName('accept_delete_account')]: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos,
      modalType: 'caution',
      titleIcon: 'spherica:caution',
      headerText: 'glomo-parking-list-button-text-modal',
      closeLabel: 'bbva-header-main-close-aria-label'
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
      id: 'deleteParkingToast',
      type: 'success',
      iconExplainer: 'coronita:correct',
      fixedBottom: 'true',
      simpleLinkText: 'glomo-parking-list-notification-toast',
      duration: '3000',
      autoHide: 'true',
      cellsConnections: {
        in: {
          [getGlobalName('open_toast_modal')]: {
            bind: 'show'
          }
        }
      }
    },
    propertiesSpherica: {
      iconExplainer: 'spherica:correct',
      className: 'u-margin--1 u-max-width--2',
      simpleLinkText: '',
      alertText: 'glomo-parking-list-notification-toast'
    }
  };
  const managerAnalyticsParkingEnrollment = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-parking-enrollment',
    familyPath: '@glomo-web-components/bbva-manager-parking-enrollment',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('fire_page_view_analytics_event')]: {
            bind: 'firePageView'
          },
          [getGlobalName('go_to_recharge_page')]: {
            bind: 'fireAppOnClickRecharge'
          },
          [getGlobalName('go_to_enrollment')]: {
            bind: 'fireAppOnClickEnrollment'
          }
        },
        out: {
          [getGlobalName('analytics_app_page_view')]: {
            bind: 'analytics-app-page-view',
            analytics: analyticsEnrollment.appPageView
          },
          [getGlobalName('analytics_app_on_click_start_recharge')]: {
            bind: 'analytics-app-on-click-start-recharge',
            analytics: analyticsRecharge.appOnClickStartList
          },
          [getGlobalName('analytics_app_on_click_start_enrollment')]: {
            bind: 'analytics-app-on-click-start-enrollment',
            analytics: analyticsEnrollment.appOnClickStart
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };
  const base = {
    hash: 'parking-list',
    currentPage: {
      url: '/parking-list'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      lifeCycle,
      header,
      titleCounts,
      panelMove,
      managerParkingList,
      aggregationList,
      buttonAdd,
      notificationMessage,
      modalDelete,
      toastDelete,
      globalPayments,
      managerAnalyticsParkingEnrollment
    ]
  };
  errorAndSignWidgetConnector('bbva-manager-parking-enrollment', {
    widgetId: 'LIST-PARKING-ERROR',
    acceptCallForHelp: { bind: 'exit', component: 'bbva-manager-parking-enrollment' }
  });
  return sphericaPageUtils.spherize(base);
};
