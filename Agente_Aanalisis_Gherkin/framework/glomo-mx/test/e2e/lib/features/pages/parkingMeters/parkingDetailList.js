import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica';
@page()
class ParkingDetailList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parkingDetailList[state="active"]',
            elements: {
                header: BbvaHeaderMain,
                wigetFaqs: {
                    properties: {
                        root: 'bbva-widget-faqs-detail bbva-card-article'
                    },
                    imgQuestion: 'img.header-img',
                    titleQuestion: 'div.content .title',
                    answerQuestion: 'div.content div.secondary-content',
                }
            },
            elementsSpherica: {
                header: BbvaHeaderMainSpherica,
                wigetFaqs: {
                    properties: {
                        root: 'bbva-widget-faqs-detail-spherica card-article'
                    },
                    titleQuestion: 'bbva-type-text .text',
                    answerQuestion: 'div.secondary-content .text',
                }
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'image question':
                if (!this.isSpherica()) {
                    await this.wigetFaqs.imgQuestion.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'title question':
                await this.wigetFaqs.titleQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'answer message':
                await this.wigetFaqs.answerQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ParkingDetailList();
