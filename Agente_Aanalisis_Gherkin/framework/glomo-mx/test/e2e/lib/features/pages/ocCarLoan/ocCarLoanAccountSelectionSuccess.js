
import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('ocCarLoanAccountSelectionSuccess')
class OcCarLoanAccountSelectionSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanAccountSelectionSuccess[state="active"]',
            elements: {
                header: 'bbva-header-main #heading',
                exitBtn: 'bbva-header-main #btn-right-primary',
                successIcon: 'bbva-panel-info svg',
                titleText: 'bbva-panel-info .title',
                date: 'bbva-text p',
                accountTitle: 'bbva-divider + bbva-text span',
                account: 'bbva-text + bbva-text span',
                acceptBtn: 'bbva-button-default'
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async return(position = 'top'){
        switch(position){
            case 'top':
                await (await this.exitBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'bottom':
                await (await this.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The position "${position}" is unknown. Cannot be processed.`);
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success icon':
                await this.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title text':
                await this.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account title':
                await this.accountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                await this.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new OcCarLoanAccountSelectionSuccess();
