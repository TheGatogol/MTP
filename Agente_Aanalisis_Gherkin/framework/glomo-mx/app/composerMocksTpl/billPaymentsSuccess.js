'use strict';

module.exports = CONFIG => {
  const { getLocalCurrency, getFormatDate, getLanguage, getShortFormatDate, SPINNER: spinner, getVisibleChars } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { payments: paymentsApiVersion, suggestedOperations } },
    native = false,
    nativeIos = false
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)('billPaymentsSuccess');
  const isNativeIos = nativeIos;
  const PAGE_NAME = 'billPaymentsSuccess';
  const ANALYTICS = require('./analytics/_billPayments')(CONFIG);
  const ANALYTICS_FREQUENT_OPERATIONS =  require('./analytics/_dynamicFrequentOperations')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const base = {
    hash: 'mxbillPayments',
    currentPage: {
      url: '/bill-payments-success'
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        delayScrollTop: 300,
        topOnConfirm: true,
        summaryPositionUnset: true,
        animationType: 'verticalUp',
        extraHeaderClass: 'light-green-bg',
        iOSFixedHeader: isNativeIos,
        className: isNativeIos ? 'ios-top-padding bg-core-blue header-fixed' : 'header--dark-success ',
        cellsConnections: {
          in: {
            [ PAGE_NAME + '_page_init_page']: {
              bind: 'recalculateHeader'
            },
            [PAGE_NAME + '_CLOSE_CONFIRM_CHANNEL' ]: {
              bind: 'close'
            }
          },
          out: {
            [PAGE_NAME + 'SCROLL_COMPLETE']: {
              bind: 'opx-template-content-scroll'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        className: isNativeIos ? 'ios-top-padding header-fixed' : ''
      }
    },
    components: [
      spinner(CONFIG),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          id: 'bill-payment-header-receipt',
          className: `header--dark-success ${ isNativeIos ? 'ios-top-padding' : ''}`,
          rightIcon: 'coronita:close',
          leftIconSize: '22',
          titleName: 'glomo-bill-payments-header-title',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_to_continue']: {
                bind: 'navigate'
              },
              [PAGE_NAME + '_back_request']: {
                bind: 'goBack'
              },
              navigation_bill_payments_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              BPS_PREPARE_TO_EXIT_SUCCES: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: isNativeIos ? 'ios-top-padding' : ''
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: requiredToken,
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
              [PAGE_NAME + '_page_init_page']: {
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-back',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_to_continue']: {
                bind: 'navigate'
              },
              [PAGE_NAME + '_back_request']: {
                bind: 'goBack'
              },
              navigation_bill_payments_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_bill_payments_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };

  const billPaymentsSucces = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      id: 'step-bill-payment',
      operative: 'billPayments',
      className: 'relative-button loan-payment-success',
      localCurrency: getLocalCurrency(CONFIG),
      formatDate: getFormatDate(CONFIG),
      language: getLanguage(CONFIG),
      isStickyButton: 'no-fixed',
      page: 'billPaymentsSuccess',
      country: 'mxGlobal',
      animateFromTo: true,
      cellsConnections: {
        in: {
          RO_BP_SHOW_SUCCESS_RESPONSE_PAGE_CHANNEL: {
            bind: 'result'
          },
          BP_SHOW_SUCCESS_RESPONSE_PAGE_CHANNEL: {
            bind: 'result'
          }
        },
        out: {
          [PAGE_NAME + '_OPERATION_CLICKED_SHARE_GLOBAL']: {
            bind: 'share-receipt-capture'
          },
          [PAGE_NAME + '_PREPARE_STORE_SERVICE_MODAL']: {
            bind: 'save-frequent-operation'
          },
          BPS_PREPARE_TO_EXIT_SUCCES: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    }
  };

  const modalRecipientServiceSelector = {
    zone: 'app__transactional',
    tag: 'cells-modal-new-recipient-service-selector',
    tagSpherica: 'cells-modal-new-recipient-service-selector-spherica',
    type: 'UI',
    properties: {
      className: `bill-pay-modal ${ isNativeIos ? 'ios-top-padding' : ''}`,
      iOSFixedHeader: isNativeIos,
      inputSearcherClass: 'items-separator-input',
      listItemsClassName: 'services-list',
      selectedItemClass: 'blue-title-avatar secondary-down',
      showTitleResults: true,
      titleHeaderPage: 'cells-modal-new-recipient-service-selector-header-title',
      additionalFieldsIcon: 'coronita:camera',
      aliasFieldEnabled: true,
      aliasFieldConfig: {
        title: 'cells-modal-new-recipient-service-selector-header-title',
        titleLabel: 'cells-modal-new-recipient-service-selector-alias-field-title-label',
        infoMessage: 'glomo-bill-payments-alias-field-error',
        label: 'cells-modal-new-recipient-service-selector-alias-field-label',
        errorLabel: 'glomo-bill-payments-alias-field-error',
        allowedValue: '^[a-zA-ZÁ0-9]+$',
        maximumLength: 10
      },
      inputFieldsHidden: false,
      hideSearch: true,
      labelOnContinueButton: 'glomo-bill-payments-modal-label-continue-button',
      chooseOtherServiceLabel: 'alert-EXIT-ACCOUNTHIRING-cancel',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_OPEN_SERVICE_MODAL_LIST']: {
            bind: 'opened'
          },
          [PAGE_NAME + '_HIDE_SERVICE_LIST_SECTION']: {
            bind: 'hideSearch'
          },
          [PAGE_NAME + '_PREPARE_REFERENCE_WITH_SELECTED_SERVICE']: {
            bind: 'selected'
          },
          [PAGE_NAME + '_SET_REFERENCE_INSTRUCTIONS_MXN']: {
            bind: 'payInstructions'
          },
          [PAGE_NAME + '_SET_ADDITIONAL_SERVICE_FIELDS_CHANNEL']: {
            bind: 'additionalFields'
          },
          [PAGE_NAME + '_SET_REFERENCE_CONFIG_CHANNEL']: {
            bind: 'additionalFields'
          },
          [PAGE_NAME + '_SET_ALIAS_FIELD_ENABLED']: {
            bind: 'aliasFieldEnabled'
          },
          [PAGE_NAME + '_SET_RECIPIENT_INPUT_FIELDS_HIDDEN']: {
            bind: 'inputFieldsHidden'
          },
          [PAGE_NAME + '_HIDE_SERVICE_INSTRUCTIONS']: {
            bind: 'hideServiceInstructions'
          },
          [PAGE_NAME + '_CLOSE_ON_SUCCESS_SERVICE_STORED']: {
            bind: 'close'
          },
          [PAGE_NAME + '_CLOSE_STORE_SERVICE']: {
            bind: 'close'
          }
        },
        out: {
          [PAGE_NAME + '_REQUEST_REFERENCE_CHANGED_CHANNEL']: {
            bind: 'additional-fields-values-retrieved'
          },
          [PAGE_NAME + '_REQUEST_STORE_SERVICE_CHANNEL']: {
            bind: 'alias-field-value-retrieved'
          },
          [PAGE_NAME + '_CLOSE_STORE_SERVICE_MODAL_CHANNEL']: {
            bind: 'selected-service'
          },
          bill_payments_success_prepare_help_service_modal_channel: {
            bind: 'help-service-icon-clicked-event'
          },
          open_control_veil: {
            bind: 'bill-payments-open-control-veil'
          },
          close_control_veil: {
            bind: 'bill-payments-close-control-veil'
          }
        }
      }
    }
  };

  const cellsModalAlert = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-alert',
    tagSpherica: 'cells-modal-alert-spherica',
    properties: {
      toast: true,
      type: 'success',
      content: 'glomo-bill-payments-stored-service-success-message',
      duration: 3000,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_CLOSE_ON_SUCCESS_SERVICE_STORED']: {
            bind: 'open'
          }
        }
      }
    }
  };

  const cellsShareGenericReceip = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      template: 'billPaymentsReceipt',
      country: 'mx',
      localCurrency: getLocalCurrency(CONFIG),
      language: getLanguage(CONFIG),
      lengthPan: getVisibleChars('account'),
      dateFormat: getShortFormatDate(),
      cellsConnections: {
        in: {
          [PAGE_NAME + '_OPERATION_CLICKED_SHARE_GLOBAL']: {
            bind: 'captureReceipt'
          },
          [PAGE_NAME + '_SHARE_RECEIP_CAPTURE']: {
            bind: 'result'
          },
          [PAGE_NAME + '_CLEAR_RECEIPT_EVENT']: {
            bind: 'receipt'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const billPaymentsManager = {
    zone: 'app__main',
    tag: 'bbva-manager-bill-payments',
    familyPath: '@glomo-web-components/bbva-manager-bill-payments',
    type: 'DM',
    render: 'litElement',
    properties: {
      setStaticDate: true,
      host,
      native,
      paymentsApiVersion,
      requiredToken,
      isFromGlobalCache: false,
      cellsConnections: {
        in: {
          BP_IS_FROM_FREQUENT_SERVICE_PAYMENT_CHANNEL: {
            bind: 'isFrequentServicePayment'
          },
          BP_FREQUENT_OPERATIONS_DATA: {
            bind: 'dataPaymentService'
          },
          [PAGE_NAME + 'SCROLL_COMPLETE']: {
            bind: 'scrollCompleteSuccess'
          },
          bill_payments_share_receipt: {
            bind: 'operationClicked'
          },
          [PAGE_NAME + '_PREPARE_STORE_SERVICE_MODAL']: {
            bind: 'prepareStoreService'
          },
          BILL_PAYMENTS_SET_SERVICE_DATA_CHANNEL: {
            bind: 'serviceData'
          },
          [PAGE_NAME + '_REQUEST_REFERENCE_CHANGED_CHANNEL']: {
            bind: 'changedReference'
          },
          [PAGE_NAME + '_REQUEST_STORE_SERVICE_CHANNEL']: {
            bind: 'requestStoreService'
          },
          [PAGE_NAME + '_CLOSE_STORE_SERVICE_MODAL_CHANNEL']: {
            bind: 'closeStoreServiceModal'
          },
          BPS_PREPARE_TO_EXIT_SUCCES: {
            bind: 'prepareToExit'
          },
          BP_SET_IS_FROM_DASHBOARD_CHANNEL: {
            bind: 'isFromDashboard'
          },
          BP_SEND_STORED_LIST_TO_SUCCESS: {
            bind: 'stepStoredServices'
          },
          BP_SHOW_SUCCESS_RESPONSE_PAGE_CHANNEL: {
            bind: 'fireAppCompletedAnalytics'
          },
          RO_BP_SHOW_SUCCESS_RESPONSE_PAGE_CHANNEL: {
            bind: 'shareReceipt'
          },
          dashboard_customer_email: {
            bind: 'customerContact'
          },
          [PAGE_NAME + '_ANALYTICS_APP_COMPLETED_CHANNEL']: {
            bind: 'billPaymentOperationRatingApp'
          },
          [PAGE_NAME + '_ANALYTICS_APP_COMPLETED']: {
            bind: 'billPaymentOperationRatingApp'
          },
          [PAGE_NAME + '_SET_ADDITIONAL_PAYMENT_FIELDS_EVENT']: {
            bind: 'setAdditionalPaymentFields'
          },
          bill_payments_success_prepare_help_service_modal_channel: {
            bind: 'prepareHelpServiceModal'
          }
        },
        out: {
          [PAGE_NAME + '_CLEAR_RECEIPT_EVENT']: {
            bind: 'clear-receip-event'
          },
          [PAGE_NAME + '_REQUEST_GET_ADDITIONAL_FIELDS_CHANNEL']: {
            bind: 'request-get-additional-fields-event'
          },
          [PAGE_NAME + '_SET_REFERENCE_CONFIG_CHANNEL']: {
            bind: 'set-reference-config-event'
          },
          [PAGE_NAME + '_OPEN_SERVICE_MODAL_LIST']: {
            bind: 'open-modal-services-list-event'
          },
          [PAGE_NAME + '_HIDE_SERVICE_LIST_SECTION']: {
            bind: 'hide-service-list-from-modal-event'
          },
          [PAGE_NAME + '_PREPARE_REFERENCE_WITH_SELECTED_SERVICE']: {
            bind: 'send-selected-service-to-reference-event'
          },
          [PAGE_NAME + '_SET_REFERENCE_INSTRUCTIONS_MXN']: {
            bind: 'set-reference-instructions-mxn-event'
          },
          [PAGE_NAME + '_SET_ADDITIONAL_SERVICE_FIELDS_CHANNEL']: {
            bind: 'set-additional-fields-event'
          },
          [PAGE_NAME + '_SUCCESS_SERVICE_STORED']: {
            bind: 'store-service-success-event'
          },
          [PAGE_NAME + '_CLOSE_STORE_SERVICE']: {
            bind: 'close-services-list-step-event'
          },
          [PAGE_NAME + '_CLOSE_STORE_SERVICE']: {
            bind: 'close-on-cancel-service-stored-event'
          },
          global_alert_manager_open_with_settings: {
            bind: 'send-global-alert-manager-settings'
          },
          [PAGE_NAME + '_SET_ALIAS_FIELD_ENABLED']: {
            bind: 'set-alias-field-enabled-event'
          },
          [PAGE_NAME + '_SET_RECIPIENT_INPUT_FIELDS_HIDDEN']: {
            bind: 'set-input-fields-hidden-event'
          },
          [PAGE_NAME + '_HIDE_SERVICE_INSTRUCTIONS']: {
            bind: 'hide-service-instructions-event'
          },
          [PAGE_NAME + '_CLOSE_ON_SUCCESS_SERVICE_STORED']: {
            bind: 'close-on-success-service-stored-event'
          },
          [PAGE_NAME + '_CLOSE_ON_SUCCESS_SERVICE_STORED']: {
            bind: 'store-service-success-event'
          },
          [PAGE_NAME + '_EXIT_TO_DASHBOARD_PAGE']: {
            bind: 'exit-to-entry-point-event',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          [PAGE_NAME + '_EXIT_TO_DASHBOARD_PAGE']: {
            bind: 'exit-to-dashboard-page-event',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          [PAGE_NAME + '_EXIT_TO_PRODUCT_DETAIL_PAGE']: {
            bind: 'exit-to-product-detail-event',
            link: {
              page: 'account',
              cleanUntil: 'account',
              skipHistory: true,
              params: {
                productId: 'productId'
              }
            }
          },
          [PAGE_NAME + '_OPEN_SPINNER']: {
            bind: 'open-control-veil'
          },
          [PAGE_NAME + '_CLOSE_SPINNER']: {
            bind: 'close-control-veil'
          },
          [PAGE_NAME + '_ANALYTICS_APP_COMPLETED_CHANNEL']: {
            bind: 'app-completed-analytics-event',
            analytics: ANALYTICS.APP_COMPLETED
          },
          [PAGE_NAME + '_SHARE_RECEIP_CAPTURE']: {
            bind: 'operation-clicked-share'
          },
          success_operation_notification_channel: {
            bind: 'success-channel-rating-app',
            'forward-to-native': true
          },
          [PAGE_NAME + '_ANALYTICS_APP_COMPLETED']: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS_FREQUENT_OPERATIONS.appCompleted
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };

  const paymentsApiDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-payments',
    properties: {
      host,
      native,
      paymentsApiVersion,
      requiredToken,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_REQUEST_GET_ADDITIONAL_FIELDS_CHANNEL']: {
            bind: 'getAdditionalPaymentFields'
          }
        },
        out: {
          [PAGE_NAME + '_SET_ADDITIONAL_PAYMENT_FIELDS_EVENT']: {
            bind: 'set-additional-payment-fields'
          }
        }
      }
    }
  };

  const suggestedOperationsApiDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-suggested-operations',
    familyPath: '@glomo-web-components/bbva-dataprovider-suggested-operations',
    render: 'litElement',
    properties: {
      host,
      native,
      version: suggestedOperations,
      requiredToken,
      cellsConnections: {
        in: {
          BP_FREQUENT_OPERATIONS_ID_TO_DELETE: {
            bind: 'deleteSuggestedOperationById'
          }
        },
        out: {
          BPS_DELETE_SUGGESTED_OPERATION_SUCCESS_EVENT: {
            bind: 'suggested-operations-delete-api-dm'
          }
        }
      }
    }
  };

  const UI = [billPaymentsSucces, modalRecipientServiceSelector, cellsModalAlert, cellsShareGenericReceip];
  const DMs = [billPaymentsManager, paymentsApiDM, suggestedOperationsApiDM];
  base.components.push(...DMs, ...UI);
  return sphericaPageUtils.spherize(base);
};
