'use strict';

module.exports = (config) => {
  const pageName = 'tipsFinanceProfiling';
  const analytics = require('./analytics/_userInfoTipsFinanceProfiling')(
    config
  );
  const pages = require('./common/_pages.js')(config)(pageName);
  const {
    globalServices: { host, requiredToken = 'tsec', versions },
    nativeShell = false,
    nativeIos = false,
    native = false,
    aemHost
  } = config;
  const {
    getLanguage,
    headerHeightMinimum,
    getShortInvestedDate
  } = require('./common/helpers/_utils');
  const localStorageApp = require('./common/_local-storage');

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      className: 'dark-blue-bg',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      drawerWidth: '100%',
      extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
      headerHeight: headerHeightMinimum,
      footerHeight: 0,
      headerFixed: true,
      iOSFixedHeader: nativeIos
    }
  };

  const tipsFinanceProfiling = {
    zone: 'app__main',
    type: 'UI',
    tag: 'user-info-tips-finance-profiling-mx',
    familyPath: '@glomo-web-components/user-info-tips-finance-profiling-mx',
    render: 'litElement',
    properties: {
      iOSFixedHeader: nativeIos,
      native,
      nativeIOS: nativeIos,
      host,
      genericProfile: '1',
      missionsGranted: [
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '45'
      ],
      dateFormat: getShortInvestedDate(),
      monthNameFormat: 'MMMM',
      requiredToken,
      customerApiVersion: versions.customersV1,
      financialEducationOverviewApiVersion: versions.financialEducationOverview,
      historicalSeasonApiVersion: versions.financialEducationHistoricalSeason,
      customerProfilingApiVersion: versions.financialEducationCustomerProfiling,
      grantedMissionsApiVersion: versions.financialEducationGrantedMissions,
      questionnairesApiVersion: versions.financialEducationQuestionnaires,
      questionnairApiVersion: versions.financialEducationQuestionnair,
      language: getLanguage(),
      featureModule: true,
      loginMission: '20',
      loginBadge: '6',
      aemHost,
      aemPath: 'content/caas/mexico/app/youngster-moduloedufin/moduloedufin.model.json',
      cellsConnections: {
        in: {
          __bridge_page_tipsFinanceProfiling: {
            bind: 'init'
          },
          tips_finance_profiling_set_receipt_screenshot_response: {
            bind: 'screenshotResponse'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_login_success: {
            bind: 'customerName'
          },
          global_storage_get_onboardingUserInfoTipsFinanceProfiling_success: {
            bind: 'localStorageData'
          },
          global_storage_get_onboardingUserInfoTipsFinanceProfiling_error: {
            bind: 'localStorageData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          }
        },
        out: {
          tips_finance_profiling_get_receipt_screenshot: {
            bind: 'user-info-tips-finance-profiling-mx-detail-share'
          },
          global_get_from_storage: {
            bind: 'user-info-tips-finance-profiling-mx-local-storage-get'
          },
          global_set_in_storage: {
            bind: 'user-info-tips-finance-profiling-mx-local-storage-set'
          },
          tips_finance_profiling_go_exit: {
            bind: 'user-info-tips-finance-profiling-mx-header-exit',
            backStep: true,
            'forward-to-native': true
          },
          onboarding_first_and_second_page: {
            bind: 'user-info-tips-finance-profiling-mx-page-update'
          },
          detail_of_badge_obtained: {
            bind: 'user-info-tips-finance-profiling-mx-carousel-mission-select'
          },
          faq_season_preview: {
            bind: 'user-info-tips-finance-profiling-mx-modal-faq-show'
          },
          season_detail_page_loaded: {
            bind: 'user-info-tips-finance-profiling-mx-detail-season-show'
          },
          tips_finance_profiling_navigate: {
            bind: 'user-info-tips-finance-profiling-mx-controller-navigate'
          },
          global_action_launcher_share_image: {
            bind: 'user-info-tips-finance-profiling-mx-receipt-open-launcher-share'
          },
          global_open_native_menu: {
            bind: 'user-info-tips-finance-profiling-mx-header-menu-click',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const tipsFinanceProfilingController = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-finance-profiling-mx',
    familyPath: '@glomo-web-components/bbva-controller-finance-profiling-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setAppSettingsEdufin'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          tips_finance_profiling_navigate: {
            bind: 'navigationPage'
          }
        },
        out: {
          navigation_from_futura_dashboard: {
            bind: 'bbva-controller-finance-profiling-mx-products-to-navigate',
            link: {
              page: {
                bind: 'pageToNavigate'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          navigation_product_detail_to_transfer: {
            bind: 'bbva-controller-finance-profiling-mx-transfers-to-navigate',
            link: {
              page: {
                bind: 'pageToNavigate'
              },
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            }
          },
          tips_finance_profiling_navigate_financial_education: {
            bind: 'bbva-controller-finance-profiling-mx-financial-education-to-navigate',
            link: {
              page: {
                bind: 'pageToNavigate'
              }
            }
          }
        }
      }
    }
  };

  const analyticManagerTipsFinanceProfiling = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-user-info-tips-finance-profiling',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          onboarding_first_and_second_page: {
            bind: 'updateOnboarding'
          },
          detail_of_badge_obtained: {
            bind: 'validateModal'
          },
          faq_season_preview: {
            bind: 'trackFaq'
          },
          season_detail_page_loaded: {
            bind: 'trackSeasonDetail'
          }
        },
        out: {
          tips_finance_profiling_footprint_onboarding_init: {
            bind: 'user-info-tips-finance-profiling-onboarding-init',
            analytics: analytics.pageViewFirtPageOnboarding
          },
          tips_finance_profiling_onboarding_finish: {
            bind: 'user-info-tips-finance-profiling-onboarding-finish',
            analytics: analytics.pageViewLastPageOnboarding
          },
          tips_finance_profiling_overview_loaded: {
            bind: 'user-info-tips-finance-profiling-overview-load',
            analytics: analytics.pageViewBadgesDashabord
          },
          tips_finance_profiling_details_obtained: {
            bind: 'user-info-tips-finance-profiling-details-show',
            analytics: analytics.pageViewDetailMission
          },
          tips_finance_profiling_season_info_modal_detail_faq: {
            bind: 'user-info-tips-finance-profiling-faq-show',
            analytics: analytics.pageViewSeasonInformativeModal
          },
          tips_finance_profiling_season_detail: {
            bind: 'user-info-tips-finance-profiling-season-display',
            analytics: analytics.pageViewHistoricalSeason
          },
          tips_finance_profiling_profiling_questionnaire: {
            bind: 'user-info-tips-finance-profiling-profile-request',
            analytics: analytics.pageViewProfilerRequest
          },
          tips_finance_profiling_profile_obtained: {
            bind: 'user-info-tips-finance-profiling-profile-obtain',
            analytics: analytics.pageViewProfilerResponse
          },
          tips_finance_profiling_mission_not_available_error: {
            bind: 'user-info-tips-finance-profiling-mission-error-display',
            analytics: analytics.pageViewGrantedMissionError
          },
          tips_finance_profiling_error_information_not_available: {
            bind: 'user-info-tips-finance-profiling-information-error-display',
            analytics: analytics.pageViewFinancialEducationOverviewError
          },
          tips_finance_profiling_internal_link_profiling: {
            bind: 'user-info-tips-finance-profiling-internal-link-navigate',
            analytics: analytics.internalLinkProfilerEntrypoint
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/tips-finance-profiling',
      params: []
    },
    pages,
    template,
    components: [
      tipsFinanceProfiling,
      tipsFinanceProfilingController,
      analyticManagerTipsFinanceProfiling
    ]
  };

  if (nativeShell) {
    base.components.push({
      zone: 'app__main',
      tag: 'bbva-nativeconnector-screenshot',
      familyPath: '@glomo-web-components/bbva-nativeconnector-screenshot',
      render: 'litElement',
      type: 'UI',
      properties: {
        cellsConnections: {
          in: {
            tips_finance_profiling_get_receipt_screenshot: {
              bind: 'screenShot'
            }
          },
          out: {
            tips_finance_profiling_set_receipt_screenshot_response: {
              bind: 'receipt-screenshot-response'
            },
            tips_finance_profiling_set_receipt_screenshot_error: {
              bind: 'receipt-screenshot-error'
            }
          }
        }
      }
    });
  }
  localStorageApp.addOutStorageChannels(
    base.components,
    [ 'onboardingUserInfoTipsFinanceProfiling' ],
    config
  );
  return base;
};
