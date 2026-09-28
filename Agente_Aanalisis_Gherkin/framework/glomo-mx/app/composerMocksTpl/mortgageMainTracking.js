'use strict';

module.exports = CONFIG => {
  const { useNames, toUnderscoreCase  } = require('./common/helpers/_utils');
  const { staticOffers } = require('./common/_cross-components');
  const pageName = 'mortgageMainTracking';
  const prefixPage = toUnderscoreCase(pageName);
  const [ getChannelName ] = useNames(prefixPage);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const analytics = require('./analytics/_mortgageTracking.js')();

  const base = {
    hash: 'mortgage-main-tracking',
    currentPage: {
      url: '/mortgage-main-tracking'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_mortgageMainTracking: {
                bind: 'init'
              }
            },
            out: {
              mortgage_tracking_init_page: {
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
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-feature-mortgage-tracking',
        tag: 'bbva-feature-mortgage-tracking',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          version: CONFIG.globalServices.versions.cards,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          staticOffers,
          urlPage: 'http://bbva.mx/hipotecariocontigo',
          cellsConnections: {
            in: {
              mortgage_tracking_init_page: {
                bind: 'init'
              },
              global_set_app_settings: {
                bind: 'appSettingsParams'
              }
            },
            out: {
              mortgage_tracking_go_back: {
                bind: 'close-tracking',
                backStep: true
              },
              mortgage_tracking_modal_go_back: {
                bind: 'close-tracking-modal-error',
                backStep: true
              },
              global_action_launcher_uri: {
                bind: 'navigation-to-tracking-page',
                'forward-to-native': true
              },
              [getChannelName('analytics_fire_tracking')]: {
                bind: 'analytics-fire-fingerprint-mortgages-tracking'
              },
              [getChannelName('analytics_initial_event')]: {
                bind: 'analytics-fire-fingerprint-mortgages-tracking-modal'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'bbva-analyticmanager-loan-and-mortgage-information',
        familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-information',
        render: 'litElement',
        type: 'DM',
        properties: {
          pageName,
          cellsConnections: {
            in: {
              [getChannelName('analytics_fire_tracking')]: {
                bind: 'firePersistedData'
              },
              [getChannelName('analytics_initial_event')]: {
                bind: 'firePageView'
              }
            },
            out: {
              [getChannelName('mortgage_tracking')]: {
                bind: 'analytics-persisted-data',
                analytics: analytics._getAdvancedFootprints({id: 'trackingMortgage'})
              },
              [getChannelName('mortgage_document_detail')]: {
                bind: 'analytics-page-view-documentation-step',
                analytics: analytics._getAdvancedFootprints({text: 'documentDetail'})
              },
              [getChannelName('mortgage_appraised_document')]: {
                bind: 'analytics-page-view-upload-appraisal-documents',
                analytics: analytics._getAdvancedFootprints({text: 'appraiseDocument'})
              },
              [getChannelName('mortgage_appraised_date_define')]: {
                bind: 'analytics-page-view-definition-appraisal-date',
                analytics: analytics._getAdvancedFootprints({text: 'appraiseDate'})
              },
              [getChannelName('mortgage_appraised_date_ready')]: {
                bind: 'analytics-page-view-consult-appraisal-date',
                analytics: analytics._getAdvancedFootprints({text: 'appraiseDateReady'})
              },
              [getChannelName('mortgage_appraised_analysing_result')]: {
                bind: 'analytics-page-view-appraisal-date-capture',
                analytics: analytics._getAdvancedFootprints({text: 'appraiseResult'})
              },
              [getChannelName('mortgage_appraise_ready')]: {
                bind: 'analytics-page-view-appraisal-amount-result',
                analytics: analytics._getAdvancedFootprints({text: 'appraiseReady'})
              },
              [getChannelName('mortgage_notarial_analysing_notarial')]: {
                bind: 'analytics-page-view-notary-election',
                analytics: analytics._getAdvancedFootprints({text: 'notarialNotarial'})
              },
              [getChannelName('mortgage_notarial_analysing_assigned')]: {
                bind: 'analytics-page-view-notary-information',
                analytics: analytics._getAdvancedFootprints({text: 'notarialAssigned'})
              },
              [getChannelName('mortgage_notarial_signature')]: {
                bind: 'analytics-page-view-date-selection-notarial',
                analytics: analytics._getAdvancedFootprints({text: 'notarialSignature'})
              },
              [getChannelName('mortgage_notarial_detail')]: {
                bind: 'analytics-page-view-notarial-signature',
                analytics: analytics._getAdvancedFootprints({text: 'notarialDetail'})
              },
              [getChannelName('mortgagemain_request_error')]: {
                bind: 'analytics-page-view-expirate-date-error',
                analytics: analytics._getAdvancedFootprints({id: 'requestError'})
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
