module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const ANALYTICS_FEATURE_FLAG = {
    GLOBAL: {
      key: 'glomo.analytics.mortgage.certificate.review',
      defaultValue: true
    },
    LINK: {
      key: 'glomo.analytics.mortgage.certificate.review.link',
      defaultValue: true
    }
  };

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamos',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'certificado hipotecario',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const _MORTGAGE_REVIEW_LINK = {
    ..._COMMON,
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'consultar certificado hipotecario'
  };

  const _CERTIFICATE_CANCELLATION = {
    ... _COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'cancelar certificado'
  };

  const _CANCELLATION_SUCCESSS = {
    ..._COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'cancelacion exitosa'
  };

  const PAGE_VIEW_1 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON
    }
  };

  const INTERNAL_LINK_1 = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._MORTGAGE_REVIEW_LINK
    }
  };

  const PAGE_VIEW_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._CERTIFICATE_CANCELLATION
    }
  };

  const PAGE_VIEW_3 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._CANCELLATION_SUCCESSS
    }
  };

  const GLOBAL_FLAGS = [
    PAGE_VIEW_1,
    PAGE_VIEW_2,
    PAGE_VIEW_3
  ];

  GLOBAL_FLAGS.forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG.GLOBAL));
  UTILS.addFeatureFlag(INTERNAL_LINK_1, ANALYTICS_FEATURE_FLAG.LINK);

  return {
    PAGE_VIEW_1,
    INTERNAL_LINK_1,
    PAGE_VIEW_2,
    PAGE_VIEW_3
  };

};
