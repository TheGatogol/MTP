import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsTransactionDetail from '../../components/cells-transaction-detail';

@page()
class ChecksDepositsDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-checksDepositsDetail[state="active"]',
            elements: {
                header: 'cells-molecule-header h1#titleZone',
                backButton: 'cells-molecule-header button#btnLeft',
                checkDetail: {
                    component: {
                        ComponentClass: CellsTransactionDetail,
                    }
                }
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item, value}) {
        const reverseWaitForVisible = value === 'not visible';

        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.checkDetail.transactionTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.checkDetail.transactionMainAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'status':
                if (value.toLowerCase() === 'charged') {
                    await this.checkDetail.transactionStatusSuccess.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.checkDetail.transactionStatusError.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'date and time':
                await this.checkDetail.transactionDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share icon':
                await this.checkDetail.transactionShareLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation type title':
                await this.checkDetail.getTransactionInfoItemKey('glomo-check-detail-operation-type').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation type description':
                await this.checkDetail.getTransactionInfoItemValue('glomo-check-detail-operation-type').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check number title':
                await this.checkDetail.getTransactionInfoItemKey('glomo-check-detail-folio').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check number description':
                await this.checkDetail.getTransactionInfoItemValue('glomo-check-detail-folio').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check’s band title':
                await this.checkDetail.getTransactionInfoItemKey('glomo-check-detail-number').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check’s band description':
                await this.checkDetail.getTransactionInfoItemValue('glomo-check-detail-number').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount title':
                await this.checkDetail.getTransactionInfoItemKey('glomo-check-detail-amount').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount description':
                await this.checkDetail.getTransactionInfoItemValue('glomo-check-detail-amount').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date title':
                await this.checkDetail.getTransactionInfoItemKey('glomo-check-detail-operation-date').waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'date description':
                await this.checkDetail.getTransactionInfoItemValue('glomo-check-detail-operation-date').waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'time title':
                await this.checkDetail.getTransactionInfoItemKey('glomo-check-detail-operation-hour').waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'time description':
                await this.checkDetail.getTransactionInfoItemValue('glomo-check-detail-operation-hour').waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'account number title':
                await this.checkDetail.getTransactionInfoItemKey('glomo-check-detail-account').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account number description':
                await this.checkDetail.getTransactionInfoItemValue('glomo-check-detail-account').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number title':
                await this.checkDetail.getTransactionInfoItemKey('glomo-check-detail-operation-number').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number description':
                await this.checkDetail.getTransactionInfoItemValue('glomo-check-detail-operation-number').waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBack() {
        await this.backButton.waitForDisplayed({timeout: config.wait.L});
        await this.backButton.click();
    }
}

export default new ChecksDepositsDetail();
