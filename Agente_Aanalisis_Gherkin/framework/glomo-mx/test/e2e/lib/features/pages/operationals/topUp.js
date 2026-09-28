import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class TopUp extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-topUp[state="active"]',
            elements: {
                header: 'cells-molecule-header-spherica',
                mobileTopUp: 'glomo-button-list-spherica cells-st-button-spherica',
                giftCards: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.top-up-register-btn-card-title',
                headerExitButton: 'cells-molecule-header-spherica #btnRight',
                rechargePhone: '.button-list.top-up-mobile-top-up-btn-title ',
                rechargeTagsBtn: 'glomo-button-list-spherica button.top-up-register-btn-register-title',
                parkingMeters: 'glomo-button-list-spherica cells-st-button-spherica button.top-up-register-btn-parking-title'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async accessToOperative() {
        await (await this.mobileTopUp.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async accessToOperativeGiftCards() {
        await (await this.giftCards.waitForClickable({timeout: config.wait.M})).click();
    }

    async accessToOperativeParkingMeters() {
        await (await this.parkingMeters.waitForClickable({timeout: config.wait.M})).click();
        await this.waitSpinnerVeil();
    }

    async waitSpinnerVeil() {
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.L
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case  'header exit button':
                await this.headerExitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recharge tags button':
                await this.rechargeTagsBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recharge phone button':
                await this.rechargePhone.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'gift cards':
                await this.giftCards.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new TopUp();
