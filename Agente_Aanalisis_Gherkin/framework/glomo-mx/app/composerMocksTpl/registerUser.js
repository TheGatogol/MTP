'use strict';
const { SPINNER: getSpinner, headerHeight } =  require('./common/helpers/_utils');
const pageName = 'registerUser';
module.exports = (CONFIG) => {
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      headerHeight,
      extraHeaderClass: 'bbva-core-blue',
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      headerFixed: true,
      className: CONFIG.nativeIos ? 'ios-top-padding bbva-core-blue' : 'bbva-core-blue',
      cellsConnections: {
        in: {
          REGISTER_USER_INIT_PAGE: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      titleName: 'register-user-error'
    }
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          DIGITAL_ACTIVATION_BACK_FLOW_RESET: {
            bind: 'goBack'
          },
          DIGITAL_ACTIVATION_CLOSE_MOBILE_BACK: {
            bind: 'goBack'
          },
          DIGITAL_ACTIVATION_BACK_STEP: {
            bind: 'goBack'
          }
        },
        out: {
          REGISTER_USER_CLOSE: {
            bind: 'header-right-button',
            backStep: true
          }
        }
      }
    }
  };
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_page_registerUser: {
            bind: 'navigation'
          }
        },
        out: {
          REGISTER_USER_INIT_PAGE: {
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
  const bbvaBannerImage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-banner-image',
    familyPath: '@bbva-web-components/bbva-banner-image',
    render: 'litElement',
    properties: {
      imageSrc: './images/error_TYC.svg',
      imgAccessibilityText: '',
      fullWidth: true,
      className: 'image-size-auto u-padding-left--0 image-margin-0',
      size: 'XL'
    }
  };
  const bbvaTypeTextTitle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-type-text',
    render: 'litElement',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    properties: {
      text: 'register-user-again',
      fontWeight: '500',
      size: 'XL',
      alignment: 'center',
      style: 'margin: 0 1.5rem'
    }
  };
  const bbvaTypeTextDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-type-text',
    render: 'litElement',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    properties: {
      text: 'access-key-recovery-description-for-register',
      size: 'M',
      alignment: 'center'
    }
  };
  const divButtonContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    properties: {
      id: 'div__buttons',
      className: 'u-display--table u-margin--center u-margin-bottom--1',
      style: 'display: block; padding-top: 15rem'
    }
  };
  const bbvaButtonDefaultPrimary = {
    zone: 'div__buttons.',
    type: 'UI',
    tag: 'bbva-button-default',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    properties: {
      className: 'u-display--table u-margin--center u-margin-bottom--1',
      variant: 'primary',
      text: 'register-user',
      cellsConnections: {
        out: {
          REGISTER_USER_REDIRECT_FLOW_DIGITAL: {
            bind: 'click',
            link: {
              page: 'digitalActivation'
            }
          }
        }
      }
    }
  };
  const bbvaButtonDefaultSecondary = {
    zone: 'div__buttons.',
    type: 'UI',
    tag: 'bbva-button-default',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    properties: {
      className: 'u-display--table u-margin--center u-margin-bottom--1',
      variant: 'secondary',
      text: 'register-user-exit',
      cellsConnections: {
        out: {
          REGISTER_USER_BACK_LOGIN: {
            bind: 'click',
            backStep: true
          }
        }
      }
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: '/register-user'
    },
    pages,
    template,
    components: [
      getSpinner(CONFIG),
      cellsMoleculeHeader,
      glomoNavigationHandler,
      cellsHandleLifeCycle,
      bbvaBannerImage,
      bbvaTypeTextTitle,
      bbvaTypeTextDescription,
      divButtonContainer,
      bbvaButtonDefaultPrimary,
      bbvaButtonDefaultSecondary
    ]
  };
  return base;
};
