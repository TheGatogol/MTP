import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica.js';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';

@page()
class CreditBureauAuthScreen extends AbstractGlomoPage {

    constructor() {
        const creditBureauOfferPageDiv = '#step-credit-bureau-offer-page #checklistStepContainer > div:nth-child(2) > div >';
        const creditBureauOfferPageMain = '#step-credit-bureau-offer-page #checklistStepContainer > div:nth-child(2) > div > main >';
        super({
            root: '#cells-template-creditBureau[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            helpIcon: 'div.icon-container > cells-atom-icon',
                            imageHeader: 'div.icon-container > img'
                        }
                    }
                ],
                productImage: `${creditBureauOfferPageDiv} cells-image-text-amount-cover div > img`,
                mainTitle: `${creditBureauOfferPageDiv} cells-image-text-amount-cover div > h1`,
                mainDescription: `${creditBureauOfferPageDiv} cells-image-text-amount-cover div > p`,
                helpIcon: `${creditBureauOfferPageDiv} main > cells-atom-subheader > cells-atom-icon iron-icon`,
                authorizationLink: `${creditBureauOfferPageMain} section.file-list-section > cells-list-file div > div > div > p`,
                textConsultDocument: `${creditBureauOfferPageMain} p`,
                authorizationCheckbox: '#step-credit-bureau-offer-page #\\30',
                acceptButton: `${creditBureauOfferPageMain} cells-st-button > button`,
                exitButton: `${creditBureauOfferPageMain} .btn-call-me-back`
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            helpIcon: 'div.icon-container cells-atom-icon-spherica'
                        }
                    }
                ],
                productImage: `${creditBureauOfferPageDiv} cells-image-text-amount-cover-spherica div img`,
                mainTitle: `${creditBureauOfferPageDiv} cells-image-text-amount-cover-spherica div h1`,
                mainDescription: `${creditBureauOfferPageDiv} cells-image-text-amount-cover-spherica div p`,
                helpIcon: `${creditBureauOfferPageDiv} main cells-atom-subheader-spherica cells-atom-icon-spherica iron-icon`,
                authorizationLink: `${creditBureauOfferPageMain} section.file-list-section cells-list-file-spherica div.body p`,
                textConsultDocument: `${creditBureauOfferPageMain} p`,
                acceptButton: `${creditBureauOfferPageMain} div cells-st-button-spherica button`,
                exitButtonHeader: '#header-credit-bureau-offer-page .right-container #btnRight'
            },
            requiredElements: [
                'header',
                'authorizationCheckbox'
            ]
        });

    }

    async _screenValidation({item}) {
        let element;
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'product image':
                await this.productImage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'main title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'main description':
                await this.mainDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'help icon':
                await this.helpIcon.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'authorization link':
                await this.authorizationLink.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'text consult document':
                await this.textConsultDocument.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'authorization checkbox':
                await this.authorizationCheckbox.scrollIntoView();
                await this.authorizationCheckbox.waitForDisplayed({timeout: config.wait.M});
                await this.authorizationCheckbox.waitForAttribute({attribute: 'checked'});
                break;
            case 'accept button':
                await this.acceptButton.scrollIntoView();
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                element = this.isSpherica
                    ? this.exitButtonHeader
                    : this.exitButton;
                await element.scrollIntoView();
                await element.waitForDisplayed({ timeout: config.wait.XL });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        let valueSpherica;
        switch (item.toLowerCase()) {
            case 'help icon':
                await this.dialogOperations.additionalElements.helpIcon.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'hidden'
                });
                break;
            case 'image header':
                valueSpherica = this.isSpherica();
                await this.dialogOperations.additionalElements.imageHeader.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'hidden' || valueSpherica
                });
                break;
            default:
                /**
                 * By default we execute the basic modalElementValidation to also use the basic glomo-alert-manager validation process
                 */
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async openHelpModal() {
        await this.helpIcon.waitForClickable({timeout: config.wait.S});
        await this.helpIcon.click();
    }

    async openAuthorizationModal() {
        await this.authorizationLink.waitForClickable({timeout: config.wait.S});
        await this.authorizationLink.click();
    }

    async acceptCheckAuthorization() {
        await this.authorizationCheckbox.scrollIntoView();
        await this.authorizationCheckbox.waitForDisplayed({timeout: config.wait.M});
        await this.authorizationCheckbox.waitForAttribute({attribute: 'checked'});
    }

    async completeAuthorization() {
        await this.acceptCheckAuthorization();
        await this.acceptButton.scrollIntoView();
        await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
        await this.acceptButton.click();
    }

    async confirmCreditBureauOtp() {
        const {otp} = global.user;
        await this.fillOtp(otp);
    }

    async closeOperative() {
        const value = this.isSpherica();
        if(value) {
            await this.exitButtonHeader.waitForClickable({timeout: config.wait.M});
            await this.exitButtonHeader.click();
        } else {
            await this.exitButton.waitForClickable({timeout: config.wait.M});
            await this.exitButton.click();
        }
    }

}

export default new CreditBureauAuthScreen();
