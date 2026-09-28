'use strict';

module.exports = (CONFIG) => {
  const pages = require('./common/_pages')(CONFIG)('operationJustification');
  const {
    globalServices: { host, requiredToken = 'tsec',
      versions: { file, documentProcessesV1, localDocuments, highRiskCustomers, highRiskCustomersTasks, updateHighRiskCustomersTask, smartDossiers }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const analytics = require('./analytics/_operationJustification')();

  const operationJustification = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-operation-justification-mx',
    familyPath: '@glomo-web-components/bbva-feature-operation-justification-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      headers: { 'Content-Type': 'multipart/form-data' },
      locale: 'mx',
      fileApiVersion: file,
      documentProcessesApiVersion: documentProcessesV1,
      localDocumentsApiVersion: localDocuments,
      highRiskCustomersApiVersion: highRiskCustomers,
      highRiskCustomersTasksApiVersion: highRiskCustomersTasks,
      updateHighRiskCustomersTaskApiVersion: updateHighRiskCustomersTask,
      smartDossiersApiVersion: smartDossiers,
      isNativeIos: nativeIos,
      cellsConnections: {
        in: {
          __bridge_page_operationJustification: {
            bind: 'init'
          },
          global_feature_flag_collection_updated: {
            bind: 'handleFeatureFlagsCollection'
          },
          global_data_inapp: {
            bind: 'globalDataInApp'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          global_user_id: {
            bind: 'customerId'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'notificationCenterData'
          },
          global_request_permissions_success: {
            bind: 'permissionsSuccess'
          },
          global_media_capture_success: {
            bind: 'mediaCaptureSuccess'
          },
          operation_justification_device_info_platform_success: {
            bind: 'mobilPlatformInfo'
          },
          global_filefetcher_success: {
            bind: 'filefetcherSuccess'
          },
          operation_justification_check_permissions_success: {
            bind: 'validatePermissionsFile'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleBackNavigation'
          }
        },
        out: {
          operation_justification_close_modal_notification_center: {
            bind: 'operation-justification-close-modal-notification-center'
          },
          operation_justification_navigate_to_dashboard: {
            bind: 'operation-justification-header-close-icon-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          global_manage_feedback_logout: {
            bind: 'operation-justification-header-close-icon-click-log-out'
          },
          operation_justification_close: {
            bind: 'operation-justification-exit',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          global_request_permissions: {
            bind: 'operation-justification-camera-permissions-request'
          },
          global_media_capture: {
            bind: 'operation-justification-media-capture-open'
          },
          operation_justification_get_mobile_platform: {
            bind: 'operation-justification-mobile-platform-get'
          },
          global_filefetcher: {
            bind: 'operation-justification-file-fetcher-open'
          },
          operation_justification_check_permissions_file: {
            bind: 'operation-justification-permissions-file-check'
          },
          global_action_launcher_dialer: {
            bind: 'operation-justification-open-dialer-plugin'
          },
          operation_justification_reset_scroll: {
            bind: 'operation-justification-reset-scroll'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          operation_justification_step_view: {
            bind: 'operation-justification-step-view'
          },
          operation_justification_start_operation_justification_flow: {
            bind: 'operation-justification-app-on-click-start'
          },
          operation_justification_upload_document_step: {
            bind: 'operation-justification-upload-document-app-page-visit'
          },
          operation_justification_upload_document_without_documents: {
            bind: 'operation-justification-app-started'
          },
          operation_justification_terms_and_conditions: {
            bind: 'operation-justification-terms-and-conditions-app-step'
          },
          operation_justification_full_steps_completed: {
            bind: 'operation-justification-full-steps-app-step'
          },
          operation_justification_successful_operation_justification_flow: {
            bind: 'operation-justification-successful-flow'
          }
        }
      }
    }
  };

  const mobilePermissionsPlugin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-permissions-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-permissions-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_request_permissions: {
            bind: 'request'
          },
          operation_justification_check_permissions_file: {
            bind: 'checkState'
          }
        },
        out: {
          global_request_permissions_success: {
            bind: 'permissions-request-success'
          },
          operation_justification_check_permissions_success: {
            bind: 'permissions-check-state-success'
          }
        }
      }
    }
  };

  const mobileDeviceinfo = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-device-info',
    familyPath: '@glomo-web-components/bbva-nativeconnector-device-info',
    render: 'litElement',
    properties: {
      pluginName: 'DeviceInfo',
      cellsConnections: {
        in: {
          operation_justification_get_mobile_platform: {
            bind: 'getPlatform'
          }
        },
        out: {
          operation_justification_device_info_platform_success: {
            bind: 'get-platform-success'
          }
        }
      }
    }
  };

  const filefetcherPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-file-fetcher-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-file-fetcher-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_filefetcher: {
            bind: 'fileFetch'
          }
        },
        out: {
          global_filefetcher_success: {
            bind: 'file-fetch-success'
          }
        }
      }
    }
  };

  const mediacapturePlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-media-capture',
    familyPath: '@glomo-web-components/bbva-nativeconnector-media-capture',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_media_capture: {
            bind: 'getPicture'
          }
        },
        out: {
          global_media_capture_success: {
            bind: 'get-picture-success'
          }
        }
      }
    }
  };

  const analyticsOperationJustificationMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-operation-justification-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          operation_justification_start_operation_justification_flow: {
            bind: 'appOnClickStart'
          },
          operation_justification_upload_document_step: {
            bind: 'appPageVisit'
          },
          operation_justification_upload_document_without_documents: {
            bind: 'appPageStarted'
          },
          operation_justification_terms_and_conditions: {
            bind: 'appStep'
          },
          operation_justification_full_steps_completed: {
            bind: 'appStep'
          },
          operation_justification_successful_operation_justification_flow: {
            bind: 'appCompleted'
          },
          operation_justification_step_view: {
            bind: 'pageView'
          }
        },
        out: {
          operation_justification_app_on_click_start: {
            bind: 'analytics-app-on-click-start',
            analytics: analytics.appOnClickStart
          },
          operation_justification_app_page_visit: {
            bind: 'analytics-page-visit',
            analytics: analytics.appPageVisit
          },
          operation_justification_analytics_app_page_started: {
            bind: 'analytics-app-started',
            analytics: analytics.appStarted
          },
          operation_justification_analytics_app_step_2: {
            bind: 'analytics-app-step-terms-and-conditions',
            analytics: analytics.appStep('2')
          },
          operation_justification_analytics_app_step_3: {
            bind: 'analytics-app-step-confirmation',
            analytics: analytics.appStep('3')
          },
          operation_justification_analytics_app_completed: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          },
          operation_justification_analytics_page_view_justification: {
            bind: 'analytics-page-view-justification-step',
            analytics: analytics.appPageViewTwoLevels('justificacion')
          },
          operation_justification_analytics_page_view_upload: {
            bind: 'analytics-page-view-upload-file',
            analytics: analytics.appPageViewThreeLevels('sugerencias', 'prepara archivo')
          },
          operation_justification_analytics_page_view_photo: {
            bind: 'analytics-page-view-take-photo',
            analytics: analytics.appPageViewThreeLevels('sugerencias', 'tomar foto')
          },
          operation_justification_analytics_page_view_information: {
            bind: 'analytics-page-view-information-received',
            analytics: analytics.appPageViewTwoLevels('informacion recibida previamente')
          },
          operation_justification_analytics_page_error_service: {
            bind: 'analytics-page-view-error-documents-service',
            analytics: analytics.appPageViewTwoLevels('error servicio no disponible')
          },
          operation_justification_analytics_page_error_document_size: {
            bind: 'analytics-page-view-document-size',
            analytics: analytics.appPageViewTwoLevels('error archivo excede tamano')
          },
          operation_justification_analytics_page_error_document_format: {
            bind: 'analytics-page-view-document-format',
            analytics: analytics.appPageViewTwoLevels('error formato de archivo no valido')
          },
          operation_justification_analytics_page_error_document_name: {
            bind: 'analytics-page-view-document-name',
            analytics: analytics.appPageViewTwoLevels('error nombre de archivo no valido')
          },
          operation_justification_analytics_page_error_document_requirements: {
            bind: 'analytics-page-view-document-requirements',
            analytics: analytics.appPageViewTwoLevels('error archivo no cumple requisitos')
          },
          operation_justification_analytics_page_no_documents: {
            bind: 'analytics-page-view-no-documents-modal',
            analytics: analytics.appPageViewTwoLevels('no tienes estos documentos')
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/operation-justification'
    },
    pages,
    hash: 'operation-justification',
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        iOSFixedHeader: nativeIos,
        inertialScrolling: nativeIos,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {
            operation_justification_reset_scroll: {
              bind: 'resetLayerScroll'
            }
          }
        }
      }
    },
    components: [
      operationJustification,
      mobileDeviceinfo,
      mobilePermissionsPlugin,
      filefetcherPlugin,
      mediacapturePlugin,
      analyticsOperationJustificationMx
    ]
  };

  return base;
};
