const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAdvancedFootprint,
  getAdvancedFootprintWithLevel4,
  getInternalLink,
  getInteractionLink,
  getAdvancedFootprintError,
  getAnalyticFeatureFlagError
} = require('./common/_utils');

module.exports = () => {

  const flags = {
    base: 'notification.creditCardPaymentReminder',
    loadError: 'notification.creditCardPaymentReminder.load',
    saveError: 'notification.creditCardPaymentReminder.save',
    activate: 'notification.creditCardPaymentReminder.activate',
    deactivate: 'notification.creditCardPaymentReminder.deactivate'
  };

  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.settings,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const pageViewData = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.notifications
  };

  const pageViewDetailData = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.notifications,
    [constants.PAGE_PAGEINFO_LEVEL3]: 'recordatorio de pago tdc'
  };

  const pageViewModifyData = {
    ...pageViewDetailData,
    [constants.PAGE_PAGEINFO_LEVEL4]: 'modificar recordatorio'
  };

  const pageViewSuccessData = {
    ...pageViewDetailData,
    [constants.PAGE_PAGEINFO_LEVEL4]: 'modificaste tus recordatorios'
  };

  const pageViewErrorInfoData = {
    ...pageViewDetailData,
    [constants.PAGE_PAGEINFO_LEVEL4]: 'error informacion no disponible'
  };

  const pageViewErrorOperationData = {
    ...pageViewDetailData,
    [constants.PAGE_PAGEINFO_LEVEL4]: 'error operacion no realizada'
  };

  const _withBaseFlag = analytic => getAnalyticFeatureFlag(flags.base, analytic);

  const pageView = _withBaseFlag(getAdvancedFootprint(pageViewData));
  const pageViewModify = _withBaseFlag(
    getAdvancedFootprintWithLevel4(
      pageViewModifyData[constants.PAGE_PAGEINFO_LEVEL3],
      pageViewModifyData[constants.PAGE_PAGEINFO_LEVEL4],
      pageViewModifyData
    )
  );
  const pageViewSuccess = _withBaseFlag(
    getAdvancedFootprintWithLevel4(
      pageViewSuccessData[constants.PAGE_PAGEINFO_LEVEL3],
      pageViewSuccessData[constants.PAGE_PAGEINFO_LEVEL4],
      pageViewSuccessData
    )
  );
  const internalLinkConfigure = _withBaseFlag(
    getInternalLink('configurar recordatorios de pago de tarjeta de credito', pageViewData)
  );

  const interactionLinkActivate = getAnalyticFeatureFlag(flags.activate, getInteractionLink('activar recordatorio de pago', pageViewModifyData));
  const interactionLinkDeactivate = getAnalyticFeatureFlag(flags.deactivate, getInteractionLink('desactivar recordatorio de pago', pageViewModifyData));
  const errorInfoNotAvailable = getAnalyticFeatureFlagError(flags.loadError, getAdvancedFootprintError('error informacion no disponible', pageViewErrorInfoData));
  const errorOperationNotPerformed = getAnalyticFeatureFlagError(flags.saveError, getAdvancedFootprintError('error operacion no realizada', pageViewErrorOperationData));

  return {
    pageView,
    pageViewModify,
    pageViewSuccess,
    internalLinkConfigure,
    interactionLinkActivate,
    interactionLinkDeactivate,
    errorInfoNotAvailable,
    errorOperationNotPerformed
  };
};
