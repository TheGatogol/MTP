module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getOnClickStart,
    getPageVisitWithLevel3,
    getDynamicAppStarted,
    getAppStepWithLevel3,
    getAppCompleted,
    addFeatureFlag
  } = require('./common/_utils');
  const analyticsFeatureFlagParkingCityRecharge = {
    'key': 'glomo.analytics.parkingMeters',
    'defaultValue': true
  };
  const commons = {
    [constants.APPLICATION_APPLICATION_NAME]: 'recarga parquimetro',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'parking recharge',
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const dynamicData = {
    [constants.APPLICATION_AMOUNT]: {
      bind: 'amount'
    },
    [constants.APPLICATION_CURRENCY]: literals.tag.badge,
    [constants.APPLICATION_SERVICE_CHARGE]: {
      bind: 'serviceCharge'
    }
  };
  const operatelevel = (level1, level2) => {
    return {
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2
    };
  };
  const objPageRecharge = {
    ...commons,
    ...operatelevel('parquimetros', literals.commons.recharge),
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
  };
  const objPageStartList = {
    ...commons,
    ...operatelevel('parquimetros', 'cuentas registradas')
  };
  const objPageStartEnroll = {
    ...commons,
    ...operatelevel('parquimetros', literals.commons.register)
  };
  const appOnClickStartList = getOnClickStart(
    literals.commons.recharge,
    literals.commons.information,
    objPageStartList
  );
  const appOnClickStartEnroll = getOnClickStart(
    literals.commons.recharge,
    literals.commons.information,
    objPageStartEnroll, {
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage
    }
  );
  const pageVisit = getPageVisitWithLevel3(literals.commons.oneAmount, objPageRecharge);
  const appStarted = getDynamicAppStarted(literals.commons.oneAmount, objPageRecharge);
  const objAppStepSelectAccount = {
    ...objPageRecharge,
    ...dynamicData
  };
  const getStepWithLevel3 = (numberStep, appStep, addNumberInAppStep = true) => {
    return getAppStepWithLevel3(numberStep, `${addNumberInAppStep ? numberStep + ' ' : ''}${literals.commons[appStep]}`, objAppStepSelectAccount);
  };
  const appStepSigning = getAppStepWithLevel3(4, literals.tag.fourthOtp, objAppStepSelectAccount);
  const completed = {
    ...objAppStepSelectAccount,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };
  const appCompleted = getAppCompleted(literals.commons.successfulPage, literals.commons.ended, completed);
  [appOnClickStartList,
    appOnClickStartEnroll,
    pageVisit,
    appStarted,
    getStepWithLevel3,
    appStepSigning,
    appCompleted
  ].forEach(item => addFeatureFlag(item, analyticsFeatureFlagParkingCityRecharge));
  return {
    appOnClickStartList,
    appOnClickStartEnroll,
    pageVisit,
    appStarted,
    getStepWithLevel3,
    appStepSigning,
    appCompleted
  };
};
