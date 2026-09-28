'use strict';
module.exports = CONFIG => {
  const { SPINNER: getSpinner, createPrefixFromPageName, connectionsOut } = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pageName = 'fatcaValidation';
  const prefix = createPrefixFromPageName(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const analytics = require('./analytics/_fatcaValidation')();
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      hasFooter: true,
      footerHeight: 98,
      footerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : ''
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
        'fatca-translate-continue-button': 'fatca-validation-continue',
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_page_fatcaValidation: {
            bind: 'init'
          }
        },
        out: {
          [prefix + '_INIT_PAGE']: {
            bind: 'init-page'
          },
          [prefix + '_TRANSLATE_LABEL']: {
            bind: 'fatca-translate-continue-button'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
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
      className: 'header--core',
      search: false,
      back: true,
      rightIcon: 'coronita:close',
      titleName: 'fatca-validation-add-tax-residence',
      cellsConnections: {
        out: {
          [prefix + '_HEADER_RIGHT_ICON_TAPPED']: {
            bind: 'click-right-button'
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
      backAction: 'fatca-back-close-page',
      continue: 'fatca-success',
      cellsConnections: {
        in: {
          [prefix + '_BACKSTEP']: {
            bind: 'goBack'
          },
          [prefix + '_NAVIGATE_TO_FATCA_ADD']: {
            bind: 'navigateToPage'
          },
          [prefix + '_NAVIGATE_TO_FATCA_EDIT']: {
            bind: 'navigateToPage'
          },
          [prefix + '_ROUTE_TAX_RESIDENCE_SUCCESS']: {
            bind: 'navigate'
          }
        },
        out: {
          [prefix + '_CLOSE_PAGE']: {
            bind: 'fatca-back-close-page',
            backStep: true
          },
          [prefix + '_FATCA_VALIDATION_SUCCESS']: {
            bind: 'navigation-to-fatca-success',
            link: {
              page: 'fatcaValidationSuccess'
            }
          },
          [prefix + '_RESIDENCE_FORM_ADD']: {
            bind: 'navigation-to-fatca-residence-form-add',
            link: {
              page: 'fatcaValidationResidenceForm'
            }
          },
          [prefix + '_RESIDENCE_FORM_EDIT']: {
            bind: 'navigation-to-fatca-residence-form-edit',
            link: {
              page: 'fatcaValidationResidenceForm'
            }
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
      footerMessageFatca: 'fatca-terms-declaration',
      linkPanelButtonFixed: 'fatca-terms-affidavit',
      cellsConnections: {
        in: {
          navigation_profile_to_fatca_validation: {
            bind: 'setManagerInitialData'
          },
          [prefix + '_INIT_PAGE']: {
            bind: 'setLocales'
          },
          fatca_validation_residences_list_SAVE_EDITED_RESIDENCES: {
            bind: 'updateNonPresentialResidences'
          },
          [prefix + '_CREATE_FULL_SCREEN_MODAL']: {
            bind: 'createFullModalBody'
          },
          [prefix + '_CREATE_HALF_SCREEN_MODAL']: {
            bind: 'createHalfModalBody'
          },
          [prefix + '_DISMISS_LIMIT_RESIDENCES_ALERT']: {
            bind: 'completeAllstepsAutomatically'
          },
          [prefix + '_ALL_STEPS_INFORMATION']: {
            bind: 'getMultistepData'
          },
          [prefix + '_REQUEST_MODIFY_CUSTOMER']: {
            bind: 'validateModifyCustomer'
          },
          [prefix + '_RESPONSE_GET_CATALOGS_CATALOG']: {
            bind: 'handleCatalogsCountries'
          },
          [prefix + '_ERROR_GET_CATALOGS_CATALOG']: {
            bind: 'handleCatalogsCountriesError'
          },
          [prefix + '_SUCCESS_PATCH_CUSTOMER']: {
            bind: 'handleCustomersCustomerPatchResponse'
          },
          [prefix + '_ERROR_PATCH_CUSTOMER']: {
            bind: 'handleCustomersSaveError'
          },
          [prefix + '_SUCCESS_POST_TERMS']: {
            bind: 'handleCustomerPostTerms'
          },
          [prefix + '_ERROR_POST_TERMS']: {
            bind: 'handleCustomersSaveError'
          },
          [prefix + '_SUCCESS_POST_IDENTIFICATION_PROCESS']: {
            bind: 'handleIdentificationProcess'
          },
          [prefix + '_ERROR_POST_IDENTIFICATION_PROCESS']: {
            bind: 'handleCustomersSaveError'
          },
          [prefix + '_EXIT_FATCA_CONFIRMATION']: {
            bind: 'resetDmCloseFatca'
          },
          [prefix + '_RETRY_SAVING_CUSTOMER']: {
            bind: 'handleRetrySavingCustomer'
          },
          [prefix + '_TRANSLATE_LABEL']: {
            bind: 'translateLabel'
          },
          fatcaValidation_sign_close_modal: {
            bind: 'cancelSignatureProcess'
          },
          [prefix + '_DELETE_RESIDENCE_BUTTON_TAPPED']: {
            bind: 'createHalfModalBody'
          },
          [prefix + 'CREATE_AFFIDAVIT_MODAL']: {
            bind: 'createAffidavitModal'
          },
          blue_redirect_edit_profile_tax_residence: {
            bind: 'setManagerInitialData'
          }
        },
        out: {
          [prefix + 'FOOTER_MESSAGE_TERMS_AFFIDAVIT']: {
            bind: 'footer-message-teams-fatca'
          },
          [prefix + 'FOOTER_LINK_TERMS_AFFIDAVIT']: {
            bind: 'footer-link-panel-fatca'
          },
          [prefix + '_SET_CUSTOMER_ID']: {
            bind: 'manager-fatca-set-customer-id'
          },
          [prefix + '_SEND_ALL_STEPS_COMPLETED']: {
            bind: 'manager-fatca-ui-all-steps-completed-boolean'
          },
          [prefix + '_COMPLETE_ALL_STEPS']: {
            bind: 'manager-fatca-ui-complete-all-steps'
          },
          [prefix + '_COMPLETE_SOME_STEP']: {
            bind: 'manager-fatca-ui-complete-some-step'
          },
          [prefix + '_SEND_CHANGE_DATA_VIEW_FLAG']: {
            bind: 'manager-fatca-ui-change-data-view'
          },
          [prefix + '_SEND_CUSTOMER_DATA']: {
            bind: 'manager-fatca-ui-customer-data'
          },
          [prefix + '_SEND_COUNTRIES_LIST']: {
            bind: 'manager-fatca-ui-countries-list'
          },
          [prefix + '_OPEN_SOME_STEP']: {
            bind: 'manager-fatca-ui-open-some-step'
          },
          [prefix + '_RESTORE_ACCEPTANCE_TERMS']: {
            bind: 'manager-fatca-ui-restore-acceptance-terms'
          },
          [prefix + '_SHOW_FULL_SCREEN_MODAL']: {
            bind: 'manager-fatca-ui-show-full-screen-modal'
          },
          [prefix + '_SHOW_HALF_SCREEN_MODAL']: {
            bind: 'manager-fatca-ui-show-half-screen-modal'
          },
          [prefix + '_SEND_NON_PRESENTIAL_RESIDENCES']: {
            bind: 'manager-fatca-ui-non-presential-residences-list'
          },
          [prefix + '_LIMIT_RESIDENCES_MODAL_OPENED']: {
            bind: 'manager-fatca-ui-limit-of-residences-modal-opened'
          },
          [prefix + '_INVALID_RFC_MODAL_OPENED']: {
            bind: 'manager-fatca-ui-invalid-rfc-modal-opened'
          },
          [prefix + '_CHANGE_GLOBAL_APIS_CUSTOMERS_HEADERS']: {
            bind: 'manager-fatca-change-global-apis-headers'
          },
          [prefix + '_TURN_GLOBAL_APIS_CUSTOMERS_NATIVE']: {
            bind: 'manager-fatca-change-turn-native-flag'
          },
          [prefix + '_REQUEST_GET_CATALOGS_COUNTRIES']: {
            bind: 'manager-fatca-catalogs-catalog-get-request'
          },
          [prefix + '_REQUEST_PATCH_CUSTOMER']: {
            bind: 'manager-fatca-customers-customer-patch-request'
          },
          [prefix + '_REQUEST_POST_TERMS']: {
            bind: 'manager-fatca-customers-customer-terms-post-request'
          },
          [prefix + '_REQUEST_POST_IDENTFICATION_PROCESS']: {
            bind: 'manager-fatca-customers-identification-process-request'
          },
          [prefix + '_REQUEST_SEND_NOTIFICATION']: {
            bind: 'manager-fatca-notifications-notification-post-request'
          },
          [prefix + '_open_control_veil']: {
            bind: 'manager-fatca-open-veil'
          },
          [prefix + '_close_control_veil']: {
            bind: 'manager-fatca-close-veil'
          },
          [prefix + '_RESET_FATCA_VALIDATION_UI']: {
            bind: 'manager-fatca-ui-reset-fatca-validation'
          },
          [prefix + '_TAX_RESIDENCE_JUST_UPDATED']: {
            bind: 'manager-fatca-ui-residence-just-updated'
          },
          [prefix + '_ROUTE_TAX_RESIDENCE_SUCCESS']: {
            bind: 'manager-fatca-route-to-success-page'
          },
          [prefix + '_BACKSTEP']: {
            bind: 'manager-fatca-route-backstep'
          }
        }
      }
    }
  };
  const multistepFatca = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-fatca',
    familyPath: '@glomo-web-components/bbva-multistep-fatca',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          fatca_validation_residence_form_SEND_EDITED_RESIDENCE: {
            bind: 'setEditedNonPresentialResidence'
          },
          fatca_validation_residences_list_DELETE_RESIDENCE_FROM_WARNING: {
            bind: 'handleConfirmDeleteItem'
          },
          [prefix + '_SEND_ALL_STEPS_COMPLETED']: {
            bind: 'changeAllStepsCompletedContent'
          },
          [prefix + '_COMPLETE_ALL_STEPS']: {
            bind: 'completeAllSteps'
          },
          [prefix + '_COMPLETE_SOME_STEP']: {
            bind: 'completeStep'
          },
          [prefix + '_OPEN_SOME_STEP']: {
            bind: 'openStep'
          },
          [prefix + '_CONFIRM_CHANGE_DATA']: {
            bind: 'confirmChangeDataHandler'
          },
          [prefix + '_CONFIRM_UPDATE_INFO']: {
            bind: 'updatePresentialInfo'
          },
          [prefix + '_CONFIRM_INCORRECT_DATA']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_CONFIRM_INCORRECT_DATA_HEADER']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_SEND_CHANGE_DATA_VIEW_FLAG']: {
            bind: 'changeDataView'
          },
          [prefix + '_SEND_CUSTOMER_DATA']: {
            bind: 'customerData'
          },
          [prefix + '_SEND_COUNTRIES_LIST']: {
            bind: 'selectCountriesList'
          },
          [prefix + '_SHOW_CONFIRM_ZONE_FROM_EXIT_ALERT']: {
            bind: 'dismissCloseFatcaAlert'
          },
          [prefix + '_SEND_NON_PRESENTIAL_RESIDENCES']: {
            bind: 'nonPresentialResidences'
          },
          [prefix + '_RESTORE_ACCEPTANCE_TERMS']: {
            bind: 'restoreAcceptanceOfTerms'
          },
          [prefix + '_RESET_FATCA_FROM_WRONG_AFFIDAVIT_BUTTON']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_WRONG_AFFIDAVIT_CROSS']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_INVALID_RFC_BUTTON']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_INVALID_RFC_CROSS']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_LIMIT_RESIDENCES_WARNING']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_EXIT_ALERT']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_SAVING_ERROR']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_CATALOGS_ERROR']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_BLOCKING_ERROR_CROSS']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_FROM_BLOCKING_ERROR']: {
            bind: 'resetAndCloseFatcaValidation'
          },
          [prefix + '_RESET_FATCA_VALIDATION_UI']: {
            bind: 'resetFatcaValidation'
          },
          [prefix + '_HEADER_RIGHT_ICON_TAPPED']: {
            bind: 'validateExitConfirmation'
          }
        },
        out: {
          [prefix + '_CREATE_FULL_SCREEN_MODAL']: {
            bind: 'multistep-fatca-create-full-modal'
          },
          [prefix + '_CREATE_HALF_SCREEN_MODAL']: {
            bind: 'multistep-fatca-create-half-modal'
          },
          [prefix + '_ALL_STEPS_INFORMATION']: {
            bind: 'multistep-fatca-all-steps-information'
          },
          [prefix + '_HIDE_CONFIRM_BUTTON']: {
            bind: 'multistep-fatca-hide-confirm-button'
          },
          [prefix + '_EXIT_FATCA_CONFIRMATION']: {
            bind: 'multistep-fatca-exit-fatca'
          },
          [prefix + '_WRONG_INFORMATION_STEP_LOADED']: {
            bind: 'multistep-fatca-step-wrong-information-enabled'
          },
          [prefix + '_KEEP_FISCAL_RESIDENCES']: {
            bind: 'multistep-fatca-keep-tax-residences'
          },
          [prefix + '_ADDITIONAL_TAX_RESIDENCE_STEP_LOADED']: {
            bind: 'multistep-fatca-step-additional-tax-residence-enabled'
          },
          [prefix + '_ADD_BUTTON_TAPPED']: {
            bind: 'aggregation-editable-list-add-button-tapped'
          },
          [prefix + '_NAVIGATE_TO_FATCA_ADD']: {
            bind: 'navigate-fatca-residence-form-add',
            analytics: analytics._getInternalLink('add')
          },
          [prefix + '_EDIT_BUTTON_TAPPED']: {
            bind: 'aggregation-editable-list-edit-button-tapped'
          },
          [prefix + '_NAVIGATE_TO_FATCA_EDIT']: {
            bind: 'navigate-fatca-residence-form-edit',
            analytics: analytics._getInternalLink('edit')
          },
          [prefix + '_DELETE_RESIDENCE_BUTTON_TAPPED']: {
            bind: 'aggregation-editable-list-delete-residence-button-tapped'
          },
          [prefix + '_TAX_RESIDENCE_ADDED']: {
            bind: 'bbva-multistep-fatca-additional-residence-added'
          },
          [prefix + '_TAX_INFO_IS_CORRECT']: {
            bind: 'multistep-fatca-customer-data-is-correct'
          },
          [prefix + '_TAX_INFO_IS_INCORRECT']: {
            bind: 'multistep-fatca-customer-data-is-incorrect'
          },
          [prefix + '_STEP_TAX_INFORMATION_CHANGED']: {
            bind: 'multistep-fatca-step-tax-information-changed'
          },
          [prefix + '_MODIFY_CURRENT_STEP']: {
            bind: 'expandable-step-edit-step'
          }
        }
      }
    }
  };
  const analyticsFatca = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytics-manager-fatca-mx',
    familyPath: '@glomo-web-components/bbva-manager-fatca',
    render: 'litElement',
    properties: {
      options: {
        'privacy-notice': 'aviso de privacidad',
        'data_is_correct': 'informacion correcta',
        'data_is_incorrect': 'informacion incorrecta'
      },
      cellsConnections: {
        in: {
          [prefix + '_FATCA_CUSTOM_FIELDS']: {
            bind: 'customFields'
          },
          [prefix + '_FATCA_TYPOLOGY']: {
            bind: 'typology'
          },
          [prefix + '_STEP_TAX_INFORMATION_CHANGED']: {
            bind: 'resetCounter'
          },
          [prefix + '_RESET_FATCA_FROM_EXIT_ALERT']: {
            bind: 'resetData'
          },
          [prefix + '_SEND_CHANGE_DATA_VIEW_FLAG']: {
            bind: 'editMode'
          },
          [prefix + '_SEND_NON_PRESENTIAL_RESIDENCES']: {
            bind: 'residences'
          },
          [prefix + '_MODIFY_CURRENT_STEP']: {
            bind: 'resetPreviousStep'
          },
          [prefix + '_INIT_PAGE']: {
            bind: 'onAppPageVisit'
          },
          [prefix + '_SHOW_FULL_SCREEN_MODAL']: {
            bind: 'onAppStarted'
          },
          [prefix + '_TAX_INFO_IS_CORRECT']: {
            bind: 'onAppStarted'
          },
          [prefix + '_TAX_INFO_IS_INCORRECT']: {
            bind: 'onAppStarted'
          },
          [prefix + '_HIDE_CONFIRM_BUTTON']: {
            bind: 'onLastStepChanged'
          },
          signature_handle_required_first_step: {
            bind: 'onShowOtp'
          },
          [prefix + '_WRONG_INFORMATION_STEP_LOADED']: {
            bind: 'onAppStepPageView'
          },
          [prefix + '_ADDITIONAL_TAX_RESIDENCE_STEP_LOADED']: {
            bind: 'onAppStepPageView'
          }
        },
        out: {
          [prefix + '_APP_PAGE_VISIT']: {
            bind: 'bbva-analytics-manager-fatca-app-page-visit',
            analytics: analytics._getAppPageVisit
          },
          [prefix + '_APP_STARTED_PRIVACY']: {
            bind: 'bbva-analytics-manager-fatca-app-started',
            analytics: analytics._getAppStarted
          },
          [prefix + '_APP_STEP_SUMMARY']: {
            bind: 'bbva-analytics-manager-fatca-app-step-summary',
            analytics: analytics._getAppStep(2, 'confirmacion')
          },
          [prefix + '_APP_STEP_SHOW_OTP']: {
            bind: 'bbva-analytics-manager-fatca-app-step-otp',
            analytics: analytics._getAppStep(3, 'otp')
          },
          [prefix + '_PAGE_VIEW_WRONG_INFORMATION']: {
            bind: 'bbva-analytics-manager-fatca-page-view-wrong-information',
            analytics: analytics._getTaxInformationFootprint('informacion incompleta')
          },
          [prefix + '_PAGE_VIEW_ADDITIONAL_TAX_RESIDENCE']: {
            bind: 'bbva-analytics-manager-fatca-page-view-additional-tax-residence',
            analytics: analytics._getTaxInformationFootprint('residencia fiscal adicional')
          }
        }
      }
    }
  };
  const panelButtonFixed = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      className: 'no-gradient',
      buttonClass: 'positive',
      buttonText: 'fatca-manager-validation-continue',
      show: true,
      hidden: true,
      cellsConnections: {
        in: {
          [prefix + '_HIDE_CONFIRM_BUTTON']: {
            bind: 'hidden'
          },
          [prefix + 'FOOTER_MESSAGE_TERMS_AFFIDAVIT']: {
            bind: 'footerMessage'
          },
          [prefix + 'FOOTER_LINK_TERMS_AFFIDAVIT']: {
            bind: 'footerLink'
          }
        },
        out: {
          [prefix + '_REQUEST_MODIFY_CUSTOMER']: {
            bind: 'panel-button-fixed-item-click'
          },
          [prefix + 'CREATE_AFFIDAVIT_MODAL']: {
            bind: 'panel-button-fixed-footer-link-click'
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
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      apiAggregatorApiVersion: CONFIG.globalServices.versions.customersV1,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      headers: { 'Accept-Language': 'es' },
      native: CONFIG.native,
      cellsConnections: {
        in: {
          [prefix + '_SET_CUSTOMER_ID']: {
            bind: 'customerId'
          },
          [prefix + '_CHANGE_GLOBAL_APIS_CUSTOMERS_HEADERS']: {
            bind: 'headers'
          },
          [prefix + '_TURN_GLOBAL_APIS_CUSTOMERS_NATIVE']: {
            bind: 'native'
          },
          [prefix + '_REQUEST_PATCH_CUSTOMER']: {
            bind: 'patchCustomer'
          },
          [prefix + '_REQUEST_POST_TERMS']: {
            bind: 'postCustomerTerms'
          },
          [prefix + '_REQUEST_POST_IDENTFICATION_PROCESS']: {
            bind: 'postCustomerIdentificationProcessDocuments'
          }
        },
        out: {
          [prefix + '_SUCCESS_PATCH_CUSTOMER']: {
            bind: 'patch-customer-success'
          },
          [prefix + '_ERROR_PATCH_CUSTOMER']: {
            bind: 'error-on-patch-customer'
          },

          [prefix + '_SUCCESS_POST_TERMS']: {
            bind: 'post-customer-terms'
          },
          [prefix + '_ERROR_POST_TERMS']: {
            bind: 'error-on-post-customer-terms'
          },

          [prefix + '_SUCCESS_POST_IDENTIFICATION_PROCESS']: {
            bind: 'post-customer-identification-process-documents-sucess'
          },
          [prefix + '_ERROR_POST_IDENTIFICATION_PROCESS']: {
            bind: 'post-customer-identification-process-documents-error'
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
      native: CONFIG.native,
      headers: { 'Accept-Language': 'es' },
      countriesId: '01120074E',
      countriesPaginationKeys: [0, 50, 100, 150, 200, 250],
      cellsConnections: {
        in: {
          [prefix + '_REQUEST_GET_CATALOGS_COUNTRIES']: {
            bind: 'getCountries'
          }
        },
        out: {
          [prefix + '_open_control_veil']: {
            bind: 'open-veil'
          },
          [prefix + '_close_control_veil']: {
            bind: 'close-veil'
          },
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
  const globalApisNotifications = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-notifications',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      native: CONFIG.native,
      cellsConnections: {
        in: {
          [prefix + '_SET_CUSTOMER_ID']: {
            bind: 'customerId'
          },
          [prefix + '_REQUEST_SEND_NOTIFICATION']: {
            bind: 'sendNotification'
          }
        },
        out: {
          [prefix + '_SUCCESS_SEND_NOTIFICATION']: {
            bind: 'post-notification-success'
          },
          [prefix + '_ERROR_SEND_NOTIFICATION']: {
            bind: 'error-on-post-notification'
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
      url: '/fatca-validation'
    },
    hash: 'fatca-validation',
    template,
    components: [
      getSpinner(CONFIG),
      lifeCycle,
      moleculeHeader,
      navigationHandler,
      managerFatca,
      multistepFatca,
      analyticsFatca,
      panelButtonFixed,
      globalApisCustomers,
      globalApisCatalogs,
      globalApisNotifications
    ]
  };
  addCommonErrors(base.components)();
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', 'fatcaValidation',
    ['patch-customer-success', 'error-on-patch-customer',
      'post-customer-terms', 'error-on-post-customer-terms',
      'post-customer-identification-process-documents-sucess', 'post-customer-identification-process-documents-error']);
  const fatcaConnectionsOut = connectionsOut(base);
  fatcaConnectionsOut('cells-sign-operation-dm-mx').fatcaValidation_sign_close_modal = {
    bind: `signature-cancel-${pageName}`
  };
  return base;
};
