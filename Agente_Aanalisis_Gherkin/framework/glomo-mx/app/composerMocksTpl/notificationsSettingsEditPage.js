'use strict';
module.exports = (config) => {
  const { SPINNER: spinner, createPrefixFromPageName, useNames, headerHeight, createSpinner } = require('./common/helpers/_utils');
  const pageName = 'notificationsSettingsEditPage';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(config)(pageName);
  const isNative = config.native || false;
  const isNativeIos = config.nativeIos || false;
  const subscriptionsApiVersion = config.globalServices.versions.subscriptions;

  createSpinner.tagSpherica = 'cells-spinner-veil-spherica';
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
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--dark',
      leftIcon: 'coronita:return-12',
      titleName: 'notifications-settings-edit-title',
      cellsConnections: {
        out: {
          [getChannelName('back_step')]: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-molecule-header-spherica'
    })
  };
  const glomoNotificationsSubscriptionsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-notifications-subscriptions-dm',
    properties: {
      host: config.globalServices.host,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      subscriptionsApiVersion,
      native: isNative,
      notificationStatus: 0,
      cellsConnections: {
        in: {
          [getChannelName('edit_notifications')]: {
            bind: 'doRequestSubscription'
          },
          [getChannelName('close_edit')]: {
            bind: 'closeModal'
          },
          [getChannelName('close_edit_retry')]: {
            bind: 'closeModal'
          },
          [getChannelName('close_edit_exit')]: {
            bind: 'closeModal'
          },
          [getChannelName('open_help_modal')]: {
            bind: 'openMovementsHelp'
          },
          [getChannelName('livings_process')]: {
            bind: 'openModalLeavingProcess'
          },
          [getChannelName('modify_amounts')]: {
            bind: 'saveAmountsSettings'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageNativeBackButton'
          }
        },
        out: {
          [getChannelName('open_modal_modify')]: {
            bind: 'open-modal-to-modify-quantities'
          },
          [getChannelName('close_to_modal_modify')]: {
            bind: 'close-modal'
          },
          [getChannelName('reset_inputs_modal')]: {
            bind: 'reset-modal'
          },
          global_alert_manager_open_with_settings: {
            bind: 'alert-modal-config'
          },
          [getChannelName('show_success_toast')]: {
            bind: 'show-toast'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          go_to_back: {
            bind: 'go-to-back',
            backStep: true
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
  const glomoNotificationsListSettings = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-notifications-list-settings',
    tagSpherica: 'glomo-notifications-list-settings-spherica',
    properties: {
      cellsConnections: {
        in: {
          notifications_settings_page_send_configuration_data: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('edit_notifications')]: {
            bind: 'notifications-item-valid'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt'
    }
  };
  const glomoNotificationsEditMovementsModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'glomo-notifications-edit-movements-modal',
    tagSpherica: 'glomo-notifications-edit-movements-modal-spherica',
    properties: {
      autoFormat: true,
      iOSFixedHeader: isNativeIos,
      className: 'fontWeightBtns',
      cellsConnections: {
        in: {
          [getChannelName('open_modal_modify')]: {
            bind: 'setProperties'
          },
          [getChannelName('close_to_modal_modify')]: {
            bind: 'opened'
          },
          [getChannelName('reset_inputs_modal')]: {
            bind: 'resetValues'
          },
          [getChannelName('reset_values')]: {
            bind: 'resetValues'
          }
        },
        out: {
          [getChannelName('livings_process')]: {
            bind: 'close-modal'
          },
          [getChannelName('open_help_modal')]: {
            bind: 'icon-help-selected'
          },
          [getChannelName('modify_amounts')]: {
            bind: 'accept-button-selected'
          },
          [getChannelName('reset_values')]: {
            bind: 'cancel-button-selected'
          }
        }
      }
    }
  };
  const cellsAlertManager = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-alert-manager',
    tagSpherica: 'cells-alert-manager-spherica',
    properties: {
      className: 'centered full-width',
      icons: { success: '' },
      cellsConnections: {
        in: {
          [getChannelName('show_success_toast')]: {
            bind: 'showToast'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'padding',
      icons: { success: 'coronita:correct' }
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
          [getChannelName('open_modal_modify')]: {
            bind: 'sendChangeAmount'
          },
          [getChannelName('show_success_toast')]: {
            bind: 'sendNotificationAmountChanged'
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
  const base = {
    hash: 'notifications-settings-edit',
    currentPage: {
      url: '/notifications-settings-edit'
    },
    pages,
    template,
    components: [
      spinner(config),
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      glomoNotificationsSubscriptionsDM,
      glomoNotificationsSubscriptionsAnalyticsDM,
      glomoNotificationsListSettings,
      glomoNotificationsEditMovementsModal,
      cellsAlertManager
    ]
  };

  if (sphericaPageUtils.isSpherica()) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
