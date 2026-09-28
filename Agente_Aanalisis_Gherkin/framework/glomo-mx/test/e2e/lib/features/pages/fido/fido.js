import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class Fido extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-fido[state="active"]',
            elements: {
                mainModal: [BbvaHelpModal, { modifiers: '#fido' }],
                biometrics: [BbvaHelpModal, { modifiers: '#bbvaHelpModalPage[visible]' }],
                cancelationModal: [BbvaHelpModal, { modifiers: '#other-moment' }],
            },
            requiredElements: [
                '__root',
            ]
        });
    }

    async activeLater() {
        await this.mainModal.cancelBtn.waitForDisplayed({timeout: config.wait.XL});
        await this.mainModal.cancelBtn.click();
        await this.cancelationModal.acceptBtn.waitForDisplayed({timeout: config.wait.XL});
        await this.cancelationModal.acceptBtn.click();
    }

    async skipBiometricsConfig(){
        await this.biometrics.closeBtn.waitForDisplayed();
        await this.biometrics.closeBtn.click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.mainModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image':
                await this.mainModal.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.mainModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.mainModal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.mainModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button':
                await this.mainModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new Fido();
