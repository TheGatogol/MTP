/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const PAGE_NAME = 'inAppCrmPage';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const SPINNER = utils.SPINNER(CONFIG);
  const { useNames, createPrefixFromPageName } = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      iOSFixedHeader: isNativeIos,
      disableEdgeSwipe: true,
      hasFooter: true,
      footerFixed: true
    },
    propertiesSpherica: {
      hasFooter: true,
      footerFixed: true,
      footerHeight: '80'
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_inAppCrmPage: {
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

  const headerMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'close',
      variant: 'modal',
      cellsConnections: {
        in: {
          [getChannelName('set_text_header')]: {
            bind: 'text'
          },
          [getChannelName('set_icon_rigth_primary')]: {
            bind: 'iconRightPrimary'
          }
        },
        out: {
          [getChannelName('_navigation_page_next')]: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              page: 'dashboard',
              cleanUntil: PAGE_NAME
            }
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      rightIconLabel: 'bbva-header-main-close-aria-label',
      rightButtons: [ {
        icon: 'spherica:close',
        defaultEventIconName: 'header-main-icon-right-primary-click',
        label: 'bbva-header-main-close-aria-label'
      } ]
    }
  };

  const panelOffer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-offer',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-offer',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      description: '',
      linkIcon: '',
      cellsConnections: {
        in: {
          [getChannelName('set_microillustration')]: {
            bind: 'microillustration'
          },
          [getChannelName('set_title_panel')]: {
            bind: 'contentTitle'
          },
          [getChannelName('set_description_text')]: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_page_set_title_panel: {
              bind: 'heading'
            },
            in_app_crm_page_set_description_text: {
              bind: 'text'
            }
          }
        }
      }
    }
  };

  const inAppCrmManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-technicalcore-inapp-crm',
    familyPath: '@glomo-web-components/bbva-technicalcore-inapp-crm',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initShowInApp'
          },
          global_get_data_succes_inapp_crm: {
            bind: 'getDataInApp'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          }
        },
        out: {
          open_control_veil: {
            bind: 'spinner-inapp-show'
          },
          [getChannelName('set_icon_rigth_primary')]: {
            bind: 'inapp-crm-set-icon-close-show'
          },
          [getChannelName('set_text_header')]: {
            bind: 'inapp-crm-set-text-header'
          },
          [getChannelName('set_microillustration')]: {
            bind: 'inapp-crm-set-microillustration'
          },
          [getChannelName('set_title_panel')]: {
            bind: 'inapp-crm-set-text-title'
          },
          [getChannelName('set_description_text')]: {
            bind: 'inapp-crm-set-text-description'
          },
          [getChannelName('show_basic_button_fixed')]: {
            bind: 'inapp-crm-panel-button-basic-show'
          },
          [getChannelName('basic_set_button_text')]: {
            bind: 'inapp-crm-panel-set-text-button'
          },
          close_control_veil: {
            bind: 'spinner-inapp-hide'
          },
          [getChannelName('exit_to_dashboard_back_button')]: {
            bind: 'navigation-to-dashboard-page',
            link: {
              page: 'dashboard',
              cleanUntil: PAGE_NAME
            }
          }
        }
      }
    }
  };

  const panelButton = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'basic',
      buttonClass: 'primary-dark',
      className: 'no-gradient',
      cellsConnections: {
        in: {
          [getChannelName('show_basic_button_fixed')]: {
            bind: 'show'
          },
          [getChannelName('basic_set_button_text')]: {
            bind: 'buttonText'
          }
        },
        out: {
          [getChannelName('_navigation_page_next_flow')]: {
            bind: 'panel-button-fixed-item-click',
            link: {
              page: 'dashboard',
              cleanUntil: PAGE_NAME
            }
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--1 u-max-width--2',
      newCellsConnections: {
        add: {
          in: {
            in_app_crm_page_basic_set_button_text: {
              bind: 'text'
            }
          }
        }
      }
    }
  };

  const apiCustomer = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-customers',
    tag: 'cells-dm-global-apis-customers-mx',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      authenticationType: CONFIG.globalServices.customers.headers.authenticationType,
      native: CONFIG.native || false,
      cellsConnections: {
        in: {
          dashboard_get_list_biometrics: {
            bind: 'getListBiometrics'
          }
        },
        out: {
          dashboard_list_biometrics_success: {
            bind: 'get-list-biometrics-success'
          },
          dashboard_list_biometrics_error: {
            bind: 'get-list-biometrics-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'in-app-crm-page',
    currentPage: {
      url: '/in-app-crm-page'
    },
    pages: pages,
    template,
    components: [
      SPINNER,
      lifeCycle,
      headerMain,
      panelOffer,
      inAppCrmManager,
      panelButton,
      apiCustomer
    ]
  };
  return sphericaPageUtils.spherize(base);
};
