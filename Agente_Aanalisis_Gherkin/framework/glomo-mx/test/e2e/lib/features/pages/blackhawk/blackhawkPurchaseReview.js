import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class BlackhawkPurchaseReview extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blackhawkPurchaseReview[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                successReciept: {
                    properties: { root: 'cells-successful-response-spherica' },
                    successTitle: 'h2.title',
                    totalAmount: 'section#header-section cells-atom-amount-spherica.currency-xxxl',
                    cardImage: 'section#header-section .image-div div cells-atom-icon-spherica',
                    cardTitle: 'section#body-section ul.otherInfo li',
                    warningMessage: 'section#body-section .message cells-icon-message-spherica[type="warning"]',
                    buttonCardcode: 'section#body-section .message cells-icon-message-spherica[type="warning"] cells-st-button-spherica button',
                    informationMessage: 'section#body-section div.message cells-icon-message-spherica[type="warning"] .message-container',
                    shareBtn: 'section#body-section cells-operations-list-spherica ul li button.link',
                    exitBtn: 'section[data-selector="cells-successful-response-spherica-actions"] cells-st-button-spherica button#primaryBtn'
                },
                dialogOperations: {
                    component: {
                        ComponentClass: GlomoAlertManagerSpherica
                    }
                }
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
            requiredElements: [
                'header'
            ],
        });
    }

    async obtaincardcode() {
        await (await this.successReciept.buttonCardcode.waitForClickable({timeout: config.wait.M})).click();
    }

    async acceptMessageCode() {
        await (await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await (this.header.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'title':
                await (this.successReciept.successTitle.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'date':
                await (this.successReciept.operationdate.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'amount':
                await (this.successReciept.totalAmount.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'icon card':
                await (this.successReciept.cardImage.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'name card':
                await (this.successReciept.cardTitle.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'warning message':
                await (this.successReciept.warningMessage.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'card code button':
                await (this.successReciept.buttonCardcode.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'info message':
                await (this.successReciept.informationMessage.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'share button':
                await (this.successReciept.shareBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'accept button':
                await (this.successReciept.exitBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'modal header':
                await (this.dialogOperations.header.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'icon image':
                await (this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'error title':
                await (this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'error text':
                await (this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'retry button':
                await (this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'cancel button':
                await (this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BlackhawkPurchaseReview();
