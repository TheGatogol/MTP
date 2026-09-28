/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => BASE => {
  const _localStorage = require('./_local-storage');

  const { signDm } = require('./_cross-components');
  const signDmComponent = signDm(CONFIG);
  const excludeLocalStorage = BASE.excludeLocalStorage ? true : false;
  const existsSignDm = BASE.components.find(item => item.tag === signDmComponent.tag);
  if (!existsSignDm) {
    BASE.components.push(signDmComponent);
  }

  if (CONFIG.nativeShell) {
    const { pluginTokenCronto, pluginSecureSharing, pluginEtherToken } = require('./helpers/_utils');
    const crontoPlugin = pluginTokenCronto(CONFIG);
    const existsCrontoPlugin = BASE.components.find(item => item.tag === crontoPlugin.tag);
    if (!existsCrontoPlugin) {
      BASE.components.push(crontoPlugin);
    }
    const securePlugin = pluginSecureSharing(CONFIG);
    const existsSecurePlugin = BASE.components.find(item => item.tag === securePlugin.tag);
    if (!existsSecurePlugin) {
      BASE.components.push(securePlugin);
    }
    const etherPlugin = pluginEtherToken(CONFIG);
    const existsEtherPlugin = BASE.components.find(item => item.tag === etherPlugin.tag);
    if (!existsEtherPlugin) {
      BASE.components.push(etherPlugin);
    }
  }

  if (!excludeLocalStorage) {
    _localStorage.addOutStorageChannels(BASE.components, ['deviceAccesses', 'sign_operation'], CONFIG);
  }

  const channelUtils = require('./_channel-utils')(BASE);
  const ac = channelUtils.addChannel;
  const findComponent = channelUtils.findComponent;
  let addSignChannels;
  let signDM = 'cells-sign-operation-dm-mx';

  addSignChannels = (componentTag, otpId, closeEvents = [], { analyticsComponentTag, fireAnalyticsMethodName = 'manageAnalyticsSign' } = {}) => {
    let component = findComponent(componentTag);
    let [firstClose, ...closeRest] = closeEvents;

    /* Happy path */
    component.properties.otpId = otpId;
    ac('signature_handle_required_first_step',
      { [componentTag]: 'signature-required-first-step-dm' },
      { [signDM]: 'handleSignatureRequiredFirstStep' });

    ac('signature_type_enabled_' + otpId,
      { [signDM]: 'signature-type-enabled-' + otpId },
      { [componentTag]: 'signTypeRequest' });

    ac('signature_handle_required',
      { [componentTag]: 'signature-required-dm' },
      { [signDM]: 'handleSignatureRequired' });

    ac('signature_sign_request_' + otpId,
      { [signDM]: 'signature-sign-request-' + otpId },
      { [componentTag]: 'signRequest' });

    ac('signature_request_new_sms_' + otpId,
      { [signDM]: 'signature-request-new-sms-' + otpId },
      { [componentTag]: 'signGetNewOtp' });

    ac('signature_reset_' + otpId,
      { [signDM]: 'signature-reset-' + otpId },
      { [componentTag]: 'signReset' });

    ac('signature_cancel_' + otpId,
      { [signDM]: 'signature-cancel-' + otpId },
      { [componentTag]: 'signCancel' });

    /* Errors */
    ac('signature_handle_invalid',
      { [componentTag]: 'signature-invalid-dm' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_expired',
      { [componentTag]: 'signature-expired-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_not_found',
      { [componentTag]: 'signature-not-found-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_attempts',
      { [componentTag]: 'signature-attempts-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_not_available',
      { [componentTag]: 'signature-not-available-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_generic_error',
      { [componentTag]: 'signature-generic-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_api_dm_error',
      { [componentTag]: 'api-dm-error' },
      { [signDM]: 'handleApiDmError' });

    ac('signature_handle_invalid_soft_token',
      { [componentTag]: 'signature-invalid-soft-token-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_signature_no_authentication_soft_token',
      { [componentTag]: 'signature-no-authentication-soft-token-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_signature_blocked_soft_token',
      { [componentTag]: 'signature-blocked-soft-token-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_unsuccessful_validation_error',
      { [componentTag]: 'signature-unsuccessful-validation-error' },
      { [signDM]: 'handlerSignatureErrors' });

    ac('signature_handle_locked_credentials_error',
      { [componentTag]: 'signature-locked-credentials-error' },
      { [signDM]: 'handlerSignatureErrors' });

    /* Close events */
    ac('sign_close_modal',
      { [componentTag]: firstClose },
      { [signDM]: 'signModalClose' });

    closeRest.forEach(event => {
      ac('sign_close_modal_' + otpId + '_' + event,
        { [componentTag]: event },
        { [signDM]: 'signModalClose' });
    });

    /* Analytics */
    if (analyticsComponentTag) {
      ac(`signature_required_type_${otpId}`,
        { [signDM]: `signature-required-type-${otpId}` },
        { [analyticsComponentTag]: fireAnalyticsMethodName });
    }
  };

  return addSignChannels;
};
