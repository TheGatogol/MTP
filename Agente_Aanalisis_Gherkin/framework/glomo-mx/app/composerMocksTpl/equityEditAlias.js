'use strict';

module.exports = CONFIG => {
  const product = 'equity';
  const productName = 'equity-contracts-mx';
  const editAliasBase = require('./product/_edit-alias-template.js')(product, productName)(CONFIG);
  const { connectionsIn, connectionsOut, setProperty } = require('./common/helpers/_utils');
  const { globalServices: { versions: { accounts } } } = CONFIG;

  const connectionsInEquity = connectionsIn(editAliasBase);
  const connectionsOutEquity = connectionsOut(editAliasBase);
  const setPropertyEquity = setProperty(editAliasBase);

  const analitycs = require('./analytics/_productEditAlias')(product)(CONFIG, 'edit alias');

  connectionsInEquity('bbva-feature-edit-alias-' + productName).navigation_product_detail_to_edit_alias = {
    bind: 'originalAlias'
  };

  connectionsInEquity('bbva-feature-edit-alias-' + productName).global_financial_overview_details = {
    bind: 'financialOverview'
  };

  connectionsOutEquity('bbva-feature-edit-alias-' + productName).global_edit_alias_success_toast = {
    bind: 'bbva-feature-edit-alias-' + productName + '-toast-message'
  };

  connectionsOutEquity('cells-handle-life-cycle').equity_edit_alias_init_page = {
    bind: 'init-page',
    analytics: analitycs.EQUITY_CONTRACTS_APP_HUELLA_EDIT_ALIAS
  };

  setPropertyEquity('bbva-feature-edit-alias-' + productName).apiVersion = accounts;

  return editAliasBase;
};