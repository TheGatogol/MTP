/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const PAGE_NAME = 'recipientsInit';
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS = require('./analytics/_recipients')();
  const isNativeIos = CONFIG.nativeIos || false;
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('recipients-init');
  const HOST = CONFIG.globalServices.host;
  const LANGUAGE = utils.getLanguage();
  const base = {
    currentPage: {
      url: '/recipient-init'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [PAGE_NAME + '_PAGE_VISITED']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
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
              ['__bridge_app_' + PAGE_NAME]: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME ]: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME + '_INIT_PAGE']: {
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-profile',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_EXIT_TO_PROFILE']: {
                bind: 'goBack'
              },
              RECIPIENTS_TO_SUCCESS_PAGE: {
                bind: 'navigateToPage'
              },
              [PAGE_NAME + '_NAVIGATE_TO_RECIPIENTS_FORM']: {
                bind: 'navigateToPage'
              }
            },
            out: {
              [PAGE_NAME + '_NAVIGATION_TO_DASHBOARD']: {
                bind: 'navigation-to-profile',
                backStep: true
              },
              [PAGE_NAME + 'RESET_MULTISTEP_PROCESS']: {
                bind: 'navigation-to-profile'
              },
              RECIPIENTS_TO_SUCCESS_PAGE_HANDLER: {
                bind: 'navigation-to-recipientsSuccessPage',
                link: {
                  cleanUntil: 'recipientsReview',
                  page: 'recipientsReview'
                }
              },
              [PAGE_NAME + '_NAVIGATE_TO_RECIPIENTS_FORM_HANDLER']: {
                bind: 'navigation-to-recipientsForm',
                link: {
                  page: 'recipientsForm'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-upgrade-beneficiaries',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-payroll-portability-profile',
        properties: {
          cellsConnections: {
            in: {
              GET_FROM_UPGRADE_MODULAR: {
                bind: 'fromModularN2N4Flag'
              },
              [PAGE_NAME + '_EXIT_PROCESS']: {
                bind: 'validateExit'
              }
            },
            out: {
              [PAGE_NAME + '_EXIT_TO_PROFILE']: {
                bind: 'redirect-to-profile'
              },
              dashboard_refresh_financial_overview: {
                bind: 'go-dashbord',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard',
                  skipHistory: true
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-manager-profile-recipients',
        tag: 'bbva-manager-profile-recipients',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME + '_PROFILE_MULTISTEP_GET_RELATIONSHIPS' ]: {
                bind: 'getParentescos'
              },
              [PAGE_NAME + '_OPEN_PRIVACY_MODAL']: {
                bind: 'openPrivacyModal'
              },
              global_financial_overview_details: {
                bind: 'getFinancialOverViewDetails'
              },
              [PAGE_NAME + '_ACCOUNT_ITEM_CLICk']: {
                bind: 'accountClientClick'
              },
              [PAGE_NAME + '_RESPONSE_GET_ACCOUNT_PARTICIPANTS_SUCCESS']: {
                bind: 'getResponseListParticipantsSuccess'
              },
              [PAGE_NAME + '_RESPONSE_GET_ACCOUNT_PARTICIPANTS_ERROR']: {
                bind: 'getResponseListParticipantsError'
              },
              [PAGE_NAME + '_REQUEST_LIST_BUSINESS_DOCUMENTS']: {
                bind: 'handleListBusinessDocuments'
              },
              [PAGE_NAME + '_POST_RESPONSE_ACCOUNT_PARTICIPANTS_SUCCESS']: {
                bind: 'getResponseParticipantsPostSuccess'
              },
              [PAGE_NAME + '_POST_RESPONSE_ACCOUNT_PARTICIPANTS_ERROR']: {
                bind: 'getResponseParticipantsPostError'
              },
              [PAGE_NAME + '_INIT_HEADER_MAIN_ICON_RIGHT_PRIMARY_CLICK']: {
                bind: 'manageBackNavigation'
              },
              [PAGE_NAME + '_DISPATCH_ACCOUNT_SELECTED']: {
                bind: 'accountSelected'
              },
              [PAGE_NAME + '_DISPATCH_RECIPIENTS_LENGTH']: {
                bind: 'analyticsRecipientListLength'
              },
              [PAGE_NAME + '_HIDE_CONFIRM']: {
                bind: 'allStepsCompleted'
              },
              [PAGE_NAME + '_RESPONSE_POST_PARTICIPANTS_OTP']: {
                bind: 'openedOtpModal'
              }
            },
            out: {
              GLOBAL_CONFIRM_LOGOUT_MESSAGE: {
                bind: 'open-informative-modal'
              },
              [PAGE_NAME + '_DISPATCH_LIST_USER_BLACK_LIST']: {
                bind: 'open-modal-error-user-is-in-black-list',
                analytics: ANALYTICS.ERROR_BLACK_LIST
              },
              [PAGE_NAME + '_DISPATCH_LIST_ACCOUNTS']: {
                bind: 'account-list'
              },
              [PAGE_NAME + '_DISPATCH_LIST_PARTICIPANTS_PARSED']: {
                bind: 'list-participants'
              },
              [PAGE_NAME + '_DISPATCH_ACCOUNT_ID']: {
                bind: 'set-account-id'
              },
              [PAGE_NAME + '_REQUEST_GET_LIST_PARTICIPANTS']: {
                bind: 'handle-request-list-participants'
              },
              [PAGE_NAME + '_SET_ACCOUNT_ID']: {
                bind: 'manager-profile-recipients-set-account-id'
              },
              [PAGE_NAME + '_REQUEST_POST_PARTICIPANTS']: {
                bind: 'manager-profile-recipients-create-account-participants'
              },
              global_retry_error: {
                bind: 'fullmodal-error',
                analytics: ANALYTICS.OPERATION_NOT_AVAILABLE
              },
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'hide-spinner'
              },
              RECIPIENTS_TO_SUCCESS_PAGE: {
                bind: 'recipients-go-to-success'
              },
              SEND_DATA_TO_SUCCESS_PAGE: {
                bind: 'recipients-send-data-to-page'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-exit-modal'
              },
              global_recipient_exit: {
                bind: 'reset'
              },
              [PAGE_NAME + '_EXIT_PROCESS']: {
                bind: 'accept-modal-exit-process'
              },
              [PAGE_NAME + '_ANALYTICS_ALL_STEP_COMPLETED']: {
                bind: 'analytics-app-step-4',
                analytics: ANALYTICS.appStep('4')
              },
              [PAGE_NAME + '_OTP_OPEN']: {
                bind: 'manager-profile-recipients-otp-opened'
              },
              RECIPIENTS_ADDED_SUCCESSFULLY: {
                bind: 'recipients-added-successfully'
              }

            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytics-manager-profile-recipients',
        familyPath: '@glomo-web-components/bbva-manager-profile-recipients',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME + '_OTP_OPEN']: {
                bind: 'analyticsStepOTP'
              },
              [PAGE_NAME + '_PAGE_VISITED']: {
                bind: 'onPageVisited'
              }
            },
            out: {
              OTP_ANALYTICS: {
                bind: 'analytics-app-step-5',
                analytics: ANALYTICS.OTP_FOOTPRINT
              },
              [PAGE_NAME + '_ANALYTICS_PAGE_VISITED']: {
                bind: 'analytics-page-visited',
                analytics: ANALYTICS.APP_PAGE_VISIT
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-header-main',
        tag: 'bbva-header-main',
        render: 'litElement',
        properties: {
          id: 'headerInit',
          variant: 'modal',
          text: 'profile-recipient-info-title',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            out: {
              [PAGE_NAME + '_INIT_HEADER_MAIN_ICON_RIGHT_PRIMARY_CLICK']: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-accounts-bgadpmock',
        properties: {
          host: HOST,
          accountsApiVersion: CONFIG.globalServices.versions.accountsV1,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_REQUEST_GET_LIST_PARTICIPANTS']: {
                bind: 'getAccountParticipants'
              },
              [PAGE_NAME + '_REQUEST_POST_PARTICIPANTS']: {
                bind: 'postAccountParticipants'
              },
              [PAGE_NAME + '_SET_ACCOUNT_ID']: {
                bind: 'accountId'
              },
              [PAGE_NAME + '_DISPATCH_ACCOUNT_ID']: {
                bind: 'accountId'
              }
            },
            out: {
              [PAGE_NAME + '_RESPONSE_GET_ACCOUNT_PARTICIPANTS_SUCCESS']: {
                bind: 'set-account-participants'
              },
              [PAGE_NAME + '_RESPONSE_GET_ACCOUNT_PARTICIPANTS_ERROR']: {
                bind: 'error-on-get-participants'
              },
              [PAGE_NAME + '_POST_RESPONSE_ACCOUNT_PARTICIPANTS_SUCCESS']: {
                bind: 'success-post-participants'
              },
              [PAGE_NAME + '_POST_RESPONSE_ACCOUNT_PARTICIPANTS_ERROR']: {
                bind: 'error-on-post-participants'
              },
              [PAGE_NAME + '_RESPONSE_POST_PARTICIPANTS_OTP']: {
                bind: 'signature-required-first-step-dm'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-multistep-profile-recipients',
        tag: 'bbva-multistep-profile-recipients',
        render: 'litElement',
        properties: {
          isNativeIos,
          microImage: 'images/interestSimulator/customer_comes_first.svg',
          cellsConnections: {
            in: {
              dispatch_register_beneficiary: {
                bind: 'listParticipants'
              },
              [PAGE_NAME + '_DISPATCH_LIST_ACCOUNTS']: {
                bind: 'accountList'
              },
              [PAGE_NAME + '_DISPATCH_LIST_PARTICIPANTS_PARSED']: {
                bind: 'recipientsList'
              },
              recipient_reset_page: {
                bind: 'reset'
              },
              [PAGE_NAME + 'RESET_MULTISTEP_PROCESS']: {
                bind: 'reset'
              },
              RECIPIENTS_TO_SUCCESS_PAGE_HANDLER: {
                bind: 'reset'
              },
              [PAGE_NAME + '_DISPATCH_LIST_USER_BLACK_LIST']: {
                bind: 'openModalUserIsInBlackLists'
              },
              global_recipient_success_exit: {
                bind: 'reset'
              },
              profile_navigate_to_recipient_init_page: {
                bind: 'getHasRecipients'
              },
              recipient_send_new_recipient: {
                bind: 'addNewRecipient'
              },
              [PAGE_NAME + '_DISPATCH_LIST_RECIPIENTS_ADDED']: {
                bind: 'handleAddRecipients'
              }
            },
            out: {
              [PAGE_NAME + '_PROFILE_MULTISTEP_GET_RELATIONSHIPS' ]: {
                bind: 'get-parentescos'
              },
              [PAGE_NAME + '_OPEN_PRIVACY_MODAL']: {
                bind: 'bbva-multistep-profile-recipients-open-privacy-modal'
              },
              [PAGE_NAME + '_ACCOUNT_ITEM_CLICk']: {
                bind: 'account-item-click',
                analytics: ANALYTICS.APP_STARTED
              },
              [PAGE_NAME + '_NAVIGATE_TO_RECIPIENTS_FORM']: {
                bind: 'multistep-profile-recipients-navigate-to-recipients-form'
              },
              [PAGE_NAME + '_HIDE_CONFIRM']: {
                bind: 'multistep-profile-recipients-hide-confirm-button'
              },
              [PAGE_NAME + '_DISPATCH_RECIPIENTS_LENGTH']: {
                bind: 'multistep-profile-recipients-recipients-length'
              },
              [PAGE_NAME + '_REQUEST_LIST_BUSINESS_DOCUMENTS']: {
                bind: 'multistep-profile-recipients-handle-add'
              },
              [PAGE_NAME + '_DISPATCH_ACCOUNT_SELECTED']: {
                bind: 'multistep-profile-recipients-account-selected',
                analytics: ANALYTICS.appStep('2')
              },
              [PAGE_NAME + '_EXIT_PROCESS']: {
                bind: 'multistep-profile-recipients-click-exit-modal-button'
              },
              [PAGE_NAME + '_DISPATCH_DELETE_RECIPIENT']: {
                bind: 'show-modal-delete',
                analytics: ANALYTICS.DELETED_RECIPIENT
              },
              [PAGE_NAME + '_PAGE_VISITED']: {
                bind: 'multistep-profile-recipients-first-step-loaded'
              },
              [PAGE_NAME + '_DELETED_RECIPIENT']: {
                bind: 'multistep-profile-recipients-deleted-recipient',
                analytics: ANALYTICS.INTERNAL_RECIPIENT_DELETED_LINK
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-panel-button-fixed',
        familyPath: '@bbva-web-components/bbva-panel-button-fixed',
        render: 'litElement',
        properties: {
          className: 'no-gradient',
          buttonText: 'bbva-multistep-profile-recipients-finish-button-message',
          buttonClass: 'positive',
          language: LANGUAGE,
          show: true,
          hidden: true,
          cellsConnections: {
            in: {
              [PAGE_NAME + '_HIDE_CONFIRM']: {
                bind: 'hidden'
              }
            },
            out: {
              [PAGE_NAME + '_DISPATCH_LIST_RECIPIENTS_ADDED']: {
                bind: 'panel-button-fixed-item-click'
              }
            }
          }
        }
      }
    ]
  };
  addRetryErrors(base)([
    {
      id: 'error-get-participants',
      acceptRetry: { bind: 'retryGetListParticipants', component: 'bbva-manager-profile-recipients' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-manager-profile-recipients' },
      finishRetry: { bind: 'goBack', component: 'glomo-navigation-handler' }
    },
    {
      id: 'error-post-participants',
      acceptRetry: { bind: 'retryParticipantsPost', component: 'bbva-manager-profile-recipients' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-manager-profile-recipients' },
      finishRetry: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);
  addCommonErrors(base.components)();
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-accounts-bgadpmock', 'recipientsInit', ['success-post-participants', 'error-on-post-participants']);
  return base;
};
