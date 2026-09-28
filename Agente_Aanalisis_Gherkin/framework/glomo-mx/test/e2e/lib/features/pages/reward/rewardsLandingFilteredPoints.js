import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import BbvaAggregationSimpleList from '../../components/bbva-aggregation-simple-list';
import BbvaAggregationSimpleListSpherica from '../../components/bbva-aggregation-simple-list-spherica';
import BbvaExpandableAccordion from '../../components/bbva-expandable-accordion';
import BbvaNotificationMessage from '../../components/bbva-notification-message';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import RewardsLoyaltyPointsTransactions from '../../components/rewards-loyalty-points-transactions';
import BbvaTabDefault from '../../components/bbva-tab-default';

@page('rewardsLandingFilteredPoints')
class RewardsLandingFilteredPoints extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-filteredPoints[state="active"]',
            elements: {

                //Header
                header: CellsMoleculeHeader,
                rewardsLandingPoints: '[data-tag-name="bbva-panel-process"] [data-tag-name="bbva-amount"]',
                dateExpirePoints: '[data-tag-name="bbva-panel-process"] div.footer div.commission',
                pointsToExpire: [BbvaAggregationSimpleList, {
                    scoped: true,
                }],


                loyaltyPointsTransactions: [RewardsLoyaltyPointsTransactions, {
                    scoped: true,
                }],
                notificationMessage: [BbvaNotificationMessage, {
                    scoped: true,
                    modifiers: ':not([hidden])',
                }],

                tab: [BbvaTabDefault, {
                    scoped: true,
                }],

                access: {
                    properties: {
                        root: '[data-tag-name="rewards-loyalty-points-transactions"] [data-tag-name="bbva-tab-default"] div#tabs'
                    },
                    datesAccessButton: ' button#tab-0',
                    periodAccessButton: 'button#tab-1',
                },

                //period transactions
                expandableAccordion: [BbvaExpandableAccordion, {
                    scoped: true,
                    modifiers: '[opened]',
                }]
            },
            elementsSpherica: {

                //Header
                header: CellsMoleculeHeaderSpherica,
                pointsToExpire: [BbvaAggregationSimpleListSpherica, {
                    scoped: true,
                }]
            },

            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'available points detail':
                await this.rewardsLandingPoints.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date of expire detail':
                await this.dateExpirePoints.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            case 'points to be expired':
                await this.pointsToExpire.expandableAccordion.expandableButtonIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loyalty points transactions':
                await this.loyaltyPointsTransactions.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'disclaimer':
            case 'disclaimer - global access notification':
                await this.notificationMessage.icon.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                await this.notificationMessage.text.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            case 'points to be expired list':
                await this.pointsToExpire.expandableAccordion.listSimple.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date transactions':
                if (this.isSpherica()) {
                    await this.loyaltyPointsTransactions.transactionsListSpherica.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.loyaltyPointsTransactions.transactionsList.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'without transactions image':
                if (this.isSpherica()) {
                    await this.loyaltyPointsTransactions.noTransactionsImageSpherica.waitForDisplayed({timeout: config.wait.L});
                    break;
                } else {
                    await this.loyaltyPointsTransactions.noTransactionsImage.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'period date':
                if (this.isSpherica()) {
                    await this.expandableAccordion.periodDateSpherica.waitForDisplayed({timeout: config.wait.L});
                } else {
                    await this.expandableAccordion.periodDate.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'period balance':
                await this.expandableAccordion.balance.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'period transactions':
                if (this.isSpherica()) {
                    await this.expandableAccordion.appliedMovementSpherica.waitForDisplayed({timeout: config.wait.M});
                    await this.expandableAccordion.generatedMovementSpherica.waitForDisplayed({timeout: config.wait.M});
                    await this.expandableAccordion.expiredMovementSpherica.waitForDisplayed({timeout: config.wait.M});
                    break;
                } else {
                    await this.expandableAccordion.appliedMovement.waitForDisplayed({timeout: config.wait.M});
                    await this.expandableAccordion.generatedMovement.waitForDisplayed({timeout: config.wait.M});
                    await this.expandableAccordion.expiredMovement.waitForDisplayed({timeout: config.wait.M});
                    break;
                }
            case 'period payment type':
                if (this.isSpherica()) {
                    await this.expandableAccordion.listSimpleSpherica.waitForDisplayed({timeout: config.wait.L});
                    break;
                } else {
                    await this.expandableAccordion.listSimple.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'points used':
                await this.expandableAccordion.appliedMovement.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'points generated':
                await this.expandableAccordion.generatedMovement.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'points eliminated':
                await this.expandableAccordion.expiredMovement.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async retryModal() {
        await this.tab.link.click();
    }

    async goBack() {
        await this.header.actionLeft();
    }

    async deployPointsToBeExpired() {
        await this.pointsToExpire.openExpandableAccordion.click();
    }

    async closeDisclaimer() {
        await this.notificationMessage.exitDisclaimer.click();
        await this.notificationMessage.waitForDisplayed({timeout: config.wait.L, reverse: true});
    }

    async displayTransactionsByPeriod() {
        await (await (await (await (await this.access.periodAccessButton
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .waitForEnabled({timeout: config.wait.L}))
            .click();
    }

    async displayTransactionsByDates() {
        await (await (await (await (await this.access.datesAccessButton
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .waitForEnabled({timeout: config.wait.L}))
            .click();
    }
}

export default new RewardsLandingFilteredPoints();
