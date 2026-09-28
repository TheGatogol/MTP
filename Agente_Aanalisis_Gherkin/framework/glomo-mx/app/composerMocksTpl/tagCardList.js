/* eslint-disable complexity, new-cap, max-statements */
'use strict';

const LITERALS = require('./analytics/common/_literals');
const utils = require('./common/helpers/_utils');

module.exports = (CONFIG) => {
  const { glomoOpenDocument, SPINNERSPHERICA: spinner } = utils;
  const pageName = 'tagCardList';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const analyticsTagRegister = require('./analytics/_glomo-analytics-manager')(CONFIG);
  const analyticsTagRecharge = require('./analytics/_glomo-analytics-manager-recharge')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);

  const spinnerSpherica = spinner(CONFIG);
  spinnerSpherica.properties = spinnerSpherica.propertiesSpherica;
  delete spinnerSpherica.propertiesSpherica;

  spinnerSpherica.properties.open = false;
  spinnerSpherica.properties.className = 'solid-spinner';
  spinnerSpherica.properties.cellsConnections.in = {
    ...spinnerSpherica.properties.cellsConnections.in,
    ['PRT_OPEN_MODAL']: {
      bind: 'closeVeil'
    }
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          tagCardList_CONFIRM_DELETE_TAG: {
            bind: 'alert-confirm-delete-tag-modal-accept'
          }
        }
      }
    }
  };

  const sphericaIconModalValue = { icon: 'coronita:help'};
  const modalDashboardItems = {
    'confirm-delete-tag-modal': {
      code: 'confirm-delete-tag-modal',
      maximize: false,
      className: 'warning',
      closeOnPrimaryButton: true,
      iconOnlyFullHeight: true,
      title: 'pase-tag-recharge-title-delete-modal-spherica',
      acceptBtLabel: 'pase-tag-card-list-accept-button-label',
      values: [
        sphericaIconModalValue,
        { title: 'pase-tag-card-list-title-confirm-modal-delete-tag', class: 'spacing--xs text-center' },
        { text: 'pase-tag-card-list-description-confirm-modal-delete-tag', class: 'spacing text-center title-grey' }
      ]
    },
    'info-delete-tag-televia': {
      code: 'info-delete-tag-televia',
      title: 'pase-tag-card-list-modal-header-title-delete-tag',
      maximize: true,
      className: 'close-button--right full-height-info info header--white-call-me-back',
      closeOnPrimaryButton: true,
      acceptBtLabel: '',
      values: [
        sphericaIconModalValue,
        { title: 'pase-tag-card-list-modal-title-delete-tag', class: 'spacing--xs text-center' },
        { text: 'pase-tag-card-list-modal-description-delete-tag', class: 'spacing text-center title-grey' },
        { text: 'pase-tag-card-list-modal-sub-description-delete-tag', class: 'spacing--xs text-center title-grey' }
      ]
    },
    'info-delete-tag-pase': {
      code: 'info-delete-tag-pase',
      title: 'pase-tag-card-list-modal-header-title-delete-tag',
      maximize: true,
      className: 'close-button--right full-height-info info header--white-call-me-back',
      closeOnPrimaryButton: true,
      acceptBtLabel: '',
      values: [
        sphericaIconModalValue,
        { title: 'pase-tag-card-list-modal-title-delete-tag', class: 'spacing--xs text-center' },
        { text: 'pase-tag-card-list-modal-description-delete-tag', class: 'spacing text-center title-grey' },
        { text: 'pase-tag-card-list-modal-sub-description-delete-tag', class: 'spacing--xs text-center title-grey' }
      ]
    },
    'response-error-list-service': {
      code: 'response-error-list-service',
      title: 'pase-tag-title',
      maximize: true,
      className: 'close-button--right info header--white-call-me-back',
      closeOnPrimaryButton: true,
      acceptBtLabel: 'pase-tag-card-list-modal-accepted-modal-error',
      heroImage: 'images/Connectivity.svg',
      values: [
        { title: 'pase-tag-card-list-modal-accepted-modal-title', class: 'spacing--xs text-center' },
        { text: 'pase-tag-card-list-modal-modal-error-text', class: 'spacing text-center title-grey' }
      ]
    }
  };


  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          tag_card_list__INIT_CHANNEL_LIST: {
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

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`,
      iOSFixedHeader: isNativeIos,
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'header--core',
      headerFixed: true,
      headerHeight: utils.headerHeight,
      preventScrollWithOverlay: true,
      topOnConfirm: true,
      cellsConnections: {
        in: {
          tag_card_list__SCROLL_ZONE: {
            bind: 'scrollItemIntoView'
          },
          tag_card_list__SHOW_CONFIRM_CHANNEL: {
            bind: 'showConfirm'
          },
          tag_card_list__SHOW_CONFIRM_OFFER_PAGE: {
            bind: 'showConfirm'
          },
          tag_card_list__INIT_CHANNEL_LIST: {
            bind: 'recalculateHeader'
          },
          tag_card_list__ALL_STEPS_SCROLL: {
            bind: 'scrollItemIntoView'
          }
        },
        out: {
          tag_card_list__SCROLL_CHANNEL: {
            bind: 'opx-template-content-scroll'
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header-spherica',
    properties: {
      variant: 'primary-alt',
      leftIcon: 'coronita:back-mini',
      leftIconSize: '24',
      leftIconText: 'tag-corporate-exit',
      rightIcon: 'coronita:help',
      rightIconSize: '24',
      rightIconText: 'tag-corporate-help',
      className: `header--grey ${isNativeIos ? 'header--core-ios' : ''}`,
      secondaryClass: '',
      titleName: 'tag-card-list-title-header',
      iOSFixedHeader: isNativeIos,
      id: 'tag-register-tag-header',
      cellsConnections: {
        in: {
          tag_card_list__RESET_TO_NATIVE: {
            bind: 'removeSecondaryClass'
          },
          tag_card_list__RESET: {
            bind: 'removeSecondaryClass'
          },
          tag_card_list__RESET_HEADER: {
            bind: 'reset'
          }
        },
        out: {
          tag_card_list_GO_BACK_TO_MENU: {
            bind: 'click-left-button'
          },
          containerFaqsList_navigation_list_page: {
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
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          tag_card_list_GO_BACK_TO_MENU: {
            bind: 'goBack'
          },
          tag_card_list_NAVIGATE_TO_TAG_CARD_INFO: {
            bind: 'navigateToPage'
          },
          tag_card_list__RETURN_TO_BACK_PAGE: {
            bind: 'goBack'
          }
        },
        out: {
          global_backstep_channel: {
            bind: 'header-left-button',
            backStep: true,
            'forward-to-native': true
          },
          tag_card_list_NAVIGATE_CARD_INFO: {
            bind: 'navigation-to-tagCardInfo',
            link: {
              page: 'containerFaqsList'
            }
          }
        }
      }
    }
  };

  const tagToRegister = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-avatar-list-groups-spherica',
    properties: {
      showButtons: true,
      divider: 'buttons',
      hideIcon: true,
      secondaryButtonLabel: 'tag-card-secondary-button-label',
      cellsConnections: {
        in: {
          tag_card_list__INIT_CHANNEL_LIST: {
            bind: 'init'
          },
          tag_card_list__LIST_TAGS: {
            bind: 'groupsList'
          },
          tag_card_list__EMPTY_COMPONENTS: {
            bind: 'hidden'
          },
          tag_card_list_GO_BACK_TO_MENU: {
            bind: 'reset'
          },
          tag_card_list_reset_tag_list: {
            bind: 'reset'
          }
        },
        out: {
          tag_card_list__RECHARGE_BUTTON_TAG: {
            bind: 'primary-button-clicked'
          },
          tag_card_list__DELETE_BUTTON_TAG: {
            bind: 'secondary-button-clicked'
          },
          open_control_veil: {
            bind: 'primary-button-clicked'
          }
        }
      }
    }
  };

  const apisPayments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-payments',
    properties: {
      host: CONFIG.globalServices.host,
      headers: { 'Accept-Language': 'es' },
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      paymentsApiVersion: CONFIG.globalServices.versions.payments,
      cellsConnections: {
        in: {
          tag_card_list__GET_STORED_SERVICES: {
            bind: 'getStoredServices'
          },
          tag_card_list__REQUEST_DELETE_TAG: {
            bind: 'deleteStoredService'
          }
        },
        out: {
          tag_card_list__ERROR_LIST_SERVICES: {
            bind: 'response-error-list-service'
          },
          close_control_veil: {
            bind: 'stored-service-deleted'
          },
          tag_card_list__REFRESH_DASHBOARD_TAG: {
            bind: 'stored-service-deleted'
          },
          tag_card_list__SHOW_TOAST_SUCCESS: {
            bind: 'stored-service-deleted'
          },
          tag_card_list_deleted_stored_service_error_response: {
            bind: 'error-on-stored-service-deleted'
          }
        }
      }
    }
  };

  const toastAlertSpherica = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-toast-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      type: 'success',
      simpleLinkText: 'pase-tag-card-list-toast-success-subtitle',
      alertText: 'pase-tag-card-list-toast-success-title',
      fixedBottom: true,
      cellsConnections: {
        in: {
          tag_card_list_SET_OPEN_TOAST: {
            bind: 'show'
          }
        },
        out: {
          tag_card_list_OPEN_INFO_DELETE_TAG: {
            bind: 'notification-toast-link-click'
          }
        }
      }
    }
  };
  const toastAlert = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-alert-spherica',
    properties: {
      className: 'white-icon-success',
      type: 'success',
      toast: true,
      icon: 'coronita:correct',
      content: 'pase-tag-card-list-toast-success-title',
      firstButtonLabel: 'pase-tag-card-list-toast-success-subtitle',
      duration: 6000,
      cellsConnections: {
        in: {
          tag_card_list_SET_OPEN_TOAST: {
            bind: 'open'
          }
        },
        out: {
          tag_card_list__OPEN_INFO_DELETE_TAG: {
            bind: 'first-button-click'
          }
        }
      }
    }
  };

  const tagCardListDM = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-toll-recharge-manager',
    tag: 'glomo-toll-recharge-list-manager-mx',
    properties: {
      isSpherica: true,
      modalConfigItems: modalDashboardItems,
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      paymentsApiVersion: CONFIG.globalServices.versions.payments,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      eventServiceTagList: true,
      defaultErrorMessage: '',
      cellsConnections: {
        in: {
          tag_card_list__INIT_CHANNEL_LIST: {
            bind: 'requestService'
          },
          registerTag_REFRESH_LIST: {
            bind: 'requestService'
          },
          registerTagReview_REFRESH_LIST: {
            bind: 'rechargeListTag'
          },
          rechargeTag_REFRESH_LIST: {
            bind: 'requestService'
          },
          rechargeTagReview_REFRESH_LIST: {
            bind: 'requestService'
          },
          tag_card_list__RESPONSE_SUCCESS_SERVICE_LIST: {
            bind: 'getServiceList'
          },
          tag_card_list__DELETE_BUTTON_TAG: {
            bind: 'modalConfirmDeleteTag'
          },
          tagCardList_CONFIRM_DELETE_TAG: {
            bind: 'confirmRequestDeleteTag'
          },
          tag_card_list__REFRESH_DASHBOARD_TAG: {
            bind: 'requestService'
          },
          tag_card_list_OPEN_INFO_DELETE_TAG: {
            bind: 'openModalDeleteTag'
          },
          tag_card_list__RESPONSE_ERROR_LIST_SERVICE: {
            bind: 'goBack'
          },
          tag_card_list__RESPONSE_ERROR_LIST_SERVICE_HEADER: {
            bind: 'goBack'
          },
          tag_card_list__RECHARGE_BUTTON_TAG: {
            bind: 'parseDataRecharge'
          },
          tag_card_list_REQUEST_SERVICE_LIST: {
            bind: 'requestService'
          },
          tag_card_list__SHOW_TOAST_SUCCESS: {
            bind: 'checkToastMessage'
          },
          containerFaqsList_navigation_list_page: {
            bind: 'routeCardInfo'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlagCollection'
          }
        },
        out: {
          global_retry_error: {
            bind: 'retry-error'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          tag_card_list__GET_STORED_SERVICES: {
            bind: 'request-service-pyments'
          },
          tag_card_list__LIST_TAGS: {
            bind: 'set-tags-event'
          },
          tag_card_list_reset_tag_list: {
            bind: 'reset-tags-event'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-info-modal'
          },
          tag_card_list__REQUEST_DELETE_TAG: {
            bind: 'request-delete-tag-event'
          },
          tag_card_list__NAVIGATION_TO_ADD_TAG: {
            bind: 'navigate-to-register-tag-event',
            link: {
              page: 'registerTag',
              skipHistory: true
            }
          },
          tag_card_list__EMPTY_COMPONENTS: {
            bind: 'hidden-component-event'
          },
          tag_card_list__SHOW_EMPTY_COMPONENTS: {
            bind: 'show-empty-component-event'
          },
          tag_card_list__HIDDEN_ICON_BUTTON: {
            bind: 'hidden-icon-button-event'
          },
          tag_card_list__HIDDEN_MESSAGE_BOX_BUTTON: {
            bind: 'hidden-message-box-event'
          },
          tag_card_list_REQUEST_SERVICE_LIST: {
            bind: 'request-service'
          },
          tag_card_list__ANALYTICS_CLICK_START_RECHARGE: {
            bind: 'navigate-to-recharge-event'
          },
          PASE_TAG_NAVIGATION_TO_RECHARGE_TAG: {
            bind: 'navigate-to-recharge-event',
            link: {
              page: 'rechargeTag'
            }
          },
          tag_card_list__TO_RETURN_CHANNEL: {
            bind: 'flag-type-exit-list'
          },
          tag_card_list__RETURN_TO_BACK_PAGE: {
            bind: 'go-back-event'
          },
          tag_card_list__ERROR_LIST_SERVICES: {
            bind: 'response-error-list-service'
          },
          tag_card_list_NAVIGATE_TO_TAG_CARD_INFO: {
            bind: 'navigate-to-tag-card-info'
          },
          tag_card_list_SET_OPEN_TOAST: {
            bind: 'set-open-toast'
          },
          tag_card_list__SET_TAGS_ON_LIST: {
            bind: 'got-tags-successfully'
          }
        }
      }
    }
  };

  const addTag = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-button-spherica',
    properties: {
      variant: 'primary',
      icon: 'coronita:add',
      className: 'u-display--center u-margin--0 u-padding-bottom--1 bg-spherica-primary-surface-base-default',
      class: 'button',
      text: 'tag-card-list-label-icon-add',
      cellsConnections: {
        in: {
          tag_card_list__HIDDEN_ICON_BUTTON: {
            bind: 'hidden'
          }
        },
        out: {
          tag_card_list__ANALYTICS_CLICK_START_REGISTER: {
            bind: 'cells-icon-button-clicked'
          },
          tagCardList_NAVIGATION_TO_ADD_TAG_spherica: {
            bind: 'cells-icon-button-clicked',
            link: {
              page: 'registerTag'
            }
          }
        }
      }
    }
  };

  const iconMessageError = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message-spherica',
    properties: {
      type: 'error',
      icon: 'coronita:alert',
      message: 'tag-card-list-page-icon-message',
      iconLabel: null,
      buttonText: 'tag-card-list-page-icon-btn-error',
      className: 'btn secondary size-s',
      hidden: true
    }
  };

  const iconMessageWarning = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message-spherica',
    properties: {
      type: 'warning-dark',
      icon: 'coronita:info',
      message: 'tag-card-list-page-icon-message',
      iconLabel: null,
      buttonText: 'tag-card-list-page-icon-btn-warning',
      className: 'link',
      hidden: true
    }
  };

  const iconMessageLimitTag = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message-spherica',
    properties: {
      type: 'info',
      icon: 'coronita:info',
      message: 'tag-card-list-page-limit-tag',
      iconLabel: null,
      className: 'margin-l',
      hidden: true,
      cellsConnections: {
        in: {
          tag_card_list__HIDDEN_MESSAGE_BOX_BUTTON: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const tagCardListAnalytics = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-toll-recharge-manager',
    tag: 'glomo-tag-card-recharge-analytics-list',
    properties: {
      cellsConnections: {
        in: {
          tag_card_list_SET_TAGS_ON_LIST: {
            bind: 'firePageView'
          },
          tag_card_list__ANALYTICS_CLICK_START_RECHARGE: {
            bind: 'onClickStartRecharge'
          },
          tag_card_list__ANALYTICS_CLICK_START_REGISTER: {
            bind: 'onClickStartRegister'
          }
        },
        out: {
          tag_card_list__ANALYTICS_PAGE_VIEW_LIST_TAG: {
            bind: 'analytics-page-view',
            analytics: analyticsTagRegister.footprintTagPase
          },
          tag_card_list__ANALYTICS_APP_ON_CLICK_START_RECHARGE: {
            bind: 'analytics-on-click-start-recharge',
            analytics: analyticsTagRecharge.onClickStartRecharge(LITERALS.tag.primaryCompany, LITERALS.tag.rechargeCompany, LITERALS.commons.information)
          },
          tag_card_list__ANALYTICS_APP_ON_CLICK_START_REGISTER: {
            bind: 'analytics-on-click-start-register',
            analytics: analyticsTagRegister.onClickStart(LITERALS.tag.primaryCompany, '', LITERALS.tag.tagAdd, LITERALS.commons.information, LITERALS.tag.register, LITERALS.commons.operative, LITERALS.tag.registration)
          }
        }
      }
    }
  };

  const tagRechargeDm = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-toll-recharge-manager',
    tag: 'glomo-toll-recharge-manager-mx',
    properties: {
      isSpherica: true,
      modalConfigItems: modalDashboardItems,
      cellsConnections: {
        in: {
          tag_card_list__ERROR_LIST_SERVICES: {
            bind: 'showInfoModalErrorFormat'
          },
          tag_card_list_deleted_stored_service_error_response: {
            bind: 'showInfoModalErrorFormat'
          }
        },
        out: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-info-modal'
          }
        }
      }
    }
  };

  const base = {
    hash: 'tag-card-list',
    currentPage: {
      url: '/tag-card-list'
    },
    pages: pages,
    template,
    components: [
      spinnerSpherica,
      lifeCycle,
      header,
      navigationHandler,
      tagToRegister,
      tagCardListDM,
      apisPayments,
      addTag,
      iconMessageError,
      iconMessageWarning,
      iconMessageLimitTag,
      tagCardListAnalytics,
      toastAlertSpherica,
      tagRechargeDm
    ]
  };

  if (CONFIG.native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  addRetryErrors(base)([
    {
      id: 'not-show-information',
      acceptRetry: { bind: 'requestService', component: 'glomo-toll-recharge-list-manager-mx' }
    }
  ]);

  base.components.push(glomoAlertManagerSpherica);

  return base;
};
