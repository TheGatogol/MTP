/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const LANGUAGE = utils.getLanguage(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS_CHECKS_MANAGEMENT_CANCEL = require('./analytics/_checksManagementCancel')('checksManagementCancelReview');

  const pages = require('./common/_pages')(CONFIG)('checksManagementCancelReview');

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-successful-response-next',
        action: 'exit'
      }
    }
  };

  const base = {
    hash: 'checks-management-review',
    currentPage: {
      url: '/checks-management/cancel/review',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'static',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        disableEdgeSwipe: true,
        extraHeaderClass: 'header--evening',
        iOSFixedHeader: true,
        headerFixed: true,
        cellsConnections: {
          in: {
            checks_management_review_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          },
          out: {}
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksManagementCancelReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksManagementCancelReview: {
                bind: 'init'
              }
            },
            out: {
              checks_management_review_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS_CHECKS_MANAGEMENT_CANCEL.cancel('pagina exitosa', 'Glomo'),
                featureFlag: ANALYTICS_CHECKS_MANAGEMENT_CANCEL.ANALYTICS_FEATURE_FLAG
              },
              checks_management_review_reset_page: {
                bind: 'reset'
              },
              app_error_access_token: {
                bind: 'access-token-error'
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
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-checks-management-cancel-review-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_checks_management_review_to_continue: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        type: 'UI',
        properties: {
          className: 'checks-management-review',
          formatDate: 'DD MMMM YYYY, HH:mm [h]',
          language: LANGUAGE,
          headerTitle: 'glomo-checks-management-cancel-review-header-title',
          withoutHead: true,
          disableButtons: true,
          operative: 'checksManagement',
          visibleChars: 4,
          operationAmountClass: '',
          page: 'checks-management-review',
          hideDivider: true,
          operationSubtitleClass: '',
          cellsConnections: {
            in: {
              global_checks_management_response: {
                bind: 'result'
              },
              global_checks_management_set_account_local_currency: {
                bind: 'localCurrency'
              }
            },
            out: {
              checks_management_review_share_receipt: {
                bind: 'share-receipt-capture'
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        properties: {
          className: 'no-shadow',
          config: configButtons,
          cellsConnections: {
            in: {
            },
            out: {
              navigation_checks_management_review_to_continue: {
                bind: 'cells-confirm-buttons-click-primary',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        type: 'UI',
        properties: {
          language: LANGUAGE,
          dateFormat: 'DD MMMM YYYY',
          cellsConnections: {
            in: {
              global_checks_management_response: {
                bind: 'result'
              },
              global_checks_management_set_account_local_currency: {
                bind: 'localCurrency'
              },
              checks_management_review_share_receipt: {
                bind: 'captureReceipt'
              },
              checks_management_review_init_page: {
                bind: 'reset'
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
              global_share_receipt_error_modal: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
