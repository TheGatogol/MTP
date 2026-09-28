'use strict';

module.exports = CONFIG => {
  const pageName = 'kycValidationSuccess';
  const isNativeIos = CONFIG.nativeIos || false;
  const { getAlternativeFormatDate } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(pageName);

  const base = {
    hash: 'kyc-validation-success',
    currentPage: {
      url: '/kyc-validation-success'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        animationType: 'verticalUp',
        extraHeaderClass: 'dark-blue-bg',
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {

        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'kycValidationSuccess',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_kycValidationSuccess: {
                bind: 'init'
              }
            },
            out: {
              [pageName + '_INIT']: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'profile-kyc-title',
          cellsConnections: {
            out: {
              [pageName + '_BACK_BUTTON']: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-successful-response',
        properties: {
          withoutHead: true,
          hideDivider: true,
          formatDate: getAlternativeFormatDate(),
          cellsConnections: {
            in: {
              SET_RESULT_KYC_SUCCESS: {
                bind: 'result'
              }
            },
            out: {
              [pageName + '_BACK_BUTTON']: {
                bind: 'cells-successful-response-click-primary',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };

  return base;
};