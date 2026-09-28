'use strict';

var moment = require('moment');

module.exports = CONFIG => {
  const { createSpinner } = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { APP_ON_CLICK_START } = require('./analytics/_helpSectionPage');
  const PAGE_NAME = 'helpSectionDetail';
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

  const base = {
    hash: 'help-section-detail-page',
    currentPage: {
      url: '/help/section/detail'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: 0,
        iOSFixedHeader: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            faq_detail_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        className: `bg-light-grey${isNativeIos ? ' ios-top-padding' : ''}`,
        headerHeight: null
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'helpSectionDetailPage',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_faqs: {
                bind: 'init'
              },
              help_section_how_transfer: {
                bind: 'goBack'
              },
              help_section_services_pay: {
                bind: 'goBack'
              },
              help_section_change_password: {
                bind: 'goBack'
              },
              help_section_cardless_withdrawal: {
                bind: 'goBack'
              },
              help_section_qr: {
                bind: 'goBack'
              }
            },
            out: {
              faqs_reset_page: {
                bind: 'reset'
              },
              faqs_init_page: {
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
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          continue: 'dashboard',
          cellsConnections: {
            out: {
              navigation_faq_detail_back: {
                bind: 'click-left-button',
                backStep: true
              }
            },
            params: {
              titleName: 'title'
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary-alt',
          leftIcon: 'coronita:back',
          leftIconText: 'bbva-header-main-return-aria-label',
          className: ''
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-faqs-detail-manager',
        properties: {
          cellsConnections: {
            in: {
              navigation_faqs_to_faqs_detail: {
                bind: 'faqDetail'
              },
              navigation_faq_detail_back: {
                bind: 'reset'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'reset'
              }
            },
            out: {
              faqs_get_native_detail_dm: {
                bind: 'send-faqs-detail-manager-faq'
              },
              faqs_detail_faqs: {
                bind: 'send-faqs-detail-manager-faq'
              },
              faqs_detail_hidden_answer: {
                bind: 'hidden-faq-detail'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-widget-faqs-detail',
        tagSpherica: 'bbva-widget-faqs-detail-spherica',
        familyPath: '@glomo-web-components/bbva-widget-faqs-detail',
        familyPathSpherica: '@glomo-web-components/bbva-widget-faqs-detail-spherica',
        render: 'litElement',
        properties: {
          className: isNativeIos ? 'headerTitlePaddingIos' : 'headerTitlePadding',
          cellsConnections: {
            in: {
              faqs_get_native_detail_dm: {
                bind: 'faq'
              },
              faqs_detail_hidden_answer: {
                bind: 'hidden'
              }
            },
            out: {
              navigation_faqs_detail: {
                bind: 'bbva-widget-faqs-detail-link-click'
              }
            }
          }
        },
        propertiesSpherica: {
          className: isNativeIos ? 'headerTitlePaddingIos no-margin' : 'headerTitlePadding no-margin'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-faqs-list-manager',
        tag: 'glomo-faqs-list-manager-mx',
        properties: {
          clarificationsUrl: 'https://portal.bbva.mx/aclaraciones/aclaraciones-transferencias-SPEI.jsp',
          cellsConnections: {
            in: {
              navigation_faqs_detail: {
                bind: 'redirectTo'
              },
              global_set_app_settings: {
                bind: 'setAppSettings'
              }
            },
            out: {
              navigate_dashboard_to_bill_payments: {
                bind: 'redirect-to-bill-payments',
                link: {
                  page: 'billPaymentsDashboard'
                }
              },
              navigate_to_cardless_withdrawal: {
                bind: 'redirect-to-cardless-withdrawal',
                link: {
                  page: 'cardlessWithdrawal'
                }
              },
              navigation_help_section_detail_to_transfer: {
                bind: 'redirect-to-transfers',
                link: {
                  page: 'transfers',
                  params: {
                    continue: 'continue'
                  }
                }
              },
              global_action_launcher_uri: {
                bind: 'redirect-to-clarifications'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-faqs-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-faqs-manager',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              faqs_detail_faqs: {
                bind: 'detailFaqs'
              },
              navigation_faqs_detail: {
                bind: 'sendAnalyticsDmDetail'
              }
            },
            out: {
              help_section_dashboard: {
                bind: 'help-section-dashboard',
                backStep: true,
                'forward-to-native': true,
                analytics: APP_ON_CLICK_START
              },
              help_section_how_transfer: {
                bind: 'transfers',
                backStep: true,
                'forward-to-native': true,
                analytics: APP_ON_CLICK_START
              },
              help_section_services_pay: {
                bind: 'bill-payments',
                backStep: true,
                'forward-to-native': true,
                analytics: APP_ON_CLICK_START
              },
              help_section_change_password: {
                bind: 'help-section-change-password',
                backStep: true,
                'forward-to-native': true,
                analytics: APP_ON_CLICK_START
              },
              help_section_cardless_withdrawal: {
                bind: 'cardless-withdrawal',
                backStep: true,
                'forward-to-native': true,
                analytics: APP_ON_CLICK_START
              },
              help_section_qr: {
                bind: 'help-section-qr',
                backStep: true,
                'forward-to-native': true,
                analytics: APP_ON_CLICK_START
              }
            }
          }
        }
      }
    ]
  };
  addCommonErrors(base.components);
  return sphericaPageUtils.spherize(base);
};
