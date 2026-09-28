import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica';

@page()
class BlockAndReplacement extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blockAndReplacement[state="active"]',
            elements: {
                headerMain: BbvaHeaderMain,
                title: '#heading bbva-text',
                closeBtn: 'button#btn-right-primary',
                subtitle: '#prefilledStep .header',
                imgCard: '#prefilledStep .completed-content',
                cardBlockingReason: {
                    properties:{root: '#blockingReasonStep'},
                    title: '.header',
                    editSection: '#editButton',
                    description: '.expandable-step-content .expandable-step-content-description',
                    theftOption: 'bbva-form-control-input',
                    lossOption: 'bbva-form-control-input[value="Extravío"]',
                    infoCardBlock: '.list-bullet-group',
                    summaryCostIva: '.expandable-step-content-description.expandable-step-description-bold.small',
                    summaryCost: '.expandable-step-summary-amount',
                    continueBtn: '#blockingReasonsButton',
                },
                cardReplacementTarget: {
                    properties:{root: '#replacementTypeStep'},
                    title: '.header',
                    editSection: '#editButton',
                    description: '.expandable-step-content-description',
                    personalizedOption: '#replacement-type-step-radio-2',
                    infoPersonalized: '#replacement-type-step-radio-2 bbva-notification-help',
                    instantOption: '#replacement-type-step-radio-1',
                    infoInstant: '#replacement-type-step-radio-1 bbva-notification-help',
                    continueBtn: '#replacementTypeButton'
                },
                cardShippingAddress: {
                    properties:{root: '#shippingAddressStep'},
                    title: '.header',
                    editSection: '#editButton',
                    personalizedCard: {
                        description: '.expandable-step-content .expandable-step-content-description',
                        myAddressOption: '#shipping-address-step-radio-1',
                        infoMyAddress: '#shipping-address-step-radio-1 bbva-notification-help',
                        questionMyAdress: '.expandable-step-custom-radio-help-icon',
                        viewAndHideDataLink: 'bbva-link',
                        addressText: '#shipping-address-step-radio-1 .expandable-step-custom-radio-address',
                        branchOption: '#shipping-address-step-radio-3',
                        infoBranch: '#shipping-address-step-radio-3 bbva-notification-help',
                        branchContent: '.placeholder',
                        chooseBranchLink: 'bbva-link',
                    },
                    instantCard:{
                        description: '.expandable-step-content .expandable-step-content-description',
                        notificationMessage: '.expandable-step-notification-message'
                    },
                    summaryAddress: '.expandable-step-summary',
                    continueBtn: '#shippingAddressButton'
                },
                termsAndConditions: {
                    properties:{root: '#termsAndConditionsStep'},
                    editSection: '#editButton',
                    title: '.header',
                    info: 'bbva-list-bullet',
                    acceptTermsAndCondition: 'bbva-form-checkbox',
                    continueBtn: '#termsAndConditionsButton',
                    summaryAccept: '.expandable-step-summary'
                },
                blockModal: {
                    properties:{root: 'bbva-panel-button-fixed'},
                    cost: '.label',
                    amount: 'bbva-type-amount',
                    iva: '.header-additional-info',
                    blockBtn: '#button'
                },
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
            elementsSpherica: {
                headerMain: BbvaHeaderMainSpherica,
                title: 'bbva-header-main-spherica bbva-type-text',
                closeBtn: 'button#btn-close',
                subtitle: '#prefilledStep .header.header-ellipsis',
                cardBlockingReason: {
                    properties:{root: '#blockingReasonStep'},
                    reasonButton: 'bbva-form-control-input[value="Robo"]',
                    descriptionCollapsed: '.completed-content'
                },
                cardShippingAddress: {
                    properties:{root: '#shippingAddressStep'},
                    reasonButton: 'bbva-form-control-input[value="Mi domicilio"]',
                    personalizedCard: {
                        myAddressOption: 'bbva-form-control-input[value="Mi domicilio"]',
                        infoMyAddress: 'bbva-form-control-input[value="Mi domicilio"] bbva-notification-help',
                        questionMyAdress: 'bbva-type-icon',
                        viewAndHideDataLink: 'bbva-type-link',
                        addressText: 'bbva-type-text',
                        branchOption: 'bbva-form-control-input[value="Sucursal BBVA"]',
                        infoBranch: 'bbva-form-control-input[value="Sucursal BBVA"] bbva-notification-help',
                        chooseBranchLink: 'bbva-type-link',
                    }
                },
                cardReplacementTarget: {
                    properties:{root: '#replacementTypeStep'},
                    reasonButton: 'bbva-form-control-input[value="Tarjeta personalizada"]',
                    descriptionCollapsed: '.completed-content',
                    personalizedOption: 'bbva-form-control-input[value="Tarjeta personalizada"]',
                    infoPersonalized: 'bbva-form-control-input[value="Tarjeta personalizada"] bbva-notification-help',
                    instantOption: 'bbva-form-control-input[value="Tarjeta instantánea"]',
                    infoInstant: 'bbva-form-control-input[value="Tarjeta instantánea"] bbva-notification-help'
                },
                blockModal: {
                    properties:{root: ''},
                    blockBtn: 'bbva-button-default#confirmButton',
                    cost:'div.confirm-step.full-width bbva-type-text:nth-child(1).center-item',
                    amount: 'bbva-type-amount.center-item'
                },
                termsAndConditions: {
                    properties:{root: '#termsAndConditionsStep'},
                    info: 'bbva-notification-message',
                    acceptTermsAndCondition: 'bbva-form-checkbox-input'
                },
            },

            requiredElements: [
                'headerMain'
            ]
        });
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.headerMain.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'block and replacement title':
                await this.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'block and replacement close button':
                await this.closeBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'block and replacement subtitle':
                this.isSpherica() ?
                    await (await this.subtitle.elements()).value[0].waitForDisplayed({timeout:config.wait.M}):
                    await this.subtitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'block and replacement image':
                await this.imgCard.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason title':
                this.isSpherica() ?
                    await (await this.cardBlockingReason.title.elements()).value[0].waitForDisplayed({timeout:config.wait.M}) :
                    await this.cardBlockingReason.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason edit section':
                this.isSpherica() ?
                    await (await this.cardBlockingReason.editSection.elements()).value[0].waitForDisplayed({timeout:config.wait.M}) :
                    await this.cardBlockingReason.editSection.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason description':
                await this.cardBlockingReason.description.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason theft option':
                await this.cardBlockingReason.theftOption.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason loss option':
                await this.cardBlockingReason.lossOption.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason info card':
                await this.cardBlockingReason.infoCardBlock.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason summary cost plus iva':
                await this.cardBlockingReason.summaryCostIva.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason summary cost':
                await this.cardBlockingReason.summaryCost.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'blocking reason continue button':
                await this.cardBlockingReason.continueBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'replacement card title':
                this.isSpherica() ?
                    await (await this.cardReplacementTarget.title.elements()).value[0].waitForDisplayed({timeout:config.wait.M}) :
                    await this.cardReplacementTarget.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'replacement card edit section':
                this.isSpherica() ?
                    await (await this.cardReplacementTarget.editSection.elements()).value[0].waitForDisplayed({timeout:config.wait.M}) :
                    await this.cardReplacementTarget.editSection.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'replacement card description':
                await this.cardReplacementTarget.description.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'replacement card personalized option':
                if(value==='checked'){
                    await this.cardReplacementTarget.personalizedOption.waitForAttribute({attribute:'aria-checked', value: 'true', timeout: config.wait.M});
                } else {
                    await this.cardReplacementTarget.personalizedOption.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'replacement card info personalized':
                await this.cardReplacementTarget.infoPersonalized.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'replacement card instant option':
                if(value==='checked'){
                    await this.cardReplacementTarget.instantOption.waitForAttribute({attribute:'aria-checked', value: 'true', timeout: config.wait.M});
                } else {
                    await this.cardReplacementTarget.instantOption.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'replacement card info instant':
                await this.cardReplacementTarget.infoInstant.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'replacement card continue button':
                await this.cardReplacementTarget.continueBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery title':
                this.isSpherica() ?
                    await (await this.cardShippingAddress.title.elements()).value[0].waitForDisplayed({timeout:config.wait.M}) :
                    await this.cardShippingAddress.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery address hidden':
                await this.cardShippingAddress.personalizedCard.addressText.waitForDisplayed({timeout: config.wait.L, reverse: value === 'hidden'});
                break;
            case 'delivery address visible':
                await this.cardShippingAddress.personalizedCard.addressText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'delivery edit section':
                this.isSpherica() ?
                    await (await this.cardShippingAddress.editSection.elements()).value[0].waitForDisplayed({timeout:config.wait.M}) :
                    await this.cardShippingAddress.editSection.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery summary':
                await this.cardShippingAddress.summaryAddress.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery continue button':
                await this.cardShippingAddress.continueBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized description':
                await this.cardShippingAddress.personalizedCard.description.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized my address':
                await this.cardShippingAddress.personalizedCard.myAddressOption.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized info':
                await this.cardShippingAddress.personalizedCard.infoMyAddress.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized question':
                await this.cardShippingAddress.personalizedCard.questionMyAdress.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized view and hide':
                await this.cardShippingAddress.personalizedCard.viewAndHideDataLink.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized branch option':
                await this.cardShippingAddress.personalizedCard.branchOption.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized info branch':
                await this.cardShippingAddress.personalizedCard.infoBranch.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized branch info':
                await this.cardShippingAddress.personalizedCard.branchContent.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card personalized choose branch':
                await this.cardShippingAddress.personalizedCard.chooseBranchLink.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card instant title':
                await this.cardShippingAddress.instantCard.description.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery card instant message':
                await this.cardShippingAddress.instantCard.notificationMessage.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'terms and conditions title':
                this.isSpherica() ?
                    await (await this.termsAndConditions.title.elements()).value[0].waitForDisplayed({timeout:config.wait.M}) :
                    await this.termsAndConditions.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'terms and conditions edit section':
                this.isSpherica() ?
                    await (await this.termsAndConditions.editSection.elements()).value[0].waitForDisplayed({timeout:config.wait.M}) :
                    await this.termsAndConditions.editSection.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'terms and conditions info':
                await this.termsAndConditions.info.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'terms and conditions accept':
                if(value==='unchecked'){
                    await this.termsAndConditions.acceptTermsAndCondition.waitForAttribute({attribute:'aria-checked', value: 'false', timeout: config.wait.M});
                } else if(value==='checked'){
                    if (this.isSpherica()) {
                        await this.termsAndConditions.acceptTermsAndCondition.waitForAttribute({attribute:'aria-disabled', value:'false', timeout: config.wait.M});
                    }
                    else {
                        await this.termsAndConditions.acceptTermsAndCondition.waitForAttribute({attribute:'aria-checked', value:'true', timeout: config.wait.M});
                    }
                } else {
                    await this.termsAndConditions.acceptTermsAndCondition.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'terms and conditions continue button':
                if(value==='disabled'){
                    await this.termsAndConditions.continueBtn.waitForAttribute({attribute:'aria-disabled', value: 'true', timeout: config.wait.M});
                } else {
                    await this.termsAndConditions.continueBtn.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'terms and conditions summary':
                await this.termsAndConditions.summaryAccept.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'block modal cost':
                await this.blockModal.cost.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'block modal amount':
                await this.blockModal.amount.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'block modal iva':
                if (!this.isSpherica()){
                    await this.blockModal.iva.waitForDisplayed({timeout:config.wait.M});
                }
                break;
            case 'block modal block button':
                await this.blockModal.blockBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page header':
                await this.signModal.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page exit button':
                await this.signModal.closeButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page image':
                await this.signModal.smsImage.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page icon':
                await this.signModal.smsIcon.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page text':
                await this.signModal.insertSmsLabel.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page input':
                await this.signModal.smsPasswordInputField.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page accept button':
                await this.signModal.smsContinueButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page cancel button':
                await this.signModal.requestNewSmsLink.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'dialog header':
                await this.dialogOperations.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'dialog icon':
                await this.dialogOperations.paragraphIcon.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'dialog text':
                await this.dialogOperations.templateParagraph.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'dialog close button':
                await this.dialogOperations.closeBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'dialog cancel button':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'dialog accept button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    setCurrentSection(section) {
        this.currentSection = section;
    }

    setCurrentSectionInfinite(section) {
        this.currentSectionInfinite = section;
    }

    async continueProcess(section = this.currentSection) {
        const sectionList = ['cardBlockingReason', 'cardReplacementTarget', 'cardShippingAddress', 'termsAndConditions', 'blockModal'];
        switch(section) {
            case 'blockModal':
                await (await this.blockModal.blockBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                if(this.isSpherica() && section !== 'termsAndConditions'){
                    await this[section].reasonButton.waitForClickable(config.wait.L);
                    await this[section].reasonButton.click();
                }
                await (await this[section].continueBtn.waitForClickable({timeout: config.wait.L})).click();
                await this.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.M
                });
                this.setCurrentSection(sectionList[sectionList.indexOf(section) + 1]);
        }
        logger.info(`Moving to section "${this.currentSection}"`);
    }

    async continueProcessInfinite(section = this.currentSectionInfinite) {
        const sectionList = ['cardBlockingReason', 'cardShippingAddress', 'termsAndConditions', 'blockModal'];
        switch(section){
            case 'blockModal':
                await (await this.blockModal.blockBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                if(this.isSpherica() && section !== 'termsAndConditions' && section !== 'cardShippingAddress'){
                    await this[section].reasonButton.waitForClickable(config.wait.L);
                    await this[section].reasonButton.click();
                }
                await (await this[section].continueBtn.waitForClickable({timeout: config.wait.L})).click();
                await this.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.M
                });
                this.setCurrentSectionInfinite(sectionList[sectionList.indexOf(section) + 1]);
        }
        logger.info(`Moving to section "${this.currentSectionInfinite}"`);
    }
    async goToselectInstantCard(){
        await (await this.cardBlockingReason.reasonButton.waitForClickable({timeout: config.wait.L})).click();
        await (await this.cardBlockingReason.continueBtn.waitForClickable({timeout: config.wait.L})).click();
        await (await this.cardReplacementTarget.instantOption.waitForClickable({timeout: config.wait.L})).click();
        await (await this.cardReplacementTarget.continueBtn.waitForClickable({timeout: config.wait.L})).click();
        await (await this.cardShippingAddress.continueBtn.waitForClickable({timeout: config.wait.L})).click();
        await this.acceptTermsAndConditions();
        await (await this.termsAndConditions.continueBtn.waitForClickable({timeout: config.wait.L})).click();
    }
    async goToSection({section}={}) {
        switch(section.toLowerCase()){
            case 'delivery address infinite':
                if(!this.currentSectionInfinite){
                    this.setCurrentSectionInfinite('cardBlockingReason');
                }
                if(this.currentSectionInfinite==='cardBlockingReason'){
                    await this.continueProcessInfinite();
                    await this.cardShippingAddress.title.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'terms and conditions infinite':
                await this.goToSection({section: 'delivery address infinite'});
                if(this.currentSectionInfinite==='cardShippingAddress'){
                    await this.continueProcessInfinite();
                    await this.termsAndConditions.title.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary infinite':
                await this.goToSection({section: 'terms and conditions infinite'});
                if (this.currentSectionInfinite==='termsAndConditions') {
                    await this.acceptTermsAndConditions();
                    await this.continueProcessInfinite();
                    await this.blockModal.cost.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'blocking reason':
                this.setCurrentSection('cardBlockingReason');
                break;
            case 'replacement':
                if(!this.currentSection){
                    this.setCurrentSection('cardBlockingReason');
                }
                if(this.currentSection==='cardBlockingReason'){
                    await this.continueProcess();
                    await this.cardReplacementTarget.description.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'delivery address':
                await this.goToSection({section: 'replacement'});
                if(this.currentSection==='cardReplacementTarget'){
                    await this.continueProcess();
                    await this.cardShippingAddress.title.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'terms and conditions':
                await this.goToSection({section: 'delivery address'});
                if(this.currentSection==='cardShippingAddress'){
                    await this.continueProcess();
                    await this.termsAndConditions.title.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary':
                await this.goToSection({section: 'terms and conditions'});
                if(this.currentSection==='termsAndConditions'){
                    await this.acceptTermsAndConditions();
                    await this.continueProcess();
                    await this.blockModal.cost.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            default:
                throw new Error(`The section "${section}" is unknown. Cannot be processed.`);
        }
    }

    async selectBlockCard() {
        await (await this.blockModal.blockBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async selectInstantCard() {
        await (await this.cardReplacementTarget.instantOption.waitForClickable({timeout: config.wait.L})).click();
    }

    async acceptTermsAndConditions() {
        await (await this.termsAndConditions.acceptTermsAndCondition.waitForClickable({timeout: config.wait.L})).click();
    }

    async goToStep(step = '') {
        switch(step.toLowerCase()) {
            case 'access card replacement target':
                await this._accessCardReplacementTarget();
                break;
            case 'access card shipping address':
                await this._accessCardReplacementTarget();
                await this._accessCardShippingAddress();
                break;
            case 'access terms and conditions':
                await this._accessCardReplacementTarget();
                await this._accessCardShippingAddress();
                await this._accessTermsAndConditions();
                break;
            case 'access terms and conditions tcd instant':
                await this._accessTermsAndConditionsInstant();
                break;
            case 'select terms and conditions tcd instant':
                await this._accessCardShippingAddress();
                await this._accessTermsAndConditions();
                break;
            default:
                throw new Error(`The step "${step}" is unknown.`);
        }
    }

    async _accessCardReplacementTarget() {
        if(this.isSpherica()){
            await this.cardBlockingReason.reasonButton.waitForClickable(config.wait.L);
            await this.cardBlockingReason.reasonButton.click();
        }
        await (await  this.cardBlockingReason.continueBtn.waitForDisplayed({timeout: config.wait.L})).click();
        if (!this.isSpherica()) {
            await this.cardReplacementTarget.continueBtn.waitForEnabled(config.wait.L);
            await this.cardReplacementTarget.continueBtn.waitForClickable(config.wait.L);
        }
    }

    async _accessCardShippingAddress() {
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS});
        if(this.isSpherica()){
            await this.cardReplacementTarget.personalizedOption.waitForClickable(config.wait.M);
            await this.cardReplacementTarget.personalizedOption.click();
        }
        await this.cardReplacementTarget.continueBtn.click(config.wait.L);
        if (!this.isSpherica()){
            await this.cardShippingAddress.continueBtn.waitForEnabled(config.wait.L);
            await this.cardShippingAddress.continueBtn.waitForClickable(config.wait.L);
        }
    }

    async _accessTermsAndConditions() {
        if(this.isSpherica()){
            await this.cardShippingAddress.personalizedCard.myAddressOption.waitForClickable(config.wait.M);
            await this.cardShippingAddress.personalizedCard.myAddressOption.click();
        }
        await this.cardShippingAddress.continueBtn.click(config.wait.L);
        await this.acceptTermsAndConditions();
        await this.termsAndConditions.continueBtn.waitForClickable(config.wait.L);
    }
    async _accessTermsAndConditionsInstant() {
        await this.cardReplacementTarget.continueBtn.waitForDisplayed(config.wait.L);
        await this.cardReplacementTarget.continueBtn.waitForClickable(config.wait.L);
        await this.cardReplacementTarget.continueBtn.click(config.wait.L);
        await this.cardShippingAddress.continueBtn.waitForDisplayed(config.wait.L);
        await this.cardShippingAddress.continueBtn.waitForClickable(config.wait.L);
        await this.cardShippingAddress.continueBtn.click(config.wait.L);
    }

    async accessOtp(otp) {
        await this.termsAndConditions.continueBtn.click(config.wait.L);
        await (await this.blockModal.blockBtn.waitForClickable({timeout: config.wait.L})).click();
        await this.signModal.setPassword(otp, false);
    }

    async accessViewData(otp) {
        await (await  this.cardShippingAddress.personalizedCard.viewAndHideDataLink.waitForDisplayed({timeout: config.wait.L})).click();
        await this.signModal.setPassword(otp, false);
        await (await this.signModal.smsContinueButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async accessHideData(otp) {
        await this.accessViewData(otp);
        await (await  this.cardShippingAddress.personalizedCard.viewAndHideDataLink.waitForDisplayed({timeout: config.wait.L})).click();
    }

    async fillSummary(data) {
        switch(data.toLowerCase()){
            case 'info address':
                await (await  this.cardShippingAddress.personalizedCard.questionMyAdress.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'close info address':
                await this.fillSummary('info address');
                await (await  this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'accept info address':
                await this.fillSummary('info address');
                await (await  this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'exit process':
                await (await  this.closeBtn.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'cancel exit process':
                await this.fillSummary('exit process');
                await (await  this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'successful exit process':
                await this.fillSummary('exit process');
                await (await  this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'brach option':
                await (await  this.cardShippingAddress.personalizedCard.branchOption.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`The option: ${data} is not implemented`);
        }
    }
}

export default new BlockAndReplacement();
