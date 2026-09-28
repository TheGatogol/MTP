/* eslint-disable max-statements */
'use strict';
module.exports = CONFIG => {
  const pageName = 'notificationsCenter';
  const {
    useNames,
    APP_SIDEBAR: appSidebar,
    appFooter,
    getLanguage,
    get
  } = require('./common/helpers/_utils');
  const {
    commons
  } = require('./analytics/common/_literals');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const operativePrefix = pageName.toLowerCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const analyticsPage = require('./analytics/_notificationsCenter')(CONFIG);
  const appFooterUtils = appFooter(CONFIG, pageName);
  const isNativeShell = CONFIG.nativeShell || false;
  const isNativeIos = CONFIG.nativeIos || false;
  const language = getLanguage();
  const commonLocalStorage = require('./common/_local-storage');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG, isSpherica);
  const { detailNotification, detailNotificationLink } = require('./analytics/_insuranceDelayedPayment.js')();

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'fade',
      delayScroll: 500,
      delayScrollTop: 500,
      disableScrollLock: true,
      avoidToggleMenu: isNativeShell,
      disableEdgeSwipe: isNativeShell,
      handleStoppedScroll: true,
      headerHeight: 0,
      rightDrawer: true,
      footerFixed: true,
      edgeSwipeSensitivity: 50,
      className: isNativeIos ? 'ios-top-padding' : '',
      hasFooter: appFooterUtils ? true : false,
      footerHeight: appFooterUtils ? 64 : 0,
      fixOffsetScroll: 1000,
      cellsConnections: {
        in: {
          global_open_native_menu: {
            bind: 'toggleMenu'
          },
          [getChannelName('SHOW_FOOTER')]: {
            bind: 'hasFooter'
          },
          [getChannelName('SHOW_FOOTER_FROM_MORE_ACTIONS')]: {
            bind: 'hasFooter'
          },
          [getChannelName('HIDE_SCROLL')]: {
            bind: 'addComponentClass'
          },
          [getChannelName('SHOW_SCROLL')]: {
            bind: 'removeComponentClasses'
          }
        },
        out: {
          [getChannelName('TRANSACTIONS_TEMPLATE_SCROLL_COMPLETE')]: {
            bind: 'template-content-scroll-final'
          }
        }
      }
    },
    propertiesSpherica: {
      footerFloating: true,
      className: isNativeIos ? 'dashboard-ios-top-padding ios-top-padding bg-light-grey' : 'bg-light-grey'
    }
  };

  const lifecycleComponent = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': true
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
          [getChannelName('INIT_FRIST_PAGE')]: {
            bind: 'init-page-first-time'
          },
          [getChannelName('INIT_PAGE')]: {
            bind: 'init-page'
          },
          [getChannelName('init_local_storage')]: {
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

  const notificationsListMxComponent = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-feature-notifications-list-mx',
    tagSpherica: 'bbva-feature-notifications-list-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-notifications-list-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-notifications-list-mx-spherica',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      userType: 'CUSTOMER',
      publicSettingsHost: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      applicationId: CONFIG.globalServices.consumerId,
      isPrincipalPage: true,
      iOSFixedHeader: isNativeIos,
      showImportantMessagesBadge: true,
      featureFlagsToRemove: {
        'glomo.suspectedTransaction.directDebits': 'A000001244'
      },
      hideSkeleton: true,
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          global_totals_number_notifications: {
            bind: 'totalsNotifications'
          },
          [getChannelName('INIT_FRIST_PAGE')]: {
            bind: 'executeServices'
          },
          [getChannelName('TRANSACTIONS_TEMPLATE_SCROLL_COMPLETE')]: {
            bind: 'scrollMoreNotifications'
          },
          [getChannelName('set_start_date_select')]: {
            bind: 'startDatePickerSuccess'
          },
          [getChannelName('set_start_date_select_error')]: {
            bind: 'startDatePickerError'
          },
          [getChannelName('set_end_date_select')]: {
            bind: 'endDatePickerSuccess'
          },
          [getChannelName('set_end_date_select_error')]: {
            bind: 'endDatePickerError'
          },
          [getChannelName('SHARE_RECEIPT')]: {
            bind: 'shareReceipt'
          },
          [getChannelName('HANDLE_NOTIFICATIONS_CENTER')]: {
            bind: 'handleNotifications'
          },
          [getChannelName('UPDATE_NOTIFICATIONS_CENTER')]: {
            bind: 'firstUpdated'
          },
          [getChannelName('OPEN_DETAIL_NOTIFICATION')]: {
            bind: 'detailData'
          },
          [getChannelName('RESET_RECEIPT')]: {
            bind: 'reset'
          },
          [getChannelName('UPDATE_NOTIFICATIONS_LIST')]: {
            bind: 'updateNotificationsList'
          },
          [getChannelName('OPEN_MORE_ACTIONS_LIST')]: {
            bind: 'moreActionsList'
          },
          [getChannelName('SHARE_NOTIFICATION_LIST')]: {
            bind: 'detailData'
          },
          [getChannelName('OPEN_DETAIL_NOTIFICATION_RESULT')]: {
            bind: 'detailData'
          },
          [getChannelName('CLOSE_MORE_ACTION')]: {
            bind: 'reset'
          },
          [getChannelName('EXIT_DETAIL')]: {
            bind: 'closeDetailNotification'
          },
          SUCCESS_PURCHASE_INSTRUCTION_BACK_REQUEST_RESET: {
            bind: 'updateNotificationsList'
          }
        },
        out: {
          [getChannelName('GENERATE_RECEIPT')]: {
            bind: 'notifications-list-share-receipt'
          },
          [getChannelName('RESET_RECEIPT')]: {
            bind: 'notifications-list-detail-close'
          },
          [getChannelName('RESET_RECEIPT_MORE_ACTIONS')]: {
            bind: 'notifications-list-more-actions-close'
          },
          [getChannelName('SHOW_FOOTER')]: {
            bind: 'notifications-list-show-footer'
          },
          [getChannelName('SHOW_FOOTER_FROM_MORE_ACTIONS')]: {
            bind: 'notifications-list-close-more-actions'
          },
          [getChannelName('launch_start_date_picker')]: {
            bind: 'notifications-list-launch-start-datepicker'
          },
          [getChannelName('launch_end_date_picker')]: {
            bind: 'notifications-list-launch-end-datepicker'
          },
          [getChannelName('totals_number_unread_informative_warning')]: {
            bind: 'notifications-list-unread-alert-totals'
          },
          [getChannelName('list_notifications')]: {
            bind: 'set-notifications-list',
            analytics: analyticsPage._getAdvancedFootprintNotifications('default')
          },
          [getChannelName('_notifications_list_hidden')]: {
            bind: 'no-notifications-list',
            analytics: analyticsPage._getAdvancedFootprintNotifications('withLevel2', commons.whitoutNotifications)
          },
          [getChannelName('_navigate_to_search_page')]: {
            bind: 'notifications-list-search-page-open',
            analytics: analyticsPage._getAdvancedFootprintNotifications('withLevel2', commons.filter)
          },
          [getChannelName('OPEN_DETAIL_NOTIFICATION')]: {
            bind: 'notifications-list-detail-page-open'
          },
          [getChannelName('OPEN_DETAIL_NOTIFICATION_RESULT')]: {
            bind: 'notifications-list-detail-result-open-list'
          },
          [getChannelName('_navigate_to_result_page')]: {
            bind: 'navigate-to-result-page',
            analytics: analyticsPage._getAdvancedFootprintNotifications('withLevel2', commons.result)
          },
          [getChannelName('_NAVIGATION_SETTING_NOTIFICATIONS')]: {
            bind: 'notifications-list-settings-open',
            link: {
              page: 'notificationsSettingsPage'
            }
          },
          global_open_native_menu: {
            bind: 'header-main-icon-right-primary-click'
          },
          global_action_launcher_share_image: {
            bind: 'notifications-list-open-launcher'
          },
          [getChannelName('NOTIFICATION_DETAIL_PARSE')]: {
            bind: 'bbva-feature-notifications-list-mx-detail-data'
          },
          [getChannelName('NOTIFICATION_DATA_RECEIPT')]: {
            bind: 'bbva-feature-notifications-list-mx-share-notification-data'
          },
          [getChannelName('SHOW_DETAIL_MODAL')]: {
            bind: 'bbva-feature-notifications-list-mx-show-notification-detail',
            analytics: detailNotification
          },
          [getChannelName('OPEN_MORE_ACTIONS_LIST')]: {
            bind: 'notifications-list-open-more-actions'
          },
          [getChannelName('SHARE_NOTIFICATION_LIST')]: {
            bind: 'notifications-list-parse-detail-share-receipt'
          },
          [getChannelName('CLOSE_MORE_ACTION')]: {
            bind: 'notifications-list-more-actions-close'
          },
          [getChannelName('SHARE_NOTIFICATION_DATA')]: {
            bind: 'bbva-feature-notifications-list-share'
          },
          [getChannelName('SHOW_FOOTER_IN_RESULT')]: {
            bind: 'bbva-feature-notifications-list-hide-footer-with-result-visible'
          },
          [getChannelName('HIDE_SCROLL')]: {
            bind: 'bbva-feature-notifications-list-hide-scroll'
          },
          [getChannelName('SHOW_SCROLL')]: {
            bind: 'bbva-feature-notifications-list-show-scroll'
          },
          global_request_feature_flag: {
            bind: 'bbva-feature-notifications-list-mx-request-feature-flags'
          },
          global_native_appsettings: {
            bind: 'bbva-feature-notifications-list-get-app-public-settings'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            notificationscenter_detail_help_modal_transitionend: {
              bind: 'scrollIntoView'
            },
            notifications_center_detail_open_toast: {
              bind: 'notificationToastResult'
            }
          },
          out: {
            notificationscenter_detail_help_modal_transitionend: {
              bind: 'bbva-feature-notifications-list-search-help-modal-transitionend'
            },
            notificationscenter_open_detail: {
              bind: 'bbva-feature-notifications-list-spherica-open-detail'
            }
          }
        }
      }
    }
  };

  const notificationsDetailMxComponent = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-feature-notifications-detail-mx',
    tagSpherica: 'bbva-feature-notifications-detail-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-notifications-detail-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-notifications-detail-mx-spherica',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      userType: 'CUSTOMER',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'closePage'
          },
          operation_justification_close_modal_notification_center: {
            bind: 'closePage'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          [getChannelName('NOTIFICATION_DETAIL_PARSE')]: {
            bind: 'detail'
          },
          CLOSE_NOTIFICATION_CENTER_DETAIL_MODAL: {
            bind: 'visible'
          },
          deferred_signature_coowner_close_notifications_enter: {
            bind: 'visible'
          },
          SUCCESS_PURCHASE_INSTRUCTION_BACK_REQUEST_RESET: {
            bind: 'closePage'
          },
          [getChannelName('SHOW_DETAIL_MODAL')]: {
            bind: 'visible'
          },
          [getChannelName('NOTIFICATION_DATA_RECEIPT')]: {
            bind: 'shareDetail'
          },
          [getChannelName('SHARE_RECEIPT')]: {
            bind: 'shareReceipt'
          },
          [getChannelName('SHOW_FOOTER_IN_RESULT')]: {
            bind: 'resultVisible'
          },
          [getChannelName('NAVIGATE_TO_NOTIFICATIONS_LIST')]: {
            bind: 'closePage'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'closePage'
          },
          points_redeem_purchases_by_campaigns_exit_operative: {
            bind: 'openModal'
          }
        },
        out: {
          [getChannelName('SHARE_NOTIFICATION_DATA_FROM_DETAIL')]: {
            bind: 'bbva-feature-notifications-detail-mx-share-notification'
          },
          [getChannelName('GENERATE_RECEIPT')]: {
            bind: 'bbva-feature-notifications-detail-mx-share-receipt'
          },
          [getChannelName('EXIT_DETAIL')]: {
            bind: 'bbva-feature-notifications-detail-close'
          },
          [getChannelName('SHOW_FOOTER')]: {
            bind: 'notifications-feature-detail-mx-show-footer'
          },
          [getChannelName('UPDATE_NOTIFICATIONS_LIST')]: {
            bind: 'notifications-feature-detail-mx-update-notifications-list'
          },
          [getChannelName('HIDE_SCROLL')]: {
            bind: 'bbva-feature-notifications-detail-hide-scroll'
          },
          [getChannelName('SHOW_SCROLL')]: {
            bind: 'bbva-feature-notifications-detail-show-scroll'
          },
          [getChannelName('NOTIFICATION_DETAIL_TRANSACTION')]: {
            bind: 'bbva-feature-notifications-detail-mx-transaction',
            analytics: analyticsPage._getAdvancedFootprintNotifications('withLevel3', commons.transactionDetialNotification, commons.detail)
          },
          [getChannelName('NOTIFICATION_DETAIL_ALERT')]: {
            bind: 'bbva-feature-notifications-detail-mx-alert',
            analytics: analyticsPage._getAdvancedFootprintNotifications('withLevel3', commons.importantMessages, commons.detail)
          },
          [getChannelName('NOTIFICATION_DETAIL_PROMOTION')]: {
            bind: 'bbva-feature-notifications-detail-mx-promotion',
            analytics: analyticsPage._getAdvancedFootprintNotifications('withLevel3', commons.promotion, commons.detail)
          },
          [getChannelName('NOTIFICATION_DETAIL_INFORMATIVE_WARNING')]: {
            bind: 'bbva-feature-notifications-detail-mx-informative-warning',
            analytics: analyticsPage._getAdvancedFootprintNotifications('withLevel3', commons.informativeWarning, commons.detail)
          },
          [getChannelName('DEFERRED_SIGNATURE_EQUITY_CONTRACT')]: {
            bind: 'bbva-feature-notifications-detail-mx-button-click-df-equity-contract'
          },
          [getChannelName('DEFERRED_SIGNATURE_STRUCTURED_PRODUCTS')]: {
            bind: 'bbva-feature-notifications-detail-mx-button-click-df-structured-products'
          },
          global_retry_error: {
            bind: 'notifications-feature-detail-mx-error-operation-update'
          },
          global_action_launcher_dialer: {
            bind: 'bbva-feature-notifications-detail-mx-button-click-call-bbva'
          },
          global_action_launcher_share_image: {
            bind: 'bbva-feature-notifications-detail-mx-open-launcher'
          },
          global_action_launcher_uri: {
            bind: 'bbva-feature-notifications-detail-mx-button-click-open-external-link'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'bbva-feature-notifications-detail-mx-deep-link',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                filter: 'filter',
                notification: 'notification'
              },
              analytics: detailNotificationLink
            }
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            notificationscenter_detail_help_modal_transitionend: {
              bind: 'bbva-feature-notifications-detail-help-modal-transitionend'
            },
            notifications_center_detail_open_toast: {
              bind: 'bbva-feature-notifications-detail-mx-open-toast'
            }
          }
        }
      }
    }
  };

  const managerMessageCenterComponent = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-message-center',
    familyPath: '@glomo-web-components/bbva-manager-message-center',
    render: 'litElement',
    properties: {
      maxNotification: 8,
      cellsConnections: {
        in: {
          [getChannelName('INIT_PAGE')]: {
            bind: 'getNotificationsCenterList'
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
          [getChannelName('HANDLE_NOTIFICATIONS_CENTER')]: {
            bind: 'notifications-center-get-list'
          },
          [getChannelName('_update_monoproduct_user')]: {
            bind: 'update-is-monoproduct-user'
          },
          global_get_from_storage: {
            bind: 'get-native-local-storage',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const startDatePickerPlugin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('launch_start_date_picker')]: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          [getChannelName('set_start_date_select')]: {
            bind: 'launch-date-picker-success'
          },
          [getChannelName('set_start_date_select_error')]: {
            bind: 'launch-date-picker-error'
          }
        }
      }
    }
  };

  const endDatePickerPlugin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('launch_end_date_picker')]: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          [getChannelName('set_end_date_select')]: {
            bind: 'launch-date-picker-success'
          },
          [getChannelName('set_end_date_select_error')]: {
            bind: 'launch-date-picker-error'
          }
        }
      }
    }
  };

  const shareGenericReceiptComponent = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language,
      country: 'mxGlobal',
      cellsConnections: {
        in: {
          [getChannelName('SHARE_NOTIFICATION_DATA')]: {
            bind: 'result'
          },
          [getChannelName('SHARE_NOTIFICATION_DATA_FROM_DETAIL')]: {
            bind: 'result'
          },
          [getChannelName('GENERATE_RECEIPT')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('EXIT_DETAIL')]: {
            bind: 'reset'
          },
          [getChannelName('RESET_RECEIPT_MORE_ACTIONS')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('SHARE_RECEIPT')]: {
            bind: 'receipt-captured'
          }
        }
      }
    }
  };

  const detailOperativesNavigationComponent = {
    zone: 'app__main',
    type: 'DM',
    tag: 'detail-operatives-navigation',
    familyPath: '@glomo-web-components/bbva-manager-message-center',
    render: 'litElement',
    properties: {
      isGlobalProject: true,
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          [getChannelName('INIT_PAGE')]: {
            bind: 'init'
          },
          global_storage_get_loginData_success: {
            bind: 'loginDataStorageSucces'
          }
        },
        out: {
          [getChannelName('NAVIGATE_TO_NOTIFICATIONS_LIST')]: {
            bind: 'detail-operatives-navigation-to-notifications-list'
          },
          [getChannelName('UPDATE_NOTIFICATIONS_CENTER')]: {
            bind: 'detail-operatives-navigation-update-notifications-center'
          },
          [getChannelName('SHOW_FOOTER')]: {
            bind: 'detail-operatives-navigation-show-footer'
          },
          global_get_from_storage: {
            bind: 'get-native-local-storage',
            'forward-to-native': true
          },
          deferred_signature_native_data: {
            bind: 'detail-operatives-navigation-to-deferred-signature-df-equity-contract',
            link: {
              page: 'deferredSignatureEquityContract'
            }
          },
          deferred_signature_native_data_structured_products: {
            bind: 'detail-operatives-navigation-to-deferred-signature-df-structured-products',
            link: {
              page: 'deferredSignatureStructuredProducts'
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'notifications-center',
    currentPage: {
      url: '/notifications-center'
    },
    template,
    pages,
    components: [
      lifecycleComponent,
      notificationsListMxComponent,
      notificationsDetailMxComponent,
      shareGenericReceiptComponent,
      managerMessageCenterComponent,
      detailOperativesNavigationComponent
    ]
  };

  if (appFooterUtils) {
    appFooterUtils.properties.currentPage = 'notificationsCenter';
    appFooterUtils.properties.cellsConnections.in = {
      ...appFooterUtils.properties.cellsConnections.in,
      [getChannelName('_update_monoproduct_user')]: {
        bind: 'isMonoproductUser'
      }
    };

    appFooterUtils.properties.cellsConnections.out = {
      ...appFooterUtils.properties.cellsConnections.out,
      [getChannelName('_navigate_to_invitation_non_account')]: {
        bind: 'invitation-non-account-link',
        link: {
          page: 'invitationNonAccountClient'
        }
      }
    };
    base.components.splice(5, 0, appFooterUtils);
  }

  if (CONFIG.nativeShell) {
    base.components.push(startDatePickerPlugin, endDatePickerPlugin);
    const getUtils = get(base);
    getUtils('bbva-feature-notifications-list-mx').properties.cellsConnections.out.global_open_native_menu = {
      bind: 'header-main-icon-right-primary-click',
      'forward-to-native': true
    };
  } else {
    base.components.push(appSidebar(CONFIG));
  }
  commonLocalStorage.addOutStorageChannels(base.components, ['monoproduct', 'loginData'], CONFIG);

  addRetryErrors(base)([
    {
      id: 'NOTIFICATIONS-DETAIL-ERROR-REQUEST',
      acceptRetry: { bind: 'requestUpdateNotification', component: 'bbva-feature-notifications-detail-mx' },
      cancelRetry: { bind: 'closePage', component: 'bbva-feature-notifications-detail-mx' },
      acceptCallForHelp: { bind: 'closePage', component: 'bbva-feature-notifications-detail-mx' }
    }
  ]);

  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
