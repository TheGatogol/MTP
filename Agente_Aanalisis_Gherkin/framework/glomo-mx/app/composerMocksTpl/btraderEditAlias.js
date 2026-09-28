/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const product = 'btrader';
  const pageName = 'btraderEditAlias';
  const {
    setProperty,
    connectionsIn,
    connectionsOut,
    createSpinner,
    addProperty,
    get
  } = require('./common/helpers/_utils');
  const base = require('./product/_product-edit-alias')(product)(CONFIG);
  const setPropertyBtrader = setProperty(base);
  const connectionsInBtrader = connectionsIn(base);
  const connectionsOutBtrader = connectionsOut(base);
  const hasDefaultPlaceholder = true;
  const analytics = require('./analytics/_btrader')(CONFIG);
  const sphericaPageUtils = require('../composerMocksTpl/common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const spinner = createSpinner(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const addProp = addProperty(base);

  spinner.properties.className = 'solid-spinner';
  spinner.properties.cellsConnections.in.close_control_veil = { bind: 'hide' };
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = { className: 'solid-spinner' };

  if (isSpherica) {
    const editAliasDm = get(base)('glomo-edit-alias-dm');
    delete editAliasDm.properties.cellsConnections.out.btrader_exit_edit_alias_request_confirm;
    delete editAliasDm.properties.cellsConnections.out.global_btrader_edit_alias_error_retry_modal;
    delete editAliasDm.properties.cellsConnections.out.global_btrader_edit_alias_error_modal;
  }

  base.template = {
    ...base.template,
    tagSpherica: 'cells-template-coronita-spherica',
    propertiesSpherica: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'bg-light-grey',
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
    }
  };

  addProp('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  addProp('cells-molecule-header').propertiesSpherica = {
    className: 'header--gray',
    variant: 'primary',
    titleName: 'cells-molecule-header-edit-alias-title',
    leftIcon: '',
    rightIcon: 'coronita:close',
    rightIconText: 'cells-molecule-header-spherica-close',
    cellsConnections: {
      out: {
        'btrader_navigation_edit_alias_back_request': {
          bind: 'click-right-button'
        }
      }
    }
  };

  addProp('glomo-edit-alias').tagSpherica = 'glomo-edit-alias-spherica';
  addProp('glomo-edit-alias').propertiesSpherica = {
    className: 'container_flex_text',
    infoMessage: 'glomo-edit-alias-message-spherica'
  };

  connectionsInBtrader('glomo-edit-alias').btrader_edit_alias_set_placeholder = {
    bind: 'setProperties'
  };

  connectionsOutBtrader('glomo-edit-alias-dm').btrader_edit_alias_set_placeholder = {
    bind: 'set-placeholder-alias'
  };

  if (isSpherica) {
    connectionsOutBtrader('glomo-edit-alias-dm').btrader_exit_edit_alias_request_confirm_spherica = {
      bind: 'open-popup-cancel-edit-alias'
    };

    connectionsOutBtrader('glomo-edit-alias-dm').btrader_edit_alias_error_retry_spherica = {
      bind: 'open-edit-alias-error-retry-modal'
    };

    connectionsOutBtrader('glomo-edit-alias-dm').btrader_edit_alias_error_spherica = {
      bind: 'open-edit-alias-error-modal'
    };

    connectionsOutBtrader('glomo-edit-alias-dm').btrader_edit_alias_retry_spherica = {
      bind: 'accept-retry-edit-alias'
    };
  } else {
    setPropertyBtrader('glomo-edit-alias-dm').messageSuccess = 'cells-btrader-edit-alias-bottom-modal-message-success';

    setPropertyBtrader('glomo-edit-alias-dm').hasDefaultPlaceholder = hasDefaultPlaceholder;

    setPropertyBtrader('glomo-edit-alias-dm').toastSnackBarParams = {
      'id': 1,
      'duration': 3000,
      'backgroundColor': '#277A3E',
      'textAlignment': 1,
      'textColor': '#FFFFFF',
      'textSize': 15.0,
      'maxLines': 10,
      'position': 'bottom',
      'textMargins': {
        'top': 24,
        'bottom': 24,
        'right': 16,
        'left': 16
      },
      'type': 'success'
    };
  }

  connectionsOutBtrader('cells-handle-life-cycle').btrader_edit_alias_analytics_init_page = {
    bind: 'init-page',
    analytics: analytics.btsiFingerprintEditAlias
  };

  connectionsOutBtrader('glomo-edit-alias-dm').global_message_snackbar = {
    bind: 'global-message-snackbar'
  };

  connectionsOutBtrader('glomo-edit-alias-dm').dashboard_refresh_financial_overview = {
    bind: 'success-service',
    analytics: analytics.btsiFingerprintSuccessfulAlias
  };

  connectionsOutBtrader('glomo-edit-alias').btrader_cancel_edit_alias = {
    bind: 'edit-alias-request-confirm-close'
  };

  connectionsOutBtrader.btrader_save_alias = {
    bind: 'getHeaderConfig'
  };

  if (isSpherica) {
    const glomoAlertManagerSpherica =  {
      zone: 'app__transactional',
      type: 'CC',
      tag: 'glomo-alert-manager-spherica',
      properties: {
        cellsConnections: {
          in: {
            btrader_exit_edit_alias_request_confirm_spherica: {
              bind: 'openWithSettings'
            },
            btrader_edit_alias_error_spherica: {
              bind: 'openWithSettings'
            },
            btrader_edit_alias_error_retry_spherica: {
              bind: 'openWithSettings'
            },
            btrader_edit_alias_retry_spherica: {
              bind: 'openWithSettings'
            }
          },
          out: {
            global_exit_edit_alias_confirm: {
              bind: 'alert-EXIT-PRODUCT-EDIT-ALIAS-accept'
            },
            btrader_edit_alias_retry: {
              bind: 'alert-EDIT-ALIAS-ERROR-RETRY-accept'
            }
          }
        }
      }
    };

    base.components.push(glomoAlertManagerSpherica);
    base.components.push(spinner);
  }
  return sphericaPageUtils.spherize(base);
};
