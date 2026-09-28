import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('ocCarLoanDownPayment')
class OcCarLoanDownPayment extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanDownPayment[state="active"]',
            elements: {
                header: 'bbva-header-main #heading',
                exitBtn: 'bbva-header-main #btn-right-primary',
                icon: 'bbva-panel-info svg',
                title: 'bbva-panel-info h3',
                description: 'bbva-panel-info .description',
                indTitle: 'bbva-header-category',
                bulletPoints: 'bbva-aggregation-bullet-list',
                notifMsgIcon: 'bbva-notification-message svg',
                notifMsgText: 'bbva-notification-message .paragraph',
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
            case 'icon':
                await this.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'indications title':
                await this.indTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bullet points':
                await this.bulletPoints.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message icon':
                await this.notifMsgIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message text':
                await this.notifMsgText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await (await this.acceptBtn.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new OcCarLoanDownPayment();
