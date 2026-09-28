'use strict';
module.exports = (CONFIG) => {
  const { SPINNER: spinner, headerHeight } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('assistanceManager');
  const customersApiVersion = CONFIG.globalServices.versions.customers;
  const analyticsAssistanceManager = require('./analytics/_assistanceManager');

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'assistanceManager');
  const isNative = CONFIG.native || false;
  const literals = require('./analytics/common/_literals.js');
  const requiredToken = CONFIG.globalServices.requiredToken || 'tsec';
  const isSpherica = sphericaPageUtils.isSpherica();

  const base = {
    currentPage: {
      url: '/assistance-manager'
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
        rightDrawer: true,
        cellsConnections: {
          in: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'glomo-opx-template-spherica'
      })
    },

    components: [
      spinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'assistanceManager',
          private: true,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cache: ['assistanceManagerEmail', 'assistanceManager'],
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_assistanceManager: {
                bind: 'init'
              }
            },
            out: {
              assistance_section_init_page: {
                bind: 'init-page'
              },
              assistance_section_reset_page: {
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
          text: 'assistant-manager-header-title',
          iconLeftPrimary: 'coronita:return-12',
          cellsConnections: {
            out: {
              assistance_header_main_back_step: {
                bind: 'header-main-icon-left-primary-click',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          showLeftIcon: true,
          variant: 'first-level-sequential',
          leftButtons: [
            {
              id: 'btn-back',
              icon: 'spherica:back-mini',
              label: 'bbva-header-main-return-aria-label',
              accessibilityText: 'bbva-header-main-return-aria-label',
              defaultEventIconName: 'header-main-back-icon-click'
            }
          ],
          newCellsConnections: {
            add: {
              out: {
                assistance_header_main_back_step_spherica: {
                  bind: 'header-main-back-icon-click',
                  backStep: true
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-card-contact',
        tagSpherica: 'bbva-card-contact-spherica',
        familyPath: '@bbva-web-components/bbva-card-contact',
        familyPathSpherica: '@glomo-web-components/bbva-card-contact-spherica',
        render: 'litElement',
        attributes: {
          link: 'true'
        },
        properties: {
          cellsConnections: {
            in: {
              assistance_center_send_actions: {
                bind: 'actions'
              },
              assistance_center_send_name: {
                bind: 'name'
              },
              assistant_manager_send_info: {
                bind: 'info'
              },
              assistance_send_hidden: {
                bind: 'hidden'
              }
            },
            out: {
              button_row_item_clicked: {
                bind: 'button-row-item-click'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-margin--1',
          actionsEvent: 'button-row-item-click'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-message',
        tagSpherica: 'bbva-notification-message-spherica',
        familyPath: '@bbva-web-components/bbva-notification-message',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin--grid u-margin-top--0-5',
          variant: 'default',
          hidden: true,
          cellsConnections: {
            in: {
              assistant_manager_send_message: {
                bind: 'message'
              },
              assistance_manager_send_notification_icon: {
                bind: 'icon'
              },
              assistance_manager_send_notification_linkTitle: {
                bind: 'linkTitle'
              },
              assistance_send_hidden: {
                bind: 'hidden'
              }
            },
            out: {
              assistance_manager_notification_link: {
                bind: 'notification-message-link-click',
                link: {
                  page: 'personalAdvisorBenefits'
                }
              }
            }
          }
        },
        propertiesSpherica: {
          bookTitle: 'true',
          newCellsConnections: {
            add: {
              in: {
                assistant_manager_send_message_spherica: {
                  bind: 'messageTitle'
                }
              }
            },
            remove: {
              in: [
                'assistance_manager_send_notification_icon'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-assistance-manager',
        familyPath: '@glomo-web-components/bbva-manager-assistance',
        render: 'litElement',
        properties: {
          currentPage: 'managerAssistance',
          cellsConnections: {
            in: {
              assistance_section_init_page: {
                bind: 'init'
              },
              global_login_success_indicators: {
                bind: 'setDetailCustomer'
              },
              assistance_response_success_remote_customer_contacts: {
                bind: 'setCustomerContacts'
              },
              assistance_response_error_remote_customer_contacts: {
                bind: 'errorOnGetCustomerContacts'
              },
              assistance_response_success_remote_manger_info: {
                bind: 'setRemoteManagerInfo'
              },
              assistance_response_error_remote_manger_info: {
                bind: 'errorOnGetBusinessAgent'
              },
              button_row_item_clicked: {
                bind: 'buttonClicked'
              },
              assistance_section_reset_page: {
                bind: 'resetPage'
              },
              assistance_manager_email_modal_button_click: {
                bind: 'helpModalError'
              },
              global_set_app_settings: {
                bind: 'setAppSettingsParams'
              },
              link_text_item_clicked: {
                bind: 'linkButtonHelpModal'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'argsDeeplink'
              }
            },
            out: {
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'close-spinner'
              },
              assistance_manager_customer_id: {
                bind: 'send-customerId'
              },
              assistance_center_send_actions: {
                bind: 'send-actions'
              },
              assistance_center_send_name: {
                bind: 'send-name-remote-manger'
              },
              assistant_manager_send_info: {
                bind: 'send-info-remote-manager'
              },
              assistance_manager_get_remote_manager_info: {
                bind: 'get-remote-manager-info'
              },
              assistance_manager_get_customer_contacts: {
                bind: 'get-customer-contacts'
              },
              assitance_send_title_icon: {
                bind: 'send-title-icon'
              },
              assitance_send_title_text: {
                bind: 'send-title-text'
              },
              assitance_send_body_text: {
                bind: 'send-body-text'
              },
              assitance_send_button_text: {
                bind: 'send-button-text'
              },
              assitance_send_link_text: {
                bind: 'send-link-text'
              },
              assistance_send_hidden: {
                bind: 'send-hidden'
              },
              assistance_send_close_elements: {
                bind: 'send-close-elements'
              },
              assistance_send_modal_type: {
                bind: 'send-modal-type'
              },
              assistance_send_full_height: {
                bind: 'send-full-height'
              },
              assistance_send_header_type: {
                bind: 'send-header-type'
              },
              assistance_send_header_ext: {
                bind: 'send-header-text'
              },
              assistance_send_fixed_footer: {
                bind: 'send-fixed-footer'
              },
              assistance_manager_error_bussiness_agent_open_modal: {
                bind: 'modal-open-error-business-agent'
              },
              assistance_manager_open_modal: {
                bind: 'modal-open-out-hours'
              },
              assistance_manager_close_modal: {
                bind: 'close-help-modal'
              },
              assistance_send_complex: {
                bind: 'send-property-complex'
              },
              assistance_send_no_header_link: {
                bind: 'send-no-header-link'
              },
              assistant_manager_send_message: {
                bind: 'send-notification-message'
              },
              assistance_manager_send_notification_icon: {
                bind: 'send-notification-icon'
              },
              assistance_manager_send_notification_linkTitle: {
                bind: 'send-notification-linkTitle'
              },
              assistance_manager_send_link_propertie: {
                bind: 'send-link-propertie'
              },
              global_generic_with_back_navigation: {
                bind: 'show-global-alert-manager-settings'
              },
              global_action_launcher_dialer: {
                bind: 'open-call-action'
              },
              assitance_manager_navigate_email_page: {
                bind: 'navigate-email-page',
                link: {
                  page: 'assistanceManagerEmail',
                  skipHistory: true
                }
              },
              show_advisor_benefits_first_time: {
                bind: 'show-advisor-benefits-first-time',
                link: {
                  page: 'personalAdvisorBenefits'
                }
              },
              assistance_manager_error_back_step: {
                bind: 'back-page',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                assistant_manager_send_message_spherica: {
                  bind: 'send-notification-message'
                }
              }
            },
            remove: {
              out: [
                'assistant_manager_send_message'
              ]
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
        properties: {
          id: 'assistanceManagerModal',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            in: {
              assitance_send_title_icon: {
                bind: 'titleIcon'
              },
              assitance_send_title_text: {
                bind: 'titleText'
              },
              assitance_send_body_text: {
                bind: 'bodyText'
              },
              assitance_send_button_text: {
                bind: 'buttonText'
              },
              assitance_send_link_text: {
                bind: 'linkText'
              },
              assistance_send_close_elements: {
                bind: 'closeModalElements'
              },
              assistance_manager_open_modal: {
                bind: 'open'
              },
              assistance_manager_error_bussiness_agent_open_modal: {
                bind: 'open'
              },
              assistance_send_modal_type: {
                bind: 'modalType'
              },
              assistance_send_full_height: {
                bind: 'fullHeight'
              },
              assistance_send_header_type: {
                bind: 'headerType'
              },
              assistance_send_header_ext: {
                bind: 'headerText'
              },
              assistance_send_fixed_footer: {
                bind: 'fixedFooter'
              },
              assistance_manager_close_modal: {
                bind: 'close'
              }
            },
            out: {
              assistance_manager_email_modal_button_click: {
                bind: 'help-modal-footer-button-click'
              },
              link_text_item_clicked: {
                bind: 'help-modal-footer-link-click'
              }
            }
          }
        },
        propertiesSpherica: {
          closeLabel: 'assistance-manager-payload-error-business-agent-link-text'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-customers',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: requiredToken,
          customersApiVersion: customersApiVersion,
          headers: { 'Accept-Language': 'es' },
          native: isNative,
          cellsConnections: {
            in: {
              assistance_manager_customer_id: {
                bind: 'customerId'
              },
              assistance_manager_get_remote_manager_info: {
                bind: 'getBusinessAgent'
              },
              assistance_manager_get_customer_contacts: {
                bind: 'getCustomerContacts'
              }
            },
            out: {
              assistance_response_success_remote_manger_info: {
                bind: 'success-on-set-business-agent'
              },
              assistance_response_error_remote_manger_info: {
                bind: 'error-on-get-business-agent'
              },
              assistance_response_success_remote_customer_contacts: {
                bind: 'set-customer-contacts'
              }
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
          currentPage: 'assistance-manager',
          cellsConnections: {
            in: {
              assistance_section_init_page: {
                bind: 'firePageView'
              },
              assistance_manager_open_modal: {
                bind: 'firePageViewLineBbvaOutHours'
              },
              button_row_item_clicked: {
                bind: 'fireLinkActionCallPersonalAssistance'
              },
              assistance_manager_email_modal_button_click: {
                bind: 'fireLinkActionCallLineBbva'
              }
            },
            out: {
              assistance_manager_page_view: {
                bind: 'analytics-page-view-assistance-manager',
                analytics:
                analyticsAssistanceManager.HUELLA_PAGE_VIEW_ASESOR_PERSONAL
              },
              assistance_manager_page_view_line_bbva_out_hours: {
                bind: 'analytics-page-view-line-bbva-out-hours',
                analytics:
                analyticsAssistanceManager._getAdvancedFootprintWithLevel2(literals.actions.mark,
                  literals.sections.assistance.callBbvaOutOfTimeLine, literals.commons.personalAssistant)
              },
              assistance_manager_link_action_call_personal_assistance: {
                bind: 'analytics-link-action-call-personal-assistance',
                analytics:
                analyticsAssistanceManager._getAdvancedFootprintWithLevel2(literals.actions.externalLink,
                  literals.sections.assistance.callAssistantManager, literals.commons.personalAssistant)
              },
              assistance_manager_link_action_call_line_bbva: {
                bind: 'analytics-link-action-call-line-bbva',
                analytics:
                analyticsAssistanceManager.EXTERNAL_LINK_CALL_LINE_BBVA
              }
            }
          }
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
