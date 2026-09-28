import AbstractGlomoComponent from './abstract-glomo-component';

import BbvaExpandableAccordion from '../components/bbva-expandable-accordion';
import BbvaNotificationMessage from '../components/bbva-notification-message';

export default class BbvaAggregationSimpleList extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-aggregation-simple-list',
            elements: {
                expandableAccordion: BbvaExpandableAccordion,
                notification: BbvaNotificationMessage,
            },
            requiredElements: [
                '__root',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-aggregation-simple-list';
    }

    get openExpandableAccordion() {
        return {
            waitForDisplayed: async ({timeout = config.wait.M, reverse = false} = {}) => {
                await this.expandableAccordion.expandableButtonIcon.waitForDisplayed({timeout, reverse});
            },
            click: async ({timeout = config.wait.M} = {}) => {
                await this.expandableAccordion.expandableButtonIcon.waitForDisplayed({timeout});
                await this.expandableAccordion.expandableButtonIcon.waitForClickable({timeout});
                await this.expandableAccordion.expandableButtonIcon.click();
            }
        };
    }

}

