import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class GiveMoney extends AbstractGlomoPage {

    constructor() {

        super({
            root: '#cells-template-giveMoney[state="active"]',
            elements: {
                header: 'bbva-header-main',
                clipMicroIlustration: 'bbva-clip-microillustration',
                listBulletInformation: 'bbva-list-bullet',
                giveMoneyAdvice: 'bbva-link',
                buttonAccept: 'bbva-button-default'
            },
            requiredElements: ['header'],
        });
    }

    async _screenValidation({item}) {

        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro ilustration':
                await this.clipMicroIlustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bullet information':
                await this.listBulletInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'give money advice link':
                await this.giveMoneyAdvice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button accept':
                await this.buttonAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openGiveMoneyAdvice(){
        await this.giveMoneyAdvice.waitForDisplayed({timeout: config.wait.M});
        await this.giveMoneyAdvice.click();
    }

    async goToTransferFromGiveMoney(){
        await this.buttonAccept.waitForDisplayed({timeout: config.wait.M});
        await this.buttonAccept.click();
    }

}

export default new GiveMoney();
