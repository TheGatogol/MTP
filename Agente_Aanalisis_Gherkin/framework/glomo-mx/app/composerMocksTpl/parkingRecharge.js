module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    getLocalCurrency,
    createSpinner
  } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec'},
    paymentsServices,
    native,
    nativeIos,
    phoneNumberContact
  } = CONFIG;
  const pageName = 'parkingRecharge';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_parkingRecharge')(CONFIG);
  const handleLifeCycle = {
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
          __bridge_page_parkingRecharge: {
            bind: 'init'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
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
  const managerParkingRecharge = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-parking-recharge',
    familyPath: '@glomo-web-components/bbva-manager-parking-recharge',
    render: 'litElement',
    properties: {
      errorImage: './images/general_error.svg',
      host,
      headers: { 'Accept-Language': 'es' },
      imageParkingDark: './images/parking/parkingRecharge.svg',
      requiredToken,
      paymentsServices,
      native,
      otpId: pageName,
      cellsConnections: {
        in: {
          dashboard_accounts_from_financial: {
            bind: 'dataReceived'
          },
          [getGlobalName('init_page')]: {
            bind: 'sendTextButton'
          },
          [getGlobalName('click_accept_button')]: {
            bind: 'requestRechargeOfParking'
          },
          [getGlobalName('send_selected_account')]: {
            bind: 'selectedAccount'
          },
          [getGlobalName('successful_recharge_response')]: {
            bind: 'successResponsePayment'
          },
          [getGlobalName('error_recharge_response')]: {
            bind: 'errorResponsePayment'
          },
          [getGlobalName('go_back_one_step')]: {
            bind: 'showConfirmationMode'
          },
          [getGlobalName('click_accept_modal_button')]: {
            bind: 'backStepPage'
          },
          [getGlobalName('click_exit_button')]: {
            bind: 'backStepPage'
          },
          [getGlobalName('selected_amount')]: {
            bind: 'selectedAmount'
          },
          [getGlobalName('click_call_mc_button')]: {
            bind: 'callToParking'
          },
          global_parking_list_go_to_recharge_page: {
            bind: 'parkingMeterAccount'
          },
          parking_enrollment_success_send_account: {
            bind: 'parkingMeterAccount'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          global_set_app_settings: {
            bind: 'getParkingCityDataRecharge'
          },
          global_mtu_exception_back_navigation: {
            bind: 'mtuFlag'
          },
          blue_redirect_account_detail_parking: {
            bind: 'parkingMeterAccount'
          },
          pre_recharge_selectedAmount_listening_mode: {
            bind: 'selectedAmount'
          },
          pre_recharge_selectedAccount_listening_mode: {
            bind: 'selectedAccount'
          }
        },
        out: {
          [getGlobalName('sending_accounts')]: {
            bind: 'sending-accounts'
          },
          [getGlobalName('send_text_total_amount')]: {
            bind: 'send-text-total-amount'
          },
          [getGlobalName('send_text_amount_message')]: {
            bind: 'send-text-amount-message'
          },
          [getGlobalName('send_items')]: {
            bind: 'send-items'
          },
          [getGlobalName('request_for_recharge')]: {
            bind: 'request-for-recharge'
          },
          [getGlobalName('open_modal_warning')]: {
            bind: 'open-modal-warning'
          },
          [getGlobalName('send_warning_modal_button_text')]: {
            bind: 'send-warning-modal-button-text'
          },
          [getGlobalName('send_warning_modal_link_text')]: {
            bind: 'send-warning-modal-link-text'
          },
          [getGlobalName('send_warning_modal_first_paragraph')]: {
            bind: 'send-warning-modal-first-paragrapht'
          },
          [getGlobalName('send_warning_modal_second_paragraph')]: {
            bind: 'send-warning-modal-second-paragrapht'
          },
          [getGlobalName('back_step_page')]: {
            bind: 'back-step-page',
            backStep: true
          },
          [getGlobalName('navigate_to_success_page')]: {
            bind: 'success-event-response-payment',
            link: {
              page: 'parkingRechargeSuccess',
              cleanUntil: 'parkingRecharge'
            }
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          [getGlobalName('reset_multistep')]: {
            bind: 'reset-multistep'
          },
          global_alert_manager_open_with_settings: {
            bind: 'show-modal-excess-amount'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getGlobalName('send_max_amount')]: {
            bind: 'send-max-amount-data'
          },
          [getGlobalName('send_comission_data')]: {
            bind: 'send-commission-data'
          },
          dashboard_refresh_financial_overview: {
            bind: 'success-event-response-payment'
          }
        }
      }
    }
  };
  const multistepParkingRecharge = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-parking-recharge',
    familyPath: '@glomo-web-components/bbva-multistep-parking-recharge',
    render: 'litElement',
    properties: {
      image: './images/parking/parkingRecharge.svg',
      defaultButtonClass: '',
      cellsConnections: {
        in: {
          [getGlobalName('sending_accounts')]: {
            bind: 'listAccounts'
          },
          [getGlobalName('send_items')]: {
            bind: 'items'
          },
          [getGlobalName('reset_multistep')]: {
            bind: 'resetMultistep'
          },
          global_parking_list_go_to_recharge_page: {
            bind: 'accountDetail'
          },
          parking_enrollment_success_send_account: {
            bind: 'accountDetail'
          },
          [getGlobalName('send_max_amount')]: {
            bind: 'maxAmount'
          },
          blue_redirect_account_detail_parking: {
            bind: 'accountDetail'
          },
          pre_recharge_selectedAmount_listening_mode: {
            bind: 'selectedAmount'
          },
          pre_recharge_selectedAccount_listening_mode: {
            bind: 'selectedAccount'
          },
          amount_step_completed_listening_mode: {
            bind: 'isAmountStepCompleted'
          },
          account_step_completed_listening_mode: {
            bind: 'isAccountStepCompleted'
          }
        },
        out: {
          [getGlobalName('multistep_all_complete')]: {
            bind: 'expandable-multistep-all-complete'
          },
          [getGlobalName('selected_amount')]: {
            bind: 'form-preset-amount-item-change'
          },
          [getGlobalName('send_selected_account')]: {
            bind: 'send-selected-account'
          },
          [getGlobalName('show_modal_more_information')]: {
            bind: 'show-modal-more-information'
          },
          [getGlobalName('account_step_process_analytic')]: {
            bind: 'account-step-process'
          },
          [getGlobalName('go_back_one_step')]: {
            bind: 'header-right-primary-click'
          },
          [getGlobalName('bbva_multistep_edit_step_analytic')]: {
            bind: 'bbva-multistep-edit-step'
          },
          [getGlobalName('bbva_multistep_parking_recharge_continue_amount_btn')]: {
            bind: 'bbva-multistep-parking-recharge-continue-amount-btn'
          }
        }
      }
    }
  };
  const buttonAccept = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      className: 'u-box-shadow--none',
      buttonText: 'bbva-parking-city-multistep-recharge-continue',
      buttonClass: 'positive',
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getGlobalName('multistep_all_complete')]: {
            bind: 'show'
          },
          [getGlobalName('selected_amount')]: {
            bind: 'amount'
          },
          [getGlobalName('send_text_total_amount')]: {
            bind: 'label'
          },
          [getGlobalName('send_text_amount_message')]: {
            bind: 'headerAdditionalInfo'
          }
        },
        out: {
          [getGlobalName('click_accept_button')]: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    }
  };
  const modalWarning = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    container: true,
    properties: {
      id: 'modalWarning',
      modalType: 'warning',
      titleIcon: 'bbva:warning',
      titleText: '',
      cellsConnections: {
        in: {
          [getGlobalName('open_modal_warning')]: {
            bind: 'open'
          },
          [getGlobalName('send_warning_modal_button_text')]: {
            bind: 'buttonText'
          },
          [getGlobalName('send_warning_modal_link_text')]: {
            bind: 'linkText'
          }
        },
        out: {
          [getGlobalName('click_accept_modal_button')]: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    }
  };
  const divModalWarning = {
    zone: 'modalWarning.slot-content',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    properties: {
      id: 'div_modalWarning'
    }
  };
  const firstParagraphOfModal = {
    zone: 'modalWarning.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'slot',
      size: 'S',
      alignment: 'center',
      cellsConnections: {
        in: {
          [getGlobalName('send_warning_modal_first_paragraph')]: {
            bind: 'text'
          }
        }
      }
    }
  };
  const secondParagraphOfModal = {
    zone: 'modalWarning.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'slot',
      size: 'S',
      alignment: 'center',
      cellsConnections: {
        in: {
          [getGlobalName('send_warning_modal_second_paragraph')]: {
            bind: 'text'
          }
        }
      }
    }
  };
  const managerAnalyticsParkingRecharge = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-parking-recharge',
    familyPath: '@glomo-web-components/bbva-manager-parking-recharge',
    render: 'litElement',
    properties: {
      phoneNumber: phoneNumberContact,
      cellsConnections: {
        in: {
          [getGlobalName('send_comission_data')]: {
            bind: 'commission'
          },
          [getGlobalName('init_page')]: {
            bind: 'firePageVist'
          },
          [getGlobalName('show_modal_more_information')]: {
            bind: 'fireAppStarted'
          },
          [getGlobalName('selected_amount')]: {
            bind: 'fireAppStarted'
          },
          [getGlobalName('bbva_multistep_parking_recharge_continue_amount_btn')]: {
            bind: 'fireAppStarted'
          },
          [getGlobalName('account_step_process_analytic')]: {
            bind: 'fireAppStepTwo'
          },
          [getGlobalName('multistep_all_complete')]: {
            bind: 'fireAppStepThree'
          },
          sign_modal_open: {
            bind: 'fireAppStepFour'
          },
          [getGlobalName('send_selected_account')]: {
            bind: 'parseProductName'
          },
          [getGlobalName('navigate_to_success_page')]: {
            bind: 'fireAppCompleted'
          },
          [getGlobalName('reset_multistep')]: {
            bind: 'resetAnalytics'
          },
          [getGlobalName('bbva_multistep_edit_step_analytic')]: {
            bind: 'changedStepSelection'
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
            analytics: analytics.getStepWithLevel3(2, 'wayToPay')
          },
          [getGlobalName('analytics_app_step_3')]: {
            bind: 'analytics-app-step-3',
            analytics: analytics.getStepWithLevel3(3, 'confirmation')
          },
          [getGlobalName('analytics_app_step_4')]: {
            bind: 'analytics-app-step-4',
            analytics: analytics.appStepSigning
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
    hash: 'parking-recharge',
    currentPage: {
      url: '/parking-recharge'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerHeight: 0,
        className: 'bg-core-blue'
      }
    },
    components: [
      createSpinner(CONFIG),
      handleLifeCycle,
      managerParkingRecharge,
      multistepParkingRecharge,
      buttonAccept,
      modalWarning,
      divModalWarning,
      firstParagraphOfModal,
      secondParagraphOfModal,
      managerAnalyticsParkingRecharge
    ]
  };
  const errorAndSignWidgetConnector  = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-manager-parking-recharge', {widgetId: 'PARKING-RECHARGE-ERROR', acceptCallForHelp: { bind: 'callToBank', component: 'bbva-manager-parking-recharge' }});
  return base;
};
