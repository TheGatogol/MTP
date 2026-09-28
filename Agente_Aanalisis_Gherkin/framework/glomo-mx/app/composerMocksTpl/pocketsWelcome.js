/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'pocketsWelcome';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const PRODUCT = 'pocket';
  const ANALYTICS_POCKETS = require('./analytics/_pockets')({});
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const isNativeIos = CONFIG.nativeIos || false;

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      IOSFixedHeader: true,
      extraHeaderClass: 'bbva-core-blue'
    },
    propertiesSpherica: {
      disableEdgeSwipe: true,
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'spherica-midnight-blue'
    }
  };

  const lifeCycle = {
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
          [PAGE_NAME + '_init_page']: {
            bind: 'init-page'
          },
          [PAGE_NAME + '_reset_page']: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME + '_navigation_pockets_to_previous_page']: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      titleName: 'pockets-pockets',
      className: 'header--core',
      rightIcon: 'coronita:close',
      back: true,
      cellsConnections: {
        out: {
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'header',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };

  const pocketsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-pockets-dm-mx',
    familyPath: 'glomo-pockets-dm',
    properties: {
      host: CONFIG.globalServices.host,
      pocketsApiVersion: CONFIG.globalServices.versions.pockets,
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      isFirstTime: true,
      isSpherica,
      cellsConnections: {
        in: {
          navigation_from_deep_link_to_operations: {
            bind: 'setDeepLinkOperation'
          },
          [PAGE_NAME + '_init_page']: {
            bind: 'init'
          },
          global_account_set_account_for_operations: {
            bind: 'selectedAccount'
          },
          checklist_actions_data_account_selected: {
            bind: 'selectedAccount'
          },
          pocket_native_account: {
            bind: 'selectedAccount'
          },
          blue_redirect_data_account_selected: {
            bind: 'selectedAccount'
          },
          global_financial_overview_details: {
            bind: 'setFinancialOverviewResponse'
          },
          financial_health_push_advice_set_account: {
            bind: 'selectedAccount'
          }
        },
        out: {
          [PRODUCT + '_set_card_advice_configuration']: {
            bind: 'info-modal-open',
            analytics: ANALYTICS_POCKETS.PAGE_VIEW_POCKETS_CREATE
          },
          pockets_is_payroll_account: {
            bind: 'set-is-payroll-account'
          },
          pockets_set_contract_number: {
            bind: 'set-contract-number'
          }
        }
      }
    }
  };

  const cellsCardAdvice = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-card-advice',
    tagSpherica: 'cells-card-advice-spherica',
    properties: {
      className: 'image-m list-icon-message',
      listItemClass: 'cells-card-advice-list-item-pockets',
      btnLabel: 'pockets-continue',
      isBackgroundLight: true,
      cellsConnections: {
        in: {
          [PRODUCT + '_set_card_advice_configuration']: {
            bind: 'setProperties'
          }
        },
        out: {
          navigate_to_pockets_create: {
            bind: 'card-advice-button-click',
            link: {
              page: 'pocketsCreate',
              skipHistory: true
            }
          }
        }
      }
    },
    propertiesSpherica: {
      align: 'center',
      className: 'pockets-card',
      sizeImage: 'XL'
    }
  };

  const base = {
    hash: 'pockets-welcome',
    currentPage: {
      url: '/pockets-welcome',
      params: []
    },
    page,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      cellsCardAdvice,
      pocketsDM
    ]
  };

  return sphericaPageUtils.spherize(base);
};
