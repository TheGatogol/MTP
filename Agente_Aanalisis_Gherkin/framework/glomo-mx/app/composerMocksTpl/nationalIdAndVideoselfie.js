'use strict';
const pageName = 'nationalIdAndVideoselfie';
const nationalIdAndVideoselfiePage = require('./common/_pages');
module.exports = config => {
  const pages = nationalIdAndVideoselfiePage(config)(pageName);
  const analytics = require('./analytics/_nationalIdAndVideoselfie')();
  const { globalServices: { host, requiredToken = 'tsec',
    versions: { customersV1, documentsVerificationsV1, customerDocuments }
  }, nativeIos = false, native = false } = config;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const extraHeaderClass = isSpherica ? '' : 'dark-blue-bg';
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'horizontal',
      extraHeaderClass: extraHeaderClass,
      className: nativeIos ? 'ios-top-padding' : '',
      disableScrollLock: true,
      headerFixed: true,
      disableEdgeSwipe: true,
      iOSFixedHeader: nativeIos
    },
    propertiesSpherica: {
      className: isSpherica ? '' : 'bg-core-blue'
    }
  };
  const nationalVideoselfieFeature = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-national-id-and-videoselfie-mx',
    tagSpherica: 'bbva-feature-national-id-and-videoselfie-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-national-id-and-videoselfie-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-national-id-and-videoselfie-mx-spherica',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      customersApiVersion: customersV1,
      documentsVerificationsApiVersion: documentsVerificationsV1,
      customerDocumentsApiVersion: customerDocuments,
      native,
      isNativeIos: nativeIos,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          global_navigation_to_national_id_validation: {
            bind: 'updateViewMode'
          },
          global_blue_update_national_id: {
            bind: 'updateViewMode'
          },
          global_navigation_to_register_id: {
            bind: 'updateViewMode'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          navigation_to_modify_identity_capture_from_proceedings: {
            bind: 'cleanIdentityCaptureStep'
          },
          navigation_to_modify_confirm_identity_from_proceedings: {
            bind: 'restoreMultistepFromProceedings'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          }
        },
        out: {
          global_feature_close_operative: {
            bind: 'bbva-feature-national-id-and-videoselfie-mx-leave-operative',
            backStep: true
          },
          national_id_and_videoselfie_accept_national_id_onboarding: {
            bind: 'bbva-feature-national-id-and-videoselfie-mx-onboarding-analytics-page-visit'
          },
          national_id_and_videoselfie_informative_modal_click: {
            bind: 'bbva-feature-national-id-and-videoselfie-mx-informative-modal-click'
          },
          national_id_and_videoselfie_analytics_page_view: {
            bind: 'bbva-feature-national-id-and-videoselfie-mx-analytics-page-view'
          },
          national_id_and_videoselfie_module_capture_click: {
            bind: 'bbva-feature-national-id-and-videoselfie-mx-module-click'
          },
          national_id_and_videoselfie_active_view_steps: {
            bind: 'bbva-feature-national-id-and-videoselfie-mx-analytics-view-steps'
          },
          national_id_and_videoselfie_success_receipt_step: {
            bind: 'bbva-feature-national-id-and-videoselfie-mx-success-load'
          },
          navigation_identity_validation_to_proceedings: {
            bind: 'bbva-feature-national-id-and-videoselfie-mx-proceedings-navigate'
          }
        }
      }
    }
  };
  const nationalVideoselfieAnalyticManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-national-id-and-videoselfie',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_navigation_to_national_id_validation: {
            bind: 'customerData'
          },
          global_navigation_to_register_id: {
            bind: 'customerData'
          },
          national_id_and_videoselfie_accept_national_id_onboarding: {
            bind: 'onAppPageVisit'
          },
          national_id_and_videoselfie_informative_modal_click: {
            bind: 'onAppStarted'
          },
          national_id_and_videoselfie_analytics_page_view: {
            bind: 'onAppPageView'
          },
          widget_signature_handle_required_first_step: {
            bind: 'onAppPageViewOtp'
          },
          national_id_and_videoselfie_active_view_steps: {
            bind: 'onAppPageViewSteps'
          },
          national_id_and_videoselfie_success_receipt_step: {
            bind: 'onAppPageSuccess'
          },
          national_id_and_videoselfie_module_capture_click: {
            bind: 'onInternalLink'
          }
        },
        out: {
          national_id_and_videoselfie_analytics_app_page_visit: {
            bind: 'analytics-page-visit',
            analytics: analytics.getAppPageVisit
          },
          national_id_and_videoselfie_analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: analytics.getAppStarted
          },
          national_id_and_videoselfie_analytics_page_view_national_onboarding: {
            bind: 'analytics-page-view-onboarding-national',
            analytics: analytics.getNationalIdVideoselfieFootprint('ten tu ine a la mano')
          },
          national_id_and_videoselfie_analytics_page_view_video_onboarding: {
            bind: 'analytics-page-view-onboarding-video',
            analytics: analytics.getNationalIdVideoselfieFootprint('ten tu ine a la mano')
          },
          national_id_and_videoselfie_analytics_page_view_consent: {
            bind: 'analytics-page-view-consent',
            analytics: analytics.getNationalIdVideoselfieFootprint('2 consentimiento', 'aviso de privacidad')
          },
          national_id_and_videoselfie_analytics_page_view_document: {
            bind: 'analytics-page-view-document',
            analytics: analytics.getNationalIdVideoselfieFootprint('recomendaciones', 'escanear ine')
          },
          national_id_and_videoselfie_analytics_page_view_selfie: {
            bind: 'analytics-page-view-selfie',
            analytics: analytics.getNationalIdVideoselfieFootprint('recomendaciones', 'selfie')
          },
          national_id_and_videoselfie_analytics_page_view_video: {
            bind: 'analytics-page-view-video',
            analytics: analytics.getNationalIdVideoselfieFootprint('recomendaciones', 'video')
          },
          national_id_and_videoselfie_analytics_page_view_otp: {
            bind: 'analytics-page-view-otp',
            analytics: analytics.getNationalIdVideoselfieFootprint('otp')
          },
          national_id_and_videoselfie_analytics_page_view_step_consent: {
            bind: 'analytics-page-view-capture',
            analytics: analytics.getNationalIdVideoselfieFootprint('identificacion oficial')
          },
          national_id_and_videoselfie_analytics_page_view_confirm_data_step: {
            bind: 'analytics-page-view-confirm',
            analytics: analytics.getOnAppStep(2, 'datos de ine')
          },
          national_id_and_videoselfie_analytics_page_view_confirm_identity_step: {
            bind: 'analytics-page-view-confirm-identity',
            analytics: analytics.getOnAppStep(3, 'confirmacion')
          },
          national_id_and_videoselfie_analytics_page_view_validate_data: {
            bind: 'analytics-page-view-validate',
            analytics: analytics.getOnAppStep(4, 'validando archivos')
          },
          national_id_and_videoselfie_analytics_page_view_document_capture: {
            bind: 'analytics-page-view-document-capture-done',
            analytics: analytics.getNationalIdVideoselfieFootprint('escanear ine', 'procesando datos')
          },
          national_id_and_videoselfie_analytics_page_view_selfie_capture: {
            bind: 'analytics-page-view-selfie-capture-done',
            analytics: analytics.getNationalIdVideoselfieFootprint('captura selfie', 'procesando datos')
          },
          national_id_and_videoselfie_analytics_page_view_video_capture: {
            bind: 'analytics-page-view-video-capture-done',
            analytics: analytics.getNationalIdVideoselfieFootprint('video', 'procesando datos')
          },
          national_id_and_videoselfie_analytics_page_view_locate_your_info: {
            bind: 'analytics-page-view-locate-your-info',
            analytics: analytics.getNationalIdVideoselfieFootprint('ubica los datos de tu ine')
          },
          national_id_and_videoselfie_analytics_page_view_deny_camera_permitions: {
            bind: 'analytics-page-view-camera',
            analytics: analytics.getNationalIdVideoselfieFootprint('permitir acceder a camara')
          },
          national_id_and_videoselfie_analytics_page_app_compleated: {
            bind: 'analytics-app-completed',
            analytics: analytics.getAppCompleted
          },
          national_id_and_videoselfie_analytics_internal_link_document: {
            bind: 'analytics-internal-link-document',
            analytics: analytics.getAppInternalLink('scanId')
          },
          national_id_and_videoselfie_analytics_internal_link_selfie: {
            bind: 'analytics-internal-link-selfie',
            analytics: analytics.getAppInternalLink('takeSelfie')
          },
          national_id_and_videoselfie_analytics_internal_link_video: {
            bind: 'analytics-internal-link-video',
            analytics: analytics.getAppInternalLink('recordVideo')
          },
          national_id_and_videoselfie_analytics_page_view_operation_error: {
            bind: 'analytics-page-view-operation',
            analytics: analytics.getNationalIdVideoselfieFootprint('error operacion no realizada', '', 'error operacion no realizada')
          },
          national_id_and_videoselfie_analytics_page_view_veridas_error: {
            bind: 'analytics-page-view-error-veridas-process',
            analytics: analytics.getNationalIdVideoselfieFootprint('error no pudimos validar tu identidad', '', 'error no pudimos validar tu identidad')
          },
          national_id_and_videoselfie_analytics_page_view_identity_error: {
            bind: 'analytics-page-view-error-identity-verification',
            analytics: analytics.getNationalIdVideoselfieFootprint('error no pudimos validar tu identidad', '', 'error no pudimos validar tu identidad')
          }
        }
      }
    }
  };
  const base = {
    hash: 'national-id-and-videoselfie',
    currentPage: {
      url: '/national-id-and-videoselfie'
    },
    pages,
    template,
    components: [
      nationalVideoselfieFeature,
      nationalVideoselfieAnalyticManager
    ]
  };
  const errorAndSignConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignConnector('bbva-feature-national-id-and-videoselfie-mx', { cancelAfterErrorFunction: 'hideSpinner' });
  return sphericaPageUtils.spherize(base);
};
