'use strict';
module.exports = (CONFIG) => {
  const {
    glomoOpenDocument,
    SPINNERSPHERICA: spinner,
    useNames,
    createPrefixFromPageName,
    detailDownloadParams
  } = require('./common/helpers/_utils');
  const pageDmsOutCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pageName = 'customerContracts';
  const operativePrefix = createPrefixFromPageName(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const spinnerSpherica = spinner(CONFIG);
  spinnerSpherica.propertiesSpherica.iOSFixedHeader = false;

  const host = CONFIG.globalServices.host;
  const analyticsCustomer = require('./analytics/_customerContracts')(CONFIG);
  detailDownloadParams.body = {
    documentTemplate: {
      id: '',
      templateType: {
        id: 'PDF'
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      disableEdgeSwipe: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          reset_contracts_channel: {
            bind: 'reset'
          }
        }
      }
    },
    propertiesSpherica: {
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`,
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'bg-light-grey',
      disableEdgeSwipe: true
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_customerContracts: {
            bind: 'init'
          }
        },
        out: {
          ['CCL_REQUEST_CONTRACTS_LIST_CHANNEL']: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const glomoDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-customer-contracts-manager-mx',
    familyPath: 'glomo-customer-contracts-manager',
    properties: {
      host,
      native: CONFIG.native || false,
      detailDownloadConfig: detailDownloadParams,
      otpId: 'customerContracts',
      default: true,
      defaultContractsData: [
        {
          name: 'Términos y condiciones',
          productId: 'TYC',
          subProductId: 'GLOMO',
          id: 'GMDBMTC003',
          default: true,
          hideItemAdditional: true
        },
        {
          name: 'Contrato Servicios Digitales',
          productId: 'CUD',
          id: 'GMDCTUD015',
          default: true,
          hideItemAdditional: true
        }
      ],
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          ['CCL_REQUEST_CONTRACTS_LIST_CHANNEL']: {
            bind: 'initCustomerContracts'
          },
          reset_contracts_channel: {
            bind: 'reset'
          },
          [getChannelName('error_document')]: {
            bind: 'contractsListError'
          },
          [getChannelName('succes_document')]: {
            bind: 'setContractsList'
          },
          open_document_url: {
            bind: 'openDocument'
          },
          global_open_document_url_success: {
            bind: 'closeDocument'
          },
          global_open_document_url_error: {
            bind: 'closeDocument'
          },
          request_otp_customer_contracts: {
            bind: 'getOtpRequest'
          }
        },
        out: {
          ['set_bussines_doc']: {
            bind: 'set-business-properties'
          },
          ['request_documents']: {
            bind: 'customer-contracts',
            analytics: analyticsCustomer.customerContractsHuellaAvanzada
          },
          ['request_customer']: {
            bind: 'set-customer-id'
          },
          global_open_document_url: {
            bind: 'customer-contracts-document-clicked'
          },
          signature_handle_required_first_step: {
            bind: 'signature-required-first-step-dm'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          response_otp_customer_contracts: {
            bind: 'signature-sign-response',
            'forward-to-native': true
          },
          cancel_operation_customer_contracts: {
            bind: 'signature-sign-operations-cancel',
            'forward-to-native': true
          },
          customer_contracts_leave_the_page: {
            bind: 'leave-the-page',
            backStep: true
          },
          global_retry_error: {
            bind: 'open-document-error'
          }
        }
      }
    }
  };
  const dmGlobalApisBusinessDocumentsLit = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-business-documents',
    familyPath: '@glomo-web-components/bbva-dataprovider-business-documents',
    render: 'litElement',
    properties: {
      host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      apiVersion: CONFIG.globalServices.versions.businessDocumentsV0,
      cellsConnections: {
        in: {
          ['request_customer']: {
            bind: 'getBusinessDocuments'
          },
          [pageName + '_back_to_last_response']: {
            bind: 'getLastResponseRaw'
          }
        },
        out: {
          [getChannelName('succes_document')]: {
            bind: 'get-business-documents-v0-success'
          },
          [getChannelName('error_document')]: {
            bind: 'get-business-documents-v0-error',
            analytics: analyticsCustomer.customerContractsErrorHuellaAvanzada
          },
          [pageName + '_bussines_documents_last_response']: {
            bind: 'get-last-response-raw'
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      id: '',
      className: 'header--dark',
      leftIcon: 'coronita:return-12',
      leftIconText: 'cells-molecule-header-spherica-return-customer-contracts',
      leftIconSize: '22',
      titleName: 'cells-molecule-header-customer-contracs-title',
      cellsConnections: {
        out: {
          [getChannelName('back-button')]: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      secondaryClass: '',
      leftIcon: 'coronita:return-12',
      leftIconText: 'cells-molecule-header-spherica-return-customer-contracts',
      leftIconSize: '22',
      titleName: 'cells-molecule-header-customer-contracs-title'
    }
  };
  const listContracts = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-product-item-list',
    tagSpherica: 'cells-product-item-list-spherica',
    properties: {
      className: 'lower-header-case scroll',
      header: 'cells-product-item-list-customer-contract-list-title',
      cellsConnections: {
        in: {
          ['request_documents']: {
            bind: 'items'
          }
        },
        out: {
          open_document_url: {
            bind: 'product-item-tap'
          }
        }
      }
    }
  };
  const base = {
    hash: 'customer-contracts',
    currentPage: {
      url: '/customer-contracts'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      glomoDocuments,
      spinnerSpherica,
      dmGlobalApisBusinessDocumentsLit,
      listContracts
    ]
  };
  if (CONFIG.native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  const addSignConnector = (component, events) => signConnector(component, pageName, events);
  addSignConnector('glomo-customer-contracts-manager-mx', ['open-document-sucess', 'open-document-error']);
  pageDmsOutCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
