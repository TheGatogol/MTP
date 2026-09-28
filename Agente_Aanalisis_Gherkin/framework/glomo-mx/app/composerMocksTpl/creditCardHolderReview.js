/* eslint-disable camelcase, new-cap */
'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'creditCardHolderReview';
  const localCurrency = utils.getLocalCurrency(CONFIG);
  const language = utils.getLanguage(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const spinner = utils.SPINNER(CONFIG);
  const detailDownloadParams = utils.detailDownloadParams;
  const Glomo_Open_Document = utils.glomoOpenDocument(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

  const base = {
    currentPage: {
      url: '/credit-card-holder-review'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        className: 'light-green-bg',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [PAGE_NAME + '_INIT_CHANNEL']: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        className: ''
      }
    },
    components: [ spinner ]
  };

  const moleculeHeader = {
    zone: 'app__header',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    type: 'UI',
    properties: {
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      hidden: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SET_MOLECULE_HEADER_TITLE']: {
            bind: 'titleName'
          },
          [PAGE_NAME + '_SET_MOLECULE_HEADER_CLASS']: {
            bind: 'class'
          },
          [PAGE_NAME + '_SET_HIDDEN_HIRING_SUCCESS']: {
            bind: 'hidden'
          },
          [PAGE_NAME + '_SET_HIDDEN_TO_RESET']: {
            bind: 'hidden'
          }
        },
        out: {
          [PAGE_NAME + '_SUCCESS_BACK_REQUEST']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      rightIconText: 'cells-molecule-header-spherica-close',
      variant: 'primary',
      cellsConnections: {
        in: {
          creditCardHolderReview_SET_MOLECULE_HEADER_TITLE: {
            bind: 'titleName'
          },
          creditCardHolderReview_SET_HIDDEN_HIRING_SUCCESS: {
            bind: 'hidden'
          },
          creditCardHolderReview_SET_HIDDEN_TO_RESET: {
            bind: 'hidden'
          }
        },
        out: {
          creditCardHolderReview_SUCCESS_BACK_REQUEST: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SUCCESS_BACK_REQUEST']: {
            bind: 'goBack'
          },
          [PAGE_NAME + '_SUCCESSFUL_CLICK_PRIMARY']: {
            bind: 'goBack'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_EXIT_ACCEPT: {
            bind: 'goBack'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_RETRY_CANCEL: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME + '_NAVIGATE_TO_PREVIOUS_PAGE']: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };

  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME + '_RESET_PAGE']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_INIT_CHANNEL']: {
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

  const cellsSuccessfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      language: language,
      page: PAGE_NAME,
      localCurrency: localCurrency,
      formatDate: utils.getFormatDate(),
      hidden: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SET_SUCCESS_INFORMATION']: {
            bind: 'result'
          },
          [PAGE_NAME + '_SET_TYPE_SUCCESSFUL_RESPONSE']: {
            bind: 'type'
          },
          [PAGE_NAME + '_SET_HIDDEN_HIRING_SUCCESS']: {
            bind: 'hidden'
          },
          [PAGE_NAME + '_SET_HIDDEN_TO_RESET']: {
            bind: 'hidden'
          }
        },
        out: {
          CCH_BRANCHES_VIEW: {
            bind: 'share-receipt-capture',
            link: {
              page: 'atmLocator'
            }
          },
          [PAGE_NAME + '_BUSINESS_DOCUMENTS_REQUEST']: {
            bind: 'download-receipt'
          },
          [PAGE_NAME + '_SUCCESSFUL_CLICK_PRIMARY']: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    },
    propertiesSpherica: {
      withOutAvatar: true,
      withoutHead: false,
      operationListClass: 'centered-items'
    }
  };

  const bbvaHelpModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      id: 'aggregationListFile',
      fullHeight: true,
      headerText: 'oc-credit-card-holder-general-offer-documents-title',
      iOSFixedHeader: isNativeIos,
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SHOW_DOCUMENTS_MODAL']: {
            bind: 'open'
          },
          [PAGE_NAME + 'MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'close'
          },
          [PAGE_NAME + '_NAVIGATE_TO_PREVIOUS_PAGE']: {
            bind: 'close'
          }
        },
        out: {
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'help-modal-close'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_BUTTON_CLICK_CLOSE']: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    }
  };

  const bbvaAggregationListFile = {
    zone: 'aggregationListFile.slot-content',
    type: 'UI',
    tag: 'bbva-aggregation-file-list',
    tagSpherica: 'bbva-aggregation-file-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-file-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-file-list-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SET_DOCUMENT_LIST']: {
            bind: 'listFile'
          }
        },
        out: {
          [PAGE_NAME + '_LIST_FILE_CLICK']: {
            bind: 'list-file-clicked'
          }
        }
      }
    }
  };

  const creditCardHolderManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-credit-card-holder-manager',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      detailDocumentPdfTemplate: detailDownloadParams,
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          CCH_SHOW_SUCCESSFUL_CONTRACTING_PAGE: {
            bind: 'loadSuccessResponse'
          },
          global_open_document_url_success: {
            bind: 'onDowloadReceiptSuccess'
          },
          global_open_document_url_error: {
            bind: 'onDowloadReceiptError'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_RETRY_ACCEPT: {
            bind: 'handleRetryDownloadPdf'
          },
          [PAGE_NAME + '_BUSINESS_DOCUMENTS_REQUEST']: {
            bind: 'requestBusinessDocuments'
          },
          [PAGE_NAME + '_LIST_FILE_CLICK']: {
            bind: 'downloadBusinessPdf'
          },
          [PAGE_NAME + '_GET_BUSINESS_DOCUMENTS']: {
            bind: 'loadBusinessDocumentsData'
          },
          [PAGE_NAME + '_ERROR_ON_GET_BUSINESS_DOCUMENTS']: {
            bind: 'onDowloadReceiptError'
          },
          [PAGE_NAME + '_SUCCESSFUL_CLICK_PRIMARY']: {
            bind: 'setHidden'
          },
          [PAGE_NAME + '_SUCCESS_BACK_REQUEST']: {
            bind: 'setHidden'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'getPressCloseModal'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_BUTTON_CLICK_CLOSE']: {
            bind: 'getPressCloseModal'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_open_document_url: {
            bind: 'native-download-receipt'
          },
          [PAGE_NAME + '_SET_NAVIGATE_CONTINUE']: {
            bind: 'set-navigate-continue'
          },
          [PAGE_NAME + '_SET_MOLECULE_HEADER_TITLE']: {
            bind: 'set-molecule-header-title'
          },
          [PAGE_NAME + '_SET_MOLECULE_HEADER_CLASS']: {
            bind: 'set-molecule-header-class'
          },
          [PAGE_NAME + '_SET_SUCCESS_INFORMATION']: {
            bind: 'set-success-information'
          },
          [PAGE_NAME + '_SET_TYPE_SUCCESSFUL_RESPONSE']: {
            bind: 'set-type-successful-response'
          },
          [PAGE_NAME + '_SHOW_DOCUMENTS_MODAL']: {
            bind: 'show-documents-modal'
          },
          [PAGE_NAME + '_SET_DOCUMENT_LIST']: {
            bind: 'set-document-list'
          },
          [PAGE_NAME + '_SEND_REQUEST_BUSINESS_DOCUMENTS']: {
            bind: 'request-business-documents'
          },
          [PAGE_NAME + '_SET_HIDDEN_HIRING_SUCCESS']: {
            bind: 'set-hidden-hiring-success'
          },
          [PAGE_NAME + '_SET_HIDDEN_TO_RESET']: {
            bind: 'set-hidden-to-reset'
          },
          [PAGE_NAME + 'MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'modal-rates-and-conditions-close'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: true
    }
  };

  const cellsGlobalApisBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SEND_REQUEST_BUSINESS_DOCUMENTS']: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          [PAGE_NAME + '_GET_BUSINESS_DOCUMENTS']: {
            bind: 'success-on-get-business-documents'
          },
          [PAGE_NAME + '_ERROR_ON_GET_BUSINESS_DOCUMENTS']: {
            bind: 'error-on-get-business-documents'
          }
        }
      }
    }
  };

  if (CONFIG.native) {
    base.components.push(Glomo_Open_Document);
  }

  base.components.push(
    moleculeHeader,
    navigationHandler,
    handleLifeCycle,
    cellsSuccessfulResponse,
    bbvaHelpModal,
    bbvaAggregationListFile,
    creditCardHolderManager,
    cellsGlobalApisBusinessDocuments
  );

  return sphericaPageUtils.spherize(base);
};
