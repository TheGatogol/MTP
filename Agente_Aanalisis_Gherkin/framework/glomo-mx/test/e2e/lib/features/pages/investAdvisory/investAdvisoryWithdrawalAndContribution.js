import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('InvestAdvisoryWithdrawalAndContribution')
class InvestAdvisoryWithdrawalAndContribution extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-investAdvisoryContributionAndWithdrawal[state="active"]',
            elements: {
                properties: {
                    root: '[data-tag-name="bbva-feature-investment-withdrawal-and-contribution"]'
                },
                mainPage: '[data-tag-name="bbva-transition-container"]#multistep',
                buySellHeader: '[data-tag-name="bbva-header-main"]#multistep-header #heading [data-tag-name="bbva-type-text"]#text',
                closeButton: '#multistep-header #btn-close',
                multiStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-multistep"]'
                    },
                    contributionAmountStep: {
                        properties: {
                            root: '[data-tag-name="bbva-expandable-step"]#step-3'
                        },
                        amountToBuy: 'div.header',
                        buyLabel: '[data-tag-name="bbva-type-text"].distribution-title-bottom',
                        inputContribution: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] input',
                        amountErrorMessage: '[data-tag-name="bbva-form-amount"] .message-error.notification',
                        notificationMessage: '[data-tag-name="bbva-notification-message"]',
                        confirmButton: '#contribution-input-button',
                        editAmount: '#editButton'
                    },
                    contributionDistributionStep: {
                        properties: {
                            root: '[data-tag-name="bbva-expandable-step"]#step-4'
                        },
                        confirmButton: '[data-tag-name="bbva-button-default"]#contribution-distribution-button'
                    },
                    withdrawalTypeStep: {
                        properties: {
                            root: '[data-tag-name="bbva-expandable-step"]#step-3'
                        },
                        sellTypeHeader: 'div.header',
                        totalWithdrawal: '#Total.withdrawal-type-text',
                        partialWithdrawal: '#Parcial.withdrawal-type-text',
                        notificationMessage: '[data-tag-name="bbva-notification-message"]',
                        editAmount: '#editButton'
                    },
                    withdrawalAmountStep: {
                        properties: {
                            root: '[data-tag-name="bbva-expandable-step"]#step-4'
                        },
                        sellHeader: '#heading',
                        inputWithdrawal: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] input',
                        amountErrorMessage: '[data-tag-name="bbva-form-amount"] .message-error.notification',
                        notificationMessage: '[data-tag-name="bbva-notification-message"]',
                        confirmButton: '[data-tag-name="bbva-button-default"]#withdrawal-input-button',
                        editAmount: '#editButton'
                    },
                    withdrawalTotalAmount: '[data-tag-name="bbva-expandable-step"]#step-6 [data-tag-name="bbva-button-default"]',
                    withdrawalDistributionStep: {
                        properties: {
                            root: '[data-tag-name="bbva-expandable-step"]#step-5'
                        },
                        confirmButton: '[data-tag-name="bbva-button-default"]#withdrawal-distribution-button'
                    },
                    confirmOperation: 'div.wrapper [data-tag-name="bbva-button-default"]'
                },
                successReceipt: {
                    properties: {
                        root: '[data-tag-name="investment-withdrawal-and-contribution-status"]'
                    },
                    operationHeader: '[data-tag-name="bbva-header-main"] #heading [data-tag-name="bbva-type-text"]#text',
                    closeReceipt: '[data-tag-name="bbva-header-main"] .header-main #btn-close',
                    successIcon: '[data-tag-name="bbva-clip-box-item"]',
                    pendingIcon: '[data-tag-name="bbva-clip-microillustration"][microillustration="pending"]',
                    purchaseSellLabel: 'div#status div.panel-info [data-tag-name="bbva-type-text"].title:nth-child(2)',
                    amount: '[data-tag-name="bbva-type-amount"][amount="5000"]',
                    sellAmount: '[data-tag-name="bbva-type-amount"][amount="500"]',
                    sellTotalAmount: '[data-tag-name="bbva-type-amount"][amount="1754.01"]',
                    detailCategory: 'div#status div.panel-info [data-tag-name="bbva-header-category"].header-category:nth-child(9)',
                    operationType: '#status div.panel-info div.object-text div.status-container div.panel-padding-status div.simple-list-margin:nth-child(3) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    contractNumberLabel: '#status div.panel-info div.object-text div.status-container div.panel-padding-status div.simple-list-margin:nth-child(4) [data-tag-name="bbva-type-text"]:nth-child(1)',
                    purchaseContractNumber: '#status div.panel-info div.object-text div.status-container div.panel-padding-status div.simple-list-margin:nth-child(4) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    purchaseOperationFolio: '#status div.panel-info div.object-text div.status-container div.panel-padding-status div.simple-list-margin:nth-child(5) [data-tag-name="bbva-type-text"]:nth-child(1)',
                    purchaseOperationFolioNumber: '#status div.panel-info div.object-text div.status-container div.panel-padding-status div.simple-list-margin:nth-child(5) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    distributionCategory: 'div#status div.panel-info [data-tag-name="bbva-header-category"].header-category:nth-child(13)',
                    fundName: '#status div.panel-info div.simple-list-margin:nth-child(14) [data-tag-name="bbva-type-text"]:nth-child(1)',
                    fundPercentage: '#status div.panel-info div.simple-list-margin:nth-child(14) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    distributionFlow: '#status div.panel-info div.simple-list-margin:nth-child(15) [data-tag-name="bbva-type-text"]:nth-child(1)',
                    distributionFlowPercentage: '#status div.panel-info div.simple-list-margin:nth-child(15) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    distributionGrowth: '#status div.panel-info div.simple-list-margin:nth-child(16) [data-tag-name="bbva-type-text"]:nth-child(1)',
                    distributionGrowthPercentage: '#status div.panel-info div.simple-list-margin:nth-child(16) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    notificationMessage: '[data-tag-name="bbva-notification-message"]',
                    shareButton: '[data-tag-name="bbva-button-row"]'
                },
                investErrorModal: [BbvaHelpModal, {
                    modifiers: '[visible]',
                    additionalElements: {
                        icon: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                        title: 'div [data-tag-name="bbva-type-text"][font-weight="500"][size="L"]',
                        message: 'div [data-tag-name="bbva-type-text"]:nth-child(2)[font-weight="350"]',
                        notificationMessage: 'div [data-tag-name="bbva-notification-message"]',
                        understandButton: '.modal-footer [data-tag-name="bbva-button-default"]'
                    }
                }],
                exitModal: [BbvaHelpModal, {
                    modifiers: '.exit-modal',
                    additionalElements: {
                        exitButton: 'div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]',
                        returnButton: 'div.modal-footer div.slot-footer [data-tag-name="bbva-type-link"]'
                    }
                }]
            },
            elementsSpherica: {
                closeButton: '#multistep-header #btn-menu',
                successReceipt: {
                    purchaseSellLabel: 'div#status div.panel-info [data-tag-name="bbva-type-text"][size="2XL"]',
                    detailCategory: 'div#status div.panel-info [data-tag-name="bbva-header-category"]',
                    purchaseOperationFolio: '#status div.panel-info div.simple-list:nth-child(4) [data-tag-name="bbva-type-text"]',
                    purchaseOperationFolioNumber: '#status div.panel-info div.simple-list:nth-child(4) [data-tag-name="bbva-type-text"]:nth-child(2)',
                    distributionCategory: 'div#status div.panel-info [data-tag-name="bbva-header-category"].header-category',
                    fundPercentage: '#distribution div.panel-padding-status div.simple-list-margin [data-tag-name="bbva-type-text"][size="M"]',
                    fundName: '#distribution div.panel-padding-status div.simple-list-margin [data-tag-name="bbva-type-text"][size="S"]',
                    distributionFlow: '#distribution div.panel-padding-status div.simple-list-margin:nth-child(1) [data-tag-name="bbva-type-text"][size="S"]',
                    distributionFlowPercentage: '#distribution div.panel-padding-status div.simple-list-margin:nth-child(1) [data-tag-name="bbva-type-text"][size="M"]',
                    distributionGrowth: '#distribution div.panel-padding-status div.simple-list-margin:nth-child(2) [data-tag-name="bbva-type-text"][size="S"]',
                    distributionGrowthPercentage: '#distribution div.panel-padding-status div.simple-list-margin:nth-child(2) [data-tag-name="bbva-type-text"][size="M"]',
                    pendingIcon: '.icon-clock',
                    closeReceipt: '[data-tag-name="bbva-header-main"] #btn-menu',
                },
                investErrorModal: [BbvaHelpModal, {
                    additionalElements: {
                        title: 'div [data-tag-name="bbva-type-text"][size="L"]',
                        message: 'div [data-tag-name="bbva-type-text"][size="S"]',
                    }
                }],
            },
            requiredElements: [
                'mainPage'
            ],
        });
    }

    async setAmountContribution(value = 5000) {
        await (await (await this.multiStep.contributionAmountStep.inputContribution.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .setValue({value: value});
        if (value === '.') {
            await this.multiStep.contributionAmountStep.inputContribution.clearValue();
        }
    }

    async confirmAmount() {
        await (await (await this.multiStep.contributionAmountStep.confirmButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async confirmDistribution() {
        await (await (await this.multiStep.contributionDistributionStep.confirmButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async confirmOperation() {
        await (await (await this.multiStep.confirmOperation.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async selectPartialWithdrawal() {
        await (await (await this.multiStep.withdrawalTypeStep.partialWithdrawal.waitForDisplayed({timeout: config.wait.XL}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async selectTotalWithdrawal() {
        await (await (await this.multiStep.withdrawalTypeStep.totalWithdrawal.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async setAmountWithdrawal(value = 5000) {
        await (await (await this.multiStep.withdrawalAmountStep.inputWithdrawal.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .setValue({value: value});
        if (value === '.') {
            await this.multiStep.withdrawalAmountStep.inputWithdrawal.clearValue();
        }
    }

    async confirmWithdrawal(type) {
        if(type === 'total') {
            await (await (await this.multiStep.withdrawalTotalAmount.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        } else {
            await (await (await this.multiStep.withdrawalAmountStep.confirmButton.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
    }

    async confirmWithdrawalDistribution() {
        if (!this.isSpherica()) {
            await this.multiStep.withdrawalDistributionStep.confirmButton.waitForAnimation({timeout: config.wait.M});
        }
        await (await (await this.multiStep.withdrawalDistributionStep.confirmButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async editAmountStep() {
        if (this.isSpherica()) {
            await this.multiStep.contributionAmountStep.__root.scrollIntoView();
            await this.waitForElementsExist(this.multiStep.contributionAmountStep.editAmount);
            const editLink = (await this.multiStep.contributionAmountStep.editAmount.elements()).value[0];
            await (await editLink.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
        else {
            await (await (await (await (await this.multiStep.contributionAmountStep.editAmount.waitForAnimation({timeout: config.wait.M}))
                .scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
    }

    async setAmountToBuy() {
        await this.setAmountContribution();
        await this.confirmAmount();
    }

    async fillPurchaseSteps(origin, edition = false) {
        await this.setAmountToBuy();
        if(origin === 'summary') {
            await this.confirmDistribution();
        }
        if(edition) {
            await this.editAmountStep();
        }
    }

    async fillWithdrawalSteps(complete = true, amount = 500) {
        await this.setAmountToSell(amount);
        await this.confirmWithdrawal();
        if(complete) {
            await this.confirmWithdrawalDistribution();
        }
    }

    async performFundSell(type='purchase', complete = true) {
        if(type === 'purchase') {
            await this.fillPurchaseSteps('summary');
        }
        else if(type.includes('total')) {
            await this.selectTotalWithdrawal();
            await this.confirmWithdrawal('total');
        } else {
            await this.fillWithdrawalSteps();
        }
        await this.confirmOperation();
        if(complete) {
            await this.fillOtp('11111111');
        }
    }

    async leavePage(page) {
        await (await (await this.closeButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        if(page === 'withdrawal') {
            await (await (await this.exitModal.additionalElements.exitButton.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
    }

    async setAmountToSell(amount) {
        await this.selectPartialWithdrawal();
        await this.setAmountWithdrawal(amount);
    }

    async selectsOperative() {
        const btn = this.successReceipt.shareButton;
        await btn.waitForClickable({ timeout: config.wait.S });
        await btn.click();
    }

    async editFromStep(step) {
        if(step === 'amount multistep') {
            await this.setAmountToSell(500);
            await this.confirmWithdrawal();
        } else {
            await this.fillWithdrawalSteps();
        }
        switch(step.toLowerCase()) {
            case 'amount':
            case 'amount multistep':
                if(this.isSpherica()) {
                    await this.multiStep.withdrawalAmountStep.editAmount.waitForAnimation({timeout: config.wait.M});
                    const editAmount = (await this.multiStep.withdrawalAmountStep.editAmount.elements()).value[0];
                    await (await (await (await editAmount.waitForAnimation({timeout: config.wait.M}))
                        .waitForDisplayed({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M}))
                        .click();
                } else {
                    await (await (await (await this.multiStep.withdrawalAmountStep.editAmount.waitForAnimation({timeout: config.wait.M}))
                        .waitForDisplayed({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M}))
                        .click();
                }
                break;
            case 'type':
                if(this.isSpherica()) {
                    const editLink = (await this.multiStep.withdrawalTypeStep.editAmount.elements()).value[0];
                    await (await (await (await editLink.waitForAnimation({timeout: config.wait.M}))
                        .waitForDisplayed({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M}))
                        .click();
                } else {
                    await (await (await (await this.multiStep.withdrawalTypeStep.editAmount.waitForAnimation({timeout: config.wait.M}))
                        .waitForDisplayed({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M}))
                        .click();
                }
                break;
            default:
                throw new Error(`${step} is not a valid step`);
        }
    }

    async closeReceipt() {
        await (await (await this.successReceipt.closeReceipt.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async _screenValidation({item} = {}) {
        switch(item.toLowerCase()) {
            case 'buy header':
                await this.buySellHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount to buy label':
                await this.multiStep.contributionAmountStep.amountToBuy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'buy label':
                await this.multiStep.contributionAmountStep.buyLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'buy input':
                await this.multiStep.contributionAmountStep.inputContribution.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'buy notification message':
                await this.multiStep.contributionAmountStep.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'buy confirm button':
                await this.multiStep.contributionAmountStep.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sell header':
                await this.buySellHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sell type header':
                await this.multiStep.withdrawalTypeStep.sellTypeHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total withdrawal':
                await this.multiStep.withdrawalTypeStep.totalWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'partial withdrawal':
                await this.multiStep.withdrawalTypeStep.partialWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sell notification message':
                await this.multiStep.withdrawalTypeStep.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation header':
                await this.successReceipt.operationHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success icon':
                await this.successReceipt.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.successReceipt.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail category':
                await this.successReceipt.detailCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation type':
                await this.successReceipt.operationType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number label':
                await this.successReceipt.contractNumberLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase contract number':
                await this.successReceipt.purchaseContractNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase operation folio':
                await this.successReceipt.purchaseOperationFolio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase operation folio number':
                await this.successReceipt.purchaseOperationFolioNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'distribution category':
            case 'sell distribution category':
                await this.successReceipt.distributionCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'distribution capital':
            case 'liquidity fund':
                await this.successReceipt.fundName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'distribution capital percentage':
            case 'liquidity fund percentage':
                await this.successReceipt.fundPercentage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'distribution flow':
                await this.successReceipt.distributionFlow.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'distribution flow percentage':
                await this.successReceipt.distributionFlowPercentage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'distribution growth':
                await this.successReceipt.distributionGrowth.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'distribution growth percentage':
                await this.successReceipt.distributionGrowthPercentage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.successReceipt.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.successReceipt.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pending icon':
                await this.successReceipt.pendingIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contribution amount confirm button':
                await this.multiStep.contributionAmountStep.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount error message':
                await this.multiStep.contributionAmountStep.amountErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal amount error message':
                await this.multiStep.withdrawalAmountStep.amountErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest error modal icon':
                await this.investErrorModal.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest error modal title':
                await this.investErrorModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest error modal message':
                await this.investErrorModal.additionalElements.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest error modal notification message':
                await this.investErrorModal.additionalElements.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest error modal understand button':
                await this.investErrorModal.additionalElements.understandButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit amount header':
                await this.multiStep.withdrawalAmountStep.sellHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit amount withdrawal':
                await this.multiStep.withdrawalAmountStep.inputWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit amount notification message':
                await this.multiStep.withdrawalAmountStep.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit amount confirm button':
            case 'withdrawal confirm button':
                await this.multiStep.withdrawalAmountStep.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'in process sell':
            case 'success purchase':
            case 'success sell':
            case 'in process purchase':
                await this.successReceipt.purchaseSellLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sell amount':
                await this.successReceipt.sellAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sell total amount':
                await this.successReceipt.sellTotalAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InvestAdvisoryWithdrawalAndContribution();
