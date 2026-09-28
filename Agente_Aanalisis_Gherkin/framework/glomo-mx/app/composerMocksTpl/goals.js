/* eslint-disable no-dupe-keys */
'use strict';

module.exports = (CONFIG) => {
  const { environment, native = false, nativeIos = false,
    globalServices: { host, requiredToken = 'tsec',
      security: { headers: { authenticationType } },
      versions: { accounts, savingGoals, savingGoalsV1, calculate, cardsV1, selfDriven, transferV1 }
    }
  } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'goals');
  const { glomoOpenDocument, createSpinner } = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pages = require('./common/_pages')(CONFIG)('goals');
  const { getFootprint, appStep, appOnClickStart, getInteraction, appPageVisit, appStarted, appCompleted } = require('./analytics/_goals')();
  const { commons: { otp, successfulPage, activate, edit, manualMode }, operative: { list } } = require('./analytics/common/_literals');
  const { requestBBVAPlanDocumentparams, createAccount, originType, documentsOperation, pageSizeContributions, savingGoalsAlias, savingGoalsTransfer } = require('./pfm/_constants');
  const spinnerSpherica = createSpinner(CONFIG);
  const isSpherica = sphericaPageUtils.isSpherica();
  const localStorageApp = require('./common/_local-storage');

  spinnerSpherica.tag = 'cells-spinner-veil-spherica';
  spinnerSpherica.properties = {
    className: 'solid-spinner'
  };

  const base = {
    hash: 'goals',
    currentPage: {
      url: '/goals'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true
      },
      propertiesSpherica: {
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [
      sphericaPageUtils.isSpherica() ? spinnerSpherica : createSpinner(CONFIG),
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-goals',
        familyPath: '@glomo-web-components/bbva-manager-goals',
        render: 'litElement',
        properties: {
          authenticationType,
          environment,
          native,
          documentRequestParams: requestBBVAPlanDocumentparams,
          documentTitle: 'metas-saving-goals-plan-account-contract',
          localStorageKey: 'goals_minor_onboarding',
          cellsConnections: {
            in: {
              global_financial_overview_details: {
                bind: 'setFinancialOverviewData'
              },
              flag_minior_account: {
                bind: 'isMinor'
              },
              navigation_from_futura_dashboard: {
                bind: 'navigateGoals'
              },
              navigation_to_pfm_goals_page: {
                bind: 'navigateGoals'
              },
              register_device: {
                bind: 'deviceId'
              },
              goals_navigate_go_forward: {
                bind: 'navigateForward'
              },
              goals_navigate_go_back: {
                bind: 'navigateBack'
              },
              goals_manage_back: {
                bind: 'requestDashboardRefresh'
              },
              navigation_meta_accounts_channel: {
                bind: 'navigateGoals'
              },
              navigation_to_about_info: {
                bind: 'navigateGoals'
              },
              self_driven_round_up_success_rule_finish: {
                bind: 'navigateReturnGoals'
              },
              self_driven_round_up_navigate_close: {
                bind: 'navigateReturnGoals'
              },
              self_driven_round_up_success_rule_delete: {
                bind: 'navigateReturnGoals'
              },
              self_driven_round_up_rule_without_saving_exit: {
                bind: 'navigateReturnGoals'
              },
              self_driven_round_up_help_modal_close: {
                bind: 'navigateReturnGoals'
              },
              goals_request_bbva_plan_channel: {
                bind: 'requestBusinessDocument'
              },
              goals_success_response_pdf: {
                bind: 'requestPDFDocument'
              },
              goals_success_post_bd: {
                bind: 'successBasePDF'
              },
              goals_update_contributions_channel: {
                bind: 'updatedContribution'
              },
              goals_error_get_bd: {
                bind: 'handleBusinessDocumentsError'
              },
              goals_error_post_bd: {
                bind: 'handleBusinessDocumentsError'
              },
              goals_widget_api_dm_error: {
                bind: 'handleWidgetApiError'
              },
              goals_launch_date_picker: {
                bind: 'setDateType'
              },
              goals_set_date: {
                bind: 'setDates'
              },
              self_driven_round_up_create_edit_rule_success: {
                bind: 'navigateReturnGoals'
              },
              goals_metas_saving_goals_ready: {
                bind: 'setEncryptedZero'
              },
              goals_metas_saving_goals_onboarding_finish: {
                bind: 'onboardingFinish'
              },
              global_storage_get_goals_minor_onboarding_success: {
                bind: 'getLocalStorageData'
              },
              global_storage_get_goals_minor_onboarding_error: {
                bind: 'getLocalStorageData'
              }
            },
            out: {
              goals_navigate_self_driven_round_up: {
                bind: 'navigate-to-self-driven-round-up',
                link: {
                  page: 'selfDrivenRoundUp'
                }
              },
              goals_get_rule_id: {
                bind: 'set-rule-id'
              },
              goals_get_selected_product: {
                bind: 'set-selected-product'
              },
              goals_get_accesspoint: {
                bind: 'set-accesspoint'
              },
              goals_get_history: {
                bind: 'set-history'
              },
              goals_get_business_document_plan: {
                bind: 'send-request-document-params'
              },
              goals_post_business_document_plan: {
                bind: 'send-post-request-document-body'
              },
              global_open_document_base64: {
                bind: 'show-document-event'
              },
              dashboard_refresh_financial_overview: {
                bind: 'request-dashboard-refresh-event'
              },
              goals_get_deleted_rule_id: {
                bind: 'set-deleted-rule-id'
              },
              global_generic_error: {
                bind: 'business-document-error-event'
              },
              global_refresh_dashboard_generic: {
                bind: 'request-dashboard-refresh-event'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-plan-info-modal'
              },
              goals_set_goal_period_calendar: {
                bind: 'metas-saving-goals-calendar'
              },
              goals_set_periodic_start_date_calendar: {
                bind: 'metas-saving-goals-calendar-scheduled-contribution-start-date'
              },
              goals_set_periodic_end_date_calendar: {
                bind: 'metas-saving-goals-calendar-scheduled-contribution-end-date'
              },
              goals_set_encrypted_zero: {
                bind: 'set-encrypted-zero'
              },
              goals_set_selected_account: {
                bind: 'set-selected-account'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_get_from_storage: {
                bind: 'get-local-storage-goals'
              },
              global_set_in_storage: {
                bind: 'set-local-storage-goals'
              },
              goals_minor_onboarding_completed: {
                bind: 'goals-minor-onboarding-completed'
              },
              goals_onboarding_youngsters_visible: {
                bind: 'onboarding-youngsters-visible'
              },
              goals_set_selected_account: {
                bind: 'set-selected-account'
              },
              goals_is_adult: {
                bind: 'goals-is-adult-account'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-goals',
        familyPath: '@glomo-web-components/bbva-manager-goals',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              goals_analytics_create_new_goal: {
                bind: 'fireAnalyticsAppOnClickStart'
              },
              goals_navigate_go_forward: {
                bind: 'fireAnalyticsPageView'
              },
              widget_signature_handle_required_first_step: {
                bind: 'fireOTPPageView'
              },
              goals_metas_saving_goals_algorithm_more_info_modal: {
                bind: 'fireMoreInfoPageView'
              },
              metas_saving_goals_click_event: {
                bind: 'fireInteractionLink'
              },
              goals_navigate_to_self_driven_round_up: {
                bind: 'fireAnalyticsPageView'
              },
              goals_scheduled_contribution_activation_success: {
                bind: 'fireAnalyticsPageView'
              },
              goals_send_trace_event: {
                bind: 'fireMultistepAnalytics'
              },
              goals_metas_saving_goals_algorithm_trace_route: {
                bind: 'fireAdviceModalPageView'
              }
            },
            out: {
              goals_analytics_app_on_click_start: {
                bind: 'analytics-app-onclick-start',
                analytics: appOnClickStart
              },
              goals_analytics_create_goal_account_modal_page_view: {
                bind: 'analytics-create-goal-account-modal-page-view',
                analytics: getFootprint('common', 'crear cuenta meta')
              },
              goals_analytics_detail_goal_page_view: {
                bind: 'analytics-detail-goal-page-view',
                analytics: getFootprint('common', 'detalle')
              },
              goals_analytics_create_goal_modal_page_view: {
                bind: 'analytics-create-goal-modal-page-view',
                analytics: getFootprint('common', 'cumple tu objetivo ahorrando')
              },
              goals_analytics_otp_modal_page_view: {
                bind: 'analytics-otp-modal-page-view',
                analytics: getFootprint('common', otp)
              },
              goals_analytics_edit_goal_page_view: {
                bind: 'analytics-edit-goal-page-view',
                analytics: getFootprint('common', 'editar meta')
              },
              goals_analytics_automatic_contributions_page_view: {
                bind: 'analytics-automatic-contributions-page-view',
                analytics: getFootprint('common', 'aportaciones automaticas')
              },
              goals_analytics_update_goal_error_page_view: {
                bind: 'analytics-update-goal-error-page-view',
                analytics: getFootprint('saveError', 'error guardado de datos')
              },
              goals_analytics_complete_goal_modal_page_view: {
                bind: 'analytics-complete-goal-modal-page-view',
                analytics: getFootprint('common', 'meta alcanzada')
              },
              goals_analytics_contribute_to_goal_page_view: {
                bind: 'analytics-contribute-to-goal-page-view',
                analytics: getFootprint('common', 'aportar a meta')
              },
              goals_analytics_successful_contribution_page_view: {
                bind: 'analytics-successful-contribution-page-view',
                analytics: getFootprint('withLevel3', 'aportar a meta', successfulPage)
              },
              goals_analytics_refund_goal_page_view: {
                bind: 'analytics-refund-goal-page-view',
                analytics: getFootprint('common', 'reintegro meta')
              },
              goals_analytics_successful_refund_goal_page_view: {
                bind: 'analytics-successful-refund-goal-page-view',
                analytics: getFootprint('withLevel3', 'reintegro meta', successfulPage)
              },
              goals_analytics_scheduled_contribution_goal_page_view: {
                bind: 'analytics-scheduled-contribution-page-view',
                analytics: getFootprint('common', 'aportacion programada')
              },
              goals_analytics_contribution_plan_simulator_page_view: {
                bind: 'analytics-contribution-plan-simulator-page-view',
                analytics: getFootprint('common', 'plan de aportacion')
              },
              goals_analytics_success_simulation_page_view: {
                bind: 'analytics-success-simulation-page-view',
                analytics: getFootprint('withLevel4DynamicCustomFields', 'aportacion por compra y programada', activate, successfulPage)
              },
              goals_analytics_scheduled_contribution_success_page_view: {
                bind: 'analytics-scheduled-contribution-success-page-view',
                analytics: getFootprint('withLevel4CustomFields', 'aportacion programada', activate, successfulPage, manualMode)
              },
              goals_analytics_welcome_modal_page_view: {
                bind: 'analytics-welcome-modal-page-view',
                analytics: getFootprint('common', 'crear meta')
              },
              goals_analytics_list_goals_page_view: {
                bind: 'analytics-list-goals-page-view',
                analytics: getFootprint('common', list)
              },
              goals_analytics_open_plan_account_page_view: {
                bind: 'analytics-open-plan-account-page-view',
                analytics: getFootprint('common', 'contratar plan')
              },
              goals_analytics_modal_more_info_contributions_page_view: {
                bind: 'analytics-modal-more-info-contributions-page-view',
                analytics: getFootprint('common', 'informacion plan de aportacion')
              },
              goals_analytics_modal_advice_short_deadline_page_view: {
                bind: 'analytics-modal-advice-short-deadline-page-view',
                analytics: getFootprint('common', 'como llegar al 100')
              },
              goals_analytics_modal_advice_insufficient_page_view: {
                bind: 'analytics-modal-advice-insufficient-page-view',
                analytics: getFootprint('common', 'como acercarte a tu meta')
              },
              goals_analytics_modal_advice_nothing_page_view: {
                bind: 'analytics-modal-advice-nothing-page-view',
                analytics: getFootprint('common', 'aporta a tu ritmo')
              },
              goals_analytics_modal_list_formulas_page_view: {
                bind: 'analytics-modal-list-formulas-page-view',
                analytics: getFootprint('common', 'aportaciones automaticas')
              },
              goals_analytics_periodic_contribution_page_view: {
                bind: 'analytics-periodic-contribution-page-view',
                analytics: getFootprint('withDynamicLevel3', 'aportacion programada')
              },
              goals_analytics_successfull_periodic_contributions_page_view: {
                bind: 'analytics-successfull-periodic-contributions-page-view',
                analytics: getFootprint('withDynamicLevel3CustomFields', 'aportacion programada')
              },
              goals_analytics_create_formula_page_view: {
                bind: 'analytics-create-formula-page-view',
                analytics: getFootprint('withLevel3', 'aportacion por compras', activate)
              },
              goals_analytics_update_formual_page_view: {
                bind: 'analytics-update-formula-page-view',
                analytics: getFootprint('withLevel3', 'aportacion por compras', edit)
              },
              goals_analytics_interaction_link_active_deactivate: {
                bind: 'analytics-interaction-link-active-deactivate',
                analytics: getInteraction
              },
              goals_analytics_create_goal_multistep_app_page_visit: {
                bind: 'analytics-create-goal-multistep-app-page-visit',
                analytics: appPageVisit
              },
              goals_analytics_create_goal_multistep_app_started: {
                bind: 'analytics-create-goal-multistep-app-started',
                analytics: appStarted
              },
              goals_analytics_create_goal_multistep_app_step: {
                bind: 'analytics-create-goal-multistep-app-step',
                analytics: appStep('2')
              },
              goals_analytics_contribution_plan_app_step: {
                bind: 'analytics-contribution-plan-app-step',
                analytics: appStep('3')
              },
              goals_analytics_summary_app_step: {
                bind: 'analytics-summary-app-step',
                analytics: appStep('4')
              },
              goals_analytics_create_goal_multistep_app_completed: {
                bind: 'analytics-successful-create-goal-app-completed',
                analytics: appCompleted
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'metas-saving-goals',
        tagSpherica: 'goals-saving-goals-mx',
        render: 'litElement',
        familyPath: '@bbva-web-components-widgets/metas-saving-goals',
        familyPathSpherica: '@glomo-web-components/goals-saving-goals-mx',
        properties: {
          language: 'es-MX',
          host,
          attachToBody: true,
          createAccount,
          originType,
          documentsOperation,
          pageSize: pageSizeContributions,
          savingGoalsAlias,
          savingGoalsTransfer,
          accountApiVersion: accounts,
          accountsApiVersion: accounts,
          calculateApiVersion: calculate,
          cardsApiVersion: cardsV1,
          savingGoalsApiVersion: savingGoals,
          selfDrivenApiVersion: selfDriven,
          simulateSavingsApiVersion: savingGoalsV1,
          scheduledTransfersApiVersion: transferV1,
          requiredOtp: true,
          requiredToken,
          native,
          maxLengthAmount: 12,
          country: 'mx',
          cellsConnections: {
            in: {
              flag_minior_account: {
                bind: 'isGlomoMiniorAccount'
              },
              goals_set_selected_account: {
                bind: 'setSelectedAccount'
              },
              global_holder_name: {
                bind: 'holderName'
              },
              goals_set_encrypted_zero: {
                bind: 'encryptedZero'
              },
              goals_get_history: {
                bind: 'history'
              },
              goals_set_goal_period_calendar: {
                bind: 'setCalendarDate'
              },
              goals_set_periodic_start_date_calendar: {
                bind: 'setPeriodicStartDate'
              },
              goals_set_periodic_end_date_calendar: {
                bind: 'setPeriodicEndDate'
              },
              goals_get_accesspoint: {
                bind: 'accessPoint'
              },
              goals_get_deleted_rule_id: {
                bind: 'deletedRuleId'
              },
              self_driven_round_up_ready: {
                bind: 'navigateSelfDrivenRoundUp'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'handleTapBack'
              },
              blue_redirect_goal_listening_mode: {
                bind: 'goalListeningModeBlue'
              },
              goals_refund_data: {
                bind: 'goalListeningModeRefund'
              },
              blue_navigate_to_contribution_goal: {
                bind: 'goalBlue'
              },
              blue_navigate_to_contribution_goal_data: {
                bind: 'dataContributeGoalBlue'
              },
              goals_onboarding_youngsters_visible: {
                bind: 'onboardingVisible'
              },
              flag_minior_account: {
                bind: 'isMinor'
              }
            },
            out: {
              goals_launch_date_picker: {
                bind: 'metas-saving-goals-launch-calendar'
              },
              goals_navigate_go_forward: {
                bind: 'navigate-go-forward'
              },
              goals_analytics_create_new_goal: {
                bind: 'metas-saving-goals-list-goals-navigate'
              },
              goals_analytics_create_goal_element_on_click: {
                bind: 'metas-saving-goals-create-goal-element-on-click'
              },
              goals_request_bbva_plan_channel: {
                bind: 'metas-saving-goals-list-file-click'
              },
              goals_navigate_go_back: {
                bind: 'navigate-go-back'
              },
              goals_update_contributions_channel: {
                bind: 'update-contribution'
              },
              goals_widget_api_dm_error: {
                bind: 'metas-saving-goals-api-error'
              },
              goals_add_edit_contribution_formula: {
                bind: 'metas-saving-goals-add-edit-contribution-formula'
              },
              goals_confirm_edit_simulation: {
                bind: 'metas-saving-goals-confirm-edit-simulate'
              },
              goals_navigate_to_self_driven_round_up: {
                bind: 'metas-saving-goals-contribution-formulas-navigate'
              },
              goals_scheduled_contribution_activation_success: {
                bind: 'metas-saving-goals-scheduled-contribution-successful-activation'
              },
              goals_metas_saving_goals_ready: {
                bind: 'metas-saving-goals-ready'
              },
              goals_manage_back: {
                bind: 'metas-saving-goals-close-goals',
                backStep: true
              },
              goals_metas_saving_goals_algorithm_more_info_modal: {
                bind: 'metas-saving-goals-algorithm-more-info-modal'
              },
              goals_metas_saving_goals_algorithm_trace_route: {
                bind: 'metas-saving-goals-algorithm-trace-route'
              },
              goals_send_trace_event: {
                bind: 'metas-saving-goals-trace-route'
              },
              metas_saving_goals_click_event: {
                bind: 'metas-saving-goals-click-event'
              },
              redirect_blue: {
                bind: 'redirect-blue',
                link: {
                  page: 'digitalButler',
                  skipHistory: true
                }
              }
            },
            params: {
              dashboardContractId: 'productId',
              userInfo: 'global_user'
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          iOSFixedHeader: nativeIos,
          cellsConnections: {
            in: {
              global_holder_name: {
                bind: 'holderName'
              },
              goals_set_encrypted_zero: {
                bind: 'encryptedZero'
              },
              goals_get_history: {
                bind: 'history'
              },
              goals_set_goal_period_calendar: {
                bind: 'selectedDate'
              },
              goals_get_accesspoint: {
                bind: 'accessPoint'
              },
              goals_get_deleted_rule_id: {
                bind: 'deletedRuleId'
              },
              self_driven_round_up_ready: {
                bind: 'navigateSelfDrivenRoundUp'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'handleTapBack'
              },
              blue_redirect_goal_listening_mode: {
                bind: 'goalListeningModeBlue'
              },
              goals_refund_data: {
                bind: 'goalListeningModeRefund'
              },
              blue_navigate_to_contribution_goal: {
                bind: 'goalBlue'
              },
              blue_navigate_to_contribution_goal_data: {
                bind: 'dataContributeGoalBlue'
              },
              goals_onboarding_youngsters_visible: {
                bind: 'onboardingVisible'
              },
              flag_minior_account: {
                bind: 'isMinor'
              },
              goals_set_selected_account: {
                bind: 'setSelectedAccount'
              },
              flag_parent_account: {
                bind: 'isGlomoParentAccount'
              },
              goals_is_adult: {
                bind: 'isGlomoParentAccount'
              },
              global_financial_overview_details: {
                bind: 'contracts'
              }
            },
            out: {
              goals_launch_date_picker: {
                bind: 'goals-saving-goals-mx-launch-calendar'
              },
              goals_navigate_go_forward: {
                bind: 'navigate-go-forward'
              },
              goals_analytics_create_new_goal: {
                bind: 'goals-saving-goals-mx-list-goals-navigate'
              },
              goals_analytics_create_goal_element_on_click: {
                bind: 'goals-saving-goals-mx-create-goal-element-on-click'
              },
              goals_request_bbva_plan_channel: {
                bind: 'goals-saving-goals-mx-list-file-click'
              },
              goals_navigate_go_back: {
                bind: 'navigate-go-back'
              },
              goals_update_contributions_channel: {
                bind: 'update-contribution'
              },
              goals_widget_api_dm_error: {
                bind: 'goals-saving-goals-mx-api-error'
              },
              goals_add_edit_contribution_formula: {
                bind: 'goals-saving-goals-mx-add-edit-contribution-formula'
              },
              goals_confirm_edit_simulation: {
                bind: 'goals-saving-goals-mx-confirm-edit-simulate'
              },
              goals_navigate_to_self_driven_round_up: {
                bind: 'goals-saving-goals-mx-contribution-formulas-navigate'
              },
              goals_scheduled_contribution_activation_success: {
                bind: 'goals-saving-goals-mx-scheduled-contribution-successful-activation'
              },
              goals_metas_saving_goals_ready: {
                bind: 'goals-saving-goals-mx-ready'
              },
              goals_manage_back: {
                bind: 'goals-saving-goals-mx-close-goals',
                backStep: true
              },
              goals_metas_saving_goals_algorithm_more_info_modal: {
                bind: 'goals-saving-goals-mx-algorithm-more-info-modal'
              },
              goals_metas_saving_goals_algorithm_trace_route: {
                bind: 'goals-saving-goals-mx-algorithm-trace-route'
              },
              goals_send_trace_event: {
                bind: 'goals-saving-goals-mx-trace-route'
              },
              metas_saving_goals_click_event: {
                bind: 'goals-saving-goals-mx-click-event'
              },
              redirect_blue: {
                bind: 'redirect-blue',
                link: {
                  page: 'digitalButler',
                  skipHistory: true
                }
              },
              goals_metas_saving_goals_onboarding_finish: {
                bind: 'goals-saving-goals-mx-onboarding-finish'
              }
            },
            params: {
              dashboardContractId: 'productId',
              userInfo: 'global_user'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-business-documents',
        properties: {
          host,
          requiredToken,
          native,
          requiresTsec: true,
          cellsConnections: {
            in: {
              goals_get_business_document_plan: {
                bind: 'getBusinessDocuments'
              },
              goals_post_business_document_plan: {
                bind: 'postBusinessDocuments'
              }
            },
            out: {
              goals_success_response_pdf: {
                bind: 'success-on-get-business-documents'
              },
              goals_success_post_bd: {
                bind: 'post-business-documents-success'
              },
              goals_error_get_bd: {
                bind: 'error-on-get-business-documents'
              },
              goals_error_post_bd: {
                bind: 'error-on-post-business-documents'
              }
            }
          }
        }
      }
    ]
  };

  if (native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }

  if (!nativeIos) {
    base.components.push({
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-nativeconnector-datepicker',
      familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            goals_launch_date_picker: {
              bind: 'launchDatePicker'
            }
          },
          out: {
            goals_set_date: {
              bind: 'launch-date-picker-success'
            }
          }
        }
      }
    });
  }

  localStorageApp.addOutStorageChannels(base.components, [ 'goals_minor_onboarding' ], CONFIG);
  addCommonErrors(base.components)();
  const sphericaBase = sphericaPageUtils.spherize(base);
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(sphericaBase);
  errorAndSignWidgetConnector(isSpherica ? 'goals-saving-goals-mx' : 'metas-saving-goals');
  return sphericaBase;
};
