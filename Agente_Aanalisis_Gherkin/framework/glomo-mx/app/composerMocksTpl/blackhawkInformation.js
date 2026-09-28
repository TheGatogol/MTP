/* eslint-disable no-shadow */
'use strict';
const utils = require('./common/helpers/_utils');
const PAGE_NAME = 'blackhawkInformation';
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
    properties: {
      animationType: 'verticalUp',
      className: isNativeIos ? 'ios-top-padding' : '',
      delayScrollTop: 300,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'header--core',
      headerFixed: true,
      iOSFixedHeader: true,
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
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
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
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: `header--white ${ isNativeIos ? 'ios-top-padding' : ''}`,
      rightIcon: 'coronita:close',
      titleName: 'glomo-gift-card-welcome-information-title-header',
      cellsConnections: {
        out: {
          [getGlobalName('exit_information')]: {
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
      rightIconText: 'cells-molecule-header-spherica-close',
      cellsConnections: {
        out: {
          'global_blackhawk_information_exit_information': {
            bind: 'click-right-button'
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
          [getGlobalName('navigate_to_welcome')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getGlobalName('navigate_to_blackhawk_welcome')]: {
            bind: 'navigation-to-blackhawkWelcome',
            link: {
              page: 'blackhawkWelcome'
            }
          }
        }
      }
    }
  };
  const contentTitlePerfect = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-oc-banner',
    tagSpherica: 'cells-oc-banner-spherica',
    properties: {
      id: 'first-info',
      noClose: true,
      className: 'banner banner--product banner-flexible-line banner--special no-close',
      config: {
        text: 'glomo-gift-card-welcome-information-perfect-text',
        description: 'glomo-gift-card-welcome-information-perfect-description',
        smallImg: { src: './images/p2pPayments/bbva_phone.svg' }
      }
    },
    propertiesSpherica: {
      id: 'first-info',
      noClose: true,
      className: 'banner banner--product banner-flexible-line banner--special-white no-close',
      config: {
        text: 'glomo-gift-card-welcome-information-perfect-text',
        title: 'glomo-gift-card-welcome-information-perfect-description-spherica',
        smallImg: { src: './images/spherica/blackhawk/Microillustration.svg' }
      }
    }
  };
  const contentTitleSafe = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-oc-banner',
    tagSpherica: 'cells-oc-banner-spherica',
    properties: {
      id: 'second-info',
      noClose: true,
      className: 'banner banner--product banner-flexible-line banner--special no-close',
      config: {
        text: 'glomo-gift-card-welcome-information-safe-text',
        description: 'glomo-gift-card-welcome-information-safe-description',
        smallImg: { src: './images/blackHawk/calendar.svg' }
      }
    },
    propertiesSpherica: {
      id: 'second-info',
      noClose: true,
      className: 'banner banner--product banner-flexible-line banner--special-white no-close',
      config: {
        text: 'glomo-gift-card-welcome-information-safe-text',
        title: 'glomo-gift-card-welcome-information-safe-description',
        smallImg: { src: './images/spherica/blackhawk/Calendar.svg' }
      }
    }
  };
  const contentTitleMoment = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-oc-banner',
    tagSpherica: 'cells-oc-banner-spherica',
    properties: {
      id: 'third-info',
      noClose: true,
      className: 'banner banner--product banner-flexible-line banner--special no-close',
      config: {
        text: 'glomo-gift-card-welcome-information-moment-text',
        description: 'glomo-gift-card-welcome-information-moment-description',
        smallImg: { src: './images/blackHawk/savings.svg' }
      }
    },
    propertiesSpherica: {
      id: 'third-info',
      noClose: true,
      className: 'banner banner--product banner-flexible-line banner--special-white no-close',
      config: {
        text: 'glomo-gift-card-welcome-information-moment-text',
        title: 'glomo-gift-card-welcome-information-moment-description',
        smallImg: { src: './images/spherica/blackhawk/Saving.svg' }
      }
    }
  };
  const actionButtons = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    tagSpherica: 'cells-confirm-buttons-spherica',
    properties: {
      unfixed: true,
      hideDivider: true,
      config: {
        buttons: {
          primary: {
            text: 'glomo-gift-card-welcome-information-confimr-button',
            action: 'return-event',
            class: 'secondary'
          }
        }
      },
      cellsConnections: {
        out: {
          [getGlobalName('continue_information')]: {
            bind: 'return-event'
          }
        }
      }
    },
    propertiesSpherica: {
      config: {
        buttons: {
          primary: {
            text: 'glomo-gift-card-welcome-information-confimr-button',
            action: 'return-event',
            class: 'secondary_no_padding'
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
          [getGlobalName('exit_information')]: {
            bind: 'backToWelcome'
          },
          [getGlobalName('continue_information')]: {
            bind: 'backToWelcome'
          }
        },
        out: {
          [getGlobalName('navigate_to_welcome')]: {
            bind: 'navigate-to-welcome'
          }
        }
      }
    }
  };
  const analyticsBlackhawkInformation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-gift-card-manager-information',
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
          [getGlobalName('analytics_continue_information')]: {
            bind: 'analytics-page-view',
            analytics: ANALYTICS.PAGE_VIEW_INFO
          }
        }
      }
    }
  };
  const base = {
    hash: 'blackhawk-information',
    currentPage: {
      url: '/blackhawk-information'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      navigationHandler,
      contentTitlePerfect,
      contentTitleSafe,
      contentTitleMoment,
      actionButtons,
      purchaseDM,
      analyticsBlackhawkInformation
    ]
  };

  return sphericaPageUtils.spherize(base);
};
