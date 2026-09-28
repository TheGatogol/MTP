const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAdvancedFootprint,
  getInternalLink,
  getAdvancedFootprintWithLevel3
} = require('./common/_utils');

const common = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.insurances,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
};
const flagName = 'insurance';

module.exports = () => {
  const pageViewProductDetail = () => {
    return getAnalyticFeatureFlag(
      flagName,
      getAdvancedFootprint(common)
    );
  };

  const internalLinkShowPolicy = () => {
    const analytics = getInternalLink(literals.insurance.seePolicy, common);
    return getAnalyticFeatureFlag(`productDetail.${flagName}.policyPdf.link`, analytics);
  };

  const pageViewOtp = () => {
    const analytics = getAdvancedFootprintWithLevel3(literals.commons.otp, {
      ...common,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
    });
    return getAnalyticFeatureFlag(
      flagName,
      analytics
    );
  };

  const pageViewMoreInfo = () => {
    const analytics = getAdvancedFootprintWithLevel3(literals.commons.moreInfo, common);
    return getAnalyticFeatureFlag(
      flagName,
      analytics
    );
  };

  return {
    pageViewProductDetail,
    internalLinkShowPolicy,
    pageViewOtp,
    pageViewMoreInfo
  };
};
