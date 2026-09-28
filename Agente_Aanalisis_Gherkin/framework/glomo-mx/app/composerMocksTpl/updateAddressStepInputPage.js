/* eslint-disable no-shadow */
'use strict';

const page = require('./common/_pages');

const { getLocalCurrency, useNames, getLanguage, createPrefixFromPageName, createSpinner } = require('./common/helpers/_utils');
const PAGE_NAME = 'updateAddressStepInputPage';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);

module.exports = (config) => {

  const maxSteps = 2;
  const updateAddressStepInputPage = page(config)(PAGE_NAME);
  const isNativeIos = config.nativeIos || false;
  const ANALYTICS = require('./analytics/_updateAddressPage')(config);

  const template = {
    tag: 'glomo-opx-template',
    properties: {
      animationType: 'verticalUp',
      headerHeight: 60,
      headerFixed: true,
      iOSFixedHeader: true,
      className: isNativeIos ?  'bg-core-blue header-fixed' : 'bg-core-blue',
      extraHeaderClass: 'bbva-core-blue',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_summary_step')]: {
            bind: 'open'
          },
          [getChannelName('hide_summary_step')]: {
            bind: 'close'
          },
          [getChannelName('reset_components')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('reset_components')]: {
            bind: 'close'
          },
          [getChannelName('show_summary_step_dont_edit')]: {
            bind: 'open'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'showConfirm'
          }
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'updateAddressStepInputPage',
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
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

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      secondaryClass: 'header--core',
      titleName: 'glomo-update-address-title-add-address',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_header_title')]: {
            bind: 'titleName'
          }
        },
        out: {
          [getChannelName('back_button')]: {
            bind: 'click-right-button',
            backStep: true
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
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('back-button')]: {
            bind: 'goBack'
          }
        }
      }
    }
  };

  const opxDm = {
    zone: 'app__main',
    tag: 'glomo-opx-update-address-dm',
    type: 'DM',
    properties: {
      lang: config.lang,
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: true,
      operativeName: 'UPDATEADDRESSSTEPINPUTPAGE',
      maxSteps: maxSteps,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'registerStep'
          },
          [getChannelName('next_step')]: {
            bind: 'goToNext'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('reset_components')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('show_confirm_channel')]: {
            bind: 'can-execute-changed'
          }
        }
      }
    }
  };

  const stepInput = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-input-address',
    properties: {
      className: 'medium-blue',
      stepClass: 'address-class',
      stepTitle: 'glomo-update-address-step-one-title',
      changeLabel: 'glomo-update-address-step-change-label',
      stepSubTitle: 'glomo-update-address-step-one-subtitle',
      stepId: 'step-update-address',
      currentStep: 1,
      maxSteps: maxSteps,
      active: true,
      collapsed: false,
      continueButton: 'glomo-update-address-accept-continue',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('response_list_places')]: {
            bind: 'setResponseListPlaces'
          },
          [getChannelName('error_on_get_list_places')]: {
            bind: 'errorGetListPlaces'
          },
          UPDATE_ADDRESS_PAGE_SEND_INPUT_ZIP_CODE: {
            bind: 'setInputPostalCode'
          },
          [getChannelName('clear_postal_code_input')]: {
            bind: 'resetPostalCode'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'collapsed-step'
          },
          [getChannelName('send_data_input_first_step')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('send_active_step_two')]: {
            bind: 'active-step-two'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('service_list_places')]: {
            bind: 'get-list-places-service'
          },
          [getChannelName('step_one_collapsed')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('disable_confirm_button')]: {
            bind: 'change-pressed'
          },
          [getChannelName('enabled_confirm_button')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('analytics_fire_app_started_continue')]: {
            bind: 'analytics-fire-app-started-continue'
          },
          updateAddressStepInputPage_OPEN_ERROR_MODAL: {
            bind: 'set-modal-error-list-places'
          },
          [getChannelName('analytics_handle_app_started_input')]: {
            bind: 'cells-molecule-input-focus'
          },
          [getChannelName('clear_postal_code_input')]: {
            bind: 'cells-molecule-input-clear'
          }
        }
      }
    }
  };

  const stepConfirm = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-link-list',
    properties: {
      className: 'icon-centered dt-no-padding font-default-subtitles content-padding content-spaced-m',
      stepId: 'step-confirm-data',
      stepTitle: 'glomo-update-address-step-two-title',
      stepClass: 'header-class-margin',
      stepSubTitle: 'glomo-update-address-step-two-subtitle',
      changeLabel: 'glomo-update-address-step-change-label',
      editViewPrimaryButtonLabel: 'glomo-update-address-step-two-confirm-change-accepted',
      editViewSecondaryButtonLabel: 'glomo-update-address-step-two-confirm-change-cancel',
      linksList: [
        {
          changeLabel: 'glomo-update-address-step-change-label',
          id: 'image',
          titleText: 'glomo-update-address-to-attach-imagen',
          activateContainerClick: true,
          texts: [ {text: 'glomo-update-address-step-two-texts-tex1'} ],
          buttonConfig: {icon: 'coronita:forward'}
        },
        {
          changeLabel: 'glomo-update-address-step-change-label',
          id: 'pdf',
          titleText: 'glomo-update-address-to-attach-pdf',
          activateContainerClick: true,
          texts: [ {text: 'glomo-update-address-step-two-texts-tex2'} ],
          buttonConfig: {icon: 'coronita:forward'}
        }
      ],
      linksListItemClass: 'link-list-item-border',
      currentStep: 2,
      maxSteps: maxSteps,
      active: false,
      collapsed: false,
      hiddenContinueButton: true,
      editEnabled: true,
      preventParse: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_summary_step')]: {
            bind: 'onContinue'
          },
          [getChannelName('show_collapsed_items')]: {
            bind: 'texts'
          },
          [getChannelName('show_collapsed_items_full')]: {
            bind: 'selectedLinkConfig'
          },
          change_view_summary_step_two: {
            bind: 'collapsed'
          },
          [getChannelName('send_data_input_first_step')]: {
            bind: 'active'
          },
          [getChannelName('send_active_step_two')]: {
            bind: 'active'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('disable_confirm_button')]: {
            bind: 'change-step-state'
          },
          [getChannelName('hide_summary_step')]: {
            bind: 'change-step-state'
          },
          [getChannelName('set_address_process_analytic')]: {
            bind: 'link-list-clicked'
          },
          NAVEGATION_TO_UPLOAD_FILES_IMAGE_PDF: {
            bind: 'link-list-clicked',
            link: {
              page: 'updateAddressUploadFilesPage'
            },
            analytics: ANALYTICS.FOOTPRINT_UPLOAD_FILE
          },
          [getChannelName('show_summary_step_dont_edit')]: {
            bind: 'edit-view-dont-change-pressed'
          },
          [getChannelName('show_summary_step_edit')]: {
            bind: 'edit-view-change-pressed'
          },
          [getChannelName('step_two_collapsed')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('enabled_confirm_button')]: {
            bind: 'continue-clicked'
          }
        }
      }
    }
  };

  const summary = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    properties: {
      showAddition: true,
      buttonLabel: 'update-national-id-add-national-id-step-button',
      cellsConnections: {
        out: {
          [getChannelName('send_confirm_continue')]: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };

  const geographicPlaces = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-geographicplaces',
    properties: {
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
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

  const customersGlobalApis = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      customersApiVersion: config.globalServices.versions.customersV1,
      customerAddressesApiVersion: config.globalServices.versions.customersV1,
      cellsConnections: {
        in: {
          [getChannelName('post_documents_process')]: {
            bind: 'postCustomerIdentificationProcessDocuments'
          },
          [getChannelName('put_address')]: {
            bind: 'putAddress'
          },
          [getChannelName('post_address')]: {
            bind: 'postAddress'
          },
          [getChannelName('send_customer_id')]: {
            bind: 'customerId'
          },
          [getChannelName('send_headers')]: {
            bind: 'headers'
          },
          [getChannelName('send_address_id')]: {
            bind: 'addressId'
          },
          [getChannelName('request_address')]: {
            bind: 'getCustomerAddresses'
          },
          [getChannelName('request_contacts')]: {
            bind: 'getCustomerContacts'
          }
        },
        out: {
          [getChannelName('set_response_document_process_success')]: {
            bind: 'post-customer-identification-process-documents-sucess'
          },
          [getChannelName('set_response_document_process_error')]: {
            bind: 'post-customer-identification-process-documents-error'
          },
          [getChannelName('set_response_put_address_success')]: {
            bind: 'put-contact-detail-address'
          },
          [getChannelName('set_response_post_address_success')]: {
            bind: 'post-contact-detail-address'
          },
          [getChannelName('set_response_post_address_error')]: {
            bind: 'error-on-post-contact-detail-address'
          },
          [getChannelName('set_response_put_address_error')]: {
            bind: 'error-on-put-contact-detail-address'
          },
          [getChannelName('set_response_get_address_success')]: {
            bind: 'set-customer-addresses'
          },
          [getChannelName('set_response_get_contacts_success')]: {
            bind: 'set-customer-contacts'
          }
        }
      }
    }
  };

  const glomoUpdateAddressDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-update-address-dm',
    properties: {
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'initFromNotification'
          },
          navigate_to_summary: {
            bind: 'setSummary'
          },
          [getChannelName('send_confirm_continue')]: {
            bind: 'onContinueProcess'
          },
          [getChannelName('send_data_input_first_step')]: {
            bind: 'setDataInputAddress'
          },
          [getChannelName('set_response_document_process_success')]: {
            bind: 'handleDocumentProcessSuccess'
          },
          [getChannelName('set_response_document_process_error')]: {
            bind: 'handleDocumentProcessError'
          },
          [getChannelName('set_response_put_address_success')]: {
            bind: 'handlePutAddressSuccess'
          },
          [getChannelName('set_response_put_address_error')]: {
            bind: 'handlePutAddressError'
          },
          [getChannelName('set_response_post_address_success')]: {
            bind: 'handlePostAddressSuccess'
          },
          [getChannelName('set_response_post_address_error')]: {
            bind: 'handlePostAddressError'
          },
          send_data_input_file: {
            bind: 'setDataInputFile'
          },
          send_data_update_address_input: {
            bind: 'setDataUpdateAddress'
          },
          [getChannelName('enabled_confirm_button')]: {
            bind: 'enableShowConfirm'
          },
          [getChannelName('disable_confirm_button')]: {
            bind: 'disableShowConfirm'
          },
          [getChannelName('step_one_collapsed')]: {
            bind: 'setStepInputCollapsed'
          },
          [getChannelName('step_two_collapsed')]: {
            bind: 'setStepLinkCollapsed'
          },
          [getChannelName('set_address_process_analytic')]: {
            bind: 'setAddressAnalytic'
          },
          NAVEGATION_TO_UPDATE_ADDRESS_STEP_INPUT_CONTINUE: {
            bind: 'setHeaderTitle'
          },
          [getChannelName('analytics_handle_app_started_input')]: {
            bind: 'handleAppStartedInput'
          },
          UPDATE_ADDRESS_ERROR_DOCUMENT_PROCCESS_RETRY: {
            bind: 'onContinueProcess'
          },
          UPDATE_ADDRESS_ERROR_POST_ADDRESS_RETRY: {
            bind: 'onContinueProcess'
          },
          UPDATE_ADDRESS_ERROR_PUT_ADDRESS_RETRY: {
            bind: 'onContinueProcess'
          },
          [getChannelName('set_response_get_address_success')]: {
            bind: 'parseGetAddresses'
          },
          [getChannelName('set_response_get_contacts_success')]: {
            bind: 'parseGetContacts'
          }
        },
        out: {
          [getChannelName('set_header_title')]: {
            bind: 'set-header-title'
          },
          [getChannelName('show_summary_step')]: {
            bind: 'continue-summary'
          },
          NAVIGATION_TO_UPDATE_ADDRESS_SUCCESS: {
            bind: 'navigation-to-update-address-succcess',
            link: {
              page: 'updateAddressSuccessPage',
              skipHistory: true
            }
          },
          updateaddressstepinputpage_set_success_title: {
            bind: 'set-success-title',
            link: {
              page: 'updateAddressSuccessPage',
              skipHistory: true
            }
          },
          [getChannelName('post_documents_process')]: {
            bind: 'request-document-process'
          },
          [getChannelName('put_address')]: {
            bind: 'request-put-address'
          },
          [getChannelName('post_address')]: {
            bind: 'request-post-address'
          },
          UPDATE_ADDRESS_PAGE_SHOW_ALERT_MANAGER_ERROR: {
            bind: 'show-error-modal'
          },
          [getChannelName('send_customer_id')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('send_headers')]: {
            bind: 'set-headers'
          },
          [getChannelName('send_address_id')]: {
            bind: 'set-address-id'
          },
          [getChannelName('show_collapsed_items')]: {
            bind: 'set-items-collapsed-input-file'
          },
          [getChannelName('show_collapsed_items_full')]: {
            bind: 'set-items-collapsed-input-file-full'
          },
          [getChannelName('reset_components')]: {
            bind: 'reset-data-address'
          },
          open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          [getChannelName('request_address')]: {
            bind: 'update-address-step-input-page-request-address'
          },
          [getChannelName('request_contacts')]: {
            bind: 'update-address-step-input-page-request-contacts'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'show-confirm-channel'
          },
          [getChannelName('fire-app-visit-analytic')]: {
            bind: 'analytics-fire-app-visit'
          },
          [getChannelName('analytics_fire_app_started_street')]: {
            bind: 'analytics-fire-app-started-street'
          },
          [getChannelName('analytics_fire_app_started_ext_number')]: {
            bind: 'analytics-fire-app-started-ext-number'
          },
          [getChannelName('analytics_fire_app_started_int_number')]: {
            bind: 'analytics-fire-app-started-int-number'
          },
          [getChannelName('analytics_fire_app_started_postal_code')]: {
            bind: 'analytics-fire-app-started-postal-code'
          },
          [getChannelName('fire-app-step-2-analytic')]: {
            bind: 'analytics-fire-app-step-2'
          },
          [getChannelName('fire-app-step-3-analytic')]: {
            bind: 'analytics-fire-app-step-3'
          },
          [getChannelName('fire-app-step-4-analytic')]: {
            bind: 'analytics-fire-app-step-4'
          },
          [getChannelName('fire-app-completed-analytic')]: {
            bind: 'analytics-fire-app-completed'
          }
        }
      }
    }
  };

  const managerAnalitycs = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-update-address-dm',
    tag: 'glomo-update-address-analytics-dm',
    properties: {
      customFields: 'actualizar direccion',
      cellsConnections: {
        in: {
          sent_adrress_custom_fields: {
            bind: 'customFields'
          },
          sent_adress_typology: {
            bind: 'typology'
          },
          [getChannelName('back_button')]: {
            bind: 'reset'
          },
          [getChannelName('fire-app-visit-analytic')]: {
            bind: 'visitAnalitycs'
          },
          [getChannelName('analytics_fire_app_started_street')]: {
            bind: 'startedStreet'
          },
          [getChannelName('analytics_fire_app_started_ext_number')]: {
            bind: 'extNumber'
          },
          [getChannelName('analytics_fire_app_started_int_number')]: {
            bind: 'intNumber'
          },
          [getChannelName('analytics_fire_app_started_postal_code')]: {
            bind: 'postalCode'
          },
          [getChannelName('analytics_fire_app_started_continue')]: {
            bind: 'startedContinue'
          },
          [getChannelName('fire-app-step-2-analytic')]: {
            bind: 'appStepTwo'
          },
          [getChannelName('fire-app-step-3-analytic')]: {
            bind: 'appStepThree'
          },
          [getChannelName('fire-app-step-4-analytic')]: {
            bind: 'appStepFour'
          },
          [getChannelName('fire-app-completed-analytic')]: {
            bind: 'appCompleted'
          }
        },
        out: {
          [getChannelName('fire-manager-app-visit-analytic')]: {
            bind: 'analytics-fire-app-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('analytics_manager_app_started_street')]: {
            bind: 'analytics-fire-started-street',
            analytics: ANALYTICS.APP_STARTED.STREET
          },
          [getChannelName('analytics_manager_app_started_ext_number')]: {
            bind: 'analytics-fire-ext-number',
            analytics: ANALYTICS.APP_STARTED.EXT_NUMBER
          },
          [getChannelName('analytics_manager_app_started_int_number')]: {
            bind: 'analytics-fire-int-number',
            analytics: ANALYTICS.APP_STARTED.IN_NUMBER
          },
          [getChannelName('analytics_manager_app_started_postal_code')]: {
            bind: 'analytics-fire-postal-code',
            analytics: ANALYTICS.APP_STARTED.CP
          },
          [getChannelName('analytics_manager_app_started_continue')]: {
            bind: 'analytics-fire-started-continue',
            analytics: ANALYTICS.APP_STARTED.CONTINUE
          },
          [getChannelName('fire-manager-app-step-2-analytic')]: {
            bind: 'analytics-fire-app-step-two',
            analytics: ANALYTICS.APP_STEP_2
          },
          [getChannelName('fire-manager-app-step-3-analytic')]: {
            bind: 'analytics-fire-app-step-three',
            analytics: ANALYTICS.APP_STEP_3
          },
          [getChannelName('fire-manager-app-step-4-analytic')]: {
            bind: 'analytics-fire-app-step-four',
            analytics: ANALYTICS.APP_STEP_4
          },
          [getChannelName('fire-manager-app-completed-analytic')]: {
            bind: 'analytics-fire-app-completed',
            analytics: ANALYTICS.APP_COMPLETED
          }
        }
      }
    }
  };

  const base = {
    hash: 'update-address-step-input',
    currentPage: {
      url: '/update-address-step-input'
    },
    pages: updateAddressStepInputPage,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      opxDm,
      stepInput,
      stepConfirm,
      summary,
      geographicPlaces,
      customersGlobalApis,
      glomoUpdateAddressDM,
      managerAnalitycs
    ]
  };
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', PAGE_NAME, ['put-contact-detail-address', 'error-on-put-contact-detail-address', 'post-contact-detail-address', 'error-on-post-contact-detail-address']);
  return base;
};
