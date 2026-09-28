/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('searchPlace');
  const PAGE_NAME = 'searchPlace';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const ANALYTICS_ATM_LOCATOR = require('./analytics/_atmLocator')(CONFIG);

  const base = {
    hash: 'search-place',
    currentPage: {
      url: '/search-place',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'bbva-core-blue',
        className: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: true,
        cellsConnections: {
          in: {
            search_place_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: ''
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
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
              __bridge_page_searchPlace: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-search-place-header-title',
          cellsConnections: {
            out: {
              navigation_search_place_back_request: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          className: '',
          variant: 'primary',
          rightIconText: 'cells-molecule-header-spherica-close'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-input-place',
        tagSpherica: 'cells-input-place-spherica',
        properties: {
          apiKey: CONFIG.mapsApiKey,
          autofocus: true,
          className: 'txt-sz-l-empty-list',
          classStyle: 'blue--mark',
          label: 'cells-atm-search-input-placeholder',
          preserveSearchOnReconnect: true,
          searchPersistenceKey: 'atm-locator-search-term',
          hiddenShyPlaceholder: true,
          messageEmpty: 'glomo-search-input-place-no-result',
          emptyListImage: './images/empty_state_day.svg',
          autoCompleteOptions: {
            'componentRestrictions': { 'country': 'mx' },
            'components': { 'country': 'mx' },
            'language': 'es-419'
          },
          cellsConnections: {
            in: {
              search_place_reset_page: {
                bind: 'reset'
              },
              search_place_init_page: {
                bind: 'focus'
              },
              search_place_show_no_results_message: {
                bind: 'setProperties'
              },
              search_place_set_no_results_locale: {
                bind: 'noResultsMessage'
              },
              set_direction_input_value: {
                bind: 'valueInput'
              }
            },
            out: {
              global_search_place_input_place: {
                bind: 'value-changed'
              },
              search_place_value_changed: {
                bind: 'on-value-changed'
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
              },
              search_place_show_message_empty_results: {
                bind: 'show-message-empty-results',
                analytics: ANALYTICS_ATM_LOCATOR.pageView('searchPlaceNotFound', 'sin resultado de busqueda')
              }
            }
          }
        },
        propertiesSpherica: {
          extraIcon: 'coronita:close',
          icon: 'coronita:search',
          emptyListImage: './images/spherica/empty_state_day.svg',
          className: 'empty-list-image',
          ambient: 'primary-alt'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-atm-locator-dm-mx',
        familyPath: 'glomo-atm-locator-dm',
        properties: {
          cellsConnections: {
            in: {
              atm_locator_no_nearby_results: {
                bind: 'showNoResultMessage'
              },
              search_place_value_changed: {
                bind: 'hideNoResultMessage'
              }
            },
            out: {
              search_place_show_no_results_message: {
                bind: 'show-message-no-result'
              },
              search_place_set_no_results_locale: {
                bind: 'set-locale-no-result-modal'
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
