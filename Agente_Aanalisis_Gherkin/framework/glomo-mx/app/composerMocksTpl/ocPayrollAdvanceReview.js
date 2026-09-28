'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const { SPINNER: getSpinner } = utils;
  const PAGE_NAME = 'ocPayrollAdvanceReview';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const { useNames, createPrefixFromPageName } = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName('ocPayrollAdvancePage');
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const IS_NATIVE_IOS  = CONFIG.nativeIos || false;
  const spinner = getSpinner(CONFIG);

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-successful-response-next',
        action: 'exit'
      }
    }
  };

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      animationType: 'static',
      drawerWidth: '100%',
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      disableScrollLock: true,
      headerFixed: true,
      hasFooter: true,
      footerHeight: 100,
      disableEdgeSwipe: true,
      extraHeaderClass: 'light-green-bg',
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
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--dark-success',
      rightIcon: 'coronita:close',
      titleName: 'oc-payroll-advance-page-header-title',
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
    propertiesSpherica: sphericaPageUtils.getProperties({
      className: `header--core ${IS_NATIVE_IOS ? 'ios-top-padding' : ''}`,
      componentName: 'cells-molecule-header-spherica',
      type: 'modal',
      override: {
        rightSecondaryIcon: 'coronita:telephone',
        rightSecondaryIconSize: '24',
        rightIconSecondaryText: 'oc-payroll-advance-page-help',
        cellsConnections: {
          out: {
            oc_payroll_advance_page_back_button: {
              bind: 'click-right-button'
            }
          }
        }
      }
    })
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
          global_exit_oc_payroll_advance: {
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
      laanguage: utils.getLanguage(CONFIG),

      // showPayedAmountAsMainAmount: true,
      disableButtons: true,
      cellsConnections: {
        in: {
          set_payroll_success_page_result: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('reset_scroll')]: {
            bind: 'reset-layer-scroll'
          }
        }
      }
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
      url: '/oc-payroll-advance-review',
      params: []
    },
    pages: pages,
    template,
    components: [
      spinner,
      navigationHabdler,
      header,
      receipt,
      confirmBtn
    ]
  };

  return sphericaPageUtils.spherize(base);
};
