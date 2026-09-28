'use strict';

module.exports = CONFIG => {
  const {createSpinner} = require('./common/helpers/_utils');
  const COUNTRY = 'mx';
  const _localStorage = require('./common/_local-storage');
  const pageName = 'securityTipsPage';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_securityTips')(CONFIG);
  const isSpherica = sphericaPageUtils.isSpherica();
  const cellsSpinnerVeil = createSpinner(CONFIG);
  cellsSpinnerVeil.tagSpherica = 'cells-spinner-veil-spherica';
  cellsSpinnerVeil.propertiesSpherica = {
    open: true,
    className: 'solid-spinner'
  };

  var base = {
    hash: 'securityTipsPage',
    currentPage: {
      url: '/security-tips-dashboard',
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
            security_tips_init_page: {
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
          pageName: 'securityTipsPage',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_securityTipsPage: {
                bind: 'init'
              }
            },
            out: {
              security_tips_reset_page: {
                bind: 'reset'
              },
              security_tips_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.PAGE_VIEW_SECURITY_TIPS
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
              security_tips_to_continue: {
                bind: 'navigate'
              },
              security_tips_back_request: {
                bind: 'goBack'
              },
              navigation_security_tips_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_security_tips_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
              },
              security_tips_set_glossary_items: {
                bind: 'navigation-to-security-tips-glossary',
                link: {
                  page: 'securityTipsGlossaryPage'
                }
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
            in: {},
            out: {
              security_tips_back_request: {
                bind: 'click-left-button'
              },
              PREPARE_MODAL_INFO_REQUEST: {
                bind: 'click-right-button'
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
      }
    ]
  };

  const DMs = [
    {
      zone: 'app__main',
      tag: 'bbva-security-settings-manager-mx',
      familyPath: '@glomo-web-components/bbva-feature-security-profile-mx',
      type: 'DM',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            security_tips_init_page: {
              bind: 'setSecurityTipsVisited'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-security-tips-xp-dm',
      familyPath: '@glomo-web-components/bbva-security-tips-xp-dm',
      render: 'litElement',
      properties: {
        host: CONFIG.globalServices.publicSettingsHost,
        native: !!CONFIG.native,
        version: CONFIG.globalServices.versions.appSettings || 0,
        headers: {'x-api-key': CONFIG.globalServices.apiKeyAp},
        country: COUNTRY,
        publicSettings: CONFIG.globalServices.publicSettingsId,
        cellsConnections: {
          in: {
            request_security_tips_data: {
              bind: 'getSecurityTips'
            }
          },
          out: {
            success_response_security_tips_data: {
              bind: 'success-on-get-security-tips'
            },
            error_response_security_tips_data: {
              bind: 'error-on-get-security-tips'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-manager-security-tips-list',
      familyPath: '@glomo-web-components/bbva-manager-security-tips-list',
      render: 'litElement',
      properties: {
        country: COUNTRY,
        isMicroillustration: true,
        cellsConnections: {
          in: {
            security_tips_init_page: {
              bind: 'init'
            },
            success_response_security_tips_data: {
              bind: 'successGetTips'
            },
            error_response_security_tips_data: {
              bind: 'errorGetTips'
            },
            security_tips_navigate_to_glossary: {
              bind: 'navigateToGlossary'
            },
            security_tips_tip_selected: {
              bind: 'tipSelected'
            },
            security_tips_toggle_tip_list: {
              bind: 'expandTips'
            },
            global_security_tips_request_error_retry: {
              bind: '_goRetry'
            },
            global_security_tips_request_error_back: {
              bind: '_goBack'
            }
          },
          out: {
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            navigation_security_tips_to_page: {
              bind: 'navigate-to-page'
            },
            security_tips_back_request: {
              bind: 'go-back'
            },
            request_security_tips_data: {
              bind: 'get-security-tips'
            },
            security_tips_main_tip_desc: {
              bind: 'set-main-tip-desc'
            },
            security_tips_main_tip_image: {
              bind: 'set-main-tip-image'
            },
            security_tips_main_tip_microillustration: {
              bind: 'set-main-tip-microillustration'
            },
            security_tips_main_tip_heading: {
              bind: 'set-main-tip-heading'
            },
            security_tips_set_tip_link: {
              bind: 'set-main-tip-link'
            },
            global_security_tips_set_tip_detail_modal: {
              bind: 'set-tip-detail-modal',
              link: {
                page: 'securityTipsDetailPage'
              }
            },
            security_tip_selected: {
              bind: 'set-tip-detail-modal'
            },
            security_tips_set_tip_list_items: {
              bind: 'set-tip-list-items'
            },
            security_tips_see_more_label: {
              bind: 'set-see-more-label'
            },
            security_tips_set_glossary_button_label: {
              bind: 'set-glossary-button-label'
            },
            security_tips_toggle_glossary_button: {
              bind: 'toggle-glossary-button'
            },
            security_tips_toggle_more_tips: {
              bind: 'toggle-show-more-tips'
            },
            global_security_tips_request_error_modal: {
              bind: 'error-on-get-security-tips'
            },
            global_phone_call_channel: {
              bind: 'call-bbva-line',
              'forward-to-native': true
            }
          }
        }
      },
      propertiesSpherica: {
        isSpherica
      }
    }
  ];

  const UI = [
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-panel-info',
      tagSpherica: 'bbva-panel-info-spherica',
      familyPath: '@bbva-web-components/bbva-panel-info',
      familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
      render: 'litElement',
      properties: {
        className: 'tip-panel',
        alignText: 'left',
        cellsConnections: {
          in: {
            security_tips_main_tip_heading: {
              bind: 'heading'
            },
            security_tips_main_tip_image: {
              bind: 'image'
            },
            security_tips_main_tip_microillustration: {
              bind: 'microillustration'
            },
            security_tips_main_tip_desc: {
              bind: 'text'
            },
            security_tips_set_tip_link: {
              bind: 'linkText'
            }
          },
          out: {
            security_tips_tip_selected: {
              bind: 'panel-info-link-click'
            }
          }
        }
      },
      propertiesSpherica: {
        alignText: 'left',
        className: 'u-padding--1',
        alignImageLeft: true,
        alignContentLeft: true,
        defaultImageSize: 'M',
        typeTextSize: '2XL'
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-link-list',
      tagSpherica: 'cells-link-list-spherica',
      properties: {
        style: 'display:grid; ',
        dark: true,
        light: true,
        buttonConfig: {
          icon: 'coronita:forward'
        },
        cellsConnections: {
          in: {
            security_tips_set_glossary_button_label: {
              bind: 'titleText'
            }
          },
          out: {
            security_tips_navigate_to_glossary: {
              bind: 'click',
              analytics: ANALYTICS.PAGE_VIEW_GLOSARY
            }
          }
        }
      },
      propertiesSpherica: {
        dark: null,
        light: null,
        atomIconSize: 'icon-size-24'
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-clip-list',
      familyPath: '@glomo-web-components/bbva-clip-list',
      tagSpherica: 'bbva-clip-list-spherica',
      familyPathSpherica: '@glomo-web-components/bbva-clip-list-spherica',
      render: 'litElement',
      properties: {
        hidden: true,
        listTitle: 'security-tips-category-consult-tips',
        allClickable: true,
        seeLess: 'security-tips-category-btn-hide-tips',
        seeMore: 'security-tips-category-btn-show-more-tips',
        cellsConnections: {
          in: {
            security_tips_set_tip_list_items: {
              bind: 'list'
            },
            security_tips_toggle_more_tips: {
              bind: 'hidden'
            }
          },
          out: {
            security_tips_tip_selected: {
              bind: 'link-click'
            }
          }
        }
      },
      propertiesSpherica: {
        allClickable: false,
        microillustrationBasicText: true,
        isExpandable: true,
        customExpandButton: true,
        newCellsConnections: {
          add: {
            out: {
              security_tips_tip_selected: {
                bind: 'bbva-clip-list-spherica-microillustration-link-clicked'
              }
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'glomo-alert-manager',
      tagSpherica: 'glomo-alert-manager-spherica',
      properties: {
        className: 'security-tips-page',
        native: true,
        cellsConnections: {
          in: {
            global_security_tips_request_error_modal: {
              bind: 'openWithSettings'
            }
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
            security_tip_selected: {
              bind: 'firePageMoreTips'
            }
          },
          out: {
            ANALYTICS_MORE_TIPS_PAGE_VIEW: {
              bind: 'analytics-more-tips-page-view',
              analytics: ANALYTICS.PAGE_VIEW_IDENTIFY_FAKE_MAIL
            }
          }
        }
      }
    }
  ];

  base.components.push(...UI, ...DMs);

  _localStorage.addOutStorageChannels(base.components, [ 'security_tips_last_access_date' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
