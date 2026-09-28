/* eslint-disable no-shadow */
'use strict';
module.exports = config => {
  const pageName = 'ocPayrollPortability';
  const page = require('./common/_pages')(config)(pageName);
  const isNativeIos = config.nativeIos || false;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      extraHeaderClass: 'bbva-core-blue',
      className: isNativeIos ? 'ios-top-padding payroll-portability-create bbva-core-blue header-fixed' : 'payroll-portability-create bbva-core-blue header-fixed',
      iOSFixedHeader: isNativeIos
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
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
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          [pageName + '_reset_page']: {
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
          [pageName + '_header_click_right_button']: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          },
          [pageName + '_exit_button_click']: {
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
      className: 'header--white',
      titleName: 'payroll-portability-birthday-title',
      rightIcon: 'coronita:close',
      cellsConnections: {
        out: {
          [pageName + '_header_click_right_button']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const cellsCardAdvice = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-card-advice',
    properties: {
      className: 'image-m card-advice-flex',
      btnCustomClass: 'btn-fixed',
      isBackgroundLight: true,
      btnLabel: 'payroll-portability-exit-modal-confirm',
      imageUrl: './images/general_error.svg',
      titleText: 'payroll-portability-wrong-birthday-title',
      text: 'payroll-portability-wrong-birthday-text'
    }
  };
  const confirmButtons = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      hideDivider: true,
      config: {
        buttons: {
          primary: {
            text: 'payroll-portability-exit-modal-confirm',
            class: 'primary',
            action: 'exit'
          }
        }
      },
      cellsConnections: {
        out: {
          [pageName + '_exit_button_click']: {
            bind: 'exit'
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/oc-payroll-portability-wrong-birth-date'
    },
    page,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      cellsCardAdvice,
      confirmButtons
    ]
  };
  return base;
};