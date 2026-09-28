'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const { disconnectedBanner, cellsConnectionStatus } = require('./common/_cross-components');
  // eslint-disable-next-line no-unused-vars
  const COUNTRY = utils.getCountry(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'profileAvatar';
  const pages = require('./common/_pages')(CONFIG)('profileAvatar');


  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'horizontal',
      disableEdgeSwipe: true,
      headerFixed: true,
      disableScrollLock: true,
      extraHeaderClass: '',
      headerHeight: utils.headerHeight,
      iOSFixedHeader: true,
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
      cellsConnections: {
        in: {},
        out: {}
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'profileAvatar',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_profileAvatar: {
            bind: 'init'
          }
        },
        out: {
          profile_avatar_reset_page: {
            bind: 'reset'
          },
          profile_avatar_init_page: {
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
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header-spherica',
    properties: {
      className: '',
      leftIcon: 'coronita:back-mini',
      titleName: 'cells-header-title-profile',
      variant: 'primary-alt',
      leftIconText: 'bbva-header-main-return-aria-label',

      cellsConnections: {
        in: {},
        out: {
          navigation_profile_avatar_to_page: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    }
  };
  const navigation = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      continue: 'profile',
      cellsConnections: {
        in: {
          navigation_profile_avatar_to_continue: {
            bind: 'navigate'
          },
          profile_avatar_cancel_image_to_post: {
            bind: 'navigate'
          }
        },
        out: {
          navigation_profile_avatar_to_profile: {
            bind: 'navigation-to-profile',
            backStep: true
          }
        }
      }
    }
  };

  const manageMediaFiles = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-manage-media-files-spherica',
    properties: {
      elementsClassName: 'btn-left',
      showIcon: true,
      showLeftIcon: true,
      showInfoBox: true,
      accept: 'image/jpg, image/jpeg, image/png',
      className: 'blue-disabled',
      openNativeMedia: !!CONFIG.nativeShell,
      descriptionParagraph: 'cells-manage-media-files-paragraph-mx-spherica',
      showDeleteOption: false,
      disableDeleteOptionOnEmptyDocument: true,
      onPictureErrorEventDetail: {
        code: 'AVATAR-GET-PICTURE-ERROR',
        selectedConfig: {
          className: 'error',
          openMaximized: false,
          hideCloseIcon: true,
          acceptBtLabel: 'glomo-error-on-native-plugin-exit',
          template: {
            type: 'paragraphs',
            values: [
              { icon: 'coronita:alert' },
              { text: 'glomo-error-on-native-plugin-try-later-message' }
            ]
          }
        }
      },
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'globalCacheStorage'
          },
          profile_avatar_check_permissions_success: {
            bind: 'onCheckPermissionSuccess'
          },
          profile_avatar_check_permissions_error: {
            bind: 'onCheckPermissionError'
          },
          profile_avatar_request_permissions_success: {
            bind: 'onPermissionGranted'
          },
          profile_avatar_request_permissions_error: {
            bind: 'onRequestPermissionError'
          },
          profile_avatar_error_on_picture: {
            bind: 'processPictureError'
          },
          profile_avatar_accept_image_to_post: {
            bind: 'requestPostAvatarByFile'
          }
        },
        out: {
          profile_open_native_settings: {
            bind: 'open-native-settings'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'error-on-picture'
          },
          profile_avatar_check_native_permissions: {
            bind: 'check-source-permission'
          },
          profile_avatar_request_native_permission: {
            bind: 'request-native-permission'
          },
          profile_avatar_get_native_picture: {
            bind: 'open-native-media'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_profile_avatar_get_picture_error: {
            bind: 'error-on-picture'
          },
          show_settings_dialog: {
            bind: 'go-to-settings-modal',
            'forward-to-native': true
          },
          recibir_customer_id: {
            bind: 'send-customer-id'
          },
          post_avatar_service_generate: {
            bind: 'post-avatar-service-generate'
          },
          message_toast_post_succes_avatar: {
            bind: 'toast-messsage-succes-avatar'
          },
          message_toast_post_error_avatar: {
            bind: 'toast-message-error-avatar'
          },
          navigation_previos_page: {
            bind: 'back-to-profile',
            backStep: true
          }
        }
      }
    }
  };
  const mobilePermissionsPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-permissions-plugin',
    properties: {
      cellsConnections: {
        in: {
          profile_avatar_check_native_permissions: {
            bind: 'checkState'
          },
          profile_avatar_request_native_permission: {
            bind: 'request'
          }
        },
        out: {
          profile_avatar_check_permissions_success: {
            bind: 'permissions-check-state-success'
          },
          profile_avatar_check_permissions_error: {
            bind: 'permissions-check-state-error'
          },
          profile_avatar_request_permissions_success: {
            bind: 'permissions-request-success'
          },
          profile_avatar_request_permissions_error: {
            bind: 'permissions-request-error'
          }
        }
      }
    }
  };
  const mediaCapturePlugin = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-mobile-mediacapture',
    properties: {
      cellsConnections: {
        in: {
          profile_avatar_get_native_picture: {
            bind: 'getPicture'
          }
        },
        out: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'cells-mobile-mediacapture-error'
          },
          profile_avatar_picture_available: {
            bind: 'get-picture-success'
          },
          profile_avatar_error_on_picture: {
            bind: 'get-picture-error'
          },
          profile_avatar_error_on_picture_no_plugin: {
            bind: 'cells-mobile-mediacapture-error'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };
  const changeAvatarModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-change-avatar-modal-spherica',
    properties: {
      cellsModalAlertBoxClass: 'blue-header',
      openNativeMedia: CONFIG.nativeShell,
      iOSFixedHeader: true,
      extraHeaderClass: 'bbva-core-blue',
      modalTitle: 'glomo-profile-avatar-selected-file-title-spherica',
      acceptButtonLabel: 'glomo-profile-avatar-profile-changed-success-button',
      nativeMediaConfig: {
        quality: 50,
        scaleType: 'maxWeight',
        scaleRate: 100000
      },
      cellsConnections: {
        in: {
          profile_avatar_reset_page: {
            bind: 'reset'
          },
          profile_avatar_init_page: {
            bind: 'reset'
          },
          global_profile_avatar_fetch_avatar_error: {
            bind: 'reset'
          },
          profile_avatar_picture_available: {
            bind: 'avatar'
          },
          profile_avatar_post_avatar_success: {
            bind: 'close'
          },
          navigation_profile_avatar_to_page: {
            bind: 'close'
          },
          navigation_profile_avatar_to_avatar: {
            bind: 'close'
          },
          navigation_profile_avatar_to_avatar_on_delete: {
            bind: 'close',
            backStep: true
          },
          profile_avatar_get_native_picture: {
            bind: 'close'
          }
        },
        out: {
          profile_avatar_accept_image_to_post: {
            bind: 'change-avatar-on-click-accept',
            link: {
              cleanUntil: 'profile',
              page: 'profile',
              skipHistory: true
            }
          },
          profile_avatar_cancel_image_to_post: {
            bind: 'change-avatar-on-click-cancel',
            backStep: true
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          profile_avatar_get_native_picture: {
            bind: 'open-native-media'
          }
        }
      }
    }
  };

  const successToastSpherica = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'cells-bottom-modal-message-spherica',
    properties: {
      message: 'glomo-profile-avatar-success-change',
      icon: 'coronita:right',
      iconSize: '24',
      type: 'success',
      cellsConnections: {
        in: {
          post_avatar_response_success: {
            bind: 'open'
          }
        }
      }
    }
  };

  const customersDMAPI = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: '1',
      customersAvatarApiVersion: '1',
      headers: { 'Content-Type': 'multipart/form-data' },
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          recibir_customer_id: {
            bind: 'setProperties'
          },
          post_avatar_service_generate: {
            bind: 'postAvatar'
          }
        },
        out: {
          post_avatar_response_success: {
            bind: 'post-avatar-success'
          },
          post_avatar_response_error: {
            bind: 'error-on-post-avatar'
          }
        }
      }
    }
  };

  const cellsMobileNativeSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          profile_open_native_settings: {
            bind: 'openSetting'
          }
        }
      }
    }
  };

  const base = {
    hash: 'profileAvatar',
    currentPage: {
      url: '/profile-avatar',
      params: []
    },
    pages: pages,
    template: template,
    components: [
      lifeCycle,
      header,
      navigation,
      manageMediaFiles,
      changeAvatarModal,
      customersDMAPI,
      successToastSpherica
    ]
  };
  if (CONFIG.native) {
    base.components.push(mobilePermissionsPlugin);
    base.components.push(mediaCapturePlugin);
    base.components.push(cellsMobileNativeSettings);
  }

  base.components.push(disconnectedBanner(PAGE_NAME), cellsConnectionStatus(PAGE_NAME));
  return base;

};
