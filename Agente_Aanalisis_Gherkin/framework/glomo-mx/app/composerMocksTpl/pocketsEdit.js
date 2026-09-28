/* eslint-disable new-cap, no-shadow */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'pocketsEdit';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const SPINNER = utils.SPINNER(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const isNativeIos = CONFIG.nativeIos || false;

  if (isSpherica) {
    SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  }
  SPINNER.properties.className = isNativeIos ? 'feedback-ios-top-padding solid-spinner' : 'solid-spinner';
  SPINNER.properties.cellsConnections.in = {
    ...SPINNER.properties.cellsConnections.in,
    pockets_show_spinner: {
      bind: 'show'
    },
    pockets_hide_spinner: {
      bind: 'hide'
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      IOSFixedHeader: true,
      extraHeaderClass: 'bbva-core-blue'
    },
    propertiesSpherica: {
      disableEdgeSwipe: true,
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
          navigation_pockets_exit_spherica: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME + '_navigation_pockets_to_previous_page']: {
            bind: 'navigate-to-previous-page'
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'pockets-pockets',
      iconLeftPrimary: 'coronita:return-12',
      cellsConnections: {
        out: {
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'header-main-icon-left-primary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      rightButtons: [
        {
          id: 'btn-right-primary',
          name: 'close',
          icon: 'spherica:close',
          label: 'bbva-header-main-close-aria-label',
          accessibilityText: 'bbva-header-main-close-aria-label'
        }
      ],
      newCellsConnections: {
        add: {
          out: {
            navigation_pockets_exit_spherica: {
              bind: 'header-main-icon-click'
            }
          }
        },
        remove: {
          out: [
            [ PAGE_NAME + 'navigation_pockets_exit' ]
          ]
        }
      }
    }
  };

  const headerCategory = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    render: 'litElement',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    properties: {
      text: 'pockets-pocket-data',
      className: 'u-margin-bottom--1'
    }
  };

  const headerCategorySpherica = {
    zone: 'app__main',
    type: 'UI',
    tagSpherica: 'bbva-type-text-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    propertiesSpherica: {
      className: 'u-margin-bottom--1 u-margin--1 u-margin-bottom--2',
      size: '2XL',
      fontType: 'title-secondary',
      text: 'pockets-pocket-data-spherica',
      tag: 'span'
    }
  };

  const inputText = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-text',
    tagSpherica: 'bbva-form-input-spherica',
    familyPath: '@bbva-web-components/bbva-form-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-bottom--2',
      required: true,
      infoMessage: 'pockets-pocket-name-info',
      infoIcon: 'coronita:info',
      allowedPattern: '[A-Za-z0-9 ]',
      maxlength: 18,
      cellsConnections: {
        in: {
          pockets_bbva_form_text_label: {
            bind: 'label'
          },
          pockets_edit_set_alias: {
            bind: 'value'
          },
          pockets_edit_get_input_value: {
            bind: 'submitInput'
          }
        },
        out: {
          pockets_edit_alias_changed: {
            bind: 'form-field-button-submit'
          },
          pockets_edit_get_input_value: {
            bind: 'input'
          }
        }
      }
    },
    propertiesSpherica: {
      id: 'inputName',
      type: 'text',
      ambient: 'primary-alt',
      newCellsConnections: {
        add: {
          out: {
            pockets_edit_alias_changed_spherica: {
              bind: 'form-input-value-change'
            }
          }
        },
        remove: {
          in: [
            'pockets_edit_get_input_value'
          ],
          out: [
            'pockets_edit_get_input_value',
            'pockets_edit_alias_changed'
          ]
        }
      }
    }
  };

  const headerCategoryCheckBox = {
    zone: 'app__main',
    type: 'UI',
    tagSpherica: 'bbva-header-category-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'pockets-scheduled-pocket',
      hasHelp: true,
      hidden: true,
      className: 'u-margin-bottom--0 u-padding-left--1',
      cellsConnections: {
        in: {
          pockets_hide_scheduled_form: {
            bind: 'hidden'
          }
        },
        out: {
          pockets_edit_help_modal_click: {
            bind: 'header-category-help-click'
          }
        }
      }
    }
  };


  const checkbox = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-checkbox',
    tagSpherica: 'bbva-form-checkbox-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-form-checkbox',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      className: 'u-margin--1',
      required: true,
      help: true,
      name: 'choice13',
      value: '13',
      labelOut: 'pockets-scheduled-pocket',
      hidden: true,
      helpIcon: 'coronita:help',
      checkIcon: 'coronita:checkmark',
      cellsConnections: {
        in: {
          pockets_bbva_form_checkbox_label: {
            bind: 'label'
          },
          pockets_hide_scheduled_form: {
            bind: 'hidden'
          },
          pockets_edit_set_checked: {
            bind: 'checked'
          }
        },
        out: {
          pockets_edit_checkbox_click: {
            bind: 'click'
          },
          pockets_edit_help_modal_click: {
            bind: 'bbva-form-checkbox-help-click'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      labelOut: ''
    }
  };

  const amountInput = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-amount',
    tagSpherica: 'bbva-form-input-spherica',
    familyPath: '@bbva-web-components/bbva-form-amount',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-bottom--2',
      inputMode: 'decimal',
      hidden: true,
      language: 'es-MX',
      localCurrency: 'MXN',
      iconSize: 'icon-size-26',
      clearIcon: 'coronita:close',
      cellsConnections: {
        in: {
          pockets_bbva_form_amount_label: {
            bind: 'label'
          },
          pockets_edit_set_amount: {
            bind: 'value'
          },
          pockets_edit_get_input_value: {
            bind: 'submitInput'
          },
          pockets_hide_scheduled_form: {
            bind: 'hidden'
          },
          pockets_set_currency_code: {
            bind: 'currencyCode'
          },
          pockets_disable_amount_input: {
            bind: 'disabled'
          },
          pockets_reset_amount: {
            bind: 'clearInput'
          }
        },
        out: {
          pockets_edit_amount_changed: {
            bind: 'form-field-button-submit'
          },
          pockets_edit_get_input_value: {
            bind: 'input'
          },
          pockets_edit_amount_input_focus_out: {
            bind: 'form-field-input-blur'
          }
        }
      }
    },
    propertiesSpherica: {
      id: 'inputScheduledAmount',
      type: 'amount',
      modeInput: 'decimal',
      currencyCode: 'MXN',
      className: 'u-margin--1 u-margin-bottom--2 u-margin-top--0',
      newCellsConnections: {
        add: {
          out: {
            pockets_edit_amount_changed_spherica: {
              bind: 'form-input-value-change'
            }
          }
        },
        remove: {
          in: [
            'pockets_edit_get_input_value'
          ],
          out: [
            'pockets_edit_amount_changed',
            'pockets_edit_get_input_value',
            'pockets_edit_amount_input_focus_out'
          ]
        }
      }
    }
  };

  const buttonAccept = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      className: 'u-display--table u-margin--center u-margin-bottom--1-5',
      variant: 'primary',
      text: 'pockets-continue',
      cellsConnections: {
        in: {
          pockets_disable_button: {
            bind: 'disabled'
          }
        },
        out: {
          pockets_edit_accept_click: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--1 u-max-width--2',
      size: 'M'
    }
  };

  const buttonCancel = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      className: 'u-display--table u-margin--center',
      variant: 'link',
      text: 'pockets-cancel',
      cellsConnections: {
        out: {
          pockets_cancel_edit_pocket: {
            bind: 'click'
          }
        }
      }
    }
  };

  const pocketsDMLit = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-update-savings',
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
          [PAGE_NAME + '_init_page']: {
            bind: 'init'
          },
          pockets_set_partial_pockets: {
            bind: 'partialPockets'
          },
          pockets_edit_alias_changed: {
            bind: 'currentPocketAlias'
          },
          pockets_edit_amount_changed: {
            bind: 'currentPocketAmount'
          },
          pockets_edit_accept_click: {
            bind: 'postEditPocket'
          },
          pockets_is_payroll_account: {
            bind: 'isPayrollAccount'
          },
          pockets_edit_help_modal_click: {
            bind: 'openHelpModal'
          },
          pockets_edit_checkbox_click: {
            bind: 'toggleChecked'
          },
          pockets_cancel_edit_pocket: {
            bind: 'exitOperative'
          },
          [PAGE_NAME + '_navigation_pockets_to_previous_page']: {
            bind: 'exitOperative'
          },
          pockets_edit_amount_input_focus_out: {
            bind: 'formatAmount'
          },
          pockets_edit_amount_changed_spherica: {
            bind: 'savePocketNewAmount'
          },
          pockets_edit_alias_changed_spherica: {
            bind: 'savePocketNewAlias'
          }
        },
        out: {
          pockets_bbva_form_text_label: {
            bind: 'bbva-form-text-label'
          },
          pockets_bbva_form_checkbox_label: {
            bind: 'bbva-form-checkbox-label'
          },
          pockets_bbva_form_amount_label: {
            bind: 'bbva-form-amount-label'
          },
          pockets_show_spinner: {
            bind: 'show-spinner'
          },
          pockets_hide_spinner: {
            bind: 'hide-spinner'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-modal'
          },
          pockets_edit_exit_operative: {
            bind: 'leave-pockets-edit',
            backStep: true
          },
          pockets_edit_set_alias: {
            bind: 'pocket-alias-changed'
          },
          pockets_disable_button: {
            bind: 'disable-button'
          },
          pockets_disable_amount_input: {
            bind: 'disable-amount-input'
          },
          pockets_reset_amount: {
            bind: 'reset-amount-input'
          },
          pockets_edit_set_amount: {
            bind: 'pocket-amount-changed'
          },
          pockets_edit_set_checked: {
            bind: 'pocket-checked-changed'
          },
          pockets_edit_get_input_value: {
            bind: 'pocket-get-input-value'
          },
          pockets_hide_scheduled_form: {
            bind: 'hide-scheduled-form'
          },
          pockets_set_currency_code: {
            bind: 'set-currency-code'
          },
          [PAGE_NAME + '_pockets_set_success_properties']: {
            bind: 'set-success-properties-pocketsEdit'
          },
          pockets_update_pocket: {
            bind: 'update-pocket'
          },
          global_retry_error: {
            bind: 'send-retry-error'
          },
          pockets_navigate_success: {
            bind: 'navigate-to-success',
            link: {
              page: 'pocketsSuccess',
              skipHistory: true
            }
          },
          global_custom_error: {
            bind: 'open-update-pocket-exit-confirm-modal'
          }
        },
        params: {
          'pocketId': 'global_pocket_id'
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-modal'
            }
          }
        },
        remove: {
          out: [ 'global_alert_manager_open_with_settings' ]
        }
      }
    }
  };

  const base = {
    hash: 'pockets-edit',
    currentPage: {
      url: '/pockets-edit',
      params: []
    },
    page,
    template,
    components: [
      SPINNER,
      lifeCycle,
      navigationHandler,
      header,
      headerCategory,
      inputText,
      checkbox,
      amountInput,
      buttonAccept,
      buttonCancel,
      pocketsDMLit
    ]
  };

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'update-pocket-error',
      acceptRetry: { bind: 'postEditPocket', component: 'bbva-manager-update-savings' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);

  if (isSpherica) {
    base.components.splice(4, 1, headerCategorySpherica);
    base.components.splice(6, 0, headerCategoryCheckBox);
    base.components.splice(10, 1);
  }

  return sphericaPageUtils.spherize(base);
};
