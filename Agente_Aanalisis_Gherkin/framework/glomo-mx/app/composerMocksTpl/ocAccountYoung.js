'use strict';
module.exports = config => {
  const pageName = 'ocAccountYoung';
  const {
    useNames,
    pluginDatePicker,
    getCountry,
    getLanguage
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        customersV1,
        places,
        customersAddressesV1,
        productLimits,
        childCustomersV3,
        catalogs
      }
    },
    aemHost,
    native = false,
    nativeShell = false,
    nativeIos = false
  } = config;
  const [ getChannelName ] = useNames(pageName);
  const pages = require('./common/_pages')(config)(pageName);
  const ocAccountYoungAnalytics = require('./analytics/_ocAccountYoung')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      className: `dark-blue-bg ${nativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: 'dark-blue-bg'
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica'
    })
  };

  const lifeCycle = {
    zone: 'app__section',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
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
          },
          [getChannelName('close_operative')]: {
            bind: 'reset'
          },
          [getChannelName('view_branches')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const ocAccountYoung = {
    zone: 'app__main',
    type: 'UI',
    tag: 'account-origination-oc-account-young-mx',
    familyPath: '@glomo-web-components/account-origination-oc-account-young-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      attachToBody: native,
      iOSFixedHeader: nativeIos,
      showHelpFaqs: true,
      aemHost,
      aemHelpFaqsPath: 'content/caas/mexico/glomo/oc-account-young/faqs.model.json',
      productId: '15',
      subproductId: '0201',
      accountLevel: 'N2',
      limitId: 'DEPOSITS_MONTHLY',
      maxLengthIdentificationKey: 18,
      maxAge: { years: 17, months: 11 },
      countryName: 'account-origination-oc-account-young-mx-address-label-country-name',
      phoneCompanyId: '01',
      homonomyId: 'AH',
      toastDuration: '2000',
      paramsCreateAccount: {
        openingKey: '0801',
        jointSignatureTypeId: 'INDISTINCT',
        productId: '15',
        subproductId: '0201',
        fiscalAccountSchemeId: '0010',
        currency: 'MXP',
        accountLevel: '02'
      },
      accounstApiVersion: childCustomersV3,
      civilRegistriesSearchApiVersion: customersV1,
      customerAddressesApiVersion: customersAddressesV1,
      customerChildCustomerApiVersion: childCustomersV3,
      customerContactDetailsApiVersion: customersV1,
      customerIdentificationProcessDocumentsApiVersion: customersV1,
      geographicPlacesApiVersion: places,
      productsApiVersion: productLimits,
      contractingConsents: {
        bdy1: 'BDYOUNGS01',
        bdy2: 'BDYOUNGS02',
        bdy3: 'BDYOUNGS03',
        bdy4: 'BDYOUNGS04'
      },
      documentType: '023',
      multipartDocumentName: 'documentInfo',
      multipartFile: 'file',
      multipartMediaType: 'application/json',
      multipartType: 'multipart/form-data',
      verificationTypeId: 'IDV',
      verificationTypeStatusId: 'OK',
      nationality: 'MEX',
      componentTypes: {
        interiorNumber: 'INTERIOR_NUMBER',
        exteriorNumber: 'EXTERIOR_NUMBER',
        street: 'STREET',
        colony: 'COLONY',
        municipality: 'MUINICIPALITY',
        state: 'STATE',
        country: 'COUNTRY',
        zipCode: 'ZIP_CODE'
      },
      metadataDocumentType: {
        key: 'DOCUMENT_TYPE_ID',
        value: '023'
      },
      metadataProduct: {
        key: 'PRODUCT',
        value: 'LC'
      },
      metadataOperationType: {
        key: 'OPERATION_TYPE',
        value: 'docCteTemporal'
      },
      metadataTemporal: {
        key: 'TEMPORAL',
        value: '1'
      },
      metadataFlow: {
        key: 'FLOW',
        value: 'djvn'
      },
      branchName: {
        key: 'branchName',
        value: '3607'
      },
      metadataDocument: {
        key: 'document',
        value: 'O'
      },
      metadata: {
        personalName: 'personalName',
        lastName: 'lastName',
        mothersLastName: 'mothersLastName',
        procedureName: 'procedureName',
        expeditionDate: 'expeditionDate',
        expirationDate: 'expirationDate',
        aditionalName: 'aditionalName',
        aditionalLastName: 'aditionalLastName',
        aditionalMothersLastName: 'aditionalMothersLastName',
        aditionalCustomerId: 'aditionalCustomerId'
      },
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'init'
          },
          [getChannelName('reset_page')]: {
            bind: 'resetOperative'
          },
          [getChannelName('set_customer_id')]: {
            bind: 'customerId'
          },
          [getChannelName('set_user_id')]: {
            bind: 'cellsPhoneNumber'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          sign_modal_cancelled: {
            bind: 'showMultiStep'
          },
          [getChannelName('set_digital_file_validation')]: {
            bind: 'incompleteFile'
          },
          [getChannelName('colony_native_selected')]: {
            bind: 'colonySelectedNative'
          },
          [getChannelName('show_modal_error')]: {
            bind: 'openPdfError'
          },
          global_request_permissions_success: {
            bind: 'permissionsSuccess'
          },
          global_request_permissions_error: {
            bind: 'permissionsError'
          },
          global_media_capture_success: {
            bind: 'mediaCaptureSuccess'
          },
          global_media_capture_error: {
            bind: 'mediaCaptureError'
          },
          global_filefetcher_success: {
            bind: 'filefetcherSuccess'
          },
          global_filefetcher_error: {
            bind: 'fileFetcherError'
          },
          global_login_success_indicators: {
            bind: 'setCustomerInfo'
          },
          [getChannelName('clear_loader')]: {
            bind: 'clearLoader'
          },
          [getChannelName('save_contract_templates')]: {
            bind: 'contractTemplates'
          },
          [getChannelName('check_permissions_success')]: {
            bind: 'validatePermissionsFile'
          },
          [getChannelName('device_info_platform_success')]: {
            bind: 'getMobilePlatformInfo'
          },
          [getChannelName('on_catalogs_success')]: {
            bind: 'birthplaces'
          },
          [getChannelName('set_date_selected')]: {
            bind: 'selectedDate'
          },
          [getChannelName('set_birthplace_native_selected')]: {
            bind: 'birthplaceSelected'
          },
          [getChannelName('set_place_native_selected')]: {
            bind: 'colonySelected'
          },
          [getChannelName('set_document_name')]: {
            bind: 'contentData'
          },
          [getChannelName('set_external_link')]: {
            bind: 'externalLink'
          }
        },
        out: {
          [getChannelName('close_operative')]: {
            bind: 'account-origination-oc-account-young-mx-operative-close',
            backStep: true
          },
          [getChannelName('initialized_feature')]: {
            bind: 'account-origination-oc-account-young-mx-initialize'
          },
          [getChannelName('view_branches')]: {
            bind: 'account-origination-oc-account-young-mx-branches-view',
            link: {
              page: 'atmLocator',
              cleanUntil: 'ocAccountYoung',
              skipHistory: true
            }
          },
          [getChannelName('select_birthplace_native')]: {
            bind: 'account-origination-oc-account-young-mx-selector-native-open'
          },
          [getChannelName('select_colony_native')]: {
            bind: 'account-origination-oc-account-young-mx-colony-native-select'
          },
          [getChannelName('build_params_to_date_plugin')]: {
            bind: 'account-origination-oc-account-young-mx-datepicker-native-open'
          },
          global_action_launcher_uri: {
            bind: 'account-origination-oc-account-young-mx-action-launcher-link-external'
          },
          modal_logout_automatic: {
            bind: 'account-origination-oc-account-young-mx-action-launcher-link-external'
          },
          global_request_permissions: {
            bind: 'account-origination-oc-account-young-mx-camera-permissions-request'
          },
          global_media_capture: {
            bind: 'account-origination-oc-account-young-mx-media-capture-open',
            analytics: ocAccountYoungAnalytics.advancedFootprint('contratar cuenta', 'previsualizar foto')
          },
          global_filefetcher: {
            bind: 'account-origination-oc-account-young-mx-file-fetcher-open'
          },
          global_open_document: {
            bind: 'account-origination-oc-account-young-mx-document-open'
          },
          [getChannelName('share_receipt_template')]: {
            bind: 'account-origination-oc-account-young-mx-receipt-template-share'
          },
          [getChannelName('share_receipt')]: {
            bind: 'account-origination-oc-account-young-mx-receipt-share'
          },
          [getChannelName('terms_conditions_offer_link')]: {
            bind: 'account-origination-oc-account-young-mx-benefits-open'
          },
          [getChannelName('limit_deposit_offer_link')]: {
            bind: 'account-origination-oc-account-young-mx-deposit-limit-open'
          },
          [getChannelName('gat_offer_link')]: {
            bind: 'account-origination-oc-account-young-mx-cost-open'
          },
          [getChannelName('notice_privacy_offer_link')]: {
            bind: 'account-origination-oc-account-young-mx-notice-privacy-open'
          },
          [getChannelName('continue_offer_click')]: {
            bind: 'account-origination-oc-account-young-mx-offer-continue'
          },
          [getChannelName('offer_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-offer-open'
          },
          [getChannelName('set_current_step')]: {
            bind: `account-origination-oc-account-young-mx-${sphericaPageUtils.isSpherica() ? 'current-step-active' : 'step-current'}`
          },
          [getChannelName('success_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-success-open'
          },
          [getChannelName('otp_token_modal')]: {
            bind: 'account-origination-oc-account-young-mx-otp-even-send'
          },
          [getChannelName('do_request_get_business_documents_cud')]: {
            bind: 'account-origination-oc-account-young-mx-cud-document-get'
          },
          [getChannelName('do_request_get_business_documents_link_card')]: {
            bind: 'account-origination-oc-account-young-mx-link-card-document-get'
          },
          [getChannelName('incomplete_file_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-incomplete-file-modal-open',
            analytics: ocAccountYoungAnalytics.advancedFootprint('actualizar documentos')
          },
          [getChannelName('account_limit_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-account-limit-modal-open',
            analytics: ocAccountYoungAnalytics.advancedFootprint('limite de cuentas alcanzado')
          },
          [getChannelName('deposit_limit_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-deposit-limit-open',
            analytics: ocAccountYoungAnalytics.advancedFootprint('contratar cuenta', 'limite de depositos')
          },
          [getChannelName('customer_creation_error_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-customer-creation-error-modal-open',
            analytics: ocAccountYoungAnalytics.advancedFootprintError('error la cuenta no se puede contratar')
          },
          [getChannelName('renapo_validation_error_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-renapo-validation-error-modal-open',
            analytics: ocAccountYoungAnalytics.advancedFootprintError('error no se pudo validar la informacion')
          },
          [getChannelName('photo_error_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-photo-error-modal-open',
            analytics: ocAccountYoungAnalytics.advancedFootprintError('error foto del acta')
          },
          [getChannelName('pdf_file_error_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-pdf-file-error-modal-open',
            analytics: ocAccountYoungAnalytics.advancedFootprintError('error carga de documento')
          },
          [getChannelName('registry_match_error_modal_open')]: {
            bind: 'account-origination-oc-account-young-mx-registry-match-error-modal-open',
            analytics: ocAccountYoungAnalytics.advancedFootprint('contratar cuenta', 'datos adicionales', 'curp no coincide')
          },
          [getChannelName('registry_match_error_exit_action')]: {
            bind: 'account-origination-oc-account-young-mx-registry-match-error-exit',
            analytics: ocAccountYoungAnalytics.internalLink('datos adicionales', 'curp no coincide', 'salir')
          },
          [getChannelName('registry_match_error_view_branches_action')]: {
            bind: 'account-origination-oc-account-young-mx-registry-match-error-branches-view',
            analytics: ocAccountYoungAnalytics.internalLink('datos adicionales', 'curp no coincide', 'ver sucursales')
          },
          [getChannelName('check_permissions_file')]: {
            bind: 'account-origination-oc-account-young-mx-permissions-file-check'
          },
          [getChannelName('get_mobile_platform')]: {
            bind: 'account-origination-oc-account-young-mx-mobile-platform-get'
          },
          [getChannelName('places_response_send')]: {
            bind: 'account-origination-oc-account-young-mx-places-send'
          }
        }
      }
    }
  };

  const analyticManagerOcAccountYoung = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-analyticmanager-oc-account-young',
    familyPath: '@glomo-web-components/bbva-analyticmanager-account-origination',
    render: 'litElement',
    properties: {
      config: ocAccountYoungAnalytics.analyticsConfig,
      dependsOnAppStartedLaunched: true,
      appStartedText: '',
      cellsConnections: {
        in: {
          ocAccountYoung_init_page: {
            bind: 'resetData'
          },
          [getChannelName('offer_modal_open')]: {
            bind: 'appStep'
          },
          [getChannelName('set_current_step')]: {
            bind: 'appStep'
          },
          [getChannelName('otp_token_modal')]: {
            bind: 'appStep'
          },
          [getChannelName('terms_conditions_offer_link')]: {
            bind: 'fireItemAppStarted'
          },
          [getChannelName('limit_deposit_offer_link')]: {
            bind: 'fireItemAppStarted'
          },
          [getChannelName('gat_offer_link')]: {
            bind: 'fireItemAppStarted'
          },
          [getChannelName('notice_privacy_offer_link')]: {
            bind: 'fireItemAppStarted'
          },
          [getChannelName('continue_offer_click')]: {
            bind: 'fireItemAppStarted'
          },
          [getChannelName('success_modal_open')]: {
            bind: 'appCompleted'
          }
        },
        out: {
          [getChannelName('fire_analytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: ocAccountYoungAnalytics.appStarted
          },
          [getChannelName('fire_analytics_app_page_visit')]: {
            bind: 'analytics-app-page-visit',
            analytics: ocAccountYoungAnalytics.appPageVisit
          },
          [getChannelName('fire_analytics_app_step_minor_info')]: {
            bind: 'analytics-app-step-minor-info',
            analytics: ocAccountYoungAnalytics.appStep('2', 'datos del menor')
          },
          [getChannelName('fire_analytics_app_step_birth_certificate')]: {
            bind: 'analytics-app-step-birth-certificate',
            analytics: ocAccountYoungAnalytics.appStep('3', 'acta de nacimiento')
          },
          [getChannelName('fire_analytics_app_step_address')]: {
            bind: 'analytics-app-step-address',
            analytics: ocAccountYoungAnalytics.appStep('4', 'domicilio')
          },
          [getChannelName('fire_analytics_app_step_digital_services')]: {
            bind: 'analytics-app-step-digital-services',
            analytics: ocAccountYoungAnalytics.appStep('5', 'servicios digitales')
          },
          [getChannelName('fire_analytics_app_step_terms_conditions')]: {
            bind: 'analytics-app-step-terms-conditions',
            analytics: ocAccountYoungAnalytics.appStep('6', 'terminos y condiciones')
          },
          [getChannelName('fire_analytics_app_step_confirmation')]: {
            bind: 'analytics-app-step-confirmation',
            analytics: ocAccountYoungAnalytics.appStep('7', 'confirmacion')
          },
          [getChannelName('fire_analytics_app_step_otp_opening-child-account')]: {
            bind: 'analytics-app-step-otp-opening-child-account',
            analytics: ocAccountYoungAnalytics.appStep('8', 'otp')
          },
          [getChannelName('fire_analytics_app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: ocAccountYoungAnalytics.appCompleted
          },
          [getChannelName('fire_analytics_additional_info_app_page_view')]: {
            bind: 'analytics-additional-info-app-page-view',
            analytics: ocAccountYoungAnalytics.advancedFootprint('contratar cuenta', 'datos adicionales')
          },
          [getChannelName('fire_analytics_customer_addresses_app_page_view')]: {
            bind: 'analytics-customer-addresses-app-page-view',
            analytics: ocAccountYoungAnalytics.advancedFootprint('contratar cuenta', '4 domicilio', 'otp', 'firma:token')
          }
        }
      }
    }
  };

  const controllerOcAccountYoungMx = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-controller-oc-account-young-mx',
    familyPath: '@glomo-web-components/bbva-controller-oc-account-young-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      customersApiVersion: customersV1,
      catalogsApiVersion: catalogs,
      catalogId: '06320074E',
      productIdCud: 'CUD',
      subProductIdCud: 'CUD',
      productIdLinkCard: 'CLDN4',
      subProductIdLinkCard: 'MULTI',
      maxAge: { years: 17, months: 11 },
      skipValidateDigitalFile: true,
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'getContractId'
          },
          [getChannelName('initialized_feature')]: {
            bind: 'doRequestPostValidateDigitalFile'
          },
          [getChannelName('init_page')]: {
            bind: 'doRequestGetCatalogsRecords'
          },
          [getChannelName('do_request_get_business_documents_cud')]: {
            bind: 'postBusinessDocumentCud'
          },
          [getChannelName('do_request_get_business_documents_link_card')]: {
            bind: 'postBusinessDocumentLinkCard'
          },
          [getChannelName('response_business_documents_get_success')]: {
            bind: 'successGetBusinessDocuments'
          },
          [getChannelName('response_business_documents_post_success')]: {
            bind: 'successPostBusinessDocuments'
          },
          [getChannelName('response_business_documents_get_error')]: {
            bind: 'errorBusinessDocuments'
          },
          [getChannelName('response_business_documents_post_error')]: {
            bind: 'errorBusinessDocuments'
          },
          global_login_success_indicators: {
            bind: 'getCustomerInfo'
          },
          native_user_id: {
            bind: 'getNativeUserId'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          },
          [getChannelName('continue_offer_click')]: {
            bind: 'getContractTemplates'
          },
          [getChannelName('build_params_to_date_plugin')]: {
            bind: 'callDatePickerNativePlugin'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'setDateSelect'
          },
          [getChannelName('select_birthplace_native')]: {
            bind: 'callShowInfoNativePlugin'
          },
          [getChannelName('birthplace_native_selected')]: {
            bind: 'setBirthplaceSelected'
          },
          [getChannelName('places_response_send')]: {
            bind: 'places'
          },
          [getChannelName('select_colony_native')]: {
            bind: 'callShowInfoNativePlugin'
          },
          [getChannelName('colony_native_selected')]: {
            bind: 'setPlaceSelected'
          },
          global_set_app_settings: {
            bind: 'setAppSettingsParams'
          }
        },
        out: {
          [getChannelName('set_digital_file_validation')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-digital-file'
          },
          [getChannelName('set_customer_id')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-customer-id'
          },
          [getChannelName('set_user_id')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-user-id'
          },
          [getChannelName('get_business_documents')]: {
            bind: 'bbva-controller-oc-account-young-mx-get-business-documents'
          },
          [getChannelName('set_business_documents_properties')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-business-documents-properties'
          },
          [getChannelName('post_business_document')]: {
            bind: 'bbva-controller-oc-account-young-mx-post-business-document'
          },
          [getChannelName('show_modal_error')]: {
            bind: 'bbva-controller-oc-account-young-mx-show-modal-error'
          },
          global_open_document: {
            bind: 'bbva-controller-oc-account-young-mx-show-document'
          },
          [getChannelName('clear_loader')]: {
            bind: 'bbva-controller-oc-account-young-mx-show-document'
          },
          [getChannelName('save_contract_templates')]: {
            bind: 'bbva-controller-oc-account-young-mx-save-contract-templates'
          },
          [getChannelName('on_catalogs_success')]: {
            bind: 'bbva-controller-oc-account-young-mx-states-list-send'
          },
          global_nativeconnector_datepicker_launch: {
            bind: 'bbva-controller-oc-account-young-mx-call-date-picker-plugin'
          },
          [getChannelName('set_date_selected')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-date-select'
          },
          [getChannelName('set_birthplace_native_selected')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-birthplace-native-select'
          },
          [getChannelName('call_show_info_plugin')]: {
            bind: 'bbva-controller-oc-account-young-mx-call-show-info-plugin'
          },
          [getChannelName('set_place_native_selected')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-place-native-select'
          },
          [getChannelName('set_document_name')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-document-name'
          },
          [getChannelName('set_external_link')]: {
            bind: 'bbva-controller-oc-account-young-mx-set-external-link'
          }
        }
      }
    }
  };

  const dmBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          [getChannelName('get_business_documents')]: {
            bind: 'getBusinessDocuments'
          },
          [getChannelName('set_business_documents_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('post_business_document')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [getChannelName('response_business_documents_get_success')]: {
            bind: 'success-on-get-business-documents'
          },
          [getChannelName('response_business_documents_post_success')]: {
            bind: 'post-business-documents-success'
          },
          [getChannelName('response_business_documents_get_error')]: {
            bind: 'error-on-get-business-documents'
          },
          [getChannelName('response_business_documents_post_error')]: {
            bind: 'error-on-post-business-documents'
          }
        }
      }
    }
  };

  const showInfoPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-show-info',
    familyPath: '@glomo-web-components/bbva-nativeconnector-show-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('call_show_info_plugin')]: {
            bind: 'nativeListModal'
          }
        },
        out: {
          [getChannelName('birthplace_native_selected')]: {
            bind: 'show-info-native-list-modal-success'
          },
          [getChannelName('colony_native_selected')]: {
            bind: 'show-info-native-list-modal-success'
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
          [getChannelName('check_permissions_file')]: {
            bind: 'checkState'
          },
          global_request_permissions: {
            bind: 'request'
          }
        },
        out: {
          [getChannelName('check_permissions_success')]: {
            bind: 'permissions-check-state-success'
          },
          global_request_permissions_success: {
            bind: 'permissions-request-success'
          },
          global_request_permissions_error: {
            bind: 'permissions-request-error'
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
          [getChannelName('get_mobile_platform')]: {
            bind: 'getPlatform'
          }
        },
        out: {
          [getChannelName('device_info_platform_success')]: {
            bind: 'get-platform-success'
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
          },
          global_media_capture_error: {
            bind: 'get-picture-error'
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
          },
          global_filefetcher_error: {
            bind: 'error'
          }
        }
      }
    }
  };

  const openDocumentPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-open-document',
    familyPath: '@glomo-web-components/bbva-nativeconnector-open-document',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_open_document: {
            bind: 'openByBase64'
          }
        },
        out: {
          global_open_document_success: {
            bind: 'open-document-open-by-base64-success'
          }
        }
      }
    }
  };

  const receiptManager = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      infoImage: './images/darkInfo.svg',
      sharedReceiptStyles: {
        info: {
          'display': 'flex',
          'align-items': 'start'
        },
        infoIcon: {
          'position': 'absolute',
          'margin': '0.25rem 0.5rem 0 0',
          'width': '1rem',
          'height': '1rem'
        },
        infoMessage: {
          'display': 'block',
          'text-indent': '1.5rem',
          'font-weight': '350',
          'margin': '0',
          'font-size': 'var(--cells-text-size-15, 15px)',
          'text-align': 'left'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('share_receipt')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('share_receipt_template')]: {
            bind: 'result'
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
          }
        }
      }
    }
  };

  const base = {
    hash: `${pageName}`,
    currentPage: {
      url: '/oc-account-young',
      params: [
        'global_user', 'global_user_id'
      ]
    },
    pages,
    template,
    components: [
      lifeCycle,
      ocAccountYoung,
      analyticManagerOcAccountYoung,
      controllerOcAccountYoungMx,
      showInfoPlugin,
      mobileDeviceinfo,
      mobilePermissionsPlugin,
      mediacapturePlugin,
      filefetcherPlugin,
      openDocumentPlugin,
      receiptManager,
      dmBusinessDocuments
    ]
  };

  if (nativeShell) {
    base.components.push(pluginDatePicker(config));
  }

  const signConnector = require('./common/_widget-sign-connector')(config)(base);
  signConnector('account-origination-oc-account-young-mx');
  return sphericaPageUtils.spherize(base);
};
