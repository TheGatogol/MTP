/* eslint-disable camelcase, no-shadow */
module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const { commons, featureFlag, sections, operative } = LITERALS;
  const { callMeBack } = operative;
  const _setFeatureFlags = (featureFlag, analytic) => (UTILS.getAnalyticFeatureFlag(featureFlag, analytic));
  const setAdvancedWithLevel2 = (level, data) => (UTILS.getAdvancedFootprintWithLevel2(level, data));
  const common_page = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: sections.glomo
  };

  const getLevel = (levelTxt, level) => ({
    [CONSTANTS[level]]: levelTxt
  });

  const getPageintent = (pageintent) => ({
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: pageintent
  });

  const getPageViewCallMeBack = (analytic) => {
    const common = { ...common_page, ...getLevel(callMeBack.cmb, 'PAGE_PAGEINFO_LEVEL1'), ...getPageintent(commons.information) };
    const options = {
      REQUEST_RECEIVED: setAdvancedWithLevel2(callMeBack.requestReceived, common),
      SCHEDULE_CALL: setAdvancedWithLevel2(callMeBack.scheduleCall, common),
      SCHEDULE_CALL_REQUEST_RECEIVED: UTILS.getAdvancedFootprintWithLevel3(callMeBack.requestReceived, getLevel(callMeBack.scheduleCall, 'PAGE_PAGEINFO_LEVEL2'), common),
      PREVIOUS_REQUEST_RECEIVED: setAdvancedWithLevel2(callMeBack.previousRequestReceived, common)
    };
    return _setFeatureFlags(featureFlag.callMeBack, options[analytic]);
  };

  const getPageViewClickToCall = (analytic) => {
    const common = { ...common_page, ...getLevel(callMeBack.ctc, 'PAGE_PAGEINFO_LEVEL1'), ...getPageintent(commons.information) };
    const options = {
      UNAVAILABLE: setAdvancedWithLevel2(callMeBack.remoteManagerUnavailable, common),
      SCHEDULE_CALL: setAdvancedWithLevel2(callMeBack.scheduleCall, common),
      SCHEDULE_CALL_REQUEST_RECEIVED: UTILS.getAdvancedFootprintWithLevel3(callMeBack.requestReceived, getLevel(callMeBack.scheduleCall, 'PAGE_PAGEINFO_LEVEL2'), common),
      PREVIOUS_REQUEST_RECEIVED: setAdvancedWithLevel2(callMeBack.previousRequestReceived, common)
    };
    return _setFeatureFlags(featureFlag.clickToCall, options[analytic]);
  };

  const getInternalLinkCallMeBack = (type, {level1 = '', level2 = '', level3 = '' }) => {
    const commonLevel = { ...getLevel(level1, 'PAGE_PAGEINFO_LEVEL1'), ...getLevel(level2, 'PAGE_PAGEINFO_LEVEL2'), ...getLevel(level3, 'PAGE_PAGEINFO_LEVEL3') };
    const common = { ...common_page, ...commonLevel, ...getPageintent(commons.transaction) };
    const linkName = type + ' ' + LITERALS.operative.callMeBack.cmb;
    const analytic = UTILS.getInternalLink(linkName, common);
    return _setFeatureFlags(featureFlag.callMeBack, analytic);
  };

  const getInternalLinkClickToCall = (type, { level1 = '', level2 = '', level3 = '' }) => {
    const commonLevel = { ...getLevel(level1, 'PAGE_PAGEINFO_LEVEL1'), ...getLevel(level2, 'PAGE_PAGEINFO_LEVEL2'), ...getLevel(level3, 'PAGE_PAGEINFO_LEVEL3') };
    const common = { ...common_page, ...commonLevel, ...getPageintent(commons.transaction) };
    const linkName = type + ' ' + LITERALS.operative.callMeBack.ctc;
    const analytic = UTILS.getInternalLink(linkName, common);
    return _setFeatureFlags(featureFlag.clickToCall, analytic);
  };

  return {
    getPageViewCallMeBack,
    getPageViewClickToCall,
    getInternalLinkCallMeBack,
    getInternalLinkClickToCall
  };
};