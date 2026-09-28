'use strict';
module.exports = config => {
  const pageName = 'historyCreditReceipt';
  const pages = require('./common/_pages')(config)(pageName);
  const { getLanguage, useNames, createPrefixFromPageName, getAlternativeFormatDate } = require('./common/helpers/_utils');
  const language = getLanguage(config);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = globalName => 'global_' + getChannelName(globalName).toLowerCase();
  const isNativeIos = config.nativeIos || false;
  const formatDate = getAlternativeFormatDate();
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      disableScrollLock: true,
      headerFixed: true,
      preventScrollWithOverlay: true,
      animationType: 'verticalUp',
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      private: true,
      tokenName: config.globalServices.requiredToken || 'tsec',
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
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          app_error_access_token: {
            bind: 'access-token-error'
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
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          },
          [getChannelName('exit_receipt')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getGlobalName('exit')]: {
            bind: 'navigate-to-previous-page',
            backStep: true,
            skipHistory: true
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
      className: 'header--core ' + (isNativeIos ? 'ios-top-padding' : ''),
      rightIcon: 'coronita:close',
      titleName: 'credit-bureau-offer-page-header',
      cellsConnections: {
        out: {
          [getChannelName('exit_receipt')]: {
            bind: 'click-right-button'
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
      page: pageName,
      language,
      formatDate,
      withoutHead: true,
      hideDivider: true,
      cellsConnections: {
        in: {
          history_credit_show_receipt: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('exit_receipt')]: {
            bind: 'go-to-next'
          }
        }
      }
    }
  };
  const base = {
    hash: 'history-credit-receipt',
    currentPage: {
      url: '/history-credit-receipt'
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      successfulResponse
    ]
  };
  return base;
};