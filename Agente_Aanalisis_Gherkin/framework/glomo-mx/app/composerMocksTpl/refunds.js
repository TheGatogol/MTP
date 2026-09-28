/* eslint-disable new-cap */
'use strict';

module.exports = (config) => {
  const UTILS = require('./common/helpers/_utils');
  const PAGE = require('./common/_pages');
  const { useNames, createPrefixFromPageName } = UTILS;
  const PAGE_NAME = 'refunds';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const REFUNDS = PAGE(config)(PAGE_NAME);
  const SPINNER = UTILS.SPINNER(config, PAGE_NAME);
  const HOST = config.globalServices.host;
  const IS_NATIVE_IOS = config.nativeIos || false;
  const LANGUAGE = UTILS.getLanguage(config);
  const LOCAL_CURRENCY = UTILS.getLocalCurrency(config);
  const VISIBLE_CHARS = UTILS.getVisibleChars(config);
  const ANALYTICS = require('./analytics/_refunds')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      language: LANGUAGE,
      localCurrency: LOCAL_CURRENCY,
      native: !!config.native,
      className: IS_NATIVE_IOS  ? 'ios-top-padding' : '',
      iOSFixedHeader: IS_NATIVE_IOS,
      cellsConnections: {
        in: {
          custom_refounds_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          custom_refounds_alert_manager_reset_selected_config: {
            bind: 'refreshRenderWithProperty'
          },
          transfers_refunds_modal_info_accept: {
            bind: 'reset'
          }
        },
        out: {
          transfers_refunds_warning_exit_modal_accept: {
            bind: 'alert-warning-exit-refund-spei-accept'
          },
          transfers_refunds_modal_info_accept: {
            bind: 'alert-info-refund-spei-accept'
          },
          transfers_refunds_modal_info_cancel_offer: {
            bind: 'alert-info-refund-spei-cancel',
            backStep: true
          },
          transfers_refunds_modal_info_cancel: {
            bind: 'alert-info-error-refund-spei-cancel',
            backStep: true
          },
          transfers_refunds_modal_info_cancel_accept: {
            bind: 'alert-info-error-refund-spei-accept',
            backStep: true
          }
        }
      }
    }
  };

  const TEMPLATE = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      delayScrollTop: 500,
      animationType: 'verticalUp',
      headerHeight: UTILS.headerHeight,
      headerFixed: true,
      className: `bg-core-blue ${IS_NATIVE_IOS ? ' ios-top-padding header-fixed' : ''}`,
      iOSFixedHeader: true,
      cellsConnections: {
        in: {
          [getChannelName('SHOW_CONFIRM_CHANNEL')]: {
            bind: 'showConfirm'
          }
        }
      }
    },
    propertiesSpherica: {
      componentName: 'glomo-opx-template-spherica',
      type: 'modal'
    }
  };

  const LIFE_CYCLE = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: config.globalServices.requiredToken || 'tsec',
      private: false,
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
          [getChannelName('INIT_PAGE')]: {
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

  const HEADER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      id: 'header-refunds',
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      titleName: 'transfer-refunds-spei-main-title',
      cellsConnections: {
        out: {
          [getChannelName('BACK_BUTTON_REFUNDS')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      variant: 'primary',
      rightIconText: 'transfer-refunds-spei-header-close-spherica'
    }
  };

  const HANDLER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigation-to-product-detail',
      cellsConnections: {
        in: {
          [getChannelName('BACK_BUTTON_REFUNDS')]: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('EXIT_CONFIRM')]: {
            bind: 'navigation-to-product-detail'
          }
        }
      }
    }
  };

  const DM_REFUNDS = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'glomo-refund-transfer-manager-mx',
    familyPath: 'glomo-refund-transfer-manager',
    properties: {
      refundModalInfoImage: './images/Info.svg',
      successResponseRefundAvatar: './images/icon_card.svg',
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_account_set_account_for_operations: {
            bind: 'accountInformation'
          },
          navigation_to_refunds: {
            bind: 'refundData'
          },
          [getChannelName('INIT_PAGE')]: {
            bind: 'init'
          },
          transfers_refunds_modal_info_accept: {
            bind: 'sendParamsToMultistep'
          },
          [getChannelName('INITIAL_TRANSFERS_REFUNDS')]: {
            bind: 'requestRefundservice'
          },
          [getChannelName('GET_OTP')]: {
            bind: 'errorResponseRefund'
          },
          REFUNDS_RESPONSE_SUCCESS: {
            bind: 'successResponseRefund'
          },
          [getChannelName('EXIT_CONFIRM')]: {
            bind: 'warningExitModal'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          transfers_refunds_warning_exit_modal_accept: {
            bind: 'reset'
          }
        },
        out: {
          insufficient_balances_modal_body_text: {
            bind: 'insufficient-balances-text'
          },
          open_insufficeint_balances_modal_spherica: {
            bind: 'insufficient-balances-open'
          },
          global_alert_modal_close: {
            bind: 'close-modal'
          },
          global_alert_manager_open_with_settings: {
            bind: 'show-modal-refunds-info'
          },
          [getChannelName('FILL_STEP_1_SELECTED')]: {
            bind: 'fill-selected-to-step-1'
          },
          [getChannelName('FILL_STEP_2_RECIPIENT_SELECTED')]: {
            bind: 'fill-recipient-selected-to-step-2'
          },
          [getChannelName('FILL_STEP_3_AMOUNT')]: {
            bind: 'fill-amount-to-step-3'
          },
          [getChannelName('FILL_STEP_3_CURRENCY')]: {
            bind: 'fill-currency-to-step-3'
          },
          [getChannelName('FILL_STEP_4_REFERENCE')]: {
            bind: 'fill-reference-to-step-4'
          },
          [getChannelName('FILL_STEP_4_CONCEPT')]: {
            bind: 'fill-concept-to-step-4'
          },
          [getChannelName('FILL_OPERATION_SUMMARY')]: {
            bind: 'fill-operation-summary'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          GO_TO_SECCESSFUL_REFUNDS_RESPONSE: {
            bind: 'successful-response-to-review',
            link: {
              page: 'refundsReview'
            }
          },
          [getChannelName('PARAMS_REFUNDS')]: {
            bind: 'params-refunds'
          },
          [getChannelName('BODY_REFUNDS')]: {
            bind: 'body-refunds'
          },
          global_generic_error: {
            bind: 'error-response-refund',
            analytics: ANALYTICS.PAGE_VIEW_ERROR('error comunicacion interrumpida'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          },
          [getChannelName('LAUNCH_WARNING_ANALYTIC_INFO')]: {
            bind: 'launch-warning-analytic-info',
            analytics: ANALYTICS.PAGE_VIEW_WARNING('modal salir'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          },
          [getChannelName('LAUNCH_ERROR_ANALYTIC_INFO')]: {
            bind: 'launch-error-analytic-info',
            analytics: ANALYTICS.PAGE_VIEW_ERROR('error saldo insuficiente'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          },
          [getChannelName('SHOW_CONFIRM_CHANNEL')]: {
            bind: 'show-confirm-zone'
          },
          [getChannelName('EXIT_CHANNEL')]: {
            bind: 'exit-refunds',
            backStep: true
          },
          REFUNDS_COLLAPSED_AMOUNT_STEP: {
            bind: 'collapsed-amount-step'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            custom_refounds_alert_manager_open_with_settings_spherica: {
              bind: 'show-modal-refunds-info'
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

  const STEP1 = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: 'refunds-origin',
      className: 'cells-background-blue',
      changeLabel: '',
      firstStep: true,
      currentStep: 1,
      maxSteps: 4,
      stepTitle: 'transfer-refunds-spei-step-product-selector-title',
      collapsed: true,
      previous: true,
      scrolled: true,
      localCurrency: LOCAL_CURRENCY,
      active: true,
      visibleChars: VISIBLE_CHARS,
      disableSeparation: false,
      showSeparator: true,
      cellsConnections: {
        in: {
          [getChannelName('FILL_STEP_1_SELECTED')]: {
            bind: 'selected'
          },
          [getChannelName('EXIT_CHANNEL')]: {
            bind: 'reset'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'transfer-refunds-spei-step-product-selector-title-spherica',
      primaryAmountClass: 'currency-spaced-large',
      isLongAmount: true,
      amountClass: 'stack'
    }
  };

  const STEP2 = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-recipient-selector',
    tagSpherica: 'cells-step-recipient-selector-spherica',
    properties: {
      id: 'refunds-destination',
      currentStep: 2,
      maxSteps: 4,
      stepTitle: 'transfer-refunds-spei-step-recipient-selector-title',
      changeLabel: '',
      active: true,
      collapsed: true,
      previous: true,
      className: 'cells-background-blue',
      cellsConnections: {
        in: {
          [getChannelName('FILL_STEP_2_RECIPIENT_SELECTED')]: {
            bind: 'recipientSelected'
          },
          [getChannelName('EXIT_CHANNEL')]: {
            bind: 'reset'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      stepTitle: 'transfer-refunds-spei-step-recipient-selector-title-spherica',
      stepTitleStyleSpherica: true
    }
  };

  const STEP3 = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-enter-amount',
    tagSpherica: 'cells-step-enter-amount-spherica',
    properties: {
      id: 'refunds-amount',
      currentStep: 3,
      maxSteps: 4,
      stepTitle: 'transfer-refunds-spei-step-enter-amount-title',
      changeLabel: '',
      active: true,
      collapsed: true,
      previous: true,
      className: 'cells-background-blue',
      currency: LOCAL_CURRENCY,
      language: LANGUAGE,
      cellsConnections: {
        in: {
          [getChannelName('FILL_STEP_3_AMOUNT')]: {
            bind: 'value'
          },
          [getChannelName('FILL_STEP_3_CURRENCY')]: {
            bind: 'localCurrency'
          },
          [getChannelName('EXIT_CHANNEL')]: {
            bind: 'reset'
          },
          REFUNDS_COLLAPSED_AMOUNT_STEP: {
            bind: 'collapsed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'padding-bottom-filled-add',
      classSelectorKey: true,
      amountExtraClass: 'currency-xxl',
      keyValueClass: 'value-book',
      stepTitle: 'transfer-refunds-spei-step-enter-amount-title-spherica',
      stepTitleStyleSpherica: true
    }
  };

  const STEP4 = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-concept',
    tagSpherica: 'cells-step-concept-spherica',
    properties: {
      id: 'refunds-concept',
      currentStep: 4,
      maxSteps: 4,
      lastStep: true,
      title: 'transfer-refunds-spei-step-enter-concept-title',
      disableChange: true,
      referenceClass: 'space',
      referenceName: 'Referencia',
      showConceptLabel: true,
      fixed: true,
      conceptLabel: 'transfer-refunds-spei-success-additional-info-concept-key',
      conceptClass: 'concept-in-line',
      cellsConnections: {
        in: {
          [getChannelName('FILL_STEP_4_REFERENCE')]: {
            bind: 'externalReference'
          },
          [getChannelName('FILL_STEP_4_CONCEPT')]: {
            bind: 'setConcept'
          },
          [getChannelName('SHOW_CONFIRM_CHANNEL')]: {
            bind: 'showReference'
          },
          [getChannelName('EXIT_CHANNEL')]: {
            bind: 'reset'
          }
        }
      }
    },
    propertiesSpherica: {
      title: 'transfer-refunds-spei-step-enter-concept-title-spherica',
      referenceClass: 'space label-light',
      labelClass: 'label-light',
      subtitleClass: 'label-light',
      className: 'additional-margin-before-sticky padding-bottom-filled-add',
      conceptClass: 'concept-in-line with-info-message',
      stepTitleStyleSpherica: true
    }
  };

  const SUMMARY = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-operation-summary',
    tagSpherica: 'cells-operation-summary-spherica',
    properties: {
      id: 'refunds-summary',
      className: 'comission-text comission-amount-spacing',
      showAddition: true,
      summaryViewTitle: 'transfer-refunds-spei-sumary-view-title',
      localCurrency: LOCAL_CURRENCY,
      summaryViewClass: 'normal-font',
      buttonLabel: 'transfer-refunds-spei-modal-warning-cancel-btn-label',
      cellsConnections: {
        in: {
          [getChannelName('FILL_OPERATION_SUMMARY')]: {
            bind: 'operation'
          },
          [getChannelName('EXIT_CHANNEL')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('INITIAL_TRANSFERS_REFUNDS')]: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      summaryViewTitle: 'transfer-refunds-spei-sumary-view-title-spherica',
      buttonLabel: 'transfer-refunds-spei-confirm-btn-label',
      managmentFeesMessage: 'codicel-commission'
    }
  };

  const ANALITYCS = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-refund-transfer-manager-mx',
    familyPath: 'glomo-refund-transfer-manager',
    properties: {
      cellsConnections: {
        in: {
          global_account_set_account_for_operations: {
            bind: 'accountInformation'
          },
          navigation_to_refunds: {
            bind: 'refundData'
          },
          transfers_refunds_modal_info_accept: {
            bind: 'appStarted'
          },
          [getChannelName('ANALYTICS_APP_STARTED')]: {
            bind: 'appStep2'
          },
          signature_handle_required_first_step: {
            bind: 'appStep3'
          },
          REFUNDS_RESPONSE_SUCCESS: {
            bind: 'serviceResponse'
          },
          transfers_refunds_modal_info_cancel_offer: {
            bind: 'internalLink'
          },
          transfers_refunds_modal_info_cancel: {
            bind: 'internalLink'
          },
          [getChannelName('INIT_PAGE')]: {
            bind: 'initAnalytics'
          }
        },
        out: {
          [getChannelName('INIT_ANALYTICS-INFO')]: {
            bind: 'init-analytics-info',
            analytics: ANALYTICS.APP_PAGE_VISIT('1 informacion'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          },
          [getChannelName('ANALYTICS_APP_STARTED')]: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STEP('2', 'importe'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          },
          [getChannelName('ANALYTICS_APP_STEP_2')]: {
            bind: 'analytics-app-step2',
            analytics: ANALYTICS.APP_STARTED('1 informacion'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          },
          [getChannelName('ANALYTICS_APP_STEP_3')]: {
            bind: 'analytics-app-step3',
            analytics: ANALYTICS.APP_STEP('3', 'otp'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          },
          [getChannelName('ANALYTICS_INTERNAL_LINK')]: {
            bind: 'analytics-internal-link',
            analytics: ANALYTICS.INTERNAL_LINK('cancelar', '1 informacion'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          }
        }
      }
    }
  };

  const DM_API_REFUNDS = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-dataprovider-transfers',
    tag: 'bbva-dataprovider-transfers',
    render: 'litElement',
    properties: {
      version: 0,
      host: HOST,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      native: !!config.native,
      otpId: PAGE_NAME,
      localCurrency: LOCAL_CURRENCY,
      requiredOTP: true,
      language: LANGUAGE,
      cellsConnections: {
        in: {
          [getChannelName('PARAMS_REFUNDS')]: {
            bind: 'params'
          },
          [getChannelName('BODY_REFUNDS')]: {
            bind: 'postInterbankTransferRefunds'
          }
        },
        out: {
          [getChannelName('GET_OTP')]: {
            bind: 'error-on-post-refund'
          },
          REFUNDS_RESPONSE_SUCCESS: {
            bind: 'success-on-post-refund'
          }
        }
      }
    }
  };

  const INSUFFICIENT_BALANCE_MODAL_ERROR = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'bbva-help-modal-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      fullHeight: true,
      iOSFixedHeader: IS_NATIVE_IOS,
      modalType: 'error',
      headerText: 'transfer-refunds-spei-modal-error-spherica',
      titleText: 'transfer-refunds-spei-modal-error-spherica',
      titleIcon: 'spherica:warning',
      buttonText: 'transfer-refunds-spei-modal-error-accept-btn-label',
      fixedFooter: true,
      headerRightButtons: [
        {
          id: 'btn-close',
          name: 'Close',
          icon: 'spherica:close',
          accessibilityText: 'transfer-refunds-spei-header-close-spherica',
          label: 'transfer-refunds-spei-header-close-spherica',
          defaultEventIconName: 'header-main-close-icon-click'
        }
      ],
      cellsConnections: {
        in: {
          insufficient_balances_modal_body_text: {
            bind: 'bodyText'
          },
          open_insufficeint_balances_modal_spherica: {
            bind: 'open'
          }
        },
        out: {
          insuficcient_balances_modal_accept: {
            bind: 'help-modal-close',
            backStep: true
          }
        }
      }
    }
  };

  const BASE = {
    hash: 'refunds',
    currentPage: {
      url: '/refunds'
    },
    pages: REFUNDS,
    template: TEMPLATE,
    components: [
      SPINNER,
      LIFE_CYCLE,
      HEADER,
      HANDLER,
      DM_REFUNDS,
      STEP1,
      STEP2,
      STEP3,
      STEP4,
      SUMMARY,
      DM_API_REFUNDS,
      INSUFFICIENT_BALANCE_MODAL_ERROR,
      ANALITYCS
    ]
  };

  const signConnector = require('./common/_sign-connector')(config)(BASE);
  signConnector('bbva-dataprovider-transfers', PAGE_NAME, ['success-on-post-refund', 'error-on-post-refund']);

  if (isSpherica) {
    BASE.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(BASE);
};
