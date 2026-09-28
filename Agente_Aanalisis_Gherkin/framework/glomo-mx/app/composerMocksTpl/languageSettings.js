'use strict';
module.exports = (CONFIG) => {
  const { nativeIos, nativeShell } = CONFIG;
  const { SPINNERSPHERICA: createSpinner } = require('./common/helpers/_utils');
  const pageName = 'languageSettings';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_languageSettings')();

  const cellsSpinnerVeil = createSpinner(CONFIG);
  cellsSpinnerVeil.properties = {
    ...cellsSpinnerVeil.propertiesSpherica,
    className: 'transparent',
    cellsConnections: {
      in: {
        language_settings_open_control_veil: {
          bind: 'openVeil'
        },
        language_settings_close_control_veil: {
          bind: 'closeVeil'
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      className: `bg-light-grey ${nativeIos ? 'ios-top-padding ' : ''}`,
      iOSFixedHeader: nativeIos,
      animationType: 'fade',
      drawerWidth: '100%',
      disableScrollLock: true,
      headerFixed: true,
      extraHeaderClass: 'bg-light-grey',
      disableEdgeSwipe: !!nativeShell,
      cellsConnections: {
        in: {
          settings_navigate_to_language_settings: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const appInfoStructureLanguageSelectionMx = {
    zone: 'app__main',
    type: 'UI',
    tag: 'app-info-structure-language-selection-mx',
    familyPath: '@glomo-web-components/app-info-structure-language-selection-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          settings_navigate_to_language_settings: {
            bind: 'init'
          },
          global_locale_translation_manager_current_app_language: {
            bind: 'setLanguageSelected'
          },
          global_locale_translation_manager_language_updated: {
            bind: 'successUpdateLanguage'
          }
        },
        out: {
          language_settings_open_control_veil: {
            bind: 'app-info-structure-language-selection-mx-open-control-veil'
          },
          language_settings_close_control_veil: {
            bind: 'app-info-structure-language-selection-mx-close-control-veil'
          },
          global_locale_translation_manager_get_current_app_language: {
            bind: 'app-info-structure-language-selection-mx-init'
          },
          global_locale_translation_manager_update_language: {
            bind: 'app-info-structure-language-selection-mx-select'
          },
          language_settings_exit: {
            bind: 'app-info-structure-language-selection-mx-exit',
            backStep: true
          },
          language_settings_success_navigate_dashboard: {
            bind: 'app-info-structure-language-selection-mx-success-update-language',
            link: {
              page: 'dashboard'
            }
          },
          language_settings_notification_toast_open_alert_text: {
            bind: 'app-info-structure-language-selection-mx-notification-toast-message'
          },
          language_settings_init_analytics_page_view: {
            bind: 'app-info-structure-language-selection-mx-init-analytics-page-view',
            analytics: analytics.getAdvancedFootPrint
          },
          language_settings_save_analytics_page_view: {
            bind: 'app-info-structure-language-selection-mx-save-analytics-page-view',
            analytics: analytics.getAdvancedInternalLink
          }
        }
      }
    }
  };
  const base = {
    hash: 'language-settings',
    currentPage: {
      url: '/language-settings'
    },
    pages,
    template: template,
    components: [cellsSpinnerVeil, appInfoStructureLanguageSelectionMx]
  };
  return base;
};
