'use strict';

module.exports = CONFIG => {
  const prefix = 'DOMICILIATION_NOTICE_SUCCESS';
  const pageName = 'domiciliationNoticeSuccess,';
  const {
    SPINNER: spinner,
    getLanguage,
    getLocalCurrency,
    getCountry
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : ''
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    properties: {
      variant: 'modal-three-level',
      className: isNativeIos ? 'u-padding-top--0' : '',
      text: 'domiciliation-notice-tdd-decline-subscription-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          [prefix + '_RESET']: {
            bind: 'header-main-icon-right-primary-click'
          },
          go_to_dashboard: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const panelIcon = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      id: 'div_info',
      microillustration: 'success',
      heading: 'domiciliation-notice-successful-tdd-subscription-panel-heading'
    }
  };
  const panelText = {
    zone: 'div_info.',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'div',
      alignment: 'center',
      size: 'S',
      text: 'domiciliation-notice-successful-tdd-subscription-panel-text'
    }
  };
  const panelTextSecond = {
    zone: 'div_info.',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'div',
      alignment: 'center',
      size: 'S',
      text: 'domiciliation-notice-successful-tdd-subscription-panel-text-I'
    }
  };
  const detailOperationTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-text--all-caps u-padding-right--1 u-padding-left--1',
      fontWeight: '500',
      text: 'domiciliation-notice-successful-tdd-subscription-detail-operation-title'
    }
  };
  const invoice = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-invoice',
      label: 'domiciliation-notice-successful-tdd-subscription-list-simple-invoice-label',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          [prefix + '_SET_INVOICE_DESCRIPTION']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const amount = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-amount',
      label: 'domiciliation-notice-successful-tdd-subscription-list-simple-amount-label',
      descriptionMedium: true,
      language: getLanguage(),
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [prefix + '_SET_AMOUNT']: {
            bind: 'amount'
          }
        }
      }
    }
  };
  const termination = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-termination',
      descriptionMedium: true,
      visibleChars: '4',
      maskChars: '•',
      cellsConnections: {
        in: {
          [prefix + '_SET_TERMINATION_LABEL']: {
            bind: 'label'
          },
          [prefix + '_SET_TERMINATION_DESCRIPTION']: {
            bind: 'mask'
          }
        }
      }
    }
  };
  const serviceProvider = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-service-provider',
      label: 'domiciliation-notice-successful-tdd-subscription-list-simple-service-provider-label',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          [prefix + '_SET_SERVICE_PROVIDER_DESCRIPTION']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const reference = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-reference',
      label: 'domiciliation-notice-successful-tdd-subscription-list-simple-reference-label',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          [prefix + '_SET_REFERENCE_DESCRIPTION']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const shareButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-row',
    familyPath: '@bbva-web-components/bbva-button-row',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          DOMICILIATION_NOTICE_SUCCESS_SET_SHARE_BUTTON_CONFIG: {
            bind: 'options'
          }
        },
        out: {
          [prefix + '_SHARED_TICKET']: {
            bind: 'click'
          }
        }
      }
    }
  };
  const divFooterContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'div_footer',
      className: 'u-display--center'
    }
  };
  const exitButton = {
    zone: 'div_footer.slot-content',
    type: 'UI',
    tag: 'bbva-button-default',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    properties: {
      className: `${isNativeIos ? 'u-padding-top--0 u-padding-bottom--0 ' : ''} u-margin--1`,
      text: 'domiciliation-notice-tdd-finish-subscription-button-exit',
      cellsConnections: {
        out: {
          go_to_dashboard: {
            bind: 'click',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-confirmation-consumption-card-dm',
    properties: {
      cellsConnections: {
        in: {
          [prefix + '_RESET']: {
            bind: 'reset'
          },
          set_direct_debit_receipt: {
            bind: 'handleDirectDebitReceipt'
          },
          DOMICILIATION_NOTICE_SUCCESS_RECIPIENT_CAPTURE: {
            bind: 'shareReceipt'
          },
          [prefix + '_SHARED_TICKET']: {
            bind: 'shareDirectDebitReceipt'
          }
        },
        out: {
          set_direct_debit_operation: {
            bind: 'set-operative-receipt'
          },
          [prefix + '_SET_DIRECT_DEBIT_RECEIPT']: {
            bind: 'set-direct-debit-config'
          },
          global_action_launcher_share_image: {
            bind: 'domiciliation-notice-tdd-share-receipt'
          }
        }
      }
    }
  };
  const shareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    properties: {
      country: getCountry(),
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      sharedReceiptStyles: {
        sectionTitle: {
          'margin-bottom': 'rem(32px)'
        },
        fieldTitle: {
          'margin-top': 'rem(8px)',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'color': 'var(--bbva-600, #121212)'
        },
        fieldValue: {
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)'
        }
      },
      cellsConnections: {
        in: {
          [prefix + '_RESET']: {
            bind: 'reset'
          },
          set_direct_debit_operation: {
            bind: 'captureReceipt'
          },
          [prefix + '_SET_DIRECT_DEBIT_RECEIPT']: {
            bind: 'result'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          DOMICILIATION_NOTICE_SUCCESS_RECIPIENT_CAPTURE: {
            bind: 'receipt-captured'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };
  const base = {
    hash: 'mx-domiciliation-notice-success',
    currentPage: {
      url: '/' + pageName
    },
    pages,
    template: template,
    components: [
      spinner(CONFIG),
      header,
      panelIcon,
      panelText,
      panelTextSecond,
      detailOperationTitle,
      invoice,
      amount,
      termination,
      serviceProvider,
      reference,
      shareButton,
      divFooterContainer,
      exitButton,
      manager,
      shareGenericReceipt
    ]
  };
  return base;
};