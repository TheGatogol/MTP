const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAppOnClickStartLevel2,
  getPageVisit,
  getStaticAppStarted,
  getAppStep,
  getAppCompletedRaw,
  getAdvancedFootprintWithLevel1,
  getAdvancedFootprintWithLevel2,
  getAdvancedFootprintWithLevels2And3,
  getInternalLinkWithLevel2,
  getAdvancedFootprintErrorLevel2,
  getProduct,
  getAppOnClickStartLevel3,
  getPageVisitWithLevel3,
  getDynamicAppStarted,
  getAppStepWithLevel3,
  getAppCompleted,
  getError
} = require('./common/_utils');

module.exports = () => {
  const featureFlagExpenses = 'expensesGroup';
  const featureFlagAssociate = 'expensesGroup.associateExpense';
  const featureFlagAddCash = 'expensesGroup.addExpenseInCash';

  const _setFeatureFlag = (analytic, featureFlag = featureFlagExpenses) => (getAnalyticFeatureFlag(featureFlag, analytic));

  const _getStepLevel3 = (step, level3, data) => (getAppStepWithLevel3(step, `${step} ${level3}`, data));

  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const _getCommonsFunnel = (data = {}) => ({
    ...data,
    ...commons,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.expensesGroup,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.expensesGroup,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.selfManagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  });

  const _getCommonsFunnelAssociate = (addInCash, data = {}) => ({
    ...data,
    ...commons,
    [constants.APPLICATION_GLOBAL_APPLICATION]: addInCash ? literals.globalApplication.expensesGroupAddInCash : literals.globalApplication.expensesGroupAssociateExpense,
    [constants.APPLICATION_APPLICATION_NAME]: addInCash ? literals.applicationName.expensesGroupAddInCash : literals.applicationName.expensesGroupAssociateExpense,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  });


  const getAppStepsData = (level2, data = {}) => ({
    ...data,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.applicationName.expensesGroup,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.APPLICATION_STEP]: level2
  });

  const getInternalCampaign = (data = {}) => ({
    ...data,
    ...commons,
    [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'location' },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.discreetMode.carrusel,
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'collectiveCode' },
    [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName' },
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.account,
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: literals.empty,
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: literals.empty
  });

  const _getAppStepLevels = (level2) => ({
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.applicationName.expensesGroup,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2
  });

  const _getExpensesGroupFunnel = (param) => {
    const typeFunnel = {
      appOnClickStart: getAppOnClickStartLevel2(literals.applicationName.expensesGroup, literals.expensesGroup.groupList, _getCommonsFunnel({ [constants.APPLICATION_STEP]: literals.expensesGroup.groupList })),
      appPageVisit: getPageVisit(`1 ${literals.expensesGroup.groupName}`, _getCommonsFunnel({ [constants.PAGE_PAGEINFO_LEVEL1]: literals.applicationName.expensesGroup })),
      appStarted: getStaticAppStarted(literals.expensesGroup.insertName, '', _getCommonsFunnel(_getAppStepLevels(`1 ${literals.expensesGroup.groupName}`))),
      appStep2: getAppStep('2', _getCommonsFunnel(getAppStepsData(`2 ${literals.expensesGroup.members}`))),
      appStep3: getAppStep('3', _getCommonsFunnel(getAppStepsData(`3 ${literals.commons.confirmation}`))),
      appCompleted: getAppCompletedRaw(_getCommonsFunnel(getAppStepsData(literals.commons.successfulPage, { [constants.APPLICATION_STATE]: literals.commons.ended })))
    };
    return _setFeatureFlag(typeFunnel[param]);
  };

  const _getCommonFootPrints = (data = {}) => ({
    ...data,
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.applicationName.expensesGroup
  });

  const _getDataWithCustomFields = (data = {}) => ({
    ...data,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'createdGroups' }
  });

  const _getExpensesGroupFootPrintsAndErrors = (param) => {
    const typeFootPrint = {
      campaignPrint: getAdvancedFootprintWithLevel1(literals.commons.global_position, getInternalCampaign()),
      groupList: getAdvancedFootprintWithLevel2(literals.expensesGroup.groupList, _getDataWithCustomFields(_getCommonFootPrints())),
      myContacts: getAdvancedFootprintWithLevels2And3(literals.expensesGroup.members, literals.expensesGroup.myContacts, _getDataWithCustomFields(), _getCommonFootPrints()),
      newContact: getAdvancedFootprintWithLevels2And3(literals.expensesGroup.members, literals.expensesGroup.newContact, _getDataWithCustomFields(), _getCommonFootPrints()),
      termsAndConditions: getAdvancedFootprintWithLevel2(literals.commons.termsAndConditions, _getCommonFootPrints()),
      invitationGroup: getAdvancedFootprintWithLevel2(literals.expensesGroup.invitationGroup, _getDataWithCustomFields(), _getCommonFootPrints()),
      groupDetail: getAdvancedFootprintWithLevel2(literals.expensesGroup.groupDetail, _getCommonFootPrints()),
      memberDetail: getAdvancedFootprintWithLevel2(literals.expensesGroup.memberDetail, _getCommonFootPrints()),
      operatives: getAdvancedFootprintWithLevels2And3({ bind: 'level2' }, literals.expensesGroup.operatives, _getCommonFootPrints()),
      invitationGroupLink: getInternalLinkWithLevel2({ bind: 'linkName' }, literals.expensesGroup.invitationGroup, _getDataWithCustomFields(), _getCommonFootPrints()),
      actionsLink: getInternalLinkWithLevel2({ bind: 'linkName' }, { bind: 'level2' }, _getCommonFootPrints()),
      operativesLink: getInternalLinkWithLevel2({ bind: 'linkName' }, { bind: 'level2' }, _getCommonFootPrints({ [constants.PAGE_PAGEINFO_LEVEL3]: literals.expensesGroup.operatives })),
      limitsError: getAdvancedFootprintErrorLevel2(literals.applicationName.expensesGroup, { bind: 'error' }, _getDataWithCustomFields(commons))
    };
    return _setFeatureFlag(typeFootPrint[param]);
  };

  const _getAppStepWithProduct = (amount) => (Object.assign({},
    _getCommonsFunnelAssociate(false, _getAppStepLevels(literals.expensesGroup.associateExpense)),
    getProduct({ bind: 'primaryCategory' }, { bind: 'productSubtype' }, { bind: 'productName' }),
    amount ? { [constants.PRODUCT_AMOUNT]: amount, [constants.PRODUCT_CURRENCY]: { bind: 'currency' } } : {}
  ));

  const _getAssociateExpenseFunnel = (param) => {
    const typeFunnel = {
      appOnClickStartGroupDetail: getAppOnClickStartLevel2(literals.applicationName.expensesGroup, literals.expensesGroup.groupDetail, _getCommonsFunnelAssociate(false, { [constants.APPLICATION_STEP]: literals.expensesGroup.groupDetail })),
      appOnClickStartOperatives: getAppOnClickStartLevel3(literals.applicationName.expensesGroup, literals.expensesGroup.groupDetail, literals.expensesGroup.operatives, _getCommonsFunnelAssociate(false, { [constants.APPLICATION_STEP]: literals.expensesGroup.operatives })),
      appPageVisit: getPageVisitWithLevel3(`1 ${literals.expensesGroup.product}`, _getCommonsFunnelAssociate(false, _getAppStepLevels(literals.expensesGroup.associateExpense))),
      appStarted: getDynamicAppStarted(`1 ${literals.expensesGroup.product}`, _getCommonsFunnelAssociate(false, _getAppStepLevels(literals.expensesGroup.associateExpense))),
      appStep2: _getStepLevel3('2', 'movimiento', _getAppStepWithProduct()),
      appStep3: _getStepLevel3('3', literals.expensesGroup.expenseInformation, _getAppStepWithProduct()),
      appStep4: _getStepLevel3('4', literals.expensesGroup.expenseConfiguration, _getAppStepWithProduct({ bind: 'amount' })),
      appStep5: _getStepLevel3('5', literals.commons.confirmation, _getAppStepWithProduct({ bind: 'amount' })),
      appCompleted: getAppCompleted(literals.commons.successfulPage, literals.commons.ended, _getAppStepWithProduct({ bind: 'amount' }))
    };
    return _setFeatureFlag(typeFunnel[param], featureFlagAssociate);
  };

  const _getAssociateExpenseFootPrintsAndErrors = (param) => {
    const typeFootPrint = {
      editConfigurationExpense: getAdvancedFootprintWithLevels2And3(literals.expensesGroup.associateExpense, { bind: 'mode' }, _getCommonFootPrints()),
      operationError: getError(literals.errors.errorOperationNotAvailable, _getCommonFootPrints({ [constants.PAGE_PAGEINFO_LEVEL2]: literals.expensesGroup.associateExpense }))
    };
    return _setFeatureFlag(typeFootPrint[param], featureFlagAssociate);
  };

  const _getExpenseInCashFunnel = (param) => {
    const typeFunnel = {
      appOnClickStartGroupDetail: getAppOnClickStartLevel2(literals.applicationName.expensesGroup, literals.expensesGroup.groupDetail, _getCommonsFunnelAssociate(true, { [constants.APPLICATION_STEP]: literals.expensesGroup.groupDetail })),
      appOnClickStartOperatives: getAppOnClickStartLevel3(literals.applicationName.expensesGroup, literals.expensesGroup.groupDetail, literals.expensesGroup.operatives, _getCommonsFunnelAssociate(true, { [constants.APPLICATION_STEP]: literals.expensesGroup.operatives })),
      appOnClickStartError: getAppOnClickStartLevel3(literals.applicationName.expensesGroup, literals.expensesGroup.associateExpense, literals.errors.errorOperationNotAvailable, _getCommonsFunnelAssociate(true, { [constants.APPLICATION_STEP]: literals.expensesGroup.addExpenseInCash })),
      appPageVisit: getPageVisitWithLevel3(`1 ${literals.expensesGroup.expenseInformation}`, _getCommonsFunnelAssociate(true, _getAppStepLevels(literals.expensesGroup.addExpenseInCash))),
      appStarted: getDynamicAppStarted(`1 ${literals.expensesGroup.expenseInformation}`, _getCommonsFunnelAssociate(true, _getAppStepLevels(literals.expensesGroup.addExpenseInCash))),
      appStep2: _getStepLevel3('2', literals.expensesGroup.expenseConfiguration, _getCommonsFunnelAssociate(true, _getAppStepLevels(literals.expensesGroup.addExpenseInCash))),
      appStep3: _getStepLevel3('3', literals.commons.confirmation, _getCommonsFunnelAssociate(true, _getAppStepLevels(literals.expensesGroup.addExpenseInCash))),
      appCompleted: getAppCompleted(literals.commons.successfulPage, literals.commons.ended, _getCommonsFunnelAssociate(true, _getAppStepLevels(literals.expensesGroup.addExpenseInCash)))
    };
    return _setFeatureFlag(typeFunnel[param], featureFlagAddCash);
  };

  return {
    _getExpensesGroupFunnel,
    _getExpensesGroupFootPrintsAndErrors,
    _getAssociateExpenseFunnel,
    _getAssociateExpenseFootPrintsAndErrors,
    _getExpenseInCashFunnel
  };
};