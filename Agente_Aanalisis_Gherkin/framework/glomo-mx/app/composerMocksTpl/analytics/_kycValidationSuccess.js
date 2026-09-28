module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const utils = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const ANALYTICS_FEATURE_FLAG = {
    'key': 'glomo.analytics.profile.kycValidation',
    'defaultValue': true
  };

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const APPLICATION_COMMON = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.financialHabits,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.sections.habitosFinancieros,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };

  const _LEVELS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.habitosFinancieros,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: ''
  };

  const APP_COMPLETED = utils.getAppCompleted(LITERALS.commons.successfulPage, 'finalizado', {
    ...PAGE_COMMON,
    ..._LEVELS,
    ...APPLICATION_COMMON
  });

  return {
    ANALYTICS_FEATURE_FLAG,
    APP_COMPLETED
  };
};