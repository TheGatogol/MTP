'use strict';

module.exports = CONFIG => {
  const {
    SPINNER: spinner,
    headerHeight
  } = require('./common/helpers/_utils');
  const pageName = 'myConversationMessagePage';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const historyConversationsParam = CONFIG.conversationHistoryParam;
  const ANALYTICS = require('./analytics/_myTalks')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { customersV1: customersApiVersion } }, native = false,
    nativeIos = false
  } = CONFIG;

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'horizontal',
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      headerFixed: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerHeight,
      className: 'header--core onboarding-tutorial ios-top-padding',
      mode: 'seamed'
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_myConversationMessagePage: {
            bind: 'init'
          }
        },
        out: {
          equity_assist_init_page: {
            bind: 'init-page'
          },
          equity_assist_reset_page: {
            bind: 'reset'
          },
          app_error_access_token: {
            bind: 'access-token-error'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      continue: 'patrimonialEquityAssistancePage',
      cellsConnections: {
        in: {
          navigation_my_conversation_message_back_request: {
            bind: 'goBack'
          },
          AMB_PRIMARY_CHANNEL: {
            bind: 'navigate'
          }
        },
        out: {
          navigate_my_conversation_message_to_patrimonialEquityAssistancePage: {
            bind: 'navigation-to-patrimonialEquityAssistancePage',
            link: {
              page: 'patrimonialEquityAssistancePage'
            }
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--on-dark',
      leftIcon: 'coronita:return-12',
      rightSecondaryIcon: 'coronita:info',
      titleName: 'my-conversations-message-title',
      cellsConnections: {
        in: {
          MCM_SET_HEADER_RIGHT_ICON: {
            bind: 'rightIcon'
          }
        },
        out: {
          navigation_conversation_message_request: {
            bind: 'click-left-button',
            backStep: true
          },
          MCM_SEARCH_BAR: {
            bind: 'click-right-button',
            link: {
              page: 'myConversationSearchPage'
            }
          },
          MCM_INFO_MODAL: {
            bind: 'click-right-secondary-button'
          }
        }
      }
    }
  };

  const modalSlider = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-modal-slider',
    properties: {
      title: 'my-conversations-message-title',
      slidesLoadingDelay: 50,
      alignTop: true,
      hideSliderButton: false,
      buttonLabel: 'glomo-conversation-modal-slider-button-label',
      className: 'header--core onboarding-tutorial padding-top-ios',
      cellsConnections: {
        in: {
          MCM_OPEN_INFO_MODAL: {
            bind: 'openWithData'
          }
        }
      }
    }
  };

  const messageManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-conversation-message-manager',
    properties: {
      conversationHistoryParam: historyConversationsParam,
      cellsConnections: {
        in: {
          __bridge_page_myConversationMessagePage: {
            bind: 'init'
          },
          MCM_ID_BANKER_CH: {
            bind: 'idBanker'
          },
          MC_REMOTE_MANAGER_FLAG: {
            bind: 'remoteManager'
          },
          global_login_success_indicators: {
            bind: 'detailCustomerResponse'
          },
          MCM_INFO_MODAL: {
            bind: 'openInfoModal'
          },
          MCM_SUCCESS_GET_LIST_CONV: {
            bind: 'successResponseListConversation'
          },
          MCM_ERROR_GET_LIST_CONV_CH: {
            bind: 'onConversationGetErrorCommunication'
          },
          MCM_HIDE_MODAL_GET_LIST_CONV_RETRY_CH: {
            bind: 'listConversations'
          },
          MCM_SUCCESS_GET_CONTRACTS_CH: {
            bind: 'getIdBanker'
          },
          MCM_ERROR_GET_CONTRACTS_CH: {
            bind: 'onConversationGetErrorCommunication'
          },
          MCM_SUCCESS_GET_BUSINESS_AGENTS_CH: {
            bind: 'getIdBanker'
          },
          MCM_ERROR_GET_BUSINESS_AGENTS_CH: {
            bind: 'onConversationGetErrorCommunication'
          },
          global_storage_get_my_conversation_onboarding_error: {
            bind: 'getOnboardingInformation'
          },
          global_storage_get_my_conversation_onboarding_success: {
            bind: 'getOnboardingInformation'
          },
          MCM_RESPONSE_SUCESS_REMOTE_MANAGER_INFO: {
            bind: 'successGetAgents'
          },
          MCM_RESPONSE_ERROR_REMOTE_MANAGER_INFO: {
            bind: 'onConversationGetErrorCommunication'
          }
        },
        out: {
          global_set_in_storage: {
            bind: 'set-my-conversations-onboarding'
          },
          global_get_from_storage: {
            bind: 'get-my-conversations-onboarding-consult'
          },
          MCM_OPEN_INFO_MODAL: {
            bind: 'open-modal-slider'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-modal-remote'
          },
          MCM_DATA_REQUEST_LIST_CONV_CH: {
            bind: 'event-get-list-conversation-mcm'
          },
          MCM_DATA_CONVERSATION_WITH_MESSAGES_CH: {
            bind: 'list-conversations-with-messages'
          },
          MCM_HAS_CONVERSATION_WITH_MESSAGES_CH: {
            bind: 'list-conversations-has-conversations'
          },
          open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          MCM_MODAL_ERROR_GET_LIST_CONV_CH: {
            bind: 'conversation-list-get-error'
          },
          MCM_SEARCH_BAR_DATA: {
            bind: 'list-conversations-with-messages'
          },
          MCM_SET_HEADER_RIGHT_ICON: {
            bind: 'set-header-right-icon'
          },
          MCM_REQUEST_CONTRACTS_CH: {
            bind: 'request-contracts-with-agents'
          },
          MCM_ID_BANKER_CH: {
            bind: 'event-id-banker'
          },
          MCM_NAME_BANKER_CH: {
            bind: 'event-name-banker'
          },
          MCM_NUMBER_CONTACT_CHANNEL: {
            bind: 'set-agent-mobile-number'
          },
          MCM_OPEN_MODAL_ONBOARDING_CHANNEL: {
            bind: 'open-modal-onboarding'
          },
          MCM_REQUEST_AGENTS_OF_BUSINESS_CONTRACT: {
            bind: 'request-equity-agents'
          },
          MCM_PAGE_GET_REMOTE_MANAGER_INFO: {
            bind: 'get-business-agents'
          },
          MCM_CUSTOMER_ID: {
            bind: 'set-customer-id'
          }
        }
      }
    }
  };

  const dmGlobalApisPrivateBanking = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-private-banking-portfolios',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      privatePortafoliosApiVersion: CONFIG.globalServices.versions.privateBankingPortfolios,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          MCM_REQUEST_CONTRACTS_CH: {
            bind: 'getListPrivateBankingPortfolios'
          },
          MCM_REQUEST_AGENTS_OF_BUSINESS_CONTRACT: {
            bind: 'getPrivateBankingPortfoliosWithBusinessAgents'
          }
        },
        out: {
          MCM_SUCCESS_GET_CONTRACTS_CH: {
            bind: 'get-list-private-banking-portfolios-success-response'
          },
          MCM_ERROR_GET_CONTRACTS_CH: {
            bind: 'error-on-get-list-private-banking-portfolios'
          },
          MCM_SUCCESS_GET_BUSINESS_AGENTS_CH: {
            bind: 'get-private-banking-portfolios-with-business-agents-success-response'
          },
          MCM_ERROR_GET_BUSINESS_AGENTS_CH: {
            bind: 'error-on-get-private-banking-portfolioswith-business-agents'
          }
        }
      }
    }
  };

  const dmGlobalApisConversation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-conversation',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      conversationAPIVersion: 0,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          MCM_DATA_REQUEST_LIST_CONV_CH: {
            bind: 'getListConversations'
          }
        },
        out: {
          MCM_SUCCESS_GET_LIST_CONV: {
            bind: 'set-list-conversations'
          },
          MCM_ERROR_GET_LIST_CONV_CH: {
            bind: 'error-on-get-list-conversations'
          }
        }
      }
    }
  };

  const conversationList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-conversation-list',
    properties: {
      className: 'my-conversation-message',
      noResultsPicture: 'images/myTalks/empty_micro.svg',
      noResultsMessageTitle: 'glomo-conversation-no-results-message-title',
      noResultsMessageLabel: 'glomo-conversation-no-results-message-description',
      classIronIcon: 'new-conversation-icon-center-style',
      newConversationSectionClass: 'new-conversation-section-center-style',
      newDatePosition: true,
      showNewDesignNoResult: true,
      hasConversation: true,
      hideHistoryTitle: false,
      containerClass: 'container',
      attachmentIcon: 'coronita:attached',
      cellsConnections: {
        in: {
          MCM_DATA_CONVERSATION_WITH_MESSAGES_CH: {
            bind: 'conversations'
          },
          MCM_HAS_CONVERSATION_WITH_MESSAGES_CH: {
            bind: 'hasConversation'
          }
        },
        out: {
          MC_NAVIGATION_THEME_CHANNEL: {
            bind: 'new-message-conversation',
            link: {
              page: 'myConversationThemePage'
            }
          },
          MC_SHOW_CONVERSATION_CHAT_CH: {
            bind: 'show-messsage-conversation',
            link: {
              page: 'myConversationChatPage'
            }
          },
          open_control_veil: {
            bind: 'show-messsage-conversation'
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-my-conversations',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          MC_REMOTE_MANAGER_INFO: {
            bind: 'validateSegment'
          },
          MCM_SUCCESS_GET_LIST_CONV: {
            bind: 'firePageVisit'
          },
          MCM_OPEN_MODAL_ONBOARDING_CHANNEL: {
            bind: 'validateCodeModal'
          },
          MCM_MODAL_ERROR_GET_LIST_CONV_CH: {
            bind: 'fireModalWithData'
          }
        },
        out: {
          MCM_ANALYTICS_LIST_CONVERSATIONS: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS._getAdvancedFootprints('listConversation')
          },
          MCM_ANALYTICS_ONBOARDING_MY_CONVERSATIONS: {
            bind: 'fire-analytics-onboarding-my-conversations',
            analytics: ANALYTICS._getAdvancedFootprints('contactBanker')
          },
          MCM_ANALYTICS_ERROR_LIST_CONVERSATIONS: {
            bind: 'analytics-modal',
            analytics: ANALYTICS._myTalksGetErrors('errorListConversation')
          }
        }
      }
    }
  };

  const apiCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host,
      native,
      requiredToken,
      customersApiVersion,
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          MCM_CUSTOMER_ID: {
            bind: 'customerId'
          },
          MCM_PAGE_GET_REMOTE_MANAGER_INFO: {
            bind: 'getBusinessAgents'
          }
        },
        out: {
          MCM_RESPONSE_SUCESS_REMOTE_MANAGER_INFO: {
            bind: 'get-business-agents-success'
          },
          MCM_RESPONSE_ERROR_REMOTE_MANAGER_INFO: {
            bind: 'get-business-agents-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'my-conversation-message-page',
    currentPage: {
      url: '/my-conversation-message-page'
    },
    template,
    pages,
    components: [
      spinner(CONFIG),
      lifeCycle,
      navigationHandler,
      header,
      modalSlider,
      messageManager,
      dmGlobalApisPrivateBanking,
      dmGlobalApisConversation,
      conversationList,
      analyticsManager,
      apiCustomers
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'my_conversation_onboarding' ], CONFIG);

  return base;
};
