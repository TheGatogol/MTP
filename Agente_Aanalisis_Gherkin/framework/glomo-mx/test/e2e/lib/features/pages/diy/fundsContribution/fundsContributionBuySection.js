import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHeaderMain from '../../../components/bbva-header-main';

@page()
class FundsContributionBuy extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-fundTransactionFundsContribution[state="active"]',
            elements: {
                fundsModal: [BbvaHeaderMain, {
                    additionalElements: {
                        closeButton: '#btn-closee'
                    }
                }],
                amountToBuy:'.modal-content bbva-form-input [inputmode="decimal"]',
                amountBuy:'#amount-div',
                deleteAmount:'.clear',
                errorAmountMessage:'.form-input-div .message.error',
                buyOption:'.button-div [data-tag-name="bbva-button-default"]',
                header:'#amount-div',
                modalBtn:'.transition-container.dynamic-height .modal-main .modal-footer bbva-button-default',
                successProcess:{
                    buyProcess:'#investment-text',
                    iconSuccess:'[data-tag-name="bbva-clip-box-item"]',
                    shareButton:'#buttons div.icon-container bbva-type-icon',
                    amountSuccess:'#amount-investment'
                }
            },
            requiredElements: [
                'amountToBuy'
            ]
        });
    }

    async cancelCloseSection(){
        await this.waitForElementsExist(this.modalBtn, config.wait.M);
        await (await this.modalBtn.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
        await (await this.modalBtn.elements()).value[1].click();
    }

    async closeBuy() {
        await this.fundsModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
        await this.fundsModal.additionalElements.closeButton.click();
    }

    async editBuyAmount(){
        await this.deleteAmount.waitForDisplayed({timeout: config.wait.M});
        await this.deleteAmount.click();
        await this.amountOption('500');
    }

    async amountOption(amount){
        await this.amountToBuy.waitForEnabled({timeout: config.wait.M});
        await this.amountToBuy.setValue({value:amount});
        await this.amountBuy.waitForDisplayed({timeout: config.wait.M});
        await this.amountBuy.click();
    }

    async confirmToken(otp) {
        await this.fillOtp(otp);
    }

    async confirmBuy() {
        await this.buyOption.waitForEnabled({timeout: config.wait.M});
        await this.buyOption.click();
        await this.confirmToken('11111111');
    }

    async confirmClose() {
        await this.waitForElementsExist(this.modalBtn, config.wait.M);
        await (await this.modalBtn.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.modalBtn.elements()).value[0].click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.scrollIntoView({ behavior: 'smooth' });
                await this.header.waitForDisplayed({timeout: config.wait.M });
                break;
            case 'reported amount':
                await this.amountToBuy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification amount':
                await this.errorAmountMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon buy':
                await this.successProcess.iconSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount success':
                await this.successProcess.amountSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.successProcess.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text buy':
                await this.successProcess.buyProcess.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new FundsContributionBuy();
