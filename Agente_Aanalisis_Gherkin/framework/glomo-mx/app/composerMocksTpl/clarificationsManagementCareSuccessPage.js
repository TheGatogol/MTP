'use strict';
module.exports = CONFIG => {
  const _page = require('./common/_pages');
  const { SPINNER: _getSpinner, getAlternativeFormatDate, getLanguage} = require('./common/helpers/_utils');
  const pageName = 'clarificationsManagementCareSuccessPage';
  const product = 'clarificationsManagementCarePage';
  const pages = _page(CONFIG)(pageName);
  const spinner = _getSpinner(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const { _getAppPageView } = require('./analytics/_careClarification')(CONFIG);
  spinner.properties.className = 'solid-spinner';
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      headerFixed: true,
      disableEdgeSwipe: true,
      animationType: 'verticalUp',
      extraHeaderClass: 'darker-green-bg',
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [product + '_SHOW_CONFIRM']: {
            bind: 'showConfirm'
          },
          [product + '_CLOSE_CONFIRM']: {
            bind: 'close'
          },
          [product + '_RESET_SCROLL_LAYER']: {
            bind: 'resetLayerScroll'
          },
          [product + '_INIT_PAGE']: {
            bind: 'resetLayerScroll'
          }
        }
      }
    }
  };
  const moleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      rightIcon: 'coronita:close',
      titleName: 'clarifications-management-header-text',
      cellsConnections: {
        in: {
          [product + '_HEADER_TITLE_TEXT']: {
            bind: 'titleName'
          },
          clarificationsManagementCarePage_SET_HEADER_CLASSNAME: {
            bind: 'class'
          }
        },
        out: {
          [product + '_PRIMARY_BUTTON_TAPPED']: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    }
  };
  const careSuccess = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      className: 'clarifications-success not-scroll-sticky',
      formatDate: getAlternativeFormatDate(),
      type: 'cardless-withdrawal',
      isStickyButton: true,
      cellsConnections: {
        in: {
          clarificationsManagementCarePage_RESPONSE_GLOBAL_DATA_TO_SUCCESS_SCREEN: {
            bind: 'result'
          },
          clarificationsManagementCarePage_RESPONSE_GLOBAL_DATA_TO_SUCCESS_SCREEN_CORE: {
            bind: 'type'
          },
          clarificationsManagementCarePage_USIX_TEST: {
            bind: 'productId'
          }
        },
        out: {
          [product + '_HEADER_TITLE_TEXT']: {
            bind: 'header-title-text-changed'
          },
          [product + '_NAVIGATION_TRANSACTION_ALL']: {
            bind: 'cells-successful-response-click-primary'
          },
          [product + '_PRIMARY_BUTTON_TAPPED']: {
            bind: 'cells-successful-response-click-secondary'
          },
          [product + '_SHARE_RECEIPT_CAPTURE']: {
            bind: 'share-receipt-capture'
          },
          [product + '_MODAL_INFO_WITHOUTHEAD']: {
            bind: 'open-icon-help-modal-withouthead'
          }
        }
      }
    }
  };
  const clarificationDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-clarifications-management-dm',
    properties: {
      cellsConnections: {
        in: {
          [product + '_MODAL_INFO_WITHOUTHEAD']: {
            bind: 'successModalInfoButton'
          },
          [product + '_PRIMARY_BUTTON_TAPPED']: {
            bind: 'navigationtToCardDetail'
          },
          [product + '_SEND_GLOBAL_CACHE_TO_SUCCESS']: {
            bind: 'validateCardExist'
          },
          clarificationsManagementCarePage_SET_TRANSACTION_CLAIM: {
            bind: 'transactionClaim'
          },
          clarificationsManagementCarePage_SET_IS_DOMICILIATION_FLAG: {
            bind: 'isDomiciliation'
          },
          [product + '_NAVIGATION_TRANSACTION_ALL']: {
            bind: 'navigateToCardDetail'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'send-modals-config'
          },
          show_navigation_card_detail: {
            bind: 'navigate-to-card-transaction-detail',
            backStep: true
          },
          navigate_to_card_detail: {
            bind: 'navigate-to-card-detail',
            link: {
              page: {
                bind: 'pageToNavigate'
              },
              cleanUntil: {
                bind: 'pageToNavigate'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          [product + 'FIRE_ANALYTICS_TRANSIT_MODAL']: {
            bind: 'fire-analytics-transit-modal',
            analytics: _getAppPageView('appTransitModal')
          }
        }
      }
    }
  };
  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    properties: {
      country: 'mx',
      language: getLanguage(),
      cellsConnections: {
        in: {
          clarificationsManagementCarePage_RESPONSE_GLOBAL_DATA_TO_SUCCESS_SCREEN: {
            bind: 'result'
          },
          [product + '_SHARE_RECEIPT_CAPTURE']: {
            bind: 'captureReceipt'
          },
          clarificationsManagementCarePage_ADD_DYNAMIC_TEMPLATE: {
            bind: 'addDynamicTemplate'
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
  };
  const base = {
    hash: 'clarifications-management-care-success',
    currentPage: {
      url: '/clarifications-management-care-success'
    },
    pages,
    template,
    components: [
      spinner,
      moleculeHeader,
      careSuccess,
      clarificationDm,
      cellsShareGenericReceipt
    ]
  };
  return base;
};
