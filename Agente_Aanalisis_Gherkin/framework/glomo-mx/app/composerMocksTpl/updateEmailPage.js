/* eslint-disable new-cap, no-shadow */
'use strict';

module.exports = config => {
  const page = 'updateEmailPage';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(page);
  const country = utils.getCountry(config);
  const spinner = utils.SPINNER(config);
  const ANALYTICS =  require('./analytics/_emailManagement')(config);
  const allowedPattern = '[a-zA-Z0-9-_@. ]';

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
          update_email_address_init_page: {
            bind: 'init-page'
          },
          update_email_address_reset_page: {
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
          update_email_address_set_header_title: {
            bind: 'text'
          }
        },
        out: {
          update_email_address_panel_button_link_back_step: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const mainText = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      cellsConnections: {
        in: {
          update_email_address_set_main_text_label: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const formTextMail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-field',
    familyPath: '@bbva-web-components/bbva-form-field',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      allowedPattern: allowedPattern,
      optionalLabel: '',
      cellsConnections: {
        in: {
          update_email_address_set_form_text_mail_label: {
            bind: 'optionalLabel'
          },
          update_email_address_request_mail_value: {
            bind: 'submitInput'
          },
          update_email_address_form_text_confirm_clear_input: {
            bind: 'submitInput'
          },
          update_email_address_set_mail_lower_case: {
            bind: 'value'
          },
          update_email_address_set_reset_mail_to_input: {
            bind: 'value'
          },
          update_email_address_set_error_message: {
            bind: 'errorMessage'
          },
          update_email_address_set_invalid_input: {
            bind: 'invalid'
          },
          update_email_address_set_auto_focus: {
            bind: 'focus'
          }
        },
        out: {
          update_email_address_form_text_clear_input: {
            bind: 'form-field-input-clear'
          },
          update_email_address_form_text_mail_blur: {
            bind: 'form-field-input-blur'
          },
          update_email_address_form_text_submit_mail: {
            bind: 'form-field-button-submit'
          }
        }
      }
    }
  };

  const formTextConfirmMail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-field',
    familyPath: '@bbva-web-components/bbva-form-field',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      maxlength: 80,
      allowedPattern: allowedPattern,
      disabled: true,
      optionalLabel: '',
      cellsConnections: {
        in: {
          update_email_address_set_form_text_confirm_label: {
            bind: 'optionalLabel'
          },
          update_email_address_request_confirm_value: {
            bind: 'submitInput'
          },
          update_email_address_set_reset_confirm_mail_to_input: {
            bind: 'value'
          },
          update_email_address_set_confirm_mail_lower_case: {
            bind: 'value'
          },
          update_email_address_set_disabled_input: {
            bind: 'disabled'
          },
          update_email_address_form_text_clear_input: {
            bind: 'clearInput'
          },
          update_email_address_set_confirm_error_message: {
            bind: 'errorMessage'
          },
          update_email_address_set_confirm_invalid_input: {
            bind: 'invalid'
          }
        },
        out: {
          update_email_address_form_text_confirm_blur: {
            bind: 'form-field-input-blur'
          },
          update_email_address_form_text_submit_confirm: {
            bind: 'form-field-button-submit'
          },
          update_email_address_form_text_confirm_clear_input: {
            bind: 'form-field-input-clear'
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
      className: 'u-margin--1',
      cellsConnections: {
        in: {
          update_email_address_set_message_icon_message: {
            bind: 'message'
          }
        },
        out: {}
      }
    }
  };

  const headerCategory = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    properties: {
      text: '',
      cellsConnections: {
        in: {
          update_email_address_set_header_category_label: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const noticeText = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      cellsConnections: {
        in: {
          update_email_address_set_notice_text_label: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const noticeLink = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-link',
    familyPath: '@bbva-web-components/bbva-link',
    render: 'litElement',
    properties: {
      text: '',
      className: 'u-margin--1',
      cellsConnections: {
        in: {
          update_email_address_set_notice_link_label: {
            bind: 'text'
          }
        },
        out: {
          update_email_address_link_clicked: {
            bind: 'click'
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
      buttonDisabled: true,
      cellsConnections: {
        in: {
          update_email_address_set_panel_button_text: {
            bind: 'buttonText'
          },
          update_email_address_set_panel_button_link: {
            bind: 'footerLink'
          },
          update_email_address_set_enabled_button: {
            bind: 'buttonDisabled'
          }
        },
        out: {
          update_email_address_panel_button_item_click: {
            bind: 'panel-button-fixed-item-click'
          },
          update_email_address_panel_button_link_back_step: {
            bind: 'panel-button-fixed-footer-link-click'
          }
        }
      }
    }
  };

  const updateEmailDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-add-email',
    familyPath: '@glomo-web-components/bbva-manager-email-management',
    render: 'litElement',
    properties: {
      cellsConnections: {
        params: {
          customerId: 'global_user_id'
        },
        in: {
          global_user_id: {
            bind: 'userId'
          },
          navigation_profile_to_update_email: {
            bind: 'setUserDetail'
          },
          bbva_security_update_email_management: {
            bind: 'setUserDetail'
          },
          blue_redirect_update_email: {
            bind: 'setUserDetail'
          },
          update_email_address_init_page: {
            bind: 'setPageTranslations'
          },
          update_email_address_reset_page: {
            bind: 'reset'
          },
          update_email_address_link_clicked: {
            bind: 'privacyNoticeCheck'
          },
          update_email_address_form_text_mail_blur: {
            bind: 'requestMail'
          },
          update_email_address_form_text_confirm_blur: {
            bind: 'requestConfirmMail'
          },
          update_email_address_form_text_submit_mail: {
            bind: 'setMail'
          },
          update_email_address_form_text_submit_confirm: {
            bind: 'setConfirmMail'
          },
          update_email_address_panel_button_link_back_step: {
            bind: 'exitOperative'
          },
          update_email_address_panel_button_item_click: {
            bind: 'prepareRequest'
          },
          update_email_address_post_contact_details_error: {
            bind: 'serviceError'
          },
          update_email_address_post_validate_contact_error: {
            bind: 'serviceError'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'exitOperative'
          }
        },
        out: {
          update_email_address_set_header_title: {
            bind: 'set-update-email-address-header-title'
          },
          update_email_address_set_main_text_label: {
            bind: 'set-update-email-address-main-text-label'
          },
          update_email_address_set_reset_mail_to_input: {
            bind: 'set-update-mail-address-reset-mail-to-input'
          },
          update_email_address_set_reset_confirm_mail_to_input: {
            bind: 'set-update-mail-address-reset-confirm-mail-to-input'
          },
          update_email_address_set_form_text_mail_label: {
            bind: 'set-update-email-address-form-text-mail-label'
          },
          update_email_address_set_form_text_confirm_label: {
            bind: 'set-update-email-address-form-text-confirm-label'
          },
          update_email_address_set_message_icon_message: {
            bind: 'set-update-email-address-message-icon-message'
          },
          update_email_address_set_header_category_label: {
            bind: 'set-update-email-address-header-category-label'
          },
          update_email_address_set_notice_text_label: {
            bind: 'set-update-email-address-notice-text-label'
          },
          update_email_address_set_notice_link_label: {
            bind: 'set-update-email-address-notice-link-label'
          },
          update_email_address_set_panel_button_text: {
            bind: 'set-update-email-address-panel-button-text'
          },
          update_email_address_set_panel_button_link: {
            bind: 'set-update-email-address-panel-button-link'
          },
          update_email_address_request_mail_value: {
            bind: 'update-email-address-request-mail-value'
          },
          update_email_address_request_mail_enable_input: {
            bind: 'update-email-address-enable-input'
          },
          update_email_address_request_confirm_value: {
            bind: 'update-email-address-request-confirm-value'
          },
          global_alert_manager_open_with_settings: {
            bind: 'update-email-address-send-modal-config'
          },
          update_email_address_set_mail_lower_case: {
            bind: 'update-email-address-mail-to-lower-case'
          },
          update_email_address_set_confirm_mail_lower_case: {
            bind: 'update-email-address-confirm-mail-to-lower-case'
          },
          update_email_address_set_error_message: {
            bind: 'update-email-address-set-error-message'
          },
          update_email_address_set_invalid_input: {
            bind: 'update-email-address-set-invalid-input'
          },
          update_email_address_set_disabled_input: {
            bind: 'update-email-address-set-disabled-input'
          },
          update_email_address_set_auto_focus: {
            bind: 'set-update-email-address-form-text-set-focus'
          },
          update_email_address_set_confirm_error_message: {
            bind: 'update-email-address-set-confirm-error-message'
          },
          update_email_address_set_confirm_invalid_input: {
            bind: 'update-email-address-set-invalid-confirm-input'
          },
          update_email_address_set_enabled_button: {
            bind: 'update-email-address-enable-button'
          },
          update_email_address_set_customer_id: {
            bind: 'update-email-address-set-customer-id'
          },
          update_email_address_request_post_contact_details: {
            bind: 'update-email-address-submit-create-request'
          },
          update_email_address_request_post_validate_contact: {
            bind: 'update-email-address-submit-validate-request'
          },
          update_email_address_mail_pending_no_update: {
            bind: 'update-email-address-mail-pending-no-update'
          },
          update_email_address_set_comes_from_security_profile: {
            bind: 'set-comes-from-security-profile'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          update_email_address_set_analytics_level: {
            bind: 'set-update-email-addresss-analitycs-level',
            analytics: ANALYTICS.PAGE_VIEW_1_2
          },
          update_email_address_set_analytics_error_level: {
            bind: 'set-update-email-addresss-analitycs-error-level',
            analytics: ANALYTICS.PAGE_VIEW_6
          }
        }
      }
    }
  };

  const globalApisCustomer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
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
          update_email_address_request_post_contact_details: {
            bind: 'postContactDetails'
          }
        },
        out: {
          update_email_address_post_contact_details_success: {
            bind: 'post-contact-detail-success',
            link: {
              page: 'validateEmailPage'
            }
          },
          update_email_address_post_contact_details_error: {
            bind: 'post-contact-detail-error'
          }
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
          update_email_address_request_post_validate_contact: {
            bind: 'postValidateContact'
          }
        },
        out: {
          update_email_address_post_contact_details_success: {
            bind: 'post-validate-contact-success',
            link: {
              page: 'validateEmailPage'
            }
          },
          update_email_address_post_validate_contact_error: {
            bind: 'post-validate-contact-error'
          }
        }
      }
    }
  };

  const base = {
    hash: country + 'update-email',
    currentPage: {
      url: '/update-email',
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      header,
      spinner,
      mainText,
      formTextMail,
      formTextConfirmMail,
      notificationMessage,
      headerCategory,
      noticeText,
      noticeLink,
      panelButton,
      updateEmailDm,
      globalApisCustomer,
      globalApisCustomerMx
    ]
  };

  const signConnector = require('./common/_sign-connector')(config)(base);

  signConnector('cells-dm-global-apis-customers-bgadpmock', page, ['post-contact-detail-success', 'post-contact-detail-success']);
  signConnector('cells-dm-global-apis-customers-mx-bgadpmock', page, ['post-validate-contact-success', 'post-validate-contact-error']);

  return base;
};
