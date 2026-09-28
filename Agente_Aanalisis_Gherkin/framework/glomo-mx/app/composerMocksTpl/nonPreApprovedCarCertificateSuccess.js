'use strict';
module.exports = (config) => {
  const pageName = 'nonPreApprovedCarCertificateSuccess';
  const { getLanguage, getAlternativeFormatDate, createPrefixFromPageName, detailDownloadParams: detailDocument, getLocalCurrency } = require('./common/helpers/_utils');
  const prefix = createPrefixFromPageName(pageName);
  const template = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true,
      animationType: 'verticalUp'
    }
  };
  const headerMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    properties: {
      text: 'no-pre-approved-car-certificate-blocking-case',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      variant: 'modal',
      cellsConnections: {
        out: {
          [prefix + '_HEADER_RIGHT_ICON_TAPPED']: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              page: 'contractProductSection'
            }
          }
        }
      }
    }
  };
  const successPage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-no-pre-approved-car-certificate-success',
    familyPath: '@glomo-web-components/bbva-multistep-oc-car-loan',
    render: 'litElement',
    properties: {
      withoutHead: true,
      formatDate: getAlternativeFormatDate(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          [prefix + '_RESET']: {
            bind: 'reset'
          },
          non_pre_approved_car_certificate_DATA_INFO_COMPLETE: {
            bind: 'config'
          }
        },
        out: {
          [prefix + '_BACK_PRODUCT_SECTION_CLICK']: {
            bind: 'back-product-section-click',
            link: {
              page: 'contractProductSection'
            }
          },
          startShareReceipt: {
            bind: 'button-options'
          }
        }
      }
    }
  };
  const shareOperativeReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    attributes: {
      'max-line-width': '45'
    },
    properties: {
      country: 'mx',
      infoImage: './images/darkInfo.svg',
      language: getLanguage(),
      sharedReceiptStyles: {
        receiptTitle: {
          'margin-top': '0',
          'margin-bottom': '2.13em',
          'font-weight': '540'
        },
        sectionTitle: {
          'font-weight': '540',
          'margin-top': '1.71em',
          'margin-bottom': '0.5714em'
        },
        fieldTitle: {
          'font-weight': '400'
        },
        field: {
          'font-weight': '400'
        },
        info: {
          'margin-top': '0.9375em',
          'margin-bottom': '2em',
          'padding-top': '2em',
          'padding-bottom': '2em'
        },
        infoMessage: {
          'padding-bottom': '0',
          'margin-bottom': '0'
        }
      },
      cellsConnections: {
        in: {
          targetDataReceiptCapture: {
            bind: 'captureReceipt'
          },
          receiptDataCapture: {
            bind: 'result'
          },
          receiptDataCaptureReset: {
            bind: 'reset'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_share_receipt_error_modal: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };
  const managerCarLoan = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-non-pre-approved-car-loan',
    familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
    render: 'litElement',
    properties: {
      detailDocument,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          car_loan_send_response: {
            bind: 'objectShare'
          },
          startShareReceipt: {
            bind: 'shareReceipt'
          },
          non_pre_approved_car_certificate_DATA_INFO_COMPLETE: {
            bind: 'config'
          }
        },
        out: {
          targetDataReceiptCapture: {
            bind: 'npa-car-loan-share-receipt-capture'
          },
          receiptDataCapture: {
            bind: 'npa-car-loan-receipt-data-share'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };
  const base = {
    hash: 'nonPreApprovedCarCertificateSuccess',
    currentPage: {
      url: '/non-pre-approved-car-certificate-success'
    },
    template: template,
    components: [headerMain, successPage, shareOperativeReceipt, managerCarLoan]
  };
  return base;
};
