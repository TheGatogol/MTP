/* eslint-disable no-unused-vars */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('listCreditCardLimits');// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const PAGE_NAME_CHANNEL = 'list_credit_card_limits';
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_operationalLimits')({});


  const base = {
    hash: 'list-credit-card-limits',
    currentPage: {
      url: '/list-credit-card-limits/:productId',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'horizontal',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding' : '',
        rightDrawer: true,
        enabledPullToRefresh: true,
        cellsConnections: {
          in: {
            [PAGE_NAME_CHANNEL + '_init_page']: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
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
          pageName: 'listCreditCardLimits',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_listCreditCardLimits: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PAGE_NAME_CHANNEL + '_init_page']: {
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
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          continue: 'card',
          titleName: 'glomo-limits-list-title',
          rightIcon: 'coronita:help',
          cellsConnections: {
            in: {},
            out: {
              navigation_credit_card_limits_to_card_detail: {
                bind: 'click-left-button',
                backStep: true
              },
              [PAGE_NAME_CHANNEL + '_open_generic_limits_help_modal']: {
                bind: 'click-right-button'
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
          backAction: 'header-left-button',
          cellsConnections: {
            in: {
              navigation_limits_list_to_continue: {
                bind: 'navigate'
              },
              navigation_limits_list_to_page: {
                bind: 'navigate'
              }
            },
            out: {
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-text-description',
        properties: {
          id: 'glomo-limits-list-daily-limits-text-description',
          title: '',
          titleIcon: 'help',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_set_limits_list_title']: {
                bind: 'title'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_list_subtitle']: {
                bind: 'htmlDescription'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_list_style']: {
                bind: 'class'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_daily_limits_click_tooltip']: {
                bind: 'cells-text-description-title-icon-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-key-values-list',
        properties: {
          className: 'right-value-icon',
          showSkeletonValue: true,
          emptyListResultsImageSrc: './images/glass.svg',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_send_limits_list']: {
                bind: 'setProperties'
              },
              [PAGE_NAME_CHANNEL + '_reset_limit_list_data']: {
                bind: 'list'
              },
              [PAGE_NAME_CHANNEL + '_show_key_values_list_skeleton']: {
                bind: 'showSkeleton'
              },
              [PAGE_NAME_CHANNEL + '_hide_key_values_list_skeleton']: {
                bind: 'hideSkeleton'
              },
              [PAGE_NAME_CHANNEL + '_show_empty_list_advice_image']: {
                bind: 'showEmptyListAdviceImage'
              },
              [PAGE_NAME_CHANNEL + '_hide_empty_list_advice_image']: {
                bind: 'hideEmptyListAdviceImage'
              },
              [PAGE_NAME_CHANNEL + '_key_values_list_style']: {
                bind: 'additionalInfoClass'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_limit_selected']: {
                bind: 'cells-key-values-list-icon-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-modal-alert',
        properties: {
          toast: true,
          cellsConnections: {
            in: {
              global_open_glomo_alert_manager_limits_update_success: {
                bind: 'setProperties'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-list-credit-card-limits-manager-mx',
        familyPath: 'glomo-list-credit-card-limits-manager',
        properties: {
          bulletsInModal: {
            TEXT_DEBIT: 4,
            TEXT_CREDIT: 6,
            TEXT_OPERATIVE_credit: 7
          },
          className: '',
          cellsConnections: {
            in: {
              set_data_from_service: {
                bind: 'getDataForDeepLink'
              },
              [PAGE_NAME_CHANNEL + '_init_page']: {
                bind: 'getLimitsData'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_data']: {
                bind: 'setLimitsData'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_data_error']: {
                bind: 'errorLimitsData'
              },
              [PAGE_NAME_CHANNEL + '_open_generic_limits_help_modal']: {
                bind: 'openGenericLimitsHelpModal'
              },
              [PAGE_NAME_CHANNEL + '_limit_selected']: {
                bind: 'navigateToEditLimitsPage'
              },
              navigation_credit_card_limits_to_card_detail: {
                bind: 'resetList'
              },
              edit_credit_card_limits_reset_limits_list_prev_page_page_data: {
                bind: 'resetList'
              },
              [PAGE_NAME_CHANNEL + '_daily_limits_click_tooltip']: {
                bind: 'openTitleHelpModal'
              },
              global_list_credit_card_limits_error_modal_accept: {
                bind: 'getLimitsData'
              },
              global_list_credit_card_limits_error_modal_cancel: {
                bind: 'cancelLimitsData'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_list_title']: {
                bind: 'set-list-title'
              },
              ['card_Detail_set_flag_debit_limits']: {
                bind: 'isDebitCard'
              },
              global_opened_modal: {
                bind: 'closedModal'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackBtn'
              },
              global_feature_flag_collection_updated: {
                bind: 'getFeatureFlagCollection'
              },
              global_card_detail_data_success_channel: {
                bind: 'cardSelected'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'navigationDeepLink'
              }
            },
            out: {
              deep_link_set_version_and_id: {
                bind: 'deep-link-set-version-and-id'
              },
              deep_link_set_expand: {
                bind: 'deep-link-set-expand'
              },
              set_push_data_void: {
                bind: 'set-push-data-void'
              },
              [PAGE_NAME_CHANNEL + '_close_page']: {
                bind: 'close-page',
                backStep: true
              },
              [PAGE_NAME_CHANNEL + '_get_limits_data']: {
                bind: 'get-limits-data'
              },
              [PAGE_NAME_CHANNEL + '_send_limits_list']: {
                bind: 'send-limits-list-data'
              },
              global_open_glomo_alert_manager_header_modal: {
                bind: 'open-header-limits-help-modal'
              },
              global_open_glomo_alert_manager_title_modal: {
                bind: 'open-title-limits-help-modal'
              },
              global_open_glomo_alert_manager_list_credit_card_limits_error_modal: {
                bind: 'open-list-credit-card-limits-error-modal'
              },
              [PAGE_NAME_CHANNEL + '_reset_limit_list_data']: {
                bind: 'reset-list-data'
              },
              [PAGE_NAME_CHANNEL + '_send_limits_list_to_edit']: {
                bind: 'send-data-to-edit-limits-page'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_list_title']: {
                bind: 'set-list-title'
              },
              [PAGE_NAME_CHANNEL + '_show_key_values_list_skeleton']: {
                bind: 'show-key-values-list-skeleton'
              },
              [PAGE_NAME_CHANNEL + '_hide_key_values_list_skeleton']: {
                bind: 'hide-key-values-list-skeleton'
              },
              [PAGE_NAME_CHANNEL + '_show_empty_list_advice_image']: {
                bind: 'show-empty-list-advice-image'
              },
              [PAGE_NAME_CHANNEL + '_hide_empty_list_advice_image']: {
                bind: 'hide-empty-list-advice-image'
              },
              [PAGE_NAME_CHANNEL + '_navigate_to_edit_limits']: {
                bind: 'navigate-to-edit-limits-page',
                link: {
                  page: 'editCreditCardLimits',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              CLOSE_MODAL: {
                bind: 'native-back-close-modal'
              },
              [PAGE_NAME_CHANNEL + '_digital_card_request']: {
                bind: 'digital-card-data'
              },
              [PAGE_NAME_CHANNEL + '_physical_card_request']: {
                bind: 'physical-card-data'
              },
              [PAGE_NAME_CHANNEL + '_key_values_list_style']: {
                bind: 'additional-info-class'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_list_subtitle']: {
                bind: 'set-list-subtitle'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_list_style']: {
                bind: 'set-list-styles'
              },
              set_product_info: {
                bind: 'set-product-info'
              },
              set_card_operative_limits_tdc: {
                bind: 'set-card-operative-limits-tdc'
              }
            },
            params: {
              productId: 'productId'
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
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              deep_link_set_version_and_id: {
                bind: 'setProperties'
              },
              deep_link_set_expand: {
                bind: 'getCard'
              },
              [PAGE_NAME_CHANNEL + '_get_limits_data']: {
                bind: 'getCardLimits'
              },
              [PAGE_NAME_CHANNEL + '_digital_card_request']: {
                bind: 'cardId'
              },
              [PAGE_NAME_CHANNEL + '_physical_card_request']: {
                bind: 'cardId'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_set_limits_data']: {
                bind: 'get-card-limits-response'
              },
              [PAGE_NAME_CHANNEL + '_set_limits_data_error']: {
                bind: 'error-on-get-card-limits'
              },
              set_data_from_service: {
                bind: 'set-card'
              }
            },
            params: {
              cardId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/glomo-analytics-operational-limits-configuration-manager',
        tag: 'glomo-analytics-operational-limits-configuration-manager-mx',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              global_card_detail_data_success_channel: {
                bind: 'getProductInfo'
              },
              [PAGE_NAME_CHANNEL + '_send_limits_list_to_edit']: {
                bind: 'fireAppOnClickStart'
              },
              [PAGE_NAME_CHANNEL + '_init_page']: {
                bind: 'fireListLimitsPageView'
              },
              global_edit_limits_generic_help_modal_accept: {
                bind: 'fireListLimitsPageView'
              },
              global_edit_limits_generic_help_modal_cancel: {
                bind: 'fireListLimitsPageView'
              },
              global_edit_limits_title_help_modal_accept: {
                bind: 'fireListLimitsPageView'
              },
              global_edit_limits_title_help_modal_cancel: {
                bind: 'fireListLimitsPageView'
              },
              [PAGE_NAME_CHANNEL + '_open_generic_limits_help_modal']: {
                bind: 'firePageViewLimitsHelpModal'
              },
              [PAGE_NAME_CHANNEL + '_daily_limits_click_tooltip']: {
                bind: 'firePageViewDailyLimitsInformation'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_analytics_fire_list_limits_page_view']: {
                bind: 'analytics-page-view',
                analytics: ANALYTICS.LIST_LIMITS_PAGE_VIEW,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              },
              [PAGE_NAME_CHANNEL + '_analytics_fire_app_on_click_start']: {
                bind: 'analytics-app-on-click-start',
                analytics: ANALYTICS.APP_ON_CLICK_START,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              },
              [PAGE_NAME_CHANNEL + '_analytics_fire_page_view_limits_help_modal']: {
                bind: 'analytics-page-view-limits-help-modal',
                analytics: ANALYTICS._getAdvancedFootprint('informacion control de gastos'),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              },
              [PAGE_NAME_CHANNEL + '_analytics_fire_page_view_daily_limits_information']: {
                bind: 'analytics-page-view-daily-limits-information',
                analytics: ANALYTICS._getAdvancedFootprint('informacion limites diarios'),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
