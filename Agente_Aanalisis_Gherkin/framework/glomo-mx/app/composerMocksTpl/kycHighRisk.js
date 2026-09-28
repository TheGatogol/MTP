'use strict';
module.exports = config => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        catalogsKycHighRisk,
        moneyLaundering
      },
      portunusConfig,
      commonOnyxConfig,
      carOnyxConfig: onyxConfig
    },
    native = false,
    nativeIos = false
  } = config;

  const pageName = 'kycHighRisk';
  const pages = require('./common/_pages')(config)(pageName);
  const analytics = require('./analytics/_highRiskClient')();
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const { headerHeightMinimum } = require('./common/helpers/_utils');

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      headerHeight: headerHeightMinimum,
      extraHeaderClass: 'dark-blue-bg',
      cellsConnections: {
        in: {
          kyc_high_risk_recalculate_status_bar_top: {
            bind: 'recalculateStatusBarTop'
          }
        }
      }
    }
  };

  const bbvaFeatureKycHighRisk = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-kyc-validation-high-risk-mx',
    familyPath: '@glomo-web-components/bbva-feature-kyc-validation-high-risk-mx',
    render: 'litElement',
    properties: {
      host,
      catalogsKycHighRisk,
      native,
      moneyLaundering,
      requiredToken,
      portunusConfig,
      onyxConfig: {...onyxConfig,
        host: commonOnyxConfig?.host,
        versionClient: commonOnyxConfig?.version,
        nsIdClient: commonOnyxConfig?.nsId,
        versionLegal: commonOnyxConfig?.version,
        nsIdLegal: commonOnyxConfig?.nsId
      },
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'setCustomerId'
          },
          global_client_id: {
            bind: 'setClientId'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewDetails'
          },
          global_login_success: {
            bind: 'loginSuccessDetails'
          },
          global_storage_get_loginData_success: {
            bind: 'dataNativeLogin'
          },
          native_user_id: {
            bind: 'nativeUserData'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'openModalExitProcess'
          },
          kyc_high_risk_device_info_platform_success: {
            bind: 'handleMobilePlatformSuccessRes'
          },
          kyc_high_risk_check_permissions_success: {
            bind: 'handleCheckPermissionsSuccessRes'
          },
          kyc_high_risk_global_request_permissions_success: {
            bind: 'handleRequestPermissionsSuccessRes'
          },
          kyc_high_risk_global_request_permissions_error: {
            bind: 'handleRequestPermissionsErrorRes'
          },
          kyc_high_risk_global_filefetcher_success: {
            bind: 'handleFileFetcherSuccessRes'
          },
          kyc_high_risk_global_filefetcher_error: {
            bind: 'handleFileFetcherErrorRes'
          },
          proceedings_navigate_to_kyc_high_risk: {
            bind: 'goBackFromProceedings'
          },
          proceedings_navigate_to_modify_kyc_high_risk: {
            bind: 'goBackFromProceedingsToEditStep'
          },
          proceedings_navgate_to_success_kyc_high_risk: {
            bind: 'goToSuccessView'
          },
          kyc_high_risk_date_picker_success_response: {
            bind: 'getNativeDateValue'
          },
          global_deep_link: {
            bind: 'handleComponentEntrance'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'handleComponentEntrance'
          },
          navigation_profile_to_kyc_high_risk_mx: {
            bind: 'handleComponentEntrance'
          },
          global_navigation_innap_kyc_high_risk: {
            bind: 'handleComponentEntrance'
          }
        },
        out: {
          navigation_profile_to_kyc_high_risk_mx: {
            bind: 'glomo-profile-manager-routes-go-kyc-high-risk'
          },
          kyc_high_risk_get_mobile_platform: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-mobile-platform-get'
          },
          kyc_high_risk_check_permissions_file: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-file-permissions-check'
          },
          kyc_high_risk_global_request_permissions: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-file-permissions-request'
          },
          kyc_high_risk_open_file_fetcher: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-file-fetcher-open'
          },
          kyc_high_risk_global_open_document: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-file-fetcher-preview'
          },
          kyc_high_risk_move_from_kyc_to_proceedings: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-from-kyc-to-proceedings-navigate',
            link: {
              page: 'proceedings'
            }
          },
          kyc_high_risk_move_from_kyc_to_proceedings_after_questions: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-from-kyc-to-proceedings-after-questions-navigate',
            link: {
              page: 'proceedings'
            }
          },
          open_setttings_mobile: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-device-settings-open'
          },
          kyc_high_risk_entrance_modal_close_icon_click: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-entrance-modal-close-icon-click',
            link: {
              page: 'dashboard'
            }
          },
          kyc_high_risk_open_native_date_picker: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-native-date-picker-open'
          },
          kyc_high_risk_page_visit_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-account-use-questions-pending'
          },
          kyc_high_risk_privacy_advise_link_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-privacy-advise-link-click'
          },
          kyc_high_risk_privacy_advise_modal_view_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-privacy-advise-modal-view'
          },
          kyc_high_risk_continue_button_click_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-continue-button-click'
          },
          kyc_high_risk_account_use_view_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-account-use-view'
          },
          kyc_high_risk_personal_information_view_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-personal-information-view'
          },
          kyc_high_risk_work_and_income_step_view_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-work-and-income-step-view'
          },
          kyc_high_risk_public_activity_step_view_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-public-activity-step-view'
          },
          kyc_high_risk_requirements_modal_view_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-requirements-modal-view'
          },
          kyc_high_risk_section_cannot_be_saved_analytic_error: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-section-cannot-be-saved-error-view'
          },
          kyc_high_risk_go_to_branch_modal_view_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-go-to-branch-modal-view'
          },
          kyc_high_risk_document_access_modal_view_analytics: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-document-access-modal-view'
          },
          kyc_high_risk_operation_not_available_analytic_error: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-operation-not-available-error-view'
          },
          kyc_high_risk_kyc_validation_fatal_catalogs_error: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-catalogs-service-fail',
            link: {
              page: 'dashboard'
            }
          },
          kyc_high_risk_kyc_validation_fatal_answers_error: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-answers-registry-fail',
            link: {
              page: 'dashboard'
            }
          },
          kyc_high_risk_recalculate_status_bar_top: {
            bind: 'bbva-feature-kyc-validation-high-risk-mx-recalculate-status-bar'
          }
        }
      }
    }
  };

  const mobileDeviceinfo = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-device-info',
    familyPath: '@glomo-web-components/bbva-nativeconnector-device-info',
    render: 'litElement',
    properties: {
      pluginName: 'DeviceInfo',
      cellsConnections: {
        in: {
          kyc_high_risk_get_mobile_platform: {
            bind: 'getPlatform'
          }
        },
        out: {
          kyc_high_risk_device_info_platform_success: {
            bind: 'get-platform-success'
          }
        }
      }
    }
  };

  const mobilePermissionsPlugin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-permissions-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-permissions-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          kyc_high_risk_check_permissions_file: {
            bind: 'checkState'
          },
          kyc_high_risk_global_request_permissions: {
            bind: 'request'
          }
        },
        out: {
          kyc_high_risk_check_permissions_success: {
            bind: 'permissions-check-state-success'
          },
          kyc_high_risk_global_request_permissions_success: {
            bind: 'permissions-request-success'
          },
          kyc_high_risk_global_request_permissions_error: {
            bind: 'permissions-request-error'
          }
        }
      }
    }
  };

  const mobileSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          open_setttings_mobile: {
            bind: 'openSetting'
          }
        },
        out: {
          set_open_settings: {
            bind: 'setting-opened',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const filefetcherPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-file-fetcher-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-file-fetcher-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          kyc_high_risk_open_file_fetcher: {
            bind: 'fileFetch'
          }
        },
        out: {
          kyc_high_risk_global_filefetcher_success: {
            bind: 'file-fetch-success'
          },
          kyc_high_risk_global_filefetcher_error: {
            bind: 'error'
          }
        }
      }
    }
  };
  const openDocumentPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-open-document',
    familyPath: '@glomo-web-components/bbva-nativeconnector-open-document',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          kyc_high_risk_global_open_document: {
            bind: 'openByBase64'
          }
        },
        out: {
          kyc_high_risk_global_open_document_success: {
            bind: 'open-document-open-by-base64-success'
          }
        }
      }
    }
  };

  const nativeconnectorDatepicker = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          kyc_high_risk_open_native_date_picker: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          kyc_high_risk_date_picker_success_response: {
            bind: 'launch-date-picker-success'
          }
        }
      }
    }
  };

  const analyticsKycHighRisk = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-kyc-high-risk-validation-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          navigation_profile_to_kyc_high_risk_mx: {
            bind: 'analyticsConfig',
            mapper: function(payload) {
              return payload?.analyticsConfig || {};
            }
          },
          proceedings_custom_fields_updated: {
            bind: 'customFieldsProceedings'
          },
          proceedings_analytics_data_updated_complete: {
            bind: 'analyticsConfig',
            mapper: function(payload) {
              return {
                customFields: payload?.customFields,
                customFieldsProceedings: payload?.customFieldsProceedings,
                completedModules: payload?.completedModules,
                primaryCategory: payload?.primaryCategory,
                productName: payload?.productName
              };
            }
          },
          kyc_high_risk_page_visit_analytics: {
            bind: 'appPageVisit'
          },
          kyc_high_risk_privacy_advise_link_analytics: {
            bind: 'appStartedLink'
          },
          kyc_high_risk_privacy_advise_modal_view_analytics: {
            bind: 'footprintPageViewPrivacyNotice'
          },
          kyc_high_risk_continue_button_click_analytics: {
            bind: 'appStartedButton'
          },
          kyc_high_risk_account_use_view_analytics: {
            bind: 'footprintPageViewUsingYourAccount'
          },
          kyc_high_risk_personal_information_view_analytics: {
            bind: 'footprintPageViewPersonalInformation'
          },
          kyc_high_risk_work_and_income_step_view_analytics: {
            bind: 'footprintPageViewWorkAndIncome'
          },
          kyc_high_risk_public_activity_step_view_analytics: {
            bind: 'appStepPublicActivity'
          },
          kyc_high_risk_requirements_modal_view_analytics: {
            bind: 'footprintPageViewRequirements'
          },
          kyc_high_risk_go_to_branch_modal_view_analytics: {
            bind: 'footprintPageViewGoToBranch'
          },
          kyc_high_risk_document_access_modal_view_analytics: {
            bind: 'footprintPageViewAccessToDocuments'
          },
          kyc_high_risk_section_cannot_be_saved_analytic_error: {
            bind: 'footprintPageViewSectionNotSaved'
          },
          kyc_high_risk_operation_not_available_analytic_error: {
            bind: 'footprintPageViewOperationNotAvailable'
          },
          global_completed_kyc_high_risk: {
            bind: 'appCompleted'
          }
        },
        out: {
          kyc_high_risk_app_page_visit: {
            bind: 'analytics-page-visit',
            analytics: analytics.getAppPageVisit
          },
          kyc_high_risk_app_started_link: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-app-started-link',
            analytics: analytics.getAppStartedLink
          },
          kyc_high_risk_footprint_privacy_notice: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-privacy-notice',
            analytics: analytics.getFootprintPageViewPrivacyNotice
          },
          kyc_high_risk_app_started_button: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-app-started-button',
            analytics: analytics.getAppStartedButton
          },
          kyc_high_risk_footprint_using_your_account: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-using-your-account',
            analytics: analytics.getFootprintPageViewUsingYourAccount
          },
          kyc_high_risk_footprint_personal_information: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-personal-information',
            analytics: analytics.getFootprintPageViewPersonalInformation
          },
          kyc_high_risk_footprint_work_and_income: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-work-and-income',
            analytics: analytics.getFootprintPageViewWorkAndIncome
          },
          kyc_high_risk_app_step_public_activity: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-app-step-public-activity',
            analytics: analytics.getAppStepPublicActivity
          },
          kyc_high_risk_footprint_requirements: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-requirements',
            analytics: analytics.getFootprintPageViewRequirements
          },
          kyc_high_risk_footprint_go_to_branch: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-go-to-branch',
            analytics: analytics.getFootprintPageViewGoToBranch
          },
          kyc_high_risk_footprint_access_to_documents: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-access-to-documents',
            analytics: analytics.getFootprintPageViewAccessToDocuments
          },
          kyc_high_risk_footprint_section_not_saved: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-section-not-saved',
            analytics: analytics.getFootprintPageViewSectionNotSaved
          },
          kyc_high_risk_footprint_operation_not_available: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-footprint-operation-not-available',
            analytics: analytics.getFootprintPageViewOperationNotAvailable
          },
          kyc_high_risk_app_completed: {
            bind: 'bbva-analytics-manager-kyc-high-risk-validation-mx-app-completed',
            analytics: analytics.getAppCompleted
          }
        },
        params: {
          customFields: 'customFields',
          primaryCategory: 'primaryCategory',
          productName: 'productName',
          typology: 'typology',
          segmentProfile: 'segmentProfile'
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/kyc-high-risk'
    },
    pages,
    template,
    components: [
      bbvaFeatureKycHighRisk,
      mobilePermissionsPlugin,
      mobileDeviceinfo,
      filefetcherPlugin,
      openDocumentPlugin,
      mobileSettings,
      analyticsKycHighRisk
    ]
  };

  if (!nativeIos) {
    base.components.push(nativeconnectorDatepicker);
  }

  addRetryErrors(base)([
  ]);

  return base;
};
