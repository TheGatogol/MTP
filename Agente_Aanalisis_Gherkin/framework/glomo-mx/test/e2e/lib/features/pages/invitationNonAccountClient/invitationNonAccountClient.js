import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class InvitationNonAccountClient extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-invitationNonAccountClient[state="active"]',
            elements: {
                modalTextMain: '#invitationNonAccountClientModal #textMain',
                modalContinueBtn: '#invitationNonAccountClientModal bbva-button-default',
            },
            requiredElements: [
                '__root'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'text template':
                await this.modalTextMain.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.modalContinueBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InvitationNonAccountClient();
