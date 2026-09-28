const nativeSettingsPlugin = {
  zone: 'app__main',
  type: 'CC',
  tag: 'cells-mobile-nativesettings',
  properties: {
    cellsConnections: {
      in: {
        global_nativesettings_open_setting: {
          bind: 'openSetting'
        }
      }
    }
  }
};
module.exports = {
  nativeSettingsPlugin
};
