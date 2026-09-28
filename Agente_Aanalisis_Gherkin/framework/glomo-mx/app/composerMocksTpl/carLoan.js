/* eslint-disable new-cap, no-dupe-keys */
'use strict';

const docsTermsAndConditions = [{
  id: 'terms-and-conditions',
  icon: 'coronita:document',
  text: 'bbva-multistep-oc-car-loan-contracts-terms-document-files'
},
{
  id: 'credit-history',
  icon: 'coronita:document',
  text: 'bbva-multistep-oc-car-loan-contracts-terms-document-files-history-inquiry'
}];

const checksTermsAndConditions = [{
  name: 'check-1',
  value: '1',
  label: 'bbva-multistep-oc-car-loan-certificated-terms-and-conditions-check-list-1',
  checkIcon: 'bbva:checkmark',
  checked: false
},
{
  name: 'check-2',
  value: '2',
  label: 'bbva-multistep-oc-car-loan-certificated-terms-and-conditions-check-list-2',
  checkIcon: 'bbva:checkmark',
  checked: false
}];
const glomoOpenDocument = {
  zone: 'app__main',
  tag: 'cells-nativeconnector-open-document',
  familyPath: 'cells-nativeconnector-open-document',
  type: 'DM',
  properties: {
    cellsConnections: {
      in: {
        car_loan_open_pdf: {
          bind: 'openByUrl'
        }
      }
    }
  }
};

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const IS_NATIVE = !!CONFIG.native || false;
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const PAGE_NAME = 'carLoan';
  const pages = require('./common/_pages')(CONFIG)('carLoan');
  const SPINNER = utils.SPINNER(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const ANALYTICS_CAR_LOAN = require('./analytics/_carLoan')(CONFIG);
  const detailDownloadParams = utils.detailDownloadParams;
  detailDownloadParams.formatter = 'no-op';

  const CMB_CONFIG = {
    operativeName: PAGE_NAME,
    productName: 'CMB_Outbound_Auto_Live_v01',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: false,
      showInSummary: true
    },
    onlyCallMeBack: true,
    recoverySettings: true
  };

  const { controllerCallMeBack } = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(CMB_CONFIG);

  const base = {
    hash: 'car-loan',
    currentPage: {
      url: '/car-loan',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'bbva-core-blue',
        disableEdgeSwipe: true,
        headerFixed: true,
        className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
        iOSFixedHeader: IS_NATIVE_IOS
      }
    },
    components: [
      SPINNER,
      controllerCmb,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_carLoan: {
                bind: 'init'
              }
            },
            out: {
              car_loan_page_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS_CAR_LOAN.appPageVisitSimulatorStep
              },
              car_loan_recalculate_header: {
                bind: 'init-page'
              },
              car_loan_open_control_veil: {
                bind: 'reset'
              },
              global_call_me_back_initialize: {
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
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          rightSecondaryIcon: 'coronita:telephone',
          rightIcon: 'coronita:close',
          rightIconSize: '20',
          continue: 'dashboard',
          titleName: 'bbva-oc-car-loan-pre-approved-header-title',
          setTimeoutHideTooltip: 3000,
          titleTooltip: 'bbva-oc-car-loan-pre-approved-tooltip-title',
          contentLink: 'bbva-oc-car-loan-pre-approved-tooltip-content-link',
          contentTooltip: 'bbva-oc-car-loan-pre-approved-tooltip-content',
          tooltipTextColor: 'white',
          tooltipBackgroundColor: '#1973b8',
          tooltipCloseColor: 'white',
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'setColorsTooltip'
              },
              car_loan_header_icon_CMB: {
                bind: 'rightSecondaryIcon'
              },
              car_loan_flag_tooltip_CMB: {
                bind: 'hasDisplayedTooltip'
              },
              car_loan_show_tooltip_time: {
                bind: 'setTimeoutShowTooltip'
              }
            },
            out: {
              car_loan_exit_validation: {
                bind: 'click-right-button'
              },
              global_call_me_back_init_header_configuration: {
                bind: 'click-right-secondary-button',
                analytics: ANALYTICS_CAR_LOAN.getInternalFootprint('icono telefono call me back', '1 datos solicitud')
              },
              _HEADER_RIGHT_ICON_TAPPED: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        type: 'UI',
        zone: 'app__overlay',
        tag: 'bbva-progress-content',
        familyPath: '@bbva-web-components/bbva-progress-content',
        render: 'litElement',
        properties: {
          withMask: true,
          iOSFixedHeader: IS_NATIVE_IOS,
          cellsConnections: {
            in: {
              car_loan_open_control_veil: {
                bind: 'show'
              },
              car_loan_close_control_veil: {
                bind: 'hide'
              },
              contract_product_section_oc_banner_car_loan_clicked: {
                bind: 'show'
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
          continue: 'car-loan-success-page',
          backAction: 'navigation-to-previous-page',
          cellsConnections: {
            in: {
              car_loan_exit_confirmation: {
                bind: 'goBack'
              },
              car_loan_send_contract_details: {
                bind: 'navigate'
              },
              car_loan_second_advice: {
                bind: 'navigate'
              },
              car_loan_send_advice: {
                bind: 'navigate'
              },
              car_loan_send_description_advice: {
                bind: 'navigate'
              },
              car_loan_hidden_advice: {
                bind: 'navigate'
              },
              car_loan_send_date: {
                bind: 'navigate'
              }
            },
            out: {
              navigate_configure_products_to_settings: {
                bind: 'navigation-to-previous-page',
                backStep: true
              },
              global_retargeting_send_information_update: {
                bind: 'navigation-to-previous-page'
              },
              navigation_car_loan_to_car_loan_success: {
                bind: 'navigation-to-car-loan-success-page',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              global_retargeting_contracted_product: {
                bind: 'navigation-to-car-loan-success-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-multistep-oc-car-loan-pre-approved',
        familyPath: '@glomo-web-components/bbva-multistep-oc-car-loan',
        render: 'litElement',
        properties: {
          currencyCode: utils.getLocalCurrency(),
          localCurrency: utils.getLocalCurrency(),
          language: utils.getLanguage(),
          currentStep: 1,
          contractDocs: docsTermsAndConditions,
          checks: checksTermsAndConditions,
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'showCallMeBackFlag'
              },
              global_call_me_back_show_summary_button: {
                bind: 'footerLink'
              },
              car_loan_send_email: {
                bind: 'userEmail'
              },
              car_loan_send_items: {
                bind: 'items'
              },
              car_loan_send_amount_data: {
                bind: 'amountData'
              },
              car_loan_send_slider_properties: {
                bind: 'sliderProperty'
              },
              car_loan_send_key_items: {
                bind: 'keyInfo'
              },
              car_loan_send_custom_message: {
                bind: 'customMessage'
              },
              car_loan_send_sticky_data: {
                bind: 'stickyPayload'
              },
              car_loan_send_key_info_payment: {
                bind: 'keyInfoPayment'
              },
              car_loan_send_customer_phone: {
                bind: 'userPhone'
              },
              car_loan_send_native_customer_phone: {
                bind: 'userPhone'
              },
              car_loan_send_data_modal_success: {
                bind: 'openSuccessModal'
              },
              car_loan_exit_validation: {
                bind: 'validateExitConfirmation'
              },
              car_loan_modal_leave_contract_footer_button_click: {
                bind: 'exit'
              },
              car_loan_exit_confirmation: {
                bind: 'reset'
              },
              send_open_web_flag: {
                bind: 'setCallMeBackFlag'
              }
            },
            out: {
              car_loan_call_me_back_flag_value: {
                bind: 'car-loan-show-call-me-back-flag-value'
              },
              global_call_me_back_init_header_configuration: {
                bind: 'car-loan-open-call-me-back-from-sticky',
                analytics: ANALYTICS_CAR_LOAN.getInternalFootprint('quiero que me llame un asesor', '1 datos solicitud')
              },
              pdf_info: {
                bind: 'car-loan-open-PDF'
              },
              car_loan_send_slider_selected: {
                bind: 'slider-selected-changed'
              },
              car_loan_send_item_selected_index: {
                bind: 'item-selected-index-changed'
              },
              global_retargeting_car_type: {
                bind: 'item-selected-index-changed'
              },
              car_loan_send_amount: {
                bind: 'amount-changed'
              },
              car_loan_get_credit: {
                bind: 'get-credit'
              },
              car_loan_modal_rate_monthly: {
                bind: 'car-loan-modal-rate-monthly'
              },
              car_loan_modal_opening_comission: {
                bind: 'car-loan-modal-opening-comission'
              },
              car_loan_modal_CAT: {
                bind: 'car-loan-modal-cat'
              },
              car_loan_modal_downpayment: {
                bind: 'car-loan-modal-downpayment'
              },
              car_loan_modal_considerations: {
                bind: 'car-loan-modal-considerations'
              },
              car_loan_modal_terms_and_conditions: {
                bind: 'car-loan-modal-terms-and-conditions',
                analytics: ANALYTICS_CAR_LOAN.footprintTyC
              },
              car_loan_modal_credit_history: {
                bind: 'car-loan-modal-credit-history',
                analytics: ANALYTICS_CAR_LOAN.getAdvancedFootprint('consulta historial crediticio')
              },
              car_loan_modal_privacy_notice: {
                bind: 'car-loan-modal-privacy-notice'
              },
              car_loan_modal_leave_contract: {
                bind: 'car-loan-modal-leave-contract'
              },
              car_loan_exit_confirmation: {
                bind: 'car-loan-exit-confirmation'
              },
              car_loan_step_terms_conditions_completed: {
                bind: 'current-step-1-changed',
                analytics: ANALYTICS_CAR_LOAN.getOfferStepAnalytic('2', '2 terminos y condiciones')
              },
              global_retargeting_go_next_step_continue: {
                bind: 'current-step-1-changed'
              },
              car_loan_step_summary_completed: {
                bind: 'all-completed-changed',
                analytics: ANALYTICS_CAR_LOAN.getOfferStepAnalytic('3', '3 confirmacion')
              },
              global_retargeting_go_next_step: {
                bind: 'all-completed-changed'
              },
              car_loan_step_interaction: {
                bind: 'interaction-changed',
                analytics: ANALYTICS_CAR_LOAN.appStartedSimulatorStep
              },
              car_loan_open_control_veil: {
                bind: 'show-spinner'
              },
              car_loan_close_control_veil: {
                bind: 'hide-spinner'
              },
              car_loan_edit_previous_step: {
                bind: 'header-category-link-click',
                analytics: ANALYTICS_CAR_LOAN.getInternalFootprint('modificar oferta', '3 confirmacion')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-oc-car-loan-pre-approved',
        familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
        render: 'litElement',
        properties: {
          detailDocument: detailDownloadParams,
          paramsUrl: true,
          otpId: 'carLoan',
          errorImage: './images/general_error.svg',
          host: CONFIG.globalServices.host,
          loansApiVersion: CONFIG.globalServices.versions.loans,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          translation: {
            NUEVO: 'new',
            SEMINUEVO: 'preowned'
          },
          cellsConnections: {
            in: {
              car_loan_call_me_back_flag_value: {
                bind: 'showCallMeBackHeader'
              },
              global_user: {
                bind: 'setCustomerData'
              },
              global_login_success: {
                bind: 'setCustomerPhoneNumber'
              },
              native_user_id: {
                bind: 'setNativePhoneNumber'
              },
              dashboard_customer_email: {
                bind: 'setUserEmail'
              },
              car_loan_page_init_page: {
                bind: 'init'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'processOfferDetail'
              },
              car_loan_send_slider_selected: {
                bind: 'sliderSelected'
              },
              car_loan_send_item_selected_index: {
                bind: 'itemSelectedIndex'
              },
              car_loan_send_amount: {
                bind: 'amountSelected'
              },
              car_loan_get_credit: {
                bind: 'requestCarLoan'
              },
              car_loan_modal_rate_monthly: {
                bind: 'showModal'
              },
              car_loan_modal_opening_comission: {
                bind: 'showModal'
              },
              car_loan_modal_CAT: {
                bind: 'showModal'
              },
              car_loan_modal_downpayment: {
                bind: 'showModal'
              },
              car_loan_modal_privacy_notice: {
                bind: 'showModal'
              },
              car_loan_modal_considerations: {
                bind: 'showModal'
              },
              car_loan_modal_terms_and_conditions: {
                bind: 'showModalTerms'
              },
              car_loan_modal_credit_history: {
                bind: 'showModal'
              },
              car_loan_modal_privacy_notice: {
                bind: 'showModal'
              },
              car_loan_modal_leave_contract: {
                bind: 'showModalConfirmExit'
              },
              pdf_info: {
                bind: 'openPDF'
              },
              car_loan_step_summary_completed: {
                bind: 'carLoanData'
              },
              call_me_back_exit_operative: {
                bind: 'fromCallbackChecker'
              },
              car_loan_exit_confirmation: {
                bind: 'toCPSChecker'
              }
            },
            out: {
              car_loan_header_icon_CMB: {
                bind: 'car-loan-icon-CMB-flag'
              },
              car_loan_flag_tooltip_CMB: {
                bind: 'car-loan-toolTip-flag'
              },
              car_loan_show_tooltip_time: {
                bind: 'car-loan-toolTip-time-show'
              },
              request_features_open_web_channel: {
                bind: 'car-loan-request-CMB-flag-enabled',
                'forward-to-native': true
              },
              car_loan_open_pdf: {
                bind: 'car-loan-open-pdf-from-url-request'
              },
              get_customer_contacts: {
                bind: 'get-customer-contacts'
              },
              set_customer_id: {
                bind: 'car-loan-customer-id-set'
              },
              post_customer_terms: {
                bind: 'car-loan-customer-terms-request'
              },
              car_loan_open_document: {
                bind: 'car-loan-pdf'
              },
              car_loan_send_email: {
                bind: 'user-email-changed'
              },
              car_loan_send_items: {
                bind: 'items-changed'
              },
              car_loan_send_amount_data: {
                bind: 'amount-data-changed'
              },
              global_retargeting_amount_data: {
                bind: 'amount-data-changed'
              },
              car_loan_send_slider_properties: {
                bind: 'slider-property-changed'
              },
              global_retargeting_slider_properties: {
                bind: 'slider-property-changed'
              },
              car_loan_send_key_items: {
                bind: 'key-info-changed'
              },
              car_loan_send_custom_message: {
                bind: 'custom-message-changed'
              },
              car_loan_send_sticky_data: {
                bind: 'sticky-data-changed'
              },
              car_loan_send_key_info_payment: {
                bind: 'key-info-payment-changed'
              },
              car_loan_open_control_veil: {
                bind: 'bbva-manager-oc-car-loan-spinner-show'
              },
              car_loan_close_control_veil: {
                bind: 'bbva-manager-oc-car-loan-spinner-hide'
              },
              global_retargeting_form_submission: {
                bind: 'bbva-manager-oc-car-loan-spinner-hide'
              },
              car_loan_customer_phone: {
                bind: 'phone-user-changed'
              },
              car_loan_send_monthly_payment: {
                bind: 'bbva-manager-oc-car-loan-monthly-payment-send'
              },
              car_loan_send_response: {
                bind: 'bbva-manager-oc-car-loan-response-send'
              },
              car_loan_send_native_customer_phone: {
                bind: 'car-loan-send-native-customer-phone'
              },
              car_loan_send_customer_phone: {
                bind: 'car-loan-send-customer-phone'
              },
              car_loan_send_contract_details: {
                bind: 'bbva-manager-oc-car-loan-modal-success-contract-details-send',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              car_loan_send_taxes_and_cost: {
                bind: 'bbva-manager-oc-car-loan-modal-success-taxes-and-costs-send',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              car_loan_send_folio: {
                bind: 'bbva-manager-oc-car-loan-modal-success-folio-send',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              car_loan_second_advice: {
                bind: 'car-loan-modal-success-second-advice',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              car_loan_send_advice: {
                bind: 'car-loan-modal-success-advice',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              car_loan_send_description_advice: {
                bind: 'bbva-manager-oc-car-loan-description-advice-send',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              car_loan_hidden_advice: {
                bind: 'bbva-manager-oc-car-loan-modal-advice-hide',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              car_loan_send_date: {
                bind: 'bbva-manager-oc-car-loan-modal-success-date-send',
                link: {
                  page: 'carLoanSuccessPage'
                }
              },
              global_retry_error: {
                bind: 'car-loan-error-modal'
              },
              sign_modal_close_spinner: {
                bind: 'car-loan-sign-modal-close-spinner'
              },
              sign_modal_close: {
                bind: 'car-loan-sign-modal-close'
              },
              car_loan_sign_request: {
                bind: 'car-loan-data-otp-send',
                analytics: ANALYTICS_CAR_LOAN.getOfferStepAnalytic('4', '4 otp')
              },
              global_retargeting_go_next_step: {
                bind: 'car-loan-data-otp-send'
              },
              car_loan_succes_data: {
                bind: 'bbva-manager-oc-car-loan-success-data-send',
                analytics: ANALYTICS_CAR_LOAN._getAppCompleted('default')
              },
              car_loan_reject_data: {
                bind: 'bbva-manager-oc-car-loan-reject-bureau-response-send',
                analytics: ANALYTICS_CAR_LOAN._getAppCompleted('rejected')
              },
              car_loan_reject_underage_data: {
                bind: 'bbva-manager-oc-car-loan-reject-under-age-response-send',
                analytics: ANALYTICS_CAR_LOAN._getAppCompleted('rejectedUnderRage')
              },
              car_loan_error_proposal: {
                bind: 'post-proposal-v1-error',
                analytics: ANALYTICS_CAR_LOAN.getErrorFootprint('error carga de recibo')
              },
              car_loan_event_modal_cost_open_open_modal_cat: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-cat-modal-opening',
                analytics: ANALYTICS_CAR_LOAN.getAdvancedFootprint('costos cat')
              },
              car_loan_event_modal_cost_open_open_modal_opening_comission: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-opening-comission-modal-opening',
                analytics: ANALYTICS_CAR_LOAN.getAdvancedFootprint('costos de emision')
              },
              car_loan_event_modal_cost_open_open_modal_rate_monthly: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-rate-monthly-modal-opening',
                analytics: ANALYTICS_CAR_LOAN.getAdvancedFootprint('costos tasa de interes')
              },
              car_loan_event_modal_cost_open_modal_set_header_text: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-header-text'
              },
              car_loan_event_modal_cost_open_modal_set_title_icon: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-icon'
              },
              car_loan_event_modal_cost_open_modal_set_title_text: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-text'
              },
              car_loan_event_modal_cost_open_modal_set_button_text: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-button-text'
              },
              car_loan_event_modal_cost_open_panel_set_hidden: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hidden'
              },
              car_loan_event_modal_cost_open_text_set_text_1: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-1'
              },
              car_loan_event_modal_cost_open_text_set_text_color_1: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-1'
              },
              car_loan_event_modal_cost_open_text_set_hidden_1: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-1'
              },
              car_loan_event_modal_cost_open_text_set_text_2: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-2'
              },
              car_loan_event_modal_cost_open_text_set_alignment_2: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-alignment-2'
              },
              car_loan_event_modal_cost_open_text_set_text_color_2: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-2'
              },
              car_loan_event_modal_cost_open_text_set_font_weight_2: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-font-weight-2'
              },
              car_loan_event_modal_cost_open_text_set_size_2: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-size-2'
              },
              car_loan_event_modal_cost_open_text_set_hidden_2: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-2'
              },
              car_loan_event_modal_cost_open_open_modal: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-open-modal'
              },
              car_loan_event_modal_cost_open_panel_set_image: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-image'
              },
              car_loan_event_modal_cost_open_panel_set_heading: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-heading'
              },
              car_loan_event_modal_cost_open_panel_set_hide_padding_bottom: {
                bind: 'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hide-padding-bottom'
              },
              car_loan_modal_terms_and_conditions_modal_set_title_text: {
                bind: 'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-modal-set-title-text'
              },
              car_loan_modal_terms_and_conditions_modal_set_button_text: {
                bind: 'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-modal-set-button-text'
              },
              car_loan_modal_terms_and_conditions_panel_set_hidden: {
                bind: 'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-panel-set-hidden'
              },
              car_loan_modal_terms_and_conditions_text_set_hidden_1: {
                bind: 'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-text-set-hidden-1'
              },
              car_loan_modal_terms_and_conditions_open_modal: {
                bind: 'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-open-modal'
              },
              car_loan_modal_reject_bureau_modal_set_title_text: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-title-text'
              },
              car_loan_modal_reject_bureau_modal_set_button_text: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-button-text'
              },
              car_loan_modal_reject_bureau_panel_set_hidden: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-panel-set-hidden'
              },
              car_loan_modal_reject_bureau_panel_set_microillustration_type: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-microillustration-type'
              },
              car_loan_modal_reject_bureau_panel_set_heading: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-heading'
              },
              car_loan_modal_reject_bureau_panel_set_hide_padding_bottom: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-hide-padding-bottom'
              },
              car_loan_modal_reject_bureau_text_set_hidden_1: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-1'
              },
              car_loan_modal_reject_berau_text_set_text_1: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-text-1'
              },
              car_loan_modal_reject_bureau_text_set_text_2: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-text-2'
              },
              car_loan_modal_reject_bureau_text_set_alignment_2: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-alignment-2'
              },
              car_loan_modal_reject_bureau_text_set_font_weight_2: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-font-weight-2'
              },
              car_loan_modal_reject_bureau_text_set_text_color_2: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-text-color-2'
              },
              car_loan_modal_reject_bureau_text_set_size_2: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-size-2'
              },
              car_loan_modal_reject_bureau_text_set_hidden_2: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-2'
              },
              car_loan_modal_reject_bureau_open_modal: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-open-modal'
              },
              car_loan_modal_reject_open_modal_exceeds_permitted_proposals: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-exceeds-permitted-proposals-modal-opening',
                analytics: ANALYTICS_CAR_LOAN.getErrorFootprint('error cotizacion incompleta recibir llamada')
              },
              car_loan_modal_reject_open_modal_invalid_age: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-invalid-age-modal-opening'
              },
              car_loan_modal_reject_open_modal_unqualified_customer: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-unqualified-customer-modal-opening',
                analytics: ANALYTICS_CAR_LOAN.getErrorFootprint('error problemas historial crediticio')
              },
              car_loan_modal_reject_open_modal_reject_from_score: {
                bind: 'manager-oc-car-loan-pre-approved-modal-reject-bureau-reject-from-score-modal-opening',
                analytics: ANALYTICS_CAR_LOAN.getErrorFootprint('error problema completar solicitud')
              },
              car_loan_modal_leave_contract_modal_set_button_text: {
                bind: 'manager-oc-car-loan-pre-approved-modal-leave-contract-modal-set-button-text'
              },
              car_loan_modal_leave_contract_modal_set_link_text: {
                bind: 'manager-oc-car-loan-pre-approved-modal-leave-contract-modal-set-link-text'
              },
              car_loan_modal_leave_contract_panel_set_hidden: {
                bind: 'manager-oc-car-loan-pre-approved-modal-leave-contract-panel-set-hidden'
              },
              car_loan_modal_leave_contract_text_set_hidden_1: {
                bind: 'manager-oc-car-loan-pre-approved-modal-leave-contract-text-set-hidden-1'
              },
              car_loan_modal_leave_contract_open_modal: {
                bind: 'manager-oc-car-loan-pre-approved-modal-leave-contract-open-modal'
              }
            },
            params: {
              offerId: 'offerId'
            }
          },
          'helpModalConfigs': {
            'eventModalCostOpen': {
              'downpayment': {
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-header-text': 'bbva-modal-oc-car-loan-considerations-down-payment',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-icon': 'bbva:help',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-text': 'bbva-modal-oc-car-loan-considerations-down-payment',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hidden': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-1': 'bbva-modal-oc-car-loan-considerations-paragraph-1',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-1': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-2': 'bbva-modal-oc-car-loan-considerations-paragraph-2',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-alignment-2': 'center',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-2': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-font-weight-2': '300',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-size-2': 'S',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-2': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-open-modal': true
              },
              'considerations': {
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-header-text': 'bbva-modal-oc-car-loan-considerations',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-icon': 'bbva:help',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-text': 'bbva-modal-oc-car-loan-considerations-down-payment',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hidden': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-1': 'bbva-modal-oc-car-loan-considerations-paragraph-1',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-1': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-2': 'bbva-modal-oc-car-loan-considerations-paragraph-2',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-alignment-2': 'center',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-2': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-font-weight-2': '300',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-size-2': 'S',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-2': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-open-modal': true
              },
              'rate-monthly': {
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-header-text': 'bbva-modal-oc-car-loan-annual-fixed-interest',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-icon': 'bbva:help',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-text': 'bbva-modal-oc-car-loan-annual-fixed-interest',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hidden': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-1': 'bbva-modal-oc-car-loan-annual-fixed-interest-paragraph-1',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-1': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-2': 'bbva-modal-oc-car-loan-annual-fixed-interest-paragraph-2',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-alignment-2': 'center',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-2': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-font-weight-2': '300',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-size-2': 'S',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-2': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-open-modal': true
              },
              'opening-comission': {
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-header-text': 'bbva-oc-car-loan-commission-for-opening',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-icon': 'bbva:help',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-text': 'bbva-oc-car-loan-commission-for-opening',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hidden': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-1': 'bbva-modal-oc-car-loan-commission-for-opening-modal-paragraph-3',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-1': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-2': 'bbva-modal-oc-car-loan-commission-for-opening-modal-paragraph-4',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-alignment-2': 'center',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-2': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-font-weight-2': '300',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-size-2': 'S',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-2': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-open-modal': true
              },
              'cat': {
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-header-text': 'bbva-modal-oc-car-loan-total-annual-cost-title',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-icon': 'bbva:help',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-text': 'bbva-oc-car-loan-total-annual-cost-title',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hidden': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-1': 'bbva-oc-car-loan-total-annual-cost-paragraph-1',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-1': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-2': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-open-modal': true
              },
              'credit-history': {
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-header-text': 'bbva-modal-oc-car-loan-credit-header-history-inquiry',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-text': '',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-icon': '',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-image': './images/bbva-logo2.svg',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-heading': 'bbva-modal-oc-car-loan-credit-history-inquiry',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hide-padding-bottom': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hidden': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-1': 'bbva-modal-oc-car-loan-credit-history-inquiry-paragraph-1',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-1': '#121212',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-2': 'bbva-modal-oc-car-loan-credit-history-inquiry-paragraph-2',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-alignment-2': 'center',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-2': '#121212',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-font-weight-2': '300',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-size-2': 'S',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-2': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-open-modal': true
              },
              'privacy-notice': {
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-header-text': 'bbva-oc-car-loan-pre-approved-privacy-notice',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-icon': 'bbva:help',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-title-text': 'bbva-oc-car-loan-pre-approved-privacy-notice',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-panel-set-hidden': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-1': 'bbva-oc-car-loan-privacy-notice-paragraph-1',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-text-color-1': '#666666',
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-text-set-hidden-2': true,
                'manager-oc-car-loan-pre-approved-event-modal-cost-open-open-modal': true
              }
            },
            'modalTermsAndConditions': {
              'terms-and-conditions': {
                'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-modal-set-title-text': 'bbva-oc-car-loan-terms-and-conditions',
                'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-panel-set-hidden': true,
                'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-modal-terms-and-conditions-open-modal': true
              }
            },
            'modalRejectBureau': {
              'reject-bureau': {
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-title-text': '',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-panel-set-hidden': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-microillustration-type': 'requestcancelled',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-heading': 'bbva-modal-oc-car-loan-rejection-by-bureau-heading',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-hide-padding-bottom': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-text-1': 'bbva-modal-oc-car-loan-rejection-by-bureau-paragraph',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-text-2': 'bbva-modal-oc-car-loan-rejection-by-bureau-paragraph-2',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-alignment-2': 'center',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-font-weight-2': '500',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-text-color-2': '#121212',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-size-2': 'S',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-2': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-open-modal': true
              },
              'exceeds-permitted-proposals': {
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-title-text': '',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-button-text': 'bbva-oc-car-loan-pre-approved-exit',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-panel-set-hidden': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-microillustration-type': 'phoneassistance',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-heading': 'bbva-modal-oc-car-loan-rejection-by-exceeds-permitted-proposals-heading',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-hide-padding-bottom': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-text-1': 'bbva-modal-oc-car-loan-rejection-by-exceeds-permitted-proposals-paragraph',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-2': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-open-modal': true
              },
              'invalid-age': {
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-title-text': '',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-button-text': 'bbva-oc-car-loan-button-text-understood',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-panel-set-hidden': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-microillustration-type': 'requestcancelled',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-heading': 'bbva-modal-oc-car-loan-rejection-by-invalid-age-heading',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-hide-padding-bottom': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-text-1': 'bbva-modal-oc-car-loan-rejection-by-invalid-age-paragraph',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-2': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-open-modal': true
              },
              'unqualified-customer': {
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-title-text': '',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-button-text': 'bbva-oc-car-loan-pre-approved-exit',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-panel-set-hidden': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-microillustration-type': 'requestcancelled',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-heading': 'bbva-modal-oc-car-loan-rejection-by-unqualified-customer-heading',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-hide-padding-bottom': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-text-1': 'bbva-modal-oc-car-loan-rejection-by-unqualified-customer-paragraph',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-2': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-open-modal': true
              },
              'reject-from-score': {
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-title-text': '',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-modal-set-button-text': 'bbva-oc-car-loan-pre-approved-exit',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-panel-set-hidden': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-microillustration-type': 'requestcancelled',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-heading': 'bbva-modal-oc-car-loan-rejection-by-score-heading',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-hide-padding-bottom': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-set-text-1': 'bbva-modal-oc-car-loan-rejection-by-score-paragraph',
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-text-set-hidden-2': true,
                'manager-oc-car-loan-pre-approved-modal-reject-bureau-open-modal': true
              }
            },
            'modalLeaveContract': {
              'leave-contract': {
                'manager-oc-car-loan-pre-approved-modal-leave-contract-modal-set-button-text': 'bbva-modal-oc-car-loan-button-text-exit',
                'manager-oc-car-loan-pre-approved-modal-leave-contract-modal-set-link-text': 'bbva-modal-oc-car-loan-link-text-return',
                'manager-oc-car-loan-pre-approved-modal-leave-contract-panel-set-hidden': true,
                'manager-oc-car-loan-pre-approved-modal-leave-contract-text-set-hidden-1': false,
                'manager-oc-car-loan-pre-approved-modal-leave-contract-open-modal': true
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        familyPath: 'cells-dm-global-apis-customers-bgadpmock',
        tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          apiAggregatorApiVersion: CONFIG.globalServices.versions.apiAggregatorV1,
          otpId: PAGE_NAME,
          native: IS_NATIVE,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          returnTsec: true,
          cellsConnections: {
            in: {
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              set_customer_id: {
                bind: 'customerId'
              },
              get_customer_contacts: {
                bind: 'getCustomerContacts'
              },
              patch_economic_data: {
                bind: 'patchEconomicData'
              },
              post_customer_terms: {
                bind: 'postCustomerTerms'
              },
              get_customer_digital_file: {
                bind: 'postValidateDigitalFile'
              }
            },
            out: {
              set_customer_contacts: {
                bind: 'set-customer-contacts'
              },
              patch_economic_data_success: {
                bind: 'patch-customer-economic-data'
              },
              patch_economic_data_error: {
                bind: 'error-on-patch-economic-data'
              },
              post_customer_terms_success: {
                bind: 'post-customer-terms'
              },
              post_customer_terms_error: {
                bind: 'error-on-post-customer-terms'
              },
              validate_digital_file_success: {
                bind: 'successful-post-validate-digital-file'
              },
              validate_digital_file_error: {
                bind: 'failed-post-validate-digital-file'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        container: true,
        properties: {
          id: 'eventModalCostOpen',
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal-three-level',
          hideContentPaddingTop: true,
          cellsConnections: {
            in: {
              native_back_button_clicked_close_modal: {bind: 'close'},
              car_loan_event_modal_cost_open_open_modal: { bind: 'open' },
              car_loan_event_modal_cost_open_modal_set_header_text: { bind: 'headerText' },
              car_loan_event_modal_cost_open_modal_set_title_icon: { bind: 'titleIcon' },
              car_loan_event_modal_cost_open_modal_set_title_text: { bind: 'titleText' },
              car_loan_event_modal_cost_open_modal_set_button_text: { bind: 'buttonText' }
            },
            out: {
              cells_to_native_modal_opened: {
                'bind': 'help-modal-open',
                'forward-to-native': true
              },
              cells_to_native_modal_closed: {
                'bind': 'help-modal-close',
                'forward-to-native': true
              },
              car_loan_event_modal_cost_open_footer_button_click: {
                bind: 'help-modal-footer-button-click'
              },
              car_loan_event_modal_cost_open_footer_link_click: { bind: 'help-modal-footer-link-click' }
            }
          }
        }
      },
      {
        zone: 'eventModalCostOpen.slot-content',
        type: 'UI',
        tag: 'bbva-panel-info',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        properties: {
          id: 'eventModalCostOpenPanelInfo',
          cellsConnections: {
            in: {
              car_loan_event_modal_cost_open_panel_set_hidden: { bind: 'hidden' },
              car_loan_event_modal_cost_open_panel_set_image: { bind: 'image' },
              car_loan_event_modal_cost_open_panel_set_heading: { bind: 'heading' },
              car_loan_event_modal_cost_open_panel_set_hide_padding_bottom: { bind: 'hidePaddingBottom' }
            }
          }
        }
      },
      {
        zone: 'eventModalCostOpen.slot-content',
        type: 'UI',
        tag: 'div',
        render: 'litElement',
        properties: { id: 'div_eventModalCostOpen' }
      },
      {
        zone: 'eventModalCostOpen.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          id: 'eventModalCostOpenText1',
          alignment: 'center',
          fontWeight: '300',
          tag: 'span',
          size: 'S',
          cellsConnections: {
            in: {
              car_loan_event_modal_cost_open_text_set_text_1: { bind: 'text' },
              car_loan_event_modal_cost_open_text_set_text_color_1: { bind: 'textColor' },
              car_loan_event_modal_cost_open_text_set_hidden_1: { bind: 'hidden' }
            }
          }
        }
      },
      {
        zone: 'eventModalCostOpen.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          id: 'eventModalCostOpenText2',
          cellsConnections: {
            in: {
              car_loan_event_modal_cost_open_text_set_text_2: { bind: 'text' },
              car_loan_event_modal_cost_open_text_set_alignment_2: { bind: 'alignment' },
              car_loan_event_modal_cost_open_text_set_text_color_2: { bind: 'textColor' },
              car_loan_event_modal_cost_open_text_set_font_weight_2: { bind: 'fontWeight' },
              car_loan_event_modal_cost_open_text_set_size_2: { bind: 'size' },
              car_loan_event_modal_cost_open_text_set_hidden_2: { bind: 'hidden' }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        container: true,
        properties: {
          id: 'modalTermsAndConditions',
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal-three-level',
          headerText: 'bbva-oc-car-loan-terms-and-conditions',
          titleIcon: 'bbva:help',
          hideContentPaddingTop: true,
          cellsConnections: {
            in: {
              native_back_button_clicked_close_modal: {bind: 'close'},
              car_loan_modal_terms_and_conditions_open_modal: { bind: 'open' },
              car_loan_modal_terms_and_conditions_modal_set_title_text: { bind: 'titleText' },
              car_loan_modal_terms_and_conditions_modal_set_button_text: { bind: 'buttonText' }
            },
            out: {
              cells_to_native_modal_opened: {
                'bind': 'help-modal-open',
                'forward-to-native': true
              },
              cells_to_native_modal_closed: {
                'bind': 'help-modal-close',
                'forward-to-native': true
              },
              car_loan_modal_terms_and_conditions_footer_button_click: {
                bind: 'help-modal-footer-button-click'
              },
              car_loan_modal_terms_and_conditions_footer_link_click: { bind: 'help-modal-footer-link-click' }
            }
          }
        }
      },
      {
        zone: 'modalTermsAndConditions.slot-content',
        type: 'UI',
        tag: 'div',
        render: 'litElement',
        container: true,
        properties: { id: 'div_modalTermsAndConditions' }
      },
      {
        zone: 'div_modalTermsAndConditions.',
        type: 'UI',
        tag: 'bbva-list-bullet',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        render: 'litElement',
        container: true,
        properties: { id: 'list_bulletmodalTermsAndConditions_0' }
      },
      {
        zone: 'list_bulletmodalTermsAndConditions_0.',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          text: 'bbva-modal-oc-car-loan-terms-and-conditions-item-6',
          tag: 'span',
          textColor: '#121212',
          fontWeight: '300',
          size: 'S',
          cellsConnections: {
            in: {
              car_loan_modal_terms_and_conditions_text_set_hidden_1: { bind: 'hidden' }
            }
          }
        }
      },
      {
        zone: 'div_modalTermsAndConditions.',
        type: 'UI',
        tag: 'bbva-list-bullet',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        render: 'litElement',
        container: true,
        properties: { id: 'list_bulletmodalTermsAndConditions_1' }
      },
      {
        zone: 'list_bulletmodalTermsAndConditions_1.',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          text: 'bbva-modal-oc-car-loan-terms-and-conditions-item-7',
          tag: 'span',
          textColor: '#121212',
          fontWeight: '300',
          size: 'S'
        }
      },
      {
        zone: 'div_modalTermsAndConditions.',
        type: 'UI',
        tag: 'bbva-list-bullet',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        render: 'litElement',
        container: true,
        properties: { id: 'list_bulletmodalTermsAndConditions_2' }
      },
      {
        zone: 'list_bulletmodalTermsAndConditions_2.',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          text: 'bbva-modal-oc-car-loan-terms-and-conditions-item-8',
          tag: 'span',
          textColor: '#121212',
          fontWeight: '300',
          size: 'S'
        }
      },
      {
        zone: 'div_modalTermsAndConditions.',
        type: 'UI',
        tag: 'bbva-list-bullet',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        render: 'litElement',
        container: true,
        properties: { id: 'list_bulletmodalTermsAndConditions_3' }
      },
      {
        zone: 'list_bulletmodalTermsAndConditions_3.',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          text: 'bbva-modal-oc-car-loan-terms-and-conditions-item-9',
          tag: 'span',
          textColor: '#121212',
          fontWeight: '300',
          size: 'S'
        }
      },
      {
        zone: 'div_modalTermsAndConditions.',
        type: 'UI',
        tag: 'bbva-list-bullet',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        render: 'litElement',
        container: true,
        properties: { id: 'list_bulletmodalTermsAndConditions_4' }
      },
      {
        zone: 'list_bulletmodalTermsAndConditions_4.',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          text: 'bbva-modal-oc-car-loan-terms-and-conditions-item-10',
          tag: 'span',
          textColor: '#121212',
          fontWeight: '300',
          size: 'S'
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        container: true,
        properties: {
          id: 'modalRejectBureau',
          fullHeight: true,
          headerType: 'modal',
          headerText: 'bbva-oc-car-loan-pre-approved-header-title',
          titleIcon: '',
          fixedFooter: true,
          hideContentPaddingTop: true,
          cellsConnections: {
            in: {
              native_back_button_clicked_close_modal: {bind: 'close'},
              car_loan_modal_reject_bureau_open_modal: { bind: 'open' },
              car_loan_modal_reject_bureau_modal_set_title_text: { bind: 'titleText' },
              car_loan_modal_reject_bureau_modal_set_button_text: { bind: 'buttonText' }
            },
            out: {
              cells_to_native_modal_opened: {
                'bind': 'help-modal-open',
                'forward-to-native': true
              },
              cells_to_native_modal_closed: {
                'bind': 'help-modal-close',
                'forward-to-native': true
              },
              car_loan_modal_reject_bureau_footer_button_click: {
                bind: 'help-modal-footer-button-click'
              },
              car_loan_modal_reject_bureau_footer_link_click: { bind: 'help-modal-footer-link-click' }
            }
          }
        }
      },
      {
        zone: 'modalRejectBureau.slot-content',
        type: 'UI',
        tag: 'bbva-panel-info',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        properties: {
          id: 'modalRejectBureauPanelInfo',
          cellsConnections: {
            in: {
              car_loan_modal_reject_bureau_panel_set_hidden: { bind: 'hidden' },
              car_loan_modal_reject_bureau_panel_set_microillustration_type: { bind: 'microillustration' },
              car_loan_modal_reject_bureau_panel_set_heading: { bind: 'heading' },
              car_loan_modal_reject_bureau_panel_set_hide_padding_bottom: { bind: 'hidePaddingBottom'}
            }
          }
        }
      },
      {
        zone: 'modalRejectBureau.slot-content',
        type: 'UI',
        tag: 'div',
        render: 'litElement',
        properties: { id: 'div_modalRejectBureau' }
      },
      {
        zone: 'modalRejectBureau.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          id: 'modalRejectBureauText1',
          alignment: 'center',
          textColor: '#121212',
          fontWeight: '350',
          size: 'S',
          cellsConnections: {
            in: {
              car_loan_modal_reject_bureau_text_set_hidden_1: { bind: 'hidden' },
              car_loan_modal_reject_berau_text_set_text_1: {bind: 'text'}
            }
          }
        }
      },
      {
        zone: 'modalRejectBureau.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          id: 'modalRejectBureauText2',
          cellsConnections: {
            in: {
              car_loan_modal_reject_bureau_text_set_text_2: { bind: 'text' },
              car_loan_modal_reject_bureau_text_set_alignment_2: { bind: 'alignment' },
              car_loan_modal_reject_bureau_text_set_font_weight_2: { bind: 'fontWeight' },
              car_loan_modal_reject_bureau_text_set_text_color_2: { bind: 'textColor' },
              car_loan_modal_reject_bureau_text_set_size_2: { bind: 'size' },
              car_loan_modal_reject_bureau_text_set_hidden_2: { bind: 'hidden' }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        container: true,
        properties: {
          id: 'modalLeaveContract',
          titleIcon: 'bbva:warning',
          modalType: 'warning',
          cellsConnections: {
            in: {
              native_back_button_clicked_close_modal: {bind: 'close'},
              car_loan_modal_leave_contract_open_modal: { bind: 'open' },
              car_loan_modal_leave_contract_modal_set_button_text: { bind: 'buttonText' },
              car_loan_modal_leave_contract_modal_set_link_text: { bind: 'linkText' }
            },
            out: {
              cells_to_native_modal_opened: {
                'bind': 'help-modal-open',
                'forward-to-native': true
              },
              cells_to_native_modal_closed: {
                'bind': 'help-modal-close',
                'forward-to-native': true
              },
              car_loan_modal_leave_contract_footer_button_click: {
                bind: 'help-modal-footer-button-click'
              },
              car_loan_modal_leave_contract_footer_link_click: { bind: 'help-modal-footer-link-click' }
            }
          }
        }
      },
      {
        zone: 'modalLeaveContract.slot-content',
        type: 'UI',
        tag: 'div',
        render: 'litElement',
        properties: { id: 'div_modalLeaveContract' }
      },
      {
        zone: 'modalLeaveContract.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        familyPath: '@bbva-web-components/bbva-text',
        render: 'litElement',
        properties: {
          id: 'modalLeaveContractText1',
          text: 'bbva-modal-oc-car-loan-leave-offer-modal-paragraph',
          alignment: 'center',
          textColor: '#666666',
          cellsConnections: {
            in: {
              car_loan_modal_leave_contract_text_set_hidden_1: { bind: 'hidden' }
            }
          }
        }
      }
    ]
  };

  if (CONFIG.native) {
    base.components.push(glomoOpenDocument);
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-manager-oc-car-loan-pre-approved', PAGE_NAME, ['post-proposal-v1-success', 'api-dm-error']);

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'post-offer-detail-quotations-simulate-v1-error',
      acceptRetry: { bind: 'retrySimulate', component: 'bbva-manager-oc-car-loan-pre-approved' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    },
    {
      id: 'post-proposal-v1-error',
      acceptRetry: { bind: 'requestCarLoan', component: 'bbva-manager-oc-car-loan-pre-approved' },
      cancelRetry: { bind: 'goResume', component: 'bbva-manager-oc-car-loan-pre-approved' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);

  localStorageApp.addOutStorageChannels(base.components, [ 'call_me_back' ], CONFIG);

  return base;
};
