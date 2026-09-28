import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaMultiStepPaymentPlan extends AbstractGlomoComponent {

    constructor(args) {
        const bbvaExpandableMultiStep = '[data-tag-name="bbva-expandable-multistep"]';
        const container = '.container-product-offer';
        const defaultArgs = {
            name: 'bbva-multistep-payment-plan',
            elements: {
                container:  `${container}`,
                cardOffer: `${container} ${bbvaExpandableMultiStep} #step0`,
                imageOffer: `${container} ${bbvaExpandableMultiStep} #step0 .content .blue-content [data-tag-name="bbva-banner-image"]`,
                offerAmount: `${container} ${bbvaExpandableMultiStep} #step0 .content .monthly-payment [data-tag-name="bbva-amount"]`,
                interestedButton: `${container} ${bbvaExpandableMultiStep} #step0 .content #firstStep`,
                termsAndConditions: `${container} ${bbvaExpandableMultiStep} #step1`,
                termsAndConditionsButton: `${container} ${bbvaExpandableMultiStep} #step1 .terms-and-conditions-container .button-container #buttonAccepted`,
                checkOne: `${container} ${bbvaExpandableMultiStep} #step1 .terms-and-conditions-container .check-conditions #conditionOne`,
                checkTwo: `${container} ${bbvaExpandableMultiStep} #step1 .terms-and-conditions-container .check-conditions #conditionTwo`,
                headingTerms: `${container} ${bbvaExpandableMultiStep} #step1 .header [data-tag-name="bbva-core-heading"]`,
                notification: `${container} ${bbvaExpandableMultiStep} #step1 .terms-and-conditions-container bbva-notification-message`,
                pdfOne: `${container} ${bbvaExpandableMultiStep} #step1 .terms-and-conditions-container #consultTermsAndConditions`,
                bindingOffer: `${container} ${bbvaExpandableMultiStep} #step2`,
                bindingOfferButton: `${container} ${bbvaExpandableMultiStep} #step2 [data-tag-name="bbva-button-default"]`,
            },
            requiredElements: [
                'container'
            ],
        };

        super(Object.assign(defaultArgs,  args));
    }

    async goToTermsAndConditions() {
        await this.interestedButton.scrollIntoView();
        await this.interestedButton.waitForDisplayed({timeout: config.wait.M});
        await this.interestedButton.waitForEnabled({timeout: config.wait.M});
        await this.interestedButton.waitForClickable({timeout: config.wait.M});
        await this.interestedButton.click();
    }

    async acceptTermsAndConditions() {
        await this.termsAndConditions.waitForProperty({property: 'active', timeout: config.wait.M});
        await (await this.checkOne.waitForClickable({timeout: config.wait.M})).click();
        await (await this.checkTwo.waitForClickable({timeout: config.wait.M})).click();
        await this.termsAndConditionsButton.scrollIntoView();
        await this.termsAndConditionsButton.waitForEnabled({timeout: config.wait.M});
        await this.termsAndConditionsButton.waitForClickable({timeout: config.wait.M});
        await this.termsAndConditionsButton.click();
    }

    async goToBindingOffer() {
        await this.bindingOfferButton.scrollIntoView();
        await this.bindingOfferButton.waitForDisplayed({timeout: config.wait.M});
        await this.bindingOfferButton.waitForEnabled({timeout: config.wait.M});
        await this.bindingOfferButton.waitForClickable({timeout: config.wait.M});
        await this.bindingOfferButton.click();
    }

    static get _baseRoot() {
        return 'bbva-multistep-payment-plan';
    }
}
