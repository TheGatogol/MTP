module.exports = (CONFIG) => {

  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const COMMON_APPLICATION = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.branchAppointment,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.applicationName.saveAppointment,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.applicationName.selfManagement,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.actions.online
  };

  const COMMON_PAGE_INFO = {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.applicationName.saveAppointment,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.loggedIn
  };

  const COMMON_PAGE_INFO_AND_APPLICATION = {
    ...COMMON_APPLICATION,
    ...COMMON_PAGE_INFO
  };

  const COMMON_BINDING = {
    [CONSTANTS.APPLICATION_PROCESS]: {
      bind: 'process'
    },
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };

  const ANALYTICS_FEATURE_FLAG_REQUEST_BRANCH_APPOINTMENT = {
    GLOBAL: {
      'key': 'glomo.analytics.branchAppointment',
      'defaultValue': true
    },
    SAVE_APPOINTMENT: {
      'key': 'glomo.analytics.branchAppointment.saveAppointment',
      'defaultValue': true
    },
    ACTIVE_TURN: {
      'key': 'glomo.analytics.branchAppointment.activeTurn',
      'defaultValue': true
    },
    LINK: {
      'key': 'glomo.analytics.branchAppointment.link',
      'defaultValue': true
    }
  };

  const getPageInfoLevel2 = (level2) => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
  });

  const APP_ON_CLICK_START = UTILS.getOnClickStart(LITERALS.applicationName.saveAppointment, LITERALS.commons.information, {
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.noLogado,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.locator,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.general,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  },
  COMMON_APPLICATION
  );

  const APP_PAGE_VISIT = UTILS.getPageVisit(
    LITERALS.empty,
    {
      ...getPageInfoLevel2('1 tipo de tramite'),
      [CONSTANTS.APPLICATION_STEP]: '1 tipo de tramite'
    },
    COMMON_PAGE_INFO_AND_APPLICATION
  );

  const APP_STARTED = UTILS.getDynamicAppStarted(
    LITERALS.empty,
    getPageInfoLevel2('1 tipo de tramite'),
    COMMON_PAGE_INFO_AND_APPLICATION
  );

  const commonStepInfo = (text) => ({
    ...getPageInfoLevel2(text),
    [CONSTANTS.APPLICATION_STEP]: text
  });

  const generateAppStep = (step, textStep, ...data) => UTILS.getAppStep(step, commonStepInfo(textStep), ...data);

  const APP_STEP_TWO = generateAppStep('2', '2 horario', {[CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'typology'}}, COMMON_PAGE_INFO_AND_APPLICATION);

  const APP_STEP_THREE = generateAppStep('3', '3 confirmacion', COMMON_PAGE_INFO_AND_APPLICATION, COMMON_BINDING);

  const APP_COMPLETED = UTILS.getAppCompleted(
    LITERALS.empty,
    LITERALS.commons.ended,
    {
      ...getPageInfoLevel2(LITERALS.commons.successfulPage),
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage
    },
    COMMON_PAGE_INFO_AND_APPLICATION,
    COMMON_BINDING
  );

  const FOOTPRINT_INFO = UTILS.getAdvancedFootprintWithLevel3(
    LITERALS.commons.information,
    getPageInfoLevel2('1 tipo de tramite'),
    COMMON_PAGE_INFO
  );

  const DOWNLOAD_LINK = UTILS.getDownloadLinkWithLevel2('comprobante turno', LITERALS.commons.successfulPage, COMMON_PAGE_INFO);

  const generateFootPrint = (text, typeError = false) => {
    const analytic = typeError ?
      UTILS.getAdvancedFootprintError(text, getPageInfoLevel2(text), COMMON_PAGE_INFO) :
      UTILS.getAdvancedFootprintWithLevel2(text, COMMON_PAGE_INFO);
    if (!typeError) {
      UTILS.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG_REQUEST_BRANCH_APPOINTMENT.GLOBAL);
    }
    return analytic;
  };

  [
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_TWO,
    APP_STEP_THREE,
    APP_COMPLETED,
    FOOTPRINT_INFO
  ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_REQUEST_BRANCH_APPOINTMENT.GLOBAL));

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_TWO,
    APP_STEP_THREE,
    APP_COMPLETED,
    FOOTPRINT_INFO,
    DOWNLOAD_LINK,
    ANALYTICS_FEATURE_FLAG_REQUEST_BRANCH_APPOINTMENT,
    generateFootPrint
  };

};
