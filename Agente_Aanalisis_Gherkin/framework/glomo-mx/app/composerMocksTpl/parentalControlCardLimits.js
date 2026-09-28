'use strict';

module.exports = (CONFIG) => {
  const {
    infoFootprint,
    infoDailyAmountFootprint,
    appOnClickStart,
    appPageVisit,
    _getOperationInfoModalFootprint,
    _getAppStarted,
    appCompleted
  }  = require('./analytics/_parentalControlCardLimits')();
  const {
    commons
  } = require('./analytics/common/_literals');
  const {
    useNames,
    createPrefixFromPageName,
    getLocalCurrency
  } = require('./common/helpers/_utils');
  const {
    globalServices,
    native = false,
    nativeIos = false
  } = CONFIG;
  const { host, requiredToken = 'tsec', versions } = globalServices;
  const product = 'parentalControlCardLimits';
  const pages = require('./common/_pages')(CONFIG)('parentalControlCardLimits');
  const prefixPage = createPrefixFromPageName(product);
  const [ getChannelName ] = useNames(prefixPage);
  const base = {
    hash: product,
    currentPage: {
      url: '/parental-control-card-limits'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            parental_control_card_limits_init_page: {
              bind: 'recalculateHeader'
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
          pageName: product,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_parentalControlCardLimits: {
                bind: 'init'
              }
            },
            out: {
              parental_control_card_limits_init_page: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-feature-card-operative-limits-update-youngsters-mx',
        tag: 'bbva-feature-card-operative-limits-update-youngsters-mx',
        render: 'litElement',
        properties: {
          host,
          version: versions.cards,
          native,
          requiredToken: requiredToken,
          currency: getLocalCurrency(),
          cellsConnections: {
            in: {
              [getChannelName('init_page')]: {
                bind: 'init'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              global_glomito_flag: {
                bind: 'flagParentsView'
              }
            },
            out: {
              [product + '_go_back']: {
                bind: 'parental-control-card-limits-go-back',
                backStep: true
              },
              [product + '_analytics_footprint_info_header']: {
                bind: 'card-operative-limits-open-modal-control-parental',
                analytics: infoFootprint
              },
              [product + '_analytics_footprint_info_daily_amount_footprint']: {
                bind: 'card-operative-limits-open-modal-info',
                analytics: infoDailyAmountFootprint
              },
              [product + '_analytics_app_on_click_start']: {
                bind: 'analytics-app-on-click-start',
                analytics: appOnClickStart
              },
              [product + '_analytics_app_page_visit']: {
                bind: 'analytics-app-page-visit',
                analytics: appPageVisit
              },
              [product + '_analytics_footprint_info_parental-control_operative']: {
                bind: 'card-operative-limits-open-modal-purchase',
                analytics: _getOperationInfoModalFootprint
              },
              [product + '_analytics_app_started_modal_purcharse']: {
                bind: 'card-operative-limits-open-modal-purchase-started',
                analytics: _getAppStarted('info compras', false)
              },
              [product + '_analytics_app_started_limit_input']: {
                bind: 'card-operative-limits-form-input-focus',
                analytics: _getAppStarted(commons.dailyLimit)
              },
              [product + '_analytics_app_started_cancel']: {
                bind: 'close-modal-clicked',
                analytics: _getAppStarted(commons.cancel)
              },
              [product + '_ANALYTICS_APP_COMPLETED_CHANNEL']: {
                bind: 'app-completed-analytics-event',
                analytics: appCompleted
              }
            },
            params: {
              customerId: 'global_user_id',
              cardId: 'productId'
            }
          }
        }
      }
    ]
  };
  return base;
};
