/* eslint-disable new-cap */
'use strict';
const { useNames, toUnderscoreCase, SPINNER, getUltraShortFormatDate } = require('./common/helpers/_utils');
const PAGE_NAME = 'payrollPortability';
const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const spinner = SPINNER(CONFIG);
  const dateFormat = getUltraShortFormatDate();
  const isNativeIos = CONFIG.nativeIos || false;
  const base = {
    currentPage: {
      url: '/payroll-portability-list-page'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'header--evening'
      }
    },
    components: [ spinner ]
  };
  const header = {
    zone: 'app__header',
    tag: 'cells-molecule-header',
    type: 'UI',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      titleName: 'payroll-portability-change-payroll-title',
      back: true,
      cellsConnections: {
        out: {
          [getChannelName('backstep_request')]: {
            bind: 'click-right-button',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const navigationHandler = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [getChannelName('backstep_request')]: {
            bind: 'goBack'
          }
        },
        out: {
          navigation_to_previous_page: {
            bind: 'navigate-to-previous-page',
            backStep: true
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
          [getChannelName('init_channel')]: {
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
  const portabilityList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-payroll-portability-list',
    properties: {
      className: 'custom-list status',
      transactionDateFormat: dateFormat,
      messageInfoConfig: {
        class: 'message-input',
        type: 'info-dark-blue'
      },
      messageInfo: 'payroll-portability-success-payroll-message',
      pendingStatusFlag: 'PENDING',
      sendingStatusFlag: 'SENDING',
      acceptedStatusFlag: 'ACCEPTED',
      rejectedStatusFlag: 'REJECTED',
      noSpacing: true,
      cellsConnections: {
        in: {
          [getChannelName('set_portabilities_list')]: {
            bind: 'setPortabilitiesList'
          }
        }
      }
    }
  };
  const portabilityDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-payroll-portability-manager',
    familyPath: 'glomo-payroll-portability-manager',
    properties: {
      cellsConnections: {
        in: {
          navigation_to_portabilities_list: {
            bind: 'setPayrollPortabilityList'
          }
        },
        out: {
          [getChannelName('set_portabilities_list')]: {
            bind: 'set-payroll-portabilities-list'
          }
        }
      }
    }
  };
  base.components.push(
    header,
    navigationHandler,
    lifeCycle,
    portabilityList,
    portabilityDm
  );
  return base;
};
