'use strict';

module.exports = (CONFIG) => {
  const pageName = 'registerTag';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { glomoOpenDocument, headerHeightMinimum } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { customersV1, businessDocumentsV0, paymentsV0, paymentsV2 }
    },
    native = false,
    nativeIos = false
  } = CONFIG;

  const literals = require('./analytics/common/_literals');
  const analyticsTagRegister = require('./analytics/_glomo-analytics-manager')(CONFIG);

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      id: 'cells-template-register-tag',
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      extraHeaderClass: 'bbva-core-blue',
      headerHeightMinimum,
      className: nativeIos ? 'ios-top-padding' : '',
      headerHeight: 0,
      iOSFixedHeader: nativeIos
    }
  };

  const nativeComponent = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          tag_open_native_settings: {
            bind: 'openSetting'
          }
        }
      }
    }
  };

  const featureTollEnrollmentMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-toll-enrollment-mx',
    familyPath: '@glomo-web-components/bbva-feature-toll-enrollment-mx',
    render: 'litElement',
    properties: {
      host,
      customersApiVersion: customersV1,
      businessDocumentsApiVersion: businessDocumentsV0,
      paymentsApiVersionV0: paymentsV0,
      paymentsApiVersionV2: paymentsV2,
      requiredToken,
      native,
      requiredOtp: true,
      status: 'registerTagMultistep',
      selectedPluginConfig: nativeIos ? 'ios' : 'android',
      classStepNumber: true,
      cellsConnections: {
        in: {
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          global_login_success: {
            bind: 'globalCacheStorage'
          },
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_registerTag: {
            bind: 'init'
          },
          NAVIGATION_TO_REGISTER_INFO_TAG_COMPLETE_PAGE: {
            bind: 'handleCompleteTagRegistration'
          }

        },
        out: {
          navigation_to_previous_page: {
            bind: 'bbva-feature-toll-enrollment-mx-back-navigation',
            backStep: true
          },
          global_open_document_base64: {
            bind: 'show-document-event'
          },
          global_action_launcher_dialer: {
            bind: 'request-tag-call'
          },
          NAVIGATION_TO_SUCCESS_PAGE: {
            bind: 'navigation-to-success-event',
            link: {
              page: 'registerTagSuccess'
            }
          },
          navigation_home_dashboard: {
            bind: 'navigation-home-event',
            link: {
              page: 'dashboard'
            }
          },
          NAVIGATION_TO_REGISTER_INFO_TAG_BARCODE: {
            bind: 'navigation-select-tag-registration-barcode-code-reader-result',
            link: {
              page: 'registerInfoTag'
            }
          },
          NAVIGATION_TO_REGISTER_INFO_TAG_MANUALLY: {
            bind: 'navigation-select-tag-registration-manually',
            link: {
              page: 'registerInfoTag',
              cleanUntil: pageName
            }
          },
          tag_open_native_settings: {
            bind: 'open-native-settings'
          },
          register_tag_ANALYTICS_PAGE_VIEW_REGISTER_TAG: {
            bind: 'analytics-page-visit',
            analytics: analyticsTagRegister.pageViewVisit(literals.tag.register, literals.commons.first_detail, literals.commons.first_detail, literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STARTED_TOOLTIP: {
            bind: 'analytics-app-started-tooltip',
            analytics: analyticsTagRegister.appStartedTooltip
          },
          register_tag_ANALYTICS_APP_STARTED_MORE_INFO: {
            bind: 'analytics-app-started-more-info',
            analytics: analyticsTagRegister.appStartedMoreInfo
          },
          register_tag_ANALYTICS_APP_STARTED_PHONE_CALL: {
            bind: 'analytics-app-started-phone-call',
            analytics: analyticsTagRegister.appStartedPhoneCall
          },
          register_tag_ANALYTICS_APP_STARTED_REGISTER_TAG: {
            bind: 'analytics-app-started-register-tag',
            analytics: analyticsTagRegister.appStartedRegisterTag
          },
          register_tag_ANALYTICS_FOOTPRINT_PROVIDER: {
            bind: 'analytics-footprint-provider',
            analytics: analyticsTagRegister.footprintProviderTag()
          },
          register_tag_ANALYTICS_APP_STEP_2: {
            bind: 'analytics-app-step-2',
            analytics: analyticsTagRegister.appStep(2, literals.tag.register, literals.tag.secondDetail, literals.tag.secondDetail, '', '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STEP_3_MANUALLY: {
            bind: 'analytics-app-step-3-manually',
            analytics: analyticsTagRegister.appStep(3, literals.tag.register, literals.tag.thirdDetail, literals.tag.thirdDetail, literals.register.manual, '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STEP_3_SCAN: {
            bind: 'analytics-app-step-3-scan',
            analytics: analyticsTagRegister.appStep(3, literals.tag.register, literals.tag.thirdDetail, literals.tag.thirdDetail, literals.register.barcodeRegistration, '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STEP_4_MANUALLY: {
            bind: 'analytics-app-step-4-manually',
            analytics: analyticsTagRegister.appStep(4, literals.tag.register, literals.commons.fourthTermsAndConditions, literals.commons.fourthTermsAndConditions, literals.register.manual, '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STEP_4_SCAN: {
            bind: 'analytics-app-step-4-scan',
            analytics: analyticsTagRegister.appStep(4, literals.tag.register, literals.commons.fourthTermsAndConditions, literals.commons.fourthTermsAndConditions, literals.register.barcodeRegistration, '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STEP_5_MANUALLY: {
            bind: 'analytics-app-step-5-manually',
            analytics: analyticsTagRegister.appStep(5, literals.tag.register, literals.commons.fifthConfirmation, literals.commons.fifthConfirmation, literals.register.manual, '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STEP_5_SCAN: {
            bind: 'analytics-app-step-5-scan',
            analytics: analyticsTagRegister.appStep(5, literals.tag.register, literals.commons.fifthConfirmation, literals.commons.fifthConfirmation, literals.register.barcodeRegistration, '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STEP_6_MANUALLY: {
            bind: 'analytics-app-step-6-manually',
            analytics: analyticsTagRegister.appStep(6, literals.tag.register, literals.commons.sixthOtp, literals.commons.sixthOtp, literals.register.manual, '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_STEP_6_SCAN: {
            bind: 'analytics-app-step-6-scan',
            analytics: analyticsTagRegister.appStep(6, literals.tag.register, literals.commons.sixthOtp, literals.commons.sixthOtp, literals.register.barcodeRegistration, '', '', literals.tag.register)
          },
          register_tag_ANALYTICS_APP_COMPLETED_ERROR_MANUALLY: {
            bind: 'analytics-app-completed-error-manually',
            analytics: analyticsTagRegister.appCompleted(literals.tag.register, literals.commons.successfulPage, literals.commons.successfulPage, literals.commons.rejected, literals.register.manual, literals.commons.rejected, literals.tag.register)
          },
          register_tag_ANALYTICS_APP_COMPLETED_ERROR_SCAN: {
            bind: 'analytics-app-completed-error-scan',
            analytics: analyticsTagRegister.appCompleted(literals.tag.register, literals.commons.successfulPage, literals.commons.successfulPage, literals.commons.rejected, literals.register.barcodeRegistration, literals.commons.rejected, literals.tag.register)
          }
        }
      }
    }
  };

  const base = {
    hash: 'register-tag-page',
    currentPage: {
      url: '/register-tag-page'
    },
    pages,
    template,
    components: [
      nativeComponent,
      featureTollEnrollmentMx
    ]
  };

  if (native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }

  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signConnector('bbva-feature-toll-enrollment-mx');

  return base;
};