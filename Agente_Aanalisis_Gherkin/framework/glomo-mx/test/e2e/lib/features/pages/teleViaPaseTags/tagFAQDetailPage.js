import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class TagFAQDetailPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-faqsTagCardDetail[state="active"]',
            elements: {
                title: 'h1',
                descTxt: 'bbva-type-text .text',
                exitBtn: '#btnRight',
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'question':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                await this.descTxt.waitForDisplayed({timeout: config.wait.M});
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new TagFAQDetailPage();
