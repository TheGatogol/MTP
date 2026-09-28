/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const productName = 'insurance';
  const utils = require('./common/helpers/_utils');
  const base = require('./product/_product-more-info')(productName)(CONFIG);
  const {
    pageViewOtp,
    pageViewMoreInfo
  } = require('./analytics/_insurance')();
  const tagSummaryDM = 'glomo-insurance-summary-dm-mx';
  const setProperty = utils.setProperty(base);
  const isNativeIos = CONFIG.nativeIos || false;
  const { glomoOpenDocument, detailDownloadParams } = utils;

  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);

  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'insuranceMoreInfo');
  const isSpherica = sphericaPageUtils.isSpherica();
  const addProperty = utils.addProperty(base);

  if (isNativeIos) {
    detailDownloadParams.headers = { 'Content-Type': 'application/json' };
  }

  base.template = {
    ...base.template,
    tagSpherica: 'cells-template-coronita-spherica',
    extraHeaderClass: isSpherica ? '' : 'dark-blue-bg',
    propertiesSpherica: {
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
    }
  };

  const glomoAlertManagerSpherica = {
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

  addProperty('cells-bottom-modal-message').tagSpherica = 'cells-bottom-modal-message-spherica';
  addProperty('cells-bottom-modal-message').propertiesSpherica = {
    message: 'cells-product-summary-card-copy-number-success-spherica'
  };

  setProperty('cells-product-more-info').dateFormat = 'DD MMMM YYYY';
  addProperty('cells-product-more-info').tagSpherica = 'cells-product-more-info-spherica';
  setProperty('cells-product-more-info').className = isSpherica ? '' : 'full-section-division';
  addProperty('cells-product-more-info').propertiesSpherica = {
    className: '',
    class: ''
  };

  addProperty('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  addProperty('cells-molecule-header').propertiesSpherica = {
    className: 'header--core-grey',
    variant: 'primary-alt',
    leftIcon: 'coronita:back-mini',
    leftIconText: 'cells-molecule-header-spherica-back'
  };

  setProperty(tagSummaryDM).hostServices = CONFIG.globalServices.host;
  setProperty(tagSummaryDM).apiVersion = CONFIG.globalServices.versions.businessDocumentsGenerateV0;
  setProperty(tagSummaryDM).detailDownloadConfig = detailDownloadParams;
  setProperty(tagSummaryDM).iOSFlagContentType = isNativeIos;
  const connectionsIn = utils.connectionsIn(base);
  connectionsIn(tagSummaryDM).navigation_insurance_product_more_info_back_request = {
    bind: 'reset'
  };

  connectionsIn(tagSummaryDM).insurance_more_info_data = {
    bind: 'dataShowPolicy'
  };

  connectionsIn(tagSummaryDM).insurances_more_info_flag = {
    bind: 'policyPdfMatchValue'
  };

  connectionsIn(tagSummaryDM).insurance_produc_list_set_more_info = {
    bind: 'setInsurance'
  };

  connectionsIn(tagSummaryDM).insurance_more_info_open_modal = {
    bind: 'openInfoModal'
  };

  connectionsIn(tagSummaryDM).insurance_more_info_policy = {
    bind: 'generatePdfDocument'
  };

  connectionsIn(tagSummaryDM).global_open_document_url_success = {
    bind: 'documentOpenHandler'
  };

  connectionsIn(tagSummaryDM).global_open_document_url_error = {
    bind: 'documentOpenErrorHandler'
  };

  connectionsIn(tagSummaryDM).send_data_request_to_insurance_more_info = {
    bind: 'getDataRequestToInsurance'
  };

  const connectionsOut = utils.connectionsOut(base);

  connectionsOut(tagSummaryDM).global_open_alert_manager = {
    bind: 'open-insurance-info-modal'
  };

  addProperty(tagSummaryDM).propertiesSpherica = {
    isSpherica,
    annualCostModalText: 'glomo-insurances-detail-annual-cost-modal-text-spherica',
    newCellsConnections: {
      add: {
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
  };

  connectionsOut(tagSummaryDM).global_open_document_url = {
    bind: 'request-business-document'
  };

  connectionsOut(tagSummaryDM).global_retry_error = {
    bind: 'show-error-modal-more-info-view-policy-pdf'
  };

  connectionsOut(tagSummaryDM).open_control_veil = {
    bind: 'open-control-veil'
  };

  connectionsOut(tagSummaryDM).close_control_veil = {
    bind: 'close-control-veil'
  };

  connectionsOut(tagSummaryDM).send_data_request_to_insurance_product = {
    bind: 'send-data-request-to-insurance-product'
  };

  connectionsOut(tagSummaryDM).send_data_request_to_insurance_more_info_native = {
    bind: 'send-data-request-to-insurance-product',
    'forward-to-native': true
  };

  connectionsOut(tagSummaryDM).signature_insurance_more_info_analytic = {
    bind: 'signature-required-first-step-dm',
    analytics: pageViewOtp()
  };

  connectionsOut('cells-product-more-info').insurance_more_info_open_modal = {
    bind: 'cells-product-more-info-open-modal'
  };

  connectionsOut('cells-product-more-info').insurance_more_info_policy = {
    bind: 'more-info-see-policy'
  };

  connectionsOut('cells-handle-life-cycle').insurance_more_info_init_page = {
    bind: 'init-page',
    analytics: pageViewMoreInfo()
  };

  if (CONFIG.native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  addRetryErrors(base)([
    {
      id: 'INSR-MORE-INFO-POLICY-ERROR-REQUEST',
      acceptRetry: { bind: 'generatePdfDocument', component: 'glomo-insurance-summary-dm-mx' },
      finishRetry: { bind: 'exhaustedAttempts', component: 'glomo-insurance-summary-dm-mx' }
    }
  ]);

  return sphericaPageUtils.spherize(base);
};
