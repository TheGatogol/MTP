'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('updateAddressSuccessPage');
  const { getLocalCurrency, useNames, getLanguage, createPrefixFromPageName, createSpinner } = require('./common/helpers/_utils');
  const PAGE_NAME = 'updateAddressSuccess';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);

  const base = {
    hash: 'update-address-success',
    currentPage: {
      url: '/update-address-success',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg',
        headerFixed: true,
        hasFooter: false,
        className: isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'updateAddressSuccessPage',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('init_page')]: {
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
          cellsConnections: {
            in: {
              updateaddressstepinputpage_set_success_title: {
                bind: 'titleName'
              }
            },
            out: {
              [getChannelName('back-button')]: {
                bind: 'click-right-button',
                backStep: true
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
          backAction: 'header-left-button',
          cellsConnections: {
            in: {
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-successful-response',
        properties: {
          className: 'product-solution-success',
          withoutHead: true,
          formatDate: 'DD MMMM YYYY, hh:mm [h]',
          cellsConnections: {
            in: {
              NAVIGATION_TO_UPDATE_ADDRESS_SUCCESS: {
                bind: 'result'
              }
            },
            out: {
              updateAddressSuccessPage_go_back: {
                bind: 'go-to-next',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-update-address-dm',
        tag: 'glomo-update-address-analytics-dm',
        properties: {
          customFields: 'actualizar direccion',
          cellsConnections: {
            in: {
              updateAddressSuccessPage_go_back: {
                bind: 'reset'
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
