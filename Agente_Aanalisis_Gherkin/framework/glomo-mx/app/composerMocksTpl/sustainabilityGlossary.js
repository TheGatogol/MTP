/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {

  const utils = require('./common/helpers/_utils');
  const SPINNER = utils.SPINNER(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('sustainabilityGlossary');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'sustainabilityGlossary';
  const ANALYTICS = require('./analytics/_sustainabilityPublic')(CONFIG);

  const base = {
    hash: 'mxsustainability-glossary',
    currentPage: {
      url: '/sustainability-glossary'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            sustainability_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-sustainability-glossary-header',
          cellsConnections: {
            out: {
              navigation_sustainability_to_previous_page: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
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
              sustainability_glossary_reset_page: {
                bind: 'reset'
              },
              sustainability_glossary_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.PAGE_GLOSSARY
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-back',
          cellsConnections: {
            in: {
              sustainability_to_continue: {
                bind: 'navigate'
              },
              sustainability_back_request: {
                bind: 'goBack'
              },
              navigation_sustainability_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_sustainability_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };

  const bbvaSustainabilityManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-sustainability',
    familyPath: '@glomo-web-components/bbva-manager-sustainability',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.publicSettingsHost,
      native: false,
      version: CONFIG.globalServices.versions.appSettings || 0,
      headers: {'x-api-key': CONFIG.globalServices.apiKeyAp},
      country: 'mx',
      cellsConnections: {
        in: {
          sustainability_glossary_init_page: {
            bind: 'init'
          },
          sustainability_send_value: {
            bind: 'filterItemsGlossary'
          },
          sustainability_filter_glossary: {
            bind: 'glossary'
          }
        },
        out: {
          sustainability_parsed_glossary: {
            bind: 'set-sustainability-glossary-event'
          },
          sustainability_glossary_image: {
            bind: 'set-image'
          },
          sustainability_glossary_microilustration: {
            bind: 'set-micro'
          },
          sustainability_glossary_heading: {
            bind: 'set-heading'
          },
          sustainability_glossary_text: {
            bind: 'set-text'
          },
          sustainability_input_search_label: {
            bind: 'set-sustainability-input-search-label'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const bbvaSustainabilityPredictive = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-form-predictive',
    familyPath: '@bbva-web-components/bbva-form-predictive',
    render: 'litElement',
    properties: {
      search: true,
      required: true,
      className: 'navy-on-header',
      allowedPattern: '[A-Za-z0-9]',
      cellsConnections: {
        in: {
          sustainability_input_search_label: {
            bind: 'label'
          }
        },
        out: {
          sustainability_send_value: {
            bind: 'form-predictive-value-change'
          }
        }
      }
    }
  };

  const bbvaSustainabilityAccordionList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-expandable-accordion-list',
    familyPath: '@bbva-web-components/bbva-expandable-accordion-list',
    render: 'litElement',
    properties: {
      isGrouped: true,
      groupLabelLength: 1,
      className: 'header-accordion text boldtext',
      cellsConnections: {
        in: {
          sustainability_parsed_glossary: {
            bind: 'list'
          }
        }
      }
    }
  };

  const bbvaSustainabilityInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      microillustration: '',
      cellsConnections: {
        in: {
          sustainability_glossary_microilustration: {
            bind: 'microillustration'
          },
          sustainability_glossary_heading: {
            bind: 'heading'
          },
          sustainability_glossary_text: {
            bind: 'text'
          }
        }
      }
    }
  };

  const UI = [
    bbvaSustainabilityPredictive,
    bbvaSustainabilityAccordionList,
    bbvaSustainabilityInfo
  ];
  const DMs = [
    bbvaSustainabilityManager
  ];

  base.components.push(...UI, ...DMs);
  return base;
};
