'use strict';
const { getLocalCurrency, useNames, getLanguage, SPINNER: getSpinner, getShortInvestedDate, headerHeight } = require('./common/helpers/_utils');

module.exports = CONFIG => {

  const pages = require('./common/_pages')(CONFIG)('depositsPurchase');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorageApp = require('./common/_local-storage');
  const PAGE_NAME = 'depositsPurchase';
  const [ getChannelName ] = useNames(PAGE_NAME.toUpperCase());
  const ANALYTICS = require('./analytics/_depositsPurchase')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = CONFIG.nativeIos || false;
  const spinner = getSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding ios-button-padding' : '',
      cellsConnections: {
        in: {
          deposits_purchase_modal_help_info_offer_spherica: {
            bind: 'openWithSettings'
          },
          deposits_purchase_modal_help_info_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  const {
    globalServices: {
      host, requiredToken = 'tsec',
      versions: {
        depositsV2, campaigns
      }
    },
    native = false,
    maxSteps = 2
  } = CONFIG;

  spinner.properties.className = 'solid-spinner';
  spinner.properties.cellsConnections.in = {
    ...spinner.properties.cellsConnections.in,
    [getChannelName('request_quote')]: {
      bind: 'show'
    },
    [getChannelName('success_get_currency')]: {
      bind: 'hide'
    },
    [getChannelName('error_get_currency')]: {
      bind: 'hide'
    }
  };

  const base = {
    hash: 'mxdepositsPurchase',
    currentPage: {
      url: '/deposits-purchase'
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        delayScrollTop: 300,
        headerHeight,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        topOnConfirm: true,
        summaryPositionUnset: true,
        extraHeaderClass: 'bbva-core-blue',
        className: 'dark-blue-bg',
        cellsConnections: {
          in: {
            [getChannelName('init_page')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('_FINISH_STEPS')]: {
              bind: 'showConfirm'
            },
            [getChannelName('SCROLL_ZONE_MODIFY')]: {
              bind: 'scrollItemIntoView'
            },
            [getChannelName('reset_step')]: {
              bind: 'recalculateHeader'
            },
            [getChannelName('init_page_recalculate_header')]: {
              bind: 'recalculateHeader'
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
        className: 'dark-blue-bg confirm-relative remove-display-container-slot',
        showConfirmInManualScroll: true,
        animationType: 'verticalUp'
      }
    },
    components: [
      spinner,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          continue: 'dashboard',
          className: 'header--core',
          secondaryClass: 'header--core',
          rightIcon: 'coronita:close',
          rightIconSize: '22',
          titleName: 'glomo-deposits-purchase-sale-title',
          cellsConnections: {
            in: { },
            out: {
              [getChannelName('_modal_exit')]: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: sphericaPageUtils.getProperties({
          componentName: 'cells-molecule-header-spherica',
          type: 'modal',
          override: {
            rightIconSize: '24',
            rightIconText: 'bbva-header-main-close-aria-label',
            className: 'header--white header',
            secondaryClass: '',
            cellsConnections: {
              out: {
                deposits_purchase_click_exit: {
                  bind: 'click-right-button',
                  backStep: true
                }
              }
            }
          }
        })
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false,
            'not-collapse-any-steps': true,
            'set-info-coupon-comparative': {},
            'set-cupon-offer': {},
            'set-valid-cupon': false,
            'set-cupon-header': {},
            'set-cupon-data': []
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
              global_retargeting_initialize_deposits_purchase: {
                bind: 'init-page'
              },
              [getChannelName('init_page')]: {
                bind: 'init-page'
              },
              [getChannelName('init_page_recalculate_header')]: {
                bind: 'init-page-first-time'
              },
              [getChannelName('set_info_coupon_comparative')]: {
                bind: 'set-info-coupon-comparative'
              },
              [getChannelName('send-comparative-cupon-offer')]: {
                bind: 'set-cupon-offer'
              },
              [getChannelName('show-panel-comparative-cupon')]: {
                bind: 'set-valid-cupon'
              },
              [getChannelName('set_coupon_header')]: {
                bind: 'set-cupon-header'
              },
              [getChannelName('set_promotion_body_purchase')]: {
                bind: 'set-cupon-data'
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-back',
          cellsConnections: {
            in: { },
            out: { }
          }
        }
      }
    ]
  };

  const recipentOperativeInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-operative-info',
    tagSpherica: 'glomo-operative-info-spherica',
    properties: {
      title: 'glomo-deposits-purchase-title-info',
      className: 'product-item',
      titleSection: true,
      amountDeposit: true,
      infoMessage: {},
      showSeparator: true,
      cellsConnections: {
        in: {
          [getChannelName('set_values_info_operative')]: {
            bind: 'product'
          },
          [getChannelName('messages_operative_info')]: {
            bind: 'infoMessageAmount'
          }
        },
        out: {}
      }
    },
    propertiesSpherica: {
      className: 'product-item deposits-purchase'
    }
  };

  const recipentOfferSimulator = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-deposits-offer-page',
    tagSpherica: 'cells-step-deposits-offer-page-spherica',
    properties: {
      summaryViewWithTerm: true,
      hideHeader: false,
      viewLabel: true,
      stepId: 'step1',
      class: 'cells-step-container',
      mainClass: 'create-imposition',
      currentStep: 1,
      enterAmountHeader: '',
      amountSubHeader: 'glomo-deposit-purchase-offer-page-header',
      additionalTaxesFlag: true,
      additionalTaxesClass: 'deposit-puchase-wrapper bold-tax',
      stepTitle: 'glomo-deposit-purchase-offer-page-step-title',
      changeLabel: 'deposits-step-product-selector-change',
      viewHeader: true,
      inputCurrencyHeader: 'inputCurrencyHeader',
      inputCurrencyDescription: 'cells-step-deposits-offer-page-select-currency-description',
      amountLabel: 'glomo-deposit-purchase-offer-page-label',
      infoMessageIcon: 'warning-dark',
      typeInfoMessage: 'coronita:caution',
      showOfferData: true,
      rateIcon: '',
      changeDataText: '',
      showErrorMessage: false,
      active: true,
      hasBranch: true,
      maxSteps: maxSteps,
      hideCurrentStepLabel: false,
      isFatcaActive: true,
      liquidationItems: [],
      selectedCurrencyActive: true,
      variant: 'informational-section',
      barProgressColor: '#004481',
      barColor: '#666666',
      showSpinner: false,
      type: 'tel',
      stickyIcon: '',
      buttonListClass: 'no-wrap coupon button-more-info-coupon',
      amountInfoMessage: 'cells-step-deposits-offer-page-info-limit-amount',
      amountClasses: 'amount--xl currency--xl',
      listMessages: {
        icon: 'coronita:caution',
        type: 'warning-dark',
        className: '',
        messages: [
          {
            title: 'cells-step-deposits-offer-page-info-message-title',
            class: 'title'
          },
          {
            title: 'cells-step-deposits-offer-page-info-message-text',
            class: 'text'
          }
        ]
      },
      infoMessageIconType: 'info-dark',
      autoFormat: true,
      textAmountButton: 'cells-step-product-selector-continue-button-label',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('data_info_offer-page')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_offer_simulation_data')]: {
            bind: 'setProperties'
          },
          [getChannelName('offer_amount_changed')]: {
            bind: 'amount'
          },
          [getChannelName('disable_simulator_button')]: {
            bind: 'disabledNextButton'
          },
          [getChannelName('hiden_spinner_stiky')]: {
            bind: 'showSpinner'
          },
          [getChannelName('reset_input_amount_offert')]: {
            bind: 'inputCurrencyLabel'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          },
          [getChannelName('set_promotion_header_purchase')]: {
            bind: 'cuponHeader'
          },
          [getChannelName('set_promotion_body_purchase')]: {
            bind: 'cuponData'
          },
          [getChannelName('send-comparative-cupon-offer')]: {
            bind: 'cuponOffer'
          },
          [getChannelName('show-panel-comparative-cupon')]: {
            bind: 'validCupon'
          },
          [getChannelName('set_coupon_header')]: {
            bind: 'cuponHeader'
          }
        },
        out: {
          [getChannelName('help_button_tapped')]: {
            bind: 'simulator-help-btn-tapped-event'
          },
          [getChannelName('input_amount_changed_blur')]: {
            bind: 'amount-changed-on-blur'
          },
          deposits_purchase_input_amount_focus: {
            bind: 'on-focus-input-amount'
          },
          global_retargeting_get_change_amount_deposit_hiring: {
            bind: 'amount-changed-on-blur'
          },
          [getChannelName('input_amount_changed')]: {
            bind: 'amount-input-changed'
          },
          [getChannelName('deposits_slider_changed')]: {
            bind: 'current-slider-value'
          },
          [getChannelName('deposits_next_step')]: {
            bind: 'summary-closed'
          },
          [getChannelName('simulate_continue_presed')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          },
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('modal_information')]: {
            bind: 'cells-text-description-title-icon-click'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'glomo-deposit-purchase-offer-page-step-title-spherica',
      changeLabel: 'deposits-step-product-selector-change-spherica',
      mainClass: 'offer-details',
      amountInfoMessage: 'cells-step-deposits-offer-page-info-limit-amount-spherica',
      class: 'deposits-purchase',
      className: 'product-item deposits-purchase',
      buttonListClass: 'no-wrap coupon button-more-info-coupon coupon-deposit-spherica',
      continueButtonClassList: 'full',
      barProgressColor: '#001391',
      barColor: '#CAD1D8',
      newCellsConnections: {
        add: {
          out: {
            deposits_purchase_help_button_tapped_spherica: {
              bind: 'simulator-help-btn-tapped-event'
            }
          }
        },
        remove: {
          out: [
            'DEPOSITSPURCHASE_help_button_tapped'
          ]
        }
      }
    }
  };

  const recipentRadioButtons = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-radio-buttons',
    tagSpherica: 'cells-step-radio-buttons-spherica',
    properties: {
      typeIconMessage: 'info-dark-blue',
      title: 'glomo-deposits-purchase-title-radio-buttons',
      description: 'glomo-deposits-purchase-desc-radio-buttons',
      currentStep: 2,
      active: false,
      maxSteps: maxSteps,
      notInitializeWithAttached: true,
      hideCurrentStepLabel: true,
      disableChange: false,
      disableSeparation: true,
      cellsStepClass: 'DepositPuchaseinActive',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_values_radio_buttons')]: {
            bind: 'radioButtonList'
          },
          [getChannelName('set_message_out_of_hours')]: {
            bind: 'footerMessage'
          },
          [getChannelName('set_values_flag_class')]: {
            bind: 'cellsStepClass'
          },
          [getChannelName('set_values_flag_buttons')]: {
            bind: 'hideCurrentStepLabel'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('help_info_button')]: {
            bind: 'cells-step-radio-button-icon-help-clicked'
          },
          [getChannelName('deposits_next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('data_radio_buttons')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('button_selected')]: {
            bind: 'changed-radio-button-selected'
          },
          global_retargeting_get_instructions_deposit_purchase: {
            bind: 'changed-radio-button-selected'
          },
          global_retargeting_go_next_step_depositPurchase: {
            bind: 'continue-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      title: 'glomo-deposits-purchase-title-radio-buttons-spherica',
      newCellsConnections: {
        add: {
          out: {
            deposits_purchase_help_info_button: {
              bind: 'cells-step-radio-button-icon-help-clicked'
            }
          }
        },
        remove: {
          out: [
            'DEPOSITSPURCHASE_help_info_button'
          ]
        }
      }
    }
  };

  const summarySection = {
    zone: 'app__confirm',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    type: 'UI',
    properties: {
      showAddition: true,
      showLoadingSkeleton: true,
      operationAmountClass: 'amount-huge-decimals',
      forceFeesMessage: 'glomo-deposit-purchase-summary-message',
      className: 'deposit-purchase',
      primaryButtonClass: 'tertiary',
      buttonLabel: 'glomo-deposit-purchase-summary-button',
      cellsConnections: {
        in: {
          [getChannelName('set_title_amount_sticky')]: {
            bind: 'summaryViewTitle'
          },
          [getChannelName('SET_INFO_AMOUNT_STICKY')]: {
            bind: 'operation'
          },
          [getChannelName('reset_step')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('send_data_request_stiky')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      primaryButtonClass: 'positive'
    }
  };

  const dmDepositsPurchase = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-deposits-purchase-dm',
    properties: {
      host,
      native,
      depositsApiVersion: depositsV2,
      apiVersion: campaigns,
      localCurrency: getLocalCurrency(),
      currentLanguage: getLanguage(),
      productType: PAGE_NAME,
      operativeType: PAGE_NAME,
      heroImageError: './images/general_error_2.svg',
      heroImageOutTime: './images/Clock_funds.svg',
      modalHeadTitle: 'glomo-deposits-purchase-sale-title',
      btnLabelUnderstood: 'glomo-deposits-modal-help-understood',
      btnLabelExit: 'glomo-deposits-modal-btn-exit',
      btnLabelCancel: 'glomo-deposits-modal-btn-cancel',
      maturityDateFormat: getShortInvestedDate(),
      helpBtnInfo: false,
      storeAndForwardActivePurchase: false,
      environment: CONFIG.environment === 'pro' ? CONFIG.encryptedCoupon : CONFIG.encryptedCoupon,
      cellsConnections: {
        in: {
          navigation_product_detail_to_deposits_purchase_sales: {
            bind: 'initDataPage'
          },
          [getChannelName('get_values_accounts')]: {
            bind: 'manageAccount'
          },
          [getChannelName('help_info_button')]: {
            bind: 'configInfoRadioButtons'
          },
          [getChannelName('help_button_tapped')]: {
            bind: 'modalInfoOfferPage'
          },
          [getChannelName('deposits_close_spinner')]: {
            bind: 'depositSpinner'
          },
          [getChannelName('deposits_simulate_request_error')]: {
            bind: 'manageResponseError'
          },
          [getChannelName('deposits_simulate_request_success')]: {
            bind: 'manageResponseSuccessSimulate'
          },
          [getChannelName('input_amount_changed')]: {
            bind: 'offerInputAmountChanged'
          },
          [getChannelName('input_amount_changed_blur')]: {
            bind: 'offerAmountChanged'
          },
          [getChannelName('deposits_slider_changed')]: {
            bind: 'offerSliderChanged'
          },
          [getChannelName('deposits_next_step')]: {
            bind: 'setDataStiky'
          },
          [getChannelName('button_selected')]: {
            bind: 'configButtons'
          },
          [getChannelName('send_data_request_stiky')]: {
            bind: 'generateDepositImposition'
          },
          [getChannelName('deposits_request_success')]: {
            bind: 'depositSuccess'
          },
          [getChannelName('deposits_request_error')]: {
            bind: 'manageResponseErrors'
          },
          [getChannelName('SCROLL_ZONE')]: {
            bind: 'scrollZoneModify'
          },
          [getChannelName('_modal_exit')]: {
            bind: 'modalExitPuchaseSale'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          [getChannelName('deposits_simulate_request_success_cupon')]: {
            bind: 'manageSuccessResponseCoupon'
          },
          [getChannelName('deposits_simulate_request_error_cupon')]: {
            bind: 'manageErrorResponseCoupon'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          [getChannelName('modal_information')]: {
            bind: 'modalHelpInformation'
          },
          [getChannelName('set_info_coupon_comparative')]: {
            bind: 'infoCouponComparative'
          }
        },
        out: {
          [getChannelName('send-comparative-cupon-offer')]: {
            bind: 'send-comparative-coupon'
          },
          [getChannelName('show-panel-comparative-cupon')]: {
            bind: 'show-panel-comparative'
          },
          [getChannelName('set_promotion_header_purchase')]: {
            bind: 'set-promotion-header-purchase'
          },
          [getChannelName('set_promotion_body_purchase')]: {
            bind: 'set-promotion-body-purchase'
          },
          [getChannelName('post_campaigns_request')]: {
            bind: 'request-campaings-services'
          },
          [getChannelName('set_feature_flags')]: {
            bind: 'set-feature-flags'
          },
          [getChannelName('set_values_info_operative')]: {
            bind: 'set-product-detail-info'
          },
          [getChannelName('set_promotion_header_purchase')]: {
            bind: 'set-promotion-header-purchase'
          },
          [getChannelName('set_values_radio_buttons')]: {
            bind: 'purchase-sale-send-radio-values'
          },
          [getChannelName('set_message_out_of_hours')]: {
            bind: 'purchase-sale-out-of-hours-message'
          },
          [getChannelName('set_offer_simulation_data')]: {
            bind: 'set-offer-simulation-data'
          },
          global_retargeting_set_offer_properties_deposits_purchase: {
            bind: 'set-offer-simulation-data'
          },
          [getChannelName('offer_amount_changed')]: {
            bind: 'set-default-amount'
          },
          [getChannelName('simulate_request_body')]: {
            bind: 'get-simulate-service'
          },
          [getChannelName('disable_simulator_button')]: {
            bind: 'disable-simulator-button'
          },
          [getChannelName('hiden_spinner_stiky')]: {
            bind: 'purchase-hiden-spinner-simulator-offer'
          },
          [getChannelName('reset_input_amount_offert')]: {
            bind: 'reset-simulator-input-text'
          },
          [getChannelName('messages_operative_info')]: {
            bind: 'purchase-sale-send-cantract-icon'
          },
          [getChannelName('SET_INFO_AMOUNT_STICKY')]: {
            bind: 'send-info-stiky-deposit-puchase'
          },
          [getChannelName('set_title_amount_sticky')]: {
            bind: 'send-title-stiky-deposit-puchase'
          },
          [getChannelName('deposits_sign_request_body')]: {
            bind: 'send_data_request_deposit-puchase'
          },
          [getChannelName('SCROLL_ZONE_MODIFY')]: {
            bind: 'cells-scroll-zone-modify'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset-deposit-puchase-flow'
          },
          [getChannelName('error_operation_out_time')]: {
            bind: 'modal-error-operation-out-time'
          },
          global_retargeting_send_information_update: {
            bind: 'reset-deposit-puchase-flow'
          },
          global_retargeting_go_next_step: {
            bind: 'reset-deposit-puchase-flow'
          },
          global_deposits_purchase_modal_error_time: {
            bind: 'modal-error-operation-out-time'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          global_deposits_error_operation_simualte_retry: {
            bind: 'modal-error-operation-simulate-retry'
          },
          global_deposits_error_operation_simualte_exit: {
            bind: 'modal-error-operation-simulate-exit'
          },
          global_deposits_puchase_modal_exit: {
            bind: 'modal-sale-exit-puchase'
          },
          [getChannelName('promotion_valid_change_coupon')]: {
            bind: 'promotion-valid-changed'
          },
          global_alert_manager_open_with_settings: {
            bind: 'modal-help-information'
          },
          open_control_veil: {
            bind: 'deposits-start-spinner'
          },
          close_control_veil: {
            bind: 'deposits-stop-spinner'
          },
          global_deposits_purchase_modal_help_info: {
            bind: 'send-info-help-radio-buttons-modal'
          },
          global_deposits_purchase_modal_help_info_offer: {
            bind: 'send-info-help-offer-page-modal'
          },
          global_deposits_purchase_modal_error_info: {
            bind: 'deposit-purchase-error-init-page'
          },
          NAVIGATE_TO_REVIEW_DEPOSIT_SUCCESS: {
            bind: 'send-data-success-deposit',
            link: {
              page: 'depositsPurchaseReview',
              skipHistory: true
            }
          },
          global_retargeting_contracted_product: {
            bind: 'send-data-success-deposit'
          }
        },
        params: {
          globalUser: 'global_user'
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      depositDateFormat: 'D MMMM YYYY',
      outOfHoursMessage: {
        icon: 'coronita:caution',
        messageClass: 'inline message message-deposit'
      },
      newCellsConnections: {
        add: {
          in: {
            deposits_purchase_help_button_tapped_spherica: {
              bind: 'modalInfoOfferPageSpherica'
            },
            deposits_purchase_help_info_button: {
              bind: 'configInfoRadioButtonsSpherica'
            }
          },
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'modal-help-information'
            },
            deposits_purchase_modal_help_info_spherica: {
              bind: 'send-info-help-radio-buttons-modal'
            },
            deposits_purchase_modal_help_info_offer_spherica: {
              bind: 'send-info-help-offer-page-modal'
            },
            global_glomo_signature_open_modal_error_spherica: {
              bind: 'deposit-purchase-error-init-page'
            }
          }
        },
        remove: {
          in: [
            'DEPOSITSPURCHASE_help_button_tapped',
            'DEPOSITSPURCHASE_help_info_button'
          ],
          out: [
            'global_deposits_puchase_modal_exit',
            'global_alert_manager_open_with_settings',
            'global_deposits_purchase_modal_help_info',
            'global_deposits_purchase_modal_help_info_offer',
            'global_deposits_purchase_modal_error_info'
          ]
        }
      }
    }
  };

  const opxDm = {
    zone: 'app__main',
    tag: 'glomo-opx-deposits-purchase-manager',
    type: 'DM',
    properties: {
      lang: getLanguage(),
      autoActivateStep: true,
      repeatOperative: true,
      operativeName: 'DEPOSITSPURCHASE',
      cellsConnections: {
        in: {
          [getChannelName('deposits_next_step')]: {
            bind: 'goToNext'
          },
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'registerStep'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('_FINISH_STEPS')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('SCROLL_ZONE')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('set_values_flag_buttons')]: {
            bind: 'changed-flag-view-puchase'
          },
          [getChannelName('set_values_flag_class')]: {
            bind: 'changed-class-active-puchase'
          }
        }
      }
    }
  };

  const analyticsDepositsPurchase = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-offers-deposits-purchase-sale-manager',
    familyPath: '@glomo-web-components/glomo-analytics-offers-deposits-purchase-sale-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('help_button_tapped')]: {
            bind: 'setModalStarted'
          },
          deposits_purchase_input_amount_focus: {
            bind: 'setInputStarted'
          },
          [getChannelName('deposits_slider_changed')]: {
            bind: 'setSliderStarted'
          },
          [getChannelName('deposits_next_step')]: {
            bind: 'setButtonStarted'
          },
          [getChannelName('set_offer_simulation_data')]: {
            bind: 'setSimulateData'
          },
          [getChannelName('button_selected')]: {
            bind: 'setInstructionValue'
          },
          [getChannelName('simulate_continue_presed')]: {
            bind: 'preFireAnalyticStep2'
          },
          [getChannelName('data_radio_buttons')]: {
            bind: 'preFireAnalyticStep3'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          },
          NAVIGATE_TO_REVIEW_DEPOSIT_SUCCESS: {
            bind: 'fireAnalyticsGlobalComplete'
          },
          [getChannelName('modal_information')]: {
            bind: 'setIconHelp'
          },
          [getChannelName('show-panel-comparative-cupon')]: {
            bind: 'appVisit'
          },
          [getChannelName('promotion_valid_change_coupon')]: {
            bind: 'proccess'
          },
          [getChannelName('set_promotion_header_purchase')]: {
            bind: 'appPageVisit'
          },
          [getChannelName('error_operation_out_time')]: {
            bind: 'fireAnalyticsError'
          }
        },
        out: {
          [getChannelName('analytics_app_started')]: {
            bind: 'app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('analytics_app_page_visit')]: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('analytics_app_step2')]: {
            bind: 'fire-step-2',
            analytics: ANALYTICS.APP_STEP_2
          },
          [getChannelName('analytics_app_step3')]: {
            bind: 'fire-step-3',
            analytics: ANALYTICS.APP_STEP_3
          },
          [getChannelName('analytics_operation_out_time')]: {
            bind: 'app_analytics_error',
            analytics: ANALYTICS.MARK_OUT_OF_TIME
          },
          analytics_complete_success: {
            bind: 'app-completed-analytics',
            analytics: ANALYTICS.APP_COMPLETED
          },
          analytics_inprocess_success: {
            bind: 'app-inprocess-analytics',
            analytics: ANALYTICS.APP_INPROCESS
          },
          analytics_modal_coupon: {
            bind: 'analytics-modal-information-coupon',
            analytics: ANALYTICS.modalInfoCoupon
          }
        }
      }
    }
  };

  const depositsDMGlobalApis = {
    zone: 'app_main',
    tag: 'cells-dm-global-apis-deposits',
    type: 'DM',
    properties: {
      host,
      requiredToken,
      otpId: PAGE_NAME,
      native,
      depositsApiVersion: depositsV2,
      cellsConnections: {
        in: {
          [getChannelName('simulate_request_body')]: {
            bind: 'postDepositsSimulate'
          },
          [getChannelName('deposits_sign_request_body')]: {
            bind: 'postDepositsPurchase'
          }
        },
        out: {
          [getChannelName('deposits_close_spinner')]: {
            bind: 'set-deposits-offer'
          },
          [getChannelName('deposits_simulate_request_success')]: {
            bind: 'set-post-deposits-simulate'
          },
          [getChannelName('deposits_simulate_request_error')]: {
            bind: 'error-on-post-deposits-simulate'
          },
          [getChannelName('deposits_request_success')]: {
            bind: 'success-deposit-request-purchase'
          },
          [getChannelName('deposits_request_error')]: {
            bind: 'error-deposit-request-purchase'
          },
          deposits_analytics_otp_first_step: {
            bind: 'signature-required-first-step-dm'
          },
          global_deposits_offer_request_error: {
            bind: 'error-on-get-deposits-offer',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'error-on-get-deposits-offer'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };

  const dmGlobalApisCatalogs = {
    zone: 'app_main',
    tag: 'cells-dm-global-apis-campaigns',
    type: 'DM',
    properties: {
      host,
      requiredToken,
      otpId: PAGE_NAME,
      native,
      apiVersion: campaigns,
      cellsConnections: {
        in: {
          [getChannelName('post_campaigns_request')]: {
            bind: 'postRedeemCoupon'
          }
        },
        out: {
          [getChannelName('deposits_simulate_request_success_cupon')]: {
            bind: 'successful-redeem-coupon'
          },
          [getChannelName('deposits_simulate_request_error_cupon')]: {
            bind: 'error-on-redeem-coupon'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };

  const UI = [
    recipentOperativeInfo,
    recipentOfferSimulator,
    recipentRadioButtons,
    summarySection,
    dmGlobalApisCatalogs
  ];
  const DMs = [
    dmDepositsPurchase,
    depositsDMGlobalApis,
    opxDm,
    analyticsDepositsPurchase
  ];

  base.components.push(...UI, ...DMs);
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-deposits', PAGE_NAME, ['success-deposit-request-purchase', 'error-deposit-request-purchase']);
  addCommonErrors(base.components)();
  addRetryErrors(base)(
    [],
    {
      dmName: 'glomo-deposits-purchase-dm',
      product: 'deposits_purchase'
    }
  );

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
