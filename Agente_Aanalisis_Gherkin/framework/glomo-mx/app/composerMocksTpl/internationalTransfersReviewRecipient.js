/* eslint-disable no-unused-vars */
'use strict';

module.exports = CONFIG => {

  const moment = require('moment');
  const utils = require('./common/helpers/_utils');
  const signConnector = require('./common/_sign-connector')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const { getCountry, getLocalCurrency, useNames, getLanguage } = utils;
  const COUNTRY = getCountry(CONFIG);
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = getLocalCurrency(CONFIG);
  const LANGUAGE = getLanguage(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('internationalTransfersReviewRecipient');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'internationalTransfersReviewRecipient';
  const OPERATIVE_PREFIX = PAGE_NAME.toUpperCase();
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const ANALYTICS = require('./analytics/_internationalTransfers')();

  const base = {
    hash: COUNTRY + 'internationalTransfersReviewRecipient',
    currentPage: {
      url: '/international-transfers-review-recipient',
      params: []
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        delayScrollTop: 300,
        animationType: 'verticalUp',
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        topOnConfirm: true,
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

  const iconMessageSuccess = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    properties: {
      className: 'in-page bottom-separation top-icon-message',
      icon: 'coronita:correct',
      message: 'cells-international-transfers-alert-icon-message-success',
      type: 'success-dark',
      cellsConnections: {
        in: {
        },
        out: {
        }
      }
    }
  };

  const keyValuesRecipient = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-key-values-list',
    properties: {
      className: 'row-gap-top-xl',
      cellsConnections: {
        in: {
          [getChannelName('account_number')]: {
            bind: 'list'
          },
          [getChannelName('set-contact-selected-data')]: {
            bind: 'list'
          }
        },
        out: {
        }
      }
    }
  };

  const internationalDivider = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      className: 'bold',
      cellsConnections: {
        in: {},
        out: {}
      }
    }
  };

  const keyValuesBank = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-key-values-list',
    properties: {
      className: 'row-gap-top-xl',
      cellsConnections: {
        in: {
          [getChannelName('international_bank_information')]: {
            bind: 'list'
          }
        },
        out: {
        }
      }
    }
  };

  const inputNameRecipient = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-molecule-input',
    properties: {
      className: 'tag-input pd-input',
      label: 'glomo-international-transfers-beneficiary-name',
      type: 'text',
      id: 'addresseeName',
      icon: 'coronita:close',
      autoValidate: true,
      maxLength: '65',
      minLength: '3',
      allowedChars: '[a-zA-Z_ ]',
      allowedValue: '^[a-zA-Z_ ]{3,65}$',
      cellsConnections: {
        in: {
          [getChannelName('set-contact-selected-name')]: {
            bind: 'value'
          },
          [getChannelName('reset-name-input-channel')]: {
            bind: 'value'
          },
          [getChannelName('account_input_blur')]: {
            bind: 'blur'
          },
          [getChannelName('addresseeName_reset_input')]: {
            bind: 'clearInput'
          }
        },
        out: {
          [getChannelName('international-input-name-name')]: {
            bind: 'bind-value-changed'
          },
          [getChannelName('on-keyup-name')]: {
            bind: 'cells-molecule-input-keyup'
          }
        }
      }
    }
  };

  const inputNameAddress = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-molecule-input',
    properties: {
      className: 'tag-input pd-input',
      label: 'glomo-international-transfers-address-name',
      type: 'text',
      allowedChars: '[a-zA-Z0-9 ]',
      allowedValue: '^[a-zA-Z0-9 ]{3,65}$',
      autoValidate: true,
      id: 'addresseeAdress',
      icon: 'coronita:close',
      maxLength: '35',
      minLength: '3',
      cellsConnections: {
        in: {
          [getChannelName('set-contact-selected-address')]: {
            bind: 'value'
          },
          [getChannelName('reset-address-input-channel')]: {
            bind: 'value'
          },
          [getChannelName('account_input_blur')]: {
            bind: 'blur'
          },
          [getChannelName('addresseeAdress_reset_input')]: {
            bind: 'clearInput'
          }
        },
        out: {
          [getChannelName('international-input-name-address')]: {
            bind: 'bind-value-changed'
          },
          [getChannelName('on-keyup-address')]: {
            bind: 'cells-molecule-input-keyup'
          }
        }
      }
    }
  };

  const inputNameCity = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-molecule-input',
    properties: {
      className: 'tag-input pd-input',
      label: 'glomo-international-transfers-city-name',
      type: 'text',
      id: 'addresseeCity',
      icon: 'coronita:close',
      autoValidate: true,
      allowedChars: '^[a-zA-Z0-9_ ]',
      maxLength: '17',
      minLength: '3',
      cellsConnections: {
        in: {
          [getChannelName('set-contact-selected-city')]: {
            bind: 'value'
          },
          [getChannelName('reset-city-input-channel')]: {
            bind: 'value'
          },
          [getChannelName('account_input_blur')]: {
            bind: 'blur'
          },
          [getChannelName('addresseeCity_reset_input')]: {
            bind: 'clearInput'
          }
        },
        out: {
          [getChannelName('international-input-name-city')]: {
            bind: 'bind-value-changed'
          },
          [getChannelName('on-keyup-city')]: {
            bind: 'cells-molecule-input-keyup'
          }
        }
      }
    }
  };

  const inputNameCountry = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-molecule-input',
    properties: {
      className: 'tag-input pd-input',
      label: 'glomo-international-transfers-country',
      type: 'text',
      id: 'addresseeCountry',
      icon: 'coronita:close',
      autoValidate: true,
      allowedChars: '^[a-zA-Z0-9_ ñÑ]',
      maxLength: '17',
      minLength: '3',
      cellsConnections: {
        in: {
          [getChannelName('set-contact-selected-country')]: {
            bind: 'value'
          },
          [getChannelName('reset-country-input-channel')]: {
            bind: 'value'
          },
          [getChannelName('account_input_blur')]: {
            bind: 'blur'
          },
          [getChannelName('addresseeCountry_reset_input')]: {
            bind: 'clearInput'
          }
        },
        out: {
          [getChannelName('international-input-name-country')]: {
            bind: 'bind-value-changed'
          },
          [getChannelName('on-keyup-country')]: {
            bind: 'cells-molecule-input-keyup'
          }
        }
      }
    }
  };

  const inputRelationshipTransfer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-select-modal',
    properties: {
      className: 'u-margin--grid',
      id: 'relationship-transfer-input',
      title: 'glomo-international-transfers-relationship-to-recipient',
      isInputStyle: true,
      ellipsis: true,
      cellsConnections: {
        in: {
          [getChannelName('relationship_to_recipient_answer_name')]: {
            bind: 'itemSelected'
          }
        },
        out: {
          [getChannelName('show_relationship_to_recipient_available_answers')]: {
            bind: 'open-document-modal-selector'
          }
        }
      }
    }
  };

  const modalSelectorTransferRelationship = {
    zone: 'app__overlay',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      id: 'relationship-modal-selector',
      hideCheckIcon: true,
      cellsConnections: {
        in: {
          [getChannelName('show_relationship_to_recipient_available_answers')]: {
            bind: 'open'
          },
          INTERNATIONAL_TRANSFERS_FIRST_QUESTION_AVAILABLE_ANSWERS: {
            bind: 'items'
          },
          [getChannelName('relationship_transfer_answer')]: {
            bind: 'selected'
          },
          international_transfer_high_user_success: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('relationship_option_selected')]: {
            bind: 'item-clicked'
          }
        }
      }
    }
  };

  const iconMessageInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    properties: {
      className: 'in-page bottom-separation top-icon-message',
      icon: 'coronita:info',
      messages: [
        'cells-international-transfers-alert-icon-message-info',
        'cells-international-transfers-alert-icon-second-message-info'
      ],
      type: 'info-dark-blue',
      cellsConnections: {
        in: {
        },
        out: {
        }
      }
    }
  };

  const buttons = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      className: 'international-transfers-create-recipient',
      config: {
        buttons: {
          primary: {
            class: 'primary',
            text: 'international-transfers-summary-button-label',
            disabled: 'true'
          }
        }
      },
      unfixed: true,
      cellsConnections: {
        in: {
          [getChannelName('valid_button_continue')]: {
            bind: 'config'
          }
        },
        out: {
          [getChannelName('send_operation-registries')]: {
            bind: 'cells-confirm-buttons-click-primary'
          }
        }
      }
    }
  };


  const transfersManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-international-transfers-mx-dm',
    familyPath: 'glomo-international-transfers-dm',
    properties: {
      formatDate: moment().format('YYYY MM DD'),
      formathHour: moment().format('h:mm:ss'),
      className: 'international-transfers-create-recipient',
      validateInputModify: false,
      cellsConnections: {
        in: {
          international_transfers_reset_personal_information: {
            bind: 'resetPersonalInformation'
          },
          'international_transfer_high_user_success': {
            bind: 'showUserRegister'
          },
          [getChannelName('operation_request_success')]: {
            bind: 'finishContactRegister'
          },
          [getChannelName('user_register')]: {
            bind: 'addresseeInformation'
          },
          value_country: {
            bind: 'countryValue'
          },
          [getChannelName('send_operation-registries')]: {
            bind: 'requestRecoverRegistry'
          },
          [getChannelName('international-input-name-country')]: {
            bind: 'personalInformationAddresseeCountry'
          },
          [getChannelName('international-input-name-city')]: {
            bind: 'personalInformationAddresseeCity'
          },
          [getChannelName('international-input-name-address')]: {
            bind: 'personalInformationAddresseeAdress'
          },
          [getChannelName('international-input-name-name')]: {
            bind: 'personalInformationAddresseeName'
          },
          [getChannelName('OPEN_MODAL_EXIT')]: {
            bind: 'modalConfirmExit'
          },
          [getChannelName('on-keyup-name')]: {
            bind: 'onKeyboardPress'
          },
          [getChannelName('on-keyup-address')]: {
            bind: 'onKeyboardPress'
          },
          [getChannelName('on-keyup-city')]: {
            bind: 'onKeyboardPress'
          },
          [getChannelName('on-keyup-country')]: {
            bind: 'onKeyboardPress'
          },
          global_international_transfer_modal_close_page: {
            bind: 'exitPageAccount'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'modalConfirmExit'
          },
          INTERNATIONAL_TRANSFERS_FIRST_QUESTION_AVAILABLE_ANSWERS: {
            bind: 'setRelationshipToRecipientAvailableAnswers'
          },
          [getChannelName('relationship_option_selected')]: {
            bind: 'setRelationshipToRecipientAnswer'
          },
          [getChannelName('operation_request_error')]: {
            bind: 'handleOperationRegistriesPostError'
          }
        },
        out: {
          [getChannelName('valid_button_continue')]: {
            bind: 'valid-personal-info-button-continue'
          },
          [getChannelName('international_bank_information')]: {
            bind: 'set-bank-information-success'
          },
          [getChannelName('account_number')]: {
            bind: 'send-correct-account-number'
          },
          [getChannelName('set-contact-selected-data')]: {
            bind: 'set-contact-selected-data'
          },
          [getChannelName('reset-name-input-channel')]: {
            bind: 'reset-addressee-name-input'
          },
          [getChannelName('reset-address-input-channel')]: {
            bind: 'reset-addressee-address-input'
          },
          [getChannelName('account_input_blur')]: {
            bind: 'account-input-blur'
          },
          [getChannelName('reset-city-input-channel')]: {
            bind: 'reset-addressee-city-input'
          },
          [getChannelName('reset-country-input-channel')]: {
            bind: 'reset-addressee-country-input'
          },
          [getChannelName('request_api_operation')]: {
            bind: 'send-response-recover-registry'
          },
          global_alert_manager_open_with_settings: {
            bind: 'dispatch-modal-settings'
          },
          global_bank_caution_modal_international_transfer: {
            bind: 'open-modal-bank-caution'
          },
          'GO-BACK-MODAL-CAUTION-BANK': {
            bind: 'redirect-to-page-international-transfers',
            backStep: true
          },
          [getChannelName('return_page_go_back_modal')]: {
            bind: 'close-page-redirec-to-back',
            link: {
              page: 'internationalTransfers'
            }
          },
          international_transfers_collapsed_contact_proccess: {
            bind: 'contact-destination-collapsed',
            link: {
              page: 'internationalTransfers',
              skipHistory: true
            }
          },
          [getChannelName('addresseeName_reset_input')]: {
            bind: 'reset-data-addresseeName-input'
          },
          [getChannelName('addresseeAdress_reset_input')]: {
            bind: 'reset-data-addresseeAdress-input'
          },
          [getChannelName('addresseeCity_reset_input')]: {
            bind: 'reset-data-addresseeCity-input'
          },
          [getChannelName('addresseeCountry_reset_input')]: {
            bind: 'reset-data-addresseeCountry-input'
          },
          [getChannelName('show_relationship_options_modal')]: {
            bind: 'show-relationship-options-modal'
          },
          [getChannelName('relationship_to_recipient_answer_name')]: {
            bind: 'dispatch-relationship-to-recipient-answer-name'
          },
          [getChannelName('reset_relashionship_input_class_channel')]: {
            bind: 'reset-class-relashionship-input-select'
          },
          [getChannelName('relationship_transfer_answer')]: {
            bind: 'dispatch-relationship-answer'
          },
          global_retry_error: {
            bind: 'show-global-retry-error'
          }
        },
        params: {
          globalUser: 'global_user'
        }
      }
    }
  };

  const analyticsInternationalsTransfer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-international-transfers-manager',
    familyPath: '@glomo-web-components/glomo-analytics-international-transfers-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          international_transfer_high_user_success: {
            bind: 'analyticsAppStep3'
          },
          international_transfers_collapsed_contact_proccess: {
            bind: 'analyticsAppStep4'
          },
          [getChannelName('relationship_option_selected')]: {
            bind: 'persistFirstQuestion'
          }
        },
        out: {
          [getChannelName('analytics_app_step3')]: {
            bind: 'analytics-app-step3',
            analytics: ANALYTICS.APP_STEP_3
          },
          [getChannelName('analytics_app_step4')]: {
            bind: 'analytics-app-step4',
            analytics: ANALYTICS.APP_STEP_4
          }
        }
      }
    }
  };

  const globalApisOperationRegistries = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-operation-registries',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: PAGE_NAME,
      localCurrency: LOCAL_CURRENCY,
      language: LANGUAGE,
      cellsConnections: {
        in: {
          [getChannelName('request_api_operation')]: {
            bind: 'postRecoverRegistry'
          }
        },
        out: {
          [getChannelName('operation_request_success')]: {
            bind: 'success-on-post-operation-registries-data'
          },
          [getChannelName('operation_request_error')]: {
            bind: 'error-on-post-operation-registries-data'
          }
        }
      }
    }
  };

  const UI = [
    SPINNER,
    iconMessageSuccess,
    keyValuesBank,
    internationalDivider,
    keyValuesRecipient,
    inputNameRecipient,
    inputNameAddress,
    inputNameCity,
    inputNameCountry,
    inputRelationshipTransfer,
    modalSelectorTransferRelationship,
    iconMessageInfo,
    buttons
  ];
  const DMs = [
    transfersManager,
    globalApisOperationRegistries,
    analyticsInternationalsTransfer
  ];

  base.components.push(...UI, ...DMs);

  signConnector(base)('cells-dm-global-apis-operation-registries', PAGE_NAME, ['success-on-post-operation-registries-data', 'error-on-post-operation-registries-data']);

  addRetryErrors(base, [
    {
      id: 'operation-registries-post',
      cancelRetry: { bind: 'modalConfirmExit', component: 'glomo-international-transfers-mx-dm' },
      successEvent: {
        bind: 'success-on-post-operation-registries-data',
        component: 'cells-dm-global-apis-operation-registries'
      },
      acceptCallForHelp: { bind: 'modalConfirmExit', component: 'glomo-international-transfers-mx-dm' }
    }
  ]);
  return base;
};
