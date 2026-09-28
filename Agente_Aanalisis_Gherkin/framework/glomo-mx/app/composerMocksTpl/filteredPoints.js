'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'filteredPoints';
  const { getLanguage, getVisibleChars } = require('./common/helpers/_utils');
  const LANGUAGE = getLanguage();
  const VISIBLE_CHARS = getVisibleChars(CONFIG)('filteredPoints');
  const analytics = require('./analytics/_reward.js')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const {
    globalServices: { host, requiredToken = 'tsec'},
    native = false,
    nativeIos: isNativeIos = false
  } = CONFIG;

  const base = {
    hash: 'filtered-points',
    currentPage: {
      url: '/filtered-points'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'dark-blue-bg',
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            filtered_points_reset_scroll_page: {
              bind: 'resetLayerScroll'
            },
            filtered_points_change_header_fix: {
              bind: 'headerFixed'
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
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          mask: {
            separator: '•',
            chars: VISIBLE_CHARS,
            status: true
          },
          cellsConnections: {
            in: {
              filtered_points_exit_page: {
                bind: 'reset'
              },
              filtered_points_set_header_title: {
                bind: 'setProperties'
              },
              filtered_points_hide_header: {
                bind: 'hidden'
              }
            },
            out: {
              filtered_points_header_main_icon_left_clicked: {
                bind: 'click-left-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--core-grey',
          leftIcon: 'coronita:back',
          variant: 'primary',
          mask: {
            separator: '•',
            chars: VISIBLE_CHARS,
            status: true
          },
          cellsConnections: {
            in: {
              filtered_points_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              filtered_points_set_header_title: {
                bind: 'setProperties'
              },
              filtered_points_hide_header: {
                bind: 'hidden'
              }
            },
            out: {
              filtered_points_header_main_icon_left_clicked: {
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
        tag: 'bbva-panel-process',
        familyPath: '@bbva-web-components/bbva-panel-process',
        render: 'litElement',
        properties: {
          pointsDecimalsHidden: true,
          hideIcon: true,
          loading: false,
          text: 'cells-rewards-points-panel-process',
          cellsConnections: {
            in: {
              filtered_points_exit_page: {
                bind: 'reset'
              },
              filtered_pointsskeleton_panel: {
                bind: 'loading'
              },
              filtered_points_parsed_available_points: {
                bind: 'points'
              },
              filtered_points_description_parsed_available_points: {
                bind: 'description'
              },
              filtered_points_reset_description_panel: {
                bind: 'description'
              },
              filtered_points_reset_description_points: {
                bind: 'points'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-aggregation-simple-list',
        tagSpherica: 'bbva-aggregation-simple-list-spherica',
        familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
        familyPathSpherica: '@glomo-web-components/bbva-aggregation-simple-list-spherica',
        render: 'litElement',
        properties: {
          showHeaderText: false,
          clipBox: true,
          cellsConnections: {
            in: {
              filtered_points_exit_page: {
                bind: 'reset'
              },
              filtered_points_activate_expandable_filtered_points: {
                bind: 'activeExpandable'
              },
              filtered_pointsreset_activate_filtered_points: {
                bind: 'activeExpandable'
              },
              filtered_points_points_to_beat_parse_filtered_points: {
                bind: 'config'
              },
              'filtered_points_points_row-title': {
                bind: 'rowTitle'
              }
            },
            out: {
              filtered_points_open_expandable: {
                bind: 'expandable-accordion-open-change'
              }
            }
          }
        },
        propertiesSpherica: {
          showHeaderText: false,
          clipBox: true,
          variant: 'primary-alt',
          cellsConnections: {
            in: {
              filtered_points_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              filtered_points_activate_expandable_filtered_points: {
                bind: 'activeExpandable'
              },
              filtered_pointsreset_activate_filtered_points: {
                bind: 'activeExpandable'
              },
              filtered_points_points_to_beat_parse_filtered_points: {
                bind: 'config'
              },
              'filtered_points_points_row-title': {
                bind: 'rowTitle'
              }
            },
            out: {
              filtered_points_open_expandable: {
                bind: 'expandable-accordion-open-change'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-message',
        familyPath: '@bbva-web-components/bbva-notification-message',
        tagSpherica: 'bbva-notification-message-spherica',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          iconClose: true,
          messageTitle: 'cells-rewards-points-notification-message-title',
          message: 'cells-rewards-points-notification-message',
          className: 'u-margin--grid',
          hidden: true,
          cellsConnections: {
            in: {
              filtered_points_hidden_message: {
                bind: 'hidden'
              }
            },
            out: {
              filtered_points_message_close_icon: {
                bind: 'notification-message-icon-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'rewards-loyalty-points-transactions',
        familyPath: '@bbva-web-components-widgets/rewards-loyalty-points-transactions',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          language: LANGUAGE,
          needHeaderSelector: true,
          headerCategoryHelpModalDescriptionParagraphTexts: [
            {
              type: 'text', text: 'rewards-loyalty-points-transactions-help-paragraph-one'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-help-list-bullet-one'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-help-list-bullet-two'
            }
          ],
          emptyPeriodHelpModalDescriptionParagraphTexts: [
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-empty-help-list-bullet-one'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-empty-help-list-bullet-two'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-empty-help-list-bullet-three'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-empty-help-list-bullet-four'
            }
          ],
          cellsConnections: {
            in: {
              __bridge_page_filtered_points: {
                analytics: analytics.analyticsPageViewPointsFiltered,
                featureFlag: analytics.analyticsFeatureFlagPointsDetail
              },
              filtered_points_send_card_id: {
                bind: 'setCardData'
              },
              filtered_points_send_rewards_content: {
                bind: 'openPeriodRewardaData'
              },
              filtered_points_exit_page: {
                bind: 'reset'
              },
              native_back_button_clicked_close_modal: {
                bind: 'closeModal'
              }
            },
            out: {
              filtered_points_reset_scroll_page: {
                bind: 'rewards-loyalty-points-transactions-movements-tab-click'
              },
              cells_to_native_modal_closed: {
                bind: 'rewards-loyalty-points-transactions-modal-close',
                'forward-to-native': true
              },
              cells_to_native_modal_opened: {
                bind: 'rewards-loyalty-points-transactions-modal-open',
                'forward-to-native': true
              },
              filtered_points_rewards_loading: {
                bind: 'rewards-loyalty-points-transactions-rewards-load'
              },
              filtered_points_movements_loading: {
                bind: 'rewards-loyalty-points-transactions-movements-load'
              },
              filtered_points_click_loyalty_reward_tab: {
                bind: 'rewards-loyalty-points-transactions-rewards-tab-click',
                analytics: analytics.analyticsInternalLinkRewardsLoyaltyPointsTabDetail
              },
              filtered_points_max_attempts_rewards_period_error: {
                bind: 'rewards-loyalty-points-transactions-max-attempts-getrewards-load',
                analytics: analytics.rewardsLoyaltyPointsErrorLoadDetail
              },
              filtered_points_show_loyalty_help_modal: {
                bind: 'rewards-loyalty-points-transaction-help-open'
              }
            }
          }
        },
        propertiesSpherica: {
          host,
          native,
          requiredToken,
          language: LANGUAGE,
          cellsConnections: {
            in: {
              __bridge_page_filtered_points: {
                analytics: analytics.analyticsPageViewPointsFiltered,
                featureFlag: analytics.analyticsFeatureFlagPointsDetail
              },
              filtered_points_send_card_id: {
                bind: 'setCardData'
              },
              filtered_points_header_main_icon_left_clicked: {
                bind: 'reset'
              }
            },
            out: {
              filtered_points_reset_scroll_page: {
                bind: 'rewards-loyalty-points-transactions-movements-tab-click'
              },
              cells_to_native_modal_closed: {
                bind: 'rewards-loyalty-points-transactions-modal-help-info-close',
                'forward-to-native': true
              },
              cells_to_native_modal_opened: {
                bind: 'rewards-loyalty-points-transactions-modal-help-info-open',
                'forward-to-native': true
              },
              filtered_points_rewards_loading: {
                bind: 'rewards-loyalty-points-transactions-rewards-load'
              },
              filtered_points_movements_loading: {
                bind: 'rewards-loyalty-points-transactions-movements-load'
              },
              filtered_points_click_loyalty_reward_tab: {
                bind: 'rewards-loyalty-points-transactions-rewards-tab-click',
                analytics: analytics.analyticsInternalLinkRewardsLoyaltyPointsTabDetail
              },
              filtered_points_max_attempts_rewards_period_error: {
                bind: 'rewards-loyalty-points-transactions-max-attempts-get-rewards-load',
                analytics: analytics.rewardsLoyaltyPointsErrorLoadDetail
              },
              filtered_points_show_loyalty_help_modal: {
                bind: 'rewards-loyalty-points-transaction-help-info-open'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-loyalty-points-transactions',
        familyPath: '@glomo-web-components/bbva-manager-loyalty-points-transactions',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              filtered_points_exit_page: {
                bind: 'reset'
              },
              reward_send_raw_cards: {
                bind: 'rawDataCardsRewards'
              },
              reward_card_list_item_click: {
                bind: 'setCardData'
              },
              reward_points_balances_api_success: {
                bind: 'setBalance'
              },
              reward_points_init_icon_message: {
                bind: 'initNotificationMessage'
              },
              filtered_points_message_close_icon: {
                bind: 'closeNotificationMessage'
              },
              global_storage_get_reward_income_counter_error: {
                bind: 'rewardIncomeCounterLocalStorage'
              },
              global_storage_get_reward_income_counter_success: {
                bind: 'rewardIncomeCounterLocalStorage'
              },
              global_storage_get_card_detail_visited_success: {
                bind: 'visitedCardDetailLocalStorage'
              },
              filtered_points_open_expandable: {
                bind: 'expandableAccordionOpen'
              }
            },
            out: {
              filtered_points_set_header_title: {
                bind: 'set-detail-points-header-title'
              },
              filtered_points_activate_expandable_filtered_points: {
                bind: 'bbva-loyalty-transaction-activate-expandable-filtered-points'
              },
              filtered_pointsreset_activate_filtered_points: {
                bind: 'reset-bbva-loyalty-transaction-activate-expandable-reward'
              },
              filtered_points_points_to_beat_parse_filtered_points: {
                bind: 'bbva-loyalty-transaction-points-to-beat-parse-filtered-points'
              },
              filtered_points_parsed_available_points: {
                bind: 'bbva-loyalty-transaction-parsed-available-points'
              },
              filtered_points_description_parsed_available_points: {
                bind: 'bbva-loyalty-transaction-description-parsed-available-points'
              },
              'filtered_points_points_row-title': {
                bind: 'set-detail-points-row-title'
              },
              filtered_points_reset_description_panel: {
                bind: 'reset-description-panel-process'
              },
              filtered_points_reset_description_points: {
                bind: 'reset-description-panel-process'
              },
              filtered_points_hidden_message: {
                bind: 'hidden-notification-message'
              },
              global_get_from_storage: {
                bind: 'get-key-notification-message'
              },
              global_set_in_storage: {
                bind: 'set-key-notification-message'
              },
              filtered_points_analytic_expandable: {
                bind: 'expandable-accordion-open-analytics',
                analytics: analytics.analyticsExpandableClickFilteredPoints
              }
            }
          }
        },
        propertiesSpherica: {
          cellsConnections: {
            in: {
              filtered_points_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_send_raw_cards: {
                bind: 'rawDataCardsRewards'
              },
              reward_card_list_item_click: {
                bind: 'setCardData'
              },
              reward_points_balances_api_success: {
                bind: 'setBalance'
              },
              reward_points_init_icon_message: {
                bind: 'initNotificationMessage'
              },
              filtered_points_message_close_icon: {
                bind: 'closeNotificationMessage'
              },
              global_storage_get_reward_income_counter_error: {
                bind: 'rewardIncomeCounterLocalStorage'
              },
              global_storage_get_reward_income_counter_success: {
                bind: 'rewardIncomeCounterLocalStorage'
              },
              global_storage_get_card_detail_visited_success: {
                bind: 'visitedCardDetailLocalStorage'
              },
              filtered_points_open_expandable: {
                bind: 'expandableAccordionOpen'
              }
            },
            out: {
              filtered_points_set_header_title: {
                bind: 'set-detail-points-header-title'
              },
              filtered_points_activate_expandable_filtered_points: {
                bind: 'bbva-loyalty-transaction-activate-expandable-filtered-points'
              },
              filtered_pointsreset_activate_filtered_points: {
                bind: 'reset-bbva-loyalty-transaction-activate-expandable-reward'
              },
              filtered_points_points_to_beat_parse_filtered_points: {
                bind: 'bbva-loyalty-transaction-points-to-beat-parse-filtered-points'
              },
              filtered_points_parsed_available_points: {
                bind: 'bbva-loyalty-transaction-parsed-available-points'
              },
              filtered_points_description_parsed_available_points: {
                bind: 'bbva-loyalty-transaction-description-parsed-available-points'
              },
              'filtered_points_points_row-title': {
                bind: 'set-detail-points-row-title'
              },
              filtered_points_reset_description_panel: {
                bind: 'reset-description-panel-process'
              },
              filtered_points_reset_description_points: {
                bind: 'reset-description-panel-process'
              },
              filtered_points_hidden_message: {
                bind: 'hidden-notification-message'
              },
              global_get_from_storage: {
                bind: 'get-key-notification-message'
              },
              global_set_in_storage: {
                bind: 'set-key-notification-message'
              },
              filtered_points_analytic_expandable: {
                bind: 'expandable-accordion-open-analytics',
                analytics: analytics.analyticsExpandableClickFilteredPoints
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-manager-rewards-landing',
        familyPath: '@glomo-web-components/bbva-manager-rewards-landing',
        render: 'litElement',
        properties: {
          loading: true,
          isNativeIos,
          cellsConnections: {
            in: {
              reward_card_list_item_click: {
                bind: 'getCardDataForLoyaltyPoints'
              },
              filtered_points_header_main_icon_left_clicked: {
                bind: 'allowExitOperative'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'allowExitOperative'
              },
              filtered_points_rewards_loading: {
                bind: 'rewardsRequestsLoading'
              },
              filtered_points_movements_loading: {
                bind: 'movementsRequestsLoading'
              },
              filtered_points_show_loyalty_help_modal: {
                bind: 'hanldeLoyaltyHelpModalVisibility'
              }
            },
            out: {
              filtered_points_send_card_id: {
                bind: 'bbva-manager-rewards-landing-card-id'
              },
              filtered_points_send_rewards_content: {
                bind: 'bbva-manager-rewards-landing-rewards-data'
              },
              filtered_points_exit_page: {
                bind: 'bbva-manager-rewards-allow-exit',
                backStep: true
              },
              filtered_points_hide_header: {
                bind: 'bbva-manager-rewards-help-modal-visible'
              },
              filtered_points_change_header_fix: {
                bind: 'bbva-manager-rewards-hide-header-fix'
              }
            }
          }
        },
        propertiesSpherica: {
          loading: true,
          isNativeIos,
          cellsConnections: {
            in: {
              reward_card_list_item_click: {
                bind: 'getCardDataForLoyaltyPoints'
              },
              filtered_points_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'navigateBackFromAndroid'
              },
              filtered_points_show_loyalty_help_modal: {
                bind: 'hanldeLoyaltyHelpModalVisibility'
              }
            },
            out: {
              filtered_points_send_card_id: {
                bind: 'bbva-manager-rewards-landing-card-id'
              },
              filtered_points_send_rewards_content: {
                bind: 'bbva-manager-rewards-landing-rewards-data'
              },
              filtered_points_hide_header: {
                bind: 'bbva-manager-rewards-help-modal-visible'
              },
              filtered_points_change_header_fix: {
                bind: 'bbva-manager-rewards-hide-header-fix'
              }
            }
          }
        }
      }
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, ['reward_income_counter', 'card_detail_visited'], CONFIG);
  return sphericaPageUtils.spherize(base);
};
