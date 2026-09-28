/* eslint-disable complexity */
'use strict';
module.exports = CONFIG => {
  const pageName = 'blockAndReplacement';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const prefix = 'BLOCK_AND_REPLACEMENT';
  const isNativeIos = CONFIG.nativeIos || false;
  const native = CONFIG.native || false;
  const {useNames, createPrefixFromPageName, headerHeight, getLocalCurrency, getLanguage, createSpinner, connectionsOut} = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getLocaleName ] = useNames(operativePrefix);
  const language = getLanguage();
  const localCurrency = getLocalCurrency();
  const getLocalePrefix = localName => `glomo-${getLocaleName(localName)}`;
  const analytics = require('./analytics/_blockAndReplacement')(CONFIG);
  const cardsApiVersion = CONFIG.globalServices.versions.cardsV1;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        out: {
          BLOCK_AND_REPLACEMENT_EXIT_PROCESS_ACCEPT: {
            bind: 'alert-block-replacement-exit-process-accept',
            backStep: true
          },
          BLOCK_AND_REPLACEMENT_CONDITIONS_ERROR_MODAL_ACCEPT: {
            bind: 'alert-BLOCK-REPLACEMENT-CONDITIONS-ERROR-MODAL-accept',
            backStep: true,
            skipHistory: true
          },
          BLOCK_AND_REPLACEMENT_GENERIC_ERROR_MODAL_ACCEPT: {
            bind: 'alert-error-modal-block-and-replacement-accept',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };

  const base = {
    pages,
    hash: pageName,
    currentPage: {
      url: '/blockAndReplacement'
    },
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        animationType: 'verticalUp',
        headerHeight,
        className: isNativeIos ? 'ios-top-padding bg-core-blue' : 'bg-core-blue',
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: 'dark-blue-bg',
        delayScrollTop: 700,
        cellsConnections: {
          in: {
            [prefix + '_ALL_STEPS_COMPLETED_CHANNEL']: {
              bind: 'showConfirm'
            },
            [prefix + '_FINAL_PANEL_VIEW']: {
              bind: 'showConfirm'
            },
            [prefix + '_FINAL_PANEL_VIEW']: {
              bind: 'resetLayerScroll'
            },
            [prefix + '_INIT_PAGE_CHANNEL']: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            [prefix + '_template_scroll']: {
              bind: 'opx-template-content-scroll'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        className: ''
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main',
        tagSpherica: 'bbva-header-main-spherica',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-header-main',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          className: isNativeIos ? 'u-padding-top--1-5 bg-core-blue' : 'bg-core-blue',
          variant: 'notch-top',
          iOSFixedHeader: isNativeIos,
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          text: 'block-replacement-main-title-header',
          cellsConnections: {
            out: {
              [prefix + '_CLOSE_BUTTON_PRESSED_CHANNEL']: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'modal-initial',
          ambient: 'primary-alt',
          className: isNativeIos && 'u-padding-top--0',
          rightButtons: [
            {
              id: 'btn-close',
              name: 'Close',
              icon: 'spherica:close',
              label: 'bbva-header-main-close-aria-label',
              accessibilityText: 'bbva-help-modal-close-button',
              defaultEventIconName: 'header-main-icon-right-primary-click'
            }
          ]
        }
      },
      {
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
              __bridge_page_blockAndReplacement: {
                bind: 'init'
              }
            },
            out: {
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              [prefix + '_INIT_PAGE_CHANNEL']: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'block-replacement-main-title-header',
          rightIconAction: 'close-button-pressed-event',
          backAction: getLocalePrefix('exit'),
          cellsConnections: {
            in: {
              [prefix + '_NAVIGATE_TO_PAGE_CHANNEL']: {
                bind: 'navigateToPage'
              },
              [prefix + '_NAVIGATE_TO_SUCCESS_PAGE_CHANNEL']: {
                bind: 'navigateToPage'
              },
              BLOCK_AND_REPLACEMENT_ERROR_ON_DATA_SERVICE_ACCEPT: {
                bind: 'goBack'
              },
              BLOCK_AND_REPLACEMENT_ERROR_ON_DATA_SERVICE_CANCEL: {
                bind: 'goBack'
              }
            },
            out: {
              [prefix + '_NAVIGATE_TO_MAP_CHANNEL']: {
                bind: 'navigation-to-branchLocator',
                link: {
                  page: 'branchLocator',
                  params: {
                    productId: 'cardId'
                  }
                }
              },
              [prefix + '_NAVIGATE_TO_SUCCESS_CHANNEL']: {
                bind: 'navigation-to-success-page',
                link: {
                  page: 'blockAndReplacementSuccess',
                  skipHistory: true
                }
              },
              block_and_replacement_exit_operative: {
                bind: 'close-button-pressed-event',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-multistep-block-card-replacement',
        tagSpherica: 'bbva-multistep-block-card-replacement-spherica',
        familyPath: '@glomo-web-components/bbva-multistep-block-card-replacement',
        familyPathSpherica: '@glomo-web-components/bbva-multistep-block-card-replacement-spherica',
        render: 'litElement',
        properties: {
          placeholderAnotherBranch: 'block-replacement-placeholder-another-branch',
          btnTextAnotherBranch: 'block-replacement-btn-choose-another-branch',
          termsAndConditionsText: 'block-replacement-terms-and-conditions-text',
          currencyCode: localCurrency,
          localCurrency,
          language,
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'getFeatureFlags'
              },
              [prefix + '_SET_CARD_DATA_PROPERTY_CHANNEL']: {
                bind: 'card'
              },
              [prefix + '_SET_ADDRESSES_PROPERTY_CHANNEL']: {
                bind: 'addresses'
              },
              [prefix + '_RESET_CHANNEL']: {
                bind: 'reset'
              },
              [prefix + '_SET_BLOCK_ID_PROPERTY_CHANNEL']: {
                bind: 'blockingReason'
              },
              [prefix + '_SET_REPLACEMENT_TYPE_PROPERTY_CHANNEL']: {
                bind: 'replacementType'
              },
              [prefix + '_SET_IS_MASKED_PROPERTY_CHANNEL']: {
                bind: 'isMasked'
              },
              [prefix + '_SET_ACTIVE_STEPS']: {
                bind: 'activeSteps'
              },
              [prefix + '_SET_SELECTED_ADDRESS']: {
                bind: 'selectedAddress'
              },
              [prefix + '_IS_ADDITIONAL_CARD']: {
                bind: 'isAdditionalCard'
              },
              [prefix + '_IS_DEBIT_CARD']: {
                bind: 'isDebitCard'
              },
              [prefix + '_IS_PATRIMONIAL_CARD']: {
                bind: 'isVipPatrimonialCard'
              },
              [prefix + '_CONDITIONS_ERROR_MODAL_ACCEPT']: {
                bind: 'reset'
              },
              [prefix + 'GENERIC_ERROR_MODAL_ACCEPT']: {
                bind: 'reset'
              },
              [prefix + '_SET_BRANCH_ADDRESS']: {
                bind: 'setBranchAddressSelected'
              },
              [prefix + '_REQUEST_SUCCESS']: {
                bind: 'locationPermissionsSuccess'
              }
            },
            out: {
              [prefix + '_FULL_ADDRESS']: {
                bind: 'block-and-replace-full-address'
              },
              [prefix + '_CHANGE_RADIO_OPTION_CHANNEL']: {
                bind: 'change-radio-option-event'
              },
              [prefix + '_ALL_STEPS_COMPLETED_CHANNEL']: {
                bind: 'expandable-multistep-all-complete'
              },
              [prefix + '_CHECK_LOCATION_PERMISSIONS']: {
                bind: 'pick-a-branch-event'
              },
              [prefix + '_REQUEST_LOCATION_PERMISSIONS']: {
                bind: 'pick-a-branch-event'
              },
              [prefix + '_GET_CUREENT_POSITION']: {
                bind: 'block-and-replace-get-current-position'
              },
              [prefix + '_CONFIG_MODAL_TO_OPEN_CHANNEL']: {
                bind: 'show-tooltip-event'
              },
              [prefix + '_TOOGLE_MASKED_ADDRESS_CHANNEL']: {
                bind: 'toggle-masked-address-data-event'
              },
              [prefix + '_FIRE_APP_STARTED']: {
                bind: 'bbva-multistep-step-blocking-reasons'
              },
              [prefix + '_FIRE_APP_TYPE_TARJET']: {
                bind: 'bbva-multistep-step-blocking-reasons'
              },
              [prefix + '_FIRE_APP_ADDREESS']: {
                bind: 'bbva-multistep-step-replacement-type'
              },
              [prefix + '_FIRE_APP_TERMS']: {
                bind: 'bbva-multistep-step-shipping-address'
              },
              [prefix + '_FIRE_APP_CONFIRM']: {
                bind: 'bbva-multistep-step-terms-and-conditions'
              },
              [prefix + '_SET_REESTAMPING_COST_CHANNEL']: {
                bind: 'amount'
              },
              BLOCK_AND_REPLACEMENT_EXIT_PROCESS_ACCEPT: {
                bind: 'show'
              },
              [prefix + '_IS_DEBIT_CARD']: {
                bind: 'isDebitCard'
              }
            }
          }
        },
        propertiesSpherica: {
          newCellsConnections: {
            add: {
              out: {
                BLOCK_AND_REPLACEMENT_BLOCK_CARD_BUTTON_PRESSED_CHANNEL: {
                  bind: 'bbva-button-default-click'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'glomo-block-card-replacement-dm',
        properties: {
          continue: 'block-replacement-card',
          CONFIG,
          cellsConnections: {
            in: {
              global_navigation_to_additional_card_detail: {
                bind: 'setIsAdditionalCard'
              },
              card_Detail_set_filtered_product_summary_data: {
                bind: 'setCardImgFromCurrentCardInfo'
              },
              global_login_success: {
                bind: 'customerData'
              },
              [prefix + '_INIT_PAGE_CHANNEL']: {
                bind: 'init'
              },
              [prefix + '_CHANGE_RADIO_OPTION_CHANNEL']: {
                bind: 'changeRadioOptionHandler'
              },
              [prefix + '_BLOCK_CARD_BUTTON_PRESSED_CHANNEL']: {
                bind: 'blockCardButtonPressedHandler'
              },
              [prefix + '_SUCCESS_RESPONSE_CARD_DATA_CHANNEL']: {
                bind: 'verifyGetCardDataHandler'
              },
              [prefix + '_SUCCESS_RESPONSE_BLOCK_CARD_CHANNEL']: {
                bind: 'successBlockCardDataHandler'
              },
              [prefix + '_ERROR_RESPONSE_BLOCK_CARD_CHANNEL']: {
                bind: 'putBlockCardDataErrorHandler'
              },
              [prefix + '_SET_CUSTOMER_ADDRESS']: {
                bind: 'successGetCustomerAddressesHandler'
              },
              [prefix + '_ERROR_RESPONSE_CUSTOMER_ADDRESSES_CHANNEL']: {
                bind: 'errorGetCustomerAddressesHandler'
              },
              navigation_branch_locator_to_block_and_replacement: {
                bind: 'successGetPoisAddressHandler'
              },
              [prefix + '_ERROR_RESPONSE_POIS_DETAIL_CHANNEL']: {
                bind: 'errorGetPoisAddressHandler'
              },
              [prefix + '_CONFIG_MODAL_TO_OPEN_CHANNEL']: {
                bind: 'configModalHandler'
              },
              [prefix + '_TOOGLE_MASKED_ADDRESS_CHANNEL']: {
                bind: 'toggleMaskedAddressHandler'
              },
              [prefix + '_SUCCESS_RESPONSE_CREATE_REPLACEMENT_CHANNEL']: {
                bind: 'successPostCreateReplacementHandler'
              },
              [prefix + '_ERROR_RESPONSE_CREATE_REPLACEMENT_CHANNEL']: {
                bind: 'errorPostCardReplacementsHandler'
              },
              [prefix + '_SUCCESS_RESPONSE_CREATE_DELIVERY_CHANNEL']: {
                bind: 'successPostCardDeliveryHandler'
              },
              [prefix + '_ERROR_RESPONSE_CREATE_DELIVERY_CHANNEL']: {
                bind: 'errorPostCardDeliveryHandler'
              },
              [prefix + '_PLUGIN_GEOLOCATION_ACCEPT_CHANNEL']: {
                bind: 'acceptGeolocationPermissionsHandler'
              },
              [prefix + '_PLUGIN_GEOLOCATION_CANCEL_CHANNEL']: {
                bind: 'cancelGeolocationPermissionsHandler'
              },
              [prefix + '_SUCCESS_RESPONSE_FINANCIAL_OVERVIEW']: {
                bind: 'successGetFinancialOverviewHandler'
              },
              [prefix + '_ERROR_RESPONSE_FINANCIAL_OVERVIEW']: {
                bind: 'errorGetFinancialOverviewHandler'
              },
              [prefix + '_template_scroll']: {
                bind: '_scrollModalBehavior'
              },
              [prefix + '_ALL_STEPS_COMPLETED_CHANNEL']: {
                bind: '_isCompletedSteps'
              },
              [prefix + '_SET_CUSTOMER_DATA']: {
                bind: 'setCustomerEmail'
              },
              [prefix + '_CLOSE_BUTTON_PRESSED_CHANNEL']: {
                bind: 'showExitProcess'
              },
              [prefix + '_EXIT_PROCESS_ACCEPT']: {
                bind: 'reset'
              },
              [prefix + '_SUCCESS_RESPONSE_GET_CARD_CONDITIONS']: {
                bind: '_successGetCardConditions'
              },
              [prefix + '_ERROR_RESPONSE_GET_CARD_CONDITIONS']: {
                bind: 'errorGetCardConditions'
              },
              [prefix + '_EXIT_PROCESS_ACCEPT']: {
                bind: 'resetAdditionalCardValues'
              },
              send_additional_card_data: {
                bind: 'additionalCardDetail'
              },
              [prefix + '_SUCCESS_RESPONSE_GET_CARD_CHANNEL']: {
                bind: 'successGetCardData'
              },
              [prefix + '_BRANCH_SELECTED_CARD_ITEM']: {
                bind: 'parseSelectedBranFullAddress'
              },
              [prefix + '_BRANCH_SELECTED_LIST_ITEM']: {
                bind: 'parseSelectedBranFullAddress'
              },
              [prefix + '_BACK_TO_DASHBOARD_CHANNEL']: {
                bind: 'reset'
              },
              [prefix + '_FULL_ADDRESS']: {
                bind: 'setFullAddresses'
              }
            },
            out: {
              global_alert_manager_open_with_settings: {
                bind: 'send-modals-configuration'
              },
              global_web_request_channel: {
                bind: 'request-payload-changed',
                'forward-to-native': true
              },
              open_control_veil: {
                bind: 'show-spinner-event'
              },
              close_control_veil: {
                bind: 'hide-spinner-event'
              },
              [prefix + '_RESET_CHANNEL']: {
                bind: 'reset-event'
              },
              [prefix + '_SET_CARD_DATA_PROPERTY_CHANNEL']: {
                bind: 'set-card-data-property-event'
              },
              [prefix + '_SET_BLOCK_ID_PROPERTY_CHANNEL']: {
                bind: 'set-block-id-property-event'
              },
              [prefix + '_SET_REPLACEMENT_TYPE_PROPERTY_CHANNEL']: {
                bind: 'set-replacement-type-property-event'
              },
              [prefix + '_SET_ADDRESSES_PROPERTY_CHANNEL']: {
                bind: 'set-addresses-property-event'
              },
              [prefix + '_SET_IS_MASKED_PROPERTY_CHANNEL']: {
                bind: 'set-is-masked-property-event'
              },
              [prefix + '_SET_REESTAMPING_COST_CHANNEL']: {
                bind: 'set-reestamping-cost-event'
              },
              [prefix + '_NAVIGATE_TO_PAGE_CHANNEL']: {
                bind: 'navigate-to-page-map'
              },
              [prefix + '_NAVIGATE_TO_SUCCESS_PAGE_CHANNEL']: {
                bind: 'navigate-to-page-event'
              },
              [prefix + '_REQUEST_CARD_DATA_CHANNEL']: {
                bind: 'request-get-card-data-event'
              },
              [prefix + '_REQUEST_BLOCK_CHANNEL']: {
                bind: 'request-put-block-card-event'
              },
              [prefix + '_REQUEST_CUSTOMER_ADDRESSES_CHANNEL']: {
                bind: 'request-get-customer-addresses-event'
              },
              [prefix + '_REQUEST_CUSTOMER_ADDRESSES_UNMASKED_CHANNEL']: {
                bind: 'request-get-customer-addresses-unmasked-event'
              },
              [prefix + '_REQUEST_CREATE_CARD_REPLACEMENT_CHANNEL']: {
                bind: 'request-post-create-replacement-event'
              },
              [prefix + '_REQUEST_CREATE_CARD_DELIVERY_CHANNEL']: {
                bind: 'request-post-create-delivery-event'
              },
              [prefix + '_REQUEST_GET_FINANCIAL_OVERVIEW']: {
                bind: 'request-get-financtial-overview-event'
              },
              ['BLOCK_AND_REPLACEMENT_CHANNEL_TEST']: {
                bind: 'set-steps'
              },
              [prefix + '_SET_ACTIVE_STEPS']: {
                bind: 'set-steps'
              },
              [prefix + '_SET_SELECTED_ADDRESS']: {
                bind: 'set-selected-address'
              },
              [prefix + '_REQUEST_CUSTOMER_EMAIL_CHANNEL']: {
                bind: 'request-get-customer-email-event'
              },
              [prefix + '_PERMISSIONS']: {
                bind: 'open-modal-block-replacement-permissions'
              },
              [prefix + '_FINAL_PANEL_VIEW']: {
                bind: 'set_show_panel'
              },
              navigation_block_and_replacement_continue: {
                bind: 'continue-changed'
              },
              [prefix + '_GET_CARD_COST']: {
                bind: 'get-card-conditions'
              },
              [prefix + '_IS_ADDITIONAL_CARD']: {
                bind: 'set-is-additional-card'
              },
              [prefix + '_IS_DEBIT_CARD']: {
                bind: 'debit-card-response'
              },
              [prefix + '_IS_PATRIMONIAL_CARD']: {
                bind: 'patrimonial-card-response'
              },
              [prefix + '_SELECTED_BLOCK']: {
                bind: 'set-block-id-property-event'
              },
              [prefix + '_FIRE_APP_STARTED']: {
                bind: 'set-block-id-property-event'
              },
              [prefix + '_SELECTED_ADDRESS']: {
                bind: 'set-selected-address'
              },
              [prefix + '_SET_CUSTOMER_ID']: {
                bind: 'set-customer-id'
              },
              [prefix + '_SET_CARD_ID']: {
                bind: 'set-card-id'
              },
              [prefix + '_GET_CARD_DATA']: {
                bind: 'get-card-data'
              },
              [prefix + '_INTERRUPT_BLOCK_AND_REPLACEMENT_PROCESS']: {
                bind: 'interrupt-block-and-replacement-process',
                backStep: true
              },
              [prefix + '_SET_BRANCH_ADDRESS']: {
                bind: 'get-full-address-selected'
              }
            },
            params: {
              cardId: 'cardId',
              productId: 'productId'
            }
          }
        },
        propertiesSpherica: {
          isSpherica: true,
          newCellsConnections: {
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'send-modals-configuration'
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
      },
      {
        zone: 'app_transactional',
        type: 'DM',
        tag: 'glomo-analytics-block-card-replacement-manager',
        familyPath: '@glomo-web-components/glomo-analytics-block-card-replacement-manager',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [prefix + '_INIT_PAGE_CHANNEL']: {
                bind: 'reset'
              },
              navigation_product_to_block_card_normal: {
                bind: 'product'
              },
              navigation_product_detail_to_block_card: {
                bind: 'product'
              },
              [prefix + '_INIT_PAGE_CHANNEL']: {
                bind: 'init'
              },
              [prefix + '_SELECTED_ADDRESS']: {
                bind: 'process'
              },
              [prefix + '_SELECTED_BLOCK']: {
                bind: 'persistBlock'
              },
              [prefix + '_SET_REPLACEMENT_TYPE_PROPERTY_CHANNEL']: {
                bind: 'persistReplacementType'
              },
              [prefix + '_FIRE_APP_STARTED']: {
                bind: 'fireAppStarted'
              },
              [prefix + '_FIRE_APP_TYPE_TARJET']: {
                bind: 'fireAppStepTypeCard'
              },
              [prefix + '_FIRE_APP_ADDREESS']: {
                bind: 'fireAppStepShipment'
              },
              [prefix + '_FIRE_APP_TERMS']: {
                bind: 'fireAppStepTermsCondition'
              },
              [prefix + '_FIRE_APP_CONFIRM']: {
                bind: 'fireAppStepConfirmation'
              },
              open_sign_modal_block_and_replacement: {
                bind: 'fireAppStepOTP'
              },
              [prefix + '_NAVIGATE_TO_SUCCESS_CHANNEL']: {
                bind: 'fireAppStepCompleted'
              },
              [prefix + '_FIRE_APP_VIEW']: {
                bind: 'fireAppView'
              }
            },
            out: {
              [prefix + '_analytics_page_visit']: {
                bind: 'fire-analytic-credit-card-page-visit',
                analytics: analytics.APP_PAGE_VISIT
              },
              [prefix + '_analytic_credit_card_app_started']: {
                bind: 'fire-analytic-credit-card-app-started',
                analytics: analytics.APP_STARTED
              },
              [prefix + '_analytic_credit_card_app_step_type']: {
                bind: 'fire-analytic-credit-card-app-step-type-tarjet',
                analytics: analytics._getAppStepWithLevel3('2', '2 tipo tarjeta')
              },
              [prefix + '_analytic_credit_card_app_step_address']: {
                bind: 'fire-analytic-credit-card-app-step-address-shipment',
                analytics: analytics._getAppStepWithLevel3(
                  '3',
                  '3 direccion envio'
                )
              },
              [prefix + '_analytic_credit_card_app_step_terms']: {
                bind: 'fire-analytic-credit-card-app-step-terms-and-conditions',
                analytics: analytics._getAppStepWithLevel3(
                  '4',
                  '4 terminos y condiciones'
                )
              },
              [prefix + '_analytic_credit_card_app_step_confirmation']: {
                bind: 'fire-analytic-credit-card-app-page-view-confirmation',
                analytics: analytics._getAppStepWithLevel3('5', '5 confirmacion')
              },
              [prefix + '_analytic_credit_card_app_otp']: {
                bind: 'fire-analytic-credit-card-app-page-view-otp',
                analytics: analytics._getAppStepWithLevel3('6', '6 otp')
              },
              [prefix + '_analytic_credit_card_app_complete']: {
                bind: 'fire-analytic-credit-card-app-complete',
                analytics: analytics.APP_COMPLETED
              },
              [prefix + '_analytic_credit_card_app_page_view']: {
                bind: 'fire-analytic-credit-card-app-view',
                analytics: analytics._getAdvancedFootprint()
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-financial-overview',
        properties: {
          host: CONFIG.globalServices.host,
          native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [prefix + '_REQUEST_GET_FINANCIAL_OVERVIEW']: {
                bind: 'getFinancialOverview'
              }
            },
            out: {
              [prefix + '_SUCCESS_RESPONSE_FINANCIAL_OVERVIEW']: {
                bind: 'financial-overview-retrieved'
              },
              [prefix + '_ERROR_RESPONSE_FINANCIAL_OVERVIEW']: {
                bind: 'error-on-get-financial-overview'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-customers-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          native,
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          customerAddressesApiVersion: CONFIG.globalServices.versions.customers,
          headers: { 'Accept-Language': 'es' },
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          otpId: pageName,
          cellsConnections: {
            in: {
              [prefix + '_SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              [prefix + '_REQUEST_CUSTOMER_EMAIL_CHANNEL']: {
                bind: 'getCustomerContacts'
              },
              [prefix + '_REQUEST_CUSTOMER_ADDRESSES_CHANNEL']: {
                bind: 'getCustomerAddresses'
              },
              [prefix + '_REQUEST_CUSTOMER_ADDRESSES_UNMASKED_CHANNEL']: {
                bind: 'getCustomerAddresses'
              }
            },
            out: {
              [prefix + '_SET_CUSTOMER_DATA']: {
                bind: 'set-customer-contacts'
              },
              [prefix + '_SET_CUSTOMER_ADDRESS']: {
                bind: 'set-customer-addresses'
              },
              [prefix + '_ERROR_RESPONSE_CUSTOMER_ADDRESSES_CHANNEL']: {
                bind: 'error-on-get-customer-addresses'
              }
            }
          }
        }
      },
      {
        zone: 'app_transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards',
        properties: {
          host: CONFIG.globalServices.host,
          native,
          cardsApiVersion: CONFIG.globalServices.cards,
          requiresTsec: true,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          otpId: pageName,
          ignoreSecondFactorToken: true,
          cellsConnections: {
            in: {
              [prefix + '_REQUEST_BLOCK_CHANNEL']: {
                bind: 'putCardBlock'
              },
              [prefix + '_REQUEST_CREATE_CARD_REPLACEMENT_CHANNEL']: {
                bind: 'postCardReplacements'
              },
              [prefix + '_REQUEST_CREATE_CARD_DELIVERY_CHANNEL']: {
                bind: 'postCardCreateDelivery'
              },
              [prefix + '_SET_CARD_ID']: {
                bind: 'cardId'
              },
              [prefix + '_GET_CARD_DATA']: {
                bind: 'getCard'
              }
            },
            out: {
              [prefix + '_SUCCESS_RESPONSE_BLOCK_CARD_CHANNEL']: {
                bind: 'put-card-block-response'
              },
              [prefix + '_ERROR_RESPONSE_BLOCK_CARD_CHANNEL']: {
                bind: 'error-on-put-card-block'
              },
              [prefix + '_SUCCESS_RESPONSE_CREATE_REPLACEMENT_CHANNEL']: {
                bind: 'success-on-post-card-replacements'
              },
              [prefix + '_ERROR_RESPONSE_CREATE_REPLACEMENT_CHANNEL']: {
                bind: 'error-on-post-card-replacements'
              },
              [prefix + '_SUCCESS_RESPONSE_CREATE_DELIVERY_CHANNEL']: {
                bind: 'success-on-post-card-create-delivery'
              },
              [prefix + '_ERROR_RESPONSE_CREATE_DELIVERY_CHANNEL']: {
                bind: 'error-on-post-card-create-delivery'
              },
              [prefix + '_SUCCESS_RESPONSE_GET_CARD_CHANNEL']: {
                bind: 'set-card'
              }
            }
          }
        }
      },
      {
        zone: 'app_transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          native,
          cardsApiVersion,
          requiresTsec: true,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            params: {
              cardId: 'cardId'
            },
            in: {
              [prefix + '_GET_CARD_COST']: {
                bind: 'getCardConditions'
              },
              [prefix + '_REQUEST_CARD_DATA_CHANNEL']: {
                bind: 'getCard'
              }
            },
            out: {
              [prefix + '_SUCCESS_RESPONSE_GET_CARD_CONDITIONS']: {
                bind: 'set-card-conditions'
              },
              [prefix + '_ERROR_RESPONSE_GET_CARD_CONDITIONS']: {
                bind: 'error-on-get-card-conditions'
              },
              [prefix + '_SUCCESS_RESPONSE_CARD_DATA_CHANNEL']: {
                bind: 'set-card'
              }
            }
          }
        }
      }
    ]
  };
  const buttonFixed = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      label: language === 'en' ? 'Cost replacement' : 'Costo de la reposición',
      headerAdditionalInfo: '+ IVA',
      className: 'no-gradient',
      buttonText: 'block-and-replacement-text-main-btn-block',
      buttonClass: 'positive',
      currencyCode: localCurrency,
      localCurrency,
      language,
      cellsConnections: {
        in: {
          BLOCK_AND_REPLACEMENT_ALL_STEPS_COMPLETED_CHANNEL: {
            bind: 'show'
          },
          BLOCK_AND_REPLACEMENT_SET_REESTAMPING_COST_CHANNEL: {
            bind: 'amount'
          },
          BLOCK_AND_REPLACEMENT_EXIT_PROCESS_ACCEPT: {
            bind: 'show'
          }
        },
        out: {
          BLOCK_AND_REPLACEMENT_BLOCK_CARD_BUTTON_PRESSED_CHANNEL: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    }
  };
  if (!sphericaPageUtils.isSpherica()) {
    base.components.push(buttonFixed);
  }
  if (native) {
    base.components.push(
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-permissions-plugin',
        properties: {
          cellsConnections: {
            in: {
              [prefix + '_CHECK_LOCATION_PERMISSIONS']: {
                bind: 'checkState'
              },
              [prefix + '_REQUEST_LOCATION_PERMISSIONS']: {
                bind: 'request'
              }
            },
            out: {
              [prefix + '_CHECK_STATE_SUCCESS']: {
                bind: 'permissions-check-state-success'
              },
              [prefix + '_CHECK_STATE_ERROR']: {
                bind: 'permissions-check-state-error'
              },
              [prefix + '_REQUEST_SUCCESS']: {
                bind: 'permissions-request-success'
              },
              [prefix + '_REQUEST_ERROR']: {
                bind: 'permissions-request-error'
              },
              [prefix + '_PERMISSIONS_PLUGIN_NOT_INSTALED']: {
                bind: 'error-permissions-plugin-not-installed'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-mobile-geolocation',
        properties: {
          cellsConnections: {
            in: {
              [prefix + '_GET_CUREENT_POSITION']: {
                bind: 'getCurrentPosition'
              }
            },
            out: {
              [prefix + '_PLUGIN_GEOLOCATION_ACCEPT_CHANNEL']: {
                bind: 'current-position-available'
              },
              [prefix + '_PLUGIN_GEOLOCATION_CANCEL_CHANNEL']: {
                bind: 'error'
              }
            }
          }
        }
      }
    );
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-cards', pageName, [
    'success-on-post-card-replacements',
    'error-on-post-card-replacements'
  ]);
  const connectionsOuts = connectionsOut(base);
  connectionsOuts('cells-sign-operation-dm-mx').open_sign_modal_block_and_replacement = {
    bind: 'signature-required'
  };
  const signConnectorCustomers = require('./common/_sign-connector')(CONFIG)(base);
  signConnectorCustomers('cells-dm-global-apis-customers-bgadpmock', pageName, [
    'set-customer-addresses',
    'error-on-get-customer-addresses'
  ]);

  if (sphericaPageUtils.isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
