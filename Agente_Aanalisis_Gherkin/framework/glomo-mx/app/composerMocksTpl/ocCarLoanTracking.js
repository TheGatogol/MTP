'use strict';

module.exports = (CONFIG) => {
  const {
    createSpinner
  } = require('./common/helpers/_utils');
  const {
    globalServices: {host, requiredToken = 'tsec', versions: {accounts}},
    native = false,
    nativeIos = false
  } = CONFIG;
  const pageName = 'ocCarLoanTracking';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const {
    appStartedRequestDetail,
    serviceError,
    appPageVisit,
    appStarted,
    appStep,
    siteErrorAccounts,
    getPageView
  } =  require('./analytics/_ocCarLoan')();
  const spinner = createSpinner(CONFIG);
  spinner.properties.className = 'solid-spinner';

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      className: 'bbva-dark-medium-blue',
      iOSFixedHeader: nativeIos
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
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
          __bridge_page_ocCarLoanTracking: {
            bind: 'init'
          }
        },
        out: {
          ch_oc_car_loan_tracking_init_page: {
            bind: 'init-page'
          },
          ch_oc_car_loan_tracking_reset_page: {
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
    familyPath: '@bbva-web-components/bbva-header-main',
    tag: 'bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'bbva-oc-car-loan-tracking-header-title',
      iconRightPrimary: 'bbva:close',
      variant: 'modal',
      accessibilityTextIconRightPrimary: 'Close',
      cellsConnections: {
        out: {
          ch_oc_car_loan_tracking_exit_page: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const panelDetail = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-detail',
    tag: 'bbva-panel-detail',
    render: 'litElement',
    properties: {
      maskChars: '',
      className: 'u-box-shadow--none',
      badgeAlignment: 'center',
      cellsConnections: {
        in: {
          ch_oc_car_set_panel_status: {
            bind: 'badgeText'
          },
          ch_oc_car_set_panel_badge_type: {
            bind: 'badgeTextType'
          },
          ch_oc_car_set_panel_link: {
            bind: 'link'
          },
          ch_oc_car_set_panel_mask: {
            bind: 'mask'
          },
          ch_oc_car_set_panel_visible_char: {
            bind: 'visibleChars'
          },
          ch_oc_car_set_panel_card_title: {
            bind: 'cardTitle'
          }
        },
        out: {
          global_open_control_veil: {
            bind: 'panel-detail-link-click'
          },
          ch_oc_car_loan_tracking_panel_detail: {
            bind: 'panel-detail-link-click',
            link: {
              page: 'ocCarLoanRequestDetails'
            },
            analytics: appStartedRequestDetail('firma prestamo vehicular', 'prestamos', 'firma prestamo vehicular', '1 indicaciones', '', 'detalle de solicitud')
          }
        }
      }
    }
  };

  const notificationMessageMain = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-notification-message',
    tag: 'bbva-notification-message',
    render: 'litElement',
    container: true,
    attributes: {
      'hide-bottom-padding-paragraph': 'true'
    },
    properties: {
      className: 'u-margin--1 u-margin-bottom--1-5 pb-24',
      id: 'notificationMessageMain',
      cellsConnections: {
        in: {
          ch_oc_car_loan_tracking_notification_main_variant: {
            bind: 'variant'
          }
        }
      }
    }
  };

  const notificationTextMain = {
    zone: 'notificationMessageMain.',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'unset': true
    },
    properties: {
      className: 'text-margin-0',
      size: 'S',
      alignment: 'center',
      cellsConnections: {
        in: {
          ch_oc_car_loan_tracking_notification: {
            bind: 'text'
          }
        }
      }
    }
  };

  const dataProvider = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-consumer-finance-dossiers',
    familyPath: '@glomo-web-components/bbva-dataprovider-consumer-finance-dossiers',
    render: 'litElement',
    properties: {
      apiVersion: accounts,
      host,
      native,
      cellsConnections: {
        in: {
          ch_oc_car_loan_tracking_request_data: {
            bind: 'getTrackingInformation'
          }
        },
        out: {
          ch_oc_car_loan_tracking_request_success: {
            bind: 'get-tracking-information-success'
          },
          ch_oc_car_loan_tracking_request_error: {
            bind: 'get-tracking-information-error',
            analytics: serviceError('prestamos', 'firma prestamo vehicular', 'error de servicio')
          },
          ch_oc_car_loan_tracking_request_error_api: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const progressVerticalStep = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-progress-vertical-step',
    tag: 'bbva-progress-vertical-step',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          ch_oc_car_loan_tracking_steps: {
            bind: 'steps'
          }
        },
        out: {
          ch_oc_car_loan_tracking_current_step_clicked: {
            bind: 'progress-vertical-step-link-click'
          }
        }
      }
    }
  };

  const notificationMessageFooter = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-notification-message',
    tag: 'bbva-notification-message',
    render: 'litElement',
    container: true,
    attributes: {
      hidden: true
    },
    properties: {
      id: 'notificationMessageFooter',
      className: 'u-margin--1 u-margin-top--0',
      variant: '',
      cellsConnections: {
        in: {
          ch_oc_car_loan_show_notification_footer: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const notificationTextFooter = {
    zone: 'notificationMessageFooter.',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      unset: true
    },
    properties: {
      className: 'u-margin-bottom--0-5',
      alignment: 'center',
      text: 'notification-footer-text',
      size: 'S'
    }
  };

  const notificationTextEmailFooter = {
    zone: 'notificationMessageFooter.',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      unset: true
    },
    properties: {
      alignment: 'center',
      fontWeight: '500',
      size: 'S',
      cellsConnections: {
        in: {
          ch_oc_car_tracking_email: {
            bind: 'text'
          }
        }
      }
    }
  };

  const complexModal = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-help-modal',
    tag: 'bbva-help-modal',
    render: 'litElement',
    container: true,
    attributes: {
      'hide-content-padding-top': true
    },
    properties: {
      id: 'complexModal',
      className: 'hide-padding-container',
      fullHeight: true,
      fixedFooter: true,
      headerText: 'bbva-oc-car-loan-account-selection-header-title',
      headerType: 'modal-three-level',
      cellsConnections: {
        in: {
          ch_send_to_modal_no_available_accounts_event: {
            bind: 'open'
          },
          ch_oc_car_loan_button_text_understood: {
            bind: 'buttonText'
          },
          native_back_button_clicked_close_modal: {
            bind: 'close'
          }
        },
        out: {
          ch_oc_car_loan_tracking_help_modal_close: {
            bind: 'help-modal-close'
          },
          cells_to_native_modal_opened: {
            'bind': 'help-modal-open',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            'bind': 'help-modal-close',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const panelInfo = {
    zone: 'complexModal.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-info',
    tag: 'bbva-panel-info',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--0-5',
      heading: 'bbva-oc-car-loan-tracking-oc-car-loan-complex-modal-panel-info-heading',
      text: 'bbva-oc-car-loan-tracking-panel-info-text',
      microillustration: 'error'
    }
  };

  const nextStepsModal = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-help-modal',
    tag: 'bbva-help-modal',
    render: 'litElement',
    container: true,
    attributes: {
      'hide-content-padding-top': true
    },
    properties: {
      id: 'nextStepsModal',
      className: 'hide-padding-container',
      fullHeight: true,
      fixedFooter: true,
      headerText: 'bbva-oc-car-loan-tracking-next-steps',
      headerType: 'modal-three-level',
      cellsConnections: {
        in: {
          ch_send_to_next_steps_event: {
            bind: 'open'
          },
          ch_oc_car_loan_button_text_understood: {
            bind: 'buttonText'
          },
          native_back_button_clicked_close_modal: {
            bind: 'close'
          }
        },
        out: {
          cells_to_native_modal_opened: {
            'bind': 'help-modal-open',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            'bind': 'help-modal-close',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const nextPanelInfo = {
    zone: 'nextStepsModal.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-info',
    tag: 'bbva-panel-info',
    render: 'litElement',
    attributes: {
      'hide-padding-bottom': true
    },
    properties: {
      className: 'u-margin-bottom--1',
      heading: 'bbva-oc-car-loan-tracking-next-steps',
      text: 'bbva-oc-car-loan-tracking-next-panel-info-text',
      microillustration: 'car'
    }
  };

  const nextBullets = {
    zone: 'nextStepsModal.slot-content',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
    tag: 'bbva-aggregation-bullet-list',
    render: 'litElement',
    properties: {
      className: 'u-text--left u-margin--grid',
      items: [
        'bbva-oc-car-loan-tracking-next-bullets-item-one',
        'bbva-oc-car-loan-tracking-next-bullets-item-two',
        'bbva-oc-car-loan-tracking-next-bullets-item-three'
      ]
    }
  };

  const nextNotificationMessage = {
    zone: 'nextStepsModal.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-notification-message',
    tag: 'bbva-notification-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      message: 'bbva-oc-car-loan-tracking-next-notification-message'
    }
  };

  const contractModal = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-help-modal',
    tag: 'bbva-help-modal',
    render: 'litElement',
    container: true,
    attributes: {
      'hide-content-padding-top': true
    },
    properties: {
      id: 'contractModal',
      className: 'hide-padding-container',
      fullHeight: true,
      fixedFooter: true,
      headerText: 'bbva-oc-car-loan-contract-signing-header-title',
      headerType: 'modal-three-level',
      cellsConnections: {
        in: {
          ch_send_to_modal_contract_signing_event: {
            bind: 'open'
          },
          ch_oc_car_loan_button_text_understood: {
            bind: 'buttonText'
          },
          native_back_button_clicked_close_modal: {
            bind: 'close'
          }
        },
        out: {
          cells_to_native_modal_opened: {
            'bind': 'help-modal-open',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            'bind': 'help-modal-close',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const contractPanelInfo = {
    zone: 'contractModal.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-info',
    tag: 'bbva-panel-info',
    render: 'litElement',
    attributes: {
      'hide-padding-bottom': true
    },
    properties: {
      className: 'u-margin-bottom--1',
      heading: 'bbva-oc-car-loan-tracking-contract-panel-info-heading',
      text: 'bbva-oc-car-loan-tracking-contract-panel-info-text',
      microillustration: 'officialdocument'
    }
  };

  const contractBullets = {
    zone: 'contractModal.slot-content',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
    tag: 'bbva-aggregation-bullet-list',
    render: 'litElement',
    properties: {
      className: 'u-text--left u-margin--grid',
      items: [
        'bbva-oc-car-loan-tracking-oc-car-loan-contract-bullets-item-one',
        'bbva-oc-car-loan-tracking-oc-car-loan-contract-bullets-item-two'
      ]
    }
  };

  const contractText = {
    zone: 'contractModal.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'font-weight': '300'
    },
    properties: {
      size: 'S',
      className: 'u-margin--grid',
      alignment: 'center',
      cellsConnections: {
        in: {
          ch_oc_car_loan_tracking_contract_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const loanTrackingDm = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
    tag: 'bbva-tracking-manager-oc-car-loan',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          contract_product_section_oc_banner_oc_car_loan_review_clicked: {
            bind: 'setTrackingConfiguration'
          },
          get_request_status: {
            bind: 'panelStatus'
          },
          ch_oc_car_loan_tracking_init_page: {
            bind: 'getDownpaymentStatus'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          ch_oc_car_loan_tracking_request_success: {
            bind: 'initTracking'
          },
          ch_oc_car_loan_tracking_request_error: {
            bind: 'trackingRequestError'
          },
          ch_oc_car_loan_tracking_request_error_api: {
            bind: 'trackingRequestError'
          },
          ch_oc_car_loan_tracking_current_step_clicked: {
            bind: 'trackingStepClicked'
          },
          ch_oc_car_loan_down_payment_exit_page: {
            bind: 'setDownpayment'
          },
          ch_oc_car_loan_down_payment_button_exit_page: {
            bind: 'setDownpayment'
          },
          ch_oc_car_loan_tracking_help_modal_close: {
            bind: 'closeHelpModalNoAvailableAccounts'
          },
          global_storage_get_downpayment_opened_success: {
            bind: 'downpaymentOpenedSuccess'
          },
          global_storage_get_downpayment_opened_error: {
            bind: 'downpaymentOpenedError'
          },
          global_storage_get_modal_no_available_accounts_opened_success: {
            bind: 'modalNoAvailableAccountsOpenedSuccess'
          },
          global_storage_get_modal_no_available_accounts_opened_error: {
            bind: 'modalNoAvailableAccountsOpenedError'
          },
          ch_oc_car_loan_tracking_leave: {
            bind: 'leaveTracking'
          }
        },
        out: {
          ch_oc_car_loan_tracking_request_data: {
            bind: 'request-tracking-data'
          },
          ch_oc_car_loan_tracking_notification: {
            bind: 'oc-car-loan-tracking-notification-main'
          },
          ch_oc_car_loan_tracking_steps: {
            bind: 'oc-car-loan-tracking-steps',
            analytics: appPageVisit('firma prestamo vehicular', '1 indicaciones', 'prestamos', 'firma prestamo vehicular', '1 indicaciones', '')
          },
          ch_oc_car_loan_analyticas_app_started: {
            bind: 'analytics-app-started',
            analytics: appStarted('firma prestamo vehicular', 'prestamos', 'firma prestamo vehicular', '1 indicaciones', '')
          },
          ch_oc_car_set_panel_card_title: {
            bind: 'set-panel-card-title'
          },
          ch_oc_car_loan_tracking_contract_text: {
            bind: 'set-contract-text'
          },
          ch_oc_car_set_panel_mask: {
            bind: 'set-panel-mask'
          },
          ch_oc_car_set_panel_visible_char: {
            bind: 'set-panel-visible-char'
          },
          ch_oc_car_set_panel_status: {
            bind: 'set-panel-status'
          },
          ch_oc_car_set_panel_badge_type: {
            bind: 'set-panel-badge-type'
          },
          ch_oc_car_loan_tracking_notification_main_variant: {
            bind: 'set-notification-variant'
          },
          ch_oc_car_loan_show_notification_footer: {
            bind: 'show-notification-footer'
          },
          ch_send_to_modal_down_payment_event: {
            bind: 'send-to-down-payment',
            link: {
              page: 'ocCarLoanDownPayment'
            }
          },
          ch_send_to_account_selection_event: {
            bind: 'send-to-account-selection',
            link: {
              page: 'ocCarLoanAccountSelection'
            },
            analytics: appStep(2, 'prestamos', 'firma prestamo vehicular', '2 seleccion cuenta', '2 seleccion cuenta', 'firma prestamo vehicular', 'gestion inicial')
          },
          ch_oc_car_loan_send_accounts: {
            bind: 'available-accounts'
          },
          ch_send_to_modal_no_available_accounts_event: {
            bind: 'send-to-modal-no-available-accounts',
            analytics: siteErrorAccounts
          },
          ch_send_to_contract_signing: {
            bind: 'send-to-contract-signing',
            link: {
              page: 'ocCarLoanContractSigning'
            },
            analytics: appStep(3, 'prestamos', 'firma prestamo vehicular', '3 firma documentos', '3 firma documentos', 'firma prestamo vehicular', 'gestion inicial')
          },
          ch_send_to_modal_contract_signing_event: {
            bind: 'send-to-modal-contract-signing'
          },
          ch_send_to_next_steps_event: {
            bind: 'send-to-next-steps'
          },
          ch_oc_car_set_panel_link: {
            bind: 'panel-detail-link'
          },
          global_set_in_storage: {
            bind: 'set-indications-opened'
          },
          global_get_from_storage: {
            bind: 'get-indications-opened'
          },
          ch_oc_car_tracking_email: {
            bind: 'tracking-email'
          },
          ch_oc_car_loan_tracking_analytics: {
            bind: 'analytics-panel-status',
            analytics: getPageView('STATUS', 'prestamos', 'firma prestamo vehicular')
          },
          global_retry_error: {
            bind: 'tracking-retry-error',
            analytics: serviceError('prestamos', 'firma prestamo vehicular', 'error de servicio')
          },
          ch_oc_car_loan_tracking_leave_page: {
            bind: 'leave-tracking',
            backStep: true
          },
          global_open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          ch_oc_car_loan_button_text_understood: {
            bind: 'set-button-text-understood'
          },
          ch_oc_car_loan_set_proposal_id: {
            bind: 'set-proposal-id'
          }
        }
      }
    }
  };

  const ocCarLoanTracking = {
    hash: 'oc-car-loan-tracking',
    currentPage: {
      url: '/ocCarLoanTracking'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      header,
      panelDetail,
      notificationMessageMain,
      notificationTextMain,
      progressVerticalStep,
      loanTrackingDm,
      notificationMessageFooter,
      notificationTextFooter,
      notificationTextEmailFooter,
      nextStepsModal,
      nextPanelInfo,
      nextBullets,
      nextNotificationMessage,
      complexModal,
      panelInfo,
      contractModal,
      contractPanelInfo,
      contractBullets,
      contractText,
      dataProvider
    ]
  };

  addRetryErrors(ocCarLoanTracking)([
    {
      id: 'OC-CAR-LOAN-TRACKING-SERVICE-ERROR-REQUEST',
      acceptRetry: { bind: 'getDownpaymentStatus', component: 'bbva-tracking-manager-oc-car-loan' },
      cancelRetry: { bind: 'leaveTracking', component: 'bbva-tracking-manager-oc-car-loan' },
      acceptCallForHelp: { bind: 'leaveTracking', component: 'bbva-tracking-manager-oc-car-loan' }
    }
  ]);

  localStorageApp.addOutStorageChannels(ocCarLoanTracking.components, ['downpayment_opened',
    'modal_no_available_accounts_opened'], CONFIG);

  return ocCarLoanTracking;
};
