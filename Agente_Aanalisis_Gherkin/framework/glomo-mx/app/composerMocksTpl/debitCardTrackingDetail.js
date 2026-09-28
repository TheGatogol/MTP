'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'debitCardTrackingDetail';
  const isNativeIos = CONFIG.nativeIos || false;

  const TEMPLATE = {
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding' : '',
      headerFixed: true,
      hasFooter: false
    }
  };

  const NAVIGATION_HANDLER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigation-to-back',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_click_button_understood']: {
            bind: 'goBack'
          },
          [PAGE_NAME + '_exit_header_button']: {
            bind: 'goBack'
          },
          [PAGE_NAME + '_modal_error_address_call_bbva_line']: {
            bind: 'goBack'
          },
          [PAGE_NAME + '_modal_error_address_exit']: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME + '_navigation_to_back_page']: {
            bind: 'navigation-to-back',
            backStep: true
          }
        }
      }
    }
  };

  const MOLECULE_HEADER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core login-gender-header',
      search: false,
      back: true,
      rightIcon: 'coronita:close',
      titleName: 'debit-tracking-detail-title-header',
      cellsConnections: {
        in: {
        },
        out: {
          [PAGE_NAME + '_exit_header_button']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const MANAGER_TRACKING = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-card-tracking',
    familyPath: '@glomo-web-components/bbva-manager-card-tracking',
    render: 'litElement',
    properties: {
      cellsConnections: {
        params: {
          globalUser: 'global_user'
        },
        in: {
          debit_card_tracking_set_adress_branch: {
            bind: 'addressBranch'
          },
          debit_card_tracking_send_card_tracking_page_detail: {
            bind: 'contentPageDetailSend'
          },
          debit_card_tracking_status_info_received: {
            bind: 'infoReceived'
          },
          [PAGE_NAME + '_set_customer_addresses']: {
            bind: 'onResponseCustomerAddresses'
          },
          [PAGE_NAME + '_clicked_show_address_button']: {
            bind: 'handleButtonAddress'
          },
          debit_card_tracking_send_address_object: {
            bind: 'addressMaskedSnapshoot'
          },
          [PAGE_NAME + '_on_error_customer_addresses']: {
            bind: 'errorAddressResponse'
          },
          [PAGE_NAME + '_exit_header_button']: {
            bind: 'trackindDetailReset'
          },
          [PAGE_NAME + '_click_button_understood']: {
            bind: 'trackindDetailReset'
          },
          [PAGE_NAME + '_clic_link_message']: {
            bind: 'openDialer'
          },
          [PAGE_NAME + '_modal_error_address_call_bbva_line']: {
            bind: 'openDialer'
          }
        },
        out: {
          [PAGE_NAME + '_set_customer_id']: {
            bind: 'bbva-manager-card-tracking-send-delivery-id'
          },
          [PAGE_NAME + '_set_unmasked_address_id']: {
            bind: 'bbva-manager-card-tracking-send-unmasked-address'
          },
          [PAGE_NAME + '_set_address']: {
            bind: 'bbva-manager-card-tracking-detail-show-address-ui'
          },
          [PAGE_NAME + '_get_customer_unmasked_addresses']: {
            bind: 'bbva-manager-card-tracking-detail-show-address-unmasked'
          },
          [PAGE_NAME + '_set_image_tracking_detail']: {
            bind: 'bbva-manager-card-tracking-detail-set-image'
          },
          [PAGE_NAME + '_set_title_tracking_detail']: {
            bind: 'bbva-manager-card-tracking-detail-set-title-page'
          },
          debit_card_tracking_set_link_name_button_address: {
            bind: 'bbva-manager-card-tracking-detail-set-link-name-text'
          },
          [PAGE_NAME + '_set_message_tracking_detail']: {
            bind: 'bbva-manager-card-tracking-detail-set-message'
          },
          [PAGE_NAME + '_modal_error_address']: {
            bind: 'bbva-manager-card-tracking-error-address'
          },
          [PAGE_NAME + '_help_open_dialer']: {
            bind: 'open-call-action'
          },
          [PAGE_NAME + '_set_title_place_delivery']: {
            bind: 'bbva-manager-card-tracking-detail-set-title-place-delivery'
          },
          [PAGE_NAME + '_set_lighting-text']: {
            bind: 'bbva-manager-card-tracking-detail-set-lighting-text'
          },
          [PAGE_NAME + '_set_title_from_received']: {
            bind: 'bbva-manager-card-tracking-detail-set-title-from-received'
          }
        }
      }
    }
  };

  const GLOBAL_APIS_CUSTOMERS_BGADPMOCK = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      customerAddressesApiVersion: CONFIG.globalServices.versions.customers,
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_customer_id']: {
            bind: 'customerId'
          },
          [PAGE_NAME + '_get_customer_unmasked_addresses']: {
            bind: 'getCustomerAddresses'
          }
        },
        out: {
          [PAGE_NAME + '_set_customer_addresses']: {
            bind: 'set-customer-addresses'
          },
          [PAGE_NAME + '_on_error_customer_addresses']: {
            bind: 'error-on-get-customer-addresses'
          }
        }
      }
    }
  };

  const IMAGE_HEADER = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-banner-image',
    familyPath: '@bbva-web-components/bbva-banner-image',
    render: 'litElement',
    properties: {
      className: 'image-size-auto',
      fullwidth: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_image_tracking_detail']: {
            bind: 'imageSrc'
          }
        },
        out: {
        }
      }
    }
  };

  const TITLE_PAGE = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'text-margin-0 u-margin-bottom--2',
      size: 'L',
      alignment: 'center',
      fontWeight: '500',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_title_tracking_detail']: {
            bind: 'text'
          }
        },
        out: {
        }
      }
    }
  };

  const PLACE_DELIVERY = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-link',
    familyPath: '@bbva-web-components/bbva-list-link',
    render: 'litElement',
    container: true,
    properties: {
      className: '',
      id: 'place',
      noHeaderLink: true,
      cellsConnections: {
        in: {
          debit_card_tracking_set_link_name_button_address: {
            bind: 'linkText'
          },
          [PAGE_NAME + '_set_title_place_delivery']: {
            bind: 'headerText'
          },
          [PAGE_NAME + '_set_lighting-text']: {
            bind: 'lightingText'
          }
        },
        out: {
          [PAGE_NAME + '_clicked_show_address_button']: {
            bind: 'list-link-click'
          }
        }
      }
    }
  };

  const  PLACE_DELIVERY_ADDRESS = {
    zone: 'place.description',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'span',
      size: 'S',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_address']: {
            bind: 'text'
          },
          debit_card_tracking_set_adress_branch: {
            bind: 'text'
          },
          debit_card_tracking_set_address_ui: {
            bind: 'text'
          }
        },
        out: {
        }
      }
    }
  };

  const PERSON_RECEIVED = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-link-description',
    familyPath: '@bbva-web-components/bbva-list-link-description',
    render: 'litElement',
    container: true,
    properties: {
      className: 'icon-align-right',
      id: 'received',
      noLink: true,
      ticked: 'yes',
      cellsConnections: {
        in: {
          debit_card_tracking_status_info_received: {
            bind: 'hidden'
          },
          [PAGE_NAME + '_set_title_from_received']: {
            bind: 'heading'
          }
        },
        out: {
        }
      }
    }
  };

  const DETAIL_PERSON_RECEIVED = {
    zone: 'received.',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      tag: 'span',
      size: 'S',
      cellsConnections: {
        in: {
          debit_card_tracking_status_info_received: {
            bind: 'hidden'
          },
          debit_card_tracking_send_card_tracking_info_received: {
            bind: 'text'
          }
        },
        out: {
        }
      }
    }
  };

  const MESSAGE_DETAIL = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    properties: {
      className: 'u-margin--1 u-margin-bottom--1-5 header-font-l',
      type: 'info-dark',
      icon: 'coronita:info',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_message_tracking_detail']: {
            bind: 'setProperties'
          }
        },
        out: {
          [PAGE_NAME + '_clic_link_message']: {
            bind: 'link-clicked'
          }
        }
      }
    }
  };

  const BUTTON_ACCEPT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-panel-button',
    properties: {
      buttonText: 'Entendido',
      buttonVariant: 'primary',
      show: true,
      cellsConnections: {
        in: {
        },
        out: {
          [PAGE_NAME + '_click_button_understood']: {
            bind: 'panel-button-item-click'
          }
        }
      }
    }
  };

  const ACTION_LAUNCHER = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_help_open_dialer']: {
            bind: 'openDialer'
          }
        },
        out: {}
      }
    }
  };

  const base = {
    currentPage: {
      url: '/debit-card-tracking-detail',
      params: []
    },
    hash: PAGE_NAME,
    template: TEMPLATE,
    components: [
      NAVIGATION_HANDLER,
      MOLECULE_HEADER,
      MANAGER_TRACKING,
      GLOBAL_APIS_CUSTOMERS_BGADPMOCK,
      IMAGE_HEADER,
      TITLE_PAGE,
      PLACE_DELIVERY,
      PLACE_DELIVERY_ADDRESS,
      PERSON_RECEIVED,
      DETAIL_PERSON_RECEIVED,
      MESSAGE_DETAIL,
      BUTTON_ACCEPT,
      ACTION_LAUNCHER
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);

  signConnector('cells-dm-global-apis-customers-bgadpmock', PAGE_NAME, ['set-customer-addresses', 'error-on-get-customer-addresses']);

  return base;
};
