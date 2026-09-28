import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import BbvaHeaderMain from '../../components/bbva-header-main';

@page()
class DeferredSignaturePurchaseInstruction extends AbstractGlomoPage {
    constructor(){
        const detailPage = '[data-tag-name="bbva-multistep-deferred-signature"] [data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]#stepTermsAndConditions div.expandable-step-content';
        super({
            root: '#cells-template-deferredSignaturePurchaseInstruction[state="active"]',
            elements: {
                bbvaHeaderMainSection: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: `${BbvaHeaderMain._baseRoot}`,
                        },
                    },
                },
                //Purchase instruction screen
                checkboxOne: `${detailPage} [data-tag-name="bbva-form-checkbox"]#bbva-form-checkbox-TXT0 div.container .box`,
                checkboxTwo: `${detailPage} div.list-check [data-tag-name="bbva-form-checkbox"]#bbva-form-checkbox-TXT1 div.container .box`,
                continueButton: `${detailPage} .continue-button [data-tag-name="bbva-button-default"]#stepTermsAndConditionsBtn`,
                confirmButton: '[data-tag-name="bbva-panel-button-fixed"] [data-tag-name="bbva-button-default"]',
                //Expired screen
                titleExpired: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-text"].title',
                descriptionExpired: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-text"].description',
                footerBtnExpired: '[data-tag-name="bbva-help-modal"] div div.content section div div.modal-main div.modal-footer slot div [data-tag-name="bbva-button-default"]',
                //common error
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            acceptBtn: '#acceptButton',
                        },
                    }
                ],
            },
            requiredElements: [
                'bbvaHeaderMainSection',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await (await this.bbvaHeaderMainSection.text.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expired header':
                await (await this.bbvaHeaderMainSection.text.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expired header button':
                await (await this.bbvaHeaderMainSection.buttonRightPrimary.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'expired title':
                await this.titleExpired.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expired description':
                await this.descriptionExpired.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expired footer button':
                await this.footerBtnExpired.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error title':
                await (this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'error text':
                await (this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'exit button':
                await (this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'continue button':
                await (this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
    async interactWithElement() {
        await (await (await this.checkboxOne.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L})).click();
        await (await (await this.checkboxTwo.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L})).click();
    }

    async completeResume() {
        await (await this.continueButton.waitForDisplayed()).click();
    }
    
    async completeProcess() {
        await this.interactWithElement();
        await this.completeResume();
        await (await this.confirmButton.waitForDisplayed()).click();
    }

    async exitPurchaseInstruction() {
        await (await (await this.bbvaHeaderMainSection.buttonRightPrimary.elements()).value[0].waitForDisplayed()).click();
    }
}
export default new DeferredSignaturePurchaseInstruction();
