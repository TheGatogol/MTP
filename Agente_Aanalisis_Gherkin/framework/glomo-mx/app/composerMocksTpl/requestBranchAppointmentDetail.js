/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const UTILS = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName, getShortFormatDate, getCountry } = UTILS;
  const PAGE_NAME = 'requestBranchAppointmentDetail';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const SPINNER = UTILS.SPINNER(CONFIG);
  const LANGUAGE = UTILS.getLanguage();
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const isSpherica = sphericaPageUtils.isSpherica();

  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const localStorageRequestBranch = require('./common/_local-storage');
  const base = {
    currentPage: {
      url: '/request-branch-appointment-detail'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
        extraHeaderClass: 'header--evening'
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        className: `bg-light-grey ${IS_NATIVE_IOS ? 'ios-top-padding' : ''}`
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-request-branch-appointment-header-title-name',
          cellsConnections: {
            out: {
              [getChannelName('_on_click_header_return')]: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back-mini',
          className: 'header--core-grey header',
          leftIconText: 'bbva-header-main-return-aria-label',
          variant: 'primary-alt'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-handle-life-cycle',
        properties: {
          pageName: PAGE_NAME,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_requestBranchAppointmentDetail: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('_init_page')]: {
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
        zone: 'app__main',
        type: 'UI',
        tag: 'div',
        render: 'litElement',
        properties: {
          id: 'detailContainer',
          className: 'u-padding-bottom--1-5 u-padding-top--1-5 bg-secondary100'
        },
        propertiesSpherica: {
          className: 'u-margin--1 u-border-radius--1 u-padding--1 bg-core-lightened'
        }
      },
      {
        zone: 'detailContainer.',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin--0',
          fontWeight: '300',
          size: 'S',
          alignment: 'center',
          tag: 'div',
          cellsConnections: {
            in: {
              [getChannelName('_set_code_turn_text')]: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          alignment: 'left',
          fontType: 'body',
          size: 'M'
        }
      },
      {
        zone: 'detailContainer.',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin--0',
          fontWeight: '300',
          size: '5XL',
          alignment: 'center',
          tag: 'div',
          cellsConnections: {
            in: {
              [getChannelName('_set_code_turn_value')]: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          alignment: 'left',
          className: 'u-margin-top--0-5 u-text--book',
          fontType: 'title-default',
          size: '3XL'
        }
      },
      {
        zone: 'detailContainer.',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin-top--0-5 u-margin-bottom--0',
          fontWeight: '500',
          size: 'S',
          alignment: 'center',
          fontStyle: 'italic',
          tag: 'div',
          cellsConnections: {
            in: {
              [getChannelName('_set_date_value')]: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-margin-top--0-5 u-margin-bottom--0-5 u-text--italic',
          alignment: 'left',
          fontType: 'body',
          size: 'M'
        }
      },
      {
        zone: 'detailContainer.',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin-top--0 u-margin-bottom--0-5',
          fontWeight: '300',
          size: 'S',
          alignment: 'center',
          tag: 'div',
          cellsConnections: {
            in: {
              [getChannelName('_set_schedule_value')]: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          alignment: 'left',
          fontType: 'body',
          size: 'M',
          className: 'u-margin-top--0 u-margin-bottom--0-5 u-text--italic'
        }
      },
      {
        zone: 'detailContainer.',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-badge-default-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          fontWeight: '300',
          size: 'S',
          alignment: 'center',
          textColor: 'var(--bbva-core-blue)',
          fontStyle: 'italic',
          tag: 'div',
          cellsConnections: {
            in: {
              [getChannelName('_set_turn_status')]: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          alignment: 'left',
          ambient: 'primary-alt'
        }
      },
      ...(isSpherica ? [] : [ {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-operations-list-indicators',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_set_operations_list_properties')]: {
                bind: 'setProperties'
              }
            },
            out: {
              [getChannelName('_on_click_download_receipt')]: {
                bind: 'operation-download-click'
              },
              [getChannelName('_on_click_cancel_turn')]: {
                bind: 'operation-cancel-click'
              }
            }
          }
        }
      } ]),
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        tagSpherica: 'cells-icon-message-spherica',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_set_icon_message_properties')]: {
                bind: 'setProperties'
              }
            },
            out: {
              request_branch_appointment_open_info_modal_indications: {
                bind: 'link-clicked'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-margin--1'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-key-values-list',
        tagSpherica: 'cells-key-values-list-spherica',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_set_values_list_properties')]: {
                bind: 'setProperties'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-margin--1',
          noCustomClass: true,
          inline: true,
          noShowAdditionalAmount: true
        }
      },
      ...(isSpherica ? [ {
        zone: 'app__main',
        type: 'UI',
        tagSpherica: 'cells-operations-list-indicators-spherica',
        properties: {
          layoutIndicators: 'review',
          cellsConnections: {
            in: {
              request_branch_appointment_detail__set_operations_list_properties: {
                bind: 'setProperties'
              }
            },
            out: {
              request_branch_appointment_detail__on_click_download_receipt: {
                bind: 'operation-download-click'
              },
              request_branch_appointment_detail__on_click_cancel_turn: {
                bind: 'operation-cancel-click'
              }
            }
          }
        }
      } ] : []),
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        tagSpherica: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          country: getCountry(),
          language: LANGUAGE,
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
              'margin': '0px',
              'font-size': 'var(--cells-text-size-12, 12px)',
              'text-align': 'left',
              'background-color': 'none',
              'color': 'var(--bbva-500, #666666)'
            }
          },
          cellsConnections: {
            in: {
              [getChannelName('_download_receipt')]: {
                bind: 'captureReceipt'
              },
              [getChannelName('_set_result_info')]: {
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
      },
      {
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
              [getChannelName('_open_alert_help_modal')]: {
                bind: 'open'
              }
            },
            out: {
              [getChannelName('_help_modal_footer_button_click')]: {
                bind: 'help-modal-footer-button-click'
              },
              [getChannelName('_help_modal_footer_link_click')]: {
                bind: 'help-modal-footer-link-click'
              }
            }
          }
        },
        propertiesSpherica: {
          headerText: 'glomo-request-branch-appointment-help-modal-cancel-turn-header-text',
          iOSFixedHeader: IS_NATIVE_IOS,
          titleIcon: 'spherica:warning',
          className: 'u-modal-dark-red-icon',
          closeLabel: 'bbva-header-main-close-aria-label'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-request-branch-appointment-detail-dm-mx',
        familyPath: 'glomo-request-branch-appointment-detail-dm',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          dateFormat: getShortFormatDate(),
          shortFormatDate: 'dddd',
          cellsConnections: {
            in: {
              request_branch_appointment_list_channel: {
                bind: 'activeTurn'
              },
              global_login_success: {
                bind: 'customerDetail'
              },
              [getChannelName('_init_page')]: {
                bind: 'initPage'
              },
              [getChannelName('_on_click_download_receipt')]: {
                bind: 'onClickDownloadReceipt'
              },
              [getChannelName('_on_click_cancel_turn')]: {
                bind: 'onClickCancelTurn'
              },
              [getChannelName('_delete_digital_button_click')]: {
                bind: 'setDeleteAppointmentTicketBody'
              },
              [getChannelName('_help_modal_footer_link_click')]: {
                bind: 'footerLinkClick'
              },
              request_branch_appointment_open_info_modal_indications: {
                bind: 'showInfoModalIndications'
              },
              blue_redirect_request_branch_appointment_detail: {
                bind: 'activeTurn'
              }
            },
            out: {
              [getChannelName('_set_code_turn_text')]: {
                bind: 'set-code-turn-text'
              },
              [getChannelName('_set_code_turn_value')]: {
                bind: 'set-code-turn-value'
              },
              [getChannelName('_set_date_value')]: {
                bind: 'set-date-value'
              },
              [getChannelName('_set_schedule_value')]: {
                bind: 'set-schedule-value'
              },
              [getChannelName('_set_turn_status')]: {
                bind: 'set-turn-status'
              },
              [getChannelName('_set_operations_list_properties')]: {
                bind: 'set-operations-list-properties'
              },
              [getChannelName('_set_icon_message_properties')]: {
                bind: 'set-icon-message-properties'
              },
              [getChannelName('_set_values_list_properties')]: {
                bind: 'set-values-list-properties'
              },
              [getChannelName('_set_result_info')]: {
                bind: 'set-result-info'
              },
              [getChannelName('_download_receipt')]: {
                bind: 'download-receipt'
              },
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
              [getChannelName('_open_alert_help_modal')]: {
                bind: 'open-alert-help-modal'
              },
              [getChannelName('_back_to_entry_point')]: {
                bind: 'back-to-entry-point',
                backStep: true
              },
              request_branch_appointment_show_toast_delete_ticket: {
                bind: 'show-notification-toast',
                link: {
                  page: 'atmLocator',
                  cleanUntil: 'poisDetail',
                  skipHistory: true
                }
              },
              global_retry_error: {
                bind: 'retry-error'
              },
              global_open_alert_manager: {
                bind: 'set-info-modal-properties'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
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
              [getChannelName('_request_delete_appointment')]: {
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
              [getChannelName('_delete_digital_appointments_error')]: {
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
              [getChannelName('_help_modal_footer_button_click')]: {
                bind: 'getActiveTurn'
              },
              [getChannelName('_delete_digital_appointments_success')]: {
                bind: 'successDeleteAppointmentTicket'
              },
              [getChannelName('_delete_digital_appointments_error')]: {
                bind: 'errorDeleteAppointmentTicket'
              },
              global_storage_get_list_active_turn_success: {
                bind: 'storageActiveTurnAndDelete'
              },
              global_storage_get_list_active_turn_error: {
                bind: 'storageActiveTurnAndDelete'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              }
            },
            out: {
              [getChannelName('_delete_digital_button_click')]: {
                bind: 'delete-digital-button-click'
              },
              global_get_from_storage: {
                bind: 'get-from-local-storage'
              },
              global_remove_from_storage: {
                bind: 'remove-from-local-storage'
              },
              [getChannelName('_request_delete_appointment')]: {
                bind: 'request-delete-digital-appointments'
              },
              request_branch_appointment_show_toast_delete_ticket: {
                bind: 'show-notification-toast',
                backStep: true
              },
              global_retry_error: {
                bind: 'retry-error'
              }
            }
          }
        }
      }
    ]
  };
  localStorageRequestBranch.addOutStorageChannels(base.components, [ 'list_active_turn' ], CONFIG);
  addRetryErrors(base)([
    {
      id: 'DELETE-APPOINTMENT',
      acceptRetry: { bind: 'setDeleteAppointmentTicketBody', component: 'glomo-request-branch-appointment-detail-dm-mx'},
      cancelRetry: { bind: 'backToEntryPoint', component: 'glomo-request-branch-appointment-detail-dm-mx' },
      successEvent: { bind: 'success-on-delete-appointment-ticket', component: 'glomo-request-branch-appointment-detail-dm-mx' },
      acceptCallForHelp: { bind: 'backToEntryPoint', component: 'glomo-request-branch-appointment-detail-dm-mx'}
    }
  ]);

  return sphericaPageUtils.spherize(base);
};
