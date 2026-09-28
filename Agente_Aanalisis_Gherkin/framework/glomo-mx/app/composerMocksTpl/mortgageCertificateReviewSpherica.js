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
  const requiredDocumentsList = [
    'mortgage-certificate-review-document-1', 'mortgage-certificate-review-document-2',
    'mortgage-certificate-review-document-3', 'mortgage-certificate-review-document-4',
    'mortgage-certificate-review-document-5', 'mortgage-certificate-review-document-6-spherica'
  ];

  const considerations = [
    'mortgage-certificate-review-consideration-1',
    'mortgage-certificate-review-consideration-2',
    'mortgage-certificate-review-consideration-3'
  ];

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          mortgage_certificate_review_confirm_cancellation: {
            bind: 'alert-MORTGAGE-CANCELLATION-accept'
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: '',
      headerFixed: true
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: page,
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
    tag: 'bbva-header-main-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      text: 'mortgage-certificate-review-header-title',
      rightButtons: [ {
        id: 'btn-close',
        name: 'Close',
        icon: 'spherica:close',
        label: 'bbva-header-main-close-aria-label',
        accessibilityText: 'bbva-help-modal-close-button',
        defaultEventIconName: 'header-main-icon-right-primary-click'
      } ],
      cellsConnections: {
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
    tag: 'bbva-panel-info-spherica',
    familyPath: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      hidePaddingBottom: true,
      microillustration: 'homeSearch',
      variant: 'primary-alt',
      className: 'u-margin--1',
      alignText: 'left',
      headingLevelTitle: 'h3',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_panel_info_heading: {
            bind: 'heading'
          },
          mortgage_certificate_review_set_panel_info_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const certificateFile = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-file-spherica',
    familyPath: '@glomo-web-components/bbva-list-file-spherica',
    render: 'litElement',
    properties: {
      withBackground: true,
      variant: 'primary-alt',
      className: 'u-margin--1',
      icon: 'spherica:pdf',
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
    tag: 'bbva-list-file-spherica',
    familyPath: '@glomo-web-components/bbva-list-file-spherica',
    render: 'litElement',
    properties: {
      withBackground: true,
      variant: 'primary-alt',
      className: 'u-margin--1',
      icon: 'spherica:pdf',
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
    tag: 'bbva-header-category-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      hasHelp: true,
      text: 'mortgage-certificate-review-certificate-details-title',
      className: 'u-margin--grid',
      cellsConnections: {
        out: {
          mortgage_certificate_review_help_click: {
            bind: 'header-category-help-click'
          }
        }
      }
    }
  };

  const textAmountContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'amountContainer',
      className: 'u-display--space-between u-margin--grid u-margin-bottom--1'
    }
  };

  const textAmountTitle = {
    zone: 'amountContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      tag: 'span',
      text: 'mortgage-certificate-review-text-amount-title'
    }
  };

  const textAmount = {
    zone: 'amountContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    attributes: {
      'font-weight': '500'
    },
    properties: {
      tag: 'span',
      fontType: 'body',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_amount_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const textTermContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'termContainer',
      className: 'u-display--space-between u-margin--grid u-margin-bottom--1'
    }
  };

  const textTermTitle = {
    zone: 'termContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      tag: 'span',
      text: 'mortgage-certificate-review-text-term-title'
    }
  };

  const textTerm = {
    zone: 'termContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    attributes: {
      'font-weight': '500'
    },
    properties: {
      tag: 'span',
      fontType: 'body',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_term_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const textTypeContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    properties: {
      id: 'typeContainer',
      className: 'u-display--space-between u-margin--grid u-margin-bottom--1'
    }
  };

  const textTypeTitle = {
    zone: 'typeContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      tag: 'span',
      text: 'mortgage-certificate-review-text-purpose-title'
    }
  };

  const textType = {
    zone: 'typeContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    attributes: {
      'font-weight': '500'
    },
    properties: {
      tag: 'span',
      fontType: 'body',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_purpose_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const textDateContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    properties: {
      id: 'dateContainer',
      className: 'u-display--space-between u-margin--grid u-margin-bottom--1'
    }
  };

  const textDateTitle = {
    zone: 'dateContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      tag: 'span',
      text: 'mortgage-certificate-review-text-validity-title'
    }
  };
  const textDate = {
    zone: 'dateContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    attributes: {
      'font-weight': '500'
    },
    properties: {
      tag: 'span',
      fontType: 'body',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_expiration_date_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const textFolioContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    properties: {
      id: 'folioContainer',
      className: 'u-display--space-between u-margin--grid u-margin-bottom--1'
    }
  };

  const textFolioTitle = {
    zone: 'folioContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      tag: 'span',
      text: 'mortgage-certificate-review-text-folio-title'
    }
  };
  const textFolio = {
    zone: 'folioContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    attributes: {
      'font-weight': '500'
    },
    properties: {
      tag: 'span',
      fontType: 'body',
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_folio_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const requiredDocumentation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'mortgage-certificate-review-required-documents',
      className: 'u-margin--grid'
    }
  };

  const text = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      tag: 'p',
      text: 'mortgage-certificate-review-documents-text'
    }
  };

  const filesList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-bullet-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list-spherica',
    render: 'litElement',
    properties: {
      items: requiredDocumentsList
    }
  };

  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      bookTitle: true,
      cellsConnections: {
        in: {
          mortgage_certificate_review_set_notification_message_message: {
            bind: 'messageTitle'
          }
        }
      }
    }
  };

  const considerationsTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'mortgage-certificate-review-considerations-title',
      className: 'u-margin--grid'
    }
  };

  const considerationsList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-bullet-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list-spherica',
    render: 'litElement',
    properties: {
      items: considerations
    }
  };

  const buttonActionContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    properties: {
      id: 'buttonActionContainer',
      className: 'u-margin-bottom--1'
    }
  };

  const buttonAction = {
    zone: 'buttonActionContainer.slot-content',
    type: 'UI',
    tag: 'bbva-button-action-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      className: 'u-margin--center u-margin-top--2',
      variant: 'oval',
      ambient: 'primary-alt',
      icon: 'spherica:receipt-ko',
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

  const mortgageCertificateDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-mortgage-certificate-management',
    familyPath: '@glomo-web-components/bbva-manager-mortgage-certificate-management',
    render: 'litElement',
    properties: {
      isSpherica: true,
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
          global_alert_manager_open_with_settings_spherica: {
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
      textAmountContainer,
      textAmountTitle,
      textAmount,
      textTermContainer,
      textTermTitle,
      textTerm,
      textTypeContainer,
      textTypeTitle,
      textType,
      textDateContainer,
      textDateTitle,
      textDate,
      textFolioContainer,
      textFolioTitle,
      textFolio,
      requiredDocumentation,
      text,
      filesList,
      notificationMessage,
      considerationsTitle,
      considerationsList,
      buttonActionContainer,
      buttonAction,
      mortgageCertificateDm,
      mortgagesDp,
      glomoAlertManagerSpherica
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
