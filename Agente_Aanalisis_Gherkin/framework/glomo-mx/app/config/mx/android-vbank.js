const _platform = require('../_android.js');
const _routes = require('./base/_native-routes.js');
const _common = require('./base/_common.js');
const _env = require('./base/_virtual_vbank.js');

const config = { ..._common, ..._routes, ..._env, ..._platform };

// Remove this when Web supports self-signed certificates on webview
config.globalServices.host = 'https://localhost:9000/SRVS_A02';
config.globalServices.tenantGlobalConfig.host = 'https://localhost:9002';
config.globalServices.hostGrantingTicket = 'https://localhost:9000/QSRV_A02';
config.globalServices.hostExternal = 'https://localhost:9000/SRES_A02';
config.settingsHost = 'https://localhost:9001';
config.globalServices.publicSettingsHost = 'https://localhost:9085';
config.genesysHost = 'https://localhost:9877';

module.exports = config;
