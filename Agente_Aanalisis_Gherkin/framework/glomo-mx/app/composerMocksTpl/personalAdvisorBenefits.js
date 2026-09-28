'use strict';
module.exports = (CONFIG) => {
  const { SPINNER: spinner, headerHeight } = require('./common/helpers/_utils');
  const appSpinner = spinner(CONFIG);
  const pageName = 'personalAdvisorBenefits';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analyticsAssistanceManager = require('./analytics/_assistanceManager');
  const literals = require('./analytics/common/_literals');
  const isSpherica = sphericaPageUtils.isSpherica();

  appSpinner.tagSpherica = 'cells-spinner-veil-spherica';
  appSpinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const base = {
    currentPage: {
      url: '/personal-advisor-benefits'
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
        className: 'bbva-dark-bg',
        rightDrawer: true,
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
          pageName: pageName,
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cache: ['assistanceManager', pageName],
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_personalAdvisorBenefits: {
                bind: 'init'
              }
            },
            out: {
              personal_advisor_init_page: {
                bind: 'init-page'
              },
              personal_advisor_reset_page: {
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
          text: 'assistant-manager-header-title',
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
        type: 'UI',
        tag: 'bbva-banner-image',
        tagSpherica: 'bbva-clip-microillustration-spherica',
        familyPath: '@bbva-web-components/bbva-banner-image',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin-top--0 u-margin-bottom--0',
          imageSrc: './images/assistanceManager/bbva_managers_1.svg'
        },
        propertiesSpherica: {
          microillustration: 'bbvaManagers',
          type: 'glass',
          size: 'L',
          className: 'u-display--center'
        }
      },
      {
        zone: 'advisorBenefitsModal.slot-content-header',
        type: 'UI',
        tag: 'bbva-banner-image',
        tagSpherica: 'bbva-clip-microillustration-spherica',
        familyPath: '@bbva-web-components/bbva-banner-image',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin-top--0 u-margin-bottom--0',
          cellsConnections: {
            in: {
              personal_advisor_image_src: {
                bind: 'imageSrc'
              }
            }
          }
        },
        propertiesSpherica: {
          microillustration: 'bbvaManagers',
          type: 'glass',
          size: 'L'
        }
      },
      {
        zone: 'advisorBenefitsModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          alignment: 'center',
          fontWeight: '500',
          size: 'M',
          tag: 'span',
          cellsConnections: {
            in: {
              assitance_send_title_text: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          size: '2XL',
          fontType: 'title-secondary',
          text: 'personal-advisor-benefits-bbva-text',
          className: 'u-margin-bottom--0 u-margin--grid u-margin-top--0'
        }
      },
      {
        zone: 'advisorBenefitsModal.slot-content',
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
              assitance_send_body_text: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          size: '2XL',
          fontType: 'title-secondary',
          text: 'personal-advisor-benefits-bbva-text',
          className: 'u-margin-bottom--0 u-margin--grid u-margin-top--0'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          tag: 'span',
          cellsConnections: {
            in: {
              personal_advisor_benefits_text_alignment: {
                bind: 'alignment'
              },
              personal_advisor_benefits_text_one: {
                bind: 'text'
              },
              personal_advisor_benefits_font_weight_one: {
                bind: 'fontWeight'
              },
              personal_advisor_benefits_text_size_one: {
                bind: 'size'
              },
              personal_advisor_text_class_name: {
                bind: 'className'
              }
            }
          }
        },
        propertiesSpherica: {
          size: '2XL',
          fontType: 'title-secondary',
          text: 'personal-advisor-benefits-bbva-text',
          className: 'u-margin-bottom--0-5 u-margin--grid u-margin-top--0',
          alignment: 'center'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              personal_advisor_benefits_text_alignment: {
                bind: 'alignment'
              },
              personal_advisor_benefits_text_two: {
                bind: 'text'
              },
              personal_advisor_benefits_text_size_two: {
                bind: 'size'
              },
              personal_advisor_text_class_name: {
                bind: 'className'
              }
            }
          }
        },
        propertiesSpherica: {
          tag: 'span',
          text: 'personal-advisor-benefits-bbva-text-two-spherica',
          size: '24',
          className: 'u-margin-bottom--0-5 u-margin-top--0 u-margin--grid',
          alignment: 'center'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-bullet',
        tagSpherica: 'bbva-list-bullet-spherica-lit',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin--grid',
          cellsConnections: {
            in: {
              personal_advisor_benefits_bullet_icon: {
                bind: 'icon'
              },
              personal_advisor_benefits_bullet_icon_size: {
                bind: 'iconSize'
              },
              personal_advisor_benefits_bullet_text_one: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          text: 'personal-advisor-benefits-list-bullet-message-spherica',
          className: 'u-margin-bottom--0-5 u-margin--grid'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-bullet',
        tagSpherica: 'bbva-list-bullet-spherica-lit',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin--grid',
          icon: 'coronita:bullet1',
          iconSize: 24,
          text: 'personal-advisor-benefits-list-bullet-message-two',
          cellsConnections: {
            in: {
              personal_advisor_benefits_bullet_icon: {
                bind: 'icon'
              },
              personal_advisor_benefits_bullet_icon_size: {
                bind: 'iconSize'
              },
              personal_advisor_benefits_bullet_text_two: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          text: 'personal-advisor-benefits-list-bullet-message-two-spherica',
          className: 'u-margin-bottom--0-5 u-margin--grid',
          icon: 'spherica:bullet'
        }
      },
      isSpherica && {
        zone: 'app__main',
        type: 'UI',
        tagSpherica: 'bbva-list-bullet-spherica-lit',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        propertiesSpherica: {
          text: 'personal-advisor-benefits-list-bullet-message-three-spherica',
          className: 'u-margin-bottom--2 u-margin--grid'
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
        container: true,
        properties: {
          id: 'pabNotificationMessage',
          className: 'u-margin--grid u-margin-top--0-5',
          variant: 'default',
          cellsConnections: {
            in: {
              assistance_manager_send_notification_icon: {
                bind: 'icon'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            remove: {
              in: [
                'assistance_manager_send_notification_icon'
              ]
            }
          },
          message: 'personal-advisor-benefits-notification-message-text-two-spherica',
          messageTitle: 'personal-advisor-benefits-notification-message-text',
          ambient: 'primary-alt',
          ariaDisable: 'false',
          icon: 'spherica:info'
        }
      },
      {
        zone: 'pabNotificationMessage.',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          tag: 'span',
          size: 'S',
          cellsConnections: {
            in: {
              personal_advisor_notification_messsage_title: {
                bind: 'text'
              },
              personal_advisor_benefits_text_alignment: {
                bind: 'alignment'
              },
              personal_advisor_benefits_text_size_two: {
                bind: 'size'
              }
            }
          }
        }
      },
      {
        zone: 'pabNotificationMessage.',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          size: 'S',
          cellsConnections: {
            in: {
              personal_advisor_notification_messsage: {
                bind: 'text'
              },
              personal_advisor_benefits_text_alignment: {
                bind: 'alignment'
              },
              personal_advisor_benefits_text_size_two: {
                bind: 'size'
              }
            }
          }
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
          cellsConnections: {
            in: {
              personal_advisor_button_default_variant: {
                bind: 'variant'
              },
              personal_advisor_button_default_text: {
                bind: 'text'
              },
              personal_advisor_button_class_name: {
                bind: 'className'
              }
            },
            out: {
              button_navigate_assistance_manager: {
                bind: 'click',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          fullwidth: true,
          className: 'u-margin--grid u-margin-bottom--0-5 u-margin-top--0-5 u-max-width--2',
          text: 'personal-advisor-benefits-button-text'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-assistance-manager',
        familyPath: '@glomo-web-components/bbva-manager-assistance',
        render: 'litElement',
        properties: {
          currentPage: pageName,
          cellsConnections: {
            in: {
              personal_advisor_init_page: {
                bind: 'personalAdvisorBenefitsInit'
              },
              personal_advisor_reset_page: {
                bind: 'resetPage'
              },
              personal_advisor_modal_button_click: {
                bind: 'helpModalError'
              }
            },
            out: {
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'close-spinner'
              },
              assistance_manager_send_notification_icon: {
                bind: 'send-notification-icon'
              },
              personal_advisor_benefits_text_alignment: {
                bind: 'send-alignment-text'
              },
              personal_advisor_benefits_text_one: {
                bind: 'send-text-one'
              },
              personal_advisor_benefits_text_two: {
                bind: 'send-text-two'
              },
              personal_advisor_benefits_font_weight_one: {
                bind: 'send-font-weight-one'
              },
              personal_advisor_benefits_font_weight_two: {
                bind: 'send-font-weight-two'
              },
              personal_advisor_benefits_text_size_one: {
                bind: 'send-text-size-one'
              },
              personal_advisor_benefits_text_size_two: {
                bind: 'send-text-size-two'
              },
              personal_advisor_benefits_bullet_icon: {
                bind: 'send-bullet-icon'
              },
              personal_advisor_benefits_bullet_icon_size: {
                bind: 'send-bullet-icon-size'
              },
              personal_advisor_benefits_bullet_text_one: {
                bind: 'send-bullet-text-one'
              },
              personal_advisor_benefits_bullet_text_two: {
                bind: 'send-bullet-text-two'
              },
              personal_advisor_notification_messsage_title: {
                bind: 'send-notification-message-title'
              },
              personal_advisor_notification_messsage: {
                bind: 'send-notification-message'
              },
              personal_advisor_button_default_variant: {
                bind: 'send-button-default-variant'
              },
              personal_advisor_button_default_text: {
                bind: 'send-button-default-text'
              },
              personal_advisor_text_class_name: {
                bind: 'send-text-class-name'
              },
              personal_advisor_button_class_name: {
                bind: 'send-button-class-name'
              },
              personal_advisor_hidden_image: {
                bind: 'send-hidden-image'
              },
              personal_advisor_image_src: {
                bind: 'send-image-src'
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
              assistance_send_close_elements: {
                bind: 'send-close-elements'
              },
              assistance_send_full_height: {
                bind: 'send-full-height'
              },
              assistance_send_header_ext: {
                bind: 'send-header-text'
              },
              assistance_send_fixed_footer: {
                bind: 'send-fixed-footer'
              },
              assistance_send_modal_type: {
                bind: 'send-modal-type'
              },
              personal_advisor_send_modal_image: {
                bind: 'send-image-modal'
              },
              personal_advisor_send_modal_header_type: {
                bind: 'send-header-type'
              },
              personal_advisor_open_modal: {
                bind: 'modal-open-error-benefits'
              },
              personal_advisor_close_modal: {
                bind: 'close-help-modal'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            remove: {
              out: [
                'assistance_manager_send_notification_icon',
                'personal_advisor_benefits_text_alignment',
                'personal_advisor_benefits_text_one',
                'personal_advisor_benefits_text_two',
                'personal_advisor_benefits_font_weight_one',
                'personal_advisor_benefits_font_weight_two',
                'personal_advisor_benefits_text_size_one',
                'personal_advisor_benefits_text_size_two',
                'personal_advisor_benefits_bullet_icon',
                'personal_advisor_benefits_bullet_icon_size',
                'personal_advisor_benefits_bullet_text_one',
                'personal_advisor_benefits_bullet_text_two',
                'personal_advisor_notification_messsage_title',
                'personal_advisor_notification_messsage',
                'personal_advisor_button_default_variant',
                'personal_advisor_button_default_text',
                'personal_advisor_text_class_name',
                'personal_advisor_button_class_name',
                'personal_advisor_hidden_image',
                'assitance_send_title_icon',
                'assitance_send_title_text',
                'assitance_send_body_text',
                'assitance_send_button_text',
                'assitance_send_link_text',
                'assistance_send_close_elements',
                'assistance_send_full_height',
                'assistance_send_header_ext',
                'assistance_send_fixed_footer',
                'assistance_send_modal_type',
                'personal_advisor_send_modal_image',
                'personal_advisor_send_modal_header_type',
                'personal_advisor_open_modal',
                'personal_advisor_close_modal',
                'personal_advisor_image_src'
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
          currentPage: 'personal-advisor-benefits',
          cellsConnections: {
            in: {
              personal_advisor_init_page: {
                bind: 'firePageView'
              }
            },
            out: {
              personal_advisor_page_view: {
                bind: 'analytics-page-view-personal-advisor-benefits',
                analytics:
                analyticsAssistanceManager._getAdvancedFootprintWithLevel2(literals.actions.mark,
                  literals.sections.assistantManager.moreInfo, literals.commons.personalAssistant)
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
          id: 'advisorBenefitsModal',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            in: {
              assitance_send_title_icon: {
                bind: 'titleIcon'
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
              personal_advisor_open_modal: {
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
              personal_advisor_send_modal_header_type: {
                bind: 'headerType'
              },
              assistance_send_fixed_footer: {
                bind: 'fixedFooter'
              },
              personal_advisor_close_modal: {
                bind: 'close'
              }
            },
            out: {
              personal_advisor_modal_button_click: {
                bind: 'help-modal-footer-button-click'
              }
            }
          }
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
