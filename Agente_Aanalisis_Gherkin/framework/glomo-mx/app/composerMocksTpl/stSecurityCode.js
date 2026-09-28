'use strict';
module.exports = CONFIG => {
  const {
    SPINNER: getSpinner,
    SPINNERSPHERICA: getSpinnerSpherica,
    setProperty,
    connectionsIn,
    footerHeight,
    useNames,
    toUnderscoreCase,
    connectionsInSpherica,
    setPropertiesSpherica
  } = require('./common/helpers/_utils');
  const pageName = 'stSecurityCode';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const operativePrefix = toUnderscoreCase(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { nativeIos: isNativeIos = false, native: isNative = false } = CONFIG;
  let setPropertyComponent = {};
  let connectionsInComponent = {};
  const tagSpherica = isSpherica ? '-spherica' : '';
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: true,
      footerHeight,
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
      text: 'soft-token-security-code-header',
      cellsConnections: {
        out: {
          [getChannelName('go_back')]: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      text: 'soft-token-security-code-header-spherica',
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
  const descriptionCode = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-type-text',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
    render: 'litElement',
    properties: {
      text: 'soft-token-security-code-text-1',
      fontWeight: '500',
      alignment: 'center'
    },
    propertiesSpherica: {
      className: 'u-padding-bottom--1'
    }
  };
  const panelCode = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-code-number',
    familyPath: '@bbva-experience-components/bbva-panel-code-number',
    familyPathSpherica: '@bbva-spherica-components/bbva-panel-code-number',
    render: 'litElement',
    properties: {
      code: String.prototype.padStart(8, '●'),
      className: 'code u-display--table u-margin--center',
      cellsConnections: {
        in: {
          [getChannelName('set_otp_code')]: {
            bind: 'code'
          },
          [getChannelName('set_bullet_points')]: {
            bind: 'code'
          }
        }
      }
    }
  };
  const descriptionInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-type-text',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
    render: 'litElement',
    properties: {
      text: 'soft-token-security-code-text-2',
      alignment: 'center'
    },
    propertiesSpherica: {
      size: 'XS'
    }
  };
  const descriptionTimer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-type-text',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
    render: 'litElement',
    properties: {
      text: 'soft-token-security-code-text-3',
      alignment: 'center'
    },
    propertiesSpherica: {
      className: 'u-padding-top--1 u-padding-bottom--1',
      text: 'soft-token-security-code-text-3-spherica'
    }
  };
  const timer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-progress-timer',
    familyPath: '@bbva-experience-components/bbva-progress-timer',
    familyPathSpherica: '@bbva-spherica-components/bbva-progress-timer',
    render: 'litElement',
    properties: {
      timeout: 30000,
      timeoutFormatted: 'ss',
      off: true,
      showVertical: true,
      text: 'soft-token-security-code-text-timer',
      cellsConnections: {
        in: {
          [getChannelName('handler_start_timer')]: {
            bind: 'start'
          },
          [getChannelName('handler_reset_timer')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('timer_finish')]: {
            bind: 'progress-timer-counter-finish'
          }
        }
      }
    },
    propertiesSpherica: {
      text: 'soft-token-security-code-text-timer-spherica'
    }
  };
  const buttonGenerate = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center',
      text: 'soft-token-security-code-button-generate',
      disabled: true,
      cellsConnections: {
        in: {
          [getChannelName('disable_button_status')]: {
            bind: 'disabled'
          }
        },
        out: {
          [getChannelName('button_pressed')]: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-max-width--2 u-margin--1'
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
      cellsConnections: {
        in: {
          __bridge_page_stSecurityCode: {
            bind: 'initStSecurityCode'
          },
          user_is_logged: {
            bind: 'isLogged'
          },
          device_accesses_device_id: {
            bind: 'deviceId'
          },
          global_set_app_settings: {
            bind: 'checkSecurityJourneyStatus'
          },
          st_out_band_qr_otp_different: {
            bind: 'checkQrCodeOtp'
          },
          st_out_band_share_configs: {
            bind: 'setUpProperties'
          },
          global_storage_get_deviceId_success: {
            bind: 'onSuccessDeviceId'
          },
          global_storage_get_deviceId_error: {
            bind: 'onErrorDeviceId'
          },
          st_enrollment_get_authentication_devices_success: {
            bind: 'onFirstRenderUpdate'
          },
          st_enrollment_get_security_tokens_success: {
            bind: 'onFirstRenderUpdate'
          },
          [getChannelName('go_back')]: {
            bind: 'resetProperties'
          },
          [getChannelName('timer_finish')]: {
            bind: 'onProgressTimerFinish'
          },
          [getChannelName('button_pressed')]: {
            bind: 'genNextOtpButton'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'bbva-controller-softtoken-get-device-id'
          },
          [getChannelName('set_otp_code')]: {
            bind: 'bbva-controller-softtoken-otp-code'
          },
          [getChannelName('handler_start_timer')]: {
            bind: 'bbva-controller-softtoken-start-timer'
          },
          [getChannelName('disable_button_status')]: {
            bind: 'bbva-controller-softtoken-disable-button'
          },
          [getChannelName('handler_reset_timer')]: {
            bind: 'bbva-controller-softtoken-reset-timer'
          },
          [getChannelName('set_bullet_points')]: {
            bind: 'bbva-controller-softtoken-set-bullet-points'
          },
          [getChannelName('exit_operative')]: {
            bind: 'bbva-controller-softtoken-exit-operative',
            backStep: true,
            'forward-to-native': true
          },
          [getChannelName('redirect_page_enrollment')]: {
            bind: 'bbva-controller-softtoken-redirect-page-enrollment',
            link: {
              page: 'stEnrollment'
            }
          },
          [getChannelName('redirect_page_dashboard_enrollment')]: {
            bind: 'bbva-controller-softtoken-navigation-to-login',
            nativeLink: {
              page: 'nativeLogin',
              params: {
                pageAfterLogin: 'pageAfterLogin'
              },
              cleanUntil: 'dashboard'
            }
          },
          global_open_control_veil: {
            bind: 'bbva-controller-softtoken-open-spinner'
          },
          global_retry_error: {
            bind: 'bbva-controller-softtoken-retry-error'
          },
          device_access_remove_softtoken: {
            bind: 'bbva-controller-softtoken-clear-tokens-list'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/soft-token/security-code'
    },
    pages,
    template,
    components: [
      header,
      descriptionCode,
      panelCode,
      descriptionInfo,
      descriptionTimer,
      timer,
      buttonGenerate,
      controller
    ]
  };

  if (isSpherica) {
    base.components.push(getSpinnerSpherica(CONFIG));
    setPropertyComponent = setPropertiesSpherica(base);
    connectionsInComponent = connectionsInSpherica(base);
  } else {
    base.components.push(getSpinner(CONFIG));
    setPropertyComponent = setProperty(base);
    connectionsInComponent = connectionsIn(base);
  }

  setPropertyComponent(`cells-spinner-veil${tagSpherica}`).open = true;
  setPropertyComponent(`cells-spinner-veil${tagSpherica}`).className = 'solid-spinner';
  setPropertyComponent(`cells-spinner-veil${tagSpherica}`).tag = `cells-spinner-veil${tagSpherica}`;

  connectionsInComponent(`cells-spinner-veil${tagSpherica}`).global_retry_error = { bind: 'closeVeil' };
  connectionsInComponent(`cells-spinner-veil${tagSpherica}`).__bridge_page_stSecurityCode = { bind: 'closeVeil' };


  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const selectComponent = 'bbva-controller-softoken-out-of-band';

  addRetryErrors(base)([
    {
      id: 'softokenErrorGenerateOtp',
      acceptRetry: { bind: 'retryGenerateOtp', component: selectComponent },
      cancelRetry: { bind: 'exitOperative', component: selectComponent },
      acceptCallForHelp: { bind: 'exitOperative', component: selectComponent }
    }
  ]);

  return sphericaPageUtils.spherize(base);
};
