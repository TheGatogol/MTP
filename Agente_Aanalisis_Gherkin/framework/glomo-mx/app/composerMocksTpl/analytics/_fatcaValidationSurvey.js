module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getOnClickStart, getAppPageVisitLevel2, getDynamicAppStarted, getAppStep, getAdvancedFootprint, getInternalLink, getAppCompletedRaw } = require('./common/_utils');
  const getAnalyticFeaturePageFlag = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.fatca,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const funnelCommon = {
    ...common,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.taxInformationUpdate,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.updateTax,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.selfManagement,
    [constants.APPLICATION_FULLFILMENT]: `${literals.commons.offline}/${literals.commons.online}`,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.USER_SEGMENT_PROFILE]: { bind: 'segmentProfile' },
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: { bind: 'primaryCategory' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' }
  };
  const getAppOnClickStart = (fromProceedings) => getOnClickStart(fromProceedings ? literals.commons.modifyTaxResidence : literals.commons.profile, literals.commons.information, {
    ...funnelCommon,
    [constants.PAGE_PAGEINFO_LEVEL1]: fromProceedings ? 'cuenta' : literals.commons.profile,
    [constants.PAGE_PAGEINFO_LEVEL2]: fromProceedings ? literals.commons.updateInformation : '',
    [constants.USER_SEGMENT_PROFILE]: !fromProceedings ? '' : { bind: 'segmentProfile' },
    [constants.PAGE_PAGEINFO_LEVEL3]: {
      bind: 'level3'
    }
  });
  const getAppPageVisit = getAppPageVisitLevel2(`1 ${literals.commons.taxInformation}`, {
    ...funnelCommon
  });
  const getAppStarted = getDynamicAppStarted(literals.commons.empty, {
    [constants.PAGE_PAGEINFO_LEVEL2]: `1 ${literals.commons.taxInformation}`,
    ...funnelCommon
  });
  const getAppCompleted = getAppCompletedRaw({
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    ...funnelCommon,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  });
  const getFatcaFootprint = (level2, errorPage = false) => {
    const objFootprint = {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage ? level2 : ''
    };
    return getAnalyticFeaturePageFlag(`fatcaValidationSurvey.${errorPage ? 'error' : 'footprint'}`, getAdvancedFootprint(objFootprint));
  };
  const getAppStepPage = (numberStep, level) => {
    const typeStep = {
      [constants.PAGE_PAGEINFO_LEVEL2]: `${numberStep} ${level}`,
      ...funnelCommon,
      [constants.APPLICATION_STEP]: `${numberStep} ${level}`
    };
    return getAnalyticFeaturePageFlag('fatcaValidationSurvey.funnel', getAppStep(numberStep, typeStep));
  };
  const getInternalLinkData = (linkName) => {
    const objInternalLink = {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.additionalTaxResidence
    };
    return getInternalLink(linkName, objInternalLink);
  };
  const getInternalLinkPage = (activityLink) => {
    const typeInternalLink = {
      add: getAnalyticFeaturePageFlag('fatcaValidationSurvey.internalLink', getInternalLinkData(literals.commons.addResidence)),
      edit: getAnalyticFeaturePageFlag('fatcaValidationSurvey.internalLink', getInternalLinkData(literals.commons.editResidence))
    };
    return typeInternalLink[activityLink];
  };
  [
    getAppOnClickStart,
    getAppPageVisit,
    getAppStarted,
    getAppCompleted
  ].forEach(analytic => getAnalyticFeaturePageFlag('fatcaValidationSurvey.funnel', analytic));
  return {
    getAppOnClickStart,
    getAppPageVisit,
    getAppStarted,
    getFatcaFootprint,
    getAppStepPage,
    getInternalLinkPage,
    getAppCompleted
  };
};