/* eslint-disable no-shadow */
const defaultErrorConfig = require('./_retry_errors_config.js');

const glomoStandardErrorHandlerDm = (isSpherica) => {
  const glomoStandardErrorHandlerDm = {
    zone: 'app__main',
    type: 'CC',
    tag: 'glomo-standard-error-handler-dm-mx',
    familyPath: 'glomo-standard-error-handler-dm',
    properties: {
      isSpherica,
      defaultErrorConfig: defaultErrorConfig.RETRY_ERRORS_CONFIG_ALERT_MANAGER,
      defaultErrorMessage: 'glomo-standard-error-handler-blocking-message',
      cellsConnections: {
        in: {
          /**
           * DO NOT create new channels
           * DO USE generic channels
           */
          global_generic_error: {
            bind: 'error'
          },
          global_custom_error: {
            bind: 'customError'
          },
          global_retry_error: {
            bind: 'retryError'
          },
          global_generic_with_back_navigation: {
            bind: 'handleErrorWithBackNavigation'
          },
          sign_modal_cancelled: {
            bind: 'resetRetryCount'
          },
          global_generic_error_dinamic: {
            bind: 'errorDynamic'
          }
        },
        out: {
          global_logout_sesion_expiration: {
            bind: 'access-key-recovery-invalid-user-link-click'
          },
          global_standard_error_navigate_back: {
            bind: 'glomo-standard-error-navigate-back',
            backStep: true
          },
          global_call_for_help: {
            bind: 'call-for-help'
          },
          global_action_launcher_dialer: {
            bind: 'open-call-action'
          },
          global_equity_error_navigate_back: {
            bind: 'equity-transfer-redirect-account'
          }
        }
      }
    }
  };

  if (isSpherica) {
    glomoStandardErrorHandlerDm.properties.cellsConnections.out.global_alert_manager_open_with_settings_spherica = { bind: 'show-alert-modal' };
    glomoStandardErrorHandlerDm.properties.isSpherica = true;
  } else {
    glomoStandardErrorHandlerDm.properties.cellsConnections.out.global_alert_manager_open_with_settings = {bind: 'show-alert-modal' };
  }

  return glomoStandardErrorHandlerDm;
};

module.exports = {
  glomoStandardErrorHandlerDm
};