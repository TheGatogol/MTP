const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
const LITERALS = require('./common/_literals');

module.exports = () => {
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.global_position,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.pfm,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };

  const EXPERIENCES_SECTION_VIEW_MORE = UTILS.getAnalyticFeatureFlag('experiencesSection', UTILS.getInternalLink(
    'ver mas metas',
    COMMON
  ));

  return {
    EXPERIENCES_SECTION_VIEW_MORE
  };
};
