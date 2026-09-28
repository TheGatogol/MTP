'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const COUNTRY = utils.getCountry(CONFIG);
  const PAGE_NAME = 'callMeBackAssistanceManager';
  const PAGE_NAME_CHANNEL = 'call_me_back_assistance_manager';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const CUSTOMERS_API_VERSION = '1';
  const ANALYTICS = require('./analytics/_callMeBackAssistanceManager')(CONFIG);

  const base = {
    hash: COUNTRY + PAGE_NAME,
    currentPage: {
      url: '/call-me-back-assistance-manager',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        hasFooter: false,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        fixOffsetScroll: 0,
        drawerWidth: '100%',
        footerHeight: 100,
        headerHeight: utils.headerHeight,
        cellsConnections: {
          in: {
            [PAGE_NAME_CHANNEL + '_has_footer']: {
              bind: 'hasFooter'
            }
          },
          out: {
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
          pageName: PAGE_NAME,
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_INIT_PAGE']: {
                bind: 'init-page'
              },
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
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
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_SET_HEADER']: {
                bind: 'setProperties'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_BACK_TO_PAGE']: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        backAction: 'header-left-button',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_BACK_TO_PAGE']: {
                bind: 'goBack'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-schedule-call-manager',
        properties: {
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              CMB_ASSISTANCE_MANAGER: {
                bind: 'initValues'
              },
              [PAGE_NAME_CHANNEL + '_RADIO_BUTTON_SELECTED']: {
                bind: 'selectedRadioButton'
              },
              [PAGE_NAME_CHANNEL + '_VALIDATE_CONFIRM_BUTTON']: {
                bind: 'sendScheduleSelected'
              },
              [PAGE_NAME_CHANNEL + '_GET_RESPONSE_ASSISTANCE']: {
                bind: 'advisorResponseData'
              },
              global_login_success_indicators: {
                bind: 'globalCacheStorage'
              },
              [PAGE_NAME_CHANNEL + '_card_advice_open_accept']: {
                bind: '_setDataAdvisor'
              },
              [PAGE_NAME_CHANNEL + '_MESSAGE_RESPONSE_CHANNEL']: {
                bind: '_requestSuccessful'
              },
              [PAGE_NAME_CHANNEL + '_CLOSED_BUTTON']: {
                bind: '_exitPage'
              },
              [PAGE_NAME_CHANNEL + '_ADVISOR_NOT_AVAILABLE_EXIT']: {
                bind: '_exitPage'
              },
              [PAGE_NAME_CHANNEL + '_BACK_TO_PAGE']: {
                bind: '_exitPage'
              },
              [PAGE_NAME_CHANNEL + '_ERROR_CHANNEL']: {
                bind: 'errorHandler'
              },
              [PAGE_NAME_CHANNEL + '_REQUEST_SEND_EMAIL_MESSAGE_CHANNEL']: {
                bind: 'hideSpinner'
              }
            },
            out: {
              global_phone_call_channel: {
                bind: 'call-assistance-number',
                'forward-to-native': true
              },
              request_client_id: {
                bind: 'request-user-client-id',
                'forward-to-native': true
              },
              [PAGE_NAME_CHANNEL + '_SET_HEADER']: {
                bind: 'set-header-call-me-back-assistance-manager'
              },
              [PAGE_NAME_CHANNEL + '_OUTSIDE_OFFICE_HOURS_MODAL']: {
                bind: 'open-modal-outside-office-hours'
              },
              [PAGE_NAME_CHANNEL + '_AVAILABLE_TIMES']: {
                bind: 'available-times-list-event'
              },
              [PAGE_NAME_CHANNEL + '_RESET_BUTTON_LIST']: {
                bind: 'reset-button-list-value'
              },
              [PAGE_NAME_CHANNEL + '_CONFIG_BUTTON_CHANGED']: {
                bind: 'send-position-radio-selected'
              },
              [PAGE_NAME_CHANNEL + '_set_advice_configuration']: {
                bind: 'set-card-advice-properties'
              },
              [PAGE_NAME_CHANNEL + '_SENDER_AND_RECEIVER_CONFIG']: {
                bind: 'email-data-config'
              },
              [PAGE_NAME_CHANNEL + '_SEND_SCHEDULE_SELECT']: {
                bind: 'send-schedule-selected-event'
              },
              [PAGE_NAME_CHANNEL + '_EXIT_PAGE']: {
                bind: 'exit-call-me-back-assistance-manager-page',
                backStep: true
              },
              [PAGE_NAME_CHANNEL + '_has_footer']: {
                bind: 'call-me-back-assistance-manager-has-footer'
              },
              [PAGE_NAME_CHANNEL + '_SUCCESS_PAGE']: {
                bind: 'set-result-data-to-success-page',
                link: {
                  page: 'callMeBackAssistanceManagerSuccess',
                  skipHistory: true
                }
              },
              [PAGE_NAME_CHANNEL + '_SET_CUSTOMER_ID']: {
                bind: 'set-global-cache-storage-customer-id'
              },
              [PAGE_NAME_CHANNEL + '_RESPONSE_CUSTOMER']: {
                bind: 'user-detail-data'
              },
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'hide-spinner'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-modal-card-advice',
        properties: {
          native: !!CONFIG.nativeShell,
          iOSFixedHeader: isNativeIos,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_OUTSIDE_OFFICE_HOURS_MODAL']: {
                bind: 'openWithConfig'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_card_advice_open_accept']: {
                bind: 'modal-cells-confirm-buttons-click-primary'
              },
              [PAGE_NAME_CHANNEL + '_ADVISOR_NOT_AVAILABLE_EXIT']: {
                bind: 'modal-cells-confirm-buttons-click-secondary'
              },
              [PAGE_NAME_CHANNEL + '_CLOSED_BUTTON']: {
                bind: 'cells-bottom-modal-closed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-card-advice',
        properties: {
          isBackgroundLight: true,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_set_advice_configuration']: {
                bind: 'setProperties'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-radio-button-list',
        properties: {
          selected: -1,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_RESET_BUTTON_LIST']: {
                bind: 'selected'
              },
              [PAGE_NAME_CHANNEL + '_AVAILABLE_TIMES']: {
                bind: 'radioButtonList'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_RADIO_BUTTON_SELECTED']: {
                bind: 'selected-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-molecule-actions',
        type: 'UI',
        properties: {
          primaryButtonLabel: 'call-me-back-assistance-manager-schedule-a-call-button',
          primaryButtonDisabled: true,
          className: 'assistance-files-update-molecule-actions',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_CONFIG_BUTTON_CHANGED']: {
                bind: 'primaryButtonDisabled'
              }
            },
            out:
            {
              [PAGE_NAME_CHANNEL + '_VALIDATE_CONFIRM_BUTTON']: {
                bind: 'cells-molecule-actions-primary-button-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-customers',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          customersApiVersion: CUSTOMERS_API_VERSION,
          headers: { 'Accept-Language': 'es' },
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              CMB_ASSISTANCE_MANAGER: {
                bind: 'getBusinessAgent'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_GET_RESPONSE_ASSISTANCE']: {
                bind: 'success-on-set-business-agent'
              },
              [PAGE_NAME_CHANNEL + '_ERROR_CHANNEL']: {
                bind: 'error-on-get-business-agent'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-email-composer-manager',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          sendEmailEventCode: 'A000000496',
          senderId: '0000000001',
          devicesId: '102',
          serviceProviderId: '@@@',
          maskCharacter: '•',
          clientId: '5793',
          phoneNumber: '9079',
          cellsConnections: {
            in: {
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'reset'
              },
              [PAGE_NAME_CHANNEL + '_RESPONSE_CUSTOMER']: {
                bind: 'globalCacheStorage'
              },
              global_server_config_channel: {
                bind: 'globalServerConfig'
              },
              [PAGE_NAME_CHANNEL + '_SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              [PAGE_NAME_CHANNEL + '_SENDER_AND_RECEIVER_CONFIG']: {
                bind: 'clientBankerData'
              },
              [PAGE_NAME_CHANNEL + '_SEND_SCHEDULE_SELECT']: {
                bind: 'requestCallScheduleWithAdvisor'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_REQUEST_SEND_EMAIL_MESSAGE_CHANNEL']: {
                bind: 'send-email-message-data'
              },
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'hide-spinner'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-notifications-subscriptions',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          subscriptionsApiVersion: CONFIG.globalServices.notifications,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              [PAGE_NAME_CHANNEL + '_REQUEST_SEND_EMAIL_MESSAGE_CHANNEL']: {
                bind: 'postNotificationSend'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_MESSAGE_RESPONSE_CHANNEL']: {
                bind: 'success-on-post-notifications-send'
              },
              [PAGE_NAME_CHANNEL + '_ERROR_CHANNEL']: {
                bind: 'error-on-post-notifications-send'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-personal-assistance-manager',
        familyPath: '@glomo-web-components/glomo-analytics-personal-assistance-manager',
        render: 'litElement',
        properties: {
          currentPage: 'call-me-back-assistance-manager',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_OUTSIDE_OFFICE_HOURS_MODAL']: {
                bind: 'firePageView'
              },
              [PAGE_NAME_CHANNEL + '_card_advice_open_accept']: {
                bind: 'firePageViewModal'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_PAGE_VIEW_ASSISTANCE_NOT_AVAILABLE']: {
                bind: 'analytics-page-view-call-me-back-assistance-manager',
                analytics: ANALYTICS.PAGE_VIEW_ASSISTANCE_NOT_AVAILABLE
              },
              [PAGE_NAME_CHANNEL + '_PAGE_VIEW_SCHEDULE_CALL']: {
                bind: 'analytics-page-view-call-me-back-assistance-manager-modal',
                analytics: ANALYTICS.PAGE_VIEW_SCHEDULE_CALL
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
