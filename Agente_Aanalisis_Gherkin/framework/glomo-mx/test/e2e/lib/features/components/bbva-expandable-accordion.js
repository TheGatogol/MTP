import AbstractGlomoComponent from './abstract-glomo-component';

import BbvaPanelInfo from '../components/bbva-panel-info';

export default class BbvaExpandableAccordion extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-expandable-accordion',
            elements: {
                description: 'wrapper-description .description',
                header: 'button.header-accordion',
                listSimple: '[data-tag-name="bbva-list-simple"]',
                listSimpleSpherica: '.rewards-list',
                expandableButtonIcon: 'button [data-tag-name="bbva-core-icon"]',
                periodDate: '.header-accordion .info .row-title.text',
                periodDateSpherica: '[data-tag-name="bbva-type-text"][variant="spotlight"] .text',
                balance: '.balance',
                appliedMovement: 'bbva-list-movement.applied',
                appliedMovementSpherica: 'div.panel-content-rewards:nth-of-type(1)',
                generatedMovement: 'bbva-list-movement.generated',
                generatedMovementSpherica: 'div.panel-content-rewards:nth-of-type(2)',
                expiredMovement: 'bbva-list-movement.expired',
                expiredMovementSpherica: 'div.panel-content-rewards:nth-of-type(3)',
                panelInfo: {
                    component: {
                        ComponentClass: BbvaPanelInfo,
                        args: {
                            scoped: true,
                        }
                    }
                },
            },
            requiredElements: [
                '__root',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-expandable-accordion';
    }

    get panelInfoLink() {
        return {
            click: async ({timeout = config.wait.M} = {}) => {
                await this.panelInfo.link.waitForDisplayed({timeout});
                await this.panelInfo.panelLink.click();
            }
        };
    }
}

