'use strict';

module.exports = CONFIG => {
  const pageName = 'expensesGroup';
  const { createPrefixFromPageName, useNames, getLanguage, getLocalCurrency, getCurrencyCode, pluginDatePicker } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const _localStorage = require('./common/_local-storage');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        accounts: accountsApiVersion,
        accountTransactions: accountTransactionsApiVersion,
        cardsV1: cardsApiVersion,
        cardTransactions: cardTransactionsApiVersion,
        expensesGroup: expensesGroupsApiVersion
      }
    },
    native = false,
    nativeIos = false,
    nativeShell
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_expensesGroup')();

  const onboardingItems = [
    'expenses-expenses-group-mx-onboarding-list-first-text',
    'expenses-expenses-group-mx-onboarding-list-second-text',
    'expenses-expenses-group-mx-onboarding-list-third-text'
  ];

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      requiredToken,
      private: true,
      customInitEvents: {
        'hide-transition-container': false,
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_expensesGroup: {
            bind: 'init'
          }
        },
        out: {
          expenses_group_hide_transition_container: {
            bind: 'hide-transition-container'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const expensesGroupController = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-controller-expenses-group-mx',
    tag: 'bbva-controller-expenses-group-mx',
    render: 'litElement',
    properties: {
      native,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          expenses_group_go_back: {
            bind: 'reset'
          },
          navigate_dimo_success_to_expenses: {
            bind: 'reset'
          },
          navigate_transfer_success_to_expenses: {
            bind: 'reset'
          },
          expenses_group_navigate_to_transfers: {
            bind: 'navigateToTransfers'
          },
          global_financial_overview_details: {
            bind: 'setFinancialData'
          },
          expenses_group_request_get_contacts_success: {
            bind: 'contactsData'
          }
        },
        out: {
          expenses_group_set_financial_data: {
            bind: 'controller-expenses-group-mx-set-financial-data'
          },
          expenses_group_hidden_view: {
            bind: 'controller-expenses-group-mx-hidden-expenses-group'
          },
          expenses_group_parsed_contacts_data_success: {
            bind: 'controller-expenses-group-mx-contacts-data'
          }
        }
      }
    }
  };

  const expensesGroup = {
    zone: 'app__main',
    type: 'UI',
    tag: 'expenses-expenses-group-mx',
    familyPath: '@glomo-web-components/expenses-expenses-group-mx',
    render: 'litElement',
    properties: {
      showCurrencyCode: false,
      accountsApiVersion,
      accountTransactionsApiVersion,
      allowedPhoneSpecialCharacters: '',
      cardImageType: 'FRONT_CARD',
      cardsApiVersion,
      cardTransactionsApiVersion,
      transactionsMonthLimit: 3,
      onboardingFixedFooter: true,
      erasablePhonePatterns: ['+521', '+52', '(1)'],
      operative: 'expensesGroup',
      dateFormat: nativeIos ? 'yyyy/MM/dd' : 'yyyy-MM-dd',
      shouldUseMemberId: true,
      shouldFormatDate: true,
      hideTransitionContainer: true,
      calendarDate: {},
      menuButtons: {
        right: [ 'settings' ],
        left: [ 'back' ]
      },
      modalsRightButtons: [],
      country: 'mx',
      currencyCode: getCurrencyCode(),
      customPhonePattern: '^(\\d{10})$',
      maxPhoneNumberLength: 10,
      enableMemberDetailActions: true,
      enableWordings: true,
      expensesGroupDetailSection: 0,
      expensesGroupsApiVersion,
      hasValidatePhoneNumber: true,
      host,
      iOSFixedHeader: nativeIos,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      maxExpenseAmount: 1000000,
      native,
      onboardingItems,
      publicSettingsId: 'expensesGroup',
      publicSettingsKey: 'expenses-group',
      requiredToken,
      toggles: {
        shareInfo: true,
        sendPayments: true,
        requestPayments: true,
        associateExpenses: true,
        contacts: true,
        removeMember: true,
        markAsPaid: true
      },
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          global_storage_get_app_settings_success: {
            bind: 'publicSettings'
          },
          global_storage_get_expenses_group_terms_success: {
            bind: 'hideOnboarding'
          },
          global_storage_get_expenses_group_terms_error: {
            bind: 'showOnboarding'
          },
          global_storage_get_expenses_group_swipe_movement_animation_done_success: {
            bind: 'disableFlagLsAnimationSwipeMovements'
          },
          global_storage_get_expenses_group_swipe_movement_animation_done_error: {
            bind: 'enableFlagLsAnimationSwipeMovements'
          },
          global_storage_get_expenses_group_pull_to_refresh_animation_done_success: {
            bind: 'disableFlagLsAnimationPullToRefresh'
          },
          global_storage_get_expenses_group_pull_to_refresh_animation_done_error: {
            bind: 'enableFlagLsAnimationPullToRefresh'
          },
          expenses_group_set_financial_data: {
            bind: 'financialData'
          },
          expenses_group_hide_transition_container: {
            bind: 'hideTransitionContainer'
          },
          expenses_group_exit_offer: {
            bind: 'reset'
          },
          expenses_group_parsed_contacts_data_success: {
            bind: 'contactsData'
          },
          expenses_group_request_get_contacts_error: {
            bind: 'getContactsError'
          },
          navigate_dimo_success_to_expenses: {
            bind: 'paymentDone'
          },
          navigate_transfer_success_to_expenses: {
            bind: 'paymentDone'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'calendarDate'
          },
          global_nativeconnector_date_picker_launch_error: {
            bind: 'error'
          },
          dashboard_set_whithout_operations: {
            bind: 'noClient'
          },
          __bridge_page_expensesGroup: {
            bind: 'resetOnboardingFlag'
          },
          expenses_group_hidden_view: {
            bind: 'hidden'
          }
        },
        out: {
          global_nativeconnector_datepicker_launch: {
            bind: 'expenses-expenses-group-mx-launch-date-picker'
          },
          global_set_in_storage: {
            bind: 'expenses-expenses-group-mx-set-local-storage-expenses-group'
          },
          global_get_from_storage: {
            bind: 'expenses-expenses-group-mx-get-local-storage-expenses-group'
          },
          financial_overview_refresh: {
            bind: 'expenses-expenses-group-mx-refresh-financial-overview'
          },
          expenses_group_go_back: {
            bind: 'expenses-expenses-group-mx-exit'
          },
          expenses_group_share_invitation_result: {
            bind: 'expenses-expenses-group-mx-invitation-send'
          },
          expenses_group_share_invitation_capture: {
            bind: 'expenses-expenses-group-mx-invitation-send'
          },
          expenses_group_share_reminder_debt_result: {
            bind: 'expenses-expenses-group-mx-text-share'
          },
          expenses_group_share_reminder_debt_capture: {
            bind: 'expenses-expenses-group-mx-text-share'
          },
          expenses_group_get_contacts: {
            bind: 'expenses-expenses-group-mx-request-contacts'
          },
          expenses_group_navigate_to_transfers: {
            bind: 'expenses-expenses-group-mx-payment-send'
          },
          expenses_group_create_group_open: {
            bind: 'expenses-expenses-group-mx-create-group-open'
          },
          expenses_group_create_group_name_step_complete: {
            bind: 'expenses-expenses-group-mx-app-started-input-click'
          },
          expenses_group_create_group_name_step: {
            bind: 'expenses-expenses-group-mx-step-name-completed',
            analytics: analytics._getExpensesGroupFunnel('appStep2')
          },
          expenses_group_create_group_confirmation: {
            bind: 'expenses-expenses-group-mx-add-member-step-completed',
            analytics: analytics._getExpensesGroupFunnel('appStep3')
          },
          expenses_group_create_group_success: {
            bind: 'expenses-expenses-group-mx-create-group-success',
            analytics: analytics._getExpensesGroupFunnel('appCompleted')
          },
          expenses_group_group_list_visible: {
            bind: 'expenses-group-mx-list-visible'
          },
          expenses_group_contacts_open: {
            bind: 'expenses-expenses-group-mx-visible-open-contacts-modal'
          },
          expenses_group_edition_modal_new_member_visible: {
            bind: 'expenses-expenses-group-mx-edition-modal-new-member-visible'
          },
          expenses_group_operatives_group_visible: {
            bind: 'expenses-expenses-group-mx-more-actions-visible'
          },
          expenses_group_onboarding_terms_visible: {
            bind: 'expenses-expenses-group-mx-onboarding-visible',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('termsAndConditions')
          },
          expenses_group_edition_modal_invitation_visible: {
            bind: 'expenses-expenses-group-mx-edition-modal-invitation-visible'
          },
          expenses_group_gruop_detail_visible: {
            bind: 'expenses-group-mx-detail-visible',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('groupDetail')
          },
          expenses_group_member_detail_visible: {
            bind: 'expenses-group-mx-member-detail-change-title',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('memberDetail')
          },
          expenses_group_member_detail_visible_analyics: {
            bind: 'expenses-group-member-detail-change-title-analyics',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('memberDetail')
          },
          expenses_group_invitation_group_accept_link: {
            bind: 'expenses-expenses-group-mx-invitation-accept-action'
          },
          expenses_group_invitation_group_reject_link: {
            bind: 'expenses-expenses-group-mx-invitation-reject-action'
          },
          expenses_group_detail_actions_click: {
            bind: 'expenses-expenses-group-mx-detail-actions-click'
          },
          expenses_group_operatives_actions_links: {
            bind: 'expenses-expenses-group-mx-detail-operatives-link-action'
          },
          expenses_group_error_limit: {
            bind: 'expenses-group-mx-error-limit'
          },
          expenses_group_create_group_modal_exit: {
            bind: 'expenses-group-create-group-modal-exit'
          },
          expenses_group_associate_expense_operatives_click: {
            bind: 'expenses-expenses-group-mx-detail-operatives-link-action'
          },
          expenses_group_associate_expense_modal_visible: {
            bind: 'expenses-expenses-group-mx-detail-associate-expense-modal-open'
          },
          expenses_group_associate_expense_products_expandable_visible: {
            bind: 'expenses-group-mx-associate-expense-product-step-app-started'
          },
          expenses_group_associate_expense_steps_visible: {
            bind: 'expenses-expenses-group-mx-associate-expense-step-change'
          },
          expenses_group_associate_expense_completed_visible: {
            bind: 'expenses-expenses-group-mx-expense-created'
          },
          expenses_group_associate_expense_configuration_step_edit_mode: {
            bind: 'expenses-expenses-group-mx-configuration-step-edit-mode-started'
          },
          expenses_group_associate_expense_modal_error_visible: {
            bind: 'expenses-group-mx-exit-associate-expense-error-modal',
            analytics: analytics._getAssociateExpenseFootPrintsAndErrors('operationError')
          },
          expenses_group_associate_expense_in_cash_operatives_click: {
            bind: 'expenses-expenses-group-mx-detail-operatives-link-action'
          },
          expenses_group_associate_expense_in_cash_error_click: {
            bind: 'expenses-expenses-group-mx-error-modal-add-cash-click',
            analytics: analytics._getExpenseInCashFunnel('appOnClickStartError')
          },
          expenses_group_associate_expense_in_cash_modal_visible: {
            bind: 'expenses-expenses-group-mx-detail-associate-expense-modal-open'
          },
          expenses_group_associate_expense_in_cash_inputs_click: {
            bind: 'expenses-group-mx-associate-expense-information-step-input'
          },
          expenses_group_associate_expense_reset_steps: {
            bind: 'expenses-group-mx-exit-associate-expense-modal'
          },
          expenses_group_onboarding_close_click: {
            bind: 'expenses-expenses-group-mx-onboarding-close-icon-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          },
          go_to_request_payment_codi_from_expenses_group: {
            bind: 'expenses-expenses-group-mx-payment-request',
            link: {
              page: 'codiQrScanner',
              skipHistory: true
            }
          },
          go_to_invitation_non_account_client: {
            bind: 'expenses-expenses-group-mx-no-client-signup',
            link: {
              page: 'invitationNonAccountClient'
            }
          },
          expenses_group_exit: {
            bind: 'navigation-go-back',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          },
          global_action_launcher_uri: {
            bind: 'expenses-expenses-group-mx-link-navigation'
          },
          expenses_group_navigate: {
            bind: 'navigation-to-expenses-group',
            link: {
              page: 'expensesGroup'
            }
          }
        }
      }
    }
  };

  const analyticsManagerExpenses = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-expenses',
    familyPath: '@glomo-web-components/bbva-analyticmanager-expenses',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          __bridge_page_expensesGroup: {
            bind: 'onResetAnalyticsFlags'
          },
          global_experiences_aem_carousel_data: {
            bind: 'internalCampaign'
          },
          [getChannelName('error_limit')]: {
            bind: 'onLimitsError'
          },
          [getChannelName('create_group_open')]: {
            bind: 'onCreateGroup'
          },
          [getChannelName('create_group_name_step_complete')]: {
            bind: 'onCreateGroupStarted'
          },
          [getChannelName('operatives_group_visible')]: {
            bind: 'getOperativesFootPrint'
          },
          [getChannelName('invitation_group_accept_link')]: {
            bind: 'onAcceptInvitation'
          },
          [getChannelName('invitation_group_reject_link')]: {
            bind: 'onRejectInvitation'
          },
          [getChannelName('detail_actions_click')]: {
            bind: 'onActionsClick'
          },
          [getChannelName('operatives_actions_links')]: {
            bind: 'onOperativesClick'
          },
          [getChannelName('associate_expense_modal_visible')]: {
            bind: 'onAppPageVisitAssociateExpense'
          },
          [getChannelName('associate_expense_products_expandable_visible')]: {
            bind: 'onAppStartedAssociateExpenses'
          },
          [getChannelName('associate_expense_steps_visible')]: {
            bind: 'onAppStepsChange'
          },
          [getChannelName('associate_expense_configuration_step_edit_mode')]: {
            bind: 'onEditConfigurationExpense'
          },
          [getChannelName('associate_expense_in_cash_inputs_click')]: {
            bind: 'onExpenseInCashStarted'
          },
          [getChannelName('associate_expense_completed_visible')]: {
            bind: 'onAssociateExpenseAppCompleted'
          },
          [getChannelName('create_group_modal_exit')]: {
            bind: 'onResetCreateGroupAppStarted'
          },
          [getChannelName('associate_expense_reset_steps')]: {
            bind: 'onResetAssociateExpenseAppSteps'
          },
          expenses_group_group_list_visible: {
            bind: 'onExpensesGroupPageViewVisible'
          },
          expenses_group_contacts_open: {
            bind: 'onExpensesGroupPageViewVisible'
          },
          expenses_group_edition_modal_new_member_visible: {
            bind: 'onExpensesGroupPageViewVisible'
          },
          expenses_group_edition_modal_invitation_visible: {
            bind: 'onExpensesGroupPageViewVisible'
          }
        },
        out: {
          [getChannelName('on_click_start_create_group')]: {
            bind: 'expenses-group-on-click-start-create-group',
            analytics: analytics._getExpensesGroupFunnel('appOnClickStart')
          },
          [getChannelName('error_limits_participants_and_groups')]: {
            bind: 'expenses-group-limits-errors',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('limitsError')
          },
          [getChannelName('page_visit_create_group')]: {
            bind: 'expenses-group-page-visit-create-group',
            analytics: analytics._getExpensesGroupFunnel('appPageVisit')
          },
          [getChannelName('create_group_started')]: {
            bind: 'expenses-group-create-group-started',
            analytics: analytics._getExpensesGroupFunnel('appStarted')
          },
          [getChannelName('operatives_footprint')]: {
            bind: 'expenses-group-operatives-footprint',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('operatives')
          },
          [getChannelName('invitation_group_link')]: {
            bind: 'expenses-group-invitation-group-link',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('invitationGroupLink')
          },
          [getChannelName('actions_links')]: {
            bind: 'expenses-group-action-link',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('actionsLink')
          },
          expenses_group_operatives_actions_links_analytics: {
            bind: 'expenses-group-operatives-link',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('operativesLink')
          },
          [getChannelName('actions_associate_expense_on_click_start_actions')]: {
            bind: 'expenses-group-associate-expense-on-click-start-actions',
            analytics: analytics._getAssociateExpenseFunnel('appOnClickStartGroupDetail')
          },
          [getChannelName('actions_associate_expense_on_click_start_operatives')]: {
            bind: 'expenses-group-associate-expense-on-click-start-operatives',
            analytics: analytics._getAssociateExpenseFunnel('appOnClickStartOperatives')
          },
          [getChannelName('associate_expense_page_visit')]: {
            bind: 'expenses-group-associate-expense-associate-page-visit',
            analytics: analytics._getAssociateExpenseFunnel('appPageVisit')
          },
          [getChannelName('associate_expense_app_started')]: {
            bind: 'expenses-group-associate-expense-app-started',
            analytics: analytics._getAssociateExpenseFunnel('appStarted')
          },
          [getChannelName('associate_expense_app_step_movement')]: {
            bind: 'expenses-group-associate-expense-app-step-movement',
            analytics: analytics._getAssociateExpenseFunnel('appStep2')
          },
          [getChannelName('associate_expense_app_step_information')]: {
            bind: 'expenses-group-associate-expense-app-step-information',
            analytics: analytics._getAssociateExpenseFunnel('appStep3')
          },
          [getChannelName('associate_expense_app_step_configuration')]: {
            bind: 'expenses-group-associate-expense-app-step-configuration',
            analytics: analytics._getAssociateExpenseFunnel('appStep4')
          },
          [getChannelName('associate_expense_app_step_confirmation')]: {
            bind: 'expenses-group-associate-expense-app-step-confirmation',
            analytics: analytics._getAssociateExpenseFunnel('appStep5')
          },
          [getChannelName('associate_expense_completed_visibles')]: {
            bind: 'expenses-group-associate-associated-expense-completed',
            analytics: analytics._getAssociateExpenseFunnel('appCompleted')
          },
          [getChannelName('associate_expense_configuration_expense_footprint')]: {
            bind: 'expenses-group-configuration-expense-footprint',
            analytics: analytics._getAssociateExpenseFootPrintsAndErrors('editConfigurationExpense')
          },
          [getChannelName('actions_add_cash_expense_on_click_start_actions')]: {
            bind: 'expenses-group-add-cash-expense-on-click-start-actions',
            analytics: analytics._getExpenseInCashFunnel('appOnClickStartGroupDetail')
          },
          [getChannelName('actions_add_cash_expense_on_click_start_operatives')]: {
            bind: 'expenses-group-add-cash-expense-on-click-start-operatives',
            analytics: analytics._getExpenseInCashFunnel('appOnClickStartOperatives')
          },
          [getChannelName('associate_cash_expense_page_visit')]: {
            bind: 'expenses-group-associate-expense-cash-page-visit',
            analytics: analytics._getExpenseInCashFunnel('appPageVisit')
          },
          [getChannelName('associate_expense_in_cash_app_started')]: {
            bind: 'expenses-group-expense-in-cash-app-started',
            analytics: analytics._getExpenseInCashFunnel('appStarted')
          },
          [getChannelName('associate_cash_expense_app_step_configuration')]: {
            bind: 'expenses-group-associate-cash-expense-app-step-configuration',
            analytics: analytics._getExpenseInCashFunnel('appStep2')
          },
          [getChannelName('associate_cash_expense_app_step_confirmation')]: {
            bind: 'expenses-group-associate-cash-expense-app-step-confirmation',
            analytics: analytics._getExpenseInCashFunnel('appStep3')
          },
          [getChannelName('associate_expense_completed_visible')]: {
            bind: 'expenses-group-associate-manually-expense-completed',
            analytics: analytics._getExpenseInCashFunnel('appCompleted')
          },
          expenses_group_list_visible_page_view: {
            bind: 'expenses-group-mx-list-visible-page-view',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('groupList')
          },
          expenses_group_contacts_modal_page_view: {
            bind: 'expenses-expenses-group-mx-visible-open-contacts-modal-page-view',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('myContacts')
          },
          expenses_group_new_member_modal_page_view: {
            bind: 'expenses-expenses-group-mx-edition-modal-new-member-visible-page-view',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('newContact')
          },
          expenses_group_invitation_group_modal_page_view: {
            bind: 'expenses-group-mx-edition-modal-invitation-visible-page-view',
            analytics: analytics._getExpensesGroupFootPrintsAndErrors('invitationGroup')
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    properties: {
      language: getLanguage(),
      country: 'mx',
      localCurrency: getLocalCurrency(),
      headerReceipt: false,
      infoImage: './images/spherica/info.svg',
      headerImage: './images/spherica/bbva_blue.svg',
      sharedReceiptStyles: {
        receipt: {
          'width': '17.50rem'
        },
        fieldTitle: {
          'color': 'var(--bbva-600, #121212)',
          'margin-top': '0rem'
        },
        section: {
          'margin-bottom': '1rem'
        },
        receiptTitle: {
          'font-weight': 'var(--cells-fontDefaultBold, 700)'
        }
      },
      cellsConnections: {
        in: {
          expenses_group_share_invitation_result: {
            bind: 'result'
          },
          [getChannelName('share_invitation_capture')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('share_reminder_debt_result')]: {
            bind: 'result'
          },
          [getChannelName('share_reminder_debt_capture')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('reset_receipt')]: {
            bind: 'reset'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          [getChannelName('reset_receipt')]: {
            bind: 'receipt-captured'
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const navigation = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'exit-page',
      currentPage: pageName,
      continue: pageName,
      cellsConnections: {
        in: {
          expenses_group_go_back: {
            bind: 'goBack'
          },
          [getChannelName('navigate_to_transfers')]: {
            bind: 'navigate'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'disableNativeBackNavigation'
          }
        },
        out: {
          global_exit_expenses_group_page: {
            bind: 'exit-page',
            backStep: true
          },
          navigate_expenses_group_to_transfer: {
            bind: 'navigation-to-expensesGroup',
            link: {
              page: 'transfers',
              params: {
                continue: 'continue'
              }
            }
          }
        }
      }
    }
  };

  const contactsPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-contacts',
    familyPath: '@glomo-web-components/bbva-nativeconnector-contacts',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('get_contacts')]: {
            bind: 'getAllContacts'
          }
        },
        out: {
          expenses_group_request_get_contacts_success: {
            bind: 'all-contacts-served'
          },
          expenses_group_request_get_contacts_error: {
            bind: 'error'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/expenses-group-experiences',
      params: []
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        extraHeaderClass: nativeIos ? 'dark-core-blue ios-top-padding' : '',
        headerFixed: true,
        headerHeight: 0,
        disableEdgeSwipe: true,
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
          },
          out: {
            welcome_template_active: {
              bind: 'template-active'
            }
          }
        }
      }
    },
    components: [
      lifeCycle,
      expensesGroupController,
      expensesGroup,
      navigation,
      contactsPlugin,
      cellsShareGenericReceipt,
      analyticsManagerExpenses
    ]
  };

  if (nativeShell) {
    base.components.push(pluginDatePicker(CONFIG));
  }

  addCommonErrors(base.components)();
  _localStorage.addOutStorageChannels(base.components, ['expenses_group_terms', 'expenses_group_swipe_movement_animation_done', 'expenses_group_pull_to_refresh_animation_done'], CONFIG);
  return base;
};
