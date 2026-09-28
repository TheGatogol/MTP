'use strict';
module.exports = (CONFIG) => {
  const pageName = 'contractProductsSectionDataAuthorization';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analyticsConsultingDataAuthorization = require('./analytics/_contractProductsSectionDataAuthorization')(CONFIG);
  const { getLanguage, getLocalCurrency } = require('./common/helpers/_utils');
  const {
    nativeIos = false,
    globalServices: { host, requiredToken = 'tsec', versions: { customerTermsApiDmV1, customerContactDetailsApiDmV1 } },
    native = false
  } = CONFIG;

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      fixOffsetScroll: 0,
      headerFixed: true,
      footerFixed: true,
      animationType: 'horizontal',
      className: nativeIos ? 'ios-top-padding' : ''
    }
  };

  const successFeature = {
    zone: 'app__main',
    tag: 'app-info-structure-contract-products-section-data-authorization',
    type: 'UI',
    render: 'litElement',
    familyPath: '@bbva-web-components-widgets/app-info-structure-contract-products-section-data-authorization',
    properties: {
      host,
      native,
      customerTermsApiVersion: customerTermsApiDmV1,
      customerContactDetailsApiVersion: customerContactDetailsApiDmV1,
      requiredToken,
      requiredOTP: true,
      termTypeId: 'BD-MX-AA-HISTLB-001',
      acceptanceMethodId: 'TA001',
      originId: 'PC',
      statusId: 'ACTIVE',
      referenceNumber: '0821DAT000000170001',
      acceptanceMessagesValue: ['BDHISTLB01', 'BDHISTLB02'],
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          authetication_data_close_feature: {
            bind: 'reset'
          },
          sign_modal_cancelled: {
            bind: 'showModalToken'
          },
          cells_to_native_modal_closed: {
            bind: 'showModalToken'
          }
        },
        out: {
          authetication_data_dynamic_template: {
            bind: 'app-info-structure-contract-products-section-data-authorization-dispatch-dynamic-template-create'
          },
          authetication_data_result: {
            bind: 'app-info-structure-contract-products-section-data-authorization-template-data-to-send'
          },
          authetication_data_capture: {
            bind: 'app-info-structure-contract-products-section-data-authorization-template-capture-to-send'
          },
          analytics_page_visit_autorization_data: {
            bind: 'app-info-structure-contract-products-section-data-authorization-init-component',
            analytics: analyticsConsultingDataAuthorization.pageVisitCommon
          },
          analytics_consulting_conditions_data_autorization: {
            bind: 'app-info-structure-contract-products-section-data-authorization-text-link-consult-conditions-to-open',
            analytics: analyticsConsultingDataAuthorization.startedConditions
          },
          analytics_consulting_conditions_data_autorization_page_view: {
            bind: 'app-info-structure-contract-products-section-data-authorization-text-link-consult-view-conditions-to-open',
            analytics: analyticsConsultingDataAuthorization.pageViewConditions
          },
          analytics_privacy_notice_data_autorization: {
            bind: 'app-info-structure-contract-products-section-data-authorization-link-show-modal-to-open',
            analytics: analyticsConsultingDataAuthorization.startedPrivacy
          },
          analytics_privacy_notice_data_autorization_page_view: {
            bind: 'app-info-structure-contract-products-section-data-authorization-link-show-modal-view-privacy-to-open',
            analytics: analyticsConsultingDataAuthorization.pageViewPrivacy
          },
          analytics_check_box_contract: {
            bind: 'app-info-structure-contract-products-section-data-authorization-checkbox-authorizate-to-check',
            analytics: analyticsConsultingDataAuthorization.interactionLinkCheck
          },
          analytics_authorize_data_autorization: {
            bind: 'app-info-structure-contract-products-section-data-authorization-authorization-button-click',
            analytics: analyticsConsultingDataAuthorization.startedAutorizar
          },
          analytics_successful_page_data_autorization: {
            bind: 'app-info-structure-contract-products-section-data-authorization-post-to-complete',
            analytics: analyticsConsultingDataAuthorization.completed
          },
          analytics_error_data_completed: {
            bind: 'app-info-structure-contract-products-section-data-authorization-exit-analitics',
            analytics: analyticsConsultingDataAuthorization.erroPage
          },
          authetication_data_close_feature: {
            bind: 'app-info-structure-contract-products-section-data-authorization-feature-to-close',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    properties: {
      language: getLanguage(),
      country: 'mx',
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          authetication_data_dynamic_template: {
            bind: 'addDynamicTemplate'
          },
          authetication_data_result: {
            bind: 'result'
          },
          authetication_data_capture: {
            bind: 'captureReceipt'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          reset_receipt: {
            bind: 'receipt-captured'
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/contract-products-section-data-authorization'
    },
    pages,
    template,
    components: [successFeature, shareReceipt]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('app-info-structure-contract-products-section-data-authorization', {
  });

  return base;

};
