import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import BbvaHeaderMainSpherica from '../../../components/bbva-header-main-spherica';
import GlomoAlertManager from '../../../components/glomo-alert-manager';
import AbstractGlomoPage from '../../abstract-glomo-page';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';

@page()
class PocketEdit extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pocketsEdit[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                inputName: '#cells-template-pocketsEdit > bbva-form-text input',
                message: 'div.message.info',
                scheduledTitle: '#labelOutText',
                checkbox: '[data-tag-name="bbva-form-checkbox"]',
                inputScheduledAmount: '#cells-template-pocketsEdit > bbva-form-amount input',
                accept: 'bbva-button-default[variant="primary"]',
                cancel: 'bbva-button-default[variant="link"]',
                pocketModal: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button #cancelButton',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            descriptions: 'div.paragraph-template [data-selector="paragraph-template-text"]:not([style="display: none;"])',
                        }
                    }
                ],
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                inputName: '#inputName [data-tag-name="bbva-form-text"] input',
                checkbox: '[data-tag-name="bbva-form-checkbox-spherica"]',
                inputScheduledAmount: '#inputScheduledAmount input',
                accept: 'bbva-button-default-spherica[variant="primary"]',
                pocketModal: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button-spherica #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button-spherica #cancelButton'
                        }
                    }
                ],
                headerMain: [
                    BbvaHeaderMainSpherica
                ]
            },
            requiredElements: [
                'inputName',
            ],
        });
    }

    async fillAmountToAdd(value = '1399') {
        await (await this.inputScheduledAmount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: value});
    }

    async changePocketName(value) {
        await (await this.inputName.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: value});
    }

    async cancelEditPocket() {
        if (this.isSpherica()) {
            await this.headerMain.actionRight();
        } else {
            await (await (await this.cancel.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
        await (await (await this.pocketModal.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async saveEditPocket() {
        await this.exitEdit();
        await (await (await this.pocketModal.cancelBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async exitEdit() {
        if (this.isSpherica()) {
            await this.headerMain.actionRight();
        } else {
            await (await (await this.cancel.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
    }

    async removeProgramming() {
        await (await (await this.checkbox.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async goToSuccess() {
        await (await (await this.accept.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.XXL}))
            .click();
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'source':
                await this.sourcePocket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination':
                await this.destinationAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input':
                await this.input.waitForText({text: value, exactMatch: false, timeout: config.wait.M});
                break;
            case 'input message':
                await this.inputMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input error message':
                await this.inputErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue':
                (value === 'disabled') ? await this.continue.waitForDisabled({timeout: config.wait.M})
                    : await this.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change amount':
                await this.changeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount message':
                await this.amountMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount section':
                await this.amountSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept':
                await this.accept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit edit modal':
                await this.pocketModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue edit modal':
                await this.pocketModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input name edit':
                await this.inputName.waitForDisplayed({timeout: config.wait.M});
                if ((await this.inputName.getValue()) !== value) {
                    throw new Error('no match');
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PocketEdit();
