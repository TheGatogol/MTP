/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'pocketsMovementsList';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

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
      className: 'header--core',
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          pockets_set_header_title: {
            bind: 'titleName'
          }
        },
        out: {
          pockets_movements_list_close_modal: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      className: 'header--core-grey',
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
      cellsConnections: {
        in: {
          pocket_set_heading: {
            bind: 'pocketName'
          },
          [PAGE_NAME + '_init_page']: {
            bind: 'setMovementsHeading'
          },
          pocket_set_operations: {
            bind: 'initMovementsList'
          }
        },
        out: {
          pockets_set_full_operations: {
            bind: 'set-full-operations'
          },
          pockets_set_header_title: {
            bind: 'set-header-operations'
          }
        }
      }
    }
  };

  const cellsTransactionsList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-transactions-list',
    tagSpherica: 'cells-transactions-list-spherica',
    properties: {
      className: 'move-list-wrapper no-link',
      groupTransactionsClass: 'move-list-wrapper wrapper-list-item',
      hideRetryLoadTransactionsButton: true,
      localCurrency: LOCAL_CURRENCY,
      continue: PAGE_NAME,
      transactionGroupDateFormat: utils.getShortFormatDate(),
      transactionCurrentYearDateFormat: utils.getShortFormatDate(),
      skeletonItems: 5,
      hidePendings: true,
      imageEmptyList: './images/savings/empty_state_day.svg',
      cellsConnections: {
        in: {
          pockets_set_full_operations: {
            bind: 'transactions'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'savings-card',
      descriptionMaxLines: 2
    }
  };

  const base = {
    hash: 'pockets-movements-list',
    currentPage: {
      url: '/pockets-movements-list',
      params: []
    },
    page,
    template,
    components: [
      cellsTransactionsList,
      lifeCycle,
      navigationHandler,
      header,
      pocketsDM
    ]
  };

  return sphericaPageUtils.spherize(base);
};
