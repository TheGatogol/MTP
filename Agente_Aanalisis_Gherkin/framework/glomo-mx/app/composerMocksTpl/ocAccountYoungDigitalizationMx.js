'use strict';
module.exports = config => {
  const pageName = 'ocAccountYoungDigitalizationMx';
  const {
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
  const pages = require('./common/_pages')(config)(pageName);
  const documentUpdateYoungAnalytics = require('./analytics/_digitalization')(config);
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
          account_origination_oc_account_young_mx_close_operative: {
            bind: 'reset'
          },
          account_origination_oc_account_young_mx_view_branches: {
            bind: 'reset'
          }
        },
        out: {
          account_origination_oc_account_young_mx_init_page: {
            bind: 'init-page'
          },
          account_origination_oc_account_young_mx_reset_page: {
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

  const ocAccountYoungMX = {
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
          account_origination_oc_account_young_mx_init_page: {
            bind: 'init'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          account_origination_oc_account_young_mx_reset_page: {
            bind: 'resetOperative'
          },
          account_origination_oc_account_young_mx_set_customer_id: {
            bind: 'customerId'
          },
          account_origination_oc_account_young_mx_set_user_id: {
            bind: 'cellsPhoneNumber'
          },
          sign_modal_cancelled: {
            bind: 'showMultiStep'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlags'
          },
          cells_to_native_modal_closed: {
            bind: 'showMultiStep'
          },
          account_origination_oc_account_young_mx_set_digital_file_validation: {
            bind: 'incompleteFile'
          },
          account_origination_oc_account_young_mx_colony_native_selected: {
            bind: 'colonySelectedNative'
          },
          account_origination_oc_account_young_mx_show_modal_error: {
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
          account_origination_oc_account_young_mx_clear_loader: {
            bind: 'clearLoader'
          },
          account_origination_oc_account_young_mx_save_contract_templates: {
            bind: 'contractTemplates'
          },
          account_origination_oc_account_young_mx_check_permissions_success: {
            bind: 'validatePermissionsFile'
          },
          account_origination_oc_account_young_mx_device_info_platform_success: {
            bind: 'getMobilePlatformInfo'
          },
          account_origination_oc_account_young_mx_on_catalogs_success: {
            bind: 'birthplaces'
          },
          account_origination_oc_account_young_mx_set_date_selected: {
            bind: 'selectedDate'
          },
          account_origination_oc_account_young_mx_set_birthplace_native_selected: {
            bind: 'birthplaceSelected'
          },
          account_origination_oc_account_young_mx_set_place_native_selected: {
            bind: 'colonySelected'
          },
          account_origination_oc_account_young_mx_set_document_name: {
            bind: 'contentData'
          },
          account_origination_oc_account_young_mx_set_external_link: {
            bind: 'externalLink'
          }
        },
        out: {
          account_origination_oc_account_young_mx_close_operative: {
            bind: 'account-origination-oc-account-young-mx-operative-close',
            backStep: true
          },
          account_origination_oc_account_young_mx_initialized_feature: {
            bind: 'account-origination-oc-account-young-mx-initialize'
          },
          account_origination_oc_account_young_mx_view_branches: {
            bind: 'account-origination-oc-account-young-mx-branches-view',
            link: {
              page: 'atmLocator',
              cleanUntil: 'ocAccountYoung',
              skipHistory: true
            }
          },
          open_setttings_mobile: {
            bind: 'account-origination-oc-account-young-mx-settings-open'
          },
          account_origination_oc_account_young_mx_select_birthplace_native: {
            bind: 'account-origination-oc-account-young-mx-selector-native-open'
          },
          account_origination_oc_account_young_mx_select_colony_native: {
            bind: 'account-origination-oc-account-young-mx-colony-native-select'
          },
          account_origination_oc_account_young_mx_build_params_to_date_plugin: {
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
            bind: 'account-origination-oc-account-young-mx-media-capture-open'
          },
          global_filefetcher: {
            bind: 'account-origination-oc-account-young-mx-file-fetcher-open'
          },
          global_open_document: {
            bind: 'account-origination-oc-account-young-mx-document-open'
          },
          account_origination_oc_account_young_mx_check_permissions_file: {
            bind: 'account-origination-oc-account-young-mx-permissions-file-check'
          },
          account_origination_oc_account_young_mx_get_mobile_platform: {
            bind: 'account-origination-oc-account-young-mx-mobile-platform-get'
          },
          account_origination_oc_account_young_mx_places_response_send: {
            bind: 'account-origination-oc-account-young-mx-places-send'
          },
          account_origination_oc_account_young_mx_name_one: {
            bind: 'account-origination-oc-account-young-mx-digitalization-open',
            analytics: documentUpdateYoungAnalytics.appPageVisit('1 acta de nacimiento')
          },
          account_origination_oc_account_young_mx_name_two: {
            bind: 'account-origination-oc-account-young-mx-modal-option-open',
            analytics: documentUpdateYoungAnalytics.appStarted('1 acta de nacimiento')
          },
          account_origination_oc_account_young_mx_name_three: {
            bind: 'account-origination-oc-account-young-mx-modal-option-view',
            analytics: documentUpdateYoungAnalytics.pageViewUploadMinutes
          },
          account_origination_oc_account_young_mx_name_five: {
            bind: 'account-origination-oc-account-young-mx-digitalization-success',
            analytics: documentUpdateYoungAnalytics.appCompleted
          },
          account_origination_oc_account_young_mx_name_seven: {
            bind: 'account-origination-oc-account-young-mx-digitalization-certificate-success',
            analytics: documentUpdateYoungAnalytics.advancedFootprintAccepted
          },
          account_origination_oc_account_young_mx_name_eight: {
            bind: 'account-origination-oc-account-young-mx-digitalization-certificate-validate-pending',
            analytics: documentUpdateYoungAnalytics.advancedFootprintValidate
          },
          account_origination_oc_account_young_mx_name_eleven: {
            bind: 'account-origination-oc-account-young-mx-image-choose',
            analytics: documentUpdateYoungAnalytics.internalLink('elegir de la galeria')
          },
          account_origination_oc_account_young_mx_name_twelve: {
            bind: 'account-origination-oc-account-young-mx-suggest-modal-open',
            analytics: documentUpdateYoungAnalytics.internalLink('tomar foto')
          },
          account_origination_oc_account_young_mx_name_thirteen: {
            bind: 'account-origination-oc-account-young-mx-pdf-choose',
            analytics: documentUpdateYoungAnalytics.internalLink('elegir archivo pdf')
          },
          account_origination_oc_account_young_mx_name_fourty: {
            bind: 'account-origination-oc-account-young-mx-post-account-create',
            analytics: documentUpdateYoungAnalytics.appStep(2, '2 confirmacion')
          },
          account_origination_oc_account_young_mx_name_seventeen: {
            bind: 'account-origination-oc-account-young-mx-modal-service-error',
            analytics: documentUpdateYoungAnalytics.advancedFootprintError('error servicio no disponible')
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
          account_origination_oc_account_young_mx_initialized_feature: {
            bind: 'doRequestPostValidateDigitalFile'
          },
          account_origination_oc_account_young_mx_init_page: {
            bind: 'doRequestGetCatalogsRecords'
          },
          account_origination_oc_account_young_mx_do_request_get_business_documents_cud: {
            bind: 'postBusinessDocumentCud'
          },
          account_origination_oc_account_young_mx_do_request_get_business_documents_link_card: {
            bind: 'postBusinessDocumentLinkCard'
          },
          account_origination_oc_account_young_mx_response_business_documents_get_success: {
            bind: 'successGetBusinessDocuments'
          },
          account_origination_oc_account_young_mx_response_business_documents_post_success: {
            bind: 'successPostBusinessDocuments'
          },
          account_origination_oc_account_young_mx_response_business_documents_get_error: {
            bind: 'errorBusinessDocuments'
          },
          account_origination_oc_account_young_mx_response_business_documents_post_error: {
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
          account_origination_oc_account_young_mx_continue_offer_click: {
            bind: 'getContractTemplates'
          },
          account_origination_oc_account_young_mx_build_params_to_date_plugin: {
            bind: 'callDatePickerNativePlugin'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'setDateSelect'
          },
          account_origination_oc_account_young_mx_select_birthplace_native: {
            bind: 'callShowInfoNativePlugin'
          },
          account_origination_oc_account_young_mx_birthplace_native_selected: {
            bind: 'setBirthplaceSelected'
          },
          account_origination_oc_account_young_mx_places_response_send: {
            bind: 'places'
          },
          account_origination_oc_account_young_mx_select_colony_native: {
            bind: 'callShowInfoNativePlugin'
          },
          account_origination_oc_account_young_mx_colony_native_selected: {
            bind: 'setPlaceSelected'
          },
          global_set_app_settings: {
            bind: 'setAppSettingsParams'
          }
        },
        out: {
          account_origination_oc_account_young_mx_set_digital_file_validation: {
            bind: 'bbva-controller-oc-account-young-mx-set-digital-file'
          },
          account_origination_oc_account_young_mx_set_customer_id: {
            bind: 'bbva-controller-oc-account-young-mx-set-customer-id'
          },
          account_origination_oc_account_young_mx_set_user_id: {
            bind: 'bbva-controller-oc-account-young-mx-set-user-id'
          },
          account_origination_oc_account_young_mx_get_business_documents: {
            bind: 'bbva-controller-oc-account-young-mx-get-business-documents'
          },
          account_origination_oc_account_young_mx_set_business_documents_properties: {
            bind: 'bbva-controller-oc-account-young-mx-set-business-documents-properties'
          },
          account_origination_oc_account_young_mx_post_business_document: {
            bind: 'bbva-controller-oc-account-young-mx-post-business-document'
          },
          account_origination_oc_account_young_mx_show_modal_error: {
            bind: 'bbva-controller-oc-account-young-mx-show-modal-error'
          },
          global_open_document: {
            bind: 'bbva-controller-oc-account-young-mx-show-document'
          },
          account_origination_oc_account_young_mx_clear_loader: {
            bind: 'bbva-controller-oc-account-young-mx-show-document'
          },
          account_origination_oc_account_young_mx_save_contract_templates: {
            bind: 'bbva-controller-oc-account-young-mx-save-contract-templates'
          },
          account_origination_oc_account_young_mx_on_catalogs_success: {
            bind: 'bbva-controller-oc-account-young-mx-states-list-send'
          },
          global_nativeconnector_datepicker_launch: {
            bind: 'bbva-controller-oc-account-young-mx-call-date-picker-plugin'
          },
          account_origination_oc_account_young_mx_set_date_selected: {
            bind: 'bbva-controller-oc-account-young-mx-set-date-select'
          },
          account_origination_oc_account_young_mx_set_birthplace_native_selected: {
            bind: 'bbva-controller-oc-account-young-mx-set-birthplace-native-select'
          },
          account_origination_oc_account_young_mx_call_show_info_plugin: {
            bind: 'bbva-controller-oc-account-young-mx-call-show-info-plugin'
          },
          account_origination_oc_account_young_mx_set_place_native_selected: {
            bind: 'bbva-controller-oc-account-young-mx-set-place-native-select'
          },
          account_origination_oc_account_young_mx_set_document_name: {
            bind: 'bbva-controller-oc-account-young-mx-set-document-name'
          },
          account_origination_oc_account_young_mx_set_external_link: {
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
          account_origination_oc_account_young_mx_get_business_documents: {
            bind: 'getBusinessDocuments'
          },
          account_origination_oc_account_young_mx_set_business_documents_properties: {
            bind: 'setProperties'
          },
          account_origination_oc_account_young_mx_post_business_document: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          account_origination_oc_account_young_mx_response_business_documents_get_success: {
            bind: 'success-on-get-business-documents'
          },
          account_origination_oc_account_young_mx_response_business_documents_post_success: {
            bind: 'post-business-documents-success'
          },
          account_origination_oc_account_young_mx_response_business_documents_get_error: {
            bind: 'error-on-get-business-documents'
          },
          account_origination_oc_account_young_mx_response_business_documents_post_error: {
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
          account_origination_oc_account_young_mx_call_show_info_plugin: {
            bind: 'nativeListModal'
          }
        },
        out: {
          account_origination_oc_account_young_mx_set_birthplace_native_selected: {
            bind: 'show-info-native-list-modal-success'
          },
          account_origination_oc_account_young_mx_set_colony_native_selected: {
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
          account_origination_oc_account_young_mx_check_permissions_file: {
            bind: 'checkState'
          },
          global_request_permissions: {
            bind: 'request'
          }
        },
        out: {
          account_origination_oc_account_young_mx_check_permissions_success: {
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
          account_origination_oc_account_young_mx_get_mobile_platform: {
            bind: 'getPlatform'
          }
        },
        out: {
          account_origination_oc_account_young_mx_device_info_platform_success: {
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

  const permissionsPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          open_setttings_mobile: {
            bind: 'openSetting'
          }
        },
        out: {
          set_open_settings: {
            bind: 'setting-opened',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const base = {
    hash: `${pageName}`,
    currentPage: {
      url: '/oc-account-young-digitalization-mx',
      params: [
        'global_user', 'global_user_id'
      ]
    },
    pages,
    template,
    components: [
      lifeCycle,
      ocAccountYoungMX,
      controllerOcAccountYoungMx,
      showInfoPlugin,
      mobileDeviceinfo,
      mobilePermissionsPlugin,
      permissionsPlugin,
      mediacapturePlugin,
      filefetcherPlugin,
      openDocumentPlugin,
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
