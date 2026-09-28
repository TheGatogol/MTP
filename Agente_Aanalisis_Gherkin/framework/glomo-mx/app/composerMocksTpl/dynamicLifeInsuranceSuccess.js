'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'dynamicLifeInsuranceSuccess';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const operativePrefix = 'dynamicLifeInsuranceSuccess';
  const { useNames } = utils;
  const [ getChannelName ] = useNames(operativePrefix);
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'loading',
      cellsConnections: {
        in: {
          [getChannelName('GO_BACK')]: {
            bind: 'navigate'
          },
          [getChannelName('CONFIRM_BUTTONS_CLICKED')]: {
            bind: 'navigate'
          },
          [getChannelName('NAVIGATION_SUCCESS_PAGE_BACK_REQUEST')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('NAVIGATION_TO_DASHBOARD')]: {
            bind: 'navigation-to-dashboard-logged',
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
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_dynamicLifeInsuranceSuccess: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('MAIN_PAGE_INIT_PAGE')]: {
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
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'dynamic-life-insurance-main-page-header-title',
      cellsConnections: {
        out: {
          [getChannelName('NAVIGATION_SUCCESS_PAGE_BACK_REQUEST')]: {
            bind: 'click-right-button'
          },
          DYNAMIC_LIFE_INSURANCE_SUCCESS_NAVIGATION_SUCCESS_PAGE_BACK_REQUEST: {
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
      page: pageName,
      className: '',
      formatDate: 'DD MMMM YYYY, HH:MM [h]',
      hideDate: false,
      withOutAmount: true,
      cellsConnections: {
        in: {
          DYNAMIC_LIFE_INSURANCE_OFFER_PAGE_SEND_INFO_TO_SUCCESS_PAGE: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('NAVIGATION_SUCCESS_PAGE_BACK_REQUEST')]: {
            bind: 'cells-successful-response-click-primary'
          },
          DYNAMIC_LIFE_INSURANCE_SUCCESS_NAVIGATION_SUCCESS_PAGE_BACK_REQUEST: {
            bind: 'cells-successful-response-click-primary'
          },
          [getChannelName('DOWNLOAD_APP_PRESS_BUTTON')]: {
            bind: 'card-advice-link-click'
          }
        }
      }
    }
  };
  const glomoDynamicLifeInsuranceDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-dynamic-life-insurance-dm',
    properties: {
      isNativeIos: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('NAVIGATION_SUCCESS_PAGE_BACK_REQUEST')]: {
            bind: 'acceptModalError'
          }
        },
        out: {
          [getChannelName('ACCEPT_MODAL_ERROR')]: {
            bind: 'accept-modal-error-clicked',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };
  const base = {
    hash: 'dynamic-life-insurance-page',
    currentPage: {
      url: '/dynamic-life-insurance-success'
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
        iOSFixedHeader: true,
        topOnConfirm: true,
        className: 'header-fixed',
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            dynamic_life_insurance_scroll_zone: {
              bind: 'scrollItemIntoView'
            },
            dynamic_life_insurance_open_confirm: {
              bind: 'open'
            },
            dynamic_life_insurance_close_confirm: {
              bind: 'close'
            }
          },
          out: {
            dynamic_life_insurance_scroll_complete: {
              bind: 'cells-scroll-complete'
            },
            dynamic_life_insurance_opx_scroll_complete: {
              bind: 'opx-template-content-scroll'
            }
          }
        }
      }
    },
    components: [
      navigationHandler,
      cellsHandleLifeCycle,
      header,
      cellsSuccessfulResponse,
      glomoDynamicLifeInsuranceDM
    ]
  };
  if (CONFIG.nativeShell) {
    base.components.push({
      zone: 'app__main',
      tag: 'cells-mobile-action-launcher',
      type: 'DM',
      properties: {
        cellsConnections: {
          in: {
            [getChannelName('apps_open_market_vitality')]: {
              bind: 'openMarket'
            }
          },
          out: {
            apps_success_can_open_app_uri: {
              bind: 'success-can-open-uri'
            },
            apps_succes_open_market_close_veil: {
              bind: 'success-open-market'
            }
          }
        }
      }
    });
  }
  return base;
};
