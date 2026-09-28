/* eslint-disable complexity, no-dupe-keys */
'use strict';

module.exports = (CONFIG) => {
  const { getLanguage, getLocalCurrency, useNames, createPrefixFromPageName, createSpinner, getVisibleChars } = require('./common/helpers/_utils');
  const localStorageApp = require('./common/_local-storage');
  const pageName = 'codiQrRequestSteps';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const analyticsPage = require('./analytics/_codiQrRequest')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        out: {
          codi_error_retry__qr_request_accept: {
            bind: 'alert-CODI-MODAL-NO-VERIFY-QR-REQUEST-accept'
          }
        }
      }
    }
  };

  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = CONFIG;
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      drawerWidth: '100%',
      headerFixed: true,
      headerHeight: 45,
      iOSFixedHeader: isNativeIos
    },
    propertiesSpherica: {
      extraHeaderClass: '',
      headerHeight: 0
    }
  };
  const modalInitFlow = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      fullHeight: true,
      headerText: 'codi-request-qr-modal-start-title',
      headerType: 'modal',
      id: 'modalStart',
      idModal: 'modalInit',
      fixedFooter: true,
      cellsConnections: {
        in: {
          [getChannelName('open_modal_first_time_qr')]: {
            bind: 'visible'
          },
          [getChannelName('set_text_btn_modal_info_flow')]: {
            bind: 'buttonText'
          }
        }
      }
    },
    propertiesSpherica: {
      closeButtonAriaLabel: 'bbva-help-modal-close-button',
      closeLabel: 'bbva-help-modal-close-button'
    }
  };
  const bbvaPanelInfoModal = {
    zone: 'modalStart.slot-content',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      microillustration: 'qr',
      heading: 'codi-qr-request-panel-info-label',
      cellsConnections: {
        in: {
          [getChannelName('set_text_panel_info_modal')]: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      microillustration: 'qrPay'
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
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
          [getChannelName('INIT_PAGE')]: {
            bind: 'init-page'
          },
          [getChannelName('INIT_PAGE_RESET_MULTISTEP')]: {
            bind: 'init-page'
          },
          [getChannelName('GET_REFERENCE')]: {
            bind: 'init-page'
          },
          codiQrRequestSteps_GET_ENROLLMENT_DATA: {
            bind: 'init-page'
          },
          codiQrRequestSteps_set_navigation: {
            bind: 'init-page'
          },
          close_control_veil: {
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
  const managerCodiQRRequest = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-qr-request',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      language: getLanguage(),
      cellsConnections: {
        in: {
          [getChannelName('BACK_STEP')]: {
            bind: 'redirectToDashboard'
          },
          codi_qr_scanner_redirection_steps_to_expenses_group: {
            bind: 'redirectToExpenses'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'showModalOutFlow'
          },
          dashboard_accounts: {
            bind: 'accounts'
          },
          [getChannelName('INIT_PAGE')]: {
            bind: 'daiCodiDai'
          },
          codi_qr_request_steps_INIT_PAGE_RESET_MULTISTEP: {
            bind: 'manageNavigation'
          },
          global_login_success: {
            bind: 'setCustomerToGlobalCache'
          },
          [getChannelName('GET_REFERENCE')]: {
            bind: 'getReferenceMixin'
          },
          [getChannelName('SHOW_MODAL_INFO_CODI')]: {
            bind: 'showModalInfoCodi'
          },
          [getChannelName('SHOW_MODAL_ACCOUNTS')]: {
            bind: 'openModalAccounts'
          },
          [getChannelName('show_modal_exit_request')]: {
            bind: 'showModalOutFlow'
          },
          [getChannelName('SELECT_AN_ACCOUNT')]: {
            bind: 'userSelectAccountStep'
          },
          [getChannelName('COMPLETE_DATA_REQUEST_QR')]: {
            bind: 'showModalInfoDataQR'
          },
          [getChannelName('SELECT_ACCOUNT')]: {
            bind: 'parseAnAccountSelect'
          },
          [getChannelName('SHOW_MODAL_WARNING_CHANGE_ACCOUNT')]: {
            bind: 'showModalWarningChangeAccounts'
          },
          [getChannelName('SET_DATA_QR')]: {
            bind: 'getDataQR'
          },
          [getChannelName('BUTTON_PANEL_FIXED')]: {
            bind: 'getDataBanxico'
          },
          [getChannelName('SET_SHA_HEX')]: {
            bind: 'generateShaEncrypt'
          },
          [getChannelName('SET_ENCRYPT_AES')]: {
            bind: 'generateCipherAES'
          },
          [getChannelName('SET_HMAC_SHA')]: {
            bind: 'generateHmacShaToBase'
          },
          [getChannelName('on_create_qr_success')]: {
            bind: 'qrCreateSuccess'
          },
          [getChannelName('on_create_qr_error')]: {
            bind: 'qrCreateError'
          },
          [getChannelName('amount_step_finished')]: {
            bind: 'handleAmountStepFinished'
          },
          [getChannelName('concept_step_finished')]: {
            bind: 'handleConceptStepFinished'
          },
          [getChannelName('account_step_finished')]: {
            bind: 'handleAccountStepFinished'
          },
          [getChannelName('date_for_voucher_page')]: {
            bind: 'handleDateVoucher'
          },
          ['connection_status_' + pageName + '_offline']: {
            bind: 'qrRequestConection'
          },
          connection_status_codiQrRequestSteps_online: {
            bind: 'qrRequestReconection'
          },
          [getChannelName('get_account_success')]: {
            bind: 'getAccountSuccess'
          },
          [getChannelName('get_account_error')]: {
            bind: 'getAccountError'
          },
          [getChannelName('external_key_generated')]: {
            bind: 'externalKeyGeneratedSuccess'
          },
          [getChannelName('post_banxico_authorization_request_success_qr')]: {
            bind: 'authorizationRequestSuccess'
          },
          [getChannelName('post_banxico_authorization_request_error_qr')]: {
            bind: 'authorizationRequestError'
          },
          codi_error_retry__qr_request_accept: {
            bind: 'retryVerification'
          },
          codi_error_exit_account_pending_qr: {
            bind: 'exitModalPendingQr'
          },
          codi_error_exit_account_pending_cancel_qr: {
            bind: 'exitModalPendingQr'
          },
          codi_error_retry__qr_request_cancel: {
            bind: 'manageBackButton'
          },
          codiQrRequestSteps_send_response_login_to_log: {
            bind: 'send-response-login-to-log'
          },
          codiQrRequestSteps_set_navigation: {
            bind: 'manageNavigation'
          }
        },
        out: {
          global_retry_error: {
            bind: 'retry-error'
          },
          [getChannelName('EXTERNAL_KEY_ACC')]: {
            bind: 'create-external-key'
          },
          [getChannelName('request_validate_account_banxico_qr')]: {
            bind: 'post-authorization-banxico-qr'
          },
          [getChannelName('set_text_btn_modal_info_flow')]: {
            bind: 'set-text-btn-modal-info-flow'
          },
          [getChannelName('set_text_panel_info_modal')]: {
            bind: 'set-text-info-modal'
          },
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          [getChannelName('SHOW_SPINNER')]: {
            bind: 'codi-qr-request-start-loading'
          },
          [getChannelName('RESPONSE')]: {
            bind: 'response'
          },
          [getChannelName('BACK_STEP')]: {
            bind: 'back-step-out-flow'
          },
          [getChannelName('set_account_id')]: {
            bind: 'set-account-id'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'request-get-account'
          },
          [getChannelName('VIEW_ALL_ACCOUNTS')]: {
            bind: 'open-modal-accounts-codi'
          },
          [getChannelName('SET_SLOT_CONTENT')]: {
            bind: 'set-list-card-modal'
          },
          [getChannelName('OPEN_BUTTON_FIXED')]: {
            bind: 'open-button-fixed-end-flow'
          },
          [getChannelName('SET_ACCOUNT_SELECT_MULTISTEP')]: {
            bind: 'set-account-select-multistep'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-modal'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-manager'
          },
          global_alert_modal_close: {
            bind: 'close-modal-warning-change-account'
          },
          [getChannelName('WARNING_CHANGE_ACCOUNTS')]: {
            bind: 'warning-change-account'
          },
          [getChannelName('SET_AMOUNT_IN_PANEL')]: {
            bind: 'set-amount-in-panel-button-fixed'
          },
          [getChannelName('SET_LABEL_IN_PANEL')]: {
            bind: 'set-label-in-panel-button-fixed'
          },
          [getChannelName('SET_INFO_IN_PANEL')]: {
            bind: 'set-info-in-panel-button-fixed'
          },
          [getChannelName('END-FLOW-MODAL-WARNING')]: {
            bind: 'codi-request-qr-end-flow'
          },
          [getChannelName('SET_REFERENCE_MULTISTEP')]: {
            bind: 'set-reference-to-multistep'
          },
          [getChannelName('CONVERT_SHA_HEX')]: {
            bind: 'convert-sha-to-hex'
          },
          [getChannelName('QR_REQUEST_CIPHER_AES')]: {
            bind: 'qr-request-cipher-aes'
          },
          [getChannelName('QR_REQUEST_ENCRYPT')]: {
            bind: 'qr-request-encrypt-hmacSha-to-base'
          },
          [getChannelName('navigate_to_onboarding')]: {
            bind: 'redirect-to-onboarding-codi',
            link: {
              page: 'codiBeginRegister',
              skipHistory: true
            }
          },
          [getChannelName('open_modal_first_time_qr')]: {
            bind: 'open-modal-first-time-qr'
          },
          global_payment_image_result: {
            bind: 'image-successful-result'
          },
          global_payment_amount_result: {
            bind: 'amount-successful-result'
          },
          global_payment_noamount_result: {
            bind: 'noamount-successful-result'
          },
          global_payment_concept_result: {
            bind: 'concept-successful-result'
          },
          global_payment_reference_result: {
            bind: 'reference-successful-result'
          },
          global_payment_title_result: {
            bind: 'title-successful-result'
          },
          global_payment_number_result: {
            bind: 'number-successful-result'
          },
          global_date_voucher_page: {
            bind: 'date-to-locale-date-string'
          },
          global_hour_voucher_page: {
            bind: 'hour-to-voucher-page'
          },
          [getChannelName('OPEN_MODAL_NO_CONNECTION_QR_REQUEST')]: {
            bind: 'request-no-connection-qr-steps'
          },
          redirection_success_to_expenses: {
            bind: 'redirect-to-expenses-group'
          },
          [getChannelName('navigate_request_qr_success')]: {
            bind: 'navigate-to-request-qr-success',
            link: {
              page: 'codiQrRequestSuccessfulScreen'
            }
          },
          [getChannelName('request_post_login_banxico')]: {
            bind: 'request-login-banxico-verify'
          },
          [getChannelName('OPEN_MODAL_ACCOUNT_NO_VERIFY')]: {
            bind: 'codi-modal-not-verify',
            analytics: analyticsPage.errorUnverifiedAccount
          },
          [getChannelName('codi_qr_payment_successful_receive')]: {
            bind: 'request-successful-codi-qr'
          },
          [getChannelName('reset_multistep_finish_step')]: {
            bind: 'reset-multistep-finish-step'
          },
          [getChannelName('REQUEST_QR_CREATOR')]: {
            bind: 'create-qr-request'
          },
          codiQrRequestSteps_send_response_autorization_request_to_log: {
            bind: 'send-response-autorization-request-to-log'
          },
          [getChannelName('analytic_qr_request_set_account')]: {
            bind: 'analytic-qr-request-set-account'
          },
          [getChannelName('analytic_qr_request_set_concept')]: {
            bind: 'analytic-qr-request-set-concept'
          },
          [getChannelName('analytic_qr_request_set_amount')]: {
            bind: 'analytic-qr-request-set-amount'
          },
          [getChannelName('analytic_qr_request_completed')]: {
            bind: 'analytic-qr-request-completed',
            analytics: analyticsPage.appCompleted
          },
          codi_qr_request_error_retry_exit: {
            bind: 'exit-error-retry',
            backStep: true
          },
          codi_qr_request_steps_analytic_desconection_internet: {
            bind: 'internet-reconnection',
            analytics: analyticsPage.errorLoad
          },
          codi_qr_request_steps_do_not_show_onboarding: {
            bind: 'do-not-show-onboarding'
          },
          codi_qr_request_steps_show_onboarding: {
            bind: 'show-onboarding'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          in: {
            codi_error_retry__qr_request_accept_spherica: {
              bind: 'retryVerification'
            }
          },
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-alert-manager'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings',
            'codi_error_retry__qr_request_accept'
          ]
        }
      }
    }
  };
  const codicelCrypto = {
    type: 'DM',
    tag: 'glomo-codicel-crypto-dm',
    zone: 'app__main',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('CONVERT_SHA_HEX')]: {
            bind: 'generateSha512InHex'
          },
          [getChannelName('QR_REQUEST_CIPHER_AES')]: {
            bind: 'encryptAES'
          },
          [getChannelName('QR_REQUEST_ENCRYPT')]: {
            bind: 'generateHmacSha256InBase64'
          },
          [getChannelName('EXTERNAL_KEY_ACC')]: {
            bind: 'createExternalKeyAccounts'
          }
        },
        out: {
          [getChannelName('SET_SHA_HEX')]: {
            bind: 'sha-512-in-hex-generated'
          },
          [getChannelName('SET_ENCRYPT_AES')]: {
            bind: 'data-encrypted-aes-success'
          },
          [getChannelName('SET_HMAC_SHA')]: {
            bind: 'hmac-sha-256-in-base64-generated'
          },
          [getChannelName('external_key_generated')]: {
            bind: 'external-key-generated'
          }
        }
      }
    }
  };
  const accountsApi = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts',
    properties: {
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('set_account_id')]: {
            bind: 'accountId'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'getAccount'
          }
        },
        out: {
          [getChannelName('get_account_success')]: {
            bind: 'get-on-get-account'
          },
          [getChannelName('get_account_error')]: {
            bind: 'error-on-get-account'
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
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('request_post_login_banxico')]: {
            bind: 'postLogin'
          },
          [getChannelName('request_validate_account_banxico_qr')]: {
            bind: 'postAuthorizationRequest'
          }
        },
        out: {
          [getChannelName('post_banxico_authorization_request_success_qr')]: {
            bind: 'success-on-post-banxico-authorization-request'
          },
          [getChannelName('post_banxico_authorization_request_error_qr')]: {
            bind: 'error-on-post-banxico-authorization-request'
          }
        }
      }
    }
  };
  const multistepCodiQrPaymentsP2mRequest = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-codi-qr-payments-p2m-request',
    tagSpherica: 'bbva-multistep-codi-qr-payments-p2m-request-spherica',
    familyPath: '@glomo-web-components/bbva-multistep-codi-qr-payments-p2m-request',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-codi-qr-payments-p2m-request-spherica',
    render: 'litElement',
    properties: {
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      helpIcon: 'bbva:help',
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setAmountLimitRequest'
          },
          [getChannelName('INIT_PAGE_RESET_MULTISTEP')]: {
            bind: 'resetMultistep'
          },
          [getChannelName('WARNING_CHANGE_ACCOUNTS')]: {
            bind: 'resetMultistep'
          },
          [getChannelName('reset_multistep_finish_step')]: {
            bind: 'resetMultistep'
          },
          [getChannelName('RESPONSE')]: {
            bind: 'dataContracts'
          },
          [getChannelName('SET_REFERENCE_MULTISTEP')]: {
            bind: 'referenceRequest'
          },
          [getChannelName('SET_ACCOUNT_SELECT_MULTISTEP')]: {
            bind: 'bindAccountSelectSummaryProperty'
          }
        },
        out: {
          [getChannelName('SHOW_MODAL_INFO_CODI')]: {
            bind: 'open-modal-info-codi'
          },
          [getChannelName('SHOW_MODAL_ACCOUNTS')]: {
            bind: 'codi-qr-payments-p2m-full-modal-accounts'
          },
          [getChannelName('SELECT_AN_ACCOUNT')]: {
            bind: 'multistep-select-an-account',
            analytics: analyticsPage.appStarted
          },
          [getChannelName('COMPLETE_DATA_REQUEST_QR')]: {
            bind: 'multistep-request-qr-data-complete'
          },
          [getChannelName('SHOW_MODAL_WARNING_CHANGE_ACCOUNT')]: {
            bind: 'codi-qr-payments-p2m-create-full-modal-warning'
          },
          [getChannelName('SET_DATA_QR')]: {
            bind: 'codi-qr-payments-p2p-data-request-complete'
          },
          [getChannelName('amount_step_finished')]: {
            bind: 'amount-step-finished'
          },
          [getChannelName('concept_step_finished')]: {
            bind: 'concept-step-finished'
          },
          [getChannelName('account_step_finished')]: {
            bind: 'account-step-finished'
          },
          [getChannelName('CLOSE_BUTTON_FIXED')]: {
            bind: 'close-button-fixed-end-flow'
          },
          [getChannelName('date_for_voucher_page')]: {
            bind: 'concept-step-finished'
          },
          [getChannelName('SEND_QR_INFO')]: {
            bind: 'send-qr-info'
          },
          [getChannelName('show_modal_exit_request')]: {
            bind: 'close-header-main'
          },
          [getChannelName('BUTTON_PANEL_FIXED')]: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    },
    propertiesSpherica: {
      visibleChars: getVisibleChars(CONFIG)('card')
    }
  };
  const qrCreator = {
    zone: 'app__main',
    tag: 'bbva-nativeconnector-bbva-qr-creator',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr-creator',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('SEND_QR_INFO')]: {
            bind: 'contentQr'
          },
          [getChannelName('REQUEST_QR_CREATOR')]: {
            bind: 'generateQr'
          }
        },
        out: {
          [getChannelName('on_create_qr_success')]: {
            bind: 'bbva-qr-creator-code-success'
          },
          [getChannelName('on_create_qr_error')]: {
            bind: 'bbva-qr-creator-code-error'
          }
        }
      }
    }
  };
  const productSelectorAccountsModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: 'modal-product-selector-accounts-modal',
      className: isNativeIos ? 'ios-top-padding__header' : '',
      modalTitle: 'codi-qr-request-accounts',
      closeButtonLabel: 'codi-qr-request-accounts-close',
      cellsConnections: {
        in: {
          [getChannelName('VIEW_ALL_ACCOUNTS')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('SELECT_ACCOUNT')]: {
            bind: 'select-product'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: isNativeIos
    }
  };


  const managerCodiLog = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-unified-log',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          native_user_id: {
            bind: 'numberPhone'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
          },
          codiQrRequestSteps_GET_ENROLLMENT_DATA: {
            bind: 'getEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_error: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_lost_internet_log_success: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_lost_internet_log_error: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_unified_log_timeout_session_key_success: {
            bind: 'setTimeoutSessionVerified'
          },
          global_storage_get_unified_log_timeout_session_key_error: {
            bind: 'setTimeoutSessionVerified'
          },
          codi_session_timeout_expired: {
            bind: 'saveInLocalstorageTimeout'
          },
          connection_status_codiQrRequestSteps_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiQrRequestSteps_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiQrRequestSteps_send_response_login_to_log: {
            bind: 'webServiceConsumeLog'
          },
          codiQrRequestSteps_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiQrRequestSteps_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          },
          codiQrRequestSteps_send_response_autorization_request_to_log: {
            bind: 'webServiceConsumeLog'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiQrRequestSteps_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiQrRequestSteps_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const dataProviderBanxico = {
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: banxicoApi,
      cellsConnections: {
        in: {
          codiQrRequestSteps_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiQrRequestSteps_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiQrRequestSteps_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiQrRequestSteps_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };
  const managerAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-codi',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('analytic_qr_request_set_account')]: {
            bind: 'setAccountQrRequest'
          },
          [getChannelName('analytic_qr_request_set_amount')]: {
            bind: 'setAmountQrRequest'
          },
          [getChannelName('analytic_qr_request_set_concept')]: {
            bind: 'setConceptQrRequest'
          },
          codi_qr_request_steps_show_onboarding: {
            bind: 'pageViewOnboarding'
          },
          codi_qr_request_steps_help_modal_footer_button_click: {
            bind: 'pageVisitAfterOnboarding'
          },
          codi_qr_request_steps_do_not_show_onboarding: {
            bind: 'pageVisitConfig'
          }
        },
        out: {
          [getChannelName('analytic_qr_request_send_account')]: {
            bind: 'analytic-qr-request-account',
            analytics: analyticsPage._stepConfiguration('quantityAmount')
          },
          [getChannelName('analytic_qr_request_send_amount')]: {
            bind: 'analytic-qr-request-amount',
            analytics: analyticsPage._stepConfiguration('concept')
          },
          [getChannelName('analytic_qr_request_send_concept')]: {
            bind: 'analytic-qr-request-concept',
            analytics: analyticsPage._stepConfiguration('confirmation')
          },
          codi_qr_request_steps_analytic_qr_request_page_visit: {
            bind: 'analytic-qr-request-page-visit',
            analytics: analyticsPage.appPageVisit
          },
          codi_qr_request_steps_analytic_qr_request_page_view: {
            bind: 'analytic-qr-request-page-view',
            analytics: analyticsPage.footInfo
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-qr-request-steps',
    currentPage: {
      url: `/${pageName}`
    },
    pages,
    template,
    components: [
      modalInitFlow,
      bbvaPanelInfoModal,
      createSpinner(CONFIG),
      lifeCycle,
      managerCodiQRRequest,
      accountsApi,
      banxicoAPI,
      codicelCrypto,
      multistepCodiQrPaymentsP2mRequest,
      productSelectorAccountsModal,
      qrCreator,
      managerCodiLog,
      dataProviderBanxico,
      cellsConnectionStatus(pageName),
      managerAnalytics
    ]
  };
  localStorageApp.addOutStorageChannels(base.components, [
    'codi_payments_information',
    'codi_request_qr',
    'enrollment_codi_key',
    'banxico_push_status',
    'codi_banxico_request_acc',
    'login_banxico_request_body_codi',
    'flag_codi_qr_request_visited',
    'codi_pending_accounts',
    'registration_completed_codi',
    'lost_internet_log',
    'unified_log_timeout_session_key',
    'codi_historical_notification'
  ], CONFIG);
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'QR-CREATE-ACCOUNT',
      acceptRetry: { bind: 'getInfoAccountValidation', component: 'bbva-manager-codi-qr-request' },
      cancelRetry: { bind: 'goPageBack', component: 'bbva-manager-codi-qr-request' },
      acceptCallForHelp: { bind: 'callBBVALine', component: 'bbva-manager-codi-qr-request' }
    },
    {
      id: 'QR-CREATE-NOT-AVAILABLE',
      acceptRetry: { bind: 'dataEnrollmentSuccess', component: 'bbva-manager-codi-qr-request' },
      cancelRetry: { bind: 'goPageBack', component: 'bbva-manager-codi-qr-request' },
      acceptCallForHelp: { bind: 'callBBVALine', component: 'bbva-manager-codi-qr-request' }
    }
  ]);

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
