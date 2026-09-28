'use strict';
module.exports = CONFIG => {
  const { SPINNER: getSpinner, createPrefixFromPageName } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pageName = 'fatcaValidationResidenceForm';
  const prefix = createPrefixFromPageName(pageName);
  const analytics = require('./analytics/_fatcaValidation')();
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      headerFixed: true,
      iOSFixedHeader: isNativeIos
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'fatca-residence-form-page-init': true,
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_page_fatcaValidationResidenceForm: {
            bind: 'init'
          }
        },
        out: {
          [prefix + '_INIT']: {
            bind: 'fatca-residence-form-page-init',
            analytics: analytics._getTaxInformationFootprint('anadir residencia fiscal')
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'fatca-form-back-close-page',
      cellsConnections: {
        in: {
          [prefix + '_CLOSE_FATCA_FORM']: {
            bind: 'goBack'
          }
        },
        out: {
          [prefix + '_CLOSE_PAGE']: {
            bind: 'fatca-form-back-close-page',
            backStep: true
          }
        }
      }
    }
  };
  const moleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--trasnparent',
      rightIcon: 'coronita:close',
      titleName: 'fatca-validation-add-residence',
      cellsConnections: {
        out: {
          [prefix + '_CLOSE_FATCA_FORM']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const managerFatca = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-fatca',
    familyPath: '@glomo-web-components/bbva-manager-fatca',
    render: 'litElement',
    properties: {
      currentPage: 'form',
      cellsConnections: {
        in: {
          [`__bridge_page_${pageName}`]: {
            bind: 'resetFormOnLeave'
          },
          fatca_validation_residences_list_ADD_BUTTON_TAPPED: {
            bind: 'validateFormData'
          },
          fatca_validation_ADD_BUTTON_TAPPED: {
            bind: 'validateFormData'
          },
          fatca_validation_EDIT_BUTTON_TAPPED: {
            bind: 'validateFormData'
          },
          fatca_validation_residences_list_EDIT_BUTTON_TAPPED: {
            bind: 'validateFormData'
          },
          [prefix + '_RESPONSE_GET_CATALOGS_CATALOG']: {
            bind: 'handleCatalogsCountries'
          },
          [prefix + '_ERROR_GET_CATALOGS_CATALOG']: {
            bind: 'handleCatalogsCountriesErrorOnFormPage'
          },
          [prefix + '_REQUEST_VALIDATE_FORMAT']: {
            bind: 'requestValidateFormat'
          },
          [prefix + '_RETRY_VALIDATE_FORMAT']: {
            bind: 'retryValidateFormat'
          },
          [prefix + '_RESPONSE_POST_VALIDATE_FORMAT']: {
            bind: 'handleCustomersValidateFormatResponse'
          },
          [prefix + '_ERROR_POST_VALIDATE_FORMAT']: {
            bind: 'handleCustomersValidateFormaError'
          }
        },
        out: {
          [prefix + '_CLEAN_COUNTRIES_LIST']: {
            bind: 'manager-fatca-catalogs-clean-countries'
          },
          [prefix + '_REQUEST_GET_CATALOGS_CATALOG']: {
            bind: 'manager-fatca-catalogs-catalog-get-request'
          },
          [prefix + '_SEND_COUNTRIES_LIST']: {
            bind: 'manager-fatca-ui-countries-list'
          },
          [prefix + '_SEND_EDITABLE_ITEM']: {
            bind: 'manager-fatca-ui-editable-item'
          },
          [prefix + '_SHOW_HALF_SCREEN_MODAL']: {
            bind: 'manager-fatca-ui-show-half-screen-modal'
          },
          [prefix + '_REQUEST_POST_VALIDATE_FORMAT']: {
            bind: 'manager-fatca-customers-identity-documents-validate-format-post-request'
          },
          [prefix + '_SEND_EDITED_RESIDENCE']: {
            bind: 'manager-fatca-ui-edited-residence'
          },
          [prefix + '_open_control_veil']: {
            bind: 'manager-fatca-open-veil'
          },
          [prefix + '_close_control_veil']: {
            bind: 'manager-fatca-close-veil'
          },
          [prefix + '_CLOSE_FATCA_FORM']: {
            bind: 'manager-fatca-route-backstep'
          }
        }
      }
    }
  };
  const globalApisCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      native: CONFIG.native,
      cellsConnections: {
        in: {
          [prefix + '_REQUEST_POST_VALIDATE_FORMAT']: {
            bind: 'postValidateFormat'
          }
        },
        out: {
          [prefix + '_RESPONSE_POST_VALIDATE_FORMAT']: {
            bind: 'post-validate-format-success'
          },
          [prefix + '_ERROR_POST_VALIDATE_FORMAT']: {
            bind: 'post-validate-format-error'
          }
        }
      }
    }
  };
  const residenceForm = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-editable-list',
    familyPath: '@glomo-web-components/bbva-aggregation-editable-list',
    render: 'litElement',
    properties: {
      formMode: true,
      descriptionLabel: 'bbva-aggregation-editable-list-add-description',
      linkLabel: 'bbva-aggregation-editable-list-cancel',
      infoMessage: 'bbva-aggregation-editable-list-info-message',
      inputClass: 'spacing-bottom-text',
      formSelectlabel: 'bbva-aggregation-editable-list-list-item-country',
      formTextLabel: 'bbva-aggregation-editable-list-list-item-number-complete',
      cellsConnections: {
        in: {
          [`__bridge_page_${pageName}`]: {
            bind: 'resetFormView'
          },
          [prefix + '_SEND_COUNTRIES_LIST']: {
            bind: 'selectOptionsList'
          },
          [prefix + '_SEND_EDITABLE_ITEM']: {
            bind: 'editableItem'
          }
        },
        out: {
          [prefix + '_CANCEL_EDIT_RESIDENCE']: {
            bind: 'aggregation-editable-list-cancel-edit-residence'
          },
          [prefix + '_CLOSE_FATCA_FORM']: {
            bind: 'aggregation-editable-list-back-to-list'
          },
          [prefix + '_REQUEST_VALIDATE_FORMAT']: {
            bind: 'aggregation-editable-list-request-validate-format'
          }
        }
      }
    }
  };
  const globalApisCatalogs = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-catalogs',
    properties: {
      host: CONFIG.globalServices.host,
      catalogsApiVersion: CONFIG.globalServices.versions.catalogs,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      native: CONFIG.native,
      countriesId: '01120074E',
      countriesPaginationKeys: [0, 50, 100, 150, 200, 250],
      cellsConnections: {
        in: {
          [prefix + '_REQUEST_GET_CATALOGS_CATALOG']: {
            bind: 'getCountries'
          },
          [prefix + '_RETRY_GET_CATALOG']: {
            bind: 'getCountries'
          },
          [prefix + '_CLEAN_COUNTRIES_LIST']: {
            bind: 'countries'
          }
        },
        out: {
          [prefix + '_RESPONSE_GET_CATALOGS_CATALOG']: {
            bind: 'set-countries'
          },
          [prefix + '_ERROR_GET_CATALOGS_CATALOG']: {
            bind: 'error-on-get-countries'
          }
        }
      }
    }
  };
  getSpinner(CONFIG).properties.cellsConnections.in = {
    [prefix + '_open_control_veil']: {
      bind: 'show'
    },
    [prefix + '_close_control_veil']: {
      bind: 'hide'
    }
  };
  const base = {
    currentPage: {
      url: '/fatca-validation-residence-form'
    },
    hash: 'fatca-validation-residence-form',
    template,
    components: [
      getSpinner(CONFIG),
      lifeCycle,
      navigationHandler,
      moleculeHeader,
      managerFatca,
      globalApisCustomers,
      globalApisCatalogs,
      residenceForm
    ]
  };
  addCommonErrors(base.components)();
  return base;
};