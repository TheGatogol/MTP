/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const UTILS = require('./common/helpers/_utils');
  const PAGE = require('./common/_pages');
  const { useNames, createPrefixFromPageName } = UTILS;
  const PAGE_NAME = 'refundsReview';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const REFUNDS_REVIEW = PAGE(CONFIG)(PAGE_NAME);
  const SPINNER = UTILS.SPINNER(CONFIG);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const LOCAL_CURRENCY = UTILS.getLocalCurrency(CONFIG);
  const VISIBLE_CHARS = UTILS.getVisibleChars(CONFIG);
  const ANALYTICS = require('./analytics/_refunds')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };

  let BASE = {
    hash: 'refundsReview',
    currentPage: {
      url: '/refundsReview'
    },
    pages: REFUNDS_REVIEW,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: IS_NATIVE_IOS ? 'ios-top-padding bg-core-blue header-fixed' : ' bg-core-blue header-fixed'
      },
      propertiesSpherica: {
        className: `${IS_NATIVE_IOS ? 'ios-top-padding ' : ''} header-fixed`
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
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
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('_INIT_PAGE')]: {
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
          className: 'header--dark-success',
          rightIcon: 'coronita:close',
          titleName: 'transfer-refunds-spei-main-title',
          cellsConnections: {
            out: {
              [getChannelName('_EXIT_BUTTON')]: {
                bind: 'click-right-button',
                link: {
                  page: 'dashboard',
                  skipHistory: true
                }
              },
              dashboard_refresh_financial_overview: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: '',
          variant: 'primary',
          rightIconText: 'transfer-refunds-spei-header-close-spherica'
        }
      }
    ]
  };

  const UI = [
    {
      zone: 'app__main',
      tag: 'cells-successful-response',
      tagSpherica: 'cells-successful-response-spherica',
      type: 'UI',
      properties: {
        id: 'refundsReview',
        className: 'common-transfer-data',
        formatDate: 'DD MMMM YYYY, hh:mm [h]',
        isStickyButton: '',
        localCurrency: LOCAL_CURRENCY,
        visibleChars: VISIBLE_CHARS,
        showCustomBaseCurrencyMsg: true,
        cellsConnections: {
          in: {
            GO_TO_SECCESSFUL_REFUNDS_RESPONSE: {
              bind: 'result'
            },
            [getChannelName('_EXIT_BUTTON')]: {
              bind: 'reset'
            }
          },
          out: {
            [getChannelName('_EXIT_BUTTON')]: {
              bind: 'go-to-next',
              link: {
                page: 'dashboard',
                skipHistory: true
              }
            },
            dashboard_refresh_financial_overview: {
              bind: 'go-to-next'
            },
            [getChannelName('_SHARE_RECEIPT_CAPTURE')]: {
              bind: 'share-receipt-capture'
            }
          }
        }
      },
      propertiesSpherica: {
        disableButtons: true,
        operationListClass: 'centered-items',
        className: ''
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-share-generic-receipt',
      tagSpherica: 'cells-share-generic-receipt-spherica',
      familyPath: 'cells-share-operative-receipt',
      familyPathSpherica: 'cells-share-operative-receipt-spherica',
      type: 'UI',
      properties: {
        country: 'mx',
        language: 'es-MX',
        localCurrency: LOCAL_CURRENCY,
        dateFormat: 'DD MMMM YYYY',
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
            [getChannelName('_SHARE_RECEIPT_CAPTURE')]: {
              bind: 'captureReceipt'
            },
            [ getChannelName('_REFUND_RECEIPT_INFO')]: {
              bind: 'result'
            },
            [getChannelName('_EXIT_BUTTON')]: {
              bind: 'reset'
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
    }
  ];

  const DMS = [
    {
      zone: 'app__transactional',
      type: 'DM',
      tag: 'glomo-refund-transfer-manager-mx',
      familyPath: 'glomo-refund-transfer-manager',
      properties: {
        cellsConnections: {
          in: {
            global_account_set_account_for_operations: {
              bind: 'accountInformation'
            },
            navigation_to_refunds: {
              bind: 'refundData'
            },
            REFUNDS_RESPONSE_SUCCESS: {
              bind: 'serviceResponse'
            },
            [getChannelName('_INIT_PAGE')]: {
              bind: 'shareReceipt'
            },
            __bridge_cancelled_back_navigation: {
              bind: 'goBack'
            }
          },
          out: {
            [ getChannelName('_REFUND_RECEIPT_INFO')]: {
              bind: 'share-refund-receipt'
            },
            refunds_review__EXIT_TO_DASHBOARD: {
              bind: 'navigation-to-dashboard',
              link: {
                page: 'dashboard'
              },
              skipHistory: true
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-analytics-refund-transfer-manager-mx',
      familyPath: 'glomo-refund-transfer-manager',
      properties: {
        cellsConnections: {
          in: {
            global_account_set_account_for_operations: {
              bind: 'accountInformation'
            },
            navigation_to_refunds: {
              bind: 'refundData'
            },
            REFUNDS_RESPONSE_SUCCESS: {
              bind: 'serviceResponse'
            },
            [getChannelName('_INIT_PAGE')]: {
              bind: 'appCompleted'
            },
            [getChannelName('_EXIT_BUTTON')]: {
              bind: 'reset'
            }
          },
          out: {
            [getChannelName('APP_COMPLETED')]: {
              bind: 'analytics-app-completed',
              analytics: ANALYTICS.APP_COMPLETED('pagina exitosa', 'finalizado'),
              featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
            }
          }
        }
      }
    }
  ];
  BASE.components.push(...UI, ...DMS);
  return sphericaPageUtils.spherize(BASE);
};