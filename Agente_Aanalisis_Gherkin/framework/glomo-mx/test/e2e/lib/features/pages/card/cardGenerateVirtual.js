import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsCheckboxButton from '../../components/cells-checkbox-button';
import CellsConfirmButtons from '../../components/cells-confirm-buttons';
import CellsShapInfoPage from '../../components/cells-shap-info-page';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsCheckboxButtonSpherica from '../../components/cells-check-boxbutton-spherica';
import CellsConfirmButtonsSpherica from '../../components/cells-confirm-buttons-spherica';
import CellsShapInfoPageSpherica from '../../components/cells-shap-info-page-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
@page()
class CardGenerateVirtual extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardGenerateVirtual[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                generateVirtualCardTitle: 'div.wrapper .title',
                description: 'cells-lists ul .listItem',
                checkboxButton: CellsCheckboxButton,
                shapInfoPage: CellsShapInfoPage,
                confirmButton: CellsConfirmButtons
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                description: 'cells-lists-spherica ul .listItem',
                shapInfoPage: CellsShapInfoPageSpherica,
                checkboxButton: CellsCheckboxButtonSpherica,
                confirmButton: CellsConfirmButtonsSpherica,
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                ],
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async confirmAccessDigitalCard() {
        await this.shapInfoPage.image.waitForDisplayed({ timeout: config.wait.L });
        await this.generateVirtualCardTitle.waitForDisplayed({ timeout: config.wait.L });
        await this.description.waitForDisplayed({ timeout: config.wait.L });
        await this.checkboxButton.buttonContainer.waitForDisplayed({ timeout: config.wait.M });
        await this.checkboxButton.checkBoxContainer.click();
        await this.checkboxButton.description.waitForDisplayed({ timeout: config.wait.L });
        await this.confirmButton.confirmAction();
    }

    async retryAccess(times) {
        if (times === 'max') {
            times = 3;
            for (let p = 0; p < times; p++) {
                await this.dialogOperations.confirmDialog({ isConfirmed: true, expectToDisappear: false });
                await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M });
            }
        } else {
            await this.dialogOperations.confirmDialog({ isConfirmed: true });
            await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M });
        }
    }

    async _modalElementValidation({ item, ...args } = {}) {
        switch (item.toLowerCase()) {
            case 'understood button':
                await this.dialogOperations.elementValidation({ item: this.dialogOperations.ACCEPT_BUTTON }, { forceScroll: true });
                break;
            default:
                await super._modalElementValidation({ item, ...args });
        }
    }

    async _screenValidation({ item } = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'title':
                await this.header.operativeTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'back button':
                await this.header.primaryBtn.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'description':
                await this.description.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'imagin header':
                await this.shapInfoPage.image.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text header':
                await this.shapInfoPage.title.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'digital button':
                await this.confirmButton.canConfirm({ timeout: config.wait.M, reverse: true });
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    message: `Element ${item} IS NOT DEFINED for [ORANGE CARD PRODUCT DETAIL]`,
                    key: item,
                    args: arguments[0]
                });
        }
    }

    async exitScreen() {
        const targetBtn = this.isSpherica() ? this.header.secondaryBtn : this.header.primaryBtn;

        await (await (await targetBtn.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M }))
            .click();
    }

}

export default new CardGenerateVirtual();
