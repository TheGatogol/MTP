'use strict';

module.exports = config => {
  const {
    getLocalCurrency,
    getLanguage,
    headerHeightMinimum } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        customersV1: customerApiVersion,
        cardsV1: cardsApiVersion
      }
    },
    native = false,
    nativeIos = false
  } = config;
  const pages = require('./common/_pages')(config)('cardCutOffDate');
  const analitycs = require('./analytics/_cardCutOffDate')(config);

  const base = {
    hash: 'card-cut-off-date',
    currentPage: {
      url: '/card-cut-off-date/:productId'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        relativeMain: true,
        disableEdgeSwipe: true,
        headerHeight: headerHeightMinimum
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'card-configuration-cut-off-date',
        familyPath: '@bbva-web-components-widgets/card-configuration-cut-off-date',
        type: 'UI',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          localCurrency: getLocalCurrency(),
          language: getLanguage(),
          pageName: 'cardCutOffDate',
          showHeaderIconLabels: true,
          iOSFixedHeader: nativeIos,
          customerApiVersion,
          cardsApiVersion,
          showLocalCase: true,
          maxAvailableDates: 4,
          contactVerifiedNotifications: 'true',
          cellsConnections: {
            in: {
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              dashboard_customer_email: {
                bind: 'customerEmail'
              },
              global_login_success: {
                bind: 'setCustomerMobile'
              },
              native_user_id: {
                bind: 'getNativeUserId'
              },
              __bridge_page_cardCutOffDate: {
                bind: 'init'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackNavigation'
              },
              sign_modal_close_reset: {
                bind: 'clearLoader'
              },
              sign_modal_cancelled: {
                bind: 'manageOtpCancelled'
              },
              cells_to_native_modal_closed: {
                bind: 'manageOtpCancelled'
              },
              card_cut_off_date_otp_error: {
                bind: 'clearLoader'
              },
              global_set_app_settings: {
                bind: 'setPhoneNumberCustomerService'
              }
            },
            out: {
              card_cut_off_date_go_to_back: {
                bind: 'navigation-go-back',
                backStep: true
              },
              card_cut_off_date_go_to_profile: {
                bind: 'card-configuration-cut-off-date-profile-settings-button-click',
                link: {
                  page: 'profile'
                }
              },
              card_cut_off_date_otp_error: {
                bind: 'signature-invalid-dm'
              },
              card_cut_off_date_app_on_click_start: {
                bind: 'card-configuration-cut-off-date-initialize',
                analytics: analitycs.appOnClickStart
              },
              card_cut_off_date_app_page_visit: {
                bind: 'card-configuration-cut-off-date-all-data-load',
                analytics: analitycs.appPageVisit
              },
              card_cut_off_date_app_started: {
                bind: 'card-configuration-cut-off-date-interact',
                analytics: analitycs.appStarted
              },
              card_cut_off_date_app_step_modal_otp: {
                bind: 'card-configuration-cut-off-date-modal-otp-show',
                analytics: analitycs.appStepEnterSign
              },
              card_cut_off_date_app_completed_approved: {
                bind: 'card-configuration-cut-off-date-receipt-success-show',
                analytics: analitycs.appCompletedApproved
              },
              card_cut_off_date_app_completed_pending: {
                bind: 'card-configuration-cut-off-date-receipt-pending-show',
                analytics: analitycs.appCompletedPending
              },
              card_cut_off_date_app_page_footprint_modal_without_email: {
                bind: 'card-configuration-cut-off-date-modal-without-email-show',
                analytics: analitycs._getAdvancedFootprints('completeProfile')
              },
              card_cut_off_date_app_page_footprint_modal_without_mobile: {
                bind: 'card-configuration-cut-off-date-modal-without-mobile-show',
                analytics: analitycs._getAdvancedFootprints('completeProfile')
              },
              card_cut_off_date_app_page_footprint_modal_without_email_and_mobile: {
                bind: 'card-configuration-cut-off-date-modal-without-email-and-mobile-show',
                analytics: analitycs._getAdvancedFootprints('completeProfile')
              },
              card_cut_off_date_app_page_footprint_modal_overdue_payments_access: {
                bind: 'card-configuration-cut-off-date-modal-has-overdue-payments-access-show',
                analytics: analitycs._getAdvancedFootprints('pendingPayment')
              },
              card_cut_off_date_app_page_footprint_modal_without_minimum_access: {
                bind: 'card-configuration-cut-off-date-modal-without-minimum-payment-access-show',
                analytics: analitycs._getAdvancedFootprints('pendingPayment')
              },
              card_cut_off_date_app_page_footprint_modal_funcional_error_access: {
                bind: 'card-configuration-cut-off-date-modal-functional-error-access-show',
                analytics: analitycs._getAdvancedFootprints('notPossibleToChangeDate')
              },
              card_cut_off_date_app_page_footprint_modal_only_once_a_semester_access: {
                bind: 'card-configuration-cut-off-date-modal-already-change-cut-off-date-on-semester-show',
                analytics: analitycs._getAdvancedFootprints('notPossibleToChangeDate')
              },
              card_cut_off_date_app_page_footprint_modal_two_previous_day_access: {
                bind: 'card-configuration-cut-off-date-modal-without-time-to-change-cut-off-date-access-show',
                analytics: analitycs._getAdvancedFootprints('notPossibleToChangeDate')
              },
              card_cut_off_date_app_page_footprint_modal_no_billing_period_access: {
                bind: 'card-configuration-cut-off-date-modal-customer-not-eligible-to-aply-change-access-show',
                analytics: analitycs._getAdvancedFootprints('notPossibleToChangeDate')
              },
              card_cut_off_date_app_page_footprint_modal_pending_change_access: {
                bind: 'card-configuration-cut-off-date-modal-has-pending-cut-off-date-change-access-show',
                analytics: analitycs._getAdvancedFootprints('changeWillBeImplementedSoon')
              },
              card_cut_off_date_app_page_footprint_modal_overdraft_access: {
                bind: 'card-configuration-cut-off-date-modal-has-overdraft-access-show',
                analytics: analitycs._getAdvancedFootprints('creditLineExceeded')
              }
            },
            params: {
              cardId: 'productId'
            }
          }
        }
      }
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('card-configuration-cut-off-date');
  return base;
};
