'use strict';

module.exports = CONFIG => {
  const product = 'invest';
  const editAliasBase = require('./product/_product-edit-alias')(product)(CONFIG);
  const { connectionsIn, connectionsOut } = require('./common/helpers/_utils');

  connectionsIn(editAliasBase)('glomo-edit-alias-dm').INVEST_ADVISORY_ALIAS_PRODUCT = {
    bind: 'setProductAlias'
  };
  connectionsOut(editAliasBase)('glomo-edit-alias-dm').INVEST_ADVISORY_PRODUCT_SUCCESS = {
    bind: 'success-service',
    link: {
      cleanUntil: 'investAdvisoryProductDetail',
      page: 'investAdvisoryProductDetail'
    }
  };
  connectionsOut(editAliasBase)('glomo-edit-alias-dm').dashboard_pull_to_refresh_start = {
    bind: 'send-product-with-new-alias'
  };
  connectionsOut(editAliasBase)('cells-molecule-header').invest_navigation_edit_alias_back_request = {
    bind: 'click-left-button',
    backStep: true
  };
  connectionsOut(editAliasBase)('glomo-edit-alias').INVEST_ADVISORY_back_step_navigation = {
    bind: 'edit-alias-prepare-back-navigation'
  };

  return editAliasBase;
};
