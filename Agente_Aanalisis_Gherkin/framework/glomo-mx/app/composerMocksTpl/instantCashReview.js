'use strict';
const { getLocalCurrency, useNames, getLanguage, createPrefixFromPageName, getMediumFormatDate, getCountry } = require('./common/helpers/_utils');
module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const language = getLanguage(CONFIG);
  const localCurrency = getLocalCurrency(CONFIG);
  const pageName = 'instantCashReview';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const country = getCountry(CONFIG);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const base = {
    hash: 'instant-cash-review',
    currentPage: {
      url: '/instant-cash-review'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        headerFixed: true,
        footerFixed: true,
        disableEdgeSwipe: true,
        extraHeaderClass: isNativeIos ? 'darker-green-bg' : '',
        cellsConnections: {
          in: {
            navigation_checks_management_service_terms_review_to: {
              bind: 'resetLayerScroll'
            },
            checks_management_service_terms_review_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__header',
        type: 'DM',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'close-instant-cash-operative',
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'goBack'
              },
              [getChannelName('set_exit_operative')]: {
                bind: 'goBack'
              }
            },
            out: {
              global_instant_cash_exit: {
                bind: 'close-instant-cash-operative',
                backStep: true,
                'forward-to-native': true
              },
              dashboard_pull_to_refresh_start: {
                bind: 'close-instant-cash-operative'
              },
              global_refresh_dashboard_generic: {
                bind: 'close-instant-cash-operative',
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
          style: '--cells-molecule-header-bg-color: var(--bbva-darker-green,#277a3e);--cells-molecule-header-color: var(--bbva-white, #FFF)',
          rightIcon: 'coronita:close',
          titleName: 'instant-cash-successful-screen-header-title',
          cellsConnections: {
            out: {
              [getChannelName('set_exit_operative')]: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          rightIconText: 'bbva-header-main-close-aria-label',
          rightIconSize: '24',
          variant: 'primary'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        type: 'UI',
        properties: {
          language,
          formatDate: getMediumFormatDate(),
          disableButtons: false,
          localCurrency,
          cellsConnections: {
            in: {
              instant_cash_successful_screen: {
                bind: 'result'
              }
            },
            out: {
              [getChannelName('set_exit_operative')]: {
                bind: 'primary-button-clicked'
              },
              [getChannelName('share_receipt_capture')]: {
                bind: 'share-receipt-capture'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'centered-operation-list title-xxxl instant-cash',
          operationListClass: 'centered-items',
          disableButtons: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-share-generic-receipt',
        tagSpherica: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
        properties: {
          country,
          language,
          localCurrency,
          maxLineWidth: 39,
          cellsConnections: {
            in: {
              [getChannelName('share_receipt_capture')]: {
                bind: 'captureReceipt'
              },
              [getChannelName('set_exit_operative')]: {
                bind: 'reset'
              },
              global_instant_cash_share_receipt_data: {
                bind: 'result'
              }
            },
            out: {
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              },
              global_alert_manager_open_with_settings: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
