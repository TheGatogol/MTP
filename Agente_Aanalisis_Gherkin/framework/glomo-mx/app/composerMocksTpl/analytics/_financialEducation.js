const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAdvancedFootprint,
  addFeatureFlag,
  getInternalLink,
  getExternalLinkWithLink,
  getInteractionLink
} = require('./common/_utils');

module.exports = () => {
  const featureFlagFootprints = {
    'key': 'glomo.analytics.financialEducation.footprint',
    'defaultValue': true
  };

  const featureFlagInteraction = {
    'key': 'glomo.analytics.financialEducation.interactionLink',
    'defaultValue': true
  };

  const featureFlagExternal = {
    'key': 'glomo.analytics.financialEducation.externalLink',
    'defaultValue': true
  };

  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.financialTipsYoungPeople,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const footprintStarted = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'dashboard'
  });

  const internalLinkDashboard = getInternalLink({ bind: 'linkName' }, {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'dashboard'
  });

  const footprintModalVideo = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'apartados'
  });

  const externalLinkModalVideo = getExternalLinkWithLink({ bind: 'linkUrl' }, {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'apartados'
  });

  const footprintTabs = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'temas de interes'
  });

  const interactionLinkTabSelected = getInteractionLink({ bind: 'interactionLevel' }, {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'temas de interes'
  });

  const footprintModalText = getAdvancedFootprint({
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle de articulo',
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  });

  [
    footprintStarted,
    footprintModalVideo,
    footprintTabs,
    footprintModalText
  ].forEach(item => addFeatureFlag(item, featureFlagFootprints));

  [
    internalLinkDashboard,
    interactionLinkTabSelected
  ].forEach(item => addFeatureFlag(item, featureFlagInteraction));

  [ externalLinkModalVideo ].forEach(item => addFeatureFlag(item, featureFlagExternal));

  return {
    footprintStarted,
    internalLinkDashboard,
    footprintModalVideo,
    externalLinkModalVideo,
    footprintTabs,
    interactionLinkTabSelected,
    footprintModalText
  };
};
