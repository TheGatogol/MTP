'use strict';

module.exports = CONFIG => {
  const { addOutStorageChannels } = require('./common/helpers/_utils');
  const localStorageKeys = [ 'welcomeExperienceConf' ];
  const onboardingConfig = {
    showButton: true,
    visible: true,
    iOSFixedHeader: true,
    primaryButtonText: 'glomo-welcome-experience-slider-button-spherica',
    autoplay: true,
    playingDelay: 4,
    loop: true,
    optionalControls: ['back', 'next'],
    playing: true,
    playButtonLabel: 'glomo-welcome-experience-slider-play-button',
    closeButtonLabel: 'glomo-welcome-experience-slider-close-button',
    backButtonLabel: 'glomo-welcome-experience-slider-back-button',
    nextButtonLabel: 'glomo-welcome-experience-slider-next-button'
  };
  const onboardingSlides = [{
    id: 1,
    slideTitle: 'glomo-welcome-experience-title-1-spherica',
    slideTitleTag: 'h3',
    description: 'glomo-welcome-experience-text-1-spherica',
    microillustration: 'biometric',
    showInfoIcon: '',
    infoIcon: 'Warning'
  }, {
    id: 2,
    slideTitle: 'glomo-welcome-experience-title-2-spherica',
    slideTitleTag: 'h3',
    description: 'glomo-welcome-experience-text-2-spherica',
    microillustration: 'mortgage',
    showInfoIcon: '',
    infoIcon: 'Warning'
  }, {
    id: 3,
    slideTitle: 'glomo-welcome-experience-title-3-spherica',
    slideTitleTag: 'h3',
    description: 'glomo-welcome-experience-text-3-spherica',
    microillustration: 'account',
    showInfoIcon: '',
    infoIcon: 'Warning'
  }, {
    id: 4,
    slideTitle: 'glomo-welcome-experience-title-4-spherica',
    slideTitleTag: 'h3',
    description: 'glomo-welcome-experience-text-4-spherica',
    microillustration: 'cardHealth',
    showInfoIcon: '',
    infoIcon: 'Warning'
  }];

  const pageName = 'welcomeExperience';
  const base = require('./common/_sliderTemplatePageSpherica')(CONFIG)(pageName, onboardingConfig, onboardingSlides);

  const welcomeExperienceManager = {
    zone: 'app__header',
    type: 'DM',
    tag: 'glomo-welcome-experience-manager',
    properties: {
      welcomeUserLabel: 'glomo-welcome-experience-introduction',
      cellsConnections: {
        in: {
          welcomeExperience_start_slider: {
            bind: 'init'
          },
          welcomeExperience_close_clicked: {
            bind: 'continueNextFlow'
          },
          welcomeExperience_continue_clicked: {
            bind: 'continueNextFlow'
          }
        },
        out: {
          welcomeExperience_slides: {
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

  addOutStorageChannels(base.components, localStorageKeys, CONFIG, pageName);

  return base;
};
