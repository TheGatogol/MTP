/* eslint-disable no-unused-vars */
(function() {
  'use strict';
  module.exports = CONFIG => {
    const { SPINNER: spinner, getLocalCurrency, getVisibleChars, setProperty, connectionsIn, getAlternativeFormatDate } = require('./common/helpers/_utils');
    const isNativeIos  = CONFIG.nativeIos || false;
    const analytics = require('./analytics/_travelInsurance')();
    const product = 'travelInsuranceSuccess';
    const visibleChars = getVisibleChars(CONFIG)('card');
    let travelInsuranceSuccessJSON = {};
    travelInsuranceSuccessJSON = {
      template: {
        tag: 'cells-template-coronita',
        properties: {
          disableEdgeSwipe: true,
          extraHeaderClass: 'light-green-bg',
          iOSFixedHeader: true,
          disableScrollLock: true,
          headerFixed: true,
          animationType: 'verticalUp',
          drawerWidth: '100%',
          className: 'financingPurchaseReview bg-darker-green' + isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
        }
      },
      components: [
        {
          zone: 'app__main',
          tag: 'cells-handle-life-cycle',
          type: 'UI',
          properties: {
            pageName: 'lifeHealthReview',
            private: true,
            tokenName: CONFIG.globalServices.requiredToken || 'tsec',
            customInitEvents: {
              'swipe-menu-enabled': false
            },
            cellsConnections: {
              out: {
                global_enable_menu_swipe: {
                  bind: 'swipe-menu-enabled',
                  'forward-to-native': true
                }
              },
              params: {
                continue: 'continue',
                isLogged: 'global_user_logged'
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
            titleName: 'travel-insurance-error-modal-title',
            cellsConnections: {
              out: {
                [product + '_GO_BACK_BUTTON']: {
                  bind: 'click-right-button',
                  skipHistory: true,
                  backStep: true
                }
              }
            }
          }
        },
        {
          zone: 'app__main',
          familyPath: 'glomo-travel-insurance-manager',
          tag: 'glomo-analytics-travel-insurance-manager',
          type: 'DM',
          properties: {
            cellsConnections: {
              in: {
                ['travelInsurance' + '_PERSIST_AMOUNT_TO_SUCCESS_PAGE']: {
                  bind: 'amount'
                },
                ['travelInsurance' + '_PERSIST_OPERATION_NUMBER_TO_SUCCESS_PAGE']: {
                  bind: 'operationNumber'
                },
                ['travelInsurance' + '_PERSIST_PENDING_DATA_TO_SUCCESS_PAGE']: {
                  bind: 'buildPreviewPageData'
                },
                ['travelInsurance' + '_PERSIST_DATA_TO_SUCCESS_PAGE']: {
                  bind: 'data'
                },
                travelInsurance_SET_INSURANCE_RECEIPT: {
                  bind: 'dispatchAppCompleted'
                }
              },
              out: {
                ['travelInsuranceSuccess' + '_SEND_APP_COMPLETED']: {
                  bind: 'app-completed-analytics-insurance',
                  analytics: analytics.appCompleted
                }
              }
            }
          }
        },
        spinner(CONFIG),
        {
          zone: 'app__main',
          tag: 'cells-successful-response',
          type: 'UI',
          properties: {
            className: 'equity-contracts',
            formatDate: getAlternativeFormatDate(),
            localCurrency: getLocalCurrency(),
            page: 'travel-insurance-success-page',
            visibleChars: visibleChars,
            isStickyButton: '',
            operationsListLayout: 'review',
            disableButtons: false,
            withOutAmount: true,
            cellsConnections: {
              in: {
                travelInsurance_SET_INSURANCE_RECEIPT: {
                  bind: 'result'
                }
              },
              out: {
                [product + 'TI_RECEIPT_CONTINUE']: {
                  bind: 'exit-to-contract-product-page',
                  skipHistory: true,
                  backStep: true
                }
              }
            }
          }
        },
        {
          zone: 'app__main',
          type: 'DM',
          familyPath: 'glomo-travel-insurance-manager',
          tag: 'glomo-travel-insurance-manager-mx',
          properties: {
            cellsConnections: {
              in: {
                travelInsurance_SET_INSURANCE_RECEIPT: {
                  bind: 'closeSpinner'
                },
                [product + '_GO_BACK_BUTTON']: {
                  bind: 'backNavigation'
                },
                [product + 'TI_RECEIPT_CONTINUE']: {
                  bind: 'backNavigation'
                },
                [product + 'TI_RECEIPT_CONTINUE']: {
                  bind: 'resetData'
                }
              },
              out: {
                [product + 'EXIT_TO_TRAVEL_INSURANCE']: {
                  bind: 'exit-to-travel-insurance',
                  skipHistory: true,
                  backStep: true
                }
              }
            }
          }
        }
      ]
    };
    setProperty(travelInsuranceSuccessJSON)('cells-spinner-veil').hidden = true;
    connectionsIn(travelInsuranceSuccessJSON)('cells-spinner-veil').travelInsurance_SET_INSURANCE_RECEIPT = {
      bind: 'hidden'
    };
    return travelInsuranceSuccessJSON;
  };
}());
