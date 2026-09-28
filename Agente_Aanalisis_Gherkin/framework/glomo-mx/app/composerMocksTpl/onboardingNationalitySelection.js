'use strict';
module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)('onboardingNationalitySelection');
  const { nativeIos = false, native = false } = CONFIG;
  const { getAdvancedFootprintLevel1, appOnClickStart } = require('./analytics/_onboardingForeigners')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'onboardingNationalitySelection');

  const featureWidgetOnboardingForeigners = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-lite-onboarding-foreigners',
    familyPath: '@glomo-web-components/bbva-widget-lite-onboarding-foreigners',
    render: 'litElement',
    properties: {
      pageName: 'onboardingNationalitySelection',
      iOSFixedHeader: nativeIos,
      native,
      country: 'mx',
      items: [{
        id: 'onboardingNational',
        iconColor: '#1464A5',
        variant: 'icon',
        icon: 'bbva:idcard',
        iconSize: 24,
        firstTextSize: 'L',
        firstTextWeight: '500',
        firstText: 'bbva-widget-lite-onboarding-foreigners-text-mexicana',
        firstTextColor: '#1464A5',
        secondText: 'bbva-widget-lite-onboarding-foreigners-text-ine',
        secondTextSize: 'M',
        secondTextWeight: '300',
        linkColor: '#1464A5',
        linkVariant: 'icon',
        linkIcon: 'bbva:next',
        linkSize: 32,
        eventOnClick: 'open-digital-account'
      },
      {
        id: 'onboardingForeigners',
        iconColor: '#1464A5',
        variant: 'icon',
        icon: 'bbva:passport',
        iconSize: 24,
        firstTextSize: 'L',
        firstTextWeight: '500',
        firstText: 'bbva-widget-lite-onboarding-foreigners-text-foreigner',
        firstTextColor: '#1464A5',
        secondText: 'bbva-widget-lite-onboarding-foreigners-text-passport',
        secondTextSize: 'M',
        secondTextWeight: '300',
        linkColor: '#1464A5',
        linkVariant: 'icon',
        linkIcon: 'bbva:next',
        linkSize: 32,
        eventOnClick: 'onboarding-foreign'
      }],
      cellsConnections: {
        params: {
        },
        in: {
          __bridge_page_onboardingNationalitySelection: {
            bind: 'init'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'exit'
          },
          newSectionApp_init_page: {
            bind: 'init'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          }
        },
        out: {
          close_native_web_view_to_welcome: {
            bind: 'bbva-widget-lite-onboarding-foreigners-back-step',
            'forward-to-native': true,
            backStep: true
          },
          bbva_widget_lite_onboarding_foreigners_onboarding_foreign: {
            bind: 'bbva-widget-lite-onboarding-foreigners-onboarding-foreign',
            link: {
              page: 'onboardingForeigners'
            }
          },
          bbva_widget_lite_onboarding_foreigners_open_modal: {
            bind: 'bbva-widget-lite-onboarding-foreigners-open-modal'
          },
          bbva_widget_lite_onboarding_foreigners_open_digital_account: {
            bind: 'bbva-widget-lite-onboarding-foreigners-open-digital-account',
            link: {
              page: 'openDigitalAccount'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      items: [{
        id: 'onboardingNational',
        iconColor: '#001391',
        variant: 'icon',
        icon: 'sphericaIdCard',
        iconSize: 24,
        firstTextSize: 'L',
        firstTextWeight: '500',
        firstText: 'bbva-widget-lite-onboarding-foreigners-text-mexicana',
        firstTextColor: '#001391',
        secondText: 'bbva-widget-lite-onboarding-foreigners-text-ine',
        secondTextSize: 'M',
        secondTextWeight: '350',
        eventOnClick: 'open-digital-account'
      },
      {
        id: 'onboardingForeigners',
        iconColor: '#001391',
        variant: 'icon',
        icon: 'sphericaPassport',
        iconSize: 24,
        firstTextSize: 'L',
        firstTextWeight: '500',
        firstText: 'bbva-widget-lite-onboarding-foreigners-text-foreigner',
        firstTextColor: '#001391',
        secondText: 'bbva-widget-lite-onboarding-foreigners-text-passport',
        secondTextSize: '50',
        secondTextWeight: '350',
        eventOnClick: 'onboarding-foreign'
      }]
    }
  };
  const analyticmangerOnboardingForeigners = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-onboarding-foreigners',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-onboarding',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          bbva_widget_lite_onboarding_foreigners_onboarding_foreign: {
            bind: 'fireAppOnClickStart'
          },
          bbva_widget_lite_onboarding_foreigners_open_modal: {
            bind: 'firePageViewEntryPointModal'
          }
        },
        out: {
          bbva_widget_lite_onboarding_foreigners_fire_foreigners: {
            bind: 'analytics-app-on-click-start-onboarding-foreigners',
            analytics: appOnClickStart()
          },
          bbva_widget_lite_onboarding_foreigners_open_entry_point: {
            bind: 'analytics-page-view-fire-modal-entry-point-onboarding-foreigners',
            analytics: getAdvancedFootprintLevel1('eleccion nacionalidad')
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/onboarding-nationality-selection'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        headerFixed: true,
        className: `bbva-core-blue ${nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: 'header--core',
        iOSFixedHeader: nativeIos
      },
      propertiesSpherica: {
        disableEdgeSwipe: true,
        headerFixed: true,
        className: `bbva-core-blue ${nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: `header--core ${nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      featureWidgetOnboardingForeigners,
      analyticmangerOnboardingForeigners
    ]
  };
  return sphericaPageUtils.spherize(base);
};
