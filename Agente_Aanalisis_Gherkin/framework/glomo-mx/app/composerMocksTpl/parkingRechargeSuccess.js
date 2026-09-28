module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    getLanguage,
    getAlternativeFormatDate,
    getCountry
  } = require('./common/helpers/_utils');
  const pageName = 'parkingRechargeSuccess';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)('parkingRechargeSuccess');
  const isNativeIos = CONFIG.nativeIos || false;
  const handleLifeCycle = {
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
          __bridge_page_parkingRechargeSuccess: {
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
      backAction: 'navigation-to-previous-step',
      cellsConnections: {
        in: {
          [getGlobalName('back_step_page')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getGlobalName('navigation_to_previous_step')]: {
            bind: 'navigation-to-previous-step',
            backStep: true
          }
        }
      }
    }
  };
  const managerParkingRecharge = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-manager-parking-recharge',
    familyPath: '@glomo-web-components/bbva-manager-parking-recharge',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'getParkingCityDataRecharge'
          },
          global_parking_recharge_navigate_to_success_page: {
            bind: 'screenConfigurationToShare'
          }
        },
        out: {
          [getGlobalName('send_sharing_configuration')]: {
            bind: 'set-info-to-share'
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
      className: `${isNativeIos ? 'header--core-ios' : ''}  header--dark-success`,
      rightIcon: 'coronita:close',
      titleName: 'glomo-parking-recharge-recharge-title',
      cellsConnections: {
        out: {
          [getGlobalName('back_step_page')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const successfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      formatDate: getAlternativeFormatDate(),
      className: 'loan-payment-success',
      cellsConnections: {
        in: {
          global_parking_recharge_navigate_to_success_page: {
            bind: 'result'
          }
        },
        out: {
          [getGlobalName('back_step_page')]: {
            bind: 'go-to-next'
          },
          [getGlobalName('share_receipt_capture')]: {
            bind: 'share-receipt-capture'
          }
        }
      }
    }
  };
  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      country: getCountry(),
      language: getLanguage(),
      formatDate: getAlternativeFormatDate(),
      sharedReceiptStyles: {
        receiptTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        info: {
          'padding': '0',
          'margin-top': '0.125rem',
          'background-color': 'none'
        },
        infoIcon: {
          'display': 'none'
        },
        infoMessage: {
          'font-weight': '100',
          'margin': '0',
          'font-size': 'var(--cells-text-size-12, 0.75rem)',
          'text-align': 'left',
          'background-color': 'none',
          'color': 'var(--bbva-500, #666666)'
        }
      },
      cellsConnections: {
        in: {
          [getGlobalName('share_receipt_capture')]: {
            bind: 'captureReceipt'
          },
          [getGlobalName('send_sharing_configuration')]: {
            bind: 'result'
          },
          mobile_manage_operation: {
            bind: 'reset'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };
  const base = {
    hash: 'parking-recharge-success',
    currentPage: {
      url: '/parking-recharge-success'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        headerFixed: true,
        disableScrollLock: true,
        animationType: 'horizontal',
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'bbva-core-blue'
      }
    },
    components: [
      handleLifeCycle,
      navigationHandler,
      managerParkingRecharge,
      header,
      successfulResponse,
      shareReceipt
    ]
  };
  return base;
};