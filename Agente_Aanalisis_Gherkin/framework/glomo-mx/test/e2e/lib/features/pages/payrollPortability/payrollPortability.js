import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsModalSelector from '../../components/cells-modal-selector';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsSummaryView from '../../components/cells-summary-view';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import FeedbackClientVoiceConnect from '../../components/feedback-client-voice-connect-gl';

@page()
class PayrollPortability extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'payrollPortability',
            root: '#cells-template-payrollPortability[state="active"]',
            elements: {
                offerPageStep: 'glomo-step-offer-page',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    },
                },
                dialogOperations: [GlomoAlertManager],
                modalList: {
                    component: {
                        ComponentClass: CellsModalSelector,
                    },
                },
                summaryView: {
                    component: {
                        ComponentClass: CellsSummaryView,
                    },
                },

                //Offer Page
                stepOfferPage:
                    'glomo-step-offer-page #main div.key-value.spacing-md-bottom cells-lists',
                startButton:
                    '#glomo-step-offer-page #footer div cells-st-button button',

                //Form text select
                textInput: 'cells-step-form-text-select #text input',
                selectBank:
                    'cells-step-form-text-select #select-modal cells-st-button',
                stepTextSelectContinueBtn:
                    'cells-step-form-text-select div.buttons cells-st-button',

                //Product selector
                productSelectorContinueBtn:
                    'cells-step-product-selector div.recipient-wrapper-full cells-st-button',

                //Checklist contract
                checkBoxButton:
                    'cells-step-card-checklist-contract main section cells-checkbox-button',
                checkListContractContinueBtn:
                    'cells-step-card-checklist-contract main cells-st-button',

                //Call me back
                stickyCallMeBack: '#glomo-step-offer-page #footer div cells-st-button.link',
                telephoneIcon: 'cells-molecule-header button#btnRightSecondary',
            },
            elementsSpherica: {
                header: '#offer-modal bbva-header-main',
                closeStep: '#multistep-modal #bbva-feature-payroll-portability-multistep bbva-header-main .button-2 .header-icons #btn-close',
                closeSuccess: '[data-tag-name="bbva-help-modal"][visible] bbva-header-main .button-1 .header-icons #btn-close',
                offerPageStep: '#offer-modal',
                startButton: '#offer-modal bbva-button-default:not(.link)',
                birthDateConfirmButton: 'bbva-feature-payroll-portability-birthday-modal bbva-button-default:not(.link)',
                birthDateWrongButton: 'bbva-feature-payroll-portability-birthday-modal bbva-button-default.link',
                textInput: '#multistep-modal #cardNumberInput input',
                selectBank: '#multistep-modal #current-payroll-step bbva-form-select',
                modalBankItem: '[data-tag-name="bbva-form-select"] bbva-form-option[id="_BANKID_"]',
                stepTextSelectContinueBtn: '#multistep-modal #current-payroll-step .button-container bbva-button-default[variant="primary"]',
                productSelectorContinueBtn: '#multistep-modal #new-payroll-step .button-container bbva-button-default[variant="primary"]',
                checkBoxButton: '#terms-and-conditions-step #input',
                checkListContractContinueBtn: '#terms-and-conditions-step .button-container bbva-button-default[variant="primary"]',
                summaryView: '#first-modal #bbva-feature-payroll-portability-multistep .button-container-complete [data-tag-name="bbva-button-default"]',
                operationDate: '.key-value-list-item:nth-of-type(1) bbva-type-text.key-value-list-item-value',
                newPayrollTitle: '.key-value-list-item:nth-of-type(2) bbva-type-text:not(.key-value-list-item-value)',
                newPayrollNumber: '.key-value-list-item:nth-of-type(2) bbva-type-text.key-value-list-item-value',
                oldPayrollTitle: '.key-value-list-item:nth-of-type(3) bbva-type-text:not(.key-value-list-item-value)',
                oldPayrollNumber: '.key-value-list-item:nth-of-type(3) bbva-type-text.key-value-list-item-value',
                operationNumberTitle: '[text="payroll-portability-success-folio-label"]',
                folio: '.key-value-list-item:nth-of-type(4) bbva-type-text.key-value-list-item-value',
                iconMessage: 'bbva-notification-message',
                stepOfferPage: '#offer-modal div.welcome-panel',
                telephoneIcon: '#offer-modal [data-tag-name=bbva-header-main] button#btn-call',
                stickyCallMeBack: '#offer-modal .slot-footer bbva-button-default[variant=link]',
                wrongDate: {
                    properties: {
                        root: 'bbva-feature-payroll-portability-birthday-incorrect-modal'
                    },
                    image: ' bbva-type-icon.title-icon',
                    title: 'h2.text',
                    text: 'div.content[slot="slot-content"] bbva-type-text[tag="p"]',
                },
                dialogOperations: [GlomoAlertManagerSpherica],
                feedbackClient: FeedbackClientVoiceConnect,

            },
            defaultSphericaElements: [],
            requiredElements: ['header'],
        });
    }

    async startProcess() {
        await this.startButton.waitForClickable({timeout: config.wait.L});
        await this.startButton.click();
    }

    async productSelectorContinue() {
        await this.productSelectorContinueBtn.waitForClickable({ timeout: config.wait.M });
        await this.productSelectorContinueBtn.click();
    }

    async answerFeedbackForm(feedback) {
        await this.feedbackClient.answerFeedbackForm(feedback);
    }

    async selectBirthDate(confirms) {
        if (confirms) {
            if (this.isSpherica()) {
                await this.birthDateConfirmButton.waitForClickable();
                await this.birthDateConfirmButton.click();
            } else {
                await this.dialogOperations.acceptBtn.waitForClickable();
                await this.dialogOperations.acceptBtn.click();
            }
        } else {
            if (this.isSpherica()) {
                await this.birthDateWrongButton.waitForClickable();
                await this.birthDateWrongButton.click();
            } else {
                await this.dialogOperations.cancelBtn.waitForClickable();
                await this.dialogOperations.cancelBtn.click();
            }
        }
    }

    async fillCurrentPayroll(accountType, cardNumber, clabeNumber) {
        const { bankId } = global.user;
        await this.textInput.waitForClickable({ timeout: config.wait.M });
        if (accountType) {
            await this.textInput.setValue({value: cardNumber, slow: true});
        } else {
            await this.textInput.setValue({value: clabeNumber, slow: true});
        }
        await this.selectBank.scrollIntoView();
        await this.selectBank.waitForClickable({ timeout: config.wait.M });
        await this.selectBank.click();
        if (this.isSpherica()) {
            const bankItem = this.modalBankItem.specifySelector({placeholder: '_BANKID_', value: bankId});
            await bankItem.scrollIntoView();
            await bankItem.waitForDisplayed();
            await bankItem.click();
        } else {
            await this.modalList.waitForDisplayed({ timeout: config.wait.M });
            await this.modalList.selectItem(bankId);
        }

        await this.stepTextSelectContinueBtn.waitForClickable({ timeout: config.wait.M });
        await this.stepTextSelectContinueBtn.click();
    }

    async selectAccount(account) {
        if (account) {
            await this.stepTextSelectContinueBtn.scrollIntoView();
            await this.productSelectorContinue();
        } else {
            await this.accountSelector.selectAccount(global.user.products.accounts[1].number);
        }
    }

    async acceptTerms() {
        await this.checkBoxButton.waitForDisplayed({ timeout: config.wait.M });
        await this.checkBoxButton.click();
        await this.checkListContractContinueBtn.waitForClickable({ timeout: config.wait.M });
        await this.checkListContractContinueBtn.click();
    }

    async confirmSummary() {
        if (this.isSpherica()) {
            await this.summaryView.waitForDisplayed();
            await this.summaryView.click();
        } else {
            await this.summaryView.waitForDisplayed();
            await this.summaryView.goNext();
        }
    }

    async signOperation() {
        const {otp} = global.user;
        await this.fillOtp(otp);
    }

    async operativePayrollProgress(accountType, option, origin) {
        await this.startProcess();
        await this.selectBirthDate('confirms');
        await this.selectAccount('unique');
        await this.fillCurrentPayroll(option, accountType);
        await this.acceptTerms();
        if(!origin) {
            await this.confirmSummary();
        }
    }

    async abandonProcess() {
        await this.closeStep.waitForDisplayed({timeout: config.wait.M});
        await this.closeStep.click();
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.click();
    }

    async exitProcess() {
        await this.closeSuccess.waitForDisplayed({timeout: config.wait.M});
        await this.closeSuccess.click();
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

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'offer page':
                await this.offerPageStep.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'offer page list':
                await this.stepOfferPage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'start process button':
                await this.startButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payroll portability in progress alert':
                await this.dialogOperations.container.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'telephone icon':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sticky button':
                if(value === 'call x person') {
                    const text = this.isSpherica() ? 'Quiero que me llame un asesor' : 'Quiero llamar a un asesor personal';
                    await this.stickyCallMeBack.waitForText({text, exactMatch:false});
                } else {
                    await this.stickyCallMeBack.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'operation date':
                await this.operationDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new payroll title':
                await this.newPayrollTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new payroll number':
                await this.newPayrollNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'old payroll title':
                await this.oldPayrollTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'old payroll number':
                await this.oldPayrollNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation number title':
                await this.operationNumberTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'info icon message':
                await this.iconMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'wrong image':
                await this.wrongDate.image.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'wrong birth date title':
                await this.wrongDate.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'wrong birth date text':
                await this.wrongDate.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header feedback':
                await this.feedbackClient.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button feedback':
                await this.feedbackClient.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating feedback button':
                await this.feedbackClient.selectRating(5, false);
                break;
            case 'header thankyou feedback':
                await this.feedbackClient.thankYou.headerThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit thankyou feedback':
                await this.feedbackClient.thankYou.exitThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro thankyou feedback':
                await this.feedbackClient.thankYou.microillustrationThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title thankyou feedback':
                await this.feedbackClient.thankYou.titleThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description thankyou feedback':
                await this.feedbackClient.thankYou.descriptionThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PayrollPortability();
