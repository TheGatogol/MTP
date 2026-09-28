module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getPageVisit, getAppStep, getAppCompletedRaw, getAppStartedWithoutLevel, getAdvancedFootprint, getOCAccess } = require('./common/_utils');

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
  };

  const commonApplication = {
    ...common,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.addBeneficiary,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.registerRecipients,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.autogestion
  };

  const commonRecipient = {
    ...commonApplication,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.recipients,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: {bind: 'primaryCategory'},
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {bind: 'productName'}
  };

  const commonAppViewLoad = {
    [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'},
    [constants.USER_SEGMENT_PROFILE]: {bind: 'profile'},
    [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'}
  };

  const stepAppViewLoad = {
    [constants.PAGE_PAGEINFO_LEVEL2]: {bind: 'stepLevel'},
    [constants.APPLICATION_STEP]: {bind: 'stepLevel'}
  };

  const appOnClickStartRecipients = () => {
    const appOnClickStart = getOCAccess(literals.commons.profile, literals.commons.online, {
      ...commonApplication,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.profile
    });
    return appOnClickStart;
  };

  const appOnClickStartRecipientsProceedings = () => {
    const appOnClickStart = getOCAccess('modificar beneficiarios', literals.commons.online, {
      ...commonApplication,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'cuenta',
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.updateInformation,
      [constants.PAGE_PAGEINFO_LEVEL3]: {bind: 'level3'},
      [constants.USER_SEGMENT_PROFILE]: {bind: 'segmentProfile'},
      [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'}
    });
    return appOnClickStart;
  };

  const appAdvancedFootprint = (params) => {
    const appFootprint = {
      appViewCharge: getAnalyticFeatureFlag('profile.recipients.footprint', {
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.recipients,
        [constants.PAGE_PAGEINFO_LEVEL2]: {bind: 'level2'}
      }, true),
      appSelect: getAnalyticFeatureFlag('profile.recipients.footprint', {
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.recipients,
        [constants.PAGE_PAGEINFO_LEVEL2]: {bind: 'stepLevel'},
        [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'}
      }, true),
      appError: getAnalyticFeatureFlag('profile.recipients.error', {
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.recipients,
        [constants.PAGE_PAGEINFO_LEVEL2]: {bind: 'level2'},
        [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'},
        [constants.PAGE_PAGEINFO_ERRORPAGE]: {bind: 'errorPage'}
      }, true)
    };
    const appAdvancedFootprintObj = getAdvancedFootprint({
      ...common,
      ...appFootprint[params]
    });
    return appAdvancedFootprintObj;
  };

  const appLinkStarted = () => {
    const appClickRecipients = getAppStartedWithoutLevel({
      ...commonRecipient,
      ...commonAppViewLoad,
      [constants.PAGE_PAGEINFO_LEVEL2]: {bind: 'stepLevelTwo'},
      [constants.APPLICATION_STEP]: {bind: 'applicationStep'}
    });
    return appClickRecipients;
  };

  const appViewLoad = (params) => {
    const appViewMain = {
      appPageVisit: getPageVisit({bind: 'stepLevel'}, {
        ...commonRecipient,
        ...commonAppViewLoad
      }),
      appStep2: getAppStep('2', {
        ...commonRecipient,
        ...commonAppViewLoad,
        ...stepAppViewLoad
      }),
      appStep3: getAppStep('3', {
        ...commonRecipient,
        ...commonAppViewLoad,
        ...stepAppViewLoad
      }),
      appCompleted: getAppCompletedRaw({
        ...commonRecipient,
        ...commonAppViewLoad,
        ...stepAppViewLoad,
        [constants.APPLICATION_STATE]: literals.commons.ended
      })
    };
    return appViewMain[params];
  };

  const _getAnalyticFeatureFlags = (flagsName, analytic, value) => {
    getAnalyticFeatureFlag(flagsName, analytic, value);
  };

  [
    appOnClickStartRecipients,
    appOnClickStartRecipientsProceedings,
    appViewLoad,
    appLinkStarted
  ].forEach(analytic => _getAnalyticFeatureFlags('profile.recipients.funnel', analytic, true));
  return {
    appOnClickStartRecipientsProceedings,
    appOnClickStartRecipients,
    appViewLoad,
    appLinkStarted,
    appAdvancedFootprint
  };
};