module.exports = CONFIG => {
  const pageName = 'aboutInfo';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const _localStorage = require('./common/_local-storage');
  const {bbvaNativeConnectorDeviceInfo} = require('./common/nativeconnector/_deviceInfo.js');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);

  const {
    globalServices: {
      requiredToken = 'tsec'
    },
    nativeIos
  } =  CONFIG;

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_aboutInfo: {
            bind: 'init'
          }
        },
        out: {
          about_info_device_init_page: {
            bind: 'init-page'
          },
          global_nativeconnector_device_info_get_patform: {
            bind: 'init-page'
          },
          global_nativeconnector_device_info_get_model: {
            bind: 'init-page'
          },
          global_nativeconnector_device_info_get_app_version: {
            bind: 'init-page'
          },
          global_storage_check_mobile_services: {
            bind: 'init-page'
          },
          about_info_device_reset: {
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

  const featureAboutMx = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-feature-about-mx',
    tagSpherica: 'bbva-feature-about-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-about-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-about-mx-spherica',
    render: 'litElement',
    properties: {
      appImage: './images/apps/bbva-logo.png',
      capitalizeAndroidPlatform: true,
      cellsConnections: {
        in: {
          about_info_device_init_page: {
            bind: 'init'
          },
          global_nativeconnector_device_info_get_patform_success: {
            bind: 'deviceInfoPlatform'
          },
          global_nativeconnector_device_info_get_model_success: {
            bind: 'deviceInfoModel'
          },
          global_nativeconnector_device_info_error: {
            bind: 'setErrorFromDeviceInfo'
          },
          global_nativeconnector_device_info_get_app_version_success: {
            bind: 'appVersion'
          },
          global_storage_get_mobile_services_success: {
            bind: 'mobileServices'
          },
          global_storage_get_mobile_services_error: {
            bind: 'mobileServices'
          }
        },
        out: {
          navigation_about_info_to_previous_page: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      appImage: './images/spherica/apps/bbva-logo.svg'
    }
  };

  const base = {
    hash: 'about-info',
    currentPage: {
      url: '/about-info'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'horizontal',
        disableEdgeSwipe: true,
        headerFixed: true,
        disableScrollLock: true,
        extraHeaderClass: 'dark-blue-bg',
        headerHeight: 0,
        iOSFixedHeader: nativeIos
      },
      propertiesSpherica: {
        className: 'bg-light-grey',
        extraHeaderClass: ''
      }
    },
    components: [
      lifeCycle,
      featureAboutMx,
      bbvaNativeConnectorDeviceInfo
    ]
  };

  _localStorage.addOutStorageChannels(base.components, [ 'mobile_services' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};