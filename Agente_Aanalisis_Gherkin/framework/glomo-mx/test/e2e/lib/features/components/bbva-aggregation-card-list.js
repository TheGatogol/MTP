import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaAggregationCardList extends AbstractGlomoComponent {
    constructor(args) {
        super(Object.assign({
            name: 'bbva-aggregation-card-list',
            elements: {
                listCard: '[data-tag-name="bbva-list-card"]',
                errorModule: '[data-tag-name="bbva-notification-message"]',
                errorModuleRetry: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-link"]',
            },
            requiredElements: [
                '__root',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-aggregation-card-list';
    }

}
