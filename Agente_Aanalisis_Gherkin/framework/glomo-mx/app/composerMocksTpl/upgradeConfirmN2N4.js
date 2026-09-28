'use strict';
module.exports = (config) => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: {customersV1: customersApiVersion} },
    native = false,
    nativeIos = false
  } = config;
  const pageName = 'upgradeConfirmN2N4';
  const ANALYTICS_UPGRADE_COMFIRM = require('./analytics/_upgradeConfirmN2N4')();
  const {
    SPINNER: spinner
  } = require('./common/helpers/_utils');
  const base = {
    hash: pageName,
    currentPage: {
      url: '/upgrade-confirm-N2-page'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerHeight: 0,
        className: 'dark-blue-bg',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      spinner(config),
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: requiredToken,
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
              [pageName + '_init_page']: {
                bind: 'init-page'
              }
            },
            global_enable_menu_swipe: {
              bind: 'swipe-menu-enabled',
              'forward-to-native': true
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-header-main',
        familyPath: '@bbva-web-components/bbva-header-main',
        render: 'litElement',
        properties: {
          id: 'headerConfirmUpgrade',
          text: 'upgrade-account-n2-n3-confirm-heading',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            in: {
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              }
            },
            out: {
              HELP_MODAL_EXIT: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-panel-info',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        properties: {
          id: 'panelConfirmUpgrade',
          cellsConnections: {
            in: {
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              },
              [pageName + '_PANEL_MICROILUSTRATION']: {
                bind: 'microillustration'
              },
              [pageName + '_PANEL_HEADING']: {
                bind: 'heading'
              },
              [pageName + '_PANEL_TEXT']: {
                bind: 'text'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-link',
        familyPath: '@bbva-web-components/bbva-link',
        render: 'litElement',
        properties: {
          id: 'linkConfirmUpgrade',
          className: 'u-margin--1',
          icon: 'bbva:privacyanddata',
          cellsConnections: {
            in: {
              [pageName + 'UPDATE_ACCOUNT_LINK']: {
                bind: 'text'
              }
            },
            out: {
              [pageName + 'LINK_PRIVACY_ANALITYC']: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-form-checkbox',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-form-checkbox',
        properties: {
          id: 'firstCheckboxConfirm',
          className: 'u-margin--1',
          required: true,
          name: 'choice13',
          value: '13',
          cellsConnections: {
            in: {
              [pageName + 'CHECKBOX_DATA_TREATMENT_LABEL']: {
                bind: 'label'
              },
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              }
            },
            out: {
              [pageName + 'ACCEPT_DATA_TREATMENT']: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-form-checkbox',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-form-checkbox',
        properties: {
          id: 'secondCheckboxConfirm',
          className: 'u-margin--1',
          required: true,
          name: 'choice13',
          value: '13',
          cellsConnections: {
            in: {
              [pageName + 'CHECKBOX_ACCEPTED_INFORMATION_LABEL']: {
                bind: 'label'
              },
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              }
            },
            out: {
              [pageName + '_ACCEPT_INFORMATION']: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-form-checkbox',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-form-checkbox',
        properties: {
          id: 'thirdCheckboxConfirm',
          className: 'u-margin--1',
          required: true,
          name: 'choice13',
          value: '13',
          cellsConnections: {
            in: {
              [pageName + 'CHECKBOX_LABEL_INFORMATION']: {
                bind: 'label'
              },
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              }
            },
            out: {
              [pageName + '_ACCEPTED_UPGRADE']: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-button-default',
        familyPath: '@bbva-web-components/bbva-button-default',
        render: 'litElement',
        properties: {
          id: 'confirmUpgradeAccount',
          variant: 'primary',
          text: 'upgrade-account-start-button',
          className: 'u-display--table u-margin--center',
          disabled: true,
          cellsConnections: {
            in: {
              [pageName + 'VALIDATE_UPDATE_CONFIRM_BUTTON']: {
                bind: 'disabled'
              }
            },
            out: {
              [pageName + 'UPGRADE_ACCOUNT_CONTINUE']: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-upgrade-confirm-level-account',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-payroll-portability-profile',
        properties: {
          cellsConnections: {
            in: {
              SHOW_UPGRADE_MODULAR_CONFIRM: {
                bind: 'setUpgradeModular'
              },
              [pageName + 'ACCEPT_DATA_TREATMENT']: {
                bind: 'checkFirstClick'
              },
              [pageName + '_ACCEPT_INFORMATION']: {
                bind: 'checkSecondClick'
              },
              [pageName + '_ACCEPTED_UPGRADE']: {
                bind: 'checkThirdClick'
              },
              [pageName + 'UPGRADE_ACCOUNT_CONTINUE']: {
                bind: 'requestPostTerms'
              },
              [pageName + 'REQUEST_POST_TERMS_SUCCESS_RESPONSE']: {
                bind: 'successPostTerms'
              },
              [pageName + 'REQUEST_GET_CUSTOMER_SUCCESS']: {
                bind: 'successResponseCustomer'
              },
              DM_BUTTON_CLICKED: {
                bind: 'goBackDashbord'
              },
              [pageName + '_init_page']: {
                bind: 'initialMethod'
              }
            },
            out: {
              [pageName + '_PANEL_MICROILUSTRATION']: {
                bind: 'send-configuration-microilustration'
              },
              [pageName + '_PANEL_HEADING']: {
                bind: 'send-configuration-heading'
              },
              [pageName + '_PANEL_TEXT']: {
                bind: 'send-configuration-text'
              },
              [pageName + 'CHECKBOX_DATA_TREATMENT_LABEL']: {
                bind: 'label-first-checkbox'
              },
              [pageName + 'CHECKBOX_ACCEPTED_INFORMATION_LABEL']: {
                bind: 'label-second-checkbox'
              },
              [pageName + 'CHECKBOX_LABEL_INFORMATION']: {
                bind: 'label-third-checkbox'
              },
              [pageName + 'UPDATE_ACCOUNT_LINK']: {
                bind: 'text-update-link'
              },
              [pageName + 'UPDATE_ACCOUNT_ICON']: {
                bind: 'text-update-icon'
              },
              [pageName + 'VALIDATE_UPDATE_CONFIRM_BUTTON']: {
                bind: 'set-disable-button'
              },
              [pageName + 'MULTISTEP_CONDITIONS_MODAL']: {
                bind: 'modal-data-treatment-link-click'
              },
              [pageName + 'SET_CUSTOMER_ID']: {
                bind: 'set-customer-id'
              },
              [pageName + 'REQUEST_POST_TERMS']: {
                bind: 'request-post-terms'
              },
              UPGRADE_ACCOUNT_OPEN_REVIEW: {
                bind: 'open-upgrade-review-page',
                link: {
                  page: 'upgradeAccountReviewN2N4'
                }
              },
              [pageName + '_MODAL_EXIT_ICON']: {
                bind: 'send-modal-confirm-title-icon'
              },
              [pageName + '_MODAL_EXIT_BUTTON']: {
                bind: 'send-modal-confirm-button-text'
              },
              [pageName + '_MODAL_EXIT_LINK']: {
                bind: 'send-modal-confirm-link-text'
              },
              [pageName + '_MODAL_EXIT_BODY']: {
                bind: 'send-modal-confirm-body-text'
              },
              [pageName + '_BODY_MODAL']: {
                bind: 'send-body-text'
              },
              [pageName + 'UPDATE_CONFIRM_BUTTON_TEXT']: {
                bind: 'send-modal-confirm-button-text'
              },
              [pageName + 'UPDATE_OUT_BUTTON_TEXT']: {
                bind: 'send-modal-out-button'
              },
              [pageName + 'UPDATE_OUT_LINK_TEXT']: {
                bind: 'send-modal-out-link'
              },
              [pageName + 'UPDATE_OUT_BODY_TEXT']: {
                bind: 'send-modal-out-body'
              },
              upgrade_account_n2_n4_in_process_native: {
                bind: 'upgrade-account-n2-n4-in-process',
                'forward-to-native': true
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
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-upgrade-analytics',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-payroll-portability-profile',
        properties: {
          cellsConnections: {
            in: {
              sign_modal_open: {
                bind: 'openOTPModal'
              },
              [pageName + '_init_page']: {
                bind: 'sendConfirmAnalytic'
              },
              DM_BUTTON_CLICKED: {
                bind: 'acceptedUpgrade'
              },
              UPGRADE_ACCOUNT_OPEN_REVIEW: {
                bind: 'sendReviewAnalytic'
              },
              [pageName + 'LINK_PRIVACY_ANALITYC']: {
                bind: 'sendPrivacyAnalytic'
              },
              [pageName + 'UPGRADE_ACCOUNT_CONTINUE']: {
                bind: 'sendContinueAnalytic'
              },
              [pageName + 'ACCEPT_DATA_TREATMENT']: {
                bind: 'sendAcceptDataTreatment'
              },
              [pageName + '_ACCEPT_INFORMATION']: {
                bind: 'sendAcceptInformation'
              },
              [pageName + '_ACCEPTED_UPGRADE']: {
                bind: 'sendAcceptedUpgrade'
              }
            },
            out: {
              [pageName + '_SEND_ANALITYC_OTP']: {
                bind: 'send-analytic-otp',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPageOtp
              },
              [pageName + '_SEND_ANALITYC_INIT']: {
                bind: 'sent-confirm-init-analytic',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPageVisit
              },
              [pageName + '_SEND_ANALITYC_ACCEPTED']: {
                bind: 'send-privacy-analytic',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPagePrivacy
              },
              [pageName + '_SEND_ANALITYC_REVIEW']: {
                bind: 'send-review-analytic',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPageReview
              },
              [pageName + '_SEND_ANALITYC_PRIVACY']: {
                bind: 'send-privacy-analytic',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPageClick('aviso de privacidad')
              },
              [pageName + '_SEND_ANALITYC_CONTINUE']: {
                bind: 'send-continue-analytic',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPageClick('continuar')
              },
              [pageName + '_SEND_ANALITYC_DATA_TREATMENT']: {
                bind: 'send-analityc-accept-data-treatment',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPageClick('aceptar terminos y condiciones')
              },
              [pageName + '_SEND_ANALITYC_ACCEPT_INFORMATION']: {
                bind: 'send-analityc-accept-information',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPageClick('aceptar terminos y condiciones')
              },
              [pageName + '_SEND_ANALITYC_ACCEPT_UPGRADE']: {
                bind: 'send-analityc-accepted-upgrade',
                analytics: ANALYTICS_UPGRADE_COMFIRM.appPageClick('aceptar terminos y condiciones')
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        properties: {
          titleIcon: 'bbva:warning',
          cellsConnections: {
            in: {
              HELP_MODAL_EXIT: {
                bind: 'open'
              },
              DM_LINK_CLICKED: {
                bind: 'close'
              },
              [pageName + 'UPDATE_OUT_BUTTON_TEXT']: {
                bind: 'buttonText'
              },
              [pageName + 'UPDATE_OUT_LINK_TEXT']: {
                bind: 'linkText'
              },
              [pageName + 'UPDATE_OUT_BODY_TEXT']: {
                bind: 'bodyText'
              }
            },
            out: {
              DM_LINK_CLICKED: {
                bind: 'help-modal-footer-link-click'
              },
              DM_BUTTON_CLICKED: {
                bind: 'help-modal-footer-button-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        properties: {
          id: 'privateNotice',
          titleIcon: 'bbva:help',
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal-three-level',
          headerText: 'upgrade-account-n2-n4-confirm-modal-notice-header',
          cellsConnections: {
            in: {
              [pageName + 'LINK_PRIVACY_ANALITYC']: {
                bind: 'open'
              },
              [pageName + 'UPDATE_CONFIRM_BUTTON_TEXT']: {
                bind: 'buttonText'
              }
            }
          }
        }
      },
      {
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
              [pageName + 'SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              [pageName + 'POST_CUSTOMER_AGREEMENTS_TSEC:']: {
                bind: 'headers'
              },
              [pageName + 'REQUEST_POST_TERMS']: {
                bind: 'postCustomerTerms'
              },
              [pageName + '_set_customer_id']: {
                bind: 'customerId'
              },
              [pageName + '_request_get_customer']: {
                bind: 'getCustomerDetail'
              }
            },
            out: {
              [pageName + 'REQUEST_POST_TERMS_SUCCESS_RESPONSE']: {
                bind: 'post-customer-terms'
              },
              [pageName + 'REQUEST_POST_TERMS_ERROR_RESPONSE']: {
                bind: 'error-on-post-customer-terms'
              },
              [pageName + 'REQUEST_GET_CUSTOMER_SUCCESS']: {
                bind: 'set-customer-detail'
              },
              [pageName + 'REQUEST_GET_CUSTOMER_ERROR']: {
                bind: 'error-on-get-customer-detail'
              }
            },
            params: {
              customerId: 'customerId'
            }
          }
        }
      }
    ]
  };
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', pageName, ['post-customer-terms', 'error-on-post-customer-terms']);
  return base;
};
