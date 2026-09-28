'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'internationalRefunds';
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const PAGE_NAME_UNDERSCORED = utils.toUnderscoreCase(PAGE_NAME);
  const isNativeIOS = CONFIG.nativeIos;
  const [ getChannelName ] = utils.useNames(PAGE_NAME_UNDERSCORED);
  const HOST = CONFIG.globalServices.host;
  const MAX_STEPS = 2;
  // eslint-disable-next-line new-cap
  const Spinner = utils.SPINNER(CONFIG);
  const ANALYTICS = require('./analytics/_internationalRefunds')();
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);

  Spinner.properties.cellsConnections.in.INTERNATIONAL_TRANSFERS_DETAIL_MOVEMENT_SELECTED = {
    bind: 'openVeil'
  };

  Spinner.properties.cellsConnections.in[getChannelName('show_spinner')] = {
    bind: 'openVeil'
  };
  Spinner.properties.cellsConnections.in[getChannelName('hide_spinner')] = {
    bind: 'closeVeil'
  };
  Spinner.properties.cellsConnections.in.global_alert_international_refunds_exit_warning_modal_cancel = {
    bind: 'closeVeil'
  };

  const paths = {
    accounts: [],
    accountNumber: 'originalProduct.number',
    accountId: 'id'
  };

  const base = {
    hash: 'mx-international-refunds',
    currentPage: {
      url: '/international-refunds'
    },
    template: {
      tag: 'glomo-opx-template',
      properties: {
        hasFooter: false,
        headerFixed: true,
        iOSFixedHeader: isNativeIOS,
        animationType: 'verticalUp',
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [getChannelName('init_page')]: {
              bind: 'close'
            },
            [getChannelName('can_execute_changed')]: {
              bind: 'showConfirm'
            },
            [getChannelName('change_step_state')]: {
              bind: 'scrollItemIntoView'
            },
            [getChannelName('init_page')]: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },

    components: [
      Spinner
    ]
  };

  const CellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false,
        'reset-page': '',
        'init-page': false
      },
      cellsConnections: {
        in: {
          INTERNATIONAL_TRANSFERS_DETAIL_MOVEMENT_SELECTED: {
            bind: 'fireCustomInitEvents'
          }
        },
        out: {
          [getChannelName('reset')]: {
            bind: 'reset-page'
          },
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const CellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--evening',
      secondaryClass: 'header--evening',
      back: true,
      rightIcon: 'coronita:close',
      backAction: 'header-right-button',
      titleName: 'glomo-international-refunds-header-title',
      cellsConnections: {
        out: {
          [getChannelName('exit')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const CellsStepList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-list',
    properties: {
      className: '',
      maxSteps: MAX_STEPS,
      currentStep: 1,
      stepTitle: 'glomo-international-refunds-trasfer-data-title-step',
      collapsed: true,
      active: true,
      fixed: true,
      previous: true,
      cellsConnections: {
        in: {
          [getChannelName('reset')]: {
            bind: 'reset'
          },
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('trasfer_data')]: {
            bind: 'data'
          }
        },
        out: {
          [getChannelName('regiter_step')]: {
            bind: 'register-step'
          }
        }
      }
    }
  };

  const CellsStepEconomicActivity = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-economic-activity',
    properties: {
      currentStep: 2,
      lastStep: true,
      active: true,
      showSelectorFields: true,
      maxSteps: MAX_STEPS,
      title: 'glomo-international-refunds-additional-information-step',
      firstSelectorLabel: 'glomo-international-refunds-first-question',
      secondSelectorLabel: 'glomo-international-refunds-second-question',
      firstTextAreaPlaceholder: 'cells-international-transfers-firts-text-area',
      secondTextareaPlaceholder: 'cells-international-transfers-second-text-area',
      checkboxLabel: 'cells-international-transfers-checkbox-activity',
      counterLabel: 'cells-international-transfers-counter-characters',
      changeLabel: 'cells-international-transfers-change-step-button',
      btnContinueValue: 'cells-international-transfers-finished-economic-activity-step',
      hideCurrentStepLabel: true,
      decorated: false,
      cellsConnections: {
        in: {
          [getChannelName('reset')]: {
            bind: 'reset'
          },
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('first_question_available_answer_selected')]: {
            bind: 'firstSelectorValue'
          },
          [getChannelName('second_question_available_answer_selected')]: {
            bind: 'secondSelectorValue'
          },
          [getChannelName('local_economic_activity')]: {
            bind: 'firstTextAreaValue'
          },
          [getChannelName('foreign_economic_activity')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('regiter_economica_activity_step')]: {
            bind: 'register-step'
          },
          [getChannelName('open_first_question_available_ansers_modal')]: {
            bind: 'open-modal-selector-first-selector'
          },
          [getChannelName('open_second_question_available_ansers_modal')]: {
            bind: 'open-modal-selector-second-selector'
          },
          [getChannelName('local_economic_activity_focused')]: {
            bind: 'cells-form-textarea-focus-changed'
          },
          [getChannelName('has_foreign_economic_activity')]: {
            bind: 'cells-checkbox-button-checked'
          },
          [getChannelName('change_step_state')]: {
            bind: 'change-step-state'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('last_step_continue')]: {
            bind: 'continue-clicked'
          }
        }
      }
    }
  };

  const CellsModalSelectorFirstQuestionAvailableAnswers = {
    zone: 'app__main',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      id: 'relationship-to-recipient',
      hideCheckIcon: true,
      cellsConnections: {
        in: {
          [getChannelName('reset')]: {
            bind: 'reset'
          },
          [getChannelName('first_question_available_answers')]: {
            bind: 'items'
          },
          [getChannelName('open_first_question_available_ansers_modal')]: {
            bind: 'open'
          }
        },
        out: {
          [getChannelName('first_question_available_answer_selected')]: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };

  const CellsModalSelectorSecondQuestionAvailableAnswers = {
    zone: 'app__main',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      id: 'reason-for-transfer',
      hideCheckIcon: true,
      cellsConnections: {
        in: {
          [getChannelName('reset')]: {
            bind: 'reset'
          },
          [getChannelName('second_question_available_answers')]: {
            bind: 'items'
          },
          [getChannelName('open_second_question_available_ansers_modal')]: {
            bind: 'open'
          }
        },
        out: {
          [getChannelName('second_question_available_answer_selected')]: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };

  const CellsOperationSummary = {
    zone: 'app__confirm',
    tag: 'cells-operation-summary',
    type: 'UI',
    properties: {
      buttonLabel: 'cells-operations-summary-international-refunds-btn-label-confirm',
      summaryViewTitle: 'cells-operations-summary-international-refunds-summary-view-title',
      hideCustomFeesMessage: true,
      showAddition: true,
      operationAmountClass: 'currency-xxxxl',
      cellsConnections: {
        in: {
          [getChannelName('operation_summary')]: {
            bind: 'operation'
          },
          [getChannelName('operation_language')]: {
            bind: 'operationLanguage'
          }
        },
        out: {
          [getChannelName('summary_closed')]: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };

  const GlomoOpxInternationalRefundsManager = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'glomo-opx-international-refunds-manager-mx',
    familyPath: 'glomo-opx-international-refunds-manager',
    properties: {
      maxSteps: MAX_STEPS,
      stepsInit: {
        1: {
          active: true,
          blocked: false,
          collapsed: true,
          decorated: false,
          disabled: false,
          next: false,
          previous: false,
          skip: false,
          scrolled: true,
          fixed: true
        },
        2: {
          active: true,
          blocked: false,
          collapsed: false,
          decorated: false,
          disabled: false,
          next: false,
          scrolled: true,
          previous: false,
          skip: false
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('reset')]: {
            bind: 'resetWithDefaultSettings'
          },
          [getChannelName('regiter_step')]: {
            bind: 'registerStep'
          },
          [getChannelName('regiter_economica_activity_step')]: {
            bind: 'registerStep'
          },
          [getChannelName('next_step')]: {
            bind: 'nextStep'
          },
          [getChannelName('change_step_state')]: {
            bind: 'manageStateSteps'
          },
          [getChannelName('last_step_continue')]: {
            bind: 'openOperationSummary'
          },
          INTERNATIONAL_TRANSFERS_DETAIL_MOVEMENT_SELECTED: {
            bind: 'setMovementSelected'
          }
        },
        out: {
          [getChannelName('can_execute_changed')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('operation_summary')]: {
            bind: 'operation-summary'
          }
        }
      }
    }
  };

  const BbvaManagerInternationalRefunds = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-international-refunds',
    tag: 'bbva-manager-international-refunds-mx',
    render: 'litElement',
    properties: {
      paths,
      cellsConnections: {
        in: {
          international_transfers_parsed_accounts: {
            bind: 'setAccounts'
          },
          INTERNATIONAL_TRANSFERS_DETAIL_MOVEMENT_SELECTED: {
            bind: 'initializeRefunds'
          },
          [getChannelName('money_laundering_questionnaire_types_get_successful_response')]: {
            bind: 'handleGetMoneyLaunderindQuestionnaireSuccessfulResponse'
          },
          [getChannelName('last_step_continue')]: {
            bind: 'additionalInfo'
          },
          [getChannelName('money_laundering_questionnaire_types_get_error_response')]: {
            bind: 'handleGetMoneyLaunderindQuestionnaireErrorResponse'
          },
          [getChannelName('summary_closed')]: {
            bind: 'saveMoneyLaunderingQuestionnaireInternationalTransfersQuestionnaireAnswers'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_post_successful_response')]: {
            bind: 'handleSaveMoneyLaunderingQuestionnaireInternationalTransfersQuestionnaireAnswersSuccessResponse'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_post_error_response')]: {
            bind: 'handleSaveMoneyLaunderingQuestionnaireInternationalTransfersQuestionnaireAnswersErrorResponse'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_successful_response')]: {
            bind: 'handleMoneyLaunderingQuestionnaireAnswersSuccessfulResponse'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_error_response')]: {
            bind: 'handleMoneyLaunderingQuestionnaireAnswersErrorResponse'
          },
          global_alert_international_refunds_exit_warning_modal_accept: {
            bind: 'goBack'
          },
          [getChannelName('exit')]: {
            bind: 'exit'
          }
        },
        out: {
          [getChannelName('trasfer_data')]: {
            bind: 'dispatch-transfer-data'
          },
          [getChannelName('request_money_laundering_questionnaire')]: {
            bind: 'request-money-laundering-questionnaire'
          },
          [getChannelName('first_question_available_answers')]: {
            bind: 'dispatch-first-question-available-answers'
          },
          [getChannelName('second_question_available_answers')]: {
            bind: 'dispatch-second-question-available-answers'
          },
          [getChannelName('get_money_laundering_quetionnaire_latest_answer')]: {
            bind: 'dispatch-money-laundering-latest-questionnaire-answers-body-request'
          },
          [getChannelName('request_save_money_laundering_international_transfers_answers')]: {
            bind: 'dispatch-money-laundering-answers'
          },
          [getChannelName('local_economic_activity')]: {
            bind: 'dispatch-local-economic-activity-description'
          },
          [getChannelName('foreign_economic_activity')]: {
            bind: 'dispatch-foreign-economic-activity-properties'
          },
          [getChannelName('show_spinner')]: {
            bind: 'open-control-veil'
          },
          [getChannelName('hide_spinner')]: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'show-warning-modal-exit'
          },
          international_refunds_receipt_data: {
            bind: 'international-refunds-receipt-data'
          },
          [getChannelName('go_back')]: {
            bind: 'go-back',
            backStep: true
          },
          global_retry_error: {
            bind: 'show-global-retry-error'
          },
          INTERNATIONAL_REFUNDS_REVIEW_RECEIPT: {
            bind: 'navigate-to-review-receipt',
            link: {
              page: 'internationalRefundsReceipt'
            }
          }
        }
      }
    }
  };

  const BbvaAnalyticsManagerInternationalRefunds = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-international-refunds',
    tag: 'bbva-analytics-manager-international-refunds-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          INTERNATIONAL_TRANSFERS_DETAIL_MOVEMENT_SELECTED: {
            bind: 'firePageVisit'
          },
          [getChannelName('open_first_question_available_ansers_modal')]: {
            bind: 'fireAppStartedRelatioship'
          },
          [getChannelName('open_second_question_available_ansers_modal')]: {
            bind: 'fireAppStartedReason'
          },
          [getChannelName('local_economic_activity_focused')]: {
            bind: 'fireAppStartedLocalEconomicActivity'
          },
          [getChannelName('has_foreign_economic_activity')]: {
            bind: 'fireAppStartedForeignEconomicActivity'
          },
          [getChannelName('next_step')]: {
            bind: 'fireAppStep2'
          },
          [getChannelName('go_back')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('analytics_page_visit')]: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('analytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('analytics_app_step_2')]: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS.APP_STEP_2
          }
        }
      }
    }
  };

  const bbvaDataproviderMoneyLaunderingQuestionnaireTypes = {
    tag: 'bbva-dataprovider-money-laundering-questionnaire-types',
    familyPath: '@glomo-web-components/bbva-dataprovider-money-laundering',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      version: '0',
      cellsConnections: {
        in: {
          [getChannelName('request_money_laundering_questionnaire')]: {
            bind: 'getQuestionnaireTypes'
          }
        },
        out: {
          [getChannelName('money_laundering_questionnaire_types_get_successful_response')]: {
            bind: 'data-provider-money-laundering-questionnaire-types-get-successful-response'
          },
          [getChannelName('money_laundering_questionnaire_types_get_error_response')]: {
            bind: 'data-provider-money-laundering-questionnaire-types-get-error-response'
          },
          global_generic_error: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const bbvaDataproviderMoneyLaunderingInternationalTransfersQuestionnaireAnswers = {
    tag: 'bbva-dataprovider-money-laundering-international-transfers-questionnaire-answers',
    familyPath: '@glomo-web-components/bbva-dataprovider-money-laundering',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      version: '0',
      cellsConnections: {
        in: {
          [getChannelName('request_save_money_laundering_international_transfers_answers')]: {
            bind: 'postInternationalTransfersQuestionnaireAnswers'
          },
          [getChannelName('get_money_laundering_quetionnaire_latest_answer')]: {
            bind: 'postInternationalTransfersQuestionnaireAnswersSearch'
          }
        },
        out: {
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_post_successful_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-questionnaire-answers-post-successful-response'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_post_error_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-questionnaire-answers-post-error-response'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_successful_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-questionnaire-answer-search-post-successful-response'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_error_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-questionnaire-answer-search-post-error-response'
          },
          global_generic_error: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  base.components.push(
    CellsHandleLifeCycle,
    CellsMoleculeHeader,
    CellsStepList,
    CellsStepEconomicActivity,
    CellsModalSelectorFirstQuestionAvailableAnswers,
    CellsModalSelectorSecondQuestionAvailableAnswers,
    CellsOperationSummary,
    GlomoOpxInternationalRefundsManager,
    BbvaManagerInternationalRefunds,
    BbvaAnalyticsManagerInternationalRefunds,
    bbvaDataproviderMoneyLaunderingQuestionnaireTypes,
    bbvaDataproviderMoneyLaunderingInternationalTransfersQuestionnaireAnswers
  );

  utils.addOutChannelToGlomoAlertManager(base, CONFIG, 'international-refunds-exit-warning-modal');

  addCommonErrors(base.components)();

  addRetryErrors(base)([
    {
      id: 'itr-money-laundering-questionnaire-not-loaded',
      cancelRetry: { bind: 'exit', component: 'bbva-manager-international-refunds-mx' },
      successEvent: {
        bind: 'data-provider-money-laundering-questionnaire-types-get-successful-response',
        component: 'bbva-dataprovider-money-laundering-questionnaire-types'
      },
      acceptCallForHelp: { bind: 'exit', component: 'bbva-manager-international-refunds-mx' }
    },
    {
      id: 'itr-money-laundering-questionnaire-unifished-operation',
      acceptRetry: { bind: 'closeVeil', component: Spinner.tag },
      cancelRetry: { bind: 'exit', component: 'bbva-manager-international-refunds-mx' },
      successEvent: {
        bind: 'data-provider-money-laundering-international-transfers-questionnaire-answers-post-successful-response',
        component: 'bbva-dataprovider-money-laundering-international-transfers-questionnaire-answers'
      },
      acceptCallForHelp: { bind: 'exit', component: 'bbva-manager-international-refunds-mx' }
    }
  ]);

  return base;
};