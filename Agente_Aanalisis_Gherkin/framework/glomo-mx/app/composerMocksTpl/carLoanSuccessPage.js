'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const PAGE_NAME = 'carLoanSuccessPage';
  const pages = require('./common/_pages')(CONFIG)('configureProductsPage');
  const ANALYTICS_CAR_LOAN = require('./analytics/_carLoan')(CONFIG);
  const options = [
    {
      icon: 'coronita:share',
      label: 'Compartir',
      id: 'button-1'
    }
  ];


  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'horizontal',
      disableEdgeSwipe: true,
      headerFixed: true,
      disableScrollLock: true,
      extraHeaderClass: 'bbva-core-blue',
      headerHeight: utils.headerHeight
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'carLoan',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_carLoan: {
            bind: 'init'
          }
        },
        out: {
          car_loan_page_init_page: {
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
  const navigationHandler = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          car_loan_success_back_navigate_request: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          car_loan_success_navigation_to_previous_page: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    properties: {
      text: 'Crédito automotriz',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      variant: 'modal',
      cellsConnections: {
        out: {
          car_loan_success_back_navigate_request: {
            bind: 'header-main-icon-right-primary-click'
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
      heading: 'bbva-oc-car-loan-pre-approved-heading-title',
      text: ''
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
      className: '',
      alignment: 'center',
      size: 'S',
      cellsConnections: {
        in: {
          car_loan_send_date: {
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
    attributes: {
      'description-date': ''
    },
    properties: {
      className: 'u-margin-bottom--0-5',
      cellsConnections: {
        in: {
          car_loan_send_contract_details: {
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
    attributes: {
      'description-date': ''
    },
    properties: {
      className: 'u-margin-bottom--0-5',
      cellsConnections: {
        in: {
          car_loan_send_taxes_and_cost: {
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
    attributes: {
      'description-date': ''
    },
    properties: {
      className: 'u-margin-bottom--0-5',
      cellsConnections: {
        in: {
          car_loan_send_folio: {
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
    properties: {
      className: 'u-margin--1',
      variant: 'default',
      message: 'bbva-oc-car-loan-pre-approved-notification-message',
      cellsConnections: {
        in: {
          car_loan_send_native_customer_phone: {
            bind: 'description'
          },
          car_loan_send_customer_phone: {
            bind: 'description'
          }
        }
      }
    }
  };

  const adviceText = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-definition-data',
    familyPath: '@bbva-web-components/bbva-list-definition-data',
    render: 'litElement',
    properties: {
      oneColumn: true,
      className: 'u-margin-bottom--1',
      cellsConnections: {
        in: {
          car_loan_send_description_advice: {
            bind: 'items'
          },
          car_loan_hidden_advice: {
            bind: 'hidden'
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
      options: options,
      cellsConnections: {
        out: {
          start_share: {
            bind: 'click'
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
      language: LANGUAGE,
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
          target_data: {
            bind: 'captureReceipt'
          },
          receipt_data: {
            bind: 'result'
          },
          receipt_data_reset_page: {
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

  const button = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--1-5 u-margin-bottom--1-5',
      text: 'bbva-oc-car-loan-pre-approved-exit',
      cellsConnections: {
        out: {
          car_loan_success_back_navigate_request: {
            bind: 'click'
          }
        }
      }
    }
  };

  const dm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-car-loan-pre-approved',
    familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
    render: 'litElement',
    properties: {
      otpId: 'carLoan',
      errorImage: './images/general_error.svg',
      host: CONFIG.globalServices.host,
      loansApiVersion: CONFIG.globalServices.versions.loans,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      translation: {
        NUEVO: 'new',
        SEMINUEVO: 'preowned'
      },
      cellsConnections: {
        in: {
          car_loan_send_customer_phone: {
            bind: 'receiptCustomerNumber'
          },
          car_loan_send_native_customer_phone: {
            bind: 'receiptCustomerNumber'
          },
          car_loan_send_monthly_payment: {
            bind: 'stickyData'
          },
          car_loan_send_response: {
            bind: 'objectShare'
          },
          car_loan_send_key_items: {
            bind: 'keyInfo'
          },
          global_login_success: {
            bind: 'setCustomerPhoneNumber'
          },
          dashboard_customer_email: {
            bind: 'setUserEmail'
          },
          start_share: {
            bind: 'share'
          }
        },
        out: {
          target_data: {
            bind: 'car-loan-share-receipt-capture'
          },
          receipt_data: {
            bind: 'car-loan-receipt-data-share'
          },
          analytics_receipt: {
            bind: 'car-loan-receipt-analytics-share',
            analytics: ANALYTICS_CAR_LOAN.footprintShareReceipt
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };


  const carLoanSuccessPage = {
    hash: 'car-loan-success-page',

    currentPage: {
      url: '/carLoanSuccessPage'
    },

    pages: pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      panelInfo,
      textDateTime,
      loanDetails,
      divider,
      vehicleData,
      divider,
      lifeInsurance,
      notification,
      adviceText,
      buttonAction,
      shareOperativeReceipt,
      dm,
      button
    ]
  };

  return carLoanSuccessPage;
};
