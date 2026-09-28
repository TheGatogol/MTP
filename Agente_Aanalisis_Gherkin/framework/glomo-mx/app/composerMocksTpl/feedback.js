'use strict';

module.exports = (CONFIG, FEEDBACK = 'feedback', PAGEURL = 'generic-feedback') => {
  const utils = require('./common/helpers/_utils');

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const isNativeIos = CONFIG.nativeIos || false;
  // eslint-disable-next-line new-cap
  let SPINNER = utils.SPINNER(CONFIG);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.properties.className = isNativeIos ? 'feedback-ios-top-padding solid-spinner' : 'solid-spinner';
  SPINNER.properties.open = true;
  delete  SPINNER.properties.cellsConnections.in.open_control_veil;
  delete  SPINNER.properties.cellsConnections.in.close_control_veil;
  SPINNER.properties.cellsConnections.in[FEEDBACK + '_open_control_veil'] = {
    bind: 'show'
  };
  SPINNER.properties.cellsConnections.in[FEEDBACK + '_timeout_error'] = {
    bind: 'hide'
  };
  SPINNER.properties.cellsConnections.in[FEEDBACK + '_close_control_veil'] = {
    bind: 'hide'
  };
  SPINNER.properties.cellsConnections.in.__bridge_app = {
    bind: 'openVeil'
  };
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_feedback_exit_confirm_modal_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {}
      }
    }
  };
  const toastProperties = {
    'id': 1,
    'duration': 3000,
    'backgroundColor': '#277A3E',
    'textColor': '#FFFFFF',
    'textSize': 15,
    'maxLines': 10,
    'position': 'bottom',
    'canBeHidden': false,
    'type': 'success',
    'textMargins': {
      'top': 24,
      'bottom': 24,
      'right': 16,
      'left': 16
    }
  };

  const toastPropertiesSpherica = {
    'id': 1,
    'duration': 3000,
    'backgroundColor': '#EBFFF0',
    'textColor': '#070E46',
    'textSize': 15,
    'maxLines': 10,
    'position': 'bottom',
    'canBeHidden': false,
    'type': 'success',
    'textMargins': {
      'top': 24,
      'bottom': 24,
      'right': 16,
      'left': 16
    }
  };

  const PAGENAME = FEEDBACK;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGENAME);
  const pages = require('./common/_pages')(CONFIG)(PAGENAME);
  const base = {
    hash: FEEDBACK,
    currentPage: {
      url: '/' + PAGEURL,
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'bbva-core-blue',
        className: isNativeIos ? 'ios-top-padding bbva-core-blue' : 'bbva-core-blue',
        iOSFixedHeader: true,
        cellsConnections: {
          in: {
            [FEEDBACK + '_init_page']: {
              bind: 'recalculateHeader'
            },
            [FEEDBACK + 'Feedback_text_focus_in']: {
              bind: 'recalculateStatusBarTop'
            },
            [FEEDBACK + 'Feedback_text_focus_out']: {
              bind: 'resetStatusBarTop'
            }
          },
          out: {}
        }
      },
      propertiesSpherica: {
        className: isNativeIos ? 'ios-top-padding ' : '',
        extraHeaderClass: ''
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
              ['__bridge_page_' + PAGENAME]: {
                bind: 'init'
              }
            },
            out: {
              [FEEDBACK + '_reset_page']: {
                bind: 'reset'
              },
              [FEEDBACK + '_init_page']: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core',
          titleName: 'glomo-feedback-header-title',
          back: true,
          leftIcon: 'coronita:return-12',
          cellsConnections: {
            in: {
              [FEEDBACK + '_header_left_icon']: {
                bind: 'leftIcon'
              },
              [FEEDBACK + '_header_right_icon']: {
                bind: 'rightIcon'
              }
            },
            out: {
              [FEEDBACK + '_click_left_button']: {
                bind: 'click-left-button'
              },
              [FEEDBACK + '_click_right_button']: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back-mini',
          className: '',
          variant: 'primary',
          rightIconText: 'cells-molecule-header-spherica-close'
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'glomo-opinator-iframe-manager-mx',
        familyPath: 'glomo-opinator-iframe-manager',
        properties: {
          maxTryFeedbackError: 0,
          loadingTimeout: 20000,
          toastSuccessMessage: 'feedback-toast-success-message',
          toastSuccessParams: sphericaPageUtils.isSpherica() ? toastPropertiesSpherica : toastProperties,
          cellsConnections: {
            in: {
              global_storage_get_app_settings_success: {
                bind: 'dataAppSettings'
              },
              global_feature_flag_feedback_config: {
                bind: 'parseFeatureFlags'
              },
              [FEEDBACK + '_receive_iframe_event']: {
                bind: 'iframeReceiveFrame'
              },
              [FEEDBACK + '_click_left_button']: {
                bind: 'openExitAlert'
              },
              [FEEDBACK + '_click_right_button']: {
                bind: 'openExitAlert'
              },
              [FEEDBACK + '_init_page']: {
                bind: 'init'
              },
              global_feedback_navigate_exit_url: {
                bind: 'reset'
              },
              ['navigation_' + FEEDBACK + '_to_previous_page']: {
                bind: 'reset'
              }
            },
            out: {
              [FEEDBACK + '_open_control_veil']: {
                bind: 'open-veil'
              },
              [FEEDBACK + '_close_control_veil']: {
                bind: 'close-veil'
              },
              [FEEDBACK + '_init_iframe']: {
                bind: 'init-iframe'
              },
              [FEEDBACK + '_iframe_loaded']: {
                bind: 'iframe-loaded'
              },
              [FEEDBACK + '_set_src_iframe']: {
                bind: 'set-src-iframe'
              },
              global_feedback_exit_confirm_modal: {
                bind: 'open-feedback-exit-confirm-modal'
              },
              [FEEDBACK + '_NAVIGATE_EXIT_URL']: {
                bind: 'glomo-opinator-exit'
              },
              'global_message_snackbar': {
                bind: 'show-toast'
              },
              global_get_from_storage: {
                bind: 'get-app-settings'
              },
              [FEEDBACK + '_header_left_icon']: {
                bind: 'header-left-icon'
              },
              [FEEDBACK + '_header_right_icon']: {
                bind: 'header-right-icon'
              },
              [FEEDBACK + '_close_no_connection_modal']: {
                bind: 'close-modal-offline'
              },
              [FEEDBACK + '_timeout_error']: {
                bind: 'opinator-timeout-error'
              },
              global_feedback_close_exit_confirm_modal: {
                bind: 'close-opened-alert-modal'
              },
              [FEEDBACK + '_exit_confirm_accept']: {
                bind: 'alert-FEEDBACK-EXIT-accept'
              }
            },
            params: {
              src: 'feedbackLink',
              continue: 'continue',
              feedbackOperation: 'feedbackOperation'
            }
          }
        },
        propertiesSpherica: {
          isSpherica: true,
          newCellsConnections: {
            add: {
              out: {
                global_feedback_exit_confirm_modal_spherica: {
                  bind: 'open-feedback-exit-confirm-modal'
                }
              }
            },
            remove: {
              out: [
                'global_feedback_exit_confirm_modal'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-iframe',
        properties: {
          cellsConnections: {
            in: {
              [FEEDBACK + '_set_src_iframe']: {
                bind: 'src'
              },
              [FEEDBACK + '_init_iframe']: {
                bind: 'init'
              },
              [FEEDBACK + '_reset_page']: {
                bind: 'reset'
              },
              [FEEDBACK + '_timeout_error']: {
                bind: 'reset'
              },
              [FEEDBACK + '_iframe_loaded']: {
                bind: 'iframeLoaded'
              }
            },
            out: {
              [FEEDBACK + '_receive_iframe_event']: {
                bind: 'iframe-event-fire'
              },
              [FEEDBACK + 'Feedback_text_focus_in']: {
                bind: 'text-focus-in'
              },
              [FEEDBACK + 'Feedback_text_focus_out']: {
                bind: 'text-focus-out'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'glomo-alert-manager',
        tagSpherica: 'glomo-alert-manager-spherica',
        properties: {
          id: 'feedback-glomo-alert-manager',
          language: utils.getLanguage(CONFIG),
          native: !!CONFIG.nativeShell,
          className: (CONFIG.nativeIos || false) ? 'ios-top-padding' : '',
          iOSFixedHeader: true,
          cellsConnections: {
            in: {
              [FEEDBACK + '_timeout_error']: {
                bind: 'openWithSettings'
              },
              [FEEDBACK + '_close_no_connection_modal']: {
                bind: 'close'
              }
            },
            out: {
              [FEEDBACK + '_error_accept']: {
                bind: 'alert-COMUNICATION-ERROR-INFO-accept'
              },
              [FEEDBACK + '_error_cancel']: {
                bind: 'alert-COMUNICATION-ERROR-INFO-cancel'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        tag: 'glomo-navigation-handler',
        type: 'UI',
        properties: {
          backAction: 'glomo-opinator-exit',
          cellsConnections: {
            in: {
              [FEEDBACK + '_NAVIGATE_EXIT_URL']: {
                bind: 'goBack'
              },
              [FEEDBACK + '_exit_confirm_accept']: {
                bind: 'goBack'
              },
              [FEEDBACK + '_error_accept']: {
                bind: 'goBack'
              },
              [FEEDBACK + '_error_cancel']: {
                bind: 'goBack'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'goBack'
              }
            },
            out: {
              global_feedback_navigate_exit_url: {
                bind: 'glomo-opinator-exit'
              },
              ['navigation_' + FEEDBACK + '_to_previous_page']: {
                bind: 'navigate-to-previous-page',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };
  if (sphericaPageUtils.isSpherica()) {
    base.components.push(glomoAlertManagerSpherica);
  }
  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
