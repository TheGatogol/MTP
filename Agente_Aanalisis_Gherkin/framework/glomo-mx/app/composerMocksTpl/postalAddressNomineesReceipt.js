'use strict';

module.exports = config => {
  const { SPINNER: spinner, headerHeight, getAlternativeFormatDate, useNames, createPrefixFromPageName } = require('./common/helpers/_utils');
  const pageName = 'postalAddressNomineesReceipt';
  const pages = require('./common/_pages')(config)(pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const formatDate = getAlternativeFormatDate();
  const isNativeIos = config.nativeIos || false;
  const base = {
    hash: 'postal-address-nominees-receipt',
    currentPage: {
      url: '/postal-address-nominees-receipt'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        headerHeight,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'bbva-core-blue'
      }
    },
    components: [
      spinner(config),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'postalAddressNomineesReceipt',
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
              },
              ch_budgets_create_review_confirm_buttons_config: {
                bind: 'set-confirm-buttons-config'
              }
            },
            out: {
              [getChannelName('init_page')]: {
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
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-payroll-address-title-update-address',
          cellsConnections: {
            out: {
              [getChannelName('backstep_channel')]: {
                bind: 'click-right-button',
                backStep: true,
                link: {
                  page: 'dashboard'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-successful-response',
        properties: {
          formatDate,
          className: 'product-solution-success',
          withoutHead: true,
          hideDivider: true,
          cellsConnections: {
            in: {
              postal_address_nominees_receipt_result: {
                bind: 'result'
              }
            },
            out: {
              [getChannelName('backstep_channel')]: {
                bind: 'go-to-next',
                backStep: true,
                link: {
                  page: 'dashboard'
                }
              }
            }
          }
        }
      }
    ]
  };
  return base;
};