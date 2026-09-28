'use strict';

module.exports = CONFIG => {
  const { nativeIos } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'fundMoreInfo');
  const isSpherica = sphericaPageUtils.isSpherica();
  const extraHeaderClass = isSpherica ? '' : 'dark-blue-bg';
  const sphericaSuffix = isSpherica ? '-spherica' : '';
  const base = require('./product/_product-more-info')('fund')(CONFIG);
  const utils = require('./common/helpers/_utils');

  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const setProperty = utils.setProperty(base);
  const addProperty = utils.addProperty(base);

  base.template = {
    ...base.template,
    tagSpherica: 'cells-template-coronita-spherica',
    extraHeaderClass,
    propertiesSpherica: {
      disableEdgeSwipe: true,
      className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`
    }
  };
  addProperty('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  addProperty('cells-molecule-header').propertiesSpherica = {
    titleName: 'cells-fund-more-info-header-title-spherica',
    className: 'header--core-grey',
    variant: 'primary-alt',
    leftIcon: 'coronita:back-mini',
    leftIconText: 'cells-molecule-header-spherica-back'
  };
  addProperty('cells-product-more-info').tagSpherica = 'cells-product-more-info-spherica';
  addProperty('cells-clipboard-manager').tagSpherica = 'cells-clipboard-manager-spherica';
  addProperty('cells-bottom-modal-message').tagSpherica = 'cells-bottom-modal-message-spherica';

  setProperty('cells-product-more-info').buttonText = '';
  setProperty('cells-product-more-info').skeletonItems = 3;
  setProperty('cells-product-more-info').dataHidden = false;
  setProperty('cells-bottom-modal-message').message = `cells-product-more-info-contact-title-copy${sphericaSuffix}`;
  setProperty('cells-bottom-modal-message').icon = 'coronita:correct';

  setProperty('glomo-fund-summary-dm-mx').isSpherica = isSpherica;
  connectionsIn('glomo-fund-summary-dm-mx').global_product_fund_set_more_info = {
    bind: 'setProductMoreInfo'
  };

  connectionsOut('glomo-fund-summary-dm-mx').close_control_veil = {
    bind: 'more-info-changed'
  };

  return sphericaPageUtils.spherize(base);
};
