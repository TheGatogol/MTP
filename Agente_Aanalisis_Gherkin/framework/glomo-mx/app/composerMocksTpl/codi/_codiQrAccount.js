'use strict';

module.exports = () => {
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
          global_account_more_info_generate_qr_error_response: { bind: 'createQrAccountError' },
          global_account_more_info_generate_qr_success_response: { bind: 'createQrAccountSuccess' },
          global_account_set_account_for_operations: { bind: 'setAccountSelected' },
          global_account_set_product_more_info: { bind: 'setAccountMoreInfo' },
          global_storage_get_enrollment_codi_key_error: { bind: 'setDataFromStorage' },
          global_storage_get_enrollment_codi_key_success: { bind: 'setDataFromStorage' },
          global_storage_get_registration_completed_codi_error: { bind: 'setRegistrationCompleted' },
          global_storage_get_registration_completed_codi_success: { bind: 'setRegistrationCompleted' },
          request_codi_qr_account: { bind: 'requestQrAccount' }
        },
        out: {
          global_account_more_info_request_generate_qr: { bind: 'create-qr-request' },
          global_get_from_storage: { bind: 'get-local-storage-codi' },
          global_set_in_storage: { bind: 'set-local-storage-codi' },
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
  const _codiQrAccount = [codi, qrCreator];
  return { _codiQrAccount };
};