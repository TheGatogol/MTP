/* eslint-disable complexity */
'use strict';

module.exports = CONFIG => {

  const { getLocalCurrency, useNames, toUnderscoreCase, getLanguage, connectionsOut, createSpinner, getVisibleChars, headerHeight } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('fundsContribution');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'fundsContribution';
  const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const ANALYTICS = require('./analytics/_fundsContribution')(CONFIG);
  const VISIBLE_CHARS = getVisibleChars(CONFIG)('founds');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const spinner = createSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: `solid-spinner${isNativeIos ? ' feedback-ios-top-padding' : ''}`
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: (isNativeIos ? 'ios-top-padding' : '') + ' exit-investment-funds generic-error-investment-funds',
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          funds_withdrawal_cancel_modal: {
            bind: 'alert-FUNDS-OPERATION-LEAVE-OPERATIVE-cancel'
          },
          funds_withdrawal_accept_modal: {
            bind: 'alert-FUNDS-OPERATION-LEAVE-OPERATIVE-accept',
            backStep: true
          }
        }
      }
    }
  };

  const base = {
    hash: 'funds-contribution',
    currentPage: {
      url: '/funds-contribution'
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        headerHeight,
        headerFixed: true,
        iOSFixedHeader: true,
        topOnConfirm: true,
        className: 'funds-investment header-fixed',
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            [getChannelName('SHOW_BUTTON_FINISH_STEPS')]: {
              bind: 'showConfirm'
            },
            [getChannelName('INIT_PAGE')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('CONFIRM_ANIMATION')]: {
              bind: 'collapseOpened'
            },
            [getChannelName('RESET_SCROLL')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('SCROLL_ZONE_MODIFY')]: {
              bind: 'scrollItemIntoView'
            }
          },
          out: {
            [getChannelName('SCOLL_TEMPLATE')]: {
              bind: 'opx-template-content-scroll'
            },
            [getChannelName('SCROLL_COMPLETE')]: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: isNativeIos ? 'header--white' : ''
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-funds-withdrawal-manager',
        familyPath: '@glomo-web-components/glomo-analytics-funds-withdrawal-manager',
        render: 'litElement',
        properties: {
          config: {
            buttons: {
              continue: 'lo quiero'
            },
            steps: {
              2: 'app-step-2',
              3: 'app-step-3',
              simulationGenerated: 'app-step-simulation-created',
              last: 'app-step-confirmation',
              sign: 'app-otp',
              receipt: 'receipt-success'
            }
          },
          cellsConnections: {
            in: {
              FUND_CONTRACTED_DETAIL_SHOW_CONTRIBUTION_FLOW: {
                bind: 'fireAppClickStart'
              },
              [getChannelName('INITIAL_INFO_CONTRACT_CARD_OFFER')]: {
                bind: 'firePageVisit'
              },
              [getChannelName('OFFER_PAGE_NEXT_STEP')]: {
                bind: 'fireAppStarted'
              },
              [getChannelName('FOCUS_IN')]: {
                bind: 'onStep'
              },
              [getChannelName('SHOW_SIMULATOR')]: {
                bind: 'fireSimulationGeneratedStep'
              },
              [getChannelName('SEND_AMMOUNT_TO_SIMULATE')]: {
                bind: 'inputAmount'
              },
              [getChannelName('SHOW_BUTTON_FINISH_STEPS')]: {
                bind: 'onLastStep'
              },
              NAVIGATE_TO_FUNDS_INVESTMENTS_CONTRIBUTION_SUCCESS: {
                bind: 'fireReceipt'
              },
              global_alert_manager_open_with_settings: {
                bind: 'fireReceiptErrorContribution'
              }
            },
            out: {
              [getChannelName('ANALYTICS_CLICK_START_PAGE')]: {
                bind: 'analytics-click-start-page',
                analytics: ANALYTICS.APP_ON_CLICK_START
              },
              [getChannelName('ANALYTICS_INIT_PAGE')]: {
                bind: 'analytics-page-visit',
                analytics: ANALYTICS.APP_PAGE_VISIT
              },
              [getChannelName('ANALYTICS_APP_STARTED')]: {
                bind: 'analytics-app-started',
                analytics: ANALYTICS.APP_STARTED
              },
              [getChannelName('ANALYTICTS_ENTER_AMOUT')]: {
                bind: 'analytics-app-step-2',
                analytics: ANALYTICS.STEP_2
              },
              [getChannelName('ANALYTICS_INFORMATION_SIMULATION')]: {
                bind: 'analytics-app-step-simulation-created',
                analytics: ANALYTICS.SIMULATION
              },
              [getChannelName('ANALYTICTS_ASSOCIATE_ACCOUNT')]: {
                bind: 'analytics-app-step-3',
                analytics: ANALYTICS.STEP_3
              },
              [getChannelName('ANALYTICS_FINISH_STEP')]: {
                bind: 'analytics-app-step-confirmation',
                analytics: ANALYTICS.STEP_4
              },
              [getChannelName('ANALYTICS_OTP')]: {
                bind: 'analytics-app-otp',
                analytics: ANALYTICS.MODAL_OTP
              },
              [getChannelName('ANALYTICS_RECEIPT')]: {
                bind: 'analytics-app-step-confirmation-success',
                analytics: ANALYTICS.RECEIPT
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          continue: 'dashboard',
          className: 'header--grey',
          secondaryClass: 'header--core',
          rightIcon: 'coronita:close',
          rightIconSize: '22',
          titleName: 'cells-funds-withdrawal-header-title-purchase',
          cellsConnections: {
            in: {
              add_header_class: {
                bind: 'setSecondaryClass'
              },
              funds_withdrawal_accept_modal: {
                bind: 'removeSecondaryClass'
              },
              [`global_${getChannelName('EXIT_ACCEPT')}`]: {
                bind: 'removeSecondaryClass'
              },
              [getChannelName('GO_BACK')]: {
                bind: 'removeSecondaryClass'
              },
              funds_contribution_serie_is_not_available_accept_modal: {
                bind: 'removeSecondaryClass'
              },
              funds_contribution_serie_without_balance_cancel_modal: {
                bind: 'removeSecondaryClass'
              },
              funds_contribution_serie_without_balance_modal: {
                bind: 'removeSecondaryClass'
              },
              funds_contribution_serie_is_not_available_modal: {
                bind: 'removeSecondaryClass'
              }
            },
            out: {
              [getChannelName('GO_BACK_NAVIGATION')]: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--white',
          variant: 'primary',
          secondaryClass: '',
          rightIconText: 'cells-molecule-header-spherica-close'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
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
              [getChannelName('INIT_PAGE')]: {
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
        zone: 'app__main',
        tag: 'glomo-opx-funds-contribution-dm',
        type: 'DM',
        properties: {
          lang: CONFIG.lang,
          autoActivateStep: true,
          repeatOperative: true,
          decorateSteps: true,
          operativeName: 'FUNDSPURCHASE',
          cellsConnections: {
            in: {
              [getChannelName('INIT_PAGE')]: {
                bind: 'setHeaderOriginColor'
              },
              [getChannelName('GO_BACK_NAVIGATION')]: {
                bind: 'manageBackButton'
              },
              [getChannelName('HANDLED_NAVIGATION_BACK')]: {
                bind: 'manageBackButton'
              },
              [getChannelName('COLLAPSE_OTHER_STEP')]: {
                bind: 'goToStep'
              },
              [getChannelName('NEXT_STEP')]: {
                bind: 'goToNext'
              },
              [getChannelName('REGISTER_STEP_CHANNEL')]: {
                bind: 'registerStep'
              },
              [getChannelName('NAVIGATION_TO_FUNDS_CONTRIBUTION_LIST')]: {
                bind: 'reset'
              },
              [`global_${getChannelName('EXIT_ACCEPT')}`]: {
                bind: 'reset'
              },
              [getChannelName('GO_BACK')]: {
                bind: 'reset'
              },
              funds_withdrawal_accept_modal: {
                bind: 'reset'
              },
              NAVIGATE_TO_FUNDS_INVESTMENTS_CONTRIBUTION_SUCCESS: {
                bind: 'reset'
              },
              navigation_investment_funds_to_dashboard: {
                bind: 'reset'
              },
              funds_contribution_error_simulation_modal: {
                bind: 'reset'
              },
              [getChannelName('OFFER_PAGE_NEXT_STEP')]: {
                bind: 'showExitConfirm'
              },
              [getChannelName('OFFER_PAGE_NEXT_STEP')]: {
                bind: 'showExitConfirm'
              },
              funds_contribution_serie_is_not_available_accept_modal: {
                bind: 'reset'
              },
              funds_contribution_serie_without_balance_cancel_modal: {
                bind: 'reset'
              },
              funds_contribution_serie_without_balance_modal: {
                bind: 'reset'
              },
              funds_contribution_serie_is_not_available_modal: {
                bind: 'reset'
              }
            },
            out: {
              [getChannelName('SHOW_BUTTON_FINISH_STEPS')]: {
                bind: 'can-execute-changed'
              },
              [getChannelName('GO_BACK')]: {
                bind: 'navigate-back-button',
                backStep: true
              },
              [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
                bind: 'show-close-confirm'
              },
              [getChannelName('SCROLL_ZONE')]: {
                bind: 'cells-scroll-zone'
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
          native: CONFIG.native || false,
          cellsConnections: {
            in: {
              [getChannelName('SET_CUSTOMER_ID')]: {
                bind: 'customerId'
              },
              [getChannelName('REQUEST_CUSTOMER_ID_DETAIL')]: {
                bind: 'getCustomerDetail'
              }
            },
            out: {
              [getChannelName('SUCCESS_CUSTOMER_ID_DETAIL')]: {
                bind: 'set-customer-detail'
              },
              [getChannelName('ERROR_CUSTOMER_ID_DETAIL')]: {
                bind: 'error-on-get-customer-detail'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-investment-funds',
        properties: {
          host: CONFIG.globalServices.host,
          investmentFundsApiVersion: CONFIG.globalServices.versions.investmentFunds,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          otpId: PAGE_NAME,
          cellsConnections: {
            in: {
              [getChannelName('POST_SIMULATE_SUBSCRIPTION')]: {
                bind: 'postFundSimulateSubscription'
              },
              [getChannelName('REQUEST_SUBSCRIPTION_DETAIL')]: {
                bind: 'postFundSubscriptions'
              }
            },
            out: {
              [getChannelName('SUCCES_POST_SUBSCRIPTION_SIMULATE')]: {
                bind: 'success-on-post-subscriptions-simulate'
              },
              [getChannelName('ERROR_POST_SUBSCRIPTION_SIMULATE')]: {
                bind: 'error-on-post-subscriptions-simulate'
              },
              [getChannelName('SUCCESS_SUBSCRIPTION_FROM_DM')]: {
                bind: 'set-fund-subscription'
              },
              [getChannelName('ERROR_SUBSCRIPTION_FROM_DM')]: {
                bind: 'error-on-post-fund-subscription'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-card-offer-page',
        tagSpherica: 'cells-step-card-offer-page-spherica',
        type: 'UI',
        properties: {
          id: 'cells-step-card-offer-page',
          currentStep: 1,
          localCurrency: getLocalCurrency(),
          language: 'en',
          colorBullet: 'medium-blue',
          digitalNumber: 4,
          spaceBelowText: 'cells-space-down-the-key',
          belowFilled: 'cells-space-below-filled',
          stepChangeLabel: 'cells-funds-withdrawal-step-card-offer-page-link-collapsed',
          featuresText: 'cells-funds-withdrawal-characteristics',
          availableLineText: 'cells-funds-withdrawal-balance-fund',
          keepInMindText: 'cells-funds-withdrawal-requirements',
          infoMessageType: 'warning',
          stepTitle: 'cells-funds-withdrawal-fund-data-step-header',
          wantButtonText: 'cells-funds-withdrawal-offerpage-button',
          hideCollapsedBenefits: true,
          showContractNumberCollapsed: true,
          showSmallAmountAvailableLine: true,
          showInfoMessage: true,
          hideImageCollapsed: true,
          hideBenefitsSubHeader: true,
          active: true,
          showSummary: true,
          enableConfirmButton: true,
          mainTaxesText: '',
          headerImg: './images/spherica/fundsHiring/Funds.svg',
          cellsConnections: {
            in: {
              [getChannelName('INIT_PAGE')]: {
                bind: 'initialize'
              },
              [getChannelName('INITIAL_INFO_CONTRACT_CARD_OFFER')]: {
                bind: 'cardOffer'
              },
              [getChannelName('INITIAL_INFO_CONTRACT_OFFER_TAXES')]: {
                bind: 'taxesInfo'
              },
              [getChannelName('INITIAL_INFO_INFO_MESSAGE')]: {
                bind: 'infoMessageDescription'
              },
              [getChannelName('OFFER_ERROR_MESSAGE')]: {
                bind: 'errorMessage'
              },
              [getChannelName('SCROLL_COMPLETE')]: {
                bind: 'scrollComplete'
              }
            },
            out: {
              [getChannelName('REGISTER_STEP_CHANNEL')]: {
                bind: 'register-step'
              },
              [getChannelName('NEXT_STEP')]: {
                bind: 'continue-pressed'
              },
              [getChannelName('OFFER_PAGE_NEXT_STEP')]: {
                bind: 'continue-pressed'
              },
              [getChannelName('COLLAPSE_OTHER_STEP')]: {
                bind: 'change-pressed'
              },
              [getChannelName('PROFITABILITY_DETAILS_CLICKED')]: {
                bind: 'cells-step-card-offer-page-features-link-clicked'
              },
              add_header_class: {
                bind: 'continue-pressed'
              },
              [getChannelName('FIRST_STEP')]: {
                bind: 'change-pressed'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'funds-contribution cells-step-container',
          digitalNumber: 5,
          hideTaxesResume: true,
          hasTaxesInfo: true,
          titleImageCover: 'cells-funds-withdrawal-first-title-onboarding-spherica',
          marginImageCover: 'custom',
          variantImageCover: 'secondary',
          listWithoutMargin: true,
          infoMessageIconType: 'coronita:caution',
          featuresText: 'cells-funds-withdrawal-characteristics-spherica',
          keepInMindText: 'cells-funds-withdrawal-requirements-spherica',
          wantButtonClass: 'positive'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-simulation-operation',
        tagSpherica: 'cells-step-simulation-operation-spherica',
        type: 'UI',
        properties: {
          id: 'cells-step-simulation-operation',
          currentStep: 2,
          localCurrency: getLocalCurrency(),
          language: getLanguage(),
          currency: getLocalCurrency(),
          amountButtonText: 'cells-funds-withdrawal-calculate-button-text',
          stepTitle: 'cells-funds-withdrawal-sale-amount-step-header-purchase',
          stepDescription: 'cells-funds-withdrawal-indication-amount-purchase',
          messageText: 'cells-funds-withdrawal-notification-message-purchase',
          showSimulator: false,
          infoType: 'info-light-blue',
          infoClass: 'custom-info-light',
          enterLimitedAmountClass: 'cells_step_enter_limited_amount__info_message_light_icon_theme',
          showInfoMessage: true,
          type: 'tel',
          amountRangeMessage: 'cells-funds-withdrawal-info-message-form-amount-min-fund-amount-purchase-input-before',
          notEnoughBalanceAfterKey: 'cells-funds-withdrawal-info-message-form-amount-min-fund-amount-purchase-between',
          amountErrorMinLimitMessage: 'cells-investments-funds-amount-error-min-limit-message-contribution',
          amountErrorMaxLimitMessage: 'cells-investments-funds-amount-error-max-limit-message-contribution',
          hasTextAfterAmountErrorMaxLimit: true,
          messageAfterAmountErrorMaxLimit: 'cells-investments-funds-message-after-amount-error-max-limit-contribution',
          filledAmountLabel: 'cells-funds-withdrawal-summary-view-amount-operation',
          infoMessageSimulationValue: 'cells-funds-withdrawal-redeems-message-purchase',
          hideCurrentStepLabel: true,
          showTopAmountMessage: false,
          showGraph: false,
          keepOpened: true,
          keepAmount: true,
          range: true,
          showRanges: true,
          showIconInInputRangeMessage: true,
          complexAmountErrorMaxLimitMessage: true,
          keepValues: [
            'showInfoMessage',
            'maxValue',
            'minValue'
          ],
          simulationConfirmButtons: {
            buttons: {
              primary: {
                class: isSpherica ? 'primary' : 'secondary',
                text: 'cells-funds-withdrawal-withdrawal-first-button'
              },
              secondary: {
                class: 'link',
                text: isSpherica ? 'cells-funds-withdrawal-withdrawal-second-button-spherica' : 'cells-funds-withdrawal-withdrawal-second-button'
              }
            }
          },
          multipleRange: 0,
          changeLabel: 'cells-funds-withdrawal-edit-label-step',
          cellsConnections: {
            in: {
              [getChannelName('INIT_PAGE')]: {
                bind: 'initialize'
              },
              [getChannelName('SHOW_SIMULATOR')]: {
                bind: 'simulationInfo'
              },
              [getChannelName('BUTTONS_SIMULATOR_AND_CHNAGE_COLLAPSED')]: {
                bind: 'setProperties'
              },
              [getChannelName('AMOUNT_COLLAPSED')]: {
                bind: 'setProperties'
              },
              [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_MESSAGE')]: {
                bind: 'setProperties'
              },
              [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME')]: {
                bind: 'isNotEnoughAmount'
              },
              [getChannelName('HIDE_SIMULATOR')]: {
                bind: 'showSimulator'
              },
              [getChannelName('SIMULATE_MAX_LIMIT')]: {
                bind: 'maxValue'
              },
              [getChannelName('MESSAGE_OTHER_LIQUIDITY')]: {
                bind: 'infoMessage'
              },
              [getChannelName('INITIAL_MIN_LIMIT')]: {
                bind: 'minValue'
              },
              [getChannelName('INITIAL_MIN_LIMIT_MESSAGE')]: {
                bind: 'rageMessageBeforeNumber'
              },
              [getChannelName('SCROLL_COMPLETE')]: {
                bind: 'scrollComplete'
              }
            },
            out: {
              [getChannelName('REGISTER_STEP_CHANNEL')]: {
                bind: 'register-step'
              },
              [getChannelName('COLLAPSE_OTHER_STEP')]: {
                bind: 'change-pressed'
              },
              [getChannelName('FOCUS_IN')]: {
                bind: 'cells-step-focus-in'
              },
              [getChannelName('SEND_AMMOUNT_TO_SIMULATE')]: {
                bind: 'send-step-amount-value'
              },
              [getChannelName('NEXT_STEP')]: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              [getChannelName('enter_amount')]: {
                bind: 'send-step-amount-value'
              }
            }
          }
        },
        propertiesSpherica: {
          displayedCurrentStep: 1,
          maxStepsCustom: 2,
          hideCurrentStepLabel: false,
          showTextRightIcon: true,
          className: 'no-background-container-info funds-hiring',
          infoType: 'info',
          stepTitle: 'cells-funds-withdrawal-sale-amount-step-header-purchase-spherica',
          stepDescription: 'cells-funds-withdrawal-indication-amount-purchase-spherica',
          messageText: 'cells-funds-withdrawal-notification-message-purchase-spherica',
          amountRangeMessage: 'cells-funds-withdrawal-info-message-form-amount-min-fund-amount-purchase-input-before-spherica',
          amountErrorMinLimitMessage: 'cells-investments-funds-amount-error-min-limit-message-contribution-spherica',
          amountErrorMaxLimitMessage: 'cells-investments-funds-amount-error-max-limit-message-contribution-spherica',
          filledAmountLabel: 'cells-funds-withdrawal-summary-view-amount-operation-spherica',
          amountInputLabel: 'cells-funds-withdrawal-sale-amount-step-input-label-spherica',
          changeLabel: 'cells-funds-withdrawal-change-label'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-product-selector',
        tagSpherica: 'cells-step-product-selector-spherica',
        type: 'UI',
        properties: {
          customSelected: {
            filledAlignment: {
              right: true,
              top: false
            }
          },
          id: 'cells-step-product-selector',
          errorMessage: getLocaleName('ERROR-MESSAGE'),
          currentStep: 3,
          stepTitle: 'cells-funds-withdrawal-account-step-header',
          productsListLabel: getLocaleName('LIST-PRODUCTS'),
          className: 'funds-investment funds-purchase',
          visibleChars: isSpherica ? 4 : VISIBLE_CHARS,
          header: 'cells-funds-withdrawal-choice-account-text-purchase',
          changeOriginText: 'cells-step-product-selector-change-selection-button-label',
          localCurrency: getLocalCurrency(),
          disabled: true,
          shouldHideChangeButton: true,
          disableChange: true,
          cellsConnections: {
            in: {
              [getChannelName('INIT_PAGE')]: {
                bind: 'initialize'
              },
              [getChannelName('ASSOCIATED_ACCOUNT_INFO')]: {
                bind: 'products'
              },
              [getChannelName('SCROLL_COMPLETE')]: {
                bind: 'scrollComplete'
              }
            },
            out: {
              [getChannelName('REGISTER_STEP_CHANNEL')]: {
                bind: 'register-step'
              },
              [getChannelName('NEXT_STEP')]: {
                bind: 'on-change-product-selected'
              },
              [getChannelName('FOCUS_IN')]: {
                bind: 'cells-step-focus-in'
              }
            }
          }
        },
        propertiesSpherica: {
          maxSteps: 2,
          displayedCurrentStep: 2,
          hideCurrentStepLabel: false,
          savedProductItemClass: 'one-product-without-panel'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        tagSpherica: 'cells-icon-message-spherica',
        properties: {
          id: 'cells-icon-message-out-of-time',
          type: 'warning',
          className: 'margin-l',
          icon: 'coronita:info',
          class: 'message-connection',
          hidden: true,
          cellsConnections: {
            in: {
              [getChannelName('SHOW_LAST_ICON_MESSAGE_OUT_OF_TIME')]: {
                bind: 'hidden'
              },
              [getChannelName('LAST_ICON_MESSAGE_OUT_OF_TIME')]: {
                bind: 'message'
              }
            },
            out: {}
          }
        },
        propertiesSpherica: {
          icon: 'coronita:caution'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        tagSpherica: 'cells-icon-message-spherica',
        properties: {
          id: 'cells-icon-message',
          type: 'info-light-blue',
          className: 'margin-l funds-investment-last-spacing custom-info-light',
          message: 'cells-funds-withdrawal-final-info-amount-purchase',
          icon: 'coronita:info',
          hidden: true,
          cellsConnections: {
            in: {
              [getChannelName('LAST_ICON_MESSAGE')]: {
                bind: 'hidden'
              }
            },
            out: {}
          }
        },
        propertiesSpherica: {
          type: 'info'
        }
      },
      {
        zone: 'app__confirm',
        type: 'UI',
        tag: 'cells-summary-view',
        tagSpherica: 'cells-summary-view-spherica',
        properties: {
          id: 'cells-summary-view',
          showLoadingSkeleton: true,
          showAddition: true,
          className: 'funds-investment',
          buttonLabel: 'cells-summary-view-subscribe-purchase',
          summaryViewTitle: 'cells-funds-withdrawal-summary-view-amount-operation',
          itfIcon: 'coronita:help',
          operationAmountClass: 'amount-huge-decimals',
          localCurrency: getLocalCurrency(),
          hideCustomFeesMessage: true,
          managmentFeesMessage: 'sale-funds-withdrawal',
          cellsConnections: {
            in: {
              [getChannelName('SET_INFO_STICKY')]: {
                bind: 'operation'
              }
            },
            out: {
              [getChannelName('SET_INFO_AMOUNT_STICKY')]: {
                bind: 'summary-closed'
              }
            }
          }
        },
        propertiesSpherica: {
          primaryButtonClass: 'positive',
          summaryViewTitle: 'cells-funds-withdrawal-summary-view-amount-operation-spherica'
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-funds-operation-manager',
        type: 'DM',
        properties: {
          pageName: PAGE_NAME,
          businessStartTime: '08:30:00',
          businessFinalTime: '13:30:00',
          localCurrency: getLocalCurrency(),
          visibleChars: VISIBLE_CHARS,
          cellsConnections: {
            in: {
              dashboard_accounts: {
                bind: 'setStorage'
              },
              FUND_CONTRACTED_DETAIL_SHOW_CONTRIBUTION_FLOW: {
                bind: 'parseFundDetailInfo'
              },
              [getChannelName('INIT_PAGE')]: {
                bind: 'getCustomerDetail'
              },
              [getChannelName('SUCCESS_CUSTOMER_ID_DETAIL')]: {
                bind: 'contactDetails'
              },
              [getChannelName('ERROR_CUSTOMER_ID_DETAIL')]: {
                bind: 'contactDetails'
              },
              [getChannelName('SUCCESS_SUBSCRIPTION_FROM_DM')]: {
                bind: 'successContributionOperation'
              },
              [getChannelName('ERROR_SUBSCRIPTION_FROM_DM')]: {
                bind: 'errorContributionOperation'
              },
              [getChannelName('SEND_AMMOUNT_TO_SIMULATE')]: {
                bind: 'requestSimlation'
              },
              [getChannelName('ACTIVATE_STIKY')]: {
                bind: 'sendInfoSticky'
              },
              [getChannelName('SET_INFO_AMOUNT_STICKY')]: {
                bind: 'requestContribution'
              },
              [getChannelName('SUCCES_POST_SUBSCRIPTION_SIMULATE')]: {
                bind: 'simulationData'
              },
              [getChannelName('ERROR_POST_SUBSCRIPTION_SIMULATE')]: {
                bind: 'responseSimulationError'
              },
              [getChannelName('SHOW_BUTTON_FINISH_STEPS')]: {
                bind: 'canExecute'
              },
              [getChannelName('SCOLL_TEMPLATE')]: {
                bind: 'animationStiky'
              },
              [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
                bind: 'modalConfirmExit'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'handledOperationBack'
              },
              product_detail_fund_flags: {
                bind: 'fundFlag'
              },
              [getChannelName('SCROLL_ZONE')]: {
                bind: 'scrollZoneModify'
              },
              funds_contribution_serie_is_not_available_cancel_modal: {
                bind: 'fundDetailNotAvailableWithdrawal'
              }
            },
            out: {
              [getChannelName('SET_CUSTOMER_ID')]: {
                bind: 'set-customer-id'
              },
              [getChannelName('REQUEST_CUSTOMER_ID_DETAIL')]: {
                bind: 'request-customer-detail'
              },
              [getChannelName('REQUEST_SUBSCRIPTION_DETAIL')]: {
                bind: 'request-contribution-payload',
                analytics: ANALYTICS.MODAL_OTP
              },
              [getChannelName('INITIAL_INFO_CONTRACT_CARD_OFFER')]: {
                bind: 'set-contract-card-offer'
              },
              [getChannelName('INITIAL_INFO_CONTRACT_OFFER_TAXES')]: {
                bind: 'set-contract-offer-page-taxes-info'
              },
              [getChannelName('ASSOCIATED_ACCOUNT_INFO')]: {
                bind: 'set-associated-account-event'
              },
              [getChannelName('SHOW_SIMULATOR')]: {
                bind: 'set-simulation-detail-event'
              },
              [getChannelName('SET_INFO_STICKY')]: {
                bind: 'send-step-amount-sticky-value'
              },
              [getChannelName('MESSAGE_OTHER_LIQUIDITY')]: {
                bind: 'message-other-liquidity-event'
              },
              funds_investments_set_header_color: {
                bind: 'set-header-title'
              },
              funds_contribution_set_header_color_ios: {
                bind: 'set-color-header-success-ios'
              },
              [getChannelName('AMOUNT_COLLAPSED')]: {
                bind: 'set-amount-collapsed-event'
              },
              [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_MESSAGE')]: {
                bind: 'set-amount-collapsed-simulator-out-of-time-message'
              },
              [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME')]: {
                bind: 'set-amount-collapsed-simulator'
              },
              [getChannelName('NEXT_STEP')]: {
                bind: 'set-amount-collapsed-simulator'
              },
              [getChannelName('LAST_ICON_MESSAGE')]: {
                bind: 'show-last-icon-message-event'
              },
              [getChannelName('SHOW_LAST_ICON_MESSAGE_OUT_OF_TIME')]: {
                bind: 'show-last-icon-message-out-of-time-event'
              },
              [getChannelName('LAST_ICON_MESSAGE_OUT_OF_TIME')]: {
                bind: 'last-icon-message-out-of-time-event'
              },
              open_control_veil: {
                bind: 'show-veil-simulation-event'
              },
              close_control_veil: {
                bind: 'hide-veil-simulation-event'
              },
              [getChannelName('POST_SIMULATE_SUBSCRIPTION')]: {
                bind: 'request-subscriptions-simulate'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-main-modal'
              },
              [getChannelName('SUCCESS_ANALYTICS')]: {
                bind: 'success-transaction-screen-analytics'
              },
              navigate_to_funds_investments_contribution_success_result: {
                bind: 'success-transaction-screen-result'
              },
              NAVIGATE_TO_FUNDS_INVESTMENTS_CONTRIBUTION_SUCCESS: {
                bind: 'success-transaction-screen',
                link: {
                  page: 'fundsInvestmentsContributionSuccessPage'
                }
              },
              dashboard_refresh_financial_overview: {
                bind: 'success-transaction-screen'
              },
              funds_withdrawal_accept_modal: {
                bind: 'success-transaction-screen'
              },
              [getChannelName('SIMULATE_MAX_LIMIT')]: {
                bind: 'simulation-related-contract-max-limit'
              },
              [getChannelName('CONFIRM_ANIMATION')]: {
                bind: 'open-stiky-animation'
              },
              [getChannelName('RESET_SCROLL')]: {
                bind: 'reset-scroll'
              },
              [getChannelName('INITIAL_INFO_INFO_MESSAGE')]: {
                bind: 'set-info-message'
              },
              [getChannelName('INITIAL_MIN_LIMIT')]: {
                bind: 'found-amount-min-limit'
              },
              [getChannelName('INITIAL_MIN_LIMIT_MESSAGE')]: {
                bind: 'found-amount-min-limit-message'
              },
              [getChannelName('HANDLED_NAVIGATION_BACK')]: {
                bind: 'back-navigation-pressed-dashboard'
              },
              [getChannelName('SCROLL_ZONE_MODIFY')]: {
                bind: 'cells-scroll-zone-modify'
              },
              FUND_CONTRACTED_DETAIL_SHOW_WITHDRAWAL_FLOW: {
                bind: 'redirect-to-withdrawal-fund-not-available',
                link: {
                  page: 'fundsWithdrawal'
                }
              }
            },
            params: {
              setStorage: 'global_user'
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'open-main-modal'
                }
              }
            },
            remove: {
              out: [
                'global_alert_manager_open_with_settings',
                'funds_investments_set_header_color',
                'funds_contribution_set_header_color_ios'
              ]
            }
          }
        }
      }
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-investment-funds', PAGE_NAME, ['set-fund-subscription', 'error-on-post-fund-subscription']);

  connectionsOut('cells-sign-operation-dm-mx').funds_contribution_sign_close_modal = {
    bind: 'signature-cancel-fundsContribution'
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
