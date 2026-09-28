module.exports = () => {
  const constants = require('./common/_constants');
  const {
    getAnalyticFeatureFlag,
    getOnClickStart,
    getAppStarted,
    getAppStepWithLevel3,
    getAppOnClickStartLevel2,
    getPageVisitWithLevel3,
    getAppCompletedRaw,
    getAdvancedFootprintWithLevel3,
    getInteractionLink,
    getAdvancedFootprintWithLevel1,
    getClickClose} = require('./common/_utils');
  const { commons, sections, applicationName, currencies, operative, globalApplication: { frequentOperation } } = require('./common/_literals');

  const featureFlag = 'frequent.operations';
  const _setFeatureFlag = (analytic) => getAnalyticFeatureFlag(featureFlag, analytic);

  const commonHuella = {
    [constants.PAGE_PAGEINFO_AREA]: commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.glomo,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons
  };

  const appOnClickStartData = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.APPLICATION_GLOBAL_APPLICATION]: frequentOperation,
    [constants.APPLICATION_APPLICATION_NAME]: applicationName.performFrequentOperation,
    [constants.APPLICATION_APPLICATION_TYPE]: commons.operative,
    [constants.APPLICATION_FULLFILMENT]: commons.online,
    [constants.APPLICATION_PROCESS]: {bind: 'applicationProcess'},
    [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'}
  };

  const commonAppOnClickStartData = {
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    ...commonHuella,
    ...appOnClickStartData,
    [constants.APPLICATION_TYPOLOGY]: 'journey transferir',
    [constants.APPLICATION_APPLICATION_NAME]: applicationName.performFrequentOperation,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: commons.savingAccounts
  };

  const pageDynamicsData = {
    ...commonAppOnClickStartData,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'amount'},
    [constants.APPLICATION_PROCESS]: {bind: 'process'},
    [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'}
  };

  const pageCommonNotificaiton = {
    ...pageDynamicsData,
    [constants.APPLICATION_TYPOLOGY]: 'journey notificaciones',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction
  };

  const stepText = operative.frequentOperations.substring(0, 20);
  const appOnclickstartList = _setFeatureFlag(getOnClickStart(stepText, commons.transaction, {
    ...pageDynamicsData,
    [constants.PAGE_PAGEINFO_LEVEL1]: commons.global_position,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
    [constants.APPLICATION_STEP]: commons.global_position
  }));

  const appOnclickstartNotification = _setFeatureFlag(getOnClickStart(stepText, commons.transaction, {
    ...pageCommonNotificaiton,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.APPLICATION_STEP]: commons.notificationsCenter,
    [constants.PAGE_PAGEINFO_LEVEL1]: commons.notifications,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.detail
  }));

  const appPageVisit = _setFeatureFlag(getPageVisitWithLevel3('1 ' + commons.confirmation, {
    ...pageDynamicsData,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.transfers,
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 ' + commons.confirmation,
    [constants.APPLICATION_STEP]: '1 ' + commons.confirmation
  }));

  const appPageVisitNotification = _setFeatureFlag(getPageVisitWithLevel3('1 ' + commons.confirmation, {
    ...pageCommonNotificaiton,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.transfers,
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 ' + commons.confirmation,
    [constants.APPLICATION_STEP]: '1 ' + commons.confirmation
  }));

  const appStarted = _setFeatureFlag(getAppStarted('1 ' + commons.confirmation, {
    ...pageDynamicsData,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.APPLICATION_STEP]: {bind: 'aplicationStep'},
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.transfers,
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 ' + commons.confirmation
  }));

  const appStartedNotification = _setFeatureFlag(getAppStarted('1 ' + commons.confirmation, {
    ...pageCommonNotificaiton,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.APPLICATION_STEP]: {bind: 'aplicationStep'},
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.transfers,
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 ' + commons.confirmation
  }));

  const appStep2 = _setFeatureFlag(getAppStepWithLevel3(2, '2 ' + commons.otp, {
    ...pageDynamicsData,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.transfers,
    [constants.PAGE_PAGEINFO_LEVEL3]: '2 ' + commons.otp,
    [constants.APPLICATION_STEP]: '2 ' + commons.otp,
    [constants.APPLICATION_CURRENCY]: currencies.MXN
  }));

  const appCompleted = _setFeatureFlag(getAppCompletedRaw({
    ...pageDynamicsData,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.transfers,
    [constants.PAGE_PAGEINFO_LEVEL3]: commons.successfulPage,
    [constants.APPLICATION_STEP]: commons.successfulPage,
    [constants.APPLICATION_STATE]: commons.ended,
    [constants.PRODUCT_STATE]: commons.ended,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [constants.PAGE_PAGEINFO_ERRORPAGE]: ''
  }));

  const appCompletedNotification = _setFeatureFlag(getAppCompletedRaw({
    ...pageCommonNotificaiton,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.transfers,
    [constants.PAGE_PAGEINFO_LEVEL3]: commons.successfulPage,
    [constants.APPLICATION_STEP]: commons.successfulPage,
    [constants.APPLICATION_STATE]: commons.ended,
    [constants.PRODUCT_STATE]: commons.ended,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [constants.PAGE_PAGEINFO_ERRORPAGE]: ''
  }));

  const appOnClickStart = (level = '') => {
    let data = _setFeatureFlag(getAppOnClickStartLevel2(
      level, '', {
        [constants.APPLICATION_STEP]: {bind: 'step'},
        [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'},
        [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {bind: 'internalCampaignAttributes'},
        [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: commons.intCmpClick,
        [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {bind: 'siteActionName'},
        ...commonHuella,
        ...appOnClickStartData
      }));
    return data;
  };
  const modalPageView = _setFeatureFlag(getAdvancedFootprintWithLevel3(
    {bind: 'level3'},
    { ...commonHuella,
      [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
      [constants.PAGE_PAGEINFO_LEVEL2]: commons.transfers
    }
  ));
  const interactionLink = _setFeatureFlag(getInteractionLink(
    {bind: 'interactionLink'},
    { ...commonHuella,
      [constants.PAGE_PAGEINFO_LEVEL1]: commons.global_position
    }
  ));

  const campaignFootprint = _setFeatureFlag(getAdvancedFootprintWithLevel1(commons.global_position,
    { ...commonHuella,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
      [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
        bind: 'internalCampaignAttributes'
      }
    }
  ));

  const closeCampaign = _setFeatureFlag(getClickClose(
    { ...commonHuella,
      [constants.PAGE_PAGEINFO_LEVEL1]: commons.global_position,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
      [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {bind: 'internalCampaignAttributes'},
      [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: commons.intCmpClose,
      [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {bind: 'siteActionName'}
    }
  ));

  return {
    appOnClickStart,
    modalPageView,
    interactionLink,
    appOnclickstartList,
    appOnclickstartNotification,
    appPageVisit,
    appPageVisitNotification,
    appStarted,
    appStartedNotification,
    appStep2,
    appCompleted,
    campaignFootprint,
    closeCampaign,
    appCompletedNotification
  };
};
