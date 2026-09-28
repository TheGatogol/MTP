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


  const configSlider = {
    cycle: true,
    showButton: true,
    textButton: 'whats-new-slider-button',
    bulletsStyle: 'custom-bullets',
    buttonClass: 'btn-slide',
    className: 'text button-bottom-sm'
  };
  const slides = [{
    lottie: {
      path: './images/whatsNewSlider/mailPhone.json',
      renderer: 'svg',
      loop: true,
      autoplay: false
    },
    text: 'whats-new-slider-mail-phone',
    class: 'black',
    delay: '7000',
    navigation: {
      page: 'dashboard'
    }
  },
  {
    lottie: {
      path: './images/whatsNewSlider/passwordDevice.json',
      renderer: 'svg',
      loop: true,
      autoplay: false
    },
    text: 'whats-new-slider-password-device',
    class: 'black',
    delay: '7000',
    navigation: {
      page: 'dashboard'
    }
  },
  {
    lottie: {
      path: './images/whatsNewSlider/skeletonZoom.json',
      renderer: 'svg',
      loop: true,
      autoplay: false
    },
    text: 'whats-new-slider-skeleton-zoom',
    class: 'black',
    delay: '7000',
    navigation: {
      page: 'dashboard'
    }
  }];

  const ANALYTICS_WHATS_NEW = require('./analytics/_whatsNewSlider');
  const pageName = 'whatsNewSlider';
  const base = require('./common/_sliderTemplatePage')(CONFIG)(pageName, configSlider);
  const newSphericaPage = require('./common/helpers/_spherica')(CONFIG, pageName).getNewSphericaPage();
  if (newSphericaPage) {
    return newSphericaPage;
  }

  const whatsNewSliderManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-whats-new-slider-manager',
    familyPath: 'glomo-whats-new-slider-manager',
    properties: {
      appVersion: CONFIG.appVersion,
      slides,
      cellsConnections: {
        in: {
          [pageName + '_start_slider']: {
            bind: 'init'
          },
          [pageName + '_slider_clicked']: {
            bind: 'continueNextFlow'
          }
        },
        out: {
          [pageName + '_slides']: {
            bind: 'glomo-whats-new-manager-slides'
          },
          global_set_in_storage: {
            bind: 'set-native-local-storage'
          },
          global_landing_page_manager_next_flow: {
            bind: 'continue-next-flow'
          },
          [pageName + '_disable_swipe']: {
            bind: 'slides-disable-swipe'
          },
          [pageName + '_bullets_style']: {
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
      slides: slides,
      cellsConnections: {
        in: {
          [pageName + '_current_slide']: {
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
