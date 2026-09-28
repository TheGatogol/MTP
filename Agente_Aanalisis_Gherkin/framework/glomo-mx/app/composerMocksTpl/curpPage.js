'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'curpPage';
  const SPINNER = utils.createSpinner(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const MAX_STEPS = 2;
  const ANALYTICS = require('./analytics/_curpPage')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  if (isSpherica) {
    SPINNER.tag = 'cells-spinner-veil-spherica';
  }
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          curpPage_MODAL_ERROR_SPHERICA: {
            bind: 'openWithSettings'
          },
          curpPage_CONFIRM_OPEN_MODAL_SPHERICA: {
            bind: 'openWithSettings'
          }
        },
        out: {
          curpPage_CANCEL_CONFIRM_MODAL: {
            bind: 'alert-update-confirm-curp-cancel',
            backStep: true
          }
        }
      }
    }
  };

  const configButtons = {
    buttons: {
      primary: {
        text: 'Continuar',
        class: 'primary',
        action: 'primary-btn-tapped'
      }
    }
  };

  const base = {
    currentPage: {
      url: '/curp-page',
      params: []
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        animationType: 'verticalUp',
        headerHeight: 60,
        headerFixed: true,
        iOSFixedHeader: true,
        className: 'bg-core-blue header-fixed',
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [PAGE_NAME + '_SCROLL_ZONE']: {
              bind: 'scrollItemIntoView'
            },
            [PAGE_NAME + '_SHOW_CONFIRM_CHANNEL']: {
              bind: 'showConfirm'
            },
            [PAGE_NAME + '_SHOW_CONFIRM_OFFER_PAGE']: {
              bind: 'showConfirm'
            },
            [PAGE_NAME + '_INIT_CHANNEL']: {
              bind: 'recalculateHeader'
            },
            [PAGE_NAME + '_ALL_STEPS_SCROLL']: {
              bind: 'scrollItemIntoView'
            },
            [PAGE_NAME + '_RESET_SCROLL']: {
              bind: 'resetLayerScroll'
            }
          },
          out: {
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-handle-life-cycle',
        properties: {
          pageName: PAGE_NAME,
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
              [PAGE_NAME + '_INIT_CHANNEL']: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_TITLE_NAME_CHANNEL']: {
                bind: 'titleName'
              }
            },
            out: {
              [PAGE_NAME + '_HEADER_CLOSE']: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          secondaryBtn: '#btnRight',
          leftIcon: '',
          titleName: 'glomo-curp-management-title-add',
          rightIcon: 'coronita:close',
          className: 'header--white header',
          rightIconText: 'cells-molecule-header-spherica-close',
          cellsConnections: {
            out: {
              curpPage_HEADER_CLOSE: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-curp-management-dm',
        properties: {
          decorateSteps: true,
          maxSteps: MAX_STEPS,
          cellsConnections: {
            in: {
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'reset'
              },
              navigation_profile_to_curp_validation: {
                bind: 'validateDataCurp'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackButton'
              },
              [PAGE_NAME + '_REGISTER_STEP']: {
                bind: 'registerStep'
              },
              [PAGE_NAME + '_GO_NEXT_STEP']: {
                bind: 'goToNext'
              },
              [PAGE_NAME + '_COLLAPSE_STEP']: {
                bind: 'goToStep'
              },
              [PAGE_NAME + '_COLLAPSE_INPUT']: {
                bind: 'inputMessageCollapsed'
              },
              [PAGE_NAME + '_ALL_STEPS_COLLAPSED']: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [PAGE_NAME + '_ALL_STEPS_COLLAPSED_CHANGE']: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [PAGE_NAME + '_HELP_ICON_INFO']: {
                bind: 'setModalInfoIcon'
              },
              [PAGE_NAME + '_LIST_FILE_INFO']: {
                bind: 'setModalListFile'
              },
              [PAGE_NAME + '_CONTINUE_CONFIRM_MODAL']: {
                bind: 'hideSpinner'
              },
              [PAGE_NAME + '_VALIDATE_CURP']: {
                bind: 'validateCurp'
              },
              [PAGE_NAME + '_RESPONSE_CIVIL_SEARCH']: {
                bind: 'setResponseCivilRegister'
              },
              [PAGE_NAME + '_ERROR_CIVIL_SEARCH']: {
                bind: 'setResponseCivilRegisterError'
              },
              [PAGE_NAME + '_RESPONSE_LIST_RECORDS']: {
                bind: 'setResponseListRecords'
              },
              [PAGE_NAME + '_ERROR_LIST_RECORDS']: {
                bind: 'setResponseListRecordsError'
              },
              [PAGE_NAME + '_SEND_CONFIRM']: {
                bind: 'requestModifyCurp'
              },
              [PAGE_NAME + '_RESPONSE_PATCH_CUSTOMER']: {
                bind: 'setResponsePatchCustomer'
              },
              [PAGE_NAME + '_ERROR_PATCH_CUSTOMER']: {
                bind: 'setResponsePatchCustomerError'
              },
              [PAGE_NAME + '_CURP_CIVIL_REGISTER_ERROR']: {
                bind: 'retryRequest'
              },
              [PAGE_NAME + '_CURP_MODIFY_ERROR']: {
                bind: 'retryRequest'
              },
              [PAGE_NAME + '_CURP_RECORDS_ERROR']: {
                bind: 'retryRequest'
              },
              [PAGE_NAME + '_ACTIVE_MODAL_FALSE']: {
                bind: 'activeModalClosed'
              },
              [PAGE_NAME + '_ACTIVE_MODAL_TRUE']: {
                bind: 'activeModalOpened'
              },
              [PAGE_NAME + '_ACTIVE_MODAL_UPDATE']: {
                bind: 'activeModal'
              }
            },
            out: {
              [PAGE_NAME + '_CONFIRM_OPEN_MODAL']: {
                bind: 'open-modal-with-info',
                analytics: ANALYTICS.footprints.confirm
              },
              [PAGE_NAME + '_TITLE_NAME_CHANNEL']: {
                bind: 'set-header-title'
              },
              [PAGE_NAME + '_SET_FORMAT_REGEX']: {
                bind: 'set-regex-format'
              },
              [PAGE_NAME + '_SET_INPUT_LABEL']: {
                bind: 'set-input-label'
              },
              [PAGE_NAME + '_SET_DESCRIPTION_INPUT_MESSAGE']: {
                bind: 'text-description'
              },
              [PAGE_NAME + '_SHOW_ICON_MESS']: {
                bind: 'show-icon-message'
              },
              [PAGE_NAME + '_INVALID_INPUT']: {
                bind: 'input-invalid-curp'
              },
              [PAGE_NAME + '_ICON_MESSAGE_ERROR']: {
                bind: 'text-error-icon'
              },
              [PAGE_NAME + '_ICON_MESSAGE_SIZE']: {
                bind: 'text-error-icon-size'
              },
              [PAGE_NAME + '_ICON_MESSAGE_ICON']: {
                bind: 'icon-error-message'
              },
              [PAGE_NAME + '_MOLECULE_INPUT_READ_ONLY']: {
                bind: 'molecule-input-message-read-only'
              },
              [PAGE_NAME + '_DISABLED_MOLECULE_INPUT']: {
                bind: 'disabled-molecule-input-message'
              },
              [PAGE_NAME + '_DISABLE_BUTTON']: {
                bind: 'manual-validation-button-first-step'
              },
              [PAGE_NAME + '_DISABLE_BUTTON_LIST']: {
                bind: 'disable-button-second-step'
              },
              [PAGE_NAME + '_SHOW_SKELETON']: {
                bind: 'show-skeleton-cells-step-list'
              },
              [PAGE_NAME + '_SET_CHANGE_LABEL']: {
                bind: 'set-change-label'
              },
              [PAGE_NAME + '_SEARCH_CURP']: {
                bind: 'search-civil-register-curp'
              },
              [PAGE_NAME + '_GET_LIST_RECORDS']: {
                bind: 'search-list-records'
              },
              [PAGE_NAME + '_SET_DATA_CONFIRM']: {
                bind: 'set-data-user-confirm'
              },
              [PAGE_NAME + '_SHOW_SKELETON']: {
                bind: 'show-skeleton-cells-step-list'
              },
              [PAGE_NAME + '_WITHOUT_REASON_TEXT']: {
                bind: 'set-without-reason-text'
              },
              [PAGE_NAME + '_SHOW_CONFIRM_CHANNEL']: {
                bind: 'can-execute-changed'
              },
              [PAGE_NAME + '_SCROLL_ZONE']: {
                bind: 'cells-scroll-zone'
              },
              [PAGE_NAME + '_ALL_STEPS_SCROLL']: {
                bind: 'cells-all-steps-scroll'
              },
              [PAGE_NAME + '_SHOW_CONFIRM_OFFER_PAGE']: {
                bind: 'all-steps-collapsed-changed'
              },
              [PAGE_NAME + '_SET_CUSTOMER_ID']: {
                bind: 'set-customer-id'
              },
              [PAGE_NAME + '_PATCH_CUSTOMER']: {
                bind: 'request-patch-modify-customer'
              },
              [PAGE_NAME + '_MODAL_ERROR']: {
                bind: 'glomo-curp-modal-info',
                analytics: ANALYTICS.app.started.privacyNotice
              },
              [PAGE_NAME + '_ACTIVE_BEFORE_RESET']: {
                bind: 'set-active'
              },
              [PAGE_NAME + '_BACKSTEP']: {
                bind: 'go-to-profile',
                backStep: true
              },
              [PAGE_NAME + '_PROCESS_SUCCESS']: {
                bind: 'curp-update-process-succcess',
                link: {
                  page: 'curpSuccessPage',
                  skipHistory: true
                }
              },
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'hide-spinner'
              },
              [PAGE_NAME + '_RESET_SCROLL']: {
                bind: 'reset-scroll'
              },
              [PAGE_NAME + '_COLLAPSED_STEP']: {
                bind: 'set-collapsed'
              },
              [PAGE_NAME + '_RESET_INPUT_DATA']: {
                bind: 'reset-input-data'
              },
              [PAGE_NAME + '_CLOSE_ACTIVE_MODAL']: {
                bind: 'close-active-modal'
              },
              [PAGE_NAME + '_FIRE_APP_VISIT_ANALYTIC']: {
                bind: 'analytics-fire-app-visit',
                analytics: ANALYTICS.app.pageVisit
              },
              [PAGE_NAME + '_FIRE_APP_STEP_2_ANALYTIC']: {
                bind: 'analytics-fire-app-step-2',
                analytics: ANALYTICS.app.step2
              },
              [PAGE_NAME + '_FIRE_APP_COMPLETED_ANALYTIC']: {
                bind: 'analytics-fire-app-completed',
                analytics: ANALYTICS.app.completed
              },
              [PAGE_NAME + '_FIRE_APP_FOOTPRINT_ERROR_INVALID_ANALYTIC']: {
                bind: 'analytics-fire-footprint-error-invalid-curp',
                analytics: ANALYTICS.footprints.invalidCurp
              },
              [PAGE_NAME + '_FIRE_APP_FOOTPRINT_ERROR_NON_EXISTENT_ANALYTIC']: {
                bind: 'analytics-fire-footprint-error-non-existent-curp',
                analytics: ANALYTICS.footprints.dontCurp
              },
              [PAGE_NAME + '_FIRE_APP_FOOTPRINT_USER_MX_ANALYTIC']: {
                bind: 'analytics-fire-footprint-user-mx',
                analytics: ANALYTICS.footprints.userMx
              },
              [PAGE_NAME + '_FIRE_APP_FOOTPRINT_USER_FOREIGN_EXISTENT_ANALYTIC']: {
                bind: 'analytics-fire-footprint-user-foreign',
                analytics: ANALYTICS.footprints.userForeign
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              in: {

              },
              out: {
                curpPage_MODAL_ERROR_SPHERICA: {
                  bind: 'glomo-curp-modal-info',
                  analytics: ANALYTICS.app.started.privacyNotice
                },
                curpPage_CONFIRM_OPEN_MODAL_SPHERICA: {
                  bind: 'open-modal-with-info',
                  analytics: ANALYTICS.footprints.confirm
                }
              }
            },
            remove: {
              out: [
                'curpPage_MODAL_ERROR',
                'curpPage_CONFIRM_OPEN_MODAL',
                'curpPage_SET_CHANGE_LABEL'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-input-message',
        tagSpherica: 'cells-step-input-message-spherica',
        properties: {
          className: 'step-curp-update',
          stepId: 'step-curp-update',
          stepClass: 'curp-class',
          filledTextValueClass: 'cells-step-input-message__filled__normal',
          isText: true,
          currentStep: 1,
          maxSteps: MAX_STEPS,
          stepTitle: 'cells-step-input-step-title',
          title: 'cells-step-input-message-curp-title',
          scrolled: true,
          active: true,
          showHelpIcon: true,
          showSkeleton: true,
          manualDisableButtonValue: true,
          showSkeletonWithOutInputValidation: true,
          showSkeletonRemaining: true,
          additionalInfo: true,
          additionalLink: true,
          iconAlertColor: 'color-bbva-navy',
          showSkeletonClass: 'molecule-input-uppercase-text',
          maxChars: 18,
          infoMessageType: 'info-dark',
          titleTextDescription: 'cells-step-input-message-curp-title-text-description',
          mainTextDescription: 'cells-step-input-message-curp-main-text-dexcription',
          infoMessageDescription: 'cells-step-input-message-curp-info-message',
          allowedChars: '[a-zA-Z0-9]',
          disableSetCollapse: true,
          infoMessage: '',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_INIT_CHANNEL']: {
                bind: 'initialize'
              },
              [PAGE_NAME + '_DISABLED_MOLECULE_INPUT']: {
                bind: 'disableManuallyInput'
              },
              [PAGE_NAME + '_SET_INPUT_LABEL']: {
                bind: 'inputLabel'
              },
              [PAGE_NAME + '_RESET_INPUT_DATA']: {
                bind: 'inputWithData'
              },
              [PAGE_NAME + '_SET_FORMAT_REGEX']: {
                bind: 'regexValidationFromInputText'
              },
              [PAGE_NAME + '_SET_DESCRIPTION_INPUT_MESSAGE']: {
                bind: 'description'
              },
              [PAGE_NAME + '_DISABLE_BUTTON']: {
                bind: 'manualDisableButtonValue'
              },
              [PAGE_NAME + '_SET_CHANGE_LABEL']: {
                bind: 'stepChangeLabel'
              },
              [PAGE_NAME + '_SHOW_ICON_MESS']: {
                bind: 'showIconMessage'
              },
              [PAGE_NAME + '_INVALID_INPUT']: {
                bind: 'invalidInputValue'
              },
              [PAGE_NAME + '_ICON_MESSAGE_ERROR']: {
                bind: 'errorMessage'
              },
              [PAGE_NAME + '_ICON_MESSAGE_SIZE']: {
                bind: 'infoMessageIconSize'
              },
              [PAGE_NAME + '_ICON_MESSAGE_ICON']: {
                bind: 'iconErrorMessage'
              },
              [PAGE_NAME + '_WITHOUT_REASON_TEXT']: {
                bind: 'input'
              },
              [PAGE_NAME + '_MOLECULE_INPUT_READ_ONLY']: {
                bind: 'readOnly'
              }
            },
            out: {
              [PAGE_NAME + '_HELP_ICON_INFO']: {
                bind: 'help-icon-pressed',
                analytics: ANALYTICS.app.started.tooltip
              },
              [PAGE_NAME + '_LIST_FILE_INFO']: {
                bind: 'cells-list-file-item-clicked'
              },
              [PAGE_NAME + '_LIST_FILE_INFO']: {
                bind: 'show-link-list-file'
              },
              [PAGE_NAME + '_REGISTER_STEP']: {
                bind: 'register-step'
              },
              [PAGE_NAME + '_GO_NEXT_STEP']: {
                bind: 'continue-pressed'
              },
              [PAGE_NAME + '_VALIDATE_CURP']: {
                bind: 'continue-pressed',
                analytics: ANALYTICS.app.started.continue
              },
              [PAGE_NAME + '_COLLAPSE_STEP']: {
                bind: 'change-pressed'
              },
              [PAGE_NAME + '_COLLAPSE_INPUT']: {
                bind: 'change-pressed'
              },
              [PAGE_NAME + '_ALL_STEPS_COLLAPSED']: {
                bind: 'go-next-step'
              },
              [PAGE_NAME + '_ALL_STEPS_COLLAPSED_CHANGE']: {
                bind: 'change-pressed'
              },
              [PAGE_NAME + '_ANALYTIC_INPUT']: {
                bind: 'cells-molecule-input-focus',
                analytics: ANALYTICS.app.started.curp
              }
            }
          }
        },
        propertiesSpherica: {
          showTitleHelpIcon: true,
          stepClass: 'curp-class',
          stepChangeLabel: 'cells-step-input-message-step-change-label-spherica',
          additionalClass: 'fixed-bottom',
          description: 'cells-step-input-message-curp-description'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-step-list',
        tagSpherica: 'cells-step-list-spherica',
        properties: {
          stepId: 'step-confirm-data',
          stepTitle: 'cells-step-list-curp-title',
          description: 'glomo-curp-management-step-list-curp-description-text',
          currentStep: 2,
          maxSteps: MAX_STEPS,
          collapsed: false,
          isButton: true,
          hiddenHeader: false,
          hideCurrentStep: false,
          active: false,
          cellsConnections: {
            in: {
              [PAGE_NAME + '_INIT_CHANNEL']: {
                bind: 'initialize'
              },
              [PAGE_NAME + '_GO_NEXT_STEP']: {
                bind: 'active'
              },
              [PAGE_NAME + '_ACTIVE_BEFORE_RESET']: {
                bind: 'active'
              },
              [PAGE_NAME + '_DISABLE_BUTTON_LIST']: {
                bind: 'disableButton'
              },
              [PAGE_NAME + '_SET_DATA_CONFIRM']: {
                bind: 'data'
              },
              [PAGE_NAME + '_SHOW_SKELETON']: {
                bind: 'isSkeleton'
              },
              [PAGE_NAME + '_COLLAPSED_STEP']: {
                bind: 'collapsed'
              }
            },
            out: {
              [PAGE_NAME + '_REGISTER_STEP']: {
                bind: 'register-step'
              },
              [PAGE_NAME + '_GO_NEXT_STEP']: {
                bind: 'continue-pressed',
                analytics: ANALYTICS.app.step3

              },
              [PAGE_NAME + '_COLLAPSE_STEP']: {
                bind: 'change-pressed'
              }
            }
          }
        },
        propertiesSpherica: {
          stepTitle: 'cells-step-list-curp-title-spherica',
          extraclass: '',
          additionalClass: 'fixed-bottom'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-customers',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          customersApiVersion: '1',
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_SEARCH_CURP']: {
                bind: 'postCivilRegistriesSearch'
              }
            },
            out: {
              [PAGE_NAME + '_RESPONSE_CIVIL_SEARCH']: {
                bind: 'post-civil-registries-search-success'
              },
              [PAGE_NAME + '_ERROR_CIVIL_SEARCH']: {
                bind: 'post-civil-registries-search-error'
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
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          headers: { 'Accept-Language': 'es' },
          native: !!CONFIG.native,
          apiAggregatorApiVersion: '1',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              [PAGE_NAME + '_PATCH_CUSTOMER']: {
                bind: 'patchCustomer'
              }
            },
            out: {
              [PAGE_NAME + '_RESPONSE_PATCH_CUSTOMER']: {
                bind: 'patch-customer-success'
              },
              [PAGE_NAME + '_ERROR_PATCH_CUSTOMER']: {
                bind: 'error-on-patch-customer'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-catalogs',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_GET_LIST_RECORDS']: {
                bind: 'getRecordsLimits'
              }
            },
            out: {
              [PAGE_NAME + '_RESPONSE_LIST_RECORDS']: {
                bind: 'set-records-limits'
              },
              [PAGE_NAME + '_ERROR_LIST_RECORDS']: {
                bind: 'error-on-get-records-limits'
              }
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        type: 'UI',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        properties: {
          className: 'no-shadow',
          config: configButtons,
          cellsConnections: {
            in: {},
            out: {
              [PAGE_NAME + '_SEND_CONFIRM']: {
                bind: 'primary-btn-tapped',
                analytics: ANALYTICS.app.step4
              }
            }
          }
        }
      }
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', PAGE_NAME, ['patch-customer-success', 'error-on-patch-customer']);

  return sphericaPageUtils.spherize(base);
};
