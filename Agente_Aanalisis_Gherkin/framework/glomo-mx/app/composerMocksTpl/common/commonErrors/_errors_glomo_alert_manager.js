const utils = require('../helpers/_utils');

const glomoAlertManager = (CONFIG, isSpherica) => {
  const tag = isSpherica ? 'glomo-alert-manager-spherica' : 'glomo-alert-manager';
  const glomoAlertManagerConfig = {
    zone: 'app__transactional',
    type: 'CC',
    tag,
    properties: {
      language: utils.getLanguage(CONFIG),
      localCurrency: utils.getLocalCurrency(CONFIG),
      native: !!CONFIG.nativeShell,
      className: (CONFIG.nativeIos || false) ? 'ios-top-padding' : '',
      iOSFixedHeader: true,
      cellsConnections: {
        in: {
          GLOBAL_CONFIRM_LOGOUT_MESSAGE: {
            bind: 'openWithSettings'
          }
        },
        out: {}
      }
    }
  };
  if (isSpherica) {
    glomoAlertManagerConfig.properties.cellsConnections.in.global_alert_manager_open_with_settings_spherica =  { bind: 'openWithSettings' };
  } else {
    glomoAlertManagerConfig.properties.cellsConnections.in.global_alert_manager_open_with_settings =  { bind: 'openWithSettings' };
  }

  return glomoAlertManagerConfig;
};

module.exports = {
  glomoAlertManager
};
