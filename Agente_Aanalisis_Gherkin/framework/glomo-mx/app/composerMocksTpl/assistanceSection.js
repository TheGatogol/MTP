/* eslint-disable complexity */
'use strict';

module.exports = CONFIG => {
  const {
    globalServices: {
      host, aapTargetAuthentication,
      requiredToken = 'tsec',
      versions: {
        privateBankingPortfolios: privateBankingPortfoliosApiVersion,
        customersV1,
        customersV4
      }
    },
    nativeIos = false,
    nativeShell = false,
    native = false
  } = CONFIG;
  const PAGE_NAME = 'assistanceSection';
  const utils = require('./common/helpers/_utils');
  const {APP_SIDEBAR: sidebar} = utils;
  const { SPINNER: getSpinner } = utils;
  const spinner = getSpinner(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const appFooter = utils.appFooter(CONFIG, PAGE_NAME);
  const analyticsAssistanceSection = require('./analytics/_assistanceSection');
  const analyticsMyTalks = require('./analytics/_myTalks')(CONFIG);
  const analyticsMyConversations = require('./analytics/_myConversations')(CONFIG);
  const customersApiVersion = {
    v1: customersV1,
    v4: customersV4
  };
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  if (isSpherica) {
    spinner.tag = 'cells-spinner-veil-spherica';
  }
  spinner.properties = {
    className: 'solid-spinner',
    open: true,
    cellsConnections: {
      in: {
        ...spinner.properties.cellsConnections.in
      }
    }
  };

  const base = {
    hash: 'assistance-section',
    currentPage: {
      url: '/assistance-section'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'fade',
        drawerWidth: '100%',
        hasFooter: appFooter ? true : false,
        footerHeight: appFooter ? 64 : 0,
        headerFixed: true,
        footerFixed: true,
        rightDrawer: true,
        disableEdgeSwipe: nativeShell,
        avoidToggleMenu: nativeShell,
        extraHeaderClass: 'dark-blue-bg',
        headerHeight: utils.headerHeight,
        className: nativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
        cellsConnections: {
          in: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: {
        footerFloating: true,
        className: `bg-light-grey${nativeIos ? ' dashboard-ios-top-padding ios-top-padding' : ''}`
      }
    },
    components: [
      isSpherica ? spinner : getSpinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'assistanceSection',
          tokenName: requiredToken,
          private: false,
          customInitEvents: {
            'swipe-menu-enabled': true
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_assistanceSection: {
                bind: 'init'
              }
            },
            out: {
              assistance_section_init_page: {
                bind: 'init-page'
              },
              assistance_section_reset_page: {
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
        tag: 'bbva-header-main',
        tagSpherica: 'bbva-header-main-spherica',
        familyPath: '@bbva-web-components/bbva-header-main',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'assistanceSectionPage',
          iconRightPrimary: 'coronita:menu',
          iconRightPrimaryExpanded: true,
          text: 'assistance-section-header-title',
          className: nativeIos ? 'u-padding-top--0 bg-core-blue' : 'bg-core-blue',
          iOSFixedHeader: nativeIos,
          cellsConnections: {
            out: {
              global_open_native_menu: {
                bind: `header-main-icon-${isSpherica ? 'click' : 'right-primary-click'}`
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'first-level-initial',
          className: nativeIos && 'u-padding-top--0',
          rightButtons: [
            {
              id: 'btn-right-primary',
              name: 'menu',
              icon: 'spherica:menu',
              label: 'bbva-header-main-spherica-menu',
              accessibilityText: 'bbva-header-main-spherica-menu-aria-label'
            }
          ]
        }
      },
      {
        zone: 'assistanceSectionModal.slot-content-header',
        type: 'UI',
        tag: 'bbva-banner-image',
        tagSpherica: 'bbva-banner-image-spherica',
        familyPath: '@bbva-web-components/bbva-banner-image',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              ASSISTANCE_SECTION_IMAGE_TITLE: {
                bind: 'imageSrc'
              },
              ASSISTANCE_SECTION_SHOW_BANNER_IMAGE: {
                bind: 'hidden'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-padding-top--0 u-padding-bottom--0'
        }
      },
      {
        zone: 'assistanceSectionModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          alignment: 'center',
          fontWeight: '500',
          cellsConnections: {
            in: {
              ASSISTACE_SECTION_MODAL_TITLE: {
                bind: 'text'
              },
              ASSISTACE_SECTION_MODAL_SIZE_TITLE: {
                bind: 'size'
              },
              ASSISTACE_SECTION_MODAL_TAG_TITLE: {
                bind: 'tag'
              }
            }
          }
        },
        propertiesSpherica: {
          fontType: 'title-secondary',
          className: 'u-margin-top--1 u-margin-bottom--0-5'
        },
        attributes: {
          unset: true
        }
      },
      {
        zone: 'assistanceSectionModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          alignment: 'center',
          elipsis: true,
          lines: '3',
          cellsConnections: {
            in: {
              ASSISTACE_SECTION_MODAL_SLOT_TEX_ONE: {
                bind: 'text'
              },
              ASSISTACE_SECTION_MODAL_SIZE_TEXT: {
                bind: 'size'
              },
              ASSISTACE_SECTION_MODAL_TAG_TEXT: {
                bind: 'tag'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_SLOT_TEX_ONE: {
                bind: 'className'
              }
            }
          }
        }
      },
      {
        zone: 'assistanceSectionModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          alignment: 'center',
          elipsis: true,
          lines: '3',
          cellsConnections: {
            in: {
              ASSISTACE_SECTION_MODAL_TEXT_ASSISTANT: {
                bind: 'text'
              },
              ASSISTACE_SECTION_MODAL_SIZE_TEXT: {
                bind: 'size'
              },
              ASSISTACE_SECTION_MODAL_TAG_TEXT: {
                bind: 'tag'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_TEXT_ASSISTANT: {
                bind: 'className'
              }
            }
          }
        }
      },
      {
        zone: 'assistanceSectionModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          alignment: 'center',
          elipsis: true,
          lines: '2',
          cellsConnections: {
            in: {
              ASSISTACE_SECTION_MODAL_SLOT_TEX_TWO: {
                bind: 'text'
              },
              ASSISTACE_SECTION_MODAL_SIZE_TEXT: {
                bind: 'size'
              },
              ASSISTACE_SECTION_MODAL_TAG_TEXT: {
                bind: 'tag'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_SLOT_TEX_TWO: {
                bind: 'className'
              }
            }
          }
        }
      },
      {
        zone: 'assistanceSectionModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          alignment: 'center',
          elipsis: true,
          lines: '2',
          cellsConnections: {
            in: {
              ASSISTACE_SECTION_MODAL_TEXT_LINEA_BBVA: {
                bind: 'text'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_TEXT_LINEA_BBVA: {
                bind: 'className'
              },
              ASSISTACE_SECTION_MODAL_SIZE_TEXT: {
                bind: 'size'
              },
              ASSISTACE_SECTION_MODAL_TAG_TEXT: {
                bind: 'tag'
              }
            }
          }
        }
      },
      {
        zone: 'assistanceSectionModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          alignment: 'center',
          elipsis: true,
          lines: '2',
          cellsConnections: {
            in: {
              ASSISTACE_SECTION_MODAL_SLOT_TEX_THREE: {
                bind: 'text'
              },
              ASSISTACE_SECTION_MODAL_SIZE_TEXT: {
                bind: 'size'
              },
              ASSISTACE_SECTION_MODAL_TAG_TEXT: {
                bind: 'tag'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_SLOT_TEX_THREE: {
                bind: 'className'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-assistance-authentication',
        familyPath: '@glomo-web-components/bbva-manager-assistance',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          aapTargetAuthentication,
          cellsConnections: {
            in: {
              INHERANCE_AUTHENTICATION_START_PROCESS: {
                bind: 'handleInheritanceAuthentication'
              }
            },
            out: {
              INHERANCE_AUTHENTICATION_ERROR: {
                bind: 'inheritance-authetication-error-phone'
              },
              global_action_launcher_dialer: {
                bind: 'open-call-action'
              },
              global_open_control_veil: {
                bind: 'open-control-veil'
              },
              global_close_control_veil: {
                bind: 'close-control-veil'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-assistance-center',
        familyPath: '@glomo-web-components/bbva-manager-assistance',
        render: 'litElement',
        properties: {
          id: 'assistanceCenterDM',
          isIos: nativeIos,
          bbvaAssistanceManagerLine: '5552268041',
          bbvaLine: '8002262663',
          stdOfficeHour: {
            startTime: '08:00:00',
            endTime: '23:00:00'
          },
          customersApiVersion: {
            v1: customersV1,
            v4: customersV4
          },
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlags'
              },
              global_set_app_settings: {
                bind: 'setAppSettingsParams'
              },
              global_set_app_settings_error: {
                bind: 'appSettingsError'
              },
              global_login_success_indicators: {
                bind: 'detailCustomerResponse'
              },
              dashboard_set_operationals: {
                bind: 'listFinancialOverview'
              },
              ASSISTANCE_SECTION_CARD_OPERATION_BUTTON_CLICK: {
                bind: 'cardOperationClicked'
              },
              ASSISTANT_SECTION_BUTTON_CLICK: {
                bind: 'modalButtonClicked'
              },
              ASSISTANCE_RESPONSE_SUCCESS_REMOTE_MANAGER_INFO: {
                bind: 'advisorResponseSuccessData'
              },
              ASSISTANCE_RESPONSE_ERROR_REMOTE_MANAGER_INFO: {
                bind: 'advisorResponseErrorData'
              },
              ASSISTANCE_SECTION_ERROR_CLICK: {
                bind: 'errorShowCardsClicked'
              },
              HANDLE_ACTIONS_REMOTE_MANAGER: {
                bind: 'handleActionsRemoteManager'
              },
              INHERANCE_AUTHENTICATION_ERROR: {
                bind: 'cardOperationClicked'
              },
              INHERANCE_AUTHENTICATION_NUMBER_PHONE: {
                bind: 'inheritanceAutheticationCallPhone'
              },
              global_open_dialer_error: {
                bind: 'errorOpenDialer'
              },
              assistance_section_get_contracts_patrimonial_and_private: {
                bind: 'handleDataPatrimonialAndPrivateBanking'
              },
              assistance_section_success_get_business_agents_patrimonial_and_private: {
                bind: 'handleDataPatrimonialAndPrivateBanking'
              },
              assistance_section_init_page: {
                bind: 'getStorageMonoproduct'
              },
              global_storage_get_monoproduct_success: {
                bind: 'localStorageSuccess'
              }
            },
            out: {
              INHERANCE_AUTHENTICATION_START_PROCESS: {
                bind: 'inheritance-authentication-start-process'
              },
              ASSISTANCE_SECTION_CARD_LIST: {
                bind: 'assistance-section-payload'
              },
              global_open_control_veil: {
                bind: 'request-assistance-section-payload'
              },
              global_close_control_veil: {
                bind: 'assistance-spinner'
              },
              global_action_launcher_dialer: {
                bind: 'open-call-action'
              },
              ASSISTACE_SECTION_MODAL_HEADER: {
                bind: 'show-modal-header-text'
              },
              ASSISTACE_SECTION_MODAL_TITLE: {
                bind: 'show-modal-title-text'
              },
              ASSISTACE_SECTION_MODAL_BUTTON: {
                bind: 'show-modal-button-text'
              },
              ASSISTACE_SECTION_MODAL_LINK: {
                bind: 'show-modal-link-text'
              },
              ASSISTACE_SECTION_MODAL_FULL_HEIGHT: {
                bind: 'show-modal-full-height'
              },
              ASSISTACE_SECTION_MODAL_TITLE_ICON: {
                bind: 'show-modal-title-icon'
              },
              ASSISTACE_SECTION_MODAL_TYPE: {
                bind: 'show-modal-type'
              },
              ASSISTACE_SECTION_MODAL_HEADER_TYPE: {
                bind: 'show-modal-header-type'
              },
              ASSISTACE_SECTION_MODAL_FIXED_FOOTER: {
                bind: 'show-modal-fixed-footer'
              },
              ASSISTACE_SECTION_MODAL_SLOT_TEX_ONE: {
                bind: 'show-modal-slot-text-1'
              },
              ASSISTACE_SECTION_MODAL_SLOT_TEX_TWO: {
                bind: 'show-modal-slot-text-2'
              },
              ASSISTACE_SECTION_MODAL_SLOT_TEX_THREE: {
                bind: 'show-modal-slot-text-3'
              },
              ASSISTANCE_SECTION_IMAGE_TITLE: {
                bind: 'show-modal-image'
              },
              ASSISTACE_SECTION_MODAL_SIZE_TITLE: {
                bind: 'size-title'
              },
              ASSISTACE_SECTION_MODAL_SIZE_TEXT: {
                bind: 'size-text'
              },
              ASSISTACE_SECTION_MODAL_TAG_TITLE: {
                bind: 'tag-title'
              },
              ASSISTACE_SECTION_MODAL_TAG_TEXT: {
                bind: 'tag-text'
              },
              ASSISTACE_SECTION_MODAL_TEXT_ASSISTANT: {
                bind: 'show-modal-slot-text-assistant'
              },
              ASSISTACE_SECTION_MODAL_TEXT_LINEA_BBVA: {
                bind: 'show-modal-slot-text-linea-bbva'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_TEXT_ASSISTANT: {
                bind: 'class-modal-slot-text-assistant'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_TEXT_LINEA_BBVA: {
                bind: 'class-modal-slot-text-linea-bbva'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_SLOT_TEX_ONE: {
                bind: 'class-modal-slot-text-1'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_SLOT_TEX_TWO: {
                bind: 'class-modal-slot-text-2'
              },
              ASSISTACE_SECTION_CLASSNAME_MODAL_SLOT_TEX_THREE: {
                bind: 'class-modal-slot-text-3'
              },
              ASSISTANCE_SECTION_ELEMENTS_CLOSE_MODAL: {
                bind: 'close-modal-elements'
              },
              ASSISTANCE_SECTION_MODAL_BODY_PAYLOAD: {
                bind: 'modal-body-payload'
              },
              ASSISTANCE_SECTION_REQUEST_USER_CLASSIFICATIONS: {
                bind: 'request-user-classifications'
              },
              ASSISTANCE_SECTION_CUSTOMER_ID: {
                bind: 'send-customer-id'
              },
              ASSISTANCE_SECTION_GET_REMOTE_MANAGER_INFO: {
                bind: 'get-remote-manager-info'
              },
              SET_API_VERSION_CUSTOMERS: {
                bind: 'set-api-version-customers'
              },
              MCM_ID_BANKER_CH: {
                bind: 'send-remote-banker-id'
              },
              MCM_NAME_BANKER_CH: {
                bind: 'send-remote-banker-name'
              },
              MC_REMOTE_MANAGER_FLAG: {
                bind: 'send-remote-banker-flag'
              },
              MC_REMOTE_MANAGER_INFO: {
                bind: 'send-remote-banker-info'
              },
              ASSISTANCE_SECTION_FULL_CARD: {
                bind: 'send-assistance-manager-full-card'
              },
              navigate_my_talks_channel: {
                bind: 'navigate-to-conversation-list',
                'forward-to-native': true
              },
              ASSISTANCE_SECTION_NAVIGATE_MY_CONVERSATION_WEB: {
                bind: 'navigate-to-conversation-list-web',
                link: {
                  page: 'myConversations',
                  params: {
                    receiverId: 'receiverId'
                  }
                }
              },
              ASSISTANCE_SECTION_NAVIGATE_MY_CONVERSATION: {
                bind: 'navigate-to-my-talks-page',
                link: {
                  page: 'myConversations',
                  params: {
                    receiverId: 'receiverId'
                  }
                }
              },
              ASSISTANCE_SECTION_NAVIGATE_MY_CONVERSATIONS_FUTURA: {
                bind: 'navigate-to-my-conversations-futura',
                analytics: analyticsMyConversations._getAdvancedInternalLinks('myConversationsButton'),
                link: {
                  page: 'myConversations',
                  params: {
                    receiverId: 'receiverId'
                  }
                }
              },
              ASSISTANCE_SECTION_SHOW_BANNER_IMAGE: {
                bind: 'show-banner-image'
              },
              ASSISTANCE_SECTION_NAVIGATE_TO_EMAIL_PAGE: {
                bind: 'navigate-to-email-page',
                link: {
                  page: 'assistanceManager'
                }
              },
              ASSISTANCE_SECTION_NAVIGATE_TO_SMART_ASSISTANCE_PAGE: {
                bind: 'navigate-to-smart-assistance-page',
                analytics: analyticsAssistanceSection.INTERNAL_LINK_BLUE_CARD,
                link: {
                  page: 'digitalButler'
                }
              },
              ASSISTANCE_SECTION_NAVIGATE_TO_EQUITY_ASSISTANCE_PAGE: {
                bind: 'navigate-to-equity-assistance-page',
                link: {
                  page: 'equityAssistance',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              ASSISTANCE_SECTION_NAVIGATE_TO_DISABILITY_VIDEOCALL_PAGE: {
                bind: 'navigate-to-disability-videocall-page',
                link: {
                  page: 'disabilityVideocallHearingTactical'
                }
              },
              ASSISTANCE_SECTION_ERROR_SHOW_CARD_VARIANT: {
                bind: 'error-show-card-variant'
              },
              ASSISTANCE_SECTION_ERROR_SHOW_CARD_MESSAGE: {
                bind: 'error-show-card-message'
              },
              ASSISTANCE_SECTION_ERROR_SHOW_CLASS_NAME: {
                bind: 'error-show-card-class-name'
              },
              ASSISTANCE_SECTION_ERROR_SHOW_CARD_LINK_TITLE: {
                bind: 'error-show-card-link-title'
              },
              ASSISTANCE_SECTION_ERROR_SHOW_CARD_HIDDEN: {
                bind: 'error-show-card-hidden'
              },
              global_get_from_storage: {
                bind: 'get-app-settings-info',
                'forward-to-native': true
              },
              assistance_section_disability_videocall_opening_hours: {
                bind: 'bbva-manager-assistance-center-disability-videocall-schedule'
              },
              assistance_section_send_request_to_expand_business_agents_patrimonial_and_private_banking: {
                bind: 'send-request-to-expand-business-agents-patrimonial-and-private-banking'
              },
              assistance_section_request_equity_agents_patrimonial_and_private: {
                bind: 'request-equity-agents-patrimonial-and-private'
              },
              assistance_section_banker_id_patrimonial_and_private: {
                bind: 'banker-id-patrimonial-and-private'
              },
              assistance_section_banker_name_patrimonial_and_private: {
                bind: 'banker-name-patrimonial-and-private'
              },
              assistance_section_banker_lastname_patrimonial_and_private: {
                bind: 'banker-lastname-patrimonial-and-private'
              },
              assistance_section_banker_mobile_number_patrimonial_and_private: {
                bind: 'banker-mobile-number-patrimonial-and-private'
              },
              assistance_section_faqs_patrimonial_and_private: {
                bind: 'faqs-patrimonial-and-private'
              },
              assistance_section_faqs_patrimonial_and_private_conversations: {
                bind: 'faqs-patrimonial-and-private'
              },
              assistance_section_banker_id_remote_banking: {
                bind: 'banker-id-remote-banking'
              },
              assistance_section_banker_name_remote_banking: {
                bind: 'banker-name-remote-banking'
              },
              assistance_section_banker_lastname_remote_banking: {
                bind: 'banker-lastname-remote-banking'
              },
              assistance_section_banker_id_regional_center_remote_banking: {
                bind: 'banker-regional-center-remote-banking'
              },
              assistance_section_banker_mobile_number_remote_banking: {
                bind: 'banker-mobile-number-remote-banking'
              },
              assistance_section_faqs_remote_banking: {
                bind: 'faqs-remote-banking'
              },
              assistance_section_update_monoproduct_user: {
                bind: 'update-is-monoproduct-user'
              },
              ASSISTANCE_SECTION_CARD_OPERATION_BUTTON_CLICK: {
                bind: 'invitation-non-account-link',
                link: {
                  page: 'invitationNonAccountClient'
                }
              },
              assistance_section_get_time_zone: {
                bind: 'get-true-time-success'
              },
              assistance_section_get_time_zone_meet: {
                bind: 'get-time-zone-success'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-nativeconnector-device-info',
        familyPath: '@glomo-web-components/bbva-nativeconnector-device-info',
        render: 'litElement',
        properties: {
          pluginName: 'DeviceInfo',
          cellsConnections: {
            in: {
              assistance_section_get_time_zone: {
                bind: 'getTrueTime'
              },
              assistance_section_get_time_zone_meet: {
                bind: 'getTimeZone'
              }
            },
            out: {
              device_info_platform_success_disibility: {
                bind: 'get-true-time-success'
              },
              device_info_platform_success_time_zone_disibility: {
                bind: 'get-time-zone-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-private-banking-portfolios',
        properties: {
          host,
          native,
          privatePortafoliosApiVersion: privateBankingPortfoliosApiVersion,
          requiredToken: requiredToken,
          cellsConnections: {
            in: {
              assistance_section_send_request_to_expand_business_agents_patrimonial_and_private_banking: {
                bind: 'getListPrivateBankingPortfolios'
              },
              assistance_section_request_equity_agents_patrimonial_and_private: {
                bind: 'getPrivateBankingPortfoliosWithBusinessAgents'
              }
            },
            out: {
              assistance_section_get_contracts_patrimonial_and_private: {
                bind: 'get-list-private-banking-portfolios-success-response'
              },
              MCM_ERROR_GET_CONTRACTS_CH: {
                bind: 'error-on-get-list-private-banking-portfolios'
              },
              assistance_section_success_get_business_agents_patrimonial_and_private: {
                bind: 'get-private-banking-portfolios-with-business-agents-success-response'
              },
              MCM_ERROR_GET_BUSINESS_AGENTS_CH: {
                bind: 'error-on-get-private-banking-portfolioswith-business-agents'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-customers-bgadpmock',
        familyPath: 'cells-dm-global-apis-customers-bgadpmock',
        properties: {
          host,
          requiredToken,
          customersApiVersion,
          headers: { 'Accept-Language': 'es' },
          native,
          cellsConnections: {
            in: {
              ASSISTANCE_SECTION_CUSTOMER_ID: {
                bind: 'customerId'
              },
              ASSISTANCE_SECTION_GET_REMOTE_MANAGER_INFO: {
                bind: 'getBusinessAgents'
              },
              SET_API_VERSION_CUSTOMERS: {
                bind: 'customersApiVersion'
              }
            },
            out: {
              ASSISTANCE_RESPONSE_SUCCESS_REMOTE_MANAGER_INFO: {
                bind: 'get-business-agents-success'
              },
              ASSISTANCE_RESPONSE_ERROR_REMOTE_MANAGER_INFO: {
                bind: 'get-business-agents-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-message',
        tagSpherica: 'bbva-notification-message-spherica',
        familyPath: '@bbva-web-components/bbva-notification-message',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          className: 'u-margin--1 u-margin-bottom--0',
          cellsConnections: {
            in: {
              ASSISTANCE_SECTION_ERROR_SHOW_CARD_VARIANT: {
                bind: 'variant'
              },
              ASSISTANCE_SECTION_ERROR_SHOW_CARD_MESSAGE: {
                bind: isSpherica ? 'messageTitle' : 'message'
              },
              ASSISTANCE_SECTION_ERROR_SHOW_CARD_LINK_TITLE: {
                bind: 'linkTitle'
              },
              ASSISTANCE_SECTION_ERROR_SHOW_CARD_HIDDEN: {
                bind: 'hidden'
              }
            },
            out: {
              ASSISTANCE_SECTION_ERROR_CLICK: {
                bind: 'notification-message-link-click'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-clip-list',
        tagSpherica: 'bbva-clip-list-spherica',
        familyPath: '@glomo-web-components/bbva-clip-list',
        familyPathSpherica: '@glomo-web-components/bbva-clip-list-spherica',
        render: 'litElement',
        properties: {
          allClickable: false,
          isExpandible: true,
          iconSize: 64,
          toggleStyleCard: true,
          cellsConnections: {
            in: {
              ASSISTANCE_SECTION_CARD_LIST: {
                bind: 'list'
              },
              ASSISTANCE_SECTION_FULL_CARD: {
                bind: isSpherica ? 'additionalItems' : 'fullCardItems'
              }
            },
            out: {
              ASSISTANCE_SECTION_CARD_OPERATION_BUTTON_CLICK: {
                bind: 'card-operation-clicked'
              },
              HANDLE_ACTIONS_REMOTE_MANAGER: {
                bind: 'card-operation-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        tagSpherica: 'bbva-help-modal-spherica',
        familyPath: '@bbva-web-components/bbva-help-modal',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        container: true,
        properties: {
          id: 'assistanceSectionModal',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            in: {
              ASSISTACE_SECTION_MODAL_HEADER: {
                bind: 'headerText'
              },
              ASSISTACE_SECTION_MODAL_BUTTON: {
                bind: 'buttonText'
              },
              ASSISTACE_SECTION_MODAL_LINK: {
                bind: 'linkText'
              },
              ASSISTACE_SECTION_MODAL_FULL_HEIGHT: {
                bind: 'fullHeight'
              },
              ASSISTACE_SECTION_MODAL_TITLE_ICON: {
                bind: 'titleIcon'
              },
              ASSISTACE_SECTION_MODAL_TYPE: {
                bind: 'modalType'
              },
              ASSISTACE_SECTION_MODAL_HEADER_TYPE: {
                bind: 'headerType'
              },
              ASSISTACE_SECTION_MODAL_FIXED_FOOTER: {
                bind: 'fixedFooter'
              },
              ASSISTANCE_SECTION_ELEMENTS_CLOSE_MODAL: {
                bind: 'closeModalElements'
              },
              ASSISTANCE_SECTION_MODAL_BODY_PAYLOAD: {
                bind: 'open'
              }
            },
            out: {
              ASSISTANT_SECTION_BUTTON_CLICK: {
                bind: 'help-modal-footer-button-click'
              }
            }
          }
        },
        propertiesSpherica: {
          titleIcon: 'spherica:close',
          closeButtonAriaLabel: 'bbva-help-modal-close-button',
          closeLabel: 'bbva-help-modal-close-button'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytics-manager-assistance-center',
        familyPath: '@glomo-web-components/bbva-manager-assistance',
        render: 'litElement',
        properties: {
          id: 'assistanceCenterAnalytics',
          currentPage: 'assistance-section',
          cellsConnections: {
            in: {
              assistance_section_init_page: {
                bind: 'firePageView'
              },
              ASSISTANCE_SECTION_CARD_OPERATION_BUTTON_CLICK: {
                bind: 'fireLinkAction'
              },
              ASSISTANCE_SECTION_MODAL_BODY_PAYLOAD: {
                bind: 'firePageViewModals'
              },
              ASSISTANCE_SECTION_ELEMENTS_CLOSE_MODAL: {
                bind: 'closeModalElements'
              },
              ASSISTANT_SECTION_BUTTON_CLICK: {
                bind: 'buttonModalCallBbva'
              }
            },
            out: {
              assistance_section_analytics_page_view: {
                bind: 'analytics-page-view-assistance-section',
                analytics: analyticsAssistanceSection.HUELLA_PAGE_VIEW_HELP
              },
              assistance_section_analytics_call_bbva: {
                bind: 'analytics-link-action-call-bbva',
                analytics: analyticsAssistanceSection.EXTERNAL_LINK_CALL_BBVA
              },
              assistance_section_analytics_call_bbva_pat: {
                bind: 'analytics-link-action-call-bbva-pat',
                analytics: analyticsAssistanceSection.EXTERNAL_LINK_CALL_BBVA_PAT
              },
              assistance_section_analytics_call_assistance_manager: {
                bind: 'analytics-link-action-call-assitance-manager',
                analytics: analyticsAssistanceSection.EXTERNAL_LINK_CALL_PERSONAL_ASSISTANCE
              },
              assistance_section_analytics_call_rejected_card: {
                bind: 'analytics-link-action-call-rejected-card',
                analytics: analyticsAssistanceSection.EXTERNAL_LINK_CALL_REJECTED_CARD
              },
              assistance_section_analytics_page_view_bbva_out_hours: {
                bind: 'analytics-page-view-bbva-out-hours',
                analytics: analyticsAssistanceSection.HUELLA_PAGE_VIEW_BBVA_OUT_HOURS
              },
              assistance_section_analytics_page_view_out_hours: {
                bind: 'analytics-page-view-out-hours',
                analytics: analyticsAssistanceSection.HUELLA_PAGE_VIEW_OUT_HOURS
              },
              assistance_section_analytics_page_view_assistance_manager_out_hours: {
                bind: 'analytics-page-view-assistance-manager-out-hours',
                analytics: analyticsAssistanceSection.HUELLA_PAGE_VIEW_ASSISTANCE_MANAGER_OUT_HOURS
              },
              assistance_section_analytics_modal_call_bbva: {
                bind: 'analytics-link-action-modal-call-bbva',
                analytics: analyticsAssistanceSection.EXTERNAL_LINK_MODAL_CALL_BBVA
              }
            }
          }
        }
      },
      {
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
              ASSISTANCE_SECTION_NAVIGATE_MY_CONVERSATION: {
                bind: 'fireAppOnClickStart'
              }
            },
            out: {
              ASSISTANCE_SECTION_ANALYTICS_OPEN_MY_TALKS: {
                bind: 'analytics-app-on-click-start',
                analytics: analyticsMyTalks._getAdvancedInternalLinks('openMyTalks')
              }
            }
          }
        }
      }
    ]
  };

  if (appFooter) {
    base.components.splice(5, 0, appFooter);
    appFooter.properties.cellsConnections.in = {
      ...appFooter.properties.cellsConnections.in,
      assistance_section_update_monoproduct_user: {
        bind: 'isMonoproductUser'
      }
    };
    appFooter.properties.cellsConnections.out = {
      ...appFooter.properties.cellsConnections.out,
      ASSISTANCE_SECTION_CARD_OPERATION_BUTTON_CLICK: {
        bind: 'invitation-non-account-link',
        link: {
          page: 'invitationNonAccountClient'
        }
      }
    };
  }

  if (!nativeShell) {
    base.components.push(sidebar(CONFIG));
  }

  const spherizedBase = sphericaPageUtils.spherize(base);

  if (nativeShell) {
    const get = utils.get(base);
    const headerTag = `bbva-header-main${isSpherica ? '-spherica' : ''}`;

    get(headerTag).properties.cellsConnections.out = {
      global_open_native_menu: {
        bind: `header-main-icon-${isSpherica ? 'click' : 'right-primary-click'}`,
        'forward-to-native': true
      }
    };
  }

  return spherizedBase;
};
