'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const PAGE_NAME = 'ocLoanOfferSuccess';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const {useNames, createPrefixFromPageName} = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const IS_NATIVE_IOS  = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-successful-response-next',
        action: 'exit'
      }
    }
  };


  const template = {
    tag: 'cells-template-coronita',
    tasSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'static',
      drawerWidth: '100%',
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      disableScrollLock: true,
      hasFooter: true,
      footerHeight: 100,
      disableEdgeSwipe: true,
      extraHeaderClass: '',
      iOSFixedHeader: true,
      mode: 'seamed',
      cellsConnections: {
        in: {
          oc_loan_offer_success_review_init_page: {
            bind: 'recalculateHeader'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'resetLayerScroll'
          }
        },
        out: {
        }
      }
    },
    propertiesSpherica: {
      footerHeight: 0
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          set_oc_loan_offer_success_page_header_title_name: {
            bind: 'titleName'
          },
          set_oc_loan_offer_success_page_header_class_name: {
            bind: 'class'
          }
        },
        out: {
          [getChannelName('set_exit_operative')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      secondaryClass: '',
      className: 'header--white header',
      rightIcon: 'coronita:close',
      rightIconText: 'bbva-header-main-close-aria-label',
      rightIconSize: '24',
      rightSecondaryIcon: 'coronita:telephone',
      rightIconSecondaryText: 'bbva-header-main-help-aria-label',
      rightSecondaryIconSize: '24',
      setTimeoutHideTooltip: '1000',
      titleName: 'instant-cash-header-title'
    }
  };

  const navigationHabdler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'close-oc-loan-offer-operative',
      cellsConnections: {
        in: {
          [getChannelName('set_exit_operative')]: {
            bind: 'goBack'
          },
          set_oc_loan_offer_success_page_back_navigation: {
            bind: 'backAction'
          }
        },
        out: {
          global_exit_oc_loan_offer: {
            bind: 'close-oc-loan-offer-operative',
            backStep: true,
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    }
  };

  const receipt = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    type: 'UI',
    properties: {
      localCurrency: utils.getLocalCurrency(CONFIG),
      formatDate: 'DD MMMM YYYY, hh:mm [h]',
      language: utils.getLanguage(CONFIG),
      showPayedAmountAsMainAmount: true,
      disableButtons: true,
      cellsConnections: {
        in: {
          set_oc_loan_offer_success_page_result: {
            bind: 'result'
          },
          set_oc_loan_offer_success_page_type: {
            bind: 'type'
          },
          set_oc_loan_offer_success_page_class_name: {
            bind: 'class'
          }
        },
        out: {
          [getChannelName('reset_scroll')]: {
            bind: 'reset-layer-scroll'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'demo',
      language: 'en',
      showPayedAmountAsMainAmount: false,
      localCurrency: ''
    }
  };

  const confirmBtn = {
    zone: 'app__footer',
    tag: 'cells-confirm-buttons',
    tagSpherica: 'cells-confirm-buttons-spherica',
    properties: {
      className: 'no-shadow',
      config: configButtons,
      cellsConnections: {
        in: {
        },
        out: {
          [getChannelName('set_exit_operative')]: {
            bind: 'cells-confirm-buttons-click-primary'
          },
          financial_overview_refresh: {
            bind: 'cells-confirm-buttons-click-primary'
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/oc-loan-offer-success',
      params: []
    },
    pages: pages,
    template,
    components: [
      SPINNER,
      header,
      receipt,
      navigationHabdler
    ]
  };

  if (!sphericaPageUtils.isSpherica()) {
    base.components.push(confirmBtn);
  }
  return sphericaPageUtils.spherize(base);
};
