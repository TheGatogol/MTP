/* eslint-disable complexity */
'use strict';

const {
  useNames,
  createPrefixFromPageName,
  detailDownloadParams,
  glomoOpenDocument,
  createSpinner,
  footerHeight,
  getLocalCurrency
} = require('./common/helpers/_utils');
module.exports = CONFIG => {
  const pageName = 'codiSettings';
  const localStorageApp = require('./common/_local-storage');
  const operativePrefix = createPrefixFromPageName(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const [ getChannelName ] = useNames(operativePrefix);
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const analyticsPage = require('./analytics/_codiSettings')(CONFIG);
  detailDownloadParams.body = {
    documentTemplate: {
      'id': 'GMDECOS002',
      'templateType': {
        'id': 'PDF'
      }
    }
  };
  const cellsSpinnerVeil = createSpinner(CONFIG);
  cellsSpinnerVeil.tagSpherica = 'cells-spinner-veil-spherica';
  cellsSpinnerVeil.propertiesSpherica = {
    className: 'solid-spinner',
    messages: [ 'codi-p2p-settings-spinner-messages-spherica' ]
  };
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          codi_settings_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          open_know_codi_alert_manager: {
            bind: 'openWithSettings'
          }
        },
        out: {
          codi_settings_set_default_app_settings_accept: {
            bind: 'alert-CODI-REFACTOR-DEFAULT-APP-SETTINGS-MODAL-accept'
          },
          codi_settings_delete_codi_accept: {
            bind: 'alert-CODI-REFACTOR-DELETE-CODI-MODAL-accept'
          },
          codi_settings_reset_set_default_app_settings_accept: {
            bind: 'alert-codi-p2p-settings-default-app-enrollment-retry-error-accept'
          },
          codi_setting_retry_chose_option_operations_therms: {
            bind: 'alert-codi-p2p-settings-terms-and-conditions-retry-error-accept'
          },
          codi_setting_to_call_bbva: {
            bind: 'alert-codi-p2p-settings-call-bbva-error-accept'
          }
        }
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      footerFixed: true,
      footerHeight,
      hasFooter: true,
      headerFixed: true,
      iOSFixedHeader: isNativeIos
    },
    propertiesSpherica: {
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: ''
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_codiSettings: {
            bind: 'init'
          }
        },
        out: {
          app_error_access_token: {
            bind: 'access-token-error'
          },
          [getChannelName('init_page')]: {
            bind: 'init-page'
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
      backAction: 'navigate-previous-page',
      cellsConnections: {
        in: {
          [getChannelName('back_request_action')]: {
            bind: 'goBack'
          },
          mobile_manage_operation_terms_conditions_result: {
            bind: 'enableNativeBackNavigation'
          }
        },
        out: {
          [getChannelName('exit_codi_settings')]: {
            bind: 'navigate-previous-page',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };
  const bbvaHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'codi-p2p-settings-header-title',
      iconLeftPrimary: 'coronita:return-12',
      cellsConnections: {
        out: {
          [getChannelName('back_request_action')]: {
            bind: 'header-main-icon-left-primary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'primary',
      iOSFixedHeader: isNativeIos,
      className: isNativeIos && 'u-padding-top--0',
      iconRightPrimary: '',
      accessibilityTextIconRightPrimary: '',
      rightButtons: [ {} ],
      leftButtons: [
        {
          icon: 'spherica:back-mini',
          label: 'cells-molecule-header-spherica-back',
          defaultEventIconName: 'header-main-icon-left-primary-click'
        }
      ]
    }
  };
  const bbvaHeaderCategory = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'codi-p2p-settings-header-category'
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-top--1',
      text: 'codi-p2p-settings-header-category-spherica'
    }
  };
  const bbvaNotificationHelp = {
    zone: `${isSpherica ? 'content-panel-codi-settings' : 'app__main'}`,
    type: 'UI',
    tag: 'bbva-notification-help',
    familyPath: '@bbva-web-components/bbva-notification-help',
    familyPathSpherica: '@bbva-spherica-components/bbva-notification-help',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--0 u-text-color--500 ',
      icon: 'coronita:info',
      hidden: 'true',
      text: 'codi-p2p-settings-notification-text',
      cellsConnections: {
        in: {
          [getChannelName('show_notification_app_predetermine')]: {
            bind: 'hidden'
          },
          [getChannelName('now_bbva_is_app_default')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'spherica:info'
    }
  };
  const contentPanelCodiSettings = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'content-panel-codi-settings',
      role: 'tabpanel',
      hidden: true,
      className: 'u-margin--grid u-margin-top--0-5 u-margin-bottom--0-5 u-padding--1 u-border-radius--1 bg-core-lightened'
    },
    propertiesSpherica: {
      hidden: false
    }
  };
  const bbvaListSimpeBank = {
    zone: `${isSpherica ? 'content-panel-codi-settings' : 'app__main'}`,
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--0 u-text-color--500 ',
      variant: 'stacked',
      descriptionAlignment: 'left',
      label: 'codi-p2p-settings-label',
      description: 'codi-p2p-settings-description',
      cellsConnections: {
        in: {
          [getChannelName('codi_settings_change_label_predetermine')]: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-padding-top--0 u-padding-left--0 u-padding-right--0'
    }
  };
  const bbvaNotificationMessage = {
    zone: `${isSpherica ? 'content-panel-codi-settings' : 'app__main'}`,
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'default',
      className: 'u-margin--grid u-margin-top--1',
      message: 'codi-refactor-settings-modal-default-msm',
      buttonText: 'codi-refactor-settings-modal-default-set',
      icon: 'coronita:info',
      cellsConnections: {
        in: {
          [getChannelName('show_app_default')]: {
            bind: 'hidden'
          },
          [getChannelName('hidden_make_app_default')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('confirm_that_bbva_is_app_default')]: {
            bind: 'notification-message-button-click',
            analytics: analyticsPage.codiSettingsMessage('establecer app bbva')
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'spherica:info',
      bookTitle: true,
      className: '',
      message: '',
      messageTitle: 'codi-refactor-settings-modal-default-msm'
    }
  };
  const bbvaButtonOperations = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-operations',
    familyPath: '@bbva-web-components/bbva-button-operations',
    render: 'litElement',
    properties: {
      ambient: 'light',
      categoryHeader: '',
      cellsConnections: {
        in: {
          [getChannelName('set_options_operations_settings')]: {
            bind: 'options'
          }
        },
        out: {
          [getChannelName('chose_option_operations')]: {
            bind: 'button-operations-item-click'
          }
        }
      }
    }
  };
  const cellsOperationsListIndicatorsSpherica = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-operations-list-indicators-spherica',
    render: 'litElement',
    properties: {
      className: 'product-detail',
      gridColumns: 3,
      cellsConnections: {
        in: {
          codi_settings_set_options_operations_settings: {
            bind: 'operations'
          }
        },
        out: {
          codi_setting_chose_option_operations_learn_more: {
            bind: 'operation-codi-setting-learn-more'
          },
          codi_setting_chose_option_operations_therms: {
            bind: 'operation-codi-setting-therms'
          },
          codi_setting_chose_option_operations_erase_register: {
            bind: 'operation-codi-setting-erase-register'
          }
        }
      }
    }
  };
  const toastAppDefault = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-toast',
    familyPath: '@bbva-web-components/bbva-notification-toast',
    familyPathSpherica: '@bbva-spherica-components/bbva-notification-toast',
    render: 'litElement',
    properties: {
      type: 'success',
      iconExplainer: 'coronita:correct',
      fixedBottom: 'true',
      simpleLinkText: 'codi-refeactor-settings-registration-add',
      duration: '3000',
      autoHide: 'true',
      cellsConnections: {
        in: {
          [getChannelName('show_toast_app_default')]: {
            bind: 'show'
          }
        }
      }
    },
    propertiesSpherica: {
      iconExplainer: 'spherica:right',
      className: 'u-margin--1 u-margin-bottom--2 u-max-width--2',
      simpleLinkText: '',
      alertText: 'codi-refeactor-settings-registration-add'
    }
  };
  const modalAppDefault = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      titleIcon: 'coronita:info',
      cellsConnections: {
        in: {
          [getChannelName('confirm_that_bbva_is_app_default_next')]: {
            bind: 'visible'
          },
          [getChannelName('set_label_link_text')]: {
            bind: 'linkText'
          },
          [getChannelName('set_label_button')]: {
            bind: 'buttonText'
          },
          [getChannelName('set_label_body')]: {
            bind: 'bodyText'
          },
          [getChannelName('set_label_title')]: {
            bind: 'titleText'
          }
        },
        out: {
          [getChannelName('make_bbva_is_app_default')]: {
            bind: 'help-modal-footer-button-click'
          },
          [getChannelName('goback_page_initial')]: {
            bind: 'help-modal-footer-link-click'
          }
        }
      }
    }
  };
  const alertManagerLit = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      titleIcon: './images/alerts/caution.svg',
      cellsConnections: {
        in: {
          [getChannelName('show_prevent_delete_codi_data')]: {
            bind: 'visible'
          },
          [getChannelName('set_label_link_text_log')]: {
            bind: 'linkText'
          },
          [getChannelName('set_label_button_log')]: {
            bind: 'buttonText'
          },
          [getChannelName('set_label_body_log')]: {
            bind: 'bodyText'
          },
          [getChannelName('set_label_title_log')]: {
            bind: 'titleText'
          }
        },
        out: {
          [getChannelName('delete_data_codi')]: {
            bind: 'help-modal-footer-button-click'
          },
          [getChannelName('goback_page_initial')]: {
            bind: 'help-modal-footer-link-click'
          }
        }
      }
    }
  };
  const bbvaManagerCodi = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-setting',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      detailDownloadConfig: detailDownloadParams,
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initSettings'
          },
          global_set_app_settings: {
            bind: 'setIdDocumentsTermsConditions'
          },
          global_storage_get_registration_completed_codi_success: {
            bind: 'validateUserEnrollCodi'
          },
          global_storage_get_registration_completed_codi_error: {
            bind: 'userNotEnrollmentCodi'
          },
          global_storage_get_login_banxico_codi_success: {
            bind: 'validateAppDefault'
          },
          global_storage_get_login_banxico_codi_error: {
            bind: 'getDataToRequestLoginBanxico'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setDataCodiEnrollment'
          },
          global_storage_get_device_info_codi_key_success: {
            bind: 'requestBanxicoLogin'
          },
          global_storage_get_flag_is_app_default_codi_success: {
            bind: 'deleteCodiData'
          },
          global_storage_get_flag_is_app_default_codi_error: {
            bind: 'handleLoginBanxicoError'
          },
          [getChannelName('login_success')]: {
            bind: 'validateAppDefault'
          },
          [getChannelName('login_error')]: {
            bind: 'handleLoginBanxicoError'
          },
          [getChannelName('confirm_that_bbva_is_app_default')]: {
            bind: 'modalAppDefaultCodi'
          },
          [getChannelName('chose_option_operations')]: {
            bind: 'optionSelected'
          },
          global_open_document_url_success: {
            bind: 'closeDocument'
          },
          global_open_document_url_error: {
            bind: 'closeDocument'
          },
          [getChannelName('delete_data_codi')]: {
            bind: 'codiDataLoad'
          },
          [getChannelName('make_bbva_is_app_default')]: {
            bind: 'makeBbvaAppDefault'
          },
          [getChannelName('app_default_success_service')]: {
            bind: 'postDefaultAppEnrollment'
          },
          [getChannelName('app_default_error_service')]: {
            bind: 'errorDefaultAppEnrollment'
          },
          connection_status_codiSettings_online: {
            bind: 'internetConnection'
          },
          connection_status_codiSettings_offline: {
            bind: 'internetConnection',
            analytics: analyticsPage.error
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getChannelName('confirm_that_bbva_is_app_default_next')]: {
            bind: 'confirm-that-bbva-is-app-default-next'
          },
          [getChannelName('navigate_to_onboarding')]: {
            bind: 'redirect-to-onboarding-codi',
            link: {
              page: 'codiBeginRegister'
            }
          },
          [getChannelName('request_login_banxico')]: {
            bind: 'request-login-banxico'
          },
          [getChannelName('set_label_link_text')]: {
            bind: 'set-label-link-text'
          },
          [getChannelName('set_label_button')]: {
            bind: 'set-label-button'
          },
          [getChannelName('set_label_body')]: {
            bind: 'set-label-body'
          },
          [getChannelName('set_label_title')]: {
            bind: 'set-label-title'
          },
          [getChannelName('set_label_link_text_log')]: {
            bind: 'set-label-link-text-log'
          },
          [getChannelName('set_label_button_log')]: {
            bind: 'set-label-button-log'
          },
          [getChannelName('set_label_body_log')]: {
            bind: 'set-label-body-log'
          },
          [getChannelName('set_label_title_log')]: {
            bind: 'set-label-title-log'
          },
          [getChannelName('show_app_default')]: {
            bind: 'no-default-app'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-manager'
          },
          [getChannelName('app_delete_codi_modal')]: {
            bind: 'app-delete-codi-modal',
            analytics: analyticsPage.codiSettingsMessage('borrar registro codi')
          },
          [getChannelName('app_default_settings_codi_modal')]: {
            bind: 'app-default-settings-codi-modal',
            analytics: analyticsPage.codiSettingsMessage('confirmar app bbva')
          },
          [getChannelName('show_notification_app_predetermine')]: {
            bind: 'is-default-app'
          },
          [getChannelName('codi_settings_change_label_predetermine')]: {
            bind: 'change-label-predetermine'
          },
          [getChannelName('show_codi_feature')]: {
            bind: 'open-know-codi',
            link: {
              page: 'codiSettingsKnowMore'
            },
            analytics: analyticsPage.codiSettingsMessage('saber mas sobre el codi')
          },
          global_open_document_url: {
            bind: 'native-request-pdf',
            analytics: analyticsPage.termsAndConditions
          },
          [getChannelName('show_prevent_delete_codi_data')]: {
            bind: 'open-modal-delete-operation'
          },
          [getChannelName('return_settings')]: {
            bind: 'go-to-setting',
            backStep: true,
            analytics: analyticsPage.deleteCodiRecordLink
          },
          [getChannelName('show_toast_delete_codi')]: {
            bind: 'show-toast-success'
          },
          [getChannelName('set_simple_link_toast_detele')]: {
            bind: 'set-text-toast-delete'
          },
          [getChannelName('request_default_app_banxico_service')]: {
            bind: 'request-default-app-enrollment'
          },
          [getChannelName('hidden_make_app_default')]: {
            bind: 'hidden-make-app-default'
          },
          [getChannelName('now_bbva_is_app_default')]: {
            bind: 'show-now-bbva-is-app-default',
            analytics: analyticsPage.qrOperationsPlusCodi
          },
          [getChannelName('show_toast_app_default')]: {
            bind: 'show-toast-now-bbva-is-app-default'
          },
          [getChannelName('set_options_operations_settings')]: {
            bind: 'set-options-operations-settings'
          },
          codi_refactor_enrollment_page_show_error_modal_login_banxico: {
            bind: 'send-config-error-login'
          },
          [getChannelName('show_error_modal_default_app')]: {
            bind: 'send-config-error-default-app'
          },
          global_retry_error: {
            bind: 'glomo-retry-error-codi-settings'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          in: {
            global_set_app_settings: {
              bind: 'publicSettings'
            },
            codi_setting_chose_option_operations_learn_more: {
              bind: 'openKnowCodi'
            },
            codi_setting_chose_option_operations_therms: {
              bind: 'showPDF'
            },
            codi_setting_chose_option_operations_erase_register: {
              bind: 'modalDeleteCodi'
            },
            codi_settings_set_default_app_settings_accept: {
              bind: 'makeBbvaAppDefault'
            },
            codi_settings_delete_codi_accept: {
              bind: 'codiDataLoad'
            },
            codi_settings_reset_set_default_app_settings_accept: {
              bind: 'makeBbvaAppDefault'
            },
            codi_setting_retry_chose_option_operations_therms: {
              bind: 'showPDF'
            },
            codi_setting_to_call_bbva: {
              bind: 'callBBVALineFraud'
            }
          },
          out: {
            codi_settings_alert_manager_open_with_settings_spherica: {
              bind: 'open-alert-manager-spherica'
            },
            open_know_codi_alert_manager: {
              bind: 'open-know-codi-spherica',
              analytics: analyticsPage.codiSettingsMessage('saber mas sobre el codi')
            },
            global_action_launcher_dialer: {
              bind: 'call-bbva-line'
            }
          }
        }
      }
    }
  };
  const banxicoAPI = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-banxico',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('request_login_banxico')]: {
            bind: 'postLogin'
          },
          [getChannelName('request_default_app_banxico_service')]: {
            bind: 'postDefaultAppRequest'
          }
        },
        out: {
          [getChannelName('login_success')]: {
            bind: 'success-on-post-banxico-login'
          },
          [getChannelName('login_error')]: {
            bind: 'error-on-post-banxico-login'
          },
          [getChannelName('app_default_success_service')]: {
            bind: 'success-on-post-banxico-default-app',
            analytics: analyticsPage.codiSettingsMessage('confirmacion app predeterminada')
          },
          [getChannelName('app_default_error_service')]: {
            bind: 'error-on-post-banxico-default-app'
          }
        }
      }
    }
  };
  const businessDocumentsAPI = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: CONFIG.globalServices.host,
      businessDocumentsApiVersion: CONFIG.globalServices.versions.businessDocumentsV0,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      cellsConnections: {
        in: {
          [getChannelName('REQUEST_PDF_ID')]: {
            bind: 'getBusinessDocuments'
          },
          [getChannelName('REQUEST_PDF')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [getChannelName('_SUCCESS_RESPONSE_GET_ID')]: {
            bind: 'success-on-get-business-documents'
          },
          [getChannelName('_ERROR_RESPONSE_GET_ID')]: {
            bind: 'error-on-get-business-documents'
          },
          [getChannelName('_SUCCESS_POST_PDF')]: {
            bind: 'post-business-documents-success'
          },
          [getChannelName('_ERROR_POST_PDF')]: {
            bind: 'error-on-post-business-documents'
          }
        }
      }
    }
  };
  const base = {
    hash: 'codi-settings',
    currentPage: {
      url: '/codi-settings'
    },
    pages,
    template,
    components: [
      cellsSpinnerVeil,
      lifeCycle,
      navigationHandler,
      bbvaManagerCodi,
      bbvaHeader,
      bbvaHeaderCategory,
      contentPanelCodiSettings,
      bbvaListSimpeBank,
      bbvaNotificationHelp,
      bbvaNotificationMessage,
      isSpherica ? cellsOperationsListIndicatorsSpherica : bbvaButtonOperations,
      toastAppDefault,
      modalAppDefault,
      alertManagerLit,
      banxicoAPI,
      businessDocumentsAPI,
      cellsConnectionStatus(pageName)
    ]
  };
  if (CONFIG.native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  localStorageApp.addOutStorageChannels(base.components,
    ['registration_completed_codi', 'login_banxico_codi', 'enrollment_codi_key', 'device_info_codi_key', 'flag_is_app_default_codi', 'banxico_token',
      'codi_init_firebase', 'codi_banxico_request_acc', 'banxico_push_status', 'codi_pending_accounts', 'codi_historical_notification', 'codi_payments_information'], CONFIG);
  return sphericaPageUtils.spherize(base);
};
