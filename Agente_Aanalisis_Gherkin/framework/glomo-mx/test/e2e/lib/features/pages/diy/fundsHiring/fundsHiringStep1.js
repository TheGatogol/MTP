import AbstractGlomoPage from '../../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('fundsHiringStep1')
class FundsHiringStep1 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep1',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                telephoneIcon: '#funds-hiring-header #btnRightSecondary',
                offerStartBtn: '#step-funds-hiring-offer #next-button',
                offerDescription: '#step-funds-hiring-offer',
                minInvestAmount: '#step-funds-hiring-offer',
                stickyCallMeBack: '#step-funds-hiring-offer #stepContainer .sticky-button, #step-funds-hiring-offer .sticky-button, #step-funds-hiring-offer #stickyButton',
                stickyButton: '#step-funds-hiring-offer #stepContainer .full cells-sticky-container-spherica cells-st-button-spherica'
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica'
            },
            requiredElements: [
                'offerDescription'
            ]
        });

    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'telephone icon':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'start process button':
                await this.offerStartBtn.scrollIntoView({block: 'start'});
                await this.offerStartBtn.waitForDisplayed({timeout: config.wait.XXL});
                break;
            case 'offer description':
                await this.offerDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'minimum investment amount':
                await this.minInvestAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'sticky button':
                if(value === 'call me') {
                    await this.stickyCallMeBack.waitForText({text:'Quiero que me llame un asesor', exactMatch:false});
                } else {
                    await this.stickyButton.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessToCallMeBack(access) {
        switch (access) {
            case 'link':
                await this.stickyCallMeBack.waitForClickable({timeout: config.wait.M});
                await this.stickyCallMeBack.click();
                break;
            case 'header':
                await this.telephoneIcon.waitForClickable({timeout: config.wait.L});
                await this.telephoneIcon.click();
                break;
            default:
                throw new Error(`The access '${access}' not found.`);
        }
    }

    async closeToolTipCallMeBack() {
        await this.toolTipButtonClose.waitForClickable({timeout: config.wait.L});
        await this.toolTipButtonClose.click({ useActions: true });
    }

    async waitForAnalytics() {
        await Commands.pause({time: config.wait.XS});
    }

    async startOffer() {
        await this.offerStartBtn.waitForClickable({timeout: config.wait.L});
        await this.offerStartBtn.click();
    }
}

export default new FundsHiringStep1();
