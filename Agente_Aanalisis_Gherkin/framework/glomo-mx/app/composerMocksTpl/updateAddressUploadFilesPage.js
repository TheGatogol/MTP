/* eslint-disable no-shadow */
'use strict';
const moment = require('moment');
module.exports = (config) => {

  const page = require('./common/_pages');

  const { getLocalCurrency, useNames, getLanguage, createPrefixFromPageName } = require('./common/helpers/_utils');
  const PAGE_NAME = 'updateAddressUploadFilesPage';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);

  const updateAddressUploadFilesPage = page(config)(PAGE_NAME);
  const isNativeIos = config.nativeIos || false;
  const isNative = config.native || false;
  const ANALYTICS = require('./analytics/_updateAddressPage')(config);

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      hasFooter: false,
      className: isNativeIos ? 'ios-top-padding' : '',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'bbva-core-white',
      delayScroll: 0,
      fixOffsetScroll: 0,
      headerFixed: true,
      iOSFixedHeader: true,
      handleStoppedScroll: true,
      preventScrollWithOverlay: true
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'updateAddressUploadFilesPage',
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
      className: 'header--white header-fixed iOS-fixed-header',
      rightIcon: 'coronita:close',
      rightIconSize: '20',
      titleName: 'glomo-update-address-to-attach-imagen',
      cellsConnections: {
        in: {
          [getChannelName('change_title_header')]: {
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
          [getChannelName('back_button')]: {
            bind: 'goBack'
          }
        }
      }
    }
  };

  const textDescriptionInformation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      title: 'glomo-update-address-text-description-information-title',
      mainDescription: 'glomo-update-address-text-description-information-description',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          }
        }
      }
    }
  };

  const selectModal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-select-modal',
    properties: {
      className: 'custom-modal',
      isInputStyle: true,
      title: 'glomo-update-address-select-modal-title',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_item_selected')]: {
            bind: 'itemSelected'
          }
        },
        out: {
          [getChannelName('open_select_modal_event')]: {
            bind: 'open-document-modal-selector'
          }
        }
      }
    }
  };

  const modalOptionsAddress = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-modal-selector',
    properties: {
      opened: false,
      icon: 'coronita:checkmark',
      hideCheckIcon: 'true',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_modal_options')]: {
            bind: 'opened'
          },
          [getChannelName('set_items_document_types')]: {
            bind: 'items'
          },
          [getChannelName('send_reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('set_item_selected_modal_options')]: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };

  const iconMessageModal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    properties: {
      className: 'help-message',
      type: 'info-dark-blue',
      icon: 'coronita:info',
      message: 'glomo-update-address-icon-message-modal-message',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_text_icon_message_modal')]: {
            bind: 'message'
          }
        }
      }
    }
  };

  const dateInput = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-date-input',
    properties: {
      className: 'standard-form',
      label: 'glomo-date-input-label-description',
      dateFormat: 'DD MMMM YYYY',
      infoMessageTypeIcon: 'info-dark',
      inputType: 'text',
      icon: 'coronita:calendar',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_min_date')]: {
            bind: 'min'
          },
          [getChannelName('set_max_date')]: {
            bind: 'max'
          },
          [getChannelName('set_native_default_date')]: {
            bind: 'nativeDefaultDate'
          },
          [getChannelName('show_components_others')]: {
            bind: 'hidden'
          },
          [getChannelName('send_reset_page')]: {
            bind: 'resetDate'
          },
          [getChannelName('reset-inputs')]: {
            bind: 'resetDate'
          },
          [getChannelName('send_data_error_message_date')]: {
            bind: 'errorMessage'
          },
          [getChannelName('set_invalid_status_date')]: {
            bind: 'invalid'
          },
          [getChannelName('set_invalid_status_date_message')]: {
            bind: '_showErrorMessage'
          }
        },
        out: {
          [getChannelName('set_date_input')]: {
            bind: 'date-changed'
          }
        }
      }
    }
  };

  const messageHelpORC = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      className: 'title-gap-bottom-none text-description-height',
      title: 'glomo-update-address-text-description-message-help-ocr',
      titleIcon: 'help',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_components_id')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('on_click_info_ocr')]: {
            bind: 'cells-text-description-title-icon-click'
          }
        }
      }
    }
  };

  const inputsID = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-form-text-input',
    properties: {
      className: 'form-text-description',
      hideTitle: true,
      hideSubtitle: true,
      hideContinueButton: true,
      hidden: true,
      isInputObserver: true,
      accessKeyButtonEvent: 'read-inputs-event',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_components_id')]: {
            bind: 'hidden'
          },
          [getChannelName('inputs_id_properties')]: {
            bind: 'componentsProperties'
          },
          [getChannelName('send_data_error_input_id')]: {
            bind: 'validateNumericErrorMessage'
          },
          [getChannelName('send_reset_page')]: {
            bind: 'resetInputs'
          },
          [getChannelName('reset-inputs')]: {
            bind: 'resetInputs'
          },
          navigate_to_summary: {
            bind: 'resetInputs'
          }
        },
        out: {
          [getChannelName('send_inputs_id')]: {
            bind: 'read-inputs-event'
          }
        }
      }
    }
  };

  const messageInfoIdPdf = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      mainDescription: 'glomo-update-address-text-description-message-info-id-pdf',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_message_info_pdf')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const chooseButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      className: 'confirm-buttons-margin-top',
      classButtonLink: true,
      hidden: false,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_text_config_choose_button')]: {
            bind: 'config'
          },
          [getChannelName('show_choose_button')]: {
            bind: 'hidden'
          },
          [getChannelName('send_reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('on_click_choose_button')]: {
            bind: 'get-photo-plugin'
          }
        }
      }
    }
  };

  const  listFileUploaded = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-list-file',
    properties: {
      showDelete: true,
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_list_file_item')]: {
            bind: 'hidden'
          },
          [getChannelName('send_name_file')]: {
            bind: 'list'
          },
          [getChannelName('send_reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('on_tap_show_file')]: {
            bind: 'cells-list-file-item-clicked'
          },
          [getChannelName('on_tap_delete_file')]: {
            bind: 'cells-list-file-delete'
          }
        }
      }
    }
  };

  const chooseButtonReverse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      className: 'confirm-buttons-margin-left',
      classButtonLink: true,
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_text_config_choose_button_reverse')]: {
            bind: 'config'
          },
          [getChannelName('show_button_reverse_id')]: {
            bind: 'hidden'
          },
          [getChannelName('send_reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('on_click_choose_button_reverse')]: {
            bind: 'get-photo-plugin-reverse'
          }
        }
      }
    }
  };

  const  listFileUploadedReverse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-list-file',
    properties: {
      showDelete: true,
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('show_list_file_item_reverse')]: {
            bind: 'hidden'
          },
          [getChannelName('send_name_file_reverse')]: {
            bind: 'list'
          },
          [getChannelName('send_reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('on_tap_show_reverse')]: {
            bind: 'cells-list-file-item-clicked'
          },
          [getChannelName('on_tap_delete_file-reverse')]: {
            bind: 'cells-list-file-delete'
          }
        }
      }
    }
  };

  const textDescriptionPersonalData = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      title: 'TRATAMIENTO DE DATOS PERSONALES',
      mainDescription: 'Antes de continuar, consulta el aviso de privacidad.',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          }
        }
      }
    }
  };

  const  fileListNoticePrivacy = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-list-file',
    properties: {
      className: 'body-size-customize',
      list: [
        {
          classList: 'body',
          id: 'noticePrivacyId',
          text: 'glomo-update-address-list-file-notice-privacy'
        }
      ],
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          }
        },
        out: {
          [getChannelName('on_tap_notice-privacy')]: {
            bind: 'cells-list-file-item-clicked',
            analytics: ANALYTICS.FOOTPRINT_PRIVACY_NOTICE
          }
        }
      }
    }
  };

  const  iconMessageInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    properties: {
      className: 'h-gutter-top',
      type: 'info-dark',
      icon: 'coronita:info',
      message: 'glomo-update-address-icon-message-info-message',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          }
        }
      }
    }
  };

  const continueButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      unfixed: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('send_config_continue_button')]: {
            bind: 'config'
          },
          [getChannelName('enable_button')]: {
            bind: 'enablePrimaryButton'
          },
          [getChannelName('disable_button')]: {
            bind: 'disablePrimaryButton'
          }
        },
        out: {
          [getChannelName('on_continue_button')]: {
            bind: 'continue-button'
          }
        }
      }
    }
  };

  const glomoUpdateAddressFileDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-update-address-file-dm',
    properties: {
      isNative: isNative,
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'reset'
          },
          [getChannelName('on_tap_show_file')]: {
            bind: 'onTapShowFile'
          },
          [getChannelName('on_tap_show_reverse')]: {
            bind: 'onTapShowReverse'
          },
          [getChannelName('on_tap_delete_file')]: {
            bind: 'onTapDeleteFile'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_DELETE_FILE: {
            bind: 'deleteFile'
          },
          [getChannelName('on_tap_delete_file-reverse')]: {
            bind: 'onTapDeleteFileReverse'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_DELETE_FILE_REVERSE: {
            bind: 'deleteFileReverse'
          },
          [getChannelName('open_select_modal_event')]: {
            bind: 'openModal'
          },
          [getChannelName('set_item_selected_modal_options')]: {
            bind: 'setSelectedFilter'
          },
          [getChannelName('on_click_info_ocr')]: {
            bind: 'openAlerManagerInfoOcr'
          },
          [getChannelName('on_click_choose_button')]: {
            bind: 'openAlerManagerAdvicePluginCameraPdf'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_SHOW_MODAL_OPTIONS_CAMERA: {
            bind: 'openModalChooseButton'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_SHOW_MODAL_OPTIONS_PDF: {
            bind: 'openModalChooseButton'
          },
          [getChannelName('on_click_choose_button_reverse')]: {
            bind: 'openModalChooseButtonReverse'
          },
          NAVEGATION_TO_ON_TAP_OPTIONS_MEDIACAPTURE: {
            bind: 'openPluginMediaCapture'
          },
          [getChannelName('on_tap_notice-privacy')]: {
            bind: 'onTapNoticePrivacy'
          },
          NAVEGATION_TO_UPLOAD_FILES_IMAGE_PDF: {
            bind: 'initIsImageOrPdf'
          },
          [getChannelName('navigate_to_success')]: {
            bind: 'updatingProcess'
          },
          [getChannelName('continue_page_modal_file')]: {
            bind: 'onContinueModalFile'
          },
          [getChannelName('on_continue_button')]: {
            bind: 'onContinueButton'
          },
          [getChannelName('set_date_input')]: {
            bind: 'setDateInput'
          },
          [getChannelName('send_inputs_id')]: {
            bind: 'validateInputs'
          }
        },
        out: {
          [getChannelName('show_modal_options')]: {
            bind: 'is-modal-open-event'
          },
          [getChannelName('set_item_selected')]: {
            bind: 'set-item-select-modal-event'
          },
          [getChannelName('show_components_id')]: {
            bind: 'show-hide-cases-id'
          },
          [getChannelName('show_components_others')]: {
            bind: 'show-hide-cases-others'
          },
          [getChannelName('set_text_icon_message_modal')]: {
            bind: 'set-icon-message-modal'
          },
          [getChannelName('set_min_date')]: {
            bind: 'set-min-date'
          },
          [getChannelName('set_max_date')]: {
            bind: 'set-max-date'
          },
          [getChannelName('set_native_default_date')]: {
            bind: 'native-default-date'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_ADVICE_CAMERA: {
            bind: 'open-alert-manager-advice-plugin-camera',
            analytics: ANALYTICS.FOOTPRINT_PHOTO
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_ADVICE_PDF: {
            bind: 'open-alert-manager-advice-plugin-pdf',
            analytics: ANALYTICS.FOOTPRINT_PDF
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_INFO_OCR: {
            bind: 'open-alert-manager-info-ocr'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_NOTICE_PRIVACY: {
            bind: 'open-alert-manager-notice-privacy'
          },
          [getChannelName('set_text_config_choose_button')]: {
            bind: 'set-config-choose-button'
          },
          [getChannelName('set_text_config_choose_button_reverse')]: {
            bind: 'set-config-choose-button-reverse'
          },
          NAVEGATION_TO_OPEN_PAGE_OPTIONS_MEDIACAPTURE: {
            bind: 'show-options-plugin-mediacapture',
            link: {
              page: 'updateAddressOptionsPage'
            }
          },
          [getChannelName('change_title_header')]: {
            bind: 'set-title-name-header'
          },
          [getChannelName('show_message_info_pdf')]: {
            bind: 'show-hide-cases-pdf'
          },
          [getChannelName('show_button_reverse_id')]: {
            bind: 'show-hide-cases-id-reverse'
          },
          [getChannelName('show_list_file_item')]: {
            bind: 'show-item-list-file'
          },
          [getChannelName('show_choose_button')]: {
            bind: 'show-hide-choose_button'
          },
          [getChannelName('show_list_file_item_reverse')]: {
            bind: 'show-item-list-file-reverse'
          },
          [getChannelName('open_modal_file_selected')]: {
            bind: 'show-modal-file'
          },
          [getChannelName('inputs_id_properties')]: {
            bind: 'set-config-inputs-id'
          },
          [getChannelName('request_list_document_types')]: {
            bind: 'get-list-document-types'
          },
          [getChannelName('send_path_file_plugin')]: {
            bind: 'set-path-file-plugin'
          },
          [getChannelName('close_modal_file_selected')]: {
            bind: 'close-modal-file-reader'
          },
          send_data_input_file: {
            bind: 'set-data-input-file'
          },
          navigate_to_summary: {
            bind: 'continue-button',
            backStep: true
          },
          change_view_summary_step_two: {
            bind: 'set-collapsed-step-two'
          },
          [getChannelName('send_name_file')]: {
            bind: 'set-name-file-item'
          },
          [getChannelName('send_name_file_reverse')]: {
            bind: 'set-name-file-item-reverse'
          },
          [getChannelName('send_config_continue_button')]: {
            bind: 'set-config-continue-button'
          },
          [getChannelName('send_data_error_message_date')]: {
            bind: 'set-data-error-message-date'
          },
          [getChannelName('send_data_error_input_id')]: {
            bind: 'set-message-error-input-id'
          },
          [getChannelName('send_reset_page')]: {
            bind: 'reset-page-components'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_DELETE_FILE: {
            bind: 'show-modal-question-delete-file'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_DELETE_FILE_REVERSE: {
            bind: 'show-modal-question-delete-file-reverse'
          },
          [getChannelName('enable_button')]: {
            bind: 'enable-primary-button'
          },
          [getChannelName('disable_button')]: {
            bind: 'disable-primary-button'
          },
          [getChannelName('reset-inputs')]: {
            bind: 'reset-form-inputs'
          },
          [getChannelName('set_invalid_status_date')]: {
            bind: 'set-invalid-status-date'
          },
          [getChannelName('DOC_TITTLE')]: {
            bind: 'title-pdf-text'
          },
          [getChannelName('DOC_CONTENT')]: {
            bind: 'base-src-changed'
          },
          [getChannelName('OPEN_PDF_MODAL')]: {
            bind: 'show-document-event'
          },
          [getChannelName('SHOW_PHOTO_PREVIEW')]: {
            bind: 'show-photo-preview'
          }
        }
      }
    }
  };

  const showPhoto = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-file-reader',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('SHOW_PHOTO_PREVIEW')]: {
            bind: 'open'
          }
        }
      }
    }
  };

  const globalApisCustomerDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customer-documents',
    properties: {
      categoryId: 'D',
      categorySubCategoryId: 'O',
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('request_list_document_types')]: {
            bind: 'getDocumentTypes'
          }
        },
        out: {
          [getChannelName('set_items_document_types')]: {
            bind: 'set-list-document-types'
          }
        }
      }
    }
  };

  const base = {
    hash: '/update-address-upload-files-page',
    currentPage: {
      url: '/update-address-upload-files-page',
      params: []
    },
    pages: updateAddressUploadFilesPage,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      textDescriptionInformation,
      selectModal,
      modalOptionsAddress,
      iconMessageModal,
      dateInput,
      messageHelpORC,
      inputsID,
      messageInfoIdPdf,
      chooseButton,
      listFileUploaded,
      chooseButtonReverse,
      listFileUploadedReverse,
      textDescriptionPersonalData,
      fileListNoticePrivacy,
      iconMessageInfo,
      continueButton,
      glomoUpdateAddressFileDM,
      showPhoto,
      globalApisCustomerDocuments
    ]
  };

  return base;
};
