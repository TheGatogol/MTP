'use strict';

module.exports = config => {
  const pageName = 'monthlyStatementEnquiry';
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { getLanguage } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { flexibleFinancings } },
    native = false,
    nativeIos = false
  } = config;
  const pdfConfig = {
    mimeType: 'application/pdf',
    title: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-error-retry-modal-header-text-key',
    headerColor: '#FFFFFFFF',
    tintColor: '#FF072146',
    canShare: false,
    titleColor: '#FF072146',
    blackStatusBar: false
  };
  const pages = require('./common/_pages')(config)(pageName);
  const analytics = require('./analytics/_monthlyStatementEnquiry')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const components = [
    {
      zone: 'app__main',
      type: 'UI',
      familyPath: '@glomo-web-components/card-information-monthly-statement-enquiry-card-flexible-financing-mx',
      tag: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx',
      render: 'litElement',
      properties: {
        locale: 'Mx',
        host,
        native,
        requiredToken,
        requiredOTP: true,
        language: getLanguage(),
        showButtonDefault: true,
        iOSFixedHeader: nativeIos,
        isActive: true,
        pdfDownloadParams: pdfConfig,
        flexibleFinancingApiVersion: flexibleFinancings,
        pageName,
        cellsConnections: {
          in: {
            global_open_document_base64_success: {
              bind: 'handleDownloadPdfSuccess'
            },
            global_open_document_base64_error: {
              bind: 'handleDownloadPdfError'
            },
            __bridge_cancelled_back_navigation: {
              bind: 'nativeBackNavigation'
            },
            widget_signature_handle_required_first_step: {
              bind: 'dispatchStepEvent'
            },
            sign_modal_cancelled: {
              bind: 'handleOtpCancelled'
            },
            widget_signature_close_modal_success: {
              bind: 'handleOtpCancelled'
            },
            widget_signature_close_modal_error: {
              bind: 'handleOtpCancelled'
            },
            global_set_app_settings: {
              bind: 'publicSettings'
            }
          },
          out: {
            global_open_document_base64: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-download-pdf',
              analytics: analytics.linkUrl
            },
            payment_dashboard_init_page: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-go-to-back',
              backStep: true
            },
            monthly_statement_enquiry_show_results: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-data-with-results',
              analytics: analytics.pageVisit
            },
            monthly_statement_enquiry_last_statement_selected: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-last-statement-selected',
              analytics: analytics.appStarted('ultimo estado de cuenta')
            },
            monthly_statement_enquiry_other_statement_selected: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-other-statement-selected',
              analytics: analytics.appStarted('otros estados de cuenta')
            },
            monthly_statement_enquiry_continue_button_click: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-continue-button-click',
              analytics: analytics.appStarted('consultar')
            },
            monthly_statement_enquiry_financial_statement_api_dm_fetch: {
              bind: 'generate-document-api-dm-create',
              analytics: analytics.appCompleted
            },
            monthly_statement_enquiry_fire_otp_event_otp: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-show-step',
              analytics: analytics.appStep
            },
            monthly_statement_enquiry_empty_results: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-data-without-results',
              analytics: analytics.emptyResults
            },
            monthly_statement_enquiry_show_maximum_error_retry_modal: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-show-maximum-error-retry-modal',
              analytics: analytics.operationError
            },
            monthly_statement_enquiry_otp_cancelled: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-otp-cancelled'
            },
            monthly_statement_enquiry_otp_opened: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-analytics-app-step-otp'
            },
            global_action_launcher_dialer: {
              bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-call-to-bank-click'
            }
          },
          params: {
            financingLineId: 'financialId',
            customerId: 'global_user_id'
          }
        }
      },
      propertiesSpherica: {
        newCellsConnections: {
          add: {
            out: {
              global_open_document_base64: {
                bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-pdf-download',
                analytics: analytics.linkUrl
              },
              monthly_statement_enquiry_go_back_to_previous_page: {
                bind: 'navigation-go-back',
                backStep: true
              },
              monthly_statement_enquiry_show_results: {
                bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-data-with-results-show',
                analytics: analytics.pageVisit
              },
              monthly_statement_enquiry_last_statement_selected: {
                bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-last-statement-select',
                analytics: analytics.appStarted('ultimo estado de cuenta')
              },
              monthly_statement_enquiry_other_statement_selected: {
                bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-other-statement-select',
                analytics: analytics.appStarted('otros estados de cuenta')
              },
              monthly_statement_enquiry_empty_results: {
                bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-data-without-results-show',
                analytics: analytics.emptyResults
              },
              monthly_statement_enquiry_show_maximum_error_retry_modal: {
                bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-maximum-error-retry-modal-show',
                analytics: analytics.operationError
              },
              monthly_statement_enquiry_otp_cancelled: {
                bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-otp-cancel'
              },
              global_action_launcher_dialer: {
                bind: 'card-information-monthly-statement-enquiry-card-flexible-financing-mx-call-to-bank-click'
              }
            }
          }
        }
      }
    }
  ];
  const base = {
    hash: 'monthly-statement-enquiry',
    currentPage: {
      url: '/monthly-statement-enquiry'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        headerHeight: 0,
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true
      }
    },
    components: [
      ...components
    ]
  };
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('card-information-monthly-statement-enquiry-card-flexible-financing-mx', {cancelAfterErrorFunction: 'handleOtpCancelled'});
  addCommonErrors(base.components);
  return sphericaPageUtils.spherize(base);
};
