import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsWithdrawalStep5 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsWithdrawalStep5',
            root: '#cells-template-fundsWithdrawal[state="active"]',
            elements: {
            },
            requiredElements: [
                'signModal'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'otp modal':
                await this.signModal.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmWithdrawal(otp = '11111111') {
        await this.fillOtp(otp);
    }
}

export default new FundsWithdrawalStep5();
