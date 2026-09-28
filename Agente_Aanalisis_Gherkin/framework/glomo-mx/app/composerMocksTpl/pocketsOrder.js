/* eslint-disable complexity, new-cap, no-shadow */
'use strict';

const _isSpherica = (flag, text, textTwo) => {
  return flag ? text : textTwo;
};

module.exports = CONFIG => {
  const PAGE_NAME = 'pocketsOrder';
  const _page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const utils = require('./common/helpers/_utils');
  const SPINNER = utils.createSpinner(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  SPINNER.properties.className = isNativeIos ? 'feedback-ios-top-padding solid-spinner' : 'solid-spinner';

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          pocket_close_update_spherica: {
            bind: 'openWithSettings'
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
      disableEdgeSwipe: true,
      headerFixed: true,
      footerHeight: 96,
      className: isNativeIos ? 'ios-top-padding' : '',
      IOSFixedHeader: true,
      extraHeaderClass: 'bbva-core-blue'
    },
    propertiesSpherica: {
      disableEdgeSwipe: true,
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'spherica-midnight-blue'
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
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
          [PAGE_NAME + '_init_page']: {
            bind: 'init-page'
          },
          [PAGE_NAME + '_reset_page']: {
            bind: 'reset'
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
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME + '_navigation_pockets_to_previous_page']: {
            bind: 'navigate-to-previous-page',
            backStep: true
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
      titleName: 'pockets-sort-pockets',
      className: 'header--core',
      rightIcon: 'coronita:close',
      back: true,
      cellsConnections: {
        out: {
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: _isSpherica(isSpherica, '', 'click-left-button')
          },
          exit_function_order: {
            bind: _isSpherica(isSpherica, 'click-left-button', 'click-right-button')
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'header',
      rightIcon: '',
      leftIcon: 'coronita:back',
      leftIconText: 'cells-molecule-header-spherica-return'
    }
  };

  const cellsTextDescripton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    tagSpherica: 'cells-text-description-spherica',
    properties: {
      className: 'pocketsOrderMessage',
      mainDescription: 'pockets-sort-pockets-instructions'
    },
    propertiesSpherica: {
      className: 'first-main-description-no-margin-top'
    }
  };

  const bbvaAggreagationDraggableList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-draggable-list',
    tagSpherica: 'bbva-aggregation-draggable-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-draggable-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-draggable-list-spherica',
    render: 'litElement',
    properties: {
      currencyCode: 'MXN',
      localCurrency: 'MXN',
      language: 'es-MX',
      cellsConnections: {
        in: {
          data_pockets_info: {
            bind: 'initialInformation'
          },
          draggable_default_item_drag_end: {
            bind: 'getDataChild'
          },
          pockets_get_order: {
            bind: 'sendAndResetSortedData'
          },
          pockets_reset_order: {
            bind: 'reset'
          },
          click_confirm_button: {
            bind: 'sendAndResetSortedData'
          },
          alert_saving_caution_accept: {
            bind: 'sendAndResetSortedData'
          },
          pockets_clean_data: {
            bind: 'clearAll'
          },
          pocketsOrder_navigation_pockets_to_previous_page: {
            bind: 'clearAll'
          },
          alert_saving_caution_cancel: {
            bind: 'clearAll'
          }
        },
        out: {
          movement_of_pockets: {
            bind: 'draggable-default-drag-over'
          },
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'leave-order-pockets'
          },
          set_update_data_pockets: {
            bind: 'get-sorted-data'
          },
          diabled_modal_update: {
            bind: 'disable-modal'
          },
          activate_button: {
            bind: 'modified-activate'
          },
          disabled_button: {
            bind: 'modified-disabled'
          },
          draggable_default_item_drag_start: {
            bind: 'draggable-default-item-drag-start'
          },
          draggable_default_item_drag_end: {
            bind: _isSpherica(isSpherica, 'draggable-default-sort-end', 'draggable-default-item-drag-end')
          },
          draggable_default_item_click: {
            bind: 'draggable-default-item-click'
          }
        }
      }
    }
  };

  const cellsConfirmButtons = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    tagSpherica: 'cells-confirm-buttons-spherica',
    properties: {
      config: {
        buttons: {
          primary: {
            text: 'pockets-save',
            action: 'navigation-patrimonial-assistance-event',
            disabled: true
          }
        }
      },
      cellsConnections: {
        in: {
          alert_saving_caution_cancel: {
            bind: 'disablePrimaryButton'
          },
          activate_button: {
            bind: 'enablePrimaryButton'
          },
          disabled_button: {
            bind: 'disablePrimaryButton'
          },
          pockets_reset_button: {
            bind: 'disablePrimaryButton'
          }
        },
        out: {
          click_confirm_button: {
            bind: 'cells-confirm-buttons-click-primary'
          }
        }
      }
    }
  };

  const pocketsDMLit = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-savings',
    familyPath: '@glomo-web-components/bbva-manager-savings',
    render: 'litElement',
    properties: {
      pageName: PAGE_NAME,
      host: CONFIG.globalServices.host,
      pocketsApiVersion: CONFIG.globalServices.versions.pockets,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          pockets_go_order: {
            bind: 'setDataPocketsEvent'
          },
          set_update_data_pockets: {
            bind: 'setUpdateData'
          },
          activate_button: {
            bind: 'setActivateModal'
          },
          click_confirm_button: {
            bind: 'setDisabledModal'
          },
          exit_function_order: {
            bind: 'setModalData'
          },
          pockets_clean_data: {
            bind: 'cleanData'
          },
          pocketsOrder_navigation_pockets_to_previous_page: {
            bind: 'cleanData'
          },
          disabled_button: {
            bind: 'setDisabledModal'
          },
          alert_saving_caution_cancel: {
            bind: 'setDisabledModal'
          },
          control_service: {
            bind: 'controlServiceRequest'
          },
          service_request: {
            bind: 'patchPockets'
          }
        },
        out: {
          data_pockets_info: {
            bind: 'pockets-data'
          },
          global_message_snackbar: {
            bind: 'success-update-pockets'
          },
          disabled_modal: {
            bind: 'disabled-modal'
          },
          pocket_close_update: {
            bind: 'open-save-modal'
          },
          pocket_to_list: {
            bind: 'move-to-list',
            backStep: true
          },
          pockets_clean_data: {
            bind: 'move-to-list'
          },
          control_service: {
            bind: 'service-control'
          },
          service_request: {
            bind: 'continue-flow'
          },
          pockets_show_spinner: {
            bind: 'activate-spinner'
          },
          pockets_hide_spinner: {
            bind: 'disabled-spinner'
          },
          pockets_get_order: {
            bind: 'get-pockets-order'
          },
          pockets_reset_order: {
            bind: 'reset-pockets-order'
          },
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'leave-order-pockets'
          },
          pockets_reset_button: {
            bind: 'reset-button'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            pocket_close_update_spherica: {
              bind: 'open-save-modal'
            }
          }
        },
        remove: {
          out: [ 'pocket_close_update' ]
        }
      }
    }
  };

  const base = {
    hash: 'pockets-order',
    currentPage: {
      url: '/pockets-order'
    },
    pages: _page,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      cellsTextDescripton,
      bbvaAggreagationDraggableList,
      cellsConfirmButtons,
      SPINNER,
      pocketsDMLit
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
    SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  }

  return sphericaPageUtils.spherize(base);
};
