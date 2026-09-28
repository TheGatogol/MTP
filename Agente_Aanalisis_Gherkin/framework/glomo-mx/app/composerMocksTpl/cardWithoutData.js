/* eslint-disable max-statements */
'use strict';
module.exports = (CONFIG) => {
  const base = require('./product/_product-detail')('reward')(CONFIG);
  const storage = require('./common/_local-storage');
  const pageDmsOutCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const utils = require('./common/helpers/_utils');
  const get = utils.get(base);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const setProperty = utils.setProperty(base);
  const language = utils.getLanguage(CONFIG);
  const analytics = require('./analytics/_qrReader')();
  const nativeIos = CONFIG.nativeIos || false;

  base.template.tag = 'cells-template-coronita-spherica';

  base.template.properties.extraHeaderClass = 'bg-light-grey';
  base.template.properties.className =
  `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`;

  const operationsData = [
    {
      label: 'glomo-qr-scanner-operations-label-transfer',
      id: 'transfer',
      eventDetail: {
        productId: 1002,
        continue: 'account'
      },
      eventName: 'url-to-internal-transfer',
      icon: 'coronita:transfer',
      type: 'operation'
    }
  ];
  const differentOperations = [
    {
      label: 'glomo-qr-scanner-operations-label-card-payment',
      id: 'creditCardPay',
      eventDetail: {
        productId: 1002,
        continue: 'account'
      },
      eventName: 'url-to-credit-card-payments',
      icon: 'coronita:creditcard',
      type: 'operation'
    },
    {
      label: 'glomo-qr-scanner-operations-label-see-nip',
      id: 'seeNip',
      eventDetail: {
        productId: 1002,
        continue: 'account'
      },
      eventName: 'url-see-nip',
      icon: 'coronita:lock',
      type: 'operation'
    }
  ];
  const operationActiveData = [
    {
      label: 'glomo-qr-scanner-operations-label-card-active',
      id: 'active',
      eventDetail: {
        productId: 1002,
        continue: 'account'
      },
      eventName: 'url-to-active',
      icon: 'coronita:creditcard',
      type: 'operation'
    }
  ];
  const listDataActiveOrNot = [
    {
      'title': 'glomo-qr-scanner-list-secction-create-password-title',
      'texts': [
        {
          'text': 'glomo-qr-scanner-list-secction-create-password-text'
        }
      ],
      'event': 'create-password-event',
      'buttonConfig': {
        'icon': 'coronita:forward'
      }
    }
  ];
  const listDataNoClient = [
    {
      'title': 'glomo-qr-scanner-list-secction-register-title',
      'texts': [
        {
          'text': 'glomo-qr-scanner-list-secction-register-text'
        }
      ],
      'event': 'register-cells-data-event',
      'buttonConfig': {
        'icon': 'coronita:forward'
      }
    },
    {
      'title': 'glomo-qr-scanner-list-secction-create-password-title',
      'texts': [
        {
          'text': 'glomo-qr-scanner-list-secction-create-password-text'
        }
      ],
      'event': 'create-password-event',
      'buttonConfig': {
        'icon': 'coronita:forward'
      }
    },
    {
      'title': 'glomo-qr-scanner-list-secction-reactivation-title',
      'texts': [
        {
          'text': 'glomo-qr-scanner-list-secction-reactivation-text'
        }
      ],
      'event': 'reactivation-data-event',
      'buttonConfig': {
        'icon': 'coronita:forward'
      }
    }
  ];
  get('cells-product-summary-reward').tag = 'cells-product-summary-reward-spherica';
  setProperty('cells-product-summary-reward-spherica').detail = true;
  setProperty('cells-product-summary-reward-spherica').minHeightBox = true;
  setProperty('cells-product-summary-reward-spherica').language = language;
  setProperty('cells-product-summary-reward-spherica').hidden = true;

  get('cells-operations-list-indicators').tag = 'cells-operations-list-indicators-spherica';
  setProperty('cells-operations-list-indicators-spherica').loaded = true;
  get('cells-operations-list-indicators-spherica').properties.variant = 'primary-alt';

  get('cells-molecule-header').tag = 'cells-molecule-header-spherica';
  get('cells-molecule-header-spherica').properties.className = 'header--white-ios header--white';
  get('cells-molecule-header-spherica').properties.titleName = 'glomo-qr-scanner-header-title';
  get('cells-molecule-header-spherica').properties.rightIcon = 'coronita:close';
  get('cells-molecule-header-spherica').properties.rightIconSize = '22';
  get('cells-molecule-header-spherica').properties.rightIconText = 'Cerrar';
  get('cells-molecule-header-spherica').properties.rightIconSecondaryText = 'Ayuda';
  get('cells-molecule-header-spherica').properties.rightSecondaryIcon = 'coronita:help';
  get('cells-molecule-header-spherica').properties.rightSecondaryIconSize = '22';
  get('cells-molecule-header-spherica').properties.leftIcon = '';
  get('cells-molecule-header-spherica').properties.greetingAsTitle = false;
  get('cells-molecule-header-spherica').properties.variant = 'primary';

  connectionsIn('cells-handle-life-cycle').__bridge_page_cardWithoutData = {
    bind: 'init'
  };
  connectionsOut('cells-handle-life-cycle').qr_reader_landing_init_page = {
    bind: 'init-page'
  };
  connectionsOut('cells-molecule-header-spherica').qr_reader_landing_help_button_event_dm = {
    bind: 'click-right-secondary-button'
  };
  connectionsOut('cells-molecule-header-spherica').qr_reader_exit = {
    bind: 'click-right-button',
    backStep: true
  };
  connectionsOut('cells-molecule-header-spherica').qr_reader_back_left_button = {
    bind: 'click-left-button',
    backStep: true
  };

  delete base.template.properties.cellsConnections.out.reward_product_detail_content_scroll;
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          qr_reader_exit: {
            bind: 'goBack'
          }
        }
      }
    }
  };
  const cardQrScannerManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-qr-card-scanner-manager',
    properties: {
      isSpherica: true,
      nativeIos,
      descriptionList: 'glomo-qr-scanner-test-description-spherica',
      descriptionsList: 'glomo-qr-scanner-test-descriptions-spherica',
      imgBlueBbva: './images/spherica/qrReader/ascender-aqua.png',
      imgNotClientBbva: './images/spherica/qrReader/ascender-not-found.png',
      operationsData: operationsData,
      operationActiveData: operationActiveData,
      differentOperations: differentOperations,
      listDataActiveOrNot: listDataActiveOrNot,
      listDataNoClient: listDataNoClient,
      afterCard: 'glomo-qr-scanner-after-card',
      bbvaCard: 'glomo-qr-scanner-bbva-card',
      linkTextDetail: 'glomo-qr-scanner-detail-card',
      mainDescriptionOneOption: 'glomo-qr-scanner-main-description-one-option',
      mainDescriptionMoreOptions: 'glomo-qr-scanner-main-description-more-options',
      activeCard: 'glomo-qr-scanner-active-card',
      inactiveCard: 'glomo-qr-scanner-inactive-card',
      cardNotRegistered: 'glomo-qr-scanner-unregistered-card',
      unregisteredCard: 'glomo-qr-scanner-user-not-remembered',
      stringUrlToken: 'https://bbva.mx/qr-cards#data=',
      secondStringUrlToken: '&card=',
      cellsConnections: {
        in: {
          qr_reader_landing_help_button_event_dm: {
            bind: 'openModalHelpIcon'
          },
          qr_reader_exit: {
            bind: 'navigationReset'
          },
          qr_reader_back_left_button: {
            bind: 'navigationReset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'backButtonNative'
          },
          DIGITAL_ACTIVATION_QR_READER_RESET: {
            bind: 'navigationReset'
          },
          reset_landing_qr_reader_page: {
            bind: 'navigationReset'
          },
          qr_reader_create_password_request: {
            bind: 'setNavigationPanAKR'
          },
          qr_reader_register_request: {
            bind: 'setNavigationPanDigitalActivation'
          },
          global_storage_get_qr_landing_info_success: {
            bind: 'infoLocalStorage'
          },
          global_storage_get_qr_landing_info_error: {
            bind: 'noDataInLocalStorage'
          },
          qr_reader_close_button_event: {
            bind: 'navigationReset'
          },
          qr_reader_internal_transfer_operation: {
            bind: 'redirectToTransfers'
          },
          qr_reader_active: {
            bind: 'redirectToActiveCardDetail'
          },
          qr_reader_card_link_event: {
            bind: 'redirectToActiveCardDetail'
          },
          qr_reader_credit_card_payments_operation: {
            bind: 'redirectToPayments'
          },
          qr_reader_see_the_nip_operation: {
            bind: 'redirectToSeeNip'
          }
        },
        out: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-modal-help-icon'
          },
          global_get_from_storage: {
            bind: 'get-local-qr-card-from-local-storage'
          },
          global_remove_from_storage: {
            bind: 'remove-data-qr-landing'
          },
          qr_data_session_storage_operatives: {
            bind: 'storage-data-event-operatives'
          },
          qr_data_list_rediction_active: {
            bind: 'set-list-redirection-active-for-native'
          },
          qr_data_list_rediction_not_client: {
            bind: 'set-list-redirection-for-native'
          },
          qr_data_send_card_name: {
            bind: 'send-card-name'
          },
          qr_data_send_img_url: {
            bind: 'send-img-url'
          },
          qr_reader_error_modal: {
            bind: 'open-modal-error'
          },
          qr_data_send_pan: {
            bind: 'send-pan'
          },
          qr_data_send_link: {
            bind: 'send-card-link-title'
          },
          qr_data_send_description_list: {
            bind: 'send-description-list'
          },
          qr_reader_main_description_one_option: {
            bind: 'send-main-description'
          },
          qr_reader_limits: {
            bind: 'send-limits-operatives'
          },
          global_set_in_storage: {
            bind: 'set-local-storage'
          },
          qr_reader_navigation_reset: {
            bind: 'qr-reader-navigation-reset',
            backStep: true
          },
          cancelled_back_navigation: {
            bind: 'native-back-button',
            nativeLink: {
              page: 'nativeLogin'
            }
          },
          qr_reader_send_data_analytics: {
            bind: 'send-data-analytics'
          },
          navigation_digital_activation_landing_register: {
            bind: 'register-digital-landing-qr'
          },
          navigation_set_data_pan_card_landing: {
            bind: 'set-data-pan-card-landing'
          },
          navigation_set_data_pan_card_landing_digital_activation: {
            bind: 'set-data-pan-card-landing-digital-activation'
          },
          qr_reader_go_to_page_after_login_transfers: {
            bind: 'go-to-native-login-and-transfers',
            nativeLink: {
              page: 'nativeLogin',
              params: {
                pageAfterLogin: 'pageAfterLogin'
              }
            }
          },
          qr_reader_go_to_page_after_login_card_detail: {
            bind: 'go-to-native-login-and-card-detail',
            nativeLink: {
              page: 'nativeLogin',
              params: {
                pageAfterLogin: 'pageAfterLogin'
              }
            }
          },
          qr_reader_go_to_page_after_login_card_detail_see_nip: {
            bind: 'go-to-native-login-and-see-nip',
            nativeLink: {
              page: 'nativeLogin',
              params: {
                pageAfterLogin: 'pageAfterLogin'
              }
            }
          },
          qr_reader_go_to_page_after_login_card_detail_pay_card: {
            bind: 'go-to-native-login-and-payments',
            nativeLink: {
              page: 'nativeLogin',
              params: {
                pageAfterLogin: 'pageAfterLogin'
              }
            }
          },
          qr_reader_discard_mask_header: {
            bind: 'discard-mask-header'
          }
        },
        params: {
          qr: 'qr'
        }
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
            bind: 'openWithSettings'
          }
        }
      }
    }
  };
  const textDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description-spherica',
    properties: {
      cellsConnections: {
        in: {
          qr_reader_main_description_one_option: {
            bind: 'mainDescription'
          },
          qr_reader_main_description_more_options: {
            bind: 'mainDescription'
          },
          qr_data_send_description_list: {
            bind: 'title'
          }
        }
      }
    }
  };
  const linkList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-link-list-wrapper-spherica',
    properties: {
      variant: 'primary-alt',
      linkListIconSize: 'icon-size-24',
      light: true,
      cellsConnections: {
        in: {
          qr_data_list_rediction_active: {
            bind: 'listData'
          },
          qr_data_list_rediction_not_active: {
            bind: 'listData'
          },
          qr_data_list_rediction_not_client: {
            bind: 'listData'
          }
        },
        out: {
          qr_reader_register_send_request: {
            bind: 'register-data-event',
            'forward-to-native': true
          },
          qr_reader_reactivation_send_request: {
            bind: 'reactivation-data-event',
            nativeLink: {
              page: 'nativeLogin'
            }
          },
          qr_reader_create_password_request: {
            bind: 'create-password-event',
            link: {
              page: 'keyRecovery',
              params: {
                isLandingQr: 'true'
              }
            }
          },
          qr_reader_register_request: {
            bind: 'register-cells-data-event',
            link: {
              page: 'digitalActivation',
              params: {
                registerQR: 'true'
              }
            }
          }
        }
      }
    }
  };
  const analyticsLanding = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-landing-manager',
    familyPath: '@glomo-web-components/glomo-analytics-landing-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          qr_reader_send_data_analytics: {
            bind: 'firePageView'
          },
          qr_reader_navigation_reset: {
            bind: 'reset'
          }
        },
        out: {
          qr_reader_analytics_page_view: {
            bind: 'app-page-view',
            analytics: analytics.pageView
          }
        }
      }
    }
  };

  base.currentPage = {
    url: '/card-without-data/:productId'
  };
  base.components.splice(1, 0, {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message-spherica',
    properties: {
      className: '',
      type: 'default',
      src: '',
      icon: 'coronita:privacy-and-data',
      classForMainContainer: 'main-container-icon-on-top',
      message: 'glomo-qr-sacnner-icon-message'
    }
  });
  base.components.splice(2, 0, {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-card-advice-spherica',
    properties: {
      className: 'image-s u-margin--1',
      customClass: 'card-advice-mask-spherica',
      showCardMask: true,
      titleIcon: '',
      customMainContainerStyles: 'inline-main-container',
      customHeadingContainerStyles: 'heading-container-full-width',
      customLinkTextStyles: 'link-spacing',
      text: '',
      titleText: ' ',
      cellsConnections: {
        in: {
          qr_data_send_card_name: {
            bind: 'subtitleText'
          },
          qr_data_send_img_url: {
            bind: 'imageUrl'
          },
          qr_data_send_pan: {
            bind: 'text'
          },
          qr_data_send_link: {
            bind: 'linkText'
          }
        },
        out: {
          qr_reader_card_link_event: {
            bind: 'card-advice-link-click'
          }
        }
      }
    }
  });
  get('cells-operations-list-indicators-spherica').properties.viewMore = false;
  connectionsIn('cells-operations-list-indicators-spherica').qr_reader_limits = {
    bind: 'limit'
  };
  connectionsIn('cells-operations-list-indicators-spherica').qr_data_session_storage_operatives = {
    bind: 'operations'
  };
  connectionsOut('cells-operations-list-indicators-spherica').qr_reader_internal_transfer_operation = {
    bind: 'url-to-internal-transfer'
  };
  connectionsOut('cells-operations-list-indicators-spherica').qr_reader_active = {
    bind: 'url-to-active'
  };
  connectionsOut('cells-operations-list-indicators-spherica').qr_reader_credit_card_payments_operation = {
    bind: 'url-to-credit-card-payments'
  };
  connectionsOut('cells-operations-list-indicators-spherica').qr_reader_see_the_nip_operation = {
    bind: 'url-see-nip'
  };
  base.components.push(
    header,
    cardQrScannerManager,
    glomoAlertManagerSpherica,
    textDescription,
    linkList,
    analyticsLanding
  );
  pageDmsOutCommonErrors(base.components)();
  storage.addOutStorageChannels(base.components, ['qr_reader_landing_page', 'qr_landing_info'], CONFIG);
  return base;
};
