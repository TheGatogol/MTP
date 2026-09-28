/* eslint-disable new-cap, no-shadow */
'use strict';

const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');
const { useNames, createPrefixFromPageName } = utils;
const PAGE_NAME = 'lockCardsPage';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
module.exports = (config) => {
  const lockCardsPage = page(config)(PAGE_NAME);
  const SPINNER = utils.SPINNER(config);
  const isNativeIos = !!config.nativeIos;
  const ANALYTICS = require('./analytics/_emergencyZone')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const VISIBLE_CHARS = utils.getVisibleChars(config);

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: false,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight: utils.headerHeight,
      fixOffsetScroll: 0,
      iOSFixedHeader: true
    },
    propertiesSpherica: {
      className: `bg-light-grey ${isNativeIos ? ' ios-top-padding' : ''}`
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: config.globalServices.requiredToken || 'tsec',
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page',
            analytics: ANALYTICS.advanced_footprint('bloquear tarjeta'),
            featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG
          },
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
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--core',
      leftIcon: 'coronita:return-12',
      leftIconSize: '22',
      titleName: 'emergency-options-lock-card-title',
      cellsConnections: {
        out: {
          [getChannelName('BACK_BUTTON')]: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      leftIcon: 'coronita:back-mini',
      className: '',
      variant: 'primary-alt',
      leftIconText: 'cells-molecule-header-spherica-back'
    }
  };

  const descriptionPage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    tagSpherica: 'cells-text-description-spherica',
    properties: {
      className: 'margin-top-l',
      cellsConnections: {
        in: {
          [getChannelName('_card_success_iron_icon_message')]: {
            bind: 'mainDescription'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin-top--1 u-padding-top--0'
    }
  };

  const errorCards = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      microillustration: '',
      cellsConnections: {
        in: {
          [getChannelName('_card_listing_error_text')]: {
            bind: 'text'
          },
          [getChannelName('_card_listing_error_img')]: {
            bind: 'image'
          }
        }
      }
    }
  };

  const dmLock = {
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
      openWebFlags: [{feature: 'blockDebitCard', isFlagEnable: true}, {feature: 'blockCardOrange', isFlagEnable: true}, {feature: 'blockAndReplacementsAdditionalTDC', isFlagEnable: true}],
      cellsConnections: {
        in: {
          global_dashboard_cards: {
            bind: 'globalDashboardCards'
          },
          emergency_dashboard_cards: {
            bind: 'globalDashboardCards'
          },
          [getChannelName('init_page')]: {
            bind: 'getCardsListFromCache'
          },
          SENDING_CARD_ID_TO_DM: {
            bind: 'getCardDetail'
          }
        },
        out: {
          [getChannelName('_sucess_on_get_card_list')]: {
            bind: 'on-get-card-list-success'
          },
          [getChannelName('_card_success_iron_icon_message')]: {
            bind: 'card-listing-sucess-iron-icon-message'
          },
          [getChannelName('_card_listing_error_title')]: {
            bind: 'card-listing-error-title'
          },
          [getChannelName('_card_listing_error_text')]: {
            bind: 'card-listing-error-text'
          },
          [getChannelName('_card_listing_error_img')]: {
            bind: 'card-listing-error-image'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          lock_cards_navigation_product_detail_to_block_card: {
            bind: 'navigation-to-block-card-normal',
            link: {
              page: 'blockAndReplacement',
              params: {
                cardId: 'cardId',
                cardTitle: 'cardTitle',
                cardNumber: 'cardNumber',
                cardType: 'cardType',
                cardName: 'cardName'
              }
            }
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: true
    }
  };

  const uiCards = {
    zone: 'app__main',
    type: 'UI',
    tag: 'global-products-list',
    tagSpherica: 'global-products-list-spherica',
    properties: {
      notifyEvent: 'card-item-tap',
      visibleChars: VISIBLE_CHARS('card'),
      statusOverlay: 'operative',
      statusDescriptionBelow: true,
      nameOneLine: true,
      showSticker: config.globalServices.versions.showSticker || false,
      statusIcons: {
        locked: 'coronita:block',
        activate: 'coronita:clock',
        off: 'coronita:on'
      },
      id: 'skeleton2',
      className: 'items-without-box',
      defaultImage: './images/cards/cardFrontDefault.png',
      errorHeaderKey: 'cells-global-dashboard-cards-header',
      autoHideLoading: true,
      cellsConnections: {
        in: {
          [getChannelName('_sucess_on_get_card_list')]: {
            bind: 'productsList'
          },
          [getChannelName('_card_listing_error_title')]: {
            bind: 'productsList'
          }
        },
        out: {
          SENDING_CARD_ID_TO_DM: {
            bind: 'card-item-tap'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: true
    }
  };

  /* base */

  const base = {
    hash: '-lock-cards-page',
    currentPage: {
      url: '/lock-cards-page'
    },
    pages: lockCardsPage,
    template,
    components: [
      lifeCycle,
      header,
      descriptionPage,
      SPINNER,
      uiCards,
      errorCards,
      dmLock
    ]
  };
  return sphericaPageUtils.spherize(base);
};
