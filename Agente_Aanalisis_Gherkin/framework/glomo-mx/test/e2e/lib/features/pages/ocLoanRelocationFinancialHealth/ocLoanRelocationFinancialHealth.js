import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('ocLoanRelocationFinancialHealth')
class OcLoanRelocationFinancialHealth extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocLoanRelocationFinancialHealth[state="active"]',
            elements: {
                buttonContinue: '#offer-detail-button',
                loanConditions: {
                    buttonContinueLoanConditions: '#conditionsModal [data-tag-name="bbva-expandable-multistep"] #step-1 bbva-button-default',
                },
                checkTerms: {
                    properties: {root: 'loan-and-mortgage-origination-oc-loan-relocation-mx loan-and-mortgage-origination-oc-loan-relocation-mx-relocation-hiring' },
                    checkRemainingBalance: '#aceptar #input',
                    checkTermsAndConditions: '#condiciones #input',
                    checkLifeInsurance: '#desempleo #input',
                    checkCreditHistoryCheckAuthorization: '#buro #input',
                },
                loanDetailSummary: {
                    properties: {root: 'loan-and-mortgage-origination-oc-loan-relocation-mx loan-and-mortgage-origination-oc-loan-relocation-mx-relocation-hiring' },
                    editLink: '#step-1 #editButton',
                    hireButton: '.confirm-step [data-tag-name="bbva-button-default"]',
                },
                successfulHiring: {
                    properties: {root: 'loan-and-mortgage-origination-oc-loan-relocation-mx loan-and-mortgage-origination-oc-loan-relocation-mx-successful-relocation #successModal' },
                    header: '.content #helpModalHeader',
                    titleText: '#title-text',
                    descriptionText: '#description-text',
                    paymentText: '#payment-text',
                    ticketDetail: '#ticket-detail',
                    emailNotification: '#email-notification',
                    ivaNotification: '#iva-notification',
                },
            },
            requiredElements: [
                'buttonContinue'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'title text':
                await this.successfulHiring.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description text':
                await this.successfulHiring.descriptionText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'ticket detail':
                await this.successfulHiring.ticketDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount text':
                await this.successfulHiring.paymentText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message email':
                await this.successfulHiring.emailNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'iva notification':
                await this.successfulHiring.ivaNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.successfulHiring.header.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _acceptTermsAndProceed(withLifeInsurance = false) {
        await this.checkTerms.checkRemainingBalance.waitForDisplayed({timeout: config.wait.M});
        await this.checkTerms.checkRemainingBalance.click();
        await this.checkTerms.checkTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
        await this.checkTerms.checkTermsAndConditions.click();
        if (withLifeInsurance) {
            await this.checkTerms.checkLifeInsurance.waitForDisplayed({timeout: config.wait.M});
            await this.checkTerms.checkLifeInsurance.click();
        }
        await this.checkTerms.checkCreditHistoryCheckAuthorization.waitForDisplayed({timeout: config.wait.M});
        await this.checkTerms.checkCreditHistoryCheckAuthorization.click();
        await this._continueLoanConditions();
    }

    async _continueLoanConditions() {
        await this.loanConditions.buttonContinueLoanConditions.waitForDisplayed({timeout: config.wait.M});
        await this.loanConditions.buttonContinueLoanConditions.click();
    }

    async _submitHiring(otp = '12345678') {
        await this.loanDetailSummary.hireButton.waitForDisplayed({timeout: config.wait.M});
        await this.loanDetailSummary.hireButton.click({useActions: true});

        await this.signModal.waitForDisplayed({timeout: config.wait.XXXL});
        await this.signModal.setPassword(otp);

        await this.signModal.smsContinueButton.waitForDisplayed({timeout: config.wait.L});
        await this.signModal.smsContinueButton.click({
            useActions: true
        });
    }

    async continueOffer() {
        await this.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.buttonContinue.click();
    }

    async acceptAll() {
        await this._acceptTermsAndProceed(true);
    }

    async withoutLifeInsurance() {
        await this._acceptTermsAndProceed();
    }

    async continueSummary() {
        await this._submitHiring();
    }

    async conditionsOfferEdit() {
        await this.loanDetailSummary.editLink.waitForDisplayed({timeout: config.wait.M});
        await this.loanDetailSummary.editLink.click();
        await this._continueLoanConditions();
        await this._submitHiring();
    }
}
export default new OcLoanRelocationFinancialHealth();
