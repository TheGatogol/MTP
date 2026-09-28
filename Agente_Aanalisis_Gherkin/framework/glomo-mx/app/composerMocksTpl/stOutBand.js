/* eslint-disable max-statements */
'use strict';
module.exports = CONFIG => {
  const {
    SPINNER: getSpinner,
    SPINNERSPHERICA: getSpinnerSpherica,
    setProperty,
    connectionsIn,
    useNames,
    toUnderscoreCase,
    setPropertiesSpherica,
    connectionsInSpherica
  } = require('./common/helpers/_utils');
  const pageName = 'stOutBand';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const operativePrefix = toUnderscoreCase(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalChannelName = channel => 'global_' + getChannelName(channel);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { nativeIos: isNativeIos = false, native: isNative = false } = CONFIG;
  const { merge, bbvaQrPluginConfigs } = require('./common/helpers');
  let setPropertyComponent = {};
  let connectionsInComponent = {};
  const tagSpherica = isSpherica ? '-spherica' : '';
  const getLinkList = [
    {
      id: 'instantSecurity',
      loading: false,
      disabled: false,
      titleHeader: 'soft-token-out-band-link-header-security',
      description: 'soft-token-out-band-link-description-security',
      dividerBottom: 'full',
      data: {
        type: 'otpSimple',
        page: 'stSecurityCode'
      }
    },
    {
      id: 'qrSecurity',
      loading: false,
      disabled: false,
      titleHeader: 'soft-token-out-band-link-header-qr',
      description: 'soft-token-out-band-link-description-qr',
      data: {
        type: 'otpQr',
        page: 'stSecurityCode'
      }
    }
  ];
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          error_config_alert_manager_open: {
            bind: 'openWithSettings'
          }
        },
        out: {
          st_out_of_band_cancel_modal_soft_token_spherica: {
            bind: 'alert-OUT_BAND_OTP-bbva-controller-softoken-out-of-band-exit'
          }
        }
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: true,
      disableEdgeSwipe: true,
      iOSFixedHeader: isNativeIos,
      className: 'dark-blue-bg',
      extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
      headerFixed: true
    },
    propertiesSpherica: {
      className: 'bg-light-grey'
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
      iconLeftPrimary: 'coronita:return-12',
      accessibilityTextIconLeftPrimary: 'Return',
      text: 'soft-token-out-band-header',
      cellsConnections: {
        out: {
          [getChannelName('go_back')]: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true,
            'forward-to-native': true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'first-level-initial',
      leftButtons: [
        {
          icon: 'spherica:back-mini',
          defaultEventIconName: 'header-main-icon-left-primary-click',
          label: 'bbva-header-main-spherica-return'
        }
      ]
    }
  };
  const description = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-type-text',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      text: 'soft-token-out-band-text',
      alignment: 'left'
    },
    propertiesSpherica: {
      text: 'soft-token-out-band-text-spherica'
    }
  };
  const options = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-link-list',
    tagSpherica: 'bbva-aggregation-link-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-link-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-link-list-spherica',
    render: 'litElement',
    properties: {
      linkList: getLinkList,
      useBbvaListLink: true,
      cellsConnections: {
        out: {
          [getChannelName('list_click')]: {
            bind: 'aggregation-link-list-click'
          }
        }
      }
    }
  };
  const controller = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-softoken-out-of-band',
    familyPath: '@glomo-web-components/bbva-controller-softoken-out-of-band',
    render: 'litElement',
    properties: {
      isNativeIos,
      pageName,
      modalErrorImgSrc: './images/errors/error.svg',
      cellsConnections: {
        in: {
          __bridge_page_stOutBand: {
            bind: 'initStOutBand'
          },
          user_is_logged: {
            bind: 'isLogged'
          },
          device_accesses_device_id: {
            bind: 'deviceId'
          },
          global_storage_get_deviceId_success: {
            bind: 'onSuccessDeviceId'
          },
          global_storage_get_deviceId_error: {
            bind: 'onErrorDeviceId'
          },
          [getChannelName('list_click')]: {
            bind: 'onStOutBandButtonPressed'
          },
          [getChannelName('open_qr_scanner_success')]: {
            bind: 'extractQrData'
          },
          [getChannelName('open_qr_scanner_error')]: {
            bind: 'errorOpenQrCodeScanner'
          },
          [getChannelName('qr_decode_success')]: {
            bind: 'onDecodeQrDataSuccess'
          },
          [getChannelName('qr_decode_error')]: {
            bind: 'onDecodeQrDataError'
          },
          st_out_of_band_cancel_modal_soft_token: {
            bind: 'redirectToPage'
          },
          st_enrollment_get_authentication_devices_success: {
            bind: 'onFirstRenderUpdate'
          },
          st_enrollment_get_security_tokens_success: {
            bind: 'onFirstRenderUpdate'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'bbva-controller-softtoken-get-device-id'
          },
          [getChannelName('qr_otp_different')]: {
            bind: 'bbva-controller-softtoken-qr-otp-different'
          },
          [getGlobalChannelName('redirect_page_enrollment')]: {
            bind: 'bbva-controller-softtoken-redirect-page-enrollment',
            link: {
              page: 'stEnrollment'
            }
          },
          [getGlobalChannelName('redirect_page_dashboard_enrollment')]: {
            bind: 'bbva-controller-softtoken-navigation-to-login',
            nativeLink: {
              page: 'nativeLogin',
              params: {
                pageAfterLogin: 'pageAfterLogin'
              },
              cleanUntil: 'dashboard'
            }
          },
          [getChannelName('share_configs')]: {
            bind: 'bbva-controller-softtoken-share-configs'
          },
          [getChannelName('redirect_to_next_page')]: {
            bind: 'bbva-controller-softtoken-redirect-next-page',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          [getChannelName('open_qr_scanner')]: {
            bind: 'bbva-controller-softtoken-open-qr-code-scanner'
          },
          [getChannelName('qr_decode_data')]: {
            bind: 'bbva-controller-softtoken-decode-data'
          },
          [getChannelName('close_qr_scanner')]: {
            bind: 'close-qr-scanner'
          },
          [getChannelName('exit_operative')]: {
            bind: 'bbva-controller-softtoken-exit-operative',
            backStep: true,
            'forward-to-native': true
          },
          global_retry_error: {
            bind: 'bbva-controller-softtoken-retry-error'
          },
          global_alert_manager_open_with_settings: {
            bind: 'bbva-controller-softtoken-error-config'
          },
          global_open_control_veil: {
            bind: 'bbva-controller-softtoken-open-spinner'
          },
          global_close_control_veil: {
            bind: 'bbva-controller-softtoken-close-spinner'
          },
          device_access_remove_softtoken: {
            bind: 'bbva-controller-softtoken-clear-tokens-list'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      modalErrorImgSrc: './images/spherica/Warning.svg',
      newCellsConnections: {
        add: {
          in: {
            st_out_of_band_cancel_modal_soft_token_spherica: {
              bind: 'redirectToPage'
            }
          },
          out: {
            error_config_alert_manager_open: {
              bind: 'bbva-controller-softtoken-error-config'
            },
            close_control_veil: {
              bind: 'bbva-controller-softtoken-close-spinner'
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
  const managerQrScanner = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-qr-scanner',
    familyPath: '@glomo-web-components/bbva-manager-qr-scanner',
    render: 'litElement',
    properties: {
      qrPluginConfigs: merge(bbvaQrPluginConfigs.commons, {
        android: {
          customViewConfig: {
            name: 'qr_enrollment_view_overlay',
            options: {
              title: '',
              firstFooterLabel: 'Mantén el código en esta área, se escaneará de forma automática.'
            }
          }
        },
        ios: {
          codeType: 'QR',
          cameraConfig: {
            flash: false,
            autoFocus: true
          },
          customViewConfig: {
            customViewName: '',
            id: '',
            options: {
              title: '',
              backgroundColor: '',
              navBarBackgroundColor: '',
              navBarTintColor: '',
              firstFooterLabel: '',
              closeImageName: ''
            }
          },
          overlayConfig: {
            backgroundColor: '#072146',
            captureFrameColor: '#5BBEFF',
            borderWidth: '0',
            isImageVisible: false
          }
        }
      }),
      selectedPluginConfig: isNativeIos ? 'ios' : 'android',
      cellsConnections: {
        in: {
          native_webview_opened: {
            bind: 'setNativeWebViewOpened'
          },
          [getChannelName('open_qr_scanner')]: {
            bind: 'managePluginParams'
          }
        },
        out: {
          [getChannelName('qr_scanner_plugin_params')]: {
            bind: 'glomo-qr-plugin-params'
          }
        }
      }
    }
  };
  const connectorQrScanner = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-bbva-qr',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('qr_scanner_plugin_params')]: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          [getChannelName('open_qr_scanner_success')]: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          [getChannelName('open_qr_scanner_error')]: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };
  const connectorQrEncrypt = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-qr-encrypt',
    familyPath: '@glomo-web-components/bbva-nativeconnector-qr-encrypt',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('qr_decode_data')]: {
            bind: 'qrDecode'
          }
        },
        out: {
          [getChannelName('qr_decode_success')]: {
            bind: 'success-qr-decode'
          },
          [getChannelName('qr_decode_error')]: {
            bind: 'error-qr-decode'
          }
        }
      }
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: '/soft-token/out-band'
    },
    pages,
    template,
    components: [
      header,
      description,
      options,
      controller
    ]
  };
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
    base.components.push(getSpinnerSpherica(CONFIG));
    setPropertyComponent = setPropertiesSpherica(base);
    connectionsInComponent = connectionsInSpherica(base);
  } else {
    base.components.push(getSpinner(CONFIG));
    setPropertyComponent = setProperty(base);
    connectionsInComponent = connectionsIn(base);
  }

  setPropertyComponent(`cells-spinner-veil${tagSpherica}`).className = 'solid-spinner';
  connectionsInComponent(`cells-spinner-veil${tagSpherica}`).__bridge_page_stOutBand = { bind: 'closeVeil' };
  connectionsInComponent(`cells-spinner-veil${tagSpherica}`).st_out_band_exit_operative = { bind: 'closeVeil' };
  connectionsInComponent(`cells-spinner-veil${tagSpherica}`).st_out_band_qr_decode_success = { bind: 'closeVeil' };
  connectionsInComponent(`cells-spinner-veil${tagSpherica}`).st_out_band_open_qr_scanner = { bind: 'openVeil' };

  const { addOutStorageChannels } = require('./common/_local-storage');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const selectComponent = 'bbva-controller-softoken-out-of-band';

  addOutStorageChannels(base.components, [ 'deviceId' ], CONFIG);
  addRetryErrors(base)([
    {
      id: 'softokenErrorInvalidQr',
      acceptRetry: { bind: 'retryOpenQr', component: selectComponent },
      cancelRetry: { bind: 'exitOperative', component: selectComponent },
      acceptCallForHelp: { bind: 'exitOperative', component: selectComponent }
    }
  ]);
  if (isNative) {
    base.components.push(
      managerQrScanner,
      connectorQrScanner,
      connectorQrEncrypt
    );
  }
  return sphericaPageUtils.spherize(base);
};
