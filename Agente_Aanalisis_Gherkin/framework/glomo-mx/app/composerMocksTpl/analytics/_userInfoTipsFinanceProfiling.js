const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  addFeatureFlag,
  getAdvancedFootprint,
  getInternalLink,
  getInternalLinkWithLevel3
} = require('./common/_utils');

module.exports = () => {
  const featureFlags = {
    footprint: {
      key: 'glomo.analytics.tipsFinanceProfiling.footprint',
      defaultValue: true
    },
    interactions: {
      key: 'glomo.analytics.tipsFinanceProfiling.interactions',
      defaultValue: true
    },
    missionError: {
      key: 'glomo.analytics.tipsFinanceProfiling.errorMission',
      defaultValue: true
    },
    informationError: {
      key: 'glomo.analytics.tipsFinanceProfiling.errorInformation',
      defaultValue: true
    }
  };

  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'camino financiero jovenes',
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const pageViewFirtPageOnboarding = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.onboarding + '1'
  });

  const pageViewLastPageOnboarding = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.onboarding + '2'
  });

  const internalLinkShowBadges = getInternalLink('colecciona todas la insignias mostrar insignias', {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.outstanding,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  });

  const pageViewBadgesDashabord = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.badges,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.sections.dashboard,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.USER_SEGMENT_PROFILE]: { bind: 'segmentProfile' }
  });

  const pageViewDetailMission = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.badges,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  });

  const pageViewSeasonInformativeModal = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.badges,
    [constants.PAGE_PAGEINFO_LEVEL3]: 'que es avance de temporada'
  });

  const pageViewHistoricalSeason = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.badges,
    [constants.PAGE_PAGEINFO_LEVEL3]: 'detalle del avance'
  });

  const pageViewProfilerRequest = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.badges,
    [constants.PAGE_PAGEINFO_LEVEL3]: `descubrir ${literals.commons.profile}`
  });

  const pageViewProfilerResponse = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.badges,
    [constants.PAGE_PAGEINFO_LEVEL3]: `tu ${literals.commons.profile}`,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  });

  const pageViewGrantedMissionError = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.errors.missionNotAvailable,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.missionNotAvailable
  });

  const pageViewFinancialEducationOverviewError = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.errors.informationNotAvailable,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.informationNotAvailable
  });

  const internalLinkProfilerEntrypoint = getInternalLinkWithLevel3(literals.sections.dashboard, {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.badges,
    [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'vive tu propia experiencia',
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.USER_SEGMENT_PROFILE]: { bind: 'segmentProfile' }
  });

  [
    pageViewFirtPageOnboarding,
    pageViewLastPageOnboarding,
    pageViewBadgesDashabord,
    pageViewDetailMission,
    pageViewSeasonInformativeModal,
    pageViewHistoricalSeason,
    pageViewProfilerRequest,
    pageViewProfilerResponse
  ].forEach((item) => addFeatureFlag(item, featureFlags.footprint));

  [internalLinkShowBadges, internalLinkProfilerEntrypoint].forEach((item) => addFeatureFlag(item, featureFlags.interactions));
  [ pageViewGrantedMissionError ].forEach((item) => addFeatureFlag(item, featureFlags.missionError));
  [ pageViewFinancialEducationOverviewError ].forEach((item) => addFeatureFlag(item, featureFlags.informationError));

  return {
    pageViewFirtPageOnboarding,
    pageViewLastPageOnboarding,
    internalLinkShowBadges,
    pageViewBadgesDashabord,
    pageViewDetailMission,
    pageViewSeasonInformativeModal,
    pageViewHistoricalSeason,
    pageViewProfilerRequest,
    pageViewProfilerResponse,
    pageViewGrantedMissionError,
    pageViewFinancialEducationOverviewError,
    internalLinkProfilerEntrypoint
  };
};
