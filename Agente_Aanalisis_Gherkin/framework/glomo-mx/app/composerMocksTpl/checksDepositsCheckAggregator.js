/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('checksDepositsCheckAggregator');

  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const ANALYTICS_CHECKS_DEPOSITS = require('./analytics/_checksDeposit')('checksDeposits');

  const base = {
    hash: 'mx-checks-deposits-check-aggregator',
    currentPage: {
      url: '/checks-deposits/check-aggregator'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : 'bbva-core-blue',
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            checks_deposits_check_aggregator_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksDepositsCheckAggregator',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_checksDepositsCheckAggregator: {
                bind: 'init'
              }
            },
            out: {
              checks_deposits_check_aggregator_reset_page: {
                bind: 'reset'
              },
              checks_deposits_check_aggregator_init_page: {
                bind: 'init-page'
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
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--white',
          rightIcon: 'coronita:close',
          titleName: 'glomo-checks-deposits-checks-aggregator-header-title',
          cellsConnections: {
            out: {
              checks_deposits_aggregator_exit_operative: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-check-aggregator',
        properties: {
          className: 'consult-check-data',
          maxCharactersAmount: 9,
          currencyCode: LOCAL_CURRENCY,
          localCurrency: LOCAL_CURRENCY,
          amountLanguage: LANGUAGE,
          hideDate: true,
          hideSeparator: true,
          showAddPhotoCheckInfo: true,
          showCheckInfoMessage: true,
          checkBandCodeInputConfig: { type: 'info-dark', readOnly: true, label: 'glomo-check-aggregator-check-band-code-label', infoMessage: 'glomo-check-aggregator-check-band-code-info-message', infoMessageIcon: 'coronita:info' },
          checkFolioInputConfig: { type: 'info-dark', readOnly: true, label: 'glomo-check-aggregator-check-folio-label',  infoMessage: 'glomo-check-aggregator-check-folio-info-message', infoMessageIcon: 'coronita:info'},
          checkAmountInfoMessageConfig: { type: 'info-dark', message: 'glomo-check-aggregator-check-amount-info-message', icon: 'coronita:info' },
          checkInfoMessageConfig: { type: 'info-dark', message: 'glomo-check-aggregator-check-info-message', icon: 'coronita:info' },
          disabled: true,
          validateCheckAmount: true,
          maxAmountInput: 25000.01,
          checkAmountErrorMessage: 'glomo-check-aggregator-check-amount-error-message',
          infoSectionDescription: 'glomo-check-aggregator-check-amount-description',
          cellsConnections: {
            in: {
              checks_deposits_go_to_check_aggregator: {
                bind: 'photosNameList'
              },
              global_checks_deposits_photos_names_list: {
                bind: 'photosNameList'
              },
              global_checks_deposits_photos_check_band_code: {
                bind: 'checkBandCode'
              },
              global_checks_deposits_photos_check_folio: {
                bind: 'checkFolio'
              },
              global_checks_deposits_remove_check_accept: {
                bind: 'reset'
              },
              checks_deposits_check_aggregator_reset_page: {
                bind: 'reset'
              },
              global_checks_deposits_reset_process: {
                bind: 'reset'
              },
              global_checks_deposits_photos_remove_front_picture_accept: {
                bind: 'resetCheckData'
              },
              global_checks_deposits_photos_remove_back_picture_accept: {
                bind: 'resetCheckData'
              },
              checks_deposits_check_aggregator_set_data: {
                bind: 'setDataCheck'
              },
              checks_deposits_check_aggregator_set_edit_photos: {
                bind: 'editPhotos'
              },
              global_checks_deposits_photos_set_edit_photos: {
                bind: 'editPhotos'
              },
              global_remove_front_picture_accept: {
                bind: 'resetCheckData'
              },
              global_remove_back_picture_accept: {
                bind: 'resetCheckData'
              },
              global_exit_operative_checks_deposits_accept: {
                bind: 'reset'
              },
              global_checks_deposits_aggregator_accept_leave_page: {
                bind: 'reset'
              },
              checks_deposits_reset_steps: {
                bind: 'reset'
              },
              checks_deposits_photos_leave_the_page: {
                bind: 'reset'
              },
              checks_deposits_custom_acepted: {
                bind: 'reset'
              },
              global_checks_deposits_photos_accept_leave_page: {
                bind: 'reset'
              }
            },
            out: {
              navigate_to_checks_deposits_photos: {
                bind: 'glomo-list-select-link-clicked',
                link: {
                  page: 'checksDepositsPhotos'
                }
              },
              checks_deposits_check_aggregator_go_to_edit_photos: {
                bind: 'glomo-check-aggregator-edit-icon-clicked'
              },
              checks_deposits_check_aggregator_notify_changes: {
                bind: 'notify-changes-data-check-aggregator'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        properties: {
          unfixed: true,
          cellsConnections: {
            in: {
              checks_deposits_check_aggregator_status_continue_button: {
                bind: 'config'
              }
            },
            out: {
              checks_deposits_check_aggregator_confirm_buttons_click_primary: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              checks_deposits_aggregator_exit_operative: {
                bind: 'cells-confirm-buttons-click-secondary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        familyPath: 'glomo-check-aggregator-dm',
        tag: 'glomo-check-aggregator-dm-mx',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          businessDocumentsApiVersion: CONFIG.globalServices.versions.businessDocuments,
          showAggregatorSecondaryButton: true,
          showDecimalNumber: true,
          getDecimalScale: 2,
          validatePrimaryButton: true,
          inputMaxProductValue: 25000,
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'requestToLeaveThePage'
              },
              checks_deposits_aggregator_exit_operative: {
                bind: 'requestToLeaveThePage'
              },
              global_checks_deposits_aggregator_accept_leave_page: {
                bind: 'leaveThePage'
              },
              global_checks_deposits_photos_names_list: {
                bind: 'picturesNames'
              },
              global_checks_deposits_photos_check_band_code: {
                bind: 'checkBandCode'
              },
              global_checks_deposits_photos_check_folio: {
                bind: 'checkFolio'
              },
              global_checks_deposits_go_to_edit_check: {
                bind: 'editCheck'
              },
              global_checks_deposits_photos_list: {
                bind: 'photosList'
              },
              checks_deposits_check_aggregator_go_to_edit_photos: {
                bind: 'goEditPhotos'
              },
              checks_deposits_check_aggregator_notify_changes: {
                bind: 'dataCheckState'
              },
              checks_deposits_check_aggregator_confirm_buttons_click_primary: {
                bind: 'onContinueCheckAggregator'
              },
              global_checks_deposits_remove_check_accept: {
                bind: 'resetPage'
              },
              global_checks_deposits_reset_process: {
                bind: 'resetPage'
              },
              global_exit_operative_checks_deposits_accept: {
                bind: 'resetPage'
              },
              checks_deposits_reset_steps: {
                bind: 'resetPage'
              },
              checks_deposits_set_selected_product: {
                bind: 'account'
              },
              checks_deposits_photos_leave_the_page: {
                bind: 'resetPage'
              },
              checks_deposits_custom_acepted: {
                bind: 'resetPage'
              },
              global_checks_deposits_photos_accept_leave_page: {
                bind: 'resetPage'
              }
            },
            out: {
              checks_deposits_photos_leave_the_page: {
                bind: 'leave-the-page',
                backStep: true
              },
              global_alert_manager_open_with_settings: {
                bind: 'glomo-check-aggregator-open-modal'
              },
              checks_deposits_check_aggregator_set_data: {
                bind: 'set-data-check'
              },
              navigate_to_edit_checks_deposits_photos: {
                bind: 'go-to-edit-checks-deposits-photos',
                link: {
                  page: 'checksDepositsPhotos'
                }
              },
              checks_deposits_check_aggregator_set_edit_photos: {
                bind: 'set-edit-photos-aggregator'
              },
              checks_deposits_check_aggregator_status_continue_button: {
                bind: 'status-continue-button-aggregator'
              },
              global_checks_deposits_check_aggregator_continue_pressed: {
                bind: 'glomo-check-aggregator-continue-pressed',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-checks-deposits-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-checks-deposits-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          config: {
            steps: {
              1: 'app-page-visit',
              2: 'app-step-2',
              3: 'app-step-3'
            }
          },
          cellsConnections: {
            in: {
              checks_deposits_set_selected_product: {
                bind: 'account'
              },
              checks_deposits_go_to_check_aggregator: {
                bind: 'sendAnalyticAppStep2'
              },
              checks_deposits_photos_check_data: {
                bind: 'sendAnalyticsAppStep9'
              },
              checks_deposits_check_aggregator_go_to_edit_photos: {
                bind: 'sendAnalyticsAppStep8'
              },
              analytics_photons_list: {
                bind: 'analyticsPhotosList'
              }
            },
            out: {
              checks_deposits_analytics_app_step_2: {
                bind: 'analytics-app-step-2',
                analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('2'),
                featureFlag: ANALYTICS_CHECKS_DEPOSITS.ANALYTICS_FEATURE_FLAG
              },
              checks_deposits_analytics_app_step_9: {
                bind: 'analytics-app-step-9',
                analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('9'),
                featureFlag: ANALYTICS_CHECKS_DEPOSITS.ANALYTICS_FEATURE_FLAG
              },
              checks_deposits_analytics_app_visit: {
                bind: 'analytics-app-page-visit',
                analytics: ANALYTICS_CHECKS_DEPOSITS.app_page_visit
              },
              checks_deposits_analytics_app_step_8: {
                bind: 'analytics-app-step-8',
                analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('8')
              }
            }
          }
        }
      }
    ]
  };

  return base;

};
