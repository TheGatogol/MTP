module.exports = CONFIG => {
  const { headerHeightMinimum, getPages, getLanguage } = require('./common/helpers');
  const pageName = 'paymentsThirdPartyWalletProvisioning';
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector.js');
  const pages = getPages(CONFIG)(pageName);
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { cards, cardsV1, cardsV2, hubPaymentsV1 }  },
    native = false,
    nativeIos = false,
    thirdPartyWallets: { nonceSignature, nonce, publicCertificateId }
  } = CONFIG;
  const wallet = nativeIos ? 'apple' : 'google';
  const walletImg = `./images/thirdPartyWallet/add_to_${wallet}_wallet.svg`;
  const spinner = require('./common/helpers/_utils').createSpinner(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const analytincsProvision = require('./analytics/_thirdPartyWallet')();

  const base = {
    hash: 'mx-payments-third-party-wallet-provisioning',
    currentPage: {
      url: '/payments-third-party-wallet-provisioning'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        className: 'ios-top-padding',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerHeight: headerHeightMinimum,
        headerFixed: true,
        iOSFixedHeader: nativeIos
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        className: `${nativeIos ? 'ios-top-padding ' : ''}bg-light-grey`,
        headerHeight: 0,
        headerFixed: true,
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-glomo-dashboard-manager-mx',
        familyPath: 'cells-glomo-dashboard-manager',
        properties: {
          delay: 100,
          financialOverview: false,
          dataProtectionRegulationBanerConfig: {
            text: 'data-protection-regulation-oc-banner-text',
            smallImg: {
              id: 'data-protection-regulation-image',
              alt: 'data-protection-regulation-image-alt',
              src: 'images/dataProtectionRegulation/protection-regulation.svg'
            }
          },
          cellsConnections: {
            in: {
              global_nativeconnector_third_party_wallet_provisioning_success: {
                bind: 'logoutAndModalIgnore'
              },
              global_nativeconnector_third_party_wallet_provisioning_error: {
                bind: 'logoutAndModalIgnore'
              }
            },
            out: {
              global_logout_sesion_expiration: {
                bind: 'dashboard-native-logout-confirm'
              }
            },
            params: {
              userInfo: 'global_user',
              stateAccounts: 'stateAccounts',
              stateCards: 'stateCards',
              stateFunds: 'stateFunds',
              stateDeposits: 'stateDeposits',
              stateLoans: 'stateLoans'
            }
          }
        }
      }
    ]
  };
  const widgetWalletProvisioning = {
    zone: 'app__main',
    type: 'UI',
    familyPathSpherica: '@bbva-web-components-widgets/payments-third-party-wallet-provisioning',
    tagSpherica: 'payments-third-party-wallet-provisioning',
    familyPath: 'glomo-web-components/payments-third-party-wallet-provisioning',
    tag: 'payments-third-party-wallet-provisioning',
    render: 'litElement',
    properties: {
      handleLogout: true,
      walletImg,
      cardApiVersion: cardsV1,
      hubPaymentsApiVersion: hubPaymentsV1,
      host,
      language: getLanguage(),
      native,
      requiredToken,
      wallet,
      maxTries: 2,
      country: 'mx',
      nonce,
      nonceSignature,
      publicCertificateId,
      cellsConnections: {
        in: {
          'global-auth-token': {
            bind: 'token'
          },
          payments_third_party_wallet_provisioning_set_card_data: {
            bind: 'cardData'
          },
          navigate_to_operations_digital_card_add_wallet: {
            bind: 'cardData'
          },
          global_nativeconnector_third_party_wallet_status_devices_success: {
            bind: 'devices'
          },
          global_nativeconnector_third_party_wallet_status_devices_error: {
            bind: 'handlerErrorAppMissing'
          },
          global_nativeconnector_third_party_wallet_get_push_data_success: {
            bind: 'getDataConnectorGoogleSuccess'
          },
          global_nativeconnector_third_party_wallet_get_push_data_error: {
            bind: 'handleError'
          },
          sign_modal_cancelled: {
            bind: 'resetAddPayWallet'
          },
          payments_third_party_wallet_provisioning_back_to_product_detail: {
            bind: 'navigateBack'
          },
          payments_third_party_wallet_provisioning_cancel_modal_veil: {
            bind: 'navigateBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackNavigation'
          }
        },
        out: {
          global_nativeconnector_third_party_wallet_provisioning: {
            bind: 'payments-third-party-wallet-provisioning-push-succeed'
          },
          global_nativeconnector_third_party_wallet_status_devices: {
            bind: 'payments-third-party-wallet-provisioning-devices-request'
          },
          global_nativeconnector_third_party_wallet_get_push_data: {
            bind: 'payments-third-party-wallet-provisioning-push-data-get'
          },
          global_nativeconnector_provisioning_add_to_wallet_click: {
            bind: 'payments-third-party-wallet-provisioning-add-to-wallet-click'
          },
          global_nativeconnector_provisioning_verify_click: {
            bind: 'payments-third-party-wallet-provisioning-verify-click'
          },
          provisioning_verify_success: {
            bind: 'payments-third-party-wallet-provisioning-verify-succeed'
          },
          payments_third_party_wallet_provisioning_last_try_not_allowed: {
            bind: 'payments-third-party-wallet-provisioning-last-try-not-allowed-show'
          },
          payments_third_party_wallet_provisioning_last_try_not_realized: {
            bind: 'payments-third-party-wallet-provisioning-last-try-not-realized-show'
          },
          global_action_launcher_dialer: {
            bind: 'payments-third-party-wallet-provisioning-phone-call'
          },
          payments_third_party_wallet_provisioning_back_step: {
            bind: 'navigation-go-back',
            backStep: true
          },
          payments_third_party_wallet_provisioning_left_back_step: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          },
          apple_pay_provisioning_otp_error: {
            bind: 'signature-invalid-dm'
          }
        }
      }
    },
    propertiesSpherica: {
      handleLogout: true,
      walletImg,
      cardApiVersion: cardsV2,
      hubPaymentsApiVersion: hubPaymentsV1,
      host,
      language: getLanguage(),
      native,
      requiredToken,
      wallet,
      maxTries: 3,
      country: 'mx',
      nonce,
      nonceSignature,
      publicCertificateId,
      cellsConnections: {
        in: {
          'global-auth-token': {
            bind: 'token'
          },
          payments_third_party_wallet_provisioning_set_card_data: {
            bind: 'cardData'
          },
          navigate_to_operations_digital_card_add_wallet: {
            bind: 'cardData'
          },
          global_nativeconnector_third_party_wallet_status_devices_success: {
            bind: 'devices'
          },
          global_nativeconnector_third_party_wallet_status_devices_error: {
            bind: 'handlerErrorAppMissing'
          },
          global_nativeconnector_third_party_wallet_get_push_data_success: {
            bind: 'getDataConnectorGoogleSuccess'
          },
          global_nativeconnector_third_party_wallet_get_push_data_error: {
            bind: 'handleError'
          },
          sign_modal_cancelled: {
            bind: 'resetAddPayWallet'
          },
          payments_third_party_wallet_provisioning_back_to_product_detail: {
            bind: 'navigateBack'
          },
          payments_third_party_wallet_provisioning_cancel_modal_veil: {
            bind: 'navigateBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackNavigation'
          }
        },
        out: {
          global_nativeconnector_third_party_wallet_provisioning: {
            bind: 'payments-third-party-wallet-provisioning-push-succeed'
          },
          global_nativeconnector_third_party_wallet_status_devices: {
            bind: 'payments-third-party-wallet-provisioning-devices-request'
          },
          global_nativeconnector_third_party_wallet_get_push_data: {
            bind: 'payments-third-party-wallet-provisioning-push-data-get'
          },
          global_nativeconnector_provisioning_add_to_wallet_click: {
            bind: 'payments-third-party-wallet-provisioning-add-to-wallet-click'
          },
          global_nativeconnector_provisioning_verify_click: {
            bind: 'payments-third-party-wallet-provisioning-verify-click'
          },
          provisioning_verify_success: {
            bind: 'payments-third-party-wallet-provisioning-verify-succeed'
          },
          payments_third_party_wallet_provisioning_last_try_not_allowed: {
            bind: 'payments-third-party-wallet-provisioning-last-try-not-allowed-show'
          },
          payments_third_party_wallet_provisioning_last_try_not_realized: {
            bind: 'payments-third-party-wallet-provisioning-last-try-not-realized-show'
          },
          global_action_launcher_dialer: {
            bind: 'payments-third-party-wallet-provisioning-phone-call'
          },
          payments_third_party_wallet_provisioning_back_step: {
            bind: 'navigation-go-back',
            backStep: true
          },
          payments_third_party_wallet_provisioning_left_back_step: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          },
          apple_pay_provisioning_otp_error: {
            bind: 'signature-invalid-dm'
          }
        }
      }
    }
  };
  const analyticsProvisioningManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-tpw-provisioning',
    familyPath: '@glomo-web-components/bbva-analyticmanager-payments',
    render: 'litElement',
    properties: {
      wallet,
      cellsConnections: {
        in: {
          analytics_manager_provisioning_persist_data: {
            bind: 'provisioningPersistData'
          },
          global_get_card_orange_data_success: {
            bind: 'cardData'
          },
          widget_error_call_for_help_provisioningWallet: {
            bind: 'sendErrorOperationNotPerformed'
          },
          payments_third_party_wallet_provisioning_last_try_not_allowed: {
            bind: 'sendErrorOperationNotPerformed'
          },
          payments_third_party_wallet_provisioning_last_try_not_realized: {
            bind: 'sendErrorOperationNotPerformed'
          },
          navigate_to_third_party_wallet_provisioning: {
            bind: 'sendFootprintDeviceGooglePay'
          },
          global_nativeconnector_provisioning_add_to_wallet_click: {
            bind: 'sendInternalLinkAddPushProvisioning'
          },
          signature_handle_required_first_step: {
            bind: 'sendFootprintOtp'
          },
          global_nativeconnector_provisioning_verify_click: {
            bind: 'sendInternalLinkDeviceVerifyCard'
          },
          provisioning_verify_success: {
            bind: 'sendFootprintVerifiedCard'
          }
        },
        out: {
          payments_third_party_wallet_provisioning_analytic_footprint_error: {
            bind: 'error-operation-not-performed',
            analytics: analytincsProvision.getFootPrintError('errorOperationNotDone')
          },
          payments_third_party_wallet_provisioning_analytic_footprint_device: {
            bind: 'footprint-device-google-pay',
            analytics: analytincsProvision.footPrintDevice
          },
          payments_third_party_wallet_provisioning_analytic_internal_link_provisioning: {
            bind: 'internal-link-add-push-provisioning',
            analytics: analytincsProvision.internalLinkProvisioning
          },
          payments_third_party_wallet_provisioning_analytic_footprint_otp: {
            bind: 'footprint-otp',
            analytics: analytincsProvision.appOtpStep
          },
          payments_third_party_wallet_provisioning_analytic_internal_link_verify: {
            bind: 'internal-link-device-verify-card',
            analytics: analytincsProvision.internalLinkVerify
          },
          payments_third_party_wallet_provisioning_analytic_footprint_verify: {
            bind: 'footprint-verified-card',
            analytics: analytincsProvision.footPrintSuccessVerify
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-third-party-wallets-mx',
    tag: 'bbva-manager-third-party-wallets-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      cardsApiVersion: cards,
      nativeIos,
      cellsConnections: {
        in: {
          global_nativeconnector_third_party_wallet_manager_status_devices_success: {
            bind: 'devices'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          navigate_to_third_party_wallet_provisioning: {
            bind: 'cardData'
          },
          blue_navigate_to_third_party_wallet_provisioning: {
            bind: 'cardData'
          },
          payments_third_party_wallet_provisioning_set_digital_card_data: {
            bind: 'setCardDataDigital'
          },
          payments_third_party_wallet_provisioning_back_step: {
            bind: 'reset'
          },
          payments_third_party_wallet_provisioning_left_back_step: {
            bind: 'reset'
          },
          sign_modal_cancelled: {
            bind: 'reset'
          },
          global_card_digital_card_associated_data: {
            bind: 'digitalCardAssociatedData'
          },
          payments_third_party_wallet_provisioning_card_digital_on: {
            bind: 'digitalCardPatchOnActivation'
          },
          global_nativeconnector_third_party_wallet_status_devices_error: {
            bind: 'closeSpinner'
          }
        },
        out: {
          payments_third_party_wallet_provisioning_set_card_data: {
            bind: 'payment-third-party-wallet-set-card-data'
          },
          payments_third_party_wallet_provisioning_is_virtual_card: {
            bind: 'payment-third-party-wallet-is-virtual-card'
          },
          payments_third_party_wallet_provisioning_digital_card_is_off: {
            bind: 'payment-third-party-wallet-digital-card-is-off'
          },
          payments_third_party_wallet_provisioning_set_label_body: {
            bind: 'set-label-body'
          },
          payments_third_party_wallet_provisioning_set_label_button: {
            bind: 'set-label-button'
          },
          payments_third_party_wallet_provisioning_set_label_header: {
            bind: 'set-label-header'
          },
          payments_third_party_wallet_provisioning_set_label_title: {
            bind: 'set-label-title'
          },
          payments_third_party_wallet_provisioning_set_label_body_card_off: {
            bind: 'set-label-body-card-off'
          },
          payments_third_party_wallet_provisioning_set_label_title_card_off: {
            bind: 'set-label-title-card-off'
          },
          payments_third_party_wallet_provisioning_set_label_button_card_off: {
            bind: 'set-label-button-card-off'
          },
          payments_third_party_wallet_provisioning_set_label_link_card_off: {
            bind: 'set-label-link-card-off'
          },
          payments_third_party_wallet_provisioning_set_label_body_card_is_not_generated: {
            bind: 'set-label-body-card-is-not-generated'
          },
          payments_third_party_wallet_provisioning_set_label_title_card_is_not_generated: {
            bind: 'set-label-title-card-is-not-generated'
          },
          global_open_control_veil: {
            bind: 'open-control-veil'
          },
          global_close_control_veil: {
            bind: 'close-control-veil'
          },
          global_nativeconnector_third_party_wallet_status_devices: {
            bind: 'payments-third-party-wallet-provisioning-request-devices'
          },
          payments_third_party_wallet_provisioning_handle_manager_error: {
            bind: 'handle-manager-error'
          },
          payments_third_party_wallet_provisioning_card_is_not_generated: {
            bind: 'payment-third-party-wallet-digital-card-is-not-generated'
          },
          payments_third_party_wallet_provisioning_card_digital_is_on: {
            bind: 'payment-third-party-wallet-digital-card-is-on'
          },
          financial_overview_refresh: {
            bind: 'card-activation-api-dm-update'
          },
          payments_third_party_wallet_provisioning_back_to_product_detail: {
            bind: 'handle-manager-error'
          },
          payments_third_party_wallet_provisioning_clear_loader_widget: {
            bind: 'payment-third-party-wallet-clear-loader-widget'
          },
          payments_third_party_wallet_provisioning_show_loader_widget: {
            bind: 'payment-third-party-wallet-show-loader-widget'
          }
        }
      }
    }
  };
  const digitalCardIsOffModal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    properties: {
      fullHeight: false,
      titleIcon: 'bbva:caution',
      modalType: 'info',
      cellsConnections: {
        in: {
          payments_third_party_wallet_provisioning_digital_card_is_off: {
            bind: 'open'
          },
          payments_third_party_wallet_provisioning_set_label_button_card_off: {
            bind: 'buttonText'
          },
          payments_third_party_wallet_provisioning_set_label_body_card_off: {
            bind: 'bodyText'
          },
          payments_third_party_wallet_provisioning_set_label_title_card_off: {
            bind: 'titleText'
          },
          payments_third_party_wallet_provisioning_set_label_link_card_off: {
            bind: 'linkText'
          }
        },
        out: {
          payments_third_party_wallet_provisioning_card_digital_on: {
            bind: 'help-modal-footer-button-click'
          },
          payments_third_party_wallet_provisioning_back_to_product_detail: {
            bind: 'help-modal-footer-link-click'
          },
          payments_third_party_wallet_provisioning_cancel_modal_veil: {
            bind: 'help-modal-veil-click'
          }
        }
      }
    }
  };
  const notificationAcceptModal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    container: true,
    properties: {
      id: 'notificationAcceptModal',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal',
      iconRightPrimary: 'coronita:close',
      cellsConnections: {
        in: {
          payments_third_party_wallet_provisioning_is_virtual_card: {
            bind: 'open'
          },
          payments_third_party_wallet_provisioning_set_label_button: {
            bind: 'buttonText'
          },
          payments_third_party_wallet_provisioning_set_label_body: {
            bind: 'bodyText'
          },
          payments_third_party_wallet_provisioning_set_label_header: {
            bind: 'headerText'
          }
        },
        out: {
          payments_third_party_wallet_provisioning_set_digital_card_data: {
            bind: 'help-modal-footer-button-click'
          },
          payments_third_party_wallet_provisioning_back_to_product_detail: {
            bind: 'help-modal-header-right-primary-click'
          }
        }
      }
    }
  };
  const microillustrationModal = {
    zone: 'notificationAcceptModal.slot-content-header',
    type: 'UI',
    tag: 'bbva-clip-microillustration',
    familyPath: '@bbva-web-components/bbva-clip-microillustration',
    render: 'litElement',
    properties: {
      size: 'L',
      microillustration: 'withdrawmoneycontactless'
    }
  };
  const microillustrationDigitalCardOffModal = {
    zone: 'digitalCardIsNotGenerated.slot-content-header',
    type: 'UI',
    tag: 'bbva-clip-microillustration',
    familyPath: '@bbva-web-components/bbva-clip-microillustration',
    render: 'litElement',
    properties: {
      size: 'L',
      microillustration: 'carderror'
    }
  };
  const titleModal = {
    zone: 'notificationAcceptModal.slot-content-header',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      alignment: 'center',
      fontWeight: '500',
      size: 'XL',
      cellsConnections: {
        in: {
          payments_third_party_wallet_provisioning_set_label_title: {
            bind: 'text'
          }
        }
      }
    }
  };
  const titleDigitalCardOffModal = {
    zone: 'digitalCardIsNotGenerated.slot-content-header',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      alignment: 'center',
      fontWeight: '500',
      size: 'XL',
      cellsConnections: {
        in: {
          payments_third_party_wallet_provisioning_set_label_title_card_is_not_generated: {
            bind: 'text'
          }
        }
      }
    }
  };
  const digitalCardIsNotGenerated = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    container: true,
    properties: {
      id: 'digitalCardIsNotGenerated',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal',
      iconRightPrimary: 'coronita:close',
      cellsConnections: {
        in: {
          payments_third_party_wallet_provisioning_card_is_not_generated: {
            bind: 'open'
          },
          payments_third_party_wallet_provisioning_set_label_button: {
            bind: 'buttonText'
          },
          payments_third_party_wallet_provisioning_set_label_header: {
            bind: 'headerText'
          },
          payments_third_party_wallet_provisioning_set_label_body_card_is_not_generated: {
            bind: 'bodyText'
          }
        },
        out: {
          payments_third_party_wallet_provisioning_back_to_product_detail: {
            bind: 'help-modal-close'
          }
        }
      }
    }
  };
  const notificationToast = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-notification-toast',
    familyPath: '@bbva-web-components/bbva-notification-toast',
    render: 'litElement',
    properties: {
      type: 'success',
      iconExplainer: 'coronita:correct',
      alertText: 'payments-third-party-wallet-provisioning-toast-card-on',
      duration: '3000',
      autoHide: 'true',
      fixedBottom: 'true',
      cellsConnections: {
        in: {
          payments_third_party_wallet_provisioning_card_digital_is_on: {
            bind: 'show'
          }
        }
      }
    }
  };
  base.components.push(
    spinner,
    manager,
    widgetWalletProvisioning,
    analyticsProvisioningManager,
    digitalCardIsNotGenerated,
    digitalCardIsOffModal,
    notificationAcceptModal,
    microillustrationModal,
    microillustrationDigitalCardOffModal,
    titleModal,
    titleDigitalCardOffModal,
    notificationToast
  );

  const spherizedBase = sphericaPageUtils.spherize(base);

  errorAndSignWidgetConnector(CONFIG)(spherizedBase)(widgetWalletProvisioning.tag, {
    widgetId: 'provisioningWallet',
    cancelAfterErrorFunction: 'clearLoader'
  });
  return spherizedBase;
};
