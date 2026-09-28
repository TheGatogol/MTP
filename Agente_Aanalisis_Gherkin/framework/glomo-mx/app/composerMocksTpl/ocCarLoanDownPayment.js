'use strict';

module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName
  } = require('./common/helpers/_utils');
  const {
    globalServices: {requiredToken = 'tsec'},
    nativeIos = false
  } = CONFIG;
  const pageName = 'ocCarLoanDownPayment';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const [ getChannelName ] = useNames(createPrefixFromPageName(pageName));

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: nativeIos
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_ocCarLoanDownPayment: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('down_payment_init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('down_payment_reset_page')]: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-header-main',
    tag: 'bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'bbva-oc-car-loan-down-payment-title',
      iconRightPrimary: 'bbva:close',
      variant: 'modal-three-level',
      accessibilityTextIconRightPrimary: 'Close',
      cellsConnections: {
        out: {
          ch_oc_car_loan_down_payment_exit_page: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-info',
    tag: 'bbva-panel-info',
    render: 'litElement',
    properties: {
      disabledTabindex: '',
      headingLevelTitle: 'h3',
      microillustration: 'info',
      heading: 'bbva-oc-car-loan-down-payment-panel-heading',
      text: 'bbva-oc-car-loan-down-payment-panel-text',
      className: 'u-margin-bottom--0-5'
    }
  };

  const headerCategory = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    tag: 'bbva-header-category',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--0-5',
      text: 'bbva-oc-car-loan-down-payment-header-text'
    }
  };

  const indications = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
    tag: 'bbva-aggregation-bullet-list',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      items: [
        'bbva-oc-car-loan-down-payment-indications-bullet-1',
        'bbva-oc-car-loan-down-payment-indications-bullet-2',
        'bbva-oc-car-loan-down-payment-indications-bullet-3'
      ]
    }
  };

  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-notification-message',
    tag: 'bbva-notification-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      message: 'bbva-oc-car-loan-down-payment-notification-message'
    }
  };

  const button = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-button-default',
    tag: 'bbva-button-default',
    render: 'litElement',
    properties: {
      text: 'bbva-oc-car-loan-button-understood',
      className: 'u-display--table u-margin--center u-margin-bottom--1-5 u-margin-top--1-5',
      cellsConnections: {
        out: {
          ch_oc_car_loan_down_payment_button_exit_page: {
            bind: 'click',
            backStep: true
          }
        }
      }
    }
  };

  const ocCarLoanDownPayment = {
    hash: 'oc-car-loan-down-payment',
    currentPage: {
      url: '/ocCarLoanDownPayment'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      panelInfo,
      headerCategory,
      indications,
      notificationMessage,
      button
    ]
  };

  return ocCarLoanDownPayment;
};
