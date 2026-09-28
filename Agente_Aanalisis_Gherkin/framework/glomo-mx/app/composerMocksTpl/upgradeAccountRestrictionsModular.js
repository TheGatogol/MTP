'use strict';
module.exports = CONFIG => {
  const {
    nativeIos = false
  } = CONFIG;
  const {
    SPINNER: spinner, headerHeight, footerHeight
  } = require('./common/helpers/_utils');
  const _page = require('./common/_pages');
  const pageName = 'upgradeAccountRestrictionsModular';
  const pages = _page(CONFIG)(pageName);
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      className: nativeIos ? 'ios-top-padding' : '',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      drawerWidth: '100%',
      extraHeaderClass: 'bbva-core-blue',
      fixOffsetScroll: 0,
      footerHeight,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      headerHeight
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
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
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_INIT_CHANNEL']: {
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
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'upgrade-account-n2-n4-step-restrictions',
      variant: 'modal-three-level',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          [pageName + '_GO_ACCOUNT']: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };
  const successfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      withoutHead: true,
      hideDivider: true,
      cellsConnections: {
        in: {
          [pageName + '_INFO_PAGE']: {
            bind: 'result'
          }
        },
        out: {
          [pageName + '_GO_ACCOUNT']: {
            bind: 'go-to-next',
            backStep: true
          }
        }
      }
    }
  };
  const bbvaManagerUpgrade = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-upgrade-level-account',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-manager-payroll-portability-profile',
    properties: {
      cellsConnections: {
        in: {
          [pageName + '_INIT_CHANNEL']: {
            bind: 'restrictionModular'
          },
          [pageName + '_GO_ACCOUNT']: {
            bind: 'goBackDashbord'
          },
          account_products_limits: {
            bind: 'productLimits'
          }
        },
        out: {
          [pageName + '_INFO_PAGE']: {
            bind: 'open-info-page'
          }
        }
      }
    }
  };
  const base = {
    hash: 'upgrade-account-restrictions-modular',
    currentPage: {
      url: '/upgrade-account-restrictions-modular'
    },
    pages,
    template,
    components: [
      spinner(CONFIG),
      lifeCycle,
      header,
      successfulResponse,
      bbvaManagerUpgrade
    ]
  };
  return base;
};
