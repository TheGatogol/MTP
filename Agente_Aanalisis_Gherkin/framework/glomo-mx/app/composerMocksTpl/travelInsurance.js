/* eslint-disable no-unused-vars */
'use strict';
const pageName = 'travelInsurance';

module.exports = CONFIG => {
  const { SPINNER: spinner, getLocalCurrency, getLanguage, glomoOpenDocument, headerHeight, setProperty, detailDownloadParams, connectionsOut, useNames } = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const product = 'travelInsurance';
  const operativePrefix = 'travel_insurance';
  const maxSteps = false;
  const analytics = require('./analytics/_travelInsurance')();
  const isNative = CONFIG.native || false;
  const isNativeIos = CONFIG.nativeIos || false;
  const isNativeAndroid = CONFIG.nativeAndroid || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getChannelNameCallMeBack = nameChannel => getChannelName(nameChannel).toLowerCase();
  const businessDocumentsApiVersion = CONFIG.globalServices.versions.businessDocumentsV0;

  const cmbConfig = {
    operativeName: pageName,
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true
    },
    lastStep: 5,
    onlyCallMeBack: true,
    recoverySettings: true,
    useFeatureFlag: true,
    isCallCenter: true,
    twoCallMeBacks: true
  };
  const cmbConfigAnalytics = {
    operativeName: pageName,
    steps: {
      1: '1 detalle',
      2: '2 personas aseguradas',
      3: '3 metodo de pago',
      4: '4 terminos y condiciones',
      5: '5 confirmacion'
    },
    levels: {
      1: 'seguro viaje'
    },
    buttons: {
      summary: '5 confirmacion'
    }
  };
  const { controllerCallMeBack, analyticsCallMeBack } = require('./common/_redirectCallMeBack');
  const groupNames = {
    'cards': 'cells-product-selector-modal-cards-group-title',
    'accounts': 'cells-product-selector-modal-accounts-group-title'
  };

  const documentsData = [ {
    icon: 'coronita:pdf',
    text: 'travel-insurance-terms-pdf-terms-and-conditions',
    id: '01'
  } ];

  const modalConfigItems = {
    'glomo-travel-insurance-functional-error': {
      code: 'glomo-travel-insurance-functional-error',
      maximize: false,
      className: 'custom error travel-insurance-modal',
      closeOnPrimaryButton: true,
      acceptBtLabel: 'travel-insurance-sign-error-retry',
      cancelBtLabel: 'alert-LOGOUT-exit',
      values: [
        { icon: 'coronita:alert', iconClass: 'icon-size-24', class: 'info' },
        { text: 'glomo-travel-insurance-communication-retry-error-text' }
      ]
    },
    'glomo-travel-insurance-request-error': {
      code: 'glomo-travel-insurance-request-error',
      title: 'travel-insurance-error-modal-title',
      maximize: true,
      className: 'full-height-info header--title-grey',
      closeOnPrimaryButton: true,
      heroImage: './images/errors/error.svg',
      acceptBtLabel: 'travel-insurance-sign-error-exit',
      values: [
        { title: 'travel-insurance-sign-error-modal-title', class: 'spacing text-center' },
        { text: 'travel-insurance-sign-error-retry-modal-subtitle' }
      ]
    },
    'glomo-travel-insurance-communication-error': {
      code: 'glomo-travel-insurance-communication-error',
      title: 'travel-insurance-error-modal-title',
      maximize: true,
      className: 'full-height-info header--title-grey',
      closeOnPrimaryButton: true,
      heroImage: './images/errors/error.svg',
      acceptBtLabel: 'travel-insurance-sign-error-exit',
      values: [
        { title: 'alert-COMUNICATION-ERROR-INFO-title-modal', class: 'spacing text-center' },
        { text: 'glomo-travel-insurance-communication-error-text' }
      ]
    },
    'glomo-travel-insurance-post-retry-error': {
      code: 'glomo-travel-insurance-post-retry-error',
      title: 'travel-insurance-error-modal-title',
      maximize: true,
      className: 'full-height-info header--title-grey',
      closeOnPrimaryButton: true,
      heroImage: './images/errors/error.svg',
      acceptBtLabel: 'travel-insurance-sign-error-retry',
      cancelBtLabel: 'travel-insurance-modal-reset-travelers-cancel',
      values: [
        { title: 'travel-insurance-sign-error-modal-title', class: 'spacing text-center' },
        { text: 'travel-insurance-sign-error-modal-subtitle' }
      ]
    },
    'glomo-travel-insurance-communication-retry-error': {
      code: 'glomo-travel-insurance-communication-retry-error',
      title: 'travel-insurance-error-modal-title',
      maximize: true,
      className: 'full-height-info header--title-grey',
      closeOnPrimaryButton: true,
      heroImage: './images/errors/error.svg',
      acceptBtLabel: 'travel-insurance-sign-error-retry',
      cancelBtLabel: 'travel-insurance-modal-reset-travelers-cancel',
      values: [
        { title: 'alert-COMUNICATION-ERROR-INFO-title-modal', class: 'spacing text-center' },
        { text: 'glomo-travel-insurance-communication-retry-error-try-later' }
      ]
    },
    'exit-not-save-information-modal': {
      code: 'exit-not-save-information-modal',
      maximize: false,
      className: 'custom error',
      closeOnPrimaryButton: true,
      acceptBtLabel: 'travel-insurance-sign-error-exit',
      cancelBtLabel: 'travel-insurance-modal-reset-travelers-accept',
      values: [
        { icon: 'coronita:alert', iconClass: 'icon-size-24', class: 'info' },
        { text: 'alert-exit-operative-message' }
      ]
    },
    'not-save-information-traveler': {
      code: 'not-save-information-traveler',
      maximize: false,
      className: 'custom error',
      closeOnPrimaryButton: true,
      acceptBtLabel: 'travel-insurance-modal-reset-travelers-accept',
      cancelBtLabel: 'travel-insurance-products-list-cancel-button',
      values: [
        { icon: 'coronita:alert', iconClass: 'icon-size-24', class: 'info' },
        { text: 'travel-insurance-modal-reset-travelers-message' }
      ]
    },
    'travel-insurance-contractual-documentation': {
      code: 'contractual-documentation',
      className: 'info',
      maximize: false,
      closeOnPrimaryButton: true,
      acceptBtLabel: 'alert-ASSOCIATED-TRANSACTIONS-accept',
      values: [
        { icon: 'coronita:help', iconClass: 'icon-size-24', class: 'info' },
        { text: 'travel-insurance-modal-contractual-documentation' }
      ]
    },
    'modal-data-travel': {
      code: 'modal-data-travel',
      className: 'info',
      maximize: false,
      closeOnPrimaryButton: true,
      acceptBtLabel: 'alert-ASSOCIATED-TRANSACTIONS-accept',
      values: [
        { icon: 'coronita:help', iconClass: 'icon-size-24', class: 'info' },
        { text: 'travel-insurance-modal-data-travel' }
      ]
    },
    'modal-destination-travel': {
      code: 'modal-destination-travel',
      className: 'info',
      maximize: false,
      closeOnPrimaryButton: true,
      acceptBtLabel: 'alert-ASSOCIATED-TRANSACTIONS-accept',
      values: [
        { icon: 'coronita:help', iconClass: 'icon-size-24', class: 'info' },
        { text: 'travel-insurance-modal-destination-travel' }
      ]
    }
  };

  const DESCRIPTIONS_OF_COVERAGES = {
    'BGMA': 'glomo-travel-insurance-coverage-BGMA',
    'INVI': 'glomo-travel-insurance-coverage-INVI',
    'REQP': 'glomo-travel-insurance-coverage-REQP',
    'GAFU': 'glomo-travel-insurance-coverage-GAFU',
    'BEDE': 'glomo-travel-insurance-coverage-BEDE',
    'BMAV': 'glomo-travel-insurance-coverage-BMAV',
    'BPOA': 'glomo-travel-insurance-coverage-BPOA',
    'MUAC': 'glomo-travel-insurance-coverage-MUAC',
    'RCIE': 'glomo-travel-insurance-coverage-RCIE',
    'DAEP': 'glomo-travel-insurance-coverage-DAEP',
    'DEQP': 'glomo-travel-insurance-coverage-DEQP',
    'CAVI': 'glomo-travel-insurance-coverage-CAVI',
    'DEVU': 'glomo-travel-insurance-coverage-DEVU',
    'PEVC': 'glomo-travel-insurance-coverage-PEVC',
    'GAHC': 'glomo-travel-insurance-coverage-GAHC',
    'RESA': 'glomo-travel-insurance-coverage-RESA',
    'RERM': 'glomo-travel-insurance-coverage-RERM',
    'TMAS': 'glomo-travel-insurance-coverage-TMAS',
    'ACME': 'glomo-travel-insurance-coverage-ACME',
    'REAN': 'glomo-travel-insurance-coverage-REAN',
    'LOEQ': 'glomo-travel-insurance-coverage-LOEQ',
    'SAHO': 'glomo-travel-insurance-coverage-SAHO',
    'TMUR': 'glomo-travel-insurance-coverage-TMUR',
    'SEVC': 'glomo-travel-insurance-coverage-SEVC',
    'AMTI': 'glomo-travel-insurance-coverage-AMTI',
    'ERDP': 'glomo-travel-insurance-coverage-ERDP'
  };

  const base = {
    hash: 'travel-insurance-app',
    currentPage: {
      url: '/travel-insurance'
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        delayScrollTop: 300,
        iOSFixedHeader: isNativeIos,
        topOnConfirm: true,
        animationType: 'verticalUp',
        headerHeight,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding bg-core-blue header-fixed' : 'bg-core-blue header-fixed',
        extraHeaderClass: 'header--core',
        cellsConnections: {
          in: {
            [product + '_SCROLL_ZONE']: {
              bind: 'scrollItemIntoView'
            },
            [product + '_SHOW_CONFIRM_CHANNEL']: {
              bind: 'showConfirm'
            },
            [product + '_SHOW_CONFIRM_OFFER_PAGE']: {
              bind: 'showConfirm'
            },
            [product + '_INIT_CHANNEL']: {
              bind: 'recalculateHeader'
            },
            [product + '_ALL_STEPS_SCROLL']: {
              bind: 'scrollItemIntoView'
            },
            [product + 'RESET_SCROLL']: {
              bind: 'resetLayerScroll'
            },
            [getChannelNameCallMeBack('_call_me_back_show_confirm_channel')]: {
              bind: 'showConfirm'
            }
          },
          out: {
            [product + '_SCROLL_CHANNEL']: {
              bind: 'opx-template-content-scroll'
            }
          }
        }
      }
    },
    components: [
      spinner(CONFIG),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          rightIcon: 'coronita:close',
          id: 'travel-header',
          className: 'header--core-ios',
          secondaryClass: 'header--core',
          titleName: 'travel-insurance-error-modal-title',
          setTimeoutHideTooltip: 3000,
          cellsConnections: {
            in: {
              [product + '_ADD_HEADER_CLASS']: {
                bind: 'setSecondaryClass'
              },
              [product + '_REMOVE_CLASS_HEADER']: {
                bind: 'removeSecondaryClass'
              },
              [getChannelNameCallMeBack('_call_me_back_change_header_tooltip_status')]: {
                bind: 'hasDisplayedTooltip'
              },
              [getChannelNameCallMeBack('_call_me_back_set_header_timeout_tooltip')]: {
                bind: 'setTimeoutShowTooltip'
              },
              [getChannelNameCallMeBack('_call_me_back_set_header_configuration')]: {
                bind: 'setProperties'
              }
            },
            out: {
              [product + '_NAVIGATION_PAGE_BACK_REQUEST']: {
                bind: 'click-right-button'
              },
              [getChannelNameCallMeBack('_call_me_back_init_header_configuration')]: {
                bind: 'click-right-secondary-button'
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
          backAction: 'header-right-button',
          cellsConnections: {
            in: {
              [product + '_GO_TRAVEL_INSURANCE_SUCCESS_PAGE']: {
                bind: 'navigateToPage'
              },
              [product + '_NAVIGATION']: {
                bind: 'goBack'
              }
            },
            out: {
              [product + '_NAVIGATION_TO_REVIEW']: {
                bind: 'navigation-to-travel-insurance-success',
                link: {
                  page: 'travelInsuranceSuccessPage',
                  skipHistory: true
                },
                navigation_travel_insurance_main_page_to_previous_page: {
                  bind: 'header-right-button'
                }
              }
            }
          }
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
              __bridge_page_travelInsurance: {
                bind: 'init'
              }
            },
            out: {
              [product + '_INIT_CHANNEL']: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              [getChannelNameCallMeBack('_call_me_back_initialize')]: {
                bind: 'init-page-first-time'
              },
              [product + '_INIT_CHANNEL_FIRST_TIME']: {
                bind: 'init-page-first-time'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-step-offer-page',
        properties: {
          pageName,
          active: true,
          className: 'travel-insurance',
          id: 'travel-insurance-offer',
          hideHeader: true,
          currentStep: 1,
          maxSteps,
          notInitializeWithAttached: false,
          stepTitle: 'travel-insurance-offer-page-filled-title',
          changeLabel: 'travel-insurance-change-label-step',
          cellsConnections: {
            in: {
              [product + '_INIT_CHANNEL']: {
                bind: 'initialize'
              },
              [product + '_BUILD_OFFER_PAGE']: {
                bind: 'items'
              },
              [product + '_OFFER_RECALCULATE_STICKY']: {
                bind: 'recalculateStickyHeight'
              },
              [product + '_OFFER_DISABLE_STICKY']: {
                bind: 'stickyEnabled'
              },
              [product + '_OFFER_DISABLE_STICKY']: {
                bind: 'simulationEnablesSticky'
              },
              [product + '_INVALIDATE_SIMULATION']: {
                bind: 'updateSimulationValues'
              }
            },
            out: {
              [product + '_REGISTER_TYPE_OF_TRAVEL']: {
                bind: 'cells-radio-group-selected-index-changed'
              },
              [product + '_REGISTER_FIRST_DATE_ANALYTICS']: {
                bind: 'show-start-calendar'
              },
              [product + '_REGISTER_SECOND_DATE_ANALYTICS']: {
                bind: 'show-end-calendar'
              },
              [product + '_REGISTER_COVERAGE_AND_ASSISTANCE']: {
                bind: 'cells-accordion-step-opened'
              },
              [product + '_REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [product + '_OPEN_MODAL_NUMBER_OF_TRAVELERS']: {
                bind: 'open-modal-number-of-travelers'
              },
              [product + '_OPEN_MODAL_NUMBER_OF_TRAVELERS_ICON']: {
                bind: 'cells-molecule-input-icon-tap'
              },
              [product + '_OFFER_PAGE_SET_QUOTATIONS_REQUEST_BODY']: {
                bind: 'trigger-simulation'
              },
              [product + '_START_DATE_CHANGED']: {
                bind: 'start-date-changed'
              },
              [product + '_FINISH_DATE_CHANGED']: {
                bind: 'end-date-changed'
              },
              [product + '_OFFER_PAGE_RETRY_POST_REQUEST']: {
                bind: 'summary-closed'
              },
              [product + '_CHECK_CHANGES']: {
                bind: 'continue-pressed'
              },
              [product + '_UPDATE_OFFER_STATE']: {
                bind: 'continue-pressed'
              },
              [product + '_ADD_HEADER_CLASS']: {
                bind: 'continue-pressed'
              },
              [product + '_GO_TO_SECOND_STEP']: {
                bind: 'continue-pressed'
              },
              [product + '_validated_changed_number_travelers']: {
                bind: 'continue-pressed'
              },
              [product + '_MANAGE_STEP']: {
                bind: 'change-pressed'
              },
              [product + '_GO_TO_COVERAGE_PAGE']: {
                bind: 'change-data-pressed',
                link: {
                  page: 'travelInsuranceCoverages'
                }
              },
              [product + '_OPEN_INFO_DATE_TRAVEL']: {
                bind: 'open-modal-info-date-travel'
              },
              [product + '_OPEN_COVERAGE_AND_ASSISTANCE']: {
                bind: 'on-cells-accordion-step-opened'
              },
              [product + '_VALIDATION_DATE']: {
                bind: 'invalidate-date-event'
              },
              [product + '_OPEN_INFO_DESTINATION_TRAVEL']: {
                bind: 'open-modal-info-destination-travel'
              },
              [product + '_CALL_SAC']: {
                bind: 'request-phone-call'
              },
              [product + '_ON_CHANGE_STEP_STATUS']: {
                bind: 'change-pressed'
              },
              [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
                bind: 'continue-pressed'
              },
              [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
                bind: 'change-pressed'
              },
              [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
                bind: 'cmb-button-pressed'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        tag: 'cells-modal-selector',
        type: 'UI',
        properties: {
          cellsConnections: {
            in: {
              [product + 'SET_TRAVELERS_CONFIG']: {
                bind: 'items'
              },
              [product + '_OPEN_MODAL_NUMBER_OF_TRAVELERS']: {
                bind: 'open'
              },
              [product + '_OPEN_MODAL_NUMBER_OF_TRAVELERS_ICON']: {
                bind: 'open'
              },
              [product + '_RESET_MODAL']: {
                bind: 'reset'
              }
            },
            out: {
              [product + 'NUMBER_OF_TRAVELERS_SELECTED']: {
                bind: 'item-selected-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-user-selector',
        properties: {
          id: 'user-selector',
          currentStep: 2,
          maxSteps,
          stepTitle: 'travel-insurance-people-name',
          usersToInsureSubtitle: 'travel-insurance-people-name-subtitle',
          changeLabel: 'travel-insurance-change-label-step',
          secondaryButtonLabel: 'travel-insurance-user-select-secondary-button-label',
          className: 'travel-insurance',
          hideCurrentStepLabel: true,
          notInitializeWithAttached: false,
          cellsConnections: {
            in: {
              [product + '_INIT_CHANNEL']: {
                bind: 'initialize'
              },
              [product + '_USER_SELECTOR_CONFIG']: {
                bind: 'userSelectorConfig'
              },
              [product + '_SET_EDITED_TRAVELERS']: {
                bind: 'users'
              },
              [product + '_ONLY_CUSTOMER_IS_TRAVEL']: {
                bind: '_continueSelected'
              },
              [product + '_CLEAN_USERS_SELECTOR']: {
                bind: 'users'
              }
            },
            out: {
              [product + '_USER_SELECTOR_UPDATE']: {
                bind: 'select-user-update'
              },
              [product + '_REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [product + '_NEXT_STEP']: {
                bind: 'select-continue'
              },
              [product + '_SET_ACCOUNTS']: {
                bind: 'select-continue'
              },
              [product + '_USER_INSURED_TRAVELER']: {
                bind: 'customer-traveler'
              },
              [product + '_USER_NOT_INSURED_TRAVELER']: {
                bind: 'customer-not-traveler'
              },
              [product + '_SECOND_STEP_LOADED']: {
                bind: 'cells-step-focus-in'
              },
              [product + '_MANAGE_STEP']: {
                bind: 'change-pressed'
              },
              [product + '_ON_CHANGE_STEP_STATUS']: {
                bind: 'change-pressed'
              },
              [product + '_ON_FOCUS_STEP_STATUS']: {
                bind: 'cells-step-focus-in'
              },
              [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
                bind: 'select-continue'
              },
              [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
                bind: 'change-pressed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-product-selector',
        properties: {
          className: 'travel-insurance-product description-normal subTitle fix-padding-filled',
          id: 'travel-insurance-product',
          stepId: 'cells-step-product-selector',
          currentStep: 3,
          visibleChars: 5,
          maxSteps,
          stepTitle: 'travel-insurance-title-product-selector',
          description: 'travel-insurance-description-product-selector',
          changeLabel: 'travel-insurance-change-label-step',
          productsListLabel: 'travel-insurance-products-list-label',
          changeOriginText: 'travel-insurance-change-origin-text',
          dontChangeAndContinueText: 'travel-insurance-user-select-secondary-button-label',
          errorMessage: 'travel-insurance-error-modal-card',
          hideCurrentStepLabel: true,
          hideMessagesWhenSaved: true,
          localCurrency: getLocalCurrency(),
          disabledUpdateTitleOnChangeProduct: true,
          stepClickDisable: true,
          disableSeparation: false,
          showSeparator: true,
          clickThrough: true,
          cellsConnections: {
            in: {
              [product + '_INIT_CHANNEL']: {
                bind: 'initialize'
              },
              [product + '_SEND_PRODUCTS']: {
                bind: 'products'
              },
              [product + '_MODAL_PRODUCT_SELECTED']: {
                bind: 'onProductSelected'
              }
            },
            out: {
              [product + '_REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [product + '_THIRD_STEP_LOADED']: {
                bind: 'cells-step-focus-in'
              },
              [product + '_DONT_CHANGE_AND_CONTINUE']: {
                bind: 'dont-change-and-continue'
              },
              [product + '_PRODUCT_SELECTED']: {
                bind: 'selected-changed'
              },
              [product + '_NEXT_STEP']: {
                bind: 'select-product'
              },
              [product + '_ALL_STEPS_COLLAPSED']: {
                bind: 'select-product'
              },
              [product + '_VIEW_ALL_PRODUCTS']: {
                bind: 'view-all'
              },
              [product + '_MANAGE_STEP']: {
                bind: 'change-step-state'
              },
              [product + '_SHOW_CONFIRM_CHANNEL']: {
                bind: 'change-step-state-to-open'
              },
              [product + '_ALL_STEPS_COLLAPSED']: {
                bind: 'on-change-product-selected'
              },
              [product + '_PRODUCT_SELECTED']: {
                bind: 'on-change-product-selected'
              },
              [product + '_ON_CHANGE_STEP_STATUS']: {
                bind: 'change-pressed'
              },
              [product + '_ON_FOCUS_STEP_STATUS']: {
                bind: 'cells-step-focus-in'
              },
              [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
                bind: 'dont-change-and-continue'
              },
              [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
                bind: 'change-step-state'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-product-selector-modal',
        properties: {
          modalTitle: 'travel-insurance-products-list-label',
          showCloseModalButton: true,
          className: 'selected-product',
          groupNameWithTitle: groupNames,
          groupByProperty: 'family',
          closeButtonLabel: 'travel-insurance-products-list-exit-button',
          localCurrency: getLocalCurrency(),
          language: getLanguage(),
          errorMessage: 'travel-insurance-error-modal-card',
          iOSFixedHeader: true,
          cellsConnections: {
            in: {
              [product + '_VIEW_ALL_PRODUCTS']: {
                bind: 'treatProducts'
              }
            },
            out: {
              [product + '_MODAL_PRODUCT_SELECTED']: {
                bind: 'selected-product'
              },
              [product + '_PRODUCT_SELECTED']: {
                bind: 'selected-product'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-card-checklist-contract',
        properties: {
          className: 'travel-insurance header-title-step-padding-md',
          stepId: 'cells-step-card-checklist-contract',
          currentStep: 4,
          maxSteps,
          inlineEmail: true,
          showChangeContactData: true,
          stepTitle: 'travel-insurance-checklist-contract-title',
          changeLabel: 'travel-insurance-change-label-step',
          consultText: 'travel-insurance-checklist-contract-consult-text',
          messageDescription: 'travel-insurance-checklist-contract-message-description',
          typeIconMessageChangeData: 'info-light-blue',
          changeDataIconMessageClass: 'custom-info-light',
          pdfData: documentsData,
          cellsConnections: {
            in: {
              [product + '_INIT_CHANNEL_FIRST_TIME']: {
                bind: 'initialize'
              },
              [product + '_SEND_PROPERTIES']: {
                bind: 'setProperties'
              },
              [product + 'handle_mail_contract_step']: {
                bind: 'contactData'
              }
            },
            out: {
              [product + '_REGISTER_STEP_CHANNEL']: {
                bind: 'register-step'
              },
              [product + '_FOURTH_STEP_LOADED']: {
                bind: 'cells-step-focus-in'
              },
              [product + '_REQUEST_PDF']: {
                bind: 'request-pdf'
              },
              [product + '_REQUEST_DOCUMENT']: {
                bind: 'request-document'
              },
              [product + '_NEXT_STEP']: {
                bind: 'continue-pressed'
              },
              [product + '_GO_TO_SUMMARY']: {
                bind: 'continue-pressed'
              },
              [product + 'send_mail_to_collapsed_contract']: {
                bind: 'continue-pressed'
              },
              [product + 'remove_mail_to_message_contract']: {
                bind: 'change-pressed'
              },
              [product + '_MANAGE_STEP']: {
                bind: 'change-pressed'
              },
              [product + '_ON_CHANGE_STEP_STATUS']: {
                bind: 'change-pressed'
              },
              [product + '_ON_FOCUS_STEP_STATUS']: {
                bind: 'cells-step-focus-in'
              },
              [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
                bind: 'continue-pressed'
              },
              [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
                bind: 'change-pressed'
              }
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        tag: 'cells-summary-view',
        type: 'UI',
        properties: {
          id: 'cells-travel-insurance-summary-view',
          className: 'diy',
          buttonLabel: 'travel-insurance-summary-view',
          operationAmountClass: 'amount-huge-decimals',
          cellsConnections: {
            in: {
              [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
                bind: 'showSecondaryButton'
              },
              [getChannelNameCallMeBack('_call_me_back_show_summary_view_button')]: {
                bind: 'secondaryButtonLabel'
              },
              [product + '_TOGGLE_SUMMARY_BUTTON']: {
                bind: 'hidePrimaryButton'
              }
            },
            out: {
              [product + '_SUMMARY_CLOSED']: {
                bind: 'summary-closed'
              },
              [product + '_GO_TO_OTP']: {
                bind: 'summary-closed'
              },
              [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
                bind: 'secondary-button-pressed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-dm-global-apis-insurances',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: isNative,
          otpId: pageName,
          cellsConnections: {
            in: {
              [product + '_POST_INSURANCE_REQUEST']: {
                bind: 'npmPostInsurances'
              }
            },
            out: {
              [product + '_POST_INSURANCE_SUCCESS']: {
                bind: 'post-insurance-success'
              },
              [product + '_POST_INSURANCE_ERROR']: {
                bind: 'post-insurance-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-business-documents',
        properties: {
          host: CONFIG.globalServices.host,
          native: isNative,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [product + '_REQUEST_PDF_BD']: {
                bind: 'getBusinessDocuments'
              },
              [product + '_REQUEST_PDF_DM_POST']: {
                bind: 'postBusinessDocuments'
              }
            },
            out: {
              [product + '_SUCCESS_RESPONSE_PDF']: {
                bind: 'success-on-get-business-documents'
              },
              [product + '_ERROR_RESPONSE_ON_GET_BD']: {
                bind: 'error-on-get-business-documents'
              },
              [product + '_ERROR_POST_BD']: {
                bind: 'error-on-post-business-documents'
              },
              [product + '_SUCCESS_POST_BD']: {
                bind: 'post-business-documents-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-travel-insurance-manager',
        tag: 'glomo-travel-insurance-manager-mx',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: isNative,
          currenciesToFilter: ['USD', 'MXN'],
          travelInsurancesProductsVersion: CONFIG.globalServices.versions.travelInsurancesProducts,
          travelInsuranceVersion: CONFIG.globalServices.versions.travelInsurance,
          insurancesVersion: CONFIG.globalServices.versions.insurances,
          customerVersion: CONFIG.globalServices.versions.customersV1,
          businessDocumentsApiVersion,
          detailDownloadParams,
          hideBranchTimetable: true,
          localCurrency: getLocalCurrency(),
          language: getLanguage(),
          isNativeIos: isNativeIos,
          isAndroid: isNativeAndroid,
          modalConfigItems,
          descriptionsOfCoverages: DESCRIPTIONS_OF_COVERAGES,
          receiptIcon: './images/travelInsurance/account-icon.svg',
          pdfDocTitle: 'CONDICIONES GENERALES SEGURO VIAJE',
          cellsConnections: {
            in: {
              travelInsurance_date_input_disabled: {
                bind: 'handleDisableDateInput'
              },
              global_cache_channel: {
                bind: 'globalCacheStorage'
              },
              global_server_config_channel: {
                bind: 'globalServerConfig'
              },
              global_web_response_success_channel: {
                bind: 'successResponseHandlerInsurance'
              },
              global_web_response_failure_channel: {
                bind: 'errorResponseHandlerInsurance'
              },
              global_set_app_settings: {
                bind: 'getAppSettings'
              },
              contract_product_section_offers_retrieved: {
                bind: 'globalCampaignsParsed'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'backNavigation'
              },
              dashboard_accounts: {
                bind: 'globalAccounts'
              },
              global_dashboard_cards: {
                bind: 'globalCards'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'navigationFromDeepLink'
              },
              global_storage_get_app_settings_success: {
                bind: 'getAppSettings'
              },
              [product + '_INIT_CHANNEL_FIRST_TIME']: {
                bind: 'init'
              },
              [product + 'NUMBER_OF_TRAVELERS_SELECTED']: {
                bind: 'numberOfTravelersSelected'
              },
              [product + '_OFFER_PAGE_SET_QUOTATIONS_REQUEST_BODY']: {
                bind: 'simulationBody'
              },
              [product + '_ITEM_SELECTED']: {
                bind: 'itemSelected'
              },
              [product + '_SET_ACCOUNTS']: {
                bind: 'notifyAccounts'
              },
              [product + '_USER_INSURED_TRAVELER']: {
                bind: 'customerInsured'
              },
              travel_insurance_user_data_modal_PARSE_USERS: {
                bind: 'parseUsers'
              },
              [product + '_USER_NOT_INSURED_TRAVELER']: {
                bind: 'customerNotInsured'
              },
              [product + '_PRODUCT_SELECTED']: {
                bind: 'accountSelected'
              },
              [product + '_OFFER_PAGE_RETRY_POST_REQUEST']: {
                bind: 'retryQuotationsCall'
              },
              [product + '_REQUEST_PDF']: {
                bind: 'requestPdf'
              },
              [product + '_OPEN_INFO_DATE_TRAVEL']: {
                bind: 'openModalDataTravel'
              },
              [product + '_REQUEST_DOCUMENT']: {
                bind: 'openContractualDocumentation'
              },
              [product + '_SUMMARY_CLOSED']: {
                bind: 'doInsurancesRequest'
              },
              [product + '_BUTTON_PRIVACY_CLICKED']: {
                bind: '_buttonPrivacyForm'
              },
              [product + '_UPDATE_OFFER_STATE']: {
                bind: 'updateOfferState'
              },
              [product + '_VALIDATION_DATE']: {
                bind: 'invalidateDate'
              },
              [product + '_CHECK_CHANGES']: {
                bind: 'checkOfferChanges'
              },
              [product + '_NOT_SAVE_INFORMATION_TRAVELER_ACCEPTED']: {
                bind: 'resetAfterUserSelector'
              },
              [product + '_NAVIGATION_PAGE_BACK_REQUEST']: {
                bind: 'backNavigation'
              },
              [product + '_SHOW_CONFIRM_CHANNEL']: {
                bind: 'dataSaved'
              },
              [product + '_EXIT_NOT_SAVE_INFORMATION']: {
                bind: 'resetData'
              },
              [product + '_REQUEST_RETRY_TRAVEL_INSURANCE']: {
                bind: 'doInsurancesRequest'
              },
              [product + '_REQUEST_ERROR']: {
                bind: 'resetData'
              },
              [product + '_FUNCTIONAL_ERROR_BUTTON_ACCEPT']: {
                bind: 'init'
              },
              [product + '_GO_TRAVEL_INSURANCE_SUCCESS_PAGE']: {
                bind: 'resetData'
              },
              [product + '_SCROLL_CHANNEL']: {
                bind: 'templateContentScroll'
              },
              [product + '_POST_INSURANCE_SUCCESS']: {
                bind: 'parseSignToReceipt'
              },
              [product + '_POST_INSURANCE_ERROR']: {
                bind: 'onInsuranceRequestError'
              },
              [product + 'send_mail_to_collapsed_contract']: {
                bind: 'handleMailContract'
              },
              [product + 'remove_mail_to_message_contract']: {
                bind: 'handleMailContract'
              },
              [product + '_validated_changed_number_travelers']: {
                bind: 'validatedNumberTravelers'
              },
              [product + '_OPEN_INFO_DESTINATION_TRAVEL']: {
                bind: 'openModalDestinationTravel'
              },
              [product + '_SUCCESS_RESPONSE_PDF']: {
                bind: 'successResponsePDF'
              },
              [product + '_SUCCESS_POST_BD']: {
                bind: 'successBasePdf'
              },
              [product + '_ERROR_RESPONSE_ON_GET_BD']: {
                bind: 'errorHandlerOnBusinessDocs'
              },
              [product + '_ERROR_POST_BD']: {
                bind: 'errorHandlerOnBusinessDocs'
              },
              [product + '_CALL_SAC']: {
                bind: 'callSacNumber'
              },
              global_open_document_url_error: {
                bind: 'errorHandlerOnBusinessDocs'
              },
              [product + '_open_sign_modal']: {
                bind: 'closeSpinner'
              },
              [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
                bind: 'showCallMeBack'
              },
              [product + '_SHOW_CONFIRM_OFFER_PAGE']: {
                bind: 'showContractButton'
              }
            },
            out: {
              [product + '_TOGGLE_SUMMARY_BUTTON']: {
                bind: 'toggle-contract-button'
              },
              travelInsurance_enable_date_input: {
                bind: 'to-enable-calendar-form-user-list'
              },
              travelInsurancePage_ready_channel: {
                bind: 'page-loaded',
                'forward-to-native': true
              },
              [product + 'SET_TRAVELERS_CONFIG']: {
                bind: 'set-travelers-config'
              },
              [product + '_READY_PAGE']: {
                bind: 'page-loaded'
              },
              global_web_request_channel: {
                bind: 'request-payload-changed',
                'forward-to-native': true
              },
              [product + '_CHANGE_HEADER_COLOR']: {
                bind: 'header-class-changed'
              },
              [product + '_HEADER_TITLE_TEXT']: {
                bind: 'travel-insurance-title-header-changed'
              },
              [product + '_BUILD_OFFER_PAGE']: {
                bind: 'offer-page-config-state-changed'
              },
              [product + '_OFFER_RECALCULATE_STICKY']: {
                bind: 'recalculate-offer-sticky-container'
              },
              [product + '_OFFER_DISABLE_STICKY']: {
                bind: 'disable-offer-sticky'
              },
              [product + '_SHOW_CONFIRM_CHANNEL']: {
                bind: 'all-steps-collapsed'
              },
              [product + '_SEND_PRODUCTS']: {
                bind: 'products-changed'
              },
              [product + '_SEND_PROPERTIES']: {
                bind: 'set-properties'
              },
              [product + '_USER_SELECTOR_CONFIG']: {
                bind: 'user-selector-buttons-config'
              },
              [product + '_ALL_COVERAGES_ITEMS']: {
                bind: 'all-insurance-coverages-changed'
              },
              [product + '_ONLY_CUSTOMER_IS_TRAVEL']: {
                bind: 'only-customer-is-traveler'
              },
              [product + '_SET_EDITED_TRAVELERS']: {
                bind: 'user-selector-selected-travelers'
              },
              [product + '_TRAVELERS_PRIVACY_DESCRIPTION']: {
                bind: 'travelers-privacy-description'
              },
              [product + '_OPEN_MODAL_TRAVELERS_DATA']: {
                bind: 'travelers-changed',
                link: {
                  page: 'travelInsuranceUserDataModal'
                }
              },
              [product + '_NEXT_STEP']: {
                bind: 'continue-next-step'
              },
              [product + '_OPEN_PDF']: {
                bind: 'open-terms-and-conditions-pdf'
              },
              [product + '_GO_TRAVEL_INSURANCE_SUCCESS_PAGE']: {
                bind: 'travel-insurance-receipt'
              },
              [product + '_SET_INSURANCE_RECEIPT']: {
                bind: 'travel-insurance-receipt-changed'
              },
              [product + '_RESET_STEPS_AFTER_OFFER']: {
                bind: 'reset-steps-after-offer'
              },
              [product + '_NEXT_STEP']: {
                bind: 'go-to-next-step'
              },
              [product + '_ALL_STEPS_COLLAPSED']: {
                bind: 'go-to-next-step'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              [product + '_RESET_STEPS_AFTER_PAYMENT_METHODS']: {
                bind: 'reset-steps-after-payment-methods'
              },
              [product + '_QUOTATION_GENERATED_TO_MX']: {
                bind: 'build-amount-to-accept-insurance-mx'
              },
              [product + '_AMOUNT_SELECTED_INSUFFICIENT']: {
                bind: 'reset-steps-after-user-selector'
              },
              [product + '_RESET_USER_SELECTOR_STEP']: {
                bind: 'reset-user-selector-step-and-go'
              },
              [product + '_RESET_CHECKLIST-CONTRACT']: {
                bind: 'reset-step-checklist-contract'
              },
              [product + 'EXIT_TO_TRAVEL_INSURANCE']: {
                bind: 'exit-to-travel-insurance',
                backStep: true,
                skipHistory: true
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-diy-info-modal'
              },
              [product + '_TRAVELERS_DESCRIPTIONS']: {
                bind: 'travelers-description'
              },
              [product + '_SET_ITEMS']: {
                bind: 'privacy-button-set-items'
              },
              [product + '_REMOVE_CLASS_HEADER']: {
                bind: 'remove-class-header'
              },
              [product + '_RESET_MODAL']: {
                bind: 'reset-modal'
              },
              [product + '_RESET_MODAL_BACK_NAVIGATION']: {
                bind: 'reset-steps-back-navigation'
              },
              [product + '_CLEAN_USERS_SELECTOR']: {
                bind: 'clean-users'
              },
              [product + '_INVALIDATE_SIMULATION']: {
                bind: 'invalidate-simulation-event'
              },
              [product + '_POST_INSURANCE_REQUEST']: {
                bind: 'request-post-insurance'
              },
              [product + '_POST_INSURANCE_REQUEST']: {
                bind: 'request-post-insurance'
              },
              [product + 'handle_mail_contract_step']: {
                bind: 'handle-mail-contract-step'
              },
              [product + '_index_travel_has_married_form']: {
                bind: 'index-travel-has-married-form'
              },
              [product + '_REQUEST_PDF_BD']: {
                bind: 'request-pdf-contract'
              },
              [product + '_REQUEST_PDF_DM_POST']: {
                bind: 'request-post-document'
              },
              global_action_launcher_dialer: {
                bind: 'request-call-sac'
              },
              global_open_document_url: {
                bind: 'show-document-event'
              },
              [getChannelNameCallMeBack('_call_me_back_reset_step')]: {
                bind: 'reset-steps-back-navigation'
              },
              dashboard_insurances_refresh: {
                bind: 'send-dashboard-insurances-refresh'
              }
            },
            params: {
              globalUser: 'global_user'
            }
          }
        }
      },
      {
        zone: 'app__main',
        familyPath: 'glomo-travel-insurance-manager',
        tag: 'glomo-analytics-travel-insurance-manager',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              [product + '_BUILD_OFFER_PAGE']: {
                bind: 'quoteSumary'
              },
              [product + '_READY_PAGE']: {
                bind: 'dispatchAppPageVisit'
              },
              [product + '_REGISTER_TYPE_OF_TRAVEL']: {
                bind: 'dispatchAppStartedFromTypology'
              },
              [product + '_REGISTER_FIRST_DATE_ANALYTICS']: {
                bind: 'dispatchAppStartedFromInitDate'
              },
              [product + '_REGISTER_SECOND_DATE_ANALYTICS']: {
                bind: 'dispatchAppStartedFromFinishDate'
              },
              [product + '_OPEN_MODAL_NUMBER_OF_TRAVELERS']: {
                bind: 'dispatchAppStartedFromNumberOfTravelers'
              },
              [product + '_OPEN_INFO_DATE_TRAVEL']: {
                bind: 'dispatchAppStartedFromQuestions'
              },
              [product + '_REGISTER_COVERAGE_AND_ASSISTANCE']: {
                bind: 'dispatchAppStartedFromCoverage'
              },
              [product + '_OFFER_PAGE_SET_QUOTATIONS_REQUEST_BODY']: {
                bind: 'setDetailsOfInsuranceTravel'
              },
              [product + '_OPEN_MODAL_TRAVELERS_DATA']: {
                bind: 'dispatchPawOfTravelInfo'
              },
              [product + '_GO_TO_COVERAGE_PAGE']: {
                bind: 'dispatchPawOfCoveragePage'
              },
              [product + '_SECOND_STEP_LOADED']: {
                bind: 'dispatchAppStepTwo'
              },
              travel_insurance_user_data_modal_PARSE_USERS: {
                bind: 'setDetailOfTravelers'
              },
              [product + '_RADIO_SELECTED']: {
                bind: 'setDetailOfTravelers'
              },
              [product + '_THIRD_STEP_LOADED']: {
                bind: 'dispatchAppStepThree'
              },
              [product + '_FOURTH_STEP_LOADED']: {
                bind: 'dispatchAppStepFour'
              },
              [product + '_GO_TO_SUMMARY']: {
                bind: 'dispatchAppStepFive'
              },
              [product + '_GO_TO_OTP']: {
                bind: 'dispatchAppStepSix'
              },
              [product + '_POST_INSURANCE_SUCCESS']: {
                bind: 'buildSuccessNumber'
              },
              [product + '_INIT_CHANNEL']: {
                bind: 'reset'
              }
            },
            out: {
              [product + '_SEND_FIRST_PAW']: {
                bind: 'app-paw-of-the-feature',
                analytics: analytics.getAdvancedPawFootprint('firstPaw')
              },
              [product + '_SEND_APP_PAGE_VISIT']: {
                bind: 'app-page-visit-travel-insurance',
                analytics: analytics.appPageVisit
              },
              [product + '_SEND_APP_STARTED']: {
                bind: 'app-page-started-travel-insurance',
                analytics: analytics.appStarted
              },
              [product + '_SEND_APP_STEP_TWO']: {
                bind: 'app-step-two-analytics',
                analytics: analytics.getAppSteps('travelersStep')
              },
              [product + '_SEND_APP_DETAIL_OF_TRAVELERS']: {
                bind: 'app-step-travelers-detail-analytics',
                analytics: analytics.getAdvancedPawFootprint('detailTravelers')
              },
              [product + '_SEND_APP_COVERAGE_PAGE']: {
                bind: 'app-paw-coverage-page-analytics',
                analytics: analytics.getAdvancedPawFootprint('coverageInfo')
              },
              [product + '_SEND_APP_STEP_THREE']: {
                bind: 'app-step-three-analytics',
                analytics: analytics.getAppSteps('paymentMethodStep')
              },
              [product + '_SEND_APP_STEP_FOUR']: {
                bind: 'app-step-four-analytics',
                analytics: analytics.getAppSteps('termsAndConditionsStep')
              },
              [product + '_SEND_APP_STEP_FIVE']: {
                bind: 'app-step-five-analytics',
                analytics: analytics.getAppSteps('confirmationStep')
              },
              [product + '_SEND_APP_STEP_SIX']: {
                bind: 'app-step-six-analytics',
                analytics: analytics.getAppSteps('tokenStep')
              },
              [product + '_PERSIST_AMOUNT_TO_SUCCESS_PAGE']: {
                bind: 'persist-amount-to-success-page'
              },
              [product + '_PERSIST_OPERATION_NUMBER_TO_SUCCESS_PAGE']: {
                bind: 'persist-operation-number-to-success-page'
              },
              [product + '_PERSIST_PENDING_DATA_TO_SUCCESS_PAGE']: {
                bind: 'persist-pending-data-to-success-page'
              },
              [product + '_PERSIST_DATA_TO_SUCCESS_PAGE']: {
                bind: 'persist-data-to-success-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-opx-travel-insurance-manager',
        type: 'DM',
        properties: {
          autoActivateStep: true,
          repeatOperative: true,
          decorateSteps: true,
          operativeName: operativePrefix.replace('_', '-'),
          cellsConnections: {
            in: {
              [product + '_PARSE_USERS']: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [product + '_USER_SELECTOR_UPDATE']: {
                bind: 'onAnyStepCollapsedChanged'
              },
              travelInsurance_NEXT_STEP: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [product + '_ON_CHANGE_STEP_STATUS']: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [product + '_ON_FOCUS_STEP_STATUS']: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [product + '_REGISTER_STEP_CHANNEL']: {
                bind: 'registerStep'
              },
              [product + '_MANAGE_STEP']: {
                bind: 'goToStep'
              },
              [product + '_NEXT_STEP']: {
                bind: 'goToNext'
              },
              [product + '_DONT_CHANGE_AND_CONTINUE']: {
                bind: 'goToNext'
              },
              [product + '_ALL_STEPS_COLLAPSED']: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [product + '_RESET_STEPS_AFTER_OFFER']: {
                bind: 'resetFollowingSteps'
              },
              [product + '_RESET_STEPS_AFTER_PAYMENT_METHODS']: {
                bind: 'resetFollowingSteps'
              },
              [product + '_RESET_USER_SELECTOR_STEP']: {
                bind: 'goToStepWithReset'
              },
              [product + '_RESET_CHECKLIST-CONTRACT']: {
                bind: 'resetFollowingSteps'
              },
              [product + '_AMOUNT_SELECTED_INSUFFICIENT']: {
                bind: 'resetFollowingSteps'
              },
              [product + '_RESET_MODAL_BACK_NAVIGATION']: {
                bind: 'reset'
              },
              [product + '_REQUEST_ERROR']: {
                bind: 'reset'
              },
              [product + '_GO_TRAVEL_INSURANCE_SUCCESS_PAGE']: {
                bind: 'reset'
              }
            },
            out: {
              [product + '_SHOW_CONFIRM_CHANNEL']: {
                bind: 'can-execute-changed'
              },
              [product + '_SHOW_CONFIRM_OFFER_PAGE']: {
                bind: 'all-steps-collapsed'
              },
              [product + '_SCROLL_ZONE']: {
                bind: 'cells-scroll-zone'
              },
              [product + '_ALL_STEPS_SCROLL']: {
                bind: 'cells-all-steps-scroll'
              }
            }
          }
        }
      },
      controllerCallMeBack(cmbConfig),
      analyticsCallMeBack(cmbConfigAnalytics)
    ]
  };

  setProperty(base)('cells-spinner-veil').open = true;
  if (isNative) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-insurances', pageName, ['post-insurance-success', 'post-insurance-error']);
  connectionsOut(base)('cells-sign-operation-dm-mx').travelInsurance_open_sign_modal = {
    bind: 'signature-required'
  };
  addCommonErrors(base.components)();

  return base;
};
