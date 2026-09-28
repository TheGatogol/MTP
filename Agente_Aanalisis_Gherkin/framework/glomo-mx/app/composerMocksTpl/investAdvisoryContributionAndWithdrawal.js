'use strict';

module.exports = CONFIG => {
  const pageName = 'investAdvisoryContributionAndWithdrawal';
  const { native = false, nativeIos = false, globalServices: { host, requiredToken = 'tsec', versions: { products } } } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_investAdvisoryContribution')();
  const analyticsWithdrawal = require('./analytics/_investAdvisoryWithdrawal')();
  const { getLanguage, getLocalCurrency } = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);

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
          [pageName + '_RESET_PAGE']: {
            bind: 'reset'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const featureInvestmentWithdrawalAndContribution = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-investment-withdrawal-and-contribution',
    tagSpherica: 'bbva-feature-investment-withdrawal-and-contribution',
    familyPath: '@glomo-web-components/bbva-feature-investment-withdrawal-and-contribution',
    familyPathSpherica: '@glomo-web-components/bbva-feature-investment-withdrawal-and-contribution-spherica',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      version: products,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          sign_modal_cancelled: {
            bind: 'cancelAfterError'
          },
          widget_signature_close_modal_error: {
            bind: 'cancelAfterError'
          },
          widget_signature_handle_invalid: {
            bind: 'cancelAfterError'
          },
          investAdvisoryProductDetail_NAVIGATE_TO_CONTRIBUTION: {
            bind: 'sendData'
          },
          investAdvisoryProductDetail_NAVIGATE_TO_WITHDRAWAL: {
            bind: 'sendData'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          }
        },
        out: {
          [pageName + '_EXIT_WITHDRAWAL_AND_CONTRIBUTION']: {
            bind: 'on-exit-withdrawal-and-contribution',
            link: {
              page: 'investAdvisoryProductDetail',
              cleanUntil: 'investAdvisoryProductDetail'
            }
          },
          [pageName + '_AMOUNT_ANALYTICS_ON_FOCUS']: {
            bind: 'investment-contribution-validate-amount-on-focus'
          },
          [pageName + '_ANALYTICS_STEP_INPUT_CONTRIBUTION']: {
            bind: 'investment-contribution-input-button'
          },
          [pageName + '_ANALYTICS_STEP_INPUT_WITHDRAWAL']: {
            bind: 'investment-withdrawal-app-step-input'
          },
          [pageName + '_ANALYTICS_STEP_DISTRIBUTION_CONTRIBUTION']: {
            bind: 'investment-contribution-distribution-button'
          },
          [pageName + '_ANALYTICS_STEP_DISTRIBUTION_WITHDRAWAL']: {
            bind: 'investment-withdrawal-distribution-button'
          },
          [pageName + '_EXIT_STATUS_PAGE']: {
            bind: 'exit-form-bbva-invest-status-page',
            backStep: true
          },
          [pageName + '_SHARE_RECIPT']: {
            bind: 'investment-contribution-share-receipt'
          },
          [pageName + '_PAGE_VISIT']: {
            bind: 'investment-contribution-page-visit'
          },
          [pageName + '_PAGE_VISIT_WITHDRAWAL']: {
            bind: 'investment-withdrawal-page-visit'
          },
          [pageName + '_APP_STARTED_WITHDRAWAL']: {
            bind: 'investment-withdrawal-app-started'
          },
          [pageName + '_ANALYTICS_STEP_COMPLETE_WITHDRAWAL']: {
            bind: 'investment-withdrawal-step-complete'
          },
          [pageName + '_ANALYTICS_COMPLETED']: {
            bind: 'investment-contribution-completed'
          },
          invest_advisory_contribution_and_withdrawal_analytics_withdrawal_total: {
            bind: 'bbva-feature-investment-withdrawal-analitics-modal-total-import',
            analytics: analyticsWithdrawal.errorModalWithdrawal
          },
          [pageName + '_ANALYTICS_INFORMATION_NO_AVAILABLE_CONTRIBUTION']: {
            bind: 'investment-contribution-information-no-available',
            analytics: analytics.errorInfoNotAvailable
          },
          [pageName + '_ANALYTICS_INFORMATION_NO_AVAILABLE_WITHDRAWAL']: {
            bind: 'investment-withdrawal-information-no-available',
            analytics: analyticsWithdrawal.errorInfoNotAvailable
          },
          [pageName + '_ANALYTICS_INSUFFICIENT_AMOUNT']: {
            bind: 'investment-contribution-insufficient-amount',
            analytics: analytics.errorInsufficientAmount
          },
          [pageName + 'share_receipt_capture']: {
            bind: 'investment-withdrawal-and-contribution-share-receipt'
          },
          [pageName + 'set_successfull_data']: {
            bind: 'investment-withdrawal-and-contribution-set-data'
          },
          withdrawal_share_receipt: {
            bind: 'investment-withdrawal-and-contribution-share-receipt-operation-data'
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
          [pageName + 'share_receipt_capture']: {
            bind: 'captureReceipt'
          },
          [pageName + 'set_successfull_data']: {
            bind: 'result'
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
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const analyticManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-investment-contribution',
    familyPath: '@glomo-web-components/bbva-analyticmanager-other-investment-transaction-servicing',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [pageName + '_EXIT_WITHDRAWAL_AND_CONTRIBUTION']: {
            bind: 'resetAnalytics'
          },
          [pageName + '_PAGE_VISIT']: {
            bind: 'fireAnalyticsPageVisit'
          },
          [pageName + '_PAGE_VISIT_WITHDRAWAL']: {
            bind: 'fireAnalyticsPageVisit'
          },
          [pageName + '_AMOUNT_ANALYTICS_ON_FOCUS']: {
            bind: 'fireAnalyticsAppStarted'
          },
          [pageName + '_ANALYTICS_STEP_INPUT_CONTRIBUTION']: {
            bind: 'fireAnalyticsAppStepInput'
          },
          [pageName + '_ANALYTICS_STEP_INPUT_WITHDRAWAL']: {
            bind: 'fireAnalyticsAppStepInputWithdrawal'
          },
          [pageName + '_ANALYTICS_STEP_DISTRIBUTION_CONTRIBUTION']: {
            bind: 'fireAnalyticsAppStepDistribution'
          },
          [pageName + '_ANALYTICS_STEP_DISTRIBUTION_WITHDRAWAL']: {
            bind: 'fireAnalyticsAppStepDistributionWithdrawal'
          },
          'widget_signature_handle_required_first_step': {
            bind: 'fireAnalyticsOTP'
          },
          [pageName + '_ANALYTICS_STEP_COMPLETE_WITHDRAWAL']: {
            bind: 'fireAnalyticsAppStepCompleteWithdrawal'
          },
          [pageName + '_ANALYTICS_COMPLETED']: {
            bind: 'fireAnalyticsCompleted'
          },
          [pageName + '_APP_STARTED_WITHDRAWAL']: {
            bind: 'fireAnalyticsAppStarted'
          },
          withdrawal_share_receipt: {
            bind: 'fireAnalyticsShareReceipt'
          }
        },
        out: {
          [pageName + '_APP_VISIT_ANALYTICS_LAUNCH_CONTRIBUTION']: {
            bind: 'investment-contribution-page-visit',
            analytics: analytics.appPageVisit
          },
          [pageName + '_APP_VISIT_ANALYTICS_LAUNCH_WITHDRAWAL']: {
            bind: 'investment-withdrawal-page-visit',
            analytics: analyticsWithdrawal.appPageVisit
          },
          [pageName + '_APP_STARTED_ANALYTICS_LAUNCH_CONTRIBUTION']: {
            bind: 'investment-contribution-validate-amount-on-focus',
            analytics: analytics.appStarted
          },
          [pageName + '_APP_STARTED_ANALYTICS_LAUNCH_WITHDRAWAL']: {
            bind: 'investment-withdrawal-app-started',
            analytics: analyticsWithdrawal.appStarted
          },
          [pageName + '_STEP_INPUT_ANALYTICS_LAUNCH_CONTRIBUTION']: {
            bind: 'analytics-investment-contribution-step-input',
            analytics: analytics.appStepInput
          },
          [pageName + '_STEP_INPUT_ANALYTICS_LAUNCH_WITHDRAWAL']: {
            bind: 'investment-withdrawal-app-step-input',
            analytics: analyticsWithdrawal.appStepInput
          },
          [pageName + '_STEP_DISTRIBUTION_ANALYTICS_LAUNCH_CONTRIBUTION']: {
            bind: 'analytics-investment-contribution-step-distribution',
            analytics: analytics.appStepDistribution
          },
          [pageName + '_STEP_DISTRIBUTION_ANALYTICS_LAUNCH_WITHDRAWAL']: {
            bind: 'investment-withdrawal-distribution-button',
            analytics: analyticsWithdrawal.footprintDistribution
          },
          [pageName + '_STEP_COMPLETE_ANALYTICS_LAUNCH_CONTRIBUTION']: {
            bind: 'analytics-investment-contribution-otp',
            analytics: analytics.otpFootprint
          },
          [pageName + '_STEP_OTP_ANALYTICS_LAUNCH_WITHDRAWAL']: {
            bind: 'analytics-investment-withdrawal-otp',
            analytics: analyticsWithdrawal.otpFootprint
          },
          [pageName + '_STEP_COMPLETE_ANALYTICS_LAUNCH_WITHDRAWAL']: {
            bind: 'investment-withdrawal-step-complete',
            analytics: analyticsWithdrawal.appStepCompleted
          },
          [pageName + '_COMPLETED_ANALYTICS_LAUNCH_CONTRIBUTION']: {
            bind: 'analytics-investment-contribution-completed',
            analytics: analytics.appCompleted
          },
          [pageName + '_COMPLETED_ANALYTICS_LAUNCH_WITHDRAWAL']: {
            bind: 'analytics-investment-withdrawal-completed',
            analytics: analyticsWithdrawal.appCompleted
          },
          share_receipt_anlitics_compra: {
            bind: 'contribution_share_receipt',
            analytics: analytics.externalLinkReceipt
          },
          share_receipt_anlitics_venta: {
            bind: 'withdrawal_share_receipt',
            analytics: analyticsWithdrawal.externalLinkReceipt
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/invest-advisory-contribution-and-withdrawal'
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
        headerFixed: true,
        disableScrollLock: true,
        disableEdgeSwipe: true
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
    },
    components: [
      lifeCycle,
      featureInvestmentWithdrawalAndContribution,
      analyticManager,
      cellsShareGenericReceipt
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-investment-withdrawal-and-contribution');

  return sphericaPageUtils.spherize(base);
};