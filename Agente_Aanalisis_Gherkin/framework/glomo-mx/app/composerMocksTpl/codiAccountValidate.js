'use strict';

module.exports = CONFIG => {
  const pageName = 'codiAccountValidate';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_codiOnboarding')(CONFIG);
  const { useNames, createPrefixFromPageName, getAlternativeFormatDate } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const localStorageApp = require('./common/_local-storage');
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const base = {
    hash: 'codi-account-validate',
    currentPage: {
      url: '/codi-account-validate'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        drawerWidth: '100%',
        fixOffsetScroll: 0,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        preventScrollWithOverlay: true,
        cellsConnections: {
          in: {
            [getChannelName('_INIT_PAGE')]: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [ {
      zone: 'app__main',
      tag: 'cells-handle-life-cycle',
      type: 'DM',
      properties: {
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
            [getChannelName('_INIT_PAGE')]: {
              bind: 'init-page'
            },
            codiAccountValidate_GET_ENROLLMENT_DATA: {
              bind: 'init-page'
            },
            global_enable_menu_swipe: {
              bind: 'swipe-menu-enabled',
              'forward-to-native': true
            }
          }
        }
      }
    } ]
  };
  const headerMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'codi-refactor-enrollment-page-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          navigation_codi_account_validation_to_back: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'bbva-header-main-spherica',
      type: 'modal',
      override: {
        id: 'codi-refactor-enrollment-page-header',
        text: 'codi-refactor-enrollment-page-header',
        cellsConnections: {
          out: {
            navigate_to_main: {
              bind: 'header-main-close-icon-click',
              link: {
                page: 'dashboard'
              }
            }
          }
        }
      }
    })
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          codi_refactor_back_to_dashboard: {
            bind: 'goBack',
            previousState: false
          }
        },
        out: {
          codi_refactor_back_forward_dashboard: {
            bind: 'header-right-button',
            backStep: true
          }
        }
      }
    }
  };
  const successfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      withoutHead: true,
      formatDate: getAlternativeFormatDate(),
      cellsConnections: {
        in: {
          codi_open_account_validation_modal: {
            bind: 'result'
          }
        },
        out: {
          navigate_to_main: {
            bind: 'go-to-next',
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      type: 'detail',
      withSuccessHead: true,
      withoutHead: false,
      status: 'pending',
      className: 'codi-validate',
      disableButtons: true
    }
  };
  const managerCodiOnboarding = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-onboarding',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      isSpherica,
      cellsConnections: {
        in: {
          [getChannelName('_CLIENT_PHONE')]: {
            bind: 'client-phone'
          },
          native_user_id: {
            bind: 'numberPhone'
          }
        },
        out: {
          [getChannelName('analytic_otp_id')]: {
            bind: 'analytic-onboarding-otp-id'
          },
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            navigate_to_main: {
              bind: 'exitFlow'
            }
          }
        }
      }
    }
  };
  const managerAnalytic = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-codi',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          analytic_onboarding_idotp: {
            bind: 'setIdOperation'
          }
        },
        out: {
          [getChannelName('analytic_id_operation_onboarding')]: {
            bind: 'analytic-id-operation-onboarding',
            analytics: analytics.pageCompleted
          }
        }
      }
    }
  };

  const managerCodiLog = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-unified-log',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          native_user_id: {
            bind: 'numberPhone'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          codiAccountValidate_GET_ENROLLMENT_DATA: {
            bind: 'getEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_error: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_lost_internet_log_success: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_lost_internet_log_error: {
            bind: 'saveGetConnectionLog'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
          },
          global_storage_get_unified_log_timeout_session_key_success: {
            bind: 'setTimeoutSessionVerified'
          },
          global_storage_get_unified_log_timeout_session_key_error: {
            bind: 'setTimeoutSessionVerified'
          },
          codi_session_timeout_expired: {
            bind: 'saveInLocalstorageTimeout'
          },
          navigate_to_main: {
            bind: 'codiSectionLeaveLog'
          },
          navigation_codi_account_validation_to_back: {
            bind: 'codiSectionLeaveLog'
          },
          connection_status_codiAccountValidate_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiAccountValidate_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiAccountValidate_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiAccountValidate_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiAccountValidate_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiAccountValidate_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const dataProviderCodiBanxico = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: banxicoApi,
      cellsConnections: {
        in: {
          codiAccountValidate_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiAccountValidate_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiAccountValidate_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiAccountValidate_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };

  base.components.push(
    managerCodiOnboarding,
    managerAnalytic,
    headerMain,
    navigationHandler,
    managerCodiLog,
    dataProviderCodiBanxico,
    cellsConnectionStatus(pageName),
    successfulResponse
  );
  localStorageApp.addOutStorageChannels(base.components, ['enrollment_codi_key', 'lost_internet_log', 'unified_log_timeout_session_key'], CONFIG);
  return sphericaPageUtils.spherize(base);
};
