'use strict';

module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    getLanguage,
    getCurrencyCode,
    getLocalCurrency,
    detailDownloadParams,
    createSpinner,
    glomoOpenDocument
  } = require('./common/helpers/_utils');
  const {
    globalServices: {host, requiredToken = 'tsec', versions: {accounts, customersV1}},
    native = false,
    nativeIos = false
  } = CONFIG;
  const pageName = 'ocCarLoanContractSigning';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const [ getChannelName ] = useNames(createPrefixFromPageName(pageName));
  detailDownloadParams.body = {};
  detailDownloadParams.headers = {};
  const {
    appStepCurrency,
    appStepToken
  } =  require('./analytics/_ocCarLoan')();
  const spinner = createSpinner(CONFIG);
  spinner.properties.className = 'solid-spinner';

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: nativeIos
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
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
          __bridge_page_ocCarLoanContractSigning: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('contract_signing_init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('contract_signing_reset_page')]: {
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

  const header = {
    zone: 'app__header',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-header-main',
    tag: 'bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'bbva-oc-car-loan-contract-signing-header-title',
      iconRightPrimary: 'bbva:close',
      variant: 'modal-three-level',
      accessibilityTextIconRightPrimary: 'Close',
      cellsConnections: {
        out: {
          [getChannelName('contract_signing_exit_page')]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const multistepOcCarLoan = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-multistep-oc-car-loan',
    tag: 'bbva-multistep-oc-car-loan',
    render: 'litElement',
    properties: {
      currencyCode: getCurrencyCode(),
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          [getChannelName('normalize_response_success')]: {
            bind: 'initComponent'
          },
          [getChannelName('link_documents')]: {
            bind: 'link-click'
          }
        },
        out: {
          [getChannelName('multistep_get_credit')]: {
            bind: 'oc-car-loan-contract-signing-get-credit'
          },
          [getChannelName('modal_contract_term')]: {
            bind: 'oc-car-loan-contract-signing-document-contract-terms'
          },
          [getChannelName('documents_cover_contract')]: {
            bind: 'oc-car-loan-contract-signing-document-cover-contract'
          },
          [getChannelName('documents_credit_contract')]: {
            bind: 'oc-car-loan-contract-signing-document-credit-contract'
          },
          [getChannelName('documents_direct_debit_format')]: {
            bind: 'oc-car-loan-contract-signing-document-direct-debit-format'
          },
          [getChannelName('documents_exhibit')]: {
            bind: 'oc-car-loan-contract-signing-document-exhibit'
          },
          [getChannelName('documents_amortization_table')]: {
            bind: 'oc-car-loan-contract-signing-document-amortization-table'
          },
          [getChannelName('documents_promissory_note')]: {
            bind: 'oc-car-loan-contract-signing-document-promissory-note'
          }
        }
      }
    }
  };

  const leavePageModal = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-help-modal',
    tag: 'bbva-help-modal',
    render: 'litElement',
    attributes: {
      'hide-content-padding-top': true
    },
    properties: {
      modalType: 'warning',
      titleIcon: 'bbva:warning',
      cellsConnections: {
        in: {
          [getChannelName('contract_signing_exit_page')]: {
            bind: 'open'
          },
          set_leave_page_modal_body_text: {
            bind: 'bodyText'
          },
          set_leave_page_modal_button_text: {
            bind: 'buttonText'
          },
          set_leave_page_modal_link_text: {
            bind: 'linkText'
          },
          native_back_button_clicked_close_modal: {
            bind: 'close'
          }
        },
        out: {
          ch_oc_car_loan_contract_signing_leave_page: {
            bind: 'help-modal-footer-button-click',
            backStep: true
          },
          cells_to_native_modal_opened: {
            'bind': 'help-modal-open',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            'bind': 'help-modal-close',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const termsAndConditionsModal = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-help-modal',
    tag: 'bbva-help-modal',
    render: 'litElement',
    container: true,
    attributes: {
      'hide-content-padding-top': true
    },
    properties: {
      id: 'termsAndConditionsModal',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal-three-level',
      titleIcon: 'bbva:help',
      headerText: 'bbva-oc-car-loan-terms-and-conditions',
      cellsConnections: {
        in: {
          [getChannelName('modal_contract_term')]: {
            bind: 'open'
          },
          set_terms_and_conditions_modal_tittle_text: {
            bind: 'titleText'
          },
          set_terms_and_conditions_modal_button_text: {
            bind: 'buttonText'
          },
          native_back_button_clicked_close_modal: {
            bind: 'close'
          }
        },
        out: {
          cells_to_native_modal_opened: {
            'bind': 'help-modal-open',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            'bind': 'help-modal-close',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const bulletTerms = {
    zone: 'termsAndConditionsModal.slot-content',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
    tag: 'bbva-aggregation-bullet-list',
    render: 'litElement',
    properties: {
      className: 'u-text--left',
      cellsConnections: {
        in: {
          [getChannelName('set_list_items')]: {
            bind: 'items'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisLoans = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-loans',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          ch_oc_car_loan_set_proposal_id: {
            bind: 'proposalId'
          },
          [getChannelName('set_api_version')]: {
            bind: 'loansApiVersion'
          },
          [getChannelName('get_proposal_request')]: {
            bind: 'getProposal'
          },
          [getChannelName('get_proposal_goods_request')]: {
            bind: 'getProposalGoods'
          },
          [getChannelName('get_proposal_merchants_request')]: {
            bind: 'getProposalMerchants'
          }
        },
        out: {
          [getChannelName('get_proposal_success')]: {
            bind: 'get-proposal'
          },
          [getChannelName('get_proposal_error')]: {
            bind: 'error-on-get-proposal'
          },
          [getChannelName('get_proposal_goods_success')]: {
            bind: 'get-proposal-goods'
          },
          [getChannelName('get_proposal_goods_error')]: {
            bind: 'error-on-get-proposal-goods'
          },
          [getChannelName('get_proposal_merchants_success')]: {
            bind: 'get-proposal-merchants'
          },
          [getChannelName('get_proposal_merchants_error')]: {
            bind: 'error-on-get-proposal-merchants'
          }
        }
      }
    }
  };

  const dataproviderConsumerFinanceDossiers = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-consumer-finance-dossiers',
    familyPath: '@glomo-web-components/bbva-dataprovider-consumer-finance-dossiers',
    render: 'litElement',
    properties: {
      apiVersion: accounts,
      host,
      native,
      requiredToken,
      otpId: pageName,
      requiredOTP: true,
      cellsConnections: {
        in: {
          [getChannelName('patch_tracking_information')]: {
            bind: 'patchTrackingInformation'
          }
        },
        out: {
          ch_oc_car_loan_patch_tracking_success: {
            bind: 'patch-tracking-information-success'
          },
          ch_oc_car_loan_patch_tracking_error: {
            bind: 'patch-tracking-information-error'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisCustomers = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host,
      customersApiVersion: customersV1,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          [getChannelName('post_customer_terms')]: {
            bind: 'postCustomerTerms'
          }
        },
        out: {
          [getChannelName('post_customer_terms_success')]: {
            bind: 'post-customer-terms'
          },
          [getChannelName('error_on_post_customer_terms')]: {
            bind: 'error-on-post-customer-terms'
          }
        }
      }
    }
  };

  const multistepmanagerOcCarLoan = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
    tag: 'bbva-multistepmanager-oc-car-loan',
    render: 'litElement',
    properties: {
      detailDownloadConfig: detailDownloadParams,
      apiVersion: customersV1,
      host,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          ch_oc_car_loan_set_proposal_id: {
            bind: 'proposalId'
          },
          dashboard_accounts: {
            bind: 'getDashboardAccounts'
          },
          [getChannelName('contract_signing_init_page')]: {
            bind: 'startRequest'
          },
          [getChannelName('get_proposal_success')]: {
            bind: 'merchantsRequest'
          },
          [getChannelName('get_proposal_goods_success')]: {
            bind: 'handleGoodsResponse'
          },
          [getChannelName('get_proposal_merchants_success')]: {
            bind: 'handleMerchantsResponse'
          },
          [getChannelName('multistep_get_credit')]: {
            bind: 'getCredit'
          },
          ch_oc_car_loan_patch_tracking_success: {
            bind: 'makePostCustomerTerms'
          },
          [getChannelName('get_proposal_error')]: {
            bind: 'handleServiceError'
          },
          [getChannelName('get_proposal_goods_error')]: {
            bind: 'handleServiceError'
          },
          [getChannelName('get_proposal_merchants_error')]: {
            bind: 'handleServiceError'
          },
          [getChannelName('post_customer_terms_success')]: {
            bind: 'handleCustomerTermsResponse'
          },
          [getChannelName('documents_cover_contract')]: {
            bind: 'comparePDF'
          },
          [getChannelName('documents_credit_contract')]: {
            bind: 'comparePDF'
          },
          [getChannelName('documents_direct_debit_format')]: {
            bind: 'comparePDF'
          },
          [getChannelName('documents_exhibit')]: {
            bind: 'comparePDF'
          },
          [getChannelName('documents_amortization_table')]: {
            bind: 'comparePDF'
          },
          [getChannelName('documents_promissory_note')]: {
            bind: 'comparePDF'
          },
          global_open_document_url_success: {
            bind: 'closeSpinner'
          },
          global_open_document_url_error: {
            bind: 'errorPDF'
          },
          ch_oc_car_loan_patch_tracking_error: {
            bind: 'retryError'
          }
        },
        out: {
          set_proposal_id: {
            bind: 'set-proposal-id'
          },
          [getChannelName('set_api_version')]: {
            bind: 'set-api-version'
          },
          [getChannelName('get_proposal_request')]: {
            bind: 'get-proposal-request'
          },
          [getChannelName('get_proposal_goods_request')]: {
            bind: 'get-proposal-goods-request'
          },
          [getChannelName('get_proposal_merchants_request')]: {
            bind: 'get-proposal-merchants-request'
          },
          [getChannelName('post_customer_terms')]: {
            bind: 'make-post-customer-terms'
          },
          [getChannelName('patch_tracking_information')]: {
            bind: 'patch-tracking-information'
          },
          global_retry_error: {
            bind: 'multistep-service-error'
          },
          [getChannelName('leave_the_page')]: {
            bind: 'leave-the-page',
            backStep: true
          },
          [getChannelName('normalize_response_success')]: {
            bind: 'normalize-response-success'
          },
          global_open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          [getChannelName('set_list_items')]: {
            bind: 'set-list-items'
          },
          oc_car_loan_contract_signing_success_payload: {
            bind: 'normalized-success-payload',
            link: {
              page: 'ocCarLoanContractSigningSuccess',
              cleanUntil: pageName
            }
          },
          oc_car_loan_contract_signing_hidden_damage_insurance: {
            bind: 'hide-damage-section'
          },
          oc_car_loan_contract_signing_receipt_payload: {
            bind: 'normalized-receipt-payload'
          },
          global_open_document_url: {
            bind: 'request-post-document'
          },
          set_leave_page_modal_body_text: {
            bind: 'set-leave-page-modal-body-text'
          },
          set_leave_page_modal_button_text: {
            bind: 'set-leave-page-modal-button-text'
          },
          set_leave_page_modal_link_text: {
            bind: 'set-leave-page-modal-link-text'
          },
          set_terms_and_conditions_modal_tittle_text: {
            bind: 'set-terms-and-conditions-modal-tittle-text'
          },
          set_terms_and_conditions_modal_button_text: {
            bind: 'set-terms-and-conditions-modal-button-text'
          },
          analytics_operation_folio: {
            bind: 'analytics-operation-folio'
          },
          oc_car_lon_app_step_view_signing: {
            bind: 'app-step-view-signing',
            analytics: appStepCurrency(4, 'prestamos', 'firma prestamo vehicular', '4 terminos y condiciones', '4 terminos y condiciones', 'firma prestamo vehicular', 'gestion inicial')
          },
          oc_car_lon_app_step_confirmation_signing: {
            bind: 'app-step-confirmation-signing',
            analytics: appStepCurrency(5, 'prestamos', 'firma prestamo vehicular', '5 confirmacion', '5 confirmacion', 'firma prestamo vehicular', 'gestion inicial')
          },
          oc_car_lon_app_step_otp_signing: {
            bind: 'app-step-otp-signing',
            analytics: appStepToken(6, 'prestamos', 'firma prestamo vehicular', '6 otp', '6 otp', 'firma prestamo vehicular', 'gestion inicial')
          }
        }
      }
    }
  };

  const ocCarLoanContractSigning = {
    hash: 'oc-car-loan-contract-signing',
    currentPage: {
      url: '/ocCarLoanContractSigning'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      header,
      multistepOcCarLoan,
      leavePageModal,
      termsAndConditionsModal,
      bulletTerms,
      cellsDmGlobalApisLoans,
      dataproviderConsumerFinanceDossiers,
      cellsDmGlobalApisCustomers,
      multistepmanagerOcCarLoan
    ]
  };

  const widgetSignConnector = require('./common/_widget-sign-connector')(CONFIG)(ocCarLoanContractSigning);
  widgetSignConnector('bbva-dataprovider-consumer-finance-dossiers');
  widgetSignConnector('bbva-multistepmanager-oc-car-loan',
    {
      widgetId: 'OC-CAR-LOAN-MULTISTEP-SERVICE-ERROR-REQUEST',
      acceptRetry: { bind: 'startRequest', component: 'bbva-multistepmanager-oc-car-loan' },
      cancelRetry: { bind: 'leaveThePage', component: 'bbva-multistepmanager-oc-car-loan' },
      acceptCallForHelp: { bind: 'leaveThePage', component: 'bbva-multistepmanager-oc-car-loan' }
    }
  );
  widgetSignConnector('bbva-multistepmanager-oc-car-loan',
    {
      widgetId: 'retry-error-conection',
      acceptRetry: { bind: 'retryErrorConection', component: 'bbva-multistepmanager-oc-car-loan' }
    }
  );
  widgetSignConnector('bbva-multistepmanager-oc-car-loan',
    {
      widgetId: 'retry-error-default',
      acceptRetry: { bind: 'retryError', component: 'bbva-multistepmanager-oc-car-loan' }
    }
  );

  if (native) {
    ocCarLoanContractSigning.components.push(glomoOpenDocument(CONFIG, true));
  }

  return ocCarLoanContractSigning;
};