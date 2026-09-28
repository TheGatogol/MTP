import AbstractGlomoComponent from './abstract-glomo-component';
import CellsConfirmButtons from './cells-confirm-buttons';

export default class GlomoFileUploader extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'glomo-file-uploader',
            elements: {
                frontFileDescription: '.container p.container__title:nth-child(1)',
                frontFileLink: '.container .link button#front-camera',
                frontHelpIcon: '.container #infoFrontTooltipButton',
                backFileDescription: '.container p.container__title:nth-child(1)',
                backFileLink: '.container .link button#back-camera',
                backHelpIcon: '.container #infoBackTooltipButton',
                buttons: {
                    component: {
                        ComponentClass: CellsConfirmButtons
                    }
                }
            },
            requiredElements: [
                'operationTitle'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'glomo-file-uploader',
        };
    }

    async uploadFrontFile() {
        await this.frontFileLink.waitForClickable();
        await this.frontFileLink.click();
    }

    async uploadBackFile() {
        await this.backFileLink.waitForClickable();
        await this.backFileLink.click();
    }

    async frontHelpIconButton() {
        await this.frontHelpIcon.waitForClickable();
        await this.frontHelpIcon.click();
    }

    async backHelpIconButton() {
        await this.backHelpIcon.waitForClickable();
        await this.backHelpIcon.click();
    }
}
