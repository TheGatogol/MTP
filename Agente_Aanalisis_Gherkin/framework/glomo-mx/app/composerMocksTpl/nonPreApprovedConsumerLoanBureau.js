/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const UTILS = require('./common/helpers/_utils');
  const {
    useNames,
    createPrefixFromPageName,
    connectionsOut
  } = UTILS;
  const isNativeIos = CONFIG.nativeIos || false;
  const SPINNER = UTILS.SPINNER(CONFIG);
  const PAGE_NAME = 'nonPreApprovedConsumerLoanBureau';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG, isSpherica);
  const ANALYTICS = require('./analytics/_nonPreApprovedConsumerLoanBureau')();
  const LITERALS = require('./analytics/common/_literals');
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      moleculeLinkVariant: 'primary-alt',
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          nonPreApprovedConsumerLoanBureau_OPEN_MODAL_SPHERICA: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_alert_modal_close: {
            bind: 'show-map',
            link: {
              page: 'atmLocator',
              skipHistory: true
            }
          }
        }
      }
    }
  };

  const customAnalytics = {
    bureauConsultation: {
      level2: LITERALS.preApprovedLoan.buerauAuthorization,
      pageIntent: LITERALS.commons.information
    },
    otp: {
      level2: LITERALS.commons.otp,
      pageIntent: LITERALS.commons.transaction
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      disableEdgeSwipe: true,
      headerFixed: true
    }
  };

  const lifeCicle = {
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
          open_control_veil: {
            bind: 'init-page'
          },
          ['init_page_' + PAGE_NAME]: {
            bind: 'init-page',
            analytics: ANALYTICS.custom_get_advanced_footprint_with_level2(customAnalytics.bureauConsultation)
          },
          ['reset_channel_' + PAGE_NAME]: {
            bind: 'reset'
          },
          global_retargeting_reset_step: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
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

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      leftIcon: 'coronita:close',
      id: 'non-preapproved',
      className: 'header--grey',
      secondaryClass: 'header--core',
      titleName: 'non-preapproved-consumer-molecule-header-text',
      cellsConnections: {
        out: {
          go_back_page: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      type: 'modal',
      leftIcon: '',
      className: '',
      secondaryClass: '',
      rightIcon: 'coronita:close',
      rightIconText: 'non-preapproved-consumer-loan-close-label',
      variant: 'primary'
    }
  };

  const pdfAndCheckBox = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    tagSpherica: 'cells-step-card-checklist-contract-spherica',
    properties: {
      active: true,
      className: 'bureau-non-preapproved',
      consultText: '',
      hiddenHeader: true,
      stepTitle: '',
      cellsConnections: {
        in: {
          cells_step_card_checklist_properties: {
            bind: 'setProperties'
          }
        },
        out: {
          open_modal_alert_info: {
            bind: 'request-pdf'
          },
          [getChannelName('_continue_page_non_preapproved')]: {
            bind: 'continue-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      ambient: 'primary-alt',
      variantListFile: 'primary-alt',
      isButtonPrimary: true
    }
  };

  const subHeaderInfoImage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-image-text-amount-cover',
    tagSpherica: 'cells-image-text-amount-cover-spherica',
    properties: {
      headerImageSrc: './images/Bureau-Profile.svg',
      className: 'product-summary-bg-white-color alternative-title',
      title: 'non-preapproved-consumer-image-text-title',
      productSummaryText: 'non-preapproved-consumer-image-text'
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      className: '',
      headerImageSrc: './images/spherica/nonPreApprovedConsumerLoan/search-movements-glass.svg',
      title: 'non-preapproved-consumer-image-text-title',
      productSummaryText: 'non-preapproved-consumer-image-text'
    }
  };

  const dmNpConsumer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-non-pre-approved-consumer-loan-bureau',
    familyPath: '@glomo-web-components/bbva-manager-non-pre-approved-consumer-loan',
    render: 'litElement',
    properties: {
      images: {
        tipsDollar: './images/nonPreApprovedCreditCard/tips_dollar.svg',
        requestCancelledImage: './images/nonPreApprovedCreditCard/request_cancelled.svg',
        authorizationErrorGlass: './images/spherica/nonPreApprovedCreditCard/Authorization-Error.svg'
      },
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleBackNavigation'
          },
          global_control_status_opened: {
            bind: 'statusModalOpened'
          },
          global_control_status_closed: {
            bind: 'statusModalOpened'
          },
          global_user_id: {
            bind: 'cacheChannel'
          },
          ['init_page_' + PAGE_NAME]: {
            bind: 'pageProperties'
          },
          open_modal_alert_info: {
            bind: 'showAlertModal'
          },
          [getChannelName('_continue_page_non_preapproved')]: {
            bind: 'setPostCustomerTerms'
          },
          contract_product_section_oc_banner_non_preapproved_consumer_loan_clicked: {
            bind: 'initPage'
          },
          [getChannelName('_post_validate_digital_file_successful_response')]: {
            bind: 'successfulPostValidateDigitalFileResponse'
          },
          [getChannelName('_get_customer_terms_successful_response')]: {
            bind: 'getCustomerTermsSuccessfulResponse'
          },
          [getChannelName('_post_validate_digital_file_error_response')]: {
            bind: 'postValidateDigitalFileErrorResponse'
          },
          [getChannelName('_post_customer_terms_error_response')]: {
            bind: 'postCustomerTermsErrorResponse'
          }
        },
        out: {
          missing_data_channel: {
            bind: 'show-missing-documents-personal-data-modal',
            analytics: ANALYTICS.app_completed({ userSegmentProfile: LITERALS.preApprovedLoan.rejectionMissingDocuments, applicationState: LITERALS.commons.rejected })
          },
          global_hanlder_native_back_button: {
            bind: 'alert-HELP_INFO-accept'
          },
          non_pre_approved_consumer_loan_navigate_to_contract_product_section: {
            bind: 'navigate-contract-product-section',
            link: {
              page: 'contractProductSection',
              cleanUntil: 'nonPreApprovedConsumerLoanBureau'
            }
          },
          cells_step_card_checklist_properties: {
            bind: 'cells-step-card-checklist-properties'
          },
          close_control_veil: {
            bind: 'cells-step-card-checklist-properties'
          },
          global_open_alert_manager: {
            bind: 'dispatch-modal-config'
          },
          [getChannelName('_set_customer_id')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('_get_customer_terms')]: {
            bind: 'get-customer-terms'
          },
          [getChannelName('_post_customer_terms')]: {
            bind: 'post-customer-terms'
          },
          [getChannelName('_post_validate_digital_file')]: {
            bind: 'post-validate-digital-file'
          },
          [getChannelName('_open_modal_card_advice')]: {
            bind: 'open-with-config-modal-card-advice',
            analytics: ANALYTICS.app_completed({ userSegmentProfile: LITERALS.preApprovedLoan.rejectionFinancialHealth, applicationState: LITERALS.commons.rejected })
          },
          [getChannelName('_back_to_entry_point')]: {
            bind: 'back-to-entry-point',
            backStep: true
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          global_non_preapproved_set_offer_id: {
            bind: 'send-offer-id'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      alertBoxVariant: 'primary-alt',
      newCellsConnections: {
        add: {
          out: {
            nonPreApprovedConsumerLoanBureau_OPEN_MODAL_SPHERICA: {
              bind: 'dispatch-modal-config'
            },
            global_alert_manager_open_with_settings_spherica: {
              bind: 'showAlertModal'
            }
          }
        },
        remove: {
          out: [
            'global_open_alert_manager',
            'open_modal_alert_info'
          ]
        }
      }
    }
  };

  const cardAdviceModal = {
    zone: 'app__overlay',
    tag: 'cells-modal-card-advice',
    tagSpherica: 'cells-modal-card-advice-spherica',
    type: 'UI',
    properties: {
      iconSize: '20',
      className: 'image-size-m image-to-top header--white-core-blue without-padding-left-right-button',
      cardAdviceClass: 'content-description set-margin-top',
      cellsConnections: {
        in: {
          [getChannelName('_open_modal_card_advice')]: {
            bind: 'openWithConfig'
          }
        },
        out: {
          [getChannelName('_on_close_event')]: {
            bind: 'cells-confirm-buttons-click-primary',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'cells-confirm-buttons-click-primary'
          },
          [getChannelName('_on_close_event')]: {
            bind: 'close',
            backStep: true
          },
          [getChannelName('_on_icon_click')]: {
            bind: 'on-icon-click-place',
            link: {
              page: 'atmLocator'
            }
          }
        }
      }
    }
  };

  const ApiBgadpmock = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName('_set_customer_id')]: {
            bind: 'customerId'
          },
          global_user_id: {
            bind: 'customerId'
          },
          [getChannelName('_get_customer_terms')]: {
            bind: 'getCustomerTerms'
          },
          [getChannelName('_post_customer_terms')]: {
            bind: 'postCustomerTerms'
          }
        },
        out: {
          [getChannelName('_get_customer_terms_successful_response')]: {
            bind: 'set-customer-terms'
          },
          [getChannelName('_post_customer_terms_error_response')]: {
            bind: 'error-on-post-customer-terms'
          },
          [getChannelName('_post_customer_terms_successful_response')]: {
            bind: 'post-customer-terms',
            link: {
              page: 'nonPreApprovedConsumerLoan',
              skipHistory: true
            }
          },
          global_retargeting_go_next_step: {
            bind: 'post-customer-terms'
          }
        }
      }
    }
  };

  const customerApiMock = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName('_post_validate_digital_file')]: {
            bind: 'postValidateDigitalFile'
          }
        },
        out: {
          [getChannelName('_post_validate_digital_file_successful_response')]: {
            bind: 'successful-post-validate-digital-file'
          },
          [getChannelName('_post_validate_digital_file_error_response')]: {
            bind: 'failed-post-validate-digital-file'
          },
          global_retargeting_form_submission: {
            bind: 'successful-post-validate-digital-file'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/non-pre-approved-consumer-loan-bureau'
    },
    template,
    components: [
      lifeCicle,
      SPINNER,
      dmNpConsumer,
      subHeaderInfoImage,
      cardAdviceModal,
      ApiBgadpmock,
      customerApiMock,
      header,
      pdfAndCheckBox
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', 'nonPreApprovedConsumerLoanBureau', ['post-customer-terms', 'error-on-post-customer-terms']);
  connectionsOut(base)('cells-sign-operation-dm-mx').signature_required_type_non_pre_approved_consumer_loan_bureau_analytic = {
    bind: 'signature-required-type-nonPreApprovedConsumerLoanBureau',
    analytics: ANALYTICS.custom_get_advanced_footprint_with_level2(customAnalytics.otp)
  };

  addRetryErrors(base)([
    {
      id: 'RETRY-POST-VALIDATE-DIGITAL-FILE',
      acceptRetry: { bind: 'dispatchValidateDigitalfile', component: 'bbva-manager-non-pre-approved-consumer-loan-bureau' },
      cancelRetry: { bind: 'backToEntryPoint', component: 'bbva-manager-non-pre-approved-consumer-loan-bureau' },
      successEvent: { bind: 'successful-post-validate-digital-file', component: 'cells-dm-global-apis-customers-mx-bgadpmock' },
      acceptCallForHelp: { bind: 'backToEntryPoint', component: 'bbva-manager-non-pre-approved-consumer-loan-bureau' }
    },
    {
      id: 'RETRY-POST-CUSTOMER-TERMS',
      acceptRetry: { bind: 'setPostCustomerTerms', component: 'bbva-manager-non-pre-approved-consumer-loan-bureau' },
      cancelRetry: { bind: 'backToEntryPoint', component: 'bbva-manager-non-pre-approved-consumer-loan-bureau' },
      successEvent: { bind: 'post-customer-terms', component: 'cells-dm-global-apis-customers-bgadpmock' },
      acceptCallForHelp: { bind: 'backToEntryPoint', component: 'bbva-manager-non-pre-approved-consumer-loan-bureau' }
    }
  ]);
  return sphericaPageUtils.spherize(base);
};
