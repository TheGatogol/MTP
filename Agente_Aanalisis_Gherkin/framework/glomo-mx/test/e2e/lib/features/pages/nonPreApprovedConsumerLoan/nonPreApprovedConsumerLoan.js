import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class NonPreApprovedConsumerLoan extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'NonPreApprovedConsumerLoan',
            root: '#cells-template-nonPreApprovedConsumerLoan[state="active"]',
            elements: {
                header: CellsMoleculeHeaderSpherica,
                inputAmount: 'glomo-step-offer-page-spherica #stepContainer #scroll-region .main cells-validate-amount-input-spherica',
                detailOfferStep: 'glomo-step-offer-page-spherica #main div cells-lists-spherica',
                continueButton: 'glomo-step-offer-page-spherica #footer  div  cells-st-button-spherica  button',
                helpBtn: 'glomo-step-offer-page-spherica #main [data-select=__SELECT__] div.subheader-wrapper cells-atom-subheader-spherica cells-atom-icon-spherica',
                helpModalHeader: 'cells-modal-help-spherica cells-alert-box-spherica cells-bottom-modal-spherica h1',
                helpModalIcon: 'cells-modal-help-spherica cells-alert-box-spherica > cells-atom-icon-spherica iron-icon',
                helpModalUnderstandBtn: 'cells-modal-help-spherica cells-alert-box-spherica #acceptButton',
                helpModalMessageTitle: 'cells-modal-help-spherica cells-alert-box-spherica h2.subtitle',
                firstHelpModalParagraph: 'cells-modal-help-spherica cells-alert-box-spherica cells-text-description-spherica:nth-of-type(1)',
                secondHelpModalParagraph: 'cells-modal-help-spherica cells-alert-box-spherica cells-text-description-spherica:nth-of-type(2)',
                thirdHelpModalParagraph: 'cells-modal-help-spherica cells-alert-box-spherica cells-text-description-spherica:nth-of-type(3)',
                fourthHelpModalParagraph: 'cells-modal-help-spherica cells-alert-box-spherica cells-text-description-spherica:nth-of-type(4)',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        paragraphElements: {
                            firstParagraph: 'div [data-selector="paragraph-template-text"]:not([style="display: none;"])',
                            secondParagraph: 'div [data-selector="paragraph-template-text"]:not([style="display: none;"])',
                            leftItem: 'cells-alert-box-spherica.text-align-left',
                        },
                        additionalElements: {
                            locationBranch: 'cells-molecule-link-icon-spherica',
                            heroImage: 'div.main-container img',
                            modalMessageTitle: 'cells-alert-box-spherica cells-bottom-modal-spherica h2.subtitle'
                        },
                    }
                ],
                alertManager: GlomoAlertManagerSpherica
            },
            requiredElements: [
                'header',
            ]
        });

    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'modal header':
                await this.dialogOperations.elementValidation({item: 'header'});
                break;
            case 'modal title':
                await this.dialogOperations.elementValidation({item: 'title'});
                break;
            case 'modal message':
                await this.dialogOperations.elementValidation({item: 'main text'});
                break;
            case 'modal location branch button':
                await this.dialogOperations.additionalElements.locationBranch.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal image':
                await this.dialogOperations.additionalElements.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon':
                await this.dialogOperations.elementValidation({item: 'hero image'});
                break;
            case 'modal understand button':
                await this.dialogOperations.elementValidation({item: 'accept button'});
                break;
            case 'first modal paragraph':
                await this.dialogOperations.paragraphElements.firstParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second modal paragraph': 
                await this.dialogOperations.paragraphElements.secondParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal left paragraph':
                await this.dialogOperations.additionalElements.leftItem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal message title':
                await this.dialogOperations.additionalElements.modalMessageTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }
    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'detail offer step':
                await this.detailOfferStep.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'help modal header':
                await this.helpModalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal icon':
                await this.helpModalIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal understand button':
                await this.helpModalUnderstandBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal message title':
                await this.helpModalMessageTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first help modal message':
                await this.firstHelpModalParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second help modal message':
                await this.secondHelpModalParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'third help modal message':
                await this.thirdHelpModalParagraph.waitForDisplayed({timeout: config.wait.M    });
                break;
            case 'fourth help modal message':
                await this.fourthHelpModalParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async hireOffer() {
        await this.continueButton.waitForClickable({timeout: config.wait.XL});
        await this.continueButton.click();
    }

    async openLifeInsuranceHelpModal() {
        await (await this.helpBtn.specifySelector({placeholder: '__SELECT__', value: 'non-preapproved-consumer-loan-interest-cost'})
            .waitForDisplayed({timeout: config.wait.XL})).click();
    }

    async openTaxHelpModal() {
        await (await this.helpBtn.specifySelector({placeholder: '__SELECT__', value: 'non-preapproved-consumer-loan-cost'})
            .waitForDisplayed({timeout: config.wait.XL})).click();
    }

    async selectInputAmpunt() {
        await (await this.inputAmount.waitForClickable({timeout: config.wait.S})).click();
    }
}

export default new NonPreApprovedConsumerLoan();
