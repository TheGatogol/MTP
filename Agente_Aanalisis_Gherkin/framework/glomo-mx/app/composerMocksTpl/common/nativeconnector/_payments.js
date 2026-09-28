const utils = require('./_utils');
const mobilePaymentPluginMethods = [
  'deleteDevice',
  'deleteDeviceLocal',
  'enableCard',
  'getCardStatus',
  'getFavoriteCard',
  'getTransactionHistory',
  'initializeMobilePayment',
  'isNfcPaymentApp',
  'setFavoriteCard',
  'setNfcPaymentApp',
  'paymentAuthenticated',
  'setCdcvmForLvt',
  'isCdcvmForLvt'
];
const trustDevicePluginMethods = [
  'isRegistered',
  'areKeysReady',
  'deleteDeviceLocal',
  'login',
  'preRegister',
  'setPushToken',
  'setRegistrationToken'
];
/**
 * Generate mobilePayment plugin
 *
 * @param {object} CONFIG
 * @returns
 */
const mobilePaymentPlugin = (CONFIG) => ({
  zone: 'app_main',
  tag: 'bbva-nativeconnector-payments-mobilepayment',
  familyPath: '@glomo-web-components/bbva-nativeconnector-payments-mobilepayment',
  type: 'CC',
  render: 'litElement',
  properties: {
    isNative: CONFIG.native || false,
    cellsConnections: {
      ...utils.createPluginConnections('mobilepayment', mobilePaymentPluginMethods)
    }
  }
});
/**
 * Inject mobilePayment binding channels to a component
 *
 * @param {Component} component
 * @param {object} exceptions
 * @param {boolean} isSpherica
 */
const addMobilePaymentPluginConnections = (component, exceptions = {}, isSpherica = false) => {
  return utils.addPluginConnections('mobilepayment', component, mobilePaymentPluginMethods, exceptions, isSpherica);
};
/**
 * Generate trustDevice plugin
 *
 * @param {object} CONFIG
 * @returns
 */
const trustDevicePlugin = (CONFIG) => ({
  zone: 'app_main',
  tag: 'bbva-nativeconnector-payments-trustdevice',
  familyPath: '@glomo-web-components/bbva-nativeconnector-payments-trustdevice',
  type: 'CC',
  render: 'litElement',
  properties: {
    isNative: CONFIG.native || false,
    pluginName: 'TrustDevicePlugin',
    cellsConnections: {
      ...utils.createPluginConnections('paymentsTrustdevice', trustDevicePluginMethods, true)
    }
  }
});
/**
 * Inject trustDevice binding channels to a component
 *
 * @param {Component} component
 * @param {object} exceptions
 * @param {boolean} isSpherica
 */
const addTrustDevicePluginConnections = (component, exceptions = {}, isSpherica = false) => {
  return utils.addPluginConnections('paymentsTrustdevice', component, trustDevicePluginMethods, exceptions, isSpherica);
};
module.exports = {
  mobilePaymentPlugin,
  addMobilePaymentPluginConnections,
  trustDevicePlugin,
  addTrustDevicePluginConnections
};
