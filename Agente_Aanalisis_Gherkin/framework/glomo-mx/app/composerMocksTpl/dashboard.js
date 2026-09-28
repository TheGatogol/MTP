'use strict';

/*eslint max-statements: ["error", 200]*/
/*eslint complexity: ["error", 100]*/
/* eslint-disable */
module.exports = CONFIG => {
  const pageName = 'dashboard';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const {
    getLanguage,
    getCountry,
    APP_SIDEBAR: appSidebar,
    appFooter,
    getFooterMenuOptions,
    getFooterMenuOptionsMinior,
    getMenuSidebarSections,
    appFooterDeviceController,
    getMenuSidebarSectionsMinior,
    getGreetingConfiguration,
    get,
    connectionsIn,
    connectionsOut,
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('dashboard');
  const LITERALS = require('./analytics/common/_literals');
  const LANGUAGE = getLanguage();
  const isNativeIos = CONFIG.nativeIos || false;
  const localStorageApp = require('./common/_local-storage');
  const COUNTRY = getCountry();
  // eslint-disable-next-line new-cap
  const { native = false, globalServices: { host, requiredToken = 'tsec', versions: { pfmV2 } } } = CONFIG;
  const { taxonomicGroupIndexes, dashboardPfmInitialize, cardProductTypes, cardValidStatuses, accountValidStatuses } = require('./pfm/_constants');
  const { dashboardOperationsList, dashboardOperationsListMinior } = require('./dashboard/_operationals');
  const { notificationsData } = require('./dashboard/_notifications');
  const oldDashboard = require('./dashboard/_oldDashboard')(CONFIG);
  const { featureHomeFutura, routerFuturaHome, analyticsFuturaHome } = require('./dashboard/_futuraDashboard');
  const APP_FOOTER = appFooter(CONFIG, 'dashboard');

  const { timeoutHandler } = require('./common/_cross-components');
  const ANALYTICS = {
    INVESTMENTS: require('./analytics/_investmentsFollowUp')(),
    OPERATIVES: require('./analytics/_operationals')(CONFIG),
    PFM: require('./analytics/_pfm')(CONFIG),
    NOTIFICATIONS: require('./analytics/_notifications')(CONFIG),
    DEPOSITS: require('./analytics/_deposits')(CONFIG),
    EXPERIENCES_SECTION: require('./analytics/_experiencesSection')(),
    ALWAYS_ON: require('./analytics/_standInAlwaysOn')(),
    FREQUENT_OPERATIONS: require('./analytics/_frequentOperations')(),
    OC_ACCOUNT: require('./analytics/_ocAccount'),
    EXPENSES_GROUP: require('./analytics/_expensesGroup')(),
    TIPS_FINANCE_PROFILING: require('./analytics/_userInfoTipsFinanceProfiling')()
  };
  const menuOptions = getFooterMenuOptions();
  const menuOptionsMinior = getFooterMenuOptionsMinior;
  const sidebarOptions = getMenuSidebarSections(CONFIG, COUNTRY);
  const APP_FOOTER_DEVICE_CONTROLLER = appFooterDeviceController(CONFIG, ANALYTICS.PFM);
  const subscriptionsApiVersion = CONFIG.globalServices.versions.subscriptions;
  const { getFuturaCacheDefaultStandIn, operativesHomeDefault, getfuturaHomeDefaultBase, futuraTabConfigMonoProduct, configurationClientTypeFutura, futuraDictionaryFlags } = require('./dashboard/_config');
  const { forceNotAccountId = false, onboardingKey, isFetchStores, mposKey, evidenceTypeKey } = CONFIG.businessIntelligencePayments;

  const cellsMobilePush = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-push',
    properties: {
      cellsConnections: {
        in: {
          dashboard_init_page: {
            bind: 'getPermissionStatus'
          },
          dashboard_notifications_push_get_status_permission: {
            bind: 'getPermissionStatus'
          }
        },
        out: {
          dashboard_notifications_push_success: {
            bind: 'get-permission-status-success'
          },
          dashboard_notifications_push_error: {
            bind: 'get-permission-status-error'
          }
        }
      }
    }
  };

  const glomoNotificationsSubscriptionsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-notifications-subscriptions-dm',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      subscriptionsApiVersion,
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          web_view_visibility: {
            bind: 'webViewVisibility'
          }
        },
        out: {
          dashboard_notifications_push_get_status_permission: {
            bind: 'check-notification-status'
          }
        }
      }
    }
  };

  const analyticsTipsFinanceProfiling = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-user-info-tips-finance-profiling',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          tips_finance_profiling_entrypoint_analytic: {
            bind: 'trackEntryPoint'
          }
        },
        out: {
          user_info_tips_finance_profiling_entry_point: {
            bind: 'user-info-tips-finance-profiling-entry-point-access',
            analytics: ANALYTICS.TIPS_FINANCE_PROFILING.internalLinkShowBadges
          }
        }
      }
    }
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos ? false : '',
      cellsConnections: {
        in: {
          global_confirm_logout_message_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {}
      }
    }
  };

  const NOTIFICATIONS_DM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-dashboard-notifications-manager',
    properties: {
      notificationsConfig: notificationsData,
      isNativeIos: isNativeIos,
      native: !!CONFIG.native,
      language: LANGUAGE,
      cellsConnections: {
        in: {
          dashboard_hide_notification_youngsters: {
            bind: 'isGlomoMiniorAccount'
          },
          global_storage_get_dashboard_error: {
            bind: 'setDashboardDataMissing'
          },
          global_storage_get_dashboard_success: {
            bind: 'setDashboardData'
          },
          global_storage_get_app_settings_error: {
            bind: 'setAppSettingsDataMissing'
          },
          global_storage_get_app_settings_success: {
            bind: 'setAppSettingsData'
          },
          dashboard_accounts_from_financial: {
            bind: 'getAccounts'
          },
          dashboard_get_notifications: {
            bind: 'getNotifications'
          },
          hide_old_dashboard: {
            bind: 'setPreventSuggestedRequest'
          },
          link_notification_navigation_page: {
            bind: 'navigateToPage'
          },
          global_login_success_indicators: {
            bind: 'setDetailCustomers'
          },
          dashboard_notifications_push_success: {
            bind: 'setNotificationsStatus'
          },
          dashboard_notifications_push_error: {
            bind: 'showError'
          },
          close_notification_clicked: {
            bind: 'closeNotification'
          },
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          link_notification_clicked_stand_in: {
            bind: 'navigateToStandInPage'
          },
          global_dashboard_init_services: {
            bind: 'isAvailableCreditBureauCard'
          },
          global_storage_get_credit_bureau_card_success: {
            bind: 'setCreditBureauCardLocalStorageSuccess'
          },
          global_storage_get_credit_bureau_card_error: {
            bind: 'getCreditBureauCardLocalStorageError'
          },
          global_set_success_list_evidences: {
            bind: 'setListEvidences'
          },
          global_history_credit_receipt_exit: {
            bind: 'setEnableCreditBureauCard'
          },
          dashboard_frequent_operations_help_modal_button_click: {
            bind: 'setButtonOperations'
          },
          dashboard_frequent_operations_help_modal_link_click: {
            bind: 'setLinkOperations'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          frequent_operations_get_suggested_operations_success: {
            bind: 'parseOperations'
          },
          dashboard_reset_page: {
            bind: 'sendOperationsResponse'
          },
          frequent_operations_delete_suggested_operation_success: {
            bind: 'refreshFrequentOperations'
          },
          BPS_DELETE_SUGGESTED_OPERATION_SUCCESS_EVENT: {
            bind: 'refreshFrequentOperations'
          }
        },
        out: {
          dashboard_notifications_list: {
            bind: 'notifications-list'
          },
          set_dasboard_notifications_card: {
            bind: 'card-notification-set-properties'
          },
          dashboard_open_notification: {
            bind: 'open-notification'
          },
          dashboard_open_notification_analytics: {
            bind: 'open-notification-analytics'
          },
          dashboard_close_notification: {
            bind: 'close-notification'
          },
          dashboard_hide_notification: {
            bind: 'hide-notification'
          },
          dashboard_notification_clicked_link: {
            bind: 'notification-link-clicked'
          },
          dashboard_navigate_to_coming_soon: {
            bind: 'navigate-to-coming-soon',
            link: {
              page: 'comingSoon'
            }
          },
          dashboard_navigate_to_assistance_manager: {
            bind: 'navigate-to-assistance-manager',
            link: {
              page: 'assistanceManager'
            }
          },
          navigate_to_history_credit: {
            bind: 'navigate-to-history-credit',
            link: {
              page: 'historyCredit'
            }
          },
          dashboard_notifications_push_get_status_permission: {
            bind: 'notifications-get-permission-status'
          },
          global_set_in_storage: {
            bind: 'set-local-storage'
          },
          global_get_from_storage: {
            bind: 'dashboard-notifications-get-dashboard-in-storage'
          },
          dashboard_show_toast_success_notifications_settings: {
            bind: 'show-toast'
          },
          dashboard_notifications_open_native_settings_ios: {
            bind: 'open-native-settings'
          },
          open_app_permissions_settings: {
            bind: 'open-settings',
            'forward-to-native': true
          },
          set_dasboard_notifications_card_stand_in: {
            bind: 'card-notification-set-properties-stand-in'
          },
          dashboard_open_notification_stand_in: {
            bind: 'open-notification-stand-in'
          },
          dashboard_stand_in_navigate_to_limited_operatives: {
            bind: 'navigate-to-limited-operatives-info',
            link: {
              page: 'limitedOperativesInfo'
            },
            analytics: ANALYTICS.ALWAYS_ON.standInOperatives('', LITERALS.commons.global_position)
          },
          dashboard_close_stand_in_notification: {
            bind: 'close-stand-in-notification',
            analytics: ANALYTICS.ALWAYS_ON.standInOperatives('', LITERALS.commons.global_position)
          },
          global_dashboard_service_credit_bureau_card: {
            bind: 'init-service-credit-bureau-card'
          },
          dashboard_frequent_operations_navigation_transfers: {
            bind: 'navigate-to-oc-frequent-operations-transfer',
            link: {
              page: 'ocFrequentOperationsTransfer'
            }
          },
          dashboard_frequent_operations_navigation_operations_list: {
            bind: 'navigate-to-frequent-operations-list',
            link: {
              page: 'frequentOperationsList'
            }
          },
          dashboard_frequent_operations_set_panel_info_heading: {
            bind: 'frequent-operations-set-panel-info-heading'
          },
          dashboard_frequent_operations_set_panel_info_text: {
            bind: 'frequent-operations-set-panel-info-text'
          },
          dashboard_frequent_operations_set_help_modal_style: {
            bind: 'frequent-operations-set-help-modal-style'
          },
          dashboard_frequent_operations_set_help_modal_button: {
            bind: 'frequent-operations-set-help-modal-button'
          },
          dashboard_frequent_operations_set_help_modal_link: {
            bind: 'frequent-operations-set-help-link-button'
          },
          dashboard_frequent_operations_fire_page_view: {
            bind: 'frequent-operations-send-balance-warning'
          },
          dashboard_frequent_operations_fire_app_on_click_start: {
            bind: 'frequent-operations-send-operation-data'
          },
          dashboard_frequent_operations_close_help_modal: {
            bind: 'frequent-operations-close-help-modal'
          },
          dashboard_frequent_operations_get_suggested_operations: {
            bind: 'frequent-operations-get-suggested-operations'
          },
          dashboard_frequent_operations_send_response: {
            bind: 'frequent-operations-send-response'
          },
          dashboard_frequent_operations_send_operation_amount: {
            bind: 'frequent-operations-send-operation-amount'
          },
          dashboard_frequent_operations_send_operation_services: {
            bind: 'navigate-to-oc-frequent-operations-services',
            link: {
              page: 'billPayments'
            }
          }
        }
      }
    }
  };

  const inAppCallsController = {
    zone: 'app__main',
    tag: 'bbva-controller-inappcalls-mx',
    type: 'DM',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-controller-inappcalls-mx',
    properties: {
      host,
      native,
      requiredToken,
      isIosDevice: isNativeIos,
      cellsConnections:{
        in:{
          dashboard_loaded: {
              bind: 'init'
            },
          global_set_app_settings: {
            bind: 'appSettingsParams'
          },
          global_feature_flag_collection_updated: {
              bind: 'featureFlags'
          },
          native_login_success: {
              bind: 'getGlobalClientId'
          },
          global_storage_get_in_app_calls_success: {
              bind: 'setSenderId'
          },
          global_storage_get_in_app_calls_error: {
              bind: 'errorGetSenderId'
          }
        },
        out:{
          global_get_from_storage: {
              bind: 'get-from-local-storage'
          },
          global_set_in_storage: {
              bind: 'set-in-local-storage'
          },
        }
      }
    }
  };

  const frequentOperationsModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    container: true,
    properties: {
      id: 'frequentOperations',
      fullHeight: true,
      fixedFooter: true,
      hideContentPaddingTop: true,
      headerType: 'modal',
      closeModalElements: [ 'header-right-primary' ],
      iconRightPrimary: 'bbva:close',
      headerText: 'frequent-operations-insufficient-balance',
      cellsConnections: {
        in: {
          dashboard_frequent_operations_set_help_modal_button: {
            bind: 'buttonText'
          },
          dashboard_frequent_operations_set_help_modal_link: {
            bind: 'linkText'
          },
          dashboard_frequent_operations_open_help_modal: {
            bind: 'open'
          },
          dashboard_frequent_operations_close_help_modal: {
            bind: 'close'
          }
        },
        out: {
          dashboard_frequent_operations_help_modal_button_click: {
            bind: 'help-modal-footer-button-click'
          },
          dashboard_frequent_operations_help_modal_link_click: {
            bind: 'help-modal-footer-link-click'
          }
        }
      }
    }
  };

  const frequentOperationsPanelInfo = {
    zone: 'frequentOperations.slot-content',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      headingLevelTitle: 'h3',
      microillustration: 'info',
      cellsConnections: {
        in: {
          dashboard_frequent_operations_set_panel_info_heading: {
            bind: 'heading'
          },
          dashboard_frequent_operations_set_panel_info_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const suggestedOperationsDp = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-suggested-operations',
    familyPath: '@glomo-web-components/bbva-dataprovider-suggested-operations',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      version: CONFIG.globalServices.versions.suggestedOperations,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          dashboard_frequent_operations_get_suggested_operations: {
            bind: 'getSuggestedOperations'
          }
        },
        out: {
          frequent_operations_get_suggested_operations_success: {
            bind: 'suggested-operations-api-dm-fetch'
          }
        }
      }
    }
  };

  const glomoUpdateAddressPayrollManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-update-address-payroll-manager',
    properties: {
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'getPostalAddressNomineesFlag'
          },
          dashboard_accounts_from_financial: {
            bind: 'receiveDataFo'
          },
          get_accounts_documentation_dossiers_data_success: {
            bind: 'requestDossierSucces'
          }
        },
        out: {
          request_account_manager: {
            bind: 'request-account-manager'
          },
          navigate_postal: {
            bind: 'navigate-to-postal',
            link: {
              page: 'postalAddressNominees',
              featureFlag: {
                'key': 'glomo.access.postalAddressNominees',
                'defaultValue': true
              }
            }
          }
        }
      }
    }
  };

  const paymentsBusinessInteligenceOverview = [
    {
      zone: 'app__main',
      type: 'UI',
      familyPath: '@glomo-web-components/bbva-controller-business-intelligence-overview-mx',
      tag: 'bbva-controller-business-intelligence-overview-mx',
      render: 'litElement',
      properties: {
        onboardingKey,
        evidenceTypeKey,
        isFetchStores,
        mposKey,
        forceNotAccountId,
        cellsConnections: {
          in: {
            __bridge_page_dashboard: {
              bind: 'requestOnboarding'
            },
            global_set_success_list_evidences: {
              bind: 'updateMposUserStatus'
            },
            global_storage_get_pbio_onboarding_success: {
              bind: 'resolveSuccessOnboarding'
            },
            global_storage_get_pbio_onboarding_error: {
              bind: 'resolveErrorOnboarding'
            },
            global_storage_get_loginData_success: {
              bind: 'getGlobalClientId'
            },
            global_feature_flag_collection_updated: {
              bind: 'getFeatureFlags'
            },
            global_client_id: {
              bind: 'getGlobalClientId'
            },
            global_financial_accounts: {
              bind: 'getAccounts'
            },
            dashboard_open_page_businessIntelligencePaymentsTransactionList: {
              bind: 'openPage'
            },
            business_intelligence_futura_see_all_commerces: {
              bind: 'futuraNavigationMode'
            }
          },
          out: {
            global_get_from_storage: {
              bind: 'local-storage-onboarding-request'
            },
            futura_check_business_intelligence_configuration: {
              bind: 'user-bi-call-status-update'
            },
            dashboard_resolve_pbio_onboaring_isOnboarding: {
              bind: 'local-storage-onboarding-resolve'
            },
            dashboard_bi_get_customer_id: {
              bind: 'business-intelligence-customer-id'
            },
            dashboard_resolve_businessId: {
              bind: 'resolve-businessId'
            },
            dashboard_resolve_accountId: {
              bind: 'resolve-accountId'
            },
            dashboard_resolve_toPostedDate: {
              bind: 'resolve-toPostedDate'
            },
            dashboard_resolve_fromPostedDate: {
              bind: 'resolve-fromPostedDate'
            },
            dashboard_navigate_to_businessIntelligencePaymentsTransactionList: {
              bind: 'navigate-to-page',
              link: {
                page: 'businessIntelligencePaymentsTransactionList',
                params: {
                  viewMode: 'viewMode'
                }
              }
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      familyPath: '@bbva-web-components-widgets/payments-business-inteligence-overview',
      tag: 'payments-business-inteligence-overview',
      render: 'litElement',
      featureFlag: {
        key: 'glomo.dashboard.payments.businessIntelligenceTl',
        defaultValue: true
      },
      properties: {
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        hidden: false,
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        apiVersion: CONFIG.globalServices.versions.businessIntelligencePayments,
        isOneColumnLayout: CONFIG.businessIntelligencePayments.isOneColumnLayout,
        language: CONFIG.lang,
        localCurrency: CONFIG.localCurrency,
        pageSize: CONFIG.businessIntelligencePayments.pageSize,
        pageSizeStores: CONFIG.businessIntelligencePayments.pageSizeStores,
        processId: CONFIG.businessIntelligencePayments.processId,
        operationTypes: CONFIG.businessIntelligencePayments.operationTypes,
        paymentChannel: CONFIG.businessIntelligencePayments.paymentChannel,
        viewChargebacks: CONFIG.businessIntelligencePayments.viewChargebacks,
        viewMode: 'bi-payments-card',
        cellsConnections: {
          in: {
            dashboard_resolve_businessId: {
              bind: 'businessId'
            },
            dashboard_resolve_accountId: {
              bind: 'accountId'
            },
            dashboard_resolve_toPostedDate: {
              bind: 'toPostedDate'
            },
            dashboard_resolve_fromPostedDate: {
              bind: 'fromPostedDate'
            },
            hide_old_dashboard: {
              bind: 'hidden',
            },
          },
          out: {
            dashboard_open_page_businessIntelligencePaymentsTransactionList: {
              bind: 'payments-business-inteligence-overview-open'
            }
          }
        }
      }
    }
  ];

  const customersGlobalApis = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      cellsConnections: {
        in: {
          request_account_manager: {
            bind: 'getDocumentationDossiers'
          }
        },
        out: {
          get_accounts_documentation_dossiers_data_success: {
            bind: 'get-documentation-dossiers-response'
          }
        }
      }
    }
  };

  const controllerPfmDashboardMx = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-controller-pfm-dashboard-mx',
    tag: 'bbva-controller-pfm-dashboard-mx',
    render: 'litElement',
    featureFlag: dashboardPfmInitialize,
    properties: {
      host,
      requiredToken,
      pfmApiVersion: pfmV2,
      pfmPostApiVersion: pfmV2,
      cardTypes: cardProductTypes,
      cardValidStatuses,
      accountValidStatuses,
      native,
      taxonomicGroupIndexes,
      excludeCardSubProduct: [ 'DEBIT_CARD' ],
      defaultProfileInitialized: true,
      amountWithSign: true,
      searchOnlyCurrentPfm: true,
      footerPages: menuOptions.items,
      cellsConnections: {
        in: {
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          dashboard_init_page_first_time: {
            bind: 'initStandIn'
          },
          global_version_pfm_value: {
            bind: 'globalVersionPfmValue'
          },
          dashboard_update_monoproduct_user: {
            bind: 'isMonoproductUser'
          },
          dashboard_accounts_loaded: {
            bind: 'checkDefaultPfmProfile'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlagPfm'
          },
          footer_items_changed: {
            bind: 'setFooterPages'
          },
          footer_items_changed_glomo_minior: {
            bind: 'setFooterPages'
          },
          dashboard_accounts: {
            bind: 'accounts'
          },
          dashboard_list_virtual_contracts: {
            bind: 'virtualCards'
          },
          global_dashboard_cards: {
            bind: 'cards'
          },
          notificationscenter_totals_number_unread_informative_warning: {
            bind: 'unreadNotificationsTotals'
          }
        },
        out: {
          ch_accounts_products: {
            bind: 'parsed-accounts-for-products'
          },
          ch_card_products: {
            bind: 'parsed-cards-for-products'
          },
          ch_accounts_card_products: {
            bind: 'parsed-accounts-cards-dm'
          },
          ch_default_pfm_profile_data: {
            bind: 'get-default-pfm-profile-data'
          },
          global_pfm_id: {
            bind: 'get-default-pfm-id'
          },
          ch_init_services_pfm_profiles: {
            bind: 'init-services-pfm-profiles'
          },
          dashboard_default_pfm_profile_initialization_failed: {
            bind: 'default-pfm-profile-initialization-failed'
          },
          ch_dashboard_show_incomes_expenses_error: {
            bind: 'get-pfms-error'
          },
          ch_dashoboard_profile_progress_bar_errors: {
            bind: 'pfm-profiles-progress-bar-errors-description'
          },
          dashboard_stand_in_pfm_status: {
            bind: 'dashboard-stand-in-pfm-status'
          },
          dasboard_standin_set_headers: {
            bind: 'set-title-header-standin'
          },
          ch_default_pfm_profile_period_data: {
            bind: 'get-default-pfm-profile-period-data'
          },
          global_feature_flag_pfm_value: {
            bind: 'feature-flag-pfm-value'
          },
          ch_default_pfm_profile_period_startdate: {
            bind: 'get-default-pfm-profile-start-period-data'
          },
          ch_default_pfm_profile_period_enddate: {
            bind: 'get-default-pfm-profile-end-period-data'
          },
          ch_pfm_petty_expenses_products: {
            bind: 'pfm-petty-expenses-products'
          },
          dashboard_footer_items_changed: {
            bind: 'pfm-get-footer-items'
          }
        }
      }
    }
  };

  const DASHBOARD = {
    accounts: true,
    cards: true,
    equity: true,
    loans: true,
    deposits: false,
    funds: false,
    unitlinked: true,
    insurances: true,
    investments: true,
    btrader: true,
    financing: true
  };

  const DASHBOARD_MANAGER = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-glomo-dashboard-manager-mx',
    familyPath: 'cells-glomo-dashboard-manager',
    properties: {
      dashboardOperationsList: dashboardOperationsList,
      dashboardOperationsListMinior,
      products: Object.keys(DASHBOARD).filter(e => DASHBOARD[e]),
      delay: 100,
      financialOverview: false,
      requestUpgradeableAccounts: true,
      sidebarPages: sidebarOptions,
      sidebarPagesMinior: getMenuSidebarSectionsMinior(CONFIG, COUNTRY),
      footerPages: menuOptions.items,
      footerPagesMinior: menuOptionsMinior.items,
      dataProtectionRegulationBanerConfig: {
        text: 'data-protection-regulation-oc-banner-text',
        smallImg: {
          id: 'data-protection-regulation-image',
          alt: 'data-protection-regulation-image-alt',
          src: 'images/dataProtectionRegulation/protection-regulation.svg'
        }
      },
      helloGreeting: true,
      hasDashboardInitialAlert: false,
      standInFeatureFlags: {
        transfer: ['glomo.standin.transfers.alwaysOn', 'glomo.standin.transfers.internal']
      },
      futuraConfigStandIn: getFuturaCacheDefaultStandIn,
      futuraConfigHomeDefault: getfuturaHomeDefaultBase,
      operativesHomeDefault,
      futuraIdsEquivalentsStandIn: [
        {
          idCoronita: 'transfer', idFutura: 'transfers'
        },
        {
          idCoronita: 'helpSection', idFutura: 'help'
        },
        {
          idCoronita: 'contractProductSectionFooterModal', idFutura: 'app-info-structure-home-main-card-gl-last-card-contract-products-click'
        }
      ],
      futuraDictionaryFlags,
      futuraDictionaryModules: {
        moduleFrequentActions: 'home_frequent_actions',
        moduleNbo: 'home_nbo',
        moduleExperiences: 'home_experiences'
      },
      configurationClientTypeFutura,
      futuraTabConfigMonoProduct,
      cellsConnections: {
        in: {
          '__bridge_evt_page-ready': {
            bind: 'processFuturaFlags'
          },
          navigation_page_inapp: {
            bind: 'pageNameLink'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          navigation_from_deep_link_to_dashboard: {
            bind: 'pageNameLink'
          },
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          dashboard_init_page_first_time: {
            bind: 'init'
          },
          dashboard_set_operationals: {
            bind: 'sendOperationals'
          },
          dashboard_accounts: {
            bind: 'loadAccounts'
          },
          global_dashboard_cards: {
            bind: 'loadCards'
          },
          dashboard_deposits: {
            bind: 'loadDeposits'
          },
          dashboard_funds: {
            bind: 'loadFunds'
          },
          dashboard_financing: {
            bind: 'loadFinancing'
          },
          dashboard_loans: {
            bind: 'loadLoans'
          },
          dashboard_equity: {
            bind: 'loadEquity'
          },
          dashboard_btrader: {
            bind: 'loadBtrader'
          },
          dashboard_unitlinked: {
            bind: 'loadUnitlinked'
          },
          dashboard_insurances: {
            bind: 'loadInsurances'
          },
          dashboard_pull_to_refresh_start: {
            bind: 'refreshServices'
          },
          financial_overview_error_mx: {
            bind: 'showErrorInformationNotAvailable'
          },
          financial_overview_refresh: {
            bind: 'restoreDashboardHeader'
          },
          dashboard_financial_overview_max_requests_reached: {
            bind: 'showErrorMaxRequests'
          },
          glomo_device_accesses_navigation_to_backstep_page: {
            bind: 'init'
          },
          global_device_accesses_open_modal_secondary_click: {
            bind: 'init'
          },
          global_launch_logout_clicked: {
            bind: 'manageLogout'
          },
          global_launch_link_clicked: {
            bind: 'manageLinkExternalLogout'
          },
          global_get_equity_private_portfolios_data_success: {
            bind: 'updateEquityBalance'
          },
          global_get_equity_private_portfolios_data_error: {
            bind: 'errorOnGetEquity'
          },
          global_get_btrader_private_portfolios_data_error: {
            bind: 'errorOnGetBtrader'
          },
          dashboard_equity_refresh: {
            bind: 'getEquityBalances'
          },
          dashboard_btrader_refresh: {
            bind: 'getBtraderBalances'
          },
          global_get_unitlinked_private_portfolios_data_success: {
            bind: 'updateUnitLinkedBalance'
          },
          global_get_unitlinked_private_portfolios_data_error: {
            bind: 'errorOnGetUnitlinked'
          },
          dashboard_unitlinked_refresh: {
            bind: 'getUnitLinkedBalances'
          },
          global_show_unitlinked_balances: {
            bind: 'getUnitLinkedBalances'
          },
          global_show_equity_balances: {
            bind: 'getEquityBalances'
          },
          global_show_btrader_balances: {
            bind: 'getBtraderBalances'
          },
          global_login_success_indicators: {
            bind: 'detailCustomers'
          },
          dashboard_set_params_financial_overview_params: {
            bind: 'paramsFinancial'
          },
          show_skeleton_income_expenses_card: {
            bind: 'configurePfmHeaderSafeArea'
          },
          show_operationals_income_expenses_card: {
            bind: 'configurePfmHeaderSafeArea'
          },
          show_income_expenses_card: {
            bind: 'configurePfmHeaderSafeArea'
          },
          navigation_dashboard_to_help_section: {
            bind: 'standInNavigationHelpSection'
          },
          navigate_dashboard_to_stand_in_modals: {
            bind: 'openStandInModal'
          },
          navigation_bar_to_stand_in_mode: {
            bind: 'openStandInModal'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'dataGoogleAssistant'
          },
          dashboard_accounts: {
            bind: 'navigateToOperatives'
          },
          dashboard_accounts_from_financial: {
            bind: 'accountsFromFinancial'
          },
          dashboard_accounts_from_minior_account: {
            bind: 'accountMiniorFunction'
          },
          global_offers_analytics: {
            bind: 'refreshPageConfiguration'
          },
          global_feature_flag_collection_updated: {
            bind: 'getBusinessDebitCardFlagValue'
          },
          global_feature_flag_futura_collections: {
            bind: 'futuraFlags'
          },
          app_info_structure_home_core_collection_navigate: {
            bind: 'openStandInModal'
          },
          additional_credit_card_detail: {
            bind: 'standInAdditionalCard'
          },
          navigation_from_futura_dashboard: {
            bind: 'standInAdditionalCardFutura'
          },
          facial_recognition_biometrics_code_success: {
            bind: 'biometricCodeSuccess'
          },
          facial_recognition_biometrics_code: {
            bind: 'setBiometricsCode'
          },
          financial_overview_biometrics_mx: {
            bind: 'errorCode'
          },
          flag_minior_account: {
            bind: 'isGlomoMiniorAccount'
          },
          flag_parent_account: {
            bind: 'isGlomoParentAccount'
          },
          disptach_linkCard: {
            bind: 'relatedAccount'
          },
          disptach_linkCard_subProduct: {
            bind: 'linkCard'
          },
          global_controller_home_core_send_futura_home_active_to_dashboard: {
            bind: 'managerShowDasboard'
          },
          global_storage_get_futuraCache_success: {
            bind: 'getFuturaCache'
          },
          product_edit_alias_update_alias_account: {
            bind: 'forceRefreshServices'
          },
          dashboard_financing: {
            bind: 'loadFinancing'
          },
          dashboard_update_monoproduct_user: {
            bind: 'notifyLoaded'
          }
        },
        out: {
          navigation_page_dashboard: {
            bind: 'navigate-from-deep-link-inapp-dashboard',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          dashboad_set_header_height: {
            bind: 'header-height'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'navigate-from-deep-link',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                digitalProductId: 'digitalProductId',
                productId: 'productId',
                filter: 'filter',
                productType: 'productType',
                offerId: 'offerId',
                continue: 'continue',
                extra: 'extra',
                operation: 'operation'
              }
            }
          },
          dashboard_hide_notification_youngsters: {
            bind: 'glomo-minor-account-flag'
          },
          dashboard_youngsters_hide_offer: {
            bind: 'glomo-minor-account-flag'
          },
          facial_recognition_request_financial_overview: {
            bind: 'send-code-to-request-new-financial-overview'
          },
          global_alert_manager_error_list_biometrics: {
            bind: 'alert-error-biometrics-status',
          },
          global_logout_sesion_expiration: {
            bind: 'logout-facial-success'
          },
          global_dimo_transfer_enable: {
            bind: 'feature-dimo-transfer'
          },
          global_pfae_request_client_channel: {
            bind: 'request-pfae-client',
            'forward-to-native': true
          },
          global_dashboard_init_services: {
            bind: 'init-services'
          },
          global_dashboard_stand_in_services: {
            bind: 'init-stand-in'
          },
          dashboard_loaded: {
            bind: 'dashboard-loaded'
          },
          notify_dashboard_loaded: {
            bind: 'dashboard-loaded',
            'forward-to-native': true
          },
          dashboard_pull_to_refresh_end: {
            bind: 'dashboard-loaded'
          },
          set_dashboard_color: {
            bind: 'dashboard-color'
          },
          set_header_color: {
            bind: 'dashboard-header-color'
          },
          dashboard_accounts_refresh: {
            bind: 'dashboard-refresh-accounts'
          },
          dashboard_cards_refresh: {
            bind: 'dashboard-refresh-cards'
          },
          dashboard_equity_refresh: {
            bind: 'dashboard-refresh-equity'
          },
          dashboard_btrader_refresh: {
            bind: 'dashboard-refresh-btrader'
          },
          dashboard_funds_refresh: {
            bind: 'dashboard-refresh-funds'
          },
          dashboard_deposits_refresh: {
            bind: 'dashboard-refresh-deposits'
          },
          dashboard_loans_refresh: {
            bind: 'dashboard-refresh-loans'
          },
          dashboard_financing_refresh: {
            bind: 'dashboard-refresh-financing'
          },
          dashboard_insurances_refresh: {
            bind: 'dashboard-refresh-insurances'
          },
          dashboard_unitlinked_refresh: {
            bind: 'dashboard-refresh-unitlinked'
          },
          dashboard_set_coronita_properties: {
            bind: 'dashboard-set-coronita-properties'
          },
          dashboard_hide_refresh_spinner: {
            bind: 'dashboard-recalculate-header'
          },
          dashboard_recalculate_header: {
            bind: 'dashboard-recalculate-header'
          },
          dashboard_show_error_information_not_available: {
            bind: 'dashboard-show-error-information-not-available'
          },
          dashboard_set_header_properties: {
            bind: 'dashboard-set-header-properties'
          },
          dashboard_set_header_show: {
            bind: 'dashboard-set-header-show'
          },
          dashboard_show_error_max_request: {
            bind: 'dashboard-show-error-max-requests'
          },
          dashboard_slots: {
            bind: 'slots-changed'
          },
          global_confirm_logout_message: {
            bind: 'dashboard-native-logout-confirm'
          },
          dashboard_open_data_protection_regulation_banner: {
            bind: 'dashboard-open-rgpd-banner'
          },
          dashboard_close_data_protection_regulation_banner: {
            bind: 'dashboard-close-rgpd-banner'
          },
          global_get_from_storage: {
            bind: 'get-local-storage-email-validation-status'
          },
          global_get_equity_private_portfolios: {
            bind: 'get-equity-private-portfolios'
          },
          global_get_btrader_private_portfolios: {
            bind: 'get-btrader-private-portfolios'
          },
          global_get_unitlinked_private_portfolios: {
            bind: 'get-unitlinked-private-portfolios'
          },
          dashboard_cache_unitlinked: {
            bind: 'unitlinked-updated'
          },
          dashboard_cache_equity: {
            bind: 'equity-updated'
          },
          dashboard_cache_btrader: {
            bind: 'btrader-updated'
          },
          dashboard_cache_financing: {
            bind: 'financing-updated'
          },
          dashboard_toggle_unitlinked_show_balances: {
            bind: 'unitlinked-toggle-show-balances'
          },
          dashboard_toggle_equity_show_balances: {
            bind: 'equity-toggle-show-balances'
          },
          dashboard_toggle_btrader_show_balances: {
            bind: 'btrader-toggle-show-balances'
          },
          global_set_financial_overview_params: {
            bind: 'dashboard-contain-insurance-active'
          },
          global_insurance_is_active: {
            bind: 'dashboard-contain-insurance-active'
          },
          global_insurance_is_inactive: {
            bind: 'dashboard-contain-insurance-inactive'
          },
          additional_pfm_padding: {
            bind: 'dashboard-header-add-pfm-safe-area'
          },
          additional_pfm_padding_remove: {
            bind: 'dashboard-header-remove-pfm-safe-area'
          },
          dashboard_set_operationals_list: {
            bind: 'send-operations-list'
          },
          dashboard_set_operationals_list_minor: {
            bind: 'send-operations-list-minior'
          },
          dashboard_set_whithout_operations: {
            bind: 'without-operations'
          },
          dashboard_set_footer_minior: {
            bind: 'send-footer-page'
          },
          dashboard_refresh_financial_overview: {
            bind: 'refresh-services'
          },
          dashboard_stand_in_financial_overview: {
            bind: 'dashboard-stand-in-financial-overview'
          },
          global_alert_manager_open_with_settings: {
            bind: 'dashboard-stand-in-operative-modal'
          },
          dashboard_hide_stand_in_status_notification: {
            bind: 'dashboard-stand-in-hide-status-banner'
          },
          dashboard_modify_stand_in_template_padding_top: {
            bind: 'dashboard-stand-in-template-padding-top'
          },
          dashboard_update_monoproduct_user: {
            bind: 'update-is-monoproduct-user'
          },
          dashboard_hide_widget_carousel: {
            bind: 'hide-widget-carousel'
          },
          dashboard_hide_expenses_summary_card: {
            bind: 'hide-expenses-summary-card'
          },
          dashboard_close_notification: {
            bind: 'close-notification'
          },
          dashboard_navigation_facial_recognition: {
            bind: 'dashboard-facial-recognition',
            link: {
              page: 'facialRecognition'
            }
          },
          dashboard_navigation_help_section: {
            bind: 'dashboard-help-section',
            link: {
              page: 'helpSection'
            }
          },
          dashboard_stand_in_navigation_help_section: {
            bind: 'dashboard-stand-in-help-section',
            analytics: ANALYTICS.ALWAYS_ON.standInOperatives('', 'HELP_SECTION')
          },
          dashboard_stand_in_post_login_limited_operatives: {
            bind: 'dashboard-stand-in-limited-operatives',
            link: {
              page: 'limitedOperativesInfo'
            },
            analytics: ANALYTICS.ALWAYS_ON.standInOperatives(LITERALS.commons.limitedApp)
          },
          navigate_dashboard_to_transfer: {
            bind: 'navigate-to-trasfers-from-google-assistant',
            link: {
              page: 'transfers'
            },
            analytics: ANALYTICS.OPERATIVES.TRANSFERS_FROM_OPERATIONS
          },
          navigate_dashboard_to_bill_payments: {
            bind: 'navigate-to-bill-payments-from-google-assistant',
            link: {
              page: 'billPaymentsDashboard'
            }
          },
          navigate_dashboard_to_pay_cards: {
            bind: 'navigate-to-pay-card-from-google-assistant',
            link: {
              page: 'comingSoon'
            }
          },
          account_is_tdde_monoproduct: {
            bind: 'tdde-is-monoproduct'
          },
          glomo_dashboard_tdc_mono_product_user: {
            bind: 'glomo-dashboard-tdc-mono-product-user'
          },
          flag_minior_account: {
            bind: 'glomo-minor-account-flag'
          },
          flag_parent_account: {
            bind: 'glomo-parent-account-flag'
          },
          refresh_monoproduct_configuration: {
            bind: 'refresh-dashboard-incomes'
          },
          footer_items_changed: {
            bind: 'items-tdde'
          },
          footer_items_changed_glomo_minior: {
            bind: 'items-minior-account'
          },
          tdde_sidebar_configuration: {
            bind: 'available-sections'
          },
          glomo_minior_account_sidebar_configuration: {
            bind: 'available-sections-glomo-minior-account'
          },
          global_get_from_storage: {
            bind: 'get-flag-tdde-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-local-storage',
            'forward-to-native': true
          },
          dashboard_accounts_dashboard_manager: {
            bind: 'list-accounts-dashboard-show'
          },
          dashboard_accounts: {
            bind: 'list-accounts'
          },
          dashboard_accounts_tdde: {
            bind: 'list-accounts-tdde'
          },
          tdde_monoproduct_carousel_and_icon: {
            bind: 'hide-widget-carousel-and-icon'
          },
          dashboard_hide_notification: {
            bind: 'notifications-monoproduct-tdde-client'
          },
          flag_feature_business_debit_card: {
            bind: 'feature-business-debit-card'
          },
          configuration_buttons_from_dashboard_business_debit_card: {
            bind: 'configuration-buttons-for-emergency-zone'
          },
          global_dashboard_futura_mode_always_on: {
            bind: 'glomo-dashboard-futura-stand-in-home-config'
          },
          glomo_dashboard_futura_configuration_home_default: {
            bind: 'glomo-dashboard-futura-configuration-home-default'
          },
          glomo_dashboard_futura_tab_options_configuration: {
            bind: 'glomo-dashboard-futura-tab-options-configuration'
          },
          glomo_dashboard_futura_configuration_offers_minior: {
            bind: 'glomo-dashboard-futura-configuration-offers-minior'
          },
          futura_dashboard_collection_contracts_encrypt_feature_flag: {
            bind: 'futura-collections-contracts-encrypt-feature-flag'
          },
          futura_dashboard_collection_home_futura_feature_flag: {
            bind: 'futura-collections-home-futura-feature-flag'
          },
          futura_dashboard_collection_home_youngsters_feature_flag: {
            bind: 'futura-collections-home-youngsters-feature-flag'
          },
          futura_dashboard_collection_home_monoproduct_feature_flag: {
            bind: 'futura-collections-home-monoproduct-feature-flag'
          },
          global_dashboard_not_alternative_user_config: {
            bind: 'glomo-dashboard-not-alternative-user-config'
          },
          futura_dashboard_collection_blue_feature_flag: {
            bind: 'futura-collections-blue-feature-flag'
          },
          futura_dashboard_collection_nba_feature_flag: {
            bind: 'futura-collections-nba-feature-flag'
          },
          futura_dashboard_collection_maincard_feature_flag: {
            bind: 'futura-collections-maincard-feature-flag'
          },
          futura_dashboard_collection_frequent_actions_feature_flag: {
            bind: 'futura-collections-frequent-actions-feature-flag'
          },
          futura_dashboard_collection_smart_servicing_feature_flag: {
            bind: 'futura-collections-smart-servicing-feature-flag'
          },
          futura_dashboard_collection_financial_coach_feature_flag: {
            bind: 'futura-collections-financial-coach-feature-flag'
          },
          futura_dashboard_collection_financial_health_feature_flag: {
            bind: 'futura-collections-financial-health-feature-flag'
          },
          futura_dashboard_collection_tips_finance_profiling_feature_flag: {
            bind: 'futura-collections-tips-finance-profiling-feature-flag'
          },
          futura_dashboard_collection_nbo_feature_flag: {
            bind: 'futura-collections-nbo-feature-flag'
          },
          futura_dashboard_collection_svps_feature_flag: {
            bind: 'futura-collections-svps-feature-flag'
          },
          futura_dashboard_collection_experiences_feature_flag: {
            bind: 'futura-collections-experiences-feature-flag'
          },
          futura_collections_home_always_on_feature_flag: {
            bind: 'futura-collections-home-always-on-feature-flag'
          },
          futura_dashboard_collection_assistance_feature_flag: {
            bind: 'futura-collections-assistance-feature-flag'
          },
          futura_dashboard_collection_discreet_mode_feature_flag: {
            bind: 'futura-collections-discreet-mode-feature-flag'
          },
          futura_dashboard_collection_hide_edition_maincard_feature_flag: {
            bind: 'futura-collections-hide-edition-maincard-feature-flag'
          },
          futura_dashboard_collection_hide_last_card_feature_flag: {
            bind: 'futura-collections-hide-last-card-feature-flag'
          },
          futura_dashboard_collection_maincard_edition_feature_flag: {
            bind: 'futura-collections-maincard-edition-feature-flag'
          },
          futura_dashboard_collection_frequent_actions_edition_feature_flag: {
            bind: 'futura-collections-frequent-actions-edition-feature-flag'
          },
          navigation_additional_card_received_channel: {
            bind: 'additional-credit-card-detail',
            link: {
              page: 'additionalCardDetail',
              params: {
                productId: 'additionalProductId'
              }
            }
          },
          reset_notify_event_product_list: {
            bind: 'reset-notify-event-for-product-list'
          },
          dashboard_rewards_hidden: {
            bind: 'has-credit-cards'
          },
          dashboard_points_balances: {
            bind: 'has-credit-cards'
          },
          dashboard_simple_user_name: {
            bind: 'set-simple-user-name'
          },
          global_feature_swich_accounts_transactions_status: {
            bind: 'feature-flag-swich-account-transactions-status'
          },
          global_get_from_storage: {
            bind: 'get-from-local-storage-futura-cache'
          },
          futura_cache_data_to_analytics: {
            bind: 'send-futura-cache-to-analytics'
          },
          dasboard_standin_set_headers: {
            bind: 'set-title-header-standin'
          },
          hide_futura_dashboard: {
            bind: 'hide-futura-dashboard'
          },
          hide_old_dashboard: {
            bind: 'hide-old-dashboard'
          },
          dashboard_financing_refresh: {
            bind: 'dashboard-refresh-financing'
          },
          dashboard_cache_financing: {
            bind: 'financing-updated'
          },
          dashboard_accounts_loaded: {
            bind: 'list-accounts'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        },
        params: {
          userInfo: 'global_user',
          stateAccounts: 'stateAccounts',
          stateCards: 'stateCards',
          stateFunds: 'stateFunds',
          stateDeposits: 'stateDeposits',
          stateLoans: 'stateLoans'
        }
      }
    },
    propertiesSpherica: {
      isSpherica: isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'dashboard-native-logout-confirm'
            }
          }
        },
        remove: {
          out: [
            'global_confirm_logout_message'
          ]
        }
      }
    }
  };
  Object.assign(DASHBOARD_MANAGER.properties, getGreetingConfiguration());

  const coronitaHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      id: 'appHeader',
      className: 'title--wrapped',
      greetingAsTitle: true,
      hidden: true,
      rightIcon: 'coronita:menu',
      rightIconAction: 'toggle-menu',
      rightSecondaryIcon: 'coronita:help',
      rightSecondaryIconAction: 'open-help-section',
      rightSecondaryIconColor: '#fff',
      rightSecondaryAriaLabel: 'cells-molecule-header-coronita-help-dashboard-aria-label',
      shortFirstName: true,
      greetingKey: 'cells-molecule-header-greating-key',
      cellsConnections: {
        in: {
          set_header_color: {
            bind: 'classTimeColor'
          },
          dashboard_set_header_properties: {
            bind: 'setProperties'
          },
          tdde_monoproduct_carousel_and_icon: {
            bind: 'rightSecondaryIcon'
          },
          dashboard_set_header_show: {
            bind: 'hidden'
          },
          dasboard_standin_set_headers: {
            bind: 'greetingKey'
          },
          hide_old_dashboard: {
            bind: 'hidden'
          },
          dashboard_set_status_discreet_mode_icon_header: {
            bind: 'leftIcon'
          },
          dashboard_set_status_discreet_mode_label_header: {
            bind: 'leftIconText'
          }
        },
        out: {
          global_open_native_menu: {
            bind: 'click-right-button'
          },
          dashboard_click_left_button_header: {
            bind: 'click-left-button'
          },
          navigation_dashboard_to_help_section: {
            bind: 'open-help-section'
          },
          dashboard_navigate_faqs: {
            bind: 'click-right-secondary-button',
            link: {
              page: 'faqs'
            }
          }
        },
        params: {
          userInfo: 'global_user'
        }
      },
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      rightIcon: 'coronita:menu',
      rightIconAction: 'toggle-menu',
      rightSecondaryIcon: 'coronita:help',
      rightSecondaryIconAction: 'open-help-section',
      rightIconText: 'cells-molecule-header-coronita-menu-aria-label',
      rightIconSecondaryText:"cells-molecule-header-spherica-help",
      className: 'header--core-grey header'
    },
  };

  APP_FOOTER.properties.cellsConnections.in = {
    ...APP_FOOTER.properties.cellsConnections.in,
    dashboard_update_monoproduct_user: {
      bind: 'isMonoproductUser'
    }
  };

  APP_FOOTER.properties.cellsConnections.out = {
    ...APP_FOOTER.properties.cellsConnections.out,
    navigate_dashboard_to_invitation_non_account_link: {
      bind: 'invitation-non-account-link',
      link: {
        page: 'invitationNonAccountClient'
      }
    }
  };

  const codiManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-qr-payments',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_login_success: {
            bind: 'validateAndDispatchLoginBanxico'
          }
        }
      }
    }
  }

  const base = {
    hash: 'mx-dashboard',
    currentPage: {
      url: '/dashboard',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'static',
        className: `${ isNativeIos ? 'dashboard-ios-top-padding ios-top-padding' : '' } bg-light-grey dashboard-products safe-area-app safe-area-app-main`,
        disableScrollLock: true,
        headerFixed: true,
        footerFixed: true,
        hasFooter: APP_FOOTER ? true : false,
        footerHeight: APP_FOOTER ? 64 : 0,
        rightDrawer: true,
        edgeSwipeSensitivity: 50,
        disableEdgeSwipe: !!CONFIG.nativeShell,
        avoidToggleMenu: !!CONFIG.nativeShell,
        showFooterOnPullRefresh: true,
        fixedHeaderFadeDisabled: true,
        offset: 120,
        fixOffset: 70,
        headerHeight: 0,
        dynamicBgColor: 'header--evening',
        cellsConnections: {
          in: {
            dashboard_modify_stand_in_template_padding_top: {
              bind: 'style'
            },
            dashboard_pull_to_refresh_end: {
              bind: 'pullToRefreshResponse'
            },
            dashboard_hide_refresh_spinner: {
              bind: 'pullToRefreshResponse'
            },
            set_header_color: {
              bind: 'dynamicBgColor'
            },
            global_open_native_menu: {
              bind: 'toggleMenu'
            },
            dashboard_template_coronita_add_class_list: {
              bind: 'elementClassList'
            },
            dashboard_template_coronita_remove_class_list: {
              bind: 'elementClassList'
            },
            dashboard_set_coronita_properties: {
              bind: 'setProperties'
            },
            additional_pfm_padding: {
              bind: 'addComponentClass'
            },
            additional_pfm_padding_remove: {
              bind: 'removeComponentClasses'
            },
            dashboad_set_header_height: {
              bind: 'headerHeight'
            },
          },
          out: {
            dashboard_template_active: {
              bind: 'template-active'
            },
            dashboard_pull_to_refresh_start: {
              bind: 'pull-to-refresh-end'
            }
          }
        }
      },
      propertiesSpherica: {
        dynamicBgColor: '',
        footerFloating: true
      }
    },
    components: [
      codiManager,
      cellsMobilePush,
      glomoNotificationsSubscriptionsDM,
      NOTIFICATIONS_DM,
      inAppCallsController,
      frequentOperationsModal,
      frequentOperationsPanelInfo,
      suggestedOperationsDp,
      glomoUpdateAddressPayrollManager,
      controllerPfmDashboardMx,
      customersGlobalApis,
      analyticsTipsFinanceProfiling,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'dashboard',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': true
          },
          cellsConnections: {
            in: {
              __bridge_page_dashboard: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              dashboard_init_page: {
                bind: 'init-page-first-time'
              },
              dashboard_reset_page: {
                bind: 'reset'
              },
              dashboard_init_page_first_time: {
                bind: 'init-page'
              },
              dashboard_get_notifications: {
                bind: 'init-page-first-time'
              },
              app_error_access_token: {
                bind: 'access-token-error'
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
        type: 'DM',
        tag: 'bbva-controller-email-management-mx',
        familyPath: '@glomo-web-components/bbva-controller-email-management-mx',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          customersApiVersion: CONFIG.globalServices.versions.customers,
          customerAddressesApiVersion: CONFIG.globalServices.versions.customers,
          requiredToken: 'tsec',
          contactDetailsAdoptionFlag: 'glomo.dashboard.contactDetailsAdoption',
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              global_login_success: {
                bind: 'getCustomerIndicators'
              },
              global_feature_flag_collection_updated: {
                bind: 'getFeatureFlagCollection'
              },
              global_device_accesses_customer_id: {
                bind: 'getCustomerId'
              },
            },
            out: {
              global_set_customer_addresses: {
                bind: 'bbva-controller-email-management-mx-addresses'
              },
              dashboard_customer_email: {
                bind: 'bbva-controller-email-management-mx-email'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'glomo-operations-dm-mx',
        familyPath: 'glomo-operations-dm',
        properties: {
          projectNameGlomo: LITERALS.sections.glomo,
          projectNameGlomoAlwaysOn: LITERALS.sections.glomoAlwaysOn,
          cellsConnections: {
            in: {
              global_feature_stand_in_status: {
                bind: 'standIn'
              },
              dashboard_init_page: {
                bind: 'getDashboardOperations'
              },
              app_on_click_start_transfer: {
                bind: 'onClickStartTransfersAnalitycs'
              },
              flag_minior_account: {
                bind: 'isGlomoMiniorAccount'
              },
              flag_parent_account: {
                bind: 'isGlomoParentAccount'
              }
            },
            out: {
              dashboard_featured_operations: {
                bind: 'dashboard-operations-list'
              },
              launch_analytic_on_click_start_transfer: {
                bind: 'app-click-start-transfers-analytics',
                analytics: ANALYTICS.OPERATIVES.get_onclick_start(LITERALS.featureFlag.transfer, LITERALS.commons.global_position, LITERALS.operative.transfers, LITERALS.commons.transfers, LITERALS.commons.account)
              }
            }
          }
        }
      },
      coronitaHeader,
      {
        zone: 'app__main',
        tag: 'div',
        render: 'litElement',
        type: 'UI',
        container: true,
        properties: {
          id: 'futuraDashboard',
          hidden: true,
          cellsConnections: {
            in: {
              hide_futura_dashboard: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'div',
        render: 'litElement',
        type: 'UI',
        container: true,
        properties: {
          id: 'oldDashboard',
          hidden: true,
          cellsConnections: {
            in: {
              hide_old_dashboard: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        tag: 'div',
        render: 'litElement',
        type: 'UI',
        container: true,
        properties: {
          id: 'oldDashboardHeader',
          hidden: true,
          cellsConnections: {
            in: {
              hide_old_dashboard: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      ...oldDashboard,
      APP_FOOTER_DEVICE_CONTROLLER,
      DASHBOARD_MANAGER,
      APP_FOOTER
    ]
  };

  const getComponent = get(base);
  const connectionsInComponent = connectionsIn(base);
  const connectionsOutComponent = connectionsOut(base);
  if (CONFIG.nativeShell) {
    base.components.push(timeoutHandler(CONFIG));
    connectionsInComponent('global-products-list').native_page_visible = {
      bind: 'animateSkeleton'
    };
    getComponent('cells-molecule-header').properties.cellsConnections.out = {
      global_open_native_menu: {
        bind: 'toggle-menu',
        'forward-to-native': true
      },
      dashboard_open_menu: {
        bind: 'toggle-menu',
        'forward-to-native': true
      },
      navigation_dashboard_to_help_section: {
        bind: 'open-help-section'
      },
      dashboard_click_left_button_header: {
        bind: 'click-left-button'
      }
    };
    base.components.push({
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-nativesettings',
      properties: {
        cellsConnections: {
          in: {
            dashboard_notifications_open_native_settings_ios: {
              bind: 'openSetting'
            }
          }
        }
      }
    });
  } else {
    base.components.push(appSidebar(CONFIG));
    connectionsInComponent('glomo-financial-overview-dm-mx').global_login_success = {
      bind: 'getFinancialOverview'
    };
  }
  const footerTag = 'cells-navigation-bar-spherica';

  connectionsInComponent(footerTag).hide_dashboard_footer = {
      bind: 'hideBar'
  };
  Object.assign(connectionsOutComponent(footerTag).navigation_bar_to_contract_product_section, {
    analytics: ANALYTICS.OPERATIVES.get_internal_link(LITERALS.featureFlag.footerOpportunities, LITERALS.commons.footerOportunity)
  });
  Object.assign(connectionsOutComponent(footerTag).navigate_stand_in_bar_to_checkup_or_pfm_dashboard, {
    analytics: ANALYTICS.ALWAYS_ON.standInOperatives('', 'FOOTER_PFM')
  });
  Object.assign(connectionsOutComponent(footerTag).navigate_stand_in_bar_to_contract_product_section, {
    analytics: ANALYTICS.ALWAYS_ON.standInOperatives('', 'FOOTER_OPPORTUNITIES')
  });
  Object.assign(connectionsOutComponent(footerTag).navigate_stand_in_bar_to_assistance_section, {
    analytics: ANALYTICS.ALWAYS_ON.standInOperatives('', 'FOOTER_HELP')
  });
  Object.assign(connectionsOutComponent(footerTag).navigate_stand_in_bar_to_pfm_notifiations, {
    analytics: ANALYTICS.ALWAYS_ON.standInOperatives('', 'FOOTER_NOTIFICATION')
  });

  base.components.push({
    type: 'UI',
    zone: 'app__overlay',
    tag: 'bbva-progress-content',
    tagSpherica: 'bbva-progress-content-spherica',
    familyPath: '@bbva-web-components/bbva-progress-content',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      withMask: true,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          app_info_structure_home_core_show_loader: {
            bind: 'show'
          },
          app_info_structure_home_core_hide_loader: {
            bind: 'hide'
          },
          language_settings_success_navigate_dashboard: {
            bind: 'hide'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'full'
    }
  });

  base.components.push({
    zone: 'app__transactional',
    type: 'UI',
    tag: 'bbva-notification-toast',
    familyPath: '@bbva-spherica-components/bbva-notification-toast',
    render: 'litElement',
    properties: {
      type: 'success',
      iconExplainer: 'coronita:correct',
      alertText: 'bbva-feature-edit-alias-fund-toast-message',
      duration: '3000',
      autoHide: 'true',
      fixedBottom: 'true',
      cellsConnections: {
        in: {
          global_edit_alias_success_toast: {
            bind: 'show'
          }
        }
      }
    }
  });

  base.components.push({
    zone: 'app__transactional',
    type: 'UI',
    tag: 'bbva-notification-toast',
    familyPath: '@bbva-spherica-components/bbva-notification-toast',
    render: 'litElement',
    properties: {
      className: 'language-settings-notification-toast u-margin--1 u-margin-bottom--2 u-max-width--2',
      type: 'success',
      iconExplainer: 'coronita:correct',
      alertText: 'app-info-structure-language-selection-mx-notification-toast-message',
      duration: 3000,
      autoHide: true,
      fixedBottom: true,
      cellsConnections: {
        in: {
          language_settings_notification_toast_open_alert_text: {
            bind: 'show'
          }
        }
      }
    }
  });

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  base.components.push(...paymentsBusinessInteligenceOverview);
  base.components.push(featureHomeFutura(CONFIG));
  base.components.push(routerFuturaHome(CONFIG));
  base.components.push(analyticsFuturaHome());
  localStorageApp.addOutStorageChannels(base.components, ['credit_bureau_card', 'mobile_services', 'codi_enrollment_attemps',
    'discreet_mode', 'dashboard', 'losses_report_request_id',
    'closed_offers', 'loginData', 'optimization_node', 'futuraFirstView', 'pbio_onboarding', 'mercurioMPOS', 'contractIdEncryptedStored',
    'in_app_calls'], CONFIG);

  return sphericaPageUtils.spherize(base);
};
