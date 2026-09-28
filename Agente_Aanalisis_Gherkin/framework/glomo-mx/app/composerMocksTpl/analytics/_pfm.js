/* eslint-disable no-unused-vars */
module.exports = CONFIG => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const {
    getInteractionLink,
    getInternalLink,
    getInternalLinkWithLevel2,
    getAdvancedFootprintWithLevel2,
    addFeatureFlag,
    getAdvancedFootprintWithLevels2And3
  } = require('./common/_utils');

  const ANALYTICS_COMMON_PFM_FEATURE_FLAG = {
    key: 'glomo.analytics.pfm',
    defaultValue: true
  };

  const ANALYTICS_PFM_RECATEGORIZE_MOVEMENT_FEATURE_FLAG = {
    key: 'glomo.analytics.pfmRecategorizeMovement',
    defaultValue: true
  };

  const ANALYTICS_PFM_DASHBOARD_VIEW_MORE_ACCESS_FEATURE_FLAG = {
    key: 'glomo.analytics.pfm.viewMoreAccess',
    defaultValue: true
  };

  const ANALYTICS_PFM_DASHBOARD_FOOTER_ACCESS_FEATURE_FLAG = {
    key: 'glomo.analytics.pfm.footerAccess',
    defaultValue: true
  };

  const COMMON_PFM_GRAPH_VIEW_CATEGORY_PREFIX = 'categoria ';
  const COMMON_PFM_GRAPH_VIEW_SUBCATEGORY_PREFIX = 'subcategoria ';
  const COMMON_PFM_LINEAL_GRAPH_VIEW_GROUP = 'periodo actual';

  const COMMON_DATA = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.pfm,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: 'online',
    [CONSTANTS.USER_USERSTATE]: 'logado'
  };

  const COMMON_DATA_PFM = {
    ...COMMON_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'pfm'
  };

  const COMMON_DATA_GLOBAL_POSITION = {
    ...COMMON_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'posicion global'
  };

  const COMMON_PAGE_VIEW = {
    ...COMMON_DATA_PFM,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.empty
  };

  const COMMON_APP_STEP_RECATEGORIZE = {
    ...COMMON_DATA_PFM,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'autogestion',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'recategorizar movimiento',
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'movement recategorization',
    [CONSTANTS.APPLICATION_FULLFILMENT]: 'online'
  };

  const DASHBOARD_FOOTER_INTERNAL_EVENT = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON_DATA_GLOBAL_POSITION,
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'click en tab bar'
    },
    featureFlag: ANALYTICS_PFM_DASHBOARD_FOOTER_ACCESS_FEATURE_FLAG
  };

  const DASHBOARD_VIEW_MORE_INTERNAL_EVENT = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON_DATA_GLOBAL_POSITION,
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'click en ver mas'
    },
    featureFlag: ANALYTICS_PFM_DASHBOARD_VIEW_MORE_ACCESS_FEATURE_FLAG
  };

  const createInteractionLinkWithLevel2 = (level2, interaction) => {
    const interactionLinkWithLevel2 = getInteractionLink(interaction, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      ...COMMON_PAGE_VIEW,
      [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: LITERALS.commons.siteAppName
    });
    addFeatureFlag(interactionLinkWithLevel2, ANALYTICS_COMMON_PFM_FEATURE_FLAG);
    return interactionLinkWithLevel2;
  };

  const createInteractionLinkWithLevel2and3 = (level2, level3, interaction) => {
    const interactionLinkWithLevel2and3 = getInteractionLink(interaction, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
      ...COMMON_PAGE_VIEW,
      [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: LITERALS.commons.siteAppName
    });
    addFeatureFlag(interactionLinkWithLevel2and3, ANALYTICS_COMMON_PFM_FEATURE_FLAG);
    return interactionLinkWithLevel2and3;
  };

  const createInternalLink = (action, viewMoreFF = false) => {
    const internalLink = getInternalLink(action, {...COMMON_DATA_GLOBAL_POSITION});
    addFeatureFlag(internalLink, viewMoreFF ?  ANALYTICS_PFM_DASHBOARD_VIEW_MORE_ACCESS_FEATURE_FLAG : ANALYTICS_COMMON_PFM_FEATURE_FLAG);
    return internalLink;
  };

  const createInternalLinkWithLevel2 = (level2, internalLink) => {
    const interactionLinkWithLevel2 = getInternalLinkWithLevel2(internalLink, level2, {
      ...COMMON_PAGE_VIEW,
      [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: LITERALS.commons.siteAppName
    });
    addFeatureFlag(interactionLinkWithLevel2, ANALYTICS_COMMON_PFM_FEATURE_FLAG);
    return interactionLinkWithLevel2;
  };

  const createAdvancedFootprintWithLevel2 = (level2) => {
    const advancedFootprintWithLevel2 =  getAdvancedFootprintWithLevel2(level2, {
      ...COMMON_PAGE_VIEW
    });
    addFeatureFlag(advancedFootprintWithLevel2, ANALYTICS_COMMON_PFM_FEATURE_FLAG);
    return advancedFootprintWithLevel2;
  };

  const createAdvancedFootprintWithLevel2and3 = (level2, level3) => {
    const advancedFootprintWithLevel2 =  getAdvancedFootprintWithLevel2(level2, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
      ...COMMON_PAGE_VIEW
    });
    addFeatureFlag(advancedFootprintWithLevel2, ANALYTICS_COMMON_PFM_FEATURE_FLAG);
    return advancedFootprintWithLevel2;
  };

  const pfmDashboardDetailPageView = getAdvancedFootprintWithLevel2('mi dinero', {
    ...COMMON_PAGE_VIEW,
    [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: LITERALS.commons.siteAppName
  });

  const PFM_MOVEMENTS_DETAIL_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON_PAGE_VIEW,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'movimientos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle'
    },
    featureFlag: ANALYTICS_COMMON_PFM_FEATURE_FLAG
  };

  const PFM_MOVEMENTS_RECATEGORIZE_ON_CLICK_START_EVENT = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON_APP_STEP_RECATEGORIZE,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'movimientos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle',
      [CONSTANTS.APPLICATION_STEP]: 'recategorizar'
    },
    featureFlag: ANALYTICS_PFM_RECATEGORIZE_MOVEMENT_FEATURE_FLAG
  };

  const PFM_SETTINGS_FLOW_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON_PAGE_VIEW,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'configuracion'
    },
    featureFlag: ANALYTICS_COMMON_PFM_FEATURE_FLAG
  };

  const PFM_CATEGORIZATION_CATEGORY_PAGE_VIEW = getAdvancedFootprintWithLevels2And3({bind: 'level2'}, {bind: 'level3'}, {...COMMON_PAGE_VIEW});

  [
    pfmDashboardDetailPageView,
    PFM_CATEGORIZATION_CATEGORY_PAGE_VIEW
  ].forEach(analytic => addFeatureFlag(analytic, ANALYTICS_COMMON_PFM_FEATURE_FLAG));

  return {
    createInternalLink,
    createInteractionLinkWithLevel2,
    createAdvancedFootprintWithLevel2,
    createInteractionLinkWithLevel2and3,
    createInternalLinkWithLevel2,
    createAdvancedFootprintWithLevel2and3,
    DASHBOARD_VIEW_MORE_INTERNAL_EVENT,
    DASHBOARD_FOOTER_INTERNAL_EVENT,
    pfmDashboardDetailPageView,
    PFM_MOVEMENTS_DETAIL_PAGE_VIEW,
    PFM_MOVEMENTS_RECATEGORIZE_ON_CLICK_START_EVENT,
    PFM_SETTINGS_FLOW_PAGE_VIEW,
    COMMON_PFM_GRAPH_VIEW_CATEGORY_PREFIX,
    COMMON_PFM_GRAPH_VIEW_SUBCATEGORY_PREFIX,
    COMMON_PFM_LINEAL_GRAPH_VIEW_GROUP,
    PFM_CATEGORIZATION_CATEGORY_PAGE_VIEW
  };
};
