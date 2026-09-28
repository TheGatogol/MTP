/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const PAGE_NAME = 'nonPreApprovedConsumerLoan';
  const PAGES = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const UTILS = require('./common/helpers/_utils');
  const { useNames } = UTILS;
  const OPERATIVE_PREFIX = PAGE_NAME.toLowerCase();
  const SPINNER = UTILS.SPINNER(CONFIG);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const isNative = CONFIG.native || false;
  const ANALYTICS = require('./analytics/_nonPreApprovedConsumerLoanBureau')();
  const LITERALS = require('./analytics/common/_literals');
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = CONFIG.nativeIos || false;
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      moleculeLinkVariant: 'primary-alt',
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          nonPreApprovedConsumerLoan_OPEN_MODAL_ERROR_SPHERICA: {
            bind: 'openWithSettings'
          },
          global_non_preapproved_credit_card_modal_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          CANCEL_NON_PREAPROVED_CONSUMER_LOAN_ACCEPT: {
            bind: 'alert-NON-PREAPPROVED-CONSUMER-LOAN-accept'
          },
          ERROR_NON_PREAPROVED_CONSUMER_LOAN_ACCEPT: {
            bind: 'alert-offer-error-accept'
          },
          ERROR_NON_PREAPROVED_CONSUMER_LOAN_CANCEL: {
            bind: 'alert-offer-error-cancel'
          }
        }
      }
    }
  };

  const literalErrors = {
    ERR405: LITERALS.preApprovedLoan.rejectionFinancialHealth,
    ERR404: LITERALS.preApprovedLoan.rejectionBureauWithSolution,
    ERR403: LITERALS.preApprovedLoan.rejectionBureauWithoutSolution,
    ERR402: LITERALS.preApprovedLoan.rejectionNonPayment
  };
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.properties.className = 'solid-spinner';

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      headerFixed: true
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('reset_page')]: {
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
  const cellsModalHelp = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-help',
    tagSpherica: 'cells-modal-help-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_modal_help_config: {
            bind: 'setProperties'
          }
        }
      }
    },
    propertiesSpherica: {
      iconClass: 'icon-size-80',
      fullHeight: true
    }
  };
  const moleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      leftIcon: 'coronita:close',
      id: 'non-preapproved',
      className: 'header--grey',
      secondaryClass: 'header--core',
      cellsConnections: {
        in: {
          page_info_initialization: {
            bind: 'titleName'
          }
        },
        out: {
          nonpreapprovedconsumerloan_exit_header: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      leftIcon: '',
      className: '',
      secondaryClass: '',
      rightIcon: 'coronita:close',
      rightIconText: 'non-preapproved-consumer-loan-close-label',
      variant: 'primary',
      type: 'modal',
      cellsConnections: {
        in: {
          page_info_initialization: {
            bind: 'titleName'
          }
        },
        out: {
          nonpreapprovedconsumerloan_exit_header: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const stepOfferPage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-step-offer-page',
    tagSpherica: 'glomo-step-offer-page-spherica',
    properties: {
      active: true,
      stickyEnabled: true,
      cellsConnections: {
        in: {
          [getChannelName('send_offer_detail_data')]: {
            bind: 'items'
          },
          [getChannelName('update_config_step_offer_page')]: {
            bind: 'items'
          },
          activate_step_offer_page: {
            bind: 'collapsed'
          }
        },
        out: {
          [getChannelName('slider_value_changed')]: {
            bind: 'current-slider-value',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('amount_value_changed_to_empty')]: {
            bind: 'amount-changed-empty'
          },
          [getChannelName('input_click')]: {
            bind: 'validate-input-amount-click'
          },
          [getChannelName('amount_value_changed')]: {
            bind: 'amount-changed-on-blur'
          },
          [getChannelName('show_cost_modal')]: {
            bind: 'non-preapproved-consumer-loan-costs-clicked'
          },
          [getChannelName('show_interest_cost_modal')]: {
            bind: 'non-preapproved-consumer-loan-interest-costs-clicked'
          },
          [getChannelName('send_post_loan_proposal')]: {
            bind: 'continue-pressed'
          },
          open_control_veil: {
            bind: 'continue-pressed'
          },
          global_retargeting_contracted_product: {
            bind: 'continue-pressed'
          }
        }
      }
    }
  };
  const nonPreApprovedLoanManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-non-pre-approved-consumer-loan',
    familyPath: '@glomo-web-components/bbva-manager-non-pre-approved-consumer-loan',
    render: 'litElement',
    properties: {
      native: CONFIG.native || false,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          },
          [getChannelName('init_page')]: {
            bind: 'getLoansOffer'
          },
          global_storage_get_loginData_success: {
            bind: 'customerId'
          },
          global_set_app_version: {
            bind: 'checkDataInfo'
          },
          [getChannelName('get_offer_detail_success')]: {
            bind: 'parseGetOfferDetailResponse'
          },
          [getChannelName('get_offer_detail_error')]: {
            bind: 'showModalErrorOnPostLoanOfferDetail'
          },
          [getChannelName('slider_value_changed')]: {
            bind: 'updateStepOfferPageConfigOnSliderChange'
          },
          [getChannelName('amount_value_changed_to_empty')]: {
            bind: 'updateStepOfferPageConfigOnInputChange'
          },
          [getChannelName('amount_value_changed')]: {
            bind: 'updateStepOfferPageConfigOnInputChange'
          },
          nonpreapprovedconsumerloan_exit_header: {
            bind: 'showModalExitOperative'
          },
          CANCEL_NON_PREAPROVED_CONSUMER_LOAN_ACCEPT: {
            bind: 'exitOperative'
          },
          ERROR_NON_PREAPROVED_CONSUMER_LOAN_ACCEPT: {
            bind: 'exitOperative'
          },
          ERROR_NON_PREAPROVED_CONSUMER_LOAN_CANCEL: {
            bind: 'exitOperative'
          },
          [getChannelName('show_cost_modal')]: {
            bind: 'sendTooltipCosts'
          },
          [getChannelName('show_interest_cost_modal')]: {
            bind: 'sendTooltipInterestCosts'
          },
          [getChannelName('post_simulate_loan_success')]: {
            bind: 'updateConfigLoanOfferOnSimulate'
          },
          [getChannelName('post_simulate_loan_error')]: {
            bind: 'showModalErrorOnPostSimulate'
          },
          [getChannelName('send_post_loan_proposal')]: {
            bind: 'postRisksDeviceInfoAssesment'
          },
          [getChannelName('post_loan_proposal_success')]: {
            bind: 'showModalSuccessOnPostLoanProposal'
          },
          [getChannelName('post_loan_proposal_error')]: {
            bind: 'activateStepOfferPage'
          },
          [getChannelName('post_loan_proposal_error')]: {
            bind: 'manageLoanProposalError'
          },
          sign_modal_close: {
            bind: 'closeOtpModal'
          },
          signature_cancel_nonPreApprovedConsumerLoan: {
            bind: 'closeOtpModal'
          },
          global_non_preapproved_set_offer_id: {
            bind: 'offerId'
          }
        },
        out: {
          config_loans_api_version: {
            bind: 'set-loans-version'
          },
          open_control_veil: {
            bind: 'open-spinner'
          },
          page_info_initialization: {
            bind: 'header-info-title'
          },
          post_risk_assesment: {
            bind: 'request-post-risk-device-assesment'
          },
          [getChannelName('send_offer_detail_data')]: {
            bind: 'loan-offer-detail-data-set'
          },
          global_alert_manager_open_with_settings: {
            bind: 'dispatch-modal-config'
          },
          global_non_preapproved_credit_card_modal: {
            bind: 'try-to-exit-operative'
          },
          go_back_origin_page: {
            bind: 'exit-operative',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'exit-operative'
          },
          [getChannelName('do_get_loans_offer')]: {
            bind: 'request-get-loans-offer'
          },
          [getChannelName('do_post_simulate_loan')]: {
            bind: 'request-post-simulate-loan'
          },
          [getChannelName('do_post_loan_proposal')]: {
            bind: 'request-post-loan-proposal'
          },
          global_modal_help_config: {
            bind: 'show-modal-help'
          },
          [getChannelName('update_config_step_offer_page')]: {
            bind: 'update-config-step-offer-page'
          },
          activate_step_offer_page: {
            bind: 'set-active-offer-page'
          },
          close_control_veil: {
            bind: 'close-spinner'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      alertBoxVariant: 'primary-alt',
      newCellsConnections: {
        add: {
          out: {
            nonPreApprovedConsumerLoan_OPEN_MODAL_ERROR_SPHERICA: {
              bind: 'dispatch-modal-config'
            },
            global_non_preapproved_credit_card_modal_spherica: {
              bind: 'try-to-exit-operative'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings',
            'global_non_preapproved_credit_card_modal'
          ]
        }
      }
    }
  };
  const cellsDmRisk = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-risks',
    properties: {
      host: CONFIG.globalServices.host,
      native: isNative,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          post_risk_assesment: {
            bind: 'postDevicesRiskAssessment'
          }
        },
        out: {
          success_post_risk_assesment: {
            bind: 'success-on-post-risks-assessment'
          },
          error_post_risk_assesment: {
            bind: 'error-on-post-risks-assessment'
          }
        }
      }
    }
  };
  const cellsDmGlobalApiLoans = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-loans',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: isNative,
      cellsConnections: {
        in: {
          config_loans_api_version: {
            bind: 'loansApiVersion'
          },
          [getChannelName('do_get_loans_offer')]: {
            bind: 'getOfferDetail'
          },
          [getChannelName('do_post_simulate_loan')]: {
            bind: 'postOfferDetailQuotationsSimulate'
          },
          [getChannelName('do_post_loan_proposal')]: {
            bind: 'postProposal'
          }
        },
        out: {
          [getChannelName('get_offer_detail_success')]: {
            bind: 'set-offer-detail'
          },
          [getChannelName('get_offer_detail_error')]: {
            bind: 'error-on-get-loan-offer-detail'
          },
          [getChannelName('post_simulate_loan_success')]: {
            bind: 'get-offer-detail-quotations-simulate'
          },
          [getChannelName('post_simulate_loan_error')]: {
            bind: 'error-on-post-loan-offer-detail-quotations-simulate'
          },
          [getChannelName('post_loan_proposal_success')]: {
            bind: 'post-proposal'
          },
          [getChannelName('post_loan_proposal_error')]: {
            bind: 'error-on-post-proposal'
          },
          global_retargeting_set_data_non_preapproved_consumer_loan: {
            bind: 'set-offer-detail'
          },
          global_retargeting_go_next_step: {
            bind: 'set-offer-detail'
          },
          global_retargeting_contracted_product: {
            bind: 'error-on-get-loan-offer-detail'
          }
        }
      }
    }
  };

  const AnalyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-non-pre-approved-analytics',
    familyPath: '@glomo-web-components/bbva-manager-non-pre-approved-consumer-loan',
    render: 'litElement',
    properties: {
      literalErrors,
      cellsConnections: {
        in: {
          [getChannelName('get_offer_detail_success')]: {
            bind: 'fireAppPageVisit'
          },
          [getChannelName('input_click')]: {
            bind: 'fireAmountAppStarted'
          },
          [getChannelName('show_cost_modal')]: {
            bind: 'fireInfoCostAppStarted'
          },
          [getChannelName('show_interest_cost_modal')]: {
            bind: 'fireInfoTasaAppStarted'
          },
          [getChannelName('send_post_loan_proposal')]: {
            bind: 'fireIWantItAppStarted'
          },
          [getChannelName('post_loan_proposal_error')]: {
            bind: 'fireAppCompleted'
          },
          [getChannelName('post_loan_proposal_success')]: {
            bind: 'fireAppCompleted'
          }
        },
        out: {
          [getChannelName('app_page_visit')]: {
            bind: 'set-app-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('app_started')]: {
            bind: 'set-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('app_completed')]: {
            bind: 'fire-app-completed',
            analytics: ANALYTICS.app_completed({ userSegmentProfile: { bind: 'userSegmentProfile' }, applicationState: { bind: 'applicationState' } })
          }
        }
      }
    }
  };
  const base = {
    hash: 'non-pre-approved-consumer-loan',
    currentPage: {
      url: '/non-pre-approved-consumer-loan'
    },
    pages: PAGES,
    template,
    components: [
      SPINNER,
      lifeCycle,
      cellsModalHelp,
      moleculeHeader,
      stepOfferPage,
      cellsDmRisk,
      nonPreApprovedLoanManager,
      cellsDmGlobalApiLoans,
      AnalyticsManager
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-loans', 'nonPreApprovedConsumerLoan', ['post-proposal', 'error-on-post-proposal']);
  return sphericaPageUtils.spherize(base);
};
