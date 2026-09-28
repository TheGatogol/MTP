module.exports = () => {
  const {getPageVisitRaw, getAppStartedWithoutLevel, getAppCompletedRaw, getAdvancedFootprint, getAnalyticFeatureFlag, getAppStep} = require('./common/_utils');
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const setFeatureFlag = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const featureFlag = 'upgradeModular';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.highCustomers,
    [constants.APPLICATION_TYPOLOGY]: literals.commons.upgradeModular,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.changeLevel,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.upgradeCustomer,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.upgradeCustomer
  };
  const pageCommon = (step = '', level1 = '', level2 = '', level3 = '', level4 = '') => {
    return {
      ...common,
      [constants.APPLICATION_CUSTOM_FIELDS]: {'bind': 'customField'},
      [constants.APPLICATION_STEP]: step,
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
  };
  const appPageVisit = {
    ...getPageVisitRaw({
      ...pageCommon(
        '1 ' + literals.commons.termsAndCondi, literals.commons.profile, literals.commons.updateInformation, literals.commons.changeLevel, '1 ' + literals.commons.termsAndCondi
      )
    })
  };
  const appPageOtp = {
    ...getAppStep('2', {
      ...pageCommon(
        '2 ' + literals.commons.otp, literals.commons.profile, literals.commons.updateInformation, literals.commons.changeLevel, '2 ' + literals.commons.otp
      )
    })
  };
  const appPageReview = {
    ...getAppCompletedRaw({...pageCommon(
      '2 ' + literals.commons.otp, literals.commons.profile, literals.commons.updateInformation, literals.commons.changeLevel, literals.commons.successfulPage
    ),
    [constants.APPLICATION_STATE]: literals.commons.ended})
  };
  const appPagePrivacy = {
    ...getAdvancedFootprint({...pageCommon(
      '', literals.commons.profile, literals.commons.updateInformation, literals.commons.changeLevel, literals.commons.privacyAdvice
    )})
  };
  const appPageClick = (step) => {
    const obj = { ...getAppStartedWithoutLevel({ ...pageCommon(step, literals.commons.profile, literals.commons.updateInformation, literals.commons.changeLevel, '1 ' + literals.commons.termsAndCondi)})};
    return setFeatureFlag('upgradeModular', obj);
  };
  [
    appPageVisit,
    appPageOtp,
    appPageReview,
    appPagePrivacy
  ].forEach(item => setFeatureFlag(featureFlag, item));
  return {
    appPageVisit,
    appPageOtp,
    appPageReview,
    appPagePrivacy,
    appPageClick
  };
};
