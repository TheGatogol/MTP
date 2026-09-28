/* eslint-disable complexity, max-statements */
'use strict';

const {
  connectionsOut,
  createPrefixFromPageName,
  createSpinner,
  getLanguage,
  getLocalCurrency,
  headerHeight,
  useNames
} = require('./common/helpers/_utils');
const {
  getAdvancedFootprint,
  getAdvancedFootprintError,
  getAppCompleted,
  getAppStarted,
  getAppStep,
  getPageVisit
} = require('./analytics/_fundsHiring')();
const PAGE_NAME = 'fundsHiring';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
const { minFundsAmounts } = require('./common/fundHelpers/_fundList');
const termTypeTexts = [
  { text: 'Corto plazo (menos de 1 año)', term: 'CORTO PLAZO', typeFund: 'DEUDA CORTO PLAZO' },
  { text: 'Mediano plazo (1 a 3 años)', term: 'MEDIANO PLAZO', typeFund: 'DEUDA MEDIANO PLAZO' },
  { term: 'LARGO PLAZO', typeFund: 'DEUDA LARGO PLAZO' }
];
const multistrategyTerms = [
  { type: 'CRECIMIENTO' },
  { type: 'MERCADO ESTRATEGIA' },
  { type: 'DEUDA LARGO PLAZO' },
  { type: 'PRESERVACION CAPITAL' },
  { type: 'GENERACION FLUJOS' }
];
const payloadSelectedTypeFund = [
  {
    name: 'funds-hiring-filter-modal-debt-type-title',
    productType: 'FUNDS',
    additionalInformation: [ { key: 'funds-hiring-filter-modal-debt-type-description', className: 'text-left' } ]
  },
  {
    name: 'funds-hiring-filter-modal-rent-type-title',
    productType: 'FUNDS',
    additionalInformation: [ { key: 'funds-hiring-filter-modal-rent-type-description', className: 'text-left' } ]
  },
  {
    name: 'funds-hiring-filter-modal-multi-strategy-type-title',
    productType: 'FUNDS',
    additionalInformation: [ { key: 'funds-hiring-filter-modal-multi-strategy-type-description', className: 'text-left' } ]
  }
];
module.exports = CONFIG => {
  const { glomoAlertManagerSpherica, glomoAlertManager } = require('./common/_cross-components');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const MAX_STEPS = 6;
  const { analyticsCallMeBack, controllerCallMeBack } = require('./common/_redirectCallMeBack');
  const getChannelNameCallMeBack = _name => getChannelName(_name).toLowerCase();
  const cmbConfig = {
    operativeName: PAGE_NAME,
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    lastStep: 8,
    onlyCallMeBack: true,
    recoverySettings: true,
    onlyCallMeBackRemoteManager: true,
    useFeatureFlag: true,
    scheduleNotAllowed: true
  };
  const cmbConfigAnalytics = {
    operativeName: PAGE_NAME,
    steps: {
      1: '1 informacion',
      2: '2 cuenta asociada',
      3: '3 servicio de inversion',
      4: '4 seleccionar fondo de inversion',
      5: '5 insertar importe',
      6: '6 envio de estado de cuenta',
      7: '7 terminos y condiciones',
      8: '8 confirmacion'
    },
    levels: {
      1: 'fondos flujo unificado'
    }
  };
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { accounts, contactsBook, businessDocument }
    },
    nativeIos: isNativeIos = false,
    native = false,
    settingsHost,
    namespace,
    endpoints: { fundList }
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      headerHeight,
      headerFixed: true,
      iOSFixedHeader: true,
      topOnConfirm: true,
      className: 'funds-investment header-fixed',
      extraHeaderClass: 'bg-core-blue',
      cellsConnections: {
        in: {
          glomo_funds_hiring_set_confirm: {
            bind: 'showConfirm'
          },
          [getChannelName('show_button_finish_steps')]: {
            bind: 'showConfirm'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'showConfirm'
          },
          funds_hiring_init_page: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('exit_funds_hiring_flow')]: {
            bind: 'close'
          },
          [getChannelName('reset_entire_flow_after_success')]: {
            bind: 'close'
          },
          [getChannelName('reset_from_fund_selected')]: {
            bind: 'close'
          },
          [getChannelName('cells_scroll_zone_modify')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('CONFIRM_ANIMATION')]: {
            bind: 'collapseOpened'
          }
        },
        out: {
          [getChannelName('SCROLL_TEMPLATE')]: {
            bind: 'opx-template-content-scroll'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    },
    propertiesSpherica: {
      className: isNativeIos ? 'ios-top-padding' : '',
      extraHeaderClass: isNativeIos ? 'header--white' : ''
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false,
        'not-collapse-any-steps': true
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
          app_error_access_token: {
            bind: 'access-token-error'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          funds_hiring_init_page: {
            bind: 'init-page'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('init_page_recalculate_header')]: {
            bind: 'init-page'
          },
          [getChannelName('not_collapse_any_steps')]: {
            bind: 'not-collapse-any-steps'
          },
          [getChannelNameCallMeBack('_call_me_back_initialize')]: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
            bind: 'init-page'
          }
        }
      }
    }
  };
  const spinner = createSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.properties.className = 'solid-spinner';
  spinner.properties.open = true;
  spinner.properties.cellsConnections.in = {
    ...spinner.properties.cellsConnections.in,
    [`global_${getChannelName('show_branch_modal')}`]: {
      bind: 'hide'
    },
    [`global_${getChannelName('TOGGLE_SPINNER')}`]: {
      bind: 'hide'
    },
    [getChannelName('FUNDS_FILTER_HIDDE_SPINNER')]: {
      bind: 'hide'
    },
    [getChannelName('reset_entire_flow_after_success')]: {
      bind: 'show'
    },
    [getChannelName('FUNDS_FILTER_HIDDE_SPINNER_VARIABLE')]: {
      bind: 'hide'
    },
    [getChannelName('GET_INVESTMENT_FUNDS_LIST')]: {
      bind: 'show'
    },
    [getChannelName('SET_INVESTMENT_FUNDS_LIST')]: {
      bind: 'hide'
    },
    [getChannelName('FUNDS_FILTER_SHOW_SPINNER')]: {
      bind: 'show'
    },
    [getChannelName('FUNDS_FILTER_SHOW_SPINNER_VARIABLE')]: {
      bind: 'show'
    },
    [getChannelName('FUNDS_FILTER_SHOW_SPINNER_ALL_PRODUCTS')]: {
      bind: 'show'
    },
    [getChannelName('FUNDS_FILTER_HIDDE_SPINNER_ALL_PRODUCTS')]: {
      bind: 'hide'
    },
    [getChannelName('view_all_accounts')]: {
      bind: 'hide'
    },
    [getChannelName('POST_FUND_SIMULATE')]: {
      bind: 'show'
    },
    [getChannelName('HIDE_SPINNER_FUND_SIMULATE')]: {
      bind: 'hide'
    },
    [getChannelName('REQUEST_FUND_DETAIL_MODAL')]: {
      bind: 'show'
    },
    [getChannelName('SET_DATA_DETAILS_SECTION_MODAL')]: {
      bind: 'hide'
    },
    [getChannelName('REQUEST_FUND_CONTRACT_SERVICE')]: {
      bind: 'show'
    },
    [getChannelName('HIDE_SPINNER_FUND_CONTRACT')]: {
      bind: 'hide'
    },
    FUNDSHIRING_ERROR_CONTRACT_MODAL_OPEN: {
      bind: 'hide'
    },
    [getChannelName('ERROR_LIST_FUNDS_AVAILABLE_REQUEST')]: {
      bind: 'closeVeil'
    },
    [getChannelName('ERROR_POST_DETAIL_FUND_AVAILABLE_SIMULATE')]: {
      bind: 'closeVeil'
    },
    [getChannelName('ERROR_DETAIL_FUND_AVAILABLE_REQUEST')]: {
      bind: 'closeVeil'
    },
    FUNDSHIRING_OPEN_PDF_MODAL: {
      bind: 'closeVeil'
    },
    funds_hiring_error_response_pdf: {
      bind: 'closeVeil'
    },
    funds_hiring_request_template: {
      bind: 'show'
    },
    global_open_document_url_success: {
      bind: 'closeVeil'
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      id: getLocaleName('header'),
      className: 'header--grey',
      titleName: 'funds-hiring-flow-title',
      setTimeoutHideTooltip: 3000,
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      cellsConnections: {
        in: {
          global_call_me_back_change_header_tooltip_status: {
            bind: 'hasDisplayedTooltip'
          },
          global_call_me_back_set_header_timeout_tooltip: {
            bind: 'setTimeoutShowTooltip'
          },
          global_call_me_back_set_header_configuration: {
            bind: 'setProperties'
          },
          funds_hiring_init_page: {
            bind: 'removeSecondaryClass'
          },
          [getChannelName('next_step')]: {
            bind: 'setSecondaryClass'
          },
          [getChannelName('remove_header_class')]: {
            bind: 'removeSecondaryClass'
          },
          global_funds_hiring_exit: {
            bind: 'removeSecondaryClass'
          },
          [getChannelName('exit_funds_hiring_flow')]: {
            bind: 'removeSecondaryClass'
          },
          [getChannelName('reset_entire_flow_after_success')]: {
            bind: 'removeSecondaryClass'
          }
        },
        out: {
          [getChannelName('back-button')]: {
            bind: 'click-right-button'
          },
          [getChannelNameCallMeBack('_call_me_back_init_header_configuration')]: {
            bind: 'click-right-secondary-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'header',
      rightIconText: 'cells-molecule-header-spherica-close',
      rightIconSecondaryText: 'cells-molecule-header-spherica-help',
      newCellsConnections: {
        remove: {
          in: [
            'funds_hiring_next_step'
          ]
        }
      }
    }
  };
  const managers = [{
    zone: 'app__main',
    tag: 'diy-step-opx-dm',
    type: 'DM',
    properties: {
      lang: getLanguage(),
      autoActivateStep: true,
      repeatOperativeStep: true,
      decorateSteps: true,
      operativeName: 'FUNDSHIRING',
      cellsConnections: {
        in: {
          global_funds_hiring_go_to_next_step: {
            bind: 'goToNext'
          },
          global_close_filter_funds: {
            bind: 'goToNext'
          },
          glomo_funds_hiring_reset_step_select_account: {
            bind: 'reset'
          },
          funds_hiring_init_page: {
            bind: 'setHeaderOriginColor'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'registerStep'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('GO_TO_STEP_SERVICE_SELECTED')]: {
            bind: 'goToStep'
          },
          [getChannelName('GO_TO_LAST_ACTIVE_STEP')]: {
            bind: 'goToStep'
          },
          [getChannelName('next_step')]: {
            bind: 'goToNext'
          },
          [getChannelName('set_info_profile')]: {
            bind: 'goToNext'
          },
          [getChannelName('not_collapse_any_steps')]: {
            bind: 'reset'
          },
          [getChannelName('back-button')]: {
            bind: 'manageBackButton'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          [getChannelName('active-exit-alert')]: {
            bind: 'showExitConfirm'
          },
          [getChannelName('reset_from_fund_selected')]: {
            bind: 'resetFollowingSteps'
          },
          [getChannelName('go_atm_locator_fatca')]: {
            bind: 'reset'
          },
          [getChannelName('reset_entire_flow_after_success')]: {
            bind: 'reset'
          },
          [getChannelName('CONTENT_ID_STEP')]: {
            bind: 'goToStep'
          },
          [getChannelName('RESET_STEP_ID')]: {
            bind: 'resetFollowingSteps'
          }
        },
        out: {
          [getChannelName('exit-flow')]: {
            bind: 'navigate-back-button',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'navigate-back-button'
          },
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
            bind: 'show-close-confirm'
          },
          [getChannelName('show_button_finish_steps')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'can-execute-changed'
          },
          global_retargeting_go_next_step: {
            bind: 'can-execute-changed'
          }
        }
      }
    }
  }, {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts',
    properties: {
      host,
      accountsApiVersion: accounts,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('FUND_HIRING_ACCOUNT_SERVICE')]: {
            bind: 'getAccounts'
          },
          [getChannelName('SET_ACCOUNT_ID')]: {
            bind: 'accountId'
          },
          [getChannelName('REQUEST_ACCOUNT_PARTICIPANTS')]: {
            bind: 'getAccountParticipants'
          }
        },
        out: {
          [getChannelName('_success_accounts_funds')]: {
            bind: 'set-accounts'
          },
          [getChannelName('SUCCESS_ACCOUNT_PARTICIPANTS')]: {
            bind: 'set-account-participants'
          },
          [getChannelName('ERROR_ACCOUNT_PARTICIPANTS')]: {
            bind: 'error-account-participants'
          }
        }
      }
    }
  }, {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host,
      native,
      requiredToken,
      contactsBookApiVersion: contactsBook,
      cellsConnections: {
        in: {
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'customerId'
          },
          [getChannelName('REQUEST_CUSTOMER_ADDRESSES')]: {
            bind: 'getCustomerAddresses'
          },
          [getChannelName('REQUEST_CUSTOMER_DETAIL')]: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getChannelName('SUCCESS_CUSTOMER_ADDRESSES')]: {
            bind: 'set-customer-addresses'
          },
          [getChannelName('ERROR_CUSTOMER_ADDRESSES')]: {
            bind: 'error-on-get-customer-addresses'
          },
          [getChannelName('SUCCESS_CUSTOMER_DETAIL')]: {
            bind: 'set-customer-detail'
          },
          [getChannelName('ERROR_CUSTOMER_DETAIL')]: {
            bind: 'error-on-get-customer-detail'
          }
        }
      }
    }
  }, {
    zone: 'app__main',
    tag: 'cells-dm-global-apis-products',
    type: 'DM',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          [getChannelName('GET_INVESTMENT_FUNDS_LIST')]: {
            bind: 'getInvestmentFundProductsByInvestmenFundId'
          },
          [getChannelName('REQUEST_FUND_DETAIL_MODAL')]: {
            bind: 'getInvestmentFundProductsByFundId'
          }
        },
        out: {
          [getChannelName('SET_INVESTMENT_FUNDS_LIST')]: {
            bind: 'success-on-get-investment-funds-by-investment-fund-id'
          },
          [getChannelName('ERROR_ON_INVESTMENT_FUNDS_LIST')]: {
            bind: 'error-on-get-investment-funds-by-investment-fund-id'
          },
          [getChannelName('SUCCESS_FUND_DETAIL_REQUEST')]: {
            bind: 'success-on-get-investment-fund-products-by-fund-id'
          },
          [getChannelName('ERROR_LIST_FUNDS_AVAILABLE_REQUEST')]: {
            bind: 'error-on-get-investment-funds-by-investment-fund-id'
          },
          [getChannelName('ERROR_DETAIL_FUND_AVAILABLE_REQUEST')]: {
            bind: 'error-on-get-investment-fund-products-by-fund-id'
          }
        }
      }
    }
  }, {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-investment-funds',
    properties: {
      host,
      requiredToken,
      native,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName('POST_FUND_SIMULATE')]: {
            bind: 'postFundSimulate'
          },
          [getChannelName('REQUEST_FUND_CONTRACT_SERVICE')]: {
            bind: 'contractFundService'
          }
        },
        out: {
          [getChannelName('success_post_fund_simulate')]: {
            bind: 'success-on-post-simulate'
          },
          [getChannelName('SUCCESS_ON_FUND_CONTRACT')]: {
            bind: 'success-on-fund-contract'
          },
          [getChannelName('ERROR_POST_DETAIL_FUND_AVAILABLE_SIMULATE')]: {
            bind: 'error-on-post-simulate'
          },
          [getChannelName('ERROR_ON_FUND_CONTRACT')]: {
            bind: 'error-on-fund-contract'
          }
        }
      }
    }
  },
  {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-global-document-templates-api-dm',
    render: 'litElement',
    properties: {
      host: host,
      native: !!CONFIG.native,
      version: businessDocument,
      requiredToken,
      cellsConnections: {
        in: {
          funds_hiring_request_template: {
            bind: 'getDocumentTemplates'
          }
        },
        out: {
          funds_hiring_success_response_template: {
            bind: 'document-templates-api-dm-fetch'
          },
          funds_hiring_error_response_pdf: {
            bind: 'document-templates-api-dm-fetch-error'
          }
        }
      }
    }
  },
  {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-public-app-settings',
    properties: {
      host: settingsHost,
      native: !!native,
      namespace,
      endpoint: fundList,
      cellsConnections: {
        in: {
          funds_hiring_init_page: {
            bind: 'getAppSettings'
          }
        },
        out: {
          global_set_app_settings_fundsHiring: {
            bind: 'app-settings-request-success'
          },
          global_set_app_settings_fundsHiring_error: {
            bind: 'app-settings-request-error'
          }
        }
      }
    }
  },
  {
    zone: 'app__main',
    tag: 'glomo-fund-hiring-manager-mx',
    familyPath: 'glomo-fund-hiring-manager',
    type: 'DM',
    properties: {
      host,
      accountsApiVersion: accounts,
      native,
      requiredToken,
      operativeName: 'funds-hiring',
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      businessStartTime: '08:30:00',
      businessFinalTime: '13:00:00',
      isNativeIos,
      minFundsAmounts: minFundsAmounts,
      termTypeTexts: termTypeTexts,
      multistrategyTerms: multistrategyTerms,
      payloadSelectedTypeFund: payloadSelectedTypeFund,
      isSpherica,
      useDocumentTemplate: true,
      cellsConnections: {
        in: {
          funds_hiring_SHOW_INPUT_AMOUNT_VIEW: {
            bind: 'closeConfirm'
          },
          funds_hiring_reset_page: {
            bind: 'closeConfirm'
          },
          global_funds_hiring_terms_andconditions_next_step: {
            bind: 'setConfirm'
          },
          global_funds_hiring_change_account: {
            bind: 'changeAccountSelected'
          },
          global_funds_hirig_set_amount_simulation: {
            bind: 'goToNextStepWithConfirmation'
          },
          global_feature_flag_collection_updated: {
            bind: 'setFeatureFlags'
          },
          global_set_app_settings_fundsHiring: {
            bind: 'dataFunds'
          },
          global_set_app_settings_fundsHiring_error: {
            bind: 'dataFunds'
          },
          [getChannelName('SCROLL_TEMPLATE')]: {
            bind: 'animationStiky'
          },
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
            bind: 'modalConfirmExit'
          },
          funds_hiring_init_page: {
            bind: 'init'
          },
          [getChannelName('open_modal_pdf_link')]: {
            bind: 'showModalInvGuide'
          },
          [getChannelName('open_modal_inv_guide_offer')]: {
            bind: 'showModalInvGuide'
          },
          [getChannelName('SET_CURRENT_STEP')]: {
            bind: 'changeStep'
          },
          [getChannelName('select_account_dont_change_and_continue')]: {
            bind: 'goToLastActiveStep'
          },
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          [getChannelName('request_simulation')]: {
            bind: 'setResponseSimulation'
          },
          [getChannelName('success_post_fund_simulate')]: {
            bind: 'setResponseSimulate'
          },
          [getChannelName('SET_ACCOUNTS_LIST')]: {
            bind: 'setAccounts'
          },
          [getChannelName('selected_account')]: {
            bind: 'setInvestmentService'
          },
          [getChannelName('selected_investment_service')]: {
            bind: 'setInvestmentServiceSelected'
          },
          [getChannelName('show_button_finish_steps')]: {
            bind: 'canExecute'
          },
          [getChannelName('REQUEST_CONTRACTING_FUND')]: {
            bind: 'contracFundRequest'
          },
          [getChannelName('SUCCESS_ON_FUND_CONTRACT')]: {
            bind: 'successHiring'
          },
          [getChannelName('ERROR_ON_FUND_CONTRACT')]: {
            bind: 'successHiring'
          },
          [getChannelName('SET_INVESTMENT_FUNDS_LIST')]: {
            bind: 'setResponseListFunds'
          },
          [getChannelName('ACEPT_MODAL_SERVIVCEINFO')]: {
            bind: 'getInvestmentFundList'
          },
          [getChannelName('CANCEL_MODAL_SERVICEINFO')]: {
            bind: 'cancelServiceSelected'
          },
          [getChannelName('SHOW_MODAL_FILTER_FOUND')]: {
            bind: 'filterFound'
          },
          [getChannelName('CALL_OWN_METHOD_TO_DISPATCH_ELEMENT')]: {
            bind: 'filterTypeFound'
          },
          [getChannelName('CONTACT_FILTER_FOUNDS')]: {
            bind: 'contactSelectedFound'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_DEBT')]: {
            bind: 'levelRiskFilter'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_DEBT_TAPPED')]: {
            bind: 'levelRiskFilterInverter'
          },
          [getChannelName('FUNDS_RESET_FILTER')]: {
            bind: 'filterFound'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_VARIABLE')]: {
            bind: 'levelRiskFilter'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_MULTI_TAPPED')]: {
            bind: 'filterFound'
          },
          [getChannelName('FUNDS_RESET_FILTER_VARIABLE')]: {
            bind: 'filterFound'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_MULTI')]: {
            bind: 'levelRiskFilter'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_ALL_PRODUCTS')]: {
            bind: 'levelRiskFilter'
          },
          [getChannelName('request_simulation_funds_list')]: {
            bind: 'requestSimulationFund'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'requestSimulationFund'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_VARIABLE_TAPPED')]: {
            bind: 'levelRiskFilterInverter'
          },
          [getChannelName('FUNDS_RESET_FILTER_CLOSE')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_RENT')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_DEBT')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_VARIABLE')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_MULTI')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_MULTI')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('CANCEL_MODAL_SERVIVHEADER')]: {
            bind: 'getInvestmentFundList'
          },
          [getChannelName('request_document')]: {
            bind: 'filterDocumentRequest'
          },
          [getChannelName('_ERROR_RESPONSE_PDF')]: {
            bind: 'getErrorResponsePdf'
          },
          [getChannelName('SHOW_SIMULATION_HELP_MODAL')]: {
            bind: 'modalSimulationHelp'
          },
          [getChannelName('fund_selected')]: {
            bind: 'fundSelected'
          },
          [getChannelName('enter_amount')]: {
            bind: 'enterAmountSimulation'
          },
          [getChannelName('set_address')]: {
            bind: 'showMainAddress'
          },
          [getChannelName('SUCCESS_CUSTOMER_ADDRESSES')]: {
            bind: 'setCustomerMainAddresses'
          },
          [getChannelName('SUCCESS_CUSTOMER_DETAIL')]: {
            bind: 'setCustomerMainEmail'
          },
          [getChannelName('TAB_SELECTED_MODAL_FUND_DETAIL')]: {
            bind: 'requestFundDetail'
          },
          [getChannelName('SUCCESS_FUND_DETAIL_REQUEST')]: {
            bind: 'setResponseFundDetail'
          },
          [getChannelName('CLICK_ON_PDF_DETAILS_MODAL')]: {
            bind: 'sendPdfLink'
          },
          [getChannelName('CHOOSE_FUND_FROM_DETAIL_MODAL')]: {
            bind: 'selectFundFromModalDetail'
          },
          [getChannelName('collapse_other_step_modal')]: {
            bind: 'modalAlert'
          },
          [getChannelName('DO_NOT_DISPLAY_MODAL')]: {
            bind: 'modalAlert'
          },
          [getChannelName('SUCCESS_ACCOUNT_PARTICIPANTS')]: {
            bind: 'participants'
          },
          [getChannelName('FUND_MODAL_TYPE_CLOSE')]: {
            bind: 'prevent-close'
          },
          [getChannelName('SELECTED_PRODUCT_RESTORE')]: {
            bind: 'selectedProductRestore'
          },
          [getChannelName('ERROR_ON_INVESTMENT_FUNDS_LIST')]: {
            bind: 'errorOnGetFundList'
          },
          FUNDSHIRING_ERROR_CONTRACT_MODAL_ACCEPT: {
            bind: 'redirectToDashboard'
          },
          FUNDSHIRING_ERROR_CONTRACT_MODAL_CANCEL: {
            bind: 'redirectToDashboard'
          },
          [getChannelName('SHOW_INPUT_AMOUNT_VIEW')]: {
            bind: 'showInputAmountView'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'scrollZoneModify'
          },
          [getChannelName('ERROR_LIST_FUNDS_AVAILABLE_REQUEST')]: {
            bind: 'errorGetListFunds'
          },
          [getChannelName('ERROR_POST_DETAIL_FUND_AVAILABLE_SIMULATE')]: {
            bind: 'errorGetDetailFunds'
          },
          [getChannelName('ERROR_DETAIL_FUND_AVAILABLE_REQUEST')]: {
            bind: 'errorGetDetailFunds'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'productSelectedFromModal'
          },
          [getChannelName('RESET_STEP_PROP')]: {
            bind: 'resetStepProp'
          },
          [getChannelName('_success_accounts_funds')]: {
            bind: 'globalAccounts'
          },
          dashboard_accounts: {
            bind: 'globalAccounts'
          },
          global_open_document_base64_error: {
            bind: 'getErrorResponsePdf'
          },
          global_open_document_url_error: {
            bind: 'getErrorResponsePdf'
          },
          funds_hiring_success_response_template: {
            bind: 'successResponseTemplate'
          }
        },
        out: {
          global_funds_hiring_go_to_next_step: {
            bind: 'go-to-next-step'
          },
          [getChannelName('FUND_HIRING_ACCOUNT_SERVICE')]: {
            bind: 'fund-hiring-account-service'
          },
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM_DETAIL')]: {
            bind: 'open-diy-info-modal'
          },
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('REQUEST_CUSTOMER_ADDRESSES')]: {
            bind: 'request-customer-addresses'
          },
          [getChannelName('REQUEST_CUSTOMER_DETAIL')]: {
            bind: 'request-customer-detail'
          },
          [getChannelName('min_value_simulator')]: {
            bind: 'set-min-value-accepted'
          },
          [getChannelName('max_value_simulator')]: {
            bind: 'set-max-value-accepted'
          },
          [getChannelName('set_information_simulation')]: {
            bind: 'set-simulation-created'
          },
          [getChannelName('create_buttons_simulator')]: {
            bind: 'manage-buttons-simulator'
          },
          global_retargeting_go_next_step: {
            bind: 'manage-buttons-simulator'
          },
          [getChannelName('set_account_email_information')]: {
            bind: 'set-statement-mail'
          },
          [getChannelName('view_all_accounts')]: {
            bind: 'set-accounts-list'
          },
          [getChannelName('set_investment_services')]: {
            bind: 'set-investment-service-list'
          },
          [getChannelName('set_pdfs_documents')]: {
            bind: 'set-checklist-contract-pdf-data'
          },
          [getChannelName('products_parsed_funds')]: {
            bind: 'products-parsed-funds'
          },
          [getChannelName('SET_INFO_SUMMARY')]: {
            bind: 'send-step-amount-sticky-value'
          },
          [getChannelName('LAST_ICON_MESSAGE')]: {
            bind: 'show-last-icon-message-event'
          },
          [getChannelName('SHOW_LAST_ICON_MESSAGE_OUT_OF_TIME')]: {
            bind: 'show-last-icon-message-out-of-time-event'
          },
          [getChannelName('INVESTMENT_SERVICE_SELECTED')]: {
            bind: 'set-investment-service-selected'
          },
          [getChannelName('GET_INVESTMENT_FUNDS_LIST')]: {
            bind: 'get-investment-funds-list'
          },
          [getChannelName('GO_TO_STEP_SERVICE_SELECTED')]: {
            bind: 'return-step-service'
          },
          [getChannelName('INVESTMENT_SERVICE_CONFIRM')]: {
            bind: 'confirm-investment-service-selected'
          },
          [getChannelName('SHOW_FUNDS_TYPE')]: {
            bind: 'fund-type-filter'
          },
          [getChannelName('INVESTMENT_FILTER_FOUNDS')]: {
            bind: 'filterAllFunds'
          },
          [getChannelName('FUNDS_ALL_SELECTED_FILTER')]: {
            bind: 'filter-funds-short-term'
          },
          [getChannelName('FUNDS_ALL_SELECTED_VARIABLE')]: {
            bind: 'filter-funds-selected-variable'
          },
          [getChannelName('FUNDS_ALL_SELECTED_MULTI')]: {
            bind: 'filter-funds-selected-multi'
          },
          [getChannelName('FUNDS_ORDER_RISK')]: {
            bind: 'filter-funds-order-debt'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER')]: {
            bind: 'filter-funds-order-ok-debt'
          },
          [getChannelName('FUNDS_ORDER_RISK_VARIABLE')]: {
            bind: 'filter-funds-order-rent'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_VARIABLE')]: {
            bind: 'filter-funds-order-ok-rent'
          },
          [getChannelName('FUNDS_ORDER_RISK_MULTI')]: {
            bind: 'filter-funds-order-multi'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_MULTI')]: {
            bind: 'filter-funds-order-ok-multi'
          },
          [getChannelName('FUNDS_ORDER_RISK_ALL_PRODUCTS')]: {
            bind: 'filter-funds-order-all'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_ALL_PRODUCTS_OK')]: {
            bind: 'filter-funds-order-ok-all'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_ALL_PRODUCTS')]: {
            bind: 'show-all-products'
          },
          [getChannelName('POST_FUND_SIMULATE')]: {
            bind: 'request-post-fund-simulate'
          },
          [getChannelName('HIDE_SPINNER_FUND_SIMULATE')]: {
            bind: 'close-spinner-simulation'
          },
          [getChannelName('HIDE_SPINNER_FUND_CONTRACT')]: {
            bind: 'hide-spinner-fund-contracted'
          },
          [getChannelName('open_modal_fund_detail')]: {
            bind: 'open-modal-performance-and-details'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_REVERSE')]: {
            bind: 'filter-funds-order-ok-reverse'
          },
          [getChannelName('FUNDS_ORDER_RISK_REVERSE')]: {
            bind: 'filter-funds-order-reverse'
          },
          [getChannelName('CLOSE_MODAL_FUNDS')]: {
            bind: 'close-modal-funds-option'
          },
          [getChannelName('DISABLE_EVENT_SELECTED')]: {
            bind: 'fund-disabale-event'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER')]: {
            bind: 'disable-event-modal-debt'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_RENT')]: {
            bind: 'disable-event-modal-rent'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_MULTI')]: {
            bind: 'disable-event-modal-multi'
          },
          FUNDSHIRING_DOC_CONTENT: {
            bind: 'base-src-changed'
          },
          FUNDSHIRING_DOC_TITLE: {
            bind: 'title-pdf-text'
          },
          FUNDSHIRING_OPEN_PDF_MODAL: {
            bind: 'show-document-event'
          },
          [getChannelName('REQUEST_FUND_DETAIL_MODAL')]: {
            bind: 'request-fund-detail'
          },
          [getChannelName('SET_DATA_DETAILS_SECTION_MODAL')]: {
            bind: 'data-to-detail-section-modal'
          },
          [getChannelName('SET_MESSAGE_SERIE_GB')]: {
            bind: 'data-detail-fund-serie'
          },
          [getChannelName('OPEN_SIMULATION_HELP_MODAL')]: {
            bind: 'open-simulation-help-modal'
          },
          [getChannelName('SEND_DATA_FUND_MODAL_DETAIL')]: {
            bind: 'data-fund-modal-detail'
          },
          [getChannelName('SET_IGNORE_DISPATCH')]: {
            bind: 'change-ignore-dispatch'
          },
          funds_pdf_download: {
            bind: 'funds-pdf',
            'forward-to-native': true
          },
          FUNDSHIRING_GENERIC_MODAL_OPEN: {
            bind: 'error-modal-generic'
          },
          FUNDSHIRING_ERROR_CONTRACT_MODAL_OPEN: {
            bind: 'open-diy-info-modal'
          },
          navigation_investment_funds_to_dashboard: {
            bind: 'redirect-to-dashboard',
            'forward-to-native': true
          },
          [getChannelName('CONTENT_ID_STEP')]: {
            bind: 'content-id'
          },
          [getChannelName('RESET_STEP_ID')]: {
            bind: 'reset-step-id'
          },
          [getChannelName('LIST_CHECKBOX_TERMS')]: {
            bind: 'list-checkbox-terms-and-conditions'
          },
          [getChannelName('POST_NOTIFICATIONS')]: {
            bind: 'post-notifications'
          },
          [getChannelName('HEADERS_NOTIFICATIONS')]: {
            bind: 'set-headers'
          },
          [getChannelName('REQUEST_FUND_CONTRACT_SERVICE')]: {
            bind: 'request-contract-fund'
          },
          FUNDS_HIRING_SET_HEADER_COLOR: {
            bind: 'set-color-header-success'
          },
          FUNDS_HIRING_SET_HEADER_COLOR_IOS: {
            bind: 'set-color-header-success-ios'
          },
          NAVIGATE_TO_REVIEW_FUNDS_HIRING: {
            bind: 'review-hiring-data',
            link: {
              page: 'fundsHiringReview',
              skipHistory: true
            }
          },
          NAVIGATE_TO_REVIEW_FUNDS_HIRING_RESULT: {
            bind: 'review-hiring-data-result'
          },
          global_retargeting_contracted_product_offer: {
            bind: 'review-hiring-data-result'
          },
          global_retargeting_contracted_product: {
            bind: 'review-hiring-data'
          },
          [getChannelName('reset_entire_flow_after_success')]: {
            bind: 'review-hiring-data'
          },
          [getChannelName('SET_ACCOUNT_ID')]: {
            bind: 'set-account-id'
          },
          [getChannelName('REQUEST_ACCOUNT_PARTICIPANTS')]: {
            bind: 'request-account-participants'
          },
          [getChannelName('set_questionnaire_text')]: {
            bind: 'set-questionnaire-text'
          },
          [getChannelName('disabled_next_button_offer')]: {
            bind: 'disabled-next-button-offer'
          },
          [getChannelName('error_modal_account_filter')]: {
            bind: 'open-diy-info-modal'
          },
          [getChannelName('COLLAPSED_SIMULATOR')]: {
            bind: 'set-amount-collapsed-simulator'
          },
          [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME')]: {
            bind: 'set-amount-collapsed-simulator-out-of-time'
          },
          [getChannelName('next_step')]: {
            bind: 'set-amount-collapsed-simulator-out-of-time'
          },
          [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_MESSAGE')]: {
            bind: 'set-amount-collapsed-simulator-out-of-time-message'
          },
          [getChannelName('CONFIRM_ANIMATION')]: {
            bind: 'open-stiky-animation'
          },
          [getChannelName('NEXT_STEP_PRODUCT_SELECTOR')]: {
            bind: 'selected-product-next'
          },
          [getChannelName('NEXT_STEP_EVENT_RESTORE')]: {
            bind: 'event-retore'
          },
          [getChannelName('analytics_set_in_time_step')]: {
            bind: 'in-time-changed'
          },
          [getChannelName('GO_TO_LAST_ACTIVE_STEP')]: {
            bind: 'go-to-last-active-step'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'go-to-summary-view'
          },
          [getChannelName('update_account_description')]: {
            bind: 'update-account-step-description'
          },
          [getChannelName('cells_scroll_zone_modify')]: {
            bind: 'cells-scroll-zone-modify'
          },
          [getChannelName('FUNDS_RESET_COLLAPSED')]: {
            bind: 'open-fund-selector-step'
          },
          [`global_${getChannelName('TOGGLE_SPINNER')}`]: {
            bind: 'spinner-toggle-event'
          },
          [getChannelName('SET_INVESTMENT_HEADER')]: {
            bind: 'set-investment-header'
          },
          [getChannelName('SET_SIMULATION_DESCRIPTION')]: {
            bind: 'set-simulation-description'
          },
          [getChannelName('SET_MAIL_HEADER')]: {
            bind: 'set-mail-header'
          },
          [getChannelName('SET_CHECKLIST_HEADER')]: {
            bind: 'set-checklist-header'
          },
          [getChannelName('SET_FUND_STEP_DESCRIPTION')]: {
            bind: 'set-fund-step-description'
          },
          [getChannelName('SET_BUSSINESS_TEXT')]: {
            bind: 'set-fund-hiring-bussiness-text'
          },
          global_open_document_base64: {
            bind: 'show-funds-pdf'
          },
          global_open_document_url: {
            bind: 'pdf-get-url'
          },
          global_retargeting_form_submission: {
            bind: 'spinner-toggle-event'
          },
          global_retargeting_investment_service: {
            bind: 'set-investment-service-selected'
          },
          global_retargeting_invest_amount: {
            bind: 'send-step-amount-sticky-value'
          },
          glomo_navigation_to_opportunities: {
            bind: 'navigate-to-opportunities',
            link: {
              page: 'contractProductSection',
              skipHistory: true
            }
          },
          glomo_funds_hiring_reset_step_select_account: {
            bind: 'reset-step-select-account'
          },
          glomo_funds_hiring_set_confirm: {
            bind: 'set-show-confirm'
          },
          funds_hiring_request_template: {
            bind: 'request-pdf-template'
          }
        },
        params: {
          globalUser: 'global_user'
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            'funds_hiring_set_bussiness_messages': {
              bind: 'set-fund-hiring-bussiness-messages'
            }
          }
        }
      }
    }
  }, {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-notifications-subscriptions',
    properties: {
      host,
      requiredToken,
      native,
      params: 'send',
      cellsConnections: {
        in: {
          [getChannelName('POST_NOTIFICATIONS')]: {
            bind: 'postNotificationSend'
          }
        }
      }
    }
  }];
  const fundsHiringFilter = {
    zone: 'app__main',
    tag: 'cells-change-contact-details-modal',
    tagSpherica: 'cells-change-contact-details-modal-spherica',
    type: 'UI',
    properties: {
      operativeName: 'funds-hiring',
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      classChange: 'funds-investment',
      modalTitle: 'funds-hiring-modal-title',
      continueButtonLabel: 'funds-hiring-filter-label',
      closeButtonLabel: 'funds-hiring-modal-close-button',
      classDescription: 'description-filter-funds',
      iOSFixedHeader: isNativeIos,
      contactDetailRadioGroup: 'radio-group-filter-funds  lb-title ',
      radioGroupSelectorContact: 'radio-group-selector-filter-funds',
      titleDescription: { title: 'funds-hiring-filter-modal-title', class: 'title-filter-funds' },
      description: 'funds-hiring-filter-modal-description',
      radioButtonList: [
        { contact: 'Corto plazo (menos de 1 año)' },
        { contact: 'Mediano plazo (1 a 3 años)' },
        { contact: 'Largo plazo (más de 3 años)' }
      ],
      selected: '0',
      cellsConnections: {
        in: {
          [getChannelName('INVESTMENT_FILTER_FOUNDS')]: {
            bind: 'open'
          }
        },
        out: {
          [getChannelName('CONTACT_FILTER_FOUNDS')]: {
            bind: 'contact-selected'
          },
          [getChannelName('CONTACT_MODAL_CLOSE')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      modalTitle: 'funds-hiring-modal-title-spherica'
    }
  };

  const fundDetailModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'glomo-modal-fund-detail',
    tagSpherica: 'glomo-modal-fund-detail-spherica',
    properties: {
      id: `modal-${getLocaleName('fund-detail')}`,
      language: getLanguage(),
      detailFound: true,
      secctionDetailPeru: true,
      disableDivider: true,
      commissionsPdf: true,
      isAssociatedRisk: true,
      hidePeriod: true,
      hidePeriodChart: true,
      performanceDivider: true,
      hideStatistics: true,
      iOSFixedHeader: isNativeIos,
      modalTitle: 'cells-funds-hiring-modal-fund-detail-title',
      showSecondaryButton: true,
      continueButtonLabel: 'funds-hiring-detail-modal-continue-button-label',
      cancelButtonLabel: 'funds-hiring-detail-modal-cancel-button-label',
      localCurrency: getLocalCurrency(),
      tabTitles: [
        'funds-hiring-detail-modal-performance-tab-label',
        'funds-hiring-detail-modal-detail-tab-label'],
      className: isNativeIos ? 'ios-top-padding__header' : '',
      cellsConnections: {
        in: {
          [getChannelName('open_fund_modal')]: {
            bind: 'open'
          },
          [getChannelName('open_modal_fund_detail')]: {
            bind: 'open'
          },
          [getChannelName('close_fund_modal')]: {
            bind: 'close'
          },
          [getChannelName('params_fund_modal')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_DATA_DETAILS_SECTION_MODAL')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_MESSAGE_SERIE_GB')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('close_fund_modal')]: {
            bind: 'click-right-button'
          },
          [getChannelName('TAB_SELECTED_MODAL_FUND_DETAIL')]: {
            bind: 'glomo-modal-fund-details-tab-selected'
          },
          [getChannelName('CLICK_ON_PDF_DETAILS_MODAL')]: {
            bind: 'cells-list-file-item-clicked'
          },
          [getChannelName('CHOOSE_FUND_FROM_DETAIL_MODAL')]: {
            bind: 'on-close-fund-modal'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'on-close-fund-modal'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'funds-hiring'
    }
  };

  const alertManager = isSpherica ? glomoAlertManagerSpherica : glomoAlertManager;
  const modalManager = alertManager(CONFIG, 'es-MX');
  modalManager.className = 'generic-error-investment-funds';
  modalManager.properties.cellsConnections.in = {
    ...{
      [getChannelName('OPEN_MODAL_EXIT_CONFIRM_DETAIL')]: {
        bind: 'openWithSettings'
      },
      [getChannelName('OPEN_MODAL_ERROR_SIMULATION_DETAIL')]: {
        bind: 'openWithSettings'
      },
      [getChannelName('OPEN_MODAL_ERROR_GENERIC_DETAIL')]: {
        bind: 'openWithSettings'
      },
      [getChannelName('CANCEL_MODAL_SERVIVCEINFO')]: {
        bind: 'close'
      },
      [getChannelName('INVESTMENT_SERVICE_CONFIRM')]: {
        bind: 'openWithSettings'
      },
      [getChannelName('OPEN_SIMULATION_HELP_MODAL')]: {
        bind: 'openWithSettings'
      },
      [getChannelName('error_modal_account_filter')]: {
        bind: 'openWithSettings'
      },
      FUNDSHIRING_ERROR_CONTRACT_MODAL_OPEN: {
        bind: 'openWithSettings'
      }
    }
  };
  modalManager.properties.cellsConnections.out = {
    ...{
      [getChannelName('CANCEL_MODAL_EXIT_CONFIRM')]: {
        bind: 'alert-LEAVE-OPERATIVE-cancel'
      },
      [getChannelName('exit_funds_hiring_flow')]: {
        bind: 'alert-LEAVE-OPERATIVE-accept',
        backStep: true
      },
      global_retargeting_send_update: {
        bind: 'alert-LEAVE-OPERATIVE-accept'
      },
      [getChannelName('CANCEL_MODAL_SERVICEINFO')]: {
        bind: 'alert-SERVIVCEINFO-cancel'
      },
      [getChannelName('CANCEL_MODAL_SERVIVHEADER')]: {
        bind: 'alert-SERVIVCEINFO-HEADER'
      },
      [getChannelName('ACEPT_MODAL_SERVIVCEINFO')]: {
        bind: 'alert-SERVIVCEINFO-accept'
      },
      [getChannelName('CANCEL_MODAL_SERVIVCEINFO')]: {
        bind: 'cancel'
      },
      [getChannelName('EXIT_NOT_AVAILABLE_FUNDS')]: {
        bind: 'alert-NOTAVAILABLE-FUNDS-accept',
        backStep: true
      },
      global_retargeting_information_update: {
        bind: 'alert-NOTAVAILABLE-FUNDS-accept'
      },
      [getChannelName('CANCEL_NOT_AVAILABLE_FUNDS')]: {
        bind: 'alert-NOTAVAILABLE-FUNDS-cancel',
        backStep: true
      },
      global_retargeting_send_information_update: {
        bind: 'alert-NOTAVAILABLE-FUNDS-cancel'
      },
      remove_header_class: {
        bind: 'alert-LEAVE-OPERATIVE-accept'
      },
      FUNDSHIRING_ERROR_CONTRACT_MODAL_ACCEPT: {
        bind: 'alert-GENERIC-ERROR-accept'
      },
      FUNDSHIRING_ERROR_CONTRACT_MODAL_CANCEL: {
        bind: 'alert-GENERIC-ERROR-cancel'
      },
      FUNDSHIRING_MODAL_CHANGE_SERVICE_ACCEPTED: {
        bind: 'alert-ERRORMODAL-accept'
      }
    }
  };
  const offerStep = {
    zone: 'app__main',
    tag: 'cells-safe-card-offer-page',
    tagSpherica: 'cells-safe-card-offer-page-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('offer')}`,
      currentStep: 1,
      active: true,
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      className: 'funds-hiring',
      stepTitle: 'cells-safe-card-offer-page-title',
      changeTitle: 'funds-hiring-product-step-common-operatives-change',
      headerImageSrc: './images/fundsHiring/Funds.svg',
      productSummaryText: 'funds-hiring-offer-page-found-hiring',
      featuresHeader: 'funds-hiring-offer-page-features-header',
      benefitsHeader: 'funds-hiring-offer-page-benefits-text-spherica',
      benefits: [
        'funds-hiring-offer-page-spherica-benefit-1',
        'funds-hiring-offer-page-spherica-benefit-2',
        'funds-hiring-offer-page-spherica-benefit-3',
        'funds-hiring-offer-page-spherica-benefit-4'
      ],
      sphericaText: 'primary-color',
      sphericaList: 'list-color',
      detailText: false,
      typeMessage: 'warning',
      infoMessage: 'funds-hiring-offer-page-info-message-warning',
      nextButtonClass: 'tertiary',
      nextButtonText: 'cells-funds-withdrawal-insurance-next-button-text-invest',
      legalNoticeLink: '',
      linkButton: 'funds-hiring-offer-page-legal-notice-link',
      titleOfferAmountCollapse: 'cells-funds-contribution-success-fund-title',
      linkButtonIcon: 'coronita:pdf',
      stickySectionButton: 'cells-safe-card-offer-page-customize-sticky-button-text',
      cellsConnections: {
        in: {
          funds_hiring_init_page: {
            bind: 'initialize'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('set_contract_offer')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_questionnaire_text')]: {
            bind: 'questionnaireText'
          },
          [getChannelName('disabled_next_button_offer')]: {
            bind: 'disabledNextButton'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'collapsed'
          },
          [getChannelName('SET_BUSSINESS_TEXT')]: {
            bind: 'infoMessage'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'stickySectionButton'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('next_step')]: {
            bind: 'next-pressed'
          },
          [getChannelName('active-exit-alert')]: {
            bind: 'next-pressed'
          },
          [getChannelName('open_modal_pdf_link')]: {
            bind: 'open-pdf-main-link'
          },
          [getChannelName('open_modal_inv_guide_offer')]: {
            bind: 'open-modal-legal-notice'
          },
          [getChannelName('set_max_products_select_fund')]: {
            bind: 'next-pressed'
          },
          [getChannelName('remove_header_class')]: {
            bind: 'change-pressed'
          },
          [getChannelName('offer_analytics_page_visit_change')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analytics_view_offer_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('SET_CURRENT_STEP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'next-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'change-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'next-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'coronita:caution',
      marginList: 'custom',
      image: './images/spherica/fundsHiring/Funds.svg',
      headerImageSrc: '',
      className: 'funds-hiring card-blue',
      stepTitle: 'cells-safe-card-offer-page-title',
      productSummaryText: '',
      headerCardInfo: { 'title': 'funds-hiring-header-card-info-title-spherica' },
      nextButtonText: 'cells-funds-withdrawal-offerpage-button-spherica',
      nextButtonClass: 'positive full',
      benefitsHeader: 'funds-hiring-offer-page-benefits-text-spherica',
      questionnaireButtonText: 'funds-hiring-offer-page-benefits-text-button-spherica',
      infoMessage: '',
      newCellsConnections: {
        add: {
          in: {
            'funds_hiring_set_bussiness_messages': {
              bind: 'infoMessages'
            }
          }
        },
        remove: {
          in: [
            'funds_hiring__call_me_back_sticky_button'
          ]
        }
      }
    }
  };
  const stepAccountSelector = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('account-selector')}`,
      errorMessage: getLocaleName('error-benefits-message'),
      localCurrency: getLocalCurrency(),
      visibleChars: 5,
      currentStep: 2,
      displayedCurrentStep: '1',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: '6',
      maxSteps: MAX_STEPS,
      notInitializeWithAttached: true,
      disabledUpdateTitleOnChangeProduct: true,
      stepTitle: getLocaleName('origin-account'),
      changeLabel: getLocaleName('cells-step-common-operatives-change'),
      productsListLabel: getLocaleName('list-products'),
      className: 'selected-product selector-hiring deposit-hiring',
      changeOriginText: 'cells-step-product-selector-change-selection-button-label',
      header: getLocaleName('account-selector-header'),
      notSavedState: true,
      forceEnableEdit: true,
      cellsConnections: {
        in: {
          funds_hiring_init_page: {
            bind: 'initialize'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('view_all_accounts')]: {
            bind: 'products'
          },
          [getChannelName('update_origin_accounts')]: {
            bind: 'products'
          },
          [getChannelName('max_accounts')]: {
            bind: 'maxProducts'
          },
          [getChannelName('selected_product_from_modal')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('update_account_description')]: {
            bind: 'setProperties'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'collapsed'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'stickySectionButton'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('selected_account')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('select_account_dont_change_and_continue')]: {
            bind: 'dont-change-and-continue'
          },
          funds_hiring_collapse_other_step: {
            bind: 'change-step-state'
          },
          global_funds_hiring_change_account: {
            bind: 'change-pressed'
          },
          [getChannelName('collapse_other_step_modal')]: {
            bind: 'origin-changed'
          },
          [getChannelName('show_all_user_acounts')]: {
            bind: 'view-all'
          },
          [getChannelName('analytics_focus_in')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('SET_ACCOUNTS_LIST')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('set_secondary_class')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analytics_view_account_step')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('SET_CURRENT_STEP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'dont-change-and-continue'
          },
          global_retargeting_go_next_step: {
            bind: 'dont-change-and-continue'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'change-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      textBeforeCurrentStep: '',
      changeLabel: getLocaleName('cells-step-common-operatives-change-spherica'),
      stepTitle: getLocaleName('origin-account-spherica'),
      className: 'funds-hiring title-size-medium-l'
    }
  };

  const investmentService = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('investment')}`,
      currentStep: 3,
      displayedCurrentStep: '2',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: '6',
      maxSteps: MAX_STEPS,
      notInitializeWithAttached: true,
      disabledUpdateTitleOnChangeProduct: true,
      stepTitle: getLocaleName('investment-service'),
      changeLabel: 'funds-hiring-cells-step-common-operatives-change',
      className: 'funds-investment funds-step',
      divideHeader: false,
      header: getLocaleName('investment-service-header'),
      notSavedState: true,
      cellsConnections: {
        in: {
          funds_hiring_init_page: {
            bind: 'initialize'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('set_investment_services')]: {
            bind: 'products'
          },
          [getChannelName('INVESTMENT_SERVICE_SELECTED')]: {
            bind: 'selected'
          },
          [getChannelName('SET_INVESTMENT_HEADER')]: {
            bind: 'header'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'collapsed'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'stickySectionButton'
          }
        },
        out: {
          funds_hiring_SHOW_INPUT_AMOUNT_VIEW: {
            bind: 'change-pressed'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('collapse_other_step_modal')]: {
            bind: 'change-pressed'
          },
          [getChannelName('selected_investment_service')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('analytics_view_investment_type_step')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('SET_CURRENT_STEP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'change-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'dont-change-and-continue'
          },
          global_retargeting_go_next_step: {
            bind: 'dont-change-and-continue'
          }
        }
      }
    },
    propertiesSpherica: {
      textBeforeCurrentStep: '',
      className: 'funds-hiring title-size-medium-l',
      changeLabel: 'funds-hiring-cells-step-common-operatives-change-spherica'
    }
  };

  const selectStep = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('fund-selection')}`,
      additionalInformationSeparator: '',
      stepTitle: 'funds-hiring-select-fund',
      changeLabel: 'funds-hiring-cells-step-common-operatives-change',
      currentStep: 4,
      displayedCurrentStep: '3',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: '6',
      maxSteps: MAX_STEPS,
      errorMessage: 'funds-hiring-beduca-minimum-amount-available-message',
      description: 'funds-hiring-account-selector-header',
      lowerMessage: getLocaleName('product-step-funds-lower-message'),
      typeLowerMessage: 'warning',
      productsListLabel: getLocaleName('product-step-funds-selector-list-title'),
      className: 'funds-investment investment-fund-list funds-step deposit-hiring',
      changeOriginText: 'cells-step-product-selector-change-selection-button-label',
      notInitializeWithAttached: false,
      disabledUpdateTitleOnChangeProduct: true,
      hideItemAdditional: true,
      notSavedState: true,
      divideHeader: true,
      shouldHideChangeButton: true,
      positionMessageAdditionalLink: 'preLink',
      viewAllLabel: 'funds-hiring-see-more-btn-label',
      currencySelectedTitle: 'cells-step-product-selector-currency-selector',
      cellsConnections: {
        in: {
          funds_hiring_init_page: {
            bind: 'initialize'
          },
          [getChannelName('products_parsed_funds')]: {
            bind: 'products'
          },
          [getChannelName('cancel_fatca_modal')]: {
            bind: 'reset'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('CONTACT_MODAL_CLOSE')]: {
            bind: 'reset'
          },
          [getChannelName('CONTACT_MODAL_CLOSE')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('DISABLE_EVENT_SELECTED')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('FUNDS_RESET_FILTER_CLOSE')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_RENT')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_MULTI')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_RENT')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_MULTI')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('SEND_DATA_FUND_MODAL_DETAIL')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('MODAL_CHANGE_SERVICE_RESET')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('SET_IGNORE_DISPATCH')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('NEXT_STEP_PRODUCT_SELECTOR')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('NEXT_STEP_EVENT_RESTORE')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('FUNDS_RESET_COLLAPSED')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('SET_FUND_STEP_DESCRIPTION')]: {
            bind: 'description'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'collapsed'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'stickySectionButton'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step_modal')]: {
            bind: 'change-pressed'
          },
          [getChannelName('CALL_OWN_METHOD_TO_DISPATCH_ELEMENT')]: {
            bind: 'on-change-product-selected-change'
          },
          [getChannelName('request_simulation_funds_list')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('fund_selected')]: {
            bind: 'on-change-product-selected'
          },
          global_retargeting_invest_fund: {
            bind: 'on-change-product-selected'
          },
          global_close_filter_funds: {
            bind: 'on-change-product-selected-change'
          },
          [getChannelName('set_secondary_class')]: {
            bind: 'change-pressed'
          },
          [getChannelName('SHOW_MODAL_FILTER_FOUND')]: {
            bind: 'view-all'
          },
          [getChannelName('next_step')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('SET_CURRENT_STEP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'change-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'dont-change-and-continue'
          },
          global_retargeting_go_next_step: {
            bind: 'dont-change-and-continue'
          }
        }
      }
    },
    propertiesSpherica: {
      textBeforeCurrentStep: '',
      stepTitle: 'funds-hiring-select-fund-spherica',
      className: 'title-size-medium-l product-item-no-gap',
      changeLabel: 'funds-hiring-cells-step-common-operatives-change-spherica',
      iconLowerMessage: 'coronita:caution',
      divideHeader: false
    }
  };

  const investmentSimulationStep = {
    zone: 'app__main',
    tag: 'cells-step-simulation-operation',
    tagSpherica: 'cells-step-simulation-operation-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('simulation-operation')}`,
      className: '',
      showIconInInputRangeMessage: true,
      currentStep: 5,
      localCurrency: getLocalCurrency(),
      currency: getLocalCurrency(),
      language: getLanguage(),
      displayedCurrentStep: '4',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: MAX_STEPS,
      maxStepsCustom: MAX_STEPS,
      amountRangeMessage: 'funds-hiring-invest-from',
      notEnoughBalanceAfterKey: 'funds-hiring-simulation-operation-maximum-range',
      amountButtonText: 'cells-funds-withdrawal-calculate-button-text',
      stepTitle: 'cells-funds-hiring-investment-amount-title',
      stepDescription: 'cells-funds-hiring-amount-step-description',
      messageText: 'cells-funds-withdrawal-notification-message-purchase',
      showSimulator: false,
      showInfoMessage: false,
      infoType: 'info',
      type: 'tel',
      rageMessageBeforeNumber: 'funds-hiring-simulation-operation-minimum-range',
      rageMessageAfterNumber: 'funds-hiring-simulation-operation-maximum-range',
      amountErrorMinLimitMessage: 'funds-hiring-simulation-operation-error-minimum-amount',
      amountErrorMaxLimitMessage: 'funds-hiring-simulation-operation-error-insufficient-balance',
      filledAmountLabel: 'cells-funds-withdrawal-summary-view-amount-operation',
      infoMessageSimulationValue: 'funds-hiring-simulation-operation-investment-message',
      complexAmountErrorMaxLimitMessage: true,
      hiddenMinLimit: false,
      showTopAmountMessage: false,
      showGraph: false,
      keepOpened: true,
      range: true,
      keepAmount: true,
      keepValues: [
        'showInfoMessage'
      ],
      multipleRange: 0,
      changeLabel: 'cells-funds-withdrawal-edit-label-step',
      showIconSimulationHelp: true,
      cellsConnections: {
        in: {
          funds_hiring_init_page: {
            bind: 'initialize'
          },
          [getChannelName('set_information_simulation')]: {
            bind: 'simulationInfo'
          },
          [getChannelName('create_buttons_simulator')]: {
            bind: 'simulationConfirmButtons'
          },
          [getChannelName('min_value_simulator')]: {
            bind: 'minValue'
          },
          [getChannelName('max_value_simulator')]: {
            bind: 'maxValue'
          },
          [getChannelName('COLLAPSED_SIMULATOR')]: {
            bind: 'setProperties'
          },
          [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME')]: {
            bind: 'isNotEnoughAmount'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_MESSAGE')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_SIMULATION_DESCRIPTION')]: {
            bind: 'stepDescription'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'collapsed'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'stickySectionButton'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step_modal')]: {
            bind: 'change-pressed'
          },
          [getChannelName('SHOW_INPUT_AMOUNT_VIEW')]: {
            bind: 'change-pressed'
          },
          [getChannelName('enter_amount')]: {
            bind: 'send-step-amount-value'
          },
          [getChannelName('SHOW_SIMULATION_HELP_MODAL')]: {
            bind: 'icon-simulation-hepl-pressed'
          },
          [getChannelName('analytics_view_investment_amount_step')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'amount-input-focus'
          },
          [getChannelName('status_bar_on_amount_blur')]: {
            bind: 'amount-input-focus-out'
          },
          [getChannelName('SET_CURRENT_STEP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'cells-step-focus-in'
          },
          global_retargeting_go_next_step: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'cells-step-focus-in'
          },
          global_funds_hirig_set_amount_simulation: {
            bind: 'cells-confirm-buttons-click-primary'
          }
        }
      }
    },
    propertiesSpherica: {
      textBeforeCurrentStep: '',
      className: 'funds-hiring',
      changeLabel: 'funds-hiring-cells-step-common-operatives-change-spherica',
      stepTitle: 'cells-funds-hiring-investment-amount-title-spherica',
      stepDescription: 'cells-funds-hiring-amount-step-description-spherica',
      stepDescriptionExtended: 'cells-funds-hiring-amount-step-description-spherica-extended',
      filledAmountLabel: 'cells-funds-hiring-simulation-operation-amount-fill-spherica',
      amountInputLabel: 'cells-funds-withdrawal-summary-view-amount-operation-spherica',
      messageText: 'funds-hiring-simulation-operation-info-message-success-spherica',
      showTextRightIcon: true
    }
  };

  const stepAccountMail = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('mail-selector')}`,
      errorMessage: getLocaleName('error-message'),
      localCurrency: getLocalCurrency(),
      visibleChars: 13,
      currentStep: 6,
      displayedCurrentStep: '5',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: '6',
      maxSteps: MAX_STEPS,
      customSelected: {
        filledAlignment: {
          right: true,
          top: false
        }
      },
      forceEnableEdit: true,
      stepTitle: 'funds-hiring-send-account-title',
      header: 'funds-hiring-send-accound-description',
      changeLabel: 'funds-hiring-product-step-common-operatives-change',
      className: 'funds-investment funds-step productSelector',
      notInitializeWithAttached: true,
      disabledUpdateTitleOnChangeProduct: true,
      notSavedState: true,
      cellsConnections: {
        in: {
          funds_hiring_init_page: {
            bind: 'initialize'
          },
          [getChannelName('set_account_email_information')]: {
            bind: 'products'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('SET_MAIL_HEADER')]: {
            bind: 'header'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'collapsed'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'stickySectionButton'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('selected_mailt')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analytics_view_mail_step')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('set_address')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('SET_CURRENT_STEP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'cells-step-focus-in'
          },
          global_retargeting_go_next_step: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      textBeforeCurrentStep: '',
      className: 'funds-hiring',
      maxSteps: MAX_STEPS,
      oneProductTitleClass: 'disabled',
      nameNoMargin: true,
      noItalic: true
    }
  };

  const termsAndConditionsStep = {
    zone: 'app__main',
    tag: 'cells-step-card-checklist-contract',
    tagSpherica: 'cells-step-card-checklist-contract-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('checklist-contract')}`,
      stepTitle: 'funds-hiring-checklist-contract-title',
      changeLabel: 'cells-step-card-offer-page-link-collapsed',
      currentStep: 7,
      displayedCurrentStep: '6',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: MAX_STEPS,
      maxSteps: MAX_STEPS,
      lastStep: true,
      consultText: 'funds-hiring-checklist-contract-description',
      notInitializeWithAttached: false,
      hideChangeDataBox: true,
      showCurrentStepLabel: true,
      className: 'deposit-hiring',
      typeIconMessage: 'info-dark-blue',
      stickySectionButton: 'cells-step-card-checklist-contract-offer-page-title',
      cellsConnections: {
        in: {
          funds_hiring_init_page: {
            bind: 'initialize'
          },
          [getChannelName('set_pdfs_documents')]: {
            bind: 'pdfData'
          },
          [getChannelName('LIST_CHECKBOX_TERMS')]: {
            bind: 'checkboxList'
          },
          [getChannelName('multiple_email')]: {
            bind: 'hasMultipleData'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('SET_CHECKLIST_HEADER')]: {
            bind: 'consultText'
          },
          [getChannelName('GO_TO_SUMMARY_VIEW')]: {
            bind: 'collapsed'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'stickySectionButton'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          global_funds_hiring_terms_andconditions_next_step: {
            bind: 'continue-pressed'
          },
          [getChannelName('request_document')]: {
            bind: 'request-pdf'
          },
          [getChannelName('profitability_details_clicked_from_checklist_step')]: {
            bind: 'request-document'
          },
          [getChannelName('change_preferential_email')]: {
            bind: 'change-data-pressed'
          },
          [getChannelName('analytics_view_last_step')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('RESET_STEP_PROP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('set_secondary_class')]: {
            bind: 'change-pressed'
          },
          [getChannelName('SET_CURRENT_STEP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'cells-step-focus-in'
          },
          global_retargeting_go_next_step: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      textBeforeCurrentStep: '',
      variant: 'primary-alt',
      variantListFile: 'primary-alt',
      className: 'funds-hiring page-end-margin',
      isButtonPrimary: true,
      changeLabel: 'funds-hiring-product-step-common-operatives-change'
    }
  };

  const cellsIconMessageOutOfTime = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      id: 'cells-icon-message-out-of-time',
      type: 'warning',
      className: 'margin-l',
      icon: 'coronita:info',
      class: 'message-connection',
      message: 'funds-hiring-out-of-date-icon-message-text',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('SHOW_LAST_ICON_MESSAGE_OUT_OF_TIME')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'coronita:caution'
    }
  };

  const cellsIconMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      id: 'cells-icon-message',
      type: 'info-light-blue',
      className: 'margin-l funds-hiring-last-spacing funds-hiring-icon-message-spacing custom-info-light',
      class: 'message-connection',
      message: 'funds-hiring-contractig-warning-message-text',
      icon: 'coronita:info',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('LAST_ICON_MESSAGE')]: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'margin-l',
      type: 'info'
    }
  };

  const summarySection = {
    zone: 'app__confirm',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    type: 'UI',
    properties: {
      id: getLocaleName('summary-section'),
      showAddition: true,
      className: 'funds-investment aqua-dark-button',
      showLoadingSkeleton: true,
      buttonLabel: 'funds-hiring-summary-button-label',
      summaryViewTitle: 'funds-hiring-summary-investment-amount-label',
      operationAmountClass: 'amount-huge-decimals',
      hideCustomFeesMessage: true,
      managmentFeesMessage: 'funds-hiring',
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getChannelName('SET_INFO_SUMMARY')]: {
            bind: 'operation'
          },
          [getChannelName('input_amount_request_simulate')]: {
            bind: 'reset'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showSecondaryButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_summary_view_button')]: {
            bind: 'secondaryButtonLabel'
          }
        },
        out: {
          [getChannelName('REQUEST_CONTRACTING_FUND')]: {
            bind: 'summary-closed'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      operationAmountClass: '',
      buttonLabel: 'funds-hiring-summary-button-label-spherica',
      summaryViewTitle: 'funds-hiring-summary-investment-amount-label-spherica',
      primaryButtonClass: 'positive'
    }
  };

  const productSelectorFoundsModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector-funds-modal')}`,
      showCloseModalButton: true,
      closeButtonLabel: getLocaleName('modal-close-button'),
      className: isNativeIos ? 'ios-top-padding__header' : '',
      errorMessage: getLocaleName('error-message'),
      modalTitle: getLocaleName('modal-title'),
      iOSFixedHeader: isNativeIos,
      productsListTitle: getLocaleName('modal-products-title'),
      cellsConnections: {
        in: {
          [getChannelName('show_all_founds')]: {
            bind: 'treatProducts'
          },
          [getChannelName('funds_order_change')]: {
            bind: 'treatProducts'
          },
          [getChannelName('changed_order')]: {
            bind: 'setProperties'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'title-size-medium-l funds-hiring'
    }
  };
  const productSelectorFoundsModalAllProducts = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector-all-products')}`,
      additionalInformationSeparator: '',
      closeButtonLabel: getLocaleName('modal-close-button'),
      className: isNativeIos ? 'ios-top-padding__header' : '',
      errorMessage: getLocaleName('error-message'),
      iOSFixedHeader: isNativeIos,
      modalTitle: getLocaleName('product-step-funds-selector-list-title'),
      showCloseModalButton: true,
      productsListTitle: '',
      cellsConnections: {
        in: {
          [getChannelName('FUNDS_ORDER_RISK_FILTER_ALL_PRODUCTS')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_ALL_PRODUCTS')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_ALL_PRODUCTS_OK')]: {
            bind: 'filterPayload'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_ALL_PRODUCTS')]: {
            bind: 'filter-funds-level-risk'
          },
          [getChannelName('FUNDS_FILTER_SHOW_SPINNER_ALL_PRODUCTS')]: {
            bind: 'show-spinner-filter'
          },
          [getChannelName('FUNDS_FILTER_HIDDE_SPINNER_ALL_PRODUCTS')]: {
            bind: 'hidde-spinner-filter'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'title-size-medium-l funds-hiring'
    }
  };
  const productSelectorFoundsModalDebt = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector-funds-debt')}`,
      additionalInformationSeparator: '',
      closeButtonLabel: getLocaleName('modal-close-button'),
      className: isNativeIos ? 'ios-top-padding__header' : '',
      errorMessage: getLocaleName('error-message'),
      iOSFixedHeader: isNativeIos,
      modalTitle: getLocaleName('investment-funds-description-modal'),
      productsListTitle: '',
      showCloseModalButton: true,
      showFloatBottom: true,
      preventClose: true,
      cellsConnections: {
        in: {
          [getChannelName('FUNDS_ALL_SELECTED_FILTER')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER')]: {
            bind: 'filterPayload'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER')]: {
            bind: 'close'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_DEBT')]: {
            bind: 'selected-product'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('SELECTED_PRODUCT_RESTORE')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_DEBT')]: {
            bind: 'filter-funds-level-risk'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_DEBT_TAPPED')]: {
            bind: 'filter-funds-level-risk-tapped'
          },
          [getChannelName('FUNDS_FILTER_SHOW_SPINNER')]: {
            bind: 'show-spinner-filter'
          },
          [getChannelName('FUNDS_FILTER_HIDDE_SPINNER')]: {
            bind: 'hidde-spinner-filter'
          },
          [getChannelName('FUNDS_RESET_FILTER')]: {
            bind: 'botton-float-tapped'
          },
          [getChannelName('FUNDS_RESET_FILTER_CLOSE')]: {
            bind: 'prevent-close'
          },
          [getChannelName('analytics_view_fund_debt_modal')]: {
            bind: 'opened-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'title-size-medium-l funds-hiring'
    }
  };
  const productSelectorFoundsModalVariable = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector-funds-variable')}`,
      additionalInformationSeparator: '',
      closeButtonLabel: getLocaleName('modal-close-button'),
      className: isNativeIos ? 'ios-top-padding__header' : '',
      errorMessage: getLocaleName('error-message'),
      iOSFixedHeader: isNativeIos,
      modalTitle: getLocaleName('investment-funds-variable-modal'),
      productsListTitle: getLocaleName('modal-products-title-order'),
      showCloseModalButton: true,
      showFloatBottom: true,
      preventClose: true,
      cellsConnections: {
        in: {
          [getChannelName('FUNDS_ALL_SELECTED_VARIABLE')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_VARIABLE')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_VARIABLE')]: {
            bind: 'filterPayload'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_REVERSE')]: {
            bind: 'filterPayload'
          },
          [getChannelName('FUNDS_ORDER_RISK_REVERSE')]: {
            bind: 'treatProducts'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_RENT')]: {
            bind: 'close'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_VARIABLE')]: {
            bind: 'selected-product'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_VARIABLE')]: {
            bind: 'filter-funds-level-risk'
          },
          [getChannelName('FUNDS_FILTER_SHOW_SPINNER_VARIABLE')]: {
            bind: 'show-spinner-filter'
          },
          [getChannelName('FUNDS_FILTER_HIDDE_SPINNER_VARIABLE')]: {
            bind: 'hidde-spinner-filter'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_VARIABLE_TAPPED')]: {
            bind: 'filter-funds-level-risk-tapped'
          },
          [getChannelName('FUNDS_RESET_FILTER_VARIABLE')]: {
            bind: 'botton-float-tapped'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_RENT')]: {
            bind: 'prevent-close'
          },
          [getChannelName('analytics_view_fund_variable_modal')]: {
            bind: 'opened-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'title-size-medium-l funds-hiring'
    }
  };
  const productSelectorFoundsModalMulti = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector-funds-multi')}`,
      additionalInformationSeparator: '',
      closeButtonLabel: getLocaleName('modal-close-button'),
      className: isNativeIos ? 'ios-top-padding__header' : '',
      errorMessage: getLocaleName('error-message'),
      iOSFixedHeader: isNativeIos,
      modalTitle: getLocaleName('investment-funds-multi-modal'),
      productsListTitle: '',
      showCloseModalButton: true,
      showFloatBottom: true,
      preventClose: true,
      cellsConnections: {
        in: {
          [getChannelName('FUNDS_ALL_SELECTED_MULTI')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_MULTI')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_MULTI')]: {
            bind: 'filterPayload'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_MULTI')]: {
            bind: 'close'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_MULTI')]: {
            bind: 'selected-product'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_MULTI')]: {
            bind: 'filter-funds-level-risk'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_MULTI_TAPPED')]: {
            bind: 'botton-float-tapped'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_MULTI')]: {
            bind: 'prevent-close'
          },
          [getChannelName('analytics_view_fund_multi_modal')]: {
            bind: 'opened-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'title-size-medium-l funds-hiring'
    }
  };
  const productSelectorFoundsModalType = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector-funds-type')}`,
      additionalInformationSeparator: '',
      closeButtonLabel: getLocaleName('modal-close-button'),
      className: isNativeIos ? 'ios-top-padding__header' : '',
      errorMessage: getLocaleName('error-message'),
      modalTitle: getLocaleName('modal-title'),
      iOSFixedHeader: isNativeIos,
      prevenClose: true,
      titleFilterFunds: {
        title: 'funds-hiring-investment-service-title-type',
        classTitle: 'filter-title',
        description: 'funds-hiring-investment-service-description-type',
        classSubTitle: 'filter-subtitle'
      },
      showFloatBottom: false,
      cellsConnections: {
        in: {
          [getChannelName('SHOW_FUNDS_TYPE')]: {
            bind: 'treatProducts'
          },
          [getChannelName('CLOSE_MODAL_FUNDS')]: {
            bind: 'close'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUND_MODAL_TYPE_CLOSE')]: {
            bind: 'prevent-close'
          },
          [getChannelName('analytics_view_fund_type_modal')]: {
            bind: 'opened-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      titleFilterFunds: {
        title: 'funds-hiring-investment-service-title-type-spherica',
        classTitle: 'filter-title',
        description: 'funds-hiring-investment-service-description-type',
        classSubTitle: 'filter-subtitle'
      },
      className: 'title-size-medium-l funds-hiring'
    }
  };
  const productSelectorModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector')}`,
      closeButtonLabel: getLocaleName('step-account-modal-close-button'),
      className: isNativeIos ? 'ios-top-padding__header' : '',
      localCurrency: getLocalCurrency(),
      errorMessage: getLocaleName('error-message'),
      modalTitle: getLocaleName('list-products'),
      showCloseModalButton: true,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('show_all_user_acounts')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('selected_product_from_modal')]: {
            bind: 'selected-product'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'title-size-medium-l funds-hiring'
    }
  };
  const analyticsFundsHiringManager = {
    zone: 'app__main',
    tag: 'glomo-analytics-funds-hiring-manager-mx',
    familyPath: '@glomo-web-components/glomo-analytics-funds-hiring-manager',
    render: 'litElement',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          CONTRACT_PRODUCTS_ANALYTICS_APP_ON_CLICK_CHANNEL: {
            bind: 'setProductInfo'
          },
          funds_hiring_init_page: {
            bind: 'fireStepLoaded'
          },
          [getChannelName('analytics_view_offer_step')]: {
            bind: 'fireStepLoaded'
          },
          [getChannelName('set_max_products_select_fund')]: {
            bind: 'setStartPage'
          },
          [getChannelName('analytics_view_account_step')]: {
            bind: 'viewAccountStep'
          },
          [getChannelName('analytics_view_investment_type_step')]: {
            bind: 'viewInvestmentTypeStep'
          },
          [getChannelName('selected_investment_service')]: {
            bind: 'setInvestmentType'
          },
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM_DETAIL')]: {
            bind: 'viewInvestmentTypeModal'
          },
          [getChannelName('products_parsed_funds')]: {
            bind: 'viewFundsStep'
          },
          [getChannelName('fund_selected')]: {
            bind: 'setFunds'
          },
          [getChannelName('analytics_view_fund_type_modal')]: {
            bind: 'huellaFundType'
          },
          [getChannelName('analytics_view_fund_debt_modal')]: {
            bind: 'huellaFundDebt'
          },
          [getChannelName('analytics_view_fund_multi_modal')]: {
            bind: 'huellaFundMulti'
          },
          [getChannelName('analytics_view_fund_variable_modal')]: {
            bind: 'huellaFundVariable'
          },
          [getChannelName('analytics_view_investment_amount_step')]: {
            bind: 'viewAmountStep'
          },
          [getChannelName('set_information_simulation')]: {
            bind: 'huellaSimulationStep'
          },
          [getChannelName('POST_FUND_SIMULATE')]: {
            bind: 'getSimulate'
          },
          [getChannelName('SET_INFO_SUMMARY')]: {
            bind: 'setAmountSelected'
          },
          [getChannelName('analytics_set_in_time_step')]: {
            bind: 'setInTime'
          },
          [getChannelName('analytics_view_mail_step')]: {
            bind: 'viewAccountState'
          },
          [getChannelName('analytics_view_last_step')]: {
            bind: 'viewTermsAndConditions'
          },
          [getChannelName('show_button_finish_steps')]: {
            bind: 'viewOCConfirm'
          },
          [getChannelName('REQUEST_FUND_CONTRACT_SERVICE')]: {
            bind: 'viewOTP'
          },
          NAVIGATE_TO_REVIEW_FUNDS_HIRING: {
            bind: 'viewHiringSuccess'
          },
          [getChannelName('error_modal_account_filter')]: {
            bind: 'errorHandler'
          },
          FUNDSHIRING_GENERIC_MODAL_OPEN: {
            bind: 'errorGeneric'
          }
        },
        out: {
          [getChannelName('analytics_page_visit')]: {
            bind: 'analytics-page-visit',
            analytics: getPageVisit('1 informacion')
          },
          [getChannelName('analytics_page_started')]: {
            bind: 'analytics-app-started',
            analytics: getAppStarted('lo quiero')
          },
          [getChannelName('analytics_step_account_selected')]: {
            bind: 'analytics-account-step',
            analytics: getAppStep(2, '2 cuenta asociada')
          },
          [getChannelName('analytics_step_investment_selected')]: {
            bind: 'analytics-investment-type-step',
            analytics: getAppStep(3, '3 servicio de inversion')
          },
          [getChannelName('analytics_step_fund_selected')]: {
            bind: 'analytics-fund-step',
            analytics: getAppStep(4, '4 seleccionar fondo de inversion', { typology: true })
          },
          [getChannelName('analytics_step_amount_inserted')]: {
            bind: 'analytics-invest-amount-step',
            analytics: getAppStep(5, '5 insertar importe', { typology: true, dynamicProduct: true })
          },
          [getChannelName('analytics_step_account_status_selected')]: {
            bind: 'analytics-account-status',
            analytics: getAppStep(6, '6 envio de estado de cuenta', { typology: true, dynamicProduct: true, dynamicAmount: true, applicationProcess: true })
          },
          [getChannelName('analytics_step_terms_and_conditions_selected')]: {
            bind: 'analytics-terms-and-conditions',
            analytics: getAppStep(7, '7 terminos y condiciones', { typology: true, dynamicProduct: true, dynamicAmount: true, applicationProcess: true })
          },
          [getChannelName('analytics_step_confirm_hiring')]: {
            bind: 'analytics-oc-confirmation',
            analytics: getAppStep(8, '8 confirmacion', { typology: true, dynamicProduct: true, dynamicAmount: true, applicationProcess: true })
          },
          [getChannelName('analytics_step_otp_modal')]: {
            bind: 'analytics-otp-modal',
            analytics: getAppStep(9, '9 otp', { typology: true, dynamicProduct: true, dynamicAmount: true, applicationProcess: true })
          },
          [getChannelName('analytics_app_completed_successfully')]: {
            bind: 'analytics-app-completed-successfully',
            analytics: getAppCompleted('contratado', 'pagina exitosa')
          },
          [getChannelName('analytics_app_completed_rejected')]: {
            bind: 'analytics-app-completed-rejected',
            analytics: getAppCompleted('rechazado', 'pagina exitosa', 'rejected')
          },
          [getChannelName('analytics_huella_investment_beginner')]: {
            bind: 'analytics-huella-investment-beginner',
            analytics: getAdvancedFootprint('3 servicio de inversion', 'servicios de comercializacion')
          },
          [getChannelName('analytics_huella_investment_advanced')]: {
            bind: 'analytics-huella-investment-advanced',
            analytics: getAdvancedFootprint('3 servicio de inversion', 'servicios de ejecucion')
          },
          [getChannelName('analytics_huella_simulation_confirmed')]: {
            bind: 'analytics-huella-invest-simulation-step',
            analytics: getAdvancedFootprint('5 insertar importe', 'importe confirmado')
          },
          [getChannelName('analytics_huella_fund_type')]: {
            bind: 'analytics-huella-fund-type-modal',
            analytics: getAdvancedFootprint('4 seleccionar fondo de inversion', 'filtrar fondos')
          },
          [getChannelName('analytics_huella_fund_debt')]: {
            bind: 'analytics-huella-fund-debt-modal',
            analytics: getAdvancedFootprint('4 seleccionar fondo de inversion', 'fondos de deuda')
          },
          [getChannelName('analytics_huella_fund_variable')]: {
            bind: 'analytics-huella-fund-variable-modal',
            analytics: getAdvancedFootprint('4 seleccionar fondo de inversion', 'fondos de renta variable')
          },
          [getChannelName('analytics_huella_fund_multi')]: {
            bind: 'analytics-huella-fund-multi-modal',
            analytics: getAdvancedFootprint('4 seleccionar fondo de inversion', 'fondos multiestrategia')
          },
          [getChannelName('analytics_error_min_amount')]: {
            bind: 'analytics-error-min-amount',
            analytics: getAdvancedFootprintError('error saldo insuficiente')
          },
          [getChannelName('analytics_error_comunication')]: {
            bind: 'analytics-error-comunication',
            analytics: getAdvancedFootprintError('error de comunicacion')
          }
        }
      }
    }
  };
  const base = {
    hash: +'funds-hiring',
    currentPage: {
      url: '/funds-hiring'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      analyticsFundsHiringManager,
      fundDetailModal,
      modalManager,
      header,
      offerStep,
      stepAccountSelector,
      investmentService,
      selectStep,
      investmentSimulationStep,
      stepAccountMail,
      productSelectorFoundsModalType,
      termsAndConditionsStep,
      cellsIconMessageOutOfTime,
      cellsIconMessage,
      summarySection,
      productSelectorFoundsModal,
      productSelectorFoundsModalDebt,
      productSelectorFoundsModalVariable,
      productSelectorFoundsModalMulti,
      productSelectorFoundsModalAllProducts,
      productSelectorModal,
      fundsHiringFilter,
      ...managers,
      controllerCallMeBack(cmbConfig),
      analyticsCallMeBack(cmbConfigAnalytics)
    ]
  };
  require('./common/_sign-connector')(CONFIG)(base)('cells-dm-global-apis-investment-funds', PAGE_NAME, ['success-on-fund-contract', 'error-on-fund-contract']);
  const connectionsOutOTP = connectionsOut(base);
  connectionsOutOTP('cells-sign-operation-dm-mx').open_sign_modal_fundsHiring = {
    bind: 'signature-required'
  };
  return sphericaPageUtils.spherize(base);
};
