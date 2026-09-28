import AbstractGlomoComponent from './abstract-glomo-component';
import BbvaNotificationMessage from '../components/bbva-notification-message';
import BbvaPanelInfo from '../components/bbva-panel-info';

export default class RewardsLoyaltyPointsTransactions extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'rewards-loyalty-points-transactions',
            elements: {
                transactionsPeriod: '[data-tag-name="bbva-expandable-accordion"]',
                transactionPeriodOpened: '[data-tag-name="bbva-expandable-accordion"][opened]',
                transactionsList: 'div.points [data-tag-name="bbva-list-movement"]',
                transactionsListSpherica: 'div.points .panel-content',
                transactionsData: 'div.points [data-tag-name="bbva-expandable-accordion"]',
                noTransactionsImage: {
                    component: {
                        ComponentClass: BbvaPanelInfo,
                        args: {
                            scoped: true,
                        }
                    }
                },
                noTransactionsImageSpherica: '[data-tag-name="bbva-clip-microillustration"]',
                notification: BbvaNotificationMessage
            },
            requiredElements: [
                'transactionsPeriod',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'rewards-loyalty-points-transactions';
    }
}

