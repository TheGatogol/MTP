
import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('ocCarLoanAccountListSelection')
class OcCarLoanAccountListSelection extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanAccountListSelection[state="active"]',
            elements: {
                header: 'bbva-header-main #heading',
                exitBtn: 'bbva-header-main #btn-right-primary',
                accounts: '[data-tag-name="bbva-list-card"]',
                genericAccount: '[data-tag-name="bbva-list-card"][card-title="__ACCOUNT__"]',
            },
            requiredElements: [
                'accounts',
            ]
        });
    }

    async goBack(){
        await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectAccount(){
        const account = this.genericAccount.specifySelector({placeholder: '__ACCOUNT__', value: 'Cuenta de Ahorro'});
        await account.waitForClickable({timeout: config.wait.L});
        await account.click();
        await this.fillOtp('11111111');
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts':
                await this.accounts.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new OcCarLoanAccountListSelection();
