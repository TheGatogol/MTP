'use strict';
module.exports = (CONFIG) => {
  const { useNames,
    createPrefixFromPageName
  } = require('./common/helpers/_utils');
  const pageName = 'parkingDetailList';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      iOSFixedHeader: isNativeIos,
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      fixOffsetScroll: 0,
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
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_parking_detail_list: {
            bind: 'init'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
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
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'modal',
      accessibilityTextIconRightSecondary: 'Close',
      iconRightSecondary: 'bbva:close',
      text: 'parking-list-title-faqs',
      cellsConnections: {
        out: {
          [getGlobalName('navigation_to_back')]: {
            bind: 'header-main-icon-right-secondary-click',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      accessibilityTextIconRightSecondary: '',
      accessibilityTextIconLeftPrimary: '',
      accessibilityTextIconRightPrimary: 'bbva-parking-recharge-accessibility-icon-right-primary',
      iconRightSecondary: '',
      rightIconLabel: 'bbva-header-main-close-aria-label',
      iconLeftPrimary: '',
      rightButtons: [ {
        icon: 'spherica:close',
        defaultEventIconName: 'header-main-icon-right-secondary-click',
        label: 'bbva-header-main-close-aria-label'
      } ]
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
          global_parking_info_list_go_to_question_detail: {
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
    hash: 'parking-detail-list',
    currentPage: {
      url: '/parking-detail-list'
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
