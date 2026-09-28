'use strict';
module.exports = config => {
  const pageName = 'billPaymentsHome';
  const pages = require('./common/_pages')(config)(pageName);
  const localStorageBillPaymentsHome = require('./common/_local-storage');
  const analyticsBillPaymentsHome = require('./analytics/_billPaymentsHome')(config);
  const analitycsScheduledBillPayments = require('./analytics/_scheduledBillPayments')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const OPERATIONALS = require('./dashboard/_operationals');
  const {
    globalServices: { host, requiredToken = 'tsec' },
    native = false,
    nativeIos = false,
    aemHost,
    payments: {
      billPaymentsHome: {
        onboardingUrl: carouselContentFragmentPath
      }
    }
  } = config;
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      headerFixed: true,
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      iOSFixedHeader: nativeIos
    }
  };

  const componentsFeature = {
    zone: 'app__main',
    type: 'DM',
    tag: 'account-transaction-servicing-bill-payments-home',
    familyPath: '@bbva-web-components-widgets/account-transaction-servicing-bill-payments-home',
    tagSpherica: 'account-transaction-servicing-bill-payments-home-mx',
    familyPathSpherica: '@glomo-web-components/account-transaction-servicing-bill-payments-home-mx',
    render: 'litElement',
    properties: {
      contentFragmentHost: aemHost,
      contentFragmentPath: carouselContentFragmentPath,
      contentFragmentNative: native,
      host,
      native,
      requiredToken,
      locale: 'mx',
      currencyCode: 'MXN',
      iOSFixedHeader: nativeIos,
      pageName,
      cellsConnections: {
        in: {
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_storage_get_command_center_success: {
            bind: 'successGetFlagCommandCenter'
          },
          global_storage_get_command_center_error: {
            bind: 'errorGetFlagCommandCenter'
          },
          __bridge_page_billPaymentsHome: {
            bind: 'getFlagLocalStorage'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          },
          global_feature_flag_activated_bill_payments_home_arcus: {
            bind: 'queryArcusFlag'
          },
          global_feature_flag_deactivate_bill_payments_home_arcus: {
            bind: 'queryArcusFlag'
          },
          global_feature_flag_activated_scheduled_bill_payments: {
            bind: 'queryScheduledFlag'
          },
          global_feature_flag_deactivate_scheduled_bill_payments: {
            bind: 'queryScheduledFlag'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'account-transaction-servicing-bill-payments-home-init-get'
          },
          global_set_in_storage: {
            bind: 'account-transaction-servicing-bill-payments-home-init'
          },
          bill_payments_home_exit_process: {
            bind: 'account-transaction-servicing-bill-payments-home-header-close-button-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          navigation_to_billpayments_dashboard: {
            bind: 'account-transaction-servicing-bill-payments-home-new-service-button-click-navigation-external',
            link: {
              page: 'billPaymentsDashboard',
              skipHistory: true
            }
          },
          navigation_to_billpayments_scheduled: {
            bind: 'account-transaction-servicing-bill-payments-home-programming-payments-service-click-navigation-external',
            analytics: analitycsScheduledBillPayments.appOnclickStartScheduledBillPayments(
              'pagar servicio o impuesto',
              '',
              '',
              'programar pago',
              'informacion'
            ),
            link: {
              page: 'scheduledBillPayments'
            }
          },
          navigation_to_billpayments_scheduled_from_detail_manual: {
            bind: 'account-transaction-servicing-bill-payments-home-programmingPay-click',
            analytics: analitycsScheduledBillPayments.appOnclickStartScheduledBillPayments(
              'pagar servicio o impuesto',
              'detalle servicio',
              '',
              'programar pago',
              'informacion'
            ),
            link: {
              page: 'scheduledBillPayments'
            }
          },
          navigation_to_billpayments_scheduled_from_detail_edit: {
            bind: 'account-transaction-servicing-bill-payments-home-action-edit-service-click',
            link: {
              page: 'scheduledBillPayments'
            }
          },
          navigation_to_billpayments_scheduled_from_detail_cancel: {
            bind: 'account-transaction-servicing-bill-payments-home-action-cancel-service-click',
            link: {
              page: 'scheduledBillPayments'
            }
          },
          bpd_show_detail_payments_channel: {
            bind: 'account-transaction-servicing-bill-payments-home-billPayments-click',
            link: {
              page: 'billPaymentsDashboard',
              skipHistory: true
            }
          },
          bpd_pay_service_with_arcus_channel: {
            bind: 'account-transaction-servicing-bill-payments-home-pay-service-arcus-click',
            link: {
              page: 'billPaymentsDashboard',
              skipHistory: true
            }
          },
          bill_payments_home_analytics_bill_payments_home_page_view_pay_service_or_tax: {
            bind: 'account-transaction-servicing-bill-payments-home-list-service-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_manual_payment: {
            bind: 'account-transaction-servicing-bill-payments-home-service-manuals-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('pago manual')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_service_detail: {
            bind: 'account-transaction-servicing-bill-payments-home-detail-service-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('detalle servicio')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_scheduled_payment: {
            bind: 'account-transaction-servicing-bill-payments-home-scheduled-payment-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('pago programado')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_scheduled_payment_detail: {
            bind: 'account-transaction-servicing-bill-payments-home-detail-scheduled-payment-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('detalle pago programado')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_delete_service: {
            bind: 'account-transaction-servicing-bill-payments-home-service-delete-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('eliminar servicio')
          }
        }
      }
    },
    propertiesSpherica: {
      contentFragmentHost: aemHost,
      contentFragmentPath: carouselContentFragmentPath,
      contentFragmentNative: native,
      host,
      native,
      requiredToken,
      locale: 'mx',
      currencyCode: 'MXN',
      pageName,
      cellsConnections: {
        in: {
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_storage_get_command_center_success: {
            bind: 'successGetFlagCommandCenter'
          },
          global_storage_get_command_center_error: {
            bind: 'errorGetFlagCommandCenter'
          },
          __bridge_page_billPaymentsHome: {
            bind: 'getFlagLocalStorage'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          },
          global_feature_flag_activated_bill_payments_home_arcus: {
            bind: 'queryArcusFlag'
          },
          global_feature_flag_deactivate_bill_payments_home_arcus: {
            bind: 'queryArcusFlag'
          },
          global_feature_flag_activated_scheduled_bill_payments: {
            bind: 'queryScheduledFlag'
          },
          global_feature_flag_deactivate_scheduled_bill_payments: {
            bind: 'queryScheduledFlag'
          }
        },
        out: {
          bill_payments_home_focus_view: {
            bind: 'help-modal-transitionend'
          },
          global_get_from_storage: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-init-get'
          },
          global_set_in_storage: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-init'
          },
          bill_payments_home_exit_process: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-header-close-button-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          navigation_to_billpayments_dashboard: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-new-service-button-click-navigation-external',
            link: {
              page: 'billPaymentsDashboard',
              skipHistory: true
            }
          },
          navigation_to_billpayments_scheduled: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-programming-payments-service-click-navigation-external',
            analytics: analitycsScheduledBillPayments.appOnclickStartScheduledBillPayments(
              'pagar servicio o impuesto',
              '',
              '',
              'programar pago',
              'informacion'
            ),
            link: {
              page: 'scheduledBillPayments'
            }
          },
          navigation_to_billpayments_scheduled_from_detail_manual: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-programming-pay-click',
            analytics: analitycsScheduledBillPayments.appOnclickStartScheduledBillPayments(
              'pagar servicio o impuesto',
              'detalle servicio',
              '',
              'programar pago',
              'informacion'
            ),
            link: {
              page: 'scheduledBillPayments'
            }
          },
          navigation_to_billpayments_scheduled_from_detail_edit: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-action-edit-service-click',
            link: {
              page: 'scheduledBillPayments'
            }
          },
          navigation_to_billpayments_scheduled_from_detail_cancel: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-action-cancel-service-click',
            link: {
              page: 'scheduledBillPayments'
            }
          },
          bpd_show_detail_payments_channel: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-bill-payments-click',
            link: {
              page: 'billPaymentsDashboard',
              skipHistory: true
            }
          },
          bpd_pay_service_with_arcus_channel: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-pay-service-arcus-click',
            link: {
              page: 'billPaymentsDashboard',
              skipHistory: true
            }
          },
          bill_payments_home_analytics_bill_payments_home_page_view_pay_service_or_tax: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-list-service-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_manual_payment: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-service-manuals-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('pago manual')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_service_detail: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-detail-service-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('detalle servicio')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_scheduled_payment: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-scheduled-payment-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('pago programado')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_scheduled_payment_detail: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-detail-scheduled-payment-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('detalle pago programado')
          },
          bill_payments_home_analytics_bill_payments_home_page_view_delete_service: {
            bind: 'account-transaction-servicing-bill-payments-home-mx-service-delete-button-click',
            analytics: analyticsBillPaymentsHome.appPageVisitPaymentsHome('eliminar servicio')
          }
        }
      }
    }
  };

  const billPaymentsControllerFeature = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-bill-payments-home',
    familyPath: '@glomo-web-components/bbva-controller-bill-payments-home',
    render: 'litElement',
    properties: {
      operationalsPage: OPERATIONALS.operationalsPage,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'updatedPaymentsFlags'
          }
        },
        out: {
          global_feature_flag_activated_scheduled_bill_payments: {
            bind: 'bbva-controller-bill-payments-home-activate-scheduled-bill-payments'
          },
          global_feature_flag_deactivate_scheduled_bill_payments: {
            bind: 'bbva-controller-bill-payments-home-deactivate-scheduled-bill-payments'
          },
          global_feature_flag_activated_bill_payments_home_arcus: {
            bind: 'bbva-controller-bill-payments-home-activate-bill-payments-home-arcus'
          },
          global_feature_flag_deactivate_bill_payments_home_arcus: {
            bind: 'bbva-controller-bill-payments-home-deactivate-bill-payments-home-arcus'
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/bill-payments-home'
    },
    pages,
    template,
    components: [
      componentsFeature,
      billPaymentsControllerFeature
    ]
  };
  localStorageBillPaymentsHome.addOutStorageChannels(base.components, [ 'command_center' ], config);
  return sphericaPageUtils.spherize(base);
};
