module.exports = () => {
  const constants = require('./common/_constants');
  const { getAnalyticFeatureFlag, getAppPageVisitLevel2, getDynamicAppStarted, getOnClickStart, getAppStep, getAdvancedFootprint, getInternalLink, getAppCompletedLevel2 } = require('./common/_utils');
  const literals = require('./common/_literals');
  const _getAnalyticFeatureFlag = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.idValidation,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const applicationCommon = {
    ...common,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.applicationName.customerUpdate,
    [constants.APPLICATION_APPLICATION_NAME]: 'validar identidad',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.selfManagement,
    [constants.APPLICATION_FULLFILMENT]: `${literals.commons.offline}/${literals.commons.online}`,
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'segmentProfile'
    },
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: {
      bind: 'primaryCategory'
    },
    [constants.PRODUCT_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };
  const getAppOnClickStart = (fromProceedings) => getOnClickStart(
    fromProceedings ? 'validemos tu identidad' : literals.commons.profile,
    literals.commons.information,
    {
      ...applicationCommon,
      [constants.PAGE_PAGEINFO_LEVEL1]: fromProceedings ? 'cuenta' : literals.commons.profile,
      [constants.PAGE_PAGEINFO_LEVEL2]: fromProceedings ? literals.commons.updateInformation : '',
      [constants.USER_SEGMENT_PROFILE]: !fromProceedings ? '' : { bind: 'segmentProfile' },
      [constants.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      }
    }
  );
  const getAppPageVisit = getAppPageVisitLevel2(`1 ${literals.commons.consent}`, {
    ...applicationCommon
  });
  const getAppStarted = getDynamicAppStarted(literals.commons.empty, {
    [constants.PAGE_PAGEINFO_LEVEL2]: `1 ${literals.commons.consent}`,
    ...applicationCommon
  });
  const getNationalIdVideoselfieFootprint = (level2, level3 = '', errorPage = '') => {
    const footprintBase = {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage,
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFieldsFootprint'
      }
    };
    return _getAnalyticFeatureFlag(
      `nationalIdAndVideoselfie.${errorPage ? 'error' : 'footprint'}`,
      getAdvancedFootprint(footprintBase)
    );
  };
  const getInternalLinkData = (linkName) => {
    const internalLinkBase = {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: 'identificacion oficial',
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFieldsFootprint'
      }
    };
    return getInternalLink(linkName, internalLinkBase);
  };
  const getAppInternalLink = (activityLink) => {
    const typeInternalLink = {
      scanId: _getAnalyticFeatureFlag('nationalIdAndVideoselfie.internalLink', getInternalLinkData('escanear ine')),
      takeSelfie: _getAnalyticFeatureFlag('nationalIdAndVideoselfie.internalLink', getInternalLinkData('tomar selfie')),
      recordVideo: _getAnalyticFeatureFlag('nationalIdAndVideoselfie.internalLink', getInternalLinkData('grabar video')),
      takeDocuments: _getAnalyticFeatureFlag('nationalIdAndVideoselfie.internalLink', getInternalLinkData('subir informacion'))
    };
    return typeInternalLink[activityLink];
  };
  const getOnAppStep = (numberStep, level) => {
    const typeStep = {
      [constants.PAGE_PAGEINFO_LEVEL2]: `${numberStep} ${level}`,
      ...applicationCommon,
      [constants.APPLICATION_STEP]: `${numberStep} ${level}`
    };
    return _getAnalyticFeatureFlag('nationalIdAndVideoselfie.funnel', getAppStep(numberStep, typeStep));
  };
  const getAppCompleted = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.ended, {
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    ...applicationCommon
  });
  [
    getAppOnClickStart,
    getAppPageVisit,
    getAppStarted,
    getAppCompleted
  ].forEach(analytic => _getAnalyticFeatureFlag('nationalIdAndVideoselfie.funnel', analytic));
  return {
    getAppOnClickStart,
    getAppPageVisit,
    getAppStarted,
    getOnAppStep,
    getAppCompleted,
    getNationalIdVideoselfieFootprint,
    getAppInternalLink
  };
};