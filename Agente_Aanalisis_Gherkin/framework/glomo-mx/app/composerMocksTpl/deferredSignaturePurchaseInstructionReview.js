'use strict';
module.exports = config => {
  const productName = 'deferredSignaturePurchaseInstructionReview';
  const pages = require('./common/_pages')(config)(productName);
  const {
    nativeIos = false
  } = config;
  const pageDmsOutCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const base = {
    currentPage: {
      url: '/deferred-signature-purchase-instruction-review'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'staticEver',
        className: nativeIos ? 'ios-top-padding checkup-padding-bottom' : 'checkup-padding-bottom',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        extraHeaderClass: 'dark-blue-bg',
        delayScroll: 0,
        fixOffsetScroll: 0,
        headerFixed: true,
        footerFixed: true,
        handleStoppedScroll: true,
        preventScrollWithOverlay: true,
        cellsConnections: {
          in: {
            SHOW_SUCCESSFUL_PURCHASE_INSTRUCTION_PAGE: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: []
  };
  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: productName,
      cache: [ '' ],
      tokenName: config.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + productName]: {
            bind: 'init'
          }
        },
        out: {
          [productName + '_RESET_PAGE']: {
            bind: 'reset'
          },
          [productName + '_INIT_PAGE']: {
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
      text: 'deferred-signature-instruction',
      cellsConnections: {
        out: {
          SUCCESS_PURCHASE_INSTRUCTION_BACK_REQUEST_RESET: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'deferredSignaturePurchaseInstructionReview'
            }
          }
        }
      }
    }
  };
  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      heading: 'deferred-signature-purchase-instruction-contract-success-title',
      headingLevelTitle: 'h3',
      microillustration: 'success'
    }
  };
  const textDate = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      className: 'u-margin-bottom--2',
      alignment: 'center',
      fontStyle: 'italic',
      fontWeight: '700',
      tag: 'div',
      cellsConnections: {
        in: {
          [productName + '_SET_DATE_CONTRACT_PRODUCT_SUCCES']: {
            bind: 'text'
          }
        }
      }
    }
  };
  const aggregationList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-simple-list',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [productName + '_SET_LIST_CONTRACT_SUCCES']: {
            bind: 'config'
          },
          [productName + '_SET_LIST_CONTRACT_RESET']: {
            bind: 'config'
          }
        }
      }
    }
  };
  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    familyPath: '@bbva-web-components/bbva-notification-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-bottom--1-5',
      message: 'deferred-signature-structured-purchase-instruction-products-review-message',
      cellsConnections: {
        in: {
          [productName + '_SET_EMAIL_CONTRACT_STRUCTURED_SUCCES']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const defaultButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      show: true,
      className: 'no-gradient',
      buttonText: 'deferred-signature-modal-error-btn-cancel',
      cellsConnections: {
        out: {
          SUCCESS_PURCHASE_INSTRUCTION_BACK_REQUEST_RESET: {
            bind: 'panel-button-fixed-item-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'deferredSignaturePurchaseInstructionReview'
            }
          }
        }
      }
    }
  };
  const bbvaManagerDeferred = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-deferred-signature-structured-success',
    familyPath: '@glomo-web-components/bbva-manager-deferred-signature',
    render: 'litElement',
    properties: {
      className: 'margin-dark-background',
      additionalInfoClass: 'additional-info-m',
      cellsConnections: {
        in: {
          SHOW_SUCCESSFUL_PURCHASE_INSTRUCTION_PAGE: {
            bind: 'sendListContractProductSucces'
          },
          SUCCESS_PURCHASE_INSTRUCTION_BACK_REQUEST_RESET: {
            bind: 'reset'
          }
        },
        out: {
          [productName + '_SET_DATE_CONTRACT_PRODUCT_SUCCES']: {
            bind: 'set-success-date-deferred-product-contract'
          },
          [productName + '_SET_EMAIL_CONTRACT_STRUCTURED_SUCCES']: {
            bind: 'set-success-email-deferred-product-contract'
          },
          [productName + '_SET_LIST_CONTRACT_SUCCES']: {
            bind: 'set-success-list-deferred-product-contract'
          },
          [productName + '_SET_LIST_CONTRACT_RESET']: {
            bind: 'set-reset-list-deferred-equity-contract'
          },
          [productName + 'open_control_veil']: {
            bind: 'open-control-veil'
          },
          [productName + 'close_control_veil']: {
            bind: 'close-control-veil'
          },
          [productName + '_SET_HEADING_CONTRACT_SUCCESS']: {
            bind: 'set-success-heading-deferred-product-contract'
          }
        }
      }
    }
  };
  base.components.push(
    handleLifeCycle,
    headerMain,
    panelInfo,
    textDate,
    aggregationList,
    notificationMessage,
    defaultButton,
    bbvaManagerDeferred
  );
  pageDmsOutCommonErrors(base.components);
  return base;
};