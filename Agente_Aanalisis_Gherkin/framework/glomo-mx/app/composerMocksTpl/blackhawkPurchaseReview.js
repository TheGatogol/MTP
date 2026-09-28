/* eslint-disable no-shadow */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const LANGUAGE = utils.getLanguage(CONFIG);
  const COUNTRY = utils.getCountry(CONFIG);
  const {useNames, createPrefixFromPageName} = utils;
  const PAGE_NAME = 'blackhawkPurchaseReview';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();
  const getLocalePrefix = name => `glomo-${getLocaleName(name)}`;
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const isEnvironmentDev = CONFIG.environment;
  const DATE_TIME_FORMAT = utils.getMediumFormatDate();
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const ANALYTICS = require('./analytics/_blackhawkReview')(CONFIG);

  const modalPurchaseReviewItems = {
    'open-modal-navigation': {
      code: 'open-modal-navigation',
      maximize: false,
      className: 'error',
      acceptBtLabel: 'glomo-gift-card-brand-confirm-button',
      cancelBtLabel: getLocalePrefix('go-back-btn'),
      values: [
        { icon: 'coronita:alert', iconClass: 'icon-size-24', class: 'info'},
        { text: 'glomo-blackhawk-purchase-review-navigate-bhsite', class: 'text-center title-grey'}
      ]
    },
    'open-modal-confirm-exit-review': {
      code: 'open-modal-confirm-exit-review',
      maximize: false,
      className: 'error',
      acceptBtLabel: getLocalePrefix('got-out-btn'),
      cancelBtLabel: getLocalePrefix('go-back-btn'),
      values: [
        { icon: 'coronita:alert', iconClass: 'icon-size-24', class: 'info'},
        { text: 'glomo-blackhawk-purchase-review-confirm-exit-review', class: 'text-center title-grey'}
      ]
    }
  };
  const modalPurchaseReviewItemsSpherica = {
    'open-modal-navigation': {
      code: 'open-modal-navigation',
      maximize: false,
      className: 'caution',
      title: 'glomo-gift-card-purchase-detail-title-card-activation',
      acceptBtLabel: 'glomo-gift-card-brand-confirm-button',
      cancelBtLabel: 'glomo-blackhawk-purchase-review-go-back-btn-spherica',
      closeOnPrimaryButton: true,
      hideCloseIcon: false,
      iconOnlyFullHeight: false,
      disableDivider: true,
      iOSFixedHeader: true,
      values: [
        { icon: 'coronita:caution', iconClass: 'icon-size-24' },
        { text: 'glomo-blackhawk-purchase-review-navigate-bhsite', class: 'text-center title-grey'}
      ]
    },
    'open-modal-confirm-exit-review': {
      code: 'open-modal-confirm-exit-review',
      maximize: false,
      className: 'caution',
      title: 'glomo-blackhawk-purchase-review-got-out-btn',
      acceptBtLabel: 'glomo-blackhawk-purchase-review-got-out-btn',
      cancelBtLabel: 'glomo-blackhawk-purchase-review-go-back-btn-spherica',
      hideCloseIcon: false,
      iconOnlyFullHeight: false,
      disableDivider: true,
      iOSFixedHeader: true,
      values: [
        { icon: 'coronita:caution', iconClass: 'icon-size-24' },
        { title: 'glomo-facial-recognition-back-to-login-modal-title-message-modal' },
        { text: 'glomo-blackhawk-purchase-review-confirm-exit-review', class: 'text-center title-grey'}
      ]
    }
  };
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-info-modal'
          }
        },
        out: {
          global_blackhawk_purchase_review_accept_blackhawk_page: {
            bind: 'alert-open-modal-navigation-accept'
          },
          global_blackhawk_purchase_review_exit_review: {
            bind: 'alert-open-modal-confirm-exit-review-accept'
          }
        }
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [getGlobalName('init_channel')]: {
            bind: 'recalculateHeader'
          }
        },
        out: {
          [getGlobalName('scroll_complete')]: {
            bind: 'template-content-scroll-final'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
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
          [getGlobalName('init_channel')]: {
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
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          [getGlobalName('exit_review')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getGlobalName('exit_complete_review')]: {
            bind: 'header-right-button',
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
      className: 'header--dark-success',
      secondaryClass: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'glomo-blackhawk-welcome-title-header',
      cellsConnections: {
        out: {
          [getGlobalName('open_modal_confirm_exit')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      titleName: 'glomo-blackhawk-welcome-title-header',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };
  const blackHawkPurchaseReviewDM = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-gift-card-manager',
    tag: 'glomo-gift-card-manager-purchase-review-mx',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      scrollStatusSucces: 800,
      modalRechargeItems: modalPurchaseReviewItems,
      cellsConnections: {
        in: {
          [getGlobalName('init_channel')]: {
            bind: 'change-data-pressed'
          },
          [getGlobalName('open_modal_navigation')]: {
            bind: 'openModalNavigation'
          },
          global_blackhawk_purchase_detail_data_navigation_send: {
            bind: 'linkInformation'
          },
          global_blackhawk_purchase_detail_card_id: {
            bind: 'idCARD'
          },
          [getGlobalName('accept_blackhawk_page')]: {
            bind: 'setLinkBlackhawkGlobal'
          },
          [getGlobalName('open_modal_confirm_exit')]: {
            bind: 'modalConfirmExitReview'
          },
          [getGlobalName('scroll_complete')]: {
            bind: 'scrollCompleteSuccess'
          },
          global_blackhawk_purchase_detail_set_successfull_data: {
            bind: 'parseResultInfo'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'open-info-modal'
          },
          global_action_launcher_uri: {
            bind: 'navigation-to-blackhawk-page',
            'forward-to-native': true
          },
          [getGlobalName('set_info_to_share')]: {
            bind: 'set-info-to-share'
          },
          [getGlobalName('fire_external_link_analytics')]: {
            bind: 'fire-external-link-analytics'
          },
          global_download_channel: {
            bind: 'operation-clicked-share'
          },
          logout_success: {
            bind: 'global-logout-success',
            'forward-to-native': true
          }
        }
      }
    },
    propertiesSpherica: {
      modalRechargeItems: modalPurchaseReviewItemsSpherica,
      isSpherica,
      newCellsConnections: {
        add: {
          in: {
            global_blackhawk_purchase_detail_data_navigation_send_spherica: {
              bind: 'linkInformation'
            }
          },
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-info-modal'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings',
            'global_blackhawk_purchase_detail_data_navigation_send'
          ]
        }
      }
    }
  };
  const blackHawkPurchaseReview = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      className: 'relative-button',
      localCurrency: utils.getLocalCurrency(CONFIG),
      formatDate: DATE_TIME_FORMAT,
      language: utils.getLanguage(CONFIG),
      isStickyButton: 'no-fixed',
      cellsConnections: {
        in: {
          global_blackhawk_purchase_detail_set_successfull_data: {
            bind: 'result'
          }
        },
        out: {
          [getGlobalName('open_modal_confirm_exit')]: {
            bind: 'go-to-next'
          },
          [getGlobalName('open_modal_navigation')]: {
            bind: 'on-click-message'
          },
          [getGlobalName('operation_click_share')]: {
            bind: 'share-receipt-capture'
          }
        }
      }
    },
    propertiesSpherica: {
      operationListClass: 'centered-items',
      extraButtonClass: 'centered-items',
      disableButtons: true,
      className: 'centered-items'
    }
  };
  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: COUNTRY,
      language: LANGUAGE,
      formatDate: DATE_TIME_FORMAT,
      sharedReceiptStyles: {
        receiptTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        info: {
          'padding': '0px',
          'margin-top': '2px',
          'background-color': 'none'
        },
        infoIcon: {
          'display': 'none'
        },
        infoMessage: {
          'font-weight': '100',
          'margin': '0px',
          'font-size': 'var(--cells-text-size-12, 12px)',
          'text-align': 'left',
          'background-color': 'none',
          'color': 'var(--bbva-500, #666666)'
        }
      },
      cellsConnections: {
        in: {
          [getGlobalName('operation_click_share')]: {
            bind: 'captureReceipt'
          },
          [getGlobalName('set_info_to_share')]: {
            bind: 'result'
          },
          mobile_manage_operation: {
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
          }
        }
      }
    }
  };
  const analyticsBlackhawkPurchaseReview = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-gift-card-manager-review',
    familyPath: '@glomo-web-components/glomo-analytics-gift-card-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('open_modal_navigation')]: {
            bind: 'firePageView'
          },
          [getGlobalName('fire_external_link_analytics')]: {
            bind: 'externalLink'
          }
        },
        out: {
          [getGlobalName('analytics_page_view_logout_modal')]: {
            bind: 'analytics-page-view',
            analytics: ANALYTICS.PAGE_VIEW
          },
          [getGlobalName('analytics_external_link_view')]: {
            bind: 'analytics-external-link',
            analytics: ANALYTICS.EXTERNAL_LINK
          }
        }
      }
    }
  };
  if (isEnvironmentDev === 'de') {
    blackHawkPurchaseReviewDM.properties.urlBaseRedeem = 'https://bbva.redeem.com.mx/mxbbvaredeem-test/';
  }
  const base = {
    hash: 'blackhawk-purchase-review',
    currentPage: {
      url: '/blackhawk-purchase-review'
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      blackHawkPurchaseReview,
      blackHawkPurchaseReviewDM,
      shareReceipt,
      analyticsBlackhawkPurchaseReview
    ]
  };
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
