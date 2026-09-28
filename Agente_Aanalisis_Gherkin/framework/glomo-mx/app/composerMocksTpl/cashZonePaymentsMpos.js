'use strict';

module.exports = (CONFIG, OPERATIVE = 'cashZonePaymentsMpos') => {
  const {
    createPrefixFromPageName,
    getLanguage,
    getLocalCurrency,
    pluginDatePicker,
    APP_SIDEBAR: appSidebar,
    SPINNER: spinner
  } = require('./common/helpers/_utils');
  const {addOutStorageChannels} = require('./common/_local-storage.js');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const pageName = OPERATIVE;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const { nativeIos = false, native = false, nativeShell = false, aemHost, mpos, globalServices: { host, requiredToken = 'tsec' }, paymentsMpos: { hostOpenPay, redirectUrl, reusableThirdPartyServiceId, thirdPartyProviderId, thirdPartyServiceId } } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(OPERATIVE);
  const { analyticsConfig, appPageVisit, getAppSteps, appStarted, appCompleted, appOnClickStart, getAppPageView, clickTopHire, clickMposPurchase } = require('./analytics/_cashZonePaymentsMpos');
  const base = {
    hash: 'mx-cash-zone',
    currentPage: {
      url: '/cash-zone-payments-mpos'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      familyPath: 'cells-template-coronita',
      familyPathSpherica: 'cells-template-coronita-spherica',
      properties: {
        avoidToggleMenu: !!nativeShell,
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: !!nativeShell,
        headerFixed: true,
        rightDrawer: true,
        className: nativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            [pageName + 'init_page']: {
              bind: 'recalculateHeader'
            },
            [pageName + 'open_menu']: {
              bind: 'toggleMenu'
            },
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: {
        headerHeight: 0,
        relativeMain: true
      }
    },
    components: [
      spinner(),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': true
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + OPERATIVE]: {
                bind: 'init'
              },
              modal_transitionend_scroll_into_view: {
                bind: 'scrollIntoView'
              }
            },
            out: {
              [pageName + 'init_page']: {
                bind: 'init-page'
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
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-feature-cash-zone-top-mx',
        tag: 'payments-mpos-overview',
        render: 'litElement',
        properties: {
          aemHost,
          applicationId: mpos.applicationId,
          componentId: 'mercurio-mpos',
          contentFragmentPathFaqs: 'content/caas/mexico/app/mpos/faqs/cobros.model.json',
          contentFragmentPathNotLogged: `content/caas/mexico/app/mpos/msi${sphericaPageUtils.isSpherica() ? '-spherica' : ''}.model.json`,
          contentFragmentPathOnboarding: `content/caas/mexico/app/mpos/utils${sphericaPageUtils.isSpherica() ? '-spherica' : ''}.model.json`,
          currencyCode: getLocalCurrency(),
          fromDate: '30',
          host,
          hostOpenPay,
          isNativeiOS: nativeIos,
          iOSFixedHeader: nativeIos,
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          native,
          pageSize: 50,
          redirectUrl,
          requiredToken,
          reusableThirdPartyServiceId,
          thirdPartyProviderId,
          thirdPartyServiceId,
          cellsConnections: {
            params: {
              viewMode: 'viewMode'
            },
            in: {
              [pageName + 'init_page']: {
                bind: 'init'
              },
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              user_is_logged: {
                bind: 'isLogged'
              },
              [pageName + 'storage_get_mercurio_mpos_success']: {
                bind: 'retrievedStoredMercurioMposData'
              },
              [pageName + 'storage_get_mercurio_mpos_error']: {
                bind: 'retrievedStoredMercurioMposDataError'
              },
              [pageName + 'storage_get_mercurio_jws_success']: {
                bind: 'retrievedStoredJWS'
              },
              [pageName + 'storage_get_mercurio_jws_error']: {
                bind: 'retrievedStoredJWSError'
              },
              global_login_success: {
                bind: 'loginSuccess'
              },
              [pageName + 'set_commission']: {
                bind: 'commission'
              },
              'cashZonePaymentsMpos_set_isCampaign': {
                bind: 'isCampaign'
              },
              [pageName + 'set_filterTypeStatusLink']: {
                bind: 'filterTypeStatusLink'
              },
              [pageName + 'set_showHelpFaqs']: {
                bind: 'showHelpFaqs'
              },
              [pageName + 'set_userSettingsEnabled']: {
                bind: 'userSettingsEnabled'
              },
              [pageName + 'set_taxTypes']: {
                bind: 'taxTypes'
              },
              [pageName + 'set_thirdPartyProducts']: {
                bind: 'thirdPartyProducts'
              },
              [pageName + 'set_validPeriodTypes']: {
                bind: 'validPeriodTypes'
              },
              [pageName + 'set_viewDigitalSales']: {
                bind: 'viewDigitalSales'
              },
              cashZonePaymentsMpos_set_mposPurchase: {
                bind: 'mposPurchase'
              },
              cashZonePaymentsMpos_set_isTopiOSActive: {
                bind: 'isTopiOSActive'
              },
              cashZonePaymentsMpos_set_isTopiOSDsAvailable: {
                bind: 'isTopiOSDsAvailable'
              },
              global_nativeconnector_openpay_init_success: {
                bind: 'sdkInitResponse'
              },
              global_nativeconnector_openpay_init_error: {
                bind: 'resolveSdkInitError'
              },
              global_nativeconnector_openpay_check_top_capabilities_success: {
                bind: 'checkTopCapabilitiesResponse'
              },
              global_nativeconnector_openpay_check_top_capabilities_error: {
                bind: 'checkTopCapabilitiesError'
              },
              global_nativeconnector_openpay_top_init_success: {
                bind: 'topInitResponse'
              },
              global_nativeconnector_openpay_top_init_error: {
                bind: 'topInitResponseError'
              },
              global_nativeconnector_openpay_show_terms_and_conditions_success: {
                bind: 'resolveShowTermsAndConditions'
              },
              global_nativeconnector_openpay_show_terms_and_conditions_error: {
                bind: 'resolveSdkOperativeError'
              },
              global_nativeconnector_openpay_show_merchant_education_success: {
                bind: 'resolveShowMerchantEducation'
              },
              global_nativeconnector_openpay_show_merchant_education_error: {
                bind: 'resolveSdkOperativeError'
              },
              global_nativeconnector_openpay_create_payment_link_success: {
                bind: 'resolveGeneratePaymentLink'
              },
              global_nativeconnector_openpay_create_payment_link_error: {
                bind: 'resolveSdkOperativeError'
              },
              global_nativeconnector_openpay_send_voucher_success: {
                bind: 'resolveSendVoucher'
              },
              global_nativeconnector_openpay_send_voucher_error: {
                bind: 'resolveSdkOperativeError'
              },
              global_nativeconnector_openpay_update_link_expiration_date_success: {
                bind: 'resolveUpdatePaymentLink'
              },
              global_nativeconnector_openpay_update_link_expiration_date_error: {
                bind: 'resolveSdkOperativeError'
              },
              global_nativeconnector_openpay_cancel_payment_link_success: {
                bind: 'resolveCancelPaymentLink'
              },
              global_nativeconnector_openpay_cancel_payment_link_error: {
                bind: 'resolveSdkOperativeError'
              },
              global_nativeconnector_openpay_get_links_list_success: {
                bind: 'resolveCallSdkPaymentLinks'
              },
              global_nativeconnector_openpay_get_links_list_error: {
                bind: 'resolveSdkAvailableError'
              },
              global_nativeconnector_openpay_get_transactions_list_success: {
                bind: 'resolveCallSdkOperations'
              },
              global_nativeconnector_openpay_get_transactions_list_error: {
                bind: 'resolveSdkListTransactionsError'
              },
              global_nativeconnector_openpay_transaction_by_id_success: {
                bind: 'resolveCallSdkOperationById'
              },
              global_nativeconnector_openpay_transaction_by_id_error: {
                bind: 'resolveSdkOperativeError'
              },
              global_nativeconnector_openpay_scan_devices_success: {
                bind: 'resolveScannedDevices'
              },
              global_nativeconnector_openpay_scan_devices_error: {
                bind: 'resolveScanDevicesError'
              },
              global_nativeconnector_openpay_connect_bluetooth_success: {
                bind: 'resolveConnectedDevice'
              },
              global_nativeconnector_openpay_connect_bluetooth_error: {
                bind: 'resolveConnectedDeviceError'
              },
              global_nativeconnector_openpay_execute_charge_success: {
                bind: 'resolveExecuteCharge'
              },
              global_nativeconnector_openpay_execute_charge_error: {
                bind: 'resolveExecuteChargeError'
              },
              global_nativeconnector_openpay_execute_top_charge_success: {
                bind: 'resolveExecuteTopCharge'
              },
              global_nativeconnector_openpay_execute_top_charge_error: {
                bind: 'resolveExecuteTopChargeError'
              },
              global_nativeconnector_openpay_transaction_refund_success: {
                bind: 'resolveApplyTransactionRefund'
              },
              global_nativeconnector_openpay_transaction_refund_error: {
                bind: 'resolveApplyTransactionRefundError'
              },
              global_nativeconnector_openpay_transaction_top_refund_success: {
                bind: 'resolveApplyTopRefund'
              },
              global_nativeconnector_openpay_transaction_top_refund_error: {
                bind: 'resolveApplyTopRefundError'
              },
              global_nativeconnector_openpay_link_refund_success: {
                bind: 'resolveApplyLinkRefund'
              },
              global_nativeconnector_openpay_link_refund_error: {
                bind: 'resolveApplyLinkRefundError'
              },
              [pageName + 'response_native_datepicker_success']: {
                bind: 'setDatePickerData'
              },
              [pageName + 'response_native_datepicker_error']: {
                bind: 'setDatePickerError'
              },
              [pageName + 'managed_native_navigation']: {
                bind: 'navigateBack'
              },
              oc_cash_zone_navigate_to_mpos_upgrade_top: {
                bind: 'resetState'
              },
              oc_cash_zone_navigate_to_mpos_upgrade_top_show_terms: {
                bind: 'handleUpgradeTopShowTermsNavigation'
              }
            },
            out: {
              [pageName + 'get_data_generate_image']: {
                bind: 'payments-mpos-overview-receipt-share'
              },
              [pageName + 'send_url_link']: {
                bind: 'payments-mpos-overview-payment-link-send'
              },
              cash_zone_payments_mpos_manage_back_navigation: {
                bind: 'payments-mpos-overview-leave'
              },
              [pageName + 'local_storage_get']: {
                bind: 'payments-mpos-overview-local-storage-get'
              },
              [pageName + 'local_storage_set']: {
                bind: 'payments-mpos-overview-local-storage-set'
              },
              global_retry_error: {
                bind: 'payments-mpos-overview-retry-error'
              },
              global_custom_error: {
                bind: 'payments-mpos-overview-custom-sdk-common-error-display'
              },
              [pageName + 'open_call_action']: {
                bind: 'payments-mpos-overview-call-action-open'
              },
              [pageName + 'go_to_offer_page']: {
                bind: 'payments-mpos-overview-offer-page-navigate',
                link: {
                  page: 'contractProductSection'
                }
              },
              [pageName + 'open_menu']: {
                bind: 'payments-mpos-overview-app-menu-click'
              },
              global_nativeconnector_openpay_init: {
                bind: 'payments-mpos-overview-sdk-init'
              },
              modal_transitionend_scroll_into_view: {
                bind: 'help-modal-transitionend'
              },
              global_nativeconnector_openpay_check_top_capabilities: {
                bind: 'payments-mpos-overview-check-top-capabilities'
              },
              global_nativeconnector_openpay_top_init: {
                bind: 'payments-mpos-overview-top-init'
              },
              global_nativeconnector_openpay_show_terms_and_conditions: {
                bind: 'payments-mpos-overview-top-terms-and-conditions-show'
              },
              global_nativeconnector_openpay_show_merchant_education: {
                bind: 'payments-mpos-overview-merchant-education-show'
              },
              global_nativeconnector_openpay_create_payment_link: {
                bind: 'payments-mpos-overview-payment-link-create'
              },
              global_nativeconnector_openpay_send_voucher: {
                bind: 'payments-mpos-overview-voucher-share'
              },
              global_nativeconnector_openpay_update_link_expiration_date: {
                bind: 'payments-mpos-overview-link-date-edit'
              },
              global_nativeconnector_openpay_cancel_payment_link: {
                bind: 'payments-mpos-overview-link-cancel'
              },
              global_nativeconnector_openpay_get_links_list: {
                bind: 'payments-mpos-overview-links-list-get'
              },
              global_nativeconnector_openpay_get_transactions_list: {
                bind: 'payments-mpos-overview-transactions-list-get'
              },
              global_nativeconnector_openpay_scan_devices: {
                bind: 'payments-mpos-overview-new-devices-scan'
              },
              global_nativeconnector_openpay_connect_bluetooth: {
                bind: 'payments-mpos-overview-device-connect'
              },
              global_nativeconnector_openpay_transaction_by_id: {
                bind: 'payments-mpos-overview-transaction-by-id-get'
              },
              global_nativeconnector_openpay_execute_charge: {
                bind: 'payments-mpos-overview-charge-execute'
              },
              global_nativeconnector_openpay_execute_top_charge: {
                bind: 'payments-mpos-overview-top-charge-execute'
              },
              global_nativeconnector_openpay_transaction_refund: {
                bind: 'payments-mpos-overview-transaction-refund-apply'
              },
              global_nativeconnector_openpay_transaction_top_refund: {
                bind: 'payments-mpos-overview-top-refund-apply'
              },
              global_nativeconnector_openpay_link_refund: {
                bind: 'payments-mpos-overview-link-refund-apply'
              },
              [pageName + '_go_to_page_after_login_dashboard']: {
                bind: 'payments-mpos-overview-native-login-navigate-dashboard',
                nativeLink: {
                  page: 'nativeLogin',
                  params: {
                    pageAfterLogin: 'pageAfterLogin'
                  },
                  cleanUntil: 'cashZonePaymentsMposDash'
                }
              },
              [pageName + '_go_to_page_after_login_calculator']: {
                bind: 'payments-mpos-overview-native-login-navigate-calculator',
                nativeLink: {
                  page: 'nativeLogin',
                  params: {
                    pageAfterLogin: 'pageAfterLogin'
                  },
                  cleanUntil: 'cashZonePaymentsMposCalc'
                }
              },
              'cashZonePaymentsMpos_go_to_page_oc_cash_zone_upgrade_top': {
                bind: 'payments-mpos-overview-dashboard-top-hire',
                link: {
                  page: 'ocCashZone',
                  params: {
                    upgradeTop: 'upgradeTop'
                  }
                }
              },
              'cashZonePaymentsMpos_go_to_page_oc_cash_zone': {
                bind: 'payments-mpos-overview-digital-sales-navigate',
                link: {
                  page: 'ocCashZone',
                  cleanUntil: pageName
                }
              },
              cashZonePaymentsMpos_go_to_page_mpos_purchase: {
                bind: 'payments-mpos-overview-dashboard-mpos-purchase',
                link: {
                  page: 'mposPurchase',
                  params: {
                    merchantId: 'merchantId'
                  }
                }
              },
              [pageName + 'link_started']: {
                bind: 'payments-mpos-overview-calculator-action-click'
              },
              [pageName + 'view_steps']: {
                bind: 'payments-mpos-overview-action-step-load'
              },
              [pageName + 'view_completed']: {
                bind: 'payments-mpos-overview-action-state-load'
              },
              [pageName + 'link_click_start']: {
                bind: 'payments-mpos-overview-action-start'
              },
              [pageName + 'page_view']: {
                bind: 'payments-mpos-overview-action-footprint'
              },
              cashZonePaymentsMpos_internal_link_mpos_purchase: {
                bind: 'payments-mpos-overview-dashboard-mpos-purchase-action-click',
                analytics: clickMposPurchase
              },
              cashZonePaymentsMpos_internal_link_top_hire: {
                bind: 'payments-mpos-overview-dashboard-top-hire-action-click',
                analytics: clickTopHire
              },
              [pageName + 'open_date_picker']: {
                bind: 'payments-mpos-overview-native-datepicker-open'
              },
              global_nativesettings_open_setting: {
                bind: 'payments-mpos-overview-phone-settings-open'
              },
              global_open_native_menu: {
                bind: 'payments-mpos-overview-app-menu-click',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-manager-cash-zone',
        tag: 'bbva-manager-cash-zone',
        render: 'litElement',
        properties: {
          countryCode: getLocalCurrency(),
          nativeIos,
          sdkEnvironment: hostOpenPay,
          cellsConnections: {
            in: {
              user_is_logged: {
                bind: 'isLogged'
              },
              [pageName + 'get_data_generate_image']: {
                bind: 'getDataToGenerateImage'
              },
              [pageName + 'get_image_success']: {
                bind: 'resolveImageAndOpenSocialShare'
              },
              [pageName + 'send_url_link']: {
                bind: 'sendURLSocialShare'
              },
              [pageName + 'open_call_action']: {
                bind: 'openCallAction'
              },
              global_set_app_settings: {
                bind: 'setMposAppSettingsData'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              [pageName + 'open_date_picker']: {
                bind: 'openDatePicker'
              },
              [pageName + 'local_storage_get']: {
                bind: 'manageLocalStorageGet'
              },
              [pageName + 'local_storage_set']: {
                bind: 'manageLocalStorageSet'
              },
              cash_zone_payments_mpos_manage_back_navigation: {
                bind: 'manageBackNavigation'
              },
              global_storage_cash_zone_payments_mpos_get_mercurioMPOS_success: {
                bind: 'manageMercurioMPOSSuccess',
                previousState: false
              },
              global_storage_cash_zone_payments_mpos_get_mercurioMPOS_error: {
                bind: 'manageMercurioMPOSError',
                previousState: false
              },
              global_storage_cash_zone_payments_mpos_get_mercurioJWS_success: {
                bind: 'manageMercurioJWSSuccess',
                previousState: false
              },
              global_storage_cash_zone_payments_mpos_get_mercurioJWS_error: {
                bind: 'manageMercurioJWSError',
                previousState: false
              },
              global_nativeconnector_date_picker_launch_success: {
                bind: 'resolveDatePicker'
              },
              global_nativeconnector_date_picker_launch_error: {
                bind: 'rejectDatePicker'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'navigateBackFromNative'
              }
            },
            out: {
              cashZonePaymentsMpos_navigate_back: {
                bind: 'navigate-back',
                backStep: true
              },
              cashZonePaymentsMpos_navigate_to_dashboard: {
                bind: 'navigate-to-dashboard',
                link: {
                  page: 'dashboard'
                }
              },
              [pageName + 'get_image_set_result']: {
                bind: 'get-image-set-result'
              },
              [pageName + 'get_image_set_shared_receipt_style']: {
                bind: 'get-image-set-shared-receipt-styles'
              },
              [pageName + 'get_image_capture_receipt']: {
                bind: 'get-image-capture-receipt'
              },
              [pageName + 'open_native_social_share']: {
                bind: 'open-native-social-share'
              },
              global_action_launcher_dialer: {
                bind: 'open-dialer'
              },
              [pageName + 'set_commission']: {
                bind: 'set-commission'
              },
              'cashZonePaymentsMpos_set_isCampaign': {
                bind: 'set-isCampaign'
              },
              [pageName + 'set_filterTypeStatusLink']: {
                bind: 'set-filterTypeStatusLink'
              },
              [pageName + 'set_showHelpFaqs']: {
                bind: 'set-showHelpFaqs'
              },
              [pageName + 'set_userSettingsEnabled']: {
                bind: 'set-userSettingsEnabled'
              },
              [pageName + 'set_taxTypes']: {
                bind: 'set-taxTypes'
              },
              [pageName + 'set_thirdPartyProducts']: {
                bind: 'set-thirdPartyProducts'
              },
              [pageName + 'set_validPeriodTypes']: {
                bind: 'set-validPeriodTypes'
              },
              [pageName + 'set_viewDigitalSales']: {
                bind: 'set-viewDigitalSales'
              },
              cashZonePaymentsMpos_set_mposPurchase: {
                bind: 'set-mposPurchase'
              },
              cashZonePaymentsMpos_set_isTopiOSActive: {
                bind: 'set-isTopiOSActive'
              },
              cashZonePaymentsMpos_set_isTopiOSDsAvailable: {
                bind: 'set-isTopiOSDsAvailable'
              },
              global_nativeconnector_datepicker_launch: {
                bind: 'open-native-datepicker'
              },
              [pageName + 'response_native_datepicker_success']: {
                bind: 'resolve-datepicker'
              },
              [pageName + 'response_native_datepicker_error']: {
                bind: 'reject-datepicker'
              },
              [pageName + 'managed_native_navigation']: {
                bind: 'navigate-go-back-from-native'
              },
              global_get_from_storage: {
                bind: 'get-from-storage'
              },
              global_set_in_storage: {
                bind: 'set-in-storage'
              },
              [pageName + 'storage_get_mercurio_mpos_success']: {
                bind: 'storage-get-mercurio-mpos-success'
              },
              [pageName + 'storage_get_mercurio_mpos_error']: {
                bind: 'storage-get-mercurio-mpos-error'
              },
              [pageName + 'storage_get_mercurio_jws_success']: {
                bind: 'storage-get-mercurio-jws-success'
              },
              [pageName + 'storage_get_mercurio_jws_error']: {
                bind: 'storage-get-mercurio-jws-error'
              }
            }
          }
        },
        propertiesSpherica: {
          newCellsConnections: {
            add: {
              out: {
                cash_zone_payments_mpos_get_image_set_shared_receipt_styles: {
                  bind: 'get-image-set-shared-receipt-styles'
                }
              }
            }
          }
        }
      }, {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-cash-zone-payments-mpos',
        familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-and-structure',
        render: 'litElement',
        properties: {
          config: {
            ...analyticsConfig
          },
          cellsConnections: {
            in: {
              [pageName + 'view_steps']: {
                bind: 'manageSteps'
              },
              [pageName + 'link_started']: {
                bind: 'manageItemAppStarted'
              },
              [pageName + 'view_completed']: {
                bind: 'manageAppCompleted'
              },
              [pageName + 'link_click_start']: {
                bind: 'manageAppOnClickStart'
              },
              [pageName + 'page_view']: {
                bind: 'managePageView'
              }
            },
            out: {
              analytics_app_calculator: {
                bind: 'analytics-page-visit',
                analytics: appPageVisit
              },
              analytics_app_payment_method: {
                bind: 'analytics-step-payment-method',
                analytics: getAppSteps('2')
              },
              analytics_app_summary: {
                bind: 'analytics-step-summary',
                analytics: getAppSteps('3')
              },
              analytics_app_started: {
                bind: 'analytics-app-started',
                analytics: appStarted
              },
              analytics_app_completed: {
                bind: 'analytics-app-completed',
                analytics: appCompleted
              },
              analytics_app_on_click_start: {
                bind: 'analytics-app-on-click-start',
                analytics: appOnClickStart
              },
              analytics_page_view_charge_footprint: {
                bind: 'analytics-page-view-charge',
                analytics: getAppPageView('pageViewChargeFootprint')
              },
              analytics_page_view_step_footprint: {
                bind: 'analytics-page-view-step',
                analytics: getAppPageView('pageViewStepFootprint')
              },
              analytics_page_view_bluetooth_error: {
                bind: 'analytics-page-view-bluetooth-error',
                analytics: getAppPageView('pageViewBluetoothError')
              },
              analytics_page_view_charge_error: {
                bind: 'analytics-page-view-charge-error',
                analytics: getAppPageView('pageViewChargeError')
              },
              analytics_page_view_init_top_unavailable_error: {
                bind: 'analytics-page-view-init-top-unavailable-error',
                analytics: getAppPageView('pageViewInitTopUnavailableError')
              },
              analytics_page_view_execute_charge_top_limit_error: {
                bind: 'analytics-page-view-execute-charge-top-limit-error',
                analytics: getAppPageView('pageViewExecuteChargeTopLimitError')
              },
              analytics_page_view_available_top_again: {
                bind: 'analytics-page-view-available-top-again',
                analytics: getAppPageView('pageViewAvailableTopAgainFootprint')
              },
              analytics_page_view_no_readed_card_error: {
                bind: 'analytics-page-view-execute-charge-no-readed-card-error',
                analytics: getAppPageView('pageViewNoReadedCardError')
              },
              analytics_page_view_charge_fail: {
                bind: 'analytics-page-view-charge-fail',
                analytics: getAppPageView('pageViewChargeFail')
              },
              analytics_page_view_execute_charge_no_valid_card_error: {
                bind: 'analytics-page-view-execute-charge-no-valid-card-error',
                analytics: getAppPageView('pageViewExecuteChargeNoValidCardError')
              },
              analytics_page_view_execute_charge_insufficient_balance_error: {
                bind: 'analytics-page-view-execute-charge-insufficient-balance-error',
                analytics: getAppPageView('pageViewExecuteChargeInsufficientBalanceError')
              },
              analytics_page_view_refund_unavailable_error: {
                bind: 'analytics-page-view-refund-unavailable-error',
                analytics: getAppPageView('pageViewRefundUnavailableError')
              },
              analytics_page_view_init_top_common_error: {
                bind: 'analytics-page-view-init-top-common-error',
                analytics: getAppPageView('pageViewInitTopCommonError')
              },
              analytics_page_view_activate_tap_to_pay: {
                bind: 'analytics-page-view-activate-tap-to-pay',
                analytics: getAppPageView('pageViewActivateTapToPayFootprint')
              },
              analytics_page_view_dashboard: {
                bind: 'analytics-page-view-dashboard',
                analytics: getAppPageView('pageViewDashboardFootprint')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        tagSpherica: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          country: 'mx',
          cellsConnections: {
            in: {
              [pageName + 'open_native_social_share']: {
                bind: 'reset'
              },
              [pageName + 'get_image_set_result']: {
                bind: 'result'
              },
              [pageName + 'get_image_capture_receipt']: {
                bind: 'captureReceipt'
              },
              cash_zone_payments_mpos_get_image_set_shared_receipt_styles: {
                bind: 'sharedReceiptStyles'
              }
            },
            out: {
              [pageName + 'get_image_success']: {
                bind: 'receipt-captured'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_alert_manager_open_with_settings: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      }
    ]
  };
  if (nativeShell) {
    base.components.push(
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-mobile-socialsharing',
        properties: {
          cellsConnections: {
            in: {
              [pageName + 'open_native_social_share']: {
                bind: 'share'
              }
            }
          }
        }
      },
      pluginDatePicker(CONFIG)
    );
  } else {
    base.components.push(appSidebar(CONFIG));
  }

  addOutStorageChannels(base.components, ['mercurioMPOS', 'mercurioJWS'], CONFIG, createPrefixFromPageName(pageName));
  addRetryErrors(base)([
    {
      id: 'third-party-provider-merchants-search-api-dm-fetch-error',
      acceptRetry: { bind: 'retryMerchants', component: 'payments-mpos-overview' },
      cancelRetry: { bind: 'leaveThePageFromError', component: 'payments-mpos-overview' },
      acceptCallForHelp: { bind: 'leaveThePageFromError', component: 'payments-mpos-overview' }
    },
    {
      id: 'application-component-api-dm-fetch-error',
      acceptRetry: { bind: 'retryUserSettingsGet', component: 'payments-mpos-overview' },
      cancelRetry: { bind: 'leaveThePageFromError', component: 'payments-mpos-overview' },
      acceptCallForHelp: { bind: 'leaveThePageFromError', component: 'payments-mpos-overview' }
    },
    {
      id: 'third-party-provider-single-sign-on-openpay-dashboard-api-dm-fetch-error',
      acceptRetry: { bind: 'retrySSO', component: 'payments-mpos-overview' },
      cancelRetry: { bind: 'leaveThePageFromSSOError', component: 'payments-mpos-overview' },
      acceptCallForHelp: { bind: 'leaveThePageFromSSOError', component: 'payments-mpos-overview' }
    },
    {
      id: 'third-party-provider-single-sign-on-openpay-dashboard-single-use-api-dm-fetch-error',
      acceptRetry: { bind: 'retrySingleUseSSO', component: 'payments-mpos-overview' },
      cancelRetry: { bind: 'cancelSingleUseSSORetry', component: 'payments-mpos-overview' },
      acceptCallForHelp: { bind: 'cancelSingleUseSSORetry', component: 'payments-mpos-overview' }
    },
    {
      id: 'application-component-api-dm-put-error',
      acceptRetry: { bind: 'retryUserSettingsPut', component: 'payments-mpos-overview' },
      cancelRetry: { bind: 'clearSpinner', component: 'payments-mpos-overview' },
      acceptCallForHelp: { bind: 'clearSpinner', component: 'payments-mpos-overview' }
    },
    {
      id: 'payments-mpos-overview-custom-sdk-common-error',
      acceptRetry: { bind: 'handleCommonSdkErrorModalClose', component: 'payments-mpos-overview' }
    }
  ]);
  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
