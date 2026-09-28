/* eslint-disable complexity, new-cap */
'use strict';
module.exports = (CONFIG, PAGE_NAME = 'deferredSignature', PAGE_URL = 'generic-deferred') => {
  const { glomoOpenDocument, appFooter} = require('../helpers/_utils');
  const SPINNER = require('../helpers/_utils').SPINNER(CONFIG);
  const pages = require('../_pages')(CONFIG)(PAGE_NAME);
  const host = CONFIG.globalServices.host;
  const isNativeIos = CONFIG.nativeIos || false;
  const gOpenDocument = glomoOpenDocument(CONFIG);
  const product = PAGE_NAME;
  const sphericaPageUtils = require('../helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const deferredsignatureFeatures = {
    deferredSignatureStructuredProducts: 'structured',
    deferredSignatureEquityContract: 'equity',
    deferredSignaturePurchaseInstruction: 'instruction'
  };
  const appFooterDeferred = appFooter(CONFIG, PAGE_NAME);
  const base = {
    currentPage: {
      url: '/' + PAGE_URL
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'staticEver',
        hasFooter: appFooterDeferred ? true : false,
        className: isNativeIos ? 'ios-top-padding' : '',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        delayScroll: 0,
        fixOffsetScroll: 0,
        iOSFixedHeader: isNativeIos,
        headerFixed: true,
        footerFixed: true,
        handleStoppedScroll: true,
        preventScrollWithOverlay: true,
        cellsConnections: {
          in: {
            enable_cells_footer_channel: {
              bind: 'hasFooter'
            },
            [PAGE_NAME + '_INIT_PAGE']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: []
  };
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };
  SPINNER.properties.cellsConnections.in.close_spinner_from_info_modal = { bind: 'hide' };
  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      PAGE_NAME: PAGE_NAME,
      cache: [ '' ],
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + product]: {
            bind: 'navigation'
          },
          ['__bridge_page_' + product]: {
            bind: 'init'
          }
        },
        out: {
          [product + '_RESET_PAGE']: {
            bind: 'reset'
          },
          [product + '_INIT_PAGE']: {
            bind: 'init-page'
          },
          open_control_veil: {
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
  const headerMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      iconRightPrimaryExpanded: false,
      text: 'deferred-signature-' + deferredsignatureFeatures[PAGE_NAME],
      cellsConnections: {
        out: {
          [product + '_SUCCESS_BACK_REQUEST_EXIT_MODAL']: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };
  const modalDeadLine = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      id: 'slotModal',
      fullHeight: true,
      fixedFooter: true,
      hideContentPaddingTop: true,
      headerType: 'modal',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          [product + 'SET_MODAL_HEADER_TEXT']: {
            bind: 'headerText'
          },
          [product + 'SET_MODAL_BUTTON_TEXT']: {
            bind: isSpherica ? '' : 'buttonText'
          },
          OPEN_MODAL_EXPIRED_DEAD_LINE: {
            bind: 'open'
          }
        },
        out: {
          NAVIGATE_NOTIFICATIONSCENTER_BACK_HEADER_CLICK: {
            bind: 'help-modal-header-right-primary-click',
            backStep: true
          },
          NAVIGATE_NOTIFICATIONSCENTER_BACK_FOOTER_BUTTON: {
            bind: 'help-modal-footer-button-click',
            backStep: true
          },
          close_spinner_from_info_modal: {
            bind: 'help-modal-transitionend'
          },
          global_close_control_veil: {
            bind: 'help-modal-open'
          }
        }
      }
    },
    propertiesSpherica: {
      modalType: 'caution',
      titleIcon: 'spherica:caution',
      hideContentPaddingTop: false,
      iOSFixedHeader: isNativeIos,
      fullHeight: false,
      fixedFooter: false,
      headerType: '',
      closeLabel: 'deferred-signature-header-button-close',
      titleText: 'deferred-signature-manager-CONTRATO-modal-title-text',
      newCellsConnections: {
        add: {
          out: {
            NAVIGATE_NOTIFICATIONSCENTER_BACK_HEADER_CLICK: {
              bind: 'help-modal-veil-click',
              backStep: true
            },
            NAVIGATE_NOTIFICATIONSCENTER_BACK_FOOTER_BUTTON: {
              bind: 'help-modal-close-icon-click',
              backStep: true
            }
          }
        }
      }
    }
  };
  const typeTextModalDescription = {
    zone: 'slotModal.slot-content',
    type: 'UI',
    tagSpherica: 'bbva-type-text-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    propertiesSpherica: {
      alignment: 'center',
      tag: 'p',
      text: 'deferred-signature-expired-modal-text'
    }
  };
  const bbvaPanelInfo = {
    zone: 'slotModal.slot-content',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      microillustration: 'caution',
      text: 'deferred-signature-expired-modal-text',
      cellsConnections: {
        in: {
          [product + 'SET_MODAL_TITLE_TEXT']: {
            bind: 'heading'
          }
        }
      }
    }
  };
  const bbvaNotificationMessage = {
    zone: 'slotModal.slot-content',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [product + 'SET_MODAL_MESSAGE_TEXT']: {
            bind: isSpherica ? 'messageTitle' : 'message'
          }
        }
      }
    },
    propertiesSpherica: {
      bookTitle: true
    }
  };
  const bbvaDeferredSignatureMultistep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-deferred-signature',
    tagSpherica: 'bbva-multistep-deferred-signature-spherica',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-multistep-deferred-signature',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-deferred-signature-spherica',
    properties: {
      loadingComponent: true,
      flowNotes: true,
      completeSimpleListStep: true,
      className: 'margin-dark-background',
      additionalInfoClass: 'additional-info-m',
      cellsConnections: {
        in: {
          [product + 'data_send_list_multistep']: {
            bind: 'parseListData'
          },
          [product + '_SUCCESS_RESET_MULTISTEP']: {
            bind: 'reset'
          },
          [product + '_SUCCESS_RESET_MULTISTEP']: {
            bind: 'reset'
          },
          deferred_contract_signature_return_to_dashboard: {
            bind: 'reset'
          },
          deferred_structured_signature_return_to_dashboard: {
            bind: 'reset'
          },
          [product + '_EXIT_RESET']: {
            bind: 'reset'
          },
          [product + '_SUCCESS_LOAD']: {
            bind: 'loadingComponent'
          },
          [product + '_SUCCESS_INIT']: {
            bind: 'loadingComponent'
          },
          [product + '_SET_FLOW_EQUITY']: {
            bind: 'isflowNotes'
          },
          [product + '_VALIDATE_SINGLE_CHECK']: {
            bind: 'isvalidationCheckTerms'
          },
          [product + '_VALIDATE_DOUBLE_CHECK']: {
            bind: 'isvalidationCheckDataStaff'
          },
          [product + 'show_multistep_message_flag']: {
            bind: 'flagMessage'
          },
          [product + 'send_text_info_message']: {
            bind: 'textMessage'
          },
          [product + 'SET_TITLE_STEP_LABEL']: {
            bind: 'titleEditLabel'
          }
        },
        out: {
          [product + '_HIDE_CONFIRM_BUTTON']: {
            bind: 'show-button-review'
          },
          [product + 'edit_complete_step']: {
            bind: 'expandable-step-edit-step'
          },
          [product + 'list_file_click_pdf']: {
            bind: 'list-file-link-click'
          },
          [product + 'PDF_CLICKED']: {
            bind: 'list-file-clicked'
          },
          [product + '_SEND_NAME_PDF_ANALYTICS']: {
            bind: 'set-target-name-pdf'
          },
          [product + '_SEND_NAME_PDF']: {
            bind: 'set-target-name-pdf'
          },
          [product + '_SEND_NAME_PDF_TITLE']: {
            bind: 'set-target-name-pdf'
          },
          [product + '_SEND_NAME_CHECK']: {
            bind: 'set-target-name-checkbox'
          },
          [product + '_SEND_ANALYTICS_STEP_TERMS_AND_CONDITIONS']: {
            bind: 'send-analytic-step-two'
          },
          [product + '_SEND_DATA_CHECKBOX_TERMS']: {
            bind: 'set-target-data-checkbox'
          }
        }
      }
    },
    propertiesSpherica: {
      headerText: 'deferred-signature-' + deferredsignatureFeatures[PAGE_NAME] + '-spherica',
      isIOSFixedHeaderModal: isNativeIos,
      newCellsConnections: {
        add: {
          in: {
            close_control_veil: {
              bind: 'openDeferredSignatureMultistep'
            },
            sign_modal_open: {
              bind: 'closeDeferredSignatureMultistep'
            },
            sign_modal_cancelled: {
              bind: 'openDeferredSignatureMultistep'
            },
            sign_modal_close: {
              bind: 'openDeferredSignatureMultistep'
            }
          },
          out: {
            [product + 'complete_steps_deffered_signature']: {
              bind: 'multistep-deferred-signature-confirm-contract'
            },
            [product + '_EXIT_TO_DASHBOARD']: {
              bind: 'multistep-deferred-signature-leave-operative',
              link: {
                page: 'dashboard',
                cleanUntil: 'dashboard'
              }
            }
          }
        }
      }
    }
  };
  const buttonPrefixed = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      className: 'no-gradient',
      sticky: true,
      show: true,
      hidden: true,
      buttonText: 'deferred-signature-button-success',
      buttonClass: 'positive',
      cellsConnections: {
        in: {
          [product + '_TRANSLATE_CONFIRM_BTN_LABEL']: {
            bind: 'buttonText'
          },
          [product + '_HIDE_CONFIRM_BUTTON']: {
            bind: 'hidden'
          },
          [product + 'hide_button_review_edit']: {
            bind: 'hidden'
          },
          [product + 'SET_PANEL_BUTTON_TEXT']: {
            bind: 'buttonText'
          }
        },
        out: {
          [product + 'complete_steps_deffered_signature']: {
            bind: 'panel-button-fixed-item-click'
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
      apiVersion: CONFIG.globalServices.versions.businessDocuments,
      cellsConnections: {
        in: {
          [product + '_SEND_BUSSINES_BODY']: {
            bind: 'postBusinessDocumentsContracts'
          },
          [product + '_BACK_TO_LAST_RESPONSE']: {
            bind: 'getLastResponseRaw'
          }
        },
        out: {
          [product + '_BUSSINES_DOCUMENTS_CONTRACTS_SUCCESS']: {
            bind: 'post-business-documents-contracts-v1-success'
          },
          [product + '_BUSSINES_DOCUMENTS_CONTRACTS_ERROR']: {
            bind: 'post-business-documents-contracts-v1-error'
          },
          [product + '_BUSSINES_DOCUMENTS_LAST_RESPONSE']: {
            bind: 'get-last-response-raw'
          }
        }
      }
    }
  };
  const dmGlobalApisBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      cellsConnections: {
        in: {
          [product + '_SET_CUSTOMER_ID']: {
            bind: 'customerId'
          },
          [product + '_BUSINESS_PROPERTIES_SET']: {
            bind: 'deviceId'
          },
          [product + '_BUSINESS_DOCUMENTS_GET']: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          [product + '_SUCCESS_RESPONSE_PDF']: {
            bind: 'success-on-get-business-documents'
          },
          [product + '_ERROR_RESPONSE_PDF']: {
            bind: 'error-on-get-business-documents'
          }
        }
      }
    }
  };
  const navegationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          deferred_structured_signature_return_to_dashboard: {
            bind: 'goBack'
          },
          deferred_contract_signature_return_to_dashboard: {
            bind: 'goBack'
          }
        },
        out: {
          [product + '_EXIT_TO_DASHBOARD']: {
            bind: 'header-right-button',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          }
        }
      }
    }
  };
  if (CONFIG.native) {
    base.components.push(gOpenDocument);
  }
  base.components.push(
    handleLifeCycle,
    dmGlobalApisBusinessDocuments,
    dmGlobalApisBusinessDocumentsLit,
    navegationHandler,
    SPINNER
  );
  if (isSpherica) {
    base.components.push(
      modalDeadLine,
      typeTextModalDescription,
      bbvaNotificationMessage,
      bbvaDeferredSignatureMultistep
    );
  } else {
    base.components.push(
      headerMain,
      modalDeadLine,
      bbvaPanelInfo,
      bbvaNotificationMessage,
      bbvaDeferredSignatureMultistep,
      buttonPrefixed
    );
  }
  return sphericaPageUtils.spherize(base);
};
