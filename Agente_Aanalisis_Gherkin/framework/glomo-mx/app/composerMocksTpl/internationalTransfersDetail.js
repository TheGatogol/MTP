/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'internationalTransfersDetail';
  const utils = require('./common/helpers/_utils');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { useNames, toUnderscoreCase } = require('./common/helpers/_utils');
  const [ getChannelName ] = useNames(toUnderscoreCase(PAGE_NAME));
  const LANGUAGE = 'es-MX';
  const LOCAL_CURRENCY = 'MXN';
  const HOST = CONFIG.globalServices.host;
  const isNativeIos = CONFIG.nativeIos;
  // eslint-disable-next-line new-cap
  const Spinner = utils.SPINNER(CONFIG);

  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS_ITD = require('./analytics/_internationalTransfersDetail')();
  const ANALYTICS_REFUNDS = require('./analytics/_internationalRefunds')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const OPERATIONS_TYPE_PATH = {
    foreignBank: {
      SENT: 'receiver.contract.bank.name',
      RECEIVED: 'sender.contract.bank.name'
    },
    foreignName: {
      SENT: 'receiver.holder.holderName',
      RECEIVED: 'sender.holder.holderName'
    },
    foreignAccountNumber: {
      SENT: 'receiver.contract.number',
      RECEIVED: 'sender.contract.number'
    },
    localAccount: {
      SENT: 'sender.contract.number',
      RECEIVED: 'receiver.contract.number'
    }
  };

  const STATUSES = {
    PENDING_INFORMATION: { name: 'bbva-manager-international-transfer-movement-pending-information-status', type: 'warning' },
    IN_REVIEW: { name: 'bbva-manager-international-transfer-movement-in-review-status', type: 'default' },
    SUCCESSFUL: { name: 'bbva-manager-international-transfer-movement-successful-status', type: 'success' },
    REJECTED: { name: 'bbva-manager-international-transfer-movement-rejected-status', type: 'error' },
    DEFAULT: { name: 'bbva-manager-international-transfer-movement-default-status', type: 'default' }
  };

  const OPERATIVES_CONFIG = {
    completeData: {
      icon: isSpherica ? 'spherica:edit' : 'coronita:edit',
      label: 'bbva-manager-international-transfer-detail-complete-data-operative',
      eventName: 'click-pending-information',
      id: 'completeData'
    },
    shareReceipt: {
      icon: isSpherica ? 'spherica:share' : 'coronita:share',
      label: 'bbva-manager-international-transfer-detail-share-operative',
      eventName: 'click-share',
      id: 'shareReceipt'
    }
  };

  const ACCOUNT_PATHS = {
    accounts: '0.products',
    accountNumber: 'originalProduct.number',
    accountId: 'id',
    accountAlias: 'alias'
  };

  Spinner.properties.className = 'solid-spinner';
  Spinner.properties.cellsConnections.in.INTERNATIONAL_TRANSFERS_INITIALIZE_DETAIL = {
    bind: 'openVeil'
  };
  Spinner.properties.cellsConnections.in[getChannelName('detail_loaded')] = {
    bind: 'closeVeil'
  };
  Spinner.properties.cellsConnections.in[getChannelName('show_spinner')] = {
    bind: 'openVeil'
  };
  Spinner.properties.cellsConnections.in[getChannelName('hide_spinner')] = {
    bind: 'closeVeil'
  };

  const base = {
    hash: 'mx-international-transfers-detail',
    currentPage: {
      url: '/' + PAGE_NAME
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [PAGE_NAME + '_init_page']: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        className: 'bg-light-grey',
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [
      Spinner
    ]
  };

  const CellsHandleLifCycle = {
    zone: 'app__main',
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
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [`${PAGE_NAME}_reset_page`]: {
            bind: 'reset'
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

  const BbvaHeaderMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'glomo-international-transfers-detail-header-page',
      iconLeftPrimary: 'coronita:return-12',
      cellsConnections: {
        out: {
          [getChannelName('go_back')]: {
            bind: `header-main-icon-${isSpherica ? 'click' : 'left-primary-click'}`,
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'first-level-initial',
      className: '',
      leftButtons: [
        {
          id: 'btn-right-primary',
          name: 'return',
          icon: 'spherica:back-mini',
          label: 'bbva-header-main-return-aria-label',
          accessibilityText: 'bbva-header-main-return-aria-label'
        }
      ]
    }
  };

  const BbvaPanelProcess = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-process',
    tagSpherica: 'bbva-panel-process-spherica',
    familyPath: '@bbva-web-components/bbva-panel-process',
    familyPathSpherica: '@glomo-web-components/bbva-panel-process-spherica',
    render: 'litElement',
    properties: {
      className: 'detail-summary',
      dateFormat: {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      },
      hideIcon: true,
      language: LANGUAGE,
      localCurrency: LOCAL_CURRENCY,
      cellsConnections: {
        in: {
          [getChannelName('heading')]: {
            bind: 'heading'
          },
          [getChannelName('secondary_description')]: {
            bind: 'secondaryDescription'
          },
          [getChannelName('amount')]: {
            bind: 'amount'
          },
          [getChannelName('currency_code')]: {
            bind: 'currencyCode'
          },
          [getChannelName('operation_date')]: {
            bind: 'date'
          },
          [getChannelName('status_name')]: {
            bind: 'badgeStatus'
          },
          [getChannelName('status_type')]: {
            bind: 'badgeStatusType'
          }
        }
      }
    },
    propertiesSpherica: {
      className: ' u-margin--1',
      hidePaddingTop: true,
      hidePaddingBottom: true,
      dateOptions: {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      },
      newCellsConnections: {
        add: {
          in: {
            international_transfers_detail_secondary_description: {
              bind: 'description'
            }
          }
        }
      }
    }
  };

  const BbvaButtoRow = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-row',
    tagSpherica: 'bbva-button-row-spherica',
    familyPath: '@bbva-spherica-components/bbva-button-row',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('config_operative')]: {
            bind: 'options'
          }
        },
        out: {
          [getChannelName('click_operative')]: {
            bind: 'button-row-item-click'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            international_transfers_detail_click_operative_spherica_share_receipt: {
              bind: 'button-row-item-shareReceipt-click'
            },
            international_transfers_detail_click_operative_spherica_complete_data: {
              bind: 'button-row-item-completeData-click'
            }
          }
        },
        remove: {
          out: [
            'international_transfers_detail_click_operative'
          ]
        }
      }
    }
  };

  const BbvaNotificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('info_message_hidden')]: {
            bind: 'hidden'
          },
          [getChannelName('info_message_variant')]: {
            bind: 'variant'
          },
          [getChannelName('info_message_text')]: {
            bind: 'textContent'
          },
          [getChannelName('info_message_link_title')]: {
            bind: 'linkTitle'
          }
        },
        out: {
          [getChannelName('call_bbva_line')]: {
            bind: 'notification-message-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--1',
      bookTitle: true,
      newCellsConnections: {
        add: {
          in: {
            international_transfers_detail_info_message_text_spherica: {
              bind: 'messageTitle'
            }
          }
        },
        remove: {
          in: [
            'international_transfers_detail_info_message_text'
          ]
        }
      }
    }
  };

  const BbvaAggregationSimpleList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-simple-list',
    tagSpherica: 'bbva-aggregation-simple-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-simple-list-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('simple_list_data')]: {
            bind: 'config'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary'
    }
  };

  const BbvaManagerInternationalTransfers = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-international-transfer',
    tag: 'bbva-manager-international-transfer-detail',
    render: 'litElement',
    properties: {
      bbvaLine: CONFIG.phoneNumberContact,
      accountPaths: ACCOUNT_PATHS,
      language: LANGUAGE,
      localCurrency: LOCAL_CURRENCY,
      operationsTypesPath: OPERATIONS_TYPE_PATH,
      statuses: STATUSES,
      operativesConfig: OPERATIVES_CONFIG,
      isSpherica,
      cellsConnections: {
        in: {
          dashboard_accounts: {
            bind: 'setAccounts'
          },
          INTERNATIONAL_TRANSFERS_INITIALIZE_DETAIL: {
            bind: 'initializeDetail'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_successful_response')]: {
            bind: 'handleInternationalTransfersQuestionnaireAnswersSuccessfulResponse'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answer_search_post_error_response')]: {
            bind: 'handleInternationalTransfersQuestionnaireAnswersErrorResponse'
          },
          [getChannelName('money_laundering_questionnaire_types_get_successful_response')]: {
            bind: 'handleGetMoneyLaunderingQuestionnaireTypesSuccessfulResponse'
          },
          [getChannelName('money_laundering_questionnaire_types_get_error_response')]: {
            bind: 'handleGetMoneyLaunderingQuestionnaireTypesErrorResponse'
          },
          [getChannelName('click_operative')]: {
            bind: 'handleOperativeClick'
          },
          international_transfers_detail_click_operative_spherica_share_receipt: {
            bind: 'handleOperativeClick'
          },
          international_transfers_detail_click_operative_spherica_complete_data: {
            bind: 'handleOperativeClick'
          },
          [getChannelName('go_back')]: {
            bind: 'resetDetail'
          },
          [getChannelName('call_bbva_line')]: {
            bind: 'callBBVALine'
          }
        },
        out: {
          [getChannelName('show_page_spinner')]: {
            bind: 'show-page-spinner'
          },
          [getChannelName('heading')]: {
            bind: 'dispatch-international-transfers-detail-panel-process-heading'
          },
          [getChannelName('secondary_description')]: {
            bind: 'dispatch-international-transfers-detail-panel-process-secondary-description'
          },
          [getChannelName('amount')]: {
            bind: 'dispatch-international-transfers-detail-panel-process-sent-money-amount'
          },
          [getChannelName('currency_code')]: {
            bind: 'dispatch-international-transfers-detail-panel-process-sent-money-currency'
          },
          [getChannelName('status_type')]: {
            bind: 'dispatch-international-transfers-detail-panel-process-status-type'
          },
          [getChannelName('status_name')]: {
            bind: 'dispatch-international-transfers-detail-panel-process-status-name'
          },
          [getChannelName('operation_date')]: {
            bind: 'dispatch-international-transfers-detail-panel-process-operation-date'
          },
          [getChannelName('config_operative')]: {
            bind: 'dispatch-international-transfers-config-operative'
          },
          [getChannelName('info_message_hidden')]: {
            bind: 'dispatch-international-transfers-detail-info-message-hidden'
          },
          [getChannelName('info_message_variant')]: {
            bind: 'dispatch-international-transfers-detail-info-message-variant'
          },
          [getChannelName('info_message_text')]: {
            bind: 'dispatch-international-transfers-detail-info-message-text'
          },
          international_transfers_detail_info_message_text_spherica: {
            bind: 'dispatch-international-transfers-detail-info-message-text'
          },
          [getChannelName('info_message_link_title')]: {
            bind: 'dispatch-international-transfers-detail-info-message-linkTitle'
          },
          [getChannelName('receipt_template')]: {
            bind: 'receipt-template'
          },
          [getChannelName('receipt_data')]: {
            bind: 'dispatch-receipt-data'
          },
          [getChannelName('request_questionnaire_types_get')]: {
            bind: 'dispatch-money-laundering-questionnaire-types-request'
          },
          [getChannelName('request_money_laundering_questionnaire_answers')]: {
            bind: 'request-questionnaire-answers'
          },
          [getChannelName('simple_list_data')]: {
            bind: 'dispatch-international-transfers-detail-simple-list-data'
          },
          [getChannelName('detail_loaded')]: {
            bind: 'detail-loaded'
          },
          [getChannelName('click_on_share')]: {
            bind: 'click-share'
          },
          global_action_launcher_dialer: {
            bind: 'open-dialer'
          },
          global_retry_error: {
            bind: 'show-global-retry-error'
          },
          [getChannelName('go_back')]: {
            bind: 'go-back',
            backStep: true
          },
          INTERNATIONAL_TRANSFERS_DETAIL_MOVEMENT_SELECTED: {
            bind: 'click-pending-information',
            analytics: ANALYTICS_REFUNDS.APP_ON_CLICK_START,
            link: {
              page: 'internationalRefunds'
            }
          }
        }
      }
    }
  };

  const BbvaAnalyticsManagerInternationalTransfer = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-international-transfer',
    tag: 'bbva-analytics-manager-international-transfer-detail',
    render: 'litElement',
    properties: {
      operationsType: {
        SENT: 'enviadas',
        RECEIVED: 'recibidas'
      },
      cellsConnections: {
        in: {
          [getChannelName('detail_loaded')]: {
            bind: 'setIsLoaded'
          },
          INTERNATIONAL_TRANSFERS_INITIALIZE_DETAIL: {
            bind: 'setOperationType'
          },
          [getChannelName('init_page')]: {
            bind: 'setIsInitialized'
          }
        },
        out: {
          [getChannelName('operations_sent')]: {
            bind: 'analytics-page-view-international-transfers-detail',
            analytics: ANALYTICS_ITD.get_custom_page_view_with_feature_flag()
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
          [getChannelName('request_questionnaire_types_get')]: {
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
          [getChannelName('request_money_laundering_questionnaire_answers')]: {
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
          global_generic_error: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    properties: {
      currencySeparator: '',
      sharedReceiptStyles: {
        receiptTitle: {
          'font-weight': 'var(--cells-fontDefaultMedium_-_font-weight, 500)',
          'line-height': '24px'
        },
        fieldTitle: {
          'height': 'auto',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '24px',
          'margin-top': '16px'
        },
        fieldValue: {
          'height': 'auto',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '24px'
        },
        fieldValueAccount: {
          'height': 'auto',
          'font-style': 'italic',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '24px',
          'margin': '0'
        }
      },
      lengthPan: '4',
      language: LANGUAGE.toLowerCase(),
      localCurrency: LOCAL_CURRENCY,
      dateFormat: 'd MMMM YYYY, hh:mm[h]',
      cellsConnections: {
        in: {
          INTERNATIONAL_TRANSFERS_INITIALIZE_DETAIL: {
            bind: 'reset'
          },
          [getChannelName('receipt_template')]: {
            bind: 'addDynamicTemplate'
          },
          [getChannelName('receipt_data')]: {
            bind: 'result'
          },
          [getChannelName('click_on_share')]: {
            bind: 'captureReceipt'
          }
        },
        out: {
          [getChannelName('show_spinner')]: {
            bind: 'open-control-veil'
          },
          [getChannelName('hide_spinner')]: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    },
    propertiesSpherica: {
      country: 'mxGlobal'
    }
  };

  base.components.push(
    CellsHandleLifCycle,
    BbvaHeaderMain,
    BbvaPanelProcess,
    BbvaButtoRow,
    BbvaNotificationMessage,
    BbvaAggregationSimpleList,
    BbvaManagerInternationalTransfers,
    BbvaAnalyticsManagerInternationalTransfer,
    bbvaDataproviderMoneyLaunderingQuestionnaireTypes,
    bbvaDataproviderMoneyLaunderingInternationalTransfersQuestionnaireAnswers,
    cellsShareGenericReceipt
  );

  addRetryErrors(base)([
    {
      id: 'money-laundering-questionnaire-types-not-loaded',
      acceptRetry: { bind: 'getMoneyLaunderingQuestionnaireTypes', component: 'bbva-manager-international-transfer-detail' },
      cancelRetry: { bind: 'goBack', component: 'bbva-manager-international-transfer-detail' },
      successEvent: { bind: 'data-provider-money-laundering-questionnaire-types-get-successful-response', component: 'bbva-dataprovider-money-laundering-questionnaire-types' },
      acceptCallForHelp: { bind: 'goBack', component: 'bbva-manager-international-transfer-detail' }
    },
    {
      id: 'international-transfers-questionnaire-answers-not-loaded',
      acceptRetry: { bind: 'getInternationalTransfersQuestionnaireAnswers', component: 'bbva-manager-international-transfer-detail' },
      cancelRetry: { bind: 'goBack', component: 'bbva-manager-international-transfer-detail' },
      successEvent: { bind: 'data-provider-money-laundering-international-transfers-questionnaire-answer-search-post-successful-response', component: 'bbva-dataprovider-money-laundering-international-transfers-questionnaire-answers' },
      acceptCallForHelp: { bind: 'goBack', component: 'bbva-manager-international-transfer-detail' }
    }
  ]);

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
