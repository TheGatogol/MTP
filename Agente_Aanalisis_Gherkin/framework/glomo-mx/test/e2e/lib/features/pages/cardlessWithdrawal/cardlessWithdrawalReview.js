import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsAtomAmount from '../../components/cells-atom-amount';
import CellsAtomAmountSpherica from '../../components/cells-atom-amount-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

const headerSection = 'cells-successful-response section#header-section ';
const bodySection = 'cells-successful-response section#body-section ul.additional-info ';
class CardlessWithdrawalReview extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'CardlessWithdrawalReview',
            root: '#cells-template-cardlessWithdrawalReview[state="active"]',
            elements: {

                titlePage: 'cells-molecule-header div.main-container #titleZone',
                closeButton: 'cells-molecule-header div.right-container button#btnRight',
                buttonExit: '#cells-template-cardlessWithdrawalReview > cells-successful-response #primaryBtn',
                buttonHelp: '#cells-template-cardlessWithdrawalReview > cells-successful-response #undefined iron-icon',
                infoIcon: '[id="help-modal-qr-comerces"]',
                bulletsList: '[class="listItem__item"]',
                acceptButton: '#acceptButton',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements:{
                            subTitle: 'div.paragraph-template h2.title-left.margin-bottom-none',
                            bulletList: 'div.paragraph-template cells-lists .listItem',
                        }
                    }
                ],
                //Available withdrawal section
                title: `${headerSection} h2.title`,
                date: `${headerSection} p.subtitle cells-atom-date span#date`,
                amountTitle: `${headerSection} p.subtitle p.amount-description`,
                amount: CellsAtomAmount,
                amountLegend: `${headerSection} p.subtitle p.amount-description.italic`,
                qrLegend: `${headerSection} p.subtitle p.advice-pagraph`,
                qrTooltip: `${headerSection} p.subtitle p.advice-pagraph cells-atom-icon.icon-size-24`,
                qrButton: `${headerSection} article.button-link cells-st-button.#validate-qr-tapped`,
                divider: `${headerSection} article.button-link div.line-border`,
                codesLegend: `${headerSection} div.codes p.code-title`,
                codes: `${headerSection} div.codes ul.withdrawal-code-list`,
                expirationDateLegend: `${headerSection} article.expiration-date p.expiration-date_label`,
                expirationDate: `${headerSection} article.expiration-date cells-atom-date.expiration-date_date`,

                //Legal section
                originAccountTitle: `${bodySection} li[data-selector="cells-successful-response-origin-account"] div span.key`,
                originAccount: `${bodySection} li[data-selector="cells-successful-response-origin-account"] div span.value`,
                conceptTitle: `${bodySection} li[data-selector="glomo-cardless-withdrawal-step-input-selector"] div span.key`,
                concept: `${bodySection} li[data-selector="glomo-cardless-withdrawal-step-input-selector"]  div span.value`,
                operationTypeTitle: `${bodySection} li[data-selector="cells-funds-hiring-title-operation"] div span.key`,
                operationType: `${bodySection} li[data-selector="cells-funds-hiring-title-operation"] div span.value`,
                folioTitle: `${bodySection} li[data-selector="cells-transaction-detail-folio"] div span.key`,
                bbvaLegend: `${bodySection} li[data-selector="glomo-bbva"] div span.key`,
                message: `${bodySection} li cells-icon-message[data-selector="cells-successful-response-additional-info-message"]`,
                folio: 'ul[data-selector="cells-successful-response-header-code-list"]',
                atmsButton: 'cells-successful-response section#body-section cells-operations-list[data-selector="cells-successful-response-operations"] ul.list li[data-selector="atms"]',
                shareButton: 'cells-successful-response section#body-section cells-operations-list[data-selector="cells-successful-response-operations"] ul.list li[data-selector="share"]',

            },
            elementsSpherica: {
                titlePage: 'cells-molecule-header-spherica div.main-container #titleZone',
                closeButton: 'cells-molecule-header-spherica div.right-container button#btnRight',
                buttonExit: '#cells-template-cardlessWithdrawalReview > cells-successful-response-spherica #primaryBtn',
                buttonHelp: '#cells-template-cardlessWithdrawalReview > cells-successful-response-spherica #undefined iron-icon',
                infoIcon: 'cells-successful-response-spherica #body-section > section > p.advice-pagraph cells-atom-icon-spherica.icon-size-24',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            subTitle: '#modal > div > div.paragraph-template h2.title-left.margin-bottom-none',
                            bulletList: '#modal > div > div.paragraph-template > cells-lists-spherica ul[role="list"]',
                        }
                    }
                ],
                //Available withdrawal section
                title: '#header-section > h2',
                amountTitle: '#header-section > p.amount-description ',
                amount: CellsAtomAmountSpherica,
                qrLegend: 'cells-successful-response-spherica #body-section > section > p.advice-pagraph',
                qrButton: 'cells-successful-response-spherica section#body-section ul > li:nth-child(1) > button',
                codesLegend: 'cells-successful-response-spherica #body-section > div.codes.cardless-withdrawal > p',
                codes: 'cells-successful-response-spherica #body-section > div.codes.cardless-withdrawal > ul',
                //Legal section
                message: '#body-section > div.message > cells-icon-message-spherica',
                expirationDateLegend: '#body-section > ul > li:nth-child(1) > div > span.key',
                expirationDate: '#body-section > ul > li:nth-child(1) > div > cells-atom-date-spherica#date',
                conceptTitle: '#body-section > ul > li:nth-child(2) > div > span.key',
                concept: '#body-section > ul > li:nth-child(2) > div > span.value',
                originAccountTitle: '#body-section > ul > li:nth-child(3) > div.key-value-container > span.key',
                originAccount: '#body-section > ul > li:nth-child(3) > div.key-value-container > span.value',
                operationTypeTitle: '#body-section > ul > li:nth-child(4) > div > span.key',
                operationType: '#body-section > ul > li:nth-child(4) > div > span.value',
                folioTitle: '#body-section > ul > li:nth-child(5) > div > span.key',
                folio: '#body-section > ul > li:nth-child(5) > div > span.value',
                bbvaLegend: 'cells-successful-response-spherica section#body-section ul.additional-info li[data-selector="glomo-bbva"] div span.key',
                atmsButton: '#body-section > cells-operations-list-spherica.centered-items ul.list li[data-selector="atms"]',
            },
            requiredElements: [
                'title'
            ],
        });
    }
    async accessCommerce(){
        await this.infoIcon.waitForClickable({timeout: config.wait.M});
        await this.infoIcon.click();
    }
    async showHelpModal(){
        await this.buttonHelp.waitForClickable({timeout: config.wait.L, failOnError: false});
        await this.buttonHelp.click();
    }
    async leaveProcessWithExitButton(){
        await this.buttonExit.waitForClickable({timeout: config.wait.L});
        await this.buttonExit.click();
    }
    async leaveProcessWithCloseButton(){
        await this.closeButton.waitForClickable({timeout: config.wait.L});
        await this.closeButton.click();
    }
    async leaveProcess(option){
        switch(option.toLowerCase()) {
            case 'exit button':
                await this.leaveProcessWithExitButton();
                break;
            case 'exit':
                await this.leaveProcessWithCloseButton();
                break;
            default:
                logger.debug(`Option ${option} not valid` );
                break;
        }
    }
    async _screenValidation({item} = {}) {
        switch (item) {
            case 'accept button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bullets list':
                await this.bulletsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.titlePage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'codes':
                await this.codes.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'subtitle':
                await this.dialogOperations.additionalElements.subTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bulletlist':
                await this.dialogOperations.additionalElements.bulletList.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }
}
export default new CardlessWithdrawalReview();
