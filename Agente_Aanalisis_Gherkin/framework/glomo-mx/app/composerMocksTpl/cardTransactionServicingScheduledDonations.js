'use strict';

module.exports = (CONFIG) => {
  const pageName = 'cardTransactionServicingScheduledDonations';
  const { getLanguage, getLocalCurrency, headerHeightMinimum, handleStoppedScroll } = require('./common/helpers/_utils');
  const {
    globalServices: { host, publicSettingsHost, publicSettingsId, requiredToken = 'tsec', versions: { accounts, customersV1, paymentsV2 }},
    donations: { mobileDonations },
    environment,
    aemHost,
    native,
    nativeIos
  } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_cardTransactionServicingScheduledDonations')();

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      className: nativeIos ? 'ios-top-padding' : '',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      delayScroll: 0,
      fixOffsetScroll: 0,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      headerHeightMinimum,
      handleStoppedScroll,
      preventScrollWithOverlay: true
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica'
    })

  };

  const cardTransactionServicingScheduledDonations = {
    zone: 'app__main',
    type: 'UI',
    tag: 'card-transaction-servicing-scheduled-donations',
    familyPath: '@bbva-web-components-widgets/card-transaction-servicing-scheduled-donations',
    render: 'litElement',
    properties: {
      templateId: 'voucherDonations',
      requestAccountsService: false,
      preferredApplicationTimeDays: 29,
      daysBeforePreferredDays: 10,
      serviceTypeId: 'SERV VARIOS',
      relatedContractsProductId: 'ACCOUNTS',
      priority: 1,
      displayedAccountsCount: 3,
      productId: '0576',
      country: 'mx',
      minValue: 20,
      maxValue: 8000,
      firstValue: 50,
      secondValue: 100,
      thirdValue: 200,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      currencyCode: getLocalCurrency(),
      nativeIos,
      host,
      requiredOTP: true,
      requiredToken,
      native,
      aemHost,
      aemPath: mobileDonations.onboardingUrl,
      pageName,
      iOSFixedHeader: nativeIos,
      accountsApiVersion: accounts,
      customerApiVersion: customersV1,
      paymentsApiVersion: paymentsV2,
      publicSettingsHost,
      publicSettingsId,
      publicSettingsConfigKey: 'scheduled_donations',
      environment,
      cellsConnections: {
        in: {
          contract_product_section_oc_banner_servicing_scheduled_donations_clicked: {
            bind: 'getOffer'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlags'
          },
          card_transaction_servicing_scheduled_donations_receipt_captured: {
            bind: 'shareReceipt'
          },
          widget_signature_handle_required_first_step: {
            bind: 'otpFirstStep'
          },
          controller_accounts_data_success: {
            bind: 'rawAccountData'
          },
          sign_modal_cancelled: {
            bind: 'showTransactionEvent'
          },
          sign_modal_close_reset: {
            bind: 'showTransactionEvent'
          },
          cells_to_native_modal_closed: {
            bind: 'showTransactionEvent'
          },
          card_transaction_servicing_scheduled_donations_show_transaction: {
            bind: 'showTransaction'
          }
        },
        out: {
          card_transaction_servicing_scheduled_donations_send_app_page_visit: {
            bind: 'card-transaction-servicing-scheduled-donations-onboarding-render',
            analytics: analytics.appPageVisit
          },
          card_transaction_servicing_scheduled_donations_edit_account_page_visit: {
            bind: 'card-transaction-servicing-scheduled-multistep-donations-edit-account-step-clicked',
            analytics: analytics.editAccountStep
          },
          card_transaction_servicing_scheduled_donations_send_app_started: {
            bind: 'card-transaction-servicing-scheduled-donations-continue',
            analytics: analytics.appStarted
          },
          card_transaction_servicing_scheduled_donations_send_app_step: {
            bind: 'card-transaction-servicing-scheduled-donations-step'
          },
          card_transaction_servicing_scheduled_donations_send_analytic_otp: {
            bind: 'card-transaction-servicing-scheduled-donations-spinner-clear'
          },
          card_transaction_servicing_scheduled_donations_send_app_completed: {
            bind: 'card-transaction-servicing-scheduled-donations-step-completed'
          },
          card_transaction_servicing_scheduled_donations_init_page: {
            bind: 'initFundraisingPage'
          },
          card_transaction_servicing_scheduled_donations_go_back: {
            bind: 'card-transaction-servicing-scheduled-donations-go-back',
            backStep: true
          },
          open_spinner_veil: {
            bind: 'open-spinner-veil'
          },
          card_transaction_servicing_scheduled_donations_show_transaction: {
            bind: 'card-transaction-servicing-scheduled-donations-show-transaction'
          },
          close_spinner_veil: {
            bind: 'hide-spinner-veil'
          },
          card_transaction_servicing_scheduled_donations_operation_click_share: {
            bind: 'card-transaction-servicing-scheduled-donations-share-receipt'
          },
          card_transaction_servicing_scheduled_donations_set_data_to_share: {
            bind: 'card-transaction-servicing-scheduled-donations-receipt-data'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };

  const analyticmanagerCardTransactionServicingScheduledDonations = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-card-transaction-servicing-scheduled-donations',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-transaction-servicing',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          card_transaction_servicing_scheduled_donations_send_app_step: {
            bind: 'analyticAppStep'
          },
          card_transaction_servicing_scheduled_donations_send_analytic_otp: {
            bind: 'analyticAppStep'
          },
          card_transaction_servicing_scheduled_donations_send_app_completed: {
            bind: 'analyticAppCompleted'
          }
        },
        out: {
          card_transaction_servicing_scheduled_donations_send_app_import_amount_analytic: {
            bind: 'bbva-analyticmanager-card-transaction-servicing-scheduled-donations-analytics-import-amount',
            analytics: analytics.importDonationStep
          },
          card_transaction_servicing_scheduled_donations_send_app_confirm_transaction_analytic: {
            bind: 'bbva-analyticmanager-card-transaction-servicing-scheduled-donations-analytics-confirm-transaction',
            analytics: analytics.confirmDonationStep
          },
          card_transaction_servicing_scheduled_donations_send_app_otp_analytic: {
            bind: 'bbva-analyticmanager-card-transaction-servicing-scheduled-donations-analytics-otp',
            analytics: analytics.appStepOTP
          },
          card_transaction_servicing_scheduled_donations_send_app_success_analytic: {
            bind: 'bbva-analyticmanager-card-transaction-servicing-scheduled-donations-analytics-success',
            analytics: analytics.appCompleted
          }
        }
      }
    }
  };

  const shareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mxGlobal',
      cellsConnections: {
        in: {
          card_transaction_servicing_scheduled_donations_operation_click_share: {
            bind: 'captureReceipt'
          },
          card_transaction_servicing_scheduled_donations_set_data_to_share: {
            bind: 'setProperties'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const bbvaControllerTransactionDetailAccountReuseMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-transaction-detail-account-reuse-mx',
    familyPath: '@glomo-web-components/bbva-controller-transaction-detail-account-reuse-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          dashboard_financial_overview: {
            bind: 'setFinancialOverviewData'
          } },
        out: {
          controller_accounts_data_success: {
            bind: 'bbva-controller-transaction-detail-account-reuse-mx-accounts-data-success'
          }}
      }
    }
  };

  const base = {
    currentPage: {
      url: '/card-transaction-servicing-scheduled-donations', params: []
    },
    pages,
    template,
    components: [
      shareGenericReceipt,
      cardTransactionServicingScheduledDonations,
      analyticmanagerCardTransactionServicingScheduledDonations,
      bbvaControllerTransactionDetailAccountReuseMx
    ]
  };

  const singConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  singConnector('card-transaction-servicing-scheduled-donations');
  return sphericaPageUtils.spherize(base);
};
