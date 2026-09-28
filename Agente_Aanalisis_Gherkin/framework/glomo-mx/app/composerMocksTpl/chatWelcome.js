'use strict';
module.exports = CONFIG => {
  const pageName = 'chatWelcome';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const OPERATIVE_PREFIX = pageName.toLowerCase();
  const { useNames } = require('./common/helpers/_utils');
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const ANALYTICS_CHAT_WELCOME = require('./analytics/_chatWelcome')();
  const isNativeIos = CONFIG.nativeIos || false;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      className: 'bbva-core-blue',
      iOSFixedHeader: isNativeIos,
      disableEdgeSwipe: true,
      headerFixed: true
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
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
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          [pageName + '_reset_page']: {
            bind: 'reset'
          },
          [pageName + '_analytics_init_page']: {
            bind: 'init-page',
            analytics: ANALYTICS_CHAT_WELCOME.PAGE_VIEW
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const bbvaHeaderMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      text: 'in-app-chat-header-main-text',
      iconRightPrimary: 'bbva:close',
      cellsConnections: {
        out: {
          [getChannelName('_leave_the_chat')]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };
  const bbvaHelpModal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    properties: {
      buttonText: 'in-app-chat-help-modal-button-text',
      linkText: 'in-app-chat-help-modal-link-text'
    }
  };
  const bbvaPannelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      microillustration: 'chat',
      heading: 'in-app-chat-pannel-info-heading',
      text: 'in-app-chat-pannel-info-text'
    }
  };
  const bbvaAggregationBulletList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-bullet-list',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
    render: 'litElement',
    properties: {
      items: ['in-app-chat-aggregation-bullet-list-items-one', 'in-app-chat-aggregation-bullet-list-items-two']
    }
  };
  const bbvaPanelButtonFixed = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      className: 'u-box-shadow--none',
      buttonText: 'in-app-chat-pannel-button-fixed',
      buttonClass: 'primary',
      show: true,
      cellsConnections: {
        out: {
          [getChannelName('_go_chat')]: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    }
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'chat',
      backAction: 'leave-chat',
      cellsConnections: {
        in: {
          [getChannelName('_go_chat')]: {
            bind: 'navigate'
          },
          [getChannelName('_leave_the_chat')]: {
            bind: 'goBack'
          }
        },
        out: {
          chat_welcome_to_chat: {
            bind: 'navigation-to-chat',
            link: {
              page: 'chat'
            }
          },
          [getChannelName('_leave_chat')]: {
            bind: 'leave-chat',
            backStep: true
          }
        }
      }
    }
  };
  const base = {
    hash: 'chatWelcome',
    currentPage: {
      url: '/chatWelcome'
    },
    pages,
    template,
    components: [
      lifeCycle,
      bbvaHeaderMain,
      bbvaHelpModal,
      bbvaPannelInfo,
      bbvaAggregationBulletList,
      bbvaPanelButtonFixed,
      glomoNavigationHandler
    ]
  };
  return base;
};