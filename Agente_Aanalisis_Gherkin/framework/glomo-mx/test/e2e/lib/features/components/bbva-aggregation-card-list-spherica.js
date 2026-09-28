import BbvaAggregationCardList from './bbva-aggregation-card-list';

export default class BbvaAggregationCardListSpherica extends BbvaAggregationCardList {
    constructor(args) {
        super(Object.assign({
            name: 'bbva-aggregation-card-list-spherica',
            elements: {
                listCard: '[data-tag-name="bbva-custom-list-card"]',
                errorModule: '[data-tag-name="bbva-notification-message"]',
                errorModuleRetry: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-link"]',
            },
            requiredElements: [
                '__root',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-aggregation-card-list-spherica';
    }

}
