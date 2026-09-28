import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsTransactionDetail from '../../components/cells-transaction-detail';

@page()
class ChecksManagementDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-checksManagementDetail[state="active"]',
            elements: {
                header: 'cells-molecule-header h1#titleZone',
                backButton: 'cells-molecule-header button#btnLeft',
                infoBox: 'cells-icon-message.top-icon-message',
                data: 'div.transaction-info.transaction-info__group',
                cancelRelease:'cells-operations-list li.list__item[data-selector="error"] button.link',
                mainText: 'div.templates-wrapper p.paragraph-template-text',
                continueButton: 'glomo-alert-manager cells-st-button.btn.main.secondary.btn--l',
                returnText: 'glomo-alert-manager  cells-st-button.btn.link.tertiary.btn--l',
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

        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.checkDetail.transactionTitle.waitForDisplayed({timeout: config.wait.XL});
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
            case 'info box':
                await this.infoBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'data':
                await this.data.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main text':
                await this.mainText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'return text':
                await this.returnText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async cancelCheckRelease() {
        await this.cancelRelease.waitForDisplayed({timeout: config.wait.XL});
        await this.cancelRelease.click();
    }

    async goBack() {
        await this.backButton.waitForDisplayed({timeout: config.wait.M});
        await this.backButton.click();
    }

    async confirmsCancellation() {
        await this.continueButton.waitForDisplayed({timeout: config.wait.XL});
        await this.continueButton.click();
    }
}

export default new ChecksManagementDetail();
