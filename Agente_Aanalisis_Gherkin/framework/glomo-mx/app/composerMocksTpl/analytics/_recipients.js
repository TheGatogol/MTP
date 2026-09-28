const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utils = require('./common/_utils');
module.exports = () => {

  const FEATURE_FLAG = {
    GLOBAL: 'recipients',
    DELETE_RECIPIENTS_INTERNAL_LINK_PRINT: 'recipients.deleteRecipientsInternalLinkPrint',
    ERROR_OPERATION_NOT_AVAILABLE: 'recipients.errorOperationNotAvailable',
    ERROR_BLACK_LIST_PAGE: 'recipients.errorBlackListPage'
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.recipients,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };


  const COMMON_RECIPIENTS = {
    ...COMMON,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.addBeneficiary,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.registerRecipients,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.selfManagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };

  const APP_ON_CLICK_START = utils.getAnalyticFeatureFlag(
    FEATURE_FLAG.GLOBAL,
    utils.getOnClickStart(
      LITERALS.commons.fromProfile,
      '',
      {
        ...COMMON_RECIPIENTS,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.myprofile
      }
    )
  );
  const APP_PAGE_VISIT = utils.getAnalyticFeatureFlag(
    FEATURE_FLAG.GLOBAL,
    utils.getPageVisitWithLevel3(
      '',
      {
        ...COMMON_RECIPIENTS,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `1 ${LITERALS.commons.chooseAccount}`,
        [CONSTANTS.APPLICATION_STEP]: `1 ${LITERALS.commons.chooseAccount}`
      }
    )
  );
  const APP_STARTED = utils.getAnalyticFeatureFlag(
    FEATURE_FLAG.GLOBAL,
    utils.getStaticAppStarted(
      LITERALS.commons.selectAccount,
      '',
      {
        ...COMMON_RECIPIENTS,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `1 ${LITERALS.commons.chooseAccount}`
      }
    )
  );


  const STEPS_LITERALS = {
    'STEP_2': LITERALS.commons.manageBeneficiary,
    'STEP_3': LITERALS.commons.beneficiaryData,
    'STEP_4': LITERALS.commons.summary
  };

  const appStepCommon = (stepNumber, analitycs = '') => {
    return utils.getAnalyticFeatureFlag(
      FEATURE_FLAG.GLOBAL,
      utils.getAppStep(
        `${stepNumber}`,
        {
          ...COMMON_RECIPIENTS,
          [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${stepNumber} ${STEPS_LITERALS[`STEP_${stepNumber}`]}`,
          [CONSTANTS.APPLICATION_STEP]: `${stepNumber} ${STEPS_LITERALS[`STEP_${stepNumber}`]}`,
          ...analitycs
        }
      )
    );
  };

  const appStepTypology = (stepNumber) => {
    return appStepCommon(
      stepNumber,
      {
        [CONSTANTS.APPLICATION_TYPOLOGY]: {
          bind: 'typology'
        }
      }
    );
  };

  const stepsRecipients = {
    'STEP_2': appStepCommon('2'),
    'STEP_3': appStepCommon('3'),
    'STEP_4': appStepTypology('4')
  };

  const appStep = (stepNumber) => {
    return stepsRecipients[`STEP_${stepNumber}`];
  };

  const APP_COMPLETED = utils.getAnalyticFeatureFlag(
    FEATURE_FLAG.GLOBAL,
    utils.getAppCompleted(
      '',
      LITERALS.commons.ended,
      {
        ...COMMON_RECIPIENTS,
        [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage,
        [CONSTANTS.APPLICATION_TYPOLOGY]: {
          bind: 'typology'
        },
        [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.commons.token
      }
    )
  );

  const getAdvancedFootprintFunction = (literal, common, level2) => {
    return utils.getAdvancedFootprintError(
      literal,
      {
        ...common,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
      }
    );
  };

  const DELETED_RECIPIENT = utils.getAnalyticFeatureFlag(
    FEATURE_FLAG.GLOBAL,
    getAdvancedFootprintFunction('', COMMON, LITERALS.commons.removeBeneficiary)
  );

  const OTP_FOOTPRINT =  utils.getAnalyticFeatureFlag(FEATURE_FLAG.GLOBAL,
    getAdvancedFootprintFunction('', COMMON, LITERALS.commons.otp)
  );

  const INTERNAL_RECIPIENT_DELETED_LINK = utils.getAnalyticFeatureFlag(
    FEATURE_FLAG.DELETE_RECIPIENTS_INTERNAL_LINK_PRINT,
    utils.getInternalLinkWithLevel2(
      LITERALS.commons.removeBeneficiary,
      LITERALS.commons.removeBeneficiary,
      {
        ...COMMON
      }
    )
  );
  const OPERATION_NOT_AVAILABLE = utils.getAnalyticFeatureFlag(
    FEATURE_FLAG.ERROR_OPERATION_NOT_AVAILABLE,
    getAdvancedFootprintFunction(LITERALS.errors.operationNotAvailable, COMMON, LITERALS.errors.operationNotAvailable)
  );

  const ERROR_BLACK_LIST = utils.getAnalyticFeatureFlag(
    FEATURE_FLAG.ERROR_BLACK_LIST_PAGE,
    getAdvancedFootprintFunction(LITERALS.errors.errorToRegistryRecipient, COMMON, LITERALS.errors.errorToRegistryRecipient)
  );

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    appStep,
    APP_COMPLETED,
    DELETED_RECIPIENT,
    OTP_FOOTPRINT,
    INTERNAL_RECIPIENT_DELETED_LINK,
    OPERATION_NOT_AVAILABLE,
    ERROR_BLACK_LIST
  };
};