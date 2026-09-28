import AbstractGlomoComponent from './abstract-glomo-component';
import CellsIconMessage from '../components/cells-icon-message';

export default class CellsStepConditions extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'cells-step-conditions',
            elements: {
                title: '.cells-step__header .cells-step__header-title',
                subTitle: '.full .subTitle .sub-title',
                termsAndConditionsLink: {
                    component: {
                        ComponentClass: CellsIconMessage,
                        args: {
                            root: 'cells-icon-message.terms-and-conditions.inline'
                        }
                    }
                },
                checkbox: '.accept-section #checkButton',
                checkboxSectionLabel: '.accept-section .accept-section-label',
                changeBtn: '#changeBtn button',
                continueBtn: '#continueBtn',
            },
            requiredElements: [
                'title',
            ],
        }, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-step-conditions'
        };
    }

    async confirmConditions() {
        await this.checkbox.waitForAnimation({timeout: config.wait.L});
        await this.checkbox.waitForClickable({timeout: config.wait.L});
        await this.checkbox.click();
        await this.continueBtn.waitForAnimation({timeout: config.wait.L});
        await this.continueBtn.waitForClickable({timeout: config.wait.L});
        await this.continueBtn.click();
    }

    async validateStepCollapsed() {
        await this.title.waitForText({timeout: config.wait.M});
        await this.changeBtn.waitForText({timeout: config.wait.M});
        await this.amountType.waitForText({timeout: config.wait.M});
        await this.amount.waitForText({timeout: config.wait.M});
    }

    get changeConditions() {
        return {
            click: async ({timeout = config.wait.M} = {}) => {
                await this.changeBtn.waitForClickable({timeout});
                await this.changeBtn.click();
            }
        };
    }

}
