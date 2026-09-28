const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAdvancedFootprintWithLevel2,
  getAdvancedFootprintWithLevel3,
  getAdvancedFootprintError,
  getAppOnClickStartLevel,
  getPageVisit,
  getAppStartedWithLevel2,
  getAppStep,
  getAppCompletedRaw,
  getInternalLinkWithPageActivityLevel3,
  addFeatureFlag
} = require('./common/_utils');
module.exports = () => {
  const featureFlagFunnel = {
    'key': 'glomo.analytics.profile.postalAddressManagement',
    'defaultValue': true
  };
  const featureFlagError = {
    'key': 'glomo.analytics.profile.postalAddressManagement.errors',
    'defaultValue': true
  };
  const featureFlagFootprint = {
    'key': 'glomo.analytics.profile.postalAddressManagement.footprint',
    'defaultValue': true
  };
  const featureFlagInteraction = {
    'key': 'glomo.analytics.profile.postalAddressManagement.interaction',
    'defaultValue': true
  };
  const bindedLiterals = {
    STREET_INTERACTION: literals.commons.street,
    EXT_NUMBER_INTERACTION: literals.commons.externalNumber,
    INT_NUMBER_INTERACTION: literals.commons.internalNumber,
    ZIP_CODE_INTERACTION: literals.commons.postalCode,
    COLONY_INTERACTION: literals.commons.neighborhood,
    CONTINUE_INTERACTION: literals.commons.continue,
    MODIFY_RECIPIENT: literals.commons.modifyReceipt,
    STEP_1: '1 ' + literals.commons.currentAddress
  };
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };
  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.managePostalAddress,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.addressManagement,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.selfManagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const commonEntryPoint = {
    [constants.APPLICATION_STEP]: { bind: 'step' },
    [constants.USER_SEGMENT_PROFILE]: { bind: 'segmentProfile' },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: { bind: 'primaryCategory' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  };
  const _commonModals = {
    ...common,
    [constants.USER_USERSTATE]: literals.commons.logado,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.addressManagement
  };
  const _commonUser = {
    [constants.APPLICATION_PROCESS]: { bind: 'process' },
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.addressManagement
  };
  const _commonFunnel = {
    ...commonEntryPoint,
    ...common,
    ...commonApplication
  };
  const appOnClickStart = getAppOnClickStartLevel(
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.profile,
      ..._commonFunnel
    }
  );
  const appOnClickStartProofAddress = getAppOnClickStartLevel(
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: 'cuenta',
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.updateInformation,
      [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' },
      ..._commonFunnel
    }
  );
  const appOnClickStartProceedingsModifyAddress = getAppOnClickStartLevel(
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: 'cuenta',
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.updateInformation,
      [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' },
      ..._commonFunnel
    }
  );
  const appVisit = getPageVisit(
    '1 ' + literals.commons.currentAddress,
    {
      ..._commonFunnel,
      ..._commonUser
    }
  );
  const appStarted = getAppStartedWithLevel2(
    '1 ' + literals.commons.currentAddress,
    {
      ..._commonFunnel,
      ..._commonUser,
      [constants.APPLICATION_STEP]: { bind: 'detail' }
    }
  );
  const _getAppStep = (numberStep, _step = '', _level2 = '') => {
    const _analytic = getAppStep(numberStep, {
      ..._commonFunnel,
      ..._commonUser,
      [constants.PAGE_PAGEINFO_LEVEL2]: _level2,
      [constants.APPLICATION_STEP]: _step
    });
    addFeatureFlag(_analytic, featureFlagFunnel);
    return _analytic;
  };

  const appCompleted = getAppCompletedRaw(
    {
      ..._commonFunnel,
      ..._commonUser,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
      [constants.APPLICATION_STATE]: literals.commons.underReview,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      }
    }
  );
  const _getAdvancedFootprint = (type, level2, level3) => {
    const types = {
      level2: getAdvancedFootprintWithLevel2(level2, {
        ..._commonModals
      }),
      level3: getAdvancedFootprintWithLevel3(level3, {
        [constants.PAGE_PAGEINFO_LEVEL2]: level2,
        ..._commonModals
      })
    };
    addFeatureFlag(types[type], featureFlagFootprint);
    return types[type];
  };

  const _getAdvancedFootprintError = (error) => {
    const _footPrintError = getAdvancedFootprintError(error, {
      [constants.PAGE_PAGEINFO_LEVEL2]: error,
      ..._commonModals
    });
    addFeatureFlag(_footPrintError, featureFlagError);
    return _footPrintError;
  };

  const _getInternalLink = (internalLinkName, level3) => {
    const _internalLink = getInternalLinkWithPageActivityLevel3(
      internalLinkName,
      level3,
      {
        [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.receipt,
        ..._commonModals
      }
    );
    addFeatureFlag(_internalLink, featureFlagInteraction);
    return _internalLink;
  };
  [
    appOnClickStart,
    appOnClickStartProofAddress,
    appOnClickStartProceedingsModifyAddress,
    appStarted,
    appVisit,
    appCompleted
  ].forEach(item => addFeatureFlag(item, featureFlagFunnel));
  return {
    bindedLiterals,
    appOnClickStart,
    appOnClickStartProofAddress,
    appOnClickStartProceedingsModifyAddress,
    appStarted,
    appVisit,
    _getAppStep,
    appCompleted,
    _getAdvancedFootprint,
    _getInternalLink,
    _getAdvancedFootprintError
  };
};
