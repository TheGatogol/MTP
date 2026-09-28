import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class ShowAndHideProducts extends AbstractGlomoPage {
    constructor() {
        super({
            root: 'cells-template-coronita[state="active"]',
            rootSpherica: 'cells-template-coronita-spherica[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                account: '.mainly-account',
                patrimonialContractSwitch: 'div.products > div:nth-child(2) > div.family-title > cells-switch',
                patrimonialContractProductSwitch: 'div.products > div:nth-child(2) > div:nth-child(7) .switcher',
                cardSwitch: 'div.products > div:nth-child(2) > div.family-title > cells-switch',
                investments: 'div.products > div:nth-child(4) > div.family-title',
                firstInvesmentsSwitch: 'div.products > div:nth-child(4) > div:nth-child(3) > cells-switch',
                secondInvesmentsSwitch: 'div.products > div:nth-child(4) > div:nth-child(6) > cells-switch',
                lastInvesmentSwitch: 'div.products > div:nth-child(4) > div:nth-child(9) > cells-switch',
                investmentfundsSwitchuno: 'div.products > div:nth-child(1) > div.mainly-account > cells-switch',
                investmentfundsSwitchdos: 'div.products > div:nth-child(2) > div.list-item > cells-switch',
                ctahorroSwitch: 'div.products > div:nth-child(1) > div:nth-child(7) > cells-switch',

                dialogOperations: [
                    GlomoAlertManager,
                    {
                        paragraphElements: {
                            text: 'div p.paragraph-template-text',
                        },
                        additionalElements: {
                            titleModal: '#modal h2',
                            btnAccept: 'cells-st-button button#acceptButton',
                            textInfo: '#modal div.icon-message-container cells-icon-message',
                        }
                    }
                ]
            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                account: '.main-item',
                patrimonialContractSwitch: 'div.products > div:nth-child(2) > div.family-title > cells-switch-spherica',
                cardSwitch: 'div.products > div:nth-child(2) > div.family-title > cells-switch-spherica',
                firstInvesmentsSwitch: 'div.products > div:nth-child(4) > div:nth-child(3) > cells-switch-spherica',
                secondInvesmentsSwitch: 'div.products > div:nth-child(4) > div:nth-child(6) > cells-switch-spherica',
                lastInvesmentSwitch: 'div.products > div:nth-child(4) > div:nth-child(9) > cells-switch-spherica',
                investmentfundsSwitchuno: 'div.products > div:nth-child(1) > div.mainly-account > cells-switch-spherica',
                investmentfundsSwitchdos: 'div.products-container div.not-main-item cells-switch-spherica',
                ctahorroSwitch: 'div.products > div:nth-child(2) > div.products-container > div > cells-switch-spherica',
                patrimonialContractProductSwitch: 'div.products > div:nth-child(2) > div.products-container > div > cells-switch-spherica',
                dialogOperations:[
                    GlomoAlertManagerSpherica,
                    {
                        paragraphElements: {
                            text: 'div p.paragraph-template-text',
                        },
                        additionalElements: {
                            titleModal: 'h1[heading][slot="heading"], #modal h2',
                            btnAccept: 'cells-st-button-spherica button#acceptButton',
                            textInfo: '#modal div.icon-message-container cells-icon-message-spherica',
                        }
                    }
                ],
            },

            requiredElements: [
                'header'
            ]
        });

    }

    async closeModalFirstTime() {
        await this.dialogOperations.confirmDialog();
    }

    async goToHelpSection() {
        await this.header.actionRight();
    }

    async goBack() {
        await this.header.actionLeft();
    }

    async turnOffAllInvesmentProducts() {
        await this.firstInvesmentsSwitch.waitForClickable({timeout: config.wait.M});
        await this.firstInvesmentsSwitch.scrollIntoView();
        await this.firstInvesmentsSwitch.click();
        await this.firstInvesmentsSwitch.waitForAttribute({
            attribute: 'aria-checked',
            value: 'false',
            timeout: config.wait.M
        });
        await this.secondInvesmentsSwitch.waitForClickable({timeout: config.wait.M});
        await this.secondInvesmentsSwitch.click();
        await this.secondInvesmentsSwitch.waitForAttribute({
            attribute: 'aria-checked',
            value: 'false',
            timeout: config.wait.M
        });
        await this.lastInvesmentSwitch.waitForClickable({timeout: config.wait.M});
        await this.lastInvesmentSwitch.click();
        await this.lastInvesmentSwitch.waitForAttribute({
            attribute: 'aria-checked',
            value: 'false',
            timeout: config.wait.M
        });
    }

    async turnOnCreditCard() {
        await this.firstInvesmentsSwitch.waitForClickable({timeout: config.wait.M});
        await this.firstInvesmentsSwitch.scrollIntoView();
        await this.firstInvesmentsSwitch.click();
    }

    async turnoffcategorycard() {
        await this.cardSwitch.waitForClickable({timeout: config.wait.M});
        await this.cardSwitch.scrollIntoView();
        await this.cardSwitch.click();
    }

    async turnoffsavingsaccountproduct() {
        await this.ctahorroSwitch.waitForClickable({timeout: config.wait.M});
        await this.ctahorroSwitch.scrollIntoView();
        await this.ctahorroSwitch.click();
    }

    async turnontheCardcategory() {
        await this.cardSwitch.waitForClickable({timeout: config.wait.M});
        await this.cardSwitch.scrollIntoView();
        await this.cardSwitch.click();
    }

    async turnonthesavingsAccountproduct() {
        await this.ctahorroSwitch.waitForClickable({timeout: config.wait.M});
        await this.ctahorroSwitch.scrollIntoView();
        await this.ctahorroSwitch.click();
    }

    async shutdownseveralProductsCategory() {
        await this.investmentfundsSwitchdos.waitForClickable({timeout: config.wait.M});
        await this.investmentfundsSwitchdos.scrollIntoView();
        await this.investmentfundsSwitchdos.click();
    }

    async cancelssinglePatrimonialContract() {
        await this.patrimonialContractProductSwitch.waitForClickable({timeout: config.wait.M});
        await this.patrimonialContractProductSwitch.scrollIntoView();
        await this.patrimonialContractProductSwitch.click();
        await this.dialogOperations.additionalElements.btnAccept.waitForClickable({timeout: config.wait.M});
        await this.dialogOperations.additionalElements.btnAccept.click();
    }

    async turnsOffallthePatrimonialContractcategory() {
        await this.patrimonialContractSwitch.waitForClickable({timeout: config.wait.M});
        await this.patrimonialContractSwitch.scrollIntoView();
        await this.patrimonialContractSwitch.click();
        await this.dialogOperations.additionalElements.btnAccept.waitForClickable({timeout: config.wait.M});
        await this.dialogOperations.additionalElements.btnAccept.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'notifications':
                await this.notifications.waitForDisplayed();
                break;
            case 'operations configuration':
                await this.configuracionOperaciones.waitForDisplayed();
                break;
            case 'security settings':
                await this.ajustesSeguridad.waitForDisplayed();
                break;
            case 'button accept':
                await this.dialogOperations.additionalElements.btnAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.dialogOperations.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text info':
                await this.dialogOperations.additionalElements.textInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view several product':
                await this.account.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'view several products in each category':
                await this.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main account disabled button':
                await this.account.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }
    }
}

export default new ShowAndHideProducts();
