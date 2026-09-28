/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const { nativeIos } = CONFIG;
  const PAGE_NAME_CHANNEL = 'card_Detail';
  const PAGE_NAME = 'interestSimulator';
  const utils = require('./common/helpers/_utils');
  const { SPINNERSPHERICA: createSpinner } = utils;
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const LANGUAGE = utils.getLanguage(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  // eslint-disable-next-line new-cap
  const spinner = createSpinner(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_interestSimulator')();

  spinner.properties = {
    spinnerWithText: true,
    className: 'solid-spinner',
    messages: [ 'glomo-aggregation-interest-simulator-loading-spherica' ],
    newCellsConnections: {
      add: {
        in: {
          interest_simulator_modal_another_amount_loading_spinner_messages: {
            bind: 'messages'
          },
          interest_simulator_loading_spinner_messages: {
            bind: 'messages'
          }
        }
      }
    }
  };

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      localCurrency: utils.getLocalCurrency(),
      cellsConnections: {
        in: {
          interest_simulator_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_exit_card_interest_simulator_confirm: {
            bind: 'alert-EXIT-INTEREST-SIMULATOR-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: 'interest-simulator',
    currentPage: {
      url: 'card/:productId/interest-simulator',
      params: []
    },
    pages: page,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      spinner,
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME]: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME + '_init_page']: {
                bind: 'init-page'
              },
              [PAGE_NAME + '_reset_page']: {
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
        tag: 'cells-molecule-header-spherica',
        properties: {
          className: '',
          variant: 'primary',
          rightIconText: 'cells-molecule-header-spherica-close',
          titleName: 'glomo-interest-simulator-title',
          back: true,
          rightIcon: 'coronita:close',
          cellsConnections: {
            in: {},
            out: {
              [PAGE_NAME + '_back_request_navigation_to_product']: {
                bind: 'click-right-button'
              }
            }
          }
        }
      }
    ]
  };

  const glomoInterestSimulatorDM = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-interest-simulator-dm',
    properties: {
      currency: utils.getLocalCurrency(),
      isSpherica: true,
      cellsConnections: {
        in: {
          global_storage_get_interest_simulator_tooltip_success: {
            bind: 'getCardDetailLocalStorage'
          },
          global_storage_get_interest_simulator_tooltip_error: {
            bind: 'getCardDetailLocalStorage'
          },
          global_navitage_to_payment_simulation: {
            bind: 'setProperties'
          },
          dashboard_accounts: {
            bind: 'accountList'
          },
          set_card_data_for_interest_simulator: {
            bind: 'product'
          },
          [PAGE_NAME + '_interest_simulator_success_response_post']: {
            bind: 'postSuccessResponse'
          },
          [PAGE_NAME + '_interest_simulator_error_response_post']: {
            bind: 'postErrorResponse'
          },
          [PAGE_NAME + '_back_request_navigation_to_product']: {
            bind: 'setExitSimulator'
          },
          [PAGE_NAME + '_interest_simulator_simulator_amount']: {
            bind: 'setRequestPost'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          global_exit_card_interest_simulator_confirm: {
            bind: 'manageBackButton'
          },
          [PAGE_NAME + '_request_another_amount_modal']: {
            bind: 'setModalAnotherAmount'
          },
          [PAGE_NAME + '_set_other_amount']: {
            bind: 'setOtherAmount'
          },
          [PAGE_NAME + '_request_more_info_modal']: {
            bind: 'setMoreInfoModal'
          },
          [PAGE_NAME + '_request_pay_card']: {
            bind: 'navigateToCardPayment'
          },
          [PAGE_NAME + '_retry_simulation_request']: {
            bind: 'retryRequestPost'
          },
          [PAGE_NAME + '_finish_operative']: {
            bind: 'manageBackButton'
          },
          [PAGE_NAME + '_navigate-to-credit-card-payment']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_tootip_clicked']: {
            bind: 'disableDigitalCardInfoTooltip'
          },
          [PAGE_NAME + '_set_positive_balance_other_amount']: {
            bind: 'setOtherAmount'
          }
        },
        out: {
          interest_simulator_alert_manager_open_with_settings_spherica: {
            bind: 'interest-simulator-dm-modal-config-spherica'
          },
          interest_simulator_set_interest_simulator_tooltip: {
            bind: 'set-interest-simulator-tooltip'
          },
          [PAGE_NAME + '_set_product_id_to_request']: {
            bind: 'set-card-id-to-request'
          },
          global_get_from_storage: {
            bind: 'get-card-detail-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-tooltip-into-local-storage'
          },
          [PAGE_NAME + '_set_api_version_request']: {
            bind: 'set-api-version-to-request'
          },
          [PAGE_NAME + '_request_post_interest_simulator']: {
            bind: 'request-post-interest-simulator'
          },
          global_exit_interest_simulator_modal: {
            bind: 'show-exit-simulator-modal'
          },
          global_more_info_interest_simulator_modal: {
            bind: 'show-more-info-simulator-modal'
          },
          [PAGE_NAME + '_set_positive_balance_flag']: {
            bind: 'set-simulator-positive-balance'
          },
          [PAGE_NAME + '_interest_simulator_set_amounts']: {
            bind: 'set-interest-simulator-data'
          },
          [PAGE_NAME + '_interest_simulator_set_total_amount']: {
            bind: 'set-total-amount-accounts'
          },
          [PAGE_NAME + '_interest_simulator_set_total_amount_modal']: {
            bind: 'set-total-amount-accounts-modal'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          interest_simulator_modal_another_amount_loading_spinner_messages: {
            bind: 'modal-another-amount-loading-spinner-messages'
          },
          [PAGE_NAME + '_set_opened_modal_another_amount']: {
            bind: 'open-modal-select-amount'
          },
          [PAGE_NAME + '_close_modal_opened']: {
            bind: 'close-modal-opened'
          },
          [PAGE_NAME + '_reset_modal_exit']: {
            bind: 'close-modal-select-amount'
          },
          [PAGE_NAME + '_reset_modal']: {
            bind: 'close-modal-opened'
          },
          [PAGE_NAME + '_set_configuation_modal']: {
            bind: 'set-modal-configuarion'
          },
          [PAGE_NAME + '_set_advice_configuration']: {
            bind: 'set-interest-simulator-advice-configuration'
          },
          [PAGE_NAME + '_set_button_configuration']: {
            bind: 'set-continue-configuration'
          },
          [PAGE_NAME + '_set_error_response_data']: {
            bind: 'set-error-response-data'
          },
          [PAGE_NAME + '_set_error_configuration']: {
            bind: 'set-error-configuration'
          },
          [PAGE_NAME + '_change_info_message']: {
            bind: 'change-text-info-message'
          },
          [PAGE_NAME + '_disable_advice_with_error']: {
            bind: 'set-disable-advice-error'
          },
          [PAGE_NAME + '_set_primary_button_label']: {
            bind: 'primary-button-label-changed'
          },
          [PAGE_NAME + '_exit_not_have_accounts']: {
            bind: 'exit-not-have-accounts-event',
            backStep: true
          },
          [PAGE_NAME + '_exit_operative']: {
            bind: 'exit-interest-simulator-page',
            backStep: true
          },
          global_card_credit_card_payment_simulated_amount: {
            bind: 'set-data-to-card-payment'
          },
          [PAGE_NAME + '_navigate-to-credit-card-payment']: {
            bind: 'navigate-to-card-payment',
            link: {
              page: 'cardCreditCardPayment',
              params: {
                productId: 'productId'
              }
            }
          }
        }
      }
    }
  };

  const glomoAggregationInterestSimulator = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-aggregation-interest-simulator-spherica',
    properties: {
      localCurrency: utils.getLocalCurrency(),
      cellsConnections: {
        in: {
          [PAGE_NAME + '_interest_simulator_set_amounts']: {
            bind: '_setAmount'
          },
          [PAGE_NAME + '_interest_simulator_set_total_amount']: {
            bind: 'totalAccountAmounts'
          },
          [PAGE_NAME + '_set_positive_balance_flag']: {
            bind: 'positiveBalance'
          },
          interest_simulator_set_interest_simulator_tooltip: {
            bind: 'disableShowToolTip'
          },
          global_exit_card_interest_simulator_confirm: {
            bind: 'resetValues'
          },
          [PAGE_NAME + '_set_error_response_data']: {
            bind: '_setAmount'
          },
          [PAGE_NAME + '_set_error_configuration']: {
            bind: 'responseError'
          },
          [PAGE_NAME + '_change_info_message']: {
            bind: 'positiveBalanceInfoMessage'
          },
          [PAGE_NAME + 'set-visisbility-tooltip']: {
            bind: 'disableShowToolTip'
          }
        },
        out: {
          [PAGE_NAME + '_interest_simulator_simulator_amount']: {
            bind: 'simulator-amount-event'
          },
          [PAGE_NAME + '_set_positive_balance_other_amount']: {
            bind: 'set-other-amount-positive-balance'
          },
          [PAGE_NAME + '_request_another_amount_modal']: {
            bind: 'simulator-link-event'
          },
          [PAGE_NAME + '_retry_simulation_request']: {
            bind: 'try-again-event'
          },
          [PAGE_NAME + '_finish_operative']: {
            bind: 'max-entry-return-event'
          },
          [PAGE_NAME + '_tootip_clicked']: {
            bind: 'interest-simulator-tooltip'
          },
          [PAGE_NAME + '_primary_button_disabled']: {
            bind: 'primary-button-disabled-event'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const cellsCardAdvice = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-card-advice-spherica',
    properties: {
      list: [],
      className: 'interest-simulator-spherica',
      customClass: 'interest-simulator-spherica',
      hiddenImage: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_advice_configuration']: {
            bind: 'setProperties'
          },
          [PAGE_NAME + '_set_positive_balance_flag']: {
            bind: 'hidden'
          },
          [PAGE_NAME + '_disable_advice_with_error']: {
            bind: 'hidden'
          }
        },
        out: {
          [PAGE_NAME + '_request_more_info_modal']: {
            bind: 'card-advice-link-click'
          }
        }
      }
    }
  };

  const cellsMoleculeActions = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-molecule-actions-spherica',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_positive_balance_flag']: {
            bind: 'primaryButtonDisabled'
          },
          [PAGE_NAME + '_set_button_configuration']: {
            bind: 'primaryButtonDisabled'
          },
          [PAGE_NAME + '_primary_button_disabled']: {
            bind: 'primaryButtonDisabled'
          },
          [PAGE_NAME + '_set_primary_button_label']: {
            bind: 'primaryButtonLabel'
          }
        },
        out: {
          [PAGE_NAME + '_request_pay_card']: {
            bind: 'cells-molecule-actions-primary-button-clicked'
          }
        }
      }
    }
  };

  const cellsDMGlobalApisCards = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      cardsApiVersion: CONFIG.globalServices.cards,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_product_id_to_request']: {
            bind: 'cardId'
          },
          [PAGE_NAME + '_set_api_version_request']: {
            bind: 'cardsApiVersion'
          },
          [PAGE_NAME + '_request_post_interest_simulator']: {
            bind: 'postPaymentSimulation'
          }
        },
        out: {
          [PAGE_NAME + '_interest_simulator_success_response_post']: {
            bind: 'set-cards-payments-simulate'
          },
          [PAGE_NAME + '_interest_simulator_error_response_post']: {
            bind: 'error-on-post-cards-payments-simulate'
          }
        }
      }
    }
  };

  const cellsModalSelectAmount = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-select-amount-spherica',
    properties: {
      range: true,
      showTextRightIcon: true,
      showIconInRangeMessageSection: true,
      buttonAcceptText: 'cells-modal-select-amount-button-text-continue-spherica',
      iconCode: 'coronita:close',
      className: 'select-amount',
      verifyValueDisabled: true,
      extraConfigLimitedAmount: true,
      closeOn: true,
      iOSFixedHeader: isNativeIos,
      language: LANGUAGE,
      maxValueInfoMessageAfter: false,
      maxValueInfoMessage: 'glomo-interest-simulator-modal-amount-input-after-message',
      maxValueErrorMessage: 'glomo-interest-simulator-modal-amount-input-after-message-error',
      min: null,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_opened_modal_another_amount']: {
            bind: 'open'
          },
          [PAGE_NAME + '_interest_simulator_set_total_amount']: {
            bind: 'max'
          },
          [PAGE_NAME + '_set_configuation_modal']: {
            bind: 'open'
          },
          [PAGE_NAME + '_interest_simulator_set_total_amount_modal']: {
            bind: 'max'
          },
          [PAGE_NAME + '_close_modal_opened']: {
            bind: 'close'
          }
        },
        out: {
          [PAGE_NAME + '_set_other_amount']: {
            bind: 'cells-modal-select-amount-continue'
          },
          interest_simulator_loading_spinner_messages: {
            bind: 'cells-modal-select-amount-loading-spinner-messages'
          }
        }
      }
    }
  };


  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-interest-simulator-manager',
    familyPath: '@glomo-web-components/glomo-analytics-interest-simulator-manager',
    render: 'litElement',
    properties: {
      LITERALS: ANALYTICS.BINDED_LITERALS,
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + 'slide_change_account']: {
            bind: 'onSlideChange'
          },
          global_navitage_to_payment_simulation: {
            bind: 'fireMarkSimulator'
          },
          [PAGE_NAME + '_set_error_configuration']: {
            bind: 'fireAdvancedMarkErrorInterest'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + 'analytics_mark_simulator']: {
            bind: 'analytics-mark-simulator',
            analytics: ANALYTICS.PAGE_VIEW_SIMULATOR
          },
          [PAGE_NAME_CHANNEL + 'analytics_mark_error_interest']: {
            bind: 'analytics-advanced-mark-error-interest',
            analytics: ANALYTICS.PAGE_VIEW_ERROR
          }
        }
      }
    }
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'interest_simulator_tooltip' ], CONFIG);

  base.components.push(
    glomoInterestSimulatorDM,
    glomoAggregationInterestSimulator,
    cellsCardAdvice,
    cellsMoleculeActions,
    cellsDMGlobalApisCards,
    cellsModalSelectAmount,
    analyticsManager
  );

  base.components.push(glomoAlertManagerSpherica);

  addCommonErrors(base.components)();

  return base;
};
