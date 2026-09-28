module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const utils = require('./common/_utils');
  const analyticsFeatureFlagCreditBureauAuthzHistory = 'creditBureauAuthzHistory';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.bureauAuthorization,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonApplication = {
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.bureauAuthorization,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.bureauCreditAuthorization,
    [constants.APPLICATION_TYPOLOGY]: literals.commons.bindingPayrollProcess
  };
  const appPageVisit = utils.getPageVisit(
    '1 ' + literals.operative.request,
    common,
    commonApplication
  );
  const _getAppStarted = (elementClicked = '') => {
    let obj = {
      ...common,
      ...commonApplication,
      [constants.APPLICATION_STEP]: elementClicked
    };
    return utils.getAppStartedWithLevel2('1 ' + literals.operative.request, obj);
  };
  const appStep2 = utils.getAppStep(
    '2', {
      ...common,
      ...commonApplication,
      [constants.APPLICATION_STEP]: '2 ' + literals.commons.otp,
      [constants.PAGE_PAGEINFO_LEVEL2]: '2 ' + literals.commons.otp
    }
  );
  const huellaAvanzadaAuthorization = utils.getAdvancedFootprintWithLevel2(
    literals.commons.viewAuthorization, common
  );
  const huellaAvanzadaError = utils.getAdvancedFootprintError(
    literals.types.error + ' ' + literals.commons.otp, {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.types.error + ' ' + literals.commons.otp
    }
  );
  const appCompleted = utils.getAppCompletedRaw(
    {
      ...common,
      ...commonApplication,
      [constants.APPLICATION_STATE]: literals.commons.ended,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage
    }
  );
  [
    appPageVisit,
    _getAppStarted,
    appStep2,
    huellaAvanzadaAuthorization,
    appCompleted
  ].forEach(analytic => utils.getAnalyticFeatureFlag(analyticsFeatureFlagCreditBureauAuthzHistory, analytic));
  utils.getAnalyticFeatureFlagError(analyticsFeatureFlagCreditBureauAuthzHistory, huellaAvanzadaError);
  return {
    appPageVisit,
    _getAppStarted,
    appStep2,
    huellaAvanzadaAuthorization,
    huellaAvanzadaError,
    appCompleted
  };
};