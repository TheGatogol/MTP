'use strict';
module.exports = (CONFIG) => {
  const { useNames, createPrefixFromPageName } = require('./common/helpers/_utils');
  const pageName = 'topUp';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [getChannelName, getLocaleName] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const analytics = require('./analytics/_mobileTopUp')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();

  const listButtons = [
    {
      flags: ['glomo.operations.mobileTopUpCells', 'glomo.operations.mobileTopUpPackages'],
      src: './images/update_app.svg',
      titleText: 'top-up-mobile-top-up-btn-title',
      text: 'top-up-mobile-top-up-btn-text',
      textClass: 'button-description',
      page: 'mobile-top-up',
      ...(isSpherica ? {icon: 'coronita:mobilecashdollar'} : {src: './images/update_app.svg'})
    },
    {
      flags: ['glomo.operations.ServicePaymentTag', 'glomo.operations.servicePaymentTeleviaTag'],
      titleText: 'top-up-register-btn-register-title',
      text: 'top-up-register-btn-register-text',
      textClass: 'button-description',
      action: 'navigate',
      page: 'tagCardList',
      name: 'tagCardListPage',
      ...(isSpherica ? {icon: 'coronita:autobank'} : {src: './images/tagCard/caseta.svg'})
    },
    {
      flags: [ 'glomo.operations.blackHawkPurchase' ],
      titleText: 'top-up-register-btn-card-title',
      text: 'top-up-register-btn-card-text',
      textClass: 'button-description',
      action: 'navigate',
      page: 'blackhawkWelcome',
      name: 'blackhawkWelcomePage',
      ...(isSpherica ? {icon: 'coronita:rewards'} : {src: './images/gift.svg'})
    },
    {
      flags: [ 'glomo.operations.parkingMeters' ],
      titleText: 'top-up-register-btn-parking-title',
      text: 'top-up-register-btn-parking-text',
      action: 'navigate',
      page: 'parkingList',
      name: 'parkingListPage',
      ...(isSpherica ? {icon: 'coronita:auto'} : {src: './images/parking/Car_1.svg'})
    }
  ];
  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      headerFixed: true,
      animationType: 'verticalUp',
      extraHeaderClass: isNativeIos ? 'ios-top-padding dark-blue-bg' : '',
      iOSFixedHeader: true,
      className: 'bbva-core-blue',
      cellsConnections: {
        in: {
          [getChannelName('scroll_to_step')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('hidden_flow')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('reset_scroll_top')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('exit_flow')]: {
            bind: 'close'
          },
          [getChannelName('modal_visibility_changed')]: {
            bind: 'setModalActive'
          }
        }
      }
    },
    propertiesSpherica: {
      className: `bg-light-grey${isNativeIos ? ' ios-top-padding' : ''}`,
      extraHeaderClass: 'bg-light-grey'
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      private: true,
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
          },
          [getChannelName('_reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          app_error_access_token: {
            bind: 'access-token-error'
          },
          [getChannelName('init_page')]: {
            bind: 'init-page',
            analytics: analytics._getAdvancedFootprints('topUps')
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
      className: 'header--core',
      back: true,
      rightIcon: 'coronita:close',
      titleName: getLocaleName('header-title'),
      cellsConnections: {
        out: {
          [getChannelName('exit')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--core-grey',
      titleName: 'top-up-header-title-spherica',
      leftIcon: 'coronita:back',
      rightIcon: '',
      variant: 'primary-alt',
      leftIconText: 'bbva-header-main-return-aria-label',
      newCellsConnections: {
        add: {
          out: {
            top_up_exit: {
              bind: 'click-left-button'
            }
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
      currentPage: pageName,
      backAction: 'exit-top-up',
      cellsConnections: {
        in: {
          [getChannelName('item_list_selected')]: {
            bind: 'navigateToPage'
          },
          [getChannelName('exit')]: {
            bind: 'goBack'
          },
          mobile_top_up_review_exit_close: {
            bind: 'goBack'
          },
          global_mobile_top_up_not_confirmed_error: {
            bind: 'goBack'
          },
          global_mobile_top_up_duplicated_error: {
            bind: 'goBack'
          }
        },
        out: {
          navigation_mobile_top_up: {
            bind: 'navigation-to-mobile-top-up',
            link: {
              page: 'mobileTopUp'
            }
          },
          navigation_mobile_top_up_packages: {
            bind: 'navigation-to-mobile-top-up-packages',
            link: {
              page: 'mobileTopUpPackages'
            }
          },
          [getChannelName('navigation_tag_card_list')]: {
            bind: 'navigation-to-tagCardList',
            link: {
              page: 'tagCardList'
            }
          },
          [getChannelName('navigation_blackhawk_welcome')]: {
            bind: 'navigation-to-blackhawkWelcome',
            link: {
              page: 'blackhawkPurchase'
            }
          },
          [getChannelName('navigation_parking_meters')]: {
            bind: 'navigation-to-parkingList',
            link: {
              page: 'parkingList'
            }
          },
          [getChannelName('exit_page')]: {
            bind: 'exit-top-up',
            backStep: true
          }
        }
      }
    }
  };
  const buttonList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-button-list',
    tagSpherica: 'glomo-button-list-spherica',
    properties: {
      addDivisor: true,
      className: 'padding-m no-wrap',
      cellsConnections: {
        in: {
          [getChannelName('show_list_Buttons')]: {
            bind: 'buttons'
          }
        },
        out: {
          [getChannelName('item_list_selected')]: {
            bind: 'button-clicked'
          }
        }
      }
    },
    propertiesSpherica: {
      addDivisor: false,
      className: 'gap-m button-list-padding no-wrap big-title'
    }
  };
  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/glomo-analytics-mobile-top-up-manager',
    tag: 'glomo-analytics-mobile-top-up-manager-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          navigation_mobile_top_up: {
            bind: 'onClickStart'
          }
        },
        out: {
          analytics_on_click_start: {
            bind: 'analytics-on-click-start',
            analytics: analytics.APP_ON_CLICK_START
          }
        }
      }
    }
  };
  const managerParkingList = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-parking-enrollment',
    familyPath: '@glomo-web-components/bbva-manager-parking-enrollment',
    render: 'litElement',
    properties: {
      availableButtons: listButtons,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          }
        },
        out: {
          [getChannelName('show_list_Buttons')]: {
            bind: 'show-list-Buttons'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };
  const base = {
    hash: 'top-up',
    currentPage: {
      url: '/top-up'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      buttonList,
      navigationHandler,
      analyticsManager,
      managerParkingList
    ]
  };
  return sphericaPageUtils.spherize(base);
};
