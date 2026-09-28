import AbstractGlomoComponent from './abstract-glomo-component';

export default class FeedbackClientVoiceConnect extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'feedback-client-voice-connect-gl',
            elements: {
                welcome: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][visible][name="help-modal-pre-form"]'
                    },
                    header: '#helpModalHeader',
                    exitButton: '#helpModalHeader #btn-close',
                    rating: '[data-tag-name="bbva-form-rating"] #star-container input[value="__VALUERATING__"] + .label-star',
                },
                mainModal: {
                    properties: {root: '[data-tag-name="bbva-help-modal"][visible][name="help-modal-main-form"]'},
                    selectBoxDinamic: '[data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][value="__VALUETEXT__"]',
                    ratingFive: '[data-tag-name="bbva-form-rating"] #star-container input[value="__VALUERATING__"] + .label-star',
                    textArea: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-textarea"] textarea',
                    button: '[data-tag-name="bbva-button-default"][text="Enviar"]',
                    exitButton: '#helpModalHeader #btn-close',
                },
                thankYou: {
                    properties: {root: '[data-tag-name="bbva-help-modal"][visible][name="help-modal-thank-you"]'},
                    headerThankYou: '#helpModalHeader',
                    exitThankYou: '#helpModalHeader #btn-close',
                    microillustrationThankYou: '[slot="slot-content"] [icon-status="success"]',
                    titleThankYou: 'div bbva-type-text[text="Gracias por tu respuesta"] p',
                    descriptionThankYou:
                        'div bbva-type-text[text="Nos ayudas a seguir mejorando"] p',
                },
                header: '[data-tag-name="bbva-help-modal"][visible] #helpModalHeader',
            },
            requiredElements: [
                'header'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'div#cells-template-__cross feedback-client-voice-connect-gl',
            isWithoutRoot: true,
        };
    }
    async answerFeedbackForm(feedback) {
        const { openResponse } = global.user;
        await this.selectRating();
        if (feedback !== 'payroll portability successful'){    
            await this.checkboxOptions(true);
            await this.mainModal.textArea.waitForDisplayed({timeout: config.wait.XL});
            await this.mainModal.textArea.click();
            await this.mainModal.textArea.setValue({value: openResponse});
        }

        if( feedback !== 'my conversations analytics' && feedback !== 'log out analytics' ){
            await this.sendFeedback();
        }
    }

    async selectRating(value = 5, isPresed = true) {
        const selects = this.welcome.rating.specifySelector({placeholder: '__VALUERATING__', value: value});
        await selects.waitForDisplayed({timeout: config.wait.M});
        if (isPresed) {
            await selects.click();
        }
    }

    async selectRatingMainModal(value = 5, isPresed = true) {
        const selects = this.mainModal.ratingFive.specifySelector({placeholder: '__VALUERATING__', value: value});
        await selects.waitForDisplayed({timeout: config.wait.M});
        if (isPresed) {
            await selects.click();
        }
    }

    async changeRateAndSend() {
        await this.selectRating(3);
        await this.selectRatingMainModal();
        await this.sendFeedback();
    }

    async logoutFromGradual() {
        await this.thankYou.exitThankYou.waitForDisplayed({timeout: config.wait.M});
        await this.thankYou.exitThankYou.click();
    }

    async exitIncompleteQuestion() {
        await this.mainModal.exitButton.waitForDisplayed({timeout: config.wait.M});
        await this.mainModal.exitButton.click();
    }

    async resolvedWithoutQuestion() {
        await this.selectRating();
        await this.sendFeedback();
    }

    async sendFeedback() {
        await this.mainModal.button.waitForDisplayed({timeout: config.wait.M});
        await this.mainModal.button.click();
    }

    async closeGradual() {
        await this.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
        await this.welcome.exitButton.click();
    }

    async checkboxOptions(actionClick = false) {
        let selects;
        const { checkbox } = global.user;
        for (const element of checkbox) {
            selects = this.mainModal.selectBoxDinamic.specifySelector({placeholder: '__VALUETEXT__', value: element});
            await selects.waitForDisplayed({timeout: config.wait.M});
            if (actionClick) {
                await selects.click();
            }
        }
    }

    async closeFormFeedback(option) {
        switch (option) {
            case 'completed questionnaire':
                await this.logoutFromGradual();
                break;
            case 'close without answer':
                await this.closeGradual();
                break;
            case 'uncompleted questionnaire':
                await this.exitIncompleteQuestion();
                break;
            default:
                throw new Error(`The option ${option} is not implemented`);
        }
    }
}
