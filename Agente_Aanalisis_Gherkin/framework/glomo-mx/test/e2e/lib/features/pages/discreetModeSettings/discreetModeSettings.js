import AbstractGlomoPage from '../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal.js';
import BbvaHeaderMain from '../../components/bbva-header-main.js';
@page('DiscreetModeSettings')
class DiscreetModeSettings extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-discreetModeSettings[state="active"]',
            elements: {
                discreetModeModal: [
                    BbvaHelpModal,
                    {
                        modifiers: '#discreetModeModal',
                        elements: {
                            header: [
                                BbvaHeaderMain, {
                                    elements: {
                                        text: '[data-tag-name="bbva-type-text"]#text',
                                        btnClose: '.header-icons.right-group .icon#btn-close'
                                    }
                                }
                            ],
                            description: '.content[slot=slot-content] [data-tag-name="bbva-type-text"].title',
                            acceptBtn: '.modal-main .modal-footer [data-tag-name="bbva-button-default"].footer-button[role=button]',
                            radioBtn: {
                                properties: { root: '[data-tag-name="bbva-form-container"]' },
                                showBalances: '[data-tag-name="bbva-form-control-input"][type=radio]#OFF',
                                hideBalances: '[data-tag-name="bbva-form-control-input"][type=radio]#ON',
                                intelligentMode: {
                                    properties: { root: '[data-tag-name="bbva-form-control-input"][type=radio]#CAMERA' },
                                    seeMoreLink: '[data-tag-name="bbva-type-text"].option-link',
                                }
                            }
                        },
                    }
                ],
                exitModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="security-settings-discreet-mode-gl-exit-modal"]#exitModal',
                        elements: {
                            header: [
                                BbvaHeaderMain, {
                                    elements: {
                                        text: '[data-tag-name="bbva-type-text"]#text',
                                    }
                                }
                            ],
                            exitBtn: '.modal-main .modal-footer [data-tag-name="bbva-button-default"].footer-button[role=button]',
                        }
                    }
                ]
            },
            requiredElements: [
                'discreetModeModal'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.discreetModeModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.discreetModeModal.header.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.discreetModeModal.header.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.discreetModeModal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show balances radio button':
                await this.discreetModeModal.radioBtn.showBalances.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hide balances radio button':
                await this.discreetModeModal.radioBtn.hideBalances.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'intelligent mode radio button':
                await this.discreetModeModal.radioBtn.intelligentMode.__root.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'see more link':
                await this.discreetModeModal.radioBtn.intelligentMode.seeMoreLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.discreetModeModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmAction() {
        await (await this.discreetModeModal.acceptBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async deactiveDiscreetMode() {
        await (await this.discreetModeModal.radioBtn.hideBalances.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async goBack() {
        await (await this.discreetModeModal.header.btnClose.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.exitModal.waitForExist({timeout: config.wait.M})).waitForDisplayed({timeout: config.wait.M});
        await (await (await this.exitModal.exitBtn.waitForDisplayed({timeout: config.wait.M})).waitForAnimation({timeout: config.wait.M})).click();
    }
}

export default new DiscreetModeSettings();
