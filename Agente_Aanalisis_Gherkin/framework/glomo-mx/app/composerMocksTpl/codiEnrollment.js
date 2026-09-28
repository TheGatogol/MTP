/* eslint-disable max-statements */
'use strict';
module.exports = config => {
  const {
    createPrefixFromPageName,
    createSpinner,
    detailDownloadParams,
    getLanguage,
    getLocalCurrency,
    getVisibleChars,
    glomoOpenDocument,
    headerHeight,
    useNames
  } = require('./common/helpers/_utils');

  const pageName = 'codiEnrollment';
  const pages = require('./common/_pages')(config)(pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const { appStarted, footprintDefaultAppCodi, footprintIsNotAvailableCodi, internalLink, otpStep, pageVisit } = require('./analytics/_codiOnboarding')(config);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const localStorageApp = require('./common/_local-storage');
  const { signModal } = require('./common/_cross-components');
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false,
    nativeIos = false
  } = config;
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          'global_alert_manager_open_confirmation_modal': {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  const { bbvaNativeConnectorDeviceInfo } = require('./common/nativeconnector/_deviceInfo.js');
  detailDownloadParams.body = {
    documentTemplate: {
      templateType: {
        id: 'PDF'
      }
    }
  };
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const spinner = createSpinner(config);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const base = {
    hash: 'codi-enrollment',
    currentPage: {
      url: '/codi-enrollment'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        headerHeight,
        showConfirmInManualScroll: true,
        topOnConfirm: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'DM',
        properties: {
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
              [getChannelName('INIT_PAGE')]: {
                bind: 'init-page',
                analytics: pageVisit
              },
              codiEnrollment_GET_ENROLLMENT_DATA: {
                bind: 'init-page',
                analytics: pageVisit
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
        tag: 'bbva-header-main',
        tagSpherica: 'bbva-header-main-spherica',
        familyPath: '@bbva-web-components/bbva-header-main',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'codi-refactor-enrollment-page-header',
          text: 'codi-refactor-enrollment-page-header',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            out: {
              codi_enrollment_close_header: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        },
        propertiesSpherica: sphericaPageUtils.getProperties({
          componentName: 'bbva-header-main-spherica',
          type: 'modal',
          override: {
            id: 'codi-refactor-enrollment-page-header',
            text: 'codi-refactor-enrollment-page-header',
            cellsConnections: {
              out: {
                codi_enrollment_close_header: {
                  bind: 'header-main-close-icon-click'
                }
              }
            }
          }
        })
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-header-category',
        tagSpherica: 'bbva-header-category-spherica',
        familyPath: '@bbva-spherica-components/bbva-header-category',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'codi-refactor-enrollment-page-category-1',
          className: 'u-margin-top--0-5',
          text: 'codi-refactor-enrollment-page-category-1'
        },
        propertiesSpherica: {
          className: 'u-margin--grid u-margin-bottom--0-5',
          text: 'codi-refactor-enrollment-page-category-1-spherica'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'client-full-name',
          variant: 'stacked',
          label: 'codi-refactor-enrollment-page-list-simple-label-1',
          cellsConnections: {
            in: {
              [getChannelName('CLIENT_FULL_NAME')]: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-simple',
        tagSpherica: 'bbva-list-simple-spherica',
        familyPath: '@bbva-web-components/bbva-list-simple',
        familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'client-phone',
          variant: 'stacked',
          label: 'codi-refactor-enrollment-page-list-simple-label-3',
          cellsConnections: {
            in: {
              [getChannelName('CLIENT_PHONE')]: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-message',
        tagSpherica: 'bbva-notification-message-spherica',
        familyPath: '@bbva-web-components/bbva-notification-message',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'codi-enrollment-page-notification-message',
          icon: 'coronita:info',
          className: 'u-margin--grid u-margin-top--1-5',
          message: 'codi-refactor-enrollment-page-notification-message'
        },
        propertiesSpherica: {
          messageTitle: 'codi-refactor-enrollment-page-notification-message',
          bookTitle: true,
          message: '',
          icon: 'spherica:info',
          className: 'u-margin--grid u-margin-top--1 u-margin-bottom--1-5'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-header-category',
        tagSpherica: 'bbva-header-category-spherica',
        familyPath: '@bbva-spherica-components/bbva-header-category',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'codi-refactor-enrollment-page-category-2',
          className: 'u-margin-top--1-5 u-text-color--600',
          text: 'codi-refactor-enrollment-page-category-2'
        },
        propertiesSpherica: {
          className: 'u-margin--grid u-margin-bottom--0-5',
          text: 'codi-refactor-enrollment-page-category-2-spherica'
        }
      }
    ]
  };
  const bbvaTextOne = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPath: '@bbva-web-components/bbva-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'codi-refactor-enrrollment-page-info',
      className: 'u-margin--grid',
      text: 'codi-refactor-enrrollment-page-info'
    },
    propertiesSpherica: {
      tag: 'p'
    }
  };
  const headerCategoryThree = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'codi-refactor-enrollment-page-category-3',
      text: 'codi-refactor-enrollment-page-category-3',
      cellsConnections: {
        in: {
          [getChannelName('SEE_MORE_LABEL')]: {
            bind: 'optionLink'
          }
        },
        out: {
          [getChannelName('show_more_accounts')]: {
            bind: 'header-category-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-bottom--0-5 u-width--auto',
      text: 'codi-refactor-enrollment-page-category-3-spherica'
    }
  };
  const modalAccounts = {
    zone: 'app__transactional',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    type: 'UI',
    properties: {
      id: 'codi-refactor-enrollment-page-modal-title',
      className: 'card-credit-card-payment-account-selector',
      modalTitle: 'codi-refactor-enrollment-page-modal-title',
      visibleChars: getVisibleChars(config)('codi'),
      localCurrency: getLocalCurrency(),
      showCloseModalButton: true,
      errorMessage: 'card-credit-card-payment-account-insufficient-funds',
      closeButtonLabel: 'card-credit-card-payment-step-product-accounts-close-button',
      cellsConnections: {
        in: {
          [getChannelName('SET_MODAL_ACCOUNTS')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('set_modal_account')]: {
            bind: 'selected-product'
          }
        }
      }
    },
    propertiesSpherica: {
      headerCloseIconText: 'codi-begin-register-btn-close'
    }
  };
  const listCard = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-card',
    tagSpherica: 'bbva-list-card-spherica',
    familyPath: '@bbva-web-components/bbva-list-card',
    familyPathSpherica: '@glomo-web-components/bbva-list-card-spherica',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getChannelName('set_label_amount_available_cards')]: {
            bind: 'contentText'
          },
          [getChannelName('set_account_alias')]: {
            bind: 'cardTitle'
          },
          [getChannelName('set_account_number')]: {
            bind: 'numProduct'
          },
          [getChannelName('set_account_amount')]: {
            bind: 'amount'
          }
        }
      }
    }
  };
  const bbvaDivider = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      size: 'fit'
    }
  };
  const listCardAccount = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-card',
    tagSpherica: 'bbva-list-card-spherica',
    familyPath: '@bbva-web-components/bbva-list-card',
    familyPathSpherica: '@glomo-web-components/bbva-list-card-spherica',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getChannelName('set_label_amount_available_cards')]: {
            bind: 'contentText'
          },
          [getChannelName('set_second_account_alias')]: {
            bind: 'cardTitle'
          },
          [getChannelName('set_second_account_number')]: {
            bind: 'numProduct'
          },
          [getChannelName('set_second_account_amount')]: {
            bind: 'amount'
          },
          [getChannelName('hide_second_account')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };
  const bbvaDividerAccounts = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      size: 'fit'
    }
  };
  const listCardCardsUser = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-card',
    tagSpherica: 'bbva-list-card-spherica',
    familyPath: '@bbva-web-components/bbva-list-card',
    familyPathSpherica: '@glomo-web-components/bbva-list-card-spherica',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getChannelName('set_label_amount_available_cards')]: {
            bind: 'contentText'
          },
          [getChannelName('set_third_account_alias')]: {
            bind: 'cardTitle'
          },
          [getChannelName('set_third_account_number')]: {
            bind: 'numProduct'
          },
          [getChannelName('set_third_account_amount')]: {
            bind: 'amount'
          },
          [getChannelName('hide_third_account')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };
  const bbvaDividerAccountsDue = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      size: 'fit'
    }
  };
  const listCardCardsUserQuattro = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-card-spherica',
    familyPath: '@glomo-web-components/bbva-list-card-spherica',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          codi_enrollment_set_label_amount_available_cards: {
            bind: 'contentText'
          },
          codi_enrollment_set_fourth_account_alias: {
            bind: 'cardTitle'
          },
          codi_enrollment_set_fourth_account_number: {
            bind: 'numProduct'
          },
          codi_enrollment_set_fourth_account_amount: {
            bind: 'amount'
          },
          codi_enrollment_hide_fourth_account: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const bbvaDividerAccountsTre = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      size: 'fit'
    }
  };

  const listCardCardsUserCinque = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-card-spherica',
    familyPath: '@glomo-web-components/bbva-list-card-spherica',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          codi_enrollment_set_label_amount_available_cards: {
            bind: 'contentText'
          },
          codi_enrollment_set_fifth_account_alias: {
            bind: 'cardTitle'
          },
          codi_enrollment_set_fifth_account_number: {
            bind: 'numProduct'
          },
          codi_enrollment_set_fifth_account_amount: {
            bind: 'amount'
          },
          codi_enrollment_hide_fifth_account: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const headerCategoryTerms = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'codi-refactor-enrollment-page-category-4',
      text: 'codi-refactor-enrollment-page-category-4'
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-bottom--0-5',
      text: 'codi-refactor-enrollment-page-category-4-spherica'
    }
  };
  const listFile = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-file',
    tagSpherica: 'bbva-list-file-spherica',
    familyPath: '@bbva-web-components/bbva-list-file',
    familyPathSpherica: '@glomo-web-components/bbva-list-file-spherica',
    render: 'litElement',
    properties: {
      id: 'terms_and_conditions_pdf',
      icon: 'coronita:pdf',
      cellsConnections: {
        in: {
          [getChannelName('SET_LIST_FILE_NAME')]: {
            bind: 'fileName'
          }
        },
        out: {
          [getChannelName('REQUEST_PDF_LINK_CLICK')]: {
            bind: 'list-file-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      withBackground: true,
      variant: 'primary-alt',
      icon: 'spherica:pdf',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const formCheckbox = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-checkbox',
    tagSpherica: 'bbva-form-checkbox-spherica',
    familyPath: '@bbva-web-components/bbva-form-checkbox',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'terms_checkbox',
      name: 'terms',
      value: '1',
      required: true,
      checkIcon: 'coronita:checkmark',
      className: 'u-margin--grid',
      cellsConnections: {
        in: {
          [getChannelName('set_label_checkbox')]: {
            bind: 'label'
          },
          [getChannelName('init_status_checkbox')]: {
            bind: 'checked'
          }
        },
        out: {
          [getChannelName('input_checkbox')]: {
            bind: 'change'
          }
        }
      }
    },
    propertiesSpherica: {
      ambient: 'primary-alt',
      className: 'u-margin--grid u-margin-bottom--1-5'
    }
  };
  const buttonDefault = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'make-enrollment-button',
      disabled: true,
      text: 'codi-refactor-modal-info-button-accept-label',
      className: 'u-display--table u-margin--center u-margin-bottom--1',
      cellsConnections: {
        in: {
          [getChannelName('terms-and-conditions-button')]: {
            bind: 'disabled'
          }
        },
        out: {
          [getChannelName('make_enrollment')]: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--grid u-margin-bottom--1-5 u-height--56 u-max-width--2'
    }
  };
  const apiBusinessDocuments = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: config.globalServices.host,
      native: config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('request_business_documents')]: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          [getChannelName('business_documents_success')]: {
            bind: 'success-on-get-business-documents'
          },
          [getChannelName('business_documents_error')]: {
            bind: 'error-on-get-business-documents'
          }
        }
      }
    }
  };
  const managerAnalytic = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-codi',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('analytic_onboarding_user_state_step')]: {
            bind: 'setClickStep'
          },
          analytic_onboarding_aplication_operation_num: {
            bind: 'setOperationNumber'
          }
        },
        out: {
          [getChannelName('analytic_user_state_step_onboarding')]: {
            bind: 'analytic-user-state-step-onboarding',
            analytics: appStarted
          }
        }
      }
    }
  };
  const managerCodiOnboarding = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-codi-onboarding',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      detailDownloadConfig: detailDownloadParams,
      platformId: config.codiSettings.androiId,
      appId: config.codiSettings.appId,
      appIosId: config.codiSettings.appIosId,
      host: config.globalServices.host,
      native: config.native,
      isSpherica,
      enrollmentAttemps: {
        current: 0,
        currentDate: '',
        lastDate: '',
        max: 3
      },
      phoneAssistanceNumber: {
        value: config.bbvaLine
      },
      cellsConnections: {
        in: {
          codi_enrollment_close_header: {
            bind: 'goPageBack'
          },
          [getChannelName('INIT_PAGE')]: {
            bind: 'initEnrollment'
          },
          dashboard_accounts: {
            bind: 'accounts'
          },
          global_set_app_settings: {
            bind: 'setIdDocumentsTermsConditions'
          },
          global_login_success: {
            bind: 'setWebInfo'
          },
          native_user_id: {
            bind: 'numberPhone'
          },
          [getChannelName('show_more_accounts')]: {
            bind: 'showMoreAccounts'
          },
          [getChannelName('input_checkbox')]: {
            bind: 'acceptTerms'
          },
          sign_modal_submit_sign: {
            bind: 'smsBanxicoTyped'
          },
          [getChannelName('REQUEST_PDF_LINK_CLICK')]: {
            bind: 'showPDF'
          },
          [getChannelName('_SUCCESS_RESPONSE_GET_ID')]: {
            bind: 'requestPDF'
          },
          global_open_document_url_success: {
            bind: 'closeDocument'
          },
          global_open_document_url_error: {
            bind: 'closeDocument'
          },
          global_device_get_device_platform_success: {
            bind: 'pluginPlatformSuccess'
          },
          global_device_get_manufacturer_success: {
            bind: 'pluginManufacturerSuccess'
          },
          global_device_get_device_model_success: {
            bind: 'pluginModelSuccess'
          },
          global_device_info_error: {
            bind: 'pluginDeviceInfoError'
          },
          [getChannelName('make_enrollment')]: {
            bind: 'requestEnrollment'
          },
          [getChannelName('enrollment_success')]: {
            bind: 'handleEnrollmentsSuccess'
          },
          [getChannelName('enrollment_error')]: {
            bind: 'handleEnrollmentsError'
          },
          sign_modal_codi_submit_sign: {
            bind: 'smsBanxicoTyped'
          },
          sign_modal_new_sms: {
            bind: 'requestEnrollment'
          },
          [getChannelName('key_source_generated')]: {
            bind: 'parseKeySourceBanxico'
          },
          [getChannelName('decrypted_google_data_enrollment')]: {
            bind: 'handleAliasGoogleIdDecryptSuccess'
          },
          [getChannelName('response_token_push_notification_success')]: {
            bind: 'receiveTokenPushNotification'
          },
          [getChannelName('response_token_push_notification_error')]: {
            bind: 'errorTokenPushNotification'
          },
          [getChannelName('hmac_generated_success')]: {
            bind: 'handleHmacSuccess'
          },
          [getChannelName('hash_password_key_source_applied_success')]: {
            bind: 'parsePasswordKeySourceHashed'
          },
          [getChannelName('google_id_encrypted_success')]: {
            bind: 'googleIdEncryptedAesSuccess'
          },
          [getChannelName('end_enrollment_encryption')]: {
            bind: 'finalizeEnrollmentCipher'
          },
          [getChannelName('post_login_banxico_success')]: {
            bind: 'postLoginBanxicoSuccess'
          },
          [getChannelName('post_login_banxico_error')]: {
            bind: 'postLoginBanxicoError'
          },
          [getChannelName('business_documents_success')]: {
            bind: 'getBusinessDocumentSuccess'
          },
          [getChannelName('business_documents_error')]: {
            bind: 'getBusinessDocumentError'
          },
          [getChannelName('post_banxico_terms_success')]: {
            bind: 'postBanxicoTermsSuccess'
          },
          [getChannelName('post_banxico_terms_error')]: {
            bind: 'postBanxicoTermsError'
          },
          [getChannelName('get_account_success')]: {
            bind: 'getAccountSuccess'
          },
          [getChannelName('get_account_error')]: {
            bind: 'getAccountError'
          },
          [getChannelName('external_key_generated')]: {
            bind: 'externalKeyGeneratedSuccess'
          },
          [getChannelName('post_banxico_authorization_request_success')]: {
            bind: 'postAuthorizationRequestSuccess'
          },
          [getChannelName('post_banxico_authorization_request_error')]: {
            bind: 'postAuthorizationRequestError'
          },
          receive_device_data_ios: {
            bind: 'dataToIOS',
            'forward-to-native': true
          },
          [getChannelName('post_banxico_default_app_enrollment_success')]: {
            bind: 'handleDefaultAppEnrollmentSuccess'
          },
          [getChannelName('post_banxico_default_app_enrollment_error')]: {
            bind: 'handleDefaultAppEnrollmentError'
          },
          global_storage_get_receive_device_data_ios_success: {
            bind: 'dataToIOS'
          },
          global_storage_get_receive_device_data_ios_error: {
            bind: 'tokenBanxicoErrorLocalStorage'
          },
          global_storage_get_banxico_token_success: {
            bind: 'tokenBanxicoSuccess'
          },
          global_storage_get_banxico_token_error: {
            bind: 'tokenBanxicoErrorLocalStorage'
          },
          global_storage_get_codi_init_firebase_success: {
            bind: 'initServiceFirebase'
          },
          global_storage_get_codi_init_firebase_error: {
            bind: 'initServiceFirebaseError'
          },
          global_storage_get_banxico_push_status_success: {
            bind: 'setBanxicoPushStatus'
          },
          global_storage_get_banxico_push_status_error: {
            bind: 'setBanxicoPushStatus'
          },
          global_storage_get_codi_enrollment_attemps_success: {
            bind: 'getEnrollmentAttempsFromStorage'
          },
          global_storage_get_codi_enrollment_attemps_error: {
            bind: 'getEnrollmentAttempsFromStorage'
          },
          global_device_info_get_true_time_success: {
            bind: 'getCurrentDate'
          },
          [getChannelName('set_options_succes')]: {
            bind: 'setOptionsSuccess'
          },
          [getChannelName('set_options_error')]: {
            bind: 'setOptionsError'
          },
          [getChannelName('get_service_token_succes')]: {
            bind: 'getServiceSuccess'
          },
          [getChannelName('get_service_token_error')]: {
            bind: 'getServiceError'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          global_device_info_get_true_time: {
            bind: 'get-date-time'
          },
          [getChannelName('set_label_checkbox')]: {
            bind: 'set-label-checkbox'
          },
          [getChannelName('set_label_amount_available_cards')]: {
            bind: 'set-label-available-amount'
          },
          [getChannelName('analytic_onboarding_user_state_step')]: {
            bind: 'analytic-onboarding-state-step-response'
          },
          [getChannelName('terms-and-conditions-button')]: {
            bind: 'change-button-terms'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          sign_modal_open: {
            bind: 'set-modal-config',
            analytics: otpStep
          },
          sign_modal_close: {
            bind: 'close-sign-modal'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [getChannelName('CLIENT_FULL_NAME')]: {
            bind: 'client-full-name'
          },
          [getChannelName('CLIENT_PHONE')]: {
            bind: 'client-phone'
          },
          [getChannelName('SEE_MORE_LABEL')]: {
            bind: 'set-see-more-label'
          },
          [getChannelName('SET_MODAL_ACCOUNTS')]: {
            bind: 'set-modal-all-accounts'
          },
          [getChannelName('set_account_alias')]: {
            bind: 'codi-first-account-alias'
          },
          [getChannelName('set_account_number')]: {
            bind: 'codi-first-account-number'
          },
          [getChannelName('set_account_amount')]: {
            bind: 'codi-first-account-amount'
          },
          [getChannelName('hide_second_account')]: {
            bind: 'hide-second-account-ui'
          },
          [getChannelName('set_second_account_alias')]: {
            bind: 'codi-second-account-alias'
          },
          [getChannelName('set_second_account_number')]: {
            bind: 'codi-second-account-number'
          },
          [getChannelName('set_second_account_amount')]: {
            bind: 'codi-second-account-amount'
          },
          [getChannelName('hide_third_account')]: {
            bind: 'hide-third-account-ui'
          },
          [getChannelName('set_third_account_alias')]: {
            bind: 'codi-third-account-alias'
          },
          [getChannelName('set_third_account_number')]: {
            bind: 'codi-third-account-number'
          },
          [getChannelName('set_third_account_amount')]: {
            bind: 'codi-third-account-amount'
          },
          codi_enrollment_set_fourth_account_alias: {
            bind: 'codi-fourth-account-alias'
          },
          codi_enrollment_set_fourth_account_number: {
            bind: 'codi-fourth-account-number'
          },
          codi_enrollment_set_fourth_account_amount: {
            bind: 'codi-fourth-account-amount'
          },
          codi_enrollment_hide_fourth_account: {
            bind: 'hide-fourth-account-ui'
          },
          codi_enrollment_set_fifth_account_alias: {
            bind: 'codi-fifth-account-alias'
          },
          codi_enrollment_set_fifth_account_number: {
            bind: 'codi-fifth-account-number'
          },
          codi_enrollment_set_fifth_account_amount: {
            bind: 'codi-fifth-account-amount'
          },
          codi_enrollment_hide_fifth_account: {
            bind: 'hide-fifth-account-ui'
          },
          [getChannelName('REQUEST_PDF_ID')]: {
            bind: 'request-pdf-id'
          },
          [getChannelName('REQUEST_PDF')]: {
            bind: 'request-pdf-terms-and-conditions'
          },
          global_open_document_url: {
            bind: 'native-request-pdf'
          },
          global_device_info_get_platform: {
            bind: 'get-platform-device'
          },
          global_device_info_get_manufacturer: {
            bind: 'get-brand-device'
          },
          global_device_info_get_model: {
            bind: 'get-model-device'
          },
          [getChannelName('request_enrollment_banxico')]: {
            bind: 'request-enrollment-codi'
          },
          [getChannelName('generate_key_source_banxico')]: {
            bind: 'generate-key-source'
          },
          [getChannelName('get_token_push_notification')]: {
            bind: 'get-token-push-notification'
          },
          [getChannelName('generate_hmac_banxico')]: {
            bind: 'generate-hmac-hash-256'
          },
          [getChannelName('generate_hash_password_key_source')]: {
            bind: 'generate-hash-password-key-source'
          },
          [getChannelName('encrypt_google_id_aes')]: {
            bind: 'encrypt-google-id-with-aes'
          },
          [getChannelName('generate_hmac_key_source')]: {
            bind: 'apply-sha-256-key-source-xor'
          },
          [getChannelName('request_post_login_banxico')]: {
            bind: 'request-login-banxico'
          },
          [getChannelName('request_business_documents')]: {
            bind: 'request-pdf-codi-contract'
          },
          [getChannelName('request_banxico_terms')]: {
            bind: 'request-post-banxico-terms'
          },
          [getChannelName('set_account_id')]: {
            bind: 'set-account-id'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'request-get-account'
          },
          [getChannelName('generate_external_key')]: {
            bind: 'create-external-key'
          },
          [getChannelName('request_validate_account_banxico')]: {
            bind: 'post-authorization-request-banxico'
          },
          [getChannelName('navigate_accounts_validate')]: {
            bind: 'navigate-to-accounts-validate-codi',
            link: {
              page: 'codiAccountValidate',
              skipHistory: true
            }
          },
          codi_open_account_validation_modal: {
            bind: 'set-modal-validate'
          },
          analytic_onboarding_idotp: {
            bind: 'analytic-onboarding-otp-id-response'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-modal'
          },
          [getChannelName('OPEN_MODAL_APP_DEFAULT')]: {
            bind: 'app-dafault-bbva',
            analytics: footprintDefaultAppCodi
          },
          [getChannelName('OPEN_MODAL_CODI_NOT_AVAILABLE')]: {
            bind: 'codi-not-available-onboarding',
            analytics: footprintIsNotAvailableCodi
          },
          [getChannelName('data_user_codi_onboarding')]: {
            bind: 'request-data-onboarding-user',
            'forward-to-native': true
          },
          [getChannelName('post_default_app_enrollment')]: {
            bind: 'request-post-default-app-enrollment',
            analytics: internalLink
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line',
            'forward-to-native': true
          },
          [getChannelName('exit_operative')]: {
            bind: 'back-step-out-flow',
            backStep: true
          },
          [getChannelName('init_service_options_push')]: {
            bind: 'init-service-options-push'
          },
          [getChannelName('get_service_token_push')]: {
            bind: 'get-service-token-push'
          },
          [getChannelName('SET_LIST_FILE_NAME')]: {
            bind: 'set-list-file-name'
          },
          codiEnrollment_send_response_default_enrollment_to_log: {
            bind: 'send-response-default-enrollment-to-log'
          },
          codiEnrollment_send_response_enrollment_to_log: {
            bind: 'send-response-enrollment-to-log'
          },
          codiEnrollment_send_response_login_to_log: {
            bind: 'send-response-login-to-log'
          },
          codiEnrollment_send_response_autorization_request_to_log: {
            bind: 'send-response-autorization-request-to-log'
          },
          codiEnrollment_send_response_enrollment_cancel_to_log: {
            bind: 'unified-log-default-enrollment-cancel'
          },
          [getChannelName('init_status_checkbox')]: {
            bind: 'init-status-checkbox'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            navigate_to_main: {
              bind: 'exitFlow'
            }
          },
          out: {
            global_alert_manager_open_confirmation_modal: {
              bind: 'open-alert-modal'
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

  const managerCodiLog = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-unified-log',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          native_user_id: {
            bind: 'numberPhone'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          codiEnrollment_GET_ENROLLMENT_DATA: {
            bind: 'getEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_error: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_lost_internet_log_success: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_lost_internet_log_error: {
            bind: 'saveGetConnectionLog'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
          },
          global_storage_get_unified_log_timeout_session_key_success: {
            bind: 'setTimeoutSessionVerified'
          },
          global_storage_get_unified_log_timeout_session_key_error: {
            bind: 'setTimeoutSessionVerified'
          },
          codi_session_timeout_expired: {
            bind: 'saveInLocalstorageTimeout'
          },
          connection_status_codiEnrollment_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiEnrollment_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiEnrollment_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiEnrollment_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          },
          codiEnrollment_send_response_default_enrollment_to_log: {
            bind: 'enrollmentDefaultAccept'
          },
          codiEnrollment_send_response_enrollment_to_log: {
            bind: 'webServiceConsumeLog'
          },
          codiEnrollment_send_response_autorization_request_to_log: {
            bind: 'webServiceConsumeLog'
          },
          codiEnrollment_send_response_login_to_log: {
            bind: 'webServiceConsumeLog'
          },
          codiEnrollment_send_response_enrollment_cancel_to_log: {
            bind: 'enrollmentDefaultCancel'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiEnrollment_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiEnrollment_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const dataProviderCodiBanxico = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: banxicoApi,
      cellsConnections: {
        in: {
          codiEnrollment_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiEnrollment_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiEnrollment_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiEnrollment_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          },
          codiEnrollment_init_status_checkbox: {
            bind: 'init-status-checkbox'
          }
        }
      }
    }
  };
  const codicelCrypto = {
    type: 'DM',
    tag: 'glomo-codicel-crypto-dm',
    zone: 'app__main',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('generate_key_source_banxico')]: {
            bind: 'generateKeySourceBanxico'
          },
          [getChannelName('decrypt_google_data_enrollment')]: {
            bind: 'decryptGoogleDataEnrollment'
          },
          [getChannelName('generate_hmac_banxico')]: {
            bind: 'generateHmacBanxico'
          },
          [getChannelName('generate_hash_password_key_source')]: {
            bind: 'generateHashPasswordHmac'
          },
          [getChannelName('encrypt_google_id_aes')]: {
            bind: 'encryptAES'
          },
          [getChannelName('generate_hmac_key_source')]: {
            bind: 'generateHmacKeySource'
          },
          [getChannelName('generate_external_key')]: {
            bind: 'createExternalKeyAccounts'
          }
        },
        out: {
          [getChannelName('key_source_generated')]: {
            bind: 'key-source-banxico-generated'
          },
          [getChannelName('error_generating_key_source')]: {
            bind: 'error-key-source-banxico'
          },
          [getChannelName('decrypted_google_data_enrollment')]: {
            bind: 'google-data-enrollment-decrypted'
          },
          [getChannelName('hmac_generated_success')]: {
            bind: 'hash-generated-base64'
          },
          [getChannelName('hmac_generated_error')]: {
            bind: 'error-generate-hmac-banxico'
          },
          [getChannelName('hash_password_key_source_applied_success')]: {
            bind: 'hash-password-key-source-applied'
          },
          [getChannelName('google_id_encrypted_success')]: {
            bind: 'data-encrypted-aes-success'
          },
          [getChannelName('end_enrollment_encryption')]: {
            bind: 'sha-256-generated-base64'
          },
          [getChannelName('external_key_generated')]: {
            bind: 'external-key-generated'
          }
        }
      }
    }
  };
  const nativeConnectorPush = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-push',
    familyPath: '@glomo-web-components/bbva-nativeconnector-push',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_service_options_push')]: {
            bind: 'setOptions'
          },
          [getChannelName('get_service_token_push')]: {
            bind: 'getServiceToken'
          }
        },
        out: {
          [getChannelName('set_options_succes')]: {
            bind: 'set-options-success'
          },
          [getChannelName('set_options_error')]: {
            bind: 'set-options-error'
          },
          [getChannelName('get_service_token_succes')]: {
            bind: 'request-service-token-success'
          },
          [getChannelName('get_service_token_error')]: {
            bind: 'request-service-token-error'
          }
        }
      }
    }
  };
  const banxicoAPI = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-banxico',
    properties: {
      host: config.globalServices.host,
      native: config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('request_enrollment_banxico')]: {
            bind: 'postEnrollments'
          },
          [getChannelName('request_post_login_banxico')]: {
            bind: 'postLogin'
          },
          [getChannelName('request_banxico_terms')]: {
            bind: 'postTerms'
          },
          [getChannelName('request_validate_account_banxico')]: {
            bind: 'postAuthorizationRequest'
          },
          [getChannelName('post_default_app_enrollment')]: {
            bind: 'postDefaultAppRequest'
          }
        },
        out: {
          [getChannelName('enrollment_success')]: {
            bind: 'success-on-post-banxico-enrollments'
          },
          [getChannelName('enrollment_error')]: {
            bind: 'error-on-post-banxico-enrollments'
          },
          [getChannelName('post_login_banxico_success')]: {
            bind: 'success-on-post-banxico-login'
          },
          [getChannelName('post_login_banxico_error')]: {
            bind: 'error-on-post-banxico-login'
          },
          [getChannelName('post_banxico_terms_success')]: {
            bind: 'success-on-post-banxico-terms'
          },
          [getChannelName('post_banxico_terms_error')]: {
            bind: 'error-on-post-banxico-terms'
          },
          [getChannelName('post_banxico_authorization_request_success')]: {
            bind: 'success-on-post-banxico-authorization-request'
          },
          [getChannelName('post_banxico_authorization_request_error')]: {
            bind: 'error-on-post-banxico-authorization-request'
          },
          [getChannelName('post_banxico_default_app_enrollment_success')]: {
            bind: 'success-on-post-banxico-default-app'
          },
          [getChannelName('post_banxico_default_app_enrollment_error')]: {
            bind: 'error-on-post-banxico-default-app'
          }
        }
      }
    }
  };
  const accountsApi = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts',
    properties: {
      host: config.globalServices.host,
      native: config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      accountsApiVersion: config.globalServices.versions.accounts,
      cellsConnections: {
        in: {
          [getChannelName('set_account_id')]: {
            bind: 'accountId'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'getAccount'
          }
        },
        out: {
          [getChannelName('get_account_success')]: {
            bind: 'get-on-get-account'
          },
          [getChannelName('get_account_error')]: {
            bind: 'error-on-get-account'
          }
        }
      }
    }
  };
  if (config.native) {
    base.components.push(glomoOpenDocument(config));
  }
  base.components.push(
    bbvaTextOne,
    headerCategoryThree,
    modalAccounts,
    listCard,
    listCardAccount,
    listCardCardsUser,
    listCardCardsUserQuattro,
    listCardCardsUserCinque,
    headerCategoryTerms,
    listFile,
    formCheckbox,
    buttonDefault,
    managerCodiOnboarding,
    apiBusinessDocuments,
    managerAnalytic,
    banxicoAPI,
    accountsApi,
    codicelCrypto,
    nativeConnectorPush,
    cellsConnectionStatus(pageName),
    managerCodiLog,
    dataProviderCodiBanxico,
    signModal(config),
    bbvaNativeConnectorDeviceInfo
  );
  if (!isSpherica) {
    base.components.splice(4, 0, bbvaDivider);
    base.components.splice(6, 0, bbvaDividerAccounts);
    base.components.splice(8, 0, bbvaDividerAccountsDue);
    base.components.splice(10, 0, bbvaDividerAccountsTre);
  }
  localStorageApp.addOutStorageChannels(base.components, ['banxico_token',
    'receive_device_data_ios',
    'codi_init_firebase',
    'banxico_push_status',
    'codi_enrollment_attemps',
    'login_banxico_codi',
    'login_banxico_codi',
    'codi_pending_accounts',
    'enrollment_codi_key',
    'lost_internet_log',
    'unified_log_timeout_session_key'
  ], config);
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'ENROLLMENT-NOT-AVAILABLE',
      acceptRetry: { bind: 'requestEnrollment', component: 'bbva-manager-codi-onboarding' },
      cancelRetry: { bind: 'goPageBack', component: 'bbva-manager-codi-onboarding' },
      acceptCallForHelp: { bind: 'callBBVALine', component: 'bbva-manager-codi-onboarding' }
    },
    {
      id: 'CODI-SMS-FAILED',
      acceptRetry: { bind: 'openOTPModal', component: 'bbva-manager-codi-onboarding' },
      cancelRetry: { bind: 'goPageBack', component: 'bbva-manager-codi-onboarding' },
      acceptCallForHelp: { bind: 'callBBVALine', component: 'bbva-manager-codi-onboarding' }
    },
    {
      id: 'BANXICO-ERROR-TERMS',
      acceptRetry: { bind: 'requestBanxicoTerms', component: 'bbva-manager-codi-onboarding' },
      cancelRetry: { bind: 'goPageBack', component: 'bbva-manager-codi-onboarding' },
      acceptCallForHelp: { bind: 'goPageBack', component: 'bbva-manager-codi-onboarding' }
    }
  ]);
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
