'use strict';

module.exports = CONFIG => {
  const {
    SPINNER: spinner,
    headerHeight
  } = require('./common/helpers/_utils');
  const pageName = 'myConversationChatPage';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const localStorageApp = require('./common/_local-storage');
  const ANALYTICS = require('./analytics/_myTalks')(CONFIG);

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'horizontal',
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: isNativeIos,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerHeight,
      className: isNativeIos ? 'ios-top-padding' : '',
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
          __bridge_page_myConversationChatPage: {
            bind: 'init'
          }
        },
        out: {
          my_conversation_chat_init_page: {
            bind: 'init-page'
          },
          my_conversation_chat_reset_page: {
            bind: 'reset'
          },
          close_control_veil: {
            bind: 'init-page'
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

  const globalApisConversation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-conversation',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      conversationAPIVersion: 0,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      requiresTsec: true,
      cellsConnections: {
        in: {
          MCC_DATA_REQUEST_CREATE_MESSAGE_CH: {
            bind: 'postCreateMessage'
          },
          MCC_LIST_MESSAGES_CONV_CH: {
            bind: 'getListMessagesConversation'
          },
          MCC_UPDATE_MESSAGE: {
            bind: 'updateMessage'
          },
          MCC_DELETE_MESSAGE_CH: {
            bind: 'delMessage'
          }
        },
        out: {
          MCC_SUCCESS_GET_LIST_MESSAGE_WITH_CONV_CH: {
            bind: 'set-list-messages-conversation'
          },
          MCC_ERROR_GET_LIST_MESSAGE_CH: {
            bind: 'error-on-get-list-messages-conversation'
          },
          MCT_SUCCESS_CREATE_MESSAGE_CH: {
            bind: 'location-create-message'
          },
          MCC_SUCCESS_CREATE_MESSAGE: {
            bind: 'post-create-messages'
          },
          MCC_SUCCESS_RESPONSE_CREATE: {
            bind: 'post-create-messages'
          },
          MCC_SUCCESS_UPDATE_MESSAGE: {
            bind: 'post-update-messages'
          },
          MCC_SUCCESS_RESPONSE_UPDATE: {
            bind: 'post-update-messages'
          },
          MCC_SUCCESS_RESPONSE_UPDATE_MESSAGE_VALIDATE: {
            bind: 'post-update-messages'
          },
          MCC_ERROR_UPDATE_MESSAGE: {
            bind: 'error-post-update-messages'
          },
          MCC_ERROR_CREATE_MESSAGE_CH: {
            bind: 'error-post-create-messages'
          },
          MCC_SUCCESS_RESPONSE_DELETE: {
            bind: 'delete-message'
          }
        }
      }
    }
  };

  const mxConversation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-conversations',
    familyPath: '@glomo-web-components/bbva-dataprovider-conversations',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      version: CONFIG.globalServices.versions.conversations,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      requiresTsec: true,
      cellsConnections: {
        in: {
          MTC_DATA_REQUEST_CREATE_MESSAGE_SESSION_CH: {
            bind: 'postSessionsValidate'
          }
        }
      }
    }
  };

  const globalApisBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      businessDocumentsApiVersion: '1',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      requiresTsec: true,
      cellsConnections: {
        in: {
          MCCP_DATA_REQUEST_SAVE_DOCUMENT_ATTACHMENT: {
            bind: 'saveDocument'
          },
          MCC_REQUEST_TEMPORARY_DOCUMENT: {
            bind: 'getTemporaryDocument'
          }
        },
        out: {
          MCC_SUCCESS_SAVE_DOCUMENT: {
            bind: 'success-on-save-document'
          },
          MCC_ERROR_SAVE_DOCUMENT: {
            bind: 'error-on-save-document'
          },
          MCC_SUCCESS_ON_GET_TEMPORARY_DOCUMENT: {
            bind: 'success-on-get-temporary-document'
          },
          MCC_ERROR_ON_GET_TEMPORARY_DOCUMENT: {
            bind: 'error-on-get-temporary-document'
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
      continue: 'myConversationChatPage',
      cellsConnections: {
        in: {
          navigation_my_conversation_chat_back_request: {
            bind: 'goBack'
          },
          AMB_PRIMARY_CHANNEL: {
            bind: 'navigate'
          }
        },
        out: {
          navigate_my_conversation_chat_to_myConversationThemePage: {
            bind: 'navigation-to-myConversationThemePage',
            link: {
              page: 'myConversationThemePage'
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
      rightIcon: 'coronita:telephone',
      cellsConnections: {
        in: {
          MCC_TITLE_HEADER: {
            bind: 'titleName'
          }
        },
        out: {
          CHANNEL_CHANGE_HEADER: {
            bind: 'click-left-button'
          },
          CHANNEL_CHANGE_HEADER_RIGHT_CHAT: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const conversationChatManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-conversation-chat-manager',
    properties: {
      maxAttachmentSize: 8,
      requestInterval: 12000,
      openAttachedWithNative: true,
      globalImplementation: true,
      elitePhone: '8001121113',
      cellsConnections: {
        in: {
          my_conversation_chat_init_page: {
            bind: 'init'
          },
          my_conversation_chat_reset_page: {
            bind: 'reset'
          },
          global_login_success: {
            bind: 'setCustomerToGlobalCache'
          },
          MC_REMOTE_MANAGER_INFO: {
            bind: 'setProperties'
          },
          MCM_ID_BANKER_CH: {
            bind: 'idBanker'
          },
          MCM_NAME_BANKER_CH: {
            bind: 'nameBanker'
          },
          CHANNEL_CHANGE_HEADER: {
            bind: 'validateTemporaryAttachments'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'validateTemporaryAttachments'
          },
          open_with_agent_chat_channel: {
            bind: 'handlePushNotification'
          },
          CHANNEL_CHANGE_HEADER_RIGHT_CHAT: {
            bind: 'callAgent'
          },
          MCM_NUMBER_CONTACT_CHANNEL: {
            bind: 'numberContact'
          },
          MCT_NAVIGATION_TO_CONV_CH: {
            bind: 'conversationChat'
          },
          push_notification_broker_chat_channel: {
            bind: 'conversationChat'
          },
          MC_SHOW_CONVERSATION_CHAT_CH: {
            bind: 'conversationChat'
          },
          MCC_SUCCESS_GET_LIST_MESSAGE_WITH_CONV_CH: {
            bind: 'viewMessages'
          },
          MCT_SUCCESS_CREATE_MESSAGE_CH: {
            bind: 'getNewMessage'
          },
          MCC_ERROR_GET_LIST_MESSAGE_CH: {
            bind: 'onErrorListMessages'
          },
          MCC_ERROR_CREATE_MESSAGE_CH: {
            bind: 'onConversationGetErrorCreateMessage'
          },
          MCC_SHOW_PREVIEW_MESSAGE_CH: {
            bind: 'showPreviewMessage'
          },
          MCC_ERROR_UPDATE_MESSAGE: {
            bind: 'onConversationGetErrorCreateMessage'
          },
          MCC_SHOW_MODAL_GET_LIST_CONV_ERROR_CH: {
            bind: 'conversationChat'
          },
          get_attachment_conversation_file_channel: {
            bind: 'attachmentConversationFile'
          },
          MCC_SUCCESS_SAVE_DOCUMENT: {
            bind: 'validateSavedAttachments'
          },
          MCC_ERROR_SAVE_DOCUMENT: {
            bind: 'showErrorOnSaveDocument'
          },
          MCC_SUCCESS_CREATE_MESSAGE: {
            bind: 'newMessageCreated'
          },
          MCC_SUCCESS_UPDATE_MESSAGE: {
            bind: 'newMessageCreated'
          },
          MCC_SUCCESS_ON_GET_TEMPORARY_DOCUMENT: {
            bind: 'openDocumentViewer'
          },
          MCC_ERROR_ON_GET_TEMPORARY_DOCUMENT: {
            bind: 'showErrorOnGetTemporaryDocument'
          },
          MCC_GET_ATTACHMENT_FROM_ITEM: {
            bind: 'getAttachmentFromItem'
          },
          MCC_SEND_MESSAGE: {
            bind: 'parseMessageChatData'
          },
          MCC_MESSAGE_ATTACH: {
            bind: 'attachFile'
          },
          MCC_GET_ATTACHMENT_TYPE: {
            bind: 'validateAttachmentType'
          },
          MCC_SHOW_MODAL_GET_CREATE_MESSAGE_CONV_ERROR_CHAT_CH: {
            bind: 'resendMessage'
          },
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          response_client_id: {
            bind: 'responseClientId'
          },
          global_storage_get_loginData_success: {
            bind: 'responseClientId'
          },
          MCC_SHOW_MODAL_HEAVY_FILE_ERROR_RETRY_CHAT_CH: {
            bind: 'retryAttachmentOption'
          },
          MCC_SHOW_MODAL_SAVE_DOCUMENT_ERROR_RETRY_CHAT_CH: {
            bind: 'retrySaveAttachment'
          },
          MCC_DRAFT_MESSAGE: {
            bind: 'reviewDraft'
          },
          MCC_SHOW_MODAL_ATTACHMENTS_WITHOUT_SENDING_ACCEPT_CH: {
            bind: 'validateDraftMessage'
          },
          MCC_SUCCESS_RESPONSE_CREATE: {
            bind: 'validateSavingDraft'
          },
          MCC_SUCCESS_RESPONSE_UPDATE: {
            bind: 'validateSavingDraft'
          },
          MCC_SUCCESS_RESPONSE_UPDATE_MESSAGE_VALIDATE: {
            bind: 'getUpdateMessage'
          },
          MCC_SUCCESS_RESPONSE_DELETE: {
            bind: 'validateSavingDraft'
          },
          MCC_SHOW_MODAL_HOUR_ATTENTION_CALL_ACCEPT_CH: {
            bind: 'callEliteline'
          },
          MCC_SHOW_MODAL_GET_LIST_MESSAGES_ERROR_RETRY_CH: {
            bind: 'listMessagesConversation'
          },
          MCC_DELETE_ATTACHMENT: {
            bind: 'deleteAttachment'
          },
          MC_OPEN_DOCUMENT_PREVIEW: {
            bind: 'openDocumentPreview'
          },
          MCC_DELETE_DRAFT_AND_ATTACH: {
            bind: 'deleteDraftAndAttach'
          },
          MCC_RESPONSE_SUCCESS_REMOTE_MANAGER_INFO: {
            bind: 'validateBusinessAgent'
          }
        },
        out: {
          MTC_DATA_REQUEST_CREATE_MESSAGE_SESSION_CH: {
            bind: 'create-message-session-validate'
          },
          MCC_SEND_PREVIEW_ATTACHMENTS: {
            bind: 'send-preview-attachments'
          },
          open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          MCC_GET_REMOTE_MANAGER_INFO: {
            bind: 'get-business-agent-info'
          },
          MC_REMOTE_MANAGER_FLAG: {
            bind: 'send-remote-banker-flag'
          },
          MC_REMOTE_MANAGER_INFO: {
            bind: 'send-remote-banker-info'
          },
          MCC_TITLE_HEADER: {
            bind: 'event-title-header'
          },
          MCC_OPEN_CALLPAD: {
            bind: 'open-callpad-event'
          },
          MCC_UPDATE_MESSAGE: {
            bind: 'request-update-message'
          },
          MCC_DATA_REQUEST_CREATE_MESSAGE_CH: {
            bind: 'event-create-message'
          },
          MCC_LIST_MESSAGES_CONV_CH: {
            bind: 'event-get-list-messages'
          },
          MCC_MODAL_ATTACH_FILE_CH: {
            bind: 'option-file-selection'
          },
          CHANNEL_CHANGE_HEADER_LEFT_CHAT: {
            bind: 'back-step-stop-request',
            backStep: true
          },
          MCCP_DATA_REQUEST_SAVE_DOCUMENT_ATTACHMENT: {
            bind: 'request-save-document'
          },
          MCC_REQUEST_TEMPORARY_DOCUMENT: {
            bind: 'request-temporary-document'
          },
          MCC_SET_IMAGE_SRC: {
            bind: 'set-image-source'
          },
          MCC_SET_IMAGE_TITLE: {
            bind: 'set-image-viewer-title'
          },
          MCC_OPEN_IMAGE_VIEWER: {
            bind: 'open-image-viewer'
          },
          MCC_DOC_TITLE: {
            bind: 'set-pdf-viewer-title'
          },
          MCC_DOC_CONTENT: {
            bind: 'set-pdf-source'
          },
          MCC_OPEN_PDF_MODAL: {
            bind: 'open-pdf-viewer'
          },
          MCC_SET_FOCUS_CHAT: {
            bind: 'set-focus-on-chat'
          },
          MCC_RESET_CHAT: {
            bind: 'reset-chat'
          },
          MCC_CLEAN_HEADER: {
            bind: 'clean-title-header'
          },
          MCC_SET_CHAT_MESSAGES: {
            bind: 'set-chat-messages'
          },
          MCC_MODAL_RESET_ATTACH_OPCION_CH: {
            bind: 'reset-attach-option'
          },
          MCC_SCROLL_TOP_PAGE: {
            bind: 'scroll-top-page'
          },
          request_client_id: {
            bind: 'request-user-client-id',
            'forward-to-native': true
          },
          MCC_TOGGLE_INPUT_FORM: {
            bind: 'event-toggle-input-form'
          },
          MCC_SET_PROPERTIES_CHAT: {
            bind: 'set-properties-chat'
          },
          MCC_CONFIG_TOAST: {
            bind: 'event-config-toast'
          },
          MCC_OPEN_MODAL_ERROR_CH: {
            bind: 'open-error-modal'
          },
          MCC_VALIDATE_DRAFT_MESSAGE: {
            bind: 'validate-draft-message'
          },
          MCC_SHOW_DRAFT_MESSAGE: {
            bind: 'show-draft-message'
          },
          global_get_from_storage: {
            bind: 'get-native-local-storage'
          },
          MCC_DELETE_MESSAGE_CH: {
            bind: 'request-delete-message'
          },
          MCC_SHOW_ATTACHMENT_ERROR_ALERT: {
            bind: 'show-attachment-error-alert'
          },
          MCC_CLOSE_TOAST_MODAL: {
            bind: 'close-modals'
          },
          MCC_CLOSE_MODAL_SELECTOR: {
            bind: 'close-modals'
          },
          MCC_DISABLE_ATTACH_BUTTON: {
            bind: 'disable-attach-button'
          },
          MCC_QUIT_INPUT_FOCUS: {
            bind: 'quit-input-focus'
          },
          MCC_FLAG_DRAFT_MESSAGE: {
            bind: 'has-draft-message'
          }
        }
      }
    }
  };

  const chat = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-chat',
    properties: {
      maxAreaValue: 3600,
      designAdvance: true,
      sendButtonIcon: 'coronita:send',
      classMessageField: 'message-input-adv',
      classMessageInput: 'message-field-adv',
      classSendButton: 'send-message',
      classContainer: 'container',
      classBalloon: 'user',
      classForm: 'form-chat',
      classAnonymousToggle: 'toggle',
      classMessagesContainer: isNativeIos ? 'messages-container-adv-ios' : 'messages-container-adv',
      noMessagesSecurity: false,
      noMessagesPrivacy: false,
      noMessagesSecure: true,
      autoFocus: false,
      autoScroll: false,
      inlineClass: 'help',
      cellsConnections: {
        in: {
          MC_REMOTE_MANAGER_FLAG: {
            bind: 'setMessagesRemoteManager'
          },
          MCC_VALIDATE_DRAFT_MESSAGE: {
            bind: 'sendDraftMessage'
          },
          MCC_SHOW_DRAFT_MESSAGE: {
            bind: '_messageInput'
          },
          MCC_TOGGLE_INPUT_FORM: {
            bind: 'setProperties'
          },
          MCC_SET_CHAT_MESSAGES: {
            bind: 'printMessages'
          },
          MCC_SET_FOCUS_CHAT: {
            bind: '_setFocus'
          },
          MCC_RESET_CHAT: {
            bind: 'reset'
          },
          MCC_SCROLL_TOP_PAGE: {
            bind: '_scrollTop'
          },
          MCC_TEXTAREA_FOCUS: {
            bind: '_scrollTop'
          },
          MCC_SHOW_MODAL_WARNING_UPLOAD_ATTACHMENT_ACCEPT_CH: {
            bind: '_submit'
          },
          MCC_DISABLE_ATTACH_BUTTON: {
            bind: 'disableAttachButton'
          },
          MCC_SET_ATTATCHMENTS_PREVIEW_SLOT_ATTACHMENT_CLASS: {
            bind: 'slotAttachmentsClass'
          },
          MCC_SHOW_ATTACHMENT_ERROR_ALERT: {
            bind: 'noMessageAttachmentAlert'
          },
          MCC_SEND_PREVIEW_ATTACHMENTS: {
            bind: 'modifyPreviousAttachments'
          },
          MCC_QUIT_INPUT_FOCUS: {
            bind: '_quitFocus'
          },
          MCC_FLAG_DRAFT_MESSAGE: {
            bind: 'hasDraftMessage'
          },
          MCC_SET_PROPERTIES_CHAT: {
            bind: 'setProperties'
          }
        },
        out: {
          MCC_DELETE_ATTACHMENT: {
            bind: 'delete-attachment'
          },
          MC_OPEN_DOCUMENT_PREVIEW: {
            bind: 'open-document-preview'
          },
          MCC_SEND_MESSAGE: {
            bind: 'chat-message-sent'
          },
          MCC_DRAFT_MESSAGE: {
            bind: 'send-draft-message'
          },
          MCC_MESSAGE_ATTACH: {
            bind: 'chat-message-attach'
          },
          MCC_GET_ATTACHMENT_FROM_ITEM: {
            bind: 'cells-list-file-item-clicked'
          },
          MCC_TEXTAREA_FOCUS: {
            bind: 'cells-autogrow-textarea-focus-changed'
          },
          MCC_DELETE_DRAFT_AND_ATTACH: {
            bind: 'delete-draft-and-attach'
          },
          close_control_veil: {
            bind: 'new-messages-received'
          }
        }
      }
    }
  };

  const modalSelector = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-selector',
    properties: {
      className: 'no-padding',
      items: [
        {
          id: '001',
          name: 'glomo-conversation-modal-selector-option-1',
          option: 'gallery'
        },
        {
          id: '002',
          name: 'glomo-conversation-modal-selector-option-2',
          option: 'camera'
        },
        {
          id: '003',
          name: 'glomo-conversation-modal-selector-option-3',
          option: 'document'
        }
      ],
      cellsConnections: {
        in: {
          MCC_MODAL_ATTACH_FILE_CH: {
            bind: 'open'
          },
          MCC_MODAL_RESET_ATTACH_OPCION_CH: {
            bind: 'reset'
          },
          MCC_CLOSE_TOAST_MODAL: {
            bind: 'close'
          }
        },
        out: {
          MCC_GET_ATTACHMENT_TYPE: {
            bind: 'item-selected-changed'
          },
          dashboard_notifications_open_native_settings_ios: {
            bind: 'open-native-settings'
          },
          open_app_permissions_settings: {
            bind: 'item-clicked',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const modalAlert = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-alert',
    properties: {
      toast: true,
      type: 'error',
      duration: 3000,
      noCancelOnOutsideClick: true,
      cellsConnections: {
        in: {
          MCC_CONFIG_TOAST: {
            bind: 'setProperties'
          },
          MCC_CLOSE_TOAST_MODAL: {
            bind: 'close'
          }
        }
      }
    }
  };

  const mobileActionLauncher = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          MCC_OPEN_CALLPAD: {
            bind: 'openDialer'
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
          MCC_TITLE_HEADER: {
            bind: 'validateActiveConversation'
          },
          MCC_OPEN_MODAL_ERROR_CH: {
            bind: 'validateCodeModal'
          }
        },
        out: {
          MCC_ANALYTICS_OPEN_CONVERSATION: {
            bind: 'fire-analytics-active-conversation',
            analytics: ANALYTICS._getAdvancedFootprints('openConversation')
          },
          MCC_ANALYTICS_ERROR_BANKER_OUT_OFFICE: {
            bind: 'fire-analytics-banker-out-office',
            analytics: ANALYTICS._myTalksGetErrors('errorBankerOutOffice')
          },
          MCC_ANALYTICS_ERROR_CREATE_MESSAGE: {
            bind: 'fire-analytics-error-unsent-message',
            analytics: ANALYTICS._myTalksGetErrors('errorCreateMessage')
          }
        }
      }
    }
  };
  const globalApisCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      headers: { 'Accept-Language': 'es' },
      native: CONFIG.native || false,
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          MCC_GET_REMOTE_MANAGER_INFO: {
            bind: 'getBusinessAgents'
          }
        },
        out: {
          MCC_RESPONSE_SUCCESS_REMOTE_MANAGER_INFO: {
            bind: 'get-business-agents-success'
          }
        }
      }
    }
  };

  const base = {
    hash: 'my-conversation-message-page',
    currentPage: {
      url: '/my-conversation-chat-page'
    },
    pages,
    template,
    components: [
      spinner(CONFIG),
      lifeCycle,
      globalApisConversation,
      globalApisBusinessDocuments,
      navigationHandler,
      header,
      conversationChatManager,
      chat,
      modalSelector,
      modalAlert,
      mobileActionLauncher,
      analyticsManager,
      globalApisCustomers,
      mxConversation
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);

  return base;
};
