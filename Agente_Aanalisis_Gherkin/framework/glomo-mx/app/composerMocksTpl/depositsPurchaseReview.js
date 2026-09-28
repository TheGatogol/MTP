
/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const { getLocalCurrency, getLanguage } = utils;
  const PRODUCT = 'depositsPurchaseReview';
  const pages = require('./common/_pages')(CONFIG)(PRODUCT);
  const IS_NATIVE_IOS  = CONFIG.nativeIos || false;
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const LOCAL_CURRENCY = getLocalCurrency(CONFIG);
  const LANGUAGE = getLanguage(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PRODUCT);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_deposits_purchase_modal_info_ipab_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      delayScrollTop: 300,
      topOnConfirm: true,
      summaryPositionUnset: true,
      disableEdgeSwipe: true,
      animationType: 'verticalUp',
      headerFixed: false,
      extraHeaderClass: 'darker-green-bg',
      iOSFixedHeader: true,
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [PRODUCT + '_INIT_PAGE']: {
            bind: '_resetLayerScroll'
          }
        },
        out: {
          [PRODUCT + 'content-scroll']: {
            bind: 'opx-template-content-scroll'
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: ''
      }
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      cellsConnections: {
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PRODUCT,
      cache: [ '' ],
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${PRODUCT}`]: {
            bind: 'init'
          }
        },
        out: {
          [PRODUCT + '_init_page']: {
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
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      id: 'funds-hiring-header-receipt',
      className: `header--dark-success ${IS_NATIVE_IOS ? 'safe-card-header' : ''}`,
      rightIcon: 'coronita:close',
      titleName: 'glomo-deposits-purchase-sale-title',
      headerFixed: true,
      cellsConnections: {
        in: {
          [PRODUCT + '_BG_HEADER_CLASS']: {
            bind: 'class'
          }
        },
        out: {
          [PRODUCT + '_back_page_page']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      rightIconText: 'bbva-header-main-close-aria-label',
      className: 'header--white'
    }
  };

  const successfulResponse = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    type: 'UI',
    properties: {
      className: 'deposit-hiring-success deposit-success',
      formatDate: utils.getLongFormatDate(),
      cellsConnections: {
        in: {
          [PRODUCT + '_SET_SUCCESS']: {
            bind: 'result'
          },
          [PRODUCT + '_SET_SUCCESS_TYPE']: {
            bind: 'type'
          }
        },
        out: {
          [PRODUCT + '_back_page_button']: {
            bind: 'navigate-to-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          dashboard_pull_to_refresh_start: {
            bind: 'navigate-to-dashboard',
            'forward-to-native': true
          },
          [PRODUCT + '_modal_taxes_info']: {
            bind: 'help-icon-tapped'
          },
          [PRODUCT + '_modal_ipab']: {
            bind: 'on-click-message-secondary'
          }
        }
      }
    },
    propertiesSpherica: {
      disableButtons: true,
      localCurrency: 'USD',
      newCellsConnections: {
        add: {
          out: {
            depositsPurchaseReview_modal_taxes_info_spherica: {
              bind: 'open-icon-help-modal-withouthead'
            },
            depositsPurchaseReview_modal_ipab_spherica: {
              bind: 'on-click-message'
            }
          }
        },
        remove: {
          out: [
            'depositsPurchaseReview_modal_taxes_info',
            'depositsPurchaseReview_modal_ipab'
          ]
        }
      }
    }
  };

  const dmDepositsPurchaseSale = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-deposits-purchase-dm',
    properties: {
      productType: 'depositsPurchase',
      maturityDateFormat: 'YYYY-MM-DD',
      localCurrency: LOCAL_CURRENCY,
      currentLanguage: LANGUAGE,
      helpBtnInfo: true,
      cellsConnections: {
        in: {
          [PRODUCT + '_init_page']: {
            bind: 'init'
          },
          [PRODUCT + '_back_page_page']: {
            bind: 'refreshToDashboard'
          },
          NAVIGATE_TO_REVIEW_DEPOSIT_SUCCESS: {
            bind: 'initSuccessStoreAndForward'
          },
          [PRODUCT + '_modal_taxes_info']: {
            bind: 'modalInfoOfferPage'
          },
          [PRODUCT + '_modal_ipab']: {
            bind: 'modalIpabInfo'
          }
        },
        out: {
          [PRODUCT + '_SET_SUCCESS']: {
            bind: 'deposits-depositsPurchase-success-type'
          },
          [PRODUCT + '_SET_SUCCESS_TYPE']: {
            bind: 'deposits-depositsPurchase-set-success-type'
          },
          [PRODUCT + '_BG_HEADER_CLASS']: {
            bind: 'deposits-depositsPurchase-changed-class'
          },
          global_deposits_purchase_modal_info_ipab: {
            bind: 'modal-info-ipab'
          },
          global_deposits_purchase_review_modal_gat: {
            bind: 'send-info-help-offer-page-modal'
          },
          dashboard_pull_to_refresh_start: {
            bind: 'refresh-deposit-puchase-to-dashboard',
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            depositsPurchaseReview_modal_taxes_info_spherica: {
              bind: 'modalInfoOfferPageSpherica'
            },
            depositsPurchaseReview_modal_ipab_spherica: {
              bind: 'modalIpabInfoSpherica'
            }
          },
          out: {
            global_deposits_purchase_modal_info_ipab_spherica: {
              bind: 'modal-info-ipab'
            },
            global_deposits_purchase_review_modal_gat_spherica: {
              bind: 'send-info-help-offer-page-modal'
            }
          }
        },
        remove: {
          in: [
            'depositsPurchaseReview_modal_taxes_info',
            'depositsPurchaseReview_modal_ipab'
          ],
          out: [
            'global_deposits_purchase_modal_info_ipab',
            'global_deposits_purchase_review_modal_gat',
            'depositsPurchaseReview_BG_HEADER_CLASS'
          ]
        }
      }
    }
  };

  const base = {
    hash: 'mxdepositsPurchaseReview',
    currentPage: {
      url: '/deposits-purchase-review',
      params: []
    },
    pages,
    template,
    components: [
      SPINNER,
      navigationHandler,
      lifeCycle,
      header,
      successfulResponse,
      dmDepositsPurchaseSale
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
