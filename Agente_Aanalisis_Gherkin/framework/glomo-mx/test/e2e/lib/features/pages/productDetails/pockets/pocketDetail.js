import {Commands, page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page()
class PocketDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '*[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                //pocket data
                pocketName: '.header__text',
                pocketAmount: '.main-items',
                scheduledAmount: '.optional-items',
                //operations
                withdrawals: 'li[data-selector="withdrawalMoney"]',
                addMoney: 'li[data-selector="addMoney"]',
                editPocket: 'li[data-selector="editPocket"]',
                deletePocket: 'li[data-selector="deletePocket"]',
                //activity
                emptyActivityTitle: '.list__empty .list__header',
                activityTitle: '',
                // la imagen solo aparece si no hay movimientos
                activitiImage: '.list__empty img',
                activityEmptyDescription: '.empty-results-message',
                activity: 'cells-molecule-group-transactions-list',
                //el link para ver todos los movimientos aparece cuando hay mas de 5
                showAllActivity: '.list__header button',
                pocketDeleteModal: [
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
                activity: 'cells-molecule-group-transactions-list-spherica',
                pocketDeleteModal: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            acceptBtn: '.buttons-container cells-st-button-spherica #acceptButton'
                        }
                    }
                ]
            },
            requiredElements: [
                'header'
            ],
        });

    }

    async goToAllActitivy() {
        await (await (await this.showAllActivity.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async goToWithdrawOperation() {
        await (await this.withdrawals.waitForClickable({timeout: config.wait.M})).click();
    }

    async goToAddMoneyOperation() {
        await (await (await this.addMoney.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async removePocket() {
        await (await (await this.deletePocket.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async confirmRemovePocket() {
        await (await (await this.pocketDeleteModal.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async cancelDeletePocket() {
        if (this.isSpherica()) {
            await (await (await this.pocketDeleteModal.closeBtn.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        } else {
            await (await (await this.pocketDeleteModal.cancelBtn.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
    }

    async editionPocket() {
        await (await (await this.editPocket.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async pocketDeleteRetry(valor) {
        let i = 0;
        while (i < valor) {
            await Commands.pause({time: config.wait.S});
            await this.errorDialogOperations.confirmDialog({expectToDisappear: false});
            i++;
        }
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pocket name':
                await this.pocketName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pocket amount':
                await this.pocketAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scheduled amount':
                await this.scheduledAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawals operation':
                await this.withdrawals.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add money operation':
                await this.addMoney.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit operation':
                await this.editPocket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete operation':
                await this.deletePocket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'empty title':
                await this.emptyActivityTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.activityTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image':
                await this.activitiImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'activity empty description':
                await this.activityEmptyDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'activity':
                await this.activity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show all activity':
                await this.showAllActivity.waitForClickable({timeout: config.wait.M});
                break;
            case 'delete accept':
                (value !== 'invisible') ? await this.pocketDeleteModal.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.XL})
                    : await this.pocketDeleteModal.additionalElements.acceptBtn.waitForText({
                        text: 'salir',
                        timeout: config.wait.XL,
                        exactMatch: false
                    });
                break;
            case 'delete cancel':
                await this.pocketDeleteModal.additionalElements.cancelBtn.waitForDisplayed({timeout: config.wait.XL, reverse: this.isSpherica()});
                break;
            case 'delete icon':
                await this.pocketDeleteModal.additionalElements.paragraphIcon.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'delete description':
                await this.pocketDeleteModal.additionalElements.descriptions.waitForDisplayed({timeout: config.wait.XL});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PocketDetail();
