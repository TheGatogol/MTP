'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName } = utils;
  const PAGE_NAME = 'faqsTagCardDetail';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      animationType: 'verticalUp',
      hasFooter: false,
      disableEdgeSwipe: true,
      headerFixed: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      fixOffsetScroll: 0,
      headerHeight: utils.headerHeight,
      cellsConnections: {
        in: {
          [getChannelName + '_RECALCULATE_HEADER']: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'dark-blue-bg'
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
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName + '_INIT_CHANNEL']: {
            bind: 'init-page'
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
      rightIcon: 'coronita:close',
      titleName: 'glomo-faqs-header-title',
      cellsConnections: {
        out: {
          [getChannelName + '_NAVIGATION_TO_BACK']: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      rightIconSize: '24',
      rightIconText: 'cells-molecule-header-spherica-close',
      className: ''
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
      className: '',
      cellsConnections: {
        in: {
          containerFaqsList_NAVIGATION_TO_ANSWER_DETAIL: {
            bind: 'faq'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'no-margin-color'
    }
  };

  const base = {
    hash: 'faqs-tag-card-detail',
    currentPage: {
      url: '/faqs-tag-card-detail'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      answerListDetail
    ]
  };

  return sphericaPageUtils.spherize(base);
};
