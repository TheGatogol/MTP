module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');

  const ANALYTICS_FEATURE_FLAG = {
    'key': 'glomo.analytics.unsubscribe',
    'defaultValue': true
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'area personal',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'darse de baja',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: '',
    [CONSTANTS.APPLICATION_FULLFILMENT]: ''
  };

  const PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON
    }
  };

  const INTERNAL_LINK_POINT_ATTENTION = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'puntos de atencion'
    }
  };

  const INTERACTION_LINK_PHONE = {
    type: LITERALS.types.link,
    action: LITERALS.actions.interactionLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.APPLICATION_INTERACTION_LEVEL]: 'contactanos'
    }
  };

  [PAGE_VIEW,
    INTERNAL_LINK_POINT_ATTENTION,
    INTERACTION_LINK_PHONE
  ].forEach(item => utils.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));

  return {
    PAGE_VIEW,
    INTERNAL_LINK_POINT_ATTENTION,
    INTERACTION_LINK_PHONE,
    ANALYTICS_FEATURE_FLAG
  };
};