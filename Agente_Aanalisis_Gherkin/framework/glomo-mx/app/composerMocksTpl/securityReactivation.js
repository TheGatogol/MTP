/* eslint-disable new-cap */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const spinner = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const moreInfoPageName = 'facialRecognitionMoreInfo';
  const pageName = 'securityReactivation';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const base = {
    hash: 'security-reactivation',
    currentPage: {
      url: '/security-reactivation'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            facial_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: moreInfoPageName,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_facialRecognition: {
                bind: 'init'
              }
            },
            out: {
              facial_reset_page: {
                bind: 'reset'
              },
              facial_init_page: {
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
          titleName: 'glomo-facial-recognition-more-info-header-title',
          cellsConnections: {
            out: {
              navigation_facial_to_page: {
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
        tag: 'cells-text-description',
        properties: {
          className: 'main-description-margin-bottom-m',
          title: 'glomo-facial-recognition-seurity-reactivation-title',
          mainDescription: 'glomo-facial-recognition-security-reactivation-label',
          link: {
            text: 'glomo-facial-recognition-security-reactivation-link',
            iconClass: 'link-icon'
          },
          cellsConnections: {
            out: {
              security_reactivation_facial_recognition: {
                bind: 'cells-text-description-link-click',
                link: {
                  page: 'facialRecognition'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-device-activation-facial-biometrics-validation',
        familyPath: '@glomo-web-components/bbva-manager-device-activation-facial-biometrics-validation',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              security_reactivation_facial_recognition: {
                bind: 'setGoBackFacial'
              },
              global_login_success: {
                bind: 'customerData'
              }
            }
          }
        }
      }
    ]
  };
  addCommonErrors(base.components)();
  return base;
};
