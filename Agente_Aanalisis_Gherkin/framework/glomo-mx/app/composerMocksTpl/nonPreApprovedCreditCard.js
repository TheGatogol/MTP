/* eslint-disable no-dupe-keys */
'use strict';

module.exports = CONFIG => {
  const UTILS = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName } = UTILS;
  const isNativeIos = CONFIG.nativeIos || false;
  const { SPINNERSPHERICA: getSpinnerSpherica } = require('./common/helpers/_utils');
  const spinner = getSpinnerSpherica(CONFIG);
  spinner.properties = {
    className: 'solid-spinner'
  };

  delete spinner.propertiesSpherica;

  const PAGE_NAME = 'nonPreApprovedCreditCard';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const LOCAL_CURRENCY = UTILS.getLocalCurrency(CONFIG);
  const language = UTILS.getLanguage(CONFIG);
  const ANALYTICS = require('./analytics/_nonPreApprovedCreditCardBureau')(CONFIG);

  const base = {
    currentPage: {
      url: '/non-pre-approved-credit-card'
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        hasFooter: false,
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: '',
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      spinner,
      {
        zone: 'app__header',
        tag: 'cells-molecule-header-spherica',
        type: 'UI',
        properties: {
          variant: 'primary',
          rightIcon: 'coronita:close',
          rightIconSize: '24',
          className: '',
          rightIconText: 'non-preapproved-credit-card-bureau–header-close-icon-text',
          cellsConnections: {
            in: {
              non_pre_approved_credit_card__set_header_properties: {
                bind: 'setProperties'
              }
            },
            out: {
              global_retargeting_reset_step: {
                bind: 'click-right-button'
              },
              non_pre_approved_credit_card__exit_header: {
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
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_nonPreApprovedCreditCard: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('_init')]: {
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
        zone: 'app__overlay',
        tag: 'cells-modal-help-spherica',
        type: 'UI',
        properties: {
          alertBoxClass: 'left-aligned-text',
          iconClass: 'icon-size-80',
          fullHeight: false,
          alertBoxClassAcceptButton: 'white-core-blue',
          className: 'no-margin-text-description',
          iOSFixedHeader: isNativeIos,
          cellsConnections: {
            in: {
              [getChannelName(
                '_set_credit_card_history_help_modal_properties'
              )]: {
                bind: 'selectedConfig'
              },
              [getChannelName('_open_rates_info_modal')]: {
                bind: 'open'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        tag: 'cells-modal-card-advice-spherica',
        type: 'UI',
        properties: {
          iconSize: '20',
          className: 'centered-icon-header xl-title-text no-image-card no-content-intermediate half-modal',
          cardAdviceClass: 'content-description set-margin-top',
          cellsConnections: {
            in: {
              [getChannelName('_open_modal_card_advice')]: {
                bind: 'openWithConfig'
              }
            },
            out: {
              [getChannelName('_on_close_event')]: {
                bind: 'cells-confirm-buttons-click-primary',
                backStep: true
              },
              global_retargeting_send_information_update: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              [getChannelName('_on_close_event')]: {
                bind: 'close',
                backStep: true
              },
              [getChannelName('_on_icon_click')]: {
                bind: 'on-icon-click-place',
                link: {
                  page: 'atmLocator'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-loan-offer-spherica',
        properties: {
          buttonType: 'positive',
          hideContent: true,
          localCurrency: LOCAL_CURRENCY,
          currencyCode: LOCAL_CURRENCY,
          active: true,
          enableSticky: false,
          autoFormat: true,
          sliderProperty: false,
          messageInfo: false,
          disableDecimal: false,
          hideDecimal: true,
          hideSecondaryButton: true,
          textButtonAccepted:
            'non-pre-approved-credit-card-bureau-continue-button',
          cellsConnections: {
            in: {
              [getChannelName('_set_loan_offer_properties')]: {
                bind: 'setProperties'
              }
            },
            out: {
              [getChannelName('_annuity_icon_clicked')]: {
                bind: 'modals-event'
              },
              [getChannelName('_on_click_continue_button')]: {
                bind: 'btn-continue-hiring-apply'
              },
              open_control_veil: {
                bind: 'btn-continue-hiring-apply'
              },
              [getChannelName('_on_change_input_amount')]: {
                bind: 'input-amount-user'
              },
              [getChannelName('_on_input_focus')]: {
                bind: 'input-focus'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards',
        properties: {
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cardsV1,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native,
          otpId: PAGE_NAME,
          cellsConnections: {
            in: {
              [getChannelName('_get_card_offer')]: {
                bind: 'getCardOffer'
              },
              [getChannelName('_POST_CARD_PROPOSALS')]: {
                bind: 'postCardProposals'
              }
            },
            out: {
              [getChannelName('_get_card_offer_successful_response')]: {
                bind: 'get-card-offer-data-success'
              },
              [getChannelName('_get_card_offer_error_response')]: {
                bind: 'get-card-offer-error'
              },
              [getChannelName('_SET_CARD_PROPOSALS')]: {
                bind: 'set-card-proposals'
              },
              [getChannelName('_ERROR_ON_GET_CARD_PROPOSALS')]: {
                bind: 'error-on-get-card-proposals'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-non-preapproved-credit-card-manager',
        properties: {
          isSpherica: true,
          alertBoxVariant: 'primary-alt',
          images: {
            creditCardDollar:
              './images/nonPreApprovedCreditCard/credit_card_dollar.svg',
            requestCancelledImage:
              './images/nonPreApprovedCreditCard/request_cancelled.svg',
            noOffer: './images/nonPreApprovedCreditCard/No-offer.svg'
          },
          cellsConnections: {
            in: {
              [getChannelName('_init')]: {
                bind: 'initPage'
              },
              global_set_app_settings: {
                bind: 'setAppSettingsParams'
              },
              contract_product_section_oc_banner_non_preapproved_credit_card_clicked:
              {
                bind: 'offerDetail'
              },
              'contract_product_section_oc_banner_non-preapproved-credit-card_clicked':
              {
                bind: 'offerDetail'
              },
              [getChannelName('_annuity_icon_clicked')]: {
                bind: 'setAnnuityIconModalProperties'
              },
              [getChannelName('_exit_header')]: {
                bind: 'manageBackButton'
              },
              [getChannelName('_on_click_continue_button')]: {
                bind: 'onClickLoanOfferContinueButton'
              },
              [getChannelName('_on_change_input_amount')]: {
                bind: 'updateCardOfferAmount'
              },
              global_non_preapproved_credit_card_on_accept_exit_offer_detail: {
                bind: 'setResetProperties'
              },
              [getChannelName('_get_card_offer_successful_response')]: {
                bind: 'getCardOfferSuccessfulResponse'
              },
              [getChannelName('_get_card_offer_error_response')]: {
                bind: 'getCardOfferErrorResponse'
              },
              [getChannelName('_SET_CARD_PROPOSALS')]: {
                bind: 'proposalCreateSuccessModal'
              }
            },
            out: {
              global_alert_manager_open_with_settings_spherica: {
                bind: 'show-close-confirm'
              },
              [getChannelName('_set_loan_offer_properties')]: {
                bind: 'set-loan-offer-properties'
              },
              [getChannelName('_set_card_name_and_amount')]: {
                bind: 'set-card-name-and-amount'
              },
              [getChannelName('_set_header_properties')]: {
                bind: 'set-header-properties'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              [getChannelName(
                '_set_credit_card_history_help_modal_properties'
              )]: {
                bind: 'set-credit-history-help-modal-properties'
              },
              [getChannelName('_open_rates_info_modal')]: {
                bind: 'open-credit-history-help-modal'
              },
              [getChannelName('_POST_CARD_PROPOSALS')]: {
                bind: 'send-credit-card-offer-to-new-page'
              },
              [getChannelName('_set_origin')]: {
                bind: 'set-origin'
              },
              [getChannelName('_get_card_offer')]: {
                bind: 'get-card-offer'
              },
              [getChannelName('_open_modal_card_advice')]: {
                bind: 'open-with-config-modal-card-advice'
              },
              global_retargeting_contracted_product: {
                bind: 'open-with-config-modal-card-advice'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-non-pre-approved-credit-card',
        familyPath:
          '@glomo-web-components/bbva-manager-non-pre-approved-credit-card',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          language,
          featureFlag: 'glomo.offers.nonPreApprovedCreditCard.HDT',
          cellsConnections: {
            params: {
              clientId: 'global_user_id'
            },
            in: {
              request_client_id: {
                bind: 'clientId'
              },
              global_device_get_manufacturer_success: {
                bind: 'setDeviceManufacturer'
              },
              global_device_get_device_model_success: {
                bind: 'setDeviceModel'
              },
              global_device_get_device_platform_success: {
                bind: 'setDevicePlatform'
              },
              global_device_get_network_type_success: {
                bind: 'setDeviceNetworInfo'
              },
              NPA_DEVICE_GEOLOCATION: {
                bind: 'setGeolocation'
              },
              [getChannelName('_on_click_continue_button')]: {
                bind: 'postRiskAssessmentV1'
              },
              global_feature_flag_collection_updated: {
                bind: 'enableFeatureFlag'
              },
              contract_product_section_oc_banner_non_preapproved_credit_card_clicked: {
                bind: 'requestOpenWebFlag'
              }
            },
            out: {
              [getChannelName('post_risk_assessment')]: {
                bind: 'risk-assessment-v1'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-risks',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native,
          cellsConnections: {
            in: {
              [getChannelName('post_risk_assessment')]: {
                bind: 'postDevicesRiskAssessment'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-non-preapproved-credit-card-manager',
        tag: 'glomo-analytics-non-preapproved-credit-card-manager',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_open_modal_card_advice')]: {
                bind: 'setAppCompleted'
              },
              [getChannelName('_set_card_name_and_amount')]: {
                bind: 'setAppPageVisit'
              },
              [getChannelName('_on_input_focus')]: {
                bind: 'setAppStarted'
              },
              [getChannelName('_set_origin')]: {
                bind: 'setAppStarted'
              }
            },
            out: {
              npa_credit_card_app_page_visit: {
                bind: 'set-app-page-visit',
                analytics: ANALYTICS.APP_PAGE_VISIT
              },
              npa_credit_card_app_started: {
                bind: 'set-app-started',
                analytics: ANALYTICS.APP_STARTED
              },
              npa_credit_card_app_completed: {
                bind: 'set-app-completed',
                analytics: ANALYTICS.APP_COMPLETED
              }
            }
          }
        }
      }
    ]
  };

  base.components.push({
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
        out: {
          global_non_preapproved_credit_card_exit_accept_spherica: {
            bind: 'alert-NPA-CREDIT-CARD-MANAGER-EXIT-accept',
            backStep: true
          },
          global_non_preapproved_pro_credit_card_on_accept_exit_offer_detail: {
            bind: 'alert-NPA-PROPOSAL-SUCCESS-accept',
            backStep: true
          },
          global_non_preapproved_pro_credit_card_on_cancel_exit_offer_detail: {
            bind: 'alert-NPA-PROPOSAL-SUCCESS-cancel',
            backStep: true
          }
        }
      }
    }
  });


  const singConnector = require('./common/_sign-connector')(CONFIG)(base);
  singConnector('cells-dm-global-apis-cards', PAGE_NAME, [
    'set-card-proposals',
    'error-on-get-card-proposals'
  ]);

  return base;
};
