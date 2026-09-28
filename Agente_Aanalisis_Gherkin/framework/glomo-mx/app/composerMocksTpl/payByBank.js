'use strict';

module.exports = (CONFIG) => {
  const { getLanguage,
    getAlternativeFormatDateWithShortMonth,
    getLocalCurrency,
    createPrefixFromPageName,
    useNames,
    headerHeightMinimum,
    SPINNERSPHERICA: getSpinnerSpherica } = require('./common/helpers/_utils');
  const pageName = 'payByBank';
  const literals = require('../composerMocksTpl/analytics/common/_literals.js');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const analytics = require('./analytics/_payByBank.js')(CONFIG);
  const forbiddenAccountsIds = ['0167', '0004', '0201', '0312', '0231'];
  const spinner = getSpinnerSpherica(CONFIG);
  const storage = require('./common/_local-storage');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const extraHeaderClass = sphericaPageUtils.isSpherica() ? '' : 'dark-blue-bg';

  const {
    globalServices: { host, requiredToken = 'tsec', versions: { accounts, paymentsV0, paymentsV1, operationRegistries, customersV1 } }, native = false, nativeIos = false, aemHost, payments: { payByBankWelcome: { onboardingUrl } }
  } = CONFIG;

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      headerHeight: headerHeightMinimum,
      inertialScrolling: true,
      extraHeaderClass: extraHeaderClass,
      selected: 'main',
      disableScrollLock: false,
      relativeMain: true
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokename: requiredToken,
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          init_page_payByBank_channel: {
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

  const registerScreen = {
    zone: 'app__overlay',
    type: 'DM',
    tag: 'bbva-feature-ecommerce-payments-p2m',
    familyPath: '@glomo-web-components/bbva-feature-ecommerce-payments-p2m',
    render: 'litElement',
    properties: {
      host,
      native,
      country: 'mx',
      iOSFixedHeader: nativeIos,
      requiredOTP: true,
      requiredToken,
      paymentsApiVersion: paymentsV0,
      operationRegistresApiVersion: operationRegistries,
      unmasked: true,
      customersApiVersion: customersV1,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          sign_modal_cancelled: {
            bind: 'linkExpiredEvent'
          },
          native_back_button_clicked_close_modal: {
            bind: 'linkExpiredEvent'
          },
          global_set_app_settings: {
            bind: 'getAppSettings'
          },
          contract_product_section_oc_banner_instant_cash_clicked: {
            bind: 'getPushData'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'getPushData'
          },
          dashboard_accounts: {
            bind: 'getAccounts'
          },
          [getChannelName('_handle_open_modal_udis')]: {
            bind: 'handleOpenModal'
          },
          [getChannelName('_share_receipt')]: {
            bind: 'setDataToShare'
          },
          [getChannelName('receipt_captured')]: {
            bind: 'shareReceipt'
          },
          [getChannelName('_reset_multistep')]: {
            bind: 'resetFlagsServices'
          },
          pay_by_bank_reset_multistep_close_navigation: {
            bind: 'resetFlagsServices'
          },
          [getChannelName('operation_request_success')]: {
            bind: 'closeLoader'
          },
          [getChannelName('operation_request_error')]: {
            bind: 'showErrorModal'
          }
        },
        out: {
          pay_by_bank_common_analytic: {
            bind: 'bbva-feature-ecommerce-payments-p2m-analytics-link-expired'
          },
          [getChannelName('_go_to_dashboard')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-go-to-dashboard',
            backStep: true
          },
          pay_by_bank_authorize_transaction: {
            bind: 'bbva-feature-ecommerce-payments-p2m-transaction-authorize'
          },
          [getChannelName('_accounts_maps')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-accounts-map'
          },
          [getChannelName('_push_notification_map')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-push-notification-map'
          },
          [getChannelName('_receipt_template')]: {
            bind: 'receipt-template'
          },
          [getChannelName('_receipt_data')]: {
            bind: 'receipt-data'
          },
          [getChannelName('_receipt_click')]: {
            bind: 'receipt-click'
          },
          global_action_launcher_share_image: {
            bind: 'share-receipt-open-launcher'
          },
          [getChannelName('request_api_operation')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-send-response-recover-registry'
          },
          [getChannelName('_updated')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-updated'
          },
          [getChannelName('_send_user_email')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-send-user-email'
          },
          [getChannelName('_default_concept')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-default-concept'
          },
          [getChannelName('_user_registered')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-user-registered'
          },
          [getChannelName('_check_all_steps')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-is-reset-operative'
          },
          [getChannelName('_secure_local_storage')]: {
            bind: 'bbva-feature-ecommerce-payments-p2m-send-secure'
          },
          open_control_veil: {
            bind: 'bbva-feature-ecommerce-payments-p2m-open-veil'
          },
          close_control_veil: {
            bind: 'hide-loader'
          },
          pay_by_bank_veil_click: {
            bind: 'bbva-feature-ecommerce-payments-p2m-click-veil-modal'
          },
          pay_by_bank_swipe_close: {
            bind: 'bbva-feature-ecommerce-payments-p2m-swipe-close-modal'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };

  const acccountTranserPaymentE2e = {
    zone: 'app__main',
    type: 'DM',
    tag: 'account-transaction-servicing-ecommerce-payments-p2m-mx',
    familyPath: '@glomo-web-components/account-transaction-servicing-ecommerce-payments-p2m-mx',
    render: 'litElement',
    properties: {
      localCurrency: getLocalCurrency(),
      hideConceptStep: false,
      forbiddenAccountsIds,
      contentFragmentHost: aemHost,
      contentFragmentPathWelcome: onboardingUrl,
      host,
      native,
      requiredOTP: true,
      country: 'mx',
      peerToPeerApiVersion: paymentsV1,
      requiredToken,
      accountsApiVersion: accounts,
      isUserRegistered: true,
      iOSFixedHeader: nativeIos,
      whatsNewEnabled: true,
      cellsConnections: {
        in: {
          [getChannelName('_secure_local_storage')]: {
            bind: 'getLocalStorage'
          },
          global_storage_get_first_access_date_success: {
            bind: 'getLocalStorageSuccessResponse'
          },
          global_storage_get_first_access_date_error: {
            bind: 'getLocalStorageSuccessResponse'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackNavigation'
          },
          [getChannelName('_accounts_maps')]: {
            bind: 'accounts'
          },
          [getChannelName('_send_user_email')]: {
            bind: 'userEmail'
          },
          [getChannelName('_push_notification_map')]: {
            bind: 'paymentInfo'
          },
          [getChannelName('_default_concept')]: {
            bind: 'defaultPaymentConcept'
          },
          [getChannelName('_check_all_steps')]: {
            bind: 'resetMultiStepAndInitiationState'
          }
        },
        out: {
          pay_by_bank_onboarding_view: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-analytic-onboarding-view'
          },
          pay_by_bank_error_common_payment: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-analytic-error-simulate'
          },
          [getChannelName('_payment_confirmed')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-payment-complete'
          },
          pay_by_bank_payment_simulate_error: {
            bind: 'payments-simulate-api-dm-fetch-error'
          },
          [getChannelName('_button_confim')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-button-confirm'
          },
          [getChannelName('_selected_account')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-accounts-list-account-select'
          },
          [getChannelName('_close_navigation_external')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-receipt-modal-close-navigation-external',
            backStep: true
          },
          pay_by_bank_reset_multistep_close_navigation: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-receipt-modal-close-navigation-external'
          },
          [getChannelName('_go_to_back')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-go-to-back',
            backStep: true
          },
          [getChannelName('_reset_multistep')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-go-to-back'
          },
          [getChannelName('_need_onboarding')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-need-onboarding-navigation-external'
          },
          [getChannelName('_complete_step_concept')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-complete-step'
          },
          [getChannelName('_edit_step')]: {
            bind: 'expandable-step-edit-step'
          },
          [getChannelName('_share_receipt')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-share-receipt-navigation-external'
          },
          pay_by_bank_common_analytic: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-no-accounts-available'
          },
          global_set_in_storage: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-set-native-local-storage'
          },
          global_get_from_storage: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-get-native-local-storage'
          },
          close_control_veil: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-get-native-local-storage'
          },
          [getChannelName('_handle_open_modal_udis')]: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-handle-modal-udis'
          },
          pay_by_bank_exit_operative: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-analytic-exit-operative-modal-open'
          },
          pay_by_bank_exit_link: {
            bind: 'account-transaction-servicing-ecommerce-payments-p2m-mx-analytic-exit-operative-link-click'
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-ecommerce-payments-p2m-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-account-transaction-servicing',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('_push_notification_map')]: {
            bind: 'paymentInfo'
          },
          [getChannelName('_accounts_maps')]: {
            bind: 'manageProducts'
          },
          [getChannelName('_updated')]: {
            bind: 'manageAppVisit'
          },
          [getChannelName('_payment_confirmed')]: {
            bind: 'manageAppCompleted'
          },
          [getChannelName('_edit_step')]: {
            bind: 'manageAppStarted'
          },
          [getChannelName('_button_confim')]: {
            bind: 'manageAppStarted'
          },
          [getChannelName('_selected_account')]: {
            bind: 'accountSelected'
          },
          [getChannelName('_reset_multistep')]: {
            bind: 'resetComponent'
          },
          pay_by_bank_onboarding_view: {
            bind: 'fireAnalyticsOnboarding'
          },
          widget_signature_handle_required_first_step: {
            bind: 'fireAnalyticsOTP'
          },
          pay_by_bank_authorize_transaction: {
            bind: 'manageAuthorizeCommerce'
          },
          pay_by_bank_common_analytic: {
            bind: 'fireAnalytic'
          },
          pay_by_bank_payment_simulate_error: {
            bind: 'manageSimulateError'
          },
          pay_by_bank_error_common_payment: {
            bind: 'manageSimulateError'
          },
          pay_by_bank_exit_operative: {
            bind: 'fireAnalyticsExitOperative'
          },
          pay_by_bank_exit_link: {
            bind: 'fireAnalytic'
          }
        },
        out: {
          [getChannelName('_analytics_payment_info')]: {
            bind: 'ecommerce-payments-p2m-analytics-app-payment-info'
          },
          [getChannelName('_analytics_account')]: {
            bind: 'ecommerce-payments-p2m-analytics-app-visit',
            analytics: analytics.appPageVisit('1 confirmar pago')
          },
          [getChannelName('_analytics_app_completed')]: {
            bind: 'ecommerce-payments-p2m-analytics-app-completed',
            analytics: analytics.appCompleted('pagina exitosa')
          },
          [getChannelName('_analytics_app_started')]: {
            bind: 'ecommerce-payments-p2m-analytics-app-started',
            analytics: analytics.appStarted()
          },
          pay_by_bank_analytics_onboarding_view: {
            bind: 'ecommerce-payments-p2m-analytics-onboarding-view',
            analytics: analytics.footprintsLvl2('pagar en comercio digital')
          },
          pay_by_bank_analytics_origin: {
            bind: 'analytics-page-view-origin',
            analytics: analytics.footprintsLvl2('origen')
          },
          pay_by_bank_analytics_concept: {
            bind: 'analytics-page-view-concept',
            analytics: analytics.footprintsLvl2('concepto')
          },
          pay_by_bank_analytics_otp: {
            bind: 'ecommerce-payments-p2m-analytics-otp',
            analytics: analytics.footprintsLvl2('otp', true)
          },
          pay_by_bank_analytics_authorize_commerce: {
            bind: 'ecommerce-payments-p2m-analytics-app-authorize-commerce',
            analytics: analytics.footprintsLvl2('registrar cuenta')
          },
          pay_by_bank_analytics_payment_error: {
            bind: 'ecommerce-payments-p2m-analytics-payment-simulate-error',
            analytics: analytics.footprintsErrorLvl3('pagar ecommerce', '1 confirmar pago', 'error no se puede hacer el pago')
          },
          pay_by_bank_analytics_exit_operative: {
            bind: 'ecommerce-payments-p2m-analytics-exit-operative',
            analytics: analytics.footprintsLvl3('salir de la operativa', 'informacion')
          },
          pay_by_bank_analytics_exit_operative_link: {
            bind: 'ecommerce-payments-p2m-analytics-exit-operative-link-click',
            analytics: analytics.internalLinkLvl3('salir de la operativa')
          },
          pay_by_bank_error_link_expired: {
            bind: 'ecommerce-payments-p2m-analytics-link-expired',
            analytics: analytics.footprintPageError('error tiempo de pago agotado')
          },
          pay_by_bank_empty_account_error: {
            bind: 'ecommerce-payments-p2m-analytics-no-accounts-available',
            analytics: analytics.footprintPageError('error sin cuenta debito')
          }
        }
      }
    }
  };

  const shareStyles = {
    headerImage: {
      'filter': 'invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)'
    },
    info: {
      'padding': '0',
      'background-color': 'transparent'
    },
    infoMessage: {
      'font-size': '0.75rem',
      'letter-spacing': '0%',
      'background-color': 'transparent'
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      language: getLanguage(),
      formatDate: getAlternativeFormatDateWithShortMonth(),
      dateFormat: getAlternativeFormatDateWithShortMonth(),
      sharedReceiptStyles: shareStyles,
      infoImage: '',
      cellsConnections: {
        in: {
          init_page_payByBank_channel: {
            bind: 'reset'
          },
          [getChannelName('_receipt_template')]: {
            bind: 'addDynamicTemplate'
          },
          [getChannelName('_receipt_data')]: {
            bind: 'result'
          },
          [getChannelName('_receipt_click')]: {
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
          [getChannelName('receipt_captured')]: {
            bind: 'receipt-captured'
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/pay-by-bank'
    },
    template,
    components: [
      spinner,
      lifeCycle,
      registerScreen,
      acccountTranserPaymentE2e,
      analyticsManager,
      shareReceipt
    ]
  };

  storage.addOutStorageChannels(base.components, [ 'first_access_date' ], CONFIG);

  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signConnector(registerScreen.tag, {cancelAfterErrorFunction: 'linkExpiredEvent'});
  signConnector(acccountTranserPaymentE2e.tag);
  signConnector(acccountTranserPaymentE2e.tag, {retryAfterErrorFunction: 'handleRequestActions'});
  return sphericaPageUtils.spherize(base);
};
