'use strict';

module.exports = PRODUCT => CONFIG => {
  const utils = require('../common/helpers/_utils');
  const PAGE_NAME = 'edit-alias';
  const pageName = PRODUCT + 'EditAlias';
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const pages = require('../common/_pages')(CONFIG)(PAGE_NAME);
  const {disconnectedBanner, cellsConnectionStatus} = require('../common/_cross-components');
  const ANALYTICS = require('../analytics/_productEditAlias')(PRODUCT)(CONFIG, 'edit alias');
  const addCommonErrors = require('../common/commonErrors/_dm-common-errors');
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('../common/helpers/_spherica')(CONFIG, PAGE_NAME);

  const configAlias = {
    onlySpacesInvalid: true,
    className: 'edit-alias-ui',
    infoMessageClass: 'icon-message-info-theme',
    infoMessageIcon: {
      icon: 'coronita:info',
      size: '16px'
    },
    inputSettings: {
      label: 'glomo-edit-alias-label',
      labelTop: true,
      icon: {
        icon: 'coronita:close',
        size: '26',
        label: 'icon-label-clear'
      }
    },
    errorMessage: {
      message: `glomo-edit-alias-message${sphericaPageUtils.isSpherica() ? '-spherica' : ''}`,
      icon: 'coronita:alert',
      size: '16px'
    },
    maxLength: 20,
    allowedValue: '^[A-Za-z0-9 ]+$',
    allowedChars: '^[A-Za-z0-9 ]+$'
  };

  const base = {
    hash: PRODUCT + PAGE_NAME,
    currentPage: {
      url: `/${PRODUCT}-${PAGE_NAME}`,
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        id: `cells-template-${PAGE_NAME}`,
        animationType: 'verticalUp',
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        headerHeight: utils.headerHeight,
        className: isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PRODUCT + 'EditAlias',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT + 'EditAlias']: {
                bind: 'init'
              }
            },
            out: {
              [PRODUCT + '_edit_alias_init_page']: {
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
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'cells-molecule-header-edit-alias-title',
          cellsConnections: {
            in: {},
            out: {
              [PRODUCT + '_navigation_edit_alias_back_request']: {
                bind: 'click-left-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'edit-alias-back-action',
          cellsConnections: {
            in: {
              [PRODUCT + '_edit_alias_cancel_retry']: {
                bind: 'goBack'
              },
              [PRODUCT + '_edit_alias_accept_exit']: {
                bind: 'goBack'
              },
              ['global_' + PRODUCT + '_edit_alias_success']: {
                bind: 'goBack'
              },
              global_exit_edit_alias_confirm: {
                bind: 'goBack'
              }
            },
            out: {
              [PRODUCT + '_exit_for_edit_alias']: {
                bind: 'edit-alias-back-action',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-edit-alias',
        properties: {
          className: configAlias.className,
          infoMessageIcon: configAlias.infoMessageIcon,
          inputSettings: configAlias.inputSettings,
          errorMessage: configAlias.errorMessage,
          maxLength: configAlias.maxLength,
          allowedValue: configAlias.allowedValue,
          cellsConnections: {
            in: {
              [PRODUCT + '_set_initial_alias']: {
                bind: 'originalAlias'
              },
              [PRODUCT + '_reset_edit_alias']: {
                bind: 'reset'
              },
              [PRODUCT + '_cancel_edit_alias']: {
                bind: 'reset'
              },
              [PRODUCT + '_exit_for_edit_alias']: {
                bind: 'reset'
              }
            },
            out: {
              [PRODUCT + '_save_alias']: {
                bind: 'save-alias'
              },
              [PRODUCT + '_cancel_edit_alias']: {
                bind: 'edit-alias-request-confirm-close',
                backStep: true
              },
              [PRODUCT + '_cancel_edit_alias_back_navigation']: {
                bind: 'edit-alias-prepare-back-navigation',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'glomo-edit-alias-dm',
        familyPath: 'glomo-edit-alias-dm',
        properties: {
          host: CONFIG.globalServices.host,
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          depositsApiVersion: CONFIG.globalServices.versions.deposits,
          loansApiVersion: CONFIG.globalServices.versions.loansEditAlias,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          disableOpenMaximized: true,
          configAlias: configAlias,
          cellsConnections: {
            in: {
              ['navigation_' + PRODUCT + '_detail_to_edit_alias']: {
                bind: 'setProductAlias'
              },
              ['global_' + PRODUCT + '_navigate_to_edit_alias']: {
                bind: 'setProductAlias'
              },
              [PRODUCT + '_save_alias']: {
                bind: 'saveAlias'
              },
              [PRODUCT + '_navigation_edit_alias_back_request']: {
                bind: 'manageBackButton'
              },
              [PRODUCT + '_edit_alias_retry']: {
                bind: 'saveAlias'
              },
              ['on_patch_' + PRODUCT + '_error']: {
                bind: 'openErrorModal'
              },
              global_alert_modal_close: {
                bind: 'manageBackButton'
              }
            },
            out: {
              [PRODUCT + '_set_initial_alias']: {
                bind: 'set-initial-alias'
              },
              [PRODUCT + '_reset_edit_alias']: {
                bind: 'reset-edit-alias'
              },
              ['global_' + PRODUCT + '_edit_alias_success']: {
                bind: 'send-product-with-new-alias'
              },
              global_edit_alias_success_refresh: {
                bind: 'send-product-with-new-alias'
              },
              show_toast_success_save_alias: {
                bind: 'global-message-snackbar'
              },
              ['on_patch_' + PRODUCT + '_error']: {
                bind: 'error-service'
              },
              open_control_veil: {
                bind: 'open-veil'
              },
              close_control_veil: {
                bind: 'close-veil'
              },
              global_alert_modal_close: {
                bind: 'close-error-modal'
              },
              [PRODUCT + '_exit_edit_alias_request_confirm']: {
                bind: 'open-popup-cancel-edit-alias'
              },
              [PRODUCT + '_exit_edit_alias_confirm_modal_accept']: {
                bind: 'accept-exit-edit-alias'
              },
              ['global_' + PRODUCT + '_edit_alias_error_modal']: {
                bind: 'open-edit-alias-error-modal'
              },
              ['global_' + PRODUCT + '_edit_alias_error_retry_modal']: {
                bind: 'open-edit-alias-error-retry-modal'
              },
              [PRODUCT + '_edit_alias_retry']: {
                bind: 'accept-retry-edit-alias'
              },
              [PRODUCT + '_exit_error_request']: {
                bind: 'cancel-edit-alias'
              },
              product_edit_alias_update_alias_account: {
                bind: 'update-product-alias-account'
              },
              [PRODUCT + '_analytics-fire-advanced-footprint']: {
                bind: 'common-analytics-fire-advanced-footprint',
                analytics: ANALYTICS.APP_HUELLA_EDIT_ALIAS
              },
              ['credit_' + PRODUCT + '_analytics-fire-advanced-footprint']: {
                bind: 'credit-card-analytics-fire-advanced-footprint',
                analytics: ANALYTICS.CREDIT_CARD_APP_HUELLA_EDIT_ALIAS
              },
              ['debit_' + PRODUCT + '_analytics-fire-advanced-footprint']: {
                bind: 'debit-card-analytics-fire-advanced-footprint',
                analytics: ANALYTICS.DEBIT_CARD_APP_HUELLA_EDIT_ALIAS
              }
            },
            params: {
              cardId: 'productId'
            }
          }
        }
      }
    ]
  };
  base.components.push(disconnectedBanner(pageName), cellsConnectionStatus(pageName));
  addCommonErrors(base.components)();
  return base;
};
