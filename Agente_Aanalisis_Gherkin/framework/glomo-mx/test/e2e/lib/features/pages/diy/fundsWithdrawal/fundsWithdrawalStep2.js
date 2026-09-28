import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsWithdrawalStep2 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsWithdrawalStep2',
            root: '#cells-template-fundsWithdrawal[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone',
                parcialWithdrawal: '#cells-step-select-operation-type .full div:nth-of-type(1) cells-key-values',
                totalWithdrawal: '#cells-step-select-operation-type .full div:nth-of-type(2) cells-key-values',
                labelSalesType: '#cells-step-select-operation-type #stepOperationType div div h2',
            },

            elementsSpherica: {
                header: 'cells-molecule-header-spherica #titleZone',
                parcialWithdrawal: 'cells-step-spherica#stepOperationType div.full div.several-operation:nth-of-type(1) cells-key-values-spherica',
                totalWithdrawal: 'cells-step-spherica#stepOperationType div.full div.several-operation:nth-of-type(2) cells-key-values-spherica',
                labelSalesType: 'cells-step-spherica#stepOperationType div div h2',
            },

            requiredElements: [
                'parcialWithdrawal'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sales type':
                await this.labelSalesType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'partial withdrawal button':
                await this.parcialWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total withdrawal button':
                await this.totalWithdrawal.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectOperation(operation) {
        const optionBtn = operation !== 'parcial' ? this.totalWithdrawal : this.parcialWithdrawal;
        await optionBtn.scrollIntoView();
        await optionBtn.waitForClickable({timeout: config.wait.M});
        await optionBtn.click();
    }
}

export default new FundsWithdrawalStep2();
