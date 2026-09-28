const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getPageVisitRaw,
  getAppStartedWithoutLevel,
  getAppStep,
  getAppCompletedRaw,
  getAdvancedFootprint,
  getAdvancedFootprintWithLevel4,
  getAdvancedFootprintError,
  getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError
} = require('./common/_utils');

module.exports = () => {
  const common = {
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.credit,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.blingsTdc.tdcSdk
  };

  const dynamicCard = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'cardType'
    }
  };

  const commonFunnel = {
    ...common,
    [constants.APPLICATION_APPLICATION_NAME]: literals.blingsTdc.tdcSdk,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.blingsTdc.creditCardOneClick,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    ...dynamicCard
  };

  const dynamicProps = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'tdcAmount'
    },
    [constants.APPLICATION_PROCESS]: {
      bind: 'tdcCategory'
    },
    [constants.APPLICATION_OFFER]: {
      bind: 'tdcOffer'
    }
  };

  const _stepsDictionary = (step) => {
    const stepIndex = step - 2;
    const steps = [
      {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${step} ${literals.blingsTdc.howMuchDoYouSpendPerMonth}`,
        [constants.APPLICATION_STEP]: `${step} ${literals.blingsTdc.howMuchDoYouSpendPerMonth}`
      },
      {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${step} ${literals.blingsTdc.whatYouSpendTheMostOn}`,
        [constants.APPLICATION_STEP]: `${step} ${literals.blingsTdc.whatYouSpendTheMostOn}`,
        ...dynamicProps
      },
      {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${step} ${literals.blingsTdc.pointsBenefit}`,
        [constants.APPLICATION_STEP]: `${step} ${literals.blingsTdc.pointsBenefit}`,
        ...dynamicProps
      },
      {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${step} ${literals.blingsTdc.pointsCalculator}`,
        [constants.APPLICATION_STEP]: `${step} ${literals.blingsTdc.pointsCalculator}`,
        ...dynamicProps
      },
      {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${step} ${literals.blingsTdc.gift}`,
        [constants.APPLICATION_STEP]: `${step} ${literals.blingsTdc.gift}`,
        ...dynamicProps
      },
      {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${step} ${literals.blingsTdc.openGift}`,
        [constants.APPLICATION_STEP]: `${step} ${literals.blingsTdc.openGift}`,
        ...dynamicProps
      },
      {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${step} ${literals.blingsTdc.cardBenefit}`,
        [constants.APPLICATION_STEP]: `${step} ${literals.blingsTdc.cardBenefit}`,
        ...dynamicProps
      },
      {
        [constants.PAGE_PAGEINFO_LEVEL4]: `${step} ${literals.commons.confirmation}`,
        [constants.APPLICATION_STEP]: `${step} ${literals.commons.confirmation}`,
        ...dynamicProps
      }
    ];
    return steps[stepIndex];
  };

  const appPageView = getAnalyticFeatureFlag('blingsTdcFunnel', getPageVisitRaw({
    ...commonFunnel,
    [constants.PAGE_PAGEINFO_LEVEL4]: `1 ${literals.blingsTdc.welcome}`,
    [constants.APPLICATION_STEP]: `1 ${literals.blingsTdc.welcome}`,
    [constants.APPLICATION_STATE]: literals.commons.init,
    [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
  }));

  const appStarted = getAnalyticFeatureFlag('blingsTdcFunnel', getAppStartedWithoutLevel({
    ...commonFunnel,
    [constants.PAGE_PAGEINFO_LEVEL4]: `1 ${literals.blingsTdc.welcome}`,
    [constants.APPLICATION_STEP]: literals.commons.continue
  }));

  const getDynamicSteps = (step) => getAnalyticFeatureFlag('blingsTdcFunnel', getAppStep(String(step), {
    ...commonFunnel,
    ..._stepsDictionary(step)
  }));

  const appCompleted = getAnalyticFeatureFlag('blingsTdcFunnel', getAppCompletedRaw({
    ...commonFunnel,
    ...dynamicProps,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.USER_STATE]: literals.commons.finalized,
    [constants.APPLICATION_STATE]: literals.commons.finalized
  }));

  const pageViewDynamicL4 = level4 => getAnalyticFeatureFlag('blingsTdcFootPrint', getAdvancedFootprintWithLevel4(literals.blingsTdc.tdcSdk, level4, common));

  const pageViewDynamicL5 = level5 => getAnalyticFeatureFlag('blingsTdcFootPrint', getAdvancedFootprint({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.blingsTdc.welcome,
    [constants.PAGE_PAGEINFO_LEVEL5]: level5
  }));

  const pageError = getAnalyticFeatureFlagError('blingsTdcFootPrint', getAdvancedFootprintError(literals.errors.informationNotAvailable, common, {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.errors.informationNotAvailable
  }));

  return {
    appPageView,
    appStarted,
    getDynamicSteps,
    appCompleted,
    pageViewDynamicL4,
    pageViewDynamicL5,
    pageError
  };
};
