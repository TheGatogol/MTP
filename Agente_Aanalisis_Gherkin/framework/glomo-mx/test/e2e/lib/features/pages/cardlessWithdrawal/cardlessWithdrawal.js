import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
class CardlessWithdrawal extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'CardlessWithdrawal',
            root: '#cells-template-cardlessWithdrawal[state="active"]',
            elements:{

                titlePage: 'cells-molecule-header div.main-container #titleZone',
                closeButton: 'cells-molecule-header div.right-container button#btnRight',
                buttonExit: '#cells-template-cardlessWithdrawalReview cells-successful-response #primaryBtn',
                viewCommerce: '#cardless-withdrawal-amount #cellsEnterLimitedAmount cells-icon-message cells-st-link',
                description: '[text="bbva-widget-cardless-with-drawal-commerce-qr-content-text"]',
                bulletsList: '[data-tag-name="bbva-list-bullet"]',
                amountList: '[data-tag-name="bbva-notification-help"]',
                dialogOperations: [
                    GlomoAlertManager
                ],

                //Withdrawal account section
                accountOriginBlock: 'cells-step-product-selector#cardless-withdrawal-origin',
                accountViewMoreButton: 'cells-step-product-selector#cardless-withdrawal-origin cells-product-selector button#viewMore',
                accountBlockSingleAccount: 'cells-step-product-selector#cardless-withdrawal-origin[collapsed]',
                accountSelected: 'cells-product-item[data-id="__ID__"]',
                insuficentBalanceMessage: 'cells-product-item div.text-info--warning',

                //Amounts to withdraw section
                withdrawalImportBlock: 'cells-step-enter-amount#cardless-withdrawal-amount',
                myAmount: 'cells-molecule-amount-group ul li.list__item button[aria-label="100 "]',
                firstAmount: 'cells-molecule-amount-group ul li.list__item button[aria-label="100 "]',
                limitImportSection: 'cells-enter-limited-amount#cellsEnterLimitedAmount',
                concept: 'cells-molecule-input div.field-icons-wrapper input#input',
                continueButton: 'cells-step-concept cells-st-button#continueBtn button',
                summaryButton: 'cells-operation-summary cells-summary-view cells-st-button.primary button',
                continueAmount: '#cardless-withdrawal-amount #cellsEnterLimitedAmount #enterAmountBtn',
                buttonChangeConcept:'#cardless-withdrawal-concept #stepContainer #changeBtn button',
                anotherAmount:'#cardless-withdrawal-amount #cellsEnterLimitedAmount #enterAmountInput #input',
                buttonchangeAmount:'#cardless-withdrawal-amount #stepContainer #changeBtn button ',
                backButton: 'cells-molecule-header #btnRight',
                signConnector: CellsSignOperationModalSpherica

            },
            elementsSpherica: {
                titlePage: 'cells-molecule-header-spherica div.main-container #titleZone',
                closeButton: 'cells-molecule-header-spherica div.primary-group button#btnRight',
                buttonExit: '#cells-template-cardlessWithdrawalReview cells-successful-response-spherica #primaryBtn',
                viewCommerce: '#cardless-withdrawal-amount #cellsEnterLimitedAmount cells-icon-message-spherica cells-st-link-spherica',
                description: '#modal-commerce-info > div:nth-child(1) > div',
                bulletsList: '[data-tag-name="bbva-list-bullet"]',
                amountList: '[data-tag-name="bbva-notification-help"]',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                ],
                //Withdrawal account section
                accountOriginBlock: 'cells-step-product-selector-spherica#cardless-withdrawal-origin',
                accountViewMoreButton: 'cells-step-product-selector-spherica#cardless-withdrawal-origin cells-product-selector-spherica button#viewMore',
                accountBlockSingleAccount: 'cells-step-product-selector-spherica#cardless-withdrawal-origin[collapsed]',
                accountSelected: 'cells-product-item-spherica[data-id="__ID__"]',
                insuficentBalanceMessage: 'cells-product-item-spherica div.text-info--error',
                //Amounts to withdraw section
                withdrawalImportBlock: 'cells-step-enter-amount-spherica#cardless-withdrawal-amount',
                myAmount: 'cells-molecule-amount-group-spherica ul li.list__item button[aria-label="100 "]',
                firstAmount: 'cells-molecule-amount-group-spherica ul li.list__item button[aria-label="100 "]',
                limitImportSection: 'cells-enter-limited-amount-spherica#cellsEnterLimitedAmount',
                concept: 'cells-molecule-input-spherica div.field-icons-wrapper input#input',
                continueButton: 'cells-step-concept-spherica cells-st-button-spherica#continueBtn button',
                summaryButton: 'cells-operation-summary-spherica cells-summary-view-spherica cells-st-button-spherica.positive button',
                buttonChangeConcept:'#cardless-withdrawal-concept-spherica #stepContainer #changeBtn button',
                buttonchangeAmount:'#cardless-withdrawal-amount-spherica #stepContainer #changeBtn button ',
                backButton: 'cells-molecule-header-spherica #btnRight',
            },
            defaultSphericaElements: [
                'GlomoAlertManager',
            ],
            requiredElements: [
                'accountOriginBlock',
            ],
        });
    }

    async _screenValidation({item} = {}) {

        switch (item) {
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.titlePage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view more accounts':
                await this.accountViewMoreButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'single product':
                await (await this.accountBlockSingleAccount.scrollIntoView())
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account origin':
                await this.accountOriginBlock.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal import':
                await this.withdrawalImportBlock.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call bbva button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limit import':
                await this.limitImportSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount button disabled':
                await this.firstAmount.waitForDisplayed({timeout: config.wait.L});
                await this.firstAmount.isDisabled();
                break;
            case 'insuficent balance message':
                await this.insuficentBalanceMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount list':
                await this.amountList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bullet list':
                await this.bulletsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info list':
                await this.infoList.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }
    }
    async accessCommerce(){
        await this.viewCommerce.waitForClickable({timeout: config.wait.L});
        await this.viewCommerce.click();
    }

    async selectAmount(){
        await this.closeOnBoardingModal();
        await this.myAmount.waitForDisplayed({timeout: config.wait.L});
        await this.myAmount.waitForAnimation({timeout: config.wait.L});
        await this.myAmount.waitForClickable({timeout: config.wait.L});
        await this.myAmount.click();
    }
    async closeOnBoardingModal(){
        await this.isModalPresent();
        await this.closeDialog();
    }
    async entersConcept(){
        await this.concept.waitForDisplayed({timeout: config.wait.L});
        await this.concept.waitForAnimation({timeout: config.wait.L});
        await this.concept.waitForEnabled({timeout: config.wait.L});
        await this.concept.setValue({value: 'Sin concepto'});
    }
    async confirmConcept(){
        await this.continueButton.waitForDisplayed({timeout: config.wait.L});
        await this.continueButton.waitForAnimation({timeout: config.wait.L});
        await this.continueButton.waitForClickable({timeout: config.wait.L});
        await this.continueButton.click({useActions: true});
    }
    async continueWithOperation(){
        await this.summaryButton.waitForDisplayed({timeout: config.wait.L});
        await this.summaryButton.waitForAnimation({timeout: config.wait.L});
        await this.summaryButton.waitForClickable({timeout: config.wait.L});
        await this.summaryButton.click();
    }
    async continueWithOTP(){
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(32671741);
        await this.signConnector.confirmPassword();
    }
    async analyticsContinueWithOTP(){
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(57559704);
        await this.signConnector.confirmPassword();
    }
    async checkErrorModal(){
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(21978528);
        await this.signConnector.confirmPassword();
        await this.dialogOperations.waitForDisplayed({timeout: config.wait.L});
    }

    async entersOtherImport(){
        await this.anotherAmount.waitForDisplayed({timeout: config.wait.L});
        await this.anotherAmount.setValue({value: '2000'});
        await this.continueAmount.waitForClickable({timeout: config.wait.L});
        await this.continueAmount.click();
    }
    async selectAnAmount(amount){
        switch (amount.toLowerCase()) {
            case 'limit amount account':
                await this.anotherAmount.waitForDisplayed({timeout: config.wait.L});
                await this.anotherAmount.setValue({value: '10000'});
                break;
            case 'insufficient amount account':
                await this.insuficentBalanceMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new Error(`[ERR] [ATMLOCATOR] The atm type ${amount} is unknown. Cannot find atm type.`);
        }
    }
    async closeOption(){
        await this.closeButton.waitForClickable({timeout: config.wait.L});
        await this.closeButton.click();
    }
    async continueProcess(){
        await this.dialogOperations.confirmDialog({isConfirmed: false});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }
    async changeConcept(){
        await this.buttonChangeConcept.waitForClickable({timeout: config.wait.L});
        await this.buttonChangeConcept.click();
        await this.concept.waitForDisplayed({timeout: config.wait.L});
        await this.concept.setValue({value: 'Pago'});
    }
    async changeAmount(){
        await this.buttonchangeAmount.waitForClickable({timeout: config.wait.L});
        await this.buttonchangeAmount.click();
        await this.anotherAmount.waitForDisplayed({timeout: config.wait.L});
        await this.anotherAmount.setValue({value: '1000'});
        await this.continueAmount.waitForClickable({timeout: config.wait.L});
        await this.continueAmount.click();
    }
    async cancelOperation(){
        await this.backButton.waitForClickable({timeout: config.wait.L});
        await this.backButton.click();
    }
    async closeScreenToken(){
        await this.dialogOperations.confirmDialog();
    }
    async closeScreenOTP(){
        await this.signModal.closeModal();
    }
    async selectAccount() {
        const accountSelected = await this.accountSelected.specifySelector({placeholder: '__ID__', value: global.user.accountSelectedId});
        await accountSelected.waitForDisplayed();
        await accountSelected.click();
    }
    async fillMultistep() {
        await this.selectAccount();
        await this.entersOtherImport();
        await this.confirmConcept();
        await this.continueWithOperation();
    }

}

export default new CardlessWithdrawal();
