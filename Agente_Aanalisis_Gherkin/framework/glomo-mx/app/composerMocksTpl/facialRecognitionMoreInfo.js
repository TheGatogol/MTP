/* eslint-disable new-cap */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const spinner = utils.SPINNER(CONFIG);
  const pageName = 'facialRecognitionMoreInfo';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_facialRecognition')(CONFIG);
  const literals = require('./analytics/common/_literals');
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_facialRecognition: {
            bind: 'init'
          }
        },
        out: {
          facial_reset_page: {
            bind: 'reset'
          },
          facial_init_page: {
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
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--white title--wrapped',
      rightIcon: 'coronita:close',
      titleName: 'glomo-facial-recognition-more-info-header-title',
      cellsConnections: {
        out: {
          navigation_facial_back_step: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      titleName: 'glomo-facial-recognition-more-info-header-title',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };
  const bbvaPanelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--1-5',
      disabledTabindex: true,
      hidePaddingBottom: true,
      isNested: true,
      imageAltText: 'glomo-facial-recognition-more-info-title',
      microillustration: 'mobileaccessbiometric',
      heading: 'glomo-facial-recognition-more-info-title',
      text: 'glomo-facial-recognition-more-info-sutitle'
    },
    propertiesSpherica: {
      microillustration: 'mobileAccessBiometric'
    }
  };
  const bbvaExpandableAccordionList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-expandable-accordion-list',
    familyPath: '@glomo-web-components/bbva-expandable-accordion-list',
    tagSpherica: 'bbva-expandable-accordion-list-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-expandable-accordion-list-spherica',
    render: 'litElement',
    properties: {
      groupLabelLength: 1,
      className: 'header-accordion text boldtext',
      cellsConnections: {
        in: {
          facial_recognition_send_more_info_faqs: {
            bind: 'list'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt'
    }
  };
  const bbvaPanelButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button',
    familyPath: '@bbva-web-components/bbva-panel-button',
    render: 'litElement',
    properties: {
      show: true,
      variant: 'sticky',
      buttonVariant: 'primary',
      buttonText: 'glomo-facial-recognition-more-info-confirm-button',
      cellsConnections: {
        out: {
          navigation_facial_back_step: {
            bind: 'panel-button-item-click',
            backStep: true
          }
        }
      }
    }
  };
  const bbvaManagerDeviceActivationFacialBiometricsValidation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-device-activation-facial-biometrics-validation',
    familyPath: '@glomo-web-components/bbva-manager-device-activation-facial-biometrics-validation',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          facial_init_page: {
            bind: 'init'
          }
        },
        out: {
          facial_recognition_init_app: {
            bind: 'facial-recognition-init'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };
  const bbvaAnalyticManagerSensitiveFlows = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-sensitive-flows',
    familyPath: '@glomo-web-components/bbva-analyticmanager-sensitive-flows',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          facial_recognition_init_app: {
            bind: 'footPrintKnowMore'
          }
        },
        out: {
          facial_recognition_send_data_app_foot_print_know_more: {
            bind: 'facial-recognition-analytic-footprint-know-more',
            analytics: analytics.processGetAdvancedFootprint(literals.commons.knowMore, false)
          },
          facial_recognition_persisted_data_registry: {
            bind: 'analytics-persisted-data'
          }
        }
      }
    }
  };
  const base = {
    hash: 'mx-facial-recognitions-more-info',
    currentPage: {
      url: '/facial-recognition-more-info'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            facial_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        headerFixed: true,
        fixOffsetScroll: 0,
        footerHeight: 100
      }
    },
    components: [
      spinner,
      bbvaManagerDeviceActivationFacialBiometricsValidation,
      bbvaAnalyticManagerSensitiveFlows,
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      bbvaPanelInfo,
      bbvaExpandableAccordionList
    ]
  };
  if (!isSpherica) {
    base.components.push(bbvaPanelButton);
  }
  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
