'use strict';

module.exports = (config) => {
  const commonUtils = require('./common/helpers/_utils');
  const PAGE_NAME = 'emergencyLostCard';
  const isNativeIos = config.nativeIos || false;
  const PREFIX = commonUtils.createPrefixFromPageName(PAGE_NAME);
  const pages = require('./common/_pages')(config)(PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const ANALYTICS = require('./analytics/_emergencyZone')(config);
  const configButtons = [
    {
      titleText: 'emergency-options-toggle-card-title',
      text: 'emergency-options-toggle-card-text',
      action: 'navigate',
      page: 'toggleCardsPage',
      name: 'toggleCards',
      showArrow: true
    },
    {
      titleText: 'emergency-options-lock-card-title',
      text: 'emergency-options-lock-card-text',
      action: 'navigate',
      page: 'lockCardsPage',
      name: 'lockCards',
      showArrow: true
    }
  ];

  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/emergency-lost-card'
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
              __bridge_page_emergencyLostCard: {
                bind: 'init'
              }
            },
            out: {
              [PREFIX + '_emergency_lost_card_reset_page']: {
                bind: 'reset'
              },
              [PREFIX + '_emergency_lost_card_init_page']: {
                bind: 'init-page',
                analytics: ANALYTICS.advanced_footprint('no encuentro o me robaron mi tarjeta'),
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
          titleName: 'emergency-options-title-lost-card',
          cellsConnections: {
            out: {
              [PREFIX + '_emergency_lost_card_back_request']: {
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
              [PREFIX + '_emergency_lost_card_back_request']: {
                bind: 'goBack'
              },
              [PREFIX + '_emergency_lost_card_item_clicked']: {
                bind: 'navigateToPage'
              }
            },
            out: {
              [PREFIX + '_navigation_emergency_lost_card_to_toggle_cards_page']: {
                bind: 'navigation-to-toggleCardsPage',
                link: {
                  page: 'toggleCardsPage'
                }
              },
              [PREFIX + '_navigation_emergency_lost_card_to_lock_cards_page']: {
                bind: 'navigation-to-lockCardsPage',
                link: {
                  page: 'lockCardsPage'
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
        properties: {
          mainDescription: 'emergency-options-block-card-description-text',
          className: 'margin-top-l'
        },
        propertiesSpherica: {
          className: 'u-margin-top--1'
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
              [PREFIX + '_emergency_lost_card_item_clicked']: {
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
