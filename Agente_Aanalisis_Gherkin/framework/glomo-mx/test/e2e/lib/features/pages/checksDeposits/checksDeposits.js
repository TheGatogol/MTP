import MultiStepComponentObject from '../multiSteps/multiStepComponentObject';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsStepProductSelector from '../../components/cells-step-product-selector';
import CellsStepCheckData from '../../components/cells-step-select-as-link';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

const flowData = {
    name: 'checksDeposits',
    root: '#cells-template-checksDeposits[state="active"]',
    elements: {
        header: {
            component: {
                ComponentClass: CellsMoleculeHeader
            }
        },
        multiStep: {
            stepAccount: {
                component: {
                    ComponentClass: CellsStepProductSelector
                }
            },
            stepCheckData: {
                component: {
                    ComponentClass: CellsStepCheckData
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
    },
    requiredElements: [
        'header'
    ]
};
@page('checsDeposits')
class ChecksDeposits extends MultiStepComponentObject {
    constructor() {
        super('checksDeposits', flowData);
    }

    /**
     * Happy path actions
     */
    HappyPathActions(Step) {
        switch (Step) {
            case 'stepAccount':
            case 'stepCheckData':
                break;
            default:
                logger.debug(`HappyPathActions is not implemented for step ${Step}`);
        }
    }

    async goToCheckAggregator() {
        await this.multiStep.stepCheckData.addCheckButton.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.stepCheckData.addCheckButton.click();
    }

    async openHelpScreen() {
        await this.header.secondaryAction();
    }

    /**
     * Through this function and the modal-specific step, we will be able to validate our modal.
     * By default, this function uses the elementValidation function from glomo-alert-manager
     *
     * Screen specific implementations or terminology of our modal can be implemented here,
     * using the default option for the glomo-alert-manager default validation function
     * @param {object} [options] Options passed as columns on step
     */
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
            case 'header':
                await this.header.operationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help icon':
                await this.header.faqsBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            //account step
            case 'destination title':
                await this.multiStep.stepAccount.titleStepCollapsed.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account alias':
                await this.multiStep.stepAccount.accountInfoAccName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account number':
                await this.multiStep.stepAccount.accountInfoAccNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account amount':
                await this.multiStep.stepAccount.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            //check data step
            case 'add check title':
                await this.multiStep.stepCheckData.titleStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add check description':
                await this.multiStep.stepCheckData.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add check link':
                await this.multiStep.stepCheckData.addCheckButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add check info box':
                await this.multiStep.stepCheckData.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled continue button':
                await this.multiStep.stepCheckData.continueButton.waitForDisabled({timeout: config.wait.M, reverse: true});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }

    }

}

export default new ChecksDeposits();
