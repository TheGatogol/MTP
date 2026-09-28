/* eslint-disable new-cap */
'use strict';
const utils = require('./common/helpers/_utils');

module.exports = config => {
  const nativeIos = false;
  const HOST = config.globalServices.host;
  const PRODUCT = 'depositConfiguration';
  const pages = require('./common/_pages')(config)(PRODUCT);
  const LOCAL_CURRENCY = utils.getLocalCurrency(config);
  const LANGUAGE = utils.getLanguage(config);
  const SPINNER = utils.SPINNER(config);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const ANALYTICS = require('./analytics/_depositConfiguration')(config);
  const PAGE_NAME = 'depositConfiguration';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const MAX_STEPS = 1;

  const base = {
    currentPage: {
      url: '/deposit-configuration',
      params: '[]'
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        animationType: 'verticalUp',
        headerHeight: 60,
        headerFixed: true,
        className: 'bg-core-blue',
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            [PRODUCT + 'SCROLL_ZONE']: {
              bind: 'scrollItemIntoView'
            },
            [PRODUCT + 'show_button_finish_steps']: {
              bind: 'showConfirm'
            },
            [PRODUCT + '_OPEN_CONFIRM']: {
              bind: 'open'
            },
            [PRODUCT + '_CLOSE_CONFIRM']: {
              bind: 'close'
            },
            [PRODUCT + '_RESET_SCROLL']: {
              bind: 'resetLayerScroll'
            }
          },
          out: {
            [PRODUCT + '_SCROLL_COMPLETE']: {
              bind: 'cells-scroll-complete'
            },
            [PRODUCT + '_SCROLL_CHANNEL']: {
              bind: 'opx-template-content-scroll'
            }
          }
        }
      },
      propertiesSpherica: {
        type: 'modal',
        className: `header--white${nativeIos ? ' ios-top-padding' : ''}`,
        extraHeaderClass: nativeIos ? 'header--white' : '',
        headerHeight: utils.headerHeight,
        iOSFixedHeader: true
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PRODUCT,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT]: {
                bind: 'init'
              },
              SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS: {
                bind: 'init'
              },
              global_deposit_imposition_update_EXIT_CONFIRMATION_ACCEPT: {
                bind: 'reset'
              },
              global_deposit_configuration_EXIT_CANCEL: {
                bind: 'reset'
              }
            },
            out: {
              [PRODUCT + '_INIT_PAGE']: {
                bind: 'init-page'
              },
              [PRODUCT + '_RESET_PAGE']: {
                bind: 'reset'
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
          cellsConnections: {
            in: {
              [PRODUCT + '_NAVIGATE_TO_PAGE']: {
                bind: 'navigateToPage'
              }
            },
            out: {
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
          className: 'header',
          rightIcon: 'coronita:close',
          titleName: 'glomo-deposit-imposition-update-title',
          cellsConnections: {
            in: {
            },
            out: {
              [PRODUCT + '_HEADER_MODAL_EXIT_CONFIRMATION']: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary-alt',
          className: 'header',
          rightIconText: 'glomo-deposit-button-close'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-deposits-configuration-dm-mx',
        familyPath: 'glomo-deposits-configuration-dm',
        properties: {
          isSpherica,
          localCurrency: LOCAL_CURRENCY,
          currentLanguage: LANGUAGE,
          productType: PAGE_NAME,
          emailTypeConstant: 'EMAIL',
          depositPurchaseAccount: 'glomo-deposits-purchase-sale-account',
          depositPurchaseContract: 'glomo-deposits-purchase-sale-contract',
          depositPurchaseBalance: 'glomo-deposits-purchase-sale-balance',
          classKeyValueSuccess: 'spacing md',
          heroImageError: './images/general_error_2.svg',
          heroImageOutTime: './images/out_time.svg',
          btnLabelUnderstood: 'glomo-deposits-modal-help-understood',
          btnLabelExit: 'glomo-deposits-modal-btn-exit',
          btnLabelCancel: 'glomo-deposits-modal-btn-cancel',
          modalHeadTitle: 'glomo-deposit-imposition-update-title',
          host: HOST,
          storeAndForwardActive: true,
          native: !!config.native,
          depositsApiVersion: config.globalServices.versions.deposits,
          accountsApiVersion: config.globalServices.versions.accounts,
          fixedVersion: true,
          requiredToken: config.globalServices.requiredToken || 'tsec',
          maturityDateFormat: utils.getShortInvestedDate,
          currentInstruction: 'glomo-deposits-instruction-selected',
          cellsConnections: {
            in: {
              navigation_product_transaction_to_deposit_imposition_update: {
                bind: 'depositTransaction'
              },
              dashboard_customer_email: {
                bind: 'userEmail'
              },
              [PRODUCT + '_INIT_PAGE']: {
                bind: 'initConfigurationPage'
              },
              [PRODUCT + '_CHANGED_RADIO_BUTTON_SELECTED']: {
                bind: 'selectedOptionChanged'
              },
              [PRODUCT + '_PRIMARY_CHANNEL']: {
                bind: 'generateImpositionUpdate'
              },
              [PRODUCT + 'help_info_button']: {
                bind: 'configInfoRadioButtons'
              },
              [PRODUCT + '_HEADER_MODAL_EXIT_CONFIRMATION']: {
                bind: 'modalExitConfirmation'
              },
              [PRODUCT + '_request_deposits_imposition_update_success']: {
                bind: 'initDepositConfigurationSuccessPage'
              },
              [PRODUCT + '_request_deposits_imposition_update_error']: {
                bind: 'manageResponseErrorDepositConfiguration'
              },
              global_deposit_configuration_EXIT_CANCEL: {
                bind: 'initConfigurationPage'
              },
              global_standard_blocking_deposits_configuration_product_detail_error_alert: {
                bind: 'errorModalExit'
              }
            },
            out: {
              [PRODUCT + 'set_values_info_operative']: {
                bind: 'set-product-detail-info'
              },
              [PRODUCT + '_DECORATED_STEP']: {
                bind: 'decorated-step'
              },
              [PRODUCT + '_INSTRUCTION_SELECTED']: {
                bind: 'set-instruction-selected'
              },
              [PRODUCT + '_MESSAGE_CONTENT_CHANGED']: {
                bind: 'message-content-changed'
              },
              [PRODUCT + '_OUT_TIME_CHANGED']: {
                bind: 'message-out-time-changed'
              },
              dashboard_pull_to_refresh_start: {
                bind: 'back-to-start-dashboard-product-detail',
                'forward-to-native': true
              },
              [PRODUCT + '_back_page_button']: {
                bind: 'back-to-start-dashboard-product-detail',
                link: {
                  page: 'dashboard'
                }
              },
              [PRODUCT + '_INSTRUCTIONS_CHANGED']: {
                bind: 'purchase-sale-send-radio-values'
              },
              [PRODUCT + '_INSTRUCTION_BTN_DISABLE_CHANGED']: {
                bind: 'set-instruction-btn-disable'
              },
              [PRODUCT + '_INSTRUCTION_ALLOW_DISABLE_CHANGED']: {
                bind: 'set-instruction-allow-disable'
              },
              global_retry_error: {
                bind: 'retry-error'
              },
              global_deposits_request_deposits_imposition_update: {
                bind: 'request-deposits-imposition-update'
              },
              open_control_veil: {
                bind: 'deposits-start-spinner'
              },
              close_control_veil: {
                bind: 'deposits-stop-spinner'
              },
              global_deposits_configuration_error_settled: {
                bind: 'modal-error-deposit-settled'
              },
              SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS: {
                bind: 'navigate-to-success',
                link: {
                  page: 'depositConfigurationReview',
                  skipHistory: true
                }
              },
              SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS_status: {
                bind: 'navigate-to-success-status'
              },
              SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS_type: {
                bind: 'navigate-to-success-type'
              },
              global_deposits_purchase_modal_help_info: {
                bind: 'send-info-help-radio-buttons-modal'
              },
              global_alert_manager_open_with_settings: {
                bind: 'modal-exit-confirmation'
              },
              global_deposits_purchase_ERROR_OPERATION_IMPOSITION_RETRY: {
                bind: 'modal-error-operation-imposition-retry'
              },
              global_deposits_purchase_ERROR_OPERATION_IMPOSITION_EXIT: {
                bind: 'modal-error-operation-imposition-exit'
              },
              global_deposits_purchase_ERROR_OPERATION_OUT_TIME: {
                bind: 'modal-error-operation-out-time'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'modal-exit-confirmation'
                },
                global_deposits_purchase_modal_help_info_spherica: {
                  bind: 'send-info-help-radio-buttons-modal'
                }
              }
            },
            remove: {
              out: [
                'global_alert_manager_open_with_settings',
                'global_deposits_purchase_modal_help_info'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-operative-info',
        tagSpherica: 'glomo-operative-info-spherica',
        properties: {
          title: `glomo-deposits-imposition-update-title-info${isSpherica ? '-spherica' : ''}`,
          className: `${isSpherica ? 'contract-and-info-message' : ''} product-item`,
          class: 'pagare-flow-title-bigger',
          titleSection: true,
          amountDeposit: true,
          infoMessage: {},
          showSeparator: !isSpherica,
          maxSteps: MAX_STEPS,
          cellsConnections: {
            in: {
              [PRODUCT + 'set_values_info_operative']: {
                bind: 'product'
              },
              [PRODUCT + 'messages_operative_info']: {
                bind: 'infoMessageAmount'
              }
            },
            out: {
            }
          }
        },
        propertiesSpherica: {
          defaultLineClass: '',
          titleSection: false,
          amountDeposit: false,
          showSeparator: false
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-radio-buttons',
        tagSpherica: 'cells-step-radio-buttons-spherica',
        properties: {
          id: 'radioButtonBasicCase',
          className: 'deposit-configuration align-message',
          title: 'glomo-deposits-instruction-expiration-title-new',
          description: 'glomo-deposits-instruction-expiration-subtitle',
          helpData: false,
          currentStep: 1,
          active: true,
          maxSteps: MAX_STEPS,
          notInitializeWithAttached: true,
          hideCurrentStepLabel: true,
          stepId: 'step1',
          stepChangeLabel: `glomo-deposits-configuration-step-change-label${isSpherica ? '-spherica' : ''}`,
          buttonLabel: 'glomo-deposits-configuration-step-continue-label',
          disableChange: false,
          disableSeparation: true,
          allowDisableBtn: true,
          scrolled: false,
          typeIconMessage: '',
          isCustomTitleShown: true,
          cellsConnections: {
            in: {
              [PRODUCT + '_INIT_PAGE']: {
                bind: 'initialize'
              },
              [PRODUCT + '_SCROLL_COMPLETE']: {
                bind: 'scrollComplete'
              },
              [PRODUCT + '_INSTRUCTIONS_CHANGED']: {
                bind: 'radioButtonList'
              },
              [PRODUCT + '_MESSAGE_CONTENT_CHANGED']: {
                bind: 'infoMessage'
              },
              [PRODUCT + '_OUT_TIME_CHANGED']: {
                bind: 'bottomMessage'
              },
              [PRODUCT + '_INSTRUCTION_SELECTED']: {
                bind: 'selected'
              },
              [PRODUCT + '_INSTRUCTION_BTN_DISABLE_CHANGED']: {
                bind: 'disableBtn'
              },
              [PRODUCT + '_INSTRUCTION_ALLOW_DISABLE_CHANGED']: {
                bind: 'allowDisableBtn'
              },
              [PRODUCT + '_INSTRUCTION_BTN_DISABLE']: {
                bind: 'disableBtn'
              },
              [PRODUCT + '_COLLAPSED_NEXT_STEP']: {
                bind: 'collapsed'
              },
              [PRODUCT + '_DECORATED_STEP']: {
                bind: 'lastStep'
              }
            },
            out: {
              [PRODUCT + 'REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [PRODUCT + 'deposits_next_step']: {
                bind: 'continue-pressed'
              },
              [PRODUCT + '_OPEN_NEXT_STEP']: {
                bind: 'change-pressed'
              },
              [PRODUCT + 'help_info_button']: {
                bind: 'cells-step-radio-button-icon-help-clicked'
              },
              [PRODUCT + '_COLLAPSED_LAST_STEP_CHANGED']: {
                bind: 'change-step-state'
              },
              [PRODUCT + '_CHANGED_RADIO_BUTTON_SELECTED']: {
                bind: 'changed-radio-button-selected'
              },
              [PRODUCT + '_focus_in_step-radio-buttons']: {
                bind: 'cells-step-focus-in'
              }
            }
          }
        },
        propertiesSpherica: {
          currentStep: 1,
          maxSteps: MAX_STEPS,
          hideCurrentStepLabel: false,
          class: 'inline-header-title cells-step-container',
          ariaHidden: false,
          collapsep: true,
          active: true,
          disableChange: false,
          typeIconMessage: ''
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-opx-deposits-configuration-manager',
        type: 'DM',
        properties: {
          lang: LANGUAGE,
          autoActivateStep: true,
          repeatOperative: true,
          currentStep: 1,
          operativeName: 'DEPOSITSPURCHASE',
          cellsConnections: {
            in: {
              SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS: {
                bind: 'reset'
              },
              global_deposit_imposition_update_EXIT_CONFIRMATION_ACCEPT: {
                bind: 'reset'
              },
              global_deposit_configuration_EXIT_CANCEL: {
                bind: 'reset'
              },
              deposits_configuration_ERROR_OPERATION_IMPOSITION_EXIT_CANCEL: {
                bind: 'reset'
              },
              deposits_configuration_ERROR_OPERATION_IMPOSITION_EXIT_ACCEPT: {
                bind: 'reset'
              },
              [PRODUCT + 'deposits_next_step']: {
                bind: 'goToNext'
              },
              [PRODUCT + '_COLLAPSED_LAST_STEP_CHANGED']: {
                bind: 'goToStep'
              },
              [PRODUCT + 'REGISTER_STEP_CHANNEL']: {
                bind: 'registerStep'
              }
            },
            out: {
              [PRODUCT + 'show_button_finish_steps']: {
                bind: 'can-execute-changed'
              },
              [PRODUCT + '_COLLAPSED_NEXT_STEP']: {
                bind: 'collapsed-radio-buttons'
              },
              [PRODUCT + '_INSTRUCTION_BTN_DISABLE']: {
                bind: 'set-instruction-btn-disable'
              }
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        tag: 'cells-summary-view',
        tagSpherica: 'cells-summary-view-spherica',
        type: 'UI',
        properties: {
          className: 'deposit-configuration',
          maxSteps: MAX_STEPS,
          buttonLabel: 'glomo-deposit-configuration-continue-label',
          cellsConnections: {
            in: {
              [PRODUCT + 'init_page']: {
                bind: 'initialize'
              }
            },
            out: {
              [PRODUCT + '_PRIMARY_CHANNEL']: {
                bind: 'summary-closed'
              },
              [PRODUCT + 'REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'regular',
          primaryButtonClass: 'positive full',
          buttonLabel: 'glomo-deposit-configuration-continue-label-spherica'
        }
      },
      {
        zone: 'app_main',
        tag: 'cells-dm-global-apis-deposits',
        type: 'DM',
        properties: {
          host: HOST,
          native: !!config.native,
          depositsApiVersion: config.globalServices.versions.deposits,
          requiredToken: config.globalServices.requiredToken || 'tsec',
          otpId: PAGE_NAME,
          cellsConnections: {
            in: {
              global_deposits_request_deposits_imposition_update: {
                bind: 'patchDepositsImpositionUpdate'
              }
            },
            out: {
              [PRODUCT + '_request_deposits_imposition_update_success']: {
                bind: 'set-patch-deposits-imposition-update'
              },
              [PRODUCT + '_request_deposits_imposition_update_error']: {
                bind: 'error-on-patch-deposits-imposition-update'
              }
            }
          }
        }
      }
    ]
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_modal_help_info_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_deposit_imposition_update_EXIT_CONFIRMATION_ACCEPT: {
            bind: 'alert-DEPOSIT_IMPOSITION_EXIT-accept',
            'backStep': true
          },
          global_deposit_configuration_EXIT_CANCEL: {
            bind: 'alert-deposits_configuration-cancel',
            'backStep': true
          }
        }
      }
    }
  };

  const analyticsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-deposit-imposition-update-manager',
    familyPath: '@glomo-web-components/glomo-analytics-deposit-imposition-update-manager',
    render: 'litElement',
    properties: {
      config: {
        steps: {
          sign: 'deposit-imposition-update-sign'
        }
      },
      cellsConnections: {
        in: {
          deposit_product_set_transaction_detail: {
            bind: 'persistStartData'
          },
          navigation_product_transaction_to_deposit_imposition_update: {
            bind: 'firePageVisitDynamic'
          },
          [PRODUCT + '_CHANGED_RADIO_BUTTON_SELECTED']: {
            bind: 'fireRadioOptionStarted'
          },
          [PRODUCT + 'deposits_next_step']: {
            bind: 'viewStepTwo'
          },
          global_deposits_request_deposits_imposition_update: {
            bind: 'viewStepThree'
          },
          SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS: {
            bind: 'fireAppSuccessCompleted'
          }
        },
        out: {
          [PRODUCT + 'ANALYTICS_APP_PAGE_VISIT']: {
            bind: 'analytics-deposit-imposition-update-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [PRODUCT + 'ANALYTICS_APP_STARTED']: {
            bind: 'analytics-deposit-imposition-update-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [PRODUCT + 'ANALYTICS_APP_STEP_2']: {
            bind: 'analytics-deposit-imposition-update-step-two',
            analytics: ANALYTICS.APP_STEP_2
          },
          [PRODUCT + 'ANALYTICS_APP_STEP_3']: {
            bind: 'analytics-deposit-imposition-update-step-three',
            analytics: ANALYTICS.APP_STEP_3
          },
          [PRODUCT + 'ANALYTICS_APP_COMPLETED_DATA']: {
            bind: 'analytics-deposit-imposition-update-success-completed',
            analytics: ANALYTICS.APP_COMPLETED
          },
          [PRODUCT + 'ANALYTICS_APP_INPROCESS_DATA']: {
            bind: 'analytics-deposit-imposition-update-inprocess-completed',
            analytics: ANALYTICS.APP_INPROCESS
          }
        }
      }
    }
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  base.components.push(analyticsDM);

  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-deposits', PAGE_NAME, ['set-patch-deposits-imposition-update', 'error-on-patch-deposits-imposition-update']);

  addRetryErrors(base)(
    [],
    {
      dmName: 'glomo-deposits-configuration-dm-mx',
      product: 'deposits_configuration'
    });

  return sphericaPageUtils.spherize(base);
};
