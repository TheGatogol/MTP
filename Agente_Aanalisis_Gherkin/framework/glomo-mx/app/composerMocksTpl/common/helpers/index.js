'use strict';

const {
  QR_READER_SCREEN_CONFIG,
  qrPluginConfigs,
  toastSnackBarGeneralParamsSuccess,
  bbvaQrPluginConfigs
} = require('./_constants');

const {
  getPages
} = require('./_configGeneralUtils');


const {
  del,
  get,
  APP_SIDEBAR,
  SPINNER,
  createSpinner,
  SPINNERMAIN,
  createSpinnerMain,
  appFooter,
  capitalize,
  connectionsIn,
  connectionsOut,
  connectionsParams,
  createPrefixFromPageName,
  footerManager,
  getCountry,
  getLanguage,
  getLocalCurrency,
  getMenuSidebarSections,
  headerHeightMinimum,
  isPublicPage,
  kebabCase,
  kebabToCamel,
  pluginSecureSharing,
  setProperty,
  setTemplateProperty,
  useNames,
  merge
} = require('./_utils');

module.exports = {

  // constants
  QR_READER_SCREEN_CONFIG,
  toastSnackBarGeneralParamsSuccess,
  qrPluginConfigs,
  bbvaQrPluginConfigs,

  //generalUtils
  getPages,

  //utils
  APP_SIDEBAR,
  del,
  get,
  /**
   * @deprecated use `createSpinner' instead
   * @link https://eslint.org/docs/latest/rules/new-cap
  */
  SPINNER,
  createSpinner,
  /**
   * @deprecated use `createSpinnerMain' instead
   * @link https://eslint.org/docs/latest/rules/new-cap
  */
  SPINNERMAIN,
  createSpinnerMain,
  appFooter,
  capitalize,
  connectionsIn,
  connectionsOut,
  connectionsParams,
  createPrefixFromPageName,
  footerManager,
  getCountry,
  getLanguage,
  getLocalCurrency,
  getMenuSidebarSections,
  headerHeightMinimum,
  isPublicPage,
  kebabCase,
  kebabToCamel,
  merge,
  pluginSecureSharing,
  setProperty,
  setTemplateProperty,
  useNames
};
