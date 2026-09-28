'use strict';

module.exports = (CONFIG) => {
  const { SPINNER: spinner, glomoOpenDocument, createPrefixFromPageName, useNames, headerHeight, detailDownloadParams } = require('./common/helpers/_utils');
  const pageName = 'travelInsuranceCoverages';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const host = CONFIG.globalServices.host;
  const isNative = CONFIG.native || false;
  const isNativeIos = CONFIG.nativeIos || false;
  const businessDocumentsApiVersion = CONFIG.globalServices.versions.businessDocumentsV0;
  const modalConfigItems = {
    'glomo-travel-insurance-coverages-communication-error': {
      code: 'glomo-travel-insurance-coverages-communication-error',
      title: 'travel-insurance-error-modal-title',
      maximize: true,
      className: 'full-height-info header--title-grey',
      closeOnPrimaryButton: true,
      heroImage: './images/errors/error.svg',
      acceptBtLabel: 'travel-insurance-sign-error-exit',
      values: [
        {
          title: 'alert-COMUNICATION-ERROR-INFO-title-modal',
          class: 'spacing text-center'
        },
        { text: 'glomo-travel-insurance-communication-error-text' }
      ]
    },
    'glomo-travel-insurance-coverages-communication-retry-error': {
      code: 'glomo-travel-insurance-coverages-communication-retry-error',
      title: 'travel-insurance-error-modal-title',
      maximize: true,
      className: 'full-height-info header--title-grey',
      closeOnPrimaryButton: true,
      heroImage: './images/errors/error.svg',
      acceptBtLabel: 'travel-insurance-sign-error-retry',
      cancelBtLabel: 'travel-insurance-modal-reset-travelers-cancel',
      values: [
        {
          title: 'alert-COMUNICATION-ERROR-INFO-title-modal',
          class: 'spacing text-center'
        },
        { text: 'glomo-travel-insurance-communication-retry-error-text' }
      ]
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      mode: 'seamed',
      headerHeight
    }
  };
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      id: 'travel-header',
      className: 'header--white',
      rightIcon: 'coronita:close',
      titleName: 'travel-insurance-manager-offer-info-coverages-title',
      cellsConnections: {
        out: {
          [getChannelName('GO_BACK')]: {
            bind: 'click-right-button',
            skipHistory: true,
            backStep: true
          }
        }
      }
    }
  };
  const cellsTextDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      id: 'travel-insurance-covarages-description',
      className: 'margin-top-m no-margin-bottom subtitle-gap-bottom-s',
      description: [
        {
          mainDescription: 'travel-insurance-manager-offer-info-covarages-description'
        }
      ],
      cellsConnections: {
        in: {
          [getChannelName('SET_COVERAGES_DESCRIPTION')]: {
            bind: 'description'
          }
        }
      }
    }
  };
  const cellsButtonList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-button-list',
    properties: {
      buttons: [ {
        icon: 'coronita:pdf',
        titleText: 'travel-insurance-terms-pdf-terms-and-conditions-general-conditions'
      } ],
      cellsConnections: {
        in: {
          travelInsurance_SET_ITEMS: {
            bind: 'buttons'
          }
        },
        out: {
          [getChannelName('REQUEST_PDF')]: {
            bind: 'button-clicked'
          }
        }
      }
    }
  };
  const cellsAccordionStepList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-accordion-step-list',
    properties: {
      className: 'modal no-border-content padding-text-header',
      cellsConnections: {
        in: {
          travelInsurance_ALL_COVERAGES_ITEMS: {
            bind: 'items'
          }
        },
        out: {
          [getChannelName('COVERAGE_SELECTED')]: {
            bind: 'ti-offer-coverages-title'
          }
        }
      }
    }
  };
  const cellsConfirmButtons = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      className: 'help-buttons dark-medium-blue-background',
      config: {
        buttons: {
          primary: {
            text: 'alert-ASSOCIATED-TRANSACTIONS-accept'
          }
        }
      },
      cellsConnections: {
        out: {
          navigation_travel_insurance_coverages_continue: {
            bind: 'cells-confirm-buttons-click-primary',
            skipHistory: true,
            backStep: true
          }
        }
      }
    }
  };
  const glomoTravelInsuranceManagerMX = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-travel-insurance-manager',
    tag: 'glomo-travel-insurance-manager-mx',
    properties: {
      host,
      native: isNative,
      pdfDocTitle: 'CONDICIONES GENERALES SEGURO VIAJE',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      modalConfigItems: modalConfigItems,
      businessDocumentsApiVersion,
      detailDownloadParams,
      cellsConnections: {
        in: {
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          [getChannelName('REQUEST_PDF')]: {
            bind: 'requestPdf'
          },
          [getChannelName('SUCCESS_RESPONSE_PDF')]: {
            bind: 'successResponsePDF'
          },
          [getChannelName('SUCCESS_POST_BD')]: {
            bind: 'successBasePdf'
          },
          [getChannelName('ERROR_RESPONSE_ON_GET_BD')]: {
            bind: 'errorHandlerOnBusinessDocsCoverages'
          },
          [getChannelName('ERROR_POST_BD')]: {
            bind: 'errorHandlerOnBusinessDocsCoverages'
          },
          [getChannelName('COMMUNICATION_ERROR')]: {
            bind: 'reset'
          },
          [getChannelName('COMMUNICATION_ERROR_RETRY')]: {
            bind: 'requestPdf'
          },
          [getChannelName('COMMUNICATION_ERROR_EXIT')]: {
            bind: 'resetData'
          },
          [getChannelName('COMMUNICATION_ERROR_EXIT')]: {
            bind: 'backNavigation'
          },
          global_open_document_url_error: {
            bind: 'errorHandlerOnBusinessDocsCoverages'
          }
        },
        out: {
          [getChannelName('REQUEST_PDF_BD')]: {
            bind: 'request-pdf-contract'
          },
          [getChannelName('SET_BUSINESS_PROPS')]: {
            bind: 'set-business-properties'
          },
          [getChannelName('REQUEST_PDF_DM_POST')]: {
            bind: 'request-post-document'
          },
          [getChannelName('SET_COVERAGES_DESCRIPTION')]: {
            bind: 'coverages-description'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-diy-info-modal'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_open_document_url: {
            bind: 'show-document-event'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      native: isNative,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('REQUEST_PDF_BD')]: {
            bind: 'getBusinessDocuments'
          },
          [getChannelName('SET_BUSINESS_PROPS')]: {
            bind: 'setProperties'
          },
          [getChannelName('REQUEST_PDF_DM_POST')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [getChannelName('SUCCESS_RESPONSE_PDF')]: {
            bind: 'success-on-get-business-documents'
          },
          [getChannelName('ERROR_RESPONSE_ON_GET_BD')]: {
            bind: 'error-on-get-business-documents'
          },
          [getChannelName('ERROR_POST_BD')]: {
            bind: 'error-on-post-business-documents'
          },
          [getChannelName('SUCCESS_POST_BD')]: {
            bind: 'post-business-documents-success'
          }
        }
      }
    }
  };
  const base = {
    hash: 'travel-insurance-coverages',
    currentPage: {
      url: '/travel-insurance-coverages'
    },
    pages,
    template,
    components: [
      spinner(CONFIG),
      cellsMoleculeHeader,
      cellsTextDescription,
      cellsButtonList,
      cellsAccordionStepList,
      cellsConfirmButtons,
      glomoTravelInsuranceManagerMX,
      cellsDmGlobalApisBusinessDocuments
    ]
  };

  if (isNative) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  return base;
};