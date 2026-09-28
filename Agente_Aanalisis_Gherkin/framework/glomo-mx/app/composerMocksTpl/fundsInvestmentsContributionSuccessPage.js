'use strict';

module.exports = CONFIG => {
  const { nativeIos = false, localCurrency, lang, nativeShell} = CONFIG;
  const utils = require('./common/helpers/_utils');
  const { getLongFormatDate } = utils;
  const isNativeIos = nativeIos || false;
  const COUNTRY = utils.getCountry(CONFIG);
  const PAGE_NAME = 'fundsInvestmentsContributionSuccessPage';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const OPERATIVE_PREFIX = 'funds_investments_contribution_success';
  const { useNames } = utils;
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  // eslint-disable-next-line new-cap
  const spinner = utils.SPINNER(CONFIG);
  spinner.properties.className = 'solid-spinner';
  spinner.properties.open = true;
  spinner.properties.cellsConnections.in[[ getChannelName('navigation_to_dashboard') ]] = {
    bind: 'hide'
  };

  const base = {
    hash: `${COUNTRY}-funds-investments-contribution-success`,
    currentPage: {
      url: '/funds-investments-contribution-success',
      params: []
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [getChannelName('reset_scroll')]: {
              bind: '_resetLayerScroll'
            },
            [getChannelName('_INIT_PAGE')]: {
              bind: 'recalculateHeader'
            },
            funds_contribution_set_header_color_ios: {
              bind: 'setProperties'
            }
          }
        }
      },
      propertiesSpherica: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: ''
      }
    },
    components: [
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          continue: 'dashboard',
          cellsConnections: {
            in: {
              funds_investments_contribution_success_go_back: {
                bind: 'navigate'
              },
              [getChannelName('confirm_buttons_clicked')]: {
                bind: 'navigate'
              }
            },
            out: {
              [getChannelName('navigation_to_dashboard')]: {
                bind: 'navigation-to-dashboard-logged',
                link: {
                  page: 'dashboard'
                }
              }
            },
            params: {
              isLogged: 'global_user_logged'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME]: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('_RESET_PAGE')]: {
                bind: 'reset'
              },
              [getChannelName('_INIT_PAGE')]: {
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
          rightIcon: 'coronita:close',
          className: `header--dark-success${isNativeIos ? ' safe-card-header' : ''}`,
          titleName: 'cells-funds-withdrawal-success-screen-header-purchase',
          cellsConnections: {
            in: {
              funds_investments_set_header_color: {
                bind: 'setProperties'
              }
            },
            out: {
              funds_investments_contribution_success_back_navigation: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--white',
          variant: 'primary',
          secondaryClass: '',
          rightIconText: 'cells-molecule-header-spherica-close',
          newCellsConnections: {
            remove: {
              in: [
                'funds_investments_set_header_color'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        type: 'UI',
        properties: {
          id: 'funds-contribution-receipt',
          localCurrency: localCurrency,
          language: lang,
          page: PAGE_NAME,
          operationsListLayout: 'review',
          screenShotEnabled: !!nativeShell,
          formatDate: getLongFormatDate(),
          cellsConnections: {
            in: {
              navigate_to_funds_investments_contribution_success_result: {
                bind: 'setProperties'
              }
            },
            out: {
              funds_contribution_exit_receipt: {
                bind: 'cells-successful-response-click-primary',
                link: {
                  page: 'dashboard'
                }
              },
              global_refresh_dashboard_generic: {
                bind: 'cells-successful-response-click-primary'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'equity-contracts centered-operation-list',
          disableButtons: true,
          formatDate: 'DD MMM YYYY, HH:mm:ss [h]'
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-funds-operation-manager',
        type: 'DM',
        properties: {
          pageName: PAGE_NAME,
          cellsConnections: {
            in: {
              funds_investments_contribution_success_back_navigation: {
                bind: 'handledOperationBackSuccess'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'handledOperationBack'
              }
            },
            out: {
              dashboard_pull_to_refresh_start: {
                bind: 'back-navigation-pressed-dashboard'
              },
              funds_investments_contribution_success_go_back: {
                bind: 'back-navigation-pressed-dashboard'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
