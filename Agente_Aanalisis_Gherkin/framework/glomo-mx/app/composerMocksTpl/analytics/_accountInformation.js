module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getInternalLink, addFeatureFlag, getInternalLinkWithPageActivityLevel3  } = require('./common/_utils');
  const proactiveNoticeRemoveLimitFlag = {
    key: 'glomo.analytics.proactiveNoticeRemoveLimit',
    defaultValue: true
  };

  const COMMON = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const upgradeAccount = getInternalLink(literals.commons.removeLimit, COMMON);
  const upgradeAccountDetailShare = getInternalLinkWithPageActivityLevel3(literals.commons.removeLimit, literals.commons.accountData, COMMON);


  [upgradeAccount,
    upgradeAccountDetailShare
  ].forEach(item => addFeatureFlag(item, proactiveNoticeRemoveLimitFlag));

  return {
    upgradeAccount,
    upgradeAccountDetailShare
  };
};
