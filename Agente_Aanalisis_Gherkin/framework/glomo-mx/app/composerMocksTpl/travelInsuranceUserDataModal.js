'use strict';
module.exports = (CONFIG) => {
  const { SPINNER: spinner, createPrefixFromPageName, useNames, headerHeight } = require('./common/helpers/_utils');
  const pageName = 'travelInsuranceUserDataModal';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const modalConfigItems = {
    'modal-data-travel': {
      code: 'modal-notice-privacy',
      className: 'header--white full-height-info info',
      maximize: true,
      closeOnPrimaryButton: true,
      title: 'travel-insurance-user-data-modal-notice-privacy-title',
      acceptBtLabel: 'alert-ASSOCIATED-TRANSACTIONS-accept',
      values: [
        { icon: 'coronita:info', iconClass: 'icon-size-24', class: 'info' },
        { text: 'travel-insurance-user-data-modal-notice-privacy-text1' }
      ]
    },
    'exit-not-save-information-user-data-modal': {
      code: 'exit-not-save-information-user-data-modal',
      maximize: false,
      className: 'custom error',
      closeOnPrimaryButton: true,
      acceptBtLabel: 'travel-insurance-modal-reset-travelers-accept',
      cancelBtLabel: 'travel-insurance-products-list-cancel-button',
      values: [
        { icon: 'coronita:alert', iconClass: 'icon-size-24', class: 'info' },
        { text: 'travel-insurance-modal-reset-travelers-message' }
      ]
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      mode: 'seamed',
      headerHeight
    }
  };
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      id: 'travel-header',
      className: 'header--white',
      rightIcon: 'coronita:close',
      titleName: 'travel-insurance-user-data-modal-header-title',
      cellsConnections: {
        out: {
          [getChannelName('GO_BACK')]: {
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
      backAction: 'navigation-to-back',
      cellsConnections: {
        in: {
          [getChannelName('EXIT_NOT_SAVE_INFORMATION_DATA_MODAL')]: {
            bind: 'goBack'
          }
        },
        out: {
          navigation_to_prev_page: {
            bind: 'navigation-to-back',
            backStep: true
          }
        }
      }
    }
  };
  const cellsTextDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      className: 'margin-top-l description-s subtitle-gap-bottom-m',
      id: 'travel-insurance-user-data-modal-description',
      cellsConnections: {
        in: {
          travelInsurance_TRAVELERS_DESCRIPTIONS: {
            bind: 'description'
          }
        }
      }
    }
  };
  const cellsTextDescriptionPrivacy = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      className: 'margin-top-m no-margin-bottom subtitle-gap-bottom-s light-description',
      id: 'travel-insurance-user-data-privacy-description',
      cellsConnections: {
        in: {
          travelInsurance_TRAVELERS_PRIVACY_DESCRIPTION: {
            bind: 'description'
          }
        }
      }
    }
  };
  const cellsButtonList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-button-list',
    properties: {
      buttons: [
        {
          icon: 'coronita:document',
          titleText: 'travel-insurance-user-data-modal-privacy-button-text'
        }
      ],
      cellsConnections: {
        in: {
          travelInsurance_SET_ITEMS: {
            bind: 'buttons'
          }
        },
        out: {
          [getChannelName('BUTTON_PRIVACY_CLICKED')]: {
            bind: 'button-clicked'
          }
        }
      }
    }
  };
  const cellsFormUserDataList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-form-user-data-list',
    properties: {
      className: 'container-margin message-date',
      reactOnFocus: true,
      informationalBox: true,
      typeInfoBox: 'info-light-blue',
      classInfoBox: 'custom-info-light',
      nameLabel: 'cells-form-user-data-list-user-name-label',
      inputType: isNativeIos ? 'text' : 'date',
      readOnly: isNativeIos,
      cellsConnections: {
        in: {
          travelInsurance_enable_date_input: {
            bind: 'setProperties'
          },
          travelInsurance_OPEN_MODAL_TRAVELERS_DATA: {
            bind: 'users'
          },
          travelInsurance_index_travel_has_married_form: {
            bind: 'marriageSelectedIndex'
          }
        },
        out: {
          travelInsurance_date_input_disabled: {
            bind: 'cells-form-user-data-list-date-input-clicked'
          },
          [getChannelName('PARSE_USERS')]: {
            bind: 'cells-form-user-data-list-continue-button-clicked'
          },
          travelInsurance_ON_CHANGE_STEP_STATUS: {
            bind: 'cells-form-user-data-list-continue-button-clicked'
          },
          [getChannelName('RADIO_SELECTED')]: {
            bind: 'cells-radio-group-selected'
          },
          [getChannelName('KID_COVERAGE_SELECTED')]: {
            bind: 'cells-checkbox-button-checked'
          },
          [getChannelName('INPUT_VALUE_CHANGED')]: {
            bind: 'cells-form-user-data-list-users-changed'
          },
          travelInsurance_NEXT_STEP: {
            bind: 'cells-form-user-data-list-continue-button-clicked',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };
  const glomoTravelInsuranceManagerMX = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-travel-insurance-manager',
    tag: 'glomo-travel-insurance-manager-mx',
    properties: {
      modalConfigItems,
      cellsConnections: {
        in: {
          [getChannelName('BUTTON_PRIVACY_CLICKED')]: {
            bind: 'openModalDataTravel'
          },
          [getChannelName('INPUT_VALUE_CHANGED')]: {
            bind: 'dataChanged'
          },
          [getChannelName('GO_BACK')]: {
            bind: 'backNavigation'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'open-diy-info-modal'
          },
          [getChannelName('EXIT_TO_TRAVEL_INSURANCE')]: {
            bind: 'exit-to-travel-insurance',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };
  const base = {
    hash: 'travel-insurance-user-data-modal',
    currentPage: {
      url: '/travel-insurance-user-data-modal'
    },
    pages,
    template,
    components: [
      spinner(CONFIG),
      cellsMoleculeHeader,
      glomoNavigationHandler,
      cellsTextDescription,
      cellsTextDescriptionPrivacy,
      cellsButtonList,
      cellsFormUserDataList,
      glomoTravelInsuranceManagerMX
    ]
  };
  return base;
};
