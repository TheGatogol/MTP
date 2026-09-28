'use strict';
module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)('blockAndReplacementSuccess');
  const { getLanguage, headerHeight, createSpinner, getAlternativeFormatDateWithoutSpaceBetweenHourSymbol } = require('./common/helpers/_utils');
  const languaje = getLanguage();
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'blockAndReplacementSuccess');
  const prefix = 'BLOCK_AND_REPLACEMENT_SUCCESS';
  const base = {
    pages,
    hash: 'block-and-replacement-success',
    currentPage: {
      url: '/block-and-replacement-success'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        headerHeight,
        headerFixed: true,
        disableEdgeSwipe: true,
        className: 'bbva-core-blue',
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos
      },
      propertiesSpherica: {
        className: ''
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'blockAndReplacementSuccess',
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_blockAndReplacementSuccess: {
                bind: 'init'
              }
            },
            out: {
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
        tag: 'glomo-navigation-handler',
        properties: {
          continue: 'dashboard',
          cellsConnections: {
            in: {
              [prefix + '_NAVIGATE_TO_DASHBOARD_PAGE_CHANNEL']: {
                bind: 'navigate'
              }
            },
            out: {
              dashboard_refresh_financial_overview: {
                bind: 'navigation-to-dashboard'
              },
              [prefix + '_NAVIGATE_TO_DASHBOARD_CHANNEL']: {
                bind: 'navigation-to-dashboard',
                link: {
                  page: 'dashboard'
                },
                skipHistory: true,
                'forward-to-native': true
              },
              [prefix + '_BACK_TO_DASHBOARD_CHANNEL_CARD_DETAIL']: {
                bind: 'back-to-dashboard',
                skipHistory: true,
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main',
        tagSpherica: 'bbva-header-main-spherica',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-header-main',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          text: languaje === 'en' ? 'Block Card' : 'Bloquear tarjeta',
          cellsConnections: {
            out: {
              [prefix + '_BACK_TO_PAGE_SUCCESS']: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'modal-initial',
          leftIconLabel: 'bbva-header-main-back-left-icon-label',
          ambient: 'primary-alt',
          text: 'block-replacement-main-title-header-spherica',
          rightButtons: [
            {
              id: 'btn-close',
              name: 'Close',
              icon: 'spherica:close',
              label: 'bbva-header-main-close-aria-label',
              accessibilityText: 'bbva-help-modal-close-button',
              defaultEventIconName: 'header-main-icon-right-primary-click'
            }
          ]
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-block-card-replacement-dm',
        properties: {
          cellsConnections: {
            in: {
              '__bridge_evt_page-ready': {
                bind: 'successPageReadyHandler'
              },
              [prefix + '_BACK_TO_PAGE_SUCCESS']: {
                bind: 'exitPage'
              }
            },
            out: {
              close_control_veil: {
                bind: 'hide-spinner-event'
              },
              [prefix + '_NAVIGATE_TO_DASHBOARD_PAGE_CHANNEL']: {
                bind: 'go-to-dashboard'
              },
              [prefix + '_RESET_CHANNEL']: {
                bind: 'reset-event'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        type: 'UI',
        properties: {
          formatDate: getAlternativeFormatDateWithoutSpaceBetweenHourSymbol(),
          withoutHead: true,
          hideDivider: true,
          disabledStrongText: true,
          cellsConnections: {
            in: {
              BLOCK_AND_REPLACEMENT_NAVIGATE_TO_SUCCESS_CHANNEL: {
                bind: 'result'
              }
            },
            out: {
              [prefix + '_BACK_TO_PAGE_SUCCESS']: {
                bind: 'cells-successful-response-click-primary'
              }
            }
          }
        },
        propertiesSpherica: {
          witchDescription: true,
          withSuccessHead: true,
          withoutHead: false,
          disableButtons: true
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
