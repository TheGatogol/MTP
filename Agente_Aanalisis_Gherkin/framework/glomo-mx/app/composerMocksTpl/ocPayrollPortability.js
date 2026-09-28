/* eslint-disable max-statements, new-cap, no-shadow */
'use strict';
module.exports = (config) => {
  const utils = require('./common/helpers/_utils');
  const spinner = utils.SPINNER(config);
  const pageName = 'ocPayrollPortability';
  const localCurrency = utils.getLocalCurrency(config);
  const visibleChars = utils.getVisibleChars(config)('account');
  const localStorage = require('./common/_local-storage');
  const maxSteps = 4;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const isNativeIos = config.nativeIos || false;
  const detailDownloadParams = utils.detailDownloadParams;
  const analytics = require('./analytics/_ocPayrollPortability')('');
  const analyticsLiterals = require('./analytics/common/_literals');
  const glomoOpenDocument = utils.glomoOpenDocument(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
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
      requiredToken },
    native
  } = config;
  const cmbConfig = {
    operativeName: pageName,
    productName: 'Portabilidad de Nomina',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    lastStep: 4
  };
  const { controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(cmbConfig);
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          ocPayrollPortabilityopen_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          payrollPortability_exit_modal_button_pressed: {
            bind: 'alert-EXIT-MODAL-accept'
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/oc-payroll-portability'
    },
    template: {
      tag: 'glomo-opx-template',
      properties: {
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        topOnConfirm: true,
        extraHeaderClass: 'bbva-core-blue',
        animationType: 'verticalUp',
        className: 'payroll-portability-create bbva-core-blue header-fixed will-change-auto',
        cellsConnections: {
          in: {
            [pageName + '_init_channel']: {
              bind: 'recalculateHeader'
            },
            [pageName + '_cells_scroll_zone']: {
              bind: 'scrollItemIntoView'
            },
            [pageName + '_reset_scroll']: {
              bind: 'resetLayerScroll'
            },
            [pageName + '_show_confirm_channel']: {
              bind: 'showConfirm'
            },
            global_call_me_back_show_confirm_channel: {
              bind: 'showConfirm'
            }
          },
          out: {
            [pageName + '_scroll_complete']: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      },
      propertiesSpherica: {
        newCellsConnections: {
          remove: {
            out: [
              'ocPayrollPortability_scroll_complete'
            ]
          }
        }
      }
    },
    components: [ spinner ]
  };
  const cellsMoleculeHeader = {
    zone: 'app__header',
    tag: 'cells-molecule-header',
    type: 'UI',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      titleName: 'payroll-portability-header-title',
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
          [pageName + '_backstep_request']: {
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
  const glomoNavigationHandler = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'entrypoint',
      cellsConnections: {
        in: {
          payrollPortability_exit_modal_button_pressed: {
            bind: 'goBack'
          },
          [pageName + '_leave_operative']: {
            bind: 'goBack'
          }
        },
        out: {
          [pageName + '_exit_operative']: {
            bind: 'entrypoint',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          global_call_me_back_reset_step: {
            bind: 'entrypoint'
          },
          global_retargeting_send_information_update: {
            bind: 'entrypoint'
          }
        }
      }
    }
  };
  const cellsHandleLifeCycle = {
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
          [pageName + '_init_channel']: {
            bind: 'init-page'
          },
          global_call_me_back_initialize: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
            bind: 'init-page'
          },
          ocPayrollPortability_open_modal: {
            bind: 'init-page-first-time'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const glomoStepOfferPage = {
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
      maxSteps,
      notInitializeWithAttached: false,
      stepTitle: 'payroll-portability-collapsed-title',
      changeLabel: 'payroll-portability-consult-btn-label',
      decorated: true,
      items: {
        header: [
          {
            headerImageSrc: './images/payrollPortability/products-and-services-portability-dollar.svg',
            productSummaryText: [
              'payroll-portability-offer-header-description'
            ],
            class: 'core-blue'
          }
        ],
        main: [
          {
            class: 'spacing-md-top',
            dataSelect: 'benefits-title',
            subheader: 'payroll-portability-collapsed-title',
            className: 'heading-black font-weight-500-title spacing-md-bottom'
          },
          {
            dataSelect: 'benefits-list',
            isList: true,
            list: [
              'oc-payroll-portability-benefits-one',
              'oc-payroll-portability-benefits-two',
              'oc-payroll-portability-benefits-three'
            ],
            class: 'spacing-md-bottom',
            subClass: 'medium-blue'
          },
          {
            class: 'spacing-md-top',
            dataSelect: 'considerations-title',
            subheader: 'payroll-portability-feature-one-title',
            className: 'heading-black font-weight-500-title spacing-md-bottom'
          },
          {
            dataSelect: 'considerations-list',
            isList: true,
            list: [
              'oc-payroll-portability-feature-one',
              'oc-payroll-portability-feature-two',
              'oc-payroll-portability-feature-three'
            ],
            class: 'spacing-md-bottom',
            subClass: 'medium-blue'
          }
        ],
        footer: [
          {
            button: {
              text: 'payroll-portability-account-benefits-step-collapse-button-label',
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
            cellsKey: 'payroll-portability-benefits-step-collapsed-step-label',
            class: 'spacing-sm-bottom'
          }
        ]
      },
      cellsConnections: {
        in: {
          [pageName + '_init_channel']: {
            bind: 'initialize'
          },
          [pageName + '_scroll_complete']: {
            bind: 'scrollComplete'
          },
          payrollPortability_exit_modal_button_pressed: {
            bind: 'resetProperties'
          },
          payroll_portability_successful: {
            bind: 'resetProperties'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'resetProperties'
          },
          [pageName + '_benefits_start_button_pressed']: {
            bind: 'active'
          },
          [pageName + '_porta_set_active_property']: {
            bind: 'active'
          },
          global_call_me_back_show_call_me_back_in_sticky: {
            bind: 'updateItems'
          }
        },
        out: {
          [pageName + '_register_step']: {
            bind: 'register-step'
          },
          [pageName + '_change_step_state']: {
            bind: 'change-pressed'
          },
          [pageName + '_benefits_start_button_pressed']: {
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
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          }
        }
      }
    }

  };
  const cellsStepFormTextSelect = {
    zone: 'app__main',
    tag: 'cells-step-form-text-select',
    type: 'UI',
    properties: {
      currentStep: 3,
      continueButtonApplicationStep: 3,
      maxSteps,
      collapsedClass: 'collapsed-status-align collapsed-status-title',
      hideCurrentStepLabel: true,
      stepTitle: 'payroll-portability-new-payroll-step-title',
      changeLabel: 'payroll-portability-current-payroll-step-change-label',
      descriptionInput: 'payroll-portability-new-payroll-step-instructions-label',
      descriptionSelect: 'payroll-portability-select-entity',
      textInput: {
        type: 'tel',
        label: 'payroll-portability-new-payroll-step-input-label',
        maxLength: 18,
        required: true,
        allowedChars: '[0-9]',
        infoMessageLabel: 'payroll-portability-new-payroll-step-input-inline-message'
      },
      select: {
        label: 'payroll-portability-new-payroll-step-bank-entity',
        required: true
      },
      selectLabelFilled: 'payroll-portability-new-payroll-step-bank-entity-capitalize',
      isAccountValidation: true,
      cellsConnections: {
        in: {
          [pageName + '_init_channel']: {
            bind: 'initialize'
          },
          payrollPortability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          [pageName + '_scroll_complete']: {
            bind: 'scrollComplete'
          },
          [pageName + '_entity_selected']: {
            bind: 'selectValue'
          }
        },
        out: {
          [pageName + '_register_step']: {
            bind: 'register-step'
          },
          [pageName + '_go_next_step']: {
            bind: 'continue-button-was-clicked'
          },
          [pageName + '_change_step_state']: {
            bind: 'change-step-state'
          },
          [pageName + '_form_step_focus_in']: {
            bind: 'cells-step-focus-in'
          },
          [pageName + '_select_banks_list']: {
            bind: 'select-was-clicked'
          },
          [pageName + '_send_receivers_data']: {
            bind: 'on-button-tap'
          },
          global_call_me_back_change_step_state: {
            bind: 'change-step-state'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-button-was-clicked'
          },
          global_retargeting_entities: {
            bind: 'on-button-tap'
          }
        }
      }
    }
  };
  const cellsStepProductSelector = {
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
      maxSteps,
      instructionsLabel: 'payroll-portability-description-info',
      productsListLabel: 'payroll-portability-benefits-step-info',
      description: 'payroll-portability-description-info',
      disabledUpdateTitleOnChangeProduct: false,
      stepTitle: 'payroll-portability-current-payroll-step-title',
      accountTitle: 'payroll-portability-current-payroll-step-title',
      changeLabel: 'payroll-portability-current-payroll-step-change-label',
      visibleChars,
      cellsConnections: {
        in: {
          [pageName + '_init_channel']: {
            bind: 'initialize'
          },
          [pageName + '_scroll_complete']: {
            bind: 'scrollComplete'
          },
          payrollPortability_exit_modal_button_pressed: {
            bind: 'resetStep'
          },
          payroll_portability_successful: {
            bind: 'resetStep'
          },
          [pageName + '_show_step_accounts']: {
            bind: 'products'
          },
          [pageName + '_product_selected_to_payroll_view_all']: {
            bind: 'selected'
          }
        },
        out: {
          [pageName + '_register_step']: {
            bind: 'register-step'
          },
          [pageName + '_change_step_state']: {
            bind: 'change-pressed'
          },
          [pageName + '_open_viewall_products_modal']: {
            bind: 'view-all'
          },
          [pageName + '_product_selected_to_payroll']: {
            bind: 'select-product'
          },
          [pageName + '_new_payroll_on_product_selected']: {
            bind: 'on-change-product-selected'
          },
          [pageName + '_dont_change_and_continue']: {
            bind: 'dont-change-and-continue'
          },
          [pageName + '_product_selector_step_focus_in']: {
            bind: 'cells-step-focus-in'
          },
          global_call_me_back_change_step_state: {
            bind: 'change-pressed'
          },
          global_call_me_back_go_next_step: {
            bind: 'dont-change-and-continue'
          }
        }
      }
    }
  };
  const cellsStepCardChecklistContract = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    properties: {
      pdfData: [
        {
          'id': 'tyc_accounts',
          'name': 'tyc_device',
          'type': 'pdf',
          'icon': 'coronita:pdf',
          'text': 'payroll-portability-terms-conditions-pdf-data'
        }
      ],
      checkboxList: [
        {
          'valid': false,
          'active': true,
          'buttonText': 'payroll-portability-terms-conditions-checkbox'
        }
      ],
      className: 'custom-checkbox-buttons focus-checkbox-shadow-color step-header-title-top-spacing',
      stepTitle: 'payroll-portability-terms-conditions-title',
      consultText: false,
      currentStep: 4,
      maxSteps,
      hideChangeDataBox: true,
      showButton: true,
      cellsConnections: {
        in: {
          [pageName + '_init_channel']: {
            bind: 'initialize'
          },
          [pageName + '_scroll_complete']: {
            bind: 'scrollComplete'
          },
          payrollPortability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          }
        },
        out: {
          [pageName + '_register_step']: {
            bind: 'register-step'
          },
          [pageName + '_go_next_step']: {
            bind: 'go-next-step'
          },
          [pageName + '_change_step_state']: {
            bind: 'change-pressed'
          },
          [pageName + '_generate_pdf']: {
            bind: 'request-pdf'
          },
          [pageName + '_terms_and_conditions_step_focus_in']: {
            bind: 'cells-step-focus-in'
          },
          global_call_me_back_go_next_step: {
            bind: 'go-next-step'
          },
          global_call_me_back_change_step_state: {
            bind: 'change-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'go-next-step'
          }
        }
      }
    }
  };
  const cellsSumatyView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    properties: {
      className: 'aqua-dark-button',
      showAddition: true,
      buttonLabel: 'payroll-portability-summary-request-button-label',
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
          [pageName + '_load_payload_to_payroll']: {
            bind: 'summary-closed'
          },
          global_call_me_back_init_sticky_configuration: {
            bind: 'secondary-button-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
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
      className: isNativeIos ? 'ios-top-padding black-close-icon' : 'black-close-icon',
      modalTitle: 'payroll-portability-benefits-step-info',
      iOSFixedHeader: isNativeIos,
      showCloseModalButton: true,
      closeButtonLabel: 'payroll-portability-close-label',
      cellsConnections: {
        in: {
          [pageName + '_open_viewall_products_modal']: {
            bind: 'treatProducts'
          }
        },
        out: {
          [pageName + '_product_selected_to_payroll_view_all']: {
            bind: 'select-product'
          }
        }
      }
    }
  };
  const cellsModalSelector = {
    zone: 'app__overlay',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      cellsConnections: {
        in: {
          payrollPortability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          [pageName + '_select_banks_list']: {
            bind: 'open'
          },
          [pageName + 'set_banks']: {
            bind: 'items'
          }
        },
        out: {
          [pageName + '_entity_selected']: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };
  const glomoOpxPayrollPortabilityDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-payroll-portability-dm',
    properties: {
      autoActivateStep: true,
      decorateSteps: true,
      productSelectorIndex: 3,
      cellsConnections: {
        in: {
          [pageName + '_init_channel']: {
            bind: 'initPage'
          },
          payrollPortability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          [pageName + '_register_step']: {
            bind: 'registerStep',
            previousState: true
          },
          [pageName + '_backstep_request']: {
            bind: 'manageBackButton'
          },
          [pageName + '_change_step_state']: {
            bind: 'goToStep'
          },
          [pageName + '_go_next_step']: {
            bind: 'goNextStep'
          },
          payrollPortability_step_benefits_birthday_confirm: {
            bind: 'goNextStep'
          },
          [pageName + '_product_selected_to_payroll']: {
            bind: 'manageProductSelectorEvent'
          },
          [pageName + '_new_payroll_on_product_selected']: {
            bind: 'manageProductSelectorEvent'
          },
          [pageName + '_dont_change_and_continue']: {
            bind: 'manageProductSelectorEvent'
          },
          ocPayrollPortabilityset_banks_data_error: {
            bind: 'getBanks'
          }
        },
        out: {
          [pageName + '_cells_scroll_zone']: {
            bind: 'cells-scroll-zone'
          },
          [pageName + '_show_confirm_channel']: {
            bind: 'can-execute-changed'
          },
          global_alert_manager_open_with_settings: {
            bind: 'payroll-portability-exit-modal'
          },
          [pageName + '_leave_operative']: {
            bind: 'leave-operative'
          },
          [pageName + '_operation_sumary_analytics']: {
            bind: 'operation-summary'
          },
          [pageName + '_go_next_step']: {
            bind: 'manage-product-selector-event'
          },
          global_call_me_back_reset_step: {
            bind: 'set-active-on-propertie-offer-page'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: true,
      newCellsConnections: {
        add: {
          out: {
            ocPayrollPortability_set_customers: {
              bind: 'set-customers'
            },
            ocPayrollPortabilityopen_with_settings_spherica: {
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
  const glomoPayrollPortabilityManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-oc-payroll-portability-manager',
    familyPath: 'glomo-payroll-portability-manager',
    properties: {
      host: config.globalServices.host,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      native: config.native || false,
      otpId: pageName,
      detailDocumentPdfTemplate: detailDownloadParams,
      catalogId: '06920074E',
      isOcOffer: true,
      cellsConnections: {
        in: {
          contract_product_section_oc_banner_payroll_portability_clicked: {
            bind: 'initPage'
          },
          dashboard_oc_banner_payroll_portability_clicked: {
            bind: 'initPage'
          },
          navigation_from_futura_dashboard: {
            bind: 'initPage'
          },
          global_offers_retrieved: {
            bind: 'initPageWithoutOfferId'
          },
          payrollPortability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          payroll_portability_successful: {
            bind: 'reset'
          },
          dashboard_accounts: {
            bind: 'getGlobalAccounts'
          },
          payrollPortability_step_benefits_birthday_cancel: {
            bind: 'wrongBirthDateModal'
          },
          [pageName + '_benefits_start_button_pressed']: {
            bind: 'setBirthDateModalConfig'
          },
          [pageName + '_send_receivers_data']: {
            bind: 'senderData'
          },
          global_storage_get_payroll_portability_data_error: {
            bind: 'getReceiversEntities'
          },
          global_storage_get_payroll_portability_data_success: {
            bind: 'getReceiversEntities'
          },
          [pageName + '_form_step_focus_in']: {
            bind: 'getToLocalStorageData'
          },
          [pageName + '_entity_selected']: {
            bind: 'senderBank'
          },
          [pageName + '_product_selected_to_payroll']: {
            bind: 'accountSelected'
          },
          [pageName + '_new_payroll_on_product_selected']: {
            bind: 'accountSelected'
          },
          [pageName + '_load_payload_to_payroll']: {
            bind: 'loadPayloadToRequestPayroll'
          },
          [pageName + '_generate_pdf']: {
            bind: 'generatePdfTemplate'
          },
          [pageName + '_success_post_bd']: {
            bind: 'successBasePDF'
          },
          ocPayrollPortabilityset_banks_filter: {
            bind: 'setBanksFilter'
          },
          ocPayrollPortability_set_catalog_id: {
            bind: 'setCatalogId'
          },
          OC_PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_RESPONSE: {
            bind: 'financialOverviewResponse'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'show-birth-date-modal'
          },
          [pageName + '_show_birth_date_modal']: {
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
          [pageName + '_porta_set_active_property']: {
            bind: 'set-active-on-propertie-offer-page'
          },
          [pageName + '_set_local_storage_data']: {
            bind: 'set-local-storage-data'
          },
          [pageName + '_receiver_bank_selected']: {
            bind: 'receiver-bank-changed'
          },
          [pageName + '_show_step_accounts']: {
            bind: 'send-products-list-event'
          },
          [pageName + '_send_otp_analytics']: {
            bind: 'signature-required-first-step-dm'
          },
          [pageName + '_show_wrong_birth_date_modal']: {
            bind: 'show-wrong-birth-date-modal',
            link: {
              page: 'ocPayrollPortabilityWrongBirthDate',
              skipHistory: true
            }
          },
          [pageName + '_download_pdf']: {
            bind: 'native-download-receipt'
          },
          global_open_document_base64: {
            bind: 'show-document-event'
          },
          payroll_portability_successful: {
            bind: 'payroll-portability-success',
            link: {
              page: 'ocPayrollPortabilityReview',
              skipHistory: true
            }
          },
          [pageName + '_send_offer_data']: {
            bind: 'send-offer-data-analytics'
          },
          [pageName + '_send_app_completed_data']: {
            bind: 'send-app-completed-data'
          },
          ocPayrollPortabilityset_catalog_id: {
            bind: 'glomo-payroll-portability-set-catalog-id'
          },
          ocPayrollPortabilityset_banks: {
            bind: 'glomo-payroll-portability-set-banks'
          },
          global_retargeting_form_submission: {
            bind: 'close-control-veil'
          },
          global_retargeting_go_next_step: {
            bind: 'get-data-to-local-storage'
          },
          global_retargeting_contracted_product: {
            bind: 'payroll-portability-success'
          },
          OC_PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_RESPONSE_HANDLER: {
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
        add: {
          out: {
            payroll_portability_successful: {
              bind: 'post-customer-services-succes'
            }
          }
        },
        remove: {
          out: [
            'ocPayrollPortability_show_wrong_birth_date_modal',
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };
  const glomoAnalyticsPayrollPortabilityManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-oc-payroll-portability-manager',
    familyPath: 'glomo-payroll-portability-manager',
    properties: {
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
          payrollPortability_exit_modal_button_pressed: {
            bind: 'resetData'
          },
          payroll_portability_successful: {
            bind: 'resetData'
          },
          contract_product_section_oc_banner_payroll_portability_clicked: {
            bind: 'setOfferDataContractProductSection'
          },
          dashboard_oc_banner_payroll_portability_clicked: {
            bind: 'setOfferDataDashboardBanner'
          },
          navigation_from_futura_dashboard: {
            bind: 'setOfferDataFuturaDashboard'
          },
          send_deep_link_payload_to_payroll_portability: {
            bind: 'setOfferDataDeeplink'
          },
          navigation_page_inapp: {
            bind: 'setOfferDataInApp'
          },
          [pageName + '_send_offer_data']: {
            bind: 'setOfferData'
          },
          contract_product_section_analytics: {
            bind: 'setOfferDataContractProductSection'
          },
          [pageName + '_benefits_start_button_pressed']: {
            bind: 'fireAppStarted'
          },
          [pageName + '_show_birth_date_modal']: {
            bind: 'fireModalWithData'
          },
          [pageName + '_form_step_focus_in']: {
            bind: 'onStep'
          },
          [pageName + '_product_selector_step_focus_in']: {
            bind: 'onStep'
          },
          [pageName + '_terms_and_conditions_step_focus_in']: {
            bind: 'onStep'
          },
          [pageName + '_operation_sumary_analytics']: {
            bind: 'onStep'
          },
          [pageName + '_send_otp_analytics']: {
            bind: 'manageAnalyticsSign'
          },
          [pageName + '_send_app_completed_data']: {
            bind: 'setCompletedData'
          }
        },
        out: {
          [pageName + '_app_page_visit_analytic']: {
            bind: 'analytics-page-visit',
            analytics: analytics.appPageVisit
          },
          [pageName + '_app_started_analytic']: {
            bind: 'analytics-app-started',
            analytics: analytics.appStarted
          },
          [pageName + '_app_step_two']: {
            bind: 'analytics-modal',
            analytics: analytics.appStep(2, '2 fecha de nacimiento')
          },
          [pageName + '_page_view_select_account']: {
            bind: 'analytics-footprint-select-account',
            analytics: analytics.getAdvancedFootprint('seleccion de cuenta')
          },
          [pageName + '_app_step_three']: {
            bind: 'analytics-app-step-3',
            analytics: analytics.appStep(3, '3 conectemos tu nomina')
          },
          [pageName + '_app_step_four']: {
            bind: 'analytics-app-step-4',
            analytics: analytics.appStep(4, '4 terminos y condiciones')
          },
          [pageName + '_app_step_five']: {
            bind: 'analytics-app-step-5',
            analytics: analytics.appStep(5, '5 confirmacion')
          },
          [pageName + '_page_view_otp']: {
            bind: 'analytics-footprint-otp',
            analytics: analytics.getAdvancedFootprint('otp')
          },
          [pageName + '_app_completed']: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            ocPayrollPortability_show_birth_date_modal: {
              bind: 'fireModalWithData'
            }
          }
        }
      }
    }
  };
  const globalApisBusinessDocument = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [pageName + '_download_pdf']: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [pageName + '_success_post_bd']: {
            bind: 'post-business-documents-success'
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
      isNativeIos: isNativeIos,
      data: {
        analytics: {
          incorrectBirthday: {
            segmentProfile: 'payroll-portability-wrong-birthday-title',
            state: 'payroll-portability-rejected-label',
            normalTypology: analyticsLiterals.commons.normalFlow,
            detailTypology: analyticsLiterals.commons.accountDetailFlow
          }
        },
        modal: {
          title: 'payroll-portability-welcome-header-title',
          button: 'payroll-portability-account-benefits-step-collapse-button-label',
          link: 'payroll-portability-link',
          callBBVA: 'payroll-portability-welcome-header-bbva-line'
        },
        microillustration: {
          title: 'payroll-portability-offer-header-description'
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
                microillustration: 'card',
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
        characteristics: {
          title: {
            text: 'payroll-portability-feature-one-title-spherica',
            size: 'M',
            fontType: 'title-default'
          },
          list: [
            'oc-payroll-portability-feature-one',
            'oc-payroll-portability-feature-two',
            'oc-payroll-portability-feature-three'
          ]
        },
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
          modifyLabelNewPayroll: 'payroll-portability-modify-btn-label-benefits',
          modalTitle: 'payroll-portability-header-title',
          callBBVA: 'payroll-portability-bbva-line',
          benefits: {
            collapsed: {
              title: 'payroll-portability-account-collapsed-title-spherica',
              viewLabel: 'payroll-portability-consult-btn-label',
              text: 'payroll-portability-benefits-step-collapsed-step-label'
            }
          },
          currentPayroll: {
            title: 'payroll-portability-account-new-payroll-step-title',
            description: 'payroll-portability-new-payroll-step-instructions-description',
            cardInputLabel: 'payroll-portability-account-new-payroll-step-input-label',
            cardInputOutLabel: 'payroll-portability-feature-multistep-modal-tooltip-current-account-output',
            cardInputInfoMessage: 'payroll-portability-new-payroll-step-input-inline-message',
            bankInputLabel: 'payroll-portability-new-payroll-step-bank-entity',
            bankInputOutLabel: '',
            button: 'payroll-portability-continue',
            buttonSecondary: 'payroll-portability-link',
            collapsed: {
              cardLabel: 'payroll-portability-account-clabe-label'
            }
          },
          newPayroll: {
            title: 'payroll-portability-current-payroll-step-title',
            description: 'payroll-portability-description-info',
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
          currentPayrollLabel: 'payroll-portability-new-payroll-step-title',
          newPayrollLabel: 'payroll-portability-current-payroll-step-title',
          folioLabel: 'payroll-portability-success-folio-label'
        }
      },
      dummyEntityImage: 'images/spherica/bbvaesmmxxx.svg',
      collapsedDummyEntityImage: 'images/spherica/BBVAESMMXXX_Dark.svg',
      leaveEvent: 'oc-payroll-portability-leave-operative',
      flagOC: true,
      cellsConnections: {
        in: {
          contract_product_section_oc_banner_payroll_portability_clicked: {
            bind: 'initPage'
          },
          dashboard_oc_banner_payroll_portability_clicked: {
            bind: 'initPage'
          },
          ocPayrollPortability_init_channel: {
            bind: 'checkProducts'
          },
          ocPayrollPortability_open_modal: {
            bind: 'openModal'
          },
          global_call_me_back_show_call_me_back_in_sticky: {
            bind: 'showCallButtonFooter'
          },
          ocPayrollPortability_set_customers: {
            bind: 'setBirthdayDate'
          },
          global_login_success_indicators: {
            bind: 'setBirthdayDate'
          },
          ocPayrollPortabilityset_banks: {
            bind: 'banks'
          },
          payrollPortability_exit_modal_button_pressed: {
            bind: 'reset'
          },
          ocPayrollPortability_leave_operative: {
            bind: 'reset'
          },
          global_alert_WRONG_PORTABILITY_cancel: {
            bind: 'reset'
          },
          global_alert_WRONG_OPERATIONAL_cancel: {
            bind: 'reset'
          },
          ocPayrollPortability_show_step_accounts: {
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
          payroll_portability_successful: {
            bind: 'openReceiptModal'
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
          global_retry_error: {
            bind: 'hideSpinner'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'setHeightAndOverflowWhenBackActionButton'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          oc_payroll_portability_response_query_magic_receiver: {
            bind: 'receiverResponse'
          },
          OC_PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_RESPONSE_HANDLER: {
            bind: 'successFinancialOverview'
          },
          OC_PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_ERROR: {
            bind: 'errorFinancialOverview'
          }
        },
        out: {
          ocPayrollPortability_backstep_request: {
            bind: 'click-right-button',
            'forward-to-native': true
          },
          ocPayrollPortability_set_catalog_id: {
            bind: 'glomo-payroll-portability-set-catalog-id'
          },
          global_call_me_back_init_header_configuration: {
            bind: 'click-right-secondary-button'
          },
          ocPayrollPortability_benefits_start_button_pressed: {
            bind: 'continue-pressed'
          },
          global_call_me_back_init_sticky_configuration: {
            bind: 'request-call-me-back-from-sticky'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'bbva-feature-payroll-portability-birthday-modal-secondary'
          },
          ocPayrollPortability_birthday_incorrect_leave: {
            bind: 'birthday-incorrect-modal-close',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          ocPayrollPortability_entity_selected: {
            bind: 'selected-bank-changed'
          },
          ocPayrollPortability_form_step_focus_in: {
            bind: 'current-step-index-3'
          },
          ocPayrollPortability_product_selector_step_focus_in: {
            bind: 'current-step-index-2'
          },
          ocPayrollPortability_send_receivers_data: {
            bind: 'current-payroll-button-clicked'
          },
          global_retargeting_entities: {
            bind: 'current-payroll-button-clicked'
          },
          ocPayrollPortability_new_payroll_on_product_selected: {
            bind: 'new-payroll-button-clicked'
          },
          ocPayrollPortability_generate_pdf: {
            bind: 'terms-and-conditions-file-clicked'
          },
          ocPayrollPortability_terms_and_conditions_step_focus_in: {
            bind: 'current-step-index-4'
          },
          ocPayrollPortability_operation_sumary_analytics: {
            bind: 'current-step-index-5'
          },
          ocPayrollPortability_load_payload_to_payroll: {
            bind: 'confirmation-button-clicked'
          },
          global_logout_sesion_expiration: {
            bind: 'logout-payroll-portability'
          },
          ocPayrollPortability_leave_operative: {
            bind: 'oc-payroll-portability-leave-operative',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          ocPayrollPortability_birthday_modal_open_spherica: {
            bind: 'bbva-feature-payroll-portability-birthday-modal-open'
          },
          global_retargeting_go_next_step: {
            bind: 'next-step'
          },
          ocPayrollPortability_send_app_completed_data: {
            bind: 'birthday-incorrect-modal-analytics'
          },
          ocPayrollPortability_receipt_button_closed: {
            bind: 'receipt-close-button-clicked'
          },
          financial_overview_refresh: {
            bind: 'get-financial-products'
          },
          ocPayrollPortability_close_from_deeplink: {
            bind: 'close-from-deeplink',
            link: {
              page: 'dashboard'
            }
          },
          navigate_to_proceedings: {
            bind: 'navigate-payroll-to-proceedings-page',
            link: {
              page: 'proceedings',
              cleanUntil: 'ocPayrollPortability'
            }
          },
          oc_payroll_portability_query_magic_receiver: {
            bind: 'validate-card-number'
          },
          OC_PAYROLL_PORTABILITY_GET_FINANCIAL_OVERVIEW_REQUEST: {
            bind: 'retry-load-accounts'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        remove: {
          out: [
            'ocPayrollPortability_receipt_button_closed'
          ]
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
          ocPayrollPortabilityset_catalog_id: {
            bind: 'getCatalogsCatalogRecords'
          }
        },
        out: {
          ocPayrollPortabilityset_banks_filter: {
            bind: 'get-catalogs-catalog-record-get-v0-success'
          },
          ocPayrollPortabilityset_banks_data_error: {
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
          oc_payroll_portability_query_magic_receiver: {
            bind: 'getReceiver'
          }
        },
        out: {
          oc_payroll_portability_response_query_magic_receiver: {
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
          OC_PAYROLL_PORTABILITY_GET_FINANCIAL_OVERVIEW_REQUEST: {
            bind: 'getFinancialOverview'
          }
        },
        out: {
          OC_PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_RESPONSE: {
            bind: 'financial-overview-retrieved'
          },
          OC_PAYROLL_PORTABILITY_FINANCIAL_OVERVIEW_ERROR: {
            bind: 'error-on-get-financial-overview'
          }
        }
      }
    }
  };

  base.components.push(
    glomoNavigationHandler,
    cellsHandleLifeCycle,
    glomoOpxPayrollPortabilityDm,
    glomoAnalyticsPayrollPortabilityManager,
    glomoPayrollPortabilityManager,
    globalApisBusinessDocument,
    controllerCmb,
    apiCatalogs,
    receiversAPI,
    cellsDmGlobalApisFinancialOverview
  );

  const coronitaUIComponents = [
    cellsMoleculeHeader,
    glomoStepOfferPage,
    cellsStepFormTextSelect,
    cellsStepProductSelector,
    cellsStepCardChecklistContract,
    cellsSumatyView,
    cellsProductSelectorModal,
    cellsModalSelector,
    glomoOpxPayrollPortabilityDm,
    glomoPayrollPortabilityManager,
    glomoAnalyticsPayrollPortabilityManager,
    globalApisBusinessDocument,
    controllerCmb,
    apiCatalogs
  ];
  if (isSpherica) {
    base.components.splice(2, 0, feature);
  } else {
    Array.prototype.splice.apply(base.components, [2, 0].concat(coronitaUIComponents));
  }

  if (config.native) {
    base.components.push(glomoOpenDocument);
  }
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('glomo-oc-payroll-portability-manager', pageName, [
    'post-customer-services-succes', 'post-customer-services-error']);
  addRetryErrors(base)([
    {
      id: 'WRONG-PORTABILITY-OC',
      acceptRetry: { bind: 'loadPayloadToRequestPayroll', component: 'glomo-oc-payroll-portability-manager' },
      cancelRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' }
    }, {
      id: 'WRONG-UPDATE-ACCOUNT-OC',
      acceptRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' },
      cancelRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' }
    }, {
      id: 'WRONG-OPERATIONAL-OC',
      acceptRetry: { bind: 'loadPayloadToRequestPayroll', component: 'glomo-oc-payroll-portability-manager' },
      cancelRetry: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' },
      acceptCallForHelp: { bind: 'leaveOperative', component: 'glomo-opx-payroll-portability-dm' }
    }
  ]);
  addCommonErrors(base.components)();
  localStorage.addOutStorageChannels(base.components, ['payroll_portability_data', 'call_me_back'], config);

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
