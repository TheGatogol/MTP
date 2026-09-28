const _platform = require('../_android.js');
const _routes = require('./base/_native-routes.js');
const _common = require('./base/_common.js');
const _env = require('./base/_virtual.js');

_platform.initialBundle = [ 'dashboard.json' ];

const config = { ..._common, ..._routes, ..._env, ..._platform };

module.exports = config;