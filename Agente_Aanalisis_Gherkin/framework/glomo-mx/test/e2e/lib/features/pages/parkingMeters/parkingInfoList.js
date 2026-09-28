import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica';

const QUESTION = {
    'first':1,
    'second':2,
    'third':3,
    'fourth':4
};

@page()
class ParkingInfoList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parkingInfoList[state="active"]',
            elements: {
                header: BbvaHeaderMain,
                faqLink: 'bbva-widget-faqs-list bbva-list-link:nth-of-type(__FAQ__)',
                helpMessagge: '[data-tag-name="bbva-notification-message"]'
            },
            elementsSpherica: {
                header: BbvaHeaderMainSpherica,
                faqLink: 'bbva-widget-faqs-list-spherica bbva-type-link:nth-of-type(__FAQ__)',
                helpMessagge: '[data-tag-name="bbva-notification-message-spherica"]'
            },
            requiredElements: [
                'header',
                'helpMessagge'
            ],
        });
    }

    async goToParkQuestion(question) {
        await (await this.faqLink.specifySelector({placeholder: '__FAQ__', value:QUESTION[question]}).waitForDisplayed({timeout: config.wait.M})).click({timeout: config.wait.M});
    }

}

export default new ParkingInfoList();
