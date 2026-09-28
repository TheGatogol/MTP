/* eslint-disable complexity */
'use strict';

module.exports = (CONFIG, OPERATIVE = 'pointsRaffle') => {
  const utils = require('./common/helpers/_utils');

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const isNativeIos = CONFIG.nativeIos || false;
  const COUNTRY = utils.getCountry(CONFIG);
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('founds');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const MAX_STEPS = 3;
  const PREFIX_NAME_CHANNEL = OPERATIVE.split(/(?=[A-Z])/).join('_').toLowerCase();
  const ANALYTICS = require('./analytics/_pointsRaffle')(CONFIG);

  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCALE = LANGUAGE;

  const pages = require('./common/_pages')(CONFIG)('pointsRaffle');

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-st-button-obtain-participations',
        class: 'primary',
        action: 'exit'
      }
    }
  };

  const POINTS_INPUT_CONFIG = { label: 'points-raffle-label-input-config', required: true };

  const base = {
    hash: COUNTRY + '-points-raffle',
    currentPage: {
      url: '/points-raffle',
      params: []
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        animationType: 'verticalUp',
        headerFixed: true,
        topOnConfirm: true,
        showConfirmInManualScroll: true,
        className: 'bg-core-blue',
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos,
        headerHeight: utils.headerHeight,
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
              bind: 'scrollItemIntoView'
            },
            [PREFIX_NAME_CHANNEL + '_confirm_buttons_open']: {
              bind: 'showConfirm'
            },
            [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
              bind: 'close'
            },
            [PREFIX_NAME_CHANNEL + '_show_confirm']: {
              bind: 'open'
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
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'pointsRaffle',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_pointsRaffle: {
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
        tag: 'glomo-navigation-handler',
        type: 'UI',
        properties: {
          cellsConnections: {
            in: {
              navigation_to_reward_from_points_raffle_channel: {
                bind: 'navigate'
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
          className: isNativeIos ? 'header--core-ios header--core' : 'header--core',
          rightIcon: 'coronita:close',
          secondaryClass: 'header--core',
          greetingKey: 'glomo-points-raffle-header-title',
          greetingAsTitle: true,
          rightSecondaryIcon: 'coronita:help',
          rightSecondaryIconSize: '22',
          cellsConnections: {
            in: {},
            out: {
              [PREFIX_NAME_CHANNEL + '_header_button_pressed_channel']: {
                bind: 'click-right-button',
                backstep: true
              },
              [PREFIX_NAME_CHANNEL + '_open_faq_page']: {
                bind: 'click-right-secondary-button',
                link: {
                  page: 'pointsRaffleFaq'
                }
              },
              [PREFIX_NAME_CHANNEL + '_first_tap_user_app_started']: {
                bind: 'click-right-secondary-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-points-raffle',
        type: 'UI',
        properties: {
          id: 'points-raffle-origin-id',
          className: 'points-raffle-origin',
          currentStep: 1,
          stepId: '1',
          maxSteps: MAX_STEPS,
          changeLabel: 'cells-step-points-raffle-change-label',
          stepTitle: 'cells-step-points-raffle-title',
          showCardAdvice: true,
          showTextDescription: true,
          showKeyValues: true,
          hideHeader: true,
          showLinkTextDescription: true,
          showCardItem: true,
          showInfoMessage: true,
          nameTopToImageProductItem: true,
          decimalsHiddenProductItem: true,
          imageCardAdviceSrc: './images/award.svg',
          localCurrencyProductItem: LOCAL_CURRENCY,
          visibleChars: VISIBLE_CHARS,
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
              global_navigation_reward_to_points_raffle_detail: {
                bind: 'setProperties'
              },
              [PREFIX_NAME_CHANNEL + '_hide_header_first_step_changed']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_raffle_success_channel']: {
                bind: 'reset'
              },
              navigation_to_reward_from_points_raffle_channel: {
                bind: 'reset'
              },
              global_reward_detail_selected_card_image: {
                bind: 'imgSrcProductItem'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'register-step'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + 'cspr_next_step_channel']: {
                bind: 'cells-step-points-raffle-continue-button-pressed'
              },
              [PREFIX_NAME_CHANNEL + '_next_step_show_button_channel']: {
                bind: 'cells-step-points-raffle-continue-button-pressed'
              },
              [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
                bind: 'change-step-state'
              },
              points_raffle_manage_back_steps: {
                bind: 'cells-step-points-raffle-continue-button-pressed'
              },
              [PREFIX_NAME_CHANNEL + '_get_terms_step_points_raffle']: {
                bind: 'get-terms-and-conditions'
              },
              [PREFIX_NAME_CHANNEL + '_first_tap_user_app_started']: {
                bind: 'analytics-from-step-points-raffle'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-form-radios-amount-select',
        type: 'UI',
        properties: {
          id: 'points-raffle-configuration-id',
          className: 'points-transfer',
          currentStep: 2,
          stepId: '2',
          maxSteps: MAX_STEPS,
          stepTitle: 'glomo-step-form-radios-amount-select-step-title',
          changeLabel: 'glomo-common-operatives-change',
          amountLocalCurrency: LOCAL_CURRENCY,
          hideSelectModal: true,
          filledAmountDecimalsHidden: true,
          filledAmountClass: 'amount-huge',
          noValidate: true,
          amountInput: POINTS_INPUT_CONFIG,
          amountInputDescription: 'glomo-points-raffle-input-description',
          infoMessage: '',
          showInfoTopMessage: true,
          mainDescriptionText: 'glomo-points-raffle-maindescription-step-conditions',
          errorMessage: 'glomo-points-raffle-input-error-message',
          errorMessageIcon: 'coronita:alert',
          amountInfoMessageIcon: 'coronita:info',
          amountCurrency: LOCAL_CURRENCY,
          notInitializeWithAttached: true,
          localCurrency: LOCAL_CURRENCY,
          visibleChars: VISIBLE_CHARS,
          language: LOCALE,
          disableDecimal: true,
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'initialize'
              },
              [PREFIX_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_set_points_to_transfer_channel']: {
                bind: 'radios'
              },
              [PREFIX_NAME_CHANNEL + '_hide_points_input_channel']: {
                bind: 'hideAmountInput'
              },
              [PREFIX_NAME_CHANNEL + '_valid_points_to_transfer_channel']: {
                bind: 'valid'
              },
              [PREFIX_NAME_CHANNEL + '_points_value_channel']: {
                bind: 'amountValue'
              },
              [PREFIX_NAME_CHANNEL + '_invalid_amount_input_value_channel']: {
                bind: 'invalidAmount'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
                bind: 'scrollComplete'
              },
              [PREFIX_NAME_CHANNEL + '_selected_radio_index_channel']: {
                bind: 'selectedRadioIndex'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'reset'
              },
              navigation_to_reward_from_points_raffle_channel: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_raffle_success_channel']: {
                bind: 'initialize'
              },
              [PREFIX_NAME_CHANNEL + '_info_top_message_channel']: {
                bind: 'infoTopMessage'
              },
              [PREFIX_NAME_CHANNEL + '_amount_info_message_channel']: {
                bind: 'amountInfoMessage'
              },
              [PREFIX_NAME_CHANNEL + '_update_info_message_channel']: {
                bind: 'infoMessage'
              },
              [PREFIX_NAME_CHANNEL + 'decorated_show']: {
                bind: 'decorated'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'register-step'
              },
              [PREFIX_NAME_CHANNEL + '_radio_button_selected_channel']: {
                bind: 'radio-button-was-clicked',
                previousState: false
              },
              [PREFIX_NAME_CHANNEL + '_amount_value_changed_channel']: {
                bind: 'amount-value-changed'
              },
              [PREFIX_NAME_CHANNEL + '_set_points_enter_by_user_channel']: {
                bind: 'on-button-tap'
              },
              [PREFIX_NAME_CHANNEL + '_next_step_show_button_channel']: {
                bind: 'on-button-tap'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_steps']: {
                bind: 'change-step-state'
              },
              points_raffle_manage_back_steps: {
                bind: 'change-step-state'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-conditions',
        properties: {
          changeLabel: 'glomo-points-raffle-change-label-step-conditions',
          collapsedIcon: 'coronita:correct',
          collapsedText: 'glomo-points-raffle-collapsed-text-step-conditions',
          currentStep: 3,
          stepId: '3',
          maxSteps: MAX_STEPS,
          stepTitle: 'glomo-points-raffle-step-title-step-conditions',
          messageClass: 'spacing-message',
          textButton: 'glomo-points-raffle-text-buttons-step-conditions',
          subTitle: 'glomo-points-raffle-subtitle-step-conditions',
          checkboxLabel: 'glomo-points-raffle-checkbox-label-step-conditions',
          message: 'glomo-points-raffle-message-step-conditions',
          showTermsAndConditionsInfoMessage: true,
          termsAndConditionsInfoMessage: 'glomo-points-raffle-terms-and-conditions-step-conditions',
          titleInformationClass: 'text-info-redeem',
          addClassIconMessage: 'bold-message default-filled-text',
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
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_raffle_success_channel']: {
                bind: 'reset'
              },
              navigation_to_reward_from_points_raffle_channel: {
                bind: 'reset'
              },
              points_raffle_manage_back_steps: {
                bind: 'reset'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'register-step'
              },
              [PREFIX_NAME_CHANNEL + '_next_step_show_button_channel']: {
                bind: 'continue-pressed'
              },
              [PREFIX_NAME_CHANNEL + '_conditions_continue_pressed']: {
                bind: 'continue-pressed'
              },
              [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_analytics_app_step_four']: {
                bind: 'continue-pressed'
              },
              [PREFIX_NAME_CHANNEL + '_get_terms_step_conditions']: {
                bind: 'get-terms-and-conditions'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-opx-points-raffle-dm',
        type: 'DM',
        properties: {
          autoActivateStep: true,
          language: LOCALE,
          maxSteps: MAX_STEPS,
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'init'
              },
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'registerStep',
                previousState: true
              },
              reward_to_points_raffle_filtered_cards_channel: {
                bind: 'products'
              },
              [PREFIX_NAME_CHANNEL + '_radio_button_selected_channel']: {
                bind: 'manageRadioButtons'
              },
              reward_selected_card_changed_channel: {
                bind: 'findSelectedCardById',
                previousState: false
              },
              [PREFIX_NAME_CHANNEL + '_amount_input_changed_channel']: {
                bind: 'pointsValue'
              },
              [PREFIX_NAME_CHANNEL + '_amount_value_changed_channel']: {
                bind: 'amountInputValue'
              },
              [PREFIX_NAME_CHANNEL + '_recipient_selected_channel']: {
                bind: 'selectedDestination'
              },
              [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
                bind: 'manageAndCollapseSteps'
              },
              [PREFIX_NAME_CHANNEL + 'cspr_next_step_channel']: {
                bind: 'nextStep'
              },
              [PREFIX_NAME_CHANNEL + '_set_points_enter_by_user_channel']: {
                bind: 'selectedPoints'
              },
              [PREFIX_NAME_CHANNEL + '_next_step_show_button_channel']: {
                bind: 'showObtainButton'
              },
              [PREFIX_NAME_CHANNEL + '_confirm_buttons_pressed_channel']: {
                bind: 'requestPostRedemption'
              },
              [PREFIX_NAME_CHANNEL + '_success_on_post_redemption']: {
                bind: 'responsePostRedemption'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + 'check_current_step']: {
                bind: 'manageAndCollapseSteps'
              },
              [PREFIX_NAME_CHANNEL + '_header_button_pressed_channel']: {
                bind: 'manageCloseButton'
              },
              navigation_to_reward_from_points_raffle_channel: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_raffle_success_channel']: {
                bind: 'restart'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_steps']: {
                bind: 'manageDecoratedSteps'
              },
              points_raffle_manage_back_steps: {
                bind: 'manageBackFlag'
              },
              [PREFIX_NAME_CHANNEL + '_error_on_post_redemption']: {
                bind: 'raffleRedemptionError'
              },
              [PREFIX_NAME_CHANNEL + '_conditions_continue_pressed']: {
                bind: 'conditionsContinuePressed'
              },
              global_raffle_points_exit: {
                bind: 'closePointsRaffle'
              },
              global_raffle_points_cancel_from_header: {
                bind: 'closePointsRaffle'
              },
              global_raffle_points_exit_from_modal: {
                bind: 'closePointsRaffle'
              },
              global_raffle_points_retry: {
                bind: 'rafflePointsRetry'
              },
              global_raffle_points_call: {
                bind: 'callHelpNumber'
              },
              [PREFIX_NAME_CHANNEL + '_get_terms_step_points_raffle']: {
                bind: 'getTermsStepPointsRaffle'
              },
              [PREFIX_NAME_CHANNEL + '_get_terms_step_conditions']: {
                bind: 'getTermsStepConditions'
              },
              global_reward_detail_redemption_product_id: {
                bind: 'productId'
              },
              global_reward_detail_redemption_selected_card: {
                bind: 'selectedCard'
              },
              global_send_points_raffle_detail_response: {
                bind: 'raffleSimulateResponse'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'cells-scroll-zone'
              },
              [PREFIX_NAME_CHANNEL + '_reset_scroll']: {
                bind: 'reset-scroll'
              },
              [PREFIX_NAME_CHANNEL + '_set_points_to_transfer_channel']: {
                bind: 'points-to-transfer-config-changed'
              },
              [PREFIX_NAME_CHANNEL + '_hide_points_input_channel']: {
                bind: 'hide-points-input-changed'
              },
              [PREFIX_NAME_CHANNEL + '_valid_points_to_transfer_channel']: {
                bind: 'valid-points-to-transfer-changed'
              },
              [PREFIX_NAME_CHANNEL + '_points_value_channel']: {
                bind: 'points-value-changed'
              },
              [PREFIX_NAME_CHANNEL + '_invalid_amount_input_value_channel']: {
                bind: 'invalid-amount-input-value-changed'
              },
              [PREFIX_NAME_CHANNEL + '_selected_radio_index_channel']: {
                bind: 'selected-radio-index-changed'
              },
              [PREFIX_NAME_CHANNEL + '_confirm_buttons_open']: {
                bind: 'show-confirm-buttons'
              },
              [PREFIX_NAME_CHANNEL + '_hide_header_first_step_changed']: {
                bind: 'hide-header-first-step-changed'
              },
              [PREFIX_NAME_CHANNEL + '_amount_info_message_channel']: {
                bind: 'amount-info-message-changed'
              },
              [PREFIX_NAME_CHANNEL + '_info_top_message_channel']: {
                bind: 'info-top-message-changed'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_points_raffle_show_close_confirm_channel: {
                bind: 'show-close-confirm'
              },
              global_open_document_url: {
                bind: 'terms-points-raffle-link-pdf'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'navigate-back-button',
                backStep: true
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_raffle_success_channel']: {
                bind: 'navigation-to-points-raffle-review',
                link: {
                  page: 'pointsRaffleReview'
                }
              },
              financial_overview_refresh: {
                bind: 'financial-overview-refresh'
              },
              go_back_to_dashboard: {
                bind: 'financial-overview-refresh'
              },
              [PREFIX_NAME_CHANNEL + '_show_confirm']: {
                bind: 'open-confirm'
              },
              [PREFIX_NAME_CHANNEL + 'decorated_show']: {
                bind: 'decorated-radio-options'
              },
              [PREFIX_NAME_CHANNEL + '_post_redemption_request']: {
                bind: 'points-raffle-post-redemption-request'
              },
              global_raffle_redemption_error_channel: {
                bind: 'redemption-error'
              },
              [PREFIX_NAME_CHANNEL + '_update_info_message_channel']: {
                bind: 'points-raffle-update-info-message'
              },
              [PREFIX_NAME_CHANNEL + '_points_selected']: {
                bind: 'points-selected'
              },
              [PREFIX_NAME_CHANNEL + '_points_raffle_error_final_showed']: {
                bind: 'glomo-points-raffle-error-final-showed'
              },
              global_points_raffle_operation_number: {
                bind: 'points-raffle-post-redemption-operation-number'
              },
              global_points_raffle_receipt_changed_to_review: {
                bind: 'review-point-raffle-data-result'
              }
            },
            params: {
              raffleSimulateResponse: 'raffleSimulateResponse',
              rafflePointsReview: 'rafflePointsReview'
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        tag: 'cells-confirm-buttons',
        type: 'UI',
        properties: {
          config: configButtons,
          className: 'additional-points-raffle-confirm-button',
          cellsConnections: {
            in: {},
            out: {
              [PREFIX_NAME_CHANNEL + '_confirm_buttons_pressed_channel']: {
                bind: 'cells-confirm-buttons-click-primary'
              }

            }
          }
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
              [PREFIX_NAME_CHANNEL + '_post_redemption_request']: {
                bind: 'postRedemption'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_success_on_post_redemption']: {
                bind: 'success-on-post-redemption'
              },
              [PREFIX_NAME_CHANNEL + '_error_on_post_redemption']: {
                bind: 'error-on-post-redemption'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-points-raffle-manager',
        familyPath: '@glomo-web-components/glomo-analytics-points-raffle-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              global_reward_analytics_set_product_name: {
                bind: 'setProductNameOrigin'
              },
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'fireAppPageVisit'
              },
              navigation_to_reward_from_points_raffle_channel: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_first_tap_user_app_started']: {
                bind: 'fireAppStarted'
              },
              [PREFIX_NAME_CHANNEL + '_points_selected']: {
                bind: 'firePointsSelected'
              },
              [PREFIX_NAME_CHANNEL + '_get_terms_step_conditions']: {
                bind: 'fireTermsAndConditionsPageView'
              },
              [PREFIX_NAME_CHANNEL + '_get_terms_step_points_raffle']: {
                bind: 'fireRaffleConditionsPageView'
              },
              [PREFIX_NAME_CHANNEL + '_analytics_app_step_four']: {
                bind: 'fireAppStepFour'
              },
              [PREFIX_NAME_CHANNEL + '_points_raffle_error_final_showed']: {
                bind: 'firePointsRaffleErrorFinalShowed'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_fire_points_raffle_app_page_visit']: {
                bind: 'analytics-page-visit',
                analytics: ANALYTICS.RAFFLE_POINTS_APP_PAGE_VISIT
              },
              [PREFIX_NAME_CHANNEL + '_fire_points_raffle_app_started']: {
                bind: 'analytics-app-started',
                analytics: ANALYTICS.RAFFLE_POINTS_APP_STARTED
              },
              [PREFIX_NAME_CHANNEL + '_fire_terms_and_conditions_page_view']: {
                bind: 'analytics-terms-and-conditions-page-view',
                analytics: ANALYTICS.TERMS_AND_CONDITIONS_PAGE_VIEW
              },
              [PREFIX_NAME_CHANNEL + '_fire_points_raffle_app_step_two']: {
                bind: 'analytics-app-step-two',
                analytics: ANALYTICS.RAFFLE_POINTS_APP_STEP_TWO
              },
              [PREFIX_NAME_CHANNEL + '_fire_points_raffle_app_step_three']: {
                bind: 'analytics-app-step-three',
                analytics: ANALYTICS.RAFFLE_POINTS_APP_STEP_THREE
              },
              [PREFIX_NAME_CHANNEL + '_fire_points_raffle_app_step_four']: {
                bind: 'analytics-app-step-four',
                analytics: ANALYTICS.RAFFLE_POINTS_APP_STEP_FOUR
              },
              [PREFIX_NAME_CHANNEL + '_fire_raffle_conditions_page_view']: {
                bind: 'analytics-raffe-conditions-page-view',
                analytics: ANALYTICS.RAFFLE_CONDITIONS_PAGE_VIEW
              },
              [PREFIX_NAME_CHANNEL + '_analytics_app_persist_typology']: {
                bind: 'analytics-app-persist-typology'
              },
              [PREFIX_NAME_CHANNEL + '_analytics_app_persist_offer']: {
                bind: 'analytics-app-persist-offer'
              },
              [PREFIX_NAME_CHANNEL + '_analytics_points-raffle-error-final-showed']: {
                bind: 'analytics-points-raffle-error-final-showed',
                analytics: ANALYTICS.POINTS_RAFFLE_ERROR_FINAL_SHOWED
              }
            }
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();

  return base;
};
