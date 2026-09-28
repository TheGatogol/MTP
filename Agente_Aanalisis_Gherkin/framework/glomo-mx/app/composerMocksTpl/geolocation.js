'use strict';
module.exports = (CONFIG) => {
  const {
    connectionsOut,
    doubleFooterHeight
  } = require('./common/helpers/_utils');
  const { addOutStorageChannels } = require('./common/_local-storage');
  const pageName = 'geolocation';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { native = false, nativeIos = false } = CONFIG;
  const { getAnalytic } = require('./analytics/_geolocation')();
  const literals = require('./analytics/common/_literals');
  const { glomoAlertManagerSpherica } = require('./common/_cross-components');
  const alertManager = glomoAlertManagerSpherica(CONFIG);
  alertManager.propertiesSpherica = {
    newCellsConnections: {
      add: {
        out: {
          geolocation_repeat_permission: {
            bind: 'alert-geolocation-repeat-permission-accept'
          },
          geolocation_accept_go_to_configurations: {
            bind: 'alert-geolocation-not-accepted-accept'
          },
          geolocation_configuration_ios: {
            bind: 'alert-location-not-active-ios-accept'
          },
          geolocation_retry_get_location: {
            bind: 'alert-trying-to-connect-accept'
          },
          geolocation_logout_on_retry: {
            bind: 'alert-logout-app-accept'
          }
        }
      }
    }
  };
  const bbvaProgressContent = {
    type: 'UI',
    zone: 'app__overlay',
    tag: 'bbva-progress-content',
    tagSpherica: 'bbva-progress-content-spherica',
    familyPath: '@bbva-web-components/bbva-progress-content',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      withMask: true,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          geo_open_control_veil: {
            bind: 'showCustom'
          },
          geo_close_control_veil: {
            bind: 'hide'
          },
          geo_show_message_viel: {
            bind: 'spinnerMessageLabel'
          }
        }
      }
    },
    propertiesSpherica: {
      text: 'glomo-geolocation-ubication-spinner',
      variant: 'full',
      showSpinnerMessageLabel: true,
      loginAnimation: true,
      cellsConnections: {
        in: {
          geo_open_control_veil: {
            bind: 'show'
          },
          geo_close_control_veil: {
            bind: 'hide'
          }
        }
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      className: nativeIos ? 'ios-top-padding' : '',
      disableScrollLock: true,
      hasFooter: true,
      footerFixed: true,
      footerHeight: doubleFooterHeight,
      headerFixed: true,
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg'
    },
    propertiesSpherica: {
      extraHeaderClass: ''
    }
  };
  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
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
  const geoDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-geolocation-dm',
    properties: {
      isIOS: nativeIos,
      native,
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlags'
          },
          global_set_app_settings: {
            bind: 'setPublicKeys'
          },
          [pageName + '_init_page']: {
            bind: 'initPage'
          },
          global_storage_get_loginData_success: {
            bind: 'loginDataLocalStoreSuccess'
          },
          [pageName + '_consent_success']: {
            bind: 'consentSuccess'
          },
          [pageName + '_consent_error']: {
            bind: 'consentError'
          },
          [pageName + '_privace_button_pressed']: {
            bind: 'showModalPrivacy'
          },
          [pageName + '_button-see-more-information']: {
            bind: 'seeMoreInformation'
          },
          [pageName + '_accept_geolocation']: {
            bind: 'evaluateConsentSaved'
          },
          global_storage_get_consent_value_data_success: {
            bind: 'getStorageConsentDataSuccess'
          },
          global_storage_set_consent_value_data_error: {
            bind: 'setStorageConsentDataError'
          },
          global_storage_get_consent_value_data_error: {
            bind: 'getStorageConsentDataError'
          },
          [pageName + '_save_permission_success']: {
            bind: 'savePermissionSuccess'
          },
          [pageName + '_error_on_request']: {
            bind: 'sendSignOff'
          },
          [pageName + '_geolocation_is_saved']: {
            bind: 'geolocationComplete'
          },
          [pageName + '_geolocation_saved_error']: {
            bind: 'modalTimeOut'
          },
          [pageName + '_repeat_permission']: {
            bind: 'getPermissionGeolocation'
          },
          [pageName + '_show_alert_modal_geolocation']: {
            bind: 'modalTimeOut'
          },
          [pageName + '_accept_go_to_configurations']: {
            bind: 'sendToConfigurations'
          },
          [pageName + '_configuration_ios']: {
            bind: 'sendToGpsConfiguratons'
          },
          [pageName + '_retry_get_location']: {
            bind: 'geolocationCurrentPosition'
          },
          [pageName + '_logout_on_retry']: {
            bind: 'sendSignOff'
          },
          cancel_button_settings_dialog: {
            bind: 'geolocationPermissionRejected'
          },
          geolocation_sign_close_modal: {
            bind: 'resetServiceLaunched'
          },
          geolocation_repeat_permission: {
            bind: 'modalFirmButtonDeny'
          },
          geolocation_accept_go_to_configurations: {
            bind: 'modalFirmButtonDeny'
          },
          geolocation_configuration_ios: {
            bind: 'modalFirmButtonDeny'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'send-alert-manager-settings'
          },
          geo_show_message_viel: {
            bind: 'viel-message'
          },
          geo_open_control_veil: {
            bind: 'show-spinner-text-event'
          },
          geo_close_control_veil: {
            bind: 'hide-spinner-text-event'
          },
          global_alert_modal_close: {
            bind: 'close-modal'
          },
          [pageName + '_set_secondary_buttons']: {
            bind: 'button-continue-privacy'
          },
          [pageName + '_set_know_button']: {
            bind: 'button-know-more'
          },
          [pageName + '_set_information_location']: {
            bind: 'set-initial-information'
          },
          [pageName + '_set_information_location_analytics']: {
            bind: 'set-initial-information-analytics',
            analytics: getAnalytic('geolocation', 'common', literals.commons.givePermission)
          },
          [pageName + '_set_information_location_header']: {
            bind: 'set-initial-header'
          },
          [pageName + '_set_data_managger']: {
            bind: 'privacy-geolocation',
            analytics: getAnalytic('geolocation', 'common', literals.commons.privacyNotice)
          },
          [pageName + '_customer_id']: {
            bind: 'set-customer-id-consent'
          },
          [pageName + '_verify_consent']: {
            bind: 'consult-consent-geo'
          },
          [pageName + '_client_id']: {
            bind: 'client-id-geo'
          },
          global_get_from_storage: {
            bind: 'get-native-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-permission-accepted-on-local-storage'
          },
          [pageName + '_request_save_permission']: {
            bind: 'save-permission',
            analytics: getAnalytic('geolocation', 'withLevel3', literals.commons.otp, literals.commons.otpToken)
          },
          [pageName + '_request_geolocation']: {
            bind: 'save-geolocation'
          },
          [pageName + '_active_location_modal']: {
            bind: 'show-geolocation-location-modal',
            analytics: getAnalytic('geolocation.locationError', 'error', literals.errors.dueDenial)
          },
          [pageName + '_active_location_modal_gps']: {
            bind: 'show-geolocation-location-modal-gps',
            analytics: getAnalytic('geolocation.GPSError', 'error', literals.errors.disabledGps)
          },
          [pageName + '_active_gps_ios']: {
            bind: 'show-location-not-active-ios-modal',
            analytics: getAnalytic('geolocation.GPSError', 'error', literals.errors.disabledGps)
          },
          [pageName + '_app_button_deny']: {
            bind: 'firm-button-deny',
            analytics: getAnalytic('geolocation.location', 'internalLevel2', literals.errors.dueDenial, '', literals.commons.enableLocation)
          },
          global_landing_page_manager_next_flow: {
            bind: 'continue-app'
          },
          global_action_launcher_uri: {
            bind: 'glomo-geolocation-open-uri'
          },
          global_open_uri: {
            bind: 'request-location-tips'
          },
          modal_logout_automatic: {
            bind: 'logout-geolocation'
          },
          show_settings_dialog: {
            bind: 'open-device-permissions-settings-modal',
            'forward-to-native': true
          }
        },
        params: {
          contactId: 'contactId'
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'send-alert-manager-settings'
            },
            geolocation_logout_on_retry: {
              bind: 'alert-logout-app-accept'
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
  const globalApiCustomer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      cellsConnections: {
        in: {
          [pageName + '_customer_id']: {
            bind: 'customerId'
          },
          [pageName + '_request_save_permission']: {
            bind: 'postCustomerTerms'
          }
        },
        out: {
          [pageName + '_save_permission_success']: {
            bind: 'post-customer-terms'
          },
          [pageName + '_error_on_request']: {
            bind: 'error-on-post-customer-terms'
          }
        }
      }
    }
  };
  const globalApiEvidences = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-evidences',
    properties: {
      host: CONFIG.globalServices.host,
      native,
      evidencesApiVersion: CONFIG.globalServices.versions.listEvidences,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [pageName + '_client_id']: {
            bind: 'clientId'
          },
          [pageName + '_verify_consent']: {
            bind: 'getListEvidences'
          }
        },
        out: {
          [pageName + '_consent_success']: {
            bind: 'success-on-get-list-evidences'
          },
          [pageName + '_consent_error']: {
            bind: 'error-on-get-list-evidences'
          }
        }
      }
    }
  };
  const globalApisGeolocation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-geolocation',
    properties: {
      host: CONFIG.globalServices.host,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native,
      sessionApiVersion: CONFIG.globalServices.versions.sessionsV1,
      cellsConnections: {
        in: {
          [pageName + '_request_geolocation']: {
            bind: 'saveGeolocation'
          }
        },
        out: {
          [pageName + '_geolocation_is_saved']: {
            bind: 'success-geolocation-saved'
          },
          [pageName + '_geolocation_saved_error']: {
            bind: 'error-save-geolocation'
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      clasName: 'header--geolocation',
      cellsConnections: {
        in: {
          [pageName + '_set_information_location_header']: {
            bind: 'setProperties'
          }
        }
      }
    }
  };
  const pageContent = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-card-advice',
    tagSpherica: 'cells-card-advice-spherica',
    properties: {
      className: 'image-m',
      isBackgroundLight: true,
      cellsConnections: {
        in: {
          [pageName + '_set_information_location']: {
            bind: 'setProperties'
          }
        },
        out: {
          [pageName + '_button-see-more-information']: {
            bind: 'card-advice-link-click',
            analytics: getAnalytic('geolocation.knowMore', 'externalLinkLevel2', literals.commons.givePermission, '', '', literals.commons.iWantToKnowMoreBbva)
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      align: 'center',
      sizeImage: '2XL'
    }
  };
  const footerActionConfirmBtn = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    tagSpherica: 'cells-confirm-buttons-spherica',
    properties: {
      cellsConnections: {
        in: {
          [pageName + '_set_secondary_buttons']: {
            bind: 'setProperties'
          }
        },
        out: {
          [pageName + '_accept_geolocation']: {
            bind: 'cells-confirm-buttons-click-primary'
          },
          [pageName + '_privace_button_pressed']: {
            bind: 'cells-confirm-buttons-click-secondary'
          }
        }
      }
    },
    propertiesSpherica: {
      hideDivider: true
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: `/${pageName}`
    },
    pages,
    template,
    components: [
      bbvaProgressContent,
      header,
      handleLifeCycle,
      geoDm,
      globalApiCustomer,
      globalApiEvidences,
      globalApisGeolocation,
      pageContent,
      footerActionConfirmBtn
    ]
  };
  if (isSpherica) {
    base.components.push(alertManager);
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  const connectionsOutComponent = connectionsOut(base);
  addOutStorageChannels(base.components, ['consent_value_data', 'customerbiocatch'], CONFIG);
  signConnector('cells-dm-global-apis-customers-bgadpmock', pageName, ['post-customer-terms', 'error-on-post-customer-terms']);
  connectionsOutComponent('cells-sign-operation-dm-mx').geolocation_sign_close_modal = { bind: `signature-cancel-${pageName}` };
  return sphericaPageUtils.spherize(base);
};
