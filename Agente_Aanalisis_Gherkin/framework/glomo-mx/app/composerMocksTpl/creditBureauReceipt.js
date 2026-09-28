/* eslint-disable no-shadow */
'use strict';

const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');

const { useNames, toUnderscoreCase } = utils;

const PAGE_NAME = 'creditBureauReceipt';
const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
const localName = name => getLocaleName(name).toLowerCase();
const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();

module.exports = CONFIG => {

  const pages = page(CONFIG)(PAGE_NAME);
  const TOKEN = CONFIG.globalServices.requiredToken;
  const isNativeIos = CONFIG.nativeIos || false;
  const LANGUAGE = utils.getLanguage(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      animationType: 'verticalUp',
      preventScrollWithOverlay: true,
      extraHeaderClass: 'dark-blue-bg',
      headerHeight: utils.headerHeight,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {},
        out: {}
      }
    },
    propertiesSpherica: {
      extraHeaderClass: ''
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: TOKEN || 'tsec',
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
          },
          [getChannelName('go_back_navigation')]: {
            bind: 'reset'
          },
          [getChannelName('exit_receipt')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('init_page')]: {
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
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'exit',
      cellsConnections: {
        in: {
          [getChannelName('reset_page')]: {
            bind: 'navigate'
          }
        },
        out: {
          CREDIT_BUREAU_RECEIPT_TO_EXIT: {
            bind: 'navigation-to-exit',
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
      id: `header-${localName('receipt')}`,
      className: `header--core credit-bureau-header ${ isNativeIos ? 'ios-top-padding' : ''}`,
      rightIcon: 'coronita:close',
      titleName: 'credit-bureau-offer-page-header',
      cellsConnections: {
        in: {},
        out: {
          [getChannelName('go_back_navigation')]: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };

  const receipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      withoutHead: true,
      language: 'ES',
      extraHeadClass: 'head-icon-white-extra-class',
      formatDate: 'DD MMMM YYYY hh:mm[h]',
      id: `step-${localName('receipt')}`,
      className: 'successful-response-peer-to-peer-onboarding',
      cellsConnections: {
        in: {
          navigate_to_credit_bureau_receipt: {
            bind: 'result'
          }
        },
        out: {
          credit_bureau_review_share_receipt: {
            bind: 'share-receipt-capture'
          },
          [getChannelName('exit_receipt')]: {
            bind: 'go-to-next'
          },
          [getChannelName('go_back_navigation')]: {
            bind: 'cells-successful-response-click-primary',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      withoutHead: false,
      extraHeaderClass: '',
      className: 'equity-contracts centered-operation-list',
      disableButtons: 'true'
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: CONFIG.lang,
      country: 'mx',
      cellsConnections: {
        in: {
          navigate_to_credit_bureau_receipt: {
            bind: 'result'
          },
          credit_bureau_review_share_receipt: {
            bind: 'captureReceipt'
          },
          credit_bureau_init_page: {
            bind: 'reset'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_share_receipt_error_modal: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const base = {
    hash: +'credit-bureau-receipt',
    currentPage: {
      url: '/credit-bureau-receipt',
      params: []
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      receipt,
      cellsShareGenericReceipt
    ]
  };

  return sphericaPageUtils.spherize(base);
};