'use strict';

module.exports = CONFIG => {
  const {
    createPrefixFromPageName,
    createSpinner,
    getAlternativeFormatDate,
    getLanguage,
    getLocalCurrency,
    getVisibleChars,
    useNames
  } = require('./common/helpers/_utils');
  const { merge, bbvaQrPluginConfigs } = require('./common/helpers');
  const pageName = 'cardlessWithdrawalReview';
  const operativePrefix = createPrefixFromPageName(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const [getChannelName, getLocaleName] = useNames(operativePrefix);
  const getGlobalName = _name => `global_${getChannelName(_name)}`.toLowerCase();
  const getLocalePrefix = _name => `glomo-${getLocaleName(_name)}`;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const _localStorage = require('./common/_local-storage');
  const native = CONFIG.native || false;
  const isNativeiOS = CONFIG.nativeIos || false;
  const {
    APP_COMPLETED,
    INTERNAL_LINK_ATMS,
    INTERNAL_LINK_SHARE,
    PAGE_VIEW_READ_QR,
    PAGE_VIEW_READ_QR_SUCCESSFULL,
    PAGE_VIEW_READ_QR_ERROR
  } = require('./analytics/_cardlessWithdrawal')('');
  const analyticsCommerce = require('./analytics/_cardlessWithdrawalCommerce')(CONFIG);
  const customInitEvents = {
    ['init-cardless-withdrawal-review']: true,
    ['swipe-menu-enabled']: false
  };
  const qrPluginConfig = merge(bbvaQrPluginConfigs.commons, {
    android: {
      name: '',
      id: 'cardlessWithdrawalReview',
      customViewConfig: {
        options: {
          title: 'Retiro sin tarjeta',
          firstFooterLabel: 'Escanea el código QR que aparezca en la pantalla del cajero automático.'
        }
      }
    },
    ios: {
      customViewName: '',
      customViewConfig: {
        options: {
          title: 'Retiro sin tarjeta',
          firstFooterLabel: 'Escanea el código QR que aparezca en la pantalla del cajero automático.'
        }
      }
    }
  });

  const base = {
    hash: 'cardless-withdrawal-review',
    currentPage: {
      url: '/cardless-withdrawal/review'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        headerFixed: true,
        disableEdgeSwipe: true,
        animationType: 'verticalUp',
        extraHeaderClass: isSpherica ? '' : 'darker-green-bg',
        className: isNativeiOS ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            [getGlobalName('init_page')]: {
              bind: 'recalculateHeader'
            },
            [getGlobalName('cells_scroll_zone')]: {
              bind: 'scrollItemIntoView'
            },
            [getGlobalName('reset_scroll')]: {
              bind: 'resetLayerScroll'
            },
            [getGlobalName('enable_cardless_withdrawal')]: {
              bind: 'showConfirm'
            },
            [getGlobalName('modal_opened')]: {
              bind: 'setModalActive'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          },
          out: {
            [getGlobalName('scroll_complete')]: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      }
    },
    components: [
      createSpinner(CONFIG)
    ]
  };
  const cellsMoleculeHeader = {
    zone: 'app__header',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    type: 'UI',
    properties: {
      className: sphericaPageUtils ? '' : 'header--dark-success',
      rightIcon: 'coronita:close',
      titleName: getLocalePrefix('header-title'),
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'focusOnTitle'
          }
        },
        out: {
          [getGlobalName('exit_request')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-molecule-header-spherica',
      type: 'modal',
      variant: 'primary',
      rightIconText: 'cells-molecule-header-spherica-close'
    })
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: getLocalePrefix('exit'),
      continue: 'cardlessWithdrawalCommerce',
      cellsConnections: {
        in: {
          [getGlobalName('exit')]: {
            bind: 'goBack'
          },
          [getGlobalName('exit_request')]: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          },
          [getGlobalName('navigate_to_commerce')]: {
            bind: 'navigate'
          }
        },
        out: {
          [getGlobalName('show_feedback')]: {
            bind: getLocalePrefix('exit')
          },
          [getGlobalName('go_to_commerce')]: {
            bind: 'navigation-to-cardlessWithdrawalCommerce',
            link: {
              page: 'cardlessWithdrawalCommerce'
            }
          }
        }
      }
    }
  };
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeiOS ? 'ios-top-padding' : '',
      iOSFixedHeader: true,
      cellsConnections: {
        in: {
          [getGlobalName('on_boarding_qr_modal_spherica')]: {
            bind: 'openWithSettings'
          },
          [getGlobalName('open_help_modal_spherica')]: {
            bind: 'openWithSettings'
          },
          [getGlobalName('qr_error_modal_spherica')]: {
            bind: 'openWithSettings'
          },
          [getGlobalName('qr_success_modal_spherica')]: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_glomo_alert_manager_modal_opened: {
            bind: 'glomo-alert-modal-opened'
          }
        }
      }
    }
  };
  const cellsHandleLifeCycle = {
    zone: 'app__header',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          },
          [getGlobalName('exit')]: {
            bind: 'reset'
          },
          [getGlobalName('exit_request')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
            bind: 'init-page'
          },
          [getGlobalName('reset')]: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const cellsSuccessfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      visibleChars: getVisibleChars(CONFIG)('account'),
      formatDate: getAlternativeFormatDate(),
      withOutAvatar: true,
      type: 'cardless-withdrawal',
      additionalActionEvents: {
        atms: 'search-nearbys-atms'
      },
      className: 'common-transfer-data',
      cellsConnections: {
        in: {
          [getGlobalName('set_successfull_data')]: {
            bind: 'result'
          }
        },
        out: {
          [getGlobalName('exit_request')]: {
            bind: 'go-back'
          },
          [getGlobalName('request_qr')]: {
            bind: 'validate-qr-tapped',
            analytics: analyticsCommerce.internalLinkQr
          },
          [getGlobalName('show_help_modal')]: {
            bind: 'open-icon-help-modal-withouthead'
          },
          [getGlobalName('share_receipt_capture')]: {
            bind: 'share-receipt-capture',
            analytics: INTERNAL_LINK_SHARE
          },
          [getGlobalName('search_nearbys_atms')]: {
            bind: 'search-nearbys-atms',
            analytics: INTERNAL_LINK_ATMS,
            link: {
              page: 'atmLocator'
            }
          },
          [getGlobalName('generate_qr_commerce')]: {
            bind: 'on-click-top-info-link',
            analytics: analyticsCommerce.internalLinkCommerce
          }
        }
      }
    },
    propertiesSpherica: {
      operationListClass: 'centered-items',
      disableButtons: true,
      operationsVariant: 'primary-alt'
    }
  };
  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getGlobalName('share_receipt_capture')]: {
            bind: 'captureReceipt'
          },
          [getGlobalName('init_page')]: {
            bind: 'reset'
          },
          [getGlobalName('set_successfull_data')]: {
            bind: 'result'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    },
    propertiesSpherica: {
      country: 'mxGlobal'
    }
  };
  const glomoOpxCardlessWithdrawal = {
    zone: 'app__transactional',
    familyPath: 'glomo-opx-cardless-withdrawal-dm',
    tag: 'glomo-opx-cardless-withdrawal-mx-dm',
    type: 'DM',
    properties: {
      baseLocale: getLocalePrefix('dm'),
      host: CONFIG.globalServices.host,
      transferApiVersion: CONFIG.globalServices.versions.transfer,
      autoActivateStep: true,
      decorateSteps: true,
      currency: getLocalCurrency(),
      cardlessWithdrawalQR: true,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      language: getLanguage(),
      pageName,
      visibleChars: getVisibleChars(CONFIG)('account'),
      changeKeyForOthers: true,
      primaryAmountLabel: 'cells-product-summary-account-available-current',
      native,
      fixedTimezone: true,
      withoutConcept: getLocalePrefix('concept-without-reason'),
      enableRatingApp: true,
      cellsConnections: {
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        },
        in: {
          global_storage_get_cardless_withdrawal_data_error: {
            bind: 'saveLocalStorageData'
          },
          global_storage_get_cardless_withdrawal_data_success: {
            bind: 'saveLocalStorageData'
          },
          [getGlobalName('init_page')]: {
            bind: 'init'
          },
          glomo_cardless_withdrawal_set_amount: {
            bind: 'setCardlessAmount'
          },
          global_cardless_withdrawal_set_review_data: {
            bind: 'setReviewData'
          },
          [getGlobalName('request_qr')]: {
            bind: 'setRequestQR'
          },
          [getGlobalName('show_help_modal')]: {
            bind: 'openHelpModal'
          },
          [getGlobalName('plugin_camera_success')]: {
            bind: 'postConfirmCodeRequest'
          },
          [getGlobalName('plugin_camera_success')]: {
            bind: 'postConfirmCodeRequest'
          },
          global_cardless_withdrawal_review_onboarding_qr_accept: {
            bind: 'setRequestQR'
          },
          [getGlobalName('show_feedback')]: {
            bind: 'showFeedback'
          },
          [getGlobalName('generate_qr_commerce')]: {
            bind: 'sendCardlessWithdrawalCommerce'
          }
        },
        out: {
          global_get_from_storage: {
            bind: getLocalePrefix('dm-request-local-storage-data')
          },
          global_set_in_storage: {
            bind: getLocalePrefix('dm-set-into-local-storage')
          },
          open_control_veil: {
            bind: getLocalePrefix('dm-open-control-veil')
          },
          close_control_veil: {
            bind: getLocalePrefix('dm-close-control-veil')
          },
          [getGlobalName('set_successfull_data')]: {
            bind: getLocalePrefix('dm-set-successfull-data')
          },
          [getGlobalName('open_on_boarding_qr_modal')]: {
            bind: getLocalePrefix('dm-on-boarding-qr-modal')
          },
          [getGlobalName('init_qr_scanner')]: {
            bind: getLocalePrefix('dm-qr-init')
          },
          [getGlobalName('open_help_modal')]: {
            bind: getLocalePrefix('dm-open-help-modal')
          },
          [getGlobalName('on_boarding_qr_modal')]: {
            bind: getLocalePrefix('dm-on-boarding-qr-modal'),
            analytics: PAGE_VIEW_READ_QR
          },
          [getGlobalName('analytics_app_completed')]: {
            bind: getLocalePrefix('dm-set-review'),
            analytics: APP_COMPLETED
          },
          [getGlobalName('qr_error_modal')]: {
            bind: getLocalePrefix('dm-error-modal'),
            analytics: PAGE_VIEW_READ_QR_ERROR
          },
          [getGlobalName('qr_success_modal')]: {
            bind: getLocalePrefix('dm-success-qr-modal'),
            analytics: PAGE_VIEW_READ_QR_SUCCESSFULL
          },
          [getGlobalName('exit')]: {
            bind: getLocalePrefix('dm-exit')
          },
          dashboard_accounts_refresh: {
            bind: getLocalePrefix('dm-success-qr-modal')
          },
          global_prepare_feedback: {
            bind: getLocalePrefix('dm-prepare-feedback')
          },
          global_navigate_to_feedback: {
            bind: getLocalePrefix('dm-navigate-to-feedback')
          },
          success_operation_notification_channel: {
            bind: getLocalePrefix('dm-rating-app'),
            'forward-to-native': true
          },
          global_cardless_withdrawal_set_businessCode_data: {
            bind: getLocalePrefix('dm-set-businessCode-data')
          },
          global_cardless_withdrawal_set_data_to_commerce: {
            bind: getLocalePrefix('dm-set-data-to-commerce')
          },
          [getGlobalName('navigate_to_commerce')]: {
            bind: getLocalePrefix('dm-navigate-to-commerce')
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: isSpherica,
      newCellsConnections: {
        add: {
          out: {
            [getGlobalName('on_boarding_qr_modal_spherica')]: {
              bind: getLocalePrefix('dm-on-boarding-qr-modal'),
              analytics: PAGE_VIEW_READ_QR
            },
            [getGlobalName('qr_error_modal_spherica')]: {
              bind: getLocalePrefix('dm-error-modal'),
              analytics: PAGE_VIEW_READ_QR_ERROR
            },
            [getGlobalName('open_help_modal_spherica')]: {
              bind: getLocalePrefix('dm-open-help-modal')
            },
            [getGlobalName('qr_success_modal_spherica')]: {
              bind: getLocalePrefix('dm-success-qr-modal'),
              analytics: PAGE_VIEW_READ_QR_SUCCESSFULL
            }
          }
        },
        remove: {
          out: [
            'global_cardless_withdrawal_review_on_boarding_qr_modal',
            'global_cardless_withdrawal_review_open_help_modal',
            'global_cardless_withdrawal_detail_qr_error_modal',
            'global_cardless_withdrawal_review_qr_success_modal'
          ]
        }
      }
    }
  };
  const qrScannerManager = {
    zone: 'app_main',
    type: 'DM',
    tag: 'bbva-manager-qr-scanner',
    familyPath: '@glomo-web-components/bbva-manager-qr-scanner',
    render: 'litElement',
    properties: {
      selectedPluginConfig: isNativeiOS ? 'ios' : 'android',
      qrPluginConfigs: qrPluginConfig,
      cellsConnections: {
        in: {
          [getGlobalName('init_qr_scanner')]: {
            bind: 'managePluginParams'
          }
        },
        out: {
          [getGlobalName('request_open_qr_scanner')]: {
            bind: 'glomo-qr-plugin-params'
          }
        }
      }
    }
  };
  const nativeconnectorQr = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-bbva-qr',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    properties: {
      isNativeiOS,
      cellsConnections: {
        in: {
          [getGlobalName('request_open_qr_scanner')]: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          [getGlobalName('plugin_camera_success')]: {
            bind: 'bbva-qr-plugin-camera-code-success'
          }
        }
      }
    }
  };
  base.components.push(
    glomoOpxCardlessWithdrawal,
    glomoNavigationHandler,
    cellsHandleLifeCycle,
    cellsMoleculeHeader,
    cellsSuccessfulResponse,
    cellsShareGenericReceipt,
    nativeconnectorQr,
    qrScannerManager
  );
  addCommonErrors(base.components)();
  _localStorage.addOutStorageChannels(base.components, [ 'cardless_withdrawal_data' ], CONFIG);
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};