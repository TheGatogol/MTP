/* eslint-disable no-dupe-keys */
'use strict';

module.exports = CONFIG => {
  const UTILS = require('./common/helpers/_utils');
  const LANGUAGE = UTILS.getLanguage(CONFIG);
  const PAGES = require('./common/_pages')(CONFIG)('transfersSuccess');
  const nativeIos = CONFIG.nativeIos;
  const PRODUCT = 'transfersSuccess';
  const { useNames, createPrefixFromPageName, createSpinner } = UTILS;
  const OPERATIVEPREFIX = createPrefixFromPageName(PRODUCT);
  const [ getChannelName ] = useNames(OPERATIVEPREFIX);
  const LOCAL_CURRENCY = UTILS.getLocalCurrency(CONFIG);
  const FORMAT_LONG_DATE = UTILS.getLongFormatDate(CONFIG);
  const ANALYTICS = require('./analytics/_transfers')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PRODUCT);
  const isSpherica = sphericaPageUtils.isSpherica();
  const cellsSpinnerVeil = createSpinner(CONFIG);
  cellsSpinnerVeil.tagSpherica = 'cells-spinner-veil-spherica';
  cellsSpinnerVeil.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const localStorageApp = require('./common/_local-storage');

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      localCurrency: LOCAL_CURRENCY,
      cellsConnections: {
        in: {
          transfers_success_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          transfersSuccess_SHOW_SPEI_ACCEPT: {
            bind: 'alert-MODAL-SPEI-CLARIFICATION-accept'
          },
          transfersSuccess_SHOW_SPEI_CANCEL: {
            bind: 'alert-MODAL-SPEI-CLARIFICATION-cancel'
          },
          TRANSFER_SUCCESS_LINK_EXTERNAL: {
            bind: 'alert-LOGOUT-accept'
          },
          REDIRECT_TO_LINK_ALERT: {
            bind: 'redirect-to-link'
          }
        }
      }
    }
  };

  const TRANSFERTYPEMX = {
    INTERNAL_TRANSFERS: 'glomo-transfer-generate-equity-analytics-typology-internal-transfer',
    INTERBANK_TRANSFERS: 'glomo-transfer-generate-equity-analytics-typology-interbank-transfer',
    OWN_TRANSFERS: 'glomo-transfer-generate-equity-analytics-typology-own-transfer'
  };
  const OPERATIONS = [
    {
      label: 'Compartir',
      id: 'share',
      icon: 'coronita:share'
    }
  ];

  var base = {
    hash: 'transfersSuccess',
    currentPage: {
      url: '/transfersSuccess',
      params: []
    },
    pages: PAGES,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: nativeIos ? 'darker-green-bg' : '',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: `bg-core-blue header-fixed ${nativeIos ? 'ios-top-padding' : ''}`,
        cellsConnections: {
          in: {
            [PRODUCT + '_SET_RESULT_DETAIL']: {
              bind: 'recalculateHeader'
            },
            [PRODUCT + '_change_ios_header_color']: {
              bind: 'extraHeaderClass'
            }
          },
          out: {
            [PRODUCT + '_scroll_bottom_complete']: {
              bind: 'set-scroll-bottom-event'
            }
          }
        }
      },
      propertiesSpherica: {
        className: `bg-core-white header-fixed ${nativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: [
      cellsSpinnerVeil,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'transfersSuccess',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_transfersSuccess: {
                bind: 'init'
              }
            },
            out: {
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
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark-success',
          rightIcon: 'coronita:close',
          titleName: 'glomo-transfers-success-receipt-title',
          cellsConnections: {
            in: {
              [PRODUCT + '_change_header_color']: {
                bind: 'class'
              }
            },
            out: {
              PREPARE_TRANSFERS_TO_EXIT: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          titleName: 'glomo-transfers-success-receipt-title-spherica',
          variant: 'primary',
          leftIcon: '',
          rightIcon: 'coronita:close',
          className: 'header--white',
          rightIconText: 'cells-molecule-header-spherica-close'
        }
      }
    ]
  };

  const UI = [
    {
      zone: 'app__main',
      tag: 'cells-successful-response',
      tagSpherica: 'cells-successful-response-spherica',
      type: 'UI',
      properties: {
        className: 'common-transfer-data external-tdc-mobile-top-up-offer',
        formatDate: FORMAT_LONG_DATE,
        isStickyButton: '',
        localCurrency: 'MXN',
        visibleChars: 5,
        showCustomBaseCurrencyMsg: true,
        cellsConnections: {
          in: {
            [PRODUCT + '_SET_DATA_SUCCES_EQUITY']: {
              bind: 'result'
            },
            [PRODUCT + 'SET_DATA_SUCCES_TRANSFERS']: {
              bind: 'result'
            },
            send_information_card_promotion_channel: {
              bind: 'setProperties'
            },
            [PRODUCT + '_animate_receipt']: {
              bind: 'animateFromTo'
            },
            [PRODUCT + '_change_receipt_class']: {
              bind: 'class'
            },
            PREPARE_TRANSFERS_TO_EXIT: {
              bind: 'reset'
            },
            reset_transfer_success_configuration: {
              bind: 'reset'
            }
          },
          out: {
            [PRODUCT + '_SPEI_CLARIFICATION']: {
              bind: 'on-click-message-secondary'
            },
            PREPARE_TRANSFERS_TO_EXIT: {
              bind: 'go-to-next'
            },
            [PRODUCT + '_OPERATIVE_SELECTED']: {
              bind: 'operation-click'
            },
            [PRODUCT + '_SHARE_RECEIP_CAPTURE']: {
              bind: 'share-receipt-capture'
            },
            [PRODUCT + '_REDIRECT_TO_BANXICO_LINK']: {
              bind: 'on-click-top-info-link'
            },
            [PRODUCT + '_accepted_card_promotion']: {
              bind: 'cells-oc-banner-click',
              link: UTILS.addFeatureFlag('contractProductSection.ocCreditCardHolder', {
                page: 'creditCardHolder',
                skipHistory: true
              })
            },
            transfersSuccess_accepted_card_promotion_spherica: {
              bind: 'cells-oc-banner-click',
              link: UTILS.addFeatureFlag('operations.creditCardHolderSpherica', {
                page: 'creditCardHolderSpherica',
                skipHistory: true
              })
            },
            reset_transfer_success_configuration: {
              bind: 'cells-successful-response-click-primary'
            }
          }
        }
      },
      propertiesSpherica: {
        operationListClass: 'centered-items',
        disableButtons: true,
        newCellsConnections: {
          add: {
            out: {
              transfers_success_alert_manager_open_with_settings_spherica: {
                bind: 'transfers-dm-modal-config-spherica'
              },
              transfersSuccess_SPEI_CLARIFICATION: {
                bind: 'on-click-message'
              }
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-share-generic-receipt',
      tagSpherica: 'cells-share-generic-receipt-spherica',
      familyPath: 'cells-share-operative-receipt',
      familyPathSpherica: 'cells-share-operative-receipt-spherica',
      type: 'UI',
      properties: {
        country: 'mx',
        language: LANGUAGE,
        localCurrency: LOCAL_CURRENCY,
        dateFormat: 'DD MMMM YYYY',
        maxLineWidth: 39,
        sharedReceiptStyles: {
          receiptTitle: {
            'color': 'var(--bbva-core-blue, #004481)'
          },
          sectionTitle: {
            'color': 'var(--bbva-core-blue, #004481)'
          },
          info: {
            'padding': '0px',
            'margin-top': '2px',
            'background-color': 'none'
          },
          infoIcon: {
            'display': 'none'
          },
          infoMessage: {
            'font-weight': '100',
            'margin': '0px',
            'font-size': 'var(--cells-text-size-12, 12px)',
            'text-align': 'left',
            'background-color': 'none',
            'color': 'var(--bbva-500, #666666)'
          }
        },
        cellsConnections: {
          in: {
            [PRODUCT + '_SHARE_RECEIP_CAPTURE']: {
              bind: 'captureReceipt'
            },
            [PRODUCT + '_OPERATIVE_SCREENSHOT']: {
              bind: 'result'
            },
            PREPARE_TRANSFERS_TO_EXIT: {
              bind: 'reset'
            },
            mobile_manage_operation: {
              bind: 'reset'
            }
          },
          out: {
            mobile_manage_operation: {
              bind: 'receipt-captured',
              'forward-to-native': true
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            }
          }
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'cells-modal-card-advice',
      tagSpherica: 'cells-modal-card-advice-spherica',
      properties: {
        iOSFixedHeader: nativeIos,
        className: 'image-size-l header--white-navy-blue',
        cellsConnections: {
          in: {
            [PRODUCT + '_open_modal_promotion']: {
              bind: 'openWithConfig'
            }
          },
          out: {
            [PRODUCT + '_modal_accepted_promotion']: {
              bind: 'modal-transfer-card-promotion-click-primary',
              link: UTILS.addFeatureFlag('contractProductSection.ocCreditCardHolder', {
                page: 'creditCardHolder',
                skipHistory: true
              })
            },
            transfersSuccess_modal_accepted_promotion_spherica: {
              bind: 'modal-transfer-card-promotion-click-primary',
              link: UTILS.addFeatureFlag('operations.creditCardHolderSpherica', {
                page: 'creditCardHolderSpherica',
                skipHistory: true
              })
            },
            [PRODUCT + '_modal_closed_button']: {
              bind: 'cells-bottom-modal-closed',
              backStep: true
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-glomo-dashboard-manager-mx',
      familyPath: 'cells-glomo-dashboard-manager',
      properties: {
        delay: 100,
        financialOverview: false,
        dataProtectionRegulationBanerConfig: {
          text: 'data-protection-regulation-oc-banner-text',
          smallImg: {
            id: 'data-protection-regulation-image',
            alt: 'data-protection-regulation-image-alt',
            src: 'images/dataProtectionRegulation/protection-regulation.svg'
          }
        },
        cellsConnections: {
          in: {
            global_launch_logout_clicked: {
              bind: 'manageLogout'
            },
            [PRODUCT + '_LINK_EXTERNAL_LOGOUT']: {
              bind: 'manageLinkExternalLogout'
            },
            global_launch_link_clicked: {
              bind: 'manageLinkExternalLogout'
            }
          },
          out: {
            GLOBAL_CONFIRM_LOGOUT_MESSAGE: {
              bind: 'dashboard-native-logout-confirm'
            }
          },
          params: {
            userInfo: 'global_user',
            stateAccounts: 'stateAccounts',
            stateCards: 'stateCards',
            stateFunds: 'stateFunds',
            stateDeposits: 'stateDeposits',
            stateLoans: 'stateLoans'
          }
        }
      },
      propertiesSpherica: {
        isSpherica,
        newCellsConnections: {
          add: {
            out: {
              transfers_success_alert_manager_open_with_settings_spherica: {
                bind: 'dashboard-native-logout-confirm'
              }
            }
          },
          remove: {
            out: [
              'GLOBAL_CONFIRM_LOGOUT_MESSAGE'
            ]
          }
        }
      }
    }
  ];

  const DMS = [
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-transfers-mx-dm',
      familyPath: 'glomo-transfers-dm',
      properties: {
        operations: OPERATIONS,
        isSpherica,
        primaryExternalLink: 'glomo-transfer-generate-interbank-transfer-logout-banxico-link',
        secondaryExternalLink: 'glomo-transfer-generate-interbank-transfer-logout-bbva-spei-link',
        enablePrepareFeedback: true,
        fixedTimezone: true,
        cellsConnections: {
          in: {
            [getChannelName('redirect_to_expenses')]: {
              bind: 'entryFromExpensesGroup'
            },
            global_feature_stand_in_status: {
              bind: 'standIn'
            },
            NAVIGATION_REQUEST_TRANSFERS_SUCCESS: {
              bind: 'requestOperationNumber'
            },
            NAVIGATION_REQUEST_REUSE_TRANSFERS_SUCCESS: {
              bind: 'requestOperationNumber'
            },
            navigation_request_frequent_operations_transfers_success: {
              bind: 'requestOperationNumber'
            },
            [PRODUCT + '_SPEI_CLARIFICATION']: {
              bind: 'showSpeiClarification'
            },
            [PRODUCT + '_OPERATIVE_SELECTED']: {
              bind: 'operativeSelected'
            },
            TRANSFER_SUCCESS_LINK_EXTERNAL: {
              bind: 'setLogoutExternalLink'
            },
            REDIRECT_TO_LINK_ALERT: {
              bind: 'setSecondaryLink'
            },
            [PRODUCT + '_REDIRECT_TO_BANXICO_LINK']: {
              bind: 'setPrimaryLink'
            },
            navigation_product_detail_to_transfers: {
              bind: 'setIdEntryPont'
            },
            PREPARE_TRANSFERS_TO_EXIT: {
              bind: 'prepareToExit'
            },
            navigate_dashboard_to_transfer: {
              bind: 'setIdEntryPont'
            },
            navigation_loan_detail_to_transfer: {
              bind: 'setIdEntryPont'
            },
            navigation_product_detail_to_transfer: {
              bind: 'setIdEntryPont'
            },
            navigation_help_section_detail_to_transfer: {
              bind: 'setIdEntryPont'
            },
            navigation_dash_detail_to_transfer: {
              bind: 'setIdEntryPont'
            },
            PREPARE_TRANSFERS_TO_EXIT: {
              bind: 'exitTransferSuccessPage'
            },
            global_set_app_settings: {
              bind: 'publicSettings'
            },
            global_storage_get_standInTransferCount_success: {
              bind: 'standInIncrementTransferCount'
            }
          },
          out: {
            RESET_LIST_CONTACTS_FLAG: {
              bind: 'reset-list-contacts-flag'
            },
            [PRODUCT + '_SET_RESULT_DETAIL']: {
              bind: 'set-parce-data-success'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            [PRODUCT + '_OPERATIVE_SCREENSHOT']: {
              bind: 'share-receipt-capture'
            },
            [PRODUCT + '_SET_ANALYTICS_PERSIST_DATA']: {
              bind: 'successful-transfers-data'
            },
            ANALYTICS_APP_COMPLETED: {
              bind: 'successful-operation-number'
            },
            SHOW_SPEI_CLARIFICATION: {
              bind: 'transfers-show-spei'
            },
            global_alert_manager_open_with_settings: {
              bind: 'show-close-confirm'
            },
            [PRODUCT + '_LINK_EXTERNAL_LOGOUT']: {
              bind: 'navigation-to-external-link'
            },
            global_action_launcher_uri: {
              bind: 'action-launcher-external-link',
              'forward-to-native': true
            },
            EXIT_TO_DASHBOARD: {
              bind: 'exit-to-dashboard',
              link: {
                page: 'dashboard'
              }
            },
            navigate_transfer_success_to_expenses: {
              bind: 'exit-to-expenses',
              link: {
                page: 'expensesGroup',
                cleanUntil: 'expensesGroup'
              }
            },
            [PRODUCT + '_EXIT_TO_PRODUCT_DETAIL_PAGE']: {
              bind: 'exit-to-product-detail-event',
              'forward-to-native': true,
              link: {
                page: 'account',
                cleanUntil: 'account',
                skipHistory: true,
                params: {
                  productId: 'productId'
                }
              }
            },
            global_feedback_voice_controller_connect_transfers_visa_success: {
              bind: 'prepare-feedback-event'
            },
            global_user_id: {
              bind: 'customer-id-changed'
            },
            [PRODUCT + '_change_header_color']: {
              bind: 'pending-movement-header-receipt'
            },
            [PRODUCT + '_change_ios_header_color']: {
              bind: 'pending-movement-ios-header-receipt-color'
            },
            [PRODUCT + '_animate_receipt']: {
              bind: 'pending-movement-animate-receipt'
            },
            [PRODUCT + '_change_receipt_class']: {
              bind: 'pending-movement-receipt-class'
            },
            global_feedback_show_rate_the_app_plugin: {
              bind: 'rating-app-transfer-success'
            },
            global_get_from_storage: {
              bind: 'get-native-local-storage'
            },
            global_set_in_storage: {
              bind: 'global-set-in-storage'
            }
          }
        }
      },
      propertiesSpherica: {
        errorAlertImagePath: './images/spherica/error/lt-goal-icon.svg',
        transferDateFormatSpherica: 'DD MMM YYYY, HH:mm',
        enablePrepareFeedback: true,
        newCellsConnections: {
          add: {
            out: {
              transfers_success_alert_manager_open_with_settings_spherica: {
                bind: 'transfers-dm-modal-config-spherica'
              }
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      familyPath: 'glomo-equity-transfer-manager',
      tag: 'glomo-equity-transfer-manager-mx',
      type: 'DM',
      properties: {
        cellsConnections: {
          in: {
            [PRODUCT + '_SET_RESULT_DETAIL']: {
              bind: 'parceDataSucces'
            }
          },
          out: {
            [PRODUCT + '_SET_DATA_SUCCES_EQUITY']: {
              bind: 'send-responnse-succes-equity'
            },
            [PRODUCT + 'SET_DATA_SUCCES_TRANSFERS']: {
              bind: 'send-responnse-succes-transfers'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-contextual-sale-manager',
      type: 'DM',
      properties: {
        localCurrency: LOCAL_CURRENCY,
        language: LANGUAGE,
        cellsConnections: {
          in: {
            [PRODUCT + '_scroll_bottom_complete']: {
              bind: 'scrollBottomComplete'
            },
            PREPARE_TRANSFERS_TO_EXIT: {
              bind: 'showPromotionModal'
            },
            show_card_promotion_transfer: {
              bind: 'showPromotionalCard'
            },
            channel_sending_offer_information: {
              bind: 'dataOfert'
            }
          },
          out: {
            [PRODUCT + '_open_modal_promotion']: {
              bind: 'open-modal-promotion'
            },
            dashboard_refresh_financial_overview: {
              bind: 'return-previous-step',
              backStep: true
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      familyPath: '@glomo-web-components/glomo-analytics-transfer-manager',
      tag: 'glomo-analytics-transfer-manager-mx',
      render: 'litElement',
      properties: {
        transferType: TRANSFERTYPEMX,
        cellsConnections: {
          in: {
            global_feature_stand_in_status: {
              bind: 'settingStandinMode'
            },
            ANALYTICS_APP_COMPLETED: {
              bind: 'appCompleted'
            },
            [PRODUCT + '_SET_ANALYTICS_PERSIST_DATA']: {
              bind: 'data'
            },
            sending_dynamic_data_for_analytics: {
              bind: 'setDataAnalitycsConstant'
            },
            [PRODUCT + '_accepted_card_promotion']: {
              bind: 'clickOnTheContextualSalesCard'
            },
            [PRODUCT + '_open_modal_promotion']: {
              bind: 'contextualSalesModalShown'
            },
            [PRODUCT + '_modal_accepted_promotion']: {
              bind: 'appOnClickStartContextualSales'
            },
            show_card_promotion_transfer: {
              bind: 'showPromotionalCard'
            }
          },
          out: {
            app_completed_analytics_transfers: {
              bind: 'analytics-app-completed',
              analytics: ANALYTICS.appCompleted
            },
            app_completed_analytics_transfers_contextual_sales: {
              bind: 'analytics-app-completed-contextual-sales',
              analytics: ANALYTICS.APP_COMPLETED_CONTEXTUAL_SALES
            },
            [PRODUCT + '_click_campaign_contextual_sales']: {
              bind: 'click-on-contextual-sales-card',
              analytics: ANALYTICS.APP_ONCLICK_START_TDC_CONTEXTUAL_SALES
            },
            [PRODUCT + '_app_onclick_start_contextual_sales']: {
              bind: 'sales-contextual-app-on-click-start',
              analytics: ANALYTICS.APP_ONCLICK_START_TDC_CONTEXTUAL_SALES_FROM_MODAL
            },
            [PRODUCT + '_page_view_contextual_sales']: {
              bind: 'contextual-sales-page-view',
              analytics: ANALYTICS.HUELLA_PAGE_VIEW_CONTEXTUAL_SALES
            }
          }
        }
      }
    }
  ];

  const DPS = [
    {
      zone: 'app__transactional',
      type: 'DM',
      tag: 'bbva-dataprovider-suggested-operations',
      familyPath: '@glomo-web-components/bbva-dataprovider-suggested-operations',
      render: 'litElement',
      properties: {
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        version: CONFIG.globalServices.versions.suggestedOperations,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cellsConnections: {
          in: {
            frequent_operations_id_to_delete: {
              bind: 'deleteSuggestedOperationById'
            }
          },
          out: {
            frequent_operations_delete_suggested_operation_success: {
              bind: 'suggested-operations-delete-api-dm'
            }
          }
        }
      }
    }
  ];

  if (isSpherica) {
    UI.push(glomoAlertManagerSpherica);
  }

  base.components.push(...UI, ...DMS, ...DPS);
  localStorageApp.addOutStorageChannels(base.components, [ 'standInTransferCount' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
