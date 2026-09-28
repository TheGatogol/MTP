'use strict';

module.exports = CONFIG => {
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const {addActionLauncherChannels} = require('./common/_action-launcher');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('poisDetail');
  const ANALYTICS_ATM_LOCATOR = require('./analytics/_atmLocator')(CONFIG);
  const ACTION_LAUNCHER_EVENTS = [
    'open-maps'
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
      params: {'type.id': 'KI'}
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
          }
        },
        out: {
          pois_detail_navigate_to_request_branch_appointment_success: {
            bind: 'alert-branch-detail-active-turn-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: 'pois-detail',
    currentPage: {
      url: '/pois/:type/:poisId',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: '',
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            navigate_to_closest_poi: {
              bind: 'resetLayerScroll'
            },
            navigation_pois_detail_to_previous_page: {
              bind: 'resetLayerScroll'
            },
            pois_detail_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'poisDetail',
          cache: [ 'poisDetail' ],
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_poisDetail: {
                bind: 'init'
              }
            },
            out: {
              pois_detail_reset_page: {
                bind: 'reset'
              },
              pois_detail_init_page: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              global_pois_detail_check_mobile_service_init_page: {
                bind: 'init-page'
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
          continue: 'request-branch-appointment',
          backAction: 'header-left-button',
          enableLoginParams: true,
          cellsConnections: {
            in: {
              navigation_pois_detail_back_request: {
                bind: 'goBack'
              },
              pois_detail_navigate_to_page_is_logged: {
                bind: 'navigateToPageIsLogged'
              }
            },
            out: {
              navigation_pois_detail_to_previous_page: {
                bind: 'header-left-button',
                backStep: true
              },
              navigation_to_request_branch_appointment: {
                bind: 'navigation-to-request-branch-appointment',
                link: {
                  page: 'requestBranchAppointment',
                  cleanUntil: 'poisDetail'
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
                  cleanUntil: 'poisDetail'
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
          className: '',
          rightIconText: 'cells-molecule-header-spherica-close',
          variant: 'primary',
          rightIcon: 'coronita:close',
          cellsConnections: {
            in: {
              pois_detail_set_pois_type: {
                bind: 'titleName'
              }
            },
            out: {
              navigation_pois_detail_back_request: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-atm-branch-detail-spherica',
        properties: {
          className: 'responsive-text',
          skeletonContainer: true,
          forceUpdateClosestPois: true,
          operationsIconSize: 24,
          externalAppInformationCode: 'POIS-DETAIL-OPEN-EXTERNAL-APP-INFORMATION-MODAL',
          isNativeIos,
          cellsConnections: {
            in: {
              global_atm_locator_current_position: {
                bind: 'location'
              },
              pois_detail_set_poi: {
                bind: 'pois'
              },
              pois_detail_reset_page: {
                bind: 'reset'
              },
              global_atm_locator_set_location: {
                bind: 'location'
              },
              global_storage_get_mobile_services_success: {
                bind: 'mobileServices'
              },
              global_storage_get_mobile_services_error: {
                bind: 'mobileServices'
              },
              pois_detail_request_route_location: {
                bind: 'openRoute'
              },
              flag_minior_account: {
                bind: 'isGlomoMiniorAccount'
              },
              flag_parent_account: {
                bind: 'isGlomoParentAccount'
              },
              atm_pois_detail_set_poi: {
                bind: 'pois'
              }
            },
            out: {
              atm_locator_open_information_modal_spherica: {
                bind: 'on-click-operations-route-information'
              },
              global_logout_sesion_expiration: {
                bind: 'pois-detail-sesion'
              },
              global_action_launcher_maps: {
                bind: 'send-route-location'
              },
              atm_share_page_social_sharing: {
                bind: 'on-click-operations-share'
              },
              pois_detail_click_digital_appointment_icon_detail: {
                bind: 'on-click-operations-turn'
              },
              navigate_to_closest_poi: {
                bind: 'navigate-to-pois',
                backStep: true
              },
              global_action_launcher_dialer: {
                bind: 'open-call-action'
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
      tag: 'glomo-atm-locator-dm-mx',
      familyPath: 'glomo-atm-locator-dm',
      properties: {
        isSpherica: true,
        errorId: 'error-on-get-atm-locator-detail',
        activeTurnModalCode: 'branch-detail-active-turn',
        nameFeatureFlag: 'glomo.atm.branch.locator',
        cellsConnections: {
          in: {
            pois_detail_pois_detail_error: {
              bind: 'showErrorOnGetPois'
            },
            digital_appointment_active_turn: {
              bind: 'activeTurn'
            },
            pois_detail_click_digital_appointment_icon_detail: {
              bind: 'checkActiveTurn'
            },
            pois_detail_navigate_to_request_branch_appointment_success: {
              bind: 'navigateToRequestBranchAppointmentSuccess'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            }
          },
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'atm-locator-open-modal-with-settings'
            },
            global_retry_error: {
              bind: 'send-error-on-get-atm-locator-detail'
            },
            digital_turn_open_channel: {
              bind: 'navigation-to-request-branch-appointment'
            },
            pois_detail_navigate_to_page_is_logged: {
              bind: 'atm-locator-navigate-to-page-is-logged'
            },
            atm_locator_navigate_to_request_branch_appointment: {
              bind: 'navigation-to-request-branch-appointment'
            },
            value_feature_flag_glomo_atm_branch_locator: {
              bind: 'value-feature-flag-glomo-atm-branch-locator'
            },
            feature_flag_list_branches_service_version: {
              bind: 'feature-flag-list-branches-service-version'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-analytics-atm-locator-manager',
      familyPath: 'glomo-atm-locator-dm',
      properties: {
        dynamicMethodsName: [
          'pageViewBranchDetail',
          'externalLinkBranchRoute',
          'externalLinkShareBranchDetail',
          'externalLinkScheduleBranchAppointment'
        ],
        cellsConnections: {
          in: {
            navigation_atm_locator_to_pois_detail: {
              bind: 'buildDynamicMethods'
            },
            pois_detail_init_page: {
              bind: 'pageViewBranchDetail'
            },
            atm_locator_open_information_modal: {
              bind: 'externalLinkBranchRoute'
            },
            atm_share_page_social_sharing: {
              bind: 'externalLinkShareBranchDetail'
            },
            pois_detail_click_digital_appointment_icon_detail: {
              bind: 'externalLinkScheduleBranchAppointment'
            }
          },
          out: {
            pois_detail_analytics_init_page: {
              bind: 'analytics-page-view-branch-detail',
              analytics: ANALYTICS_ATM_LOCATOR.pageView('detail', { bind: 'pagePageInfoLevel2'})
            },
            atm_locator_analytics_open_information_modal: {
              bind: 'analytics-external-link-branch-route',
              analytics: ANALYTICS_ATM_LOCATOR.externalLink('route', 'ruta')
            },
            atm_analytics_share_social_sharing: {
              bind: 'analytics-external-link-share-branch-detail',
              analytics: ANALYTICS_ATM_LOCATOR.externalLink('share', 'compartir')
            },
            pois_detail_analytics_click_digital_appointment_icon_detail: {
              bind: 'analytics-external-link-schedule-branch-appointment',
              analytics: ANALYTICS_ATM_LOCATOR.internalLink('appointment', 'agendar turno', { bind: 'pagePageInfoLevel2'})
            }
          },
          params: {
            type: 'type'
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-global-apis-pois',
      properties: {
        host: CONFIG.globalServices.host,
        alternateHost: CONFIG.globalServices.hostAkamai,
        version: CONFIG.globalServices.versions.pois,
        namespace: 'pois',
        location: CONFIG.mapsLocationDefault,
        native: !!CONFIG.native,
        requiresTsec: true,
        fullAddressDetail: true,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        formatSchedule: true,
        addAtmsInBranch: true,
        hideAtmInfo: true,
        withOutWeekendSchedule: true,
        momentInitialFormat: 'HH:mm',
        momentFormat: 'hh:mm a',
        poisTypes: poisTypes,
        addNearbyBranchOrAtms: true,
        listSizeNearestBranchOrAtm: 2,
        atmTypes: atmTypes,
        filterRepeatingAtms: true,
        camelizePoi: true,
        showDigitalAppointment: true,
        addAvailableServices: true,
        enableTranslateFullAddress: true,
        enableWaitTimeLabel: true,
        notValidateUserLoggedInDigitalAppointment: true,
        enableWaitingTimeClosest: true,
        enableLinkId: true,
        encryptedIdEstimated: true,
        decryptedIdEstimated: true,
        isLogged: true,
        cellsConnections: {
          in: {
            pois_detail_init_page: {
              bind: 'getPoiDetail'
            },
            navigation_atm_locator_to_pois_detail: {
              bind: 'itemSelected'
            },
            navigate_to_closest_poi: {
              bind: 'itemSelected'
            },
            pois_detail_estimated_time_success: {
              bind: 'setEstimatedWaitingTime'
            },
            atm_locator_show_digital_appointnments: {
              bind: 'showDigitalAppointment'
            },
            value_feature_flag_glomo_atm_branch_locator: {
              bind: 'featureFlagPois'
            },
            set_controller_estimate_waiting_time_v1: {
              bind: 'setEstimatedWaitingTime'
            }
          },
          out: {
            pois_detail_set_poi: {
              bind: 'set-poi-detail'
            },
            pois_detail_set_pois_type: {
              bind: 'set-pois-type'
            },
            pois_detail_estimated_time: {
              bind: 'pois-detail-estimated-time'
            },
            pois_detail_pois_detail_error: {
              bind: 'error-on-get-pois-detail'
            },
            get_branch_estimated_time_appoiment_detail_provider: {
              bind: 'get-branch-estimated-time-detail-provider'
            }
          },
          params: {
            poisId: 'poisId',
            type: 'type'
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-global-apis-branches',
      properties: {
        host: CONFIG.globalServices.host,
        estimatedTimeApiVersion: CONFIG.globalServices.versions.branches,
        native: !!CONFIG.native,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cellsConnections: {
          in: {
            pois_detail_estimated_time: {
              bind: 'getEstimatedTimeBranches'
            },
            feature_flag_list_branches_service_version: {
              bind: 'estimatedTimeApiVersion'
            }
          },
          out: {
            pois_detail_estimated_time_success: {
              bind: 'success-on-get-estimated-time-branches'
            },
            pois_detail_estimated_time_error: {
              bind: 'error-on-get-estimated-time-branches'
            }
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
            get_branch_estimated_time_appoiment_detail_provider: {
              bind: 'getBranchEstimatedTimeProvider'
            },
            success_response_digital_appoiments_time_attention: {
              bind: 'setControllerEstimatedWaitingTime'
            },
            error_response_digital_appoiments_time_attention: {
              bind: 'handleResponseError'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            }
          },
          out: {
            request_digital_appoiments_branch_atention: {
              bind: 'get-branch-estimated-time-attention'
            },
            set_controller_estimate_waiting_time_v1: {
              bind: 'set-controller-estimate-waiting-time-v1'
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
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cellsConnections: {
          in: {
            request_digital_appoiments_branch_atention: {
              bind: 'getDigitalIndicatorsServiceLevels'
            }
          },
          out: {
            success_response_digital_appoiments_time_attention: {
              bind: 'get-digital-indicators-service-level-success'
            },
            error_response_digital_appoiments_time_attention: {
              bind: 'get-digital-indicators-service-level-error'
            }
          }
        }
      }
    }
  ];

  if (CONFIG.nativeShell) {
    dms.push({
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-socialsharing',
      properties: {
        cellsConnections: {
          in: {
            atm_share_page_social_sharing: {
              bind: 'share'
            }
          }
        }
      }
    });

    addActionLauncherChannels(base.components, ACTION_LAUNCHER_EVENTS, CONFIG, 'pois_detail');
  }

  base.components.push(glomoAlertManagerSpherica);

  base.components.push(...dms);
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'error-on-get-atm-locator-detail',
      acceptRetry: { bind: 'getPoiDetail', component: 'cells-dm-global-apis-pois' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);
  return base;
};
