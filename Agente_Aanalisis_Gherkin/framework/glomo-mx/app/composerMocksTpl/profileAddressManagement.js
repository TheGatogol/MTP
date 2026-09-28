'use strict';
module.exports = CONFIG => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: {
      customersV1: customersApiVersionV1,
      geographicPlaces: geographicPlacesV0,
      customerDocumentsV1: customerDocumentsV1,
      documentTypes: docuementTypeVersion0
    }
    },
    native = false,
    nativeIos = false
  } = CONFIG;

  const { createPrefixFromPageName, useNames } = require('./common/helpers/_utils');
  const pageName = 'profileAddressManagement';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const prefixPage = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(prefixPage);
  const analytics = require('./analytics/_profileAddressManagement.js')();
  const base = {
    hash: pageName,
    currentPage: {
      url: '/profile-address-management'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        className: nativeIos ? 'ios-top-padding' : '',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        fixOffsetScroll: 0,
        handleStoppedScroll: true,
        delayScroll: 0,
        cellsConnections: {
          in: {
            profile_address_management_recalculate_status_bar_top: {
              bind: 'recalculateStatusBarTop'
            }
          }
        }
      }
    },
    components: []
  };
  const bbvaProfileAddressManagement = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-feature-profile-postal-address-management',
    tagSpherica: 'bbva-feature-profile-postal-address-management-spherica',
    familyPath: '@glomo-web-components/bbva-feature-profile-postal-address-management',
    familyPathSpherica: '@glomo-web-components/bbva-feature-profile-postal-address-management-spherica',
    render: 'litElement',
    country: 'mx',
    isNativeIOS: nativeIos,
    properties: {
      bindedLiterals: analytics.bindedLiterals,
      host,
      requiredToken,
      customersApiVersionV1,
      native,
      geographicPlacesV0,
      customerDocumentsV1,
      docuementTypeVersion0,
      cellsConnections: {
        in: {
          [getChannelName('initialization')]: {
            bind: 'init'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          global_user_id: {
            bind: 'customerId'
          },
          proceedings_send_analytics_to_address: {
            bind: 'handleProceedingsAnalytic'
          },
          navigation_profile_to_postal_address_management: {
            bind: 'handleProfileEntryPoint'
          },
          proceedings_navigation_to_address_validation_management: {
            bind: 'handleProceedingsData'
          },
          global_blue_update_address: {
            bind: 'handleProfileEntryPoint'
          },
          [getChannelName('check_state_success')]: {
            bind: 'handleCheckPermissionsSuccess'
          },
          [getChannelName('request_permissions_success')]: {
            bind: 'handleRequestPermissionsSuccess'
          },
          [getChannelName('request_permissions_error')]: {
            bind: 'handleRequestPermissionsError'
          },
          [getChannelName('get_picture_success')]: {
            bind: 'handleMediaCaptureSuccessResponse'
          },
          [getChannelName('get_picture_error')]: {
            bind: 'handleMediaCaptureErrorResponse'
          },
          [getChannelName('device_info_platform_success')]: {
            bind: 'handleMobileInfoSuccessResponse'
          },
          [getChannelName('file-fetcher-success')]: {
            bind: 'handleFileFetcherSuccessResponse'
          },
          [getChannelName('file-fetcher-error')]: {
            bind: 'handleFileFetcherErrorResponse'
          },
          __bridge_page_profileAddressManagement: {
            bind: 'bridgeReset'
          }
        },
        out: {
          [getChannelName('initialization')]: {
            bind: 'bbva-feature-profile-postal-address-management-initialization'
          },
          [getChannelName('check_state')]: {
            bind: 'bbva-feature-profile-postal-address-management-check-permissions'
          },
          [getChannelName('request_permissions')]: {
            bind: 'bbva-feature-profile-postal-address-management-request-permissions'
          },
          [getChannelName('lauch_media_capture')]: {
            bind: 'bbva-feature-profile-postal-address-management-launch-media-capture'
          },
          [getChannelName('get_mobile_platform')]: {
            bind: 'bbva-feature-profile-postal-address-management-mobile-platform'
          },
          [getChannelName('launch-file-fetcher')]: {
            bind: 'bbva-feature-profile-postal-address-management-launch-file-fetcher'
          },
          [getChannelName('open-file')]: {
            bind: 'bbva-feature-profile-postal-address-management-open-file'
          },
          [getChannelName('first_interaction')]: {
            bind: 'bbva-feature-postal-address-management-first-interaction'
          },
          [getChannelName('otp_step')]: {
            bind: 'signature-required-first-step-dm'
          },
          [getChannelName('success_modal')]: {
            bind: 'bbva-feature-profile-postal-address-management-success'
          },
          feature_profile_address_close_operative: {
            bind: 'bbva-feature-profile-postal-address-management-exit',
            backStep: true
          },
          address_send_data_proceedings: {
            bind: 'bbva-feature-profile-postal-address-management-proceedings-update-complete',
            link: {
              skipHistory: true,
              page: 'proceedings',
              cleanUntil: 'proceedings'
            }
          },
          [getChannelName('complete_receipt')]: {
            bind: 'bbva-feature-postal-address-management-complete-step-type-receipt'
          },
          [getChannelName('complete_form_step')]: {
            bind: 'bbva-feature-postal-address-management-complete-step-form'
          },
          [getChannelName('on_boarding_modal')]: {
            bind: 'bbva-feature-profile-postal-address-management-on-boarding-modal',
            analytics: analytics._getAdvancedFootprint('level2', 'informacion previa')
          },
          [getChannelName('select_receipt')]: {
            bind: 'bbva-feature-postal-address-management-select-receipt',
            analytics: analytics._getAdvancedFootprint('level2', 'comprobante')
          },
          [getChannelName('show_sources')]: {
            bind: 'bbva-feature-profile-postal-address-management-sources',
            analytics: analytics._getAdvancedFootprint('level3', 'comprobante', 'subir comprobante')
          },
          [getChannelName('source_camera_selected')]: {
            bind: 'bbva-feature-profile-postal-address-management-source-camera-selected',
            analytics: analytics._getInternalLink('tomar foto', 'subir comprobante')
          },
          [getChannelName('source_photo_library_selected')]: {
            bind: 'bbva-feature-profile-postal-address-management-source-photo-library-selected',
            analytics: analytics._getInternalLink('elegir de la galeria', 'subir comprobante')
          },
          [getChannelName('source_pdf_selected')]: {
            bind: 'bbva-feature-profile-postal-address-management-source-pdf-selected',
            analytics: analytics._getInternalLink('elegir archivo pdf', 'subir comprobante')
          },
          [getChannelName('photo_recommendations_modal')]: {
            bind: 'bbva-feature-profile-postal-address-management-photo-recommendations-modal',
            analytics: analytics._getAdvancedFootprint('level3', 'comprobante', 'recomendacion tomar foto')
          },
          [getChannelName('photo_receipt_error')]: {
            bind: 'bbva-feature-profile-postal-address-management-photo-receipt-error',
            analytics: analytics._getAdvancedFootprintError('error no se pudo leer comprobante')
          },
          profile_address_management_recalculate_status_bar_top: {
            bind: 'bbva-feature-postal-address-management-recalculate-status-bar-top'
          }
        }
      }
    }
  };
  const mobileDeviceinfo = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-device-info',
    familyPath: '@glomo-web-components/bbva-nativeconnector-device-info',
    render: 'litElement',
    properties: {
      pluginName: 'DeviceInfo',
      cellsConnections: {
        in: {
          [getChannelName('get_mobile_platform')]: {
            bind: 'getPlatform'
          }
        },
        out: {
          [getChannelName('device_info_platform_success')]: {
            bind: 'get-platform-success'
          }
        }
      }
    }
  };
  const mobilePermissionsPlugin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-permissions-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-permissions-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('check_state')]: {
            bind: 'checkState'
          },
          [getChannelName('request_permissions')]: {
            bind: 'request'
          }
        },
        out: {
          [getChannelName('check_state_success')]: {
            bind: 'permissions-check-state-success'
          },
          [getChannelName('request_permissions_success')]: {
            bind: 'permissions-request-success'
          },
          [getChannelName('request_permissions_error')]: {
            bind: 'permissions-request-error'
          }
        }
      }
    }
  };
  const mediacapturePlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-media-capture',
    familyPath: '@glomo-web-components/bbva-nativeconnector-media-capture',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('lauch_media_capture')]: {
            bind: 'getPicture'
          }
        },
        out: {
          [getChannelName('get_picture_success')]: {
            bind: 'get-picture-success'
          },
          [getChannelName('get_picture_error')]: {
            bind: 'get-picture-error'
          }
        }
      }
    }
  };
  const filefetcherPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-file-fetcher-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-file-fetcher-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('launch-file-fetcher')]: {
            bind: 'fileFetch'
          }
        },
        out: {
          [getChannelName('file-fetcher-success')]: {
            bind: 'file-fetch-success'
          },
          [getChannelName('file-fetcher-error')]: {
            bind: 'error'
          }
        }
      }
    }
  };
  const openDocumentPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-open-document',
    familyPath: '@glomo-web-components/bbva-nativeconnector-open-document',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open-file')]: {
            bind: 'openByBase64'
          }
        },
        out: {
          [getChannelName('open-file-success-response')]: {
            bind: 'open-document-open-by-base64-success'
          }
        }
      }
    }
  };
  const analyticsProfileAddressManagementMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-profile-address-management-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      appStartedText: '',
      dynamicMethodsName: [ 'fireAppCustomStep' ],
      cellsConnections: {
        in: {
          [pageName + '_init_page']: {
            bind: 'buildDynamicMethods'
          },
          feature_profile_address_close_operative: {
            bind: 'resetData'
          },
          navigation_profile_to_postal_address_management: {
            bind: 'manageAppOnClickStart'
          },
          [getChannelName('complete_receipt')]: {
            bind: 'manageAppPageVisit'
          },
          [getChannelName('first_interaction')]: {
            bind: 'fireAppStarted'
          },
          [getChannelName('complete_form_step')]: {
            bind: 'fireAppCustomStep'
          },
          [getChannelName('otp_step')]: {
            bind: 'manageOtpStep'
          },
          [getChannelName('success_modal')]: {
            bind: 'manageAppCompleted'
          }
        },
        out: {
          [getChannelName('app_on_click_start')]: {
            bind: 'analytics-app-on-click-start',
            analytics: analytics.appOnClickStart
          },
          [getChannelName('app_started')]: {
            bind: 'analytics-app-started',
            analytics: analytics.appStarted
          },
          [getChannelName('app_page_visit')]: {
            bind: 'analytics-page-visit',
            analytics: analytics.appVisit
          },
          [getChannelName('app_step_form')]: {
            bind: 'analytics-fire-app-custom-step',
            analytics: analytics._getAppStep('2', '2 confirmacion', '2 confirmacion')
          },
          [getChannelName('custom_otp')]: {
            bind: 'bbva-feature-profile-postal-address-management-analytics-custom-otp',
            analytics: analytics._getAppStep('3', '3 otp', '3 otp')
          },
          [getChannelName('app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          }
        }
      }
    }
  };
  base.components.push(
    bbvaProfileAddressManagement,
    mobilePermissionsPlugin,
    mediacapturePlugin,
    analyticsProfileAddressManagementMx,
    mobileDeviceinfo,
    filefetcherPlugin,
    openDocumentPlugin
  );
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-profile-postal-address-management');
  return sphericaPageUtils.spherize(base);
};
