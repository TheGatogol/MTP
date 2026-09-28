'use strict';
module.exports = (CONFIG) => {
  const { appFooter } = require('./common/helpers/_utils');
  const PAGE_NAME = 'deferredSignatureCoowners';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const appFooterDeferred = appFooter(CONFIG, PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const analyticsCoowners = require('./analytics/_deferredSignatureCoowners')(CONFIG);
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { localSignatureOrder, localTermsAndConditions, signaturesOrder } },
    native,
    nativeIos,
    language
  } = CONFIG;

  const constants = require('./analytics/common/_constants');

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      hasFooter: !!appFooterDeferred,
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      delayScroll: 0,
      fixOffsetScroll: 0,
      iOSFixedHeader: nativeIos,
      headerFixed: true,
      footerFixed: true,
      animationType: 'verticalUp',
      handleStoppedScroll: true,
      preventScrollWithOverlay: true,
      className: 'header--grey'
    }
  };

  const controllerDm = {
    zone: 'app__main',
    tag: 'bbva-controller-contract-signing-mx',
    type: 'DM',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-controller-contract-signing-mx',
    properties: {
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'signatureNotification'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'signaturePush'
          }
        },
        out: {
          deferred_signature_init_feature_contract_signing: {
            bind: 'contract-signing-init-feature'
          },
          deferred_signature_init_feature_contract_signing_beneficiaries: {
            bind: 'contract-signing-init-feature-beneficiaries'
          },
          deferred_signature_flag_enable: {
            bind: 'contract-signing-feature-flag-on',
            link: {
              page: 'comingSoon',
              cleanUntil: 'comingSoon',
              skipHistory: true
            }
          },
          deferred_signature_flag_enable_beneficiaries: {
            bind: 'contract-signing-init-feature-beneficiaries-off',
            link: {
              page: 'comingSoon',
              cleanUntil: 'comingSoon',
              skipHistory: true
            }
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      language: language || 'es',
      templates: {
        deferredSignatureDetail: true
      },
      defaultTemplate: 'deferredSignatureDetail',
      sharedReceiptStyles: {
        section: {
          'margin-bottom': '5rem'
        }
      },
      cellsConnections: {
        in: {
          deferred_signature_coowner_receipt_click: {
            bind: 'captureReceipt'
          },
          deferred_signature_coowner_share_receipt: {
            bind: 'result'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const contractSignMX = {
    zone: 'app__main',
    tag: 'bbva-feature-contract-signing-mx',
    type: 'DM',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-feature-contract-signing-mx',
    properties: {
      native,
      host,
      requiredToken,
      otpId: PAGE_NAME,
      localSignaturesOrderVersion: localSignatureOrder,
      localTermsAndConditionsVersion: localTermsAndConditions,
      signaturesOrderVersion: signaturesOrder,
      cellsConnections: {
        in: {
          deferred_signature_init_feature_contract_signing: {
            bind: 'init'
          },
          deferred_signature_init_feature_contract_signing_beneficiaries: {
            bind: 'init'
          },
          deferred_signature_coowner_close_feature: {
            bind: 'reset'
          },
          deferred_signature_coowner_modal_close_feature: {
            bind: 'reset'
          },
          global_open_document_base64_success: {
            bind: 'handleOpenDocumentSuccess'
          }
        },
        out: {
          deferred_signature_coowner_close_feature: {
            bind: 'contract-signing-close-feature',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          deferred_signature_coowner_modal_close_feature: {
            bind: 'contract-signing-modal-manager-close-feature',
            backStep: true
          },
          deferred_signature_coowner_close_notifications_enter: {
            bind: 'contract-signing-close-notifications-center'
          },
          global_open_document_base64: {
            bind: 'contract-signing-open-document-base64'
          },
          deferred_signature_coowner_receipt_click: {
            bind: 'receipt_click'
          },
          deferred_signature_coowner_share_receipt: {
            bind: 'contract-signing-button-row'
          },
          deferred_analytic_app_page_visit: {
            bind: 'bbva-feature-contract-signing-loaded'
          },
          deferred_analytic_app_started_pdf: {
            bind: 'bbva-feature-contract-list'
          },
          deferred_analytic_app_started_info: {
            bind: 'document-selected-click'
          },
          deferred_analytic_app_started_terms: {
            bind: 'document-selected-click-terms'
          },
          deferred_analytic_app_step_confirmation: {
            bind: 'multistep-sign-button-click'
          },
          deferred_analytic_app_completed: {
            bind: 'bbva-feature-contrac-signing-success'
          },
          deferred_analytic_operation_error: {
            bind: 'deferred-error-analytics'
          },
          deferred_analytic_contract_not_available: {
            bind: 'analytics-deferred-contract-not-available'
          }
        }
      }
    }
  };

  const deferredSignatureCoowners = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-deferred-signature',
    familyPath: '@glomo-web-components/bbva-manager-deferred-signature',
    render: 'litElement',
    properties: {
      signatureTypes: constants.SIGNATURE_TYPES,
      cellsConnections: {
        in: {
          navigation_from_deep_link_from_notification_detail: {
            bind: 'fireAppStart'
          },
          deferred_analytic_app_page_visit: {
            bind: 'firePurchaceData'
          },
          deferred_analytic_app_started_pdf: {
            bind: 'fireAnalyticsAppStarted'
          },
          deferred_analytic_app_started_info: {
            bind: 'getStep'
          },
          deferred_analytic_app_started_terms: {
            bind: 'getStepCheckbox'
          },
          deferred_analytic_app_step_confirmation: {
            bind: 'fireAnalyticsStepTwo'
          },
          widget_signature_handle_required_first_step: {
            bind: 'fireAnalyticsStepThreeCoowners'
          },
          deferred_analytic_app_completed: {
            bind: 'fireAnalyticsAppCompleted'
          },
          deferred_analytic_contract_not_available: {
            bind: 'fireAnalyticsContractNotAvailable'
          },
          deferred_analytic_operation_error: {
            bind: 'fireAnalyticsError'
          }
        },
        out: {
          analytic_on_click_start_visit: {
            bind: 'analytics-deferred-on-click-start',
            analytics: analyticsCoowners.appOnClickStart
          },
          analytic_page_visit: {
            bind: 'analytics-deferred-page-visit',
            analytics: analyticsCoowners.appPageVisit
          },
          analytic_app_started: {
            bind: 'analytics-deferred-app-started',
            analytics: analyticsCoowners.appStarted
          },
          analytic_app_started_terms: {
            bind: 'analytics-deferred-app-started-terms',
            analytics: analyticsCoowners.appStarted
          },
          analytic_app_started_continue: {
            bind: 'bbva-feature-contract-list',
            analytics: analyticsCoowners.appStarted
          },
          analytic_step_terms_and_conditions: {
            bind: 'analytics-deferred-step-two',
            analytics: analyticsCoowners.appStepConfirmation
          },
          analytic_step_complete_operation: {
            bind: 'analytics-deferred-coowners-step-otp',
            analytics: analyticsCoowners.appStepOtp
          },
          analytic_app_completed: {
            bind: 'analytics-deferred-app-completed',
            analytics: analyticsCoowners.appCompleted
          },
          analytic_contract_not_available: {
            bind: 'analytics-contract-not-available',
            analytics: analyticsCoowners.pageViewContractNotAvailable
          },
          analytic_deferred_signature_coowners_operation_error: {
            bind: 'analytics-deferred-error',
            analytics: analyticsCoowners.operationError
          }
        }
      }
    }
  };

  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/deferred-signature-coowners'
    },
    pages,
    template,
    components: [contractSignMX, shareReceipt, controllerDm, deferredSignatureCoowners]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-contract-signing-mx', {
    widgetId: PAGE_NAME
  });

  return sphericaPageUtils.spherize(base);
};
