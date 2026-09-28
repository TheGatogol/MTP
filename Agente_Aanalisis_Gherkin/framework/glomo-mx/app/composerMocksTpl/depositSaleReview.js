/* eslint-disable new-cap, no-shadow */
'use strict';

const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');

const { createPrefixFromPageName, getLanguage, getLocalCurrency, getCountry, useNames, SPINNER } = utils;
const PAGE_NAME = 'depositSaleReview';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

module.exports = config => {

  const country = getCountry(config);
  const depositSaleReview = page(config)(PAGE_NAME);
  const LOCAL_CURRENCY = getLocalCurrency(config);
  const LANGUAGE = utils.getLanguage(config);
  const isNativeIos = config.nativeIos || false;
  const spinner = SPINNER(config);

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      mode: 'seamed',
      disableEdgeSwipe: true,
      animationType: 'verticalUp',
      className: isNativeIos ? 'ios-top-padding' : ''
    }
  };

  const handleLifeCycle =  {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: config.globalServices.requiredToken || 'tsec',
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
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--dark-success',
      rightIcon: 'coronita:close',
      rightIconSize: '20',
      titleName: 'glomo-deposit-sale-header-title',
      cellsConnections: {
        in: {
          [getChannelName('BG_HEADER_CLASS')]: {
            bind: 'class'
          }
        },
        out: {
          dashboard_pull_to_refresh_start: {
            bind: 'click-right-button',
            backStep: true,
            link: {
              page: 'dashboard'
            }
          },
          global_deposit_sale_success: {
            bind: 'click-right-button',
            'forward-to-native': true
          },
          global_transactions_sale_success: {
            bind: 'click-right-button',
            'forward-to-native': true
          },
          global_refresh_dashboard_generic: {
            bind: 'click-right-button',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const success = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      className: 'deposit-hiring-success deposit-success',
      formatDate: 'DD MMMM YYYY, HH:mm [h]',
      localCurrency: LOCAL_CURRENCY,
      type: 'core',
      cellsConnections: {
        in: {
          [getChannelName('deposit_sale_success_data')]: {
            bind: 'result'
          },
          [getChannelName('SET_SUCCESS_TYPE')]: {
            bind: 'type'
          }
        },
        out: {
          dashboard_pull_to_refresh_start: {
            bind: 'cells-successful-response-click-primary',
            backStep: true,
            link: {
              page: 'dashboard'
            }
          },
          global_deposit_product_detail_reset_page: {
            bind: 'cells-successful-response-click-primary',
            'forward-to-native': true
          },
          global_transactions_sale_success: {
            bind: 'cells-successful-response-click-primary',
            'forward-to-native': true
          },
          global_refresh_dashboard_generic: {
            bind: 'cells-successful-response-click-primary',
            'forward-to-native': true
          }
        }
      }
    }
  };


  const depositSaleDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-deposits-sale-dm-mx',
    familyPath: 'glomo-deposits-sale-dm',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      currentLanguage: LANGUAGE,
      productType: PAGE_NAME,
      maturityDateFormat: 'DD MMMM, YYYY',
      cellsConnections: {
        in: {
          SHOW_DEPOSITS_SALE_NAVIGATION_TO_SUCCESS: {
            bind: 'initDepositSaleSuccessPage'
          }
        },
        out: {
          [getChannelName('deposit_sale_success_data')]: {
            bind: 'set-deposit-sale-success-data'
          },
          [getChannelName('SET_SUCCESS_TYPE')]: {
            bind: 'set-success-type'
          },
          [getChannelName('BG_HEADER_CLASS')]: {
            bind: 'header-class-changed'
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

  /* base */
  const base = {
    hash: country + '-deposit-sale-review',
    currentPage: {
      url: '/deposit-sale-review',
      params: []
    },
    pages: depositSaleReview,
    template,
    components: [
      spinner,
      handleLifeCycle,
      header,
      success,
      depositSaleDm
    ]
  };

  return base;
};
