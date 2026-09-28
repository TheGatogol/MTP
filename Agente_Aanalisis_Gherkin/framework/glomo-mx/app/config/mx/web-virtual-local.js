const _platform = require('../_web.js');
const _routes = require('./base/_web-routes.js');
const _common = require('./base/_common.js');
const _env = require('./base/_virtual-local.js');

const config = { ..._common, ..._routes, ..._env, ..._platform };

config.sessionTimeout.foreground = 999;
config.sessionTimeout.background = 999;

module.exports = config;
