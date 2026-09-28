'use strict';

module.exports = config => {
  const pageName = 'cardOriginationOcDebitCard';
  const {
    getLanguage,
    getLocalCurrency,
    getCurrencyCode,
    pluginDatePicker
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(pageName);
  const analytics = require('./analytics/_cardOriginationOcDebitCard')();
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        cardCommissionChargeV3,
        cardDeliveriesV1,
        customersAddressesV1,
        customerContactDetailsV1,
        geographicPlacesV1,
        accounts,
        customersV1,
        cardProposeDeliveryV3
      }
    },
    native = false,
    nativeIos = false
  } = config;

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true,
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`,
      cellsConnections: {}
    }
  };

  const bbvaCardPayrollRequest = {
    zone: 'app__transactional',
    type: 'UI',
    familyPath: '@bbva-web-components-widgets/card-origination-oc-debit-card',
    tag: 'card-origination-oc-debit-card',
    render: 'litElement',
    propertiesSpherica: {
      iOSFixedHeader: nativeIos
    },
    properties: {
      currencyCode: getCurrencyCode(),
      catalogId: 'SEPOMEX',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      native,
      nativeIOS: nativeIos,
      host,
      requiredToken,
      cardsCommissionChargeApiVersion: cardCommissionChargeV3,
      cardsDeliveriesApiVersion: cardDeliveriesV1,
      cardsSchedulesDeliveriesApiVersion: cardDeliveriesV1,
      customerAddressesApiVersion: customersAddressesV1,
      customerContactDetailsApiVersion: customerContactDetailsV1,
      geographicPlacesApiVersion: geographicPlacesV1,
      accountsApiVersion: accounts,
      customersApiVersion: customersV1,
      cardProposeDeliveryApiVersion: cardProposeDeliveryV3,
      maxRetries: 3,
      serviceType: 'D',
      stamping: 'REGISTRATION',
      zipCodeError: 'NoDis',
      addressInformation: {
        street: 'STREET',
        exteriorNumber: 'EXTERIOR_NUMBER',
        interiorNumber: 'INTERIOR_NUMBER',
        colony: 'COLONY',
        postalCode: 'POSTAL_CODE',
        delegation: 'DELEGATION',
        state: 'STATE',
        stateCode: 'STATE_CODE',
        administrativeAreaLevel: 'ADMINISTRATIVE_AREA_LEVEL_1',
        country: 'COUNTRY',
        municipality: 'MUNICIPALITY',
        retail: 'REGISTRATION_RETAIL'
      },
      maximumCharacters: {
        street: 50,
        exteriorNumber: 8,
        interiorNumber: 8,
        postalCode: 5,
        state: 8,
        reference: 25
      },
      patterns: {
        numbersAndLetters: '^[a-zA-Z0-9 ]',
        onlyNumbers: '^[0-9]',
        noNumbersLettersDotAndHyphens: '^[a-zA-Z0-9.\\- ]'
      },
      cellsConnections: {
        in: {
          __bridge_page_cardOriginationOcDebitCard: {
            bind: 'init'
          },
          card_Detail_manager_related_id: {
            bind: 'accountId'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_open_selector_native_success: {
            bind: 'nativeOptionSelected'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigate'
          },
          native_back_button_clicked_close_modal: {
            bind: 'modalsEvents'
          },
          card_Detail_commission: {
            bind: 'commission'
          },
          card_Detail_allotment: {
            bind: 'idAllotment'
          },
          card_Detail_retail_request: {
            bind: 'typeRequest'
          },
          card_Detail_payroll_request: {
            bind: 'typeRequest'
          },
          sign_modal_cancelled: {
            bind: 'showMultistep'
          },
          cells_to_native_modal_closed: {
            bind: 'showMultistep'
          },
          controller_mx_native_date_selected: {
            bind: 'nativeDateOptionSelected'
          },
          connection_status_cardOriginationOcDebitCard_offline: {
            bind: 'connectionStatuosOffline'
          },
          connection_status_cardOriginationOcDebitCard_online: {
            bind: 'connectionStatuosOnline'
          }
        },
        out: {
          oc_debit_card_open_native_calendar: {
            bind: 'card-origination-oc-debit-card-native-controller-mx-calendar-show'
          },
          global_open_selector_native: {
            bind: 'card-origination-oc-debit-card-colony-selector-native-selector-select'
          },
          card_origination_oc_debit_card_leave_page: {
            bind: 'card-origination-oc-debit-card-operative-exit',
            backStep: true
          },
          card_origination_oc_debit_card_to_dashboard: {
            bind: 'card-origination-oc-debit-card-to-dashboard-navigate',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          },
          card_origination_oc_debit_card_analytics_initial_event: {
            bind: 'card-origination-oc-debit-card-analytics-fire-detail'
          },
          cells_to_native_modal_opened: {
            'bind': 'card-origination-oc-debit-card-modal-status-open',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            'bind': 'card-origination-oc-debit-card-modal-status-close',
            'forward-to-native': true
          },
          card_origination_oc_debit_card_send_signature_analitic: {
            bind: 'signature-required-first-step-dm',
            analytics: analytics.payrollViewOtp
          },
          card_origination_oc_debit_card_onboarding_modal_click: {
            bind: 'card-origination-oc-debit-card-onboarding-modal-click'
          },
          card_origination_oc_debit_card_current_active_step: {
            bind: 'card-origination-oc-debit-card-multistep-current-active-step'
          },
          card_origination_oc_debit_card_show_success_page: {
            bind: 'card-origination-oc-debit-card-success-show'
          },
          card_origination_oc_debit_card_configuration_detail_modal: {
            bind: 'card-origination-oc-debit-card-modal-configuration-set',
            analytics: analytics.payrollViewDetail
          },
          card_origination_oc_debit_card_scheduled_address_service_error: {
            bind: 'card-origination-oc-debit-card-error-modal-exit-postscheadulesdeliveries-modal-open',
            analytics: analytics.payrollViewServiceError
          },
          card_origination_oc_debit_card_onboarding_modal_show: {
            bind: 'card-origination-oc-debit-card-onboarding-modal-show',
            analytics: analytics.payrollPageVisit
          }
        },
        params: {
          cardId: 'productId'
        }
      }
    }
  };

  const mobileShowInfo = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-show-info',
    familyPath: '@glomo-web-components/bbva-nativeconnector-show-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_open_selector_native: {
            bind: 'nativeListModal'
          }
        },
        out: {
          global_open_selector_native_success: {
            bind: 'show-info-native-list-modal-success'
          }
        }
      }
    }
  };

  const controllerOcCardDatePickerMx = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-controller-oc-debit-card-date-picker-mx',
    familyPath: '@glomo-web-components/bbva-controller-oc-debit-card-date-picker-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          oc_debit_card_open_native_calendar: {
            bind: 'openNativeCalendar'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'nativeDateOptionSelected'
          }
        },
        out: {
          global_nativeconnector_datepicker_launch: {
            bind: 'controller-oc-debit-card-date-picker-mx-calendar-show'
          },
          controller_mx_native_date_selected: {
            bind: 'controller-oc-debit-card-date-picker-mx-date-selected'
          }
        }
      }
    }
  };

  const managerAnalytics = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-card-origination-oc-debit-card',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-configuration',
    render: 'litElement',
    type: 'DM',
    properties: {
      config: analytics.analyticsConfig,
      dependsOnAppStartedLaunched: true,
      appStartedText: '',
      cellsConnections: {
        in: {
          card_origination_oc_debit_card_analytics_initial_event: {
            bind: 'firePageView'
          },
          card_origination_oc_debit_card_onboarding_modal_click: {
            bind: 'fireItemAppStarted'
          },
          card_origination_oc_debit_card_current_active_step: {
            bind: 'appStep'
          },
          card_origination_oc_debit_card_show_success_page: {
            bind: 'appCompleted'
          }
        },
        out: {
          card_origination_oc_debit_card_fire_analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: analytics.payrollPageStarted
          },
          card_origination_oc_debit_card_fire_analytics_app_step_address: {
            bind: 'analytics-app-step-address',
            analytics: analytics.payrollAppStep('2', 'direccion envio')
          },
          card_origination_oc_debit_card_fire_analytics_app_step_date_information: {
            bind: 'analytics-app-step-date-information',
            analytics: analytics.payrollAppStep('3', 'programar entrega')
          },
          card_origination_oc_debit_card_fire_analytics_app_step_confirmation: {
            bind: 'analytics-app-step-confirmation',
            analytics: analytics.payrollAppStep('4', 'confirmacion')
          },
          card_origination_oc_debit_card_fire_analytics_app_completed: {
            bind: 'analytics-app-completed',
            analytics: analytics.payrollAppCompleted
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/card-origination-oc-debit-card',
      params: []
    },
    pages,
    template,
    components: [
      bbvaCardPayrollRequest,
      controllerOcCardDatePickerMx,
      mobileShowInfo,
      managerAnalytics
    ]
  };

  if (native) {
    base.components.push(pluginDatePicker(config));
  }

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('card-origination-oc-debit-card');
  return base;

};
