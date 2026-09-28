import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica.js';

const QUESTION = {
    'first':1,
    'second':2,
    'third':3,
    'fourth':4,
    'fifth':5
};

@page()
class BlackhawkFaqs extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blackhawkAnswer[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                title: 'bbva-widget-faqs-list bbva-header-category',
                faqLink: 'bbva-widget-faqs-list bbva-list-link:nth-of-type(__FAQ__)',
            },
            elementsSpherica:  {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                title: 'bbva-widget-faqs-list-spherica bbva-header-category',
                faqLink: 'bbva-widget-faqs-list-spherica bbva-type-link:nth-of-type(__FAQ__)',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async goToQuestion(question) {
        await (await this.faqLink.specifySelector({placeholder: '__FAQ__', value:QUESTION[question]}).waitForDisplayed({timeout: config.wait.M})).click({timeout: config.wait.M});
    }

}

export default new BlackhawkFaqs();
