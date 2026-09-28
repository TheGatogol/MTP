const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils.js');
module.exports = () => {
  const LEVELS_ON_CLICK = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };
  const LEVELS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.blockCard,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  };
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diyPayments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards
  };
  const COMMON_PAGES = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.blockCreditCard,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.blockCard,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operativa
  };
  const DYNAMIC_DATA = {
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: {bind: 'productName'},
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: {bind: 'primaryCategory'},
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: {bind: 'productSubtype'},
    [CONSTANTS.APPLICATION_TYPOLOGY]: {bind: 'typology'},
    [CONSTANTS.APPLICATION_PROCESS]: {bind: 'process'},
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'},
    [CONSTANTS.APPLICATION_STATE]: {bind: 'aplicationState'},
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {bind: 'operationNumber'}
  };
  const DYNAMIC_ON_CLICK_DATA = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.commons.creditCards,
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: {bind: 'cardTitle'}
  };
  const FULL_DATA = { ...COMMON, ...COMMON_PAGES };
  const APP_ON_CLICK_START_OPERATION = UTILS.getOnClickStart(LITERALS.commons.cardDetail, LITERALS.commons.information, FULL_DATA, DYNAMIC_ON_CLICK_DATA, LEVELS_ON_CLICK);
  const APP_PAGE_VISIT = UTILS.getPageVisit('1 ' + LITERALS.commons.reason, FULL_DATA, DYNAMIC_DATA, LEVELS);
  const APP_STARTED = UTILS.getDynamicAppStarted('1 ' + LITERALS.commons.reason, FULL_DATA, DYNAMIC_DATA, LEVELS);
  const APP_COMPLETED = UTILS.getAppCompleted(LITERALS.commons.successfulPage, LITERALS.commons.ended, FULL_DATA, DYNAMIC_DATA, LEVELS, {
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.ended,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.ended
  });
  const _getAdvancedFootprint = () => {
    return UTILS.getAnalyticFeatureFlag('blockAndReplacement', UTILS.getAdvancedFootprintWithLevel4('3 ' + LITERALS.commons.threeAddress, LITERALS.commons.anotherBranch, FULL_DATA, LEVELS));
  };
  const _getAppStepWithLevel3 = (step, level3) => {
    return UTILS.getAnalyticFeatureFlag('blockAndReplacement', UTILS.getAppStepWithLevel3(step, level3, FULL_DATA, DYNAMIC_DATA, LEVELS));
  };
  [
    APP_ON_CLICK_START_OPERATION,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED
  ].forEach(key => UTILS.getAnalyticFeatureFlag('blockAndReplacement', key));
  return {
    APP_ON_CLICK_START_OPERATION,
    APP_PAGE_VISIT,
    APP_STARTED,
    _getAdvancedFootprint,
    _getAppStepWithLevel3,
    APP_COMPLETED
  };
};