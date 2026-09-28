'use strict';
const { QR_READER_SCREEN_CONFIG: qrVinculation } = require('./common/helpers/_constants');
const { useNames, createPrefixFromPageName, SPINNER: spinner } = require('./common/helpers/_utils');
const literals = require('../composerMocksTpl/analytics/common/_literals');
const _page = require('./common/_pages');
const pageName = 'payrollLinkBenefits';
const operativePrefix = createPrefixFromPageName(pageName);
const [ getChannelName ] = useNames(operativePrefix);
module.exports = (config) => {
  const analytics = require('./analytics/_payrollLink')(config);
  const payrollLinkPage = _page(config)(pageName);
  const native = !!config.native;
  const isNativeIos = !!config.nativeIos;
  const host = config.globalServices.host;
  const requiredToken = config.globalServices.requiredToken || 'tsec';
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          payroll_link_benefits_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          payroll_link_benefits_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          payroll_link_benefits_leave_operative_confirm: {
            bind: 'alert-CONFIRM-EXIT-PAYROLL-LINK-BENEFITS-OPERATIVE-accept'
          },
          payroll_link_benefits_modal_company_code_wrong: {
            bind: 'alert-COMPANY-CODE-WRONG-accept'
          },
          payroll_link_benefits_modal_company_data_not_found: {
            bind: 'alert-CONFIRM-BACK-TO-COMPANY-DATA-STEP-accept'
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica',
      override: {
        className: ''
      }
    })
  };
  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const bbvaHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'modal',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      text: 'payroll-link-page-header-title',
      cellsConnections: {
        out: {
          [getChannelName('req_header_close')]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'bbva-header-main-spherica',
      type: 'modal',
      override: {
        id: 'payroll-link-page-header-title',
        text: 'payroll-link-page-header-title',
        label: 'payroll-portability-close-label',
        cellsConnections: {
          out: {
            payroll_link_benefits_req_header_close: {
              bind: 'header-main-close-icon-click'
            }
          }
        }
      }
    })
  };
  const bbvaMultistepPayroll = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-onboarding-payroll-account',
    tagSpherica: 'bbva-multistep-onboarding-payroll-account-spherica',
    familyPath: '@glomo-web-components/bbva-multistep-onboarding-payroll-account',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-onboarding-payroll-account-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          payroll_send_customer_info: {
            bind: 'dataCustomer'
          },
          [getChannelName('set_account_info')]: {
            bind: 'dataAccount'
          },
          [getChannelName('get_business_data_error')]: {
            bind: 'dataBusinessObject'
          },
          [getChannelName('set_business_data')]: {
            bind: 'dataBusinessObject'
          },
          [getChannelName('send_qr_company_code')]: {
            bind: 'setCodeCompany'
          },
          [getChannelName('req_nav_pda')]: {
            bind: 'reset'
          },
          [getChannelName('payroll_link_success')]: {
            bind: 'reset'
          },
          [getChannelName('modal_company_data_not_found')]: {
            bind: 'resetCodeWrong'
          }
        },
        out: {
          [getChannelName('send_company_code_from_input')]: {
            bind: 'send-company-code'
          },
          [getChannelName('set_data_company')]: {
            bind: 'send-company-data'
          },
          [getChannelName('show_payroll_link_button')]: {
            bind: 'payroll-link-benefits-send-value-linking-button'
          },
          [getChannelName('send_account_info')]: {
            bind: 'send-number-account'
          },
          [getChannelName('open_company_data_not_found_modal')]: {
            bind: 'payroll-link-benefits-show-modal-company-data-not-found'
          },
          [getChannelName('prepare_nav_porta')]: {
            bind: 'notification-message-link-click'
          },
          [getChannelName('open_terms_and_conditions_modal')]: {
            bind: 'payroll-link-benefits-page-modal-terms-and-conditions'
          },
          [getChannelName('open_privacy_notice_modal')]: {
            bind: 'payroll-link-benefits-page-modal-privacy-notice'
          },
          [getChannelName('init_qr')]: {
            bind: 'payroll-link-benefits-page-show-qr'
          }
        }
      }
    }
  };
  const btnLinkPayroll = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'btnVinculation',
      className: 'u-display--table u-margin--center u-margin-top--1-5 u-margin-bottom--0-5',
      hidden: true,
      text: 'payroll-link-page-header-title',
      cellsConnections: {
        in: {
          [getChannelName('show_payroll_link_button')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('prepare_request_account_link')]: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      text: 'payroll-link-page-header-title-spherica',
      fullwidth: true,
      className: 'u-margin--grid u-margin-bottom--0-5 u-max-width--2',
      variant: 'positive'
    }
  };
  const payrollBenefitsDm = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-payroll-link-benefits',
    familyPath: '@glomo-web-components/bbva-manager-onboarding-payroll-account',
    render: 'litElement',
    properties: {
      isNative: native,
      qrConfigPayroll: qrVinculation.qrVinculationPlugin(isNativeIos),
      cellsConnections: {
        in: {
          global_account_set_account_for_operations: {
            bind: 'account'
          },
          payroll_send_account_info: {
            bind: 'data'
          },
          payroll_send_customer_info: {
            bind: 'dataCustomer'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          [getChannelName('init_page')]: {
            bind: 'requestAccount'
          },
          [getChannelName('req_header_close')]: {
            bind: 'backButtonHeader'
          },
          payroll_link_benefits_leave_operative_confirm: {
            bind: 'backButtonHeader'
          },
          [getChannelName('leave_operative_confirm')]: {
            bind: 'validateLeavePayrollLinkBenefits'
          },
          [getChannelName('send_company_code_from_input')]: {
            bind: 'requestCompanyCode'
          },
          [getChannelName('get_business_data_success')]: {
            bind: 'handleBussinessCodeSuccess'
          },
          [getChannelName('get_business_data_error')]: {
            bind: 'companyCodeWrong'
          },
          [getChannelName('set_data_company')]: {
            bind: 'handleDataCompany'
          },
          [getChannelName('show_payroll_link_button')]: {
            bind: 'handleStatusButton'
          },
          [getChannelName('prepare_request_account_link')]: {
            bind: 'getNextPage'
          },
          [getChannelName('post_business_vinculation_success')]: {
            bind: 'validateVinculationRequestsSuccess'
          },
          [getChannelName('business_data_not_available_service')]: {
            bind: 'companyCodeWrong'
          },
          [getChannelName('post_business_vinculation_error')]: {
            bind: 'validateVinculationRequestsError'
          },
          [getChannelName('vinculation_requests_existing_error')]: {
            bind: 'validateLeavePayrollLinkBenefits'
          },
          [getChannelName('vinculation_requests_error')]: {
            bind: 'validateLeavePayrollLinkBenefits'
          },
          [getChannelName('prepare_nav_porta')]: {
            bind: 'validateNavigation'
          },
          [getChannelName('open_company_data_not_found_modal')]: {
            bind: 'backCompanyDataStep'
          },
          [getChannelName('open_terms_and_conditions_modal')]: {
            bind: 'openTermsAndConditionsModal'
          },
          [getChannelName('open_privacy_notice_modal')]: {
            bind: 'openPrivacyModal'
          },
          [getChannelName('init_qr')]: {
            bind: 'managePluginParams'
          },
          [getChannelName('get_qr_content_success')]: {
            bind: 'qrDataReadSuccess'
          },
          global_qr_from_gallery: {
            bind: 'qrDataReadSuccess'
          },
          [getChannelName('response_qr_success')]: {
            bind: 'successQrPayment'
          },
          [getChannelName('retry_scan_qr')]: {
            bind: 'managePluginParams'
          },
          [getChannelName('error_qr_plugin')]: {
            bind: 'manageCloseProcess'
          },
          global_error_qr_from_gallery: {
            bind: 'qrDataReadSuccess'
          },
          global_cancel_qr_from_gallery: {
            bind: 'manageCloseProcess'
          },
          payroll_benefist_email: {
            bind: 'customerEmail'
          },
          payroll_send_assign: {
            bind: 'isLocal'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'payroll-send-modal-config'
          },
          [getChannelName('set_account_info')]: {
            bind: 'response-account'
          },
          [getChannelName('get_business_data_request')]: {
            bind: 'request-info-company-payroll'
          },
          [getChannelName('set_business_data')]: {
            bind: 'send-info-company-service'
          },
          [getChannelName('app_step_analytics')]: {
            bind: 'send-app-step-analytics'
          },
          [getChannelName('error_code_footprint')]: {
            bind: 'error-company-code-analytics',
            analytics: analytics.payrollLinkFootprint('transaccion', 'vinculacion nomina', 'codigo invalido', 'codigo invalido')
          },
          [getChannelName('post_business_vinculation_request')]: {
            bind: 'send-data-vinculation-requests-payroll-link-success'
          },
          [getChannelName('send_customer_email')]: {
            bind: 'send-customer-email'
          },
          [getChannelName('send_date_time')]: {
            bind: 'send-date-time'
          },
          [getChannelName('payroll_link_success')]: {
            bind: 'navigation-payroll-link-success',
            link: {
              page: 'payrollLinkSuccess'
            }
          },
          show_payroll_portability_main_channel: {
            bind: 'send-product-id-payroll-portability'
          },
          [getChannelName('req_nav_next_porta')]: {
            bind: 'navigate-payroll-portability',
            link: {
              page: 'payrollPortability'
            }
          },
          [getChannelName('navigate_to_e2e_page')]: {
            bind: 'navigate-payroll-e2e-page',
            link: {
              page: 'comingSoon'
            }
          },
          portabilitye2e_from_magic_log: {
            bind: 'payroll-e2e-page-params'
          },
          [getChannelName('send_qr_payroll_config')]: {
            bind: 'glomo-qr-plugin-params',
            analytics: analytics.payrollLinkFootprint('transaccion', 'vinculacion nomina', 'escanea qr')
          },
          [getChannelName('response_qr_success')]: {
            bind: 'qr-content-success'
          },
          [getChannelName('send_qr_company_code')]: {
            bind: 'send-company-code-from-qr'
          },
          [getChannelName('qr_invalid_analytics')]: {
            bind: 'error-qr-analytics',
            analytics: analytics.payrollLinkFootprint('transaccion', 'vinculacion nomina', 'qr invalido', 'qr invalido')
          },
          modal_logout_automatic: {
            bind: 'logout-payroll-operative'
          },
          [getChannelName('req_nav_pda')]: {
            bind: 'navigate-to-pda-from-payroll-link-benefits',
            backStep: true
          },
          global_retry_error: {
            bind: 'retry-error'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            payroll_link_benefits_open_with_settings_spherica: {
              bind: 'payroll-send-modal-config'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };
  const dataprovider = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-payrolls',
    familyPath: '@glomo-web-components/bbva-dataprovider-payrolls',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('get_business_data_request')]: {
            bind: 'getBusinessVinculationId'
          },
          [getChannelName('post_business_vinculation_request')]: {
            bind: 'postBusinessVinculationPayrollRequest'
          }
        },
        out: {
          [getChannelName('get_business_data_success')]: {
            bind: 'get-business-vinculation-id-v0-success'
          },
          [getChannelName('get_business_data_error')]: {
            bind: 'get-business-vinculation-id-v0-error'
          },
          [getChannelName('post_business_vinculation_success')]: {
            bind: 'post-business-vinculation-payroll-requests-v0-success'
          },
          [getChannelName('post_business_vinculation_error')]: {
            bind: 'post-business-vinculation-payroll-requests-v0-error'
          },
          [getChannelName('business_data_not_available_service')]: {
            bind: 'api-dm-error',
            analytics: analytics.payrollLinkFootprint('transaccion', 'vinculacion nomina', 'operacion no realizada', 'operacion no realizada')
          }
        }
      }
    }
  };
  const bbvaQrPlugin = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-nativeconnector-bbva-qr',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('send_qr_payroll_config')]: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          [getChannelName('get_qr_content_success')]: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          [getChannelName('error_qr_plugin')]: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };
  const analyticsPayroll = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-onboarding-payroll-account-analytics',
    familyPath: '@glomo-web-components/bbva-manager-onboarding-payroll-account',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('set_account_info')]: {
            bind: 'appSearchCompanyStep'
          },
          [getChannelName('app_step_analytics')]: {
            bind: 'createNameAppStep'
          },
          [getChannelName('post_business_vinculation_success')]: {
            bind: 'createAppCompleted'
          },
          [getChannelName('post_business_vinculation_error')]: {
            bind: 'createFootPrintVinculationExist'
          }
        },
        out: {
          [getChannelName('app_step_search_company')]: {
            bind: 'fire-app-search-company-step-analytics',
            analytics: analytics._getCurrentStep(2, '2 ' + literals.commons.dataCompany)
          },
          [getChannelName('app_step_data_found_company')]: {
            bind: 'fire-app-company-found-step-analytics',
            analytics: analytics._getCurrentStep(3, '3 ' + literals.commons.dataFound)
          },
          [getChannelName('app_step_terms_and_condition')]: {
            bind: 'fire-app-terms-and-conditions-step-analytics',
            analytics: analytics._getCurrentStep(4, literals.commons.fourthTermsAndConditions)
          },
          [getChannelName('app_step_view_request_link')]: {
            bind: 'fire-app-view-request-link-step-analytics',
            analytics: analytics._getCurrentStep(5, literals.commons.fifthConfirmation)
          },
          [getChannelName('app_completed')]: {
            bind: 'fire-app-completed-analytics',
            analytics: analytics.appCompleted
          },
          [getChannelName('error_exist_link_analytics')]: {
            bind: 'fire-app-error-vinculation-exist-analytics',
            analytics: analytics.payrollLinkFootprint('transaccion', 'vinculacion nomina', 'solicitud existente', 'solicitud existente')
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };
  const base = {
    hash: 'mx-payroll-link-benefits',
    currentPage: {
      url: '/payroll-link-benefits'
    },
    pages: payrollLinkPage,
    template,
    components: [
      handleLifeCycle,
      spinner(config),
      bbvaHeader,
      bbvaMultistepPayroll,
      btnLinkPayroll,
      payrollBenefitsDm,
      dataprovider,
      analyticsPayroll,
      bbvaQrPlugin
    ]
  };
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'PAYROLL-CODE-NOT-AVAILABLE',
      acceptRetry: { bind: 'retryCompanyCodeRequest', component: 'bbva-manager-payroll-link-benefits' }
    }
  ]);
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
