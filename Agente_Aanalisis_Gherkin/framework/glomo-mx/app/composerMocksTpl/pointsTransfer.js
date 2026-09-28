/* eslint-disable complexity */
'use strict';

module.exports = (CONFIG, OPERATIVE = 'pointsTransfer') => {
  const utils = require('./common/helpers/_utils');

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const {disconnectedBanner, cellsConnectionStatus} = require('./common/_cross-components');
  const isNativeIos = CONFIG.nativeIos || false;
  const COUNTRY = utils.getCountry(CONFIG);
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('reward');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const MAX_STEPS = 3;
  const PREFIX_NAME_CHANNEL = OPERATIVE.split(/(?=[A-Z])/).join('_').toLowerCase();
  const ANALYTICS = require('./analytics/_pointsTransfer')({});


  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCALE = LANGUAGE;
  const PAGE_NAME = 'pointsTransfer';
  const pages = require('./common/_pages')(CONFIG)('pointsTransfer');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  if (isSpherica) {
    SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  }

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-st-button-continue-label',
        class: 'primary',
        action: 'exit'
      }
    }
  };
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos ? false : '',
      cellsConnections: {
        in: {
          global_points_transfer_show_close_confirm_channel_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_points_transfer_EXIT_CONFIRMATION_ACCEPT: {
            bind: 'alert-POINTS-TRANSFER-EXIT-OPERATIVE-accept',
            'backStep': true
          }
        }
      }
    }};
  const POINTS_INPUT_CONFIG = { label: 'points-transfer-label-input-config', required: true };

  const base = {
    hash: COUNTRY + '-points-transfer',
    currentPage: {
      url: '/points-transfer',
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
        className: isNativeIos ? 'bg-core-blue' : '',
        extraHeaderClass: 'dark-blue-bg',
        IOSFixedHeader: isNativeIos,
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
      },
      propertiesSpherica: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: '',
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'pointsTransfer',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_pointsTransfer: {
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
              navigation_to_reward_from_points_transfer_channel: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: isNativeIos ? 'header--core-ios header--core' : 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-points-transfer-header-title',
          secondaryClass: 'header--core',
          cellsConnections: {
            in: {},
            out: {
              [PREFIX_NAME_CHANNEL + '_header_button_pressed_channel']: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--white',
          variant: 'primary-alt',
          leftIcon: '',
          rightIcon: 'coronita:close',
          rightIconText: 'cells-molecule-header-spherica-close'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-product-selector',
        tagSpherica: 'cells-step-product-selector-spherica',
        type: 'UI',
        properties: {
          id: 'points-transfer-origin-id',
          className: 'points-transfer-origin',
          defaultImage: './images/cards/cardFrontDefault.png',
          currentStep: 1,
          stepId: '1',
          maxSteps: MAX_STEPS,
          stepTitle: 'points-transfer-cells-step-product-selector-origin',
          changeLabel: '',
          isOneProduct: true,
          showProductSelected: true,
          notInitializeWithAttached: true,
          visibleChars: VISIBLE_CHARS,
          scrolled: false,
          nameRightToImage: true,
          amountsZeroDecimalsHidden: true,
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'initialize'
              },
              [PREFIX_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_source_selected']: {
                bind: 'selected'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
                bind: 'scrollComplete'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'resetCollapsed'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_step_1']: {
                bind: 'decorated'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'register-step'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
                bind: 'change-step-state'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary-alt',
          stepTitle: 'points-transfer-cells-step-product-selector-origin-spherica'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-recipient-selector',
        tagSpherica: 'cells-step-recipient-selector-spherica',
        type: 'UI',
        properties: {
          className: 'points-transfer-destination-selector',
          currentStep: 2,
          stepId: '2',
          maxSteps: MAX_STEPS,
          stepTitle: 'points-transfer-cells-step-product-selector-destination',
          nameRightToImage: true,
          maxProducts: 3,
          notInitializeWithAttached: true,
          imgOverlayIconSize: 8,
          visibleChars: VISIBLE_CHARS,
          hideAccountsLink: true,
          hideContactList: true,
          statusIcons: {
            off: 'coronita:on',
            activate: 'coronita:clock'
          },
          showRecipientProductSelector: true,
          zeroDecimalsHidden: true,
          myAccountsLabelKey: 'cells-step-recipient-selector-own-credit-cards',
          newRecipientLabelKey: 'cells-step-recipient-selector-other-credit-cards',
          changeLabel: 'glomo-common-operatives-change',
          defaultImage: './images/cards/cardFrontDefault.png',
          decorated: true,
          additionalInformationSeparator: '',
          avoidChangeInOnlyProductCase: true,
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_transfer_success_channel']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'initialize'
              },
              [PREFIX_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_destination_list_channel']: {
                bind: 'productSelectorList'
              },
              [PREFIX_NAME_CHANNEL + '_selected_product_channel']: {
                bind: 'onProductSelected'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
                bind: 'scrollComplete'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'reset'
              },
              navigation_to_reward_from_points_transfer_channel: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_step_2']: {
                bind: 'decorated'
              },
              [PREFIX_NAME_CHANNEL + '_show_info_cards_off']: {
                bind: 'haveNotActiveCards'
              },
              [PREFIX_NAME_CHANNEL + '_show_card_information_message']: {
                bind: 'cardOffInformationMessage'
              },
              [PREFIX_NAME_CHANNEL + '_show_card_info']: {
                bind: 'showOrHideCardOffInfo'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'register-step'
              },
              [PREFIX_NAME_CHANNEL + '_view_all_pressed_channel']: {
                bind: 'view-all'
              },
              [PREFIX_NAME_CHANNEL + '_recipient_selected_channel']: {
                bind: 'recipient-selected-changed'
              },
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_dont_change_recipient_channel']: {
                bind: 'dont-change-and-continue'
              },
              [PREFIX_NAME_CHANNEL + '_check_open_confirm']: {
                bind: 'check-open-confirm'
              },
              [PREFIX_NAME_CHANNEL + '_recipient_selector_change_recipient']: {
                bind: 'recipient-selector-change-recipient'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_steps']: {
                bind: 'change-step-state'
              }
            }
          }
        },
        propertiesSpherica: {
          nameRightToImage: false,
          variantAmbient: 'primary-alt',
          stepTitle: 'points-transfer-cells-step-product-selector-destination-spherica',
          changeLabel: 'points-transfer-cells-step-product-selector-button-label-spherica',
          className: `${isNativeIos ? 'ios-top-padding ' : ''}points-transfer-step-recipient-selector without-column-direction with-subheader`,
          groupSelectorClass: 'without-column-direction with-subheader'
        }
      },
      {
        zone: 'app__transactional',
        tag: 'cells-product-selector-modal',
        tagSpherica: 'cells-product-selector-modal-spherica',
        type: 'UI',
        properties: {
          modalTitle: 'points-transfer-cells-product-selector-modal-title',
          visibleChars: VISIBLE_CHARS,
          localCurrency: LOCAL_CURRENCY,
          closeButtonLabel: 'cells-product-selector-modal-close-button',
          showCloseModalButton: true,
          closeIconSize: 20,
          defaultImage: './images/cards/cardFrontDefault.png',
          zeroDecimalsHidden: true,
          statusIcons: {
            off: 'coronita:on',
            activate: 'coronita:clock'
          },
          additionalInformationSeparator: '',
          className: isNativeIos ? 'ios-top-padding points-transfer-product-selector-modal' : 'points-transfer-product-selector-modal',
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_view_all_destinations_channel']: {
                bind: 'treatProducts'
              },
              [PREFIX_NAME_CHANNEL + '_show_info_cards_off']: {
                bind: 'showCardOffInformation'
              },
              [PREFIX_NAME_CHANNEL + '_show_card_information_message']: {
                bind: 'cardOffInformationMessage'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_selected_product_channel']: {
                bind: 'selected-product'
              }
            }
          }
        },
        propertiesSpherica: {
          modalTitle: 'points-transfer-cells-product-selector-modal-title-spherica',
          closeButtonLabel: '',
          showCloseModalButton: false,
          className: `${isNativeIos ? 'ios-top-padding ' : ''}points-transfer-product-selector-modal without-column-direction`,
          groupSelectorClass: 'without-column-direction'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-step-form-radios-amount-select',
        tagSpherica: 'cells-step-form-radios-amount-select-spherica',
        type: 'UI',
        properties: {
          id: 'points-transfer-configuration-id',
          className: 'points-transfer',
          currentStep: 3,
          stepId: '3',
          maxSteps: MAX_STEPS,
          stepTitle: 'cells-step-form-radios-amount-select-step-title',
          changeLabel: 'glomo-common-operatives-change',
          amountLocalCurrency: LOCAL_CURRENCY,
          hideSelectModal: true,
          filledAmountDecimalsHidden: true,
          filledAmountClass: 'amount-huge',
          noValidate: true,
          amountInput: POINTS_INPUT_CONFIG,
          amountInputDescription: 'glomo-points-transfer-input-description',
          infoMessage: 'glomo-points-transfer-info-message',
          errorMessage: 'glomo-points-transfer-input-error-message',
          errorMessageIcon: 'coronita:alert',
          infoMessageIcon: 'coronita:info',
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
              [PREFIX_NAME_CHANNEL + '_amount_info_message_channel']: {
                bind: 'amountInfoMessage'
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
              navigation_to_reward_from_points_transfer_channel: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_transfer_success_channel']: {
                bind: 'reset'
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
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_steps']: {
                bind: 'change-step-state'
              },
              [PREFIX_NAME_CHANNEL + 'change_last_step_collapsed']: {
                bind: 'change-step-state'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          stepTitle: 'cells-step-form-radios-amount-select-step-title-spherica',
          changeLabel: 'points-transfer-cells-step-form-radios-amount-select-change-label-spherica'
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-opx-points-transfer-dm',
        type: 'DM',
        properties: {
          isSpherica,
          autoActivateStep: true,
          language: LOCALE,
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'init'
              },
              [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
                bind: 'registerStep',
                previousState: true
              },
              reward_origin_card_page_to_points_transfer_filtered_cards_channel: {
                bind: 'products'
              },
              blue_redirect_points_transfer_products: {
                bind: 'products'
              },
              [PREFIX_NAME_CHANNEL + '_radio_button_selected_channel']: {
                bind: 'manageRadioButtons'
              },
              navigation_to_profit_points_detail: {
                bind: 'findSelectedCardById',
                previousState: false
              },
              reward_origin_card_page_selected_card_channel: {
                bind: 'findSelectedCardById'
              },
              blue_redirect_points_transfer_card: {
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
              [PREFIX_NAME_CHANNEL + '_view_all_pressed_channel']: {
                bind: 'onViewAllPressed'
              },
              [PREFIX_NAME_CHANNEL + '_collapse_other_step']: {
                bind: 'manageAndCollapseSteps'
              },
              [PREFIX_NAME_CHANNEL + '_dont_change_recipient_channel']: {
                bind: 'nextStep'
              },
              [PREFIX_NAME_CHANNEL + '_set_points_enter_by_user_channel']: {
                bind: 'selectedPoints'
              },
              [PREFIX_NAME_CHANNEL + '_confirm_buttons_pressed_channel']: {
                bind: 'transferPoints'
              },
              [PREFIX_NAME_CHANNEL + '_transfer_rewards_response']: {
                bind: 'transferPointsResponse'
              },
              [PREFIX_NAME_CHANNEL + '_transfer_rewards_error']: {
                bind: 'transferPointsError'
              },
              [PREFIX_NAME_CHANNEL + '_header_button_pressed_channel']: {
                bind: 'manageCloseButton'
              },
              navigation_to_reward_from_points_transfer_channel: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_check_open_confirm']: {
                bind: 'checkOpenConfirm'
              },
              connection_status_pointsTransfer_offline: {
                bind: 'manageButtonStatusNet'
              },
              connection_status_pointsTransfer_online: {
                bind: 'manageButtonStatusNet'
              },
              global_transfer_points_call: {
                bind: 'callHelpNumber'
              },
              global_transfer_points_retry: {
                bind: 'transferPointsRetry'
              },
              global_transfer_points_exit: {
                bind: 'closePointsTransfer'
              },
              global_transfer_points_exit_from_modal: {
                bind: 'closePointsTransfer'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_recipient_selector_change_recipient']: {
                bind: 'recipientSelectorChangeRecipient'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_steps']: {
                bind: 'manageDecoratedSteps'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_scroll_zone']: {
                bind: 'cells-scroll-zone'
              },
              [PREFIX_NAME_CHANNEL + '_init_services']: {
                bind: 'init-services'
              },
              [PREFIX_NAME_CHANNEL + '_reset_scroll']: {
                bind: 'reset-scroll'
              },
              [PREFIX_NAME_CHANNEL + '_source_selected']: {
                bind: 'parse-source-selected-card-changed'
              },
              [PREFIX_NAME_CHANNEL + '_set_source_list']: {
                bind: 'products-changed'
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
              [PREFIX_NAME_CHANNEL + '_amount_info_message_channel']: {
                bind: 'amount-info-message-changed'
              },
              [PREFIX_NAME_CHANNEL + '_destination_list_channel']: {
                bind: 'destination-list-changed'
              },
              [PREFIX_NAME_CHANNEL + '_selected_destination_channel']: {
                bind: 'selected-destination-changed'
              },
              [PREFIX_NAME_CHANNEL + '_info_messagge_validity_channel']: {
                bind: 'info-messagge-validity-changed'
              },
              [PREFIX_NAME_CHANNEL + '_view_all_destinations_channel']: {
                bind: 'view-all-on-product-selector-modal'
              },
              [PREFIX_NAME_CHANNEL + '_selected_radio_index_channel']: {
                bind: 'selected-radio-index-changed'
              },
              [PREFIX_NAME_CHANNEL + '_confirm_buttons_open']: {
                bind: 'show-confirm-buttons'
              },
              [PREFIX_NAME_CHANNEL + '_points_transfer_request_channel']: {
                bind: 'post-transfer-points'
              },
              [PREFIX_NAME_CHANNEL + '_show_info_cards_off']: {
                bind: 'not-active-cards'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_points_transfer_show_close_confirm_channel: {
                bind: 'show-close-confirm'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'navigate-back-button',
                backStep: true
              },
              [PREFIX_NAME_CHANNEL + '_shared']: {
                bind: 'transfer-success-shared'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_transfer_success_channel']: {
                bind: 'navigation-to-points-transfer-success',
                link: {
                  page: 'pointsTransferReview'
                }
              },
              [PREFIX_NAME_CHANNEL + '_show_confirm']: {
                bind: 'open-confirm'
              },
              [PREFIX_NAME_CHANNEL + '_manage_button_status_net']: {
                bind: 'glomo-opx-transfer-dm-manage-button-status-net'
              },
              global_points_transfer_error_channel: {
                bind: 'transfer-error'
              },
              go_back_to_dashboard: {
                bind: 'financial-overview-refresh'
              },
              financial_overview_refresh: {
                bind: 'financial-overview-refresh'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_step_1']: {
                bind: 'glomo-opx-transfer-dm-manage-decorated-step-1'
              },
              [PREFIX_NAME_CHANNEL + '_manage_decorated_step_2']: {
                bind: 'glomo-opx-transfer-dm-manage-decorated-step-2'
              },
              [PREFIX_NAME_CHANNEL + '_destination_selected']: {
                bind: 'destination-selected'
              },
              [PREFIX_NAME_CHANNEL + '_points_selected']: {
                bind: 'points-selected'
              },
              [PREFIX_NAME_CHANNEL + '_show_card_info']: {
                bind: 'show-card-off-info'
              },
              [PREFIX_NAME_CHANNEL + '_show_card_information_message']: {
                bind: 'message-active-inoperative-cards-destinantion-list'
              }
            },
            params: {
              productId: 'productId',
              transferPointsReview: 'transferPointsReview'
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                global_points_transfer_show_close_confirm_channel_spherica: {
                  bind: 'show-close-confirm'
                }
              }
            },
            remove: {
              out: [
                'global_points_transfer_show_close_confirm_channel'
              ]
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        type: 'UI',
        properties: {
          config: configButtons,
          className: 'additional-points-transfer-confirm-button',
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_manage_button_status_net']: {
                bind: 'hidden'
              }
            },
            out: {
              open_control_veil: {
                bind: 'cells-confirm-buttons-click-secondary'
              },
              [PREFIX_NAME_CHANNEL + '_confirm_buttons_pressed_channel']: {
                bind: 'cells-confirm-buttons-click-secondary'
              }
            }
          }
        },
        propertiesSpherica: {
          config: {
            buttons: {
              secondary: {
                text: 'cells-st-button-continue-label-spherica',
                class: 'secondary full',
                variant: 'primary-alt'
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
          path: 'loyalty/v0/points/transfer-rewards',
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              [PREFIX_NAME_CHANNEL + '_points_transfer_request_channel']: {
                bind: 'postPointsTransfer'
              }
            },
            out: {
              [PREFIX_NAME_CHANNEL + '_transfer_rewards_response']: {
                bind: 'success-on-transfer-rewards'
              },
              [PREFIX_NAME_CHANNEL + '_transfer_rewards_error']: {
                bind: 'error-on-transfer-rewards'
              }
            }
          }
        }
      },

      {
        zone: 'app__main',
        tag: 'glomo-analytics-points-transfer-manager',
        familyPath: '@glomo-web-components/glomo-analytics-points-transfer-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              global_reward_analytics_set_product_name: {
                bind: 'setProductNameOrigin'
              },
              [PREFIX_NAME_CHANNEL + '_init_page']: {
                bind: 'firePageVisit'
              },
              [PREFIX_NAME_CHANNEL + '_recipient_selector_change_recipient']: {
                bind: 'firePageVisit'
              },
              [PREFIX_NAME_CHANNEL + '_view_all_destinations_channel']: {
                bind: 'fireViewAllCards'
              },
              [PREFIX_NAME_CHANNEL + '_destination_selected']: {
                bind: 'fireSelectedCard'
              },
              [PREFIX_NAME_CHANNEL + 'change_last_step_collapsed']: {
                bind: 'fireSelectPoints'
              },
              [PREFIX_NAME_CHANNEL + '_points_selected']: {
                bind: 'firePointsSelected'
              },
              [PREFIX_NAME_CHANNEL + '_points_transfer_request_channel']: {
                bind: 'fireFinishPointsTransfer'
              },
              global_points_transfer_error_channel: {
                bind: 'fireErrorState'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_points_transfer_success_channel']: {
                bind: 'fireSuccessState'
              },
              [PREFIX_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_navigate_to_back_page_channel']: {
                bind: 'reset'
              },
              [PREFIX_NAME_CHANNEL + '_show_info_cards_off']: {
                bind: 'fireNotActiveCards'
              }
            },
            out: {
              points_transfer_fire_view_points_transfer_page_visit: {
                bind: 'analytics-page-visit',
                analytics: ANALYTICS.TRANSFER_POINTS_PAGE_VISIT
              },
              points_transfer_fire_view_all_cards: {
                bind: 'analytics-view-all-cards',
                analytics: ANALYTICS.TRANSFER_POINTS_APP_STARTED_SEE_ALL
              },
              points_transfer_fire_view_list_cards: {
                bind: 'analytics-view-list-cards',
                analytics: ANALYTICS.TRANSFER_POINTS_HUELLA_CARD_LIST
              },
              points_transfer_fire_selected_card: {
                bind: 'analytics-selected-card',
                analytics: ANALYTICS.TRANSFER_POINTS_APP_STARTED_CHOOSE_CARD
              },
              points_transfer_fire_select_points: {
                bind: 'analytics-select-points',
                analytics: ANALYTICS.TRANSFER_POINTS_APP_STEP_2
              },
              points_transfer_fire_selected_points: {
                bind: 'analytics-selected-points',
                analytics: ANALYTICS.TRANSFER_POINTS_APP_STEP_3
              },
              points_transfer_fire_finish_points_transfer: {
                bind: 'analytics-finish-points-transfer',
                analytics: ANALYTICS.OPEN_HOW_TO_GET_POINTS_INTERNAL_LINK
              },
              points_transfer_fire_error_state: {
                bind: 'analytics-error-state',
                analytics: ANALYTICS.TRANSFER_POINTS_ERROR_STATE
              },
              points_transfer_fire_success_state: {
                bind: 'analytics-success-state',
                analytics: ANALYTICS.TRANSFER_POINTS_APP_COMPLETED
              },
              points_transfer_fire_not_active_cards: {
                bind: 'analytics-not-active-cards',
                analytics: ANALYTICS.TRANSFER_POINTS_NOT_ACTIVE_CARDS
              }
            }
          }
        }
      }
    ]
  };
  if (!CONFIG.native) {
    base.components.push(disconnectedBanner(PAGE_NAME));
  }
  base.components.push(cellsConnectionStatus(PAGE_NAME));
  addCommonErrors(base.components)();
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
