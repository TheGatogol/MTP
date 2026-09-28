import CellsModalCardAdvice from './cells-modal-card-advice';
import CellsConfirmButtonsSpherica from './cells-confirm-buttons-spherica';
export default class CellsModalCardAdviceSpherica extends CellsModalCardAdvice {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-modal-card-advice-spherica',
            elements: {
                container: 'cells-bottom-modal-spherica',
                modalHeader: 'cells-bottom-modal-spherica header',
                modalimage: 'cells-bottom-modal-spherica cells-card-advice-spherica #image',
                modalTitle: 'cells-bottom-modal-spherica cells-card-advice-spherica div cells-heading',
                modalTitleIcon: 'cells-bottom-modal-spherica .title-icon',
                modalText: 'cells-bottom-modal-spherica cells-card-advice-spherica #text',
                listTitle: 'cells-bottom-modal-spherica cells-text-description-spherica',
                list: 'cells-bottom-modal-spherica .list-container',
                findAtmBtn: 'cells-operations-list-spherica button',
                primaryBtn: 'cells-bottom-modal-spherica cells-st-button-spherica:first-of-type button',
                confirmButtonsComponent: {
                    component: {
                        ComponentClass: CellsConfirmButtonsSpherica
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
            web: 'cells-modal-card-advice-spherica',
        };
    }

    async selectPrimaryButton() {
        await this.primaryBtn.waitForClickable({timeout: config.wait.M});
        await this.primaryBtn.click();
    }

}
