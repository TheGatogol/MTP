'use strict';
module.exports = CONFIG => {
  const { getLanguage, getLocalCurrency } = require('./common/helpers/_utils');
  const pageName = 'ocPaymentPlanLoanSuccessPage';
  const prefix = 'OC_PAYMENT_PLAN_LOAN_SUCCESS';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_ocPaymentPlan')(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const _inChannels = [
    '_PLAN_TYPE_',
    '_CARD_TO_ASSOCIATE_',
    '_PLAN_BALANCE_',
    '_TERM_',
    '_DECREASE_PERCENTAGE_',
    '_INITIAL_PAYMENT_',
    '_DEADLINE_',
    '_INTEREST_RATE_',
    '_MONTHLY_PAYMENT_',
    '_INCREMENT_PERCENTAGE_',
    '_FINALLY_INCREMENT_PERCENTAGE_'];
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      extraHeaderClass: 'header--core',
      drawerWidth: '100%',
      disableScrollLock: true,
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          [prefix + '_HEADER_TITLE_TEXT']: {
            bind: 'titleName'
          }
        },
        out: {
          [prefix + '_GO_BACK']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
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
          [prefix + '_INIT_CHANNEL']: {
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
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [prefix + '_GO_BACK']: {
            bind: 'goBack'
          }
        },
        out: {
          [prefix + '_EXIT']: {
            bind: 'header-left-button',
            backStep: true
          }
        }
      }
    }
  };
  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      microillustration: 'success',
      cellsConnections: {
        in: {
          [prefix + '_SET_PANEL_INFO_HEADING']: {
            bind: 'heading'
          },
          [prefix + '_SET_PANEL_INFO_TEXT']: {
            bind: 'text'
          }
        }
      }
    }
  };
  const listsSimple = () => {
    let lists = [];
    _inChannels.forEach(CHANNEL => {
      lists.push({
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        familyPath: '@bbva-web-components/bbva-list-simple',
        render: 'litElement',
        properties: {
          className: ('success' + CHANNEL + 'loans').toLowerCase(),
          variant: 'stacked-center',
          maskChars: '•',
          visibleChars: 5,
          localCurrency: getLocalCurrency(),
          currencyCode: getLocalCurrency(),
          language: getLanguage(),
          hidden: [
            '_DECREASE_PERCENTAGE_',
            '_INCREMENT_PERCENTAGE_',
            '_FINALLY_INCREMENT_PERCENTAGE_'].includes(CHANNEL),
          cellsConnections: {
            in: {
              [prefix + CHANNEL + 'HIDDEN']: {
                bind: 'hidden'
              },
              [prefix + CHANNEL + 'LABEL']: {
                bind: 'label'
              },
              [prefix + CHANNEL + 'DESCRIPTION']: {
                bind: ['_PLAN_BALANCE_', '_INITIAL_PAYMENT_', '_MONTHLY_PAYMENT_'].includes(CHANNEL) ? 'amount' : 'description'
              }
            }
          }
        }
      }
      );
    });
    return lists;
  };
  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    familyPath: '@bbva-web-components/bbva-notification-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      cellsConnections: {
        in: {
          [prefix + '_SET_NOTIFICATION_MESSAGE']: {
            bind: 'message'
          }
        }
      }
    }
  };
  const listSimpleMail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      variant: 'stacked-center',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          [prefix + '_SET_EMAIL_LABEL']: {
            bind: 'label'
          },
          [prefix + '_SET_EMAIL_DESCRIPTION']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const defaultButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--1-5 u-margin-bottom--1-5',
      cellsConnections: {
        in: {
          [prefix + '_SET_DEFAULT_BUTTON_TEXT']: {
            bind: 'text'
          }
        },
        out: {
          [prefix + '_GO_BACK']: {
            bind: 'click'
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-card-support-fixed-payments',
    familyPath: '@glomo-web-components/bbva-manager-payment-plan',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleAndroidBackButton'
          }
        },
        out: {
          [prefix + '_GO_BACK']: {
            bind: 'back-button-exit-page-event'
          }
        }
      }
    }
  };
  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-loan-analytics',
    familyPath: '@glomo-web-components/bbva-manager-payment-plan',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [prefix + '_SET_DATA_FOR_APP_COMPLETED']: {
            bind: 'appCompleteType'
          }
        },
        out: {
          [prefix + '_ANALYTICS_APP_PAGE_COMPLETED_RESTRUCTURE_LOAN']: {
            bind: 'analytics-app-completed-LOAN-RESTRUCTURE',
            analytics: analytics._getAppCompleted('fixedPaymentPlanForRestructuringLoan')
          },
          [prefix + '_ANALYTICS_APP_PAGE_COMPLETED_DECREASE_LOAN']: {
            bind: 'analytics-app-completed-DECREASE_LOAN',
            analytics: analytics._getAppCompleted('fixedPaymentPlanForCustomerLoan')
          },
          [prefix + '_ANALYTICS_APP_PAGE_COMPLETED_DECREASE_AUTO']: {
            bind: 'analytics-app-completed-DECREASE_AUTO',
            analytics: analytics._getAppCompleted('fixedPaymentPlanForCarLoan')
          }
        }
      }
    }
  };
  const base = {
    hash: prefix,
    currentPage: {
      url: '/' + pageName
    },
    pages,
    template,
    components: [
      header,
      lifeCycle,
      navigationHandler,
      manager,
      analyticsManager,
      panelInfo
    ]
  };
  base.components = [...base.components, ...listsSimple(_inChannels), notificationMessage, listSimpleMail, defaultButton];
  return base;
};
