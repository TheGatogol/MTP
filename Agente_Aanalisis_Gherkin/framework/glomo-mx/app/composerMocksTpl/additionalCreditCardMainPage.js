/* eslint-disable no-empty-pattern */
module.exports = CONFIG => {
  const newSphericaPage = require('./common/helpers/_spherica')(CONFIG, 'additionalCreditCardMainPage').getNewSphericaPage();
  if (newSphericaPage) {
    return newSphericaPage;
  }
  const {getLocalCurrency, getLanguage, createSpinner, headerHeight, digitalNumberInFive, connectionsOut} = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('additionalCreditCardMainPage');
  const PAGE_NAME = 'additionalCreditCardMainPage';
  const analyticsCreditcardMainpage = require('./analytics/_additionalCreditCardMainPage')({});
  const spinnerAdditionalCard = createSpinner(CONFIG);
  const language = getLanguage();
  const localCurrency = getLocalCurrency();
  const PREFIX = 'ADDITIONAL_CREDIT_CARD';
  const MAXSTEPS = 4;
  const {
    globalServices: { },
    nativeIos = false
  } = CONFIG;
  const configButtons = {
    buttons: {
      primary: {
        text: 'additional-card-hiring-page-finish-button-steps',
        class: 'tertiary'
      }
    }
  };

  const base = {
    pages,
    hash: 'additional-credit-card',
    currentPage: {
      url: '/additional-credit-card'
    },
    template: {
      tag: 'glomo-opx-template',
      properties: {
        headerHeight,
        headerFixed: true,
        topOnConfirm: true,
        showConfirmInManualScroll: true,
        className: 'dark-blue-bg',
        iOSFixedHeader: nativeIos,
        extraHeaderClass: `dark-blue-bg ${ nativeIos ? 'ios-top-padding' : ''}`,
        cellsConnections: {
          in: {
            [PREFIX + '_SCROLL_ZONE']: {
              bind: 'scrollItemIntoView'
            },
            [PREFIX + '_FINISH_STEPS']: {
              bind: 'showConfirm'
            },
            [PREFIX + '_ALL_STEPS_SCROLL']: {
              bind: 'scrollItemIntoView'
            }
          }
        }
      }
    },
    components: [
      spinnerAdditionalCard,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_additionalCreditCardMainPage: {
                bind: 'init'
              }
            },
            out: {
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              [PREFIX + '_INIT_PAGE']: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'diy-step-opx-dm',
        type: 'DM',
        properties: {
          autoActivateStep: true,
          repeatOperative: true,
          decorateSteps: true,
          cellsConnections: {
            in: {
              [PREFIX + 'REGISTER_STEP_CHANNEL']: {
                bind: 'registerStep'
              },
              [PREFIX + '_NEXT_STEP']: {
                bind: 'goToNext'
              },
              [PREFIX + '_COLLAPSE_OTHER_STEP']: {
                bind: 'goToStep'
              },
              [PREFIX + '_RETURN_PAGE']: {
                bind: 'reset'
              },
              [PREFIX + '_RESET_IN_OTP']: {
                bind: 'reset'
              },
              [PREFIX + '_RESET_FLOW']: {
                bind: 'reset'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'reset'
              },
              ADDITIONAL_CREDIT_CARD_NAVIGATE_TO_DASHBOARD: {
                bind: 'reset'
              }
            },
            out: {
              [PREFIX + '_SCROLL_ZONE']: {
                bind: 'cells-scroll-zone'
              },
              [PREFIX + '_SHOW_CONFIRM']: {
                bind: 'all-steps-collapsed-changed'
              },
              [PREFIX + '_ALL_STEPS_SCROLL']: {
                bind: 'cells-all-steps-scroll'
              },
              [PREFIX + '_FINISH_STEPS']: {
                bind: 'can-execute-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          continue: 'dashboard',
          className: 'header--grey',
          rightIcon: 'coronita:close',
          titleName: 'additional-credit-card-header-title',
          rightIconAction: 'close-button-pressed-event',
          secondaryClass: 'header--core',
          cellsConnections: {
            in: {
              [PREFIX + '_ADD_HEADER_CLASS']: {
                bind: 'setSecondaryClass'
              },
              [PREFIX + '_REMOVE_HEADER_CLASS']: {
                bind: 'removeSecondaryClass'
              }
            },
            out: {
              [PREFIX + '_EXIT_HEADER']: {
                bind: 'close-button-pressed-event'
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
          backAction: 'header-left-button',
          continue: 'success-page',
          cellsConnections: {
            in: {
              [PREFIX + '_RESET_COMPLETED_CHANNEL']: {
                bind: 'goBack'
              },
              [PREFIX + '_ADDITIONAL_CREDIT_CARD_COMPLETE_CHANNEL']: {
                bind: 'navigate'
              },
              [PREFIX + '_CONFIRM_ACTION_CHANNEL']: {
                bind: 'goBack'
              },
              [PREFIX + '_NAVIGATE_TO_PAGE_CHANNEL']: {
                bind: 'navigateToPage'
              }
            },
            out: {
              [PREFIX + '_RETURN_TO_DASHBOARD_CHANNEL']: {
                bind: 'header-left-button',
                backStep: true
              },
              [PREFIX + '_SUCCESS_CHANNEL']: {
                bind: 'navigation-to-success-page',
                link: {
                  page: 'additionalCreditCardSuccessPage'
                }
              },
              [PREFIX + '_NAVIGATE_TO_MAP_CHANNEL']: {
                bind: 'navigation-to-map-page',
                link: {
                  page: 'additionalCreditCardMapPage'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-additional-card-hiring-manager',
        tag: 'glomo-additional-card-hiring-manager-mx',
        properties: {
          continue: 'additional-card-hiring',
          feedbackOperation: 'leaveAddcc',
          localCurrency,
          addressesComplete: true,
          cardError: './images/cards/card_error_dark.svg',
          cardGenericError: './images/general_error_2.svg',
          cellsConnections: {
            in: {
              global_set_app_settings: {
                bind: 'setAppSettingsParams'
              },
              [PREFIX + '_EXIT_HEADER']: {
                bind: 'handleCloseButton'
              },
              [PREFIX + '_INIT_PAGE']: {
                bind: 'init'
              },
              dashboard_customer_email: {
                bind: 'removeAsteriskFromEmail'
              },
              global_login_success: {
                bind: 'handleAddresses'
              },
              global_card_detail_data_success_channel: {
                bind: 'cardData'
              },
              blue_redirect_additional_credit_card_main_page: {
                bind: 'cardData'
              },
              [PREFIX + '_OPEN_MAP_PAGE_CHANNEL']: {
                bind: 'goToBranchLocator'
              },
              global_financial_overview_details: {
                bind: 'financialOverviewData'
              },
              [PREFIX + '_FIELD_VALUES']: {
                bind: 'updateFieldValues'
              },
              [PREFIX + '_RESET_FLOW']: {
                bind: 'reset'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'reset'
              },
              ADDITIONAL_CREDIT_CARD_NAVIGATE_TO_DASHBOARD: {
                bind: 'reset'
              },
              [PREFIX + '_ADDRESS_TOOLTIP_CHANNEL']: {
                bind: 'requestAddressTooltipModal'
              },
              [PREFIX + '_additional_cards_success']: {
                bind: 'successResult'
              },
              global_set_customer_addresses: {
                bind: 'setAddressesFromDashboard'
              },
              [PREFIX + '_SUCCESS_GET_CUSTOMER_CONTACTS']: {
                bind: 'removeAsteriskFromEmail'
              },
              [PREFIX + '_SHOW_ADDRESS_BUTTON_CLICKED']: {
                bind: 'showUnmaskedAddressRequest'
              },
              additional_card_hiring_show_button_finish_steps_clicked: {
                bind: 'createCardRequest'
              },
              [PREFIX + '_SUCCESS_GET_CUSTOMER_ADDRESSES']: {
                bind: 'handleAddresses'
              },
              [PREFIX + '_ERROR_GET_CUSTOMER_ADDRESSES']: {
                bind: 'errorOnUnmaskedAddress'
              },
              navigation_branch_locator_to_additional_card_hiring: {
                bind: 'sendBranchAddressToStep'
              },
              [PREFIX + '_INFORM_SHIPPING_ADDRESS']: {
                bind: 'setShippingType'
              },
              [PREFIX + '_additional_cards_error']: {
                bind: 'errorResult'
              }
            },
            out: {
              [PREFIX + '_SET_FIRST_STEP_OFFER_DATA']: {
                bind: 'set-first-step-offer-data'
              },
              global_alert_manager_open_with_settings: {
                bind: 'additional-card-exit-flow'
              },
              [PREFIX + '_RESET_FLOW']: {
                bind: 'additional-card-exit-flow-reset',
                backStep: true
              },
              [PREFIX + '_REQUEST_USER_EMAIL']: {
                bind: 'get-user-email'
              },
              [PREFIX + '_LOAD_DATA_SHOW']: {
                bind: 'get-show-data'
              },
              [PREFIX + '_REQUEST_USER_ADDRESSES']: {
                bind: 'get-user-addresses'
              },
              [PREFIX + '_SET_SECOND_STEP_DATA']: {
                bind: 'set-second-step-data-from-dm'
              },
              [PREFIX + '_SET_THIRD_STEP_CARD_TYPE']: {
                bind: 'set-third-step-infinite-type'
              },
              [PREFIX + '_SET_INIT_DATA_STEP']: {
                bind: 'set-init-data-step'
              },
              [PREFIX + '_UPDATE_FORM_FIELDS']: {
                bind: 'update-second-step-data-from-dm'
              },
              [PREFIX + '_SET_MASKED_HOME_ADDRESS']: {
                bind: 'additional-card-hiring-masked-home-address'
              },
              [PREFIX + '_SET_UNMASKED_HOME_ADDRESS']: {
                bind: 'additional-card-hiring-unmasked-home-address'
              },
              [PREFIX + '_SET_IS_MASKED_PROPERTY_CHANNEL']: {
                bind: 'additional-card-hiring-is-masked'
              },
              [PREFIX + '_SET_COLLAPSED_HOME_ADDRESS']: {
                bind: 'additional-card-hiring-masked-home-address'
              },
              [PREFIX + '_REQUEST_UNMASKED_USER_ADDRESS']: {
                bind: 'request-unmasked-user-address'
              },
              [PREFIX + '_SET_BRANCH_ADDRESS']: {
                bind: 'additional-card-hiring-branch-address'
              },
              [PREFIX + '_CREATE_CARD_REQUEST']: {
                bind: 'create-card-request'
              },
              additional_card_hiring_go_to_branch_locator: {
                bind: 'additional-card-hiring-go-to-branch-locator',
                link: {
                  page: 'branchLocator'
                }
              },
              [PREFIX + '_SUCCESS_CONTRACT_ADDITIONAL_CARD']: {
                bind: 'contract-succesfull-response-page',
                link: {
                  page: 'additionalCreditCardSuccessPage',
                  skipHistory: true
                }
              },
              additional_card_hiring_continue: {
                bind: 'continue-changed'
              },
              [PREFIX + '_RESET_IN_OTP']: {
                bind: 'navigate-to-card-detail',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-card-offer-page',
        type: 'UI',
        properties: {
          id: 'cells-step-card-offer-page',
          currentStep: 1,
          maxStep: MAXSTEPS,
          className: 'additional-credit-card',
          localCurrency,
          language,
          changeLabel: 'additional-credit-card-offer-page-change-label',
          availableLineText: 'additional-credit-card-offer-page-line-text',
          benefitsText: 'additional-credit-card-offer-page-benefits-title',
          stepTitle: 'additional-credit-card-offer-page-step-title',
          wantButtonText: 'additional-credit-card-offer-page-wanted-text-button',
          featuresText: '',
          digitalNumber: digitalNumberInFive,
          hideCollapsedBenefits: true,
          showContractNumberCollapsed: false,
          showSmallAmountAvailableLine: true,
          hideImageCollapsed: false,
          active: true,
          decorated: true,
          cellsConnections: {
            in: {
              [PREFIX + '_INIT_PAGE']: {
                bind: 'initialize'
              },
              [PREFIX + '_SET_FIRST_STEP_OFFER_DATA']: {
                bind: 'cardOffer'
              },
              [PREFIX + '_SCROLL_COMPLETE']: {
                bind: 'scrollComplete'
              },
              [PREFIX + '_DISABLE_BTN_STEP']: {
                bind: 'disableChange'
              }
            },
            out: {
              [PREFIX + 'REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [PREFIX + '_NEXT_STEP']: {
                bind: 'continue-pressed'
              },
              [PREFIX + '_COLLAPSE_OTHER_STEP']: {
                bind: 'change-pressed'
              },
              [PREFIX + '_FIRST_STEP']: {
                bind: 'change-pressed'
              },
              [PREFIX + '_ADD_HEADER_CLASS']: {
                bind: 'continue-pressed'
              },
              [PREFIX + '_ALL_STEPS_COLLAPSED']: {
                bind: 'change-pressed'
              },
              [PREFIX + '_REMOVE_HEADER_CLASS']: {
                bind: 'change-pressed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-user-form',
        type: 'UI',
        properties: {
          lang: CONFIG.lang,
          id: 'cells-step-user-form',
          currentStep: 2,
          active: false,
          fullSectionClassList: 'gap-bottom-l',
          notInitializeWithAttached: true,
          localCurrency,
          cellsConnections: {
            in: {
              [PREFIX + '_INIT_PAGE']: {
                bind: 'initialize'
              },
              [PREFIX + '_SCROLL_COMPLETE']: {
                bind: 'scrollComplete'
              },
              [PREFIX + '_INITIAL_INFO_FORM_STEP']: {
                bind: 'offerData'
              },
              [PREFIX + '_MAX_AND_MIN_INPUT_DATE']: {
                bind: 'validateDate'
              },
              [PREFIX + '_SET_FORMATE_BIRTH_DATE']: {
                bind: 'formateDate'
              },
              [PREFIX + '_DISABLE_BTN_STEP']: {
                bind: 'disableChange'
              },
              [PREFIX + '_SET_SECOND_STEP_DATA']: {
                bind: 'formFields'
              },
              [PREFIX + '_UPDATE_FORM_FIELDS']: {
                bind: 'formFields'
              }
            },
            out: {
              [PREFIX + 'REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [PREFIX + '_NEXT_STEP']: {
                bind: 'continue-pressed'
              },
              [PREFIX + '_NEXT_STEP']: {
                bind: 'cells-step-user-form-button-continueButton-clicked'
              },
              [PREFIX + '_COLLAPSE_OTHER_STEP']: {
                bind: 'change-pressed'
              },
              [PREFIX + 'SET_DATA_PARTICIPANTS']: {
                bind: 'continue-pressed'
              },
              [PREFIX + '_ALL_STEPS_COLLAPSED']: {
                bind: 'change-step-state'
              },
              [PREFIX + '_FIELD_VALUES']: {
                bind: 'cells-step-user-form-field-values'
              },
              [PREFIX + '_VALUES_INPUT']: {
                bind: 'cells-molecule-input-focus'
              },
              [PREFIX + '_VALUES_INPUT_AMOUNT']: {
                bind: 'amount-input-focus'
              },
              [PREFIX + '_AMOUNT']: {
                bind: 'amount-input-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-address-selector',
        type: 'UI',
        properties: {
          id: 'cells-step-address-selector',
          stepId: 'glomo-address',
          currentStep: 3,
          maxStep: MAXSTEPS,
          active: false,
          removeInlineClass: true,
          stepTitle: 'cells-step-address-selector-step-title',
          changeLabel: 'cells-step-address-selector-change-label',
          showHomeAddress: true,
          showBranchRadioSelector: false,
          showCustomRadioSelector: true,
          cellsConnections: {
            in: {
              [PREFIX + '_INIT_PAGE']: {
                bind: 'initialize'
              },
              [PREFIX + '_LOAD_DATA_SHOW']: {
                bind: 'showHideAddressLabel'
              },
              [PREFIX + '_SCROLL_COMPLETE']: {
                bind: 'scrollComplete'
              },
              [PREFIX + '_INITIAL_DATA_ADDRESS_STEP']: {
                bind: 'generalDataStep'
              },
              [PREFIX + '_ADDRESS_HOME_DATA']: {
                bind: 'address'
              },
              [PREFIX + '_SET_IS_MASKED_PROPERTY_CHANNEL']: {
                bind: 'hideAddressLabel'
              },
              [PREFIX + '_DISABLE_BTN_STEP']: {
                bind: 'disableChange'
              },
              [PREFIX + '_SET_MASKED_HOME_ADDRESS']: {
                bind: 'setMaskedAddress'
              },
              [PREFIX + '_SET_UNMASKED_HOME_ADDRESS']: {
                bind: 'address'
              },
              [PREFIX + '_SET_COLLAPSED_HOME_ADDRESS']: {
                bind: 'collapsedHomeAddress'
              },
              [PREFIX + '_SET_BRANCH_ADDRESS']: {
                bind: 'customInfoText'
              },
              [PREFIX + '_SET_THIRD_STEP_CARD_TYPE']: {
                bind: 'isInfinite'
              },
              [PREFIX + '_SET_INIT_DATA_STEP']: {
                bind: 'generalDataStep'
              }
            },
            out: {
              [PREFIX + 'REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [PREFIX + '_COLLAPSE_OTHER_STEP']: {
                bind: 'change-pressed'
              },
              [PREFIX + '_NEXT_STEP']: {
                bind: 'continue-pressed'
              },
              [PREFIX + '_INFORM_SHIPPING_ADDRESS']: {
                bind: 'continue-pressed'
              },
              [PREFIX + '_ALL_STEPS_COLLAPSED']: {
                bind: 'change-step-state'
              },
              [PREFIX + '_UPDATE_RADIO_BUTTON']: {
                bind: 'shipping-address-updated'
              },
              [PREFIX + '_UPDATE_CHECK_BOX_BUTTON']: {
                bind: 'shipping-address-check-box-updated'
              },
              [PREFIX + '_SHOW_MODAL_HELP_HOME_ADDRESS']: {
                bind: 'home-address-alert-modal'
              },
              [PREFIX + '_OPEN_MAP_PAGE_CHANNEL']: {
                bind: 'open-map-page',
                analytics: analyticsCreditcardMainpage.pageViewMaps
              },
              [PREFIX + '_TOOGLE_MASKED_ADDRESS_CHANNEL']: {
                bind: 'toggle-masked-address-data-event'
              },
              [PREFIX + '_ADDRESS_TOOLTIP_CHANNEL']: {
                bind: 'cells-step-radio-button-icon-help-clicked'
              },
              [PREFIX + '_SHOW_ADDRESS_BUTTON_CLICKED']: {
                bind: 'request-unmasked-address-button-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-legal-terms',
        type: 'UI',
        properties: {
          id: 'cells-step-legal-terms',
          currentStep: 4,
          maxStep: MAXSTEPS,
          legalTermsText: 'cells-step-legal-terms-check-text',
          stepTitle: 'cells-step-legal-terms-title',
          showTermsAcceptedButton: true,
          active: false,
          cellsConnections: {
            in: {
              [PREFIX + '_INIT_PAGE']: {
                bind: 'initialize'
              },
              [PREFIX + '_SCROLL_COMPLETE']: {
                bind: 'scrollComplete'
              }
            },
            out: {
              [PREFIX + 'REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [PREFIX + '_COLLAPSE_OTHER_STEP']: {
                bind: 'change-pressed'
              },
              [PREFIX + '_NEXT_STEP']: {
                bind: 'continue-pressed'
              },
              [PREFIX + '_NEXT_STEP']: {
                bind: 'legal-terms-pressed'
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
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          customerAddressesApiVersion: CONFIG.globalServices.versions.customers,
          headers: { 'Accept-Language': 'es' },
          native: CONFIG.native || false,
          cellsConnections: {
            in: {
              [PREFIX + '_REQUEST_UNMASKED_USER_ADDRESS']: {
                bind: 'getCustomerAddresses'
              }
            },
            out: {
              [PREFIX + '_SUCCESS_GET_CUSTOMER_ADDRESSES']: {
                bind: 'set-customer-addresses'
              },
              [PREFIX + 'get_customer_addresses_error']: {
                bind: 'error-on-get-customer-addresses'
              },
              global_web_request_channel: {
                bind: 'request-payload-changed',
                'forward-to-native': true
              }
            },
            params: {
              customerId: 'global_user_id'
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          cardsApiVersion: CONFIG.globalServices.versions.cardPayments,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PREFIX + '_CREATE_CARD_REQUEST']: {
                bind: 'postCardsNpm'
              }
            },
            out: {
              [PREFIX + '_additional_cards_success']: {
                bind: 'post-cards-npm'
              },
              [PREFIX + '_additional_cards_error']: {
                bind: 'error-on-post-cards-npm',
                analytics: analyticsCreditcardMainpage.signatureError
              }
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        tag: 'cells-confirm-buttons',
        properties: {
          config: configButtons,
          unfixed: true,
          className: 'additional-card-hiring-confirm-button',
          cellsConnections: {
            out: {
              additional_card_hiring_show_button_finish_steps_clicked: {
                bind: 'cells-confirm-buttons-click-primary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-customers-mx-dm',
        familyPath: 'glomo-customers-dm',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              [PREFIX + '_INIT_PAGE']: {
                bind: 'getCustomerAddresses'
              }
            },
            out: {
              global_set_customer_addresses: {
                bind: 'set-customer-addresses'
              }
            },
            params: {
              user: 'global_user',
              customerId: 'global_user_id'
            }
          }
        }
      },
      {
        zone: 'app__main',
        familyPath: 'glomo-analytics-additional-card-manager',
        tag: 'glomo-analytics-additional-card-manager-mx',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              global_card_detail_data_success_channel: {
                bind: 'product'
              },
              [PREFIX + '_AMOUNT']: {
                bind: 'persistAmount'
              },
              [PREFIX + '_INFORM_SHIPPING_ADDRESS']: {
                bind: 'persistAddress'
              },
              [PREFIX + '_SCROLL_ZONE']: {
                bind: 'stepFired'
              },
              [PREFIX + '_VALUES_INPUT']: {
                bind: 'startedFired'
              },
              [PREFIX + '_VALUES_INPUT_AMOUNT']: {
                bind: 'startedFired'
              },
              [PREFIX + '_FINISH_STEPS']: {
                bind: 'confirmStep'
              },
              open_sign_modal_additional_card: {
                bind: 'openSign'
              },
              [PREFIX + '_additional_cards_success']: {
                bind: 'successAnalytics'
              },
              [PREFIX + '_RESET_FLOW']: {
                bind: 'reset'
              }
            },
            out: {
              [PREFIX + '_ANALYTICS_1']: {
                bind: 'analytics-additional-step-first-step'
              },
              [PREFIX + '_ANALYTICS_STARTED']: {
                bind: 'analytics-started',
                analytics: analyticsCreditcardMainpage.appStarted
              },
              [PREFIX + '_ANALYTICS_2']: {
                bind: 'analytics-additional-step-address-and-shipping',
                analytics: analyticsCreditcardMainpage.appPageVisit
              },
              [PREFIX + '_ANALYTICS_3']: {
                bind: 'analytics-additional-step-terms-and-conditions',
                analytics: analyticsCreditcardMainpage.getAppStep(2, '2 direccion envio')
              },
              [PREFIX + '_ANALYTICS_4']: {
                bind: 'analytics-additional-step-confirmation',
                analytics: analyticsCreditcardMainpage.getAppStep(3, '3 terminos y condiciones')
              },
              [PREFIX + '_ANALYTICS_5']: {
                bind: 'analytics-additional-step-otp',
                analytics: analyticsCreditcardMainpage.getAppStep(4, '4 confirmacion')
              },
              [PREFIX + '_ANALYTICS_OTP']: {
                bind: 'analytics-otp',
                analytics: analyticsCreditcardMainpage.getAppStep(5, '5 otp')
              },
              [PREFIX + '_ANALYTICS_COMPLETE']: {
                bind: 'analytics-complete',
                analytics: analyticsCreditcardMainpage.appComplete
              }
            }
          }
        }
      }
    ]
  };
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-cards-bgadpmock', PAGE_NAME, ['post-cards-npm', 'error-on-post-cards-npm']);
  signConnector('cells-dm-global-apis-customers-bgadpmock', PAGE_NAME, ['set-customer-addresses', 'error-on-get-customer-addresses']);
  const connectionsOutChannel = connectionsOut(base);
  connectionsOutChannel('cells-sign-operation-dm-mx').open_sign_modal_additional_card = {
    bind: 'signature-required'
  };
  connectionsOutChannel('cells-sign-operation-dm-mx').error_sign_modal_open = {
    bind: 'signature-error'
  };
  return base;
};
