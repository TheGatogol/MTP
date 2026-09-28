/* eslint-disable camelcase */
'use strict';

module.exports = CONFIG => {
  const pageName = 'giveMoney';
  const {
    useNames,
    createPrefixFromPageName,
    createSpinner
  } = require('./common/helpers/_utils');
  const {
    nativeIos = false
  } = CONFIG;
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = nameChannel => `global_${getChannelName(nameChannel)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const literals = require('./analytics/common/_literals');
  const { pageViewGiveMoneyAdvice }  = require('./analytics/_giveMoney')(CONFIG);
  const { get_onclick_start } = require('./analytics/_operationals')(CONFIG);
  const base = {
    hash: 'give-money',
    currentPage: {
      url: '/give-money'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        drawerWidth: '100%',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            [pageName + '_PAGE_VISITED']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__header',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-header-main',
        tag: 'bbva-header-main',
        render: 'litElement',
        properties: {
          text: 'global-give-money--title-header',
          variant: 'dark',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          iconRightPrimary: 'coronita:close',
          cellsConnections: {
            out: {
              give_money_header_main_navigate_to_transfers: {
                bind: 'header-main-icon-right-primary-click',
                link: {
                  page: 'account',
                  params: {
                    continue: 'continue'
                  }
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-clip-microillustration',
        tag: 'bbva-clip-microillustration',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-top--1',
          microillustration: 'youngaccount',
          size: 'L'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-text',
        tag: 'bbva-text',
        render: 'litElement',
        properties: {
          className: 'u-margin-top--1-5 u-margin--1',
          fontWeight: '500',
          size: 'XL',
          alignment: 'center',
          text: 'global-give-money--sub-title'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-text',
        tag: 'bbva-text',
        render: 'litElement',
        properties: {
          alignment: 'center',
          className: 'u-margin--1',
          text: 'global-give-money--line-one'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        tag: 'bbva-list-bullet',
        render: 'litElement',
        properties: {
          text: 'global-give-money--list-bullet-one'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-list-bullet',
        tag: 'bbva-list-bullet',
        render: 'litElement',
        properties: {
          text: 'global-give-money--list-bullet-two'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-link',
        tag: 'bbva-link',
        render: 'litElement',
        properties: {
          className: ' u-margin-left--1 u-margin-top--1-5 u-margin--1',
          text: 'global-give-money--text-link',
          size: 'M',
          focusActive: true,
          cellsConnections: {
            out: {
              give_money_link_navigate_to_give_money_advice: {
                bind: 'click',
                analytics: pageViewGiveMoneyAdvice,
                link: {
                  page: 'giveMoneyAdvice'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-button-default',
        tag: 'bbva-button-default',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center',
          text: 'global-give-money-button-understood',
          cellsConnections: {
            in: {
              [getGlobalName('set_product_id')]: {
                bind: 'productId'
              },
              [getGlobalName('set_featured_operations_list')]: {
                bind: 'operations'
              },
              [getGlobalName('set_reset_operations')]: {
                bind: 'reset'
              },
              [getGlobalName('reset')]: {
                bind: 'reset'
              },
              [getGlobalName('stand_in_view_more')]: {
                bind: 'disableViewMore'
              },
              hidden_operatives_and_transaction_list: {
                bind: 'hidden'
              }
            },
            out: {
              [getGlobalName('navigate_to_transfer')]: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'glomo-account-manager',
        properties: {
          localStorageKey: 'account_data',
          cellsConnections: {
            in: {
              [getGlobalName('navigate_to_transfer')]: {
                bind: 'showTransfersPage'
              }
            },
            out: {
              global_set_in_storage: {
                bind: 'global-set-in-storage'
              },
              global_account_navigate_for_transfer: {
                bind: 'navigate-to-transfers',
                analytics: get_onclick_start(literals.featureFlag.transfer, literals.commons.global_position, literals.operative.transfers, literals.commons.transfers, literals.commons.account),
                link: {
                  skipHistory: true,
                  page: 'transfers',
                  params: {
                    continue: 'continue'
                  }
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