'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName } = utils;
  const PAGE_NAME = 'containerFaqsList';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoFaqsListManager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-tag-card-register-dm',
    tag: 'glomo-tag-card-register-dm-mx',
    properties: {
      cellsConnections: {
        in: {
          containerFaqsList_navigation_list_page: {
            bind: 'containerFaqs'
          }
        },
        out: {
          [getChannelName + '_FAQS_LIST_LEVEL_ONE_DM']: {
            bind: 'faqs-list-level-one'
          },
          [getChannelName + '_FAQS_LIST_LEVEL_ONE']: {
            bind: 'faqs-list-level-one'
          },
          [getChannelName + '_FAQS_LIST_LEVEL_TWO_DM']: {
            bind: 'faqs-list-level-two'
          },
          [getChannelName + '_FAQS_LIST_LEVEL_TWO']: {
            bind: 'faqs-list-level-two'
          },
          [getChannelName + '_FAQS_LIST_LEVEL_THREE_DM']: {
            bind: 'faqs-list-level-three'
          },
          [getChannelName + '_FAQS_LIST_LEVEL_THREE']: {
            bind: 'faqs-list-level-three'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'header--core',
      headerFixed: true,
      headerHeight: utils.headerHeight,
      iOSFixedHeader: true,
      preventScrollWithOverlay: true,
      topOnConfirm: true,
      cellsConnections: {
        in: {
          [getChannelName + '_SCROLL_ZONE']: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName + '_SHOW_CONFIRM_CHANNEL']: {
            bind: 'showConfirm'
          },
          [getChannelName + '_SHOW_CONFIRM_OFFER_PAGE']: {
            bind: 'showConfirm'
          },
          [getChannelName + '_INIT_CHANNEL']: {
            bind: 'recalculateHeader'
          },
          [getChannelName + '_ALL_STEPS_SCROLL']: {
            bind: 'scrollItemIntoView'
          }
        },
        out: {
          [getChannelName + '_SCROLL_CHANNEL']: {
            bind: 'opx-template-content-scroll'
          }
        }
      }
    },
    propertiesSpherica: {
      className: `bg-light-grey${isNativeIos ? ' ios-top-padding' : ''}`,
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'dark-blue-bg'
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: isNativeIos ? 'header--core-ios header--dark' : 'header--dark',
      leftIcon: 'coronita:return-12',
      titleName: 'glomo-help-section-header-title',
      continue: 'dashboard',
      cellsConnections: {
        out: {
          navigation_faqs_to_page: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      leftIconText: 'bbva-header-main-return-aria-label',
      leftIcon: 'coronita:back',
      className: ''
    }
  };


  const containerFaqList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-faqs-list',
    tagSpherica: 'bbva-widget-faqs-list-spherica',
    familyPath: '@glomo-web-components/bbva-widget-faqs-list',
    familyPathSpherica: '@glomo-web-components/bbva-widget-faqs-list-spherica',
    render: 'litElement',
    properties: {
      drawLastSeparator: true,
      header: 'bbva-widget-faqs-list-header-title-1',
      cellsConnections: {
        in: {
          [getChannelName + '_FAQS_LIST_LEVEL_ONE_DM']: {
            bind: 'faqs'
          },
          [getChannelName + '_FAQS_LIST_LEVEL_ONE']: {
            bind: 'render'
          }
        },
        out: {
          [getChannelName + '_FAQS_LIST_LEVEL_ONE_INIT_PAGE']: {
            bind: 'faqsListLevelOne'
          },
          containerFaqsList_NAVIGATION_TO_ANSWER_DETAIL: {
            bind: 'bbva-widget-faqs-list-faq-click',
            link: {
              page: 'faqsTagCardDetail'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      header: 'bbva-widget-faqs-list-header-title-1-spherica'
    }
  };

  const containerFaqListTwo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-faqs-list',
    tagSpherica: 'bbva-widget-faqs-list-spherica',
    familyPath: '@glomo-web-components/bbva-widget-faqs-list',
    familyPathSpherica: '@glomo-web-components/bbva-widget-faqs-list-spherica',
    render: 'litElement',
    properties: {
      drawLastSeparator: true,
      className: 'space-faqs-list',
      header: 'bbva-widget-faqs-list-header-title-2',
      cellsConnections: {
        in: {
          [getChannelName + '_FAQS_LIST_LEVEL_TWO_DM']: {
            bind: 'faqs'
          },
          [getChannelName + '_FAQS_LIST_LEVEL_TWO']: {
            bind: 'render'
          }
        },
        out: {
          [getChannelName + '_FAQS_LIST_LEVEL_TWO_INIT_PAGE']: {
            bind: 'faqsListLevelTwo'
          },
          containerFaqsList_NAVIGATION_TO_ANSWER_DETAIL: {
            bind: 'bbva-widget-faqs-list-faq-click',
            link: {
              page: 'faqsTagCardDetail'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      header: 'bbva-widget-faqs-list-header-title-2-spherica'
    }
  };

  const containerFaqListThree = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-faqs-list',
    tagSpherica: 'bbva-widget-faqs-list-spherica',
    familyPath: '@glomo-web-components/bbva-widget-faqs-list',
    familyPathSpherica: '@glomo-web-components/bbva-widget-faqs-list-spherica',
    render: 'litElement',
    properties: {
      drawLastSeparator: true,
      className: 'space-faqs-list',
      header: 'bbva-widget-faqs-list-header-title-3',
      cellsConnections: {
        in: {
          [getChannelName + '_FAQS_LIST_LEVEL_THREE_DM']: {
            bind: 'faqs'
          },
          [getChannelName + '_FAQS_LIST_LEVEL_THREE']: {
            bind: 'render'
          }
        },
        out: {
          [getChannelName + '_FAQS_LIST_LEVEL_THREE_INIT_PAGE']: {
            bind: 'faqsListLevelThree'
          },
          containerFaqsList_NAVIGATION_TO_ANSWER_DETAIL: {
            bind: 'bbva-widget-faqs-list-faq-click',
            link: {
              page: 'faqsTagCardDetail'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      header: 'bbva-widget-faqs-list-header-title-3-spherica'
    }
  };

  const messageHelpFaqs = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      id: 'cells-icon-message',
      type: 'info-dark-blue',
      className: 'margin-l funds-investment-last-spacing',
      message: 'tag-message-help-faqs',
      icon: 'coronita:info',
      hidden: false,
      cellsConnections: {
      }
    },
    propertiesSpherica: {
      icon: 'coronita:caution'
    }
  };

  const base = {
    hash: 'container-Faqs-List',
    currentPage: {
      url: '/container-Faqs-List'
    },
    pages,
    template,
    components: [
      glomoFaqsListManager,
      header,
      containerFaqList,
      containerFaqListTwo,
      containerFaqListThree,
      messageHelpFaqs
    ]
  };
  return sphericaPageUtils.spherize(base);
};