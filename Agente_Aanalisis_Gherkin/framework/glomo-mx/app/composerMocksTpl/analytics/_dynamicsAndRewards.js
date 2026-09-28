/* eslint-disable max-statements */
module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getProduct,
    getAnalyticFeatureFlag,
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintWithLevel1,
    getAdvancedFootprintErrorLevel2,
    getAppPageVisitLevel2,
    getAnalyticFeatureFlagError,
    getOnClickStart,
    getAppStartedWithLevel2,
    getPageVisitRaw
  } = require('./common/_utils');
  const creditCardFeatureFlag = 'dynamicsAndRewards.creditCard';
  const featureFlagFootprint = 'dynamicsAndRewards.creditCard.footprint';
  const featureFlagErrors = 'dynamicsAndRewards.creditCard';
  const featureFlagInviteFriend = 'dynamicsAndRewards.inviteFriend';
  const productData = getProduct(literals.commons.cards);
  const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));

  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo'
  };

  const commonsInviteFriend = {
    ...commons,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
  };

  const pageCommonTdc = {
    ...commons,
    ...productData,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.memberGetMemberTdc,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.inviteFriendTdc,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo tdc'
  };
  const pageViewBonusDetail = getAdvancedFootprintWithLevel2('detalle de bonificacion', commons);
  const pageViewRewardDetail = getAdvancedFootprintWithLevel2('detalle de premios', commons);
  const pageViewRewardHistory = getAdvancedFootprintWithLevel2('historial de premios', commons);

  const pageViewBonusDetailInviteFriend = getAdvancedFootprintWithLevel2('detalle de bonificacion', commonsInviteFriend);
  const pageViewRewardDetailInviteFriend = getAdvancedFootprintWithLevel2('detalle de premios', commonsInviteFriend);
  const pageViewRewardHistoryInviteFriend = getAdvancedFootprintWithLevel2('historial de premios', commonsInviteFriend);

  const clickCommonTdc = {
    ...commons,
    ...productData,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.memberGetMemberTdc,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.inviteFriendTdc,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };

  const startedCommonRegister = {
    ...pageCommonTdc,
    [constants.APPLICATION_STEP]: 'registrar invitado'
  };

  const startedCommonTerms = {
    ...pageCommonTdc,
    [constants.APPLICATION_STEP]: literals.commons.termsAndCondi
  };

  const appPageView = (level1) => setFeatureFlags(featureFlagFootprint, getAdvancedFootprintWithLevel1(level1, commons));
  const appPageVisitTdc  = getAppPageVisitLevel2('1 invitados tarjeta', pageCommonTdc);
  const getErrorPageView  = (level1, error) => getAnalyticFeatureFlagError(featureFlagErrors, getAdvancedFootprintErrorLevel2(level1, error, commons));
  const getAppOnClickStart = (step) => setFeatureFlags(creditCardFeatureFlag, getOnClickStart(step, literals.commons.information, clickCommonTdc));
  const appStartedRegister  = getAppStartedWithLevel2('1 invitados tarjeta', startedCommonRegister);
  const appStartedTerms = getAppStartedWithLevel2('1 invitados tarjeta', startedCommonTerms);

  const portabilityFeatureFlag = 'dynamicsAndRewards.payrollPortability';

  const productDataPortability = getProduct(literals.commons.account);

  const commonsPortability = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const clickCommonPortability = {
    ...productDataPortability,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'member get member portability',
    [constants.APPLICATION_APPLICATION_NAME]: 'invitar amigo portabilidad nomina',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo'
  };

  const pageCommonPortability = {
    ...commonsPortability,
    ...productDataPortability,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo portabilidad',
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'member get member portability',
    [constants.APPLICATION_APPLICATION_NAME]: 'invitar amigo portabilidad nomina',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };

  const pageAppVisitPortability = {
    ...pageCommonPortability,
    [constants.APPLICATION_STEP]: '1 invitados tarjeta',
    [constants.PAGE_PAGEINFO_LEVEL2]: '1 invitados portabilidad'
  };

  const getOnClickStartPortability = (step) => {
    return getAnalyticFeatureFlag(portabilityFeatureFlag, getOnClickStart(step, literals.commons.information, clickCommonPortability));
  };

  const appPageVisitPortability = getPageVisitRaw(pageAppVisitPortability);

  const _getAppStartedPath = (data) => getAppStartedWithLevel2('1 invitados portabilidad', {...pageCommonPortability, [constants.APPLICATION_STEP]: data});

  const getAppStartedPortability = (param) => {
    const typeStarted = {
      register: _getAppStartedPath('registrar invitado'),
      terms: _getAppStartedPath(literals.commons.termsAndConditions)
    };
    return typeStarted[param];
  };

  [
    pageViewRewardHistoryInviteFriend,
    pageViewBonusDetailInviteFriend,
    pageViewRewardDetailInviteFriend
  ].forEach(item => setFeatureFlags(featureFlagInviteFriend, item));

  [
    appPageVisitPortability,
    getAppStartedPortability
  ].forEach(item => setFeatureFlags(portabilityFeatureFlag, item));

  [
    appPageVisitTdc,
    appStartedRegister,
    appStartedTerms
  ].forEach(item => setFeatureFlags(creditCardFeatureFlag, item));
  [
    pageViewRewardHistory,
    pageViewBonusDetail,
    pageViewRewardDetail
  ].forEach(item => setFeatureFlags(featureFlagFootprint, item));
  return {
    appPageView,
    getErrorPageView,
    getAppOnClickStart,
    pageViewBonusDetail,
    pageViewRewardDetail,
    pageViewRewardHistory,
    pageViewRewardHistoryInviteFriend,
    pageViewBonusDetailInviteFriend,
    pageViewRewardDetailInviteFriend,
    appPageVisitTdc,
    appStartedRegister,
    appStartedTerms,
    getOnClickStartPortability,
    appPageVisitPortability,
    getAppStartedPortability
  };
};