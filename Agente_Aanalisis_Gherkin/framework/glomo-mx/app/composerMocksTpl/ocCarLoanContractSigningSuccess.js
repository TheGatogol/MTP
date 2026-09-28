'use strict';

module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    getLanguage,
    getLocalCurrency
  } = require('./common/helpers/_utils');
  const {
    globalServices: {requiredToken = 'tsec'},
    nativeIos = false
  } = CONFIG;
  const pageName = 'ocCarLoanContractSigningSuccess';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const [ getChannelName ] = useNames(createPrefixFromPageName(pageName));
  const {
    appCompleted
  } =  require('./analytics/_ocCarLoan')();

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
          __bridge_page_ocCarLoanContractSigningSuccess: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('contract_signing_success_init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('contract_signing_success_reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('receipt_data_reset_page')]: {
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
          ch_oc_car_loan_contract_signing_success_exit_page: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-info',
    tag: 'bbva-panel-info',
    render: 'litElement',
    attributes: {
      'hide-padding-bottom': 'true'
    },
    properties: {
      disabledTabindex: '',
      headingLevelTitle: 'h3',
      microillustration: 'success',
      heading: 'bbva-process-success-oc-car-loan-banner-successful-contract-signing-title',
      text: 'bbva-process-success-oc-car-loan-banner-successful-contract-signing-guideline'
    }
  };

  const textDateTime = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'font-style': 'italic',
      'font-weight': '500'
    },
    properties: {
      className: 'u-margin-top--2',
      alignment: 'center',
      size: 'S',
      cellsConnections: {
        in: {
          [getChannelName('loan_date')]: {
            bind: 'text'
          }
        }
      }
    }
  };

  const divider = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-divider',
    tag: 'bbva-divider',
    render: 'litElement',
    properties: {
      size: 'small center'
    }
  };

  const loanDetails = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      showHeaderText: false,
      className: 'u-margin-bottom--1 u-margin-top--1',
      cellsConnections: {
        in: {
          [getChannelName('general_info')]: {
            bind: 'config'
          }
        }
      }
    }
  };

  const vehicleData = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      showHeaderText: false,
      className: 'u-margin-bottom--1 u-margin-top--1',
      cellsConnections: {
        in: {
          [getChannelName('vehicle_info')]: {
            bind: 'config'
          }
        }
      }
    }
  };

  const lifeInsurance = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      showHeaderText: false,
      className: 'u-margin-bottom--1 u-margin-top--1',
      cellsConnections: {
        in: {
          [getChannelName('life_insurance')]: {
            bind: 'config'
          }
        }
      }
    }
  };

  const damageInsurance = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      showHeaderText: false,
      className: 'u-margin-bottom--1 u-margin-top--1',
      cellsConnections: {
        in: {
          [getChannelName('damage_insurance')]: {
            bind: 'config'
          },
          oc_car_loan_contract_signing_hidden_damage_insurance: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const dividerOptional = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-divider',
    tag: 'bbva-divider',
    render: 'litElement',
    properties: {
      size: 'small center',
      cellsConnections: {
        in: {
          oc_car_loan_contract_signing_hidden_damage_insurance: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const feesCosts = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      showHeaderText: false,
      className: 'u-margin-top--1',
      cellsConnections: {
        in: {
          [getChannelName('fees_costs')]: {
            bind: 'config'
          }
        }
      }
    }
  };

  const notification = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-notification-message',
    tag: 'bbva-notification-message',
    render: 'litElement',
    attributes: {
      'hide-bottom-padding-paragraph': 'true'
    },
    properties: {
      className: 'u-margin--1',
      variant: 'default',
      message: 'bbva-process-success-oc-car-loan-advisor'
    }
  };

  const adviceText = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'text-color': '#666666',
      'font-weight': '300'
    },
    properties: {
      className: 'u-margin-top--2 u-margin--1 u-margin-bottom--0',
      alignment: 'center',
      tag: 'span',
      size: 'S',
      text: 'bbva-process-success-oc-car-loan-advise'
    }
  };

  const adviceDescription = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'font-weight': '500'
    },
    properties: {
      className: 'u-margin-bottom--1',
      alignment: 'center',
      tag: 'span',
      size: 'S',
      cellsConnections: {
        in: {
          [getChannelName('email')]: {
            bind: 'text'
          }
        }
      }
    }
  };

  const ocCarLoanSigningSuccessDM = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
    tag: 'bbva-signing-success-manager-oc-car-loan',
    render: 'litElement',
    properties: {
      initialHeight: 1125,
      receiptWidth: 40,
      lineHeight: 25,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          analytics_operation_folio: {
            bind: 'operationFolio'
          },
          [getChannelName('contract_signing_success_init_page')]: {
            bind: 'setSuccessDetails'
          },
          dashboard_accounts: {
            bind: 'filterAccounts'
          },
          [getChannelName('start_share')]: {
            bind: 'share'
          },
          oc_car_loan_contract_signing_success_payload: {
            bind: 'payload'
          },
          oc_car_loan_contract_signing_receipt_payload: {
            bind: 'receiptData'
          }
        },
        out: {
          [getChannelName('loan_date')]: {
            bind: 'date'
          },
          [getChannelName('general_info')]: {
            bind: 'general-info'
          },
          [getChannelName('vehicle_info')]: {
            bind: 'vehicle-data'
          },
          [getChannelName('life_insurance')]: {
            bind: 'life-insurance'
          },
          [getChannelName('damage_insurance')]: {
            bind: 'damage-insurance'
          },
          [getChannelName('fees_costs')]: {
            bind: 'fees-costs'
          },
          [getChannelName('email')]: {
            bind: 'email'
          },
          [getChannelName('target_data')]: {
            bind: 'share-receipt-capture'
          },
          [getChannelName('receipt_data')]: {
            bind: 'share-receipt-data'
          },
          [getChannelName('receipt_height')]: {
            bind: 'share-receipt-height'
          },
          [getChannelName('receipt_width')]: {
            bind: 'share-receipt-width'
          },
          [getChannelName('analytics_success_contract')]: {
            bind: 'analytics-success-contract',
            analytics: appCompleted('firma prestamo vehicular', 'prestamos', 'firma prestamo vehicular', 'pagina exitosa', 'pagina exitosa')
          },
          [getChannelName('set_button_row_options')]: {
            bind: 'set-button-row-options'
          }
        }
      }
    }
  };

  const buttonAction = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-spherica-components/bbva-button-row',
    tag: 'bbva-button-row',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('set_button_row_options')]: {
            bind: 'options'
          }
        },
        out: {
          [getChannelName('start_share')]: {
            bind: 'click'
          }
        }
      }
    }
  };

  const button = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-button-default',
    tag: 'bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-bottom--1-5 u-margin-top--1-5',
      text: 'bbva-oc-car-loan-button-continue-text',
      cellsConnections: {
        out: {
          ch_oc_car_loan_account_selection_success: {
            bind: 'click',
            backStep: true
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
    properties: {
      country: 'mx',
      infoImage: './images/darkInfo.svg',
      language: getLanguage(),
      sharedReceiptStyles: {
        receiptTitle: {
          'margin-top': '0',
          'margin-bottom': '2.13em',
          'font-weight': '400'
        },
        sectionTitle: {
          'font-weight': '400',
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
          [getChannelName('target_data')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('receipt_data')]: {
            bind: 'result'
          },
          [getChannelName('receipt_data_reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('receipt_height')]: {
            bind: 'customHeight'
          },
          [getChannelName('receipt_width')]: {
            bind: 'maxLineWidth'
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

  const ocCarLoanContractSigningSuccess = {
    hash: 'oc-car-loan-contract-signing-success',
    currentPage: {
      url: '/ocCarLoanContractSigningSuccess'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      panelInfo,
      textDateTime,
      divider,
      loanDetails,
      divider,
      vehicleData,
      divider,
      lifeInsurance,
      divider,
      damageInsurance,
      dividerOptional,
      feesCosts,
      notification,
      adviceText,
      adviceDescription,
      ocCarLoanSigningSuccessDM,
      buttonAction,
      button,
      shareOperativeReceipt
    ]
  };

  return ocCarLoanContractSigningSuccess;
};
