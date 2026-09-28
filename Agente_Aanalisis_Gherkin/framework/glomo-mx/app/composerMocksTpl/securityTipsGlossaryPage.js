'use strict';

module.exports = CONFIG => {
  const { createSpinner } = require('./common/helpers/_utils');
  const pageName = 'securityTipsGlossaryPage';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_securityTips')(CONFIG);
  const cellsSpinnerVeil = createSpinner(CONFIG);
  cellsSpinnerVeil.tagSpherica = 'cells-spinner-veil-spherica';
  cellsSpinnerVeil.propertiesSpherica = {
    className: 'solid-spinner'
  };
  var base = {
    hash: 'securityTipsGlossaryPage',
    currentPage: {
      url: '/security-tips-glossary',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            security_tips_glossary_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: { }
        }
      },
      propertiesSpherica: {
        className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: '',
        iOSFixedHeader: isNativeIos
      }
    },

    components: [
      cellsSpinnerVeil,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'securityTips',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_securityTipsGlossaryPage: {
                bind: 'init'
              }
            },
            out: {
              security_tips_glossary_reset_page: {
                bind: 'reset'
              },
              security_tips_glossary_init_page: {
                bind: 'init-page'
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
              security_tips_glossary_to_continue: {
                bind: 'navigate'
              },
              security_tips_glossary_back_request: {
                bind: 'goBack'
              },
              navigation_security_tips_glossary_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_security_tips_glossary_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
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
          className: 'header--dark header-content-title',
          leftIcon: 'coronita:return-12',
          titleName: 'security-tips-header-main-page',
          cellsConnections: {
            in: {
            },
            out: {
              security_tips_glossary_back_request: {
                bind: 'click-left-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: '',
          leftIcon: 'coronita:back-mini',
          variant: 'primary-alt',
          leftIconText: 'cells-molecule-header-spherica-back'
        }
      }
    ]
  };

  const DMs = [
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-manager-security-tips-glossary',
      familyPath: '@glomo-web-components/bbva-manager-security-tips-glossary',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            security_tips_glossary_init_page: {
              bind: 'init'
            },
            security_tips_glossary_reset_page: {
              bind: 'reset'
            },
            navigation_security_tips_glossary_to_prev_page: {
              bind: 'reset'
            },
            security_tips_set_glossary_items: {
              bind: 'setGlossary'
            },
            security_tips_glossary_search_value_changed: {
              bind: 'clearSearch'
            },
            security_tips_glossary_request_search: {
              bind: '_submitSearch'
            }
          },
          out: {
            security_tips_glossary_filter_items: {
              bind: 'set-filtered-glossary'
            },
            security_tips_glossary_show_results: {
              bind: 'toggle-results-label'
            },
            security_tips_glossary_reset_search: {
              bind: 'reset-search-value'
            },
            security_tips_glossary_set_results_label: {
              bind: 'set-results-label'
            },
            security_tips_glossary_set_empty_label: {
              bind: 'set-empty-label'
            },
            security_tips_glossary_set_input_label: {
              bind: 'set-input-search-label'
            },
            security_tips_glossary_toggle_empty_message: {
              bind: 'set-empty-glossary-message'
            }
          }
        }
      },
      propertiesSpherica: {
        isSpherica,
        newCellsConnections: {
          add: {
            in: {
              security_tips_glossary_search_value_changed_spherica: {
                bind: 'clearSearch'
              }
            }
          },
          remove: {
            in: [
              'security_tips_glossary_search_value_changed'
            ]
          }
        }
      }
    }
  ];

  const UI = [
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-form-predictive',
      tagSpherica: 'bbva-form-predictive',
      render: 'litElement',
      familyPath: '@bbva-web-components/bbva-form-predictive',
      familyPathSpherica: '@bbva-spherica-components/bbva-form-predictive',
      properties: {
        required: true,
        search: true,
        cellsConnections: {
          in: {
            security_tips_glossary_reset_search: {
              bind: 'value'
            },
            security_tips_glossary_set_input_label: {
              bind: 'label'
            }
          },
          out: {
            security_tips_glossary_search_value_changed: {
              bind: 'form-predictive-value-change'
            },
            security_tips_glossary_request_search: {
              bind: 'bbva-form-search-submit'
            }
          }
        }
      },
      propertiesSpherica: {
        className: 'u-margin--1 u-margin-bottom--0',
        useCustomEmptySection: true,
        newCellsConnections: {
          add: {
            out: {
              security_tips_glossary_search_value_changed_spherica: {
                bind: 'form-predictive-value-change'
              }
            }
          },
          remove: {
            out: [
              'security_tips_glossary_search_value_changed'
            ]
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-header-category',
      tagSpherica: 'bbva-header-category-spherica',
      render: 'litElement',
      familyPath: '@bbva-spherica-components/bbva-header-category',
      familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
      properties: {
        hidden: true,
        cellsConnections: {
          in: {
            security_tips_glossary_show_results: {
              bind: 'hidden'
            },
            security_tips_glossary_set_results_label: {
              bind: 'text'
            }
          },
          out: {}
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-expandable-accordion-list',
      tagSpherica: 'bbva-expandable-accordion-list-spherica',
      familyPath: '@glomo-web-components/bbva-expandable-accordion-list',
      familyPathSpherica: '@glomo-web-components/bbva-expandable-accordion-list-spherica',
      render: 'litElement',
      properties: {
        sorted: true,
        isGrouped: true,
        cellsConnections: {
          in: {
            security_tips_glossary_filter_items: {
              bind: 'list'
            },
            security_tips_glossary_reset_page: {
              bind: '_closeAccordions'
            }
          },
          out: {}
        }
      },
      propertiesSpherica: {
        titleBold: true
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-panel-info',
      tagSpherica: 'bbva-panel-info-spherica',
      familyPath: '@bbva-web-components/bbva-panel-info',
      familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
      render: 'litElement',
      properties: {
        className: 'alert-message',
        hidden: true,
        image: 'images/empty_state_day.svg',
        cellsConnections: {
          in: {
            security_tips_glossary_toggle_empty_message: {
              bind: 'hidden'
            },
            security_tips_glossary_set_empty_label: {
              bind: 'text'
            }
          },
          out: {}
        }
      },
      propertiesSpherica: {
        heading: 'security-tips-modal-error-title-not-found-spherica',
        headingLevelTitle: 'h3',
        image: '',
        microillustration: 'emptyState',
        defaultImageSize: '2XL',
        typeTextSize: '2XL',
        text: 'security-tips-modal-error-text-not-found-spherica',
        variant: 'primary-alt',
        newCellsConnections: {
          remove: {
            in: [
              'security_tips_glossary_set_empty_label'
            ]
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-analytics-security-tips-dm',
      familyPath: '@glomo-web-components/glomo-analytics-security-tips-dm',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            security_tips_glossary_filter_items: {
              bind: 'firePageVisit'
            },
            security_tips_glossary_search_value_changed: {
              bind: 'firePageEnterTerm'
            }
          },
          out: {
            ANALYTICS_CHECKUP_PAGE_VIEW: {
              bind: 'analytics-search-page-view',
              analytics: ANALYTICS.PAGE_VIEW_SEARCH
            }
          }
        }
      },
      propertiesSpherica: {
        isSpherica,
        newCellsConnections: {
          add: {
            in: {
              security_tips_glossary_search_value_changed_spherica: {
                bind: 'firePageEnterTerm'
              }
            }
          },
          remove: {
            in: [
              'security_tips_glossary_search_value_changed'
            ]
          }
        }
      }
    }
  ];

  base.components.push(...UI, ...DMs);

  return sphericaPageUtils.spherize(base);
};

