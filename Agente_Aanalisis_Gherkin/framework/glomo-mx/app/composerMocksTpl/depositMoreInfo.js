'use strict';

module.exports = CONFIG => {
  const base = require('./product/_product-more-info')('deposit')(CONFIG);
  const PAGE_NAME = 'depositMoreInfo';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const getComponent = utils.get(base);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const connectionsParams = utils.connectionsParams(base);
  const setProperty = utils.setProperty(base);
  const ANALYTICS = require('./analytics/_depositMoreInfo')(CONFIG);
  const { nativeIos } = CONFIG;

  connectionsParams('glomo-deposit-summary-dm-mx').deposit = 'deposit';
  base.template.tagSpherica = 'cells-template-coronita-spherica';
  base.template.propertiesSpherica = {
    disableEdgeSwipe: true,
    className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`
  };
  setProperty('glomo-deposit-summary-dm-mx').locale = utils.getLocalCurrency(CONFIG);
  setProperty('cells-bottom-modal-message').icon = 'coronita:correct';
  getComponent('cells-bottom-modal-message').propertiesSpherica = {
    icon: 'coronita:right'
  };
  setProperty('cells-bottom-modal-message').iconSize = 24;
  setProperty('cells-bottom-modal-message').className = 'deposit';
  setProperty('cells-bottom-modal-message').fullHeight = false;
  connectionsIn('glomo-deposit-summary-dm-mx').global_dashboard_raw_accounts = {
    bind: 'accounts'
  };

  setProperty('cells-product-more-info').dateFormat = utils.getShortFormatDate(CONFIG);

  connectionsIn('glomo-deposit-summary-dm-mx').global_product_deposit_set_more_info = {
    bind: 'setProductMoreInfo'
  };

  connectionsOut('glomo-deposit-summary-dm-mx').global_product_deposit_set_more_info_out = {
    bind: 'more-info-changed',
    analytics: ANALYTICS.APP_HUELLA_DETAIL_DEPOSIT_MORE_INFO
  };

  setProperty('cells-product-more-info').skeletonItems = 5;
  setProperty('cells-product-more-info').dataHidden = false;
  addCommonErrors(base.components)();

  getComponent('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  getComponent('cells-molecule-header').propertiesSpherica = {
    variant: 'primary-alt',
    leftIcon: 'coronita:back-mini',
    leftIconText: 'cells-molecule-header-spherica-back',
    className: 'header'
  };
  getComponent('cells-product-more-info').tagSpherica = 'cells-product-more-info-spherica';
  getComponent('cells-product-more-info').propertiesSpherica = {
    variant: 'primary'
  };
  getComponent('cells-bottom-modal-message').tagSpherica = 'cells-bottom-modal-message-spherica';

  return sphericaPageUtils.spherize(base);
};
