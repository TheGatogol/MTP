'use strict';
module.exports = CONFIG => {
  const {
    createPrefixFromPageName,
    getLanguage,
    SPINNER: getSpinner,
    useNames
  } = require('./common/helpers/_utils');
  const pageAnalytics = require('./analytics/_openDigitalAccount')();
  const pageName = 'openDigitalAccountSuccess';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const isNative = CONFIG.native || false;
  const isNativeIos = CONFIG.nativeIos || false;
  const spinner = getSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'sold-spinner'
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: 'bbva-core-blue',
      extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          digital_account_success_init_page: {
            bind: 'recalculateHeader'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'resetLayerScroll'
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
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    properties: {
      variant: 'modal',
      text: 'open-digital-account-success-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          open_digital_account_go_to_login: {
            bind: 'header-main-icon-right-primary-click',
            nativeLink: {
              page: 'nativeLogin'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      lass: 'primary-alt',
      id: 'close-label',
      ambient: 'primary-alt',
      rightButtons: [
        {
          id: 'btn-close',
          name: 'Close',
          icon: 'coronita:close',
          accessibilityText: 'bbva-header-main-a11y-icon-close-label',
          label: 'Cerrar',
          defaultEventIconName: 'header-main-close-icon-click'
        }
      ],
      cellsConnections: {
        out: {
          open_digital_account_go_to_login: {
            bind: 'header-main-close-icon-click',
            nativeLink: {
              page: 'nativeLogin'
            }
          }
        }
      }
    }
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'close-open-digital-account',
      cellsConnections: {
        in: {
          [getChannelName('set_exit_operative')]: {
            bind: 'goBack'
          },
          set_digital_account_success_back_navigation: {
            bind: 'backAction'
          }
        }
      }
    }
  };
  const receipt = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    type: 'UI',
    properties: {
      hideDivider: true,
      isStickyButton: '',
      withoutHead: true,
      withoutAvatar: true,
      hideDate: true,
      mainTitle: 'Contratación',
      language: getLanguage(),
      className: 'button-spacing',
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          open_digital_account_success_payload_response: {
            bind: 'cardToOffert'
          },
          set_digital_account_success_type: {
            bind: 'type'
          },
          set_digital_account_success_class_name: {
            bind: 'class'
          }
        },
        out: {
          [getChannelName('reset_scroll')]: {
            bind: 'reset-layer-scroll'
          },
          open_digital_account_success_share_receipt: {
            bind: 'share-receipt-capture'
          },
          open_digital_account_go_to_magic_log: {
            bind: 'go-to-next',
            link: {
              page: 'magicLogModal'
            }
          },
          open_digital_account_success_open_external_link: {
            bind: 'on-click-message'
          },
          open_digital_account_find_branches: {
            bind: 'operation-find-branches'
          },
          global_action_launcher_uri: {
            bind: 'click-link-credit-card'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'centered-operation-list',
      withSuccessHead: true,
      withoutHead: false,
      withoutAvatar: false,
      disableButtons: true
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-digital-account',
    familyPath: '@glomo-web-components/bbva-manager-digital-account',
    render: 'litElement',
    properties: {
      pageName,
      isNative,
      language: getLanguage(),
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setAppSettingsParams'
          },
          open_digital_account_success_share_receipt: {
            bind: 'shareDataAccount'
          },
          open_digital_account_success_payload: {
            bind: 'currentDataAccount'
          },
          open_digital_account_success_open_external_link: {
            bind: 'globalOpenExternalLinkVideo'
          },
          open_digital_account_find_branches: {
            bind: 'globalOpenExternalLinkBankBranches'
          },
          open_digital_account_multistep_success_page: {
            bind: 'successBannerPayload'
          }
        },
        out: {
          open_digital_account_succes_share_data: {
            bind: 'account-share-data'
          },
          global_action_launcher_video_uri: {
            bind: 'open-external-url-video'
          },
          global_action_launcher_uri: {
            bind: 'open-external-url-branches'
          },
          open_digital_account_success_payload_response: {
            bind: 'payload-event-banner-link'
          }
        }
      }
    }
  };
  const createAnalyticsManager = (tag, connections) => ({
    zone: 'app__main',
    type: 'DM',
    tag,
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-manager-digital-account',
    properties: { cellsConnections: connections }
  });

  const analyticsManager = createAnalyticsManager('bbva-analytics-manager-digital-account', {
    in: {
      digital_account_success_init_page: {
        bind: 'analyticPageView'
      }
    },
    out: {
      open_digital_account_success_analytic_page_view: {
        bind: 'analytics-page-view',
        analytics: pageAnalytics.getAppCompletedLevel2Analytics
      }
    }
  });

  const analyticsManagerSuccess = createAnalyticsManager('bbva-analytics-manager-digital-account-success', {
    in: {
      global_action_launcher_uri: {
        bind: 'clickThrough'
      }
    },
    out: {
      open_digital_account_success_analytic_click_through: {
        bind: 'open-external-url',
        analytics: pageAnalytics.getClickThroughAnalytics
      }
    }
  });
  const actionLauncher = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          open_digital_account_succes_share_data: {
            bind: 'share'
          }
        }
      }
    }
  };

  const button = {
    zone: 'app__main',
    tag: 'bbva-panel-button',
    familyPath: '@bbva-web-components/bbva-panel-button',
    tagSpherica: 'bbva-button-default-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    propertiesSpherica: {
      show: true,
      variant: 'primary',
      ambient: 'primary-alt',
      text: 'open-digital-account-success-landing-cta-spherica',
      buttonText: 'open-digital-account-success-landing-cta-spherica',
      iconLeftPrimary: 'coronita:arrow-right-12',
      accessibilityTextIconLeftPrimary: 'bbva-panel-button-icon-left-primary',
      fullwidth: true,
      className: `u-max-width--2 u-margin--grid u-margin-top--1 u-margin-bottom--${isNativeIos ? '2' : '0-5'}`,
      cellsConnections: {
        out: {
          open_digital_account_go_to_magic_log: {
            bind: 'click',
            link: {
              page: 'magicLogModal'
            }
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/open-digital-account-success'
    },
    pages,
    template,
    components: [
      spinner,
      header,
      receipt,
      navigationHandler,
      manager,
      analyticsManager,
      analyticsManagerSuccess,
      actionLauncher,
      button
    ]
  };
  return sphericaPageUtils.spherize(base);
};
