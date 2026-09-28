const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getExternalLinkWithLink } = require('./common/_utils');
const moment = require('moment');
module.exports = () => {
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const _getExternalLinkData = () => {
    const objInternalLink = {
      ...common,
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: literals.commons.share
    };
    return getExternalLinkWithLink(`share_recibo_${moment().format('YYYY-MM-DD')}`, objInternalLink);
  };
  return {
    _getExternalLinkData
  };
};