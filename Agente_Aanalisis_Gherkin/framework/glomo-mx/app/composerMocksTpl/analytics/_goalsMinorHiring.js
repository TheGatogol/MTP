module.exports = () => {
  const goalsMinorHiringFeatureFlag = 'contractingGoalsYoungsters';
  const errorFlag = 'contractingGoalsYoungsters.error';
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getOnClickStart, getPageVisitRaw, getAppStartedWithoutLevel, getAppStep, getAppCompletedRaw, getAdvancedFootprint, getAdvancedFootprintError } = require('./common/_utils');

  const _setFeatureFlag = (flag, ...data) => getAnalyticFeatureFlag(flag, ...data);

  const _commonData = () => ({
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_USERSTATE]: literals.commons.logado
  });

  const _commonFunnelData = () => ({
    ..._commonData(),
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_APPLICATION_NAME]: 'crear meta jovenes',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'create a goal youngsters'
  });
  const _commonLevelsData = (level3) => ({
    [constants.PAGE_PAGEINFO_LEVEL1]: 'cuenta plan',
    [constants.PAGE_PAGEINFO_LEVEL2]: 'crear meta jovenes',
    [constants.PAGE_PAGEINFO_LEVEL3]: level3
  });

  const _commonTransactionData = (typology, level3) => ({
    ..._commonFunnelData(),
    ..._commonLevelsData(level3),
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.APPLICATION_TYPOLOGY]: typology,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
  });

  const _commonInformationCampaignData = () => ({
    ..._commonFunnelData(),
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_STEP]: literals.commons.knowMore,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.commons.card,
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.account,
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: '',
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick
  });

  const funnelProductDetail = getOnClickStart(
    '',
    '',
    {
      ..._commonInformationCampaignData(),
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
      [constants.INTERNAL_CAMPAIGN_LOCATION]: {bind: 'location'},
      [constants.INTERNAL_CAMPAIGN_QUANTITY]: {bind: 'quantity'}
    }
  );

  const APP_ON_CLICK_START = getOnClickStart('', '', { ..._commonInformationCampaignData(),
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    },
    [constants.APPLICATION_APPLICATION_TYPE]: {
      bind: 'type'
    },
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'offers'
    },
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: '1'
  });

  const funnelPageVisit = getPageVisitRaw({
    ..._commonTransactionData({ bind: 'typology' }, '1 detalle cumplir meta'),
    [constants.APPLICATION_STEP]: '1 detalle cumplir meta',
    [constants.QUALIFIED_VISITS]: literals.commons.trueValue
  });

  const funnelAppStarted = getAppStartedWithoutLevel({
    ..._commonTransactionData({ bind: 'typology' }, '1 detalle cumplir meta'),
    [constants.APPLICATION_STEP]: { bind: 'appStep' }
  });

  const getFunnelAppStep = number => getAppStep(number, {
    ..._commonTransactionData({ bind: 'typology' }, { bind: 'appStep' }),
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.linkCardAccount,
    [constants.APPLICATION_STEP]: { bind: 'appStep' },
    ...(Number(number) === 3 && { [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken })
  });

  const appCompleted = getAppCompletedRaw({
    ..._commonTransactionData({ bind: 'typology' }, literals.commons.successfulPage),
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.linkCardAccount,
    [constants.PRODUCT_STATE]: literals.commons.finalized,
    [constants.APPLICATION_STATE]: literals.commons.finalized,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });

  const getFootPrintData = (level3) => getAdvancedFootprint({
    ..._commonData(),
    ..._commonLevelsData(level3),
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  });

  const getFootPrintError = (error) => _setFeatureFlag(errorFlag, getAdvancedFootprintError(error, {
    ..._commonData(),
    ..._commonLevelsData(error),
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  }));

  const getInteraction = (interactionLevel) => _setFeatureFlag(goalsMinorHiringFeatureFlag, {
    type: literals.types.link,
    action: interactionLevel ? literals.actions.interactionLink : literals.actions.internalLink,
    digitalData: {
      ..._commonData(),
      ..._commonLevelsData('2 terminos y condiciones'),
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...(interactionLevel && { [constants.APPLICATION_INTERACTION_LEVEL]: interactionLevel })
    }
  });

  const analytics = {
    funnelProductDetail,
    APP_ON_CLICK_START,
    funnelPageVisit,
    funnelAppStarted,
    getFunnelAppStep,
    appCompleted,
    getFootPrintData,
    getInteraction,
    getFootPrintError
  };

  return Object.fromEntries(
    Object.entries(analytics).map(([key, value]) => [
      key,
      typeof value === 'function'
        ? (...args) => _setFeatureFlag(goalsMinorHiringFeatureFlag.key, value(...args))
        : _setFeatureFlag(goalsMinorHiringFeatureFlag.key, value)
    ])
  );
};
