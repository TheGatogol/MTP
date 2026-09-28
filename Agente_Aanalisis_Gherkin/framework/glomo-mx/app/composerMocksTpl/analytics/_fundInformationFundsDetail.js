module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {addFeatureFlag, getAdvancedFootprint, getInternalLink, getAppOnClickStartLevel} = require('./common/_utils');

  const analyticsFeatureFlag = {
    analyticsFeatureFlagFunel: {
      'key': 'glomo.analytics.investmentfunds.fundInformationFundsInvestmentDetail.funel',
      'defaultValue': true
    }
  };

  const COMMON = {
    [constants.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_LANGUAGE]: literals.commons.language,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentsFunds,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle fondo',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    ['user.device.root']: 'no root'
  };

  const applicationCommon = {
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.increaseFund,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.fundsContribution,
    [constants.APPLICATION_STEP]: 'detalles de fondos',
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.PRODUCT_PRODUCT_SUBTYPE]: literals.commons.investmentFunds
  };

  const pageView = getAdvancedFootprint(COMMON);

  const internalLink = getInternalLink({ bind: 'linkName' }, COMMON);

  const appOnClick = getAppOnClickStartLevel({...COMMON, ...applicationCommon});

  [
    pageView,
    internalLink,
    appOnClick
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagFunel));

  return {
    pageView,
    internalLink,
    appOnClick
  };
};
