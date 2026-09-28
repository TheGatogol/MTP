'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('checksManagementServiceTerms');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS_CHECKS_SECTION = require('./analytics/_checksSection')({});
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pageName = 'checksManagementServiceTermsReview';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const localStorageApp = require('./common/_local-storage');

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        out: {
          global_checks_management_service_terms_open_modal_spherica: {
            bind: 'openWithSettings'
          },
          checks_management_service_terms_reject_success_spherica: {
            bind: 'openWithSettings'
          },
          checks_management_service_terms_activation_success_spherica: {
            bind: 'openWithSettings'
          },
          global_checks_management_service_terms_reject_backdrop_removed: {
            bind: 'alert-check-section-modal-terms-reject-accept'
          },
          global_glomo_alert_manager_modal_closed_check_management_service_terms_reject: {
            bind: 'alert-check-section-modal-terms-reject-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: 'checks-management-service-terms',
    currentPage: {
      url: '/checks-management/service-terms',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding bbva-core-blue' : '',
        extraHeaderClass: 'bbva-core-blue',
        hasFooter: false,
        animationType: 'verticalUp',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksManagementServiceTerms',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksManagementServiceTerms: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              checks_management_service_terms_reset_page: {
                bind: 'reset'
              },
              checks_management_service_terms_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'cheques', 'activar proteccion', 'detalle')
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
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-checks-management-service-terms-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_checks_management_service_terms_to_page: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          rightIcon: 'coronita:close',
          className: 'header--white',
          rightIconText: 'cells-molecule-header-spherica-close',
          cellsConnections: {
            out: {
              navigation_checks_management_service_terms_review_to_continue: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-text-description',
        tagSpherica: 'cells-text-description-spherica',
        type: 'UI',
        properties: {
          title: 'glomo-checks-management-service-terms-title',
          mainDescription: 'glomo-checks-management-service-terms-sub-title',
          decoratedImage: './images/checkbook.svg',
          className: 'text-centered margin-top-xl',
          cellsConnections: {
            in: {},
            out: {}
          }
        },
        propertiesSpherica: {
          className: 'checks-section',
          sizeImage: 'image--xl',
          decoratedImage: './images/spherica/checksSection/checkbook-spherica.svg'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-lists',
        tagSpherica: 'cells-lists-spherica',
        type: 'UI',
        properties: {
          className: 'reset-padding-top',
          list: [
            'glomo-checks-management-service-terms-description-1',
            'glomo-checks-management-service-terms-description-2',
            'glomo-checks-management-service-terms-description-3'
          ],
          cellsConnections: {
            in: {},
            out: {}
          }
        },
        propertiesSpherica: {
          className: 'padding-clean'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        tagSpherica: 'cells-icon-message-spherica',
        properties: {
          type: 'warning',
          icon: 'coronita:info',
          iconSize: '24',
          message: 'glomo-checks-management-service-terms-info-checks',
          className: 'in-page bottom-separation',
          cellsConnections: {
            in: {},
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        tagSpherica: 'cells-icon-message-spherica',
        properties: {
          type: 'info',
          icon: 'coronita:info',
          iconSize: '24',
          message: 'glomo-checks-management-service-terms-info',
          className: 'in-page',
          cellsConnections: {
            in: {},
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-text-description',
        tagSpherica: 'cells-text-description-spherica',
        type: 'UI',
        properties: {
          title: 'glomo-checks-management-service-terms-title-2',
          mainDescription: 'glomo-checks-management-service-terms-paragraphs',
          cellsConnections: {
            in: {},
            out: {}
          }
        },
        propertiesSpherica: {
          title: 'glomo-checks-management-service-terms-title-2-spherica'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        properties: {
          className: 'no-shadow',
          unfixed: true,
          cellsConnections: {
            in: {
              checks_management_service_terms_config_buttons: {
                bind: 'config'
              }
            },
            out: {
              checks_management_service_terms_activate: {
                bind: 'cells-confirm-buttons-click-primary',
                analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'activar proteccion', 'otp')
              },
              checks_management_service_terms_open_reject_modal: {
                bind: 'cells-confirm-buttons-click-secondary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-checks-management-dm',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              navigation_product_detail_to_checks_section: {
                bind: 'getAccountInfo'
              },
              checks_management_service_terms_init_page: {
                bind: 'getChecksManagementProtectionDeclinedFromLocalStorage'
              },
              checks_management_service_terms_open_reject_modal: {
                bind: 'cancelServiceTerms'
              },
              checks_management_service_terms_activate: {
                bind: 'postAccountTermsAccept'
              },
              global_checks_management_service_terms_reject_backdrop_removed: {
                bind: 'postAccountTermsDecline'
              },
              account_get_operations_product: {
                bind: 'getAccountInfo'
              },
              dashboard_customer_email: {
                bind: 'customerContact'
              },
              global_storage_get_checks_management_protection_declined_success: {
                bind: 'parseGetChecksManagementProtectionDeclinedFromLocalStorageSuccess'
              },
              global_storage_get_checks_management_protection_declined_error: {
                bind: 'parseGetChecksManagementProtectionDeclinedFromLocalStorageError'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              }
            },
            out: {
              global_checks_management_service_terms_open_modal: {
                bind: 'open-modal',
                analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'cheques', 'declinar proteccion', 'detalle')
              },
              checks_management_leave_the_page: {
                bind: 'leave-the-page',
                backStep: true
              },
              navigate_to_checks_management_service_terms_review: {
                bind: 'patch-success-indicator-account',
                link: {
                  page: 'checksManagementServiceTermsReview'
                }
              },
              global_set_in_storage: {
                bind: 'set-in-local-storage'
              },
              global_get_from_storage: {
                bind: 'get-from-local-storage'
              },
              checks_management_service_terms_review_title: {
                bind: 'review-header-title'
              },
              checks_management_service_terms_review_config_buttons: {
                bind: 'review-config-buttons'
              },
              checks_management_service_terms_reject_success: {
                bind: 'checks-management-service-terms-reject-success',
                analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'declinar proteccion', 'pagina exitosa')
              },
              checks_management_service_terms_activation_success: {
                bind: 'checks-management-service-terms-activation-success',
                analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'activar proteccion', 'pagina exitosa')
              },
              checks_management_service_terms_config_buttons: {
                bind: 'checks-management-service-terms-config-buttons'
              },
              global_retry_error: {
                bind: 'retry-error-checks'
              },
              global_alert_checks_section_operative_error_reject_successful: {
                bind: 'patch-success-indicator-account'
              },
              global_alert_checks_section_operative_error_accept_successful: {
                bind: 'patch-success-indicator-account'
              }
            },
            params: {
              customerId: 'global_user_id'
            }
          }
        },
        propertiesSpherica: {
          isSpherica: isSpherica,
          newCellsConnections: {
            add: {
              out: {
                'checks_management_service_terms_reject_success_spherica': {
                  bind: 'checks-management-service-terms-reject-success',
                  analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'declinar proteccion', 'pagina exitosa')
                },
                'checks_management_service_terms_activation_success_spherica': {
                  bind: 'checks-management-service-terms-activation-success',
                  analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'activar proteccion', 'pagina exitosa')
                },
                'global_checks_management_service_terms_open_modal_spherica': {
                  bind: 'open-modal',
                  analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'cheques', 'declinar proteccion', 'detalle')
                }
              }
            },
            remove: {
              out: [
                'global_checks_management_service_terms_open_modal',
                'checks_management_service_terms_activation_success',
                'checks_management_service_terms_reject_success'
              ]
            }
          }
        }
      }
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('glomo-checks-management-dm', 'checksManagement',
    ['success-post-accounts-account-terms', 'error-on-post-accounts-account-terms',
      'patch-success-indicator-account', 'error-on-patch-account-indicators-indicator',
      'close-sign-modal']);

  const connectionsOut = utils.connectionsOut(base);
  connectionsOut('cells-sign-operation-dm-mx').checks_management_sign_close_modal = {
    bind: 'signature-cancel-checksManagement',
    analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'activar proteccion', 'detalle')
  };

  // Add retry errors
  addRetryErrors(base)([
    {
      id: 'checks-section-operative-error-reject',
      acceptRetry: { bind: 'postAccountTermsDecline', component: 'glomo-checks-management-dm' },
      cancelRetry: { bind: 'leaveThePage', component: 'glomo-checks-management-dm' },
      acceptCallForHelp: { bind: 'leaveThePage', component: 'glomo-checks-management-dm' }
    },
    {
      id: 'checks-section-operative-error-accept',
      acceptRetry: { bind: 'postAccountTermsAccept', component: 'glomo-checks-management-dm' },
      cancelRetry: { bind: 'leaveThePage', component: 'glomo-checks-management-dm' },
      acceptCallForHelp: { bind: 'leaveThePage', component: 'glomo-checks-management-dm' }
    }
  ]);

  addCommonErrors(base.components)();

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  localStorageApp.addOutStorageChannels(base.components, [
    'checks_management_protection_declined'
  ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
