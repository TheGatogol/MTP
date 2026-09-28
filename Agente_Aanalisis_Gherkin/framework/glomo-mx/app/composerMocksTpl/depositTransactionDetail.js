'use strict';

module.exports = CONFIG => {
  const base = require('./product/_product-transaction-detail')('deposit')(CONFIG);
  const utils = require('./common/helpers/_utils');
  const setProperty = utils.setProperty(base);
  const connectionsIn = utils.connectionsIn(base);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'depositTransactionDetail');
  const isSpherica = sphericaPageUtils.isSpherica();

  const DEPOSIT_IMPOSITION_UPDATE_ANALYTICS = require('./analytics/_depositConfiguration')(CONFIG);

  connectionsIn('glomo-transactions-dm-mx').deposit_sale_enabled = {
    bind: 'parseDepositWithdrawalsEnabled'
  };
  connectionsIn('glomo-transactions-dm-mx').global_imposition_update_success = {
    bind: 'initReset'
  };
  setProperty(isSpherica ? 'cells-molecule-header-spherica' : 'cells-molecule-header').titleName = 'cells-transaction-detail-deposit-header-title';
  setProperty(isSpherica ? 'cells-transaction-detail-spherica' : 'cells-transaction-detail').shareTransaction = true;
  setProperty(isSpherica ? 'cells-transaction-detail-spherica' : 'cells-transaction-detail').images = '';
  setProperty('glomo-transactions-dm-mx').iconDepositsConfiguration = 'coronita:edit';
  setProperty('glomo-transactions-dm-mx').iconDespositsSale = 'coronita:sales';
  setProperty('glomo-transactions-dm-mx').includeModelSubheaders = true;
  setProperty(isSpherica ? 'cells-transaction-detail-spherica' : 'cells-transaction-detail').operationsListLayout = 'review';
  setProperty(isSpherica ? 'cells-transaction-detail-spherica' : 'cells-transaction-detail').showStatus = false;
  setProperty(isSpherica ? 'cells-transaction-detail-spherica' : 'cells-transaction-detail').className = 'transaction-title-emphasis align-items';
  setProperty('glomo-transactions-dm-mx').depositDetailDateFormat = 'D MMMM YYYY';
  setProperty('glomo-transactions-dm-mx').depositDetailReinvest = 'cells-transaction-detail-deposit-investment-reinvest-label';
  setProperty('glomo-transactions-dm-mx').depositDetailCreditAccount = 'cells-transaction-detail-deposit-investment-credit-in-account-label';
  setProperty('glomo-transactions-dm-mx').depositDetailOther = 'cells-transaction-detail-deposit-investment-other-label';
  setProperty('glomo-transactions-dm-mx').depositDetailDaysLabel = 'cells-transaction-detail-investment-deposit-days-label';

  const analyticsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-deposit-imposition-update-manager',
    familyPath: '@glomo-web-components/glomo-analytics-deposit-imposition-update-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          deposit_product_set_transaction_detail: {
            bind: 'persistStartData'
          },
          navigation_product_transaction_to_deposit_imposition_update: {
            bind: 'fireAppOnCLickStart'
          }
        },
        out: {
          analytics_deposit_app_on_click_start: {
            bind: 'analytics-deposit-imposition-update-click-start',
            analytics: DEPOSIT_IMPOSITION_UPDATE_ANALYTICS.APP_ON_CLICK_START_CHANGE_INSTRUCTION
          }
        }
      }
    }
  };

  base.components.push(analyticsDM);

  return base;
};
