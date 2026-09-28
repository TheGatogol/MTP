'use strict';

module.exports = (CONFIG) => {
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const PAGE_NAME = 'equityError';
  const PAGE_NAME_CHANNEL = 'equity_error';
  const pages = require('./common/helpers').getPages(CONFIG)(PAGE_NAME);

  const configButtons = {
    buttons: {
      primary: {
        class: 'primary',
        text: 'glomo-equity-summary-dm-single-reason-return-button',
        action: 'exit'
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'horizontal',
      hasFooter: false,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: false,
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      cellsConnections: {}
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      cache: [ '' ],
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_init_page']: {
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
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--dark',
      leftIcon: 'coronita:return-12',
      mask: {
        separator: '•',
        chars: 4,
        status: true
      },
      cellsConnections: {
        in: {
          set_single_reasonableness_header: {
            bind: 'setProperties'
          },
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    }
  };

  const panelInfo = {
    zone: 'app__main',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    type: 'UI',
    render: 'litElement',
    properties: {
      microillustration: 'error',
      cellsConnections: {
        in: {
          set_single_reasonableness_title: {
            bind: 'heading'
          },
          set_single_reasonableness_text: {
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
          exit_page: {
            bind: 'cells-confirm-buttons-click-primary',
            backStep: true
          }
        }
      }
    }
  };

  return {
    hash: 'mx-' + 'equity-error',
    currentPage: {
      url: `/${PAGE_NAME}`,
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      header,
      panelInfo,
      confirmButtons
    ]
  };
};
