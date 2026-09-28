/* eslint-disable max-statements, new-cap, no-shadow */
'use strict';

module.exports = config => {
  const page = 'mortgageCertificateReview';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(page);
  const spinner = utils.SPINNER(config);
  const glomoOpenDocument = utils.glomoOpenDocument(config);
  const ANALYTICS = require('./analytics/_mortgageCertificateReview')(config);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const newSphericaPage = require('./common/helpers/_spherica')(config, page).getNewSphericaPage();
  if (newSphericaPage) {
    return newSphericaPage;
  }

  const requiredDocumentsList = [
    'mortgage-certificate-review-document-1', 'mortgage-certificate-review-document-2',
    'mortgage-certificate-review-document-3', 'mortgage-certificate-review-document-4',
    'mortgage-certificate-review-document-5', 'mortgage-certificate-review-document-6'
  ];

  const considerations = [
    'mortgage-certificate-review-consideration-1',
    'mortgage-certificate-review-consideration-2',
    'mortgage-certificate-review-consideration-3'
  ];

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true,
      cellsConnections: {}
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: page,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${page}`]: {
            bind: 'init'
          }
        },
        out: {
          mortgage_certificate_review_init_page: {
            bind: 'init-page',
            analytics: ANALYTICS.PAGE_VIEW_1
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
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'cancellation',
      cellsConnections: {
        in: {
          mortgage_certificate_review_go_to_cancellation: {
            bind: 'navigate'
          }
        },
        out: {
          mortgage_certificate_review_navigation_to_cancellation: {
            bind: 'navigation-to-cancellation',
            link: {
              page: 'mortgageCertificateCancellationSuccess'
            }
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      text: 'mortgage-certificate-review-header-title',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {},
        out: {
          mortgage_certificate_review_back_action: {
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
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      hidePaddingBottom: true,
      microillustration: 'homesearch',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_panel_info_heading: {
            bind: 'heading'
          },
          mortgage_certificate_review_set_panel_info_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const certificateFile = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-file',
    familyPath: '@bbva-web-components/bbva-list-file',
    render: 'litElement',
    properties: {
      icon: 'coronita:pdf',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_certificate_title: {
            bind: 'fileName'
          }
        },
        out: {
          mortgage_certificate_review_list_file_certificate_click: {
            bind: 'list-file-link-click',
            analytics: ANALYTICS.INTERNAL_LINK_1
          }
        }
      }
    }
  };

  const amortizationFile = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-file',
    familyPath: '@bbva-web-components/bbva-list-file',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--1 ',
      icon: 'coronita:pdf',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_amortization_title: {
            bind: 'fileName'
          }
        },
        out: {
          mortgage_certificate_review_list_file_amortization_click: {
            bind: 'list-file-link-click'
          }
        }
      }
    }
  };

  const certificateDetails = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    properties: {
      hasHelp: true,
      text: 'mortgage-certificate-review-certificate-details-title',
      cellsConnections: {
        in: {},
        out: {
          mortgage_certificate_review_help_click: {
            bind: 'header-category-help-click'
          }
        }
      }
    }
  };

  const textAmountTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-bottom--0',
      tag: 'div',
      text: 'mortgage-certificate-review-text-amount-title',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_text_titles_color: {
            bind: 'textColor'
          }
        },
        out: {}
      }
    }
  };

  const textAmount = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'div',
      className: 'u-margin--1 u-margin-bottom--1 u-margin-top--0',
      text: '',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_amount_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const textTermTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-bottom--0',
      tag: 'div',
      text: 'mortgage-certificate-review-text-term-title',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_text_titles_color: {
            bind: 'textColor'
          }
        },
        out: {}
      }
    }
  };
  const textTerm = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'div',
      className: 'u-margin--1 u-margin-bottom--1 u-margin-top--0',
      text: '',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_term_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const textTypeTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-bottom--0',
      tag: 'div',
      text: 'mortgage-certificate-review-text-purpose-title',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_text_titles_color: {
            bind: 'textColor'
          }
        },
        out: {}
      }
    }
  };

  const textType = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'div',
      className: 'u-margin--1 u-margin-bottom--1 u-margin-top--0',
      text: '',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_purpose_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const textDateTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-bottom--0',
      tag: 'div',
      text: 'mortgage-certificate-review-text-validity-title',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_text_titles_color: {
            bind: 'textColor'
          }
        },
        out: {}
      }
    }
  };

  const textDate = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'div',
      className: 'u-margin--1 u-margin-bottom--1 u-margin-top--0',
      text: '',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_expiration_date_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const textFolioTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-bottom--0',
      tag: 'div',
      text: 'mortgage-certificate-review-text-folio-title',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_text_titles_color: {
            bind: 'textColor'
          }
        },
        out: {}
      }
    }
  };

  const textFolio = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'div',
      className: 'u-margin--1 u-margin-bottom--1 u-margin-top--0',
      text: '',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_folio_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const requiredDocumentation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    properties: {
      text: 'mortgage-certificate-review-required-documents',
      cellsConnections: {}
    }
  };

  const text = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      text: 'mortgage-certificate-review-documents-text',
      cellsConnections: {}
    }
  };

  const filesList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-bullet-list',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
    render: 'litElement',
    properties: {
      items: requiredDocumentsList,
      cellsConnections: {}
    }
  };

  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    familyPath: '@bbva-web-components/bbva-notification-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_notification_message_message: {
            bind: 'message'
          }
        },
        out: {}
      }
    }
  };

  const considerationsTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    properties: {
      text: 'mortgage-certificate-review-considerations-title',
      cellsConnections: {}
    }
  };

  const considerationsList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-bullet-list',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
    render: 'litElement',
    properties: {
      items: considerations,
      cellsConnections: {}
    }
  };

  const buttonAction = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-action',
    familyPath: '@bbva-web-components/bbva-button-action',
    render: 'litElement',
    properties: {
      className: 'u-margin--center u-margin-top--2',
      icon: 'coronita:error',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_button_label: {
            bind: 'label'
          }
        },
        out: {
          mortgage_certificate_review_button_action_click: {
            bind: 'click',
            analytics: ANALYTICS.PAGE_VIEW_2
          }
        }
      }
    }
  };

  const panelButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      className: 'u-margin-top--0',
      sticky: true,
      show: true,
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_panel_button_title: {
            bind: 'buttonText'
          }
        },
        out: {
          mortgage_certificate_review_panel_button_click: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    }
  };

  const mortgageCertificateDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-mortgage-certificate-management',
    familyPath: '@glomo-web-components/bbva-manager-mortgage-certificate-management',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          mortgage_certificate_review_init_page: {
            bind: 'setPageTranslations'
          },
          mortgage_certificate_review_help_click: {
            bind: 'openCertificateDetails'
          },
          mortgage_certificate_review_button_action_click: {
            bind: 'cancelCertificate'
          },
          mortgage_certificate_review_confirm_cancellation: {
            bind: 'sendCancellationRequest'
          },
          mortgage_certificate_review_cancellation_success: {
            bind: 'setCancellationPageTranslations'
          },
          mortgage_certificate_review_cancellation_error: {
            bind: 'onResponseError'
          },
          mortgage_certificate_review_panel_button_click: {
            bind: 'leavePage'
          },
          mortgage_certificate_review_list_file_certificate_click: {
            bind: 'showMortgageCertificate'
          },
          mortgage_certificate_review_list_file_amortization_click: {
            bind: 'showAmortizationSchedule'
          },
          mortgage_certificate_review_set_expiration_date_text: {
            bind: 'certificateValidityDate'
          },
          mortgage_certificate_review_navigation_from_contract_product_section: {
            bind: 'certificateDetails'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'leavePage'
          }
        },
        out: {
          mortgage_certificate_review_set_panel_info_heading: {
            bind: 'mortgage-certificate-review-set-panel-info-heading'
          },
          mortgage_certificate_review_set_panel_info_text: {
            bind: 'mortgage-certificate-review-set-panel-info-text'
          },
          mortgage_certificate_review_set_certificate_title: {
            bind: 'mortgage-certificate-review-set-certificate-title'
          },
          mortgage_certificate_review_set_amortization_title: {
            bind: 'mortgage-certificate-review-set-amortization-title'
          },
          mortgage_certificate_review_set_text_titles_color: {
            bind: 'mortgage-certificate-review-set-text-titles-color'
          },
          mortgage_certificate_review_set_notification_message_message: {
            bind: 'mortgage-certificate-review-set-notification-message-message'
          },
          mortgage_certificate_review_set_button_label: {
            bind: 'mortgage-certificate-review-set-button-label'
          },
          mortgage_certificate_review_set_panel_button_title: {
            bind: 'mortgage-certificate-review-set-panel-button-title'
          },
          mortgage_certificate_review_send_request_cancellation: {
            bind: 'mortgage-certificate-review-request-cancellation'
          },
          mortgage_certificate_cancellation_set_panel_button_title: {
            bind: 'mortgage-certificate-cancellation-set-panel-button-title'
          },
          mortgage_certificate_cancellation_set_date: {
            bind: 'mortgage-certificate-cancellation-set-date'
          },
          mortgage_certificate_cancellation_set_icon_message: {
            bind: 'mortgage-certificate-cancellation-set-icon-message'
          },
          mortgage_certificate_review_go_to_cancellation: {
            bind: 'mortage-certificate-review-navigate-to-cancellation-success'
          },
          mortgage_certificate_review_do_back_step: {
            bind: 'mortage-certificate-review-do-back-step',
            backStep: true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'mortgage-certificate-management-send-modal-config'
          },
          global_retry_error: {
            bind: 'mortage-certificate-review-retry-error'
          },
          global_open_document_base64: {
            bind: 'mortgage-certificate-show-certificate-file'
          }
        }
      }
    }
  };

  const mortgagesDp =  {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-mortgages',
    familyPath: '@glomo-web-components/bbva-dataprovider-mortgages',
    render: 'litElement',
    properties: {
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: 'tsec',
      cellsConnections: {
        in: {
          mortgage_certificate_review_send_request_cancellation: {
            bind: 'patchMortgageProposal'
          }
        },
        out: {
          mortgage_certificate_review_cancellation_success: {
            bind: 'patch-mortgage-proposal-v0-success'
          },
          mortgage_certificate_review_cancellation_error: {
            bind: 'patch-mortgage-proposal-v0-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mortgage-certificate-review',
    currentPage: {
      url: '/mortgage-certificate-review',
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      spinner,
      header,
      panelInfo,
      certificateFile,
      amortizationFile,
      certificateDetails,
      textAmountTitle,
      textAmount,
      textTermTitle,
      textTerm,
      textTypeTitle,
      textType,
      textDateTitle,
      textDate,
      textFolioTitle,
      textFolio,
      requiredDocumentation,
      text,
      filesList,
      notificationMessage,
      considerationsTitle,
      considerationsList,
      buttonAction,
      panelButton,
      mortgageCertificateDm,
      mortgagesDp
    ]
  };

  addRetryErrors(base)([
    {
      id: 'mortgage-certificate-cancellation-retry-error',
      acceptRetry: { bind: 'close', component: 'bbva-manager-mortgage-certificate-management' },
      acceptCallForHelp: { bind: 'leavePage', component: 'bbva-manager-mortgage-certificate-management' }
    }
  ]);

  if (config.native) {
    base.components.push(glomoOpenDocument);
  }

  return base;
};
