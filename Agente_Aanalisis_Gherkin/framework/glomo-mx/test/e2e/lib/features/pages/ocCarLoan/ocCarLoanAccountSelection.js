
import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('ocCarLoanAccountSelection')
class OcCarLoanAccountSelection extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanAccountSelection[state="active"]',
            elements: {
                header: 'bbva-header-main #heading',
                exitBtn: 'bbva-header-main #btn-right-primary',
                descTitle: '#descriptionTitle',
                descFirstHalf: 'bbva-header-category + bbva-text',
                descSecHalf: 'bbva-text + bbva-text',
                accountsTitle: '#accountsTitle',
                viewMoreBtn: '[data-tag-name="bbva-header-category"] bbva-type-link',
                accounts: '[data-tag-name="bbva-list-card"]',
                genericAccount: '[data-tag-name="bbva-list-card"][card-title="__ACCOUNT__"]',
                acceptBtn: 'bbva-button-default'
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async goBack(){
        await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async viewMoreAccounts(){
        await (await this.viewMoreBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectAccount(){
        const account = this.genericAccount.specifySelector({placeholder: '__ACCOUNT__', value: 'Cuenta de Ahorro'});
        await account.waitForClickable({timeout: config.wait.L});
        await account.click();
        await this.fillOtp('11111111');
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description title':
                await this.descTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description first half':
                if(value === 'one account'){
                    await this.descFirstHalf.waitForText({text: 'esta es la cuenta', exactMatch: false});
                } else {
                    await this.descFirstHalf.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'description second half':
                await this.descSecHalf.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts title':
                await this.accountsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view more button':
                await this.viewMoreBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts':
                if(value==='one account'){
                    await this.accounts.waitForAttribute({attribute: 'no-link'});
                } else {
                    await this.accounts.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'accept button':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new OcCarLoanAccountSelection();
