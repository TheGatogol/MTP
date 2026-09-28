const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.general,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.public,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.branches_and_ATMs
};

const EXTERNAL_LINKS = {
  ...COMMONS,
  [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: '',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'pagePageInfoLevel2' }
};

const ERROR_MODAL = {
  ...COMMONS,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.errors.backend_error
};

module.exports = () => {
  const pageView = (flag, level2) => UTILS.getAnalyticFeatureFlag(`atmBranchesLocator.${flag}`, UTILS.getAdvancedFootprintWithLevel2(level2, COMMONS));
  const internalLink = (flag, link, level2) => UTILS.getAnalyticFeatureFlag(`atmBranchesLocator.${flag}`, UTILS.getInternalLinkWithLevel2(link, level2, COMMONS));
  const externalLink = (flag, link) => UTILS.getAnalyticFeatureFlag(`atmBranchesLocator.${flag}`, UTILS.getExternalLinkWithLink(link, EXTERNAL_LINKS));
  const PAGE_VIEW_BACKEND_ERROR = UTILS.getAnalyticFeatureFlag('atmBranchesLocator.error', UTILS.getAdvancedFootprintError(LITERALS.errors.backend_error, ERROR_MODAL));


  return {
    pageView,
    internalLink,
    externalLink,
    PAGE_VIEW_BACKEND_ERROR
  };
};
