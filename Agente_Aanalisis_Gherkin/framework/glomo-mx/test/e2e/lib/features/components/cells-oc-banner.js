import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsOcBanner extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-oc-banner',
            elements: {

                //Banner
                banner: '',
                image: '.banner div.banner__hero .banner__image',
                title: '.banner .banner__title',
                header: '.banner .banner__header',
                text: '.banner .banner__main .banner__text',
                date: '.banner div.banner__main p.banner__date',
                description: '.banner .banner__main .banner__description',
                amount: '.banner .banner__main .banner__amount',
                link: '.banner .banner__main cells-st-button .banner__link',
                closeBtn: '.banner cells-st-button.banner__exit',
                offer: '.banner .banner__main cells-st-button[data-selector="__OFFER__"] .banner__link',
            },
            requiredElements: [
                'header',
            ]
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-oc-banner'
        };
    }

    async waitForBannerVisibility(reverse = false, headerType = 'header') {
        if (reverse) {
            await this.banner.waitForDisplayed({timeout: config.wait.L, reverse: true});
        } else {
            await this.banner.scrollIntoView({block: 'start'});
            await this.banner.waitForDisplayed({timeout: config.wait.L});
            await this.waitForBannerSection(headerType);
        }
    }

    async waitForBannerSection(headerType) {
        await this[headerType].waitForText({timeout: config.wait.M});
        await this.image.waitForDisplayed({timeout: config.wait.M});
        await this.text.waitForText({timeout: config.wait.M});
        await this.link.waitForDisplayed({timeout: config.wait.M});
    }

    async accessOffer(offer) {
        const offersDictionary = [
            'consumer-loan',
            'payroll-advance',
            'mortgage-loan',
            'debit-card-request',
            'mpos-openpay',
            'product-solutions-payment-tdc-apf',
            'oc-account',
            'zero-party-data'];
        const parseOffer = offer.replace(/\s/g, '-').toLowerCase();
        await this.validateOffer(offersDictionary.includes(parseOffer), parseOffer, offer);
    }

    async validateOffer(isValid, parseOffer, offer) {
        if (isValid) {
            await (await this.offer
                .specifySelector({placeholder: '__OFFER__', value: parseOffer})
                .waitForClickable({timeout: config.wait.L}))
                .click();
        } else {
            throw new Error(`The ${offer} name is not find into the offers dictionary`);
        }
    }

    async closeOffer() {
        await (await this.closeBtn
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async selectCardLink() {
        await this.link.waitForClickable({timeout: config.wait.M});
        await this.link.click();
    }
}
