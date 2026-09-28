'use strict';

module.exports = CONFIG => {
  const pageName = 'ocLoanRelocation';
  const {
    SPINNER: spinner,
    getLocalCurrency,
    getLanguage,
    getCurrencyCode
  } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageNameChannel = 'oc_loan_relocation';
  const cmbConfig = {
    operativeName: pageName,
    productName: 'Recolocacion Consumo',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    useFeatureFlag: true
  };
  const localStorageApp = require('./common/_local-storage');
  const {controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(cmbConfig);
  controllerCmb.properties.cellsConnections.out.CMB_NAVIGATION_TRIGGERED = {
    bind: 'set-init-configuration'
  };
  const { appPageVisit, appStarted, appCompleted, appCompletedRejected, markInterest, markLifeInsurance, markCommunicationError, getAppSteps} = require('./analytics/_ocLoanRelocation')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const spinnerConfig = spinner();
  spinnerConfig.tagSpherica = 'cells-spinner-veil-spherica';

  const base = {
    hash: 'oc-loan-relocation',
    currentPage: {
      url: '/oc-loan-relocation'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [pageName + '_PAGE_VISITED']: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey'
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: pageName,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_ocLoanRelocation: {
                bind: 'init'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'reset'
              }
            },
            out: {
              [pageNameChannel + '_reset_page']: {
                bind: 'reset'
              },
              [pageNameChannel + '_init_page']: {
                bind: 'init-page'
              },
              global_call_me_back_reset_step: {
                bind: 'reset'
              },
              global_call_me_back_initialize: {
                bind: 'init-page'
              },
              global_retargeting_initialize: {
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
      spinnerConfig,
      controllerCmb,
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-feature-loan-relocation-mx',
        familyPathSpherica: '@glomo-web-components/bbva-feature-loan-relocation-mx-spherica',
        tag: 'bbva-feature-loan-relocation-mx',
        tagSpherica: 'bbva-feature-loan-relocation-mx-spherica',
        render: 'litElement',
        properties: {
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          currencyCode: getCurrencyCode(),
          isNativeIos,
          multiplo: 0,
          host: CONFIG.globalServices.host,
          apiVersion: CONFIG.globalServices.versions.cardsV1,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [pageNameChannel + '_init_page']: {
                bind: 'init'
              },
              global_call_me_back_show_secondary_button_header: {
                bind: 'callMeBackHeaderBtn'
              },
              global_call_me_back_show_summary_view_button: {
                bind: 'callMeBackSecondaryBtnText'
              },
              global_call_me_back_show_summary_button: {
                bind: 'callMeBackSummaryBtnText'
              },
              CMB_NAVIGATION_TRIGGERED: {
                bind: 'setNotifyCallMeBack'
              },
              [pageNameChannel + '_reset_page']: {
                bind: 'confirmExitFlow'
              },
              global_open_document_url_success: {
                bind: 'openDocumentSuccess'
              },
              dashboard_customer_email: {
                bind: 'getEmail'
              }
            },
            out: {
              [pageNameChannel + '_NAVIGATION_DASHBOARD']: {
                bind: 'loan-dashboard',
                backStep: true
              },
              global_open_document_url: {
                bind: 'open-document'
              },
              open_control_veil: {
                bind: 'open-document'
              },
              close_control_veil: {
                bind: 'open-document-success'
              },
              global_call_me_back_init_header_configuration: {
                bind: 'bbva-feature-loan-relocation-click-header-right-icon'
              },
              global_call_me_back_init_summary_configuration: {
                bind: 'bbva-feature-loan-relocation-click-call-me-back'
              },
              global_retargeting_send_information_update: {
                bind: 'loan-dashboard'
              },
              global_retargeting_set_loan_properties_loan_relocation: {
                bind: 'get-loan-detail-v1-success'
              },
              global_retargeting_set_offer_properties_loan_relocation: {
                bind: 'set-offer-detail'
              },
              global_retargeting_go_next_step_loan_recolocation: {
                bind: 'expandable-step-complete-change'
              },
              global_retargeting_get_quotations_simulate: {
                bind: 'get-offer-detail-quotations-simulate'
              },
              global_retargeting_go_next_step: {
                bind: 'link-clicked-detail-progress-success'
              },
              global_retargeting_contracted_product: {
                bind: 'post-loan-relocate-simulate-v1-success'
              },
              [pageNameChannel + 'analytics_app_page_visit']: {
                bind: 'oc-loan-relocation-analytics-app-page-visit',
                analytics: appPageVisit
              },
              [pageNameChannel + 'analytics_app_started']: {
                bind: 'oc-loan-relocation-analytics-app-started',
                analytics: appStarted
              },
              [pageNameChannel + 'analytics_app_step_terms_and_conditions']: {
                bind: 'oc-loan-relocation-analytics-app-step-2-terms-and-conditions',
                analytics: getAppSteps('APPLICATION_STEP_TERMS_AND_CONDITIONS')
              },
              [pageNameChannel + 'analytics_app_step_confirmation']: {
                bind: 'oc-loan-relocation-analytics-app-step-3-confirmation',
                analytics: getAppSteps('APPLICATION_STEP_CONFIRMATION')
              },
              [pageNameChannel + 'analytics_app_step_otp']: {
                bind: 'oc-loan-relocation-analytics-app-step-4-otp',
                analytics: getAppSteps('APPLICATION_STEP_OTP')
              },
              [pageNameChannel + 'analytics_app_completed']: {
                bind: 'oc-loan-relocation-analytics-app-completed',
                analytics: appCompleted
              },
              [pageNameChannel + 'analytics_app_completed-refuse']: {
                bind: 'oc-loan-relocation-analytics-app-completed-rejected',
                analytics: appCompletedRejected
              },
              [pageNameChannel + 'analytics_app_mark_interest']: {
                bind: 'oc-loan-relocation-analytics-app-mark-interest',
                analytics: markInterest
              },
              [pageNameChannel + 'analytics_app_mark_life_insurance']: {
                bind: 'oc-loan-relocation-analytics-app-mark-life-insurance',
                analytics: markLifeInsurance
              },
              [pageNameChannel + 'analytics_app_mark_communication_error']: {
                bind: 'oc-loan-relocation-analytics-app-communication-error',
                analytics: markCommunicationError
              },
              oc_loan_relocation_info_receipt: {
                bind: 'bbva-feature-oc-loan-relocation-info-receipt'
              },
              oc_loan_relocation_share_receipt: {
                bind: 'bbva-feature-oc-loan-relocation-share-receipt'
              }
            },
            params: {
              offerId: 'offerId',
              productId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          country: 'mx',
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          sharedReceiptStyles: {
            infoIcon: {
              'display': 'block',
              'margin-left': 'auto',
              'margin-right': 'auto',
              'width': '1.75rem'
            }
          },
          cellsConnections: {
            in: {
              oc_loan_relocation_share_receipt: {
                bind: 'captureReceipt'
              },
              oc_loan_relocation_info_receipt: {
                bind: 'result'
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
      }
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-loan-relocation-mx');
  localStorageApp.addOutStorageChannels(base.components, [ 'call_me_back' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
