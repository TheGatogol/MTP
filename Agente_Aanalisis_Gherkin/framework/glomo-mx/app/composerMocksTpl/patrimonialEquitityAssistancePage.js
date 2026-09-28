'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const COUNTRY = utils.getCountry(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('patrimonialEquitityAssistancePage');

  const configButtons = {
    buttons: {
      primary: {
        text: 'Mis Conversaciones',
        action: 'navigation-my-conversations-message-event'
      }
    }
  };

  const base = {
    hash: COUNTRY + '-patrimonial-equitity-assistance',
    currentPage: {
      url: '/patrimonial-equitity-assistance',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'static',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {},
          out: {}
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'patrimonialEquitityAssistancePage',
          private: true,
          cache: [],
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_patrimonialEquitityAssistancePage: {
                bind: 'init'
              }
            },
            out: {
              patrimonial_equitity_assistance_page_init_page: {
                bind: 'init-page'
              },
              patrimonial_equitity_assistance_page_reset_page: {
                bind: 'reset'
              },
              app_error_access_token: {
                bind: 'access-token-error'
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
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          leftIconSize: '22',
          titleName: 'equitity-assistance-title',
          cellsConnections: {
            in: {},
            out: {
              patrimonial_equitity_assistance_header: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          cellsConnections: {
            in: {},
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-confirm-buttons',
        properties: {
          style: 'padding: 3rem;',
          config: configButtons,
          unfixed: 'true',
          cellsConnections: {
            in: {},
            out: {
              EA_MESSAGESS_CHANNEL: {
                bind: 'navigation-my-conversations-message-event',
                link: {
                  page: 'myConversationMessagePage'
                }
              }
            }
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();

  return base;
};