module.exports = config => {

  const utils = require('./common/helpers/_utils');
  const PRODUCT = 'depositConfigurationReview';
  const pages = require('./common/_pages')(config)(PRODUCT);
  const LOCAL_CURRENCY = utils.getLocalCurrency(config);
  const isNativeIos = config.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PRODUCT);
  const isSpherica = sphericaPageUtils.isSpherica();

  let depositConfigurationReviewJSON = {
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        mode: 'seamed',
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerHeight: 60,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'header--core'
      },
      propertiesSpherica: {
        className: 'ios-top-padding header--white',
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: ''
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PRODUCT,
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT]: {
                bind: 'init'
              }
            },
            out: {
              [PRODUCT + '_RESET_PAGE']: {
                bind: 'reset'
              },
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
          className: 'header--core header',
          rightIcon: 'coronita:close',
          titleName: 'glomo-deposit-imposition-update-title',
          cellsConnections: {
            in: {
            },
            out: {
              global_imposition_update_success: {
                bind: 'click-right-button',
                backStep: true,
                'forward-to-native': true
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary-alt',
          className: 'header',
          rightIconText: 'glomo-deposit-button-close'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        properties: {
          className: 'deposit-imposition-update-success',
          withoutHead: true,
          formatDate: 'DD MMMM, YYYY',
          localCurrency: LOCAL_CURRENCY,
          cellsConnections: {
            in: {
              SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS: {
                bind: 'result'
              },
              SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS_status: {
                bind: 'status'
              },
              SHOW_IMPOSITION_UPDATE_NAVIGATION_TO_SUCCESS_type: {
                bind: 'type'
              }
            },
            out: {
              global_imposition_update_success: {
                bind: 'cells-successful-response-click-primary',
                backStep: true,
                'forward-to-native': true
              }
            }
          }
        },
        propertiesSpherica: {
          witchDescription: true,
          withSuccessHead: true,
          withoutHead: false,
          disableButtons: true
        }
      }
    ]
  };

  return sphericaPageUtils.spherize(depositConfigurationReviewJSON);
};
