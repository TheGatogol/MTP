import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaListEditable extends AbstractGlomoComponent {

    constructor(args = {}) {
        super(Object.assign({
            name: 'bbva-list-editable',
            elements: {
                label: 'div.label',
                detail: 'div.detail',
                link: 'bbva-link',
            },
            requiredElements: [
                'label',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-list-editable';
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

