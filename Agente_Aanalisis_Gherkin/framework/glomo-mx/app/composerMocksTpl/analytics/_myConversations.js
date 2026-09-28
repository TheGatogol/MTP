module.exports = () => {
  const constants = require('./common/_constants');
  const { getAdvancedFootprint, getAnalyticFeatureFlag, getInternalLink } = require('./common/_utils');
  const literals = require('./common/_literals');

  const featureFlagMyConversations = 'glomo.analytics.myConversations';
  const featureFlagMyConversationsErrors = 'glomo.analytics.myConversations.error';

  const commonsAnalytics = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.contact,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.applicationName.myTalks,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.empty
  };

  const _setFeatureFlag = (analytic, featureFlag = featureFlagMyConversations) => getAnalyticFeatureFlag(featureFlag, analytic);
  const _getFootprint = (data, featureFlag) => _setFeatureFlag(getAdvancedFootprint(commonsAnalytics, data), featureFlag);
  const _getInternalLink = (data, featureFlag) => _setFeatureFlag(getInternalLink(commonsAnalytics, data), featureFlag);

  const _getAdvancedFootprints = (param) => {
    const footprints = {
      welcomeOnboarding: _getFootprint({
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.myConversations.informative
      }),
      myConversations: _getFootprint({
        [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'conversations' }
      }),
      createConversation: _getFootprint({
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.newTalk
      }),
      activeConversation: _getFootprint({
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.openTalk
      }),
      searchResults: _getFootprint({
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.search,
        [constants.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHRESULTS]: {bind: 'searchResults'}
      }),
      attachOnboarding: _getFootprint({
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.openTalk,
        [constants.PAGE_PAGEINFO_LEVEL4]: literals.myConversations.attach
      }),
      conversationResolved: _getFootprint({
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.openTalk,
        [constants.PAGE_PAGEINFO_LEVEL4]: literals.myConversations.resolved
      }),
      errorListConversations: _getFootprint({
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.listConversations,
        [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.listConversations
      }, featureFlagMyConversationsErrors)
    };
    return footprints[param];
  };

  const _getAdvancedInternalLinks = (param) => {
    const { [constants.PAGE_PAGEINFO_LEVEL2]: _, ...filteredCommonsAnalytics } = commonsAnalytics;

    const internalLinks = {
      myConversationsButton: _getInternalLink({
        ...filteredCommonsAnalytics,
        [constants.PAGE_PAGEACTIVITY_LINK_NAME]: literals.applicationName.myTalks
      }),
      searchButton: _getInternalLink({
        ...commonsAnalytics,
        [constants.PAGE_PAGEACTIVITY_LINK_NAME]: literals.commons.search
      }),
      createConversationButton: _getInternalLink({
        ...commonsAnalytics,
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.newTalk,
        [constants.PAGE_PAGEACTIVITY_LINK_NAME]: literals.myConversations.createConversation
      })
    };
    return internalLinks[param];
  };

  return {
    _getAdvancedFootprints,
    _getAdvancedInternalLinks
  };
};
