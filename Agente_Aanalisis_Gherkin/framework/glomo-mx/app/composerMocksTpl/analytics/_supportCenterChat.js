module.exports = () => {

  const analyticsConstants = require('./common/_constants');
  const analyticsLiterals = require('./common/_literals');
  const {
    getAdvancedFootprint,
    getInternalLink,
    getInteractionLink,
    getAnalyticFeatureFlag
  } = require('./common/_utils');
  const featureFlagVisualMenu = 'menuFromIVR';
  const featureFlagVisualMenuError = 'menuFromIVRError';

  const commonsAnalytics = {
    [analyticsConstants.PAGE_PAGEINFO_PAGEINTENT]: analyticsLiterals.commons.information,
    [analyticsConstants.PAGE_PAGEINFO_LEVEL1]: analyticsLiterals.commons.visualMenu,
    [analyticsConstants.PAGE_PAGEINFO_PAGESEGMENT]: analyticsLiterals.commons.persons,
    [analyticsConstants.PAGE_PAGEINFO_AREA]: analyticsLiterals.commons.private,
    [analyticsConstants.PAGE_PAGEINFO_PROJECTNAME]: analyticsLiterals.sections.glomo
  };

  const _setFeatureFlag = (analytic, featureFlag = featureFlagVisualMenu) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const _getFootprint = (data, featureFlag) => _setFeatureFlag(getAdvancedFootprint(commonsAnalytics, data), featureFlag);
  const _getInternalLink = (linkName, data, featureFlag) => _setFeatureFlag(getInternalLink(linkName, commonsAnalytics, data), featureFlag);
  const _getInteractionLink = (interactionName, data, featureFlag) => _setFeatureFlag(getInteractionLink(interactionName, commonsAnalytics, data), featureFlag);
  const _getAdvancedFootprints = (level2 = false, level3 = false, error = false, _level2 = '', _level3 = '', _error = '') => {
    const _advancedFootPrint = {};
    if (level2) {
      Object.assign(_advancedFootPrint, {
        [analyticsConstants.PAGE_PAGEINFO_LEVEL2]: _level2
      });
    }
    if (level3) {
      Object.assign(_advancedFootPrint, {
        [analyticsConstants.PAGE_PAGEINFO_LEVEL3]: _level3
      });
    }
    if (error) {
      Object.assign(_advancedFootPrint, {
        [analyticsConstants.PAGE_PAGEINFO_ERRORPAGE]: _error
      });
    }
    return _getFootprint(_advancedFootPrint, error ? featureFlagVisualMenuError : featureFlagVisualMenu);
  };

  const _getAdvancedInternalLink = (param) => {
    const typeInternalLink = {
      startChat: _getInternalLink(analyticsLiterals.commons.onset, {
        [analyticsConstants.PAGE_PAGEINFO_LEVEL2]: analyticsLiterals.commons.welcomeChat
      })
    };
    return typeInternalLink[param];
  };

  const _getAdvancedInteractionLink = (param) => {
    const typeInteractionLink = {
      clientCard: _getInteractionLink({ bind: 'productName' }, {
        [analyticsConstants.APPLICATION_INTERACTION_LEVEL]: { bind: 'productName' }
      })
    };
    return typeInteractionLink[param];
  };

  return {
    _getAdvancedFootprints,
    _getAdvancedInternalLink,
    _getAdvancedInteractionLink
  };
};