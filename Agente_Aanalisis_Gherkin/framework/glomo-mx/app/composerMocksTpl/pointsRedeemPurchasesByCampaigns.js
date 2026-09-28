'use strict';

module.exports = (config) =>  {
  const {
    getShortFormatDate,
    getLanguage,
    getLocalCurrency,
    getAlternativeFormatDateWithShortMonth,
    getAlternativeFormatDateWithoutTime,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)('pointsRedeemPurchasesByCampaigns');
  const pageName = 'pointsRedeemPurchasesByCampaigns';
  const analyticsPointsRedeemPurchasesByCampaigns = require('./analytics/_pointsRedeemPurchasesByCampaigns')(config);
  const {
    globalServices: { host, requiredToken = 'tsec',  versions: { convertV2, convertSimulateV2 } },
    native = false,
    nativeIos = false
  } = config;

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      extraHeaderClass: 'bg-dark-core-blue',
      headerHeight: headerHeightMinimum,
      className: `${nativeIos ? 'ios-top-padding' : ''}`,
      iOSFixedHeader: nativeIos
    }
  };

  const pointsRedeemPurchases = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-loyalty-points-redeem-purchases-by-campaigns-mx',
    familyPath: '@glomo-web-components/bbva-feature-loyalty-points-redeem-purchases-by-campaigns-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      iOSFixedHeader: nativeIos,
      convertSimulateApiVersion: convertSimulateV2,
      convertApiVersion: convertV2,
      conversionTypeId: 'REWARD_POINTS_TO_MONEY_NOTPOSTED',
      productTypeId: 'CARDS',
      dateFormat: getAlternativeFormatDateWithoutTime(),
      dateFormatWithTime: getAlternativeFormatDateWithShortMonth(),
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          navigation_from_deep_link_from_notification_detail: {
            bind: 'notificationCenter'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'notificationCenter'
          }
        },
        out: {
          points_redeem_purchases_by_campaigns_notification_detail_analytics: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-notification-detail-analytics',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appOnclickNotificationCenter('notificaciones', 'detalle')
          },
          points_redeem_purchases_by_campaigns_marketplace_name: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-marketplace-name-send',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appPageVisitPointsRedeemPurchases('1 resumen', 'inicio')
          },
          points_redeem_purchases_by_campaigns_success_info: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-success-info-show',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appCompletedPointsRedeemPurchases('finalizado')
          },
          points_redeem_purchases_by_campaigns_show_details: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-resume-detail-show',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appStartedPointsRedeemPurchases('mostrar detalles')
          },
          points_redeem_purchases_by_campaigns_show_modal: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-resume-modal-show',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appInternalLinkPointsRedeemPurchases('puntos bbva')
          },
          points_redeem_purchases_by_campaigns_pay_with_points: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-pay-with-points-info-show',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appStartedPointsRedeemPurchases('pagar con puntos')
          },
          points_redeem_purchases_by_campaigns_exit_operative_dashboard: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-redeem-notification-exit-dashboard',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          points_redeem_purchases_by_campaigns_exit_operative: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-redeem-notification-exit',
            link: {
              page: 'notificationsCenter',
              skipHistory: true
            }
          },
          points_redeem_purchases_by_campaigns_go_to_rewards: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-reward-show',
            link: {
              page: 'reward'
            }
          },
          points_redeem_purchases_by_campaigns_simulate_error: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-service-simulate-error-show',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appErrorPayments('error operacion no realizada')
          },
          points_redeem_purchases_by_campaigns_convert_error: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-service-convert-error-show',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appErrorPayments('error informacion no disponible')
          },
          points_redeem_purchases_by_campaigns_convert_unavailable: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-service-convert-unavailable-finish',
            analytics: analyticsPointsRedeemPurchasesByCampaigns.appErrorPayments('error informacion no disponible')
          },
          points_redeem_purchases_by_campaigns_receipt_info: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-receipt-data-share'
          },
          points_redeem_purchases_by_campaigns_share_receipt_capture: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-share-receipt-show'
          },
          global_enable_menu_swipe: {
            bind: 'bbva-feature-loyalty-points-redeem-purchases-swipe-menu-enable',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const receiptManager = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      dateFormat: getShortFormatDate(),
      sharedReceiptStyles: {
        fieldValue: {
          'word-wrap': 'break-word',
          'overflow-wrap': 'break-word',
          'white-space': 'normal'
        }
      },
      cellsConnections: {
        in: {
          points_redeem_purchases_by_campaigns_share_receipt_capture: {
            bind: 'captureReceipt'
          },
          points_redeem_purchases_by_campaigns_receipt_info: {
            bind: 'result'
          },
          mobile_manage_operation: {
            bind: 'reset'
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
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/points-redeem-purchases-by-campaigns'
    },
    pages,
    template,
    components: [
      pointsRedeemPurchases,
      receiptManager
    ]
  };

  return base;
};
