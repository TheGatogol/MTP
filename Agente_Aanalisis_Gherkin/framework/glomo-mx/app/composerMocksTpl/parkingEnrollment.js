module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    getAlternativeFormatDate,
    glomoOpenDocument,
    createSpinner,
    detailDownloadParams
  } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec' },
    native,
    nativeIos
  } = CONFIG;
  const pageName = 'parkingEnrollment';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const spinner = createSpinner(CONFIG);
  const errorAndSignWidgetConnector  = require('./common/_widget-sign-connector');
  const analytics = require('./analytics/_parkingEnrollment')(CONFIG);
  spinner.properties.className = 'solid-spinner';
  spinner.tagSpherica = 'cells-spinner-veil-spherica';

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        out: {
          parking_enrollment_exit_modal_accept: {
            bind: 'alert-EXIT-PARKING-ENROLLMENT-accept',
            backStep: true
          },
          parking_enrollment_exit_modal_cancel: {
            bind: 'alert-EXIT-PARKING-ENROLLMENT-cancel'
          },
          parking_enrollment_duplicate_account_modal_accept: {
            bind: 'alert-DUPLICATE-ACCOUNT-PARKING-ENROLLMENT-accept'
          },
          parking_enrollment_account_not_found_accept: {
            bind: 'alert-PARKING-ACCOUNT-NOT-FOUND-accept'
          },
          parking_enrollment_account_not_found_cancel: {
            bind: 'alert-PARKING-ACCOUNT-NOT-FOUND-cancel'
          },
          global_parking_recharge_click_exit_button: {
            bind: 'alert-MODAL-EXCESS-AMOUNTS-accept'
          },
          global_parking_recharge_click_call_mc_button: {
            bind: 'alert-MODAL-EXCESS-AMOUNTS-cancel'
          }
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_parkingEnrollment: {
            bind: 'init'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
            bind: 'init-page'
          },
          parking_enrollment_reset: {
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
  const header =  {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      text: 'bbva-header-parking-enrollment-title',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      variant: 'modal',
      id: 'headerParkingEnrollment',
      cellsConnections: {
        out: {
          parking_enrollment_exit_validation: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-sequential',
      className: 'primary',
      ambient: 'primary-alt',
      text: 'bbva-header-parking-enrollment-title-spherica',
      rightButtons: [ {
        id: 'btn-close',
        name: 'Close',
        icon: 'coronita:close',
        accessibilityText: 'bbva-header-main-a11y-icon-close-label',
        label: 'bbva-help-modal-close-button',
        defaultEventIconName: 'header-main-icon-right-primary-click'
      } ]
    }
  };
  const multistepEnrollment = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-parking-enrollment',
    tagSpherica: 'bbva-multistep-parking-enrollment-spherica',
    familyPath: '@glomo-web-components/bbva-multistep-parking-enrollment',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-parking-enrollment-spherica',
    render: 'litElement',
    properties: {
      imageDark: './images/parking/Clip_negro.svg',
      cellsConnections: {
        in: {
          parking_enrollment_reset: {
            bind: 'reset'
          },
          parking_enrollment_phone_agenda: {
            bind: 'phoneNumber'
          },
          parking_enrollment_alias_agenda: {
            bind: 'alias'
          },
          parking_enrollment_duplicate_account_modal_accept: {
            bind: 'editStep'
          },
          parking_enrollment_account_not_found_accept: {
            bind: 'editStep'
          },
          parking_enrollment_account_not_found_cancel: {
            bind: 'editStep'
          },
          [getGlobalName('providers_information')]: {
            bind: 'providers'
          },
          parking_enrollment_confirm_complete_register_account_step: {
            bind: 'setCompleteSecondStepData'
          },
          parking_enrollment_get_event_detail: {
            bind: 'eventSave'
          }
        },
        out: {
          parking_enrollment_request_contact: {
            bind: 'form-field-button-submit'
          },
          parking_enrollment_phone_number: {
            bind: 'send-phone-number'
          },
          parking_enrollment_alias: {
            bind: 'send-phone-alias'
          },
          parking_enrollment_request_register_account: {
            bind: 'parking-enrollment-register-account'
          },
          parking_enrollment_request_pdf: {
            bind: 'list-file-link-click'
          },
          parking_enrollment_terms_and_conditions: {
            bind: 'sending-terms-and-conditions'
          },
          parking_enrollment_get_bills: {
            bind: 'get-bills-account'
          },
          open_control_veil: {
            bind: 'show-spinner'
          },
          [getGlobalName('notification_message_link_click_analytic')]: {
            bind: 'notification-message-link-click'
          },
          [getGlobalName('first_step_continue_analytic')]: {
            bind: 'parking-enrollment-first-step-continue'
          },
          [getGlobalName('step_terms_and_conditions_completed')]: {
            bind: 'expandable-multistep-all-complete'
          },
          [getGlobalName('send_steps_status')]: {
            bind: 'send-steps-status'
          },
          [getGlobalName('parking_enrollment_send_step_changed')]: {
            bind: 'parking-enrollment-send-step'
          },
          parking_enrollment_send_modal_open: {
            bind: 'notification-message-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            parking_enrollment_go_to_mueveCiudad_spherica: {
              bind: 'help-modal-footer-button-click'
            }
          }
        }
      }
    }
  };
  const modalParkingEnrollment = [
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'bbva-help-modal',
      familyPath: '@bbva-web-components/bbva-help-modal',
      render: 'litElement',
      container: true,
      properties: {
        id: 'modalParkingEnrollment',
        fullHeight: true,
        fixedFooter: true,
        headerType: 'modal',
        headerText: 'bbva-header-parking-enrollment-title',
        hideContentPaddingTop: true,
        cellsConnections: {
          in: {
            parking_enrollment_modal_button_text: {
              bind: 'buttonText'
            },
            parking_enrollment_modal_link_text: {
              bind: 'linkText'
            },
            parking_enrollment_send_modal_open: {
              bind: 'open'
            }
          },
          out: {
            parking_enrollment_go_to_mueveCiudad: {
              bind: 'help-modal-footer-button-click'
            }
          }
        }
      }
    },
    {
      zone: 'modalParkingEnrollment.slot-content',
      type: 'UI',
      tag: 'bbva-panel-info',
      familyPath: '@bbva-web-components/bbva-panel-info',
      render: 'litElement',
      properties: {
        id: 'modalParkingEnrollmentPanelInfor',
        microillustration: 'caution',
        text: 'bbva-multistep-parking-enrollment-help-modal-message'
      }
    }
  ];
  const managerParkingEnrollment = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-parking-enrollment',
    familyPath: '@glomo-web-components/bbva-manager-parking-enrollment',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      detailDownloadConfig: detailDownloadParams,
      provider: 'bbva-providers-parking-enrollment-title',
      productId: 'TYC_MUEVE_CIUDAD',
      dateFormat: getAlternativeFormatDate(),
      isIOS: nativeIos,
      imageSrc: './images/parking/Clip.svg',
      cellsConnections: {
        in: {
          parking_enrollment_phone_number: {
            bind: 'phoneNumber'
          },
          parking_enrollment_exit_validation: {
            bind: 'openExitAlert'
          },
          parking_enrollment_alias: {
            bind: 'alias'
          },
          parking_enrollment_response_contact_success: {
            bind: 'extractContactData'
          },
          parking_enrollment_request_pdf: {
            bind: 'getIdDocument'
          },
          parking_enrollment_terms_and_conditions: {
            bind: 'requestTermsAndConditions'
          },
          parking_enrollment_get_bills: {
            bind: 'getAccount'
          },
          parking_enrollment_go_to_mueveCiudad: {
            bind: 'modalNavigation'
          },
          parking_enrollment_request_register_account: {
            bind: 'calledFromEnrollment'
          },
          parking_enrollment_send_modal_open: {
            bind: 'buildInfoModal'
          },
          parking_enrollment_reset: {
            bind: 'resetEnrollment'
          },
          [getGlobalName('init_page')]: {
            bind: 'sendDynamicText'
          },
          global_set_app_settings: {
            bind: 'getParkingCityData'
          }
        },
        out: {
          parking_enrollment_phone_agenda: {
            bind: 'sending-phone-number-from-agenda'
          },
          parking_enrollment_alias_agenda: {
            bind: 'sending-alias-from-agenda'
          },
          global_open_document_url: {
            bind: 'request-post-document'
          },
          parking_enrollment_send_date: {
            bind: 'parking-enrollment-success-date'
          },
          parking_enrollment_send_provider: {
            bind: 'parking-enrollment-success-provider'
          },
          parking_enrollment_send_agreement: {
            bind: 'parking-enrollment-success-agreement'
          },
          parking_enrollment_send_phone: {
            bind: 'parking-enrollment-success-phone'
          },
          parking_enrollment_send_phone_covered: {
            bind: 'parking-enrollment-success-phone-covered'
          },
          parking_enrollment_send_alias: {
            bind: 'parking-enrollment-success-alias'
          },
          parking_enrollment_send_balance: {
            bind: 'parking-enrollment-success-balance'
          },
          parking_enrollment_send_operation: {
            bind: 'parking-enrollment-success-operation'
          },
          parking_enrollment_navigate_to_success: {
            bind: 'navigate-to-parking-enrollment-success',
            link: {
              page: 'parkingEnrollmentSuccess',
              skipHistory: true
            }
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          global_retry_error: {
            bind: 'parking-enrollment-retry-error'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          [getGlobalName('navigate_parking_enrollment_success')]: {
            bind: 'navigate-to-parking-enrollment-success'
          },
          parking_enrollment_modal_button_text: {
            bind: 'send-modal-button-text'
          },
          parking_enrollment_modal_link_text: {
            bind: 'send-modal-link-text'
          },
          parking_enrollment_exit_flow: {
            bind: 'exit-operative',
            backStep: true
          },
          global_action_launcher_market: {
            bind: 'open-move-city-app'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-parking-modal-enrollment'
          },
          global_open_document_base64: {
            bind: 'show-document-event'
          },
          [getGlobalName('providers_information')]: {
            bind: 'send-providers-information'
          },
          [getGlobalName('button_options')]: {
            bind: 'send-button-options'
          },
          parking_enrollment_confirm_complete_register_account_step: {
            bind: 'confirm-complete-register-account-step'
          },
          parking_enrollment_get_event_detail: {
            bind: 'get-event-detail'
          },
          logout_success: {
            bind: 'bbva-multistep-parking-enrollment-logout-success',
            'forward-to-native': true
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      errorImageSpherica: './images/parking/Warning.svg',
      imageError: '',
      alertBoxVariant: 'primary-alt',
      dateFormat: 'DD MMM YYYY, HH:mm [h]',
      provider: 'bbva-providers-parking-enrollment-title-spherica',
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-parking-modal-enrollment'
            }
          },
          in: {
            parking_enrollment_go_to_mueveCiudad_spherica: {
              bind: 'modalNavigation'
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
  const contactsPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-contacts',
    properties: {
      cellsConnections: {
        in: {
          parking_enrollment_request_contact: {
            bind: 'pickContact'
          }
        },
        out: {
          parking_enrollment_response_contact_success: {
            bind: 'picked-contact-served'
          },
          parking_enrollment_response_get_contact_error: {
            bind: 'error'
          }
        }
      }
    }
  };
  const managerAnalyticsParkingEnrollment = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-parking-enrollment',
    familyPath: '@glomo-web-components/bbva-manager-parking-enrollment',
    render: 'litElement',
    properties: {
      isSpherica,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'firePageVist'
          },
          [getGlobalName('notification_message_link_click_analytic')]: {
            bind: 'fireAppStarted'
          },
          [getGlobalName('first_step_continue_analytic')]: {
            bind: 'fireAppStarted'
          },
          [getGlobalName('step_terms_and_conditions_completed')]: {
            bind: 'fireAppStepFour'
          },
          sign_modal_open: {
            bind: 'fireAppStepFifth'
          },
          [getGlobalName('navigate_parking_enrollment_success')]: {
            bind: 'fireAppCompleted'
          },
          parking_enrollment_reset: {
            bind: 'resetAnalytics'
          },
          [getGlobalName('parking_enrollment_send_step_changed')]: {
            bind: 'changedSelectionStep'
          },
          [getGlobalName('send_steps_status')]: {
            bind: 'stepEnrollment'
          }
        },
        out: {
          [getGlobalName('analytics_app_page_visit')]: {
            bind: 'analytics-app-page-visit',
            analytics: analytics.pageVisit
          },
          [getGlobalName('analytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: analytics.appStarted
          },
          [getGlobalName('analytics_app_step_2')]: {
            bind: 'analytics-app-step-2',
            analytics: analytics.getStepWithLevel3(2, 'linkAccount')
          },
          [getGlobalName('analytics_app_step_3')]: {
            bind: 'analytics-app-step-3',
            analytics: analytics.getStepWithLevel3(3, 'termsAndConditions')
          },
          [getGlobalName('analytics_app_step_4')]: {
            bind: 'analytics-app-step-4',
            analytics: analytics.getStepWithLevel3(4, 'confirmation')
          },
          [getGlobalName('analytics_app_step_5')]: {
            bind: 'analytics-app-step-5',
            analytics: analytics.getStepWithLevel3(5, 'fifthOtp', false)
          },
          [getGlobalName('analytics_app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          }
        }
      }
    }
  };
  const base = {
    hash: 'parking-enrollment',
    currentPage: {
      url: '/parking-enrollment'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'horizontal',
        disableEdgeSwipe: true,
        headerFixed: true,
        disableScrollLock: true,
        extraHeaderClass: isSpherica ? '' : 'bbva-core-blue',
        className: isSpherica ? '' : 'bg-core-blue'
      }
    },
    components: [
      spinner,
      lifeCycle,
      header,
      multistepEnrollment,
      managerParkingEnrollment,
      contactsPlugin,
      managerAnalyticsParkingEnrollment
    ]
  };
  if (native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  } else {
    base.components.push(...modalParkingEnrollment);
  }
  errorAndSignWidgetConnector('parking-enrollment-retry-error', {acceptCallForHelp: { bind: 'callToMoveCity', component: 'bbva-manager-parking-enrollment' }});
  errorAndSignWidgetConnector('parking-enrollment-customers-error', {acceptCallForHelp: { bind: 'exit', component: 'bbva-manager-parking-enrollment' }});
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-manager-parking-enrollment', pageName, ['post-customers-customer-terms-success', 'post-customers-customer-terms-error']);
  return sphericaPageUtils.spherize(base);
};
