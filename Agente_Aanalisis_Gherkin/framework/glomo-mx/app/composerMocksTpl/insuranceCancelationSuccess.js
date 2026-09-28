'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'insuranceCancelationSuccess';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const { useNames, toUnderscoreCase } = utils;
  const isNativeIos = CONFIG.nativeIos || false;
  const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'dashboard',
      cellsConnections: {
        in: {
          [getChannelName('CLOSE_OPERATIVE')]: {
            bind: 'navigate'
          }
        },
        out: {
          [getChannelName('NAVIGATION_TO_DASHBOARD')]: {
            bind: 'navigation-to-dashboard',
            backStep: true,
            skipHistory: true,
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    }
  };

  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'insuranceCancelationSuccess',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_insuranceCancelationSuccess: {
            bind: 'init'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
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
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'bbva-cancel-insurance-header',
      cellsConnections: {
        out: {
          [getChannelName('CLOSE_OPERATIVE')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const cellsSuccessfulResponse = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    type: 'UI',
    properties: {
      page: PAGE_NAME,
      type: 'core',
      className: 'cancel-insurance',
      formatDate: utils.getMediumFormatDate(),
      hideDate: false,
      withOutAmount: true,
      withOutAvatar: true,
      cellsConnections: {
        in: {
          INSURANCE_CANCELATION_REQUEST_SEND_INFO_TO_SUCCESS_PAGE: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('_SHARE_RECEIP_CAPTURE')]: {
            bind: 'share-receipt-capture'
          },
          [getChannelName('CLOSE_OPERATIVE')]: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    }
  };

  const cellsShareGenericReceip = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      dateFormat: utils.getShortFormatDate(),
      cellsConnections: {
        in: {
          [getChannelName('_SHARE_RECEIP_CAPTURE')]: {
            bind: 'captureReceipt'
          },
          INSURANCE_CANCELATION_REQUEST_SEND_INFO_TO_SUCCESS_PAGE: {
            bind: 'result'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const base = {
    hash: 'insurance-cancelation-success',
    currentPage: {
      url: '/insurance-cancelation-success'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        mode: 'seamed',
        animationType: 'verticalUp',
        headerHeight: utils.headerHeight,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        topOnConfirm: true,
        className: isNativeIos ? 'ios-top-padding header-fixed' : '',
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [
      navigationHandler,
      cellsHandleLifeCycle,
      header,
      cellsSuccessfulResponse,
      cellsShareGenericReceip
    ]
  };

  return base;
};
