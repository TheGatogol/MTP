'use strict';

const { useNames, createPrefixFromPageName, createSpinner, footerHeight} = require('./common/helpers/_utils');

module.exports = CONFIG => {
  const pageName = 'codiSettingsKnowMore';
  const operativePrefix = createPrefixFromPageName(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      footerFixed: true,
      footerHeight,
      hasFooter: true,
      headerFixed: true,
      iOSFixedHeader: isNativeIos
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_codiSettingsKnowMore: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
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
      backAction: 'navigate-previous-page',
      cellsConnections: {
        in: {
          [getChannelName('back_request_action')]: {
            bind: 'goBack'
          },
          mobile_manage_operation_terms_conditions_result: {
            bind: 'enableNativeBackNavigation'
          }
        },
        out: {
          [getChannelName('exit_codi_settings')]: {
            bind: 'navigate-previous-page',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };
  const bbvaHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'codi-refactor-settings-header-title',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          [getChannelName('back_request_action')]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };
  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      microillustration: 'sendmoneyappdollardark',
      heading: 'codi-refactor-settings-heading',
      text: 'codi-refactor-settings-panel-info-text'
    }
  };
  const headerCategoryCharacteristic = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    properties: {
      className: 'u-text-color--600',
      text: 'codi-refactor-settings-category'
    }
  };
  const listBulletCharacteristicPrincipal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-bullet',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    render: 'litElement',
    properties: {
      icon: 'coronita:bullet1',
      cellsConnections: {
        in: {
          [getChannelName('set_label_list_bullet_principal')]: {
            bind: 'text'
          }
        }
      }
    }
  };
  const listBulletCharacteristicItemSecondary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-bullet',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    render: 'litElement',
    properties: {
      icon: 'coronita:bullet1',
      cellsConnections: {
        in: {
          [getChannelName('set_label_list_bullet_more_info')]: {
            bind: 'text'
          }
        }
      }
    }
  };
  const headerCategoryBenefit = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    properties: {
      className: 'u-text-color--600',
      text: 'codi-refactor-settings-category-title'
    }
  };
  const listBulletBenefitPrincipal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-bullet',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    render: 'litElement',
    properties: {
      icon: 'coronita:bullet1',
      cellsConnections: {
        in: {
          [getChannelName('set_label_benefit_principal')]: {
            bind: 'text'
          }
        }
      }
    }
  };
  const listBulletBenefitItemSecondary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-bullet',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    render: 'litElement',
    properties: {
      icon: 'coronita:bullet1',
      cellsConnections: {
        in: {
          [getChannelName('set_label_benefit_more')]: {
            bind: 'text'
          }
        }
      }
    }
  };
  const buttonDefault = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      variant: 'primary',
      text: 'codi-refactor-settings-exit',
      className: 'u-display--table u-margin--center u-margin-top--2',
      cellsConnections: {
        out: {
          [getChannelName('back_request_action')]: {
            bind: 'click'
          }
        }
      }
    }
  };
  const bbvaManagerCodi = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-setting',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'initSettingsKnow'
          },
          [getChannelName('init_page')]: {
            bind: 'initSettingsKnow'
          }
        },
        out: {
          [getChannelName('set_label_list_bullet_principal')]: {
            bind: 'set-first-label-list-bullet'
          },
          [getChannelName('set_label_list_bullet_more_info')]: {
            bind: 'set-second-label-list-bullet'
          },
          [getChannelName('set_label_benefit_principal')]: {
            bind: 'set-first-label-benefit'
          },
          [getChannelName('set_label_benefit_more')]: {
            bind: 'set-second-label-benefit'
          }
        }
      }
    }
  };
  const base = {
    hash: 'codi-settings-know-more',
    currentPage: {
      url: '/codi-settings-know-more'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      lifeCycle,
      navigationHandler,
      bbvaHeader,
      panelInfo,
      headerCategoryCharacteristic,
      listBulletCharacteristicPrincipal,
      listBulletCharacteristicItemSecondary,
      headerCategoryBenefit,
      listBulletBenefitPrincipal,
      listBulletBenefitItemSecondary,
      buttonDefault,
      bbvaManagerCodi
    ]
  };
  return base;
};
