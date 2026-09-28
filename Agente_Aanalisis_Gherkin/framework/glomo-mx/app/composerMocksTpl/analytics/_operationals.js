/* eslint-disable camelcase, new-cap */
/* eslint-disable max-len */
const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
const LITERALS = require('./common/_literals');

const bindLiterals = {
  PROJECT_NAME_GLOMO: LITERALS.sections.glomo,
  PROJECT_NAME_GLOMO_ALWAYSON: LITERALS.sections.glomoAlwaysOn
};

const operativesStandin = {
  transfers: {
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: {
      bind: 'pagePageInfoProjectName'
    }
  }
};

const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.global_position,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.outstanding,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};

const APP_ON_CLICK_START_OPERATIONS = (globalApplication, applicationName, productPrimaryCategory) => ({
  ...COMMON,
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: globalApplication,
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: applicationName,
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
  [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
  [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: productPrimaryCategory
});

const get_internal_link = (flagName, textInteractionName, pageLevel1) => {
  let obj = {
    ...COMMON
  };
  if (pageLevel1) {
    obj[CONSTANTS.PAGE_PAGEINFO_LEVEL1] = pageLevel1;
  }
  return UTILS.getAnalyticFeatureFlag(flagName, UTILS.getInternalLink(textInteractionName, obj));
};

const get_onclick_start = (flagName, newOperations, globalApplication, applicationName, productPrimaryCategory, leavel3 = '') => {
  return UTILS.getAnalyticFeatureFlag(flagName,
    UTILS.getOnClickStart(
      newOperations,
      LITERALS.commons.information,
      APP_ON_CLICK_START_OPERATIONS(globalApplication, applicationName, productPrimaryCategory),
      {...operativesStandin?.[globalApplication], ...(leavel3 && { [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: leavel3 }) }
    ));
};

module.exports = () => {
  return {
    get_onclick_start,
    get_internal_link,
    bindLiterals
  };
};
