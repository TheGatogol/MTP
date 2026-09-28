/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const PAGE_NAME = 'addVideoSelfie';
  const { SPINNER } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME_CHANNEL = 'add_video_selfie';
  const SPINNER_VERIDAS = SPINNER(CONFIG);
  const SPINNERMAIN = SPINNER(CONFIG);
  const ANALYTICS = require('./analytics/_addVideoSelfie')({});
  const { BIND_LITERALS } = ANALYTICS;
  SPINNER_VERIDAS.properties.messages = [ 'bbva-widget-scanner-verifications-biometrics-spinner-veil-message-title' ];
  SPINNER_VERIDAS.properties.secondaryMessage = [ 'bbva-widget-scanner-verifications-biometrics-spinner-veil-message-subtile' ];
  SPINNER_VERIDAS.properties.cellsConnections.in.show_spinner_charged_data_veil = {
    bind: 'show'
  };
  SPINNER_VERIDAS.properties.cellsConnections.in.hide_spinner_charged_data = {
    bind: 'hide'
  };
  SPINNERMAIN.properties.cellsConnections.in.open_spinner_veil = {
    bind: 'show'
  };
  SPINNERMAIN.properties.cellsConnections.in.close_spinner_veil = {
    bind: 'hide'
  };
  const analyticsErrors = [
    {
      typeName: 'unfinishedOperationModal',
      errorPage: BIND_LITERALS.UNFINISHED_OPERATION_ERROR,
      analytic: 'unfinishedOperationError'
    },
    {
      typeName: 'widgetErrorModalRetry',
      errorPage: BIND_LITERALS.INFORMATION_ERROR,
      analytic: 'informationError'
    },
    {
      typeName: 'identityValidationErrorModal',
      errorPage: BIND_LITERALS.IDENTITY_VALIDATION_ERROR,
      analytic: 'identityValidationError'
    },
    {
      typeName: 'validateCredentialRejectedRetry',
      errorPage: BIND_LITERALS.VALIDATE_CREDENTIAL_ERROR,
      analytic: 'validateCredentialError'
    }
  ];

  const base = {
    hash: 'mx-add-video-selfie',
    currentPage: {
      url: '/add-video-selfie'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: 'dark-blue-bg',
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      SPINNER_VERIDAS,
      SPINNERMAIN,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME]: {
                bind: 'init'
              },
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              [PAGE_NAME_CHANNEL + '_init_page']: {
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
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'glomo-videoselfie-exit',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_header_close_button']: {
                bind: 'goBack'
              }
            },
            out: {
              [PAGE_NAME + 'RESET_MULTISTEP_PROCESS']: {
                bind: 'glomo-videoselfie-exit',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-feature-videoselfie-mx',
        familyPath: '@glomo-web-components/bbva-feature-videoselfie-mx',
        render: 'litElement',
        properties: {
          isNativeIos: isNativeIos,
          veridas: CONFIG.veridasVideoSelfie,
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native || false,
          pageName: PAGE_NAME,
          verificationV1: CONFIG.globalServices.versions.verificationV1,
          customersV1: CONFIG.globalServices.versions.customersV1,
          cellsConnections: {
            in: {
              navigation_to_add_video_selfie_code: {
                bind: 'getAccountId'
              },
              global_device_accesses_customer_id: {
                bind: 'customerId'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + 'confirm_modal_scanner']: {
                bind: 'agreements-not-confirmed'
              },
              show_spinner_charged_data_veil: {
                bind: 'show-spinner-veil'
              },
              hide_spinner_charged_data: {
                bind: 'hide-message-spinner-veil'
              },
              open_spinner_veil: {
                bind: 'open-spinner-veil'
              },
              close_spinner_veil: {
                bind: 'hide-spinner-veil'
              },
              [PAGE_NAME_CHANNEL + '_header_close_button']: {
                bind: 'bbva-feature-videoselfie-close-feature-button'
              },
              [PAGE_NAME_CHANNEL + '_complete_multisteps']: {
                bind: 'complete_step-videoselfie'
              },
              [PAGE_NAME_CHANNEL + '_receipt_success_completed']: {
                bind: 'receipt-success-page'
              },
              [PAGE_NAME_CHANNEL + '_info_ine_modal']: {
                bind: 'list-simple-icon-click'
              },
              [PAGE_NAME_CHANNEL + '_document_capture']: {
                bind: 'document-clicked'
              },
              [PAGE_NAME_CHANNEL + '_customer_terms_otp']: {
                bind: 'videoselfie-multistep-dispatch-customer-terms-api'
              },
              [PAGE_NAME_CHANNEL + '_document_trash']: {
                bind: 'document-bbva-trash-clicked'
              },
              [PAGE_NAME_CHANNEL + '_selfie_trash']: {
                bind: 'selfie-bbva-trash-clicked'
              },
              [PAGE_NAME_CHANNEL + '_video_trash']: {
                bind: 'video-bbva-trash-clicked'
              },
              [PAGE_NAME_CHANNEL + '_open_type_modal']: {
                bind: 'type-modal-open'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-videoselfie',
        familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-and-structure',
        render: 'litElement',
        properties: {
          documentTrash: BIND_LITERALS.INTERACTION_DOCUMENT,
          selfieTrash: BIND_LITERALS.INTERACTION_SELFIE,
          videoTrash: BIND_LITERALS.INTERACTION_VIDEO,
          errors: analyticsErrors,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_init_page']: {
                bind: 'fireAppVisit'
              },
              [PAGE_NAME_CHANNEL + '_document_capture']: {
                bind: 'fireAppStarted'
              },
              [PAGE_NAME_CHANNEL + '_complete_multisteps']: {
                bind: 'fireAppStepPage'
              },
              [PAGE_NAME_CHANNEL + '_receipt_success_completed']: {
                bind: 'fireAppCompleted'
              },
              [PAGE_NAME_CHANNEL + 'confirm_modal_scanner']: {
                bind: 'firePageView'
              },
              [PAGE_NAME_CHANNEL + '_customer_terms_otp']: {
                bind: 'firePageViewOtp'
              },
              [PAGE_NAME_CHANNEL + '_info_ine_modal']: {
                bind: 'firePageView'
              },
              [PAGE_NAME_CHANNEL + '_document_trash']: {
                bind: 'documentTrashLink'
              },
              [PAGE_NAME_CHANNEL + '_selfie_trash']: {
                bind: 'selfieTrashLink'
              },
              [PAGE_NAME_CHANNEL + '_video_trash']: {
                bind: 'videoTrashLink'
              },
              [PAGE_NAME_CHANNEL + '_open_type_modal']: {
                bind: 'errorPage'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_analytics_app_page-visit']: {
                bind: 'analytics-app-page-visit',
                analytics: ANALYTICS.APP_PAGE_VISIT
              },
              [PAGE_NAME_CHANNEL + '_analytics_app_started_document']: {
                bind: 'analytics-app-started',
                analytics: ANALYTICS.APP_STARTED
              },
              [PAGE_NAME_CHANNEL + '_analytics_app_step_2']: {
                bind: 'analytics-step-1',
                analytics: ANALYTICS.get_app_step_with_level3(2, '2 verificar datos')
              },
              [PAGE_NAME_CHANNEL + '_analytics_app_step_3']: {
                bind: 'analytics-step-2',
                analytics: ANALYTICS.get_app_step_with_level3(3, '3 confirmacion')
              },
              [PAGE_NAME_CHANNEL + '_analytics_app_completed']: {
                bind: 'analytics-app-completed',
                analytics: ANALYTICS.APP_COMPLETED
              },
              [PAGE_NAME_CHANNEL + '_analytics_app_page_view_consent']: {
                bind: 'analytics-page-view',
                analytics: ANALYTICS.get_advanced_foot_print_level3('consentimiento')
              },
              [PAGE_NAME_CHANNEL + '_analytics_app_page_view_otp']: {
                bind: 'analytics-page-view-otp',
                analytics: ANALYTICS.get_advanced_foot_print_level3('otp')
              },
              [PAGE_NAME_CHANNEL + '_analytics_app_page_view_data']: {
                bind: 'analytics-page-view-data',
                analytics: ANALYTICS.get_advanced_foot_print_level3('informacion datos ine ife')
              },
              [PAGE_NAME_CHANNEL + '_analytics_internal_link']: {
                bind: 'analytics-internal-link',
                analytics: ANALYTICS.INTERACTION_LINK
              },
              [PAGE_NAME_CHANNEL + '_analytics_error-operation']: {
                bind: 'analytics-error-page-view-unfinishedOperationError',
                analytics: ANALYTICS.error_page_view('unfinishedOperationError')
              },
              [PAGE_NAME_CHANNEL + '_analytics_error_information']: {
                bind: 'analytics-error-page-view-informationError',
                analytics: ANALYTICS.error_page_view('informationError')
              },
              [PAGE_NAME_CHANNEL + '_analytics_error_validation']: {
                bind: 'analytics-error-page-view-identityValidationError',
                analytics: ANALYTICS.error_page_view('identityValidationError')
              },
              [PAGE_NAME_CHANNEL + '_analytics_error_identification']: {
                bind: 'analytics-error-page-view-validateCredentialError',
                analytics: ANALYTICS.error_page_view('validateCredentialError')
              }
            }
          }
        }
      }
    ]
  };
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-videoselfie-mx');
  return base;
};
