import AbstractGlomoComponent from './abstract-glomo-component';

import CellsConfirmButtons from './cells-confirm-buttons';

export default class CellsModalCardAdvice extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-modal-card-advice',
            elements: {
                container: 'cells-bottom-modal',
                modalHeader: 'cells-bottom-modal header',
                modalimage: 'cells-bottom-modal cells-card-advice #image',
                modalTitle: 'cells-bottom-modal cells-card-advice div cells-heading',
                modalText: 'cells-bottom-modal cells-card-advice #text',
                listTitle: 'cells-bottom-modal cells-text-description',
                list: 'cells-bottom-modal .list-container',
                findAtmBtn: 'cells-molecule-link-icon.icon-find-place',
                confirmButtonsComponent: {
                    component: {
                        ComponentClass: CellsConfirmButtons
                    }
                },
            },
            requiredElements: [
                'container'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-modal-card-advice',
        };
    }

    async selectPrimaryButton() {
        await this.confirmButtonsComponent.primaryBtn.waitForClickable({timeout: config.wait.M});
        await this.confirmButtonsComponent.primaryBtn.click();
    }

}
