import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import BbvaHeaderMain from '../../components/bbva-header-main';

@page('CardBlockManagement')
class CardBlockManagement extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardBlockManagement[state="active"]',
            elements: {
                header: [
                    BbvaHeaderMain,
                    {
                        prefix: '[data-selector="main-modal"][visible]',

                    }
                ],
                cardStep: {
                    properties: {
                        root: '[step="0"][completed]'
                    },
                    cardTitle: '.header.header-ellipsis #heading #headingLabel[font-type="title-default"]',
                    cardName: '.card-section-info-part [class="card-section-info-part-top"] [data-tag-name="bbva-type-text"]',
                    cardImage: '.card-section-info-part [class="card-section-info-part-bottom"] [data-tag-name="bbva-clip-card"]',
                    cardNumber: '.card-section-info-part [class="card-section-info-part-bottom"] [data-tag-name="bbva-badge-reference"]',
                    availableAmount: '.card-section-data-part [class="card-section-data-part-top"]',
                    disposedAmount: '.card-section-data-part [class="card-section-data-part-bottom"]'
                },
                blockStep: {
                    properties: {
                        root: '[step="1"]'
                    },
                    blockReasonTitle: '.header.header-ellipsis [data-tag-name="bbva-type-text"] .text.lines',
                    blockReasonTitleResume: '.header.header-ellipsis [data-tag-name="bbva-type-text"]#headingLabel.heading-label',
                    blockReasonValue: 'div.card-block-type.card-block-type-collapsed',
                    theftReasonCheckbox: '#formContainerCardBlockType [data-tag-name="bbva-form-control-input"][value="STOLEN"]',
                    lostReasonCheckbox: '#formContainerCardBlockType [data-tag-name="bbva-form-control-input"][value="LOST"]',
                    infoBlockMessage: '[data-tag-name="bbva-notification-message"][message-title*="BLOCK_REPOSITION"]',
                    infoBlockDebitMessage: '[data-tag-name="bbva-notification-message"][message-title*="BLOCK-debit"]',
                    continueButtonStep2: '[data-tag-name="bbva-button-default"]#buttonContinueStepBlockType',
                    editBlockReasonButton: '#editButton'
                },
                newCardStep: {
                    properties: {
                        root: '[step="2"]'
                    },
                    //multi-step active
                    newCardTitle: '.header.header-ellipsis [data-tag-name="bbva-type-text"]',
                    instantNewCardRadio: '#formContainerCardRepositionType [data-tag-name="bbva-form-control-input"][value="SNAPSHOT"]',
                    singleInstantNewCard: '.single-reposition-container [data-tag-name="bbva-type-text"][text*="reason-card-SNAPSHOT"]',
                    singleCustomNewCard: '.single-reposition-container [data-tag-name="bbva-type-text"][text*="PERSONALIZED"][font-type="title-default"]',
                    customNewCardRadio: '#formContainerCardRepositionType [data-tag-name="bbva-form-control-input"][value="PERSONALIZED"]',
                    infoCostMessage: '[data-tag-name="bbva-notification-message"]',
                    continueButtonStep3: '[data-tag-name="bbva-button-default"]#buttonContinueStepRepositionType',
                    //multi-step completed
                    newCardTitleResume: '.header.header-ellipsis [data-tag-name="bbva-type-text"]#headingLabel.heading-label',
                    editNewCardButton: '#editButton',
                    cardTypeResume: '.card-reposition-type.card-reposition-type-collapsed .card-block-management-collapsed-text .text',
                    repositionFeesResume: '.card-reposition-type.card-reposition-type-collapsed .card-reposition-fee-collapsed-container'
                },
                addressStep: {
                    properties: {
                        root: '[step="3"]'
                    },
                    //active
                    addressTitle: '.header.header-ellipsis [data-tag-name="bbva-type-text"]',
                    addressOneSelection: '.one-delivery-type-container',
                    anyBranch: '[data-tag-name="bbva-type-text"][text="card-configuration-card-block-management-card-delivery-type-ANY_BRANCH"]',
                    infoDeliveryCostMessage: '[data-tag-name="bbva-notification-message"][variant="caution"][notification-delivery-fee]',
                    infoProcessBranch: '[data-tag-name="bbva-notification-message"][variant="caution"][data-selector="notification-process-at-branch-enabled"]',
                    continueButtonStep4: '[data-tag-name="bbva-button-default"]#buttonContinueStepDeliveryType',
                    processAtTheOfficeMessage: '[data-tag-name="bbva-notification-message"]',
                    processAtTheOfficeButton: '[data-tag-name="bbva-notification-message"] .link [data-tag-name="bbva-type-link"]',
                    customerAddressCheckbox: '[data-tag-name="bbva-form-control-input"][value="CUSTOMER_ADDRESS"]',
                    anotherAddressCheckbox: '[data-tag-name="bbva-form-control-input"][value="CUSTOM_ADDRESS"]',
                    searchBranchCheckbox: '[data-tag-name="bbva-form-control-input"][value="SEARCH_BRANCH"]',
                    chooseBranchLink: '[data-tag-name="bbva-form-control-input"][value="SEARCH_BRANCH"] div[slot="content-area"] [data-tag-name="bbva-type-link"]',
                    openingBranch: '.delivery-type-info [data-tag-name="bbva-type-text"][text*="OPENING_BRANCH"][font-type="title-default"]',
                    addressMasked: '[data-selector="card-configuration-card-block-management-customer-address-masked"]',
                    addressUnmasked: '[data-selector="card-configuration-card-block-management-customer-address-unmasked"]',
                    showMyAddress: '[data-tag-name="bbva-form-control-input"][value="CUSTOMER_ADDRESS"] [data-tag-name="bbva-type-link"]',
                    addressStreetInput: '[id="bbvaFormInputStreet"] input',
                    addressStreetInputWarning: '[id="bbvaFormInputStreet"] .message-error.notification',
                    externalNumberInput: '[id="bbvaFormInputExternalNumber"] input',
                    externalNumberInputWarning: '[id="bbvaFormInputExternalNumber"] .message-error.notification',
                    internalNumberInput: '[id="bbvaFormInputinteriorNumber"] input',
                    internalNumberInputWarning: '[id="bbvaFormInputinteriorNumber"] .message-error.notification',
                    zipCodeInput: '[id="bbvaFormInputZipCode"] input',
                    zipCodeInputWarning: '[id="bbvaFormInputZipCode"] .message-error.notification',
                    neighborhoodButton: '[data-tag-name="external-input-selector"] [data-tag-name="bbva-form-select"]',
                    neighborhoodButtonHidden: '[data-tag-name="customer-address-form"][hidden]',
                    neighborhoodOption: '[data-tag-name="bbva-form-option"][value="M5743"]',
                    neighborhoodOutOfRangeOption: '[data-tag-name="bbva-form-option"][value="K0116"]',
                    additionalReferenceInput: '[id="bbvaFormInputReferences"] textarea',
                    additionalReferenceWarning: '#bbvaFormInputReferences .message.error [data-tag-name="bbva-notification-help"]',
                    privacyPolicyButton: '.card-delivery-type-privacy-warning [data-tag-name="bbva-type-link"]',
                    //completed
                    addressTitleResume: '.header.header-ellipsis [data-tag-name="bbva-type-text"]#headingLabel.heading-label',
                    addressResume: '.card-delivery-type-collapsed',
                    editAddressButton: '#editButton',
                    deliveryTypeFeeResume: '.delivery-type-fee-section'
                },
                scheduledDeliveryStep: {
                    properties: {
                        root: '[step="4"]'
                    },
                    //active
                    scheduledDeliveryTitle: 'div.header.header-ellipsis [data-tag-name="bbva-type-text"]',
                    scheduledDeliveryCalendar: '.card-scheduled-delivery-type.card-scheduled-delivery-type-opened div .input-scheduled-delivery-date-wrapper [data-tag-name="bbva-form-input"] .field [data-tag-name="bbva-type-text"]',
                    scheduledDeliveryDateInfoMessage: '[data-tag-name="bbva-notification-message"]',
                    continueButtonStep5: '[data-tag-name="bbva-button-default"]#buttonContinueStepScheduledDeliveryType',
                    //completed
                    scheduledDeliveryTitleResume: '.header.header-ellipsis [data-tag-name="bbva-type-text"]#headingLabel.heading-label',
                    scheduledDeliveryDateResume: '.summary .card-scheduled-delivery-collapsed-container-section',
                    scheduledDeliveryHourResume: '.summary .card-scheduled-delivery-collapsed-container-section',
                    editScheduledDeliveryButton: '#editButton'

                },
                calendar: {
                    dateAvailable: '[data-tag-name="bbva-form-calendar"] tbody tr td .day.available',
                    confirmCalendar: '.scheduled-delivery-type-calendar-modal-button #calendarButton'
                },
                termsStep: {
                    properties: {
                        root: '[step="5"]'
                    },
                    termsTitle: 'div.header.header-ellipsis [data-tag-name="bbva-type-text"]',
                    termsTitleResume: 'div.header.header-ellipsis [data-tag-name="bbva-type-text"]#headingLabel.heading-label',
                    termsAcceptedStatus: '[data-tag-name="bbva-badge-icon"][status="checked"]',
                    termsCheckbox: '#formContainerTermsAndConditions [data-tag-name="bbva-form-control-input"]',
                    continueToResume: '[data-tag-name="bbva-button-default"]#buttonContinueStepConditionsAndTerms',
                    editTermsButton: '#editButton'
                },
                feeAmountSection: '.fee-section',
                confirmResume: '.confirmation-summary .general-section .summary-button',
                modalSuccess: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][data-selector="modal-success-modal"]'
                    },
                    header: '#helpModalHeader',
                    headerCloseButton: '#helpModalHeader [data-id="iconsRight"]',
                    imageSuccess: '[data-tag-name="bbva-clip-box"]',
                    title: '[data-tag-name="bbva-type-text"][tag="h2"]',
                    dateTime: '.content-info[data-selector="text-operation-date"]',
                    cardName: '.content-info[data-selector="text-card-info"]',
                    blockReason: '.content-info[data-selector="text-operation-selected"]',
                    newCardType: '.content-info[data-selector="text-reposition-type"]',
                    repositionCardFee: '.content-info[data-selector="text-reposition-fee"]',
                    addressDelivery: '.content-info[data-selector="text-delivery-selected"]',
                    feeDelivery: '.content-info[data-selector="text-delivery-fee"]',
                    scheduleDate: '.content-info[data-selector="text-schedule-date"]',
                    scheduleHour: '.content-info[data-selector="text-schedule-hour"]',
                    operationNumber: '.content-info[data-selector="text-operation-number"]',
                    mailMessage: '[data-selector="card-configuration-card-block-management-success-notification-email"]',
                    notificationWithoutDelivery: '[data-selector="notification-without-delivery"]',
                    timeDeliveryMessage: '[data-tag-name="bbva-notification-message"][variant="caution"][data-selector="notification-with-delivery"]',
                    repositionNotification: '[data-tag-name="bbva-notification-message"][variant="caution"][data-selector="notification-with-reposition"]',
                    repositionLink: '[data-tag-name="bbva-notification-message"][variant="caution"] .link'
                },
                modal: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][data-selector="__MODAL_TYPE__"][visible]'
                    },
                    header: '#helpModalHeader',
                    headerCloseButton: '#helpModalHeader #btn-close',
                    icon: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                    title: '.modal-title #title-text',
                    content: '.modal-content-wrapper #helpModalContent [data-tag-name="bbva-type-text"]',
                    primaryBtn: '.modal-footer [data-tag-name="bbva-button-default"].footer-button:not(.link)',
                    secondaryBtn: '.modal-footer [data-tag-name="bbva-button-default"].footer-button.link'
                }
            },
            requiredElements: ['header']
        });
    }

    async exitProcess() {
        await this.closeOperative();
        await (await this.modal.primaryBtn.specifySelector({
            placeholder: '__MODAL_TYPE__',
            value: 'modal-confirm-leave'
        })
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async continueProcess() {
        await (await this.modal.secondaryBtn.specifySelector({
            placeholder: '__MODAL_TYPE__',
            value: 'modal-confirm-leave'
        })
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async exitProcessBranch({action}) {
        if (action === 'close') {
            await (await this.modal.headerCloseButton.specifySelector({
                placeholder: '__MODAL_TYPE__',
                value: 'modal-process-at-branch-enabled'
            })
                .waitForDisplayed({timeout: config.wait.M}))
                .click({useActions: false, scrollOptions: {block: 'nearest'}});
        } else if (action === 'exit') {
            await (await (await this.modal.primaryBtn.specifySelector({
                placeholder: '__MODAL_TYPE__',
                value: 'modal-process-at-branch-enabled'
            })
                .waitForAnimation({timeout: config.wait.M}))
                .waitForDisplayed({timeout: config.wait.M}))
                .click();
        } else {
            throw new Error(`Unexpected action: ${action}`);
        }

    }

    async closeOperative() {
        await (await this.header.btnClose.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async exitFlow() {
        await (await this.modal.headerCloseButton.specifySelector({
            placeholder: '__MODAL_TYPE__',
            value: 'modal-process-at-branch-enabled'
        })
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.modal.headerCloseButton.specifySelector({
            placeholder: '__MODAL_TYPE__',
            value: 'modal-process-at-branch-enabled'
        }).waitForDisplayed({timeout: config.wait.M, reverse: true});
    }

    async continueOperative() {
        await (await this.modal.primaryBtn.specifySelector({
            placeholder: '__MODAL_TYPE__',
            value: 'modal-process-at-branch-enabled'
        }).waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.modal.specifySelector({
            placeholder: '__MODAL_TYPE__',
            value: 'modal-process-at-branch-enabled'
        }).waitForDisplayed({timeout: config.wait.M, reverse: true});
    }

    async selectBlockReason(reason, isContinue = true) {
        switch (reason.toLowerCase()) {
            case 'theft':
                await (await (await this.blockStep.theftReasonCheckbox.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                break;
            case 'lost':
                await (await (await this.blockStep.lostReasonCheckbox.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`The reason ${reason} is not defined`);
        }
        if (isContinue) {
            await (await this.blockStep.continueButtonStep2.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async selectNewCardOption(newCard) {
        switch (newCard.toLowerCase()) {
            case 'custom':
                await (await this.newCardStep.customNewCardRadio.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'single custom':
                await (await this.newCardStep.singleCustomNewCard.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M});
                break;
            case 'single instant':
                await this.newCardStep.singleInstantNewCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'instant':
                await (await this.newCardStep.instantNewCardRadio.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'instant default selected':
                await (await (await this.newCardStep.continueButtonStep3.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`The newCard ${newCard.toLowerCase} is not defined`);
        }
        if (newCard !== 'instant default selected') {
            await (await (await this.newCardStep.continueButtonStep3.waitForDisplayed({timeout: config.wait.M}))
                .waitForAnimation({timeout: config.wait.M}))
                .click();
        }
    }

    async selectAddress(address, isContinue = true, isCorrectAddress = true) {
        switch (address.toLowerCase()) {
            case 'choose office':
                await (await this.addressStep.anotherAddressCheckbox.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'choose branch':
                await (await this.addressStep.searchBranchCheckbox.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                await (await this.addressStep.chooseBranchLink.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'custom address':
                await this.addressStep.anotherAddressCheckbox.waitForDisplayed({timeout: config.wait.M});
                await this.addressStep.anotherAddressCheckbox.scrollIntoView({timeout: config.wait.M});
                await this.addressStep.anotherAddressCheckbox.waitForAnimation({timeout: config.wait.M});
                await this.addressStep.anotherAddressCheckbox.click({userActions: false});
                if (isCorrectAddress) {
                    await this.modifyAddress('correct address');
                }
                break;
            case 'any branch':
                await this.addressStep.addressOneSelection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'opening branch':
                await this.addressStep.openingBranch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'choose home':
            case 'home':
                await (await this.addressStep.customerAddressCheckbox.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'nearest'}});
                break;
            case 'process at the office':
                await this.processAtTheOffice();
                isContinue = false;
                break;
            case 'edited address':
                await (await this.addressStep.chooseBranchLink.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`The address ${address.toLowerCase()} is not defined`);
        }

        if (isContinue) {
            await (await this.addressStep.continueButtonStep4.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async completeDate(date) {
        if (date === 'date selection') {
            await this.scheduledDeliveryDate();
        }
    }

    async confirmCardBlockManagementProcess({isOtpRequired = false} = {}) {
        await (await this.confirmResume.waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
        if (isOtpRequired) {
            await this.completeSecurityModal();
        }
    }

    async confirmAddressSelection() {
        await (await this.addressStep.continueButtonStep4.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async modifyBlockReason(reason) {
        await this.waitForElementsExist(this.blockStep.editBlockReasonButton);
        await(await (await (await this.blockStep.editBlockReasonButton.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M }))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'start'}});
        await this.selectBlockReason(reason);
    }

    async confirmTermsAndConditions() {
        await (await (await this.termsStep.termsCheckbox.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
        await (await this.termsStep.continueToResume.waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async modifyTermsAndConditions() {
        await this.waitForElementsExist(this.termsStep.editTermsButton);
        await (await (await this.termsStep.editTermsButton.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async modifyAddressSelection() {
        await this.waitForElementsExist(this.addressStep.editAddressButton);
        const  editBtnElement = await (await this.addressStep.editAddressButton.elements()).value[0];
        await editBtnElement.waitForDisplayed({timeout: config.wait.M});
        await editBtnElement.scrollIntoView({block: 'end'});
        await editBtnElement.waitForAnimation();
        await editBtnElement.click();
    }

    async modifiesProgrammedDelivery() {
        await this.waitForElementsExist(this.scheduledDeliveryStep.editScheduledDeliveryButton);
        await (await (await this.scheduledDeliveryStep.editScheduledDeliveryButton.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.scheduledDeliveryDate();
        await this.confirmCardBlockManagementProcess();
    }

    async processAtTheOffice() {
        await this.waitForElementsExist(this.addressStep.processAtTheOfficeButton);
        await (await (await (await this.addressStep.processAtTheOfficeButton.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async continueAddressProcess() {
        await (await this.addressStep.continueButtonStep4.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async modifyAddress(address) {
        switch (address) {
            case 'out of range zip code':
                await (await (await this.addressStep.addressStreetInput.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.addressStreet});
                await (await this.addressStep.externalNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.externalNumber});
                await (await this.addressStep.internalNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.internalNumber});
                await (await this.addressStep.zipCodeInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.outOfRangeZipCode});
                await (await this.addressStep.neighborhoodButton.scrollIntoView({block: 'center'}));
                await this.addressStep.neighborhoodButton.waitForDisplayed({timeout: config.wait.M});
                await this.addressStep.neighborhoodButton.waitForAnimation({timeout: config.wait.M});
                await this.addressStep.neighborhoodButton.click();
                await this.addressStep.neighborhoodOutOfRangeOption.waitForDisplayed({timeout: config.wait.M});
                await this.addressStep.neighborhoodOutOfRangeOption.waitForAnimation({timeout: config.wait.M});
                await this.addressStep.neighborhoodOutOfRangeOption.click();
                await (await this.addressStep.additionalReferenceInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.additionalReferenceOutOfRange});
                await (await this.addressStep.continueButtonStep4.waitForDisplayed({timeout: config.wait.M}))
                    .click({useAction: false, scrollOptions: {block: 'nearest'}});
                break;
            case 'correct address':
                await (await (await this.addressStep.addressStreetInput.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.addressStreet});
                await (await (await (await this.addressStep.externalNumberInput.scrollIntoView({block: 'nearest'}))
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.externalNumber});
                await (await (await (await this.addressStep.internalNumberInput.scrollIntoView({block: 'nearest'}))
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.internalNumber});
                await (await (await (await this.addressStep.zipCodeInput.scrollIntoView({block: 'nearest'}))
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.zipCode});
                await (await (await (await this.addressStep.neighborhoodButton.scrollIntoView({block: 'nearest'}))
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                await (await (await this.addressStep.neighborhoodOption.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                await (await (await (await this.addressStep.additionalReferenceInput.scrollIntoView({block: 'nearest'}))
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.additionalReference});
                break;
            case 'maximum characters street':
                await (await this.addressStep.addressStreetInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.maximumCharactersStreet});
                break;
            case 'maximum characters outside number':
                await (await this.addressStep.externalNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.maximumCharactersNumber});
                break;
            case 'maximum characters inside number':
                await (await this.addressStep.internalNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.maximumCharactersNumber});
                break;
            case 'maximum characters additional reference':
                await (await this.addressStep.additionalReferenceInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.maximumCharactersAdditionalReference});
                break;
            case 'invalid characters street':
                await (await this.addressStep.addressStreetInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.invalidCharacters});
                break;
            case 'invalid characters outside number':
                await (await this.addressStep.externalNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.invalidCharacters});
                break;
            case 'invalid characters inside number':
                await (await this.addressStep.internalNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.invalidCharacters});
                break;
            case 'special characters are not permitted in the zip code':
                await (await this.addressStep.zipCodeInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.invalidCharacters});
                break;
            case 'invalid zip code':
                await (await this.addressStep.zipCodeInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.invalidZipCode});
                break;
            case 'wrong zip code':
                await (await this.addressStep.zipCodeInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.wrongAddressFields.wrongZipCode});
                break;
            case 'zip code':
                await (await this.addressStep.zipCodeInput.waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: global.user.addressCorrect.zipCode});
                break;
            case 'home':
                await (await this.addressStep.customerAddressCheckbox.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'nearest'}});
                break;
            default:
                throw new Error(`The address modification ${address} is not defined`);
        }
    }

    async consultsPrivacyPolicy() {
        await (await this.addressStep.privacyPolicyButton.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showsMyAddress(action) {
        await (await (await this.addressStep.showMyAddress.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        if (action === 'shows') {
            await this.completeSecurityModal();
        }
    }

    async scheduledDeliveryDate() {
        await this.scheduledDeliveryStep.scheduledDeliveryCalendar.waitForDisplayed({timeout: config.wait.M});
        await this.scheduledDeliveryStep.scheduledDeliveryCalendar.waitForAnimation({timeout: config.wait.M});
        await this.scheduledDeliveryStep.scheduledDeliveryCalendar.execute({script: () => this.click()});
        await this.calendar.dateAvailable.waitForDisplayed({timeout: config.wait.M});
        await this.calendar.dateAvailable.waitForAnimation({timeout: config.wait.M});
        await this.waitForElementsExist(this.calendar.dateAvailable, config.wait.M);
        await (await this.calendar.dateAvailable.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.calendar.dateAvailable.elements()).value[0].click();
        await this.calendar.confirmCalendar.waitForDisplayed({timeout: config.wait.M});
        await this.calendar.confirmCalendar.click();
        await this.scheduledDeliveryStep.continueButtonStep5.waitForDisplayed({timeout: config.wait.M});
        await this.scheduledDeliveryStep.continueButtonStep5.click();
    }

    async completeSecurityModal() {
        await this.fillSmsInput();
    }

    async accessToOtpModal() {
        await (await this.confirmResume.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async closeReceipt() {
        await (await this.modalSuccess.headerCloseButton.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async retryModal({isRequiredOtp = false} = {}) {
        await (await this.modal.primaryBtn.specifySelector({
            placeholder: '__MODAL_TYPE__',
            value: 'modal-error-service'
        })
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'nearest'}});
        if (isRequiredOtp) {
            await this.completeSecurityModal();
        }
    }

    async _handleModalType(item) {
        let dataSelector;
        switch (true) {
            case item.includes('overdue payments'):
                dataSelector = 'modal-overdue-payments-block-reposition';
                break;
            case item.includes('error'):
                dataSelector = 'modal-error-service';
                break;
            case item.includes('privacy'):
                dataSelector = 'modal-privacy-warning';
                break;
            case item.includes('confirm leave'):
                dataSelector = 'modal-confirm-leave';
                break;
            case item.includes('process at branch'):
                dataSelector = 'modal-process-at-branch-enabled';
                break;
            default:
                throw new Error(`Unrecognised modal type for item: ${item}`);
        }
        return dataSelector;
    }

    async _screenValidation({item, value} = {}) {
        let modalType;
        const isNotVisible = value === 'not visible';
        const isDisabled = value === 'disabled';
        switch (item.toLowerCase()) {

            // header of multistep
            case 'header resume':
                await this.header.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit resume':
                await this.header.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            // multi-step  Card Information [Completed]
            case 'card title resume':
                await this.waitForElementsExist(this.cardStep.cardTitle);
                await(await this.cardStep.cardTitle.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card name resume':
                await this.cardStep.cardName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card image resume':
                await this.cardStep.cardImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card number resume':
                await this.cardStep.cardNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card available amount resume':
                await this.cardStep.availableAmount.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'card disposed amount resume':
                await this.cardStep.disposedAmount.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            //multi-step Block  Reason [Active]
            case 'block reason title':
                await this.waitForElementsExist(this.blockStep.blockReasonTitle);
                await(await this.blockStep.blockReasonTitle.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                break;
            case 'lost reason checkbox':
                await this.blockStep.lostReasonCheckbox.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'theft reason checkbox':
                await this.blockStep.theftReasonCheckbox.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'info block message':
                await this.blockStep.infoBlockDebitMessage.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'info block and reposition message':
                await this.blockStep.infoBlockMessage.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'continue block button':
            case 'continue block and reposition button':
                await (await this.blockStep.continueButtonStep2.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({
                        timeout: config.wait.M,
                        reverse: isDisabled
                    });
                break;
            // multi-step Block Reason [Completed]
            case 'block reason title resume':
                await this.waitForElementsExist(this.blockStep.blockReasonTitleResume);
                await(await this.blockStep.blockReasonTitleResume.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                break;
            case 'block reason value resume':
                await this.blockStep.blockReasonValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'block reason modify button resume':
                if (isNotVisible) {
                    await this.blockStep.editBlockReasonButton.waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                } else  {
                    await this.waitForElementsExist(this.blockStep.editBlockReasonButton);
                    await(await this.blockStep.editBlockReasonButton.elements()).value[0]
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            // multi-step Address [Active]
            case 'address street':
                await this.waitForElementsExist(this.addressStep.addressStreetInput);
                await(await this.addressStep.addressStreetInput.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'external number':
                await this.waitForElementsExist(this.addressStep.externalNumberInput);
                await(await this.addressStep.externalNumberInput.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'internal number':
                await this.waitForElementsExist(this.addressStep.internalNumberInput);
                await(await this.addressStep.internalNumberInput.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'zip code':
                await this.waitForElementsExist(this.addressStep.zipCodeInput);
                await(await this.addressStep.zipCodeInput.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'neighborhood selector':
                if (value === 'not visible') {
                    await this.addressStep.neighborhoodButtonHidden.waitForExist({timeout: config.wait.M});
                } else {
                    await this.waitForElementsExist(this.addressStep.neighborhoodButton);
                    await (await this.addressStep.neighborhoodButton.elements()).value[0]
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'additional reference':
                await this.waitForElementsExist(this.addressStep.additionalReferenceInput);
                await(await this.addressStep.additionalReferenceInput.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'home delivery option':
                await this.addressStep.customerAddressCheckbox.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'choose branch option':
                await this.addressStep.searchBranchCheckbox.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'choose another address':
                await this.addressStep.anotherAddressCheckbox.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'delivery to any branch':
                await this.addressStep.anyBranch.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'masked home address':
                await this.addressStep.addressMasked.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unmasked home address':
                await this.addressStep.addressUnmasked.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show data':
                await (await this.addressStep.showMyAddress.waitForDisplayed({timeout: config.wait.M}))
                    .waitForText({timeout: config.wait.M, text: value});
                break;
            case 'delivery cost info':
                await this.addressStep.infoDeliveryCostMessage.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'process branch info':
                await this.addressStep.infoProcessBranch.waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                break;
            case 'maximum characters street warning resume':
                await this.addressStep.addressStreetInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'maximum characters outside number warning resume':
                await this.addressStep.externalNumberInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'maximum characters inside number warning resume':
                await this.addressStep.internalNumberInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invalid characters street warning resume':
                await this.addressStep.addressStreetInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invalid characters outside number warning resume':
                await this.addressStep.externalNumberInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invalid characters inside number warning resume':
                await this.addressStep.internalNumberInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'maximum characters additional reference warning resume':
                await this.addressStep.additionalReferenceWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'wrong zip code warning resume':
                await this.addressStep.zipCodeInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'special characters are not permitted in the zip code':
                await this.addressStep.zipCodeInput.waitForText({reverse: true});
                break;
            case 'process at the office button resume':
                await this.waitForElementsExist(this.addressStep.processAtTheOfficeButton);
                await (await this.addressStep.processAtTheOfficeButton.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button step 4':
                await (await this.scheduledDeliveryStep.continueButtonStep5.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: isDisabled});
                break;
            case 'continue button step 3':
                await (await this.addressStep.continueButtonStep4.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: isDisabled});
                break;
            // multi-step address [Completed]
            case 'address title resume':
                await this.waitForElementsExist(this.addressStep.addressTitleResume);
                await(await this.addressStep.addressTitleResume.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address title':
                await this.waitForElementsExist(this.addressStep.addressTitleResume);
                await(await this.addressStep.addressTitleResume.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address modify button':
                await this.waitForElementsExist(this.addressStep.editAddressButton);
                await(await this.addressStep.editAddressButton.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'another address check resume':
                await this.addressStep.anotherAddressCheckbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'process at the office warning resume':
                await this.waitForElementsExist(this.addressStep.processAtTheOfficeMessage);
                await (await this.addressStep.processAtTheOfficeMessage.elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address type resume':
                await this.addressStep.addressResume.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address cost warning resume':
                await this.addressStep.deliveryTypeFeeResume.waitForDisplayed({timeout: config.wait.M});
                break;
            // multi-step new card [Active]
            case 'info renewal message':
            case 'info reposition message':
                await this.newCardStep.infoCostMessage.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'new card title':
                await this.waitForElementsExist(this.newCardStep.newCardTitle);
                await(await this.newCardStep.newCardTitle.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                break;
            case 'instant new card radio':
                await this.newCardStep.instantNewCardRadio.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'single instant new card':
                await this.newCardStep.singleInstantNewCard.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'single custom new card':
                await this.newCardStep.singleCustomNewCard.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'custom new card radio':
                await this.newCardStep.customNewCardRadio.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'continue reposition button':
                await (await this.newCardStep.continueButtonStep3.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({
                        timeout: config.wait.M,
                        reverse: isDisabled
                    });
                break;
            case 'continue renewal button':
                await (await this.newCardStep.continueButtonStep3.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({
                        timeout: config.wait.M,
                        reverse: isDisabled
                    });
                break;
            // multi-step new card [Completed]
            case 'new card title resume':
                await this.waitForElementsExist(this.newCardStep.newCardTitleResume);
                await(await this.newCardStep.newCardTitleResume.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible });
                break;
            case 'new card modify button resume':
                if (isNotVisible) {
                    await this.newCardStep.editNewCardButton.waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                } else  {
                    await this.waitForElementsExist(this.newCardStep.editNewCardButton);
                    await(await this.newCardStep.editNewCardButton.elements()).value[0]
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'new card type resume':
                await this.newCardStep.cardTypeResume.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'new card cost resume':
                await this.newCardStep.repositionFeesResume.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            // multi-step scheduled delivery [Complted]
            case 'scheduled delivery title resume':
                await this.waitForElementsExist(this.scheduledDeliveryStep.scheduledDeliveryTitleResume);
                await(await this.scheduledDeliveryStep.scheduledDeliveryTitleResume.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible });
                break;
            case 'scheduled delivery date resume':
                await this.waitForElementsExist(this.scheduledDeliveryStep.scheduledDeliveryDateResume);
                await(await this.scheduledDeliveryStep.scheduledDeliveryDateResume.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible });
                break;
            case 'scheduled delivery hour resume':
                await this.waitForElementsExist(this.scheduledDeliveryStep.scheduledDeliveryHourResume);
                await(await this.scheduledDeliveryStep.scheduledDeliveryHourResume.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible });
                break;
            case 'edit scheduled delivery resume':
                await this.waitForElementsExist(this.scheduledDeliveryStep.editScheduledDeliveryButton);
                await(await this.scheduledDeliveryStep.editScheduledDeliveryButton.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible });
                break;
            // multi-step Terms and Conditions [Active]
            case 'terms and conditions title':
                await this.waitForElementsExist(this.termsStep.termsTitle);
                await(await this.termsStep.termsTitle.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M });
                break;
            case 'terms and conditions check':
                await this.termsStep.termsCheckbox.waitForDisplayed({timeout: config.wait.M});
                if (value === 'checked' || value === 'not checked') {
                    await this.termsStep.termsCheckbox.waitForAttribute({
                        timeout: config.wait.M,
                        attribute: 'aria-checked',
                        value: value
                    });
                }
                break;
            case 'confirm terms and conditions':
                await (await this.termsStep.continueToResume.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: isDisabled});
                break;
            // multi-step Terms and Conditions [Completed]
            case 'terms and conditions title resume':
                await this.waitForElementsExist(this.termsStep.termsTitleResume);
                await(await this.termsStep.termsTitleResume.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M,  reverse: isNotVisible });
                break;
            case 'terms and conditions status resume':
                await this.termsStep.termsAcceptedStatus.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'terms and conditions modify button resume':
                if (isNotVisible) {
                    await this.termsStep.editTermsButton.waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                } else  {
                    await this.waitForElementsExist(this.termsStep.editTermsButton);
                    await(await this.termsStep.editTermsButton.elements()).value[0]
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            // Summary of multi-steps
            case 'fee amount section resume':
                await this.feeAmountSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm resume button':
                await this.confirmResume.waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                break;
            // success modal
            case 'modal success header':
                await this.modalSuccess.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success close':
                await this.modalSuccess.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success icon':
                await this.modalSuccess.imageSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success title':
                await this.modalSuccess.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success date and time':
                await this.modalSuccess.dateTime.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success card to replaced':
                await this.modalSuccess.cardName.waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                break;
            case 'modal success reason damage':
                await this.modalSuccess.blockReason.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'modal success new card type':
                await this.modalSuccess.newCardType.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible});
                break;
            case 'modal success replacement cost':
                await this.modalSuccess.repositionCardFee.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success delivery address':
                await this.modalSuccess.addressDelivery.waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                break;
            case 'modal success shipping cost':
                await this.modalSuccess.feeDelivery.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success delivery date':
                await this.modalSuccess.scheduleDate.waitForDisplayed({
                    timeout: config.wait.M, reverse: isNotVisible});
                break;
            case 'modal success delivery time':
                await this.modalSuccess.scheduleHour.waitForDisplayed({
                    timeout: config.wait.M, reverse: isNotVisible});
                break;
            case 'modal success operation code':
                await this.modalSuccess.operationNumber.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: isNotVisible
                });
                break;
            case 'modal success shipment mail information':
                await this.modalSuccess.mailMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success reposition information':
                await this.modalSuccess.repositionNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success shipment tracking information':
                if (value === 'error sucursal') {
                    await this.modalSuccess.notificationWithoutDelivery.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.modalSuccess.timeDeliveryMessage.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'modal success reposition link':
                await this.modalSuccess.repositionLink.waitForDisplayed({timeout: config.wait.M});
                break;
            //modals (errors, caution-overdue payments, privacy, confirm leave,exit process at branch)
            case 'modal header':
                modalType = await this._handleModalType(value);
                await this.modal.header.specifySelector({placeholder: '__MODAL_TYPE__', value: modalType})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal close':
                modalType = await this._handleModalType(value);
                await this.modal.headerCloseButton.specifySelector({
                    placeholder: '__MODAL_TYPE__',
                    value: modalType
                })
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon':
                modalType = await this._handleModalType(value);
                await this.modal.icon.specifySelector({placeholder: '__MODAL_TYPE__', value: modalType})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title':
                modalType = await this._handleModalType(value);
                await this.modal.title.specifySelector({placeholder: '__MODAL_TYPE__', value: modalType})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal description':
                modalType = await this._handleModalType(value);
                await this.modal.content.specifySelector({placeholder: '__MODAL_TYPE__', value: modalType})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal primary button':
                modalType = await this._handleModalType(value);
                await this.modal.primaryBtn.specifySelector({
                    placeholder: '__MODAL_TYPE__',
                    value: modalType
                })
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal secondary button':
                modalType = await this._handleModalType(value);
                await this.modal.secondaryBtn.specifySelector({
                    placeholder: '__MODAL_TYPE__',
                    value: modalType
                })
                    .waitForDisplayed({timeout: config.wait.M, reverse: isNotVisible});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new CardBlockManagement();
