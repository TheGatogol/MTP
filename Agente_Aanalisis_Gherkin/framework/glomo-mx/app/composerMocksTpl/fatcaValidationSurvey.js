'use strict';
module.exports = CONFIG => {
  const analytics = require('./analytics/_fatcaValidationSurvey')();
  const { globalServices: { host, requiredToken = 'tsec', versions: { catalogs, customersV1 } },
    nativeIos = false, native = false } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'fatcaValidationSurvey');
  const interactionsValues = {
    correctInfo: 'informacion correcta',
    incorrectInfo: 'informacion incorrecta',
    privacyNotice: 'aviso de privacidad',
    otherResidence: 'agregar otra direccion'
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      className: nativeIos ? 'ios-top-padding' : '',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true
    }
  };
  const fatcaValidationSurvey = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-fatca-validation-survey-mx',
    tagSpherica: 'bbva-feature-fatca-validation-survey-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-fatca-validation-survey-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-fatca-validation-survey-mx-spherica',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      catalogsApiVersion: catalogs,
      customerApiVersion: customersV1,
      native,
      cellsConnections: {
        in: {
          __bridge_page_fatcaValidationSurvey: {
            bind: 'bridgeReset'
          },
          navigation_to_fatca_validation_survey: {
            bind: 'customerData'
          },
          blue_redirect_edit_profile_tax_residence: {
            bind: 'customerData'
          },
          proceedings_modal_button_close: {
            bind: 'reset'
          }
        },
        out: {
          global_feature_close_operative: {
            bind: 'bbva-feature-fatca-validation-survey-mx-leave-operative',
            backStep: true
          },
          fatca_validation_survey_reason_selected: {
            bind: 'bbva-feature-fatca-validation-survey-mx-reason-select'
          },
          fatca_validation_survey_branch_load: {
            bind: 'bbva-feature-fatca-validation-survey-mx-branch-modal-load',
            analytics: analytics.getFatcaFootprint('acude a una sucursal')
          },
          fatca_validation_survey_complete_all_steps: {
            bind: 'bbva-feature-fatca-validation-survey-mx-complete-all-steps'
          },
          fatca_validation_survey_additional_residence_step_enabled: {
            bind: 'bbva-feature-fatca-validation-survey-mx-additional-tax-enabled'
          },
          fatca_validation_survey_add_additional_tax_residence: {
            bind: 'bbva-feature-fatca-validation-survey-mx-residence-form-open',
            analytics: analytics.getInternalLinkPage('add')
          },
          fatca_validation_survey_edit_tax_residence: {
            bind: 'bbva-feature-fatca-validation-survey-mx-residence-edit',
            analytics: analytics.getInternalLinkPage('edit')
          },
          fatca_validation_survey_error_operation_not_available: {
            bind: 'bbva-feature-fatca-validation-survey-mx-maximum-error-modal-visible',
            analytics: analytics.getFatcaFootprint('error operacion no realizada', true)
          },
          fatca_validation_survey_operation_number_receipt: {
            bind: 'bbva-feature-fatca-validation-survey-mx-receipt-modal-load'
          },
          fatca_validation_survey_fatca_load: {
            bind: 'bbva-feature-fatca-validation-survey-mx-feature-load'
          },
          fatca_validation_TAX_RESIDENCE_JUST_UPDATED: {
            bind: 'bbva-feature-fatca-validation-survey-mx-tax-residence-just-updated'
          },
          navigation_fatca_validation_survey_to_proceedings: {
            bind: 'bbva-feature-fatca-validation-survey-mx-navigate-to-proceedings',
            link: {
              page: 'proceedings'
            }
          }
        }
      }
    }
  };
  const analyticmanagerFatca = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-fatca-validation-survey',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      interactionsValues,
      cellsConnections: {
        in: {
          navigation_to_fatca_validation_survey: {
            bind: 'customerData'
          },
          fatca_validation_survey_fatca_load: {
            bind: 'onAppPageVisit'
          },
          fatca_validation_survey_reason_selected: {
            bind: 'onAppStarted'
          },
          fatca_validation_survey_complete_all_steps: {
            bind: 'onAppStepSummary'
          },
          widget_signature_handle_required_first_step: {
            bind: 'onAppStepOtp'
          },
          fatca_validation_survey_additional_residence_step_enabled: {
            bind: 'onAppPageView'
          },
          fatca_validation_survey_operation_number_receipt: {
            bind: 'onAppCompleted'
          }
        },
        out: {
          fatca_validation_survey_app_page_visit: {
            bind: 'analytics-page-visit',
            analytics: analytics.getAppPageVisit
          },
          fatca_validation_survey_app_started: {
            bind: 'analytics-app-started',
            analytics: analytics.getAppStarted
          },
          fatca_validation_survey_page_view_additional_tax_residence: {
            bind: 'analytics-page-view-additional-tax',
            analytics: analytics.getFatcaFootprint('residencia fiscal adicional')
          },
          fatca_validation_survey_app_step_summary: {
            bind: 'analytics-app-step-summary',
            analytics: analytics.getAppStepPage(2, 'confirmacion')
          },
          fatca_validation_survey_app_step_otp: {
            bind: 'analytics-app-step-otp',
            analytics: analytics.getAppStepPage(3, 'otp')
          },
          fatca_validation_survey_app_completed: {
            bind: 'analytics-app-completed',
            analytics: analytics.getAppCompleted
          }
        }
      }
    }
  };
  const base = {
    hash: 'fatca-validation-survey',
    currentPage: {
      url: '/fatca-validation-survey'
    },
    template,
    components: [
      fatcaValidationSurvey,
      analyticmanagerFatca
    ]
  };
  const errorAndSignConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignConnector('bbva-feature-fatca-validation-survey-mx', { cancelAfterErrorFunction: 'hideSpinner' });
  return sphericaPageUtils.spherize(base);
};
