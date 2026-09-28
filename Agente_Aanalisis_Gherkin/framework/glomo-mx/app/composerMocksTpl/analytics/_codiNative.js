const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAppOnClickStartLevel,
  getAdvancedFootprintData,
  getAnalyticFeatureFlag
} = require('./common/_utils');

const _getAdvancedFootprintData = (analytic) => getAdvancedFootprintData('view', 'mark', analytic);

const common = {
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.USER_USERSTATE]: literals.commons.noLogado,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
};

const sendP2pRequestedAppOnClickStart = getAnalyticFeatureFlag('codi', getAppOnClickStartLevel({
  ...common,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
  [constants.APPLICATION_STEP]: literals.codiOperative.pushNotification,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.sendMoney,
  [constants.APPLICATION_APPLICATION_NAME]: literals.commons.sendMoneyRequested,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative
}));

const p2pRequestFootprint = getAnalyticFeatureFlag('codi', _getAdvancedFootprintData({
  ...common,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.sendMoneyRequested,
  [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.applicationRejected
}));

const _commonLevels = (type) => {
  let commonLevels = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.qrOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.codiOperative.scan
  };
  const types = {
    p2pRequestOnClickStart: {
      analytic: (() => getAppOnClickStartLevel({
        ...commonLevels,
        [constants.APPLICATION_STEP]: literals.codiOperative.phoneRequest,
        [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.sendMoney,
        [constants.APPLICATION_APPLICATION_NAME]: literals.operative.requestMoney,
        [constants.APPLICATION_APPLICATION_TYPE]: literals.applicationName.selfManagement
      }))(),
      flag: 'codi.paymentsrequest'
    },
    p2pQrRequestAppOnClickStart: {
      analytic: (() => getAppOnClickStartLevel({
        ...commonLevels,
        [constants.APPLICATION_STEP]: literals.codiOperative.qrRequest,
        [constants.APPLICATION_GLOBAL_APPLICATION]: literals.codiOperative.p2pRequest,
        [constants.APPLICATION_APPLICATION_NAME]: literals.commons.requestQr,
        [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative
      })
      )(),
      flag: 'codi.qrrequest.feature'
    },
    p2pQrPaymentsFootprint: {
      analytic: (() => _getAdvancedFootprintData(commonLevels))(),
      flag: 'codi.qrpayments.feature'
    }
  };
  let res = {};
  if (types[type]) {
    res = getAnalyticFeatureFlag(types[type]?.flag, types[type]?.analytic);
  }
  return res;
};

module.exports = {
  p2pRequestFootprint,
  sendP2pRequestedAppOnClickStart,
  _commonLevels
};
