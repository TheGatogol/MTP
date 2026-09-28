'use strict';

module.exports = CONFIG => {
  const PRODUCT = 'loan';
  const utils = require('./common/helpers/_utils');
  const base = require('./product/_product-more-info')(PRODUCT)(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PRODUCT);
  const COUNTRY = utils.getCountry(CONFIG);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const setProperty = utils.setProperty(base);
  const tagSummaryDM = 'glomo-loan-summary-dm-' + COUNTRY;

  setProperty('cells-molecule-header').titleName = 'cells-product-summary-loan-detail';
  setProperty('cells-bottom-modal-message').icon = 'coronita:correct';
  setProperty('cells-bottom-modal-message').iconSize = 24;
  setProperty('cells-bottom-modal-message').className = 'standar-padding';
  setProperty('cells-bottom-modal-message').fullHeight = false;
  setProperty('cells-bottom-modal-message').expand = true;
  setProperty('cells-product-more-info').dataHidden = false;
  setProperty('cells-product-more-info').hideNotShareButton = false;
  setProperty('cells-product-more-info').dateFormat = 'DD MMMM YYYY';
  setProperty('cells-product-more-info').buttonText = 'cells-product-more-info-copy-label';
  setProperty('cells-product-more-info').className = 'full-section-division';

  connectionsIn('cells-clipboard-manager').loan_more_info_clipboard_channel = {
    bind: 'text'
  };

  connectionsIn('cells-product-detail-manager').navigation_loan_product_more_info_back_request = {
    bind: 'reset'
  };

  connectionsIn(tagSummaryDM).loan_more_info_set = {
    bind: 'moreInfo'
  };
  connectionsIn(tagSummaryDM).set_related_contracts = {
    bind: 'relatedContracts'
  };
  connectionsIn(tagSummaryDM).set_commissions = {
    bind: 'commissions'
  };
  connectionsIn(tagSummaryDM).loan_more_info_help_click = {
    bind: 'setHelpModalConfig'
  };
  if (sphericaPageUtils.isSpherica()) {
    connectionsOut(tagSummaryDM).global_alert_manager_open_with_settings_spherica = {
      bind: 'open-modal'
    };
  } else {
    connectionsOut(tagSummaryDM).global_alert_manager_open_with_settings = {
      bind: 'open-modal'
    };
  }

  connectionsOut('cells-product-more-info').loan_more_info_clipboard_channel = {
    bind: 'cells-product-more-info-button-click'
  };

  return sphericaPageUtils.spherize(base);
};
