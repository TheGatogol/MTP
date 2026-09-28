/* eslint-disable no-unused-vars */
'use strict';

module.exports = CONFIG => {

  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const utils = require('./common/helpers/_utils');
  const { getCountry, getLocalCurrency, useNames, getLanguage, connectionsIn, connectionsOut } = utils;
  const COUNTRY = getCountry(CONFIG);
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = getLocalCurrency(CONFIG);
  const LANGUAGE = getLanguage(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('internationalTransfersCreateRecipient');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'internationalTransfersCreateRecipient';
  const OPERATIVE_PREFIX = PAGE_NAME.toUpperCase();
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const ANALYTICS = require('./analytics/_internationalTransfers')();
  const HOST = CONFIG.globalServices.host;

  SPINNER.properties.cellsConnections.in = {
    ...SPINNER.properties.cellsConnections.in,
    [getChannelName('show_spinner')]: {
      bind: 'openVeil'
    },
    [getChannelName('hide_spinner')]: {
      bind: 'closeVeil'
    }
  };

  const base = {
    hash: COUNTRY + 'internationalTransfersCreateRecipient',
    currentPage: {
      url: '/international-transfers-create-recipient',
      params: []
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        animationType: 'verticalUp',
        delayScrollTop: 300,
        headerFixed: true,
        topOnConfirm: true,
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: 'bbva-dark-medium-blue',
        cellsConnections: {
          in: {
            [getChannelName('show_button_finish_steps')]: {
              bind: 'showConfirm'
            },
            [getChannelName('init_page')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('CONFIRM_ANIMATION')]: {
              bind: 'collapseOpened'
            },
            [getChannelName('RESET_SCROLL')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('SCROLL_ZONE')]: {
              bind: 'scrollItemIntoView'
            }
          },
          out: {
            [getChannelName('SCOLL_TEMPLATE')]: {
              bind: 'opx-template-content-scroll'
            },
            [getChannelName('SCROLL_COMPLETE')]: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          continue: 'dashboard',
          secondaryClass: 'header--core',
          rightIcon: 'coronita:close',
          rightIconSize: '22',
          titleName: 'glomo-international-transfers-foreign-header-title-recipient',
          cellsConnections: {
            in: {
              add_header_class: {
                bind: 'setSecondaryClass'
              },
              remove_header_class: {
                bind: 'removeSecondaryClass'
              },
              [`global_${getChannelName('EXIT_ACCEPT')}`]: {
                bind: 'removeSecondaryClass'
              },
              [getChannelName('GO_BACK')]: {
                bind: 'removeSecondaryClass'
              }
            },
            out: {
              [getChannelName('OPEN_MODAL_EXIT')]: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
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
              [getChannelName('init_page')]: {
                bind: 'init-page',
                analytics: ANALYTICS.APP_PAGE_VIEW
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
          backAction: 'navigation-to-back',
          cellsConnections: {
            in: {
              contract_existing_pay_to_continue: {
                bind: 'navigate'
              },
              contract_existing_pay_back_request: {
                bind: 'goBack'
              },
              navigation_contract_existing_pay_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              nav_contract_existing_pay_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };

  const transfersManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-international-transfers-mx-dm',
    familyPath: 'glomo-international-transfers-dm',
    properties: {
      cellsConnections: {
        in: {
          'international_transfers_new_recipient': {
            bind: 'addNewContactPageReset'
          },
          'GO-BACK-MODAL-CAUTION-BANK': {
            bind: 'addNewContactPageReset'
          },
          [getChannelName('open_modal_generla_info')]: {
            bind: 'createModalBankInfo'
          },
          [getChannelName('get-bank-data-bank')]: {
            bind: 'newAddresseeBankCode'
          },
          [getChannelName('get-bank-data-account')]: {
            bind: 'newAddresseeAccountNumber'
          },
          [getChannelName('init_page')]: {
            bind: 'disabledButton'
          },
          [getChannelName('banks_request_success')]: {
            bind: 'requestBanksSuccess'
          },
          [getChannelName('banks_request_error')]: {
            bind: 'requestBanksError'
          },
          [getChannelName('high-user')]: {
            bind: 'getAddresseeRequest'
          },
          [getChannelName('OPEN_MODAL_EXIT')]: {
            bind: 'modalConfirmExit'
          },
          [getChannelName('on-keyup-bank')]: {
            bind: 'onKeyboardPress'
          },
          [getChannelName('on-keyup-account')]: {
            bind: 'onKeyboardPress'
          },
          global_international_transfers_accept: {
            bind: 'disabledButton'
          },
          global_international_transfers_cancel_bank: {
            bind: 'exitBankCodeError'
          },
          INTERNATIONAL_TRANSFERS_FIRST_QUESTION_AVAILABLE_ANSWERS: {
            bind: 'setRelationshipToRecipientAvailableAnswers'
          },
          INTERNATIONAL_TRANSFERS_SECOND_QUESTION_AVAILABLE_ANSWERS: {
            bind: 'setReasonForTransferAvailableAnswers'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_successful_response')]: {
            bind: 'handleGetLatestQuestionnaireAnswersSuccessfulResponse'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_error_response')]: {
            bind: 'handleGetLatestQuestionnaireAnswersSuccessfulResponse'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_api_dm_error')]: {
            bind: 'handleGetLatestQuestionnaireAnswersSuccessfulResponse'
          },
          INTERNATIONALTRANSFERSCREATERECIPIENT_enable_button_new_recipient: {
            bind: 'sendDataToNewRecipient'
          },
          international_transfers_listening_mode_new_recipient_blue_data: {
            bind: 'blueData'
          }
        },
        out: {
          [getChannelName('restore_bank_code')]: {
            bind: 'reset-bank-code-input'
          },
          [getChannelName('restore_account_user')]: {
            bind: 'reset-account-number-input'
          },
          [getChannelName('enable_button_new_recipient')]: {
            bind: 'enable-button-add-new-recipient'
          },
          [getChannelName('request_api_banks')]: {
            bind: 'request-banks'
          },
          global_alert_manager_open_with_settings: {
            bind: 'dispatch-modal-settings'
          },
          contract_existing_pay_back_request: {
            bind: 'exit-bank-error-step-one'
          },
          value_country: {
            bind: 'send-country-value'
          },
          'international_transfer_high_user_success': {
            bind: 'send-response-success-high-user'
          },
          open_control_veil: {
            bind: 'show-spinner-text-evet'
          },
          close_control_veil: {
            bind: 'hide-spinner-text-evet'
          },
          global_open_modal_request_error_international_transfers: {
            bind: 'error-request-banks-international'
          },
          [getChannelName('back_page_preview')]: {
            bind: 'exit-page-international-transfers',
            backStep: true
          },
          [getChannelName('reset_input_validate_bank')]: {
            bind: 'reset-bank-code-input-validate'
          },
          [getChannelName('bank_code_input_blur')]: {
            bind: 'bank-code-input-blur'
          },
          [getChannelName('account_input_blur')]: {
            bind: 'account-input-blur'
          },
          [getChannelName('reset_input_validate_number')]: {
            bind: 'reset-number-code-input-validate'
          },
          [getChannelName('return_page_go_back_modal')]: {
            bind: 'close-page-redirec-to-back',
            link: {
              page: 'internationalTransfers'
            }
          },
          [getChannelName('get_money_laundering_quetionnaire_latest_answer')]: {
            bind: 'get-money-laundering-questionnaire-latest-answers'
          },
          INTERNATIONAL_TRANSFERS_LOCAL_ECONOMIC_ACTIVITY_DESCRIPTION_ANSWER: {
            bind: 'dispatch-local-economic-activity-description'
          },
          INTERNATIONAL_TRANSFERS_FOREIGN_ECONOMIC_ACTIVITY_PROPERTIES: {
            bind: 'dispatch-foreign-economic-activity-properties'
          },
          global_retry_error: {
            bind: 'show-global-retry-error'
          },
          [getChannelName('show_spinner')]: {
            bind: 'show-spinner'
          },
          [getChannelName('hide_spinner')]: {
            bind: 'hide-spinner'
          },
          [getChannelName('go_back')]: {
            bind: 'go-back',
            backStep: true
          },
          [getChannelName('navigation_to_review_recipient')]: {
            bind: 'navigate-to-review-recipient',
            link: {
              page: 'internationalTransfersReviewRecipient'
            }
          },
          international_transfers_listening_mode_new_recipient_blue_load_account_number_input: {
            bind: 'account-number-input'
          },
          international_transfers_listening_mode_new_recipient_blue_load_bank_code_input: {
            bind: 'bank-code-input'
          }
        }
      }
    }
  };

  const description = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      className: 'normal-title',
      title: 'glomo-international-transfers-instructions-new-recipient',
      titleIcon: 'help',
      cellsConnections: {
        in: {
        },
        out: {
          [getChannelName('open_modal_generla_info')]: {
            bind: 'cells-text-description-title-icon-click'
          }
        }
      }
    }
  };

  const inputCodeBank = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-molecule-input',
    properties: {
      className: 'tag-input pd-input',
      infoMessage: 'glomo-international-transfers-instruction-identificator-bank',
      infoMessageIcon: 'coronita:info',
      label: 'glomo-international-transfers-label-identificator-bank',
      id: 'bankCode',
      type: 'text',
      minLength: 8,
      maxLength: 11,
      autoValidate: true,
      inputStatusValidate: true,
      allowedChars: '[a-zA-Z0-9]',
      allowedValue: '^[a-zA-Z0-9]{8,11}$',
      errorMessage: 'cells-international-transfers-valid-input-bank',
      errorMessageIcon: 'coronita:error',
      icon: 'coronita:close',
      infoMessageType: 'info-dark-blue',
      cellsConnections: {
        in: {
          [getChannelName('restore_account_user')]: {
            bind: 'value'
          },
          [getChannelName('reset_input_validate_bank')]: {
            bind: 'validate'
          },
          [getChannelName('bank_code_input_blur')]: {
            bind: 'blur'
          },
          international_transfers_listening_mode_new_recipient_blue_load_bank_code_input: {
            bind: 'value'
          }
        },
        out: {
          [getChannelName('get-bank-data-bank')]: {
            bind: 'bind-value-changed'
          },
          [getChannelName('on-keyup-bank')]: {
            bind: 'cells-molecule-input-keyup'
          }
        }
      }
    }
  };

  const inputAccountBank = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-molecule-input',
    properties: {
      className: 'tag-input pd-input',
      infoMessage: 'glomo-international-transfers-instruction-identificator-account',
      infoMessageIcon: 'coronita:info',
      minLength: 5,
      maxLength: 34,
      autoValidate: true,
      label: 'glomo-international-transfers-label-identificator-account',
      id: 'accountNumber',
      type: 'text',
      inputStatusValidate: true,
      allowedChars: '[a-zA-Z0-9]',
      allowedValue: '^[a-zA-Z0-9]{5,35}$',
      errorMessage: 'cells-international-transfers-valid-input-number',
      errorMessageIcon: 'coronita:error',
      icon: 'coronita:close',
      infoMessageType: 'info-dark-blue',
      cellsConnections: {
        in: {
          [getChannelName('restore_account_user')]: {
            bind: 'value'
          },
          [getChannelName('reset_input_validate_number')]: {
            bind: 'validate'
          },
          [getChannelName('account_input_blur')]: {
            bind: 'blur'
          },
          international_transfers_listening_mode_new_recipient_blue_load_account_number_input: {
            bind: 'value'
          }
        },
        out: {
          [getChannelName('get-bank-data-account')]: {
            bind: 'bind-value-changed'
          },
          [getChannelName('on-keyup-account')]: {
            bind: 'cells-molecule-input-keyup'
          }
        }
      }
    }
  };

  const searchButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      className: 'international-transfers-create-recipient',
      config: {
        buttons: {
          primary: {
            class: 'primary',
            text: 'Buscar',
            disabled: 'true'
          }
        }
      },
      unfixed: true,
      cellsConnections: {
        in: {
          [getChannelName('enable_button_new_recipient')]: {
            bind: 'config'
          }
        },
        out: {
          [getChannelName('high-user')]: {
            bind: 'cells-confirm-buttons-click-primary'
          }
        }
      }
    }
  };

  const globalApisBanks = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-banks',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      banksApiVersion: CONFIG.globalServices.versions.transfer,
      cellsConnections: {
        in: {
          [getChannelName('request_api_banks')]: {
            bind: 'getCurrencyQuoteBanks'
          }
        },
        out: {
          [getChannelName('banks_request_success')]: {
            bind: 'success-on-get-banks-data'
          },
          [getChannelName('banks_request_error')]: {
            bind: 'error-on-banks-data'
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
          [getChannelName('get_money_laundering_quetionnaire_latest_answer')]: {
            bind: 'postInternationalTransfersQuestionnaireAnswersSearch'
          }
        },
        out: {
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_successful_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-questionnaire-answer-search-post-successful-response'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_error_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-questionnaire-answer-search-post-error-response'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_api_dm_error')]: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const UI = [
    description,
    inputCodeBank,
    inputAccountBank,
    searchButton
  ];
  const DMs = [
    transfersManager,
    globalApisBanks,
    bbvaDataproviderMoneyLaunderingInternationalTransfersQuestionnaireAnswers
  ];

  base.components.push(...UI, ...DMs);

  addRetryErrors(base)([
    {
      id: 'money-laundering-latest-questionnaire-answers-information-not-loaded',
      acceptRetry: { bind: 'getMoneyLaunderingQuestionnaireLatestAnswers', component: 'glomo-international-transfers-mx-dm' },
      cancelRetry: { bind: 'goBack', component: 'glomo-international-transfers-mx-dm' },
      successEvent: {
        bind: 'data-provider-money-laundering-international-transfers-questionnaire-answer-search-post-successful-response',
        component: 'bbva-dataprovider-money-laundering-international-transfers-questionnaire-answers'
      },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-international-transfers-mx-dm' }
    }
  ]);
  addCommonErrors(base.components)();
  return base;
};
