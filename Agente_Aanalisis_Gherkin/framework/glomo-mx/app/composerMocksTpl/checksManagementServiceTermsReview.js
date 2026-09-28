'use strict';

module.exports = CONFIG => {
  // eslint-disable-next-line no-unused-vars
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'checksManagementServiceTermsReview';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const ANALYTICS_CHECKS_MANAGEMENT = require('./analytics/_checksManagement')({});

  const base = {
    hash: 'checks-management-service-terms-review',
    currentPage: {
      url: '/checks-management/service-terms/review',
      params: []
    },

    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        hasFooter: true,
        headerFixed: true,
        footerFixed: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            navigation_checks_management_service_terms_review_to: {
              bind: 'resetLayerScroll'
            },
            checks_management_service_terms_review_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksManagementServiceTermsReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksManagementServiceTermsReview: {
                bind: 'init'
              }
            },
            out: {
              checks_management_service_terms_review_init_page: {
                bind: 'init-page'
              },
              checks_management_service_terms_review_reset_page: {
                bind: 'reset'
              },
              checks_management_checks_management_review_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementFootprint('ckecksManagement', 'liberar cheque', 'pagina exitosa')
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
          cellsConnections: {
            in: {
              checks_management_service_terms_review_title: {
                bind: 'titleName'
              }
            },
            out: {
              navigation_checks_management_service_terms_review_to_continue: {
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
            in: {
              checks_management_service_terms_review_title: {
                bind: 'titleName'
              }
            },
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
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        type: 'UI',
        properties: {
          language: 'ES',
          headerTitle: 'glomo-checks-management-service-terms-review-title',
          page: 'checksManagementServiceTermsReview',
          formatDate: 'DD MMMM YYYY, HH:mm [h]',
          disableButtons: true,
          operationsListLayout: 'review',
          withoutHead: true,
          hideDivider: true,
          cellsConnections: {
            in: {
              checks_management_service_terms_review_reset_page: {
                bind: 'reset'
              },
              navigate_to_checks_management_service_terms_review: {
                bind: 'result'
              }
            },
            out: {
              ch_budgets_create_review_confirm_buttons_config: {
                bind: 'set-confirm-buttons-config'
              }
            }
          }
        },
        propertiesSpherica: {
          withSuccessHead: true,
          withoutHead: false,
          operationListClass: 'centered-items',
          disableButtons: true
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        properties: {
          className: 'no-shadow',
          cellsConnections: {
            in: {
              checks_management_service_terms_review_config_buttons: {
                bind: 'config'
              }
            },
            out: {
              navigation_checks_management_service_terms_review_to_continue: {
                bind: 'cells-confirm-buttons-click-primary',
                backStep: true
              },
              navigation_checks_management_service_terms_review_to_checks_management: {
                bind: 'cells-confirm-buttons-click-secondary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-check-section-dm-mx',
        familyPath: 'glomo-check-section-dm',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              checks_management_service_terms_review_reset_page: {
                bind: 'reset'
              },
              account_get_operations_product: {
                bind: 'setAccount'
              },
              navigation_checks_management_service_terms_review_to_checks_management: {
                bind: 'goToChecksManagement'
              }
            },
            out: {
              global_checks_section_navigate_to_checks_management: {
                bind: 'checks-section-navigate-to-checks-management',
                link: {
                  page: 'checksManagement'
                }
              }
            }
          }
        }
      }
    ]
  };

  return sphericaPageUtils.spherize(base);
};
