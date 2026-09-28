const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getAdvancedFootprint, getInternalLink } = require('./common/_utils');
module.exports = () => {
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'tu negocio',
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const nativeAnalytics = ({pageSegment, siteAppName, userSegmentGlobal} = {}) => ({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: pageSegment || '',
    [constants.PAGE_PAGEINFO_SITEAPPNAME]: siteAppName || '',
    [constants.USER_SEGMENT_GLOBAL]: userSegmentGlobal || '',
    [constants.USER_PROFILE_ID]: {
      bind: 'userProfileId'
    }
  });
  const _getAdvancedFootprintSingleApp = (analytics) => {
    const _footprints = {
      default: getAdvancedFootprint(common)
    };
    return _footprints[analytics];
  };
  const _getNativeAdvancedFootprint = ({ pageSegment, interactionLevel, siteAppName, userSegmentGlobal } = {}) =>
    getInternalLink(interactionLevel || '', nativeAnalytics({pageSegment, siteAppName, userSegmentGlobal }));

  return {
    _getAdvancedFootprintSingleApp,
    _getNativeAdvancedFootprint
  };
};
