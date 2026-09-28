/* eslint-disable complexity */
'use strict';
const utils = require('./common/helpers/_utils');
const {getLocalCurrency, useNames, createPrefixFromPageName, getLanguage} = utils;
const PAGE_NAME = 'ocPayrollAdvancePage';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
const MAX_STEPS = 2;
const { glomoOpenDocument, SPINNER: getSpinner } = require('./common/helpers/_utils');

module.exports = (CONFIG) => {
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const localCurrency = getLocalCurrency(CONFIG);
  const language = getLanguage(CONFIG);
  const host = CONFIG.globalServices.host;
  const isNativeIos = CONFIG.nativeIos || false;
  const native = !!CONFIG.native;
  const spinner = getSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const {
    bindedLiterals, appPageVisit, appStarted, appCompleted, markCommission, markCat, markBureau, markExampleAmortizationTable, getAppSteps
  } = require('./analytics/_ocPayrollAdvance')();
  const stepsAnalyticsEventNameConfig = {
    2: 'app-step-2-terms-and-conditions',
    last: 'app-step-3-confirmation',
    sign: 'app-step-4-otp'
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          oc_payroll_advance_page_open_modal_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          payroll_advance_page_exit_modal_accept_spherica: {
            bind: 'alert-PAYROLL-ADVANCE-OFFER-EXIT-MODAL-accept'
          }
        }
      }
    }
  };

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'glomo-opx-template-spherica',
      type: 'modal',
      override: {
        className: 'remove-display-container-slot force-confirm-button-bottom'
      }
    }),
    properties: {
      animationType: 'verticalUp',
      delayScrollTop: 300,
      iOSFixedHeader: isNativeIos,
      headerFixed: true,
      headerHeight: 60,
      extraHeaderClass: isNativeIos ? 'ios-top-padding dark-blue-bg' : 'dark-blue-bg',
      className: isNativeIos ? 'bg-core-blue' : '',
      topOnConfirm: true,
      cellsConnections: {
        in: {
          [getChannelName('show_confirm_channel')]: {
            bind: 'showConfirm'
          },
          [getChannelName('init_page')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('_scroll_zone')]: {
            bind: 'scrollItemIntoView'
          }
        },
        out: {
          [getChannelName('_scroll_complete')]: {
            bind: 'cells-scroll-complete'
          },
          [getChannelName('scroll_channel')]: {
            bind: 'opx-template-content-scroll'
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
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          global_retargeting_initialize: {
            bind: 'init-page'
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
      backAction: 'close-oc-loan-offer-operative',
      cellsConnections: {
        in: {
          [getChannelName('exit_operative')]: {
            bind: 'goBack'
          }
        },
        out: {
          global_exit_oc_payroll_advance: {
            bind: 'close-oc-loan-offer-operative',
            backStep: true,
            'forward-to-native': true
          },
          global_retargeting_send_information_update: {
            bind: 'close-oc-loan-offer-operative'
          }
        }
      }
    }
  };

  const moleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding header--core' : 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '20',
      titleName: getLocaleName('header-title'),
      continue: 'dashboard',
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'setColorsTooltip'
          }
        },
        out: {
          [getChannelName('back_button')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-molecule-header-spherica',
      type: 'modal'
    })
  };

  const stepLoanOffer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-step-loan-offer',
    tagSpherica: 'glomo-step-loan-offer-spherica',
    properties: {
      className: 'header-core-blue standard-message sticky-margin payroll-advance summary-medium-amount',
      stepTitle: getLocaleName('offer-step-title'),
      changeLabel: getLocaleName('operatives-change'),
      localCurrency,
      language,
      hideCurrentStepLabel: true,
      hideHeader: true,
      hasStickyAmount: true,
      enableSticky: true,
      notInitializeWithAttached: true,
      showButtonSticky: false,
      stepId: 'payroll-advance-offer',
      currentStep: 1,
      maxSteps: MAX_STEPS,
      active: true,
      bottomSeparator: true,
      middleSeparator: true,
      topSeparator: false,
      preventInvalidInput: true,
      lockedValues: true,
      hideDecimal: false,
      disableDecimal: false,
      autoFormat: true,
      decimalsHiddenCollapsedAmount: false,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          global_exit_oc_payroll_advance: {
            bind: 'reset'
          },
          [getChannelName('set_property_header')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_property_hide_header')]: {
            bind: 'setProperties'
          },
          [getChannelName('scroll_channel')]: {
            bind: 'templateContentScroll'
          },
          [getChannelName('set_first_step')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_no_payroll')]: {
            bind: 'setProperties'
          },
          [getChannelName('sticky')]: {
            bind: 'setProperties'
          },
          [getChannelName('sticky_show')]: {
            bind: 'setProperties'
          },
          [getChannelName('clean_data')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'go-next-step'
          },
          [getChannelName('_scroll_zone')]: {
            bind: 'change-step-state'
          },
          [getChannelName('show_header')]: {
            bind: 'go-next-step'
          },
          [getChannelName('hide_header')]: {
            bind: 'change-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('amount_input_blur_with_valid_amount')]: {
            bind: 'valid-amount-input-focus-out'
          },
          [getChannelName('amount_selected_changed')]: {
            bind: 'amount-selected-changed'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'input-focus'
          },
          [getChannelName('modals_event')]: {
            bind: 'modals-event'
          },
          [getChannelName('next_step_init_analytics')]: {
            bind: 'go-next-step'
          },
          [getChannelName('continue_hiring_button_tapped')]: {
            bind: 'btn-continue-hiring-apply'
          },
          [getChannelName('amount_input_clean')]: {
            bind: 'input-clean'
          },
          oc_payroll_advance_amortization_schedule_sample_pressed: {
            bind: 'amortization-schedule-sample-pressed',
            analytics: markExampleAmortizationTable
          },
          global_retargeting_go_next_step: {
            bind: 'go-next-step'
          },
          [getChannelName('change_amount_step_loan_offer_init')]: {
            bind: 'open-step'
          }
        }
      }
    },
    propertiesSpherica: {
      headerClass: 'subheader-main-title',
      className: 'header-core-blue standard-message sticky-margin payroll-advance',
      changeLabel: getLocaleName('terms-change-label-spherica'),
      showCallMeBack: false,
      hideHeaderOnExpand: true,
      hideHeader: false,
      amountClass: 'big-size-amount',
      newCellsConnections: {
        remove: {
          out: [
            'oc_payroll_advance_page_hide_header'
          ]
        }
      }
    }
  };

  const stepChecklistContract = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    tagSpherica: 'cells-step-card-checklist-contract-spherica',
    properties: {
      className: 'custom-checkbox-buttons focus-checkbox-shadow-color step-header-title-top-spacing',
      stepTitle: getLocaleName('terms-title'),
      consultText: getLocaleName('terms-consult-text'),
      changeLabel: getLocaleName('terms-change-label'),
      stepId: 'payroll-advance-terms',
      currentStep: 2,
      maxSteps: MAX_STEPS,
      hideChangeDataBox: true,
      collapsed: false,
      showButton: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          global_exit_oc_payroll_advance: {
            bind: 'reset'
          },
          [getChannelName('set_step_card_checklist_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('notify_step_card_checklist_path')]: {
            bind: 'notifyPath'
          }
        },
        out: {
          navigation_about_info_to_page: {
            bind: 'click-left-button',
            backStep: true
          },
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('to_go_summary')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('show_header')]: {
            bind: 'change-pressed'
          },
          [getChannelName('open_insurance_coverage_modal')]: {
            bind: 'request-insurance-coverage'
          },
          [getChannelName('open_terms_and_conditions_modal')]: {
            bind: 'request-terms-and-conditions'
          },
          [getChannelName('open_credit_bureau_modal')]: {
            bind: 'request-credit-bureau'
          },
          [getChannelName('focus_in')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('request_document')]: {
            bind: 'request-terms-and-conditions'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'custom-checkbox-buttons focus-checkbox-shadow-color step-header-title-top-spacing payroll-advance',
      mediumTitle: true,
      variant: 'primary-alt',
      variantListFile: 'primary-alt',
      isButtonPrimary: true,
      changeLabel: getLocaleName('terms-change-label-spherica'),
      hideCurrentStepLabel: true
    }
  };

  const payrollOpxDM = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-opx-payroll-advance-dm',
    tag: 'glomo-opx-payroll-advance-dm',
    properties: {
      host: host,
      native,
      autoActivateStep: true,
      decorateSteps: true,
      localCurrency: localCurrency,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigationDetailFromBridge'
          },
          global_exit_oc_payroll_advance: {
            bind: 'reset'
          },
          dashboard_customer_email: {
            bind: 'emailCache'
          },
          [getChannelName('init_page')]: {
            bind: 'init'
          },
          [getChannelName('to_go_summary')]: {
            bind: 'setSummary'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'openConfirmModal'
          },
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          [getChannelName('show_header')]: {
            bind: 'showHeader'
          },
          [getChannelName('hide_header')]: {
            bind: 'hideHeader'
          },
          [getChannelName('hire_loan')]: {
            bind: 'hireLoan'
          },
          [getChannelName('back_button')]: {
            bind: 'openConfirmModal'
          },
          [getChannelName('open_insurance_coverage_modal')]: {
            bind: 'openInsuranceModal'
          },
          [getChannelName('open_terms_and_conditions_modal')]: {
            bind: 'openTermsAndConditionModal'
          },
          [getChannelName('open_credit_bureau_modal')]: {
            bind: 'openCreditBureauModal'
          },
          [getChannelName('amount_input_blur_with_valid_amount')]: {
            bind: 'onAmountInputBlurWithValidAmount'
          },
          [getChannelName('amount_input_blur')]: {
            bind: 'onAmountInputBlur'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'onAmountInputFocus'
          },
          [getChannelName('get_documents_detail_success')]: {
            bind: 'onGetDocumentSuccess'
          },
          [getChannelName('get_documents_pdf_detail_success')]: {
            bind: 'onGetDocumentPDFSuccess'
          },
          [getChannelName('modals_event')]: {
            bind: 'onHelpIconClicked'
          },
          global_financial_overview_details: {
            bind: 'globalCacheStorage'
          },
          dashboard_accounts: {
            bind: 'accountsStorage'
          },
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'registerStep'
          },
          [getChannelName('next_step')]: {
            bind: 'goNextStep'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('get_loan_offer_detail_success')]: {
            bind: 'onGetLoanOfferDetailSuccess'
          },
          [getChannelName('get_loan_offer_detail_error')]: {
            bind: 'requestGenericError'
          },
          [getChannelName('post_quotations_simulate_success')]: {
            bind: 'onPostQuotationsSimulateSuccess'
          },
          [getChannelName('post_quotations_simulate_error')]: {
            bind: 'requestSimulateError'
          },
          [getChannelName('post_loans_success')]: {
            bind: 'requestSuccessPayroll'
          },
          [getChannelName('post_loans_error')]: {
            bind: 'requestGenericError'
          },
          global_payroll_advance_page_exit_modal_accept: {
            bind: 'exitPage'
          },
          global_payroll_advance_page_without_payroll_account_close_header: {
            bind: 'exitPage'
          },
          global_payroll_advance_page_pending_payments_close_header: {
            bind: 'exitPage'
          },
          global_payroll_advance_error_modal_close_header: {
            bind: 'exitPage'
          },
          [getChannelName('request_document')]: {
            bind: 'filterDocumentRequest'
          },
          [getChannelName('_SUCCESS_RESPONSE_PDF')]: {
            bind: 'successResponsePDF'
          },
          [getChannelName('_ERROR_RESPONSE_PDF')]: {
            bind: 'getErrorResponsePdf'
          },
          [getChannelName('_ERROR_POST_BD')]: {
            bind: 'errorResponse'
          },
          [getChannelName('_SUCCESS_POST_BD')]: {
            bind: 'successBasePdf'
          },
          [getChannelName('set_customer_data')]: {
            bind: 'onCustomerContactsSuccess'
          },
          [getChannelName('assistance_availability')]: {
            bind: 'assistanceAvailability'
          },
          [getChannelName('next_step_init_analytics')]: {
            bind: 'getAnalytics'
          },
          [getChannelName('amount_input_clean')]: {
            bind: 'cleanInput'
          },
          [getChannelName('change_amount_step_loan_offer_init')]: {
            bind: 'changeAmountInit'
          },
          oc_payroll_advance_amortization_schedule_sample_pressed: {
            bind: 'openAmortizationSchedule'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          }
        },
        out: {
          [getChannelName('set_product_attributes')]: {
            bind: 'set-product-attributes'
          },
          [getChannelName('exit_operative')]: {
            bind: 'exit-operative'
          },
          [getChannelName('set_no_payroll')]: {
            bind: 'set-no-account-payroll'
          },
          [getChannelName('set_first_step')]: {
            bind: 'set-first-step'
          },
          [getChannelName('set_second_step')]: {
            bind: 'set-second-step'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('set_property_header')]: {
            bind: 'set-property-show-header'
          },
          [getChannelName('set_property_hide_header')]: {
            bind: 'set-property-hide-header'
          },
          [getChannelName('set_summary_detail')]: {
            bind: 'payroll-advance-set-summary'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('set_step_card_checklist_properties')]: {
            bind: 'set-step-card-checklist-properties'
          },
          [getChannelName('current_step')]: {
            bind: 'current-step-changed'
          },
          set_payroll_success_page_result: {
            bind: 'init-and-open-success-page',
            link: {
              page: 'ocPayrollAdvanceReview',
              skipHistory: true
            }
          },
          [getChannelName('get_payroll_offer_detail')]: {
            bind: 'get-loan-offer-detail'
          },
          [getChannelName('get_payroll_documents_detail')]: {
            bind: 'get-documents-detail'
          },
          [getChannelName('simulate_offer')]: {
            bind: 'simulate-offer'
          },
          [getChannelName('open_modal')]: {
            bind: 'open-modal'
          },
          [getChannelName('set_principal_account')]: {
            bind: 'set-principal-account'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getChannelName('create_loan')]: {
            bind: 'create-loan'
          },
          [getChannelName('sticky')]: {
            bind: 'set-hide-sticky'
          },
          [getChannelName('sticky_show')]: {
            bind: 'set-show-sticky'
          },
          [getChannelName('clean_data')]: {
            bind: 'set-data-clean'
          },
          [getChannelName('REQUEST_PDF')]: {
            bind: 'request-pdf-contract'
          },
          [getChannelName('_SET_BUSINESS_DOC')]: {
            bind: 'set-business-properties'
          },
          [getChannelName('_REQUEST_PDF_DM_POST')]: {
            bind: 'request-post-document'
          },
          OCPAYROLLADVANCE_DOC_CONTENT: {
            bind: 'base-src-changed'
          },
          OCPAYROLLADVANCE_DOC_TITLE: {
            bind: 'title-pdf-text'
          },
          global_open_document_base64: {
            bind: 'show-document-event'
          },
          global_open_document_url: {
            bind: 'show-document-link'
          },
          [getChannelName('get_customer_contact')]: {
            bind: 'request-customer-contacts'
          },
          [getChannelName('analytics_persist_data')]: {
            bind: 'analytics-persist-data'
          },
          global_retargeting_set_step_offer_properties: {
            bind: 'set-first-step'
          },
          global_retargeting_send_information_update: {
            bind: 'init-and-open-success-page'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          in: {
            payroll_advance_page_exit_modal_accept_spherica: {
              bind: 'exitPage'
            },
            global_open_document_url_error: {
              bind: 'requestAmortizationDocumentError'
            }
          },
          out: {
            oc_payroll_advance_page_open_modal_spherica: {
              bind: 'open-modal'
            }
          }
        },
        remove: {
          out: [
            'oc_payroll_advance_page_open_modal'
          ]
        }
      }
    }
  };

  const summaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    properties: {
      className: 'aqua-dark-button',
      cellsConnections: {
        in: {
          [getChannelName('set_summary_detail')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('hire_loan')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'aqua-dark-button',
      primaryButtonClass: 'positive',
      notStyleBorderShadow: true
    }
  };

  const cellsDmGlobalApiLoans = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-loans',
    properties: {
      host: host,
      loansApiVersion: 1,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native,
      cellsConnections: {
        in: {
          [getChannelName('get_payroll_offer_detail')]: {
            bind: 'getOfferDetail'
          },
          [getChannelName('simulate_offer')]: {
            bind: 'postOfferDetailQuotationsSimulate'
          },
          [getChannelName('create_loan')]: {
            bind: 'postLoan'
          }
        },
        out: {
          [getChannelName('get_loan_offer_detail_success')]: {
            bind: 'set-offer-detail'
          },
          [getChannelName('get_loan_offer_detail_error')]: {
            bind: 'error-on-get-loan-offer-detail'
          },
          [getChannelName('post_quotations_simulate_success')]: {
            bind: 'get-offer-detail-quotations-simulate'
          },
          [getChannelName('post_quotations_simulate_error')]: {
            bind: 'error-on-post-loan-offer-detail-quotations-simulate'
          },
          [getChannelName('post_loans_success')]: {
            bind: 'post-loans'
          },
          [getChannelName('post_loans_error')]: {
            bind: 'error-on-post-loan'
          },
          global_retargeting_get_offer_detail: {
            bind: 'set-offer-detail'
          },
          global_retargeting_get_quotations_simulate: {
            bind: 'get-offer-detail-quotations-simulate'
          }
        }
      }
    }
  };

  const CellsDmGlobalApisCustomers = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: host,
      loansApiVersion: 1,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native,
      cellsConnections: {
        in: {
          [getChannelName('get_payroll_customer_detail')]: {
            bind: 'getContactDetail'
          }
        },
        out: {
        }
      }
    }
  };

  const glomoCustomersMxDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-customers-mx-dm',
    familyPath: 'glomo-customers-dm',
    properties: {
      host: host,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native,
      cellsConnections: {
        in: {
          [getChannelName('get_customer_contact')]: {
            bind: 'getCustomerContacts'
          }
        },
        out: {
          [getChannelName('set_customer_data')]: {
            bind: 'set-customer-contacts'
          },
          [getChannelName('customer_error_service')]: {
            bind: 'error-on-get-customer-contacts'
          }
        },
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        }
      }
    }
  };

  const investmentDocumntPdf = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: host,
      native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('REQUEST_PDF')]: {
            bind: 'getBusinessDocuments'
          },
          [getChannelName('_SET_BUSINESS_DOC')]: {
            bind: 'setProperties'
          },
          [getChannelName('_REQUEST_PDF_DM_POST')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [getChannelName('_SUCCESS_RESPONSE_PDF')]: {
            bind: 'success-on-get-business-documents'
          },
          [getChannelName('_ERROR_RESPONSE_PDF')]: {
            bind: 'error-on-get-business-documents'
          },
          [getChannelName('_ERROR_POST_BD')]: {
            bind: 'error-on-post-business-documents'
          },
          [getChannelName('_SUCCESS_POST_BD')]: {
            bind: 'post-business-documents-success'
          }
        }
      }
    }
  };

  const glomoAnalyticsOpxPayrollAdvanceDmMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-opx-payroll-advance-dm',
    familyPath: 'glomo-opx-payroll-advance-dm',
    properties: {
      config: {
        steps: stepsAnalyticsEventNameConfig
      },
      bindedLiterals,
      cellsConnections: {
        in: {
          global_exit_oc_payroll_advance: {
            bind: 'reset'
          },
          [getChannelName('set_first_step')]: {
            bind: 'handleUiUpdates'
          },
          [getChannelName('current_step')]: {
            bind: 'onCurrentStepChanged'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'onLastStepWrapper'
          },
          [getChannelName('amount_selected_changed')]: {
            bind: 'applicationAmount'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'onAmountInputFocus'
          },
          [getChannelName('set_product_attributes')]: {
            bind: 'dataPersisted'
          },
          [getChannelName('modals_event')]: {
            bind: 'onHelpIconClicked'
          },
          [getChannelName('open_credit_bureau_modal')]: {
            bind: 'openCreditBureauModal'
          },
          [getChannelName('continue_hiring_button_tapped')]: {
            bind: 'onContinueHiringButtonTapped'
          },
          [getChannelName('post_loans_success')]: {
            bind: 'onLoanHiringNotification'
          },
          [getChannelName('hire_loan')]: {
            bind: 'manageAnalyticsSign'
          },
          [getChannelName('analytics_persist_data')]: {
            bind: 'dataPersisted'
          }
        },
        out: {
          [getChannelName('analytics_mark_cat')]: {
            bind: 'analytics-mark-cat',
            analytics: markCat
          },
          [getChannelName('analytics_mark_commission')]: {
            bind: 'analytics-mark-commission',
            analytics: markCommission
          },
          [getChannelName('analytics_app_page_visit')]: {
            bind: 'analytics-app-page-visit',
            analytics: appPageVisit
          },
          [getChannelName('analytics_mark_bureau')]: {
            bind: 'analytics-mark-bureau',
            analytics: markBureau
          },
          [getChannelName('analytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: appStarted
          },
          [getChannelName('analytics_app_step_2')]: {
            bind: `analytics-${stepsAnalyticsEventNameConfig[2]}`,
            analytics: getAppSteps('APPLICATION_STEP_TERMS_AND_CONDITIONS')
          },
          [getChannelName('analytics_app_step_3')]: {
            bind: `analytics-${stepsAnalyticsEventNameConfig.last}`,
            analytics: getAppSteps('APPLICATION_STEP_CONFIRMATION')
          },
          [getChannelName('analytics_app_step_4')]: {
            bind: `analytics-${stepsAnalyticsEventNameConfig.sign}`,
            analytics: getAppSteps('APPLICATION_STEP_OTP')
          },
          [getChannelName('analytics_app_completed_hired')]: {
            bind: 'analytics-app-completed-hired',
            analytics: appCompleted
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/oc-payroll-advance',
      params: []
    },
    pages: pages,
    template,
    components: [
      spinner,
      navigationHandler,
      payrollOpxDM,
      lifeCycle,
      moleculeHeader,
      stepLoanOffer,
      stepChecklistContract,
      summaryView,
      cellsDmGlobalApiLoans,
      CellsDmGlobalApisCustomers,
      glomoCustomersMxDm,
      investmentDocumntPdf,
      glomoAnalyticsOpxPayrollAdvanceDmMx
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  if (native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-loans', PAGE_NAME, ['post-loans', 'error-on-post-loan']);
  return sphericaPageUtils.spherize(base);
};
