/* eslint-disable no-use-before-define */
module.exports = CONFIG => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const utils = require('./common/_utils');

  const commonInternalCampaingsBinding = {
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  };

  const commonsArea = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const commonsAreaOnClickStart = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.oneClickCreditCard,
    ...commonsArea
  };

  const commonsOnClickStart = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    ...commonsAreaOnClickStart,
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
    ...commonInternalCampaingsBinding
  };

  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.creditCardHolder,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.oneClickCreditCard,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn + '/' + literals.commons.fulfillmentOff
  };

  const commonRfc = {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.updateRfc
  };

  const qualifiedVisits = {
    [constants.qualifiedVisits]: literals.commons.qualifiedVisitsTrue
  };

  const productData = utils.getProduct(literals.commons.cards, literals.commons.creditCards);

  const dynamicData = {
    ...productData,
    [constants.PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [constants.PRODUCT_CURRENCY]: {
      bind: 'currency'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    },
    [constants.PRODUCT_STATE]: {
      bind: 'productState'
    },
    [constants.APPLICATION_STATE]: {
      bind: 'applicationState'
    },
    [constants.APPLICATION_PROCESS]: {
      bind: 'applicationProcess'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomField'
    },
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'applicationTypology'
    }
  };

  const APP_ON_CLICK_START = utils.getOnClickStart(
    literals.commons.interestedOportunities,
    literals.commons.information,
    commonsOnClickStart,
    commonApplication
  );

  const appPageVisit = utils.getPageVisitWithLevel3(
    '1 ' + literals.operative.request,
    commons,
    commonApplication,
    qualifiedVisits,
    dynamicData
  );

  const appStarted = utils.getDynamicAppStarted(
    '1 ' + literals.operative.request,
    commons,
    commonApplication,
    dynamicData
  );

  const appStep = (numberStep, level3) => {
    let obj = {
      ...commons,
      ...commonApplication,
      ...dynamicData
    };

    let analytics = utils.getAppStepWithLevel3(numberStep, level3, obj);
    utils.addFeatureFlag(analytics, analyticsFeatureFlagCreditCardHolder);
    return analytics;
  };

  const appCompleted = utils.getAppCompletedRaw(
    commons,
    commonApplication,
    dynamicData,
    {
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      },
      [constants.USER_SEGMENT_PROFILE]: {
        bind: 'userSegmentProfile'
      }
    }
  );

  const appHuellaAlternateAddress = utils.getAdvancedFootprint(
    commons,
    {
      [constants.PAGE_PAGEINFO_LEVEL3]: '3' + literals.commons.threeAddress,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.anotherAddress
    }
  );

  const appHuellaErrorPage = utils.getAdvancedFootprintError(
    literals.commons.serviceError,
    commons,
    {
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.unavailableOperation
    }
  );

  const _getAdvancedFootprint = (...data) => utils.getAdvancedFootprint(commonRfc, ...data);

  const pageViewModifyCustomerSuccess = {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.successfulPage
  };

  const pageViewModifyCustomerErrorRegister = {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.dataRegisterError,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.commons.dataRegisterError + ' rfc'
  };

  const pageViewModifyCustomerErrorValidate = {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.errors.validateError + ' rfc',
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.validateError + ' rfc'
  };

  const appPageViewUserFormStep = utils.getAnalyticFeatureFlag('creditCardHolder.updateRFC', _getAdvancedFootprint());
  const appPageViewModifyCustomerSuccess = utils.getAnalyticFeatureFlag('creditCardHolder.updateRFC', _getAdvancedFootprint(pageViewModifyCustomerSuccess));
  const appPageViewModifyCustomerErrorRegister = utils.getAnalyticFeatureFlag('creditCardHolder.updateRFC.errorRegister', _getAdvancedFootprint(pageViewModifyCustomerErrorRegister));
  const appPageViewModifyCustomerErrorValidate = utils.getAnalyticFeatureFlag('creditCardHolder.updateRFC.errorValidate', _getAdvancedFootprint(pageViewModifyCustomerErrorValidate));

  const appHuellaPaymentDateSelection = utils.getAdvancedFootprint(
    commons,
    {
      [constants.PAGE_PAGEINFO_LEVEL3]: '2 tipo de pago',
      [constants.PAGE_PAGEINFO_LEVEL4]: 'cambio fecha de pago'
    }
  );

  const analyticsFeatureFlagCreditCardHolder = {
    'key': 'glomo.analytics.creditCardHolder',
    'defaultValue': true
  };
  [
    appPageVisit,
    appStarted,
    appCompleted,
    appHuellaPaymentDateSelection
  ].forEach(item => utils.addFeatureFlag(item, analyticsFeatureFlagCreditCardHolder));

  const analyticsFeatureFlagCreditCardHolderErrors = {
    'key': 'glomo.analytics.creditCardHolder.errors',
    'defaultValue': true
  };
  [
    appHuellaErrorPage
  ].forEach(item => utils.addFeatureFlag(item, analyticsFeatureFlagCreditCardHolderErrors));

  return {
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStep,
    appCompleted,
    appHuellaAlternateAddress,
    appHuellaErrorPage,
    appPageViewUserFormStep,
    appPageViewModifyCustomerSuccess,
    appPageViewModifyCustomerErrorRegister,
    appPageViewModifyCustomerErrorValidate,
    appHuellaPaymentDateSelection
  };
};
