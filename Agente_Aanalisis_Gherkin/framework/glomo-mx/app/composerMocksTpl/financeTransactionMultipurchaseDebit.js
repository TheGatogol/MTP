'use strict';
module.exports = (config) => {
  const {
    getLanguage,
    getLocalCurrency,
    glomoOpenDocument,
    getShortFormatDate
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        flexibleFinancings: flexibleFinancingsApiVersion,
        campaigns: campaignsApiVersion,
        cardsV1: cardsApiVersion,
        customersV1: customersApiVersion
      } },
    aemHost,
    payments: {
      financeTransactionMultipurchaseDebit: {
        onboardingUrl: carouselContentFragmentPath
      }
    },
    native = false,
    nativeIos = false
  } = config;
  const pageName = 'financeTransactionMultipurchaseDebit';
  const _localStorage = require('./common/_local-storage');
  const analyticsFinanceDebitMultipurchase = require('./analytics/_financeTransactionMultipurchaseDebit')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const base = {
    hash: 'financetransactionMultipurchaseDebit',
    currentPage: { url: '/finance-transaction-multipurchase-debit', params: [] },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: 0,
        iOSFixedHeader: true,
        className: `${nativeIos ? 'ios-top-padding safe-area-app' : ''}`,
        animationType: 'verticalUp',
        cellsConnections: {
          in: {
            finance_transaction_multipurchase_debit__init_page: {
              bind: 'recalculateHeader'
            },
            modal_transitionend_scroll_into_view: {
              bind: 'scrollIntoView'
            }
          }
        }
      }
    }
  };
  const feature = {
    zone: 'app__main',
    type: 'UI',
    tag: 'card-transaction-servicing-finance-debit-multipurchase',
    familyPath: '@bbva-web-components-widgets/card-transaction-servicing-finance-debit-multipurchase',
    tagSpherica: 'card-transaction-servicing-finance-debit-multipurchase-mx',
    familyPathSpherica: '@glomo-web-components/card-transaction-servicing-finance-debit-multipurchase-mx',
    render: 'litElement',
    properties: {
      contentFragmentHost: aemHost,
      carouselContentFragmentPath,
      isNativeIos: nativeIos,
      iOSFixedHeader: nativeIos,
      localeCards: 'Mx',
      locale: 'Mx',
      productId: '0PYP',
      subProductId: '0PYP',
      productIdFinancing: '92',
      subProductIdFinancing: 'CFX1',
      host,
      native,
      requiredToken,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      pageName,
      campaignsApiVersion,
      cardsApiVersion,
      customersApiVersion,
      flexibleFinancingsApiVersion,
      balancesIds: 'AVAILABLE_BALANCE',
      imagesIds: 'FRONT_CARD',
      specificAmountsIds: {
        financingResponse: 'GRANTED_AMOUNT',
        transactions: 'TOTAL_AMOUNT',
        microloans: 'MICROLOAN_AMOUNT',
        microloansFees: 'MICROLOAN_AMOUNT_WITHOUT_FEES',
        monthlyInstallment: 'INSTALLMENT_MONTHLY_AMOUNT',
        lastInstallment: 'LAST_INSTALLMENT',
        simulateRequest: 'MICROLOAN_AMOUNT',
        financingRequest: 'FINANCING_AMOUNT',
        totalInstallment: 'TOTAL_INSTALLMENT',
        totalInstallmentPlan: 'TOTAL_INSTALLMENT_PLAN'
      },
      feeType: 'MICROLOAN_WITHDRAWAL_FEE',
      rateType: 'TOTAL_ANNUAL_COST',
      financingLinesErrorMessage: {
        buro: '00000021#OPERACIÓN RECHAZADA: RBUI',
        documentation: '00000022#TIPO DOCUMENTO NO INFORMADO'
      },
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          card_Detail_set_financing_debit_multipurchase_offer_id: {
            bind: 'offerId'
          },
          finance_transaction_multipurchase_debit__init_page: {
            bind: 'init'
          },
          finance_transaction_multipurchase_debit__send_account_name: {
            bind: 'accountName'
          },
          finance_transaction_multipurchase_debit__send_account_number: {
            bind: 'accountNumber'
          },
          global_storage_get_finance_debit_multipurchase_error: {
            bind: 'getLocalStorageErrorResponse'
          },
          global_storage_get_finance_debit_multipurchase_success: {
            bind: 'getLocalStorageSuccessResponse'
          },
          sign_modal_cancelled: {
            bind: 'cancelProcess'
          },
          signature_cancel_widgetErrorHandler: {
            bind: 'cancelProcess'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageMultistepCloseRequest'
          },
          finance_transaction_multipurchase_debit__multipurchase_financing_lines_show_modal_error: {
            bind: 'manageShowErrorModal'
          }
        },
        out: {
          finance_transaction_multipurchase_debit__exit: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-exit-accept',
            backStep: true
          },
          finance_transaction_multipurchase_debit__get_account_data: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-get-account-data'
          },
          finance_transaction_multipurchase_debit__request_business_documents: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-terms-contract-pdf-request'
          },
          finance_transaction_multipurchase_debit__request_business_documents_hiring: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-get-open-document-request'
          },
          global_get_from_storage: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-get-native-local-storage-request'
          },
          global_set_in_storage: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-set-native-local-storage-request'
          },
          finance_transaction_multipurchase_debit__FINANCE_DEBIT_RECEIPT_INFO: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-receipt-data-share'
          },
          finance_transaction_multipurchase_debit__SHARE_RECEIPT_CAPTURE: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-share-receipt-select'
          },
          finance_transaction_multipurchase_debit__BRANCH_LOCATOR: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-find-commercial-branch-select',
            link: {
              page: 'branchLocator'
            }
          },
          finance_transaction_multipurchase_debit__multipurchase_load_step_select_purchases: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-step-select-purchases-load',
            analytics: analyticsFinanceDebitMultipurchase.appVisit()
          },
          finance_transaction_multipurchase_debit__multipurchase_select_purchase: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-purchase-select',
            analytics: analyticsFinanceDebitMultipurchase.appStarted('seleccionar compra')
          },
          finance_transaction_multipurchase_debit__multipurchase_see_more_transactions: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-see-more-transactions-select',
            analytics: analyticsFinanceDebitMultipurchase.appStarted('mostrar mas')
          },
          finance_transaction_multipurchase_debit__multipurchase_request_months_to_defer_data: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-purchases-continue-select',
            analytics: analyticsFinanceDebitMultipurchase.appStarted('continuar')
          },
          finance_transaction_multipurchase_debit__multipurchase_load_step_months_to_defer: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-step-months-to-defer-load'
          },
          finance_transaction_multipurchase_debit__multipurchase_load_step_terms: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-step-terms-load'
          },
          finance_transaction_multipurchase_debit__multipurchase_contract_line_request: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-contract-line-request'
          },
          finance_transaction_multipurchase_debit__multipurchase_success_contract_line: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-success-contract-line-modal-show'
          },
          global_card_transaction_servicing_update_card_detail: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-success-contract-line-modal-show'
          },
          finance_transaction_multipurchase_debit__multipurchase_confirmation_summary_show: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-defer-summary-show'
          },
          finance_transaction_multipurchase_debit__multipurchase_defer_request: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-summary-button-press'
          },
          finance_transaction_multipurchase_debit__multipurchase_success_defer: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-success-defer-modal-show'
          },
          finance_transaction_multipurchase_debit__multipurchase_show_onboarding: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-onboarding-visible',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('difiere tus compras')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_participating_purchases_more_info: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-participating-purchases-more-info-open',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('compras participantes')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_defer_commission_detail: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-defer-commission-detail-open',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('comision por diferimiento')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_first_pay_date: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-first-pay-date-open',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('fecha primer pago')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_cat_commission_help: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-cat-commission-help-open',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('cat diferimiento')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_characteristics_button: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-characteristics-button-open',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('caracteristicas linea financiamiento')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_defer_cat_info: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-help-icon-defer-cat-info-open',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('cat linea financiamiento')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_limit_purchases_error: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-error-max-purchases-limit-exceed',
            analytics: analyticsFinanceDebitMultipurchase.pageViewError('error limite compras seleccionadas')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_limit_amount_error: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-error-max-available-amount-limit-exceed',
            analytics: analyticsFinanceDebitMultipurchase.pageViewError('error saldo superado')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_no_available_purchases: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-multistep-no-available-purchases-open',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('sin compras')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_incomplete_documentation: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-error-incomplete-documentation-show',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('actualizar documentos')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_buro_alert: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-error-buro-alert-show',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('consulta de historial crediticio')
          },
          finance_transaction_multipurchase_debit__multipurchase_show_simulate_error_credit_limit: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-multistep-error-credit-limit-open',
            analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('saldo superado')
          },
          global_card_transaction_servicing_post_contracting_update_card_detail: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-microloans-create'
          },
          finance_transaction_multipurchase_debit__multipurchase_financing_lines_api_create_error: {
            bind: 'financing-lines-api-dm-create-error'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            navigation_finance_transaction_debit_multipurchase: {
              bind: 'setDataPreContracting'
            },
            sign_modal_cancelled: {
              bind: 'handleOtpCancel'
            },
            widget_signature_close_modal_error: {
              bind: 'handleOtpCancel'
            },
            sign_modal_close_reset: {
              bind: 'handleOtpCancel'
            },
            __bridge_cancelled_back_navigation: {
              bind: 'nativeBackNavigation'
            }
          },
          out: {
            modal_transitionend_scroll_into_view: {
              bind: 'help-modal-transitionend'
            },
            finance_transaction_multipurchase_debit__exit: {
              bind: 'navigation-go-back',
              backStep: true
            },
            finance_transaction_multipurchase_debit__FINANCE_DEBIT_RECEIPT_INFO: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-receipt-result-share'
            },
            finance_transaction_multipurchase_debit__SHARE_RECEIPT_CAPTURE: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-receipt-share'
            },
            finance_transaction_multipurchase_debit__multipurchase_defer_request: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-microloans-otp'
            },
            finance_transaction_multipurchase_debit__multipurchase_show_onboarding: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-onboarding-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('difiere tus compras')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_participating_purchases_more_info: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-participating-purchases-more-info-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('compras participantes')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_defer_commission_detail: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-defer-commission-detail-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('comision por diferimiento')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_first_pay_date: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-first-pay-date-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('fecha primer pago')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_cat_commission_help: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-cat-commission-help-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('cat diferimiento')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_characteristics_button: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-characteristics-button-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('caracteristicas linea financiamiento')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_defer_cat_info: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-help-modal-help-icon-defer-cat-info-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('cat linea financiamiento')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_limit_purchases_error: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-error-max-purchases-limit-overcome',
              analytics: analyticsFinanceDebitMultipurchase.pageViewError('error limite compras seleccionadas')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_no_available_purchases: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-multistep-no-available-purchases-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('sin compras')
            },
            finance_transaction_multipurchase_debit__multipurchase_show_simulate_error_credit_limit: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-multistep-error-credit-limit-show',
              analytics: analyticsFinanceDebitMultipurchase.pageViewInfo('saldo superado')
            }
          }
        },
        remove: {
          in: [
            'finance_transaction_multipurchase_debit__init_page',
            'finance_transaction_multipurchase_debit__get_account_data'
          ]
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-finance-transaction-multipurchase',
    familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
    render: 'litElement',
    properties: {
      productIdDocument: 'CUENTA_CORRIENTE',
      subProductIdDocument: 'CONTRATACION',
      titleDocumentPdf: 'CONTRATACION',
      businessDocumentDescription: 'Contrato de Compras Diferidas',
      indexOfBase64Src: 3,
      financingLinesErrorMessage: {
        documentation: '00000022#TIPO DOCUMENTO NO INFORMADO',
        buro: '00000021#OPERACIÓN RECHAZADA: RBUI'
      },
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialData'
          },
          finance_transaction_multipurchase_debit__get_account_data: {
            bind: 'cardId'
          },
          finance_transaction_multipurchase_debit__request_business_documents: {
            bind: 'requestBusinessDocuments'
          },
          finance_transaction_multipurchase_debit__get_business_documents_success: {
            bind: 'loadBusinessDocumentsData'
          },
          finance_transaction_multipurchase_debit__post_business_documents_success: {
            bind: 'successBasePDF'
          },
          finance_transaction_multipurchase_debit__get_business_documents_success_hiring: {
            bind: 'loadBusinessDocumentsDataHiring'
          },
          finance_transaction_multipurchase_debit__post_business_documents_success_hiring: {
            bind: 'successBasePDF'
          },
          finance_transaction_multipurchase_debit__multipurchase_financing_lines_api_create_error: {
            bind: 'manageFinancingLinesErrors'
          }
        },
        out: {
          finance_transaction_multipurchase_debit__send_account_name: {
            bind: 'send-associated-account-name'
          },
          finance_transaction_multipurchase_debit__send_account_number: {
            bind: 'send-associated-account-number'
          },
          finance_transaction_multipurchase_debit__get_request_business_documents: {
            bind: 'request-business-documents'
          },
          finance_transaction_multipurchase_debit__post_request_business_documents: {
            bind: 'native-download-receipt'
          },
          finance_transaction_multipurchase_debit__post_request_business_documents_hiring: {
            bind: 'native-download-receipt-hiring'
          },
          global_open_document_base64: {
            bind: 'show-document-event'
          },
          finance_transaction_multipurchase_debit__multipurchase_financing_lines_show_modal_error: {
            bind: 'multipurchase-financing-lines-show-modal-error'
          }
        }
      }
    }
  };
  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-finance-transaction-multipurchase-analytics',
    familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          finance_transaction_multipurchase_debit__multipurchase_load_step_months_to_defer: {
            bind: 'debitFireAppStepMonthsToDefer'
          },
          finance_transaction_multipurchase_debit__multipurchase_load_step_terms: {
            bind: 'debitFireAppStepTerms'
          },
          finance_transaction_multipurchase_debit__multipurchase_contract_line_request: {
            bind: 'debitFireAppStepContractLineRequest'
          },
          finance_transaction_multipurchase_debit__multipurchase_success_contract_line: {
            bind: 'debitFireAppStepSuccessContractLine'
          },
          finance_transaction_multipurchase_debit__multipurchase_confirmation_summary_show: {
            bind: 'debitFireAppStepConfirmationSummary'
          },
          finance_transaction_multipurchase_debit__multipurchase_defer_request: {
            bind: 'debitFireAppStepDeferRequest'
          },
          finance_transaction_multipurchase_debit__multipurchase_success_defer: {
            bind: 'debitFireAppDeferCompleted'
          }
        },
        out: {
          finance_transaction_multipurchase_debit__multipurchase_analytics_step_months_to_defer: {
            bind: 'debit-analytics-step-months-to-defer',
            analytics: analyticsFinanceDebitMultipurchase.appStep('2', 'meses a diferir')
          },
          finance_transaction_multipurchase_debit__multipurchase_analytics_step_terms: {
            bind: 'debit-analytics-step-terms',
            analytics: analyticsFinanceDebitMultipurchase.appStep('3', 'terminos y condiciones')
          },
          finance_transaction_multipurchase_debit__multipurchase_analytics_step_contract_line_request: {
            bind: 'debit-analytics-step-contract-line-request',
            analytics: analyticsFinanceDebitMultipurchase.appStep('4', 'otp')
          },
          finance_transaction_multipurchase_debit__multipurchase_analytics_step_success_page: {
            bind: 'debit-analytics-step-success-contract-line',
            analytics: analyticsFinanceDebitMultipurchase.appStepSuccess('5', 'contratacion finalizada')
          },
          finance_transaction_multipurchase_debit__multipurchase_analytics_step_confirmation: {
            bind: 'debit-analytics-step-confirmation-summary',
            analytics: analyticsFinanceDebitMultipurchase.appStep('6', 'confirmacion')
          },
          finance_transaction_multipurchase_debit__multipurchase_analytics_step_defer_request: {
            bind: 'debit-analytics-step-defer-request',
            analytics: analyticsFinanceDebitMultipurchase.appStep('7', 'otp')
          },
          finance_transaction_multipurchase_debit__multipurchase_analytics_completed: {
            bind: 'debit-analytics-defer-completed',
            analytics: analyticsFinanceDebitMultipurchase.appCompleted('pagina exitosa')
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
          finance_transaction_multipurchase_debit__get_request_business_documents: {
            bind: 'getBusinessDocuments'
          },
          finance_transaction_multipurchase_debit__post_request_business_documents: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          finance_transaction_multipurchase_debit__get_business_documents_success: {
            bind: 'success-on-get-business-documents'
          },
          finance_transaction_multipurchase_debit__post_business_documents_success: {
            bind: 'post-business-documents-success'
          }
        }
      }
    }
  };
  const cellsGlobalApisBusinessDocumentsHiring = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      native,
      requiredToken,
      otpId: pageName,
      cellsConnections: {
        in: {
          finance_transaction_multipurchase_debit__request_business_documents_hiring: {
            bind: 'getBusinessDocuments'
          },
          finance_transaction_multipurchase_debit__post_request_business_documents_hiring: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          finance_transaction_multipurchase_debit__get_business_documents_success_hiring: {
            bind: 'success-on-get-business-documents'
          },
          finance_transaction_multipurchase_debit__post_business_documents_success_hiring: {
            bind: 'post-business-documents-success'
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
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        info: {
          'padding': '0rem',
          'margin-top': '0.125rem',
          'background-color': 'none'
        },
        infoIcon: {
          'display': 'none'
        },
        infoMessage: {
          'font-weight': '100',
          'margin': '0rem',
          'font-size': 'var(--cells-text-size-12, 0.75rem)',
          'text-align': 'left',
          'background-color': 'none',
          'color': 'var(--bbva-500, #666666)'
        }
      },
      cellsConnections: {
        in: {
          finance_transaction_multipurchase_debit__SHARE_RECEIPT_CAPTURE: {
            bind: 'captureReceipt'
          },
          finance_transaction_multipurchase_debit__FINANCE_DEBIT_RECEIPT_INFO: {
            bind: 'result'
          },
          finance_transaction_multipurchase_debit__right_primary_click: {
            bind: 'reset'
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
    },
    propertiesSpherica: {
      country: 'mxGlobal',
      newCellsConnections: {
        remove: {
          out: [
            'open_control_veil',
            'close_control_veil'
          ]
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: requiredToken,
      private: true,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          },
          finance_transaction_multipurchase_debit__close_operative: {
            bind: 'reset'
          }
        },
        out: {
          finance_transaction_multipurchase_debit__init_page: {
            bind: 'init-page'
          },
          finance_transaction_multipurchase_debit__reset_page: {
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
  const pageBase = {
    ...base,
    components: [lifeCycle, feature, manager, analyticsManager, cellsGlobalApisBusinessDocuments, cellsGlobalApisBusinessDocumentsHiring, receiptManager]
  };
  if (native) {
    pageBase.components.push(glomoOpenDocument(config));
  }
  _localStorage.addOutStorageChannels(pageBase.components, [ 'finance_debit_multipurchase' ], config);
  const signConnector = require('./common/_widget-sign-connector')(config)(pageBase);
  signConnector('card-transaction-servicing-finance-debit-multipurchase');
  const signConnectorDocuments = require('./common/_sign-connector')(config)(pageBase);
  signConnectorDocuments('cells-dm-global-apis-business-documents', pageName, ['post-business-documents-success', 'post-business-documents-error']);

  return sphericaPageUtils.spherize(pageBase);
};
