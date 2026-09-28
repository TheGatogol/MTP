module.exports = () => {
  const { getAnalyticFeatureFlag, getOnClickStart, getAdvancedFootprint } = require('./common/_utils');
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const featureFlag = 'upgradeModular';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_SYSENV]: literals.commons.app,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.highCustomers,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_TYPOLOGY]: literals.commons.upgradeModular
  };
  const pageCommon = (level1 = '', level2 = '', globalApplication = '',
    applicationName = '', applicationType = '') => ({
    ...common,
    [constants.APPLICATION_CUSTOM_FIELDS]: {'bind': 'customField'},
    [constants.PAGE_PAGEINFO_LEVEL1]: level1,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.APPLICATION_GLOBAL_APPLICATION]: globalApplication,
    [constants.APPLICATION_APPLICATION_NAME]: applicationName,
    [constants.APPLICATION_APPLICATION_TYPE]: applicationType
  });
  const modularExpedint = (globalApplication = '', applicationName = '', applicationType = '') =>({
    ...pageCommon(literals.commons.modularFile, literals.commons.updateInformation, globalApplication, applicationName, applicationType)
  });
  const appOnClickStartConfirm = getOnClickStart(literals.commons.continue, literals.commons.information,
    {...modularExpedint(literals.commons.upgradeCustomer, literals.commons.changeLevel, literals.commons.clientActivation)});
  const appOnClickStartAddress = getOnClickStart(literals.commons.edit, literals.commons.information,
    {...modularExpedint('manage postal address', 'gestionar direccion', literals.commons.operative)});
  const appOnClickStartKyc = getOnClickStart(literals.commons.edit, literals.commons.information,
    {...modularExpedint('financial habits', 'habitos financieros', literals.commons.operative)});
  const appOnClickStartFatca = getOnClickStart(literals.commons.edit, literals.commons.information,
    {...modularExpedint('fiscal information update', 'actualizacion fiscal', literals.commons.operative)});
  const appOnClickStartVideoselfie = getOnClickStart(literals.commons.edit, literals.commons.information,
    {...modularExpedint('customer validation', 'validar identificacion', 'autogestion')});
  const appOnClickStartIdentity = getOnClickStart(literals.commons.edit, literals.commons.information,
    {...pageCommon(
      literals.commons.profile, literals.commons.updateInformation, 'id validation', 'actualizar identificacion', literals.commons.operative
    )});
  const _getUpgradeAccountFootPrint = getAdvancedFootprint({
    ...pageCommon(literals.commons.profile, literals.commons.updateInformation),
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.empty,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.empty,
    [constants.APPLICATION_TYPOLOGY]: literals.commons.empty
  });
  [
    _getUpgradeAccountFootPrint,
    appOnClickStartConfirm,
    appOnClickStartAddress,
    appOnClickStartKyc,
    appOnClickStartFatca,
    appOnClickStartIdentity,
    appOnClickStartVideoselfie
  ].forEach(item => setFeatureFlags(featureFlag, item));
  return {
    _getUpgradeAccountFootPrint,
    appOnClickStartConfirm,
    appOnClickStartAddress,
    appOnClickStartKyc,
    appOnClickStartFatca,
    appOnClickStartIdentity,
    appOnClickStartVideoselfie
  };
};
