import AbstractGlomoPage from '../abstract-glomo-page';
import { page } from '@csqe/radish';

@page()
class RequestMoney extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-requestMoney',
            elements: {

                onboardingPage: '[data-tag-name="onboarding-request-money-page"]',
                onbordingNextButton: '[data-tag-name="onboarding-request-money-page"] [data-tag-name="bbva-button-default"].next',
                onboardingConfirmButton: '[data-tag-name="onboarding-request-money-page"] div.footer div [data-tag-name="bbva-button-default"]',

                requestMoneyPage: '[data-tag-name="request-money-page"]',
                requestMoneyFormInput: '[data-tag-name="request-money-page"] #formInputRequestMoney [data-tag-name="bbva-form-textarea"] textarea',
                requestMoneyConfirmButton: '[data-tag-name="request-money-page"] #buttonDefaultRequestMoney',
                requestMoneyCloseButton: '[data-tag-name="request-money-page"] #btn-close',

                pendingRequestPage: '[data-tag-name="pending-request-page"]',
                pendingRequestCloseButton: '[data-tag-name="pending-request-page"] #btn-close [data-tag-name="bbva-type-icon"]'
            },
            requiredElements: [
                'onboardingPage',
            ],
        });
    }

    async goToRequestMoneyPage() {
        await this.onboardingConfirmButton.waitForDisplayed({timeout: config.wait.M});
        await this.onboardingConfirmButton.click();
    }

    async writeMessage() {
        const message = 'Me depositas $100 de la semana, porfis?';
        await this.requestMoneyFormInput.waitForDisplayed({timeout: config.wait.S});
        await this.requestMoneyFormInput.click();
        await this.requestMoneyFormInput.setValue({value: message});
    }

    async sendMessage() {
        await this.requestMoneyConfirmButton.waitForDisplayed({timeout: config.wait.L});
        await this.requestMoneyConfirmButton.click();
    }

    async closePendingRequestPage() {
        await this.pendingRequestCloseButton.waitForDisplayed({timeout: config.wait.L});
        await this.pendingRequestCloseButton.click();
    }

    async changeNextSlide(clickNumbers) {
        for (let index = 0; index < clickNumbers; index++) {
            await this.onbordingNextButton.waitForDisplayed({timeout: config.wait.S});
            await this.onbordingNextButton.click();
        }
    }

    async closeOperative() {
        await (await this.requestMoneyCloseButton.waitForDisplayed({timeout: config.wait.L})).click();
    }

}

export default new RequestMoney();
