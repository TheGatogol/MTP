module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAnalyticFeatureFlagError,
    getAdvancedFootprint,
    getAdvancedFootprintWithLevel3,
    getAdvancedFootprintWithLevel4,
    getAdvancedFootprintError,
    getAppCompletedRaw,
    getAppStarted,
    getOnClickStart,
    getPageVisit
  } = require('./common/_utils');
  const _setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const _setFeatureFlagsError = (featureFlag, analytic) => (getAnalyticFeatureFlagError(featureFlag, analytic));
  const analyticsFeatureFlagParentalControlCardLimits = 'youngsters.operationalLimitsCards';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonApplication = {
    ...common,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.modifyDailyCardLimits,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'debit card limits update youngsters'
  };
  const productAttributes = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.cards + ' ' + literals.commons.debit,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.linkCard
  };
  const dynamicTypology = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };
  const appOnClickStart = getOnClickStart(
    literals.commons.parentalControl + ' ' + literals.commons.debit,
    literals.commons.information,
    {
      ...commonApplication,
      ...productAttributes,
      ...dynamicTypology,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.parentalControl
    });

  const appPageVisit = getPageVisit('1 ' + literals.commons.enterNewLimit, {
    ...commonApplication,
    ...productAttributes,
    ...dynamicTypology,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.parentalControl,
    [constants.PAGE_PAGEINFO_LEVEL4]: '1 ' + literals.commons.enterNewLimit
  });

  const _getAppStarted = (elementClicked = '', showProducts = true) => {
    let analyticObjAppStarted = {
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.parentalControl,
      ...commonApplication,
      ...dynamicTypology,
      [constants.PAGE_PAGEINFO_LEVEL4]: '1 ' + literals.commons.enterNewLimit,
      [constants.APPLICATION_STEP]: elementClicked
    };

    if (showProducts) {
      analyticObjAppStarted = { ...analyticObjAppStarted, ...productAttributes  };
    }
    return getAppStarted(literals.commons.parentalControl, analyticObjAppStarted);
  };
  const infoFootprint = getAdvancedFootprintWithLevel4(
    literals.commons.parentalControl, literals.commons.information + ' ' + literals.commons.parentalControl, {
      ...common
    }
  );
  const infoFootprintInformation = getAdvancedFootprintWithLevel3(
    literals.commons.information + ' ' + literals.commons.parentalControl, {
      ...commonApplication
    }
  );
  const infoDailyAmountFootprint = getAdvancedFootprintWithLevel4(
    literals.commons.parentalControl, literals.commons.information + ' ' + literals.commons.dailyAmounts, {
      ...common
    }
  );
  const _getOperationInfoModalFootprint = getAdvancedFootprint({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.parentalControl,
    [constants.PAGE_PAGEINFO_LEVEL4]: { bind: 'level4' }
  });
  const advancedErrorFingerprint = getAdvancedFootprintError(
    literals.types.error + ' ' + literals.commons.otp, {
      ...common
    }
  );
  const appCompleted = getAppCompletedRaw(
    {
      ...commonApplication,
      ...productAttributes,
      ...dynamicTypology,
      [constants.APPLICATION_STATE]: literals.commons.ended,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.parentalControl,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.successfulPage,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
      [constants.PRODUCT_CURRENCY]: { bind: 'currency' }
    }
  );
  [
    appOnClickStart,
    appPageVisit,
    _getAppStarted,
    infoFootprint,
    infoDailyAmountFootprint,
    _getOperationInfoModalFootprint,
    appCompleted
  ].forEach(analytic => _setFeatureFlags(analyticsFeatureFlagParentalControlCardLimits, analytic));
  _setFeatureFlagsError(analyticsFeatureFlagParentalControlCardLimits, advancedErrorFingerprint);
  return {
    appOnClickStart,
    appPageVisit,
    _getAppStarted,
    infoFootprint,
    infoFootprintInformation,
    infoDailyAmountFootprint,
    _getOperationInfoModalFootprint,
    advancedErrorFingerprint,
    appCompleted
  };
};