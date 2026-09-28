import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class CarLoanSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-carLoanSuccessPage[state="active"]',
            elements: {
                header: {
                    exitBtn: 'bbva-header-main[data-select="app__header"] #btn-right-primary',
                    title: 'bbva-header-main[data-select="app__header"] #heading'
                },
                banner: {
                    icon: 'bbva-panel-info svg',
                    title: 'bbva-panel-info .title'
                },
                date: 'bbva-text[data-select="app__main"]',
                content: {
                    ammount: 'bbva-aggregation-simple-list:nth-child(6) [data-tag-name="bbva-list-simple"]:nth-child(2)',
                    carType: 'bbva-aggregation-simple-list:nth-child(6) [data-tag-name="bbva-list-simple"]:nth-child(4)',
                    term: 'bbva-aggregation-simple-list:nth-child(6) [data-tag-name="bbva-list-simple"]:nth-child(8)',
                    mensualPayment: 'bbva-aggregation-simple-list:nth-child(6) [data-tag-name="bbva-list-simple"]:nth-child(4)',
                    interestRate: 'bbva-aggregation-simple-list:nth-child(8) [data-tag-name="bbva-list-simple"]:nth-child(2)',
                    commisionForOpperture: 'bbva-aggregation-simple-list:nth-child(8) [data-tag-name="bbva-list-simple"]:nth-child(4)',
                    cat: 'bbva-aggregation-simple-list:nth-child(8) [data-tag-name="bbva-list-simple"]:nth-child(6)',
                    folio: 'bbva-aggregation-simple-list:nth-child(10)'
                },
                notification: {
                    icon: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-icon"]',
                    text: '[data-tag-name="bbva-notification-message"] .paragraph',
                    phone: '[data-tag-name="bbva-notification-message"] .description'
                },
                mailSection: {
                    text: 'bbva-list-definition-data:first-of-type .valueData',
                    mail: 'bbva-list-definition-data .key'
                },
                extraInfo: 'bbva-list-definition-data:last-of-type .list',
                shareBtn: '[data-tag-name="bbva-button-action"] [data-tag-name="bbva-icon"]',
                acceptBtn: 'bbva-button-default',
            },
            requiredElements: [
                'header',
                'banner'
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.header.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit button':
                await this.header.exitBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'banner icon':
                await this.banner.icon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'banner title':
                await this.banner.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'ammount':
                await this.content.ammount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'car type':
                await this.content.carType.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'term':
                await this.content.term.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'mensual payment':
                await this.content.mensualPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'interest rate':
                await this.content.interestRate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'commision for opperture':
                await this.content.commisionForOpperture.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cat':
                await this.content.cat.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'folio':
                await this.acceptBtn.scrollIntoView();
                await this.content.folio.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'notification icon':
                await this.notification.icon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'notification text':
                await this.notification.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'notification phone':
                await this.notification.phone.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'mail text':
                await this.mailSection.text.waitForDisplayed({timeout: config.wait.L, reverse: value === 'doesnt have mail'});
                break;
            case 'mail':
                await this.mailSection.mail.waitForDisplayed({timeout: config.wait.L, reverse: value === 'doesnt have mail'});
                break;
            case 'extra info':
                await this.extraInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'accept button':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessToShareReceipt() {
        await this.shareBtn.scrollIntoView();
        await this.shareBtn.waitForDisplayed({timeout: config.wait.L});
        await (await this.shareBtn.waitForClickable({timeout: config.wait.L}))
            .click();
    }
}

export default new CarLoanSuccess();
