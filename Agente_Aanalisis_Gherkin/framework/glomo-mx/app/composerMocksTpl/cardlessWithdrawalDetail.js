'use strict';
module.exports = CONFIG => {
  const pageName = 'cardlessWithdrawalDetail';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const { createSpinner, getLocalCurrency, getMediumFormatDate, getLanguage, getVisibleChars } = require('./common/helpers/_utils.js');
  const { bbvaQrPluginConfigs, merge } = require('./common/helpers');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const {
    native = false,
    nativeIos = false
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { CARDLESS_WIDTHDRAWAL_DETAIL_PAGE_VIEW, CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL_CLICK } = require('./analytics/_cardlessWithdrawalHistoric.js');
  const {getAdvancedFootPrintLevel3} = require('./analytics/_cardlessWithdrawalCommerce')(CONFIG);
  const spinner = createSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';

  const qrPluginConfig = merge(bbvaQrPluginConfigs.commons, {
    android: {
      customViewConfig: {
        options: {
          title: 'Retiro sin tarjeta',
          firstFooterLabel: 'Escanea el código QR que aparezca en la pantalla del cajero automático.'
        }
      }
    },
    ios: {
      customViewConfig: {
        options: {
          title: 'Retiro sin tarjeta',
          firstFooterLabel: 'Escanea el código QR que aparezca en la pantalla del cajero automático.'
        }
      }
    }
  });
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_cardless_withdrawal_detail_error_get_transfer_spherica: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_icon_cancel_modal_spherica: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_icon_help_modal_spherica: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_error_expired_modal_spherica: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_detail_qr_success_modal_spherica: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_detail_qr_error_modal_spherica: {
            bind: 'openWithSettings'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_cardless_withdrawal_historic_cancel_transaction_detail_spherica: {
            bind: 'alert-cardless-widthdrawal-historic-cancel-modal-transaction-withdrawal-accept'
          },
          global_glomo_alert_manager_modal_opened: {
            bind: 'glomo-alert-modal-opened'
          },
          global_glomo_alert_manager_modal_closed: {
            bind: 'glomo-alert-modal-closed'
          }
        }
      }
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: '/cardless-withdrawal/:transactionId'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        className: nativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: isSpherica ? '' : 'dark-blue-bg',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            cardless_withdrawal_detail_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          }
        }
      },
      propertiesSpherica: {
        className: nativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'cardlessWithdrawalDetail',
          private: true,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              __bridge_page_cardlessWithdrawalDetail: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              cardless_withdrawal_detail_init_page: {
                bind: 'init-page',
                analytics: CARDLESS_WIDTHDRAWAL_DETAIL_PAGE_VIEW
              },
              cardless_withdrawal_detail_reset_page: {
                bind: 'reset'
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
          className: isSpherica ? '' : 'header--dark',
          back: true,
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-cardless-withdrawal-detail-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_cardless_withdrawal_detail_to_historic: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          titleName: 'glomo-cardless-withdrawal-detail-header-title-spherica',
          variant: 'primary-alt',
          leftIconText: 'cells-molecule-header-spherica-back',
          leftIcon: 'coronita:back'
        }
      }
    ]
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      continue: 'cardlessWithdrawalCommerce',
      cellsConnections: {
        in: {
          global_cardless_withdrawal_navigate_commerce: {
            bind: 'navigate'
          }
        },
        out: {
          cardless_withdrawal_detail_go_to_commerce: {
            bind: 'navigation-to-cardlessWithdrawalCommerce',
            link: {
              page: 'cardlessWithdrawalCommerce'
            }
          }
        }
      }
    }
  };

  const glomoTransfersDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-transfers-mx-dm',
    fixedTimezone: true,
    familyPath: 'glomo-transfers-dm',
    properties: {
      host: CONFIG.globalServices.host,
      native,
      transferApiVersion: CONFIG.globalServices.versions.transfer,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cardlessWithdrawalQR: true,
      showOperations: true,
      otpId: 'cardlessWithdrawalDetail',
      isSpherica: isSpherica,
      cellsConnections: {
        in: {
          navigation_cardless_withdrawal_detail_to_historic: {
            bind: 'reset'
          },
          cardless_withdrawal_detail_init_page: {
            bind: 'getMobileTransfer'
          },
          cardless_withdrawal_detail_cancel_withdrawal: {
            bind: 'openCancelWithdrawalModal'
          },
          cardless_withdrawal_detail_help_info: {
            bind: 'openCardlessWithdrawalDetailHelpModal'
          },
          cardless_withdrawal_detail_request_qr: {
            bind: 'setRequestQR'
          },
          global_cardless_withdrawa_detail_plugin_camera_success: {
            bind: 'postConfirmCodeRequest'
          },
          cardless_withdrawal_detail_cache_tranfer: {
            bind: 'mobileTransferParsed'
          },
          global_cardless_withdrawal_historic_cancel_transaction_detail: {
            bind: 'cancelTransactionDetail'
          },
          cardless_withdrawal_detail_commerce: {
            bind: 'sendDetailToCommerce'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          }
        },
        out: {
          cardless_withdrawal_detail_successful_withdrawal_cancelled: {
            bind: 'mobile-transfer-deleted'
          },
          cardless_withdrawal_detail_mobile_transfer_cells: {
            bind: 'mobile-transfer-parsed-cells'
          },
          cardless_withdrawal_detail_show_component_cells: {
            bind: 'dm-show-component-cells-transfer'
          },
          cardless_withdrawal_detail_hidde_component_cells: {
            bind: 'dm-hidde-component-cells-transfer'
          },
          cardless_withdrawal_detail_mobile_transfer_glomo: {
            bind: 'mobile-transfer-parsed-glomo'
          },
          cardless_withdrawal_detail_show_component_glomo: {
            bind: 'dm-show-component-glomo-transfer'
          },
          cardless_withdrawal_detail_hidde_component_glomo: {
            bind: 'dm-hidde-component-glomo-transfer'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_cardless_withdrawal_detail_error_get_transfer: {
            bind: 'open-error-on-get-mobile-transfer'
          },
          cardless_withdrawal_detail_main_transfer_data: {
            bind: 'mobile-transfer-main'
          },
          cardless_withdrawal_detail_exit_operative: {
            bind: 'exit-page-transfers'
          },
          global_open_glomo_alert_manager_icon_cancel_modal: {
            bind: 'glomo-transfers-open-modal-with-settings'
          },
          global_open_glomo_alert_manager_icon_help_modal: {
            bind: 'glomo-transfers-open-modal-with-settings'
          },
          global_open_glomo_alert_manager_error_expired_modal: {
            bind: 'glomo-transfers-open-modal-with-settings'
          },
          cardless_withdrawal_detail_cancel_click_analytics: {
            bind: 'cancel-transfer',
            analytics: CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL_CLICK
          },
          global_cardless_withdrawal_detail_init_qr_scanner: {
            bind: 'qr-init'
          },
          global_cardless_withdrawal_detail_qr_success_modal: {
            bind: 'glomo-transfers-open-modal-with-settings'
          },
          global_cardless_withdrawal_detail_qr_error_modal: {
            bind: 'glomo-transfers-open-modal-with-settings'
          },
          cardless_withdrawal_detail_cache_tranfer: {
            bind: 'copi-cache-transfer'
          },
          global_cardless_withdrawal_set_business_code_data_detail: {
            bind: 'set-business-code-of-detail'
          },
          global_cardless_withdrawal_set_code_data_detail: {
            bind: 'set-data-to-commerce-detail'
          },
          global_cardless_withdrawal_navigate_commerce: {
            bind: 'navigate-detail-to-commerce'
          }
        },
        params: {
          user: 'global_user',
          mobileTransferId: 'transactionId'
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            global_cardless_withdrawal_historic_cancel_transaction_detail_spherica: {
              bind: 'cancelTransactionDetail'
            }
          },
          out: {
            global_alert_cardless_withdrawal_detail_error_get_transfer_spherica: {
              bind: 'open-error-on-get-mobile-transfer'
            },
            global_open_glomo_alert_manager_icon_help_modal_spherica: {
              bind: 'glomo-transfers-open-modal-with-settings'
            },
            global_open_glomo_alert_manager_error_expired_modal_spherica: {
              bind: 'glomo-transfers-open-modal-with-settings'
            },
            global_cardless_withdrawal_detail_qr_success_modal_spherica: {
              bind: 'glomo-transfers-open-modal-with-settings'
            },
            global_cardless_withdrawal_detail_qr_error_modal_spherica: {
              bind: 'glomo-transfers-open-modal-with-settings'
            }
          }
        },
        remove: {
          in: [
            'global_cardless_withdrawal_historic_cancel_transaction_detail'
          ],
          out: [
            'global_alert_cardless_withdrawal_detail_error_get_transfer',
            'global_open_glomo_alert_manager_icon_cancel_modal',
            'global_open_glomo_alert_manager_icon_help_modal',
            'global_open_glomo_alert_manager_error_expired_modal',
            'global_cardless_withdrawal_detail_qr_success_modal',
            'global_cardless_withdrawal_detail_qr_error_modal'
          ]
        }
      }
    }
  };

  const cellsTransactionDetail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-transaction-detail',
    tagSpherica: 'cells-transaction-detail-spherica',
    properties: {
      showStatus: true,
      shareTransaction: true,
      operationsListLayout: 'review',
      localCurrency: getLocalCurrency(),
      loaded: true,
      loadedError: true,
      cellsConnections: {
        in: {
          cardless_withdrawal_detail_show_component_cells: {
            bind: 'hidden'
          },
          cardless_withdrawal_detail_mobile_transfer_cells: {
            bind: 'transaction'
          },
          cardless_withdrawal_detail_main_transfer_data: {
            bind: 'mainTransaction'
          },
          cardless_withdrawal_detail_reset_page: {
            bind: 'reset'
          },
          cardless_withdrawal_detail_hidde_component_cells: {
            bind: 'hidden'
          },
          cardless_withdrawal_detail_error: {
            bind: 'error'
          }
        },
        out: {
          cells_transaction_detail_share_receipt: {
            bind: 'share-transaction-receipt-capture'
          }
        },
        params: {
          mobileTransferId: 'transactionId'
        }
      }
    },
    propertiesSpherica: {
      showStatusAfterAmount: true,
      showOperationDateAfterStatus: true,
      showOperativesUp: true
    }
  };

  const cellsSuccessfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      language: getLanguage(),
      type: 'detail',
      page: 'cardlessWithdrawalDetail',
      visibleChars: getVisibleChars('account'),
      hidden: true,
      disableButtons: true,
      localCurrency: getLocalCurrency(),
      loadErrorMessage: true,
      formatDate: getMediumFormatDate(),
      withOutAvatar: true,
      additionalActionEvents: {
        commerce: 'cardless-withdrawal-commerce'
      },
      cellsConnections: {
        in: {
          cardless_withdrawal_detail_reset_page: {
            bind: 'reset'
          },
          cardless_withdrawal_detail_show_component_glomo: {
            bind: 'hidden'
          },
          cardless_withdrawal_detail_hidde_component_glomo: {
            bind: 'hidden'
          },
          cardless_withdrawal_detail_mobile_transfer_glomo: {
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
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          },
          cardless_withdrawal_detail_share_receipt: {
            bind: 'share-receipt-capture'
          },
          cardless_withdrawal_detail_cancel_withdrawal: {
            bind: 'delete-operation'
          },
          cardless_withdrawal_detail_search_atms: {
            bind: 'route-operation',
            link: {
              page: 'atmLocator'
            }
          },
          cardless_withdrawal_detail_help_info: {
            bind: 'open-icon-help-modal-withouthead',
            analytics: getAdvancedFootPrintLevel3('opciones de retiro')
          },
          cardless_withdrawal_detail_request_qr: {
            bind: 'read-qr-code'
          },
          cardless_withdrawal_detail_commerce: {
            bind: 'cardless-withdrawal-commerce'
          }
        }
      }
    },
    propertiesSpherica: {
      flatSuccessPage: true,
      operationsVariant: 'primary',
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'share-receipt-show-modal-error'
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
          cardless_withdrawal_detail_share_receipt: {
            bind: 'captureReceipt'
          },
          cells_transaction_detail_share_receipt: {
            bind: 'captureReceipt'
          },
          cardless_withdrawal_detail_init_page: {
            bind: 'reset'
          },
          global_open_glomo_alert_manager_icon_cancel_modal: {
            bind: 'reset'
          },
          cardless_withdrawal_detail_mobile_transfer_glomo: {
            bind: 'result'
          },
          cardless_withdrawal_detail_main_transfer_data: {
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
      country: 'mxGlobal',
      newCellsConnections: {
        add: {
          in: {
            global_open_glomo_alert_manager_icon_cancel_modal_spherica: {
              bind: 'reset'
            },
            global_alert_manager_open_with_settings_spherica: {
              bind: 'share-receipt-show-modal-error'
            }
          }
        },
        remove: {
          in: [
            'global_open_glomo_alert_manager_icon_cancel_modal'
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
      selectedPluginConfig: nativeIos ? 'ios' : 'android',
      qrPluginConfigs: qrPluginConfig,
      cellsConnections: {
        in: {
          global_cardless_withdrawal_detail_init_qr_scanner: {
            bind: 'managePluginParams'
          }
        },
        out: {
          global_cardless_withdrawal_detail_request_open_qr_scanner: {
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
      isNativeiOS: nativeIos,
      cellsConnections: {
        in: {
          global_cardless_withdrawal_detail_request_open_qr_scanner: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          global_cardless_withdrawa_detail_plugin_camera_success: {
            bind: 'bbva-qr-plugin-camera-code-success'
          }
        }
      }
    }
  };
  base.components.push(
    cellsTransactionDetail,
    cellsSuccessfulResponse,
    cellsShareGenericReceipt,
    glomoTransfersDM,
    glomoNavigationHandler,
    qrScannerManager,
    nativeconnectorQr
  );
  addCommonErrors(base.components)();
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
