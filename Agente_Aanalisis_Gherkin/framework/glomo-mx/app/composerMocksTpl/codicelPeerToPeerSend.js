/* eslint-disable max-statements, new-cap, no-shadow */
'use strict';

const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');

const { useNames, createPrefixFromPageName, SPINNER } = utils;
const PAGE_NAME = 'codicelPeerToPeerSend';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

module.exports = (config) => {
  const newSphericaPage = require('./common/helpers/_spherica')(config, PAGE_NAME).getNewSphericaPage();
  if (newSphericaPage) {
    return newSphericaPage;
  }
  const ANALYTICS = require('./analytics/_codicelPeerToPeerSendPage')(config);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const codicelPage = page(config)(PAGE_NAME);
  const localCurrency = utils.getLocalCurrency(config);
  const language = utils.getLanguage(config);
  const HOST = config.globalServices.host;
  const spinner = SPINNER(config);
  const MAX_STEPS = 4;
  const BBVA_PHONE_NUMBER = config.bbvaLine;
  const BBVA_SA_PHONE_NUMBER_NLE0023 = config.phoneNumberContact;


  const CODICEL_PEER_TO_PEER_SEND_STORAGE_KEY = 'codicel_peer_to_peer';
  const localStorage = require('./common/_local-storage');

  const isNative = !!config.native;
  const isNativeiOS = !!config.nativeIos;
  const mocksCipher = config.mocksCipher;

  const images = {
    errorAlertImagePath: './images/errors/error.svg',
    error: 'images/errors/error.svg',
    accountDollar: './images/accounts/Account-Dollar.svg',
    contactsAgenda: './images/p2pPayments/contacts_agenda.svg',
    mobile: './images/p2pPayments/mobile.svg',
    phone: './images/p2pPayments/bbva_phone.svg'
  };

  const ONBOARDING_SLIDES = [
    {
      item: {
        title: 'codicel-peer-to-peer-onboarding-title-1',
        desc: 'codicel-peer-to-peer-onboarding-desc-1',
        descClasses: 'pfm-subtle-description',
        img: './images/transfers/transfer.svg'
      }
    },
    {
      item: {
        title: 'codicel-peer-to-peer-onboarding-title-2',
        desc: 'codicel-peer-to-peer-onboarding-desc-2',
        descClasses: 'pfm-subtle-description',
        img: './images/p2pPayments/smartPayDollar.svg'
      }
    },
    {
      item: {
        title: 'codicel-peer-to-peer-onboarding-title-3',
        desc: 'codicel-peer-to-peer-onboarding-desc-3',
        img: './images/cardlessWithdrawal/money-app-dollar.svg'
      }
    }
  ];

  const eventCustom = {
    ['init-custom-event-codicel']: true,
    ['swipe-menu-enabled']: false
  };


  const template = {
    tag: 'glomo-opx-template',
    properties: {
      animationType: 'verticalUp',
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true,
      footerFixed: true,
      className: `bg-core-blue ${isNativeiOS ? 'header-fixed' : ''}`,
      headerHeight: utils.headerHeight,
      topOnConfirm: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('cells_scroll_zone')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('can_execute_changed')]: {
            bind: 'showConfirm'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'close'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('operation_in_process')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('modal_visibility_changed')]: {
            bind: 'setModalActive'
          },
          codicel_peer_to_peer_send_RESET_STATUS_BAR: {
            bind: 'resetStatusBarTop'
          }
        },
        out: {
          [getChannelName('scroll_complete')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__header',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      cache: [ 'mtuException' ],
      customInitEvents: eventCustom,
      private: true,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          },
          [getChannelName('exit_operative')]: {
            bind: 'reset'
          },
          [getChannelName('payment_success')]: {
            bind: 'reset'
          }
        },
        out: {
          global_channel_init_page: {
            bind: 'init-custom-event-codicel'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      titleName: 'codicel-peer-to-peer-send-header-title',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'focusOnTitle'
          }
        },
        out: {
          [getChannelName('exit_codicel')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'codicel-back-close-page',
      cellsConnections: {
        in: {
          [getChannelName('exit_operative')]: {
            bind: 'goBack'
          },
          [getChannelName('payment_success')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('CLOSE_PAGE')]: {
            bind: 'codicel-back-close-page',
            backStep: true,
            'forward-to-native': true
          },
          [getChannelName('navigate_codicel_review')]: {
            bind: 'navigation-to-codicel-transfer-review',
            link: {
              page: 'codicelPeerToPeerTransferReview',
              params: {
                continue: 'continue'
              }
            }
          }
        }
      }
    }
  };

  const glomoOpx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-peer-to-peer-mx-dm',
    familyPath: 'glomo-opx-peer-to-peer-dm',
    properties: {
      images: images,
      isNative,
      codicelPeerToPeerSendStorageKey: CODICEL_PEER_TO_PEER_SEND_STORAGE_KEY,
      autoActivateStep: true,
      maskApplied: '^(\\d{2})(\\d{4})(\\d{4}).*',
      decorateSteps: true,
      currency: localCurrency,
      maxSteps: MAX_STEPS,
      largeContactList: true,
      bbvaPhone: {
        value: BBVA_PHONE_NUMBER
      },
      numberBbvaLine: config.phoneNumberBbvaLine,
      saPhoneNumber: {
        phoneNumber: BBVA_SA_PHONE_NUMBER_NLE0023
      },
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'handlePublicKey'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          global_account_set_success_response: {
            bind: 'accountRaw'
          },
          global_account_set_product_id: {
            bind: 'productId'
          },
          native_user_id: {
            bind: 'myPhoneNumber'
          },
          global_login_success: {
            bind: 'setPhoneInWeb'
          },
          global_storage_get_loginData_success: {
            bind: 'handleGlobalLoginData'
          },
          global_storage_get_loginData_error: {
            bind: 'handleGlobalLoginData'
          },
          global_channel_init_page: {
            bind: 'init'
          },
          [getChannelName('register_step_product')]: {
            bind: 'registerStep'
          },
          [getChannelName('register_step_phone')]: {
            bind: 'registerStep'
          },
          [getChannelName('register_step_amount')]: {
            bind: 'registerStep'
          },
          [getChannelName('register_step_concept')]: {
            bind: 'registerStep'
          },
          [getChannelName('next_step')]: {
            bind: 'nextStep'
          },
          [getChannelName('collapse_other_steps')]: {
            bind: 'manageStateSteps'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'reset'
          },
          [`global_storage_get_${CODICEL_PEER_TO_PEER_SEND_STORAGE_KEY}_error`]: {
            bind: 'getCodicelLocalStorage'
          },
          [`global_storage_get_${CODICEL_PEER_TO_PEER_SEND_STORAGE_KEY}_success`]: {
            bind: 'getCodicelLocalStorage'
          },
          codicel_close_modal_header_channel: {
            bind: 'setOnboardingVisitedOnLocalStorage'
          },
          global_storage_get_last_five_send_codicel_success: {
            bind: 'setLastContactsSend'
          },
          global_storage_get_last_five_send_codicel_error: {
            bind: 'setLastContactsSendError'
          },
          [getChannelName('product_selected')]: {
            bind: 'sourceSelected'
          },
          [getChannelName('tap_icon_agenda')]: {
            bind: 'openContactModal'
          },
          [getChannelName('response_all_contacts_success')]: {
            bind: 'parseMobileContacts'
          },
          [getChannelName('selected_contact_modal')]: {
            bind: 'selectedContactFromModal'
          },
          [getChannelName('set_contact_detail')]: {
            bind: 'setContactDetail'
          },
          [getChannelName('get_contact_book')]: {
            bind: 'sendContactsToModal'
          },
          [getChannelName('search_contact')]: {
            bind: 'generateSelectionList'
          },
          codicel_accept_invite_contact: {
            bind: 'acceptInviteContact'
          },
          codicel_cancel_invite_contact: {
            bind: 'cancelInviteContact'
          },
          [getChannelName('response_get_contacts_error')]: {
            bind: 'handlerPermissionDeniedContactsPlugin'
          },
          [getChannelName('response_key_generated')]: {
            bind: 'responseKeyGenerated'
          },
          [getChannelName('response_data_encrypted_aes')]: {
            bind: 'responseDataCipheredAes'
          },
          [getChannelName('response_data_encrypted_rsa_success')]: {
            bind: 'responseDataEncryptedRSA'
          },
          [getChannelName('response_catalogs_banks_success')]: {
            bind: 'handleCatalogsResponse'
          },
          [getChannelName('set_amount_to_transfer')]: {
            bind: 'amount'
          },
          [getChannelName('response_email_success')]: {
            bind: 'getCustomerDetailSuccess'
          },
          [getChannelName('response_email_error')]: {
            bind: 'getCustomerDetailError'
          },
          [getChannelName('change_receiver_channel')]: {
            bind: 'openWarningModalChangeReceiver'
          },
          codicel_peer_to_peer_send_warning_modal_change_receiver_accept: {
            bind: 'changeReceiverAcceptPressed'
          },
          [getChannelName('leave_page_accept')]: {
            bind: 'exit'
          },
          [getChannelName('exit_codicel')]: {
            bind: 'requestExitCodicel'
          },
          [getChannelName('set_reference_and_concept')]: {
            bind: 'concept'
          },
          [getChannelName('open_success_page')]: {
            bind: 'requestServiceToTransfer'
          },
          global_mtu_navigation_confirm_limit: {
            bind: 'requestServiceToTransfer'
          },
          [getChannelName('clabe_search_success')]: {
            bind: 'handleClabeSearchSuccess'
          },
          [getChannelName('clabe_search_error')]: {
            bind: 'handleClabeSearchError'
          },
          [getChannelName('banxico_response_decrypted')]: {
            bind: 'parseCuentaClabeBanxico'
          },
          [getChannelName('response_query_magic_receiver')]: {
            bind: 'handleReceiverSuccess'
          },
          [getChannelName('response_query_magic_receiver_error')]: {
            bind: 'handleReceiverError'
          },
          [getChannelName('response_transfer_success')]: {
            bind: 'handleTransferSuccess'
          },
          [getChannelName('response_transfer_error')]: {
            bind: 'handleTransferError'
          },
          response_transfer_error_fraud: {
            bind: 'handleTransferErrorFraud'
          },
          global_dimo_to_call: {
            bind: 'callBBVALine'
          },
          codicel_peer_to_peer_send_error_transfer_error_exit: {
            bind: 'requestExitCodicel'
          },
          codicel_peer_to_peer_send_error_transfer_error: {
            bind: 'handleAmountTransferError'
          },
          codicel_peer_to_peer_send_error_interbank_transfer_error: {
            bind: 'requestExitCodicel'
          },
          [getChannelName('response_catalogs_banks_error')]: {
            bind: 'handleCatalogsError'
          },
          codicel_peer_to_peer_send_error_transfer_call_bbva: {
            bind: 'handleErrorCallBBVATransfer'
          },
          codicel_peer_to_peer_send_error_transfer_call_bbva_exit: {
            bind: 'requestExitCodicel'
          },
          [getChannelName('next_step_concept')]: {
            bind: 'changeLabelConcept'
          },
          [getChannelName('change_concept')]: {
            bind: 'changeLabelConceptOptional'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          navigation_codicel_peer_to_peer_send: {
            bind: 'account'
          },
          transfers_redirection_dimo_to_expenses_group: {
            bind: 'changeRedirectionToExpenses'
          },
          transfer_dimo_number_phone_receiver: {
            bind: 'phone'
          },
          transfer_dimo_banxico_response: {
            bind: 'parseCuentaClabeBanxico'
          },
          blue_transfers_set_dimo_data: {
            bind: 'blueData'
          }
        },
        out: {
          [getChannelName('request_catalogs_banks')]: {
            bind: 'request-get-catalogs-banks'
          },
          [getChannelName('cells_scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'reset-scroll'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getChannelName('set_min_value')]: {
            bind: 'set-min-value'
          },
          [getChannelName('set_max_value')]: {
            bind: 'set-max-value'
          },
          [getChannelName('REQUEST_LEAVE_PAGE')]: {
            bind: 'send-config-leave-codicel'
          },
          global_get_from_storage: {
            bind: 'get-local-storage-codicel'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codicel'
          },
          codicel_open_modal_channel: {
            bind: 'codicel-open-modal-onboarding'
          },
          [getChannelName('set_default_product_id')]: {
            bind: 'set-default-product-id'
          },
          [getChannelName('set_selected_account')]: {
            bind: 'set-selected-account'
          },
          [getChannelName('set_products')]: {
            bind: 'set-accounts-with-message'
          },
          [getChannelName('source_selected_amount')]: {
            bind: 'source-selected-amount'
          },
          [getChannelName('source_selected_currency')]: {
            bind: 'source-selected-currency'
          },
          [getChannelName('set_last_contacts_send')]: {
            bind: 'set-last-contacts-send'
          },
          [getChannelName('open_contact_modal')]: {
            bind: 'open-contact-modal'
          },
          [getChannelName('request_get_all_contacts')]: {
            bind: 'get-all-contacts'
          },
          [getChannelName('set_large_list_items')]: {
            bind: 'set-selection-list'
          },
          [getChannelName('set_group_list_items')]: {
            bind: 'set-parsed-contact-group'
          },
          [getChannelName('large_contact_list_changed')]: {
            bind: 'large-contact-list-changed'
          },
          [getChannelName('set_contact_phone')]: {
            bind: 'set-contact-phone'
          },
          [getChannelName('set_contact_additional_info')]: {
            bind: 'set-phone-contact'
          },
          [getChannelName('set_receiver')]: {
            bind: 'set-receiver'
          },
          [getChannelName('get_contact_book')]: {
            bind: 'get-contact-book'
          },
          [getChannelName('OPEN_MODAL_ENROLL_CODI')]: {
            bind: 'invite-enroll-codicel'
          },
          [getChannelName('share_invitation')]: {
            bind: 'send-contact-invitation'
          },
          [getChannelName('OPEN_ERROR_MODAL_SAME_PHONE')]: {
            bind: 'error-same-phone'
          },
          [getChannelName('close_contact_modal')]: {
            bind: 'close-contact-modal'
          },
          [getChannelName('OPEN_MODAL_PERMISSION_DENIED_CONTACTS')]: {
            bind: 'open-modal-permissions-denied'
          },
          [getChannelName('request_generate_random_key')]: {
            bind: 'generate-random-key'
          },
          [getChannelName('request_encrypt_aes')]: {
            bind: 'cipher-phone-with-aes'
          },
          [getChannelName('request_encrypt_rsa_cipher')]: {
            bind: 'request-encrypt-data-with-rsa'
          },
          [getChannelName('request_decrypt_banxico_response')]: {
            bind: 'decrypt-banxico-response-aes'
          },
          [getChannelName('OPEN_WARNING_MODAL_CHANGE_RECEIVER')]: {
            bind: 'warning-change-receiver'
          },
          [getChannelName('CHANGED-CONTACT-RESET-STEP')]: {
            bind: 'changed-contact-reset-step'
          },
          [getChannelName('CHANGED-CONTACT-RESET-STEP-AMOUNT')]: {
            bind: 'changed-contact-reset-step-amount'
          },
          [getChannelName('CHANGED-CONTACT-RESET-STEP-CURRENCY')]: {
            bind: 'changed-contact-reset-step-currency'
          },
          [getChannelName('CHANGED-CONTACT-OPEN-STEP')]: {
            bind: 'changed-contact-open-step'
          },
          [getChannelName('CHANGED-CONTACT-SET-ACTIVE-FALSE')]: {
            bind: 'changed-contact-active-false'
          },
          [getChannelName('reset_invalid_input')]: {
            bind: 'reset-invalid-input'
          },
          [getChannelName('exit_operative')]: {
            bind: 'exit-codicel-page'
          },
          [getChannelName('SHOW_REFERENCE')]: {
            bind: 'show-reference'
          },
          [getChannelName('NEW_FORMAT_REFERENCE')]: {
            bind: 'set-format-date'
          },
          [getChannelName('MAXLENGTH_CONCEPT')]: {
            bind: 'max-length-concept'
          },
          [getChannelName('INFOMESSAGE_CONCEPT')]: {
            bind: 'info-message-concept'
          },
          [getChannelName('REQUEIRED_CONCEPT')]: {
            bind: 'concept-required'
          },
          [getChannelName('REQUIRED_CONCEPT_LABEL')]: {
            bind: 'concept-required-label'
          },
          [getChannelName('REQUIRED_REFERENCE_LABEL')]: {
            bind: 'reference-required-label'
          },
          [getChannelName('send_summary_data')]: {
            bind: 'summary-data'
          },
          [getChannelName('can_execute_changed')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('request_internal_transfer')]: {
            bind: 'is-internal-transfer'
          },
          [getChannelName('request_interbank_transfer')]: {
            bind: 'is-interbank-transfer'
          },
          [getChannelName('redirection_review_to_expenses_group')]: {
            bind: 'redirection-review-to-expenses-group'
          },
          [getChannelName('payment_success')]: {
            bind: 'transfer-successful'
          },
          dashboard_refresh_financial_overview: {
            bind: 'financial-overview-refresh'
          },
          global_product_transfer_success: {
            bind: 'update-product-detail'
          },
          codicel_set_primary_link: {
            bind: 'set-primary-link'
          },
          [getChannelName('query_magic_receiver')]: {
            bind: 'request-get-receiver'
          },
          [getChannelName('generate_request_transfer')]: {
            bind: 'generate-request-transfer'
          },
          sign_close_modal: {
            bind: 'close-sign-modal'
          },
          [getChannelName('post_clabe_search')]: {
            bind: 'request-registered-clabe-search'
          },
          [getChannelName('_ANALYTICS_IS_BBVA')]: {
            bind: 'show-reference'
          },
          [getChannelName('_APP_STEP_4')]: {
            bind: 'summary-data'
          },
          [getChannelName('_PAGE_COMPLETED')]: {
            bind: 'transfer-successful'
          },
          [getChannelName('_OPEN_ONBOARDING')]: {
            bind: 'codicel-open-modal-onboarding'
          },
          [getChannelName('OPEN_MODAL_INVITE_CODICEL')]: {
            bind: 'invite-enroll-codicel'
          },
          [getChannelName('_INVITE_CODICEL_ACTION')]: {
            bind: 'send-contact-invitation'
          },
          [getChannelName('_INVITE_CODICEL_ACTION_CLOSE')]: {
            bind: 'glomo-alert-modal-closed'
          },
          [getChannelName('receipt_content_share')]: {
            bind: 'send-content-receipt'
          },
          [getChannelName('set_customer_id')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('get_customer_email')]: {
            bind: 'request-customer-email'
          },
          [getChannelName('OPEN_TRANSFERS_GENERIC_ERROR')]: {
            bind: 'transfer-error'
          },
          [getChannelName('amount_change_error_limits')]: {
            bind: 'amount-change-error-limits'
          },
          [getChannelName('init_page')]: {
            bind: 'codicel-custom-event-init'
          },
          codicel_peer_to_peer_send_init_page: {
            bind: 'codicel-custom-event-init'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line',
            'forward-to-native': true
          },
          global_dimo_modal_reject: {
            bind: 'aric-fraud-error-dimo'
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          blue_transfers_collapse_amount: {
            bind: 'collapse-amount'
          },
          blue_transfers_set_concept: {
            bind: 'set-concept'
          },
          blue_transfers_collapse_concept: {
            bind: 'collapse-concept'
          },
          blue_transfers_set_dimo_back_action: {
            bind: 'codicel-peer-to-peer-transfer-review-back-action-reset'
          },
          EXIT_TRANSFERS_PAGE_ACCEPT: {
            bind: 'codicel-peer-to-peer-transfer-review-back-action-reset'
          }
        },
        params: {
          mobileTransferP2PResult: 'mobileTransferP2PResult',
          clientId: 'global_client_id'
        }
      }
    }
  };

  const onboarding = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-modal-slider',
    properties: {
      buttonLabel: 'codicel-peer-to-peer-onboarding-button-label',
      title: 'codicel-peer-to-peer-send-onboarding-header',
      alignTop: true,
      hasSecondaryButton: true,
      secondaryButtonLabel: 'codicel-peer-to-peer-button-label-continue',
      className: isNativeiOS ? 'padding-top-ios' : 'header--core',
      sliderValues: ONBOARDING_SLIDES,
      cellsConnections: {
        in: {
          codicel_open_modal_channel: {
            bind: 'openModal'
          }
        },
        out: {
          codicel_close_modal_header_channel: {
            bind: 'cells-bottom-modal-closed'
          },
          [getChannelName('_CLOSE_ONBOARDING')]: {
            bind: 'onboard-modal-succes'
          }
        }
      }
    }
  };

  const productSelector = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    properties: {
      currentStep: 1,
      maxSteps: MAX_STEPS,
      id: 'codicel-p2p-origin',
      notInitializeWithAttached: true,
      localCurrency: localCurrency,
      isWarningMessage: true,
      stepClickDisable: true,
      fixed: true,
      ignoreAdditionalMessageValidation: true,
      alignErrorMessage: 'align-text',
      stepTitle: 'codicel-peer-to-peer-send-product-selector-title',
      errorMessage: 'codicel-peer-to-peer-send-product-selector-insufficient-balance',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'reset'
          },
          [getChannelName('set_default_product_id')]: {
            bind: 'defaultProductId'
          },
          [getChannelName('set_products')]: {
            bind: 'fetchProducts'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          }
        },
        out: {
          [getChannelName('register_step_product')]: {
            bind: 'register-step'
          },
          [getChannelName('product_selected')]: {
            bind: 'on-change-product-selected'
          }
        }
      }
    }
  };

  const enterPhone = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-enter-phone',
    properties: {
      currentStep: 2,
      maxSteps: MAX_STEPS,
      displayedCurrentStep: 1,
      displayedMaxSteps: 3,
      id: 'codicel-p2p-phone',
      className: 'avatar-white-bg',
      disablePreviousStepAnimation: true,
      stepTitle: 'codicel-peer-to-peer-send-enter-phone-title',
      enterPhoneStepSubtitle: 'codicel-peer-to-peer-send-enter-phone-subtitle',
      showContactDetail: true,
      hasAction: true,
      cellsNewCellularAllowedValue: '^[1-9][0-9]*$',
      phoneImg: 'images/p2pPayments/mobile.svg',
      maxLengthCellular: 10,
      formatPhoneNumber: true,
      cellsNewCellularIconAction: 'tel',
      cellsNewCellularPhoneInputType: 'tel',
      stepPhoneCellularIcon: 'coronita:agenda',
      cellularFormConfig: {
        startErrorMessage: 'codicel-peer-to-peer-send-enter-phone-error-message',
        errorMessage: 'codicel-peer-to-peer-send-enter-phone-cellular-error-message',
        phoneLabel: 'codicel-peer-to-peer-send-enter-phone-number-label',
        cellsNewCellularInfoMessage: 'codicel-peer-to-peer-send-step-phone-cellular-message'
      },
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('CHANGED-CONTACT-RESET-STEP')]: {
            bind: 'reset'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'reset'
          },
          [getChannelName('set_contact_phone')]: {
            bind: 'phone'
          },
          [getChannelName('set_contact_additional_info')]: {
            bind: 'setAdditionalInfoPhone'
          },
          [getChannelName('set_receiver')]: {
            bind: 'continue'
          },
          codicel_peer_to_peer_send_warning_modal_change_receiver_cancel: {
            bind: 'continue'
          },
          transfer_dimo_disable_change_step: {
            bind: 'disableChange'
          }
        },
        out: {
          [getChannelName('register_step_phone')]: {
            bind: 'register-step'
          },
          [getChannelName('set_contact_detail')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('collapse_other_steps')]: {
            bind: 'change-step-state'
          },
          [getChannelName('change_receiver_channel')]: {
            bind: 'change-pressed'
          },
          [getChannelName('tap_icon_agenda')]: {
            bind: 'contact-icon-clicked'
          },
          [getChannelName('_CONTACT_STEP')]: {
            bind: 'contact-icon-clicked'
          },
          [getChannelName('_INPUT_STEP')]: {
            bind: 'cells-molecule-input-blur'
          }
        }
      }
    }
  };

  const modalContactSelector = {
    zone: 'app__transactional',
    tag: 'cells-modal-contact-selector',
    type: 'UI',
    properties: {
      className: isNativeiOS ? 'ios-top-padding bg-core-blue' : 'bg-core-blue',
      iOSFixedHeader: true,
      notCloseOnContactSelected: true,
      modalClass: 'mobile-transfer-contact-list remove-width',
      emptyImage: 'images/empty_state_day.svg',
      listTitle: 'codicel-peer-to-peer-recent-contact-title',
      listGroupTitle: 'codicel-peer-to-peer-contact-agenda-title',
      inputLabel: 'peer-to-peer-send-modal-contact-selector-input-text',
      emptyTitle: 'peer-to-peer-send-modal-contact-empty-title',
      emptyMessage: 'peer-to-peer-send-modal-contact-empty-text',
      cellsConnections: {
        in: {
          [getChannelName('open_contact_modal')]: {
            bind: 'open'
          },
          [getChannelName('close_contact_modal')]: {
            bind: 'close'
          },
          [getChannelName('set_large_list_items')]: {
            bind: 'largeListItems'
          },
          [getChannelName('set_group_list_items')]: {
            bind: 'groupListItems'
          },
          [getChannelName('large_contact_list_changed')]: {
            bind: 'largeContactList'
          },
          [getChannelName('set_last_contacts_send')]: {
            bind: '_listItems'
          }
        },
        out: {
          [getChannelName('selected_contact_modal')]: {
            bind: 'set-selected-contact'
          },
          [getChannelName('search_contact')]: {
            bind: 'search-text-changed'
          },
          [getChannelName('modal_visibility_changed')]: {
            bind: 'opened-changed'
          }
        }
      }
    }
  };

  const enterAmount = {
    zone: 'app__main',
    tag: 'cells-step-enter-amount',
    type: 'UI',
    properties: {
      currentStep: 3,
      maxSteps: MAX_STEPS,
      id: 'codicel-p2p-amount',
      displayedCurrentStep: 2,
      displayedMaxSteps: 3,
      notInitializeWithAttached: true,
      changeLabel: 'glomo-common-operatives-change',
      stepTitle: 'codicel-peer-to-peer-step-enter-amount-title',
      amountInputLabel: 'codicel-peer-to-peer-enter-amount-title',
      stepDescription: 'codicel-peer-to-peer-enter-amount-description',
      language: language,
      currency: localCurrency,
      localCurrency: localCurrency,
      minLimit: 0.01,
      max: '19',
      numeralPositiveOnly: true,
      notEnoughBalanceAfterKey: '',
      limitedAmountAvailableMessage: '',
      limitedAmountAvailableOfTransactionMessage: 'codicel-cells-enter-limited-amount-available-of-transaction',
      limitedAmountAvailableTransactionMessageSecondary: 'codicel-peer-to-peer-cells-step-enter-amount-available-of-transaction-secondary',
      hideAmountInMinOrMaxErrorMessage: true,
      hideInitialAmount: true,
      complexAmountErrorMaxLimitMessage: true,
      showCurrenciesInfo: false,
      simpleMaxProductMessage: true,
      hideLimitsInfo: false,
      customErrorRangeMessage: 'codicel-peer-to-peer-enter-max-amount-error-message',
      errorMessageBasedOnAccountBalance: true,
      errorBalanceMessage: 'codicel-peer-to-peer-enter-amount-available-balance-message',
      showLimitsInfoWithNoFlag: true,
      hideEmptyInfoSection: true,
      showRightCurrencyIcon: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'reset'
          },
          [getChannelName('CHANGED-CONTACT-RESET-STEP-AMOUNT')]: {
            bind: 'defaultValue'
          },
          [getChannelName('CHANGED-CONTACT-RESET-STEP-CURRENCY')]: {
            bind: 'currency'
          },
          [getChannelName('CHANGED-CONTACT-OPEN-STEP')]: {
            bind: 'collapsed'
          },
          [getChannelName('CHANGED-CONTACT-SET-ACTIVE-FALSE')]: {
            bind: 'active'
          },
          [getChannelName('product_selected')]: {
            bind: 'initCurrency'
          },
          [getChannelName('source_selected_amount')]: {
            bind: 'maxProduct'
          },
          [getChannelName('source_selected_currency')]: {
            bind: 'currency'
          },
          [getChannelName('set_min_value')]: {
            bind: 'minValue'
          },
          [getChannelName('set_max_value')]: {
            bind: 'maxValue'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('amount_change_error_limits')]: {
            bind: 'onChangePressed'
          },
          blue_transfers_collapse_amount: {
            bind: 'sendAmountWithCollapsed'
          }
        },
        out: {
          [getChannelName('register_step_amount')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_steps')]: {
            bind: 'change-step-state'
          },
          [getChannelName('set_amount_to_transfer')]: {
            bind: 'send-step-amount-value'
          },
          [getChannelName('next_step')]: {
            bind: 'send-step-amount-value'
          },
          [getChannelName('_PERSIST_AMOUNT')]: {
            bind: 'send-step-amount-value'
          },
          [getChannelName('_APP_STEP_2')]: {
            bind: 'cells-step-focus-in'
          },
          codicel_peer_to_peer_send_RESET_STATUS_BAR: {
            bind: 'dispatched-blur'
          }

        }
      }
    }
  };

  const stepConcept = {
    zone: 'app__main',
    tag: 'cells-step-concept',
    type: 'UI',
    properties: {
      id: 'codicel-p2p-concept',
      currentStep: 4,
      maxSteps: MAX_STEPS,
      displayedCurrentStep: 3,
      displayedMaxSteps: 3,
      changeLabel: 'glomo-common-operatives-change',
      title: 'codicel-peer-to-peer-send-step-concept-title',
      showConceptLabel: true,
      referenceName: 'Referencia',
      referenceClass: 'space',
      conceptClass: 'concept-in-line',
      maxLengthReference: 7,
      referenceLimit: true,
      allowedValue: '[0-9]{7}',
      allowedCharsReference: '[0-9]',
      allowedChars: '[A-Za-z0-9 ]',
      maxLength: 15,
      referenceMinLength: 7,
      errorMessageEmptyInput: 'codicel-peer-to-peer-send-concept-error-message-input-empty',
      infoMessage: 'codicel-peer-to-peer-send-concept-info-message',
      hasReferenceOwnErrorMessage: true,
      referenceInfoMessage: 'codicel-peer-to-peer-send-reference-info-message',
      errorMessage: 'codicel-peer-to-peer-send-reference-error-message',
      customClassInput: 'custom-fluid-input',
      referenceLabelClass: 'filled-subtitle',
      subReferenceClass: 'sub-reference',
      subtitleClass: 'sub-reference',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('CHANGED-CONTACT-RESET-STEP')]: {
            bind: 'reset'
          },
          [getChannelName('CHANGED-CONTACT-OPEN-STEP')]: {
            bind: 'collapsed'
          },
          [getChannelName('CHANGED-CONTACT-SET-ACTIVE-FALSE')]: {
            bind: 'active'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'reset'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('SHOW_REFERENCE')]: {
            bind: 'showReference'
          },
          [getChannelName('NEW_FORMAT_REFERENCE')]: {
            bind: 'externalReference'
          },
          [getChannelName('MAXLENGTH_CONCEPT')]: {
            bind: 'maxLength'
          },
          [getChannelName('INFOMESSAGE_CONCEPT')]: {
            bind: 'infoMessage'
          },
          [getChannelName('REQUEIRED_CONCEPT')]: {
            bind: 'isRequired'
          },
          [getChannelName('REQUIRED_CONCEPT_LABEL')]: {
            bind: 'conceptLabel'
          },
          [getChannelName('REQUIRED_REFERENCE_LABEL')]: {
            bind: 'referenceName'
          },
          [getChannelName('reset_invalid_input')]: {
            bind: 'invalidInput'
          },
          blue_transfers_set_concept: {
            bind: 'setConcept'
          },
          blue_transfers_collapse_concept: {
            bind: 'continue'
          }
        },
        out: {
          [getChannelName('register_step_concept')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_steps')]: {
            bind: 'change-step-state'
          },
          [getChannelName('summary_close')]: {
            bind: 'change-step-state'
          },
          [getChannelName('set_reference_and_concept')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('_APP_STEP_3')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('next_step_concept')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('change_concept')]: {
            bind: 'change-step-state'
          }
        }
      }
    }
  };

  const operationSummary = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-operation-summary',
    properties: {
      buttonLabel: 'codicel-peer-to-peer-summary-view-send-money',
      summaryViewTitle: 'codicel-peer-to-peer-summary-title',
      managmentFeesMessage: 'codicel-commission',
      showLegalTerms: false,
      showAddition: true,
      showLoadingSkeleton: true,
      localCurrency,
      classCommission: '',
      cellsConnections: {
        in: {
          [getChannelName('leave_page_reset')]: {
            bind: 'reset'
          },
          [getChannelName('send_summary_data')]: {
            bind: 'operation'
          }
        },
        out: {
          [getChannelName('operation_in_process')]: {
            bind: 'operation-in-process'
          },
          [getChannelName('open_success_page')]: {
            bind: 'summary-closed'
          },
          [getChannelName('_APP_STEP_OTP')]: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };

  const codicelCrypto = {
    type: 'DM',
    tag: 'glomo-codicel-crypto-dm',
    zone: 'app__main',
    properties: {
      isNative,
      keyMocks: mocksCipher,
      cellsConnections: {
        in: {
          [getChannelName('request_generate_random_key')]: {
            bind: 'generateRandomKey'
          },
          [getChannelName('request_encrypt_aes')]: {
            bind: 'encryptAES'
          },
          [getChannelName('request_decrypt_banxico_response')]: {
            bind: 'decryptAES'
          }
        },
        out: {
          [getChannelName('response_key_generated')]: {
            bind: 'random-key-generated'
          },
          [getChannelName('response_data_encrypted_aes')]: {
            bind: 'data-encrypted-aes-success'
          },
          [getChannelName('banxico_response_decrypted')]: {
            bind: 'data-decrypted-aes-success'
          }
        }
      }
    }
  };

  const banxicoAPI = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-banxico',
    properties: {
      host: HOST,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('post_clabe_search')]: {
            bind: 'postRegisteredClabeSearch'
          }
        },
        out: {
          [getChannelName('clabe_search_success')]: {
            bind: 'success-on-post-banxico-registered-clabe-search'
          },
          [getChannelName('clabe_search_error')]: {
            bind: 'error-on-post-banxico-registered-clabe-search'
          }
        }
      }
    }
  };

  const transferService = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-transfer',
    tag: 'cells-dm-global-apis-transfer-mx',
    properties: {
      host: HOST,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      transfersApiVersion: config.globalServices.versions.transfer,
      language: language,
      native: !!config.native,
      localCurrency: localCurrency,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName('request_internal_transfer')]: {
            bind: 'makeInternalTransfer'
          },
          [getChannelName('request_interbank_transfer')]: {
            bind: 'makeInterbankTransfer'
          }
        },
        out: {
          [getChannelName('response_transfer_success')]: {
            bind: 'transfer-result-changed'
          },
          [getChannelName('response_transfer_error')]: {
            bind: 'transfer-error'
          },
          response_transfer_error_fraud: {
            bind: 'high-risk-of-fraud'
          }
        }
      }
    }
  };

  const receiversAPI = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-receivers',
    properties: {
      host: HOST,
      native: !!config.native,
      receiversApiVersion: 1,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('query_magic_receiver')]: {
            bind: 'getReceiver'
          }
        },
        out: {
          [getChannelName('response_query_magic_receiver')]: {
            bind: 'set-receiver'
          },
          [getChannelName('response_query_magic_receiver_error')]: {
            bind: 'error-on-get-receiver'
          }
        }
      }
    }
  };

  const catalogsAPI = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-catalogs',
    properties: {
      host: HOST,
      native: !!config.native,
      catalogsApiVersion: '0',
      requiredToken: config.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          [getChannelName('request_catalogs_banks')]: {
            bind: 'getBanks'
          }
        },
        out: {
          [getChannelName('response_catalogs_banks_success')]: {
            bind: 'set-banks'
          },
          [getChannelName('response_catalogs_banks_error')]: {
            bind: 'error-on-get-banks'
          }
        }
      }
    }
  };

  const customersApi = {
    zone: 'app__transactional',
    tag: 'cells-dm-global-apis-customers',
    type: 'DM',
    properties: {
      host: HOST,
      contactDetailsApiVersion: config.globalServices.versions.customers,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      native: isNative,
      cellsConnections: {
        in: {
          [getChannelName('set_customer_id')]: {
            bind: 'customerId'
          },
          [getChannelName('get_customer_email')]: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getChannelName('response_email_success')]: {
            bind: 'set-customer-detail'
          },
          [getChannelName('response_email_error')]: {
            bind: 'error-on-get-customer-detail'
          }
        }
      }
    }
  };

  const contactsPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-contacts',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('request_get_all_contacts')]: {
            bind: 'getAllContacts'
          }
        },
        out: {
          [getChannelName('response_all_contacts_success')]: {
            bind: 'all-contacts-served'
          },
          [getChannelName('response_get_contacts_error')]: {
            bind: 'error'
          }
        }
      }
    }
  };

  const actionLauncher = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('share_invitation')]: {
            bind: 'share'
          }
        }
      }
    }
  };

  const nativeSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_settings_native')]: {
            bind: 'openSetting'
          }
        }
      }
    }
  };

  const cipherPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-nativeconnector-cipher',
    properties: {
      isNative,
      mocks: mocksCipher,
      cellsConnections: {
        in: {
          [getChannelName('request_encrypt_rsa_cipher')]: {
            bind: 'rsaEncrypt'
          }
        },
        out: {
          [getChannelName('response_data_encrypted_rsa_success')]: {
            bind: 'rsa-encrypt-success'
          }
        }
      }
    }
  };

  const ANALYTICS_DM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-peer-to-peer-mx-analytics',
    familyPath: 'glomo-opx-peer-to-peer-dm',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'reset'
          },
          codicel_peer_to_peer_send_init_page: {
            bind: 'fireAppOnClickStart'
          },
          [getChannelName('product_selected')]: {
            bind: 'firePageVisit'
          },
          [getChannelName('_CONTACT_STEP')]: {
            bind: 'firePageContact'
          },
          [getChannelName('_INPUT_STEP')]: {
            bind: 'firePageStarted'
          },
          [getChannelName('_APP_STEP_2')]: {
            bind: 'fireAppStep2'
          },
          [getChannelName('_PERSIST_AMOUNT')]: {
            bind: 'fireAppPersistAmount'
          },
          [getChannelName('_ANALYTICS_IS_BBVA')]: {
            bind: 'fireAppPersistBBVA'
          },
          [getChannelName('_APP_STEP_3')]: {
            bind: 'fireAppStep3'
          },
          [getChannelName('_APP_STEP_4')]: {
            bind: 'fireAppStep4'
          },
          [getChannelName('_APP_STEP_OTP')]: {
            bind: 'viewOTP'
          },
          [getChannelName('_PAGE_COMPLETED')]: {
            bind: 'fireAppCompleted'
          },
          [getChannelName('set_large_list_items')]: {
            bind: 'setSelectionList'
          },
          [getChannelName('OPEN_MODAL_INVITE_CODICEL')]: {
            bind: 'fireAppModalInvite'
          },
          [getChannelName('_INVITE_CODICEL_ACTION')]: {
            bind: 'fireAppContactInviteAction'
          },
          [getChannelName('_INVITE_CODICEL_ACTION_CLOSE')]: {
            bind: 'fireAppContactInviteAction'
          },
          [getChannelName('OPEN_ERROR_MODAL_SAME_PHONE')]: {
            bind: 'errorSamePhone'
          },
          [getChannelName('OPEN_MODAL_PERMISSION_DENIED_CONTACTS')]: {
            bind: 'openModalPermissionsDenied'
          },
          [getChannelName('OPEN_WARNING_MODAL_CHANGE_RECEIVER')]: {
            bind: 'warningChangeReceiver'
          },
          [getChannelName('OPEN_TRANSFERS_GENERIC_ERROR')]: {
            bind: 'amountChangeErrorLimits'
          },
          global_retry_error: {
            bind: 'retryError'
          }
        },
        out: {
          codicel_peer_to_peer_send_ANALYTICS_APP_ON_CLICK_START: {
            bind: 'analytics-app-on-click-start',
            analytics: ANALYTICS.APP_CLICK_START
          },
          [getChannelName('_ANALYTICS_APP_VISIT')]: {
            bind: 'analytics-app-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('_ANALYTICS_APP_STARTED')]: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('_ANALYTICS_APP_STEP_2')]: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS.APP_STEP_2
          },
          [getChannelName('_ANALYTICS_APP_STEP_3')]: {
            bind: 'analytics-app-step-3',
            analytics: ANALYTICS.APP_STEP_3
          },
          [getChannelName('_ANALYTICS_APP_STEP_4')]: {
            bind: 'analytics-app-step-4',
            analytics: ANALYTICS.APP_STEP_4
          },
          [getChannelName('_ANALYTICS_APP_STEP_OTP')]: {
            bind: 'analytics-otp-modal',
            analytics: ANALYTICS.APP_STEP_5
          },
          [getChannelName('_ANALYTICS_APP_COMPLETED')]: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS.APP_COMPLETED
          },
          [getChannelName('_ANALYTICS_MODAL_CONTACT_LIST')]: {
            bind: 'analytics-set-selection-list',
            analytics: ANALYTICS.FP_CONTACTS
          },
          [getChannelName('_ANALYTICS_MODAL_INVITE')]: {
            bind: 'analytics-modal-invite',
            analytics: ANALYTICS.FP_CONTACT_INVITATION
          },
          [getChannelName('_ANALYTICS_MODAL_SEND_INVITE')]: {
            bind: 'analytics-modal-invite-action',
            analytics: ANALYTICS.FP_CONTACT_INVITATION_ACTION
          },
          [getChannelName('_ANALYTICS_MODAL_SAME_PHONE')]: {
            bind: 'error-same-phone',
            analytics: ANALYTICS.FP_CONTACT_ERROR
          },
          [getChannelName('_ANALYTICS_PERMISSION_DENIED_CONTACTS')]: {
            bind: 'open-modal-permissions-denied',
            analytics: ANALYTICS.FP_ALLOW_ACCESS
          },
          [getChannelName('_ANALYTICS_MODAL_CHANGE_RECEIVER')]: {
            bind: 'warning-change-receiver',
            analytics: ANALYTICS.FP_CHANGE_CONTACT
          },
          [getChannelName('_ANALYTICS_RECEIVERS_ERROR')]: {
            bind: 'analytics-receivers-error',
            analytics: ANALYTICS.FP_SERVICE_ERROR
          },
          [getChannelName('_ANALYTICS_MODAL_SERVICE_ERROR_DAY')]: {
            bind: 'amount-change-error-day',
            analytics: ANALYTICS.FP_SERVICE_ERROR_DAY
          },
          [getChannelName('_ANALYTICS_MODAL_SERVICE_ERROR_MONTH')]: {
            bind: 'amount-change-error-month',
            analytics: ANALYTICS.FP_SERVICE_ERROR_MONTH
          },
          [getChannelName('_ANALYTICS_MODAL_SERVICE_ERROR_NOT_POSIBLE')]: {
            bind: 'amount-change-error-not-posible',
            analytics: ANALYTICS.FP_SERVICE_ERROR_NOT_POSIBLE
          },
          [getChannelName('_ANALYTICS_MODAL_SERVICE_ERROR_NOT_AVAILABLE')]: {
            bind: 'operation-not-available',
            analytics: ANALYTICS.FP_TRANSFER_NOT_AVAILABLE
          },
          [getChannelName('_ANALYTICS_MODAL_SERVICE_ERROR_NOT_DONE')]: {
            bind: 'operation-not-done',
            analytics: ANALYTICS.FP_OPERATION_NOT_DONE
          }
        }
      }
    }
  };

  const helpModalAricDimo = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-help-modal',
    container: true,
    attributes: {
      'justify-content': 'left'
    },
    properties: {
      id: 'confirmModalExperienceCardlessWithDrawal',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal-three-level',
      headerText: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-error-title',
      className: 'on-boarding-welcome-alert-manager',
      headerLeftIconAriaLabel: 'padlock',
      cellsConnections: {
        in: {
          global_dimo_modal_reject: {
            bind: 'open'
          },
          global_dimo_operations_modal_aric_close: {
            bind: 'close'
          }
        },
        out: {
          global_dimo_operations_modal_aric_send_exit_to_header: {
            bind: 'help-modal-header-right-primary-click',
            backStep: true
          },
          global_dimo_operations_modal_aric_close: {
            bind: 'header-main-close-icon-click'
          },
          global_dimo_send_exit_to_header: {
            bind: 'help-modal-header-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const helpModalAricDimoContentIlustration = {
    zone: 'confirmModalExperienceCardlessWithDrawal.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-clip-microillustration',
    tag: 'bbva-clip-microillustration',
    render: 'litElement',
    properties: {
      className: 'no-padding u-display--table u-margin--left u-margin-top--0 u-margin--1 u-text--left',
      microillustration: 'error',
      size: 'L'
    }
  };

  const helpModalAricDimoSubHeader = {
    zone: 'confirmModalExperienceCardlessWithDrawal.slot-content',
    type: 'UI',
    tag: 'bbva-type-text',
    render: 'litElement',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    properties: {
      text: 'alert-TRANSFER-ERROR-message',
      fontWeight: '500',
      size: 'XL',
      alignment: 'left',
      className: 'u-margin--1 u-margin-top--0'
    }
  };

  const helpModalAricDimoText = {
    zone: 'confirmModalExperienceCardlessWithDrawal.slot-content',
    type: 'UI',
    tag: 'bbva-type-text',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-top--0',
      text: 'alert-TRANSFER-ERROR-message-aric-fraud',
      alignment: 'left'
    }
  };

  const helpModalAricDimoButton = {
    zone: 'confirmModalExperienceCardlessWithDrawal.slot-footer',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--2 u-margin-bottom--2',
      text: 'alert-GENERIC-ERROR-call',
      cellsConnections: {
        out: {
          global_dimo_to_call: {
            bind: 'click'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mx-codicel-peer-to-peer-send',
    currentPage: {
      url: '/codicel-peer-to-peer-send'
    },
    pages: codicelPage,
    template,
    components: [
      lifeCycle,
      header,
      navigationHandler,
      glomoOpx,
      cipherPlugin,
      onboarding,
      productSelector,
      enterPhone,
      modalContactSelector,
      enterAmount,
      stepConcept,
      spinner,
      operationSummary,
      banxicoAPI,
      transferService,
      codicelCrypto,
      receiversAPI,
      catalogsAPI,
      customersApi,
      ANALYTICS_DM,
      helpModalAricDimo,
      helpModalAricDimoContentIlustration,
      helpModalAricDimoSubHeader,
      helpModalAricDimoText,
      helpModalAricDimoButton
    ]
  };

  localStorage.addOutStorageChannels(base.components, [CODICEL_PEER_TO_PEER_SEND_STORAGE_KEY, 'last_five_send_codicel', 'loginData'], config);

  // Add plugins
  if (config.native) {
    base.components.push(contactsPlugin);
    base.components.push(actionLauncher);
    base.components.push(nativeSettings);
  }
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'BANXICO-NOT-AVAILABLE',
      acceptRetry: { bind: 'retryRequestBanxicoQuery', component: 'glomo-opx-peer-to-peer-mx-dm' },
      acceptCallForHelp: { bind: 'handleErrorCallBBVA', component: 'glomo-opx-peer-to-peer-mx-dm' }
    },
    {
      id: 'CATALOGS-NOT-AVAILABLE',
      acceptRetry: { bind: 'requestServiceToTransfer', component: 'glomo-opx-peer-to-peer-mx-dm' },
      acceptCallForHelp: { bind: 'handleErrorCallBBVA', component: 'glomo-opx-peer-to-peer-mx-dm' }
    },
    {
      id: 'RECEIVERS-NOT-AVAILABLE',
      acceptRetry: { bind: 'requestServiceToTransfer', component: 'glomo-opx-peer-to-peer-mx-dm' },
      acceptCallForHelp: { bind: 'handleErrorCallBBVA', component: 'glomo-opx-peer-to-peer-mx-dm' }
    },
    {
      id: 'INTERBANK-NOT-AVAILABLE',
      acceptCallForHelp: { bind: 'exit', component: 'glomo-opx-peer-to-peer-mx-dm' }
    },
    {
      id: 'COMMON-ERRORS',
      acceptRetry: { bind: 'requestServiceToTransfer', component: 'glomo-opx-peer-to-peer-mx-dm' },
      acceptCallForHelp: { bind: 'handleErrorCallBBVA', component: 'glomo-opx-peer-to-peer-mx-dm' }
    }
  ]);

  // Sign connector for otp
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-transfer-mx', 'codicelPeerToPeerSend', ['transfer-successful', 'transfer-error', 'close-sign-modal']);

  return base;

};
