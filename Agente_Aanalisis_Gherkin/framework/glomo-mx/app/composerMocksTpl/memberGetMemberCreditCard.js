'use strict';

module.exports = CONFIG => {
  const storage = require('./common/_local-storage');
  const pages = require('./common/_pages')(CONFIG)('dynamicsAndRewards');
  const pageName = 'memberGetMemberCreditCard';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const { createSpinner } = require('./common/helpers');
  const { headerHeightMinimum, pluginDatePicker} = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        geographicPlaces,
        loyalty
      }
    },
    mapsApiKey,
    native = false,
    nativeIos = false,
    nativeShell = false
  } = CONFIG;
  const {
    appStep,
    appCompleted,
    pageViewMap,
    appErrors,
    onClickStart
  } = require('./analytics/_memberGetMemberCreditCard')();
  const { appPageView } = require('./analytics/_dynamicsAndRewards')();
  const base = {
    hash: pageName,
    currentPage: {
      url: '/member-get-member-credit-card'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        headerHeight: headerHeightMinimum
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        newCellsConnections: {
          add: {
            in: {
              member_get_member_tdc_adress_recalculate_status_bar: {
                bind: 'recalculateStatusBarTop'
              }
            }
          }
        }
      }
    },
    components: [
      createSpinner(CONFIG),
      {
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
              ['__bridge_app_' + pageName]: {
                bind: 'navigation'
              },
              ['__bridge_page_' + pageName]: {
                bind: 'init'
              }
            },
            out: {
              member_get_member_tdc_init_page: {
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
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-feature-member-get-member-credit-card',
        tagSpherica: 'bbva-feature-member-get-member-credit-card-spherica',
        familyPath: '@glomo-web-components/bbva-feature-member-get-member-credit-card',
        familyPathSpherica: '@glomo-web-components/bbva-feature-member-get-member-credit-card-spherica',
        render: 'litElement',
        properties: {
          host,
          requiredToken,
          native,
          pageName,
          placesApiVersion: geographicPlaces,
          loyaltyApiVersion: loyalty,
          originId: 'MGMTDC',
          apiKey: mapsApiKey,
          cellsConnections: {
            in: {
              global_storage_get_loginData_success: {
                bind: 'getClientId'
              },
              global_feature_flag_collection_updated: {
                bind: 'getFeatureFlags'
              },
              member_get_member_tdc_init_page: {
                bind: 'loadPersonalStep'
              },
              member_get_member_tdc_get_rfc: {
                bind: 'rfc'
              },
              global_nativeconnector_date_picker_launch_success: {
                bind: 'calendarData'
              },
              global_nativeconnector_date_picker_launch_error: {
                bind: 'calendarDataError'
              },
              dynamics_and_rewards_tdc_credit_card_navigation: {
                bind: 'offerId'
              },
              global_client_id: {
                bind: 'customerId'
              },
              global_storage_get_loginData_error: {
                bind: 'requestClientId'
              },
              __bridge_page_memberGetMemberCreditCard: {
                bind: 'requestClientId'
              },
              global_device_accesses_customer_id: {
                bind: 'cryptedCustomerId'
              }
            },
            out: {
              member_get_member_tdc_calculate_rfc: {
                bind: 'bbva-member-get-member-credit-card-personal-information'
              },
              global_nativeconnector_datepicker_launch: {
                bind: 'launch-date-picker'
              },
              member_get_member_tdc_close_form: {
                bind: 'member-get-member-credit-card-navigation-external',
                analytics: appPageView('invitar a un amigo'),
                backStep: true
              },
              member_get_member_tdc_personal_form_loaded: {
                bind: 'member-get-member-tdc-personal-form-loaded'
              },
              member_get_member_tdc_address_form_loaded: {
                bind: 'member-get-member-tdc-address-form-loaded'
              },
              member_get_member_tdc_summary_loaded: {
                bind: 'member-get-member-summary-loaded'
              },
              member_get_member_tdc_receipt_loaded: {
                bind: 'member-get-member-receipt-loaded'
              },
              member_get_member_tdc_address_finder_modal: {
                bind: 'member-get-member-tdc-address-finder-modal'
              },
              member_get_member_tdc_address_not_found: {
                bind: 'member-get-member-address-not-found'
              },
              member_get_member_tdc_error_postal_code: {
                bind: 'member-get-member-tdc-error-postal-code'
              },
              member_get_member_tdc_referred_error: {
                bind: 'member-get-member-referred-error'
              },
              member_get_member_tdc_invite_other_referral: {
                bind: 'bbva-feature-member-get-member-credit-card-add-other-referral'
              },
              global_get_from_storage: {
                bind: 'global-get-from-storage'
              }
            }
          }
        },
        propertiesSpherica: {
          iOSFixedHeader: nativeIos,
          newCellsConnections: {
            add: {
              out: {
                member_get_member_tdc_adress_recalculate_status_bar: {
                  bind: 'member-get-member-adress-recalculate-status-bar'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-member-get-member-tdc',
        familyPath: '@glomo-web-components/bbva-analyticmanager-user-onboarding',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              member_get_member_tdc_personal_form_loaded: {
                bind: 'fireAppPersonalFormStepPage'
              },
              member_get_member_tdc_address_form_loaded: {
                bind: 'fireAppAddressFormStepPage'
              },
              member_get_member_tdc_summary_loaded: {
                bind: 'fireAppSummaryStepPage'
              },
              member_get_member_tdc_receipt_loaded: {
                bind: 'fireAppCompleted'
              },
              member_get_member_tdc_address_finder_modal: {
                bind: 'firePageFinderModal'
              },
              member_get_member_tdc_address_not_found: {
                bind: 'fireFinderModalErrorPageView'
              },
              member_get_member_tdc_error_postal_code: {
                bind: 'firePostalCodeErrorPageView'
              },
              member_get_member_tdc_referred_error: {
                bind: 'fireReferredErrorPageView'
              },
              member_get_member_tdc_invite_other_referral: {
                bind: 'fireInviteOtherReferral'
              }
            },
            out: {
              member_get_member_tdc_fire_app_personal_form_step_page: {
                bind: 'analytics-app-personal-form-step',
                analytics: appStep('2', '2 datos invitado')
              },
              member_get_member_tdc_fire_app_address_form_step_page: {
                bind: 'analytics-app-address-form-step',
                analytics: appStep('3', '3 direccion invitado')
              },
              member_get_member_tdc_fire_app_summary_form_step_page: {
                bind: 'analytics-app-summary-step',
                analytics: appStep('4', '4 confirmacion')
              },
              member_get_member_tdc_fire_app_completed_step_page: {
                bind: 'analytics-app-completed-step',
                analytics: appCompleted
              },
              member_get_member_tdc_fire_finder_modal_step_page: {
                bind: 'analytics-app-finder-modal-step',
                analytics: pageViewMap
              },
              member_get_member_tdc_fire_not_found_addrees_modal_step_page: {
                bind: 'analytics-finder-modal-error-page-view',
                analytics: appErrors('invitar a un amigo tdc', 'error direccion no encontrada')
              },
              member_get_member_tdc_fire_postal_code_error_step_page: {
                bind: 'analytics-postal-code-error-page-view',
                analytics: appErrors('invitar a un amigo tdc', 'error codigo postal no encontrado')
              },
              member_get_member_tdc_fire_referred_error_step_page: {
                bind: 'analytics-referred-error-page-view',
                analytics: appErrors('invitar a un amigo tdc', 'error de registro')
              },
              member_get_member_tdc_invite_other_referral_friend: {
                bind: 'analytics-on-click-start-invite-other-referral',
                analytics: onClickStart('registrar otro invitado')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-technicalcore-mx-rfc-calculator',
        familyPath: '@glomo-web-components/bbva-technicalcore-mx-rfc-calculator',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              member_get_member_tdc_calculate_rfc: {
                bind: 'getRfc'
              }
            },
            out: {
              member_get_member_tdc_get_rfc: {
                bind: 'bbva-technical-core-rfc-data'
              }
            }
          }
        }
      }
    ]
  };
  if (nativeShell) {
    if (!nativeIos) {
      base.components.push(pluginDatePicker(CONFIG));
    }
  }
  storage.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
