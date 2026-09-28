/* eslint-disable complexity */
'use strict';

module.exports = (CONFIG, OPERATIVE = 'pointsRedeemPurchases') => {
  const utils = require('./common/helpers/_utils');
  const ANALYTICS = require('./analytics/_pointsRedeemPurchases')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const isNativeIos = CONFIG.nativeIos || false;
  const COUNTRY = utils.getCountry(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('reward');
  const MAX_STEPS = 3;
  const PREFIX_NAME_CHANNEL = OPERATIVE.split(/(?=[A-Z])/).join('_').toLowerCase();

  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCALE = LANGUAGE;

  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'pointsRedeemPurchases');
  const isSpherica = sphericaPageUtils.isSpherica();

  const pages = require('./common/_pages')(CONFIG)('pointsRedeemPurchases');

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      language: LANGUAGE,
      localCurrency: LOCAL_CURRENCY,
      native: !!CONFIG.native,
      className: isNativeIos  ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          navigation_to_movement_from_points_redeem_channel: {
            bind: 'alert-POINTS-REDEEM-EXIT-OPERATIVE-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: COUNTRY + '-points-redeem-purchases',
    currentPage: {
      url: '/points-redeem-purchases',
      params: []
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        animationType: 'verticalUp',
        headerFixed: true,
        topOnConfirm: true,
        showConfirmInManualScroll: true,
        iOSFixedHeader: true,
        className: isNativeIos ? 'ios-top-padding bg-core-blue' : 'bg-core-blue',
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
              bind: 'scrollItemIntoView'
            },
            [PREFIX_NAME_CHANNEL + '_show_confirm']: {
              bind: 'showConfirm'
            },
            [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
              bind: 'close'
            },
            [PREFIX_NAME_CHANNEL + '_open_amount']: {
              bind: 'close'
            },
            [PREFIX_NAME_CHANNEL + '_summary_close']: {
              bind: 'close'
            },
            [PREFIX_NAME_CHANNEL + '_legal_terms_has_changed']: {
              bind: 'close'
            },
            [PREFIX_NAME_CHANNEL + '_reset_page']: {
              bind: 'close'
            },
            [PREFIX_NAME_CHANNEL + '_init_page']: {
              bind: 'close'
            },
            [PREFIX_NAME_CHANNEL + '_set_simulation_error']: {
              bind: 'close'
            },
            [PREFIX_NAME_CHANNEL + '_reset_scroll']: {
              bind: 'resetLayerScroll'
            },
            [PREFIX_NAME_CHANNEL + '_init_page_recalculate_header']: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-core-grey',
        className: `bg-core-grey${isNativeIos ? ' ios-top-padding' : ''}`
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'pointsRedeemPurchases',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_pointsRedeemPurchases: {
                bind: 'init'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'init-page'
              },
              [PREFIX_NAME_CHANNEL + '_init_page_recalculate_header']: {
                bind: 'init-page'
              },
              [PREFIX_NAME_CHANNEL + '_init_page_visit_analytics']: {
                bind: 'init-page'
              },
              [PREFIX_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          rightIconSize: '22',
          titleName: 'glomo-opx-points-redeem-purchases-header-title',
          rightSecondaryIcon: 'coronita:help',
          rightSecondaryIconSize: '22',
          cellsConnections: {
            in: {},
            out: {
              [PREFIX_NAME_CHANNEL + '_header_button_pressed_channel']: {
                bind: 'click-right-button'
              },
              [PREFIX_NAME_CHANNEL + '_open_faq_page']: {
                bind: 'click-right-secondary-button',
                link: {
                  page: 'pointsRedeemFaq'
                }
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          className: 'header',
          rightIcon: 'coronita:close',
          rightIconSize: '24',
          rightIconText: 'glomo-opx-points-redeem-purchases-header-close',
          rightSecondaryIcon: 'coronita:help',
          rightSecondaryIconSize: '24',
          rightIconSecondaryText: 'glomo-opx-points-redeem-purchases-header-help',
          titleName: 'glomo-opx-points-redeem-purchases-header-title-name'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-recipient-selector',
        tagSpherica: 'cells-step-recipient-selector-spherica',
        type: 'UI',
        properties: {
          id: 'points-redeem-purchases-origin-id',
          className: 'show-header with-additional-info redeem',
          defaultImage: './images/cards/cardFrontDefault.png',
          currentStep: 1,
          stepId: '1',
          maxSteps: MAX_STEPS,
          localCurrency: LOCAL_CURRENCY,
          stepTitle: 'glomo-opx-points-redeem-purchases-step-title-two',
          changeLabel: '',
          nameRightToImage: true,
          hideAvatarWhenFilled: true,
          saved: true,
          disableMyAccounts: true,
          disableChange: true,
          visibleChars: VISIBLE_CHARS,
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'initialize'
              },
              [PREFIX_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              global_card_transaction_detail_to_points_redeem_source_selected: {
                bind: 'recipientSelected'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
                bind: 'scrollComplete'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'resetCollapsed'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'register-step'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'change-step-state'
              }
            }
          }
        },
        propertiesSpherica: {
          nameRightToImage: false,
          className: 'show-header show-quantities cells-step-container'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-transaction-selector',
        tagSpherica: 'cells-step-transaction-selector-spherica',
        type: 'UI',
        properties: {
          className: 'points-redeem-purchases-destination-selector',
          currentStep: 2,
          stepId: '2',
          maxSteps: MAX_STEPS,
          changeLabel: '',
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_redeem-purchases_success_channel']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'initialize'
              },
              [PREFIX_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
                bind: 'scrollComplete'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'reset'
              },
              global_card_transaction_detail_to_points_redeem_purchases_configuration_step_two: {
                bind: 'setProperties'
              },
              points_redeem_purchases_step_title: {
                bind: 'stepTitle'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'register-step'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'change-step-state'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-conditions',
        tagSpherica: 'cells-step-conditions-spherica',
        type: 'UI',
        properties: {
          id: 'points-redeem-purchases-step-conditions',
          className: 'points-redeem-purchases',
          currentStep: 3,
          stepId: '3',
          maxSteps: MAX_STEPS,
          changeLabel: 'glomo-opx-points-redeem-purchases-consult',
          stepTitle: 'glomo-opx-points-redeem-purchases-terms-and-conditions-label',
          collapsedText: 'glomo-opx-points-redeem-purchases-read',
          collapsedIcon: 'coronita:correct',
          collapsedIconSize: '18',
          titleInformationClass: 'text-info-redeem',
          hideHeader: false,
          textButton: 'glomo-opx-points-redeem-purchases-continue',
          showSecondList: true,
          messageClass: 'spacing-message',
          hideCurrentStepLabel: true,
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'initialize'
              },
              [PREFIX_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
                bind: 'scrollComplete'
              },
              global_card_transaction_detail_to_points_redeem_purchases_list_step_three: {
                bind: 'secondList'
              },
              global_card_transaction_detail_to_points_redeem_purchases_message_step_three: {
                bind: 'message'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'register-step'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_change_step_hide_confirm_channel']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_change_step_back_analytics']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_continue_pressed_show_confirm_channel']: {
                bind: 'continue-pressed'
              },
              [PREFIX_NAME_CHANNEL + '_continue_pressed_btn_open_next_step']: {
                bind: 'continue-pressed'
              },
              [PREFIX_NAME_CHANNEL + '_continue_pressed_open_next_step_analytics']: {
                bind: 'continue-pressed'
              }
            }
          }
        },
        propertiesSpherica: {
          collapsedIcon: 'coronita:right',
          collapsedIconSize: '16',
          className: 'points-redeem-purchases title-points-redeem-purchases'
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-opx-points-redeem-purchases-dm',
        type: 'DM',
        properties: {
          autoActivateStep: true,
          language: LOCALE,
          currency: LOCAL_CURRENCY,
          cellsConnections: {
            in: {
              card_transaction_detail_set_loyalty_version: {
                bind: 'loyaltyApiVersions'
              },
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'init'
              },
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'registerStep',
                previousState: true
              },
              [PREFIX_NAME_CHANNEL + '_init_page_visit_analytics']: {
                bind: 'manageStepsAnalytics'
              },
              [PREFIX_NAME_CHANNEL + '_change_step_back_analytics']: {
                bind: 'manageStepsAnalytics'
              },
              [PREFIX_NAME_CHANNEL + '_continue_pressed_open_next_step_analytics']: {
                bind: 'manageStepsAnalytics'
              },
              [PREFIX_NAME_CHANNEL + '_header_button_pressed_channel']: {
                bind: 'manageCloseButton'
              },
              [PREFIX_NAME_CHANNEL + '_continue_pressed_show_confirm_channel']: {
                bind: 'showConfirm'
              },
              [PREFIX_NAME_CHANNEL + '_change_step_hide_confirm_channel']: {
                bind: 'hideConfirm'
              },
              global_feature_card_transactions_status: {
                bind: 'transactionsFeatureFlag'
              },
              [PREFIX_NAME_CHANNEL + '_confirm_buttons_pressed_channel']: {
                bind: 'requestConvert'
              },
              [PREFIX_NAME_CHANNEL + '_convert_response_channel']: {
                bind: 'responseConvert'
              },
              card_set_transaction_detail: {
                bind: 'transactionsCard'
              },
              global_set_card_api_version: {
                bind: 'cardsApiVersion'
              },
              global_card_detail_data_success_channel: {
                bind: 'dataCard'
              },
              card_Detail_set_product_summary_data: {
                bind: 'productSummaryConfigData'
              },
              navigation_to_movement_from_points_redeem_channel: {
                bind: 'navigateBackAndReset'
              },
              [PREFIX_NAME_CHANNEL + '_convert_response_error_channel']: {
                bind: 'errorResponseConvert'
              },
              global_points_redeem_convert_retry: {
                bind: 'requestConvert'
              },
              global_points_redeem_convert_exit_from_modal: {
                bind: 'navigateBackAndReset'
              },
              global_points_redeem_convert_exit: {
                bind: 'closePointsRedeem'
              },
              global_points_redeem_convert_modal_cancel_from_header: {
                bind: 'closePointsRedeem'
              },
              global_points_redeem_convert_cancel_from_header: {
                bind: 'closePointsRedeem'
              },
              global_points_redeem_convert_call: {
                bind: 'callHelpNumber'
              },
              global_card_transaction_detail_to_points_redeem_purchases_page: {
                bind: 'getNavigationFromAndReload'
              },
              global_card_transaction_detail_to_transactions_redeem: {
                bind: 'getNavigationFromAndReload'
              },
              global_card_transaction_detail_pob_promotion_flag: {
                bind: 'pobPromotionFlag'
              },
              blue_navigate_pay_with_points: {
                bind: 'isFromBlue'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'cells-scroll-zone'
              },
              [PREFIX_NAME_CHANNEL + '_reset_scroll']: {
                bind: 'reset-scroll'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_points_redeem_show_close_confirm_channel: {
                bind: 'show-close-confirm'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'navigate-back-button',
                backStep: true
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_redeem_purchases_review_channel-from-transactions']: {
                bind: 'navigation-to-points-redeem-purchases-review-from-transaction-list',
                link: {
                  page: 'pointsRedeemPurchasesReview',
                  cleanUntil: 'cardTransactions'
                }
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_redeem_purchases_review_channel-from-card-detail']: {
                bind: 'navigation-to-points-redeem-purchases-review-from-card-detail',
                link: {
                  page: 'pointsRedeemPurchasesReview',
                  cleanUntil: 'cardTransactionDetail'
                }
              },
              global_reload_card_transaction_detail: {
                bind: 'reload-transaction-detail'
              },
              global_reload_card_transaction_detail_list: {
                bind: 'reload-transaction-detail'
              },
              card_reset_transactions_list: {
                bind: 'reload-transaction-detail'
              },
              global_card_product_transactions_reset_page: {
                bind: 'reload-transaction-detail'
              },
              [PREFIX_NAME_CHANNEL + '_show_confirm']: {
                bind: 'open-confirm'
              },
              dispatch_loyalty_api_version: {
                bind: 'set-loyalty-api-version'
              },
              [PREFIX_NAME_CHANNEL + '_request_convert_channel']: {
                bind: 'request-loyalty-convert'
              },
              global_points_redeem_purchases_convert_error: {
                bind: 'convert-error'
              },
              global_points_redeem_purchases_receipt_changed_to_review: {
                bind: 'points-redeem-purchases-receipt-changed'
              },
              financial_overview_refresh: {
                bind: 'financial-overview-refresh'
              },
              global_card_detail_data_refresh: {
                bind: 'financial-overview-refresh'
              },
              [PREFIX_NAME_CHANNEL + '_app_last_step']: {
                bind: 'get-analytics-last-step'
              },
              [PREFIX_NAME_CHANNEL + '_app_page_visit']: {
                bind: 'get-analytics-step-3'
              },
              [PREFIX_NAME_CHANNEL + '_convert_service_backend_error']: {
                bind: 'convert-service-backend-error'
              },
              navigate_from_blue: {
                bind: 'navigate-from-blue',
                link: {
                  page: 'digitalButler',
                  cleanUntil: 'cardTransactionDetail'
                }
              }
            },
            params: {
              productId: 'productId',
              pointsRedeemPurchasesReview: 'pointsRedeemPurchasesReview'
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'show-close-confirm'
                }
              }
            },
            remove: {
              out: [
                'global_points_redeem_show_close_confirm_channel'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-points-redeem-manager',
        familyPath: '@glomo-web-components/glomo-analytics-points-redeem-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              global_card_transaction_detail_set_info_for_analytics: {
                bind: 'initializeInfo'
              },
              [PREFIX_NAME_CHANNEL + '_send_app_completed_data']: {
                bind: 'setAppCompletedData'
              },
              [PREFIX_NAME_CHANNEL + '_open_faq_page']: {
                bind: 'setAppStartedFaq'
              },
              [PREFIX_NAME_CHANNEL + '_continue_pressed_btn_open_next_step']: {
                bind: 'setAppStartedBtn'
              },
              [PREFIX_NAME_CHANNEL + '_app_page_visit']: {
                bind: 'fireAppPageVisit'
              },
              [PREFIX_NAME_CHANNEL + '_app_last_step']: {
                bind: 'fireAppLastStep'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_redeem_purchases_review_channel-from-transactions']: {
                bind: 'fireAppCompleted'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_redeem_purchases_review_channel-from-card-detail']: {
                bind: 'fireAppCompleted'
              },
              [PREFIX_NAME_CHANNEL + '_convert_service_backend_error']: {
                bind: 'fireErrorBackend'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_analytics_app_page_visit']: {
                bind: 'analytics-page-visit',
                analytics: ANALYTICS.APP_PAGE_VISIT
              },
              [PREFIX_NAME_CHANNEL + '_analytics_app_started']: {
                bind: 'analytics-app-started',
                analytics: ANALYTICS.APP_STARTED
              },
              [PREFIX_NAME_CHANNEL + '_analytics_app_last_step']: {
                bind: 'analytics-app-last-step',
                analytics: ANALYTICS.APP_STEP_2
              },
              [PREFIX_NAME_CHANNEL + '_analytics_app_completed']: {
                bind: 'analytics-app-completed',
                analytics: ANALYTICS.APP_COMPLETED
              },
              [PREFIX_NAME_CHANNEL + '_analytics_error_backend']: {
                bind: 'analytics-error-backend',
                analytics: ANALYTICS.ERROR_BACKEND
              }
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        tag: 'cells-operation-summary',
        tagSpherica: 'cells-operation-summary-spherica',
        type: 'UI',
        properties: {
          buttonLabel: 'loyalty-points-transactions-pob-use-my-points',
          localCurrency: LOCAL_CURRENCY,
          summaryViewTitle: 'glomo-opx-points-redeem-purchases-amount-pay-with-points',
          showLegalTerms: false,
          showAddition: true,
          isNativeIos: isNativeIos,
          hideCustomFeesMessage: true,
          canExecute: true,
          cellsConnections: {
            in: {
              global_card_transaction_detail_to_points_redeem_purchases_operation_confirm: {
                bind: 'operation'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_confirm_buttons_pressed_channel']: {
                bind: 'summary-closed'
              }
            }
          }
        },
        propertiesSpherica: {
          buttonLabel: 'loyalty-points-transactions-pob-use-my-points-spherica',
          summaryViewTitle: ''
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-dm-global-apis-loyalty',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              dispatch_loyalty_api_version: {
                bind: 'loyaltyApiVersion'
              },
              [PREFIX_NAME_CHANNEL + '_request_convert_channel']: {
                bind: 'postConvert'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_send_app_completed_data']: {
                bind: 'success-on-post-convert'
              },
              [PREFIX_NAME_CHANNEL + '_convert_response_channel']: {
                bind: 'success-on-post-convert'
              },
              [PREFIX_NAME_CHANNEL + '_convert_response_error_channel']: {
                bind: 'error-on-post-convert'
              }
            }
          }
        }
      }
    ]
  };


  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
