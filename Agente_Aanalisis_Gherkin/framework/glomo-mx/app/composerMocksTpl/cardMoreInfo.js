'use strict';

module.exports = CONFIG => {
  const base = require('./product/_product-more-info')('card')(CONFIG);
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const connectionsParams = utils.connectionsParams(base);
  const setProperty = utils.setProperty(base);
  const COUNTRY = utils.getCountry();
  const CARD_SUMMARY = `glomo-card-summary-dm-${COUNTRY}`;
  const message = 'cells-product-more-info-certificate-number-copy';

  const cardSummaryConnections = {
    in: connectionsIn(CARD_SUMMARY),
    out: connectionsOut(CARD_SUMMARY),
    params: connectionsParams(CARD_SUMMARY)
  };

  cardSummaryConnections.params.card = 'card';
  setProperty(CARD_SUMMARY).locale = utils.getLocalCurrency();
  cardSummaryConnections.in.global_dashboard_raw_accounts = {
    bind: 'accounts'
  };
  cardSummaryConnections.in.global_dashboard_raw_cards = {
    bind: 'cards'
  };

  setProperty('cells-product-more-info').skeletonItems = 5;
  setProperty('cells-product-more-info').dataHidden = false;
  setProperty('cells-bottom-modal-message').fullHeight = false;

  connectionsIn('cells-product-more-info').navigation_to_more_info = {
    bind: 'setProperties'
  };
  connectionsIn('cells-bottom-modal-message').card_more_info_item_message = {
    bind: message
  };

  addCommonErrors(base.components)();

  return base;
};
