/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const UTILS = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName, getShortFormatDate, getLanguage, getCountry, getMediumFormatDate } = UTILS;
  const PAGE_NAME = 'requestBranchAppointmentSuccess';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const SPINNER = UTILS.SPINNER(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_requestBranchAppointment')(CONFIG);
  const { addActionLauncherChannels } = require('./common/_action-launcher');
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const isSpherica = sphericaPageUtils.isSpherica();

  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const ACTION_LAUNCHER_EVENTS = [
    'open-maps'
  ];

  const NAVIGATION_TO_ATM_LOCATOR_LINK = {
    page: 'atmLocator',
    cleanUntil: 'poisDetail',
    skipHistory: true
  };

  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/request-branch-appointment-success'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
        extraHeaderClass: 'bbva-core-blue',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: IS_NATIVE_IOS,
        footerHeight: 112
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        footerHeight: 0
      }
    },
    components: [
      SPINNER,
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
              ['__bridge_app_' + PAGE_NAME]: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME]: {
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-dashboard',
          currentPage: PAGE_NAME,
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'handleNativeBackButton'
              },
              global_opened_modal: {
                bind: 'openedModal'
              },
              [PAGE_NAME + '_back_header_request_action']: {
                bind: 'goBack'
              },
              [PAGE_NAME + '_back_request_action']: {
                bind: 'goBack'
              }
            },
            out: {
              global_alert_modal_close: {
                bind: 'navigate-native-back-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        properties: {
          className: 'request-branch-appointment',
          formatDate: getMediumFormatDate(),
          language: getLanguage(),
          withoutHead: true,
          hideDivider: true,
          cellsConnections: {
            in: {
              open_request_branch_appointment_success: {
                bind: 'result'
              }
            },
            out: {
              [PAGE_NAME + '_back_request_action']: {
                bind: 'go-to-next'
              },
              [getChannelName + '_download_receipt_capture']: {
                bind: 'share-receipt-capture',
                analytics: ANALYTICS.DOWNLOAD_LINK,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_REQUEST_BRANCH_APPOINTMENT.LINK
              },
              request_branch_appointment_delete_operation: {
                bind: 'delete-operation'
              },
              [PAGE_NAME + '_exit_request_action']: {
                bind: 'cells-successful-response-click-primary',
                link: NAVIGATION_TO_ATM_LOCATOR_LINK
              },
              request_branch_appointment_route_operation: {
                bind: 'route-operation'
              },
              request_branch_appointment_message_indications: {
                bind: 'on-click-message'
              }
            }
          }
        },
        propertiesSpherica: {
          withoutHead: false,
          withSuccessHead: true,
          disableButtons: true
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-request-branch-appointment-dm-mx',
        familyPath: 'glomo-request-branch-appointment-dm',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          newDigitalProvider: CONFIG.newDigitalProvider,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              digital_turn_open_channel: {
                bind: 'branchDetail'
              },
              request_branch_appointment_ticket_response: {
                bind: 'itemSelected'
              },
              request_branch_appointment_delete_operation: {
                bind: 'deleteModal'
              },
              [getChannelName('_delete_appointment')]: {
                bind: 'setDeleteAppointmentTicketBody'
              },
              [getChannelName('init_page')]: {
                bind: 'initPage'
              },
              request_branch_appointment_route_operation: {
                bind: 'openRoute'
              },
              global_storage_get_mobile_services_success: {
                bind: 'mobileServices'
              },
              global_storage_get_mobile_services_error: {
                bind: 'mobileServices'
              },
              request_branch_appointment_message_indications: {
                bind: 'showInfoModalIndications'
              },
              [getChannelName('_delete_digital_appointments_success')]: {
                bind: 'successResponseDelete'
              },
              [getChannelName('_delete_digital_appointments_error')]: {
                bind: 'errorResponseDelete'
              },
              [getChannelName('api_dm_delete_digital_appointments_error')]: {
                bind: 'errorResponseDelete'
              }
            },
            out: {
              [getChannelName('_set_title_text')]: {
                bind: 'set-title-text'
              },
              [getChannelName('_set_body_text')]: {
                bind: 'set-body-text'
              },
              [getChannelName('_set_button_text')]: {
                bind: 'set-button-text'
              },
              [getChannelName('_set_link_text')]: {
                bind: 'set-link-text'
              },
              [getChannelName('_open_help_modal')]: {
                bind: 'open-help-modal'
              },
              [getChannelName + '_appointment_receipt_info']: {
                bind: 'share-appointment-receipt'
              },
              request_branch_appointment_show_toast_delete_ticket: {
                bind: 'show-success-notification-toast-delete-ticket',
                link: NAVIGATION_TO_ATM_LOCATOR_LINK
              },
              global_retry_error: {
                bind: 'retry-error'
              },
              [getChannelName('_back_to_entry_point')]: {
                bind: 'back-to-entry-point',
                backStep: true
              },
              global_action_launcher_maps: {
                bind: 'destination-selected'
              },
              global_open_alert_manager: {
                bind: 'set-info-modal-properties'
              },
              [getChannelName('_delete_current_schedule')]: {
                bind: 'delete-current-schedule'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                request_branch_appointment_success_set_header_text: {
                  bind: 'set-header-text'
                },
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'set-info-modal-properties'
                }
              }
            },
            remove: {
              out: [
                'global_open_alert_manager'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-analyticmanager-request-branch-appointment',
        familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-and-structure',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              request_branch_appointment_persist_data: {
                bind: 'data'
              },
              [getChannelName('init_page')]: {
                bind: 'appCompleted'
              }
            },
            out: {
              request_branch_appointment_app_completed: {
                bind: 'analytics-app-completed',
                analytics: ANALYTICS.APP_COMPLETED
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
              [getChannelName('_request_delete_digital_appointments')]: {
                bind: 'deleteDigitalAppointments'
              }
            },
            out: {
              [getChannelName('_delete_digital_appointments_success')]: {
                bind: 'delete-digital-appointments-success'
              },
              [getChannelName('_delete_digital_appointments_error')]: {
                bind: 'delete-digital-appointments-error'
              },
              [getChannelName('api_dm_delete_digital_appointments_error')]: {
                bind: 'api-dm-error'
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
              [getChannelName('_delete_current_schedule')]: {
                bind: 'deleteDigitalTurnFromSuccessPage'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              }
            },
            out: {
              [getChannelName('_request_delete_digital_appointments')]: {
                bind: 'request-delete-digital-appointments'
              }
            }
          }
        }
      }
    ]
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          request_branch_appointment_success_set_title: {
            bind: 'titleName'
          }
        },
        out: {
          [getChannelName('_HEADER_CLOSE')]: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header',
      rightIconText: 'bbva-header-main-close-aria-label',
      variant: 'primary'
    }
  };

  const helpModalCancelTicket = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      modalType: 'warning',
      titleIcon: 'bbva:warning',
      cellsConnections: {
        in: {
          [getChannelName('_set_title_text')]: {
            bind: 'titleText'
          },
          [getChannelName('_set_body_text')]: {
            bind: 'bodyText'
          },
          [getChannelName('_set_button_text')]: {
            bind: 'buttonText'
          },
          [getChannelName('_set_link_text')]: {
            bind: 'linkText'
          },
          [getChannelName('_open_help_modal')]: {
            bind: 'open'
          }
        },
        out: {
          [getChannelName('_delete_appointment')]: {
            bind: 'help-modal-footer-button-click'
          },
          [getChannelName('_help-modal-footer-link-click')]: {
            bind: 'help-modal-footer-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      titleIcon: 'spherica:warning',
      iOSFixedHeader: IS_NATIVE_IOS,
      className: 'u-modal-dark-red-icon',
      closeLabel: 'bbva-header-main-close-aria-label',
      newCellsConnections: {
        add: {
          in: {
            request_branch_appointment_success_set_header_text: {
              bind: 'headerText'
            }
          },
          out: {
            request_branch_appointment__help_modal_footer_button_click: {
              bind: 'help-modal-footer-button-click'
            }
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: getCountry(),
      language: getLanguage(),
      formatDate: getShortFormatDate(),
      sharedReceiptStyles: {
        receiptTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        info: {
          'padding': '0 rem',
          'margin-top': '0.125 rem',
          'background-color': 'none'
        },
        infoIcon: {
          'display': 'none'
        },
        infoMessage: {
          'font-weight': '100',
          'margin': '0 rem',
          'font-size': 'var(--cells-text-size-12, 12px)',
          'text-align': 'left',
          'background-color': 'none',
          'color': 'var(--bbva-500, #666666)'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName + '_download_receipt_capture']: {
            bind: 'captureReceipt'
          },
          [getChannelName + '_appointment_receipt_info']: {
            bind: 'result'
          },
          mobile_manage_operation: {
            bind: 'reset'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  base.components.push(header, helpModalCancelTicket, shareReceipt);

  addActionLauncherChannels(base.components, ACTION_LAUNCHER_EVENTS, CONFIG, PAGE_NAME);
  addRetryErrors(base)([
    {
      id: 'delete-ticket',
      acceptRetry: { bind: 'setDeleteAppointmentTicketBody', component: 'glomo-request-branch-appointment-dm-mx' },
      cancelRetry: { bind: 'cancelRetry', component: 'glomo-request-branch-appointment-dm-mx' },
      acceptCallForHelp: { bind: 'backToEntryPoint', component: 'glomo-request-branch-appointment-dm-mx' }
    }
  ]);

  return sphericaPageUtils.spherize(base);
};
