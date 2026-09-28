/* eslint-disable no-shadow */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName } = utils;
  const PAGE_NAME = 'blackhawkAnswerDetail';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_blackhawkAnswerDetail')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
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
          [getGlobalName('init_page')]: {
            bind: 'init-blackhawk-answer'
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
      titleName: 'glomo-blackhawk-answer-header-title',
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
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close',
      titleName: 'glomo-blackhawk-answer-header-title-faqs-spherica',
      cellsConnections: {
        out: {
          'global_blackhawk_answer_detail_navigation_to_back': {
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
          }
        },
        out: {
          [getGlobalName('_go_to_back')]: {
            bind: 'header-left-button',
            backStep: true
          }
        }
      }
    }
  };
  const answerListDetail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-faqs-detail',
    tagSpherica: 'bbva-widget-faqs-detail-spherica',
    familyPath: '@glomo-web-components/bbva-widget-faqs-detail',
    familyPathSpherica: '@glomo-web-components/bbva-widget-faqs-detail-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_blackhawk_answer_go_to_question_detail: {
            bind: 'faq'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'no-margin-color'
    }
  };
  const analyticsBlackhawkAnswerDetail = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-gift-card-manager-answer-detail',
    familyPath: '@glomo-web-components/glomo-analytics-gift-card-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_blackhawk_answer_go_to_question_detail: {
            bind: 'firePageView'
          }
        },
        out: {
          [getGlobalName('analytics_page_view_answer_detail')]: {
            bind: 'analytics-page-view',
            analytics: ANALYTICS.PAGE_VIEW
          }
        }
      }
    }
  };
  const base = {
    hash: 'blackhawk-answer-detail',
    currentPage: {
      url: '/blackhawk-answer-detail'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      navigationHandler,
      answerListDetail,
      analyticsBlackhawkAnswerDetail
    ]
  };
  return sphericaPageUtils.spherize(base);
};
