'use strict';

module.exports = (config) => {
  const commonUtils = require('./common/helpers/_utils');
  const PAGE_NAME = 'emergencyZone';
  const isNativeIos = config.nativeIos || false;
  const PREFIX = commonUtils.createPrefixFromPageName(PAGE_NAME);
  const pages = require('./common/_pages')(config)(PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const ANALYTICS = require('./analytics/_emergencyZone')(config);
  const configButtons = [
    {
      titleText: 'emergency-options-title-lost-card',
      action: 'navigate',
      page: 'emergencyLostCard',
      name: 'emergencyLostCard',
      showArrow: true
    },
    {
      titleText: 'emergency-options-title-change-password',
      action: 'navigate',
      page: 'emergencyChangePassword',
      name: 'emergencyChangePassword',
      showArrow: true
    },
    {
      titleText: 'emergency-options-title-need-cash',
      action: 'navigate',
      page: 'emergencyNeedCash',
      name: 'emergencyNeedCash',
      showArrow: true
    },
    {
      titleText: 'emergency-options-title-call-bbva-line',
      action: 'navigate',
      page: 'callBbva',
      name: 'callBbva',
      params: { value: config.bbvaLine },
      showArrow: true
    }
  ];
  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/emergency-zone'
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
              __bridge_page_emergencyZone: {
                bind: 'init'
              }
            },
            out: {
              [PREFIX + '_emergency_zone_reset_page']: {
                bind: 'reset'
              },
              [PREFIX + '_emergency_zone_init_page']: {
                bind: 'init-page',
                analytics: ANALYTICS.advanced_footprint('operaciones de emergencia')
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
          titleName: 'emergency-options-header',
          cellsConnections: {
            out: {
              [PREFIX + '_emergency_zone_back_request']: {
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
          backAction: 'navigation-to-previous-page',
          cellsConnections: {
            in: {
              [PREFIX + '_emergency_zone_back_request']: {
                bind: 'goBack'
              },
              [PREFIX + '_emergency_zone_item_clicked']: {
                bind: 'navigateToPage'
              }
            },
            out: {
              [PREFIX + '_navigation_to_change_password']: {
                bind: 'navigation-to-emergencyChangePassword',
                link: {
                  page: 'emergencyChangePassword'
                }
              },
              [PREFIX + '_navigation_to_lost_card']: {
                bind: 'navigation-to-emergencyLostCard',
                link: {
                  page: 'emergencyLostCard'
                }
              },
              [PREFIX + '_navigation_to_need_cash']: {
                bind: 'navigation-to-emergencyNeedCash',
                link: {
                  page: 'emergencyNeedCash'
                }
              },
              global_action_launcher_dialer: {
                bind: 'navigation-to-callBbva'
              },
              [PREFIX + '_navigation_to_noClientBusinessDebitCardInfo']: {
                bind: 'navigation-to-noClientBusinessDebitCardInfo',
                link: {
                  page: 'noClientBusinessDebitCardInfo'
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
          title: 'emergency-options-description-title',
          mainDescription: 'emergency-options-description-text'
        },
        propertiesSpherica: {
          title: 'emergency-options-description-title-spherica'
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
            in: {
              configuration_buttons_from_dashboard_business_debit_card: {
                bind: 'buttons'
              }
            },
            out: {
              [PREFIX + '_emergency_zone_item_clicked']: {
                bind: 'button-clicked',
                analytics: ANALYTICS.internal_link('no encuentro o me robaron mi tarjeta', 'operaciones de emergencia'),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
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
