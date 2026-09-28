'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const pageName = 'aboutPage';
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const detailDownloadParams = utils.detailDownloadParams;
  const SPINNER = utils.createSpinner(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const openDocument = utils.glomoOpenDocument(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();

  detailDownloadParams.body = {
    'documentTemplate': {
      'id': 'GMDBMTC003',
      'templateType': {
        'id': 'PDF'
      }
    }
  };
  const configButtons = [
    {
      icon: 'coronita:info',
      titleText: 'glomo-about-list-about',
      navigate: true,
      page: 'aboutInfo'
    },
    {
      icon: 'coronita:document',
      titleText: 'glomo-about-list-about-terms-and-conditions',
      navigate: false,
      page: 'termsAndConditions'
    }
  ];

  const base = {
    hash: 'mx-about-page',
    currentPage: {
      url: '/about-page',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            about_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
        }
      },
      propertiesSpherica: {
        className: 'bg-light-grey ios-top-padding',
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: ''
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'aboutPage',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_aboutPage: {
                bind: 'init'
              }
            },
            out: {
              about_reset_page: {
                bind: 'reset'
              },
              about_init_page: {
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
          titleName: 'glomo-about-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_about_to_page: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          titleName: 'glomo-about-header-title-spherica',
          className: 'header--core-grey',
          variant: 'primary-alt',
          leftIconText: 'cells-molecule-header-spherica-back',
          leftIcon: 'coronita:back'
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-dashboard',
          currentPage: 'aboutPage',
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'handleNativeBackButton'
              },
              mobile_manage_operation_terms_conditions_result: {
                bind: 'enableNativeBackNavigation'
              },
              about_disable_native_back_navigation: {
                bind: 'disableNativeBackNavigation'
              },
              about_to_continue: {
                bind: 'navigate'
              },
              about_back_request: {
                bind: 'goBack'
              },
              navigation_about_to_page: {
                bind: 'navigateToPage',
                link: {
                  page: 'aboutInfo'
                }
              }
            },
            out: {
              navigation_aboutPage_to_aboutInfo: {
                bind: 'navigation-to-aboutInfo'
              },
              navigation_about_to_previous_page: {
                bind: 'navigate-to-previous-page',
                backStep: true
              },
              GLOBAL_NAVIGATION_TO_APPLICATIONFEEDBACK: {
                bind: 'navigation-to-applicationFeedback',
                link: {
                  page: 'applicationFeedback'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-button-list',
        tagSpherica: 'glomo-button-list-spherica',
        familyPath: 'glomo-button-list',
        familyPathSpherica: 'glomo-button-list-spherica',
        properties: {
          buttons: configButtons,
          cellsConnections: {
            in: {},
            out: {
              about_item_clicked: {
                bind: 'button-clicked'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'gap-m button-list-padding'
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'cells-alert-manager',
        tagSpherica: 'cells-alert-manager-spherica',
        properties: {
          className: 'full-width centered',
          cellsConnections: {
            in: {
              show_toast_success_applicationFeedback: {
                bind: 'showToast'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-about-info-dm',
        tag: 'glomo-about-info-dm-mx',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          spinnerDuration: 0,
          fullModalView: true,
          paramsUrl: true,
          detailDownloadConfig: detailDownloadParams,
          cellsConnections: {
            in: {
              about_init_page: {
                bind: 'reset'
              },
              about_get_terms_conditions: {
                bind: 'getTermsAndConditions'
              },
              mobile_manage_operation_terms_conditions_result: {
                bind: 'getTermsAndConditionsResult'
              },
              about_item_clicked: {
                bind: 'manageAbout'
              },
              global_open_document_url_success: {
                bind: 'closeDocument'
              },
              global_open_document_url_error: {
                bind: 'closeDocument'
              }
            },
            out: {
              mobile_manage_about_page_operations: {
                bind: 'glomo-about-get-terms-and-conditions-pdf',
                'forward-to-native': true
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_terms_and_conditions_error_modal: {
                bind: 'PDF-GENERATION-ERROR-DEFAULT'
              },
              global_open_document_url: {
                bind: 'native-download-receipt'
              },
              navigation_about_to_page: {
                bind: 'navigate-to-about',
                link: {
                  page: 'aboutInfo'
                }
              },
              global_retry_error: {
                bind: 'glomo-retry-error-terms-and-conditions'
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
                  bind: 'PDF-GENERATION-ERROR-DEFAULT'
                }
              }
            },
            remove: {
              out: [
                'global_terms_and_conditions_error_modal'
              ]
            }
          }
        }
      }
    ]
  };

  if (CONFIG.native) {
    base.components.push(openDocument);
  }
  addRetryErrors(base)([
    {
      id: 'about-terms-conditions-error',
      acceptRetry: { bind: 'leaveThePage', component: 'glomo-about-info-dm-mx' }
    }
  ]);

  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
