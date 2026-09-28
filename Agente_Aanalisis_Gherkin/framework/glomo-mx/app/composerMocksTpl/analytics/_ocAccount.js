const constants = require('./common/_constants');
const {
  getOnClickStart,
  getPageVisitWithLevel3,
  getAppStepWithLevel3,
  getAppStarted,
  getAppCompleted,
  getAdvancedFootprintWithLevels2And3,
  getAdvancedFootprintError,
  getAnalyticFeatureFlag
} = require('./common/_utils');
const literals = require('./common/_literals');

module.exports = () => {
  const _getCustomAnalyticFeatureFlag = (flag = '', data = {}) => getAnalyticFeatureFlag(flag, data);
  const _getBase = ({ level1 = '', pageIntent = '', projectName = '' } = {}) => {
    const fields = {
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
      [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
      [constants.PAGE_PAGEINFO_PROJECTNAME]: projectName
    };
    if (pageIntent) {
      fields[constants.PAGE_PAGEINFO_PAGEINTENT] = pageIntent;
    }
    return fields;
  };
  const _getCommonFunnel = ({ applicationStep = '' } = {}) => {
    const fields = {
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.accountSignUp,
      [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.contractAccount,
      [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.ocAccount.basicLibreton
    };
    if (applicationStep) {
      fields[constants.APPLICATION_STEP] = applicationStep;
    }
    return fields;
  };
  const accountPageBase = {
    ..._getBase({
      level1: literals.commons.account,
      pageIntent: literals.commons.transaction,
      projectName: literals.sections.glomo
    }),
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.applicationName.contractAccount
  };
  const commonDiyBase = { ...accountPageBase, ..._getCommonFunnel() };

  const getInternalCampaign = () => ({
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.commons.card,
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.account,
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: literals.empty,
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: literals.empty,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'location' },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'collectiveCode' },
    [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName'}
  });

  const appPageVisit =  getPageVisitWithLevel3('1 ' + literals.ocAccount.yourAccount, {...commonDiyBase, [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue});
  const appCompleted = getAppCompleted(literals.commons.successfulPage, literals.state.contracted, { ...commonDiyBase, [constants.PRODUCT_STATE]: 'contratado', [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.token});
  const appOnClickStart = _getCustomAnalyticFeatureFlag('dashboard.ocAccess.appOnClickStart', getOnClickStart(literals.commons.opportunities, literals.commons.information, {
    ..._getBase({level1: literals.commons.opportunities, projectName: literals.sections.glomo}),
    ..._getCommonFunnel({applicationStep: literals.commons.opportunitiesInterested}),
    ...getInternalCampaign()
  }));
  const errorServicePageView = _getCustomAnalyticFeatureFlag('account.n2AccountsPrivateZoneError', getAdvancedFootprintError(literals.ocAccount.serviceUnavailable, {...accountPageBase, [constants.PAGE_PAGEINFO_LEVEL3]: literals.ocAccount.serviceUnavailable}));
  const customAppStarted = _getCustomAnalyticFeatureFlag('account.n2AccountsPrivateZone', getAppStarted('1 ' + literals.ocAccount.yourAccount, {...accountPageBase, ..._getCommonFunnel({applicationStep: {bind: 'applicationStep'}})}));
  const getCustomAppStep = ({numberStep = '', appStep = ''} = {}) => _getCustomAnalyticFeatureFlag('account.n2AccountsPrivateZone', getAppStepWithLevel3(numberStep, numberStep + ' ' + appStep, commonDiyBase));
  const getCustomPageView = ({level3 = ''} = {}) => _getCustomAnalyticFeatureFlag('account.n2AccountsPrivateZoneAdvancedFootprint', getAdvancedFootprintWithLevels2And3(literals.applicationName.contractAccount, level3, { ...accountPageBase, ...(level3 === literals.commons.otp ? { [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.token } : {})}));

  [appPageVisit, appCompleted].forEach(item => _getCustomAnalyticFeatureFlag('account.n2AccountsPrivateZone', item));

  return {
    appOnClickStart,
    appPageVisit,
    appCompleted,
    customAppStarted,
    getCustomAppStep,
    getCustomPageView,
    errorServicePageView
  };
};
