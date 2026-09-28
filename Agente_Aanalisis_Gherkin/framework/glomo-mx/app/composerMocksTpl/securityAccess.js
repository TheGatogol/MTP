/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const pageName = 'securityAccess';
  const {
    useNames,
    createPrefixFromPageName
  } = require('./common/helpers/_utils');
  const _pages = require('./common/_pages')(CONFIG)('securityAccess');
  const securityAccessAnalytics = require('./analytics/_accesAndSignatures')(CONFIG);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = !!CONFIG.nativeIos;
  const {toastSnackBarGeneralParamsSuccess: toastSnackBarParams} = require('./common/helpers/_constants');

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      className: 'bg-light-grey'
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('_reset_page')]: {
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
  const securitySetingsDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-accesses-and-signatures',
    familyPath: '@glomo-web-components/bbva-manager-accesses-and-signatures',
    render: 'litElement',
    properties: {
      isFidoRegister: {
        key: 'fido_info_register',
        value: {
          status: true
        }
      },
      native: CONFIG.native || false,
      toastSnackBarParams,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'setFeatureFlags'
          },
          global_device_accesses_customer_id: {
            bind: 'userId'
          },
          cancel_otp_fido: {
            bind: 'cancelDesactivateFido'
          },
          cancel_otp_fido_dashboard: {
            bind: 'cancelDesactivateFido'
          },
          [getChannelName('init_page')]: {
            bind: 'init'
          },
          succes_biometrics: {
            bind: 'biometricsType'
          },
          error_biometrics: {
            bind: 'biometricsType'
          },
          sign_modal_request: {
            bind: 'succesFlagFido'
          },
          [getChannelName('select_page_access')]: {
            bind: 'textAccessPage'
          },
          [getChannelName('close_button_right')]: {
            bind: 'showModal'
          },
          [getChannelName('toggle_switch_chnage_acces')]: {
            bind: 'checkPluginBiometrics'
          },
          [getChannelName('set_configuration_acepted')]: {
            bind: 'openSettingNative'
          },
          [getChannelName('exit_desactivate_fido_acepted')]: {
            bind: 'callAutenticatePluginFido'
          },
          [getChannelName('cancel_configuration_confirm')]: {
            bind: 'changeToggle'
          },
          [getChannelName('cancel_configuration_header')]: {
            bind: 'changeToggle'
          },
          [getChannelName('cancel_desactivate_fido')]: {
            bind: 'validateBiometricAccessIsActive'
          },
          [getChannelName('cancel_desactivate_fido_veil')]: {
            bind: 'validateBiometricAccessIsActive'
          },
          [getChannelName('succes_authenticate_fido')]: {
            bind: 'checkSecurityJurneyFlag'
          },
          web_view_visibility: {
            bind: 'backNative'
          },
          succes_deleted_fido_all: {
            bind: 'enableFlagFido'
          },
          [getChannelName('_reset_page')]: {
            bind: 'resetData'
          },
          [getChannelName('error_authenticate_fido')]: {
            bind: 'handleAuthenticateFidoError'
          },
          [getChannelName('succes_fido_list')]: {
            bind: 'getFidosResponse'
          },
          [getChannelName('error_fido_list')]: {
            bind: 'fidosResponseError'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBackStep'
          },
          security_access_modal_acces_state: {
            bind: 'setOpenedModal'
          }
        },
        out: {
          global_message_snackbar: {
            bind: 'set-toast-error'
          },
          [getChannelName('reset_tab_page')]: {
            bind: 'security-access-reset-tab'
          },
          [getChannelName('set_text_for_text_one')]: {
            bind: 'set-text-one-acces-page'
          },
          [getChannelName('set_text_for_text_two')]: {
            bind: 'set-text-two-acces-page'
          },
          [getChannelName('set_button_text_link_property_access')]: {
            bind: 'set-properties-button-link-acces'
          },
          [getChannelName('set_from_toggle_acces')]: {
            bind: 'set-properties-toggle-link-acces'
          },
          [getChannelName('set_from_toggle_link_signatures_text')]: {
            bind: 'set-properties-toggle-link-firmas'
          },
          [getChannelName('show_item_security_access_page')]: {
            bind: 'show-item-page-access'
          },
          [getChannelName('hidden_item_security_access_page')]: {
            bind: 'hidden-item-page-acces'
          },
          [getChannelName('show_item_security_access')]: {
            bind: 'show-item'
          },
          [getChannelName('hidden_item_security_access')]: {
            bind: 'hidden-item'
          },
          [getChannelName('show_message_acces')]: {
            bind: 'set-properties-notification-message-access'
          },
          [getChannelName('set_hiden_notification_message')]: {
            bind: 'set-hidden-bbva-notification-mensasge'
          },
          [getChannelName('set_proeprtie_list_link')]: {
            bind: 'set-properties-list-link'
          },
          [getChannelName('show_modal_acces')]: {
            bind: 'show-first-modal'
          },
          [getChannelName('show_modal_acces_header_text')]: {
            bind: 'show-first-modal-headerText'
          },
          [getChannelName('show_modal_acces_button')]: {
            bind: 'show-first-modal-buttonText'
          },
          [getChannelName('open_modal_acces')]: {
            bind: 'open-modal'
          },
          [getChannelName('open_modal_configurate')]: {
            bind: 'open-modal-configurate-mobile'
          },
          [getChannelName('set_modal_mobile_settings')]: {
            bind: 'show-content-configuration-modal',
            analytics: securityAccessAnalytics.viewAnAccessMethodAndSignatures
          },
          [getChannelName('set_modal_mobile_settings_linkText')]: {
            bind: 'show-content-configuration-modal-linkText'
          },
          [getChannelName('set_modal_mobile_settings_headerText')]: {
            bind: 'show-content-configuration-modal-headerText'
          },
          [getChannelName('set_modal_mobile_settings_buttonText')]: {
            bind: 'show-content-configuration-modal-buttonText'
          },
          [getChannelName('open_setttings_mobile')]: {
            bind: 'open-native-settings'
          },
          [getChannelName('global_get_from_storage_fido')]: {
            bind: 'get-key-fido-user-enrollment-from-local-storage'
          },
          open_modal_activate_fido: {
            bind: 'activate-fido',
            link: {
              page: 'fido'
            }
          },
          [getChannelName('set_data_toggle_false')]: {
            bind: 'change-toggle-false'
          },
          [getChannelName('set_data_toggle_true')]: {
            bind: 'change-toggle-true'
          },
          [getChannelName('desactivate_fido')]: {
            bind: 'show-enable-fido-modal'
          },
          [getChannelName('desactivate_fido_header')]: {
            bind: 'show-enable-fido-modal-header'
          },
          [getChannelName('desactivate_fido_link')]: {
            bind: 'show-enable-fido-modal-link'
          },
          [getChannelName('desactivate_fido_button')]: {
            bind: 'show-enable-fido-modal-button'
          },
          [getChannelName('set_autenticate_biometrics_fido')]: {
            bind: 'authenticate-from-device-fido-action'
          },
          [getChannelName('start_autenticate_biometrics_fido')]: {
            bind: 'authenticate-from-device-fido-start'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-activate-fido'
          },
          [getChannelName('hidden_key_recovery_access')]: {
            bind: 'hidden-key-recovery-access'
          },
          set_deleted_fido_all: {
            bind: 'start-deleted-fido-all'
          },
          [getChannelName('set_get_fido_list')]: {
            bind: 'start-get-fido-list'
          },
          [getChannelName('set_delete_fido_one')]: {
            bind: 'start-delete-fido-one'
          },
          security_access_CLOSE_BUTTON_PRESSED_CHANNEL: {
            bind: 'glomo-backstep-event',
            backStep: true
          },
          security_access_close_modal_acces_on_back: {
            bind: 'access-backstep-event'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      heroImageModal: 'success-glass.png',
      newCellsConnections: {
        add: {
          in: {
            global_set_app_settings: {
              bind: 'setAppSettingsParams'
            }
          },
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-activate-fido-spherica'
            }
          },
          remove: {
            out: ['global_alert_manager_open_with_settings', 'security_access_desactivate_fido_button']
          }
        }
      }
    }
  };
  const securitySetingsAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-analytics-accesses-and-signatures',
    familyPath: '@glomo-web-components/bbva-manager-accesses-and-signatures',
    render: 'litElement',
    native: CONFIG.native || false,
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('cancel_configuration_confirm')]: {
            bind: 'fireAnalyticsAnotherMoment'
          }
        },
        out: {
          ['analytics_another_moment' + pageName]: {
            bind: 'analytics-another-moment',
            analytics: securityAccessAnalytics._getAppStep('en otro momento')
          },
          [getChannelName('analytics_turn_on_main_switch')]: {
            bind: 'analytics-turn-on-main-switch'
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'securityAccess',
      iconRightPrimary: 'coronita:help',
      text: 'glomo-security-access-menu-header-title',
      iconLeftPrimary: 'coronita:return-12',
      iconRight1: 'coronita:return-12',
      cellsConnections: {
        out: {
          [getChannelName('CLOSE_BUTTON_PRESSED_CHANNEL')]: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          },
          [getChannelName('close_button_right')]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'first-level-sequential',
      className: 'header--core-grey header',
      leftButtons: [
        {
          id: 'btn-back',
          icon: 'spherica:back-mini',
          label: 'bbva-header-main-return-aria-label',
          accessibilityText: 'bbva-header-main-a11y-back-label',
          defaultEventIconName: 'header-main-close-icon-click'
        }
      ],
      rightButtons: [
        {
          id: 'btn-help',
          icon: 'spherica:help',
          label: 'bbva-header-main-help-aria-label',
          accessibilityText: 'bbva-header-main-a11y-help-label',
          defaultEventIconName: 'header-main-icon-right-primary-click'
        }
      ],
      cellsConnections: {
        out: {
          security_access_CLOSE_BUTTON_PRESSED_CHANNEL: {
            bind: 'header-main-close-icon-click',
            backStep: true
          },
          security_access_close_button_right: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };
  const tabDefault = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-tab-default',
    tagSpherica: 'bbva-tab-default-spherica',
    familyPath: '@bbva-web-components/bbva-tab-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      selected: 0,
      options: [
        {
          title: 'glomo-security-access-menu-tab-default-button-1'
        },
        {
          title: 'glomo-security-access-menu-tab-default-button-2'
        }
      ],
      cellsConnections: {
        in: {
          [getChannelName('reset_tab_page')]: {
            bind: 'selected'
          }
        },
        out: {
          [getChannelName('select_page_access')]: {
            bind: 'tab-default-tab-change'
          }
        }
      }
    },
    propertiesSpherica: {
      selected: null,
      id: 'tabPanel',
      className: 'u-margin-bottom--1',
      options: [
        {
          title: 'glomo-security-access-menu-tab-default-button-1',
          panelId: 'content-0'
        },
        {
          title: 'glomo-security-access-menu-tab-default-button-2',
          panelId: 'content-1'
        }
      ]
    }
  };
  const tabPanelLink1 = {
    zone: 'content-0',
    type: 'UI',
    tag: 'bbva-aggregation-app-permissions',
    tagSpherica: 'bbva-aggregation-app-permissions-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-app-permissions',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-app-permissions-spherica',
    render: 'litElement',
    properties: {

    },
    propertiesSpherica: {
      showHeader: false,
      showLink: true,
      showBadge: false,
      showToggle: false,
      linkText: 'bbva-security-access-modify-password-link',
      className: 'u-margin-bottom--1 no-side-margin',
      permissions: [
        {
          icon: 'spherica:uniqueKey',
          title: 'glomo-security-access-user-and-password',
          description: 'cells-step-recovery-password-access-default-title'
        }
      ],
      cellsConnections: {
        out: {
          security_access_navigation_to_keyRecoveryUpdate: {
            bind: 'bbva-aggregation-app-permissions-link-click',
            link: {
              page: 'keyRecoveryUpdate'
            }
          }
        }
      }
    }
  };
  const tabPanelLink2 = {
    zone: 'content-1',
    type: 'UI',
    tag: 'bbva-aggregation-app-permissions',
    tagSpherica: 'bbva-aggregation-app-permissions-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-app-permissions',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-app-permissions-spherica',
    render: 'litElement',
    properties: {

    },
    propertiesSpherica: {
      showHeader: false,
      showLink: false,
      showBadge: false,
      showToggle: false,
      className: 'u-margin-bottom--1 no-side-margin',
      permissions: [
        {
          icon: 'spherica:uniqueKey',
          title: 'glomo-smart-token-title',
          description: 'glomo-security-access-signature'
        }
      ]
    }
  };

  const container1 = {
    zone: 'tabPanel',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      className: 'u-padding-bottom--1-5 u-padding-top--1-5 bg-secondary100'
    },
    propertiesSpherica: {
      id: 'content-0',
      role: 'tabpanel',
      hidden: false,
      className: 'u-margin--1 u-border-radius--1'
    }
  };

  const container2 = {
    zone: 'tabPanel',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      className: 'u-padding-bottom--1-5 u-padding-top--1-5 bg-secondary100'
    },
    propertiesSpherica: {
      id: 'content-1',
      role: 'tabpanel',
      hidden: true,
      className: 'u-margin--1 u-border-radius--1'
    }
  };

  const firstTextAcces = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      id: 'textOne',
      className: 'u-margin--grid',
      fontWeight: '500',
      cellsConnections: {
        in: {
          [getChannelName('set_text_for_text_one')]: {
            bind: 'text'
          }
        }
      }
    }
  };
  const secondTextAcces = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      id: 'textTwo',
      className: 'u-margin--grid',
      cellsConnections: {
        in: {
          [getChannelName('set_text_for_text_two')]: {
            bind: 'text'
          }
        }
      }
    }
  };
  const buttonDefault = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      variant: 'link',
      className: 'u-margin--grid u-margin-bottom--1',
      cellsConnections: {
        in: {
          [getChannelName('set_button_text_link_property_access')]: {
            bind: 'text'
          },
          [getChannelName('show_item_security_access_page')]: {
            bind: 'hidden'
          },
          [getChannelName('hidden_item_security_access')]: {
            bind: 'hidden'
          },
          [getChannelName('hidden_key_recovery_access')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('navigation_to_keyRecoveryUpdate')]: {
            bind: 'click',
            link: {
              page: 'keyRecoveryUpdate'
            }
          }
        }
      }
    }
  };
  const divider = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      size: 'full'
    }
  };
  const fromToggle = {
    zone: isSpherica ? 'content-0' : 'app__main',
    type: 'UI',
    tag: 'bbva-form-toggle',
    tagSpherica: 'bbva-form-toggle-spherica',
    familyPath: '@bbva-web-components/bbva-form-toggle',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'bbvaFormToggleAccess',
      hideDivider: true,
      className: 'u-margin--grid',
      variant: 'list-right',
      disabledEllipsis: 'true',
      cellsConnections: {
        in: {
          [getChannelName('show_item_security_access_page')]: {
            bind: 'hidden'
          },
          [getChannelName('set_from_toggle_acces')]: {
            bind: 'description'
          },
          [getChannelName('hidden_item_security_access')]: {
            bind: 'hidden'
          },
          [getChannelName('set_data_toggle_false')]: {
            bind: 'checked'
          },
          [getChannelName('set_data_toggle_true')]: {
            bind: 'checked'
          },
          fido_set_data_toggle_false_error: {
            bind: 'checked'
          },
          fido_set_data_toggle_false: {
            bind: 'checked'
          }
        },
        out: {
          [getChannelName('toggle_switch_chnage_acces')]: {
            bind: 'form-toggle-switch-change',
            analytics: securityAccessAnalytics.appOnClickStart
          }
        }
      }
    },
    propertiesSpherica: {
      className: ''
    }
  };
  const fromToggleFirms = {
    zone: isSpherica ? 'content-1' : 'app__main',
    type: 'UI',
    tag: 'bbva-form-toggle',
    tagSpherica: 'bbva-form-toggle-spherica',
    familyPath: '@bbva-web-components/bbva-form-toggle',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'bbvaFormToggleSignatures',
      hideDivider: true,
      className: 'u-margin--grid',
      variant: 'list-right',
      disabledEllipsis: 'true',
      cellsConnections: {
        in: {
          [getChannelName('set_from_toggle_link_signatures_text')]: {
            bind: 'description'
          },
          [getChannelName('hidden_item_security_access_page')]: {
            bind: 'hidden'
          },
          [getChannelName('show_item_security_access')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      className: ''
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
      variant: 'default',
      icon: 'coronita:info',
      className: 'margin-m',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('show_message_acces')]: {
            bind: 'message'
          },
          [getChannelName('set_hiden_notification_message')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      bookTitle: true,
      messageTitle: 'glomo-security-access-message-modal',
      message: '',
      icon: 'spherica:info'
    }
  };

  const helpModal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      id: 'methodsAccess',
      headerType: 'modal',
      fullHeight: true,
      idLink: 'link',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          [getChannelName('open_modal_acces')]: {
            bind: 'open'
          },
          [getChannelName('show_modal_acces_header_text')]: {
            bind: 'headerText'
          },
          [getChannelName('show_modal_acces_button')]: {
            bind: 'buttonText'
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'spherica:close',
      closeLabel: 'glomo-security-access-close',
      headerType: ''
    }
  };
  const panelInfoHelp = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      className: 'dimentions-image',
      image: './images/Secure-Account-Rule.svg',
      heading: 'glomo-security-access-header-title-modal',
      text: 'glomo-security-access-description-modal'
    },
    propertiesSpherica: {
      image: '',
      microillustration: 'secureAccountRule',
      microillustrationType: 'glass',
      variant: 'primary',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const headerHelpModal = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'glomo-security-access-header-description-modal'
    },
    propertiesSpherica: {
      text: 'glomo-security-access-header-description-modal-spherica',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listHelpModal = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      iconSize: 24,
      icon: 'coronita:bullet1',
      text: 'glomo-security-access-user-and-password'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listHelpModalModalityDefault = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      iconSize: 24, icon: 'coronita:bullet1', text: 'glomo-security-access-description-modal-1'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listHelpModalBiometrics = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      iconSize: 24, icon: 'coronita:bullet1', text: 'glomo-security-access-description-modal-2'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listHelpModalOptionsSign = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      iconSize: 24, icon: 'coronita:bullet1', text: 'glomo-security-access-description-modal-3'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--0-5'
    }
  };
  const headerHelpModalOperationSign = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'glomo-security-access-description-modal-4'
    },
    propertiesSpherica: {
      text: 'glomo-security-access-description-modal-4-spherica',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listHelpModalToken = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      iconSize: 24, icon: 'coronita:bullet1', text: 'glomo-security-access-description-modal-5'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listHelpModalModalitySign = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      iconSize: 24, icon: 'coronita:bullet1', text: 'glomo-security-access-description-modal-6'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listHelpModalBiometricsHelp = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      iconSize: 24, icon: 'coronita:bullet1', text: 'glomo-security-access-description-modal-2'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listHelpModalEnhanceSecurity = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      iconSize: 24, icon: 'coronita:bullet1', text: 'glomo-security-access-description-modal-7'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--0-5'
    }
  };
  const messageModalHelp = {
    zone: 'methodsAccess.slot-content',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-top--0-5',
      variant: 'default',
      message: 'glomo-security-access-message-modal'
    },
    propertiesSpherica: {
      className: '',
      bookTitle: true,
      messageTitle: 'glomo-security-access-message-modal',
      message: '',
      icon: 'spherica:info'
    }
  };
  const helpModalConfiguration = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      id: 'bbvaHelpModalPage',
      headerType: 'modal',
      fullHeight: true,
      idLink: 'link',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          [getChannelName('open_modal_configurate')]: {
            bind: 'open'
          },
          [getChannelName('set_modal_mobile_settings_linkText')]: {
            bind: 'linkText'
          },
          [getChannelName('set_modal_mobile_settings_headerText')]: {
            bind: 'headerText'
          },
          [getChannelName('set_modal_mobile_settings_buttonText')]: {
            bind: 'buttonText'
          }
        },
        out: {
          [getChannelName('set_configuration_acepted')]: {
            bind: 'help-modal-footer-button-click',
            analytics: securityAccessAnalytics._getAppStep('configurar')
          },
          [getChannelName('cancel_configuration_confirm')]: {
            bind: 'help-modal-footer-link-click'
          },
          [getChannelName('cancel_configuration_header')]: {
            bind: 'help-modal-header-right-primary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'spherica:close',
      closeLabel: 'glomo-security-access-close',
      headerType: '',
      iOSFixedHeader: isNativeIos,
      newCellsConnections: {
        add: {
          out: {
            security_access_cancel_configuration_header: {
              bind: 'help-modal-close-icon-click'
            }
          }
        }
      }
    }
  };
  const panelInfoHelpSettings = {
    zone: 'bbvaHelpModalPage.slot-content',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      className: 'dimentions-image',
      image: isSpherica ? '' : './images/biometrics.svg',
      heading: 'glomo-security-access-description-modal-8',
      text: 'glomo-security-access-modal'
    },
    propertiesSpherica: {
      microillustration: 'activateFingerprint',
      variant: 'primary',
      className: 'u-margin--grid u-margin-bottom--1 u-margin-top--1'
    }
  };
  const biometricAutentication = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-plugin-biometrics',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'checkenabled'
          },
          [getChannelName('select_page_access')]: {
            bind: 'checkenabled'
          },
          web_view_visibility: {
            bind: 'checkenabled'
          },
          [getChannelName('start_autenticate_biometrics_fido')]: {
            bind: 'authenticate'
          }
        },
        out: {
          succes_biometrics: {
            bind: 'checkenabled-success'
          },
          [getChannelName('succes_authenticate_fido')]: {
            bind: 'authenticate-success'
          },
          error_biometrics: {
            bind: 'error'
          },
          [getChannelName('error_authenticate_fido')]: {
            bind: 'authenticate-error'
          }
        }
      }
    }
  };
  const mobileSetings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_setttings_mobile')]: {
            bind: 'openSetting'
          }
        },
        out: {
          set_open_settings: {
            bind: 'setting-opened',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const helpModalAlert = {
    zone: isSpherica ? 'app__transactional' : 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      fullHeight: false,
      idButton: 'button',
      modalType: 'info',
      titleIcon: 'coronita:info',
      cellsConnections: {
        in: {
          [getChannelName('desactivate_fido')]: {
            bind: 'open'
          },
          [getChannelName('desactivate_fido_header')]: {
            bind: 'bodyText'
          },
          [getChannelName('desactivate_fido_link')]: {
            bind: 'buttonText'
          },
          [getChannelName('desactivate_fido_button')]: {
            bind: 'linkText'
          },
          security_access_close_modal_acces_on_back: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('exit_desactivate_fido_acepted')]: {
            bind: 'help-modal-footer-button-click'
          },
          [getChannelName('cancel_desactivate_fido')]: {
            bind: 'help-modal-footer-link-click'
          },
          [getChannelName('cancel_desactivate_fido_veil')]: {
            bind: 'help-modal-veil-click'
          },
          security_access_modal_acces_state: {
            bind: 'modal-state-change'
          }
        }
      }
    },
    propertiesSpherica: {
      modalType: 'caution',
      titleIcon: 'spherica:caution',
      closeLabel: 'glomo-security-access-close',
      headerText: 'security-settings-bbva-help-modal-biometry-header-text-spherica',
      titleText: 'glomo-security-access-desactivate-fido-modal-title-spherica',
      descriptionText: 'glomo-security-access-desactivate-fido-spherica',
      linkText: '',
      iOSFixedHeader: isNativeIos,
      newCellsConnections: {
        add: {
          out: {
            security_access_cancel_desactivate_fido: {
              bind: 'help-modal-close-icon-click'
            }
          }
        },
        remove: {
          in: [
            'security_access_desactivate_fido_button'
          ]
        }
      }
    }
  };
  const alertErrorRequest = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-bottom-modal-message',
    tagSpherica: 'cells-bottom-modal-message-spherica',
    properties: {
      autoHide: true,
      time: 3000,
      messageDisabled: true,
      iconSize: 22,
      cellsConnections: {
        in: {
          OPEN_MODAL_CONFIRM: {
            bind: 'open'
          },
          TYPE_MODAL_CONFIRM: {
            bind: 'type'
          },
          MESSAGE_MODAL_CONFIRM: {
            bind: 'message'
          },
          ICON_MODAL_CONFIRM: {
            bind: 'icon'
          }
        }
      }
    }
  };
  const fidoDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-fido-enrollment-mx',
    familyPath: '@glomo-web-components/bbva-manager-fido',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          succes_deleted_fido_all: {
            bind: 'responseDeleted'
          }
        },
        out: {
          notify_token_enrolled: {
            bind: 'fido-enrollment-notify-token-enrolled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const pluginFido = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-fido',
    familyPath: '@glomo-web-components/bbva-nativeconnector-fido',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          set_deleted_fido_all: {
            bind: 'delete'
          },
          [getChannelName('set_get_fido_list')]: {
            bind: 'list'
          },
          [getChannelName('set_delete_fido_one')]: {
            bind: 'delete'
          }
        },
        out: {
          succes_deleted_fido_all: {
            bind: 'delete-success'
          },
          notify_delete_fido_enrolled: {
            bind: 'delete-success',
            'forward-to-native': true
          },
          [getChannelName('succes_fido_list')]: {
            bind: 'list-success'
          },
          [getChannelName('error_fido_list')]: {
            bind: 'list-error'
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      hash: 'securityAccess',
      url: '/security-access'
    },
    pages: _pages,
    template,
    components: [
      lifeCycle,
      header,
      tabDefault,
      securitySetingsDm,
      fidoDm,
      pluginFido,
      securitySetingsAnalytics,
      divider,
      notificationMessage,
      helpModal,
      panelInfoHelp,
      headerHelpModal,
      listHelpModal,
      listHelpModalModalityDefault,
      listHelpModalBiometrics,
      listHelpModalOptionsSign,
      headerHelpModalOperationSign,
      listHelpModalToken,
      listHelpModalModalitySign,
      listHelpModalBiometricsHelp,
      listHelpModalEnhanceSecurity,
      messageModalHelp,
      biometricAutentication,
      mobileSetings,
      helpModalConfiguration,
      panelInfoHelpSettings,
      helpModalAlert,
      alertErrorRequest
    ]
  };
  if (isSpherica) {
    base.components = base.components.filter(component => component.tag !== 'bbva-divider');
    base.components.push(tabPanelLink1, tabPanelLink2);
    base.components.splice(6, 0, container1);
    base.components.splice(7, 0, container2);
  } else {
    base.components.push(firstTextAcces, secondTextAcces, buttonDefault);
  }

  base.components.push(fromToggle, fromToggleFirms);

  return sphericaPageUtils.spherize(base);
};
