'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = require('./common/_pages')(CONFIG)('helpSectionPage');
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_helpSectionPage.js')();
  const { faqs } = require('./common/faqsHelpers/_faqsList.js');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'helpSectionPage');

  const buttonSettings = [{
    icon: sphericaPageUtils.isSpherica() ? '' : 'coronita:telephone',
    titleText: 'glomo-faqs-line-number-title',
    text: '800 2262 663'
  },
  {
    icon: sphericaPageUtils.isSpherica() ? '' : 'coronita:desktop',
    titleText: 'glomo-faqs-portal-number-title',
    text: '5552262685, #0007'
  },
  {
    icon: sphericaPageUtils.isSpherica() ? '' : 'coronita:mobile',
    titleText: sphericaPageUtils.isSpherica() ? 'glomo-faqs-app-number-title-spherica' : 'glomo-faqs-app-number-title',
    text: '5552262685, #0005'
  },
  {
    icon: sphericaPageUtils.isSpherica() ? '' : 'coronita:insurance2',
    titleText: 'glomo-faqs-insurance-number-title',
    text: '5552262685, #0006'
  }];

  const base = {
    hash: CONFIG + 'help-section-page',
    currentPage: {
      url: '/help/section'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            faqs_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        className: `bg-light-grey${isNativeIos ? ' ios-top-padding' : ''}`,
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: ''
      }
    },
    components: [{
      zone: 'app__main',
      tag: 'cells-handle-life-cycle',
      type: 'UI',
      properties: {
        pageName: PAGE_NAME,
        tokenName: CONFIG.globalServices.requiredToken || 'tsec',
        customInitEvents: {
          'swipe-menu-enabled': false
        },
        cellsConnections: {
          in: {
            __bridge_app: {
              bind: 'navigation'
            },
            __bridge_page_helpSection: {
              bind: 'init'
            }
          },
          out: {
            faqs_reset_page: {
              bind: 'reset'
            },
            faqs_init_page: {
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
        className: 'header--dark',
        leftIcon: 'coronita:return-12',
        titleName: 'glomo-help-section-header-title',
        continue: 'dashboard',
        cellsConnections: {
          out: {
            navigation_faqs_to_page: {
              bind: 'click-left-button'
            }
          }
        }
      },
      propertiesSpherica: {
        variant: 'primary-alt',
        leftIconText: 'bbva-header-main-return-aria-label',
        leftIcon: 'coronita:back',
        className: ''
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      familyPath: 'glomo-faqs-list-manager',
      tag: 'glomo-faqs-list-manager-mx',
      properties: {
        actionLauncherPhone: true,
        faqsList: faqs,
        cellsConnections: {
          in: {
            navigation_dashboard_to_help_section: {
              bind: 'initGlobalFaqs'
            },
            global_feature_flag_collection_updated: {
              bind: 'globalValidationHelpSection'
            },
            faqs_clean: {
              bind: 'resetInit'
            },
            get_faqs_channel_success: {
              bind: 'requestChangeDenomitationFlag'
            },
            faqs_call_number: {
              bind: 'setPhoneNumber'
            },
            navigation_faqs_to_faqs_detail: {
              bind: 'analyticsEventFaqs'
            },
            __bridge_cancelled_back_navigation: {
              bind: 'manageBackBtn'
            },
            faqs_success_response_qas_question: {
              bind: 'getFaqsServiceCase'
            },
            faqs_error_response_qas_question: {
              bind: 'getFaqsServiceError'
            },
            faqs_input_value: {
              bind: 'valueInput'
            },
            faqs_button_search: {
              bind: 'onTapSearchButton'
            },
            faqs_button_retry: {
              bind: 'onTapRetrySearchButton'
            },
            send_open_web_flag: {
              bind: 'setDenominationFlag'
            },
            navigation_faqs_to_page: {
              bind: 'manageBackBtn'
            }
          },
          out: {
            faqs_request_app_settings: {
              bind: 'request-app-settings-faqs'
            },
            global_action_launcher_dialer: {
              bind: 'request-phone-call'
            },
            faqs_get_native_dm: {
              bind: 'send-faqs-native-case'
            },
            faqs_request_qas_search_input: {
              bind: 'search-question-input'
            },
            faqs_hidden_message_error: {
              bind: 'hidden-message-error'
            },
            faqs_get_service_dm: {
              bind: 'send-faqs-service-case'
            },
            faqs_set_title_list: {
              bind: 'title-list-changed'
            },
            faqs_hidden_list: {
              bind: 'hidden-faqs-list'
            },
            faqs_hidden_panel_info: {
              bind: 'hidden-panel-info'
            },
            faqs_hidden_max_message_error: {
              bind: 'hidden-message-max-error'
            },
            faqs_analytics_event: {
              bind: 'send-faqs-native-case'
            },
            faqs_analytics_event_detail: {
              bind: 'send-analytics-faqs-detail-native-case'
            },
            go_back_native_btn: {
              bind: 'close-page',
              backStep: true
            },
            faqs_hidden_input: {
              bind: 'hidden-input'
            },
            faqs_clear_input: {
              bind: 'clear-input-value'
            },
            faqs_text_panel_info: {
              bind: 'set-text-panel-info'
            },
            faqs_set_input_search_label: {
              bind: 'set-input-search-label'
            }
          }
        }
      },
      propertiesSpherica: {
        isSpherica: sphericaPageUtils.isSpherica()
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-public-app-settings',
      properties: {
        host: CONFIG.settingsHost,
        native: !!CONFIG.native,
        namespace: CONFIG.namespace,
        endpoint: CONFIG.endpoints.faqs,
        cellsConnections: {
          in: {
            faqs_request_app_settings: {
              bind: 'getAppSettings'
            }
          },
          out: {
            global_set_app_settings_faqs: {
              bind: 'app-settings-request-success'
            },
            global_set_app_settings_faqs_error: {
              bind: 'app-settings-request-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-global-apis-qas',
      properties: {
        host: CONFIG.globalServices.host,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        native: !!CONFIG.native,
        cellsConnections: {
          in: {
            faqs_request_qas_search_input: {
              bind: 'getQasListQuestion'
            }
          },
          out: {
            faqs_success_response_qas_question: {
              bind: 'success-response-question-qas-list'
            },
            faqs_error_response_qas_question: {
              bind: 'error-response-question-qas-list'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-form-predictive',
      tagSpherica: 'bbva-form-input',
      familyPath: '@bbva-web-components/bbva-form-predictive',
      familyPathSpherica: '@bbva-spherica-components/bbva-form-input',
      render: 'litElement',
      properties: {
        style: '--bbva-core-icon-fill-color: white',
        allowedPattern: '[\\w\\sñÑ]',
        required: true,
        label: '¿Qué quieres buscar?',
        className: 'navy-on-header',
        search: true,
        hidden: !!CONFIG.nativeShell,
        cellsConnections: {
          in: {
            faqs_hidden_input: {
              bind: 'hidden'
            },
            faqs_clear_input: {
              bind: 'value'
            }
          },
          out: {
            faqs_input_value: {
              bind: 'form-predictive-value-change'
            },
            faqs_button_search: {
              bind: 'form-search-button-submit'
            },
            faqs_clean: {
              bind: 'form-field-input-clear'
            }
          }
        }
      },
      propertiesSpherica: {
        style: 'margin: 1rem',
        type: 'text',
        required: false,
        newCellsConnections: {
          add: {
            out: {
              faqs_input_value: {
                bind: 'form-input-value-change'
              },
              faqs_button_search: {
                bind: 'form-field-button-submit'
              }
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-panel-info',
      tagSpherica: 'bbva-panel-info-spherica',
      familyPath: '@bbva-web-components/bbva-panel-info',
      familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
      render: 'litElement',
      properties: {
        hidden: true,
        class: 'image',
        image: './images/empty_micro.svg',
        text: 'glomo-help-section-no-match',
        cellsConnections: {
          in: {
            faqs_hidden_panel_info: {
              bind: 'hidden'
            },
            faqs_text_panel_info: {
              bind: 'text'
            }
          }
        }
      },
      propertiesSpherica: {
        microillustration: 'emptyState',
        className: 'outer-margin'
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-icon-message-change-data',
      tagSpherica: 'cells-icon-message-change-data-spherica',
      properties: {
        className: 'margin-l',
        type: 'error',
        hidden: true,
        showChangeData: true,
        hasMultipleData: true,
        changeDataText: 'glomo-help-section-retry-modal',
        iconType: 'coronita:alert',
        message: 'glomo-help-section-error-message',
        cellsConnections: {
          in: {
            faqs_hidden_message_error: {
              bind: 'hidden'
            }
          },
          out: {
            faqs_button_retry: {
              bind: 'change-data-pressed'
            }
          }
        }
      },
      propertiesSpherica: {
        id: 'firstIcon'
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-icon-message-change-data',
      tagSpherica: 'cells-icon-message-change-data-spherica',
      properties: {
        className: 'margin-l',
        type: 'error',
        hidden: true,
        showChangeData: true,
        hasMultipleData: true,
        iconType: 'coronita:alert',
        message: 'glomo-help-section-max-error-message',
        cellsConnections: {
          in: {
            faqs_hidden_max_message_error: {
              bind: 'hidden'
            }
          }
        }
      },
      propertiesSpherica: {
        id: 'secondIcon'
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-widget-faqs-list',
      tagSpherica: 'bbva-widget-faqs-list-spherica',
      familyPath: '@glomo-web-components/bbva-widget-faqs-list',
      familyPathSpherica: '@glomo-web-components/bbva-widget-faqs-list-spherica',
      render: 'litElement',
      properties: {
        drawLastSeparator: true,
        cellsConnections: {
          in: {
            faqs_init_page: {
              bind: 'generateRequest'
            },
            faqs_get_native_dm: {
              bind: 'faqs'
            },
            faqs_get_service_dm: {
              bind: 'faqs'
            },
            faqs_set_title_list: {
              bind: 'header'
            },
            faqs_hidden_list: {
              bind: 'hidden'
            }
          },
          out: {
            navigation_faqs_to_faqs_detail: {
              bind: 'bbva-widget-faqs-list-faq-click',
              link: {
                page: 'helpSectionDetail',
                params: {
                  entity: 'title'
                }
              }
            }
          }
        }
      },
      propertiesSpherica: {
        variant: 'primary-alt'
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'glomo-button-list',
      tagSpherica: 'glomo-button-list-spherica',
      properties: {
        className: 'normal',
        customStyle: 'wrapper icon-button-ui light-blue',
        buttons: buttonSettings,
        cellsConnections: {
          out: {
            faqs_call_number: {
              bind: 'button-clicked'
            }
          }
        }
      },
      propertiesSpherica: {
        className: 'gap-m button-list-help-section-padding big-title',
        titleText: 'glomo-button-list-title-spherica'
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-analytics-faqs-manager-mx',
      familyPath: '@glomo-web-components/glomo-analytics-faqs-manager',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            faqs_analytics_event: {
              bind: 'firstStepNativeFaqs'
            },
            faqs_analytics_event_detail: {
              bind: 'fireAppStepsAnalytics'
            }
          },
          out: {
            faqs_analytics_page_view_first: {
              bind: 'app-first-step-page-view',
              analytics: ANALYTICS.PAGE_VIEW_FIRST
            },
            faqs_analytics_page_view: {
              bind: 'app-step-page-view',
              analytics: ANALYTICS.PAGE_VIEW_CLICK
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-global-generic-dm',
      familyPath: '@bbva-global-apis-dm/bbva-global-generic-dm',
      render: 'litElement',
      properties: {
        host: CONFIG.settingsHost,
        path: 'app-settings/mx/faqs.json',
        crossDomain: true,
        native: !!CONFIG.native,
        cellsConnections: {
          in: {
            faqs_init_page: {
              bind: 'getData'
            }
          },
          out: {
            get_faqs_channel_success: {
              bind: 'generic-dm-fetch'
            },
            get_faqs_channel_error: {
              bind: 'generic-dm-fetch-error'
            }
          }
        }
      }
    }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
