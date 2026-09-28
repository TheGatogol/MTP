import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaWidgetFaqsList extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: '#bbva-widget-faqs-list',
            elements: {
                headerCategory: 'bbva-header-category',
                aListLink: 'bbva-list-link',
            },
            requiredElements: [
                'headerCategory'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'bbva-widget-faqs-list',
        };
    }
    async accessFaq() {
        await this.aListLink.click();
    }
}
