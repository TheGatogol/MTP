'use strict';

module.exports = CONFIG => {
  const product = 'loan';
  const productName = 'loan-and-mortgage';
  const base = require('./product/_edit-alias-template')(product, productName)(CONFIG);
  const {connectionsIn, connectionsOut, setProperty} = require('./common/helpers/_utils');
  const { globalServices: { versions: { loansEditAlias } } } = CONFIG;

  const connectionsInLoan = connectionsIn(base);
  const connectionsOutLoan = connectionsOut(base);
  const setPropertyLoan = setProperty(base);

  const analytic = require('./analytics/_loanDetail')();

  connectionsInLoan('bbva-feature-edit-alias-' + productName).navigation_product_detail_to_edit_alias = {
    bind: 'originalAlias'
  };

  connectionsOutLoan('bbva-feature-edit-alias-' + productName).global_loan_edit_alias_success = {
    bind: 'bbva-feature-edit-alias-' + productName + '-success-event'
  };

  connectionsOutLoan('cells-handle-life-cycle').loan_edit_alias_init_page = {
    bind: 'init-page',
    analytics: analytic.APP_PAGE_VIEW_LOAN_DETAIL_EDIT_ALIAS
  };

  setPropertyLoan('bbva-feature-edit-alias-' + productName).apiVersion = loansEditAlias;

  return base;
};