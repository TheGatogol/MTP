import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class GiveMoneyAdvice extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-giveMoneyAdvice[state="active"]',
            elements: {
                header: 'bbva-header-main',
                teachText: '#firstAdviceText',
                moneyText: '#secondAdviceText',
                adviceText: '#thirdAdviceText',
                closeButton: 'bbva-button-default'
            },
            requiredElements: ['header']
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'teach text':
                await this.teachText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'money text':
                await this.moneyText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'advice text':
                await this.adviceText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close advice':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeGiveMoneyAdvice(){
        await this.closeButton.waitForDisplayed({timeout: config.wait.M});
        await this.closeButton.click();
    }
}

export default new GiveMoneyAdvice();
