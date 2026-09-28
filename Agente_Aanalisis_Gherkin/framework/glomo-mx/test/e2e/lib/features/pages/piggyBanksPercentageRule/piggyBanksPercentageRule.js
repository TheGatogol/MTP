import AbstractGlomoPage from '../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('piggyBanksPercentageRule')
class PiggyBanksPercentageRule extends AbstractGlomoPage {
    constructor(){
        super({
            root:'#cells-template-piggyBanksPercentageRule[state="active"]',
            elements: {
                onboarding: '[data-id="onboarding"]',
                begin: '[data-id="onboarding"] [data-tag-name="bbva-button-default"]',
                modalsContainer: {
                    properties: {
                        root: {
                            web: '.__modals-container',
                            isWithoutRoot: true
                        }
                    },
                    multistep: [
                        BbvaHelpModal,
                        {
                            modifiers: '[data-id="multistep"][visible]',
                            additionalElements: {
                                card: '[data-tag-name="bbva-form-control-input"][value="__ID__"]',
                                continue: '[step="1"] [fullwidth]',
                                confirm: '#confirm-button'
                            }
                        }
                    ],
                    piggyBankPercentageRuleSuccess: [
                        BbvaHelpModal,
                        {
                            modifiers: '[data-id="modalSuccess"][visible]',
                            additionalElements:{
                                header: '[data-tag-name="bbva-header-main"]',
                                close: '#btn-close',
                                successIcon: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-clip-box"]',
                                title: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-type-text"]',
                                amount: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-type-amount"]',
                                container: '.cardContainer',
                                notificationMessage: '[data-tag-name="bbva-notification-message"]',
                            }
                        }
                    ]
                }
            },
            requiredElements: ['onboarding'],
        });
    }

    async closeOnboarding() {
        await (await this.begin.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectTdc() {
        await (await (await this.modalsContainer.multistep.additionalElements.card.specifySelector({placeholder: '__ID__', value: global.user.card}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async nextStep() {
        await (await this.modalsContainer.multistep.additionalElements.continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async completeMultistep() {
        await this.closeOnboarding();
        await this.selectTdc();
    }

    async showSummary(step) {
        if(step === 'reviews'){
            await this.completeMultistep();
        }
        await this.nextStep();
    }

    async confirmCreation() {
        await (await this.modalsContainer.multistep.additionalElements.confirm.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async completeCreationRule() {
        await this.showSummary('reviews');
        await this.confirmCreation();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'success header':
                await this.modalsContainer.piggyBankPercentageRuleSuccess.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;    
            case 'success exit button':
                await this.modalsContainer.piggyBankPercentageRuleSuccess.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success checkmark':
                await this.modalsContainer.piggyBankPercentageRuleSuccess.additionalElements.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.modalsContainer.piggyBankPercentageRuleSuccess.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success amount':
                await this.modalsContainer.piggyBankPercentageRuleSuccess.additionalElements.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success container':
                await this.modalsContainer.piggyBankPercentageRuleSuccess.additionalElements.container.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success notification':
                await this.modalsContainer.piggyBankPercentageRuleSuccess.additionalElements.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new PiggyBanksPercentageRule();
