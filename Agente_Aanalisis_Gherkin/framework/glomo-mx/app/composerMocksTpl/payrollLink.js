'use strict';
const { useNames, createPrefixFromPageName, SPINNER: spinner } = require('./common/helpers/_utils');
const _page = require('./common/_pages');
const pageName = 'payrollLink';
const operativePrefix = createPrefixFromPageName(pageName);
const [ getChannelName ] = useNames(operativePrefix);
module.exports = (config) => {
  const analytics = require('./analytics/_payrollLink')(config);
  const payrollLinkPage = _page(config)(pageName);
  const native = config.native || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          payroll_link_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          payroll_link_leave_operative_confirm: {
            bind: 'alert-CONFIRM-EXIT-PAYROLL-LINK-OPERATIVE-accept'
          }
        }
      }
    }
  };

  const images = {
    cashDollar: 'images/cash-or-commissions-dollar.svg',
    atm: 'images/atm-assistant.svg',
    accountCards: 'images/accounts-cards.svg',
    lifeInsurance: './images/dynamicLife/logo-dynamic-life-insurance.svg'
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica',
      override: {
        className: ''
      }
    })
  };
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
          ['__bridge_page_' + pageName]: {
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
  const bbvaHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'modal',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      text: 'payroll-link-page-header-title',
      cellsConnections: {
        out: {
          [getChannelName('req_header_close')]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'bbva-header-main-spherica',
      type: 'modal',
      override: {
        id: 'payroll-link-page-header-title',
        text: 'payroll-link-page-header-title',
        label: 'payroll-portability-close-label',
        cellsConnections: {
          out: {
            payroll_link_req_header_close: {
              bind: 'header-main-close-icon-click'
            }
          }
        }
      }
    })
  };
  const titleHeaderInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      id: 'benefits-panel-description',
      className: 'u-margin-top--1-5',
      microillustration: '',
      heading: 'payroll-link-page-panel-info-title',
      text: 'payroll-link-page-panel-info-description'
    },
    propertiesSpherica: {
      alignText: 'center',
      className: '',
      microillustration: '',
      heading: 'payroll-link-page-panel-info-title',
      text: 'payroll-link-page-panel-info-description'
    }
  };
  const subtitleCategory = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'benefits-category',
      className: 'u-margin-top--1-5 u-text-color--600',
      text: 'payroll-link-page-header-category'
    },
    propertiesSpherica: {
      className: 'u-margin--1',
      text: 'payroll-link-page-header-category-spherica'
    }
  };
  const descriptionCategory = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'benefits-texts-description',
      className: 'u-margin--grid',
      text: 'payroll-link-page-text-info'
    },
    propertiesSpherica: {
      tag: 'p',
      size: 'M'
    }
  };
  const benefitList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-clip-list',
    tagSpherica: 'bbva-aggregation-clip-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-clip-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-clip-list-spherica',
    render: 'litElement',
    properties: {
      id: 'benefits-list',
      className: 'hide-border-list u-margin-bottom--0-5',
      cellsConnections: {
        in: {
          [getChannelName('set_benefit_list')]: {
            bind: 'itemList'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt'
    }
  };
  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'benefits-notification',
      className: 'u-margin--1',
      icon: 'coronita:info',
      cellsConnections: {
        in: {
          [getChannelName('set_restriction_message')]: {
            bind: 'message'
          }
        }
      }
    },
    propertiesSpherica: {
      bookTitle: true,
      icon: '',
      messageTitle: 'payroll-link-page-notification-message-info-1',
      message: 'payroll-link-page-notification-message-info-2',
      newCellsConnections: {
        remove: {
          in: [
            'payroll_link_set_restriction_message'
          ]
        }
      }
    }
  };

  const dividerBtn = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      className: 'bold'
    }
  };
  const btnAcceptOnboarding = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--1-5 u-margin-bottom--1-5',
      id: 'btnPayrollLink',
      text: 'payroll-page-default-button-text',
      cellsConnections: {
        out: {
          [getChannelName('accept_onboarding')]: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--grid u-margin-bottom--0-5 u-max-width--2'
    }
  };
  const payrollDm = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-onboarding-payroll-account',
    familyPath: '@glomo-web-components/bbva-manager-onboarding-payroll-account',
    render: 'litElement',
    properties: {
      isNative: native,
      images,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'setLocalesText'
          },
          [getChannelName('req_header_close')]: {
            bind: 'backButtonHeader'
          },
          [getChannelName('leave_operative_confirm')]: {
            bind: 'payrollLinkleaveOperative'
          },
          [getChannelName('accept_onboarding')]: {
            bind: 'getMultistep'
          },
          payroll_send_assign: {
            bind: 'magicLogAccess'
          }
        },
        out: {
          [getChannelName('leave_link_operative')]: {
            bind: 'leave-operative-payroll-link',
            skipHistory: true,
            backStep: true
          },
          [getChannelName('set_benefit_list')]: {
            bind: 'set-detail-clip-list'
          },
          [getChannelName('set_restriction_message')]: {
            bind: 'set-payroll-link-page-notification-message',
            analytics: analytics.appPageVisit
          },
          [getChannelName('req_nav_payroll_benefits')]: {
            bind: 'navigation-payroll-link-benefits',
            analytics: analytics.appPageStarted,
            link: {
              page: 'payrollLinkBenefits'
            }
          },
          global_alert_manager_open_with_settings: {
            bind: 'payroll-send-modal-config'
          },
          global_logout_sesion_expiration: {
            bind: 'logout-upgrade-payroll'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'payroll-send-modal-config'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };
  const base = {
    hash: 'mx-payroll-link',
    currentPage: {
      url: '/payroll-link'
    },
    pages: payrollLinkPage,
    template,
    components: [
      handleLifeCycle,
      spinner(config),
      bbvaHeader,
      titleHeaderInfo,
      subtitleCategory,
      descriptionCategory,
      benefitList,
      notificationMessage,
      btnAcceptOnboarding,
      dividerBtn,
      payrollDm
    ]
  };
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
    base.components = base.components.filter(component => component.tag !== 'bbva-divider');
  }
  return sphericaPageUtils.spherize(base);
};
