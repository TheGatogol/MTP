import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class ParkingRechargeSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parkingRechargeSuccess[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                successReceipt: {
                    properties: { root: 'cells-successful-response' },
                    successTitle: 'section h2.title',
                    operationDate: 'section#header-section p cells-atom-date',
                    totalAmount: 'section#header-section cells-atom-amount.charge-amount.amount-huge-decimals',
                    feesMessage: 'section#header-section div.fees-container',
                    iconImage: 'section#body-section cells-contact-avatar',
                    rechargeDetail: 'section#body-section ul.otherInfo',
                    infoMessage: 'section#body-section div.message cells-icon-message',
                    shareBtn: 'section#body-section cells-operations-list ul li button',
                    exitBtn: 'section[data-selector="cells-successful-response-actions"] cells-st-button button#primaryBtn'
                },
                dialogOperations: [GlomoAlertManager]
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.successReceipt.successTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.successReceipt.operationDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recharge amount':
                await this.successReceipt.totalAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fees message':
                await this.successReceipt.feesMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'partner icon':
                await this.successReceipt.iconImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recharge information':
                await this.successReceipt.rechargeDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email information':
                await this.successReceipt.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.successReceipt.shareBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.successReceipt.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon image':
                await this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error title':
                await this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error text':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ParkingRechargeSuccess();
