/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'myConversationSearchPage';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const COUNTRY = utils.getCountry(CONFIG);
  const SPINNER = utils.SPINNER(CONFIG);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'horizontal',
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      headerFixed: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerHeight: utils.headerHeight,
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      mode: 'seamed',
      cellsConnections: {}
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
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
          __bridge_page_myConversationSearchPage: {
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
      continue: 'myConversationMessagePage',
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
          navigate_my_conversation_search_to_myConversationMessagePage: {
            bind: 'navigation-to-myConversationMessagePage',
            link: {
              page: 'myConversationMessagePage'
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
      className: 'header--dark',
      leftIcon: 'coronita:return-12',
      titleName: 'my-conversations-search-title',
      cellsConnections: {
        in: {},
        out: {
          navigation_conversation_message_request: {
            bind: 'click-left-button',
            backStep: true
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
      cellsConnections: {
        in: {
          __bridge_page_myConversationSearchPage: {
            bind: 'prepareSearch'
          },
          MCS_SEARCH_CHANGED: {
            bind: 'validateSearch'
          }
        },
        out: {
          MCS_CLEAN_LIST_CONVERSATIONS_CH: {
            bind: 'clean-conversations-list'
          },
          MCS_CLEAN_SEARCH_BAR: {
            bind: 'clean-search-bar'
          },
          MCS_FOCUS_SEARCH_BAR: {
            bind: 'focus-search-bar'
          }
        }
      }
    }
  };

  const searchAutocomplete = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-search-autocomplete',
    properties: {
      className: 'dark-blue',
      filterProperties: [ 'subject' ],
      hidden: false,
      _hideResults: true,
      showClearIcon: true,
      autofocus: true,
      cellsConnections: {
        in: {
          MCM_SEARCH_BAR_DATA: {
            bind: 'data'
          },
          MCS_SEARCH_FILTER: {
            bind: '_hideResults'
          },
          MCS_CLEAN_SEARCH_BAR: {
            bind: 'clear'
          },
          MCS_FOCUS_SEARCH_BAR: {
            bind: 'focusInput'
          }
        },
        out: {
          MCS_SEARCH_FILTER: {
            bind: 'last-data-filtered'
          },
          MCS_SEARCH_CHANGED: {
            bind: 'search-changed'
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
      classIronIcon: 'new-conversation-icon-center-style',
      newConversationSectionClass: 'new-conversation-section-center-style',
      newDatePosition: true,
      hasConversation: true,
      hideNewConversationButton: true,
      hideHistoryTitle: true,
      containerClass: '',
      attachmentIcon: 'coronita:attached',
      cellsConnections: {
        in: {
          MCS_SEARCH_FILTER: {
            bind: 'conversations'
          },
          MCS_CLEAN_LIST_CONVERSATIONS_CH: {
            bind: 'conversations'
          }
        },
        out: {
          MC_SHOW_CONVERSATION_CHAT_CH: {
            bind: 'show-messsage-conversation',
            link: {
              page: 'myConversationChatPage',
              skipHistory: true
            }
          },
          open_control_veil: {
            bind: 'show-messsage-conversation'
          }
        }
      }
    }
  };

  const base = {
    hash: COUNTRY + '-my-conversation-search-page',
    currentPage: {
      url: '/my-conversation-search-page',
      params: []
    },
    template,
    pages: pages,
    components: [
      SPINNER,
      lifeCycle,
      navigationHandler,
      header,
      messageManager,
      searchAutocomplete,
      conversationList
    ]
  };

  return base;
};
