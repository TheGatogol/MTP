'use strict';
module.exports = CONFIG => {
  const {
    useNames,
    createPrefixFromPageName,
    APP_SIDEBAR: sidebar,
    get
  } = require('./common/helpers/_utils');
  const pageName = 'financialEducation';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const {
    globalServices: {
      requiredToken = 'tsec'
    },
    native,
    nativeIos,
    aemHost
  } = CONFIG;
  const aemPath = 'content/caas/mexico/app/youngster-edufin/youngsteredutips.model.json';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const analytics = require('./analytics/_financialEducation')(CONFIG);
  const base = {
    hash: 'financial-education',
    currentPage: {
      url: '/financial-education'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        className: `dark-blue-bg ${nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        className: nativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
      }
    },
    components: [
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          private: true,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + pageName]: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('init_page_init_page')]: {
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
        zone: 'app__transactional',
        type: 'UI',
        tag: 'user-info-tips-finance',
        familyPath: '@bbva-web-components-widgets/user-info-tips-finance',
        render: 'litElement',
        properties: {
          aemHost,
          aemPath,
          imageBannerSrc: './images/financialEducation/financialEducationBanner.avif',
          native,
          requiredToken,
          listCategoriesTabs: [
            { title: 'user-info-tips-finance-account' },
            { title: 'user-info-tips-finance-goals' },
            { title: 'user-info-tips-finance-saving' },
            { title: 'user-info-tips-finance-secure' }
          ],
          contentFragmentIds: {
            youngstertipsslider: 'youngstertipsslider',
            youngsterfasttips: 'youngsterfasttips',
            youngstercategories: 'youngstercategories'
          },
          categorysIds: {
            goals: 'Metas',
            account: 'Cuenta',
            saving: 'Ahorro',
            security: 'Seguridad'
          },
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: '_navigationDashboard'
              }
            },
            out: {
              [getChannelName('BACK_STEP')]: {
                bind: 'user-info-tips-finance-out-flow-step-back',
                backStep: true
              },
              global_open_native_menu: {
                bind: 'user-info-tips-finance-side-menu-open'
              },
              [getChannelName('_open_principal_page')]: {
                bind: 'user-info-tips-finance-principal-page-open'
              },
              [getChannelName('_category_select')]: {
                bind: 'user-info-tips-finance-category-select'
              },
              [getChannelName('_open_modal_video')]: {
                bind: 'user-info-tips-finance-modal-video-open'
              },
              [getChannelName('_open_video')]: {
                bind: 'user-info-tips-finance-open-video'
              },
              [getChannelName('_open_page_tabs')]: {
                bind: 'user-info-tips-finance-page-tabs-open'
              },
              [getChannelName('_tab_selected')]: {
                bind: 'user-info-tips-finance-tab-selected'
              },
              [getChannelName('_open-modal-text')]: {
                bind: 'user-info-tips-finance-modal-text-open'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-financial-education',
        familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('_open_principal_page')]: {
                bind: 'footprintStarted'
              },
              [getChannelName('_category_select')]: {
                bind: 'categorySelectLink'
              },
              [getChannelName('_open_modal_video')]: {
                bind: 'footprintApartado'
              },
              [getChannelName('_open_video')]: {
                bind: 'openVideoExternallink'
              },
              [getChannelName('_open_page_tabs')]: {
                bind: 'footprintPageTabs'
              },
              [getChannelName('_tab_selected')]: {
                bind: 'tabSelectedInteractionLink'
              },
              [getChannelName('_open-modal-text')]: {
                bind: 'footprintModalText'
              }
            },
            out: {
              [getChannelName('_footprint_started')]: {
                bind: 'financial-education-analytics-footprint-started',
                analytics: analytics.footprintStarted
              },
              [getChannelName('_internal_link_dashboard')]: {
                bind: 'financial-education-analytics-internal-link-dashboard',
                analytics: analytics.internalLinkDashboard
              },
              [getChannelName('_footprint_modal_video')]: {
                bind: 'financial-education-analytics-footprint-modal-video',
                analytics: analytics.footprintModalVideo
              },
              [getChannelName('_external_link_modal_video')]: {
                bind: 'financial-education-analytics-external-link-modal-video',
                analytics: analytics.externalLinkModalVideo
              },
              [getChannelName('_footprint_page_tabs')]: {
                bind: 'financial-education-analytics-footprint-tabs',
                analytics: analytics.footprintTabs
              },
              [getChannelName('_interaction_link_tab_selected')]: {
                bind: 'financial-education-analytics-interaction-link-tab-selected',
                analytics: analytics.interactionLinkTabSelected
              },
              [getChannelName('_footprint_modal_text')]: {
                bind: 'financial-education-analytics-footprint-modal-text',
                analytics: analytics.footprintModalText
              }
            }
          }
        }
      }
    ]
  };

  if (native) {
    const getComponent = get(base);
    getComponent('user-info-tips-finance').properties.cellsConnections.out.global_open_native_menu = {
      bind: 'user-info-tips-finance-side-menu-open',
      'forward-to-native': true
    };
  } else {
    base.components.push(sidebar(CONFIG));
  }
  return sphericaPageUtils.spherize(base);
};
