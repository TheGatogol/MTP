module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAdvancedFootprintWithLevel2, getInternalLinkWithLevel2, addFeatureFlag } = require('./common/_utils');

  const analyticsFeatureFlag = {
    key: 'glomo.analytics.securityProfile',
    defaultValue: true
  };

  const constantDynamicData = {
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'securityLevel'
    }
  };

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.securityAndPrivacy,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    ...constantDynamicData
  };

  const pageView = getAdvancedFootprintWithLevel2(
    literals.securityProfile.additionalSecurity,
    { ...common }
  );

  const createLink = (literal) => getInternalLinkWithLevel2(
    literal,
    literals.securityProfile.additionalSecurity,
    { ...common }
  );

  const links = {
    activateNotificationsAccessLink: createLink(literals.securityProfile.activateNotifications),
    activateIdentityDocumentLink: createLink(literals.securityProfile.updateDocumentation),
    securityTipsLink: createLink(literals.securityProfile.reviewSecurityTips),
    discreetModeLink: createLink(literals.securityProfile.activateDiscreetMode),
    validateEmailLink: createLink(literals.securityProfile.validateMail),
    screenLockLink: createLink(literals.securityProfile.activateScreenLock),
    updateAppLink: createLink(literals.securityProfile.updateApp),
    fidoEnrollmentLink: createLink(literals.securityProfile.secureAgileAccess)
  };

  const completedRecomendationsPageView = getAdvancedFootprintWithLevel2(
    literals.securityProfile.allRecomendationsCompleted,
    { ...common }
  );

  [
    pageView,
    ...Object.values(links),
    completedRecomendationsPageView
  ].forEach(item => addFeatureFlag(item, analyticsFeatureFlag));

  return {
    pageView,
    ...links,
    completedRecomendationsPageView
  };
};
