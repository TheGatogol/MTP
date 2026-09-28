'use strict';

module.exports = config => {
  const { SPINNER: spinner, useNames, toUnderscoreCase, headerHeight } = require('./common/helpers/_utils');
  const pageName = 'dynamicLifeInsuranceAddBeneficiaryPage';
  const product = 'dynamicLifeInsuranceOfferPage';
  const operativePrefix = toUnderscoreCase(product).toUpperCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const isNativeIos = config.nativeIos || false;
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      titleName: 'dynamic-life-insurance-success-benefits-key',
      className: 'alert ' + isNativeIos ? 'ios-top-padding' : '',
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          LIAB_HEADER_TITLE_TEXT: {
            bind: 'titleName'
          }
        },
        out: {
          LIAR_BACKSTEP: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    }
  };
  const glomoDynamicLifeInsuranceDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-dynamic-life-insurance-dm',
    properties: {
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          [getChannelName('SET_CUSTOMER_DETAIL')]: {
            bind: 'responseCustomer'
          },
          [getChannelName('ERROR_GET_CUSTOMER_DETAIL')]: {
            bind: 'responseCustomer'
          },
          [getChannelName('UNMASKED_ADDRESSES_EVENT')]: {
            bind: 'toggleMaskedAddressHandler'
          },
          [getChannelName('SET_CUSTOMER_ADDRESSES_UNMASKED')]: {
            bind: 'successfullOnGetCustomersAddressesUnmasked'
          },
          [getChannelName('OPEN_MODAL_BENEFICIARY')]: {
            bind: 'configDatePicker'
          }
        },
        out: {
          [getChannelName('KINSHIP_LIST_OPTIONS')]: {
            bind: 'kinship-list-changed'
          },
          [getChannelName('ADD_BENEFICIARY_MODAL_OPEN')]: {
            bind: 'open-modal-beneficiary-changed'
          },
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('SHOW_UNMASKED_ADDRESSES')]: {
            bind: 'show-unmasked-address'
          },
          [getChannelName('SET_ADDRESS_UNMASKED')]: {
            bind: 'set-address-info-unmask'
          },
          [getChannelName('SET_DATE_PICKER_CONFIG')]: {
            bind: 'set-date-picker-config'
          }
        }
      }
    }
  };
  const glomoAggregationLifeInsuranceAddBeneficiary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-aggregation-life-insurance-add-beneficiary',
    properties: {
      bbvaBankId: config.bbvaBankListId,
      acceptButton: 'dynamic-life-insurance-modal-btn-confirm',
      cancelButton: 'dynamic-life-insurance-modal-btn-cancel',
      maskChars: '•',
      inputDateType: isNativeIos ? 'text' : 'date',
      iosToNativePlugin: isNativeIos,
      continueButton: 'dynamic-life-insurance-modal-btn-confirm',
      cellsConnections: {
        in: {
          [getChannelName('KINSHIP_LIST_OPTIONS')]: {
            bind: 'setKinshipList'
          },
          [getChannelName('OPEN_MODAL_ADD_BENEFICIARY')]: {
            bind: 'cancelBeneficiary'
          },
          [getChannelName('EDIT_BENEFICIARY')]: {
            bind: 'setEditBeneficiary'
          },
          [getChannelName('KINSHIP_LIST_OPTION_SELECTED')]: {
            bind: 'setKinshipListOptionSelected'
          },
          DYNAMIC_LIFE_INSURANCE_NEW_ADDRESS_PAGE_SET_NEW_ADDRESS_DATA: {
            bind: 'setNewAddress'
          },
          [getChannelName('SET_ADDRESS_UNMASKED')]: {
            bind: 'setProperties'
          },
          [getChannelName('SEND_CURRENT_ADDRESS')]: {
            bind: 'addressInfo'
          },
          [getChannelName('ADD_NEW_BENEFICIARY')]: {
            bind: 'resetProperties'
          },
          [getChannelName('SAVE_EDIT_BENEFICIARY')]: {
            bind: 'resetProperties'
          },
          [getChannelName('CANCELLED_ADDED')]: {
            bind: 'resetProperties'
          },
          [getChannelName('SET_DATE_PICKER_CONFIG')]: {
            bind: 'setProperties'
          },
          LIAR_BACKSTEP: {
            bind: 'resetProperties'
          }
        },
        out: {
          [getChannelName('HEADER_TITLE_TEXT')]: {
            bind: 'header-title-text-changed'
          },
          [getChannelName('ADD_NEW_BENEFICIARY')]: {
            bind: 'add-new-beneficiary',
            backStep: true
          },
          [getChannelName('ADD_NEW_ADDRESS')]: {
            bind: 'add-new-address',
            link: {
              page: 'dynamicLifeInsuranceNewAddressPage'
            }
          },
          [getChannelName('EDIT_NEW_ADDRESS')]: {
            bind: 'edit-address',
            link: {
              page: 'dynamicLifeInsuranceNewAddressPage'
            }
          },
          [getChannelName('SAVE_EDIT_BENEFICIARY')]: {
            bind: 'save-edit-beneficiary',
            backStep: true
          },
          [getChannelName('CANCELLED_ADDED')]: {
            bind: 'cancel-answers',
            backStep: true
          },
          [getChannelName('REQUEST_KINSHIP_LIST')]: {
            bind: 'request-kinship-list'
          },
          [getChannelName('OPEN_MODAL_KINSHIP_LIST')]: {
            bind: 'open-modal-kinship'
          },
          [getChannelName('UNMASKED_ADDRESSES_EVENT')]: {
            bind: 'click-unmasked'
          }
        }
      }
    }
  };
  const cellsModalSelectorKinship = {
    zone: 'app__overlay',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      autoClose: true,
      cellsConnections: {
        in: {
          [getChannelName('OPEN_MODAL_KINSHIP_LIST')]: {
            bind: 'open'
          },
          [getChannelName('KINSHIP_LIST_OPTIONS')]: {
            bind: 'items'
          },
          [getChannelName('OPEN_MODAL_ADD_BENEFICIARY')]: {
            bind: 'reset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('KINSHIP_LIST_OPTION_SELECTED')]: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };
  const cellDmGlobalApisCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: config.globalServices.host,
      customersApiVersion: 1,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      native: !!config.native,
      cellsConnections: {
        in: {
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'customerId'
          },
          [getChannelName('SHOW_UNMASKED_ADDRESSES')]: {
            bind: 'getCustomerAddresses'
          }
        },
        out: {
          [getChannelName('SET_CUSTOMER_ADDRESSES_UNMASKED')]: {
            bind: 'set-customer-addresses'
          },
          [getChannelName('ERROR_CUSTOMER_ADDRESS_UNMASKED')]: {
            bind: 'error-on-get-customer-addresses'
          }
        }
      }
    }
  };
  const base = {
    template: {
      tag: 'cells-template-coronita',
      properties: {
        mode: 'seamed',
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        headerHeight,
        className: isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      cellsMoleculeHeader,
      spinner(config),
      glomoDynamicLifeInsuranceDM,
      glomoAggregationLifeInsuranceAddBeneficiary,
      cellsModalSelectorKinship,
      cellDmGlobalApisCustomers
    ]
  };
  const singConnector = require('./common/_sign-connector')(config)(base);
  singConnector('cells-dm-global-apis-customers', pageName, ['set-customer-addresses', 'error-on-get-customer-addresses']);
  return base;
};
