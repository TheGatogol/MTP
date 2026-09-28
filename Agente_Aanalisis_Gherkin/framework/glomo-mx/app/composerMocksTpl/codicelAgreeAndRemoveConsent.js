/* eslint-disable max-statements, no-shadow */
'use strict';

const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');

const { useNames, createPrefixFromPageName, createSpinner } = utils;
const PAGE_NAME = 'codicelAgreeAndRemoveConsent';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

module.exports = (config) => {
  const ANALYTICS = require('./analytics/_codicelAgreeAndRemoveConsent')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const codicelAgreeAndRemoveConsentPage = page(config)(PAGE_NAME);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config, isSpherica);
  const localStorage = require('./common/_local-storage');

  const isNative = !!config.native;
  const isNativeiOS = !!config.nativeIos;
  const mocksCipher = config.mocksCipher;

  const customInitEvents = {
    ['init-custom-event-codicel-agree-and-remove-consent']: true,
    ['swipe-menu-enabled']: false
  };

  const spinnerWithText = createSpinner(config);
  spinnerWithText.properties.id = 'spinner-with-text';
  spinnerWithText.properties.topMessage = '';
  spinnerWithText.properties.messages = [ 'codicel-consent-spinner-text' ];
  spinnerWithText.properties.spinnerWithText = true;
  spinnerWithText.tagSpherica = 'cells-spinner-veil-spherica';

  const glomoAlertManager = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          codicel_agree_and_remove_consent_CODICEL_CONSENT_OPEN_MODAL_SPHERICA: {
            bind: 'openWithSettings'
          }
        },
        out: {
          codicel_agree_and_remove_consent_CODICEL_AGREE_CLOSE_MODAL: {
            bind: 'alert-CODICEL-AGREE-INIT-MODAL-cancel'
          },
          codicel_agree_and_remove_consent_CODICEL_AGREE_ACCEPT_MODAL: {
            bind: 'alert-CODICEL-AGREE-INIT-MODAL-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_AGREE_TERMS_ACCEPT_MODAL: {
            bind: 'alert-CODICEL-AGREE-TERMS-MODAL-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_EXIT_OPERATIVE: {
            bind: 'alert-CODICEL-AGREE-EXIT-MODAL-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_EXIT_OPERATIVE_EXIT: {
            bind: 'alert-CODICEL-AGREE-EXIT-MODAL-cancel'
          },
          codicel_agree_and_remove_consent_CODICEL_OPERATION_SUCCESS_MODAL_EXIT: {
            bind: 'alert-CODICEL-OPERATION-SUCCESS-MODAL-cancel'
          }
        }
      }
    }
  };

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      animationType: 'verticalUp',
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true,
      footerFixed: true,
      className: isNativeiOS ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeiOS,
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
          }
        },
        out: {
          [getChannelName('scroll_complete')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'glomo-opx-template-spherica',
      type: 'modal'
    })
  };

  const lifeCycle = {
    zone: 'app__header',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents,
      private: true,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          },
          [getChannelName('CODICEL_EXIT_OPERATIVE')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-custom-event-codicel-agree-and-remove-consent'
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
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'focusOnTitle'
          },
          [getChannelName('SET_HEADER_TITLE')]: {
            bind: 'titleName'
          }
        },
        out: {
          [getChannelName('CODICEL_AGREE_EXIT_OPERATIVE')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-molecule-header-spherica',
      type: 'modal'
    })
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'codicel-agree-and-remove-consent-back-close-page',
      cellsConnections: {
        in: {
          [getChannelName('CODICEL_OPERATION_SUCCESS_EXIT')]: {
            bind: 'goBack'
          },
          [getChannelName('CODICEL_EXIT_OPERATIVE')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('CLOSE_PAGE')]: {
            bind: 'codicel-agree-and-remove-consent-back-close-page',
            backStep: true,
            'forward-to-native': true
          }
        }
      }
    }
  };

  const images = {
    error: 'images/errors/error.svg',
    success: './images/success.svg',
    sendMoney: isSpherica ? './images/spherica/errors/send-money-app-glass.png' : './images/cardlessWithdrawal/money-app-dollar.svg',
    deviceError: isSpherica ? './images/spherica/errors/device-error-glass.png' : './images/errors/device_error.svg'
  };

  const consentManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-codicel-consent-manager',
    properties: {
      images,
      isNative,
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'handlePublicKey'
          },
          dashboard_accounts: {
            bind: 'globalAccounts'
          },
          native_user_id: {
            bind: 'phone'
          },
          global_login_success: {
            bind: 'setPhoneInWeb'
          },
          global_login_success_indicators: {
            bind: 'dashboardData'
          },
          global_account_set_success_response: {
            bind: 'accountsData'
          },
          global_client_id: {
            bind: 'clientId'
          },
          global_storage_get_loginData_success: {
            bind: 'handleGlobalLoginData'
          },
          global_storage_get_loginData_error: {
            bind: 'handleGlobalLoginData'
          },
          navigation_product_detail_to_codicel_agree_and_remove_consent: {
            bind: 'isVinculatedGlobal'
          },
          navigation_transfer_review_to_codicel_agree_and_remove_consent: {
            bind: 'isVinculatedGlobal'
          },
          navigation_product_detail_to_codicel_remove_consent: {
            bind: 'setIsVinculatedTrue'
          },
          navigation_product_detail_to_codicel_agree_consent: {
            bind: 'setIsVinculatedFalse'
          },
          blue_navigate_enroll_costumer_set_account: {
            bind: 'account'
          },
          blue_navigate_enroll_costumer_set_clabe: {
            bind: 'CLABE'
          },

          // General
          [getChannelName('init_page')]: {
            bind: 'init'
          },

          // Exit
          [getChannelName('CODICEL_AGREE_CLOSE_MODAL')]: {
            bind: 'confirmExit'
          },
          [getChannelName('CODICEL_AGREE_EXIT_OPERATIVE')]: {
            bind: 'confirmExit'
          },
          [getChannelName('CODICEL_OPERATION_SUCCESS_MODAL_EXIT')]: {
            bind: 'exit'
          },
          [getChannelName('CODICEL_OPERATION_SUCCESS_MODAL_CANCEL')]: {
            bind: 'exit'
          },
          codicel_agree_and_remove_consent_get_account_success: {
            bind: 'successClabeAccount'
          },
          codicel_agree_and_remove_consent_get_account_error: {
            bind: 'handleDispatchNoDataModal'
          },

          // Requests
          [getChannelName('CODICEL_AGREE_ACCEPT_MODAL')]: {
            bind: 'requestClientData'
          },
          [getChannelName('CODICEL_CONSENT_UPDATE')]: {
            bind: 'requestConsentUpdate'
          },

          // Handlers
          [getChannelName('CODICEL_AGREE_OPEN_TERMS')]: {
            bind: 'handleOpenTerms'
          },
          [getChannelName('CODICEL_AGREE_TERMS_ACCEPT_MODAL')]: {
            bind: 'handleAgreedTerms'
          },
          [getChannelName('CHECKBOX_TOGGLED')]: {
            bind: 'handleOpenTerms'
          },
          [getChannelName('REQUEST_VINCULATE_ACCOUNT')]: {
            bind: 'handleAcceptButtonClick'
          },

          // SERVICES
          [getChannelName('AGREE_CONSENT_SUCCESS')]: {
            bind: 'handleOnSuccessAgreeConsent'
          },
          [getChannelName('AGREE_CONSENT_ERROR')]: {
            bind: 'handleOnErrorAgreeConsent'
          },
          [getChannelName('REMOVE_CONSENT_SUCCESS')]: {
            bind: 'handleOnSuccessRemoveConsent'
          },
          [getChannelName('REMOVE_CONSENT_ERROR')]: {
            bind: 'handleOnErrorRemoveConsent'
          },
          [getChannelName('RESPONSE_RANDOM_KEY_GENERATED')]: {
            bind: 'handleResponseKeyGenerated'
          },
          [getChannelName('RESPONSE_DATA_ENCRIPTED_AES')]: {
            bind: 'handleResponseDataCipheredAes'
          },
          [getChannelName('RESPONSE_DATA_ENCRYPTED_RSA')]: {
            bind: 'handleResponseDataCipheredRsa'
          },
          [getChannelName('RESPONSE_DATA_DECRYPTED_AES')]: {
            bind: 'handleResponseDataDecryptedRsa'
          },

          // Error Modal
          [getChannelName('CODICEL_OPERATION_ERROR_ACCEPT')]: {
            bind: 'handleErrorModalAccept'
          },
          [getChannelName('CODICEL_OPERATION_ERROR_CANCEL')]: {
            bind: 'handleErrorModalCancel'
          },
          [getChannelName('CODICEL_EXIT_OPERATIVE_EXIT')]: {
            bind: 'handleExitCancel'
          },
          [getChannelName('response_evidences_success')]: {
            bind: 'handleEvidencesSuccess'
          },

          // Global Only
          [getChannelName('RESPONSE_USER_DATA_SUCCESS')]: {
            bind: 'handleCustomersSuccessResponse'
          },
          [getChannelName('RESPONSE_USER_DATA_ERROR')]: {
            bind: 'handleCustomersErrorResponse'
          },
          [getChannelName('RESPONSE_CIPHER_ERROR')]: {
            bind: 'handleErrorOnCipher'
          },
          [getChannelName('CODICEL_OPERATION_ERROR_DATA_ACCEPT')]: {
            bind: 'exit'
          },
          [getChannelName('CODICEL_OPERATION_ERROR_DATA_CANCEL')]: {
            bind: 'exit'
          }
        },
        out: {
          [getChannelName('reset_scroll')]: {
            bind: 'reset-scroll'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },

          // Local storage
          global_set_in_storage: {
            bind: 'set-local-storage-codicel'
          },
          global_codicel_update_product_detail_account: {
            bind: 'codicel-update-product-detail-account'
          },
          global_codicel_consent_status_updated: {
            bind: 'codicel-update-entrypoint-status'
          },

          // Set properties
          [getChannelName('SET_CLIENT_DATA')]: {
            bind: 'set-more-product-client-info'
          },
          [getChannelName('SET_CHECKBOX_LABEL')]: {
            bind: 'set-checkbox-label'
          },
          [getChannelName('SET_BUTTONS_CONFIG')]: {
            bind: 'set-buttons-config'
          },
          [getChannelName('SET_HEADER_TITLE')]: {
            bind: 'set-header-title'
          },

          // Reset / Exit
          [getChannelName('CODICEL_RESET_DISABLE_CHECKBOX')]: {
            bind: 'codicel-disable-checkbox'
          },
          [getChannelName('CODICEL_RESET_UNCHECK_CHECKBOX')]: {
            bind: 'codicel-uncheck-checkbox'
          },
          [getChannelName('CODICEL_EXIT_OPERATIVE')]: {
            bind: 'codicel-exit-operative'
          },

          // Modals
          [getChannelName('CODICEL_CONSENT_OPEN_MODAL')]: {
            bind: 'codicel-consent-open-modal'
          },

          // Controllers
          [getChannelName('CHECKBOX_ENABLE_VINCULATE')]: {
            bind: 'codicel-enable-vinculate'
          },
          [getChannelName('CHECKBOX_DISABLE_VINCULATE')]: {
            bind: 'codicel-disable-vinculate'
          },
          [getChannelName('AGREED_TERMS_ENABLE_CHECKBOX')]: {
            bind: 'codicel-agreed-terms-enable-checkbox'
          },

          // SERVICES
          [getChannelName('POST_AGREE_CONSENT_REQUEST')]: {
            bind: 'request-agree-consent'
          },
          [getChannelName('POST_REMOVE_CONSENT_REQUEST')]: {
            bind: 'request-remove-consent'
          },

          // CIFRADO
          [getChannelName('REQUEST_GENERATE_RANDOM_KEY')]: {
            bind: 'generate-random-key'
          },
          [getChannelName('REQUEST_ENCRYPT_AES')]: {
            bind: 'cipher-string-with-aes'
          },
          [getChannelName('REQUEST_ENCRYPT_RSA')]: {
            bind: 'request-encrypt-data-with-rsa'
          },
          [getChannelName('REQUEST_DECRYPT_AES')]: {
            bind: 'decrypt-banxico-response-aes'
          },

          // ANALYTICS
          [getChannelName('ANALYTICS_CODICEL_OPERATION_SUCCESS_MODAL')]: {
            bind: 'codicel-open-operation-success-modal'
          },
          [getChannelName('ANALYTICS_CODICEL_CONFIRM_UNLINK_MODAL')]: {
            bind: 'codicel-confirm-unlink-modal'
          },
          [getChannelName('ANALYTICS_SET_CLIENT_DATA')]: {
            bind: 'set-more-product-client-info'
          },
          [getChannelName('ANALYTICS_AGREE_OPEN_TERMS_MODAL')]: {
            bind: 'codicel-consent-open-modal'
          },
          [getChannelName('ANALYTICS_CHECKBOX_ENABLE_VINCULATE')]: {
            bind: 'codicel-enable-vinculate'
          },
          global_get_from_storage: {
            bind: 'get-client-id-local-storage'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [getChannelName('request_evidences_codicel')]: {
            bind: 'request-evidences-codicel'
          },
          codicel_agree_and_remove_consent_SEND_ACCOUNT_ID: {
            bind: 'send-account-id'
          },
          codicel_agree_and_remove_consent_GET_CLABE_ACCOUNT: {
            bind: 'get-account-clabe'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      alertBoxVariant: 'primary-alt',
      newCellsConnections: {
        add: {
          in: {
            codicel_agree_and_remove_consent_CODICEL_AGREE_TERMS_CANCEL_MODAL: {
              bind: 'handleAgreedTerms'
            },
            codicel_agree_and_remove_consent_CHECKBOX_TOGGLED: {
              bind: 'handleOpenTerms'
            }
          },
          out: {
            codicel_agree_and_remove_consent_CODICEL_CONSENT_OPEN_MODAL_SPHERICA: {
              bind: 'codicel-consent-open-modal'
            },
            codicel_agree_and_remove_consent_CODICEL_ENABLE_VINCULATE: {
              bind: 'codicel-enable-vinculate'
            },
            codicel_agree_and_remove_consent_CODICEL_DISABLE_VINCULATE: {
              bind: 'codicel-disable-vinculate'
            }
          }
        },
        remove: {
          out: [
            'codicel_agree_and_remove_consent_CODICEL_CONSENT_OPEN_MODAL',
            'codicel_agree_and_remove_consent_CHECKBOX_ENABLE_VINCULATE',
            'codicel_agree_and_remove_consent_CHECKBOX_DISABLE_VINCULATE'
          ]
        }
      }
    }
  };

  const productMoreInfo = {
    zone: 'app__main',
    tag: 'cells-product-more-info',
    tagSpherica: 'cells-product-more-info-spherica',
    type: 'UI',
    properties: {
      className: '',
      skeletonItems: 4,
      productType: 'account',
      cellsConnections: {
        in: {
          [getChannelName('SET_CLIENT_DATA')]: {
            bind: 'product'
          }
        },
        out: {
          [getChannelName('CODICEL_AGREE_OPEN_TERMS')]: {
            bind: 'cells-product-more-info-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'padding-bottom-0',
      withoutBackground: true,
      variant: 'primary-alt-white',
      newCellsConnections: {
        remove: {
          out: [
            'codicel_agree_and_remove_consent_CODICEL_AGREE_OPEN_TERMS'
          ]
        }
      }
    }
  };

  const checkboxButton = {
    zone: 'app__main',
    tag: 'cells-checkbox-button',
    tagSpherica: 'cells-checkbox-button-spherica',
    type: 'UI',
    properties: {
      className: 'u-margin--1',
      cellsConnections: {
        in: {
          [getChannelName('AGREED_TERMS_ENABLE_CHECKBOX')]: {
            bind: 'enable'
          },
          [getChannelName('CODICEL_RESET_DISABLE_CHECKBOX')]: {
            bind: 'disable'
          },
          [getChannelName('CODICEL_RESET_UNCHECK_CHECKBOX')]: {
            bind: 'uncheck'
          },
          [getChannelName('SET_CHECKBOX_LABEL')]: {
            bind: 'descriptionInfo'
          }
        },
        out: {
          [getChannelName('CHECKBOX_TOGGLED')]: {
            bind: 'cells-checkbox-button-toggled'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      className: 'u-margin--1 u-margin-bottom--0-5 u-margin-top--0',
      newCellsConnections: {
        add: {
          in: {
            codicel_agree_and_remove_consent_CODICEL_DISABLE_VINCULATE: {
              bind: 'uncheck'
            }
          }
        },
        remove: {
          in: [
            'codicel_agree_and_remove_consent_AGREED_TERMS_ENABLE_CHECKBOX',
            'codicel_agree_and_remove_consent_CODICEL_RESET_DISABLE_CHECKBOX',
            'codicel_agree_and_remove_consent_CODICEL_RESET_UNCHECK_CHECKBOX'
          ]
        }
      }
    }
  };

  const confirmButtons = {
    zone: 'app__main',
    tag: 'cells-confirm-buttons',
    tagSpherica: 'cells-confirm-buttons-spherica',
    type: 'UI',
    properties: {
      className: 'padding-sides',
      unfixed: true,
      cellsConnections: {
        in: {
          [getChannelName('CHECKBOX_ENABLE_VINCULATE')]: {
            bind: 'enablePrimaryButton'
          },
          [getChannelName('CHECKBOX_DISABLE_VINCULATE')]: {
            bind: 'disablePrimaryButton'
          },
          [getChannelName('SET_BUTTONS_CONFIG')]: {
            bind: 'config'
          }
        },
        out: {
          [getChannelName('REQUEST_VINCULATE_ACCOUNT')]: {
            bind: 'go-to-next'
          },
          [getChannelName('CODICEL_AGREE_EXIT_OPERATIVE')]: {
            bind: 'new-operation'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid',
      newCellsConnections: {
        add: {
          in: {
            codicel_agree_and_remove_consent_CODICEL_ENABLE_VINCULATE: {
              bind: 'enablePrimaryButton'
            },
            codicel_agree_and_remove_consent_CODICEL_DISABLE_VINCULATE: {
              bind: 'disablePrimaryButton'
            }
          }
        },
        remove: {
          in: [
            'codicel_agree_and_remove_consent_CHECKBOX_ENABLE_VINCULATE',
            'codicel_agree_and_remove_consent_CHECKBOX_DISABLE_VINCULATE'
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
      isNative,
      keyMocks: mocksCipher,
      cellsConnections: {
        in: {
          [getChannelName('REQUEST_GENERATE_RANDOM_KEY')]: {
            bind: 'generateRandomKey'
          },
          [getChannelName('REQUEST_ENCRYPT_AES')]: {
            bind: 'encryptAES'
          },
          [getChannelName('REQUEST_DECRYPT_AES')]: {
            bind: 'decryptAES'
          }
        },
        out: {
          [getChannelName('RESPONSE_RANDOM_KEY_GENERATED')]: {
            bind: 'random-key-generated'
          },
          [getChannelName('RESPONSE_DATA_ENCRIPTED_AES')]: {
            bind: 'data-encrypted-aes-success'
          },
          [getChannelName('RESPONSE_DATA_DECRYPTED_AES')]: {
            bind: 'data-decrypted-aes-success'
          },
          [getChannelName('RESPONSE_CIPHER_ERROR')]: {
            bind: 'data-decrypted-aes-error'
          },
          [getChannelName('RESPONSE_CIPHER_ERROR')]: {
            bind: 'data-encrypted-aes-error'
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
          [getChannelName('REQUEST_ENCRYPT_RSA')]: {
            bind: 'rsaEncrypt'
          }
        },
        out: {
          [getChannelName('RESPONSE_DATA_ENCRYPTED_RSA')]: {
            bind: 'rsa-encrypt-success'
          },
          [getChannelName('RESPONSE_CIPHER_ERROR')]: {
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
          global_action_launcher_dialer: {
            bind: 'openDialer'
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
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('POST_AGREE_CONSENT_REQUEST')]: {
            bind: 'postRegisteredClabe'
          },
          [getChannelName('POST_REMOVE_CONSENT_REQUEST')]: {
            bind: 'postRegisteredClabeDelete'
          }
        },
        out: {
          [getChannelName('AGREE_CONSENT_SUCCESS')]: {
            bind: 'success-on-post-banxico-registered-clabe'
          },
          [getChannelName('AGREE_CONSENT_ERROR')]: {
            bind: 'error-on-post-banxico-registered-clabe'
          },
          [getChannelName('REMOVE_CONSENT_SUCCESS')]: {
            bind: 'success-on-post-banxico-registered-clabe-delete'
          },
          [getChannelName('REMOVE_CONSENT_ERROR')]: {
            bind: 'error-on-post-banxico-registered-clabe-delete'
          },
          [getChannelName('ANALYTICS_AGREE_CONSENT_SUCCESS')]: {
            bind: 'success-on-post-banxico-registered-clabe'
          },
          [getChannelName('ANALYTICS_CODICEL_CONFIRM_UNLINK_MODAL')]: {
            bind: 'success-on-post-banxico-registered-clabe-delete'
          }
        }
      }
    }
  };

  const evidencesAPI = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-evidences',
    properties: {
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('request_evidences_codicel')]: {
            bind: 'getListEvidences'
          }
        },
        out: {
          [getChannelName('response_evidences_success')]: {
            bind: 'success-on-get-list-evidences'
          },
          [getChannelName('response_evidences_error')]: {
            bind: 'error-on-get-list-evidences'
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
      host: config.globalServices.host,
      native: config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      accountsApiVersion: config.globalServices.versions.accounts,
      cellsConnections: {
        in: {
          codicel_agree_and_remove_consent_SEND_ACCOUNT_ID: {
            bind: 'accountId'
          },
          codicel_agree_and_remove_consent_GET_CLABE_ACCOUNT: {
            bind: 'getAccount'
          }
        },
        out: {
          codicel_agree_and_remove_consent_get_account_success: {
            bind: 'get-on-get-account'
          },
          codicel_agree_and_remove_consent_get_account_error: {
            bind: 'error-on-get-account'
          }
        }
      }
    }
  };

  const ANALYTICS_DM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-codicel-consent-manager-analytics',
    familyPath: 'glomo-codicel-consent-manager',
    properties: {
      cellsConnections: {
        in: {
          navigation_product_detail_to_codicel_agree_and_remove_consent: {
            bind: 'isVinculatedGlobal'
          },

          // Temporary Entrypoint
          navigation_product_detail_to_codicel_remove_consent: {
            bind: 'setIsVinculatedTrue'
          },
          navigation_product_detail_to_codicel_agree_consent: {
            bind: 'setIsVinculatedFalse'
          },
          [getChannelName('init_page')]: {
            bind: 'init'
          },
          [getChannelName('ANALYTICS_SET_CLIENT_DATA')]: {
            bind: 'codicelAgreeAcepted'
          },
          [getChannelName('ANALYTICS_AGREE_OPEN_TERMS_MODAL')]: {
            bind: 'codicelAgreeUserData'
          },
          [getChannelName('ANALYTICS_CHECKBOX_ENABLE_VINCULATE')]: {
            bind: 'codicelAgreeDataAcepted'
          },
          [getChannelName('POST_AGREE_CONSENT_REQUEST')]: {
            bind: 'codicelAgreeOtp'
          },
          [getChannelName('POST_REMOVE_CONSENT_REQUEST')]: {
            bind: 'codicelAgreeOtp'
          },
          [getChannelName('ANALYTICS_AGREE_CONSENT_SUCCESS')]: {
            bind: 'codicelAgreeSuccess'
          },
          [getChannelName('ANALYTICS_CODICEL_CONFIRM_UNLINK_MODAL')]: {
            bind: 'codicelAgreeSuccess'
          },
          global_retry_error: {
            bind: 'codicelAgreeError'
          }
        },
        out: {
          [getChannelName('_ANALYTICS_AGREE_INFORMATION')]: {
            bind: 'analytics-agree-information',
            analytics: ANALYTICS.AGREE_INFORMATION
          },
          [getChannelName('_ANALYTICS_AGREE_ACEPTED')]: {
            bind: 'analytics-agree-acepted',
            analytics: ANALYTICS.AGREE_ACEPTED
          },
          [getChannelName('_ANALYTICS_AGREE_USEDDATA')]: {
            bind: 'analytics-agree-userdata',
            analytics: ANALYTICS.AGREE_USEDDATA
          },
          [getChannelName('_ANALYTICS_AGREE_DATAACEPTED')]: {
            bind: 'analytics-agree-dataacepted',
            analytics: ANALYTICS.AGREE_DATAACEPTED
          },
          [getChannelName('_ANALYTICS_AGREE_STEP_OTP')]: {
            bind: 'analytics-agree-otp',
            analytics: ANALYTICS.AGREE_STEP_OTP
          },
          [getChannelName('_ANALYTICS_AGREE_COMPLETED')]: {
            bind: 'analytics-agree-completed',
            analytics: ANALYTICS.AGREE_COMPLETED
          },
          [getChannelName('_ANALYTICS_AGREE_SERVICE_ERROR')]: {
            bind: 'analytics-agree-error',
            analytics: ANALYTICS.AGREE_SERVICE_ERROR
          },

          // ANALYTICS_REMOVE
          [getChannelName('_ANALYTICS_REMOVE_ACEPTED')]: {
            bind: 'analytics-remove-acepted',
            analytics: ANALYTICS.REMOVE_ACEPTED
          },
          [getChannelName('_ANALYTICS_REMOVE_USEDDATA')]: {
            bind: 'analytics-remove-userdata',
            analytics: ANALYTICS.REMOVE_USEDDATA
          },
          [getChannelName('_ANALYTICS_REMOVE_DATAACEPTED')]: {
            bind: 'analytics-remove-dataacepted',
            analytics: ANALYTICS.REMOVE_DATAACEPTED
          },
          [getChannelName('_ANALYTICS_REMOVE_CONFIRM')]: {
            bind: 'analytics-remove-confirm',
            analytics: ANALYTICS.REMOVE_CONFIRM
          },
          [getChannelName('_ANALYTICS_REMOVE_STEP_OTP')]: {
            bind: 'analytics-remove-otp',
            analytics: ANALYTICS.REMOVE_STEP_OTP
          },
          [getChannelName('_ANALYTICS_REMOVE_COMPLETED')]: {
            bind: 'analytics-remove-completed',
            analytics: ANALYTICS.REMOVE_COMPLETED
          },
          [getChannelName('_ANALYTICS_REMOVE_SERVICE_ERROR')]: {
            bind: 'analytics-remove-error',
            analytics: ANALYTICS.REMOVE_SERVICE_ERROR
          }
        }
      }
    }
  };

  const base = {
    hash: 'mx-codicel-agree-and-remove-consent',
    currentPage: {
      url: '/codicel-agree-and-remove-consent'
    },
    pages: codicelAgreeAndRemoveConsentPage,
    template,
    components: [
      lifeCycle,
      header,
      navigationHandler,
      spinnerWithText,
      productMoreInfo,
      checkboxButton,
      confirmButtons,
      consentManager,
      cipherPlugin,
      banxicoAPI,
      evidencesAPI,
      codicelCrypto,
      actionLauncher,
      ANALYTICS_DM,
      accountsApi
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManager);
  }

  localStorage.addOutStorageChannels(base.components, ['codicel_entrypoint', 'loginData'], config);

  addRetryErrors(base, [
    {
      id: 'CODICEL-CONSENT-ERROR',
      acceptRetry: { bind: 'handleErrorModalAccept', component: 'glomo-codicel-consent-manager' },
      cancelRetry: { bind: 'exit', component: 'glomo-codicel-consent-manager' },
      finishRetry: { bind: 'handleErrorModalCallBBVA', component: 'glomo-codicel-consent-manager' }
    },
    {
      id: 'CODICEL-CONSENT-DATA-ERROR',
      acceptRetry: { bind: 'exit', component: 'glomo-codicel-consent-manager' },
      cancelRetry: { bind: 'exit', component: 'glomo-codicel-consent-manager' },
      finishRetry: { bind: 'handleErrorModalCallBBVA', component: 'glomo-codicel-consent-manager' }
    }
  ]);

  addCommonErrors(base.components)();

  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-banxico', PAGE_NAME, ['success-on-post-banxico-registered-clabe', 'error-on-post-banxico-registered-clabe', 'success-on-post-banxico-registered-clabe-delete', 'error-on-post-banxico-registered-clabe-delete']);

  return sphericaPageUtils.spherize(base);
};
