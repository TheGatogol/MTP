module.exports = () => {

  const constants = require('./common/_constants');
  const {
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintWithLevel3,
    getAdvancedFootprintWithLevel4,
    getInteractionLink,
    addFeatureFlag,
    getError
  } =  require('./common/_utils');
  const literals = require('./common/_literals');

  const analyticsFollowUpFeatureFlags = {
    principal: 'dashboard.globalFinancialPosition',
    error: 'dashboard.globalFinancialPosition.errorpage',
    interaction: 'fdashboard.globalFinancialPosition.interaction'
  };

  const commonData = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.followUpInvestmentsGlobalFinancial,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.followUpInvestmentsGlobalFinancial.consolidatedFinancial
  };

  const DYNAMIC_INTERACTION_LEVEL = { bind: 'interactionLevel' };

  const dataLevel2 = {
    ...commonData,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.followUpInvestmentsGlobalFinancial.balanceSheet
  };

  const dataLevel2WithDm = {
    ...commonData,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.followUpInvestmentsGlobalFinancial.balanceSheet,
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'userSegmentProfile'
    },
    'application.customFields': {
      bind: 'applicationCustomFields'
    }
  };

  const dataLevel2WithSegment = {
    ...dataLevel2,
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'userSegmentProfile'
    }
  };

  const dataLevel4 = {
    ...dataLevel2,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.followUpInvestmentsGlobalFinancial.listOfInstruments,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.detail,
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'userSegmentProfile'
    },
    'application.customFields': {
      bind: 'applicationCustomFields'
    }
  };

  const appPageVisit = getAdvancedFootprintWithLevel2(
    literals.followUpInvestmentsGlobalFinancial.balanceSheet,
    commonData
  );

  const appPageVisitInstrumentsDetail = getAdvancedFootprintWithLevel4(
    literals.followUpInvestmentsGlobalFinancial.detail,
    literals.followUpInvestmentsGlobalFinancial.listOfInstruments,
    dataLevel4
  );

  const pageVisitLevel3 = {
    APP_PAGE_VISIT_MOVIMIENTOS: [literals.commons.transactions, dataLevel2WithSegment],
    APP_PAGE_VISIT_INSTRUMENTOS: [literals.followUpInvestmentsGlobalFinancial.listOfInstruments, dataLevel2WithDm],
    APP_PAGE_VISIT_AYUDA: [literals.followUpInvestmentsGlobalFinancial.help, dataLevel2],
    APP_PAGE_VISIT_CONSOLIDATED_ACCOUNTS: [literals.followUpInvestmentsGlobalFinancial.consolidatedAccounts, dataLevel2]
  };

  const pageVisits = Object.entries(pageVisitLevel3)
    .reduce((acc, [key, [literal, data]]) => {
      acc[key] = getAdvancedFootprintWithLevel3(literal, data);
      addFeatureFlag(acc[key], analyticsFollowUpFeatureFlags.principal);
      return acc;
    }, {});

  const interactionLinks = {
    TAB_MXN_CLICK: [literals.followUpInvestmentsGlobalFinancial.mxnCurrency, dataLevel2],
    TAB_USD_CLICK: [literals.followUpInvestmentsGlobalFinancial.usdCurrency, dataLevel2],
    DISTRIBUCION_CLICK: [literals.followUpInvestmentsGlobalFinancial.geographicalAssetAllocation, dataLevel2],
    DISTRIBUCION_DIVISA_CLICK: [literals.followUpInvestmentsGlobalFinancial.assetAllocationByCurrency, dataLevel2],
    DISTRIBUCION_ACTIVO_CLICK: [literals.followUpInvestmentsGlobalFinancial.assetAllocation, dataLevel2],
    DISTRIBUCION_PRODUCTO_CLICK: [literals.followUpInvestmentsGlobalFinancial.assetAllocationByProduct, dataLevel2],
    ELEGIR_CUENTA_CLICK: [literals.commons.chooseAccount, dataLevel2],
    EVOLUCION_ANO_ACTUAL_CLICK: [DYNAMIC_INTERACTION_LEVEL, dataLevel2],
    INSTRUMENT_PERIOD_OPTION_DETAIL: [DYNAMIC_INTERACTION_LEVEL, dataLevel4]
  };

  const interactions = Object.entries(interactionLinks)
    .reduce((acc, [key, [literal, data]]) => {
      acc[key] = getInteractionLink(literal, data);
      addFeatureFlag(acc[key], analyticsFollowUpFeatureFlags.interaction);
      return acc;
    }, {});

  const siteError = {
    ...getError(literals.errors.errorOperationNotAvailable, dataLevel2)
  };

  [
    appPageVisit,
    appPageVisitInstrumentsDetail
  ].forEach(item => addFeatureFlag(item, analyticsFollowUpFeatureFlags.principal));

  addFeatureFlag(siteError, analyticsFollowUpFeatureFlags.error);

  return {
    appPageVisit,
    appPageVisitInstrumentsDetail,
    ...pageVisits,
    ...interactions,
    siteError
  };

};
