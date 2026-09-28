/* eslint-disable no-shadow */
const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getProduct,
  getOnClickStart,
  getAppStartedWithLevel2,
  getPageVisitRaw,
  getAppStep,
  getAppCompletedLevel2,
  getAnalyticFeatureFlagError,
  getAdvancedFootprint,
  addFeatureFlag,
  getAdvancedFootprintError,
  getAppSignedContracts,
  getInternalLinkWithLevel2,
  getClickThrough
} = require('./common/_utils');
const analyticsFeatureFlag = {
  analyticsFeatureFlagOptionFall: {
    key: 'glomo.liteOnboarding.FallInOption',
    defaultValue: false
  }
};

module.exports = () => {
  const productConfig = getProduct(literals.commons.account, '', literals.commons.digitalAccount);
  const bindedLiterals = {
    CREDIT_HISTORY_SELECTED: literals.commons.creditHistorySelected,
    CREDIT_HISTORY_NO_SELECTED: literals.commons.creditHistoryNoSelected,
    STEP_2: literals.commons.residence,
    STEP_3: literals.commons.contactData,
    STEP_4: literals.commons.contracts,
    STEP_5: literals.commons.passwordStep,
    SCANID_INTERACTION: literals.commons.scanIne,
    INFOID_INTERACTION: literals.commons.infoIdentification,
    NAME_INTERACTION: literals.commons.name,
    LASTNAME_INTERACTION: literals.commons.lastName,
    SECOND_LASTNAME_INTERACTION: literals.commons.secondLastName,
    BIRTHDAY_INTERACTION: literals.commons.birthDate,
    BIRTHPLACE_INTERACTION: literals.commons.birthPlace,
    MALEGENDER_INTERACTION: 'masculino',
    FEMALEGENDER_INTERACTION: 'femenino',
    NONBINARYGENDER_INTERACTION: 'no binario',
    UNKNOWN_GENDER: literals.commons.unknown,
    NUMBERID_INTERACTION: literals.commons.ineNumber
  };
  const common = {
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.commons.openmarket,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.enrollmentBasic,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.onboardingAccount,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.enrollmentBasic,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.highCustomers,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.digitalAccount,
    [constants.USER_USERSTATE]: literals.commons.noLogado,
    ...productConfig
  };
  const _commonModals = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.enrollmentBasic,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.commons.openmarket,
    [constants.USER_USERSTATE]: literals.commons.noLogado
  };
  const appOnClickStart = getOnClickStart(literals.commons.openAccountDetail,
    literals.commons.information, {
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.account_detail,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      ...common
    });
  const appStarted = getAppStartedWithLevel2('1 ' + literals.commons.personalData, {
    [constants.APPLICATION_STEP]: { bind: 'detail' },
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    ...common
  }
  );
  const appSignedContracts = getAppSignedContracts('4 contratos', literals.commons.information, {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.USER_GENDER]: { bind: 'userGender' },
    [constants.USER_PROSPECT_ID]: { bind: 'prospectId' },
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    ...common
  });

  const getInternalLinkForSteps = (textLinkName = '', level2 = '') => getInternalLinkWithLevel2(textLinkName = '', level2 = '', {
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
    [constants.PAGE_PAGEACTIVITY_LINK_NAME]: { bind: 'textLinkName' },
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    ...common
  });

  const commonRelease = (level2, step, typology = false, prospect = false, process = false, userGender = false) => {
    const _commonRelease = {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.APPLICATION_STEP]: step
    };
    if (step === '1 datos personales') {
      Object.assign(_commonRelease, {
        [constants.QUALIFIED_VISITS]: literals.commons.trueValue
      });
    }
    if (typology) {
      Object.assign(_commonRelease, {
        [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' }
      });
    }
    if (userGender) {
      Object.assign(_commonRelease, {
        [constants.USER_GENDER]: { bind: 'userGender' }
      });
    }
    if (prospect) {
      Object.assign(_commonRelease, {
        [constants.USER_PROSPECT_ID]: { bind: 'prospectId' }
      });
    }
    if (process) {
      Object.assign(_commonRelease, {
        [constants.APPLICATION_PROCESS]: { bind: 'process' }
      });
    }
    if (step === '7 otp') {
      Object.assign(_commonRelease, {
        [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signSMS
      });
    }
    return _commonRelease;
  };
  const _getPageVisitRaw = (level2, step, typology) => {
    const obj = {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      ...commonRelease(level2, step, typology)
    };
    const analytic = getPageVisitRaw(obj);
    return analytic;
  };
  const _getAppStep = (_appStep = '', _level2 = '', numberStep, _typology = false, _prospect = false, _process = false, _userGender = false) => {
    const analytic = getAppStep(numberStep, {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      ...commonRelease(_level2, _appStep, _typology, _prospect, _process, _userGender)
    });
    return analytic;
  };
  const getAppCompletedLevel2Analytics = ({ step = literals.commons.successfulPage, state = literals.commons.contracted }) => {
    return getAppCompletedLevel2(
      step,
      state,
      {
        [constants.APPLICATION_REVIEW_REASON]: { bind: 'reviewReason' },
        [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
        [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
        [constants.USER_GENDER]: { bind: 'userGender' },
        [constants.USER_PROSPECT_ID]: { bind: 'prospectId' },
        [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
        [constants.APPLICATION_DECLINED_REASON]: { bind: 'declinedReason' },
        ...common
      }
    );
  };

  const getClickThroughAnalytics = () => getClickThrough({
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    ...common
  });

  const getAdvancedFootprintAnalytics = ({
    level1 = literals.commons.enrollmentBasic,
    level2,
    level3,
    pageInfoIntent = literals.commons.transaction
  } = {}) => getAdvancedFootprint({
    ..._commonModals,
    [constants.PAGE_PAGEINFO_LEVEL1]: level1,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.PAGE_PAGEINFO_LEVEL3]: level3,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: pageInfoIntent
  });

  const clickThrough = getClickThrough(
    {
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.enrollmentBasic,
      [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'campaignLocation' },
      [constants.INTERNAL_CAMPAIGN_FORMAT]: { bind: 'campaignFormat' },
      [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'campaignCollectiveCode' },
      [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName' },
      [constants.INTERNAL_CAMPAIGN_PRODUCT]: { bind: 'campaignProduct' },
      [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: { bind: 'campaignProductCode' },
      [constants.INTERNAL_CAMPAIGN_QUANTITY]: { bind: 'campaignQuantity' },
      [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
      [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' },
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage
    }
  );

  const _getAdvancedFootprintError = (flagName, error) =>
    getAnalyticFeatureFlagError(flagName, getAdvancedFootprintError(
      error,
      _commonModals,
      {
        [constants.PAGE_PAGEINFO_LEVEL2]: error,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
      }
    ));

  [
    bindedLiterals,
    appOnClickStart,
    appStarted,
    appSignedContracts,
    getAppCompletedLevel2Analytics,
    getInternalLinkForSteps,
    _getPageVisitRaw,
    _getAppStep,
    getAdvancedFootprintAnalytics,
    _getAdvancedFootprintError,
    getClickThroughAnalytics
  ].forEach((analytic) =>
    addFeatureFlag(analytic, {
      key: 'glomo.analytics.refactorN2',
      defaultValue: true
    }));
  [
    clickThrough
  ].forEach((analytic) => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagOptionFall));
  return {
    bindedLiterals,
    appOnClickStart,
    appStarted,
    appSignedContracts,
    getAppCompletedLevel2Analytics,
    getInternalLinkForSteps,
    _getPageVisitRaw,
    _getAppStep,
    clickThrough,
    getAdvancedFootprintAnalytics,
    _getAdvancedFootprintError,
    getClickThroughAnalytics
  };
};
