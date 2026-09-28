import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsProductSummaryReward extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-product-summary-reward',
            elements: {

                //Product summary
                pointsTitle: '.header__text',
                pointsValue: 'div.summary-content .value-amount span.amount-wrapper',
                expirePointsInfo: '.bottom-info-text[data-selector="reward-info-text"]',
                pointsAllCards: '.middle-info-text[data-selector="middle-info-text"]',
                getPointsLink: '.bottom-summary cells-st-button.more-info.link',

                //Collapsable Zone Summary
                expirePoints: 'cells-collapse-info[data-selector="glomo-profit-points-closed-to-expire-other-points-title-head"] .main-head',
                dateToExpireValue: 'cells-collapse-info[data-selector="glomo-profit-points-closed-to-expire-other-points-title-head"] cells-key-values div.key span',
                pointsToExpireValue: 'cells-collapse-info[data-selector="glomo-profit-points-closed-to-expire-other-points-title-head"] cells-key-values span.integer',
                infoPointsToExpire: 'cells-collapse-info[data-selector="glomo-profit-points-closed-to-expire-other-points-title-head"] #collapse .main-list .inline span',

                cutPoints: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] .main-head',
                dateCutValue: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list p.info-text',
                pointsGeneratedText: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(1) cells-key-values div.key span',
                pointsGeneratedValue: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(1) cells-key-values div.value span.amount-wrapper span.integer',
                usedPointsText: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(2) cells-key-values div.key span',
                usedPointsValue: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(2) cells-key-values div.value span.amount-wrapper span.integer',
                pointsExpiredText: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(3) cells-key-values div.key span',
                pointsExpiredValue: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(3) cells-key-values div.value span.amount-wrapper span.integer',
                previousPointsText: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(4) cells-key-values div.key span',
                previousPointsValue: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(4) cells-key-values div.value span.amount-wrapper span.integer',
                totalPointsText: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(5) cells-key-values div.key span',
                totalPointsValue: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] iron-collapse ul.main-list li:nth-of-type(5) cells-key-values div.value span.amount-wrapper span.integer',
                noCutPointText: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] #collapse ul.main-list .inline .key span',

                //expired points error disclaimer
                expiredPointsErrorDisclaimer: 'cells-collapse-info[data-selector="glomo-profit-points-closed-to-expire-other-points-title-head"] cells-icon-message[data-selector="reward-error"]',
                expiredPointsErrorDisclaimerIcon: 'cells-collapse-info[data-selector="glomo-profit-points-closed-to-expire-other-points-title-head"] cells-icon-message[data-selector="reward-error"] #principalIcon.icon',
                expiredPointsErrorDisclaimerMessage: 'cells-collapse-info[data-selector="glomo-profit-points-closed-to-expire-other-points-title-head"] cells-icon-message[data-selector="reward-error"] .slotted-error-message',
                expiredPointsErrorDisclaimerButton: 'cells-collapse-info[data-selector="glomo-profit-points-closed-to-expire-other-points-title-head"] cells-st-button[data-selector="reward-error-button"]',

                //cut-off points error disclaimer
                cutOffPointsErrorDisclaimer: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] cells-icon-message[data-selector="reward-error"]',
                cutOffPointsErrorDisclaimerIcon: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] cells-icon-message[data-selector="reward-error"] #principalIcon.icon',
                cutOffPointsErrorDisclaimerMessage: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] cells-icon-message[data-selector="reward-error"] .slotted-error-message',
                cutOffPointsErrorDisclaimerButton: 'cells-collapse-info[data-selector="glomo-profit-points-cut-points-title-head"] cells-st-button[data-selector="reward-error-button"]',

                //Crea disclaimers
                creaDisclaimer: 'cells-icon-message.reward-crea[data-selector="reward-crea-disclaimer"]',
                creaDisclaimerHeader: 'cells-icon-message.reward-crea[data-selector="reward-crea-disclaimer"] .header',
                creaDisclaimerMessage: 'cells-icon-message.reward-crea[data-selector="reward-crea-disclaimer"] .message',
                creaDisclaimerIcon: 'cells-icon-message.reward-crea[data-selector="reward-crea-disclaimer"] #principalIcon.icon',
                moreInfoCrea: 'cells-st-button[data-selector="reward-crea-more-info-button"]',

                //Overdraft disclaimer
                overDraftDisclaimer: 'cells-icon-message[data-selector="reward-overdraft-disclaimer"]',
                overDraftDisclaimerIcon: 'cells-icon-message[data-selector="reward-overdraft-disclaimer"] #principalIcon.icon',
                overDraftDisclaimerMessage: 'cells-icon-message[data-selector="reward-overdraft-disclaimer"] .message',

                //global error disclaimer
                globalErrorDisclaimer: 'cells-icon-message[data-selector="reward-global-error"]',
                globalErrorDisclaimerIcon: 'cells-icon-message[data-selector="reward-global-error"] #principalIcon.icon',
                globalErrorDisclaimerMessage: 'cells-icon-message[data-selector="reward-global-error"] .slotted-error-message',
                globalErrorDisclaimerLink: 'cells-icon-message[data-selector="reward-global-error"] .link.transparent.full'

            },
            requiredElements: [
                'pointsTitle',
                'pointsValue'
            ]
        };
        super(Object.assign(defaultArgs, args));

    }

    static get _baseRoot() {
        return {
            web: 'cells-product-summary-reward'
        };
    }

    async accessMoreInfo() {
        await this.creaDisclaimer.waitForAnimation({timeout: config.wait.L});
        await this.creaDisclaimer.waitForDisplayed({timeout: config.wait.XL});
        await this.moreInfoCrea.click();
    }

    async accessFaq() {
        await this.getPointsLink.waitForClickable({timeout: config.wait.XL});
        await this.getPointsLink.click();
    }
}
