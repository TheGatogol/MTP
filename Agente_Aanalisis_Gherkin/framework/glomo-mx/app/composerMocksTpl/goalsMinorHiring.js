'use strict';

module.exports = (CONFIG) => {
  const pageName = 'goalsMinorHiring';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { environment, native = false, nativeIos = false,
    globalServices: { host, requiredToken = 'tsec',
      security: { headers: { authenticationType } },
      versions: { accounts, customersV1, businessDocument }
    }
  } = CONFIG;
  const { glomoOpenDocument, SPINNERSPHERICA: createSpinner, getLanguage, getLocalCurrency,
    detailDownloadParams } = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { requestBBVAPlanDocumentparams, documentsOperation, createAccount } = require('./pfm/_constants');
  detailDownloadParams.body = {
    documentTemplate: {
      templateType: {
        id: 'PDF'
      }
    }
  };
  const {
    funnelProductDetail,
    funnelPageVisit,
    funnelAppStarted,
    getFunnelAppStep,
    appCompleted,
    getFootPrintData,
    getInteraction,
    getFootPrintError
  } = require('./analytics/_goalsMinorHiring')();

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      className: nativeIos ? 'ios-top-padding' : '',
      disableScrollLock: true,
      headerFixed: true,
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg'
    }
  };

  const accountOriginationSavingGoalsYoungsters = {
    zone: 'app__main',
    type: 'UI',
    tag: 'account-origination-saving-goals-youngsters-mx',
    render: 'litElement',
    familyPath: '@glomo-web-components/account-origination-saving-goals-youngsters-mx',
    properties: {
      language: getLanguage(),
      host,
      createAccount,
      documentsOperation,
      requiredToken,
      requiredOtp: true,
      native,
      country: 'mx',
      currency: getLocalCurrency(),
      authenticationType,
      accountsApiVersion: accounts,
      customersApiVersion: customersV1,
      attachToBody: native,
      cellsConnections: {
        in: {
          __bridge_page_goalsMinorHiring: {
            bind: 'initGoalsMinorsHiring'
          },
          register_device: {
            bind: 'deviceId'
          },
          goals_minor_create_account_params: {
            bind: 'createAccountParams'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          goals_minor_set_contracts_minors: {
            bind: 'contracts'
          },
          goals_minor_request_accounts: {
            bind: 'hasDataAccounts'
          },
          goals_error_get_bd: {
            bind: 'getBusinessDocumentsError'
          },
          goals_error_post_bd: {
            bind: 'postBusinessDocumentsError'
          },
          navigate_to_goals_minors_hiring: {
            bind: 'setFromAccountDetail'
          }
        },
        out: {
          navigation_financial_overview_exit_financial_path: {
            bind: 'goals-minors-close-full',
            backStep: true
          },
          navigation_financial_overview_exit_success_full_page: {
            bind: 'close-exit-success',
            link: {
              page: 'contractProductSection'
            }
          },
          goals_minor_accounts_user_data: {
            bind: 'send-accounts-data-products-minors'
          },
          goals_minor_document_sucess: {
            bind: 'goals-minor-document-sucess'
          },
          account_origination_file_clicked: {
            bind: 'account-origination-file-clicked-request'
          },
          analytics_account_origination_click_terms_conditions_pdf: {
            bind: 'analytics-account-origination-click-terms-conditions-pdf',
            analytics: getInteraction()
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          goals_minor_hiring_closed: {
            bind: 'goals-minors-hiring-closed',
            backStep: true
          },
          account_origination_saving_goals_get_request_params: {
            bind: 'account-origination-saving-goals-get-request-params'
          },
          analitycs_goals_minor_hiring_product_detail_started: {
            bind: 'analytics-goals-minors-hiring-app-on-click-start-product-detail'
          },
          anlytic_account_origination_contracting_typology: {
            bind: 'analytics-goals-minors-hiring-contracting-typology'
          },
          analytics_goals_minors_hiring_home_continue_clicked: {
            bind: 'analytics-goals-minors-hiring-home-continue-clicked'
          },
          analytics_goals_minors_hiring_footprint_page_view_one: {
            bind: 'analytics-goals-minors-hiring-footprint-page-view-one',
            analytics: getFootPrintData('cuenta asociada')
          },
          analytics_goals_minors_hiring_app_step_two: {
            bind: 'analytics-goals-minors-hiring-app-step-two'
          },
          analityc_goals_minors_hiring_app_account_created_successfully: {
            bind: 'analityc-goals-minors-hiring-app-account-created-successfully'
          },
          analityc_goals_minors_hiring_app_account_error_duplicated: {
            bind: 'analityc-goals-minors-hiring-app-account-error-duplicated',
            analytics: getFootPrintError('error plan ya contratado')
          },
          analityc_goals_minors_hiring_app_account_error_operation: {
            bind: 'analityc-goals-minors-hiring-app-account-error-operation',
            analytics: getFootPrintError('error operacion no realizada')
          },
          analytics_goals_minors_hiring_footprint_page_view_three: {
            bind: 'analytics-goals-minors-hiring-footprint-page-view-three',
            analytics: getFootPrintError('error operacion no disponible')
          },
          analytics_goals_minors_hiring_home_know_more_clicked: {
            bind: 'analytics-goals-minors-hiring-home-know-more-clicked'
          },
          analytics_goals_minors_hiring_footprint_page_view_two: {
            bind: 'analytics-goals-minors-hiring-footprint-page-view-two',
            analytics: getFootPrintData('saber mas sobre plan')
          },
          analytics_acount_origination_link_terms_conditions_clicked: {
            bind: 'analytics-account-origination-link-terms-conditions-pdf'
          },
          analityc_account_origination_step_confirmation_clicked: {
            bind: 'analityc-account-origination-step-confirmation-clicked',
            analytics: getFootPrintData('confirmacion')
          },
          analityc_account_origination_terms_and_conditions_checked: {
            bind: 'analityc-account-origination-terms-and-conditions-checked',
            analytics: getInteraction('acepto terminos y condiciones')
          },
          analytics_account_origination_no_accounts_error: {
            bind: 'analytics-account-origination-no-accounts-error',
            analytics: getFootPrintError('error informacion no disponible')
          }
        }
      }
    }
  };

  const businessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-business-documents',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-dataprovider-business-documents',
    properties: {
      host,
      apiVersion: businessDocument,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          goals_minor_request_business_document_plan: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          goals_success_response_pdf: {
            bind: 'get-business-documents-v0-success'
          },
          goals_error_get_bd: {
            bind: 'get-business-documents-v0-error'
          },
          goals_success_post_bd: {
            bind: 'post-business-documents-contracts-v0-success'
          },
          goals_error_post_bd: {
            bind: 'post-business-documents-contracts-v0-error'
          }
        }
      }
    }
  };

  const bbvaManagerGoalsMinorHiring = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-goals-minor-hiring',
    familyPath: '@glomo-web-components/bbva-manager-goals',
    render: 'litElement',
    properties: {
      host,
      authenticationType,
      environment,
      native,
      requestParams: requestBBVAPlanDocumentparams,
      detailDownloadConfig: detailDownloadParams,
      documentTitle: 'metas-saving-goals-plan-account-contract',
      cellsConnections: {
        in: {
          register_device: {
            bind: 'deviceId'
          },
          dashboard_accounts: {
            bind: 'setListAccountsData'
          },
          account_origination_file_clicked: {
            bind: 'requestBusinessDocument'
          },
          goals_success_response_pdf: {
            bind: 'requestDocumentParams'
          },
          goals_success_post_bd: {
            bind: 'postDocumentResponse'
          },
          goals_minor_accounts_user_data: {
            bind: 'setListAccountsDataService'
          },
          global_open_document_url_success: {
            bind: 'closeDocument'
          },
          global_open_document_url_error: {
            bind: 'closeDocument'
          },
          account_origination_saving_goals_get_request_params: {
            bind: 'sendCreateAccountParams'
          }
        },
        out: {
          goals_minor_create_account_params: {
            bind: 'goals-minor-hiring-create-account-params'
          },
          goals_minor_set_contracts_minors: {
            bind: 'set-accounts-data-products-minors'
          },
          goals_minor_request_accounts: {
            bind: 'fetch-accounts-data-products-minors'
          },
          goals_minor_request_business_document_plan: {
            bind: 'send-request-document-params'
          },
          global_open_document_url: {
            bind: 'goals-minor-native-request-pdf'
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

  const bbvaAnalyticManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-goals-hiring-youngster',
    familyPath: '@glomo-web-components/bbva-manager-goals',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          anlytic_account_origination_contracting_typology: {
            bind: 'setTypology'
          },
          widget_signature_handle_required_first_step: {
            bind: 'setAppStepOtp'
          },
          analityc_goals_minors_hiring_app_account_created_successfully: {
            bind: 'setOperationNumber'
          },
          analytics_goals_minors_hiring_home_know_more_clicked: {
            bind: 'handleKnowMoreClick'
          },
          analytics_acount_origination_link_terms_conditions_clicked: {
            bind: 'handleClickTerms'
          },
          analytics_goals_minors_hiring_home_continue_clicked: {
            bind: 'handleContinueClick'
          },
          analytics_goals_minors_hiring_app_step_two: {
            bind: 'checkBoxTermsAccepted'
          },
          analitycs_goals_minor_hiring_product_detail_started: {
            bind: 'setInternalCampaignAttributes'
          }
        },
        out: {
          bbva_analytic_manager_goals_hiring_youngster_set_typology: {
            bind: 'bbva-analytic-manager-goals-hiring-youngster-set-typology',
            analytics: funnelPageVisit
          },
          bbva_analytic_manager_goals_hiring_youngster_know_more_clicked: {
            bind: 'bbva-analytic-manager-goals-hiring-youngster-know-more-clicked',
            analytics: funnelAppStarted
          },
          bbva_analytic_manager_goals_hiring_youngster_click_terms_conditions: {
            bind: 'bbva-analytic-manager-goals-hiring-youngster-click-terms-conditions',
            analytics: funnelAppStarted
          },
          bbva_analytic_manager_goals_hiring_youngster_continue_clicked: {
            bind: 'bbva-analytic-manager-goals-hiring-youngster-continue-clicked',
            analytics: funnelAppStarted
          },
          bbva_analytic_manager_goals_hiring_youngster_application_step_two: {
            bind: 'bbva-analytic-manager-goals-hiring-youngster-application-step-two',
            analytics: getFunnelAppStep('2')
          },
          bbva_analytic_manager_goals_hiring_youngster_app_account_created_successfully: {
            bind: 'bbva-analytic-manager-goals-hiring-youngster-step-completed-successfully',
            analytics: appCompleted
          },
          bbva_analytic_manager_goals_hiring_youngster_app_step_otp: {
            bind: 'bbva-analytic-manager-goals-hiring-youngster-app-step-otp',
            analytics: getFunnelAppStep('3')
          },
          bbva_analytic_manager_goals_hiring_youngster_product_detail_app_on_click_start: {
            bind: 'bbva-analytic-manager-goals-hiring-youngster-set-internal-campaign-attributes',
            analytics: funnelProductDetail
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/goals-minor-hiring'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      bbvaManagerGoalsMinorHiring,
      businessDocuments,
      bbvaAnalyticManager,
      accountOriginationSavingGoalsYoungsters
    ]
  };

  if (native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('account-origination-saving-goals-youngsters-mx');
  addCommonErrors(base.components)();

  return base;
};
