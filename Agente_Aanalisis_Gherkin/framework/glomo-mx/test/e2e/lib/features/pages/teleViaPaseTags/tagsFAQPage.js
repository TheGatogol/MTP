import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

const QUESTION = {
    'first':1,
    'second':2,
    'third':3,
    'fourth':4,
    'fifth':5,
    'sixth':1,
    'seventh':2,
    'eigth':1,
};

const SECTION = {
    'first':1,
    'second':2,
    'third':3,
};

@page()
class TagsFAQPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-containerFaqsList[state="active"]',
            elements: {
                title: 'h1',
                faqLink: 'bbva-widget-faqs-list-spherica:nth-of-type(__SECTION__) bbva-type-link:nth-of-type(__FAQ__)',
                backBtn: '#btnLeft',
                okBtn: '#primaryBtn',
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async getFAQ(question, section) {
        await (await this.faqLink.specifySelector({placeholder: '__SECTION__', value: SECTION[section]}).specifySelector({placeholder: '__FAQ__', value: QUESTION[question]}).waitForDisplayed({timeout: config.wait.M})).click();
    }

}

export default new TagsFAQPage();
