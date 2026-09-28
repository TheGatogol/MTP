/* eslint-disable complexity, max-statements, new-cap */
'use strict';
const moment = require('moment');
module.exports = CONFIG => {
  const { environment } = CONFIG;
  const { useNames, toUnderscoreCase, SPINNER: spinner, glomoOpenDocument, getCountry, getShortInvestedDate, getShortDate, connectionsIn, connectionsOut } = require('./common/helpers/_utils');
  const localStorageGet = require('./common/_local-storage');
  const pageName = 'digitalActivation';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const channelName = 'digital_activation';
  const spinnerMain = spinner(CONFIG);
  const spinnerVeridas = spinner(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const host = CONFIG.globalServices.host;
  const hostGrantingTicket = CONFIG.globalServices.hostGrantingTicket;
  const pages = require('./common/_pages')(CONFIG)('digitalActivation');
  const maxSteps = 6;
  const operativePrefix = toUnderscoreCase(channelName).toLowerCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const analytics = require('./analytics/_digitalActivation')(CONFIG);
  const analyticsMonoproduct = require('./analytics/_monoproduct')(CONFIG);
  const transversalAnalytics = require('./analytics/_transversalMonoproduct')();
  const glomoOpenDocumentPdf = glomoOpenDocument(CONFIG);
  const storageKeysDigitalActivation = [ 'deviceId' ];
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const native = CONFIG.native || false;
  const isSpherica = sphericaPageUtils.isSpherica();
  spinnerMain.tagSpherica = 'cells-spinner-veil-spherica';
  spinnerMain.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const policyEsf = {
    allow: {
      letters: true,
      numbers: true,
      special: false,
      ignoreCase: false
    },
    require: {
      length: 8,
      'uppercase_letters': 1,
      'lowercase_letters': 1,
      letters: 0,
      numbers: 1,
      special: 0,
      quality: 1,
      distance: 1
    },
    limit: {
      length: 10,
      'identical_char': 3,
      'consecutive_number': 0,
      'reverse_consecutive_number': 0,
      'consecutive_char': 3,
      'reverse_consecutive_char': 3,
      compromised: 3
    },
    qualityMap: {
      '3': [3, 4],
      '2': [ 2 ],
      '1': [ 1 ]
    }
  };

  const spinnerWithText = spinner(CONFIG);
  spinnerWithText.tagSpherica = 'cells-spinner-veil-spherica';
  spinnerWithText.properties.id = 'spinner-with-text';
  spinnerWithText.properties.topMessage = '';
  spinnerWithText.properties.messages = [ 'digital-activation-monoproduct-veridas-spinner' ];
  spinnerWithText.properties.spinnerWithText = true;
  spinnerWithText.properties.cellsConnections.in = {
    [getChannelName('show_spinner_with_text')]: {
      bind: 'openVeil'
    },
    [getChannelName('close_spinner_with_text')]: {
      bind: 'closeVeil'
    }
  };

  const userPhoneInput = {
    id: 'phone',
    autofocus: false,
    labelInput: `digital-activation-card-advice-user-phone-label${isSpherica ? '-spherica' : ''}`,
    allowedDocumentValues: '^[0-9]{10,10}$',
    errorMessage: 'digital-activation-card-advice-user-phone-error-message',
    errorMessageIcon: 'coronita:alert',
    maxLength: 10,
    icon: 'coronita:close',
    iconLabel: 'icon-label-clear',
    iconAction: 'clear',
    iconEventAction: '',
    toggleEmptyFillIcons: '',
    hideIconMessage: true,
    iconMessage: '',
    iconVisibility: 'focused-content',
    hideIconButton: true,
    iconInfo: '',
    tagComponent: '',
    value: '',
    invalid: 'invalidPan',
    type: 'text',
    allowedChars: '^\\d$',
    firstInputMaxLength: 10,
    usePhoneModel: 'numeric',
    infoMessage: `digital-activation-card-advice-user-phone-info-message${isSpherica ? '-spherica' : ''}`
  };

  const userCardNumber = {
    id: 'pan',
    labelInput: 'digital-activation-card-advice-card-number-label',
    autofocus: false,
    errorMessage: `digital-activation-card-advice-card-number-error-message${isSpherica ? '-spherica' : ''}`,
    errorMessageIcon: 'coronita:alert',
    maxLength: 16,
    icon: 'coronita:camera',
    iconAction: 'event',
    iconEventAction: 'readCard',
    toggleEmptyFillIcons: 'toggle-empty-fill-icons',
    hideIconMessage: false,
    iconMessage: 'glomo-form-text-input-have-digital-card',
    hideIconButton: false,
    iconInfo: 'coronita:info',
    tagComponent: 'div',
    value: '',
    iconVisibility: 'always',
    allowedDocumentValues: '[0-9]{16,16}',
    invalid: 'invalidPan',
    type: 'text',
    secondInputMaxLength: 16,
    extraIcon: 'coronita:close',
    extraIconLabel: 'icon-label-clear',
    allowedChars: '^\\d$',
    usePhoneModel: 'numeric',
    infoMessage: `digital-activation-card-advice-card-number-info-message${isSpherica ? '-spherica' : ''}`
  };

  const cvvNumber = {
    id: 'cvv',
    autofocus: false,
    labelInput: 'cells-step-form-selects-texts-input-cvv-label',
    allowedDocumentValues: '^[0-2]{3,3}$',
    errorMessage: 'cells-step-form-selects-texts-input-cvv-error-message',
    errorMessageIcon: 'coronita:alert',
    maxLength: 3,
    icon: 'coronita:close',
    iconLabel: 'icon-label-pswd',
    iconAction: 'clear',
    iconEventAction: '',
    toggleEmptyFillIcons: '',
    hideIconMessage: true,
    iconMessage: '',
    iconVisibility: 'always',
    hideIconButton: true,
    iconInfo: '',
    tagComponent: '',
    value: '',
    invalid: 'invalidPan',
    type: 'password',
    allowedChars: '^\\d$',
    firstInputMaxLength: 3,
    usePhoneModel: 'numeric',
    infoMessage: 'cells-step-form-selects-texts-input-cvv-info-message'
  };

  const nipNumber = {
    id: 'nip',
    autofocus: false,
    labelInput: 'cells-step-form-selects-texts-input-nip-label',
    allowedDocumentValues: '[0-4]{4,4}',
    errorMessage: 'cells-step-form-selects-texts-input-nip-erro-message',
    errorMessageIcon: 'coronita:alert',
    maxLength: 4,
    icon: 'coronita:close',
    iconLabel: 'icon-label-pswd',
    iconAction: 'clear',
    iconEventAction: '',
    toggleEmptyFillIcons: '',
    hideIconMessage: true,
    iconMessage: '',
    iconVisibility: 'always',
    hideIconButton: true,
    iconInfo: '',
    tagComponent: '',
    value: '',
    invalid: 'invalidPan',
    type: 'password',
    allowedChars: '^\\d$',
    secondInputMaxLength: 4,
    usePhoneModel: 'numeric',
    infoMessage: 'cells-step-form-selects-texts-input-nip-info-message'
  };

  const errorTypes = [
    'cells-key-recovery-error-input-message-password-requirements',
    'cells-key-recovery-error-consecutive-chars',
    'cells-key-recovery-icon-message-error-bbva',
    'cells-key-recovery-error-input-message-password-numbers-requirements',
    'cells-key-recovery-error-input-message-password-numbers-requirements'
  ];

  const passwordInputValidationRegex = [ '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8,10}' ];

  const accessMonoproduct = {
    titleText: 'digital-activation-monoproduct-card-identification-form-access-monoproduct-title',
    texts: [ { text: 'digital-activation-monoproduct-card-identification-form-access-monoporduct-texts' } ],
    buttonConfig: { icon: 'coronita:forward' }
  };

  const configsInputs = {
    allowedDocumentValues: '[a-zA-Z ]',
    errorMessage: '',
    errorMessageIcon: '',
    maxLength: 40,
    icon: 'coronita:close',
    iconLabel: 'icon-label-clear',
    iconAction: 'clear',
    iconEventAction: '',
    toggleEmptyFillIcons: '',
    hideIconMessage: true,
    iconMessage: '',
    iconVisibility: 'focused-content',
    hideIconButton: false,
    iconInfo: '',
    tagComponent: '',
    value: '',
    invalid: 'invalidPan',
    type: 'text',
    allowedChars: '[a-zA-Z ]',
    firstInputMaxLength: 40,
    usePhoneModel: 'text',
    infoMessage: ''
  };

  const userNameInput = {
    ... configsInputs,
    id: 'name',
    autofocus: true,
    labelInput: 'digital-activation-monoproduct-card-identification-form-label-input-name'
  };

  const userLastNameInput = {
    ... configsInputs,
    id: 'lastname',
    autofocus: false,
    labelInput: 'digital-activation-monoproduct-card-identification-form-label-input-last-name'
  };

  const userSecondNameInput = {
    ... configsInputs,
    id: 'secondname',
    autofocus: false,
    labelInput: 'digital-activation-monoproduct-card-identification-form-label-input-second-name'
  };

  const userPhoneFormDataInput = {
    ... configsInputs,
    id: 'phoneMonoproduct',
    labelInput: 'digital-activation-monoproduct-card-identification-form-label-input-phone',
    allowedDocumentValues: '^[0-9]{10,10}$',
    errorMessage: 'Vdigital-activation-monoproduct-card-identification-form-label-input-phone-error-message',
    errorMessageIcon: 'coronita:alert',
    maxLength: 10,
    hideIconButton: true,
    allowedChars: '^\\d$',
    firstInputMaxLength: 10,
    usePhoneModel: 'numeric',
    infoMessage: 'digital-activation-monoproduct-card-identification-form-label-input-phone-info-message'
  };

  const userProductSelecteInput = {
    ... configsInputs,
    id: 'typeproduct',
    autofocus: false,
    labelInput: 'digital-activation-monoproduct-card-identification-form-label-input-credit',
    allowedDocumentValues: '[0-9]',
    maxLength: 20,
    iconVisibility: '',
    hideIconButton: true,
    allowedChars: '^\\d$',
    firstInputMaxLength: 20,
    usePhoneModel: 'numeric',
    infoMessage: 'digital-activation-monoproduct-card-identification-form-info-message-credit'
  };

  const qrPluginConfigs = {
    android: {
      codeType: 'QR',
      cameraConfig: {
        flash: false,
        autoFocus: true
      },
      customViewConfig: {
        name: 'qr_enrollment_view_overlay',
        options: {
          title: 'Registro',
          backgroundColor: '#072146',
          navBarBackgroundColor: '#194078',
          navBarTintColor: '#FFFFFF',
          firstButton: 'Tengo un QR',
          secondButton: 'No tengo un QR',
          firstFooterLabel: 'Escanea el QR al reverso de tu tarjeta.',
          secondFooterLabel: 'Si no tienes un QR, toma una foto de los 16 números de tu tarjeta.',
          closeImageName: 'ic_back'
        }
      },
      overlayConfig: {
        backgroundColor: '#73072146',
        captureFrameColor: '#5BBEFF',
        borderWidth: '0',
        isFrameVisible: false,
        isImageVisible: false,
        onlyCorners: true
      }
    },
    ios: {
      codeType: 'QR',
      cameraConfig: {
        flash: false,
        autoFocus: true
      },
      customViewConfig: {
        customViewName: 'qr_enrollment_view_overlay',
        id: 'qrEnrollmentView',
        options: {
          title: 'Registro',
          backgroundColor: '#072146',
          navBarBackgroundColor: '#194078',
          navBarTintColor: '#FFFFFF',
          firstButton: 'Tengo un QR',
          secondButton: 'No tengo un QR',
          firstFooterLabel: 'Escanea el QR al reverso de tu tarjeta.',
          secondFooterLabel: 'Si no tienes un QR, toma una foto de los 16 números de tu tarjeta.',
          closeImageName: 'ic_back'
        }
      },
      overlayConfig: {
        backgroundColor: '#101010',
        captureFrameColor: '#5BBEFF',
        borderWidth: '0',
        isImageVisible: false
      },
      showStatusBar: true
    }
  };

  const structureContractCud = {
    mimeType: 'application/pdf',
    title: 'Contrato Único Digital',
    headerColor: '#FFFFFFFF',
    tintColor: '#FF072146',
    canShare: false,
    titleColor: '#FF072146',
    blackStatusBar: false
  };

  const monoproductPropertiesForm = {
    monoproductFromFlag: true,
    changeLabel: 'digital-activation-card-identification-form-summary-change',
    disableChange: false,
    hideHeader: true,
    decorated: true,
    fixed: false,
    birthDate: {
      id: 'birthdate-input',
      autofocus: false,
      iconVisibility: 'always',
      icon: 'coronita:calendar',
      usePhoneModel: 'text',
      labelInput: 'digital-activation-monoproduct-card-identification-form-label-birth-date',
      type: 'text',
      iconSize: '24',
      dateFormat: 'MM/DD/YYYY',
      inputType: 'text',
      minDate: moment().subtract(120, 'years').format('YYYY-MM-DD'),
      maxDate: moment().subtract(18, 'years').format('YYYY-MM-DD'),
      readOnly: true,
      textDescription: 'digital-activation-monoproduct-card-identification-form-info-message-birth-date',
      messageIcon: 'coronita:alert'
    },
    flowDescription: {
      title: 'digital-activation-card-advice-flow-description-title',
      description: 'digital-activation-monoproduct-card-identification-form-flow-description-description'
    },
    userNameInput,
    userLastNameInput,
    userSecondNameInput,
    isBirthDate: true,
    placeOfBirtValue: {
      items: {}
    },
    productDescription: {
      title: 'digital-activation-monoproduct-card-identification-form-product-description-title',
      description: 'digital-activation-monoproduct-card-identification-form-product-description'
    },
    productSelect: {
      input: userProductSelecteInput
    },
    radioGroup: {
      selected: '',
      list: ['digital-activation-monoproduct-card-identification-form-radio-group-male',
        'digital-activation-monoproduct-card-identification-form-radio-group-female']
    },
    placeSelected: {
      name: 'digital-activation-monoproduct-card-identification-form-label-input-place-birth'
    },
    personalData: {
      name: '',
      birthDate: '',
      userLastName: '',
      userSecondName: '',
      placeSelected: {
        name: 'digital-activation-monoproduct-card-identification-form-label-input-place-birth'
      },
      gender: '',
      userPhoneInput: '',
      productNumber: ''
    },
    userPhoneFormDataInput
  };

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      className: 'cells-background-blue',
      extraHeaderClass: isNativeIos ? 'dark-blue-bg' : '',
      headerHeight: 60,
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      topOnConfirm: true,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('show_button_confirm_steps')]: {
            bind: 'showConfirm'
          },
          [getChannelName('init_page')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'showConfirm'
          }
        },
        out: {
          [getChannelName('scroll_template')]: {
            bind: 'opx-template-content-scroll'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    },
    propertiesSpherica: {
      className: `remove-display-container-slot force-confirm-button-bottom ${isNativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: 'header--white'
    }
  };

  const handleLifeCycle = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      private: false,
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
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_device_info_get_platform: {
            bind: 'init-page'
          },
          [getChannelName('secure_sharing_get_data')]: {
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

  const navigationHandler = {
    zone: 'app__header',
    type: 'DM',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          [getChannelName('go_back')]: {
            bind: 'goBack'
          },
          [getChannelName('go_to_live_chat')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('navigation_to_chat_welcome')]: {
            bind: 'navigation-to-chat-welcome',
            link: {
              page: 'chatWelcome'
            }
          }
        }
      }
    }
  };

  const moleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '20',
      titleName: 'digital-activation-header-text',
      cellsConnections: {
        in: {
          [getChannelName('hide_button_header_secondary')]: {
            bind: 'rightSecondaryIcon'
          }
        },
        out: {
          [getChannelName('back_button_navigation_reset')]: {
            bind: 'click-right-button'
          },
          digital_activation_chat_request: {
            bind: 'click-right-secondary-button'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-molecule-header-spherica',
      type: 'modal'
    })
  };

  const dmDigitalActivation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-digital-activation-dm-mx',
    familyPath: 'glomo-digital-activation-dm',
    properties: {
      application: CONFIG.app || '',
      country: getCountry(),
      host,
      hostGrantingTicket,
      native: CONFIG.native || false,
      environment: environment === 'de' ? 'dev' : environment,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      grantingTicketApiVersion: CONFIG.globalServices.versions.grantingTicket,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      contactDetailsApiVersion: CONFIG.globalServices.versions.contactDetails,
      businessDocumentsApiVersion: CONFIG.globalServices.versions.businessDocument,
      notificationApiVersion: CONFIG.globalServices.versions.notifications,
      consumerId: CONFIG.globalServices.consumerIdAnonymous || '10000088',
      consumerIdCard: CONFIG.globalServices.consumerIdAnonymous || '10000088',
      authenticationTypeNumber: CONFIG.authenticationTypeNumber,
      authenticationTypeBirthDate: CONFIG.authenticationTypeBirthDate,
      docTitle: 'glomo-digital-activation-terms-and-conditions',
      interrumpedConnectionCode: 'DIGITAL-ACTIVATION-INTERRUMPED-CONECCTION',
      interrumpedConnectionEvent: 'open-modal-alert',
      interrumpedConnectionMaxCode: 'DIGITAL-ACTIVATION-INTERRUMPED-CONECCTION-MAX-TRY',
      interrumpedConnectionMaxEvent: 'open-modal-alert',
      unidentifiedNotificationsCode: 'CLOSE-DIGITAL-ACTIVATION-UNIDENTIFIED-NOTIFICATIONS',
      unidentifiedNotificationsEvent: 'open-modal-alert',
      usePhysicalCardCode: 'CLOSE-DIGITAL-ACTIVATION-PHYSICAL-CARD',
      usePhysicalCardEvent: 'open-modal-alert',
      incorrectDataCode: 'CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA',
      incorrectDataEvent: 'open-modal-alert',
      incorrectDataMaxCode: 'CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-MAX-TRY',
      incorrectDataMaxEvent: 'open-modal-alert',
      applicationBlockedCode: 'CLOSE-DIGITAL-ACTIVATION-APPLICATION-BLOCKED',
      applicationBlockedEvent: 'open-modal-alert',
      registerUserCode: 'CLOSE-DIGITAL-ACTIVATION-REGISTER-USER',
      registerUserEvent: 'open-modal-alert',
      saveSignatureCode: 'CLOSE-DIGITAL-ACTIVATION-SAVE-SIGNATURE',
      saveSignatureEvent: 'open-modal-alert',
      hiringNotDoneCode: 'CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE',
      hiringNotDoneEvent: 'open-modal-alert',
      hiringNotDoneMaxCode: 'CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-MAX-TRY',
      hiringNotDoneMaxEvent: 'open-modal-alert',
      invalidCurpCode: 'CLOSE-DIGITAL-ACTIVATION-INVALID-CURP',
      invalidCurpEvent: 'open-modal-alert',
      notAvailableAppCode: 'CLOSE-DIGITAL-ACTIVATION-NOT-AVAILABLE-APP',
      notAvailableAppEvent: 'open-modal-alert',
      lockedTokenCode: 'CLOSE-DIGITAL-ACTIVATION-LOCKED-TOKEN',
      lockedTokenEvent: 'open-modal-alert',
      chatStartTime: CONFIG.chatStartTime,
      chatEndTime: CONFIG.chatEndTime,
      productDocumentId: 'CUD',
      titlePDFDigitalContract: 'digital-activation-title-pdf-single-digital-contract',
      titleTermsConditionsModal: 'digital-activation-privacy-title',
      authenticationTypeQrNumber: CONFIG.authenticationTypeQrNumber,
      authenticationTypeQrAlphaService: CONFIG.authenticationTypeQrAlphaService,
      consumerIdStatusQr: CONFIG.globalServices.consumerIdQrCard,
      consumerIdStatus: CONFIG.globalServices.consumerIdAnonymous || '10000088',
      userAnonymousConfig: CONFIG.globalServices.consumerIdAnonymous || '10000088',
      authenticationTypeDvs: CONFIG.authenticationTypeDvs,
      timeZone: 'America/Mexico_City',
      isActiveChat: false,
      isActiveLiveChat: true,
      isNativeIos,
      structureContractCud,
      phoneNumberCall: CONFIG.phoneNumberCall,
      guideColorOcr: '#1464a5',
      monoproductPropertiesForm,
      cellsConnections: {
        in: {
          digital_activation_get_bussiness_document_success: {
            bind: 'listBusinessDocumentSuccessTemplate'
          },
          navigation_set_data_pan_card_landing_digital_activation: {
            bind: 'dataPan'
          },
          global_storage_get_feature_flag_success: {
            bind: 'getLocalStogareFlags'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleBackButton'
          },
          digital_activation_cipher_keys_success: {
            bind: 'validateKeys'
          },
          digital_activation_decipher_qr_card_number_success: {
            bind: 'onDecipherQrSuccess'
          },
          digital_activation_decipher_qr_card_number_error: {
            bind: 'onDecipherQrError'
          },
          digital_activation_decrypt_data_success: {
            bind: 'rsaSuccess'
          },
          DIGITAL_ACTIVATION_PHONE_AND_CARD: {
            bind: 'postLoginAnonymous'
          },
          DIGITAL_ACTIVATION_TERMS_AND_CONDITIONS: {
            bind: 'listBusinessDocument'
          },
          [getChannelName('nip_cvv')]: {
            bind: 'getCardData'
          },
          [getChannelName('send_confirm')]: {
            bind: 'sendSignature'
          },
          [getChannelName('SEND_DATE_DM')]: {
            bind: 'getGrantingTicketBirthdate'
          },
          [getChannelName('contract_service')]: {
            bind: 'modalHelpPassword'
          },
          [getChannelName('step_information_card_advice')]: {
            bind: 'receiveStep'
          },
          [getChannelName('step_information_form_date')]: {
            bind: 'receiveStep'
          },
          [getChannelName('cells-step-email-send')]: {
            bind: 'receiveEmailFromStep'
          },
          [getChannelName('step_information_form_select_text')]: {
            bind: 'receiveStep'
          },
          [getChannelName('step_information_identity_validation')]: {
            bind: 'step-information-identity-validation'
          },
          DIGITAL_ACTIVATION_CLOSE_PAGE_CALL: {
            bind: 'reset'
          },
          [getChannelName('back_button_navigation_reset')]: {
            bind: 'handleCloseButton'
          },
          DIGITAL_ACTIVATION_QR_ERROR_MODAL_CANCEL: {
            bind: 'exitErrorModalGeneric'
          },
          DIGITAL_ACTIVATION_INTERRUMPED_DM_RESET_ACCEPT: {
            bind: 'exitErrorModalGeneric'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_MAX_TRY_CANCEL: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_APPLICATION_BLOCKED_CANCEL: {
            bind: 'exitErrorModalGeneric'
          },
          DIGITAL_ACTIVATION_REGISTER_USER_CANCEL: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_HIRING_NOT_DONE_MAX_TRY_CANCEL: {
            bind: 'exitErrorModalGeneric'
          },
          DIGITAL_ACTIVATION_DM_RESET_ACCEPT: {
            bind: 'exit'
          },
          DIGITAL_ACTIVATION_DM_RESET_CANCEL: {
            bind: 'exit'
          },
          DIGITAL_ACTIVATION_INVALID_CARD_ERROR_ACCEPT: {
            bind: 'stepsInterrumped'
          },
          DIGITAL_ACTIVATION_INVALID_CARD_ERROR_CANCEL: {
            bind: 'stepsInterrumped'
          },
          DIGITAL_ACTIVATION_ADDITIONAL_ACCEPT: {
            bind: 'stepsInterrumped'
          },
          DIGITAL_ACTIVATION_ADDITIONAL_CANCEL: {
            bind: 'stepsInterrumped'
          },
          DIGITAL_ACTIVATION_INVALID_CURP_ACCEPT: {
            bind: 'exitErrorModalGeneric'
          },
          DIGITAL_ACTIVATION_NOT_AVAILABLE_APP_ACCEPT: {
            bind: 'exitErrorModalGeneric'
          },
          DIGITAL_ACTIVATION_LOCKED_TOKEN_ACCEPT: {
            bind: 'exitErrorModalGeneric'
          },
          DIGITAL_ACTIVATION_ERROR_EXIT_MODAL: {
            bind: 'exitErrorModalGeneric'
          },
          DIGITAL_ACTIVATION_INTERRUMPED_MODAL_RETRY: {
            bind: 'stepsInterrumped'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_ACCEPT: {
            bind: 'stepsInterrumped'
          },
          [getChannelName('encrypted_data')]: {
            bind: 'getEncryptedData'
          },
          [getChannelName('encrypted_data-pin')]: {
            bind: 'getEncryptedDataPin'
          },
          [getChannelName('encrypted_data-cvv')]: {
            bind: 'getEncryptedDataCvv'
          },
          [getChannelName('correct_password')]: {
            bind: 'receivePasswordFromStep'
          },
          [getChannelName('date_changed')]: {
            bind: 'obtainedDate'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_MAX_TRY_ACCEPT: {
            bind: 'openCallBbva'
          },
          DIGITAL_ACTIVATION_APPLICATION_BLOCKED_ACCEPT: {
            bind: 'openCallBbva'
          },
          DIGITAL_ACTIVATION_REGISTER_USER_ACCEPT: {
            bind: 'openCallBbva'
          },
          DIGITAL_ACTIVATION_HIRING_NOT_DONE_MAX_TRY_ACCEPT: {
            bind: 'openCallBbva'
          },
          DIGITAL_ACTIVATION_SHOW_CALL_BBVA_LINE: {
            bind: 'openCallBbva'
          },
          DIGITAL_ACTIVATION_OPEN_BBVA_LINK: {
            bind: 'openBbvaLink'
          },
          DIGITAL_ACTIVATION_ADVISOR_CHAT: {
            bind: 'advisorchat'
          },
          DIGITAL_VALIDATION_ADVISOR_CHAT: {
            bind: 'advisorchat'
          },
          [getChannelName('show_modal_help_password')]: {
            bind: 'modalHelpPassword'
          },
          [getChannelName('nip_native')]: {
            bind: 'sendNativeQrData'
          },
          [getChannelName('modal_terms_condi')]: {
            bind: 'termsCondiModal'
          },
          digital_activation_signature_service_response: {
            bind: 'sendSignatureCustomerId'
          },
          digital_activation_signature_button_active: {
            bind: 'activeBtnService'
          },
          [getChannelName('disable-qr-flow')]: {
            bind: 'onResetQr'
          },
          DIGITAL_ACTIVATION_RESET_ADVISOR_CHAT: {
            bind: 'resetWithAdvisorChat'
          },
          DIGITAL_ACTIVATION_SHOW_BIRTH_DATE: {
            bind: 'showBirthdate'
          },
          digital_activation_chat_button_active: {
            bind: 'hideButtonHeaderChat'
          },
          [getChannelName('reset_card_number')]: {
            bind: 'cardNumberQr'
          },
          DIGITAL_ACTIVATION_ERROR_EXIT_MODAL_ADDITIONAL: {
            bind: 'exitAdditional'
          },
          KEY_RECOVERY_SEND_FLAG: {
            bind: 'registerUserData'
          },
          KEY_RECOVERY_DIGITAL_ACTIVATION_SEND: {
            bind: 'registerUserData'
          },
          [getChannelName('init_page')]: {
            bind: 'reviewStatus'
          },
          qr_reader_register_request: {
            bind: 'registerQR'
          },
          [getChannelName('get_user_landing_qr')]: {
            bind: 'reviewStatus'
          },
          DIGITAL_ACTIVATION_CANCEL: {
            bind: 'reset'
          },
          digital_activation_close_page_accepted_navigation: {
            bind: 'reset'
          },
          DIGITAL_ACTIVATION_CALL_BBVA_LINE: {
            bind: 'reset'
          },
          [getChannelName('close_page_accepted')]: {
            bind: 'exitDVS'
          },
          global_opened_modal: {
            bind: 'openModal'
          },
          DIGITAL_ACTIVATION_SIGNATURE_PAD_REQUEST: {
            bind: 'signaturePad'
          },
          global_open_document_base64_success: {
            bind: 'pdfSuccess'
          },
          global_open_document_base64_error: {
            bind: 'pdfError'
          },
          [getChannelName('capture_signature_success')]: {
            bind: 'signatureCaptureSuccess'
          },
          [getChannelName('send_signature_success')]: {
            bind: 'signatureSendSuccess'
          },
          [getChannelName('qr_scanner_plugin_response_error')]: {
            bind: 'errorQr'
          },
          [getChannelName('card_ocr_is_capable')]: {
            bind: 'buildOCRPayload'
          },
          [getChannelName('card_ocr_scanned')]: {
            bind: 'ocrCard'
          },
          [getChannelName('device_info_send_dm')]: {
            bind: 'device'
          },
          [getChannelName('qr_scanner_plugin_response_success')]: {
            bind: 'qrScannerResponse'
          },
          [getChannelName('pressed_term_and_conditions')]: {
            bind: 'privacyModal'
          },
          [getChannelName('ine_document')]: {
            bind: 'initIdentityValidation'
          },
          DIGITAL_ACTIVATION_ACCEPT_DOCUMENT_MODAL: {
            bind: 'checkCameraState'
          },
          DIGITAL_ACTIVATION_CANCEL_DOCUMENT_MODAL: {
            bind: 'checkCameraState'
          },
          DIGITAL_ACTIVATION_ACCEPT_SELFIE_MODAL: {
            bind: 'startSelfieCaptureFlow'
          },
          DIGITAL_ACTIVATION_CANCEL_SELFIE_MODAL: {
            bind: 'startSelfieCaptureFlow'
          },
          DIGITAL_ACTIVATION_ACCEPT_SUCCESS_VALIDATION_MODAL: {
            bind: 'successValidationIdentity'
          },
          [getChannelName('open_veridas_box_success')]: {
            bind: 'openVeridasBoxSuccess'
          },
          [getChannelName('open_veridas_box_error')]: {
            bind: 'errorIdentityValidationProcess'
          },
          [getChannelName('put_document_verification_without_flash_success')]: {
            bind: 'successPutDocumentWithoutFlash'
          },
          [getChannelName('put_document_verification_without_flash_error')]: {
            bind: 'errorIdentityValidationProcess'
          },
          [getChannelName('put_document_verification_with_flash_success')]: {
            bind: 'successPutDocumentWithFlash'
          },
          [getChannelName('put_document_verification_with_flash_error')]: {
            bind: 'errorIdentityValidationProcess'
          },
          [getChannelName('put_document_verification_reverse_success')]: {
            bind: 'successPutDocumentReverse'
          },
          [getChannelName('put_document_verification_reverse_error')]: {
            bind: 'errorIdentityValidationProcess'
          },
          [getChannelName('put_document_verification_selfie_success')]: {
            bind: 'successPutSelfie'
          },
          [getChannelName('put_document_verification_selfie_error')]: {
            bind: 'errorIdentityValidationProcess'
          },
          [getChannelName('put_document_verification_selfie_alive_success')]: {
            bind: 'successPutSelfieAlive'
          },
          [getChannelName('put_document_verification_selfie_alive_error')]: {
            bind: 'errorIdentityValidationProcess'
          },
          [getChannelName('post_document_verification_execute_success')]: {
            bind: 'successCloseVeridasBox'
          },
          [getChannelName('post_document_verification_execute_error')]: {
            bind: 'errorIdentityValidationProcess'
          },
          [getChannelName('get_document_verification_success')]: {
            bind: 'getVeridasBoxStatusSucess'
          },
          [getChannelName('get_document_verification_error')]: {
            bind: 'errorIdentityValidationProcess'
          },
          DIGITAL_ACTIVATION_CLOSE_VERIFY_INFO_ERROR_MODAL: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_ACCEPT_VERIFY_INFO_ERROR_MODAL: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_RETRY_OPERATION_NOTAVAILABLE_MODAL: {
            bind: 'failedServices'
          },
          DIGITAL_ACTIVATION_RETRY_COMMUNICATION_INE_MODAL: {
            bind: 'openVeridasBox'
          },
          [getChannelName('post_enrollment_request_success')]: {
            bind: 'successPostEnrollmentRequest'
          },
          [getChannelName('post_enrollment_request_error')]: {
            bind: 'errorPostEnrollmentRequest'
          },
          [getChannelName('post_active_notifications_success')]: {
            bind: 'activeNotificationsSuccess'
          },
          [getChannelName('post_active_notifications_error')]: {
            bind: 'activeNotificationsError'
          },
          sign_modal_cancelled: {
            bind: 'otpCancelled'
          },
          [getChannelName('hidden_decorated_cud')]: {
            bind: 'hideDecorated'
          },
          [getChannelName('active_step_password')]: {
            bind: 'hideDecorated'
          },
          DIGITAL_ACTIVATION_ACCEPT: {
            bind: 'navigateToCall'
          },
          DIGITAL_ACTIVATION_OPEN_BRANCH_OFFICES: {
            bind: 'navigateToAtm'
          },
          global_feature_flag_collection_updated: {
            bind: 'setNotificationsEnrollmentDAFlagGlobal'
          },
          DIGITAL_ACTIVATION_SELECT_ENROLL_TYPE: {
            bind: 'initEnrolmentType'
          },
          DIGITAL_ACTIVATION_MONOPRODUCT_FROM_DATA_MONO_PRODUCT: {
            bind: 'startHiringMonoProduct'
          },
          DIGITAL_ACTIVATION_ACCEPT_REGISTER_MODAL: {
            bind: 'initEntryPointMonoProduct'
          },
          DIGITAL_ACTIVATION_CLOSE_REGISTER_MODAL: {
            bind: 'initEntryPointMonoProduct'
          },
          [getChannelName('monoproduct_set_countries_mx')]: {
            bind: 'getCountriesMx'
          },
          [getChannelName('monoproduct_set_error_countries_mx')]: {
            bind: 'getCountriesMxError'
          },
          DIGITAL_ACTIVATION_DATE_PICKER_SUCCESS: {
            bind: 'formatDate'
          },
          DIGITAL_ACTIVATION_NEXT_STEP_MODAL: {
            bind: 'validateSubscription'
          },
          DIGITAL_ACTIVATION_ACCEPT_USER_WITH_CREDIT_CARD: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_CLOSE_USER_WITH_CREDIT_CARD: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_ACCEPT_INVALID_CREDIT: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_CLOSE_INVALID_CREDIT: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_ACCEPT_USER_REGISTRED: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_CLOSE_USER_REGISTRED: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_ACCEPT_INVALID_PHONE: {
            bind: 'exitDVS'
          },
          DIGITAL_ACTIVATION_CLOSE_INVALID_PHONE: {
            bind: 'exitDVS'
          },
          digital_activation_request_camera_permissions_success: {
            bind: 'checkCameraState'
          },
          digital_activation_request_camera_permissions_error: {
            bind: 'handlePermissionErrors'
          },
          digital_activation_post_success: {
            bind: 'startDocumentCaptureFlow'
          },
          digital_activation_document_capture_success: {
            bind: 'documentCaptureSuccess'
          },
          digital_activation_capture_error: {
            bind: 'handlePluginError'
          },
          digital_activation_selfie_capture_success: {
            bind: 'processingSelfieCapture'
          },
          digital_activation_selfie_capture_error: {
            bind: 'handlePluginError'
          },
          digital_activation_update_signature_type: {
            bind: 'updateActiveNotificationHeaders'
          },
          digital_activation_update_signature_type_new_otp: {
            bind: 'signGetNewOtp'
          },
          digital_activation_live_chat: {
            bind: 'validateOpeningHours'
          },
          digital_activation_get_bussiness_document_error: {
            bind: 'showIdRucErrorModal'
          }
        },
        out: {
          digital_activation_get_bussiness_document: {
            bind: 'glomo-digital-activation-get-bussiness-document'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          digital_activation_get_cipher_rsa_keys: {
            bind: 'get-cipher-rsa-keys'
          },
          global_get_from_storage: {
            bind: 'set-flags-collection-storage'
          },
          global_logout_sesion_expiration: {
            bind: 'glomo-digital-activation-dm-exit'
          },
          [getChannelName('go_back')]: {
            bind: 'go-back-dm'
          },
          digital_activation_trace_app_on_click_start: {
            bind: 'trace-app-on-click-start'
          },
          digital_activation_analytics_flag_flow: {
            bind: 'update-flag-flow'
          },
          digital_activation_send_flag_call_flow: {
            bind: 'update-flag-call-flow'
          },
          digital_activation_decipher_qr_card_number: {
            bind: 'decipher-qr-card-number'
          },
          digital_activation_decrypt_data_params: {
            bind: 'decrypt-data-rsa'
          },
          digital_activation_send_user_type: {
            bind: 'send-user-type-being-activated'
          },
          [getChannelName('step_modal_interrumped')]: {
            bind: 'step-modal-interrumped'
          },
          [getChannelName('step_contract_service_active_button')]: {
            bind: 'step-service-contract-active-button'
          },
          DIGITAL_ACTIVATION_OPEN_HELP_PASSWORD_RECOVERY: {
            bind: 'open-modal-help-password-recovery'
          },
          [getChannelName('set_button')]: {
            bind: 'digital-activation-enable-button-date'
          },
          [getChannelName('reset_input')]: {
            bind: 'digital-activation-reset-button-date'
          },
          DIGITAL_ACTIVATION_SUCCESS_EMAIL: {
            bind: 'digital-activation-success'
          },
          [getChannelName('show_step_cvv_nip_all')]: {
            bind: 'show-step-cvv-nip'
          },
          [getChannelName('show_step_cvv_nip')]: {
            bind: 'show-step-cvv-nip'
          },
          [getChannelName('show_step_cvv_nip_active')]: {
            bind: 'show-step-cvv-nip'
          },
          [getChannelName('show_step_qr_nip_active')]: {
            bind: 'show-step-cvv-nip-qr-flag'
          },
          [getChannelName('qr_nip')]: {
            bind: 'show-step-cvv-nip-qr-flag'
          },
          [getChannelName('show_step_qr_nip')]: {
            bind: 'show-step-cvv-nip-qr-flag'
          },
          [getChannelName('show_step_qr_nip_all')]: {
            bind: 'show-step-cvv-nip-qr-flag'
          },
          [getChannelName('analytics_show_step_cvv_nip_active')]: {
            bind: 'show-step-cvv-nip'
          },
          [getChannelName('analytics_birth_date')]: {
            bind: 'show-step-birth-date'
          },
          [getChannelName('show_step_birth_date')]: {
            bind: 'show-step-birth-date'
          },
          [getChannelName('show_step_birth_date_active')]: {
            bind: 'show-step-birth-date'
          },
          [getChannelName('show_step_birth_date_input')]: {
            bind: 'show-step-input-date'
          },
          [getChannelName('show_step_mail')]: {
            bind: 'show-step-email'
          },
          [getChannelName('cvv_encrypt_request')]: {
            bind: 'send-cvv-to-encrypt-event'
          },
          [getChannelName('pin_encrypt_request')]: {
            bind: 'send-pin-to-encrypt-event'
          },
          digital_activation_pre_activate_error: {
            bind: 'notify-pre-activate-error'
          },
          DIGITAL_ACTIVATION_CURRENT_STEP: {
            bind: 'current-step-next'
          },
          DIGITAL_ACTIVATION_CURRENT_STEP_PASSWORD: {
            bind: 'current-step-password'
          },
          [getChannelName('step_digital_contract_service')]: {
            bind: 'active-step'
          },
          [getChannelName('analytics_step_two')]: {
            bind: 'active-step'
          },
          [getChannelName('active_step_mail')]: {
            bind: 'active-step-email'
          },
          [getChannelName('analytics_modal_help_password')]: {
            bind: 'show-modal-help-password-data'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-modal-alert'
          },
          [getChannelName('send_qr_card_number')]: {
            bind: 'send-qr-card-number'
          },
          [getChannelName('scan_card_data')]: {
            bind: 'build-payload-card-data'
          },
          [getChannelName('send_ocr_card_number')]: {
            bind: 'send-ocr-card-number'
          },
          digital_activation_card_number_from_native: {
            bind: 'native-mobile-receive-card'
          },
          DIGITAL_ACTIVATION_ENCRYPTED_CARD_NUMBER: {
            bind: 'send-encrypted-card-number'
          },
          [getChannelName('hide_step_birth_date')]: {
            bind: 'hide-step-birth-date'
          },
          [getChannelName('hide_step_cvv_nip')]: {
            bind: 'hide-step-cvv-nip'
          },
          [getChannelName('hide_step_mail')]: {
            bind: 'hide-step-email'
          },
          [getChannelName('hide_header')]: {
            bind: 'hide-header'
          },
          [getChannelName('reset_steps_opx')]: {
            bind: 'reset-steps'
          },
          [getChannelName('reset_step_mail')]: {
            bind: 'reset-steps-email'
          },
          digital_activation_show_spinner: {
            bind: 'open-control-veil'
          },
          digital_activation_hide_spinner: {
            bind: 'close-control-veil'
          },
          [getChannelName('analytics_call_complete')]: {
            bind: 'digital-activation-success-page-trace'
          },
          digital_activation_send_persisting_activate_data: {
            bind: 'digital-activation-call-activate-data'
          },
          digital_activation_send_persisting_call_up_data: {
            bind: 'digital-activation-call-up-data'
          },
          [getChannelName('device_info_call')]: {
            bind: 'digital-activation-device-info-call'
          },
          [getChannelName('call_analytics_profile')]: {
            bind: 'digital-activation-call-analytics-profile'
          },
          digital_activation_call_bbva_line_request: {
            bind: 'digital-activation-call-bbva-line'
          },
          digital_activation_alpha_global_services: {
            bind: 'update-alphaServices-flag'
          },
          digital_activation_alpha_qr_global_services: {
            bind: 'update-alphaServicesQr-flag'
          },
          digital_activation_alpha_global_services_flow_satus: {
            bind: 'send-data-type-flow'
          },
          digital_activation_qr_persist_status: {
            bind: 'update-isQrFlow-flag'
          },
          digital_activation_signature_service_request: {
            bind: 'send-signature-data-native'
          },
          [getChannelName('hiden_steps')]: {
            bind: 'hiden-steps'
          },
          [getChannelName('regex_match_validation')]: {
            bind: 'set-regex-match-validation'
          },
          [getChannelName('hide_button_header_secondary')]: {
            bind: 'icon-secundary-header'
          },
          digital_activation_send_date_native: {
            bind: 'date-success'
          },
          [getChannelName('back_flow_reset')]: {
            bind: 'reset-flow-navigation-back'
          },
          [getChannelName('call_qr_status')]: {
            bind: 'persist-status-qr'
          },
          [getChannelName('qr_reader_reset')]: {
            bind: 'reset-qr-reader-activation'
          },
          [getChannelName('analytics_send_profile_user')]: {
            bind: 'send-profile-analytics-digital-activation'
          },
          [getChannelName('analytics_open_additional_modal')]: {
            bind: 'digital-activation-show-modal-additional'
          },
          [getChannelName('analytics_open_invalid_curp_modal')]: {
            bind: 'digital-activation-show-invalid-curp-modal'
          },
          global_generic_error_dinamic: {
            bind: 'glomo-digital-activation-dm-general-error'
          },
          digital_activation_open_bbva_link_request: {
            bind: 'digital-activation-open-bbva-link'
          },
          DIGITAL_ACTIVATION_CALL_BBVA_LINE: {
            bind: 'digital-activation-call-bbva-line'
          },
          global_hanlder_native_back_button: {
            bind: 'close-modal'
          },
          global_open_document_base64: {
            bind: 'native-download-receipt'
          },
          [getChannelName('capture_signature')]: {
            bind: 'native-signature'
          },
          [getChannelName('send_signature')]: {
            bind: 'send-signature'
          },
          global_action_launcher_dialer: {
            bind: 'open-call-bbva'
          },
          [getChannelName('analytics_type_flow')]: {
            bind: 'send-data-type-flow'
          },
          [getChannelName('analytics_reset_analytics_flow')]: {
            bind: 'reset-steps'
          },
          qr_scanner_plugin_qr_card_success: {
            bind: 'send-data-qr-card-success'
          },
          [getChannelName('analytics_show_process_modal')]: {
            bind: 'show-process-modal'
          },
          [getChannelName('identity_validation_properties')]: {
            bind: 'show-step-identity-validation'
          },
          DIGITAL_ACTIVATION_SHOW_DOCUMENT_MODAL: {
            bind: 'show-document-modal'
          },
          DIGITAL_ACTIVATION_SHOW_SELFIE: {
            bind: 'show-selfie-modal'
          },
          DIGITAL_ACTIVATION_SUCCESS_VALIDATION: {
            bind: 'show-success-validation-modal'
          },
          digital_activation_show_spinner_veridas: {
            bind: 'show-identity-validation-spinner'
          },
          digital_activation_hide_spinner_veridas: {
            bind: 'hide-identity-validation-spinner'
          },
          [getChannelName('step_identity_validation')]: {
            bind: 'active-step-identity-validation'
          },
          [getChannelName('show_identity_validation')]: {
            bind: 'hidden-step-identity-validation'
          },
          [getChannelName('open_veridas_documents_box')]: {
            bind: 'open-veridas-box'
          },
          [getChannelName('put_document_verification')]: {
            bind: 'put-documents-verification'
          },
          [getChannelName('close_veridas_documents_box')]: {
            bind: 'close-veridas-box'
          },
          [getChannelName('verify_veridas_box_status')]: {
            bind: 'verify-veridas-box-status'
          },
          [ getChannelName('post_enrollment_request') ]: {
            bind: 'post-enrollment-request'
          },
          [getChannelName('post_active_notifications')]: {
            bind: 'post-active-notification-request'
          },
          digita_activation_send_mobile_number: {
            bind: 'send-mobile-number'
          },
          digital_activation_send_mobile_number_native: {
            bind: 'send-mobile-number-native'
          },
          digital_activation_send_mobile_number_native_flag_alpha: {
            bind: 'send-mobile-number-native-flag-alpha',
            'forward-to-native': true
          },
          [getChannelName('hidden_decorated')]: {
            bind: 'hide-decorated-step'
          },
          [getChannelName('reset_identity_step')]: {
            bind: 'reset-identity-validation-step'
          },
          [getChannelName('hidden_decorated_cvv')]: {
            bind: 'hide-decorated-step-cvv'
          },
          [getChannelName('hidden_decorated_cud')]: {
            bind: 'hide-decorated-step-cud'
          },
          [getChannelName('navigate_to_page')]: {
            bind: 'digital-activation-navigate-to-page',
            link: {
              page: {
                bind: 'page'
              },
              skipHistory: true
            }
          },
          [getChannelName('decorated_steps')]: {
            bind: 'decorated-steps-alerts'
          },
          [getChannelName('monoproduct_get_countries_mx')]: {
            bind: 'get-places-mx'
          },
          DIGITAL_ACTIVATION_DATE_FORMAT: {
            bind: 'send-date-with-format'
          },
          DIGITAL_ACTIVATION_MONOPRODUCT_USER_DATA_PROPERTIES: {
            bind: 'monoproduct-user-data-properties'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_ACCESS_CARD: {
            bind: 'show-user-with-card-modal'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_VERIFY_PHONE_NUMBER: {
            bind: 'user-monoproduct-invalid-phone'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_VERIFY_CREDIT_NUMBER: {
            bind: 'show-error-credit-modal'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_PREVIOUSLY_REGISTERED: {
            bind: 'show-user-registered-modal'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_ACTIVE_ALERTS: {
            bind: 'user-monoproduct-with-alerts'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_WITHOUT_CAMERA_PERMISSIONS_ERROR: {
            bind: 'show-error-permissions-camera-modal'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_VERIDAS_COMUNICATION_ERROR: {
            bind: 'show-error-veridas-comunication-modal'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_VERIDAS_VALIDATION_ERROR: {
            bind: 'show-error-veridas-validation-modal'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_INE_COMUNICATION_ERROR: {
            bind: 'show-error-ine-comunication-modal'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_NOT_REALIZED_OPERATION_ERROR: {
            bind: 'show-error-not-realized-operation-modal'
          },
          [ getChannelName('collapsed_identity_validation') ]: {
            bind: 'decorated-collapsed-step-identity-validation'
          },
          [ getChannelName('fixed_identification_form') ]: {
            bind: 'fixed-step-identification-form'
          },
          digital_activation_check_camera_state: {
            bind: 'check-dvs-camera-state'
          },
          digital_activation_request_camera_permissions: {
            bind: 'request-dvs-camera-permissions'
          },
          launched_document_capture: {
            bind: 'start-document-capture'
          },
          launched_selfie_capture: {
            bind: 'start-capture-with-config-selfie'
          },
          digital_activation_update_active_notification_headers: {
            bind: 'update-active-notification-headers'
          },
          digital_activation_resend_active_notification_otp: {
            bind: 'signature-type-enabled-digitalActivation'
          },
          DIGITAL_ACTIVATION_MONOPRODUCT_FLAG: {
            bind: 'update-monoproduct-flag'
          },
          [getChannelName('activate_modal_outside_of_service_hours')]: {
            bind: 'outside-of-service-hours'
          },
          [getChannelName('go_to_live_chat')]: {
            bind: 'go-to-live-chat'
          },
          [getChannelName('outside_of_service_hours_body_text')]: {
            bind: 'outside-of-service-hours-body-text'
          },
          [getChannelName('outside_of_service_hours_button_text')]: {
            bind: 'outside-of-service-hours-button-text'
          },
          digital_activation_hidden_check_box: {
            bind: 'hidden-check-box'
          },
          [getChannelName('inhibit_cud_step')]: {
            bind: 'inhibit-cud'
          },
          [getChannelName('send_flag_transversal')]: {
            bind: 'send-flag-transversal'
          },
          open_digital_account_multistep_send_deeplink_indicator: {
            bind: 'set-not-deeplink-indicator'
          },
          digital_activation_send_transversal_enroll: {
            bind: 'send-transversal-flow',
            link: {
              page: 'openDigitalAccountMultistep'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            digital_activation_alert_manager_open_with_settings_spherica: {
              bind: 'open-modal-alert'
            },
            digital_activation_set_step_title: {
              bind: 'set-step-title-date'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const opxDigitalActivation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-digital-activation-dm',
    properties: {
      host,
      native: CONFIG.native || false,
      pageName,
      maxSteps,
      cellsConnections: {
        in: {
          [getChannelName('decorated_steps')]: {
            bind: 'decorateSteps'
          },
          [getChannelName('init_page')]: {
            bind: 'init'
          },
          [getChannelName('close_page_accepted')]: {
            bind: 'manageBackButton'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'registerStep',
            previousState: true
          },
          [getChannelName('next_step')]: {
            bind: 'nextStep'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('reset_steps_opx')]: {
            bind: 'resetContent'
          },
          [getChannelName('phone_card_change_pressed')]: {
            bind: 'goToStep'
          },
          [getChannelName('phone_card_chage_step_state')]: {
            bind: 'goToStep'
          },
          [getChannelName('nip_cvv_chage_step_state')]: {
            bind: 'goToStep'
          },
          [getChannelName('save_signature_chage_step_state')]: {
            bind: 'goToStep'
          },
          [getChannelName('date_birth_chage_step_state')]: {
            bind: 'goToStep'
          },
          [getChannelName('step_modal_interrumped')]: {
            bind: 'goToStep'
          },
          [getChannelName('identity_validation_step_state')]: {
            bind: 'goToStep'
          },
          [getChannelName('phone_card_chage_step_state')]: {
            bind: 'manageStateSteps'
          },
          [getChannelName('hiden_steps')]: {
            bind: 'hideStepsFlow'
          },
          DIGITAL_ACTIVATION_CLOSE_MOBILE: {
            bind: 'resetContent'
          },
          qr_reader_register_request: {
            bind: 'registerQR'
          }
        },
        out: {
          [getChannelName('show_button_confirm_steps')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'reset-scroll'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'all-steps-collapsed-changed'
          },
          [getChannelName('get_user_landing_qr')]: {
            bind: 'get-user-landing-qr'
          },
          digital_activation_navigate_to_login: {
            bind: 'navigate-to-login',
            backStep: true,
            'foward-to-native': true
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            digital_activation_step_label_services: {
              bind: 'set-displayed-current-and-max-step-label-services'
            },
            digital_activation_step_label_recovery: {
              bind: 'set-displayed-current-and-max-step-label-recovery'
            }
          }
        }
      }
    }
  };

  const analyticsDmDigitalActivation = {
    zone: 'app__main',
    tag: 'glomo-analytics-digital-activation-mx-manager',
    familyPath: '@glomo-web-components/glomo-analytics-digital-activation-manager',
    render: 'litElement',
    type: 'DM',
    properties: {
      isPreActivation: true,
      flagAnalyticsFlow: true,
      cellsConnections: {
        in: {
          digital_activation_analytics_flag_flow: {
            bind: 'flagAnalyticsFlow'
          },
          [getChannelName('init_page')]: {
            bind: 'footprintIdentify'
          },
          [getChannelName('analytics_camera_to_native')]: {
            bind: 'appStarted'
          },
          [getChannelName('analytics_input_phone')]: {
            bind: 'appStarted'
          },
          [getChannelName('analytics_input_card')]: {
            bind: 'appStarted'
          },
          [getChannelName('analytics_privacy')]: {
            bind: 'appStarted'
          },
          [getChannelName('analytics_send_profile_user')]: {
            bind: 'profile'
          },
          [getChannelName('call_analytics_profile')]: {
            bind: 'profile'
          },
          [getChannelName('analytics_step_two')]: {
            bind: 'appPageVisit'
          },
          DIGITAL_ACTIVATION_HELP_PASSWORD_MODAL_ACCEPT: {
            bind: 'appStepTwo'
          },
          [getChannelName('analytics_collapsed_complete')]: {
            bind: 'appStepThree'
          },
          [getChannelName('analytics_call_complete')]: {
            bind: 'completed'
          },
          digital_activation_trace_app_on_click_start: {
            bind: 'appOnClickStart'
          },
          [getChannelName('show_step_cvv_nip_active')]: {
            bind: 'tracePageView'
          },
          [getChannelName('analytics_show_process_modal')]: {
            bind: 'traceService'
          },
          DIGITAL_ACTIVATION_ACCEPT_PROCESS_MODAL: {
            bind: 'activeIdentityValidation'
          },
          DIGITAL_ACTIVATION_SHOW_DOCUMENT_MODAL: {
            bind: 'traceDocument'
          },
          DIGITAL_ACTIVATION_SHOW_SELFIE: {
            bind: 'traceSelfie'
          },
          DIGITAL_ACTIVATION_SUCCESS_VALIDATION: {
            bind: 'traceSuccess'
          },
          [getChannelName('otp')]: {
            bind: 'traceOtp'
          },
          [getChannelName('analytics_signature_pad_request')]: {
            bind: 'traceSignature'
          },
          [getChannelName('analytics_birth_date')]: {
            bind: 'traceDate'
          },
          [getChannelName('analytics_modal_help_password')]: {
            bind: 'tracePassword'
          },
          [getChannelName('analytics_open_additional_modal')]: {
            bind: 'traceAdditionalError'
          },
          [getChannelName('analytics_open_invalid_curp_modal')]: {
            bind: 'traceCurpError'
          },
          DIGITAL_ACTIVATION_NOT_AVAILABLE_APP_ACCEPT: {
            bind: 'traceNotAvailable'
          },
          DIGITAL_ACTIVATION_LOCKED_TOKEN_ACCEPT: {
            bind: 'traceLockedToken'
          },
          [getChannelName('back_button_navigation')]: {
            bind: 'resetAnalytics'
          },
          [getChannelName('close_page_accepted')]: {
            bind: 'resetAnalytics'
          },
          [getChannelName('analytics_reset_analytics_flow')]: {
            bind: 'resetAnalytics'
          },
          [getChannelName('analytics_type_flow')]: {
            bind: 'typeFlow'
          },
          DIGITAL_ACTIVATION_REGISTER_INFO_MODAL: {
            bind: 'traceInformation'
          },
          DIGITAL_ACTIVATION_MONOPRODUCT_USER_DATA_PROPERTIES: {
            bind: 'traceData'
          },
          [getChannelName('active_step_mail')]: {
            bind: 'traceEmail'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_ACCESS_CARD: {
            bind: 'traceAccessWithCard'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_VERIFY_PHONE_NUMBER: {
            bind: 'traceVerifyPhoneNumber'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_VERIFY_CREDIT_NUMBER: {
            bind: 'traceVerifyCreditNumber'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_PREVIOUSLY_REGISTERED: {
            bind: 'tracePreviouslyRegistered'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_ACTIVE_ALERTS: {
            bind: 'traceActiveAlerts'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_WITHOUT_CAMERA_PERMISSIONS_ERROR: {
            bind: 'traceNoCameraPermissions'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_VERIDAS_COMUNICATION_ERROR: {
            bind: 'traceVeridasComunicationError'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_VERIDAS_VALIDATION_ERROR: {
            bind: 'traceVeridasValidationError'
          },
          DIGITAL_ACTIVATION_SHOW_MODAL_NOT_REALIZED_OPERATION_ERROR: {
            bind: 'traceOperationNotRealizedError'
          },
          DIGITAL_ACTIVATION_PHONE_AND_CARD: {
            bind: 'appOnClickStartContinue'
          },
          DIGITAL_ACTIVATION_TERMS_AND_CONDITIONS: {
            bind: 'appStartedTermsConditions'
          },
          DIGITAL_ACTIVATION_SIGNATURE_PAD_REQUEST: {
            bind: 'appStartedSignature'
          },
          DIGITAL_ACTIVATION_SELECT_ENROLL_TYPE: {
            bind: 'appOnClickStartTransversal'
          }
        },
        out: {
          DIGITAL_ACTIVATION_ANALYTICS_FOOTPRINT_IDENTIFY: {
            bind: 'digital-activation-analytic-footprint-identify',
            analytics: analytics._getAdvancedFootprint('transversal', 'identificate')
          },
          DIGITAL_ACTIVATION_ANALYTICS_APP_PAGE_VISIT: {
            bind: 'digital-activation-analytic-app-page-visit',
            analytics: analytics.APP_PAGE_VISIT
          },
          [getChannelName('analytics_app_step_two')]: {
            bind: 'digital-activation-analytic-app-step-two',
            analytics: analytics.PASSWORD
          },
          [getChannelName('analytics_app_step_three')]: {
            bind: 'digital-activation-analytic-app-step-three',
            analytics: analytics.CONFIRMATION
          },
          [getChannelName('analytics_on_click_start')]: {
            bind: 'digital-activation-analytic-app-on-click-start'
          },
          [getChannelName('analytics_app_huella_page_view')]: {
            bind: 'digital-activation-analytic-trace-page-view',
            analytics: analytics._getAdvancedFootprint('default', 'datos de la tarjeta')
          },
          [getChannelName('analytics_app_huella_process_modal')]: {
            bind: 'digital-activation-analytic-active-service',
            analytics: analytics._getAdvancedFootprint('alert', 'informacion identidad')
          },
          [getChannelName('analytics_app_huella_active_identity_validation')]: {
            bind: 'digital-activation-analytic-active-step-identity-validation',
            analytics: analytics._getAdvancedFootprint('alert', 'verificacion de identidad')
          },
          [getChannelName('analytics_app_huella_document')]: {
            bind: 'digital-activation-analytic-trace-document',
            analytics: analytics._getAdvancedFootprint('alert', 'indicaciones ine')
          },
          [getChannelName('analytics_app_huella_selfie')]: {
            bind: 'digital-activation-analytic-trace-selfie',
            analytics: analytics._getAdvancedFootprint('alert', 'indicaciones selfie')
          },
          [getChannelName('analytics_app_huella_success')]: {
            bind: 'digital-activation-analytic-trace-success',
            analytics: analytics._getAdvancedFootprint('alert', 'validacion identidad exitosa')
          },
          [getChannelName('analytics_app_huella_otp')]: {
            bind: 'digital-activation-analytic-trace-otp',
            analytics: analytics._getAdvancedFootprint('alert', 'otp')
          },
          [getChannelName('analytics_app_huella_firma')]: {
            bind: 'digital-activation-analytic-trace-signature',
            analytics: analytics._getAdvancedFootprint('common', 'ingreso de firma')
          },
          [getChannelName('analytics_trace_password')]: {
            bind: 'digital-activation-analytic-trace-password',
            analytics: analytics._getAdvancedFootprint('common', 'crear nueva contrasena')
          },
          [getChannelName('analytics_app_huella_fecha_nacimiento')]: {
            bind: 'digital-activation-analytic-trace-date',
            analytics: analytics._getAdvancedFootprint('common', 'fecha de nacimiento')
          },
          [getChannelName('analytics_app_huella_not_available')]: {
            bind: 'digital-activation-analytic-trace-not-available',
            analytics: analytics._getAdvancedFootprint('error', 'app no disponible')
          },
          [getChannelName('analytics_app_huella_locked_token')]: {
            bind: 'digital-activation-analytic-trace-locked-token',
            analytics: analytics._getAdvancedFootprint('errorBlock', 'token bloqueado')
          },
          [getChannelName('analytics_app_huella_error_adicional')]: {
            bind: 'digital-activation-analytic-trace-error-adicional',
            analytics: analytics._getAdvancedFootprint('errorUser', 'error titularidad tarjeta')
          },
          [getChannelName('analytics_app_trace_curp_error')]: {
            bind: 'digital-activation-analytic-trace-curp-error',
            analytics: analytics._getAdvancedFootprint('errorUser', 'error completar activacion')
          },
          [getChannelName('analytics_app_completed')]: {
            bind: 'digital-activation-analytic-app-completed',
            analytics: analytics.COMPLETED
          },
          [getChannelName('analytics_monoproduct_information')]: {
            bind: 'digital-activation-analytic-trace-information',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'informacion')
          },
          [getChannelName('analytics_monoproduct_data')]: {
            bind: 'digital-activation-analytic-trace-data',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'datos')
          },
          [getChannelName('analytics_monoproduct_process')]: {
            bind: 'digital-activation-analytic-trace-process',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'proceso')
          },
          [getChannelName('analytics_monoproduct_identity_verification')]: {
            bind: 'digital-activation-analytic-trace-identity-verification',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'verifica identidad')
          },
          [getChannelName('analytics_monoproduct_ine_indications')]: {
            bind: 'digital-activation-analytic-trace-ine-indications',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'indicaciones ine')
          },
          [getChannelName('analytics_monoproduct_selfie_indications')]: {
            bind: 'digital-activation-analytic-trace-selfie-indications',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'indicaciones selfie')
          },
          [getChannelName('analytics_monoproduct_success_identity')]: {
            bind: 'digital-activation-analytic-trace-success-identity',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'verificacion identidad exitosa')
          },
          [getChannelName('analytics_monoproduct_otp')]: {
            bind: 'digital-activation-analytic-monoproduct-trace-otp',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'otp')
          },
          [getChannelName('analytics_monoproduct_email')]: {
            bind: 'digital-activation-analytic-trace-email',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'correo electronico')
          },
          [getChannelName('analytics_monoproduct_access_with_card')]: {
            bind: 'digital-activation-analytic-trace-access-with-card',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'accede con tu tarjeta')
          },
          [getChannelName('analytics_monoproduct_verify_phone_number')]: {
            bind: 'digital-activation-analytic-trace-verify-phone-number',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'verifica numero telefono')
          },
          [getChannelName('analytics_monoproduct_verify_credit_number')]: {
            bind: 'digital-activation-analytic-trace-verify-credit-number',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'verifica numero credito')
          },
          [getChannelName('analytics_monoproduct_previously_registered')]: {
            bind: 'digital-activation-analytic-trace-previously-registered',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'registrado previamente')
          },
          [getChannelName('analytics_monoproduct_active_alerts')]: {
            bind: 'digital-activation-analytic-trace-active-alerts',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct', 'alertas activas')
          },
          [getChannelName('analytics_monoproduct_no_camera_permissions')]: {
            bind: 'digital-activation-analytic-trace-no-camera-permissions',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct.cameraPermissionsError', 'sin permisos camara', 'error')
          },
          [getChannelName('analytics_monoproduct_veridas_comunication_error')]: {
            bind: 'digital-activation-analytic-trace-veridas-comunication-error',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct.veridasComunicationError', 'error de comunicacion veridas', 'error')
          },
          [getChannelName('analytics_monoproduct_veridas_validation_error')]: {
            bind: 'digital-activation-analytic-trace-veridas-validation-error',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct.veridasValidationError', 'error de validacion veridas', 'error')
          },
          [getChannelName('analytics_monoproduct_not_realized_operation_error')]: {
            bind: 'digital-activation-analytic-trace-not-realized-operation-error',
            analytics: analyticsMonoproduct.advancedFootprintFlag('monoproduct.operationNotRealizedError', 'operacion no realizada', 'error')
          },
          DIGITAL_ACTIVATION_ANALYTICS_TRANSVERSAL_STARTED_IDENTIFY: {
            bind: 'digital-activation-analytic-transversal-started-identify',
            analytics: transversalAnalytics.appStarted
          },
          DIGITAL_ACTIVATION_ANALYTICS_ON_CLICK_START_CONTINUE: {
            bind: 'digital-activation-analytic-app-on-click-start-continue',
            analytics: analytics._getOnClickStart('continue')
          },
          DIGITAL_ACTIVATION_ANALYTICS_APP_STARTED_TERMS_CONDITIONS: {
            bind: 'digital-activation-analytic-app-started-terms',
            analytics: analytics.APP_STARTED
          },
          DIGITAL_ACTIVATION_ANALYTICS_APP_STARTED_SIGNATURE: {
            bind: 'digital-activation-analytic-app-signature',
            analytics: analytics.APP_STARTED
          },
          DIGITAL_ACTIVATION_ANALYTICS_ON_CLICK_START_TRANSVERSAL: {
            bind: 'digital-activation-analytic-app-on-click-start-transversal',
            analytics: analytics._getOnClickStart('transversal')
          }
        }
      }
    }
  };

  const deviceAccessesController = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-device-accesses-controller',
    tag: 'glomo-device-accesses-mx-controller',
    properties: {
      typeDevice: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('secure_sharing_get_data')]: {
            bind: 'secureSharingData'
          },
          global_device_get_device_platform_success: {
            bind: 'platformInfo'
          },
          global_device_get_device_model_success: {
            bind: 'modelInfo'
          },
          global_device_get_manufacturer_success: {
            bind: 'manufacturer'
          },
          global_storage_get_deviceId_success: {
            bind: 'deviceId'
          }
        },
        out: {
          global_device_info_get_model: {
            bind: 'device-info-started'
          },
          global_device_info_get_manufacturer: {
            bind: 'device-info-started'
          },
          [getChannelName('device_info_send_dm')]: {
            bind: 'device-accesses-send-device-info'
          },
          global_get_from_storage: {
            bind: 'get-from-local-storage'
          }
        }
      }
    }
  };

  const stepCardIdentificationForm = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-identification-form',
    tagSpherica: 'cells-step-card-identification-form-spherica',
    properties: {
      stepId: 'step-card-advice',
      stepTitle: 'digital-activation-card-advice-step-title',
      currentStep: 1,
      hideCurrentStepLabel: true,
      active: true,
      dataListClass: 'on-dark',
      maskedIcon: '•',
      disableChange: true,
      isNoticePrivacy: true,
      className: 'digital-activation cells-background-blue',
      masked: true,
      headerContent: {
        image: './images/devices_illustration.svg',
        headerTitle: 'digital-activation-card-advice-header-content-title',
        headerDescription: 'digital-activation-card-advice-header-content-description'
      },
      flowDescription: {
        title: 'digital-activation-card-advice-flow-description-title',
        description: 'digital-activation-card-advice-flow-description-description'
      },
      userPhoneInput,
      userCardNumber,
      accessMonoproduct,
      isAccessMonoproduct: true,
      buttonLabel: 'digital-activation-button-text',
      summaryTexts: {
        nameDescription: 'digital-activation-monoproduct-card-identification-form-label-input-name',
        phoneDescription: 'digital-activation-card-advice-summary-texts-phone-description',
        cardDescription: 'digital-activation-card-advice-summary-texts-card-description'
      },
      characterQrCard: '•',
      inputType: ['phone', 'pan', 'nip', 'cvv'],
      enterKeyCode: 13,
      descriptionContinuing: 'digital-activation-card-identification-form-description-continuing',
      noticePrivacy: {
        message: 'digital-activation-card-identification-form-notice-privacy'
      },
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          DIGITAL_ACTIVATION_PHYSICAL_CARD_ACCEPT: {
            bind: 'reopenStep'
          },
          DIGITAL_ACTIVATION_PHYSICAL_CARD_CANCEL: {
            bind: 'reopenStep'
          },
          [getChannelName('hide_header')]: {
            bind: 'hideHeader'
          },
          [getChannelName('send_ocr_card_number')]: {
            bind: 'receiveNativeCard'
          },
          [getChannelName('send_qr_card_number')]: {
            bind: 'receiveEncryptedCardNumber'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('hidden_decorated')]: {
            bind: 'decorated'
          },
          DIGITAL_ACTIVATION_MONOPRODUCT_USER_DATA_PROPERTIES: {
            bind: 'setProperties'
          },
          DIGITAL_ACTIVATION_CLOSE_PAGE_ACCEPT: {
            bind: 'reset'
          },
          DIGITAL_ACTIVATION_DATE_FORMAT: {
            bind: 'saveDate'
          },
          DIGITAL_ACTIVATION_DATE_PICKER_ERROR: {
            bind: 'openDatePicker'
          },
          DIGITAL_ACTIVATION_ENCRYPTED_CARD_NUMBER: {
            bind: 'receiveEncryptedCardNumber'
          },
          [ getChannelName('fixed_identification_form') ]: {
            bind: 'setProperties'
          },
          DIGITAL_ACTIVATION_MONOPRODUCT_FLAG: {
            bind: 'isAccessMonoproduct'
          }
        },
        out: {
          DIGITAL_ACTIVATION_PHONE_AND_CARD: {
            bind: 'cells-step-form-selects-texts-main-button-click'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('show_confirm_step')]: {
            bind: 'continue-collapsed'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'continue-collapsed'
          },
          [getChannelName('phone_card_change_pressed')]: {
            bind: 'change-pressed'
          },
          [getChannelName('phone_card_chage_step_state')]: {
            bind: 'change-step-state'
          },
          [getChannelName('step_information_card_advice')]: {
            bind: 'step-information-card-advice'
          },
          [getChannelName('step_information_card_advice_step')]: {
            bind: 'step-information-card-advice'
          },
          [getChannelName('disable-qr-flow')]: {
            bind: 'is-disabled-qr-flow'
          },
          [getChannelName('open_qr_camera')]: {
            bind: 'send-camera-flag-to-native'
          },
          [getChannelName('show_key_recovery')]: {
            bind: 'is-disabled-qr-flow'
          },
          [getChannelName('analytics_camera_to_native')]: {
            bind: 'send-camera-flag-to-native'
          },
          [getChannelName('reset_card_number')]: {
            bind: 'send-camera-flag-to-native'
          },
          [getChannelName('analytics_input_phone')]: {
            bind: 'input-phone-focus'
          },
          [getChannelName('analytics_input_card')]: {
            bind: 'input-card-focus'
          },
          [getChannelName('analytics_privacy')]: {
            bind: 'privacy-analytics'
          },
          [getChannelName('pressed_term_and_conditions')]: {
            bind: 'privacy-pressed'
          },
          DIGITAL_ACTIVATION_SELECT_ENROLL_TYPE: {
            bind: 'link-list-clicked'
          },
          DIGITAL_ACTIVATION_MONOPRODUCT_FROM_DATA_MONO_PRODUCT: {
            bind: 'cells-step-form-user-data-main-button-click'
          },
          DIGITAL_ACTIVATION_DATE_PICKER_LAUNCH: {
            bind: 'launch-date-picker'
          },
          request_open_web_flag_channel: {
            bind: 'request-migrate-ksjo-flag',
            'forward-to-native': true
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      maxSteps,
      displayedMaxSteps: 5,
      hideCurrentStepLabel: false,
      masked: false,
      privacyMessage: 'digital-activation-card-advice-middle-description-description-spherica',
      headerContent: {
        image: './images/spherica/digitalActivation/devices-glass.png',
        headerTitle: 'digital-activation-card-advice-header-content-title-spherica',
        headerDescription: 'digital-activation-card-advice-header-content-description-spherica'
      },
      flowDescription: {
        title: '',
        description: 'digital-activation-card-advice-flow-description-description-spherica'
      }
    }
  };

  const mobileOcrCard = {
    zone: 'app__main',
    tag: 'cells-mobile-ocrcard',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          device_access_read_card_ocr: {
            bind: 'canScan'
          },
          [getChannelName('scan_card_data')]: {
            bind: 'scan'
          }
        },
        out: {
          [getChannelName('card_ocr_is_capable')]: {
            bind: 'card-ocr-is-capable'
          },
          [getChannelName('card_ocr_scanned')]: {
            bind: 'card-ocr-scanned'
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
          [getChannelName('open_qr_camera')]: {
            bind: 'managePluginParams'
          }
        },
        out: {
          [getChannelName('qr_plugin_params')]: {
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
          [getChannelName('qr_plugin_params')]: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          [getChannelName('qr_scanner_plugin_response_success')]: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          [getChannelName('qr_scanner_plugin_response_error')]: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };

  const bbvaNativeconnectorCipherForCVV = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-cipher',
    type: 'DM',
    properties: {
      isNative: native,
      cellsConnections: {
        in: {
          [getChannelName('cvv_encrypt_request')]: {
            bind: 'pinCipherEncryptFromConfig'
          }
        },
        out: {
          [getChannelName('encrypted_data-cvv')]: {
            bind: 'pin-cipher-encrypt-from-config-success'
          },
          error_cipher: {
            bind: 'pin-cipher-encrypt-from-config-error'
          }
        }
      }
    }
  };

  const bbvaNativeconnectorCipherForPIN = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-cipher',
    type: 'DM',
    properties: {
      isNative: native,
      cellsConnections: {
        in: {
          [getChannelName('pin_encrypt_request')]: {
            bind: 'pinCipherEncryptFromConfig'
          }
        },
        out: {
          [getChannelName('encrypted_data-pin')]: {
            bind: 'pin-cipher-encrypt-from-config-success'
          },
          error_cipher: {
            bind: 'pin-cipher-encrypt-from-config-error'
          }
        }
      }
    }
  };

  const apisCardsBgadpmock = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards-bgadpmock',
    properties: {
      host,
      cardsApiVersion: CONFIG.globalServices.versions.cardPayments,
      native: native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          digital_activation_decipher_qr_card_number: {
            bind: 'cardsDecipherQrPost'
          }
        },
        out: {
          digital_activation_decipher_qr_card_number_success: {
            bind: 'decipher-qr-success-response-event'
          },
          digital_activation_decipher_qr_card_number_error: {
            bind: 'decipher-qr-error-response-event'
          }
        }
      }
    }
  };

  const bbvaNativeconnectorCipherForAlpha = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-nativeconnector-cipher',
    properties: {
      isNative: native,
      returnAsObject: true,
      cellsConnections: {
        in: {
          digital_activation_get_cipher_rsa_keys: {
            bind: 'rsaKeyPair'
          },
          digital_activation_decrypt_data_params: {
            bind: 'rsaDecrypt'
          }
        },
        out: {
          digital_activation_cipher_keys_success: {
            bind: 'rsa-key-pair-success'
          },
          digital_activation_decrypt_data_success: {
            bind: 'rsa-decrypt-success'
          }
        }
      }
    }
  };

  const stepKeyRecoveryMethodForms = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-key-recovery-method-forms',
    tagSpherica: 'cells-step-key-recovery-method-forms-spherica',
    properties: {
      stepId: 'cells-step-key-recovery-method-forms',
      currentStep: 2,
      hideCurrentStepLabel: true,
      collapsed: false,
      disableChange: true,
      className: 'nip-cvv-digital-activation digital-date-birth cells-background-blue',
      cvvNumber,
      nipNumber,
      dataSummary: {
        firstData: 'digital-activation-nip-cvv-data-summary-first-data',
        secondData: 'digital-activation-nip-cvv-data-summary-second-data'
      },
      masked: true,
      showFullMask: true,
      maskChars: '•',
      visibleChars: 0,
      buttonText: 'cells-step-form-selects-texts-data-summary-button-text',
      enterKeyCode: 13,
      minDate: moment().subtract(120, 'years').format(getShortInvestedDate(CONFIG)),
      maxDate: moment().format(getShortInvestedDate(CONFIG)),
      nativeDefaultDate: moment().format(getShortInvestedDate(CONFIG)),
      textValue: 'digital-activation-date',
      dateFormat: getShortDate(),
      inputType: isNativeIos ? 'text' : 'date',
      readOnly: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_step_cvv_nip_active')]: {
            bind: 'active'
          },
          [getChannelName('show_step_qr_nip_active')]: {
            bind: 'active'
          },
          [getChannelName('show_step_cvv_nip_all')]: {
            bind: 'showFormDate'
          },
          [getChannelName('show_step_qr_nip_all')]: {
            bind: 'showFormDate'
          },
          [getChannelName('show_step_cvv_nip')]: {
            bind: 'hiddenStepForm'
          },
          [getChannelName('show_step_qr_nip')]: {
            bind: 'hiddenStepForm'
          },
          [getChannelName('hide_step_cvv_nip')]: {
            bind: 'hiddenStepForm'
          },
          [getChannelName('qr_nip')]: {
            bind: 'initQrPage'
          },
          [getChannelName('disable-qr-flow')]: {
            bind: 'setResetQrConfig'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('show_step_birth_date')]: {
            bind: 'hiddenStepForm'
          },
          [getChannelName('show_step_birth_date_input')]: {
            bind: 'showFormDate'
          },
          [getChannelName('show_key_recovery')]: {
            bind: 'showFormDate'
          },
          DIGITAL_ACTIVATION_CONFIG_BUTTON: {
            bind: 'setDigitalDate'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('show_step_birth_date_active')]: {
            bind: 'active'
          },
          [getChannelName('set_button')]: {
            bind: 'valid'
          },
          [getChannelName('reset_input')]: {
            bind: 'resetInput'
          },
          [getChannelName('hide_step_birth_date')]: {
            bind: 'hiddenStepForm'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_ACCEPT: {
            bind: 'reopenStep'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_CANCEL: {
            bind: 'reopenStep'
          },
          [getChannelName('hidden_decorated_cvv')]: {
            bind: 'decorated'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('nip_cvv')]: {
            bind: 'data-summary'
          },
          [getChannelName('nip_cvv_chage_step_state')]: {
            bind: 'change-step-state'
          },
          [getChannelName('step_information_form_select_text')]: {
            bind: 'step-information-form-select-text'
          },
          [getChannelName('nip_native')]: {
            bind: 'send-qr-data-native'
          },
          [getChannelName('next_step')]: {
            bind: 'on-button-tap'
          },
          [getChannelName('SEND_DATE_DM')]: {
            bind: 'send-date-to-dm'
          },
          [getChannelName('date_birth_chage_step_state')]: {
            bind: 'change-step-state'
          },
          [getChannelName('step_information_form_date')]: {
            bind: 'step-information-form-date'
          },
          DIGITAL_ACTIVATION_SHOW_BIRTH_DATE: {
            bind: 'on-button-tap'
          },
          [getChannelName('date_changed')]: {
            bind: 'data-date-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      hideCurrentStepLabel: false,
      className: 'nip-cvv-digital-activation digital-date-birth',
      maxSteps,
      displayedMaxSteps: 5,
      stepTitle: 'cells-step-form-selects-texts-description-title-spherica',
      variant: 'primay-alt',
      customLayout: true,
      messageClass: 'message-input',
      newCellsConnections: {
        add: {
          in: {
            digital_activation_set_step_title: {
              bind: 'stepTitle'
            }
          }
        }
      }
    }
  };

  const stepIdentityValidation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-identity-validation',
    tagSpherica: 'cells-step-identity-validation-spherica',
    properties: {
      stepId: 'cells-step-identity-validation',
      currentStep: 3,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('identity_validation_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('step_identity_validation')]: {
            bind: 'active'
          },
          [getChannelName('show_identity_validation')]: {
            bind: 'hiddenStep'
          },
          DIGITAL_ACTIVATION_ACCEPT_SUCCESS_VALIDATION_MODAL: {
            bind: 'collapsedStep'
          },
          [ getChannelName('collapsed_identity_validation') ]: {
            bind: 'setProperties'
          },
          [getChannelName('close_page_accepted')]: {
            bind: 'exitDVS'
          },
          [getChannelName('reset_identity_step')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('identity_validation_step_state')]: {
            bind: 'change-step-state'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('step_information_identity_validation')]: {
            bind: 'step-information-identity-validation'
          },
          [getChannelName('pressed_term_and_conditions')]: {
            bind: 'privacy-pressed'
          },
          [getChannelName('ine_document')]: {
            bind: 'init-identity-validation-process'
          }
        }
      }
    },
    propertiesSpherica: {
      hideCurrentStepLabel: false,
      displayedMaxSteps: 5,
      maxSteps,
      className: 'cells-step-container'
    }
  };
  const mobilePermissionsPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-permissions-plugin',
    properties: {
      cellsConnections: {
        in: {
          digital_activation_check_camera_state: {
            bind: 'checkState'
          },
          digital_activation_request_camera_permissions: {
            bind: 'request'
          }
        },
        out: {
          digital_activation_post_success: {
            bind: 'permissions-check-state-success'
          },
          digital_activation_post_error: {
            bind: 'permissions-check-state-error'
          },
          digital_activation_request_camera_permissions_success: {
            bind: 'permissions-request-success'
          },
          digital_activation_request_camera_permissions_error: {
            bind: 'permissions-request-error'
          }
        }
      }
    },
    propertiesSpherica: {
      maxSteps
    }
  };
  const nativeconnectorDocumentCapture =     {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-nativeconnector-document-capture',
    tag: 'bbva-nativeconnector-document-capture',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          launched_document_capture: {
            bind: 'launchDocumentCapture'
          },
          dvs_stop_camera: {
            bind: 'stopDocumentCapture'
          }
        },
        out: {
          digital_activation_document_capture_success: {
            bind: 'launch-document-capture-success'
          },
          digital_activation_capture_error: {
            bind: 'launch-document-capture-error'
          },
          digital_activation_stop_camera_success: {
            bind: 'stop-document-capture-success'
          }
        }
      }
    }
  };
  const nativeconnectorSelfieCpture = {
    zone: 'app__main',
    type: 'DM',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-nativeconnector-selfie-capture',
    tag: 'bbva-nativeconnector-selfie-capture',
    properties: {
      cellsConnections: {
        in: {
          launched_selfie_capture: {
            bind: 'launchSelfieCapture'
          },
          dvs_stop_selfie_camera: {
            bind: 'stopSelfieCapture'
          }
        },
        out: {
          digital_activation_selfie_capture_success: {
            bind: 'launch-selfie-capture-success'
          },
          digital_activation_selfie_capture_error: {
            bind: 'launch-selfie-capture-error'
          },
          digital_activation_selfie_camera_success: {
            bind: 'stop-selfie-capture-success'
          }
        }
      }
    }
  };
  const stepConfirmEmail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-confirm-email',
    tagSpherica: 'cells-step-confirm-email-spherica',
    properties: {
      currentStep: 4,
      hideCurrentStepLabel: true,
      className: 'dark-confirm-email digital-activation-confirm-email cells-background-blue',
      stepId: 'digital-confirm-email-step',
      stepTitle: 'digital-activation-confirm-email-title',
      hiddenStepEmail: true,
      disableConfirmInput: true,
      showSummary: true,
      emailSummary: 'digital-activation-confirm-email-summary',
      emailMessage: 'digital-activation-confirm-email-message',
      showDescription: true,
      textDescription: 'digital-activation-services-contract-confirm-email-text-description',
      enterKeyCode: 13,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('active_step_mail')]: {
            bind: 'active'
          },
          [getChannelName('show_step_mail')]: {
            bind: 'hiddenStepEmail'
          },
          [getChannelName('hide_step_mail')]: {
            bind: 'hiddenStepEmail'
          },
          [getChannelName('reset_step_mail')]: {
            bind: 'hiddenStepEmail'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'cells-step-confirm-email-continue'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-step-state'
          },
          [getChannelName('cells-step-email-send')]: {
            bind: 'cells-step-email-send'
          },
          [getChannelName('modal_terms_condi')]: {
            bind: 'show-modal-help'
          }
        }
      }
    },
    propertiesSpherica: {
      labelEmail: 'digital-activation-confirm-email-label-email',
      labelEmailConfirm: 'digital-activation-confirm-email-label-email-confirm',
      maxSteps,
      displayedMaxSteps: 5,
      displayedCurrentStep: 3,
      hideCurrentStepLabel: false,
      disableChange: true,
      className: 'dark-confirm-email digital-activation-confirm-email custom-padding'
    }
  };
  const stepDigitalServicesContract = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-digital-services-contract',
    tagSpherica: 'cells-step-digital-services-contract-spherica',
    properties: {
      stepId: 'step-digital-services-contract',
      stepTitle: 'cells-step-digital-services-contract-step-title',
      hideCurrentStepLabel: false,
      currentStep: 5,
      className: 'terms-conditions-digital-activation cells-background-blue',
      mainDescription: 'digital-activation-services-contract-main-description',
      mesaggeCollapse: 'digital-activation-services-contract-message-collapsed',
      infoMessage: 'cells-step-digital-services-contract-full-icon-message',
      classNameCellsStep: 'header-without-opacity',
      textDescriptionPdf: 'digital-activation-services-contract-description-pdf',
      imageUrl: 'images/signature_device_fill.svg',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          DIGITAL_ACTIVATION_SAVE_SIGNATURE_ACCEPT: {
            bind: 'reopenStep'
          },
          DIGITAL_ACTIVATION_SAVE_SIGNATURE_CANCEL: {
            bind: 'reopenStep'
          },
          DIGITAL_ACTIVATION_CURRENT_STEP: {
            bind: 'currentStep'
          },
          [getChannelName('step_digital_contract_service')]: {
            bind: 'active'
          },
          [getChannelName('step_contract_service_active_button')]: {
            bind: 'receiveSignaturePad'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('hidden_decorated_cud')]: {
            bind: 'decorated'
          },
          [getChannelName('inhibit_cud_step')]: {
            bind: 'mainButtonClick'
          },
          digital_activation_disable_consult_cud: {
            bind: 'disableConsult'
          }
        },
        out: {
          DIGITAL_ACTIVATION_TERMS_AND_CONDITIONS: {
            bind: 'event-open-pdf-terms-conditions'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'go-next-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('contract_service')]: {
            bind: 'cells-step-digital-service-contract-click'
          },
          [getChannelName('save_signature_chage_step_state')]: {
            bind: 'change-step-state'
          },
          [getChannelName('active_step_password')]: {
            bind: 'active-step'
          },
          [getChannelName('active_password_modal')]: {
            bind: 'active-step'
          },
          [getChannelName('analytics_signature_pad_request')]: {
            bind: 'send-signature-pad-to-native'
          },
          DIGITAL_ACTIVATION_SIGNATURE_PAD_REQUEST: {
            bind: 'send-signature-pad-to-native'
          }
        }
      }
    },
    propertiesSpherica: {
      displayedMaxSteps: 4,
      maxSteps,
      className: 'terms-conditions-digital-activation',
      imageUrl: 'images/spherica/digitalActivation/remote-signature.png',
      displayedCurrentStep: 3,
      stepTitle: 'cells-step-digital-services-contract-step-title-spherica',
      mesaggeCollapse: 'digital-activation-services-contract-message-collapsed-spherica',
      textDescriptionPdf: 'digital-activation-services-contract-description-pdf-spherica',
      newCellsConnections: {
        add: {
          in: {
            digital_activation_step_label_services: {
              bind: 'setProperties'
            }
          }
        }
      }
    }
  };
  const nativeconnectorSignaturePad = {
    zone: 'app_main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-nativeconnector-signature-pad',
    tag: 'bbva-nativeconnector-signature-pad',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('capture_signature')]: {
            bind: 'captureSignature'
          },
          [getChannelName('send_signature')]: {
            bind: 'sendSignature'
          }
        },
        out: {
          [getChannelName('capture_signature_success')]: {
            bind: 'capture-signature-success'
          },
          [getChannelName('send_signature_success')]: {
            bind: 'send-signature-success'
          }
        }
      }
    }
  };
  const stepRecoveryPassword = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-recovery-password',
    tagSpherica: 'cells-step-recovery-password-spherica',
    properties: {
      stepId: 'step-recovery-password',
      className: 'background-core-blue cells-background-blue',
      stepTitle: 'digital-activation-services-contract-recovery-password-title',
      currentStep: 6,
      minNumberCharacters: 8,
      maxNumberCharacters: 10,
      showMessage: true,
      showHelpIcon: true,
      showPasswordHelp: true,
      showSubheader: true,
      externalModalConfig: true,
      showSecurityLevelWithIcon: true,
      showHelpIconWithSecurityLevel: true,
      hideCurrentStepLabel: true,
      maxSequentialChars: 2,
      newPasswordLabel: 'cells-step-recovery-password-input-password',
      keyRecoveryUpdateClassName: 'dark-key-recovery-update',
      activeNewPasswordField: true,
      classNameCellsStep: 'header-without-opacity',
      passwordErrorTypes: errorTypes,
      validateSequentialNumbers: true,
      includesRegexParams: true,
      includesPositiveRegexvalidation: true,
      passwordErrorConsecutiveSequential: 'cells-key-recovery-error-consecutive-sequential-chars',
      resetPasswordOnConfirmInput: true,
      passwordValidationRegex: '^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])([a-zA-Z0-9]+){8,10}',
      lengthPassword: 8,
      validatePassword: true,
      indexError: 4,
      iconInfoType: 'info',
      passwordInputValidationRegex,
      labelIconMessageDefault: 'cells-key-recovery-icon-message',
      newPasswordLabelRepeat: 'cells-key-recovery-input-confirm-password',
      enterKeyCode: 13,
      fixed: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('active_step_password')]: {
            bind: 'active'
          },
          [getChannelName('active_password_modal')]: {
            bind: 'externalModalConfig'
          },
          [getChannelName('regex_match_validation')]: {
            bind: 'passwordMatchValidation'
          },
          [getChannelName('validaton_information_password')]: {
            bind: 'triggerValidation'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-collapsed'
          },
          [getChannelName('analytics_collapsed_complete')]: {
            bind: 'continue-collapsed'
          },
          [getChannelName('hidden_decorated_cud')]: {
            bind: 'continue-collapsed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          digital_activation_manage_final_state_steps: {
            bind: 'change-step-state'
          },
          digital_activation_best_practices_button_clicked: {
            bind: 'key-recovery-create-open-best-practices-modal'
          },
          [getChannelName('correct_password')]: {
            bind: 'get-passwords'
          },
          digital_activation_analytics_step_focus: {
            bind: 'cells-step-focus-in'
          },
          digital_activation_adjust_status_bar_on_input_focus: {
            bind: 'input-focus'
          },
          digital_activation_adjust_status_bar_on_input_blur: {
            bind: 'cells-molecule-input-blur'
          },
          global_alert_manager_open_with_settings: {
            bind: 'key-recovery-update-open-new-password-helper-modal'
          },
          [getChannelName('show_modal_help_password')]: {
            bind: 'show-modal-help-password'
          },
          [getChannelName('fire_valitation_password')]: {
            bind: 'fire-validation-password'
          },
          [getChannelName('set_new_password')]: {
            bind: 'set-new-password'
          },
          digital_activation_disable_consult_cud: {
            bind: 'disable-consult-cud'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      maxSteps,
      displayedMaxSteps: 4,
      hideCurrentStepLabel: false,
      fixed: false,
      subHeaderLabel: 'open-digital-account-multistep-step-five-description',
      showPasswordHelp: false,
      newPasswordLabel: 'digital-activation-services-contract-recovery-password-title',
      confirmPasswordLabel: 'digital-activation-services-contract-recovery-confirm-password-title',
      newPasswordDescription: 'cells-key-recovery-title-new-password-spherica',
      changeStepButtonLabel: 'cells-step-change-button-label-spherica',
      keyRecoveryUpdateClassName: 'dark-key-recovery-update custom-messages',
      typeIcon: 'info',
      displayedCurrentStep: 4,
      descriptionModal: { password: true },
      newCellsConnections: {
        add: {
          in: {
            digital_activation_step_label_recovery: {
              bind: 'setProperties'
            }
          },
          out: {
            digital_activation_show_modal_help_password: {
              bind: 'key-recovery-update-open-description-helper-modal'
            }
          }
        }
      }
    }
  };
  const summaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    properties: {
      buttonLabel: 'digital-activation-button-text',
      cellsConnections: {
        out: {
          [getChannelName('send_confirm')]: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      primaryButtonClass: 'positive',
      buttonLabel: 'digital-activation-button-text-spherica'
    }
  };
  const mobileDatePicker = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-mobile-datepicker',
    properties: {
      cellsConnections: {
        in: {
          DIGITAL_ACTIVATION_DATE_PICKER_LAUNCH: {
            bind: 'openDatepicker'
          }
        },
        out: {
          DIGITAL_ACTIVATION_DATE_PICKER_SUCCESS: {
            bind: 'success-on-get-native-date'
          },
          DIGITAL_ACTIVATION_DATE_PICKER_ERROR: {
            bind: 'error-on-get-native-date'
          }
        }
      }
    }
  };
  const apisDocumentsVerifications = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-documents-verifications',
    properties: {
      host,
      native,
      headers: { 'Accept-Language': 'es' },
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      verificationsApiVersion: CONFIG.globalServices.versions.verifications,
      cellsConnections: {
        in: {
          [getChannelName('open_veridas_documents_box')]: {
            bind: 'postCreateVerification'
          },
          [getChannelName('put_document_verification')]: {
            bind: 'putVerificationAttachments'
          },
          [getChannelName('close_veridas_documents_box')]: {
            bind: 'postCreateVerificationExecute'
          },
          [getChannelName('verify_veridas_box_status')]: {
            bind: 'getVerificationStatus'
          }
        },
        out: {
          [getChannelName('open_veridas_box_success')]: {
            bind: 'success-on-post-create-verifications'
          },
          [getChannelName('open_veridas_box_error')]: {
            bind: 'error-on-post-create-verifications'
          },
          [getChannelName('put_document_verification_without_flash_success')]: {
            bind: 'succes-on-put-verifications-attachments-obverse-image'
          },
          [getChannelName('put_document_verification_without_flash_error')]: {
            bind: 'error-on-put-verifications-attachments-obverse-image'
          },
          [getChannelName('put_document_verification_with_flash_success')]: {
            bind: 'succes-on-put-verifications-attachments-obverse-flash-image'
          },
          [getChannelName('put_document_verification_with_flash_error')]: {
            bind: 'error-on-put-verifications-attachments-obverse-flash-image'
          },
          [getChannelName('put_document_verification_reverse_success')]: {
            bind: 'succes-on-put-verifications-attachments-reverse-image'
          },
          [getChannelName('put_document_verification_reverse_error')]: {
            bind: 'error-on-put-verifications-attachments-reverse-image'
          },
          [getChannelName('put_document_verification_selfie_success')]: {
            bind: 'succes-on-put-verifications-attachments-selfie-image'
          },
          [getChannelName('put_document_verification_selfie_error')]: {
            bind: 'error-on-put-verifications-attachments-selfie-image'
          },
          [getChannelName('put_document_verification_selfie_alive_success')]: {
            bind: 'succes-on-put-verifications-attachments-selfie-alive-image'
          },
          [getChannelName('put_document_verification_selfie_alive_error')]: {
            bind: 'error-on-put-verifications-attachments-selfie-alive-image'
          },
          [getChannelName('post_document_verification_execute_success')]: {
            bind: 'success-on-post-create-verifications-execute'
          },
          [getChannelName('post_document_verification_execute_error')]: {
            bind: 'error-on-post-create-verifications-execute'
          },
          [getChannelName('get_document_verification_success')]: {
            bind: 'success-on-get-verifications-verification-status'
          },
          [getChannelName('get_document_verification_error')]: {
            bind: 'error-on-get-verifications-verification-status'
          }
        }
      }
    }
  };
  const bussinesDocument = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-digital-activation-mx',
    familyPath: '@glomo-web-components/bbva-controller-digital-activation-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          digital_activation_get_bussiness_document: {
            bind: 'requestListBusinessDocumentApi'
          }
        },
        out: {
          digital_activation_get_bussiness_document_success: {
            bind: 'bbva-controller-digital-activation-get-bussiness-document-success'
          },
          digital_activation_get_bussiness_document_error: {
            bind: 'bbva-controller-digital-activation-get-bussiness-document-unsuccess'
          }
        }
      }
    }
  };
  const globalApisNotificationsComponent = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-dataprovider-notifications-list',
    tag: 'bbva-dataprovider-notifications-list',
    render: 'litElement',
    properties: {
      headers: { 'Accept-Language': 'es' },
      host,
      native,
      otpId: pageName,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [ getChannelName('post_enrollment_request') ]: {
            bind: 'postEnrollmentRequest'
          },
          [getChannelName('post_active_notifications')]: {
            bind: 'postActivateNotifications'
          },
          digital_activation_update_active_notification_headers: {
            bind: 'signRequest'
          }
        },
        out: {
          [getChannelName('post_enrollment_request_success')]: {
            bind: 'success-on-post-enrollment-request'
          },
          [getChannelName('post_enrollment_request_error')]: {
            bind: 'error-on-post-enrollment-request'
          },
          [getChannelName('post_active_notifications_success')]: {
            bind: 'success-on-post-active-notifications'
          },
          [getChannelName('post_active_notifications_error')]: {
            bind: 'error-on-post-active-notifications'
          },
          [getChannelName('otp')]: {
            bind: 'signature-required-first-step-dm'
          }
        }
      }
    }
  };

  const globalApisCatalog = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-catalogs',
    properties: {
      host,
      catalogsApiVersion: CONFIG.globalServices.versions.catalogs || '0',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      headers: { 'Accept-Language': 'es' },
      countriesId: CONFIG.globalServices.countriesId || '06320074E',
      cellsConnections: {
        in: {
          [getChannelName('monoproduct_get_countries_mx')]: {
            bind: 'getCountries'
          }
        },
        out: {
          [getChannelName('monoproduct_set_countries_mx')]: {
            bind: 'set-countries'
          },
          [getChannelName('monoproduct_set_error_countries_mx')]: {
            bind: 'error-on-get-countries'
          }
        }
      }
    }
  };

  const glomoKeyRecoveryDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-key-recovery-mx-dm',
    familyPath: 'glomo-key-recovery-dm',
    properties: {
      phone: CONFIG.phoneNumberContact,
      cellsConnections: {
        in: {
          [getChannelName('check_success_validaton')]: {
            bind: 'validationEsfInfo'
          }
        },
        out: {
          [getChannelName('validaton_information_password')]: {
            bind: 'validation-information-parsed'
          }
        }
      }
    }
  };

  const esfPassChecker = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components-esf/esf-pass-checker',
    tag: 'esf-pass-checker',
    render: 'litElement',
    properties: {
      policy: policyEsf,
      cellsConnections: {
        in: {
          [getChannelName('fire_valitation_password')]: {
            bind: 'check'
          },
          [getChannelName('set_new_password')]: {
            bind: 'password'
          }
        },
        out: {
          [getChannelName('check_success_validaton')]: {
            bind: 'check-success'
          }
        }
      }
    }
  };

  const bbvaHelpModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      titleIcon: 'bbva:caution',
      modalType: 'info',
      cellsConnections: {
        in: {
          [getChannelName('activate_modal_outside_of_service_hours')]: {
            bind: 'open'
          },
          [getChannelName('outside_of_service_hours_body_text')]: {
            bind: 'bodyText'
          },
          [getChannelName('outside_of_service_hours_button_text')]: {
            bind: 'buttonText'
          }
        }
      }
    }
  };
  const base = {
    hash: 'mx-digital-activation',
    currentPage: {
      url: '/digital-activation'
    },
    pages,
    template,
    components: [
      spinnerMain,
      spinnerVeridas,
      handleLifeCycle,
      navigationHandler,
      moleculeHeader,
      dmDigitalActivation,
      opxDigitalActivation,
      analyticsDmDigitalActivation,
      deviceAccessesController,
      stepCardIdentificationForm,
      apisCardsBgadpmock,
      bbvaNativeconnectorCipherForAlpha,
      mobileOcrCard,
      managerQrScanner,
      nativeconnectorBbvaQr,
      bbvaNativeconnectorCipherForCVV,
      bbvaNativeconnectorCipherForPIN,
      stepKeyRecoveryMethodForms,
      stepIdentityValidation,
      mobilePermissionsPlugin,
      nativeconnectorDocumentCapture,
      nativeconnectorSelfieCpture,
      apisDocumentsVerifications,
      globalApisNotificationsComponent,
      stepConfirmEmail,
      stepDigitalServicesContract,
      nativeconnectorSignaturePad,
      stepRecoveryPassword,
      summaryView,
      mobileDatePicker,
      globalApisCatalog,
      glomoKeyRecoveryDm,
      esfPassChecker,
      bbvaHelpModal,
      bussinesDocument
    ]
  };

  if (CONFIG.nativeShell) {
    base.components.push(glomoOpenDocumentPdf);
  }

  spinnerMain.properties.className = 'dark-spinner';
  spinnerMain.properties.withMask = false;

  spinnerVeridas.properties.id = 'spinner-with-text';
  spinnerVeridas.properties.messages = [ 'digital-activation-spinner-with-text' ];
  spinnerVeridas.properties.spinnerWithText = true;

  spinnerMain.properties.cellsConnections.in.digital_activation_show_spinner = {
    bind: 'show'
  };
  spinnerMain.properties.cellsConnections.in.digital_activation_hide_spinner = {
    bind: 'hide'
  };

  spinnerVeridas.properties.cellsConnections.in.digital_activation_show_spinner_veridas = {
    bind: 'show'
  };
  spinnerVeridas.properties.cellsConnections.in.digital_activation_hide_spinner_veridas = {
    bind: 'hide'
  };

  const SIGNCONNECTORALERT = require('./common/_sign-connector')(CONFIG)(base);
  SIGNCONNECTORALERT('bbva-dataprovider-notifications-list', pageName,
    ['success-on-post-active-notifications', 'error-on-post-active-notifications']);

  const connectionsInDigital = connectionsIn(base);
  connectionsInDigital('bbva-dataprovider-notifications-list').signature_type_enabled_digitalActivation = {
    bind: 'setPhoneNumber'
  };
  connectionsInDigital('bbva-dataprovider-notifications-list').signature_request_new_sms_digitalActivation = {
    bind: 'setPhoneNumber'
  };
  const connectionsOutDigital = connectionsOut(base);
  connectionsOutDigital('cells-sign-operation-dm-mx').digital_activation_update_signature_type = {
    bind: 'signature-type-enabled-digitalActivation'
  };
  connectionsOutDigital('cells-sign-operation-dm-mx').digital_activation_update_signature_type_new_otp = {
    bind: 'signature-request-new-sms-digitalActivation'
  };

  localStorageGet.addOutStorageChannels(base.components, storageKeysDigitalActivation, CONFIG);

  addRetryErrors(base)([
    {
      id: 'INE_ERROR',
      acceptCallForHelp: { bind: 'exitDVS', component: 'glomo-digital-activation-dm-mx' }
    },
    {
      id: 'SERVICES_ERROR',
      acceptRetry: { bind: 'failedServices', component: 'glomo-digital-activation-dm-mx' },
      acceptCallForHelp: { bind: 'exitDVS', component: 'glomo-digital-activation-dm-mx' }
    },
    {
      id: 'INFORMATION-NOT-AVAILABLE',
      acceptCallForHelp: { bind: 'exitDVS', component: 'glomo-digital-activation-dm-mx' }
    }
  ]);

  if (isSpherica) {
    const connectionsInAlert = connectionsIn(base)('glomo-alert-manager-spherica');
    const connectionsOutAlert = connectionsOut(base)('glomo-alert-manager-spherica');

    connectionsInAlert.digital_activation_alert_manager_open_with_settings_spherica = {
      bind: 'openWithSettings'
    };
    connectionsInAlert.global_hanlder_native_back_button = {
      bind: 'close-modal'
    };

    connectionsOutAlert.DIGITAL_ACTIVATION_SHOW_CALL_BBVA_LINE = {
      bind: 'digital-activation-show-call-bbva-line'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_OPEN_BRANCH_OFFICES = {
      bind: 'digital-activation-show-branch-offices'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_RESET_BRANCH_OFFICES = {
      bind: 'digital-activation-show-branch-offices'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_OPEN_BBVA_LINK = {
      bind: 'digital-activation-show-bbva-link'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ADDITIONAL_ACCEPT = {
      bind: 'alert-DIGITAL-ACTIVATION-ADDITIONAL-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ADDITIONAL_CANCEL = {
      bind: 'alert-DIGITAL-ACTIVATION-ADDITIONAL-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INVALID_CARD_ERROR_ACCEPT = {
      bind: 'alert-DIGITAL-ACTIVATION-INVALID-CARD-ERROR-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INVALID_CARD_ERROR_CANCEL = {
      bind: 'alert-DIGITAL-ACTIVATION-INVALID-CARD-ERROR-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INVALID_CURP_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INVALID-CURP-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_NOT_AVAILABLE_APP_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-NOT-AVAILABLE-APP-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_LOCKED_TOKEN_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-LOCKED-TOKEN-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INVALID_CURP_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INVALID-CURP-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_DM_RESET_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-UNIDENTIFIED-NOTIFICATIONS-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_DM_RESET_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-UNIDENTIFIED-NOTIFICATIONS-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INTERRUMPED_MODAL_RETRY = {
      bind: 'alert-DIGITAL-ACTIVATION-INTERRUMPED-CONECCTION-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INTERRUMPED_DM_RESET_ACCEPT = {
      bind: 'alert-DIGITAL-ACTIVATION-INTERRUMPED-CONECCTION-MAX-TRY-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_PHYSICAL_CARD_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-PHYSICAL-CARD-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_PHYSICAL_CARD_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-PHYSICAL-CARD-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INCORRECCT_DATA_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INCORRECCT_DATA_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INCORRECCT_DATA_MAX_TRY_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-MAX-TRY-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_INCORRECCT_DATA_MAX_TRY_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-MAX-TRY-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_APPLICATION_BLOCKED_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-APPLICATION-BLOCKED-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_APPLICATION_BLOCKED_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-APPLICATION-BLOCKED-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_REGISTER_USER_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-REGISTER-USER-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_REGISTER_USER_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-REGISTER-USER-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_SAVE_SIGNATURE_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-SAVE-SIGNATURE-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_SAVE_SIGNATURE_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-SAVE-SIGNATURE-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_HIRING_NOT_DONE_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_HIRING_NOT_DONE_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_HIRING_NOT_DONE_MAX_TRY_ACCEPT = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-MAX-TRY-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_HIRING_NOT_DONE_MAX_TRY_CANCEL = {
      bind: 'alert-CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-MAX-TRY-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ACCEPT = {
      bind: 'alert-DIGITAL-ACTIVATION-SUCCESS-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_QR_ERROR_MODAL_CANCEL = {
      bind: 'alert-DIGITAL-ACTIVATION-ERROR-QR-MODAL-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_QR_ERROR_MODAL_ACCEPT = {
      bind: 'alert-DIGITAL-ACTIVATION-ERROR-QR-MODAL-accept'
    };
    connectionsOutAlert.digital_activation_camera_to_native = {
      bind: 'alert-DIGITAL-ACTIVATION-ERROR-QR-MODAL-accept',
      'forward-to-native': true
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_RETRY_CALL_UP_EXIT = {
      bind: 'alert-DIGITAL-ACTIVATION-RETRY-CALL-UP-EXIT-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_RETRY_CALL_UP_CANCEL = {
      bind: 'alert-DIGITAL-ACTIVATION-RETRY-CALL-UP-EXIT-cancel'
    };
    connectionsOutAlert.digital_activation_close_page_accepted = {
      bind: 'alert-DIGITAL-ACTIVATION-CLOSE-PAGE-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_CLOSE_PAGE_CANCEL = {
      bind: 'alert-DIGITAL-ACTIVATION-CLOSE-PAGE-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ERROR_EXIT_MODAL_ADDITIONAL = {
      bind: 'alert-ERROR-MODAL-ADDITIONAL-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_HELP_PASSWORD_MODAL_ACCEPT = {
      bind: 'alert-help-password-modal-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ERROR_EXIT_MODAL = {
      bind: 'alert-GENERIC-ERROR-accept'
    };
    connectionsOutAlert.digital_activation_chat_request = {
      bind: 'digital-activation-show-branch-chat-advisor',
      'forward-to-native': true
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_RESET_ADVISOR_CHAT = {
      bind: 'digital-activation-show-branch-chat-advisor'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_OPEN_PAGE_SUCCESS = {
      bind: 'glomo-alert-time-expire'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ACCEPT_PROCESS_MODAL = {
      bind: 'alert-process-identity-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_CANCEL_PROCESS_MODAL = {
      bind: 'alert-process-identity-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ACCEPT_USER_WITH_CREDIT_CARD = {
      bind: 'alert-user-with-card-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_CLOSE_USER_WITH_CREDIT_CARD = {
      bind: 'alert-user-with-card-cancel'
    };
    connectionsOutAlert.digital_activation_live_chat = {
      bind: 'alert-live-chat-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ACCEPT_INVALID_CREDIT = {
      bind: 'alert-error-credit-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_CLOSE_INVALID_CREDIT = {
      bind: 'alert-error-credit-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ACCEPT_USER_REGISTRED = {
      bind: 'alert-user-registered-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_CLOSE_USER_REGISTRED = {
      bind: 'alert-user-registered-cancel'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_ACCEPT_INVALID_PHONE = {
      bind: 'alert-error-phone-number-accept'
    };
    connectionsOutAlert.DIGITAL_ACTIVATION_CLOSE_INVALID_PHONE = {
      bind: 'alert-error-phone-number-cancel'
    };
  }

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
