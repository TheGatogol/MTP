const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getOnClickStart,
  addFeatureFlag,
  getAdvancedFootprint,
  getInteractionLink,
  getExternalLink
} = require('./common/_utils');
module.exports = () => {
  const featureFlagFootprint = {
    'key': 'glomo.analytics.paymentDashboard.advanceFootprint',
    'defaultValue': true
  };
  const featureFlagFunnel = {
    'key': 'glomo.analytics.financeTransactionMultipurchaseDebitPostHiring',
    'defaultValue': true
  };
  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.deferredPurchases,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments
  };
  const appOnClickStart = (appStep) => {
    const onStartData = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.operative,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.purchaseFinancingDeferral,
      [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.deferredPurchases,
      [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.debitCard
    };
    const onClickStartAnalytic = getOnClickStart(appStep, literals.commons.information, onStartData);
    addFeatureFlag(onClickStartAnalytic, featureFlagFunnel);
    return onClickStartAnalytic;
  };
  const advancedFootprint = (level4) => {
    const advancedFootPrintData = {
      ...commons,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
    const advancedFootprintAnalytic = getAdvancedFootprint(advancedFootPrintData);
    addFeatureFlag(advancedFootprintAnalytic, featureFlagFootprint);
    return advancedFootprintAnalytic;
  };

  const advancedFootprintCustom = (level4) => {
    const advancedFootPrintData = {
      ...commons,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
    };
    const advancedFootprintAnalytic = getAdvancedFootprint(advancedFootPrintData);
    addFeatureFlag(advancedFootprintAnalytic, featureFlagFootprint);
    return advancedFootprintAnalytic;
  };
  const interactionLink = (interactionLevel) => {
    const interactionLinkData = {
      ...commons,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.deferDetail,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
    };
    const interactionLinkAnalytic = getInteractionLink(interactionLevel, interactionLinkData);
    addFeatureFlag(interactionLinkAnalytic, featureFlagFootprint);
    return interactionLinkAnalytic;
  };
  const advancedFootprintWithCustoms = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.deferDetail,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  });
  const externalLink = getExternalLink({
    ...commons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.deferDetail,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.PAGE_PAGEACTIVITY_LINK_NAME]: { bind: 'linkName' },
    [constants.PAGE_PAGEACTIVITY_LINK_URL]: literals.commons.share
  });
  [
    advancedFootprintWithCustoms,
    externalLink
  ].forEach(item => addFeatureFlag(item, featureFlagFootprint));
  return {
    appOnClickStart,
    advancedFootprint,
    advancedFootprintCustom,
    interactionLink,
    advancedFootprintWithCustoms,
    externalLink
  };
};
