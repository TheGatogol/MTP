/* eslint-disable no-shadow */
'use strict';
// eslint-disable-next-line complexity
module.exports = PRODUCT => CONFIG => {
  const constants = require('../common/helpers/_constants');
  const isNativeIos = CONFIG.nativeIos || false;
  const {createSpinner, getCountry, getLocalCurrency, getLanguage, getShortFormatDate } = require('../common/helpers/_utils');
  const analiticsMoreInfo = require('../analytics/_productMoreInfo')();
  const products = ['card', 'insurance', 'deposit', 'account'];
  // eslint-disable-next-line new-cap
  const toastSnackbarParams = constants.toastSnackBarGeneralParamsSuccess;
  const sphericaPageUtils = require('../common/helpers/_spherica')(CONFIG, PRODUCT);
  const backEvent = PRODUCT + '-more-info-back-to-detail';
  const componentProductSummary = (PRODUCT, DEFAULT) => {
    const suffix = {
      account: true,
      card: true,
      fund: true,
      loan: true,
      insurance: true,
      deposit: true
    }[PRODUCT] && `-${getCountry()}`;
    return `${DEFAULT}${suffix || ''}`;
  };

  const accountResponseModel = {
    uy: {
      title: 'cells-product-more-info-general',
      items: [{
        key: 'cells-product-more-info-account-balance',
        field: 'availableBalance.currentBalances.0',
        isAmount: true,
        type: 'value'
      },
      {
        key: 'cells-product-more-info-account-currency',
        field: 'currencies.0.currency',
        type: 'labelCurrency'
      },
      {
        key: 'cells-product-more-info-account-number',
        field: 'number'
      },
      {
        key: 'cells-product-more-info-account-subaccount',
        field: 'alias',
        type: 'splitAlias'
      }, {
        key: 'cells-product-more-info-account-status',
        field: 'status.name'
      }]
    },
    pe: {
      title: 'cells-product-more-info-general',
      items: [{
        key: 'cells-product-more-info-account-type',
        field: 'accountType.name'
      },
      {
        key: 'cells-product-more-info-description',
        field: 'title.name'
      },
      {
        key: 'cells-product-more-info-account-ccc',
        field: 'NCC',
        type: 'customizedFormat'
      },
      {
        key: 'cells-product-more-info-account-cci',
        field: 'CCI',
        type: 'customizedFormat'
      },
      {
        key: 'cells-product-more-info-account-swift',
        field: 'SWIFT',
        type: 'customizedFormat'
      },
      {
        key: 'cells-product-more-info-opening-date',
        field: 'openingDate',
        type: 'date',
        format: 'DD MMMM YYYY'
      }]
    }
  };

  const moreInfoButtonText = ((country, product) => {
    return products.includes(product) ? 'cells-product-more-info-copy-label' : 'cells-product-more-info-share-label';
  })(getCountry(), PRODUCT);

  const iconBottomMessage = ((country, product) => {
    const namePage = ['deposit', 'card', 'insurance'];
    return namePage.includes(product) ? 'coronita:correct' : '';
  })(getCountry(), PRODUCT);

  const iconBottomMessageSys = ((country, product) => {
    const namePage = [ 'insurance' ];
    return namePage.includes(product) ? 'cells-product-more-info-detail-card-number-alternative' : 'cells-product-summary-card-copy-number-success';
  })(getCountry(), PRODUCT);

  const responseModel = PRODUCT === 'account' && accountResponseModel[getCountry()] ? accountResponseModel[getCountry()] : undefined;

  // eslint-disable-next-line no-unused-vars
  const dateFormat = (() => {
    return 'MM/YYYY';
  })(getCountry(), PRODUCT);

  const base = {
    currentPage: {
      url: PRODUCT + '/more-info',
      params: []
    },
    hash: PRODUCT + '-' + getCountry() + '-' + CONFIG.environment,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        headerFixed: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            [PRODUCT + '_more_info_init_page']: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            more_info_template_active: {
              bind: 'template-active'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__header',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        type: 'UI',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'cells-' + PRODUCT + '-more-info-header-title',
          cellsConnections: {
            out: {
              ['navigation_' + PRODUCT + '_product_more_info_back_request']: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back-mini',
          className: 'header--core-grey header',
          variant: 'primary-alt',
          leftIconText: 'cells-molecule-header-spherica-back'
        }
      },
      {
        zone: 'app__header',
        tag: 'glomo-navigation-handler',
        type: 'UI',
        properties: {
          backAction: backEvent,
          cellsConnections: {
            in: {
              navigation_account_more_info_to_share_info: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_more_info_to_share_info: {
                bind: 'navigation-to-share-product-info-product-id',
                link: {
                  page: 'shareProductInfo',
                  params: {
                    productId: 'productId'
                  }
                }
              }
            },
            params: {
              productId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-product-detail-manager',
        properties: {
          cellsConnections: {
            in: {
              [PRODUCT + '_more_info_init_page']: {
                bind: 'init'
              },
              ['global_' + PRODUCT + '_product_detail_reset_page']: {
                bind: 'reset'
              },
              [PRODUCT + 'copy_number_card']: {
                bind: 'copyCardNumber'
              },
              [PRODUCT + '_more_info_link-click']: {
                bind: 'showModalExternalLink'
              },
              set_more_details_product: {
                bind: 'product'
              },
              blue_set_more_details_product: {
                bind: 'product'
              }
            },
            out: {
              [PRODUCT + '_more_info_get']: {
                bind: 'init-services'
              },
              [PRODUCT + '_more_info_clipboard_channel']: {
                bind: 'cells-product-detail-card-orange-request-copy-card'
              },
              global_alert_manager_open_with_settings: {
                bind: 'show-modal-external-link-open-modal'
              }
            },
            params: {
              productId: 'productId',
              cardTextInfo: 'cardTextInfo'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-product-more-info',
        tagSpherica: 'cells-product-more-info-spherica',
        properties: {
          dateFormat: dateFormat,
          productType: PRODUCT,
          buttonText: moreInfoButtonText,
          localCurrency: getLocalCurrency(),
          toastSnackBarParams: toastSnackbarParams,
          className: PRODUCT + '-more-info',
          class: 'insurance-product-more-info',
          cellsConnections: {
            in: {
              [PRODUCT + '_more_info_changed']: {
                bind: 'product'
              },
              [PRODUCT + '_set_more_info']: {
                bind: 'product'
              },
              blue_navigate_card_more_info_card: {
                bind: 'product'
              },
              ['global_' + PRODUCT + '_product_detail_reset_page']: {
                bind: 'reset'
              },
              [PRODUCT + '_product_more_info_reponse_success_unmasked']: {
                bind: '_unmaskData'
              },
              PRODUCT_MORE_INFO_ALERT_MODAL_EXTERNAL_LINK_ACCEPT: {
                bind: 'sendDescriptionUri'
              }
            },
            out: {
              global_message_snackbar: {
                bind: 'cells-product-more-info-key'
              },
              [PRODUCT + '_product_more_info_unmask_data']: {
                bind: 'cells-product-more-info-unmask-data'
              },
              [PRODUCT + '_more_info_help_click']: {
                bind: 'cells-product-more-info-help-click'
              },

              // DIFF WEB START
              ['global_share_' + PRODUCT + '_info_set_product']: {
                bind: 'share-product-info'
              },
              [PRODUCT + 'copy_number_card']: {
                bind: 'cells-product-more-info-button-click'
              },
              [PRODUCT + '_more_info_clipboard_button']: {
                bind: 'cells-product-more-info-button-click'
              },
              ['navigation_' + PRODUCT + '_more_info_to_share_info']: {
                bind: 'share-product-info'
              },
              ['account_more_info_share_detail']: {
                bind: 'send-product-info',
                analytics: analiticsMoreInfo._getExternalLinkData()
              },
              [PRODUCT + '_more_info_item_message']: {
                bind: 'cells-product-more-info-item-key'
              },
              [PRODUCT + '_more_info_link-click']: {
                bind: 'cells-product-more-info-link-click'
              },
              global_action_launcher_uri: {
                bind: 'send-description-uri'
              }
            }
          }
        },
        propertiesSpherica: {
          className: ''
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-clipboard-manager',
        tagSpherica: 'cells-clipboard-manager-spherica',
        properties: {
          hideCopiedText: true,
          cellsConnections: {
            in: {
              [PRODUCT + '_more_info_clipboard_channel']: {
                bind: 'text'
              },
              [PRODUCT + '_more_info_clipboard_button']: {
                bind: 'text'
              }
            },
            out: {
              [PRODUCT + '_more_info_clipboard_success']: {
                bind: 'text-copied'
              },
              [PRODUCT + '_more_info_clipboard_error']: {
                bind: 'clipboard-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PRODUCT + 'MoreInfo',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT + 'MoreInfo']: {
                bind: 'init'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              [PRODUCT + '_more_info_reset_page']: {
                bind: 'reset'
              },
              [PRODUCT + '_more_info_init_page']: {
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
        tag: componentProductSummary(PRODUCT, 'glomo-' + PRODUCT + '-summary-dm'),
        familyPath: 'glomo-' + PRODUCT + '-summary-dm',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          short: false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          [PRODUCT + 'ResponseModel']: responseModel,
          shareInfo: false,
          cellsConnections: {
            in: {
              more_info_reset_page: {
                bind: 'reset'
              },
              [PRODUCT + '_more_info_get']: {
                bind: 'getProductMoreInfo'
              },
              [PRODUCT + '_product_more_info_sign_submit']: {
                bind: 'signRequest'
              },
              [PRODUCT + '_product_more_info_sign_refresh']: {
                bind: 'cancelSignature'
              },
              global_share_loan_info_set_product: {
                bind: 'parseSharedInformation'
              },
              global_product_list_selected_product: {
                bind: 'setCardCachedData'
              }
            },
            out: {
              [PRODUCT + '_more_info_changed']: {
                bind: 'more-info-changed'
              },
              [PRODUCT + '_set_more_info']: {
                bind: 'set-more-info'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              [PRODUCT + '_product_more_info_sign_required']: {
                bind: 'signature-required'
              },
              [PRODUCT + '_product_more_info_reponse_success_unmasked']: {
                bind: PRODUCT + '-response-success-unmasked'
              },

              [PRODUCT + '_error_getting_' +  PRODUCT]: {
                bind: 'error-on-get-' + PRODUCT
              }
            },
            params: {
              productId: 'productId'
            }
          }
        },
        propertiesSpherica: {
          isSpherica: sphericaPageUtils.isSpherica()
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        tagSpherica: 'cells-bottom-modal-message-spherica',
        properties: {
          autoHide: true,
          time: 3000,
          icon: iconBottomMessage,
          iconSize: '24',
          className: PRODUCT,
          type: 'success',
          message: iconBottomMessageSys,
          fullHeight: false,
          messageDisabled: true,
          cellsConnections: {
            in: {
              [PRODUCT + '_more_info_clipboard_success']: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-sign-operation-modal',
        properties: {
          clearOnClose: true,
          togglePwdIcon: 'coronita:visualize',
          clearPwdIcon: 'coronita:close',
          togglePwdIconToggled: 'coronita:hide',
          showAppPss: true,
          className: isNativeIos ? 'ios-top-padding bg-core-blue' : 'bg-core-blue',
          cellsConnections: {
            in: {
              [PRODUCT + '_product_more_info_sign_required']: {
                bind: 'open'
              }
            },
            out: {
              [PRODUCT + '_product_more_info_sign_submit']: {
                bind: 'cells-sign-operation-submit'
              },
              [PRODUCT + '_product_more_info_sign_refresh']: {
                bind: 'cells-sign-operation-get-new-sms'
              },
              [PRODUCT + '_product_more_info_sign_otp_canceled']: {
                bind: 'close'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        type: 'UI',
        properties: {
          country: getCountry(),
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          dateFormat: getShortFormatDate(),
          sharedReceiptStyles: {
            infoIcon: {
              'display': 'block',
              'margin-left': 'auto',
              'margin-right': 'auto',
              'width': '1.75rem'
            }
          },
          cellsConnections: {
            in: {
              [PRODUCT + '_share_receipt']: {
                bind: 'captureReceipt'
              },
              [PRODUCT + '_info_receipt']: {
                bind: 'result'
              }
            },
            out: {
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
