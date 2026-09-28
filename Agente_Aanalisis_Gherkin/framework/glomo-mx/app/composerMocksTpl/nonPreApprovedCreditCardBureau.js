'use strict';

module.exports = CONFIG => {
  const UTILS = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName } = UTILS;
  const isNativeIos = CONFIG.nativeIos || false;
  const language = UTILS.getLanguage(CONFIG);
  const PAGE_NAME = 'nonPreApprovedCreditCardBureau';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const ANALYTICS = require('./analytics/_nonPreApprovedCreditCardBureau')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const { SPINNERSPHERICA: getSpinnerSpherica } = require('./common/helpers/_utils');
  const spinner = getSpinnerSpherica(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const base = {
    currentPage: {
      url: '/non-pre-approved-credit-card-bureau'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        hasFooter: false,
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'header--evening'
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'cells-template-coronita-spherica',
        type: 'modal'
      })
    },
    components: [
      spinner,
      {
        zone: 'app__header',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        type: 'UI',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_set_molecule_header')]: {
                bind: 'setProperties'
              }
            },
            out: {
              [getChannelName('_exit_header')]: {
                bind: 'click-right-button'
              },
              global_retargeting_reset_step: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: sphericaPageUtils.getProperties({
          componentName: 'cells-molecule-header-spherica',
          type: 'modal',
          override: {
            titleName: 'non-preapproved-credit-card-bureau–header-title-spherica',
            rightIconText: 'non-preapproved-credit-card-bureau–header-close-icon-text',
            cellsConnections: {
              out: {
                go_back_page: {
                  bind: 'click-right-button'
                },
                global_retargeting_reset_step: {
                  bind: 'click-right-button'
                }
              }
            }
          }
        })
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'nonPreApprovedCreditCardBureau',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false,
            'get-network-type': {'preferipv4': true },
            'get-device-platform': {},
            'get-current-position': {},
            'get-device-model': {},
            'get-device-manufacturer': {},
            'get-screen-dimensions': {}
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_nonPreApprovedCreditCardBureau: {
                bind: 'init'
              }
            },
            out: {
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              global_device_info_get_manufacturer: {
                bind: 'get-device-manufacturer'
              },
              global_device_info_get_model: {
                bind: 'get-device-model'
              },
              global_device_info_get_platform: {
                bind: 'get-device-platform'
              },
              global_device_info_get_network_type: {
                bind: 'get-network-type'
              },
              [getChannelName('get_device_geolocation')]: {
                bind: 'get-current-position'
              },
              global_retargeting_reset_step: {
                bind: 'init-page'
              },
              global_retargeting_initialize: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-text-description',
        tagSpherica: 'cells-text-description-spherica',
        type: 'UI',
        properties: {
          sizeImage: 'image--xl',
          cellsConnections: {
            in: {
              [getChannelName('_set_text_description')]: {
                bind: 'setProperties'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-list-file',
        tagSpherica: 'cells-list-file-spherica',
        type: 'UI',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_set_config_button')]: {
                bind: 'list'
              }
            },
            out: {
              [getChannelName('_autorization_info')]: {
                bind: 'cells-list-file-item-clicked'
              }
            }
          }
        },
        propertiesSpherica: sphericaPageUtils.getProperties({
          componentName: 'cells-list-file-spherica',
          type: 'modal',
          override: {
            variant: 'primary-alt',
            className: 'u-margin--grid',
            size: 'XL'
          }
        })
      },
      {
        zone: 'app__overlay',
        tag: 'cells-modal-card-advice',
        tagSpherica: 'cells-modal-card-advice-spherica',
        type: 'UI',
        properties: {
          iconSize: '20',
          className:
            'image-size-m image-to-top header--white-core-blue without-padding-left-right-button',
          cardAdviceClass: 'content-description set-margin-top',
          cellsConnections: {
            in: {
              [getChannelName('_open_modal_card_advice')]: {
                bind: 'openWithConfig'
              }
            },
            out: {
              [getChannelName('_on_close_event')]: {
                bind: 'cells-confirm-buttons-click-primary',
                backStep: true
              },
              global_retargeting_send_information_update: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              [getChannelName('_on_close_event')]: {
                bind: 'close',
                backStep: true
              },
              [getChannelName('_on_icon_click')]: {
                bind: 'on-icon-click-place',
                link: {
                  page: 'atmLocator'
                }
              }
            }
          }
        },
        propertiesSpherica: {
          headerTitle: 'non-preapproved-credit-card-bureau–header-title-spherica',
          className:
          'centered-icon-header xl-title-text no-image-card no-content-intermediate half-modal'
        }
      },
      {
        zone: 'app__overlay',
        tag: 'cells-modal-help',
        tagSpherica: 'cells-modal-help-spherica',
        type: 'UI',
        properties: {
          alertBoxClass:
            'color-icon-dark margin-size-icon-dark light-text-description',
          alertBoxClassAcceptButton: 'white-core-blue',
          iOSFixedHeader: isNativeIos,
          cellsConnections: {
            in: {
              [getChannelName(
                '_set_credit_card_history_help_modal_properties'
              )]: {
                bind: 'selectedConfig'
              },
              [getChannelName('_open_credit_card_history_help_modal')]: {
                bind: 'open'
              }
            }
          }
        },
        propertiesSpherica: {
          alertBoxClass: 'left-aligned-text'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-checkbox-dynamic-group',
        tagSpherica: 'cells-checkbox-dynamic-group-spherica',
        type: 'UI',
        properties: {
          className: 'padded checkbox-align-top',
          cellsConnections: {
            in: {
              [getChannelName('_set_checkboxes')]: {
                bind: 'setProperties'
              }
            },
            out: {
              [getChannelName('_all_checks_checked')]: {
                bind: 'cells-checkbox-dynamic-group-checkbox-all-checked-keys'
              },
              [getChannelName('_checkbox_unchecked')]: {
                bind: 'cells-checkbox-dynamic-group-checkbox-unchecked'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary-alt'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        tagSpherica: 'cells-icon-message-spherica',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_set_icon_message')]: {
                bind: 'setProperties'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_all_checks_checked')]: {
                bind: 'enablePrimaryButton'
              },
              [getChannelName('_checkbox_unchecked')]: {
                bind: 'disablePrimaryButton'
              },
              [getChannelName('_set_confirm_buttons')]: {
                bind: 'setProperties'
              }
            },
            out: {
              [getChannelName('_confirm_button_clicked')]: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              global_retargeting_go_next_step: {
                bind: 'cells-confirm-buttons-click-primary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'cells-dm-global-apis-customers-bgadpmock',
        tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native,
          otpId: PAGE_NAME,
          cellsConnections: {
            in: {
              [getChannelName('_post_validate_digital_file')]: {
                bind: 'postValidateDigitalFile'
              }
            },
            out: {
              [getChannelName('_post_validate_digital_file_successful_response')]: {
                bind: 'successful-post-validate-digital-file'
              },
              global_retargeting_form_submission: {
                bind: 'successful-post-validate-digital-file'
              },
              [getChannelName('_post_validate_digital_file_error_response')]: {
                bind: 'failed-post-validate-digital-file'
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
          host: CONFIG.globalServices.host,
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native,
          otpId: PAGE_NAME,
          cellsConnections: {
            in: {
              [getChannelName('_set_customer_id')]: {
                bind: 'customerId'
              },
              [getChannelName('_get_customer_terms')]: {
                bind: 'getCustomerTerms'
              },
              [getChannelName('_post_customer_terms')]: {
                bind: 'postCustomerTerms'
              }
            },
            out: {
              [getChannelName('_get_customer_terms_successful_response')]: {
                bind: 'set-customer-terms'
              },
              global_navigate_non_preapproved_credit_card: {
                bind: 'post-customer-terms',
                link: {
                  page: 'nonPreApprovedCreditCard',
                  skipHistory: true
                }
              },
              global_retargeting_go_next_step: {
                bind: 'post-customer-terms'
              },
              [getChannelName('_post_customer_terms_error_response')]: {
                bind: 'error-on-post-customer-terms'
              },
              [getChannelName('_open_otp')]: {
                bind: 'signature-required-first-step-dm',
                analytics: ANALYTICS.HUELLA_OTP
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-non-preapproved-credit-card-manager',
        tag: 'glomo-non-preapproved-credit-card-bureau-manager',
        properties: {
          language,
          images: {
            tipsDollar: './images/nonPreApprovedCreditCard/tips_dollar.svg',
            requestCancelledImage:
              './images/nonPreApprovedCreditCard/request_cancelled.svg'
          },
          nonPreApprovedCreditCardTermTypeId: 'BD-MX-AA-AUTBUR-001',
          cellsConnections: {
            in: {
              global_user_id: {
                bind: 'cacheChannel'
              },
              global_client_id: {
                bind: 'clientId'
              },
              contract_product_section_oc_banner_non_preapproved_credit_card_clicked:
              {
                bind: 'initPage'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'initPage'
              },
              'contract_product_section_oc_banner_non-preapproved-credit-card_clicked':
              {
                bind: 'initPage'
              },
              [getChannelName('_autorization_info')]: {
                bind: 'setPropertiesCreditHistoryAuthorizationHelpModal'
              },
              [getChannelName('_confirm_button_clicked')]: {
                bind: 'setPostCustomerTerms'
              },
              [getChannelName('_exit_header')]: {
                bind: 'manageBackButton'
              },
              global_non_preapproved_credit_card_on_accept_exit_bureau: {
                bind: 'setResetProperties'
              },
              global_navigate_non_preapproved_credit_card: {
                bind: 'setResetProperties'
              },
              [getChannelName(
                '_post_validate_digital_file_successful_response'
              )]: {
                bind: 'successfulPostValidateDigitalFileResponse'
              },
              [getChannelName('_get_customer_terms_successful_response')]: {
                bind: 'getCustomerTermsSuccessfulResponse'
              },
              [getChannelName('_post_validate_digital_file_error_response')]: {
                bind: 'postValidateDigitalFileErrorResponse'
              },
              [getChannelName('_post_customer_terms_error_response')]: {
                bind: 'postCustomerTermsErrorResponse'
              }
            },
            out: {
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_non_preapproved_credit_card_modal: {
                bind: 'show-missing-documents-personal-data-modal'
              },
              [getChannelName('_set_config_button')]: {
                bind: 'set-list-file-properties'
              },
              [getChannelName('_set_checkboxes')]: {
                bind: 'set-checkbox-properties'
              },
              [getChannelName('_set_molecule_header')]: {
                bind: 'set-molecule-header-properties'
              },
              [getChannelName('_set_text_description')]: {
                bind: 'set-text-description-properties'
              },
              [getChannelName('_set_icon_message')]: {
                bind: 'set-icon-message-properties'
              },
              [getChannelName('_set_confirm_buttons')]: {
                bind: 'set-confirm-buttons-properties'
              },
              [getChannelName('failed_response')]: {
                bind: 'failed-post-customer-terms-response'
              },
              [getChannelName('_post_terms_test')]: {
                bind: 'post-terms'
              },
              global_alert_manager_open_with_settings: {
                bind: 'show-close-confirm'
              },
              global_retargeting_reset_step: {
                bind: 'show-close-confirm'
              },
              [getChannelName('_open_modal_card_advice')]: {
                bind: 'open-with-config-modal-card-advice'
              },
              global_retargeting_contracted_product: {
                bind: 'open-with-config-modal-card-advice'
              },
              [getChannelName(
                '_set_credit_card_history_help_modal_properties'
              )]: {
                bind: 'set-credit-history-help-modal-properties'
              },
              [getChannelName('_open_credit_card_history_help_modal')]: {
                bind: 'open-credit-history-help-modal'
              },
              [getChannelName('_post_validate_digital_file')]: {
                bind: 'post-validate-digital-file'
              },
              [getChannelName('_get_customer_terms')]: {
                bind: 'get-customer-terms'
              },
              [getChannelName('_set_customer_id')]: {
                bind: 'set-customer-id',
                analytics: ANALYTICS.HUELLA_BUREAU
              },
              [getChannelName('_post_customer_terms')]: {
                bind: 'post-customer-terms'
              },
              [getChannelName('_back_to_entry_point')]: {
                bind: 'back-to-entry-point',
                backStep: true
              },
              global_retry_error: {
                bind: 'retry-error'
              }
            }
          }
        },
        propertiesSpherica: {
          alertBoxVariant: 'primary-alt',
          fullHeight: false,
          openMaximized: false,
          unfixed: false,
          newCellsConnections: {
            add: {
              in: {
                go_back_page: {
                  bind: 'manageBackButton'
                }
              },
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'show-close-confirm'
                },
                global_non_preapproved_credit_card_modal_spherica: {
                  bind: 'show-missing-documents-personal-data-modal'
                }
              }
            },
            remove: {
              out: [
                'global_alert_manager_open_with_settings',
                'global_non_preapproved_credit_card_modal'
              ]
            }
          },
          isSpherica
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-mobile-geolocation',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('get_device_geolocation')]: {
                bind: 'getCurrentPosition'
              }
            },
            out: {
              NPA_DEVICE_GEOLOCATION: {
                bind: 'current-position-available'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-non-preapproved-credit-card-manager',
        tag: 'glomo-analytics-non-preapproved-credit-card-manager',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_open_modal_card_advice')]: {
                bind: 'setAppCompleted'
              },
              global_non_preapproved_credit_card_modal: {
                bind: 'setAppCompleted'
              }
            },
            out: {
              npa_credit_card_app_completed: {
                bind: 'set-app-completed',
                analytics: ANALYTICS.APP_COMPLETED
              }
            }
          }
        }
      }
    ]
  };

  if (isSpherica) {
    base.components.push({
      zone: 'app__transactional',
      type: 'CC',
      tag: 'glomo-alert-manager-spherica',
      properties: {
        moleculeLinkVariant: isSpherica && 'primary-alt',
        cellsConnections: {
          in: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'openWithSettings'
            },
            global_non_preapproved_credit_card_modal_spherica: {
              bind: 'openWithSettings'
            },
            global_alert_modal_close: {
              bind: 'close'
            }
          },
          out: {
            global_non_preapproved_credit_card_on_accept_missing_documents_data_spherica: {
              bind: 'alert-NPA-CREDIT-CARD-MISSING-DOCUMENTS-DATA-accept',
              backStep: true
            },
            global_non_preapproved_credit_card_on_cancel_missing_documents_data_spherica: {
              bind: 'alert-NPA-CREDIT-CARD-MISSING-DOCUMENTS-DATA-cancel',
              backStep: true
            },
            global_non_preapproved_credit_card_bureau_exit_accept_spherica: {
              bind: 'alert-CREDIT-BUREAU-MANAGER-EXIT-accept',
              backStep: true
            },
            global_alert_modal_close: {
              bind: 'show-map',
              link: {
                page: 'atmLocator',
                skipHistory: true
              }
            }
          }
        }
      }
    });
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector(
    'cells-dm-global-apis-customers-bgadpmock',
    'nonPreApprovedCreditCardBureau',
    ['post-customer-terms', 'error-on-post-customer-terms']
  );

  addRetryErrors(base)([
    {
      id: 'RETRY-POST-VALIDATE-DIGITAL-FILE',
      acceptRetry: {
        bind: 'dispatchValidateDigitalfile',
        component: 'glomo-non-preapproved-credit-card-bureau-manager'
      },
      cancelRetry: {
        bind: 'backToEntryPoint',
        component: 'glomo-non-preapproved-credit-card-bureau-manager'
      },
      successEvent: {
        bind: 'successful-post-validate-digital-file',
        component: 'cells-dm-global-apis-customers-mx-bgadpmock'
      },
      acceptCallForHelp: {
        bind: 'backToEntryPoint',
        component: 'glomo-non-preapproved-credit-card-bureau-manager'
      }
    },
    {
      id: 'RETRY-POST-CUSTOMER-TERMS',
      acceptRetry: {
        bind: 'setPostCustomerTerms',
        component: 'glomo-non-preapproved-credit-card-bureau-manager'
      },
      cancelRetry: {
        bind: 'backToEntryPoint',
        component: 'glomo-non-preapproved-credit-card-bureau-manager'
      },
      successEvent: {
        bind: 'post-customer-terms',
        component: 'cells-dm-global-apis-customers-bgadpmock'
      },
      acceptCallForHelp: {
        bind: 'backToEntryPoint',
        component: 'glomo-non-preapproved-credit-card-bureau-manager'
      }
    }
  ]);

  return sphericaPageUtils.spherize(base);
};
