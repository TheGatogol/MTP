'use strict';
module.exports = CONFIG => BASE => {
  const { kebabToCamel } = require('./helpers');
  const defaultErrorConfig = require('./commonErrors/_retry_errors_config.js').RETRY_ERRORS_CONFIG_ALERT_MANAGER;
  const errorEvent = 'api-dm-error';
  const closeEventSuccess = 'api-dm-response';
  const closeEventError = 'api-dm-response-error';
  const errorEventTypePrefix = 'widget-generic-error';
  const defaultRetryConfig = defaultErrorConfig.operative.retryConfig;
  const defaultCallConfig = defaultErrorConfig.operative.callConfig;
  const generateRandomString = n => {
    let result = '';
    for (let i = 0; i < n; i++) {
      let randomCharCode = Math.floor(Math.random() * 26);
      let randomChar = String.fromCharCode(randomCharCode + (Math.random() >= 0.5 ? 65 : 97));
      result += randomChar;
    }
    return result;
  };
  const getWidgetErrorInterceptor = widgetId => ({
    zone: 'app__main',
    familyPath: '@glomo-web-components/bbva-manager-widgets-error-handler',
    tag: 'bbva-manager-widgets-error-interceptor',
    type: 'DM',
    render: 'litElement',
    properties: {
      widgetId,
      errorEventTypePrefix,
      host: '.',
      cellsConnections: {
        in: {
          [`widget_error_${widgetId}`]: {
            bind: 'manageError'
          }
        },
        out: {
          widget_handle_signature_no_authentication_soft_token: {
            bind: 'signature-no-authentication-soft-token-error'
          }
        }
      }
    }
  });
  const generateWidgetId = componentTag => {
    return `${kebabToCamel(componentTag)}_${generateRandomString(6)}`;
  };
  const generateInterceptorErrorEvent = widgetId => {
    return `${errorEventTypePrefix}-${widgetId}`;
  };
  const errorAndSignWidgetConnector = (componentTag, {
    widgetId = null,
    retryAfterErrorFunction = 'retryAfterError',
    cancelAfterErrorFunction = 'cancelAfterError',
    retryConfig = defaultRetryConfig,
    callConfig = defaultCallConfig,
    addRetryErrorsFlag = false,
    acceptCallForHelp = {}
  } = {}) => {
    widgetId = widgetId ? widgetId : generateWidgetId(componentTag);
    const widgetErrorInterceptor = getWidgetErrorInterceptor(widgetId);
    widgetErrorInterceptor.properties.retryConfig = retryConfig;
    widgetErrorInterceptor.properties.callConfig = callConfig;
    BASE.components.push(widgetErrorInterceptor);
    const addRetryErrors = require('./commonErrors/_dm-retry-errors')(CONFIG)(BASE);
    const addCommonErrors = require('./commonErrors/_dm-common-errors');
    addCommonErrors(BASE.components)();
    const ac = require('./_channel-utils')(BASE).addChannel;
    /* Signature processs */
    ac('widget_signature_handle_required_first_step',
      { [componentTag]: 'signature-required-first-step-dm' },
      {});
    ac('widget_signature_handle_required',
      { [componentTag]: 'signature-required-dm' },
      {});
    ac('widget_signature_handle_invalid',
      { [componentTag]: 'signature-invalid-dm' },
      {});
    /* Close signature modal events */
    ac('widget_signature_close_modal_success',
      { [componentTag]: closeEventSuccess },
      {});
    ac('widget_signature_close_modal_error',
      { [componentTag]: closeEventError },
      {});
    ac('sign_modal_cancelled',
      {},
      {[componentTag]: cancelAfterErrorFunction });
    /* Error events */
    ac(`widget_error_${widgetId}`,
      { [componentTag]: errorEvent },
      {});
    if (addRetryErrorsFlag) {
      ac('global_retry_error',
        { [widgetErrorInterceptor.tag]: generateInterceptorErrorEvent(widgetId)},
        {});
      ac(`widget_error_retry_${widgetId}`,
        { [widgetErrorInterceptor.tag]: 'widget-retry-service-call'},
        { [componentTag]: retryAfterErrorFunction });

      ac(`widget_error_cancel_${widgetId}`,
        { [widgetErrorInterceptor.tag]: 'widget-cancel-service-call'},
        { [componentTag]: cancelAfterErrorFunction });
      addRetryErrors([
        {
          id: widgetId,
          acceptRetry: { bind: 'retryWidgetServiceCall', component: 'bbva-manager-widgets-error-interceptor' },
          cancelRetry: { bind: 'cancelWidgetServiceCal', component: 'bbva-manager-widgets-error-interceptor' },
          ...(acceptCallForHelp)
        }
      ]);
    }
  };
  return errorAndSignWidgetConnector;
};