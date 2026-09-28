/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('checksDepositsReview');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS_CHECKS_DEPOSITS = require('./analytics/_checksDeposit')('checksDeposits');

  const configButtons = {
    buttons: {
      primary: {
        text: 'glomo-check-deposits-exit'
      },
      secondary: {
        text: 'glomo-check-deposits-new-operation',
        class: 'link'
      }
    }
  };

  const base = {
    hash: 'mx-checks-deposits-review',
    currentPage: {
      url: '/checks-deposits/review'
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
            checks_deposits_review_init_page: {
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
          }
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
          pageName: 'checksDepositsReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksDepositsReview: {
                bind: 'init'
              }
            },
            out: {
              checks_deposits_review_init_page: {
                bind: 'init-page'
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
          titleName: 'glomo-checks-deposits-review-header-title',
          cellsConnections: {
            out: {
              navigation_checks_deposits_review_to_continue: {
                bind: 'click-right-button',
                link: {
                  page: 'checksDepositsList',
                  cleanUntil: 'checksDepositsList'
                }
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
          disableButtons: true,
          className: 'checks-deposit-review',
          formatDate: 'DD MMMM YYYY, HH:mm [h]',
          type: 'core',
          localCurrency: LOCAL_CURRENCY,
          page: 'checks-deposit-review',
          operative: 'checkDepositAdd',
          language: LANGUAGE,
          operationsListLayout: 'review',
          cellsConnections: {
            in: {
              global_checks_deposits_response: {
                bind: 'result'
              }
            },
            out: {
              checks_deposits_review_share_receipt: {
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
            out: {
              navigation_checks_deposits_review_to_continue: {
                bind: 'cells-confirm-buttons-click-primary',
                link: {
                  page: 'checksDepositsList',
                  cleanUntil: 'checksDepositsList'
                }
              },
              checks_deposits_new_operation: {
                bind: 'cells-confirm-buttons-click-secondary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-check-deposits-dm-mx',
        familyPath: 'glomo-check-deposits-dm',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          native: CONFIG.native || false,
          cellsConnections: {
            in: {
              checks_deposits_set_selected_account: {
                bind: 'initData'
              },
              checks_deposits_new_operation: {
                bind: 'depositAnotherCheck'
              },
              checks_deposits_receipt_share: {
                bind: 'shareReceipt'
              },
              global_open_image_error: {
                bind: 'handleShareReceiptError'
              },
              global_generic_error: {
                bind: 'handleShareReceiptError'
              }
            },
            out: {
              global_alert_manager_open_with_settings: {
                bind: 'open-modal-attempts-account'
              },
              global_attempts_error_code: {
                bind: 'set-trace-error-code'
              },
              checks_section_leave_page: {
                bind: 'glomo-leave-check-section'
              },
              global_retry_error: {
                bind: 'retry-error'
              },
              checks_deposits_go_to_new_operation: {
                bind: 'glomo-check-list-navigate-to-checks-deposits-add',
                link: {
                  page: 'checksDeposits',
                  cleanUntil: 'checksDeposits'
                }
              },
              global_action_launcher_share_image: {
                bind: 'checks-deposits-share-receip'
              },
              global_generic_error: {
                bind: 'checks-deposits-receip-share-error'
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
          maxLineWidth: 45,
          sharedReceiptStyles: {
            section: {
              'margin-bottom': '1rem'
            }
          },
          cellsConnections: {
            in: {
              global_checks_deposits_response: {
                bind: 'result'
              },
              checks_deposits_review_share_receipt: {
                bind: 'captureReceipt'
              },
              checks_deposits_review_init_page: {
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
              checks_deposits_receipt_share: {
                bind: 'receipt-captured'
              },
              global_share_receipt_error_modal: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-checks-deposits-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-checks-deposits-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          config: {
            steps: {
              1: 'app-page-visit',
              2: 'app-step-2',
              3: 'app-step-3'
            }
          },
          cellsConnections: {
            in: {
              checks_deposits_set_selected_product: {
                bind: 'account'
              },
              global_attempts_error_code: {
                bind: 'sendAnalyticMakeOperationCheckError'
              },
              checks_deposits_go_to_new_operation: {
                bind: 'sendAnalyticAppPageVisit'
              }
            },
            out: {
              checks_deposits_analytics_make_operation_check_error: {
                bind: 'analytics-make-operation-check-error',
                analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_error('error solicitudes excedidas', 'error solicitudes excedidas')
              },
              checks_deposits_analytics_app_visit: {
                bind: 'analytics-app-page-visit',
                analytics: ANALYTICS_CHECKS_DEPOSITS.app_page_visit
              }
            }
          }
        }
      }
    ]
  };

  addRetryErrors(base)([
    {
      id: 'error-on-get-attempts-validation-account',
      acceptRetry: { bind: 'depositAnotherCheck', component: 'glomo-check-deposits-dm-mx'},
      acceptCallForHelp: { bind: 'leavePage', component: 'glomo-check-deposits-dm-mx'}
    }
  ]);

  addCommonErrors(base.components)();

  return base;
};
