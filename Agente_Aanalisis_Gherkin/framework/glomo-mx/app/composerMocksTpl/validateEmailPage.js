/* eslint-disable camelcase, new-cap, no-shadow */
'use strict';

module.exports = config => {
  const page = 'validateEmailPage';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(page);
  const country = utils.getCountry(config);
  const spinner = utils.SPINNER(config);
  const ANALYTICS =  require('./analytics/_emailManagement')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, page);
  const isSpherica = sphericaPageUtils.isSpherica();
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          validate_email_address_open_modal_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_validate_email_request_new_code: {
            bind: 'alert-VALIDATE-EMAIL-ADDRESS-ASK-NEW-CODE-accept'
          },
          global_validate_email_cancel: {
            bind: 'alert-UPDATE-EMAIL-PENDING-VALIDATION-cancel',
            backStep: true
          }
        }
      }
    }
  };

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
      private: false,
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
          validate_email_address_init_page: {
            bind: 'init-page',
            analytics: ANALYTICS.PAGE_VIEW_3
          },
          validate_email_address_reset_page: {
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
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          validate_email_address_set_header_title: {
            bind: 'text'
          }
        },
        out: {
          validate_email_address_back_action: {
            bind: 'header-main-icon-right-primary-click',
            analytics: ANALYTICS.PAGE_VIEW_8
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
      microillustration: 'pending',
      className: 'u-margin-bottom--1',
      cellsConnections: {
        in: {
          validate_email_address_set_panel_info_heading: {
            bind: 'heading'
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
      className: 'u-margin-bottom--2',
      alignment: 'center',
      fontStyle: 'italic',
      fontWeight: '700',
      tag: 'div',
      cellsConnections: {
        in: {
          validate_email_address_set_text_date_label: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const textInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      alignment: 'center',
      className: 'u-margin--1 u-margin-bottom--2',
      text: '',
      cellsConnections: {
        in: {
          validate_email_address_set_text_info_label: {
            bind: 'text'
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
      alignment: 'center',
      cellsConnections: {
        in: {
          validate_email_address_set_text_folio_label: {
            bind: 'text'
          },
          validate_email_address_set_text_folio_color: {
            bind: 'textColor'
          }
        },
        out: {}
      }
    }
  };

  const textNumFolio = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'div',
      alignment: 'center',
      className: 'u-margin-bottom--1',
      text: '',
      cellsConnections: {
        in: {
          validate_email_address_set_text_folio_number_label: {
            bind: 'text'
          }
        },
        out: {}
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
      sticky: true,
      show: true,
      cellsConnections: {
        in: {
          validate_email_address_set_panel_button_text: {
            bind: 'buttonText'
          },
          validate_email_address_set_panel_button_link: {
            bind: 'footerLink'
          }
        },
        out: {
          validate_email_address_panel_button_click: {
            bind: 'panel-button-fixed-item-click'
          },
          validate_email_address_panel_button_footer_click: {
            bind: 'panel-button-fixed-footer-link-click',
            analytics: ANALYTICS.PAGE_VIEW_8
          }
        }
      }
    }
  };

  const validateEmailDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-validate-email',
    familyPath: '@glomo-web-components/bbva-manager-email-management',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          update_email_address_mail_pending_no_update: {
            bind: 'noUpdateMail'
          },
          update_email_address_post_contact_details_success: {
            bind: 'response'
          },
          validate_email_address_init_page: {
            bind: 'setPageTranslations'
          },
          validate_email_address_reset_page: {
            bind: 'reset'
          },
          validate_email_address_panel_button_click: {
            bind: 'handleClick'
          },
          validate_email_address_panel_button_footer_click: {
            bind: 'pendingValidationModal'
          },
          validate_email_address_back_action: {
            bind: 'pendingValidationModal'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'pendingValidationModal'
          },
          validate_email_address_post_validate_contact_error: {
            bind: 'invalidCode'
          },
          validate_email_address_post_validate_contact_invalid_mail_token: {
            bind: 'invalidCode'
          },
          validate_email_address_post_validate_contact_invalid_otp: {
            bind: 'invalidCode'
          },
          sign_email_modal_submit_otp_mail: {
            bind: 'prepareRequest'
          },
          sign_email_modal_get_new_mail: {
            bind: 'sendNewOtp'
          },
          global_validate_email_request_new_code: {
            bind: 'sendNewOtp'
          },
          sign_email_modal_cancelled: {
            bind: 'resetState'
          }
        },
        out: {
          validate_email_address_set_header_title: {
            bind: 'set-validate-email-address-header-title'
          },
          validate_email_address_set_panel_info_heading: {
            bind: 'set-validate-email-address-panel-info-heading'
          },
          validate_email_address_set_text_date_label: {
            bind: 'set-validate-email-address-text-date-label'
          },
          validate_email_address_set_text_info_label: {
            bind: 'set-validate-email-address-text-info-label'
          },
          validate_email_address_set_text_folio_label: {
            bind: 'set-validate-email-address-text-folio-label'
          },
          validate_email_address_set_text_folio_color: {
            bind: 'set-validate-email-address-text-folio-color'
          },
          validate_email_address_set_text_folio_number_label: {
            bind: 'set-validate-email-address-text-folio-number-label'
          },
          validate_email_address_set_panel_button_text: {
            bind: 'set-validate-email-address-panel-button-text'
          },
          validate_email_address_set_panel_button_link: {
            bind: 'set-validate-email-address-panel-button-link'
          },
          validate_email_address_request_post_validate_contact: {
            bind: 'validate-email-address-request-post-validate-contact'
          },
          validate_email_address_reset_state: {
            bind: 'set-validate-email-address-reset-state'
          },
          sign_email_modal_open: {
            bind: 'set-validate-email-address-open-sign-modal',
            analytics: ANALYTICS.PAGE_VIEW_4
          },
          sign_email_modal_close: {
            bind: 'set-validate-email-address-close-sign-modal'
          },
          sign_email_modal_close_spinner: {
            bind: 'validate-email-address-close-spinner-sign-modal'
          },
          global_alert_manager_open_with_settings: {
            bind: 'update-email-address-send-modal-config'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            validate_email_address_open_modal_spherica: {
              bind: 'update-email-address-send-modal-config'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const globalApisCustomerMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      customersApiVersion: config.globalServices.versions.customersV1,
      cellsConnections: {
        in: {
          update_email_address_set_customer_id: {
            bind: 'customerId'
          },
          validate_email_address_request_post_validate_contact: {
            bind: 'postValidateContact'
          },
          validate_email_address_reset_state: {
            bind: 'authenticationState'
          }
        },
        out: {
          sign_email_modal_close: {
            bind: 'post-validate-contact-success',
            link: {
              page: 'validatedEmailSuccess'
            }
          },
          validate_email_address_post_validate_contact_error: {
            bind: 'post-validate-contact-error',
            analytics: ANALYTICS.PAGE_VIEW_7
          },
          validate_email_address_post_validate_contact_invalid_mail_token: {
            bind: 'signature-invalid-soft-token-error',
            analytics: ANALYTICS.PAGE_VIEW_7
          },
          validate_email_address_post_validate_contact_invalid_otp: {
            bind: 'signature-invalid-dm',
            analytics: ANALYTICS.PAGE_VIEW_7
          }
        }
      }
    }
  };

  const sign_modal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-sign-operation-modal',
    tagSpherica: 'cells-sign-operation-modal-spherica',
    properties: {
      className: (config.nativeIos || false) ? 'auto-softoken ios-top-padding' : 'auto-softoken',
      iOSFixedHeader: config.nativeIos,
      resetOnClose: true,
      showAppPss: true,
      enableSpinner: true,
      keepOnAccept: true,
      clearOnClose: true,
      clearPwdIcon: 'coronita:close',
      imgSrc: 'images/otp/otp-sms.png',
      togglePwdIcon: 'coronita:visualize',
      togglePwdIconToggled: 'coronita:hide',
      cellsConnections: {
        in: {
          sign_email_modal_open: {
            bind: 'openWithSettings'
          },
          sign_email_modal_close: {
            bind: 'close'
          },
          sign_email_modal_close_spinner: {
            bind: 'closeSpinner'
          }
        },
        out: {
          sign_email_modal_cancelled: {
            bind: 'cells-sign-operation-cancelled'
          },
          sign_email_modal_submit_otp_mail: {
            bind: 'cells-sign-operation-submit-otp-mail'
          },
          sign_email_modal_get_new_mail: {
            bind: 'cells-sign-operation-get-new-mail'
          }
        }
      }
    },
    propertiesSpherica: {
      textIconClose: 'common-header-button-close',
      className: `auto-softoken validate-email ${config.nativeIos ? 'ios-top-padding' : ''}`
    }
  };

  const base = {
    hash: country + 'validate-email',
    currentPage: {
      url: '/validate-email',
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      header,
      spinner,
      panelInfo,
      textDate,
      textInfo,
      textFolio,
      textNumFolio,
      panelButton,
      validateEmailDm,
      globalApisCustomerMx,
      sign_modal
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
