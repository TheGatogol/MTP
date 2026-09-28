'use strict';

module.exports = (CONFIG) => {
  const {
    createPrefixFromPageName,
    getCountry,
    getLanguage,
    getLocalCurrency,
    getShortFormatDate,
    getVisibleChars,
    headerHeight,
    headerHeightMinimum,
    useNames
  } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'codiQrRequestSuccessfulScreen';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const localStorageApp = require('./common/_local-storage');
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = CONFIG;
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
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('INIT_PAGE_SUCCESS')]: {
            bind: 'init-page'
          },
          [getChannelName('INIT_PAGE_RESET')]: {
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
      cellsConnections: {
        in: {
          [getChannelName('exit_to_page')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('go_to_dashboard')]: {
            bind: 'navigation-to-dashboard',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          },
          [getChannelName('go_to_expenses')]: {
            bind: 'navigation-to-expenses-group',
            link: {
              page: 'expensesGroup',
              cleanUntil: 'expensesGroup'
            }
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'codi-request-succes-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          [getChannelName('show_main_page')]: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      text: 'codi-request-succes-header-spherica',
      variant: 'modal-initial',
      ambient: 'primary-alt',
      className: isNativeIos && 'u-padding-top--0',
      rightButtons: [
        {
          icon: 'coronita:close',
          label: 'cells-molecule-header-spherica-close',
          defaultEventIconName: 'header-main-icon-left-primary-click'
        }
      ]
    }
  };
  const managerCodiQRRequest = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-qr-request',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      formatDateSpherica: true,
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          redirection_success_to_expenses: {
            bind: 'redirectToExpenses'
          },
          [getChannelName('INIT_PAGE_SUCCESS')]: {
            bind: 'initRequestSuccessful'
          },
          [getChannelName('receipt_captured')]: {
            bind: 'shareReceipt'
          },
          [getChannelName('exit_operative')]: {
            bind: 'exitFlow'
          },
          [getChannelName('show_main_page')]: {
            bind: 'exitFlow'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'exitFlow'
          }
        },
        out: {
          global_action_launcher_share_image: {
            bind: 'codiQr-share-receipt'
          },
          [getChannelName('icon_share_config')]: {
            bind: 'set-config-row-options'
          },
          [getChannelName('navigate_to_onboarding')]: {
            bind: 'redirect-to-onboarding-codi',
            link: {
              page: 'codiBeginRegister'
            }
          },
          [getChannelName('codi_request_qr_vaucher_date')]: {
            bind: 'codi-request-qr-vaucher-date'
          },
          [getChannelName('update_qr_vaucher_date')]: {
            bind: 'codi-update-qr-vaucher-date'
          },
          codi_qr_request_successful_screen_codi_request_qr_vaucher_date_spherica: {
            bind: 'codi-request-qr-vaucher-date-spherica'
          },
          [getChannelName('exit_to_page')]: {
            bind: 'exit-to-page'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };
  const shareOperativeReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: getCountry(),
      language: getLanguage(),
      dateFormat: getShortFormatDate(),
      localCurrency: getLocalCurrency(),
      sharedReceiptStyles: {
        receiptTitle: {
          'color': '#004481',
          'font-weight': 'bold'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('INIT_PAGE_RESET')]: {
            bind: 'reset'
          },
          [getChannelName('share_receipt')]: {
            bind: 'captureReceipt'
          },
          ['codi_qr_request_steps_codi_qr_payment_successful_receive']: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('receipt_captured')]: {
            bind: 'receipt-captured'
          }
        }
      }
    },
    propertiesSpherica: {
      country: 'mxGlobal'
    }
  };
  const base = {
    hash: 'codi-qr-request-successful-screen',
    currentPage: {
      url: `/${pageName}`
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        headerFixed: true,
        headerHeight,
        iOSFixedHeader: isNativeIos
      },
      propertiesSpherica: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: '',
        headerFixed: true,
        headerHeightMinimum
      }
    },
    components: [
      lifeCycle,
      navigationHandler,
      header,
      shareOperativeReceipt,
      managerCodiQRRequest,
      cellsConnectionStatus(pageName),
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-panel-info',
        tagSpherica: 'bbva-panel-info-spherica',
        familyPath: '@bbva-web-components/bbva-panel-info',
        familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
        render: 'litElement',
        properties: {
          microillustration: 'success',
          heading: 'codi-qr-request-successful-panel-label'
        },
        propertiesSpherica: {
          className: 'u-margin--1 u-margin-bottom--0 u-margin-top--0 u-padding-top--1',
          microillustration: 'success',
          isIcon: true,
          variant: 'success',
          currencyCode: getLocalCurrency(),
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          size: '3XL',
          cellsConnections: {
            in: {
              global_payment_amount_result: {
                bind: 'amount'
              },
              global_payment_noamount_result: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-banner-image',
        familyPath: '@bbva-web-components/bbva-banner-image',
        render: 'litElement',
        properties: {
          fullwidth: true,
          cellsConnections: {
            in: {
              global_payment_image_result: {
                bind: 'imageSrc'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-divider',
        familyPath: '@bbva-web-components/bbva-divider',
        render: 'litElement',
        properties: {
          size: 'small center'
        },
        propertiesSpherica: {
          hidden: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          label: 'codi-qr-request-successful-account-label',
          variant: 'stacked-center',
          cellsConnections: {
            in: {
              global_payment_title_result: {
                bind: 'description'
              }
            }
          }
        },
        propertiesSpherica: {
          label: 'codi-qr-request-successful-account-label',
          className: 'bg-secondary100 u-mare u-margin--1 u-margin-bottom--0 u-margin-top--0 u-border-radius--top--1',
          variant: 'stacked-left'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          label: 'codi-qr-request-successful-account-number-label',
          maskChars: '•',
          variant: 'stacked-center',
          boldMask: true,
          visibleChars: getVisibleChars(CONFIG)('codi'),
          cellsConnections: {
            in: {
              global_payment_number_result: {
                bind: 'mask'
              }
            }
          }
        },
        propertiesSpherica: {
          label: ' ',
          variant: 'stacked-left',
          className: 'bg-secondary100 u-mare u-margin--1 u-margin-bottom--0 u-margin-top--0'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          label: 'codi-qr-request-successful-amount-label',
          decimalsDigits: 2,
          currencyCode: getLocalCurrency(),
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          variant: 'stacked-center',
          cellsConnections: {
            in: {
              global_payment_amount_result: {
                bind: 'amount'
              },
              global_payment_noamount_result: {
                bind: 'description'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'bg-secondary100 u-mare u-margin--1 u-margin-bottom--0 u-margin-top--0',
          variant: 'stacked-left',
          label: 'codi-qr-request-successful-amount-label-spherica',
          boldAmount: true,
          cellsConnections: {
            in: {
              global_payment_amount_result: {
                bind: 'amount'
              },
              global_payment_noamount_result: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          label: 'codi-qr-request-successful-reference-label',
          variant: 'stacked-center',
          cellsConnections: {
            in: {
              global_payment_reference_result: {
                bind: 'description'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'bg-secondary100 u-mare u-margin--1 u-margin-bottom--0 u-margin-top--0',
          variant: 'stacked-left'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          label: 'codi-qr-request-successful-concept-label',
          variant: 'stacked-center',
          cellsConnections: {
            in: {
              global_payment_concept_result: {
                bind: 'description'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'bg-secondary100 u-mare u-margin--1 u-margin-bottom--0 u-margin-top--0',
          variant: 'stacked-left'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          label: 'codi-qr-request-successful-date-expiry-label',
          description: 'codi-qr-request-successful-date-expiry-description',
          variant: 'stacked-center'
        },
        propertiesSpherica: {
          className: 'bg-secondary100 u-mare u-margin--1 u-margin-bottom--0 u-margin-top--0',
          variant: 'stacked-left'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        propertiesSpherica: {
          label: 'Fecha de operación',
          className: 'bg-secondary100 u-mare u-margin--1 u-margin-bottom--0 u-margin-top--0 u-padding-bottom--1',
          variant: 'stacked-left',
          cellsConnections: {
            in: {
              codi_qr_request_successful_screen_codi_request_qr_vaucher_date_spherica: {
                bind: 'description'
              },
              codi_qr_request_successful_screen_update_qr_vaucher_date: {
                bind: 'updated'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-date',
        tagSpherica: 'bbva-type-date',
        familyPath: '@bbva-web-components/bbva-date',
        familyPathSpherica: '@bbva-spherica-components/bbva-type-date',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-bottom--1',
          locale: getLanguage(),
          clockSuffix: 'h',
          options: {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          },
          cellsConnections: {
            in: {
              codi_qr_request_successful_screen_codi_request_qr_vaucher_date: {
                bind: 'date'
              },
              codi_qr_request_successful_screen_update_qr_vaucher_date: {
                bind: 'updated'
              }
            }
          }
        },
        propertiesSpherica: {
          hidden: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-help',
        tagSpherica: 'bbva-notification-help',
        familyPath: '@bbva-web-components/bbva-notification-help',
        familyPathSpherica: '@bbva-spherica-components/bbva-notification-help',
        render: 'litElement',
        properties: {
          className: 'u-margin--1',
          icon: 'coronita:info',
          text: 'codi-qr-request-successful-nfc-label',
          iconSize: 16
        },
        propertiesSpherica: {
          icon: 'spherica:info',
          className: 'bg-secondary100 u-mare u-margin--1 u-margin-bottom--0 u-margin-top--0 u-border-radius--bottom--1 u-padding-left--1 u-padding-bottom--1 u-padding-right--1'
        }
      },
      {
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
          message: 'codi-qr-request-successful-share-label'
        },
        propertiesSpherica: {
          icon: '',
          messageTitle: 'codi-qr-request-successful-share-label-1',
          message: 'codi-qr-request-successful-share-label-2',
          bookTitle: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-button-row',
        tagSpherica: 'bbva-button-row-spherica',
        familyPath: '@bbva-spherica-components/bbva-button-row',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          iconSize: 24,
          cellsConnections: {
            in: {
              [getChannelName('icon_share_config')]: {
                bind: 'options'
              }
            },
            out: {
              [getChannelName('share_receipt')]: {
                bind: 'click'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-margin-bottom--1'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-button-default',
        familyPath: '@bbva-web-components/bbva-button-default',
        render: 'litElement',
        properties: {
          hidden: isSpherica,
          text: 'codi-request-qr-modal-alert-out-flow-accept-button',
          className: 'u-display--table u-margin--center u-margin-top--1-5 u-margin-bottom--1-5',
          cellsConnections: {
            out: {
              [getChannelName('exit_operative')]: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
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
              codiQrRequestSuccessfulScreen_INIT_PAGE_SUCCESS: {
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
              connection_status_codiQrRequestSuccessfulScreen_online: {
                bind: 'getSendLogLostInternet'
              },
              connection_status_codiQrRequestSuccessfulScreen_offline: {
                bind: 'saveLostInternetConnection'
              },
              codiQrRequestSuccessfulScreen_post_unified_log_event_success: {
                bind: 'responseUnifiedLogSuccess'
              },
              codiQrRequestSuccessfulScreen_post_unified_log_event_error: {
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
              codiQrRequestSuccessfulScreen_unified_log_event_api_version: {
                bind: 'bbva-manager-codi-unified-log-send-version-post'
              },
              codiQrRequestSuccessfulScreen_unified_log_event_post: {
                bind: 'unified-log-event-post'
              }
            }
          }
        }
      },
      {
        tag: 'bbva-dataprovider-banxico',
        familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
        render: 'litElement',
        zone: 'app__transactional',
        type: 'DM',
        properties: {
          host,
          native,
          requiredToken,
          apiVersion: banxicoApi,
          cellsConnections: {
            in: {
              codiQrRequestSuccessfulScreen_unified_log_event_api_version: {
                bind: 'apiVersionUnifedLogEvent'
              },
              codiQrRequestSuccessfulScreen_unified_log_event_post: {
                bind: 'unifiedLogEventPost'
              }
            },
            out: {
              codiQrRequestSuccessfulScreen_post_unified_log_event_success: {
                bind: 'post-unified-log-event-success'
              },
              codiQrRequestSuccessfulScreen_post_unified_log_event_error: {
                bind: 'post-unified-log-event-error'
              }
            }
          }
        }
      }
    ]
  };
  localStorageApp.addOutStorageChannels(base.components, ['enrollment_codi_key', 'lost_internet_log', 'unified_log_timeout_session_key'], CONFIG);

  return sphericaPageUtils.spherize(base);
};
