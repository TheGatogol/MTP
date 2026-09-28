'use strict';
const { useNames, createPrefixFromPageName, SPINNER: spinner } = require('./common/helpers/_utils');
const _page = require('./common/_pages');
const pageName = 'payrollLinkSuccess';
const operativePrefix = createPrefixFromPageName(pageName);
const [ getChannelName ] = useNames(operativePrefix);
module.exports = (config) => {
  const payrollLinkPage = _page(config)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          payroll_link_success_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          payroll_link_success_leave_operative_confirm: {
            bind: 'alert-CONFIRM-EXIT-PAYROLL-LINK-SUCCESS-OPERATIVE-accept'
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      className: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true
    }
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
        label: 'payroll-link-page-header-close',
        cellsConnections: {
          out: {
            payroll_link_success_req_header_close: {
              bind: 'header-main-close-icon-click'
            }
          }
        }
      }
    })
  };
  const titlePanelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      microillustration: 'success',
      heading: 'payroll-success-page-panel-info-heading'
    },
    propertiesSpherica: {
      variant: 'success',
      className: 'u-margin--1',
      heading: 'payroll-success-page-panel-info-heading-spherica',
      isIcon: true
    }
  };
  const textDate = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-text--center',
      cellsConnections: {
        in: {
          payroll_link_benefits_send_date_time: {
            bind: 'text'
          }
        }
      }
    }
  };
  const bbvaListSimpleContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    role: 'tabpanel',
    container: isSpherica ? true : false,
    properties: {
      id: 'detailBbvaListSimpleContainer'
    },
    propertiesSpherica: {
      className: 'u-margin--1 u-border-radius--1 u-padding--0-5 bg-spherica-primary-surface-base-default'
    }
  };
  const accountInformation = {
    zone: isSpherica ? 'detailBbvaListSimpleContainer.slot-content' : 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      variant: 'stacked-center',
      label: 'payroll-success-page-list-simple-account',
      maskChars: '•',
      visibleChars: 5,
      cellsConnections: {
        in: {
          [getChannelName('set_number_account')]: {
            bind: 'mask'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: '',
      boldMask: true
    }
  };
  const businessInformation = {
    zone: isSpherica ? 'detailBbvaListSimpleContainer.slot-content' : 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      variant: 'stacked-center',
      label: 'payroll-success-page-list-simple-business',
      cellsConnections: {
        in: {
          [getChannelName('set_business_info')]: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: ''
    }
  };
  const businessCodeInformation = {
    zone: isSpherica ? 'detailBbvaListSimpleContainer.slot-content' : 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      variant: 'stacked-center',
      label: 'payroll-multistep-company-data-content-form-text-label',
      cellsConnections: {
        in: {
          [getChannelName('set_business_code')]: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: ''
    }
  };
  const bussinesDateDone = {
    zone: isSpherica ? 'detailBbvaListSimpleContainer.slot-content' : 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      variant: 'stacked-center',
      label: 'payroll-multistep-company-data-content-form-date-label',
      cellsConnections: {
        in: {
          payroll_link_benefits_send_date_time: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: ''
    }
  };
  const bussinesEmailNotification = {
    zone: isSpherica ? 'detailBbvaListSimpleContainer.slot-content' : 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      cellsConnections: {
        in: {
          payroll_link_benefits_send_customer_email: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      tag: 'p',
      size: 'M'
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
      className: 'u-margin--1',
      icon: 'coronita:info',
      cellsConnections: {
        in: {
          [getChannelName('set_notification_message')]: {
            bind: 'message'
          }
        }
      }
    },
    propertiesSpherica: {
      messageTitle: 'payroll-success-page-notification-message-1',
      message: 'payroll-success-page-notification-message-2',
      icon: '',
      bookTitle: true,
      cellsConnections: {
        in: {
          payroll_link_success_set_notification_message: {
            bind: ''
          }
        }
      }
    }
  };
  const customerEmailNotification = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-text--center',
      cellsConnections: {
        in: {
          payroll_link_benefits_send_customer_email: {
            bind: 'text'
          }
        }
      }
    }
  };
  const btnExit = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      id: 'btnLinkSuccess',
      text: 'payroll-page-alert-exit-header-button-cancel',
      className: 'u-display--table u-margin--center u-margin-top--1-5 u-margin-bottom--0-5',
      cellsConnections: {
        out: {
          [getChannelName('req_leave_link_success_operative')]: {
            bind: 'click'
          }
        }
      }
    }
  };
  const payrollDm = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-payroll-link-success',
    familyPath: '@glomo-web-components/bbva-manager-onboarding-payroll-account',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          payroll_send_account_info: {
            bind: 'data'
          },
          payroll_link_benefits_set_data_company: {
            bind: 'dataCompany'
          },
          payroll_link_benefits_send_account_info: {
            bind: 'numberAccount'
          },
          [getChannelName('init_page')]: {
            bind: 'setLocales'
          },
          [getChannelName('req_header_close')]: {
            bind: 'validateLeavePayrollSuccess'
          },
          [getChannelName('leave_operative_confirm')]: {
            bind: 'validateLeavePayrollSuccess'
          },
          [getChannelName('req_leave_link_success_operative')]: {
            bind: 'validateLeavePayrollSuccess'
          }
        },
        out: {
          [getChannelName('leave_link_success_operative')]: {
            bind: 'navigate-to-pda-from-payroll-link-success',
            backStep: true
          },
          [getChannelName('set_business_info')]: {
            bind: 'set-payroll-success-page-business-name'
          },
          [getChannelName('set_business_code')]: {
            bind: 'set-payroll-success-page-business-code'
          },
          [getChannelName('set_customer_email')]: {
            bind: 'set-payroll-success-page-email-text'
          },
          [getChannelName('set_notification_message')]: {
            bind: 'set-payroll-success-page-notification-message'
          },
          [getChannelName('set_number_account')]: {
            bind: 'set-payroll-success-page-number-account'
          },
          modal_logout_automatic: {
            bind: 'logout-payroll-operative'
          },
          global_alert_manager_open_with_settings: {
            bind: 'payroll-send-modal-config'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
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
    hash: 'mx-payroll-link-success',
    currentPage: {
      url: '/payroll-link-success'
    },
    pages: payrollLinkPage,
    template,
    components: [
      handleLifeCycle,
      bbvaHeader,
      titlePanelInfo,
      textDate,
      accountInformation,
      businessInformation,
      businessCodeInformation,
      notificationMessage,
      customerEmailNotification,
      btnExit,
      payrollDm,
      spinner(config)
    ]
  };
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
    base.components = base.components.filter(component => component.tag !== 'bbva-button-default');
    base.components.splice(3, 1, bbvaListSimpleContainer);
    base.components.splice(8, 1);
    base.components.push(bussinesDateDone);
    base.components.push(bussinesEmailNotification);
  }
  return sphericaPageUtils.spherize(base);
};
