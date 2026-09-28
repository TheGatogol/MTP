module.exports = () => {
  const { getAdvancedFootprintWithLevel3, getInternalLinkWithPageActivityLevel3, getAnalyticFeatureFlag } = require('./common/_utils');
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');

  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'cuenta',
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  };

  const appPageView = getAdvancedFootprintWithLevel3(
    'confirmar tratamiento de datos',
    common
  );

  const appPageViewSuccess = getAdvancedFootprintWithLevel3(
    'informacion actualizada con exito',
    common
  );

  const appPageViewKyc = getAdvancedFootprintWithLevel3(
    'acude a una sucursal',
    common
  );

  const internalLinkPrivacy = getInternalLinkWithPageActivityLevel3(
    'aviso de privacidad',
    'confirmar tratamiento de datos',
    common
  );

  const internalLinkSworn = getInternalLinkWithPageActivityLevel3(
    'declaracion jurada',
    'confirmar tratamiento de datos',
    common
  );

  [
    appPageView,
    appPageViewKyc
  ].forEach(analytic => getAnalyticFeatureFlag('account.upgradeCustomer', analytic));

  [
    internalLinkPrivacy,
    internalLinkSworn
  ].forEach(analytic => getAnalyticFeatureFlag('account.upgradeCustomer.interactions', analytic));

  return {
    appPageView,
    appPageViewSuccess,
    appPageViewKyc,
    internalLinkPrivacy,
    internalLinkSworn
  };
};
