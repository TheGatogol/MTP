'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'recipientsForm';
  const utils = require('./common/helpers/_utils');
  const ANALYTICS = require('./analytics/_recipients')();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const isNative = CONFIG.native || false;
  const pages = require('./common/_pages')(CONFIG)('recipients-form');
  const HOST = CONFIG.globalServices.host;

  const base = {
    hash: 'mx-recipients-form',
    currentPage: {
      url: '/recipients-form'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: `dark-blue-bg ${ isNativeIos ? 'ios-top-padding' : ''}`,
        fixOffsetScroll: 0,
        footerHeight: 100,
        headerFixed: true,
        headerHeight: utils.headerHeight,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [PAGE_NAME + '_INIT_PAGE']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              ['__bridge_app_' + PAGE_NAME]: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME ]: {
                bind: 'init'
              },
              [PAGE_NAME + '_NAVIGATION_TO_PREVIOUS_PAGE']: {
                bind: 'reset'
              }
            },
            out: {
              [PAGE_NAME + '_INIT_PAGE']: {
                bind: 'init-page',
                analytics: ANALYTICS.appStep('3')
              },
              [PAGE_NAME + 'RESET']: {
                bind: 'reset'
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-previous-page',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_EXIT_PROCESS']: {
                bind: 'goBack'
              },
              [PAGE_NAME + '_NAVIGATE_TO_ADDRESS_FORM']: {
                bind: 'navigateToPage'
              },
              RECIPIENT_SET_ADDRESS_EDDIDED: {
                bind: 'navigateToPage'
              },
              recipient_send_new_recipient: {
                bind: 'navigateToPage'
              }
            },
            out: {
              [PAGE_NAME + '_NAVIGATION_TO_PREVIOUS_PAGE']: {
                bind: 'navigation-to-previous-page',
                backStep: true
              },
              [PAGE_NAME + '_NAVIGATE_TO_ADDRESS_FORM_HANDLER']: {
                bind: 'navigation-to-recipientsAddressForm',
                link: {
                  page: 'recipientsAddressForm'
                }
              },
              RECIPIENT_SET_ADDRESS_EDDIDED_HANDLER: {
                bind: 'navigation-to-recipientsAddressForm',
                link: {
                  page: 'recipientsAddressForm'
                }
              },
              recipient_send_new_recipient_handler: {
                bind: 'navigation-to-recipientsInit',
                link: {
                  page: 'recipientsInit'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-header-main',
        tag: 'bbva-header-main',
        render: 'litElement',
        properties: {
          variant: 'modal-three-level',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          text: 'profile-recipient-add-recipients',
          cellsConnections: {
            out: {
              recipients_modal_exit_form: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-aggregation-profile-recipients-beneficiary',
        tag: 'bbva-aggregation-profile-recipients-beneficiary',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME + '_RELATIONSHIPS_LIST_PARSED']: {
                bind: 'recipientsListRelationShips'
              },
              RECIPIENT_SET_NEW_ADDRESS_DATA: {
                bind: 'addressData'
              },
              [PAGE_NAME + '_SET_CUSTOMER_DATA']: {
                bind: 'setCustomerAddressStep'
              },
              [PAGE_NAME + 'RESET']: {
                bind: 'reset'
              },
              [PAGE_NAME + '_PICKER_DATA']: {
                bind: 'datePickerData'
              },
              [PAGE_NAME + '_INIT_PAGE']: {
                bind: 'fireMaskedAddressDataFirstTime'
              }
            },
            out: {
              [PAGE_NAME + '_NAVIGATE_TO_ADDRESS_FORM']: {
                bind: 'recipients-navigate-to-address-form'
              },
              [PAGE_NAME + '_EDIT_ADDRESS']: {
                bind: 'aggregation-profile-recipients-beneficiary-edit-address'
              },
              [PAGE_NAME + '_MASKED_ADDRESS_DATA']: {
                bind: 'aggregation-profile-recipients-beneficiary-masked-address-data'
              },
              [PAGE_NAME + '_DISPATCH_NEW_RECIPIENT']: {
                bind: 'aggregation-profile-recipients-recipient-data'
              },
              [PAGE_NAME + '_CLICK_FORM-DATE-INPUT']: {
                bind: 'open-date-picker'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-manager-profile-recipients',
        tag: 'bbva-manager-profile-recipients',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME + '_INIT_PAGE']: {
                bind: 'getRelationShips'
              },
              [PAGE_NAME + '_GET_RELATIONSHIPS_RESPONSE_SUCCESS']: {
                bind: 'applicationCatalogsSuccess'
              },
              [PAGE_NAME + '_GET_RELATIONSHIPS_RESPONSE_ERROR']: {
                bind: 'onApplicationCatalogsError'
              },
              [PAGE_NAME + '_EDIT_ADDRESS']: {
                bind: 'editAddressData'
              },
              [PAGE_NAME + '_MASKED_ADDRESS_DATA']: {
                bind: 'maskedAddressData'
              },
              [PAGE_NAME + '_SET_CUSTOMER_ADDRESSES_DATA']: {
                bind: 'setCustomerAddressesData'
              },
              [PAGE_NAME + '_DISPATCH_NEW_RECIPIENT']: {
                bind: 'addNewRecipient'
              },
              recipients_modal_exit_form: {
                bind: 'manageBackNavigation'
              },
              [PAGE_NAME + '_CLICK_FORM-DATE-INPUT']: {
                bind: 'openDatePicker'
              },
              [PAGE_NAME + '_LAUNCH_DATE_PICKER_SUCCESS']: {
                bind: 'onDatePickerSuccess'
              },
              [PAGE_NAME + '_LAUNCH_DATE_PICKER_ERROR']: {
                bind: 'onDatePickerError'
              }
            },
            out: {
              [PAGE_NAME + '_DISPATCH_GET_LIST_RELATIONSHIPS']: {
                bind: 'recipients-get-application-catalogs'
              },
              [PAGE_NAME + '_RELATIONSHIPS_LIST_PARSED']: {
                bind: 'recipients-data-catalogs'
              },
              global_generic_error: {
                bind: 'fullmodal-error',
                analytics: ANALYTICS.OPERATION_NOT_AVAILABLE
              },
              RECIPIENT_SET_ADDRESS_EDDIDED: {
                bind: 'manager-profile-recipients-set-edit-address-data'
              },
              [PAGE_NAME + '_SEND_REQUEST_PROCESS_ADDRESSES_UNMASK']: {
                bind: 'request-get-customer-addresses-event'
              },
              [PAGE_NAME + '_SET_CUSTOMER_DATA']: {
                bind: 'manager-profile-recipients-ui-send-customer-data'
              },
              recipient_send_new_recipient: {
                bind: 'manager-profile-recipients-new-recipient'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-exit-modal'
              },
              [PAGE_NAME + '_EXIT_PROCESS']: {
                bind: 'accept-modal-exit-process'
              },
              [PAGE_NAME + '_DATE_PICKER_LAUNCH']: {
                bind: 'launch-date-picker'
              },
              [PAGE_NAME + '_PICKER_DATA']: {
                bind: 'date-picker-data'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-dataprovider-applicationcatalogs',
        tag: 'bbva-dataprovider-applicationcatalogs',
        render: 'litElement',
        properties: {
          host: HOST,
          native: isNative,
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_DISPATCH_GET_LIST_RELATIONSHIPS']: {
                bind: 'getApplicationCatalogs'
              }
            },
            out: {
              [PAGE_NAME + '_GET_RELATIONSHIPS_RESPONSE_SUCCESS']: {
                bind: 'set-application-catalogs'
              },
              [PAGE_NAME + '_GET_RELATIONSHIPS_RESPONSE_ERROR']: {
                bind: 'error-on-get-application-catalogs'
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
          host: HOST,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          native: isNative,
          cellsConnections: {
            in: {
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              [PAGE_NAME + '_SEND_REQUEST_PROCESS_ADDRESSES']: {
                bind: 'getCustomerAddresses'
              },
              [PAGE_NAME + '_SEND_REQUEST_PROCESS_ADDRESSES_UNMASK']: {
                bind: 'getCustomerAddresses'
              }
            },
            out: {
              [PAGE_NAME + '_SET_CUSTOMER_ADDRESSES_DATA']: {
                bind: 'set-customer-addresses'
              },
              [PAGE_NAME + '_SUCCESS_RESPONSE_CUSTOMER_ADDRESSES_CHANNEL']: {
                bind: 'customers-response-get-addresses-success'
              },
              [PAGE_NAME + 'ERROR_CUSTOMER_ADDRESS_UNMASKED']: {
                bind: 'error-on-get-customer-addresses'
              }
            }
          }
        }
      }
    ]
  };
  const datePicker =  {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_DATE_PICKER_LAUNCH']: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          [PAGE_NAME + '_LAUNCH_DATE_PICKER_SUCCESS']: {
            bind: 'launch-date-picker-success'
          },
          [PAGE_NAME + '_LAUNCH_DATE_PICKER_ERROR']: {
            bind: 'launch-date-picker-error'
          }
        }
      }
    }
  };
  if (!isNativeIos) {
    base.components.push(datePicker);
  }
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'recipients-error-on-catalogs',
      acceptRetry: { bind: 'getCatalogsRecipients', component: 'bbva-manager-profile-recipients' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-manager-profile-recipients'},
      finishRetry: { bind: 'goBack', component: 'glomo-navigation-handler'}
    }
  ]);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', 'recipientsForm', ['set-customer-addresses', 'customers-response-get-addresses-success', 'error-on-get-customer-addresses']);
  return base;
};
