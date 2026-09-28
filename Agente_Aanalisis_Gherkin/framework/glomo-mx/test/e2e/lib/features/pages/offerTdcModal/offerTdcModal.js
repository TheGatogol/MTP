import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, page, ScreenValidationKeyNotFound} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class OfferTdcModal extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-offerTdcModal[state="active"]',
            elements: {
                dialogOperations: [
                    GlomoAlertManager
                ],
                dataManager: 'cells-dm-global-apis-cards'
            },
            requiredElements: ['root']
        });
    }

    async createPushNotificationInfo() {
        await Commands.pause({time: config.wait.S});
        const {payloadOffers, payloadShortcut} = global.user;
        await this.dataManager.execute({
            script: (data) => this.offersData = data,
            args: [payloadOffers]
        });
        await this.dataManager.execute({
            script: (data) => this.openModalTdcOffer(data),
            args: [payloadShortcut]
        });
    }

    async showCreditCard() {
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.click();
    }

    async closeTdcModal() {
        await this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.closeBtn.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'btnContinue':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new OfferTdcModal();
