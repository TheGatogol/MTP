/* eslint-disable no-shadow */
'use strict';
module.exports = config => {
  const {
    createSpinner,
    getLanguage,
    getLocalCurrency
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        cardsV1: cardsApiVersion
      }
    },
    native = false
  } = config;
  const pages = require('./common/_pages')(config)('specialSalesSuccessPage');
  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-confirm-buttons-next',
        action: 'exit'
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      animationType: 'verticalUp'
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'special-header-text',
      cellsConnections: {
        out: {
          specialSalesSuccess_EXIT_TO_NATIVE_CHANNEL: {
            bind: 'click-right-button',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const successful = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    type: 'UI',
    properties: {
      className: 'enrollment-success',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      hideDivider: true,
      disableButtons: true,
      withoutHead: true,
      cellsConnections: {
        in: {
          SPECIALSALESSUCCESS_SET_RESULT: {
            bind: 'result'
          }
        }
      }
    }
  };
  const confirm =  {
    zone: 'app__main',
    tag: 'cells-confirm-buttons',
    type: 'UI',
    properties: {
      config: configButtons,
      unfixed: true,
      cellsConnections: {
        out: {
          specialSalesSuccess_EXIT: {
            bind: 'cells-confirm-buttons-click-primary',
            backStep: true
          }
        }
      }
    }
  };
  const dm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-special-sales-dm',
    properties: {
      cellsConnections: {
        in: {
          SET_CARD_INFO: {
            bind: 'cardInfo'
          },
          SUCCESS_CARD_INFROMATION: {
            bind: 'specialSalesSuccess'
          },
          SPECIALSALES_ON_SUCCESS_RESPONSE: {
            bind: 'getCardInfo'
          },
          SET_DATA_PROMOTION: {
            bind: 'dataPromotion'
          }
        },
        out: {
          close_control_veil: {
            bind: 'hide-spinner-event'
          },
          SPECIALSALESSUCCESS_SET_RESULT: {
            bind: 'special-sales-success'
          },
          SET_CARD_ID: {
            bind: 'set-card-id'
          },
          GET_CARD_INFORMATION: {
            bind: 'get-request-card-data'
          }
        }
      }
    }
  };
  const apiCards = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards',
    properties: {
      host,
      cardsApiVersion,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          SET_CARD_ID: {
            bind: 'cardId'
          },
          GET_CARD_INFORMATION: {
            bind: 'getCard'
          }
        },
        out: {
          SUCCESS_CARD_INFROMATION: {
            bind: 'set-card'
          },
          ERROR_CARD_INFORMATION: {
            bind: 'error-on-get-card'
          }
        }
      }
    }
  };
  const base = {
    hash: 'special-sales-success',
    currentPage: {
      url: '/special-sales-success'
    },
    pages,
    template,
    components: [
      createSpinner(config),
      header,
      successful,
      confirm,
      dm,
      apiCards
    ]
  };
  return base;
};
