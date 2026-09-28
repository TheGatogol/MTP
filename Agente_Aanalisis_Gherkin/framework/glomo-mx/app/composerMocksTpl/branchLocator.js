/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('branchLocator');
  const SPINNER = utils.SPINNER(CONFIG);
  const PREFIX = 'BLOCK_AND_REPLACEMENT';
  const isNativeIos = CONFIG.nativeIos || false;
  const filteredType = [ 'branch' ];
  const poisOperations = [
    {
      label: 'branch-locator-glomo-atm-locator-item-selected-button-label',
      id: 'share'
    }
  ];
  const base = {
    pages,
    hash: 'branch-locator',
    currentPage: {
      url: '/branch-locator'
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
            branch_locator_scroll_zone: {
              bind: 'scrollItemIntoView'
            },
            branch_locator_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            branch_locator_scroll_complete: {
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
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'branchLocator',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_branchLocator: {
                bind: 'init'
              }
            },
            out: {
              branch_locator_reset_page: {
                bind: 'reset'
              },
              branch_locator_init_page: {
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
          hideLeftActions: true,
          rightIcon: 'coronita:close',
          rightIconSize: '22',
          titleName: 'branch-locator-title-page',
          cellsConnections: {
            out: {
              navigation_branch_locator_to_previous_page: {
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
          backAction: 'navigation-go-back',
          cellsConnections: {
            in: {
              navigation_branch_locator_to_page: {
                bind: 'navigate'
              },
              branch_locator_detail_selected: {
                bind: 'navigate'
              },
              branch_locator_detail_operation_clicked: {
                bind: 'navigate'
              },
              additional_card_hiring_continue: {
                bind: 'continue'
              },
              [PREFIX + '_BRANCH_SELECTED_CARD_ITEM']: {
                bind: 'goBack'
              },
              [PREFIX + '_BRANCH_SELECTED_LIST_ITEM']: {
                bind: 'goBack'
              }
            },
            out: {
              navigation_branch_locator_to_additional_card_hiring: {
                bind: 'navigation-to-additional-card-hiring',
                backStep: true
              },
              [PREFIX + '_NAVIGATION_GO_BACK_BLOCK_AND_REPLACEMENT']: {
                bind: 'navigation-go-back',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-input',
        properties: {
          className: 'custom-input-btn-search',
          icon: 'coronita:search',
          iconVisibility: 'always',
          label: 'branch-locator-input-placeholder-search',
          type: 'text',
          iconSize: 24,
          shyPlaceholder: true,
          readonly: true,
          id: 'inputMap',
          excludeCurrentTargetOnFocusEvent: true,
          cellsConnections: {
            in: {
              branch_locator_search_value: {
                bind: 'value'
              },
              branch_locator_reset_page: {
                bind: 'clearInput'
              }
            },
            out: {
              navigation_branch_locator_to_search_place: {
                bind: 'cells-molecule-input-focus',
                link: {
                  page: 'searchPlacePage'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-atm-locator',
        properties: {
          typeLayout: 'grid',
          gridCols: 1,
          className: 'branch-locator no-icon',
          locationDefault: CONFIG.mapsLocationDefault,
          apiKey: CONFIG.mapsApiKey,
          largeMarker: true,
          isNativeIos: isNativeIos,
          nativeGeolocation: CONFIG.nativeShell || false,
          disableGoToRoute: true,
          resetList: true,
          noSearchAfterClose: true,
          searchAreaBtn: 'branch-locator-search-area-txt-btn',
          timeoutLocation: 3000,
          cellsConnections: {
            in: {
              __bridge_evt_page_ready: {
                bind: 'checkWelcome'
              },
              branch_locator_init_page: {
                bind: 'init'
              },
              branch_locator_reset_page: {
                bind: 'reset'
              },
              branch_locator_set_searched_place_location: {
                bind: 'setLocation'
              },
              branch_locator_success_get_searched_branches_list: {
                bind: 'markers'
              },
              branch_locator_search_value: {
                bind: 'closeDetail'
              },
              branch_locator_start_location: {
                bind: 'init'
              }
            },
            out: {
              branch_locator_init_location: {
                bind: 'init-location'
              },
              branch_locator_go_to_route: {
                bind: 'generate-route-maps'
              },
              branch_locator_share_social_sharing: {
                bind: 'on-click-atm-share'
              },
              branch_locator_get_pois: {
                bind: 'cells-map-get-pois'
              },
              branch_locator_search_new_area: {
                bind: 'search-new-area'
              },
              global_check_first_time_branch_locator: {
                bind: 'check-atm-locator-welcome'
              },
              navigation_branch_locator_to_page: {
                bind: 'item-selected'
              },
              branch_locator_detail_operation_clicked: {
                bind: 'on-detail-operation-clicked'
              },
              [PREFIX + '_BRANCH_SELECTED_CARD_ITEM']: {
                bind: 'on-detail-operation-clicked'
              },
              [PREFIX + '_BRANCH_SELECTED_LIST_ITEM']: {
                bind: 'item-selected'
              },
              block_and_replacement_branch_selected_list_item_cbm: {
                bind: 'item-selected'
              },
              block_and_replacement_branch_selected_on_detail_cbm: {
                bind: 'on-detail-operation-clicked'
              },
              branch_locator_detail_selected: {
                bind: 'on-click-detail-selected'
              },
              global_branch_locator_current_position: {
                bind: 'set-me-location'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          type: 'info',
          autoHide: true,
          time: 3000,
          message: 'glomo-additional-card-detail-messagge',
          messageDisabled: true,
          iOSFixedHeader: true,
          cellsConnections: {
            in: {
              branch_locator_last_item_checked: {
                bind: 'open'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-map-options',
        properties: {
          cellsConnections: {
            in: {
              branch_locator_go_to_route: {
                bind: 'goToRoute'
              }
            },
            out: {
              branch_locator_open_route: {
                bind: 'open-route'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-pois',
        properties: {
          host: CONFIG.globalServices.host,
          alternateHost: CONFIG.globalServices.hostAkamai,
          apiVersion: CONFIG.globalServices.versions.pois,
          native: CONFIG.native || false,
          requiresTsec: true,
          fullAddress: true,
          hideIconList: true,
          poisOperations,
          listButtonLabel: 'branch-locator-cells-collapsible-list-button',
          fullAddressMainPrefix: 'branch-locator-cells-collapsible-list-branch-title',
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          filter: filteredType,
          isLogged: true,
          cellsConnections: {
            in: {
              global_search_place_input_place: {
                bind: 'getPlaceLocation'
              },
              branch_locator_search_new_area: {
                bind: 'getBranches'
              }
            },
            out: {
              branch_locator_success_get_searched_branches_list: {
                bind: 'set-searched-branches-list'
              },
              branch_locator_error_get_searched_branches_list: {
                bind: 'error-on-get-list-branches'
              },
              branch_locator_set_searched_place_location: {
                bind: 'set-searched-place-location'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              branch_locator_start_location: {
                bind: 'atm-locator-start-location'
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
