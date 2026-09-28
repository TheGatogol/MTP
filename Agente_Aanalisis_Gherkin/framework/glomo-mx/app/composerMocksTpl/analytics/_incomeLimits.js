module.exports = () => {

  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getAdvancedFootprint } = require('./common/_utils');

  const commons = (level1) => ({
    [constants.PAGE_PAGEINFO_LEVEL1]: level1,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  });

  const appPageViewIncomeLimits = (level1) => {
    const analytics = {
      ...commons(level1)
    };
    return getAnalyticFeatureFlag('incomeLimits', getAdvancedFootprint(analytics));
  };

  const appPageViewIncomeLimitsMultistep = (level1, level2) => {
    const analytics = {
      ...commons(level1),
      [constants.PAGE_PAGEINFO_LEVEL2]: level2
    };
    return getAnalyticFeatureFlag('incomeLimits', getAdvancedFootprint(analytics));
  };

  const customLevelTwo = (id = '') => {
    const option = {
      cc: 'contrato',
      cv: 'convenio',
      da: 'declaracion anual',
      dm: 'declaracion mensual',
      ff: 'facturas'
    } [id] || '';
    return `comprobante ${option}`;
  };

  const appPageViewSelectedProofOfIncome = (level1, level2 = '') => {
    const analytics = {
      ...commons(level1),
      [constants.PAGE_PAGEINFO_LEVEL2]: customLevelTwo(level2)
    };
    return getAnalyticFeatureFlag('incomeLimits', getAdvancedFootprint(analytics));
  };

  const appPageViewOTP = (level1, level2) => {
    const analytics = {
      ...commons(level1),
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
    };
    return getAnalyticFeatureFlag('incomeLimits', getAdvancedFootprint(analytics));
  };

  const appErrorPageIncomeLimits = (level1, level2, errorPage = '') => {
    const analytics = {
      ...commons(level1),
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage
    };
    return getAnalyticFeatureFlag('incomeLimits.errorPage', getAdvancedFootprint(analytics));
  };

  const appErrorPageUpdateFolio = (level1, level2, errorPage = '') => {
    const analytics = {
      ...commons(level1),
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage
    };
    return getAnalyticFeatureFlag('incomeLimits.updateFolioError', getAdvancedFootprint(analytics));
  };

  const customErrorType = (id = '') => {
    const optionError = {
      n: 'estamos validando tu informacion',
      ac: 'no esta disponible compartir informacion',
      r: 'compartir informacion todavia no esta disponible',
      d1: 'necesitas actualizar tu informacion',
      d2: 'necesitas actualizar tu documentacion',
      d3: 'necesitas actualizar tu informacion y documentacion'
    } [id] || '';

    return `error ${optionError}`;
  };

  const appSiteErrorIncomeLimits = (level1, errorType = '') => {
    const analytics = {
      ...commons(level1),
      [constants.APPLICATION_ERROR_TYPE]: customErrorType(errorType)
    };
    return getAnalyticFeatureFlag('incomeLimits.siteError', getAdvancedFootprint(analytics));
  };

  return {
    appPageViewIncomeLimits,
    appPageViewIncomeLimitsMultistep,
    appPageViewSelectedProofOfIncome,
    appPageViewOTP,
    appErrorPageIncomeLimits,
    appErrorPageUpdateFolio,
    appSiteErrorIncomeLimits
  };
};
