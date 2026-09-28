import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('pointsRedeemPurchasesByCampaigns')
class PointsRedeemPurchasesByCampaigns extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-pointsRedeemPurchasesByCampaigns[state="active"]',
            elements: {
                mainModalPointRedeem: {
                    properties: { root: '[data-tag-name="bbva-help-modal"]#notificationMain '},
                    buttonHeaderInfo: '[data-tag-name="bbva-header-main"]#helpModalHeader button#btn-info',
                    buttonHeaderClose: '[data-tag-name="bbva-header-main"]#helpModalHeader button#btn-close',
                    buttonShowMoreDetails: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                    buttonPayWithPoint: 'div.modal-footer [data-tag-name="bbva-button-default"]',
                    headerPageMain: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                    titlePointsMain: '[data-tag-name="bbva-type-text"][text="bbva-feature-loyalty-points-redeem-purchases-main-content"]',
                    availablePoints: '[data-tag-name="bbva-panel-comparative"]',
                    withoutBenefitsWouldBeWorth: '[data-tag-name="bbva-notification-help"]',
                    purchaseDetail: 'div.content-summary',
                },
                modalShowMoreDetail: {
                    properties: { root: '[data-tag-name="bbva-feature-loyalty-points-redeem-purchases-modal"] '},
                    buttonClose: '[data-tag-name="bbva-header-main"]#helpModalHeader button#btn-close',
                },
                modalSuccessScreen: {
                    properties: { root: '[data-tag-name="bbva-help-modal"]#notificationSuccess '},
                    buttonClose: '[data-tag-name="bbva-header-main"]#helpModalHeader button#btn-close',
                    buttonPointsAndPromotions: '[data-tag-name="bbva-type-text"][text="bbva-feature-loyalty-points-redeem-purchases-success-points-button"]'
                },

                modalErrorServiceRetry: {
                    properties: { root: '[data-tag-name="bbva-help-modal"]#errorServiceRetry '},
                    headerModal: '[data-tag-name="bbva-header-main"] ',
                    headerCloseButton: 'button#btn-close',
                    iconModal: ' [slot="slot-content"] [data-tag-name="bbva-type-icon"]',
                    titleModal: '#helpModalHeader #text',
                    descriptionModal: 'bbva-type-text.description-content',
                },
                modalFaqs: {
                    properties: { root: '[data-tag-name="bbva-help-modal"]#faqs '},
                    headerFaqsModal: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                    whatDoMyPointsMean: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(1)',
                    whatDoMyPointsMeanTexts: {
                        properties: { root: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(1)' },
                        body: '[data-tag-name="bbva-type-text"].body',
                        description: '[data-tag-name="bbva-type-text"].description',
                    },
                    whatHappensToMyBalance: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(2)',
                    whatHappensToMyBalanceText: {
                        properties: { root: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(2)' },
                        body: '[data-tag-name="bbva-type-text"].body',
                    },
                    valueOfPoints: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(3)',
                    valueOfPointsText: {
                        properties: { root: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(3)' },
                        body: '[data-tag-name="bbva-type-text"].body',
                    },
                    pointReflectionTiming: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(4)',
                    pointReflectionTimingText: {
                        properties: { root: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(4)' },
                        body: '[data-tag-name="bbva-type-text"].body',
                        description: '[data-tag-name="bbva-type-text"].description',
                    },
                    applicationTiming: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(5)',
                    applicationTimingText: {
                        properties: { root: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(5)' },
                        body: '[data-tag-name="bbva-type-text"].body',
                        description: '[data-tag-name="bbva-type-text"].description',
                    },
                }
            },
            requiredElements: ['root'],
        });
    }

    async completedConversion(type) {
        const element = type.toLowerCase() === 'posted'
            ? this.mainModalPointRedeem.buttonPayWithPoint
            : this.mainModalPointRedeem.buttonPayWithPoint;
        await (await (await element.waitForDisplayed({ timeout: config.wait.M }))
            .waitForAnimation({ timeout: config.wait.M }))
            .click();
    }

    async closeSuccessScreen() {
        await (await (await this.modalSuccessScreen.buttonClose.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async selectMoreDetailsModal(action) {
        const element = action.toLowerCase() === 'show details'
            ? this.mainModalPointRedeem.buttonShowMoreDetails
            : this.mainModalPointRedeem.helpButton;
        await (await (await element.waitForDisplayed({ timeout: config.wait.M }))
            .waitForAnimation({ timeout: config.wait.M }))
            .click();
    }

    async closeMoreDetailsModal() {
        await (await (await this.modalShowMoreDetail.buttonClose.waitForDisplayed({ timeout: config.wait.M }))
            .waitForAnimation({ timeout: config.wait.M }))
            .click();
    }

    async exitPayWithPointsFlow() {
        await (await (await this.mainModalPointRedeem.buttonHeaderClose.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async goToPointsAndPromotions() {
        await (await (await this.modalSuccessScreen.buttonPointsAndPromotions.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async goToHelpSection(type) {
        switch (type.toLowerCase()) {
            case 'what do my points mean':
                await this.goToWhatDoMyPointsMean();
                break;
            case 'what happens to my balance':
                await this.goToWhatHappensToMyBalance();
                break;
            case 'value of points':
                await this.goToValueOfPoints();
                break;
            case 'point reflection timing':
                await this.goToPointReflectionTiming();
                break;
            case 'application timing':
                await this.goToApplicationTiming();
                break;
            default:
                throw new Error(`The section "${type}" is unknown. Cannot be processed.`);
        }
    }

    async goToWhatDoMyPointsMean() {
        await (await (await this.mainModalPointRedeem.buttonHeaderInfo.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await (await (await this.modalFaqs.whatDoMyPointsMean.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async goToWhatHappensToMyBalance() {
        await (await (await this.mainModalPointRedeem.buttonHeaderInfo.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await (await (await this.modalFaqs.whatHappensToMyBalance.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async goToValueOfPoints() {
        await (await (await this.mainModalPointRedeem.buttonHeaderInfo.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await (await (await this.modalFaqs.valueOfPoints.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async goToPointReflectionTiming() {
        await (await (await this.mainModalPointRedeem.buttonHeaderInfo.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await (await (await this.modalFaqs.pointReflectionTiming.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async goToApplicationTiming() {
        await (await (await this.mainModalPointRedeem.buttonHeaderInfo.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await (await (await this.modalFaqs.applicationTiming.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header pay with points':
                await this.mainModalPointRedeem.headerPageMain.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help button':
                await this.mainModalPointRedeem.buttonHeaderInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.mainModalPointRedeem.buttonHeaderClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text your points are worth more on this purchase':
                await this.mainModalPointRedeem.titlePointsMain.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text you have available':
                await this.mainModalPointRedeem.availablePoints.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text with benefit they are worth':
                await this.mainModalPointRedeem.availablePoints.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text without benefit they would be worth':
                await this.mainModalPointRedeem.withoutBenefitsWouldBeWorth.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase detail':
                await this.mainModalPointRedeem.purchaseDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show details link':
                await this.mainModalPointRedeem.buttonShowMoreDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay with points button':
                await this.mainModalPointRedeem.buttonPayWithPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header modal pay with points':
                await this.modalErrorServiceRetry.headerCloseButton.waitForAnimation({timeout: config.wait.M, interval: 500});
                await this.modalErrorServiceRetry.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button modal':
                await this.modalErrorServiceRetry.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon modal':
                await this.modalErrorServiceRetry.iconModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text title modal':
                await this.modalErrorServiceRetry.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text description modal':
                await this.modalErrorServiceRetry.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bbva points':
                await this.modalFaqs.whatDoMyPointsMeanTexts.body.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'full purchase':
                await this.modalFaqs.whatDoMyPointsMeanTexts.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'equivalent amount':
                await this.modalFaqs.whatHappensToMyBalanceText.body.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'value may vary':
                await this.modalFaqs.valueOfPointsText.body.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase you just made':
                await this.modalFaqs.pointReflectionTimingText.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'transaction in transit':
                await this.modalFaqs.pointReflectionTimingText.body.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'depending on days passed':
                await this.modalFaqs.applicationTimingText.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'usually 1-5 days':
                await this.modalFaqs.applicationTimingText.body.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'empty':
                await this.modalFaqs.headerFaqsModal.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new PointsRedeemPurchasesByCampaigns();
