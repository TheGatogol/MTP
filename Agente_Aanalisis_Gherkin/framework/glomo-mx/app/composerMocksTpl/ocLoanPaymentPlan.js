'use strict';
module.exports = CONFIG => {
  const pageName = 'ocLoanPaymentPlan';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const {
    useNames,
    SPINNER: _getSpinner
  } = require('./common/helpers/_utils');
  const OPERATIVE_PREFIX = pageName.toLowerCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const isNative = CONFIG.native || false;
  const LITERALS = require('./analytics/common/_literals');
  const spinner = _getSpinner(CONFIG);
  spinner.properties.className = 'solid-spinner';
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const template = {
    tag: 'glomo-opx-template',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      headerHeight: 60
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const headerMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'loan-payment-plan-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          [getChannelName('back_request_action')]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };
  const base = {
    hash: 'oc-loan-payment-plan',
    currentPage: {
      url: '/oc-loan-payment-plan'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      headerMain
    ]
  };
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('', 'ocLoanPaymentPlan', ['', '']);
  return base;
};