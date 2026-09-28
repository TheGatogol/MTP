'use strict';

module.exports = CONFIG => {

  const utils = require('./common/helpers/_utils');
  const { getCountry, getLocalCurrency, useNames, toUnderscoreCase, getLanguage } = utils;
  const COUNTRY = getCountry(CONFIG);
  const LOCAL_CURRENCY = getLocalCurrency(CONFIG);
  const LANGUAGE = getLanguage(CONFIG);// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const pages = require('./common/_pages')(CONFIG)('fundsWithdrawal');
  const isNativeIos = CONFIG.nativaIos || false;
  const PAGE_NAME = 'fundsWithdrawal';
  const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const ANALYTICS = require('./analytics/_fundsWithdrawal')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          funds_withdrawal_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          funds_withdrawal_cancel_modal_leave: {
            bind: 'alert-FUNDS-OPERATION-LEAVE-OPERATIVE-cancel'
          },
          funds_withdrawal_accept_modal_leave: {
            bind: 'alert-FUNDS-OPERATION-LEAVE-OPERATIVE-accept',
            backStep: true
          },
          funds_withdrawal_cancel_modal: {
            bind: 'alert-FUNDS-OPERATION-CHANGE-OP-cancel'
          },
          funds_withdrawal_accept_change_modal: {
            bind: 'alert-FUNDS-OPERATION-CHANGE-OP-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: COUNTRY + 'funds-withdrawal',
    currentPage: {
      url: '/funds-withdrawal',
      params: []
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        headerHeight: utils.headerHeight,
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
            },
            FUNDS_WITHDRAWAL__INPUT_FOCUS_IN: {
              bind: 'recalculateStatusBarTop'
            },
            FUNDS_WITHDRAWAL__INPUT_FOCUS_OUT: {
              bind: 'recalculateHeader'
            },
            FUNDS_WITHDRAWAL__INPUT_FOCUS_OUT_RESET_STATUS_BAR: {
              bind: 'recalculateStatusBarTop'
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
      }
    },
    components: [
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          continue: 'dashboard',
          className: isNativeIos ? 'ios-top-padding safe-card-header header--core' : 'header--core',
          leftIcon: 'coronita:close',
          leftIconSize: '22',
          titleName: 'cells-funds-withdrawal-success-screen-header-sale',
          cellsConnections: {
            in: {
              add_header_class: {
                bind: 'setSecondaryClass'
              },
              remove_header_class: {
                bind: 'removeSecondaryClass'
              },
              [`global_${getChannelName('exit_accept')}`]: {
                bind: 'removeSecondaryClass'
              },
              [getChannelName('GO_BACK')]: {
                bind: 'navigate'
              },
              [getChannelName('GO_BACK')]: {
                bind: 'removeSecondaryClass'
              }
            },
            out: {
              [getChannelName('GO_BACK_NAVIGATION')]: {
                bind: 'click-left-button'
              }
            }
          }
        },
        propertiesSpherica: sphericaPageUtils.getProperties({
          componentName: 'cells-molecule-header-spherica',
          type: 'modal',
          override: {
            leftIcon: '',
            leftIconSize: '',
            rightIcon: 'coronita:close',
            rightIconSize: '24',
            rightIconText: 'cells-funds-withdrawal-success-screen-button-spherica',
            className: `header--white header ${isNativeIos ? 'safe-card-header' : ''}`,
            secondaryClass: '',
            titleName: 'cells-funds-withdrawal-success-screen-header-sale',
            cellsConnections: {
              out: {
                FUNDS_WITHDRAWAL_GO_BACK_NAVIGATION: {
                  bind: 'click-right-button'
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
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false,
            'set-custom-selected': ''
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
              [getChannelName('SET_SELECTED')]: {
                bind: 'set-custom-selected'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                'funds_withdrawal_reset_page': {
                  bind: 'reset'
                }
              }
            }
          }
        }
      },
      SPINNER,
      {
        zone: 'app__main',
        tag: 'glomo-opx-funds-contribution-dm',
        type: 'DM',
        properties: {
          lang: LANGUAGE,
          autoActivateStep: true,
          repeatOperative: true,
          decorateSteps: true,
          operativeName: 'fundsWithdrawal',
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
              [getChannelName('INFO_DETAIL_COLLAPSED_SIMULATION')]: {
                bind: 'goToNext'
              },
              [getChannelName('REGISTER_STEP_CHANNEL')]: {
                bind: 'registerStep'
              },
              [getChannelName('GO_BACK')]: {
                bind: 'reset'
              },
              NAVIGATE_TO_FUNDS_INVESTMENTS_WITHDRAWAL_SUCCESS: {
                bind: 'reset'
              },
              navigation_investment_funds_to_dashboard: {
                bind: 'reset'
              },
              [getChannelName('OFFER_PAGE_NEXT_STEP')]: {
                bind: 'showExitConfirm'
              },
              [getChannelName('SELECTED_ORIGIN_ACCOUNT')]: {
                bind: 'showExitConfirm'
              },
              [getChannelName('DECOUPLE_ACCEPTED_SIMULATOR')]: {
                bind: 'resetFollowingSteps'
              },
              [getChannelName('DECOUPLE_OPERATION_TYPE_ACCEPTED')]: {
                bind: 'goToStep'
              },
              funds_withdrawal_accept_modal: {
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
              [getChannelName('ENFOCADO_IN')]: {
                bind: 'current-step-changed'
              },
              [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
                bind: 'show-close-confirm'
              },
              [getChannelName('SCROLL_ZONE')]: {
                bind: 'cells-scroll-zone'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              in: {
                funds_withdrawal_accept_modal_leave: {
                  bind: 'reset'
                }
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
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          otpId: PAGE_NAME,
          cellsConnections: {
            in: {
              [getChannelName('POST_SIMULATE_REDEEMS')]: {
                bind: 'postFundSimulateRedeems'
              },
              [getChannelName('REQUEST_WITHDRAWAL_DETAIL')]: {
                bind: 'postRedeem'
              }
            },
            out: {
              [getChannelName('SUCCESS_POST_REDEEMS_SIMULATE')]: {
                bind: 'success-on-post-redeems-simulate'
              },
              [getChannelName('ERROR_POST_REDEEMS_SIMULATE')]: {
                bind: 'error-on-post-redeems-simulate'
              },
              [getChannelName('SUCCESS_REDEEM_FROM_DM')]: {
                bind: 'set-fund-redeem'
              },
              [getChannelName('ERROR_REDEEM_FROM_DM')]: {
                bind: 'error-on-post-fund-redeem'
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
          active: true,
          scrolled: true,
          collapsed: true,
          className: 'equity-contracts',
          currentStep: 1,
          currencyCode: 'MXN',
          language: LANGUAGE,
          localCurrency: 'MXN',
          featuresText: 'cells-funds-withdrawal-characteristics',
          disableChange: true,
          availableLineText: 'cells-funds-withdrawal-balance-fund',
          keepInMindText: 'cells-funds-withdrawal-requirements',
          infoMessageDescription: 'cells-funds-withdrawal-notification-message-onboarding-2',
          stepTitle: 'cells-funds-withdrawal-fund-data-step-header',
          digitalNumber: 5,
          wantButtonText: 'cells-funds-withdrawal-offerpage-button',
          hideCollapsedBenefits: true,
          hideBenefitsSubHeader: true,
          showSmallAmountAvailableLine: true,
          showInfoMessage: true,
          showContractNumberCollapsed: true,
          hideImageCollapsed: true,
          cellsConnections: {
            in: {
              [getChannelName('COLLAPSED_OFFER_WITHDRAWAL')]: {
                bind: 'collapsed'
              },
              [getChannelName('INIT_PAGE')]: {
                bind: 'initialize'
              },
              [getChannelName('INITIAL_INFO_CONTRACT_CARD_OFFER')]: {
                bind: 'cardOffer'
              },
              [getChannelName('INITIAL_INFO_CONTRACT_OFFER_TAXES')]: {
                bind: 'taxesInfo'
              },
              [getChannelName('CARD_OFFER')]: {
                bind: 'cardOffer'
              },
              [getChannelName('OFFER_CONTINUE_BUTTON_STATUS')]: {
                bind: 'isContinueButtonDisabled'
              },
              [getChannelName('REMOVE_DECORATED_COLLAPSED')]: {
                bind: 'decorated'
              },
              [getChannelName('OFFER_ERROR_MESSAGE')]: {
                bind: 'errorMessage'
              },
              [`global_data_access_validator_${PAGE_NAME}_email_open_modal`]: {
                bind: 'disableForm'
              },
              [`global_data_access_validator_${PAGE_NAME}_info_validated`]: {
                bind: 'enableForm'
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
              remove_header_class: {
                bind: 'change-pressed'
              },
              [getChannelName('FIRST_STEP')]: {
                bind: 'change-pressed'
              }
            }
          }
        },
        propertiesSpherica: {
          maxSteps: 4
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-product-selector',
        tagSpherica: 'cells-step-product-selector-spherica',
        type: 'UI',
        properties: {
          errorMessage: getLocaleName('error-message'),
          currentStep: 2,
          active: true,
          stepTitle: 'cells-funds-withdrawal-account-step-header',
          productsListLabel: getLocaleName('list-products'),
          className: 'funds-investment investment-header-spacing',
          header: 'cells-funds-withdrawal-choice-account-text-sale',
          changeOriginText: 'cells-step-product-selector-change-selection-button-label',
          visibleChars: 5,
          localCurrency: LOCAL_CURRENCY,
          disabled: true,
          shouldHideChangeButton: true,
          disableChange: true,
          cellsConnections: {
            in: {
              [getChannelName('INIT_PAGE')]: {
                bind: 'initialize'
              },
              [getChannelName('SET_SELECTED')]: {
                bind: 'setCustomSelected'
              },
              [getChannelName('COLLAPSED_ACCOUNT_STEP')]: {
                bind: 'collapsed'
              },
              [getChannelName('ACTIVE_ASSOCIATED_ACCOUNT_STEP')]: {
                bind: 'active'
              },
              [getChannelName('ASSOCIATED_ACCOUNT_INFO')]: {
                bind: 'products'
              },
              [getChannelName('COLLAPSED_ACCOUNT_INFO')]: {
                bind: 'selected'
              },
              [getChannelName('MAX_ACCOUNTS')]: {
                bind: 'maxProducts'
              },
              [getChannelName('SELECTED_PRODUCT_FROM_MODAL')]: {
                bind: 'onProductSelected'
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
              [getChannelName('SELECTED_ORIGIN_ACCOUNT')]: {
                bind: 'on-change-product-selected'
              },
              [getChannelName('COLLAPSE_OTHER_STEP')]: {
                bind: 'change-pressed'
              },
              [getChannelName('SHOW_ALL_USER_ACOUNTS')]: {
                bind: 'view-all'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          maxSteps: 4,
          variant: '',
          savedProductItemClass: 'one-product-without-panel',
          newCellsConnections: {
            add: {
              in: {
                funds_withdrawal_reset_page: {
                  bind: 'resetCollapsedStep'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-select-operation-type',
        tagSpherica: 'cells-step-select-operation-type-spherica',
        type: 'UI',
        properties: {
          id: 'cells-step-select-operation-type',
          currentStep: 3,
          className: 'investment-header-spacing',
          stepTitle: 'cells-funds-withdrawal-sale-type-step-header',
          changeLabel: 'Cambiar',
          stepDescription: getLocaleName('subscription-amount-step-description'),
          disabled: true,
          operationDescription: 'cells-funds-withdrawal-sale-type-step-description',
          cellsConnections: {
            in: {
              [getChannelName('INIT_PAGE')]: {
                bind: 'initialize'
              },
              [getChannelName('ACTIVE_TYPE_SALE')]: {
                bind: 'active'
              },
              [getChannelName('OPERATIONS_TYPES')]: {
                bind: 'operations'
              },
              [getChannelName('SCROLL_COMPLETE')]: {
                bind: 'scrollComplete'
              },
              [getChannelName('CHANGE_TITLE')]: {
                bind: 'setProperties'
              }
            },
            out: {
              [getChannelName('REGISTER_STEP_CHANNEL')]: {
                bind: 'register-step'
              },
              [getChannelName('BUILD_ALERT_TO_COLLAPSED')]: {
                bind: 'change-pressed'
              },
              [getChannelName('NEXT_STEP')]: {
                bind: 'change-step-event'
              },
              [getChannelName('PARTIAL_SELECTED')]: {
                bind: 'select-operation-type-partial'
              },
              [getChannelName('TOTAL_SELECTED')]: {
                bind: 'select-operation-type-total'
              },
              [getChannelName('FOCUS_IN')]: {
                bind: 'cells-step-focus-in'
              }
            }
          }
        },
        propertiesSpherica: {
          maxSteps: 4,
          changeLabel: 'cells-funds-withdrawal-change-label',
          className: 'investment-header-spacing filled-normal-weight'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-simulation-operation',
        tagSpherica: 'cells-step-simulation-operation-spherica',
        type: 'UI',
        properties: {
          id: 'cells-step-simulation-operation',
          currentStep: 4,
          hideCurrentStepLabel: true,
          className: 'equity-contracts',
          localCurrency: 'MXN',
          currency: 'MXN',
          language: LANGUAGE,
          buttonText: 'cells-funds-withdrawal-calculate-button-text',
          stepTitle: 'cells-funds-withdrawal-sale-amount-step-header-sales',
          stepDescription: 'cells-funds-withdrawal-indication-amount-sales',
          messageText: 'cells-funds-withdrawal-notification-message-sales',
          infoMessage: 'Mensaje',
          type: 'tel',
          showSimulator: false,
          showEnterAmount: false,
          showInfoMessage: true,
          infoType: 'info',
          showRanges: true,
          amountErrorMinLimitMessage: 'cells-investments-funds-amount-error-min-limit-message-withdrawal',
          amountErrorMaxLimitMessage: 'cells-investments-funds-amount-error-max-limit-message-withdrawal',
          rageMessageAfterNumber: 'cells-funds-withdrawal-info-message-form-amount-min-fund-amount-sale',
          rageMessageBeforeNumber: 'cells-funds-withdrawal-info-message-form-amount-min-fund-amount-sale-between',
          infoMessageSimulationValue: 'cells-funds-withdrawal-redeems-message-sale',
          filledAmountLabel: 'Importe',
          changeLabel: 'Cambiar',
          hiddenMinLimit: false,
          range: true,
          multipleRange: 0,
          complexAmountErrorMaxLimitMessage: true,
          showIconInInputRangeMessage: true,
          keepValues: [
            'maxValue',
            'minValue',
            'showInfoMessage',
            'currency'
          ],
          cellsConnections: {
            in: {
              [getChannelName('INIT_PAGE')]: {
                bind: 'initialize'
              },
              [getChannelName('SUBSCRIPTION_CURRENCY')]: {
                bind: 'currency'
              },
              [getChannelName('INIT_CURRENCY')]: {
                bind: 'initCurrency'
              },
              [getChannelName('MESSAGE_OTHER_LIQUIDITY')]: {
                bind: 'infoMessage'
              },
              [getChannelName('INITIAL_MIN_LIMIT')]: {
                bind: 'minValue'
              },
              [getChannelName('MAX_SUBSCRIPTION_LIMIT')]: {
                bind: 'maxLimit'
              },
              [getChannelName('SHOW_INPUT_PARTIAL_EVENT')]: {
                bind: 'showSimulator'
              },
              [getChannelName('DETAIL_SIMULATION_EVENT')]: {
                bind: 'simulationInfo'
              },
              [getChannelName('BUTTONS_SIMULATOR_AND_CHNAGE_COLLAPSED')]: {
                bind: 'setProperties'
              },
              [getChannelName('AMOUNT_COLLAPSED_TOTAL')]: {
                bind: 'setProperties'
              },
              [getChannelName('INFO_DETAIL_COLLAPSED_SIMULATION')]: {
                bind: '_amount'
              },
              [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_MESSAGE')]: {
                bind: 'setProperties'
              },
              [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_TOTAL')]: {
                bind: 'isNotEnoughAmount'
              },
              [getChannelName('HIDE_SIMULATOR')]: {
                bind: 'showSimulator'
              },
              [getChannelName('FOUND_AMOUNT_SIMULATE_MAX_LIMIT')]: {
                bind: 'maxValue'
              },
              [getChannelName('KEEP_OPEN_SIMULATOR')]: {
                bind: 'keepOpened'
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
                bind: 'cells-confirm-buttons-click-primary'
              },
              [getChannelName('COLLAPSE_OTHER_STEP')]: {
                bind: 'change-pressed'
              },
              [getChannelName('REQUEST_SIMULATION_EVENT_PARTIAL')]: {
                bind: 'send-step-amount-value'
              },
              [getChannelName('SHOW_ICON_MESSAGE')]: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              [getChannelName('FOCUS_IN')]: {
                bind: 'cells-step-focus-in'
              },
              [getChannelName('CHANGE_TITLE')]: {
                bind: 'data-change-next-step'
              }
            }
          }
        },
        propertiesSpherica: {
          maxSteps: 4,
          maxStepsCustom: 4,
          hideCurrentStepLabel: false,
          amountRangeMessage: '',
          stepTitle: 'cells-funds-withdrawal-sale-amount-step-header-sales-spherica',
          stepDescription: 'cells-funds-withdrawal-indication-amount-sales-spherica',
          messageText: 'cells-funds-withdrawal-notification-message-sales-spherica',
          rageMessageAfterNumber: 'cells-funds-withdrawal-info-message-form-amount-min-fund-amount-sale',
          rageMessageBeforeNumber: 'cells-funds-withdrawal-info-message-form-amount-min-fund-amount-sale-between-spherica',
          changeLabel: 'cells-funds-withdrawal-change-label',
          filledAmountLabel: 'cells-funds-withdrawal-filled-amount',
          amountInputLabel: 'cells-funds-withdrawal-sale-amount-step-input-label-spherica',
          showTextRightIcon: true,
          showMinAndMaxLim: true
        }
      },
      {
        zone: 'app__confirm',
        type: 'UI',
        tag: 'cells-summary-view',
        tagSpherica: 'cells-summary-view-spherica',
        properties: {
          showLoadingSkeleton: true,
          showAddition: true,
          className: '',
          buttonLabel: 'cells-funds-withdrawal-all-completed-button-text-purchase',
          summaryViewTitle: 'cells-funds-withdrawal-summary-view-amount-operation',
          itfIcon: 'coronita:help',
          operationAmountClass: 'amount-huge-decimals',
          localCurrency: LOCAL_CURRENCY,
          hideCustomFeesMessage: true,
          managmentFeesMessage: 'sale-funds-withdrawal',
          cellsConnections: {
            in: {
              [getChannelName('SET_INFO_AMOUNT_STICKY')]: {
                bind: 'operation'
              }
            },
            out: {
              [getChannelName('ACEPTED_FINAL_AMOUNT')]: {
                bind: 'summary-closed'
              }
            }
          }
        },
        propertiesSpherica: {
          summaryViewTitle: 'cells-funds-withdrawal-summary-view-amount-operation-spherica',
          primaryButtonClass: 'positive'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-funds-operation-manager',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          pageName: PAGE_NAME,
          cellsConnections: {
            in: {
              dashboard_accounts: {
                bind: 'setStorage'
              },
              FUND_CONTRACTED_DETAIL_SHOW_WITHDRAWAL_FLOW: {
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
              [getChannelName('SUCCESS_REDEEM_FROM_DM')]: {
                bind: 'successWithDrawalOperation'
              },
              [getChannelName('ERROR_REDEEM_FROM_DM')]: {
                bind: 'errorWithdrawalOperation'
              },
              [getChannelName('SELECTED_ORIGIN_ACCOUNT')]: {
                bind: 'acceptedAccount'
              },
              [getChannelName('PARTIAL_SELECTED')]: {
                bind: 'showInput'
              },
              [getChannelName('TOTAL_SELECTED')]: {
                bind: 'hideInput'
              },
              [getChannelName('SHOW_BUTTON_FINISH_STEPS')]: {
                bind: 'showIconMessageAlert'
              },
              [getChannelName('REQUEST_SIMULATION_EVENT_PARTIAL')]: {
                bind: 'requestSimlation'
              },
              [getChannelName('SHOW_ICON_MESSAGE')]: {
                bind: 'showIconMessageAlert'
              },
              [getChannelName('ACEPTED_FINAL_AMOUNT')]: {
                bind: 'requestWithdrawal'
              },
              [getChannelName('BUILD_ALERT_TO_COLLAPSED')]: {
                bind: 'createAlertCollapsedOperation'
              },
              funds_withdrawal_accept_change_modal: {
                bind: 'decoupleLastComponents'
              },
              [getChannelName('SUCCESS_POST_REDEEMS_SIMULATE')]: {
                bind: 'responseSimulationSuccess'
              },
              [getChannelName('ERROR_POST_REDEEMS_SIMULATE')]: {
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
              funds_withdrawal_accept_modal: {
                bind: 'initPrefiledStep'
              },
              [getChannelName('GO_BACK')]: {
                bind: 'initPrefiledStep'
              },
              NAVIGATE_TO_FUNDS_INVESTMENTS_WITHDRAWAL_SUCCESS: {
                bind: 'initPrefiledStep'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'handledOperationBack'
              },
              product_detail_fund_flags: {
                bind: 'fundFlag'
              },
              [getChannelName('SCROLL_ZONE')]: {
                bind: 'scrollZoneModify'
              }
            },
            out: {
              [getChannelName('SET_CUSTOMER_ID')]: {
                bind: 'set-customer-id'
              },
              [getChannelName('REQUEST_CUSTOMER_ID_DETAIL')]: {
                bind: 'request-customer-detail'
              },
              [getChannelName('REQUEST_WITHDRAWAL_DETAIL')]: {
                bind: 'request-withdrawal-payload',
                analytics: ANALYTICS.MODAL_OTP
              },
              [getChannelName('INITIAL_INFO_CONTRACT_CARD_OFFER')]: {
                bind: 'set-contract-card-offer'
              },
              [getChannelName('INITIAL_INFO_CONTRACT_OFFER_TAXES')]: {
                bind: 'set-contract-offer-page-taxes-info'
              },
              [getChannelName('COLLAPSED_OFFER_WITHDRAWAL')]: {
                bind: 'collapsed-offerpage-withdrawal'
              },
              [getChannelName('ANALYTICS_SECOND_STEP_FILLED')]: {
                bind: 'second-step-filled'
              },
              [getChannelName('ACTIVE_ASSOCIATED_ACCOUNT_STEP')]: {
                bind: 'active-step-account-event'
              },
              [getChannelName('ACTIVE_TYPE_SALE')]: {
                bind: 'active-step-type-sale-event'
              },
              [getChannelName('ASSOCIATED_ACCOUNT_INFO')]: {
                bind: 'set-associated-account-event'
              },
              [getChannelName('COLLAPSED_ACCOUNT_INFO')]: {
                bind: 'collapsed-associated-account-event'
              },
              [getChannelName('COLLAPSED_ACCOUNT_STEP')]: {
                bind: 'collapsed-step-account-event'
              },
              [getChannelName('OPERATIONS_TYPES')]: {
                bind: 'set-types-of-operations-event'
              },
              [getChannelName('REMOVE_DECORATED_COLLAPSED')]: {
                bind: 'remove-decorated'
              },
              [getChannelName('MESSAGE_OTHER_LIQUIDITY')]: {
                bind: 'message-other-liquidity-event'
              },
              [getChannelName('SHOW_INPUT_PARTIAL_EVENT')]: {
                bind: 'show-input-funds-sale-partial'
              },
              [getChannelName('DETAIL_SIMULATION_EVENT')]: {
                bind: 'set-simulation-detail-event'
              },
              [getChannelName('BUTTONS_SIMULATOR_AND_CHNAGE_COLLAPSED')]: {
                bind: 'manage-buttons-simulator-and-change'
              },
              [getChannelName('SET_INFO_AMOUNT_STICKY')]: {
                bind: 'send-step-amount-sticky-value'
              },
              open_control_veil: {
                bind: 'show-veil-simulation-event'
              },
              close_control_veil: {
                bind: 'hide-veil-simulation-event'
              },
              [getChannelName('AMOUNT_COLLAPSED_TOTAL')]: {
                bind: 'set-amount-collapsed-event'
              },
              [getChannelName('INFO_DETAIL_COLLAPSED_SIMULATION')]: {
                bind: 'set-amount-collapsed-simulator'
              },
              [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_MESSAGE')]: {
                bind: 'set-amount-collapsed-simulator-out-of-time-message'
              },
              [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_TOTAL')]: {
                bind: 'set-amount-collapsed-simulator-out-of-time-total'
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
              [getChannelName('DECOUPLE_ACCEPTED_SIMULATOR')]: {
                bind: 'decouple-accepted-event'
              },
              [getChannelName('DECOUPLE_OPERATION_TYPE_ACCEPTED')]: {
                bind: 'decouple-operation-type-event'
              },
              [getChannelName('HIDE_SIMULATOR')]: {
                bind: 'reset-hide-simulator'
              },
              [getChannelName('POST_SIMULATE_REDEEMS')]: {
                bind: 'request-redeems-simulate'
              },
              [getChannelName('COLLAPSE_OTHER_STEP')]: {
                bind: 'collapsed-only-one-component'
              },
              funds_investments_success_set_title_header: {
                bind: 'set-header-title'
              },
              [getChannelName('SUCCESS_ANALYTICS')]: {
                bind: 'success-transaction-screen-analytics'
              },
              NAVIGATE_TO_FUNDS_INVESTMENTS_WITHDRAWAL_SUCCESS: {
                bind: 'success-transaction-screen',
                link: {
                  page: 'fundsInvestmentsWithdrawalSuccessPage'
                }
              },
              dashboard_refresh_financial_overview: {
                bind: 'success-transaction-screen'
              },
              [getChannelName('FOUND_AMOUNT_SIMULATE_MAX_LIMIT')]: {
                bind: 'found-amount-max-limit'
              },
              [getChannelName('CONFIRM_ANIMATION')]: {
                bind: 'open-stiky-animation'
              },
              [getChannelName('RESET_SCROLL')]: {
                bind: 'reset-scroll'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-main-modal'
              },
              [getChannelName('INITIAL_MIN_LIMIT')]: {
                bind: 'found-amount-min-limit'
              },
              [getChannelName('KEEP_OPEN_SIMULATOR')]: {
                bind: 'keep-opened-simulator'
              },
              [getChannelName('HANDLED_NAVIGATION_BACK')]: {
                bind: 'back-navigation-pressed-dashboard'
              },
              [getChannelName('SCROLL_ZONE_MODIFY')]: {
                bind: 'cells-scroll-zone-modify'
              },
              [getChannelName('CHANGE_TITLE')]: {
                bind: 'step-data-change'
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
              in: {
                funds_withdrawal_accept_modal_leave: {
                  bind: 'initPrefiledStep'
                }
              },
              out: {
                funds_withdrawal_alert_manager_open_with_settings_spherica: {
                  bind: 'open-main-modal'
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
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-funds-withdrawal-manager',
        familyPath: '@glomo-web-components/glomo-analytics-funds-withdrawal-manager',
        render: 'litElement',
        properties: {
          config: {
            buttons: {
              continue: 'continuar'
            },
            steps: {
              2: 'app-step-2',
              3: 'app-step-3',
              4: 'app-step-4',
              simulationGenerated: 'app-step-simulation-created',
              last: 'app-step-confirmation',
              sign: 'app-otp',
              receipt: 'receipt-success'
            }
          },
          cellsConnections: {
            in: {
              FUND_CONTRACTED_DETAIL_SHOW_WITHDRAWAL_FLOW: {
                bind: 'fireAppClickStart'
              },
              [getChannelName('INITIAL_INFO_CONTRACT_CARD_OFFER')]: {
                bind: 'firePageVisit'
              },
              [getChannelName('SELECTED_ORIGIN_ACCOUNT')]: {
                bind: 'fireAppStarted'
              },
              [getChannelName('ASSOCIATED_ACCOUNT_INFO')]: {
                bind: 'fireStepLoaded'
              },
              [getChannelName('DETAIL_SIMULATION_EVENT')]: {
                bind: 'fireSimulationGeneratedStep'
              },
              [getChannelName('REQUEST_SIMULATION_EVENT_PARTIAL')]: {
                bind: 'amountWithoutSimulating'
              },
              [getChannelName('FOCUS_IN')]: {
                bind: 'onStep'
              },
              [getChannelName('PARTIAL_SELECTED')]: {
                bind: 'operationSelectedPartial'
              },
              [getChannelName('TOTAL_SELECTED')]: {
                bind: 'operationSelectedTotal'
              },
              [getChannelName('SHOW_BUTTON_FINISH_STEPS')]: {
                bind: 'lastStepSticky'
              },
              NAVIGATE_TO_FUNDS_INVESTMENTS_WITHDRAWAL_SUCCESS: {
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
              [getChannelName('ANALYTICTS_SELECT_OPERATION')]: {
                bind: 'analytics-app-step-3',
                analytics: ANALYTICS.STEP_2
              },
              [getChannelName('ANALYTICTS_ENTER_AMOUT')]: {
                bind: 'analytics-app-step-4',
                analytics: ANALYTICS.AMOUNT_TO_SELL
              },
              [getChannelName('ANALYTICS_INFORMATION_SIMULATION')]: {
                bind: 'analytics-app-step-simulation-created',
                analytics: ANALYTICS.SIMULATION
              },
              [getChannelName('ANALYTICS_FINISH_STEP')]: {
                bind: 'analytics-app-step-confirmation',
                analytics: ANALYTICS.STEP_3
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
          className: 'margin-l h-gutter'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        tagSpherica: 'cells-icon-message-spherica',
        properties: {
          id: 'error-message',
          type: 'info-light-blue',
          className: 'margin-l funds-investment-last-spacing custom-info-light',
          message: 'cells-funds-withdrawal-final-info-amount-sale',
          icon: 'coronita:info',
          class: 'message-connection',
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
          type: 'info',
          className: 'margin-l h-gutter'
        }
      }
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-investment-funds', PAGE_NAME, ['set-fund-redeem', 'error-on-post-fund-redeem']);

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
