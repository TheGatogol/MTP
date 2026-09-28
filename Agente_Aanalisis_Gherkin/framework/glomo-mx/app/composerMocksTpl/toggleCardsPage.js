/* eslint-disable new-cap, no-dupe-keys */
'use strict';

module.exports = (config) => {
  const commonUtils = require('./common/helpers/_utils');
  const PAGE_NAME = 'toggleCardsPage';
  const PREFIX = commonUtils.createPrefixFromPageName(PAGE_NAME);
  const pages = require('./common/_pages')(config)(PAGE_NAME);
  const isNativeIos = config.nativeIos || false;
  const SPINNER = commonUtils.SPINNER(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const ANALYTICS = require('./analytics/_emergencyZone')(config);

  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          global_open_alert_manager_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {}
      }
    }
  };
  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/toggle-cards'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'horizontal',
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        disableScrollLock: true,
        extraHeaderClass: 'dark-blue-bg',
        fixOffsetScroll: 0,
        headerHeight: commonUtils.headerHeight,
        iOSFixedHeader: true
      },
      propertiesSpherica: {
        className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_toggleCardsPage: {
                bind: 'init'
              }
            },
            out: {
              [PREFIX + '_toggle_cards_reset_page']: {
                bind: 'reset'
              },
              [PREFIX + '_toggle_cards_init_page']: {
                bind: 'init-page',
                analytics: ANALYTICS.advanced_footprint('apagar o encender tarjeta'),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
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
          className: 'header--core',
          leftIcon: 'coronita:return-12',
          leftIconSize: '22',
          titleName: 'toggle_cards_header',
          cellsConnections: {
            out: {
              [PREFIX + '_toggle_cards_back_request']: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          ...sphericaPageUtils.getProperties({
            componentName: 'cells-molecule-header-spherica'
          }),
          rightIconText: 'cells-molecule-header-spherica-help'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-text-description',
        tagSpherica: 'cells-text-description-spherica',
        properties: {
          className: 'margin-top-l',
          cellsConnections: {
            in: {
              [PREFIX + '_card_success_iron_icon_message']: {
                bind: 'mainDescription'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-margin-top--1 u-padding-top--0'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-switch-list',
        tagSpherica: 'cells-switch-list-spherica',
        properties: {
          className: 'without-icon item-subtitle-description',
          hideIcon: true,
          showSeparator: true,
          items: [ {
            items: [],
            opened: true
          } ],
          cellsConnections: {
            in: {
              [PREFIX + '_sucess_on_get_card_list']: {
                bind: 'items'
              },
              [PREFIX + '_card_listing_error_title']: {
                bind: 'items'
              }
            },
            out: {
              [PREFIX + '_toggle_cards_switch_cliecked']: {
                bind: 'list-switch-clicked'
              },
              toggle_cards_list_switch_clicked: {
                bind: 'list-switch-clicked',
                'forward-to-native': true
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica: true,
          variant: 'primary',
          className: 'margin-y1-x2 no-italic-subtitle'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-panel-info',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        properties: {
          microillustration: '',
          cellsConnections: {
            in: {
              [PREFIX + '_card_listing_error_text']: {
                bind: 'text'
              },
              [PREFIX + '_card_listing_error_img']: {
                bind: 'image'
              }
            }
          }
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
          type: 'success',
          icon: 'coronita:correct',
          iconSize: 22,
          expand: true,
          cellsConnections: {
            in: {
              [PREFIX + '_card_successful_on']: {
                bind: 'open'
              },
              [PREFIX + '_card_successful_off']: {
                bind: 'open'
              }
            }
          }
        },
        propertiesSpherica: {
          icon: 'coronita:right'
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'bbva-manager-card-list-on-off',
        familyPath: '@glomo-web-components/bbva-manager-card-list-on-off',
        render: 'litElement',
        properties: {
          requiresTsec: true,
          host: config.globalServices.host,
          version: config.globalServices.versions.cards || 0,
          native: !!config.native,
          requiredToken: config.globalServices.requiredToken || 'tsec',
          errorImage: 'emptystateday',
          cellsConnections: {
            in: {
              global_dashboard_cards: {
                bind: 'globalDashboardCards'
              },
              emergency_dashboard_cards: {
                bind: 'globalDashboardCards'
              },
              [PREFIX + '_toggle_cards_init_page']: {
                bind: 'getCardsListFromCache'
              },
              [PREFIX + '_toggle_cards_error']: {
                bind: 'getCardsListFromCache'
              },
              [PREFIX + '_toggle_cards_switch_cliecked']: {
                bind: 'patchCardsOnOff'
              },
              toggle_cards_page_toggle_cards_help: {
                bind: 'showToggleOffHelpModal'
              }
            },
            out: {
              [PREFIX + '_sucess_on_get_card_list']: {
                bind: 'on-get-card-list-success'
              },
              [PREFIX + '_card_listing_error_title']: {
                bind: 'card-listing-error-title'
              },
              [PREFIX + '_card_successful_on']: {
                bind: 'card-successful-on'
              },
              [PREFIX + '_card_successful_off']: {
                bind: 'card-successful-off'
              },
              global_alert_manager_open_with_settings: {
                bind: 'card-failure-on',
                analytics: ANALYTICS.advanced_footprint_error('error no es posible apagar tarjeta', 'error no es posible apagar tarjeta'),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
              },
              global_alert_manager_open_with_settings: {
                bind: 'card-failure-off',
                analytics: ANALYTICS.advanced_footprint_error('error no es posible apagar tarjeta', 'error no es posible apagar tarjeta'),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              [PREFIX + '_card_listing_error_text']: {
                bind: 'card-listing-error-text'
              },
              [PREFIX + '_card_listing_error_img']: {
                bind: 'card-listing-error-image'
              },
              [PREFIX + '_card_success_iron_icon_message']: {
                bind: 'card-listing-sucess-iron-icon-message'
              },
              [PREFIX + '_toggle_cards_error']: {
                bind: 'toggle-card-failure'
              },
              launch_analytics_interaction_link: {
                bind: 'analytics-interaction-link',
                analytics: ANALYTICS.INTERACTION_LINK_OFF_CARD
              },
              dashboard_refresh_financial_overview: {
                bind: 'card-activation-api-dm-update'
              },
              global_open_alert_manager: {
                bind: 'open-modal-off-info'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica: true,
          newCellsConnections: {
            add: {
              out: {
                global_open_alert_manager_spherica: {
                  bind: 'open-modal-off-info'
                },
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'card-failure-on',
                  analytics: ANALYTICS.advanced_footprint_error('error no es posible apagar tarjeta', 'error no es posible apagar tarjeta'),
                  featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
                },
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'card-failure-off',
                  analytics: ANALYTICS.advanced_footprint_error('error no es posible apagar tarjeta', 'error no es posible apagar tarjeta'),
                  featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
                }
              }
            },
            remove: {
              out: [
                'global_alert_manager_open_with_settings',
                'global_open_alert_manager'
              ]
            }
          }
        }
      }
    ]
  };

  if (sphericaPageUtils.isSpherica()) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
