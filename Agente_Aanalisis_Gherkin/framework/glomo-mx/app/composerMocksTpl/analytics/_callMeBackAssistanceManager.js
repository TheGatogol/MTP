module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const utils = require('./common/_utils');

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.USER_USERSTATE]: 'logado',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Glomo'
  };

  const _COMMON_PAGE_LEVEL = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'llamada con asesor'
  };

  const PAGE_VIEW_ASSISTANCE_NOT_AVAILABLE = utils.getAdvancedFootprint(_COMMON, _COMMON_PAGE_LEVEL, {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'asesor personal no disponible'
  });

  const PAGE_VIEW_SCHEDULE_CALL = utils.getAdvancedFootprint(_COMMON, _COMMON_PAGE_LEVEL, {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'agendar llamada'
  });

  const PAGE_VIEW_SCHEDULED_CALL = utils.getAdvancedFootprint(_COMMON, _COMMON_PAGE_LEVEL, {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'llamada agendada'
  });

  const ANALYTICS_FEATURE_FLAG_ADVISOR_PERSONAL_NOT_AVAILABLE = {
    key: 'glomo.analytics.callMeBackAssistanceManager.personalAdvisorNotAvailable',
    defaultValue: true
  };

  const ANALYTICS_FEATURE_FLAG_SCHUDULE_CALL = {
    key: 'glomo.analytics.callMeBackAssistanceManager.scheduleCall',
    defaultValue: true
  };
  const ANALYTICS_FEATURE_FLAG_SCHUDULED_CALL = {
    key: 'glomo.analytics.callMeBackAssistanceManager.scheduledCall',
    defaultValue: true
  };

  utils.addFeatureFlag(PAGE_VIEW_ASSISTANCE_NOT_AVAILABLE, ANALYTICS_FEATURE_FLAG_ADVISOR_PERSONAL_NOT_AVAILABLE);
  utils.addFeatureFlag(PAGE_VIEW_SCHEDULE_CALL, ANALYTICS_FEATURE_FLAG_SCHUDULE_CALL);
  utils.addFeatureFlag(PAGE_VIEW_SCHEDULED_CALL, ANALYTICS_FEATURE_FLAG_SCHUDULED_CALL);

  return {
    PAGE_VIEW_ASSISTANCE_NOT_AVAILABLE,
    PAGE_VIEW_SCHEDULE_CALL,
    PAGE_VIEW_SCHEDULED_CALL
  };
};