'use strict';
module.exports = (CONFIG) => {
  const {useNames, createPrefixFromPageName, getAlternativeFormatDate, getLanguage, createSpinner: getSpinner} = require('./common/helpers/_utils');
  const PAGE_NAME = 'requestFiscalDataSuccess';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const spinner = getSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      iOSFixedHeader: isNativeIos,
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: 'header--white'
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cache: [],
      private: true,
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
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
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
      backAction: 'close-operative',
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('exit_operative')]: {
            bind: 'close-operative',
            backStep: true
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
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'glomo-request-fiscal-data-success-header-title',
      cellsConnections: {
        out: {
          [getChannelName('header_click_right_button')]: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: `header--white header${isNativeIos ? ' safe-card-header' : ''}`,
      rightIcon: 'coronita:close',
      rightIconText: 'bbva-header-main-close-aria-label',
      rightIconSize: '24',
      setTimeoutHideTooltip: '3000'
    }
  };
  const receipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      formatDate: getAlternativeFormatDate(),
      language: getLanguage(),
      withoutHead: true,
      hideDivider: true,
      isStickyButton: '',
      page: 'requestFiscalDataSuccess',
      animateFromTo: true,
      cellsConnections: {
        in: {
          request_fiscal_data_navigate_customer_tax_data_success: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('navigate_to_profile_page')]: {
            bind: 'cells-successful-response-click-primary',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'common-transfer-data',
      withoutHead: false,
      withSuccessHead: true,
      disableButtons: true
    }
  };
  return sphericaPageUtils.spherize({
    currentPage: {
      url: '/request-fiscal-data-success'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      navigationHandler,
      header,
      receipt
    ]
  });
};
