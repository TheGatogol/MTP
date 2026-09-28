'use strict';

module.exports = CONFIG => {
  const {
    globalServices: { host, aapTargetAuthentication, requiredToken = 'tsec' },
    native = false
  } = CONFIG;
  const pageName = 'equityAssistance';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const localStorageApp = require('./common/_local-storage');
  const analytics = require('./analytics/_equityAssistance')(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const { SPINNER: getSpinner } = require('./common/helpers/_utils');
  const spinner = getSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const base = {
    currentPage: {
      url: '/equity-assistance'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        iOSFixedHeader: isNativeIos,
        className: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        animationType: 'verticalUp'
      },
      propertiesSpherica: {
        className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-feature-equity-assistance-mx',
        familyPathSpherica: '@glomo-web-components/bbva-feature-equity-assistance-mx-spherica',
        tag: 'bbva-feature-equity-assistance-mx',
        tagSpherica: 'bbva-feature-equity-assistance-mx-spherica',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          financialOverviewApiVersion: CONFIG.globalServices.versions.financialOverview,
          privatePortafoliosApiVersion: CONFIG.globalServices.versions.privateBankingPortfolios,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          imgHours: {
            alt: 'clock',
            url: './images/Clock_funds.svg',
            width: '90',
            height: '90'
          },
          imgModalError: {
            alt: 'error',
            url: './images/errors/error.svg',
            width: '80',
            height: '80'
          },
          imgModal: {
            alt: 'chat',
            url: './images/chat.svg',
            width: '80',
            height: '80'
          },
          cellsConnections: {
            in: {
              [pageName + '_init_page']: {
                bind: 'resetCycleLife'
              },
              global_set_app_settings: {
                bind: 'handlePhone'
              },
              global_storage_get_equity_assistance_success: {
                bind: 'saveLocalStorageDataSuccess'
              },
              global_storage_get_equity_assistance_error: {
                bind: 'saveLocalStorageDataError'
              },
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlags'
              }
            },
            out: {
              global_get_from_storage: {
                bind: 'request-local-storage-data'
              },
              global_set_in_storage: {
                bind: 'set-into-local-storage'
              },
              [pageName + '_go_back']: {
                bind: 'equity-assistance-go-back',
                backStep: true
              },
              global_action_launcher_dialer: {
                bind: 'open-call-dialer-launcher'
              },
              [pageName + '_analytics_init_event_equity_assistance']: {
                bind: 'analytic-footprint-fire-event'
              },
              INHERANCE_AUTHENTICATION_EQUITY_ASSISTANCE_START_PROCESS: {
                bind: 'inheritance-authentication-equity-assistance-start-process'
              },
              EQUITY_ASSISTANCE_ANALITYC_EQUITY_LINE: {
                bind: 'analytic-external-link-equity-line-fire-event'
              }
            },
            params: {
              productId: 'productId'
            }
          }
        }
      }
    ]
  };
  const managerAnalitics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-technical-core',
    familyPath: '@glomo-web-components/bbva-analyticmanager-technical-core',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [pageName + '_analytics_init_event_equity_assistance']: {
            bind: 'firePageView'
          },
          EQUITY_ASSISTANCE_ANALITYC_EQUITY_LINE: {
            bind: 'fireExternalLink'
          }
        },
        out: {
          equityAssistance_BANKER_OUT_SCHEDULES: {
            bind: 'analytic-footprint-fire-event',
            analytics: analytics._getAdvancedFootprintData('getAdvancedFootprintBankerOutSchedules')
          },
          equityAssistance_CALL_PHONE: {
            bind: 'analytic-footprint-fire-event',
            analytics: analytics._getAdvancedFootprintData('getAdvancedFootprintCallPhone')
          },
          equityAssistance_CALL_OFFICE: {
            bind: 'analytic-footprint-fire-event',
            analytics: analytics._getAdvancedFootprintData('getAdvancedFootprintCallOffice')
          },
          equityAssistance_CALL_EQUITY_LINE: {
            bind: 'analytic-external-link-line-bbva-fire-event',
            analytics: analytics._getAdvancedFootprintData('getAdvancedFootprintChatWithBanker')
          },
          equityAssistance_INIT_RESET_PAGE: {
            bind: 'analytic-footprint-fire-event',
            analytics: analytics._getAdvancedFootprintData('getAdvancedFootprintContactBanker')
          },
          equityAssistance_LINE_EQUITY: {
            bind: 'analytics-external-link',
            analytics: analytics.externalLinkCallEquity
          }
        }
      }
    }
  };
  const authenticateInheritance = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-assistance-authentication',
    familyPath: '@glomo-web-components/bbva-manager-assistance',
    render: 'litElement',
    properties: {
      host,
      aapTargetAuthentication,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          INHERANCE_AUTHENTICATION_EQUITY_ASSISTANCE_START_PROCESS: {
            bind: 'handleInheritanceAuthentication'
          },
          global_set_app_settings: {
            bind: 'handlePhone'
          }
        },
        out: {
          global_action_launcher_dialer: {
            bind: 'open-call-action'
          },
          global_open_control_veil: {
            bind: 'open-control-veil'
          },
          global_close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  base.components.push(cellsHandleLifeCycle, managerAnalitics, authenticateInheritance);
  localStorageApp.addOutStorageChannels(base.components, [ 'equity_assistance' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
