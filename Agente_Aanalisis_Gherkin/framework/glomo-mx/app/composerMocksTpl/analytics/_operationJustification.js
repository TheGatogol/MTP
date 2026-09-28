module.exports = () => {
  const constants = require('./common/_constants');
  const litrals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getOnClickStart,
    getAppStep,
    getPageVisit,
    getAppStartedWithLevel2,
    getAppCompletedLevel2,
    getAdvancedFootprintWithLevel3,
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintErrorLevel2
  } = require('./common/_utils');

  const flagOperationJustification =  'operationJustification.moneyLaundering';
  const flagOperationJustificationErrorFootprint = 'operationJustification.moneyLaundering.footprint';

  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: litrals.operative.operationJustification,
    [constants.APPLICATION_APPLICATION_NAME]: litrals.commons.operationsInformation,
    [constants.APPLICATION_APPLICATION_TYPE]: litrals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: litrals.commons.online
  };

  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: litrals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: litrals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: litrals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: litrals.commons.operationsInformation
  };

  const appOnClickStart = getAnalyticFeatureFlag(
    flagOperationJustification,
    getOnClickStart(
      'continuar justificacion',
      litrals.commons.information,
      {
        ...commons,
        ...commonApplication,
        [constants.PAGE_PAGEINFO_LEVEL2]: 'justificacion'
      }
    )
  );

  const appPageVisit = getAnalyticFeatureFlag(
    flagOperationJustification,
    getPageVisit(
      '1 documentos', {
        [constants.APPLICATION_STATE]: litrals.commons.init,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: litrals.commons.transaction,
        ...commons,
        ...commonApplication
      })
  );

  const appStarted = getAnalyticFeatureFlag(
    flagOperationJustification,
    getAppStartedWithLevel2('1 documentos', {
      [constants.APPLICATION_STEP]: { bind: 'aplicationStep' },
      [constants.PAGE_PAGEINFO_PAGEINTENT]: litrals.commons.transaction,
      ...commons,
      ...commonApplication
    })
  );

  const appStepNumber = (stepNumber, applicationStep) => {
    return getAnalyticFeatureFlag(
      flagOperationJustification,
      getAppStep(
        `${stepNumber}`, {
          [constants.PAGE_PAGEINFO_LEVEL2]: `${stepNumber} ${applicationStep}`,
          [constants.APPLICATION_STEP]: `${stepNumber} ${applicationStep}`,
          [constants.PAGE_PAGEINFO_PAGEINTENT]: litrals.commons.transaction,
          ...commons,
          ...commonApplication
        })
    );
  };

  const appStep = (stepNumber, data = {}) => {
    const stepConfig = {
      '2': appStepNumber('2', litrals.commons.termsAndConditions, data),
      '3': appStepNumber('3', litrals.commons.confirmation, data)
    };
    return stepConfig[stepNumber];
  };

  const appCompleted = getAnalyticFeatureFlag(
    flagOperationJustification,
    getAppCompletedLevel2(
      litrals.commons.successfulPage,
      litrals.commons.ended, {
        ...commons,
        ...commonApplication,
        [constants.APPLICATION_CUSTOM_FIELDS]: litrals.commons.signToken,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: litrals.commons.transaction
      }
    )
  );

  const appPageViewTwoLevels = (level2) =>{
    return getAnalyticFeatureFlag(
      flagOperationJustification,
      getAdvancedFootprintWithLevel2(level2, {
        [constants.PAGE_PAGEINFO_PAGEINTENT]: litrals.commons.information,
        ...commons
      })
    );
  };

  const appPageViewThreeLevels = (level2, level3) =>{
    return getAnalyticFeatureFlag(
      flagOperationJustification,
      getAdvancedFootprintWithLevel3(level3, {
        [constants.PAGE_PAGEINFO_PAGEINTENT]: litrals.commons.information,
        [constants.PAGE_PAGEINFO_LEVEL2]: level2,
        ...commons
      })
    );
  };

  const appPageErrorTwoLevels = (level1, level2) =>{
    return getAnalyticFeatureFlag(
      flagOperationJustificationErrorFootprint,
      getAdvancedFootprintErrorLevel2(level1, level2, {
        [constants.PAGE_PAGEINFO_PAGEINTENT]: litrals.commons.information,
        ...commons
      })
    );
  };

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStep,
    appCompleted,
    appPageViewTwoLevels,
    appPageViewThreeLevels,
    appPageErrorTwoLevels
  };
};
