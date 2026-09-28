/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const productName = 'insurance';
  const base = require('./product/_product-detail')(productName)(CONFIG);
  const utils = require('./common/helpers/_utils');
  const localStorageApp = require('./common/_local-storage');
  const setProperty = utils.setProperty(base);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const connectionsOut = utils.connectionsOut(base);
  const connectionsIn = utils.connectionsIn(base);
  const isNativeIos = CONFIG.nativeIos || false;
  const { glomoOpenDocument, detailDownloadParams } = utils;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, productName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const addProperty = utils.addProperty(base);
  const visibleChars = utils.getVisibleChars(CONFIG);

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_open_alert_manager_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {}
      }
    }
  };

  base.template = {
    ...base.template,
    tagSpherica: 'cells-template-coronita-spherica',
    extraHeaderClass: isSpherica ? '' : 'dark-blue-bg',
    propertiesSpherica: {
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
    }
  };

  if (isNativeIos) {
    detailDownloadParams.headers = { 'Content-Type': 'application/json' };
  }

  const {
    pageViewProductDetail,
    internalLinkShowPolicy,
    pageViewOtp
  } = require('./analytics/_insurance')();
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);

  setProperty('cells-molecule-header').titleName = 'cells-product-summary-insurance-header-title';
  addProperty('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  addProperty('cells-molecule-header').propertiesSpherica = {
    className: 'header--core-grey',
    variant: 'primary-alt',
    leftIcon: 'coronita:back-mini',
    leftIconText: 'cells-molecule-header-spherica-back',
    maskConfig: {
      separator: '&bull;&nbsp;',
      chars: visibleChars,
      status: true
    }
  };
  setProperty('cells-product-summary-insurance').labelMoreInfo = 'cells-product-summary-more-info-insurance';
  addProperty('cells-product-summary-insurance').tagSpherica = 'cells-product-summary-insurance-spherica';

  connectionsOut('cells-product-summary-insurance').insurance_detail_icon_clicked = { bind: 'cells-product-summary-optional-items-key-icon' };
  connectionsOut('cells-product-summary-insurance').navigation_product_detail_to_more_info = {
    bind: 'cells-product-summary-more-info-navigation',
    link: {
      page: 'insuranceMoreInfo',
      params: {
        productId: 'productId'
      }
    }
  };
  addProperty('cells-product-summary-insurance').propertiesSpherica = {
    detailTitle: 'cells-product-more-info-due-date-title-spherica',
    newCellsConnections: {
      add: {
        out: {
          insurance_detail_icon_clicked_spherica: {
            bind: 'key-icon-click'
          }
        }
      },
      remove: {
        out: [
          'insurance_detail_icon_clicked'
        ]
      }
    }
  };
  connectionsOut('cells-handle-life-cycle').insurance_product_detail_init_page = {
    bind: 'init-page',
    analytics: pageViewProductDetail()
  };

  connectionsIn('cells-operations-list-indicators').insurance_hidden_operative_policy_download = {
    bind: 'hidden'
  };

  addProperty('cells-operations-list-indicators').tagSpherica = 'cells-operations-list-indicators-spherica';
  addProperty('cells-operations-list-indicators').propertiesSpherica = {
    className: 'product-detail',
    loaded: true
  };

  connectionsOut('cells-operations-list-indicators').global_insurance_product_see_policy = {
    bind: 'navigation-product-to-see-policy',
    analytics: internalLinkShowPolicy()
  };

  connectionsIn('cells-operations-list-indicators').insurance_operations_list_enabled = {
    bind: 'operations'
  };

  connectionsOut('cells-operations-list-indicators').global_insurance_product_cancel_policy = {
    bind: 'navigation-product-to-cancel-policy'
  };

  base.components.push({
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-insurances-dm-mx',
    familyPath: 'glomo-insurances-dm',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      continue: productName,
      downloadPolicyWithParams: true,
      hostServices: CONFIG.globalServices.host,
      apiVersion: CONFIG.globalServices.versions.businessDocumentsGenerateV0,
      detailDownloadConfig: detailDownloadParams,
      insuranceCancelProducts: ['glomo-insurances-dynamic-life', 'glomo-insurances-device', 'glomo-insurances-travel', 'glomo-insurances-dynamic-life-usd'],
      iOSFlagContentType: isNativeIos,
      cellsConnections: {
        in: {
          dashboard_insurances_distribute: {
            bind: 'productsList'
          },
          insurances_product_detail_flags: {
            bind: 'flagsToSearch'
          },
          global_client_id: {
            bind: 'clientId'
          },
          global_insurance_featured_product_detail_operations_list: {
            bind: 'operations'
          },
          insurance_cancelation_request_exit_flow: {
            bind: 'sendProduct'
          },
          navigation_from_futura_dashboard: {
            bind: 'sendProduct'
          },
          insurance_set_product: {
            bind: 'setProduct'
          },
          global_product_list_selected_product: {
            bind: 'setProduct'
          },
          insurance_detail_icon_clicked: {
            bind: 'openInfoModal'
          },
          navigation_insurance_product_detail_back_request: {
            bind: 'reset'
          },
          global_insurance_product_see_policy: {
            bind: 'generatePdfDocument'
          },
          global_open_document_url_success: {
            bind: 'documentOpenHandler'
          },
          global_open_document_url_error: {
            bind: 'documentOpenErrorHandler'
          },
          global_insurance_product_cancel_policy: {
            bind: 'navigateToCancelInsurance'
          },
          INSURANCE_CANCELATION_REQUEST_CLOSE_OPERATIVE: {
            bind: 'backToSetProduct'
          },
          send_data_request_to_insurance_product: {
            bind: 'getDataRequestToInsurance'
          },
          insurance_detail_info_message_click: {
            bind: 'onMessageLinkItemClick'
          }
        },
        out: {
          insurance_set_product: {
            bind: 'send-product'
          },
          insurance_detail_response: {
            bind: 'insurance-response-success'
          },
          insurance_detail_info_message: {
            bind: 'insurance-detail-info-message'
          },
          global_open_alert_manager: {
            bind: 'open-insurance-info-modal'
          },
          insurance_get_operations_product: {
            bind: 'insurance-response-success'
          },
          insurance_hidden_operative_policy_download: {
            bind: 'hidden-operating-policy'
          },
          insurance_more_info_data: {
            bind: 'insurance-data-mapping-more-info'
          },
          global_open_document_url: {
            bind: 'request-business-document'
          },
          global_retry_error: {
            bind: 'show-error-modal-view-policy-pdf'
          },
          global_action_launcher_dialer: {
            bind: 'call-phone-number'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          insurance_operations_list_enabled: {
            bind: 'set-operatives'
          },
          dashboard_insurances: {
            bind: 'opertation-cancel-completed',
            backStep: true
          },
          INSURANCE_DETAIL_NAVIGATE_OPEN_CANCEL_DETAIL: {
            bind: 'to-insurance-cancel-policy',
            link: {
              page: 'insuranceCancelationRequestSpherica'
            }
          },
          send_data_request_to_insurance_more_info: {
            bind: 'send-data-request-to-insurance-more-info'
          },
          send_data_request_to_insurance_more_info_native: {
            bind: 'send-data-request-to-insurance-more-info',
            'forward-to-native': true
          },
          signature_otp_insurance_analytic: {
            bind: 'signature-required-first-step-dm',
            analytics: pageViewOtp()
          }
        },
        params: {
          productId: 'productId'
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      annualCostModalText: 'glomo-insurances-detail-annual-cost-modal-text-spherica',
      newCellsConnections: {
        add: {
          in: {
            insurance_detail_icon_clicked_spherica: {
              bind: 'openInfoModal'
            }
          },
          out: {
            global_open_alert_manager_spherica: {
              bind: 'open-insurance-info-modal'
            }
          }
        },
        remove: {
          out: [
            'global_open_alert_manager'
          ]
        }
      }
    }
  });

  base.components.push({
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-emergency-sos',
    tag: 'bbva-manager-emergency-insurances-flags',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          insurance_set_product: {
            bind: 'setInsurance'
          },
          global_product_list_selected_product: {
            bind: 'setInsurance'
          },
          insurance_more_info_data: {
            bind: 'dataShowPolicy'
          }
        },
        out: {
          insurance_produc_list_set_more_info: {
            bind: 'set-insurance-more-info'
          }
        }
      }
    }
  });

  base.components.push({
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      type: 'info-dark-blue',
      className: 'in-page margin-top-xxxxl margin-bottom-xl',
      icon: 'coronita:info',
      iconSize: '26',
      cellsConnections: {
        in: {
          insurance_detail_info_message: {
            bind: 'multiMessagessLink'
          }
        },
        out: {
          insurance_detail_info_message_click: {
            bind: 'on-message-class'
          }
        }
      }
    }
  });

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  if (CONFIG.native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }

  addRetryErrors(base)([
    {
      id: 'INSR-POLICY-ERROR-REQUEST',
      acceptRetry: { bind: 'generatePdfDocument', component: 'glomo-insurances-dm-mx' },
      finishRetry: { bind: 'exhaustedAttempts', component: 'glomo-insurances-dm-mx' }
    }
  ]);

  localStorageApp.addOutStorageChannels(base.components, [ 'discreet_mode' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
