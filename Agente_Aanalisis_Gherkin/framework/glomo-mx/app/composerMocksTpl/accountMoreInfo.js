'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const base = require('./product/_product-more-info')('account')(CONFIG);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const setProperty = utils.setProperty(base);
  setProperty('glomo-account-summary-dm-mx').cellsConnections.in = {};
  setProperty('glomo-account-summary-dm-mx').cellsConnections.out = {};
  setProperty('cells-molecule-header').leftIcon = '';
  setProperty('cells-molecule-header').rightIcon = 'coronita:close';
  setProperty('cells-molecule-header').rightIconSize = 22;
  setProperty('cells-product-more-info').dataHidden = false;
  setProperty('cells-product-more-info').hideNotShareButton = false;
  setProperty('cells-product-more-info').skeletonItems = 5;
  connectionsIn('glomo-account-summary-dm-mx').account_more_info_share_detail = {
    bind: 'shareAllInformation'
  };
  connectionsIn('cells-product-more-info').navigation_account_product_more_info_back_request = {
    bind: 'reset'
  };
  connectionsIn('cells-product-more-info').global_account_set_product_more_info = {
    bind: 'setProperties'
  };
  connectionsOut('cells-molecule-header').navigation_account_product_more_info_back_request = {
    bind: 'click-right-button',
    backStep: true
  };
  connectionsOut('cells-product-more-info').navigation_to_portabilities_list = {
    bind: 'navigate-to-portabilities',
    link: {
      page: 'payrollPortabilityListPage'
    }
  };
  connectionsOut('glomo-account-summary-dm-mx').account_info_receipt = {
    bind: 'send-data-receipt'
  };
  connectionsOut('glomo-account-summary-dm-mx').account_share_receipt = {
    bind: 'create-receipt'
  };
  connectionsIn('cells-product-detail-manager').global_account_set_product_more_info = {
    bind: 'setProperties'
  };
  const _localStorage = require('./common/_local-storage');
  connectionsIn('cells-product-more-info').global_account_product_detail_reset_page = {};
  connectionsIn('cells-product-more-info').account_more_info_changed = {};
  connectionsIn('cells-product-more-info').account_set_more_info = {};
  connectionsIn('cells-product-more-info').account_more_info_cached = {};
  connectionsOut('cells-product-more-info').request_codi_qr_account = {
    bind: 'request-codi-qr-account'
  };
  const codi = {
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    tag: 'bbva-manager-codi-qr-account',
    type: 'DM',
    zone: 'app__main',
    properties: {
      cellsConnections: {
        in: {
          account_more_info_init_page: { bind: 'init' },
          global_account_more_info_codi_hmac_sha_in_base_generated: { bind: 'generateHmacShaToBase' },
          global_account_more_info_generate_cipher_AES_success: { bind: 'generateCipherAES' },
          global_account_more_info_generate_qr_error_response: { bind: 'createQrAccountError' },
          global_account_more_info_generate_qr_success_response: { bind: 'createQrAccountSuccess' },
          global_account_more_info_generate_sha_encrypt: { bind: 'generateShaEncrypt' },
          global_account_set_account_for_operations: { bind: 'setAccountSelected' },
          global_account_set_product_more_info: { bind: 'setAccountMoreInfo' },
          global_storage_get_enrollment_codi_key_error: { bind: 'setDataFromStorage' },
          global_storage_get_enrollment_codi_key_success: { bind: 'setDataFromStorage' },
          global_storage_get_registration_completed_codi_error: { bind: 'setRegistrationCompleted' },
          global_storage_get_registration_completed_codi_success: { bind: 'setRegistrationCompleted' },
          request_codi_qr_account: { bind: 'requestQrAccount' }
        },
        out: {
          global_account_more_info_qr_request_cipher_aes: { bind: 'qr-request-cipher-aes' },
          global_account_more_info_qr_request_convert_sha_to_hex: { bind: 'convert-sha-to-hex' },
          global_account_more_info_qr_request_encrypt_hmacSha_to_base: { bind: 'qr-request-encrypt-hmacSha-to-base' },
          global_account_more_info_request_generate_qr: { bind: 'create-qr-request' },
          global_get_from_storage: { bind: 'get-local-storage-codi' },
          global_set_in_storage: { bind: 'set-local-storage-codi' },
          set_codi_qr_image_src_hidden: { bind: 'set-codi-qr-hidden' },
          set_codi_qr_image_src: { bind: 'set-codi-qr-image-src' },
          global_account_more_info_navigate_to_codi_begin_register: {
            bind: 'navigate-to-codi-begin-register',
            link: {
              page: 'codiBeginRegister'
            }
          }
        }
      }
    }
  };
  const qrImage = {
    familyPath: '@bbva-web-components/bbva-banner-image',
    properties: {
      cellsConnections: {
        in: {
          set_codi_qr_image_src_hidden: { bind: 'hidden' },
          set_codi_qr_image_src: { bind: 'imageSrc' }
        }
      },
      fullwidth: true,
      hidden: true
    },
    render: 'litElement',
    tag: 'bbva-banner-image',
    type: 'UI',
    zone: 'app__main'
  };
  const qrImageMessage = {
    familyPath: '@bbva-web-components/bbva-notification-help',
    render: 'litElement',
    tag: 'bbva-notification-help',
    type: 'UI',
    zone: 'app__main',
    properties: {
      className: 'u-margin--1',
      icon: 'coronita:info',
      text: 'codi-qr-account-more-info-content',
      hidden: true,
      iconSize: 16,
      cellsConnections: { in: { set_codi_qr_image_src_hidden: { bind: 'hidden' } } }
    }
  };
  const qrCreator = {
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr-creator',
    properties: {
      cellsConnections: {
        in: { global_account_more_info_request_generate_qr: { bind: 'generateQr' } },
        out: {
          global_account_more_info_generate_qr_success_response: { bind: 'bbva-qr-creator-code-success' },
          global_account_more_info_generate_qr_error_response: { bind: 'bbva-qr-creator-code-error' }
        }
      }
    },
    render: 'litElement',
    tag: 'bbva-nativeconnector-bbva-qr-creator',
    type: 'DM',
    zone: 'app__main'
  };
  const criptoDm = {
    tag: 'glomo-codicel-crypto-dm',
    type: 'DM',
    zone: 'app__main',
    properties: {
      cellsConnections: {
        in: {
          global_account_more_info_qr_request_convert_sha_to_hex: { bind: 'generateSha512InHex' },
          global_account_more_info_qr_request_cipher_aes: { bind: 'encryptAES' },
          global_account_more_info_qr_request_encrypt_hmacSha_to_base: { bind: 'generateHmacSha256InBase64' }
        },
        out: {
          global_account_more_info_generate_sha_encrypt: { bind: 'sha-512-in-hex-generated' },
          global_account_more_info_generate_cipher_AES_success: { bind: 'data-encrypted-aes-success' },
          global_account_more_info_codi_hmac_sha_in_base_generated: { bind: 'hmac-sha-256-in-base64-generated' }
        }
      }
    }
  };
  base.components.push(codi, qrImage, qrImageMessage, qrCreator, criptoDm);
  _localStorage.addOutStorageChannels(base.components, ['enrollment_codi_key', 'codi_qr_reference', 'registration_completed_codi'], CONFIG);  addCommonErrors(base.components)();
  return base;
};
