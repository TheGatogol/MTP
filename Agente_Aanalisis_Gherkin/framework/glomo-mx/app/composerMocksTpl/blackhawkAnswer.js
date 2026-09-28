/* eslint-disable no-shadow */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName} = utils;
  const PAGE_NAME = 'blackhawkAnswer';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();
  const getLocalePrefix = name => `glomo-${getLocaleName(name)}`;
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const ANALYTICS = require('./analytics/_blackhawkAnswer')(CONFIG);
  const customInitEvents = {
    ['init-blackhawk-answer']: true,
    ['swipe-menu-enabled']: false
  };
  const glomoFaqsListManager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-gift-card-manager',
    tag: 'glomo-gift-card-manager-purchase-mx',
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'containerFaqs'
          },
          [getGlobalName('go_to_question_detail')]: {
            bind: 'goToAnswerDetail'
          }
        },
        out: {
          [getGlobalName('faqs_list_dm')]: {
            bind: 'faqs-list'
          },
          [getGlobalName('faqs_list')]: {
            bind: 'faqs-list'
          },
          [getGlobalName('navigate_to_answer_detail')]: {
            bind: 'navigate-to-answer-detail'
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
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      fixOffsetScroll: 0,
      headerHeight: utils.headerHeight,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents,
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
          [getGlobalName('init_page')]: {
            bind: 'init-blackhawk-answer'
          },
          [getGlobalName('reset')]: {
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
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: `header--core ${ isNativeIos ? 'ios-top-padding' : ''}`,
      leftIcon: 'coronita:return-12',
      titleName: getLocalePrefix('header-title'),
      cellsConnections: {
        out: {
          [getGlobalName('navigation_to_back')]: {
            bind: 'click-left-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      titleName: 'glomo-blackhawk-answer-header-title-faqs-spherica',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close',
      cellsConnections: {
        out: {
          'global_blackhawk_answer_navigation_to_back': {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [getGlobalName('navigation_to_back')]: {
            bind: 'goBack'
          },
          [getGlobalName('navigate_to_answer_detail')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getGlobalName('go_to_back_answer')]: {
            bind: 'header-left-button',
            backStep: true
          },
          [getGlobalName('answer_question_detail')]: {
            bind: 'navigation-to-blackhawkAnswerDetail',
            link: {
              page: 'blackhawkAnswerDetail'
            }
          }
        }
      }
    }
  };
  const answerList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-faqs-list',
    tagSpherica: 'bbva-widget-faqs-list-spherica',
    familyPath: '@glomo-web-components/bbva-widget-faqs-list',
    familyPathSpherica: '@glomo-web-components/bbva-widget-faqs-list-spherica',
    render: 'litElement',
    properties: {
      header: getLocalePrefix('header-title-faqs'),
      cellsConnections: {
        in: {
          [getGlobalName('faqs_list_dm')]: {
            bind: 'faqs'
          },
          [getGlobalName('faqs_list')]: {
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
      header: getLocalePrefix('header-title-spherica'),
      variant: 'primary'
    }
  };
  const analyticsBlackhawkAnswer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-gift-card-manager-answer',
    familyPath: '@glomo-web-components/glomo-analytics-gift-card-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'firePageView'
          }
        },
        out: {
          [getGlobalName('analytics_page_view_answer')]: {
            bind: 'analytics-page-view',
            analytics: ANALYTICS.PAGE_VIEW
          }
        }
      }
    }
  };
  const base = {
    hash: 'blackhawk-answer',
    currentPage: {
      url: '/blackhawk-answer'
    },
    pages,
    template,
    components: [
      glomoFaqsListManager,
      lifeCycle,
      header,
      navigationHandler,
      answerList,
      analyticsBlackhawkAnswer
    ]
  };
  return sphericaPageUtils.spherize(base);
};
