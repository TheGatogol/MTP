/* eslint-disable new-cap, no-dupe-keys */
'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const { getCountry, useNames, createPrefixFromPageName } = utils;
  const COUNTRY = getCountry(CONFIG);
  const SPINNER = utils.SPINNER(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const pages = require('./common/_pages')(CONFIG)('contractPaymentExistingModal');
  const ANALYTICS = require('./analytics/_contractPaymentExisiting')();
  const ANALYTICS_PURCHASE = require('./analytics/_depositsPurchase')();
  const isNativeIos = CONFIG.nativeIos || false;
  const native = CONFIG.native || false;
  const PAGE_NAME = 'contractPaymentExistingModal';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

  SPINNER.properties.className = 'solid-spinner';

  const base = {
    hash: 'contractPaymentExistingModal',
    currentPage: {
      url: '/contract-payment-existing-modal'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'fade',
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        fixOffsetScroll: 0,
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
              global_retargeting_initialize_contract_existing_modal: {
                bind: 'init-page'
              },
              contract_payment_existing_init_page: {
                bind: 'init-page'
              },
              contract_payment_existing_modal_analytics_init_page: {
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
              contract_existing_pay_back_request: {
                bind: 'goBack'
              },
              navigation_product_detail_to_deposits_purchase_sales_navigation: {
                bind: 'navigateToPage'
              },
              global_redirect_to_contract_payment_existing_testing: {
                bind: 'navigateToPage'
              },
              navigation_contract_product_section: {
                bind: 'navigateToPage'
              },
              DEPOSIT_HIRING_EXIT_CONFIRMATION_ACCEPT: {
                bind: 'goBack'
              },
              DEPOSIT_HIRING_ERROR_NOT_PARTICIPANTS_ACCEPT: {
                bind: 'goBack'
              },
              DEPOSIT_HIRING_ERROR_NOT_PARTICIPANTS_CANCEL: {
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
              global_redirect_to_contract_payment_existing: {
                bind: 'navigation-to-redirect-contract-payments-existing',
                link: {
                  page: 'contractPaymentExisting'
                }
              },
              navigation_to_contract_product_section: {
                bind: 'navigation-to-contract-product-section',
                link: {
                  page: 'contractProductSection'
                }
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

  const contractBodyComponent = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-modal-card-advice',
    properties: {
      className: 'image-size-m header--white-core-blue',
      extraHeaderClass: 'bbva-core-blue',
      cardAdviceClass: 'content-description existing-contract-payment-info-icon',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('_SET_CONTRACT_MESSAGE_DATA')]: {
            bind: 'openWithConfig'
          }
        },
        out: {
          [getChannelName('_REDIRECT_TO_DEPOSIT_PURCHASE')]: {
            bind: 'modal-deposit-hiring-click-primary'
          },
          global_retargeting_go_next_step: {
            bind: 'modal-deposit-hiring-click-primary'
          },
          DEPOSIT_HIRING_ERROR_OPERATION_SIMULATE_EXIT_ACCEPT: {
            bind: 'cells-bottom-modal-closed'
          },
          global_retargeting_send_information_update: {
            bind: 'cells-bottom-modal-closed'
          },
          [getChannelName('_REDIRECT_TO_DEPOSIT_HIRING')]: {
            bind: 'modal-deposit-hiring-click-secondary',
            link: {
              page: 'depositHiring'
            }
          },
          global_retargeting_go_next_step: {
            bind: 'modal-deposit-hiring-click-secondary'
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
      subtitle: 'glomo-contract-payment-existing-modal-subtitle',
      cellsConnections: {
        in: {
          [getChannelName('_GENERIC_BACK_PAGE_REVIEW')]: {
            bind: 'redirectToContractProductSection'
          },
          DEPOSIT_HIRING_ERROR_OPERATION_SIMULATE_EXIT_ACCEPT: {
            bind: 'redirectToContractProductSection'
          },
          global_contract_product_section_oc_banner_deposit_clicked: {
            bind: 'openSpinner'
          },
          contract_payment_existing_init_page: {
            bind: 'initInfoPage'
          },
          global_financial_overview_details: {
            bind: 'globalCacheStorage'
          },
          dashboard_accounts: {
            bind: 'accountsStorage'
          },
          [getChannelName('_REDIRECT_TO_DEPOSIT_PURCHASE')]: {
            bind: 'chooseNewRedirect'
          },
          contract_payment_existing_redirect_to_deposit_hiring: {
            bind: 'setContractAccion'
          }
        },
        out: {
          [getChannelName('_SET_CONTRACT_MESSAGE_DATA')]: {
            bind: 'configuration-contract-message-info'
          },
          [getChannelName('REDIRECT_TO_DEPOSITPURCHSESALE_PAGE_FROM_MODAL')]: {
            bind: 'redirect-to-purchase-sale-from-modal'
          },
          navigation_product_detail_to_deposits_purchase_sales_navigation: {
            bind: 'deposit-navigate-to-page-purchases-sale'
          },
          global_redirect_to_contract_payment_existing_testing: {
            bind: 'deposit-navigate-to-page-redirect-contract-payments-existing'
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
          },
          navigation_contract_product_section: {
            bind: 'deposit-navigate-to-page-contract-product-section'
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
          contract_payment_existing_modal_analytics_init_page: {
            bind: 'huellaHasContract'
          },
          [getChannelName('_REDIRECT_TO_DEPOSIT_HIRING')]: {
            bind: 'openNewContractLink'
          },
          [getChannelName('_REDIRECT_TO_DEPOSIT_PURCHASE')]: {
            bind: 'newPaymentLink'
          },
          global_open_modal_detail_response_contract_existing_modal: {
            bind: 'huellaInvalidContract'
          }
        },
        out: {
          [getChannelName('analytics_huella_has_contract')]: {
            bind: 'huella-has-contract',
            analytics: ANALYTICS.FINGERPRINT_HAS_CONTRACT
          },
          [getChannelName('analytics_huella_new_payment')]: {
            bind: 'new-payment-link',
            analytics: ANALYTICS.INTERNAL_LINK_NEW_PAYMENT
          },
          [getChannelName('analytics_huella_open_new_contract')]: {
            bind: 'open-new-contract-link',
            analytics: ANALYTICS.INTERNAL_LINK_OPEN_NEW_CONTRACT
          },
          [getChannelName('analytics_huella_invalid_contract')]: {
            bind: 'huella-invalid-contract',
            analytics: ANALYTICS.FINGERPRINT_INVALID_CONTRACT
          }
        }
      }
    }
  };

  const UI = [
    contractBodyComponent
  ];
  const DMs = [
    contractExistingPayManager,
    analyticsContracPaymentExisting
  ];

  base.components.push(...UI, ...DMs);

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);

  return base;
};
