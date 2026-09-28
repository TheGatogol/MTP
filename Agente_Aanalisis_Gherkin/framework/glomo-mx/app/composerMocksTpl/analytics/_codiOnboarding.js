const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAppOnClickStartLevel,
  getAnalyticFeatureFlag,
  getAppPageVisitLevel2,
  getAppStartedWithLevel2,
  getAppStep,
  getAppCompletedLevel2,
  getAdvancedFootprintWithLevel1,
  getAdvancedFootprintWithLevel2,
  getInternalLink
} = require('./common/_utils');
const _setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
module.exports = () => {
  const analyticsFeatureFlag = 'codi';
  const _common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const _commonsApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.mobileTransfersActivation,
    [constants.APPLICATION_APPLICATION_NAME]: literals.codiOperative.registerCodi,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.applicationName.selfManagement
  };
  const _commonsPage = {
    ..._common,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    ..._commonsApplication,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.codiOperative.registerCodi
  };
  const _commonBind = {
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: { bind: 'pageSegment' },
    [constants.PAGE_PAGEINFO_AREA]: { bind: 'infoArea' },
    [constants.USER_USERSTATE]: { bind: 'userState' }
  };
  const appOnClickStartCodiOnboarding = getAppOnClickStartLevel({
    [constants.PAGE_PAGEINFO_LEVEL1]: {bind: 'level1'},
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_STEP]: { bind: 'appStepCodiOnboarding' },
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    ..._commonBind,
    ..._commonsApplication
  });
  const pageVisit = getAppPageVisitLevel2('1 ' + literals.commons.confirmation, {
    ..._commonsPage
  });
  const appStarted = getAppStartedWithLevel2('1 ' + literals.commons.confirmation, {
    ..._commonsPage,
    [constants.APPLICATION_STEP]: { bind: 'appStep' }
  });
  const otpStep = getAppStep(2, {
    ..._commonsPage,
    [constants.PAGE_PAGEINFO_LEVEL2]: '2 ' + literals.commons.otp,
    [constants.APPLICATION_STEP]: '2 ' + literals.commons.otp,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signSMS
  });
  const pageCompleted = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.ended, {
    ..._commonsPage,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'setIdOperation' },
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signSMS
  });
  const fingerPrintPageView = getAdvancedFootprintWithLevel1(literals.codiOperative.informationCodi, {
    ..._common,
    ..._commonBind
  });

  const footprintDefaultAppCodi = getAdvancedFootprintWithLevel2(literals.codiOperative.defaultAppCodi, {
    ..._common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.codiOperative.registerCodi
  });

  const footprintIsNotAvailableCodi = getAdvancedFootprintWithLevel2(literals.codiOperative.isNotAvailableCodi, {
    ..._common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.codiOperative.registerCodi
  });

  const footprintValidatingYourRegistration = getAdvancedFootprintWithLevel2(literals.codiOperative.validatingYourRegistration, {
    ..._common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.codiOperative.registerCodi
  });

  const internalLink = getInternalLink(literals.codiOperative.selectDefaultAppCodi, {
    ..._common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.codiOperative.registerCodi,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.codiOperative.defaultAppCodi
  });
  return {
    ...Object.entries({
      appOnClickStartCodiOnboarding,
      pageVisit,
      appStarted,
      otpStep,
      pageCompleted,
      fingerPrintPageView,
      internalLink,
      footprintDefaultAppCodi,
      footprintIsNotAvailableCodi,
      footprintValidatingYourRegistration
    }).reduce((acum, item) => {
      const key = item[0];
      const digitalData = item[1];
      _setFeatureFlags(analyticsFeatureFlag, digitalData);
      return {
        ...acum,
        ...{ [key]: digitalData }
      };
    }, {})
  };
};
