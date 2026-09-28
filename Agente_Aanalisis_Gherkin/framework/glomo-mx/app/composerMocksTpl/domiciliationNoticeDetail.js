'use strict';
module.exports = CONFIG => {
  const prefix = 'DOMICILIATION_NOTICE_DETAIL';
  const successPrefix = 'DOMICILIATION_NOTICE_SUCCESS';
  const declinePrefix = 'DOMICILIATION_NOTICE_DECLINE';
  const pageName = 'domiciliationNoticeDetail,';
  const {
    SPINNER: spinner,
    getLanguage,
    getLocalCurrency
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        businessCryptography
      }
    },
    native = false
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const pageAnalytics = require('./analytics/_domiciliationNoticeDetail')(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      hasFooter: true,
      footerHeight: 100,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : ''
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    properties: {
      id: 'maximum',
      variant: 'modal-three-level',
      className: isNativeIos ? 'u-padding-top--0' : '',
      fontWeight: '400',
      fontSize: '5rem',
      text: 'domiciliation-notice-tdd-decline-subscription-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          [prefix + '_SET_HEADER']: {
            bind: 'text'
          }
        },
        out: {
          [prefix + '_HEADER_RIGHT_BUTTON']: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };
  const tittleDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-title',
      variant: 'stacked',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          [prefix + '_SET_TITLE']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const amountDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-amount',
      variant: 'stacked',
      language: getLanguage(),
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [prefix + '_SET_AMOUNT']: {
            bind: 'label'
          },
          [prefix + '_SET_RESPONSE_AMOUNT']: {
            bind: 'amount'
          }
        }
      }
    }
  };
  const accountDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-account',
      variant: 'stacked',
      visibleChars: '4',
      maskChars: '•',
      cellsConnections: {
        in: {
          [prefix + '_SET_ACCOUNT']: {
            bind: 'label'
          },
          [prefix + '_SET_RESPONSE_LAST_DIGIT_CARD']: {
            bind: 'mask'
          }
        }
      }
    }
  };
  const serviceProviderDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-service-provider',
      variant: 'stacked',
      cellsConnections: {
        in: {
          [prefix + '_SET_SERVICE_PROVIDER']: {
            bind: 'label'
          },
          [prefix + '_SET_RESPONSE_SERVICE_PROVIDER']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const referenceDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-reference',
      variant: 'stacked',
      visibleChars: '40',
      cellsConnections: {
        in: {
          [prefix + '_SET_REFERENCE']: {
            bind: 'label'
          },
          [prefix + '_SET_RESPONSE_REFERENCE']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const adviceDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-advice',
      variant: 'stacked',
      cellsConnections: {
        in: {
          [prefix + '_SET_ADVICE']: {
            bind: 'description'
          }
        }
      }
    }
  };
  const adviceConfirmation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      className: 'list-advice',
      variant: 'stacked',
      description: 'domiciliation-notice-tdd-confirms-subscription-help-modal-text-I'
    }
  };
  const divFooterContainer = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'div_footer',
      className: 'u-display--center'
    }
  };
  const rejectedButton = {
    zone: 'div_footer.slot-content',
    type: 'UI',
    tag: 'bbva-button-default',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    properties: {
      className: `${isNativeIos ? 'u-padding-top--0 u-padding-bottom--0 ' : ''}rejected-button u-margin--1 u-padding-right--0 u-padding-left--0`,
      text: 'domiciliation-notice-tdd-confirms-subscription-button-reject',
      variant: 'secondary',
      cellsConnections: {
        out: {
          [prefix + '_REJECTED_SUBSCRIPTION_AUTHORIZATION']: {
            bind: 'click'
          }
        }
      }
    }
  };
  const acceptedButton = {
    zone: 'div_footer.slot-content',
    type: 'UI',
    tag: 'bbva-button-default',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    properties: {
      className: `${isNativeIos ? 'u-padding-top--0 u-padding-bottom--0 ' : ''}accepted-button u-margin--1 u-padding-right--0 u-padding-left--0`,
      text: 'domiciliation-notice-tdd-confirms-subscription-button-confirm',
      cellsConnections: {
        out: {
          [prefix + '_ACCEPTED_SUBSCRIPTION_AUTHORIZATION']: {
            bind: 'click'
          }
        }
      }
    }
  };
  const helpModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    properties: {
      titleLines: '2',
      cellsConnections: {
        in: {
          DOMICILIATION_NOTICE_DETAIL_SET_TYPE_MODAL: {
            bind: 'modalType'
          },
          [prefix + '_SET_TITLE_ICON_MODAL']: {
            bind: 'titleIcon'
          },
          [prefix + '_SET_TITLE_TEXT_MODAL']: {
            bind: 'titleText'
          },
          [prefix + '_SET_BODY_TEXT_MODAL']: {
            bind: 'bodyText'
          },
          [prefix + '_SET_BUTTON_TEXT_MODAL']: {
            bind: 'buttonText'
          },
          [prefix + '_SET_LINK_TEXT_MODAL']: {
            bind: 'linkText'
          },
          [prefix + '_OPEN_MODAL']: {
            bind: 'open'
          }
        },
        out: {
          [prefix + '_RESET_MANAGER']: {
            bind: 'help-modal-footer-button-click'
          },
          global_backstep_channel: {
            bind: 'help-modal-footer-button-click',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-confirmation-consumption-card-dm',
    properties: {
      cellsConnections: {
        in: {
          navigation_from_deep_link_from_notification_detail: {
            bind: 'domiciliationNotice'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'domiciliationNotice'
          },
          domiciliation_notice_detail_post_success_response: {
            bind: 'cryptoResponse'
          },
          [prefix + '_HEADER_RIGHT_BUTTON']: {
            bind: 'handleExitProcess'
          },
          [prefix + '_ACCEPTED_SUBSCRIPTION_AUTHORIZATION']: {
            bind: 'requestCollectionAlertPatchAccepted'
          },
          [prefix + '_COLLECTION_ALERT_PATCH_V1_ERROR']: {
            bind: 'handleSubscriptionAuthorizationFailure'
          },
          [prefix + '_GET_LAST_RESPONSE_HEADERS_ALERT_PATCH_V1']: {
            bind: 'handleSubscriptionAuthorizationSuccessful'
          },
          [prefix + '_API_DM_ERROR_RESPONSE']: {
            bind: 'handleSubscriptionAuthorizationFailure'
          },
          [prefix + '_REJECTED_SUBSCRIPTION_AUTHORIZATION']: {
            bind: 'requestCollectionAlertPatchRejected'
          },
          [prefix + '_RESET_MANAGER']: {
            bind: 'reset'
          },
          global_domiciliation_notice_detail_response_accept: {
            bind: 'requestCollectionAlertPatch'
          },
          global_domiciliation_notice_detail_response_button_cancel: {
            bind: 'handleAlertManagerCloseChannels'
          },
          global_domiciliation_notice_detail_response_button_cancel_from_header: {
            bind: 'handleAlertManagerCloseChannels'
          },
          global_domiciliation_notice_detail_response_cancel: {
            bind: 'handleAlertManagerCloseChannels'
          },
          global_domiciliation_notice_detail_response_cancel_from_header: {
            bind: 'handleAlertManagerCloseChannels'
          },
          [prefix + '_RESET_NOTICE_DETAIL']: {
            bind: 'reset'
          }
        },
        out: {
          domiciliation_notice_detail_account_manager_post_crypto_documents: {
            bind: 'account-manager-post-crypto-documents'
          },
          [prefix + '_SET_HEADER']: {
            bind: 'set-header'
          },
          [prefix + '_SET_TITLE']: {
            bind: 'set-title'
          },
          [prefix + '_SET_AMOUNT']: {
            bind: 'set-amount'
          },
          [prefix + '_SET_ACCOUNT']: {
            bind: 'set-account'
          },
          [prefix + '_SET_SERVICE_PROVIDER']: {
            bind: 'set-service-provider'
          },
          [prefix + '_SET_REFERENCE']: {
            bind: 'set-reference'
          },
          [prefix + '_SET_ADVICE']: {
            bind: 'set-advice'
          },
          [prefix + '_SET_RESPONSE_AMOUNT']: {
            bind: 'set-response-amount'
          },
          [prefix + '_SET_RESPONSE_LAST_DIGIT_CARD']: {
            bind: 'set-response-last-digit-card'
          },
          [prefix + '_SET_RESPONSE_SERVICE_PROVIDER']: {
            bind: 'set-response-service-provider'
          },
          [prefix + '_SET_RESPONSE_REFERENCE']: {
            bind: 'set-response-reference'
          },
          [successPrefix + '_SET_PANEL_HEADING']: {
            bind: 'set-panel-heading'
          },
          [successPrefix + '_SET_PANEL_TEXT']: {
            bind: 'set-panel-text'
          },
          [successPrefix + '_SET_INVOICE_DESCRIPTION']: {
            bind: 'set-invoice-description'
          },
          [successPrefix + '_SET_AMOUNT']: {
            bind: 'set-amount'
          },
          [successPrefix + '_SET_TERMINATION_LABEL']: {
            bind: 'set-termination-label'
          },
          [successPrefix + '_SET_TERMINATION_DESCRIPTION']: {
            bind: 'set-termination-description'
          },
          [successPrefix + '_SET_SERVICE_PROVIDER_DESCRIPTION']: {
            bind: 'set-service-provider-description'
          },
          [successPrefix + '_SET_REFERENCE_DESCRIPTION']: {
            bind: 'set-reference-description'
          },
          DOMICILIATION_NOTICE_SUCCESS_SET_SHARE_BUTTON_CONFIG: {
            bind: 'set-share-button-config'
          },
          CH_RESPONSE_SENDING_ERROR_CDC: {
            bind: 'response-sending-modal-cdc-event'
          },
          [prefix + '_REQUEST_COLLECTION_ALERT_PATCH']: {
            bind: 'request-collection-alert-patch'
          },
          [prefix + '_RESET']: {
            bind: 'show-domiciliation-notice-success-page'
          },
          SHOW_DOMICILIATION_NOTICE_SUCCESS_PAGE: {
            bind: 'show-domiciliation-notice-success-page',
            analytics: pageAnalytics._advancedFootprint('cargo confirmado', true),
            link: {
              page: 'domiciliationNoticeSuccess',
              skipHistory: true
            }
          },
          [declinePrefix + '_SET_PANEL_HEADING_DECLINE']: {
            bind: 'set-panel-heading-decline'
          },
          [declinePrefix + '_SET_PANEL_TEXT_DECLINE']: {
            bind: 'set-panel-text-decline'
          },
          [declinePrefix + '_SET_PANEL_TEXT_DECLINE_ONE']: {
            bind: 'set-panel-text-decline-one'
          },
          [prefix + '_RESET_MANAGER']: {
            bind: 'show-domiciliation-notice-decline-page'
          },
          SHOW_DOMICILIATION_NOTICE_DECLINE: {
            bind: 'show-domiciliation-notice-decline-page',
            analytics: pageAnalytics._advancedFootprint('cargo rechazado', false),
            link: {
              page: 'domiciliationNoticeDecline',
              skipHistory: true
            }
          },
          [prefix + '_CONFIRM_OR_REJECTED']: {
            bind: 'set-confirm-or-rejected',
            analytics: pageAnalytics._advancedFootprint('', true)
          },
          open_control_veil: {
            bind: 'open-spinner'
          },
          close_control_veil: {
            bind: 'close-spinner'
          },
          global_open_control_veil: {
            bind: 'open-spinner'
          },
          global_close_control_veil: {
            bind: 'close-spinner'
          },
          set_direct_debit_receipt: {
            bind: 'set-receipt-info'
          },
          DOMICILIATION_NOTICE_DETAIL_SET_TYPE_MODAL: {
            bind: 'set-type-modal-event'
          },
          [prefix + '_SET_TITLE_ICON_MODAL']: {
            bind: 'set-title-icon-modal-event'
          },
          [prefix + '_SET_TITLE_TEXT_MODAL']: {
            bind: 'set-title-text-modal-event'
          },
          [prefix + '_SET_BODY_TEXT_MODAL']: {
            bind: 'set-body-text-modal-event'
          },
          [prefix + '_SET_BUTTON_TEXT_MODAL']: {
            bind: 'set-button-text-modal-event'
          },
          [prefix + '_SET_LINK_TEXT_MODAL']: {
            bind: 'set-link-text-modal-event'
          },
          [prefix + '_OPEN_MODAL']: {
            bind: 'open-modal-event'
          },
          [prefix + '_PREVIOUSLY_ACCEPTED']: {
            bind: 'set-previously-accepted-event',
            analytics: pageAnalytics._advancedFootprint('solicitud respondida', false)
          },
          [prefix + '_PREVIOUSLY_REJECTED']: {
            bind: 'set-previously-rejected-event',
            analytics: pageAnalytics._advancedFootprint('solicitud respondida', false)
          },
          [prefix + '_RESET_NOTICE_DETAIL']: {
            bind: 'close-direct-domiciliation-notice-detail'
          },
          global_backstep_channel: {
            bind: 'close-direct-domiciliation-notice-detail',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          global_alert_manager_open_with_settings: {
            bind: 'response-sending-modal-cdc-event'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisBusinessCryptography = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-cryptography',
    properties: {
      host,
      accountsApiVersion: businessCryptography,
      native: !!native,
      requiredToken,
      requiresTsec: true,
      cellsConnections: {
        in: {
          domiciliation_notice_detail_account_manager_post_crypto_documents: {
            bind: 'postCryptoDocuments'
          }
        },
        out: {
          domiciliation_notice_detail_post_success_response: {
            bind: 'post-crypto-documents'
          }
        }
      }
    }
  };
  const dataProviderPayments = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-payments',
    familyPath: '@glomo-web-components/bbva-dataprovider-payments',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      version: CONFIG.globalServices.versions.paymentsV1,
      cellsConnections: {
        in: {
          [prefix + '_REQUEST_COLLECTION_ALERT_PATCH']: {
            bind: 'collectionAlertPatch'
          },
          [prefix + '_COLLECTION_ALERT_PATCH_V1_SUCCESS']: {
            bind: 'getLastResponseHeadersAlertPatch'
          }
        },
        out: {
          [prefix + '_COLLECTION_ALERT_PATCH_V1_SUCCESS']: {
            bind: 'collection-alert-patch-v1-success'
          },
          [prefix + '_COLLECTION_ALERT_PATCH_V1_ERROR']: {
            bind: 'collection-alert-patch-v1-error'
          },
          [prefix + '_GET_LAST_RESPONSE_HEADERS_ALERT_PATCH_V1']: {
            bind: 'get-last-response-headers-alert-patch-v1'
          },
          [prefix + '_API_DM_ERROR_RESPONSE']: {
            bind: 'api-dm-response-error'
          }
        }
      }
    }
  };
  const base = {
    hash: 'mx-domiciliation-notice-detail',
    currentPage: {
      url: '/' + pageName
    },
    pages,
    template: template,
    components: [
      spinner(CONFIG),
      manager,
      cellsDmGlobalApisBusinessCryptography,
      dataProviderPayments,
      header,
      tittleDescription,
      amountDescription,
      accountDescription,
      divFooterContainer,
      rejectedButton,
      acceptedButton,
      serviceProviderDescription,
      referenceDescription,
      adviceDescription,
      adviceConfirmation,
      helpModal
    ]
  };
  return base;
};