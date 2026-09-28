'use strict';
module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName, headerHeightMinimum
  } = require('./common/helpers/_utils');
  const pageName = 'magicLogModal';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = (Name) =>
    `global_${getChannelName(Name)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const analyticsMagic = require('./analytics/_magicLog')(CONFIG);
  const {
    globalServices: {
      requiredToken = 'tsec'
    },
    nativeIos = false
  } = CONFIG;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerHeight: headerHeightMinimum,
      cellsConnections: {
        in: {
          [getGlobalName('_init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_magicLogModal: {
            bind: 'init'
          }
        },
        out: {
          [getGlobalName('_init_page')]: {
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
  const modalMagicLog = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-account-configuration-section',
    tagSpherica: 'bbva-widget-account-configuration-section-spherica',
    familyPath: '@glomo-web-components/bbva-widget-account-configuration-section',
    familyPathSpherica: '@glomo-web-components/bbva-widget-account-configuration-section-spherica',
    render: 'litElement',
    properties: {
      flagModal: true,
      cellsConnections: {
        in: {
          [getGlobalName('_init_page')]: {
            bind: 'modalPublic'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          open_digital_account_onboarding_token: {
            bind: 'onboardingToken'
          },
          magic_log_modal_accept_btn: {
            bind: 'modalAcceptBtn'
          },
          open_digital_account_multistep_set_customer_id: {
            bind: 'prospectId'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'bbva-widget-account-configuration-section-open-info-modal'
          },
          data_magic_log: {
            bind: 'bbva-widget-account-configuration-section-account-digital-data'
          },
          global_set_in_storage: {
            bind: 'bbva-widget-account-configuration-section-set-data-storage'
          },
          [getGlobalName('navigate-to-login')]: {
            bind: 'bbva-widget-account-configuration-section-navigate-to-login',
            nativeLink: {
              page: 'nativeLogin'
            }
          },
          [getGlobalName('analytics_page_view_magic_modal')]: {
            bind: 'bbva-widget-account-configuration-section-page-view-magic',
            analytics: analyticsMagic.pageViewModal
          }
        }
      }
    }
  };
  const base = {
    hash: 'magic-log-modal',
    currentPage: {
      url: '/magic-log-modal'
    },
    pages,
    template,
    components: [
      lifeCycle,
      modalMagicLog
    ]
  };

  return sphericaPageUtils.spherize(base);
};
