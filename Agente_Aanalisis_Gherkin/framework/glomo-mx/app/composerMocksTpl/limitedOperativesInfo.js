'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'limited_operatives_info';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);

  const defaultAcceptCancelButtons = {
    buttons: {
      primary: {
        class: 'primary',
        text: 'glomo-stand-in-modal-button-accept',
        action: 'stand-in-modal-button-accept'
      }
    }
  };

  const base = {
    hash: 'limited-operatives-info',
    currentPage: {
      url: '/limited-operatives-info'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding' : '',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true
      }
    },
    components: []
  };

  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'limitedOperativesInfo',
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_page_limitedOperativesInfo: {
            bind: 'init'
          }
        },
        out: {
          limited_operatives_info_init_page: {
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

  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      titleName: 'glomo-limited-operatives-account-detail-header-title',
      rightIcon: 'coronita:close',
      cellsConnections: {
        out: {
          limited_operatives_info_back_button_pressed: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const cellsTextDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      id: 'standin_skeleton1',
      title: 'glomo-stand-in-modal-post-loggin-title',
      decoratedImage: './images/welcome/media-manager.svg',
      sizeImage: 'regular-size',
      className: 'align-center title-xl margin-top-xl',
      hidden: true,
      cellsConnections: {
        in: {
          stand_in_modal_dynamic_title_text: {
            bind: 'title'
          },
          stand_in_modal_dynamic_main_description: {
            bind: 'mainDescription'
          },
          stand_in_modal_hide_text_description: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const bodyText = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      id: 'standInParagraph',
      text: '',
      alignment: 'center',
      size: 'S',
      fontWeight: '400',
      textColor: '#121212',
      className: 'u-margin--1 u-margin-bottom--1 u-margin-top--0',
      cellsConnections: {
        in: {
          stand_in_modal_dynamic_secondary_description: {
            bind: 'text'
          }
        }
      }
    }
  };

  const cellsConfirmButtons = {
    zone: 'app__footer',
    tag: 'cells-confirm-buttons',
    type: 'UI',
    properties: {
      hideDivider: true,
      config: defaultAcceptCancelButtons,
      cellsConnections: {
        out: {
          limited_operatives_info_back_button_pressed: {
            bind: 'stand-in-modal-button-accept'
          }
        }
      }
    }
  };

  const glomoUnavailableOperationManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-unavailable-operation-manager',
    properties: {
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setContentSettings'
          },
          limited_operatives_info_init_page: {
            bind: 'init'
          },
          global_landing_page_manager_notify_stand_in: {
            bind: 'setNavigationFromLanding'
          },
          limited_operatives_info_back_button_pressed: {
            bind: 'backNavigation'
          },
          dashboard_stand_in_navigate_to_limited_operatives: {
            bind: 'setNavigation'
          },
          global_account_stand_in_info_page: {
            bind: 'setNavigation'
          },
          NAVIGATE_TO_LIMITED_OPERATIVES_INFO: {
            bind: 'setNavigation'
          }
        },
        out: {
          stand_in_modal_dynamic_title_text: {
            bind: 'stand-in-modal-dynamic-title'
          },
          stand_in_modal_dynamic_main_description: {
            bind: 'stand-in-modal-dynamic-main-paragraph'
          },
          stand_in_modal_dynamic_secondary_description: {
            bind: 'stand-in-modal-dynamic-secondary-paragraph'
          },
          stand_in_modal_hide_text_description: {
            bind: 'stand-in-modal-hide-text-description'
          },
          stand_in_modal_go_back: {
            bind: 'stand-in-modal-go-back',
            backStep: true
          },
          global_landing_page_manager_next_flow: {
            bind: 'stand-in-modal-landing-page-next-flow'
          }
        }
      }
    }
  };

  base.components.push(
    cellsHandleLifeCycle,
    glomoUnavailableOperationManager,
    cellsMoleculeHeader,
    cellsTextDescription,
    bodyText,
    cellsConfirmButtons
  );

  return base;
};
