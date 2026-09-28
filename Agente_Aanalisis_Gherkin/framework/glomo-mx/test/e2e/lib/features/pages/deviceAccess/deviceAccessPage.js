import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page('DeviceAccessPage')
class DeviceAccessPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deviceAccessPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                fullScreenModal: {
                    component: {
                        ComponentClass: GlomoAlertManager
                    }
                },
                exitHeaderButton: 'cells-molecule-header #btnRight cells-atom-icon iron-icon',
                inputCard: 'cells-molecule-input #input',
                cameraButton: 'cells-molecule-input #btnMainIcon',
                continueButton: 'cells-confirm-buttons #primaryBtn',
                acceptButton: '#cells-template-__cross > glomo-alert-manager #modal #acceptButton',
                entryNonAccountButton: 'cells-link-list.no-border-bottom div.content',
                iconForm: 'cells-icon-message #principalIcon',
                blueBox: 'cells-icon-message #notInline'

            },
            requiredElements: [
                'exitHeaderButton'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'exit header button':
                await this.exitHeaderButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input card':
                await this.inputCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'camera button':
                await this.cameraButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exclamation icon form':
                await this.iconForm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'identify without card title':
                await this.entryNonAccountButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'blue box':
                await this.blueBox.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openCamera() {
        await this.cameraButton.waitForClickable({timeout: config.wait.M});
        await this.cameraButton.click();
    }

    async accessExitModal() {
        await this.exitHeaderButton.waitForClickable({timeout: config.wait.M});
        await this.exitHeaderButton.click();
    }

    async accessContinue() {
        await this.continueButton.waitForClickable({timeout: config.wait.L});
        await this.continueButton.click();
    }

    async insertNumberCard(number) {
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.M});
        await this.inputCard.waitForDisplayed({timeout: config.wait.L});
        await this.inputCard.setValue({value: number});

    }

    async entryNonAccountClient() {
        await(await (await this.entryNonAccountButton
            .scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }
}

export default new DeviceAccessPage();
