module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag,
    getPageVisitWithLevel3,
    getOnClickStart,
    getStaticAppStarted,
    getAppStep,
    getAppCompletedRaw,
    getAdvancedFootprintWithLevel1,
    getAdvancedFootprintWithLevel2 } = require('./common/_utils');
  const featureFlagMobile = 'tagCardList';
  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.tag.registration,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative
  };
  const operatelevel = (level1, level2) => {
    return {
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2
    };
  };
  const commonsTagRegister = (level1, level2) => ({
    ...commons,
    ...commonApplication,
    ...operatelevel(level1, level2)
  });
  const setFeatureFlag = (analytic, featureFlag = featureFlagMobile) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const pageViewVisit = (level1, level2, applicationStep, applicationName, applicationTypology) => {
    const obj = {
      ...commonsTagRegister(level1, level2),
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.APPLICATION_APPLICATION_NAME]: applicationName,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
      [constants.APPLICATION_TYPOLOGY]: applicationTypology
    };
    return setFeatureFlag(getPageVisitWithLevel3('', obj));
  };
  const onClickStart = (level1, level2, applicationStep, pageIntent, applicationName, type, globalApplication) => {
    const obj = {
      ...commons,
      ...operatelevel(level1, level2),
      [constants.PAGE_PAGEINFO_PAGEINTENT]: pageIntent,
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.APPLICATION_APPLICATION_NAME]: applicationName,
      [constants.APPLICATION_APPLICATION_TYPE]: type,
      [constants.APPLICATION_GLOBAL_APPLICATION]: globalApplication
    };
    return setFeatureFlag(getOnClickStart(applicationStep, pageIntent, obj));
  };
  const appStarted = (applicationStep, level1, level2, applicationName, textlevel) => {
    const obj = {
      ...commonsTagRegister(level1, level2),
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.APPLICATION_APPLICATION_NAME]: applicationName
    };
    return getStaticAppStarted(applicationStep, textlevel, obj);
  };
  const appStartedTooltip = appStarted(literals.tag.infoCost, literals.tag.register, literals.commons.first_detail, literals.tag.register);
  const appStartedMoreInfo = appStarted(literals.tag.moreInformation, literals.tag.register, literals.commons.first_detail, literals.tag.register);
  const appStartedPhoneCall = appStarted(literals.tag.call, literals.tag.register, literals.commons.first_detail, literals.tag.register);
  const appStartedRegisterTag = appStarted(literals.tag.registerButton, literals.tag.register, literals.commons.first_detail, literals.tag.register);
  const appStep = (numberStep, level1, level2, applicationStep, applicationTypology, amount, currency, applicationName) => {
    const obj = {
      ...commonsTagRegister(level1, level2),
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.APPLICATION_TYPOLOGY]: applicationTypology,
      [constants.APPLICATION_PROCESS]: {
        bind: 'provider'
      },
      [constants.APPLICATION_AMOUNT]: amount,
      [constants.APPLICATION_CURRENCY]: currency,
      [constants.APPLICATION_APPLICATION_NAME]: applicationName
    };
    return setFeatureFlag(getAppStep(numberStep, obj));
  };
  const appCompleted = (level1, level2, applicationStep,  applicationState, applicationTypology, productState, applicationName) => {
    const obj = {
      ...commonsTagRegister(level1, level2),
      [constants.USER_SEGMENT_PROFILE]: {
        bind: 'codeError'
      },
      [constants.PRODUCT_STATE]: productState,
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.APPLICATION_STATE]: applicationState,
      [constants.APPLICATION_APPLICATION_NAME]: applicationName,
      [constants.APPLICATION_TYPOLOGY]: applicationTypology,
      [constants.APPLICATION_PROCESS]: {
        bind: 'provider'
      }
    };
    return setFeatureFlag(getAppCompletedRaw(obj));

  };
  const commonFootprint = {
    ...commons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };
  const footprintTagPase = getAdvancedFootprintWithLevel1(literals.tag.primaryCompany, commonFootprint);
  const footprintProviderTag = ()=> {
    const obj = {
      ...commonFootprint,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.tag.register
    };
    return setFeatureFlag(getAdvancedFootprintWithLevel2(literals.tag.operator, obj));
  };
  [
    appStartedTooltip,
    appStartedMoreInfo,
    appStartedPhoneCall,
    appStartedRegisterTag,
    footprintTagPase
  ].forEach(item => setFeatureFlag(item));
  return {
    pageViewVisit,
    onClickStart,
    appStarted,
    appStartedTooltip,
    appStartedMoreInfo,
    appStartedPhoneCall,
    appStartedRegisterTag,
    appStep,
    appCompleted,
    footprintTagPase,
    footprintProviderTag
  };
};

