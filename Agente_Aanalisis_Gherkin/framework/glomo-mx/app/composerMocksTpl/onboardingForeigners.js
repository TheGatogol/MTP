'use strict';
module.exports = CONFIG => {
  const {
    glomoOpenDocument
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('onboardingForeigners');
  const { getLanguage } = require('./common/helpers/_utils');
  const language = getLanguage(CONFIG);
  const { addOutStorageChannels } = require('./common/_local-storage');
  const {
    globalServices: { host, requiredToken = 'tsec', consumerIdAnonymous, versions: { grantingTicket, productLimits, geographicPlacesV1, catalogs }},
    native = false,
    nativeIos = false
  } = CONFIG;
  const {
    appPageVisit,
    appCompletedSuccess,
    getAppStepOffer,
    getAppStepProspect,
    getFootprintError,
    getappStarted,
    getAdvancedFootprint,
    getAdvancedFootprintLevel3 } = require('./analytics/_onboardingForeigners')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'onboardingForeigners');

  const featureOnboardingForeigners = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-feature-lite-onboarding-foreigners-mx',
    familyPath: '@glomo-web-components/bbva-feature-lite-onboarding-foreigners-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-lite-onboarding-foreigners-mx',
    render: 'litElement',
    properties: {
      pageName: 'onboardingForeigners',
      iOSFixedHeader: nativeIos,
      native,
      host,
      language,
      country: 'mx',
      limitId: 'DEPOSITS_MONTHLY',
      requiredToken,
      consumerId: consumerIdAnonymous,
      userId: consumerIdAnonymous,
      catalogId: '03580074E',
      productId: '15',
      subProductId: '0500',
      accountLevel: 'N2',
      imageOfferPage: 'account',
      grantingTicketsApiVersion: grantingTicket,
      productLimitsApiVersion: productLimits,
      geographicPlacesCountriesApiVersion: geographicPlacesV1,
      catalogsApiVersion: catalogs,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'onBackStepButton'
          },
          __bridge_page_onboardingForeigners: {
            bind: 'init'
          },
          onboarding_foreigners_response_native_connector_xpressid_success: {
            bind: 'responseNativeConnectorSuccess'
          },
          onboarding_foreigners_response_native_connector_xpressid_error: {
            bind: 'responseNativeConnectorError'
          },
          global_open_document_url_success: {
            bind: 'responseOpenDocumentSuccess'
          },
          global_open_document_url_error: {
            bind: 'responseOpenDocumentError'
          },
          onboarding_foreigners_set_date_select: {
            bind: 'setDateSelected'
          },
          onboarding_foreigners_device_info_send_dm: {
            bind: 'device'
          }
        },
        out: {
          onboarding_foreigners_recalculate_status_bar_top: {
            bind: 'onboarding-foreigners-recalculate-status-bar-top'
          },
          onboarding_foreigners_secure_sharing_get_data: {
            bind: 'onboarding-foreigners-secure-sharing-get-data'
          },
          global_device_info_get_platform: {
            bind: 'global-device-info-get-platform'
          },
          onboarding_foreigners_stop_native_connector_xpressid: {
            bind: 'bbva-feature-lite-onboarding-foreigners-dm-stop-capturing'
          },
          global_open_document_url: {
            bind: 'bbva-feature-lite-onboarding-foreigners-dm-open-document'
          },
          onboarding_foreigners_request_native_connector_xpressid: {
            bind: 'bbva-feature-lite-onboarding-foreigners-dm-request-native-connector'
          },
          onboarding_foreigners_launch_date_picker: {
            bind: 'personal-data-step-open-date-picker'
          },
          digital_account_go_to_native_login: {
            bind: 'continue-first-access',
            'forward-to-native': true,
            nativeLink: {
              page: 'nativeLogin'
            }
          },
          close_native_web_view_to_welcome: {
            bind: 'go-to-web-welcome',
            'forward-to-native': true
          },
          open_onboarding_foreigners_modal_offer_page: {
            bind: 'bbva-onboarding-cta-digital-n2-extranjeros-offer-page'
          },
          open_onboarding_foreigners_offer_page_know_more: {
            bind: 'bbva-onboarding-cta-digital-n2-extranjeros-offer-more-information-offer-page'
          },
          open_onboarding_foreigners_offer_page_open_account: {
            bind: 'bbva-onboarding-cta-digital-n2-extranjeros-offer-visible-multi'
          },
          open_onboarding_foreigners_personal_data: {
            bind: 'personal-data-step-view'
          },
          open_onboarding_foreigners_current_addres: {
            bind: 'current-address-step-view'
          },
          open_onboarding_foreigners_identity_verification: {
            bind: 'identity-verification-step-view'
          },
          open_onboarding_foreigners_contact_data: {
            bind: 'contact-data-step-view'
          },
          open_onboarding_foreigners_terms_and_conditions: {
            bind: 'terms-and-conditions-step-view'
          },
          open_onboarding_foreigners_password: {
            bind: 'password-step-view',
            analytics: getAppStepProspect('7', '7 contrasena')
          },
          open_onboarding_foreigners_confirmation: {
            bind: 'complete-step-view',
            analytics: getAppStepProspect('8', '8 confirmacion')
          },
          open_onboarding_foreigners_success: {
            bind: 'receipt-modal-view',
            analytics: appCompletedSuccess()
          },
          open_onboarding_foreigners_upload_document: {
            bind: 'identity-verification-step-modal-scanning-verify-identify'
          },
          open_onboarding_foreigners_signature: {
            bind: 'terms-and-conditions-step-open-modal-sign-multistep-terms-and-conditions'
          },
          open_onboarding_foreigners_curp: {
            bind: 'personal-data-step-know-more-multistep-personal-data'
          },
          open_onboarding_foreigners_privacy_notice: {
            bind: 'contact-data-step-privacy-message-multistep-contact-data'
          },
          open_onboarding_foreigners_credit_bureau: {
            bind: 'terms-and-conditions-step-credit-bureau-multistep-terms-and-conditions'
          },
          open_onboarding_foreigners_promotions: {
            bind: 'terms-and-conditions-step-offers-and-promotions-multistep-terms-and-conditions'
          },
          open_onboarding_foreigners_data_scan: {
            bind: 'capture-incomplete-modal-view'
          },
          open_onboarding_foreigners_service_not_available: {
            bind: 'service-not-available-retry-modal-view'
          },
          open_onboarding_foreigners_attempts_allowed: {
            bind: 'limit-of-attempts-modal-view'
          },
          open_onboarding_foreigners_hiring_error: {
            bind: 'information-not-match-modal-view'
          },
          open_onboarding_foreigners_opertarion_not_made: {
            bind: 'operation-not-made-retry-modal-view'
          }
        }
      }
    }
  };
  const analyticmangerOnboardingForeigners = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-onboarding-foreigners',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-onboarding',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          open_onboarding_foreigners_modal_offer_page: {
            bind: 'fireAppVisit'
          },
          open_onboarding_foreigners_modal_offer_page_know_more: {
            bind: 'fireAppStartedKnowMore'
          },
          open_onboarding_foreigners_offer_page_know_more: {
            bind: 'firePageViewKnowMoreOffer'
          },
          open_onboarding_foreigners_offer_page_open_account: {
            bind: 'fireAppStartedOpenAccount'
          },
          open_onboarding_foreigners_personal_data: {
            bind: 'fireAppStepPersonalData'
          },
          open_onboarding_foreigners_current_addres: {
            bind: 'fireAppStepCurrentAddress'
          },
          open_onboarding_foreigners_identity_verification: {
            bind: 'fireAppStepIdentityVerification'
          },
          open_onboarding_foreigners_contact_data: {
            bind: 'fireAppStepContactData'
          },
          open_onboarding_foreigners_terms_and_conditions: {
            bind: 'fireAppStepTermsAndConditions'
          },
          open_onboarding_foreigners_password: {
            bind: 'fireAppStepPassword'
          },
          open_onboarding_foreigners_confirmation: {
            bind: 'fireAppStepConfirmation'
          },
          open_onboarding_foreigners_success: {
            bind: 'fireAppComplete'
          },
          open_onboarding_foreigners_upload_document: {
            bind: 'firePageViewUploadDocument'
          },
          open_onboarding_foreigners_signature: {
            bind: 'firePageViewSignature'
          },
          open_onboarding_foreigners_curp: {
            bind: 'firePageViewKnowMoreCurp'
          },
          open_onboarding_foreigners_privacy_notice: {
            bind: 'firePageViewPrivacyNotice'
          },
          open_onboarding_foreigners_credit_bureau: {
            bind: 'firePageViewCreditBureau'
          },
          open_onboarding_foreigners_promotions: {
            bind: 'firePageViewOffersAndPromotions'
          },
          open_onboarding_foreigners_data_scan: {
            bind: 'fireErrorPageDataScan'
          },
          open_onboarding_foreigners_service_not_available: {
            bind: 'fireErrorPageServiceNotAvailable'
          },
          open_onboarding_foreigners_attempts_allowed: {
            bind: 'fireErrorPageAttemptsAllowed'
          },
          open_onboarding_foreigners_hiring_error: {
            bind: 'fireErrorPageHiringError'
          },
          open_onboarding_foreigners_opertarion_not_made: {
            bind: 'fireErrorPageOperationNotPerformed'
          }
        },
        out: {
          bbva_onboarding_foreigners_mx_fire_benefits: {
            bind: 'analytics-app-page-visit-onboarding-foreigners',
            analytics: appPageVisit()
          },
          bbva_onboarding_foreigners_mx_fire_app_started_know_more: {
            bind: 'analytics-app-started-know-more-onboarding-foreigners',
            analytics: getappStarted('saber mas')
          },
          bbva_onboarding_foreigners_mx_fire_app_started_open_account: {
            bind: 'analytics-app-started-open-account-onboarding-foreigners',
            analytics: getappStarted('abrir cuenta')
          },
          bbva_onboarding_foreigners_mx_fire_page_view_know_more: {
            bind: 'analytics-page-view-know-more-onboarding-foreigners',
            analytics: getAdvancedFootprintLevel3('beneficios', 'saber mas')
          },
          bbva_onboarding_foreigners_mx_fire_app_step_personal_data: {
            bind: 'analytics-app-step-personal-data-onboarding-foreigners',
            analytics: getAppStepOffer('2', '2 datos personales')
          },
          bbva_onboarding_foreigners_mx_fire_app_step_current_address: {
            bind: 'analytics-app-step-current-address-onboarding-foreigners',
            analytics: getAppStepOffer('3', '3 domicilio')
          },
          bbva_onboarding_foreigners_mx_fire_app_step_contact_data: {
            bind: 'analytics-app-step-contact-data-onboarding-foreigners',
            analytics: getAppStepOffer('4', '4 datos de contacto')
          },
          bbva_onboarding_foreigners_mx_fire_app_step_identity_verification: {
            bind: 'analytics-app-step-identity-verification-onboarding-foreigners',
            analytics: getAppStepOffer('5', '5 verificacion de identidad')
          },
          bbva_onboarding_foreigners_mx_fire_app_step_terms_and_conditions: {
            bind: 'analytics-app-step-terms-and-conditions-onboarding-foreigners',
            analytics: getAppStepOffer('6', '6 terminos y condiciones')
          },
          bbva_onboarding_foreigners_mx_fire_page_view_upload_document: {
            bind: 'analytics-page-view-upload-documents-onboarding-foreigners',
            analytics: getAdvancedFootprintLevel3('verificar identidad', 'recomendaciones subir documentos')
          },
          bbva_onboarding_foreigners_mx_fire_page_view_signature: {
            bind: 'analytics-page-view-signature-onboarding-foreigners',
            analytics: getAdvancedFootprint('firma')
          },
          bbva_onboarding_foreigners_mx_fire_page_view_know_more_curp: {
            bind: 'analytics-page-view-know-more-curp-onboarding-foreigners',
            analytics: getAdvancedFootprintLevel3('datos personales', 'saber mas curp')
          },
          bbva_onboarding_foreigners_mx_fire_page_view_privacy_notice: {
            bind: 'analytics-page-view-privacy-notice-onboarding-foreigners',
            analytics: getAdvancedFootprintLevel3('datos de contacto', 'aviso de privacidad')
          },
          bbva_onboarding_foreigners_mx_fire_page_view_credit_bureau: {
            bind: 'analytics-page-view-credit-bureau-onboarding-foreigners',
            analytics: getAdvancedFootprintLevel3('terminos y condiciones', 'autorizacion consulta buro crediticio')
          },
          bbva_onboarding_foreigners_mx_fire_page_view_offers_and_promotions: {
            bind: 'analytics-page-view-offers-and-promotions-onboarding-foreigners',
            analytics: getAdvancedFootprintLevel3('terminos y condiciones', 'informacion ofertas y promociones')
          },
          bbva_onboarding_foreigners_mx_fire_error_page_data_scan: {
            bind: 'analytics-error-page-data-scan-onboarding-foreigners',
            analytics: getFootprintError('error escaneo de datos')
          },
          bbva_onboarding_foreigners_mx_fire_error_page_service_not_available: {
            bind: 'analytics-error-page-service-not-available-onboarding-foreigners',
            analytics: getFootprintError('error servicio no disponible')
          },
          bbva_onboarding_foreigners_mx_fire_error_page_attemps_allowed: {
            bind: 'analytics-error-page-attemps-allowed-onboarding-foreigners',
            analytics: getFootprintError('error supero numero de intentos permitidos')
          },
          bbva_onboarding_foreigners_mx_fire_error_page_hiring_error: {
            bind: 'analytics-error-page-hiring-error-onboarding-foreigners',
            analytics: getFootprintError('error de contratacion')
          },
          bbva_onboarding_foreigners_mx_fire_error_page_operation_not_performed: {
            bind: 'analytics-error-page-operation-not-performed-onboarding-foreigners',
            analytics: getFootprintError('error operacion no realizada')
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
          onboarding_foreigners_request_native_connector_xpressid: {
            bind: 'startcapturing'
          },
          onboarding_foreigners_stop_native_connector_xpressid: {
            bind: 'stopcapturing'
          }
        },
        out: {
          onboarding_foreigners_response_native_connector_xpressid_success: {
            bind: 'launch-express-id-start-capturing-success'
          },
          onboarding_foreigners_response_native_connector_xpressid_error: {
            bind: 'launch-express-id-start-capturing-error'
          }
        }
      }
    }
  };
  const nativeconnectorDatepicker = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          onboarding_foreigners_launch_date_picker: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          onboarding_foreigners_set_date_select: {
            bind: 'launch-date-picker-success'
          }
        }
      }
    }
  };
  const deviceAccesses = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-device-accesses-controller',
    tag: 'glomo-device-accesses-mx-controller',
    properties: {
      typeDevice: nativeIos,
      cellsConnections: {
        in: {
          onboarding_foreigners_secure_sharing_get_data: {
            bind: 'secureSharingData'
          },
          global_device_get_device_platform_success: {
            bind: 'platformInfo'
          },
          global_device_get_device_model_success: {
            bind: 'modelInfo'
          },
          global_device_get_manufacturer_success: {
            bind: 'manufacturer'
          },
          global_storage_get_deviceId_success: {
            bind: 'deviceId'
          }
        },
        out: {
          global_device_info_get_model: {
            bind: 'device-info-started'
          },
          global_device_info_get_manufacturer: {
            bind: 'device-info-started'
          },
          onboarding_foreigners_device_info_send_dm: {
            bind: 'device-accesses-send-device-info'
          },
          global_get_from_storage: {
            bind: 'get-from-local-storage'
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/onboarding-foreigners'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        headerFixed: true,
        className: `bbva-core-blue ${nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: 'header--core',
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            onboarding_foreigners_recalculate_status_bar_top: {
              bind: 'recalculateStatusBarTop'
            }
          }
        }
      },
      propertiesSpherica: {
        disableEdgeSwipe: true,
        headerFixed: true,
        className: `bbva-core-blue ${nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: `header--core ${ nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      featureOnboardingForeigners,
      analyticmangerOnboardingForeigners,
      deviceAccesses
    ]
  };
  if (native) {
    base.components.push(nativeconnectorXpressId);
    base.components.push(glomoOpenDocument(CONFIG));
    if (!nativeIos) {
      base.components.push(nativeconnectorDatepicker);
    }
  }
  addOutStorageChannels(base.components, [ 'deviceId' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
