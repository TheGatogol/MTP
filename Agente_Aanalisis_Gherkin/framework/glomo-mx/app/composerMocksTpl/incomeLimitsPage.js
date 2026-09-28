'use strict';
module.exports = (config) => {
  const pageName = 'incomeLimitsPage';
  const {
    getLanguage,
    APP_SIDEBAR: appSidebar
  } = require('./common/helpers/_utils');
  const analytics = require('./analytics/_incomeLimits')(config);
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      portunusConfig,
      commonOnyxConfig,
      incomeLimitsOnyxConfig: onyxConfig,
      versions: {
        limitsV1,
        moneyLaundering,
        documentProcesses
      }
    },
    native = false,
    nativeShell = false,
    nativeIos = false
  } = config;
  const pages = require('./common/_pages')(config)(pageName);

  const base = {
    hash: 'income-limits-page',
    currentPage: {
      url: '/income-limits-page'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        className: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        rightDrawer: true,
        preventScrollWithOverlay: true,
        avoidToggleMenu: nativeShell,
        disableEdgeSwipe: nativeShell,
        cellsConnections: {
          in: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-nativeconnector-show-info',
        familyPath: '@glomo-web-components/bbva-nativeconnector-show-info',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              income_limits_call_show_info_plugin: {
                bind: 'nativeListModal'
              }
            },
            out: {
              income_limits_proof_of_income_native_selected: {
                bind: 'show-info-native-list-modal-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-nativeconnector-file-fetcher-plugin',
        familyPath: '@glomo-web-components/bbva-nativeconnector-file-fetcher-plugin',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              income_limits_navigation_open_find_explorer_file: {
                bind: 'fileFetch'
              }
            },
            out: {
              income_limits_navigation_succes_open_file: {
                bind: 'file-fetch-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-feature-income-limits-mx',
        tag: 'bbva-feature-income-limits-mx',
        properties: {
          host,
          native,
          portunusConfig,
          onyxConfig: {...onyxConfig,
            host: commonOnyxConfig?.host,
            version: commonOnyxConfig?.version,
            nsId: commonOnyxConfig?.nsId,
            statementVersion: commonOnyxConfig?.version,
            statementNsId: commonOnyxConfig?.nsId
          },
          requiredToken,
          requiredOTP: true,
          iOSFixedHeader: nativeIos,
          limitsApiVersion: limitsV1,
          moneyLaunderingApiVersion: moneyLaundering,
          documentProcessesProspectDocumentsApiVersion: documentProcesses,
          country: 'mx',
          language: getLanguage(),
          isVisible: true,
          operativeLimitId: 'GLOBAL',
          incomeDepositTransfer: 'EFE',
          moneyLaunderingPaginationKey: '1',
          moneyLaunderingPageSize: '10',
          cellsConnections: {
            in: {
              settings_navigate_to_income_limits: {
                bind: 'init'
              },
              [`${native ? 'native_user_id' : 'global_login_success'}`]: {
                bind: 'loginSuccess'
              },
              sign_modal_close_reset: {
                bind: 'signOtpClose'
              },
              sign_modal_open: {
                bind: 'signOtpOpen'
              },
              global_client_id: {
                bind: 'getCustomerId'
              },
              global_storage_get_loginData_success: {
                bind: 'getCustomerId'
              },
              income_limits_navigation_succes_open_file: {
                bind: 'fileFetchSuccess'
              },
              income_limits_proof_of_income_native_selected: {
                bind: 'setProofOfIncomeSelected'
              }
            },
            out: {
              global_open_native_menu: {
                bind: 'bbva-feature-income-limits-mx-menu-icon-click',
                'forward-to-native': true
              },
              income_limits_navigation_back: {
                bind: 'bbva-feature-income-limits-mx-exit-click',
                backStep: true
              },
              income_limits_navigation_open_find_explorer_file: {
                bind: 'bbva-feature-income-limits-mx-file-fetch-open'
              },
              income_limits_call_show_info_plugin: {
                bind: 'bbva-feature-income-limits-mx-selector-native-open'
              },
              global_open_document: {
                bind: 'bbva-feature-income-limits-mx-view-document-click'
              },
              income_limits_cash_deposit: {
                bind: 'bbva-feature-income-limits-mx-cash-deposit',
                analytics: analytics.appPageViewIncomeLimits('depositos en efectivo')
              },
              income_limits_cash_deposit_info: {
                bind: 'bbva-feature-income-limits-mx-cash-deposit-info-show',
                analytics: analytics.appPageViewIncomeLimitsMultistep('depositos en efectivo', 'informacion depositos en efectivo')
              },
              income_limits_economic_activity: {
                bind: 'bbva-feature-income-limits-mx-economic-activity-start',
                analytics: analytics.appPageViewIncomeLimitsMultistep('depositos en efectivo', 'actividad economica')
              },
              income_limits_economic_activity_complete: {
                bind: 'bbva-feature-income-limits-mx-economic-activity-step-complete',
                analytics: analytics.appPageViewIncomeLimitsMultistep('depositos en efectivo', 'comprobante de ingresos pfae')
              },
              income_limits_selected_proof_of_income_dm: {
                bind: 'bbva-feature-income-limits-mx-modal-type-dm-open',
                analytics: analytics.appPageViewSelectedProofOfIncome('depositos en efectivo', 'dm')
              },
              income_limits_selected_proof_of_income_da: {
                bind: 'bbva-feature-income-limits-mx-modal-type-da-open',
                analytics: analytics.appPageViewSelectedProofOfIncome('depositos en efectivo', 'da')
              },
              income_limits_selected_proof_of_income_cc: {
                bind: 'bbva-feature-income-limits-mx-modal-type-cc-open',
                analytics: analytics.appPageViewSelectedProofOfIncome('depositos en efectivo', 'cc')
              },
              income_limits_selected_proof_of_income_ff: {
                bind: 'bbva-feature-income-limits-mx-modal-type-ff-open',
                analytics: analytics.appPageViewSelectedProofOfIncome('depositos en efectivo', 'ff')
              },
              income_limits_selected_proof_of_income_cv: {
                bind: 'bbva-feature-income-limits-mx-modal-type-cv-open',
                analytics: analytics.appPageViewSelectedProofOfIncome('depositos en efectivo', 'cv')
              },
              income_limits_proof_of_income_complete: {
                bind: 'bbva-feature-income-limits-proof-of-income-step-complete',
                analytics: analytics.appPageViewIncomeLimitsMultistep('depositos en efectivo', 'declaracion')
              },
              income_limits_agreement_complete: {
                bind: 'bbva-feature-income-limits-agreement-step-complete',
                analytics: analytics.appPageViewIncomeLimitsMultistep('depositos en efectivo', 'resumen')
              },
              income_limits_soft_token: {
                bind: 'bbva-feature-income-limits-mx-otp-open',
                analytics: analytics.appPageViewOTP('depositos en efectivo', 'otp')
              },
              income_limits_success_modal: {
                bind: 'bbva-feature-income-limits-mx-modal-validate',
                analytics: analytics.appPageViewIncomeLimitsMultistep('depositos en efectivo', 'informacion enviada')
              },
              income_limits_rejection_type_error_n: {
                bind: 'bbva-feature-income-limits-mx-notification-type-n-error',
                analytics: analytics.appSiteErrorIncomeLimits('depositos en efectivo', 'n')
              },
              income_limits_rejection_type_error_ac: {
                bind: 'bbva-feature-income-limits-mx-notification-type-ac-error',
                analytics: analytics.appSiteErrorIncomeLimits('depositos en efectivo', 'ac')
              },
              income_limits_rejection_type_error_r: {
                bind: 'bbva-feature-income-limits-mx-notification-type-r-error',
                analytics: analytics.appSiteErrorIncomeLimits('depositos en efectivo', 'r')
              },
              income_limits_notification_type_error_d1: {
                bind: 'bbva-feature-income-limits-mx-rejection-type-d1-error',
                analytics: analytics.appSiteErrorIncomeLimits('depositos en efectivo', 'd1')
              },
              income_limits_notification_type_error_d2: {
                bind: 'bbva-feature-income-limits-mx-rejection-type-d2-error',
                analytics: analytics.appSiteErrorIncomeLimits('depositos en efectivo', 'd2')
              },
              income_limits_notification_type_error_d3: {
                bind: 'bbva-feature-income-limits-mx-rejection-type-d3-error',
                analytics: analytics.appSiteErrorIncomeLimits('depositos en efectivo', 'd3')
              },
              income_limits_create_folio_error_modal: {
                bind: 'bbva-feature-income-limits-mx-error-modal-createfolioerror-retry',
                analytics: analytics.appErrorPageIncomeLimits('depositos en efectivo', 'error servicio no disponible', 'error servicio no disponible')
              },
              income_limits_soft_token_error_modal: {
                bind: 'bbva-feature-income-limits-mx-error-modal-updatefolioerror-retry',
                analytics: analytics.appErrorPageUpdateFolio('depositos en efectivo', 'error servicio no disponible softoken', 'error servicio no disponible softoken')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-nativeconnector-open-document',
        familyPath: '@glomo-web-components/bbva-nativeconnector-open-document',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              global_open_document: {
                bind: 'openByBase64'
              }
            },
            out: {
              global_open_document_success: {
                bind: 'open-document-open-by-base64-success'
              }
            }
          }
        }
      },
      appSidebar(config)
    ]
  };

  const signConnector = require('./common/_widget-sign-connector')(config)(base);
  signConnector('bbva-feature-income-limits-mx');

  return base;
};

