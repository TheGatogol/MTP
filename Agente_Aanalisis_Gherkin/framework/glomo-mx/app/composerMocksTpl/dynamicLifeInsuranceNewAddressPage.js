'use strict';

module.exports = CONFIG => {
  const { SPINNER: spinner, useNames, toUnderscoreCase, headerHeight } = require('./common/helpers/_utils');
  const pageName = 'dynamicLifeInsuranceNewAddressPage';
  const operativePrefix = toUnderscoreCase(pageName).toUpperCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const isNativeIos = CONFIG.nativeIos || false;
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
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('GET_NEW_ADDRESS_DATA')]: {
            bind: 'getDataNewAddress'
          },
          [getChannelName('SEARCH_LIST_BY_POSTAL_CODE')]: {
            bind: 'searchPlacesByPostalCode'
          },
          [getChannelName('OPEN_MODAL_NEIGHBORHOOD_LIST')]: {
            bind: 'openModalNeighboordhoodList'
          },
          [getChannelName('SET_CUSTOMER_ADDRESS_UNMASKED')]: {
            bind: 'successfullOnGetCustomersAddressesUnmasked'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'open-modal-dynamic-life-insurance'
          },
          [getChannelName('SEND_PLACES_FOUNDED')]: {
            bind: 'send-places-founded'
          },
          [getChannelName('OPEN_MODAL_NEIGHBORHOOD_EVENT')]: {
            bind: 'open-neighborhood-modal'
          },
          [getChannelName('SET_NEW_ADDRESS_DATA')]: {
            bind: 'set-new-address-value',
            backStep: true
          }
        }
      }
    }
  };
  const cellsModalSelectorNeighborHood = {
    zone: 'app__overlay',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      autoClose: true,
      noFocusOrigin: true,
      cellsConnections: {
        in: {
          [getChannelName('OPEN_MODAL_NEIGHBORHOOD_EVENT')]: {
            bind: 'open'
          },
          [getChannelName('OPEN_MODAL_NEIGHBORHOOD_LIST')]: {
            bind: 'items'
          },
          [getChannelName('SEND_PLACES_FOUNDED')]: {
            bind: 'reset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('NEIGHBORHOOD_LIST_OPTION_SELECTED')]: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };
  const cellsModalAddressForm = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-modal-address-form',
    properties: {
      continueButton: 'dynamic-life-insurance-modal-add-amount-button-continue',
      cancelButton: 'dynamic-life-insurance-modal-btn-close',
      disabledInput: false,
      cellsConnections: {
        in: {
          DYNAMIC_LIFE_INSURANCE_OFFER_PAGE_ADD_NEW_ADDRESS: {
            bind: 'open'
          },
          [getChannelName('SEND_PLACES_FOUNDED')]: {
            bind: 'setPropertiesPostalCode'
          },
          [getChannelName('NEIGHBORHOOD_LIST_OPTION_SELECTED')]: {
            bind: 'neighborHoodSelected'
          }
        },
        out: {
          [getChannelName('GET_NEW_ADDRESS_DATA')]: {
            bind: 'send-address-data'
          },
          [getChannelName('SEARCH_LIST_BY_POSTAL_CODE')]: {
            bind: 'send-postal-code'
          },
          [getChannelName('OPEN_MODAL_NEIGHBORHOOD_LIST')]: {
            bind: 'send-neighbor-hood-list'
          },
          [getChannelName('CANCEL_FORM')]: {
            bind: 'on-cancel-click',
            backStep: true
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
      spinner(CONFIG),
      glomoDynamicLifeInsuranceDM,
      cellsModalAddressForm,
      cellsModalSelectorNeighborHood
    ]
  };
  return base;
};