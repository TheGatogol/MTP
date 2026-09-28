'use strict';

const qaConfig = require('./_dev.js');

qaConfig.globalServices.host = 'https://localhost:8101';

module.exports = qaConfig;
