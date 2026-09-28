'use strict';
module.exports = (CONFIG) => {
  const pageName = 'ocPaymentPlanLoanErrorPage';
  const isNativeIos = CONFIG.nativeIos || false;
  const prefix = 'OC_PAYMENT_PLAN_LOAN_ERROR';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const configButtons = {
    buttons: {
      primary: {
        class: 'primary',
        text: 'bbva-manager-oc-card-common-error-button-text',
        action: 'exit'
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      iOSFixedHeader: isNativeIos,
      className: isNativeIos ? 'ios-top-padding' : ''
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
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [prefix + '_INIT_PAGE']: {
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
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [prefix + '_EXIT_ERROR_PAGE']: {
            bind: 'goBack'
          }
        },
        out: {
          [prefix + '_EXIT']: {
            bind: 'header-left-button',
            backStep: true
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          [prefix + '_SET_HEADER_NAME_ERROR']: {
            bind: 'titleName'
          }
        },
        out: {
          [prefix + '_EXIT_ERROR_PAGE']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [prefix + '_SET_MICRO_ILLUSTRATION_ERROR']: {
            bind: 'microillustration'
          },
          [prefix + '_SET_HEADING_ERROR']: {
            bind: 'heading'
          },
          [prefix + '_SET_TEXT_ERROR']: {
            bind: 'text'
          }
        }
      }
    }
  };
  const confirmButtons = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      hideDivider: true,
      config: configButtons,
      cellsConnections: {
        out: {
          [prefix + '_EXIT_ERROR_PAGE']: {
            bind: 'cells-confirm-buttons-click-primary'
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-card-support-fixed-payments',
    familyPath: '@glomo-web-components/bbva-manager-payment-plan',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleAndroidBackButton'
          }
        },
        out: {
          [prefix + '_EXIT_ERROR_PAGE']: {
            bind: 'back-button-exit-page-event'
          }
        }
      }
    }
  };
  return {
    hash: prefix,
    currentPage: {
      url: '/' + pageName
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      manager,
      panelInfo,
      confirmButtons
    ]
  };
};
