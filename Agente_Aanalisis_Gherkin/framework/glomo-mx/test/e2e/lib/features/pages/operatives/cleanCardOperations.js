import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound } from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

class CleanCardOperations extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cleanCardOperations[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    },
                },
                dialogOperations: {
                    component: {
                        ComponentClass: GlomoAlertManager
                    }
                },
                scanButton: '.clean-card-container cells-st-button.secondary button',
                moreInformationButton: '.recommendation-message cells-st-button.transparent button',
                cardName: '.nip-container span.card-title',
                cardImage: 'cells-card-cover-info #image',
                panNumber: 'cells-card-cover-info .data .number',
                expirationDate: 'cells-card-cover-info .data .expiration-date',
                dynamicNipLabel: 'p.card-text-label:not([hidden])',
                dynamicNipValue: '.pin-container .pin-text',
                seeAgainButton: ' .clean-card-container:nth-of-type(2) cells-st-button.secondary button',
                processorManager: 'glomo-qr-processor-manager',
                btnReturn: 'cells-template-qrReader cells-molecule-header #btnLeft',
                btnClose: 'cells-molecule-header #btnRight',
                iconCard: 'glomo-qr-processor section div.container cells-shap-info-page',
                moreInformationLink:'glomo-qr-processor section div.container cells-icon-message cells-st-button button',
                activateCardMessage:'glomo-qr-processor section div.container cells-icon-message',
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica,
                    },
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            heroImageFull: '#modal div.main-container div.icon-container',
                            heroImageIcon: '#modal div.paragraph-template cells-atom-icon-spherica',
                            titleModal: '#modal h1',
                            acceptBtn: '#modal #modal #closeButton ',
                            descriptionModal: '#modal div.content-container div',
                            messageTitle: '#modal div.paragraph-template h2',
                        }
                    }
                ],
                scanButton: '.clean-card-container cells-st-button-spherica.default button',
                moreInformationButton: '.recommendation-message cells-st-button-spherica.transparent button',
                cardImage: 'cells-card-cover-info-spherica #image',
                panNumber: 'cells-card-cover-info-spherica .data .number',
                expirationDate: 'cells-card-cover-info-spherica .data .expiration-date',
                dynamicNipLabel: 'p.card-text-label',
                dynamicNipValue: '#timer',
                seeAgainButton: ' .clean-card-container:nth-of-type(2) cells-st-button-spherica.default button',
                processorManager: 'glomo-qr-processor-manager',
                btnReturn: 'cells-template-qrReader cells-molecule-header-spherica #btnLeft',
                btnClose: 'cells-molecule-header-spherica #btnRight',
                iconCard: 'glomo-qr-processor-spherica section div cells-shap-info-page-spherica',
                moreInformationLink:'glomo-qr-processor-spherica section div.container cells-icon-message-spherica cells-st-button-spherica button',
                activateCardMessage:'glomo-qr-processor-spherica section div.container cells-icon-message-spherica',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async handleQRConnectorBbva(data) {
        await this.processorManager.execute({
            script: data => this.handleQRCodeData(data),
            args: [data]
        });
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS});
    }

    async moreInformation() {
        await this.moreInformationButton.waitForClickable();
        await this.moreInformationButton.click();
    }

    async closeProcess() {
        await this.btnClose.waitForClickable();
        await this.btnClose.click();
    }

    async scanReader() {
        await (await this.scanButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async closeModal() {
        this.isSpherica() ? await this.dialogOperations.additionalElements.acceptBtn.click()
            : await this.dialogOperations.confirmDialog({isConfirmed: true});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async viewPinAgain() {
        await this.seeAgainButton.waitForClickable({timeout: config.wait.XL});
        await this.seeAgainButton.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card name':
                await this.cardName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card image':
                await this.cardImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pan number':
                await this.panNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expiration date':
                await this.expirationDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dynamic nip label':
                await this.dynamicNipLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dynamic nip value':
                await this.dynamicNipValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case'icon card':
                await this.iconCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case'more information link':
                await this.moreInformationLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scan button':
                await this.scanButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message activate':
                await this.activateCardMessage.waitForDisplayed({timeout: config.wait.M, reverse: this.isSpherica()});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeSearch() {
        await this.header.waitForDisplayed({isBtnRight: true});
        await this.header.actionRight();
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'hero image full':
                await this.dialogOperations.additionalElements.heroImageFull.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hero image icon':
                await this.dialogOperations.additionalElements.heroImageIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal':
                await this.dialogOperations.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message title':
                if (this.isSpherica()) await this.dialogOperations.additionalElements.messageTitle.waitForDisplayed({timeout: config.wait.M});
                else await this.dialogOperations.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description modal':
                await this.dialogOperations.additionalElements.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async closeScreen(){
        await this.dialogOperations.confirmDialog();
    }

    async returnTheCardActivation(){
        await this.header.actionLeft();
    }
}

export default new CleanCardOperations();
