/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('searchPlacePage');
  const SPINNER = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const base = {
    pages,
    hash: 'search-place-page',
    currentPage: {
      url: '/search-place-page'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            search_place_scroll_zone: {
              bind: 'scrollItemIntoView'
            },
            search_place_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            search_place_scroll_complete: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-handle-life-cycle',
        properties: {
          pageName: 'searchPlace',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_searchPlacePage: {
                bind: 'init'
              }
            },
            out: {
              search_place_reset_page: {
                bind: 'reset'
              },
              search_place_init_page: {
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
          className: 'header--white',
          rightIcon: 'coronita:close',
          titleName: 'branch-locator-input-searchplace',
          cellsConnections: {
            in: {
              global_search_place_remove_color_header: {
                bind: 'className'
              },
              global_search_place_add_color_header: {
                bind: 'setColors'
              }
            },
            out: {
              navigation_search_place_back_request: {
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
        tag: 'cells-input-place',
        properties: {
          apiKey: CONFIG.mapsApiKey,
          autofocus: true,
          className: 'empty-list-image',
          classStyle: 'input-medium-blue',
          label: 'branch-locator-input-placeholder-search',
          hiddenShyPlaceholder: true,
          textPlaceNoResult: 'branch-locator-empty-list-searched-branches',
          emptyListImage: './images/empty_micro.svg',
          customErrorEmptyList: 'empty-list-image-mx',
          enabledSearchTapIcon: true,
          allowedChars: '^[a-zA-Z0-9\\s]+$',
          preventInvalidInput: true,
          cellsConnections: {
            in: {
              search_place_reset_page: {
                bind: 'reset'
              },
              search_place_init_page: {
                bind: 'focus'
              }
            },
            out: {
              global_search_place_input_place: {
                bind: 'value-changed'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              navigation_search_place_to_atm_locator: {
                bind: 'on-set-place',
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