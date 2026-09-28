import {ScreenValidationKeyNotFound, page, Element} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsInputSlider from '../../components/cells-input-slider';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page('DepositHiring')
class DepositHiring extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-depositHiring[state="active"]',
            elements: {
                header:  CellsMoleculeHeader,
                slider: CellsInputSlider,
                uniquePromotion: 'p cells-st-button button iron-icon',
                btnHelpGat: 'cells-atom-icon.additional-tax-icon',
                nominalGatTax: '.create-imposition :nth-child(11) .additional-tax-icon',
                realGatTax: '.create-imposition :nth-child(12) .additional-tax-icon',
                btnContainter: 'div.buttons-container',
                btnSimulation: '#deposits-next-button',
                couponContainer: 'cells-step-deposits-offer-page #stepContainer div:nth-child(1) main div.offer__input-amount glomo-button-list cells-st-button',
                couponTitle: 'cells-step-deposits-offer-page #stepContainer div:nth-child(1) main div.offer__input-amount glomo-button-list cells-st-button button span b.title',
                couponDescription: 'cells-step-deposits-offer-page #stepContainer div:nth-child(1) main div.offer__input-amount glomo-button-list cells-st-button button span span.text',
                couponInfo: 'cells-step-deposits-offer-page #stepContainer div:nth-child(1) main div.offer__input-amount glomo-button-list cells-st-button button span span.more-info',
                couponImg: 'cells-st-button button div',
                viewMore: '#viewMore',
                investAmount: '#label div.content-input input',
                productItem: 'cells-step-product-selector cells-step div div cells-molecule-actions cells-st-button button#primaryButton',
                radioRenovation: 'stepContainer cells-radio-group cells-radio-button-description div div cells-radio-button div div#radio',
                btnIntructionContinueProcess: '#continueButton',
                btnTermsContinueProcess: '#deposit-hiring-checklist-contract cells-st-button.secondary',
                firstRadioBtn: 'cells-step-radio-buttons #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description:nth-child(1) div div cells-radio-button #radio',
                firstInfoBtn: 'cells-radio-button-description[data-selector="radio_button_0"] .cells-radio-button-description-title-container__row cells-atom-icon',
                secondRadioBtn: 'cells-step-radio-buttons #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description:nth-child(3) div div cells-radio-button #radio',
                secondInfoBtn: 'cells-radio-button-description[data-selector="radio_button_1"] .cells-radio-button-description-title-container__row cells-atom-icon',
                thirdRadioBtn: 'cells-step-radio-buttons #stepContainer div:nth-child(2) div cells-radio-group cells-radio-button-description:nth-child(5) div div cells-radio-button #radio',
                thirdInfoBtn: 'cells-radio-button-description[data-selector="radio_button_2"] .cells-radio-button-description-title-container__row cells-atom-icon',
                checkListItems: '#checklistStepContainer div:nth-child(2) div main section.checkbox-list-section cells-checkbox-button',
                btnContinueotp: 'cells-summary-view.aqua-dark-button #collapser cells-st-button.primary.size-m.cells-summary-view--submit-button',
                offerStartBtn: '#step-funds-hiring-offer #next-button:not([disabled])',
                helpMessage: '#step-input-message-limited-amount #enterAmountInput #label',
                iconBox: 'cells-image-text-amount-cover img',
                labelMoney: '#step-input-message-limited-amount #enterAmountInput cells-icon-message',
                outOfTimeText: '#deposit-hiring-checklist-contract #checklistStepContainer div:nth-child(1) div cells-icon-message #notInline',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        paragraphElements:{
                            iconHeader: 'cells-atom-icon',
                            information: 'p.paragraph-template-text'
                        },
                        additionalElements:{
                            contentTitle: '#modal header',
                            iconHelp: '#modal div.icon-container',
                            modalHeader: '#modal h1'
                        }
                    }
                ],
                stickyCallMeBack: 'cells-sticky-container > cells-st-button.link',
                stickySummary: 'cells-sticky-container cells-summary-view',
                buttonTooltip: 'cells-molecule-header #tooltipContent > button',
                telephoneIcon: 'cells-molecule-header button#btnRightSecondary',
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async uniquePromotionModal() {
        await this.uniquePromotion.scrollIntoView({block: 'start'});
        await this.uniquePromotion.click();
    }

    async nominalGatModal() {
        await this.nominalGatTax.scrollIntoView({block: 'start'});
        await this.nominalGatTax.click();
        await this.dialogOperations.confirmDialog();
    }

    async realGatModal() {
        await this.realGatTax.scrollIntoView({block: 'start'});
        await this.realGatTax.click();
        await this.dialogOperations.confirmDialog();
    }

    async accessToGatModals(){
        await this.nominalGatModal();
        await this.realGatModal();
    }

    async continueSteps() {
        await this.continueWithoutOtp();
        await this.continueDepositHiringOtp();
    }

    async continueWithoutOtp() {
        await this.continueSimulate();
        await this.continueProductSelector();
        await this.continueInstruction();
        await this.continueTermsConditions();
    }

    async continueStepInstruction() {
        await this.continueSimulate();
        await this.continueProductSelector();
    }

    async continueStepTerms() {
        await this.continueSimulate();
        await this.continueProductSelector();
        await this.continueInstruction();
    }

    async daysSlider(sliderValue) {
        await this.slider.waitForDisplayed({timeout: config.wait.M});
        await this.slider.selectSliderValue(sliderValue);
    }

    async continueSimulate() {
        await this.investAmount.waitForDisplayed({timeout: config.wait.L});
        await this.investAmount.scrollIntoView({block: 'start'});
        await this.investAmount.click();
        await this.couponContainer.click();
        await this.daysSlider('3');
        await this.btnSimulation.scrollIntoView({block: 'start'});
        await this.btnSimulation.click();
    }

    async viewCoupon() {
        await this.couponContainer.waitForDisplayed({timeout: config.wait.M});
        await this.couponContainer.scrollIntoView({block: 'start'});
    }

    async couponNotDisplay() {
        await this.investAmount.waitForDisplayed({timeout: config.wait.M});
        await this.investAmount.scrollIntoView({block: 'start'});
        await this.couponContainer.waitForNotDisplayed({timeout: config.wait.M});
    }

    async continueProductSelector() {
        await this.productItem.scrollIntoView({block: 'start'});
        await this.productItem.waitForDisplayed({timeout: config.wait.M});
        await this.productItem.click();
    }

    async continueInstruction() {
        await this.btnIntructionContinueProcess.scrollIntoView({block: 'start'});
        await this.btnIntructionContinueProcess.waitForDisplayed({timeout: config.wait.M});
        await this.btnIntructionContinueProcess.click();
    }

    async goesToInstructions() {
        await this.continueSimulate();
        await this.continueProductSelector();
    }

    async continueInvestmentRenewalWithEarningsModal() {
        await this.firstInfoBtn.scrollIntoView({block: 'start'});
        await this.firstInfoBtn.click();
        await this.dialogOperations.confirmDialog();
    }

    async continueInvestmentRenewalWithoutEarningsModal() {
        await this.secondInfoBtn.scrollIntoView({block: 'start'});
        await this.secondInfoBtn.click();
        await this.dialogOperations.confirmDialog();
    }

    async continueNoAutomaticRenewalModal() {
        await this.thirdInfoBtn.scrollIntoView({block: 'start'});
        await this.thirdInfoBtn.click();
        await this.dialogOperations.confirmDialog();
    }

    async accessesToInstructionModal() {
        await this.continueInvestmentRenewalWithEarningsModal();
        await this.continueInvestmentRenewalWithoutEarningsModal();
        await this.continueNoAutomaticRenewalModal();
    }

    async investmentRenewalWithEarningsOption() {
        await this.firstRadioBtn.waitForDisplayed({timeout: config.wait.M});
        await this.firstRadioBtn.scrollIntoView({block: 'start'});
        await this.firstRadioBtn.click();
    }

    async investmentRenewalWithoutEarningsOption() {
        await this.secondRadioBtn.waitForDisplayed({timeout: config.wait.M});
        await this.secondRadioBtn.scrollIntoView({block: 'start'});
        await this.secondRadioBtn.click();
    }

    async noAutomaticRenewalOption() {
        await this.thirdRadioBtn.waitForDisplayed({timeout: config.wait.M});
        await this.thirdRadioBtn.scrollIntoView({block: 'start'});
        await this.thirdRadioBtn.click();
    }

    async accessesToInstructionOption() {
        await this.investmentRenewalWithEarningsOption();
        await this.investmentRenewalWithoutEarningsOption();
        await this.noAutomaticRenewalOption();
    }

    async continueTermsConditions() {
        await this.checkListItems.waitForDisplayed({timeout: config.wait.M});
        await this.checkListItems.scrollIntoView({block: 'start'});
        const checkList = await (new Element({
            selector: this.checkListItems,
            _container: this,
        })).elements();
        for (const itemSelector of checkList.value) {
            const checkbox = new Element({
                selector: itemSelector,
                _container: this,
            });
            await checkbox.click();
        }
        await this.btnTermsContinueProcess.scrollIntoView({block: 'start'});
        await this.btnTermsContinueProcess.waitForClickable({timeout: config.wait.L});
        await this.btnTermsContinueProcess.click();
    }

    async continueDepositHiringOtp() {
        await this.btnContinueotp.waitForClickable({timeout: config.wait.L});
        await this.btnContinueotp.click();
    }

    async fillOtp(code = '41955491') {
        await super.fillOtp(code);
    }

    async continueModalError(otp = '11111111') {
        await this.fillOtp(otp);
    }

    async accessToCallMeBack(access) {
        switch (access) {
            case 'link':
                await this.stickyCallMeBack.waitForClickable({timeout: config.wait.M});
                await this.stickyCallMeBack.click();
                break;
            case 'header':
                await this.telephoneIcon.waitForClickable({timeout: config.wait.L});
                await this.telephoneIcon.click();
                break;
            default:
                throw new Error(`The access '${access}' not found.`);
        }
    }

    async closeTooltip() {
        await this.buttonTooltip.waitForClickable({timeout: config.wait.M});
        await this.buttonTooltip.click();
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.dialogOperations.additionalElements.contentTitle.waitForDisplayed();
                break;
            case 'icon help':
                await this.dialogOperations.additionalElements.iconHelp.waitForDisplayed();
                break;
            case 'information':
                await this.dialogOperations.paragraphElements.information.waitForDisplayed();
                break;
            case 'close button':
                await this.dialogOperations.closeBtn.waitForDisplayed();
                break;
            case 'modal header':
                await this.dialogOperations.additionalElements.modalHeader.waitForDisplayed();
                break;
            case 'container icon':
                await this.dialogOperations.containerIcon.waitForDisplayed();
                break;
            case 'descriptions':
                await this.dialogOperations.descriptions.waitForDisplayed();
                break;
            case 'titles':
                await this.dialogOperations.titles.waitForDisplayed();
                break;
            case 'bullets list':
                await this.dialogOperations.bulletsList.waitForDisplayed();
                break;
            case 'accept button':
                await this.dialogOperations.acceptBtn.waitForDisplayed();
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'telephone icon':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'start process button':
                await this.offerStartBtn.scrollIntoView({block: 'start'});
                await this.offerStartBtn.waitForClickable({timeout: config.wait.L});
                break;
            case 'coupon image':
                await this.couponImg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'coupon title':
                await this.couponTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'coupon description':
                await this.couponDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'coupon info':
                await this.couponInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'out of time text':
                await this.outOfTimeText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info investment':
                await this.firstInfoBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.btnIntructionContinueProcess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'nominal gat':
                await this.nominalGatTax.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'real gat':
                await this.realGatTax.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sticky button':
                if(value === 'call x person') {
                    await this.stickyCallMeBack.waitForText({text:'Quiero llamar a un asesor personal', exactMatch:false});
                } else {
                    await this.stickyCallMeBack.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'sticky summary':
                await this.stickySummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help message':
                await this.helpMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon safe':
                await this.iconBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'money label':
                await this.labelMoney.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new DepositHiring();
