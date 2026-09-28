'use strict';
module.exports = CONFIG => {
  const analytics = require('./analytics/_profileRecipients')(CONFIG);
  const {getLocalCurrency} = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('profile-recipients');

  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        accountsV1,
        geographicPlacesV1,
        customersAddressesV1,
        catalogs,
        offersV1,
        accountsFormalizeV3
      }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const base = {
    currentPage: {
      url: '/profile-recipients'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        className: nativeIos ? 'ios-top-padding' : '',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerHeight: 60,
        headerFixed: true,
        footerFixed: true,
        fixedHeaderFadeDisabled: true,
        fixOffsetScroll: 0,
        handleStoppedScroll: true,
        headerFadeDelay: 'fade-out',
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            __bridge_page_profileRecipients: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/user-info-profile-recipients-mx',
        tag: 'user-info-profile-recipients-mx',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          catalogIdPlaces: 'SAT',
          geographicPlaceType: 'COLONY',
          minDateNative: '1900-01-01',
          businessDocumentGuard: 'eyJpZCI6IkdNREFOQkYwMDEifQ',
          consentCodeGuard: 'BDALTBEN02',
          requiredOTP: true,
          currencyCode: getLocalCurrency(),
          iOSFixedHeader: nativeIos,
          isNativeIosPage: nativeIos,
          dummyEntityImage: 'images/spherica/bbvaesmmxxx.svg',
          collapsedDummyEntityImage: 'images/spherica/BBVAESMMXXX_Dark.svg',
          excludedProductIds: [ 'PT' ],
          apiVersionPlaces: geographicPlacesV1,
          apiVersionCustomerAddress: customersAddressesV1,
          apiVersionAccountsParticipants: accountsV1,
          apiVersionCampaignsOffersDm: offersV1,
          apiVersionAccountsFormalize: accountsFormalizeV3,
          apiVersionCatalogs: catalogs,
          apiVersionAccounts: accountsV1,
          cellsConnections: {
            in: {
              __bridge_page_profileRecipients: {
                bind: 'bridgeInit'
              },
              profile_has_participants_principal_account: {
                bind: 'hasRecipients'
              },
              global_financial_overview_details: {
                bind: 'financialOverContracts'
              },
              global_user_id: {
                bind: 'customerId'
              },
              proceedings_navigate_to_recipient_init_handler: {
                bind: 'initialMethod'
              },
              global_feature_close_operative: {
                bind: 'reset'
              },
              profile_recipients_launch_date_picker_success: {
                bind: 'formDataSet'
              },
              profile_recipients_launch_date_picker_error: {
                bind: 'formDataSet'
              },
              widget_signature_handle_required_first_step: {
                bind: 'openAnalyticFunctionOtp'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'reset'
              },
              blue_redirect_update_recipients: {
                bind: 'updateRecipientFromBlue'
              },
              blue_set_has_recipient: {
                bind: 'hasRecipients'
              },
              global_feature_flag_collection_updated: {
                bind: 'readFlagsGlomoSettings'
              },
              global_set_app_settings: {
                bind: 'setPublicKeys'
              }
            },
            out: {
              global_feature_close_operative: {
                bind: 'user-info-profile-recipients-mx-go-to-back-page-events',
                backStep: true
              },
              profile_recipients_app_view_onboarding: {
                bind: 'user-info-profile-recipients-mx-onboarding-page-open'
              },
              profile_recipients_app_view_step_confirmed: {
                bind: 'user-info-profile-recipients-mx-multi-step-two-open'
              },
              profile_recipients_app_view_select_account: {
                bind: 'user-info-profile-recipients-mx-multi-step-select-account-open'
              },
              profile_recipients_app_started_click: {
                bind: 'user-info-profile-recipients-mx-multistep-button-click'
              },
              profile_recipients_app_view_add_recipient: {
                bind: 'user-info-profile-recipients-mx-add-recipients-open'
              },
              profile_recipients_app_step_confirmed: {
                bind: 'user-info-profile-recipients-mx-multi-step-two-button-click'
              },
              profile_recipients_app_view_app_step_otp: {
                bind: 'user-info-profile-recipients-mx-otp-app-step-three'
              },
              profile_recipients_app_view_app_completed: {
                bind: 'user-info-profile-recipients-mx-success-page-open'
              },
              profile_recipients_app_view_error_: {
                bind: 'user-info-profile-recipients-mx-full-modal-error-open'
              },
              feature_profile_recipients_mx_send_data_proceedings: {
                bind: 'user-info-profile-recipients-mx-send-data-proceedings'
              },
              profile_recipients_launch_data_picker_connector: {
                bind: 'user-info-profile-recipients-mx-launch-date-picker'
              },
              profile_recipients_reset_analyticmanager_user_info: {
                bind: 'user-info-profile-recipients-mx-reset-analytic-manager'
              },
              global_retargeting_initialize: {
                bind: 'user-info-profile-recipients-mx-id-contract-send'
              },
              global_retargeting_info_account: {
                bind: 'user-info-profile-recipients-mx-rtg-send-account'
              },
              global_retargeting_form_submission: {
                bind: 'user-info-profile-recipients-mx-rtg-send-post'
              },
              global_retargeting_send_update: {
                bind: 'user-info-profile-recipients-mx-go-to-back-page-events'
              },
              global_retargeting_contracted_product: {
                bind: 'user-info-profile-recipients-mx-success-page-open'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-profile-recipients',
        familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              proceedings_init_analytics_interactive_to_participants: {
                bind: 'proceedingsData'
              },
              profile_recipients_reset_analyticmanager_user_info: {
                bind: 'reset'
              },
              profile_recipients_app_view_onboarding: {
                bind: 'pageViewOnboarding'
              },
              profile_recipients_app_view_step_confirmed: {
                bind: 'stepConfirmedView'
              },
              profile_recipients_app_view_select_account: {
                bind: 'pageViewSelectAccount'
              },
              profile_recipients_app_started_click: {
                bind: 'appStartedClick'
              },
              profile_recipients_app_view_add_recipient: {
                bind: 'pageViewAddRecipients'
              },
              profile_recipients_app_step_confirmed: {
                bind: 'appStepCompleted'
              },
              profile_recipients_app_view_app_step_otp: {
                bind: 'pageViewOtp'
              },
              profile_recipients_app_view_app_completed: {
                bind: 'pageViewSuccess'
              },
              profile_recipients_app_view_error_: {
                bind: 'errorAnalytic'
              }
            },
            out: {
              profile_recipients_app_view_analytic_onboarding: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-page-view-onboarding',
                analytics: analytics.appAdvancedFootprint('appViewCharge')
              },
              profile_recipients_app_view_analytic_step_confirmed: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-multi-step-open',
                analytics: analytics.appViewLoad('appPageVisit')
              },
              profile_recipients_app_view_analytic_select_account: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-select-account-view',
                analytics: analytics.appAdvancedFootprint('appSelect')
              },
              profile_recipients_app_view_analytic_click: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-app-started-click',
                analytics: analytics.appLinkStarted()
              },
              profile_recipients_app_view_analytic_add_recipient: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-add-recipient-view',
                analytics: analytics.appAdvancedFootprint('appSelect')
              },
              profile_recipients_app_view_analytic_app_step_confirmed: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-page-view-app-step-completed',
                analytics: analytics.appViewLoad('appStep2')
              },
              profile_recipients_app_view_analytic_app_step_otp: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-event-otp',
                analytics: analytics.appViewLoad('appStep3')
              },
              profile_recipients_app_view_analytic_app_completed: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-page-view-app-completed',
                analytics: analytics.appViewLoad('appCompleted')
              },
              profile_recipients_app_view_analytic_error: {
                bind: 'bbva-feature-profile-recipients-mx-analytic-error-page-view',
                analytics: analytics.appAdvancedFootprint('appError')
              }
            }
          }
        }
      }
    ]
  };
  const datePicker = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          profile_recipients_launch_data_picker_connector: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          profile_recipients_launch_date_picker_success: {
            bind: 'launch-date-picker-success'
          },
          profile_recipients_launch_date_picker_error: {
            bind: 'launch-date-picker-error'
          }
        }
      }
    }
  };
  if (!nativeIos) {
    base.components.push(datePicker);
  }
  const signWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signWidgetConnector('user-info-profile-recipients-mx');
  return base;
};
