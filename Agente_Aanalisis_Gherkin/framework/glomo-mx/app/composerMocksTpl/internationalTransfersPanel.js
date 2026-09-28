'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'internationalTransfersPanel';
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const ITH_ANALYTICS = require('./analytics/_internationalTransfersHistorical')();
  const IT_ANALYTICS = require('./analytics/_internationalTransfers')();
  const PAGE_NAME_UNDERSCORED = utils.toUnderscoreCase(PAGE_NAME);
  const isNativeIos = !!CONFIG.nativeIos;
  const [ getChannelName ] = utils.useNames(PAGE_NAME_UNDERSCORED);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const { addOutStorageChannels } = require('./common/_local-storage');

  const getLinkList = (isDescription = false, operationType = '', divider = '') => ({
    id: `movements-${operationType}-btn`,
    titleHeader: `international-transfers-historical-operations-button-${operationType}`,
    linkIcon: '',
    description: isDescription ? 'international-transfers-historical-operations-button-description' : '',
    dividerBottom: divider,
    data: operationType.toUpperCase(),
    loading: true,
    disabled: true
  });

  const accountPaths = {
    alias: 'alias',
    name: 'name',
    productId: 'id',
    number: 'description.value',
    description: {
      value: 'description.value'
    },
    availableBalance: {
      currentBalances: {
        amount: 'primaryAmount.amount',
        currency: 'primaryAmount.currency'
      }
    },
    primaryAmount: {
      amount: 'primaryAmount.amount',
      currency: 'primaryAmount.currenc'
    },
    level: 'level',
    status: 'status',
    numberType: {
      id: 'numberType.id'
    },
    currencies: {
      currency: 'primaryAmount.currency'
    }
  };

  const base = {
    hash: 'mx-international-transfers-panel',
    currentPage: {
      url: '/international-transfers-panel'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [getChannelName('initialize_page')]: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'cells-template-coronita-spherica',
        override: {
          className: 'bg-light-grey'
        }
      })
    },
    components: []
  };

  const CellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
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
          [getChannelName('initialize_page')]: {
            bind: 'init-page',
            analytics: IT_ANALYTICS.APP_PAGE_VISIT
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const BbvaHeaderMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'glomo-international-transfers-historical-panel-title',
      iconLeftPrimary: 'coronita:return-12',
      cellsConnections: {
        out: {
          [getChannelName('go_back')]: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      text: 'glomo-international-transfers-historical-panel-title-spherica',
      variant: 'first-level-sequential',
      leftIconLabel: 'bbva-header-main-back-left-icon-label',
      cellsConnections: {
        out: {
          international_transfers_panel_go_back: {
            bind: 'header-main-back-icon-click',
            backStep: true
          }
        }
      }
    }
  };

  const BbvaAggregationListLink = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-link-list',
    tagSpherica: 'bbva-aggregation-link-list-spherica',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-aggregation-link-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-link-list-spherica',
    properties: {
      id: 'movements-type-buttons',
      linkList: [getLinkList(false, 'sent', 'fit'), getLinkList(false, 'received')],
      useBbvaListLink: true,
      cellsConnections: {
        in: {
          [getChannelName('aggregation_link_list_config')]: {
            bind: 'linkList'
          }
        },
        out: {
          [getChannelName('click_on_link')]: {
            bind: 'aggregation-link-list-click'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-padding-top--0'
    }
  };

  const BbbvaButtonFloatingAction = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-floating-action',
    tagSpherica: 'bbva-aggregation-link-list-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-floating-action',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-link-list-spherica',
    properties: {
      id: 'make-international-transfer-btn',
      icon: 'coronita:expand',
      variant: 'medium-blue',
      disabled: true,
      cellsConnections: {
        in: {
          [getChannelName('button_floating_action_enabled')]: {
            bind: 'disabled'
          }
        },
        out: {
          [getChannelName('click_on_make_new_transfers_btn')]: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-padding-bottom--0',
      useBbvaListLink: true,
      linkList: [
        {
          id: 'movements-sent-btn',
          titleHeader: 'glomo-international-transfers-panel-make-new-transfer',
          loading: false,
          disabled: false
        }
      ],
      disabled: false,
      cellsConnections: {
        in: {
          international_transfers_panel_button_floating_action_enabled: {
            bind: 'disabled'
          }
        },
        out: {
          international_transfers_panel_click_on_make_new_transfers_btn: {
            bind: 'aggregation-link-list-click'
          }
        }
      }
    }
  };

  const CellsProductSelectorModal = {
    zone: 'app__transactional',
    tag: 'cells-product-selector-modal',
    type: 'UI',
    properties: {
      id: 'first-products-modal-international-transfers',
      iOSFixedHeader: true,
      activateHeaderColor: true,
      listTitle: 'international-transfers-modal-title-group',
      groupByProperty: 'family',
      modalTitle: 'glomo-international-transfers-modal-recipient-selector-title',
      className: isNativeIos ? 'ios-top-padding bg-dark-medium-blue group-accounts' : 'group-accounts',
      localCurrency: 'MXN',
      visibleChars: 4,
      showCloseModalButton: true,
      closeButtonLabel: 'glomo-international-transfers-modal-product-selector-close',
      customErrorMessageAdditionalLink: 'preLink',
      preventCloseOnProductSelected: true,
      cellsConnections: {
        in: {
          [getChannelName('initialize_page')]: {
            bind: 'close'
          },
          [getChannelName('accounts')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          navigation_international_transfers_panel_account_list_to_international_transfers: {
            bind: 'selected-product',
            analytics: ITH_ANALYTICS.INTERNAL_LINK,
            link: {
              page: 'internationalTransfers'
            }
          }
        }
      }
    }
  };

  const BbvaManagerInternationalTransfer = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-international-transfer',
    tag: 'bbva-manager-international-transfer-historical',
    render: 'litElement',
    properties: {
      movementBtns: [getLinkList(true, 'sent', 'fit'), getLinkList(true, 'received')],
      accountPaths,
      allowedLevels: [ '04' ],
      onboardingImage: './images/spherica/transfer-glass.png',
      cellsConnections: {
        in: {
          __bridge_page_internationalTransfersPanel: {
            bind: 'initTransfers'
          },
          global_feature_flag_collection_updated: {
            bind: 'validateFlag'
          },
          dashboard_accounts: {
            bind: 'setAccounts'
          },
          navigation_account_section_to_international_transfers: {
            bind: 'initPanel'
          },
          navigation_product_detail_to_international_transfers: {
            bind: 'initPanel'
          },
          message_addressing_interbank_transfers: {
            bind: 'initPanel'
          },
          [getChannelName('click_on_make_new_transfers_btn')]: {
            bind: 'navigateToInternationalTransfers'
          },
          [getChannelName('click_on_link')]: {
            bind: 'navigateToInternationalTransfersHistorical'
          },
          blue_redirect_international_type_transfers: {
            bind: 'navigateToInternationalTransfersHistorical'
          },
          global_storage_get_international_transfers_info_error: {
            bind: 'getInternationalTransfersLocalStorage'
          },
          global_storage_get_international_transfers_info_success: {
            bind: 'getInternationalTransfersLocalStorage'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-international-transfer-onboarding-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-international-transfer-onboarding-on-local-storage'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-modal-onboarding-internationl-transfers'
          },
          navigation_international_transfers_panel_account_to_international_transfers: {
            bind: 'navigation-to-international-transfers-page',
            link: {
              page: 'internationalTransfers'
            }
          },
          [getChannelName('accounts')]: {
            bind: 'dispatch-dashboard-accounts'
          },
          navigation_international_transfers_panel_dashboard_to_international_transfers: {
            bind: 'dispatch-dashboard-one-account',
            link: {
              page: 'internationalTransfers'
            }
          },
          INTERNATIONAL_TRANSFERS_INITIALIZE_HISTORICAL: {
            bind: 'navigate-to-international-transfers-historical',
            link: {
              page: 'internationalTransfersHistorical'
            }
          },
          [getChannelName('aggregation_link_list_config')]: {
            bind: 'aggregation-link-list-disabled'
          },
          [getChannelName('button_floating_action_enabled')]: {
            bind: 'button-floating-action-disabled'
          },
          international_transfers_parsed_accounts: {
            bind: 'dispatch-parsed-accounts'
          },
          accesses_international_transfers_contacts: {
            bind: 'access-to-international-contacts',
            link: {
              page: 'internationalTransfersContactsBook'
            }
          }
        }
      }
    }
  };

  const glomoAnalyticsInternationalTransfersManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-international-transfers-manager',
    familyPath: '@glomo-web-components/glomo-analytics-international-transfers-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          navigation_account_section_to_international_transfers: {
            bind: 'init'
          },
          navigation_product_detail_to_international_transfers: {
            bind: 'init'
          },
          [getChannelName('click_on_link')]: {
            bind: 'analyticsAppStarted'
          },
          [getChannelName('click_on_make_new_transfers_btn')]: {
            bind: 'analyticsAppStarted'
          }
        },
        out: {
          [getChannelName('app_started')]: {
            bind: 'analytics-app-started',
            analytics: IT_ANALYTICS.APP_STARTED
          }
        }
      }
    }
  };

  base.components.push(
    CellsHandleLifeCycle,
    BbvaHeaderMain,
    BbbvaButtonFloatingAction,
    BbvaAggregationListLink,
    CellsProductSelectorModal,
    BbvaManagerInternationalTransfer,
    glomoAnalyticsInternationalTransfersManager
  );

  addCommonErrors(base.components)();
  addOutStorageChannels(base.components, [ 'international_transfers_info' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
