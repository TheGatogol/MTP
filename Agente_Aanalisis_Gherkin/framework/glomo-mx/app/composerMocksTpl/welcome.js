/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const CROSS_COMPONENTS = require('./common/_cross-components');
  const COUNTRY = utils.getCountry(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorage = require('./common/_local-storage');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('welcome');

  const WELCOME_SLIDES_DM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-welcome-slides-dm',
    properties: {
      cellsConnections: {
        in: {
          welcome_template_active: {
            bind: 'checkDisableWelcome'
          }
        },
        out: {
          welcome_slides_channel: {
            bind: 'slides-changed'
          }
        }
      }
    }
  };

  const base = {
    hash: COUNTRY + '-welcome',
    currentPage: {
      url: '/',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding bg-light' : 'bg-light',
        hasFooter: false,
        headerHidden: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {},
          out: {
            welcome_template_active: {
              bind: 'template-active'
            }
          }
        }
      }
    },

    components: [
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-welcome-slider',
        properties: {
          autoplay: true,
          showRegisterText: false,
          showAccessButton: true,
          showRegisterButton: true,
          accessButtonLocaleText: 'cells-welcome-slider-main-page',
          cellsConnections: {
            in: {
              welcome_slides_channel: {
                bind: 'slides'
              },
              welcome_template_active: {
                bind: 'start'
              },
              navigation_welcome_to_login: {
                bind: 'stop'
              }
            },
            out: {
              navigation_welcome_to_register: {
                bind: 'request-register',
                link: {
                  page: 'onboardingNationalitySelection'
                }
              },
              navigation_welcome_to_login: {
                bind: 'request-access',
                link: {
                  page: 'login'
                }
              },
              navigation_welcome_to_legal_terms: {
                bind: 'request-legal-terms',
                link: {
                  page: 'legalNotice'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'CC',
        tag: 'glomo-feature-flag-dm',
        properties: {
          host: CONFIG.settingsHost,
          namespace: CONFIG.namespace,
          endpoint: CONFIG.endpoints.flags,
          cellsConnections: {
            in: {},
            out: {
              global_feature_flag_collection: {
                bind: 'request-feature-flag-collection-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'CC',
        tag: 'glomo-feature-flag-manager',
        properties: {
          cellsConnections: {
            in: {
              global_login_success: {
                bind: 'requestFeatureFlagCollection'
              },
              global_feature_flag_collection: {
                bind: 'featureFlagCollection'
              }
            },
            out: {
              global_feature_flag_collection_updated: {
                bind: 'feature-flag-collection-updated'
              },
              global_feature_flag_available_operations: {
                bind: 'new-product-detail-operations'
              },
              global_feature_flag_feedback_config: {
                bind: 'new-feedback-config'
              },
              global_feature_flag_profile_sections: {
                bind: 'new-profile-sections'
              },
              global_feature_stand_in_status: {
                bind: 'feature-flag-stand-in-status'
              },
              global_feature_stand_in_status_transactions: {
                bind: 'feature-flag-stand-in-status-movements'
              },
              global_feature_flag_inapp_crm: {
                bind: 'feature-flag-inapp-crm'
              },
              global_feature_flag_futura_collections: {
                bind: 'new-futura-collections'
              }
            }
          }
        }
      },
      WELCOME_SLIDES_DM
    ]
  };

  CROSS_COMPONENTS.common(CONFIG, 'welcome').map(component => base.components.push(component));

  addCommonErrors(base.components)();
  localStorage.addOutStorageChannels(base.components, CONFIG.localStorageKeys, CONFIG);
  return base;
};
