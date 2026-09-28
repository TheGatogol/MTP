const {
  nativeSettingsPlugin
} = require('./_mobile');
const {
  bbvaNativeconnectorThirdPartyWallet
} = require('./_thirdPartyWallet.js');
const {
  mobilePaymentPlugin,
  trustDevicePlugin,
  addMobilePaymentPluginConnections,
  addTrustDevicePluginConnections,
  createPluginConnections,
  addPluginConnections
} = require('./_payments');
const {
  bbvaNativeConnectorDeviceInfo
} = require('./_deviceInfo.js');
module.exports = {
  mobilePaymentPlugin,
  addMobilePaymentPluginConnections,
  addTrustDevicePluginConnections,
  trustDevicePlugin,
  createPluginConnections,
  addPluginConnections,
  nativeSettingsPlugin,
  bbvaNativeConnectorDeviceInfo,
  bbvaNativeconnectorThirdPartyWallet
};