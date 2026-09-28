const _platform = require('../_android.js');
const _routes = require('./base/_native-routes.js');
const _common = require('./base/_common.js');
const _env = require('./base/_prod.js');

const config = { ..._common, ..._routes, ..._env, ..._platform };

module.exports = config;