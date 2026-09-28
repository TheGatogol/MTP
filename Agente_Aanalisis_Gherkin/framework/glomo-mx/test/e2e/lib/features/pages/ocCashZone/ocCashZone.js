import { Commands, page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class OcCashZone extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'ocCashZone',
            root: '#cells-template-ocCashZone[state="active"]',
            elements: {
                deliveryAccount: '#stepIncomeAccount payments-payments-acceptance-mx-financial-accounts payments-payments-acceptance-mx-account-list payments-payments-acceptance-mx-list-card:nth-child(__N__)',
                headerUpgradeTop: '[data-tag-name="bbva-help-modal"][header-text="Cobro al toque"]',
                modal: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][aria-label="Zona de cobro"]'
                    },
                    header: '[class=" button-2 "] [id="heading"]',
                    exitModalButton: '[text="Zona de cobro"] #btn-close',
                    exitMutistepButton: '[text="Contratar Zona de cobro"] #btn-close',
                },
                offerPage: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-offer"]',
                    },
                    offerSections: '[class="description-container"] [class="category"]:nth-of-type(__N__)',
                    moreInfoReaderLink: '[data-selector="bbva-link-more-info-reader"]',
                    moreInfoCommissionsLink: '[data-selector="bbva-link-more-info-commissions"]',
                    contactAdvisorLink: '[data-tag-name="payments-payments-acceptance-mx-panel-button"] [variant="link"][role="button"]',
                    defaultErrorButton: '[data-tag-name="payments-payments-acceptance-mx-mpos-price-stock-error-alert"] [data-selector="bbva-button-default-retry"]',
                    continueButton: '[data-tag-name="payments-payments-acceptance-mx-panel-button"] [class="content"] [data-tag-name="bbva-button-default"][role="button"]',
                    panelInfo: {
                        properties: {
                            root: '[data-tag-name="payments-payments-acceptance-mx-panel-info"]',
                        },
                        panelInfoHeader: '[data-tag-name="bbva-type-text"][size="2XL"]',
                    },
                    moreInfoReaderModal: {
                        properties: {
                            root: '[data-selector="bbva-help-modal-more-info-reader"]',
                        },
                        headermoreInfoReaderModal: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                        closemoreInfoReaderModal: '[data-tag-name="bbva-header-main"] [data-id="iconsRight"]',
                        tabMenuMoreInfoReaderModal: '#tab-default div.group',
                        tabMenuOptionInfoReaderModal: '[id="__VALUE__"][aria-controls="__VALUE__"]',
                        accordionInformationSection: '[slot="__VALUE__"] [data-tag-name="bbva-expandable-accordion"]:nth-of-type(__N__)',
                        bannerSection: '[slot="__VALUE__"] [data-tag-name="bbva-banner-image"]',
                        titleSection: '[slot="__VALUE__"] [data-tag-name="bbva-type-text"][class="title"]',
                        descriptionSection: '[slot="__VALUE__"] [data-tag-name="bbva-type-text"][class="description-content"]',
                        exitButton: '[data-tag-name="bbva-header-main"] #btn-close',
                    },
                    moreInfoCommissionsModal: {
                        properties: {
                            root: '[data-selector="bbva-help-modal-commissions-details"]',
                        },
                        headerMoreInfoCommissions: '[class="help-modal"] [class="modal-header"]',
                        iconMoreInfoCommissions: '[id="helpModalTitle"] [icon="spherica:help"]',
                        exitButtonmoreInfoCommissions: '[data-tag-name="bbva-header-main"] #btn-close',
                        informationMoreInfoCommissions: '#helpModalContent',
                    },
                    updateAccountInfo: {
                        properties: {
                            root: '[variant="caution"]',
                        },
                        header: '[class="title"]',
                        icon: '[class="title-icon"]',
                        description: '[class="message"]',
                    },
                },
                orderData: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-order-info"]',
                    },
                    commercialNameInput: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-text"] [aria-label="Nombre del negocio"]',
                    commercialDescriptionInput: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-textarea"] [aria-label="Descripción del negocio"]',
                    typeOfActivitySelect: '[data-selector="bbva-form-activity-select"] #button',
                    typeOfActivityOption: '[data-selector="bbva-form-activity-select"] [data-tag-name="bbva-form-option"]:nth-child(__N__)',
                    categorySelect: '[data-selector="bbva-form-category-select"] #button',
                    categoryOption: '[data-selector="bbva-form-category-select"] [data-tag-name="bbva-form-option"]:nth-child(__N__)',
                    subCategorySelect: '[data-selector="bbva-form-select-subcategory"] #button',
                    subCategoryOption: '[data-selector="bbva-form-select-subcategory"] [data-tag-name="bbva-form-option"]:nth-child(__N__)',
                    unmaskLink: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                    unmaskData: '[data-tag-name="payments-payments-acceptance-mx-list-simple"]:nth-of-type(__N__)',
                    privacyNoticeModal: {
                        properties: {
                            root: '[data-tag-name="bbva-help-modal"][visible]'
                        },
                        headerPrivacyNoticeModal: '#helpModalHeader',
                        descriptionPrivacyNoticeModal: '[class="modal-main"] [class="modal-container"]',
                        closeButtonPrivacyNoticeModal: '#btn-close'
                    },
                    privacyNoticeLink: '[link-text="Aviso de privacidad"] [role="button"]',
                    continueButton: '[class="button-container"] [data-tag-name="bbva-button-default"]',
                },
                incomeAccount: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-financial-accounts"][type="income"]',
                    },
                    viewAllLink: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"][role="button"]',
                    accountItem: '[data-tag-name="bbva-help-modal"][aria-label="Cuentas"] [data-tag-name="payments-payments-acceptance-mx-account-list"] [data-tag-name="payments-payments-acceptance-mx-list-card"]:nth-child(__N__) [data-tag-name="bbva-type-link"]',
                    closeViewAllModal: '[data-tag-name="bbva-header-main"] div.header-icons.right-group',
                    continueButton: '[data-selector="bbva-button-default-financial-accounts"]',
                    descriptionIncomeAccount: '[data-tag-name="bbva-type-text"][text="Elige la cuenta en la que recibirás el ingreso de tus ventas."]',
                },
                addCardReader: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-card-reader"]',
                    },
                    withCardReader: '[value="withCardReader"]',
                    cardReaderOption: '[role="radiogroup"] [role="radio"][value="__VALUE__"]',
                    moreInfoReaderLink: '[data-tag-name="bbva-type-link"][role="button"]',
                    continueButton: '[data-tag-name="bbva-button-default"][aria-label="Continuar"]'
                },
                cardReaderDetailsModal: {
                    properties: {
                        root: '[data-selector="bbva-help-modal-more-info-reader"]',
                    },
                    header: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                    closeButton: '[data-tag-name="bbva-header-main"] [data-id="iconsRight"]',
                    tabMenu: '#tab-default div.group',
                    openpayMiniTab: '[id="content-1"]',
                    accordionInformationSection: '[slot="__VALUE__"] [data-tag-name="bbva-expandable-accordion"]:nth-of-type(__N__)',
                    bannerSection: '[slot="__VALUE__"] [data-tag-name="bbva-banner-image"]',
                    titleSection: '[slot="__VALUE__"] [data-tag-name="bbva-type-text"][class="title"]',
                    descriptionSection: '[slot="__VALUE__"] [data-tag-name="bbva-type-text"][class="description-content"]',
                    exitButton: '[data-tag-name="bbva-header-main"] #btn-close',
                },
                cardReaderConfirmationModal: {
                    properties: {
                        root: '[data-selector="bbva-help-modal-card-reader-confirmation"]',
                    },
                    continueButton: 'div.slot-footer [data-tag-name="bbva-button-default"][role="button"]',
                },
                deliveryAddress: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-delivery-address"]',
                    },
                    descriptionDeliveryAddress: '[class="description"]',
                    informationMessage: '[data-tag-name="bbva-notification-message"]',
                    informationMessageInfoLink: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                    mainAddressDescription: '[data-tag-name="bbva-form-container"] [class="address-container main-address-container"]',
                    unmaskAddressDescription: '[class="address-container main-address-container"] [class="address-content"][text=__ADDRESS__]',
                    unmaskLink: '[data-selector="bbva-link-toggle-address-mask"]',
                    otherAddressRadioInput: '[role="radio"][value="other"]',
                    otherAddressDescription: '[data-tag-name="bbva-form-container"] [class="other-address-input"]',
                    otherAddressDeleteIcon: '[data-tag-name="bbva-type-icon"][icon="spherica:trash"]',
                    modifiedAddressIcon: '[data-tag-name="bbva-type-icon"][icon="spherica:edit"]',
                    otherAddressDeleteButton: '[data-tag-name="bbva-button-default"][class="footer-button"][text="Eliminar"]',
                    addAddressLink: '[data-selector="bbva-link-add-address"]',
                    continueButton: '[aria-label="Continuar"]',
                },
                moreInfoDeliveryAddress: {
                    properties: {
                        root: '[data-selector="bbva-help-modal-more-info"]',
                    },
                    header: '#helpModalHeader',
                    icon: '[class="title-icon"]',
                    closeBtn: '[id="btn-close"]',
                    title: '[id="title-text"]',
                    content: '[slot="slot-content"]',
                },
                paymentAccount: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-financial-accounts"][type="payment"]',
                    },
                    descriptionPaymentAccount: '[data-tag-name="bbva-type-text"][class="add-hzont-margin"]',
                    viewAllLink: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"][role="button"]',
                    accountItem: '[data-tag-name="bbva-help-modal"][aria-label="Cuentas"] [data-tag-name="payments-payments-acceptance-mx-account-list"] [data-tag-name="payments-payments-acceptance-mx-list-card"]:nth-child(__N__) [data-tag-name="bbva-type-link"]',
                    continueButton: '[data-selector="bbva-button-default-financial-accounts"]',
                },
                termsAndConditions: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-terms-and-conditions"]',
                    },
                    downloadFileLink: '[data-tag-name="payments-payments-acceptance-mx-list-file"] [data-tag-name="bbva-type-link"][role="button"]',
                    checkBoxTermsAndConditions: '[data-tag-name="bbva-form-checkbox"]:nth-of-type(__N__)',
                    continueButton: '[role="button"][data-tag-name="bbva-button-default"]',
                },
                multistep: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-multistep"]',
                    },
                    headerIncomeAccount: '#stepIncomeAccount [class="content-step"] .header',
                    headerDeliveryAddress: '#stepDeliveryAddress #heading .heading-label',
                    headerPaymentAccount: '#stepPaymentAccount [class="header header-ellipsis   "]',
                    insufficientBalanceLabel: '#stepPaymentAccount > payments-payments-acceptance-mx-financial-accounts payments-payments-acceptance-mx-account-list',
                    headerTermsAndConditions: '#stepTermsAndConditions #heading',
                    instructionIncomeAccount: '#stepIncomeAccount [data-tag-name="bbva-type-text"][class="add-hzont-margin"]',
                    panelAccountsIncomeAccount: '#stepIncomeAccount [data-tag-name="payments-payments-acceptance-mx-financial-accounts"]',
                    closeButtonPanelIncomeAccount: '[data-tag-name="bbva-help-modal"][aria-label="Cuentas"] [data-id="iconsRight"]',
                    exitButtonMultistep: '[slot="slot-header"] [class="header-icons right-group"] #btn-close',
                    continueButton: '#stepCardReader [data-tag-name="bbva-button-default"][aria-label="Continuar"]',
                    closeModal: {
                        properties: {
                            root: '[data-tag-name="payments-payments-acceptance-mx-exit-order-modal"]',
                        },
                        iconCloseModal: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-type-icon"][class="title-icon"]',
                        headerCloseModal: '[data-tag-name="bbva-help-modal"] div.modal-header',
                        closeButtonCloseModal: '[data-tag-name="bbva-help-modal"] div.header-icons.right-group',
                        descriptionCloseModal: '[data-tag-name="bbva-help-modal"] div.modal-container',
                        exitButtonCloseModal: '[data-tag-name="bbva-help-modal"] div.slot-footer [data-tag-name="bbva-button-default"][role="button"]',
                        continueCloseModal: '#exit-order-modal div > div.content div > div.modal-main > div.modal-footer > slot > div > bbva-button-default.footer-button.link',
                    },
                    termsAndConditionsModal: {
                        properties: {
                            root: '[data-tag-name="bbva-expandable-step"]#stepTermsAndConditions]'
                        },
                        header: '#heading',
                    },
                    summaryModal: {
                        modifyIncomeAccountLink: '#stepIncomeAccount .header.header-ellipsis #editButton',
                        modifyCardReaderLink: '#stepCardReader .header.header-ellipsis #editButton',
                        orderDataSummary: '#stepOrderInfo',
                        incomeAccountSummary: '#stepIncomeAccount',
                        addCardReaderSummary: '#stepCardReader',
                        deliveryAddressSummary: '#stepDeliveryAddress',
                        paymentAccountSummary: '#stepPaymentAccount',
                        termsAndConditionsSummary: '#stepTermsAndConditions',
                        contractPanel: '[slot="confirmation"]',
                        contractButton: '[slot="confirmation"] [data-tag-name="bbva-button-default"][role="button"]'
                    },
                },
                successPage: {
                    properties: {
                        root: '[data-tag-name="payments-payments-acceptance-mx-thank-you"]',
                    },
                    header: '[class="panel-process-container"]',
                    amountPaid: '[class="panel-process-container"] [data-tag-name="bbva-type-amount"]',
                    description: '[class="description-container"] [data-tag-name="bbva-type-text"]',
                    dateContract: '[data-selector="payments-payments-acceptance-mx-list-simple-date"]',
                    agreementNumber: '[class="container"] [data-selector="payments-payments-acceptance-mx-list-simple-agreement"]',
                    referenceNumber: '[class="container"] [data-selector="payments-payments-acceptance-mx-list-simple-payment-folio"]',
                    operationTypeNumber: '[class="container"] [data-selector="payments-payments-acceptance-mx-list-simple-operation-type"]',
                    cieGuideNumber: '[class="container"] [data-selector="payments-payments-acceptance-mx-list-simple-guide"]',
                    folioNumber: '[class="container"] [data-selector="payments-payments-acceptance-mx-list-simple-contract-folio"]',
                    paymentAccount: '[class="container"] [data-selector="payments-payments-acceptance-mx-list-simple-payment-account"]',
                },
                deliveryAddressForm: {
                    inputStreet: '#street [slot="_input"][type="text"]',
                    inputExternalNumber: '#externalNumber [slot="_input"][type="text"]',
                    inputInternalNumber: '#internalNumber [slot="_input"][type="text"]',
                    inputPostalCode: '#postalCode [slot="_input"][type="text"]',
                    inputNeighborhood: '#neighborhood [slot="_input"][type="text"]',
                    inputState: '#state [slot="_input"][type="text"]',
                    inputMunicipality: '#municipality [slot="_input"][type="text"]',
                    saveButton: '[data-tag-name="bbva-button-default"][text="Guardar"][role="button"]',
                },
            },
            requiredElements: ['offerPage'],
        });
    }

    async _screenValidation({ item, value, section } = {}) {
        switch (item.toLowerCase()) {
            case 'close modal icon':
                await this.multistep.closeModal.iconCloseModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close modal header':
                await this.multistep.closeModal.headerCloseModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close modal cross button':
                await this.multistep.closeModal.closeButtonCloseModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close modal description':
                await this.multistep.closeModal.descriptionCloseModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close modal exit button':
                await this.multistep.closeModal.exitButtonCloseModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close modal continue button':
                await this.multistep.closeModal.continueCloseModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer header':
                await this.modal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer payment section':
                await (await this.offerPage.offerSections.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer benefits section':
                await (await this.offerPage.offerSections.specifySelector({placeholder: '__N__', value: 2})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer commissions section':
                await (await this.offerPage.offerSections.specifySelector({placeholder: '__N__', value: 3})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer continue button':
                await this.offerPage.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer ask for advisor link':
                await this.offerPage.contactAdvisorLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer more info reader link':
                await this.offerPage.moreInfoReaderLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer other commissions link':
                await this.offerPage.moreInfoCommissionsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info reader header':
                await this.offerPage.moreInfoReaderModal.headermoreInfoReaderModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer header upgrade top':
                await this.headerUpgradeTop.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'offer panel info header':
                await this.offerPage.panelInfo.panelInfoHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info reader close button':
                await this.offerPage.moreInfoReaderModal.closemoreInfoReaderModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info reader panel information':
                await this.offerPage.moreInfoReaderModal.tabMenuMoreInfoReaderModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info reader descriptive banner':
                if (section === 'cash on delivery') {
                    await (await this.offerPage.moreInfoReaderModal.bannerSection.specifySelector({placeholder: '__VALUE__', value: 'content-0'})
                        .waitForDisplayed({timeout: config.wait.M}));
                } else if (section === 'openpay mini reader') {
                    await (await this.offerPage.moreInfoReaderModal.bannerSection.specifySelector({placeholder: '__VALUE__', value: 'content-1'})
                        .waitForDisplayed({timeout: config.wait.M}));
                } else if (section === 'payment link') {
                    await (await this.offerPage.moreInfoReaderModal.bannerSection.specifySelector({placeholder: '__VALUE__', value: 'content-2'})
                        .waitForDisplayed({timeout: config.wait.M}));
                }
                break;
            case 'more info reader benefits accordion':
                if (section === 'cash on delivery') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-0'})
                        .specifySelector({placeholder: '__N__', value: 1})
                        .waitForDisplayed({timeout: config.wait.M}));
                } else if (section === 'openpay mini reader') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-1'})
                        .specifySelector({placeholder: '__N__', value: 2})
                        .waitForDisplayed({timeout: config.wait.M}));
                } else if (section === 'payment link') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-2'})
                        .specifySelector({placeholder: '__N__', value: 3})
                        .waitForDisplayed({timeout: config.wait.M}));
                }
                break;
            case 'more info reader considerations accordion':
                if (section === 'cash on delivery') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-0'})
                        .specifySelector({placeholder: '__N__', value: 1})
                        .waitForDisplayed({timeout: config.wait.M}));
                } else if (section === 'openpay mini reader') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-1'})
                        .specifySelector({placeholder: '__N__', value: 2})
                        .waitForDisplayed({timeout: config.wait.M}));
                } else if (section === 'payment link') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-2'})
                        .specifySelector({placeholder: '__N__', value: 3})
                        .waitForDisplayed({timeout: config.wait.M}));
                }
                break;
            case 'more info reader specifications accordion':
                if (section === 'cash on delivery') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-0'})
                        .specifySelector({placeholder: '__N__', value: 1})
                        .waitForDisplayed({timeout: config.wait.M}));
                } else if (section === 'openpay mini reader') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-1'})
                        .specifySelector({placeholder: '__N__', value: 2})
                        .waitForDisplayed({timeout: config.wait.M}));
                } else if (section === 'payment link') {
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-2'})
                        .specifySelector({placeholder: '__N__', value: 3})
                        .waitForDisplayed({timeout: config.wait.M}));
                }
                break;
            case 'more info commissions header':
                await this.offerPage.moreInfoCommissionsModal.headerMoreInfoCommissions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info commissions help icon':
                await this.offerPage.moreInfoCommissionsModal.iconMoreInfoCommissions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info commissions exit button':
                await this.offerPage.moreInfoCommissionsModal.exitButtonmoreInfoCommissions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info commissions information panel':
                await this.offerPage.moreInfoCommissionsModal.informationMoreInfoCommissions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy notice header':
                await this.orderData.privacyNoticeModal.headerPrivacyNoticeModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy notice description':
                await this.orderData.privacyNoticeModal.descriptionPrivacyNoticeModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy notice exit button':
                await this.orderData.privacyNoticeModal.closeButtonPrivacyNoticeModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income all accounts modal header':
                await this.multistep.headerIncomeAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income all accounts modal description':
                await this.multistep.instructionIncomeAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income all accounts modal view all link':
                await this.incomeAccount.viewAllLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income all accounts modal panel accounts':
                await (await this.multistep.panelAccountsIncomeAccount.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({ timeout: config.wait.L, reverse: value === 'disabled' });
                break;
            case 'income all accounts modal close button':
                await this.multistep.closeButtonPanelIncomeAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income all accounts modal continue button':
                await (await this.incomeAccount.continueButton.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({ timeout: config.wait.L, reverse: value === 'disabled' });
                break;
            case 'income account modal header':
                await this.multistep.headerIncomeAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income account modal description':
                await this.multistep.instructionIncomeAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income account view all link':
                await this.incomeAccount.viewAllLink.waitForDisplayed({reverse: value === 'not visible'});
                break;
            case 'income account continue button':
                await this.incomeAccount.continueButton.waitForDisplayed({reverse: value === 'not visible'});
                break;
            case 'delivery address header':
                await this.multistep.headerDeliveryAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address description':
                await this.deliveryAddress.descriptionDeliveryAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address message information':
                await this.deliveryAddress.informationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address main address section':
                await this.deliveryAddress.mainAddressDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address main address unmask':
                await this.deliveryAddress.unmaskAddressDescription.waitForAttribute({attribute: 'description', value: global.user.data.address, timeout: config.wait.M});
                break;
            case 'delivery address other address section':
                await this.deliveryAddress.otherAddressDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address continue button':
                await this.deliveryAddress.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment account header':
                await this.multistep.headerPaymentAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment account description':
                await this.paymentAccount.descriptionPaymentAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment account insufficient balance':
                await this.multistep.insufficientBalanceLabel.waitForExist({timeout: config.wait.M});
                break;
            case 'payment account continue button':
                await (await this.paymentAccount.continueButton.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'terms and conditions header':
                await this.multistep.headerTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions download file':
                await this.termsAndConditions.downloadFileLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions first checkbox':
                await (await this.termsAndConditions.checkBoxTermsAndConditions.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'terms and conditions second checkbox':
                await (await this.termsAndConditions.checkBoxTermsAndConditions.specifySelector({placeholder: '__N__', value: 2})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions third checkbox':
                await (await this.termsAndConditions.checkBoxTermsAndConditions.specifySelector({placeholder: '__N__', value: 3})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions fourth checkbox':
                await (await this.termsAndConditions.checkBoxTermsAndConditions.specifySelector({placeholder: '__N__', value: 4})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions continue button':
                await (await this.termsAndConditions.continueButton.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'summary order data':
                await this.multistep.summaryModal.orderDataSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary income account':
                await this.multistep.summaryModal.incomeAccountSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary add card reader':
                await this.multistep.summaryModal.addCardReaderSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary delivery address':
                await this.multistep.summaryModal.deliveryAddressSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary payment account':
                await this.multistep.summaryModal.paymentAccountSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary terms and conditions':
                await this.multistep.summaryModal.termsAndConditionsSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary contract panel':
                await this.multistep.summaryModal.contractPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary contract button':
                await this.multistep.summaryModal.contractButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page header':
                await this.successPage.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page amount paid':
                await this.successPage.amountPaid.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page payment description':
                await this.successPage.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page contract date':
                await this.successPage.dateContract.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page agreement number':
                await this.successPage.agreementNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page reference number':
                await this.successPage.referenceNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page operation type number':
                await this.successPage.operationTypeNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page cie guide number':
                await this.successPage.cieGuideNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page folio number':
                await this.successPage.folioNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page payment account':
                await this.successPage.paymentAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'activity type services':
                await (await this.orderData.typeOfActivityOption.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'activity type sales':
                await (await this.orderData.typeOfActivityOption.specifySelector({placeholder: '__N__', value: 2})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category form option 1':
                await (await this.orderData.categoryOption.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category form option 2':
                await (await this.orderData.categoryOption.specifySelector({placeholder: '__N__', value: 2})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category form option 3':
                await (await this.orderData.categoryOption.specifySelector({placeholder: '__N__', value: 3})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category form option 4':
                await (await this.orderData.categoryOption.specifySelector({placeholder: '__N__', value: 4})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category form option 5':
                await (await this.orderData.categoryOption.specifySelector({placeholder: '__N__', value: 5})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subcategory form option 1':
                await (await this.orderData.subCategoryOption.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subcategory form option 2':
                await (await this.orderData.subCategoryOption.specifySelector({placeholder: '__N__', value: 2})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subcategory form option 3':
                await (await this.orderData.subCategoryOption.specifySelector({placeholder: '__N__', value: 3})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subcategory form option 4':
                await (await this.orderData.subCategoryOption.specifySelector({placeholder: '__N__', value: 4})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subcategory form option 5':
                await (await this.orderData.subCategoryOption.specifySelector({placeholder: '__N__', value: 5})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unmasked email oc cash zone':
                await (await this.orderData.unmaskData.specifySelector({placeholder: '__N__', value: 1})).waitForAttribute({attribute: 'description', value: global.user.data.email, timeout: config.wait.M});
                break;
            case 'unmasked phone oc cash zone':
                await (await this.orderData.unmaskData.specifySelector({placeholder: '__N__', value: 2})).waitForAttribute({attribute: 'description', value: global.user.data.phone, timeout: config.wait.M});
                break;
            case 'more info delivery header':
                await this.moreInfoDeliveryAddress.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info delivery icon':
                await this.moreInfoDeliveryAddress.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info delivery title':
                await this.moreInfoDeliveryAddress.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info delivery content':
                await this.moreInfoDeliveryAddress.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info delivery close button':
                await this.moreInfoDeliveryAddress.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer update account header':
                await this.offerPage.updateAccountInfo.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer update account icon':
                await this.offerPage.updateAccountInfo.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer update account description':
                await this.offerPage.updateAccountInfo.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card reader details modal header':
                await this.cardReaderDetailsModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card reader details modal close button':
                await this.cardReaderDetailsModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card reader details modal openpay mini label':
                await this.cardReaderDetailsModal.openpayMiniTab.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card reader details modal benefits link':
                await (await this.cardReaderDetailsModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-1'}).specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card reader details modal considerations link':
                await (await this.cardReaderDetailsModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-1'}).specifySelector({placeholder: '__N__', value: 2})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card reader details modal specifications link':
                await (await this.cardReaderDetailsModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-1'}).specifySelector({placeholder: '__N__', value: 3})).waitForExist({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    setCurrentStep(step) {
        this.currentStep = step;
    }

    async continueProcess(step = this.currentStep, isMultipleAccounts = false) {
        const stepList = [
            'offerPage',
            'orderData',
            'incomeAccount',
            'addCardReader',
            'deliveryAddress',
            'paymentAccount',
            'termsAndConditions',
            'summary',
        ];
        if (isMultipleAccounts) {
            await (await this[step].firstAccountItem.waitForClickable({timeout: config.wait.M})).click();
        } else {
            await (await this[step].continueButton.waitForClickable({timeout: config.wait.M})).click();
        }
        this.setCurrentStep(stepList[stepList.indexOf(step) + 1]);
        logger.info(`Moving to step '${this.currentStep}'`);
    }

    async goToStep({ step, isMultipleAccounts = false } = {}) {
        switch (step.toLowerCase()) {
            case 'order data':
                if (!this.currentStep) {
                    this.setCurrentStep('offerPage');
                }
                if (this.currentStep === 'offerPage') {
                    await this.continueProcess();
                }
                break;
            case 'income account':
                await this.goToStep({step: 'order data', isMultipleAccounts});
                if (this.currentStep === 'orderData') {
                    await this.completeOrderData();
                    await this.continueProcess();
                }
                break;
            case 'add card reader':
                await this.goToStep({step: 'income account', isMultipleAccounts});
                if (this.currentStep === 'incomeAccount') {
                    await Commands.pause({time: config.wait.S});
                    if (await this.incomeAccount.continueButton.isDisplayed()) {
                        await this.continueProcess();
                    } else {
                        await this.selectAccountIncomeAccount();
                        this.setCurrentStep('addCardReader');
                    }
                }
                break;
            case 'delivery address':
                await this.goToStep({step: 'add card reader'});
                if (this.currentStep === 'addCardReader') {
                    await this.selectCardReaderOption('withCardReader');
                    await this.continueProcess(this.currentStep, isMultipleAccounts);
                }
                break;
            case 'payment account':
                await this.goToStep({step: 'delivery address', isMultipleAccounts});
                if (this.currentStep === 'deliveryAddress') {
                    await this.continueProcess();
                }
                break;
            case 'terms and conditions':
                await this.goToStep({step: 'payment account', isMultipleAccounts});
                if (this.currentStep === 'paymentAccount') {
                    await this.continueProcess();
                }
                break;
            case 'summary':
                await this.goToStep({step: 'terms and conditions', isMultipleAccounts});
                if (this.currentStep === 'termsAndConditions') {
                    await this.termsAndCondition('4');
                    await this.continueProcess();
                }
                break;
            case 'success page':
                await this.goToStep({step: 'summary', isMultipleAccounts});
                if (this.currentStep === 'summary') {
                    await this.continueProcess();
                }
                break;
            default:
                throw new Error(`The step '${step}' is unknown. Cannot be processed.`);
        }
    }

    async openModal(modal) {
        switch (modal) {
            case 'more info reader':
                await (
                    await (
                        await this.offerPage.moreInfoReaderLink.waitForDisplayed({timeout: config.wait.M})
                    ).waitForClickable({timeout: config.wait.M})
                ).click();
                break;
            case 'more info commissions':
                await (
                    await (
                        await this.offerPage.moreInfoCommissionsLink.waitForDisplayed({timeout: config.wait.M})
                    ).waitForClickable({timeout: config.wait.M})
                ).click();
                break;
            case 'privacy notice':
                await (
                    await (
                        await this.orderData.privacyNoticeLink.waitForDisplayed({timeout: config.wait.M})
                    ).waitForClickable({timeout: config.wait.M})
                ).click();
                break;
            case 'all income accounts':
                await (
                    await (
                        await this.incomeAccount.viewAllLink.waitForDisplayed({timeout: config.wait.M})
                    ).waitForClickable({timeout: config.wait.M})
                ).click();
                break;
            case 'all payment accounts':
                await (
                    await (
                        await this.paymentAccount.viewAllLink.waitForDisplayed({timeout: config.wait.M})
                    ).waitForClickable({timeout: config.wait.M})
                ).click();
                break;
            case 'more info delivery address':
                await (
                    await (
                        await this.deliveryAddress.informationMessageInfoLink.waitForDisplayed({timeout: config.wait.M})
                    ).waitForClickable({timeout: config.wait.M})
                ).click();
                break;
            case 'card reader details':
                await (
                    await (
                        await this.addCardReader.moreInfoReaderLink.waitForDisplayed({timeout: config.wait.M})
                    ).waitForClickable({timeout: config.wait.M})
                ).click();
                break;
            default:
                throw new Error(`The option '${modal}' is unknown. Cannot be processed.`);
        }
    }

    async completeOrderData() {
        await (await this.orderData.commercialNameInput.waitForClickable({timeout: config.wait.M})).setValue({value: 'Aseguradora Plus'});
        await (await this.orderData.commercialDescriptionInput
            .waitForClickable({timeout: config.wait.M}))
            .setValue({ value: 'Aseguradora especializada en seguros de hogar.' });
        await (await (await this.orderData.typeOfActivitySelect
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await (await this.orderData.typeOfActivityOption.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M })).click();
        await (await (await this.orderData.categorySelect.waitForDisplayed({timeout: config.wait.M})).waitForClickable({timeout: config.wait.M})).click();
        await (await (await this.orderData.categoryOption.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async inputComercialInformation() {
        await (await this.orderData.commercialNameInput.waitForClickable({timeout: config.wait.M})).setValue({value: 'Construtek'});
        await (await this.orderData.commercialDescriptionInput.waitForClickable({timeout: config.wait.M})).setValue({value: 'Soluciones en construcción y remodelación para proyectos residenciales y comerciales'});
    }

    async selectTypeOfActivity() {
        await (await (await this.orderData.typeOfActivitySelect.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M})).click();
        await (await (await this.orderData.typeOfActivityOption.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectCategoryActivity() {
        await (await (await this.orderData.categorySelect.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({ timeout: config.wait.M })).click();
        await (await (await this.orderData.categoryOption.specifySelector({placeholder: '__N__', value: 3})).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectSubCategoryActivity() {
        await (await (await this.orderData.subCategorySelect.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({ timeout: config.wait.M })).click();
        await (await (await this.orderData.subCategoryOption.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectMultiplesAccounts(step) {
        switch (step.toLowerCase()) {
            case 'income account':
                await this.selectAccountIncomeAccount();
                if (await this.addCardReader.continueButton.isDisplayed()) {
                    await (await this.addCardReader.continueButton.waitForClickable({timeout: config.wait.M})).click();
                    await (await this.deliveryAddress.continueButton.waitForClickable({timeout: config.wait.M})).click();
                } else {
                    await (await this.addCardReader.withCardReader.waitForClickable({timeout: config.wait.M})).click();
                    await (await this.addCardReader.continueButton.waitForClickable({timeout: config.wait.M})).click();
                    await (await this.deliveryAddress.continueButton.waitForClickable({timeout: config.wait.M})).click();
                }
                break;
            case 'payment account':
                await this.selectAccountPaymentAccount();
                await this.termsAndCondition('4');
                await (await this.termsAndConditions.continueButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error('${step} option is not valid...');
        }
    }

    async selectAccountIncomeAccount() {
        await (await this.incomeAccount.viewAllLink.waitForClickable({timeout: config.wait.M})).click();
        await (await (await this.incomeAccount.accountItem.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout: config.wait.M}))).click();
    }

    async selectCardReaderOption(value) {
        await (await (await this.addCardReader.cardReaderOption.specifySelector({placeholder: '__VALUE__', value})).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectAccountPaymentAccount() {
        await (await this.paymentAccount.viewAllLink.waitForClickable({timeout: config.wait.M})).click();
        await (await (await this.paymentAccount.accountItem.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async changeAccountIncomeAccount() {
        if (await await this.incomeAccount.viewAllLink.isDisplayed()) {
            await (await this.multistep.summaryModal.modifyIncomeAccountLink.waitForClickable({timeout: config.wait.M})).click();
            await (await this.incomeAccount.viewAllLink.waitForClickable({timeout: config.wait.M})).click();
            await (await (await this.incomeAccount.accountItem.specifySelector({placeholder: '__N__', value: 3})).waitForDisplayed({timeout: config.wait.M})).click();
        } else {
            await (await (await this.multistep.summaryModal.modifyIncomeAccountLink.elements()).value[0].waitForDisplayed({timeout: config.wait.M})).click();
            const account = this.deliveryAccount.specifySelector({placeholder: '__N__', value: 2});
            await (await (await account.elements()).value[1].waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async commercialCategorySection(action, listBox) {
        switch (listBox.toLowerCase()) {
            case 'activity type':
                await this.inputComercialInformation();
                if (action === 'displays') {
                    await (await (await this.orderData.typeOfActivitySelect.waitForDisplayed({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M})).click();
                } else {
                    await this.selectTypeOfActivity();
                }
                break;
            case 'category':
                await this.inputComercialInformation();
                await this.selectTypeOfActivity();
                if (action === 'displays') {
                    await (await (await this.orderData.categorySelect.waitForDisplayed({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M})).click();
                } else {
                    await this.selectCategoryActivity();
                }
                break;
            case 'subcategory':
                await this.inputComercialInformation();
                await this.selectTypeOfActivity();
                await this.selectCategoryActivity();
                if (action === 'displays') {
                    await (await (await this.orderData.subCategorySelect.waitForDisplayed({timeout: config.wait.M}))
                        .waitForClickable({timeout: config.wait.M})).click();
                } else {
                    await this.selectSubCategoryActivity();
                }
                break;
            default:
                throw new Error('${listBox} option is not valid...');
        }
    }

    async exitOrderData() {
        await (await (await this.modal.exitMutistepButton.waitForDisplayed({timeout: config.wait.M})).waitForClickable({timeout: config.wait.M})).click();
    }

    async viewCashOnDelivery() {
        for (let i = 1; i <= 3; i++) {
            await (await this.offerPage.moreInfoReaderModal.accordionInformationSection
                .specifySelector({placeholder: '__VALUE__', value: 'content-0'})
                .specifySelector({placeholder: '__N__', value: i})
                .waitForDisplayed({timeout: config.wait.M}));
        }
    }

    async viewOpenpayMiniReader() {
        for (let i = 1; i <= 3; i++) {
            await (await this.offerPage.moreInfoReaderModal.accordionInformationSection
                .specifySelector({placeholder: '__VALUE__', value: 'content-1'})
                .specifySelector({placeholder: '__N__', value: i})
                .waitForDisplayed({timeout: config.wait.M}));
        }
    }

    async viewPaymentLink() {
        for (let i = 1; i <= 3; i++) {
            await (await this.offerPage.moreInfoReaderModal.accordionInformationSection
                .specifySelector({placeholder: '__VALUE__', value: 'content-2'})
                .specifySelector({placeholder: '__N__', value: i})
                .waitForDisplayed({timeout: config.wait.M}));
        }
    }

    async displayAccordionInformation(action, section) {
        switch (section.toLowerCase()) {
            case 'cash on delivery':
                if (action === 'displays') {
                    await (await this.offerPage.moreInfoReaderModal.tabMenuOptionInfoReaderModal.specifySelector({placeholder: '__VALUE__', value: 'tab-0'}).specifySelector({placeholder: '__VALUE__', value: 'content-0'}).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-0'}).specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-0'}).specifySelector({placeholder: '__N__', value: 2}).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-0'}).specifySelector({placeholder: '__N__', value: 3}).waitForDisplayed({timeout: config.wait.M})).click();
                } else if (action === 'views') {
                    await this.viewCashOnDelivery();
                }
                break;
            case 'openpay mini reader':
                if (action === 'displays') {
                    await (await this.offerPage.moreInfoReaderModal.tabMenuOptionInfoReaderModal.specifySelector({placeholder: '__VALUE__', value: 'tab-1'}).specifySelector({placeholder: '__VALUE__', value: 'content-1'}).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-1'}).specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({ placeholder: '__VALUE__', value: 'content-1'}).specifySelector({placeholder: '__N__', value: 2}).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({ placeholder: '__VALUE__', value: 'content-1'}).specifySelector({placeholder: '__N__', value: 3}).waitForDisplayed({timeout: config.wait.M})).click();
                } else if (action === 'views') {
                    await this.viewOpenpayMiniReader();
                }
                break;
            case 'payment link':
                if (action === 'displays') {
                    await (await this.offerPage.moreInfoReaderModal.tabMenuOptionInfoReaderModal.specifySelector({placeholder: '__VALUE__', value: 'tab-2'}).specifySelector({placeholder: '__VALUE__', value: 'content-2' }).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-2'}).specifySelector({placeholder: '__N__', value: 1 }).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-2'}).specifySelector({placeholder: '__N__', value: 2 }).waitForDisplayed({timeout: config.wait.M})).click();
                    await (await this.offerPage.moreInfoReaderModal.accordionInformationSection.specifySelector({placeholder: '__VALUE__', value: 'content-2'}).specifySelector({placeholder: '__N__', value: 3 }).waitForDisplayed({timeout: config.wait.M})).click();
                } else if (action === 'views') {
                    await this.viewPaymentLink();
                }
                break;
            default:
                throw new Error('${section} option is not available to navigate...');
        }
    }

    async unmaskDeliveryAddressData() {
        await (await this.deliveryAddress.unmaskLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async unmaskContactDetailsData() {
        await (await this.orderData.unmaskLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async deliveryAddressAction(action) {
        switch (action.toLowerCase()) {
            case 'adds':
                await this.addsAnotherDeliveryAddress();
                break;
            case 'deletes':
                await this.deletesAnotherDeliveryAddress();
                break;
            case 'adds and deletes':
                await this.addsAnotherDeliveryAddress();
                await this.deletesAnotherDeliveryAddress();
                break;
            case 'modifies':
                await this.addsAnotherDeliveryAddress();
                await this.modifiesAnotherDeliveryAddress();
                break;
            default:
                throw new Error('${action} option is not valid...');
        }
    }

    async addsAnotherDeliveryAddress() {
        await (await this.deliveryAddress.otherAddressRadioInput.waitForClickable({timeout: config.wait.M})).click();
        await (await this.deliveryAddress.addAddressLink.waitForClickable({timeout: config.wait.M})).click();
        await this.fillDeliveryAddressForm();
    }

    async fillDeliveryAddressForm() {
        await (await this.deliveryAddressForm.inputStreet.waitForClickable({timeout: config.wait.M})).setValue({value: 'Av. del Peñón'});
        await (await this.deliveryAddressForm.inputExternalNumber.waitForClickable({timeout: config.wait.M})).setValue({value: '23'});
        await (await this.deliveryAddressForm.inputInternalNumber.waitForClickable({timeout: config.wait.M})).setValue({value: '15'});
        await (await this.deliveryAddressForm.inputPostalCode.waitForClickable({timeout: config.wait.M})).setValue({value: '11971'});
        await (await this.deliveryAddressForm.inputNeighborhood.waitForClickable({timeout: config.wait.M})).setValue({value: 'Venustiano Carranza'});
        await (await this.deliveryAddressForm.inputState.waitForClickable({timeout: config.wait.M})).setValue({value: 'Ciudad de México'});
        await (await this.deliveryAddressForm.inputMunicipality.waitForClickable({ timeout: config.wait.M })).setValue({value: 'Chimalhuacán'});
        await (await this.deliveryAddressForm.saveButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async deletesAnotherDeliveryAddress() {
        await (await this.deliveryAddress.otherAddressDeleteIcon.waitForClickable({timeout: config.wait.M})).click();
        await (await this.deliveryAddress.otherAddressDeleteButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async modifiesAnotherDeliveryAddress() {
        const addressFields = {
            inputStreet: global.user.address.street,
            inputExternalNumber: global.user.address.externalNumber,
            inputInternalNumber: global.user.address.internalNumber,
            inputPostalCode: global.user.address.postalCode,
            inputNeighborhood: global.user.address.neighborhood,
            inputState: global.user.address.state,
            inputMunicipality: global.user.address.municipality,
        };

        await (await this.deliveryAddress.modifiedAddressIcon.waitForClickable({timeout: config.wait.M})).click();
        for (const [field, value] of Object.entries(addressFields)) {
            await (await this.deliveryAddressForm[field].waitForClickable({timeout: config.wait.M})).setValue({value});
        }
        await (await this.deliveryAddressForm.saveButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async termsAndConditionsAction(action) {
        switch (action.toLowerCase()) {
            case 'accepts':
                await this.termsAndCondition('4');
                break;
            case 'does not accept':
                await this.termsAndCondition('3');
                break;
            case 'checks and unchecks':
                await this.termsAndCondition('4');
                await this.termsAndCondition('4');
                break;
            default:
                throw new Error('${action} option is not valid...');
        }
    }

    async termsAndCondition(checks) {
        for (let i = 1; i <= checks; i++) {
            await (await this.termsAndConditions.checkBoxTermsAndConditions.specifySelector({placeholder: '__N__', value: i}).waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async goBackMoreInfoReader() {
        await (await this.offerPage.moreInfoReaderModal.exitButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async goBackIncomeAccounts() {
        await (await this.incomeAccount.closeViewAllModal.waitForClickable({timeout: config.wait.M})).click();
    }

    async goBackCashZoneOffer() {
        await (await this.modal.exitModalButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async changeCardReaderAndGoToSummary() {
        await (await this.multistep.summaryModal.modifyCardReaderLink.waitForClickable({timeout: config.wait.M})).click();
        await this.selectCardReaderOption('withoutCardReader');
        await (await this.addCardReader.continueButton.waitForClickable({timeout: config.wait.M})).click();
        await (await this.cardReaderConfirmationModal.continueButton.waitForClickable({timeout: config.wait.M})).click();
        this.setCurrentStep('termsAndConditions');
        await this.termsAndCondition('3');
        await (await this.termsAndConditions.continueButton.waitForClickable({timeout: config.wait.M})).click();
        this.setCurrentStep('summary');
    }

    async selectWithoutCardReaderAndGoToSummary() {
        await this.selectCardReaderOption('withoutCardReader');
        await (await this.addCardReader.continueButton.waitForClickable({timeout: config.wait.M})).click();
        this.setCurrentStep('termsAndConditions');
        await this.termsAndCondition('3');
        await (await this.termsAndConditions.continueButton.waitForClickable({timeout: config.wait.M})).click();
        this.setCurrentStep('summary');
    }

    async confirmOrder() {
        await (await this.multistep.summaryModal.contractButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async retryOperative(times) {
        for (let i = 0; i < times; i++) {
            await Commands.pause({time: config.wait.S});
            await (await (await this.offerPage.defaultErrorButton.waitForClickable({timeout: config.wait.M})).scrollIntoView({block: 'start'})).click();
        }
    }

    async retryModal(times) {
        let i = 0;
        while (i < times) {
            await Commands.pause({time: config.wait.S});
            await this.dialogOperations.waitForDisplayed({timeout: config.wait.M});
            await this.dialogOperations.acceptBtn.click();
            i++;
        }
        await Commands.pause({time: config.wait.S});
    }

    async _modalElementValidation({ item, ...args } = {}) {
        switch (item.toLowerCase()) {
            case 'retry button':
            case 'understood button':
            case 'call bbva button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            case 'exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON}, {forceScroll: true});
                break;
            case 'description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation({item, ...args});
        }
    }
}

export default new OcCashZone();
