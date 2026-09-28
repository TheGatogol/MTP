'use strict';

module.exports = CONFIG => {
  const pageName = 'investAdvisoryPortfolio';
  const {
    native = false,
    nativeIos = false,
    globalServices: { host, requiredToken = 'tsec', versions: { interactionContextV1, routingV2 } },
    settingsHost,
    namespace,
    endpoints: { fundList }
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analyticsProfiling = require('./analytics/_investAdvisoryPortfolioProfiling')();
  const analyticsHiring = require('./analytics/_investAdvisoryPortfolioHiring')();
  const { minFundsAmounts } = require('./common/fundHelpers/_fundList');
  const { detailDownloadParams, glomoOpenDocument, getLanguage, getLocalCurrency } = require('./common/helpers/_utils');
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const hideProposalDocumentFlag = false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const { controllerCallMeBack } = require('./common/_redirectCallMeBack');
  const analyticsProactiveAssistance = require('./analytics/_proactiveAssistance')('invest');
  const callMeBackInvestConfig = {
    operativeName: pageName,
    configEntryPoints: {
      showInSticky: true,
      showInSummary: true
    },
    lastStep: 7,
    onlyCallMeBack: true,
    recoverySettings: true,
    onlyCallMeBackRemoteManager: true,
    useFeatureFlag: true,
    scheduleNotAllowed: true
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          invest_advisory_portfolio_RESET_PAGE: {
            bind: 'reset'
          },
          invest_advisory_portfolio_INIT_PAGE: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          global_retargeting_initialize: {
            bind: 'init-page'
          },
          invest_advisory_portfolio__call_me_back_initialize: {
            bind: 'init-page'
          }
        }
      }
    }
  };

  const appSettingsFundsData = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-public-app-settings',
    properties: {
      host: settingsHost,
      native: !!native,
      namespace,
      endpoint: fundList,
      cellsConnections: {
        in: {
          ['__bridge_page_' + pageName]: {
            bind: 'getAppSettings'
          }
        },
        out: {
          global_set_app_settings_investAdvisoryPortfolio: {
            bind: 'app-settings-request-success'
          },
          global_set_app_settings_investAdvisoryPortfolio_error: {
            bind: 'app-settings-request-error'
          }
        }
      }
    }
  };

  const featureInvestmentPortfolio = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-investment-portfolio',
    tagSpherica: 'other-investment-origination-oc-investment-portfolio-mx',
    familyPath: '@glomo-web-components/bbva-feature-investment-portfolio',
    familyPathSpherica: '@glomo-web-components/other-investment-origination-oc-investment-portfolio-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      detailDocumentParams: detailDownloadParams,
      documentFundList: minFundsAmounts,
      hideProposalDocument: hideProposalDocumentFlag,
      iOSFixedHeader: nativeIos,
      callLine: 8002262663,
      cellsConnections: {
        in: {
          global_set_app_settings_investAdvisoryPortfolio: {
            bind: 'appSettingsFundsCatalog'
          },
          global_set_app_settings_investAdvisoryPortfolio_error: {
            bind: 'appSettingsFundsCatalog'
          },
          global_login_success: {
            bind: 'customerInfo'
          },
          contract_product_section_oc_banner_invest_advisory_onboarding_clicked: {
            bind: 'init'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'init'
          },
          post_correct_investment_portfolio_assessments: {
            bind: 'postCorrectInvestmentPortfolioAssessments'
          },
          post_failed_investment_portfolio_assessments: {
            bind: 'postFailedInvestmentPortfolioAssessments'
          },
          post_correct_investment_funds: {
            bind: 'postCorrectInvestmentFunds'
          },
          ['connection_status_' + pageName + '_offline']: {
            bind: 'onInternetDisconnection'
          },
          ['connection_status_' + pageName + '_online']: {
            bind: 'onInternetReconnection'
          },
          global_open_document_url_success: {
            bind: 'handleDocumentStatus'
          },
          global_open_document_url_error: {
            bind: 'handleDocumentStatus'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewDetailsData'
          },
          global_action_launcher_share_file_error: {
            bind: 'handleDocumentStatus'
          },
          invest_advisory_portfolio__call_me_back_show_sticky_button: {
            bind: 'stickyButtonCallMeBack'
          },
          invest_advisory_portfolio_exit_no_assistance: {
            bind: 'continueExitFlowAfterAssistance'
          },
          invest_advisory_portfolio_proactive_assistance_exit: {
            bind: 'confirmPortfolioExit'
          }
        },
        out: {
          invest_advisory_portfolio_profiling_analytics: {
            bind: 'bbva-feature-investment-portfolio-profiling-trace-event'
          },
          invest_advisory_portfolio_hiring_analytics: {
            bind: 'bbva-feature-investment-portfolio-hiring-trace-event'
          },
          global_action_launcher_share_file: {
            bind: 'share-investment-proposal'
          },
          invest_advisory_portfolio_exit_feature_investment_portfolio: {
            bind: 'exit-feature-investment-portfolio',
            backStep: true,
            skipHistory: true
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_open_document_url: {
            bind: 'native-request-pdf'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva'
          },
          invest_advisory_portfolio_share_receipt_capture: {
            bind: 'investment-portfolio-hiring-share-receipt'
          },
          invest_advisory_portfolio_set_successfull_data: {
            bind: 'investment-portfolio-hiring-set-data'
          },
          dashboard_refresh_financial_overview: {
            bind: 'help-modal-footer-button-click-back-to-dashboard',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          },
          global_retargeting_form_submission_invest: {
            bind: 'feature-investment-portfolio-retargeting-post'
          },
          global_retargeting_send_information_update_invest: {
            bind: 'exit-feature-investment-portfolio'
          },
          global_retargeting_contracted_product_offer_invest: {
            bind: 'feature-invest-hiring-multistep-offer-completed-successfully'
          },
          invest_advisory_portfolio_hiring_documents: {
            bind: 'view-pdf-analytics'
          },
          invest_advisory_portfolio_hiring_external_link_documents: {
            bind: 'bbva-feature-investment-portfolio-hiring-external-link'
          },
          invest_advisory_portfolio_profilling_data: {
            bind: 'profiling-test-step-answers'
          },
          global_retargeting_set_investment_properties: {
            bind: 'feature-investment-portfolio-update-custom-fields'
          },
          global_retargeting_go_next_step_invest: {
            bind: 'feature-investment-portfolio-rtg-update-step'
          },
          invest_advisory_portfolio_exit_process_channel_to_digital_butler: {
            bind: 'bbva-investment-exit-page-button-blue',
            link: {
              page: 'digitalButler'
            }
          },
          invest_advisory_portfolio__call_me_back_init_summary_configuration: {
            bind: 'bbva-investment-call-me-back-init-summary'
          },
          invest_advisory_portfolio__call_me_back_init_sticky_configuration: {
            bind: 'bbva-investment-call-me-back-init-sticky'
          },
          invest_advisory_portfolio_exit_intent: {
            bind: 'invest-advisory-portfolio-exit'
          },
          INVEST_ADVISORY_PORTFOLIO_SHARE_PROPOSAL_EXTERNAL_LINK: {
            bind: 'proposal-detail-show-proposal-pdf',
            analytics: analyticsProfiling.shareProposalExternalLink
          },
          INVEST_ADVISORY_PORTFOLIO_INVESTMENT_GUIDE_EXTERNAL_LINK: {
            bind: 'proposal-detail-show-guide-pdf',
            analytics: analyticsProfiling.investmentGuideExternalLink
          },
          INVEST_ADVISORY_PORTFOLIO_EDIT_AMOUNT_PROPOSAL_INTERNAL_LINK: {
            bind: 'proposal-detail-show-amount-change',
            analytics: analyticsProfiling.editAmountProposalInternalLink
          }
        }
      }
    }
  };

  const analyticManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-investment-portfolio',
    familyPath: '@glomo-web-components/bbva-analyticmanager-other-investment-origination',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          invest_advisory_portfolio_profiling_analytics: {
            bind: 'fireProfilingAnalytics'
          },
          invest_advisory_portfolio_hiring_analytics: {
            bind: 'fireHiringAnalytics'
          },
          invest_advisory_portfolio_hiring_documents: {
            bind: 'fireHiringDocumentsAnalytics'
          },
          invest_advisory_portfolio_hiring_external_link_documents: {
            bind: 'fireExternalLink'
          },
          invest_advisory_portfolio_profilling_data: {
            bind: 'fireMultistepAnswer'
          }
        },
        out: {
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_WELCOME_ANALYTICS: {
            bind: 'investment-profiling-page-view-welcome-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_EXPERIENCE_ANALYTICS: {
            bind: 'investment-profiling-page-view-experience-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_INITIAL_AMOUNT_ANALYTICS: {
            bind: 'investment-profiling-page-view-initial-amount-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_INVESTMENT_TERM_ANALYTICS: {
            bind: 'investment-profiling-page-view-investment-term-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_INVESTMENT_PERCENTAGE_ANALYTICS: {
            bind: 'investment-profiling-page-view-investment-percentage-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_INVESTMENT_EXPECTATIONS_ANALYTICS: {
            bind: 'investment-profiling-page-view-investment-expectations-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_PERFORMANCE_ANALYTICS: {
            bind: 'investment-profiling-page-view-performance-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_LOST_ATTITUDE_ANALYTICS: {
            bind: 'investment-profiling-page-view-lost-attitude-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_FINALIZED_ANALYTICS: {
            bind: 'investment-profiling-page-view-finalized-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_MY_PROFILE_ANALYTICS: {
            bind: 'investment-profiling-page-view-my-profile-analytics',
            analytics: analyticsProfiling.advancedPageView
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_CONTINUE_ANALYTICS: {
            bind: 'investment-profiling-internal-link-continue-analytics',
            analytics: analyticsProfiling.internalLinkContinue
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_GO_BACK_ANALYTICS: {
            bind: 'investment-profiling-internal-link-go-back-analytics',
            analytics: analyticsProfiling.internalLinkGoBack
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_PERSONALIZED_PROPOSAL_ANALYTICS: {
            bind: 'investment-profiling-page-view-personalized-proposal-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_INVESTMENT_SCENARIOS_ANALYTICS: {
            bind: 'investment-profiling-page-view-investment-scenarios-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_CAPITAL_PRESERVATION_ANALYTICS: {
            bind: 'investment-profiling-page-view-capital-preservation-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_FLOW_GENERATION_ANALYTICS: {
            bind: 'investment-profiling-page-view-flow-generation-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_CAPITAL_GROWTH_ANALYTICS: {
            bind: 'investment-profiling-page-view-capital-growth-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_LIQUIDITY_ANALYTICS: {
            bind: 'investment-profiling-page-view-liquidity-analytics',
            analytics: analyticsProfiling.pageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_OPERATION_ERROR_ANALYTICS: {
            bind: 'investment-profiling-page-view-operation-error-analytics',
            analytics: analyticsProfiling.errorPageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_CONNECTION_ERROR_ANALYTICS: {
            bind: 'investment-profiling-page-view-connection-error-analytics',
            analytics: analyticsProfiling.errorPageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_ACCOUNT_ERROR_ANALYTICS: {
            bind: 'investment-profiling-page-view-account-error-analytics',
            analytics: analyticsProfiling.errorPageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_BENEFICIARY_ERROR_ANALYTICS: {
            bind: 'investment-profiling-page-view-beneficiary-error-analytics',
            analytics: analyticsProfiling.errorPageView
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_BENEFICIARY_PERCENTAGE_ERROR_ANALYTICS: {
            bind: 'investment-profiling-page-view-beneficiary-percentage-error-analytics',
            analytics: analyticsProfiling.errorPageView
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_STICKY_CALL_ME_BACK_ANALYTICS: {
            bind: 'investment-profiling-internal-link-sticky-call-me-back-analytics',
            analytics: analyticsProfiling.internalLinkStickyCMB
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_SUMMARY_CALL_ME_BACK_ANALYTICS: {
            bind: 'investment-profiling-internal-link-summary-call-me-back-analytics',
            analytics: analyticsProfiling.internalLinkStickyCMB
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_BLUE_ANALYTICS: {
            bind: 'investment-profiling-internal-link-blue-analytics',
            analytics: analyticsProfiling.internalLinkBlue
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_INFORMATION_MODAL_ERROR_ANALYTICS: {
            bind: 'investment-profiling-page-view-amount-modify-invest-analytics',
            analytics: analyticsProfiling.errorModal
          },
          INVEST_ADVISORY_PORTFOLIO_APP_ON_CLICK_START_PERSONALIZED_PROPOSAL_ANALYTICS: {
            bind: 'investment-hiring-app-on-click-start-personalized-proposal-analytics',
            analytics: analyticsHiring.appOnClickStart
          },
          INVEST_ADVISORY_PORTFOLIO_APP_PAGE_VISIT_ASSOCIATED_ACCOUNTS_ANALYTICS: {
            bind: 'investment-hiring-app-page-visited-associated-accounts-analytics',
            analytics: analyticsHiring.appPageVisit
          },
          INVEST_ADVISORY_PORTFOLIO_APP_STARTED_FIRST_ASSOCIATED_ACCOUNTS_ANALYTICS: {
            bind: 'investment-hiring-app-started-associated-accounts-analytics',
            analytics: analyticsHiring.appStarted
          },
          INVEST_ADVISORY_PORTFOLIO_APP_STEP_TERMS_CONDITIONS_ANALYTICS: {
            bind: 'investment-hiring-app-step-terms-conditions-analytics',
            analytics: analyticsHiring.appStepTermsAndConditions
          },
          INVEST_ADVISORY_PORTFOLIO_APP_STEP_CONFIRMATION_ANALYTICS: {
            bind: 'investment-hiring-app-step-confirmation-analytics',
            analytics: analyticsHiring.appStepConfirmation
          },
          INVEST_ADVISORY_PORTFOLIO_APP_STEP_OTP_ANALYTICS: {
            bind: 'investment-hiring-app-step-otp-analytics',
            analytics: analyticsHiring.appStepOTP
          },
          INVEST_ADVISORY_PORTFOLIO_APP_COMPLETED_FINISHED_ANALYTICS: {
            bind: 'investment-hiring-app-completed-finished-analytics',
            analytics: analyticsHiring.appCompleted
          },
          INVEST_ADVISORY_PORTFOLIO_PAGE_VIEW_INFORMATION_ERROR_ANALYTICS: {
            bind: 'investment-hiring-page-view-information-error-analytics',
            analytics: analyticsHiring.errorPageView
          },
          INVEST_ADVISORY_PORTFOLIO_APP_ON_CLICK_START_STICKY_CALL_ME_BACK_ANALYTICS: {
            bind: 'investment-hiring-app-on-click-start-sticky-call-me-back-analytics',
            analytics: analyticsHiring.internalLinkStickyCMB
          },
          INVEST_ADVISORY_PORTFOLIO_APP_ON_CLICK_START_SUMMARY_CALL_ME_BACK_ANALYTICS: {
            bind: 'investment-hiring-app-on-click-start-summary-call-me-back-analytics',
            analytics: analyticsHiring.internalLinkStickyCMB
          },
          INVEST_ADVISORY_PORTFOLIO_APP_ON_CLICK_START_BLUE_ANALYTICS: {
            bind: 'investment-hiring-app-on-click-start-blue-analytics',
            analytics: analyticsHiring.internalLinkBlue
          },
          INVEST_ADVISORY_HIRING_EXTERNAL_LINK_DOCUMENTS: {
            bind: 'bbva-invest-hiring-view-pdf-analytics',
            analytics: analyticsHiring.termsAndConditionsExternalLinkClick
          },
          INVEST_ADVISORY_EXTERNAL_LINK_HIRING_SHOW_MODAL_DOCUMENTS: {
            bind: 'bbva-analyticmanager-investment-portfolio-hiring-external-link-document',
            analytics: analyticsHiring.hiredDocumentsExternalLinkClick
          },
          INVEST_ADVISORY_EXTERNAL_LINK_HIRING_SHARE_MODAL_DOCUMENTS: {
            bind: 'bbva-analyticmanager-investment-portfolio-hiring-external-link-share',
            analytics: analyticsHiring.hiredDocumentsExternalLinkClick
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_STEPS_EXPERIENCE: {
            bind: 'analytics-checkbox-steps-experience',
            analytics: analyticsProfiling.experienceStepInternalLink
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_STEPS_INVESTMENT_HORIZONS: {
            bind: 'analytics-radio-steps-investment-horizons',
            analytics: analyticsProfiling.investmentHorizonStepInternalLink
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_STEPS_PERCENTAGE_INVESTMENT: {
            bind: 'analytics-radio-steps-percentage-investment',
            analytics: analyticsProfiling.percentageInvestmentStepInternalLink
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_STEPS_INVESTMENT_EXPECTATIONS: {
            bind: 'analytics-radio-steps-investment-expectations',
            analytics: analyticsProfiling.investmentExpectativesStepInternalLink
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_STEPS_INVESTMENT_PERFORMANCE: {
            bind: 'analytics-radio-steps-investment-performance',
            analytics: analyticsProfiling.performanceStepInternalLink
          },
          INVEST_ADVISORY_PORTFOLIO_INTERNAL_LINK_STEPS_LOSS_ATTITUDE: {
            bind: 'analytics-radio-steps-loss-attitude',
            analytics: analyticsProfiling.lossAttitudeStepInternalLink
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          invest_advisory_portfolio_share_receipt_capture: {
            bind: 'captureReceipt'
          },
          invest_advisory_portfolio_set_successfull_data: {
            bind: 'result'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const proactiveAssistanceFeature = {
    zone: 'app__main',
    tag: 'relationship-models-proactive-assistance-mx',
    familyPath: '@glomo-web-components/relationship-models-proactive-assistance-mx',
    type: 'UI',
    render: 'litElement',
    properties: {
      id: 'proactiveAssistanceInvestAdvisoryPortfolio',
      host,
      native,
      requiredToken,
      interactionContextApiVersion: interactionContextV1,
      routingApiVersion: routingV2,
      isIos: nativeIos,
      intentId: 'Contratar_Invest',
      currentAccessRoute: 'GLOMO',
      intentCategory: 'COMPLEX_SALES',
      operationType: 'CONTRACTING',
      productName: 'Portafolio de Inversión',
      maxNumChannels: 2,
      emergentPopupAccessibilityCloseText: 'Cerrar',
      featureFlagConfig: [
        {
          property: '_investAdvisoryPortfolio',
          name: 'glomo.widgetcallmeback.investAdvisoryPortfolioRB'
        },
        {
          property: '_proactiveAssistance',
          name: 'glomo.investAdvisoryPortfolio.proactiveAssistance'
        }
      ],
      disabledPopupAutoCloseDelay: 20000,
      proactiveAssistanceConfig: {
        firstTechnicalId: '',
        analyticsProcessOrigin: 'servicio inversion',
        analyticsFallbackTechnicalId: 'proposal-detail',
        stepKeyPaths: [
          'stepId',
          'channel',
          'event',
          'step.step',
          'step',
          'editedStep.step',
          'id'
        ],
        analyticsStepOriginByTechnicalId: {
          'proposal-detail': 'propuesta personalizada'
        },
        technicalIdByStep: {
          'page-view-experience': 'step-1',
          'page-view-initial-amount': 'step-2',
          'page-view-investment-term': 'step-3',
          'page-view-personalized-proposal': 'proposal-detail',
          'app-started-associated-accounts': 'renderAssociatedAccountStep',
          'app-page-visited-associated-accounts': 'renderAssociatedAccountStep',
          'app-step-terms-conditions': 'renderTermsAndConditionsStep',
          'app-step-confirmation': 'renderSummaryStep'
        },
        transitionOpenEvents: [
          'bbva-feature-investment-portfolio-profiling-trace-event',
          'bbva-feature-investment-portfolio-hiring-trace-event'
        ],
        transitionCloseEvents: [],
        allCompleteEvent: 'feature-invest-hiring-multistep-offer-completed-successfully',
        allCompleteDetailKey: 'allCompleted',
        allCompleteTechnicalId: 'default',
        abandonEvents: [
          'invest-advisory-portfolio-exit'
        ]
      },
      cellsConnections: {
        in: {
          invest_advisory_portfolio_INIT_PAGE: {
            bind: 'restartProactiveAssistanceFlow'
          },
          global_feature_flag_collection_updated: {
            bind: 'setFeatureFlag'
          },
          global_logout_sesion_expiration: {
            bind: 'resetSessionVisitCount'
          },
          global_client_id: {
            bind: 'getCustomerId'
          },
          global_storage_get_loginData_success: {
            bind: 'getCustomerId'
          },
          invest_advisory_portfolio_exit_intent: {
            bind: 'exitController'
          },
          global_call_me_back_navigation: {
            bind: 'callMeBackCompleted'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          }
        },
        out: {
          invest_advisory_portfolio__call_me_back_init_modal_configuration: {
            bind: 'relationship-models-proactive-assistance-mx-call-me-back'
          },
          invest_advisory_portfolio_proactive_assistance_exit: {
            bind: 'relationship-models-proactive-assistance-mx-modal-button-exit',
            backStep: true,
            skipHistory: true,
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('salir del proceso', 'modal')
          },
          invest_advisory_portfolio_exit_no_assistance: {
            bind: 'relationship-models-proactive-assistance-mx-open-exit-offer-modal'
          },
          open_control_veil: {
            bind: 'show-loader'
          },
          close_control_veil: {
            bind: 'hide-loader'
          },
          global_entry_points_call_me_back: {
            bind: 'relationship-models-proactive-assistance-mx-update-entry-points'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line',
            'forward-to-native': true
          },
          invest_advisory_portfolio_call_me_back_init_modal_configuration_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-call-me-back-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistancePageView('popup')
          },
          invest_advisory_portfolio_close_emergent_button_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-close-emergent-button-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('cerrar asistencia proactiva', 'link')
          },
          invest_advisory_portfolio_link_emergent_button_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-link-emergent-button-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('contactar a un asesor', 'link')
          },
          invest_advisory_portfolio_emergent_button_page_visit_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-emergent-button-page-visit-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistancePageView('modal')
          },
          invest_advisory_portfolio_emergent_button_app_started_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-emergent-button-app-started-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('solicitar llamada', 'modal')
          },
          invest_advisory_portfolio_emergent_button_app_schedule_call_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-emergent-button-app-schedule-call-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('agendar llamada', 'modal')
          },
          invest_advisory_portfolio_emergent_button_error_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-emergent-button-error-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceFootprintAnalyticError('error operacion no disponible')
          },
          invest_advisory_portfolio_close_init_offert: {
            bind: 'relationship-models-proactive-assistance-mx-open-exit-offer-modal-init-offert',
            analytics: analyticsProactiveAssistance.proactiveAssistancePageView('modal')
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/invest-advisory-portfolio'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        className: `bg-light ${nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        headerHidden: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {
            contract_product_section_oc_banner_invest_advisory_onboarding_clicked: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            welcome_template_active: {
              bind: 'template-active'
            }
          }
        }
      },
      propertiesSpherica: {
        drawerWidth: '100%',
        className: `bg-light ${nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        headerHidden: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {
            contract_product_section_oc_banner_invest_advisory_onboarding_clicked: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            welcome_template_active: {
              bind: 'template-active'
            }
          }
        }
      }
    },

    components: [
      cellsConnectionStatus(pageName),
      lifeCycle,
      appSettingsFundsData,
      featureInvestmentPortfolio,
      proactiveAssistanceFeature,
      analyticManager,
      cellsShareGenericReceipt,
      controllerCallMeBack(callMeBackInvestConfig)
    ]
  };

  if (native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-investment-portfolio');

  return sphericaPageUtils.spherize(base);
};
