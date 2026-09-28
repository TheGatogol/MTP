import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
@page()
class MobileTopUpPackages extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-mobileTopUpPackages[state="active"]',
            elements: {
                featureSelect: 'account-transaction-servicing-mobile-top-up-packages-mx',
                headerLabel: 'account-transaction-servicing-mobile-top-up-packages-mx-contract-page #helpModalHeader div.header',
                closeBtn: 'account-transaction-servicing-mobile-top-up-packages-mx-contract-page #helpModalHeader #btn-close',
                mobileTopUpPackagesModals:{
                    properties:{root: 'account-transaction-servicing-mobile-top-up-packages-mx-modals'},
                    halfModalsClose: 'bbva-help-modal[modal-type] #btn-close',
                    modalsButtonPrimary: 'bbva-help-modal[modal-type] bbva-button-default.footer-button',
                    modalsButtonSecondary: 'bbva-help-modal[modal-type] bbva-button-default.footer-button.link',
                    headerModal: 'bbva-help-modal[modal-type] #helpModalHeader',
                    titleModalMoreInformation: 'bbva-help-modal[modal-type] #title-text',
                    iconModal: 'bbva-help-modal[modal-type] #helpModalTitle bbva-type-icon',
                    modalTitle: 'bbva-help-modal[modal-type] #helpModalTitle',
                    termsAndConditionsLabel: 'bbva-help-modal[header-text="account-transaction-servicing-mobile-top-up-packages-mx-expandable-mobile-recharge-packages-step-terms-header-modal"]',
                },
                modalsClose: 'account-transaction-servicing-mobile-top-up-packages-mx-modal-show-full-payment-methods bbva-help-modal #helpModalHeader #btn-close',
                signModalInput: CellsSignOperationModalSpherica,
                onboarding: {
                    properties:{root: 'account-transaction-servicing-mobile-top-up-packages-mx-onboarding-page #help-onboarding bbva-help-modal'},
                    playBtn: 'button.play',
                    backBtn: 'button.back',
                    nextBtn: 'button.next',
                    exitBtn: 'button.close',
                    acceptBtn: 'bbva-button-default.action-button',
                    carouselPage: 'bbva-help-onboarding-slide[slide-title="account-transaction-servicing-mobile-top-up-packages-mx-carousel-onboarding-__PAGE__-page-title"]',
                    carouselPageActionArea: 'bbva-help-onboarding-slide[slide-title="account-transaction-servicing-mobile-top-up-packages-mx-carousel-onboarding-__PAGE__-page-title"] div.action-area',
                    carouselPageTopMessage: 'bbva-help-onboarding-slide[slide-title="account-transaction-servicing-mobile-top-up-packages-mx-carousel-onboarding-__PAGE__-page-title"] div.content bbva-type-text.panel-title',
                    carouselPageBottomMessage: 'bbva-help-onboarding-slide[slide-title="account-transaction-servicing-mobile-top-up-packages-mx-carousel-onboarding-__PAGE__-page-title"] div.content bbva-type-text.panel-info-description'
                },
                multiStep:{
                    properties:{root: '[data-tag-name="bbva-expandable-multistep"]'},
                    stepOne: {
                        properties:{root: '#expandable-contact-step'},
                        newContactForm: '#form-contact',
                        newContactLabel: '#form-contact account-transaction-servicing-mobile-top-up-packages-mx-list-link',
                        newContactBtn: '#form-contact bbva-type-icon.right-icon',
                        inputFieldPhoneNumber: '#form-contact #phone-number input',
                        btnNativeAgenda: '#form-contact #phone-number bbva-form-attach bbva-button-default.action',
                        inputFieldCompany: '#form-contact #provider',
                        selectCompany: '#form-contact #provider [value="__COMPANY__"]',
                        inputFieldName: '#form-contact #contact-name input',
                        checkboxSaveContact: '#form-contact #input span.box',
                        inputFieldAlias: '#form-contact #alias input',
                        btnSubmitForm: '#form-contact #complete-contact-step',
                        contactInformationBox: '#contact-step #form-contact bbva-notification-message',
                        selectCompanyOption: 'account-transaction-servicing-mobile-top-up-packages-mx-contact-step',
                        savedContacts: '#list-contacts.select-contact',
                        savedContactsLabel: '#list-contacts account-transaction-servicing-mobile-top-up-packages-mx-list-link',
                        savedContactsSubHeader: '#list-contacts bbva-type-text[text="account-transaction-servicing-mobile-top-up-packages-mx-expandable-accordion-list-contacts-header-subtitle"]',
                        viewAllSavedContactsLink: '#list-contacts #button-link',
                        savedContactsList: '#list-contacts #contact-list',
                        contact: '#list-contacts #contact-list account-transaction-servicing-mobile-top-up-packages-mx-list-contact[alias="__NAME__"]',
                        contactDeleteBtn: '#list-contacts #contact-list div.actions-wrapper.opened div.actions.actions-operative.show-padding bbva-button-action',
                        contactStepResumenContent: 'div.completed-content',
                        modifyContact: '#editButton',
                    },
                    stepTwo: {
                        properties:{root: '#expandable-amount-step'},
                        amountStepHeader: '#heading',
                        amountStepHeaderCurrentStep: '#heading #currentStep',
                        packageStep: '#package-step',
                        packageStepLabel: '#package-step bbva-type-text',
                        packagesList: '#package-step #formContainer',
                        packageSpecific: '#package-step #formContainer bbva-form-control-input[value="__AMOUNT__"]',
                        viewMorePackages: '#package-step #morePackages',
                        allAmounts:'#amount-step',
                        selectAmount: '#amount-step #butonGroup bbva-button-group-item',
                        amountSpecific: '#amount-step #butonGroup bbva-button-group-item[value="__AMOUNT__-MXN"]',
                        packageInformation: '#modalLink bbva-type-link',
                        amountsInformation: 'bbva-notification-message',
                        buttonDefault: 'bbva-button-default',
                        modifyAmount: '#editButton',
                        amountStepResumenContent: 'div.completed-content',
                    },
                    stepThree: {
                        properties:{root: '#expandable-payment-step'},
                        paymentStepHeader: '#heading',
                        paymentStepHeaderCurrentStep: '#heading #currentStep',
                        paymentStepLabel: '#list-account bbva-type-text',
                        accountsNotCollapsibleViewMore: '#list-account bbva-type-link',
                        accountsNotCollapsible: '#payment-step #list-account div.methods-payment',
                        accountsCollapsible: '#list-accounts',
                        accountsCollapsibleViewMore: '#payment-step #list-accounts #list-account-accordion div.horizontal-container bbva-type-link',
                        cardsCollapsible: '#list-cards',
                        product: 'div.card-info div.card-number [number="__NUMBER__"]',
                        insufficientBalanceAccountTitle: '#payment-step #list-account div.vertical-container bbva-notification-message',
                        insufficientBalanceCardTitle: '#payment-step #list-cards #list-card-accordion div.vertical-container bbva-notification-message',
                        insufficientBalanceAccount: '#payment-step #list-account div.methods-payment account-transaction-servicing-mobile-top-up-packages-mx-payment-method-info div.no-active div.badge-icon',
                        viewMoreCardsLink: '#list-card-accordion bbva-type-link',
                        viewMoreCardsHeader: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-modals bbva-help-modal #helpModalHeader',
                        viewMoreCardsList: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-modals bbva-help-modal div.methods-payment',
                        insufficientBalanceCard: '#payment-step #list-cards #list-card-accordion account-transaction-servicing-mobile-top-up-packages-mx-payment-method-info div.no-active div.badge-icon',
                        paymentStepResumenContent: 'div.completed-content',
                        modifyPaymentType: '#editButton',
                    },
                },
                allSavedContactsListHeader: '#recipientModalCONTACTS #helpModalHeader',
                allSavedContactsListSearchBar: '#recipientModalCONTACTS #inputViewAll',
                allSavedContactsListContent: '#recipientModalCONTACTS div.groupList',
                viewMoreProduct: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-modals bbva-help-modal div.card-info div.card-number [number="__NUMBER__"]',
                completeTopUpBtn: '#complete-purchase',
            },
            requiredElements: [
                'featureSelect',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'play button':
                await this.onboarding.playBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.onboarding.backBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'next button':
                await this.onboarding.nextBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.onboarding.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding first page main message':
                await (await this.onboarding.carouselPageTopMessage.specifySelector({placeholder: '__PAGE__', value: 'first'})
                    .waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'onboarding second page main message':
                await (await this.onboarding.carouselPageTopMessage.specifySelector({placeholder: '__PAGE__', value: 'second'})
                    .waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'onboarding third page main message':
                await (await this.onboarding.carouselPageTopMessage.specifySelector({placeholder: '__PAGE__', value: 'third'})
                    .waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'onboarding first page bottom message':
                await (await this.onboarding.carouselPageBottomMessage.specifySelector({placeholder: '__PAGE__', value: 'first'})
                    .waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'onboarding second page bottom message':
                await (await this.onboarding.carouselPageBottomMessage.specifySelector({placeholder: '__PAGE__', value: 'second'})
                    .waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'onboarding third page bottom message':
                await (await this.onboarding.carouselPageBottomMessage.specifySelector({placeholder: '__PAGE__', value: 'third'})
                    .waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'onboarding accept button':
                await this.onboarding.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.headerLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header modal':
                await this.mobileTopUpPackagesModals.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modals close button':
                await this.mobileTopUpPackagesModals.halfModalsClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal more information':
                await this.mobileTopUpPackagesModals.titleModalMoreInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon':
                await this.mobileTopUpPackagesModals.iconModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title':
                await this.mobileTopUpPackagesModals.modalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal confirm button':
                await this.mobileTopUpPackagesModals.modalsButtonPrimary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions label':
                await this.mobileTopUpPackagesModals.termsAndConditionsLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount current step':
                await this.multiStep.stepTwo.amountStepHeaderCurrentStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment current step':
                await this.multiStep.stepThree.paymentStepHeaderCurrentStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new contact label':
                await this.multiStep.stepOne.newContactLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new contact button':
                await this.multiStep.stepOne.newContactBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new contact form':
                await this.multiStep.stepOne.newContactForm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'saved contacts label':
                await this.multiStep.stepOne.savedContactsLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'saved contacts subheader':
                await this.multiStep.stepOne.savedContactsSubHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'saved contacts view all link':
                await this.multiStep.stepOne.viewAllSavedContactsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'saved contacts list':
                await this.multiStep.stepOne.savedContactsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'all contacts header':
                await this.allSavedContactsListHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'all contacts search bar':
                await this.allSavedContactsListSearchBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'all contacts list':
                await this.allSavedContactsListContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount step header':
                await this.multiStep.stepTwo.amountStepHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'package step label':
                await this.multiStep.stepTwo.packageStepLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view more link':
                await this.multiStep.stepTwo.viewMorePackages.scrollIntoView();
                await this.multiStep.stepTwo.viewMorePackages.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'packages list':
                await this.multiStep.stepTwo.packagesList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts list':
                await this.multiStep.stepTwo.allAmounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'package information':
                await this.multiStep.stepTwo.packageInformation.scrollIntoView();
                await this.multiStep.stepTwo.packageInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amounts information':
                await this.multiStep.stepTwo.amountsInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount continue button':
                await this.multiStep.stepTwo.buttonDefault.scrollIntoView();
                await this.multiStep.stepTwo.buttonDefault.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount continue button disabled':
                await this.multiStep.stepTwo.buttonDefault.waitForDisabled({timeout: config.wait.M});
                break;
            case 'payment step header':
                await this.multiStep.stepThree.paymentStepHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment step label':
                await this.multiStep.stepThree.paymentStepLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts':
                await this.multiStep.stepThree.accountsNotCollapsible.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient balance account':
                await this.multiStep.stepThree.insufficientBalanceAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient balance account title':
                await this.multiStep.stepThree.insufficientBalanceAccountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient balance card title':
                await this.multiStep.stepThree.insufficientBalanceCardTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient balance card':
                await this.multiStep.stepThree.insufficientBalanceCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'collapsible accounts list':
                await this.multiStep.stepThree.accountsCollapsible.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'collapsible cards list':
                await this.multiStep.stepThree.cardsCollapsible.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view all credit cards header':
                await this.multiStep.stepThree.viewMoreCardsHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view all credit cards list':
                await this.multiStep.stepThree.viewMoreCardsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact step resumen content':
                await this.multiStep.stepOne.contactStepResumenContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount step resumen content':
                await this.multiStep.stepTwo.amountStepResumenContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment step resumen content':
                await this.multiStep.stepThree.paymentStepResumenContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirmation step':
                await this.completeTopUpBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'otp page header':
                await this.signModalInput.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page exit button':
                await this.signModalInput.closeButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page icon':
                await this.signModalInput.smsIcon.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page text':
                await this.signModalInput.insertSmsLabel.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page input':
                await this.signModalInput.smsPasswordInputField.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'otp page accept button':
                await this.signModalInput.smsContinueButton.waitForDisplayed({timeout:config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async navigateOnboardingMenu(){
        await (await this.onboarding.nextBtn.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.onboarding.carouselPageActionArea.specifySelector({placeholder: '__PAGE__', value: 'second'}).waitForDisplayed({timeout: config.wait.M}));
        await (await this.onboarding.backBtn.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.onboarding.carouselPageActionArea.specifySelector({placeholder: '__PAGE__', value: 'first'}).waitForDisplayed({timeout: config.wait.M}));
    }

    async playOnboardingMenu(){
        await (await this.onboarding.playBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async exitOnboardingMenu(){
        await (await this.onboarding.exitBtn.waitForDisplayed({timeout: config.wait.M})).click();
        await this.attemptToExitProcess();
    }

    async acceptOnboarding() {
        await (await this.onboarding.acceptBtn.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async selectContactsListSection() {
        await (await this.multiStep.stepOne.savedContacts.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectNewContactSection() {
        await (await this.multiStep.stepOne.newContactLabel.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async fillFormFromData({number, company, providerId, name, selectedIndex}) {
        await this.multiStep.stepOne.newContactForm.waitForAnimation({timeout: config.wait.M});
        await (await this.multiStep.stepOne.inputFieldName.waitForDisplayed({timeout: config.wait.M})).setValue({value: name});
        await this.multiStep.stepOne.inputFieldCompany.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.stepOne.inputFieldCompany.execute({script: (selectedIndex) => this.selectedIndex = selectedIndex,  args:[selectedIndex]});
        await this.multiStep.stepOne.selectCompanyOption.execute({script: (providerId) => this.providerId = providerId, args:[providerId]});
        await this.multiStep.stepOne.selectCompanyOption.execute({script: (providerName) => this.providerName = providerName, args:[company]});
        await (await this.multiStep.stepOne.inputFieldPhoneNumber.waitForDisplayed({timeout: config.wait.M})).setValue({value: number});
        await this.multiStep.stepOne.inputFieldPhoneNumber.setValue({value: number, slow: true});
        await (await this.multiStep.stepOne.btnSubmitForm.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async fillFormFromDataAndSaveContact({number, company, providerId, name, alias, selectedIndex}) {
        await this.multiStep.stepOne.newContactForm.waitForAnimation({timeout: config.wait.M});
        await (await this.multiStep.stepOne.inputFieldPhoneNumber.waitForDisplayed({timeout: config.wait.M})).setValue({value: number});
        await this.multiStep.stepOne.inputFieldCompany.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.stepOne.inputFieldCompany.execute({script: (selectedIndex) => this.selectedIndex = selectedIndex,  args:[selectedIndex]});
        await this.multiStep.stepOne.selectCompanyOption.execute({script: (providerId) => this.providerId = providerId, args:[providerId]});
        await this.multiStep.stepOne.selectCompanyOption.execute({script: (providerName) => this.providerName = providerName, args:[company]});
        await (await this.multiStep.stepOne.inputFieldName.waitForDisplayed({timeout: config.wait.M})).setValue({value: name});
        await (await this.multiStep.stepOne.checkboxSaveContact.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.multiStep.stepOne.inputFieldAlias.waitForDisplayed({timeout: config.wait.M})).setValue({value: alias});
        await (await this.multiStep.stepOne.contactInformationBox.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.multiStep.stepOne.btnSubmitForm.waitForDisplayed({timeout: config.wait.M})).click();
        await this.multiStep.stepOne.newContactForm.waitForAnimation({timeout: config.wait.M});
    }

    async selectAContact(contactAlias) {
        await this.selectContactsListSection();
        await (await this.multiStep.stepOne.contact.specifySelector({placeholder: '__NAME__', value: contactAlias}).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async acceptModalAction() {
        await (await this.mobileTopUpPackagesModals.modalsButtonPrimary.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async retrySaveContact(times = 1) {
        for (let i = 0; i < times; i++) {
            await this.acceptModalAction();
            await (await this.multiStep.stepOne.btnSubmitForm.waitForDisplayed({timeout: config.wait.M})).click();
        }

    }

    async deleteContact(contactName) {
        await this.selectContactsListSection();
        const element = this.multiStep.stepOne.contact.specifySelector({placeholder: '__NAME__', value: contactName});
        await element.waitForAnimation({timeout: config.wait.M, interval: 200});
        await element.scrollIntoView({block: 'nearest'});
        await this.swipeElement(element, 'left');
        await (await this.multiStep.stepOne.contactDeleteBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async validateDeletedContact(contactName) {
        await this.multiStep.stepOne.contact.specifySelector({placeholder: '__NAME__', value: contactName})
            .waitForNotDisplayed({timeout: config.wait.M});
    }

    async nativeAgendaError() {
        await this.multiStep.stepOne.btnNativeAgenda.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.stepOne.btnNativeAgenda.click();
        await this.featureSelect.execute({script: () => this.contactDataErrorHandler({
            'code':5,
            'message':'Permission Permanently Denied'
        })});
        await this.acceptModalAction();
    }

    async selectAPackage(amount) {
        await this.multiStep.stepTwo.packagesList.waitForAnimation({timeout: config.wait.M, interval: 300});
        await (await this.multiStep.stepTwo.packageSpecific.specifySelector({placeholder: '__AMOUNT__', value: amount})
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async selectAnAmount(amount) {
        await this.multiStep.stepTwo.selectAmount.waitForDisplayed();
        await (await this.multiStep.stepTwo.amountSpecific.specifySelector({placeholder: '__AMOUNT__', value: amount})
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectPackageOrAmount({action, amount}){
        switch (action.toLowerCase()) {
            case 'package':
                await this.selectAPackage(amount);
                break;
            case 'amount':
                await this.selectAnAmount(amount);
                break;
            default:
                throw new Error(`The action: ${action} is not implemented`);
        }
    }

    async selectViewMorePackages() {
        await (await this.multiStep.stepTwo.viewMorePackages.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async openViewAllPackages() {
        for (let i = 0; i < 3; i++) {
            await this.selectViewMorePackages();
        }
    }

    async readPackageInformation() {
        await (await this.multiStep.stepTwo.packageInformation.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectContinueInAmountStep() {
        await this.multiStep.stepTwo.buttonDefault.scrollIntoView({block: 'end'});
        await (await this.multiStep.stepTwo.buttonDefault.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async openCollapsibleCardList() {
        await (await this.multiStep.stepThree.cardsCollapsible.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectByCardNumber({cardElement, product}) {
        const productNumber = product.number;
        const element = cardElement.specifySelector({placeholder: '__NUMBER__', value: productNumber});
        await element.waitForAnimation({timeout: config.wait.M, interval: 300});
        await element.click();
    }

    async selectAProduct({products, option, isExistingAccontsCollapsible}) {
        switch (option.toLowerCase()) {
            case 'a credit card':
                await this.openCollapsibleCardList();
                await this.selectByCardNumber({cardElement: this.multiStep.stepThree.product, product: products.creditCards[0]});
                break;
            case 'an account':
                if (isExistingAccontsCollapsible) {
                    await (await this.multiStep.stepThree.accountsCollapsible.waitForDisplayed({timeout: config.wait.M})).click();
                }
                await this.selectByCardNumber({cardElement: this.multiStep.stepThree.product, product: products.accounts[0]});
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    async modalActions(action){
        switch (action.toLowerCase()) {
            case 'confirm':
            case 'delete':
            case 'confirm exit':
            case 'add additional number':
                await this.acceptModalAction();
                break;
            case 'continue with the operation':
            case 'cancel':
            case 'cancel deletion':
            case 'change the alias':
                await (await this.mobileTopUpPackagesModals.modalsButtonSecondary.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'closes':
            case 'exit':
                await (await this.mobileTopUpPackagesModals.halfModalsClose.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'chooses to close':
                await (await this.modalsClose.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The action: ${action} is not implemented`);
        }
    }

    async viewMoreActions({option, products = {}}){
        switch (option.toLowerCase()) {
            case 'selects an account':
                await this.selectByCardNumber({cardElement: this.viewMoreProduct, product: products.accounts[0]});
                break;
            case 'selects a credit card':
                await this.selectByCardNumber({cardElement: this.viewMoreProduct, product: products.creditCards[0]});
                break;
            case 'chooses to close':
                await this.modalActions(option);
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    async modifyStepSection(action) {
        switch (action.toLowerCase()) {
            case 'contact':
                await this.multiStep.__root.waitForAnimation({timeout: config.wait.M});
                await this.waitForElementsExist(this.multiStep.stepOne.modifyContact);
                await (await (await this.multiStep.stepOne.modifyContact.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'amount':
                await this.multiStep.__root.waitForAnimation({timeout: config.wait.M});
                await this.waitForElementsExist(this.multiStep.stepTwo.modifyAmount);
                await (await (await this.multiStep.stepTwo.modifyAmount.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
                await this.acceptModalAction();
                break;
            case 'payment method':
                await this.multiStep.__root.waitForAnimation({timeout: config.wait.M});
                await this.waitForElementsExist(this.multiStep.stepThree.modifyPaymentType);
                await (await (await this.multiStep.stepThree.modifyPaymentType.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
                await this.acceptModalAction();
                break;
            default:
                throw new Error(`The action: ${action} is not implemented`);
        }
    }

    async exitPage() {
        await this.attemptToExitProcess();
        await this.acceptModalAction();
    }

    async attemptToExitProcess() {
        await (await this.closeBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectViewMore(option){
        switch (option.toLowerCase()) {
            case 'contacts':
                await (await this.multiStep.stepOne.viewAllSavedContactsLink.waitForDisplayed({timeout: config.wait.M})).click();
                await this.multiStep.stepOne.viewAllSavedContactsLink.waitForAnimation();
                break;
            case 'accounts':
                await (await this.multiStep.stepThree.accountsNotCollapsibleViewMore.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'collapsible accounts':
                await (await this.multiStep.stepThree.accountsCollapsible.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.multiStep.stepThree.accountsCollapsibleViewMore.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'credit cards':
                await (await this.multiStep.stepThree.viewMoreCardsLink.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'complete packages list':
                await this.openViewAllPackages();
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    async confirmTopUpPackagePurchase() {
        await this.completeTopUpBtn.waitForDisplayed({timeout: config.wait.M});
        await this.completeTopUpBtn.click();
    }

    async confirmToken() {
        await this.signModalInput.isLoaded();
        await this.signModalInput.insertSmsValue('01234567');
    }
}

export default new MobileTopUpPackages();
