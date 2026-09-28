const _platform = require('../_web.js');
const _routes = require('./base/_web-routes.js');
const _common = require('./base/_common.js');
const _env = require('./base/_dev.js');

const config = { ..._common, ..._routes, ..._env, ..._platform };

config.login.showSecondaryId = true;

module.exports = config;
