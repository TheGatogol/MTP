/* eslint-disable complexity */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const localStorageApp = require('./common/_local-storage');
  const PAGE_NAME = 'configureProductsPage';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG, isSpherica);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('configureProductsPage');
  const ANALYTICS_CONFIGURE_PRODUCTS = require('./analytics/_configureProductsPage')(CONFIG);

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          cp_info_modal_spherica: {
            bind: 'openWithSettings'
          },
          cp_error_retry_modal_spherica: {
            bind: 'openWithSettings'
          },
          cp_modal_confirm_hide_equity_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          cp_confirm_update_prods: {
            bind: 'alert-cp-modal-confirm-accept'
          },
          cp_confirm_update_prods_cancel: {
            bind: 'alert-cp-modal-confirm-cancel'
          },
          cp_confirm_first_modal: {
            bind: 'alert-config-prods-info-accept',
            analytics: ANALYTICS_CONFIGURE_PRODUCTS.PAGE_VIEW_CONFIGURE_PRODUCTS
          },
          cp_confirm_first_modal_cancel: {
            bind: 'alert-config-prods-info-cancel',
            analytics: ANALYTICS_CONFIGURE_PRODUCTS.PAGE_VIEW_CONFIGURE_PRODUCTS
          }
        }
      }
    }
  };

  const base = {
    hash: 'configure-products-page',
    currentPage: {
      url: '/configure-products',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'horizontal',
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        extraHeaderClass: 'dark-blue-bg',
        headerHeight: utils.headerHeight,
        cellsConnections: {
          in: {},
          out: {}
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'configureProductsPage',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_configureProductsPage: {
                bind: 'init'
              }
            },
            out: {
              configure_products_page_init_page: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          rightIcon: 'coronita:help',
          titleName: 'glomo-configure-products-info-header',
          cellsConnections: {
            in: {},
            out: {
              navigation_configure_products_back_request: {
                bind: 'click-left-button'
              },
              cp_header_modal_info: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back-mini',
          className: 'header--core-grey header',
          variant: 'primary-alt',
          leftIconText: 'cells-molecule-header-spherica-back',
          rightIconText: 'cells-molecule-header-spherica-help'
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-settings',
          cellsConnections: {
            in: {
              navigation_configure_products_back_request: {
                bind: 'goBack'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'goBack'
              }
            },
            out: {
              navigate_configure_products_to_settings: {
                bind: 'navigation-to-settings',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-configure-products',
        tagSpherica: 'glomo-configure-products-spherica',
        properties: {
          cellsConnections: {
            in: {
              cp_send_handled_config_products: {
                bind: 'productsList'
              },
              cp_reset_switch_button: {
                bind: 'cancelSwitch'
              },
              cp_confirm_update_prods_cancel: {
                bind: 'cancelSwitch'
              }
            },
            out: {
              cp_prepare_changes_channel: {
                bind: 'prepare-changes-event'
              },
              cp_main_switch_equity_contracts: {
                bind: 'cp-main-switch-equity-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        tagSpherica: 'cells-bottom-modal-message-spherica',
        properties: {
          autoHide: true,
          time: 3000,
          icon: 'coronita:correct',
          iconSize: '32',
          type: 'success',
          message: 'glomo-configure-products-modal-success',
          messageDisabled: true,
          cellsConnections: {
            in: {
              cp_products_updated_success: {
                bind: 'open'
              }
            }
          }
        },
        propertiesSpherica: {
          iconSize: '24',
          icon: 'coronita:right',
          expand: true
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-configure-products-dm',
        properties: {
          productTypes: [
            {
              type: 'ACCOUNT',
              title: sphericaPageUtils.isSpherica() ? 'glomo-configure-products-accounts-title-spherica' : 'glomo-configure-products-accounts-title'
            },
            {
              type: 'CARD',
              title: sphericaPageUtils.isSpherica() ? 'glomo-configure-products-cards-title-spherica' : 'glomo-configure-products-cards-title'
            },
            {
              type: 'LOAN',
              title: sphericaPageUtils.isSpherica() ? 'glomo-configure-products-loans-title-spherica' : 'glomo-configure-products-loans-title'
            },
            {
              type: 'DEPOSIT',
              title: sphericaPageUtils.isSpherica() ? 'glomo-configure-products-deposits-title-spherica' : 'glomo-configure-products-deposits-title'
            },
            {
              type: 'SI',
              title: sphericaPageUtils.isSpherica() ? 'glomo-configure-products-investment-funds-title-spherica' : 'glomo-configure-products-investment-funds-title'
            },
            {
              type: 'PT',
              title: sphericaPageUtils.isSpherica() ? 'glomo-configure-products-pt-title-spherica' : 'glomo-configure-products-pt-title'
            },
            {
              type: 'LP',
              title: sphericaPageUtils.isSpherica() ? 'glomo-configure-products-lp-title-spherica' : 'glomo-configure-products-lp-title'
            },
            {
              type: 'CE',
              title: sphericaPageUtils.isSpherica() ? 'glomo-configure-products-ce-title-spherica' : 'glomo-configure-products-ce-title'
            }
          ],
          imgOnOff: './images/Mobile-Settings.svg',
          equityAlertImg: './images/info.png',
          equityAllAlertImg: './images/caution.svg',
          errorImage: './images/general_error.svg',
          cellsConnections: {
            in: {
              configure_products_page_init_page: {
                bind: 'getFlagConfigureProducts'
              },
              cp_confirm_first_modal: {
                bind: 'init'
              },
              cp_confirm_first_modal_cancel: {
                bind: 'init'
              },
              send_is_mono_additional_user_value: {
                bind: 'isMonoAdditionalUser'
              },
              cp_get_FO_contracts_configurations_success: {
                bind: 'handleConfigProducts'
              },
              cp_get_FO_contracts_configurations_pagination_succes: {
                bind: 'paginationResponse'
              },
              cp_header_modal_info: {
                bind: 'prepareHelpInfoModal'
              },
              cp_prepare_changes_channel: {
                bind: 'prepareChangedProducts'
              },
              global_storage_get_configureProducts_success: {
                bind: 'init'
              },
              global_storage_get_configureProducts_error: {
                bind: 'setFlagFirstTimeMissing'
              },
              cp_get_FO_contracts_configurations_error: {
                bind: 'errorModalGettingProducts'
              },
              cp_patch_FO_contracts_configurations_error: {
                bind: 'errorModalConfig'
              },
              cp_main_switch_equity_contracts: {
                bind: 'flagEquityContracts'
              },
              cp_patch_FO_contracts_configurations_success: {
                bind: 'checkUpdateProducts'
              }
            },
            out: {
              cp_info_modal: {
                bind: 'cp-info-modal-event'
              },
              cp_send_handled_config_products: {
                bind: 'handled-config-products'
              },
              cp_confirm_update_prods: {
                bind: 'send-changes-event'
              },
              cp_modal_confirm_hide_equity: {
                bind: 'cp-confirm-modal-event'
              },
              cp_error_retry_modal: {
                bind: 'cp-error-modal-config-event'
              },
              cp_get_FO_contracts_configurations: {
                bind: 'get-FO-contracts-configurations'
              },
              cp_page_init: {
                bind: 'configure-products-page-init',
                analytics: ANALYTICS_CONFIGURE_PRODUCTS.PAGE_VIEW_CONFIGURE_PRODUCTS
              },
              cp_patch_FO_contracts_configurations: {
                bind: 'patch-FO-contracts-configurations'
              },
              global_set_in_storage: {
                bind: 'configure-products-set-flag-first-time'
              },
              global_get_from_storage: {
                bind: 'configure-products-get-flag-first-time'
              },
              cp_reset_switch_button: {
                bind: 'cp-cannot-execute-event'
              },
              global_retry_error: {
                bind: 'cp-error-modal-get-products'
              },
              cp_products_updated_success: {
                bind: 'success-config-products-response'
              },
              dashboard_pull_to_refresh_start: {
                bind: 'success-config-products-response'
              }
            }
          }
        },
        propertiesSpherica: {
          imgOnOff: './images/spherica/configure_products.svg',
          helpImage: './images/spherica/send-request-glass.png',
          isSpherica: true,
          newCellsConnections: {
            add: {
              out: {
                cp_info_modal_spherica: {
                  bind: 'cp-info-modal-event'
                },
                cp_error_retry_modal_spherica: {
                  bind: 'cp-error-modal-config-event'
                },
                cp_modal_confirm_hide_equity_spherica: {
                  bind: 'cp-confirm-modal-event'
                }
              }
            },
            remove: {
              out: [
                'cp_info_modal',
                'cp_error_retry_modal',
                'cp_modal_confirm_hide_equity'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-financial-overview',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          financialOverviewApiVersion: CONFIG.globalServices.versions.financialOverview,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              cp_get_FO_contracts_configurations: {
                bind: 'getFOContractsConfigurations'
              },
              cp_confirm_update_prods: {
                bind: 'patchFOContractsConfigurations'
              }
            },
            out: {
              cp_get_FO_contracts_configurations_success: {
                bind: 'get-fo-contracts-configurations-success-response'
              },
              cp_get_FO_contracts_configurations_error: {
                bind: 'error-on-get-fo-contracts-configurations'
              },
              cp_get_FO_contracts_configurations_pagination_succes: {
                bind: 'get-fo-contracts-configurations-pagination-success-response'
              },
              cp_patch_FO_contracts_configurations_success: {
                bind: 'patch-fo-contracts-configurations-success-response'
              },
              cp_patch_FO_contracts_configurations_error: {
                bind: 'error-on-get-patch-fo-contracts-configurations'
              }
            }
          }
        }
      }
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'configureProducts' ], CONFIG);
  addCommonErrors(base.components)();
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  addRetryErrors(base)([
    {
      id: 'error-on-get-fo-contracts-configurations',
      acceptRetry: { bind: 'getFOContractsConfigurations', component: 'cells-dm-global-apis-financial-overview' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);
  return sphericaPageUtils.spherize(base);
};
