'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS = require('./analytics/_upgradeAccountCustomer')();
  const PAGE_NAME = 'init';
  const isNativeIos = CONFIG.nativeIos || false;

  SPINNER.properties.cellsConnections.in.upgrade_account_init_page_show_spinner = {
    bind: 'show'
  };
  SPINNER.properties.cellsConnections.in.upgrade_account_init_page_hide_spinner = {
    bind: 'hide'
  };

  const configButtons = {
    buttons: {
      primary: {
        text: 'account-detail-upgrade-button-label',
        action: 'start-button-clicked'
      }
    }
  };

  const base = {
    currentPage: {
      url: '/upgrade-account',
      params: []
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'bbva-core-blue',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        footerHeight: 112,
        hasFooter: true,
        headerFixed: true,
        iOSFixedHeader: true
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'upgradeAccountInitPage',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app_upgradeAccountInitPage: {
                bind: 'navigation'
              },
              __bridge_page_upgradeAccountInitPage: {
                bind: 'init'
              }
            },
            out: {
              upgrade_account_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.APP_PAGE_VISIT
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
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        properties: {
          config: configButtons,
          cellsConnections: {
            in: {
            },
            out: {
              upgrade_account_init_click_continue: {
                bind: 'start-button-clicked'
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
          backAction: 'navigation-to-dashboard',
          currentPage: 'upgradeAccountInitPage',
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'handleNativeBackButton'
              },
              global_opened_modal: {
                bind: 'openedModal'
              },
              upgrade_account_init_header_main_icon_right_primary_click: {
                bind: 'goBack'
              },
              upgrade_account_init_navigation_to_previous_page: {
                bind: 'goBack'
              }
            },
            out: {
              upgrade_account_init_navigation_to_previous_page: {
                bind: 'navigate-to-previous-page'
              },
              global_alert_modal_close: {
                bind: 'navigate-native-back-button'
              },
              navigation_upgrade_account_to_dashboard: {
                bind: 'navigation-to-dashboard',
                backStep: true,
                skipHistory: true,
                link: {
                  page: 'dashboard'
                }
              },
              global_upgrade_account_exit: {
                bind: 'navigation-to-dashboard'
              }
            }
          }
        }
      }
    ]
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      text: 'upgrade-account-init-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
        },
        out: {
          upgrade_account_init_header_main_icon_right_primary_click: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const panelInfoInit = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      microillustration: 'accountlimitexceeded',
      cellsConnections: {
        in: {
          upgrade_acccount_account_limit_heading: {
            bind: 'heading'
          },
          upgrade_account_proactives_users_message: {
            bind: 'text'
          },
          upgrade_account_alerted_light_users_message: {
            bind: 'text'
          },
          upgrade_account_alerted_severe_users_message: {
            bind: 'text'
          },
          upgrade_account_blocked_users_message: {
            bind: 'text'
          },
          upgrade_account_set_warning_image: {
            bind: 'image'
          },
          upgrade_acccount_custom_style: {
            bind: 'style'
          }
        }
      }
    }
  };

  const divider = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    familyPath: '@bbva-web-components/bbva-divider',
    render: 'litElement',
    properties: {
      size: 'small center'
    }
  };

  const clipList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-clip-list',
    familyPath: '@glomo-web-components/bbva-clip-list',
    render: 'litElement',
    properties: {
      className: 'hide-border-list u-margin-bottom--0-5',
      allClickable: true,
      cellsConnections: {
        in: {
          upgrade_acccount_account_requiriments_lists: {
            bind: 'list'
          }
        }
      }
    }
  };

  const notifications = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    familyPath: '@bbva-web-components/bbva-notification-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      cellsConnections: {
        in: {
          upgrade_account_init_set_info_message: {
            bind: 'message'
          },
          upgrade_account_blocked_users_notifications_message: {
            bind: 'message'
          },
          set_hidden_true_notification_message: {
            bind: 'hidden'
          }
        },
        out: {
          upgrade_account_open_modal_restrictions: {
            bind: 'link-clicked'
          }
        }
      }
    }
  };

  const privacyTextLink = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-link',
    familyPath: '@bbva-web-components/bbva-link',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-bottom--1 u-margin-top--1',
      cellsConnections: {
        in: {
          upgrade_acccount_privacy_alert_main_text: {
            bind: 'text'
          }
        },
        out: {
          upgrade_account_privacy_link_click: {
            bind: 'click',
            analytics: ANALYTICS.PRIVACY_NOTICE_PRINT
          }
        }
      }
    }
  };


  const pageDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-init-dm-upgrade-account',
    familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
    render: 'litElement',
    properties: {
      pageName: PAGE_NAME,
      servicesMaxRetries: 3,
      privacyModalConfig: {
        code: 'privacy-alert',
        selectedConfig: {
          className: 'full-height-info info header--white header--without-shadow assistance-identification-update',
          openMaximized: true,
          title: 'upgrade-account-init-privacy-modal-header',
          acceptBtLabel: 'upgrade-account-init-privacy-modal-button',
          template: {
            type: 'paragraphs',
            values: [
              { icon: 'coronita:help', iconClass: 'dark-core-blue icon-size-24', class: 'info text-center margin-bottom-none padding-size-12' },
              { text: 'upgrade-account-init-privacy-modal-paragraph-one' },
              { text: 'upgrade-account-init-privacy-modal-paragraph-two' }
            ]
          }
        }
      },
      cellsConnections: {
        in: {
          global_account_navigation_product_detail_to_upgrade_account: {
            bind: 'onProductChanged'
          },
          upgrade_account_open_warning_modal: {
            bind: 'openRestrictionsWarning'
          },
          upgrade_account_open_blocked_modal: {
            bind: 'openRestrictionsBlocked'
          },
          upgrade_account_init_click_continue: {
            bind: 'onContinueClicked'
          },
          upgrade_account_privacy_link_click: {
            bind: 'openPrivacyModal'
          },
          upgrade_account_init_page_set_usage_account_success: {
            bind: 'getUsageAccountSuccess'
          },
          upgrade_account_init_page_set_usage_account_error: {
            bind: 'getUsageAccountError'
          },
          upgrade_account_init_page_set_occupations_success: {
            bind: 'getOccupationsSuccess'
          },
          upgrade_account_init_page_set_occupations_error: {
            bind: 'getOccupationsError'
          },
          global_upgrade_account_exit: {
            bind: 'reset'
          },
          upgrade_account_finish_retry_exit_process: {
            bind: 'reset'
          }
        },
        out: {
          set_hidden_true_notification_message: {
            bind: 'set-hidden-true'
          },
          upgrade_account_set_warning_image: {
            bind: 'set-warning-image'
          },
          upgrade_account_init_set_info_message: {
            bind: 'set-info-message'
          },
          upgrade_account_blocked_users_notifications_message: {
            bind: 'set-blocked-info-message'
          },
          upgrade_account_proactives_users_message: {
            bind: 'set-proactives-users-message'
          },
          upgrade_account_alerted_light_users_message: {
            bind: 'set-alerted-light-users-message'
          },
          upgrade_account_alerted_severe_users_message: {
            bind: 'set-alerted-severe-users-message'
          },
          upgrade_account_blocked_users_message: {
            bind: 'set-blocked-users-message'
          },
          upgrade_account_init_set_modal_message: {
            bind: 'set-restrictions-modal-message'
          },
          upgrade_account_init_page_update_route: {
            bind: 'update-route',
            analytics: ANALYTICS.APP_STARTED_CONTINUE,
            link: {
              page: 'upgradeAccountPrevQuestionsPage'
            }
          },
          open_upgrade_account_privacy_modal: {
            bind: 'open-privacy-modal',
            analytics: ANALYTICS.APP_STARTED_PRIVACY_MODAL
          },
          set_title_icon: {
            bind: 'set-title-icon'
          },
          upgrade_account_due_date_recalculated: {
            bind: 'due-date-recalculated'
          },
          upgrade_account_warning_modal_open: {
            bind: 'open-restrictions-warning-modal'
          },
          upgrade_account_blocked_modal_open: {
            bind: 'open-restrictions-blocked-modal'
          },
          upgrade_account_init_page_get_usage_account: {
            bind: 'get-usage-account'
          },
          upgrade_account_init_page_get_occupations: {
            bind: 'get-occupations'
          },
          upgrade_account_init_page_show_spinner: {
            bind: 'show-spinner'
          },
          upgrade_account_init_page_hide_spinner: {
            bind: 'hide-spinner'
          },
          upgrade_account_verification_exit_modal: {
            bind: 'show-error-exit-modal',
            analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
          },
          upgrade_account_init_accept_exit_modal: {
            bind: 'accept-modal-exit-process'
          },
          upgrade_account_finish_retry_exit_process: {
            bind: 'finish-retry-exit-upgrade-account',
            analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED,
            skipHistory: true,
            link: {
              page: 'dashboard'
            }
          },
          upgrade_acccount_privacy_alert_main_text: {
            bind: 'privacy-alert-main-text'
          },
          upgrade_acccount_account_limit_heading: {
            bind: 'account-limit-heading'
          },
          upgrade_acccount_account_requiriments_lists: {
            bind: 'upgrade-requeriment-list'
          },
          upgrade_acccount_session_storage_token: {
            bind: 'session-storage-token'
          },
          upgrade_acccount_custom_style: {
            bind: 'set-custom-style'
          }
        }
      }
    }
  };

  const dataDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-customer-data-dm-upgrade-account',
    familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
    render: 'litElement',
    properties: {
      pageName: PAGE_NAME,
      cellsConnections: {
        in: {
          upgrade_account_init_accept_exit_modal: {
            bind: 'exitProcess'
          }
        },
        out: {
          global_upgrade_account_show_close_confirm: {
            bind: 'open-exit-modal'
          },
          upgrade_account_exit_process: {
            bind: 'reset'
          },
          upgrade_account_finish_retry_exit_process: {
            bind: 'finish-retry-exit-upgrade-account',
            analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED,
            skipHistory: true,
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    }
  };

  const apiCatalogs = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-catalogs',
    properties: {
      host: CONFIG.globalServices.host,
      catalogsApiVersion: '0',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          upgrade_account_init_page_get_usage_account: {
            bind: 'getRecords'
          },
          upgrade_account_init_page_get_occupations: {
            bind: 'getRecords'
          }
        },
        out: {
          upgrade_account_init_page_set_usage_account_success: {
            bind: 'set-usage-account'
          },
          upgrade_account_init_page_set_usage_account_error: {
            bind: 'error-on-get-usage-account'
          },
          upgrade_account_init_page_set_occupations_success: {
            bind: 'set-occupations'
          },
          upgrade_account_init_page_set_occupations_error: {
            bind: 'error-on-get-occupations'
          },
          upgrade_account_multistep_usage_account: {
            bind: 'set-usage-account'
          },
          upgrade_account_multistep_occupations: {
            bind: 'set-occupations'
          }
        }
      }
    }
  };

  base.components.push(header);
  base.components.push(panelInfoInit);
  base.components.push(divider);
  base.components.push(clipList);
  base.components.push(notifications);
  base.components.push(privacyTextLink);
  base.components.push(pageDm);
  base.components.push(apiCatalogs);
  base.components.push(dataDm);


  return base;
};
