/* eslint-disable max-statements, no-dupe-keys, no-shadow */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'blackhawkPurchaseDetail';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const { useNames, createPrefixFromPageName } = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();
  const getLocalePrefix = name => `glomo-${getLocaleName(name)}`;
  const isNativeIos = CONFIG.nativeIos || false;
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const MAX_STEPS = 4;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const detailDownloadParams = utils.detailDownloadParams;
  const GLOMO_OPEN_DOCUMENT = utils.glomoOpenDocument(CONFIG);
  const ANALYTICS = require('./analytics/_blackhawkPurchaseDetail')(CONFIG);
  const {
    globalServices: {
      requiredToken = 'tsec',
      host,
      versions: {
        paymentsV1 = '1',
        customersV1
      }
    },
    native = 'false'
  } = CONFIG;
  const modalPurchaseDetailItems = {
    'confirm-exit-purchase': {
      code: 'confirm-exit-purchase',
      maximize: false,
      className: 'error',
      closeOnPrimaryButton: true,
      acceptBtLabel: 'there-is-no-system-exit',
      cancelBtLabel: 'glomo-blackhawk-purchase-detail-continue-operation',
      values: [
        { icon: 'coronita:alert', iconClass: 'icon-size-24', class: 'info' },
        { text: 'glomo-blackhawk-purchase-detail-exit-operation', class: 'text-center title-grey' }
      ]
    }
  };
  const modalPurchaseDetailItemsSpherica = {
    'confirm-exit-purchase': {
      code: 'confirm-exit-purchase',
      maximize: false,
      className: 'caution',
      title: 'glomo-blackhawk-purchase-detail-modal-items-title-spherica',
      closeIcon: 'coronita:close',
      iconOnlyFullHeight: false,
      hideCloseIcon: false,
      disableDivider: true,
      iOSFixedHeader: true,
      acceptBtLabel: 'there-is-no-system-exit',
      cancelBtLabel: 'glomo-blackhawk-purchase-detail-continue-operation-spherica',
      values: [
        { icon: 'coronita:caution', iconClass: 'icon-size-24' },
        { title: 'glomo-facial-recognition-back-to-login-modal-title-message-modal' },
        { text: 'glomo-blackhawk-purchase-detail-exit-operation-spherica', class: 'text-center title-grey' }
      ]
    }
  };
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-info-modal'
          }
        },
        out: {
          global_blackhawk_purchase_detail_exit_operative: {
            bind: 'alert-confirm-exit-purchase-accept'
          }
        }
      }
    }
  };
  const informationBrands = {
    'Google Play': {
      title: 'glomo-gift-card-brand-subtitle-GOOGLE-PLAY',
      bullets: [
        'glomo-gift-card-brand-subtitle-GOOGLE-PLAY-item1'
      ]
    },
    'Xbox Gift Card': {
      title: 'glomo-gift-card-brand-subtitle-XBOX-GIFT-CARD',
      bullets: [
        'glomo-gift-card-brand-subtitle-XBOX-GIFT-CARD-item1'
      ]
    },
    'Xbox Live Gold': {
      title: 'glomo-gift-card-brand-subtitle-XBOX-LIVE-GOLD',
      bullets: [
        'glomo-gift-card-brand-subtitle-XBOX-LIVE-GOLD-item1'
      ]
    },
    'Xbox Game Pass': {
      title: 'glomo-gift-card-brand-subtitle-XBOX-GAME-PASS',
      bullets: [
        'glomo-gift-card-brand-subtitle-XBOX-GAME-PASS-item1'
      ]
    },
    'Xbox Game Pass Ultimate': {
      title: 'glomo-gift-card-brand-subtitle-XBOX-GAME-PASS-ULTIMATE',
      bullets: [
        'glomo-gift-card-brand-subtitle-XBOX-GAME-PASS-ULTIMATE-item1'
      ]
    },
    'Xbox Game Ultimate': {
      title: 'glomo-gift-card-brand-subtitle-XBOX-GAME-ULTIMATE',
      bullets: [
        'glomo-gift-card-brand-subtitle-XBOX-GAME-ULTIMATE-item1'
      ]
    },
    'Amazon': {
      title: 'glomo-gift-card-brand-subtitle-AMAZON',
      bullets: [
        'glomo-gift-card-brand-subtitle-AMAZON-item1',
        'glomo-gift-card-brand-subtitle-AMAZON-item2'
      ]
    },
    'PlayStation': {
      title: 'glomo-gift-card-brand-subtitle-PLAYSTATION',
      bullets: [
        'glomo-gift-card-brand-subtitle-PLAYSTATION-item1',
        'glomo-gift-card-brand-subtitle-PLAYSTATION-item2'
      ]
    },
    'Uber': {
      title: 'glomo-gift-card-brand-subtitle-UBER',
      bullets: [
        'glomo-gift-card-brand-subtitle-UBER-item1'
      ]
    },
    'Uber Eats': {
      title: 'glomo-gift-card-brand-subtitle-UBER-EATS',
      bullets: [
        'glomo-gift-card-brand-subtitle-UBER-EATS-item1'
      ]
    },
    'Spotify': {
      title: 'glomo-gift-card-brand-subtitle-SPOTIFY',
      bullets: [
        'glomo-gift-card-brand-subtitle-SPOTIFY-item1'
      ]
    },
    'Microsoft Office': {
      title: 'glomo-gift-card-brand-subtitle-MICROSOFT-OFFICE',
      bullets: [
        'glomo-gift-card-brand-subtitle-MICROSOFT-OFFICE-item1'
      ]
    },
    'Battle.Net': {
      title: 'glomo-gift-card-brand-subtitle-BATTLE.NET',
      bullets: [
        'glomo-gift-card-brand-subtitle-BATTLE.NET-item1'
      ]
    },
    'Minecraft': {
      title: 'glomo-gift-card-brand-subtitle-MINECRAFT',
      bullets: [
        'glomo-gift-card-brand-subtitle-MINECRAFT-item1'
      ]
    },
    'Deezer': {
      title: 'glomo-gift-card-brand-subtitle-DEEZER',
      bullets: [
        'glomo-gift-card-brand-subtitle-DEEZER-item1'
      ]
    }
  };
  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      animationType: 'verticalUp',
      preventScrollWithOverlay: true,
      className: 'bg-core-blue hide-inactive-steps',
      extraHeaderClass: 'header--core',
      topOnConfirm: true,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [getGlobalName('cells_scroll_zone')]: {
            bind: 'scrollItemIntoView'
          },
          [getGlobalName('all_steps_scroll')]: {
            bind: 'scrollItemIntoView'
          },
          [getGlobalName('next_step')]: {
            bind: 'scrollItemIntoView'
          },
          [getGlobalName('show_confirm_offer_page')]: {
            bind: 'showConfirm'
          },
          [getGlobalName('hidden_show_confirm')]: {
            bind: 'showConfirm'
          }
        },
        out: {
          [getGlobalName('scroll-complete')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    },
    propertiesSpherica: {
      headerFixed: true,
      iOSFixedHeader: true
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          },
          [getGlobalName('navigate_to_blackhawkPurchaseReview')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          [getGlobalName('exit_steps_completed')]: {
            bind: 'reset'
          }
        }
      }
    }
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: getLocalePrefix('exit-purchase'),
      cellsConnections: {
        in: {
          [getGlobalName('navigate_to_success_review')]: {
            bind: 'navigateToPage'
          },
          [getGlobalName('exit_to_purchase')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getGlobalName('good_bye')]: {
            bind: getLocalePrefix('exit-purchase'),
            backStep: true
          },
          [getGlobalName('navigate_to_blackhawkPurchaseReview')]: {
            bind: 'navigation-to-blackhawkPurchaseReview',
            link: {
              page: 'blackhawkPurchaseReview',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: `header--core ${ isNativeIos ? 'ios-top-padding' : ''}`,
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          [getGlobalName('set_header_title')]: {
            bind: 'titleName'
          }
        },
        out: {
          [getGlobalName('click_exit_detail')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };
  const opxPurchaseDetailDM = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-opx-purchase-gift-card-manager',
    tag: 'glomo-opx-purchase-gift-card-manager-mx',
    properties: {
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: true,
      cellsConnections: {
        in: {
          [getGlobalName('register_step_contract')]: {
            bind: 'registerStep'
          },
          [getGlobalName('register_step_accounts')]: {
            bind: 'registerStep'
          },
          [getGlobalName('register_step_custom_operation')]: {
            bind: 'registerStep'
          },
          [getGlobalName('register_step_card')]: {
            bind: 'registerStep'
          },
          [getGlobalName('next_step')]: {
            bind: 'goToNext'
          },
          [getGlobalName('force_next_step')]: {
            bind: 'goToNext'
          },
          [getGlobalName('all_steps_collapsed')]: {
            bind: 'onAnyStepCollapsedChanged'
          },
          [getGlobalName('manage_step')]: {
            bind: 'goToStep'
          },
          [getGlobalName('amount_selected_insuficient')]: {
            bind: 'resetFollowingSteps'
          },
          [getGlobalName('change_pressed_all_steps_collapsed')]: {
            bind: 'onAnyStepCollapsedChanged'
          },
          [getGlobalName('dont_change_continue_all')]: {
            bind: 'onAnyStepCollapsedChanged'
          },
          [getGlobalName('dont_change_continue')]: {
            bind: 'goToNext'
          },
          [getGlobalName('set_reset')]: {
            bind: 'resetWithDefaultSettings'
          },
          [getGlobalName('scroll-complete')]: {
            bind: 'scrollComplete'
          },
          steps_data_blackhawk: {
            bind: 'dataBlue'
          },
          blackhawk_purchase_detail_terms_checkbox_unchecked: {
            bind: 'onTermsUnchecked'
          }
        },
        out: {
          [getGlobalName('cells_scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getGlobalName('all_steps_scroll')]: {
            bind: 'cells-all-steps-scroll'
          },
          [getGlobalName('show_confirm_offer_page')]: {
            bind: 'all-steps-collapsed-changed'
          },
          send_amount_blue_data_opx: {
            bind: 'send-amount-blue'
          },
          send_cardClicked_blue_data_opx: {
            bind: 'send-card-clicked'
          },
          send_product_blue_data_opx: {
            bind: 'send-product-blue'
          }
        }
      }
    }
  };
  const purchaseDetailDM = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-gift-card-manager',
    tag: 'glomo-gift-card-manager-purchase-detail-mx',
    properties: {
      modalRechargeItems: modalPurchaseDetailItems,
      informationBrands: informationBrands,
      localCurrency: LOCAL_CURRENCY,
      host,
      native,
      apiVersion: paymentsV1,
      requiredToken,
      phoneNumber: CONFIG.phoneNumberContact,
      detailDownloadConfig: detailDownloadParams,
      maxCustomLimit: 1500,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'init'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          global_blackhawk_purchase_cells_oc_banner_button_event_card_selected: {
            bind: 'mappedProducts'
          },
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          global_mtu_exception_back_navigation: {
            bind: 'mtuFlag'
          },
          [getGlobalName('exit_steps_completed')]: {
            bind: 'resetComplete'
          },
          [getGlobalName('card_clicked')]: {
            bind: 'cardClicked'
          },
          [getGlobalName('validate_custom_step')]: {
            bind: 'validateNextStep'
          },
          [getGlobalName('save_amount_value')]: {
            bind: 'otherAmountSelected'
          },
          [getGlobalName('account_selected')]: {
            bind: 'accountSelected'
          },
          [getGlobalName('accepted_final_amount')]: {
            bind: 'requestCardPurchase'
          },
          [getGlobalName('card_info_detail')]: {
            bind: 'detailCardClicked'
          },
          [getGlobalName('click_exit_detail')]: {
            bind: 'openModalExit'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'openModalExit'
          },
          global_login_success_indicators: {
            bind: 'requestEmail'
          },
          [getGlobalName('error_on_get_customer_detail')]: {
            bind: 'errorCustomerDetail'
          },
          [getGlobalName('set_customer_detail')]: {
            bind: 'getEmail'
          },
          [getGlobalName('show_confirm_offer_page')]: {
            bind: 'showMessage'
          },
          [getGlobalName('exit_operative')]: {
            bind: 'exitToPurchase'
          },
          [getGlobalName('card_unchecked')]: {
            bind: 'reset'
          },
          [getGlobalName('request_pdf')]: {
            bind: 'requestDocumentGlobal'
          },
          [getGlobalName('purchase_error_payment')]: {
            bind: 'errorResponsePayment'
          },
          [getGlobalName('success_post_bd')]: {
            bind: 'successPostRequestBussDoc'
          },
          [getGlobalName('error_post_bd')]: {
            bind: 'errorPostRequestBussDoc'
          },
          [getGlobalName('enable_variable_amount')]: {
            bind: 'enableVariableAmount'
          },
          [getGlobalName('purchase_payment_success')]: {
            bind: 'successResponseCardPurchase'
          },
          [getGlobalName('post_payment_success_tsec')]: {
            bind: 'tsecAutentication'
          },
          [getGlobalName('success_customer_agreements')]: {
            bind: 'getAgreementSuccess'
          },
          [getGlobalName('error_customer_agreements')]: {
            bind: 'errorResponseTerms'
          },
          [getGlobalName('purchase_limits')]: {
            bind: 'setPurchaseLimits'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          [getGlobalName('call_bbva_line')]: {
            bind: 'callBbvaLine'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlagCollection'
          },
          blue_redirect_blackhawk_purchase_detail: {
            bind: 'mappedProducts'
          },
          card_clicked: {
            bind: 'cardClicked'
          },
          complete_reset_step_option_selector: {
            bind: 'sendAmountFromBlue'
          },
          complete_reset_step_option_selector: {
            bind: 'sendProductFromBlue'
          },
          send_cardClicked_blue_data_opx: {
            bind: 'cardClicked'
          },
          steps_data_blackhawk: {
            bind: 'dataBlue'
          },
          blackhawk_purchase_detail_terms_checkbox_unchecked: {
            bind: 'handleTermsCheckboxUnchecked'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getGlobalName('set_items_options_event_products')]: {
            bind: 'set-items-options-event'
          },
          [getGlobalName('set_items_options_event_sticky')]: {
            bind: 'set-items-options-event'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'app-started-card-clicked-event'
          },
          [getGlobalName('send_products')]: {
            bind: 'products-changed'
          },
          [getGlobalName('hide_next_step')]: {
            bind: 'skip-next-step'
          },
          [getGlobalName('force_next_step')]: {
            bind: 'force-next-step'
          },
          [getGlobalName('show_next_step')]: {
            bind: 'show-simulation-operation'
          },
          [getGlobalName('set_decorated')]: {
            bind: 'set-decorated-event'
          },
          [getGlobalName('set_header_title')]: {
            bind: 'brand-selected-changed'
          },
          [getGlobalName('set_summary_amount')]: {
            bind: 'summary-amount-event'
          },
          [getGlobalName('set_min_value')]: {
            bind: 'set-min-value-event'
          },
          [getGlobalName('set_max_value')]: {
            bind: 'set-max-value-event'
          },
          [getGlobalName('all_steps_collapsed')]: {
            bind: 'summary-amount-event'
          },
          [getGlobalName('amount_selected_insuficient')]: {
            bind: 'reset-steps-after-user-selector'
          },
          [getGlobalName('navigate_to_success_review')]: {
            bind: 'navigate-to-success-review'
          },
          blackhawk_purchase_detail_manage_step: {
            bind: 'go-to-terms-step-unchecked'
          },
          [getGlobalName('set_successfull_data')]: {
            bind: 'set-successfull-data'
          },
          [getGlobalName('fire_app_completed')]: {
            bind: 'fire-app-completed-event'
          },
          [getGlobalName('set_header_title_review')]: {
            bind: 'set-header-title-review'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-info-modal'
          },
          [getGlobalName('request_customer_id_event')]: {
            bind: 'request-customer-id-event'
          },
          [getGlobalName('request_customer_addresses')]: {
            bind: 'request-customer-addresses-event'
          },
          [getGlobalName('set_customer_id')]: {
            bind: 'customer-id-changed'
          },
          [getGlobalName('show_blackhawk_message')]: {
            bind: 'show-message-event'
          },
          [getGlobalName('exit_to_purchase')]: {
            bind: 'exit-to-purchase-event'
          },
          [getGlobalName('hidden_show_confirm')]: {
            bind: 'hidden-show-confirm'
          },
          [getGlobalName('set_card_detail')]: {
            bind: 'set-card-detail-event'
          },
          [getGlobalName('set_card_extra_detail')]: {
            bind: 'set-card-extra-detail'
          },
          [getGlobalName('open_modal_more_info')]: {
            bind: 'open-modal-more-info'
          },
          [getGlobalName('brand_item_selected')]: {
            bind: 'brand-item-changed'
          },
          [getGlobalName('request_purchase')]: {
            bind: 'request-purchase-gift-card'
          },
          [getGlobalName('request_purchase_version_reverse')]: {
            bind: 'request-purchase-gift-card-back-of-operations'
          },
          [getGlobalName('post_customer_agreements')]: {
            bind: 'post-customer-agreements'
          },
          [getGlobalName('post_customer_agreements_tsec')]: {
            bind: 'post-tsec-autentication'
          },
          [getGlobalName('set_business_doc')]: {
            bind: 'set-business-properties'
          },
          global_open_document_url: {
            bind: 'request-post-document'
          },
          [getGlobalName('validate_account_event')]: {
            bind: 'validate-account-event'
          },
          [getGlobalName('validate_account_event_button')]: {
            bind: 'validate-account-event'
          },
          [getGlobalName('data_navigation_send')]: {
            bind: 'data-link-navigation'
          },
          [getGlobalName('card_id')]: {
            bind: 'brand-item-changed'
          },
          [getGlobalName('app_started_card_clicked')]: {
            bind: 'app-started-card-clicked-event'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          },
          [getGlobalName('focus_in_step_variable_amount')]: {
            bind: 'focus-in-step-variable-amount'
          },
          [getGlobalName('feature_flags_blackhawk')]: {
            bind: 'feature-flags-blackhawk'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          send_product_blue_data_dm: {
            bind: 'send-product-blue'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      modalRechargeItems: modalPurchaseDetailItemsSpherica,
      newCellsConnections: {
        add: {
          in: {
            global_blackhawk_purchase_detail_success_customer_agreements_spherica: {
              bind: 'getAgreementSuccessSpherica'
            }
          },
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-info-modal'
            }
          }
        },
        remove: {
          in: [
            'global_blackhawk_purchase_detail_success_customer_agreements'
          ],
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };
  const paymentsServiceApis = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-payments',
    properties: {
      host,
      native,
      requiredToken,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getGlobalName('request_purchase')]: {
            bind: 'makePaymentPase'
          },
          [getGlobalName('request_purchase_version_reverse')]: {
            bind: 'makePaymentPase'
          },
          [getGlobalName('feature_flags_blackhawk')]: {
            bind: 'flagsBackOfOperation'
          }
        },
        out: {
          [getGlobalName('purchase_error_payment')]: {
            bind: 'error-response-payment-pase'
          },
          [getGlobalName('purchase_payment_success')]: {
            bind: 'success-response-payment-pase'
          },
          [getGlobalName('post_payment_success_tsec')]: {
            bind: 'data-headers'
          }
        }
      }
    }
  };
  const apiBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      native,
      cellsConnections: {
        in: {
          [getGlobalName('set_business_doc')]: {
            bind: 'setProperties'
          },
          [getGlobalName('request_pdf_dm_post')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [getGlobalName('success_post_bd')]: {
            bind: 'post-business-documents-success'
          },
          [getGlobalName('error_post_bd')]: {
            bind: 'error-on-post-business-documents'
          }
        }
      }
    }
  };
  const apiCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host,
      native,
      customersApiVersion: customersV1,
      requiredToken,
      returnTsec: true,
      cellsConnections: {
        in: {
          [getGlobalName('set_customer_id')]: {
            bind: 'customerId'
          },
          [getGlobalName('post_customer_agreements_tsec')]: {
            bind: 'headers'
          },
          [getGlobalName('post_customer_agreements')]: {
            bind: 'postCustomerTerms'
          }
        },
        out: {
          [getGlobalName('success_customer_agreements')]: {
            bind: 'post-customer-terms'
          },
          [getGlobalName('error_customer_agreements')]: {
            bind: 'error-on-post-customer-terms'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_blackhawk_purchase_detail_success_customer_agreements_spherica: {
              bind: 'post-customer-terms'
            }
          }
        },
        remove: {
          out: [
            'global_blackhawk_purchase_detail_success_customer_agreements'
          ]
        }
      }
    }
  };
  const customerServiceApis = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host,
      requiredToken,
      paymentsServicesApiVersion: customersV1,
      native,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getGlobalName('set_customer_id')]: {
            bind: 'customerId'
          },
          [getGlobalName('request_customer_addresses')]: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getGlobalName('error_on_get_customer_detail')]: {
            bind: 'error-on-get-customer-detail'
          },
          [getGlobalName('set_customer_detail')]: {
            bind: 'set-customer-detail'
          }
        }
      }
    }
  };
  const optionSelector = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-option-selector',
    tagSpherica: 'cells-step-option-selector-spherica',
    properties: {
      id: 'cells-step-option-selector',
      currentStep: 1,
      maxSteps: MAX_STEPS,
      spacingKeyValues: true,
      className: 'center-key-values',
      active: true,
      changeLabel: getLocalePrefix('change'),
      showSticky: true,
      decorated: true,
      showHeaderTitle: true,
      isHiddenStepTitle: true,
      stepTitle: 'glomo-blackhawk-purchase-detail-product',
      stickySummaryClass: 'sticky-summary-button',
      localCurrency: LOCAL_CURRENCY,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          },
          [getGlobalName('set_items_options_event_products')]: {
            bind: 'items'
          },
          [getGlobalName('set_items_options_event_sticky')]: {
            bind: 'setShowSticky'
          },
          [getGlobalName('set_decorated')]: {
            bind: 'decorated'
          }
        },
        out: {
          [getGlobalName('register_step_card')]: {
            bind: 'register-step'
          },
          [getGlobalName('card_clicked')]: {
            bind: 'card-clicked-event'
          },
          [getGlobalName('next_step')]: {
            bind: 'go-to-next-step'
          },
          [getGlobalName('purchase_limits')]: {
            bind: 'go-to-next-step'
          },
          [getGlobalName('all_steps_collapsed')]: {
            bind: 'go-to-next-step'
          },
          [getGlobalName('manage_step')]: {
            bind: 'change-step-state'
          },
          [getGlobalName('enable_variable_amount')]: {
            bind: 'change-step-state'
          },
          [getGlobalName('all_steps_collapsed')]: {
            bind: 'change-step-state'
          },
          [getGlobalName('card_info_detail')]: {
            bind: 'card-select-link-click'
          },
          [getGlobalName('card_unchecked')]: {
            bind: 'cells-radio-button-unchecked'
          },
          [getGlobalName('call_bbva_line')]: {
            bind: 'change-data-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'glomo-blackhawk-purchase-detail-product-spherica',
      className: 'center-key-values padding-header-filled',
      changeLabel: 'glomo-blackhawk-purchase-detail-change-spherica',
      extraInfoClass: ''
    }
  };
  const amountSelected = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-simulation-operation',
    tagSpherica: 'cells-step-simulation-operation-spherica',
    properties: {
      id: 'cells-step-simulation-operation',
      className: 'equity-contracts',
      currentStep: 2,
      maxStepsCustom: MAX_STEPS,
      stepTitle: getLocalePrefix('custom-amount'),
      stepDescription: getLocalePrefix('input-custom-amount'),
      language: LANGUAGE,
      currency: LOCAL_CURRENCY,
      localCurrency: LOCAL_CURRENCY,
      changeLabel: getLocalePrefix('change'),
      amountInputLabel: getLocalePrefix('card-amount'),
      rageMessageBeforeNumber: getLocalePrefix('amounts-before-message'),
      rageMessageAfterNumber: getLocalePrefix('amounts-after-message'),
      amountErrorMaxLimitMessage: getLocalePrefix('amounts-error-message-max'),
      amountErrorMinLimitMessage: getLocalePrefix('amounts-error-message-min'),
      showMinAndMaxLim: true,
      showIconInInputRangeMessage: true,
      complexAmountErrorMaxLimitMessage: true,
      range: true,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          },
          [getGlobalName('hide_next_step')]: {
            bind: 'hidden'
          },
          [getGlobalName('show_next_step')]: {
            bind: 'hidden'
          },
          [getGlobalName('set_min_value')]: {
            bind: 'minValue'
          },
          [getGlobalName('set_max_value')]: {
            bind: 'maxValue'
          },
          send_amount_blue_data_opx: {
            bind: 'sendAmount'
          }
        },
        out: {
          [getGlobalName('register_step_custom_operation')]: {
            bind: 'register-step'
          },
          [getGlobalName('validate_custom_step')]: {
            bind: 'cells-step-focus-in'
          },
          [getGlobalName('next_step')]: {
            bind: 'send-step-amount-value'
          },
          [getGlobalName('save_amount_value')]: {
            bind: 'send-step-amount-value'
          },
          [getGlobalName('all_steps_collapsed')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('manage_step')]: {
            bind: 'change-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'glomo-blackhawk-purchase-detail-custom-amount-spherica',
      changeLabel: 'glomo-blackhawk-purchase-detail-change-spherica',
      showTextRightIcon: true
    }
  };
  const productSelectorStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    properties: {
      currentStep: 3,
      maxSteps: MAX_STEPS,
      imgCollapsed: './images/payrollAdvance/bbva50.svg',
      imgHeight: 26,
      imgWidth: 26,
      localCurrency: LOCAL_CURRENCY,
      changeLabel: getLocalePrefix('change'),
      stepTitle: getLocalePrefix('title-way-pay'),
      description: getLocalePrefix('message-way-pay'),
      productsListLabel: getLocalePrefix('title-products'),
      errorMessage: getLocalePrefix('messagge-balance-error'),
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          },
          [getGlobalName('send_products')]: {
            bind: 'products'
          },
          [getGlobalName('all_products_selection')]: {
            bind: 'onProductSelected'
          },
          [getGlobalName('validate_account_event')]: {
            bind: 'showErrorProductsItem'
          },
          [getGlobalName('validate_account_event_button')]: {
            bind: 'primaryButtonDisabled'
          },
          send_product_blue_data_dm: {
            bind: 'onProductSelected'
          },
          send_product_blue_data_opx: {
            bind: 'onProductSelected'
          }
        },
        out: {
          [getGlobalName('register_step_accounts')]: {
            bind: 'register-step'
          },
          [getGlobalName('account_selected')]: {
            bind: 'on-change-product-selected'
          },
          [getGlobalName('next_step')]: {
            bind: 'on-change-product-selected'
          },
          [getGlobalName('all_steps_collapsed')]: {
            bind: 'on-change-product-selected'
          },
          [getGlobalName('manage_step')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('change_pressed_all_steps_collapsed')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('dont_change_continue')]: {
            bind: 'dont-change-and-continue'
          },
          [getGlobalName('dont_change_continue_all')]: {
            bind: 'dont-change-and-continue'
          },
          [getGlobalName('view_all_products')]: {
            bind: 'view-all'
          },
          [getGlobalName('focus_in_step_2')]: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'modo-on-boarding-padding',
      stepTitle: 'glomo-blackhawk-purchase-detail-title-way-pay-spherica',
      changeLabel: 'glomo-blackhawk-purchase-detail-change-spherica',
      productsListLabel: 'glomo-blackhawk-purchase-detail-title-products-spherica'
    }
  };
  const allProductSelector = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      modalTitle: getLocalePrefix('subtitle-products'),
      closeButtonLabel: getLocalePrefix('title-close'),
      showCloseModalButton: true,
      className: 'selected-product',
      localCurrency: LOCAL_CURRENCY,
      language: LANGUAGE,
      iOSFixedHeader: isNativeIos,
      errorMessage: 'glomo-blackhawk-purchase-detail-messagge-balance-error',
      cellsConnections: {
        in: {
          [getGlobalName('view_all_products')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getGlobalName('all_products_selection')]: {
            bind: 'selected-product'
          }
        }
      }
    },
    propertiesSpherica: {
      errorMessage: 'glomo-blackhawk-purchase-detail-messagge-balance-error-spherica'
    }
  };
  const checklistContract = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    tagSpherica: 'cells-step-card-checklist-contract-spherica',
    properties: {
      currentStep: 4,
      maxSteps: MAX_STEPS,
      showCurrentStepLabel: true,
      hideChangeDataBox: true,
      stepTitle: getLocalePrefix('title-terms'),
      consultText: getLocalePrefix('subtitle-terms'),
      pdfData: [ {
        icon: 'coronita:pdf',
        text: 'glomo-blackhawk-purchase-detail-title-doc-terms',
        id: '01'
      } ],
      checkboxList: [ {
        valid: false,
        active: true,
        buttonText: 'glomo-blackhawk-purchase-detail-title-button-terms'
      } ],
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('register_step_contract')]: {
            bind: 'register-step'
          },
          [getGlobalName('next_step')]: {
            bind: 'continue-pressed'
          },
          [getGlobalName('all_steps_collapsed')]: {
            bind: 'continue-pressed'
          },
          [getGlobalName('manage_step')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('change_pressed_all_steps_collapsed')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('request_pdf')]: {
            bind: 'request-pdf'
          },
          [getGlobalName('focus_in_step_3')]: {
            bind: 'cells-step-focus-in'
          },
          blackhawk_purchase_detail_terms_checkbox_unchecked: {
            bind: 'cells-checkbox-button-unchecked'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'glomo-blackhawk-purchase-detail-title-terms-spherica',
      variantListFile: 'primary-alt',
      isButtonPrimary: true,
      variant: 'primary-alt',
      listFileTextSize: 'M',
      checkboxList: [ {
        valid: false,
        active: true,
        buttonText: 'glomo-blackhawk-purchase-detail-title-button-terms'
      } ]
    }
  };
  const messageBox = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      className: 'margin-l',
      type: 'info',
      icon: 'coronita:info',
      hidden: true,
      message: getLocalePrefix('final-message-step'),
      cellsConnections: {
        in: {
          [getGlobalName('show_blackhawk_message')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };
  const operationSummaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    properties: {
      buttonLabel: 'glomo-gift-card-brand-confirm-purchase',
      className: 'diy',
      id: 'cells-summary-view',
      localCurrency: LOCAL_CURRENCY,
      operationAmountClass: 'amount-huge-decimals',
      showAddition: true,
      showLoadingSkeleton: true,
      summaryViewTitle: getLocalePrefix('total-amount'),
      hideCustomFeesMessage: false,
      forceFeesMessage: getLocalePrefix('no-comission'),
      cellsConnections: {
        in: {
          [getGlobalName('set_summary_amount')]: {
            bind: 'operation'
          }
        },
        out: {
          [getGlobalName('accepted_final_amount')]: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      primaryButtonClass: 'positive'
    }
  };
  const blackhawkPurchaseMoreInfo = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-modal-key-values-list',
    tagSpherica: 'cells-modal-key-values-list-spherica',
    properties: {
      className: 'show-divider',
      iOSFixedHeader: true,
      headerTitle: 'glomo-gift-card-purchase-detail-clicked-detail-card',
      showContinueButton: true,
      cellsConnections: {
        in: {
          [getGlobalName('set_card_extra_detail')]: {
            bind: 'extraKeyValues'
          },
          [getGlobalName('set_card_detail')]: {
            bind: 'configKeyValues'
          },
          [getGlobalName('open_modal_more_info')]: {
            bind: 'opened'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      keyValuesConainerClass: 'key-values-card-bg modal-key-values-avatar-container modal-key-values-avatar-keys-description-container',
      extraKeyValuesConainerClass: 'key-values-card-bg modal-key-values-avatar-container modal-key-values-avatar-keys-description-container',
      headerCloseIconText: 'glomo-blackhawk-purchase-detail-more-info-close-icon-text',
      variant: 'primary-alt',
      classValueList: 'row-padded-bottom-s'
    }
  };
  const analyticsBlackhawkPurchaseDetail = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-gift-card-manager-purchase-detail',
    familyPath: '@glomo-web-components/glomo-analytics-gift-card-manager',
    render: 'litElement',
    properties: {
      config: ANALYTICS.PAGE_CONFIG,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'firePageVisit'
          },
          [getGlobalName('brand_item_selected')]: {
            bind: 'cardDetail'
          },
          [getGlobalName('save_amount_value')]: {
            bind: 'amountVariable'
          },
          [getGlobalName('focus_in_step_2')]: {
            bind: 'analyticsSelectedAccount'
          },
          [getGlobalName('focus_in_step_3')]: {
            bind: 'analyticStepThree'
          },
          [getGlobalName('show_confirm_offer_page')]: {
            bind: 'analyticStepConfirmation'
          },
          [getGlobalName('fire_app_completed')]: {
            bind: 'appCompleted'
          },
          sign_modal_open: {
            bind: 'fireOtp'
          },
          [getGlobalName('app_started_card_clicked')]: {
            bind: 'fireAppStarted'
          },
          [getGlobalName('set_header_title')]: {
            bind: 'brandSelected'
          },
          [getGlobalName('set_successfull_data')]: {
            bind: 'flagReviewPage'
          },
          [getGlobalName('focus_in_step_variable_amount')]: {
            bind: 'fireAppView'
          }
        },
        out: {
          [getGlobalName('analytics_page_visit')]: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS.PAGE_VISIT
          },
          [getGlobalName('analytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getGlobalName('analytics_app_view')]: {
            bind: 'analytics-page-view',
            analytics: ANALYTICS.APP_VIEW
          },
          [getGlobalName('analytics_app_step_2')]: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS.appStep('2', ANALYTICS.STEPS.STEP_2)
          },
          [getGlobalName('analytics_app_step_3')]: {
            bind: 'analytics-app-step-3',
            analytics: ANALYTICS.appStep('3', ANALYTICS.STEPS.STEP_3)
          },
          [getGlobalName('analytics_app_step_4')]: {
            bind: 'analytics-app-step-4',
            analytics: ANALYTICS.appStep('4', ANALYTICS.STEPS.STEP_4)
          },
          [getGlobalName('analytics_app_step_5')]: {
            bind: 'analytics-app-step-5',
            analytics: ANALYTICS.appStep('5', ANALYTICS.STEPS.STEP_5)
          },
          [getGlobalName('analytics_app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS.APP_COMPLETED
          }
        }
      }
    }
  };
  const base = {
    hash: 'blackhawk-purchase-detail',
    currentPage: {
      url: '/blackhawk-purchase-detail'
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      purchaseDetailDM,
      opxPurchaseDetailDM,
      paymentsServiceApis,
      apiCustomers,
      optionSelector,
      amountSelected,
      productSelectorStep,
      allProductSelector,
      checklistContract,
      operationSummaryView,
      customerServiceApis,
      messageBox,
      blackhawkPurchaseMoreInfo,
      apiBusinessDocuments,
      analyticsBlackhawkPurchaseDetail
    ]
  };
  addRetryErrors(base)([
    {
      id: 'TERMS-ERROR',
      acceptRetry: { bind: 'successResponseCardPurchase', component: 'glomo-gift-card-manager-purchase-detail-mx' },
      acceptCallForHelp: { bind: 'callBbvaLine', component: 'glomo-gift-card-manager-purchase-detail-mx' }
    },
    {
      id: 'PURCHASE-ERROR',
      acceptRetry: { bind: 'requestCardPurchase', component: 'glomo-gift-card-manager-purchase-detail-mx' },
      acceptCallForHelp: { bind: 'callBbvaLine', component: 'glomo-gift-card-manager-purchase-detail-mx' }
    }
  ]);
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  addCommonErrors(base.components)();
  if (native) {
    base.components.push(GLOMO_OPEN_DOCUMENT);
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-payments', PAGE_NAME, ['error-response-payment-pase', 'success-response-payment-pase']);
  return sphericaPageUtils.spherize(base);
};
