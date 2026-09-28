/* eslint-disable max-statements, no-dupe-keys */
'use strict';
module.exports = CONFIG => {
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector');
  const {
    createPrefixFromPageName,
    glomoOpenDocument,
    getLocalCurrency,
    getLanguage,
    getCountry,
    createSpinner,
    detailDownloadParams
  } = require('./common/helpers/_utils');
  const { merge, bbvaQrPluginConfigs } = require('./common/helpers');
  const pageName = 'digitalButler';
  const prefix = createPrefixFromPageName(pageName);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const _localStorage = require('./common/_local-storage');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const prefixIcon = isSpherica ? 'spherica' : 'bbva';
  const { CARDS_CHARGES_AND_COMMISSIONS } = require('./product/_constanst');
  const {
    nativeIos = false,
    native = false,
    nativeShell = false,
    globalServices: {
      host,
      requiredToken = 'tsec',
      aapTargetAuthentication,
      conversaConfig: {
        aapTarget,
        originName,
        appVersion,
        hostConversa
      },
      versions: {
        singleSignOnApiVersion,
        customerFeedbackApiVersion
      },
      security: {
        headers: {
          authenticationType
        }
      },
      tenantGlobalConfig: {
        AAPTarget,
        TargetIdUniqueKey,
        authPath,
        host: tenantHost
      }
    }
  } = CONFIG;
  const analytics = require('./analytics/_digitalButler')(CONFIG);

  const openDocumentHeaders = {
    mimeType: 'application/pdf',
    method: 'get',
    headers: {
      Accept: 'application/pdf',
      'Content-Type': 'application/pdf',
      'Accept-Language': 'es'
    },
    title: 'bbva-controller-chatbot-bank-statement-title',
    headerColor: 'FFFFFFFF',
    tintColor: 'FF072146',
    canShare: true,
    titleColor: 'FF072146',
    blackStatusBar: false,
    formatter: 'no-op',
    value: ''
  };

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableScrollLock: true,
      extraHeaderClass: 'bg-core-blue',
      iOSFixedHeader: nativeIos,
      headerHeight: 0,
      className: nativeIos ? 'ios-top-padding' : '',
      disableEdgeSwipe: nativeShell,
      avoidToggleMenu: nativeShell,
      edgeSwipeSensitivity: 50
    }
  };

  const commonNavigations = {
    cardDetail: {
      globalNavigationIds: ['activate-card', 'turn-on-physical-card', 'turn-off-physical-card', 'list-credit-card-limits', 'payment-details', 'card-detail'],
      customEvent: 'navigate-with-product-id'
    },
    cardDynamicCvv: {
      globalNavigationIds: ['turn-on-digital-card', 'turn-off-digital-card', 'consulting-dynamic-cvv', 'consulting-buy-digital-card'],
      customEvent: 'navigate-card-digital'
    },
    atmLocator: {
      globalNavigationIds: ['atm-locator', 'atmLocator'],
      customEvent: 'navigate-atm-locator'
    },
    accountTransactions: {
      globalNavigationIds: [ 'account-movements' ],
      customEvent: 'navigate-account-movements'
    },
    cardTransactions: {
      globalNavigationIds: [ 'card-movements' ],
      customEvent: 'navigate-card-movements'
    },
    cardTransactionDetail: {
      globalNavigationIds: [ 'card-movement-detail' ],
      customEvent: 'navigate-card-movement-detail'
    },
    accountTransactionDetail: {
      globalNavigationIds: ['account-movement-detail', 'account-transaction-detail'],
      customEvent: 'navigate-account-movement-detail',
      customParams: { continue: 'digitalButler' }
    },
    codicelAgreeAndRemoveConsent: {
      globalNavigationIds: ['link-phone', 'codicel-agree-and-remove-consent'],
      customEvent: 'navigate-codicel-agree-and-remove-consent'
    },
    account: {
      globalNavigationIds: ['update-account', 'account-detail', 'account-participants', 'view-phone'],
      customEvent: 'navigate-accounts'
    },
    transfers: {
      globalNavigationIds: ['transfers', 'payments-share'],
      customEvent: 'navigate-transfers',
      customParams: { continue: 'digitalButler' }
    },
    blockAndReplacement: {
      globalNavigationIds: [ 'card-duplicate' ],
      customEvent: 'navigate-block-and-replacement'
    },
    accountMonthlyStatement: {
      globalNavigationIds: [ 'accounts-statement' ],
      customEvent: 'navigate-with-product-id'
    },
    cardMonthlyStatement: {
      globalNavigationIds: [ 'credit-card-statement' ],
      customEvent: 'navigate-with-product-id'
    },
    billPaymentsDashboard: {
      globalNavigationIds: [ 'bring-receipts' ],
      customEvent: 'navigate-bring-receipts'
    },
    cleanCardOperations: {
      globalNavigationIds: [ 'view-card-pin-qr' ],
      customEvent: 'navigate-view-card-pin',
      customParams: { operativeAction: 'CD001' },
      parseProductId: 'cardId'
    },
    pinRequest: {
      globalNavigationIds: [ 'view-card-pin-cvv' ],
      customEvent: 'navigate-view-card-pin-cvv',
      customParams: { operativeAction: 'CD001' }
    },
    cardlessWithdrawal: {
      globalNavigationIds: ['mobile-cash', 'cardless-withdrawal'],
      customEvent: 'navigate-cardless-withdrawal',
      customParams: { continue: 'digitalButler' }
    },
    clarificationsListCare: {
      globalNavigationIds: [ 'clarifications-list' ]
    },
    clarificationsManagementCarePage: {
      globalNavigationIds: [ 'card-movement-refusal' ],
      customEvent: 'navigate-card-movements-refusal',
      valueToNumber: [ 'returnAmount' ]
    },
    pocketsWelcome: {
      globalNavigationIds: [ 'pockets-welcome' ],
      customEvent: 'navigate-pockets-welcome'
    },
    pocketsCreate: {
      globalNavigationIds: [ 'pockets-create' ],
      customEvent: 'navigate-pockets-create'
    },
    pocketsList: {
      globalNavigationIds: [ 'pockets-list' ],
      customEvent: 'navigate-pockets-list'
    },
    pocketsAddMoney: {
      globalNavigationIds: [ 'pockets-add-money' ],
      customEvent: 'navigate-pockets-add-money'
    },
    pocketsWithdrawal: {
      globalNavigationIds: [ 'pockets-withdrawal' ],
      customEvent: 'navigate-pockets-withdrawal'
    },
    mobileTopUp: {
      globalNavigationIds: [ 'mobile-top-up' ],
      customEvent: 'navigate-mobile-top-up'
    },
    mobileTopUpPackages: {
      globalNavigationIds: [ 'mobile-top-up-packages' ],
      customEvent: 'navigate-mobile-top-up-packages'
    },
    fatcaValidationSurvey: {
      globalNavigationIds: [ 'fatca-validation' ],
      customEvent: 'navigate-fatca-validation-survey'
    },
    updateEmailPage: {
      globalNavigationIds: [ 'update-email' ],
      customEvent: 'navigate-update-email'
    },
    profile: {
      globalNavigationIds: [ 'profile' ],
      customEvent: 'navigate-profile'
    },
    customerContracts: {
      globalNavigationIds: [ 'customer-contracts' ],
      customEvent: 'navigate-customer-contracts'
    },
    cardlessWithdrawalHistoric: {
      globalNavigationIds: [ 'cardless-withdrawal-historic' ],
      customEvent: 'navigate-cardless-withdrawal-historic'
    },
    cardlessWithdrawalHistoricSearcher: {
      globalNavigationIds: [ 'cardless-withdrawal-historic-searcher' ],
      customEvent: 'navigate-cardless-withdrawal-historic-searcher'
    },
    blackhawkPurchase: {
      globalNavigationIds: [ 'blackhawk-purchase' ],
      customEvent: 'navigate-blackhawk-purchase'
    },
    parkingList: {
      globalNavigationIds: [ 'parking-list' ],
      customEvent: 'navigate-parking-list'
    },
    parkingEnrollment: {
      globalNavigationIds: [ 'parking-enrollment' ],
      customEvent: 'navigate-parking-enrollment'
    },
    registerTag: {
      globalNavigationIds: [ 'register-tag' ],
      customEvent: 'navigate-register-tag'
    },
    reward: {
      globalNavigationIds: [ 'reward' ],
      customEvent: 'navigate-reward'
    },
    rechargeTag: {
      globalNavigationIds: [ 'recharge-tag' ],
      customEvent: 'navigate-recharge-tag'
    },
    parkingRecharge: {
      globalNavigationIds: [ 'parking-recharge' ],
      customEvent: 'navigate-parking-recharge'
    },
    profileRecipients: {
      globalNavigationIds: [ 'profile-recipients' ],
      customEvent: 'navigate-profile-recipients'
    },
    goals: {
      globalNavigationIds: [ 'goals' ],
      customEvent: 'navigate-goals'
    },
    cardEditAlias: {
      globalNavigationIds: [ 'card-edit-alias' ],
      customEvent: 'navigate-card-edit-alias'
    },
    cardGenerateVirtual: {
      globalNavigationIds: [ 'card-generate-virtual' ],
      customEvent: 'navigate-card-generate-virtual'
    },
    pfmDashboardDetail: {
      globalNavigationIds: [ 'pfm-dashboard-detail' ],
      customEvent: 'navigate-pfm-dashboard-detail'
    },
    editCreditCardLimits: {
      globalNavigationIds: [ 'edit-credit-card-limits' ],
      customEvent: 'navigate-with-product-id'
    },
    blackhawkPurchaseDetail: {
      globalNavigationIds: [ 'blackhawk-purchase-detail' ],
      customEvent: 'navigate-blackhawk-purchase-detail'
    },
    pointsTransfer: {
      globalNavigationIds: [ 'points-transfer' ],
      customEvent: 'navigate-points-transfer'
    },
    stSecurityCode: {
      globalNavigationIds: [ 'soft-token' ],
      customEvent: 'navigate-soft-token'
    },
    disabilityVideocallHearingStrategic: {
      globalNavigationIds: [ 'videocall-hearing-strategic' ],
      customEvent: 'navigate-videocall-hearing-strategic'
    },
    emergencyLostCard: {
      globalNavigationIds: [ 'emergency-lost-card' ],
      customEvent: 'navigate-emergency-lost-card'
    },
    operationalLimits: {
      globalNavigationIds: [ 'operational-limits' ],
      customEvent: 'navigate-operational-limits'
    },
    keyRecoveryUpdate: {
      globalNavigationIds: [ 'key-recovery-update' ],
      customEvent: 'navigate-key-recovery-update'
    },
    discreetModeSettings: {
      globalNavigationIds: [ 'discreet-mode-settings' ],
      customEvent: 'navigate-discreet-mode-settings'
    },
    emergencyZone: {
      globalNavigationIds: [ 'emergency-zone' ],
      customEvent: 'emergency-zone'
    },
    securityAccess: {
      globalNavigationIds: [ 'security-access' ],
      customEvent: 'navigate-security-access'
    },
    securityMenu: {
      globalNavigationIds: [ 'security-menu-page' ],
      customEvent: 'navigate-security-menu-page'
    },
    securityTipsPage: {
      globalNavigationIds: [ 'security-tips-dashboard' ],
      customEvent: 'navigate-security-tips-dashboard'
    },
    frequentOperationsList: {
      globalNavigationIds: [ 'frequent-operations-list' ],
      customEvent: 'navigate-frequent-operations-list'
    },
    requestBranchAppointmentDetail: {
      globalNavigationIds: [ 'request-branch-appointment-detail' ],
      customEvent: 'navigate-request-branch-appointment-detail'
    },
    internationalTransfersPanel: {
      globalNavigationIds: [ 'international-transfers-panel' ],
      customEvent: 'navigate-international-transfers-panel'
    },
    codiBeginRegister: {
      globalNavigationIds: [ 'codi-begin-register' ],
      customEvent: 'navigate-codi-begin-register'
    },
    ocMetaseguraOffer: {
      globalNavigationIds: [ 'oc-metasegura-offer' ],
      customEvent: 'navigate-oc-metasegura-offer'
    },
    additionalCreditCardMainPage: {
      globalNavigationIds: [ 'additional-credit-card' ],
      customEvent: 'navigate-additional-credit-card'
    },
    creditCardTracking: {
      globalNavigationIds: [ 'credit-card-tracking' ],
      customEvent: 'navigate-credit-card-tracking'
    },
    paymentsThirdPartyWalletProvisioning: {
      globalNavigationIds: [ 'payments-third-party-wallet-provisioning' ],
      customEvent: 'navigate-with-product-id'
    },
    nationalIdAndVideoselfie: {
      globalNavigationIds: [ 'national-id-and-videoselfie' ],
      customEvent: 'navigate-national-id-and-videoselfie'
    },
    profileAddressManagement: {
      globalNavigationIds: [ 'profile-address-management' ],
      customEvent: 'navigate-profile-address-management'
    },
    updateAddressPage: {
      globalNavigationIds: [ 'update-address' ],
      customEvent: 'navigate-update-address'
    },
    fundsHiring: {
      globalNavigationIds: [ 'funds-hiring' ],
      customEvent: 'navigate-funds-hiring'
    },
    contractProductSection: {
      globalNavigationIds: [ 'contract-product-section' ],
      customEvent: 'navigate-contract-product-section'
    },
    financeTransactionMultipurchase: {
      globalNavigationIds: [ 'finance-transaction-multipurchase' ],
      customEvent: 'navigate-finance-transaction-multipurchase'
    },
    creditCardHolderSpherica: {
      globalNavigationIds: [ 'credit-card-holder-spherica' ],
      customEvent: 'navigate-credit-card-holder-spherica'
    },
    internationalTransfers: {
      globalNavigationIds: [ 'international-transfers' ],
      customEvent: 'navigate-international-transfers'
    },
    ocLoanOfferPage: {
      globalNavigationIds: [ 'oc-loan-offer-page' ],
      customEvent: 'oc-loan-offer-page'
    },
    ocLoanOfferPageSpherica: {
      globalNavigationIds: [ 'oc-loan-offer-page-spherica' ],
      customEvent: 'oc-loan-offer-page-spherica'
    },
    dashboard: {
      globalNavigationIds: [ 'dashboard' ],
      customEvent: 'dashboard'
    },
    cardMoreInfo: {
      globalNavigationIds: [ 'card-more-info' ],
      customEvent: 'card-more-info'
    },
    cardCreditCardPayment: {
      globalNavigationIds: [ 'card-credit-card-payment' ],
      customEvent: 'navigate-with-product-id'
    },
    codiQrScanner: {
      globalNavigationIds: [ 'codi-qr-scanner' ],
      customEvent: 'navigate-codi-qr-scanner'
    },
    tagCardList: {
      globalNavigationIds: [ 'tag-card-list' ],
      customEvent: 'navigate-tag-card-list'
    },
    rewardOriginCardPage: {
      globalNavigationIds: [ 'reward-origin-card-page' ],
      customEvent: 'navigate-reward-origin-card-page'
    },
    pfmCategorization: {
      globalNavigationIds: [ 'pfm-categorization' ],
      customEvent: 'navigate-pfm-categorization'
    },
    internationalTransfersContactsBook: {
      globalNavigationIds: [ 'international-transfers-contacts-book' ],
      customEvent: 'navigate-international-transfers-contacts-book'
    },
    requestFiscalData: {
      globalNavigationIds: [ 'request-fiscal-data' ],
      customEvent: 'navigate-request-fiscal-data'
    },
    stOutBand: {
      globalNavigationIds: [ 'stOut-Band' ],
      customEvent: 'navigate-request-stOut-Band'
    },
    piggyBanks: {
      globalNavigationIds: [ 'piggy-banks' ],
      customEvent: 'navigate-piggy-banks'
    }
  };

  const excludeSanitizeParams = {
    'update-email': [ 'currentEmailListeningMode' ],
    'transfers': ['receiver', 'inputReceiver']
  };

  const availableActionsTypes = {
    externalLinks: [
      'phone-call',
      'open-document'
    ],
    interactionLinks: [
      'view-info'
    ]
  };

  const voiceConfiguration = {
    stop: {
      timeToStop: 0
    }
  };

  const headerButtons = [
    {
      id: 'btn-secondary',
      icon: `${prefixIcon}:help`,
      accessibilityText: 'digital-butler-chatbot-header-help'
    },
    {
      id: 'btn-close',
      icon: `${prefixIcon}:close`,
      accessibilityText: 'digital-butler-chatbot-header-close'
    }
  ];

  const featureConfig = {
    fixedHeader: true,
    header: {
      variant: 'modal-initial',
      text: 'digital-butler-chatbot-header-title',
      id: 'digital-butler-chatbot-main-header',
      ambient: 'primary-alt'
    },
    loader: false,
    notify: false
  };

  featureConfig.header[isSpherica ? 'rightButtons' : 'buttons'] = headerButtons;

  const localStorageKeys = {
    history: 'digitalButler-history',
    modal: 'digitalButler-terms-and-conditions',
    onOffPhysicalCard: 'card_detail_data',
    onOffDigitalCard: 'dynamic_cvv_card_visited'
  };

  const pluginSpeechRecognition = {
    zone: 'app__main',
    tag: 'cells-mobile-speechrecognition',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          [prefix + '_start_speech']: {
            bind: 'recognizer'
          },
          [prefix + '_stop_speech']: {
            bind: 'stopRecognition'
          }
        },
        out: {
          digital_butler_recognizer_success: {
            bind: 'start-recognition'
          },
          digital_butler_recognizer_error: {
            bind: 'error'
          }
        }
      }
    }
  };

  const qrPluginConfigs = merge(bbvaQrPluginConfigs.commons, {
    android: {
      customViewConfig: {
        options: {
          title: 'Escanear código QR',
          firstFooterLabel: 'Con tu celular, visualiza el código QR de tu tarjeta y haz que coincida con el marco interior; asegúrate de tener buena iluminación.'
        }
      }
    },
    ios: {
      customViewConfig: {
        id: 'qrEnrollmentView',
        options: {
          title: 'Escanear código QR',
          firstFooterLabel: 'Con tu celular, visualiza el código QR de tu tarjeta y haz que coincida con el marco interior; asegúrate de tener buena iluminación.'
        }
      }
    }
  });

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          [prefix + '_reset_page']: {
            bind: 'reset'
          },
          digital_butler_init_page: {
            bind: 'init-page'
          }
        }
      }
    }
  };

  const digitalButler = {
    zone: 'app__main',
    type: 'UI',
    tag: 'digital-butler-chatbot',
    familyPath: '@glomo-web-components/digital-butler-chatbot-gl',
    render: 'litElement',
    properties: {
      aapTarget,
      host,
      hostConversa,
      requiredToken,
      language: getLanguage(),
      singleSignOnApiVersion,
      native,
      localCurrency: getLocalCurrency(),
      appVersion,
      origin: originName,
      history: null,
      historyExpiryHoursPeriod: 0,
      voiceTranscriptDisabled: true,
      config: featureConfig,
      cellsConnections: {
        in: {
          digital_butler_recognizer_success: {
            bind: 'transcript'
          },
          [prefix + '_send_history_from_storage']: {
            bind: 'history'
          },
          [prefix + '_handle_native_back']: {
            bind: 'navigateBack'
          },
          digital_butler_spheech_recognition_timeout: {
            bind: 'cancelTalking'
          },
          [prefix + '_set_navigation_id']: {
            bind: 'refererId'
          },
          digital_butler_close_feature_header: {
            bind: 'navigateBack'
          },
          [prefix + '_set_feedback_config']: {
            bind: 'feedbackConfig'
          },
          digital_butler_chatbot_set_action_result: {
            bind: 'actionResult'
          },
          digital_butler_voice_speech_flag_value: {
            bind: 'voiceTranscriptDisabled'
          },
          digital_butler_set_channel_config: {
            bind: 'channelConfig'
          }
        },
        out: {
          [prefix + '_exit_feature']: {
            bind: 'navigation-go-back',
            backStep: true
          },
          [prefix + '_microphone_start']: {
            bind: 'digital-butler-chatbot-microphone-start'
          },
          digital_butler_microphone_stop: {
            bind: 'digital-butler-chatbot-microphone-stop'
          },
          blue_navigate_to_external: {
            bind: 'digital-butler-chatbot-navigation-external'
          },
          [prefix + '_conversation_created']: {
            bind: 'conversations-api-dm-create'
          },
          [prefix + '_link_click']: {
            bind: 'digital-butler-chatbot-link-click'
          },
          [prefix + '_rating_analytic']: {
            bind: 'digital-butler-chatbot-feedback-fill'
          },
          [prefix + '_intent_change']: {
            bind: 'digital-butler-chatbot-intent-change'
          },
          [prefix + '_history_messages_change']: {
            bind: 'digital-butler-chatbot-history-messages-change'
          },
          [prefix + '_sugestion_click']: {
            bind: 'digital-butler-chatbot-suggestion-click'
          },
          [prefix + '_message_error']: {
            bind: 'digital-butler-chatbot-message-error'
          },
          [prefix + '_conversation_retry_error']: {
            bind: 'digital-butler-chatbot-conversation-error'
          },
          [prefix + '_conversation_error']: {
            bind: 'api-dm-error'
          },
          [prefix + '_sso_error']: {
            bind: 'single-sign-on-api-dm-create-error'
          },
          [prefix + '_action_execute']: {
            bind: 'digital-butler-chatbot-action-execute'
          },
          [prefix + '_exit_feature_header']: {
            bind: 'header-main-icon-click'
          },
          feedback_client_voice_conect_analytics_modal: {
            bind: 'feedback-client-voice-connect-modal-analytic-open'
          },
          feedback_client_voice_conect_analytics_change_page: {
            bind: 'feedback-client-voice-connect-page-analytic-change'
          },
          feedback_client_voice_conect_analytics_step_change: {
            bind: 'feedback-client-voice-connect-step-analytic-change'
          },
          feedback_client_voice_conect_analytics_init_flow: {
            bind: 'feedback-client-voice-connect-flow-analytic-init'
          },
          digital_butler_share_click: {
            bind: 'digital-butler-chatbot-share-click'
          },
          digital_butler_product_balance_click: {
            bind: 'bot-product-balance-click'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };

  const infoModalConfig = {
    'external-link': {
      code: 'blue-external-link-info-modal',
      selectedConfig: {
        className: 'alert info',
        acceptBtLabel: 'digital-butler-chatbot-info-modal-accept'
      },
      values: [
        {
          icon: 'coronita:info',
          iconClass: 'dark-core-blue'
        },
        {
          text: 'digital-butler-chatbot-info-modal-first-paraghaphs',
          class: 'spacing--xs'
        },
        {
          text: 'digital-butler-chatbot-info-modal-second-paraghaphs'
        }
      ],
      onAcceptMethod: 'redirectExternalLink'
    },
    'invalid-qr': {
      code: 'blue-alert-modal-error-qr',
      selectedConfig: {
        className: 'alert error',
        acceptBtLabel: 'digital-butler-chatbot-warning-modal-qr-accept',
        cancelBtLabel: 'digital-butler-chatbot-warning-modal-qr-cancel'
      },
      values: [
        {
          icon: 'coronita:warning',
          iconClass: 'title-icon',
          class: 'dark-core-red'
        },
        {
          title: 'digital-butler-chatbot-warning-modal-qr-title',
          class: 'full-height-info'
        },
        {
          text: 'digital-butler-chatbot-warning-modal-qr-text',
          class: 'spacing'
        }
      ],
      onAcceptMethod: 'openCameraCodeReader',
      onCancelMethod: 'cancelActivateCard'
    }
  };

  const controllerChatbot = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-chatbot',
    familyPath: '@glomo-web-components/bbva-controller-chatbot',
    render: 'litElement',
    properties: {
      localStorageKeys,
      commonNavigations,
      voiceConfiguration,
      headerButtons,
      nativeIos,
      infoModalConfig,
      feedbackConfig: {
        appId: 'GLOMO',
        countryId: 'MX',
        channelId: 'MOBILE',
        segmentId: 'SGT1',
        aapTarget: AAPTarget,
        targetIdUniqueKey: TargetIdUniqueKey,
        singleSignOnApiVersion: singleSignOnApiVersion,
        customerFeedbackApiVersion: customerFeedbackApiVersion,
        hostGlobal: tenantHost,
        pathGlobal: authPath,
        authenticationData: '',
        authenticationType: authenticationType,
        userId: ''
      },
      hostGlobal: tenantHost,
      tkGlobalSufix: 'TGlobal',
      useSessionTkEnviroment: false,
      openDocumentHeaders,
      host,
      nativeIos,
      cellsConnections: {
        in: {
          global_client_id: {
            bind: 'setClientId'
          },
          global_feature_flag_collection_updated: {
            bind: 'manageFeatureFlags'
          },
          global_set_app_settings: {
            bind: 'setAppSettings'
          },
          [prefix + '_microphone_start']: {
            bind: 'startSpeech'
          },
          digital_butler_microphone_stop: {
            bind: 'stopSpeech'
          },
          digital_butler_recognizer_success: {
            bind: 'preventDoubleStop'
          },
          digital_butler_recognizer_error: {
            bind: 'manageErrorSpeech'
          },
          voice_accept_go_to_configurations: {
            bind: 'navigateToSettings'
          },
          global_storage_get_loginData_success: {
            bind: 'setClientId'
          },
          register_device: {
            bind: 'setDeviceId'
          },
          device_accesses_device_id: {
            bind: 'setDeviceId'
          },
          global_storage_get_card_detail_data_error: {
            bind: 'cardsOnOffStorageError'
          },
          global_storage_get_card_detail_data_success: {
            bind: 'cardsOnOffStorageSuccess'
          },
          global_storage_get_dynamic_cvv_card_visited_success: {
            bind: 'cardsOnOffStorageSuccess'
          },
          global_storage_get_dynamic_cvv_card_visited_error: {
            bind: 'cardsOnOffStorageError'
          },
          [prefix + '_action_execute']: {
            bind: 'manageActions'
          },
          message_blue_redirect_link: {
            bind: 'manageNavigation'
          },
          [prefix + '_history_messages_change']: {
            bind: 'saveHistoryMessagesToStorage'
          },
          [prefix + '_exit_feature']: {
            bind: 'exitOperative'
          },
          [`global_storage_get_${localStorageKeys.history}_success`]: {
            bind: 'getHistoryFromStorageSuccess'
          },
          [`global_storage_get_${localStorageKeys.history}_error`]: {
            bind: 'getHistoryFromStorageError'
          },
          digital_butler_init_page: {
            bind: 'init'
          },
          [prefix + '_conversation_created']: {
            bind: 'manageCreateConversation'
          },
          digital_butler_controller_close_veil: {
            bind: 'closeVeil'
          },
          digital_butler_controller_open_veil: {
            bind: 'openVeil'
          },
          [prefix + '_conversation_error']: {
            bind: 'closeVeil'
          },
          [prefix + '_sso_error']: {
            bind: 'closeVeil'
          },
          [prefix + '_exit_feature_header']: {
            bind: 'handleHeaderClick'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBack'
          },
          start_load_internal_link_provider_services: {
            bind: 'openVeil'
          },
          end_load_internal_link_provider_services: {
            bind: 'closeVeil'
          },
          global_open_document_url_success: {
            bind: 'closeVeil'
          },
          global_open_document_url_error: {
            bind: 'closeVeil'
          },
          authentication_open_spinner_event: {
            bind: 'openVeil'
          },
          authentication_close_spinner_event: {
            bind: 'closeVeil'
          },
          authentication_open_spinner_event: {
            bind: 'openVeil'
          },
          authentication_close_spinner_event: {
            bind: 'closeVeil'
          },
          digital_butler_share_click: {
            bind: 'manageShare'
          },
          digital_butler_chatbot_geolocation_set_current_position: {
            bind: 'setGeolocation'
          },
          bbva_controller_client_voice_set_sufix: {
            bind: 'tkGlobalSufix'
          },
          bbva_controller_client_voice_set_hostGlobal: {
            bind: 'hostGlobal'
          },
          bbva_controller_client_voice_set_sessionTkEnviroment: {
            bind: 'useSessionTkEnviroment'
          },
          global_feature_flag_collection_updated: {
            bind: 'manageFeatureFlags'
          },
          digital_butler_native_camera_code_reader_result: {
            bind: 'validateCardQR'
          },
          digital_butler_qr_scanner_plugin_response_error: {
            bind: 'cancelActivateCard'
          }
        },
        out: {
          digital_butler_chatbot_qr_validation_result: {
            bind: 'bbva-controller-chatbot-qr-validation-result'
          },
          [prefix + '_handle_native_back']: {
            bind: 'bbva-controller-chatbot-handle-native-back'
          },
          [prefix + '_set_feedback_config']: {
            bind: 'bbva-controller-chatbot-set-feedback-config'
          },
          digital_butler_close_feature_header: {
            bind: 'bbva-controller-chatbot-exit-feature-header'
          },
          [prefix + '_start_speech']: {
            bind: 'bbva-controller-chatbot-start-speech'
          },
          [prefix + '_stop_speech']: {
            bind: 'bbva-controller-chatbot-stop-speech'
          },
          [prefix + '_set_navigation_id']: {
            bind: 'bbva-controller-chatbot-set-navigation-id'
          },
          digital_butler_spheech_recognition_timeout: {
            bind: 'bbva-controller-chatbot-recognition-timeout'
          },
          digital_butler_voice_speech_flag_value: {
            bind: 'bbva-controller-chatbot-disable-voice-speech-flag-value'
          },
          global_open_document_url: {
            bind: 'bbva-controller-chatbot-open-document-action'
          },
          global_set_in_storage: {
            bind: 'bbva-controller-chatbot-save-in-storage'
          },
          global_get_from_storage: {
            bind: 'bbva-controller-chatbot-get-from-storage'
          },
          [prefix + '_send_history_from_storage']: {
            bind: 'bbva-controller-chatbot-send-history'
          },
          digital_butler_chatbot_set_action_result: {
            bind: 'bbva-controller-chatbot-set-action-result'
          },
          financial_overview_refresh: {
            bind: 'bbva-controller-chatbot-refresh-products'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'bbva-controller-chatbot-open-alert-manager-with-settings'
          },
          global_action_launcher_uri: {
            bind: 'bbva-controller-chatbot-redirect-external-link'
          },
          global_logout_sesion_expiration: {
            bind: 'bbva-controller-chatbot-logout-session'
          },
          digital_butler_show_initial_modal: {
            bind: 'bbva-controller-chatbot-show-initial-modal'
          },
          global_open_control_veil: {
            bind: 'bbva-controller-chatbot-open-veil'
          },
          global_close_control_veil: {
            bind: 'bbva-controller-chatbot-close-veil'
          },
          [prefix + '_conversation_manager_initialized']: {
            bind: 'bbva-controller-chatbot-conversation-initialized'
          },
          digital_butler_button_secondary_header_click: {
            bind: 'bbva-controller-chatbot-btn-secondary-click'
          },
          digital_butler_call_authentication_open: {
            bind: 'bbva-controller-chatbot-open-call-authentication'
          },
          digital_butler_navigate_support_chat: {
            bind: 'bbva-controller-chatbot-navigate-to-conversations'
          },
          digital_butler_share_set_dynamic_template: {
            bind: 'bbva-controller-chatbot-set-dynamic-template'
          },
          digital_butler_share_set_template_selected: {
            bind: 'bbva-controller-chatbot-set-template-selected'
          },
          digital_butler_share_capture_receipt: {
            bind: 'bbva-controller-chatbot-generate-receipt'
          },
          digital_butler_chatbot_open_modal_success: {
            bind: 'bbva-controller-chatbot-open-modal-success'
          },
          digital_butler_chatbot_set_data_modal_success: {
            bind: 'bbva-controller-chatbot-set-data-modal-success'
          },
          digital_butler_chatbot_geolocation_get_current_position: {
            bind: 'bbva-controller-chatbot-get-geolocation'
          },
          digital_butler_open_settings: {
            bind: 'bbva-controller-chatbot-navigate-to-settings'
          },
          digital_butler_open_qr_camera: {
            bind: 'bbva-controller-chatbot-open-qr-camera'
          },
          [prefix + '_navigation_without_params']: {
            bind: 'bbva-controller-chatbot-navigate',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          [prefix + '_navigation_wit_product_id']: {
            bind: 'bbva-controller-chatbot-navigate-with-product-id',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          navigate_national_id_and_videoselfie: {
            bind: 'bbva-controller-chatbot-navigate-national-id-and-videoselfie',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          global_navigate_to_show_cvv: {
            bind: 'bbva-controller-chatbot-navigate-card-digital',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'digitalProductId'
              }
            }
          },
          [prefix + '_navigation_loan_detail_to_show_nip']: {
            bind: 'bbva-controller-chatbot-navigate-view-card-pin-cvv',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId',
                cardNumber: 'cardNumber',
                cardVariant: 'cardVariant',
                cardKindPayment: 'cardKindPayment',
                cardExpirationDate: 'cardExpirationDate',
                cardHolderName: 'cardHolderName',
                cardProductId: 'cardProductId',
                cardHolderType: 'cardHolderType'
              }
            }
          },
          global_account_set_view_more_transactions: {
            bind: 'bbva-controller-chatbot-navigate-account-movements',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          global_card_set_view_more_transactions: {
            bind: 'bbva-controller-chatbot-navigate-card-movements',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          global_digital_butler_navigate_card_transaction_detail: {
            bind: 'bbva-controller-chatbot-navigate-card-movement-detail',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId',
                transactionId: 'transactionId',
                continue: 'continue',
                financingType: 'financingType',
                rewardBenefits: 'rewardBenefits',
                pobPromotionFlag: 'pobPromotionFlag',
                transactionNumber: 'transactionNumber'
              }
            }
          },
          global_digital_butler_navigate_account_transaction_detail: {
            bind: 'bbva-controller-chatbot-navigate-account-movement-detail',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId',
                transactionId: 'transactionId',
                continue: 'continue'
              }
            }
          },
          show_clarifications_management_care_channel: {
            bind: 'bbva-controller-chatbot-navigate-card-movements-refusal',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          navigation_product_detail_to_cardless_withdrawal: {
            bind: 'bbva-controller-chatbot-navigate-cardless-withdrawal',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                continue: 'continue'
              }
            }
          },
          [prefix + 'navigate_block_and_replacement']: {
            bind: 'bbva-controller-chatbot-navigate-block-and-replacement',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'cardId'
              }
            }
          },
          navigate_dashboard_to_transfer: {
            bind: 'bbva-controller-chatbot-navigate-transfers',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                continue: 'continue'
              }
            }
          },
          navigation_to_view_pin_with_qr_code: {
            bind: 'bbva-controller-chatbot-navigate-view-card-pin',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId',
                operativeAction: 'operativeAction'
              }
            }
          },
          navigation_accounts_channel: {
            bind: 'bbva-controller-chatbot-navigate-accounts',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          blue_navigate_pockets_welcome: {
            bind: 'bbva-controller-chatbot-navigate-pockets-welcome',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_global_navigate_pockets_create: {
            bind: 'bbva-controller-chatbot-navigate-pockets-create',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_pockets_list: {
            bind: 'bbva-controller-chatbot-navigate-pockets-list',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_global_navigate_pockets_add_money: {
            bind: 'bbva-controller-chatbot-navigate-pockets-add-money',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_global_navigate_pockets_withdrawal: {
            bind: 'bbva-controller-chatbot-navigate-pockets-withdrawal',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_mobile_top_up: {
            bind: 'bbva-controller-chatbot-navigate-mobile-top-up',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_mobile_top_up_packages: {
            bind: 'bbva-controller-chatbot-navigate-mobile-top-up-packages',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_fatca_validation_survey: {
            bind: 'bbva-controller-chatbot-navigate-fatca-validation-survey',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_update_email: {
            bind: 'bbva-controller-chatbot-navigate-update-email',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_profile: {
            bind: 'bbva-controller-chatbot-navigate-profile',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_atm_locator: {
            bind: 'bbva-controller-chatbot-navigate-atm-locator',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_customer_contracts: {
            bind: 'bbva-controller-chatbot-navigate-customer-contracts',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_cardless_withdrawal_historic: {
            bind: 'bbva-controller-chatbot-navigate-cardless-withdrawal-historic',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_cardless_withdrawal_historic_searcher: {
            bind: 'bbva-controller-chatbot-navigate-cardless-withdrawal-historic-searcher',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_blackhawk_purchase: {
            bind: 'bbva-controller-chatbot-navigate-blackhawk-purchase',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_parking_list: {
            bind: 'bbva-controller-chatbot-navigate-parking-list',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_parking_enrollment: {
            bind: 'bbva-controller-chatbot-navigate-parking-enrollment',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_register_tag: {
            bind: 'bbva-controller-chatbot-navigate-register-tag',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_reward: {
            bind: 'bbva-controller-chatbot-navigate-reward',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_parking_recharge: {
            bind: 'bbva-controller-chatbot-navigate-parking-recharge',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_profile_recipients: {
            bind: 'bbva-controller-chatbot-navigate-profile-recipients',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_goals: {
            bind: 'bbva-controller-chatbot-navigate-goals',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          blue_navigate_card_edit_alias: {
            bind: 'bbva-controller-chatbot-navigate-card-edit-alias',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          blue_navigate_recharge_tag: {
            bind: 'bbva-controller-chatbot-navigate-recharge-tag',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_pfm_dashboard_detail: {
            bind: 'bbva-controller-chatbot-navigate-pfm-dashboard-detail',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_card_generate_virtual: {
            bind: 'bbva-controller-chatbot-navigate-card-generate-virtual',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_blackhawk_purchase_detail: {
            bind: 'bbva-controller-chatbot-navigate-blackhawk-purchase-detail',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_navigate_soft_token: {
            bind: 'bbva-controller-chatbot-navigate-soft-token',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_navigate_videocall_hearing_strategic: {
            bind: 'bbva-controller-chatbot-navigate-videocall-hearing-strategic',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_navigate_emergency_lost_card: {
            bind: 'bbva-controller-chatbot-navigate-emergency-lost-card',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_navigate_operational_limits: {
            bind: 'bbva-controller-chatbot-navigate-operational-limits',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_card_points_transferl: {
            bind: 'bbva-controller-chatbot-navigate-points-transfer',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_key_recovery_update: {
            bind: 'bbva-controller-chatbot-navigate-key-recovery-update',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_discreet_mode_settings: {
            bind: 'bbva-controller-chatbot-navigate-discreet-mode-settings',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_emergency_zone: {
            bind: 'bbva-controller-chatbot-navigate-emergency-zone',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_security_access: {
            bind: 'bbva-controller-chatbot-navigate-security-access',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_security_menu_page: {
            bind: 'bbva-controller-chatbot-navigate-security-menu-page',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_security_tips_dashboard: {
            bind: 'bbva-controller-chatbot-navigate-security-tips-dashboard',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_frequent_operations_list: {
            bind: 'bbva-controller-chatbot-navigate-frequent-operations-list',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_request_branch_appointment_detail: {
            bind: 'bbva-controller-chatbot-navigate-request-branch-appointment-detail',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_international_transfers_panel: {
            bind: 'bbva-controller-chatbot-navigate-international-transfers-panel',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_codi_begin_register: {
            bind: 'bbva-controller-chatbot-navigate-codi-begin-register',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_additional_credit_card: {
            bind: 'bbva-controller-chatbot-navigate-additional-credit-card',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_card_credit_card_tracking: {
            bind: 'bbva-controller-chatbot-navigate-credit-card-tracking',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_oc_metasegura_offer: {
            bind: 'bbva-controller-chatbot-navigate-oc-metasegura-offer',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          blue_navigate_payments_third_party_wallet_provisioning: {
            bind: 'bbva-controller-chatbot-navigate-payments-third-party-wallet-provisioning',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          blue_navigate_codicel_agree_and_remove_consent: {
            bind: 'bbva-controller-chatbot-navigate-codicel-agree-and-remove-consent',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          navigate_profile_address_management: {
            bind: 'bbva-controller-chatbot-navigate-profile-address-management',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_credit_card_holder_spherica: {
            bind: 'bbva-controller-chatbot-navigate-credit-card-holder-spherica',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          blue_navigate_international_transfers: {
            bind: 'bbva-controller-chatbot-navigate-international-transfers',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_funds_hiring: {
            bind: 'bbva-controller-chatbot-navigate-funds-hiring',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_contract_product_section: {
            bind: 'bbva-controller-chatbot-navigate-contract-product-section',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_finance_transaction_multipurchase: {
            bind: 'bbva-controller-chatbot-navigate-finance-transaction-multipurchase',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          blue_navigate_bring_receipts: {
            bind: 'bbva-controller-chatbot-navigate-bring-receipts',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_oc_loan_offer: {
            bind: 'bbva-controller-chatbot-oc-loan-offer-page',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          blue_navigate_oc_loan_offer_spherica: {
            bind: 'bbva-controller-chatbot-oc-loan-offer-page-spherica',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          blue_navigate_card_more_info: {
            bind: 'bbva-controller-chatbot-card-more-info',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          blue_navigate_dashboard: {
            bind: 'bbva-controller-chatbot-dashboard',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_card_credit_card_payment: {
            bind: 'bbva-controller-chatbot-navigate-card-credit-card-payment',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                productId: 'productId',
                selectedPaymentOption: 'selectedPaymentOption',
                amountPaymentListeningMode: 'amountPaymentListeningMode'
              }
            }
          },
          blue_navigate_codi_qr_scanner: {
            bind: 'bbva-controller-chatbot-navigate-codi-qr-scanner',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_tag_card_list: {
            bind: 'bbva-controller-chatbot-navigate-tag-card-list',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_reward_origin_card: {
            bind: 'bbva-controller-chatbot-navigate-reward-origin-card-page',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_reward_origin_card: {
            bind: 'bbva-controller-chatbot-navigate-reward-origin-card-page',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_pfm_categorization: {
            bind: 'bbva-controller-chatbot-navigate-pfm-categorization',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_rewar_origin_card: {
            bind: 'bbva-controller-chatbot-navigate-reward-origin-card-page',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_request_fiscal_data: {
            bind: 'bbva-controller-chatbot-navigate-request-fiscal-data',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_request_stOut_Band: {
            bind: 'bbva-controller-chatbot-navigate-request-stOut-Band',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_international_transfers_contacts_book: {
            bind: 'bbva-controller-chatbot-navigate-international-transfers-contacts-book',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          blue_navigate_piggy_banks: {
            bind: 'bbva-controller-chatbot-navigate-piggy-banks',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          digital_butler_set_channel_config: {
            bind: 'bbva-controller-chatbot-blue-channel-config-flags'
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-digital-butler',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-digital-butler',
    render: 'litElement',
    properties: {
      availableActionsTypes,
      country: 'mx',
      cellsConnections: {
        in: {
          [prefix + '_conversation_created']: {
            bind: 'firstPageView'
          },
          [prefix + '_rating_analytic']: {
            bind: 'ratingAction'
          },
          digital_butler_button_secondary_header_click: {
            bind: 'termsAndConditions'
          },
          digital_butler_show_terms_and_conditions_first_time: {
            bind: 'termsAndConditions'
          },
          digital_butler_show_initial_modal: {
            bind: 'initialModal'
          },
          [prefix + '_sugestion_click']: {
            bind: 'suggestionAction'
          },
          [prefix + '_intent_change']: {
            bind: 'setIntent'
          },
          digital_butler_share_click: {
            bind: 'shareAction'
          },
          [prefix + '_conversation_manager_initialized']: {
            bind: 'returnToConversation'
          },
          [prefix + '_link_click']: {
            bind: 'linkIntentPage'
          },
          [prefix + '_message_error']: {
            bind: 'siteError'
          },
          [prefix + '_conversation_retry_error']: {
            bind: 'pageError'
          },
          [prefix + '_exit_feature']: {
            bind: 'reset'
          },
          digital_butler_show_otp_digital_vault: {
            bind: 'otpDigitalVault'
          },
          digital_butler_product_balance_click: {
            bind: 'productTypeClick'
          },
          digital_butler_continue_terms_and_conditions_button: {
            bind: 'continueTermsAndConditionsButton'
          },
          digital_butler_close_terms_and_conditions_modal: {
            bind: 'closeTermsAndConditionsModal'
          },
          digital_butler_open_terms_and_conditions_file: {
            bind: 'downloadTermsAndConditions'
          }
        },
        out: {
          digital_butler_conversation_page_view_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-page-view',
            analytics: analytics.getAdvancedPages('appPageView')
          },
          digital_butler_conversation_page_view_terms_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-page-view-terms',
            analytics: analytics.getAdvancedPages('appPageViewTerms')
          },
          digital_butler_conversation_page_view_terms_otp_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-page-view-terms-otp',
            analytics: analytics.getAdvancedPages('appPageViewTermsOtp')
          },
          digital_butler_conversation_interaction_level_terms_continue_button_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-interaction-level-continue-button',
            analytics: analytics.getAdvancedLinks('interactionTermsContinueButton')
          },
          digital_butler_conversation_interaction_level_terms_close_modal_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-interaction-level-close-modal',
            analytics: analytics.getAdvancedLinks('interactionTermsCloseModal')
          },
          digital_butler_conversation_download_link_terms_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-download-link',
            analytics: analytics.getAdvancedLinks('downloadLinkTerms')
          },
          digital_butler_conversation_interaction_level_rating_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-interaction-level-rating',
            analytics: analytics.getAdvancedLinks('interactionFeedback')
          },
          digital_butler_conversation_external_link_share_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-external-link-share',
            analytics: analytics.getAdvancedLinks('externalLinkShare')
          },
          digital_butler_conversation_interaction_level_suggestion_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-interaction-level-suggestion',
            analytics: analytics.getAdvancedLinks('interactionSuggestion')
          },
          digital_butler_conversation_interaction_level_view_info_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-interaction-level-view-info',
            analytics: analytics.getAdvancedLinks('interactionViewInfo')
          },
          digital_butler_conversation_interaction_level_chips_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-interaction-level-chips',
            analytics: analytics.getAdvancedLinks('interactionChips')
          },
          digital_butler_conversation_internal_link_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-internal-link',
            analytics: analytics.getAdvancedLinks('internalLink')
          },
          digital_butler_conversation_internal_link_product_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-internal-link-product',
            analytics: analytics.getAdvancedLinks('internalLinkProduct')
          },
          digital_butler_conversation_external_link_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-external-link',
            analytics: analytics.getAdvancedLinks('externalLink')
          },
          digital_butler_conversation_site_error_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-site-error',
            analytics: analytics.getErrors('siteError')
          },
          digital_butler_conversation_page_error_analytic: {
            bind: 'bbva-analyticmanager-digital-butler-page-error',
            analytics: analytics.getErrors('errorPage')
          }
        }
      }
    }
  };

  const modalTermsAndConditions = {
    zone: 'app__transactional',
    tag: 'blue-modal-terms-and-conditions',
    familyPath: '@glomo-web-components/bbva-widget-chatbot',
    render: 'litElement',
    properties: {
      localStorageKey: localStorageKeys.modal,
      modalConfig: {
        showFirstTime: true
      },
      microillustration: {
        alt: sphericaPageUtils.isSpherica() ? 'officialDocument' : 'official_document',
        size: 'XL'
      },
      host,
      requiredToken,
      native,
      nativeIos,
      country: getCountry(),
      detailDownloadConfig: detailDownloadParams,
      otpId: pageName,
      subProductId: 'TYC',
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'setFeatureFlags'
          },
          digital_butler_init_page: {
            bind: 'init'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          digital_butler_button_secondary_header_click: {
            bind: 'open'
          },
          digital_butler_show_initial_modal: {
            bind: 'open'
          },
          [`global_storage_get_${localStorageKeys.modal}_success`]: {
            bind: 'getModalStorageSuccess'
          },
          [`global_storage_get_${localStorageKeys.modal}_error`]: {
            bind: 'getModalStorageError'
          }
        },
        out: {
          global_open_document_url: {
            bind: 'blue-modal-terms-and-conditions-request-post-document'
          },
          global_retry_error: {
            bind: 'blue-modal-terms-and-conditions-retry-error'
          },
          digital_butler_controller_open_veil: {
            bind: 'blue-modal-terms-and-conditions-open-veil'
          },
          digital_butler_controller_close_veil: {
            bind: 'blue-modal-terms-and-conditions-close-veil'
          },
          digital_butler_close_feature_header: {
            bind: 'blue-modal-terms-and-conditions-back-step'
          },
          global_set_in_storage: {
            bind: 'blue-modal-terms-and-conditions-save-in-storage'
          },
          global_get_from_storage: {
            bind: 'blue-modal-terms-and-conditions-get-from-storage'
          },
          digital_butler_show_terms_and_conditions_first_time: {
            bind: 'blue-modal-terms-and-conditions-show-terms-and-conditions-first-time'
          },
          digital_butler_show_otp_digital_vault: {
            bind: 'blue-modal-terms-and-conditions-show-otp-digital-vault'
          },
          digital_butler_continue_terms_and_conditions_button: {
            bind: 'blue-modal-terms-and-conditions-show-otp-digital-vault'
          },
          digital_butler_open_terms_and_conditions_file: {
            bind: 'blue-modal-terms-and-conditions-request-post-document'
          },
          digital_butler_close_terms_and_conditions_modal: {
            bind: 'help-modal-close-icon-click'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };

  const controllerAuthentication = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-chatbot-authentication',
    familyPath: '@glomo-web-components/bbva-controller-chatbot',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      aapTargetAuthentication,
      cellsConnections: {
        in: {
          digital_butler_call_authentication_open: {
            bind: 'handleInheritanceAuthentication'
          },
          digital_butler_navigate_support_chat: {
            bind: 'navigateToSupportChat'
          }
        },
        out: {
          global_action_launcher_dialer: {
            bind: 'open-call-action-plug-in'
          },
          set_journey_id: {
            bind: 'navigate-support-center-chat-set-journey-id'
          },
          authentication_open_spinner_event: {
            bind: 'open-spinner-event'
          },
          authentication_close_spinner_event: {
            bind: 'close-spinner-event'
          },
          navigate_to_support_center_chat: {
            bind: 'navigate-support-center-chat',
            link: {
              page: 'supportCenterChat'
            }
          }
        }
      }
    }
  };

  const modalSuccessResponse = {
    zone: 'app__transactional',
    tag: 'blue-modal-successfull-response',
    familyPath: '@glomo-web-components/bbva-widget-chatbot',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          digital_butler_chatbot_open_modal_success: {
            bind: 'open'
          },
          digital_butler_chatbot_set_data_modal_success: {
            bind: 'modalConfig'
          }
        },
        out: {
          digital_butler_share_click: {
            bind: 'blue-modal-successfull-response-share-click'
          }
        }
      }
    }
  };

  const internalLinkProvider = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-technicalcore-internal-link-provider',
    tag: 'bbva-technicalcore-internal-link-provider',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      excludeSanitizeParams,
      versionCustomerV1: CONFIG.globalServices.versions.customersV1,
      versionDossier: CONFIG.globalServices.versions.dossiers,
      versionCatalogs: CONFIG.globalServices.versions.catalogs,
      versionPayments: CONFIG.globalServices.versions.paymentsV0,
      versionSavingGoals: CONFIG.globalServices.versions.savingGoals,
      versionAccountsV2: CONFIG.globalServices.versions.accountsV2,
      versionCards: CONFIG.globalServices.versions.cardsV1,
      versionCardsDm: CONFIG.globalServices.versions.cardsV2,
      versionPromotionsV1: CONFIG.globalServices.versions.promotionsV1,
      versionCardsDm: CARDS_CHARGES_AND_COMMISSIONS,
      originAmount: 'ORIGIN_AMOUNT',
      cellsConnections: {
        in: {
          blue_navigate_to_external: {
            bind: 'initializeDataProvider'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          dashboard_accounts: {
            bind: 'accountsData'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_feature_flag_collection_updated: {
            bind: 'financialGlobalFeatureFlags'
          },
          dashboard_set_operationals: {
            bind: 'setClientContracts'
          },
          global_get_transactions_data_success: {
            bind: 'succesfulTransactionsData'
          },
          global_get_transaction_detail_data_success: {
            bind: 'succesfulTransactionDetailData'
          },
          success_response_brand_list_blue: {
            bind: 'serviceBlackhawkSuccess'
          },
          success_dimo_transfer_return: {
            bind: 'dimoTransferReturn'
          },
          contract_product_section_reset_page: {
            bind: 'resetContractProductSection'
          }
        },
        out: {
          message_blue_redirect_link: {
            bind: 'redirect-link'
          },
          blue_redirect_data_account_selected: {
            bind: 'account-selected'
          },
          blue_name_pocket_listening_mode: {
            bind: 'send-pocket-name-listening-mode'
          },
          blue_amount_pocket_listening_mode: {
            bind: 'send-pocket-amount-listening-mode'
          },
          blue_amount_pocket_listening_mode_add_money: {
            bind: 'send-pocket-amount-listening-mode-add-money'
          },
          send_pocket_amount_listening_mode_withdrawal: {
            bind: 'send-pocket-amount-listening-mode-withdrawal'
          },
          blue_redirect_send_pocket_id: {
            bind: 'pocket-id'
          },
          blue_send_id_init_pocket_detail_add_money: {
            bind: 'send-pocket-id-listening-mode-add-money'
          },
          blue_send_id_init_pocket_detail_withdrawal: {
            bind: 'send-pocket-id-listening-mode-withdrawal'
          },
          blue_redirect_recharges_contacts: {
            bind: 'blue-recharge-contacts'
          },
          blue_amount_recharges: {
            bind: 'top-up-amount-selected'
          },
          blue_amount_provider: {
            bind: 'top-up-amount-provider'
          },
          blue_redirect_edit_profile_tax_residence: {
            bind: 'editProfileTaxResidence'
          },
          blue_redirect_pase_tag_navigation_to_recharge_tag: {
            bind: 'recharge-tag-detail'
          },
          blue_redirect_account_detail_parking: {
            bind: 'account-detail-parking'
          },
          blue_redirect_goal_listening_mode: {
            bind: 'goals-listening-mode'
          },
          pre_recharge_selectedAmount_listening_mode: {
            bind: 'pre-recharge-selectedAmount'
          },
          pre_recharge_selectedAccount_listening_mode: {
            bind: 'pre-recharge-selectedAccount'
          },
          amount_step_completed_listening_mode: {
            bind: 'amount-step-completed'
          },
          account_step_completed_listening_mode: {
            bind: 'account-step-completed'
          },
          blue_redirect_update_email: {
            bind: 'update-email'
          },
          blue_list_credit_card_limits_send_limits_list_to_edit: {
            bind: 'edit-credit-card-limit'
          },
          cp_info_modal: {
            bind: 'page-cache-error'
          },
          blue_navigate_promotions_tab_selected: {
            bind: 'set-tab-promotions-from-blue'
          },
          blue_navigate_promotions_tab_content_visibility_setted: {
            bind: 'set-visibility-content-promotions'
          },
          blue_redirect_update_recipients: {
            bind: 'blue-update-recipient-send-data'
          },
          blue_set_has_recipient: {
            bind: 'set-has-recipient'
          },
          blue_redirect_data_Amount_selected: {
            bind: 'setAmount-selected'
          },
          blue_flag_redirection_cardless_whith_drawal: {
            bind: 'blue-redirect'
          },
          goals_refund_data: {
            bind: 'goals-refund-data'
          },
          blue_redirect_blackhawk_purchase_detail: {
            bind: 'blue-redirect-blackhawk-purchase-detail'
          },
          steps_data_blackhawk: {
            bind: 'steps-data-blackhawk'
          },
          card_clicked: {
            bind: 'card-clicked'
          },
          launch_blackhawk: {
            bind: 'launch-blackhawk'
          },
          blue_redirect_points_transfer_card: {
            bind: 'card-points-transfer'
          },
          blue_redirect_points_transfer_products: {
            bind: 'products-points-transfer'
          },
          blue_redirect_international_type_transfers: {
            bind: 'set-type-transfers-data'
          },
          blue_redirect_additional_credit_card_main_page: {
            bind: 'card-detail'
          },
          blue_redirect_send_offer_id: {
            bind: 'send-offerId'
          },
          global_card_detail_data_success_channel: {
            bind: 'card-detail'
          },
          blue_redirect_request_branch_appointment_detail: {
            bind: 'request-branch-appointment-detail'
          },
          blue_navigate_to_third_party_wallet_provisioning: {
            bind: 'card-detail'
          },
          blue_navigate_to_contribution_goal: {
            bind: 'send-goal-to-contribute'
          },
          blue_navigate_to_contribution_goal_data: {
            bind: 'send-contribution-data'
          },
          blue_navigate_codi_to_blue: {
            bind: 'codi-begin-register-navigation-to-blue'
          },
          product_detail_blue_navigation_flag: {
            bind: 'product-detail-navigation-flag'
          },
          blue_navigate_payload_tdc_offer: {
            bind: 'tdc-offer-payload'
          },
          navigation_international_transfers_panel_dashboard_to_international_transfers_blue: {
            bind: 'dispatch-dashboard-one-account'
          },
          start_load_internal_link_provider_services: {
            bind: 'open-veil'
          },
          end_load_internal_link_provider_services: {
            bind: 'close-veil'
          },
          blue_navigate_send_product_id: {
            bind: 'send-product-id'
          },
          blue_navigate_send_transaction_id: {
            bind: 'send-transaction-card'
          },
          blue_navigate_pay_with_points: {
            bind: 'pay-with-points'
          },
          blue_navigate_send_card_detail: {
            bind: 'send-card-detail'
          },
          blue_navigate_send_card_image: {
            bind: 'send-card-image'
          },
          global_blue_update_national_id: {
            bind: 'update-national'
          },
          global_blue_update_address: {
            bind: 'send-update-address'
          },
          global_blue_transfer_data: {
            bind: 'send-transfer-data'
          },
          blue_global_cardless_withdrawal_historic_selected_filter_data: {
            bind: 'selected-filters-data'
          },
          digital_butler_manager_related_id: {
            bind: 'account-Id'
          },
          digital_butler_transaction_related: {
            bind: 'transaction-Id'
          },
          digital_butler_get_transaction_detail: {
            bind: 'get-transaction-detail'
          },
          digital_butler_get_transactions: {
            bind: 'get-transactions-list'
          },
          global_account_set_transaction_detail: {
            bind: 'transaction-data'
          },
          blue_account_produ_id: {
            bind: 'account-Id'
          },
          global_send_card_detail_data: {
            bind: 'card-detail'
          },
          blue_navigate_enroll_costumer_set_account: {
            bind: 'set-account-data'
          },
          blue_navigate_enroll_costumer_set_clabe: {
            bind: 'set-clabe-data'
          },
          blue_selected_pay_new_service: {
            bind: 'params-pay-new-service'
          },
          blue_navigate_dashboard_to_operations_frequent: {
            bind: 'bbva-technicalcore-internal-link-provider-open-modal'
          },
          blue_navigate_card_more_info_card: {
            bind: 'card-more-info-card'
          },
          blue_set_more_details_product: {
            bind: 'card-more-info'
          },
          blue_init_transfers: {
            bind: 'init-transfers'
          },
          blue_card_credit_card_payment_manager_product_id: {
            bind: 'productId-pay-tdc'
          },
          cards_blue_global_financial_overview_details: {
            bind: 'card-detail-tdc'
          },
          blue_selected_payment_option_card_credit: {
            bind: 'card-payment-option-result'
          },
          blue_searchWith_filters_promotions: {
            bind: 'blueSearch-WithFilters'
          },
          blue_pay_service_save_listening_mode: {
            bind: 'pay-service-save-listening-mode'
          },
          blue_send_raw_cards: {
            bind: 'send-all-credits-card'
          },
          blue_navigate_to_points_transfer: {
            bind: 'open-modal-transfers-points'
          },
          blue_set_direction_navigate: {
            bind: 'set-data-navigate'
          },
          blue_flag_show_search_place: {
            bind: 'set-show-search-place'
          },
          blue_redirect_pfm_dashboard_detail_flag: {
            bind: 'pfm-dashboard-detail-blue-flag'
          },
          blue_pay_with_points_flag: {
            bind: 'pay-with-points-flag'
          },
          blue_navigation_to_pfm_expenses_page_category: {
            bind: 'send-category'
          },
          blue_navigation_to_history_params: {
            bind: 'send-history-params'
          },
          blue_period_to_history_params: {
            bind: 'send-period'
          },
          blue_navigation_back_pfm: {
            bind: 'navigate-back'
          },
          blue_navigation_international_transfers: {
            bind: 'dispatch-dashboard-account'
          },
          blue_navigation_international_transfers_data: {
            bind: 'dispatch-international-transfers'
          },
          global_blue_send_tax_recidency: {
            bind: 'send-tax-residency'
          },
          global_blue_send_new_tax_recidency: {
            bind: 'send-new-tax-residency'
          },
          blue_send_feature_flag_value: {
            bind: 'change-accounts-service-version'
          },
          blue_transfers_set_dimo_back_action: {
            bind: 'codicel-peer-to-peer-transfer-review-back-action-reset'
          },
          blue_transfers_set_analytics_origin: {
            bind: 'set-analytics-origin-from-blue'
          },
          blue_transfers_disable_analytics_origin: {
            bind: 'disable-transfer-analytics-from-blue'
          },
          set_footer_hidden: {
            bind: 'set-contract-product-section-footer-hidden'
          },
          blue_set_left_icon: {
            bind: 'set-contract-product-section-left-button'
          },
          blue_set_right_icon: {
            bind: 'set-contract-product-section-right-button'
          }
        }
      }
    }
  };

  const nativeconnectorSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          digital_butler_open_settings: {
            bind: 'openSetting'
          }
        },
        out: {
          set_open_settings: {
            bind: 'setting-opened',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const nativeConnectorActionLauncher = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-nativeconnector-action-launcher',
    tag: 'bbva-nativeconnector-action-launcher',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          digital_butler_open_settings: {
            bind: 'openAppSettings'
          }
        }
      }
    }
  };

  const accounts = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts',
    properties: {
      host,
      accountsApiVersion: CONFIG.globalServices.versions.accountsV2,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          blue_send_feature_flag_value: {
            bind: 'accountsApiVersion'
          },
          digital_butler_manager_related_id: {
            bind: 'accountId'
          },
          digital_butler_transaction_related: {
            bind: 'transactionId'
          },
          digital_butler_get_transaction_detail: {
            bind: 'getTransactionDetail'
          },
          digital_butler_get_transactions: {
            bind: 'getTransactions'
          }
        },
        out: {
          global_get_transactions_data_success: {
            bind: 'set-account-transactions'
          },
          global_get_transaction_detail_data_success: {
            bind: 'set-account-transaction-detail'
          }
        }
      }
    }
  };

  const blackHawkDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-blackhawk',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          launch_blackhawk: {
            bind: 'getBrandList'
          }
        },
        out: {
          success_response_brand_list_blue: {
            bind: 'success-response-brand-list'
          },
          error_response_brand_list: {
            bind: 'error-response-brand-list'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      language: getLanguage(),
      dataHourFormat: 'D MMMM YYYY, HH:mm:ss [h]',
      cellsConnections: {
        in: {
          digital_butler_share_set_template_selected: {
            bind: 'result'
          },
          digital_butler_share_capture_receipt: {
            bind: 'captureReceipt'
          },
          digital_butler_share_set_dynamic_template: {
            bind: 'addDynamicTemplate'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const geolocation = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-mobile-geolocation',
    properties: {
      cellsConnections: {
        in: {
          digital_butler_chatbot_geolocation_get_current_position: {
            bind: 'getCurrentPosition'
          }
        },
        out: {
          digital_butler_chatbot_geolocation_set_current_position: {
            bind: 'current-position-available'
          },
          digital_butler_chatbot_geolocation_error: {
            bind: 'error'
          }
        }
      }
    }
  };

  const managerQrScanner = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-qr-scanner',
    tag: 'bbva-manager-qr-scanner',
    render: 'litElement',
    properties: {
      qrPluginConfigs,
      selectedPluginConfig: CONFIG.nativeIos ? 'ios' : 'android',
      cellsConnections: {
        in: {
          digital_butler_open_qr_camera: {
            bind: 'managePluginParams'
          }
        },
        out: {
          digital_butler_qr_plugin_params: {
            bind: 'glomo-qr-plugin-params'
          }
        }
      }
    }
  };

  const nativeconnectorBbvaQr = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    tag: 'bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          digital_butler_qr_plugin_params: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          digital_butler_native_camera_code_reader_result: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          digital_butler_qr_scanner_plugin_response_error: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/digital-butler'
    },
    pages,
    template,
    components: [
      geolocation,
      pluginSpeechRecognition,
      cellsShareGenericReceipt,
      lifeCycle,
      createSpinner(CONFIG),
      modalSuccessResponse,
      modalTermsAndConditions,
      controllerChatbot,
      controllerAuthentication,
      internalLinkProvider,
      digitalButler,
      analyticsManager,
      blackHawkDM,
      accounts,
      managerQrScanner,
      nativeconnectorBbvaQr
    ]
  };

  if (native) {
    base.components.push(glomoOpenDocument(CONFIG), nativeIos ? nativeConnectorActionLauncher : nativeconnectorSettings);
  }

  _localStorage.addOutStorageChannels(base.components, Object.values(localStorageKeys), CONFIG);

  const signWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signWidgetConnector('bbva-technicalcore-internal-link-provider');

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('blue-modal-terms-and-conditions', pageName, ['customer-terms-api-dm-create', 'customer-terms-api-dm-create-error']);

  errorAndSignWidgetConnector(CONFIG)(base)(digitalButler.tag, {
    widgetId: pageName,
    cancelAfterErrorFunction: 'signatureCancelled'
  });
  return sphericaPageUtils.spherize(base);
};
