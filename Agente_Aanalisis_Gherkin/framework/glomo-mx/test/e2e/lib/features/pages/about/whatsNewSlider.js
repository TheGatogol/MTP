import AbstractGlomoPage from '../abstract-glomo-page';
import { page } from '@csqe/radish';

@page()
class WhatsNewSlider extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-whatsNewSlider[state="active"]',
            elements: {
                sliders: 'cells-full-screen-slider',
                bullets: 'cells-pagination-bullets'
            },
            elementsSpherica: {
                sliders: 'bbva-help-onboarding',
                playButtton: 'bbva-help-onboarding bbva-help-modal bbva-type-icon button[class="play"]',
                backButton: 'bbva-help-onboarding bbva-help-modal bbva-type-icon button[class="back"]',
                nextButton: 'bbva-help-onboarding bbva-help-modal bbva-type-icon button[class="next"]',
                infoButton: 'bbva-help-onboarding bbva-help-modal bbva-type-icon button[class="info"]',
                closeButton: 'bbva-help-onboarding bbva-help-modal bbva-type-icon button[class="close"]',
                acceptedButton: 'bbva-help-onboarding bbva-button-default'
            },
            requiredElements: ['sliders', 'bullets'],
        });
    }
}

export default new WhatsNewSlider();
