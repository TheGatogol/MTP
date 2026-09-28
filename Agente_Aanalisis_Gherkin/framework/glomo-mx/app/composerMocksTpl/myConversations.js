'use strict';
module.exports = config => {
  const {
    aemHost,
    globalServices: { host, requiredToken = 'tsec', versions: { conversations: conversationsApiVersion } },
    native = false,
    nativeIos = false,
    nativeShell = false
  } = config;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pageName = 'myConversations';
  const pages = require('./common/_pages')(config)(pageName);
  const { createSpinner, APP_SIDEBAR: appSideBar, getLanguage, del: utilsDel } = require('./common/helpers/_utils');
  const localStorageApp = require('./common/_local-storage');
  const analyticsMyConversations = require('./analytics/_myConversations')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      headerFixed: true,
      topOnConfirm: true,
      disableScrollLock: true,
      animationType: 'verticalUp',
      showConfirmInManualScroll: true,
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`,
      iOSFixedHeader: nativeIos,
      extraHeaderClass: 'dark-blue-bg',
      rightDrawer: true,
      disableEdgeSwipe: nativeShell,
      avoidToggleMenu: nativeShell,
      edgeSwipeSensitivity: 50,
      cellsConnections: {
        in: {
          global_open_native_menu: {
            bind: 'toggleMenu'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica'
    })
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false,
        'user-info-my-conversations-init': true
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          my_conversations_init: {
            bind: 'user-info-my-conversations-init'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const userInfoMyConversations = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/user-info-my-conversations-gl',
    tag: 'user-info-my-conversations-gl',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      host,
      native,
      requiredToken,
      allowAttachments: true,
      allowCamera: true,
      allowExtensions: ['image', 'document'],
      isEncryptedId: true,
      iOSFixedHeader: nativeIos,
      onboardingBold: true,
      bulletExtra: 1,
      showAdvice: true,
      showHelpFaqs: true,
      showSidebarIcon: true,
      aemContentFragmentPath: 'content/caas/mexico/glomo/faqs/mis-conversaciones-faqs.model.json',
      aemHost,
      maxFileSize: 4,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackNavigation'
          },
          global_storage_get_my_conversation_onboarding_error: {
            bind: 'getOnboardingInformation'
          },
          global_storage_get_my_conversation_onboarding_success: {
            bind: 'getOnboardingInformation'
          },
          ASSISTANCE_SECTION_CUSTOMER_ID: {
            bind: 'customerId'
          },
          my_conversations_init: {
            bind: 'initMyConversations'
          },
          assistance_section_banker_id_patrimonial_and_private: {
            bind: 'receiverId'
          },
          assistance_section_banker_name_patrimonial_and_private: {
            bind: 'receiverName'
          },
          assistance_section_banker_lastname_patrimonial_and_private: {
            bind: 'receiverLastName'
          },
          assistance_section_banker_mobile_number_patrimonial_and_private: {
            bind: 'bankerMobileNumberPatrimonialAndPrivate'
          },
          assistance_section_faqs_patrimonial_and_private: {
            bind: 'aemContentFragmentPath'
          },
          assistance_section_faqs_patrimonial_and_private_conversations: {
            bind: 'showSecondMessage'
          },
          assistance_section_banker_id_remote_banking: {
            bind: 'receiverId'
          },
          assistance_section_banker_name_remote_banking: {
            bind: 'receiverName'
          },
          assistance_section_banker_lastname_remote_banking: {
            bind: 'receiverLastName'
          },
          assistance_section_banker_id_regional_center_remote_banking: {
            bind: 'poolType'
          },
          assistance_section_banker_mobile_number_remote_banking: {
            bind: 'bankerMobileNumberRemoteBanking'
          },
          MC_REMOTE_MANAGER_FLAG: {
            bind: 'bankerRemoteFlag'
          },
          assistance_section_faqs_remote_banking: {
            bind: 'aemContentFragmentPath'
          },
          global_storage_get_my_conversation_attach_error: {
            bind: 'getAttachInformation'
          },
          global_storage_get_my_conversation_attach_success: {
            bind: 'getAttachInformation'
          },
          global_file_fletcher_fetch_success: {
            bind: 'fileToInclude'
          },
          global_media_capture_get_picture_success: {
            bind: 'fileToInclude'
          },
          user_info_my_conversations_camera_permission_request_success: {
            bind: 'handleCheckStateCameraPermissions'
          },
          user_info_my_conversations_camera_permission_check_state_success: {
            bind: 'handleCheckStateCameraPermissions'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'user-info-my-conversations-native-local-storage-get'
          },
          global_set_in_storage: {
            bind: 'user-info-my-conversations-native-local-storage-set'
          },
          global_alert_manager_open_with_settings: {
            bind: 'user-info-my-conversations-error-modal-open'
          },
          global_open_native_menu: {
            bind: 'user-info-my-conversations-toggle-menu-open',
            'forward-to-native': true
          },
          my_conversations_list_page_view: {
            bind: 'user-info-my-conversations-my-conversations-page-open',
            analytics: analyticsMyConversations._getAdvancedFootprints('myConversations')
          },
          my_conversations_create_modal_page_view: {
            bind: 'user-info-my-conversations-new-modal-open',
            analytics: analyticsMyConversations._getAdvancedFootprints('createConversation')
          },
          my_conversations_error_list_conversations: {
            bind: 'user-info-my-conversations-error-list-modal-open',
            analytics: analyticsMyConversations._getAdvancedFootprints('errorListConversations')
          },
          my_conversations_welcome_onboarding_page_view: {
            bind: 'user-info-my-conversations-welcome-onboarding-modal-open',
            analytics: analyticsMyConversations._getAdvancedFootprints('welcomeOnboarding')
          },
          my_conversations_attach_onboarding_page_view: {
            bind: 'user-info-my-conversations-attachOnBoarding-modal-open',
            analytics: analyticsMyConversations._getAdvancedFootprints('attachOnboarding')
          },
          my_conversations_chat_page_view: {
            bind: 'user-info-my-conversations-chat-page-open',
            analytics: analyticsMyConversations._getAdvancedFootprints('activeConversation')
          },
          my_conversations_search_modal_internal_link: {
            bind: 'user-info-my-conversations-search-modal-open',
            analytics: analyticsMyConversations._getAdvancedInternalLinks('searchButton')
          },
          my_conversations_search_modal_page_view_results: {
            bind: 'user-info-my-conversations-modal-results-search',
            analytics: analyticsMyConversations._getAdvancedFootprints('searchResults')
          },
          my_conversations_create_internal_link: {
            bind: 'user-info-my-conversations-conversation-post',
            analytics: analyticsMyConversations._getAdvancedInternalLinks('createConversationButton')
          },
          my_conversations_conversation_resolved_page_view: {
            bind: 'user-info-my-conversations-chat-page-resolved-open',
            analytics: analyticsMyConversations._getAdvancedFootprints('conversationResolved')
          },
          exit_my_conversations: {
            bind: 'user-info-my-conversations-step-assistance-center-back',
            backStep: true
          },
          MYC_SEND_CONVERSATION_CREATED_TO_VALIDATE_SESSION: {
            bind: 'user-info-my-conversations-conversation-boveda-create'
          },
          MYC_SEND_MESSAGE_CREATED_TO_VALIDATE_SESSION: {
            bind: 'user-info-my-conversations-message-boveda-create'
          },
          MYC_SEND_UPDATED_MESSAGE_CREATED_TO_VALIDATE_SESSION: {
            bind: 'user-info-my-conversations-message-boveda-update'
          },
          global_open_document_base64: {
            bind: 'user-info-my-conversations-document-base64-open'
          },
          global_file_fletcher_fetch: {
            bind: 'user-info-my-conversations-file-fetch'
          },
          global_media_capture_get_picture: {
            bind: 'user-info-my-conversations-gallery-open'
          },
          user_info_my_conversations_check_camera_permission: {
            bind: 'user-info-my-conversations-check-mobile-permission'
          },
          user_info_my_conversations_request_camera_permission: {
            bind: 'user-info-my-conversations-grant-mobile-permission'
          },
          global_client_voice_connect_my_conversation: {
            bind: 'user-info-my-conversations-crm-voice-connect-question'
          }
        },
        params: {
          customer: 'global_user',
          receiverId: 'receiverId'
        }
      }
    }
  };

  const validateMessagesAndConversationsMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-conversations',
    familyPath: '@glomo-web-components/bbva-dataprovider-conversations',
    render: 'litElement',
    properties: {
      host,
      native,
      version: conversationsApiVersion,
      requiredToken,
      requiresTsec: true,
      cellsConnections: {
        in: {
          MYC_SEND_CONVERSATION_CREATED_TO_VALIDATE_SESSION: {
            bind: 'postSessionsValidate',
            previousState: false
          },
          MYC_SEND_MESSAGE_CREATED_TO_VALIDATE_SESSION: {
            bind: 'postSessionsValidate',
            previousState: false
          },
          MYC_SEND_UPDATED_MESSAGE_CREATED_TO_VALIDATE_SESSION: {
            bind: 'postSessionsValidate',
            previousState: false
          }
        }
      }
    }
  };

  const fileFetcher = {
    zone: 'app__main',
    tag: 'bbva-nativeconnector-file-fetcher-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-file-fetcher-plugin',
    render: 'litElement',
    type: 'CC',
    properties: {
      cellsConnections: {
        in: {
          global_file_fletcher_fetch: {
            bind: 'fileFetch'
          }
        },
        out: {
          global_file_fletcher_fetch_success: {
            bind: 'file-fetch-success'
          }
        }
      }
    }
  };

  const mediaCapture = {
    zone: 'app__main',
    tag: 'bbva-nativeconnector-media-capture',
    familyPath: '@glomo-web-components/bbva-nativeconnector-media-capture',
    render: 'litElement',
    type: 'CC',
    properties: {
      cellsConnections: {
        in: {
          global_media_capture_get_picture: {
            bind: 'getPicture'
          }
        },
        out: {
          global_media_capture_get_picture_success: {
            bind: 'get-picture-success'
          }
        }
      }
    }
  };

  const cameraPermissionComponent = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-permissions-plugin',
    properties: {
      cellsConnections: {
        in: {
          user_info_my_conversations_check_camera_permission: {
            bind: 'checkState'
          },
          user_info_my_conversations_request_camera_permission: {
            bind: 'request'
          }
        },
        out: {
          user_info_my_conversations_camera_permission_request_success: {
            bind: 'permissions-request-success'
          },
          user_info_my_conversations_camera_permission_request_error: {
            bind: 'permissions-request-error'
          },
          user_info_my_conversations_camera_permission_check_state_success: {
            bind: 'permissions-check-state-success'
          }
        }
      }
    }
  };

  const base = {
    hash: 'my-conversations',
    currentPage: {
      url: '/my-conversations'
    },
    pages,
    template,
    components: [
      createSpinner(config),
      lifeCycle,
      userInfoMyConversations,
      validateMessagesAndConversationsMx,
      fileFetcher,
      mediaCapture,
      cameraPermissionComponent
    ]
  };

  if (!nativeShell) {
    base.components.push(appSideBar(config));
  }

  addCommonErrors(base.components)();
  localStorageApp.addOutStorageChannels(base.components, ['my_conversation_onboarding', 'my_conversation_attach'], config);

  return sphericaPageUtils.spherize(base);
};
