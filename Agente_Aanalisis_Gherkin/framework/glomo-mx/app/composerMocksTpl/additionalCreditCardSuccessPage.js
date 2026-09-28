module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('additionalCreditCardMainPage');
  const {getLocalCurrency, getAlternativeFormatDate} = utils;
  const localCurrency = getLocalCurrency(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const PREFIX = 'ADDITIONAL_CREDIT_CARD';
  const base = {
    pages,
    currentPage: {
      url: '/additional-credit-card-success'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            branch_locator_scroll_zone: {
              bind: 'scrollItemIntoView'
            },
            branch_locator_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            branch_locator_scroll_complete: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'back-to-dashboard',
          cellsConnections: {
            in: {
              [PREFIX + '_BACK_TO_DASHBOARD_CHANNEL']: {
                bind: 'goBack'
              }
            },
            out: {
              ADDITIONALS_CARDS_RESET: {
                bind: 'back-to-dashboard',
                backStep: true,
                skipHistory: true
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
          className: 'header--dark-success',
          rightIcon: 'coronita:close',
          rightIconAction: 'close-button-pressed-event',
          titleName: 'additional-credit-card-header-title',
          cellsConnections: {
            out: {
              ADDITIONAL_CREDIT_CARD_NAVIGATE_TO_DASHBOARD: {
                bind: 'close-button-pressed-event'
              },
              [PREFIX + '_BACK_TO_DASHBOARD_CHANNEL']: {
                bind: 'close-button-pressed-event'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        properties: {
          className: 'additional-credit-card-success',
          localCurrency,
          formatDate: getAlternativeFormatDate(),
          cellsConnections: {
            in: {
              [PREFIX + '_SUCCESS_CONTRACT_ADDITIONAL_CARD']: {
                bind: 'result'
              }
            },
            out: {
              ADDITIONAL_CREDIT_CARD_NAVIGATE_TO_DASHBOARD: {
                bind: 'go-to-next'
              },
              [PREFIX + '_BACK_TO_DASHBOARD_CHANNEL']: {
                bind: 'go-to-next'
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
