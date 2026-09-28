module.exports = config => {
  const { globalServices: { host, requiredToken = 'tsec', versions}, nativeIos = false, native = false } = config;
  const { cardsV1, customersAddressesV1, customerContactDetailsV1, customersCivilRegistriesV1, catalogs, privateBankingPortfolios } = versions;
  const {getLocalCurrency, pluginDatePicker} = require('./common/helpers/_utils');
  const datePicker = pluginDatePicker(config);
  const pages = require('./common/_pages')(config)('additionalCreditCardMainPage');
  const analyticsCreditCardMainPage = require('./analytics/_additionalCreditCardMainPageSpherica')();

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'bg-light-grey'
    }
  };

  const additionalCreditCard = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-oc-additional-credit-card-mx',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-feature-oc-additional-credit-card-mx',
    properties: {
      host,
      requiredToken,
      catalogRecordsApiVersion: catalogs,
      customerAddressesApiVersion: customersAddressesV1,
      customersContactDetailsApiVersion: customerContactDetailsV1,
      customersCivilRegistriesApiVersion: customersCivilRegistriesV1,
      privatePortafoliosApiVersion: privateBankingPortfolios,
      localCardsApiVersion: cardsV1,
      continue: 'additional-card-hiring',
      localCurrency: getLocalCurrency,
      lenguager: config.lang,
      catalogId: '06320074E',
      minCreditLimit: 1000,
      country: 'MX',
      isNativeIosCalendar: nativeIos,
      iOSFixedHeader: nativeIos,
      native,
      cellsConnections: {
        in: {
          __bridge_page_additionalCreditCardMainPage: {
            bind: 'init'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          global_card_detail_data_success_channel: {
            bind: 'dataCards'
          },
          dashboard_customer_email: {
            bind: 'email'
          },
          navigation_branch_locator_to_additional_card_hiring: {
            bind: 'sendBranchAddress'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'setDate'
          },
          additional_credit_card_signature_modal: {
            bind: 'hidden'
          },
          blue_redirect_additional_credit_card_main_page: {
            bind: 'dataCards'
          },
          global_feature_flag_collection_updated: {
            bind: 'parseFeatureFlag'
          }
        },
        out: {
          global_nativeconnector_datepicker_launch: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-open-date-native'
          },
          additional_card_hiring_continue: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-continue-changed'
          },
          additional_card_hiring_go_to_branch_locator: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-activate-branch-locator',
            link: {
              page: 'branchLocator'
            },
            analytics: analyticsCreditCardMainPage.branchLocator
          },
          additional_credit_card_ticket_share: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-successful-page-ticket-share'
          },
          additional_credit_card_ticket_share_result: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-successful-page-ticket-share-result'
          },
          open_control_veil: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-successful-page-open-control-veil'
          },
          additional_credit_card_exit_page: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-close',
            backStep: true
          },
          additional_credit_card_initialize: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-initialize'
          },
          additional_credit_card_init_page_benefits: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-init-page'
          },
          additional_credit_card_all_input_values: {
            bind: 'additional-info-step-selected-input-label'
          },
          additional_credit_card_input_amount: {
            bind: 'additional-info-step-input-amount-change'
          },
          additional_credit_card_selected_birthplace: {
            bind: 'additional-info-step-selected-birthplace'
          },
          additional_credit_card_selected_gender: {
            bind: 'additional-info-step-selected-gender'
          },
          additional_credit_card_scroll_zone: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-multistep-step-complete-change'
          },
          additional_credit_card_finish_steps: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-multistep-request-subscription'
          },
          additional_credit_card_inform_shipping_address: {
            bind: 'delivery-addresses-step-selection'
          },
          additional_credit_card_open_sign_modal: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-dm-open-modal-sign'
          },
          additional_credit_card_error_page_cards: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-error-cards',
            analytics: analyticsCreditCardMainPage.errorPageLoad
          },
          additional_credit_card_error_page_operational_dm: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-dm-service-problem',
            analytics: analyticsCreditCardMainPage.errorPageLoad
          },
          additional_credit_card_error_page_service_unavailable: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-dm-error-middle',
            analytics: analyticsCreditCardMainPage.errorServiceUnavailable
          },
          additional_credit_card_error_page_otp: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-dm-error-otp',
            analytics: analyticsCreditCardMainPage.signatureError
          },
          additional_credit_card_notice_privacy: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-notice-privacy',
            analytics: analyticsCreditCardMainPage.noticePrivacy
          },
          additional_credit_card_additional_cards_success: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-dm-post-cards-response'
          },
          additional_credit_card_reset_flow: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-dm-reset'
          },
          additional_credit_card_reset_flow_modal: {
            bind: 'bbva-feature-oc-additional-credit-card-mx-generic-modal-reset-flow'
          }
        },
        params: {
          cardId: 'productId',
          customerId: 'global_user_id'
        }
      }
    }
  };

  const analyticsManagerOcAdditionalCreditCard = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-oc-additional-credit-card',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-origination',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_card_detail_data_success_channel: {
            bind: 'productType'
          },
          additional_credit_card_init_page_benefits: {
            bind: 'checkFiredBenefits'
          },
          additional_credit_card_initialize: {
            bind: 'checkFiredInit'
          },
          additional_credit_card_input_amount: {
            bind: 'setCreditLine'
          },
          additional_credit_card_selected_birthplace: {
            bind: 'selectedBirthplace'
          },
          additional_credit_card_selected_gender: {
            bind: 'selectedGender'
          },
          additional_credit_card_inform_shipping_address: {
            bind: 'persistAddress'
          },
          additional_credit_card_scroll_zone: {
            bind: 'stepFired'
          },
          additional_credit_card_all_input_values: {
            bind: 'startedFired'
          },
          additional_credit_card_finish_steps: {
            bind: 'confirmStep'
          },
          additional_credit_card_open_sign_modal: {
            bind: 'openSign'
          },
          additional_credit_card_additional_cards_success: {
            bind: 'successAnalytics'
          },
          additional_credit_card_reset_flow: {
            bind: 'reset'
          },
          sign_modal_open: {
            bind: 'openSignatureModal'
          },
          sign_modal_cancelled: {
            bind: 'closeSignatureModal'
          },
          sign_modal_close: {
            bind: 'closeSignatureModal'
          },
          additional_credit_card_reset_flow_modal: {
            bind: 'reset'
          }
        },
        out: {
          additional_credit_card_analytics_started: {
            bind: 'analytics-started',
            analytics: analyticsCreditCardMainPage.appStarted
          },
          additional_credit_card_analytics_benefits: {
            bind: 'analytics-launch-benefits',
            analytics: analyticsCreditCardMainPage.pageViewBenefits
          },
          additional_credit_card_analytics_init: {
            bind: 'analytics-launch-init',
            analytics: analyticsCreditCardMainPage.appPageVisit
          },
          additional_credit_card_analytics_address_and_shipping: {
            bind: 'analytics-additional-step-address-and-shipping',
            analytics: analyticsCreditCardMainPage.getAppStep(2, '2 direccion envio')
          },
          additional_credit_card_analytics_terms_and_conditions: {
            bind: 'analytics-additional-step-terms-and-conditions',
            analytics: analyticsCreditCardMainPage.getAppStep(3, '3 terminos y condiciones')
          },
          additional_credit_card_analytics_confirmation: {
            bind: 'analytics-additional-step-confirmation',
            analytics: analyticsCreditCardMainPage.getAppStep(4, '4 confirmacion')
          },
          additional_credit_card_analytics_step_otp: {
            bind: 'analytics-additional-step-otp',
            analytics: analyticsCreditCardMainPage.getAppStep(5, '5 otp')
          },
          additional_credit_card_analytics_otp_error: {
            bind: 'analytics-otp-error',
            analytics: analyticsCreditCardMainPage.signatureError
          },
          additional_credit_card_analytics_complete: {
            bind: 'analytics-complete',
            analytics: analyticsCreditCardMainPage.appComplete
          },
          additional_credit_card_signature_modal: {
            bind: 'signature-modal-set'
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: config.lang,
      sharedReceiptStyles: {
        section: {
          'margin-bottom': '5rem'
        }
      },
      cellsConnections: {
        in: {
          additional_credit_card_ticket_share: {
            bind: 'captureReceipt'
          },
          additional_credit_card_ticket_share_result: {
            bind: 'setProperties'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const base = {
    hash: 'additional-credit-card-spherica',
    currentPage: {
      url: '/additional-credit-card-spherica',
      params: [ 'productId' ]
    },
    pages,
    template,
    components: [additionalCreditCard, analyticsManagerOcAdditionalCreditCard, shareReceipt]
  };

  if (native) {
    base.components.push(datePicker);
  }

  const errorAndSignWidgetConnector =
  require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('bbva-feature-oc-additional-credit-card-mx');
  return base;
};
