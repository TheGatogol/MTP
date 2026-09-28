module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getExternalLink,
    getAdvancedFootprintWithLevel2
  } = require('./common/_utils');
  const featureFlags = {
    inviteFriend: 'dynamicsAndRewards.inviteFriend',
    inviteFriendTermsAndConditions: 'dynamicsAndRewards.inviteFriendTermsAndConditions',
    inviteFriendShare: 'dynamicsAndRewards.inviteFriendShare'
  };

  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo cuentas',
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    }
  };

  const appSecondStepTerms = {
    ...commons,
    [constants.PAGE_PAGEACTIVITY_LINK_URL]: 'pdf',
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.ocAccount.basicLibreton
  };

  const appSecondStepLink = {
    ...commons,
    [constants.PAGE_PAGEACTIVITY_LINK_URL]: literals.commons.share,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.ocAccount.basicLibreton
  };

  const appSecondStepDA = getAdvancedFootprintWithLevel2(literals.ocAccount.basicLibreton, commons);
  const appTermsAndConditions = getExternalLink(appSecondStepTerms);
  const appShareLink = getExternalLink(appSecondStepLink);

  [
    appSecondStepDA
  ].forEach(item => getAnalyticFeatureFlag(featureFlags.inviteFriend, item));

  [
    appTermsAndConditions
  ].forEach(item => getAnalyticFeatureFlag(featureFlags.inviteFriendShare, item));

  [
    appShareLink
  ].forEach(item => getAnalyticFeatureFlag(featureFlags.inviteFriendTermsAndConditions, item));

  return {
    appSecondStepDA,
    appTermsAndConditions,
    appShareLink
  };
};