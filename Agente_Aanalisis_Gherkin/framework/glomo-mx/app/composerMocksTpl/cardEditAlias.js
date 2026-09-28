'use strict';

module.exports = CONFIG => {
  const product = 'card';
  const productName = 'card';
  const base = require('./product/_edit-alias-template')(product, productName)(CONFIG);
  const { connectionsIn, connectionsOut, setProperty } = require('./common/helpers/_utils');
  const { globalServices: { versions: { cards, usersManagementV1 } } } = CONFIG;
  const _setProperty = setProperty(base);
  const _connectionsIn = connectionsIn(base);
  const _connectionsOut = connectionsOut(base);
  _connectionsIn('bbva-feature-edit-alias-card').card_edit_alias_init_page = { bind: 'initialize' };
  _setProperty('bbva-feature-edit-alias-card').apiVersion = cards;
  _setProperty('bbva-feature-edit-alias-card').apiVersionPatchAlias = usersManagementV1;
  _setProperty('bbva-feature-edit-alias-card').apiVersionPostTranslatorUuids = usersManagementV1;
  _setProperty('bbva-feature-edit-alias-card').totalAttempts = 2;
  _connectionsOut('bbva-feature-edit-alias-card')['edit-alias-success'] = {
    bind: 'global_card_edit_alias_success'
  };
  return base;
};
