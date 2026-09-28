/* eslint-disable no-shadow, complexity */
'use strict';

module.exports = CONFIG => {
  const { getLocalCurrency, getLanguage, createPrefixFromPageName, useNames } = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const PAGENAME = 'mortgage';
  const PAGES = require('./common/_pages')(CONFIG)(PAGENAME);
  const ANALYTICS_MORTGAGE_LEAD = require('./analytics/_mortgage')(CONFIG);
  const isNativeiOS = CONFIG.nativeIos || false;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGENAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const getChannelNameCallMeBack = channelName => getChannelName(channelName).toLowerCase();
  const { analyticsCallMeBack, controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGENAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const CMB_CONFIG = {
    operativeName: PAGENAME,
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    lastStep: 3,
    onlyCallMeBack: true,
    recoverySettings: true,
    onlyCallMeBackRemoteManager: true,
    useFeatureFlag: true,
    scheduleNotAllowed: true
  };
  const CMB_CONFIG_ANALYTICS = {
    operativeName: PAGENAME,
    steps: {
      1: '1 introducir datos',
      2: '2 terminos y condiciones',
      3: '3 confirmacion'
    },
    levels: {
      1: 'prestamos',
      2: 'credito hipotecario one click'
    },
    buttons: {
      summary: '3 confirmacion'
    }
  };
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {}
      }
    }
  };

  const base = {
    hash: 'mortgage',
    currentPage: {
      url: '/mortgage'
    },
    pages: PAGES,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: 'bbva-core-blue',
        cellsConnections: {
          in: {
            mortgage_init_page: {
              bind: 'recalculateHeader'
            },
            mortgage_text_focus_in: {
              bind: 'recalculateStatusBarTop'
            },
            mortgage_text_focus_out: {
              bind: 'resetStatusBarTop'
            }
          }
        }
      }
    },
    components: [
      isSpherica && glomoAlertManagerSpherica,
      controllerCallMeBack(CMB_CONFIG),
      analyticsCallMeBack(CMB_CONFIG_ANALYTICS),
      {
        type: 'UI',
        zone: 'app__overlay',
        tag: 'bbva-progress-content',
        tagSpherica: 'bbva-progress-content-spherica',
        familyPath: '@bbva-web-components/bbva-progress-content',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          withMask: true,
          iOSFixedHeader: isNativeiOS,
          cellsConnections: {
            in: {
              mortgage_open_control_veil: {
                bind: 'show'
              },
              mortgage_close_control_veil: {
                bind: 'hide'
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
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_mortgage: {
                bind: 'init'
              }
            },
            out: {
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              mortgage_init_page: {
                bind: 'init-page'
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
      },
      {
        zone: 'app__header',
        tag: 'glomo-navigation-handler',
        type: 'UI',
        properties: {
          continue: 'mortgageReview',
          backAction: 'navigate-to-previous-page',
          cellsConnections: {
            in: {
              mortgage_back_navigate_request: {
                bind: 'goBack'
              },
              mortgage_exit_mortage_lead_back: {
                bind: 'goBack'
              },
              mortgage_exit_error_mortgage_lead_service: {
                bind: 'goBack'
              },
              mortgage_show_review: {
                bind: 'navigate'
              }
            },
            out: {
              mortgage_navigation_to_previous_page: {
                bind: 'navigate-to-previous-page',
                backStep: true
              },
              mortgage_navigation_to_mortgage_review: {
                bind: 'navigation-to-mortgageReview',
                link: {
                  page: {
                    bind: 'continue'
                  }
                }
              },
              [getChannelNameCallMeBack('_call_me_back_reset_step')]: {
                bind: 'navigate-to-previous-page'
              },
              global_retargeting_contracted_product: {
                bind: 'navigation-to-mortgageReview'
              },
              global_retargeting_send_information_update: {
                bind: 'navigate-to-previous-page'
              }
            }
          }
        }
      },
      ...(!isSpherica ? [ {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-progress-multistep-bar',
        familyPath: '@bbva-experience-components/bbva-progress-multistep-bar',
        render: 'litElement',
        properties: {
          step: '1',
          cellsConnections: {
            in: {
              mortgage_step_update: {
                bind: 'step'
              }
            }
          }
        }
      } ] : []),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main',
        tagSpherica: 'bbva-header-main-spherica',
        render: 'litElement',
        familyPath: '@bbva-experience-components/bbva-header-main',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          id: 'mortgageHeaderMain',
          iconRightPrimary: 'bbva:close',
          text: 'glomo-mortgage-header-title',
          variant: 'modal',
          cellsConnections: {
            in: {
              [getChannelNameCallMeBack('_call_me_back_show_icon_button_header')]: {
                bind: 'iconRightSecondary'
              }
            },
            out: {
              mortgage_set_icon_right_primary: {
                bind: 'iconRightPrimary'
              },
              mortgage_exit_page: {
                bind: 'header-main-icon-right-primary-click'
              },
              [getChannelNameCallMeBack('_call_me_back_init_header_configuration')]: {
                bind: 'header-main-icon-right-secondary-click'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'modal-initial',
          ambient: 'primary-alt',
          rightButtons: [ {
            id: 'btn-close',
            name: 'Close',
            icon: 'spherica:close',
            label: 'bbva-header-main-close-aria-label',
            accessibilityText: 'bbva-help-modal-close-button',
            defaultEventIconName: 'header-main-icon-right-primary-click'
          } ]
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-multistep-mortgage-lead',
        tagSpherica: 'bbva-multistep-mortgage-lead-spherica',
        familyPath: '@glomo-web-components/bbva-multistep-mortgage-lead',
        familyPathSpherica: '@glomo-web-components/bbva-multistep-mortgage-lead-spherica',
        render: 'litElement',
        properties: {
          localCurrency: getLocalCurrency(),
          language: getLanguage(),
          pdfData: [{
            text: 'bbva-multistep-mortgage-lead-quote-terms-and-conditions',
            eventModal: 'multistep-mortgage-lead-quote-terms-and-conditions'
          }, {
            text: 'bbva-multistep-mortgage-lead-consultation-authorization',
            eventModal: 'multistep-mortgage-lead-consultation-authorization'
          }],
          checkboxList: [{
            label: 'bbva-multistep-mortgage-lead-quote-terms-and-conditions-checkbox'
          }, {
            label: 'bbva-multistep-mortgage-lead-consultation-authorization-checkbox'
          }],
          cellsConnections: {
            in: {
              mortgage_set_email: {
                bind: 'email'
              },
              mortgage_item_selected_changed: {
                bind: 'items'
              },
              mortgage_cl_amount_data_changed: {
                bind: 'amountData'
              },
              mortgage_cl_slider_property_changed: {
                bind: 'sliderProperty'
              },
              mortgage_cl_key_info_changed: {
                bind: 'keyInfo'
              },
              mortgage_cl_sticky_data_changed: {
                bind: 'stickyPayload'
              },
              mortgage_cl_custom_message_changed: {
                bind: 'customMessage'
              },
              mortgage_message_info_changed: {
                bind: 'messageInfo'
              },
              mortgage_currency_code_changed: {
                bind: 'currencyCode'
              },
              mortgage_principal_list: {
                bind: 'principalList'
              },
              mortgage_init_page: {
                bind: 'init'
              },
              mortgage_amount_selected_changed: {
                bind: 'amount'
              },
              mortgage_slider_selected_changed: {
                bind: 'sliderSelected'
              },
              mortgage_navigation_to_mortgage_review: {
                bind: 'reset'
              },
              mortgage_navigation_to_previous_page: {
                bind: 'reset'
              },
              [getChannelNameCallMeBack('_call_me_back_show_summary_button')]: {
                bind: 'showStickyButton'
              }
            },
            out: {
              mortgage_set_icon_right_primary: {
                bind: 'header-icon-right-primary'
              },
              mortgage_modal_selector_item_selected: {
                bind: 'item-selected-changed'
              },
              mortgage_amount_changed: {
                bind: 'amount-changed'
              },
              mortgage_cl_slider_selected: {
                bind: 'slider-selected-changed'
              },
              mortgage_interaction_changed: {
                bind: 'interaction-changed'
              },
              mortgage_analytic_app_started: {
                bind: 'interaction-detail',
                analytics: ANALYTICS_MORTGAGE_LEAD.APP_STARTED_SIMULATOR_STEP
              },
              mortgage_analytic_app_step_2: {
                bind: 'current-step-1-changed',
                analytics: ANALYTICS_MORTGAGE_LEAD.APP_STEP_TERMS_STEP
              },
              mortgage_analytic_app_step_3: {
                bind: 'all-completed-changed',
                analytics: ANALYTICS_MORTGAGE_LEAD.APP_STEP_SUMMARY_STEP
              },
              mortgage_send_confirm: {
                bind: 'request-mortgage-lead'
              },
              mortgage_open_control_veil: {
                bind: 'show-spinner'
              },
              mortgage_close_control_veil: {
                bind: 'hide-spinner'
              },
              mortgage_text_focus_in: {
                bind: 'form-field-input-focus'
              },
              mortgage_text_focus_out: {
                bind: 'form-field-input-blur'
              },
              mortgage_show_mortgage_terms_and_conditions_of_quotation_modal: {
                bind: 'multistep-mortgage-lead-quote-terms-and-conditions'
              },
              mortgage_show_mortgage_credit_history_consultation_modal: {
                bind: 'multistep-mortgage-lead-consultation-authorization'
              },
              mortgage_show_mortgage_credit_destination_modal: {
                bind: 'form-select-help-click'
              },
              mortgage_show_mortgage_recruitment_or_opening_commission_modal: {
                bind: 'multistep-mortgage-lead-opening-commission-event-modal'
              },
              mortgage_show_mortgage_commission_for_credit_authorization_deferred_modal: {
                bind: 'multistep-mortgage-lead-deferred-commission-event-modal'
              },
              mortgage_show_mortgage_ordinary_fixed_and_annual_interest_rate_modal: {
                bind: 'multistep-mortgage-lead-monthly-rate-event-modal'
              },
              mortgage_show_mortgage_cat_modal: {
                bind: 'multistep-mortgage-lead-cat-rate-event-modal'
              },
              [getChannelNameCallMeBack('_call_me_back_init_summary_configuration')]: {
                bind: 'bbva-button-default-secondary-summary-button'
              },
              [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
                bind: 'bbva-button-default-secondary-button'
              },
              [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
                bind: 'go-next-step'
              },
              global_retargeting_go_next_step: {
                bind: 'go-next-step'
              },
              global_retargeting_credit_use: {
                bind: 'item-selected-changed'
              },
              global_retargeting_form_submission: {
                bind: 'current-step-0-changed'
              },
              mortgage_status: {
                bind: 'counter-step-changed'
              }
            }
          }
        },
        propertiesSpherica: {
          ambient: 'primary-alt'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-mortgage-lead',
        familyPath: '@glomo-web-components/bbva-manager-mortgage-lead',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          loansApiVersion: CONFIG.globalServices.versions.loans,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native || false,
          otpId: PAGENAME,
          benefitsAndFeatures: {
            ground: [{
              id: 'benefit',
              title: 'bbva-multistep-mortgage-lead-benefits-title',
              text: 'bbva-multistep-mortgage-lead-benefits-1-ground'
            }, {
              id: 'feature',
              title: 'bbva-multistep-mortgage-lead-features-title',
              lists: [
                'bbva-multistep-mortgage-lead-features-1-ground',
                'bbva-multistep-mortgage-lead-features-2-ground',
                'bbva-multistep-mortgage-lead-features-3-ground'
              ]
            }],
            acquisition: [{
              id: 'benefit',
              title: 'bbva-multistep-mortgage-lead-benefits-title',
              text: 'bbva-multistep-mortgage-lead-benefits-1-acquisition'
            }, {
              id: 'feature',
              title: 'bbva-multistep-mortgage-lead-features-title',
              lists: [
                'bbva-multistep-mortgage-lead-features-1-acquisition',
                'bbva-multistep-mortgage-lead-features-2-acquisition',
                'bbva-multistep-mortgage-lead-features-3-acquisition'
              ]
            }],
            liquidity: [{
              id: 'benefit',
              title: 'bbva-multistep-mortgage-lead-benefits-title',
              lists: [
                'bbva-multistep-mortgage-lead-benefits-1-liquidity',
                'bbva-multistep-mortgage-lead-benefits-2-liquidity'
              ]
            }, {
              id: 'feature',
              title: 'bbva-multistep-mortgage-lead-features-title',
              lists: [
                'bbva-multistep-mortgage-lead-features-1-liquidity',
                'bbva-multistep-mortgage-lead-features-2-liquidity',
                'bbva-multistep-mortgage-lead-features-3-liquidity'
              ]
            }],
            paymentpayment: [{
              id: 'benefit',
              title: 'bbva-multistep-mortgage-lead-benefits-title',
              text: 'bbva-multistep-mortgage-lead-benefits-1-paymentpayment'
            }, {
              id: 'feature',
              title: 'bbva-multistep-mortgage-lead-features-title',
              lists: [
                'bbva-multistep-mortgage-lead-features-1-paymentpayment',
                'bbva-multistep-mortgage-lead-features-2-paymentpayment',
                'bbva-multistep-mortgage-lead-features-3-paymentpayment'
              ]
            }],
            remodeling: [{
              id: 'benefit',
              title: 'bbva-multistep-mortgage-lead-benefits-title',
              lists: [
                'bbva-multistep-mortgage-lead-benefits-1-remodeling',
                'bbva-multistep-mortgage-lead-benefits-2-remodeling'
              ]
            }, {
              id: 'feature',
              title: 'bbva-multistep-mortgage-lead-features-title',
              lists: [
                'bbva-multistep-mortgage-lead-features-1-remodeling',
                'bbva-multistep-mortgage-lead-features-2-remodeling',
                'bbva-multistep-mortgage-lead-features-3-remodeling'
              ]
            }]
          },
          language: getLanguage(),
          helpModalConfigs: {
            mortgage: {
              termsAndConditionsOfQuotation: {
                'manager-mortgage-lead-mortgage-modal-set-full-height': false,
                'manager-mortgage-lead-mortgage-modal-set-expanded': false,
                'manager-mortgage-lead-mortgage-modal-set-header-type': 'modal-initial',
                'manager-mortgage-lead-mortgage-modal-set-header-text': 'bbva-multistep-mortgage-lead-help-modal-terms-and-conditions-of-quotation-header',
                'manager-mortgage-lead-mortgage-modal-set-title-icon': '',
                'manager-mortgage-lead-mortgage-modal-set-title-text': '',
                'manager-mortgage-lead-mortgage-modal-set-button-text': '',
                'manager-mortgage-lead-mortgage-panel-set-hidden': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-description': true,
                'manager-mortgage-lead-mortgage-text-set-alignment-1': 'center',
                'manager-mortgage-lead-mortgage-text-set-text-1': 'bbva-multistep-mortgage-lead-help-modal-terms-and-conditions-of-quotation-text-1',
                'manager-mortgage-lead-mortgage-text-set-font-type-1': 'body',
                'manager-mortgage-lead-mortgage-text-set-class-name-1': 'u-margin-bottom--1-5',
                'manager-mortgage-lead-mortgage-text-set-hidden-1': false,
                'manager-mortgage-lead-mortgage-text-set-text-2': 'bbva-multistep-mortgage-lead-help-modal-terms-and-conditions-of-quotation-text-2',
                'manager-mortgage-lead-mortgage-text-set-alignment-2': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-2': false,
                'manager-mortgage-lead-mortgage-text-set-text-3': 'bbva-multistep-mortgage-lead-help-modal-terms-and-conditions-of-quotation-text-3',
                'manager-mortgage-lead-mortgage-text-set-font-type-3': 'body',
                'manager-mortgage-lead-mortgage-text-set-class-name-3': 'u-margin-bottom--1-5',
                'manager-mortgage-lead-mortgage-text-set-alignment-3': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-3': false,
                'manager-mortgage-lead-mortgage-text-set-text-4': 'bbva-multistep-mortgage-lead-help-modal-terms-and-conditions-of-quotation-text-4',
                'manager-mortgage-lead-mortgage-text-set-alignment-4': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-4': false,
                'manager-mortgage-lead-mortgage-text-set-text-5': 'bbva-multistep-mortgage-lead-help-modal-terms-and-conditions-of-quotation-text-5',
                'manager-mortgage-lead-mortgage-text-set-font-type-5': 'body',
                'manager-mortgage-lead-mortgage-text-set-class-name-5': 'u-margin-bottom--1-5',
                'manager-mortgage-lead-mortgage-text-set-alignment-5': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-5': false,
                'manager-mortgage-lead-mortgage-text-set-text-6': 'bbva-multistep-mortgage-lead-help-modal-terms-and-conditions-of-quotation-text-6',
                'manager-mortgage-lead-mortgage-text-set-alignment-6': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-6': false,
                'manager-mortgage-lead-mortgage-text-set-hidden-7': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-8': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-9': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-10': true,
                'manager-mortgage-lead-mortgage-open-modal': true
              },
              creditHistoryConsultation: {
                'manager-mortgage-lead-mortgage-modal-set-full-height': true,
                'manager-mortgage-lead-mortgage-modal-set-expanded': true,
                'manager-mortgage-lead-mortgage-modal-set-header-type': 'modal-initial',
                'manager-mortgage-lead-mortgage-modal-set-header-text': 'bbva-multistep-mortgage-lead-help-modal-credit-history-consultation-header',
                'manager-mortgage-lead-mortgage-modal-set-title-icon': '',
                'manager-mortgage-lead-mortgage-modal-set-title-text': 'bbva-multistep-mortgage-lead-help-modal-credit-history-consultation-title',
                'manager-mortgage-lead-mortgage-modal-set-button-text': '',
                'manager-mortgage-lead-mortgage-panel-set-hidden': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-description': true,
                'manager-mortgage-lead-mortgage-text-set-text-1': 'bbva-multistep-mortgage-lead-help-modal-credit-history-consultation-text-1',
                'manager-mortgage-lead-mortgage-text-set-font-type-1': 'body',
                'manager-mortgage-lead-mortgage-text-set-class-name-1': 'u-margin-bottom--1-5',
                'manager-mortgage-lead-mortgage-text-set-alignment-1': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-1': false,
                'manager-mortgage-lead-mortgage-text-set-text-2': 'bbva-multistep-mortgage-lead-help-modal-credit-history-consultation-text-2',
                'manager-mortgage-lead-mortgage-text-set-alignment-2': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-2': false,
                'manager-mortgage-lead-mortgage-text-set-hidden-3': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-4': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-5': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-6': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-7': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-8': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-9': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-10': true,
                'manager-mortgage-lead-mortgage-open-modal': true
              },
              creditDestination: {
                'manager-mortgage-lead-mortgage-modal-set-full-height': true,
                'manager-mortgage-lead-mortgage-modal-set-expanded': true,
                'manager-mortgage-lead-mortgage-modal-set-header-type': 'modal-initial',
                'manager-mortgage-lead-mortgage-modal-set-header-text': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-header',
                'manager-mortgage-lead-mortgage-modal-set-title-icon': `${isSpherica ? 'spherica' : 'bbva'}:help`,
                'manager-mortgage-lead-mortgage-modal-set-title-text': '',
                'manager-mortgage-lead-mortgage-panel-set-hidden': true,
                'manager-mortgage-lead-mortgage-modal-set-button-text': '',
                'manager-mortgage-lead-mortgage-text-set-text-description': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-description',
                'manager-mortgage-lead-mortgage-text-set-hidden-description': false,
                'manager-mortgage-lead-mortgage-text-set-text-1': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-adquisition',
                'manager-mortgage-lead-mortgage-text-set-font-type-1': 'title-default',
                'manager-mortgage-lead-mortgage-text-set-class-name-1': '',
                'manager-mortgage-lead-mortgage-text-set-alignment-1': 'left',
                'manager-mortgage-lead-mortgage-text-set-hidden-1': false,
                'manager-mortgage-lead-mortgage-text-set-text-2': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-1',
                'manager-mortgage-lead-mortgage-text-set-alignment-2': 'left',
                'manager-mortgage-lead-mortgage-text-set-hidden-2': false,
                'manager-mortgage-lead-mortgage-text-set-text-3': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-2',
                'manager-mortgage-lead-mortgage-text-set-font-type-3': 'title-default',
                'manager-mortgage-lead-mortgage-text-set-class-name-3': '',
                'manager-mortgage-lead-mortgage-text-set-alignment-3': 'left',
                'manager-mortgage-lead-mortgage-text-set-hidden-3': false,
                'manager-mortgage-lead-mortgage-text-set-text-4': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-3',
                'manager-mortgage-lead-mortgage-text-set-alignment-4': 'left',
                'manager-mortgage-lead-mortgage-text-set-hidden-4': false,
                'manager-mortgage-lead-mortgage-text-set-text-5': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-4',
                'manager-mortgage-lead-mortgage-text-set-alignment-5': 'left',
                'manager-mortgage-lead-mortgage-text-set-font-type-5': 'title-default',
                'manager-mortgage-lead-mortgage-text-set-class-name-5': '',
                'manager-mortgage-lead-mortgage-text-set-hidden-5': false,
                'manager-mortgage-lead-mortgage-text-set-text-6': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-5',
                'manager-mortgage-lead-mortgage-text-set-alignment-6': 'left',
                'manager-mortgage-lead-mortgage-text-set-hidden-6': false,
                'manager-mortgage-lead-mortgage-text-set-text-7': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-6',
                'manager-mortgage-lead-mortgage-text-set-alignment-7': 'left',
                'manager-mortgage-lead-mortgage-text-set-font-type-7': 'title-default',
                'manager-mortgage-lead-mortgage-text-set-class-name-7': '',
                'manager-mortgage-lead-mortgage-text-set-hidden-7': false,
                'manager-mortgage-lead-mortgage-text-set-text-8': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-7',
                'manager-mortgage-lead-mortgage-text-set-alignment-8': 'left',
                'manager-mortgage-lead-mortgage-text-set-hidden-8': false,
                'manager-mortgage-lead-mortgage-text-set-text-9': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-8',
                'manager-mortgage-lead-mortgage-text-set-alignment-9': 'left',
                'manager-mortgage-lead-mortgage-text-set-font-type-9': 'title-default',
                'manager-mortgage-lead-mortgage-text-set-class-name-9': '',
                'manager-mortgage-lead-mortgage-text-set-hidden-9': false,
                'manager-mortgage-lead-mortgage-text-set-text-10': 'bbva-multistep-mortgage-lead-help-modal-credit-destination-text-9',
                'manager-mortgage-lead-mortgage-text-set-alignment-10': 'left',
                'manager-mortgage-lead-mortgage-text-set-hidden-10': false,
                'manager-mortgage-lead-mortgage-open-modal': true
              },
              recruitmentOrOpeningCommission: {
                'manager-mortgage-lead-mortgage-modal-set-full-height': false,
                'manager-mortgage-lead-mortgage-modal-set-expanded': false,
                'manager-mortgage-lead-mortgage-modal-set-header-type': 'modal-short',
                'manager-mortgage-lead-mortgage-modal-set-header-text': `bbva-multistep-mortgage-lead-help-modal-recruitment-or-opening-commission-header${isSpherica ? '-spherica' : ''}`,
                'manager-mortgage-lead-mortgage-modal-set-title-icon': `${isSpherica ? 'spherica' : 'bbva'}:help`,
                'manager-mortgage-lead-mortgage-modal-set-title-text': `bbva-multistep-mortgage-lead-help-modal-recruitment-or-opening-commission-title${isSpherica ? '-spherica' : ''}`,
                'manager-mortgage-lead-mortgage-modal-set-button-text': '',
                'manager-mortgage-lead-mortgage-panel-set-hidden': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-description': true,
                'manager-mortgage-lead-mortgage-text-set-text-1': 'bbva-multistep-mortgage-lead-help-modal-recruitment-or-opening-commission-text-1',
                'manager-mortgage-lead-mortgage-text-set-alignment-1': 'center',
                'manager-mortgage-lead-mortgage-text-set-font-type-1': 'body',
                'manager-mortgage-lead-mortgage-text-set-class-name-1': 'u-margin-bottom--1-5',
                'manager-mortgage-lead-mortgage-text-set-hidden-1': false,
                'manager-mortgage-lead-mortgage-text-set-text-2': 'bbva-multistep-mortgage-lead-help-modal-recruitment-or-opening-commission-text-2',
                'manager-mortgage-lead-mortgage-text-set-alignment-2': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-2': false,
                'manager-mortgage-lead-mortgage-text-set-hidden-3': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-4': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-5': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-6': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-7': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-8': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-9': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-10': true,
                'manager-mortgage-lead-mortgage-open-modal': true
              },
              commissionForCreditAuthorizationDeferred: {
                'manager-mortgage-lead-mortgage-modal-set-full-height': false,
                'manager-mortgage-lead-mortgage-modal-set-expanded': false,
                'manager-mortgage-lead-mortgage-modal-set-header-type': 'modal-short',
                'manager-mortgage-lead-mortgage-modal-set-header-text': `bbva-multistep-mortgage-lead-help-modal-commission-for-credit-authorization-deferred-header${isSpherica ? '-spherica' : ''}`,
                'manager-mortgage-lead-mortgage-modal-set-title-icon': `${isSpherica ? 'spherica' : 'bbva'}:help`,
                'manager-mortgage-lead-mortgage-modal-set-title-text': `bbva-multistep-mortgage-lead-help-modal-commission-for-credit-authorization-deferred-title${isSpherica ? '-spherica' : ''}`,
                'manager-mortgage-lead-mortgage-modal-set-button-text': '',
                'manager-mortgage-lead-mortgage-panel-set-hidden': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-description': true,
                'manager-mortgage-lead-mortgage-text-set-text-1': 'bbva-multistep-mortgage-lead-help-modal-commission-for-credit-authorization-deferred-text-1',
                'manager-mortgage-lead-mortgage-text-set-alignment-1': 'center',
                'manager-mortgage-lead-mortgage-text-set-font-type-1': 'body',
                'manager-mortgage-lead-mortgage-text-set-class-name-1': 'u-margin-bottom--1-5',
                'manager-mortgage-lead-mortgage-text-set-hidden-1': false,
                'manager-mortgage-lead-mortgage-text-set-text-2': 'bbva-multistep-mortgage-lead-help-modal-commission-for-credit-authorization-deferred-text-2',
                'manager-mortgage-lead-mortgage-text-set-alignment-2': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-2': false,
                'manager-mortgage-lead-mortgage-text-set-hidden-3': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-4': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-5': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-6': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-7': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-8': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-9': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-10': true,
                'manager-mortgage-lead-mortgage-open-modal': true
              },
              ordinaryFixedAndAnnualInterestRate: {
                'manager-mortgage-lead-mortgage-modal-set-full-height': false,
                'manager-mortgage-lead-mortgage-modal-set-expanded': false,
                'manager-mortgage-lead-mortgage-modal-set-header-type': 'modal-short',
                'manager-mortgage-lead-mortgage-modal-set-header-text': 'bbva-multistep-mortgage-lead-help-modal-ordinary-fixed-and-annual-interest-rate-header',
                'manager-mortgage-lead-mortgage-modal-set-title-text': 'bbva-multistep-mortgage-lead-help-modal-ordinary-fixed-and-annual-interest-rate-title',
                'manager-mortgage-lead-mortgage-modal-set-title-icon': `${isSpherica ? 'spherica' : 'bbva'}:help`,
                'manager-mortgage-lead-mortgage-modal-set-button-text': '',
                'manager-mortgage-lead-mortgage-panel-set-hidden': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-description': true,
                'manager-mortgage-lead-mortgage-text-set-text-1': 'bbva-multistep-mortgage-lead-help-modal-ordinary-fixed-and-annual-interest-rate-text-1',
                'manager-mortgage-lead-mortgage-text-set-alignment-1': 'center',
                'manager-mortgage-lead-mortgage-text-set-font-type-1': 'body',
                'manager-mortgage-lead-mortgage-text-set-class-name-1': 'u-margin-bottom--1-5',
                'manager-mortgage-lead-mortgage-text-set-hidden-1': false,
                'manager-mortgage-lead-mortgage-text-set-text-2': 'bbva-multistep-mortgage-lead-help-modal-ordinary-fixed-and-annual-interest-rate-text-2',
                'manager-mortgage-lead-mortgage-text-set-alignment-2': 'center',
                'manager-mortgage-lead-mortgage-text-set-hidden-2': false,
                'manager-mortgage-lead-mortgage-text-set-hidden-3': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-4': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-5': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-6': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-7': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-8': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-9': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-10': true,
                'manager-mortgage-lead-mortgage-open-modal': true
              },
              cat: {
                'manager-mortgage-lead-mortgage-modal-set-full-height': false,
                'manager-mortgage-lead-mortgage-modal-set-expanded': false,
                'manager-mortgage-lead-mortgage-modal-set-header-type': 'modal-short',
                'manager-mortgage-lead-mortgage-modal-set-header-text': 'bbva-multistep-mortgage-lead-help-modal-cat-header',
                'manager-mortgage-lead-mortgage-modal-set-title-icon': `${isSpherica ? 'spherica' : 'bbva'}:help`,
                'manager-mortgage-lead-mortgage-modal-set-title-text': 'bbva-multistep-mortgage-lead-help-modal-cat-title',
                'manager-mortgage-lead-mortgage-modal-set-button-text': '',
                'manager-mortgage-lead-mortgage-panel-set-hidden': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-description': true,
                'manager-mortgage-lead-mortgage-text-set-text-1': 'bbva-multistep-mortgage-lead-help-modal-cat-text-1',
                'manager-mortgage-lead-mortgage-text-set-alignment-1': 'center',
                'manager-mortgage-lead-mortgage-text-set-font-type-1': 'body',
                'manager-mortgage-lead-mortgage-text-set-class-name-1': 'u-margin-bottom--1-5',
                'manager-mortgage-lead-mortgage-text-set-hidden-1': false,
                'manager-mortgage-lead-mortgage-text-set-hidden-2': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-3': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-4': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-5': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-6': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-7': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-8': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-9': true,
                'manager-mortgage-lead-mortgage-text-set-hidden-10': true,
                'manager-mortgage-lead-mortgage-open-modal': true
              }
            }
          },
          cellsConnections: {
            in: {
              global_login_success: {
                bind: 'setCustomerPhoneNumber'
              },
              native_user_id: {
                bind: 'setNativePhoneNumber'
              },
              dashboard_customer_email: {
                bind: 'setUserEmail'
              },
              mortgage_init_page: {
                bind: 'init'
              },
              mortgage_modal_selector_item_selected: {
                bind: 'itemSelected'
              },
              mortgage_amount_changed: {
                bind: 'amountSelected'
              },
              mortgage_cl_slider_selected: {
                bind: 'sliderSelected'
              },
              mortgage_send_confirm: {
                bind: 'requestMortgageCredit'
              },
              mortgage_interaction_changed: {
                bind: 'interaction'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'exitMortgageLead'
              },
              mortgage_exit_page: {
                bind: 'exitMortgageLead'
              },
              mortgage_new_simulate: {
                bind: 'retryNewSimulate'
              },
              mortgage_show_mortgage_terms_and_conditions_of_quotation_modal: {
                bind: 'showMortgageTermsAndConditionsOfQuotationModal'
              },
              mortgage_show_mortgage_credit_history_consultation_modal: {
                bind: 'showMortgageCreditHistoryConsultationModal'
              },
              mortgage_show_mortgage_credit_destination_modal: {
                bind: 'showMortgageCreditDestinationModal'
              },
              mortgage_show_mortgage_recruitment_or_opening_commission_modal: {
                bind: 'showMortgageRecruitmentOrOpeningCommissionModal'
              },
              mortgage_show_mortgage_commission_for_credit_authorization_deferred_modal: {
                bind: 'showMortgageCommissionForCreditAuthorizationDeferredModal'
              },
              mortgage_show_mortgage_ordinary_fixed_and_annual_interest_rate_modal: {
                bind: 'showMortgageOrdinaryFixedAndAnnualInterestRateModal'
              },
              mortgage_show_mortgage_cat_modal: {
                bind: 'showMortgageCatModal'
              },
              [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
                bind: 'callMeBack'
              },
              mortgage_status: {
                bind: 'stepStatus'
              }
            },
            out: {
              mortgage_set_email: {
                bind: 'email-changed'
              },
              mortgage_currency_code_changed: {
                bind: 'currency-changed'
              },
              mortgage_open_control_veil: {
                bind: 'show-spinner'
              },
              mortgage_close_control_veil: {
                bind: 'hide-spinner'
              },
              mortgage_item_selected_changed: {
                bind: 'items-changed'
              },
              mortgage_cl_amount_data_changed: {
                bind: 'amount-data-changed'
              },
              mortgage_cl_slider_property_changed: {
                bind: 'slider-property-changed'
              },
              mortgage_cl_key_info_changed: {
                bind: 'key-info-changed'
              },
              mortgage_cl_sticky_data_changed: {
                bind: 'sticky-data-changed'
              },
              mortgage_cl_custom_message_changed: {
                bind: 'custom-message-changed'
              },
              mortgage_message_info_changed: {
                bind: 'message-info-changed'
              },
              mortgage_principal_list: {
                bind: 'principal-list-changed'
              },
              mortgage_amount_selected_changed: {
                bind: 'amount-selected-changed'
              },
              mortgage_slider_selected_changed: {
                bind: 'slider-selected-changed'
              },
              mortgage_mortgage_modal_set_header_text: {
                bind: 'manager-mortgage-lead-mortgage-modal-set-header-text'
              },
              mortgage_mortgage_modal_set_title_icon: {
                bind: 'manager-mortgage-lead-mortgage-modal-set-title-icon'
              },
              mortgage_mortgage_modal_set_title_text: {
                bind: 'manager-mortgage-lead-mortgage-modal-set-title-text'
              },
              mortgage_mortgage_modal_set_button_text: {
                bind: 'manager-mortgage-lead-mortgage-modal-set-button-text'
              },
              mortgage_mortgage_modal_set_full_height: {
                bind: 'manager-mortgage-lead-mortgage-modal-set-full-height'
              },
              mortgage_mortgage_modal_set_expanded: {
                bind: 'manager-mortgage-lead-mortgage-modal-set-expanded'
              },
              mortgage_mortgage_modal_set_header_type: {
                bind: 'manager-mortgage-lead-mortgage-modal-set-header-type'
              },
              mortgage_mortgage_panel_set_hidden: {
                bind: 'manager-mortgage-lead-mortgage-panel-set-hidden'
              },
              mortgage_mortgage_text_set_text_description: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-description'
              },
              mortgage_mortgage_text_set_class_name_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-1'
              },
              mortgage_mortgage_text_set_class_name_2: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-2'
              },
              mortgage_mortgage_text_set_class_name_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-3'
              },
              mortgage_mortgage_text_set_class_name_4: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-4'
              },
              mortgage_mortgage_text_set_class_name_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-5'
              },
              mortgage_mortgage_text_set_class_name_6: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-6'
              },
              mortgage_mortgage_text_set_class_name_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-7'
              },
              mortgage_mortgage_text_set_class_name_8: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-8'
              },
              mortgage_mortgage_text_set_class_name_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-9'
              },
              mortgage_mortgage_text_set_class_name_10: {
                bind: 'manager-mortgage-lead-mortgage-text-set-class-name-10'
              },
              mortgage_mortgage_text_set_hidden_description: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-description'
              },
              mortgage_mortgage_text_set_text_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-1'
              },
              mortgage_mortgage_text_set_alignment_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-1'
              },
              mortgage_mortgage_text_set_font_weight_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-1'
              },
              mortgage_mortgage_text_set_font_type_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-type-1'
              },
              mortgage_mortgage_text_set_font_type_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-type-3'
              },
              mortgage_mortgage_text_set_font_type_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-type-5'
              },
              mortgage_mortgage_text_set_font_type_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-type-7'
              },
              mortgage_mortgage_text_set_font_type_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-type-9'
              },
              mortgage_mortgage_text_set_text_color_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-1'
              },
              mortgage_mortgage_text_set_tag_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-1'
              },
              mortgage_mortgage_text_set_size_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-1'
              },
              mortgage_mortgage_text_set_hidden_1: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-1'
              },
              mortgage_mortgage_text_set_text_2: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-2'
              },
              mortgage_mortgage_text_set_alignment_2: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-2'
              },
              mortgage_mortgage_text_set_font_weight_2: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-2'
              },
              mortgage_mortgage_text_set_text_color_2: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-2'
              },
              mortgage_mortgage_text_set_tag_2: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-2'
              },
              mortgage_mortgage_text_set_size_2: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-2'
              },
              mortgage_mortgage_text_set_hidden_2: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-2'
              },
              mortgage_mortgage_text_set_text_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-3'
              },
              mortgage_mortgage_text_set_alignment_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-3'
              },
              mortgage_mortgage_text_set_font_weight_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-3'
              },
              mortgage_mortgage_text_set_text_color_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-3'
              },
              mortgage_mortgage_text_set_tag_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-3'
              },
              mortgage_mortgage_text_set_size_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-3'
              },
              mortgage_mortgage_text_set_hidden_3: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-3'
              },
              mortgage_mortgage_text_set_text_4: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-4'
              },
              mortgage_mortgage_text_set_alignment_4: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-4'
              },
              mortgage_mortgage_text_set_font_weight_4: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-4'
              },
              mortgage_mortgage_text_set_text_color_4: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-4'
              },
              mortgage_mortgage_text_set_tag_4: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-4'
              },
              mortgage_mortgage_text_set_size_4: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-4'
              },
              mortgage_mortgage_text_set_hidden_4: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-4'
              },
              mortgage_mortgage_text_set_text_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-5'
              },
              mortgage_mortgage_text_set_alignment_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-5'
              },
              mortgage_mortgage_text_set_font_weight_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-5'
              },
              mortgage_mortgage_text_set_text_color_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-5'
              },
              mortgage_mortgage_text_set_tag_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-5'
              },
              mortgage_mortgage_text_set_size_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-5'
              },
              mortgage_mortgage_text_set_hidden_5: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-5'
              },
              mortgage_mortgage_text_set_text_6: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-6'
              },
              mortgage_mortgage_text_set_alignment_6: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-6'
              },
              mortgage_mortgage_text_set_font_weight_6: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-6'
              },
              mortgage_mortgage_text_set_text_color_6: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-6'
              },
              mortgage_mortgage_text_set_tag_6: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-6'
              },
              mortgage_mortgage_text_set_size_6: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-6'
              },
              mortgage_mortgage_text_set_hidden_6: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-6'
              },
              mortgage_mortgage_text_set_hidden_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-7'
              },
              mortgage_mortgage_text_set_hidden_8: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-8'
              },
              mortgage_mortgage_text_set_hidden_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-9'
              },
              mortgage_mortgage_text_set_hidden_10: {
                bind: 'manager-mortgage-lead-mortgage-text-set-hidden-10'
              },
              mortgage_mortgage_open_modal: {
                bind: 'manager-mortgage-lead-mortgage-open-modal'
              },
              mortgage_mortgage_text_set_text_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-7'
              },
              mortgage_mortgage_text_set_alignment_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-7'
              },
              mortgage_mortgage_text_set_font_weight_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-7'
              },
              mortgage_mortgage_text_set_text_color_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-7'
              },
              mortgage_mortgage_text_set_tag_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-7'
              },
              mortgage_mortgage_text_set_size_7: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-7'
              },
              mortgage_mortgage_text_set_text_8: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-8'
              },
              mortgage_mortgage_text_set_alignment_8: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-8'
              },
              mortgage_mortgage_text_set_font_weight_8: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-8'
              },
              mortgage_mortgage_text_set_text_color_8: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-8'
              },
              mortgage_mortgage_text_set_tag_8: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-8'
              },
              mortgage_mortgage_text_set_size_8: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-8'
              },
              mortgage_mortgage_text_set_text_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-9'
              },
              mortgage_mortgage_text_set_alignment_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-9'
              },
              mortgage_mortgage_text_set_font_weight_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-9'
              },
              mortgage_mortgage_text_set_text_color_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-9'
              },
              mortgage_mortgage_text_set_tag_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-9'
              },
              mortgage_mortgage_text_set_size_9: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-9'
              },
              mortgage_mortgage_text_set_text_10: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-10'
              },
              mortgage_mortgage_text_set_alignment_10: {
                bind: 'manager-mortgage-lead-mortgage-text-set-alignment-10'
              },
              mortgage_mortgage_text_set_font_weight_10: {
                bind: 'manager-mortgage-lead-mortgage-text-set-font-weight-10'
              },
              mortgage_mortgage_text_set_text_color_10: {
                bind: 'manager-mortgage-lead-mortgage-text-set-text-color-10'
              },
              mortgage_mortgage_text_set_tag_10: {
                bind: 'manager-mortgage-lead-mortgage-text-set-tag-10'
              },
              mortgage_mortgage_text_set_size_10: {
                bind: 'manager-mortgage-lead-mortgage-text-set-size-10'
              },
              mortgage_show_review: {
                bind: 'show-certificate-success',
                analytics: ANALYTICS_MORTGAGE_LEAD.APP_COMPLETED_MORTGAGE_REVIEW
              },
              mortgage_review_set_date: {
                bind: 'success-text'
              },
              mortgage_review_set_list_definition_data_email: {
                bind: 'success-data-email-items'
              },
              mortgage_review_set_list_definition_data_email_hidden: {
                bind: 'success-data-email-hidden'
              },
              mortgage_review_set_notification_message: {
                bind: 'success-notification-message'
              },
              mortgage_review_set_notification_message_description: {
                bind: 'success-notification-message-description'
              },
              mortgage_review_set_requested_amount: {
                bind: 'success-requested-amount'
              },
              mortgage_review_set_installment_amount: {
                bind: 'success-installment-amount'
              },
              mortgage_review_set_term: {
                bind: 'success-term'
              },
              mortgage_review_set_credit_destination: {
                bind: 'success-credit-destination'
              },
              mortgage_review_set_opening_commission: {
                bind: 'success-opening-commission'
              },
              mortgage_review_set_deferred_commission: {
                bind: 'success-deferred-commission'
              },
              mortgage_review_set_monthly_rate: {
                bind: 'success-monthly-rate'
              },
              mortgage_review_set_cat: {
                bind: 'success-cat'
              },
              mortgage_review_set_expiration_date: {
                bind: 'success-expiration-date'
              },
              mortgage_review_set_folio: {
                bind: 'success-folio'
              },
              mortgage_review_set_microillustration: {
                bind: 'success-microillustration'
              },
              mortgage_review_set_button_call_options: {
                bind: 'success-button-call-options'
              },
              mortgage_analytic_app_page_visit: {
                bind: 'mortgage-lead-suggested-amount',
                analytics: ANALYTICS_MORTGAGE_LEAD.APP_PAGE_VISIT_SIMULATOR_STEP
              },
              mortgage_analytic_app_step_4: {
                bind: 'mortgage-lead-otp-request-opened',
                analytics: ANALYTICS_MORTGAGE_LEAD.APP_STEP_OTP_STEP
              },
              global_custom_error: {
                bind: 'open-mortgage-exit-confirm-modal'
              },
              mortgage_back_navigate_request: {
                bind: 'mortgage-lead-exit'
              },
              global_retry_error: {
                bind: 'retry-simulator'
              },
              global_retargeting_go_next_step: {
                bind: 'mortgage-lead-otp-request-opened'
              },
              global_retargeting_amount_data_changed: {
                bind: 'amount-data-changed'
              },
              global_retargeting_sticky_data_changed: {
                bind: 'sticky-data-changed'
              },
              global_retargeting_slider_property_changed: {
                bind: 'slider-property-changed'
              },
              global_retargeting_key_info_changed: {
                bind: 'key-info-changed'
              },
              global_retargeting_set_folio: {
                bind: 'success-folio'
              },
              mortgage_step_update: {
                bind: 'mortgage-step-update'
              }
            },
            params: {
              offerId: 'offerId'
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            remove: {
              out: [
                'mortgage_review_set_list_definition_data_email_hidden',
                'mortgage_review_set_button_call_options',
                'global_custom_error'
              ]
            },
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'open-mortgage-exit-confirm-modal'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'bbva-help-modal',
        tagSpherica: 'bbva-help-modal-spherica',
        familyPath: '@bbva-web-components/bbva-help-modal',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        container: true,
        properties: {
          id: 'mortgage',
          fullHeight: false,
          fixedFooter: true,
          headerType: 'modal-initial',
          hideContentPaddingTop: true,
          closeLabel: 'bbva-header-main-close-aria-label',
          cellsConnections: {
            in: {
              mortgage_mortgage_open_modal: {
                bind: 'open'
              },
              mortgage_mortgage_modal_set_header_text: {
                bind: 'headerText'
              },
              mortgage_mortgage_modal_set_title_icon: {
                bind: 'titleIcon'
              },
              mortgage_mortgage_modal_set_title_text: {
                bind: 'titleText'
              },
              mortgage_mortgage_modal_set_button_text: {
                bind: 'buttonText'
              },
              mortgage_mortgage_modal_set_full_height: {
                bind: 'fullHeight'
              },
              mortgage_mortgage_modal_set_expanded: {
                bind: 'expanded'
              },
              mortgage_mortgage_modal_set_header_type: {
                bind: 'headerType'
              }
            },
            out: {
              mortgage_mortgage_footer_button_click: {
                bind: 'help-modal-footer-button-click'
              },
              mortgage_mortgage_footer_link_click: {
                bind: 'help-modal-footer-link-click'
              }
            }
          }
        }
      },
      {
        zone: 'mortgage.slot-content',
        type: 'UI',
        tag: 'div',
        render: 'litElement',
        container: true,
        properties: {
          id: 'mortgageBodyText'
        }
      },
      ...(isSpherica ? [ {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-type-text-spherica',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageTextDescription',
          hidden: true,
          alignment: 'center',
          tag: 'span',
          className: 'u-margin-bottom--2',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_text_description: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_description: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_hidden_description: {
                bind: 'hidden'
              }
            }
          }
        }
      } ] : []),
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText1',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_class_name_1: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_1: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_1: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_1: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_font_type_1: {
                bind: 'fontType'
              },
              mortgage_mortgage_text_set_text_color_1: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_1: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_1: {
                bind: 'size'
              },
              mortgage_mortgage_text_set_hidden_1: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText2',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_class_name_2: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_2: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_2: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_2: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_text_color_2: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_2: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_2: {
                bind: 'size'
              },
              mortgage_mortgage_text_set_hidden_2: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText3',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_class_name_3: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_3: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_3: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_3: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_font_type_3: {
                bind: 'fontType'
              },
              mortgage_mortgage_text_set_text_color_3: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_3: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_3: {
                bind: 'size'
              },
              mortgage_mortgage_text_set_hidden_3: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText4',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_class_name_4: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_4: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_4: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_4: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_text_color_4: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_4: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_4: {
                bind: 'size'
              },
              mortgage_mortgage_text_set_hidden_4: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText5',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'uu-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_class_name_5: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_5: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_5: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_5: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_font_type_5: {
                bind: 'fontType'
              },
              mortgage_mortgage_text_set_text_color_5: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_5: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_5: {
                bind: 'size'
              },
              mortgage_mortgage_text_set_hidden_5: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText6',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_class_name_6: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_6: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_6: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_6: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_text_color_6: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_6: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_6: {
                bind: 'size'
              },
              mortgage_mortgage_text_set_hidden_6: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText7',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_hidden_7: {
                bind: 'hidden'
              },
              mortgage_mortgage_text_set_class_name_7: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_7: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_7: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_7: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_font_type_7: {
                bind: 'fontType'
              },
              mortgage_mortgage_text_set_text_color_7: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_7: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_7: {
                bind: 'size'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText8',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_hidden_8: {
                bind: 'hidden'
              },
              mortgage_mortgage_text_set_class_name_8: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_8: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_8: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_8: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_text_color_8: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_8: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_8: {
                bind: 'size'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText9',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_hidden_9: {
                bind: 'hidden'
              },
              mortgage_mortgage_text_set_class_name_9: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_9: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_alignment_9: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_9: {
                bind: 'fontWeight'
              },
              mortgage_mortgage_text_set_font_type_9: {
                bind: 'fontType'
              },
              mortgage_mortgage_text_set_text_color_9: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_9: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_9: {
                bind: 'size'
              }
            }
          }
        }
      },
      {
        zone: 'mortgageBodyText.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text-spherica',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'mortgageText10',
          fontType: 'body',
          size: 'M',
          tag: 'span',
          className: 'u-margin-bottom--1-5',
          cellsConnections: {
            in: {
              mortgage_mortgage_text_set_text_10: {
                bind: 'text'
              },
              mortgage_mortgage_text_set_class_name_10: {
                bind: 'className'
              },
              mortgage_mortgage_text_set_text_color_10: {
                bind: 'textColor'
              },
              mortgage_mortgage_text_set_tag_10: {
                bind: 'tag'
              },
              mortgage_mortgage_text_set_size_10: {
                bind: 'size'
              },
              mortgage_mortgage_text_set_hidden_10: {
                bind: 'hidden'
              },
              mortgage_mortgage_text_set_alignment_10: {
                bind: 'alignment'
              },
              mortgage_mortgage_text_set_font_weight_10: {
                bind: 'fontWeight'
              }
            }
          }
        }
      }
    ]
  };

  const signConnector = require('./common/_sign-connector.js')(CONFIG)(base);
  signConnector('bbva-manager-mortgage-lead', PAGENAME, ['post-proposal-v1-success', 'post-proposal-v1-error', 'api-dm-error']);


  addCommonErrors(base.components)();
  addRetryErrors(base)([{
    id: 'ERROR-MORTGAGE-SIMULATION',
    acceptRetry: { bind: 'retrySimulate', component: 'bbva-manager-mortgage-lead' },
    cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
    acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
  }, {
    id: 'ERROR-MORTGAGE-NEW-SIMULATION',
    acceptRetry: { bind: 'retryNewSimulate', component: 'bbva-manager-mortgage-lead' },
    cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
    acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
  }, {
    id: 'ERROR-MORTGAGE-PROPOSALS',
    acceptRetry: { bind: 'requestMortgageCredit', component: 'bbva-manager-mortgage-lead' },
    cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
    acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
  }]);

  return sphericaPageUtils.spherize(base);
};
