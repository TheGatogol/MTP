'use strict';

module.exports = CONFIG => {

  const product = 'account';
  const productName = 'account';
  const base = require('./product/_edit-alias-template')(product, productName)(CONFIG);
  const {setProperty, connectionsOut} = require('./common/helpers/_utils');
  const connectionsOutAccount = connectionsOut(base);
  const analytics = require('./analytics/_productEditAlias')(product)(CONFIG, 'edit alias');
  const { globalServices: { versions: { accounts, usersManagementV1 } } } = CONFIG;
  const setPropertyAccount = setProperty(base);
  setPropertyAccount('bbva-feature-edit-alias-' + product).apiVersion = accounts;
  setPropertyAccount('bbva-feature-edit-alias-' + product).apiVersionPatchAlias = usersManagementV1;
  setPropertyAccount('bbva-feature-edit-alias-' + product).apiVersionPostTranslatorUuids = usersManagementV1;
  setPropertyAccount('bbva-feature-edit-alias-' + product).totalAttempts = 2;
  connectionsOutAccount('cells-handle-life-cycle').account_edit_alias_init_page = {
    bind: 'init-page',
    analytics: analytics.APP_HUELLA_EDIT_ALIAS
  };

  return base;
};