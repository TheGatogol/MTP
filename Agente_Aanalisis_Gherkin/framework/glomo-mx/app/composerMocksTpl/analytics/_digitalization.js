const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  addFeatureFlag,
  getAppStarted,
  getAdvancedFootprint,
  getInternalLink,
  getPageVisitWithLevel3,
  getAppStepWithLevel3,
  getAppCompleted
} = require('./common/_utils');

const levels = {
  level3BirthCertificate: '1 acta de nacimiento',
  level3ValidationInProgress: 'validacion en curso',
  level3AlreadyValidated: 'acta de nacimiento ya validada',
  level4Upload: 'subir acta'
};

const featureFlags = {
  funnel: {
    key: 'glomo.analytics.documentUpdateYoung.funnel',
    defaultValue: true
  },
  footprintError: {
    key: 'glomo.analytics.documentUpdateYoung.footprintError.errors',
    defaultValue: true
  },
  interaction: {
    key: 'glomo.analytics.documentUpdateYoung.interaction',
    defaultValue: true
  }
};

const withFeatureFlag = (analytic, featureFlag) => {
  addFeatureFlag(analytic, featureFlag);
  return analytic;
};

const withInapProfile = payload => ({
  ...payload,
  [constants.USER_SEGMENT_PROFILE]: literals.commons.inap
});

const commons = {
  [constants.PAGE_PAGEINFO_LEVEL1]: 'cuenta jovenes',
  [constants.PAGE_PAGEINFO_LEVEL2]: 'actualizacion documentos',
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
  [constants.PAGE_PAGEINFO_LANGUAGE]: literals.commons.language,
  [constants.USER_SEGMENT_GLOBAL]: '003001',
  [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
};

const applicationCommons = {
  [constants.APPLICATION_GLOBAL_APPLICATION]: 'account youngsters',
  [constants.APPLICATION_APPLICATION_NAME]: 'actualizacion documentos',
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.autogestion,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online
};

const commonsPageVisit = {
  ...commons,
  ...applicationCommons
};

const uploadContext = {
  [constants.PAGE_PAGEINFO_LEVEL3]: levels.level3BirthCertificate,
  [constants.PAGE_PAGEINFO_LEVEL4]: levels.level4Upload
};

const createFootprint = payload => getAdvancedFootprint(payload);

module.exports = () => {
  const appPageVisit = (level3) => withFeatureFlag(
    getPageVisitWithLevel3(
      level3,
      commonsPageVisit,
      {
        [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue,
        [constants.USER_SEGMENT_PROFILE]: literals.commons.inap
      }
    ),
    featureFlags.funnel
  );

  const appStarted = (level3) => withFeatureFlag(
    getAppStarted(
      level3,
      withInapProfile({
        ...commonsPageVisit,
        [constants.APPLICATION_STEP]: levels.level4Upload
      })
    ),
    featureFlags.funnel
  );

  const appStep = (numberStep, level3) => withFeatureFlag(
    getAppStepWithLevel3(
      numberStep,
      level3,
      withInapProfile(commonsPageVisit)
    ),
    featureFlags.funnel
  );

  const appCompleted = withFeatureFlag(
    getAppCompleted(
      literals.commons.underReview,
      commons,
      applicationCommons,
      {
        [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
        [constants.APPLICATION_STATE]: literals.commons.underReview,
        [constants.APPLICATION_STEP]: literals.commons.successfulPage,
        [constants.USER_SEGMENT_PROFILE]: literals.commons.inap
      }
    ),
    featureFlags.funnel
  );

  const advancedFootprintCertificate = withFeatureFlag(
    createFootprint({
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL3]: levels.level3BirthCertificate
    }),
    featureFlags.funnel
  );

  const advancedFootprintValidate = withFeatureFlag(
    createFootprint(
      withInapProfile({
        ...commons,
        [constants.PAGE_PAGEINFO_LEVEL3]: levels.level3ValidationInProgress
      })
    ),
    featureFlags.funnel
  );

  const advancedFootprintAccepted = withFeatureFlag(
    createFootprint(
      withInapProfile({
        ...commons,
        [constants.PAGE_PAGEINFO_LEVEL3]: levels.level3AlreadyValidated
      })
    ),
    featureFlags.funnel
  );

  const pageViewUploadMinutes = withFeatureFlag(
    createFootprint({
      ...commons,
      ...uploadContext
    }),
    featureFlags.funnel
  );

  const advancedFootprintError = (level3) => {
    return withFeatureFlag(
      createFootprint({
        ...commons,
        [constants.PAGE_PAGEINFO_LEVEL3]: level3,
        [constants.PAGE_PAGEINFO_ERRORPAGE]: level3
      }),
      featureFlags.footprintError
    );
  };

  const internalLink = activityLink => withFeatureFlag(
    getInternalLink(
      activityLink,
      {
        ...commons,
        ...uploadContext
      }
    ),
    featureFlags.interaction
  );

  return {
    appPageVisit,
    appStarted,
    appStep,
    appCompleted,
    advancedFootprintCertificate,
    advancedFootprintValidate,
    advancedFootprintAccepted,
    pageViewUploadMinutes,
    advancedFootprintError,
    internalLink
  };
};
