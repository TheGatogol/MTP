'use strict';
module.exports = config => {
  const pageName = 'promotionDetail';
  const localStorageApp = require('./common/_local-storage');
  const {
    getLanguage,
    glomoOpenDocument,
    getRewardsFormatDay,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { categories, suggestions, promotions } },
    native = false,
    nativeIos = false,
    defaultGeoLocation,
    phoneNumberBbvaLine
  } = config;
  const pdfConfig = {
    mimeType: 'application/pdf',
    headerColor: 'FFFFFFFF',
    tintColor: 'FF072146',
    canShare: true,
    titleColor: 'FF072146',
    blackStatusBar: false
  };
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const base = {
    hash: 'mx-reward',
    currentPage: {
      url: '/reward'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        headerHeight: headerHeightMinimum,
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {
            promotion_detail_reset_scroll_page: {
              bind: 'resetLayerScroll'
            }
          }
        }
      }
    },

    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_promotionDetail: {
                bind: 'init'
              }
            },
            out: {
              promotion_detail_init_page: {
                bind: 'init-page'
              },
              global_promotion_detail_reset_page: {
                bind: 'reset'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              global_storage_check_mobile_services: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'rewards-promotions-mx',
        familyPath: '@glomo-web-components/rewards-promotions-mx',
        render: 'litElement',
        properties: {
          host,
          native,
          categoriesApiVersion: categories,
          promotionsApiVersion: promotions,
          suggestionsApiVersion: suggestions,
          country: 'mx',
          locale: 'mx',
          requiredToken,
          language: getLanguage(),
          showButtonDefault: true,
          iOSFixedHeader: nativeIos,
          assistancePhone: phoneNumberBbvaLine,
          parallelRequests: true,
          pageName,
          dateFormat: getRewardsFormatDay(),
          showPromotionsByType: true,
          showPromotionsByFeature: true,
          showPromotionsByCategory: true,
          showSearchPromotions: true,
          showSearchByLocation: true,
          showSearchByPromotionType: true,
          showStoresForPromotion: true,
          showStoreInformation: true,
          defaultGeoLocation,
          detailDownloadConfig: pdfConfig,
          enabledSearchSuggestions: true,
          hideHeaderIconsLabels: true,
          fieldToSearch: 'commerceInformation.name',
          pageSize: 10,
          cellsConnections: {
            in: {
              promotion_detail_go_to_promotion_detail_from_deeplink: {
                bind: 'promotionFromDeeplink'
              }
            },
            out: {
              promotion_detail_go_back_from_standalone_detail: {
                bind: 'rewards-promotions-mx-navigate-back',
                backStep: true
              },
              promotion_detailnavigate_to_rewards_promotions_invitation_enrollment: {
                bind: 'rewards-promotions-mx-promotion-activate-request',
                link: {
                  page: 'rewardsPromotionsInvitationEnrollment',
                  params: {
                    offerId: 'offerId',
                    campaignId: 'campaignId',
                    categoryId: 'categoryId',
                    period: 'period'
                  }
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-rewards-landing',
        familyPath: '@glomo-web-components/bbva-manager-rewards-landing',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          language: getLanguage(),
          cellsConnections: {
            in: {
              navigation_from_deep_link_to_operations: {
                bind: 'rewardsPromotionsDetail'
              },
              navigation_from_deep_link_from_notification_detail: {
                bind: 'promotionDetailNotificationCenter'
              }
            },
            out: {
              promotion_detail_go_to_promotion_detail_from_deeplink: {
                bind: 'bbva-manager-rewards-landing-promotions-detail'
              }
            }
          }
        }
      }
    ]
  };

  if (native) {
    base.components.push(
      glomoOpenDocument(config),
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-permissions-plugin',
        properties: {
          cellsConnections: {
            in: {
              promotion_detail_get_location_permission: {
                bind: 'checkState'
              }
            },
            out: {
              promotion_detail_check_location_state_success: {
                bind: 'permissions-check-state-success'
              },
              promotion_detail_check_location_state_error: {
                bind: 'permissions-check-state-error'
              },
              promotion_detail_check_location_permissions_plugin_not_installed: {
                bind: 'error-permissions-plugin-not-installed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-geolocation',
        properties: {
          cellsConnections: {
            in: {
              promotion_detail_get_current_position: {
                bind: 'getCurrentPosition'
              },
              promotion_detail_get_location_permission: {
                bind: 'isLocationServiceEnabled'
              }
            },
            out: {
              promotion_detail_position_available: {
                bind: 'current-position-available'
              },
              promotion_detail_position_error: {
                bind: 'error'
              },
              promotion_detail_gps_state: {
                bind: 'location-service-enabled-success'
              }
            }
          }
        }
      }
    );
  }

  localStorageApp.addOutStorageChannels(base.components, [ 'mobile_services' ], config);
  errorAndSignWidgetConnector(config)(base)('rewards-promotions-mx', {
    widgetId: pageName,
    cancelAfterErrorFunction: 'clearAndBack',
    addRetryErrorsFlag: true,
    retryConfig: {
      hidden: true
    },
    callConfig: {
      hidden: true
    }
  }, true);

  return sphericaPageUtils.spherize(base);
};
