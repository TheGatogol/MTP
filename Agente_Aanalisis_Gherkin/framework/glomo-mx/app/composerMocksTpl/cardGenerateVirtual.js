/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {

  // imports
  const isNativeIos = CONFIG.nativeIos || false;

  const PAGENAME = 'cardGenerateVirtual';
  const PAGE_NAME_CHANNEL = 'card_generate_virtual';
  const UTILS = require('./common/helpers/_utils');
  const SPINNER = UTILS.SPINNER(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const ANALYTICS = require('./analytics/_cardGenerate')({});
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGENAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        out: {
          global_generate_virtual_card_retry_error: {
            bind: 'alert-glomo-generate-virtual-card-error-retry-accept'
          },
          global_generate_virtual_card_critical_error: {
            bind: 'alert-glomo-generate-virtual-card-error-critical-accept'
          },
          global_generate_virtual_card_max_attemp_error: {
            bind: 'alert-glomo-generate-virtual-card-error-maxAttemps-accept'
          },
          global_generate_virtual_card_call_office: {
            bind: 'glomo-generate-virtual-card-call-office-action'
          },
          global_generate_virtual_card_max_attemp_error_cancel: {
            bind: 'alert-glomo-generate-virtual-card-error-maxAttemps-cancel'
          }
        }
      }
    }
  };

  const configButtons = {
    buttons: {
      primary: {
        text: 'generate-card--button-text',
        action: 'generate-virtual-confirm',
        disabled: true
      }
    }
  };

  let base = {

    hash: 'card-generate-virtual',

    currentPage: {
      url: '/card-detail/:productId/generate',
      params: []
    },

    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: true,
        footerFixed: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
          },
          out: {
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        footerHeight: 16
      }
    },

    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGENAME,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGENAME]: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PAGE_NAME_CHANNEL + '_init_page']: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--night',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-generate-virtual-card-header-title',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_set_header_title']: {
                bind: 'setProperties'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_back_button_pressed']: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          secondaryBtn: '#btnRight',
          leftIcon: '',
          titleName: 'glomo-generate-virtual-card-header-title-spherica',
          rightIcon: 'coronita:close',
          className: '',
          rightIconText: 'cells-molecule-header-spherica-close',
          cellsConnections: {
            out: {
              card_generate_virtual_back_button_pressed: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-shap-info-page',
        tagSpherica: 'cells-shap-info-page-spherica',
        properties: {
          mainIcon: 'images/illustrations/ilu_digital_card_activation.svg',
          heading: 'generate-card--title',
          cellsConnections: {
            out: {}
          }
        },
        propertiesSpherica: {
          className: 'generate-card',
          variant: 'primary-alt',
          mainIcon: 'images/spherica/cardActivation/activate-card-spherica.svg',
          sizeImage: 'XL',
          message: 'cells-shap-info-page-description-spherica'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-lists',
        tagSpherica: 'cells-lists-spherica',
        properties: {
          showLink: false,
          list: [
            'generate-card--benefit-1',
            'generate-card--benefit-2'
          ],
          cellsConnections: {
            out: {}
          }
        },
        propertiesSpherica: {
          className: 'padding-clean'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-checkbox-button',
        tagSpherica: 'cells-checkbox-button-spherica',
        properties: {
          className: 'has-padding-extra',
          descriptionInfo: 'generate-card-terms--paragraph',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'uncheck'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_checkbox_button_checked']: {
                bind: 'cells-checkbox-button-checked'
              },
              [PAGE_NAME_CHANNEL + '_checkbox_button_unchecked']: {
                bind: 'cells-checkbox-button-unchecked'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-margin--grid u-margin-left--1 u-margin-right--1',
          variant: 'primary-alt'
        }
      },
      {
        zone: isSpherica ? 'app__main' : 'app__footer',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        properties: {
          className: 'confirm-buttons-margin-top actions-buttons-link no-shadow',
          config: configButtons,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_checkbox_button_checked']: {
                bind: 'enablePrimaryButton'
              },
              [PAGE_NAME_CHANNEL + '_checkbox_button_unchecked']: {
                bind: 'disablePrimaryButton'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_generate_virtual_card']: {
                bind: 'generate-virtual-confirm'
              }
            }
          }
        },
        propertiesSpherica: {
          unfixed: true,
          hideDivider: true
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards',
        properties: {
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_generate_virtual_card_request']: {
                bind: 'postCards'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_generate_virtual_card_success']: {
                bind: 'post-cards'
              },
              [PAGE_NAME_CHANNEL + '_generate_virtual_card_error']: {
                bind: 'error-on-post-cards'
              },
              global_card_generate_virtual_cards_success: {
                bind: 'post-cards'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'glomo-generate-virtual-card-manager',
        properties: {
          phoneNumber: CONFIG.phoneNumberContact,
          cellsConnections: {
            in: {
              global_card_detail_data_success_channel: {
                bind: 'cardData'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              global_generate_virtual_card_retry_error: {
                bind: 'generateVirtualCardRequest'
              },
              global_generate_virtual_card_call_office: {
                bind: 'callToContactNumber'
              },
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PAGE_NAME_CHANNEL + '_generate_virtual_card']: {
                bind: 'generateVirtualCardRequest'
              },
              [PAGE_NAME_CHANNEL + '_generate_virtual_card_success']: {
                bind: 'createPostCardReceiptData'
              },
              [PAGE_NAME_CHANNEL + '_generate_virtual_card_error']: {
                bind: 'generateCardServiceError'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_generate_virtual_card_request']: {
                bind: 'generate-virtual-card-request'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              financial_overview_refresh: {
                bind: 'refresh-financial-overview'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-generate-card-service-error-modal'
              },
              global_action_launcher_dialer: {
                bind: 'open-call-action'
              },
              global_generate_virtual_card_success: {
                bind: 'generate-virtual-card-success',
                link: {
                  page: 'cardGenerateVirtualReview'
                }
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica: isSpherica,
          newCellsConnections: {
            add: {
              in: {
                card_generate_virtual_generate_virtual_card_error: {
                  bind: 'generateCardServiceError'
                }
              },
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'open-generate-card-service-error-modal'
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
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        familyPath: 'glomo-generate-virtual-card-manager',
        tag: 'glomo-generate-virtual-card-analytics-manager',
        properties: {
          cellsConnections: {
            in: {
              global_card_detail_data_success_channel: {
                bind: 'fireAppPageView'
              },
              [PAGE_NAME_CHANNEL + '_generate_virtual_card_success']: {
                bind: 'fireAppSuccess'
              },
              [PAGE_NAME_CHANNEL + '_generate_virtual_card_error']: {
                bind: 'fireAppError'
              }
            },
            out: {
              card_generate_virtual_generate_card_page_view: {
                bind: 'fire-generate-card-page-view-analytics',
                analytics: ANALYTICS.cardGenerate
              },
              card_generate_virtual_generate_card_success: {
                bind: 'fire-generate-card-service-success-analytics',
                analytics: ANALYTICS.cardGenerateSuccess
              },
              card_generate_virtual_generate_card_error: {
                bind: 'fire-generate-card-service-error-analytics',
                analytics: ANALYTICS.cardGenerateError
              }
            }
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
