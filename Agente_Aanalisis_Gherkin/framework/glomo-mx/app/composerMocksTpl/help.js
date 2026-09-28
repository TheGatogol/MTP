'use strict';

module.exports = CONFIG => {
  const {
    SPINNER: spinner,
    APP_SIDEBAR: appSidebar,
    appFooter,
    get
  } = require('./common/helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNER = spinner(CONFIG);
  // eslint-disable-next-line new-cap
  const APP_FOOTER = appFooter(CONFIG, 'help');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('help');
  const appSettings = [ 'app_settings' ];
  const pageName = 'help';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const _localStorage = require('./common/_local-storage');
  const isSpherica = sphericaPageUtils.isSpherica();
  const ANALYTICS = require('./analytics/_help')(CONFIG);

  const helpInfo = {
    header: {
      ...(isSpherica
        ? { description: 'glomo-help-header-message' }
        : { title: 'glomo-help-header-message' })
    }
  };

  const helpOptions = [
    'glomo-help-info-option-1',
    'glomo-help-info-option-2',
    'glomo-help-info-option-3'
  ];

  // Numbers to be override by app-settings numbers, just for render page without problems
  const phonesList = [
    {
      number: '18003969665',
      text: 'glomo-help-phone-number-euca',
      id: 'euca'
    },
    {
      number: '0013039671098',
      text: 'glomo-help-phone-number-other',
      id: 'other'
    }
  ];

  const base =  {
    hash: 'mx-help',
    currentPage: {
      url: '/help',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'fade',
        disableScrollLock: true,
        rightDrawer: true,
        edgeSwipeSensitivity: 50,
        footerHeight: 48,
        disableEdgeSwipe: !!CONFIG.nativeShell,
        avoidToggleMenu: !!CONFIG.nativeShell,
        className: isNativeIos ? 'ios-top-padding bg-white' : 'bg-white',
        extraHeaderClass: 'dark-blue-bg',
        iOSFixedHeader: true,
        cellsConnections: {
          in: {
            help_init_page: {
              bind: 'recalculateHeader'
            },
            help_open_native_menu: {
              bind: 'toggleMenu'
            },
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        disableScrollLock: false,
        rightDrawer: true,
        footerHeight: 16,
        className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
      }
    },

    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'help',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_help: {
                bind: 'init'
              }
            },
            out: {
              help_reset_page: {
                bind: 'reset'
              },
              help_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.PAGE_VIEW
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          rightIconAction: 'toggle-help-menu',
          titleName: 'glomo-help-header-title',
          cellsConnections: {
            in: {
              set_help_header_left_icon: {
                bind: 'leftIcon'
              },
              set_help_right_left_icon: {
                bind: 'rightIcon'
              }
            },
            out: {
              navigation_help_to_previous_page: {
                bind: 'click-left-button',
                backStep: true
              },
              help_open_native_menu: {
                bind: 'toggle-help-menu',
                'forward-to-native': true
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back-mini',
          titleName: 'glomo-help-header-title',
          leftIconText: 'cells-molecule-header-spherica-back',
          className: 'header--core-grey header',
          variant: 'primary-alt'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-help',
        tagSpherica: 'glomo-help-spherica',
        properties: {
          className: 'assistance',
          extraDescriptionClass: 'assistance margin-bottom-sm',
          extraListClass: 'medium-blue margin-item-sm',
          img: 'images/apps/app-phone-assistance.svg',
          actionButton: 'glomo-help-additional-call-button',
          phonesListDescription: 'glomo-help-info-phones-intro',
          helpInfo,
          helpOptions,
          phonesList,
          cellsConnections: {
            in: {
              help_info: {
                bind: 'helpInfo'
              },
              help_options: {
                bind: 'helpOptions'
              },
              help_img: {
                bind: 'img'
              },
              help_additional_content: {
                bind: 'helpAdditionalContent'
              },
              help_call_bbva: {
                bind: 'manageCallAction'
              },
              help_call_bbva_abroad: {
                bind: 'manageCallAction'
              },
              help_phones_list: {
                bind: 'phonesList'
              }
            },
            out: {
              help_open_main_phone_number: {
                bind: 'glomo-help-action-button-clicked',
                analytics: ANALYTICS.EXTERNAL_LINK
              },
              help_open_outside_phone_number: {
                bind: 'glomo-help-phone-button-clicked'
              }
            }
          }
        },
        propertiesSpherica: {
          classButton: 'link full',
          className: 'footer-button',
          isDisplayPhoneButton: true,
          img: 'images/spherica/phone-assistance-spherica.svg',
          extraListClass: '',
          variant: 'primary'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-help-dm',
        properties: {
          tel: CONFIG.phoneNumberContact,
          helpOptions,
          helpInfo,
          formatPhoneRegex: {
            'euca': '^(\\d{1})(\\d{3})(\\d{3})(\\d{4})$',
            'other': '^(\\d{2})(\\d{1})(\\d{3})(\\d{3})(\\d{4})$'
          },
          cellsConnections: {
            in: {
              help_init_page: {
                bind: 'init'
              },
              global_storage_get_app_settings_success: {
                bind: 'setAppSettings'
              },
              help_open_main_phone_number: {
                bind: 'openDialer'
              },
              help_open_outside_phone_number: {
                bind: 'openDialer'
              }
            },
            out: {
              help_info: {
                bind: 'help-info-changed'
              },
              help_options: {
                bind: 'help-options-changed'
              },
              help_img: {
                bind: 'img-changed'
              },
              help_additional_content: {
                bind: 'help-additional-content-changed'
              },
              global_get_from_storage: {
                bind: 'get-app-settings'
              },
              help_phones_list: {
                bind: 'phones-list-changed'
              },
              help_open_dialer: {
                bind: 'open-call-action'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-action-launcher',
        properties: {
          cellsConnections: {
            in: {
              help_open_dialer: {
                bind: 'openDialer'
              }
            },
            out: {}
          }
        }
      }
    ]
  };

  if (APP_FOOTER) {
    base.components.push(APP_FOOTER);
  }
  if (CONFIG.nativeShell) {
    const getComponent = get(base);
    getComponent('cells-molecule-header').properties.cellsConnections.out.global_open_native_menu = {
      bind: 'toggle-help-menu',
      'forward-to-native': true
    };
  } else {
    base.components.push(appSidebar(CONFIG));
  }
  _localStorage.addOutStorageChannels(base.components, appSettings, CONFIG);

  return sphericaPageUtils.spherize(base);
};
