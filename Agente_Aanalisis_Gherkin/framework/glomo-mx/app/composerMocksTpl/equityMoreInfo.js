/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const base = require('./product/_product-more-info')('equity')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const setProperty = utils.setProperty(base);
  const tagSummaryDM = 'glomo-equity-summary-dm';
  const bottomModalMessage = 'cells-bottom-modal-message';
  const productMoreInfo = 'cells-product-more-info';
  const ANALYTICS = require('./analytics/_equityDetail')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'equityMoreInfo');
  const isSpherica = sphericaPageUtils.isSpherica();
  const addProperty = utils.addProperty(base);
  const visibleChars = utils.getVisibleChars(CONFIG);
  const isNativeIos = !!CONFIG.nativeIos;

  base.template = {
    ...base.template,
    tagSpherica: 'cells-template-coronita-spherica',
    extraHeaderClass: isSpherica ? '' : 'dark-blue-bg',
    propertiesSpherica: {
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
    }
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_equity_open_management_details_services_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {}
      }
    }
  };

  setProperty(bottomModalMessage).icon = 'coronita:correct';
  setProperty(bottomModalMessage).iconSize = 24;
  setProperty(bottomModalMessage).fullHeight = false;
  addProperty(bottomModalMessage).tagSpherica = 'cells-bottom-modal-message-spherica';
  addProperty(productMoreInfo).tagSpherica = 'cells-product-more-info-spherica';
  setProperty(productMoreInfo).hideNotShareButton = false;
  setProperty(productMoreInfo).buttonText = 'cells-product-more-info-copy-label';
  setProperty(productMoreInfo).className = isSpherica ? '' : 'full-section-division';
  delete connectionsIn('cells-product-detail-manager').global_equity_product_detail_reset_page;

  addProperty('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  addProperty('cells-molecule-header').propertiesSpherica = {
    className: 'header--core-grey',
    variant: 'primary-alt',
    leftIcon: 'coronita:back-mini',
    leftIconText: 'cells-molecule-header-spherica-back',
    maskConfig: {
      separator: '&bull;&nbsp;',
      chars: visibleChars,
      status: true
    }
  };

  addProperty(tagSummaryDM).propertiesSpherica = { isSpherica };

  connectionsOut(productMoreInfo).equity_more_info_help_click = {
    bind: isSpherica ? 'cells-product-more-info-help-click' : 'help-info-evt'
  };

  connectionsIn('cells-product-detail-manager').navigation_equity_product_more_info_back_request = {
    bind: 'reset'
  };

  connectionsIn(tagSummaryDM).equity_more_info_help_click = {
    bind: 'serviceManagementHelpModal'
  };

  connectionsIn(tagSummaryDM).global_financial_overview_details = {
    bind: 'financialOverview'
  };

  connectionsIn(tagSummaryDM).global_product_equity_set_more_info = {
    bind: 'setProductMoreInfo'
  };

  connectionsIn(tagSummaryDM).equity_detail_response = {
    bind: 'equity'
  };

  connectionsIn(tagSummaryDM).equity_error_on_get_more_info_equity = {
    bind: 'handleGetEquityError'
  };

  connectionsOut(tagSummaryDM).equity_error_on_get_more_info_equity = {
    bind: 'error-on-get-more-info-equity'
  };

  connectionsOut(tagSummaryDM).global_retry_error = {
    bind: 'glomo-equity-summary-dm-get-equity-error',
    analytics: ANALYTICS.ERROR_PAGEVIEW_MOREINFO
  };

  connectionsOut(tagSummaryDM).navigation_equity_product_detail_back = {
    bind: 'close-equity-product-detail',
    backStep: true
  };

  connectionsOut(tagSummaryDM).equity_more_info_success = {
    bind: 'set-more-info',
    analytics: ANALYTICS.HUELLA_PAGEVIEW_MOREINFO
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
    connectionsOut(tagSummaryDM).global_equity_open_management_details_services_spherica = {
      bind: 'open-modal-management-details-services'
    };
  } else {
    connectionsOut(tagSummaryDM).global_equity_open_management_details_services = {
      bind: 'open-modal-management-details-services'
    };
  }

  addRetryErrors(base)([
    {
      id: 'EQUITY-DETAIL-ERROR-REQUEST',
      acceptRetry: { bind: 'getProduct', component: 'glomo-equity-summary-dm' },
      cancelRetry: { bind: 'closeEquityProductDetail', component: 'glomo-equity-summary-dm' },
      acceptCallForHelp: { bind: 'closeEquityProductDetail', component: 'glomo-equity-summary-dm' }
    }
  ]);

  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
