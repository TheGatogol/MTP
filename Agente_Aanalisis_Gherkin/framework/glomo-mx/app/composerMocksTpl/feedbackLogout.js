'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');

  const base = require('./feedback')(CONFIG, 'feedbackLogout', 'feedback-logout');
  const get = utils.get(base);
  const iframeManager = get('glomo-opinator-iframe-manager-mx');

  iframeManager.properties.isContextualNPS = true;

  return base;
};