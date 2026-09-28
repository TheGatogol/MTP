module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getInternalLink } = require('./common/_utils');
  const setFeatureFlags = (featureFlag, analytic, value) => (getAnalyticFeatureFlag(featureFlag, analytic, value));
  const analyticsForceTouchTransfersFeatureFlag = 'forceTouch.tranfers';
  const analyticsForceTouchRejectCardFeatureFlag = 'forceTouch.rejectCard';
  const analyticsForceTouchPayServicesFeatureFlag = 'forceTouch.payServices';
  const analyticsForceTouchWithdrawalWithoutCardsFeatureFlag = 'forceTouch.withdrawalWithoutCards';
  const analyticsForceTouchTopUpFeatureFlag = 'forceTouch.topUp';
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.levels.level1.shortcuts,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.actions.online,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_USERSTATE]: literals.commons.noLogado
  };
  const commonTopUp = {
    [constants.USER_SEGMENT_GLOBAL]: '',
    [constants.USER_AGE]: ''
  };
  const deeplinkTransfers = setFeatureFlags(
    analyticsForceTouchTransfersFeatureFlag,
    getInternalLink('transferir', common)
  );
  const deeplinkRejectCard = setFeatureFlags(
    analyticsForceTouchRejectCardFeatureFlag,
    getInternalLink('tarjeta rechazada', common)
  );
  const deeplinkPayServices = setFeatureFlags(
    analyticsForceTouchPayServicesFeatureFlag,
    getInternalLink('pagar servicio', common)
  );
  const deeplinkWithdrawalWithoutCards = setFeatureFlags(
    analyticsForceTouchWithdrawalWithoutCardsFeatureFlag,
    getInternalLink('retiro sin tarjeta', common)
  );
  const deeplinkTopUp = setFeatureFlags(
    analyticsForceTouchTopUpFeatureFlag,
    getInternalLink('recargas y mas', {...common, ...commonTopUp})
  );
  return {
    deeplinkTransfers,
    deeplinkRejectCard,
    deeplinkPayServices,
    deeplinkWithdrawalWithoutCards,
    deeplinkTopUp
  };
};