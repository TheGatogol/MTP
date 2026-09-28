module.exports = () => {
  const constants = require('./common/_constants');
  const { getAnalyticFeatureFlag, getOnClickStart, getAppPageVisitLevel2, getDynamicAppStarted, getAppStep, getAppCompletedLevel2, getAdvancedFootprint, getInternalLink } = require('./common/_utils');
  const literals = require('./common/_literals');
  const _getAnalyticFeatureFlag = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const applicationCommon = {
    ...common,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.taxInformationUpdate,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.updateTax,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'},
    [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'}
  };
  const _levels = (level2, errorPage) => ({
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.fatca,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage || ''
  });
  const _getAppOnClickStart = getOnClickStart('editar', literals.commons.information, {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.profile,
    ...applicationCommon
  });
  const _getAppPageVisit = getAppPageVisitLevel2(`1 ${literals.commons.taxInformation}`, {
    ..._levels(`1 ${literals.commons.taxInformation}`),
    ...applicationCommon
  });
  const _getAppStarted = getDynamicAppStarted(literals.commons.empty, {
    ..._levels(`1 ${literals.commons.taxInformation}`),
    ...applicationCommon
  });
  const _getAppCompleted = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.ended, {
    ..._levels(literals.commons.successfulPage),
    ...applicationCommon
  });
  const _getAppStep = (numberStep, level) => {
    const typeStep = {
      ..._levels(`${numberStep} ${level}`),
      ...applicationCommon,
      [constants.APPLICATION_STEP]: `${numberStep} ${level}`
    };
    return _getAnalyticFeatureFlag('fatcaFunnel', getAppStep(numberStep, typeStep));
  };
  const _getTaxInformationFootprint = (level2) => {
    let obj = {
      ...common,
      ..._levels(level2)
    };
    return _getAnalyticFeatureFlag('fatcaPageView', getAdvancedFootprint(obj));
  };
  const getInternalLinkData = (linkName) => {
    let objInternalLink = {
      ...common,
      ..._levels(literals.commons.additionalTaxResidence)
    };
    return getInternalLink(linkName, objInternalLink);
  };
  const _getInternalLink = (activityLink) => {
    const typeInternalLink = {
      add: _getAnalyticFeatureFlag('fatcaInternalLink', getInternalLinkData(literals.commons.addResidence)),
      edit: _getAnalyticFeatureFlag('fatcaInternalLink', getInternalLinkData(literals.commons.editResidence))
    };
    return typeInternalLink[activityLink];
  };
  [
    _getAppOnClickStart,
    _getAppPageVisit,
    _getAppStarted,
    _getAppCompleted
  ].forEach(analytic => _getAnalyticFeatureFlag('fatcaFunnel', analytic));
  return {
    _getAppOnClickStart,
    _getAppPageVisit,
    _getAppStarted,
    _getAppStep,
    _getAppCompleted,
    _getTaxInformationFootprint,
    _getInternalLink
  };
};