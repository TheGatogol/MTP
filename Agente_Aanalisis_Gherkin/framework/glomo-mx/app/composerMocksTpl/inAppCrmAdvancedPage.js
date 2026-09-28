'use strict';
module.exports = CONFIG => {
  const pageName = 'inAppCrmAdvancedPage';
  const _pages = require('./common/_pages')(CONFIG)(pageName);
  const {
    useNames,
    createPrefixFromPageName,
    createSpinner,
    footerHeightInApp
  } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const {
    nativeIos = false,
    globalServices: { requiredToken = 'tsec' }
  } = CONFIG;
  const { _getAdvancedFootprint, _getInternalLink } = require('./analytics/_inAppCrmAdvancedPage')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);

  const spinner = createSpinner(CONFIG);
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
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      disableEdgeSwipe: true,
      hasFooter: true,
      footerFixed: true,
      footerHeight: footerHeightInApp,
      cellsConnections: {
        in: {
          [getChannelName('change_footer_template')]: {
            bind: 'footerHeight'
          }
        }
      }
    },
    propertiesSpherica: {
      hasFooter: true,
      footerFixed: true,
      footerHeight: '120'
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: pageName,
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
          __bridge_page_inAppCrmAdvancedPage: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('reset_page')]: {
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

  const headerMainAdvanced = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'modal',
      cellsConnections: {
        in: {
          [getChannelName('set_text_header')]: {
            bind: 'text'
          },
          [getChannelName('set_icon_rigth_primary')]: {
            bind: 'iconRightPrimary'
          }
        },
        out: {
          [getChannelName('_navigation_page_next')]: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              page: 'dashboard',
              cleanUntil: pageName
            }
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      rightIconLabel: 'bbva-header-main-close-aria-label',
      rightButtons: [ {
        icon: 'spherica:close',
        defaultEventIconName: 'header-main-icon-right-primary-click',
        label: 'bbva-header-main-close-aria-label'
      } ]
    }
  };

  const panelOfferAdvanced = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-offer',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-offer',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      description: '',
      linkIcon: '',
      cellsConnections: {
        in: {
          [getChannelName('set_microillustration')]: {
            bind: 'microillustration'
          },
          [getChannelName('set_title_panel')]: {
            bind: 'contentTitle'
          },
          [getChannelName('set_description_text')]: {
            bind: 'description'
          },
          [getChannelName('set_description_link')]: {
            bind: 'linkText'
          }
        },
        out: {
          [getChannelName('navigation_modal_info')]: {
            bind: 'panel-offer-panel-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_advanced_page_set_title_panel: {
              bind: 'heading'
            },
            in_app_crm_advanced_page_set_description_text: {
              bind: 'text'
            }
          },
          out: {
            in_app_crm_advanced_page_navigation_modal_info: {
              bind: 'panel-info-link-click'
            }
          }
        }
      }
    }
  };

  const inAppCrmManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-technicalcore-inapp-crm',
    familyPath: '@glomo-web-components/bbva-technicalcore-inapp-crm',
    render: 'litElement',
    properties: {
      imageModal: './images/bbva-logo.svg',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initShowInApp'
          },
          global_get_data_succes_inapp_crm: {
            bind: 'getDataInApp'
          },
          [getChannelName('button_fixed_next_navigation')]: {
            bind: 'handleNavigationButton'
          },
          [getChannelName('navigation_modal_info')]: {
            bind: 'handleNavigationFirstLink'
          },
          [getChannelName('action_link_notification')]: {
            bind: 'handleNavigationNotificationLink'
          },
          inapp_crm_advanced_success_link_external: {
            bind: 'configureURI'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          },
          global_navigation_description_link_success_in_app: {
            bind: 'logoutInAppCrm'
          },
          [getChannelName('continue_page')]: {
            bind: 'continuePage'
          }
        },
        out: {
          open_control_veil: {
            bind: 'spinner-inapp-show'
          },
          [getChannelName('change_footer_template')]: {
            bind: 'inapp-crm-style-template'
          },
          [getChannelName('set_icon_rigth_primary')]: {
            bind: 'inapp-crm-set-icon-close-show'
          },
          [getChannelName('set_text_header')]: {
            bind: 'inapp-crm-set-text-header'
          },
          [getChannelName('set_microillustration_modal')]: {
            bind: 'inapp-crm-set-microillustration-modal'
          },
          [getChannelName('set_microillustration')]: {
            bind: 'inapp-crm-set-microillustration'
          },
          [getChannelName('set_title_panel')]: {
            bind: 'inapp-crm-set-text-title'
          },
          [getChannelName('set_description_text')]: {
            bind: 'inapp-crm-set-text-description'
          },
          [getChannelName('set_description_link')]: {
            bind: 'inapp-crm-set-link-description'
          },
          [getChannelName('set_message_notification')]: {
            bind: 'inapp-crm-notification-message-set-description'
          },
          [getChannelName('set_link_text_notification')]: {
            bind: 'inapp-crm-notification-message-set-link'
          },
          [getChannelName('show_button_fixed')]: {
            bind: 'inapp-crm-panel-button-basic-show'
          },
          [getChannelName('show_notification_message')]: {
            bind: 'inapp-crm-notification-message-hide'
          },
          [getChannelName('set_button_text')]: {
            bind: 'inapp-crm-panel-set-text-button'
          },
          [getChannelName('set_link_button_fixed')]: {
            bind: 'inapp-crm-panel-button-set-link'
          },
          close_control_veil: {
            bind: 'spinner-inapp-hide'
          },
          navigation_page_inapp: {
            bind: 'navigate-from-deep-link-inapp',
            link: {
              page: 'dashboard',
              cleanUntil: pageName
            }
          },
          global_navigation_inapp_recipients: {
            bind: 'event-recipients-init-inapp-crm'
          },
          global_navigation_innap_kyc_high_risk: {
            bind: 'event-kyc-high-risk-inapp-crm'
          },
          global_data_inapp: {
            bind: 'navigate-data-from-inap'
          },
          [getChannelName('set_title_modal')]: {
            bind: 'inapp-crm-set-text-title-modal'
          },
          [getChannelName('set_description_modal')]: {
            bind: 'inapp-crm-set-text-description-modal'
          },
          [getChannelName('set_text_description_modal')]: {
            bind: 'inapp-crm-bullet-set-text-item-description'
          },
          [getChannelName('set_text_description_modal_title')]: {
            bind: 'inapp-crm-bullet-set-text-item-title'
          },
          [getChannelName('set_text_description_modal_sub_title')]: {
            bind: 'inapp-crm-bullet-set-text-item-sub-title'
          },
          [getChannelName('set_hidden_description_modal')]: {
            bind: 'inapp-crm-bullet-hidden-item-description'
          },
          [getChannelName('set_hidden_description_modal_title')]: {
            bind: 'inapp-crm-bullet-hidden-item-title'
          },
          [getChannelName('set_hidden_description_modal_sub_title')]: {
            bind: 'inapp-crm-bullet-hidden-item-sub-title'
          },
          [getChannelName('open_components_modal')]: {
            bind: 'open-modal-inapp-crm'
          },
          [getChannelName('set_text_modal_button')]: {
            bind: 'inapp-crm-modal-set-text-button'
          },
          global_action_launcher_uri: {
            bind: 'navigate-from-deep-link-inapp-uri-description'
          },
          global_alert_manager_open_with_settings: {
            bind: 'inapp-crm-open-modal'
          },
          modal_logout_automatic: {
            bind: 'inapp-crm-logout-success'
          },
          [getChannelName('init_page_analitic')]: {
            bind: 'init-page-inapp'
          },
          [getChannelName('digital_view_page')]: {
            bind: 'page-view-init'
          },
          [getChannelName('_navigation_page_next')]: {
            bind: 'navigation-to-dashboard-page',
            link: {
              page: 'dashboard',
              cleanUntil: pageName
            }
          },
          navigate_to_life_context_cvc: {
            bind: 'inapp-crm-set-data'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'inapp-crm-open-modal'
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

  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-top-0',
      hidden: true,
      variant: 'default',
      cellsConnections: {
        in: {
          [getChannelName('set_message_notification')]: {
            bind: 'message'
          },
          [getChannelName('set_link_text_notification')]: {
            bind: 'linkTitle'
          },
          [getChannelName('show_notification_message')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('action_link_notification')]: {
            bind: 'notification-message-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      bookTitle: true,
      message: '',
      icon: 'spherica:info',
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_advanced_page_set_message_notification: {
              bind: 'messageTitle'
            }
          }
        }
      }
    }
  };

  const panelButtonAdvanced = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'no-gradient',
      buttonClass: 'primary-dark',
      sticky: true,
      buttonVariant: 'primary',
      cellsConnections: {
        in: {
          [getChannelName('show_button_fixed')]: {
            bind: 'show'
          },
          [getChannelName('set_button_text')]: {
            bind: 'buttonText'
          },
          [getChannelName('set_link_button_fixed')]: {
            bind: 'footerLink'
          }
        },
        out: {
          [getChannelName('continue_page')]: {
            bind: 'panel-button-fixed-footer-link-click'
          },
          [getChannelName('button_fixed_next_navigation')]: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--grid u-max-width--2',
      id: 'button-primary',
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_advanced_page_set_button_text: {
              bind: 'text'
            }
          },
          out: {
            in_app_crm_advanced_page_button_fixed_next_navigation: {
              bind: 'click'
            }
          }
        }
      }
    }
  };

  const panelButtonLinkAdvanced = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'no-gradient',
      buttonClass: 'primary-dark',
      sticky: true,
      buttonVariant: 'primary',
      cellsConnections: {
        in: {
          in_app_crm_advanced_page_show_button_fixed: {
            bind: 'show'
          },
          in_app_crm_advanced_page_set_button_text: {
            bind: 'buttonText'
          },
          in_app_crm_advanced_page_set_link_button_fixed: {
            bind: 'footerLink'
          }
        },
        out: {
          in_app_crm_advanced_page_continue_page: {
            bind: 'panel-button-fixed-footer-link-click'
          },
          in_app_crm_advanced_page_button_fixed_next_navigation: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      id: 'button-link',
      className: 'u-margin--1 u-max-width--2',
      variant: 'link',
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_advanced_page_set_link_button_fixed: {
              bind: 'text'
            }
          },
          out: {
            in_app_crm_advanced_page_continue_page: {
              bind: 'click'
            }
          }
        }
      }
    }
  };

  const bbvaHelpModalInApp = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    attributes: {
      'hide-content-padding-top': 'true'
    },
    properties: {
      id: 'inAppCrmModal',
      fullHeight: true,
      iconRightPrimary: 'bbva:close',
      fixedFooter: true,
      hideContentPaddingTop: true,
      headerType: 'modal-three-level',
      className: 'hide-padding-container padding-container-wrapper',
      iOSFixedHeader: true,
      cellsConnections: {
        in: {
          [getChannelName('open_components_modal')]: {
            bind: 'open'
          },
          [getChannelName('set_text_header')]: {
            bind: 'headerText'
          },
          [getChannelName('set_text_modal_button')]: {
            bind: 'buttonText'
          }
        },
        out: {
          [getChannelName('modal_continue')]: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullHeight: true,
      fixedFooter: true,
      hideContentPaddingTop: true,
      iOSFixedHeader: true,
      headerType: '',
      iconRightPrimary: '',
      closeLabel: 'bbva-header-main-close-aria-label'
    }
  };

  const bbvaPanelOfferInApp = {
    zone: 'inAppCrmModal.slot-content',
    type: 'UI',
    tag: 'bbva-panel-offer',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-offer',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      linkIcon: '',
      cellsConnections: {
        in: {
          [getChannelName('set_microillustration_modal')]: {
            bind: 'microillustration'
          },
          [getChannelName('set_title_modal')]: {
            bind: 'contentTitle'
          },
          [getChannelName('set_description_modal')]: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_advanced_page_set_title_modal: {
              bind: 'heading'
            },
            in_app_crm_advanced_page_set_description_modal: {
              bind: 'text'
            }
          }
        }
      }
    }
  };

  const divList = {
    zone: 'inAppCrmModal.slot-content',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    properties: {
      id: 'div_modalListInAppCrm'
    }
  };

  const bulletListInAppDescription = {
    zone: 'div_modalListInAppCrm.',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'listBulletModalDescription',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('set_hidden_description_modal')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      hidden: false,
      className: 'u-margin--grid',
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_advanced_page_set_hidden_description_modal: {
              bind: 'text'
            }
          }
        }
      }
    }
  };

  const textModalListDescription = {
    zone: 'listBulletModalDescription.',
    type: 'UI',
    tag: 'bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPath: '@bbva-web-components/bbva-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      tag: 'span',
      textColor: '#121212',
      fontWeight: '400',
      size: 'S',
      cellsConnections: {
        in: {
          [getChannelName('set_text_description_modal')]: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      textColor: '#070e46'
    }
  };

  const bulletListInAppTitle = {
    zone: 'div_modalListInAppCrm.',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'listBulletModalTitle',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('set_hidden_description_modal_title')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      id: 'listBulletModalTitle',
      hidden: false,
      className: 'u-margin--grid',
      cellsConnections: {
        in: {
          in_app_crm_advanced_page_set_hidden_description_modal_title: {
            bind: 'text'
          }
        }
      }
    }
  };

  const textModalListTitle = {
    zone: 'listBulletModalTitle.',
    type: 'UI',
    tag: 'bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPath: '@bbva-web-components/bbva-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      tag: 'span',
      textColor: '#121212',
      fontWeight: '400',
      size: 'S',
      cellsConnections: {
        in: {
          [getChannelName('set_text_description_modal_title')]: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      textColor: '#070e46'
    }
  };

  const bulletListInAppSubtitle = {
    zone: 'div_modalListInAppCrm.',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'listBulletModalSubTitle',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('set_hidden_description_modal_sub_title')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      id: 'listBulletModalSubTitle',
      className: 'u-margin--grid',
      hidden: false,
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_advanced_page_set_hidden_description_modal_sub_title: {
              bind: 'text'
            }
          }
        }
      }
    }
  };

  const textModalListSubtitle = {
    zone: 'listBulletModalSubTitle.',
    type: 'UI',
    tag: 'bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPath: '@bbva-web-components/bbva-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      tag: 'span',
      textColor: '#121212',
      fontWeight: '400',
      size: 'S',
      cellsConnections: {
        in: {
          [getChannelName('set_text_description_modal_sub_title')]: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      textColor: '#070e46'
    }
  };

  const inAppCrmManagerAnalytic = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-technicalcore-inapp-crm-analytics',
    familyPath: '@glomo-web-components/bbva-technicalcore-inapp-crm',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_get_data_succes_inapp_crm: {
            bind: 'getDataInAppAnalytic'
          },
          [getChannelName('init_page_analitic')]: {
            bind: 'digitalViewPage'
          },
          [getChannelName('digital_view_page')]: {
            bind: 'footerPrint'
          },
          [getChannelName('modal_continue')]: {
            bind: 'intenalLinkModal'
          }
        },
        out: {
          [getChannelName('init_page_info_analytic')]: {
            bind: 'init-page-analityc',
            analytics: _getAdvancedFootprint(false, 'inapCrmAdvanced')
          },
          [getChannelName('init_page_info_private')]: {
            bind: 'event-private-inapp-crm',
            analytics: _getAdvancedFootprint('aviso de privacidad', 'inapCrmAdvanced')
          },
          [getChannelName('init_page_info_detail')]: {
            bind: 'event-detail-inapp-crm',
            analytics: _getAdvancedFootprint('detalle', 'inapCrmAdvanced')
          },
          [getChannelName('init_page_view_more')]: {
            bind: 'event-view-more-inapp-crm',
            analytics: _getInternalLink('saber mas', false, 'inapCrmAdvancedViewMore')
          },
          [getChannelName('init_page_continue')]: {
            bind: 'event-continue-inapp-crm',
            analytics: _getInternalLink('continuar', false, 'inapCrmAdvancedSuccess')
          },
          [getChannelName('init_page_other')]: {
            bind: 'event-other-inapp-crm',
            analytics: _getInternalLink('en otro momento', false, 'inapCrmAdvancedOther')
          },
          [getChannelName('intenal_link_modal')]: {
            bind: 'event-accept-modal-analytic',
            analytics: _getInternalLink('continuar', 'detalle', 'inapCrmAdvancedSuccess')
          }
        }
      }
    }
  };

  const base = {
    hash: 'in-app-crm-advanced-page',
    currentPage: {
      url: '/in-app-crm-advanced-page'
    },
    pages: _pages,
    template,
    components: [
      spinner,
      lifeCycle,
      headerMainAdvanced,
      panelOfferAdvanced,
      inAppCrmManager,
      notificationMessage,
      panelButtonAdvanced,
      panelButtonLinkAdvanced,
      bbvaHelpModalInApp,
      bbvaPanelOfferInApp,
      divList,
      bulletListInAppDescription,
      textModalListDescription,
      bulletListInAppTitle,
      textModalListTitle,
      bulletListInAppSubtitle,
      textModalListSubtitle,
      inAppCrmManagerAnalytic
    ]
  };

  if (sphericaPageUtils.isSpherica()) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
