import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('SelfDrivenRoundUp')
class SelfDrivenRoundUp extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-selfDrivenRoundUp[state="active"]',
            elements: {
                selfDrivenRoundUp: {
                    properties: {
                        root: '[data-tag-name="self-driven-round-up-mx"] [data-tag-name="self-driven-round-up-mx-modal-content"]'
                    },
                    moreInfo: '[data-tag-name="self-driven-round-up-mx-panel-info"] [data-tag-name="bbva-type-link"][text="Más información"]',
                    selectorCard: '[data-tag-name="selector-card"] [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]:nth-of-type(1)',
                    selectorCardChecked: '[data-tag-name="selector-card"] [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][aria-checked="true"]',
                    roundingRule: '[data-tag-name="bbva-tab-default"] [data-tag-name="bbva-form-control-input"][value="10"]:nth-of-type(1)',
                    percentageSelector: '[data-tag-name="bbva-tab-default"] #tab-1',
                    percentageRule: '[data-tag-name="bbva-tab-default"] [data-tag-name="bbva-form-control-input"][value="5"]',
                    create: '[data-tag-name="bbva-button-default"][text="Activar aportación"][tabindex="0"]',
                    save: '[data-tag-name="bbva-button-default"][text*="Guardar" i]',
                },
                modalsContainer: {
                    properties: {
                        root: {
                            web: '.__modals-container',
                            isWithoutRoot: true
                        }
                    },
                    successModal: [BbvaHelpModal, { modifiers: '#finishRuleModal',
                        additionalElements: {
                            summary: '[role="list"]',
                            notificationMessage: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-text"]',
                            textModalityRule: '[data-tag-name="self-driven-round-up-mx-list-simple"]:nth-of-type(1) [data-tag-name="bbva-type-text"]:nth-of-type(2)',
                            buttonEdit: '[data-tag-name="bbva-button-default"]',
                            buttonClose: '.modal-footer [data-tag-name="bbva-button-default"]',
                            image: '[data-tag-name="self-driven-round-up-mx-panel-process"] [data-tag-name="bbva-clip-box"]',
                            title: '[data-tag-name="self-driven-round-up-mx-panel-process"] [data-tag-name="bbva-type-text"]',
                        }
                    }],
                    moreInfoModal: [BbvaHelpModal, {modifiers: '#initialRuleModal',
                        additionalElements: {
                            icon: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                            image: '#helpModalTitle [data-tag-name="bbva-clip-microillustration"]',
                            title: '#helpModalTitle [data-tag-name="bbva-type-text"]',
                            purchasesContributionAccordion: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(1)',
                            periodicContributionAccordion: '[data-tag-name="bbva-expandable-accordion"]:nth-of-type(2)',
                        }
                    }],
                    confirmationModal: [BbvaHelpModal, {modifiers: '#adviceEditModal',
                        additionalElements: {
                            confirmButton: '[data-tag-name="bbva-button-default"][text="Activar aportación"]'
                        }
                    }],
                },
            },
            requiredElements: ['selfDrivenRoundUp']
        });
    }

    async moreInfo() {
        await (await (await this.selfDrivenRoundUp.moreInfo.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async createRule() {
        await (await (await (await this.selfDrivenRoundUp.selectorCard.specifySelector({placeholder: '__ID__', value: global.user.principalAccount.number}))
            .scrollIntoView())
            .waitForExist({timeout: config.wait.M}))
            .click();
        await (await (await (await this.selfDrivenRoundUp.roundingRule.scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await (await this.selfDrivenRoundUp.create.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await (await this.modalsContainer.confirmationModal.additionalElements.confirmButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async createRuleByRule(rule) {
        await (await (await (await this.selfDrivenRoundUp.selectorCard.specifySelector({placeholder: '__ID__', value: global.user.principalAccount.number}))
            .scrollIntoView())
            .waitForExist({timeout: config.wait.M}))
            .click();
        if (rule === 'percentage') {
            await (await (await (await this.selfDrivenRoundUp.percentageSelector.scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
            await (await (await (await this.selfDrivenRoundUp.percentageRule.scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        } else {
            await (await (await (await this.selfDrivenRoundUp.roundingRule.scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
        await (await (await this.selfDrivenRoundUp.create.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await (await this.modalsContainer.confirmationModal.additionalElements.confirmButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async editRule(rule) {
        if (rule === 'percentage') {
            await (await (await (await this.selfDrivenRoundUp.percentageSelector.scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
            await (await (await (await this.selfDrivenRoundUp.percentageRule.scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        } else {
            await (await (await (await this.selfDrivenRoundUp.roundingRule.scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
        await (await (await (await this.selfDrivenRoundUp.save.scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async closeRules() {
        await (await this.modalsContainer.successModal.additionalElements.buttonClose.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'success header':
                await this.modalsContainer.successModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success microilustration':
                await this.modalsContainer.successModal.additionalElements.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.modalsContainer.successModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success summary':
                await this.modalsContainer.successModal.additionalElements.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success notification message':
                await this.modalsContainer.successModal.additionalElements.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success close button':
                await this.modalsContainer.successModal.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success edit button':
                await this.modalsContainer.successModal.additionalElements.buttonEdit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info header':
                await this.modalsContainer.moreInfoModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info microilustration':
                await this.modalsContainer.moreInfoModal.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info title':
                await this.modalsContainer.moreInfoModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchases contribution accordion':
                await this.modalsContainer.moreInfoModal.additionalElements.purchasesContributionAccordion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'periodic contribution accordion':
                await this.modalsContainer.moreInfoModal.additionalElements.periodicContributionAccordion.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new SelfDrivenRoundUp();
