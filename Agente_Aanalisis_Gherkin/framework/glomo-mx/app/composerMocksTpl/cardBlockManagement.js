'use strict';

module.exports = (CONFIG) => {
  const {
    getLocalCurrency,
    getLanguage,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        customersV1: customerApiVersion,
        cardConditionsV1: cardsConditionsApiVersion,
        cards: cardsBlockApiVersion
      }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)('cardBlockManagement');
  const pageName = 'cardBlockManagement';
  const analytics = require('./analytics/_cardBlockManagement');
  const base = {
    hash: 'card_block_management',
    currentPage: {
      url: '/card_block_management/:productId'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        className: nativeIos ? 'ios-top-padding' : '',
        delayScrollTop: 100,
        disableEdgeSwipe: true,
        extraHeaderClass: 'header--core',
        headerFixed: true,
        disableScrollLock: true,
        headerHeight: headerHeightMinimum,
        iOSFixedHeader: nativeIos,
        preventScrollWithOverlay: true,
        cellsConnections: {
          in: {
            card_block_management_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_cardBlockManagement: {
                bind: 'init'
              }
            },
            out: {
              card_block_management_reset_page: {
                bind: 'reset'
              },
              card_block_management_init_page: {
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
        tag: 'card-configuration-card-block-management-mx',
        familyPath: '@glomo-web-components/card-configuration-card-block-management-mx',
        type: 'UI',
        render: 'litElement',
        properties: {
          enableSafeEnvironmentFeedback: true,
          availableBlockReasonsForLost: ['LOST', 'LOST_CANCELATION', 'TJ.PERDIDA', 'TJ. PERDIDA'],
          availableBlockReasonsForStolen: ['STOLEN', 'STOLEN_CANCELATION', 'TJ.ROBADA', 'TJ. ROBADA'],
          availableBlockReasonsForExpired: ['EXPIRED', 'VENCIDA', 'TJ.CARTERA VENCIDA'],
          blockReference: '',
          showHeaderIconLabels: true,
          processAtBranchEnabled: true,
          hideCardAmounts: {CREDIT_CARD: false, DEBIT_CARD: true},
          hideTermsAndConditionsForReplacement: { CREDIT_CARD: false, DEBIT_CARD: true },
          cardsBlockApiVersion,
          cardsConditionsApiVersion,
          cardImageId: 'FRONT_CARD',
          customAddressFields: [
            { name: 'street', id: 'STREET' },
            { name: 'exteriorNumber', id: 'EXTERIOR_NUMBER' },
            { name: 'interiorNumber', id: 'INTERIOR_NUMBER' },
            { name: 'colony', id: 'COLONY' },
            { name: 'state', id: 'ADMINISTRATIVE_AREA_LEVEL_1' },
            { name: 'postalCode', id: 'POSTAL_CODE' },
            { name: 'municipality', id: 'MUNICIPALITY' },
            { name: 'reference', id: 'REFERENCE' },
            { name: 'country', id: 'COUNTRY' }
          ],
          customerApiVersion,
          enableBlockWhenUnavailableData: true,
          enableEmailValidation: true,
          enablePrivacityWarning: true,
          host,
          iOSFixedHeader: nativeIos,
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          locale: 'mx',
          native,
          pageName,
          requiredToken,
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'nativeBackNavigation'
              },
              global_set_app_settings: {
                bind: 'appSettings'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlags'
              },
              global_additional_card_detail_is_next_to_expired: {
                bind: 'isNextToExpire'
              },
              global_card_detail_is_next_to_expired: {
                bind: 'isNextToExpire'
              },
              card_Detail_set_card_img_product_data: {
                bind: 'cardImage'
              },
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              global_selected_card_api_version: {
                bind: 'cardApiVersion'
              },
              sign_modal_cancelled: {
                bind: 'closeOtp'
              },
              widget_signature_close_modal_error: {
                bind: 'closeOtp'
              },
              sign_modal_close_reset: {
                bind: 'closeOtp'
              },
              reset_and_open: {
                bind: 'resetAndOpenWithOperativeType'
              },
              block_and_replacement_branch_selected_list_item_cbm: {
                bind: 'selectedBranch'
              },
              block_and_replacement_branch_selected_on_detail_cbm: {
                bind: 'selectedBranch'
              }
            },
            out: {
              card_block_management_go_to_back: {
                bind: 'navigation-go-back',
                backStep: true
              },
              card_block_management_go_to_dashboard: {
                bind: 'card-configuration-card-block-management-dashboard-navigate',
                link: {
                  page: 'dashboard'
                }
              },
              financial_overview_refresh: {
                bind: 'card-configuration-card-block-management-dashboard-navigate'
              },
              global_action_launcher_dialer: {
                bind: 'card-configuration-card-block-management-call-to-bank-button-click'
              },
              reset_and_open: {
                bind: 'card-configuration-card-block-management-link-reposition-click'
              },
              navigate_to_branch_locator: {
                bind: 'card-configuration-card-block-management-card-delivery-type-search-branch-open',
                link: {
                  page: 'branchLocator'
                }
              },
              card_block_management_branch_locator_open_footprint: {
                bind: 'card-configuration-card-block-management-card-delivery-type-search-branch-open',
                analytics: analytics.appPageFootprintBranchPage
              },
              card_block_management_information_not_available_error_show: {
                bind: 'card-configuration-card-block-management-information-not-available-error-show',
                analytics: analytics.appPageFootprintInformationNotAvailable
              },
              card_block_management_operation_not_performed_error_show: {
                bind: 'card-configuration-card-block-management-not-performed-operation-error-show',
                analytics: analytics.appPageFootprintOperationNotPerformed
              },
              card_block_management_information_address_not_available_error_show: {
                bind: 'card-configuration-card-block-management-information-not-available-addresses-error-show',
                analytics: analytics.appPageFootprintInformationAddressNotAvailable
              },
              card_block_management_page_app_on_click_start: {
                bind: 'card-configuration-card-block-management-initialize',
                analytics: analytics.appOnClickStart
              },
              card_block_management_page_visit: {
                bind: 'card-configuration-card-block-management-first-step-open',
                analytics: analytics.appPageVisit
              },
              card_block_management_page_new_card_visible: {
                bind: 'card-configuration-card-block-management-step-reposition-type-show',
                analytics: analytics.appPageFootprintNewTargetOption
              },
              card_block_management_page_app_started: {
                bind: 'card-configuration-card-block-management-first-step-interact',
                analytics: analytics.appStarted
              },
              card_block_management_app_step_2: {
                bind: 'card-configuration-card-block-management-step2-open',
                analytics: analytics.getAppStepData('2')
              },
              card_block_management_app_step_3: {
                bind: 'card-configuration-card-block-management-step3-open',
                analytics: analytics.getAppStepData('3')
              },
              card_block_management_app_step_4: {
                bind: 'card-configuration-card-block-management-step4-open',
                analytics: analytics.getAppStepData('4')
              },
              card_block_management_app_step_5: {
                bind: 'card-configuration-card-block-management-step5-open',
                analytics: analytics.getAppStepData('5')
              },
              card_block_management_app_otp_visible: {
                bind: 'card-configuration-card-block-management-step5-otp-open',
                analytics: analytics.appOtpFootprint
              },
              card_block_management_app_completed: {
                bind: 'card-configuration-card-block-management-app-complete',
                analytics: analytics.appCompleted
              }
            },
            params: {
              cardId: 'cardId',
              operativeType: 'operativeType'
            }
          }
        }
      }
    ]
  };
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('card-configuration-card-block-management-mx');
  return base;
};
