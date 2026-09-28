'use strict';
module.exports = (CONFIG) => {
  const { SPINNER: spinner, headerHeight } = require('./common/helpers/_utils');
  const appSpinner = spinner(CONFIG);
  const mainPageName = 'assistanceManager';
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(mainPageName);
  const customersApiVersion = CONFIG.globalServices.versions.customers;
  const pageName = 'assistanceManagerEmail';
  const analyticsAssistanceManager = require('./analytics/_assistanceManager');
  const literals = require('./analytics/common/_literals.js');
  const isNative = CONFIG.native || false;
  const requiredToken = CONFIG.globalServices.requiredToken || 'tsec';
  const host = CONFIG.globalServices.host;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, mainPageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const zoneBackground = isSpherica ? 'formInput' : 'app__main';

  appSpinner.tagSpherica = 'cells-spinner-veil-spherica';
  appSpinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const base = {
    currentPage: {
      url: '/assistance-manager-email'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        animationType: 'fade',
        drawerWidth: '100%',
        disableScrollLock: true,
        footerFixed: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: headerHeight,
        iOSFixedHeader: isNativeIos,
        className: 'dark-blue-bg',
        cellsConnections: {
          in: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: {
        hasFooter: true,
        footerHeight: 80
      }
    },

    components: [
      appSpinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'assistanceManagerEmail',
          private: true,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cache: [mainPageName, 'assistanceManagerEmail'],
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_assistanceManagerEmail: {
                bind: 'init'
              }
            },
            out: {
              assistance_manager_init_page: {
                bind: 'init-page'
              },
              assistance_manager_reset_page: {
                bind: 'reset'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main',
        tagSpherica: 'bbva-header-main-spherica',
        familyPath: '@bbva-web-components/bbva-header-main',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'assistanceManagerPage',
          text: 'assistant-manager-mail-text',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            out: {
              assistance_header_main_back_step: {
                bind: 'header-main-icon-right-primary-click',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'modal-initial',
          class: 'primary',
          ambient: 'primary-alt',
          rightButtons: [
            {
              icon: 'coronita:close',
              label: 'bbva-help-modal-close-button',
              accessibilityText: 'bbva-help-modal-close-button',
              defaultEventIconName: 'header-main-icon-right-primary-click'
            }
          ]
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-customers',
        properties: {
          host: host,
          requiredToken: requiredToken,
          customersApiVersion: customersApiVersion,
          headers: { 'Accept-Language': 'es' },
          native: isNative,
          cellsConnections: {
            in: {
              assistance_manager_email_customer_id: {
                bind: 'customerId'
              },
              assistance_manager_email_get_remote_manager_info: {
                bind: 'getBusinessAgent'
              },
              assistance_request_contacts: {
                bind: 'getCustomerContacts'
              },
              assistance_request_email_unmasked: {
                bind: 'getCustomerContacts'
              }
            },
            out: {
              assistance_manager_email_response_success_remote_manger_info: {
                bind: 'success-on-set-business-agent'
              },
              assistance_manager_email_response_error_remote_manger_info: {
                bind: 'error-on-get-business-agent'
              },
              assistance_manager_email_response_success_remote_contacts: {
                bind: 'set-customer-contacts'
              },
              assistance_manager_email_response_error_email_unmask: {
                bind: 'error-on-get-customer-contacts'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-notifications',
        properties: {
          host: host,
          native: isNative,
          requiredToken: requiredToken,
          subscriptionsApiVersion: CONFIG.globalServices.notifications,
          cellsConnections: {
            in: {
              assistance_manager_email_customer_id: {
                bind: 'customerId'
              },
              REQUEST_SEND_EMAIL_MESSAGE_CHANNEL: {
                bind: 'sendNotification'
              }
            },
            out: {
              MESSAGE_RESPONSE_SUCCES_POST: {
                bind: 'post-notification-success'
              },
              MESSAGE_RESPONSE_ERROR_POST: {
                bind: 'error-on-post-notification'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-link',
        familyPath: '@bbva-web-components/bbva-list-link',
        render: 'litElement',
        properties: {
          complex: true,
          cellsConnections: {
            in: {
              assistance_send_header_text_title_destination: {
                bind: 'headerText'
              }
            }
          }
        },
        propertiesSpherica: {
          hidden: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-link',
        tagSpherica: 'bbva-aggregation-link-list-spherica',
        familyPath: '@bbva-web-components/bbva-list-link',
        familyPathSpherica: '@glomo-web-components/bbva-aggregation-link-list-spherica',
        render: 'litElement',
        properties: {
          noHeaderLink: true,
          complex: true,
          cellsConnections: {
            in: {
              assistance_send_header_text_destination: {
                bind: 'headerText'
              },
              assistance_send_header_description_destination: {
                bind: 'headerDescription'
              }
            }
          }
        },
        propertiesSpherica: {
          newCellsConnections: {
            add: {
              in: {
                assistance_link_list_data: {
                  bind: 'linkList'
                }
              },
              out: {
                assistance_show_email_spherica: {
                  bind: 'aggregation-link-list-click'
                }
              }
            }
          },
          variant: 'primary-alt',
          linkTextAlignment: 'center',
          className: 'u-margin-bottom--0 u-padding-bottom--0',
          headerColor: '#070E46'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-divider',
        familyPath: '@bbva-web-components/bbva-divider',
        render: 'litElement',
        properties: {
          className: 'bold',
          size: 'full'
        },
        propertiesSpherica: {
          hidden: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-link',
        familyPath: '@bbva-web-components/bbva-list-link',
        render: 'litElement',
        properties: {
          complex: true,
          cellsConnections: {
            in: {
              assistance_send_header_text_title_sender: {
                bind: 'headerText'
              }
            }
          }
        },
        propertiesSpherica: {
          hidden: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-link',
        familyPath: '@bbva-web-components/bbva-list-link',
        render: 'litElement',
        properties: {
          noHeaderLink: true,
          complex: true,
          cellsConnections: {
            in: {
              assistance_send_header_text_sender: {
                bind: 'headerText'
              },
              assistance_send_header_description_sender: {
                bind: 'headerDescription'
              },
              assistance_send_link_text_sender: {
                bind: 'linkText'
              }
            },
            out: {
              assistance_show_email: {
                bind: 'click'
              }
            }
          }
        },
        propertiesSpherica: {
          hidden: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-divider',
        familyPath: '@bbva-web-components/bbva-divider',
        render: 'litElement',
        properties: {
          className: 'bold',
          size: 'full'
        },
        propertiesSpherica: {
          hidden: true
        }
      },
      isSpherica && {
        zone: 'app__main',
        type: 'UI',
        tagSpherica: 'div',
        render: 'litElement',
        propertiesSpherica: {
          id: 'formInput',
          className: 'bg-secondary100 u-margin--grid u-border-radius--1 u-padding-top--1'
        }
      },
      {
        zone: zoneBackground,
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin--grid',
          text: 'assistance-manager-email-text',
          size: 'S'
        },
        propertiesSpherica: {
          className: 'u-margin--grid',
          size: 'S',
          fontType: 'title',
          tag: 'span'
        }
      },
      {
        zone: zoneBackground,
        type: 'UI',
        tag: 'bbva-form-input',
        tagSpherica: 'bbva-form-input-spherica',
        familyPath: '@bbva-spherica-components/bbva-form-input',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin--1 u-margin-bottom--0',
          autoValidate: true,
          helpIcon: 'bbva:help',
          type: 'textarea',
          label: 'assistance-manager-email-label-text',
          cellsConnections: {
            in: {
              assitance_manager_send_reset_form_input: {
                bind: 'value'
              }
            },
            out: {
              assistance_manager_get_message: {
                bind: 'form-input-value-change'
              }
            }
          }
        }
      },
      {
        zone: zoneBackground,
        type: 'UI',
        tag: 'bbva-notification-help',
        familyPath: '@bbva-web-components/bbva-notification-help',
        render: 'litElement',
        properties: {
          className: 'u-margin--1 u-margin-top--0 u-margin-bottom--2',
          cellsConnections: {
            in: {
              assistance_manager_info_notification_text: {
                bind: 'text'
              },
              assistance_manager_icon_notification_text: {
                bind: 'icon'
              }
            }
          }
        },
        propertiesSpherica: {
          icon: 'spherica:info'
        }
      },
      {
        zone: 'app__footer',
        type: 'UI',
        tag: 'bbva-button-default',
        tagSpherica: 'bbva-button-default-spherica',
        familyPath: '@bbva-web-components/bbva-button-default',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          disabled: true,
          cellsConnections: {
            in: {
              assitance_manager_class_button_email: {
                bind: 'className'
              },
              assitance_manager_text_button_email: {
                bind: 'text'
              },
              assitance_manager_variant_button_email: {
                bind: 'variant'
              },
              assitance_manager_disabled_button_email: {
                bind: 'disabled'
              }
            },
            out: {
              assistance_manager_button_click: {
                bind: 'click'
              }
            }
          }
        },
        propertiesSpherica: {
          fullwidth: true,
          className: 'u-margin--grid u-margin-bottom--0-5 u-margin-top--0-5 u-max-width--2',
          text: 'assistance-manager-get-email-payload-button-text',
          variant: 'basic'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-assistance-manager',
        familyPath: '@glomo-web-components/bbva-manager-assistance',
        render: 'litElement',
        properties: {
          currentPage: 'managerAssistanceEmail',
          cellsConnections: {
            in: {
              assistance_manager_init_page: {
                bind: 'init'
              },
              global_client_id: {
                bind: 'clientId'
              },
              global_login_success_indicators: {
                bind: 'setDetailCustomer'
              },
              assistance_manager_email_response_success_remote_manger_info: {
                bind: 'setRemoteManagerInfo'
              },
              assistance_manager_email_response_error_remote_manger_info: {
                bind: 'errorOnGetBusinessAgent'
              },
              assistance_manager_button_click: {
                bind: 'sendEmail'
              },
              assistance_manager_get_message: {
                bind: 'getFormInputValue'
              },
              assistance_show_email: {
                bind: 'showEmail'
              },
              MESSAGE_RESPONSE_SUCCES_POST: {
                bind: 'responseSuccesPostEmail'
              },
              assistance_manager_email_response_success_remote_contacts: {
                bind: 'setCustomerContacts'
              },
              assistance_manager_modal_button_clicked: {
                bind: 'helpModalError'
              },
              assistance_manager_email_response_error_email_unmask: {
                bind: 'errorOnGetCustomerContacts'
              }
            },
            out: {
              assistance_manager_email_customer_id: {
                bind: 'send-customerId'
              },
              assistance_manager_email_get_remote_manager_info: {
                bind: 'get-remote-manager-info'
              },
              assistance_request_contacts: {
                bind: 'get-customer-contacts'
              },
              assitance_manager_disabled_button_email: {
                bind: 'send-disabled-button-email'
              },
              assistance_manager_modal_header: {
                bind: 'send-header-text'
              },
              assistance_manager_modal_full_height: {
                bind: 'send-full-height'
              },
              assistance_manager_modal_header_type: {
                bind: 'send-header-type'
              },
              assistance_manager_modal_fixed_footer: {
                bind: 'send-fixed-footer'
              },
              assistance_manager_modal_cole_elements: {
                bind: 'send-close-elements'
              },
              assistance_manager_modal_button_text: {
                bind: 'send-button-text'
              },
              assistance_manager_modal_link_text: {
                bind: 'send-link-text'
              },
              assitance_manager_modal_title_icon: {
                bind: 'send-title-icon'
              },
              assistance_manager_modal_title_text: {
                bind: 'send-title-text'
              },
              assistance_manager_modal_body_text: {
                bind: 'send-body-text'
              },
              assistance_manager_modal_type: {
                bind: 'send-modal-type'
              },
              assistance_manager_email_modal_open: {
                bind: 'modal-open-error-bussines-agent'
              },
              assistance_manager_email_modal_open_post_message: {
                bind: 'modal-open-error-post-message'
              },
              REQUEST_SEND_EMAIL_MESSAGE_CHANNEL: {
                bind: 'send-email-message-data'
              },
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'close-spinner'
              },
              assistance_request_email_unmasked: {
                bind: 'request-email-unmasked'
              },
              global_alert_manager_open_with_settings: {
                bind: 'show-global-alert-manager-settings'
              },
              assistance_manager_info_notification_text: {
                bind: 'send-text-notification-help'
              },
              assistance_manager_icon_notification_text: {
                bind: 'send-icon-notification-help'
              },
              assitance_manager_send_reset_form_input: {
                bind: 'send-reset-form-input'
              },
              assitance_manager_text_button_email: {
                bind: 'send-text-button-email'
              },
              assitance_manager_variant_button_email: {
                bind: 'send-variant-button-email'
              },
              assitance_manager_class_button_email: {
                bind: 'send-class-button-email'
              },
              assistance_send_header_text_title_destination: {
                bind: 'send-header-text-title-destination'
              },
              assistance_send_header_text_destination: {
                bind: 'send-header-text-destination'
              },
              assistance_send_header_description_destination: {
                bind: 'send-header-description-destination'
              },
              assistance_send_header_text_title_sender: {
                bind: 'send-header-text-title-sender'
              },
              assistance_send_header_text_sender: {
                bind: 'send-header-text-sender'
              },
              assistance_send_header_description_sender: {
                bind: 'send-header-description-sender'
              },
              assistance_send_link_text_sender: {
                bind: 'send-link-text-sender'
              },
              assistance_manager_email_close_modal: {
                bind: 'close-help-modal'
              },
              assistance_manager_email_image_modal: {
                bind: 'send-image-modal'
              },
              assistance_manager_email_modal_open_email_sended: {
                bind: 'modal-open-email-sended'
              },
              assistance_manager_email_hidden_slots: {
                bind: 'send-hidden-slots'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              in: {
                assistance_show_email_spherica: {
                  bind: 'showEmail'
                }
              },
              out: {
                assistance_link_list_data: {
                  bind: 'send-link-list-data'
                },
                assistance_manager_modal_body_text_spherica: {
                  bind: 'send-body-text-spherica'
                },
                assistance_manager_modal_body_email_spherica: {
                  bind: 'send-body-email-spherica'
                }
              }
            },
            remove: {
              in: [
                'assistance_show_email'
              ],
              out: [
                'assistance_send_header_description_sender',
                'assitance_manager_class_button_email',
                'assitance_manager_text_button_email',
                'assitance_manager_variant_button_email',
                'assistance_manager_icon_notification_text',
                'assistance_send_header_text_destination',
                'assistance_send_header_description_destination',
                'assistance_send_header_text_title_sender',
                'assistance_send_header_text_title_destination',
                'assistance_send_header_text_sender',
                'assistance_send_link_text_sender',
                'assistance_manager_modal_type',
                'assistance_manager_modal_header_type'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytics-manager-assistance-manager',
        familyPath: '@glomo-web-components/bbva-manager-assistance',
        render: 'litElement',
        properties: {
          currentPage: 'assistance-manager-email',
          cellsConnections: {
            in: {
              assistance_manager_init_page: {
                bind: 'firePageView'
              },
              assistance_manager_email_modal_open_email_sended: {
                bind: 'firePageViewSendedEmail'
              }
            },
            out: {
              assistance_manager_email_page_view: {
                bind: 'analytics-page-view-assistance-manager-email',
                analytics:
                analyticsAssistanceManager._getAdvancedFootprintWithLevel2(literals.actions.mark,
                  literals.sections.assistantManager.sendEmail, literals.levels.level1.help)
              },
              assistance_manager_email_sended: {
                bind: 'analytics-page-view-sended-email',
                analytics:
                analyticsAssistanceManager._getAdvancedFootprintWithLevel2(literals.actions.mark,
                  literals.sections.assistantManager.sendEmailSuccess, literals.levels.level1.help)
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        tagSpherica: 'bbva-help-modal-spherica',
        familyPath: '@bbva-web-components/bbva-help-modal',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        container: true,
        properties: {
          id: 'assistanceManagerModal',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            in: {
              assistance_manager_email_close_modal: {
                bind: 'close'
              },
              assistance_manager_modal_header: {
                bind: 'headerText'
              },
              assistance_manager_modal_full_height: {
                bind: 'fullHeight'
              },
              assistance_manager_modal_header_type: {
                bind: 'headerType'
              },
              assistance_manager_modal_fixed_footer: {
                bind: 'fixedFooter'
              },
              assistance_manager_email_close_elements_modal_email_sended: {
                bind: 'closeModalElements'
              },
              assistance_manager_email_modal_open_email_sended: {
                bind: 'open'
              },
              assistance_manager_modal_cole_elements: {
                bind: 'closeModalElements'
              },
              assistance_manager_modal_button_text: {
                bind: 'buttonText'
              },
              assitance_manager_modal_title_icon: {
                bind: 'titleIcon'
              },
              assistance_manager_modal_link_text: {
                bind: 'linkText'
              },
              assistance_manager_email_modal_open: {
                bind: 'open'
              },
              assistance_manager_modal_type: {
                bind: 'modalType'
              },
              assistance_manager_email_modal_open_post_message: {
                bind: 'open'
              }
            },
            out: {
              assistance_manager_modal_button_clicked: {
                bind: 'help-modal-footer-button-click',
                backStep: true
              },
              assistance_manager_modal_heeader_right_primary_clicked: {
                bind: 'help-modal-header-right-primary-click',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          fullHeight: 'true',
          variant: 'modal-initial',
          ambient: 'primary-alt',
          closeLabel: 'bbva-help-modal-close-button'
        }
      },
      {
        zone: 'assistanceManagerModal.slot-content-header',
        type: 'UI',
        tag: 'bbva-banner-image',
        tagSpherica: 'bbva-clip-microillustration-spherica',
        familyPath: '@bbva-web-components/bbva-banner-image',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        attributes: {
          variant: 'large'
        },
        properties: {
          className: 'u-margin-top--0 u-margin-bottom--0',
          hidden: true,
          imageSrc: './images/assistanceManager/send_email.svg',
          cellsConnections: {
            in: {
              assistance_manager_email_hidden_slots: {
                bind: 'hidden'
              }
            }
          }
        },
        propertiesSpherica: {
          microillustration: 'sendEmail',
          type: 'glass',
          size: 'XL',
          className: 'u-display--center'
        }
      },
      {
        zone: 'assistanceManagerModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          alignment: 'center',
          fontWeight: '500',
          size: 'L',
          tag: 'span',
          cellsConnections: {
            in: {
              assistance_manager_modal_title_text: {
                bind: 'text'
              },
              assistance_manager_email_hidden_slots: {
                bind: 'hidden'
              }
            }
          }
        },
        propertiesSpherica: {
          size: '2XL',
          fontType: 'title-secondary',
          className: 'u-margin-bottom--1 u-margin--grid u-margin-top--0'
        }
      },
      {
        zone: 'assistanceManagerModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          alignment: 'center',
          size: 'S',
          tag: 'span',
          cellsConnections: {
            in: {
              assistance_manager_modal_body_text: {
                bind: 'text'
              },
              assistance_manager_email_hidden_slots: {
                bind: 'hidden'
              }
            }
          }
        },
        propertiesSpherica: {
          newCellsConnections: {
            add: {
              in: {
                assistance_manager_modal_body_text_spherica: {
                  bind: 'text'
                }
              }
            }
          }
        }
      },
      isSpherica && {
        zone: 'assistanceManagerModal.slot-content',
        type: 'UI',
        tagSpherica: 'bbva-type-text-spherica',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        propertiesSpherica: {
          className: 'u-text--bold',
          alignment: 'center',
          size: 'M',
          tag: 'span',
          fontType: 'body',
          fontWeight: '500',
          newCellsConnections: {
            add: {
              in: {
                assistance_manager_modal_body_email_spherica: {
                  bind: 'text'
                }
              }
            }
          }
        }
      }
    ]
  };
  const singConnector = require('./common/_sign-connector')(CONFIG)(base);
  singConnector('cells-dm-global-apis-customers', pageName, [
    'set-customer-contacts',
    'error-on-get-customer-contacts'
  ]);
  return sphericaPageUtils.spherize(base);
};
