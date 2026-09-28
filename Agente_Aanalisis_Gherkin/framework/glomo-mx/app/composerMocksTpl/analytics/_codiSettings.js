const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAdvancedFootprintWithLevel2,
  getAdvancedFootprintWithLevels2And3,
  getExternalLinkWithLink,
  getInternalLinkWithLevel3,
  getAdvancedFootprintError,
  getInternalLink
} = require('./common/_utils');
const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
module.exports = () => {
  const _common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.settings
  };
  const qrOperationsPlusCodi = getAdvancedFootprintWithLevel2(literals.codiOperative.operationsQrPlusCodi, {..._common});
  setFeatureFlags('codi.settings.principal', qrOperationsPlusCodi);
  const termsAndConditions = getExternalLinkWithLink(literals.commons.termsAndConditions, {
    ..._common,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.codiOperative.operationsQrPlusCodi
  });
  setFeatureFlags('codi.settings.clickpdf', termsAndConditions);
  const codiSettingsMessage = (level3) => {
    return setFeatureFlags('codi.settings.action', getAdvancedFootprintWithLevels2And3(literals.applicationName.codi, level3, {..._common}));
  };
  const deleteCodiRecordLink = getInternalLinkWithLevel3(literals.codiOperative.deleteCodiRecord, {
    ..._common,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.globalApplication.codi
  });
  setFeatureFlags('codi.settings.delete', deleteCodiRecordLink);
  const codiSettings = getInternalLink(literals.codiOperative.operationsQrPlusCodi, {
    ..._common
  });
  setFeatureFlags('codi.settings.principal', codiSettings);
  const error = getAdvancedFootprintError(literals.errors.conexion, {
    ..._common
  });
  setFeatureFlags('codi.settings.error', error);
  return {
    qrOperationsPlusCodi,
    termsAndConditions,
    codiSettingsMessage,
    deleteCodiRecordLink,
    codiSettings,
    error
  };
};
