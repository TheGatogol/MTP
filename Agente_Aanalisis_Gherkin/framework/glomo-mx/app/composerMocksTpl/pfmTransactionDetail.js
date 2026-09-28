'use strict';

module.exports = CONFIG => {
  const base = require('./product/_product-transaction-detail')('pfm')(CONFIG);
  const { connectionsIn, setProperty } = require('./common/helpers/_utils');
  const connectionsInFn = connectionsIn(base);
  const setPropertyFn = setProperty(base);
  const ANALYTICS = require('./analytics/_pfm')(CONFIG);
  setPropertyFn('cells-transaction-detail').shareTransaction = false;
  setPropertyFn('cells-transaction-detail').className = 'transactionDetail';
  setPropertyFn('cells-transaction-detail').recategorizeTransaction = false;
  setPropertyFn('cells-transaction-detail').operationsListIndicatorsClass = 'bg--white fund-contracted-detail';
  connectionsInFn('cells-transaction-detail').global_pfm_set_transaction_detail = { bind: 'mainTransaction' };


  const analyticsManager = {
    zone: 'app__main',
    tag: 'glomo-analytics-pfm-manager',
    familyPath: '@glomo-web-components/glomo-analytics-pfm-manager',
    render: 'litElement',
    type: 'DM',
    properties: {
      appStartedText: '',
      cellsConnections: {
        in: {
          pfm_product_transaction_detail_init_page: {
            bind: 'firePageView'
          }
        },
        out: {
          ch_pfm_movement_detail_analytics_page_view: {
            bind: 'analytics-page-view',
            analytics: ANALYTICS.PFM_MOVEMENTS_DETAIL_PAGE_VIEW
          }
        }
      }
    }
  };

  base.components.push(analyticsManager);

  return base;
};