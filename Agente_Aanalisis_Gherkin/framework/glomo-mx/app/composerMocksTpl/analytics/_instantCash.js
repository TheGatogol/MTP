/* eslint-disable camelcase, no-shadow */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');
const get_flag = UTILS.getAnalyticFeatureFlag;
const GLOBAL_FLAG = 'instantCash';
const CALL_ADVISOR_PERSONAL = 'callMeBackAssistanceManager.callPersonalAdvisor';
const CALL_ADVISOR_HEADER = 'callMeBackAssistanceManager.callPersonalHeader';
module.exports = () => {
  const _COMMON_DYNAMIC = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [CONSTANTS.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'numberOfPayments'
    },
    [CONSTANTS.APPLICATION_PAYMENT_TYPE]: {
      bind: 'paymentType'
    },
    [CONSTANTS.PRODUCT_CURRENCY]: {
      bind: 'currency'
    },
    [CONSTANTS.APPLICATION_INTEREST_TIN]: {
      bind: 'interestTin'
    },
    [CONSTANTS.APPLICATION_INTEREST_TAE]: {
      bind: 'interestTae'
    },
    [CONSTANTS.APPLICATION_INTEREST_RATE]: {
      bind: 'interestRate'
    }
  };
  const _COMMON_PAGE = (level2) => ({
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.instantCash,
    ...(level2 && { [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2 }),
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy
  });
  const _COMMON_APPLICATION = (step) => ({
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.instantCashOC,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.operative.instantCash,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_STEP]: step
  });
  const _COMMON_PRODUCT = {
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: LITERALS.commons.creditCards,
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: LITERALS.globalApplication.instantCashProductName
  };
  const INTERNAL_LINK_ASSISTANCE_MANAGER = get_flag(CALL_ADVISOR_PERSONAL, UTILS.getInternalLink(LITERALS.efi.callAnAdvisor, _COMMON_PRODUCT));
  const INTERNAL_LINK_ASSISTANCE_MANAGER_HEADER = get_flag(CALL_ADVISOR_HEADER, UTILS.getInternalLink(LITERALS.efi.callAnAdvisorHeader, _COMMON_PRODUCT));
  const APP_PAGE_VISIT = get_flag(GLOBAL_FLAG, UTILS.getPageVisit('', _COMMON_PAGE(LITERALS.commons.first_detail), _COMMON_APPLICATION(LITERALS.commons.first_detail), _COMMON_PRODUCT));
  const _COMMON_APP_STARTED = (applicationStep) => ({
    ..._COMMON_PAGE(LITERALS.commons.first_detail),
    ..._COMMON_APPLICATION(applicationStep),
    ..._COMMON_PRODUCT
  });
  const _getAppStarted = (action) => (
    get_flag(GLOBAL_FLAG, UTILS.getAppStartedWithoutLevel(_COMMON_APP_STARTED(action)))
  );
  const _COMMON_APP_STEP = (step) => ({
    ..._COMMON_DYNAMIC,
    ..._COMMON_PAGE(step),
    ..._COMMON_APPLICATION(step),
    ..._COMMON_PRODUCT
  });
  const _getAppStep = (step, literal) => (
    get_flag(GLOBAL_FLAG, UTILS.getAppStep(step, _COMMON_APP_STEP(literal)))
  );
  const getPayloadAppCompleted = (step, productState, operationNumber = '') => ({
    ..._COMMON_APP_STEP(step),
    ...(productState && {[CONSTANTS.PRODUCT_STATE]: productState}),
    ...(productState && {[CONSTANTS.APPLICATION_STATE]: productState}),
    ...(operationNumber && {[CONSTANTS.APPLICATION_OPERATION_NUMBER]: operationNumber})
  });
  const getPayloadErrorAppCompleted = (step, productState, rejectedReason) => ({
    ...getPayloadAppCompleted(step, productState),
    [CONSTANTS.USER_SEGMENT_PROFILE]: rejectedReason
  });
  const getAppCompleted = (status, operationNumber) => (
    get_flag(GLOBAL_FLAG, UTILS.getAppCompleted('', '', getPayloadAppCompleted(LITERALS.commons.successfulPage, status, operationNumber)))
  );
  const getAppCompletedWithError = (status, rejectedReason) => (
    get_flag(GLOBAL_FLAG, UTILS.getAppCompleted('', '', getPayloadErrorAppCompleted(LITERALS.commons.successfulPage, status, rejectedReason)))
  );
  const _COMMON_BASE_DATA_INTERNAL_LINK = (level2) => ({ ..._COMMON_PAGE(level2) });
  const _getInternalLink = (name, level) => (
    get_flag(GLOBAL_FLAG, UTILS.getInternalLink(name, _COMMON_BASE_DATA_INTERNAL_LINK(level)))
  );
  return {
    APP_PAGE_VISIT,
    _getAppStarted,
    _getAppStep,
    getAppCompleted,
    getAppCompletedWithError,
    _getInternalLink,
    INTERNAL_LINK_ASSISTANCE_MANAGER_HEADER,
    INTERNAL_LINK_ASSISTANCE_MANAGER
  };
};
