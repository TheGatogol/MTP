import AbstractGlomoPage from '../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica.js';

@page('cardTransactionServicingScheduledDonations')
class CardTransactionServicingScheduledDonations extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardTransactionServicingScheduledDonations[state="active"]',
            elementsSpherica:{
                onboardingScreen: {
                    properties: {
                        root: '#offer[data-tag-name="bbva-transition-container"]'
                    },
                    header: '.modal-header .button-1 .header #text',
                    backButton: '.modal-header .button-1 .header-icons.left-group #btn-back',
                    offerTitle: '[slot="slot-content"] .offer-container [data-tag-name="bbva-type-text"].offer-title',
                    offerDescription: '[slot="slot-content"] .offer-container [data-tag-name="bbva-type-text"].offer-description',
                    offerButton: '[slot="slot-content"] .button-container [data-tag-name="bbva-button-default"]',
                },
                tokenModal: CellsSignOperationModalSpherica,
                headerMultistep:{
                    properties: {
                        root: '#multistep-modal [class="transition-container"]',
                    },
                    header: '.modal-header [data-tag-name="bbva-header-main"] #heading.heading-wrapper',
                    buttonLeft: '.modal-header [data-tag-name="bbva-header-main"] .header-icons.right-group',
                },
                modalExit: {
                    properties: {
                        root: '#exitOperationModal',
                    },
                    buttonExit: '.footer-button[text="Salir"]',
                    buttonContinue: '.footer-button.link',
                },
                destinyStep: {
                    properties: {
                        root: '#multistep-modal [data-tag-name="bbva-expandable-multistep"] #step-1',
                    },
                    summary: '.summary',
                    clipBox: '.summary [data-tag-name="bbva-clip-box"]',
                    title: '.summary .foundation-title',
                },
                originStep: {
                    properties: {
                        root: '#multistep-modal [data-tag-name="bbva-expandable-multistep"] #step-2',
                    },
                    modifyButton: '#editButton',
                    summary: '.completed-content',
                    content: {
                        properties: {
                            root: '.content [data-tag-name="account-step"]',
                        },
                        title: '#account-list-header',
                        accountList: '.account-list-container',
                        buttonConfirm: '[data-tag-name="bbva-button-default"]',
                        showAll: '#account-list-header .options-right [data-tag-name="bbva-type-link"]',
                        listAccounts: '.account-list-container '
                    }
                },
                amountStep: {
                    properties: {
                        root: '#multistep-modal [data-tag-name="bbva-expandable-multistep"] #step-3',
                    },
                    header: '.header #heading',
                    modifyButton: '#editButton',
                    summary: '.summary',
                    content: {
                        properties: {
                            root: '.content [data-tag-name="amount-step"]',
                        },
                        buttonGroup: '#amountButtons',
                        secondButon: '#amountButtons [value="secondValue"]',
                        inputField: '[data-tag-name="bbva-form-amount"] input',
                        messageError: '.message.error',
                        buttonContinue: '.action',
                    }
                },
                confirmStep: {
                    properties: {
                        root: '[data-tag-name="card-transaction-servicing-scheduled-donations-multistep"] #multistep-modal .content [data-tag-name="bbva-expandable-multistep"] .confirm-step',
                    },
                    amount: '[data-tag-name="bbva-type-amount"]',
                    confirmButton: '.button',
                },
                otpScreen:{

                },
                receipt: {
                    properties: {
                        root: '#receipt-modal',
                    },
                    amountDonation: '.container-success [data-tag-name="bbva-type-amount"]',
                    voucherDonation: '.list-info-container',
                    shareButton: '[data-tag-name="bbva-button-row"]',
                }
            },
            requiredElements: ['onboardingScreen'],
        });
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.onboardingScreen.header.waitForDisplayed();
                break;
            case 'offer description':
                await this.onboardingScreen.offerDescription.waitForDisplayed();
                break;
            case 'button back':
                await this.onboardingScreen.backButton.waitForDisplayed();
                break;
            case 'offer button':
                await this.onboardingScreen.offerButton.waitForDisplayed();
                break;
            case 'offer title':
                await this.onboardingScreen.offerTitle.waitForDisplayed();
                break;
            case 'onboarding screen':
                await this.onboardingScreen.waitForDisplayed();
                break;
            case 'header multistep':
                await this.headerMultistep.header.scrollIntoView({block: 'start', behavior: 'smooth'});
                await this.headerMultistep.header.waitForDisplayed();
                break;
            case 'destiny step':
                await this.destinyStep.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin step':
                await this.originStep.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt':
                await this.receipt.amountDonation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button share':
                await this.receipt.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount step':
                await this.amountStep.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount button':
                await this.amountStep.content.buttonContinue.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'button group':
                await this.amountStep.content.buttonGroup.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async sectionSteps() {
        await this.onboardingScreen.offerButton.waitForDisplayed({timeout: config.wait.M});
        await this.onboardingScreen.offerButton.click();
    }

    async hundredAmount() {
        await this.amountStep.content.secondButon.waitForDisplayed();
        await this.amountStep.content.secondButon.click();
    }

    async typeAmount({amount} = {}) {
        await this.amountStep.content.inputField.waitForDisplayed({timeout: config.wait.M});
        await this.amountStep.content.inputField.setValue({value: amount, slow: true});
    }

    async continueAmountStep() {
        await this.amountStep.content.buttonContinue.waitForDisplayed();
        await this.amountStep.content.buttonContinue.click();
    }

    async confirmTransaction(){
        await this.confirmStep.confirmButton.scrollIntoView({block: 'end', behavior: 'smooth'});
        await this.confirmStep.confirmButton.waitForDisplayed();
        await this.confirmStep.confirmButton.click();
        await this.fillOtp('12345678');
        await this.showReceipt();
    }

    async clickConfirmButton(){
        await this.confirmStep.confirmButton.scrollIntoView({block: 'end', behavior: 'smooth'});
        await this.confirmStep.confirmButton.waitForClickable({timeout: config.wait.S});
        await this.confirmStep.confirmButton.click();
    }

    async showReceipt(){
        await this.receipt.amountDonation.waitForDisplayed({timeout: config.wait.M});
        await this.receipt.voucherDonation.waitForDisplayed({timeout: config.wait.M});

    }

    async showAccounts(){
        const editButton = (await this.originStep.modifyButton.elements()).value[0];
        await editButton.waitForClickable({timeout: config.wait.M});
        await editButton.click();
    }

    async showMoreAccounts() {
        await this.originStep.content.showAll.waitForClickable({timeout: config.wait.M});
        await this.originStep.content.showAll.click();
    }

    async editOrigin(buttonClick) {
        await this.showAccounts();
        if (buttonClick === 'has three accounts') {
            await this.originStep.content.accountList.waitForDisplayed();
        } else if (buttonClick === 'has three accounts or more') {
            await this.showMoreAccounts();
        }
    }

    async editAmountStep() {
        const editButton = (await this.amountStep.modifyButton.elements()).value[0];
        await editButton.waitForClickable();
        await editButton.click();
    }

    async exitOnboarding() {
        await this.onboardingScreen.backButton.waitForDisplayed();
        await this.onboardingScreen.backButton.click();
    }

    async closeMultistep() {
        await this.headerMultistep.header.scrollIntoView({block: 'start', behavior: 'smooth'});
        await this.headerMultistep.header.waitForExist();
        await this.headerMultistep.buttonLeft.waitForDisplayed();
        await this.headerMultistep.buttonLeft.click();
    }

    async modalExitTransaction() {
        await this.modalExit.buttonExit.waitForDisplayed();
        await this.modalExit.buttonExit.click();
    }

    async modalContinueTransaction() {
        await this.modalExit.buttonContinue.waitForDisplayed();
        await this.modalExit.buttonContinue.click();
    }

    async exitOrContinueOffer(action) {
        await this.closeMultistep();
        if (action === 'exit') {
            await this.modalExitTransaction();
        } else if (action === 'continue') {
            await this.modalContinueTransaction();
        }
    }
}
export default new CardTransactionServicingScheduledDonations();

