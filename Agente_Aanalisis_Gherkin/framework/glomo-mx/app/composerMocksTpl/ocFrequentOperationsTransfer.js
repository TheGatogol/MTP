/* eslint-disable max-statements */
'use strict';
const opxTranfersMxDm = (_connectionsIn, _connectionsOut) => {
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__CHANGE_AND_RESET;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__ON_SENDER_PRODUCT_SELECTED;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__REGISTER_STEP_PRODUCT_SELECTOR;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__REGISTER_STEP_RECIPIENT_SELECTOR;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__REGISTER_STEP_AMOUNT;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__REGISTER_STEP_CONCEPT;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__HEADER_CLOSE;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').__bridge_cancelled_back_navigation;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__SET_OPX_RESPONSE_RECEIVERS;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__SET_SELECTED_PRODUCT_RECEIVER;
  delete _connectionsOut('glomo-opx-transfer-mx-dm').SHOW_ALIAS_IN_USE_MODAL;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__GO_NEXT_STEP;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').transfers__GO_NEXT_AND_CONTINUE_STEP;
  delete _connectionsOut('glomo-opx-transfer-mx-dm').transfers__SET_DM_EXCHANGE_RATES_FLAG;
  delete _connectionsOut('glomo-opx-transfer-mx-dm').transfers__SHOW_CONFIRM_CHANEL;
  delete _connectionsOut('glomo-opx-transfer-mx-dm').CLOSE_CONFIRM_TRANSFERS;
  delete _connectionsOut('glomo-opx-transfer-mx-dm').ANALYTICS_APP_STEP_THREE;
  delete _connectionsOut('glomo-opx-transfer-mx-dm').transfers__HUELLA_NEW_ACCOUNT_CONFIRMED;
  delete _connectionsIn('glomo-opx-transfer-mx-dm').EXIT_TRANSFERS_PAGE_ACCEPT;
  _connectionsIn('glomo-opx-transfer-mx-dm').frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'reset'
  };
  _connectionsIn('glomo-opx-transfer-mx-dm').frequent_operations_transfers_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'reset'
  };
  _connectionsIn('glomo-opx-transfer-mx-dm').frequent_operations_SET_OPX_RESPONSE_RECEIVERS_FREQUENT = {
    bind: 'validateReceiverNumberIsInSavedContacts'
  };
  _connectionsOut('glomo-opx-transfer-mx-dm').frequent_operations_SET_DM_EXCHANGE_RATES_FLAG = {
    bind: 'set-exchange-rates-flag'
  };
  _connectionsOut('glomo-opx-transfer-mx-dm').frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'show-close-confirm'
  };
};
const cellsHandleLifeCycle = (_connectionsIn, _connectionsOut, pageName) => {
  delete _connectionsOut('cells-handle-life-cycle').__bridge_page_transfers;
  _connectionsIn('cells-handle-life-cycle')[ '__bridge_page_' + pageName ] = {
    bind: 'init'
  };
  _connectionsIn('cells-handle-life-cycle').__bridge_page_transferReuseOperation = {
    bind: 'init'
  };
  _connectionsOut('cells-handle-life-cycle').transferReuseOperation = {
    bind: 'init-page'
  };
  _connectionsOut('cells-handle-life-cycle').frequent_operations_transfer_finished_steps_own = {
    bind: 'reset'
  };
};
const opxPeerToPeer = (_connectionsIn, _connectionsOut) => {
  delete _connectionsIn('glomo-opx-peer-to-peer-mx-dm').transfers__SET_OPX_RESPONSE_RECEIVERS;
  _connectionsIn('glomo-opx-peer-to-peer-mx-dm').frequent_operations_SET_OPX_RESPONSE_RECEIVERS_FREQUENT = {
    bind: 'validateResponse'
  };
};
const contextualSale = (_connectionsIn, _connectionsOut) => {
  delete _connectionsIn('glomo-contextual-sale-manager').transfers__SET_OPX_RESPONSE_RECEIVERS;
  _connectionsIn('glomo-contextual-sale-manager').frequent_operations_SET_OPX_RESPONSE_RECEIVERS_FREQUENT = {
    bind: 'receiverProductInformation'
  };
};
const glomoTransfersMxDm = (_connectionsIn, _connectionsOut, _setProperty) => {
  delete _connectionsIn('glomo-transfers-mx-dm').EXIT_TRANSFERS_PAGE_ACCEPT;
  delete _connectionsIn('glomo-transfers-mx-dm').transfers__ON_SENDER_PRODUCT_SELECTED;
  delete _connectionsIn('glomo-transfers-mx-dm').transfers__SET_DM_EXCHANGE_RATES_FLAG;
  delete _connectionsOut('glomo-transfers-mx-dm').transfers__HUELLA_TRANSFERS_OTP;
  delete _connectionsOut('glomo-transfers-mx-dm').transfers_EXIT_TRANSFERS;
  delete _connectionsIn('glomo-transfers-mx-dm').transfers_SEND_TICKET_TO_TRANSFER;
  delete _connectionsOut('glomo-transfers-mx-dm').transfers__SET_SELECTED_PRODUCT_RECEIVER;
  delete _connectionsOut('glomo-transfers-mx-dm').transfers__SET_OPX_RESPONSE_RECEIVERS;
  delete _connectionsIn('glomo-transfers-mx-dm').EXIT_TRANSFERS_PAGE_ACCEPT;
  _connectionsOut('glomo-transfers-mx-dm').frequent_operations_SET_OPX_RESPONSE_RECEIVERS_FREQUENT = {
    bind: 'set-response-receivers'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_SEND_TICKET_TO_TRANSFER = {
    bind: 'transfersSuccesPage'
  };
  _connectionsIn('glomo-transfers-mx-dm').global_financial_overview_details = {
    bind: 'globalAccountsNativeProp'
  };
  _setProperty('glomo-opx-transfer-mx-dm').maxSteps = 4;
  _connectionsIn('glomo-transfers-mx-dm').transferReuseOperation = {
    bind: 'initPage'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'exit'
  };
  _connectionsOut('glomo-transfers-mx-dm').frequent_operations__EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'exit-page-transfers'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_reques_receiver_data = {
    bind: 'dispatchReceivers'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_transfer_final_amount_selected = {
    bind: 'finalAmountSelected'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_transfer_review_sumary = {
    bind: 'reviewAndAuthorize'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_transfer_dm_service_type = {
    bind: 'transferType'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_transfer_dm_service_sender = {
    bind: 'selectedSender'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_transfer_dm_service_destination = {
    bind: 'contactDetail'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_transfer_dm_service_own_destination = {
    bind: 'selectedReceiver'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_transfer_dm_service_concept = {
    bind: 'conceptValidated'
  };
  _connectionsIn('glomo-transfers-mx-dm').frequent_operations_SET_DM_EXCHANGE_RATES_FLAG = {
    bind: 'exchangeRatesFlag'
  };
  _connectionsOut('glomo-transfers-mx-dm').frequen_operations_set_list_of_banks = {
    bind: 'set-list-of-banks'
  };
  _connectionsOut('glomo-transfers-mx-dm').frequent_operationss_receiver_data = {
    bind: 'set-response-receivers'
  };
  _connectionsOut('glomo-transfers-mx-dm').frequent_operations_transfer_set_contacts_list = {
    bind: 'set-saved-contacts'
  };
  _connectionsIn('glomo-transfers-mx-dm').reset_transfer_steps = {
    bind: 'reset'
  };
  _connectionsOut('glomo-transfers-mx-dm').frequent_operations_transfer_analyitics_show_otp_screen = {
    bind: 'transfers-otp'
  };
  delete _connectionsOut('glomo-transfers-mx-dm').transfers__SET_TRANSFERS_SUCCESS_DATA;
  _connectionsOut('glomo-transfers-mx-dm').frequent_operations_transfers_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'set-transfers-success-data'
  };
  _setProperty('glomo-transfers-mx-dm').getBanksOnInit = true;
};
const cellsStepProductSelector = (_productSelector, _connectionsIn, _connectionsOut, _setProperty) => {
  delete _connectionsOut(_productSelector).transfers__REGISTER_STEP_PRODUCT_SELECTOR;
  delete _connectionsOut(_productSelector).transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete _connectionsOut(_productSelector).transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete _connectionsIn(_productSelector).EXIT_TRANSFERS_PAGE_ACCEPT;
  _connectionsIn(_productSelector).frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'resetCollapsedStep'
  };
  _setProperty(_productSelector).maxSteps = 4;
  _connectionsOut(_productSelector).frequent_operations_active_step_sumary = {
    bind: 'select-product'
  };
  _connectionsIn(_productSelector).frequent_operations_overwrite_new_product_list = {
    bind: 'products'
  };
  _connectionsIn(_productSelector).frequent_operations_fill_product_selector = {
    bind: 'selected'
  };
  _connectionsIn(_productSelector).frequent_operations_fill_extra_product_selector = {
    bind: 'customSelected'
  };
  _connectionsIn(_productSelector).frequent_operations_product_selector_active = {
    bind: 'active'
  };
  _connectionsIn(_productSelector).frequent_operations_product_selector_collapsed = {
    bind: 'collapsed'
  };
  _connectionsIn(_productSelector).frequent_operations_product_selector_scrolled = {
    bind: 'scrolled'
  };
  _connectionsIn(_productSelector).frequent_operations_product_selector_number = {
    bind: 'currentStep'
  };
  _connectionsIn(_productSelector).frequent_operations_product_selector_scrolled = {
    bind: 'scrolled'
  };
  _connectionsIn(_productSelector).frequent_operations_transfer_max_steps = {
    bind: 'maxSteps'
  };
  _connectionsIn(_productSelector).frequent_operations_product_selector_fixed = {
    bind: 'fixed'
  };
  _connectionsIn(_productSelector).frequent_operations_fill_all_products = {
    bind: 'products'
  };
  _connectionsIn(_productSelector).reset_transfer_steps = {
    bind: 'reset'
  };
  _connectionsIn(_productSelector).frequent_operations_transfers_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'resetCollapsedStep'
  };
  _connectionsOut(_productSelector).frequent_operations_transfer_analytics_change_product_pressed = {
    bind: 'change-pressed'
  };
  _connectionsOut(_productSelector).frequent_operations_product_selector_change_pressed = {
    bind: 'change-pressed'
  };
  _connectionsOut(_productSelector).frequent_operations_transfer_collapesed_concept = {
    bind: 'change-step-state'
  };
  _connectionsOut(_productSelector).frequent_operations_product_not_change = {
    bind: 'dont-change-and-continue'
  };
  _connectionsOut(_productSelector).frequent_operations_analytics_app_started = {
    bind: 'change-step-state'
  };
  _connectionsOut(_productSelector).frequent_operations_changed_selected_product = {
    bind: 'select-product'
  };
};
const cellsStepRecipientSelector = (_recipientSelector, _connectionsIn, _connectionsOut) => {
  delete _connectionsIn(_recipientSelector).transfers__RESET_RECIPIENT_SELECTOR;
  delete _connectionsOut(_recipientSelector).transfers__REGISTER_STEP_RECIPIENT_SELECTOR;
  delete _connectionsIn(_recipientSelector).transfers__SET_SELECTED_PRODUCT_RECEIVER;
  delete _connectionsOut(_recipientSelector).transfers__VIEW_MY_DESTINATION_PRODUCTS;
  delete _connectionsOut(_recipientSelector).transfers__VALIDATE_OPEN_NEW_RECIPIENT_MODAL;
  _connectionsIn(_recipientSelector).frequent_operations_fill_recipient_selector = {
    bind: 'recipientSelected'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_disable = {
    bind: 'disableChange'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_name_right = {
    bind: 'nameRightToImage'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_hide_avatar = {
    bind: 'hideAvatarWhenFilled'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_last_step = {
    bind: 'lastStep'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_active = {
    bind: 'active'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_collapsed = {
    bind: 'collapsed'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_number = {
    bind: 'currentStep'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_scrolled = {
    bind: 'scrolled'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_decorated = {
    bind: 'decorated'
  };
  _connectionsIn(_recipientSelector).frequent_operations_recipient_selector_saved = {
    bind: 'saved'
  };
  _connectionsIn(_recipientSelector).reset_transfer_steps = {
    bind: 'reset'
  };
};
const cellsStepForeignCurrency = (_foreignCurrency, _connectionsIn, _connectionsOut, _setProperty) => {
  _setProperty(_foreignCurrency).lastStep = false;
  delete _connectionsOut(_foreignCurrency).transfers__REGISTER_STEP_AMOUNT;
  delete _connectionsOut(_foreignCurrency).transfers__SET_SELECTED_AMOUNT;
  delete _connectionsOut(_foreignCurrency).transfers__address;
  _connectionsIn(_foreignCurrency).frequent_operations_transfer_last_step = {
    bind: 'lastStep'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_fill_enter_amount = {
    bind: 'setAmount'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_fill_default_value = {
    bind: 'amount'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_fill_enter_max_amount = {
    bind: 'maxProduct'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_fill_currency_selected = {
    bind: 'currencySelected'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_enter_amount_active = {
    bind: 'active'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_enter_amount_collapsed = {
    bind: 'collapsed'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_enter_amount_number = {
    bind: 'currentStep'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_enter_amount_scrolled = {
    bind: 'scrolled'
  };
  _connectionsIn(_foreignCurrency).frequent_operations_transfer_max_steps = {
    bind: 'maxSteps'
  };
  _connectionsOut(_foreignCurrency).frequent_operations_transfer_update_review_sumary = {
    bind: 'step-set-value'
  };
  _connectionsOut(_foreignCurrency).frequent_operations_active_step_sumary = {
    bind: 'step-set-value'
  };
  _connectionsOut(_foreignCurrency).close_control_veil = {
    bind: 'step-set-value'
  };
  _connectionsOut(_foreignCurrency).frequent_operations_transfer_amount_change_pressed = {
    bind: 'change-step-state'
  };
  _connectionsOut(_foreignCurrency).frequent_operations_transfer_update_step_state = {
    bind: 'change-step-state'
  };
  _connectionsOut(_foreignCurrency).frequent_operations_transfer_analytics_change_ammount_pressed = {
    bind: 'change-step-state'
  };
};
const cellsStepConcept = (_stepConcept, _connectionsIn, _connectionsOut, _setProperty) => {
  delete _connectionsOut(_stepConcept).transfers__REGISTER_STEP_CONCEPT;
  _setProperty(_stepConcept).maxSteps = 4;
  _connectionsIn(_stepConcept).frequent_operations_fill_transfer_concept = {
    bind: 'conceptLabel'
  };
  _connectionsIn(_stepConcept).frequent_operations_fill_transfer_concept_transfer = {
    bind: 'inputConcept'
  };
  _connectionsIn(_stepConcept).frequent_operations_set_interbank_concept_label = {
    bind: 'conceptLabel'
  };
  _connectionsIn(_stepConcept).frequent_operations_fill_transfer_input_concept = {
    bind: 'inputConcept'
  };
  _connectionsIn(_stepConcept).frequent_operations_input_concept = {
    bind: 'inputConcept'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_concept_hide_input = {
    bind: 'hideConceptInput'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_concept_active = {
    bind: 'active'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_concept_collapsed = {
    bind: 'collapsed'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_concept_scrolled = {
    bind: 'scrolled'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_concept_show_reference = {
    bind: 'showReference'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_concept_show_concept_label = {
    bind: 'showConceptLabel'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_concept_number = {
    bind: 'currentStep'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_max_steps = {
    bind: 'maxSteps'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_dm_last_step = {
    bind: 'lastStep'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_reference_text = {
    bind: 'referenceName'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_open_concept = {
    bind: 'openConceptStep'
  };
  _connectionsIn(_stepConcept).frequent_operations_transfer_concept_required = {
    bind: 'isRequired'
  };
  _connectionsOut(_stepConcept).frequent_operations_transfer_concept_change_pressed_update = {
    bind: 'continue-pressed'
  };
  _connectionsOut(_stepConcept).frequent_operations_transfer_concept_change_pressed = {
    bind: 'change-step-state'
  };
  _connectionsOut(_stepConcept).frequent_operations_transfer_update_concept_continue_pressed = {
    bind: 'continue-pressed'
  };
  _connectionsOut(_stepConcept).frequent_operations_transfer_show_interbank_summary = {
    bind: 'continue-pressed'
  };
  _connectionsOut(_stepConcept).frequent_operations_transfer_analytics_change_concept_pressed = {
    bind: 'change-step-state'
  };
  _connectionsOut(_stepConcept).frequent_operations_transfer_show_input_concept = {
    bind: 'change-step-state'
  };
};
const cellsOperationSummary = (_operationSummary, _connectionsIn, _connectionsOut, _setProperty) => {
  _setProperty(_operationSummary).maxSteps = 4;
  _connectionsIn(_operationSummary).frequent_operations_hidde_summary_property = {
    bind: 'hidden'
  };
  _connectionsIn(_operationSummary).reset_transfer_steps = {
    bind: 'reset'
  };
  _connectionsOut(_operationSummary).frequent_operations_summary_click = {
    bind: 'summary-closed'
  };
  _connectionsOut(_operationSummary).frequent_operations_analytics_summary_continue = {
    bind: 'summary-closed'
  };
};
const glomoNavigationHandler = (_connectionsIn, _connectionsOut) => {
  delete _connectionsIn('glomo-navigation-handler').transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete _connectionsOut('glomo-navigation-handler').NAVIGATION_REQUEST_TRANSFERS_SUCCESS;
  _connectionsIn('glomo-navigation-handler').frequent_operations_transfers_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'navigateToPage'
  };
  _connectionsOut('glomo-navigation-handler').navigation_request_frequent_operations_transfers_success = {
    bind: 'navigation-to-transfersSuccess',
    link: {
      page: 'transfersSuccess',
      cleanUntil: 'operationals'
    }
  };
  _connectionsOut('glomo-navigation-handler').frequent_operations_transfer_analyitics_app_completed = {
    bind: 'navigation-to-transfersSuccess'
  };
  _connectionsOut('glomo-navigation-handler').dashboard_refresh_financial_overview = {
    bind: 'navigation-to-transfersSuccess'
  };
  _connectionsOut('glomo-navigation-handler').frequent_operations_transfer_analyitics_app_completed = {
    bind: 'navigation-to-transfersSuccess'
  };
};
const glomoEquityTransferManagerMx = (_connectionsIn, _connectionsOut) => {
  delete _connectionsIn('glomo-equity-transfer-manager-mx').transfers__ON_SENDER_PRODUCT_SELECTED;
  delete _connectionsIn('glomo-equity-transfer-manager-mx').transfers__SET_SELECTED_PRODUCT_RECEIVER;
  delete _connectionsOut('glomo-equity-transfer-manager-mx').ANALYTICS_APP_STEP_THREE;
  delete _connectionsOut('glomo-equity-transfer-manager-mx').transfers_SEND_TICKET_TO_TRANSFER;
  _connectionsOut('glomo-equity-transfer-manager-mx').frequent_operations_SEND_TICKET_TO_TRANSFER = {
    bind: 'send-transfer-ticket-save'
  };
  _connectionsOut('glomo-equity-transfer-manager-mx').frequent_operations_overwrite_product_list = {
    bind: 'send-data-list-account'
  };
  delete _connectionsOut('glomo-equity-transfer-manager-mx').transfers__SET_TRANSFERS_SUCCESS_DATA;
  delete _connectionsIn('glomo-equity-transfer-manager-mx').transfers__TICKET_SAVE;
  _connectionsOut('glomo-equity-transfer-manager-mx').frequent_operations_transfers_SET_TRANSFERS_SUCCESS_DATA = {
    bind: 'set-equity-transfers-success-data'
  };
  _connectionsIn('glomo-equity-transfer-manager-mx').frequent_operations_summary_click = {
    bind: 'validateEquityTransfer'
  };
};
const extraElementsClose = (_extraElements, _connectionsIn, _connectionsOut) => {
  delete _connectionsIn(_extraElements.modalSelector).EXIT_TRANSFERS_PAGE_ACCEPT;
  _connectionsIn(_extraElements.modalSelector).frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'close'
  };
  delete _connectionsIn(_extraElements.modalNewRecipient).EXIT_TRANSFERS_PAGE_ACCEPT;
  _connectionsIn(_extraElements.modalNewRecipient).frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'close'
  };
  delete _connectionsIn(_extraElements.productSelectorModal).EXIT_TRANSFERS_PAGE_ACCEPT;
  _connectionsIn(_extraElements.productSelectorModal).frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT = {
    bind: 'close'
  };
};
const moleculeHeader = (_moleculeHeader, _connectionsIn, _connectionsOut) => {
  delete _connectionsOut(_moleculeHeader).transfers__HEADER_CLOSE;
  _connectionsOut(_moleculeHeader).frequent_operations__HEADER_CLOSE = {
    bind: 'click-right-button'
  };
};
module.exports = CONFIG => {
  const pageName = 'ocFrequentOperationsTransfer';
  const baseTransfer = require('./transfers')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const sphericaSuffix = sphericaPageUtils.isSpherica() ? '-spherica' : '';
  const { connectionsIn, connectionsOut, setProperty, setTemplateProperty} = require('./common/helpers/_utils');
  baseTransfer.hash = 'frequent-operations-transfer';
  baseTransfer.currentPage.url = '/frequent-operations-transfer';
  const _connectionsInFreqT = connectionsIn(baseTransfer);
  const _connectionsOutFreqT = connectionsOut(baseTransfer);
  const _setPropertyFreqT = setProperty(baseTransfer);
  const _setTemplatePropertyFreqT = setTemplateProperty(baseTransfer);
  const { appPageVisit, appStarted, appStep2, appCompleted } = require('./analytics/_frequentOperations')(CONFIG);
  const analitycOldComponent = baseTransfer.components.findIndex(comp => comp.tag === 'glomo-analytics-transfer-manager-mx');
  baseTransfer.components.splice(analitycOldComponent, 1);
  const _productSelectorModal = `cells-product-selector-modal${sphericaSuffix}`;
  const secondProductSelector = baseTransfer.components.findIndex(comp => comp.tag === _productSelectorModal && comp.properties.id === 'second-products-modal');
  baseTransfer.components.splice(secondProductSelector, 1);
  delete baseTransfer.template.properties.cellsConnections.in.transfers__SHOW_CONFIRM_CHANEL;
  _setTemplatePropertyFreqT.cellsConnections.in.frequent_operations_transfer_update_review_sumary = {
    bind: 'open'
  };
  _setTemplatePropertyFreqT.cellsConnections.in.frequent_operations_transfer_update_concept_continue_pressed = {
    bind: 'open'
  };
  _setTemplatePropertyFreqT.cellsConnections.in.frequent_operations_transfer_amount_change_pressed = {
    bind: 'close'
  };
  _setTemplatePropertyFreqT.cellsConnections.in.frequent_operations_SHOW_CONFIRM_CHANEL = {
    bind: 'showConfirm'
  };

  const _moleculeHeader = `cells-molecule-header${sphericaSuffix}`;
  const _productSelector = `cells-step-product-selector${sphericaSuffix}`;
  const _recipientSelector = `cells-step-recipient-selector${sphericaSuffix}`;
  const _stepConcept = `cells-step-concept${sphericaSuffix}`;
  const _foreignCurrency = `glomo-step-foreign-currency-operation${sphericaSuffix}`;
  const _extraElements = {
    modalSelector: `cells-modal-selector${sphericaSuffix}`,
    modalNewRecipient: `cells-modal-new-recipient-selector${sphericaSuffix}`,
    productSelectorModal: `cells-product-selector-modal${sphericaSuffix}`
  };
  const _operationSummary = `cells-operation-summary${sphericaSuffix}`;

  moleculeHeader(_moleculeHeader, _connectionsInFreqT, _connectionsOutFreqT);
  opxTranfersMxDm(_connectionsInFreqT, _connectionsOutFreqT);
  opxPeerToPeer(_connectionsInFreqT, _connectionsOutFreqT);
  contextualSale(_connectionsInFreqT, _connectionsOutFreqT);
  cellsHandleLifeCycle(_connectionsInFreqT, _connectionsOutFreqT, pageName);
  glomoTransfersMxDm(_connectionsInFreqT, _connectionsOutFreqT, _setPropertyFreqT);
  cellsStepProductSelector(_productSelector, _connectionsInFreqT, _connectionsOutFreqT, _setPropertyFreqT);
  cellsStepRecipientSelector(_recipientSelector, _connectionsInFreqT, _connectionsOutFreqT);
  cellsStepForeignCurrency(_foreignCurrency, _connectionsInFreqT, _connectionsOutFreqT, _setPropertyFreqT);
  cellsStepConcept(_stepConcept, _connectionsInFreqT, _connectionsOutFreqT, _setPropertyFreqT);
  cellsOperationSummary(_operationSummary, _connectionsInFreqT, _connectionsOutFreqT, _setPropertyFreqT);
  glomoNavigationHandler(_connectionsInFreqT, _connectionsOutFreqT);
  glomoEquityTransferManagerMx(_connectionsInFreqT, _connectionsOutFreqT);
  extraElementsClose(_extraElements, _connectionsInFreqT, _connectionsOutFreqT);
  const frequentIntelligentOperationsDM = {
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
          transfers__SET_PRODUCTS_LIST_TOTAL: {
            bind: 'loadOwnTransferData'
          },
          frequent_operations_transfer_update_review_sumary: {
            bind: 'updateAmountToTransfer'
          },
          frequent_operations_transfer_concept_change_pressed: {
            bind: 'updateConceptTransferCloseSummary'
          },
          frequent_operations_transfer_concept_change_pressed_update: {
            bind: 'updateDefaultConcept'
          },
          frequent_operations_transfer_collapesed_concept: {
            bind: 'collapsedConceptSetp'
          },
          frequent_operations_transfer_show_input_concept: {
            bind: 'showConceptTransferCloseSummary'
          },
          frequent_operationss_receiver_data: {
            bind: 'getReceiverData'
          },
          frequen_operations_set_list_of_banks: {
            bind: 'setListOfBanks'
          },
          navigate_frequent_transfer: {
            bind: 'inteligentFrequentOperationTransferStart'
          },
          dashboard_frequent_operations_navigation_transfers: {
            bind: 'inteligentFrequentOperationTransferStart'
          },
          frequent_operations_transfer_show_interbank_summary: {
            bind: 'showSummary'
          },
          navigation_request_frequent_operations_transfers_success: {
            bind: 'resetTransferOperation'
          },
          frequent_operations__HEADER_CLOSE: {
            bind: 'abandonReuseOperationModal'
          },
          frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT: {
            bind: 'resetTransferOperation'
          },
          frequent_operations_transfer_finished_steps_own: {
            bind: 'fillStepsFrequentTransfer'
          },
          check_summary: {
            bind: 'checkSummaryShow'
          },
          frequent_operations_active_step_sumary: {
            bind: 'openSummaryWithActiveSteps'
          },
          frequent_operations_overwrite_product_list: {
            bind: 'setOriginalProductList'
          },
          frequent_operations_changed_selected_product: {
            bind: 'updadateMaxAmount'
          },
          frequent_operations_product_selector_change_pressed: {
            bind: 'productSelectorChangePressed'
          },
          frequent_operations_product_not_change: {
            bind: 'changeSelectedProductstateSummary'
          },
          frequent_operations_transfer_update_step_state: {
            bind: 'changeAmountState'
          }
        },
        out: {
          frequent_operations_id_to_delete: {
            bind: 'frequent-operations-id-to-delete'
          },
          frequent_operations_close_modals: {
            bind: 'frequent-operations-close-transfer-modals'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          check_summary: {
            bind: 'close-control-veil'
          },
          frequent_operations_fill_product_selector: {
            bind: 'frequent-operations-fill-product-selector'
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
          frequent_operations_fill_recipient_selector: {
            bind: 'frequent-operations-fill-recipient-selector'
          },
          frequent_operations_recipient_selector_disable: {
            bind: 'frequent-operations-recipient-selector-disable-change'
          },
          frequent_operations_recipient_selector_name_right: {
            bind: 'frequent-operations-recipient-selector-name-right'
          },
          frequent_operations_recipient_selector_hide_avatar: {
            bind: 'frequent-operations-recipient-selector-hide-avatar'
          },
          frequent_operations_recipient_selector_last_step: {
            bind: 'frequent-operations-recipient-selector-last-step'
          },
          frequent_operations_recipient_selector_active: {
            bind: 'frequent-operations-recipient-selector-is-property-step-active'
          },
          frequent_operations_recipient_selector_collapsed: {
            bind: 'frequent-operations-recipient-selector-is-property-step-collapsed'
          },
          frequent_operations_recipient_selector_number: {
            bind: 'frequent-operations-recipient-selector-property-number'
          },
          frequent_operations_recipient_selector_scrolled: {
            bind: 'frequent-operations-recipient-selector-is-property-step-scrolled'
          },
          frequent_operations_recipient_selector_decorated: {
            bind: 'frequent-operations-recipient-selector-decorated'
          },
          frequent_operations_recipient_selector_saved: {
            bind: 'frequent-operations-recipient-selector-saved'
          },
          frequent_operations_fill_enter_amount: {
            bind: 'frequent-operations-fill-enter-amount'
          },
          frequent_operations_fill_default_value: {
            bind: 'frequent-operations-fill-default-value'
          },
          frequent_operations_fill_enter_max_amount: {
            bind: 'frequent-operations-fill-enter-amount-max-product'
          },
          frequent_operations_fill_currency_selected: {
            bind: 'frequent-operations-fill-currency-selected'
          },
          frequent_operations_enter_amount_active: {
            bind: 'frequent-operations-enter-amount-is-property-step-active'
          },
          frequent_operations_enter_amount_collapsed: {
            bind: 'frequent-operations-enter-amount-is-property-step-collapsed'
          },
          frequent_operations_enter_amount_number: {
            bind: 'frequent-operations-enter-amount-property-number'
          },
          frequent_operations_enter_amount_scrolled: {
            bind: 'frequent-operations-enter-amount-is-property-step-scrolled'
          },
          frequent_operations_transfer_last_step: {
            bind: 'frequent-operations-enter-amount-last-step'
          },
          frequent_operations_fill_transfer_concept: {
            bind: 'frequent-operations-fill-transfer-concept'
          },
          frequent_operations_fill_transfer_concept_transfer: {
            bind: 'frequent-operations-fill-interbank-transfer-concept'
          },
          frequent_operations_fill_transfer_input_concept: {
            bind: 'frequent-operations-fill-transfer-input-concept'
          },
          frequent_operations_transfer_concept_hide_input: {
            bind: 'frequent-operations-concept-is-property-step-hide-concept-input'
          },
          frequent_operations_transfer_concept_active: {
            bind: 'frequent-operations-concept-is-property-step-active'
          },
          frequent_operations_transfer_concept_collapsed: {
            bind: 'frequent-operations-concept-is-property-step-collapsed'
          },
          frequent_operations_transfer_concept_scrolled: {
            bind: 'frequent-operations-concept-is-property-step-scrolled'
          },
          frequent_operations_transfer_concept_show_reference: {
            bind: 'frequent-operations-concept-is-property-step-show-reference'
          },
          frequent_operations_transfer_concept_number: {
            bind: 'frequent-operations-concept-property-number'
          },
          frequent_operations_transfer_concept_required: {
            bind: 'frequent-operations-concept-required'
          },
          frequent_operations_transfer_max_steps: {
            bind: 'frequent-operations-max-steps'
          },
          frequent_operations_input_concept: {
            bind: 'frequent-operations-prefill-transfer-input-concept'
          },
          frequent_operations_SHOW_CONFIRM_CHANEL: {
            bind: 'frequent-operations-state-summary'
          },
          frequent_operations_transfer_final_amount_selected: {
            bind: 'frequent-operations-final-amount-selected'
          },
          frequent_operations_transfer_review_sumary: {
            bind: 'frequent-operations-call-review-summary'
          },
          frequent_operations_transfer_dm_service_type: {
            bind: 'frequent-operations-tx-dm-type'
          },
          frequent_operations_transfer_dm_service_sender: {
            bind: 'frequent-operations-tx-dm-sender'
          },
          frequent_operations_transfer_dm_service_destination: {
            bind: 'frequent-operations-tx-dm-destination'
          },
          frequent_operations_transfer_dm_service_own_destination: {
            bind: 'frequent-operations-tx-dm-destination-own'
          },
          frequent_operations_transfer_dm_service_concept: {
            bind: 'frequent-operations-tx-dm-concept'
          },
          frequent_operations_transfer_dm_last_step: {
            bind: 'frequent-operations-fill-transfer-last-active-step'
          },
          frequent_operations_SET_DM_EXCHANGE_RATES_FLAG: {
            bind: 'frequent-operations-set-exchange-rates-flag'
          },
          frequent_operations_reques_receiver_data: {
            bind: 'frequent-operations-recover-receiver-data'
          },
          frequent_operations_transfer_set_receiver_data: {
            bind: 'frequent-operations-set-receipt-preselected'
          },
          frequent_operations_hidde_summary_property: {
            bind: 'frequent-operations-confirm-hidden'
          },
          frequent_operations_fill_all_products: {
            bind: 'frequent-operations-fill-product-selector-all-products'
          },
          frequent_operations_EXIT_TRANSFERS_PAGE_ACCEPT: {
            bind: 'frequent-operations-leave-operation',
            backStep: true
          },
          global_alert_manager_open_with_settings: {
            bind: 'frequent-operations-abandon-operation'
          },
          frequent_operations_transfer_open_concept: {
            bind: 'frequent-operations-open-concept'
          },
          frequent_operations_transfer_reference_text: {
            bind: 'frequent-operations-reference-text'
          },
          frequent_operations_overwrite_new_product_list: {
            bind: 'frequent-operations-overwrite-products'
          },
          frequent_operations_set_interbank_concept_label: {
            bind: 'frequent-operations-set-interbank-concept'
          },
          frequent_operation_analytics_app_page_visit: {
            bind: 'analytics-app-page-visit'
          }
        }
      }
    }
  };
  const frequentIntelligentOperationsAnalyticsDM = {
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
          frequent_operation_analytics_app_page_visit: {
            bind: 'fireAnalyticsAppPageVisit'
          },
          frequent_operations_analytics_app_started: {
            bind: 'fireAnalyticsAppStartedChangeProduct'
          },
          frequent_operations_transfer_analytics_change_ammount_pressed: {
            bind: 'fireAnalyticsAppStartedChangeAmount'
          },
          frequent_operations_transfer_analytics_change_concept_pressed: {
            bind: 'fireAnalyticsAppStartedChangeConcept'
          },
          frequent_operations_analytics_summary_continue: {
            bind: 'fireAnalyticsAppStartedContinue'
          },
          frequent_operations_transfer_analyitics_show_otp_screen: {
            bind: 'fireAnalyticsAppStep'
          },
          frequent_operations_transfer_analyitics_app_completed: {
            bind: 'fireAnalyticsAppCompleted'
          }
        },
        out: {
          frequent_operation_app_visit: {
            bind: 'analytics-app-page-visit-fo',
            analytics: appPageVisit
          },
          frequent_operation_app_started_change_product: {
            bind: 'analytics-app-started',
            analytics: appStarted
          },
          frequent_operation_app_step_otp: {
            bind: 'analytics-app-step-otp',
            analytics: appStep2
          },
          frequent_operation_app_completed: {
            bind: 'analytics-app-completed',
            analytics: appCompleted
          }
        }
      }
    }
  };
  baseTransfer.components.push(frequentIntelligentOperationsDM, frequentIntelligentOperationsAnalyticsDM);
  return sphericaPageUtils.spherize(baseTransfer);
};
