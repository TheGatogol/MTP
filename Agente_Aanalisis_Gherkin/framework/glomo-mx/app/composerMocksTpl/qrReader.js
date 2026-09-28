'use strict';

module.exports = CONFIG => {
  const PAGENAME = 'qrReader';
  const utils = require('./common/helpers/_utils');
  const { QR_READER_SCREEN_CONFIG } = require('./common/helpers/_constants');
  const PAGES = require('./common/helpers').getPages(CONFIG)(PAGENAME);
  const isNativeIos = CONFIG.nativeIos || false;
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.properties.cellsConnections.in.qr_reader_open_control_veil = {
    bind: 'openVeil'
  };
  SPINNER.properties.cellsConnections.in.qr_reader_close_control_veil = {
    bind: 'closeVeil'
  };
  SPINNER.properties.cellsConnections.in.navigation_qr_reader_to_page = {
    bind: 'closeVeil'
  };
  const base = {
    hash: 'mx-qr-reader',
    currentPage: {
      url: `/${PAGENAME}`,
      params: []
    },
    pages: PAGES,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        footerHeight: 1,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: 'cells-template-qrReader ' + (isNativeIos ? 'ios-top-padding' : ''),
        cellsConnections: {
          in: {},
          out: {
            qr_reader_scroll_bottom: {
              bind: 'set-scroll-bottom-event'
            },
            qr_reader_scroll: {
              bind: 'template-content-scroll'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGENAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_qrReader: {
                bind: 'init'
              }
            },
            out: {
              qr_reader_reset_page: {
                bind: 'reset'
              },
              qr_reader_init_page: {
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
        properties: {
          className: 'header--core',
          cellsConnections: {
            in: {
              qr_reader_manager_header_left_icon: {
                bind: 'leftIcon'
              },
              qr_reader_manager_header_right_secondary_icon: {
                bind: 'rightSecondaryIcon'
              },
              qr_reader_manager_header_right_secondary_icon_action: {
                bind: 'rightSecondaryIconAction'
              },
              qr_reader_manager_header_title_name: {
                bind: 'titleName'
              },
              qr_reader_manager_header_continue: {
                bind: 'continue'
              }
            },
            out: {
              navigation_qr_reader_to_page: {
                bind: 'click-left-button',
                backStep: true
              },
              qr_reader_manager_header_right_button: {
                bind: 'click-right-button'
              },
              qr_reader_manager_header_secondary_icon: {
                bind: 'click-secondary-icon'
              }
            }
          }
        }
      }
    ]
  };

  const qrReader = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-qr-reader',
    properties: {
      targetPath: './images/qr/qr-scanner-target.svg',
      targetMessage: 'glomo-gp2-qr-reader-bottom-text',
      cellsConnections: {
        in: {
          qr_reader_init_qr_reader: {
            bind: 'initQrReader'
          },
          qr_reader_manager_qr_reader_primary_button: {
            bind: 'primaryButton'
          },
          qr_reader_manager_qr_reader_target_path: {
            bind: 'targetPath'
          },
          qr_reader_manager_qr_reader_hide_gallery_button: {
            bind: 'hideGalleryButton'
          },
          qr_reader_reset_page: {
            bind: 'stopStreamedVideo'
          },
          qr_reader_gallery_picture: {
            bind: 'decodePicture'
          },
          qr_reader_manager_reader_visibility_hidden: {
            bind: 'changeMediaVisibility'
          },
          qr_reader_manager_disable_camera: {
            bind: 'toggleQrCapture'
          },
          qr_reader_target_message: {
            bind: 'targetMessage'
          }
        },
        out: {
          qr_reader_result: {
            bind: 'cells-qr-reader-result'
          },
          qr_reader_gallery_access: {
            bind: 'cells-qr-reader-open-gallery'
          },
          qr_reader_result_from_image: {
            bind: 'cells-qr-reader-result-from-image'
          },
          qr_reader_result_qr_not_found: {
            bind: 'cells-qr-reader-qr-not-found'
          },
          error_permissions_camera: {
            bind: 'error-on-obtain-camera'
          }
        }
      }
    }
  };

  const manager = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-qr-gp2horus-manager',
    properties: {
      country: 'mx',
      isNative: CONFIG.native,
      native: !!CONFIG.native,
      isIos: isNativeIos,
      host: CONFIG.qrReader.host,
      screenConfig: QR_READER_SCREEN_CONFIG,
      complementaryKey: CONFIG.qrReader.complementaryKey,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          qr_reader_init_page: {
            bind: 'manageQrReaderAccess'
          },
          qr_reader_gallery_access: {
            bind: 'getPictureWithConfig'
          },
          qr_reader_result_qr_not_found: {
            bind: 'handleErrorMessages'
          },
          qr_read_successfully: {
            bind: 'saveQrCodeRead'
          },
          qr_reader_camera_permission_check_state_success: {
            bind: 'handleCheckStateCameraPermissions'
          },
          qr_reader_camera_permission_request_error: {
            bind: 'handleErrorOnCameraPermissionRequest'
          },
          qr_reader_camera_permission_check_state_error: {
            bind: 'handleErrorOnCameraPermissionRequest'
          },
          qr_processor_qr_read_successfully: {
            bind: 'getQRURL'
          },
          qr_processor_invalid_qr: {
            bind: 'handleErrorMessages'
          },
          qr_processor_camera_not_authorized: {
            bind: 'handleCheckStateCameraPermissions'
          },
          qr_processor_close_button_pressed: {
            bind: 'closeButtonPressed'
          },
          qr_processor_info_button_pressed: {
            bind: 'infoButtonPressed'
          },
          qr_processor_tabbar_button_pressed: {
            bind: 'tabbarButtonPressed'
          },
          qr_reader_result: {
            bind: 'getQRURL'
          },
          error_permissions_camera: {
            bind: 'handleErrorOnCameraPermissionRequest'
          },
          qr_reader_manager_header_secondary_icon: {
            bind: 'infoButtonPressed'
          },
          global_set_app_settings: {
            bind: 'setupKey'
          }
        },
        out: {
          qr_reader_redirect_to: {
            bind: 'qr-redirect-to',
            backStep: true,
            link: {
              page: {
                bind: 'page'
              },
              params: {
                qr: 'qr'
              }
            }
          },
          qr_reader_contained_data: {
            bind: 'qr-contained-data'
          },
          qr_reader_manager_reader_request_camera_permissions: {
            bind: 'grant-mobile-permission'
          },
          qr_reader_manager_reader_show_qr_welcome: {
            bind: 'glomo-qr-gp2horus-manager-show-qr-welcome',
            link: {
              page: 'qrWelcome'
            }
          },
          qr_reader_manager_reader_visibility_hidden: {
            bind: 'glomo-payment-by-qr-manager-reader-hidden'
          },
          qr_reader_manager_generator_visibility_hidden: {
            bind: 'glomo-payment-by-qr-manager-generator-hidden'
          },
          qr_reader_manager_generator_get_picture_with_config: {
            bind: 'glomo-qr-gp2horus-manager-get-picture-with-config'
          },
          qr_reader_manager_close_error: {
            bind: 'glomo-qr-reader-close-error'
          },
          qr_reader_manager_disable_camera: {
            bind: 'glomo-qr-gp2horus-manager-camera-enabled'
          },
          qr_reader_manager_reader_check_camera_permissions: {
            bind: 'check-mobile-permission'
          },
          navigate_to_qr_processor_native_component: {
            bind: 'ios-native-screen',
            'forward-to-native': true
          },
          close_qr_processor_native_component: {
            bind: 'close-ios-native-screen',
            'forward-to-native': true
          },
          close_control_veil: {
            bind: 'glomo-qr-gp2horus-manager-back',
            backStep: true
          },
          qr_reader_init_qr_reader: {
            bind: 'camera-granted'
          },
          qr_reader_manager_code_process: {
            bind: 'glomo-qr-gp2horus-manager-code-process'
          },
          global_qr_reader_manager_show_error: {
            bind: 'glomo-qr-gp2horus-manager-show-error'
          },
          qr_reader_manager_header_class_name: {
            bind: 'header-class-name'
          },
          qr_reader_manager_header_left_icon: {
            bind: 'header-left-icon'
          },
          qr_reader_manager_header_right_secondary_icon: {
            bind: 'header-right-secondary-icon'
          },
          qr_reader_manager_header_right_secondary_icon_action: {
            bind: 'header-right-secondary-icon-action'
          },
          qr_reader_manager_header_title_name: {
            bind: 'header-title-name'
          },
          qr_reader_manager_header_continue: {
            bind: 'header-continue'
          },
          qr_reader_manager_qr_reader_primary_button: {
            bind: 'qr-reader-primary-button'
          },
          qr_reader_manager_qr_reader_target_path: {
            bind: 'qr-reader-target-path'
          },
          qr_reader_manager_qr_reader_hide_gallery_button: {
            bind: 'qr-reader-hide-gallery-button'
          },
          qr_reader_open_control_veil: {
            bind: 'open-control-veil'
          },
          qr_reader_manager_close_button_header: {
            bind: 'close-button-header',
            link: {
              page: {
                bind: 'page'
              },
              cleanUntil: 'qrReader'
            }
          },
          qr_reader_manager_info_button_header: {
            bind: 'info-button-header',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          qr_reader_manager_tabbar_button: {
            bind: 'tabbar-button',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          qr_reader_manager_info_button_header_android: {
            bind: 'info-button-header-android',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          qr_reader_close_control_veil: {
            bind: 'close-control-veil'
          }
        },
        params: {
          source: 'source'
        }
      }
    }
  };

  const mediaCaptureConnector = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-mediacapture',
    properties: {
      cellsConnections: {
        in: {
          qr_reader_manager_generator_get_picture_with_config: {
            bind: 'getPictureFromGallery'
          }
        },
        out: {
          qr_reader_gallery_picture: {
            bind: 'get-picture-success'
          }
        }
      }
    }
  };

  const mobilePermissionsConnector = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-permissions-plugin',
    properties: {
      cellsConnections: {
        in: {
          qr_reader_manager_reader_check_camera_permissions: {
            bind: 'checkState'
          },
          qr_reader_manager_reader_request_camera_permissions: {
            bind: 'request'
          }
        },
        out: {
          qr_reader_init_qr_reader: {
            bind: 'permissions-request-success'
          },
          qr_reader_camera_permission_check_state_success: {
            bind: 'permissions-check-state-success'
          },
          qr_reader_camera_permission_request_error: {
            bind: 'permissions-request-error'
          },
          qr_reader_camera_permission_check_state_error: {
            bind: 'permissions-check-state-error'
          }
        }
      }
    }
  };

  const nativeSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          global_qr_reader_camera_permission_error_accept: {
            bind: 'openSetting'
          }
        },
        out: {}
      }
    }
  };

  base.components.push(manager);
  if (CONFIG.native) {
    base.components.push(mobilePermissionsConnector);
    base.components.push(mediaCaptureConnector);
    base.components.push(nativeSettings);
  }
  if (!isNativeIos) {
    base.components.push(qrReader);
  }

  return base;
};
