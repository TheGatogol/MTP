'use strict';

module.exports = CONFIG => {
  const product = 'fund';
  const productName = 'fund';
  const editAliasBase = require('./product/_edit-alias-template.js')(product, productName)(CONFIG);
  const { connectionsIn, connectionsOut, setProperty } = require('./common/helpers/_utils');
  const { globalServices: { versions: { investmentFundsEditAlias, usersManagementV1 } } } = CONFIG;

  const connectionsInFund = connectionsIn(editAliasBase);
  const connectionsOutFund = connectionsOut(editAliasBase);
  const setPropertyFund = setProperty(editAliasBase);
  const analitycs = require('./analytics/_productEditAlias')(product)(CONFIG, 'edit alias');

  connectionsInFund('bbva-feature-edit-alias-fund').FUND_EDIT_ALIAS_PRODUCT = {
    bind: 'originalAlias'
  };

  connectionsOutFund('bbva-feature-edit-alias-fund').global_fund_edit_alias_success = {
    bind: 'bbva-feature-edit-alias-' + product + '-success-event',
    link: {
      page: 'dashboard'
    }
  };

  connectionsOutFund('bbva-feature-edit-alias-fund').global_edit_alias_success_toast = {
    bind: 'bbva-feature-edit-alias-' + product + '-toast-message'
  };

  setPropertyFund('bbva-feature-edit-alias-fund').apiVersion = investmentFundsEditAlias;
  setPropertyFund('bbva-feature-edit-alias-' + product).apiVersionPatchAlias = usersManagementV1;
  setPropertyFund('bbva-feature-edit-alias-' + product).apiVersionPostTranslatorUuids = usersManagementV1;

  connectionsOutFund('cells-handle-life-cycle').fund_edit_alias_init_page = {
    bind: 'init-page',
    analytics: analitycs.APP_HUELLA_EDIT_ALIAS
  };

  return editAliasBase;
};