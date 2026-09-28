'use strict';

module.exports = CONFIG => {
  const { useNames, toUnderscoreCase, headerHeight } = require('./common/helpers/_utils');
  const product = 'dynamicLifeInsuranceMainPage';
  const operativePrefix = toUnderscoreCase(product).toUpperCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const isNativeIos = CONFIG.nativeIos || false;
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'dynamicLifeInsuranceEditCoverageAmountPage',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_dynamicLifeInsuranceEditCoverageAmountPage: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('MAIN_PAGE_INIT_PAGE')]: {
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
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core ' + isNativeIos ? 'ios-top-padding' : '',
      rightIcon: 'coronita:close',
      titleName: 'dynamic-life-insurance-main-modal-coverages-assistances-modal-title',
      cellsConnections: {
        out: {
          [getChannelName('NAVIGATION_MAIN_PAGE_BACK_REQUEST_EDIT')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          [getChannelName('NAVIGATION_MAIN_PAGE_BACK_REQUEST_EDIT')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('NAVIGATION_MAIN_PAGE_TO_PREVIOUS_PAGE')]: {
            bind: 'header-right-button',
            backStep: true
          }
        }
      }
    }
  };
  const textDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      className: '',
      title: 'dynamic-life-insurance-main-modal-coverages-edit-title',
      mainDescription: 'dynamic-life-insurance-main-modal-coverages-edit-text'
    }
  };
  const cellsMoleculeInput = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-molecule-input',
    properties: {
      className: 'tag-input',
      id: 'locSearch',
      label: 'dynamic-life-insurance-insured-amount-text',
      shyPlaceholder: false,
      iconRippleEffect: true,
      icon: 'coronita:unfold',
      iconSize: '32',
      iconVisibility: 'always',
      iconAction: true,
      type: 'text',
      cellsConnections: {
        in: {
          [getChannelName('SET_VALUE')]: {
            bind: 'value'
          }
        },
        out: {
          [getChannelName('OPEN_MODAL_PAYMENT_OPTION')]: {
            bind: 'cells-molecule-input-icon-tap'
          }
        }
      }
    }
  };
  const cellsConfirmButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      className: 'btn tertiary btn--l',
      config: {
        buttons: {
          primary: {
            text: 'dynamic-life-insurance-modal-add-amount-button-continue',
            action: 'set-amount-coverage-accept'
          },
          secondary: {
            text: 'conversation-fail-response-secundary-btn',
            class: 'link',
            action: 'set-amount-coverage-cancel'
          }
        }
      },
      cellsConnections: {
        out: {
          [getChannelName('CLICK_ACCEPT')]: {
            bind: 'set-amount-coverage-accept'
          },
          [getChannelName('CLICK_CANCEL_EDIT')]: {
            bind: 'set-amount-coverage-cancel',
            backStep: true
          }
        }
      }
    }
  };
  const modalSelector = {
    zone: 'app__overlay',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      className: '',
      cellsConnections: {
        in: {
          [getChannelName('SET_ITEMS_SELECTOR')]: {
            bind: 'items'
          },
          [getChannelName('OPEN_MODAL_PAYMENT_OPTION')]: {
            bind: 'open'
          }
        },
        out: {
          [getChannelName('AMOUNT_COVERAGE_OPTION_SELECTED')]: {
            bind: 'item-clicked'
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
      cellsConnections: {
        in: {
          [getChannelName('OPEN_EDIT_COVERAGE_AMOUNT')]: {
            bind: 'setOptionsCoverageModal'
          },
          [getChannelName('AMOUNT_COVERAGE_OPTION_SELECTED')]: {
            bind: 'setChangeOptionCoverageEdit'
          },
          [getChannelName('CLICK_ACCEPT')]: {
            bind: 'sendNewAmoutConverage'
          }
        },
        out: {
          [getChannelName('SET_ITEMS_SELECTOR')]: {
            bind: 'set-items-modal-edit-amount-coverage'
          },
          [getChannelName('SET_VALUE')]: {
            bind: 'set-new-amount-coverage'
          },
          DYNAMIC_LIFE_INSURANCE_EDIT_COVERAGE_AMOUNT_PAGE_SEND_NEW_AMOUNT_COVERAGE: {
            bind: 'send-new-amount-coverage',
            backStep: true
          }
        }
      }
    }
  };
  const base = {
    hash: 'dynamic-life-edit-coverage-amount-page',
    currentPage: {
      url: '/dynamic-life-edit-coverage-amount-page'
    },
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
      glomoNavigationHandler,
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      textDescription,
      cellsMoleculeInput,
      modalSelector,
      cellsConfirmButton,
      glomoDynamicLifeInsuranceDM
    ]
  };
  return base;
};
