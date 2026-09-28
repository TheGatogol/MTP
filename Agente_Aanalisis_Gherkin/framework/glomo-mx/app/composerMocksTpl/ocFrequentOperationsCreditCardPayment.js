'use strict';
const opxCreditCardPaymentMxDm = (_connectionsIn, _connectionsOut) => {
  delete _connectionsOut('glomo-opx-card-credit-card-payment-mx').global_card_detail_data_refresh;
  delete _connectionsOut('glomo-opx-card-credit-card-payment-mx').oc_frequent_operations_credit_card_payment_can_execute;
  delete _connectionsOut('glomo-opx-card-credit-card-payment-mx').oc_frequent_operations_credit_card_payment_max_limit_channel;
  delete _connectionsIn('glomo-opx-card-credit-card-payment-mx').navigation_from_deep_link_to_operations;
  _connectionsIn('glomo-opx-card-credit-card-payment-mx').frequent_operations_fill_summary_data = {
    bind: 'setSelectedAmount'
  };
  _connectionsIn('glomo-opx-card-credit-card-payment-mx').frequent_operations_sender_service = {
    bind: 'setSelectedAmount'
  };
  _connectionsIn('glomo-opx-card-credit-card-payment-mx').frequent_operations_tx_selected_account = {
    bind: 'selectedAccount'
  };
  _connectionsIn('glomo-opx-card-credit-card-payment-mx').frequent_operations_tx_selected_amount = {
    bind: 'selectedAmount'
  };
  _connectionsIn('glomo-opx-card-credit-card-payment-mx').frequent_operations_set_selected_card = {
    bind: 'selectedCard'
  };
  _connectionsIn('glomo-opx-card-credit-card-payment-mx').frequent_operations_set_raw_selected_amount = {
    bind: 'rawSelectedAmount'
  };
  _connectionsIn('glomo-opx-card-credit-card-payment-mx').frequent_operations_execute_init = {
    bind: 'init'
  };
  _connectionsIn('glomo-opx-card-credit-card-payment-mx').frequent_operations_max_enter_amount = {
    bind: 'maxLimit'
  };
  _connectionsOut('glomo-opx-card-credit-card-payment-mx').frequent_operations_transfer_analyitics_app_completed = {
    bind: 'navigate-to-credit-card-payment-review'
  };
  _connectionsOut('glomo-opx-card-credit-card-payment-mx').frequent_operations_reset_notification_modal_state = {
    bind: 'navigate-to-credit-card-payment-review'
  };
  _connectionsOut('glomo-opx-card-credit-card-payment-mx').global_card_detail_data_refresh = {
    bind: 'navigate-to-credit-card-payment-review',
    link: {
      page: 'creditCardPaymentReview',
      cleanUntil: 'ocFrequentOperationsCreditCardPayment'
    }
  };
};
const cellsMoleculeMoleculeHeaderCreditCard = (_connectionsIn, _connectionsOut) => {
  _connectionsOut('cells-molecule-header').frequent_operations__TDC_HEADER_CLOSE = {
    bind: 'click-right-button'
  };
};
const cellsHandleLifeCycle = (_connectionsIn, _connectionsOut) => {
  delete _connectionsOut('cells-handle-life-cycle').card_credit_card_payment_init_page;
  _connectionsOut('cells-handle-life-cycle').oc_frequent_operations_credit_card_payment_init_page = {
    bind: 'init-page'
  };
};
const cellsMoleculeEnterAmountCreditCard = (_connectionsIn, _connectionsOut) => {
  delete _connectionsOut('cells-step-enter-amount-credit-card').oc_frequent_operations_credit_card_payment_change_step_state_channel;
  delete _connectionsOut('cells-step-enter-amount-credit-card').oc_frequent_operations_credit_card_payment_analytics_cells_step_enter_amount_focus_in;
  delete _connectionsOut('cells-step-enter-amount-credit-card').oc_frequent_operations_credit_card_payment_analytics_selected_amount_changed;
  delete _connectionsIn('cells-step-enter-amount-credit-card').oc_frequent_operations_credit_card_payment_max_limit_channel;
  _connectionsIn('cells-step-enter-amount-credit-card').frequent_operations_is_product_selector_active = {
    bind: 'active'
  };
  _connectionsIn('cells-step-enter-amount-credit-card').frequent_operations_is_product_selector_collapsed = {
    bind: 'collapsed'
  };
  _connectionsIn('cells-step-enter-amount-credit-card').frequent_operations_card_credit_card_payment_reset_steps = {
    bind: 'reset'
  };
  _connectionsIn('cells-step-enter-amount-credit-card').frequent_operations_max_enter_amount = {
    bind: 'maxLimit'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_show_products = {
    bind: 'selected-amount'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_refresh_products_changed_pressed = {
    bind: 'change-pressed'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_selected_amount_refresh_product_selector = {
    bind: 'selected-amount'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_analytics_update_payment_import = {
    bind: 'selected-amount'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_recalculate_status_bar = {
    bind: 'selected-amount'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_amount_refresh_product_selector = {
    bind: 'clean-amount'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_refresh_product_selector = {
    bind: 'change-pressed'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_transfer_analytics_change_ammount_pressed = {
    bind: 'change-pressed'
  };
  _connectionsOut('cells-step-enter-amount-credit-card').frequent_operations_refresh_product_selector_dont_change = {
    bind: 'dont-change-and-continue'
  };
};
const cellsStepProductselectorCreditCard = (_connectionsIn, _connectionsOut) => {
  delete _connectionsOut('cells-step-product-selector').oc_frequent_operations_credit_card_payment_analytics_view_account_selection_step;
  delete _connectionsOut('cells-step-product-selector').oc_frequent_operations_credit_card_payment_analytics_edit_account;
  _connectionsIn('cells-step-product-selector').frequent_operations_fill_product_selector = {
    bind: 'selected'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_fill_extra_product_selector = {
    bind: 'customSelected'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_product_selector_active = {
    bind: 'active'
  };
  _connectionsIn('cells-step-product-selector').frequent_operation_balance_modal_for_credit_card_products = {
    bind: 'collapsed'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_product_selector_collapsed = {
    bind: 'collapsed'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_product_selector_scrolled = {
    bind: 'scrolled'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_product_selector_number = {
    bind: 'currentStep'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_product_selector_scrolled = {
    bind: 'scrolled'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_transfer_max_steps = {
    bind: 'maxSteps'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_product_selector_fixed = {
    bind: 'fixed'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_avaliable_products = {
    bind: 'products'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_is_product_one_product = {
    bind: 'forceEnableEdit'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_card_credit_card_payment_reset_steps = {
    bind: 'reset'
  };
  _connectionsIn('cells-step-product-selector').frequent_operations_max_enter_amount_from_modal = {
    bind: 'maxLimit'
  };
  _connectionsIn('cells-step-product-selector').frequent_operation_disable_product_selector = {
    bind: 'active'
  };
  _connectionsOut('cells-step-product-selector').frequent_operations_change_product = {
    bind: 'change-pressed'
  };
  _connectionsOut('cells-step-product-selector').frequent_operations_changed_product = {
    bind: 'on-change-product-selected'
  };
  _connectionsOut('cells-step-product-selector').frequent_operations_analytics_app_started = {
    bind: 'change-step-state'
  };
};
const cellsOperationSummayCreditCard = (_connectionsIn, _connectionsOut) => {
  delete _connectionsIn('cells-operation-summary').global_card_credit_card_payment_set_operation_summary;
  delete _connectionsOut('cells-operation-summary').card_credit_card_payment_summary_closed;
  _connectionsIn('cells-operation-summary').frequent_operations_change_button_label = {
    bind: 'buttonLabel'
  };
  _connectionsIn('cells-operation-summary').frequent_operations_fill_summary = {
    bind: 'operation'
  };
  _connectionsOut('cells-operation-summary').oc_frequent_operations_credit_card_payment_summary_closed = {
    bind: 'summary-closed'
  };
  _connectionsOut('cells-operation-summary').frequent_operations_analytics_summary_continue = {
    bind: 'summary-closed'
  };
};
const cellsGlobalApisCreditCard = (_connectionsIn, _connectionsOut, _setProperty) => {
  _setProperty('cells-dm-global-apis-cards').cardsApiVersion = '1';
  _connectionsIn('cells-dm-global-apis-cards').frequent_operations_set_card_id = {
    bind: 'cardId'
  };
  _connectionsIn('cells-dm-global-apis-cards').frequent_operations_execute_service = {
    bind: 'getCard'
  };
  _connectionsOut('cells-dm-global-apis-cards').frequent_operations_set_card = {
    bind: 'set-card'
  };
};
module.exports = (CONFIG) => {
  const pageName = 'ocFrequentOperationsCreditCardPayment';
  const base = require('./cardCreditCardPayment')(CONFIG, pageName);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { connectionsIn, connectionsOut, setProperty, setTemplateProperty } = require('./common/helpers/_utils');
  base.hash = 'frequent-operations-credit-card-payment';
  base.currentPage.url = '/frequent-operations-credit-card-payment';
  const _connectionsInFreq = connectionsIn(base);
  const _connectionsOutFreq = connectionsOut(base);
  const _setPropertyFreq = setProperty(base);
  const _setTemplatePropertyFreq = setTemplateProperty(base);
  const { appOnclickstartNotification, modalPageView, appPageVisitNotification, appStartedNotification, appStep2, appCompletedNotification } = require('./analytics/_frequentOperations')(CONFIG);
  const analitycOldComponent = base.components.findIndex(comp => comp.tag === 'glomo-analytics-card-credit-card-payment-manager');
  base.components.splice(analitycOldComponent, 1);
  const isNativeIOs = CONFIG.nativeIos || false;

  opxCreditCardPaymentMxDm(_connectionsInFreq, _connectionsOutFreq);
  cellsMoleculeMoleculeHeaderCreditCard(_connectionsInFreq, _connectionsOutFreq);
  cellsHandleLifeCycle(_connectionsInFreq, _connectionsOutFreq);
  cellsMoleculeEnterAmountCreditCard(_connectionsInFreq, _connectionsOutFreq);
  cellsStepProductselectorCreditCard(_connectionsInFreq, _connectionsOutFreq);
  cellsOperationSummayCreditCard(_connectionsInFreq, _connectionsOutFreq);
  cellsGlobalApisCreditCard(_connectionsInFreq, _connectionsOutFreq, _setPropertyFreq);
  _setTemplatePropertyFreq.className = isNativeIOs ? 'ios-top-padding bg-core-blue' : 'bg-core-blue';
  _setTemplatePropertyFreq.iOSFixedHeader = isNativeIOs;
  _setTemplatePropertyFreq.cellsConnections.in.frequent_operations_recalculate_header = {
    bind: 'recalculateHeader'
  };
  _setTemplatePropertyFreq.cellsConnections.in.frequent_operations_recalculate_status_bar = {
    bind: 'recalculateStatusBarTop'
  };
  _setTemplatePropertyFreq.cellsConnections.in.frequent_operations_reset_scroll = {
    bind: 'resetLayerScroll'
  };
  base.components.push(
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-widget-intelligent-frequent-operations',
      familyPath: '@glomo-web-components/bbva-widget-intelligent-frequent-operations',
      render: 'litElement',
      properties: {
        evtPrefix: 'frequent-operations',
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
            navigation_from_deep_link_to_operations: {
              bind: 'frequentOperationCreditCardPaymentExecution'
            },
            navigation_from_deep_link_from_notification_detail: {
              bind: 'notificationsCenterCreditCardPayment'
            },
            frequent_operations_set_card: {
              bind: 'selectedCardData'
            },
            frequent_operations_refresh_products_changed_pressed: {
              bind: 'stateTransferSummary'
            },
            frequent_operations_refresh_product_selector: {
              bind: 'refreshProductSelect'
            },
            frequent_operations_refresh_product_selector_dont_change: {
              bind: 'dontChangeProductsSummary'
            },
            frequent_operations_amount_refresh_product_selector: {
              bind: 'refreshProductSelect'
            },
            frequent_operations_selected_amount_refresh_product_selector: {
              bind: 'refreshProductWithSummary'
            },
            frequent_operations__TDC_HEADER_CLOSE: {
              bind: 'abandonReuseOperationModal'
            },
            frequent_operationreuse_credit_card_leave_operation: {
              bind: 'resetCreditCardOperation'
            },
            frequent_operationreuse_credit_card_success_navigation: {
              bind: 'resetCreditCardOperation'
            },
            frequent_operations_change_product: {
              bind: 'productWillChange'
            },
            frequent_operations_changed_product: {
              bind: 'productChanged'
            },
            operations_list_help_modal_button_click: {
              bind: 'setBalanceButtonOperations'
            },
            operations_list_help_modal_link_click: {
              bind: 'setBalanceLinkOperations'
            },
            frequent_operations_reset_notification_modal_state: {
              bind: 'resetNotificationModalState'
            },
            oc_frequent_operations_credit_card_payment_dont_change_account: {
              bind: 'productDontChanged'
            }
          },
          out: {
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            CLOSE_NOTIFICATION_CENTER_DETAIL_MODAL: {
              bind: 'frequent-operations-close-notification-modal'
            },
            frequent_operations_set_card_id: {
              bind: 'frequent-operations-credit-card-payment-id'
            },
            oc_frequent_operations_credit_card_payment_init_page: {
              bind: 'frequent-operations-execute-init'
            },
            frequent_operations_execute_service: {
              bind: 'frequent-operations-execute-cards-service'
            },
            frequent_operations_recalculate_header: {
              bind: 'frequent-operations-recalculate-header'
            },
            frequent_operations_products_selector: {
              bind: 'frequent-operations-fire-credit-card-fill-products'
            },
            frequent_operations_sender_service: {
              bind: 'frequent-operations-fire-credit-card-fill-sender-service'
            },
            frequent_operations_products_selector_selected_product: {
              bind: 'frequent-operations-fire-credit-card-fill-selected-product'
            },
            frequent_operations_products_selector_is_active: {
              bind: 'frequent-operations-credit-card-fill-product-selector-is-property-step-active'
            },
            frequent_operations_products_selector_is_collapsed: {
              bind: 'frequent-operations-credit-card-fill-product-selector-is-property-step-collapsed'
            },
            frequent_operations_set_selected_card: {
              bind: 'frequent-operations-fire-selected-card'
            },
            frequent_operations_is_product_selector_active: {
              bind: 'frequent-operations-credit-card-enter-amount-is-property-step-active'
            },
            frequent_operations_is_product_selector_collapsed: {
              bind: 'frequent-operations-credit-card-enter-amount-is-property-step-collapsed'
            },
            frequent_operations_fill_summary: {
              bind: 'frequent-operations-final-amount-selected'
            },
            card_credit_card_payment_summary_open: {
              bind: 'frequent-operations-state-summary'
            },
            frequent_operations_is_product_one_product: {
              bind: 'frequent-operations-is-one-product'
            },
            frequent_operations_call_summary: {
              bind: 'frequent-operations-call-show-cofirm'
            },
            frequent_operations_change_button_label: {
              bind: 'frequent-operations-change-label-button'
            },
            frequent_operations_reset_scroll: {
              bind: 'frequent-operations-recalculate-cc-scroll'
            },
            frequent_operations_fill_product_selector: {
              bind: 'frequent-operations-fill-product-selector'
            },
            frequent_operations_max_enter_amount: {
              bind: 'frequent-operations-credit-card-max-enter-amount'
            },
            frequent_operations_max_enter_amount_from_modal: {
              bind: 'frequent-operations-credit-card-max-enter-amount-from-modal'
            },
            frequent_operations_fill_extra_product_selector: {
              bind: 'frequent-operations-extra-properties'
            },
            frequent_operations_product_selector_active: {
              bind: 'frequent-operations-product-selector-is-property-step-active'
            },
            frequent_operations_product_selector_collapsed: {
              bind: 'frequent-operations-product-selector-is-property-step-collapsed'
            },
            frequent_operations_product_selector_scrolled: {
              bind: 'frequent-operations-product-selector-is-property-step-scrolled'
            },
            frequent_operations_product_selector_number: {
              bind: 'frequent-operations-product-selector-property-number'
            },
            frequent_operations_product_selector_fixed: {
              bind: 'frequent-operations-product-selector-is-property-step-fixed'
            },
            frequent_operations_avaliable_products: {
              bind: 'frequent-operations-credit-card-avaliable-accounts-for-payment'
            },
            frequent_operations_tx_selected_account: {
              bind: 'frequent-operations-credit-card-tx-dm-account'
            },
            frequent_operations_tx_selected_amount: {
              bind: 'frequent-operations-credit-card-tx-dm-amount'
            },
            frequent_operations_set_raw_selected_amount: {
              bind: 'frequent-operations-credit-card-tx-dm-raw-data'
            },
            frequent_operations_card_credit_card_payment_reset_steps: {
              bind: 'frequent-operations-reset-credit-card-steps'
            },
            global_alert_manager_open_with_settings: {
              bind: 'frequent-operations-abandon-operation'
            },
            frequent_operationreuse_credit_card_leave_operation: {
              bind: 'frequent-operations-leave-operation'
            },
            frequent_operation_transfer_leave_operation: {
              bind: 'frequent-operations-leave-operation',
              backStep: true
            },
            operations_list_set_panel_info_heading: {
              bind: 'frequent-operations-set-panel-info-heading'
            },
            operations_list_set_panel_info_text: {
              bind: 'frequent-operations-set-panel-info-text'
            },
            operations_list_set_help_modal_button: {
              bind: 'frequent-operations-set-help-modal-button'
            },
            operations_list_set_help_modal_link: {
              bind: 'frequent-operations-set-help-link-button'
            },
            operations_list_open_help_modal: {
              bind: 'frequent-operations-open-help-modal'
            },
            operations_list_close_help_modal: {
              bind: 'frequent-operations-close-help-modal'
            },
            frequent_operation_balance_modal_for_credit_card_products: {
              bind: 'frequent-operations-open-credit-card-product-selector'
            },
            frequent_operation_disable_product_selector: {
              bind: 'frequent-operations-credit-card-disabled-products'
            },
            frequent_operation_analytics_app_on_click_start: {
              bind: 'frequent-operations-credit-card-notification-navigation'
            },
            frequent_operation_analytics_app_page_visit: {
              bind: 'analytics-app-page-visit-cc'
            },
            frequent_operations_transfer_analyitics_app_huella: {
              bind: 'analytics-app-huella'
            }
          }
        }
      }
    },
    {
      zone: 'app__overlay',
      type: 'UI',
      tag: 'bbva-help-modal',
      familyPath: '@bbva-web-components/bbva-help-modal',
      render: 'litElement',
      container: true,
      properties: {
        id: 'ocFrequentOperationsCreditCardPayment',
        fullHeight: true,
        fixedFooter: true,
        headerType: 'modal',
        closeModalElements: [ 'header-right-primary' ],
        iconRightPrimary: 'bbva:close',
        headerText: 'frequent-operations-insufficient-balance',
        cellsConnections: {
          in: {
            operations_list_set_help_modal_button: {
              bind: 'buttonText'
            },
            operations_list_set_help_modal_link: {
              bind: 'linkText'
            },
            operations_list_open_help_modal: {
              bind: 'open'
            },
            operations_list_close_help_modal: {
              bind: 'close'
            }
          },
          out: {
            operations_list_help_modal_button_click: {
              bind: 'help-modal-footer-button-click'
            },
            operations_list_help_modal_link_click: {
              bind: 'help-modal-footer-link-click'
            }
          }
        }
      }
    },
    {
      zone: 'ocFrequentOperationsCreditCardPayment.slot-content',
      type: 'UI',
      tag: 'bbva-panel-info',
      familyPath: '@bbva-web-components/bbva-panel-info',
      render: 'litElement',
      properties: {
        headingLevelTitle: 'h3',
        microillustration: 'info',
        cellsConnections: {
          in: {
            operations_list_set_panel_info_heading: {
              bind: 'heading'
            },
            operations_list_set_panel_info_text: {
              bind: 'text'
            }
          }
        }
      }
    },
    {
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
            },
            frequent_operation_analytics_app_page_visit: {
              bind: 'fireAnalyticsAppPageVisit'
            },
            frequent_operations_analytics_app_started: {
              bind: 'fireAnalyticsAppStartedChangeProduct'
            },
            frequent_operations_transfer_analytics_change_ammount_pressed: {
              bind: 'fireAnalyticsAppStartedChangeAmount'
            },
            frequent_operations_analytics_summary_continue: {
              bind: 'fireAnalyticsAppStartedContinue'
            },
            frequent_operations_transfer_analyitics_app_completed: {
              bind: 'fireAnalyticsAppCompleted'
            },
            frequent_operations_analytics_update_payment_import: {
              bind: 'updateAmount'
            }
          },
          out: {
            frequent_operation_app_onclick_start: {
              bind: 'app-on-click-start',
              analytics: appOnclickstartNotification
            },
            frequent_operation_app_huella: {
              bind: 'analytics-app-huella-launch',
              analytics: modalPageView
            },
            frequent_operation_app_visit: {
              bind: 'analytics-app-page-visit-fo',
              analytics: appPageVisitNotification
            },
            frequent_operation_app_started_change_product: {
              bind: 'analytics-app-started',
              analytics: appStartedNotification
            },
            frequent_operation_app_step_otp: {
              bind: 'analytics-app-step-otp',
              analytics: appStep2
            },
            frequent_operation_app_completed: {
              bind: 'analytics-app-completed',
              analytics: appCompletedNotification
            }
          }
        }
      }
    }
  );
  addCommonErrors(base.components)();
  return base;
};
