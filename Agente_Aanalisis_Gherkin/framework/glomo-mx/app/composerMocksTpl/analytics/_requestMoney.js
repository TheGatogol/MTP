module.exports = (config) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAppOnClickStartLevel2AppType,
    getPageVisitRaw,
    getAppStarted,
    getAppCompletedRaw,
    getAdvancedFootprintWithLevel3
  } = require('./common/_utils');
  const setFeatureFlag = analytic => getAnalyticFeatureFlag('youngsters.requestMoney', analytic);
  const requestMoney = `1 ${literals.youngster.moneyRequest}`;
  const commonsFunnel = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonAplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.youngster.request,
    [constants.APPLICATION_APPLICATION_NAME]: literals.youngster.requestmoney,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const commonLevels = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.youngster.youngsters
  };
  const _onClickStart = (enterPoint) => {
    const options = {
      ['global']: {
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
        [constants.APPLICATION_STEP]: literals.commons.global_position
      },
      ['detalle']: {
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
        [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
        [constants.APPLICATION_STEP]: literals.youngster.requestYoungster
      }
    };
    return  setFeatureFlag(getAppOnClickStartLevel2AppType(literals.commons.operative, {
      ...commonsFunnel,
      ...commonAplication,
      ...options[enterPoint]
    }));
  };
  const pageVisit = getPageVisitRaw({
    [constants.PAGE_PAGEINFO_LEVEL3]: requestMoney,
    [constants.APPLICATION_STEP]: literals.youngster.requestYoungster,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    ...commonLevels,
    ...commonsFunnel,
    ...commonAplication
  });
  const appStarted = getAppStarted(requestMoney, {
    [constants.APPLICATION_STEP]: literals.youngster.message,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    ...commonLevels,
    ...commonsFunnel,
    ...commonAplication
  });
  const appCompleted = getAppCompletedRaw({
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.youngster.requestYoungster,
    [constants.APPLICATION_STATE]: literals.commons.finalized,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    ...commonLevels,
    ...commonsFunnel,
    ...commonAplication
  });
  const _slidesPageView = (level3) => setFeatureFlag(getAdvancedFootprintWithLevel3(level3, { ...commonLevels, ...commonsFunnel }));
  [
    pageVisit,
    appStarted,
    appCompleted
  ].forEach(item => setFeatureFlag(item));
  return {
    _onClickStart,
    pageVisit,
    appStarted,
    appCompleted,
    _slidesPageView
  };
};
