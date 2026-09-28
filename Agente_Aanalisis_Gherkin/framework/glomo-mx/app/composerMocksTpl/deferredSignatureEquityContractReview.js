'use strict';
module.exports = config => {
  const product = 'deferredSignatureEquityContractReview';
  const pages = require('./common/_pages')(config)(product);
  const isNativeIos = config.nativeIos || false;
  const pageDmsOutCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, product);
  const isSpherica = sphericaPageUtils.isSpherica();
  const base = {
    currentPage: {
      url: '/deferred-equity-contract-review'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'staticEver',
        className: isNativeIos ? 'ios-top-padding checkup-padding-bottom' : 'checkup-padding-bottom',
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
            deferredSignatureEquityContract_SHOW_SUCCESSFUL_CONTRACTING_PAGE: {
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
      pageName: 'deferredSignatureEquityContractReview',
      cache: [ '' ],
      tokenName: config.globalServices.requiredToken || 'tsec',
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
      text: 'deferred-signature-equity',
      cellsConnections: {
        out: {
          [product + '_SUCCESS_BACK_REQUEST_RESET']: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          },
          [product + '_SUCCESS_RESET']: {
            bind: 'header-main-icon-right-primary-click'
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
      heading: 'deferred-signature-information-product-contract-success-title',
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
          [product + '_SET_DATE_CONTRACT_EQUITY_SUCCES']: {
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
          [product + '_SET_LIST_CONTRACT_SUCCES']: {
            bind: 'config'
          },
          [product + '_SET_LIST_CONTRACT_RESET']: {
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
      message: 'deferred-signature-information-product-contract-success-email-desc',
      cellsConnections: {
        in: {
          [product + '_SET_EMAIL_CONTRACT_EQUITY_SUCCES']: {
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
          [product + '_SUCCESS_BACK_REQUEST_RESET']: {
            bind: 'panel-button-fixed-item-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
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
          [product + '_SUCCESS_BACK_REQUEST']: {
            bind: 'goBack'
          },
          [product + '_SUCCESSFUL_CLICK_PRIMARY']: {
            bind: 'goBack'
          }
        },
        out: {
          [product + '_NAVIGATE_TO_PREVIOUS_PAGE']: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };
  const bbvaManagerDeferred = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-deferred-signature-equity-success',
    familyPath: '@glomo-web-components/bbva-manager-deferred-signature',
    render: 'litElement',
    properties: {
      className: 'margin-dark-background',
      additionalInfoClass: 'additional-info-m',
      cellsConnections: {
        in: {
          deferredSignatureEquityContract_SHOW_SUCCESSFUL_CONTRACTING_PAGE: {
            bind: 'sendListContractEquitySucces'
          }
        },
        out: {
          [product + '_SET_DATE_CONTRACT_EQUITY_SUCCES']: {
            bind: 'set-success-date-deferred-equity-contract'
          },
          [product + '_SET_EMAIL_CONTRACT_EQUITY_SUCCES']: {
            bind: 'set-success-email-deferred-equity-contract'
          },
          [product + '_SET_LIST_CONTRACT_SUCCES']: {
            bind: 'set-success-list-deferred-equity-contract'
          },
          [product + '_SET_LIST_CONTRACT_RESET']: {
            bind: 'set-reset-list-deferred-equity-contract'
          },
          [product + '_SET_HEADING_CONTRACT_SUCCESS']: {
            bind: 'set-success-heading-deferred-product-contract'
          }
        }
      }
    }
  };
  const equityContractTicket = {
    zone: 'app__main',
    type: 'UI',
    tagSpherica: 'bbva-multistep-deferred-signature-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-deferred-signature-spherica',
    render: 'litElement',
    propertiesSpherica: {
      headerText: 'deferred-signature-equity',
      isIOSFixedHeaderModal: isNativeIos,
      isSuccessModal: true,
      newCellsConnections: {
        add: {
          in: {
            deferredSignatureEquityContractReview_SET_LIST_CONTRACT_SUCCES: {
              bind: 'successListSection'
            },
            deferredSignatureEquityContractReview_SET_EMAIL_CONTRACT_EQUITY_SUCCES: {
              bind: 'emailCustomer'
            }
          },
          out: {
            deferredSignatureEquityContractReview_SUCCESS_BACK_REQUEST_RESET: {
              bind: 'help-modal-close-icon-click',
              link: {
                page: 'dashboard',
                cleanUntil: 'dashboard'
              }
            },
            close_control_veil: {
              bind: 'help-modal-close-icon-click'
            }
          }
        }
      }
    }
  };
  base.components.push(
    handleLifeCycle,
    navigationHandler,
    bbvaManagerDeferred
  );
  if (isSpherica) {
    base.components.push(
      equityContractTicket
    );
  } else {
    base.components.push(
      headerMain,
      panelInfo,
      textDate,
      aggregationList,
      notificationMessage,
      defaultButton
    );
  }
  pageDmsOutCommonErrors(base.components);

  return sphericaPageUtils.spherize(base);
};
