'use strict';

module.exports = CONFIG => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { catalogs, customersV1 } },
    native = false,
    nativeIos = false
  } = CONFIG;
  const pageName = 'kycValidationMx';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const analytics = require('./analytics/_kycValidationMx')();
  const extraHeaderClass = sphericaPageUtils.isSpherica() ? '' : 'dark-blue-bg';

  const base = {
    hash: 'kyc-validation-mx',
    currentPage: {
      url: '/kyc-validation-mx'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass,
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerHeight: 60,
        headerFixed: true,
        footerFixed: true,
        fixedHeaderFadeDisabled: true,
        fixOffsetScroll: 60,
        handleStoppedScroll: true,
        headerFadeDelay: 'fade-out',
        cellsConnections: {
          in: {
            [pageName + '_init_page_scroll']: {
              bind: 'recalculateStatusBarTop'
            }
          }
        }
      },
      propertiesSpherica: {
        className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: []
  };

  const bbvaKycValidationMx = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-feature-kyc-validation-mx',
    tagSpherica: 'bbva-feature-kyc-validation-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-kyc-validation-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-kyc-validation-mx-spherica',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      catalogsApiVersion: catalogs,
      customerApiVersion: customersV1,
      pageName,
      cellsConnections: {
        in: {
          navigation_profile_to_kyc_validation_mx: {
            bind: 'initKycFeature'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          navigation_proceedings_to_kyc_validation_mx: {
            bind: 'initKycProceedings'
          },
          proceedings_init_analytics_interactive_kyc_validation: {
            bind: 'analyticsConfig'
          },
          sign_modal_close_reset: {
            bind: 'hideSpinner'
          }
        },
        out: {
          [pageName + '_init_page']: {
            bind: 'init-kyc-refactor'
          },
          kyc_go_back_not_data_to_proceedings: {
            bind: 'kyc-validation-mx-go-back',
            backStep: true
          },
          [pageName + '_init_page_scroll']: {
            bind: 'kyc-validation-mx-scroll'
          },
          [pageName + '_show_multiestep']: {
            bind: 'kyc-validation-mx-show-multistep'
          },
          [pageName + '_open_multiestep']: {
            bind: 'kyc-validation-mx-open-multistep'
          },
          [pageName + '_prepare_data_for_proceedings']: {
            bind: 'kyc-validation-mx-prepare-data-for-proceedings'
          },
          [pageName + '_send_questionnaire']: {
            bind: 'kyc-validation-mx-completed-questionnaire'
          },
          [pageName + '_app_completed']: {
            bind: 'kyc-validation-mx-app-completed'
          },
          [pageName + '_app_footprint']: {
            bind: 'kyc-validation-mx-open-branch-full-modal'
          },
          [pageName + '_app_error_retry_request']: {
            bind: 'kyc-validation-mx-error-line-full-modal-retry-request'
          },
          [pageName + '_app_error_go_out']: {
            bind: 'kyc-validation-mx-error-line-full-modal-go-out'
          },
          global_set_in_storage: {
            bind: 'kyc-validation-mx-write-exception-case'
          },
          profile_perform_kyc_update: {
            bind: 'kyc-validation-mx-ui-write-just-updated-flag'
          },
          kyc_send_data_to_proceedings: {
            bind: 'kyc-validation-mx-send-data-proceedings',
            link: {
              page: 'proceedings'
            }
          },
          profile_reset_operatives: {
            bind: 'kyc-validation-mx-reset-profile'
          },
          kyc_navigate_to_account_detail: {
            bind: 'kyc-validation-mx-navigate-to-entry-point',
            link: {
              page: 'account',
              skipHistory: true,
              params: {
                productId: 'productId'
              },
              cleanUntil: 'account'
            }
          },
          kyc_navigate_to_dashboard: {
            bind: 'kyc-validation-mx-navigate-to-entry-point-deeplink',
            link: {
              page: 'dashboard'
            }
          },
          global_logout_sesion_expiration: {
            bind: 'kyc-validation-mx-logout-sesion'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos
    }
  };

  const analyticsKycValidationMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-kyc-validation-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          navigation_profile_to_kyc_validation_mx: {
            bind: 'analyticsConfig'
          },
          global_account_manager_user_segment_profile: {
            bind: 'segmentProfile'
          },
          proceedings_init_analytics_interactive_kyc_validation: {
            bind: 'analyticsConfig'
          },
          [pageName + '_kyc_customFields']: {
            bind: 'customFields'
          },
          [pageName + '_kyc_typology']: {
            bind: 'typology'
          },
          [pageName + '_kyc_primaryCategory']: {
            bind: 'primaryCategory'
          },
          [pageName + '_kyc_productName']: {
            bind: 'productName'
          },
          [pageName + '_init_page']: {
            bind: 'appPageVisit'
          },
          [pageName + '_show_multiestep']: {
            bind: 'appPageStarted'
          },
          [pageName + '_open_multiestep']: {
            bind: 'appPageStepSumary'
          },
          [pageName + '_prepare_data_for_proceedings']: {
            bind: 'appPageConfirmation'
          },
          [pageName + '_send_questionnaire']: {
            bind: 'appPageOtp'
          },
          [pageName + '_app_completed']: {
            bind: 'appCompleted'
          },
          [pageName + '_app_footprint']: {
            bind: 'appFootPrint'
          },
          [pageName + '_app_error_retry_request']: {
            bind: 'appErrorRetryRequest'
          },
          [pageName + '_app_error_go_out']: {
            bind: 'appErrorGoOut'
          }
        },
        out: {
          [pageName + '_APP_PAGE_VISIT']: {
            bind: 'analytics-page-visit',
            analytics: analytics.getAppPageVisit
          },
          [pageName + '_APP_PAGE_STARTED']: {
            bind: 'bbva-analytics-manager-kyc-validation-mx-app-page-started',
            analytics: analytics.getAppStarted
          },
          [pageName + '_APP_PAGE_STEP_SUMARY']: {
            bind: 'bbva-analytics-manager-kyc-validation-mx-app-page-sumary',
            analytics: analytics.getAppStepSummary
          },
          [pageName + '_APP_PAGE_STEP_CONFIRMATION']: {
            bind: 'bbva-analytics-manager-kyc-validation-mx-app-page-confirmation',
            analytics: analytics.getAppStepConfirmation
          },
          [pageName + '_APP_PAGE_STEP_OTP']: {
            bind: 'bbva-analytics-manager-kyc-validation-mx-app-page-otp',
            analytics: analytics.getAppStepOtp
          },
          [pageName + '_APP_PAGE_COMPLETED']: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          },
          [pageName + '_FOOTPRINT']: {
            bind: 'bbva-analytics-manager-kyc-validation-mx-app-footPrint',
            analytics: analytics.getFootprint()
          },
          [pageName + '_ERROR_RETRY_REQUEST']: {
            bind: 'bbva-analytics-manager-kyc-validation-mx-app-error-retry-request',
            analytics: analytics.getError()
          },
          [pageName + '_ERROR_GO_OUT']: {
            bind: 'bbva-analytics-manager-kyc-validation-mx-app-error-go-out',
            analytics: analytics.getError()
          }
        },
        params: {
          segmentProfile: 'segmentProfile',
          customFields: 'customFields'
        }
      }
    }
  };

  base.components.push(
    bbvaKycValidationMx,
    analyticsKycValidationMx
  );

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-kyc-validation-mx');

  return sphericaPageUtils.spherize(base);
};
