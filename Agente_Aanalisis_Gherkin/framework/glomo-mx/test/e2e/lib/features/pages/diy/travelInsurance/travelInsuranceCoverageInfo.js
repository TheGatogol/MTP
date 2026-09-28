import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {page} from '@csqe/radish';

@page('TravelInsuranceCoverageInfo')
class TravelInsuranceCoverageInfo extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-travelInsuranceCoverages[state="active"]',
            elements: {
                contractOfferButton: '#cells-template-travelInsuranceCoverages > cells-confirm-buttons #primaryBtn',
            },
            requiredElements: [
                'contractOfferButton'
            ]
        });

    }

    async confirmOffer() {
        await this.contractOfferButton.scrollIntoView({block: 'start'});
        await this.contractOfferButton.waitForClickable({timeout: config.wait.M});
        await this.contractOfferButton.click();
    }

}

export default new TravelInsuranceCoverageInfo();
