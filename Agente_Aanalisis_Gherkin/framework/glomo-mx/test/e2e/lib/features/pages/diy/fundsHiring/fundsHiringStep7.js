import AbstractGlomoPage from '../../abstract-glomo-page';
import {Commands, Element, ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringStep7 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep7',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                checkListItems: '#step-funds-hiring-checklist-contract cells-checkbox-button',
                checkListAcceptButton: '#step-funds-hiring-checklist-contract cells-st-button.secondary',
                telephoneIcon: '#funds-hiring-header #btnRightSecondary',
                stickyCallMeBack: '#step-funds-hiring-offer #stepContainer .sticky-button'
            },
            elementsSpherica: {
                checkListItems: '#step-funds-hiring-checklist-contract cells-checkbox-button-spherica',
                checkListAcceptButton: '#step-funds-hiring-checklist-contract cells-st-button-spherica.primary'
            },
            requiredElements: [
                'checkListItems'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'check list':
                await this.checkListItems.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptTermsAndConditions() {
        await this.checkListItems.waitForDisplayed({timeout: config.wait.M});
        await this.checkListItems.scrollIntoView({block: 'start'});
        await Commands.pause({time: config.wait.S});
        const checkList = await (new Element({
            selector: this.checkListItems,
            _container: this,
        })).elements();
        for (const itemSelector of checkList.value) {
            const checkbox = new Element({
                selector: itemSelector,
                _container: this,
            });
            await checkbox.click();
        }
        await this.checkListAcceptButton.scrollIntoView({block: 'start'});
        await this.checkListAcceptButton.waitForClickable({timeout: config.wait.S});
        await this.checkListAcceptButton.click();
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
}

export default new FundsHiringStep7();
