'use strict';

module.exports = CONFIG => {
  const {
    aemHost,
    aemHelpFaqsPath,
    globalServices: {
      host,
      publicSettingsHost,
      publicSettingsId,
      requiredToken = 'tsec',
      versions: {
        accountsV1,
        customerContactDetailsV1,
        fundsApiVersion,
        investmentApiVersion,
        investmentFundsApiVersionV0
      }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const { getLanguage, getLocalCurrency } = require('./common/helpers/_utils.js');
  const analytics = require('./analytics/_fundOriginationOcFund.js')();
  const pageName = 'fundOriginationOcFund';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const { minFundsAmounts } = require('./common/fundHelpers/_fundList');
  const pages = require('./common/helpers/index.js').getPages(CONFIG)(pageName);

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'horizontal',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      preventScrollWithOverlay: true,
      cellsConnections: {
        in: {
          fund_origination_oc_fund_init_page_channel: {
            bind: 'recalculateHeader'
          },
          fund_origination_oc_fund_exit_page_channel: {
            bind: 'resetLayerScroll'
          }
        },
        out: {
          fund_origination_oc_fund__product_detail_content_scroll_channel: {
            bind: 'template-content-scroll'
          }
        }
      }
    }
  };

  const ocFund = {
    zone: 'app__main',
    tag: 'fund-origination-oc-fund',
    familyPath: '@bbva-web-components-widgets/fund-origination-oc-fund',
    type: 'UI',
    render: 'litElement',
    properties: {
      pageName,
      language: getLanguage(),
      showHelpFaqs: true,
      aemHost: aemHost,
      aemHelpFaqsPath: aemHelpFaqsPath,
      accountsApiVersion: accountsV1,
      accountsParticipantsApiVersion: accountsV1,
      customersApiVersion: customerContactDetailsV1,
      fundsApiVersion: fundsApiVersion,
      investmentApiVersion: investmentApiVersion,
      investmentFundsApiVersion: investmentFundsApiVersionV0,
      host,
      native,
      nativeIOS: nativeIos,
      iOSFixedHeader: nativeIos,
      investmentFundProductId: 'COME',
      publicSettingsHost,
      publicSettingsId,
      requiredToken,
      otpId: pageName,
      fundList: minFundsAmounts,
      currency: getLocalCurrency(),
      country: 'mx',
      hasSuperCheck: true,
      isFlexibleModal: true,
      isNotRedirection: true,
      cellsConnections: {
        params: {
          customerId: 'global_user_id'
        },
        in: {
          __bridge_page_fundOriginationOcFund: {
            bind: 'initPage'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigateBack'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          dashboard_accounts: {
            bind: 'accounts'
          },
          fund_origination_oc_fund_clear_loader_channel: {
            bind: 'clearLoader'
          },
          sign_modal_close_reset: {
            bind: 'toggleVisibility'
          },
          fund_origination_oc_fund_set_flags: {
            bind: 'unneededBeneficiaries'
          },
          fund_origination_oc_fund_document_list: {
            bind: 'documentList'
          },
          fund_origination_oc_fund_legal_list: {
            bind: 'legalList'
          }
        },
        out: {
          fund_origination_oc_fund_request_notification_send_channel: {
            bind: 'fund-origination-oc-fund-receipt-config'
          },
          fund_origination_oc_fund_fund_list_response_channel: {
            bind: 'fund-origination-oc-fund-funds-response'
          },
          fund_origination_oc_fund_request_pdf_channel: {
            bind: 'fund-origination-oc-fund-document-click'
          },
          fund_origination_oc_fund_config_contract_receipt_channel: {
            bind: 'fund-origination-oc-fund-config-contract-receipt'
          },
          fund_origination_oc_fund_set_config_receipt_channel: {
            bind: 'fund-origination-oc-fund-set-config-receipt'
          },
          fund_origination_oc_fund_exit_page_channel: {
            bind: 'fund-origination-oc-fund-exit-page',
            backStep: true
          },
          fund_origination_oc_fund_navigate_dashboard_investment_channel: {
            bind: 'fund-origination-oc-fund-navigate-list-investment',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          fund_origination_oc_fund_navigate_mx_oc_fund_channel: {
            bind: 'fund-origination-oc-fund-navigate-mx-oc-fund',
            link: {
              page: 'fundsHiring',
              skipHistory: true
            }
          },
          fund_origination_oc_fund_fund_selected_channel: {
            bind: 'fund-origination-oc-fund-fund-select'
          },
          fund_origination_oc_fund_init_page_complete_channel: {
            bind: 'fund-origination-oc-fund-init-page-complete'
          },
          fund_origination_oc_fund_invest_amount_confirm_channel: {
            bind: 'fund-origination-oc-fund-invest-amount-confirm'
          },
          fund_origination_oc_fund_step_active_change_channel: {
            bind: 'fund-origination-oc-fund-step-active-change'
          },
          fund_origination_oc_fund_investment_completed_channel: {
            bind: 'fund-origination-oc-fund-investment-response'
          },
          fund_origination_oc_fund_modal_error_channel: {
            bind: 'fund-origination-oc-fund-modal-error-open'
          },
          fund_origination_oc_fund_modal_faqs_channel: {
            bind: 'fund-origination-oc-fund-faqs-modal-open'
          },
          fund_origination_oc_fund_modal_faqs_item_click_channel: {
            bind: 'fund-origination-oc-fund-faqs-menu-link-click'
          },
          fund_origination_oc_fund_footprint_accounts_step_channel: {
            bind: 'fund-origination-oc-fund-account-step-open'
          },
          fund_origination_oc_fund_app_custom_tag_check_all_channel: {
            bind: 'fund-origination-oc-fund-checkbox-select-all-click'
          },
          fund_origination_oc_fund_app_custom_tag_document_channel: {
            bind: 'fund-origination-oc-fund-document-click'
          },
          fund_origination_oc_fund_share_receipt_tag_channel: {
            bind: 'fund-origination-oc-fund-share-receipt-tag'
          },
          fund_origination_oc_fund_custom_tag_see_documents_channel: {
            bind: 'fund-origination-oc-fund-documents-btn-click'
          },
          fund_origination_oc_fund_app_custom_tag_view_invest_channel: {
            bind: 'fund-origination-oc-fund-navigate-list-investment'
          }
        }
      }
    }
  };

  const ocFundAnalytics = {
    zone: 'app__main',
    familyPath: '@glomo-web-components/bbva-analyticmanager-fund-origination-oc-fund',
    tag: 'bbva-analyticmanager-fund-origination-oc-fund',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          fund_origination_oc_fund_fund_selected_channel: {
            bind: 'updateProductName'
          },
          fund_origination_oc_fund_init_page_complete_channel: {
            bind: 'firePageVisit'
          },
          fund_origination_oc_fund_invest_amount_confirm_channel: {
            bind: 'fireAppStarted'
          },
          fund_origination_oc_fund_step_active_change_channel: {
            bind: 'fireStep'
          },
          fund_origination_oc_fund_investment_completed_channel: {
            bind: 'fireAppCompleted'
          },
          fund_origination_oc_fund_modal_error_channel: {
            bind: 'fireFootprintModalError'
          },
          fund_origination_oc_fund_modal_faqs_channel: {
            bind: 'fireFootprintFAQS'
          },
          fund_origination_oc_fund_modal_faqs_item_click_channel: {
            bind: 'fireFootprintFAQSDetail'
          },
          fund_origination_oc_fund_footprint_accounts_step_channel: {
            bind: 'fireFootprintAccount'
          },
          fund_origination_oc_fund_app_custom_tag_check_all_channel: {
            bind: 'fireCustomTagCheckbox'
          },
          fund_origination_oc_fund_app_custom_tag_document_channel: {
            bind: 'fireCustomTagDocumentClick'
          },
          fund_origination_oc_fund_share_receipt_tag_channel: {
            bind: 'fireCustomTagShareTag'
          },
          fund_origination_oc_fund_custom_tag_see_documents_channel: {
            bind: 'fireCustomTagSeeDocument'
          },
          fund_origination_oc_fund_app_custom_tag_view_invest_channel: {
            bind: 'fireCustomTagViewInvest'
          }
        },
        out: {
          fund_origination_oc_fund_analytics_app_page_visit: {
            bind: 'analytics-page-visit',
            analytics: analytics.appPageVisit
          },
          fund_origination_oc_fund_analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: analytics.appStarted
          },
          fund_origination_oc_fund_analytics_app_step2_terms_and_conditions: {
            bind: 'analytics-step-legal-step-open',
            analytics: analytics.appStepTermsAndConditions
          },
          fund_origination_oc_fund_analytics_app_step3_investment_summary: {
            bind: 'analytics-step-summary-step-open',
            analytics: analytics.appStepSummary
          },
          fund_origination_oc_fund_analytics_app_step4_otp: {
            bind: 'analytics-step-otp-modal-open',
            analytics: analytics.appStepOtpModal
          },
          fund_origination_oc_fund_analytics_app_completed: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          },
          fund_origination_oc_fund_analytics_footprint_modal_error: {
            bind: 'analytics-footprint-modal-error',
            analytics: analytics.modalErrors
          },
          fund_origination_oc_fund_analytics_footprint_modal_error_information: {
            bind: 'analytics-footprint-modal-error-information',
            analytics: analytics.modalErrorInformation
          },
          fund_origination_oc_fund_analytics_footprint_faqs: {
            bind: 'analytics-footprint-faqs',
            analytics: analytics.FAQs
          },
          fund_origination_oc_fund_analytics_footprint_faqs_item: {
            bind: 'analytics-footprint-faqs-item',
            analytics: analytics.FAQsItem
          },
          fund_origination_oc_fund_analytics_footprint_account_step: {
            bind: 'analytics-footprint-account-step',
            analytics: analytics.selectAccount
          },
          fund_origination_oc_fund_analytics_custom_tag_check: {
            bind: 'analytics-custom-tag-check',
            analytics: analytics.interactionLink
          },
          fund_origination_oc_fund_analytics_custom_tag_document: {
            bind: 'analytics-custom-tag-document',
            analytics: analytics.downloadLink
          },
          fund_origination_oc_fund_analytics_custom_tag_share: {
            bind: 'analytics-custom-tag-share',
            analytics: analytics.shareReceipt
          },
          fund_origination_oc_fund_analytics_custom_tag_see_documents: {
            bind: 'analytics-custom-tag-see-document',
            analytics: analytics.seeDocument
          },
          fund_origination_oc_fund_analytics_custom_tag_view_invest: {
            bind: 'analytics-custom-tag-view-invest',
            analytics: analytics.viewInvestment
          }
        }
      }
    }
  };

  const controller = {
    zone: 'app__main',
    familyPath: '@glomo-web-components/bbva-controller-fund-origination-oc-fund-mx',
    tag: 'bbva-controller-fund-origination-oc-fund-mx',
    type: 'DM',
    render: 'litElement',
    properties: {
      host,
      native,
      isNativeIos: nativeIos,
      requiredToken,
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'userDetail'
          },
          fund_origination_oc_fund_request_pdf_channel: {
            bind: 'requestDocument'
          },
          fund_origination_oc_fund_request_notification_send_channel: {
            bind: 'postNotificationSend'
          },
          fund_origination_oc_fund_success_pdf_base64_channel: {
            bind: 'successPostBusinessDocuments'
          },
          global_feature_flag_collection_updated: {
            bind: 'setFeatureFlags'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          }
        },
        out: {
          fund_origination_oc_fund_request_pdf_base64_channel: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-request-pdf-base64'
          },
          fund_origination_oc_fund_clear_loader_channel: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-clear-loader'
          },
          fund_origination_oc_fund_open_pdf_channel: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-open-pdf'
          },
          global_open_document_base64: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-open-pdf-base64'
          },
          fund_origination_oc_fund_set_flags: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-feature-flags'
          },
          fund_origination_oc_fund_document_list: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-document-list'
          },
          fund_origination_oc_fund_legal_list: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-legal-list'
          }
        }
      }
    }
  };

  const openDocument = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-open-document-mx',
    familyPath: 'cells-nativeconnector-open-document',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          fund_origination_oc_fund_open_pdf_channel: {
            bind: 'openByUrl'
          }
        },
        out: {
          fund_origination_oc_fund_clear_loader_channel: {
            bind: 'open-document-open-by-url-success'
          }
        }
      }
    }
  };

  const businessDocumentsApi = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          fund_origination_oc_fund_request_pdf_base64_channel: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          fund_origination_oc_fund_clear_loader_channel: {
            bind: 'error-on-post-business-documents'
          },
          fund_origination_oc_fund_success_pdf_base64_channel: {
            bind: 'post-business-documents-success'
          }
        }
      }
    }
  };

  const shareDm = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      language: getLanguage(),
      country: 'mx',
      headerReceipt: true,
      cellsConnections: {
        in: {
          fund_origination_oc_fund_set_config_receipt_channel: {
            bind: 'captureReceipt'
          },
          fund_origination_oc_fund_config_contract_receipt_channel: {
            bind: 'setProperties'
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
          },
          global_share_receipt_error_modal: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'fund-origination-oc-fund',
    currentPage: {
      url: '/fund-origination-oc-fund'
    },
    pages,
    template,
    components: [
      ocFund,
      ocFundAnalytics,
      openDocument,
      shareDm,
      controller,
      businessDocumentsApi
    ]
  };

  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signConnector('fund-origination-oc-fund');
  return sphericaPageUtils.spherize(base);
};
