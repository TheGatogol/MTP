module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAdvancedFootprint,
    getInternalLink,
    addFeatureFlag,
    getInteractionLink
  } = require('./common/_utils');

  const analyticsAdviceFinancialCoachFeatureFlag = {
    key: 'glomo.analytics.dashboard.financialCoach',
    defaultValue: true
  };

  const commonData = {
    [constants.PAGE_PAGEINFO_PAGENAME]: { bind: 'pageName' },
    [constants.PAGE_PAGEINFO_ERRORPAGE]: { bind: 'errorPage' },
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.USER_USERSTATE]: literals.commons.logado,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.financialCoach,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
    [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' },
    [constants.PAGE_PAGEINFO_LEVEL4]: { bind: 'level4' },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  };

  const adviceFinancialCoachView = getAdvancedFootprint({
    ...commonData
  });

  const adviceFinancialCoachClick = getInternalLink({ bind: 'linkName' }, {
    ...commonData
  });

  const adviceFinancialCoachInteractionLink = getInteractionLink({ bind: 'interactionLevel' }, {
    ...commonData
  });

  addFeatureFlag(adviceFinancialCoachView, analyticsAdviceFinancialCoachFeatureFlag);
  addFeatureFlag(adviceFinancialCoachClick, analyticsAdviceFinancialCoachFeatureFlag);
  addFeatureFlag(adviceFinancialCoachInteractionLink, analyticsAdviceFinancialCoachFeatureFlag);


  return {
    adviceFinancialCoachView,
    adviceFinancialCoachClick,
    adviceFinancialCoachInteractionLink
  };
};