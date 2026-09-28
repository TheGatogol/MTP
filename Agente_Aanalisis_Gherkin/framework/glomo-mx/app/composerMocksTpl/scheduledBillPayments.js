'use strict';

module.exports = (config) => {
  const {
    getShortFormatDate,
    getLanguage,
    getLocalCurrency,
    glomoOpenDocument,
    headerHeightMinimum,
    detailDownloadParams
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)('scheduledBillPayments');
  const pageName = 'scheduledBillPayments';
  const analitycsScheduledBillPayments = require('./analytics/_scheduledBillPayments')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {accounts, paymentsV0, paymentsV1, storedServices, customersV1}
    },
    native = false,
    nativeIos = false
  } = config;

  const cameraConfig = {
    codeType: 'BARCODE',
    requestCode: 1000,
    customViewConfig: {
      name: 'qr_custom_toolbar_overlay',
      options: {
        title: ' ',
        closeImageName: 'ic_close',
        arrowBackImageName: ' '
      }
    },
    overlayConfig: {
      navBarBackgroundColor: '#D8072146',
      backgroundColor: '#D8072146',
      borderWidth: 60,
      captureFrameColor: '#5BBEFF',
      onlyCorners: true,
      aspectRatio: 'RECTANGLE',
      isFrameVisible: true,
      isImageVisible: true
    }
  };

  const productValue = {
    domiciliation: {
      product: 'DOMICILIACION',
      subProduct: 'DOMICILIACION_ALTA',
      subProductLow: 'DOMICILIACION_BAJA'
    },
    recurringCharge: {
      product: 'CARGO_RECURRENTE',
      subProduct: 'RECURRENTE_ALTA',
      subProductLow: 'RECURRENTE_BAJA'
    }
  };

  const productId = {
    domiciliation: 'DOMICILIACION',
    recurringCharge: 'CARGO_RECURRENTE'
  };

  const titlePdf = {
    DOMICILIACION_ALTA: 'account-transaction-servicing-scheduled-bill-payments-pdf-title-domiciliation-document',
    DOMICILIACION_BAJA: 'account-transaction-servicing-scheduled-bill-payments-pdf-title-domiciliation-document-low',
    RECURRENTE_ALTA: 'account-transaction-servicing-scheduled-bill-payments-pdf-title-recurring-charge-document',
    RECURRENTE_BAJA: 'account-transaction-servicing-scheduled-bill-payments-pdf-title-recurring-charge-document-low'
  };

  const additionalInformationsValues = {
    idProduct: 'producto',
    idSubProduct: 'subproducto'
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      extraHeaderClass: 'bg-dark-core-blue',
      headerHeight: headerHeightMinimum,
      className: `${nativeIos ? 'ios-top-padding' : ''}`
    },
    propertiesSpherica: {
      headerFixed: true,
      extraHeaderClass: 'bg-light-grey',
      className: 'bg-light-grey',
      headerHeight: headerHeightMinimum,
      animationType: 'verticalUp'
    }
  };

  const scheduledPayments = {
    zone: 'app__main',
    type: 'UI',
    tag: 'account-transaction-servicing-scheduled-bill-payments',
    tagSpherica: 'account-transaction-servicing-scheduled-bill-payments-mx',
    familyPath: '@bbva-web-components-widgets/account-transaction-servicing-scheduled-bill-payments',
    familyPathSpherica: '@glomo-web-components/account-transaction-servicing-scheduled-bill-payments-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      nativeIos,
      customersApiVersion: customersV1,
      accountsApiVersion: accounts,
      directDebitApiVersion: paymentsV1,
      directDebitsApiVersion: paymentsV0,
      storedServicesApiVersion: storedServices,
      cardTypeId: 'CREDIT_CARD',
      imageId: 'FRONT_CARD',
      catalogId: 'PERIODICITY_OPTIONS',
      amountId: 'MAXIMUM_AMOUNT',
      minimumAmountEdit: 499,
      idProduct: additionalInformationsValues.idProduct,
      idSubProduct: additionalInformationsValues.idSubProduct,
      productDomiciliationId: productValue.domiciliation.product,
      subProductDomiciliationValue: productValue.domiciliation.subProduct,
      subProductDomiciliationLowValue: productValue.domiciliation.subProductLow,
      productRecurringChargeId: productValue.recurringCharge.product,
      subProductRecurringChargeValue: productValue.recurringCharge.subProduct,
      subProductRecurringChargeLowValue: productValue.recurringCharge.subProductLow,
      statusId: 'OPERATIVE',
      maximumProductsShowed: 3,
      language: getLanguage(),
      country: 'mx',
      priority: 1,
      endScheduledPayment: '0001-01-01',
      additionalInformationId: 'GLOMO login',
      exceptionEditAmount: [ 'CFE SUMINISTRADOR SERV BASICOS E.P.' ],
      cellsConnections: {
        in: {
          __bridge_page_scheduledBillPayments: {
            bind: 'initOperative'
          },
          scheduled_bill_payments_edit_scheduled_value: {
            bind: 'editScheduled'
          },
          scheduled_bill_payments_cancel_scheduled_value: {
            bind: 'cancelScheduled'
          },
          scheduled_bill_payments_id_scheduled_value: {
            bind: 'directDebitId'
          },
          scheduled_bill_payments_id_bill_payment: {
            bind: 'serviceSelectedId'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          sign_modal_cancelled: {
            bind: 'signCancelled'
          },
          cells_to_native_modal_closed: {
            bind: 'signCancelled'
          },
          reference_value_from_service_selected: {
            bind: 'scannerReference'
          },
          scheduled_bill_payments_validate_code: {
            bind: 'scannerReference'
          },
          scheduled_bill_payments_validate_response_error: {
            bind: 'cameraCodeErrorActions'
          },
          scheduled_bill_payments_validate_error: {
            bind: 'openAllowAccess'
          }
        },
        out: {
          scheduled_bill_payments_receipt_info: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-receipt-data-share'
          },
          scheduled_bill_payments_share_receipt_capture: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-share-receipt-show'
          },
          scheduled_bill_payments_open_native_settings: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-native-settings-main-open'
          },
          scheduled_bill_payments_request_business_document: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-document-open'
          },
          scheduled_bill_payments_open_camera: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-code-camera-scan'
          },
          scheduled_bill_payments_exit_process: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payments-exit',
            link: {
              page: 'billPaymentsHome'
            }
          },
          scheduled_bill_payments_init_scheduled_bill_payments: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payments-start',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('servicio')
          },
          scheduled_bill_payments_select_new_service: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-list-services-get',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('servicio')
          },
          scheduled_bill_payments_select_stored_service: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-saved-services-get',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('servicio')
          },
          scheduled_bill_payments_multistep_select_service_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payment-open',
            analytics: analitycsScheduledBillPayments.appPageVisitSchueduledBillPayments('1 detalle de servicio')
          },
          scheduled_bill_payments_init_edit_scheduled_bill_payments: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payments-edit',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('editar programacion')
          },
          scheduled_bill_payments_multistep_confirm_edit_scheduled_payment: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-confirm-edit',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('editar programacion')
          },
          scheduled_bill_payments_multistep_maximum_amount_edit: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-maximum-amount-edit',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('editar programacion')
          },
          scheduled_bill_payments_multistep_periodicity_edit_scheduled: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-periodicity-edit',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('editar programacion')
          },
          scheduled_bill_payments_multistep_terms_and_conditions_checked: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-terms-and-conditions-check',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('editar programacion')
          },
          scheduled_bill_payments_service_detail_interaction: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-service-detail-interaction-select',
            analytics: analitycsScheduledBillPayments.appStartedScheduledBillPayments('1 detalle de servicio')
          },
          scheduled_bill_payments_service_detail_step_view_reference: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-service-detail-reference-step-view',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('informacion referencia')
          },
          scheduled_bill_payments_service_detail_step_view_service_owner: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-service-detail-service-owner-step-view',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('informacion nombre del titular')
          },
          scheduled_bill_payments_origin_select_origin_open_modal: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-origin-payment-method-open',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('informacion medio de pago')
          },
          scheduled_bill_payments_multistep_service_detail_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-service-detail-step-continue',
            analytics: analitycsScheduledBillPayments.appStepServiceDetailScheduledBillPayments(
              2,
              '2 origen'
            )
          },
          scheduled_bill_payments_multistep_select_origin_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-origin-step-continue',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPayments(
              3,
              '3 importe maximo'
            )
          },
          scheduled_bill_payments_multistep_maximum_amount_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-maximum-amount-step-continue',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPayments(
              4,
              '4 periodicidad'
            )
          },
          scheduled_bill_payments_multistep_select_periodicity_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-periodicity-step-continue',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPayments(
              5,
              '5 terminos y condiciones'
            )
          },
          scheduled_bill_payments_multistep_terms_and_conditions_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-terms-and-conditions-step-continue',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPayments(
              6,
              '6 confirmacion'
            )
          },
          scheduled_bill_payments_multistep_send_data_continue_scheduled_payment: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payment-data-share',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPaymentsOTP(
              7,
              '7 otp'
            )
          },
          scheduled_bill_payments_scheduled_bill_payments_success_page: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payments-finish',
            analytics: analitycsScheduledBillPayments.appCompletedScheduledBillPayments(
              'pagina exitosa',
              'finalizado'
            )
          },
          scheduled_bill_payments_camera_barcode_error_modal: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-barcode-error-modal-show',
            analytics: analitycsScheduledBillPayments.appErrorPayments('error codigo de barras invalido')
          },
          scheduled_bill_payments_scheduled_service_error_modal: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-service-error-modal-show',
            analytics: analitycsScheduledBillPayments.appErrorPayments('error programacion ya registrada')
          },
          scheduled_bill_payments_error_invalid_reference_error_modal: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-invalid-reference-error-modal-show',
            analytics: analitycsScheduledBillPayments.appErrorPayments('error referencia no es valida')
          },
          scheduled_bill_payments_unavailable_error_service_scheduled_payment: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-unavailable-error-modal-show',
            analytics: analitycsScheduledBillPayments.appErrorPayments('error informacion no disponible')
          }
        }
      }
    },
    propertiesSpherica: {
      cellsConnections: {
        in: {
          __bridge_page_scheduledBillPayments: {
            bind: 'initOperative'
          },
          navigation_to_billpayments_scheduled_from_detail_edit: {
            bind: 'showLoader'
          },
          navigation_to_billpayments_scheduled_from_detail_cancel: {
            bind: 'showLoader'
          },
          scheduled_bill_payments_edit_scheduled_value: {
            bind: 'editScheduled'
          },
          scheduled_bill_payments_cancel_scheduled_value: {
            bind: 'cancelScheduled'
          },
          scheduled_bill_payments_id_scheduled_value: {
            bind: 'directDebitId'
          },
          scheduled_bill_payments_id_bill_payment: {
            bind: 'serviceSelectedId'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          sign_modal_cancelled: {
            bind: 'signCancelled'
          },
          cells_to_native_modal_closed: {
            bind: 'signCancelled'
          },
          reference_value_from_service_selected: {
            bind: 'scannerReference'
          },
          scheduled_bill_payments_validate_code: {
            bind: 'scannerReference'
          },
          scheduled_bill_payments_validate_response_error: {
            bind: 'cameraCodeErrorActions'
          },
          scheduled_bill_payments_validate_error: {
            bind: 'openAllowAccess'
          },
          global_open_document_url_success: {
            bind: 'clearLoader'
          }
        },
        out: {
          scheduled_bill_payments_receipt_info: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-receipt-data-share'
          },
          scheduled_bill_payments_share_receipt_capture: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-share-receipt-show'
          },
          scheduled_bill_payments_open_native_settings: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-native-settings-main-open'
          },
          scheduled_bill_payments_request_business_documents: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-document-open'
          },
          scheduled_bill_payments_open_camera: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-code-camera-scan'
          },
          scheduled_bill_payments_exit_process: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payments-exit',
            link: {
              page: 'billPaymentsHome'
            }
          },
          scheduled_bill_payments_init_scheduled_bill_payments: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payments-start',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('servicio')
          },
          scheduled_bill_payments_select_new_service: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-list-services-get',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('servicio')
          },
          scheduled_bill_payments_select_stored_service: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-saved-services-get',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('servicio')
          },
          scheduled_bill_payments_multistep_select_service_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payment-open',
            analytics: analitycsScheduledBillPayments.appPageVisitSchueduledBillPayments('1 detalle de servicio')
          },
          scheduled_bill_payments_init_edit_scheduled_bill_payments: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payments-edit',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('editar programacion')
          },
          scheduled_bill_payments_multistep_confirm_edit_scheduled_payment: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-confirm-edit',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('editar programacion')
          },
          scheduled_bill_payments_multistep_maximum_amount_edit: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-maximum-amount-edit',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('editar programacion')
          },
          scheduled_bill_payments_multistep_periodicity_edit_scheduled: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-periodicity-edit',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('editar programacion')
          },
          scheduled_bill_payments_multistep_terms_and_conditions_checked: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-terms-and-conditions-check',
            analytics: analitycsScheduledBillPayments.appInternalLinkScheduledBillPaymentsService('editar programacion')
          },
          scheduled_bill_payments_service_detail_interaction: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-service-detail-interaction-select',
            analytics: analitycsScheduledBillPayments.appStartedScheduledBillPayments('1 detalle de servicio')
          },
          scheduled_bill_payments_service_detail_step_view_reference: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-service-detail-reference-step-view',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('informacion referencia')
          },
          scheduled_bill_payments_service_detail_step_view_service_owner: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-service-detail-service-owner-step-view',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('informacion nombre del titular')
          },
          scheduled_bill_payments_origin_select_origin_open_modal: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-origin-payment-method-open',
            analytics: analitycsScheduledBillPayments.appPageViewShceuledBillPayments('informacion medio de pago')
          },
          scheduled_bill_payments_multistep_service_detail_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-service-detail-step-continue',
            analytics: analitycsScheduledBillPayments.appStepServiceDetailScheduledBillPayments(
              2,
              '2 origen'
            )
          },
          scheduled_bill_payments_multistep_select_origin_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-origin-step-continue',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPayments(
              3,
              '3 importe maximo'
            )
          },
          scheduled_bill_payments_multistep_maximum_amount_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-maximum-amount-step-continue',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPayments(
              4,
              '4 periodicidad'
            )
          },
          scheduled_bill_payments_multistep_select_periodicity_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-periodicity-step-continue',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPayments(
              5,
              '5 terminos y condiciones'
            )
          },
          scheduled_bill_payments_multistep_terms_and_conditions_collapsed: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-terms-and-conditions-step-continue',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPayments(
              6,
              '6 confirmacion'
            )
          },
          scheduled_bill_payments_multistep_send_data_continue_scheduled_payment: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payment-data-share',
            analytics: analitycsScheduledBillPayments.appStepScheduledBillPaymentsOTP(
              7,
              '7 otp'
            )
          },
          scheduled_bill_payments_scheduled_bill_payments_success_page: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-bill-payments-finish',
            analytics: analitycsScheduledBillPayments.appCompletedScheduledBillPayments(
              'pagina exitosa',
              'finalizado'
            )
          },
          scheduled_bill_payments_camera_barcode_error_modal: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-barcode-error-modal-show',
            analytics: analitycsScheduledBillPayments.appErrorPayments('error codigo de barras invalido')
          },
          scheduled_bill_payments_scheduled_service_error_modal: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-scheduled-service-error-modal-show',
            analytics: analitycsScheduledBillPayments.appErrorPayments('error programacion ya registrada')
          },
          scheduled_bill_payments_error_invalid_reference_error_modal: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-invalid-reference-error-modal-show',
            analytics: analitycsScheduledBillPayments.appErrorPayments('error referencia no es valida')
          },
          scheduled_bill_payments_unavailable_error_service_scheduled_payment: {
            bind: 'account-transaction-servicing-scheduled-bill-payments-unavailable-error-modal-show',
            analytics: analitycsScheduledBillPayments.appErrorPayments('error informacion no disponible')
          }
        }
      }
    }
  };
  const nativeSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          scheduled_bill_payments_open_settings: {
            bind: 'openSetting'
          }
        }
      }
    }
  };
  const codeReader = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    tag: 'bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          scheduled_bill_payments_open_code_reader: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          scheduled_bill_payments_response_success: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          scheduled_bill_payments_response_error: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };
  const controllerBillPaymentsHome = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-bill-payments-home',
    familyPath: '@glomo-web-components/bbva-controller-bill-payments-home',
    render: 'litElement',
    properties: {
      host,
      native,
      cameraConfig: cameraConfig,
      pdfTemplate: detailDownloadParams,
      productId: productId,
      titleDocuments: titlePdf,
      cellsConnections: {
        in: {
          navigation_to_billpayments_scheduled_from_detail_edit: {
            bind: 'setOperativeData'
          },
          navigation_to_billpayments_scheduled_from_detail_cancel: {
            bind: 'setOperativeData'
          },
          open_schedule_payment: {
            bind: 'paymentService'
          },
          scheduled_bill_payments_open_camera: {
            bind: 'scanCodeCamera'
          },
          scheduled_bill_payments_response_success: {
            bind: 'validateScanCode'
          },
          scheduled_bill_payments_response_error: {
            bind: 'validateErrorScanCode'
          },
          scheduled_bill_payments_request_business_documents: {
            bind: 'requestBusinessDocuments'
          },
          scheduled_bill_payments_get_business_documents_success: {
            bind: 'openDocument'
          },
          scheduled_bill_payments_open_native_settings: {
            bind: 'openNativeSettings'
          },
          scheduled_bill_payments_receipt_info: {
            bind: 'selectTemplate'
          }
        },
        out: {
          scheduled_bill_payments_edit_scheduled_value: {
            bind: 'bbva-controller-bill-payments-home-edit-value'
          },
          scheduled_bill_payments_cancel_scheduled_value: {
            bind: 'bbva-controller-bill-payments-home-cancel-value'
          },
          scheduled_bill_payments_id_scheduled_value: {
            bind: 'bbva-controller-bill-payments-home-service-id'
          },
          scheduled_bill_payments_id_bill_payment: {
            bind: 'bbva-controller-bill-payments-service-selected-id'
          },
          scheduled_bill_payments_open_code_reader: {
            bind: 'bbva-controller-bill-payments-home-open-code-reader'
          },
          scheduled_bill_payments_validate_code: {
            bind: 'bbva-controller-bill-payments-home-valid-code'
          },
          scheduled_bill_payments_validate_response_error: {
            bind: 'bbva-controller-bill-payments-home-invalid-code'
          },
          scheduled_bill_payments_validate_error: {
            bind: 'bbva-controller-bill-payments-home-open-settings'
          },
          scheduled_bill_payments_open_settings: {
            bind: 'bbva-controller-bill-payments-home-open-native-settings'
          },
          scheduled_bill_payments_request_document: {
            bind: 'bbva-controller-bill-payments-home-request-business-documents'
          },
          global_open_document_url: {
            bind: 'bbva-controller-bill-payments-home-native-download-document'
          },
          scheduled_bill_payments_select_receipt_template: {
            bind: 'bbva-controller-bill-payments-home-select-template'
          }
        }
      }
    }
  };
  const cellsGlobalApisBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          scheduled_bill_payments_request_document: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          scheduled_bill_payments_get_business_documents_success: {
            bind: 'success-on-get-business-documents'
          }
        }
      }
    }
  };
  const receiptManager = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      dateFormat: getShortFormatDate(),
      sharedReceiptStyles: {
        receiptTitle: {
          'color': 'var(--bbva-500, #666666)',
          'font-weight': '500',
          'padding-bottom': '1em'
        },
        sectionTitle: {
          'color': 'var(--bbva-500, #666666)',
          'font-weight': '500'
        },
        fieldTitle: {
          'color': 'var(--bbva-350, #121212)',
          'font-weight': '350'
        },
        fieldValue: {
          'color': 'var(--bbva-350, #121212)',
          'font-weight': '350'
        }
      },
      cellsConnections: {
        in: {
          scheduled_bill_payments_share_receipt_capture: {
            bind: 'captureReceipt'
          },
          scheduled_bill_payments_select_receipt_template: {
            bind: 'result'
          },
          mobile_manage_operation: {
            bind: 'reset'
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
    hash: pageName,
    currentPage: {
      url: '/scheduled-bill-payments'
    },
    pages,
    template,
    components: [
      scheduledPayments,
      nativeSettings,
      codeReader,
      controllerBillPaymentsHome,
      cellsGlobalApisBusinessDocuments,
      receiptManager
    ]
  };

  if (config.native) {
    base.components.push(glomoOpenDocument(config));
  }

  const spherizedBase = sphericaPageUtils.spherize(base);

  const signWidgetConnector = require('./common/_widget-sign-connector')(config)(spherizedBase);

  const componentName = sphericaPageUtils.isSpherica()
    ? 'account-transaction-servicing-scheduled-bill-payments-mx'
    : 'account-transaction-servicing-scheduled-bill-payments';
  signWidgetConnector(componentName);

  return spherizedBase;
};
