'use strict';

module.exports = CONFIG => {
  const configSlider = {
    cycle: true,
    showButton: true,
    textButton: 'glomo-welcome-experience-button',
    bulletsStyle: 'custom-bullets',
    className: 'text padding-top-sm button-bottom-sm'
  };
  const slides = [{
    lottie: {
      path: './images/welcomeExperience/01_biometrics.json',
      renderer: 'svg',
      loop: true,
      autoplay: false
    },
    title: 'glomo-welcome-experience-title-1',
    text: 'glomo-welcome-experience-text-1',
    class: 'black',
    delay: '4000',
    navigation: {}
  }, {
    lottie: {
      path: './images/welcomeExperience/02_cell.json',
      renderer: 'svg',
      loop: true,
      autoplay: false
    },
    title: 'glomo-welcome-experience-title-2',
    text: 'glomo-welcome-experience-text-2',
    class: 'black',
    delay: '4000',
    navigation: {}
  }, {
    lottie: {
      path: './images/welcomeExperience/03_cards.json',
      renderer: 'svg',
      loop: true,
      autoplay: false
    },
    title: 'glomo-welcome-experience-title-3',
    text: 'glomo-welcome-experience-text-3',
    class: 'black',
    delay: '4000',
    navigation: {}
  }, {
    lottie: {
      path: './images/welcomeExperience/04_health.json',
      renderer: 'svg',
      loop: true,
      autoplay: false
    },
    title: 'glomo-welcome-experience-title-4',
    text: 'glomo-welcome-experience-text-4',
    class: 'black',
    delay: '4000',
    navigation: {}
  }];
  const pageName = 'welcomeExperience';
  const base = require('./common/_sliderTemplatePage')(CONFIG)(pageName, configSlider);
  const newSphericaPage = require('./common/helpers/_spherica')(CONFIG, pageName).getNewSphericaPage();
  if (newSphericaPage) {
    return newSphericaPage;
  }

  const welcomeExperienceManager = {
    zone: 'app__header',
    type: 'DM',
    tag: 'glomo-welcome-experience-manager',
    properties: {
      welcomeUserLabel: 'glomo-welcome-experience-introduction',
      slides,
      cellsConnections: {
        in: {
          [`${pageName}_start_slider`]: {
            bind: 'init'
          },
          [`${pageName}_slider_clicked`]: {
            bind: 'continueNextFlow'
          }
        },
        out: {
          [`${pageName}_slides`]: {
            bind: 'glomo-welcome-experience-manager-slides'
          },
          global_set_in_storage: {
            bind: 'set-native-local-storage'
          },
          global_landing_page_manager_next_flow: {
            bind: 'continue-next-flow'
          }
        },
        params: {
          userInfo: 'global_user'
        }
      }
    }
  };

  base.components.push(welcomeExperienceManager);

  return base;
};
