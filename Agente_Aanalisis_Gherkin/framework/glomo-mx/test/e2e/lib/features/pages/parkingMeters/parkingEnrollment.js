import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica';
import BbvaHelpModal from '../../components/bbva-help-modal';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
@page()
class ParkingEnrollment extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parkingEnrollment[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: `${BbvaHeaderMain._baseRoot}#headerParkingEnrollment`,
                        },
                    }
                },
                dialogOperations: [GlomoAlertManager],
                enrollmentSteps: {
                    properties: { root: '[data-tag-name="bbva-multistep-parking-enrollment"]' },
                    onBoardingStep: {
                        properties: { root: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]#firstStepParkingEnrollment' },
                        imageIcon: '[data-tag-name="bbva-card-banner"]',
                        firstStepTitle: 'div.firstHeader [data-tag-name="bbva-header-category"]',
                        suppliersParking: '[data-tag-name="bbva-list-contact"][id="provider0"]',
                        contactSupplier: '[data-tag-name="bbva-notification-message"]',
                        contactSupplierBtn: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-link"]',
                        continueBtn: '[data-tag-name="bbva-panel-button-fixed"]#buttonFirstStep div.panel-button [data-tag-name="bbva-button-default"]'
                    },
                    consultOnBoardingBtn: '[data-tag-name="bbva-expandable-step"]#firstStepParkingEnrollment[completed] div.header [data-tag-name="bbva-link"]',
                    registerAccountStep: {
                        properties: { root: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]#secondStepParkingEnrollment' },
                        stepTitle: 'div.header',
                        numberAccount: '[data-tag-name="bbva-form-contact"] input',
                        nameAccount: '[data-tag-name="bbva-form-text"] input',
                        continueBtn: 'div.footerButtonStep [data-tag-name="bbva-button-default"]'
                    },
                    registerAccountBlock: '[data-tag-name="bbva-expandable-step"]#secondStepParkingEnrollment',
                    changeSecondStep: '[data-tag-name="bbva-expandable-step"]#secondStepParkingEnrollment[completed] div.header [data-tag-name="bbva-link"]',
                    termsStep: {
                        properties: { root: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]#thirdStep' },
                        stepTitle: 'div.header',
                        pdfLink: '[data-tag-name="bbva-list-file"]',
                        termsContinueBtn: 'div.footerButtonStep [data-tag-name="bbva-button-default"]#buttonTerms'
                    },
                    termsStepBlock: '[data-tag-name="bbva-expandable-step"]#thirdStep',
                    changeTermsStep: '[data-tag-name="bbva-expandable-step"]#thirdStep[completed] div.header',
                    addAccountBtn: 'div.panel [data-tag-name="bbva-button-default"]#lastButton'
                },
                modalInfo: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            imageType: '[data-tag-name="bbva-panel-info"]#modalParkingEnrollmentPanelInfor div.image',
                            descriptionSlotted: 'div [data-tag-name="bbva-text"] p'
                        }
                    }
                ],
                signConnector: CellsSignOperationModal
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMainSpherica,
                        args: {
                            root: '#headerParkingEnrollment',
                        },
                    }
                },
                dialogOperations: [GlomoAlertManagerSpherica],
                enrollmentSteps: {
                    properties: { root: '[data-tag-name="bbva-multistep-parking-enrollment-spherica"]',
                    },
                    imageIcon: '[data-tag-name="bbva-expandable-multistep"] div bbva-clip-microillustration',
                    suppliersParking: '[data-tag-name="bbva-expandable-multistep"] #listContact',
                    onBoardingStep: {
                        firstStepTitle: '#heading',
                        contactSupplierBtn: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                        continueBtn: '[data-tag-name="bbva-button-default"]#buttonFirstStep'
                    },
                    consultOnBoardingBtn: '[data-tag-name="bbva-expandable-step"]#firstStepParkingEnrollment[completed] div.header [data-tag-name="bbva-type-link"]',
                    registerAccountStep: {
                        numberAccount: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-attach"] input',
                        continueBtn: 'div.button-step [data-tag-name="bbva-button-default"]'
                    },
                    changeSecondStep: '[data-tag-name="bbva-expandable-step"]#secondStepParkingEnrollment[completed] div.header [data-tag-name="bbva-type-link"]',
                    termsStep: {
                        pdfLink: '[data-tag-name="bbva-list-file-spherica"]',
                        termsCheck: '[data-tag-name="bbva-form-checkbox"]',
                        termsContinueBtn: '#buttonTerms'
                    },
                    changeTermsStep: '.header #editButton',
                    addAccountBtn: 'div.confirm-step [data-tag-name="bbva-button-default"]#lastButton'
                },
                modalInfo: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            imageType: '[data-tag-name="bbva-type-icon"]',
                            descriptionSlotted: '[data-tag-name="bbva-type-text"]',
                            cancelButton: '[data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                signConnector: CellsSignOperationModalSpherica
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async finishEnrollment() {
        await this.enrollmentSteps.addAccountBtn.waitForDisplayed({timeout: config.wait.M});
        await (await this.enrollmentSteps.addAccountBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.continueWithOTP();
    }

    async continueWithOTP(){
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(32671741);
        await this.signConnector.confirmPassword();
    }

    async changeLinkStep() {
        if(this.isSpherica()){
            await ( await this.enrollmentSteps.changeSecondStep.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
            await ( await ( await this.enrollmentSteps.changeSecondStep.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
        } else {
            await this.enrollmentSteps.changeSecondStep.waitForDisplayed({timeout: config.wait.M});
            await (await this.enrollmentSteps.changeSecondStep.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async changeTermsStep() {
        if(this.isSpherica()){
            await this.enrollmentSteps.changeTermsStep.waitForAnimation({timeout: config.wait.M, interval: config.wait.XS});
            await (await ( await this.enrollmentSteps.changeTermsStep.elements()).value[4].waitForClickable({timeout: config.wait.L}));
            await ( await (this.enrollmentSteps.changeTermsStep.elements())).value[4].click();
        } else {
            await this.enrollmentSteps.changeTermsStep.waitForDisplayed({timeout: config.wait.M});
            await (await this.enrollmentSteps.changeTermsStep.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async goLinkAnAccount() {
        await this.enrollmentSteps.onBoardingStep.continueBtn.waitForAnimation({timeout: config.wait.M});
        await (await this.enrollmentSteps.onBoardingStep.continueBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async requestEnrollmentInfo() {
        if(this.isSpherica()){
            await (await (await this.enrollmentSteps.consultOnBoardingBtn.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
        } else {
            await (await this.enrollmentSteps.consultOnBoardingBtn.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async completeForm(infoAccount) {
        await this.goLinkAnAccount();
        await this.enrollmentSteps.registerAccountBlock.waitForEnabled({timeout: config.wait.M});
        await this.enrollmentSteps.registerAccountStep.numberAccount.setValue({value: infoAccount.number, slow: true});
        await this.enrollmentSteps.registerAccountStep.nameAccount.setValue({value: infoAccount.alias, slow: true});
        await (await this.enrollmentSteps.registerAccountStep.continueBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async completeEnrollment(infoAccount) {
        await this.completeForm(infoAccount);
        await this.enrollmentSteps.termsStepBlock.waitForEnabled({timeout: config.wait.M});
        await (await this.enrollmentSteps.termsStep.termsCheck.waitForClickable({timeout: config.wait.M})).click();
        await (await this.enrollmentSteps.termsStep.termsContinueBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async requestSupplierInfo() {
        await this.enrollmentSteps.onBoardingStep.contactSupplierBtn.scrollIntoView();
        await (await this.enrollmentSteps.onBoardingStep.contactSupplierBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'image onboarding':
                if(this.isSpherica()){
                    await this.enrollmentSteps.imageIcon.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.enrollmentSteps.onBoardingStep.imageIcon.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'first step title':
                await this.enrollmentSteps.onBoardingStep.firstStepTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'suppliers':
                if(this.isSpherica()){
                    await (await this.enrollmentSteps.suppliersParking.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.enrollmentSteps.suppliersParking.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'contact suppliers':
                await this.enrollmentSteps.onBoardingStep.contactSupplier.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue register button':
                await this.enrollmentSteps.onBoardingStep.continueBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second step title':
                await this.enrollmentSteps.registerAccountStep.stepTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'third step title':
                await this.enrollmentSteps.termsStep.stepTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link account step':
                await this.enrollmentSteps.registerAccountBlock.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'accept link account button':
                await this.enrollmentSteps.registerAccountStep.continueBtn.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'terms step':
                await this.enrollmentSteps.termsStepBlock.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'accept check':
                await this.enrollmentSteps.termsStep.termsCheck.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pdf link':
                await this.enrollmentSteps.termsStep.pdfLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms continue button':
                await this.enrollmentSteps.termsStep.termsContinueBtn.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'retry button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'informative image':
                await this.modalInfo.additionalElements.imageType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'informative description':
                await this.modalInfo.additionalElements.descriptionSlotted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'partner link':
                await this.modalInfo.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                if(this.isSpherica()) {
                    await this.modalInfo.additionalElements.cancelButton.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.modalInfo.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'icon image':
                await this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error title':
                await this.dialogOperations.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error text':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number field':
                await this.enrollmentSteps.registerAccountStep.numberAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name field':
                await this.enrollmentSteps.registerAccountStep.nameAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ParkingEnrollment();
