'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'operationals';
  const sphericaPageUtils = require('../composerMocksTpl/common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const isSpherica = sphericaPageUtils.isSpherica();
  const OPERATIVES = require('./analytics/_operationals')(CONFIG);
  const IT_ANALYTICS = require('./analytics/_internationalTransfers')();
  const ITH_ANALYTICS = require('./analytics/_internationalTransfersHistorical')();
  const OPERATIONALS = require('./dashboard/_operationals');
  const LITERALS = require('./analytics/common/_literals');
  const CROSS_COMPONENTS = require('./common/_cross-components');
  const { addOutStorageChannels } = require('./common/_local-storage');

  const base = {
    hash: 'mx-operationals',
    currentPage: {
      url: '/operationals',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        iOSFixedHeader: true,
        className: isNativeIos ? 'ios-top-padding dark-blue-bg' : 'dark-blue-bg',
        rightDrawer: true,
        disableEdgeSwipe: !!CONFIG.nativeShell,
        avoidToggleMenu: !!CONFIG.nativeShell,
        edgeSwipeSensitivity: 50,
        cellsConnections: {
          in: {
            operationals_init_page: {
              bind: 'recalculateHeader'
            },
            product_selector_modal_opened_changed: {
              bind: 'setModalActive'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        animationType: 'verticalUp',
        className: isNativeIos ? 'ios-top-padding' : '',
        variant: 'primary'
      }
    },
    components: [
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
              __bridge_page_operationals: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              operationals_init_page: {
                bind: 'init-page'
              },
              operationals_reset_page: {
                bind: 'reset'
              },
              operationals_init_page_first_time: {
                bind: 'init-page'
              },
              app_error_access_token: {
                bind: 'access-token-error'
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
          className: 'header--dark',
          titleName: 'glomo-operationals-header-title',
          back: true,
          leftIcon: 'coronita:return-12',
          leftIconText: 'bbva-header-main-return-aria-label',
          cellsConnections: {
            in: {},
            out: {
              navigation_operations_to_continue: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back',
          className: 'header--core-grey',
          variant: 'primary-alt'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-operations-list-group',
        tagSpherica: 'glomo-operations-list-group-spherica',
        properties: {
          gridColumns: 3,
          className: 'custom-list',
          operationListClass: 'fund-contracted-detail',
          customClass: 'custom-items-list',
          cellsConnections: {
            in: {
              operationals_operation_list: {
                bind: 'operationLists'
              }
            },
            out: {
              navigation_favorite_section_to_transfer: {
                bind: 'navigation-favorite-section-to-transfer'
              },
              navigation_account_section_to_transfer: {
                bind: 'navigation-account-section-to-transfer'
              },
              navigation_card_section_to_transfer: {
                bind: 'navigation-card-section-to-transfer'
              },
              navigation_favorite_section_to_opportunities: {
                bind: 'navigation-favorite-section-to-opportunities',
                analytics: OPERATIVES.get_internal_link(LITERALS.featureFlag.opportunities, LITERALS.commons.headerOportunity)
              },
              navigation_favorite_section_to_mobile_transfer: {
                bind: 'navigation-favorite-section-to-mobile-transfer',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.cardlessWithdrawal, LITERALS.commons.global_position, LITERALS.commons.cardlessWithdrawal, LITERALS.commons.withdrawalWithoutCard, LITERALS.commons.account)
              },
              navigation_account_section_to_mobile_transfer: {
                bind: 'navigation-account-section-to-mobile-transfer',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.cardlessWithdrawal, LITERALS.commons.newOperationsAccounts, LITERALS.commons.cardlessWithdrawal, LITERALS.commons.withdrawalWithoutCard, LITERALS.commons.account)
              },
              navigation_account_section_to_credit_card_debt_payment: {
                bind: 'navigation-account-section-to-credit-card-debt-payment',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.creditCardPayments, LITERALS.commons.newOperationsAccounts, LITERALS.operative.creditCardPayments, LITERALS.commons.payCard, LITERALS.commons.account)
              },
              navigation_card_section_to_credit_card_debt_payment: {
                bind: 'navigation-card-section-to-credit-card-debt-payment',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.creditCardPayment, LITERALS.commons.newOperationsCards, LITERALS.operative.creditCardPayments, LITERALS.commons.payCard, LITERALS.commons.cards)
              },
              navigation_account_section_to_service_payment: {
                bind: 'navigation-account-section-to-service-payment',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.billPayments, LITERALS.commons.newOperationsAccounts, LITERALS.operative.billPayments, LITERALS.commons.payService, LITERALS.commons.account)
              },
              navigation_account_section_to_mobile_top_up: {
                bind: 'navigation-account-section-to-mobile-top-up',
                analytics: OPERATIVES.get_internal_link(LITERALS.featureFlag.mobileTopUp, LITERALS.commons.refillsAndPackages)
              },
              navigation_account_section_to_international_transfers: {
                bind: 'navigation-account-section-to-international-transfers',
                analytics: IT_ANALYTICS.get_custom_app_on_click_start_with_feature_flag('operativa posicion global', 'posicion global')
              },
              navigation_account_section_to_qr_payment: {
                bind: 'navigation-account-section-to-qr-payment',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.qrPayment, LITERALS.commons.newOperationsAccounts, LITERALS.operative.qrPayments, LITERALS.commons.qrOperations, LITERALS.commons.account),
                link: {
                  page: 'codiQrScanner'
                }
              },
              navigation_merchant_section_to_cash_zone: {
                bind: 'navigation-merchant-section-to-cash-zone',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.cashZone, LITERALS.commons.newOperationsMerchants, LITERALS.sections.collect, LITERALS.operative.cashZone, LITERALS.commons.account)
              },
              navigation_to_operative: {
                bind: 'operation-click'
              }
            }
          }
        },
        propertiesSpherica: {
          layoutIndicators: 'list',
          listView: 'layout-list',
          customClass: '',
          className: 'list-view',
          variant: 'primary'
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        familyPath: 'glomo-cached-product-dm',
        tag: 'glomo-cached-product-dm-mx',
        properties: {
          cellsConnections: {
            in: {
              dashboard_cache_cards: {
                bind: 'addCachedCards'
              }
            },
            out: {
              global_dashboard_cards: {
                bind: 'dashboard-cached-cards'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-operative-selector-manager-mx',
        familyPath: 'glomo-operative-selector-manager',
        properties: {
          appSettingsDataOperationals: OPERATIONALS.appSettingsData,
          appSettingsDataOperationalsMinior: OPERATIONALS.appSettingsDataMinior,
          operationalsIcons: isSpherica ? OPERATIONALS.operationalsIconsSpherica : OPERATIONALS.operationalsIcons,
          conditionsForOperational: isSpherica ? OPERATIONALS.conditionsForOperationalSpherica : OPERATIONALS.conditionsForOperational,
          projectNameGlomo: OPERATIVES.bindLiterals.PROJECT_NAME_GLOMO,
          projectNameGlomoAlwaysOn: OPERATIVES.bindLiterals.PROJECT_NAME_GLOMO_ALWAYSON,
          standInFeatureFlags: {
            transfer: ['glomo.standin.transfers.alwaysOn', 'glomo.standin.transfers.internal']
          },
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              global_feature_stand_in_status: {
                bind: 'standInMode'
              },
              global_dimo_transfer_enable: {
                bind: 'dimoTransferFeature'
              },
              frequen_global_feature_flag_collection_updated_refresh: {
                bind: 'frequentOperations'
              },
              global_storage_get_app_settings_success: {
                bind: 'appSettingsData'
              },
              operationals_init_page: {
                bind: 'sendOperationalsData'
              },
              navigation_to_operative: {
                bind: 'operationalsNavigateTo'
              },
              dashboard_accounts: {
                bind: 'accountsContracts'
              },
              global_dashboard_cards: {
                bind: 'cardsContracts'
              },
              global_feature_flag_select_operations: {
                bind: 'appSettingsData'
              },
              global_feature_flag_select_operations_minior: {
                bind: 'appSettingsDataMinior'
              },
              global_show_feature_flag_select_operations: {
                bind: 'appSettingsDataLocal'
              },
              navigation_favorite_section_to_transfer: {
                bind: 'onClickStartFavoriteSectionTransfer'
              },
              navigation_account_section_to_transfer: {
                bind: 'onClickStartAccountSectionTransfer'
              },
              navigation_card_section_to_transfer: {
                bind: 'onClickStartCardSectionTransfer'
              },
              flag_minior_account: {
                bind: 'isGlomoMiniorAccount'
              },
              flag_parent_account: {
                bind: 'isGlomoParentAccount'
              },
              global_storage_get_mercurioMPOS_success: {
                bind: 'retrievedStoredMercurioMposData'
              },
              global_feature_flag_activated_to_operationals_page: {
                bind: 'operationalsPage'
              },
              global_feature_flag_deactivate_to_operationals_page: {
                bind: 'operationalsPage'
              },
              hide_old_dashboard: {
                bind: 'homeNoSuggested'
              }
            },
            out: {
              operationals_operation_list: {
                bind: 'operation-list'
              },
              select_operation_navigate_to_operationals: {
                bind: 'navigate-to-operationals',
                link: {
                  page: {
                    bind: 'page'
                  }
                }
              },
              global_get_from_storage: {
                bind: 'glomo-operative-selector-manager-mx-get-native-local-storage'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-modal'
              },
              international_transfers_selector_modal: {
                bind: 'more-than-one-level-four-account',
                link: {
                  page: 'internationalTransfersPanel'
                }
              },
              analytics_page_view: {
                bind: 'international-tranfers-account-level-up',
                analytics: ITH_ANALYTICS.get_custom_page_view_with_feature_flag(LITERALS.commons.upLevelAccount)
              },
              analitycs_click_start_favorite_section_transfer: {
                bind: 'app-click-start-transfers-favorite-section',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.transfer, LITERALS.commons.global_position, LITERALS.operative.transfers, LITERALS.commons.transfers, LITERALS.commons.account)
              },
              analitycs_click_start_account_section_transfer: {
                bind: 'app-click-start-transfers-account-section',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.transfer, LITERALS.commons.newOperationsAccounts, LITERALS.operative.transfers, LITERALS.commons.transfers, LITERALS.commons.account)
              },
              analitycs_click_start_card_section_transfer: {
                bind: 'app-click-start-transfers-card-section',
                analytics: OPERATIVES.get_onclick_start(LITERALS.featureFlag.transfer, LITERALS.commons.newOperationsCards, LITERALS.operative.transfers, LITERALS.commons.transfers, LITERALS.commons.cards)
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica: isSpherica,
          newCellsConnections: {
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'open-modal'
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
        tag: 'bbva-widget-intelligent-frequent-operations',
        familyPath: '@glomo-web-components/bbva-widget-intelligent-frequent-operations',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'frequentOperationFlags'
              }
            },
            out: {
              frequen_global_feature_flag_collection_updated_refresh: {
                bind: 'frequent-operations-refresh-flags'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-controller-bill-payments-home',
        familyPath: '@glomo-web-components/bbva-controller-bill-payments-home',
        render: 'litElement',
        properties: {
          operationalsPage: OPERATIONALS.operationalsPage,
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'updatedPaymentsFlags'
              }
            },
            out: {
              global_feature_flag_activated_to_operationals_page: {
                bind: 'bbva-controller-bill-payments-home-activated-bill-payments-home'
              },
              global_feature_flag_deactivate_to_operationals_page: {
                bind: 'bbva-controller-bill-payments-home-deactivate-bill-payments-home'
              },
              global_feature_flag_activated_bill_payments_home_arcus: {
                bind: 'bbva-controller-bill-payments-home-activate-bill-payments-home-arcus'
              },
              global_feature_flag_deactivate_bill_payments_home_arcus: {
                bind: 'bbva-controller-bill-payments-home-deactivate-bill-payments-home-arcus'
              },
              global_feature_flag_activated_scheduled_bill_payments: {
                bind: 'bbva-controller-bill-payments-home-activate-scheduled-bill-payments'
              },
              global_feature_flag_deactivate_scheduled_bill_payments: {
                bind: 'bbva-controller-bill-payments-home-deactivate-scheduled-bill-payments'
              },
              global_feature_flag_services: {
                bind: 'bbva-controller-bill-payments-home-set-bill-payments-home-services'
              },
              global_feature_flag_activated_bill_taxes: {
                bind: 'bbva-controller-bill-payments-home-activate-bill-taxes'
              },
              global_feature_flag_deactivate_bill_taxes: {
                bind: 'bbva-controller-bill-payments-home-deactivate-bill-taxes'
              },
              global_feature_flag_activated_bill_payments_dashboard: {
                bind: 'bbva-controller-bill-payments-home-activate-bill-payments-dashboard'
              },
              global_feature_flag_deactivate_bill_payments_dashboard: {
                bind: 'bbva-controller-bill-payments-home-deactivate-bill-payments-dashboard'
              }
            }
          }
        }
      }
    ]
  };
  addOutStorageChannels(base.components, [ 'mercurioMPOS' ], CONFIG);
  const featureFlagManager = CROSS_COMPONENTS.featureFlagManager();
  base.components.push(featureFlagManager);

  return sphericaPageUtils.spherize(base);
};
