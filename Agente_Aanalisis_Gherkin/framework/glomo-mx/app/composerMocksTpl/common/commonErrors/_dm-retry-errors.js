'use strict';

module.exports = (CONFIG) => BASE => {
  const { glomoStandardErrorHandlerDm } = require('./_errors_glomo_standard_error_handler');
  const { glomoAlertManager } = require('./_errors_glomo_alert_manager');

  const glomoStandardErrorHandler = glomoStandardErrorHandlerDm(CONFIG.isSphericaMode);
  const existsErrorHandlerDm = BASE.components.find(item => item.tag === glomoStandardErrorHandler.tag);
  if (!existsErrorHandlerDm) {
    BASE.components.push(glomoStandardErrorHandler);
  }

  const glomoAlertManagerErrors = glomoAlertManager(CONFIG, CONFIG.isSphericaMode);
  const existsGlomoAlertManager = BASE.components.find(item => item.tag === glomoAlertManagerErrors.tag);
  if (!existsGlomoAlertManager) {
    BASE.components.push(glomoAlertManagerErrors);
  }

  const channelUtils = require('../_channel-utils')(BASE);
  const ac = channelUtils.addChannel;

  const generateRetryChannelName = eventName => 'global_alert_' + eventName.replace(/-/g, '_');
  const generateCallForHelpChannelName = eventName => 'global_alert_call_for_help_' + eventName.replace(/-/g, '_');

  let addRetryErrorChannel = (id, ob, suffix, isOut) => {
    if (ob) {
      const params = { [ob.component]: ob.bind };
      const connIn = isOut ? {} : params;
      const connOut = isOut ? params : {};

      ac(`${generateRetryChannelName(id)}${suffix}`, connOut, connIn);
    }
  };

  let addRetryErrors = (errorsConfig, productDetailInfo) => {
    //Add error channels to product detail page
    if (productDetailInfo) {
      const { dmName, product } = productDetailInfo;

      // Dispatch event when service fails
      ac('global_retry_error', { [dmName]: 'retry-error' }, {});

      // Dispatch event when service fails to show error on product detail main-info section
      ac(`${product}_get_error`, { [dmName]: `show-${product}-error` }, {});

      // Show error on product detail main-info section after three times
      const blockingErrorChannelName = `global_standard_blocking_${product}_product_detail_error_alert`;
      ac(blockingErrorChannelName, { [glomoStandardErrorHandler.tag]: `show-blocking-alert-product-detail-${product}-call-for-help` }, {});
      ac(blockingErrorChannelName, {}, { [dmName]: 'showCallError' });

      // Reset count error after leaving the product detail page
      ac(`global_${product}_product_detail_reset_page`, {}, { [glomoStandardErrorHandler.tag]: 'resetRetryCount' });
    }

    errorsConfig.forEach(({ id, acceptRetry, cancelRetry, successEvent, acceptCallForHelp }) => {
      //------Retry after error channels------
      //Retry OUT Channel in glomo-alert-manager - click retry
      addRetryErrorChannel(id, { component: glomoAlertManagerErrors.tag, bind: `alert-modal-close-primary-button-${id}` }, '_accept', true);

      //Retry IN Channel in Errors DM - handle click retry
      addRetryErrorChannel(id, { component: glomoStandardErrorHandler.tag, bind: 'handleRetryErrorModalClose' }, '_accept');

      //Retry accept OUT Channel in Errors DM
      addRetryErrorChannel(id, { component: glomoStandardErrorHandler.tag, bind: `${id}-retry-error-accept` }, '_retry_error_accept', true);

      //Retry accept IN Channel in operative DM
      addRetryErrorChannel(id, acceptRetry, '_retry_error_accept');

      //------Cancel after error channels------
      //Add OUT channel to glomo-alert-manager - click cancel
      addRetryErrorChannel(id, { component: glomoAlertManagerErrors.tag, bind: `alert-modal-close-secondary-button-${id}` }, '_cancel', true);

      //Cancel retry IN Channel in Errors DM
      addRetryErrorChannel(id, { component: glomoStandardErrorHandler.tag, bind: 'resetRetryCount' }, '_cancel');

      //Cancel retry IN Channel in operative DM
      addRetryErrorChannel(id, cancelRetry, '_cancel');

      //------Success after error channels------
      //Retry OUT Channel in operative DMm
      addRetryErrorChannel(id, successEvent, '_successful', true);

      //Retry IN Channel in Errors DM
      addRetryErrorChannel(id, { component: glomoStandardErrorHandler.tag, bind: 'resetRetryCount' }, '_successful');

      //------Call for help channel on error channels - optional------
      // Do something else other than calling for help
      if (acceptCallForHelp) {
        //Call for help IN Channel in operative component
        ac(`${generateCallForHelpChannelName(id)}_accept`, {}, { [acceptCallForHelp.component]: acceptCallForHelp.bind });

        //Call for help OUT Channel in Errors DM
        ac(`${generateCallForHelpChannelName(id)}_accept`, { [glomoStandardErrorHandler.tag]: `${id}-open-call-action-accept` }, {});
      }
    });
  };

  return addRetryErrors;
};