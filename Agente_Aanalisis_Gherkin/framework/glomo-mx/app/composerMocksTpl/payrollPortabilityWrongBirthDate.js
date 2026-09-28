'use strict';
const { useNames, toUnderscoreCase } = require('./common/helpers/_utils');
const PAGE_NAME = 'payrollPortability';
const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      IOSFixedHeader: isNativeIos
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('reset_page')]: {
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
  const navigationHandler = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [getChannelName('header_click_right_button')]: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          },
          [getChannelName('exit_button_click')]: {
            bind: 'goBack'
          }
        },
        out: {
          navigation_to_previous_page: {
            bind: 'navigate-to-previous-page',
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
      titleName: 'payroll-portability-birthday-title',
      rightIcon: 'coronita:close',
      back: true,
      cellsConnections: {
        out: {
          [getChannelName('header_click_right_button')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const cardAdvice = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-card-advice',
    properties: {
      className: 'image-m card-advice-flex',
      btnCustomClass: 'btn-fixed',
      isBackgroundLight: true,
      showBtn: true,
      btnLabel: 'payroll-portability-exit-modal-confirm',
      imageUrl: './images/general_error.svg',
      titleText: 'payroll-portability-wrong-birthday-title',
      text: 'payroll-portability-wrong-birthday-text',
      cellsConnections: {
        in: {
          [getChannelName('navigate_to_wrong')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('exit_button_click')]: {
            bind: 'card-advice-button-click'
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/payroll-portability-wrong-birth-date'
    },
    pages,
    template,
    components: [
      header,
      navigationHandler,
      lifeCycle,
      cardAdvice
    ]
  };
  return base;
};
