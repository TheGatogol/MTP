'use strict';
module.exports = (config) => {
  const analytics = require('./analytics/_signingVideoselfieMx')();
  const pages = require('./common/_pages')(config)('signingVideoselfieMx');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        customerTermsV1,
        customersCivilRegistriesV1,
        documentsVerifications,
        documentsVerificationsValidationsV3,
        documentProcessStorage
      }
    },
    native = false,
    nativeIos = false
  } = config;

  const flowIdCollection = {
    upgdNoNomVs: 'DVSXSNNON110625',
    upgdNomNotVs: 'DVSXSNSIN110625',
    portabilityVs: 'DVSXPONGL110625'
  };

  const documentsVerificationsHeaders = {
    'Accept-Language': 'es',
    'Content-Type': 'multipart/form-data'
  };

  const storageRequestIdentityHeaders = {
    'authenticationType': '253',
    'authenticationData': 'verificationid='
  };

  const bodyTerms = {
    identityDocument: [
      {
        termType: {
          id: 'BD-MX-AA-USODPS-002'
        },
        acceptanceMethod: {
          id: 'TA001'
        },
        status: {
          id: 'ACCEPTED'
        },
        acceptanceMessages: [
          {
            value: 'BDUSODPS15'
          }
        ]
      }
    ],
    videoSelfie: [
      {
        termType: {
          id: 'BD-MX-AA-USODPS-002'
        },
        acceptanceMethod: {
          id: 'TA001'
        },
        status: {
          id: 'ACCEPTED'
        },
        acceptanceMessages: [
          {
            value: 'BDUSODPS16'
          }
        ]
      }
    ]
  };

  const settingsPluginBody = {
    setting: 'application_settings'
  };

  const localPrefix = 'signing-videoselfie-mx';

  const bodyStorageIdentity = {
    'variableData': {
      'documentsIdentifiers': ['selfie', 'identityDocument', 'videoselfie'],
      'documentExtension': {
        'selfie': 'JPG',
        'videoselfie': 'MP4',
        'identityDocument': 'PDF'
      },
      'documentKey': {
        'selfie': '597',
        'videoselfie': 'AGX',
        'identityDocument': '001'
      },
      'documentDescription': {
        'selfie': 'SELFIE',
        'videoselfie': 'VIDEOSELFIE/A',
        'identityDocument': 'CREDENCIAL PARA VOTAR'
      },
      'metadataDocumentsKeys': {
        'clientName': 'NOMCLIENTE',
        'documentKey': 'CLVEDOCTO',
        'description': 'DESCRIPCION',
        'expeditionDate': 'FECEXPE',
        'expirationDate': 'FECVENC',
        'documentExtension': 'EXTENSION',
        'image': 'IMAGEN'
      },
      'documentType': {
        'selfie': 'PE-ID-00184',
        'videoselfie': 'PE-ID-00222',
        'identityDocument': 'PE-ID-00001'
      }
    },
    'customer': {
      'id': ''
    },
    'verification': {
      'id': ''
    },
    'origin': {
      'id': ''
    },
    'applicationName': 'EXPEDIENTE_HIBRIDO',
    'drawer': 'EXPUNICO',
    'process': {
      'id': 'SE_UP_00129_MX'
    },
    'metadata': {
      'documentType': '',
      'euDocumentType': '',
      'contract': {
        'id': ''
      },
      'pageNumber': '1',
      'documents': [
        {
          'id': 'PRIMERA',
          'value': 'TRUE'
        },
        {
          'id': 'ULTIMA',
          'value': 'TRUE'
        },
        {
          'id': 'TIPO_DOCTO',
          'value': 'O'
        },
        {
          'id': 'CERTIFICAR',
          'value': 'FALSE'
        },
        {
          'id': 'ORIGDOC',
          'value': 'I'
        },
        {
          'id': 'SININFORMA',
          'value': 'FALSE'
        },
        {
          'id': 'IDPROCESO',
          'value': 'EUFI'
        },
        {
          'id': 'CANAL',
          'value': 'GLMO'
        },
        {
          'id': 'PROCESO',
          'value': 'EUFI'
        },
        {
          'id': 'ESTCONT',
          'value': ''
        },
        {
          'id': 'CAURECH',
          'value': ''
        },
        {
          'id': 'MOTRECH',
          'value': ''
        },
        {
          'id': 'TIPOPERSONA',
          'value': 'PF'
        }
      ]
    }
  };

  const segments = {
    warningNominees: 'nominados alertados',
    proactiveNominees: 'proactivos nominados',
    nonNominatedProactive: 'proactivos no nominados',
    profile: 'perfil'
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      className: 'bg-light-grey',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      extraHeaderClass: `spherica-electric-blue ${nativeIos ? 'ios-top-padding' : ''}`,
      headerFixed: true,
      iOSFixedHeader: nativeIos
    }
  };

  const signingVideoselfieMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'signing-videoselfie-mx',
    familyPath: '@glomo-web-components/signing-videoselfie-mx',
    render: 'litElement',
    properties: {
      storageRequestIdentityHeaders,
      flowIdCollection,
      createValidationsApiVersion: documentsVerificationsValidationsV3,
      documentsVerificationsApiVersion: documentsVerifications,
      documentsVerificationsHeaders,
      storageRequestIdentityDocumentApiVersion: documentProcessStorage,
      civilRegistriesSearchApiVersion: customersCivilRegistriesV1,
      customerTermsApiVersion: customerTermsV1,
      settingsPluginBody,
      bodyStorageIdentity,
      localPrefix,
      bodyTerms,
      maxRetries: 3,
      native,
      host,
      requiredToken,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          __bridge_page_signingVideoselfieMx: {
            bind: 'bridgeReset'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          global_navigation_to_signing_videoselfie_mx: {
            bind: 'dataFromProceedings'
          },
          signing_videoselfie_mx_global_request_permissions_success: {
            bind: 'permissionsPluginData'
          },
          signing_videoselfie_mx_global_request_permissions_error: {
            bind: 'permissionsPluginData'
          },
          signing_videoselfie_mx_response_native_connector_xpressid_success: {
            bind: 'xpressIdPluginData'
          },
          signing_videoselfie_mx_response_native_connector_xpressid_error: {
            bind: 'xpressIdPluginData'
          }
        },
        out: {
          signing_videoselfie_mx_global_request_permissions: {
            bind: 'signing-videoselfie-mx-permissions-request'
          },
          signing_videoselfie_mx_request_native_connector_xpressid: {
            bind: 'signing-videoselfie-mx-xpress-id-fire'
          },
          signing_videoselfie_mx_request_native_connector_settings: {
            bind: 'signing-videoselfie-mx-settings-request'
          },
          signing_videoselfie_mx_initial_consent: {
            bind: 'signing-videoselfie-mx-operative-start'
          },
          signing_videoselfie_mx_consent_modal_click: {
            bind: 'signing-videoselfie-mx-multistep-informative-modal-click'
          },
          global_feature_close_operative: {
            bind: 'signing-videoselfie-mx-operative-leave',
            backStep: true
          },
          signing_videoselfie_mx_analytics_page_view: {
            bind: 'signing-videoselfie-mx-modal-interact'
          },
          signing_videoselfie_mx_active_view_steps: {
            bind: 'signing-videoselfie-mx-multistep-analytics-view-steps-fire'
          },
          signing_videoselfie_mx_module_capture_click: {
            bind: 'signing-videoselfie-mx-multistep-identity-step-button-click'
          },
          navigation_identity_validation_to_proceedings: {
            bind: 'signing-videoselfie-mx-proceedings-navigate',
            link: {
              skipHistory: true,
              page: 'proceedings',
              cleanUntil: 'proceedings'
            }
          }
        }
      }
    }
  };

  const nativeconnectorXpressId = {
    zone: 'app_main',
    type: 'DM',
    tag: 'bbva-nativeconnector-xpressid',
    familyPath: '@glomo-web-components/bbva-nativeconnector-xpressid',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          signing_videoselfie_mx_request_native_connector_xpressid: {
            bind: 'startcapturing'
          },
          signing_videoselfie_mx_stop_native_connector_xpressid: {
            bind: 'stopcapturing'
          }
        },
        out: {
          signing_videoselfie_mx_response_native_connector_xpressid_success: {
            bind: 'launch-express-id-start-capturing-success'
          },
          signing_videoselfie_mx_response_native_connector_xpressid_error: {
            bind: 'launch-express-id-start-capturing-error'
          }
        }
      }
    }
  };

  const nativeConnectorPermissonsPlugin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-permissions-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-permissions-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          signing_videoselfie_mx_global_request_permissions: {
            bind: 'request'
          }
        },
        out: {
          signing_videoselfie_mx_global_request_permissions_success: {
            bind: 'permissions-request-success'
          },
          signing_videoselfie_mx_global_request_permissions_error: {
            bind: 'permissions-request-error'
          }
        }
      }
    }
  };

  const nativeConnectorSettingsPlugin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          signing_videoselfie_mx_request_native_connector_settings: {
            bind: 'openSetting'
          }
        }
      }
    }
  };

  const viewStepAction = {
    capture: 'capture',
    confirm: 'confirm'
  };
  const entryPoints = {
    operative: {
      upgrade: 'operativa_ampliar_cuenta',
      portability: 'operative'
    },
    operatives: {
      upgrade: 'operativa_ampliar_cuenta',
      portability: 'operative'
    },
    inapp: 'inapp',
    deeplink: 'onelink',
    pushNotification: 'pushNotification',
    alert: 'banner_detalle_cuenta'
  };

  const profileGeographic = 'perfil geografico: nacional';

  const signingAnalyticManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-signing-dvs-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-signing',
    render: 'litElement',
    properties: {
      segments,
      viewStepAction,
      entryPoints,
      profileGeographic,
      cellsConnections: {
        in: {
          global_navigation_to_signing_videoselfie_mx: {
            bind: 'customerData'
          },
          signing_videoselfie_mx_initial_consent: {
            bind: 'onAppPageView'
          },
          signing_videoselfie_mx_consent_modal_click: {
            bind: 'onAppStarted'
          },
          signing_videoselfie_mx_analytics_page_view: {
            bind: 'onAppPageView'
          },
          signing_videoselfie_mx_active_view_steps: {
            bind: 'onAppPageView'
          }
        },
        out: {
          signing_videoselfie_analytics_page_view_consent: {
            bind: 'analytics-page-view-consent',
            analytics: analytics.getSigningVideoselfieFootprint('footprint', 'consentimiento')
          },
          signing_videoselfie_analytics_page_view_privacity: {
            bind: 'analytics-page-view-privacity',
            analytics: analytics.getSigningVideoselfieFootprint('footprint', 'consentimiento', 'aviso de privacidad')
          },
          signing_videoselfie_analytics_page_view_deny_camera_permitions: {
            bind: 'analytics-page-view-camera',
            analytics: analytics.getSigningVideoselfieFootprint('footprint', 'cargar documentos', 'permiso acceder a camara')
          },
          signing_videoselfie_analytics_page_view_deny_microphone_permitions: {
            bind: 'analytics-page-view-microphone',
            analytics: analytics.getSigningVideoselfieFootprint('footprint', 'cargar documentos', 'permiso acceder a microfono')
          },
          signing_videoselfie_analytics_page_view_step_consent: {
            bind: 'analytics-page-view-capture',
            analytics: analytics.getSigningVideoselfieFootprint('footprint', 'cargar documentos')
          },
          signing_videoselfie_analytics_app_page_view_confirm_data_step: {
            bind: 'analytics-page-view-confirm',
            analytics: analytics.getSigningVideoselfieFootprint('footprint', 'datos de ine')
          },
          signing_videoselfie_analytics_page_view_operation_error: {
            bind: 'analytics-page-view-operation',
            analytics: analytics.getSigningVideoselfieFootprint('errorOperation', 'error operacion no realizada', '', 'error operacion no realizada')
          },
          signing_videoselfie_analytics_page_view_retry_upload_document: {
            bind: 'analytics-page-view-retry',
            analytics: analytics.getSigningVideoselfieFootprint('footprint', 'cargar documentos', 'vuelve a tomar la foto')
          },
          signing_videoselfie_analytics_page_view_go_to_branch_error: {
            bind: 'analytics-page-view-branch',
            analytics: analytics.getSigningVideoselfieFootprint('errorBranch', 'error terminar proceso en sucursal', '', 'error terminar proceso en sucursal')
          },
          signing_videoselfie_analytics_page_view_curp_error: {
            bind: 'analytics-page-view-curp',
            analytics: analytics.getSigningVideoselfieFootprint('footprint', 'cargar documentos', 'revisa los datos de tu curp')
          }
        }
      }
    }
  };

  const base = {
    hash: 'signing-videoselfie-mx',
    currentPage: {
      url: '/signing-videoselfie-mx'
    },
    pages,
    template,
    components: [
      signingVideoselfieMx,
      nativeConnectorPermissonsPlugin,
      nativeConnectorSettingsPlugin,
      nativeconnectorXpressId,
      signingAnalyticManager
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('signing-videoselfie-mx');
  return base;
};

