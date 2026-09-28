'use strict';

/**
 * @param CONFIG
 * @param {String} whatsNewSlider
 * @param {Object} configSlidervower
 *
 * @description You can also use the dynamic channels
 * [`${pageName}_slides`]: Add slides
 * [`${pageName}_start_slider`]: Start slider
 * [`${pageName}_stop_slider`]: Stop Slider
 *
 */
module.exports = (CONFIG) => {
  const storage = require('./common/_local-storage');
  const LOCAL_STORAGE_KEYS = [ 'whatsNewSliderConf' ];

  const onboardingConfig = {
    showButton: true,
    visible: true,
    iOSFixedHeader: true,
    primaryButtonText: 'whats-new-slider-button-spherica',
    autoplay: true,
    playingDelay: 4,
    loop: true,
    optionalControls: ['back', 'next'],
    playing: true,
    playButtonLabel: 'whats-new-slider-play-button',
    closeButtonLabel: 'whats-new-slider-close-button',
    backButtonLabel: 'whats-new-slider-back-button',
    nextButtonLabel: 'whats-new-slider-next-button'
  };
  const onboardingSlides = [{
    id: 1,
    slideTitle: 'whats-new-slider-mail-phone',
    slideTitleTag: 'h3',
    description: 'whats-new-slider-mail-phone',
    microillustration: 'sendEmail',
    showInfoIcon: '',
    infoIcon: 'Warning'
  }, {
    id: 2,
    slideTitle: 'whats-new-slider-password-device',
    slideTitleTag: 'h3',
    description: 'whats-new-slider-password-device',
    microillustration: 'passwordDevice',
    showInfoIcon: '',
    infoIcon: 'Warning'
  }, {
    id: 3,
    slideTitle: 'whats-new-slider-skeleton-zoom',
    slideTitleTag: 'h3',
    description: 'whats-new-slider-skeleton-zoom',
    microillustration: 'clickPay',
    showInfoIcon: '',
    infoIcon: 'Warning'
  }];
  const ANALYTICS_WHATS_NEW = require('./analytics/_whatsNewSlider');
  const pageName = 'whatsNewSlider';
  const base = require('./common/_sliderTemplatePageSpherica')(CONFIG)(pageName, onboardingConfig, onboardingSlides);

  const whatsNewSliderManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-whats-new-slider-manager',
    familyPath: 'glomo-whats-new-slider-manager',
    properties: {
      appVersion: CONFIG.appVersion,
      onboardingSlides,
      cellsConnections: {
        in: {
          whatsNewSlider_start_slider: {
            bind: 'init'
          },
          whatsNewSlider_close_clicked: {
            bind: 'continueNextFlow'
          },
          whatsNewSlider_continue_clicked: {
            bind: 'continueNextFlow'
          }
        },
        out: {
          whatsNewSlider_slides: {
            bind: 'glomo-whats-new-manager-slides'
          },
          global_set_in_storage: {
            bind: 'set-native-local-storage'
          },
          global_landing_page_manager_next_flow: {
            bind: 'continue-next-flow'
          },
          whatsNewSlider_disable_swipe: {
            bind: 'slides-disable-swipe'
          },
          whatsNewSlider_bullets_style: {
            bind: 'slides-bullets-style'
          }
        }
      }
    }
  };

  const whatsNewAnalyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-whats-new-analytics-manager',
    familyPath: 'glomo-whats-new-slider-manager',
    properties: {
      slides: onboardingSlides,
      cellsConnections: {
        in: {
          whatsNewSlider_current_slide: {
            bind: 'dispatchAnalytics'
          }
        },
        out: {
          global_landing_page_manager_analytics: {
            bind: 'analytics-persisted-data',
            analytics: ANALYTICS_WHATS_NEW.huellaPageView,
            featureFlag: ANALYTICS_WHATS_NEW.ANALYTICS_FEATURE_FLAG
          }
        }
      }
    }
  };

  base.components.push(whatsNewSliderManager, whatsNewAnalyticsManager);
  storage.addOutStorageChannels(base.components, LOCAL_STORAGE_KEYS, CONFIG, pageName);
  return base;
};