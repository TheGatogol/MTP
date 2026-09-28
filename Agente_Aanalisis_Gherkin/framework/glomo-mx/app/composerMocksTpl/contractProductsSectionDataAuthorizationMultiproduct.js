'use strict';
module.exports = (CONFIG) => {
  const pages = require('./common/_pages')(CONFIG)('contractProductsSectionDataAuthorizationMultiproduct');
  const analyticsConsultingDataAuthorizationMultiProduct = require('./analytics/_contractProductsSectionDataAuthorizationMultiproduct')(CONFIG);
  const { getLanguage, getLocalCurrency, getLongFormatDate } = require('./common/helpers/_utils');
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

  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: 'contractProductsSectionDataAuthorizationMultiproduct',
      private: true,
      tokenName: requiredToken,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_contractProductsSectionDataAuthorizationMultiproduct: {
            bind: 'init'
          }
        },
        out: {
          analytics_page_visit_autorization_data: {
            bind: 'init-page',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.pageVisitCommon
          }
        }
      }
    }
  };

  const successFeature = {
    zone: 'app__main',
    tag: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx',
    type: 'UI',
    render: 'litElement',
    familyPath: '@glomo-web-components/app-info-structure-contract-products-section-data-authorization-multiproduct-mx',
    properties: {
      host,
      native,
      customerTermsApiVersion: customerTermsApiDmV1,
      customerContactDetailsApiVersion: customerContactDetailsApiDmV1,
      requiredToken,
      requiredOTP: true,
      termTypeId: ['BD-MX-AA-AUTBUR-003', 'BD-MX-AA-HISTLB-001'],
      acceptanceMethodId: 'TA001',
      originId: 'PC',
      statusId: 'ACTIVE',
      referenceNumber: '0822DAT000000170001',
      acceptanceMessagesValue: ['BDHISTLB01', 'BDHISTLB02'],
      acceptanceMessagesValueBuro: ['BDAUTBUR17', 'BDAUTBUR21'],
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          authetication_data_close_feature: {
            bind: 'init'
          },
          sign_modal_cancelled: {
            bind: 'showModalToken'
          },
          cells_to_native_modal_closed: {
            bind: 'showModalToken'
          }
        },
        out: {
          authetication_data_dynamic_template_create_ticket: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-dispatch-dynamic-template-create'
          },
          authetication_data_select_template_ticket: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-template-data-to-send'
          },
          authetication_data_generate_ticket: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-template-capture-to-send'
          },
          analytics_consulting_conditions_data_autorization_socio: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-demographic-history-modal-to-open',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.startedConditionsSocio
          },
          analytics_consulting_conditions_data_autorization_socio_page_view: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-modal-view-demographic-history-to-open',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.pageViewConditionsSocio
          },
          analytics_consulting_conditions_data_autorization_buro: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-credit-history-modal-to-open',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.startedConditionsBuro
          },
          analytics_consulting_conditions_data_autorization_buro_page_view: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-modal-view-credit-history-to-open',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.pageViewConditionsBuro
          },
          analytics_privacy_notice_data_autorization: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-privacy-notice-modal-to-open',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.startedPrivacy
          },
          analytics_privacy_notice_data_autorization_page_view: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-text-link-privacy-notice-to-open',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.pageViewPrivacy
          },
          analytics_check_box_contract_buro: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-checkbox-authorizate-credit-to-check',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.startedAutorizarCredit
          },
          analytics_check_box_contract_socio: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-checkbox-authorizate-socio-to-check',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.startedAutorizarSocio
          },
          analytics_authorize_data_autorization: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-authorization-button-click',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.buttonAuthorize
          },
          analytics_successful_page_data_autorization: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-post-to-complete-analytics',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.completed
          },
          analytics_error_data_completed: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-request-to-fail',
            analytics: analyticsConsultingDataAuthorizationMultiProduct.erroPage
          },
          authetication_data_close_feature: {
            bind: 'app-info-structure-contract-products-section-data-authorization-multiproduct-mx-feature-to-close',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };

  const shareStyles = {
    receiptTitle: {
      'font-size': '1.5rem',
      'font-weight': '500'
    },
    infoMessage: {
      'font-size': '1rem',
      'letter-spacing': '0%',
      'word-wrap': 'break-word',
      'overflow-wrap': 'break-word',
      'max-width': '100%',
      'width': '18rem'
    },
    receipt: {
      'width': '24rem'
    },
    infoIcon: {
      'padding-right': '0',
      'margin-right': '0',
      'margin-left': '0',
      'width': '1.88rem'
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
      dataHourFormat: getLongFormatDate(),
      sharedReceiptStyles: shareStyles,
      infoImage: './images/spherica/info.svg',
      cellsConnections: {
        in: {
          authetication_data_dynamic_template_create_ticket: {
            bind: 'addDynamicTemplate'
          },
          authetication_data_select_template_ticket: {
            bind: 'result'
          },
          authetication_data_generate_ticket: {
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
          global_alert_manager_open_with_settings_spherica: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/contract-products-section-authorization-multiproduct'
    },
    pages,
    template,
    components: [lifeCycle, successFeature, shareReceipt]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('app-info-structure-contract-products-section-data-authorization-multiproduct-mx', {
  });
  return base;
};
