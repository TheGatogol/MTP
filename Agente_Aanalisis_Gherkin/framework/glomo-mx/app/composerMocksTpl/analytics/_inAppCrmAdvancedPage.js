const constans = require('./common/_constants');
const literals = require('./common/_literals');
const { getInternalLink, getAdvancedFootprint, getAnalyticFeatureFlag } = require('./common/_utils');

const commons = {
  [constans.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constans.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constans.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
  [constans.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constans.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
  [constans.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constans.PAGE_PAGEINFO_LEVEL1]: literals.commons.inap,
  [constans.PAGE_PAGEINFO_LEVEL2]: {bind: 'page'}
};

const _getAdvancedFootprint = (level3 = false, featureFlag) => {
  const obj = {
    ...commons
  };
  if (level3) {
    obj[constans.PAGE_PAGEINFO_LEVEL3] = level3;
  }
  let analytic = getAdvancedFootprint(obj);
  getAnalyticFeatureFlag(featureFlag, analytic);
  return analytic;
};

const _getInternalLink = (text = '', level3 = false, featureFlag) => {
  const obj = {
    ...commons
  };
  if (level3) {
    obj[constans.PAGE_PAGEINFO_LEVEL3] = level3;
  }
  const _internalLink = getInternalLink(text, obj);
  getAnalyticFeatureFlag(featureFlag, _internalLink);
  return _internalLink;
};

module.exports = () => {
  return {
    _getAdvancedFootprint,
    _getInternalLink
  };
};
