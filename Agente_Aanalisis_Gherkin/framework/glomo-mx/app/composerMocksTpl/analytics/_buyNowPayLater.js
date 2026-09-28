module.exports = () => {
  const constants = require('./common/_constants.js');
  const {bnpl, commons, sections, tag, errors, ocAccount} = require('./common/_literals.js');
  const { getAnalyticFeatureFlag, getAppOnClickStartLevel2, getPageVisit, getAppStartedWithLevel2, getAppStep, getAppCompletedRaw, getAdvancedFootprintError, getAdvancedFootprint } = require('./common/_utils');
  const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const analyticFeatureFlag = 'buyNowPayLater';
  const analyticFeatureFlagError = 'buyNowPayLater.footprint.error';
  const analyticFeatureFlagFootprint = 'buyNowPayLater.footprint';


  const common = {
    [ constants.APPLICATION_APPLICATION_TYPE ]: commons.engagement,
    [ constants.APPLICATION_APPLICATION_NAME ]: 'bbva elije tu plazo',
    [ constants.APPLICATION_FULLFILMENT ]: commons.fulfillmentOn,
    [ constants.APPLICATION_GLOBAL_APPLICATION ]: 'revolving credit line',
    [ constants.APPLICATION_TYPOLOGY ]: { bind: 'commerce' },
    [ constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY ]: commons.account,
    [ constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME ]: ocAccount.basicLibreton,
    [ constants.PRODUCT_CURRENCY ]: tag.badge,
    [ constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT ]: { bind: 'amount' },
    [ constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT ]: { bind: 'paymentAmount' },
    [ constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS ]: { bind: 'terms' },
    [ constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE ]: commons.monthly
  };

  const commonPage = {
    [ constants.PAGE_PAGEINFO_AREA ]: commons.private,
    [ constants.PAGE_PAGEINFO_PAGESEGMENT ]: commons.persons,
    [ constants.PAGE_PAGEINFO_PAGEINTENT ]: commons.information,
    [ constants.PAGE_PAGEINFO_PROJECTNAME ]: sections.glomo,
    [ constants.PAGE_PAGEINFO_LEVEL1 ]: bnpl.revolvingCredit
  };

  const step1 = `1 ${commons.termsAndConditions}`;
  const step2 = `2 ${commons.confirmation}`;
  const step3 = `3 ${commons.otp}`;

  const clickStart = getAppOnClickStartLevel2(
    bnpl.revolvingCredit,
    bnpl.chooseTerm,
    {
      ...common,
      ...commonPage,
      [ constants.APPLICATION_STEP ]: bnpl.chooseTerm
    }
  );

  const loanPage = getPageVisit(
    bnpl.revolvingCredit,
    {
      ...common,
      ...commonPage,
      [ constants.PAGE_PAGEINFO_LEVEL2 ]: step1,
      [ constants.QUALIFIED_VISITS ]: commons.trueValue,
      [ constants.APPLICATION_STEP ]: step1
    }
  );

  const appStarted = getAppStartedWithLevel2(
    step1,
    {
      ...common,
      ...commonPage,
      [ constants.PAGE_PAGEINFO_LEVEL2 ]: step1,
      [ constants.APPLICATION_STEP ]: { bind: 'stepValue' }
    }
  );

  const appStepConfirmation = getAppStep(
    '2',
    {
      ...common,
      ...commonPage,
      [ constants.APPLICATION_STEP ]: step2,
      [ constants.PAGE_PAGEINFO_LEVEL2 ]: step2
    }
  );

  const appStepOtp = getAppStep(
    '3',
    {
      ...common,
      ...commonPage,
      [ constants.PAGE_PAGEINFO_LEVEL2 ]: step3,
      [ constants.APPLICATION_CUSTOM_FIELDS ]: commons.signToken,
      [ constants.APPLICATION_STEP ]: step3
    }
  );

  const appSuccessPage = getAppCompletedRaw({
    ...common,
    ...commonPage,
    [ constants.APPLICATION_STATE ]: commons.hired,
    [ constants.PAGE_PAGEINFO_LEVEL2 ]: commons.successfulPage,
    [ constants.APPLICATION_STEP ]: commons.successfulPage,
    [ constants.APPLICATION_OPERATION_NUMBER ]: { bind: 'operationId' },
    [ constants.PRODUCT_STATE ]: commons.hired,
    [ constants.APPLICATION_CUSTOM_FIELDS ]: commons.signToken
  }
  );

  const footprintErrorGrantingDeadlines = getAdvancedFootprintError(
    errors.grantingDeadlines,
    {
      ...commonPage,
      [ constants.PAGE_PAGEINFO_LEVEL2 ]: errors.grantingDeadlines
    }
  );

  const footprintErrorPurchaseCanNotBePaid = getAdvancedFootprintError(
    errors.purchaseCanNotBePaid,
    {
      ...commonPage,
      [ constants.PAGE_PAGEINFO_LEVEL2 ]: errors.purchaseCanNotBePaid
    }
  );

  const footprintSelectDeadline = getAdvancedFootprint({
    ...commonPage,
    [ constants.PAGE_PAGEINFO_LEVEL2 ]: bnpl.chooseTerm
  });

  [
    clickStart,
    loanPage,
    appStarted,
    appStepConfirmation,
    appStepOtp,
    appSuccessPage
  ].forEach(item => setFeatureFlags(analyticFeatureFlag, item));

  setFeatureFlags(analyticFeatureFlagFootprint, footprintSelectDeadline);

  [footprintErrorGrantingDeadlines, footprintErrorPurchaseCanNotBePaid].forEach(item => setFeatureFlags(analyticFeatureFlagError, item));

  return {
    footprintSelectDeadline,
    clickStart,
    loanPage,
    appStarted,
    appStepConfirmation,
    appStepOtp,
    appSuccessPage,
    footprintErrorGrantingDeadlines,
    footprintErrorPurchaseCanNotBePaid
  };
};