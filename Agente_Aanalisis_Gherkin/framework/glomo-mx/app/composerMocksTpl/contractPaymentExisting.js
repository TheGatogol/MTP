/* eslint-disable new-cap */
'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const { getCountry, useNames, createPrefixFromPageName } = utils;
  const COUNTRY = getCountry(CONFIG);
  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const pages = require('./common/_pages')(CONFIG)('contractPaymentExisting');
  const ANALYTICS = require('./analytics/_contractPaymentExisiting')();
  const ANALYTICS_PURCHASE = require('./analytics/_depositsPurchase')();
  const isNativeIos = CONFIG.nativeIos || false;
  const native = CONFIG.native || false;
  const PAGE_NAME = 'contractPaymentExisting';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

  SPINNER.properties.className = 'solid-spinner';

  const base = {
    hash: 'contractPaymentExisting',
    currentPage: {
      url: '/contract-payment-existing-page'
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        animationType: 'verticalUp',
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        collapseOpened: true,
        headerHeight: 60,
        className: 'header-fixed',
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            contract_payments_existing_page_init: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          leftIconSize: '22',
          titleName: 'glomo-contract-payment-existing',
          cellsConnections: {
            out: {
              [getChannelName('_GENERIC_BACK_PAGE_REVIEW')]: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
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
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'init'
              }
            },
            out: {
              contract_payment_existing_init_page: {
                bind: 'init-page'
              },
              global_retargeting_initialize_contract_existing_modal: {
                bind: 'init-page'
              },
              contract_payment_existing_analytics_init_page: {
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-back',
          cellsConnections: {
            in: {
              contract_existing_pay_to_continue: {
                bind: 'navigate'
              },
              navigation_product_detail_to_deposits_purchase_sales_navigation: {
                bind: 'navigateToPage'
              },
              contract_existing_pay_back_request: {
                bind: 'goBack'
              },
              [getChannelName('_GENERIC_BACK_PAGE_REVIEW')]: {
                bind: 'goBack'
              }
            },
            out: {
              [getChannelName('BACK_STEP')]: {
                bind: 'navigation-to-back',
                backStep: true
              },
              global_retargeting_send_information_update: {
                bind: 'navigation-to-back'
              },
              navigation_product_detail_to_deposits_purchase_sales: {
                bind: 'navigation-to-purchases-sale',
                link: {
                  page: 'depositsPurchase',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              }
            }
          }
        }
      }
    ]
  };

  const textHeaderContractPayment = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      className: 'margin-top-l mainDescription',
      cellsConnections: {
        in: {
          text_header_contract_payment_existing: {
            bind: 'mainDescription'
          }
        }
      }
    }
  };

  const titleContractPayment = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    render: 'litElement',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    properties: {
      cellsConnections: {
        in: {
          title_contract_payment_existing: {
            bind: 'text'
          },
          contract_payment_existing_header_option_link: {
            bind: 'optionLink'
          }
        },
        out: {
          contract_payment_existing_navigate_to_page: {
            bind: 'header-category-link-click'
          }
        }
      }
    }
  };

  const listContractPayment = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-product-item-list',
    properties: {
      header: '',
      className: '',
      lineSeparator: true,
      cellsConnections: {
        in: {
          list_items_contract_payment_existing: {
            bind: 'items'
          }
        },
        out: {
          [getChannelName('PRODUCT_SELECTED')]: {
            bind: 'product-item-tap'
          },
          global_retargeting_go_next_step: {
            bind: 'product-item-tap'
          }
        }
      }
    }
  };

  const buttonContractPayment = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      unfixed: true,
      cellsConnections: {
        in: {
          button_return_contract_payment_existing: {
            bind: 'config'
          }
        },
        out: {
          [getChannelName('_GENERIC_BACK_PAGE_REVIEW')]: {
            bind: 'cells-confirm-buttons-click-secondary'
          }
        }
      }
    }
  };

  const modalListItemsContract = {
    zone: 'app__overlay',
    tag: 'cells-product-selector-modal',
    type: 'UI',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      modalTitle: 'glomo-contract-payment-existing-header',
      productsListTitle: 'glomo-contract-payment-existing-header',
      localCurrency: LOCAL_CURRENCY,
      showCloseModalButton: true,
      closeButtonLabel: 'glomo-contract-payment-existing-modal-items-close',
      cellsConnections: {
        in: {
          view_all_list_items_modal: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('PRODUCT_SELECTED_FROM_MODAL')]: {
            bind: 'selected-product'
          }
        }
      }
    }
  };

  const analyticsContracPaymentExisting = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-offers-deposit-hiring-manager',
    familyPath: '@glomo-web-components/glomo-analytics-offers-deposit-hiring-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          contract_payment_existing_analytics_init_page: {
            bind: 'huellaListContract'
          },
          global_open_modal_detail_response_contract_existing_modal: {
            bind: 'huellaInvalidContract'
          }
        },
        out: {
          [getChannelName('analytics_huella_contract_list')]: {
            bind: 'huella-contract-list',
            analytics: ANALYTICS.FINGERPRINT_CONTRACT_LIST
          },
          [getChannelName('analytics_huella_invalid_contract')]: {
            bind: 'huella-invalid-contract',
            analytics: ANALYTICS.FINGERPRINT_INVALID_CONTRACT
          }
        }
      }
    }
  };

  const contractExistingPayManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-deposits-dm-mx',
    familyPath: 'glomo-deposits-dm',
    properties: {
      host: CONFIG.globalServices.host,
      native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      depositsApiVersion: CONFIG.globalServices.versions.deposits,
      fixedVersion: true,
      cellsConnections: {
        in: {
          global_contract_product_section_oc_banner_deposit_clicked: {
            bind: 'openSpinner'
          },
          contract_payment_existing_init_page: {
            bind: 'initListPage'
          },
          contract_payment_existing_navigate_to_page: {
            bind: 'onViewAllPressed'
          },
          global_redirect_to_contract_payment_existing: {
            bind: 'parseDataListPayment'
          },
          dashboard_accounts: {
            bind: 'accountsStorage'
          },
          [getChannelName('PRODUCT_SELECTED')]: {
            bind: 'selectProductItem'
          },
          [getChannelName('PRODUCT_SELECTED_FROM_MODAL')]: {
            bind: 'selectProductItem'
          },
          depositHiringSuccess_BACKSTEP: {
            bind: 'redirectToDashboard'
          },
          global_deposit_purchase_success: {
            bind: 'redirectToDashboard'
          },
          global_deposit_hiring_success: {
            bind: 'redirectToOffer'
          }
        },
        out: {
          navigation_investment_funds_to_dashboard: {
            bind: 'redirect-to-dashboard',
            'forward-to-native': true
          },
          global_refresh_dashboard_generic: {
            bind: 'redirect-to-dashboard',
            'forward-to-native': true
          },
          text_header_contract_payment_existing: {
            bind: 'contract-header-text-message'
          },
          title_contract_payment_existing: {
            bind: 'contract-active-header-title'
          },
          contract_payment_existing_header_option_link: {
            bind: 'contract-active-header-more-info'
          },
          list_items_contract_payment_existing: {
            bind: 'contract-list-items-payments'
          },
          button_return_contract_payment_existing: {
            bind: 'contract-button-return-payments'
          },
          view_all_list_items_modal: {
            bind: 'view-all-list-items-modal'
          },
          global_open_modal_detail_response_contract_existing_modal: {
            bind: 'show-modal-invalid-contract'
          },
          navigation_product_detail_to_deposits_purchase_sales_navigation: {
            bind: 'deposit-navigate-to-page-purchases-sale'
          },
          open_control_veil: {
            bind: 'deposits-start-spinner'
          },
          close_control_veil: {
            bind: 'deposits-stop-spinner'
          },
          close_undefined_control_veil: {
            bind: 'close-spinner-veil'
          },
          show_undefined_modal: {
            bind: 'open-undefined-session'
          }
        }
      }
    }
  };

  const UI = [
    textHeaderContractPayment,
    titleContractPayment,
    listContractPayment,
    buttonContractPayment,
    modalListItemsContract
  ];
  const DMs = [
    contractExistingPayManager,
    analyticsContracPaymentExisting
  ];

  base.components.push(...UI, ...DMs);

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);

  return base;
};
