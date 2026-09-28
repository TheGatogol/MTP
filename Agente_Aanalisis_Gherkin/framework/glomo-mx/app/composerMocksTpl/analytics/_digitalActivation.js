module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const ANALYTICS_FEATURE_FLAG_FLOW = {
    'key': 'glomo.analytics.digitalActivation',
    'defaultValue': true
  };
  const ANALYTICS_FEATURE_FLAG_ERROR = {
    'key': 'glomo.analytics.digitalActivationError',
    'defaultValue': true
  };
  const PAGE_COMMON_NATIVE = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.public,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.login,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.persons
  };
  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.public,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.mobileTokenRegistration,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const APPLICATION_COMMON = {
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.mobileTokenRegistration,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.highCustomers,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.digitalActivation,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };
  const _COMMON_ERROR_PAGE = (error) => ({
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: error
  });
  const _COMMON_USER = (state, segmentProf) => ({
    [CONSTANTS.USER_USERSTATE]: state,
    [CONSTANTS.USER_SEGMENT_PROFILE]: segmentProf,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes
  });
  const COMMON_BINDINGS = {
    [CONSTANTS.USER_SEGMENT_PROFILE]: {
      bind: 'profile'
    }
  };
  const COMMON_BINDINGS_STEP = {
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'step'
    }
  };
  const DIYNAMIC_BINDS_TYPOLOGY = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };
  const COMMON = {
    ...PAGE_COMMON,
    ...APPLICATION_COMMON
  };
  const COMMON_HUELLA = {
    ...PAGE_COMMON
  };
  const APP_PAGE_VISIT = UTILS.getPageVisitWithLevel3('', {
    ..._COMMON_USER(LITERALS.commons.noLogado),
    ...COMMON,
    ...COMMON_BINDINGS,
    [CONSTANTS.APPLICATION_STEP]: `2 ${LITERALS.commons.termsAndCondi}`,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `2 ${LITERALS.commons.termsAndCondi}`,
    ...DIYNAMIC_BINDS_TYPOLOGY
  });
  const _getOnClickStart = (type) => {
    const types = {
      web: UTILS.getOnClickStart('', LITERALS.commons.information, {
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ...COMMON,
        [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.tokenMovil,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage
      }),
      continue: UTILS.getOnClickStart(LITERALS.commons.continue, LITERALS.commons.information, {
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ...COMMON,
        ...COMMON_BINDINGS,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.identifyYourself
      }),
      transversal: UTILS.getOnClickStart(LITERALS.commons.dontHaveCard, LITERALS.commons.information, {
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ...COMMON,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.identifyYourself,
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.general,
        [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.enrollmentDigital
      })
    };
    return types[type];
  };
  const APP_STARTED = UTILS.getAppStartedWithLevel2(`1 ${LITERALS.commons.termsAndCondi}`, {
    ...COMMON,
    ...COMMON_BINDINGS_STEP,
    ...COMMON_BINDINGS,
    ...DIYNAMIC_BINDS_TYPOLOGY,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.mobileTokenRegistration,
    ..._COMMON_USER(LITERALS.commons.noLogado, LITERALS.commons.unknown)
  });
  const _getAdvancedFootprint = (type, level, ...data) => {
    const types = {
      default: UTILS.getAdvancedFootprintWithLevel2(level, {
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ...COMMON_HUELLA,
        ...COMMON_BINDINGS
      }),
      alert: UTILS.getAdvancedFootprintWithLevel2(level, {
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ...COMMON_HUELLA,
        ...COMMON_BINDINGS
      }),
      common: UTILS.getAdvancedFootprintWithLevel2(level, {
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ...COMMON_HUELLA,
        ...COMMON_BINDINGS,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.mobileTokenRegistration
      }),
      error: UTILS.getAdvancedFootprintWithLevel2(level, {
        ..._COMMON_ERROR_PAGE(level),
        ...ANALYTICS_FEATURE_FLAG_ERROR,
        ...COMMON_HUELLA,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.mobileTokenRegistration
      }),
      errorBlock: UTILS.getAdvancedFootprintWithLevel2(level, {
        ...ANALYTICS_FEATURE_FLAG_ERROR,
        ...COMMON_HUELLA,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level,
        ..._COMMON_ERROR_PAGE(level)
      }),
      errorUser: UTILS.getAdvancedFootprint(level, {
        ...ANALYTICS_FEATURE_FLAG_ERROR,
        ...COMMON_HUELLA,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.mobileTokenRegistration,
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ..._COMMON_ERROR_PAGE(level),
        'pageType': 'errorPage'
      }),
      userActivation: UTILS.getAdvancedFootprintWithLevel2(level, {
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ...COMMON_HUELLA,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.usersActivation
      }),
      transversal: UTILS.getAdvancedFootprintWithLevel1(level, {
        ..._COMMON_USER(LITERALS.commons.noLogado),
        ...COMMON_HUELLA,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.identifyYourself,
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.general
      }),
      ...data
    };
    return types[type];
  };
  const PASSWORD = UTILS.getAppStep('2', {
    ..._COMMON_USER(LITERALS.commons.noLogado),
    ...COMMON,
    ...COMMON_BINDINGS,
    [CONSTANTS.APPLICATION_STEP]: `2 ${LITERALS.commons.password}`,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `2 ${LITERALS.commons.password}`,
    ...DIYNAMIC_BINDS_TYPOLOGY
  });
  const CONFIRMATION = UTILS.getAppStep('3', {
    ..._COMMON_USER(LITERALS.commons.noLogado),
    ...COMMON,
    ...COMMON_BINDINGS,
    [CONSTANTS.APPLICATION_STEP]: `3 ${LITERALS.commons.confirmation}`,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `3 ${LITERALS.commons.confirmation}`,
    ...DIYNAMIC_BINDS_TYPOLOGY
  });
  const COMPLETED = UTILS.getAppCompleted('', LITERALS.commons.ended, {
    ..._COMMON_USER(LITERALS.commons.noLogado),
    ...DIYNAMIC_BINDS_TYPOLOGY,
    ...COMMON,
    ...COMMON_BINDINGS,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage
  });
  [
    APP_PAGE_VISIT,
    APP_STARTED,
    _getOnClickStart,
    _getAdvancedFootprint,
    COMPLETED
  ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_FLOW));
  return {
    APP_PAGE_VISIT,
    APP_STARTED,
    _getOnClickStart,
    PASSWORD,
    CONFIRMATION,
    _getAdvancedFootprint,
    COMPLETED
  };
};
