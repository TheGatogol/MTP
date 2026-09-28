'use strict';
module.exports = CONFIG => {
  const { getLanguage, createPrefixFromPageName, getAlternativeFormatDate } = require('./common/helpers/_utils');
  const pageName = 'fatcaValidationSuccess';
  const prefix = createPrefixFromPageName(pageName);
  const analytics = require('./analytics/_fatcaValidation')();
  const template = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      headerHeight: 60,
      className: CONFIG.nativeIos ? 'ios-top-padding' : ''
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'fatca-success-page-init': true,
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_page_fatcaValidationSuccess: {
            bind: 'init'
          }
        },
        out: {
          [prefix + '_INIT']: {
            bind: 'fatca-success-page-init'
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
      titleName: 'fatca-validation-add-tax-residence',
      cellsConnections: {
        out: {
          [prefix + '_CLOSE_FATCA_SUCCESS']: {
            bind: 'click-right-button'
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
      backAction: 'fatca-success-back-close-page',
      cellsConnections: {
        in: {
          [prefix + '_CLOSE_FATCA_SUCCESS']: {
            bind: 'goBack'
          }
        },
        out: {
          [prefix + '_CLOSE_PAGE']: {
            bind: 'fatca-success-back-close-page',
            backStep: true
          }
        }
      }
    }
  };
  const successFatca = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      hideDivider: true,
      withoutHead: true,
      formatDate: getAlternativeFormatDate(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          fatca_validation_ROUTE_TAX_RESIDENCE_SUCCESS: {
            bind: 'result'
          }
        },
        out: {
          [prefix + '_CLOSE_FATCA_SUCCESS']: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    }
  };
  const analyticsFatca = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytics-manager-fatca-mx',
    familyPath: '@glomo-web-components/bbva-manager-fatca',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          fatca_validation_ROUTE_TAX_RESIDENCE_SUCCESS: {
            bind: 'onAppCompleted'
          }
        },
        out: {
          [prefix + '_APP_COMPLETED']: {
            bind: 'bbva-analytics-manager-fatca-app-completed',
            analytics: analytics._getAppCompleted
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/fatca-validation-success'
    },
    hash: 'fatca-validation-success',
    template,
    components: [
      lifeCycle,
      moleculeHeader,
      navigationHandler,
      successFatca,
      analyticsFatca
    ]
  };
  return base;
};
