import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsMoleculeHeaderSpherica extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-molecule-header-spherica',
            elements: {
                operativeTitle: 'h1 .header__title',
                primaryBtn: '#btnLeft',
                operationTitle: 'h1#titleZone.title',
                secondaryBtn: '#btnRight',
                faqsBtn: '#btnRightSecondary',
                tooltipPopUpCloseButton: '#tooltipContent button',
                secondaryBtnLabel: '.right-container div div span'
            },
            requiredElements: [
                'operationTitle'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-molecule-header-spherica',
        };
    }

    async waitForDisplayed({isBtnRight, isBtnLeft, timeout = config.wait.L} = {}) {
        await this.operationTitle.waitForDisplayed({timeout});
        await this.operationTitle.waitForText({timeout});
        if (isBtnRight) {
            await this.secondaryBtn.waitForDisplayed({timeout});
        }
        if (isBtnLeft) {
            await this.primaryBtn.waitForDisplayed({timeout});
        }
    }

    async actionRight() {
        await this.secondaryBtn.waitForClickable({timeout: config.wait.M});
        await this.secondaryBtn.click();
    }

    async actionLeft() {
        await this.primaryBtn.waitForClickable({timeout: config.wait.M});
        await this.primaryBtn.click();
    }

    async secondaryAction() {
        await this.faqsBtn.waitForClickable({timeout: config.wait.L});
        await this.faqsBtn.click();
    }

    async closeTooltip({timeout, reverse} = {timeout: config.wait.M}) {
        await this.tooltipPopUpCloseButton.waitForDisplayed({timeout, reverse});
        await this.tooltipPopUpCloseButton.click();
    }
}
