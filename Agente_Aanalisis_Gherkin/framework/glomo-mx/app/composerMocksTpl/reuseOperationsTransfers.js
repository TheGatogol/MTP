'use strict';
/* eslint max-statements: [2, 190] */
module.exports = CONFIG => {
  const PAGENAME = 'reuseOperationsTransfers';
  const baseTransfer = require('./transfers')(CONFIG, PAGENAME);
  const ANALYTICS = require('./analytics/_transfers')(CONFIG);
  const ANALYTICS_REUSE = require('./analytics/_reuseOperations')(CONFIG);
  const { useNames, createPrefixFromPageName, getLanguage, getLocalCurrency, connectionsIn, connectionsOut, setProperty, setTemplateProperty } = require('./common/helpers/_utils');
  const OPERATIVEPREFIX = createPrefixFromPageName(PAGENAME);
  const isNativeIOs = CONFIG.nativeIos || false;
  const [ getChannelName ] = useNames(OPERATIVEPREFIX);
  const AVAILABLE_TRANSFER_CURRENCIES = ['MXN', 'USD'];
  const MAX_DIGITS = '20';
  baseTransfer.hash = 'transfer-reuse-operation';
  baseTransfer.currentPage.url = '/transfer-reuse-operation';
  const connectionsInR = connectionsIn(baseTransfer);
  const connectionsOutR = connectionsOut(baseTransfer);
  const setPropertyR = setProperty(baseTransfer);
  const setTemplatePropertyR = setTemplateProperty(baseTransfer);
  const analitycOldComponent = baseTransfer.components.findIndex(comp => comp.tag === 'glomo-analytics-transfer-manager-mx');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGENAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const sphericaSuffix = isSpherica ? '-spherica' : '';
  const amountOldComponent = baseTransfer.components.findIndex(comp => comp.tag === `glomo-step-foreign-currency-operation${sphericaSuffix}`);
  const amountNewComponent = {
    zone: 'app__main',
    tag: 'cells-step-enter-amount',
    tagSpherica: 'cells-step-enter-amount-spherica',
    type: 'UI',
    properties: {
      id: 'transfer-amount',
      className: 'refactor-transfers',
      stepTitle: 'glomo-transfer-import',
      changeLabel: 'glomo-transfer-product-selector-change',
      language: getLanguage(),
      currency: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      max: MAX_DIGITS,
      numeralPositiveOnly: true,
      notInitializeWithAttached: true,
      showCurrenciesInfo: false,
      currencyList: AVAILABLE_TRANSFER_CURRENCIES,
      ignoreNotSameCurrency: true,
      hiddenMinLimit: true,
      showLastValidValue: true,
      hideCellsRadioGroup: true,
      hideHeading: true,
      maxCharacters: 20,
      disableFlagSelector: true,
      hideMinValueMessage: true,
      hideAmountInMinOrMaxErrorMessage: true,
      minValue: 0.01,
      minValueErrorMessage: 'glomo-transfer-enter-amount-min-value-error-message',
      currencySelectDisabled: true,
      majorVersionThree: true,
      hideCurrencySelectedFlag: true,
      iconMessageType: 'info-dark',
      conversionText: '',
      maxSteps: 4,
      lastStep: false,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('_SET_ACTIVE_ICON_FEES_MESSAGE')]: {
            bind: 'setProperties'
          },
          [getChannelName('_SET_ENTER_AMOUNT_PROPERTIES')]: {
            bind: 'setProperties'
          },
          [getChannelName('_SET_COLLAPSE_EXCHANGE_RATES_STEP')]: {
            bind: 'collapsed'
          },
          [getChannelName('_SET_THIS_STEP_THREE')]: {
            bind: 'getThisDetailForTimeOut'
          },
          [getChannelName('_RESET_ENTER_AMOUNT')]: {
            bind: 'setProperties'
          },
          [getChannelName('_SET_AMOUNT_IN_ORIGIN_CURRENCY')]: {
            bind: 'amountInOriginCurrency'
          },
          [getChannelName('_SET_CURRENCY_OPERATIONS_STEP_PROPERTIES')]: {
            bind: 'currentStep'
          },
          [getChannelName('_SEND_AMOUNT')]: {
            bind: 'setAmount'
          },
          [getChannelName('_CONTINUE_GOOGLE_ASSISTANT')]: {
            bind: 'continue'
          },
          reuse_operation_fill_enter_amount: {
            bind: 'value'
          },
          reuse_operation_fill_default_value: {
            bind: 'defaultValue'
          },
          reuse_operation_fill_enter_max_amount: {
            bind: 'maxProduct'
          },
          reuse_operation_enter_amount_active: {
            bind: 'active'
          },
          reuse_operation_enter_amount_collapsed: {
            bind: 'collapsed'
          },
          reuse_operation_enter_amount_number: {
            bind: 'currentStep'
          },
          reuse_operation_enter_amount_scrolled: {
            bind: 'scrolled'
          },
          reuse_operation_transfer_max_steps: {
            bind: 'maxSteps'
          },
          reuse_operation_transfer_last_step: {
            bind: 'lastStep'
          },
          reset_transfer_steps: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('_GO_NEXT_STEP')]: {
            bind: 'step-continue'
          },
          [getChannelName('_SET_SELECTED_AMOUNT')]: {
            bind: 'step-set-value',
            analytics: ANALYTICS.getAdvanceFootprint('concepto')
          },
          [getChannelName('_LIMITED_AMOUNT_FOCUS_OUT')]: {
            bind: 'focus-out'
          },
          [getChannelName('_RECEIVER_SECTION_ON_ICON_CLICK')]: {
            bind: 'receiver-section-on-icon-click'
          },
          [getChannelName('_SET_ALERT_PROPERTIES')]: {
            bind: 'change-step-state-receiver'
          },
          [getChannelName('_SET_THIS_DETAIL_FOR_TIMEOUT')]: {
            bind: 'detail-this-timeout'
          },
          reuse_operation_transfer_update_review_sumary: {
            bind: 'amount-set'
          },
          reuse_operation_transfer_update_review_sumary_last_step_amount: {
            bind: 'amount-set-change-step'
          },
          close_control_veil: {
            bind: 'amount-set'
          },
          reuse_operation_change_open_steps: {
            bind: 'amount-set'
          },
          reuse_operation_transfer_amount_change_pressed: {
            bind: 'change-pressed'
          },
          reuse_operation_transfer_amount_active: {
            bind: 'change-pressed'
          },
          reuse_operation_transfer_analytics_change_ammount_pressed: {
            bind: 'change-pressed'
          },
          reuse_operations_transfers__INPUT_FOCUS_IN: {
            bind: 'amount-input-focus'
          },
          reuse_operations_transfers__INPUT_FOCUS_OUT: {
            bind: 'dispatched-blur'
          },
          reuse_operations_transfers__INPUT_FOCUS_OUT_RESET_STATUS_BAR: {
            bind: 'dispatched-blur'
          },
          reuse_operation_transfer_amount_change: {
            bind: 'send-step-amount-value'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'glomo-transfer-import-spherica',
      amountInputLabel: 'cells-step-amount-input-label-spherica',
      changeLabel: 'glomo-transfer-product-selector-change-spherica',
      sizeAmount: 'XL',
      showTextRightIcon: true
    }
  };
  baseTransfer.components.splice(amountOldComponent, 1, amountNewComponent);
  baseTransfer.components.splice(analitycOldComponent, 1);
  delete baseTransfer.template.properties.cellsConnections.in.reuse_operations_transfers__SHOW_CONFIRM_CHANEL;
  setTemplatePropertyR.cellsConnections.in.reuse_operation_transfer_open_summary = {
    bind: 'open'
  };
  setTemplatePropertyR.cellsConnections.in.reuse_operation_transfer_close_summary = {
    bind: 'close'
  };
  setTemplatePropertyR.cellsConnections.in.reuse_operation_transfer_amount_change_pressed = {
    bind: 'close'
  };
  setTemplatePropertyR.cellsConnections.in.reuse_operation_SHOW_CONFIRM_CHANEL = {
    bind: 'showConfirm'
  };
  const headerMolecule = `cells-molecule-header${sphericaSuffix}`;
  delete connectionsOutR(headerMolecule).reuse_operations_transfers__HEADER_CLOSE;
  connectionsInR(headerMolecule).reuse_operation_set_transfer_title = {
    bind: 'titleName'
  };
  connectionsOutR(headerMolecule).reuse_operation__HEADER_CLOSE = {
    bind: 'click-right-button'
  };
  const opxTransferDm = 'glomo-opx-transfer-mx-dm';
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__CHANGE_AND_RESET;
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__ON_SENDER_PRODUCT_SELECTED;
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__REGISTER_STEP_PRODUCT_SELECTOR;
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__REGISTER_STEP_RECIPIENT_SELECTOR;
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__REGISTER_STEP_AMOUNT;
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__REGISTER_STEP_CONCEPT;
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__HEADER_CLOSE;
  delete connectionsInR(opxTransferDm).__bridge_cancelled_back_navigation;
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete connectionsInR(opxTransferDm).reuse_operations_transfers__SET_SELECTED_PRODUCT_RECEIVER;
  delete connectionsOutR(opxTransferDm).reuse_operations_transfers__SET_DM_EXCHANGE_RATES_FLAG;
  delete connectionsOutR(opxTransferDm).reuse_operations_transfers__SHOW_CONFIRM_CHANEL;
  delete connectionsOutR(opxTransferDm).CLOSE_CONFIRM_TRANSFERS;
  delete connectionsOutR(opxTransferDm).reuse_operations_transfers__SET_RECIPIENT_BEHAVIOUR;
  delete connectionsOutR(opxTransferDm).SHOW_ALIAS_IN_USE_MODAL;
  setPropertyR(opxTransferDm).maxSteps = 4;
  setPropertyR(opxTransferDm).iOSFixedHeader = isNativeIOs;
  connectionsInR(opxTransferDm).reuse_transfer_ON_SENDER_PRODUCT_SELECTED = {
    bind: 'on-change-product-selected'
  };
  connectionsInR(opxTransferDm).reuse_transfer_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'reset'
  };
  connectionsOutR(opxTransferDm).reuse_operation_SET_DM_EXCHANGE_RATES_FLAG = {
    bind: 'set-exchange-rates-flag'
  };
  connectionsOutR(opxTransferDm).reuse_operation_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'show-close-confirm'
  };
  const lifeCycle = 'cells-handle-life-cycle';
  delete connectionsInR(lifeCycle).__bridge_app;
  delete connectionsInR(lifeCycle).__bridge_page_transfers;
  delete connectionsOutR(lifeCycle).reuse_operations_transfers_init_page;
  connectionsInR(lifeCycle)[ '__bridge_page_' + PAGENAME ] = {
    bind: 'init'
  };
  connectionsInR(lifeCycle).__bridge_page_transferReuseOperation = {
    bind: 'init'
  };
  connectionsOutR(lifeCycle).transferReuseOperation = {
    bind: 'init-page'
  };
  connectionsOutR(lifeCycle).reuse_operation_transfer_finished_steps_own = {
    bind: 'reset'
  };
  const transferDM = 'glomo-transfers-mx-dm';
  delete connectionsInR(transferDM).EXIT_TRANSFERS_PAGE_ACCEPT;
  delete connectionsInR(transferDM).reuse_operations_transfers__SET_DM_EXCHANGE_RATES_FLAG;
  delete connectionsOutR(transferDM).reuse_operations_transfers__SET_SELECTED_PRODUCT_RECEIVER;
  delete connectionsOutR(transferDM).reuse_operations_transfers__EXIT_PAGE_TRANSFERS;
  delete connectionsOutR(transferDM).reuse_operations_transfers__HUELLA_TRANSFERS_OTP;
  delete connectionsInR(transferDM).reuse_operations_transfers__ON_SENDER_PRODUCT_SELECTED;
  delete connectionsInR(transferDM).reuse_operations_transfers_SEND_TICKET_TO_TRANSFER;
  connectionsInR(transferDM).reuse_operation_SEND_TICKET_TO_TRANSFER = {
    bind: 'transfersSuccesPage'
  };
  connectionsInR(transferDM).reuse_transfer_ON_SENDER_PRODUCT_SELECTED = {
    bind: 'on-change-product-selected'
  };
  connectionsInR(transferDM).global_financial_overview_details = {
    bind: 'globalAccountsNativeProp'
  };
  connectionsInR(transferDM).transferReuseOperation = {
    bind: 'initPage'
  };
  connectionsInR(transferDM).reuse_operation_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'exit'
  };
  connectionsOutR(transferDM).reuse_operation_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'exit-page-transfers',
    backStep: true
  };
  connectionsInR(transferDM).reuse_operation_reques_receiver_data = {
    bind: 'dispatchReceivers'
  };
  connectionsInR(transferDM).reuse_operation_transfer_final_amount_selected = {
    bind: 'finalAmountSelected'
  };
  connectionsInR(transferDM).reuse_operation_transfer_review_sumary = {
    bind: 'reviewAndAuthorize'
  };
  connectionsInR(transferDM).reuse_operation_transfer_dm_service_type = {
    bind: 'transferType'
  };
  connectionsInR(transferDM).reuse_operation_transfer_dm_service_sender = {
    bind: 'selectedSender'
  };
  connectionsInR(transferDM).reuse_operation_transfer_dm_service_destination = {
    bind: 'contactDetail'
  };
  connectionsInR(transferDM).reuse_operation_transfer_dm_service_own_destination = {
    bind: 'selectedReceiver'
  };
  connectionsInR(transferDM).reuse_operation_transfer_dm_service_concept = {
    bind: 'conceptValidated'
  };
  connectionsInR(transferDM).reuse_operation_SET_DM_EXCHANGE_RATES_FLAG = {
    bind: 'exchangeRatesFlag'
  };
  connectionsOutR(transferDM).reuse_operations_receiver_data = {
    bind: 'set-response-receivers'
  };
  connectionsOutR(transferDM).reuse_operation_transfer_set_contacts_list = {
    bind: 'set-saved-contacts'
  };
  connectionsInR(transferDM).reset_transfer_steps = {
    bind: 'reset'
  };
  connectionsOutR(transferDM).reuse_operation_transfer_analyitics_HUELLA_TRANSFERS_OTP = {
    bind: 'transfers-otp'
  };
  delete connectionsOutR(transferDM).reuse_operations_transfers__SET_TRANSFERS_SUCCESS_DATA;
  connectionsOutR(transferDM).reuse_transfers_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'set-transfers-success-data'
  };
  connectionsOutR(transferDM).reuse_transfer_reset_steps = {
    bind: 'set-transfers-success-data'
  };
  const stepProductSelector = `cells-step-product-selector${sphericaSuffix}`;
  delete connectionsOutR(stepProductSelector).reuse_operations_transfers__ON_SENDER_PRODUCT_SELECTED;
  delete connectionsOutR(stepProductSelector).reuse_operations_transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete connectionsOutR(stepProductSelector).reuse_operations_transfers__REGISTER_STEP_PRODUCT_SELECTOR;
  setPropertyR(stepProductSelector).maxSteps = 4;
  connectionsOutR(stepProductSelector).reuse_transfer_ON_SENDER_PRODUCT_SELECTED = {
    bind: 'on-change-product-selected'
  };
  connectionsInR(stepProductSelector).reuse_operation_fill_product_selector = {
    bind: 'selected'
  };
  connectionsInR(stepProductSelector).reuse_operation_fill_extra_product_selector = {
    bind: 'customSelected'
  };
  connectionsInR(stepProductSelector).reuse_operation_product_selector_active = {
    bind: 'active'
  };
  connectionsInR(stepProductSelector).reuse_operation_product_selector_collapsed = {
    bind: 'collapsed'
  };
  connectionsInR(stepProductSelector).reuse_operation_product_selector_scrolled = {
    bind: 'scrolled'
  };
  connectionsInR(stepProductSelector).reuse_operation_product_selector_number = {
    bind: 'currentStep'
  };
  connectionsInR(stepProductSelector).reuse_operation_product_selector_scrolled = {
    bind: 'scrolled'
  };
  connectionsInR(stepProductSelector).reuse_operation_transfer_max_steps = {
    bind: 'maxSteps'
  };
  connectionsInR(stepProductSelector).reuse_operation_product_selector_fixed = {
    bind: 'fixed'
  };
  connectionsInR(stepProductSelector).reuse_operation_fill_all_products = {
    bind: 'products'
  };
  connectionsInR(stepProductSelector).reset_transfer_steps = {
    bind: 'reset'
  };
  connectionsInR(stepProductSelector).reset_transfer_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'resetCollapsedStep'
  };
  connectionsOutR(stepProductSelector).reuse_operation_transfer_analytics_change_product_pressed = {
    bind: 'change-pressed'
  };
  connectionsOutR(stepProductSelector).reuse_operation_transfer_collapesed_concept = {
    bind: 'change-step-state'
  };
  connectionsOutR(stepProductSelector).reuse_operation_change_open_steps = {
    bind: 'select-product'
  };
  connectionsOutR(stepProductSelector).reuse_operation_changed_selected_product = {
    bind: 'select-product'
  };
  connectionsOutR(stepProductSelector).reuse_operation_change_product = {
    bind: 'change-pressed'
  };
  connectionsOutR(stepProductSelector).reuse_operation_changed_product = {
    bind: 'on-change-product-selected'
  };
  connectionsOutR(stepProductSelector).reuse_operations_product_not_change = {
    bind: 'dont-change-and-continue'
  };
  const stepRecipientSelector = `cells-step-recipient-selector${sphericaSuffix}`;
  delete connectionsInR(stepRecipientSelector).reuse_operations_transfers__RESET_RECIPIENT_SELECTOR;
  delete connectionsOutR(stepRecipientSelector).reuse_operations_transfers__REGISTER_STEP_RECIPIENT_SELECTOR;
  delete connectionsInR(stepRecipientSelector).reuse_operations_transfers__ON_ACCEPT_REVIEW_SECTION;
  delete connectionsInR(stepRecipientSelector).reuse_operations_transfers__SET_SELECTED_PRODUCT_RECEIVER;
  connectionsInR(stepRecipientSelector).reuse_operation_fill_recipient_selector = {
    bind: 'recipientSelected'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_disable = {
    bind: 'disableChange'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_name_right = {
    bind: 'nameRightToImage'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_hide_avatar = {
    bind: 'hideAvatarWhenFilled'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_last_step = {
    bind: 'lastStep'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_active = {
    bind: 'active'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_collapsed = {
    bind: 'collapsed'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_number = {
    bind: 'currentStep'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_scrolled = {
    bind: 'scrolled'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_decorated = {
    bind: 'decorated'
  };
  connectionsInR(stepRecipientSelector).reuse_operation_recipient_selector_saved = {
    bind: 'saved'
  };
  connectionsInR(stepRecipientSelector).reset_transfer_steps = {
    bind: 'reset'
  };
  const stepConcept = `cells-step-concept${sphericaSuffix}`;
  delete connectionsOutR(stepConcept).reuse_operations_transfers__REGISTER_STEP_CONCEPT;
  setPropertyR(stepConcept).maxSteps = 4;
  connectionsInR(stepConcept).reuse_operation_fill_interbank_transfer_concept = {
    bind: 'inputConcept'
  };
  connectionsInR(stepConcept).reuse_operation_fill_transfer_concept = {
    bind: 'conceptLabel'
  };
  connectionsInR(stepConcept).reuse_operation_fill_transfer_input_concept = {
    bind: 'inputConcept'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_concept_hide_input = {
    bind: 'hideConceptInput'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_concept_active = {
    bind: 'active'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_concept_collapsed = {
    bind: 'collapsed'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_concept_scrolled = {
    bind: 'scrolled'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_concept_show_reference = {
    bind: 'showReference'
  };
  connectionsInR(stepConcept).reuse_operation_show_concept_input = {
    bind: 'hideConceptInput'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_concept_show_concept_label = {
    bind: 'showConceptLabel'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_concept_number = {
    bind: 'currentStep'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_max_steps = {
    bind: 'maxSteps'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_dm_last_step = {
    bind: 'lastStep'
  };
  connectionsInR(stepConcept).reuse_operation_transfer_concept_required = {
    bind: 'isRequired'
  };
  connectionsInR(stepConcept).reset_transfer_steps = {
    bind: 'reset'
  };
  connectionsInR(stepConcept).reset_transfer_steps_collapsed = {
    bind: 'openConceptStep'
  };
  connectionsOutR(stepConcept).reuse_operation_transfer_concept_change_pressed = {
    bind: 'change-step-state'
  };
  connectionsOutR(stepConcept).reuse_operation_transfer_concept_change_pressed_update = {
    bind: 'continue-pressed'
  };
  connectionsOutR(stepConcept).reuse_operation_transfer_show_interbank_summary = {
    bind: 'continue-pressed'
  };
  connectionsOutR(stepConcept).reuse_operation_transfer_analytics_change_concept_pressed = {
    bind: 'change-step-state'
  };
  connectionsOutR(stepConcept).reuse_operation_transfers_disabled_concept = {
    bind: 'disable-btn-changed'
  };

  const operationSummary = `cells-operation-summary${sphericaSuffix}`;
  setPropertyR(operationSummary).maxSteps = 4;
  delete connectionsOutR(operationSummary).reuse_operations_transfers__TICKET_SAVE;
  connectionsInR(operationSummary).reuse_operation_hidde_summary_property = {
    bind: 'hidden'
  };
  connectionsOutR(operationSummary).reuse_operation_summary_click = {
    bind: 'summary-closed'
  };
  connectionsOutR(operationSummary).reuse_operation_analytics_summary_continue = {
    bind: 'summary-closed'
  };
  const navigationHandler = 'glomo-navigation-handler';
  delete connectionsInR(navigationHandler).reuse_operations_transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete connectionsOutR(navigationHandler).NAVIGATION_REQUEST_TRANSFERS_SUCCESS;
  connectionsInR(navigationHandler).reuse_transfers_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'navigateToPage'
  };
  connectionsOutR(navigationHandler).NAVIGATION_REQUEST_REUSE_TRANSFERS_SUCCESS = {
    bind: 'navigation-to-transfersSuccess',
    link: {
      page: 'transfersSuccess',
      cleanUntil: 'reuseOperationsTransfers'
    }
  };
  const equityTransfer = 'glomo-equity-transfer-manager-mx';
  delete connectionsInR(equityTransfer).reuse_operations_transfers__ON_SENDER_PRODUCT_SELECTED;
  connectionsInR(equityTransfer).reuse_transfer_ON_SENDER_PRODUCT_SELECTED = {
    bind: 'on-change-product-selected'
  };
  delete connectionsInR(equityTransfer).reuse_operations_transfers__SET_SELECTED_PRODUCT_RECEIVER;
  delete connectionsOutR(equityTransfer).reuse_operations_transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete connectionsInR(equityTransfer).reuse_operations_transfers__TICKET_SAVE;
  delete connectionsOutR(equityTransfer).reuse_operations_transfers_SEND_TICKET_TO_TRANSFER;
  connectionsOutR(equityTransfer).reuse_operation_SEND_TICKET_TO_TRANSFER = {
    bind: 'send-transfer-ticket-save'
  };
  connectionsOutR(equityTransfer).reuse_transfers_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'set-equity-transfers-success-data'
  };
  connectionsInR(equityTransfer).reuse_operation_summary_click = {
    bind: 'validateEquityTransfer'
  };
  const modalSelector = `cells-modal-selector${sphericaSuffix}`;
  connectionsInR(modalSelector).reuse_operation_close_modals = {
    bind: 'close'
  };
  const modalNewRecipietn = `cells-modal-new-recipient-selector${sphericaSuffix}`;
  connectionsInR(modalNewRecipietn).reuse_operation_close_modals = {
    bind: 'close'
  };
  const modalProductSelector = `cells-product-selector-modal${sphericaSuffix}`;
  connectionsInR(modalProductSelector).reuse_operation_close_modals = {
    bind: 'close'
  };
  const frequenOperationDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-transaction-detail-account-reuse-mx',
    familyPath: '@glomo-web-components/bbva-controller-transaction-detail-account-reuse-mx',
    render: 'litElement',
    properties: {
      evtPrefix: 'reuse-operation',
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
          reuse_operations_transfers__SET_PRODUCTS_LIST_TOTAL: {
            bind: 'loadOwnTransferData'
          },
          reuse_operation_transfer_update_review_sumary: {
            bind: 'updateAmountToTransfer'
          },
          reuse_operation_transfer_update_review_sumary_last_step_amount: {
            bind: 'updateAmountToTransfer'
          },
          reuse_operation_transfer_concept_change_pressed: {
            bind: 'updateConceptTransferCloseSummary'
          },
          reuse_operation_transfer_concept_change_pressed_update: {
            bind: 'updateDefaultConcept'
          },
          reuse_operation_transfer_collapesed_concept: {
            bind: 'collapsedConceptSetp'
          },
          reuse_operations_receiver_data: {
            bind: 'getReceiverData'
          },
          navigate_to_transfer_operation: {
            bind: 'reuseTransaction'
          },
          reuse_operation_transfer_show_interbank_summary: {
            bind: 'showSummary'
          },
          NAVIGATION_REQUEST_REUSE_TRANSFERS_SUCCESS: {
            bind: 'reset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          reuse_operation__HEADER_CLOSE: {
            bind: 'abandonReuseOperationModal'
          },
          reuse_transfer_leave_opeeration: {
            bind: 'reset'
          },
          reuse_operation_change_open_steps: {
            bind: 'changeActiveStepsValue'
          },
          reuse_operation_transfer_finished_steps_own: {
            bind: 'fillStepsFrequentTransfer'
          },
          reuse_operation_changed_selected_product: {
            bind: 'updadateMaxAmount'
          },
          reuse_operation_change_product: {
            bind: 'showProductListSelector'
          },
          reuse_operations_product_not_change: {
            bind: 'changeSelectedProductstateSummary'
          },
          reuse_operation_changed_product: {
            bind: 'changeSelectedProductstateSummary'
          },
          reuse_operation_transfer_amount_active: {
            bind: 'changeOneActiveStep'
          },
          reuse_operation_transfers_disabled_concept: {
            bind: 'isDisabledConceptButton'
          },
          reuse_operation_transfer_amount_change: {
            bind: 'conceptActiveWhenAmountChange'
          }
        },
        out: {
          reuse_operation_set_transfer_title: {
            bind: 'reuse-operation-set-transfer-title'
          },
          reuse_operation_close_modals: {
            bind: 'reuse-operation-close-transfer-modals'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          reuse_operation_fill_product_selector: {
            bind: 'reuse-operation-fill-product-selector'
          },
          reuse_operation_fill_extra_product_selector: {
            bind: 'reuse-operation-extra-properties'
          },
          reuse_operation_product_selector_active: {
            bind: 'reuse-operation-product-selector-is-fo-step-active'
          },
          reuse_operation_product_selector_collapsed: {
            bind: 'reuse-operation-product-selector-is-fo-step-collapsed'
          },
          reuse_operation_product_selector_scrolled: {
            bind: 'reuse-operation-product-selector-is-fo-step-scrolled'
          },
          reuse_operation_product_selector_number: {
            bind: 'reuse-operation-product-selector-fo-number'
          },
          reuse_operation_product_selector_fixed: {
            bind: 'reuse-operation-product-selector-is-fo-step-fixed'
          },
          reuse_operation_fill_recipient_selector: {
            bind: 'reuse-operation-fill-recipient-selector'
          },
          reuse_operation_recipient_selector_disable: {
            bind: 'reuse-operation-recipient-selector-disable-change'
          },
          reuse_operation_recipient_selector_name_right: {
            bind: 'reuse-operation-recipient-selector-name-right'
          },
          reuse_operation_recipient_selector_hide_avatar: {
            bind: 'reuse-operation-recipient-selector-hide-avatar'
          },
          reuse_operation_recipient_selector_last_step: {
            bind: 'reuse-operation-recipient-selector-last-step'
          },
          reuse_operation_recipient_selector_active: {
            bind: 'reuse-operation-recipient-selector-is-fo-step-active'
          },
          reuse_operation_recipient_selector_collapsed: {
            bind: 'reuse-operation-recipient-selector-is-fo-step-collapsed'
          },
          reuse_operation_recipient_selector_number: {
            bind: 'reuse-operation-recipient-selector-fo-number'
          },
          reuse_operation_recipient_selector_scrolled: {
            bind: 'reuse-operation-recipient-selector-is-fo-step-scrolled'
          },
          reuse_operation_recipient_selector_decorated: {
            bind: 'reuse-operation-recipient-selector-decorated'
          },
          reuse_operation_recipient_selector_saved: {
            bind: 'reuse-operation-recipient-selector-saved'
          },
          reuse_operation_fill_enter_amount: {
            bind: 'reuse-operation-fill-enter-amount'
          },
          reuse_operation_fill_default_value: {
            bind: 'reuse-operation-fill-default-value'
          },
          reuse_operation_fill_enter_max_amount: {
            bind: 'reuse-operation-fill-enter-amount-max-product'
          },
          reuse_operation_enter_amount_active: {
            bind: 'reuse-operation-enter-amount-is-fo-step-active'
          },
          reuse_operation_enter_amount_collapsed: {
            bind: 'reuse-operation-enter-amount-is-fo-step-collapsed'
          },
          reuse_operation_enter_amount_number: {
            bind: 'reuse-operation-enter-amount-fo-number'
          },
          reuse_operation_enter_amount_scrolled: {
            bind: 'reuse-operation-enter-amount-is-fo-step-scrolled'
          },
          reuse_operation_transfer_last_step: {
            bind: 'reuse-operation-enter-amount-last-step'
          },
          reuse_operation_fill_transfer_concept: {
            bind: 'reuse-operation-fill-transfer-concept'
          },
          reuse_operation_fill_interbank_transfer_concept: {
            bind: 'reuse-operation-fill-interbank-transfer-concept'
          },
          reuse_operation_fill_transfer_input_concept: {
            bind: 'reuse-operation-fill-transfer-input-concept'
          },
          reuse_operation_transfer_concept_hide_input: {
            bind: 'reuse-operation-concept-is-fo-step-hide-concept-input'
          },
          reuse_operation_transfer_concept_active: {
            bind: 'reuse-operation-concept-is-fo-step-active'
          },
          reuse_operation_transfer_concept_collapsed: {
            bind: 'reuse-operation-concept-is-fo-step-collapsed'
          },
          reuse_operation_transfer_concept_scrolled: {
            bind: 'reuse-operation-concept-is-fo-step-scrolled'
          },
          reuse_operation_transfer_concept_show_reference: {
            bind: 'reuse-operation-concept-is-fo-step-show-reference'
          },
          reuse_operation_transfer_concept_show_concept_label: {
            bind: 'reuse-operation-concept-is-fo-step-show-concept-label'
          },
          reuse_operation_transfer_concept_number: {
            bind: 'reuse-operation-concept-fo-number'
          },
          reuse_operation_transfer_concept_required: {
            bind: 'reuse-operation-concept-required'
          },
          reuse_operation_transfer_max_steps: {
            bind: 'reuse-operation-max-steps'
          },
          reuse_operation_SHOW_CONFIRM_CHANEL: {
            bind: 'reuse-operation-state-summary'
          },
          reuse_operation_transfer_close_summary: {
            bind: 'reuse-operation-fo-close-summary'
          },
          reuse_operation_show_concept_input: {
            bind: 'reuse-operation-show-transfer-concept'
          },
          reuse_operation_transfer_final_amount_selected: {
            bind: 'reuse-operation-final-amount-selected'
          },
          reuse_operation_transfer_review_sumary: {
            bind: 'reuse-operation-call-review-summary'
          },
          reuse_operation_transfer_dm_service_type: {
            bind: 'reuse-operation-tx-dm-type'
          },
          reuse_operation_transfer_dm_service_sender: {
            bind: 'reuse-operation-tx-dm-sender'
          },
          reuse_operation_transfer_dm_service_destination: {
            bind: 'reuse-operation-tx-dm-destination'
          },
          reuse_operation_transfer_dm_service_own_destination: {
            bind: 'reuse-operation-tx-dm-destination-own'
          },
          reuse_operation_transfer_dm_service_concept: {
            bind: 'reuse-operation-tx-dm-concept'
          },
          reuse_operation_transfer_dm_last_step: {
            bind: 'reuse-operation-fill-transfer-last-active-step'
          },
          reuse_operation_SET_DM_EXCHANGE_RATES_FLAG: {
            bind: 'reuse-operation-set-exchange-rates-flag'
          },
          reuse_operation_reques_receiver_data: {
            bind: 'reuse-operation-recover-receiver-data'
          },
          reuse_operation_transfer_set_receiver_data: {
            bind: 'reuse-operation-set-receipt-preselected'
          },
          reuse_operation_hidde_summary_property: {
            bind: 'reuse-operation-confirm-hidden'
          },
          reuse_operation_interbanck_concept_analytics: {
            bind: 'reuse-operation-interbank-confirm-hidden'
          },
          reuse_operation_interbanck_show_summary: {
            bind: 'reuse-operation-interbank-confirm-show'
          },
          reuse_operation_fill_all_products: {
            bind: 'reuse-operation-overwrite-products'
          },
          reset_transfer_steps: {
            bind: 'reuse-operation-reset-transfer-steps'
          },
          reset_transfer_steps_collapsed: {
            bind: 'reuse-operation-reset-transfer-steps-collapset'
          },
          reuse_transfer_leave_opeeration: {
            bind: 'reuse-operation-leave-operation',
            backStep: true
          },
          global_alert_manager_open_with_settings: {
            bind: 'reuse-operation-abandon-operation'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            reuse_operations_transfers_alert_manager_open_with_settings_spherica: {
              bind: 'reuse-operation-abandon-operation'
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
  const reuseAnalyticsOperationDataManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytics-controller-transaction-detail-account-reuse-mx',
    familyPath: '@glomo-web-components/bbva-controller-transaction-detail-account-reuse-mx',
    render: 'litElement',
    properties: {
      evtPrefix: 'reuse-operation',
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          navigate_to_transfer_operation: {
            bind: 'filterAppOnClickStart'
          },
          reuse_operation_fill_product_selector: {
            bind: 'fireAnalyticsAppPageVisit'
          },
          reuse_operation_transfer_analytics_change_product_pressed: {
            bind: 'fireAnalyticsAppStartedChange'
          },
          reuse_operation_transfer_analytics_change_ammount_pressed: {
            bind: 'fireAnalyticsAppStartedChange'
          },
          reuse_operation_transfer_analytics_change_concept_pressed: {
            bind: 'fireAnalyticsAppStartedChange'
          },
          reuse_operation_analytics_summary_continue: {
            bind: 'fireAnalyticsAppStartedContinue'
          },
          reuse_operation_transfer_analyitics_HUELLA_TRANSFERS_OTP: {
            bind: 'fireAnalyticsAppStep'
          },
          reuse_transfers_SET_TRANSFERS_SUCCESS_DATA: {
            bind: 'fireAnalyticsAppCompleted'
          },
          reuse_operation_interbanck_concept_analytics: {
            bind: 'fireAnalyticsAppHuella'
          }
        },
        out: {
          reuse_operation_app_onclick_start: {
            bind: 'app-on-click-start',
            analytics: ANALYTICS_REUSE.APP_ONCLICK_START
          },
          reuse_operation_app_visit: {
            bind: 'analytics-app-page-visit',
            analytics: ANALYTICS_REUSE.APP_PAGE_VISIT
          },
          reuse_operation_app_started: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS_REUSE.APP_STARTED
          },
          reuse_operation_app_otp: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS_REUSE.APP_STEP_2
          },
          reuse_operation_app_complete: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS_REUSE.APP_COMPLETED
          },
          reuse_operation_app_huella: {
            bind: 'analytics-app-huella',
            analytics: ANALYTICS_REUSE._getAdvancedFootprint('transferencias', 'concepto')
          }
        }
      }
    }
  };
  baseTransfer.components.push(frequenOperationDM, reuseAnalyticsOperationDataManager);
  return sphericaPageUtils.spherize(baseTransfer);
};
