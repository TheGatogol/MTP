'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const COUNTRY = utils.getCountry(CONFIG);
  const PAGE_NAME = 'fundsInvestmentsWithdrawalSuccessPage';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const OPERATIVE_PREFIX = 'funds_investments_withdrawal_success';
  const { useNames } = utils;
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

  // eslint-disable-next-line new-cap
  const spinner = utils.SPINNERSPHERICA(CONFIG);
  spinner.properties = spinner.propertiesSpherica;
  delete spinner.propertiesSpherica;
  spinner.properties.className = 'solid-spinner';
  spinner.properties.open = true;
  spinner.properties.cellsConnections.in[[ getChannelName('navigation_to_dashboard') ]] = {
    bind: 'hide'
  };

  const base = {
    hash: `${COUNTRY}-funds-investments-withdrawal-success`,
    currentPage: {
      url: '/funds-investments-withdrawal-success',
      params: []
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [getChannelName('reset_scroll')]: {
              bind: '_resetLayerScroll'
            },
            [getChannelName('_INIT_PAGE')]: {
              bind: 'recalculateHeader'
            }
          }
        }
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
              [getChannelName('go_back')]: {
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
        tag: 'cells-molecule-header-spherica',
        properties: {
          variant: 'primary',
          rightIconText: 'bbva-header-main-close-aria-label',
          className: isNativeIos ? 'safe-card-header header--white header' : 'header--white header',
          secondaryClass: '',
          rightIcon: 'coronita:close',
          cellsConnections: {
            in: {
              funds_investments_success_set_title_header: {
                bind: 'setProperties'
              }
            },
            out: {
              [getChannelName('BACK_NAVIGATION')]: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-funds-operation-manager',
        type: 'DM',
        properties: {
          isSpherica: true,
          pageName: PAGE_NAME,
          cellsConnections: {
            in: {
              [getChannelName('BACK_NAVIGATION')]: {
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
              [getChannelName('go_back')]: {
                bind: 'back-navigation-pressed-dashboard'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          language: 'es-MX',
          country: 'mx',
          sharedReceiptStyles: {
            receiptTitle: {
              'color': 'var(--bbva-core-blue, #004481)'
            },
            sectionTitle: {
              'color': 'var(--bbva-core-blue, #004481)'
            },
            info: {
              'padding': '0',
              'margin-top': '1rem',
              'background-color': 'none'
            },
            infoIcon: {
              'display': 'none'
            },
            infoMessage: {
              'font-weight': '100',
              'margin': '0',
              'font-size': 'var(--cells-text-size-12, 1rem)',
              'text-align': 'left',
              'background-color': 'none',
              'color': 'var(--bbva-500, #666666)'
            }
          },
          cellsConnections: {
            in: {
              NAVIGATE_TO_FUNDS_INVESTMENTS_WITHDRAWAL_SUCCESS: {
                bind: 'result'
              },
              [getChannelName('_SHARE_RECEIPT')]: {
                bind: 'captureReceipt'
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
              },
              global_share_receipt_error_modal: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'diy-receipt-spherica',
        type: 'UI',
        properties: {
          page: PAGE_NAME,
          className: 'funds-investment',
          cellsConnections: {
            in: {
              NAVIGATE_TO_FUNDS_INVESTMENTS_WITHDRAWAL_SUCCESS: {
                bind: 'setProperties'
              },
              [getChannelName('_RESET_PAGE')]: {
                bind: 'items'
              }
            },
            out: {
              [getChannelName('_SHARE_RECEIPT')]: {
                bind: 'share-event'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-confirm-buttons',
        properties: {
          unfixed: true,
          config: {
            buttons: {
              primary: {
                text: 'cells-confirm-buttons-next',
                action: 'go-to-fund-detail',
                class: 'secondary'
              }
            }
          },
          cellsConnections: {
            in: {
            },
            out: {
              [getChannelName('BACK_NAVIGATION')]: {
                bind: 'go-to-fund-detail'
              }
            }
          }
        }
      }
    ]
  };
  base.components = base.components.filter(component => component.tag !== 'cells-confirm-buttons');
  return base;
};
