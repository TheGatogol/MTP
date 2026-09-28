/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'noClientBusinessDebitCardInfo';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;

  const base = {
    hash: 'no-client-business-debit-card-info',
    currentPage: {
      url: '/no-client-business-debit-card-info',
      params: []
    },
    pages: page,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        footerFixed: true,
        headerHeight: 59,
        footerHeight: 50,
        className: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: true,
        cellsConnections: {
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_noClientBusinessCardInfo: {
                bind: 'init'
              }
            },
            out: {
              no_client_info_init_page: {
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
        properties: {
          className: 'header--dark',
          rightIcon: 'coronita:close',
          continue: 'dashboard',
          titleName: 'business-debit-card-no-client-info-header-tittle',
          cellsConnections: {
            in: {},
            out: {
              navigation_dashboard_to_page: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-about-info',
        properties: {
          appImage: 'images/accounts/Account-Dollar.svg',
          showTermsConditionsButton: false
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-key-values-list',
        properties: {
          list: [
            {
              class: 'center key-bold dl-reversed',
              key: 'business-debit-card-no-client-info-title'
            },
            {
              class: 'key-bold dl-reversed',
              key: 'business-debit-card-no-client-info-1'
            }
          ]
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-lists',
        properties: {
          className: 'reset-padding-top medium-blue list',
          list: [
            'business-debit-card-no-client-info-msg-1',
            'business-debit-card-no-client-info-msg-2',
            'business-debit-card-no-client-info-msg-3'
          ]
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-key-values-list',
        properties: {
          list: [
            {
              class: 'key-bold dl-reversed',
              key: 'business-debit-card-no-client-info-2'
            }
          ]
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-lists',
        properties: {
          className: 'reset-padding-top medium-blue list',
          list: [
            'business-debit-card-no-client-info-msg-4'
          ]
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-key-values-list',
        properties: {
          list: [
            {
              class: 'key-bold dl-reversed',
              key: 'business-debit-card-no-client-info-3'
            }
          ]
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-lists',
        properties: {
          className: 'reset-padding-top medium-blue list',
          list: [
            'business-debit-card-no-client-info-msg-5'
          ]
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        properties: {
          type: 'info',
          icon: 'coronita:info',
          className: 'margin-l',
          message: 'business-debit-card-no-client-info-msg-6'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        properties: {
          config: {
            buttons: {
              primary: {
                text: 'cells-modal-alert-understood',
                class: 'tertiary',
                action: ''
              }
            }
          },
          unfixed: 'true',
          cellsConnections: {
            out: {
              navigation_dashboard_to_page: {
                bind: 'cells-confirm-buttons-click-primary',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
