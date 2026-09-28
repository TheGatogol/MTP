/* eslint-disable complexity */
'use strict';
module.exports = CONFIG => {
  const fiscalSiteUrl = 'https://www.sat.gob.mx/aplicacion/53027/genera-tu-constancia-de-situacion-fiscal';
  const {useNames, createPrefixFromPageName, createSpinner: getSpinner} = require('./common/helpers/_utils');
  const PAGE_NAME = 'requestFiscalData';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const isNative = CONFIG.native || false;
  const ANALYTICS = require('./analytics/_requestFiscalData')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const spinner = getSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };
  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      topOnConfirm: true,
      className: isNativeIos ? 'bg-core-blue' : '',
      extraHeaderClass: 'bbva-dark-medium-blue',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('all_steps_completed_channel')]: {
            bind: 'showConfirm'
          }
        },
        out: {
          [getChannelName('SCROLL_TEMPLATE')]: {
            bind: 'opx-template-content-scroll'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    },
    propertiesSpherica: {
      headerFixed: false,
      iOSFixedHeader: false,
      className: ''
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false,
        'reset': true
      },
      cache: [],
      private: true,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          request_fiscal_data_reset_multistep: {
            bind: 'reset'
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
      backAction: 'close-operative',
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('reset_multistep')]: {
            bind: 'close-operative'
          },
          [getChannelName('exit_operative')]: {
            bind: 'close-operative',
            backStep: true
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      titleName: 'glomo-request-fiscal-data-success-header-title',
      secondaryClass: 'header--core',
      className: isNativeIos ? 'header--core-ios header--core' : 'header--core',
      rightIcon: 'coronita:close',
      back: true,
      cellsConnections: {
        out: {
          [getChannelName('reset_multistep')]: {
            bind: 'click-right-button'
          },
          [getChannelName('_close_button_pressed_channel')]: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };
  const dataManager = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-user-documentation-tax-data',
    familyPath: '@glomo-web-components/bbva-manager-user-documentation-tax-data',
    render: 'litElement',
    properties: {
      externalUrl: fiscalSiteUrl,
      isGlobalApp: true,
      cellsConnections: {
        in: {
          navigation_profile_to_edit_tax_data: {
            bind: 'getUserDocumentationTaxData'
          },
          [getChannelName('request_geographic_list_places')]: {
            bind: 'requestGeographicListPlaces'
          },
          [getChannelName('response_list_places')]: {
            bind: 'handleSuccessListPlaces'
          },
          [getChannelName('tax_data_open_external_link')]: {
            bind: 'openExternalLink'
          },
          [getChannelName('catalogs_records_success')]: {
            bind: 'handleSuccessCatalogRecords'
          },
          [getChannelName('tax_data_set_updated_customer_info')]: {
            bind: 'updatedCustomerInfo'
          },
          [getChannelName('confirm_tax_data_button_clicked')]: {
            bind: 'onConfirmUpdateTaxData'
          },
          [getChannelName('update_customer_tax_data_success')]: {
            bind: 'successPatchCustomerData'
          },
          [getChannelName('update_customer_tax_data_error')]: {
            bind: 'handlePatchCustomerDataError'
          },
          [getChannelName('error_on_get_list_places')]: {
            bind: 'handleErrorGeoCloseListPlaces'
          },
          [getChannelName('catalogs_records_error')]: {
            bind: 'handleErrorGetCatalogPagination'
          },
          [getChannelName('set-customer-data')]: {
            bind: 'setCustomerMainEmail'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          request_fiscal_data_tax_data_reset_multistep: {
            bind: 'getPreloadData'
          },
          global_blue_send_tax_recidency: {
            bind: 'getUserDocumentationTaxData'
          },
          global_blue_send_new_tax_recidency: {
            bind: 'customerTaxDataBlue'
          }
        },
        out: {
          [getChannelName('set_main_modal_items')]: {
            bind: 'manager-tax-data-set-main-modal-items'
          },
          [getChannelName('open-main-modal')]: {
            bind: 'main-open-modal'
          },
          [getChannelName('set_customer_id')]: {
            bind: 'manager-tax-data-set-customer-id'
          },
          [getChannelName('set_customer_personal_tax_data')]: {
            bind: 'manager-tax-data-set-personal-data'
          },
          [getChannelName('set_customer_tax_data_address')]: {
            bind: 'manager-tax-data-set-address-data'
          },
          [getChannelName('service_list_places')]: {
            bind: 'request-geographic-list-places'
          },
          [getChannelName('service_geographic_places')]: {
            bind: 'request-geographic-list-places-zip-code'
          },
          [getChannelName('set_geographic_list_places')]: {
            bind: 'manager-tax-data-set-list-places'
          },
          [getChannelName('request_catalogs_records')]: {
            bind: 'manager-tax-data-request-catalog-records'
          },
          [getChannelName('request_patch_tax_data')]: {
            bind: 'manager-tax-data-request-update-data'
          },
          [getChannelName('get_list_places_error')]: {
            bind: 'manager-tax-data-get-list-places-error'
          },
          [getChannelName('get_customer_detail')]: {
            bind: 'manager-tax-data-set-customer-email'
          },
          global_alert_manager_open_with_settings: {
            bind: 'manager-tax-data-update-customer-data-error'
          },
          [getChannelName('manager_tax_data_operation_number')]: {
            bind: 'manager-tax-data-operation-number',
            analytics: ANALYTICS.APP_COMPLETED
          },
          global_set_in_storage: {
            bind: 'manager-tax-data-set-local-storage'
          },
          request_fiscal_data_navigate_customer_tax_data_success: {
            bind: 'manager-tax-data-update-customer-data-success',
            link: {
              page: 'requestFiscalDataSuccess',
              skipHistory: true
            }
          },
          global_action_launcher_uri: {
            bind: 'navigate-to-external-sat-link'
          },
          modal_logout_automatic: {
            bind: 'logout-global-app'
          },
          global_log_out_and_navigate_to_external_link: {
            bind: 'navigate-to-external-link',
            'forward-to-native': true,
            backStep: true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          completed_first_step_blue_listening_mode: {
            bind: 'manager-tax-data-completed-first-step'
          },
          completed_second_step_blue_listening_mode: {
            bind: 'manager-tax-data-completed-second-step'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'manager-tax-data-update-customer-data-error'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };
  const customersDataprovider = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-customers',
    familyPath: '@glomo-web-components/bbva-dataprovider-customers',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      version: CONFIG.globalServices.versions.customersV1,
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          [getChannelName('set_customer_id')]: {
            bind: 'customerId'
          },
          [getChannelName('request_patch_tax_data')]: {
            bind: 'patchCustomerFiscalData'
          }
        },
        out: {
          [getChannelName('update_customer_tax_data_success')]: {
            bind: 'patch-mx-customer-fiscal-data-v1-success'
          },
          [getChannelName('update_customer_tax_data_error')]: {
            bind: 'patch-mx-customer-fiscal-data-v1-error'
          }
        }
      }
    }
  };
  const bbvaglobalcatalogsapidm = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-catalogs',
    properties: {
      host: CONFIG.globalServices.host,
      catalogsApiVersion: CONFIG.globalServices.versions.catalogs,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: isNative,
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          [getChannelName('request_catalogs_records')]: {
            bind: 'getRecordsList'
          }
        },
        out: {
          [getChannelName('catalogs_records_success')]: {
            bind: 'get-records-list-parsed-success'
          },
          [getChannelName('catalogs_records_error')]: {
            bind: 'error-on-get-catalog-pagination'
          }
        }
      }
    }
  };
  const geographicPlacesDP = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-geographicplaces',
    properties: {
      host: CONFIG.globalServices.host,
      native: isNative,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          [getChannelName('service_list_places')]: {
            bind: 'getListPlaces'
          }
        },
        out: {
          [getChannelName('response_list_places')]: {
            bind: 'set-list-places'
          },
          [getChannelName('error_on_get_list_places')]: {
            bind: 'error-on-get-list-places'
          }
        }
      }
    }
  };
  const geographicPlacesDPC = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-geographicplaces',
    familyPath: '@glomo-web-components/bbva-dataprovider-geographicplaces',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      version: CONFIG.globalServices.versions.geographicPlacesV1,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: isNative,
      cellsConnections: {
        in: {
          [getChannelName('service_geographic_places')]: {
            bind: 'getPlaces'
          }
        },
        out: {
          [getChannelName('response_list_places')]: {
            bind: 'get-geographicplaces-places-v0-success'
          },
          [getChannelName('error_on_get_list_places')]: {
            bind: 'get-geographicplaces-places-v0-error'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisCustomers = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-customers',
    tag: 'cells-dm-global-apis-customers-mx',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: isNative,
      cellsConnections: {
        in: {
          [getChannelName('get_customer_detail')]: {
            bind: 'getCustomerDetails'
          }
        },
        out: {
          [getChannelName('set-customer-data')]: {
            bind: 'get-customer-details-success'
          }
        }
      }
    }
  };
  const multistepComponent = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-user-documentation-tax-data',
    tagSpherica: 'bbva-multistep-user-documentation-tax-data-spherica',
    familyPath: '@glomo-web-components/bbva-multistep-user-documentation-tax-data',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-user-documentation-tax-data-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('set_main_modal_items')]: {
            bind: 'mainModalItems'
          },
          [getChannelName('open-main-modal')]: {
            bind: 'openMainModalInfo'
          },
          [getChannelName('set_customer_personal_tax_data')]: {
            bind: 'setFirstStepData'
          },
          [getChannelName('set_customer_tax_data_address')]: {
            bind: 'setSecondStepData'
          },
          [getChannelName('set_geographic_list_places')]: {
            bind: 'listPlacesByPostalCode'
          },
          [getChannelName('reset_multistep')]: {
            bind: 'reset'
          },
          open_control_veil: {
            bind: 'openMainModalInfo'
          },
          onboarding_foreigners_recalculate_status_bar_top: {
            bind: 'recalculateStatusBarTop'
          },
          completed_first_step_blue_listening_mode: {
            bind: 'completeStepOneBlue'
          },
          completed_second_step_blue_listening_mode: {
            bind: 'completeStepSecondBlue'
          }
        },
        out: {
          [getChannelName('reset_multistep')]: {
            bind: 'close-main-modal-event'
          },
          [getChannelName('close_main_modal_aspa')]: {
            bind: 'close-main-modal-event',
            backStep: true
          },
          [getChannelName('launch_page_visit_state')]: {
            bind: 'launch-page-visit-event',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('launch_step_2')]: {
            bind: 'launch-fire-app-step-0',
            analytics: ANALYTICS._appStep('2', '2 datos fiscales')
          },
          [getChannelName('launch_step_3')]: {
            bind: 'launch-fire-app-step-1',
            analytics: ANALYTICS._appStep('3', '3 domicilio fiscal')
          },
          [getChannelName('launch_step_4')]: {
            bind: 'launch-fire-app-step-2',
            analytics: ANALYTICS._appStep('4', '4 uso de datos fiscales')
          },
          [getChannelName('tax_data_open_continue_step')]: {
            bind: 'open-continue-step'
          },
          [getChannelName('request_geographic_list_places')]: {
            bind: 'customer-fiscal-address-list-places'
          },
          [getChannelName('all_steps_completed_channel')]: {
            bind: 'expandable-multistep-all-complete'
          },
          [getChannelName('tax_data_open_external_link')]: {
            bind: 'tax-data-open-external-link'
          },
          [getChannelName('tax_data_set_updated_customer_info')]: {
            bind: 'send-updated-customer-info'
          },
          request_fiscal_data_confirm_tax_data_button_clicked: {
            bind: 'send-updated-customer-info'
          },
          [getChannelName('tax_data_open_warning_info_modal')]: {
            bind: 'open-warning-info-modal'
          },
          [getChannelName('tax_data_send_first_step_personal_data')]: {
            bind: 'send-first-step-personal-data'
          },
          [getChannelName('tax_data_second_step_completed')]: {
            bind: 'second-step-completed'
          },
          [getChannelName('open_fiscal_regimen_info_modal')]: {
            bind: 'open-fiscal-regimen-info-modal'
          },
          request_fiscal_data_tax_data_reset_multistep: {
            bind: 'reset-multistep-event'
          }
        }
      }
    },
    propertiesSpherica: {
      openMainModalInfo: true,
      newCellsConnections: {
        add: {
          out: {
            'request_fiscal_data_close_button_pressed_channel': {
              bind: 'close-header-main',
              backStep: true
            }
          }
        }
      }
    }
  };
  const confirmButton = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      buttonText: 'bbva-multistep-user-documentation-tax-data-confirm',
      buttonClass: 'positive',
      cellsConnections: {
        in: {
          [getChannelName('all_steps_completed_channel')]: {
            bind: 'show'
          }
        },
        out: {
          [getChannelName('confirm_tax_data_button_clicked')]: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    }
  };
  const dataAnalyticsManager = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-analytics-manager-user-documentation-tax-data',
    familyPath: '@glomo-web-components/bbva-manager-user-documentation-tax-data',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('tax_data_open_continue_step')]: {
            bind: 'fireAppStarted'
          },
          [getChannelName('tax_data_open_warning_info_modal')]: {
            bind: 'fireAppStarted'
          },
          [getChannelName('set_customer_personal_tax_data')]: {
            bind: 'fireAppStep2'
          },
          [getChannelName('tax_data_send_first_step_personal_data')]: {
            bind: 'fireAppStep3'
          },
          [getChannelName('tax_data_second_step_completed')]: {
            bind: 'fireAppStep4'
          },
          [getChannelName('tax_data_set_updated_customer_info')]: {
            bind: 'fireAppStep5'
          },
          [getChannelName('open_fiscal_regimen_info_modal')]: {
            bind: 'fireHuellaPageView'
          },
          [getChannelName('update_customer_tax_data_error')]: {
            bind: 'fireHuellaGenericError'
          }
        },
        out: {
          [getChannelName('anaytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('anaytics_app_step_5')]: {
            bind: 'analytics-app-step-5',
            analytics: ANALYTICS._appStep('5', '5 confirmacion')
          },
          [getChannelName('anaytics_huella_page-view')]: {
            bind: 'analytics-huella-page-view',
            analytics: ANALYTICS.HUELLA_INFO_MODAL
          },
          [getChannelName('anaytics_huella_generic_error')]: {
            bind: 'analytics-huella-generic_error',
            analytics: ANALYTICS.HUELLA_GENERIC_ERROR
          }
        }
      }
    }
  };
  const componentsSpherica = [
    glomoAlertManagerSpherica,
    spinner,
    lifeCycle,
    navigationHandler,
    bbvaglobalcatalogsapidm,
    dataAnalyticsManager,
    dataManager,
    customersDataprovider,
    geographicPlacesDP,
    geographicPlacesDPC,
    cellsDmGlobalApisCustomers,
    multistepComponent
  ];
  const componentsCoronita = [
    ...componentsSpherica,
    confirmButton,
    header
  ];
  const base = {
    currentPage: {
      url: '/request-fiscal-data'
    },
    pages,
    template,
    components: isSpherica ? componentsSpherica : componentsCoronita
  };
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-dataprovider-customers', PAGE_NAME, ['patch-mx-customer-fiscal-data-v1-success', 'patch-mx-customer-fiscal-data-v1-error']);
  return sphericaPageUtils.spherize(base);
};
