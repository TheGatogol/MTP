/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.properties.className = 'cells-spinner-veil-fixed';
  SPINNER.properties.messages = [ 'glomo-profit-points-error-modal-raffle-spinner-message' ];
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('rewardOriginCardPage');
  const PAGE_NAME = 'rewardOriginCardPage';
  const PAGE_NAME_CHANNEL = 'reward_origin_card_page';
  const analytics = require('./analytics/_reward')(CONFIG);

  const base = {
    hash: utils.getCountry(CONFIG) + '-reward-origin-card-page',
    currentPage: {
      url: '/reward-origin-card-page'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
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
              [PAGE_NAME_CHANNEL + '_INIT_CHANNEL']: {
                bind: 'init-page'
              },
              ['global_' + PAGE_NAME_CHANNEL + '_reset_page']: {
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
        tag: 'glomo-navigation-handler',
        properties: {
          currentPage: 'rewardOriginCardPage',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_navigate_to_page_transfer_points']: {
                bind: 'navigateToPage'
              },
              [PAGE_NAME_CHANNEL + '_navigation_reward_to_points_raffle']: {
                bind: 'navigateToPage'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_reward_to_points_raffle']: {
                bind: 'navigation-to-pointsRaffle',
                link: {
                  page: 'pointsRaffle'
                }
              },
              [PAGE_NAME_CHANNEL + '_navigate_to_transfer_points']: {
                bind: 'navigation-to-pointsTransfer',
                link: {
                  page: 'pointsTransfer'
                }
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
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          leftIconSize: '22',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_set_title_name']: {
                bind: 'titleName'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_GO_BACK']: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'global-products-list',
        properties: {
          notifyEvent: 'card-item-tap',
          statusOverlay: 'operative',
          statusDescriptionBelow: true,
          nameOneLine: true,
          showSticker: CONFIG.globalServices.versions.showSticker || false,
          statusIcons: {
            locked: 'coronita:block',
            activate: 'coronita:clock',
            off: 'coronita:on'
          },
          id: 'skeleton1',
          className: 'items-without-box',
          defaultImage: './images/cards/cardFrontDefault.png',
          errorHeaderKey: 'cells-global-dashboard-cards-header',
          autoHideLoading: true,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_set_products_list']: {
                bind: 'productsList'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_selected_product']: {
                bind: 'selected-product'
              },
              global_reward_analytics_set_product_name: {
                bind: 'selected-product'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-transfer-points-cards-list-manager',
        properties: {
          cellsConnections: {
            in: {
              rewards_landing_navigate_to_points_raffle_multi_product: {
                bind: 'titleNameRafle'
              },
              rewards_landing_navigate_to_points_transfer: {
                bind: 'titleNameTransfer'
              },
              [PAGE_NAME_CHANNEL + '_INIT_CHANNEL']: {
                bind: 'init'
              },
              reward_send_raw_cards: {
                bind: 'allCards'
              },
              blue_send_raw_cards: {
                bind: 'allCards'
              },
              blue_navigate_to_points_transfer: {
                bind: 'titleNameTransfer'
              },
              [PAGE_NAME_CHANNEL + '_selected_product']: {
                bind: 'decideWhichFunctionalityToGo'
              },
              [PAGE_NAME_CHANNEL + '_points_detail_post_response']: {
                bind: 'postPointsRaffleResponse'
              },
              [PAGE_NAME_CHANNEL + '_points_detail_post_error']: {
                bind: 'postPointsRaffleError'
              },
              global_login_success_indicators: {
                bind: 'getCurrentCustomer'
              },
              [PAGE_NAME_CHANNEL + '_retry_redemption_simulate_request']: {
                bind: 'retryRequestPostRedemptionSimulateService'
              },
              [PAGE_NAME_CHANNEL + '_close_operative']: {
                bind: 'reset'
              },
              [PAGE_NAME_CHANNEL + '_GO_BACK']: {
                bind: 'reset'
              },
              [PAGE_NAME_CHANNEL + '_help_modal_header_button']: {
                bind: 'setRetrieNumber'
              },
              [PAGE_NAME_CHANNEL + '_help_modal_footer_link_click']: {
                bind: 'setRetrieNumber'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_set_title_name']: {
                bind: 'glomo-transfer-points-cards-list-title-name',
                analytics: analytics.useMyPointsReward
              },
              [PAGE_NAME_CHANNEL + '_set_products_list']: {
                bind: 'glomo-transfer-points-cards-list-products-list',
                analytics: analytics.useMyPointsReward
              },
              [PAGE_NAME_CHANNEL + '_to_points_transfer_filtered_cards_channel']: {
                bind: 'credit-cards-mapped'
              },
              [PAGE_NAME_CHANNEL + '_navigate_to_page_transfer_points']: {
                bind: 'navigate-to-points-transfer'
              },
              [PAGE_NAME_CHANNEL + '_selected_card_channel']: {
                bind: 'glomo-transfer-points-send-selected-card'
              },
              global_profit_points_modal_inactive: {
                bind: 'open-profit-points-modal-inactive'
              },
              global_profit_points_modal_off: {
                bind: 'open-profit-points-modal-off-card'
              },
              global_profit_points_detail_modal_help: {
                bind: 'open-profit-points-detail-modal-help'
              },
              global_profit_points_modal_not_cards: {
                bind: 'open-profit-points-modal-not-cards'
              },
              [PAGE_NAME_CHANNEL + '_redemption_simulate_request']: {
                bind: 'post-redemption-simulate-request'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_navigation_reward_to_points_raffle_detail: {
                bind: 'reward-to-points-raffle-detail'
              },
              [PAGE_NAME_CHANNEL + '_navigation_reward_to_points_raffle']: {
                bind: 'navigation-reward-to-points-raffe'
              },
              global_reward_detail_redemption_simulate_error: {
                bind: 'redemption-simulate-error'
              },
              global_reward_detail_redemption_product_id: {
                bind: 'send-product-id'
              },
              global_reward_detail_redemption_selected_card: {
                bind: 'glomo-transfer-points-selected-card'
              },
              [PAGE_NAME_CHANNEL + 'detail_config_button']: {
                bind: 'reward-origin-card-page-config-close-button'
              },
              [PAGE_NAME_CHANNEL + 'send_analytics_operative_name']: {
                bind: 'glomo-transfer-points-cards-list-title-name-analytics',
                analytics: analytics.productListRewardsTransfer
              },
              [PAGE_NAME_CHANNEL + '_hidden-link']: {
                bind: 'bbva-loyalty-transaction-hidden-link'
              },
              [PAGE_NAME_CHANNEL + '_send_button_name']: {
                bind: 'bbva-loyalty-transaction-send-button-name'
              },
              [PAGE_NAME_CHANNEL + '_close_modal_error']: {
                bind: 'bbva-loyalty-transaction-button-close'
              },
              [PAGE_NAME_CHANNEL + '_rewards-operative-raffle-open-modal']: {
                bind: 'raffle-open-modal-error'
              },
              [PAGE_NAME_CHANNEL + '_error_panel_config_text']: {
                bind: 'redemption-simulate-error-text-panel-info'
              },
              global_reward_detail_selected_card_image: {
                bind: 'glomo-transfer-points-selected-card-image'
              }
            },
            params: {
              raffleSimulateResponse: 'raffleSimulateResponse'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-dm-global-apis-loyalty',
        type: 'CC',
        properties: {
          host: CONFIG.globalServices.host,
          path: 'loyalty/v0/rewards',
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_redemption_simulate_request']: {
                bind: 'postRedemptionSimulate'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_points_detail_post_response']: {
                bind: 'success-on-post-redemption-simulate'
              },
              [PAGE_NAME_CHANNEL + '_points_detail_post_error']: {
                bind: 'error-on-post-redemption-simulate'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        container: true,
        properties: {
          id: 'helpModal1',
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal',
          iconRightPrimary: '',
          closeModalElements: ['footer-link', 'header-left-primary'],
          iconLeftPrimary: 'bbva:return',
          headerText: 'glomo-transfer-points-cards-list-name-rafle',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_rewards-operative-raffle-open-modal']: {
                bind: 'open'
              },
              [PAGE_NAME_CHANNEL + '_hidden-link']: {
                bind: 'linkText'
              },
              [PAGE_NAME_CHANNEL + '_send_button_name']: {
                bind: 'buttonText'
              },
              [PAGE_NAME_CHANNEL + '_close_modal_error']: {
                bind: 'closeModalElements'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_retry_redemption_simulate_request']: {
                bind: 'help-modal-footer-button-click'
              },
              [PAGE_NAME_CHANNEL + '_help_modal_footer_link_click']: {
                bind: 'help-modal-footer-link-click'
              },
              [PAGE_NAME_CHANNEL + '_help_modal_header_button']: {
                bind: 'help-modal-header-left-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'helpModal1.slot-content',
        type: 'UI',
        tag: 'bbva-panel-info',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        properties: {
          disabledTabindex: '',
          headingLevelTitle: 'h3',
          microillustration: 'error',
          heading: 'glomo-profit-points-error-inactive-raffle-offer-modal-title',
          className: 'alert-message --bbva-panel-info-microillustration-width',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_error_panel_config_text']: {
                bind: 'text'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-confirm-buttons',
        properties: {
          hideDivider: true,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + 'detail_config_button']: {
                bind: 'config'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_close_operative']: {
                bind: 'cells-confirm-button-click-primary-reward',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-reward-manager',
        familyPath: '@glomo-web-components/glomo-analytics-reward-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_selected_card_channel']: {
                bind: 'setProductName'
              },
              [PAGE_NAME_CHANNEL + '_reward_to_points_raffle']: {
                bind: 'fireOpenRaffle'
              },
              [PAGE_NAME_CHANNEL + '_navigate_to_transfer_points']: {
                bind: 'fireOpenTransferPoints'
              },
              global_profit_points_modal_inactive: {
                bind: 'fireTransferPointsOriginCardInactive'
              },
              global_profit_points_modal_off: {
                bind: 'fireTransferPointsOriginCardOff'
              }
            },
            out: {
              reward_fire_open_raffle: {
                bind: 'analytics-open-raffle',
                analytics: analytics.openRaffleInternalLink
              },
              reward_fire_open_transfer_points: {
                bind: 'analytics-open-transfer-points',
                analytics: analytics.openTransferPointsInternalLink
              },
              reward_fire_transfer_points_origin_card_inactive_error: {
                bind: 'analytics-transfer-points-origin-card-inactive',
                analytics: analytics.transferPointsOriginCardInactiveError
              },
              reward_fire_transfer_points_origin_card_off_error: {
                bind: 'analytics-transfer-points-origin-card-off',
                analytics: analytics.transferPointsOriginCardOffError
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
