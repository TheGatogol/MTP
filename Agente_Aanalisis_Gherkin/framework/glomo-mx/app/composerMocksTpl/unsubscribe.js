'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNERSPHERICA(CONFIG);
  const INFO_PHONE_NUMBER = CONFIG.phoneNumberContact;
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('unsubscribe');
  const ANALYTICS = require('./analytics/_unsubscribe')(CONFIG);
  const dataInfoContent = {
    id: 'unsubscribe',
    srcSectionImage: '',
    icon: 'coronita:info',
    title: 'glomo-unsubscribe-title',
    content: 'glomo-unsubscribe-content',
    link: 'glomo-unsubscribe-content-link-locator-spherica',
    linkIcon: 'coronita:building',
    secondLink: 'glomo-unsubscribe-content-link-phone',
    secondLinkIcon: 'coronita:outgoing-call-transparent'
  };

  const base = {
    hash: 'unsubscribe',
    currentPage: {
      url: '/unsubscribe',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'bg-light-grey',
        className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        cellsConnections: {
          in: {
            unsubscribe_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          },
          out: { }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'unsubscribe',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_unsubscribe: {
                bind: 'init'
              }
            },
            out: {
              unsubscribe_init_page_reset_page: {
                bind: 'reset'
              },
              unsubscribe_init_page: {
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
        tag: 'cells-molecule-header-spherica',
        properties: {
          className: '',
          variant: 'primary-alt',
          leftIcon: 'coronita:back-mini',
          leftIconText: 'cells-molecule-header-spherica-back',
          titleName: 'glomo-unsubscribe-header-title',
          continue: 'dashboard',
          cellsConnections: {
            in: {},
            out: {
              navigation_unsubscribe_to_page: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-info-content-spherica',
        properties: {
          iconSize: '28',
          dataContent: dataInfoContent,
          isSingleData: true,
          imageContainerClass: 'unsubscribeImage',
          buttonsClass: 'unsubscribeDivBtn',
          nameFirstBtn: 'locator',
          nameSecondBtn: 'phoneCall',
          phoneNumber: INFO_PHONE_NUMBER,
          showLink: true,
          cellsConnections: {
            in: {},
            out: {
              navigate_from_unsubscribe_to_locator: {
                bind: 'navigate-to-tip-link',
                analytics: ANALYTICS.INTERNAL_LINK_POINT_ATTENTION,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
              },
              unsubscribe_phone_call_channel: {
                bind: 'open-call-action',
                analytics: ANALYTICS.INTERACTION_LINK_PHONE,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
              },
              unsuscribe_locator_channel: {
                bind: 'go-to-atm-locator',
                link: {
                  page: 'atmLocator'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-action-launcher',
        properties: {
          cellsConnections: {
            in: {
              unsubscribe_phone_call_channel: {
                bind: 'openDialer'
              }
            },
            out: {}
          }
        }
      }
    ]
  };

  return base;
};
