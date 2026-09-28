module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');

  const ANALYTICS_FEATURE_FLAG_UNSUBSCRIBE = {
    'key': 'glomo.analytics.unsubscribe',
    'defaultValue': true
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'area personal',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: '',
    [CONSTANTS.APPLICATION_FULLFILMENT]: ''
  };

  const PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: ''
    }
  };

  const INTERNAL_LINK_UNSUBSCRIBE = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'darse de baja'
    }
  };

  [PAGE_VIEW,
    INTERNAL_LINK_UNSUBSCRIBE
  ].forEach(item => utils.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_UNSUBSCRIBE));

  return {
    PAGE_VIEW,
    INTERNAL_LINK_UNSUBSCRIBE,
    ANALYTICS_FEATURE_FLAG_UNSUBSCRIBE
  };
};