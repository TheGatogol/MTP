
/* eslint-disable max-statements, new-cap, no-shadow */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'blackhawkPurchase';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const { useNames, createPrefixFromPageName, SPINNER } = utils;
  const spinner = SPINNER(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();
  const getLocalePrefix = name => `glomo-${getLocaleName(name)}`;
  const isNativeIos = CONFIG.nativeIos || false;
  const localStorage = require('./common/_local-storage');
  const ANALYTICS = require('./analytics/_blackhawkPurchase')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG, isSpherica);
  const autorizeBrands = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '13', '15'];
  const imageRechargeItems = sphericaPageUtils.isSpherica() ? './images/spherica/blackhawk/Task-List.svg' : './images/blackHawk/info/task-list.svg';
  const showBtLabel = sphericaPageUtils.isSpherica() ? '' : 'glomo-gift-card-modal-accept-button';
  const imageSizeModal = sphericaPageUtils.isSpherica() ? 'image--m' : 'image--xl';
  if (isSpherica) {
    spinner.tag = 'cells-spinner-veil-spherica';
  }
  spinner.properties.cellsConnections.in = { ...spinner.properties.cellsConnections.in, close_control_veil_on_put_request_success: { bind: 'hide' } };
  const modalRechargeItems = {
    'general-information-modal': {
      code: 'general-information-modal',
      className: 'full-height-info info ios-top-padding',
      iOSFixedHeader: true,
      imageSize: imageSizeModal,
      maximize: true,
      iconOnlyFullHeight: undefined,
      heroImage: imageRechargeItems,
      title: 'glomo-gift-card-welcome-information-title-header',
      acceptBtLabel: showBtLabel,
      onAcceptEvent: '',
      type: 'paragraphs',
      values: [
        { title: 'glomo-gift-card-modal-general-information-title', class: 'spacing text-center' },
        { text: 'glomo-gift-card-modal-general-information-text1', class: 'spacing text-center' },
        { text: 'glomo-gift-card-modal-general-information-text2' }
      ]
    },
    'system-not-available-blackhawk-error': {
      idretry: {
        id: 'LIST-ERROR'
      },
      dataretry: {
        title: 'glomo-blackhawk-purchase-detail-no-available_system',
        fullModal: true,
        header: 'glomo-blackhawk-purchase-detail-supplier-name',
        className: 'error',
        acceptBtLabel: 'alert-GENERIC-ERROR-retry',
        cancelBtLabel: 'alert-GENERIC-ERROR-exit',
        srcImage: './images/tagCard/Connectivity.svg',
        message: 'glomo-blackhawk-purchase-detail-no-available_system-message'
      }
    }
  };
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-info-modal'
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding header--dark' : 'header--dark',
      iOSFixedHeader: isNativeIos,
      disableEdgeSwipe: true,
      headerFixed: true,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      footerHeight: 16,
      disableEdgeSwipe: true,
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
    }
  };
  const lifeCycle = {
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
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
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
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [getGlobalName('back_navigation_menu')]: {
            bind: 'goBack'
          },
          [getGlobalName('navigate_to_answer')]: {
            bind: 'navigateToPage'
          },
          [getGlobalName('navigate_to_welcome')]: {
            bind: 'navigateToPage'
          },
          [getGlobalName('navigate_to_detail')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getGlobalName('navigate_to_mobileTopUp')]: {
            bind: 'header-left-button',
            backStep: true
          },
          [getGlobalName('navigate_to_blackhawkAnswer')]: {
            bind: 'navigation-to-blackhawkAnswer',
            link: {
              page: 'blackhawkAnswer'
            }
          },
          [getGlobalName('navigate_to_blackhawkWelcome_onboarding')]: {
            bind: 'navigation-to-blackhawkWelcome',
            link: {
              page: 'blackhawkWelcome'
            }
          },
          [getGlobalName('navigate_to_blackhawkPurchaseDetail')]: {
            bind: 'navigation-to-blackhawkPurchaseDetail',
            link: {
              page: 'blackhawkPurchaseDetail'
            }
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
      className: `header--core ${ isNativeIos ? 'ios-top-padding' : ''}`,
      leftIcon: 'coronita:return-12',
      rightIcon: 'coronita:help',
      titleName: 'glomo-blackhawk-welcome-title-header',
      cellsConnections: {
        out: {
          [getGlobalName('back_navigation_menu')]: {
            bind: 'click-left-button'
          },
          [getGlobalName('go_to_answer_faqs')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--grey',
      variant: 'primary-alt',
      leftIcon: 'coronita:back-mini',
      leftIconText: 'cells-molecule-header-spherica-back',
      rightIcon: 'coronita:help',
      rightIconText: 'cells-molecule-header-spherica-help'
    }
  };
  const purchaseDM = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-gift-card-manager',
    tag: 'glomo-gift-card-manager-purchase-mx',
    properties: {
      modalRechargeItems: modalRechargeItems,
      phoneNumber: CONFIG.phoneNumberContact,
      heroImage: './images/blackHawk/info/Amazon.svg',
      enabledBrands: autorizeBrands,
      cellsConnections: {
        in: {
          global_storage_get_blackhawk_welcome_information_success: {
            bind: 'getCardDetailLocalStorage'
          },
          global_storage_get_blackhawk_welcome_information_error: {
            bind: 'getCardDetailLocalStorageError'
          },
          [getGlobalName('init_page')]: {
            bind: 'init'
          },
          [getGlobalName('go_to_answer_faqs')]: {
            bind: 'goToAnswerFacs'
          },
          [getGlobalName('change_data_pressed_data_info')]: {
            bind: 'generalInformation'
          },
          [getGlobalName('cells_oc_banner_displayed_information')]: {
            bind: 'moreInformation'
          },
          [getGlobalName('success_response_brand_list')]: {
            bind: 'mappedBrand'
          },
          [getGlobalName('error_response_brand_list')]: {
            bind: 'errorResponseBrandList'
          },
          [getGlobalName('cells_oc_banner_button_event_card_selected')]: {
            bind: 'goToPurchaseDetail'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_get_from_storage: {
            bind: 'get-card-detail-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-data-storage-blackhawk'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [getGlobalName('navigate_to_answer')]: {
            bind: 'navigate-to-answer'
          },
          [getGlobalName('navigate_to_welcome')]: {
            bind: 'navigate-to-welcome'
          },
          [getGlobalName('navigate_to_detail')]: {
            bind: 'navigate-to-detail'
          },
          [getGlobalName('request_brand_list_event')]: {
            bind: 'request-brand-list-event'
          },
          [getGlobalName('mapped_products_event')]: {
            bind: 'mapped-products-event'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-info-modal'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'mapped-products-event'
          },
          [getGlobalName('fire_page_view_event')]: {
            bind: 'fire-page-view-event'
          },
          [getGlobalName('empty_products_response_event')]: {
            bind: 'empty-products-response-event'
          },
          global_action_launcher_dialer: {
            bind: 'request-call-assistance'
          },
          [getGlobalName('send_data_products')]: {
            bind: 'send-data-products'
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
              bind: 'open-info-modal'
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
  const blackHawkDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-blackhawk',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getGlobalName('request_brand_list_event')]: {
            bind: 'getBrandList'
          }
        },
        out: {
          [getGlobalName('success_response_brand_list')]: {
            bind: 'success-response-brand-list'
          },
          [getGlobalName('error_response_brand_list')]: {
            bind: 'error-response-brand-list'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };
  const information = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    tagSpherica: 'cells-text-description-spherica',
    properties: {
      id: 'blackhawk-purchase-text-description',
      className: '',
      title: 'glomo-gift-card-purchase-description-title',
      mainDescription: 'glomo-gift-card-purchase-description-text'
    },
    propertiesSpherica: {
      className: 'background-grey-card',
      title: 'glomo-gift-card-purchase-description-title-spherica',
      mainDescription: 'glomo-gift-card-purchase-description-text-spherica'
    }
  };
  const cardList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-oc-banner-list',
    tagSpherica: 'cells-oc-banner-list-spherica',
    properties: {
      bannerTitleClass: 'banner__title_main',
      bannerClass: 'banner banner--product banner-flexible-line banner-bottom-separator-line',
      cellsConnections: {
        in: {
          [getGlobalName('mapped_products_event')]: {
            bind: 'campaigns'
          }
        },
        out: {
          [getGlobalName('cells_oc_banner_button_event_click_start')]: {
            bind: 'cells-oc-banner-button-event'
          },
          [getGlobalName('cells_oc_banner_button_event_card_selected')]: {
            bind: 'cells-oc-banner-button-event'
          },
          [getGlobalName('cells_oc_banner_displayed_information')]: {
            bind: 'cells-oc-banner-displayed'
          }
        }
      }
    },
    propertiesSpherica: {
      bannerTitleClass: 'banner__title_main',
      bannerClass: 'banner--buttons banner--product',
      bannerClassButton: 'default full'
    }
  };
  const boxInformation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message-change-data',
    tagSpherica: 'cells-icon-message-change-data-spherica',
    properties: {
      className: 'margin-l',
      type: 'info',
      icon: 'coronita:info',
      heading: 'glomo-gift-card-modal-general-information-title',
      message: getLocalePrefix('messagge-more-info-BH'),
      showChangeData: true,
      hasMultipleData: true,
      changeDataText: 'glomo-gift-card-more-information',
      cellsConnections: {
        out: {
          [getGlobalName('change_data_pressed_data_info')]: {
            bind: 'change-data-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'default'
    }
  };
  const analyticsBlackhawkPurchase = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-gift-card-manager-purchase',
    familyPath: '@glomo-web-components/glomo-analytics-gift-card-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('error_response_brand_list')]: {
            bind: 'firePageViewError'
          },
          [getGlobalName('fire_page_view_event')]: {
            bind: 'firePageView'
          },
          [getGlobalName('cells_oc_banner_button_event_click_start')]: {
            bind: 'appOnClickStart'
          }
        },
        out: {
          [getGlobalName('analytics_page_view_brand_list')]: {
            bind: 'analytics-page-view',
            analytics: ANALYTICS.PAGE_VIEW
          },
          [getGlobalName('analytics_page_view_error_list')]: {
            bind: 'analytics-page-view-error',
            analytics: ANALYTICS.PAGE_VIEW_ERROR
          },
          [getGlobalName('analytics_on_click_start')]: {
            bind: 'analytics-on-click-start',
            analytics: ANALYTICS.ON_CLICK_START
          }
        }
      }
    }
  };
  const base = {
    hash: 'blackhawk-purchase',
    currentPage: {
      url: '/blackhawk-purchase',
      params: []
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      navigationHandler,
      header,
      information,
      cardList,
      boxInformation,
      purchaseDM,
      blackHawkDM,
      analyticsBlackhawkPurchase
    ]
  };
  localStorage.addOutStorageChannels(base.components, [ 'blackhawk_welcome_information' ], CONFIG);
  addRetryErrors(base)([
    {
      id: 'LIST-ERROR',
      acceptRetry: { bind: 'retryCardList', component: 'glomo-gift-card-manager-purchase-mx' },
      acceptCallForHelp: { bind: 'callBbvaLine', component: 'glomo-gift-card-manager-purchase-mx' }
    }
  ]);

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
