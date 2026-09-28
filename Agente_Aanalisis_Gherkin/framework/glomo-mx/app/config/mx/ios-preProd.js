const _platform = require('../_ios.js');
const _routes = require('./base/_native-routes.js');
const _common = require('./base/_common.js');
const _env = require('./base/_preProd.js');

const config = { ..._common, ..._routes, ..._env, ..._platform };

module.exports = config;