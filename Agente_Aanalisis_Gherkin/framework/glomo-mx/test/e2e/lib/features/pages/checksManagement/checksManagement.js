import MultiStepComponentObject from '../multiSteps/multiStepComponentObject';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsStepProductSelector from '../../components/cells-step-product-selector';
import CellsStepCheckData from '../../components/cells-step-select-as-link';
import CellsOperationSummary from '../../components/cells-operation-summary';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import * as navigation from '../../navigation';
import { page } from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

const flowData = {
    name: 'checksManagement',
    root: '#cells-template-checksManagement[state="active"]',
    elements: {
        header: 'cells-molecule-header[slot="app__header"] #titleZone .header__title',
        closeButton: 'cells-molecule-header[slot="app__header"] #btnRight',
        helpIcon: 'cells-molecule-header[slot="app__header"] #btnRightSecondary',

        multiStep: {
            stepAccount: {
                component: {
                    ComponentClass: CellsStepProductSelector
                }
            },
            stepCheckData: {
                component: {
                    ComponentClass: CellsStepCheckData,
                    args: { listData: [{
                        name: 'checkNumber',
                        keyText: 'Número de cheque'
                    }, {
                        name: 'amount',
                        keyText: 'Importe'
                    }] }
                }
            },
            stepSummary: {
                component: {
                    ComponentClass: CellsOperationSummary
                }
            }
        },
        dialogOperations: [
            GlomoAlertManager,
            {
                additionalElements:{
                    questionIcon: '.icon-container cells-atom-icon',
                }
            }
        ],
        signConnector: CellsSignOperationModal
    },
    elementsSpherica: {
        signConnector: CellsSignOperationModalSpherica
    },
         
    requiredElements: ['header']
};

@page()
class ChecksManagement extends MultiStepComponentObject {
    constructor() {
        super('checksManagement', flowData);
    }

    /**
     * Acciones para el happy path por step
     */
    async HappyPathActions(Step) {
        switch (Step) {
            case 'stepAccount':
                break;
            case 'stepCheckData':
                await this.fillCheckData();
                break;
            default:
                logger.debug(`HappyPathActions is not implemented for step ${Step}`);
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'question icon':
                await this.dialogOperations.additionalElements.questionIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                /**
                 * By default we execute the basic modalElementValidation to also use the basic glomo-alert-manager validation process
                 */
                await super._modalElementValidation({item, value, ...args});
        }
    }
    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            // Common to Steps
            case 'header':
                await this.moleculeHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help icon':
                await this.helpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            //select account collapsed
            case 'collapsed account title':
                await this.multiStep.stepAccount.titleStepCollapsed.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'collapsed account alias':
                await this.multiStep.stepAccount.accountInfoAccName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'collapsed account number':
                await this.multiStep.stepAccount.accountInfoAccNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'collapsed account amount':
                await this.multiStep.stepAccount.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check data step title':
                await this.multiStep.stepCheckData.titleStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check data step description':
                await this.multiStep.stepCheckData.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change link':
                await this.multiStep.stepCheckData.changeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add check link':
                await this.multiStep.stepCheckData.addCheckButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check data info box':
                await this.multiStep.stepCheckData.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check title':
                await this.multiStep.stepCheckData.listData.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit icon':
                await this.multiStep.stepCheckData.listData.editButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'trash icon':
                await this.multiStep.stepCheckData.listData.deleteButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check number data':
                await (await this.multiStep.stepCheckData.listData.items.checkNumber.value()).waitForText(config.wait.M);
                break;
            case 'amount data':
                await (await this.multiStep.stepCheckData.listData.items.amount.value()).waitForText(config.wait.M);
                break;
            case 'collapsed check title':
                await this.multiStep.stepCheckData.collapsed.listData.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'collapsed check number data':
                await (await this.multiStep.stepCheckData.collapsed.listData.items.checkNumber.value()).waitForText(config.wait.M);
                break;
            case 'collapsed check amount data':
                await (await this.multiStep.stepCheckData.collapsed.listData.items.amount.value()).waitForText(config.wait.M);
                break;
            case 'disabled continue button':
                await this.multiStep.stepCheckData.continueButton.isDisabled();
                break;
            case 'active continue button':
                await this.multiStep.stepCheckData.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount title':
                await this.multiStep.stepSummary.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount data':
                await this.multiStep.stepSummary.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount information':
                await this.multiStep.stepSummary.totalAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary continue button':
                await this.multiStep.stepSummary.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new Error(`Error validating element "${item}"`);
        }
    }

    async openAddCheck() {
        await this.multiStep.stepCheckData.addCheckButton.waitForClickable({timeout: config.wait.M});
        await this.multiStep.stepCheckData.addCheckButton.click();
    }

    async openHelpScreen() {
        await this.helpIcon.waitForClickable({timeout: config.wait.M});
        await this.helpIcon.click();
    }

    async closeOperative() {
        await this.closeButton.waitForClickable({timeout: config.wait.M});
        await this.closeButton.click();
    }

    async fillCheckData() {
        await this.openAddCheck();
        // DO NOT COPY, THIS IS A TEMPORAL, BAD IMPLEMENTATION
        await navigation.checksManagement.checksManagementAddCheck.assert();
        await currentPage.completeData();
        await navigation.checksManagement.checksManagement.go({saveCheckData: true});
        this.setCurrentStep('stepCheckData');
    }

    async editCheck() {
        await this.multiStep.stepCheckData.listData.editButton.waitForClickable({timeout: config.wait.M});
        await this.multiStep.stepCheckData.listData.editButton.click();
    }

    async removeCheck() {
        await this.multiStep.stepCheckData.listData.deleteButton.waitForClickable({timeout: config.wait.M});
        await this.multiStep.stepCheckData.listData.deleteButton.click();
    }

    async checkRemovalConfirmation(isConfirmed) {
        await this.dialogOperations.confirmDialog({isConfirmed});
    }

    async isFilled() {
        await this.multiStep.stepCheckData.changeBtn.waitForVisible(config.wait.M, undefined, false);
    }

    async isNotFilled() {
        await this.multiStep.stepCheckData.addCheckButton.waitForDisplayed({timeout: config.wait.M});
    }

    async confirmSimulation() {
        await this.multiStep.stepSummary.confirm();
    }
    async fillOtp() {
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(12345678);
        await this.signConnector.confirmPassword();
    }
}

export default new ChecksManagement();
