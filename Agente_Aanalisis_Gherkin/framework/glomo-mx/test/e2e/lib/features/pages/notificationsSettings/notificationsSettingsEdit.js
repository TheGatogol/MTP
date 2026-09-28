import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
@page()
class NotificationsSettingsEdit extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-notificationsSettingsEditPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                configuration: {
                    properties: {root: 'glomo-notifications-list-settings'},
                    title: 'div cells-text-description p.title',
                    description: 'div cells-text-description p.description.mainDescription',
                    editLink: 'div cells-link-list div.content button span',
                },
                editLimitsForm: {
                    properties: {root: 'glomo-notifications-edit-movements-modal'},
                    content: '#modal',
                    header: '#modal #modal #header',
                    title: '#modal div div.headding cells-text-description p.title',
                    description: '#modal div div.headding cells-text-description',
                    inputExpenseAmount: '#inputExpenseAmount #input',
                    inputIncomeAmount: '#inputIncomeAmount',
                    primaryButton: '#acceptButton',
                    secondaryButton: '#cancelButton'
                },
                toast: {
                    properties: {root: 'cells-alert-manager'},
                    description: 'paper-toast div span'
                },
                dialogOperations: [
                    GlomoAlertManager
                ]
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                configuration: {
                    properties: {root: 'glomo-notifications-list-settings-spherica'},
                    title: 'div cells-text-description-spherica p.title',
                    description: 'div cells-text-description-spherica p.description.mainDescription',
                    editLink: 'div cells-link-list-spherica div.content button span',
                },
                editLimitsForm: {
                    properties: {root: 'glomo-notifications-edit-movements-modal-spherica'},
                    content: '#modal',
                    header: '#modal #modal #header',
                    title: '#modal div div.headding cells-text-description-spherica p.title',
                    description: '#modal div div.headding cells-text-description-spherica',
                    inputExpenseAmount: '#inputExpenseAmount #input',
                    inputIncomeAmount: '#inputIncomeAmount',
                    primaryButton: '#acceptButton',
                    secondaryButton: '#cancelButton'
                },
                toast: {
                    properties: {root: 'cells-alert-manager-spherica'},
                    description: 'paper-toast div span'
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica
                ]
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item) {
            case 'header title':
                await this.header.operationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.header.waitForVisible({isBtnLeft: true});
                break;
            case 'title':
                await this.configuration.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.configuration.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'editor header':
                await this.editLimitsForm.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'editor title':
                await this.editLimitsForm.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'editor description':
                await this.editLimitsForm.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expense amount':
                await this.editLimitsForm.inputExpenseAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income amount':
                await this.editLimitsForm.inputIncomeAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save button':
                await this.editLimitsForm.primaryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'restore amounts button':
                await this.editLimitsForm.secondaryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description toast':
                await this.toast.description.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openEditAmounts() {
        await (await this.configuration.editLink.waitForClickable({timeout: config.wait.M})).click();
        await this.editLimitsForm.inputExpenseAmount.waitForDisplayed({timeout: config.wait.M});
    }

    async modifyAmounts() {
        await this.openEditAmounts();
        await (await this.editLimitsForm.inputExpenseAmount.waitForAnimation({timeout: config.wait.S})).setValue({value: '80'});
        await (await this.editLimitsForm.primaryButton.waitForClickable({timeout: config.wait.L})).click();
    }

}

export default new NotificationsSettingsEdit();

