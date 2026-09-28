'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.properties.cellsConnections.in.mobile_manage_operation_terms_conditions_result = {
    bind: 'hide'
  };
  SPINNER.properties.cellsConnections.in.card_membership_open_control_veil = {
    bind: 'show'
  };
  SPINNER.properties.cellsConnections.in.card_membership_close_control_veil = {
    bind: 'hide'
  };
  SPINNER.properties.cellsConnections.in.global_terms_and_conditions_error_modal = {
    bind: 'hide'
  };
  const PDFDATA = 'tc_MembresiaTCredito';
  const COUNTRY = utils.getCountry();
  const isNativeIos = CONFIG.nativeIos || false;

  const configButtons = {
    buttons: {
      primary: {
        text: 'glomo-card-membership-exit-button-label',
        action: 'card_membership_button_exit'
      }
    }
  };

  /* life cycle handler */
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'cardMembership',
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_cardMembership: {
            bind: 'init'
          }
        },
        out: {
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
      className: 'header--dark',
      secondaryClass: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      titleName: 'glomo-card-membership-modal-title',
      cellsConnections: {
        in: {},
        out: {
          card_membership_exit_header_button: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    }
  };

  const cellsTextDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      titleIcon: 'help',
      title: 'glomo-card-membership-text-description-title',
      mainDescription: 'glomo-card-membership-text-description-body',
      cellsConnections: {
        in: {
          card_membership_description_text_employee: {
            bind: 'mainDescription'
          }
        },
        out: {
          glomo_card_membership_click_title_tooltip: {
            bind: 'cells-text-description-title-icon-click'
          }
        }
      }
    }
  };

  const cardMembershipManager = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-card-membership-manager',
    properties: {
      documentName: PDFDATA,
      operativeName: 'card-membership',
      cellsConnections: {
        in: {
          glomo_card_membership_click_title_tooltip: {
            bind: 'showModal'
          },
          card_membership_commision_pdf: {
            bind: 'showDocument'
          },
          mobile_manage_operation_terms_conditions_result: {
            bind: 'documentRequestedResult'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'card-membership-request-document',
            'forward-to-native': true
          },
          global_terms_and_conditions_error_modal: {
            bind: 'card-membership-request-document-error'
          },
          card_membership_open_control_veil: {
            bind: 'open-control-veil'
          },
          card_membership_close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const cellsKeyValues = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-key-values',
    properties: {
      className: 'inline h-gutter description-list margin-l',
      key: 'glomo-card-membership-fee-amount-label',
      cellsConnections: {
        in: {
          card_membership_fee_amount: {
            bind: 'value'
          }
        }
      }
    }
  };

  const barChartInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-product-summary',
    properties: {
      className: 'membership full-width layout-clean',
      hideMoreInfoButton: true,
      exoneratedInformation: 'glomo-card-membership-product-summary-exonerated-information',
      cellsConnections: {
        in: {
          get_card_membership_conditions: {
            bind: 'setProperties'
          }
        },
        out: {}
      }
    }
  };

  const cellsIconMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    properties: {
      className: 'help message-input',
      type: 'info',
      icon: 'coronita:info',
      iconSize: '16',
      message: 'glomo-card-membership-icon-message-period',
      cellsConnections: {
        in: {
          card_membership_remaining_time: {
            bind: 'message'
          },
          card_membership_employee_exonerated: {
            bind: 'message'
          }
        },
        out: {}
      }
    }
  };

  const paymentIconMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message-change-data',
    properties: {
      iconMessageClass: 'h-gutter',
      type: 'info',
      icon: 'coronita:info',
      iconSize: '26',
      message: 'glomo-card-membership-icon-message-label',
      showChangeData: true,
      hasMultipleData: true,
      changeDataText: 'glomo-card-membership-icon-message-more-info',
      cellsConnections: {
        in: {
          card_membership_icon_message_employee: {
            bind: 'message'
          }
        },
        out: {
          card_membership_commision_pdf: {
            bind: 'change-data-pressed'
          }
        }
      }
    }
  };

  const confirmButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    properties: {
      config: configButtons,
      unfixed: 'true',
      cellsConnections: {
        in: {},
        out: {
          card_membership_exit_to_more_info: {
            bind: 'card_membership_button_exit',
            backStep: true
          }
        }
      }
    }
  };

  const base = {
    hash: COUNTRY + '-card-membership',
    currentPage: {
      url: '/card/:productId/membership',
      params: []
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {},
          out: {}
        }
      }
    },
    components: [
      SPINNER,
      lifeCycle,
      cardMembershipManager,
      header,
      cellsTextDescription,
      barChartInfo,
      cellsIconMessage,
      cellsKeyValues,
      paymentIconMessage,
      confirmButton
    ]
  };

  addCommonErrors(base.components)();

  return base;
};
