'use strict';

module.exports = config => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        cardsV3: cardsApiVersion
      }
    },
    native = false,
    nativeIos = false
  } = config;
  const {
    getLanguage,
    getLocalCurrency,
    headerHeightMinimum
  } = require('./common/helpers/_utils.js');
  const pages = require('./common/_pages.js')(config)('creditCardPaymentReminderSettings');

  const analytics = require('./analytics/_creditCardPaymentReminderSettings')();

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      extraHeaderClass: 'bg-light-grey',
      headerHeight: headerHeightMinimum,
      className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`,
      cellsConnections: {
        in: {
          __bridge_page_creditCardPaymentReminderSettings: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };

  const userNotificationsNotificationsSettingsMx = {
    zone: 'app__main',
    type: 'UI',
    tag: 'user-notifications-notifications-settings-mx',
    familyPath: '@glomo-web-components/user-notifications-notifications-settings-mx',
    render: 'litElement',
    properties: {
      maxAllowedRetries: 3,
      host,
      native: !!native,
      iOSFixedHeader: nativeIos,
      requiredToken,
      language: getLanguage(),
      cardsApiVersion,
      localCurrency: getLocalCurrency(),
      ambient: 'primary',
      cellsConnections: {
        in: {
          __bridge_page_creditCardPaymentReminderSettings: {
            bind: 'initProcess'
          },
          global_financial_overview_details: {
            bind: 'financialSummary'
          }
        },
        out: {
          user_notifications_notifications_settings_mx_back_request: {
            bind: 'user-notifications-notifications-settings-mx-back-button-click',
            backStep: true
          },
          user_notifications_notifications_settings_mx_config_page_view: {
            bind: 'user-notifications-notifications-settings-mx-config-page-view',
            analytics: analytics.pageViewModify
          },
          user_notifications_notifications_settings_mx_reminder_activated: {
            bind: 'user-notifications-notifications-settings-mx-reminder-activated',
            analytics: analytics.interactionLinkActivate
          },
          user_notifications_notifications_settings_mx_reminder_deactivated: {
            bind: 'user-notifications-notifications-settings-mx-reminder-deactivated',
            analytics: analytics.interactionLinkDeactivate
          },
          user_notifications_notifications_settings_mx_success_page_view: {
            bind: 'user-notifications-notifications-settings-mx-success-page-view',
            analytics: analytics.pageViewSuccess
          },
          user_notifications_notifications_settings_mx_load_error_page_view: {
            bind: 'user-notifications-notifications-settings-mx-load-error-page-view',
            analytics: analytics.errorInfoNotAvailable
          },
          user_notifications_notifications_settings_mx_save_error_page_view: {
            bind: 'user-notifications-notifications-settings-mx-save-error-page-view',
            analytics: analytics.errorOperationNotPerformed
          },
          user_notifications_notifications_settings_mx_navigate_to_dashboard: {
            bind: 'user-notifications-notifications-settings-mx-navigate-to-dashboard',
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'credit-card-payment-reminder-settings',
    currentPage: {
      url: '/credit-card-payment-reminder-settings'
    },
    pages,
    template,
    components: [
      userNotificationsNotificationsSettingsMx
    ]
  };

  return base;
};
