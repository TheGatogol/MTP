const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getAnalyticFeatureFlag, getAdvancedFootprintWithLevel4, getOnClickStart, getPageVisitRaw,
  getAppStartedWithoutLevel, getAppStep, getAppCompletedRaw, getError, addFeatureFlag, getAnalyticFeatureFlagError } = require('./common/_utils');

module.exports = () => {
  const stepToIncludeCustomFields = 3;
  const stepToAddProcessSelection = 4;
  const featureFlag = 'featureSdkBlings.mortgage';

  const featureFlagBlingsMortgage = {
    'key': `glomo.analytics.${featureFlag}`,
    'defaultValue': true
  };

  const commons = {
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.operative.mortgage
  };

  const commonsFunnel = {
    [constants.APPLICATION_APPLICATION_NAME]: literals.blingsMortgage.mortgageCreditInvestment,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOff,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.mortgageLead,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.blingsMortgage.mortgageLoans,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans
  };

  const commonsComplementary = {
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.blingsMortgage.mortgageCreditInvestment,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };

  const appPageViewFootprint = (level3) => {
    const nameLevel3 = {
      welcome: 'bienvenida',
      typeProperty: literals.blingsMortgage.typeOfProperty
    }[level3];
    return getAnalyticFeatureFlag(featureFlag, getAdvancedFootprintWithLevel4(nameLevel3, { bind: 'level4' }, commons, {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: {
        bind: 'pageIntent'
      }
    }));
  };

  const appOnClickStart = getOnClickStart(literals.blingsMortgage.typeOfProperty, literals.commons.transaction, commons, commonsFunnel, {
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.blingsMortgage.typeOfProperty
  });

  const appPageVisit = getPageVisitRaw(commons, commonsFunnel, commonsComplementary, {
    [constants.PAGE_PAGEINFO_LEVEL4]: { bind: 'level4' },
    [constants.APPLICATION_STEP]: { bind: 'level4' },
    [constants.APPLICATION_STATE]: literals.commons.init,
    [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
  });

  const appStarted = getAppStartedWithoutLevel(commons, commonsFunnel, commonsComplementary, {
    [constants.PAGE_PAGEINFO_LEVEL4]: `1 ${literals.blingsMortgage.rentCollection}`,
    [constants.APPLICATION_STEP]: {
      bind: 'aplicationStep'
    }
  });

  const getAppStepVideo = (numberStep) => {
    const steps = {
      'stepLocation': { step: 2, level4: literals.blingsMortgage.locationOfProperty },
      'stepCapitalGains': { step: 3, level4: literals.blingsMortgage.historicalCapitalGains },
      'stepAskCredit': { step: 4, level4: literals.blingsMortgage.dependencyToApplyforCredit },
      'stepGoodDecision': { step: 5, level4: literals.blingsMortgage.goodDecision },
      'stepContactMe': { step: 6, level4: literals.blingsMortgage.wantToContactMe },
      'stepDate': { step: 7, level4: literals.blingsMortgage.selectDayOfTheWeek },
      'stepTime': { step: 8, level4: literals.blingsMortgage.timeSelection }
    }[numberStep];

    let commonsComplementaryStep = commonsComplementary;
    if (steps.step >= stepToIncludeCustomFields) {
      commonsComplementaryStep = { ...commonsComplementary,
        [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
      };
    }
    if (steps.step > stepToAddProcessSelection) {
      commonsComplementaryStep = { ...commonsComplementaryStep,
        [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' }
      };
    }
    return getAnalyticFeatureFlag(featureFlag, getAppStep(steps.step, commons, commonsFunnel, commonsComplementaryStep, {
      [constants.APPLICATION_STEP]: `${steps.step} ${steps.level4}`,
      [constants.PAGE_PAGEINFO_LEVEL4]: `${steps.step} ${steps.level4}`
    }));
  };

  const appCompleted = getAppCompletedRaw(commons, commonsFunnel, commonsComplementary, {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.finalized,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' }
  });

  const appErrorInformation = () => getAnalyticFeatureFlagError(featureFlag, getError(literals.errors.noInformation, commons, {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  }));

  [
    appOnClickStart,
    appPageVisit,
    appStarted,
    appCompleted
  ].forEach(analytic => addFeatureFlag(analytic, featureFlagBlingsMortgage));

  return {
    appPageViewFootprint,
    appOnClickStart,
    appPageVisit,
    appStarted,
    getAppStepVideo,
    appCompleted,
    appErrorInformation
  };
};