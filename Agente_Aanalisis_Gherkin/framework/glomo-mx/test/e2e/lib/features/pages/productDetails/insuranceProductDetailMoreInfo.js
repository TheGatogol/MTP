import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';

@page()
class InsuranceProductDetailMoreInfo extends AbstractGlomoPage {
    constructor() {

        const infoList = 'cells-product-more-info-spherica .content .info-list';
        const selectorTitle = i => `${infoList} .section-title[data-selector=main-title-${i}]`;

        super({
            root: '#cells-template-insuranceMoreInfo[state="active"]',
            elements: {
                skeleton: '#skeletonContainer',
                back: 'button#btnLeft',
                title: 'h1#titleZone',

                // Fields
                mainTitle: selectorTitle(0),
                insuranceName: 'div.item-title-and-description.cells-product-more-info-product',
                policyNumber: 'div.item-title-and-description.cells-product-more-info-policy-number',
                certificateNumber: 'div.item-title-and-description.cells-product-more-info-certificate-number',
                seePolicyNumber: 'div.item-title-and-description.cells-product-more-info-policy',
                seePolicyLink: 'div.item-title-and-description.cells-product-more-info-policy .descriptive-detail .link',

                dueTitle: selectorTitle(1),
                startDate: 'div.item-title-and-description.cells-product-more-info-start-date',
                dueDate: 'div.item-title-and-description.cells-product-more-info-due-date',
                renewalType: 'div.item-title-and-description.cells-product-more-info-renewalType',

                participantsTitle: selectorTitle(2),
                participantsName: 'div.item-title-and-description.cells-product-more-info-participant-titular',

                costAndCommissionsTitle: selectorTitle(3),
                frequencyType: 'div.item-title-and-description.cells-product-more-info-payment-frequency-type',
                annualCost: 'div.item-title-and-description.glomo-insurances-detail-annual-cost',
                uniqueCost: 'div.item-title-and-description.glomo-insurances-detail-unique-cost',
                helpIconButton: 'cells-product-more-info-spherica cells-st-button-spherica button',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            helpIcon: '.paragraph-template .paragraph-icon cells-atom-icon',
                        }
                    }
                ],
                singOperationModal: CellsSignOperationModal
            },
            requiredElements: [
                'insuranceName'
            ],
        });
    }
    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'help icon':
                await this.dialogOperations.additionalElements.helpIcon.waitForDisplayed();
                break;
            default:
            /**
             * By default we execute the basic modalElementValidation to also use the basic glomo-alert-manager validation process
             */
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.title.waitForDisplayed();
                break;
            case 'back button':
                await this.back.waitForDisplayed();
                break;
            case 'main title':
                await this.mainTitle.waitForDisplayed();
                break;
            case 'insurance name':
                await this.insuranceName.waitForDisplayed();
                break;
            case 'policy number':
                await this.policyNumber.waitForDisplayed();
                break;
            case 'policy link':
                await this.seePolicyNumber.waitForDisplayed();
                break;
            case 'certificate number':
                await this.certificateNumber.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'title due date':
                await this.dueTitle.waitForDisplayed();
                break;
            case 'start date':
                await this.startDate.waitForDisplayed();
                break;
            case 'due date':
                await this.dueDate.waitForDisplayed();
                break;
            case 'renewal type':
                await this.renewalType.waitForDisplayed();
                break;
            case 'participants title':
                await this.participantsTitle.waitForDisplayed();
                break;
            case 'participants name':
                await this.participantsName.waitForDisplayed();
                break;
            case 'cost and commissions title':
                await this.costAndCommissionsTitle.waitForDisplayed();
                break;
            case 'frequency type':
                await this.frequencyType.waitForDisplayed();
                break;
            case 'annual cost':
                await this.annualCost.waitForDisplayed();
                break;
            case 'unique cost':
                await this.uniqueCost.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'help icon button':
                await this.helpIconButton.waitForDisplayed();
                break;
            case 'code sing text':
                await this.singOperationModal.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit sing button':
                await this.singOperationModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm sing button':
                await this.singOperationModal.smsContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel sing button':
                await this.singOperationModal.requestNewSmsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openHelpModal() {
        await this.helpIconButton.waitForEnabled({timeout: config.wait.L});
        await this.helpIconButton.scrollIntoView({block: 'start'});
        await this.helpIconButton.waitForAnimation({timeout: config.wait.L});
        await this.helpIconButton.click();
    }

    async seePolicy() {
        await this.seePolicyLink.waitForEnabled({timeout: config.wait.M});
        await this.seePolicyLink.click();
    }
}

export default new InsuranceProductDetailMoreInfo();
