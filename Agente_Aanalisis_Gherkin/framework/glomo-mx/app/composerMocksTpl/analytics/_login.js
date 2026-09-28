/* eslint-disable max-statements */
'use strict';

module.exports = () => {
  const constants = require('./common/_constants');
  const analyticsUtils = require('./common/_utils');
  const literals = require('./common/_literals');

  const analyticsFeatureFlagLoginPageView = {
    key: 'glomo.analytics.login.pageView',
    defaultValue: true
  };

  const analyticsFeatureFlagLoginSuccess = {
    key: 'glomo.analytics.login.success',
    defaultValue: true
  };

  const loginCommon = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.login,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const notLoggedCommon = {
    ...loginCommon,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
    [constants.USER_USERSTATE]: literals.commons.noLogado
  };

  const analyticsFeatureFlagLoginCredentialsError = {
    key: 'glomo.analytics.credentialsError',
    defaultValue: true
  };
  const errorLoginIncorrectData = {
    ...notLoggedCommon,
    [constants.APPLICATION_ERROR_TYPE]: literals.errors.incorrectData
  };
  const linkErrorLoginIncorrectData = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.errors.loginError, errorLoginIncorrectData);
  analyticsUtils.addFeatureFlag(linkErrorLoginIncorrectData, analyticsFeatureFlagLoginCredentialsError);

  const errorLoginIncorrectPassword = {
    ...notLoggedCommon,
    [constants.APPLICATION_ERROR_TYPE]: literals.errors.incorrectPassword
  };

  const analyticsFeatureFlagBlockedPasswordUnsuccessfulLogin = {
    key: 'glomo.analytics.blockedPassword.unsuccessfulLogin',
    defaultValue: true
  };
  const errorLoginBlockedPassword = {
    ...notLoggedCommon,
    [constants.APPLICATION_ERROR_TYPE]: literals.errors.blockedPassword
  };
  const linkErrorLoginBlockedPassword = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.errors.loginError, errorLoginBlockedPassword);
  analyticsUtils.addFeatureFlag(linkErrorLoginBlockedPassword, analyticsFeatureFlagBlockedPasswordUnsuccessfulLogin);

  const analyticsFeatureFlagBlockedPasswordPageView = {
    key: 'glomo.analytics.blockedPassword.pageView',
    defaultValue: true
  };
  const pageViewErrorLoginBlockedPassword = analyticsUtils.getAdvancedFootprintWithLevel2(literals.errors.blockedPassword, notLoggedCommon);
  analyticsUtils.addFeatureFlag(pageViewErrorLoginBlockedPassword, analyticsFeatureFlagBlockedPasswordPageView);

  const analyticsFeatureFlagBlockedPasswordUnlock = {
    key: 'glomo.analytics.blockedPassword.unlock',
    defaultValue: true
  };
  const errorLoginUnblockedPasswordPressed = {
    ...notLoggedCommon,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.errors.blockedPassword,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.errors.accessKeyRecovery,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_APPLICATION_NAME]: literals.errors.forgottenPassword,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const clickErrorLoginUnblockedPasswordPressed = analyticsUtils.getOnClickStart(literals.errors.unlock, literals.commons.information, errorLoginUnblockedPasswordPressed);
  analyticsUtils.addFeatureFlag(clickErrorLoginUnblockedPasswordPressed, analyticsFeatureFlagBlockedPasswordUnlock);

  const analyticsFeatureFlagLoginBiometryError = {
    key: 'glomo.analytics.loginBiometryError',
    defaultValue: true
  };
  const errorLoginBiometry = {
    ...notLoggedCommon,
    [constants.APPLICATION_ERROR_TYPE]: literals.errors.biometryError
  };
  const linkErrorLoginBiometry = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.errors.loginError, errorLoginBiometry);
  analyticsUtils.addFeatureFlag(linkErrorLoginBiometry, analyticsFeatureFlagLoginBiometryError);

  const analyticsFeatureFlagLoginBiometryRetriesError = {
    key: 'glomo.analytics.loginBiometryRetriesError',
    defaultValue: true
  };
  const pageViewErrorLoginBiometryRetry = analyticsUtils.getAdvancedFootprintWithLevel2(literals.errors.errorSystem, notLoggedCommon);
  analyticsUtils.addFeatureFlag(pageViewErrorLoginBiometryRetry, analyticsFeatureFlagLoginBiometryRetriesError);

  const analyticsFeatureFlagLoginBiometryDeleted = {
    key: 'glomo.analytics.loginBiometryDeleted',
    defaultValue: true
  };
  const errorLoginBiometryNotConfigured = {
    ...notLoggedCommon,
    [constants.APPLICATION_ERROR_TYPE]: literals.errors.biometryNotConfigured
  };
  const linkErrorLoginBiometryNotConfigured = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.errors.loginError, errorLoginBiometryNotConfigured);
  analyticsUtils.addFeatureFlag(linkErrorLoginBiometryNotConfigured, analyticsFeatureFlagLoginBiometryDeleted);

  const analyticsFeatureFlagLoginRandomError = {
    key: 'glomo.analytics.randomError.unsuccessfulLogin',
    defaultValue: true
  };
  const errorLoginRandom = {
    ...notLoggedCommon,
    [constants.APPLICATION_ERROR_TYPE]: literals.errors.appLoginError
  };
  const linkErrorLoginRandom = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.errors.loginError, errorLoginRandom);
  analyticsUtils.addFeatureFlag(linkErrorLoginRandom, analyticsFeatureFlagLoginRandomError);

  const analyticsFeatureFlagLoginRandomErrorPageView = {
    key: 'glomo.analytics.randomError.pageView',
    defaultValue: true
  };
  const pageViewErrorLoginRandom = analyticsUtils.getAdvancedFootprintWithLevel2(literals.errors.appLoginError, notLoggedCommon);
  analyticsUtils.addFeatureFlag(pageViewErrorLoginRandom, analyticsFeatureFlagLoginRandomErrorPageView);

  const analyticsFeatureFlagNeedsRegisterUnsuccessfulLogin = {
    key: 'glomo.analytics.needsRegister.unsuccessfulLogin',
    defaultValue: true
  };
  const errorLoginNeedsRegister = {
    ...notLoggedCommon,
    [constants.APPLICATION_ERROR_TYPE]: literals.errors.newRegisterForSecurity
  };
  const linkErrorNeedsRegister = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.errors.loginError, errorLoginNeedsRegister);
  analyticsUtils.addFeatureFlag(linkErrorNeedsRegister, analyticsFeatureFlagNeedsRegisterUnsuccessfulLogin);

  const analyticsFeatureFlagNeedsRegisterPageView = {
    key: 'glomo.analytics.needsRegister.pageView',
    defaultValue: true
  };
  const pageViewErrorNeedsRegister = analyticsUtils.getAdvancedFootprintWithLevel2(literals.errors.newRegisterForSecurity, notLoggedCommon);
  analyticsUtils.addFeatureFlag(pageViewErrorNeedsRegister, analyticsFeatureFlagNeedsRegisterPageView);

  const analyticsFeatureFlagNeedsRegisterUnlock = {
    key: 'glomo.analytics.needsRegister.unlock',
    defaultValue: true
  };
  const errorLoginInitRegisterPressed = {
    ...notLoggedCommon,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.errors.newRegisterForSecurity,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.digitalActivation,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.clientActivation,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.mobileTokenRegistration,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const clickErrorLoginInitRegisterPressed = analyticsUtils.getOnClickStart(literals.errors.unlock, literals.commons.information, errorLoginInitRegisterPressed);
  analyticsUtils.addFeatureFlag(clickErrorLoginInitRegisterPressed, analyticsFeatureFlagNeedsRegisterUnlock);

  const analyticsFeatureFlagLoginBiometryChanged = {
    key: 'glomo.analytics.loginBiometryChanged',
    defaultValue: true
  };
  const errorLoginConfigurationChanged = {
    ...notLoggedCommon,
    [constants.APPLICATION_ERROR_TYPE]: literals.errors.configurationChanged
  };
  const linkErrorConfigurationChanged = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.errors.loginError, errorLoginConfigurationChanged);
  analyticsUtils.addFeatureFlag(linkErrorConfigurationChanged, analyticsFeatureFlagLoginBiometryChanged);

  const pageViewLogin = analyticsUtils.getAdvancedFootprint({
    ...notLoggedCommon,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.home
  });
  analyticsUtils.addFeatureFlag(pageViewLogin, analyticsFeatureFlagLoginPageView);

  const linkLoginSuccess = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.commons.login, {
    ...notLoggedCommon,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.home,
    [constants.USER_GENDER]: literals.commons.empty
  });
  analyticsUtils.addFeatureFlag(linkLoginSuccess, analyticsFeatureFlagLoginSuccess);

  const linkErrorLoginIncorrectPassword = analyticsUtils.getAdvancedFootprintData(literals.types.link, literals.errors.loginError, errorLoginIncorrectPassword);

  return {
    pageViewLogin,
    linkLoginSuccess,
    linkErrorLoginIncorrectData,
    linkErrorLoginIncorrectPassword,
    linkErrorLoginBlockedPassword,
    pageViewErrorLoginBlockedPassword,
    clickErrorLoginUnblockedPasswordPressed,
    linkErrorLoginBiometry,
    pageViewErrorLoginBiometryRetry,
    linkErrorLoginBiometryNotConfigured,
    linkErrorLoginRandom,
    pageViewErrorLoginRandom,
    linkErrorNeedsRegister,
    pageViewErrorNeedsRegister,
    clickErrorLoginInitRegisterPressed,
    linkErrorConfigurationChanged
  };
};