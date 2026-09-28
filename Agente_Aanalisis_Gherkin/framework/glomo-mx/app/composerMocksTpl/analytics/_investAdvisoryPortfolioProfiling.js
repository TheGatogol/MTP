module.exports = () => {
  const {
    getAdvancedFootprint,
    getInternalLink,
    getAdvancedFootprintError,
    getAnalyticFeatureFlag,
    getClickThrough,
    getInternalLinkWithLevel2,
    getExternalLinkWithLink
  } = require('./common/_utils');
  const literal = require('./common/_literals');
  const constants = require('./common/_constants');
  const featureFlag = 'invest';
  const featureFlagError = 'investError';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literal.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: `${literal.sections.bbvaInvest} perfilamiento`,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literal.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literal.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literal.sections.glomo
  };
  const commonDynamicData = {
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'pageName' }
  };
  const applicationDynamicData = {
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'profileType' }
  };
  const investCommonDynamicData = {...common, ...commonDynamicData};
  const investCommonDynamicApplicationData = {...investCommonDynamicData, ...applicationDynamicData};
  const pageView = getAnalyticFeatureFlag(featureFlag, getAdvancedFootprint({
    ...investCommonDynamicData
  }), false);
  const advancedPageView = getAnalyticFeatureFlag(featureFlag, getAdvancedFootprint({
    ...investCommonDynamicApplicationData
  }), false);
  const internalLinkContinue = getAnalyticFeatureFlag(featureFlag, getInternalLink('continuar con este perfil', {
    ...investCommonDynamicApplicationData
  }), false);
  const internalLinkGoBack = getAnalyticFeatureFlag(featureFlag, getInternalLink('volver a perfilarme', {
    ...investCommonDynamicApplicationData
  }), false);
  const errorPageView = getAnalyticFeatureFlag(featureFlagError, getAdvancedFootprintError(
    { bind: 'pageName' }, { ...investCommonDynamicData }
  ), false);
  const errorModal = getAnalyticFeatureFlag(featureFlag, getAdvancedFootprint(
    { [constants.PAGE_PAGEINFO_LEVEL3]: 'modificar monto a invertir', ...investCommonDynamicApplicationData }
  ));
  const clickThrough = getAnalyticFeatureFlag(featureFlag, getClickThrough({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'oportunidades',
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literal.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  }), false);
  const internalLinkStickyCMB = getAnalyticFeatureFlag(literal.featureFlag.callMeBack, getInternalLink('sticky call me back', {
    ...investCommonDynamicData
  }));
  const internalLinkBlue = getAnalyticFeatureFlag(literal.featureFlag.callMeBack, getInternalLink('icono hablar con blue', {
    ...investCommonDynamicData
  }));

  const stepLink = (level2) => getAnalyticFeatureFlag(featureFlag, getInternalLinkWithLevel2('continuar', level2, {
    ...common,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'stepAnswers' }
  }));
  const experienceStepInternalLink = getAnalyticFeatureFlag(featureFlag, getInternalLinkWithLevel2('continuar', 'experiencia', {
    ...common,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'stepMultiAnswers' }
  }));

  const investmentHorizonStepInternalLink = stepLink('plazo de la inversion');

  const percentageInvestmentStepInternalLink = stepLink('porcentaje para inversion');

  const investmentExpectativesStepInternalLink = stepLink('expectativas de la inversion');

  const performanceStepInternalLink = stepLink('rendimiento');

  const lossAttitudeStepInternalLink = stepLink('actitud ante la perdida');

  const investmentGuideExternalLink = getAnalyticFeatureFlag(featureFlag, getExternalLinkWithLink('guia_de_servicios_de_inversion.pdf', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'propuesta personalizada'
  }));
  const shareProposalExternalLink = getAnalyticFeatureFlag(featureFlag, getExternalLinkWithLink('compartir propuesta personalizada', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'propuesta personalizada'
  }));
  const editAmountProposalInternalLink = getAnalyticFeatureFlag(featureFlag, getInternalLinkWithLevel2('editar monto a invertir', 'propuesta personalizada', {
    ...common
  }));
  return {
    pageView,
    advancedPageView,
    internalLinkContinue,
    internalLinkGoBack,
    errorPageView,
    clickThrough,
    errorModal,
    internalLinkStickyCMB,
    internalLinkBlue,
    experienceStepInternalLink,
    investmentHorizonStepInternalLink,
    percentageInvestmentStepInternalLink,
    investmentExpectativesStepInternalLink,
    performanceStepInternalLink,
    lossAttitudeStepInternalLink,
    investmentGuideExternalLink,
    shareProposalExternalLink,
    editAmountProposalInternalLink
  };
};
