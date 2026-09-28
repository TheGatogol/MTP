import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class AccountTransactionDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-accountTransactionDetail[state="active"]',
            elements: {
                transactionDetail: {
                    properties: { root: '[data-tag-name="bbva-feature-transaction-detail-accounts-mx"]' },
                    header: '[data-tag-name="bbva-header-main"][left-icon-label="Volver"]',
                    transactionDescription: '#transaction-concept',
                    transactionImport: '#bbvaTypeAmount',
                    operationDate: '#transaction-date',
                    transactionInfo: '.transaction-info-container',
                    returnButton: '.transaction-info cells-operations-list [data-selector="custom"] .link',
                    reuseOperationButton: '[data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"][text="bbva-feature-transaction-detail-account-movement-frequency"]',
                    shareTransactionStandIn: '[data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-text"][text="bbva-feature-transaction-detail-account-detail-share"]',
                    movementDescriptionTitle: '#bbva-feature-transaction-detail-account-description .key',
                    movementDescriptionValue: '#bbva-feature-transaction-detail-account-description .value',
                    movementTypeTitle: '#bbva-feature-transaction-detail-account-type .key',
                    movementTypeValue: '#bbva-feature-transaction-detail-account-type .value',
                    operationHour: '#bbva-feature-transaction-detail-account-posted-hour',
                    movementAmountTitle: '#bbva-feature-transaction-detail-account-origin-amount .key',
                    movementAmountValue: '#bbva-feature-transaction-detail-account-origin-amount .value',
                    movementDateTitle: '#bbva-feature-transaction-detail-account-posted-date .key',
                    movementDateValue: '#bbva-feature-transaction-detail-account-posted-date .value',
                    associatedAccount: '#bbva-feature-transaction-detail-account-retirement-account',
                    effectiveMovementDateTitle: '#bbva-feature-transaction-detail-account-date .key',
                    effectiveMovementDateValue: '#bbva-feature-transaction-detail-account-date .value',

                    clarificationsButton: '[data-tag-name="bbva-button-row"] #buttons span:nth-child(1) [data-tag-name="bbva-button-action"]',
                    buttonRow: 'div.container-btn-row div bbva-button-row #buttons :nth-child(1) bbva-button-action div.label-container bbva-type-text',
                    notificationToast: 'bbva-notification-toast',
                    notEnoughBalanceModal: [
                        BbvaHelpModal,
                        {
                            additionalElements: {
                                description: '#helpModalContent [data-tag-name="bbva-type-text"]',
                            }
                        },
                    ],
                    modalInfo: BbvaHelpModal,
                    standIn: {
                        properties: { root: '#stand-in-modal' },
                        header:  '#helpModalHeader',
                        buttonRight: '#helpModalHeader #btn-close',
                        description:'#helpModalContent [data-tag-name="bbva-type-text"]',
                        title: '#helpModalTitle #title-text',
                    }
                },
            },
            requiredElements: [
                'transactionDetail.transactionDescription'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.transactionDetail.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transaction description':
                await this.transactionDetail.transactionDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'movement description title':
                await this.transactionDetail.movementDescriptionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement description value':
                await this.transactionDetail.movementDescriptionValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement type title':
                await this.transactionDetail.movementTypeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement type value':
                await this.transactionDetail.movementTypeValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation hour':
                await this.transactionDetail.operationHour.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement amount title':
                await this.transactionDetail.movementAmountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement amount value':
                await this.transactionDetail.movementAmountValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement date title':
                await this.transactionDetail.movementDateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement date value':
                await this.transactionDetail.movementDateValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated account':
                await this.transactionDetail.associatedAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement effective date title':
                await this.transactionDetail.effectiveMovementDateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement effective date value':
                await this.transactionDetail.effectiveMovementDateValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'transaction import':
                await this.transactionDetail.transactionImport.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation date':
                await this.transactionDetail.operationDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transaction info':
                await this.transactionDetail.transactionInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header modal':
                await this.transactionDetail.modalInfo.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button right modal':
                await this.transactionDetail.modalInfo.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description modal':
                await this.transactionDetail.modalInfo.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal':
                await this.transactionDetail.modalInfo.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.transactionDetail.shareTransactionStandIn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share voucher receipt link':
                await this.shareVoucherReceiptLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header standin modal':
                await this.transactionDetail.standIn.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button right standin modal':
                await this.transactionDetail.standIn.buttonRight.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description standin modal':
                await this.transactionDetail.standIn.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title standin modal':
                await this.transactionDetail.standIn.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header not enough balance':
                await this.transactionDetail.notEnoughBalanceModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close not enough balance':
                await this.transactionDetail.notEnoughBalanceModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title not enough balance':
                await this.transactionDetail.notEnoughBalanceModal.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description not enough balance':
                await this.transactionDetail.notEnoughBalanceModal.additionalElements.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change import button':
                await this.transactionDetail.notEnoughBalanceModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification toast':
                await this.transactionDetail.notificationToast.waitForAttribute({attribute: 'show', reverse: true, timeout: config.wait.M});
                break;
            case 'modal button close':
                await this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button accept':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button cancel':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal titles':
                await this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal descriptions':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal balance':
                await this.transactionDetail.notEnoughBalanceModal.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async firstOperative() {
        await this.transactionDetail.buttonRow.waitForClickable({timeout: config.wait.M});
        await this.transactionDetail.buttonRow.click();
    }

    async goToPayRefundsMoney() {
        await this.transactionDetail.returnButton.waitForClickable({timeout: config.wait.M});
        await this.transactionDetail.returnButton.click();
    }

    async goToReuseOperation() {
        await this.transactionDetail.reuseOperationButton.waitForDisplayed({timeout: config.wait.M});
        await this.transactionDetail.reuseOperationButton.waitForClickable({timeout: config.wait.M});
        await this.transactionDetail.reuseOperationButton.click();
    }

    async shareTransaction() {
        await this.transactionDetail.shareTransactionStandIn.waitForClickable({timeout: config.wait.L});
        await this.transactionDetail.shareTransactionStandIn.click();
    }

    async accessClarificationsCare() {
        await this.transactionDetail.clarificationsButton.waitForDisplayed({timeout: config.wait.M});
        await this.transactionDetail.clarificationsButton.click();
    }

    async shareVoucherReceiptWithServiceError() {
        for(let i = 0; i < 3; i++) {
            await this.notEnoughBalanceAcceptRetry();
        }
    }

    async notEnoughBalanceAcceptRetry() {
        await (await (await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }
}

export default new AccountTransactionDetail();
