const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAppOnClickStartLevel2,
  getAnalyticFeatureFlag,
  getAppStarted,
  getAppStepWithLevel3,
  getPageVisitWithLevel3,
  getAppCompleted,
  getAdvancedFootprintWithLevel3,
  getError
} = require('./common/_utils');
const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
module.exports = () => {
  const _pageCommon = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.sendMoneyRequested,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const _applicationCommon = {
    ..._pageCommon,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.sendMoney,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.sendMoneyRequested,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };

  const _commonAppOnClickStart = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.sendMoney,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.sendMoneyRequested,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_STEP]: literals.codiOperative.payNow,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
  };

  const appOnClickStartCodiPaymentSend = getAppOnClickStartLevel2(literals.commons.account, literals.codiOperative.codiMovements, {
    ..._commonAppOnClickStart
  });

  const appOnClickStartCodiPaymentSendDetail = getAppOnClickStartLevel2(literals.commons.account, literals.codiOperative.codiMovements, {
    ..._commonAppOnClickStart,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail
  });

  const firstInteraction = getAppStarted('1 ' + literals.commons.originAccount, {
    [constants.APPLICATION_STEP]: { bind: 'account' },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    ..._applicationCommon
  });

  const createFootprint = (level3) =>
    getAdvancedFootprintWithLevel3(level3, { ..._pageCommon });

  const stepConfiguration = (param) => {
    const settings = {
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
      ..._applicationCommon
    };
    if (param !== 'load accounts') {
      Object.assign(settings, {
        [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtype' },
        [constants.PRODUCT_PRODUCT_NAME]: { bind: 'account' },
        [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
        [constants.PRODUCT_CURRENCY]: literals.currencies.MXN
      });
    }
    if (param === 'otp') {
      Object.assign(settings, {
        [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
      });
    }
    if (param === 'confirm payment') {
      Object.assign(settings, {
        [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
        [constants.PRODUCT_PRODUCT_NAME]: { bind: 'account' }
      });
    }
    const stepConf = {
      ['load accounts']: getPageVisitWithLevel3('1 ' + literals.commons.originAccount, settings),
      ['confirm payment']: getAppStepWithLevel3('2', '2 ' + literals.commons.confirmation, settings),
      ['otp']: getAppStepWithLevel3('3', '3 ' + literals.commons.otp, settings)
    };
    return setFeatureFlags('codi', stepConf[param]);
  };
  const stepFinish = getAppCompleted(literals.commons.successfulPage, literals.commons.ended, {
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtypeRequest' },
    [constants.PRODUCT_PRODUCT_NAME]: { bind: 'accountName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: literals.currencies.MXN,
    [constants.PRODUCT_STATE]: literals.commons.ended,
    ..._applicationCommon
  });

  const footprintAccounts = createFootprint(literals.commons.account);

  const footprintApplicationRejected = createFootprint(literals.commons.applicationRejected);

  const footprintPostponedTheShipment = createFootprint(literals.codiOperative.postponedTheShipment);

  const footprintServiceError = getError(literals.commons.serviceError, {
    ..._pageCommon
  });

  const fottprintUnavailableOperation = getError(literals.commons.unavailableOperation, {
    ..._pageCommon
  });

  return {
    ...Object.entries({
      appOnClickStartCodiPaymentSend,
      appOnClickStartCodiPaymentSendDetail,
      firstInteraction,
      stepFinish,
      footprintAccounts,
      footprintApplicationRejected,
      footprintServiceError,
      fottprintUnavailableOperation,
      footprintPostponedTheShipment,
      stepConfiguration
    })
      .reduce((acum, item) => {
        const key = item[0];
        const digitalData = item[1];
        setFeatureFlags('codi', digitalData);
        return {
          ...acum,
          ...{ [key]: digitalData }
        };
      }, {})
  };
};
