'use strict';

const utils = require('./common/helpers/_utils');

const { SPINNER: getSpinner, useNames, toUnderscoreCase } = utils;

const PAGE_NAME = 'clarificationsTrackingCare';
const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

module.exports = CONFIG => {

  /* Common */
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const TOKEN = CONFIG.globalServices.requiredToken;
  const isNativeIos = CONFIG.nativeIos || false;
  const spinner = getSpinner(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  /* Spinner */
  spinner.properties.className = 'solid-spinner';
  spinner.properties.cellsConnections.in = {
    ...spinner.properties.cellsConnections.in,
    global_clarifications_set_header: {
      bind: 'hide'
    }
  };

  /* Template */
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      animationType: 'verticalUp',
      preventScrollWithOverlay: true,
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding' : ''
    },
    propertiesSpherica: {
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
    }
  };

  /* Life Cycle Handler */
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: TOKEN || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          },
          [getChannelName('EXIT_PAGE')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('INIT_PAGE')]: {
            bind: 'init-page'
          },
          [getChannelName('RESET_PAGE')]: {
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

  /* Navigation handler */
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'creditBureauReceipt',
      backAction: 'entrypoint',
      cellsConnections: {
        in: {
          [getChannelName('EXIT_FLOW')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('EXIT_PAGE')]: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };

  /* Header */
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      id: 'clarifications-tracking-care',
      className: 'header--core-dark',
      leftIcon: 'coronita:return-12',
      titleName: 'Aclaraciones',
      cellsConnections: {
        in: {
          global_clarifications_set_header: {
            bind: 'titleName'
          }
        },
        out: {
          [getChannelName('EXIT_FLOW')]: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      className: 'header--grey',
      leftIconText: 'cells-molecule-header-spherica-back',
      leftIcon: 'coronita:back-mini'
    }
  };

  const clarificationsBadgeList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-aggregation-badge-list',
    tagSpherica: 'cells-aggregation-badge-list-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_clarifications_list_care_send_folios: {
            bind: 'listCase'
          }
        },
        out: {
          [getChannelName('CLARIFICATIONS_ICON_HELP')]: {
            bind: 'cells-list-badge-click-icon-help'
          }
        }
      }
    },
    propertiesSpherica: {
      variantListsBadge: 'primary',
      fullBackgroundClass: 'fullBackgroundWhite'
    }
  };

  const clarificationsListDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-clarifications-manager',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('CLARIFICATIONS_ICON_HELP')]: {
            bind: 'helpModal'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'glomo-clarifications-tooltip-modal'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'glomo-clarifications-tooltip-modal-spherica'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos ? false : '',
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };


  /* base */
  const base = {
    hash: 'clarifications-tracking-care',
    currentPage: {
      url: '/clarifications-tracking-care'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      navigationHandler,
      header,
      clarificationsBadgeList,
      clarificationsListDm
    ]
  };
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
