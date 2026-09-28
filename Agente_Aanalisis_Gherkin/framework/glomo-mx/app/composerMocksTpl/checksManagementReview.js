'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const COUNTRY = utils.getCountry(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS_CHECKS_MANAGEMENT = require('./analytics/_checksManagement')({});

  const pages = require('./common/_pages')(CONFIG)('checksManagementReview');

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-successful-response-next',
        action: 'exit'
      }
    }
  };

  const base = {
    hash: COUNTRY + '-checks-management-review',
    currentPage: {
      url: '/checks-management/review',
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
          pageName: 'checksManagementReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksManagementReview: {
                bind: 'init'
              }
            },
            out: {
              checks_management_review_init_page: {
                bind: 'init-page'
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
          titleName: 'glomo-checks-management-review-header-title',
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
          headerTitle: 'glomo-checks-management-review-header-title',
          withoutHead: true,
          disableButtons: true,
          operative: 'checksManagement',
          visibleChars: 4,
          page: 'checks-management-review',
          hideDivider: true,
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
              },
              checks_management_modal_checks_info: {
                bind: 'on-click-message'
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
          maxLineWidth: 40,
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
      },
      {
        zone: 'app__main',
        tag: 'glomo-checks-management-dm',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accountsV1,
          customersApiVersion: CONFIG.globalServices.versions.customers,
          documentId: 'ls1658.pdf',
          language: LANGUAGE,
          paymentDateFormat: utils.getShortFormatDate(),
          compression: utils.checksPhotosCompression,
          customerContact: true,
          hideCustomerContactMessage: true,
          multipleRelease: true,
          cellsConnections: {
            in: {
              checks_management_modal_checks_info: {
                bind: 'openChecksModal'
              },
              global_checks_management_set_data_checks_error: {
                bind: 'setChecksError'
              }
            },
            out: {
              global_alert_manager_open_with_settings: {
                bind: 'checks-management-checks-modal-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-checks-management-dm',
        familyPath: 'glomo-checks-management-dm',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              global_checks_management_number_of_checks_analytics: {
                bind: 'typology'
              },
              checks_management_release_operation_number: {
                bind: 'operationNumber'
              },
              checks_management_review_init_page: {
                bind: 'appCompleted'
              }
            },
            out: {
              global_checks_management_analytics_app_completed: {
                bind: 'analytics-app-completed',
                analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementAppCompleted('liberar cheques', 'pagina exitosa', true, true)
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
