'use strict';

module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)('operationalLimits');
  const {getLocalCurrency, getLanguage, SPINNER: spinner, useNames, createPrefixFromPageName} = require('./common/helpers/_utils');
  const product = 'operationalLimits';
  const isNativeIos = CONFIG.nativeIos || false;
  const localStorageLimits = require('./common/_local-storage');
  const analytics = require('./analytics/_configurationOperationalLimits');
  const prefixPage = createPrefixFromPageName('operationalLimits');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'operationalLimits');
  const isSpherica = sphericaPageUtils.isSpherica();
  const spinnerConfig = { ...spinner(CONFIG), tagSpherica: 'cells-spinner-veil-spherica' };
  const [ getChannelName ] = useNames(prefixPage);
  const {
    globalServices: { host, requiredToken = 'tsec', versions: {limitsV1} },
    native = false,
    nativeIos = false
  } = CONFIG;

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          operational_limits_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          operational_limits_open_modal_info_spherica: {
            bind: 'openWithSettings'
          },
          operational_limits_show_modal_exit_flow_spherica: {
            bind: 'openWithSettings'
          },
          operational_limits_modal_error_get_spherica: {
            bind: 'openWithSettings'
          },
          operational_limits_modal_error_patch_spherica: {
            bind: 'openWithSettings'
          },
          open_modal_help_icon_user_transaction_amount_spherica: {
            bind: 'openWithSettings'
          },
          open_modal_help_icon_limits_spherica: {
            bind: 'openWithSettings'
          },
          operational_limits_operation_cancelled: {
            bind: 'openWithSettings'
          }
        },
        out: {
          operational_limits_close_button_tapped: {
            bind: 'operational-limits-close'
          },
          operational_limits_reload_get_page: {
            bind: 'alert-modal-error-accept'
          },
          operational_limits_return_settings_page: {
            bind: 'alert-modal-error-cancel'
          },
          operational_limits_glomo_acept_modal_info: {
            bind: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-INFO-accept',
            analytics: analytics.dynamicLevel3('detalle')
          },
          operational_limits_lim_action_confirm: {
            bind: 'alert-OPERATIONAL-LIMITS-EXIT-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: product,
    currentPage: {
      url: '/operational-limits'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        disableEdgeSwipe: true,
        iOSFixedHeader: isNativeIos,
        className: 'dark-blue-bg ' + isNativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        cellsConnections: {
          in: {
            operational_limits_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            },
            operational_limits_set_configuration_modal_ios_header: {
              bind: 'extraHeaderClass'
            }
          }
        }
      },
      propertiesSpherica: {
        className: `bg-light-grey ${ isNativeIos ? 'ios-top-padding' : '' }`
      }
    },
    components: [
      spinnerConfig,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'operationalLimits',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_operationalLimits: {
                bind: 'init'
              }
            },
            out: {
              operational_limits_reset_page: {
                bind: 'reset'
              },
              operational_limits_init_page: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'header-left-button',
          continue: 'atmlocator',
          cellsConnections: {
            in: {
              [getChannelName('close_button_tapped')]: {
                bind: 'goBack'
              },
              [getChannelName('return_settings_page')]: {
                bind: 'goBack'
              },
              [getChannelName('reload_get_page')]: {
                bind: 'navigate'
              },
              patch_limit_success_pending_confirmation: {
                bind: 'navigateToPage'
              }
            },
            out: {
              [getChannelName('BACK_BUTTON')]: {
                bind: 'header-left-button',
                backStep: true
              },
              [getChannelName('navigate_to_atmlocator')]: {
                bind: 'navigation-to-atmlocator',
                link: {
                  page: 'atmLocator',
                  skipHistory: true
                }
              },
              confirmation_pending_navigation: {
                bind: 'navigation-to-pending-confirmation',
                link: {
                  page: 'userTransactionAmountPendingConfirmation',
                  skipHistory: true
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark',
          back: true,
          leftIcon: 'coronita:return-12',
          rightIcon: 'coronita:help',
          titleName: 'glomo-operational-limits-title',
          leftIconAction: 'operational-limits-close',
          rightIconAction: 'operational-limits-info',
          cellsConnections: {
            out: {
              [getChannelName('close_button_tapped')]: {
                bind: 'operational-limits-close'
              },
              [getChannelName('open_button_info')]: {
                bind: 'operational-limits-info',
                analytics: analytics.dynamicLevel3('informacion')
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--grey',
          variant: 'primary-alt',
          leftIcon: 'coronita:back-mini',
          leftIconText: 'glomo-operational-limits-help-back-arrow-text',
          rightIconText: 'glomo-operational-limits-help-icon-text'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-operational-limits',
        tagSpherica: 'cells-operational-limits-spherica',
        properties: {
          infoMessage: 'text-OPERATIONAL-LIMITS-title',
          tabs: [
            'glomo-operational-limits-transfers',
            'glomo-operational-limits-payments'
          ],
          variant: true,
          hideTabs: true,
          subHeaderClass: 'product-item-txt-initial',
          titleIcon: 'coronita:help',
          cellsConnections: {
            in: {
              operational_limits_init_page: {
                bind: 'init'
              },
              operational_limits_reset_page: {
                bind: 'reset'
              },
              operational_limits_parsed_limits: {
                bind: 'operationLimits'
              },
              operational_limits_info_message: {
                bind: 'infoMessage'
              },
              user_transaction_amount_flag: {
                bind: 'hideTopInfoMessage'
              }
            },
            out: {
              open_modal_limits_edit: {
                bind: 'edit-icon-tapped'
              },
              operational_limits_set_selected_operative_limit_data_modal: {
                bind: 'edit-icon-tapped'
              },
              open_modal_help_icon_user_transaction_amount: {
                bind: 'open-icon-help-modal-user-transaction-amount'
              },
              open_modal_help_icon_limits: {
                bind: 'open-icon-help-modal-limits'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'item-label-normal-weight'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        tagSpherica: 'cells-icon-message-spherica',
        properties: {
          className: 'in-page',
          type: 'info',
          icon: 'coronita:info',
          message: 'glomo-OPERATIONAL-LIMITS-icon-message',
          cellsConnections: {
            in: {
              user_transaction_amount_flag: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      spinnerConfig,
      {
        zone: 'app__main',
        tag: 'glomo-operational-limits-dm-mx',
        familyPath: 'glomo-operational-limits-dm',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          limitsApiVersion: CONFIG.globalServices.versions.limitsV1,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          language: getLanguage(),
          operatives: ['TRANSFERS', 'PAYMENTS'],
          setParamsLimits: true,
          native: CONFIG.native || false,
          modalInfo: {
            code: 'OPERATIONAL-LIMITS-WITH-DRAWAL-INFO',
            primaryButtonClass: 'primary',
            selectedConfig: {
              className: 'title-modal-operational-limits dark-header image--md full-height-error',
              openMaximized: true,
              title: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-INFO-title-modal',
              heroImage: './images/operational-limit-info.svg',
              acceptBtLabel: 'info-UNDERSTAND-accept',
              info: {
                type: 'info-dark',
                icon: 'coronita:info',
                message: 'glomo-OPERATIONAL-LIMITS-icon-message'
              },
              template: {
                type: 'paragraphs',
                values: [
                  {
                    title: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-INFO-title',
                    class: 'normal'
                  },
                  {
                    text: 'alert-OPERATIONAL-LIMITS-INFO-control',
                    class: 'ul-li--text-left tiled-title normal features-text margin-bottom-none'
                  },
                  {
                    text: 'alert-OPERATIONAL-LIMITS-INFO-strengthen',
                    class: 'ul-li--text-left tiled-title normal features-text margin-bottom-none'
                  },
                  {
                    text: 'alert-OPERATIONAL-LIMITS-INFO-detail',
                    class: 'ul-li--text-left tiled-title normal features-text margin-bottom-none'
                  },
                  {text: ' ', class: 'spacing'}
                ]
              }
            }
          },
          cellsConnections: {
            in: {
              global_storage_get_loginData_success: {
                bind: 'manageLoginDataSuccess'
              },
              global_storage_get_loginData_error: {
                bind: 'manageLoginDataError'
              },
              operational_limits_reset_page: {
                bind: 'reset'
              },
              global_login_success_indicators: {
                bind: 'handleClassificationIndicator'
              },
              global_feature_flag_collection_updated: {
                bind: 'handleFeatureFlags'
              },
              [getChannelName('init_page')]: {
                bind: 'init'
              },
              [getChannelName('patch_limits_init')]: {
                bind: 'init'
              },
              [getChannelName('open_button_info')]: {
                bind: 'openModalInfo'
              },
              operational_limits_patch_limits: {
                bind: 'limitsPatch'
              },
              global_storage_get_operational_welcome_operatives_success: {
                bind: 'showWelcomeModal'
              },
              global_storage_get_operational_welcome_operatives_error: {
                bind: 'showWelcomeModal'
              },
              [getChannelName('alert_modal_close')]: {
                bind: 'openModalExit'
              },
              [getChannelName('modal_close')]: {
                bind: 'openModalExit'
              },
              [getChannelName('return_to_operational_list')]: {
                bind: 'openModalExit'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackButton'
              },
              operational_limits_close_alert_modal: {
                bind: 'isModalLimitOperations'
              },
              global_opened_modal: {
                bind: 'isModalInformationOperations'
              },
              operational_patch_limit_success: {
                bind: 'patchLimitsSuccessPendingConfirmation'
              },
              global_login_success: {
                bind: 'customerResponse'
              },
              operational_get_limit_success: {
                bind: 'getUserTransactionAmountLimits'
              },
              open_modal_help_icon_user_transaction_amount: {
                bind: 'sendDataHelpModal'
              },
              open_modal_user_transaction_amount_password_help_icon: {
                bind: 'sendDataHelpModalPassword'
              },
              open_modal_help_icon_limits: {
                bind: 'sendDataHelpModalLimits'
              }
            },
            out: {
              [getChannelName('return_to_operational_list')]: {
                bind: 'return-to-operational-list'
              },
              operational_limits_open_modal_info: {
                bind: 'open-operational-limits-modal'
              },
              [getChannelName('patch_limits_success')]: {
                bind: 'success-on-patch-limits'
              },
              [getChannelName('patch_limits_init')]: {
                bind: 'success-on-patch-limits'
              },
              [getChannelName('patch_limits_success_message')]: {
                bind: 'success-on-patch-limits-message'
              },
              operational_limits_info_message: {
                bind: 'operational-limits-info-message'
              },
              operational_limits_parsed_limits: {
                bind: 'open-edit-limits'
              },
              [getChannelName('modal_error_get')]: {
                bind: 'open-operational-limits-modal'
              },
              [getChannelName('modal_error_patch')]: {
                bind: 'open-operational-limits-modal'
              },
              [getChannelName('modal_get_error_limits_tree')]: {
                bind: 'error-close-modal'
              },
              global_get_from_storage: {
                bind: 'get-native-local-storage-operational'
              },
              global_set_in_storage: {
                bind: 'set-native-local-storage-operational',
                analytics: analytics.dynamicLevel3('informacion')
              },
              [getChannelName('show_modal_exit_flow')]: {
                bind: 'open-limits-configuration-modal'
              },
              operational_patch_limit_request: {
                bind: 'request-patch-limits'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_alert_modal_close: {
                bind: 'close-information-modal'
              },
              operational_limits_return_settings_page: {
                bind: 'back-navigation-exit-operation'
              },
              operational_get_limit_request: {
                bind: 'request-get-limits'
              },
              patch_limit_success_pending_confirmation: {
                bind: 'patch-limit-success-pending-confirmation'
              },
              user_transaction_amount_flag: {
                bind: 'flag-user-transaction-amount-status'
              },
              open_modal_limits_edit: {
                bind: 'wrong-password-return'
              },
              operational_limits_set_selected_operative_limit_data_modal: {
                bind: 'wrong-password-return-operative-data'
              },
              global_alert_manager_open_with_settings: {
                bind: 'mtu-modal-generate'
              }
            },
            params: {
              customerId: 'global_user_id'
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          modalInfo: {
            code: 'OPERATIONAL-LIMITS-WITH-DRAWAL-INFO',
            primaryButtonClass: 'primary',
            selectedConfig: {
              className: 'title-modal-operational-limits image--2xl',
              openMaximized: true,
              title: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-INFO-title-modal',
              heroImage: './images/spherica/operationalLimitsSettings/operational-limit-speedometer.svg',
              acceptBtLabel: 'info-UNDERSTAND-accept',
              template: {
                type: 'paragraphs',
                values: [
                  {
                    text: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-INFO-title',
                    class: 'normal spacing'
                  },
                  {
                    text: 'alert-OPERATIONAL-LIMITS-INFO-control',
                    class: 'ul-li--text-left tiled-title normal features-text margin-bottom-none'
                  },
                  {
                    text: 'alert-OPERATIONAL-LIMITS-INFO-strengthen',
                    class: 'ul-li--text-left tiled-title normal features-text margin-bottom-none'
                  },
                  {
                    text: 'alert-OPERATIONAL-LIMITS-INFO-detail',
                    class: 'ul-li--text-left tiled-title normal features-text margin-bottom-none'
                  },
                  {
                    text: ' ',
                    class: 'spacing'
                  }
                ]
              }
            }
          },
          newCellsConnections: {
            add: {
              out: {
                operational_limits_return_to_operational_list: {
                  bind: 'return-to-operational-list'
                },
                operational_limits_open_with_settings_spherica: {
                  bind: 'mtu-modal-generate'
                },
                operational_limits_open_modal_info_spherica: {
                  bind: 'open-operational-limits-modal'
                },
                operational_limits_modal_error_get_spherica: {
                  bind: 'open-operational-limits-modal'
                },
                operational_limits_modal_error_patch_spherica: {
                  bind: 'open-operational-limits-modal'
                },
                open_modal_help_icon_user_transaction_amount_spherica: {
                  bind: 'sendDataHelpModal'
                },
                open_modal_help_icon_limits_spherica: {
                  bind: 'sendDataHelpModalLimits'
                },
                operational_limits_show_modal_exit_flow_spherica: {
                  bind: 'open-limits-configuration-modal'
                }
              }
            },
            remove: {
              out: [
                'operational_limits_open_modal_info',
                'operational_limits_show_modal_exit_flow',
                'operational_limits_modal_error_get',
                'operational_limits_modal_error_patch',
                'operational_limits_info_message',
                'global_alert_manager_open_with_settings',
                'open_modal_help_icon_user_transaction_amount',
                'open_modal_help_icon_limits'
              ]
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'bbva-local-limits-api-dm',
        familyPath: '@glomo-web-components/bbva-local-limits-api-dm',
        render: 'litElement',
        properties: {
          native,
          host,
          requiredToken,
          version: limitsV1,
          requiredOTP: true,
          cellsConnections: {
            in: {
              operational_get_limit_request: {
                bind: 'getLimits'
              },
              operational_patch_limit_request: {
                bind: 'patchLimits'
              }
            },
            out: {
              operational_get_limit_success: {
                bind: 'limits-api-dm-fetch'
              },
              operational_patch_limit_success: {
                bind: 'patch-limits-api-dm-fetch'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        tag: 'cells-limits-configuration-modal',
        tagSpherica: 'cells-limits-configuration-modal-spherica',
        type: 'UI',
        properties: {
          className: `dark-blue-header alert-box-class ${ isNativeIos ? 'ios-top-padding' : '' }`,
          customLayoutClass: '',
          modalTitle: 'glomo-operational-limits-operations-configuration-title',
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          limitsApiVersion: CONFIG.globalServices.versions.limitsV1,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          currencyCode: getLocalCurrency(),
          localCurrency: getLocalCurrency(),
          language: getLanguage(),
          operativeRangeMaximumLimit: this.maximumAmount,
          range: true,
          showTextInfo: true,
          hideMeter: true,
          hiddenMinLimit: true,
          amountMessagePadding: 'amount-message-padding',
          alertBoxClass: '',
          preventClose: true,
          showIconInRange: true,
          maxCharacter: 13,
          iOSFixedHeader: isNativeIos,
          hideBorderTop: true,
          cellsConnections: {
            in: {
              open_modal_limits_edit: {
                bind: 'open'
              },
              operational_limits_set_selected_operative_limit_data_modal: {
                bind: 'setOperativeData'
              },
              operational_limits_reset_page: {
                bind: 'reset'
              },
              operational_limits_patch_limits: {
                bind: 'close'
              },
              operational_limits_patch_limits_success: {
                bind: 'close'
              },
              [getChannelName('lim_action_confirm')]: {
                bind: 'close'
              },
              glomo_operational_limits_generic_error_close_modal: {
                bind: 'close'
              },
              operational_limits_error_open_modal: {
                bind: 'close'
              },
              [getChannelName('modal_get_error_limits_tree')]: {
                bind: 'close'
              }
            },
            out: {
              navigate_to_key_recovery: {
                bind: 'cells-limits-configuration-link-lost-password',
                link: {
                  page: 'keyRecovery'
                }
              },
              operational_limits_patch_limits: {
                bind: 'limits-configuration-modal-accept'
              },
              [getChannelName('limit_name')]: {
                bind: 'limit-name-type'
              },
              operational_limits_operation_cancelled: {
                bind: 'limits-configuration-modal-alert-close'
              },
              [getChannelName('alert_modal_close')]: {
                bind: 'limits-configuration-modal-alert-close'
              },
              [getChannelName('modal_close')]: {
                bind: 'prevent-close'
              },
              [getChannelName('close_alert_modal')]: {
                bind: 'opened-changed'
              },
              operational_limits_set_configuration_modal_ios_header: {
                bind: 'limits-set-configuration-modal-ios-header'
              },
              open_modal_user_transaction_amount_password_help_icon: {
                bind: 'cells-limits-configuration-type-heading-help-lost-password'
              }
            }
          }
        },
        propertiesSpherica: {
          className: `light-alert-box-class ${ isNativeIos ? 'ios-top-padding ' : '' }`,
          customLayoutClass: 'centered-amount',
          amountMessagePadding: 'amount-message-padding amount-padding-bottom',
          headerCloseIconText: 'cells-limits-configuration-header-exit-button-text',
          hideInfoButtonText: true,
          showCurrencyLabel: true,
          buttonCancelVariant: 'primary-alt',
          passwordInputAmbient: 'primary-alt',
          passwordVisibilityIcon: 'always',
          hideFinalDotMaxLimit: true

        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-operational-limits-configuration-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-operational-limits-configuration-manager',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              open_modal_limits_edit: {
                bind: 'fireTypeOfEdit'
              },
              global_storage_get_operational_welcome_operatives_success: {
                bind: 'fireDetailPage'
              }
            },
            out: {
              analytics_edit_amount_per_excecution: {
                bind: 'analytics-edit-amount-per-execution',
                analytics: analytics.dynamicLevel3('modificar limite por operacion')
              },
              analytics_edit_amount_daily: {
                bind: 'analytics-edit-amount-daily',
                analytics: analytics.dynamicLevel3('modificar limite diario')
              },
              analytics_edit_amount_monthly: {
                bind: 'analytics-edit-amount-monthly',
                analytics: analytics.dynamicLevel3('modificar limite mensual')
              },
              analytics_detail_page: {
                bind: 'analytics-detail-page',
                analytics: analytics.dynamicLevel3('detalle')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-glomo-dashboard-manager-mx',
        familyPath: 'cells-glomo-dashboard-manager',
        properties: {
          cellsConnections: {
            in: {
              key_recovery_back_to_login: {
                bind: 'logoutAndModalIgnore'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        tagSpherica: 'cells-bottom-modal-message-spherica',
        properties: {
          type: 'success',
          autoHide: true,
          time: 4000,
          icon: 'coronita:correct',
          iconSize: 24,
          cellsConnections: {
            in: {
              [getChannelName('patch_limits_success_message')]: {
                bind: 'open'
              }
            }
          }
        },
        propertiesSpherica: {
          icon: 'coronita:right',
          expand: true
        }
      }
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  const addSignConnector = (component, events) => signConnector(component, 'operationalLimits', events);
  addSignConnector('bbva-local-limits-api-dm', ['patch-limits-api-dm-fetch', 'patch-limits-api-dm-fetch-error']);

  localStorageLimits.addOutStorageChannels(base.components, [ 'operational_welcome_operatives' ], CONFIG);

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
