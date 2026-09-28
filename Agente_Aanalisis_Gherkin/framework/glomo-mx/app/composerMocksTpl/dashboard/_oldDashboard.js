'use strict';

/*eslint max-statements: ["error", 200]*/
/*eslint complexity: ["error", 100]*/
module.exports = (CONFIG) => {
  const {
    financialOverviewMocked: mocked = false,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        standInFinancialOverview: standInFinancialOverviewApiVersion,
        showSticker = false,
        devices: devicesApiVersion,
        businessCryptography: businessCryptographyApiVersion,
        accounts: accountsApiVersion,
        privateBankingPortfolios: privatePortafoliosApiVersion,
        pfm: pfmApiVersion,
        vehicleInsurances: vehicleInsurancesApiVersion,
        accountsV1,
        listEvidences: evidencesApiVersion
      },
      aapTargetAuthentication: aapTarget,
      tenantGlobalConfig: {
        TargetIdUniqueKey: targetIdUniqueKey
      }
    },
    native = false,
    nativeIos = false,
    phoneNumberBBVALine: assistancePhone,
    appVersion
  } = CONFIG;

  const pageName = 'dashboard';
  const utils = require('../common/helpers/_utils');
  const literals = require('../analytics/common/_literals');
  const addCommonErrors = require('../common/commonErrors/_dm-common-errors');
  const language = utils.getLanguage();
  const { dashboardProductsActive: DASHBOARD, productsConfig, checkUpgradableAccounts } = require('./_products');
  const { offersManager } = require('../common/_cross-components');
  const localCurrency = utils.getLocalCurrency();
  const visibleChars = utils.getVisibleChars(CONFIG);
  const spinner = utils.createSpinner(CONFIG);
  const { _onClickStart } = require('../analytics/_requestMoney')();
  const permissionsKey = nativeIos ? 'push-notification' : 'post-notifications';
  const pfmConstants = require('../pfm/_constants');
  const analytics = {
    INVESTMENTS: require('../analytics/_investmentsFollowUp')(),
    OPERATIVES: require('../analytics/_operationals')(CONFIG),
    PFM: require('../analytics/_pfm')(CONFIG),
    NOTIFICATIONS: require('../analytics/_notifications')(CONFIG),
    DEPOSITS: require('../analytics/_deposits')(CONFIG),
    OC_ACCESS: require('../analytics/_ocAccess')(),
    EXPERIENCES_SECTION: require('../analytics/_experiencesSection')(),
    ALWAYS_ON: require('../analytics/_standInAlwaysOn')(),
    FREQUENT_OPERATIONS: require('../analytics/_frequentOperations')(),
    OC_ACCOUNT: require('../analytics/_ocAccount'),
    EXPENSES_GROUP: require('../analytics/_expensesGroup')()
  };
  const analyticsDashboardReward = require('../analytics/_reward')(CONFIG);
  const appFooterDeviceController = utils.appFooterDeviceController(CONFIG, analytics.PFM);
  const ocAccess = require('../common/_ocAccess')(CONFIG, pageName);
  const menuOptions = utils.getFooterMenuOptions();
  const sphericaPageUtils = require('../common/helpers/_spherica')(CONFIG, pageName);
  const zoneVariant = sphericaPageUtils.isSpherica() ? 'oldDashboard' : 'dashboard_header.inside';
  const productsListClass = (PRODUCT) => ({
    accounts: 'one-line-header enable-amount-negative',
    cards: 'one-line-header enable-primary-amount-negative fixed-card-overlay-image-angle',
    equity: 'one-line-header-masked-amount',
    loans: 'one-line-header',
    deposits: 'one-line-header',
    funds: 'one-line-header-masked-amount',
    unitlinked: 'one-line-header-masked-amount',
    insurances: 'one-line-header',
    investments: 'one-line-header one-card',
    financing: 'one-line-header',
    btrader: 'one-line-header-masked-amount'
  }[PRODUCT] || '');

  /**
   * Changes channels for each product family that needs to be cached.
   * If a productType is cacheable, data passes throught the cache component and after that, passes to the UI component
   */
  const changeChannelsToCacheProducts = (component) => {
    Object.keys(productsConfig).forEach(item => {
      const productType = productsConfig[item];
      if (productType.cached) {
        if (item === 'cards') {
          delete component.properties.cellsConnections.out[`global_dashboard_${ item }`];
        }
        delete component.properties.cellsConnections.out[`dashboard_${ item }`];
        component.properties.cellsConnections.out[`dashboard_cache_${ item }`] = { bind: `${ item }-fetched` };
      }
    });
  };

  const toastSnackBar = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-bottom-modal-message',
    tagSpherica: 'cells-bottom-modal-spherica',
    properties: {
      className: 'success-with-icon',
      type: 'success',
      autoHide: true,
      fullHeight: false,
      time: 3000,
      message: 'feedback-toast-success-message',
      messageDisabled: true,
      icon: 'coronita:correct',
      iconSize: 22,
      cellsConnections: {
        in: {
          show_toast_success_feedback: {
            bind: 'open'
          },
          info_succes_register: {
            bind: 'showToast'
          },
          info_error_register_touch_id: {
            bind: 'showToast'
          },
          info_error_register_face_id: {
            bind: 'showToast'
          },
          dashboard_show_toast_success_notifications_settings: {
            bind: 'open'
          }
        }
      }
    }
  };

  const componentsOldDashboard = [
    {
      zone: 'oldDashboardHeader',
      type: 'UI',
      tag: 'bbva-notification-status',
      familyPath: '@bbva-web-components/bbva-notification-status',
      render: 'litElement',
      properties: {
        status: 'warning',
        text: 'glomo-dashboard-banner-status-text',
        hide: true,
        cellsConnections: {
          in: {
            dashboard_hide_stand_in_status_notification: {
              bind: 'hide'
            }
          }
        }
      }
    },
    spinner,
    {
      zone: zoneVariant,
      type: 'UI',
      tag: 'cells-operations-list-indicators',
      tagSpherica: 'cells-operations-list-indicators-spherica',
      properties: {
        className: 'transparent_colour',
        customClass: 'dashboard-operatives remove-word-spaces-grid-1',
        limit: 4,
        loaded: true,
        cellsConnections: {
          in: {
            dashboard_set_operationals_list: {
              bind: 'operations'
            },
            dashboard_set_operationals_list_minor: {
              bind: 'operations'
            },
            dashboard_update_monoproduct_user: {
              bind: 'isMonoproductUser'
            }
          },
          out: {
            app_on_click_start_transfer: {
              bind: 'navigate-dashboard-to-transfer'
            },
            navigate_dashboard_to_transfer: {
              bind: 'navigate-dashboard-to-transfer',
              link: {
                page: 'transfers',
                params: {
                  continue: 'continue'
                }
              }
            },
            navigate_dashboard_to_opportunities: {
              bind: 'navigate-dashboard-to-opportunities',
              link: {
                page: 'contractProductSection'
              },
              analytics: analytics.OPERATIVES.get_internal_link(literals.featureFlag.headerOpportunities, literals.commons.headerOportunity)
            },
            navigation_product_detail_to_cardless_withdrawal: {
              bind: 'navigation-product-to-cardless-withdrawal',
              link: {
                page: 'cardlessWithdrawal',
                params: {
                  continue: 'continue'
                }
              }
            },
            navigation_product_detail_to_transfer: {
              bind: 'navigation-to-transfer',
              link: {
                page: 'transfers',
                params: {
                  continue: 'continue'
                }
              }
            },
            navigate_dashboard_to_cardles_withdraw: {
              bind: 'navigate-dashboard-to-cardless-withdraw',
              link: {
                page: 'cardlessWithdrawal'
              },
              analytics: analytics.OPERATIVES.get_onclick_start(literals.featureFlag.cardlessWithdrawal, literals.commons.global_position, literals.operative.cardlessWithdrawal, literals.commons.withdrawalWithoutCard, literals.commons.account)
            },
            navigate_dashboard_to_operationals: {
              bind: 'navigate-dashboard-to-operationals',
              link: {
                page: 'operationals'
              }
            },
            navigate_dashboard_to_invitation_non_account_link: {
              bind: 'invitation-non-account-link',
              link: {
                page: 'invitationNonAccountClient'
              }
            },
            navigate_dashboard_to_stand_in_modals: {
              bind: 'operation-click'
            },
            navigation_product_detail_to_transfer_stand_in: {
              bind: 'navigate-dashboard-to-transfer-stand-in',
              analytics: analytics.ALWAYS_ON.standInOperatives('', 'TRANSFER')
            },
            navigate_dashboard_to_opportunities_stand_in: {
              bind: 'navigate-dashboard-to-opportunities-stand-in',
              analytics: analytics.ALWAYS_ON.standInOperatives('', 'OPPORTUNITIES')
            },
            navigate_dashboard_to_cardles_withdraw_stand_in: {
              bind: 'navigate-dashboard-to-cardless-withdraw-stand-in',
              analytics: analytics.ALWAYS_ON.standInOperatives('', 'CARDLESS_WITHDRAW')
            },
            navigate_dashboard_to_operationals_stand_in: {
              bind: 'navigate-dashboard-to-operationals-stand-in',
              analytics: analytics.ALWAYS_ON.standInOperatives('', 'VIEW_MORE')
            },
            navigate_dashboard_to_request_money: {
              bind: 'navigate-dashboard-to-request-money',
              analytics: _onClickStart('global'),
              link: {
                page: 'requestMoney',
                params: {
                  continue: 'continue'
                }
              }
            }
          }
        }
      },
      propertiesSpherica: {
        className: 'list-start'
      }
    },
    {
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'glomo-incomes-expenses-summary-card',
      tagSpherica: 'glomo-incomes-expenses-summary-card-spherica',
      container: true,
      properties: {
        showOperationals: true,
        ariaHiddenHeader: true,
        ariaHidden: false,
        language,
        shortFirstName: true,
        greetingAsTitle: true,
        hideAnimationLandscape: true,
        currencyCode: localCurrency,
        localCurrency,
        showLinkTitleInHeader: true,
        hideFooterLink: true,
        defaultImage: '',
        headerSecundaryIcon: 'coronita:help',
        id: 'dashboard_header',
        headerIcon: 'coronita:menu',
        greetingKey: 'cells-molecule-header-greating-key',
        headerSecondaryIcon: 'coronita:help',
        cellsConnections: {
          in: {
            global_feature_stand_in_status: {
              bind: 'showSubHeader'
            },
            set_header_color: {
              bind: 'setColorClass'
            },
            dashboard_set_status_discreet_mode_icon_header: {
              bind: 'headerLeftIcon'
            },
            dashboard_set_operationals_list: {
              bind: 'recalculateHeader'
            },
            set_dashboard_greeting_header: {
              bind: 'greetingKey'
            },
            ch_default_pfm_profile_data: {
              bind: 'data'
            },
            dashboard_default_pfm_profile_initialization_failed: {
              bind: 'initializeData'
            },
            dashboard_pfm_data_retry: {
              bind: 'reset'
            },
            set_dashboard_background_image: {
              bind: 'image'
            },
            set_dashboard_background_color: {
              bind: 'colorBackground'
            },
            dashboard_stand_in_pfm_status: {
              bind: 'pfmActive'
            },
            ch_init_services_pfm_profiles: {
              bind: 'loading'
            },
            ch_dashboard_show_incomes_expenses_error: {
              bind: 'initializeData'
            },
            ch_dashoboard_profile_progress_bar_errors: {
              bind: 'setProperties'
            },
            tdde_monoproduct_carousel_and_icon: {
              bind: 'headerSecundaryIcon'
            },
            dashboard_recalculate_incomes: {
              bind: 'recalculateHeader'
            },
            dasboard_standin_set_headers: {
              bind: 'greetingKey'
            },
            dashboard_hide_expenses_summary_card: {
              bind: 'pfmActive'
            }
          },
          out: {
            dashboard_pfm_data_retry: {
              bind: 'cells-progress-bar-comparator-retry-click'
            },
            navigate_dashboard_to_pfm_dashboard: {
              bind: 'cells-progress-bar-comparator-link-click',
              analytics: analytics.PFM.DASHBOARD_VIEW_MORE_INTERNAL_EVENT,
              link: {
                page: 'pfmDashboardDetail'
              }
            },
            show_skeleton_income_expenses_card: {
              bind: 'show-skeleton-income-expenses-card'
            },
            show_operationals_income_expenses_card: {
              bind: 'show-operationals-income-expenses-card'
            },
            show_income_expenses_card: {
              bind: 'show-income-expenses-card'
            },
            ch_dashboard_progress_bar_error_retry: {
              bind: 'cells-progress-bar-comparator-retry-click'
            },
            dashboard_click_left_button_header: {
              bind: 'click-left-button'
            }
          },
          params: {
            user: 'global_user'
          }
        }
      }
    },
    {
      zone: 'dashboard_header.subHeaderBanner',
      type: 'UI',
      tag: 'bbva-notification-status',
      render: 'litElement',
      familyPath: '@bbva-web-components/bbva-notification-status',
      properties: {
        status: 'warning',
        text: 'glomo-dashboard-banner-status-text',
        hide: true,
        cellsConnections: {
          in: {
            dashboard_hide_stand_in_status_notification: {
              bind: 'hide'
            }
          }
        }
      }
    },
    {
      zone: 'oldDashboard',
      tag: 'cells-notifications',
      tagSpherica: 'cells-notifications-spherica',
      type: 'UI',
      properties: {
        hiddenNotification: true,
        changeLinkForButton: true,
        cellsConnections: {
          in: {
            set_dasboard_notifications_card: {
              bind: 'setProperties'
            },
            set_dasboard_notifications_card_stand_in: {
              bind: 'setProperties'
            },
            dashboard_open_notification: {
              bind: 'open'
            },
            dashboard_open_notification_stand_in: {
              bind: 'open'
            },
            dashboard_close_notification: {
              bind: 'close'
            },
            dashboard_hide_notification: {
              bind: 'close'
            },
            dashboard_close_stand_in_notification: {
              bind: 'close'
            }
          },
          out: {
            close_notification_clicked: {
              bind: 'notification-button-clicked'
            },
            link_notification_navigation_page: {
              bind: 'notification-link-clicked'
            },
            link_notification_clicked: {
              bind: 'notification-link-clicked'
            }
          }
        }
      },
      propertiesSpherica: {
        notMediaStyles: true
      }
    },
    {
      zone: 'app__transactional',
      type: 'CC',
      tag: 'glomo-footer-manager',
      properties: {
        pages: menuOptions.items,
        cellsConnections: {
          in: {
            __bridge_app: {
              bind: 'validateStandinItems'
            },
            global_feature_stand_in_status: {
              bind: 'standIn'
            }
          },
          out: {
            dashboard_set_footer: {
              bind: 'send-footer-items'
            }
          }
        }
      }
    },
    appFooterDeviceController
  ];
  if (sphericaPageUtils.isSpherica()) {
    componentsOldDashboard.splice(3, 1);
  }
  componentsOldDashboard.push(toastSnackBar);

  //Only applies for countries with financial Overview
  const financialOverviewDm = {
    zone: 'app__main',
    type: 'CC',
    familyPath: 'glomo-financial-overview-dm',
    tag: 'glomo-financial-overview-dm-mx',
    properties: {
      mocked,
      host,
      requiredToken,
      localCurrency,
      productsConfig,
      native,
      mixedCaseAllowed: false,
      maxRequestAttempts: 3,
      requestUpgradeableAccounts: checkUpgradableAccounts,
      requestUpgradableAccountsTimeout: 4000,
      useGlobalFundContract: true,
      upgradeRestrictedAlertDueDay: 59,
      validatePayrollAccounts: false,
      standInFinancialOverviewApiVersion,
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'appSettings'
          },
          dashboard_init_page_first_time: {
            bind: 'initFacialRecognition'
          },
          facial_registration_success_post: {
            bind: 'successfulResponseMorpho'
          },
          facial_registration_success_put: {
            bind: 'successfulResponseMorpho'
          },
          facial_registration_api_post_response_error: {
            bind: 'unSuccessfulResponseMorpho'
          },
          facial_registration_api_put_response_error: {
            bind: 'unSuccessfulResponseMorpho'
          },
          facial_recognition_dashboard_success: {
            bind: 'successfulUserInteractionWithTheBiometricFlow'
          },
          global_logout_sesion_expiration: {
            bind: 'unSuccessfulUserInteractionWithTheBiometricFlow'
          },
          global_landing_page_manager_next_flow: {
            bind: 'successfulUserInteractionWithTheBiometricFlow'
          },
          navigation_facial_back_step: {
            bind: 'successfulUserInteractionWithTheBiometricFlow'
          },
          global_set_financial_overview_params: {
            bind: 'params'
          },
          send_products_config: {
            bind: 'productsConfig'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          notification_manager_financial_overview: {
            bind: 'getFinancialOverview'
          },
          global_insurance_is_active: {
            bind: 'getFinancialOverview'
          },
          global_insurance_is_inactive: {
            bind: 'getFinancialOverview'
          },
          financial_overview_refresh: {
            bind: 'getFinancialOverview'
          },
          dashboard_accounts_refresh: {
            bind: 'getFinancialOverview'
          },
          dashboard_cards_refresh: {
            bind: 'getFinancialOverview'
          },
          dashboard_deposits_refresh: {
            bind: 'getFinancialOverview'
          },
          dashboard_funds_refresh: {
            bind: 'getFinancialOverview'
          },
          dashboard_loans_refresh: {
            bind: 'getFinancialOverview'
          },
          dashboard_insurances_refresh: {
            bind: 'getFinancialOverview'
          },
          global_stand_in_headers: {
            bind: 'headersService'
          },
          dashboard_stand_in_financial_overview: {
            bind: 'getFinancialOverview'
          },
          set_initial_property_value_from_deeplink: {
            bind: 'upgradeableAccount'
          },
          global_get_accounts_documentation_dossiers_data_success: {
            bind: 'upgradeableAccount'
          },
          get_accounts_documents_dossiers_success: {
            bind: 'upgradeableAccount'
          },
          financial_overview_error: {
            bind: 'showError'
          },
          dashboard_refresh_financial_overview: {
            bind: 'refresh'
          },
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          global_financial_overview_success: {
            bind: 'parseFinancialOverviewResponse'
          },
          dashboard_financing_refresh: {
            bind: 'getFinancialOverview'
          },
          global_landing_page_manager_facial_recognition_biometric_status: {
            bind: 'showFaceRegistration'
          }
        },
        out: {
          dashboard_set_params_financial_overview_params: {
            bind: 'set-params-financial-overview-v1'
          },
          global_set_in_storage: {
            bind: 'set-local-storage'
          },
          dashboard_financial_overview: {
            bind: 'financial-overview-changed'
          },
          dashboard_set_operationals: {
            bind: 'financial-overview-response'
          },
          dashboard_financial_overview_request_attempts: {
            bind: 'pending-request-attempts'
          },
          dashboard_financial_overview_max_requests_reached: {
            bind: 'max-requests-reached'
          },
          dashboard_accounts_from_financial: {
            bind: 'accounts-fetched'
          },
          global_dashboard_cards: {
            bind: 'cards-fetched'
          },
          dashboard_deposits: {
            bind: 'deposits-fetched'
          },
          dashboard_loans: {
            bind: 'loans-fetched'
          },
          dashboard_funds: {
            bind: 'funds-fetched'
          },
          dashboard_insurances: {
            bind: 'insurances-fetched'
          },
          dashboard_equity: {
            bind: 'equity-fetched'
          },
          dashboard_btrader: {
            bind: 'btrader-fetched'
          },
          dashboard_investments: {
            bind: 'investments-fetched'
          },
          dashboard_unitlinked: {
            bind: 'unitlinked-fetched'
          },
          financial_overview_error: {
            bind: 'error-on-get-financial-overview'
          },
          financial_overview_error_mx: {
            bind: 'error-on-get-financial-overview-mx'
          },
          financial_overview_biometrics_mx: {
            bind: 'biometrics-on-get-financial-overview-mx'
          },
          global_financial_overview_generic_error: {
            bind: 'error-on-get-financial-overview'
          },
          global_financial_overview_success: {
            bind: 'financial-overview-retrieved'
          },
          global_financial_overview_details: {
            bind: 'financial-overview-response'
          },
          global_get_accounts_documentation_dossiers: {
            bind: 'request-upgradeable-accounts'
          },
          global_get_accounts_documents_dossiers: {
            bind: 'request-upgradeable-accounts-documents-dossiers'
          },
          global_account_documents_dossiers_data: {
            bind: 'send-account-documents-dossiers-data'
          },
          dashboard_list_products: {
            bind: 'parsed-financial-overview'
          },
          dashboard_list_virtual_contracts: {
            bind: 'list-virtual-contracts'
          },
          global_dashboard_cards_to_landing: {
            bind: 'cards-fetched'
          },
          global_dashboard_cards_for_deeplink: {
            bind: 'cards-fetched'
          },
          dashboard_financing: {
            bind: 'financing-fetched'
          },
          facial_recognition_biometrics_code: {
            bind: 'biometrics-code-financial-overview'
          },
          hide_dashboard_footer: {
            bind: 'hide-dashboard-footer'
          }
        }
      }
    }
  };

  componentsOldDashboard.push(
    {
      zone: 'app__main_overlay',
      type: 'UI',
      tag: 'cells-aggregation-error',
      properties: {
        hidden: true,
        heroImage: './images/errors/error.svg',
        cellsConnections: {
          in: {
            dashboard_show_error_information_not_available: {
              bind: 'show'
            },
            financial_overview_refresh: {
              bind: 'hide'
            },
            dashboard_show_error_max_request: {
              bind: 'setProperties'
            }
          },
          out: {
            financial_overview_refresh: {
              bind: 'button-clicked'
            },
            global_manage_feedback_logout: {
              bind: 'button-clicked-error-max-requests'
            }
          }
        }
      }
    },
    {
      zone: 'oldDashboard',
      type: 'DM',
      familyPath: 'glomo-cached-product-dm',
      tag: 'glomo-cached-product-dm-mx',
      properties: {
        cellsConnections: {
          in: {
            dashboard_cache_accounts: {
              bind: 'addCachedAccounts'
            },
            dashboard_cache_cards: {
              bind: 'addCachedCards'
            },
            dashboard_cache_deposits: {
              bind: 'addCachedDeposits'
            },
            dashboard_cache_loans: {
              bind: 'addCachedLoans'
            },
            dashboard_cache_funds: {
              bind: 'addCachedFunds'
            },
            dashboard_cache_equity: {
              bind: 'addCachedEquity'
            },
            dashboard_cache_btrader: {
              bind: 'addCachedBtrader'
            },
            dashboard_cache_unitlinked: {
              bind: 'addCachedUnitlinked'
            },
            dashboard_cache_insurances: {
              bind: 'addCachedInsurances'
            },
            dashboard_cache_financing: {
              bind: 'addCachedFinancing'
            }
          },
          out: {
            dashboard_accounts: {
              bind: 'dashboard-cached-accounts'
            },
            global_dashboard_cards: {
              bind: 'dashboard-cached-cards'
            },
            dashboard_deposits: {
              bind: 'dashboard-cached-deposits'
            },
            dashboard_loans: {
              bind: 'dashboard-cached-loans'
            },
            dashboard_funds: {
              bind: 'dashboard-cached-funds'
            },
            dashboard_equity: {
              bind: 'dashboard-cached-equity'
            },
            dashboard_btrader: {
              bind: 'dashboard-cached-btrader'
            },
            dashboard_unitlinked: {
              bind: 'dashboard-cached-unitlinked'
            },
            dashboard_insurances: {
              bind: 'dashboard-cached-insurances'
            },
            dashboard_financing: {
              bind: 'dashboard-cached-financing'
            }
          }
        }
      }
    });

  changeChannelsToCacheProducts(financialOverviewDm);

  componentsOldDashboard.push(financialOverviewDm);

  componentsOldDashboard.push({
    zone: 'oldDashboard',
    type: 'UI',
    tag: 'cells-oc-banner',
    tagSpherica: 'cells-oc-banner-spherica',
    properties: {
      id: 'deviceAccesesCard',
      className: 'banner banner--product banner-info-card',
      showDaysLeft: false,
      animated: true,
      closeAutomatically: true
    }
  });

  if (DASHBOARD.accounts) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      properties: {
        localCurrency,
        visibleChars: visibleChars('account'),
        notifyEvent: 'account-item-tap',
        statusOverlay: 'operative',
        id: 'skeleton1',
        statusIcons: {
          locked: 'coronita:block',
          activate: 'coronita:clock',
          off: 'coronita:on'
        },
        className: productsListClass('accounts'),
        classBlockedGray: true,
        statusDescriptionBelow: false,
        errorHeaderKey: 'cells-global-dashboard-accounts-short-currency-header',
        defaultImage: './images/cards/cardFrontDefault.png',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_accounts_dashboard_manager: {
              bind: 'productsList'
            },
            global_dashboard_cards: {
              bind: 'additionalProductsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_accounts_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            },
            global_feature_flag_pfm_value: {
              bind: 'showLinkBottom'
            }
          },
          out: {
            dashboard_accounts_refresh: {
              bind: 'refresh-products-list'
            },
            global_dashboard_set_related_cards: {
              bind: 'related-additional-list'
            },
            navigation_accounts_channel: {
              bind: 'account-item-tap',
              link: {
                page: 'account',
                params: {
                  productId: 'productId'
                }
              }
            },
            navigation_meta_accounts_channel: {
              bind: 'meta-account-item-tap',
              link: {
                page: 'goals',
                params: {
                  productId: 'productId'
                }
              }
            },
            navigation_debit_cards_channel: {
              bind: 'card-item-tap',
              link: {
                page: 'cardDetail',
                params: {
                  productId: 'productId'
                }
              }
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            },
            global_product_link_bottom_clicked: {
              bind: 'product-link-bottom-clicked',
              link: {
                page: 'pfmDashboardDetail'
              },
              analytics: analytics.PFM.createInternalLink('click en ver gastos e ingresos', true)
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  componentsOldDashboard.push(ocAccess());

  if (DASHBOARD.cards) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      properties: {
        localCurrency,
        notifyEvent: 'card-item-tap',
        visibleChars: visibleChars('card'),
        statusOverlay: 'operative',
        statusDescriptionBelow: true,
        nameOneLine: true,
        showSticker,
        statusIcons: {
          locked: 'coronita:block',
          activate: 'coronita:clock',
          off: 'coronita:on'
        },
        id: 'skeleton2',
        className: productsListClass('cards'),
        defaultImage: './images/cards/cardFrontDefault.png',
        errorHeaderKey: 'cells-global-dashboard-cards-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            global_dashboard_cards: {
              bind: 'productsList'
            },
            dashboard_accounts: {
              bind: 'additionalProductsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_cards_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            reset_notify_event_product_list: {
              bind: 'notifyEvent'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_cards_refresh: {
              bind: 'refresh-products-list'
            },
            global_dashboard_set_related_accounts: {
              bind: 'related-additional-list'
            },
            navigation_cards_channel: {
              bind: 'card-item-tap',
              link: {
                page: 'cardDetail',
                params: {
                  productId: 'productId',
                  billingPeriod: 'billingPeriod'
                }
              }
            },
            navigation_credit_cards_channel: {
              bind: 'credit-card-item-tap',
              link: {
                page: 'cardDetail',
                params: {
                  productId: 'productId'
                }
              }
            },
            navigation_debit_cards_channel: {
              bind: 'debit-card-item-tap',
              link: {
                page: 'cardDetail',
                params: {
                  productId: 'productId'
                }
              }
            },
            additional_credit_card_detail: {
              bind: 'additional-credit-card-item-tap'
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  componentsOldDashboard.push({
    zone: 'oldDashboard',
    type: 'UI',
    tag: 'dashboard-rewards',
    familyPath: '@bbva-web-components-widgets/dashboard-rewards',
    render: 'litElement',
    featureFlag: {
      key: 'glomo.dashboard.rewards',
      defaultValue: true
    },
    properties: {
      host,
      native,
      requiredToken,
      language,
      currencyCode: localCurrency,
      rewardsDescription: 'dashboard-rewards-text-description',
      assistancePhone,
      avoidRequestBalance: true,
      cellsConnections: {
        in: {
          global_dashboard_init_services: {
            bind: 'getContent'
          },
          global_dashboard_stand_in_services: {
            bind: 'hidden'
          },
          financial_overview_error: {
            bind: 'setDashboardContentError'
          },
          global_financial_overview_details: {
            bind: 'setDashboardContentSuccess'
          },
          financial_overview_refresh: {
            bind: 'getContent'
          },
          account_is_tdde_monoproduct: {
            bind: 'hidden'
          },
          dashboard_update_monoproduct_user: {
            bind: 'hidden'
          },
          flag_minior_account: {
            bind: 'hidden'
          },
          dashboard_rewards_hidden: {
            bind: 'hidden'
          },
          dashboard_points_balances: {
            bind: 'pointsBalances'
          }
        },
        out: {
          dashboard_rewards_navigate_to_rewards: {
            bind: 'dashboard-rewards-click',
            analytics: analyticsDashboardReward.clickDashboardBanner,
            link: {
              page: 'reward'
            }
          },
          dashboard_rewards_balances_max_attempts: {
            bind: 'dashboard-rewards-balances-max-attempts'
          },
          dashboard_rewards_balance_service_success: {
            bind: 'dashboard-rewards-balance-service-success'
          },
          dashboard_rewards_balance_service_error: {
            bind: 'dashboard-rewards-balance-service-error'
          }
        }
      }
    }
  });

  if (DASHBOARD.equity) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      id: 'equity-products-list',
      properties: {
        className: productsListClass('equity'),
        locale: language,
        localCurrency,
        visibleChars: visibleChars('equity'),
        notifyEvent: 'equity-item-tap',
        id: 'skeleton3',
        errorHeaderKey: 'cells-global-dashboard-equity-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_equity: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_equity_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_toggle_equity_show_balances: {
              bind: 'toggleMaskedAmount'
            },
            global_get_equity_private_portfolios_data_error: {
              bind: 'showAlertError'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_equity_refresh: {
              bind: 'refresh-products-list'
            },
            navigation_equity_channel: {
              bind: 'equity-item-tap',
              link: {
                page: 'equity',
                params: {
                  productId: 'productId'
                }
              }
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            },
            global_show_equity_balances: {
              bind: 'show-balances'
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  if (DASHBOARD.btrader) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      id: 'btrader-products-list',
      properties: {
        className: productsListClass('btrader'),
        locale: language,
        localCurrency,
        visibleChars: visibleChars('btrader'),
        notifyEvent: 'btrader-item-tap',
        id: 'skeleton11',
        errorHeaderKey: 'cells-global-dashboard-br-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_btrader: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_btrader_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_toggle_btrader_show_balances: {
              bind: 'toggleMaskedAmount'
            },
            global_get_btrader_private_portfolios_data_error: {
              bind: 'showAlertError'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_btrader_refresh: {
              bind: 'refresh-products-list'
            },
            navigation_btrader_channel: {
              bind: 'btrader-item-tap',
              link: {
                page: 'bbvaTraderProductDetail',
                params: {
                  productId: 'productId'
                }
              }
            },
            open_control_veil: {
              bind: 'btrader-item-tap'
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            },
            global_show_btrader_balances: {
              bind: 'show-balances'
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  if (DASHBOARD.loans) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      id: 'loans-products-list',
      properties: {
        className: productsListClass('loans'),
        locale: language,
        localCurrency,
        visibleChars: visibleChars('loans'),
        notifyEvent: 'loan-item-tap',
        id: 'skeleton4',
        errorHeaderKey: 'cells-global-dashboard-loans-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_loans: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_loans_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_loans_refresh: {
              bind: 'refresh-products-list'
            },
            navigation_loans_channel: {
              bind: 'loan-item-tap',
              link: {
                page: 'loan',
                params: {
                  productId: 'productId'
                }
              }
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  if (DASHBOARD.investments) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      properties: {
        localCurrency,
        visibleChars: visibleChars('investments'),
        id: 'skeleton9',
        className: productsListClass('investments'),
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_investments: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            navigation_deposits_channel: {
              bind: 'deposit-item-tap',
              link: {
                page: 'deposit',
                params: {
                  productId: 'productId',
                  depositWithdrawalsEnabled: 'depositWithdrawalsEnabled'
                }
              },
              analytics: analytics.DEPOSITS.APP_HUELLA_DETAIL_DEPOSIT
            },
            navigation_investments_channel: {
              bind: 'fund-item-tap',
              link: {
                page: 'traditionalInvestmentFund',
                params: {
                  productId: 'productId'
                }
              }
            },
            navigation_invest_advisory_channel: {
              bind: 'invest-advisory-item-tap',
              link: {
                page: 'investAdvisoryProductDetail',
                params: {
                  productId: 'productId'
                }
              }
            },
            NAVIGATION_INVESTMENTS_FOLLOWUP_CHANNEL: {
              bind: 'go-to-follow-up',
              link: {
                page: 'investmentsFollowUp'
              },
              analytics: analytics.INVESTMENTS.INVESTMENTS_ACCESS_PAGE_VIEW
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  if (DASHBOARD.deposits) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      properties: {
        className: productsListClass('deposits'),
        localCurrency,
        visibleChars: visibleChars('deposits'),
        notifyEvent: 'deposit-item-tap',
        id: 'skeleton5',
        errorHeaderKey: 'cells-global-dashboard-deposits-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_deposits: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_deposits_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_deposits_refresh: {
              bind: 'refresh-products-list'
            },
            navigation_deposits_channel: {
              bind: 'deposit-item-tap',
              link: {
                page: 'deposit',
                params: {
                  productId: 'productId',
                  depositWithdrawalsEnabled: 'depositWithdrawalsEnabled'
                }
              },
              analytics: analytics.DEPOSITS.APP_HUELLA_DETAIL_DEPOSIT
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  if (DASHBOARD.funds) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      id: 'funds-products-list',
      properties: {
        className: productsListClass('funds'),
        localCurrency,
        visibleChars: visibleChars('fund'),
        notifyEvent: 'fund-item-tap',
        id: 'skeleton6',
        errorHeaderKey: 'cells-global-dashboard-funds-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_funds: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_funds_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_funds_refresh: {
              bind: 'refresh-products-list'
            },
            navigation_funds_channel: {
              bind: 'fund-item-tap',
              link: {
                page: 'fund',
                params: {
                  productId: 'productId'
                }
              }
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  if (DASHBOARD.unitlinked) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      id: 'unitlinked-products-list',
      properties: {
        className: productsListClass('unitlinked'),
        locale: language,
        localCurrency,
        visibleChars: visibleChars('unitlinked'),
        notifyEvent: 'unitlinked-item-tap',
        id: 'skeleton7',
        errorHeaderKey: 'cells-global-dashboard-unitlinked-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_unitlinked: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_unitlinked_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_toggle_unitlinked_show_balances: {
              bind: 'toggleMaskedAmount'
            },
            global_get_unitlinked_private_portfolios_data_error: {
              bind: 'showAlertError'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_unitlinked_refresh: {
              bind: 'refresh-products-list'
            },
            navigation_unitlinked_channel: {
              bind: 'unitlinked-item-tap',
              link: utils.addFeatureFlag('unitLinkedDetail', {
                page: 'unitLinked',
                params: {
                  productId: 'productId'
                }
              })
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            },
            global_show_unitlinked_balances: {
              bind: 'show-balances'
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  if (DASHBOARD.insurances) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      tagSpherica: 'global-products-list-spherica',
      id: 'insurances-products-list',
      properties: {
        className: productsListClass('insurances'),
        locale: language,
        localCurrency,
        visibleChars: visibleChars('insurance'),
        id: 'skeleton8',
        notifyEvent: 'insurance-item-tap',
        errorHeaderKey: 'cells-global-dashboard-insurances-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_insurances_distribute: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_insurances_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_insurances_refresh: {
              bind: 'refresh-products-list'
            },
            global_dashboard_set_related_insurances: {
              bind: 'related-additional-list'
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            },
            navigation_insurances_channel: {
              bind: 'insurance-item-tap',
              link: {
                page: 'insurance',
                params: {
                  productId: 'productId'
                }
              }
            }
          }
        }
      },
      propertiesSpherica: {
        nameStatusPosition: 'text-below-image'
      }
    });
  }

  if (DASHBOARD.financing) {
    componentsOldDashboard.push({
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'global-products-list',
      id: 'financing-products-list',
      properties: {
        className: productsListClass('financing'),
        locale: language,
        localCurrency,
        visibleChars: visibleChars('financing'),
        notifyEvent: 'financing-item-tap',
        id: 'skeleton10',
        errorHeaderKey: 'cells-global-dashboard-financing-header',
        maskedAmountNumberChars: visibleChars,
        cellsConnections: {
          in: {
            dashboard_financing: {
              bind: 'productsList'
            },
            dashboard_loaded: {
              bind: 'setLoaded'
            },
            financial_overview_error: {
              bind: 'setLoaded'
            },
            dashboard_financing_refresh: {
              bind: 'refreshingProduct'
            },
            financial_overview_refresh: {
              bind: 'refreshingProduct'
            },
            dashboard_refresh_financial_overview: {
              bind: 'reset'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'forceMaskedAmount'
            }
          },
          out: {
            dashboard_financing_refresh: {
              bind: 'refresh-products-list'
            },
            navigation_financing_channel: {
              bind: 'financing-item-tap',
              link: {
                page: 'paymentDashboardBnpl',
                params: {
                  productId: 'productId'
                }
              }
            },
            global_product_list_selected_product: {
              bind: 'selected-product'
            }
          }
        }
      }
    });
  }

  componentsOldDashboard.push(
    {
      zone: 'oldDashboard',
      type: 'DM',
      tag: 'glomo-device-accesses-notifications-controller-mx',
      familyPath: 'glomo-device-accesses-notifications-controller',
      properties: {
        host,
        requiredToken,
        devicesApiVersion,
        businessCryptographyApiVersion,
        native,
        isNativeIos: nativeIos,
        permissionsKey,
        cellsConnections: {
          in: {
            device_accesses_device_id: {
              bind: 'deviceId'
            },
            global_device_accesses_customer_id: {
              bind: 'customerId'
            },
            native_user_id: {
              bind: 'userId'
            },
            global_storage_get_notifications_success: {
              bind: 'getNotificationsResponse'
            },
            global_storage_get_notifications_error: {
              bind: 'notificationsStorageError'
            },
            global_storage_get_loginData_success: {
              bind: 'loginDataSuccessLocalStore'
            },
            global_storage_get_loginData_error: {
              bind: 'notificationsStorageError'
            },
            global_storage_get_mobile_services_success: {
              bind: 'mobileServices'
            },
            global_storage_get_mobile_services_error: {
              bind: 'mobileServices'
            },
            dashboard_init_page: {
              bind: 'getLoginDataFromLocalStorage'
            },
            global_feature_flag_collection_updated: {
              bind: 'setFeatureFlagCollection'
            },
            global_set_app_settings: {
              bind: 'setAppSettings'
            },
            global_storage_get_app_settings_success: {
              bind: 'setAppSettings'
            }
          },
          out: {
            global_device_accesses_notifications_data_controller: {
              bind: 'device-accesses-notifications-data-controller'
            },
            dashboard_device_accesses_notifications_next_flow: {
              bind: 'device-accesses-notifications-navigate-to-next-flow'
            },
            global_get_from_storage: {
              bind: 'get-native-local-storage'
            },
            global_set_in_storage: {
              bind: 'set-native-local-storage'
            },
            global_remove_from_storage: {
              bind: 'remove-native-local-storage'
            },
            global_storage_check_mobile_services: {
              bind: 'notifications-get-mobile-services'
            },
            show_settings_dialog: {
              bind: 'open-device-notifications-settings-modal',
              'forward-to-native': true
            }
          }
        }
      }
    }
  );


  const bbvaExperiencesCarousel = {
    zone: 'oldDashboard',
    type: 'UI',
    tag: 'bbva-widget-carousel-aem',
    familyPath: '@glomo-web-components/bbva-widget-carousel-aem',
    render: 'litElement',
    featureFlag: {
      key: 'glomo.dashboard.carouselAem.experiences',
      defaultValue: true
    },
    properties: {
      style: 'position:relative',
      native,
      className: 'u-margin-bottom--1',
      headerTitle: 'glomo-experiences-menu-title',
      showHeaderLink: false,
      ambient: 'dark',
      cellsConnections: {
        in: {
          global_experiences_aem_carousel_data: {
            bind: 'aemData'
          },
          global_experiences_settings_host: {
            bind: 'host'
          },
          global_experiences_aem_carousel_error: {
            bind: 'contentFragmentPath'
          }
        },
        out: {
          experiences_section_navigate_to_card_selected: {
            bind: 'carousel-aem-card-select',
            analytics: analytics.EXPERIENCES_SECTION.EXPERIENCES_SECTION_VIEW_MORE,
            link: {
              page: {
                bind: 'linkAction'
              }
            }
          }
        }
      }
    }
  };

  componentsOldDashboard.push(bbvaExperiencesCarousel);

  const bbvaExperiencesManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-experiences',
    familyPath: '@glomo-web-components/bbva-manager-experiences',
    render: 'litElement',
    properties: {
      appVersion,
      delayBetweenRetries: 500,
      native,
      isNativeIos: nativeIos,
      callAEM: true,
      cellsConnections: {
        in: {
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          },
          global_set_app_settings: {
            bind: 'spreadSettings'
          },
          global_storage_get_app_settings_success: {
            bind: 'spreadSettings'
          },
          flag_minior_account: {
            bind: 'isMinorAccount'
          }
        },
        out: {
          global_experiences_settings_host: {
            bind: 'bbva-manager-experiences-settings-host'
          },
          global_experiences_settings_path: {
            bind: 'bbva-manager-experiences-settings-path'
          },
          global_experiences_aem_carousel_data: {
            bind: 'bbva-manager-experiences-aem-data'
          },
          global_experiences_carousel_cards: {
            bind: 'bbva-manager-experiences-aem-data'
          },
          global_experiences_aem_carousel_error: {
            bind: 'bbva-manager-experiences-aem-error'
          }
        }
      }
    }
  };

  componentsOldDashboard.push(bbvaExperiencesManager);

  const dmGlobalApisAccounts = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts',
    properties: {
      host,
      accountsApiVersion,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          global_get_accounts_documentation_dossiers: {
            bind: 'getAccountsDocumentationDossiers'
          }
        },
        out: {
          global_get_accounts_documentation_dossiers_data_success: {
            bind: 'set-accounts-documentation-dossiers'
          },
          global_get_accounts_documentation_dossiers_data_error: {
            bind: 'error-on-get-accounts-documentation-dossiers'
          }
        }
      }
    }
  };

  componentsOldDashboard.push(dmGlobalApisAccounts);

  const dmGlobalApisPrivatePortafolios = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-private-banking-portfolios',
    properties: {
      host,
      privatePortafoliosApiVersion,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          global_get_equity_private_portfolios: {
            bind: 'getListPrivateBankingPortfolios'
          },
          global_get_btrader_private_portfolios: {
            bind: 'getListPrivateBankingPortfolios'
          },
          global_get_unitlinked_private_portfolios: {
            bind: 'getPrivateBankingPortfolios'
          }
        },
        out: {
          global_get_equity_private_portfolios_data_success: {
            bind: 'get-list-private-banking-portfolios-success-response'
          },
          global_get_equity_private_portfolios_data_error: {
            bind: 'error-on-get-list-private-banking-portfolios'
          },
          global_get_btrader_private_portfolios_data_error: {
            bind: 'error-on-get-list-private-banking-portfolios'
          },
          global_get_unitlinked_private_portfolios_data_success: {
            bind: 'get-private-banking-portfolios-success-response'
          },
          global_get_unitlinked_private_portfolios_data_error: {
            bind: 'error-on-get-private-banking-portfolios'
          }
        }
      }
    }
  };

  componentsOldDashboard.push(dmGlobalApisPrivatePortafolios);

  const bbvaEmergencySos = {
    zone: 'oldDashboard',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-emergency-sos',
    tag: 'bbva-manager-emergency-sos',
    render: 'litElement',
    properties: {
      hostServices: host,
      native,
      requiredToken,
      vehicleInsurancesApiVersion,
      page: pageName,
      adjuster: {
        types: [ 'PRESENCIAL' ],
        status: [ 'PRE_ASSIGNED' ]
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'handleNavigation'
          },
          dashboard_loaded: {
            bind: 'manageAdjusterTracking'
          },
          global_storage_get_losses_report_request_id_success: {
            bind: 'getFromLocalStorageSuccess'
          },
          global_storage_remove_losses_report_request_id_success: {
            bind: 'removeFromLocalStorageSuccess'
          },
          global_storage_get_losses_report_request_id_error: {
            bind: 'handleLocalStorageErrors'
          },
          global_storage_remove_losses_report_request_id_error: {
            bind: 'handleLocalStorageErrors'
          }
        },
        out: {
          emergency_tracking_reports_set_losses_report_request_id: {
            bind: 'emergency-tracking-reports-set-losses-report-request-id',
            link: {
              page: 'emergencyTrackingReports'
            }
          },
          emergency_tracking_reports_set_view_active_report: {
            bind: 'emergency-tracking-reports-set-view-active-report'
          },
          emergency_tracking_reports_set_adjuster_tracking: {
            bind: 'emergency-tracking-reports-set-adjuster-tracking'
          },
          emergency_tracking_reports_set_policy_id: {
            bind: 'emergency-tracking-reports-set-policy-id'
          },
          emergency_tracking_reports_set_claim_task: {
            bind: 'emergency-tracking-reports-set-claim-task'
          },
          global_remove_from_storage: {
            bind: 'emergency-reports-remove-native-local-storage'
          },
          global_get_from_storage: {
            bind: 'emergency-reports-get-native-local-storage'
          }
        }
      }
    }
  };

  componentsOldDashboard.push(bbvaEmergencySos);

  const bbvaEmergencyInsurancesFlagsManager = {
    zone: 'oldDashboard',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-emergency-sos',
    tag: 'bbva-manager-emergency-insurances-flags',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          dashboard_insurances: {
            bind: 'productsList'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          }
        },
        out: {
          dashboard_insurances_distribute: {
            bind: 'distribute-insurances-flags'
          },
          insurances_product_detail_flags: {
            bind: 'distribute-product-detail-flags-insurance'
          },
          insurances_more_info_flag: {
            bind: 'distribute-more-info-flag-insurance'
          }
        }
      }
    }
  };

  const dmGlobalApisEvidences = {
    zone: 'oldDashboard',
    type: 'DM',
    tag: 'cells-dm-global-apis-evidences',
    properties: {
      host,
      requiredToken,
      native,
      evidencesApiVersion,
      cellsConnections: {
        in: {
          global_dashboard_service_credit_bureau_card: {
            bind: 'getListEvidences'
          }
        },
        out: {
          global_set_success_list_evidences: {
            bind: 'success-on-get-list-evidences'
          }
        },
        params: {
          clientId: 'global_user_id'
        }
      }
    }
  };

  componentsOldDashboard.push(dmGlobalApisEvidences);

  const getAnalyticsOcBannerDashboard = () => {
    const campaigns = utils.getCampaigns();
    const campaignsAnalytics = utils.getCampaignAnalytics();
    const campaignsCode = utils.getCampaignsCode();
    const channelNameIn = (code) => `${pageName}_oc_banner_${code}_clicked`.replace(/-/g, '_').toLowerCase();
    const channelNameOut = (code, type) => `${pageName}_analytics_oc_banner_${code}_${type}`.replace(/-/g, '_').toLowerCase();
    const eventName = (code, type) => `analytics-oc-banner-${type}-${code}`.replace(/_/g, '-').toLowerCase();

    const channelIn = {
      global_offers_analytics: {
        bind: 'offers'
      },
      dashboard_list_products: {
        bind: 'listProducts'
      },
      global_offer_closed: {
        bind: 'bannerClosed'
      },
      hide_futura_dashboard: {
        bind: 'dashboardActivated'
      }
    };

    Object.keys(campaigns).forEach((campaign) => {
      channelIn[channelNameIn(campaigns[campaign].code, 'clicked')] = {
        bind: 'bannerClicked'
      };
    });

    const channelOut = {
      dashboard_analytics_oc_access_with_offers: {
        bind: 'analytics-huella-avanzada-with-offers',
        analytics: analytics.OC_ACCESS.DASHBOARD_OC_ACCESS_ADVANCED_FOOTPRINT_WITH_OFFERS
      },
      dashboard_analytics_oc_access_without_offers: {
        bind: 'analytics-huella-avanzada-without-offers',
        analytics: analytics.OC_ACCESS.DASHBOARD_OC_ACCESS_ADVANCED_FOOTPRINT_WITHOUT_OFFERS
      }
    };

    Object.keys(campaigns).forEach((campaign) => {
      const {hasClickThrough = false}  = campaignsAnalytics[campaigns[campaign]?.code] || {};
      if (hasClickThrough) {
        channelOut[channelNameOut(campaigns[campaign].code, 'app-on-click-through')] = {
          bind: eventName(campaigns[campaign].code, 'clicked'),
          analytics: analytics.OC_ACCESS.DASHBOARD_OC_ACCESS_CLICK_THROUGH
        };
      } else {
        const appOnClickStartAnalytics = campaigns[campaign].code === 'oc-account' ? analytics.OC_ACCOUNT.appOnClickStart : analytics.OC_ACCESS.DASHBOARD_OC_ACCESS_APP_ON_CLICK_START;
        channelOut[channelNameOut(campaigns[campaign].code, 'app-on-click-start')] = {
          bind: eventName(campaigns[campaign].code, 'clicked'),
          analytics: appOnClickStartAnalytics
        };
      }
      channelOut[channelNameOut(campaigns[campaign].code, 'click-close')] = {
        bind: eventName(campaigns[campaign].code, 'closed'),
        analytics: analytics.OC_ACCESS.DASHBOARD_OC_ACCESS_CLICK_CLOSE
      };
    });

    return {
      ocBannerAnalytics: {
        channelIn: channelIn,
        channelOut: channelOut,
        productNames: campaignsCode,
        offers: campaignsAnalytics,
        campaignFormat: analytics.OC_ACCESS.CAMPAIGN_FORMAT_CARD
      }
    };
  };

  const { ocBannerAnalytics } = getAnalyticsOcBannerDashboard();

  const offersAnalyticsDM = {
    zone: 'oldDashboard',
    type: 'DM',
    tag: 'bbva-analyticmanager-oc-banner-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-and-structure',
    render: 'litElement',
    properties: {
      campaignFormat: ocBannerAnalytics.campaignFormat,
      productNames: ocBannerAnalytics.productNames,
      offersAnalytics: ocBannerAnalytics.offers,
      positionOffersInDashboard: [ 1 ],
      cellsConnections: {
        in: ocBannerAnalytics.channelIn,
        out: ocBannerAnalytics.channelOut
      }
    }
  };

  componentsOldDashboard.push(offersAnalyticsDM);

  const relevantFactsDM = {
    zone: 'oldDashboard',
    type: 'DM',
    tag: 'bbva-manager-relevant-facts',
    familyPath: '@glomo-web-components/bbva-manager-relevant-facts',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_ticket_dynamic_navigation_to_opperative_native: {
            bind: 'actionDetail'
          },
          global_set_customer_addresses: {
            bind: 'executeContributeToFundsScroll'
          }
        }
      }
    }
  };

  componentsOldDashboard.push(relevantFactsDM);

  const dataproviderAccounts = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-local-accounts-api-dm',
    tag: 'bbva-local-accounts-api-dm',
    render: 'litElement',
    properties: {
      host,
      version: accountsV1,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          global_get_accounts_documents_dossiers: {
            bind: 'getAccountsDocumentsDossiers'
          }
        },
        out: {
          get_accounts_documents_dossiers_success: {
            bind: 'documents-dossiers-api-dm-fetch'
          },
          get_accounts_documents_dossiers_error: {
            bind: 'documents-dossiers-api-dm-fetch-error'
          },
          get_accounts_documents_dossiers_api_error: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  componentsOldDashboard.push({
    zone: 'oldDashboard',
    type: 'DM',
    tag: 'glomo-analytics-dashboard-notifications-manager',
    familyPath: 'glomo-dashboard-notifications-manager',
    properties: {
      applicationStep: {
        payService: literals.commons.payService,
        transferNow: literals.commons.transferNow
      },
      configureLinkClickedAsAppOnClickStart: {
        creditBureau: true
      },
      cellsConnections: {
        in: {
          dashboard_open_notification_analytics: {
            bind: 'notificationPageView'
          },
          dashboard_notification_clicked_link: {
            bind: 'notificationClickedLink'
          },
          dashboard_close_notification: {
            bind: 'notificationClickedClose'
          },
          dashboard_frequent_operations_fire_page_view: {
            bind: 'frequentOperationsPageView'
          },
          dashboard_frequent_operations_fire_app_on_click_start: {
            bind: 'frequentOperationsAppOnClickStart'
          },
          dashboard_frequent_operations_send_operation_amount: {
            bind: 'frequentOperationsAmount'
          },
          hide_old_dashboard: {
            bind: 'homeNotSuggested'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          }
        },
        out: {
          dashboard_notifications_credit_bureau_analytics_page_view: {
            bind: 'notifications-credit-bureau-analytics-page-view',
            analytics: analytics.NOTIFICATIONS.CREDIT_BUREAU_PAGE_VIEW
          },
          dashboard_notifications_credit_bureau_analytics_app_on_click_start: {
            bind: 'notifications-credit-bureau-analytics-app-on-click-start',
            analytics: analytics.NOTIFICATIONS.CREDIT_BUREAU_APP_ON_CLICK_START
          },
          dashboard_notifications_credit_bureau_analytics_click_close: {
            bind: 'notifications-credit-bureau-analytics-click-close',
            analytics: analytics.NOTIFICATIONS.CREDIT_BUREAU_CLOSE_CLICK
          },
          dashboard_notifications_assistance_manager_analytics_page_view: {
            bind: 'notifications-assistance-manager-analytics-page-view',
            analytics: analytics.NOTIFICATIONS.ASSISTANCE_MANAGER_PAGE_VIEW
          },
          dashboard_notifications_assistance_manager_analytics_click_through: {
            bind: 'notifications-assistance-manager-analytics-click-through',
            analytics: analytics.NOTIFICATIONS.ASSISTANCE_MANAGER_LINK_CLICK
          },
          dashboard_notifications_assistance_manager_analytics_click_close: {
            bind: 'notifications-assistance-manager-analytics-click-close',
            analytics: analytics.NOTIFICATIONS.ASSISTANCE_MANAGER_CLOSE_CLICK
          },
          dashboard_notifications_notifications_settings_analytics_page_view: {
            bind: 'notifications-notifications-settings-analytics-page-view',
            analytics: analytics.NOTIFICATIONS.NOTIFICATIONS_SETTINGS_PAGE_VIEW
          },
          dashboard_notifications_notifications_settings_analytics_click_through: {
            bind: 'notifications-notifications-settings-analytics-click-through',
            analytics: analytics.NOTIFICATIONS.NOTIFICATIONS_SETTINGS_LINK_CLICK
          },
          dashboard_notifications_notifications_settings_analytics_click_close: {
            bind: 'notifications-notifications-settings-analytics-click-close',
            analytics: analytics.NOTIFICATIONS.NOTIFICATIONS_SETTINGS_CLOSE_CLICK
          },
          dashboard_frequent_operations_open_help_modal: {
            bind: 'frequent-operations-open-modal-page-view',
            analytics: analytics.FREQUENT_OPERATIONS.modalPageView
          },
          dashboard_frequent_operations_app_on_click_start: {
            bind: 'frequent-operations-app-on-click-start',
            analytics: analytics.FREQUENT_OPERATIONS.appOnClickStart('posicion global')
          },
          dashboard_close_notification_frequent_operations: {
            bind: 'frequent-operations-close-notification',
            analytics: analytics.FREQUENT_OPERATIONS.interactionLink
          },
          dashboard_notifications_frequent_operations_analytics_page_view: {
            bind: 'notifications-frequent-operation-analytics-page-view',
            analytics: analytics.FREQUENT_OPERATIONS.campaignFootprint
          },
          dashboard_notifications_frequent_operations_analytics_click_close: {
            bind: 'notifications-frequent-operation-analytics-click-close',
            analytics: analytics.FREQUENT_OPERATIONS.closeCampaign
          },
          dashboard_notifications_multiple_frequent_operations_analytics_page_view: {
            bind: 'notifications-multiple-frequent-operations-analytics-page-view',
            analytics: analytics.FREQUENT_OPERATIONS.campaignFootprint
          }
        }
      }
    }
  });

  const analyticsManagerExpenses = {
    zone: 'oldDashboard',
    type: 'DM',
    tag: 'bbva-analyticmanager-expenses',
    familyPath: '@glomo-web-components/bbva-analyticmanager-expenses',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_experiences_carousel_cards: {
            bind: 'internalCampaign'
          },
          hide_futura_dashboard: {
            bind: 'dashboardActivated'
          }
        },
        out: {
          global_experiences_carousel_card_expenses: {
            bind: 'expenses-group-carousel-experiences-card',
            analytics: analytics.EXPENSES_GROUP._getExpensesGroupFootPrintsAndErrors('campaignPrint')
          }
        }
      }
    }
  };
  componentsOldDashboard.push(analyticsManagerExpenses);

  componentsOldDashboard.push(toastSnackBar, bbvaEmergencyInsurancesFlagsManager, dataproviderAccounts, offersManager(CONFIG, pageName));

  addCommonErrors(componentsOldDashboard)();

  return componentsOldDashboard.map(component => component);
};
