'use strict';
module.exports = config => {
  const utils = require('./common/helpers/_utils');
  const language = utils.getLanguage(config);
  const formatDate = utils.getAlternativeFormatDate();
  const pageName = 'ocPayrollPortability';
  const isNativeIos = config.nativeIos || false;
  const template = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'bbva-core-blue',
      className: isNativeIos ? 'ios-top-padding bbva-core-blue' : 'bbva-core-blue',
      headerFixed: true,
      IOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [pageName + '_init']: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifecycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: config.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'payroll-review-page-init': true,
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init']: {
            bind: 'payroll-review-page-init'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const moleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'payroll-portability-change-payroll-title',
      cellsConnections: {
        out: {
          [pageName + '_header_right_icon_tapped']: {
            bind: 'click-right-button',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const successPayroll = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      withoutHead: true,
      formatDate,
      language,
      hideDivider: true,
      cellsConnections: {
        in: {
          payroll_portability_successful: {
            bind: 'result'
          }
        },
        out: {
          [pageName + '_close_success_button_tapped']: {
            bind: 'cells-successful-response-click-primary',
            backStep: true
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/oc-payroll-portability-review'
    },
    hash: 'oc-payroll-portability-review',
    template,
    components: [
      lifecycle,
      moleculeHeader,
      successPayroll
    ]
  };
  return base;
};