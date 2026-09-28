/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');

  const { useNames, createPrefixFromPageName} = utils;
  const PAGE_NAME = 'updateNationalIdSuccess';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const spinner = utils.SPINNER(CONFIG);

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-successful-response-next',
        action: 'exit'
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      disableScrollLock: true,
      headerFixed: true,
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'resetLayerScroll'
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
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
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
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      cellsConnections: {
        in: {
          update_national_id_set_navigation: {
            bind: 'backAction'
          },
          update_national_id_set_operative_navigation: {
            bind: 'operative'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          },
          [getChannelName('back-button')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('navigate_to_dashboard')]: {
            bind: 'navigate-to-dashboard',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          [getChannelName('navigate_to_previous_page')]: {
            bind: 'navigate-to-previous-page',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: IS_NATIVE_IOS ? 'notch-padding header--core' : 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      cellsConnections: {
        in: {
          update_national_id_set_success_title: {
            bind: 'titleName'
          }
        },
        out: {
          [getChannelName('back-button')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const successScreen = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      type: 'core',
      formatDate: 'DD MMMM YYYY, HH:mm [h]',
      language: 'ES',
      withoutHead: true,
      hideDivider: true,
      withOutAvatar: true,
      withOutAmount: true,
      cellsConnections: {
        in: {
          update_national_id_show_receipt: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('reset_scroll')]: {
            bind: 'reset-layer-scroll'
          },
          [getChannelName('back-button')]: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    }
  };

  const base = {
    hash: +'update-national-id-success',
    currentPage: {
      url: '/update-national-id-success',
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      spinner,
      header,
      successScreen
    ]
  };

  return base;
};
