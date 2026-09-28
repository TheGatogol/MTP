'use strict';

module.exports = (config) => {
  const commonUtils = require('./common/helpers/_utils');
  const PAGE_NAME = 'emergencyChangePassword';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const isNativeIos = config.nativeIos || false;
  const PREFIX = commonUtils.createPrefixFromPageName(PAGE_NAME);
  const pages = require('./common/_pages')(config)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_emergencyZone')(config);
  const configButtons = [
    {
      titleText: 'emergency-options-change_password_title',
      action: 'navigate',
      page: 'keyRecoveryUpdate',
      name: 'keyRecoveryUpdate',
      text: 'emergency-options-change_password_text',
      showArrow: true
    }
  ];

  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/emergency-change-password'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: commonUtils.headerHeight,
        className: isNativeIos ? 'ios-top-padding' : '',
        fixOffsetScroll: 0,
        iOSFixedHeader: true
      },
      propertiesSpherica: {
        className: `bg-light-grey${isNativeIos ? ' ios-top-padding' : ''}`
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_emergencyChangePassword: {
                bind: 'init'
              }
            },
            out: {
              [PREFIX + '_emergency_change_password_reset_page']: {
                bind: 'reset'
              },
              [PREFIX + '_emergency_change_password_init_page']: {
                bind: 'init-page',
                analytics: ANALYTICS.advanced_footprint('necesito cambiar mi contrasena'),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core',
          leftIcon: 'coronita:return-12',
          titleName: 'emergency-options-title-change-password',
          cellsConnections: {
            out: {
              [PREFIX + '_emergency_change_password_back_request']: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back-mini',
          className: '',
          variant: 'primary-alt',
          leftIconText: 'cells-molecule-header-spherica-back'
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          cellsConnections: {
            in: {
              [PREFIX + '_emergency_change_password_back_request']: {
                bind: 'goBack'
              },
              [PREFIX + '_emergency_change_password_item_clicked']: {
                bind: 'navigateToPage'
              }
            },
            out: {
              [PREFIX + '_navigation_to_key_recovery_update']: {
                bind: 'navigation-to-keyRecoveryUpdate',
                link: {
                  page: 'keyRecoveryUpdate'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-text-description',
        tagSpherica: 'cells-text-description-spherica',
        properties: {
          mainDescription: 'emergency-options-change-password-description-text',
          className: 'margin-top-l'
        },
        propertiesSpherica: {
          className: 'u-margin-top--1 u-padding-top--0'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-button-list',
        tagSpherica: 'glomo-button-list-spherica',
        properties: {
          addDivisor: true,
          className: 'no-wrap no-padding emergency-with-text',
          buttons: configButtons,
          cellsConnections: {
            out: {
              [PREFIX + '_emergency_change_password_item_clicked']: {
                bind: 'button-clicked'
              }
            }
          }
        },
        propertiesSpherica: {
          addDivisor: false,
          className: 'gap-m button-list-padding no-wrap'
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
