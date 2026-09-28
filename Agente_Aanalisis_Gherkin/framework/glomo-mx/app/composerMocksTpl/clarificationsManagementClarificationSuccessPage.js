'use strict';
module.exports = CONFIG => {
  const _page = require('./common/_pages');
  const { SPINNER: _getSpinner, getAlternativeFormatDate, getLanguage } = require('./common/helpers/_utils');
  const pageName = 'clarificationsManagementClarificationSuccessPage';
  const pages = _page(CONFIG)(pageName);
  const spinner = _getSpinner(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const { _getAppPageView } = require('./analytics/_careClarification')(CONFIG);
  spinner.properties.className = 'solid-spinner';
  const template = {
    tag: 'glomo-opx-template',
    properties: {
      extraHeaderClass: isNativeIos ? 'ios-top-padding bbva-core-blue' : 'bbva-core-blue',
      iOSFixedHeader: isNativeIos,
      headerFixed: true,
      topOnConfirm: true,
      decorateSteps: true,
      className: 'header-fixed',
      cellsConnections: {
        in: {
          [pageName + '_SHOW_CONFIRM']: {
            bind: 'showConfirm'
          },
          [pageName + '_CLOSE_CONFIRM']: {
            bind: 'close'
          },
          [pageName + '_RESET_SCROLL_LAYER']: {
            bind: 'resetLayerScroll'
          },
          [pageName + '_INIT_PAGE']: {
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
      className: 'header--evening',
      rightIcon: 'coronita:close',
      titleName: 'clarifications-management-header-text',
      cellsConnections: {
        in: {
          [pageName + '_HEADER_TITLE_TEXT']: {
            bind: 'titleName'
          }
        },
        out: {
          [pageName + '_SUCCESS_CLOSE']: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    }
  };
  const clarificationsSuccess = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      className: 'clarifications-success not-scroll-sticky',
      formatDate: getAlternativeFormatDate(),
      withOutAvatar: true,
      withoutHead: true,
      hideDivider: true,
      type: 'cardless-withdrawal',
      isStickyButton: true,
      cellsConnections: {
        in: {
          __bridge_page_clarificationsManagementClarificationSuccessPage: {
            bind: '_boot'
          },
          clarificationsManagementCarePage_RESPONSE_GLOBAL_DATA_TO_SUCCESS_SCREEN: {
            bind: 'result'
          }
        },
        out: {
          [pageName + '_HEADER_TITLE_TEXT']: {
            bind: 'header-title-text-changed'
          },
          [pageName + '_OPEN_CLARIFICATIONS_LIST']: {
            bind: 'go-to-next',
            link: {
              page: 'clarificationsListCare',
              cleanUntil: 'clarificationsManagementClarificationSuccessPage'
            }
          },
          [pageName + '_SECONDARY_BUTTON_TAPPED']: {
            bind: 'cells-successful-response-click-secondary',
            cleanUntil: 'clarificationsManagementClarificationSuccessPage',
            backStep: true
          },
          [pageName + '_PRIMARY_BUTTON_TAPPED_EXIT']: {
            bind: 'exit-Page',
            cleanUntil: 'clarificationsManagementClarificationSuccessPage',
            backStep: true
          },
          [pageName + '_SHARE_RECEIPT_CAPTURE']: {
            bind: 'share-receipt-capture'
          },
          [pageName + '_MODAL_INFO_WITHOUTHEAD']: {
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
          [pageName + '_MODAL_INFO_WITHOUTHEAD']: {
            bind: 'successModalInfoButton'
          },
          clarificationsManagementCarePage_SEND_GLOBAL_CACHE_TO_SUCCESS: {
            bind: 'validateCardExist'
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
          [pageName + 'FIRE_ANALYTICS_TRANSIT_MODAL']: {
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
          [pageName + '_SHARE_RECEIPT_CAPTURE']: {
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
    hash: 'clarifications-management-clarification-success',
    currentPage: {
      url: '/clarifications-management-clarification-success'
    },
    pages,
    template,
    components: [
      spinner,
      moleculeHeader,
      clarificationsSuccess,
      clarificationDm,
      cellsShareGenericReceipt
    ]
  };
  return base;
};
