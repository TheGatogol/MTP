/* eslint-disable no-shadow */
'use strict';
const utils = require('./common/helpers/_utils');
const PAGE_NAME = 'blackhawkWelcome';
module.exports = CONFIG => {
  const { useNames, createPrefixFromPageName } = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_blackhawkWelcome')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      className: isNativeIos ? 'ios-top-padding' : '',
      delayScrollTop: 100,
      disableEdgeSwipe: true,
      extraHeaderClass: 'header--core',
      headerFixed: true,
      disableScrollLock: true,
      headerHeight: utils.headerHeight,
      iOSFixedHeader: isNativeIos,
      preventScrollWithOverlay: true,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'recalculateHeader'
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
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false,
        'not-collapse-any-steps': true
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
          [getGlobalName('init_page')]: {
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
      cellsConnections: {
        in: {
          [getGlobalName('navigate_to_purchase')]: {
            bind: 'navigateToPage'
          },
          [getGlobalName('navigate_to_information')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getGlobalName('navigate_to_blackhawk_purchase')]: {
            bind: 'navigation-to-blackhawkPurchase',
            link: {
              page: 'blackhawkPurchase',
              cleanUntil: 'blackhawkWelcome'
            }
          },
          [getGlobalName('navigate_to_blackhawk_information')]: {
            bind: 'navigation-to-blackhawkInformation',
            link: {
              page: 'blackhawkInformation',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: `header--core ${ isNativeIos ? 'ios-top-padding' : ''}`,
      id: 'blackhawk-welcome',
      rightIcon: 'coronita:close',
      secondaryClass: 'header--core',
      titleName: 'glomo-blackhawk-welcome-title-header',
      cellsConnections: {
        out: {
          [getGlobalName('exit_modal_welcome')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };
  const contentTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-oc-banner',
    tagSpherica: 'cells-oc-banner-spherica',
    properties: {
      noClose: true,
      className: 'banner banner--product banner-flexible-line banner--special no-close',
      config: {
        text: 'glomo-gift-card-welcome-text',
        description: 'glomo-gift-card-welcome-description',
        smallImg: { src: './images/gift.svg' }
      }
    },
    propertiesSpherica: {
      noClose: true,
      className: 'banner banner--product banner-flexible-line banner--special-white no-close',
      config: {
        text: 'glomo-gift-card-welcome-text',
        title: 'glomo-gift-card-welcome-description-spherica',
        smallImg: { src: './images/spherica/blackhawk/Gift.svg' }
      }
    }
  };
  const actionButtonsInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    tagSpherica: 'cells-confirm-buttons-spherica',
    properties: {
      className: 'action-fixed-button-primary',
      unfixed: true,
      hideDivider: true,
      config: {
        buttons: {
          secondary: {
            text: 'glomo-gift-card-more-information',
            action: 'more-information-event',
            class: 'link'
          }
        }
      },
      cellsConnections: {
        out: {
          [getGlobalName('continue_click_information')]: {
            bind: 'more-information-event'
          }
        }
      }
    },
    propertiesSpherica: {
      extraClass: 'actions-bottom-unfixed-no-padding',
      config: {
        buttons: {
          primary: {
            text: 'glomo-gift-card-more-information',
            action: 'more-information-event',
            class: 'link'
          }
        }
      }
    }
  };
  const actionButtonsBegin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    tagSpherica: 'cells-confirm-buttons-spherica',
    properties: {
      hideDivider: true,
      config: {
        buttons: {
          primary: {
            text: 'glomo-gift-card-welcome-primary-button',
            action: 'continue-event',
            class: 'primary'
          }
        }
      },
      cellsConnections: {
        out: {
          [getGlobalName('continue_purchase')]: {
            bind: 'continue-event'
          }
        }
      }
    },
    propertiesSpherica: {
      config: {
        buttons: {
          secondary: {
            text: 'glomo-gift-card-welcome-primary-button-spherica',
            action: 'continue-event'
          }
        }
      },
      cellsConnections: {
        out: {
          'global_blackhawk_welcome_continue_purchase': {
            bind: 'continue-event'
          }
        }
      }
    }
  };
  const purchaseDM = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-gift-card-manager',
    tag: 'glomo-gift-card-manager-purchase-mx',
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('exit_modal_welcome')]: {
            bind: 'closeWelcomeMessage'
          },
          [getGlobalName('continue_purchase')]: {
            bind: 'closeWelcomeMessage'
          },
          [getGlobalName('continue_click_information')]: {
            bind: 'navigateWelcomeInformation'
          }
        },
        out: {
          [getGlobalName('navigate_to_purchase')]: {
            bind: 'navigate-to-purchase'
          },
          [getGlobalName('navigate_to_information')]: {
            bind: 'navigate-to-information'
          }
        }
      }
    }
  };
  const analyticsBlackhawkWelcome = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-gift-card-manager-welcome',
    familyPath: '@glomo-web-components/glomo-analytics-gift-card-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'firePageView'
          }
        },
        out: {
          [getGlobalName('_ANALYTICS_PAGE_VIEW_WELCOME')]: {
            bind: 'analytics-page-view',
            analytics: ANALYTICS.PAGE_VIEW_WELCOME
          }
        }
      }
    }
  };
  const base = {
    hash: 'blackhawk-welcome',
    currentPage: {
      url: '/blackhawk-welcome'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      contentTitle,
      actionButtonsInfo,
      actionButtonsBegin,
      analyticsBlackhawkWelcome,
      purchaseDM,
      navigationHandler
    ]
  };
  return sphericaPageUtils.spherize(base);
};
