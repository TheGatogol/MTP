'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('checksSection');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  // eslint-disable-next-line no-unused-vars
  const localStorageApp = require('./common/_local-storage');
  const pageName = 'checksSection';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const ANALYTICS_CHECKS_SECTION = require('./analytics/_checksSection')({});
  const ANALYTICS_CHECKS_DEPOSIT = require('./analytics/_checksDeposit')('checksDeposits');

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          global_checks_management_service_terms_open_modal_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_check_section_open_modal_terms_accept: {
            bind: 'alert-CHECK-SECTION-TERMS-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: 'checks-section',
    currentPage: {
      url: '/checks-section'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding dark-blue-bg' : '',
        extraHeaderClass: 'dark-blue-bg',
        hasFooter: false,
        disableScrollLock: true,
        disableEdgeSwipe: true
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        disableScrollLock: false,
        rightDrawer: true,
        className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksSection',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksSection: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              checks_section_reset_page: {
                bind: 'reset'
              },
              checks_section_checks_section_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksSection', 'cheques', 'operaciones con cheques')
              },
              global_request_feature_flag: {
                bind: 'init-page'
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
          titleName: 'glomo-checks-section-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_checks_section_to_page: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back-mini',
          leftIconText: 'cells-molecule-header-spherica-back',
          className: 'header--core-grey header',
          variant: 'primary-alt'
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-check-section-dm-mx',
        familyPath: 'glomo-check-section-dm',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          native: CONFIG.native || false,
          cellsConnections: {
            in: {
              navigation_checks_section_to_page: {
                bind: 'reset'
              },
              account_get_operations_product: {
                bind: 'getAccountInfo'
              },
              navigation_product_detail_to_checks_section: {
                bind: 'getAccountInfo'
              },
              glomo_check_section_open_terms_conditions: {
                bind: 'getChecksSectionServiceTermsReadFromLocalStorage'
              },
              global_storage_get_check_section_service_terms_read_success: {
                bind: 'parseGetChecksSectionServiceTermsReadFromLocalStorageSuccess'
              },
              global_storage_get_check_section_service_terms_read_error: {
                bind: 'parseGetChecksSectionServiceTermsReadFromLocalStorageError'
              },
              global_check_section_open_modal_terms_accept: {
                bind: 'acceptTermsConditions'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              glomo_check_section_open_checks_management: {
                bind: 'requestOpenCheckManagement'
              }
            },
            out: {
              global_checks_management_service_terms_open_modal: {
                bind: 'open-modal',
                analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksDeposits', 'depositar cheque', 'cobro digital')
              },
              global_get_from_storage: {
                bind: 'get-from-local-storage'
              },
              global_set_in_storage: {
                bind: 'set-in-local-storage'
              },
              checks_section_hide_deposit_option: {
                bind: 'glomo-checks-section-hide-deposit-option'
              },
              checks_section_hide_management_option: {
                bind: 'glomo-checks-section-hide-management-option'
              },
              checks_section_class_deposit_option: {
                bind: 'glomo-checks-section-class-deposit-option'
              },
              navigate_to_check_deposits_list: {
                bind: 'go-to-check-deposits-list',
                link: {
                  page: 'checksDepositsList'
                }
              },
              checks_section_options: {
                bind: 'checks-sections-options'
              },
              global_checks_management_service_terms_config_buttons: {
                bind: 'navigate-check-section-management',
                link: {
                  page: 'checksManagementServiceTerms'
                }
              },
              global_checks_section_navigate_to_checks_management: {
                bind: 'checks-section-navigate-to-checks-management',
                link: {
                  page: 'checksManagementList'
                }
              },
              global_alert_checks_management_get_accounts_error_successful: {
                bind: 'checks-section-get-indicator-account-success'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-modal-attempts-account'
              },
              checks_section_leave_page: {
                bind: 'glomo-leave-check-section',
                backStep: true
              },
              global_retry_error: {
                bind: 'retry-error'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica: isSpherica,
          newCellsConnections: {
            add: {
              out: {
                'global_alert_manager_open_with_settings_spherica': {
                  bind: 'open-modal-attempts-account'
                },
                'global_checks_management_service_terms_open_modal_spherica': {
                  bind: 'open-modal',
                  analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksDeposits', 'depositar cheque', 'cobro digital')
                }
              }
            },
            remove: {
              out: [
                'global_alert_manager_open_with_settings',
                'global_checks_management_service_terms_open_modal'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-link-list-wrapper',
        tagSpherica: 'cells-link-list-wrapper-spherica',
        type: 'UI',
        properties: {
          light: true,
          cellsConnections: {
            in: {
              checks_section_options: {
                bind: 'listData'
              }
            },
            out: {
              glomo_check_section_open_terms_conditions: {
                bind: 'glomo-checks-deposits-access-selected'
              },
              glomo_check_section_open_checks_management: {
                bind: 'glomo-checks-management-access-selected'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-checks-deposits-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-checks-deposits-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          config: {
            steps: {
              1: 'app-page-visit',
              2: 'app-step-2',
              3: 'app-step-3'
            }
          },
          cellsConnections: {
            in: {
              checks_deposits_set_selected_product: {
                bind: 'account'
              },
              navigate_to_check_deposits_list: {
                bind: 'sendAnalyticOnClickStart'
              }
            },
            out: {
              checks_deposits_analytics_on_click_start: {
                bind: 'analytics-on-click-start',
                analytics: ANALYTICS_CHECKS_DEPOSIT.appOnclickStart('operaciones con cheques'),
                featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
              }
            }
          }
        }
      }
    ]
  };

  addRetryErrors(base)([
    {
      id: 'checks-management-get-accounts-error',
      acceptRetry: { bind: 'requestOpenCheckManagement', component: 'glomo-check-section-dm-mx' }
    },
    {
      id: 'error-on-get-attempts-validation-account',
      acceptRetry: { bind: 'goToCheckDepositsList', component: 'glomo-check-section-dm-mx'},
      acceptCallForHelp: { bind: 'leavePage', component: 'glomo-check-section-dm-mx'}
    }
  ]);

  addCommonErrors(base.components)();

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  localStorageApp.addOutStorageChannels(base.components, [
    'check_section_service_terms_read'
  ], CONFIG);


  return sphericaPageUtils.spherize(base);
};
