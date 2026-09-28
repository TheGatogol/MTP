'use strict';
module.exports = config => {
  const _page = require('./common/_pages');
  const pageName = 'upgradeAccountReviewN2N4';
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { customersV1: customersApiVersion} },
    native = false, nativeIos = false
  } = config;
  const {
    SPINNER: spinner, headerHeight, footerHeight
  } = require('./common/helpers/_utils');
  const pages = _page(config)(pageName);
  const ANALYTICS = require('./analytics/_upgradeAccountCustomer')(config);
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      className: nativeIos ? 'ios-top-padding' : '',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      drawerWidth: '100%',
      extraHeaderClass: 'bbva-core-blue',
      fixOffsetScroll: 0,
      footerHeight,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      headerHeight
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
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
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_INIT_CHANNEL']: {
            bind: 'init-page',
            analytics: ANALYTICS.APP_COMPLETED_UNDER_REVIEW
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
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'upgrade-account-n2-n4-review-header-text',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      continue: 'dashboard',
      cellsConnections: {
        out: {
          VALIDATE_NEXT_PAGE: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };
  const successfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      withoutHead: true,
      hideDivider: true,
      cellsConnections: {
        in: {
          UPGRADE_ACCOUNT_OPEN_REVIEW: {
            bind: 'result'
          }
        },
        out: {
          VALIDATE_NEXT_PAGE: {
            bind: 'go-to-next'
          }
        }
      }
    }
  };
  const bbvaHelpModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          DM_HELP_MODAL_BUTTON_TEXT: {
            bind: 'buttonText'
          },
          DM_HELP_MODAL_LINK_TEXT: {
            bind: 'linkText'
          },
          DM_HELP_MODAL_ICON: {
            bind: 'titleIcon'
          },
          DM_HELP_MODAL_TITLE_TEXT: {
            bind: 'titleText'
          },
          DM_HELP_MODAL_BODY_TEXT: {
            bind: 'bodyText'
          },
          DM_OPEN_HELP_MODAL: {
            bind: 'open'
          }
        },
        out: {
          DM_LINK_TERMS_CLICKED: {
            bind: 'help-modal-footer-link-click'
          },
          DM_BUTTON_CONTINUE_CLICKED: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    }
  };
  const bbvaManagerUpgrade = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-upgrade-beneficiaries',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-manager-payroll-portability-profile',
    properties: {
      cellsConnections: {
        in: {
          VALIDATE_NEXT_PAGE: {
            bind: 'checkUpgrade'
          },
          UPGRADE_ACCOUNT_OPEN_REVIEW: {
            bind: 'setupUpgrade'
          },
          DM_LINK_TERMS_CLICKED: {
            bind: 'reponsePostTermsSuccess'
          },
          DM_BUTTON_CONTINUE_CLICKED: {
            bind: 'addBeneficiaries'
          },
          DM_POST_TERMS_SUCCESS: {
            bind: 'reponsePostTermsSuccess'
          },
          upgrade_principal_account_get_participants_success: {
            bind: 'successAccountParticipants'
          },
          upgrade_principal_account_get_participants_error: {
            bind: 'errorOnGetParticipants'
          }
        },
        out: {
          DM_HELP_MODAL_BUTTON_TEXT: {
            bind: 'send-modal-update-button-text'
          },
          DM_HELP_MODAL_LINK_TEXT: {
            bind: 'send-modal-update-link-text'
          },
          DM_HELP_MODAL_ICON: {
            bind: 'send-modal-update-title-icon'
          },
          DM_HELP_MODAL_TITLE_TEXT: {
            bind: 'send-modal-update-title-text'
          },
          DM_HELP_MODAL_BODY_TEXT: {
            bind: 'send-modal-update-body-text'
          },
          DM_OPEN_HELP_MODAL: {
            bind: 'open-modal-upgrade'
          },
          DM_REQUEST_POST_TERMS: {
            bind: 'request-post-terms'
          },
          DM_REQUEST_SET_CUSTOMER: {
            bind: 'set-customer-terms-id'
          },
          UPGRADE_SET_ACCOUNT_ID: {
            bind: 'set-accountId'
          },
          REQUEST_LIST_PARTICIPANTS_SERVICE: {
            bind: 'request-service-list-participants'
          },
          UPGRADE_NAVIGATE_TO_RECIPIENT_INIT_PAGE: {
            bind: 'glomo-customer-upgrade-edit-recipient-button-click'
          },
          dashboard_refresh_financial_overview: {
            bind: 'go-dashbord',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const glomoNavigationHanlder = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'back-to-dashboard',
      cellsConnections: {
        in: {
          UPGRADE_NAVIGATE_TO_RECIPIENT_INIT_PAGE: {
            bind: 'navigateToPage'
          }
        },
        out: {
          UPGRADE_NAVIGATE_TO_RECIPIENT_INIT_HANDLER: {
            bind: 'navigation-to-recipientsInit',
            link: {
              page: 'recipientsInit'
            }
          }
        }
      }
    }
  };
  const cellsDmGlobalApisAccounts = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts-bgadpmock',
    properties: {
      host,
      requiredToken,
      headers: { 'Accept-Language': 'es' },
      native,
      cellsConnections: {
        in: {
          UPGRADE_SET_ACCOUNT_ID: {
            bind: 'accountId'
          },
          REQUEST_LIST_PARTICIPANTS_SERVICE: {
            bind: 'getAccountParticipants'
          }
        },
        out: {
          upgrade_principal_account_get_participants_success: {
            bind: 'set-account-participants'
          },
          upgrade_principal_account_get_participants_error: {
            bind: 'error-on-get-participants'
          }
        }
      }
    }
  };
  const apiPostTerms = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host,
      customersApiVersion,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          DM_REQUEST_SET_CUSTOMER: {
            bind: 'customerId'
          },
          DM_REQUEST_POST_TERMS: {
            bind: 'postCustomerTerms'
          }
        },
        out: {
          DM_POST_TERMS_SUCCESS: {
            bind: 'post-customer-terms'
          },
          DM_POST_TERMS_ERROR: {
            bind: 'error-on-post-customer-terms'
          }
        },
        params: {
          customerId: 'customerId'
        }
      }
    }
  };
  const base = {
    hash: 'upgrade-account-review-n2-n4',
    currentPage: {
      url: '/upgrade-account-review-n2-n4'
    },
    pages,
    template,
    components: [
      spinner(config),
      lifeCycle,
      header,
      successfulResponse,
      bbvaHelpModal,
      bbvaManagerUpgrade,
      apiPostTerms,
      cellsDmGlobalApisAccounts,
      glomoNavigationHanlder
    ]
  };
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', 'upgradeAccountReviewN2N4', ['post-customer-terms', 'error-on-post-customer-terms']);
  return base;
};
