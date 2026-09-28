'use strict';
module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName
  } = require('./common/helpers/_utils');
  const {
    nativeIos
  } = CONFIG;
  const pageName = 'parkingInfoList';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const operativePrefix = createPrefixFromPageName(pageName);
  const [getChannelName, getLocaleName] = useNames(operativePrefix);
  const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();
  const getLocalePrefix = channelName => `glomo-${getLocaleName(channelName)}`;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const glomoFaqsListParking = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-parking-enrollment',
    familyPath: '@glomo-web-components/bbva-manager-parking-enrollment',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'containerFaqs'
          },
          [getGlobalName('go_to_question_detail')]: {
            bind: 'goToAnswerDetail'
          },
          global_set_app_settings: {
            bind: 'getParkingCityData'
          }
        },
        out: {
          [getGlobalName('faqs_list_parking_dm')]: {
            bind: 'faqs-parking'
          },
          [getGlobalName('faqs_list_parking')]: {
            bind: 'faqs-parking'
          },
          [getGlobalName('navigate_to_answer_detail')]: {
            bind: 'navigate-to-answer-detail',
            link: {
              page: 'parkingDetailList'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      customInitEvents: {
        ['init-parking-info-list']: true,
        ['swipe-menu-enabled']: false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
            bind: 'init-parking-info-list'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      iOSFixedHeader: nativeIos,
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'header--core',
      headerFixed: true,
      preventScrollWithOverlay: true,
      topOnConfirm: true,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'recalculateHeader'
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
      accessibilityTextIconLeftPrimary: 'Return',
      iconLeftPrimary: 'coronita:return-12',
      text: getLocalePrefix('title-faqs'),
      cellsConnections: {
        out: {
          [getGlobalName('navigation_to_back')]: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      accessibilityTextIconLeftPrimary: '',
      iconLeftPrimary: '',
      leftButtons: [],
      rightButtons: [ {
        icon: 'bbva:close',
        defaultEventIconName: 'header-main-icon-left-primary-click',
        label: 'bbva-header-main-close-aria-label'
      } ]
    }
  };
  const containerFaqsParking = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-faqs-list',
    tagSpherica: 'bbva-widget-faqs-list-spherica',
    familyPath: '@glomo-web-components/bbva-widget-faqs-list',
    familyPathSpherica: '@glomo-web-components/bbva-widget-faqs-list-spherica',
    render: 'litElement',
    properties: {
      header: getLocalePrefix('alternative-title'),
      cellsConnections: {
        in: {
          [getGlobalName('faqs_list_parking_dm')]: {
            bind: 'faqs'
          },
          [getGlobalName('faqs_list_parking')]: {
            bind: 'render'
          }
        },
        out: {
          [getGlobalName('go_to_question_detail')]: {
            bind: 'bbva-widget-faqs-list-faq-click'
          }
        }
      }
    },
    propertiesSpherica: {
      header: getLocalePrefix('alternative-title-spherica')
    }
  };
  const messageFaqs = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      message: getLocalePrefix('message-faqs')
    },
    propertiesSpherica: {
      className: 'u-margin--1',
      message: '',
      messageTitle: getLocalePrefix('message-faqs'),
      bookTitle: true
    }
  };
  const base = {
    hash: 'parking-info-list',
    currentPage: {
      url: '/parking-info-list'
    },
    pages,
    template,
    components: [
      glomoFaqsListParking,
      lifeCycle,
      header,
      containerFaqsParking,
      messageFaqs
    ]
  };
  return sphericaPageUtils.spherize(base);
};
