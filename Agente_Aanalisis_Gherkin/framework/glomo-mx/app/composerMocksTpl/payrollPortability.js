/* eslint-disable max-statements, new-cap, no-dupe-keys, no-shadow */
'use strict';
const { useNames, toUnderscoreCase, SPINNER, detailDownloadParams, glomoOpenDocument, getLocalCurrency, getVisibleChars } = require('./common/helpers/_utils');
const PAGE_NAME = 'payrollPortability';
const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const spinner = SPINNER(CONFIG);
  const localCurrency = getLocalCurrency(CONFIG);
  const visibleChars = getVisibleChars(CONFIG)('account');
  const openDocument = glomoOpenDocument(CONFIG);
  const MAX_STEPS = 4;
  const IS_NATIVE_IOS  = CONFIG.nativeIos || false;
  const localStorage = require('./common/_local-storage');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const ANALYTICS = require('./analytics/_payrollPortability.js')('');
  const LITERALS = require('./analytics/common/_literals');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
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
          PAYROLL_PORTABILITY_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          payroll_portability_exit_modal_button_pressed: {
            bind: 'alert-EXIT-MODAL-accept'
          },
          PAYROLL_PORTABILITY_retry_modal_option: {
            bind: 'alert-WRONG-OPERATIONAL-accept'
          }
        }
      }
    }
  };
  const {
    globalServices: {
      host,
      versions: {
        catalogs,
        customersV1,
        financialOverviewApiVersion,
        receiversV1
      },
      requiredToken = 'tsec' },
    native = false
  } = CONFIG;
  const CMB_CONFIG = {
    operativeName: PAGE_NAME,
    productName: 'Portabilidad de Nomina',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    lastStep: 4
  };
  const CMB_CONFIG_ANALYTICS = {
    operativeName: PAGE_NAME,
    steps: {
      2: 'footprint-select-account',
      3: 'app-step-3',
      4: 'app-step-4',
      5: 'app-step-5',
      sign: 'footprint-otp'
    },
    levels: {
      1: LITERALS.commons.account,
      2: LITERALS.commons.payrollPortability
    }
  };
  const { analyticsCallMeBack, controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(CMB_CONFIG);
  const analyticsCmb = analyticsCallMeBack(CMB_CONFIG_ANALYTICS);
  const base = {
    hash: 'payroll-portability',
    currentPage: {
      url: '/payroll-portability'
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        headerFixed: true,
        iOSFixedHeader: IS_NATIVE_IOS,
        topOnConfirm: true,
        extraHeaderClass: 'bbva-core-blue',
        animationType: 'verticalUp',
        className: 'payroll-portability-create bbva-core-blue header-fixed will-change-auto',
        cellsConnections: {
          in: {
            [getChannelName('init_channel')]: {
              bind: 'recalculateHeader'
            },
            [getChannelName('cells_scroll_zone')]: {
              bind: 'scrollItemIntoView'
            },
            [getChannelName('reset_scroll')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('show_confirm_channel')]: {
              bind: 'showConfirm'
            },
            global_call_me_back_show_confirm_channel: {
              bind: 'showConfirm'
            }
          },
          out: {
            [getChannelName('scroll_complete')]: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      },
      propertiesSpherica: {
        newCellsConnections: {
          remove: {
            out: [
              'PAYROLL_PORTABILITY_scroll_complete'
            ]
          }
        }
      }
    },
    components: [ spinner ]
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      titleName: 'payroll-portability-account-change-payroll-title',
      setTimeoutHideTooltip: 3000,
      cellsConnections: {
        in: {
          global_call_me_back_change_header_tooltip_status: {
            bind: 'hasDisplayedTooltip'
          },
          global_call_me_back_set_header_timeout_tooltip: {
            bind: 'setTimeoutShowTooltip'
          },
          global_call_me_back_set_header_configuration: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('backstep_request')]: {
            bind: 'click-right-button',
            'forward-to-native': true
          },
          global_call_me_back_init_header_configuration: {
            bind: 'click-right-secondary-button'
          }
        }
      }
    }
  };
  const navigationHandler = {
    zone: 'app__main',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'entrypoint',
      cellsConnections: {
        in: {
          payroll_portability_exit_modal_button_pressed: {
            bind: 'goBack'
          },
          [getChannelName('leave_operative')]: {
            bind: 'goBack'
          },
          [getChannelName('navigate_to_review')]: {
            bind: 'navigateToPage'
          },
          [getChannelName('navigate_to_wrong')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('exit_operative')]: {
            bind: 'entrypoint',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          [getChannelName('navigate_to_review_page')]: {
            bind: 'navigation-to-payrollPortabilityReview',
            link: {
              page: 'payrollPortabilityReview'
            }
          },
          [getChannelName('navigate_to_wrong_bith_date')]: {
            bind: 'navigation-to-payrollPortabilityWrongBirthDate',
            link: {
              page: 'payrollPortabilityWrongBirthDate',
              skipHistory: true
            }
          },
          global_call_me_back_reset_step: {
            bind: 'entrypoint'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        remove: {
          in: [
            'PAYROLL_PORTABILITY_navigate_to_wrong'
          ],
          out: [
            'PAYROLL_PORTABILITY_navigate_to_wrong_bith_date'
          ]
        }
      }
    }
  };
  const lifeCycle = {
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
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_channel')]: {
            bind: 'init-page'
          },
          global_call_me_back_initialize: {
            bind: 'init-page'
          },
          payrollPortability_open_modal: {
            bind: 'init-page-first-time'
          },
          [getChannelName('_reset_channel')]: {
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
  const offerPage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-step-offer-page',
    properties: {
      className: 'fix-padding-main fix-accordion-step-list',
      pageName: 'payrollPortability',
      active: true,
      id: 'glomo-step-offer-page',
      continueEventName: false,
      currentStep: 1,
      maxSteps: MAX_STEPS,
      stepTitle: 'payroll-portability-account-collapsed-title',
      changeLabel: 'payroll-portability-account-current-payroll-step-change-label-benefits',
      decorated: true,
      items: {
        header: [
          {
            headerImageSrc: './images/payrollPortability/products-and-services-portability-dollar.svg',
            productSummaryText: [
              'payroll-portability-account-offer-header-description'
            ],
            class: 'core-blue'
          }
        ],
        main: [
          {
            class: 'spacing-md-top',
            dataSelect: 'benefits-title',
            subheader: 'BENEFICIOS',
            hideCurrentStepLabe: false,
            mainSubheader: true,
            description: 'payroll-portability-account-benefits-subtitle',
            className: 'heading-black font-weight-500-title spacing-md-bottom'
          },
          {
            dataSelect: 'considerations-list',
            isList: true,
            list: [
              'payroll-portability-account-benefits-one',
              'payroll-portability-account-benefits-two',
              'payroll-portability-account-benefits-three'
            ],
            class: 'spacing-md-bottom',
            subClass: 'medium-blue'
          },
          {
            dataSelect: 'info-message',
            subClass: 'not-margin-top not-margin-bottom icon-margin-bottom',
            iconType: 'coronita:info',
            type: 'info-dark-blue',
            message: 'payroll-portability-account-benefits-step-icon-message-label'
          }
        ],
        footer: [
          {
            button: {
              text: 'Continuar',
              class: 'primary'
            },
            event: 'continue-pressed',
            class: 'spacing-lg',
            forceVisibility: true,
            disableInvalid: true
          },
          {
            id: 'callMeBack',
            event: 'request-call-me-back-from-sticky'
          }
        ],
        filled: [
          {
            cellsKey: 'payroll-portability-account-benefits-step-collapsed-step-label',
            class: 'spacing-sm-bottom'
          }
        ]
      },
      cellsConnections: {
        in: {
          [getChannelName('init_channel')]: {
            bind: 'initialize'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'resetProperties'
          },
          payroll_portability_successful: {
            bind: 'resetProperties'
          },
          payroll_portability_step_benefits_birthday_accept: {
            bind: 'active'
          },
          [getChannelName('porta_set_active_propertie')]: {
            bind: 'active'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'resetProperties'
          },
          global_call_me_back_show_call_me_back_in_sticky: {
            bind: 'updateItems'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('change_step_state')]: {
            bind: 'change-pressed'
          },
          [getChannelName('benefits_start_button_pressed')]: {
            bind: 'continue-pressed'
          },
          global_call_me_back_change_step_state: {
            bind: 'change-pressed'
          },
          global_call_me_back_init_sticky_configuration: {
            bind: 'request-call-me-back-from-sticky'
          },
          global_call_me_back_go_next_step: {
            bind: 'continue-pressed'
          }
        }
      }
    }
  };
  const stepFormText = {
    zone: 'app__main',
    tag: 'cells-step-form-text-select',
    type: 'UI',
    properties: {
      currentStep: 3,
      continueButtonApplicationStep: 3,
      maxSteps: MAX_STEPS,
      collapsedClass: 'collapsed-status-align collapsed-status-title',
      hideCurrentStepLabel: false,
      stepTitle: 'payroll-portability-account-new-payroll-step-title',
      changeLabel: 'payroll-portability-account-current-payroll-step-change-label',
      descriptionInput: 'payroll-portability-account-new-payroll-step-instructions-label',
      descriptionSelect: 'payroll-portability-account-select-entity',
      textInput: {
        type: 'tel',
        label: 'payroll-portability-account-new-payroll-step-input-label',
        maxLength: 18,
        required: true,
        allowedChars: '[0-9]'
      },
      select: {
        label: 'payroll-portability-account-new-payroll-step-bank-entity',
        required: true
      },
      infoMessage: {
        type: 'info',
        icon: 'coronita:info',
        message: 'payroll-portability-account-pdp-message'
      },
      selectLabelFilled: 'payroll-portability-account-new-payroll-step-bank-entity',
      isAccountValidation: true,
      cellsConnections: {
        in: {
          [getChannelName('init_channel')]: {
            bind: 'initialize'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('entity_selected')]: {
            bind: 'selectValue'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'reset'
          },
          [getChannelName('reset_steps')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('go_next_step')]: {
            bind: 'continue-button-was-clicked'
          },
          [getChannelName('set_new_payroll_data')]: {
            bind: 'continue-button-was-clicked'
          },
          [getChannelName('change_step_state')]: {
            bind: 'change-step-state'
          },
          payroll_portability_set_banks_data_error: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('select_banks_list')]: {
            bind: 'select-was-clicked'
          },
          [getChannelName('send_receivers_data')]: {
            bind: 'on-button-tap'
          },
          global_call_me_back_change_step_state: {
            bind: 'change-step-state'
          }
        }
      }
    }
  };
  const cellsProductSelectorModal = {
    zone: 'app__overlay',
    tag: 'cells-product-selector-modal',
    type: 'UI',
    properties: {
      className: IS_NATIVE_IOS ? 'ios-top-padding black-close-icon' : 'black-close-icon',
      modalTitle: 'payroll-portability-benefits-step-info',
      iOSFixedHeader: IS_NATIVE_IOS,
      showCloseModalButton: true,
      closeButtonLabel: 'payroll-portability-close-label',
      cellsConnections: {
        in: {
          [getChannelName('_open_viewall_products_modal')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('_product_selected_to_payroll_view_all')]: {
            bind: 'select-product'
          }
        }
      }
    }
  };
  const productSelector = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    properties: {
      savedLabel: false,
      imgBackgroundClass: 'img-background-core-blue',
      className: 'payroll-portability-create',
      stepId: 'payroll-portability-current-payroll',
      selectedLabel: 'glomo-deposit-hiring-accounts-step-label-available-amount',
      localCurrency,
      currentStep: 2,
      maxSteps: MAX_STEPS,
      instructionsLabel: 'payroll-portability-account-description-info',
      productsListLabel: 'payroll-portability-account-benefits-step-info',
      description: 'payroll-portability-account-description-info',
      disabledUpdateTitleOnChangeProduct: false,
      stepTitle: 'payroll-portability-account-current-payroll-step-title',
      accountTitle: 'payroll-portability-account-current-payroll-step-title',
      changeLabel: 'payroll-portability-account-current-payroll-step-change-label-benefits',
      forceEnableEdit: true,
      showDescriptionOneProduct: true,
      visibleChars,
      cellsConnections: {
        in: {
          [getChannelName('init_channel')]: {
            bind: 'initialize'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'resetStep'
          },
          payroll_portability_successful: {
            bind: 'resetStep'
          },
          [getChannelName('set_product_list')]: {
            bind: 'products'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'resetStep'
          },
          [getChannelName('_show_step_accounts')]: {
            bind: 'products'
          },
          [getChannelName('_product_selected_to_payroll_view_all')]: {
            bind: 'selected'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('product_selected_to_payroll')]: {
            bind: 'select-product'
          },
          [getChannelName('change_step_state')]: {
            bind: 'change-pressed'
          },
          [getChannelName('new_payroll_on_product_selected')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('_dont_change_and_continue')]: {
            bind: 'dont-change-and-continue'
          },
          global_call_me_back_change_step_state: {
            bind: 'change-pressed'
          },
          global_call_me_back_go_next_step: {
            bind: 'dont-change-and-continue'
          },
          [getChannelName('_open_viewall_products_modal')]: {
            bind: 'view-all'
          }
        }
      }
    }
  };
  const checklistContract = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    properties: {
      className: 'custom-checkbox-buttons focus-checkbox-shadow-color step-header-title-top-spacing',
      stepTitle: 'payroll-portability-account-terms-conditions-title',
      currentStep: 4,
      maxSteps: MAX_STEPS,
      hideChangeDataBox: true,
      showButton: true,
      showCurrentStepLabel: true,
      acceptedTermsText: 'payroll-portability-account-terms-conditions-step-collapsed',
      pdfData: [
        {
          'id': 'tyc_accounts',
          'name': 'tyc_device',
          'type': 'pdf',
          'icon': 'coronita:pdf',
          'text': 'payroll-portability-account-terms-conditions-pdf-data'
        }
      ],
      checkboxList: [
        {
          'valid': false,
          'active': true,
          'buttonText': 'payroll-portability-account-terms-conditions-checkbox'
        }
      ],
      cellsConnections: {
        in: {
          [getChannelName('init_channel')]: {
            bind: 'initialize'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'reset'
          },
          [getChannelName('reset_steps')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('go_next_step')]: {
            bind: 'go-next-step'
          },
          [getChannelName('change_step_state')]: {
            bind: 'change-pressed'
          },
          [getChannelName('porta_generate_pdf')]: {
            bind: 'request-pdf'
          },
          [getChannelName('terms_and_conditions_step_focus_in')]: {
            bind: 'cells-step-focus-in'
          },
          global_call_me_back_go_next_step: {
            bind: 'go-next-step'
          },
          global_call_me_back_change_step_state: {
            bind: 'change-pressed'
          }
        }
      }
    }
  };
  const summaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    properties: {
      className: 'aqua-dark-button',
      showAddition: true,
      buttonLabel: 'payroll-portability-account-new-payroll-step-continue',
      cellsConnections: {
        in: {
          global_call_me_back_show_primary_button: {
            bind: 'hidePrimaryButton'
          },
          global_call_me_back_show_secondary_button: {
            bind: 'showSecondaryButton'
          },
          global_call_me_back_show_summary_view_button: {
            bind: 'secondaryButtonLabel'
          }
        },
        out: {
          [getChannelName('load_payload_to_payroll')]: {
            bind: 'summary-closed'
          },
          global_call_me_back_init_sticky_configuration: {
            bind: 'secondary-button-pressed'
          }
        }
      }
    }
  };
  const modalSelector = {
    zone: 'app__overlay',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      cellsConnections: {
        in: {
          payroll_portability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'reset'
          },
          [getChannelName('select_banks_list')]: {
            bind: 'open'
          },
          payroll_portability_set_banks: {
            bind: 'items'
          },
          [getChannelName('reset_steps')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('entity_selected')]: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };
  const globalApisCustomerServices = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customer-services',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('payroll_portability_request')]: {
            bind: 'postCustomerServices'
          }
        },
        out: {
          [getChannelName('post_customer_services_success')]: {
            bind: 'post-customer-services-succes'
          },
          [getChannelName('post_customer_services_error')]: {
            bind: 'post-customer-services-error'
          },
          [getChannelName('send_otp_analytics')]: {
            bind: 'signature-required-first-step-dm'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };
  const portabilityOpxDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-payroll-portability-dm',
    properties: {
      autoActivateStep: true,
      decorateSteps: true,
      productSelectorIndex: 3,
      host: CONFIG.globalServices.host,
      requiredToken,
      native: CONFIG.native,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      cellsConnections: {
        in: {
          [getChannelName('init_channel')]: {
            bind: 'init'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'reset'
          },
          [getChannelName('register_step')]: {
            bind: 'registerStep',
            previousState: true
          },
          [getChannelName('backstep_request')]: {
            bind: 'manageBackButton'
          },
          [getChannelName('change_step_state')]: {
            bind: 'goToStep'
          },
          [getChannelName('go_next_step')]: {
            bind: 'goNextStep'
          },
          payroll_portability_step_benefits_birthday_accept: {
            bind: 'goNextStep'
          },
          [getChannelName('product_selected_to_payroll')]: {
            bind: 'manageProductSelectorEvent'
          },
          [getChannelName('_new_payroll_on_product_selected')]: {
            bind: 'accountSelected'
          },
          [getChannelName('_dont_change_and_continue')]: {
            bind: 'manageProductSelectorEvent'
          },
          payroll_portability_set_banks_data_error: {
            bind: 'getBanks'
          }
        },
        out: {
          [getChannelName('cells_scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'can-execute-changed'
          },
          global_alert_manager_open_with_settings: {
            bind: 'payroll-portability-exit-modal'
          },
          [getChannelName('leave_operative')]: {
            bind: 'leave-operative'
          },
          [getChannelName('operation_sumary_analytics')]: {
            bind: 'operation-summary'
          },
          [getChannelName('go_next_step')]: {
            bind: 'manage-product-selector-event'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: true,
      newCellsConnections: {
        add: {
          out: {
            'PAYROLL_PORTABILITY_set-customers': {
              bind: 'set-customers'
            },
            PAYROLL_PORTABILITY_open_with_settings_spherica: {
              bind: 'payroll-portability-exit-modal'
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
  const portabilityDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-payroll-portability-manager',
    familyPath: 'glomo-payroll-portability-manager',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      detailDocumentPdfTemplate: detailDownloadParams,
      catalogId: '06920074E',
      cellsConnections: {
        in: {
          navigation_product_detail_to_receive_payroll: {
            bind: 'initOperative'
          },
          navigation_product_detail_to_change_payroll: {
            bind: 'initOperative'
          },
          send_deep_link_payload_to_payroll_portability: {
            bind: 'initOperative'
          },
          send_deeplink_information_from_proceedings_to_portability: {
            bind: 'initOperative'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          [getChannelName('send_app_completed_data')]: {
            bind: 'reset'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'wrongBirthDateModal'
          },
          global_login_success_indicators: {
            bind: 'parseCustomerBirthDate'
          },
          [getChannelName('benefits_start_button_pressed')]: {
            bind: 'setBirthDateModalConfig'
          },
          [getChannelName('send_receivers_data')]: {
            bind: 'senderData'
          },
          global_storage_get_payroll_portability_data_error: {
            bind: 'getReceiversEntities'
          },
          global_storage_get_payroll_portability_data_success: {
            bind: 'getReceiversEntities'
          },
          [getChannelName('form_step_focus_in')]: {
            bind: 'getToLocalStorageData'
          },
          [getChannelName('entity_selected')]: {
            bind: 'senderBank'
          },
          [getChannelName('set_new_payroll_data')]: {
            bind: 'setNewPayrollData'
          },
          [getChannelName('porta_generate_pdf')]: {
            bind: 'generatePdfTemplate'
          },
          [getChannelName('success_post_bd')]: {
            bind: 'successBasePDF'
          },
          [getChannelName('load_payload_to_payroll')]: {
            bind: 'setPayrollPortabilityRequest'
          },
          [getChannelName('post_customer_services_success')]: {
            bind: 'loadPayrollPortabilityData'
          },
          [getChannelName('post_customer_services_error')]: {
            bind: 'errorHandler'
          },
          [getChannelName('product_selected_to_payroll')]: {
            bind: 'accountSelected'
          },
          [getChannelName('new_payroll_on_product_selected')]: {
            bind: 'manageProductSelectorEvent'
          },
          payroll_portability_set_banks_filter: {
            bind: 'setBanksFilter'
          },
          [getChannelName('new_payroll_on_product_selected')]: {
            bind: 'accountSelected'
          },
          dashboard_accounts: {
            bind: 'getGlobalAccountsN4'
          },
          [getChannelName('leave_operative')]: {
            bind: 'reset'
          },
          navigate_from_pivot_to_payroll_portability_page: {
            bind: 'payrollId'
          },
          send_from_proceedings_to_portability: {
            bind: 'payrollId'
          },
          PAYROLL_PORTABILITY_set_catalog_id: {
            bind: 'setCatalogId'
          },
          PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_RESPONSE: {
            bind: 'financialOverviewResponse'
          }
        },
        out: {
          [getChannelName('porta_set_active_propertie')]: {
            bind: 'set-active-on-propertie-offer-page'
          },
          PAYROLL_PORTABILITY_show_birth_date_modal: {
            bind: 'show-birth-date-modal'
          },
          global_get_from_storage: {
            bind: 'get-data-to-local-storage'
          },
          global_set_in_storage: {
            bind: 'save-data-to-local-storage'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [getChannelName('set_local_storage_data')]: {
            bind: 'set-local-storage-data'
          },
          [getChannelName('collapsed_product_selector')]: {
            bind: 'collapse-product-selector'
          },
          [getChannelName('set_product_list')]: {
            bind: 'set-products-list'
          },
          [getChannelName('dowload_pdf')]: {
            bind: 'native-download-receipt'
          },
          global_open_document_base64: {
            bind: 'show-document-event'
          },
          [getChannelName('payroll_portability_request')]: {
            bind: 'payroll-portability-request'
          },
          [getChannelName('navigate_to_review')]: {
            bind: 'payroll-portability-success-account'
          },
          [getChannelName('navigate_to_wrong')]: {
            bind: 'show-wrong-birth-date-modal'
          },
          [getChannelName('set_offer_typology')]: {
            bind: 'set-offer-typology'
          },
          [getChannelName('send_app_completed_data')]: {
            bind: 'send-app-completed-data'
          },
          global_call_me_back_reset_step: {
            bind: 'set-active-on-propertie-offer-page'
          },
          payroll_portability_set_catalog_id: {
            bind: 'glomo-payroll-portability-set-catalog-id'
          },
          payroll_portability_set_banks: {
            bind: 'glomo-payroll-portability-set-banks'
          },
          [getChannelName('_show_step_accounts')]: {
            bind: 'send-products-list-event'
          },
          [getChannelName('reset_steps')]: {
            bind: 'reset-steps'
          },
          PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_RESPONSE_HANDLER: {
            bind: 'financial-overview-success'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    },
    propertiesSpherica: {
      isSpherica: true,
      newCellsConnections: {
        remove: {
          in: [
            'PAYROLL_PORTABILITY_form_step_focus_in'
          ],
          out: [
            'PAYROLL_PORTABILITY_navigate_to_wrong',
            'global_alert_manager_open_with_settings',
            'PAYROLL_PORTABILITY_navigate_to_review'
          ]
        }
      }
    }
  };
  const businessDocument = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('dowload_pdf')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {

          [getChannelName('success_post_bd')]: {
            bind: 'post-business-documents-success'
          }
        }
      }
    }
  };
  const analyticsPayrollPortability = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-oc-payroll-portability-manager',
    familyPath: 'glomo-payroll-portability-manager',
    properties: {
      page: PAGE_NAME,
      config: {
        steps: {
          2: 'footprint-select-account',
          3: 'app-step-3',
          4: 'app-step-4',
          5: 'app-step-5',
          sign: 'footprint-otp'
        }
      },
      cellsConnections: {
        in: {
          payroll_portability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          [getChannelName('set_offer_typology')]: {
            bind: 'setOfferData'
          },
          [getChannelName('benefits_start_button_pressed')]: {
            bind: 'fireAppStarted'
          },
          payroll_portability_show_birth_date_modal: {
            bind: 'fireModalWithData'
          },
          [getChannelName('form_step_focus_in')]: {
            bind: 'onStep'
          },
          [getChannelName('terms_and_conditions_step_focus_in')]: {
            bind: 'onStep'
          },
          [getChannelName('operation_sumary_analytics')]: {
            bind: 'onStep'
          },
          [getChannelName('send_otp_analytics')]: {
            bind: 'manageAnalyticsSign'
          },
          [getChannelName('send_app_completed_data')]: {
            bind: 'setCompletedData'
          }
        },
        out: {
          [getChannelName('app_page_visit_analytic')]: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('app_started_analytic')]: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('app_step_two')]: {
            bind: 'analytics-modal',
            analytics: ANALYTICS.APP_STEP(2, '2 fecha de nacimiento')
          },
          [getChannelName('app_step_three')]: {
            bind: 'analytics-app-step-3',
            analytics: ANALYTICS.APP_STEP(3, '3 conectemos tu nomina')
          },
          [getChannelName('app_step_four')]: {
            bind: 'analytics-app-step-4',
            analytics: ANALYTICS.APP_STEP(4, '4 terminos y condiciones')
          },
          [getChannelName('app_step_five')]: {
            bind: 'analytics-app-step-5',
            analytics: ANALYTICS.APP_STEP(5, '5 confirmacion')
          },
          [PAGE_NAME + '_page_view_otp']: {
            bind: 'analytics-footprint-otp',
            analytics: ANALYTICS.GET_ADVANCED_FOOTPRINT('otp')
          },
          [getChannelName('app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS.APP_COMPLETED
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            PAYROLL_PORTABILITY_show_birth_date_modal: {
              bind: 'fireModalWithData'
            }
          }
        }
      }
    }
  };

  const feature = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-payroll-portability',
    familyPath: '@glomo-web-components/bbva-feature-payroll-portability',
    render: 'litElement',
    properties: {
      localCurrency,
      showCallIconHeader: true,
      isNativeIos: IS_NATIVE_IOS,
      requiredToken,
      requiredOtp: true,
      host,
      native,
      data: {
        modal: {
          title: 'payroll-portability-welcome-header-title',
          button: 'payroll-portability-continue',
          link: 'payroll-portability-link',
          callBBVA: 'payroll-portability-welcome-header-bbva-line'
        },
        microillustration: {
          title: 'payroll-portability-account-offer-header-description'
        },
        commonModalParams: {
          closeButtonAriaLabel: 'common-header-button-close',
          closeLabel: 'common-header-button-close'
        },
        benefits: [
          {
            description: 'payroll-portability-account-benefits-section-description',
            sectionTitle: 'payroll-portability-account-benefits-section-title',
            sectionConfig: [
              {
                description: 'payroll-portability-account-benefits-description-list-1',
                microillustration: 'aquaCard',
                title: 'payroll-portability-account-benefits-title-list-1'
              },
              {
                description: 'payroll-portability-account-benefits-description-list-2',
                microillustration: 'lifeInsurance',
                title: 'payroll-portability-account-benefits-title-list-2'
              },
              {
                description: 'payroll-portability-account-benefits-description-list-3',
                microillustration: 'addFriends',
                title: 'payroll-portability-account-benefits-title-list-3'
              }
            ]
          }
        ],
        notification: 'payroll-portability-benefits-step-icon-message-label',
        birthday: {
          title: 'payroll-portability-birthday-title',
          description: 'payroll-portability-benefits-birthday-confirmation-title',
          question: 'payroll-portability-benefits-birthday-confirmation-text',
          button: 'payroll-portability-benefits-correct-birthday-button-text',
          link: 'payroll-portability-benefits-incorrect-birthday-button-text'
        },
        birthdayIncorrect: {
          modalTitle: 'payroll-portability-birthday-title',
          title: 'payroll-portability-wrong-birthday-title',
          description: 'payroll-portability-wrong-birthday-text'
        },
        multistep: {
          modifyLabel: 'payroll-portability-modify-btn-label',
          modifyLabelBenefits: 'payroll-portability-modify-btn-label-benefits',
          modifyLabelNewPayroll: 'payroll-portability-account-current-payroll-step-change-label-benefits',
          reviewLabel: 'payroll-portability-consult-btn-label',
          modalTitle: 'payroll-portability-header-title',
          callBBVA: 'payroll-portability-bbva-line',
          benefits: {
            collapsed: {
              title: 'payroll-portability-account-collapsed-title-spherica',
              text: 'payroll-portability-benefits-step-collapsed-step-label-triple-play',
              viewLabel: 'payroll-portability-consult-btn-label'
            }
          },
          currentPayroll: {
            title: 'payroll-portability-account-new-payroll-step-title',
            cardInputLabel: 'payroll-portability-account-new-payroll-step-input-label',
            cardInputOutLabel: 'payroll-portability-feature-multistep-modal-tooltip-current-account-output',
            description: 'payroll-portability-account-new-payroll-step-instructions-label',
            bankInputLabel: 'payroll-portability-new-payroll-step-bank-entity',
            bankInputOutLabel: '',
            cardInputInfoMessage: 'payroll-portability-new-payroll-step-input-inline-message',
            notification: 'payroll-portability-account-pdp-message',
            button: 'payroll-portability-continue',
            buttonSecondary: 'payroll-portability-link',
            collapsed: {
              cardLabel: 'payroll-portability-account-clabe-label'
            }
          },
          newPayroll: {
            title: 'payroll-portability-current-payroll-step-title',
            description: 'payroll-portability-account-description-info',
            changeAccountButton: 'payroll-portability-change-account',
            dontChangeAndContinue: 'payroll-portability-keep-and-continue',
            accountsTitle: 'payroll-portability-accounts',
            accountsLink: 'payroll-portability-see-all'
          },
          termsAndConditions: {
            title: 'payroll-portability-account-terms-conditions-title',
            button: 'payroll-portability-continue',
            buttonSecondary: 'payroll-portability-link',
            checkboxLabel: 'payroll-portability-account-terms-conditions-checkbox',
            file: 'payroll-portability-account-terms-conditions-pdf-data',
            collapsed: {
              text: 'payroll-portability-account-terms-conditions-step-collapsed'
            }
          },
          confirmation: {
            button: 'payroll-portability-summary-confirm',
            buttonSecondary: 'payroll-portability-link'
          }
        },
        accounts: {
          modalTitle: 'payroll-portability-accounts'
        },
        receipt: {
          modalTitle: 'payroll-portability-header-title',
          title: 'payroll-portability-success-message-notification',
          notification: 'payroll-portability-success-info-message',
          dateLabel: 'payroll-portability-success-date',
          currentPayrollLabel: 'payroll-portability-account-new-payroll-step-title',
          newPayrollLabel: 'payroll-portability-current-payroll-step-title',
          folioLabel: 'payroll-portability-success-folio-label'
        }
      },
      dummyEntityImage: 'images/spherica/bbvaesmmxxx.svg',
      collapsedDummyEntityImage: 'images/spherica/BBVAESMMXXX_Dark.svg',
      leaveEvent: 'payroll-portability-leave-operative',
      cellsConnections: {
        in: {
          global_call_me_back_show_call_me_back_in_sticky: {
            bind: 'showCallButtonFooter'
          },
          'PAYROLL_PORTABILITY_set-customers': {
            bind: 'setBirthdayDate'
          },
          payrollPortability_open_modal: {
            bind: 'openModal'
          },
          global_login_success_indicators: {
            bind: 'setBirthdayDate'
          },
          payroll_portability_set_banks: {
            bind: 'banks'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          PAYROLL_PORTABILITY_leave_operative: {
            bind: 'reset'
          },
          PAYROLL_PORTABILITY_set_product_list: {
            bind: 'products'
          },
          PAYROLL_PORTABILITY__show_step_accounts: {
            bind: 'products'
          },
          navigation_product_detail_to_receive_payroll: {
            bind: 'setProductInfo'
          },
          navigation_product_detail_to_change_payroll: {
            bind: 'setProductInfo'
          },
          send_deep_link_payload_to_payroll_portability: {
            bind: 'setProductInfo'
          },
          send_deeplink_information_from_proceedings_to_portability: {
            bind: 'setProductInfo'
          },
          PAYROLL_PORTABILITY_post_customer_services_success: {
            bind: 'openReceiptModal'
          },
          payroll_portability_magic_log_on: {
            bind: 'magicLogAccess'
          },
          sign_modal_open: {
            bind: 'hideMultistep'
          },
          sign_modal_cancelled: {
            bind: 'showMultistep'
          },
          global_sign_token_standby_timer_succes: {
            bind: 'showMultistep'
          },
          global_sign_token_standby_otp_cancel: {
            bind: 'showMultistep'
          },
          PAYROLL_PORTABILITY_post_customer_services_error: {
            bind: 'hideSpinner'
          },
          global_retry_error: {
            bind: 'hideSpinner'
          },
          PAYROLL_PORTABILITY_retry_modal_option: {
            bind: 'showMultistep'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'setHeightAndOverflowWhenBackActionButton'
          },
          PAYROLL_PORTABILITY_load_payload_to_oc_payroll: {
            bind: 'setPayrollPortabilityN2Request'
          },
          PAYROLL_PORTABILITY_entity_selected: {
            bind: 'senderBank'
          },
          send_from_proceedings_to_portability: {
            bind: 'payrollId'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          payroll_portability_response_query_magic_receiver: {
            bind: 'receiverResponse'
          },
          PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_RESPONSE_HANDLER: {
            bind: 'successFinancialOverview'
          },
          PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_ERROR: {
            bind: 'errorFinancialOverview'
          }
        },
        out: {
          PAYROLL_PORTABILITY_backstep_request: {
            bind: 'click-right-button',
            'forward-to-native': true
          },
          global_call_me_back_init_header_configuration: {
            bind: 'click-right-secondary-button'
          },
          PAYROLL_PORTABILITY_benefits_start_button_pressed: {
            bind: 'continue-pressed'
          },
          global_call_me_back_init_sticky_configuration: {
            bind: 'request-call-me-back-from-sticky'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'bbva-feature-payroll-portability-birthday-modal-secondary'
          },
          PAYROLL_PORTABILITY_birthday_incorrect_leave: {
            bind: 'bbva-feature-payroll-portability-birthday-incorrect-modal-close',
            link: {
              page: 'dashboard',
              skipHistory: true,
              cleanUntil: 'dashboard'
            }
          },
          PAYROLL_PORTABILITY_entity_selected: {
            bind: 'selected-bank-changed'
          },
          PAYROLL_PORTABILITY_form_step_focus_in: {
            bind: 'current-step-index-3'
          },
          payroll_portability_set_banks_data_error: {
            bind: 'current-step-index-2'
          },
          PAYROLL_PORTABILITY_send_receivers_data: {
            bind: 'current-payroll-button-clicked'
          },
          PAYROLL_PORTABILITY_step_select_only_account: {
            bind: 'current-step-index-2',
            analytics: ANALYTICS.GET_ADVANCED_FOOTPRINT('seleccion de cuenta')
          },
          PAYROLL_PORTABILITY_new_payroll_on_product_selected: {
            bind: 'new-payroll-button-clicked'
          },
          PAYROLL_PORTABILITY_porta_generate_pdf: {
            bind: 'terms-and-conditions-file-clicked'
          },
          PAYROLL_PORTABILITY_terms_and_conditions_step_focus_in: {
            bind: 'current-step-index-4'
          },
          PAYROLL_PORTABILITY_operation_sumary_analytics: {
            bind: 'current-step-index-5'
          },
          PAYROLL_PORTABILITY_load_payload_to_payroll: {
            bind: 'confirmation-button-clicked'
          },
          PAYROLL_PORTABILITY_load_payload_to_oc_payroll: {
            bind: 'one-click-confirmation-button-clicked'
          },
          global_logout_sesion_expiration: {
            bind: 'logout-payroll-portability'
          },
          PAYROLL_PORTABILITY_navigate_to_account: {
            bind: 'navigate-to-account',
            link: {
              page: 'account',
              cleanUntil: 'account',
              skipHistory: true
            }
          },
          PAYROLL_PORTABILITY_birthday_modal_open_spherica: {
            bind: 'bbva-feature-payroll-portability-birthday-modal-open'
          },
          PAYROLL_PORTABILITY_send_app_completed_data: {
            bind: 'birthday-incorrect-modal-analytics'
          },
          global_get_from_storage: {
            bind: 'get-data-to-local-storage'
          },
          global_set_in_storage: {
            bind: 'save-data-to-local-storage'
          },
          PAYROLL_PORTABILITY_receipt_button_closed: {
            bind: 'receipt-close-button-clicked'
          },
          PAYROLL_PORTABILITY_leave_operative: {
            bind: 'payroll-portability-leave-operative'
          },
          PAYROLL_PORTABILITY_step_birthday_incorrect_leave: {
            bind: 'birthday-incorrect-modal-close',
            link: {
              page: 'dashboard',
              skipHistory: true,
              cleanUntil: 'dashboard'
            }
          },
          PAYROLL_PORTABILITY_set_catalog_id: {
            bind: 'glomo-payroll-portability-set-catalog-id'
          },
          financial_overview_refresh: {
            bind: 'get-financial-products'
          },
          PAYROLL_PORTABILITY_close_from_deeplink: {
            bind: 'close-from-deeplink',
            link: {
              page: 'dashboard'
            }
          },
          PAYROLL_PORTABILITY_post_customer_services_success: {
            bind: 'bbva-feature-payroll-portability-create-success'
          },
          PAYROLL_PORTABILITY_post_customer_services_error: {
            bind: 'bbva-feature-payroll-portability-create-error'
          },
          global_retry_error: {
            bind: 'bbva-feature-payroll-portability-retry-error'
          },
          payroll_portability_query_magic_receiver: {
            bind: 'validate-card-number'
          },
          PAYROLL_PORTABILITY_GET_FINANCIAL_OVERVIEW_REQUEST: {
            bind: 'retry-load-accounts'
          }
        }
      }
    }
  };

  const apiCatalogs = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-catalogs',
    familyPath: '@glomo-web-components/bbva-dataprovider-catalogs',
    render: 'litElement',
    properties: {
      host,
      catalogId: '06920074E',
      version: catalogs,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          payroll_portability_set_catalog_id: {
            bind: 'getCatalogsCatalogRecords'
          }
        },
        out: {
          payroll_portability_set_banks_filter: {
            bind: 'get-catalogs-catalog-record-get-v0-success'
          },
          payroll_portability_set_banks_data_error: {
            bind: 'get-catalogs-catalog-record-get-v0-error'
          },
          payroll_portability_set_banks_data_error: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const receiversAPI = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-receivers',
    properties: {
      host,
      native,
      receiversApiVersion: receiversV1,
      requiredToken,
      cellsConnections: {
        in: {
          payroll_portability_query_magic_receiver: {
            bind: 'getReceiver'
          }
        },
        out: {
          payroll_portability_response_query_magic_receiver: {
            bind: 'set-receiver'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisFinancialOverview = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-financial-overview',
    properties: {
      host,
      customersApiVersion: customersV1,
      financialOverviewApiVersion,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          PAYROLL_PORTABILITY_GET_FINANCIAL_OVERVIEW_REQUEST: {
            bind: 'getFinancialOverview'
          }
        },
        out: {
          PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_RESPONSE: {
            bind: 'financial-overview-retrieved'
          },
          PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_ERROR: {
            bind: 'error-on-get-financial-overview'
          }
        }
      }
    }
  };

  base.components.push(
    navigationHandler,
    lifeCycle,
    globalApisCustomerServices,
    portabilityOpxDm,
    analyticsPayrollPortability,
    portabilityDm,
    businessDocument,
    controllerCmb,
    analyticsCmb,
    apiCatalogs,
    receiversAPI,
    cellsDmGlobalApisFinancialOverview,
    cellsProductSelectorModal
  );
  const coronitaUIComponents = [
    header,
    offerPage,
    stepFormText,
    productSelector,
    checklistContract,
    summaryView,
    modalSelector
  ];
  if (isSpherica) {
    base.components.splice(2, 0, feature);
  } else {
    Array.prototype.splice.apply(base.components, [2, 0].concat(coronitaUIComponents));
  }
  if (CONFIG.native) {
    base.components.push(openDocument);
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-customer-services', PAGE_NAME, [
    'post-customer-services-succes', 'post-customer-services-error']);

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-payroll-portability');

  addRetryErrors(base)([
    {
      id: 'WRONG-PORTABILITY',
      acceptRetry: { bind: 'setPayrollPortabilityRequest', component: 'glomo-payroll-portability-manager' },
      cancelRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' }
    }, {
      id: 'WRONG-UPDATE-ACCOUNT',
      acceptRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' },
      cancelRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' }
    }, {
      id: 'WRONG-OPERATIONAL',
      acceptRetry: { bind: 'loadPayloadToRequestPayroll', component: 'glomo-payroll-portability-manager' },
      cancelRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' },
      acceptCallForHelp: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' }
    }, {
      id: 'WRONG-OPERATIONAL-N2',
      acceptRetry: { bind: 'setPayrollPortabilityN2Request', component: 'bbva-feature-payroll-portability' },
      cancelRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' },
      acceptCallForHelp: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' }
    }
  ]);
  addCommonErrors(base.components)();
  localStorage.addOutStorageChannels(base.components, ['payroll_portability_data', 'call_me_back'], CONFIG);

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
