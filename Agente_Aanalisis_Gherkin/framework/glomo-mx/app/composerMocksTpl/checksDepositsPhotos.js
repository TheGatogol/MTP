/* eslint-disable new-cap, no-shadow */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('checksDepositsPhotos');
  const localStorage = require('./common/_local-storage');
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS_CHECKS_DEPOSITS = require('./analytics/_checksDeposit')('checksDeposits');

  const documentScannerParams = {
    notificationDuration: 2000,
    processingImageText: 'glomo-check-aggregator-processing-text',
    orientation: 'landscapeLeft',
    compression: utils.checksPhotosCompression,
    filters: [ {
      id: 'aspectscaledtomaxsize',
      params: {
        maxSize: 700
      }
    } ],
    animation: 'fade'
  };

  const base = {
    hash: 'mx-ckecks-deposits-photos',
    currentPage: {
      url: '/checks-deposits/check-aggregator/photos'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : 'bbva-core-blue',
        cellsConnections: {
          in: {
            checks_deposits_photos_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksDepositsPhotos',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_checksDepositsPhotos: {
                bind: 'init'
              }
            },
            out: {
              checks_deposits_photos_reset_page: {
                bind: 'reset'
              },
              checks_deposits_photos_init_page: {
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
        properties: {
          className: 'header--white',
          rightIcon: 'coronita:close',
          titleName: 'glomo-checks-deposits-photos-header-title',
          cellsConnections: {
            out: {
              checks_deposits_photos_exit_operative: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-file-uploader',
        properties: {
          pictureFrontTitleLabel: 'glomo-checks-deposits-photos-front-label',
          pictureFrontLinkLabel: 'glomo-checks-deposits-photos-front-link',
          pictureBackTitleLabel: 'glomo-checks-deposits-photos-back-label',
          pictureBackLinkLabel: 'glomo-checks-deposits-photos-back-link',
          confirmButtonConfig: {
            buttons: {
              primary: {
                text: 'glomo-checks-deposits-photos-accept',
                disabled: true,
                class: 'tertiary'
              },
              secondary: {
                text: 'glomo-checks-deposits-photos-cancel',
                disabled: false,
                class: 'link'
              }
            }
          },
          showCheckInfoMessage: true,
          checkInfoMessageConfig: {
            type: 'info-dark',
            message: 'glomo-check-deposits-photos-info-message',
            icon: 'coronita:info'
          },
          infoTooltips: {
            infoFrontTooltipButton: {
              type: 'info',
              icon: 'coronita:help',
              class: 'info-icon icon-size-24 icon-right'
            },
            infoBackTooltipButton: {
              type: 'info',
              icon: 'coronita:help',
              class: 'info-icon icon-size-24 icon-right'
            }
          },
          cellsConnections: {
            in: {
              checks_deposits_photos_send_picture: {
                bind: 'pictureFromCamera'
              },
              global_checks_deposits_remove_check_accept: {
                bind: 'reset'
              },
              checks_deposits_photos_reset_page: {
                bind: 'reset'
              },
              checks_deposits_photos_set_pictures_from_aggregator: {
                bind: 'setPictureFromAggregator'
              },
              global_remove_front_picture_accept: {
                bind: 'removeFrontPicture'
              },
              global_remove_back_picture_accept: {
                bind: 'removeBackPicture'
              },
              global_checks_deposits_photos_remove_front_picture_accept: {
                bind: 'removeFrontPicture'
              },
              global_checks_deposits_photos_remove_back_picture_accept: {
                bind: 'removeBackPicture'
              },
              checks_deposits_photos_send_edit_mode_photos: {
                bind: 'setEditMode'
              },
              global_checks_deposits_photos_accept_leave_page: {
                bind: 'reset'
              },
              global_checks_deposits_aggregator_accept_leave_page: {
                bind: 'reset'
              },
              global_exit_operative_checks_deposits_accept: {
                bind: 'reset'
              },
              checks_deposits_reset_steps: {
                bind: 'reset'
              },
              checks_deposits_photos_leave_the_page: {
                bind: 'reset'
              },
              global_check_aggregator_documents_accept: {
                bind: 'reset'
              },
              checks_deposits_custom_acepted: {
                bind: 'reset'
              }
            },
            out: {
              checks_deposits_photos_take_front_photo: {
                bind: 'glomo-file-uploader-front-selected'
              },
              checks_deposits_photos_take_back_photo: {
                bind: 'glomo-file-uploader-back-selected'
              },
              checks_deposits_photos_continue_pressed: {
                bind: 'send-pictures-to-aggregator'
              },
              checks_deposits_photos_open_photo_preview: {
                bind: 'open-file-preview'
              },
              checks_deposits_photos_request_remove_front_picture: {
                bind: 'request-remove-front-picture'
              },
              checks_deposits_photos_request_remove_back_picture: {
                bind: 'request-remove-back-picture'
              },
              checks_deposits_photos_removes_front_picture: {
                bind: 'removed-front-picture'
              },
              checks_deposits_photos_removes_back_picture: {
                bind: 'removed-back-picture'
              },
              checks_deposits_photos_change_status_continue_button: {
                bind: 'status-continue-button'
              },
              checks_deposits_photos_exit_operative: {
                bind: 'cells-confirm-buttons-click-secondary'
              },
              checks_deposits_photos_front_tooltip_button: {
                bind: 'info-front-tooltip-clicked-button'
              },
              checks_deposits_photos_back_tooltip_button: {
                bind: 'info-back-tooltip-clicked-button'
              }
            }
          }
        }
      }
    ]
  };

  const dm = [
    {
      zone: 'app__main',
      familyPath: 'glomo-check-aggregator-dm',
      tag: 'glomo-check-aggregator-dm-mx',
      type: 'DM',
      properties: {
        host: CONFIG.globalServices.host,
        native: CONFIG.native,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        accountsApiVersion: CONFIG.globalServices.versions.accounts,
        businessDocumentsApiVersion: CONFIG.globalServices.versions.businessDocuments,
        documentScannerConfig: documentScannerParams,
        customerIdFlag: true,
        consumerId: CONFIG.consumerId,
        photoFrontInfoModal: {
          id: 'modal',
          code: '',
          selectedConfig: {
            className: 'full-height-error close-button--right help-modal header--white image--g',
            openMaximized: true,
            title: 'glomo-check-aggregator-front-photo-info-modal-header',
            acceptBtLabel: 'glomo-check-aggregator-front-photo-info-modal-accept',
            template: {
              type: 'paragraphs'
            }
          }
        },
        photoBackInfoModal: {
          id: 'modal',
          code: '',
          selectedConfig: {
            className: 'full-height-image-icon header--white',
            openMaximized: true,
            title: 'glomo-check-aggregator-back-photo-info-modal-header',
            atomIcon: {
              icon: 'coronita:help',
              class: 'icon-size-24'
            },
            acceptBtLabel: 'glomo-check-aggregator-back-photo-info-modal-accept',
            template: {
              type: 'paragraphs'
            }
          }
        },
        cellsConnections: {
          in: {
            global_checks_deposits_remove_check_accept: {
              bind: 'resetPage'
            },
            checks_deposits_photos_reset_page: {
              bind: 'resetPage'
            },
            __bridge_cancelled_back_navigation: {
              bind: 'requestToLeaveThePagePhotos'
            },
            checks_deposits_set_selected_product: {
              bind: 'account'
            },
            checks_deposits_photos_front_tooltip_button: {
              bind: 'frontTooltipOpenPhotoInfoModal'
            },
            checks_deposits_photos_take_front_photo: {
              bind: 'getFrontFileUploaderFromLocalStorage'
            },
            checks_deposits_photos_back_tooltip_button: {
              bind: 'backTooltipOpenPhotoInfoModal'
            },
            checks_deposits_photos_take_back_photo: {
              bind: 'getBackFileUploaderFromLocalStorage'
            },
            global_check_aggregator_back_photo_info_accept: {
              bind: 'acceptBackOpenInfoModal'
            },
            global_check_aggregator_front_photo_info_accept: {
              bind: 'acceptFrontOpenInfoModal'
            },
            checks_deposits_photos_check_camera_permissions_success: {
              bind: 'handleCameraPermissionsState'
            },
            checks_deposits_photos_check_camera_permissions_error: {
              bind: 'handlePermissionsError'
            },
            checks_deposits_photos_request_camera_permissions_success: {
              bind: 'makeFrontPhoto'
            },
            checks_deposits_photos_request_camera_permissions_error: {
              bind: 'handlePermissionsError'
            },
            global_permission_denied_accept: {
              bind: 'openSettings'
            },
            checks_deposits_scan_photo_front_success: {
              bind: 'scanPhotosFrontResponse'
            },
            checks_deposits_scan_photo_front_error: {
              bind: 'scanPhotosError'
            },
            checks_deposits_preview_photo_front_success: {
              bind: 'handleFrontPreviewResponse'
            },
            checks_deposits_scan_photo_back_success: {
              bind: 'scanPhotosBackResponse'
            },
            checks_deposits_preview_photo_front_error: {
              bind: 'previewPhotosFrontError'
            },
            checks_deposits_preview_photo_back_error: {
              bind: 'previewPhotosBackError'
            },
            checks_deposits_preview_photo_back_success: {
              bind: 'handleBackPreviewResponse'
            },
            checks_deposits_scan_photo_back_error: {
              bind: 'scanPhotosError'
            },
            checks_deposits_photos_open_photo_preview: {
              bind: 'openPhotoPreview'
            },
            checks_deposits_photos_request_remove_front_picture: {
              bind: 'askConfirmationToRemoveFrontPhoto'
            },
            checks_deposits_photos_request_remove_back_picture: {
              bind: 'askConfirmationToRemoveBackPhoto'
            },
            checks_deposits_photos_removes_front_picture: {
              bind: 'removeFrontPicture'
            },
            checks_deposits_photos_removes_back_picture: {
              bind: 'removeBackPicture'
            },
            navigate_to_edit_checks_deposits_photos: {
              bind: 'setPicturesEditMode'
            },
            checks_deposits_photos_continue_pressed: {
              bind: 'processFrontImageWithOCR'
            },
            checks_deposits_photos_exit_operative: {
              bind: 'requestToLeaveThePagePhotos'
            },
            global_checks_deposits_photos_accept_leave_page: {
              bind: 'checkEditModeBeforeLeaving'
            },
            checks_deposits_photos_change_status_continue_button: {
              bind: 'statusButtonContinuePhotoPage'
            },
            global_storage_get_loginData_success: {
              bind: 'getDataFromLocalStorageSuccess'
            },
            global_checks_deposits_aggregator_accept_leave_page: {
              bind: 'resetPage'
            },
            global_cache_channel: {
              bind: 'userDetail'
            },
            checks_deposits_reset_steps: {
              bind: 'resetPage'
            },
            checks_deposits_photos_leave_the_page: {
              bind: 'resetPage'
            },
            global_check_aggregator_documents_accept: {
              bind: 'resetPage'
            },
            global_check_deposits_photos_setting_accept: {
              bind: 'openSettings'
            },
            global_storage_get_check_deposits_photo_front_tooltip_success: {
              bind: 'parseGetFrontPhotoReadFromLocalStorageSuccess'
            },
            global_storage_get_check_deposits_photo_front_tooltip_error: {
              bind: 'parseGetFrontPhotoReadFromLocalStorageError'
            },
            global_storage_get_check_deposits_photo_back_tooltip_success: {
              bind: 'parseGetBackPhotoReadFromLocalStorageSuccess'
            },
            global_storage_get_check_deposits_photo_back_tooltip_error: {
              bind: 'parseGetBackPhotoReadFromLocalStorageError'
            },
            checks_deposits_custom_acepted: {
              bind: 'resetPage'
            }
          },
          out: {
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            global_alert_manager_open_with_settings: {
              bind: 'glomo-check-aggregator-open-modal'
            },
            checks_deposits_photos_open_back_with_settings: {
              bind: 'glomo-check-aggregator-open-back-modal'
            },
            checks_deposits_photos_check_camera_permissions: {
              bind: 'glomo-check-aggregator-check-camera-permissions'
            },
            checks_deposits_photos_request_camera_permissions: {
              bind: 'glomo-check-aggregator-request-camera-permissions'
            },
            checks_deposits_open_native_settings: {
              bind: 'open-native-settings'
            },
            checks_deposits_scan_photo: {
              bind: 'open-scan-document-camera'
            },
            checks_deposits_preview_photo: {
              bind: 'open-scan-document-preview'
            },
            checks_deposits_photos_send_picture: {
              bind: 'checks-deposits-photos-picture'
            },
            global_checks_deposits_photos_list: {
              bind: 'checks-deposits-photos-list'
            },
            navigate_to_check_aggregator: {
              bind: 'checks-deposits-photos-list',
              backStep: true
            },
            global_checks_deposits_photos_names_list: {
              bind: 'checks-deposits-photos-names-list'
            },
            global_checks_deposits_photos_check_band_code: {
              bind: 'checks-deposits-photos-check-band-code'
            },
            global_checks_deposits_photos_check_folio: {
              bind: 'checks-deposits-photos-check-folio'
            },
            checks_deposits_photos_leave_the_page: {
              bind: 'leave-the-page',
              link: {
                page: 'checksDeposits',
                cleanUntil: 'checksDeposits'
              }
            },
            checks_deposits_photos_leave_the_page_and_reset_process: {
              bind: 'leave-the-page-and-reset-process',
              link: {
                page: 'checksDeposits',
                cleanUntil: 'checksDeposits'
              }
            },
            global_checks_deposits_photos_reset_process: {
              bind: 'leave-the-page-and-reset-process'
            },
            global_checks_deposits_photos_set_edit_photos: {
              bind: 'glomo-check-aggregator-set-edit-mode'
            },
            checks_deposits_photos_set_pictures_from_aggregator: {
              bind: 'set-pictures-from-aggregator'
            },
            checks_deposits_photos_send_edit_mode_photos: {
              bind: 'send-edit-mode-photos'
            },
            checks_deposits_photo_front_position: {
              bind: 'set-trace-photo-front-position'
            },
            checks_deposits_photo_back_position: {
              bind: 'set-trace-photo-back-position'
            },
            checks_deposits_photos_check_data: {
              bind: 'set-trace-photos-check-data'
            },
            global_set_in_storage: {
              bind: 'set-in-local-storage'
            },
            global_get_from_storage: {
              bind: 'get-from-local-storage'
            },
            checks_deposits_document_code: {
              bind: 'set-trace-code'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-nativesettings',
      properties: {
        cellsConnections: {
          in: {
            checks_deposits_open_native_settings: {
              bind: 'openSetting'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-permissions-plugin',
      properties: {
        cellsConnections: {
          in: {
            checks_deposits_photos_check_camera_permissions: {
              bind: 'checkState'
            },
            checks_deposits_photos_request_camera_permissions: {
              bind: 'request'
            }
          },
          out: {
            checks_deposits_photos_check_camera_permissions_success: {
              bind: 'permissions-check-state-success'
            },
            checks_deposits_photos_check_camera_permissions_error: {
              bind: 'permissions-check-state-error'
            },
            checks_deposits_photos_request_camera_permissions_success: {
              bind: 'permissions-request-success'
            },
            checks_deposits_photos_request_camera_permissions_error: {
              bind: 'permissions-request-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-nativeconnector-document-scanner',
      properties: {
        cellsConnections: {
          in: {
            checks_deposits_scan_photo: {
              bind: 'scan'
            },
            checks_deposits_preview_photo: {
              bind: 'preview'
            }
          },
          out: {
            checks_deposits_scan_photo_front_success: {
              bind: 'document-scanner-scan-front-success'
            },
            checks_deposits_scan_photo_front_error: {
              bind: 'document-scanner-scan-front-error'
            },
            checks_deposits_scan_photo_back_success: {
              bind: 'document-scanner-scan-back-success'
            },
            checks_deposits_scan_photo_back_error: {
              bind: 'document-scanner-scan-back-error'
            },
            checks_deposits_preview_photo_front_success: {
              bind: 'document-scanner-preview-front-success'
            },
            checks_deposits_preview_photo_front_error: {
              bind: 'document-scanner-preview-front-error'
            },
            checks_deposits_preview_photo_back_success: {
              bind: 'document-scanner-preview-back-success'
            },
            checks_deposits_preview_photo_back_error: {
              bind: 'document-scanner-preview-back-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-analytics-checks-deposits-manager-mx',
      familyPath: '@glomo-web-components/glomo-analytics-checks-deposits-manager',
      render: 'litElement',
      type: 'DM',
      properties: {
        config: {
          steps: {
            1: 'app-page-visit',
            2: 'app-step-2',
            3: 'app-step-3'
          }
        },
        cellsConnections: {
          in: {
            checks_deposits_set_selected_product: {
              bind: 'account'
            },
            checks_deposits_photos_init_page: {
              bind: 'sendAnalyticsAppStep3'
            },
            checks_deposits_photos_take_front_photo: {
              bind: 'sendAnalyticsAppStep4'
            },
            checks_deposits_photos_check_camera_permissions_success: {
              bind: 'sendAnalyticsAppStep5'
            },
            checks_deposits_photo_front_position: {
              bind: 'sendAnalyticsAppStep6'
            },
            checks_deposits_photos_take_back_photo: {
              bind: 'sendAnalyticsAppStep7'
            },
            checks_deposits_photo_back_position: {
              bind: 'sendAnalyticsAppStep8'
            },
            checks_deposits_document_code: {
              bind: 'sendAnalyticsHuellaErrors'
            },
            global_check_aggregator_front_photo_info_cancel: {
              bind: 'sendAnalyticsAppStep3'
            },
            global_check_aggregator_back_photo_info_cancel: {
              bind: 'sendAnalyticsAppStep3'
            },
            global_checks_deposits_photos_list: {
              bind: 'analyticsPhotosList'
            },
            global_check_aggregator_documents_accept: {
              bind: 'sendAnalyticsAppStep3'
            },
            global_check_aggregator_documents_cancel: {
              bind: 'sendAnalyticsAppStep3'
            }
          },
          out: {
            checks_deposits_analytics_app_step_3: {
              bind: 'analytics-app-step-3',
              analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('3'),
              featureFlag: ANALYTICS_CHECKS_DEPOSITS.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_step_4: {
              bind: 'analytics-app-step-4',
              analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('4'),
              featureFlag: ANALYTICS_CHECKS_DEPOSITS.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_step_5: {
              bind: 'analytics-app-step-5',
              analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('5'),
              featureFlag: ANALYTICS_CHECKS_DEPOSITS.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_step_6: {
              bind: 'analytics-app-step-6',
              analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('6'),
              featureFlag: ANALYTICS_CHECKS_DEPOSITS.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_step_7: {
              bind: 'analytics-app-step-7',
              analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('7'),
              featureFlag: ANALYTICS_CHECKS_DEPOSITS.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_step_8: {
              bind: 'analytics-app-step-8',
              analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_common_steps('8'),
              featureFlag: ANALYTICS_CHECKS_DEPOSITS.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_checks_document_scanner: {
              bind: 'analytics-error-checks-document-scanner',
              analytics: ANALYTICS_CHECKS_DEPOSITS.checks_management_error('error en digitalizacion', 'error en digitalizacion')
            },
            analytics_photons_list: {
              bind: 'analytics-photos-list'
            }
          }
        }
      }
    }
  ];

  base.components.push(...dm);
  localStorage.addOutStorageChannels(base.components, ['check_deposits_photo_front_tooltip', 'check_deposits_photo_back_tooltip'], CONFIG);
  return base;
};
