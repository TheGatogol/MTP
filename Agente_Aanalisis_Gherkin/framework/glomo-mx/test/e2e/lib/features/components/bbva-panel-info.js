import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaPanelInfo extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-panel-info',
            elements: {
                image: '.image',
                title: 'div.content > [data-tag-name=bbva-text].title h3',
                link: '[data-tag-name="bbva-link"]',
                content: 'div.content',
                description: '.description'
            },
            requiredElements: [
                'description',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-panel-info';
    }

    get panelLink() {
        return {
            click: async ({timeout = config.wait.M} = {}) => {
                await this.link.waitForClickable({timeout});
                await this.link.click();
            }
        };
    }
}
