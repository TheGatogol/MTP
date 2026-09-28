'use strict';
const { useNames, createPrefixFromPageName, SPINNER: spinner } = require('./common/helpers/_utils');
const _page = require('./common/_pages');
const pageName = 'payroll';
const operativePrefix = createPrefixFromPageName(pageName);
const [ getChannelName ] = useNames(operativePrefix);
module.exports = (config) => {
  const analytics = require('./analytics/_payrollLink')(config);
  const analiticsPayrollPortability = require('./analytics/_payrollPortability')(config);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const payrollPage = _page(config)(pageName);
  const host = config.globalServices.host;
  const native = config.native || false;
  const isNativeiOS = config.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          payroll_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          payroll_leave_operative_confirm: {
            bind: 'alert-CONFIRM-EXIT-PAYROLL-OPERATIVE-accept'
          },
          payroll_validate_curp_leave_operative_cancel: {
            bind: 'alert-VALIDATE-CURP-cancel'
          },
          payroll_validate_curp_leave_operative_confirm: {
            bind: 'alert-VALIDATE-CURP-accept'
          }
        }
      }
    }
  };

  const images = {
    curp: './images/caution.svg'
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: 'bg-light-grey',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      extraHeaderClass: `dark-blue-bg ${isNativeiOS ? 'ios-top-padding' : ''}`,
      headerFixed: true
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica',
      override: {
        className: '',
        extraHeaderClass: `dark-blue-bg ${isNativeiOS ? '' : ''}`
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
            bind: 'init-page',
            analytics: analytics.payrollLinkFootprint('informacion', 'recibir nomina')
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
      text: 'payroll-page-header-title',
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
        id: 'payroll-page-header-title',
        text: 'payroll-page-header-title',
        label: 'payroll-portability-close-label',
        cellsConnections: {
          out: {
            payroll_req_header_close: {
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
      className: 'u-margin-top--1-5',
      microillustration: '',
      text: 'payroll-page-panel-info-description'
    },
    propertiesSpherica: {
      alignText: 'left',
      className: '',
      microillustration: '',
      text: 'payroll-page-panel-info-description'
    }
  };
  const panelLink = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-clip-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-clip-list-spherica',
    render: 'litElement',
    properties: {
      variant: 'primary-alt'
    },
    propertiesSpherica: {
      itemList: [
        {
          id: 'btnPortability',
          title: 'payroll-page-panel-offer-change-title',
          fontType: 'title-secondary',
          variant: '',
          renderFlag: 'micro',
          microillustration: 'portability',
          description: 'payroll-page-panel-offer-change-description',
          link: 'payroll-page-panel-offer-change-button',
          level: 1
        },
        {
          id: 'btnOfferPayrollLink',
          title: 'payroll-page-panel-offer-link-title',
          fontType: 'title-secondary',
          variant: '',
          renderFlag: 'micro',
          microillustration: 'corporateBuilding',
          description: 'payroll-page-panel-offer-link-description',
          link: 'payroll-page-panel-offer-link-button',
          level: 2
        }
      ],
      cellsConnections: {
        out: {
          payroll_req_nav_portability: {
            bind: 'bbva-aggregation-clip-list-spherica-btnPortability'
          },
          payroll_validate_nav_payroll_link: {
            bind: 'bbva-aggregation-clip-list-spherica-btnOfferPayrollLink'
          }
        }
      }
    }
  };
  const panelChangePayroll = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-offer',
    familyPath: '@bbva-web-components/bbva-panel-offer',
    render: 'litElement',
    properties: {
      vertical: true,
      microillustration: 'portabilitydollar',
      contentTitle: 'payroll-page-panel-offer-change-title',
      description: 'payroll-page-panel-offer-change-description'
    }
  };
  const btnChangePayroll = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      id: 'btnPortability',
      text: 'payroll-page-panel-offer-change-button',
      variant: 'positive',
      className: 'u-display--table u-margin--center u-margin-bottom--1-5',
      cellsConnections: {
        out: {
          [getChannelName('req_nav_portability')]: {
            bind: 'click'
          }
        }
      }
    }
  };
  const panelPayrollLink = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-offer',
    familyPath: '@bbva-web-components/bbva-panel-offer',
    render: 'litElement',
    properties: {
      vertical: true,
      microillustration: 'corporatebuilding',
      contentTitle: 'payroll-page-panel-offer-link-title',
      description: 'payroll-page-panel-offer-link-description',
      cellsConnections: {
        in: {
          [getChannelName('visualize_payroll_link')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };
  const btnPayrollLink = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      id: 'btnOfferPayrollLink',
      className: 'u-display--table u-margin--center u-margin-bottom--1-5',
      variant: 'positive',
      text: 'payroll-page-panel-offer-link-button',
      cellsConnections: {
        in: {
          [getChannelName('visualize_payroll_link')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('validate_nav_payroll_link')]: {
            bind: 'click'
          }
        }
      }
    }
  };
  const payrollDm = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-payroll-account',
    familyPath: '@glomo-web-components/bbva-manager-onboarding-payroll-account',
    render: 'litElement',
    properties: {
      isNative: native,
      images,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'init'
          },
          global_login_success_indicators: {
            bind: 'detailCustomer'
          },
          global_account_set_account_for_operations: {
            bind: 'globalDataFromEntryPoint'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          [getChannelName('req_header_close')]: {
            bind: 'getModalBack'
          },
          [getChannelName('leave_operative_confirm')]: {
            bind: 'validateLeavePayroll'
          },
          [getChannelName('validate_curp_leave_operative_confirm')]: {
            bind: 'validateLeavePayroll'
          },
          [getChannelName('validate_curp_leave_operative_cancel')]: {
            bind: 'validateLeavePayroll'
          },
          [getChannelName('validate_nav_payroll_link')]: {
            bind: 'onContinueClicked'
          },
          [getChannelName('get_customer_success')]: {
            bind: 'handleGetCustomerSuccess'
          },
          [getChannelName('get_customer_error')]: {
            bind: 'handleGetCustomerError'
          },
          [getChannelName('req_nav_portability')]: {
            bind: 'validateRedirection'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'payroll-send-modal-config'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [getChannelName('exit_operative')]: {
            bind: 'navigate-to-pda-from-payroll',
            backStep: true
          },
          modal_logout_automatic: {
            bind: 'logout-payroll-operative'
          },
          [getChannelName('set_customer_id')]: {
            bind: 'send-customer-id'
          },
          [getChannelName('get_customer_request')]: {
            bind: 'request-get-customer-details'
          },
          [getChannelName('navigate_to_portability')]: {
            bind: 'navigate-payroll-portability',
            analytics: analiticsPayrollPortability.APP_ON_CLICK_START,
            link: {
              page: 'payrollPortability'
            }
          },
          show_payroll_portability_main_channel: {
            bind: 'send-product-id-payroll-portability'
          },
          navigate_to_pivot_upgrade_n2n4: {
            bind: 'navigate-payroll-e2e-page',
            link: {
              page: 'upgradeN2N4'
            }
          },
          navigate_to_proceedings: {
            bind: 'navigate-payroll-to-proceedings-page',
            link: {
              page: 'proceedings'
            }
          },
          [getChannelName('navigate_to_coming_soon_page')]: {
            bind: 'payroll-N2-coming-soon',
            link: {
              page: 'comingSoon'
            }
          },
          portabilitye2e_from_magic_log: {
            bind: 'payroll-e2e-page-params'
          },
          navigation_product_detail_to_receive_payroll: {
            bind: 'payroll-account-send-data-to-portability'
          },
          [getChannelName('send_account_info')]: {
            bind: 'send-data-to-multistep'
          },
          [getChannelName('send_customer_info')]: {
            bind: 'send-data-customer-to-multistep'
          },
          [getChannelName('nav_link_operative')]: {
            bind: 'navigation-payroll-section-to-link',
            analytics: analytics.appOnClickStart,
            link: {
              page: 'payrollLink'
            }
          },
          [getChannelName('visualize_payroll_link')]: {
            bind: 'set-payroll-hidden-property'
          },
          [getChannelName('customer_no_curp')]: {
            bind: 'customer-no-curp-analytics',
            analytics: analytics.payrollLinkFootprint('informacion', 'recibir nomina', 'validacion de curp')
          }
        },
        params: {
          clientId: 'global_client_id'
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
  const apiCustomers = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      customersApiVersion: config.globalServices.versions.customersV1,
      headers: { 'Accept-Language': 'es' },
      native,
      cellsConnections: {
        in: {
          [getChannelName('set_customer_id')]: {
            bind: 'customerId'
          },
          [getChannelName('get_customer_request')]: {
            bind: 'getCustomer'
          }
        },
        out: {
          [getChannelName('get_customer_success')]: {
            bind: 'set-customer'
          },
          [getChannelName('get_customer_error')]: {
            bind: 'error-on-get-customer'
          }
        }
      }
    }
  };
  const base = {
    hash: 'mx-payroll',
    currentPage: {
      url: '/payroll'
    },
    pages: payrollPage,
    template,
    components: [
      handleLifeCycle,
      spinner(config),
      bbvaHeader,
      titleHeaderInfo,
      payrollDm,
      apiCustomers
    ]
  };
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'CUSTOMERS-NOT-AVAILABLE',
      acceptRetry: { bind: 'onContinueClicked', component: 'bbva-manager-payroll-account' },
      cancelRetry: { bind: 'validateLeavePayroll', component: 'bbva-manager-payroll-account' }
    }
  ]);
  if (isSpherica) {
    base.components.splice(4, 0, panelLink);
    base.components.push(glomoAlertManagerSpherica);
  } else {
    base.components.push(panelChangePayroll, btnChangePayroll, panelPayrollLink, btnPayrollLink);
  }
  return sphericaPageUtils.spherize(base);
};