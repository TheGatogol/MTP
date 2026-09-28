/* eslint-disable no-shadow, no-undef */
'use strict';

const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');

const { useNames, createPrefixFromPageName } = utils;
const PAGE_NAME = 'codicelPeerToPeerTransferReview';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
const localStorageApp = require('./common/_local-storage');

module.exports = (config) => {
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const codicelReviewPage = page(config)(PAGE_NAME);
  const localCurrency = utils.getLocalCurrency(config);
  const language = utils.getLanguage(config);

  const isNativeiOS = !!config.nativeIos;

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      className: isNativeiOS ? 'ios-top-padding' : '',
      extraHeaderClass: 'darker-green-bg',
      animationType: 'verticalUp',
      disableScrollLock: true,
      hasFooter: false,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: 'darker-green-bg'
    }
  };

  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      private: true,
      tokenName: config.globalServices.requiredToken || 'tsec',
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
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          app_error_access_token: {
            bind: 'access-token-error'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
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
      className: 'header--dark-success',
      titleName: 'codicel-peer-to-peer-send-header-title',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      cellsConnections: {
        out: {
          [getChannelName('exit_codicel_review')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      variant: 'primary',
      rightIconText: 'cells-molecule-header-coronita-close-aria-label'
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'codicel-success-transaction-back-close-page',
      cellsConnections: {
        in: {
          [getChannelName('go_back_codicel_review')]: {
            bind: 'goBack'
          },
          blue_transfers_set_dimo_back_action: {
            bind: 'backAction'
          }
        },
        out: {
          [getChannelName('CLOSE_PAGE')]: {
            bind: 'codicel-success-transaction-back-close-page',
            link: {
              page: 'dashboard',
              params: {
                cleanUntil: 'codicelPeerToPeerTransferReview'
              }
            }
          },
          success_dimo_transfer_return: {
            bind: 'codicel-back-to-blue',
            link: {
              page: 'digitalButler',
              cleanUntil: 'digitalButler'
            }
          }
        }
      }
    }
  };

  const successfulResponse = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    type: 'UI',
    properties: {
      className: 'mobile-transfer-p2p',
      formatDate: 'DD MMMM YYYY, HH:mm [h]',
      language: language,
      localCurrency: localCurrency,
      operative: 'codicelPeerToPeerSend',
      animateFromTo: true,
      operationsListLayout: 'review',
      maskedMessageVisibleChars: true,
      unmasked: false,
      visibleChars: 4,
      page: 'codicel-peer-to-peer-transfer-review',
      cellsConnections: {
        out: {
          [getChannelName('share_receipt')]: {
            bind: 'share-receipt-capture'
          },
          [getChannelName('exit_codicel_review')]: {
            bind: 'go-to-next'
          },
          [getChannelName('on_tracking_link_click')]: {
            bind: 'on-click-message-secondary'
          }
        },
        params: {
          result: 'mobileTransferP2PResult'
        }
      }
    },
    propertiesSpherica: {
      operationListClass: 'centered-items',
      disableButtons: true
    }
  };

  const shareOperativeReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: language,
      dateFormat: 'DD MMMM YYYY',
      localCurrency: localCurrency,
      sharedReceiptStyles: {
        receiptTitle: {
          'color': '#004481',
          'font-weight': 'bold'
        }
      },
      cellsConnections: {
        in: {
          codicel_peer_to_peer_send_receipt_content_share: {
            bind: 'result'
          },
          [getChannelName('init_page')]: {
            bind: 'reset'
          },
          [getChannelName('share_receipt')]: {
            bind: 'captureReceipt'
          }
        },
        out: {
          [getChannelName('receipt_captured')]: {
            bind: 'receipt-captured'
          }
        }
      }
    }
  };

  const images = {
    error: './images/errors/error.svg'
  };

  const glomoOpxP2P = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-peer-to-peer-mx-dm',
    familyPath: 'glomo-opx-peer-to-peer-dm',
    properties: {
      images: images,
      agreeConsentOpenWebFlag: false,
      cellsConnections: {
        in: {
          codicel_set_primary_link: {
            bind: 'primaryExternalLink'
          },
          [getChannelName('receipt_captured')]: {
            bind: 'shareReceipt'
          },
          [getChannelName('on_tracking_link_click')]: {
            bind: 'manageLinkExternalLogout'
          },
          TRANSFER_SUCCESS_LINK_EXTERNAL: {
            bind: 'logoutAndNavigateBanxicoCEP'
          },
          [getChannelName('init_page')]: {
            bind: 'requestFirstExit'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'validateExitReview'
          },
          [getChannelName('exit_codicel_review')]: {
            bind: 'validateExitReview'
          },
          global_storage_get_isFirstExit_success: {
            bind: 'isFirstExitSuccess'
          },
          global_storage_get_isFirstExit_error: {
            bind: 'isFirstExitError'
          },
          global_storage_get_codicel_entrypoint_error: {
            bind: 'handleCodicelEntrypoint'
          },
          global_storage_get_codicel_entrypoint_success: {
            bind: 'handleCodicelEntrypoint'
          },
          global_account_set_feature_flags: {
            bind: 'featureFlagCollection'
          },
          codicel_peer_to_peer_send_redirection_review_to_expenses_group: {
            bind: 'changeRedirectionToExpenses'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codicel'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codicel'
          },
          [getChannelName('open_share_image')]: {
            bind: 'codicel-share-receipt'
          },
          navigation_transfer_review_to_codicel_agree_and_remove_consent: {
            bind: 'navigate-to-agree-consent',
            link: {
              page: 'codicelAgreeAndRemoveConsent',
              params: {
                isVinculated: false
              }
            }
          },
          [getChannelName('go_back_codicel_review')]: {
            bind: 'transfer-review-go-back'
          },
          global_confirm_logout_message_spherica: {
            bind: 'dashboard-native-logout-confirm'
          },
          global_action_launcher_uri: {
            bind: 'logout-and-go-to-banxico'
          },
          navigate_dimo_success_to_expenses: {
            bind: 'transfer-review-go-expenses',
            link: {
              page: 'expensesGroup',
              cleanUntil: 'expensesGroup'
            }
          }
        }
      }
    }
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_confirm_logout_message_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          TRANSFER_SUCCESS_LINK_EXTERNAL: {
            bind: 'logoutAndNavigateBanxicoCEP'
          }
        }
      }
    }
  };

  const actionLauncher = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_share_image')]: {
            bind: 'shareImage'
          }
        },
        out: {
          global_generic_error: {
            bind: 'error-share-image'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mx-codicel-peer-to-peer-transfer-review',
    currentPage: {
      url: '/codicel-peer-to-peer-transfer-review'
    },
    pages: codicelReviewPage,
    template,
    components: [
      handleLifeCycle,
      header,
      navigationHandler,
      successfulResponse,
      shareOperativeReceipt,
      glomoOpxP2P
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, ['isFirstExit',
    'codicel_entrypoint'], config);

  if (config.native) {
    base.components.push(actionLauncher);
  }

  if (config.mockNative && base.components) {
    base.components.push(MOCK_NATIVE);
  }
  return sphericaPageUtils.spherize(base);
};
