'use strict';

/**
 * @param CONFIG
 * @param {String} pageName
 * @param {Object} onboardingConfig
 * @param {Array} onboardingSlides
 *
 * @description You can also use the dynamic channels
 * [`${pageName}_slides`]: Add slides
 * [`${pageName}_start_slider`]: Start slider
 * [`${pageName}_stop_slider`]: Stop Slider
 *
 */
module.exports = (CONFIG) => (pageName, onboardingConfig = {}, onboardingSlides = {}) => {
  const isNativeIos = !!CONFIG.nativeIos;
  const pages = require('./_pages')(CONFIG)(pageName);
  let slides = [];

  (onboardingSlides || []).forEach(slide => {
    let slideObject = {
      zone: 'onboarding.slide' + slide.id,
      tag: 'bbva-help-onboarding-slide',
      familyPath: '@bbva-spherica-components/bbva-help-onboarding',
      render: 'litElement',
      type: 'UI',
      properties: {
        slideTitle: slide.slideTitle,
        slideTitleTag: slide.slideTitleTag,
        description: slide.description,
        microillustration: slide.microillustration,
        showInfoIcon: slide.showInfoIcon,
        infoIcon: slide.infoIcon
      }
    };
    slides.push(slideObject);
  });

  const handleLifeCycle = {
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
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_stop_slider']: {
            bind: 'reset'
          },
          [pageName + '_start_slider']: {
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

  const onBoarding = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-onboarding',
    container: true,
    familyPath: '@bbva-spherica-components/bbva-help-onboarding',
    render: 'litElement',
    properties: {
      id: 'onboarding',
      className: 'u-text--center',
      ...onboardingConfig,
      cellsConnections: {
        in: {
        },
        out: {
          [pageName + '_continue_clicked']: {
            bind: 'help-onboarding-primary-button-click'
          },
          [pageName + '_close_clicked']: {
            bind: 'help-onboarding-secondary-close-click'
          }
        }
      }
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: `/${pageName}`
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: `bg-light${isNativeIos ? ' ios-top-padding' : ''}`,
        headerHidden: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      handleLifeCycle,
      onBoarding,
      ...slides
    ]
  };
  return base;
};