/* eslint-disable new-cap, no-dupe-keys */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const { addActionLauncherChannels } = require('./common/_action-launcher');
  const SPINNER = utils.SPINNER(CONFIG, 'atmLocator');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('atmLocator');
  const ANALYTICS_ATM_LOCATOR = require('./analytics/_atmLocator')(CONFIG);
  const ANALYTICS_REQUEST_BRANCH_APPOINTMENT = require('./analytics/_requestBranchAppointment')(CONFIG);
  const requiredTokenATM = CONFIG.globalServices.requiredToken || 'tsec';

  const ACTION_LAUNCHER_EVENTS = [
    'open-maps'
  ];
  const checkIcon = 'coronita:correct';
  const checkItemsList = [
    {
      extraClass: 'primary',
      key: 'cells-options-list-branches',
      checked: true,
      icon: checkIcon,
      id: 'branch'
    },

    {
      extraClass: 'secondary',
      key: 'cells-options-list-atm',
      checked: true,
      icon: checkIcon,
      id: 'atm'
    }
  ];

  const poisOperations = [
    {
      label: 'cells-atm-branch-detail-share-operation',
      id: 'share',
      icon: 'coronita:share'
    },
    {
      label: 'cells-atm-branch-detail-request-appointment-operation-spherica',
      id: 'turn',
      icon: 'coronita:turnbox'
    },
    {
      label: 'cells-atm-branch-detail-directions-operation',
      id: 'route',
      icon: 'coronita:walkingdirections'
    }
  ];

  const poisTypes = {
    branch: {
      name: 'cells-atm-locator-branch-name',
      header: 'cells-atm-locator-branch-header',
      description: 'cells-atm-branch-detail-branch-default-description',
      waitTime: 'cells-atm-branch-detail-branch-estimated-waiting-time',
      closestPoisTitle: 'cells-atm-branch-detail-branch-closest-pois-title',
      service: '_serviceBranchDetail',
      poisService: '_serviceBankPois',
      param: 'branch-id',
      params: {
        'radius': 2500,
        'pageSize': 25,
        'branchType.id': 'INDIVIDUALS'
      }
    },
    atm: {
      name: 'cells-atm-locator-atm-name',
      header: 'cells-atm-locator-atm-header',
      description: 'cells-atm-branch-detail-atm-default-description',
      waitTime: '',
      closestPoisTitle: 'cells-atm-branch-detail-atm-closest-pois-title',
      service: '_serviceAtmDetail',
      poisService: '_serviceBankPois',
      param: 'atm-id',
      params: {
        'radius': 2500,
        'pageSize': 25,
        'branchType.id': 'INDIVIDUALS'
      }
    },
    agent: {
      name: 'cells-atm-locator-agent-name',
      header: 'cells-atm-locator-agent-header',
      description: 'cells-atm-branch-detail-atm-default-description',
      waitTime: '',
      closestPoisTitle: 'cells-atm-branch-detail-agent-closest-pois-title',
      service: '_serviceAtmDetail',
      poisService: '_serviceAtms',
      param: 'atm-id',
      params: { 'type.id': 'KI' }
    }
  };

  const atmTypes = {
    DP: {
      type: 'atm',
      class: 'secondary'
    },
    PC: {
      type: 'atm',
      class: 'secondary'
    },
    RC: {
      type: 'atm',
      class: 'secondary'
    },
    AB: {
      type: 'atm',
      class: 'secondary'
    },
    BBVA: {
      type: 'atm',
      class: 'secondary'
    },
    SR: {
      type: 'atm',
      class: 'secondary'
    },
    '4B': {
      type: 'atm',
      class: 'secondary'
    },
    E6: {
      type: 'atm',
      class: 'secondary'
    },
    ATM: {
      type: 'atm',
      class: 'secondary'
    },
    KI: {
      type: 'agent',
      class: 'tertiary'
    }
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          atm_locator_open_information_modal_spherica: {
            bind: 'openWithSettings'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          atm_locator_open_information_modal_spherica_not_available_appointments_list: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_atm_locator_active_turn_modal_accept: {
            bind: 'alert-branch-appointment-active-turn-accept'
          },
          global_atm_locator_first_time: {
            bind: 'atm-locator-first-time',
            analytics: ANALYTICS_ATM_LOCATOR.pageView('locationModalPermission', 'informacion')
          },
          global_atm_locator_welcome_cancel: {
            bind: 'alert-ATM-LOCATOR-WELCOME-cancel'
          },
          global_atm_locator_welcome_accept: {
            bind: 'alert-ATM-LOCATOR-WELCOME-accept'
          },
          atm_locator_open_native_settings: {
            bind: 'alert-LOCATION-PERMISSION-accept'
          },
          atm_locator_navigate_to_request_branch_appointment_success: {
            bind: 'alert-branch-appointment-active-turn-accept'
          },
          global_atm_locator_active_turn_modal_accept: {
            bind: 'alert-branch-appointment-active-turn-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: 'atm-locator',
    currentPage: {
      url: '/atm-locator',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        extraHeaderClass: 'bg-light-grey',
        className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`,
        cellsConnections: {
          in: {
            atm_locator_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
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
          pageName: 'atmLocator',
          private: true,
          tokenName: requiredTokenATM,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cache: ['poisDetail', 'searchPlace'],
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_atmLocator: {
                bind: 'init'
              }
            },
            out: {
              atm_locator_reset_page: {
                bind: 'reset'
              },
              atm_locator_close_control_veil: {
                bind: 'reset'
              },
              global_atm_locator_welcome_page: {
                bind: 'init-page'
              },
              global_storage_check_mobile_services: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              global_atm_locator_init_page: {
                bind: 'init-page'
              },
              atm_locator_init_page: {
                bind: 'init-page'
              },
              global_atm_locator_check_mobile_service_init_page: {
                bind: 'init-page'
              },
              atm_locator_access_token_error: {
                bind: 'access-token-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        tag: 'glomo-navigation-handler',
        type: 'UI',
        properties: {
          continue: 'search-place',
          backAction: 'navigate-to-previous-page',
          enableLoginParams: true,
          cellsConnections: {
            in: {
              navigation_atm_locator_back_request: {
                bind: 'goBack'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'goBack'
              },
              atm_locator_navigate_atm_locator_to_search_place: {
                bind: 'navigate'
              },
              atm_locator_navigate_to_page: {
                bind: 'navigateToPage'
              },
              atm_locator_navigate_to_page_is_logged: {
                bind: 'navigateToPageIsLogged'
              },
              show_page_search_place: {
                bind: 'navigate'
              }
            },
            out: {
              global_analytics_reset_data: {
                bind: 'navigate-to-previous-page'
              },
              navigation_atm_locator_to_previous_page: {
                bind: 'navigate-to-previous-page',
                backStep: true
              },
              navigation_atm_locator_to_search_place: {
                bind: 'navigation-to-search-place',
                link: {
                  page: 'searchPlace'
                }
              },
              navigation_atm_locator_to_pois_detail: {
                bind: 'navigation-to-pois-detail',
                link: {
                  page: 'poisDetail',
                  params: {
                    id: 'poisId',
                    poisId: 'poisId',
                    type: 'type'
                  }
                }
              },
              navigation_atm_locator_to_request_branch_appointment: {
                bind: 'navigation-to-request-branch-appointment',
                analytics: ANALYTICS_REQUEST_BRANCH_APPOINTMENT.APP_ON_CLICK_START,
                link: {
                  page: 'requestBranchAppointment'
                }
              },
              navigation_atm_locator_to_request_branch_appointment_success: {
                bind: 'navigation-to-request-branch-appointment-success',
                link: {
                  page: 'requestBranchAppointmentDetail'
                }
              },
              navigation_atm_locator_to_navigation_to_login: {
                bind: 'navigation-to-login',
                nativeLink: {
                  page: 'nativeLogin',
                  params: {
                    pageAfterLogin: 'pageAfterLogin'
                  },
                  cleanUntil: 'atmLocator'
                }
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
          leftIcon: 'coronita:back-mini',
          className: '',
          variant: 'primary-alt',
          leftIconText: 'cells-molecule-header-spherica-back',
          titleName: 'glomo-atm-locator-header-title',
          cellsConnections: {
            out: {
              navigation_atm_locator_back_request: {
                bind: 'click-left-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-input-spherica',
        properties: {
          className: 'input-lateral-padding',
          isIconButtonDisabled: true,
          hidden: true,
          icon: 'coronita:search',
          iconVisibility: 'always',
          extraIcon: 'coronita:close',
          label: 'cells-input-place-placeholder',
          type: 'text',
          iconSize: 24,
          readonly: true,
          id: 'inputMap',
          excludeCurrentTargetOnFocusEvent: true,
          cellsConnections: {
            in: {
              atm_locator_search_value: {
                bind: 'value'
              },
              atm_locator_reset_page: {
                bind: 'clearInput'
              },
              atm_locator_hide_component: {
                bind: 'hidden'
              },
              atm_locator_reset_show_component: {
                bind: 'hidden'
              }
            },
            out: {
              atm_locator_navigate_atm_locator_to_search_place: {
                bind: 'cells-molecule-input-focus'
              },
              atm_locator_clean_input_place: {
                bind: 'cells-molecule-input-clear'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-options-list-spherica',
        properties: {
          className: '',
          iconSize: '16',
          hidden: true,
          items: checkItemsList,
          mandatoryChecked: true,
          cellsConnections: {
            in: {
              atm_locator_hide_component: {
                bind: 'hidden'
              },
              atm_locator_reset_show_component: {
                bind: 'hidden'
              },
              atm_locator_filter_notification: {
                bind: 'cleanAndCheckOne'
              }
            },
            out: {
              atm_locator_last_item_checked: {
                bind: 'last-item-checked'
              },
              atm_locator_options: {
                bind: 'items-checked'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-atm-locator-spherica',
        properties: {
          className: 'location-btn-size-m card-detail-options-center',
          locationDefault: CONFIG.mapsLocationDefault,
          apiKey: CONFIG.mapsApiKey,
          largeMarker: true,
          showItemLink: false,
          offsetHeightItemLink: 57,
          checkGpsEnabled: !!CONFIG.nativeShell && !isNativeIos,
          nativeGeolocation: !!CONFIG.nativeShell,
          timeoutLocation: 3000,
          centerToLocationBtnSize: 22,
          collapsibleListClass: 'full-screen',
          disableCollapsedListInPoiSelection: true,
          enableModalRoute: true,
          enableFullAddress: true,
          forceShare: true,
          isNativeIos,
          cellsConnections: {
            in: {
              atm_locator_reset_page: {
                bind: 'reset'
              },
              atm_locator_location_default: {
                bind: 'location'
              },
              global_atm_locator_set_location: {
                bind: 'setLocation'
              },
              atm_locator_retrieved_pois: {
                bind: 'showMessageNoPois'
              },
              atm_locator_search_value: {
                bind: 'closeDetail'
              },
              atm_locator_set_pois_details: {
                bind: 'shareDetails'
              },
              atm_locator_hide_component: {
                bind: 'hidden'
              },
              atm_locator_reset_show_component: {
                bind: 'hidden'
              },
              atm_locator_start_location: {
                bind: 'init'
              },
              global_atm_locator_social_sharing_retry: {
                bind: 'shareDeatils'
              },
              digital_appointment_active_turn: {
                bind: 'showItemLink'
              },
              global_storage_get_mobile_services_success: {
                bind: 'mobileServices'
              },
              global_storage_get_mobile_services_error: {
                bind: 'mobileServices'
              },
              atm_locator_request_route_location: {
                bind: 'openRoute'
              },
              atm_locator_options: {
                bind: 'resetTooltipState'
              }
            },
            out: {
              global_logout_sesion_expiration: {
                bind: 'global-logout-sesion'
              },
              atm_locator_init_location: {
                bind: 'init-location'
              },
              global_action_launcher_maps: {
                bind: 'destination-selected'
              },
              atm_locator_page_share_social_sharing: {
                bind: 'on-click-atm-share'
              },
              atm_locator_open_information_modal_spherica: {
                bind: 'open-external-app-information-modal'
              },
              atm_locator_get_pois: {
                bind: 'cells-map-get-pois'
              },
              atm_locator_search_new_area: {
                bind: 'search-new-area'
              },
              atm_locator_pois_detail_view: {
                bind: 'item-selected'
              },
              atm_locator_navigate_to_pois_detail: {
                bind: 'on-click-detail-selected'
              },
              global_atm_locator_current_position: {
                bind: 'set-me-location'
              },
              atm_locator_without_results: {
                bind: 'show-message-no-pois'
              },
              atm_locator_no_nearby_results: {
                bind: 'show-no-nearby-results-modal'
              },
              atm_locator_navigate_atm_locator_to_search_place: {
                bind: 'show-no-nearby-results-modal'
              },
              atm_locator_clean_input_place: {
                bind: 'show-no-nearby-results-modal'
              },
              atm_locator_set_type: {
                bind: 'set-poi-type'
              },
              atm_locator_set_id: {
                bind: 'set-poi-id'
              },
              global_atm_locator_geolocation_error: {
                bind: 'glomo-atm-locator-geolocation-error'
              },
              atm_locator_get_pois_default_location: {
                bind: 'geolocation-error'
              },
              atm_locator_show_settings_dialog: {
                bind: 'open-device-permissions-settings-modal'
              },
              atm_locator_click_digital_appointment_icon: {
                bind: 'click-digital-appointment-icon'
              },
              atm_locator_click_digital_appointment_icon_detail: {
                bind: 'on-digital-turn-selected'
              },
              atm_locator_selected_atm: {
                bind: 'selected-changed'
              },
              atm_locator_list_link_clicked: {
                bind: 'cells-collapsible-list-link-clicked'
              },
              atm_locator_navigate_to_request_branch_appointment_success: {
                bind: 'cells-collapsible-list-link-clicked'
              },
              atm_locator_location_plugin_granted: {
                bind: 'location-permissions-displayed-granted',
                analytics: ANALYTICS_ATM_LOCATOR.internalLink('locationModalPermission', 'aceptar', 'informacion')
              },
              atm_locator_location_plugin_denied: {
                bind: 'location-permissions-displayed-denied',
                analytics: ANALYTICS_ATM_LOCATOR.internalLink('locationModalPermission', 'rechazar', 'informacion')
              },
              atm_locator_listado: {
                bind: 'full-list-state',
                analytics: ANALYTICS_ATM_LOCATOR.pageView('list', 'listado')
              },
              atm_locator_init_listado: {
                bind: 'init-full-list-state',
                analytics: ANALYTICS_ATM_LOCATOR.pageView('list', 'listado')
              },
              atm_locator_view_map: {
                bind: 'atm-locator-view-map',
                analytics: ANALYTICS_ATM_LOCATOR.pageView('map', 'mapa')
              }
            }
          }
        }
      }
    ]
  };

  const dms = [
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-bgadp-user-dm',
      properties: {
        host: CONFIG.globalServices.hostGrantingTicket,
        consumerId: CONFIG.globalServices.consumerIdAnonymous,
        country: 'mx',
        native: !!CONFIG.native,
        grantingTicketApiVersion: CONFIG.globalServices.versions.grantingTicket,
        cellsConnections: {
          in: {
            atm_locator_get_gt_public: {
              bind: 'userAnonymous'
            }
          },
          out: {
            global_atm_locator_welcome_page: {
              bind: 'login-anonymous-request-success'
            },
            global_storage_check_mobile_services: {
              bind: 'login-anonymous-request-success'
            },
            global_atm_locator_init_page: {
              bind: 'login-anonymous-request-success'
            },
            atm_locator_init_page: {
              bind: 'login-anonymous-request-success'
            },
            global_atm_locator_check_mobile_service_init_page: {
              bind: 'login-anonymous-request-success'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-global-apis-pois',
      properties: {
        listButtonLabelDigitalAppointment: 'cells-collapsible-list-digital-appointment-spherica',
        waitingTimeLabel: 'glomo-atm-locator-check-waiting-time-spherica',
        host: CONFIG.globalServices.host,
        alternateHost: CONFIG.globalServices.hostAkamai,
        version: CONFIG.globalServices.versions.pois,
        native: !!CONFIG.native,
        type: 'branch',
        poisOperations: poisOperations,
        addPoiInLinkList: true,
        requiresTsec: true,
        requiredToken: requiredTokenATM,
        poisTypes: poisTypes,
        atmTypes: atmTypes,
        filterRepeatingAtms: true,
        camelizePoi: true,
        showDigitalAppointment: true,
        showWaitingTimeInfoInList: true,
        notValidateUserLoggedInDigitalAppointment: true,
        enableTranslateFullAddress: true,
        isLogged: true,
        cellsConnections: {
          in: {
            global_search_place_input_place: {
              bind: 'place'
            },
            atm_locator_options: {
              bind: 'filter'
            },
            navigation_from_deep_link_to_operations: {
              bind: 'setFilterNotification'
            },
            atm_locator_init_location: {
              bind: 'location'
            },
            atm_locator_get_pois: {
              bind: 'init'
            },
            atm_locator_search_new_area: {
              bind: 'getPois'
            },
            global_atm_locator_network_error_try: {
              bind: 'getPois'
            },
            navigate_to_closest_poi: {
              bind: 'setContinueWithParams'
            },
            atm_locator_init_page: {
              bind: 'controlNavigationToPoisDetail'
            },
            global_opened_modal: {
              bind: 'openedModal'
            },
            atm_locator_set_type: {
              bind: 'type'
            },
            atm_locator_set_id: {
              bind: 'poisId'
            },
            atm_locator_reset_page: {
              bind: 'reset'
            },
            'global-auth-token': {
              bind: 'handleToken'
            },
            global_atm_locator_init_page: {
              bind: 'start'
            },
            global_anonymous_login_error: {
              bind: 'handleAnonymousLoginError'
            },
            atm_locator_get_pois_default_location: {
              bind: 'init'
            },
            atm_locator_clean_input_place: {
              bind: 'clearSearchValue'
            },
            atm_locator_show_digital_appointnments: {
              bind: 'showDigitalAppointment'
            },
            atm_locator_show_digital_appointnments_is_logged: {
              bind: 'showDigitalAppointment'
            },
            value_feature_flag_glomo_atm_branch_locator: {
              bind: 'featureFlagPois'
            },
            flag_minior_account: {
              bind: 'isGlomoMiniorAccount'
            },
            flag_parent_account: {
              bind: 'isGlomoParentAccount'
            },
            check_branch_appointment_alternative_version: {
              bind: 'check-branch-appointment-active-version'
            }
          },
          out: {
            atm_locator_location_default: {
              bind: 'set-location-default'
            },
            global_atm_locator_set_location: {
              bind: 'set-location'
            },
            atm_locator_search_value: {
              bind: 'search-value-changed'
            },
            atm_locator_retrieved_pois: {
              bind: 'set-pois-list'
            },
            atm_locator_pois_retrieved_error: {
              bind: 'error-on-get-pois',
              analytics: ANALYTICS_ATM_LOCATOR.PAGE_VIEW_BACKEND_ERROR
            },
            global_atm_locator_filtering_pois_error: {
              bind: 'error-filtering-pois'
            },
            atm_locator_open_control_veil: {
              bind: 'open-control-veil'
            },
            atm_locator_close_control_veil: {
              bind: 'close-control-veil'
            },
            atm_locator_pois_detail_view: {
              bind: 'item-selected'
            },
            atm_locator_navigate_to_pois_detail: {
              bind: 'navigation-to-pois-detail'
            },
            atm_locator_set_pois_details: {
              bind: 'set-pois-details'
            },
            atm_locator_show_component: {
              bind: 'atm-locator-show-component'
            },
            atm_locator_hide_component: {
              bind: 'atm-locator-hide-component'
            },
            atm_locator_reset_show_component: {
              bind: 'atm-locator-reset-show-component'
            },
            atm_locator_reset_hide_component: {
              bind: 'atm-locator-reset-hide-component'
            },
            atm_locator_start_location: {
              bind: 'atm-locator-start-location'
            },
            atm_locator_filter_notification: {
              bind: 'send-filter-array'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-atm-locator-dm-mx',
      familyPath: 'glomo-atm-locator-dm',
      properties: {
        isSpherica: true,
        host: CONFIG.globalServices.host,
        version: CONFIG.globalServices.versions.pois,
        native: !!CONFIG.native,
        requiredToken: requiredTokenATM,
        disableDynamicTitle: true,
        snackbarMaxLines: 10,
        disableCheckActive: true,
        newDigitalProvider: CONFIG.newDigitalProvider,
        nameFeatureFlag: 'glomo.atm.branch.locator',
        nameFlagMigration: 'glomo.atm.branch.migration',
        cellsConnections: {
          in: {
            atm_locator_init_page: {
              bind: 'start'
            },
            atm_locator_selected_atm: {
              bind: 'selected'
            },
            atm_locator_retrieved_pois: {
              bind: 'setBranchList'
            },
            atm_locator_show_settings_dialog: {
              bind: 'showSettingsDialog'
            },
            atm_locator_access_token_error: {
              bind: 'getGtPublic'
            },
            atm_locator_last_item_checked: {
              bind: 'showInfoLastItemChecked'
            },
            atm_locator_without_results: {
              bind: 'showInfoWithoutResults'
            },
            atm_locator_pois_retrieved_error: {
              bind: 'showErrorOnGetPois'
            },
            global_storage_get_reminded_success: {
              bind: 'enableDigitalAppointment'
            },
            global_storage_get_reminded_error: {
              bind: 'disableDigitalAppointment'
            },
            atm_locator_open_native_settings: {
              bind: 'openNativeSettings'
            },
            atm_locator_click_digital_appointment_icon: {
              bind: 'checkActiveTurn'
            },
            atm_locator_click_digital_appointment_icon_detail: {
              bind: 'checkActiveTurn'
            },
            global_storage_get_active_turn_success: {
              bind: 'setActiveTurn'
            },
            atm_locator_pois_detail_view: {
              bind: 'navigateToPoisDetail'
            },
            atm_locator_navigate_to_pois_detail: {
              bind: 'navigateToPoisDetail'
            },
            atm_locator_navigate_to_request_branch_appointment_success: {
              bind: 'navigateToRequestBranchAppointmentSuccess'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            },
            global_atm_locator_active_turn_modal_accept: {
              bind: 'navigateToRequestBranchAppointmentSuccess'
            },
            flag_minior_account: {
              bind: 'isGlomoMiniorAccount'
            },
            flag_parent_account: {
              bind: 'isGlomoParentAccount'
            },
            updated_poi_success: {
              bind: 'branchOptions'
            },
            updated_poi_error: {
              bind: 'branchOptions'
            },
            get_digital_active_turn_success: {
              bind: 'getDigitalAppointmentSuccess'
            },
            atm_locator_view_map: {
              bind: 'handleNavigateSearchPlace'
            },
            blue_set_direction_navigate: {
              bind: 'directionPlaceFromBlue'
            },
            blue_flag_show_search_place: {
              bind: 'openPageSearchPlace'
            }
          },
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'atm-locator-open-modal-with-settings'
            },
            atm_locator_open_information_modal_spherica_not_available_appointments_list: {
              bind: 'glomo-branch-appointment-not-available-appointments-list'
            },
            atm_open_native_settings: {
              bind: 'open-native-settings'
            },
            atm_pois_detail_set_poi: {
              bind: 'set-poi-detail',
              link: {
                page: 'poisDetail'
              }
            },
            atm_locator_show_digital_appointnments: {
              bind: 'show-digital-appointnments'
            },
            atm_locator_show_digital_appointnments_is_logged: {
              bind: 'atm-locator-show-digital-appointnments'
            },
            global_get_from_storage: {
              bind: 'get-from-local-storage'
            },
            global_set_in_storage: {
              bind: 'set-in-local-storage'
            },
            atm_locator_open_control_veil: {
              bind: 'open-control-veil'
            },
            atm_locator_close_control_veil: {
              bind: 'close-control-veil'
            },
            atm_locator_get_gt_public: {
              bind: 'get-gt-public'
            },
            global_retry_error: {
              bind: 'send-error-on-get-atm-locator'
            },
            global_message_snackbar: {
              bind: 'show-message-snackbar'
            },
            digital_appointment_active_turn: {
              bind: 'active-turn-changed'
            },
            digital_turn_open_channel: {
              bind: 'navigation-to-request-branch-appointment'
            },
            atm_locator_navigate_to_page: {
              bind: 'atm-locator-navigate-to-page'
            },
            atm_locator_navigate_to_page_is_logged: {
              bind: 'atm-locator-navigate-to-page-is-logged'
            },
            request_branch_appointment_list_channel: {
              bind: 'branch-appointment-list'
            },
            branch_operations_data: {
              bind: 'request-branch-operations-data'
            },
            atm_locator_active_turn_modal: {
              bind: 'active-turn-modal',
              analytics: ANALYTICS_REQUEST_BRANCH_APPOINTMENT.generateFootPrint('ya se dispone de turno', true),
              featureFlag: ANALYTICS_REQUEST_BRANCH_APPOINTMENT.ANALYTICS_FEATURE_FLAG_REQUEST_BRANCH_APPOINTMENT.ACTIVE_TURN
            },
            value_feature_flag_glomo_atm_branch_locator: {
              bind: 'value-feature-flag-glomo-atm-branch-locator'
            },
            get_appointment_digital_appointments: {
              bind: 'get-appointment-digital-appointments'
            },
            blue_show_search_place: {
              bind: 'navigation-to-search-place',
              link: {
                page: 'searchPlace'
              }
            },
            set_direction_input_value: {
              bind: 'send-direction-search-place'
            },
            show_page_search_place: {
              bind: 'show-no-nearby-results-modal'
            }
          },
          params: {
            userIsLogged: 'global_user_logged',
            selected: 'selectedBranch',
            user: 'global_login_success_indicators'
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-controller-branch-appointment-management-mx',
      familyPath: '@glomo-web-components/bbva-controller-branch-appointment-management-mx',
      render: 'litElement',
      properties: {
        nameDigitalFlagMigration: 'glomo.atm.branch.migrationAppoiments',
        cellsConnections: {
          in: {
            branch_operations_data: {
              bind: 'getCatalogRecords'
            },
            success_on_get_branch_records: {
              bind: 'handleCatalogProvider'
            },
            error_on_get_branch_records: {
              bind: 'handleResponseError'
            },
            api_dm_error_on_get_branch_records: {
              bind: 'handleResponseError'
            },
            check_branch_appointment_alternative_version: {
              bind: 'checkBranchAppointment'
            },
            get_digital_appointments_success: {
              bind: 'handleDigitalResponse'
            },
            get_digital_appointments_error: {
              bind: 'functionConsole'
            },
            get_appointment_digital_appointments: {
              bind: 'getScheduledDigitalAppointments'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            }
          },
          out: {
            request_branch_catalog_records: {
              bind: 'get-branch-catalog-records'
            },
            updated_poi_success: {
              bind: 'poi-update-success'
            },
            updated_poi_error: {
              bind: 'poi-update-error'
            },
            request_digital_appointments: {
              bind: 'request-digital-appointments'
            },
            get_digital_active_turn_success: {
              bind: 'get-digital-active-turn-success'
            },
            get_digital_active_turn_error: {
              bind: 'get-digital-active-turn-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-local-branch-operations-api-dm',
      familyPath: '@glomo-web-components/bbva-local-branch-operations-api-dm',
      render: 'litElement',
      properties: {
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        requiredToken: requiredTokenATM,
        version: CONFIG.globalServices.versions.apiBranchOperation,
        cellsConnections: {
          in: {
            request_branch_catalog_records: {
              bind: 'getBranchRecords'
            }
          },
          out: {
            success_on_get_branch_records: {
              bind: 'get-branch-records-success'
            },
            error_on_get_branch_records: {
              bind: 'get-branch-records-error'
            },
            api_dm_error_on_get_branch_records: {
              bind: 'api-dm-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-local-digital-appointments-api-dm',
      render: 'litElement',
      familyPath: '@glomo-web-components/bbva-local-digital-appointments-api-dm',
      properties: {
        host: CONFIG.globalServices.host,
        version: CONFIG.globalServices.versions.digitalAppointments,
        native: !!CONFIG.native,
        requiredToken: requiredTokenATM,
        cellsConnections: {
          in: {
            request_digital_appointments: {
              bind: 'getDigitalAppointments'
            }
          },
          out: {
            get_digital_appointments_success: {
              bind: 'get-digital-appointments-success'
            },
            get_digital_appointments_error: {
              bind: 'get-digital-appointments-error'
            },
            delete_digital_appointments_success: {
              bind: 'delete-digital-appointments-success'
            },
            delete_digital_appointments_error: {
              bind: 'delete-digital-appointments-error'
            }
          }
        }
      }
    }
  ];

  const connectionsIn = utils.connectionsIn(base);
  Object.assign(connectionsIn('cells-spinner-veil'), {
    atm_locator_open_control_veil: {
      bind: 'openVeil'
    },
    atm_locator_close_control_veil: {
      bind: 'closeVeil'
    }
  });

  SPINNER.tag = 'cells-spinner-veil-spherica';

  SPINNER.properties = {
    ...SPINNER.properties,
    className: 'solid-spinner'
  };

  if (CONFIG.nativeShell) {
    dms.push({
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-nativesettings',
      properties: {
        cellsConnections: {
          in: {
            atm_open_native_settings: {
              bind: 'openSetting'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-socialsharing',
      properties: {
        cellsConnections: {
          in: {
            atm_locator_page_share_social_sharing: {
              bind: 'share'
            }
          },
          out: {}
        }
      }
    });
    addActionLauncherChannels(base.components, ACTION_LAUNCHER_EVENTS, CONFIG, 'atm_locator');
  }

  const notificationToastCancelTicket = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-notification-toast',
    familyPath: '@bbva-spherica-components/bbva-notification-toast',
    render: 'litElement',
    properties: {
      alertText: 'glomo-request-branch-appointment-detail-toast-message-spherica',
      className: 'u-max-width--2 u-margin--1',
      type: 'success',
      iconExplainer: 'coronita:correct',
      duration: '6000',
      autoHide: 'true',
      fixedBottom: 'true',
      cellsConnections: {
        in: {
          request_branch_appointment_show_toast_delete_ticket: {
            bind: 'show'
          }
        }
      }
    }
  };


  base.components.push(
    glomoAlertManagerSpherica,
    notificationToastCancelTicket,
    ...dms
  );

  localStorageApp.addOutStorageChannels(base.components, ['atm_visited', 'mobile_services',
    'active_turn'], CONFIG);
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'error-on-get-atm-locator',
      acceptRetry: { bind: 'getPois', component: 'cells-dm-global-apis-pois' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);

  return base;
};
