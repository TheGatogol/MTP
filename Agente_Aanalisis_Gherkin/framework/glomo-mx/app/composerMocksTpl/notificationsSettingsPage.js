'use strict';
module.exports = (config) => {
  const { SPINNER: spinner, createPrefixFromPageName, useNames, headerHeight } = require('./common/helpers/_utils');
  const pageName = 'notificationsSettingsPage';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(config)(pageName);
  const isNativeIos = config.nativeIos || false;
  const isNative = config.native || false;
  const subscriptionsApiVersion = config.globalServices.versions.subscriptions;
  const analytics = require('./analytics/_creditCardPaymentReminderSettings')();
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'horizontal',
      headerFixed: true,
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      headerHeight,
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
      className: `bg-light-grey${isNativeIos ? ' ios-top-padding' : ''}`,
      iOSFixedHeader: isNativeIos
    }
  };

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          [getChannelName('close_edit')]: {
            bind: 'alert-leaving-process-movements-accept'
          },
          [getChannelName('close_edit_retry')]: {
            bind: 'alert-NOTIFICATIONS-SUBSCRIPTION-retry-cancel'
          },
          [getChannelName('close_edit_exit')]: {
            bind: 'alert-NOTIFICATIONS-SUBSCRIPTION-exit-accept'
          }
        }
      }
    }
  };

  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: config.globalServices.requiredToken || 'tsec',
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
          [getChannelName('init_page')]: {
            bind: 'init-page',
            analytics: analytics.pageView
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--dark',
      leftIcon: 'coronita:return-12',
      titleName: 'notifications-settings-title',
      rightIcon: 'coronita:help',
      cellsConnections: {
        out: {
          [getChannelName('notifications_settings_back_request')]: {
            bind: 'click-left-button',
            backStep: true
          },
          [getChannelName('show_notifications_info')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      className: '',
      leftIcon: 'coronita:back-mini',
      rightIcon: 'coronita:help',
      leftIconText: 'cells-molecule-header-spherica-back',
      rightIconAriaLabel: 'cells-molecule-header-spherica-help',
      rightUconSize: '24',
      rightIconText: 'cells-molecule-header-spherica-help'
    }
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      currentPage: pageName,
      cellsConnections: {
        in: {
          [getChannelName('navigate_to_page')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('navigation_notifications_settings')]: {
            bind: 'navigation-to-notificationsSettingsEditPage',
            link: {
              page: 'notificationsSettingsEditPage'
            }
          }
        }
      }
    }
  };
  const glomoNotificationsSubscriptionsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-notifications-subscriptions-dm',
    properties: {
      creditCardPaymentReminderFeatureFlagKey: 'glomo.notifications.paymentReminderSettings',
      host: config.globalServices.host,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      subscriptionsApiVersion,
      native: isNative,
      notificationStatus: 0,
      cellsConnections: {
        in: {
          notifications_settings_page_click_item_icon: {
            bind: 'infoIconClick'
          },
          dashboard_accounts: {
            bind: 'productsAccounts'
          },
          global_dashboard_cards: {
            bind: 'productsCards'
          },
          [getChannelName('init_page')]: {
            bind: 'init'
          },
          [getChannelName('open_movements_settings')]: {
            bind: 'openMovementsSettings'
          },
          [getChannelName('permission_success')]: {
            bind: 'checkNotificationStatus'
          },
          [getChannelName('permission_error')]: {
            bind: 'error'
          },
          [getChannelName('show_notifications_info')]: {
            bind: 'openNotificationsInfo'
          },
          [getChannelName('activated_switch_configuration')]: {
            bind: 'onSwitchStateChange'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          web_view_visibility: {
            bind: 'webViewVisibility'
          }
        },
        out: {
          [getChannelName('created_movements_operations')]: {
            bind: 'created-movements-operations'
          },
          [getChannelName('send_configuration_data')]: {
            bind: 'list-link'
          },
          [getChannelName('navigate_to_page')]: {
            bind: 'go-settings-page'
          },
          notifications_settings_page_navigation_to_credit_card_payment_reminder_settings: {
            bind: 'navigation-to-credit-card-payment-reminder-settings',
            analytics: analytics.internalLinkConfigure,
            link: {
              page: 'creditCardPaymentReminderSettings'
            }
          },
          global_alert_manager_open_with_settings: {
            bind: 'alert-modal-config'
          },
          [getChannelName('sync_switch')]: {
            bind: 'sync-switch'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          notifications_settings_show_success_toast: {
            bind: 'show-toast'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getChannelName('open_native_settings')]: {
            bind: 'open-native-settings'
          },
          [getChannelName('check_notification_status')]: {
            bind: 'check-notification-status'
          },
          [getChannelName('set_modal_help')]: {
            bind: 'modal-help'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: true,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'alert-modal-config'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };
  const cellsSwitchItem = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-switch-item',
    tagSpherica: 'cells-switch-item-spherica',
    properties: {
      className: 'bg-gray short-padding',
      label: 'notifications-settings-switch-label',
      enabled: true,
      hideIcon: true,
      lightTheme: true,
      cellsConnections: {
        in: {
          [getChannelName('sync_switch')]: {
            bind: 'checked'
          }
        },
        out: {
          [getChannelName('activated_switch_configuration')]: {
            bind: 'cells-switch-item-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'margin-y1-x2',
      label: 'notifications-settings-switch-label-spherica'
    }
  };
  const cellsTextDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      className: 'margin-top-l',
      subtitle: 'notifications-settings-text-title'
    }
  };
  const cellsOperationSwipeList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-operation-swipe-list',
    tagSpherica: 'cells-operation-swipe-list-spherica',
    properties: {
      className: 'no-border-bottom centered-separators',
      cellsConnections: {
        in: {
          [getChannelName('created_movements_operations')]: {
            bind: 'groupItems'
          }
        },
        out: {
          [getChannelName('open_movements_settings')]: {
            bind: 'checked-item'
          },
          notifications_settings_page_click_item_icon: {
            bind: 'item-icon-info-icon-recordatorio-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'simple-stacked-button'
    }
  };
  const glomoNotificationsSubscriptionsAnalyticsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-notifications-subscriptions-analytics-dm',
    familyPath: 'glomo-notifications-subscriptions-dm',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('activated_switch_configuration')]: {
            bind: 'sendNotificationsStatus'
          },
          [getChannelName('init_page')]: {
            bind: 'sendDetailNotifications'
          }
        },
        out: {
          global_appsflyer_track_event: {
            bind: 'global-appsflyer-track-event'
          }
        }
      }
    }
  };
  const cellsMobilePush = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-push',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'getPermissionStatus'
          },
          [getChannelName('check_notification_status')]: {
            bind: 'getPermissionStatus'
          }
        },
        out: {
          [getChannelName('permission_success')]: {
            bind: 'get-permission-status-success'
          },
          [getChannelName('permission_error')]: {
            bind: 'get-permission-status-error'
          }
        }
      }
    }
  };
  const cellsMobileNativeSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_native_settings')]: {
            bind: 'openSetting'
          }
        }
      }
    }
  };
  const notificationToast = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-notification-toast',
    familyPath: '@bbva-spherica-components/bbva-notification-toast',
    render: 'litElement',
    properties: {
      alertText: 'notification-subscriptions-success-toast-spherica',
      autoHide: 'true',
      className: 'u-max-width--2 u-margin--1',
      duration: '3000',
      fixedBottom: 'true',
      type: 'success',
      cellsConnections: {
        in: {
          notifications_settings_show_success_toast: {
            bind: 'show'
          }
        }
      }
    }
  };
  const base = {
    hash: 'notifications-settings',
    currentPage: {
      url: '/notifications-settings'
    },
    pages,
    template,
    components: [
      spinner(config),
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      glomoNavigationHandler,
      cellsSwitchItem,
      cellsTextDescription,
      cellsOperationSwipeList,
      glomoNotificationsSubscriptionsDM,
      glomoNotificationsSubscriptionsAnalyticsDM,
      notificationToast
    ]
  };
  if (isNative) {
    base.components.push(
      cellsMobilePush,
      cellsMobileNativeSettings
    );
  }

  if (sphericaPageUtils.isSpherica()) {
    base.components = base.components.filter(component => component.tag !== 'cells-text-description');
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
