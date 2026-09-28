'use strict';

module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    getLanguage,
    getLocalCurrency,
    createSpinner
  } = require('./common/helpers/_utils');
  const {
    globalServices: {host, requiredToken = 'tsec', versions: {accounts}},
    native = false,
    nativeIos = false
  } = CONFIG;
  const pageName = 'ocCarLoanRequestDetails';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const [ getChannelName ] = useNames(createPrefixFromPageName(pageName));
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const {
    getPageView
  } =  require('./analytics/_ocCarLoan')();
  const spinner = createSpinner(CONFIG);
  spinner.properties.className = 'solid-spinner';

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
          __bridge_page_ocCarLoanRequestDetails: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('request_details_init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('request_details_reset_page')]: {
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

  const notificationToastCopied = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-notification-toast',
    tag: 'bbva-notification-toast',
    render: 'litElement',
    properties: {
      autoHide: true,
      type: 'success',
      fixedBottom: true,
      iconExplainer: 'bbva:right',
      alertText: 'bbva-manager-card-dynamic-cvv-toast-copy',
      duration: 3000,
      cellsConnections: {
        in: {
          [getChannelName('show_toast_notification')]: {
            bind: 'show'
          }
        }
      }
    }
  };

  const cellsClipboardManager = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-clipboard-manager',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('view_modal_toast')]: {
            bind: 'text'
          }
        },
        out: {
          [getChannelName('clipboard_success')]: {
            bind: 'text-copied'
          },
          [getChannelName('clipboard_error')]: {
            bind: 'clipboard-error'
          }
        }
      }
    }
  };

  const cellsDmApiLoans = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-loans',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          ch_oc_car_loan_set_proposal_id: {
            bind: 'proposalId'
          },
          [getChannelName('set_api_version_request_detail')]: {
            bind: 'loansApiVersion'
          },
          [getChannelName('request_proposal_proposal')]: {
            bind: 'getProposal'
          },
          [getChannelName('request_proposal_goods')]: {
            bind: 'getProposalGoods'
          },
          [getChannelName('request_proposal_merchants')]: {
            bind: 'getProposalMerchants'
          }
        },
        out: {
          [getChannelName('get_proposal_success_detail')]: {
            bind: 'get-proposal'
          },
          [getChannelName('get_proposal_error')]: {
            bind: 'error-on-get-proposal'
          },
          [getChannelName('get_proposal_goods_success_request_detail')]: {
            bind: 'get-proposal-goods'
          },
          [getChannelName('get_proposal_goods_error')]: {
            bind: 'error-on-get-proposal-goods'
          },
          [getChannelName('get_proposal_merchants_success_request_detail')]: {
            bind: 'get-proposal-merchants'
          },
          [getChannelName('get_proposal_merchants_error')]: {
            bind: 'error-on-get-proposal-merchants'
          }
        }
      }
    }
  };

  const ocCarLoanDM = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
    tag: 'bbva-request-details-manager-oc-car-loan',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getChannelName('request_details_init_page')]: {
            bind: 'startRequest'
          },
          [getChannelName('view_modal')]: {
            bind: 'setModalType'
          },
          [getChannelName('view_modal_toast')]: {
            bind: 'setModalToast'
          },
          [getChannelName('open_modal_link')]: {
            bind: 'recreativeCredit'
          },
          [getChannelName('get_proposal_success_detail')]: {
            bind: 'merchantsRequest'
          },
          [getChannelName('get_proposal_goods_success_request_detail')]: {
            bind: 'handleGoodsResponse'
          },
          [getChannelName('get_proposal_merchants_success_request_detail')]: {
            bind: 'handleMerchantsResponse'
          },
          [getChannelName('get_proposal_error')]: {
            bind: 'detailsRequestError'
          },
          [getChannelName('get_proposal_goods_error')]: {
            bind: 'detailsRequestError'
          },
          [getChannelName('get_proposal_merchants_error')]: {
            bind: 'detailsRequestError'
          }
        },
        out: {
          [getChannelName('set_api_version_request_detail')]: {
            bind: 'set-api-version-request-detail'
          },
          [getChannelName('request_proposal_proposal')]: {
            bind: 'get-request-proposal',
            analytics: getPageView('DETAILS', 'prestamos', 'firma prestamo vehicular', 'detalle de solicitud')
          },
          [getChannelName('request_proposal_merchants')]: {
            bind: 'get-request-proposal-merchants'
          },
          [getChannelName('request_proposal_goods')]: {
            bind: 'get-request-proposal-goods'
          },
          [getChannelName('refinancing_text')]: {
            bind: 'ch-oc-car-loan-refinancing-text'
          },
          [getChannelName('refinancing_text_hide')]: {
            bind: 'ch-oc-car-loan-refinancing-hide'
          },
          [getChannelName('show_toast_notification')]: {
            bind: 'set-show-notification-toast'
          },
          [getChannelName('set_alert_text')]: {
            bind: 'set-title-text-toast'
          },
          [getChannelName('set_notification_toast_text')]: {
            bind: 'set-notification-toast-text'
          },
          [getChannelName('set_header_text')]: {
            bind: 'set-header-text'
          },
          [getChannelName('set_tittle_text')]: {
            bind: 'set-title-text'
          },
          [getChannelName('set_body_text')]: {
            bind: 'set-body-text'
          },
          [getChannelName('open_full_modal')]: {
            bind: 'open-full-modal'
          },
          [getChannelName('open_middle_modal')]: {
            bind: 'open-middle-modal'
          },
          [getChannelName('complete_info')]: {
            bind: 'ch-oc-car-loan-old-info'
          },
          [getChannelName('info_section_life_insurance')]: {
            bind: 'ch-oc-car-loan-set-info-section-insurance-life'
          },
          [getChannelName('info_section_damage_insurance')]: {
            bind: 'ch-oc-car-loan-set-info-section-insurance-damage'
          },
          [getChannelName('property_hidden_damage_insurance')]: {
            bind: 'ch-oc-car-loan-hidden-section-damage'
          },
          [getChannelName('section_rates_costs_info')]: {
            bind: 'ch-oc-car-loan-section-rates-costs'
          },
          [getChannelName('section_cat_informative')]: {
            bind: 'cat-informative'
          },
          [getChannelName('analytics_modals')]: {
            bind: 'analytics-modals',
            analytics: getPageView('MODALS', 'prestamos', 'firma prestamo vehicular', 'detalle de solicitud')
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          [getChannelName('set_button_text')]: {
            bind: 'set-button-text'
          },
          global_retry_error: {
            bind: 'details-retry-error'
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
      text: 'bbva-request-details-oc-car-loan-main-header',
      iconRightPrimary: 'bbva:close',
      variant: 'modal-three-level',
      accessibilityTextIconRightPrimary: 'Close',
      cellsConnections: {
        out: {
          [getChannelName('request_details_exit_page')]: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const detailCreditTitle = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    tag: 'bbva-header-category',
    render: 'litElement',
    attributes: {
      'hide-padding-bottom': true,
      'hide-padding-top': true
    },
    properties: {
      className: 'u-margin-top--1',
      text: 'bbva-oc-car-loan-deatil-credit'
    }
  };

  const detailCredit = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      showHeaderText: false,
      className: 'u-margin-bottom--0-5 u-margin-top--0-5 ',
      cellsConnections: {
        in: {
          [getChannelName('complete_info')]: {
            bind: 'config'
          }
        },
        out: {
          [getChannelName('view_modal')]: {
            bind: 'view-modal'
          },
          [getChannelName('view_modal_toast')]: {
            bind: 'set-notification-toast-text'
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
      size: 'full'
    }
  };

  const getInsuranceLifeTitle = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    tag: 'bbva-header-category',
    render: 'litElement',
    properties: {
      className: 'u-margin-top--0-5',
      text: 'bbva-oc-car-loan-life-insurance'
    }
  };

  const getInsuranceLife = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--0-5 u-margin-top--0-5 ',
      showHeaderText: false,
      cellsConnections: {
        in: {
          [getChannelName('info_section_life_insurance')]: {
            bind: 'config'
          }
        },
        out: {
          [getChannelName('view_modal')]: {
            bind: 'view-modal'
          }
        }
      }
    }
  };

  const getInsuranceDamageTitle = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    tag: 'bbva-header-category',
    render: 'litElement',
    properties: {
      className: 'u-margin-top--0-5',
      text: 'bbva-oc-car-loan-damage-insurance',
      cellsConnections: {
        in: {
          [getChannelName('property_hidden_damage_insurance')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const getInsuranceDamage = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--0-5 u-margin-top--0-5 ',
      showHeaderText: false,
      cellsConnections: {
        in: {
          [getChannelName('info_section_damage_insurance')]: {
            bind: 'config'
          },
          [getChannelName('property_hidden_damage_insurance')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('view_modal')]: {
            bind: 'view-modal'
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
      cellsConnections: {
        in: {
          [getChannelName('property_hidden_damage_insurance')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const getRatesCostsTitle = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    tag: 'bbva-header-category',
    render: 'litElement',
    properties: {
      className: 'u-margin-top--0-5',
      text: 'bbva-oc-car-loan-fees-and-costs'
    }
  };

  const getRatesCosts = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    tag: 'bbva-aggregation-simple-list',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--0-5 u-margin-top--0-5 ',
      showHeaderText: false,
      cellsConnections: {
        in: {
          [getChannelName('section_rates_costs_info')]: {
            bind: 'config'
          }
        },
        out: {
          [getChannelName('view_modal')]: {
            bind: 'view-modal'
          }
        }
      }
    }
  };

  const dividerSmall = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-divider',
    tag: 'bbva-divider',
    render: 'litElement',
    properties: {
      size: 'small center'
    }
  };

  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-notification-message',
    tag: 'bbva-notification-message',
    render: 'litElement',
    attributes: {
      'hide-bottom-padding-link': true
    },
    properties: {
      fullHeight: true,
      fixedFooter: true,
      message: 'bbva-request-details-oc-car-loan-notification-text',
      linkTitle: 'bbva-request-details-oc-car-loan-notification-link',
      className: 'u-margin--1',
      cellsConnections: {
        out: {
          [getChannelName('open_modal_link')]: {
            bind: 'notification-message-link-click'
          }
        }
      }
    }
  };

  const informativeText = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'ambient-color': 'secondary500'
    },
    properties: {
      alignment: 'center',
      tag: 'span',
      className: 'highlight-font-size--typographyTypeLarge u-margin--1',
      size: 'S',
      cellsConnections: {
        in: {
          [getChannelName('section_cat_informative')]: {
            bind: 'text'
          }
        }
      }
    }
  };

  const informativeTextRefinancing = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'ambient-color': 'secondary500'
    },
    properties: {
      alignment: 'center',
      tag: 'span',
      className: 'highlight-font-size--typographyTypeLarge u-margin--1',
      size: 'S',
      cellsConnections: {
        in: {
          [getChannelName('refinancing_text')]: {
            bind: 'text'
          },
          [getChannelName('refinancing_text_hide')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const helpFullModal = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-help-modal',
    tag: 'bbva-help-modal',
    render: 'litElement',
    container: true,
    attributes: {
      'hide-content-padding-top': 'true'
    },
    properties: {
      id: 'fullModal',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal-three-level',
      titleIcon: 'bbva:help',
      cellsConnections: {
        in: {
          [getChannelName('set_header_text')]: {
            bind: 'headerText',
            previousState: false
          },
          [getChannelName('set_tittle_text')]: {
            bind: 'titleText',
            previousState: false
          },
          [getChannelName('set_button_text')]: {
            bind: 'buttonText'
          },
          [getChannelName('set_body_text')]: {
            bind: 'bodyText',
            previousState: false
          },
          [getChannelName('open_full_modal')]: {
            bind: 'open'
          },
          native_back_button_clicked_close_modal: {
            bind: 'close'
          }
        },
        out: {
          cells_to_native_modal_opened: {
            'bind': 'help-modal-open',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            'bind': 'help-modal-close',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const fullModalText = {
    zone: 'fullModal.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      inherit: 'true',
      'font-weight': '300'
    },
    properties: {
      alignment: 'center',
      cellsConnections: {
        in: {
          [getChannelName('set_body_text')]: {
            bind: 'text',
            previousState: false
          }
        }
      }
    }
  };

  const helpMiddleModal = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-help-modal',
    tag: 'bbva-help-modal',
    render: 'litElement',
    attributes: {
      'hide-content-padding-top': 'true'
    },
    properties: {
      titleIcon: 'bbva:help',
      cellsConnections: {
        in: {
          [getChannelName('set_tittle_text')]: {
            bind: 'titleText',
            previousState: false
          },
          [getChannelName('set_body_text')]: {
            bind: 'bodyText',
            previousState: false
          },
          [getChannelName('open_middle_modal')]: {
            bind: 'open'
          },
          [getChannelName('set_button_text')]: {
            bind: 'buttonText'
          },
          native_back_button_clicked_close_modal: {
            bind: 'close'
          }
        },
        out: {
          cells_to_native_modal_opened: {
            'bind': 'help-modal-open',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            'bind': 'help-modal-close',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const ocCarLoanRequestDetails = {
    hash: 'oc-car-loan-request-details',
    currentPage: {
      url: '/ocCarLoanRequestDetails'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      header,
      detailCreditTitle,
      detailCredit,
      notificationToastCopied,
      divider,
      getInsuranceLifeTitle,
      getInsuranceLife,
      getInsuranceDamageTitle,
      getInsuranceDamage,
      dividerOptional,
      getRatesCostsTitle,
      getRatesCosts,
      dividerSmall,
      informativeText,
      informativeTextRefinancing,
      notificationMessage,
      helpFullModal,
      fullModalText,
      helpMiddleModal,
      ocCarLoanDM,
      cellsClipboardManager,
      cellsDmApiLoans
    ]
  };

  addRetryErrors(ocCarLoanRequestDetails)([
    {
      id: 'OC-CAR-LOAN-TRACKING-SERVICE-ERROR-REQUEST',
      acceptRetry: { bind: 'trackingRequestError', component: 'bbva-request-details-manager-oc-car-loan' }
    }
  ]);

  return ocCarLoanRequestDetails;
};
