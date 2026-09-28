module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    addFeatureFlag,
    getAdvancedFootprint,
    getAppOnClickStartLevel2AppType
  } = require('./common/_utils');
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const appOnClickStartGiveMoney = getAppOnClickStartLevel2AppType(literals.commons.operative, {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.operative.transfers,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.transfers,
    [constants.APPLICATION_STEP]: literals.commons.giveMoney,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.account,
    ...common
  });
  const commonFlowLeves = (levelFive) => {
    return {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.transfers,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.giveMoney,
      [constants.PAGE_PAGEINFO_LEVEL5]: levelFive
    };
  };
  const pageViewGiveMoney = getAdvancedFootprint({
    ...commonFlowLeves(literals.commons.information)
  });
  const pageViewGiveMoneyAdvice  = getAdvancedFootprint({
    ...commonFlowLeves(literals.commons.adviceToStart)
  });
  const analitycsFeatureFlagGiveMoneyTransfer = {
    'key': 'glomo.analytics.transfer',
    'defaultValue': true
  };
  const analitycsFeatureFlagGiveMoney = {
    'key': 'glomo.analytics.youngsters.giveMoney',
    'defaultValue': true
  };
  addFeatureFlag(appOnClickStartGiveMoney, analitycsFeatureFlagGiveMoneyTransfer);
  addFeatureFlag(pageViewGiveMoney, analitycsFeatureFlagGiveMoney);
  addFeatureFlag(pageViewGiveMoneyAdvice, analitycsFeatureFlagGiveMoney);
  return {
    pageViewGiveMoney,
    pageViewGiveMoneyAdvice,
    appOnClickStartGiveMoney
  };
};