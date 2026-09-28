'use strict';
module.exports = (config) => {
  const { useNames, createPrefixFromPageName, getLanguage, glomoOpenDocument, headerHeightMinimum } = require('./common/helpers/_utils');
  const pageName = 'insuranceDelayedPayment';
  const sphericaPageUtils = require('./common/helpers/_spherica.js')(config, pageName);
  const extraHeaderClass = sphericaPageUtils.isSpherica() ? 'bg-dark-core-blue' : '';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(config)(pageName);
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { accountsV1, cardsV1, customersV1, insurancesContractsV1 } },
    native = false,
    nativeIos = false
  } = config;
  const { appOnClickStartFunnel, appCompletedFunnel, appStartedFunnel, appPageVisitFunnel, exitFootprint, genericFootprint, appStep } = require('./analytics/_insuranceDelayedPayment.js')();

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      extraHeaderClass,
      headerHeightMinimum,
      className: 'header--grey',
      iOSFixedHeader: nativeIos
    }
  };

  const billPayment = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components-widgets/insurance-transaction-servicing-insurance-delayed-payment',
    tag: 'insurance-transaction-servicing-insurance-delayed-payment',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      iOSFixedHeader: nativeIos,
      country: 'mx',
      insurancesContractsApiVersion: insurancesContractsV1,
      accountsApiVersion: accountsV1,
      cardsApiVersion: cardsV1,
      customersApiVersion: customersV1,
      localCustomProperties: { documentType: 'PDF' },
      cellsConnections: {
        in: {
          [getChannelName('user_accounts')]: {
            bind: 'dashboardAccounts'
          },
          global_dashboard_cards: {
            bind: 'dashboardCards'
          },
          global_user_id: {
            bind: 'customerId'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          [getChannelName('bill')]: {
            bind: 'billId'
          },
          [getChannelName('subsidiary')]: {
            bind: 'subsidiary'
          },
          [getChannelName('close_modal_otp')]: {
            bind: 'closeOtp'
          }
        },
        out: {
          [getChannelName('active_step')]: {
            bind: 'expandable-multistep-current-active-step'
          },
          [getChannelName('all_steps_complete')]: {
            bind: 'expandable-multistep-all-complete'
          },
          [getChannelName('step_method_payment_select')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-method-payment-select'
          },
          [getChannelName('exit_page')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-exit-feature',
            link: {
              page: 'dashboard'
            }
          },
          financial_overview_refresh: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-data-refresh'
          },
          [getChannelName('exit_page_onBarding')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-onboarding-page-close-onboarding-modal',
            link: {
              page: 'dashboard'
            }
          },
          [getChannelName('document_64')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-dm-document-success'
          },
          [getChannelName('poduct_Select')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-product-select'
          },
          [getChannelName('onboarding_page')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-onboarding-page-send-data-visibility-change',
            analytics: appPageVisitFunnel
          },
          [getChannelName('page_view')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-onboarding-page-start-operative',
            analytics: appOnClickStartFunnel
          },
          [getChannelName('analytic_otp')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-payment-multistep-bill-pay'
          },
          [getChannelName('analytic_operation_no_available')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-dm-bill-response-functional-error',
            analytics: genericFootprint('footprintOpNoAvailable')
          },
          [getChannelName('analytic_communication_error')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-dm-error-retry',
            analytics: genericFootprint('footprintCommunicationError')
          },
          [getChannelName('analytic_expired_time')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-dm-bill-response-expired-time',
            analytics: genericFootprint('footprintExpiredTime')
          },
          [getChannelName('analytic_exit_proces')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-payment-multistep-exit-proces'
          },
          [getChannelName('analytic_payment_another_operation')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-dm-bill-response-payment-another-operation',
            analytics: genericFootprint('footprintPaidPolicy')
          },
          [getChannelName('analytic_feature_complete')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-dm-bill-response-payment'
          },
          [getChannelName('button_delayed_payment_conditions_receipt_share')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-conditions-receipt-share'
          },
          insurance_delayed_payment_exit_button_continue: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-custom-modal-footer-link-click'
          },
          [getChannelName('exit_button_exit')]: {
            bind: 'insurance-transaction-servicing-insurance-delayed-payment-custom-modal-footer-button-click'
          }
        }
      }
    }
  };

  const insurnaceDelayedPaymentController = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-insurance-delayed-payment',
    familyPath: '@glomo-web-components/bbva-controller-insurance-delayed-payment',
    render: 'litElement',
    properties: {
      host,
      native,
      userFlag: true,
      customersApiVersion: customersV1,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'flags'
          },
          global_storage_get_loginData_success: {
            bind: 'obtainRequesterFullName'
          },
          __bridge_page_comingSoon: {
            bind: 'navigate'
          },
          global_set_app_settings: {
            bind: 'getSubsidiary'
          },
          native_login_success: {
            bind: 'getCustomerId'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'initFromPush'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'initFromNotificationCenter'
          },
          exit_page: {
            bind: 'navigate'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          [getChannelName('step_method_payment_select')]: {
            bind: 'obtainPaymentSelected'
          },
          [getChannelName('active_step')]: {
            bind: 'whereStep'
          },
          [getChannelName('all_steps_complete')]: {
            bind: 'analyticConfirm'
          },
          [getChannelName('poduct_Select')]: {
            bind: 'product'
          },
          [getChannelName('analytic_feature_complete')]: {
            bind: 'validateEndProcess'
          },
          [getChannelName('analytic_otp')]: {
            bind: 'fireOtp'
          },
          [getChannelName('analytic_exit_proces')]: {
            bind: 'exitProcessAnalytics'
          },
          insurance_delayed_payment_request_data_to_share_receipt_delayed_payment_success_response: {
            bind: 'dataProcessingSuccessResponse'
          },
          [getChannelName('button_delayed_payment_conditions_receipt_share')]: {
            bind: 'shareTrigger'
          },
          [getChannelName('document_64')]: {
            bind: 'fireBase64'
          },
          sign_modal_cancelled: {
            bind: 'closeOtp'
          },
          insurance_delayed_payment_exit_button_continue: {
            bind: 'exitProcess'
          }
        },
        out: {
          insurance_delayed_payment_request_data_to_share_receipt_delayed_payment_success_response: {
            bind: 'insurance-delayed-payment-share-recipt'
          },
          [getChannelName('close_modal_otp')]: {
            bind: 'cancel-otp-close-modal'
          },
          [getChannelName('subsidiary')]: {
            bind: 'insurance-delayed-payment-controller-subsidiary'
          },
          [getChannelName('bill')]: {
            bind: 'insurance-delayed-payment-controller-bill'
          },
          CLOSE_NOTIFICATION_CENTER_DETAIL_MODAL: {
            bind: 'insurance-delayed-payment-close-notification-center'
          },
          [getChannelName('user')]: {
            bind: 'insurance-delayed-payment-controller-bill-user'
          },
          [getChannelName('user_accounts')]: {
            bind: 'insurance-delayed-payment-controller-bill-user-accounts'
          },
          global_open_document_base64: {
            bind: 'insurance-delayed-payment-controller-document-base64'
          },
          [getChannelName('in_coming_soom')]: {
            bind: 'insurance-delayed-comming-soon',
            link: {
              page: 'comingSoon',
              cleanUntil: pageName
            }
          },
          [getChannelName('exit_page_cooming')]: {
            bind: 'navigation-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          [getChannelName('analytic_step_started')]: {
            bind: 'insurance-delayed-payment-controller-select-started',
            analytics: appStep('2', '2 modalidad de pago')
          },
          [getChannelName('analytic_step_subsidiary_payment_select')]: {
            bind: 'insurance-delayed-payment-controller-subsidiary-item-select',
            analytics: appStartedFunnel
          },
          [getChannelName('analytic_step_confirm')]: {
            bind: 'insurance-delayed-analytic-confirm',
            analytics: appStep('3', '3 confirmacion')
          },
          [getChannelName('analytic_otp_fire')]: {
            bind: 'analytics-fire-otp',
            analytics: appStep('4', '4 otp')
          },
          [getChannelName('analytic_terms_and_conditions')]: {
            bind: 'insurance-delayed-analytic-terms-and-conditions',
            analytics: genericFootprint('footprintTermsConditions')
          },
          [getChannelName('analytic_completed')]: {
            bind: 'insurance-delayed-analytic-finish-process',
            analytics: appCompletedFunnel
          },
          insurance_delayed_payment_analytic_exit_process: {
            bind: 'insurance-delayed-payment-analytics-exit-preces',
            analytics: genericFootprint('footprintExitProcessMethod')
          },
          [getChannelName('exit_button_continue_analytic')]: {
            bind: 'insurance-delayed-payment-analytics-exit-coninue',
            analytics: exitFootprint
          },
          [getChannelName('exit_button_exit_analytic')]: {
            bind: 'insurance-delayed-payment-analytics-exit-proccess',
            analytics: exitFootprint
          },
          [getChannelName('operative_share_receipt_set')]: {
            bind: 'bbva-controller-insurance-delayed-payment-operative-receipt-set'
          },
          [getChannelName('set_info_to_share')]: {
            bind: 'bbva-controller-insurance-delayed-payment-share-receipt'
          }
        },
        params: {
          userId: 'global_client_id',
          userIdEncr: 'global_user_id'
        }
      }
    }
  };

  const sharedReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: getLanguage(),
      country: 'mx',
      headerReceipt: false,
      maxLineWidth: 40,
      sharedReceiptStyles: {
        headerImage: {
          'padding': '0rem'
        },
        receiptTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        fieldTitle: {
          'height': 'auto',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '1.5rem',
          'margin-top': '1rem'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('operative_share_receipt_set')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('set_info_to_share')]: {
            bind: 'setProperties'
          },
          [getChannelName('_reset_share_button')]: {
            bind: 'reset'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_share_receipt_error_modal: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'insurance-delayed-payment',
    currentPage: {
      url: '/insurance-delayed-payment'
    },
    pages,
    template,
    components: [
      billPayment,
      insurnaceDelayedPaymentController,
      sharedReceipt
    ]
  };

  if (native) {
    base.components.push(glomoOpenDocument(config));
  }

  const signConnector = require('./common/_widget-sign-connector')(config)(base);
  signConnector('insurance-transaction-servicing-insurance-delayed-payment');
  return sphericaPageUtils.spherize(base);
};
