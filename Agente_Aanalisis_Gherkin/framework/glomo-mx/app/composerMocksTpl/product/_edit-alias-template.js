'use strict';

module.exports = (product, productName) => CONFIG => {
  const pageName = 'edit-alias';
  const pages = require('../common/_pages')(CONFIG)(pageName);
  const addCommonErrors = require('../common/commonErrors/_dm-common-errors');
  const { headerHeightMinimum } = require('../common/helpers/_utils');
  const analytics = require('../analytics/_productEditAlias')(product)(CONFIG, 'edit alias');
  const {
    globalServices: { host, requiredToken = 'tsec' },
    native = false,
    nativeIos = false
  } = CONFIG;

  const configAlias = {
    pattern: '^[A-Za-z0-9 ]+$',
    maxLength: 20,
    infoMessage: 'bbva-feature-edit-alias-form-field-info-message',
    inputSettings: {
      label: 'bbva-feature-edit-alias-form-field-label',
      placeholder: 'bbva-feature-edit-alias-placeholder'
    },
    errorMessage: {
      message: 'bbva-feature-edit-alias-form-field-info-message'
    }
  };

  const base = {
    hash: product + pageName,
    currentPage: {
      url: `/${product}-${pageName}`
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        id: `cells-template-${pageName}`,
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        headerHeightMinimum,
        className: nativeIos ? 'ios-top-padding' : '',
        headerHeight: 0,
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: product + 'EditAlias',
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + product + 'EditAlias']: {
                bind: 'init'
              }
            },
            out: {
              [product + '_edit_alias_init_page']: {
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
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-feature-edit-alias-' + productName,
        familyPath: '@glomo-web-components/bbva-feature-edit-alias-' + productName,
        render: 'litElement',
        properties: {
          host,
          requiredToken,
          native,
          productTypeEvent: productName,
          pattern: configAlias.pattern,
          maxLength: configAlias.maxLength,
          infoMessage: configAlias.infoMessage,
          label: configAlias.inputSettings.label,
          errorMessage: configAlias.errorMessage.message,
          placeholder: configAlias.inputSettings.placeholder,
          iOSFixedHeader: nativeIos,
          cellsConnections: {
            in: {
              ['navigation_' + productName + '_detail_to_edit_alias']: {
                bind: 'originalAlias'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              global_login_success: {
                bind: 'setPhoneNumber'
              },
              native_user_id: {
                bind: 'userId'
              }
            },
            out: {
              ['global_' + productName + '_edit_alias_success']: {
                bind: 'bbva-feature-edit-alias-' + productName + '-success-event',
                backStep: true
              },
              global_edit_alias_success_refresh: {
                bind: 'bbva-feature-edit-alias-' + productName + '-success-event'
              },
              navigate_to_previous_page: {
                bind: 'bbva-feature-edit-alias-' + productName + '-prepare-back-navigation',
                backStep: true
              },
              dashboard_refresh_financial_overview: {
                bind: 'bbva-feature-edit-alias-' + productName + '-success-event'
              },
              global_edit_alias_success_toast: {
                bind: 'bbva-feature-edit-alias-' + productName + '-success-toast'
              },
              global_edit_alias_success_toast_card: {
                bind: 'bbva-feature-edit-alias-card-toast-message'
              },
              ['credit_' + productName + '_analytics-fire-advanced-footprint']: {
                bind: 'credit-card-analytics-fire-advanced-footprint',
                analytics: analytics.CREDIT_CARD_APP_HUELLA_EDIT_ALIAS
              },
              ['debit_' + productName + '_analytics-fire-advanced-footprint']: {
                bind: 'debit-card-analytics-fire-advanced-footprint',
                analytics: analytics.DEBIT_CARD_APP_HUELLA_EDIT_ALIAS
              }
            },
            params: {
              productId: 'productId'
            }
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();
  return base;
};