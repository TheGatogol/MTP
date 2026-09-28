/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'financingPurchase';
  // eslint-disable-next-line no-unused-vars
  const SPINNER = utils.SPINNER(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_financingPurchase')(CONFIG);
  const PHONE_NUMBER = CONFIG.phoneNumberContact;

  SPINNER.properties.open = true;
  SPINNER.properties.className = 'solid-spinner';

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');

  const base = {
    hash: 'financing-purchase',
    currentPage: {
      url: '/financing-purchase',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        extraHeaderClass: 'bbva-core-blue',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        footerHeight: 200,
        disableEdgeSwipe: true,
        headerFixed: false,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            template_set_properties_channel: {
              bind: 'setProperties'
            },
            financing_purchase_template_has_footer: {
              bind: 'hasFooter'
            }
          },
          out: {
          }
        }
      }
    },
    components: [
      SPINNER,
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
              ['__bridge_page_' + PAGE_NAME]: {
                bind: 'init'
              }
            },
            out: {
              financing_purchase_reset_page: {
                bind: 'reset'
              },
              financing_purchase_init_page: {
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
          className: 'header--evening',
          rightIcon: 'coronita:close',
          hideLeftActions: true,
          titleName: 'glomo-card-movement-financing-purchase-title',
          cellsConnections: {
            in: {
              financing_purchase_header_title_name: {
                bind: 'titleName'
              }
            },
            out: {
              financing_purchase_back_button_pressed: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-card-advice',
        properties: {
          className: 'mask-size-ml',
          showCardMask: true,
          cardNumberMasked: true,
          cellsConnections: {
            in: {
              financing_purchase_set_card_advice_properties: {
                bind: 'setProperties'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-modal-card-advice',
        properties: {
          extraHeaderClass: 'bbva-core-blue',
          iOSFixedHeader: true,
          iconSize: 16,
          className: 'normal-font-heading black-heading-button image-size-l header--white-core-blue card-mask',
          cellsConnections: {
            in: {
              financing_purchase_modal_card_advice_open_with_config: {
                bind: 'openWithConfig'
              },
              financing_purchase_modal_card_advice_close: {
                bind: 'close'
              }
            },
            out: {
              financing_purchase_modal_card_advice_open_accept: {
                bind: 'modal-cells-confirm-buttons-click-primary'
              },
              financing_purchase_modal_card_advice_closed_button: {
                bind: 'cells-bottom-modal-closed'
              },
              financing_purchase_modal_card_advice_general_close: {
                bind: 'close'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-text-description',
        properties: {
          className: 'align-center subtitle-no-margin italic-title',
          cellsConnections: {
            in: {
              financing_purchase_set_financing_date_range_info: {
                bind: 'setProperties'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-key-values',
        properties: {
          className: 'center margin-xl key-size-ml dl light-key',
          removeDefaultValueClass: true,
          cellsConnections: {
            in: {
              financing_purchase_set_financing_local_amount_info: {
                bind: 'setProperties'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-text-description',
        properties: {
          className: 'align-center subtitle-no-margin subtitle-xl normal-title subtitle-color',
          hidden: true,
          cellsConnections: {
            in: {
              financing_purchase_set_financing_slider_months_info: {
                bind: 'setProperties'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-input-slider',
        properties: {
          className: 'inside-page',
          hideUnit: true,
          hidden: true,
          hideValue: true,
          hideTitle: true,
          title: '',
          cellsConnections: {
            in: {
              financing_purchase_set_slider_config: {
                bind: 'setProperties'
              }
            },
            out: {
              financing_purchase_slider_value_changed: {
                bind: 'current-slider-value'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-aggregation-key-values-list',
        properties: {
          language: LANGUAGE,
          cellsConnections: {
            in: {
              financing_purchase_set_financing_list_properties: {
                bind: 'setProperties'
              },
              financing_purchase_set_financing_list_hidden_after_range: {
                bind: 'hidden'
              }
            },
            out: {
              financing_purchase_set_financing_list_icon_clicked: {
                bind: 'cells-key-values-list-icon-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-text-description',
        properties: {
          className: 'align-center light-description',
          cellsConnections: {
            in: {
              financing_purchase_send_text_rate_section_properties: {
                bind: 'setProperties'
              },
              financing_purchase_set_financing_list_hidden_after_range: {
                bind: 'hidden'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-text-description',
        properties: {
          className: 'no-margin-bottom margin-top-xl',
          cellsConnections: {
            in: {
              financing_purchase_set_terms_and_conditions_title: {
                bind: 'setProperties'
              },
              financing_purchase_set_financing_list_hidden_after_range: {
                bind: 'hidden'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-checkbox-dynamic-group',
        properties: {
          className: 'padded checkbox-align-top',
          cellsConnections: {
            in: {
              financing_purchase_set_terms_and_conditions_checkbox_config: {
                bind: 'setProperties'
              },
              financing_purchase_set_financing_list_hidden_after_range: {
                bind: 'hidden'
              }
            },
            out: {
              financing_purchase_terms_and_conditions_checkbox_checked: {
                bind: 'cells-checkbox-dynamic-group-checkbox-checked'
              },
              financing_purchase_terms_and_conditions_checkbox_unchecked: {
                bind: 'cells-checkbox-dynamic-group-checkbox-unchecked'
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        type: 'UI',
        tag: 'cells-summary-view',
        properties: {
          buttonLabel: 'glomo-card-movement-financing-purchase-confirm-button-label',
          noFeesMessage: 'financing-purchase',
          disabledPrimaryButton: true,
          primaryButtonEvent: 'apply-financing',
          className: 'funds-investment diy',
          cellsConnections: {
            in: {
              financing_purchase_summary_properties: {
                bind: 'setProperties'
              },
              financing_purchase_set_financing_list_hidden_after_range: {
                bind: 'hidden'
              }
            },
            out: {
              financing_purchase_apply_financing: {
                bind: 'apply-financing'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-financing-purchase-manager',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          language: LANGUAGE,
          phoneNumber: PHONE_NUMBER,
          cellsConnections: {
            in: {
              global_financial_overview_details: {
                bind: 'financialOverviewData'
              },
              financing_purchase_init_page: {
                bind: 'init'
              },
              global_card_detail_data_success_channel: {
                bind: 'card'
              },
              global_unparsed_offers_retrieved: {
                bind: 'offers'
              },
              defer_months_button_clicked_channel: {
                bind: 'transaction'
              },
              global_financing_purchase_financing_conditions_not_found_accept: {
                bind: 'callToBank'
              },
              global_financing_purchase_financing_conditions_retry: {
                bind: 'getCardConditionService'
              },
              global_financing_purchase_financing_offer_retry: {
                bind: 'getCardOfferService'
              },
              global_financing_purchase_financing_installments_retry: {
                bind: 'postInstallmentPlansSimulationService'
              },
              global_financing_purchase_financing_apply_retry: {
                bind: 'applyFinancing'
              },
              global_financing_purchase_financing_end_accept: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_not_valid_field_accept: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_exit_operation_accept: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_conditions_close: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_offer_close: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_installments_close: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_end_close: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_apply_close: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_conditions_exit: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_offer_exit: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_installments_exit: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_apply_exit: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_conditions_not_found_cancel: {
                bind: 'manageGoBack'
              },
              global_financing_purchase_financing_conditions_not_found_close: {
                bind: 'manageGoBack'
              },
              financing_purchase_back_button_pressed: {
                bind: 'openExitModal'
              },
              financing_purchase_native_back_button_pressed: {
                bind: 'openExitModal'
              },
              financing_purchase_set_offer_detail: {
                bind: 'parseOffer'
              },
              financing_purchase_error_offer_detail: {
                bind: 'parseOfferError'
              },
              financing_purchase_set_card_conditions: {
                bind: 'parseCardConditions'
              },
              financing_purchase_error_card_conditions: {
                bind: 'parseCardConditionsError'
              },
              financing_purchase_set_installments_plans_simulate: {
                bind: 'parseInstallmentPlansSimulate'
              },
              financing_purchase_error_installments_plans_simulate: {
                bind: 'parseInstallmentPlansSimulateError'
              },
              financing_purchase_set_financing_list_icon_clicked: {
                bind: 'openModalCategory'
              },
              financing_purchase_terms_and_conditions_checkbox_checked: {
                bind: 'checkboxChecked'
              },
              financing_purchase_terms_and_conditions_checkbox_unchecked: {
                bind: 'checkboxUnchecked'
              },
              financing_purchase_apply_financing: {
                bind: 'applyFinancing'
              },
              global_opened_modal: {
                bind: 'closedModal'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackButton'
              },
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              financing_purchase_customer_details_changed_channel: {
                bind: 'customerDetails'
              },
              financing_purchase_modal_card_advice_open_accept: {
                bind: 'continueModalCardAdvice'
              },
              financing_purchase_post_installment_plans_success: {
                bind: 'manageFinancingResultSuccess'
              },
              financing_purchase_post_installment_plans_error: {
                bind: 'manageFinancingResultError'
              },
              financing_purchase_slider_value_changed: {
                bind: 'setSliderValue'
              },
              financing_purchase_modal_card_advice_closed_button: {
                bind: 'manageGoBack'
              }
            },
            out: {
              financing_purchase_get_card_conditions: {
                bind: 'get-card-conditions'
              },
              financing_purchase_get_card_offer_service: {
                bind: 'get-card-offer-service'
              },
              financing_purchase_get_installments_plans_simulate: {
                bind: 'post-installment-plans'
              },
              financing_purchase_cards_version: {
                bind: 'global-cards-version'
              },
              financing_purchase_current_offer_id: {
                bind: 'global-offer-id'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              financing_purchase_set_card_advice_properties: {
                bind: 'card-advice-set-properties'
              },
              financing_purchase_set_terms_and_conditions_title: {
                bind: 'set-terms-and-conditions-title'
              },
              financing_purchase_set_terms_and_conditions_checkbox_config: {
                bind: 'set-terms-and-conditions-checkbox-config'
              },
              financing_purchase_set_terms_and_conditions_download_button: {
                bind: 'set-terms-and-conditions-donwload-button-config'
              },
              financing_purchase_set_financing_list_properties: {
                bind: 'set-financing-list-config'
              },
              financing_purchase_summary_properties: {
                bind: 'summary-view-config'
              },
              financing_purchase_send_text_rate_section_properties: {
                bind: 'send-text-rate-section'
              },
              financing_purchase_set_financing_date_range_info: {
                bind: 'send-date-range-info'
              },
              global_financing_purchase_show_alert_modal: {
                bind: 'send-alert-manager-info'
              },
              financing_purchase_set_financing_local_amount_info: {
                bind: 'send-local-amount-info'
              },
              financing_purchase_set_month_payment_info_section: {
                bind: 'send-month-payment-info-section'
              },
              financing_purchase_set_product_id: {
                bind: 'set-card-id'
              },
              financing_purchase_native_back_button_pressed: {
                bind: 'native-back-button-pressed'
              },
              global_financing_purchase_manage_go_back: {
                bind: 'manage-go-back',
                backStep: true
              },
              template_set_properties_channel: {
                bind: 'template-set-properties'
              },
              financing_navigate_to_review: {
                bind: 'navigate-to-financing-review',
                link: {
                  page: 'financingPurchaseReview',
                  cleanUntil: 'cardTransactionDetail'
                }
              },
              global_finance_transactions_reset_product_transaction_detail: {
                bind: 'refresh-transaction-detail'
              },
              card_product_transaction_detail_init_page: {
                bind: 'load-transaction-detail'
              },
              global_card_detail_data_refresh: {
                bind: 'detail-data-refresh'
              },
              global_card_detail_card_detail_data_reload: {
                bind: 'retry-card-detail'
              },
              global_card_product_transactions_reset_page: {
                bind: 'card-transactions-refresh'
              },
              go_back_to_transaction: {
                bind: 'navigate-back-button',
                backStep: true
              },
              global_alert_modal_close: {
                bind: 'close-opened-alert-modal'
              },
              global_hanlder_native_back_button: {
                bind: 'close-modal-back-button'
              },
              financing_purchase_get_customer_detail_channel: {
                bind: 'get-customer-detail'
              },
              financing_purchase_post_installment_plans: {
                bind: 'financing-purchase-apply-financing-service'
              },
              financing_purchase_set_slider_config: {
                bind: 'set-slider-config'
              },
              financing_purchase_set_financing_list_hidden_after_range: {
                bind: 'hidden-after-range'
              },
              financing_purchase_modal_card_advice_open_with_config: {
                bind: 'open-modal-card-advice-with-config'
              },
              financing_purchase_modal_card_advice_close: {
                bind: 'close-advice-modal'
              },
              financing_purchase_header_title_name: {
                bind: 'change-header-title-name'
              },
              financing_purchase_set_financing_slider_months_info: {
                bind: 'financing-slider-months-info'
              },
              financing_purchase_template_has_footer: {
                bind: 'financing-purchase-template-has-footer'
              }
            },
            params: {
              financingResult: 'financingResult',
              customerId: 'customerId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards',
        properties: {
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              financing_purchase_cards_version: {
                bind: 'cardsApiVersion'
              },
              financing_purchase_get_installments_plans_simulate: {
                bind: 'postInstallmentsPlansSimulations'
              },
              financing_purchase_post_installment_plans: {
                bind: 'postInstallmentsPlans'
              },
              financing_purchase_get_card_conditions: {
                bind: 'getCardConditions'
              },
              financing_purchase_get_card_offer_service: {
                bind: 'getOfferDetail'
              },
              financing_purchase_set_product_id: {
                bind: 'cardId'
              },
              financing_purchase_current_offer_id: {
                bind: 'offerId'
              }
            },
            out: {
              financing_purchase_set_card_conditions: {
                bind: 'set-card-conditions'
              },
              financing_purchase_error_card_conditions: {
                bind: 'error-on-get-card-conditions'
              },
              financing_purchase_set_offer_detail: {
                bind: 'set-card-offer-detail'
              },
              financing_purchase_error_offer_detail: {
                bind: 'error-on-get-card-offer-detail'
              },
              financing_purchase_set_installments_plans_simulate: {
                bind: 'post-cards-installments-plans-simulate-response'
              },
              financing_purchase_post_installment_plans_success: {
                bind: 'post-cards-installments-plans-execution-response'
              },
              financing_purchase_error_installments_plans_simulate: {
                bind: 'error-on-post-cards-installments-plans-simulate'
              },
              financing_purchase_post_installment_plans_error: {
                bind: 'error-on-post-cards-installments-plans-execution'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-customers',
        properties: {
          host: CONFIG.globalServices.host,
          contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              financing_purchase_get_customer_detail_channel: {
                bind: 'getCustomerDetail'
              }
            },
            out: {
              financing_purchase_customer_details_changed_channel: {
                bind: 'set-customer-detail'
              }
            },
            params: {
              customerId: 'customerId'
            }
          }
        }
      }
    ]
  };

  const financingPurchaseAnalyticsManager = {
    zone: 'app__main',
    tag: 'glomo-analytics-financing-purchase-manager',
    familyPath: '@glomo-web-components/glomo-analytics-financing-purchase-manager',
    render: 'litElement',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          defer_months_button_clicked_channel: {
            bind: 'fireAppOnClickStart'
          },
          financing_purchase_set_installments_plans_simulate: {
            bind: 'fireAppPageVisit'
          },
          financing_purchase_set_financing_list_icon_clicked: {
            bind: 'validateTooltip'
          },
          financing_purchase_terms_and_conditions_checkbox_checked: {
            bind: 'validateCheckboxTermsAndConditions'
          },
          financing_purchase_post_installment_plans: {
            bind: 'validateAppStep2'
          },
          financing_purchase_post_installment_plans_success: {
            bind: 'validateReview'
          },
          financing_purchase_modal_card_advice_open_with_config: {
            bind: 'firePageView'
          },
          financing_purchase_error_offer_detail: {
            bind: 'fireOfferErrorPageView'
          },
          financing_purchase_post_installment_plans_error: {
            bind: 'fireInstallmentErrorPageView'
          }
        },
        out: {
          financing_purchase_app_click_start: {
            bind: 'analytics-app-on-click-start',
            analytics: ANALYTICS.APP_CLICK_START
          },
          financing_purchase_app_page_visit: {
            bind: 'analytics-app-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          financing_purchase_app_started_date: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          financing_purchase_app_completed_date: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS.APP_COMPLETED
          },
          financing_purchase_app_page_view: {
            bind: 'analytics-app-page-view',
            analytics: ANALYTICS.PAGE_VIEW
          },
          financing_purchase_app_offer_error_page_view: {
            bind: 'analytics-app-offer-error-page-view',
            analytics: ANALYTICS.OFFER_ERROR_PAGE_VIEW
          },
          financing_purchase_app_installment_error_page_view: {
            bind: 'analytics-app-installment-error-page-view',
            analytics: ANALYTICS.INSTALLMENT_ERROR_PAGE_VIEW
          }
        }
      }
    }
  };


  base.components.push(financingPurchaseAnalyticsManager);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-cards', PAGE_NAME, [
    'post-cards-installments-plans-execution-response',
    'error-on-post-cards-installments-plans-execution'
  ]);

  addCommonErrors(base.components)();

  return base;
};
