/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const UTILS = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName, getShortFormatDate, getShortInvestedDate, headerHeight } = UTILS;
  const PAGE_NAME = 'requestBranchAppointment';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const SPINNER = UTILS.SPINNERSPHERICA(CONFIG);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const ANALYTICS = require('./analytics/_requestBranchAppointment')(CONFIG);

  SPINNER.properties = SPINNER.propertiesSpherica;
  delete SPINNER.propertiesSpherica;

  SPINNER.properties.className = 'solid-spinner';

  const base = {
    currentPage: {
      url: '/request-branch-appointment'
    },
    template: {
      tag: 'glomo-opx-template-spherica',
      properties: {
        topOnConfirm: false,
        notStickyConfirm: true,
        className: 'header-fixed remove-display-container-slot last-step-min-heigh-auto',
        extraHeaderClass: 'bbva-light-grey',
        animationType: 'verticalUp',
        headerHeight,
        headerFixed: true,
        iOSFixedHeader: IS_NATIVE_IOS,
        cellsConnections: {
          in: {
            request_branch_appointment_all_steps_collapsed_confirm: {
              bind: 'showConfirm'
            },
            [getChannelName('change_step_state')]: {
              bind: 'scrollItemToView'
            },
            [getChannelName('_change_step_state_operative_type')]: {
              bind: 'close'
            },
            [getChannelName('_help_modal_footer_button_click')]: {
              bind: 'close'
            },
            [getChannelName('_open_summary')]: {
              bind: 'open'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header-spherica',
        properties: {
          className: 'header',
          rightIconText: 'bbva-header-main-close-aria-label',
          titleName: 'glomo-request-branch-appointment-header-success-spherica',
          variant: 'primary',
          rightIcon: 'coronita:close',
          cellsConnections: {
            out: {
              [getChannelName('_header_close')]: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
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
              __bridge_page_requestBranchAppointment: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('_init_page')]: {
                bind: 'init-page'
              },
              request_branch_appointment_init_step: {
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
        tag: 'glomo-operative-info-spherica',
        properties: {
          title: 'glomo-request-branch-appointment-values-list-customer-branch',
          cellsConnections: {
            in: {
              [getChannelName('_set_operative_info_properties')]: {
                bind: 'setProperties'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-select-modal-spherica',
        properties: {
          className: 'buttons-min-margin',
          stepTitle: 'glomo-request-branch-appointment-operative-type-step-title-spherica',
          description: 'glomo-request-branch-appointment-operative-type-description-spherica',
          changeLabel: 'cells-step-change-button-label-spherica',
          id: 'operativeStep',
          currentStep: 1,
          maxSteps: 2,
          firstStep: true,
          divider: true,
          additionalRightIconClass: 'tooltip-button no-margin-top center',
          descriptionClass: 'min-margin-bottom icon-right subtitle-description-fontDefaultLight-15px',
          additionalDescriptionClass: 'margin-top',
          classFilled: 'filled-padding',
          showRightIcon: true,
          iconInfoClass: 'icon-size-22',
          decorated: true,
          inputList: [ {
            type: 'attention',
            label: 'glomo-request-branch-appointment-operative-type-input-list-label',
            required: true
          } ],
          cellsConnections: {
            in: {
              [getChannelName('_init_page')]: {
                bind: 'initialize'
              },
              [getChannelName('_operative_type_update')]: {
                bind: 'updateValue'
              },
              [getChannelName('_set_operative_type_properties')]: {
                bind: 'setProperties'
              },
              request_branch_appointment_init_step: {
                bind: 'scrollToButton'
              }
            },
            out: {
              request_branch_appointment_on_focus_step_status: {
                bind: 'cells-step-focus-in'
              },
              [getChannelName('_register_step')]: {
                bind: 'register-step'
              },
              [getChannelName('_continue_clicked_operative_step')]: {
                bind: 'continue-clicked'
              },
              [getChannelName('_change_step_state_operative_type')]: {
                bind: 'change-step-state'
              },
              [getChannelName('select_clicked_attention')]: {
                bind: 'select-clicked-attention'
              },
              [getChannelName('_right_icon_clicked')]: {
                bind: 'right-icon-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        tag: 'cells-modal-help-spherica',
        type: 'UI',
        properties: {
          alertBoxClass: 'color-icon-dark margin-size-icon-dark light-text-description',
          alertBoxClassAcceptButton: 'white-core-blue',
          cellsConnections: {
            in: {
              [getChannelName('_set_right_icon_modal_properties')]: {
                bind: 'selectedConfig'
              },
              [getChannelName('_open_help_modal')]: {
                bind: 'open'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        tag: 'cells-modal-selector-spherica',
        type: 'UI',
        properties: {
          items: [
            {
              id: 'CONTRACTS',
              name: 'glomo-request-branch-appointment-operative-type-contracts-name',
              attention: 'MANAGER_SERVICE',
              description: 'glomo-request-branch-appointment-operative-type-contracts-description',
              type: 'attention',
              zone: 'glomo-request-branch-appointment-operative-type-subtitle-message-representative'
            },
            {
              id: 'PAYMENTS_OR_DEPOSITS',
              name: 'glomo-request-branch-appointment-operative-type-payments-or-deposits-name',
              attention: 'TELLER_SERVICE',
              description: 'glomo-request-branch-appointment-operative-type-payments-or-deposits-description',
              type: 'attention',
              zone: 'glomo-request-branch-appointment-operative-type-subtitle-message-front-desk'

            },
            {
              id: 'COLLECTIONS_OR_WITHDRAWALS',
              name: 'glomo-request-branch-appointment-operative-type-collections-or-withdrawals-name',
              attention: 'TELLER_SERVICE',
              description: 'glomo-request-branch-appointment-operative-type-collections-or-withdrawals-description',
              type: 'attention',
              zone: 'glomo-request-branch-appointment-operative-type-subtitle-message-front-desk'
            },
            {
              id: 'QUERIES_OR_MODIFICATIONS',
              name: 'glomo-request-branch-appointment-operative-type-queries-or-modifications-name',
              attention: 'MANAGER_SERVICE',
              description: 'glomo-request-branch-appointment-operative-type-queries-or-modifications-description',
              type: 'attention',
              zone: 'glomo-request-branch-appointment-operative-type-subtitle-message-representative'
            }
          ],
          cellsConnections: {
            in: {
              [getChannelName('select_clicked_attention')]: {
                bind: 'open'
              },
              [getChannelName('_set_operative_type_selector_properties')]: {
                bind: 'reset'
              }
            },
            out: {
              [getChannelName('_operative_type_selected')]: {
                bind: 'item-selected-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-select-modal-spherica',
        properties: {
          stepTitle: 'glomo-request-branch-appointment-date-and-time-step-title-spherica',
          changeLabel: 'cells-step-change-button-label-spherica',
          description: 'glomo-request-branch-appointment-date-and-time-description-spherica',
          id: 'timeStep',
          currentStep: 2,
          maxSteps: 2,
          descriptionClass: 'min-margin-bottom subtitle-description-fontDefaultLight-15px',
          showAdditionalRightIcon: true,
          classFilled: 'filled-padding',
          infoMessageDataInputs: {
            type: 'info-dark-blue',
            icon: 'coronita:info',
            iconSize: '16',
            text: 'glomo-request-branch-appointment-success-page-text-message',
            showInfoButton: true,
            buttonLabel: 'glomo-request-branch-appointment-review-indications-link-message-text'
          },
          stopUncollapseOnChangePressed: true,
          cellsConnections: {
            in: {
              [getChannelName('_init_page')]: {
                bind: 'initialize'
              },
              [getChannelName('_date_selected')]: {
                bind: 'updateValue'
              },
              [getChannelName('_hour_selected')]: {
                bind: 'updateValue'
              },
              [getChannelName('_set_date_and_schedule_step_properties')]: {
                bind: 'setProperties'
              },
              [getChannelName('_reset_schedule_value')]: {
                bind: 'updateValue'
              }
            },
            out: {
              request_branch_appointment_all_steps_collapsed: {
                bind: 'continue-clicked'
              },
              request_branch_appointment_on_focus_step_status: {
                bind: 'cells-step-focus-in'
              },
              [getChannelName('_register_step')]: {
                bind: 'register-step'
              },
              [getChannelName('_continue_clicked_date_and_schedule_step')]: {
                bind: 'continue-clicked'
              },
              [getChannelName('_change_step_state_dates_and_schedules')]: {
                bind: 'change-step-state'
              },
              [getChannelName('select_clicked_hour')]: {
                bind: 'select-clicked-hour'
              },
              [getChannelName('select_clicked_day')]: {
                bind: 'select-clicked-day'
              },
              [getChannelName('_open_help_modal_continued')]: {
                bind: 'info-button-clicked'
              },
              [getChannelName('_info_message_inputs_button_clicked')]: {
                bind: 'info-message-inputs-button-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        tag: 'cells-modal-selector-spherica',
        type: 'UI',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('select_clicked_day')]: {
                bind: 'open'
              },
              [getChannelName('_set_dates_selector_properties')]: {
                bind: 'setProperties'
              },
              request_branch_appointment__set_operative_type_selector_properties: {
                bind: 'reset'
              }
            },
            out: {
              [getChannelName('_date_selected')]: {
                bind: 'item-selected-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        tag: 'cells-modal-selector-spherica',
        type: 'UI',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_open_schedules_selector')]: {
                bind: 'open'
              },
              [getChannelName('_set_schedules_selector_properties')]: {
                bind: 'setProperties'
              },
              [getChannelName('_date_selected')]: {
                bind: 'reset'
              }
            },
            out: {
              [getChannelName('_hour_selected')]: {
                bind: 'item-selected-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        type: 'UI',
        tag: 'cells-summary-view-spherica',
        properties: {
          primaryButtonClass: 'positive',
          buttonLabel: 'glomo-request-branch-appointment-button-summary-spherica',
          notStyleBorderShadow: true,
          className: 'aqua-dark-button',
          cellsConnections: {
            in: {
              [getChannelName('operation_summary')]: {
                bind: 'operation'
              }
            },
            out: {
              [getChannelName('_summary_close')]: {
                bind: 'summary-closed'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal-spherica',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          closeLabel: 'bbva-header-main-close-aria-label',
          iOSFixedHeader: IS_NATIVE_IOS,
          modalType: 'warning',
          titleIcon: 'bbva:warning',
          cellsConnections: {
            in: {
              request_branch_appointment_help_modal_full_height: {
                bind: 'fullHeight'
              },
              request_branch_appointment_help_modal_header_fixed_footer: {
                bind: 'fixedFooter'
              },
              request_branch_appointment_help_modal_header_text: {
                bind: 'headerText'
              },
              request_branch_appointment_help_modal_header_text_icon: {
                bind: 'titleIcon'
              },
              request_branch_appointment_help_modal_icon_class: {
                bind: 'className'
              },
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
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-request-branch-appointment-dm-mx',
        familyPath: 'glomo-request-branch-appointment-dm',
        type: 'DM',
        properties: {
          topInfoDate: true,
          isSpherica: true,
          host: CONFIG.globalServices.host,
          newDigitalProvider: CONFIG.newDigitalProvider,
          branchesVersion: CONFIG.globalServices.versions.pois,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              global_login_success: {
                bind: 'customerDetail'
              },
              [getChannelName('_get_available_schedules_body')]: {
                bind: 'setGetAvailableSchedulesBody'
              },
              [getChannelName('_get_available_schedules_successful_response')]: {
                bind: 'getAvailableSchedulesSuccessfulResponse'
              },
              [getChannelName('_setted_appointment_properties')]: {
                bind: 'setProperties'
              },
              [getChannelName('_summary_close')]: {
                bind: 'setPostSaveAppointmentTicketBody'
              },
              [getChannelName('_get_digital_appointments_times_success')]: {
                bind: 'successResponseAvailableSchedules'
              },
              [getChannelName('_get_digital_appointments_times_error')]: {
                bind: 'errorResponseAvailableSchedules'
              },
              [getChannelName('_post_digital_appointments_success')]: {
                bind: 'successResponsePost'
              },
              [getChannelName('_post_digital_appointments_error')]: {
                bind: 'errorResponsePost'
              }
            },
            out: {
              request_branch_appointment_help_modal_full_height: {
                bind: 'set-full-height'
              },
              request_branch_appointment_help_modal_header_fixed_footer: {
                bind: 'set-fixed-footer'
              },
              request_branch_appointment_help_modal_header_text: {
                bind: 'set-header-text'
              },
              request_branch_appointment_help_modal_header_text_icon: {
                bind: 'set-title-icon'
              },
              request_branch_appointment_help_modal_icon_class: {
                bind: 'set-icon-class'
              },
              [getChannelName('_get_available_schedules')]: {
                bind: 'get-available-schedules'
              },
              [getChannelName('_set_schedules_selector_properties')]: {
                bind: 'set-schedules-selector-properties'
              },
              [getChannelName('_open_schedules_selector')]: {
                bind: 'open-schedules-selector',
                analytics: ANALYTICS.generateFootPrint('calendario')
              },
              [getChannelName('_post_save_appointment_ticket')]: {
                bind: 'post-save-appointment-ticket'
              },
              open_request_branch_appointment_success: {
                bind: 'open-request-branch-appointment-success',
                link: {
                  page: 'requestBranchAppointmentSuccess',
                  skipHistory: true
                }
              },
              [getChannelName('_open_alert_help_modal')]: {
                bind: 'open-alert-help-modal'
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
              [getChannelName('_set_modal_type')]: {
                bind: 'set-modal-type'
              },
              request_branch_appointment_success_set_title: {
                bind: 'request-branch-appointment-success-set-title'
              },
              request_branch_appointment_ticket_response: {
                bind: 'request-branch-appointment-ticket-response'
              },
              global_retry_error: {
                bind: 'retry-error',
                analytics: ANALYTICS.generateFootPrint('turno no generado', true),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_REQUEST_BRANCH_APPOINTMENT.SAVE_APPOINTMENT
              },
              [getChannelName('_get_available_schedules_error_response')]: {
                bind: 'get-available-schedules-error-response'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              [getChannelName('_request_available_schedules')]: {
                bind: 'request-available-schedules'
              },
              [getChannelName('_digital_post_appointment_schedule')]: {
                bind: 'digital-post-appointment-schedule'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-opx-request-branch-appointment-dm-mx',
        familyPath: 'glomo-opx-request-branch-appointment-dm',
        type: 'DM',
        properties: {
          isSpherica: true,
          autoActivateStep: true,
          idMomentFormat: getShortInvestedDate(),
          maxSteps: 2,
          nameMomentFormat: getShortFormatDate(),
          operativeName: 'REQUEST-BRANCH-APPOINTMENT',
          cellsConnections: {
            in: {
              request_branch_appointment_on_focus_step_status: {
                bind: 'onAnyStepCollapsedChanged'
              },
              request_branch_appointment_all_steps_collapsed: {
                bind: 'onAnyStepCollapsedChanged'
              },
              request_branch_appointment_exit_operative_accept: {
                bind: 'resetManager'
              },
              [getChannelName('_init_page')]: {
                bind: 'initPage'
              },
              digital_turn_open_channel: {
                bind: 'branchDetail'
              },
              [getChannelName('_register_step')]: {
                bind: 'registerStep'
              },
              [getChannelName('change_step_state')]: {
                bind: 'manageStateSteps'
              },
              [getChannelName('_operative_type_selected')]: {
                bind: 'setOperativeTypeStepProperties'
              },
              [getChannelName('_right_icon_clicked')]: {
                bind: 'showOperativeTypesInfoModal'
              },
              [getChannelName('_change_step_state_operative_type')]: {
                bind: 'changeOperativeTypeStepStateManager'
              },
              [getChannelName('_change_step_state_dates_and_schedules')]: {
                bind: 'openChangeModal'
              },
              [getChannelName('_continue_clicked_operative_step')]: {
                bind: 'setAvailableDatesBody'
              },
              [getChannelName('_date_selected')]: {
                bind: 'dateSelected'
              },
              [getChannelName('_continue_clicked_date_and_schedule_step')]: {
                bind: 'setDatesAndSchedulesBody'
              },
              [getChannelName('_help_modal_footer_button_click')]: {
                bind: 'onClickModalAcceptButton'
              },
              [getChannelName('_help_modal_footer_link_click')]: {
                bind: 'onClickModalCancelButton'
              },
              [getChannelName('_header_close')]: {
                bind: 'manageBackButton'
              },
              global_request_branch_appointment_exit_modal_accept: {
                bind: 'resetManager'
              },
              [getChannelName('select_clicked_hour')]: {
                bind: 'onClickOpenSchedulesSelector'
              },
              [getChannelName('_on_click_dates_and_schedules_modal_accept_button')]: {
                bind: 'changeDatesAndSchedulesStepState'
              },
              [getChannelName('_set_modal_type')]: {
                bind: 'modalType'
              },
              [getChannelName('_on_click_no_available_schedules_modal_accept_button')]: {
                bind: 'resetManager'
              },
              [getChannelName('_open_help_modal_continued')]: {
                bind: 'showStepsInfoModal'
              },
              [getChannelName('_get_available_schedules_error_response')]: {
                bind: 'setGetAvailableSchedulesErrorProperties'
              },
              [getChannelName('_info_message_inputs_button_clicked')]: {
                bind: 'onClickOpenSchedulesSelector'
              },
              [getChannelName('_open_schedules_selector')]: {
                bind: 'getAvailableSchedulesSuccessfulResponse'
              },
              [getChannelName('_back_to_entry_point')]: {
                bind: 'resetManager'
              },
              [getChannelName('_navigate_back_button')]: {
                bind: 'backToEntryPoint'
              },
              open_request_branch_appointment_success: {
                bind: 'resetManager'
              }
            },
            out: {
              global_alert_manager_open_with_settings_spherica: {
                bind: 'set-info-modal-properties',
                analytics: ANALYTICS.FOOTPRINT_INFO
              },
              request_branch_appointment_show_close_confirm: {
                bind: 'show-close-confirm'
              },
              request_branch_appointment_help_modal_full_height: {
                bind: 'set-full-height'
              },
              request_branch_appointment_help_modal_header_fixed_footer: {
                bind: 'set-fixed-footer'
              },
              request_branch_appointment_help_modal_header_text: {
                bind: 'set-header-text'
              },
              request_branch_appointment_help_modal_header_text_icon: {
                bind: 'set-title-icon'
              },
              request_branch_appointment_help_modal_icon_class: {
                bind: 'set-icon-class'
              },
              request_branch_appointment_all_steps_collapsed_confirm: {
                bind: 'all-steps-collapsed'
              },
              [getChannelName('can_execute_changed')]: {
                bind: 'can-execute-changed'
              },
              [getChannelName('operation_summary')]: {
                bind: 'operation-summary'
              },
              [getChannelName('_set_operative_info_properties')]: {
                bind: 'set-operative-info-properties'
              },
              [getChannelName('_set_operative_type_properties')]: {
                bind: 'set-operative-type-step-properties'
              },
              [getChannelName('_operative_type_update')]: {
                bind: 'operative-type-update'
              },
              [getChannelName('_open_help_modal')]: {
                bind: 'open-help-modal'
              },
              [getChannelName('_open_alert_help_modal')]: {
                bind: 'open-alert-help-modal'
              },
              [getChannelName('_set_dates_selector_properties')]: {
                bind: 'set-dates-selector-properties'
              },
              [getChannelName('_set_get_available_schedules_body')]: {
                bind: 'set-get-available-schedules-body'
              },
              [getChannelName('_set_date_and_schedule_step_properties')]: {
                bind: 'set-date-and-schedule-step-properties'
              },
              [getChannelName('_open_summary')]: {
                bind: 'open-summary'
              },
              [getChannelName('_set_properties_branch_appointment_dm')]: {
                bind: 'set-properties-request-branch-appointment-dm'
              },
              [getChannelName('_delete_appointment_list')]: {
                bind: 'delete-appointment-list'
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
              [getChannelName('_reset_schedule_value')]: {
                bind: 'reset-schedule-value'
              },
              [getChannelName('_navigate_back_button')]: {
                bind: 'navigate-back-button'
              },
              [getChannelName('_set_operative_type_selector_properties')]: {
                bind: 'set-operative-type-selector-properties'
              },
              [getChannelName('_on_click_dates_and_schedules_modal_accept_button')]: {
                bind: 'on-click-dates-and-schedules-modal-accept-button'
              },
              [getChannelName('_on_click_no_available_schedules_modal_accept_button')]: {
                bind: 'on-click-no-available-schedules-modal-accept-button',
                backStep: true
              },
              [getChannelName('_back_to_entry_point')]: {
                bind: 'back-to-entry-point',
                backStep: true
              },
              [getChannelName('_call_bank_line')]: {
                bind: 'call-bank-line',
                backStep: true
              }
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
          config: {
            steps: {
              2: 'schedule-step',
              3: 'summary-step'
            }
          },
          cellsConnections: {
            in: {
              [getChannelName('_init_page')]: {
                bind: 'fireStepLoaded'
              },
              [getChannelName('_change_step_state_operative_type')]: {
                bind: 'firePageVisit'
              },
              [getChannelName('_right_icon_clicked')]: {
                bind: 'onClickRightIconAppStarted'
              },
              [getChannelName('select_clicked_attention')]: {
                bind: 'onClickOperativeTypeSelector'
              },
              [getChannelName('_continue_clicked_operative_step')]: {
                bind: 'onClickContinueOperativeStep'
              },
              [getChannelName('_operative_type_selected')]: {
                bind: 'operativeTypeSelected'
              },
              [getChannelName('_set_properties_branch_appointment_dm')]: {
                bind: 'onClickContinueDateAndScheduleStep'
              }
            },
            out: {
              request_branch_appointment_app_page_visit: {
                bind: 'analytics-page-visit',
                analytics: ANALYTICS.APP_PAGE_VISIT
              },
              request_branch_appointment_app_started: {
                bind: 'analytics-app-started',
                analytics: ANALYTICS.APP_STARTED
              },
              request_branch_appointment_app_step_two: {
                bind: 'analytics-schedule-step',
                analytics: ANALYTICS.APP_STEP_TWO
              },
              request_branch_appointment_app_step_three: {
                bind: 'analytics-summary-step',
                analytics: ANALYTICS.APP_STEP_THREE
              },
              request_branch_appointment_persist_data: {
                bind: 'persist-data'
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
              [getChannelName('_get_available_digital_schedules')]: {
                bind: 'getDigitalAppointmentsAvailableTimeSlots'
              },
              [getChannelName('_post_digital_appointments')]: {
                bind: 'postDigitalAppointments'
              }
            },
            out: {
              [getChannelName('_get_digital_appointments_times_success')]: {
                bind: 'get-digital-appointments-times-success'
              },
              [getChannelName('_get_digital_appointments_times_error')]: {
                bind: 'get-digital-appointments-times-error'
              },
              [getChannelName('_post_digital_appointments_success')]: {
                bind: 'post-digital-appointments-success'
              },
              [getChannelName('_post_digital_appointments_error')]: {
                bind: 'post-digital-appointments-error'
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
              digital_turn_open_channel: {
                bind: 'branchDetailWithProvider'
              },
              [getChannelName('_request_available_schedules')]: {
                bind: 'availableDigitalSchedules'
              },
              [getChannelName('_set_get_available_schedules_body')]: {
                bind: 'setProviderToAvailableSchedulesBody'
              },
              [getChannelName('_set_properties_branch_appointment_dm')]: {
                bind: 'setPropertiesWithProvider'
              },
              [getChannelName('_digital_post_appointment_schedule')]: {
                bind: 'postDigitalAppointments'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              }
            },
            out: {
              [getChannelName('_get_available_digital_schedules')]: {
                bind: 'get-available-digital-schedules'
              },
              [getChannelName('_get_available_schedules_body')]: {
                bind: 'get-available-schedules-body'
              },
              [getChannelName('_setted_appointment_properties')]: {
                bind: 'setted-appointment-properties'
              },
              [getChannelName('_post_digital_appointments')]: {
                bind: 'post-digital-appointments'
              }
            }
          }
        }
      }
    ]
  };

  addRetryErrors(base)([
    {
      id: 'SAVE-APPOINTMENT',
      acceptRetry: { bind: 'setPostSaveAppointmentTicketBody', component: 'glomo-request-branch-appointment-dm-mx' },
      cancelRetry: { bind: 'backToEntryPoint', component: 'glomo-opx-request-branch-appointment-dm-mx' },
      successEvent: { bind: 'success-on-save-appointment-ticket', component: 'glomo-request-branch-appointment-dm-mx' },
      acceptCallForHelp: { bind: 'backToEntryPoint', component: 'glomo-opx-request-branch-appointment-dm-mx' }
    }
  ]);

  const connectionsIn = UTILS.connectionsIn(base);
  const connectionsOut = UTILS.connectionsOut(base);
  connectionsIn('glomo-alert-manager-spherica').request_branch_appointment_show_close_confirm = {
    bind: 'openWithSettings'
  };
  connectionsOut('glomo-alert-manager-spherica').request_branch_appointment_exit_operative_accept = {
    bind: 'alert-EXIT-REQUEST-BRANCH-APPOINTMENT-accept',
    backStep: true
  };


  return base;
};
