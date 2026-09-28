'use strict';

module.exports = (CONFIG) => {
  const PAGE_NAME = 'internationalRefundsReceipt';
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME_UNDERSCORED = utils.toUnderscoreCase(PAGE_NAME);
  const [ getChannelName ] = utils.useNames(PAGE_NAME_UNDERSCORED);
  const LOCAL_CURRENCY = 'MXN';
  const LANGUAGE = 'es-MX';
  // eslint-disable-next-line new-cap
  const ANALYTICS = require('./analytics/_internationalRefunds')();
  const isNativeIOS = CONFIG.nativeIos;

  const receiptItems = [
    'Amount',
    'OriginAccount',
    'Sender',
    'ReceiverAccount',
    'Status',
    'OperationDate',
    'OperationHour',
    'RelationshipToSender',
    'ReasonForTransfer',
    'LocalEconomicActivity',
    'ForeignEconomicActivity',
    'OperationType'
  ];

  const base = {
    hash: 'mx-international-refunds-receipt',
    currentPage: {
      url: '/international-refunds-receipt'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIOS,
        animationType: 'verticalUp',
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [getChannelName('init_page')]: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          cache: [ '' ],
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
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
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          rightIcon: 'coronita:close',
          titleName: 'glomo-international-refunds-header-title',
          className: 'header--evening',
          cellsConnections: {
            out: {
              [getChannelName('exit')]: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        properties: {
          visibleChars: 4,
          localCurrency: LOCAL_CURRENCY,
          language: LANGUAGE,
          isStickyButton: true,
          className: 'no-background-avatar not-scroll-sticky',
          formatDate: 'DD MMMM YYYY, hh:mm',
          cellsConnections: {
            in: {
              INTERNATIONAL_REFUNDS_REVIEW_RECEIPT: {
                bind: 'result'
              }
            },
            out: {
              [getChannelName('exit')]: {
                bind: 'cells-successful-response-click-primary'
              },
              [getChannelName('share-receipt')]: {
                bind: 'share-receipt-capture'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigate-to-international-transfers-panel',
          currentPage: 'internationalRefundsReceipt',
          cellsConnections: {
            in: {
              [getChannelName('exit')]: {
                bind: 'goBack'
              }
            },
            out: {
              [getChannelName('navigate_to_international_transfers_panel')]: {
                bind: 'navigate-to-international-transfers-panel',
                link: {
                  page: 'internationalTransfersPanel',
                  cleanUntil: 'internationalTransfersPanel'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-manager-international-refunds',
        tag: 'bbva-manager-international-refunds-mx',
        render: 'litElement',
        properties: {
          receiptItems,
          cellsConnections: {
            in: {
              international_refunds_receipt_data: {
                bind: 'initReceiptRefunds'
              },
              [getChannelName('share-receipt')]: {
                bind: 'shareReceipt'
              }
            },
            out: {
              [getChannelName('receipt_template')]: {
                bind: 'receipt-template'
              },
              [getChannelName('receipt_data')]: {
                bind: 'dispatch-receipt-data'
              },
              [getChannelName('click_on_share')]: {
                bind: 'click-share'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: 'cells-share-operative-receipt',
        tag: 'cells-share-generic-receipt',
        properties: {
          hourSufix: '',
          currencySeparator: '',
          sharedReceiptStyles: {
            receiptTitle: {
              'font-weight': 'var(--cells-fontDefaultMedium_-_font-weight, 500)',
              'line-height': '24px'
            },
            fieldTitle: {
              'height': 'auto',
              'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
              'line-height': '24px',
              'margin-top': '16px'
            },
            fieldValue: {
              'height': 'auto',
              'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
              'line-height': '24px'
            },
            fieldValueAccount: {
              'height': 'auto',
              'font-style': 'italic',
              'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
              'line-height': '24px',
              'margin': '0'
            }
          },
          lengthPan: '4',
          language: LANGUAGE.toLowerCase(),
          localCurrency: LOCAL_CURRENCY,
          dateFormat: 'd MMMM YYYY',
          cellsConnections: {
            in: {
              INTERNATIONAL_TRANSFERS_INITIALIZE_DETAIL: {
                bind: 'reset'
              },
              [getChannelName('receipt_template')]: {
                bind: 'addDynamicTemplate'
              },
              [getChannelName('receipt_data')]: {
                bind: 'result'
              },
              [getChannelName('click_on_share')]: {
                bind: 'captureReceipt'
              }
            },
            out: {
              [getChannelName('show_spinner')]: {
                bind: 'open-control-veil'
              },
              [getChannelName('hide_spinner')]: {
                bind: 'close-control-veil'
              },
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-manager-international-refunds',
        tag: 'bbva-analytics-manager-international-refunds-mx',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              INTERNATIONAL_TRANSFERS_DETAIL_MOVEMENT_SELECTED: {
                bind: 'movementSelected'
              },
              international_refunds_analytics_app_step_2: {
                bind: 'fireAppCompleted'
              }
            },
            out: {
              [getChannelName('app_completed')]: {
                bind: 'app-completed',
                analytics: ANALYTICS.APP_COMPLETED
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
