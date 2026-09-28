'use strict';

module.exports = CONFIG => {
  const {
    nativeIos,
    globalServices: {
      requiredToken = 'tsec'
    }
  } = CONFIG;
  const pageName = 'fundContractedDetail';
  const utils = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const { getCountry, getLocalCurrency, useNames, getLanguage } = utils;
  const toUnderscoreCase = (string) => string.replace(/(?:^|\.?)([A-Z])/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '');
  const country = getCountry(CONFIG);
  const localCurrency = getLocalCurrency(CONFIG);
  const language = getLanguage(CONFIG);// eslint-disable-next-line new-cap
  const spinner = utils.SPINNER(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const operativePrefix = toUnderscoreCase(pageName).toUpperCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const analytics = require('./analytics/_fundContractedDetail')(CONFIG);
  const isSpherica = sphericaPageUtils.isSpherica();
  const extraHeaderClass = isSpherica ? '' : 'dark-blue-bg';

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      animationType: 'horizontal',
      preventScrollWithOverlay: true,
      extraHeaderClass,
      headerHeight: utils.headerHeight,
      className: nativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {},
        out: {}
      }
    },
    propertiesSpherica: {
      className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`
    }
  };

  // eslint-disable-next-line no-unused-vars
  const fundContractedDetailAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-generic-manager',
    properties: {
      cellsConnections: {
        in: {
          __bridge_page_fundContractedDetail: {
            bind: 'firePageVisit'
          }
        },
        out: {
          [getChannelName('ANALYTICS_PAGE_VIEW_PRODUCT_DETAIL')]: {
            bind: 'analytics-page-visit',
            analytics: analytics.viewFundDetail
          }
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_fundContractedDetail: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('INIT_PAGE')]: {
            bind: 'init-page'
          },
          close_control_veil: {
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
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    type: 'UI',
    properties: {
      className: 'header--dark',
      leftIcon: 'coronita:return-12',
      titleName: 'funds-list-detail-header-title',
      cellsConnections: {
        in: {},
        out: {
          [getChannelName('EXIT')]: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--core-grey',
      variant: 'primary-alt',
      leftIcon: 'coronita:back-mini',
      leftIconText: 'cells-molecule-header-spherica-back'
    }
  };

  const fundsContractedListDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-funds-list-detail-manager-mx',
    familyPath: 'glomo-funds-list-detail-manager',
    properties: {
      language,
      localCurrency,
      forceOperatives: true,
      isSpherica,
      cellsConnections: {
        in: {
          [getChannelName('SHOW_TOOLTIP')]: {
            bind: 'showTooltip'
          },
          FUND_FUNDS_OPERATION_DATA: {
            bind: 'fundOperations'
          },
          [getChannelName('CONTRIBUTION_WITHDRAWAL')]: {
            bind: 'generateContributionWithdrawalObj'
          }
        },
        out: {
          [getChannelName('SHOW_TOOLTIP_MESSAGE')]: {
            bind: 'funds-list-detail-show-tooltip-message'
          },
          [getChannelName('SHOW_CONTRIBUTION_FLOW')]: {
            bind: 'funds-list-detail-show-contribution-section',
            link: {
              page: 'fundsContribution'
            }
          },
          [getChannelName('SHOW_WITHDRAWAL_FLOW')]: {
            bind: 'funds-list-detail-show-withdrawal-section',
            link: {
              page: 'fundsWithdrawal'
            }
          }
        }
      }
    }
  };

  const productSummary = {
    zone: 'app__main',
    tag: 'cells-product-summary',
    tagSpherica: 'cells-product-summary-spherica',
    type: 'UI',
    properties: {
      className: 'fund-contracted-detail full-width',
      hideMoreInfoButton: true,
      cellsConnections: {
        in: {
          FUND_FUNDS_SUMMARY_DETAIL_MORE_INFO: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('SHOW_TOOLTIP')]: {
            bind: 'cells-product-summary-optional-items-key-icon'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'fund-contracted-detail-spherica full-width primary-alt'
    }
  };

  const productActions = {
    zone: 'app__main',
    tag: 'cells-operations-list',
    tagSpherica: 'cells-operations-list-spherica',
    type: 'UI',
    properties: {
      className: 'fund-contracted-detail',
      cellsConnections: {
        in: {
          FUND_FUNDS_ACTIVE_CONTRIBUTION_WITHDRAWAL: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('CONTRIBUTION_WITHDRAWAL')]: {
            bind: 'operation-click'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'full-width list-start',
      variant: 'primary'
    }
  };

  const productMoreInfo = {
    zone: 'app__main',
    tag: 'cells-product-more-info',
    tagSpherica: 'cells-product-more-info-spherica',
    type: 'UI',
    properties: {
      className: 'fund-contracted-detail cells-product-more-info',
      cellsConnections: {
        in: {
          FUND_FUNDS_PRODUCT_DETAIL_MORE_INFO: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('COPY_ACCOUNT')]: {
            bind: 'cells-product-more-info-button-click'
          },
          [getChannelName('SHOW_TOOLTIP')]: {
            bind: 'cells-product-more-info-help-click'
          }
        }
      }
    },
    propertiesSpherica: {
      extraClassName: 'fund-contracted-detail-spherica'
    }
  };

  const clipboardManager = {
    zone: 'app__main',
    tag: 'cells-clipboard-manager',
    tagSpherica: 'cells-clipboard-manager-spherica',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('COPY_ACCOUNT')]: {
            bind: 'text'
          }
        },
        out: {
          [getChannelName('SUCCESS_COPY_ACCOUNT')]: {
            bind: 'text-copied'
          }
        }
      }
    }
  };

  const customAlertManager = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'glomo-alert-manager',
    tagSpherica: 'glomo-alert-manager-spherica',
    properties: {
      className: 'fund-contracted-detail-p-margin',
      cellsConnections: {
        in: {
          [getChannelName('SHOW_TOOLTIP_MESSAGE')]: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  const toastAlert = {
    zone: 'app__footer',
    tag: 'cells-modal-alert',
    tagSpherica: 'cells-modal-alert-spherica',
    type: 'UI',
    properties: {
      toast: true,
      successToastPadding: true,
      className: 'dark-success',
      icon: 'coronita:right',
      type: 'success',
      content: 'cells-product-more-info-contact-title-copy',
      cellsConnections: {
        in: {
          [getChannelName('SUCCESS_COPY_ACCOUNT')]: {
            bind: 'open'
          }
        }
      }
    }
  };

  const base = {
    hash: country + 'fund-contracted-detail',
    currentPage: {
      url: '/fund-contracted-detail',
      params: []
    },
    pages: pages,
    template,
    components: [
      spinner,
      lifeCycle,
      header,
      productSummary,
      productActions,
      productMoreInfo,
      clipboardManager,
      toastAlert,
      fundsContractedListDM,
      customAlertManager
    ]
  };

  return sphericaPageUtils.spherize(base);
};
