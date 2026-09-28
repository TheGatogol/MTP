'use strict';

module.exports = config => {
  const pageName = 'ocSecureLoanLead';
  const {
    native = false,
    nativeIos = false,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        patrimonialGuarantees,
        patrimonialGuaranteesV1,
        patrimonialLoans
      }
    }
  } = config;
  const {getLanguage, getLocalCurrency, getShortFormatDate, SPINNERSPHERICA: getSpinner } = require('./common/helpers/_utils');

  const pages = require('./common/_pages')(config)(pageName);
  const analytics = require('./analytics/_ocSecureLoan.js')();

  const ocSecureLoanLead = {
    zone: 'app__main',
    type: 'DM',
    tag: 'loan-and-mortgage-origination-oc-secure-loan-lead-mx',
    familyPath: '@glomo-web-components/loan-and-mortgage-origination-oc-secure-loan-lead-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      pageName,
      requiredToken,
      iOSFixedHeader: nativeIos,
      maxAllowedRetries: 3,
      interestPeriods: 24,
      capitalPeriods: 1,
      minimumLoanAmountOffer: 250000,
      annualInterestRate: ['FIXED', 'VARIABLE'],
      totalAnnualCost: 'TOTAL_ANNUAL_COST',
      monthlyPayment: 'MONTHLY_PAYMENT',
      patrimonialGuaranteesApiVersion: patrimonialGuarantees,
      patrimonialGuaranteesV1ApiVersion: patrimonialGuaranteesV1,
      patrimonialLoansApiVersion: patrimonialLoans,
      cellsConnections: {
        in: {
          __bridge_page_ocSecureLoan: {
            bind: 'initPage'
          },
          global_client_id: {
            bind: 'clientId'
          },
          global_storage_get_loginData_success: {
            bind: 'setClientId'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          }
        },
        out: {
          lmo_oc_secure_loan_go_back_page: {
            bind: 'loan-and-mortgage-origination-oc-secure-loan-lead-mx-exit',
            backStep: true
          },
          lmo_oc_secure_loan_page_visit_channel: {
            bind: 'lmo-oc-secure-loan-lead-offer-page-open',
            analytics: analytics.appPageVisit
          },
          lmo_oc_secure_loan_app_started_channel: {
            bind: 'lmo-oc-secure-loan-lead-offer-page-footer-button-click',
            analytics: analytics.appStarted
          },
          lmo_oc_secure_loan_app_step_simulation_channel: {
            bind: 'lmo-oc-secure-loan-lead-simulation-page-open',
            analytics: analytics.appStepSimulation
          },
          lmo_oc_secure_loan_app_step_summary_channel: {
            bind: 'lmo-oc-secure-loan-lead-simulation-page-continue'
          },
          lmo_oc_secure_loan_app_complete_channel: {
            bind: 'lmo-oc-secure-loan-lead-success-page-open'
          },
          lmo_oc_secure_loan_edit_guarantee_footprint_channel: {
            bind: 'lmo-oc-secure-loan-lead-edit-guarantee-page-open',
            analytics: analytics.editGuarantee
          },
          lmo_oc_secure_loan_edit_percentage_footprint_channel: {
            bind: 'lmo-oc-secure-loan-lead-edit-percentage-modal-open',
            analytics: analytics.editPercentage
          },
          lmo_oc_secure_loan_error_channel: {
            bind: 'loan-and-mortgage-origination-oc-secure-loan-lead-mx-dm-service-error'
          },
          lmo_oc_secure_loan_lead_mx_success_page_share_channel: {
            bind: 'lmo-oc-secure-loan-lead-success-page-share-receipt'
          }
        }
      }
    }
  };

  const ocSecureLoanLeadController = {
    zone: 'app__main',
    type: 'DM',
    tag: 'loan-and-mortgage-origination-oc-secure-loan-lead-mx-controller',
    familyPath: '@glomo-web-components/loan-and-mortgage-origination-oc-secure-loan-lead-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          lmo_oc_secure_loan_lead_mx_success_page_share_channel: {
            bind: 'buildReceiptShare'
          }
        },
        out: {
          lmo_oc_secure_loan_lead_mx_controller_receipt_share_channel: {
            bind: 'loan-and-mortgage-origination-oc-secure-loan-lead-mx-controller-receipt-share'
          },
          lmo_oc_secure_loan_lead_mx_controller_receipt_capture_channel: {
            bind: 'loan-and-mortgage-origination-oc-secure-loan-lead-mx-controller-receipt-capture'
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      dateFormat: getShortFormatDate(),
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          lmo_oc_secure_loan_lead_mx_controller_receipt_share_channel: {
            bind: 'result'
          },
          lmo_oc_secure_loan_lead_mx_controller_receipt_capture_channel: {
            bind: 'captureReceipt'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const ocSecureLoanLeadAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-oc-secure-loan-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          lmo_oc_secure_loan_app_step_summary_channel: {
            bind: 'onStepSummary'
          },
          lmo_oc_secure_loan_app_complete_channel: {
            bind: 'onAppCompleted'
          },
          lmo_oc_secure_loan_error_channel: {
            bind: 'onError'
          }
        },
        out: {
          lmo_oc_secure_loan_app_step_summary: {
            bind: 'analytics-app-step-summary',
            analytics: analytics.appStepSummary
          },
          lmo_oc_secure_loan_app_completed: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          },
          lmo_oc_secure_loan_error_unavailable_operation: {
            bind: 'analytics-error-unavailable-operation',
            analytics: analytics.unavailableOperation
          },
          lmo_oc_secure_loan_error_unfinished_operation: {
            bind: 'analytics-error-unfinished-operation',
            analytics: analytics.unfinishedOperation
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/oc-secure-loan-lead'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        headerFixed: true,
        disableEdgeSwipe: true,
        disableScrollLock: true,
        iOSFixedHeader: nativeIos,
        className: `dark-blue-bg ${nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [
      getSpinner(config),
      ocSecureLoanLead,
      ocSecureLoanLeadController,
      ocSecureLoanLeadAnalytics,
      cellsShareGenericReceipt
    ]
  };

  return base;
};
