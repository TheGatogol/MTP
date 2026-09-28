import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import CellsAtomAmountSpherica from '../../../components/cells-atom-amount-spherica';

import AbstractGlomoPage from '../../abstract-glomo-page';

const elementsInfoSuccess = {
    monthlyPaymentWithoutVat: 0,
    paymentLapse: 1,
    catPercentage: 2,
    anualInterest: 3,
    comission: 4,
    widthdrawCard: 5,
    depositAccount: 6,
    operationType: 8,
    transactionId: 10,
    issuingBank: 11,
    email: 12,
};

@page()
class EfiReviewPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-instantCashReview[state="active"]',
            elements: {
                header: CellsMoleculeHeaderSpherica,
                amountInputElement: {
                    isWithoutRoot: true,
                    component: {
                        ComponentClass: CellsAtomAmountSpherica,
                        args: {
                            root: 'cells-successful-response-spherica #header-section cells-atom-amount-spherica'
                        }
                    }
                },

                elementsSuccessInfo: '#body-section .otherInfo [data-selector="cells-successful-response-top-info-"]',
                shareButton: 'cells-successful-response-spherica #body-section cells-operations-list-spherica ul li button'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _getElementSuccess(index) {
        await this.waitForElementsExist(this.elementsSuccessInfo);
        const elementInfo = (await this.elementsSuccessInfo.elements()).value[index];
        await elementInfo.waitForDisplayed({timeout: config.wait.M});
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deposit amount':
                if(value!==''){
                    await this.amountInputElement.container.waitForText({amount: value});
                } else {
                    await this.amountInputElement.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'monthly payment':
                await this._getElementSuccess(elementsInfoSuccess.monthlyPaymentWithoutVat);
                break;
            case 'payment lapse':
                await this._getElementSuccess(elementsInfoSuccess.paymentLapse);
                break;
            case 'cat percentage':
                await this._getElementSuccess(elementsInfoSuccess.catPercentage);
                break;
            case 'anual interest':
                await this._getElementSuccess(elementsInfoSuccess.anualInterest);
                break;
            case 'comission':
                await this._getElementSuccess(elementsInfoSuccess.comission);
                break;
            case 'widthdraw card':
                await this._getElementSuccess(elementsInfoSuccess.widthdrawCard);
                break;
            case 'deposit account':
                await this._getElementSuccess(elementsInfoSuccess.depositAccount);
                break;
            case 'operation type':
                await this._getElementSuccess(elementsInfoSuccess.operationType);
                break;
            case 'transaction number':
                await this._getElementSuccess(elementsInfoSuccess.transactionId);
                break;
            case 'issuing bank':
                await this._getElementSuccess(elementsInfoSuccess.issuingBank);
                break;
            case 'email':
                await this._getElementSuccess(elementsInfoSuccess.email);
                break;
            case 'share button':
                await this.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new EfiReviewPage();
