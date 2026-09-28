/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {

  // imports
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGENAME = 'cardGenerateVirtualReview';
  const PAGE_NAME_CHANNEL = 'card_generate_virtual_review';
  const UTILS = require('./common/helpers/_utils');
  const SPINNER = UTILS.SPINNER(CONFIG);
  const LANGUAGE = UTILS.getLanguage(CONFIG);
  const LOCAL_CURRENCY = UTILS.getLocalCurrency(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGENAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const configButtons = {
    buttons: {
      primary: {
        text: 'glomo-generate-virtual-card-success-button-text',
        action: 'generate-virtual-success-confirm',
        disabled: false
      }
    }
  };

  let base = {

    hash: 'card-generate-virtual-review',

    currentPage: {
      url: '/card-detail/:productId/generate-review',
      params: []
    },

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
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
          },
          out: {
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        footerHeight: 16,
        className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
      }
    },

    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGENAME,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGENAME]: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PAGE_NAME_CHANNEL + '_init_page']: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-generate-virtual-card-header-title',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_set_header_title']: {
                bind: 'setProperties'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_back_button_pressed']: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          varian: 'primary',
          leftIcon: '',
          titleName: 'glomo-generate-virtual-card-header-title-spherica',
          rightIcon: 'coronita:close',
          className: 'header--white',
          rightIconText: 'cells-molecule-header-spherica-close',
          cellsConnections: {
            out: {
              card_generate_virtual_review_back_button_pressed: {
                bind: 'click-right-button',
                backStep: true
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
          className: '',
          formatDate: 'D MMMM YYYY, HH:mm [h]',
          language: LANGUAGE,
          headerTitle: 'glomo-transfer-header-title',
          localCurrency: LOCAL_CURRENCY,
          page: 'crad-generate-virtual-review',
          hideDivider: true,
          disableButtons: true,
          withoutHead: true,
          cellsConnections: {
            in: {
              global_generate_virtual_card_success: {
                bind: 'result'
              },
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              }
            },
            out: {
            }
          }
        },
        propertiesSpherica: {
          withoutHead: false,
          operationListClass: 'centered-items',
          disableButtons: true
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        connId: 'ccButtons',
        properties: {
          className: 'no-shadow dark-medium-blue-background',
          config: isSpherica ? 'disableButtons: true' : configButtons,
          cellsConnections: {
            in: {},
            out: {
              [PAGE_NAME_CHANNEL + '_generate_virtual_card']: {
                bind: 'generate-virtual-success-confirm',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};