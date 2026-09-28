import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica.js';

@page()
class BlackhawkAnswerFaqs extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blackhawkAnswerDetail[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                titleQuestion: 'bbva-widget-faqs-detail bbva-card-article div.content .title',
                answerQuestion: 'bbva-widget-faqs-detail bbva-card-article div.content div.secondary-content',
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                titleQuestion: 'bbva-widget-faqs-detail-spherica.no-margin-color card-article bbva-type-text p.text',
                answerQuestion: 'bbva-widget-faqs-detail-spherica.no-margin-color card-article bbva-type-text p.text',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'back faqs button':
                await this.header.primaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back faqs button right':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title question':
                await this.titleQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'answer message':
                await this.answerQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BlackhawkAnswerFaqs();
