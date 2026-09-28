'use strict';

module.exports = CONFIG => {
  const pageName = 'internationalTransfersContactsBook';
  const {
    getLanguage,
    getLocalCurrency,
    getShortFormatDate,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const analyticsInternationalTransfers = require('./analytics/_internationalTransfersContactBook')(CONFIG);

  const {
    globalServices: {
      host,
      requiredToken,
      versions: {
        internationalTransfersV1,
        catalogs,
        customerContactDetailsV1,
        operationRegistries,
        exchangeRatesV1,
        moneyLaundering,
        contactsBookV1,
        customersV1,
        accountsV1,
        bankApi,
        publicSettings
      },
      publicSettingsId,
      publicSettingsHost
    },
    native = false,
    nativeIos = false,
    nativeShell
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(pageName);

  const internationalTransfersSpherica = {
    zone: 'app__main',
    type: 'UI',
    tag: 'account-transaction-servicing-international-transfers-mx',
    familyPath: '@glomo-web-components/account-transaction-servicing-international-transfers-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      otpId: pageName,
      requiredToken,
      publicSettingsId,
      accountsApiVersion: accountsV1,
      bankApiVersion: bankApi,
      contactBookApiVersion: contactsBookV1,
      catalogRecordsApiVersion: catalogs,
      customerApiVersion: customersV1,
      customerContactDetailsApiVersion: customerContactDetailsV1,
      operationRegistriesApiVersion: operationRegistries,
      exchangeRatesApiVersion: exchangeRatesV1,
      moneyLaunderingApiVersion: moneyLaundering,
      internationalTransfersApiVersion: internationalTransfersV1,
      publicSettingsKey: 'app_settings_glomo',
      publicSettingsHost,
      publicSettingsApiVersion: publicSettings,
      language: getLanguage(),
      country: 'mx',
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          __bridge_page_internationalTransfersContactsBook: {
            bind: 'initTransfers'
          },
          accesses_international_transfers_contacts: {
            bind: 'accounts'
          },
          global_feature_flag_collection_updated: {
            bind: 'parseFeatureFlag'
          },
          international_transfers_contacts_book_native_selected: {
            bind: 'nativeOptionSelected'
          },
          global_mtu_exception_back_navigation: {
            bind: 'cancelMtuException'
          },
          global_mtu_navigation_confirm_limit: {
            bind: 'mtuMakePayment'
          },
          international_transfers_contacts_book_sign_canceled: {
            bind: 'setSignCanceled'
          },
          blue_navigation_international_transfers: {
            bind: 'accounts'
          },
          blue_navigation_international_transfers_data: {
            bind: 'dataBlueListeningMode'
          },
          navigation_from_futura_dashboard: {
            bind: 'paramsFutura'
          }
        },
        out: {
          international_transfers_exit: {
            bind: 'international-transfers-exit-transfer',
            backStep: true
          },
          global_action_launcher_dialer: {
            bind: 'international-transfers-call-bbva-line'
          },
          international_transfers_contacts_book_call_show_info_plugin: {
            bind: 'international-transfers-open-native-selector-plugin'
          },
          international_transfers_template: {
            bind: 'international-transfers-add-dynamic-template'
          },
          international_transfers_shared_receipt: {
            bind: 'international-transfers-share-data'
          },
          international_transfers_capture_receipt: {
            bind: 'international-transfers-capture-receipt'
          },
          international_transfers_show_status: {
            bind: 'international-transfers-show-status-receipt',
            link: {
              page: 'internationalTransfersPanel'
            }
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          international_transfers_contacts_book_sign_canceled: {
            bind: 'signature-canceled-dm'
          },
          international_transfers_contacts_book_sign_otp: {
            bind: 'signature-required-first-step-dm'
          },
          international_transfers_page_view: {
            bind: 'expandable-multistep-current-active-step'
          },
          international_transfers_set_bank_name: {
            bind: 'international-transfers-migration-dm-bank-fetch'
          },
          international_transfers_set_select: {
            bind: 'international-transfers-new-recipient-panel-select-changed'
          },
          international_transfers_set_country_selected: {
            bind: 'international-transfers-new-recipient-panel-select-country-changed'
          },
          international_transfers_set_relationship_selected: {
            bind: 'international-transfers-new-recipient-panel-select-relationship-changed'
          },
          international_transfers_set_input_value: {
            bind: 'international-transfers-activity-economic-step-form-input-value-change'
          },
          international_transfers_set_check_value: {
            bind: 'international-transfers-activity-economic-step-form-checkbox-value-change'
          },
          international_transfers_set_foreign_detail: {
            bind: 'international-transfers-migration-dm-exchange-rates-fetch'
          },
          international_transfers_set_offer: {
            bind: 'international-transfers-concept-step-form-select-value-change'
          },
          international_transfers_set_economics: {
            bind: 'international-transfers-activity-economic-step-economic-activities-changed'
          },
          international_transfers_set_success: {
            bind: 'international-transfers-migration-dm-transfer-successful'
          },
          international_transfers_multistep_state: {
            bind: 'international-transfers-multistep-modal-state-change'
          },
          international_tranfers_status_accounts: {
            bind: 'international-transfers-account-selection-modal-state-change'
          },
          international_transfers_save_contact: {
            bind: 'international-transfers-new-recipient-panel-set-data-recipient'
          },
          contact_agenda_modal_state: {
            bind: 'contacts-agenda-modal-state-change'
          },
          contact_agenda_deleted_status: {
            bind: 'deleted-contacts-agenda-state-change'
          },
          burn_item_from_operative_smart_servicing: {
            bind: 'international-transfers-operation-success'
          }
        },
        params: {
          clientId: native ? 'global_storage_get_loginData_success' : 'global_client_id',
          customerEmail: 'dashboard_customer_email',
          customerId: 'global_user_id',
          customerInfo: 'global_login_success'
        }
      }
    }
  };

  const showInfoPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-show-info',
    familyPath: '@glomo-web-components/bbva-nativeconnector-show-info',
    render: 'litElement',
    pluginName: 'internationalTransfersContactsBookSelect',
    properties: {
      cellsConnections: {
        in: {
          international_transfers_contacts_book_call_show_info_plugin: {
            bind: 'nativeListModal'
          }
        },
        out: {
          international_transfers_contacts_book_native_selected: {
            bind: 'show-info-native-list-modal-success'
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      dateFormat: getShortFormatDate(),
      sharedReceiptStyles: {
        receipt: {
          'top': ''
        },
        receiptTitle: {
          'font-weight': 'var(--cells-fontDefaultMedium_-_font-weight, 500)',
          'line-height': '1.5rem'
        },
        fieldTitle: {
          'height': 'auto',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '1.5rem',
          'margin-top': '1rem'
        },
        fieldValue: {
          'height': 'auto',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '1.5rem'
        },
        fieldValueAccount: {
          'height': 'auto',
          'font-style': 'italic',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '1.5rem',
          'margin': '0'
        }
      },
      cellsConnections: {
        in: {
          international_transfers_template: {
            bind: 'addDynamicTemplate'
          },
          international_transfers_shared_receipt: {
            bind: 'result'
          },
          international_transfers_capture_receipt: {
            bind: 'captureReceipt'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const managerAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-international-transfer-mx',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-analyticmanager-account-transaction-servicing',
    properties: {
      cellsConnections: {
        in: {
          international_transfers_page_view: {
            bind: 'identifyPageView'
          },
          international_transfers_set_bank_name: {
            bind: 'getBankName'
          },
          international_transfers_set_country_selected: {
            bind: 'setCountry'
          },
          international_transfers_set_relationship_selected: {
            bind: 'setRelationship'
          },
          international_transfers_set_input_value: {
            bind: 'getInputValue'
          },
          international_transfers_set_check_value: {
            bind: 'getCheckboxValue'
          },
          international_transfers_set_foreign_detail: {
            bind: 'getForeignDetail'
          },
          international_transfers_set_offer: {
            bind: 'getOffer'
          },
          international_transfers_set_economics: {
            bind: 'getInitialEconomicActivities'
          },
          international_transfers_set_success: {
            bind: 'getTransferSuccess'
          },
          international_transfers_contacts_book_sign_otp: {
            bind: 'signOperation'
          },
          international_tranfers_status_accounts: {
            bind: 'statusAccounts'
          },
          international_transfers_save_contact: {
            bind: 'saveContact'
          },
          international_transfers_multistep_state: {
            bind: 'stateMultistep'
          },
          contact_agenda_modal_state: {
            bind: 'statusContactsAgenda'
          },
          contact_agenda_deleted_status: {
            bind: 'statusDeletedContacts'
          }
        },
        out: {
          international_transfers_page_view_dynamic: {
            bind: 'bbva-analyticmanager-international-transfer-mx-page-view-dynamic',
            analytics: analyticsInternationalTransfers.stepTwoDestination
          },
          international_transfers_page_view_economic_activity: {
            bind: 'bbva-analyticmanager-international-transfer-mx-economic-activity',
            analytics: analyticsInternationalTransfers.stepThreeEconomic
          },
          international_transfers_page_view_foreign: {
            bind: 'bbva-analyticmanager-international-transfer-mx-foreign',
            analytics: analyticsInternationalTransfers.stepFourImport
          },
          international_transfers_page_view_concept: {
            bind: 'bbva-analyticmanager-international-transfer-mx-concept',
            analytics: analyticsInternationalTransfers.stepFiveConcept
          },
          international_transfers_page_view_summary: {
            bind: 'bbva-analyticmanager-international-transfer-mx-summary',
            analytics: analyticsInternationalTransfers.stepSixConfirmation
          },
          international_transfers_page_view_otp: {
            bind: 'bbva-analyticmanager-international-transfer-mx-sign-operation',
            analytics: analyticsInternationalTransfers.stepSevenOtp
          },
          international_transfers_page_view_completed: {
            bind: 'bbva-analyticmanager-international-transfer-mx-transfer-completed',
            analytics: analyticsInternationalTransfers.viewComplete
          },
          international_transfers_page_view_accounts: {
            bind: 'bbva-analyticmanager-international-transfer-mx-status-accounts',
            analytics: analyticsInternationalTransfers.pageViewLevelTwo
          },
          international_transfers_link_contacts: {
            bind: 'bbva-analyticmanager-international-transfer-mx-save-contact',
            analytics: analyticsInternationalTransfers.internalLinkContact
          },
          international_transfers_contacts_agenda: {
            bind: 'bbva-analyticmanager-international-transfer-mx-contacts-agenda',
            analytics: analyticsInternationalTransfers.pageViewLevelTwo
          },
          international_transfers_contacts_agenda_delete: {
            bind: 'bbva-analyticmanager-international-transfer-mx-delete-contact',
            analytics: analyticsInternationalTransfers.pageViewLevelThree
          }
        }
      }
    }
  };

  const base = {
    hash: 'international-transfers-contacts-books',
    currentPage: {
      url: '/international-transfers-contacts-books'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'bg-light-grey',
        animationType: 'verticalUp',
        drawerWidth: '100%',
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: headerHeightMinimum,
        cellsConnections: {
          out: {
            welcome_template_active: {
              bind: 'template-active'
            }
          }
        }
      }
    },
    components: [
      shareReceipt,
      managerAnalytics,
      internationalTransfersSpherica
    ]
  };

  if (nativeShell) {
    if (!nativeIos) {
      base.components.push(showInfoPlugin);
    }
  }

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('account-transaction-servicing-international-transfers-mx', { widgetId: pageName });

  return base;
};
