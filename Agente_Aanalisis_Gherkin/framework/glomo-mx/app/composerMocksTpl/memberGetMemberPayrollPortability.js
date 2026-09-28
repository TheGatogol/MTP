'use strict';

module.exports = (CONFIG) => {
  const storage = require('./common/_local-storage');
  const {
    useNames,
    createPrefixFromPageName,
    pluginDatePicker,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const pageName = 'memberGetMemberPayrollPortability';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const {
    getOnClickStartPortability,
    appSecondStep,
    appCompleted
  } = require('./analytics/_memberGetMemberPayrollPortability')();
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        loyalty
      }
    },
    native = false,
    nativeIos = false,
    nativeShell = false
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(pageName);

  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_memberGetMemberPayrollPortability: {
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
  const payrollPortability = {
    zone: 'app__main',
    tag: 'bbva-feature-member-get-member-payroll-portability',
    tagSpherica: 'bbva-feature-member-get-member-payroll-portability-spherica',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-feature-member-get-member-payroll-portability',
    familyPathSpherica: '@glomo-web-components/bbva-feature-member-get-member-payroll-portability-spherica',
    render: 'litElement',
    properties: {
      id: 'memberGetMemberPayrollPortability',
      host,
      requiredToken,
      native,
      loyaltyApiVersion: loyalty,
      originId: 'MGMPORTA',
      cellsConnections: {
        in: {
          global_storage_get_loginData_success: {
            bind: 'customerId'
          },
          dynamics_and_rewards_payroll_portability_navigation: {
            bind: 'offerId'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'calendarData'
          },
          global_nativeconnector_date_picker_launch_error: {
            bind: 'calendarDataError'
          },
          global_device_accesses_customer_id: {
            bind: 'cryptedCustomerId'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlags'
          },
          global_storage_get_loginData_error: {
            bind: 'requestClientId'
          },
          [getChannelName('init_page')]: {
            bind: 'requestClientId'
          },
          [getChannelName('close_form_payrollPortability')]: {
            bind: 'reset'
          },
          [getChannelName('back_step_form_payrollPortability')]: {
            bind: 'reset'
          }
        },
        out: {
          global_nativeconnector_datepicker_launch: {
            bind: 'launch-date-picker'
          },
          global_get_from_storage: {
            bind: 'global-get-from-storage'
          },
          [getChannelName('receipt_loaded')]: {
            bind: 'member-get-member-payroll-portability-receipt-loaded'
          },
          [getChannelName('app_on_click_start')]: {
            bind: 'member-get-member-payroll-portability-invite-other-friend-click'
          },
          [getChannelName('back_step_form_payrollPortability')]: {
            bind: 'member-get-member-payroll-portability-menu-clicked',
            backStep: true
          },
          [getChannelName('close_form_payrollPortability')]: {
            bind: 'member-get-member-payroll-portability-exit-clicked',
            backStep: true
          },
          dynamics_and_rewards_on_navigation_to_dynamic_detail: {
            bind: 'member-get-member-payroll-portability-registration-error',
            backStep: true
          }
        },
        params: {
          customerId: 'global_client_id'
        }
      }
    }
  };
  const analyticManagerMemberGetMemberPayrollPortability = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-member-get-member-payroll-portability',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-onboarding',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('receipt_loaded')]: {
            bind: 'fireAppCompleted'
          },
          [getChannelName('init_page')]: {
            bind: 'fireAppSecondStepPage'
          },
          [getChannelName('app_on_click_start')]: {
            bind: 'fireAppOnClickStart'
          }
        },
        out: {
          [getChannelName('analytics_receipt_loaded')]: {
            bind: 'analytics-app-completed-step',
            analytics: appCompleted
          },
          [getChannelName('analytics_form_loaded')]: {
            bind: 'analytics-app-second-step',
            analytics: appSecondStep
          },
          [getChannelName('analytics_app_on_click_start')]: {
            bind: 'analytics-app-on-click-start',
            analytics: getOnClickStartPortability('invitar a alguien mas')
          }
        }
      }
    }
  };
  const base = {
    hash: 'member-get-member-payroll-portability',
    currentPage: {
      url: '/member-get-member-payroll-portability'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        headerHeight: headerHeightMinimum,
        extraHeaderClass: 'dark-blue-bg',
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        disableScrollLock: true,
        animationType: 'horizontal',
        className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey'
      }
    },
    components: [
      handleLifeCycle,
      payrollPortability,
      analyticManagerMemberGetMemberPayrollPortability
    ]
  };
  if (nativeShell) {
    if (!nativeIos) {
      base.components.push(pluginDatePicker(CONFIG));
    }
  }
  storage.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
