'use strict';

module.exports = config => {

  const commonUtils = require('./common/helpers/_utils');
  const COUNTRY = commonUtils.getCountry(config);
  const PRODUCT = 'pointsRedeemFaq';
  const pages = require('./common/_pages')(config)('pointsRedeemFaq');
  const ANALYTICS = require('./analytics/_pointsRedeemPurchases')(config);
  const isNativeIos = config.nativeIos || false;
  let base = {};

  const sphericaPageUtils = require('./common/helpers/_spherica')(config, 'pointsRedeemFaq');
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      native: !!config.native,
      className: isNativeIos  ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  if (COUNTRY === 'mx') {
    base = {
      hash: 'points-redeem-faq',
      currentPage: {
        url: 'points-redeem-faq',
        params: []
      },
      pages: pages,
      template: {
        tag: 'cells-template-coronita',
        tagSpherica: 'cells-template-coronita-spherica',
        properties: {
          mode: 'seamed',
          disableEdgeSwipe: true,
          animationType: 'verticalUp',
          className: isNativeIos ? 'ios-top-padding' : '',
          cellsConnections: {
            in: {
              [PRODUCT + '_INIT_PAGE']: {
                bind: 'recalculateHeader'
              }
            }
          }
        },
        propertiesSpherica: {
          headerFixed: true,
          iOSFixedHeader: isNativeIos
        }
      },
      components: [
        {
          zone: 'app__main',
          tag: 'cells-handle-life-cycle',
          type: 'UI',
          properties: {
            customInitEvents: {
              'swipe-menu-enabled': false
            },
            cellsConnections: {
              pageName: PRODUCT,
              in: {
                __bridge_app: {
                  bind: 'navigation'
                },
                ['__bridge_page_' + PRODUCT]: {
                  bind: 'init'
                }
              },
              out: {
                [PRODUCT + '_INIT_PAGE']: {
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
          zone: 'app__header',
          type: 'UI',
          tag: 'cells-molecule-header',
          tagSpherica: 'cells-molecule-header-spherica',
          properties: {
            className: 'faqs-points-redeem',
            titleName: 'faqs-points-redeem-title-page',
            rightIcon: 'coronita:close',
            rightIconSize: 20,
            rightIconColor: '#121212',
            cellsConnections: {
              in: {},
              out: {
                FAQS_POINTS_REDEEM_BACKSTEP: {
                  bind: 'click-right-button',
                  backStep: true
                }
              }
            }
          },
          propertiesSpherica: {
            variant: 'primary',
            className: 'header',
            rightIcon: 'coronita:close',
            rightIconSize: '24',
            rightIconText: 'faqs-points-redeem-header-close',
            titleName: 'faqs-points-redeem-header-help'
          }
        },
        {
          zone: 'app__main',
          type: 'UI',
          tag: 'cells-product-selector',
          tagSpherica: 'cells-product-selector-spherica',
          properties: {
            className: 'faqs-points-redeem',
            productsListTitle: 'faqs-points-redeem-title-list',
            maxProducts: 3,
            cellsConnections: {
              in: {
                points_redeem_faqs_product_list: {
                  bind: 'products'
                }
              },
              out: {
                open_selected_question: {
                  bind: 'select-product'
                }
              }
            }
          },
          propertiesSpherica: {
            className: 'faqs-points-redeem',
            variantAmbient: 'primary-alt'
          }
        },
        {
          zone: 'app__main',
          tag: 'glomo-opx-points-redeem-purchases-dm',
          type: 'DM',
          properties: {
            cellsConnections: {
              in: {
                open_selected_question: {
                  bind: 'faqsResponse'
                },
                global_feature_flag_collection_updated: {
                  bind: 'updatedRedeemPurchasesFlags'
                }
              },
              out: {
                global_open_glomo_alert_manager_faq_redeem: {
                  bind: 'faqs-response-event'
                },
                global_points_redeem_backstep: {
                  bind: 'cancel-from-Header'
                },
                [PRODUCT + 'faqs_translated_question']: {
                  bind: 'faqs-translated-question-event'
                }
              }
            }
          },
          propertiesSpherica: {
            isSpherica,
            newCellsConnections: {
              add: {
                out: {
                  global_alert_manager_open_with_settings_spherica: {
                    bind: 'faqs-response-event'
                  }
                }
              },
              remove: {
                out: [
                  'global_open_glomo_alert_manager_faq_redeem'
                ]
              }
            }
          }
        },
        {
          zone: 'app__main',
          tag: 'glomo-analytics-points-redeem-manager',
          familyPath: '@glomo-web-components/glomo-analytics-points-redeem-manager',
          render: 'litElement',
          type: 'DM',
          properties: {
            cellsConnections: {
              in: {
                [PRODUCT + '_INIT_PAGE']: {
                  bind: 'firePageView'
                },
                [PRODUCT + 'faqs_translated_question']: {
                  bind: 'fireFaqAccessAnswer'
                }
              },
              out: {
                FAQS_POINTS_REDEEM_PAGE_VIEW: {
                  bind: 'analytics-page-view',
                  analytics: ANALYTICS.FAQ_MARK_PAGE_VIEW
                },
                [PRODUCT + '_analytics_faq_access_answer']: {
                  bind: 'analytics-faq-access-answer',
                  analytics: ANALYTICS.FAQ_ACCESS_ANSWER
                }
              }
            }
          }
        }
      ]
    };

    if (isSpherica) {
      base.components.push(glomoAlertManagerSpherica);
    }

    return sphericaPageUtils.spherize(base);
  }
};
