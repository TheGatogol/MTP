import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page, Commands} from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class OcMetasegura extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocMetaseguraOffer[state="active"]',
            name: 'bbva-multistep-oc-metasegura-spherica',
            elements: {
                header: '#headerOffer',
                telephoneIcon: 'bbva-multistep-oc-metasegura-spherica #headerOffer #btn-right-secondary',
                stickyCallMeBack: '#savingsCustomizationBtnSecondary',
                closeTooltip: 'bbva-multistep-oc-metasegura-spherica #helpModalHeader #callMeBackTooltip #tooltip bbva-type-text span',
                dataManager: 'bbva-manager-oc-metasegura',
                metaSegura: 'bbva-multistep-oc-metasegura-spherica',
                offerDetail: {
                    properties: {root: 'bbva-metasegura-offer-detail-spherica'},
                    img: '.panel-info [data-tag-name="bbva-clip-microillustration"]',
                    imgSubText: '.panel-info [data-tag-name="bbva-type-text"]',
                    charTitle: '.title-container [data-tag-name="bbva-type-text"][text="Características"]',
                    characteristics: '#characteristics [data-tag-name="bbva-list-bullet"]',
                    benefitsTitle: '.title-container [data-tag-name="bbva-type-text"][text="Beneficios"]',
                    benefits: '#benefits [data-tag-name="bbva-list-bullet"]',
                    whatYouSshouldKnowPanel: '.panel-info',
                    whatYouShouldKnowLink: '.panel-info [data-tag-name="bbva-type-link"]',
                    whatYouShouldKnow: {
                        exitBtn: '#whatYouShouldKnowContainer .action-buttons-know-modal [data-tag-name="bbva-button-default"]',
                        imgPanel: 'bbva-transition-container [data-tag-name="bbva-panel-info-spherica"]',
                        goalInDollars: {
                            title: '[data-tag-name="bbva-header-category"][text="Tu meta en dólares"]',
                            howDoesItWorkBtn: '[data-tag-name="bbva-expandable-accordion"].question-0-0',
                            howDoesItWork: '[data-tag-name="bbva-expandable-accordion"].question-0-0 [data-tag-name="bbva-type-text"]',
                            howToGrowItBtn: '[data-tag-name="bbva-expandable-accordion"].question-0-1',
                            howToGrowIt: '[data-tag-name="bbva-expandable-accordion"].question-0-1 [data-tag-name="bbva-type-text"]'
                        },
                        lifeInsurance: {
                            title: '[data-tag-name="bbva-header-category"][text="Seguro de vida"]',
                            sinceWhenBtn: '[data-tag-name="bbva-expandable-accordion"].question-1-0',
                            sinceWhen: '[data-tag-name="bbva-expandable-accordion"].question-1-0 [data-tag-name="bbva-type-text"]'
                        },
                        planDetails: {
                            title: '[data-tag-name="bbva-header-category"][text="Detalles de tu plan"]',
                            whatHappensBtn: '[data-tag-name="bbva-expandable-accordion"].question-2-0',
                            whatHappens: '[data-tag-name="bbva-expandable-accordion"].question-2-0 [data-tag-name="bbva-type-text"]',
                            shouldIPayTaxesBtn: '[data-tag-name="bbva-expandable-accordion"].question-2-1',
                            shouldIPayTaxes: '[data-tag-name="bbva-expandable-accordion"].question-2-1 [data-tag-name="bbva-type-text"]'
                        },
                        continueBtn: 'bbva-transition-container [data-tag-name=bbva-button-default]'
                    },
                    considTitle: '.title-bullet[text="CONSIDERACIONES"]',
                    considerations: '#considerations [data-tag-name="bbva-list-bullet"]',
                    genCondSection: '.privacy-notice',
                    generalConditions: '.privacy-notice [data-tag-name="bbva-type-link"]',
                    continueBtn: '#savingsCustomizationBtn'
                },
                questionnaire: {
                    properties: {root: 'bbva-metasegura-questionnaire-spherica'},
                    header: 'bbva-transition-container .header #healthQuestionnaire',
                    description: '.description-text',
                    question: '[data-tag-name="bbva-type-text"].health-questionnaire-diseases-question',
                    infoMsg: '.questionnaire-container [data-tag-name="bbva-notification-message"]',
                    diabetesOption: '#Q1_DIABETES',
                    cancerOption: '#Q2_CANCER',
                    heartOption: '#Q3_CORAZON',
                    lungsOption: '#Q4_ENFISEMA',
                    kidneyOption: '#Q5_HEPATICA',
                    healtyOption: '#Q6_SINENFER',
                    notifPanel: 'bbva-notification-message',
                    privacyNotice: 'section.health-questionnaire-panel-privacy',
                    privacyNoticeLink: 'section.health-questionnaire-panel-privacy [data-tag-name="bbva-type-link"]',
                    continueBtn: '#sendQuestionnaireAnwers'
                },
                quotation: {
                    properties: {root: 'bbva-metasegura-savings-customization-spherica'},
                    exitBtn: '#savingsCustomization #btn-right-primary',
                    title: '.title-step [data-tag-name="bbva-type-text"]',
                    howMuch: '[data-tag-name="bbva-type-text"][font-type="title-default"]',
                    description: '.description-text',
                    minAmount: '#minAmount',
                    maxAmount: '#maxAmount',
                    inputAmount: '#inputAmount input',
                    inputMsg: '#inputAmount [data-tag-name="bbva-notification-help"]',
                    inputError: '.message.error',
                    currencyConv: '.list-currency .exchange [data-tag-name="bbva-type-amount"]',
                    currencyConvAmount: '.list-currency [data-tag-name="bbva-type-amount"]',
                    howLong: '[data-tag-name="bbva-type-text"][font-type="title-default"]',
                    timeLabel: 'div.form-range-customization [data-tag-name="bbva-type-text"]',
                    timeRange: '#timeRange',
                    timeRangeMin: '#timeRange .legend-item:nth-of-type(1)',
                    timeRangeMax: '#timeRange bbva-type-text:nth-child(2)',
                    control: '#timeRange .control',
                    bar: '#timeRange .bar',
                    currentBar: '#timeRange .current',
                    knob: '#timeRange .knob',
                    knobIcon: '#timeRange .knob-icon',
                    monthlyCont: '#panel',
                    monthlyMXN: '#panel #headerAdditionalInfo',
                    continueBtn: '#initProcess'
                },
                personalSaving: {
                    freqAndSummary: {
                        properties: {root: '#personalizedSaving'},
                        title: '#headingLabel',
                        editSection: '[data-tag-name="bbva-type-link"]#editButton',
                        description: '.expandable-step-content [data-tag-name="bbva-type-text"]',
                        goalTitle: '[data-tag-name="bbva-header-category"]:first-of-type',
                        changeBtnFreq: {
                            properties: {root: '[data-tag-name="bbva-header-category"].title-meta-personalized'},
                            changeBtn: '[data-tag-name="bbva-type-link"]',
                        },
                        savingsUSD: '#savingGoalAmount',
                        savingsText: '.local-currency-conversion-label',
                        savingsLocalized: '.local-currency-conversion-label [data-tag-name="bbva-type-amount"]',
                        currencyConv: '[label="Tipo de cambio"]',
                        period: '#savingTerm',
                        freqTitle: '[data-tag-name="bbva-header-category"]:last-of-type',
                        freqDesc: '#savingTerm [data-tag-name="bbva-type-text"].description',
                        cardMonthly: '#monthly',
                        cardAnnually: '#annual',
                        anualPayInfo: '[data-tag-name="bbva-composition-selector"] + [data-tag-name="bbva-notification-help"]',
                        paymentInfo: '[data-tag-name="bbva-notification-message"]'
                    },
                    executiveCard: {
                        properties: {root: '#executiveCodeCard'},
                        title: '[data-tag-name="bbva-type-text"]',
                        icon: '[data-tag-name="bbva-clip-microillustration"]',
                        appliedCodeTitle: 'bbva-badge-default',
                        titleQuestion: '[data-tag-name="bbva-type-text"]',
                        openExecModal: '[data-tag-name="bbva-type-text"][variant="spotlight"]',
                    },
                    execCodeModal: {
                        properties: {root: 'bbva-metasegura-executive-code-spherica'},
                        header: '#executiveCodeContainer #helpModalHeader',
                        exitBtn: '#executiveCodeContainer #helpModalHeader button',
                        icon: '[data-tag-name="bbva-clip-microillustration"]',
                        text: '[data-tag-name="bbva-type-text"]:nth-child(3)',
                        input: 'input',
                        inputMsg: '[data-tag-name="bbva-form-text"] .notification',
                        errorMsg: '.error',
                        applyBtn: '.modal-footer [data-tag-name="bbva-button-default"][text="Aplicar"]',
                        exitWithNoCode: '.modal-footer [data-tag-name="bbva-button-default"][variant="link"]'
                    },
                    panelCont: '#panelContibution',
                    continueBtn: '#confirmFrequency'
                },
                beneficiaries: {
                    properties: {root: '#beneficiariesStep'},
                    title: '#headingLabel',
                    editSection: '[data-tag-name="bbva-type-link"]#editButton',
                    text: '#beneficiariesStepDescription',
                    learnMoreBtn: '#beneficiariesStepLinkInfo',
                    beneficiariesList: '.expandable-step-content #beneficiaryList',
                    benefOne: {
                        properties: {root: '#beneficiary-0'},
                        name: '.beneficiary-name',
                        editBtn: '#beneficiaryEditBtn',
                        deleteBtn: '#editAddressBtn',
                        percentage: 'bbva-type-text:nth-child(2)'
                    },
                    benefTwo: {
                        properties: {root: '#beneficiary-1'},
                        name: '.beneficiary-name',
                        editBtn: '#beneficiaryEditBtn',
                        deleteBtn: '#editAddressBtn',
                        percentage: 'bbva-type-text:nth-child(2)'
                    },
                    benefThree: {
                        properties: {root: '#beneficiary-2'},
                        name: '.beneficiary-name',
                        editBtn: '#beneficiaryEditBtn',
                        deleteBtn: '#editAddressBtn',
                        percentage: 'bbva-type-text:nth-child(2)'
                    },
                    benefFour: {
                        properties: {root: '#beneficiary-3'},
                        name: '.beneficiary-name',
                        editBtn: '#beneficiaryEditBtn',
                        deleteBtn: '#editAddressBtn',
                        percentage: 'bbva-type-text:nth-child(2)'
                    },
                    addBeneficiaryBtn: '#addBeneficiaryButton',
                    editPercentageBtn: '#editPercentageButton',
                    continueBtn: '#confirmBeneficiaries',
                },
                editPercentage: {
                    properties: {root: 'bbva-metasegura-edit-percentages-spherica'},
                    exitBtn: '#editBeneficiariesHeader button.icon',
                    header: '#editBeneficiariesHeader [data-tag-name="bbva-type-text"]#text',
                    title: '[data-tag-name="bbva-type-text"][font-type="title-default"]',
                    percentagePie: '[data-tag-name="bbva-data-visualization-bar"]',
                    percentageAlert: '.amount-alert',
                    nameOne: '#nameBeneficiary-0',
                    inputOne: {
                        properties: {root: '#percentageBeneficiary-0'},
                        input: '[data-tag-name="bbva-form-amount"] input'
                    },
                    nameTwo: '#nameBeneficiary-1',
                    inputTwo: {
                        properties: {root: '#percentageBeneficiary-1'},
                        input: '[data-tag-name="bbva-form-amount"] input'
                    },
                    nameThree: '#nameBeneficiary-2',
                    inputThree: {
                        properties: {root: '#percentageBeneficiary-2'},
                        input: '[data-tag-name="bbva-form-amount"] input'
                    },
                    nameFour: '#nameBeneficiary-3',
                    inputFour: {
                        properties: {root: '#percentageBeneficiary-3'},
                        input: '[data-tag-name="bbva-form-amount"] input'
                    },
                    acceptBtn: '#savePercentages'
                },
                addBeneficiary: {
                    inputName: '#name input',
                    inputlastName: '#onelastName input',
                    inputsecondLastName: '#twolastName input',
                    relationship: '#relationship',
                    birthDay: '#birthDay',
                    sameAddress: '#addsameDirection',
                    addres: '#customerAddress [data-tag-name="bbva-type-text"]:nth-child(2)',
                    showAddressBtn: '#customerAddress [data-tag-name="bbva-type-link"]',
                    newAdddress: '#addnewDirection',
                    registerAddressBtn: '#registerAddress',
                    continueBtn: '#addBeneficiaryBtn'
                },
                registerAddress: {
                    properties: {root: 'bbva-metasegura-register-address-spherica'},
                    exitBtn: '.header #btn-right-primary',
                    street: '#street input',
                    exteriorNum: '#outerN input',
                    interiorNum: '#innerN input',
                    zipCode: '#zipCode input',
                    searchBtn: '#zipCode [data-tag-name="bbva-form-search"] .action',
                    colony: '#colony',
                    municipality: '#municipality',
                    state: '#state',
                    country: '#country',
                    continueBtn: '#registerAddressBtn',
                    closeBtn: '#directionForm [data-tag-name="bbva-button-default"][variant="link"]'
                },
                paymentMethods: {
                    properties: {root: '#paymentMethods'},
                    title: '#headingLabel',
                    editSection: '[data-tag-name="bbva-type-link"]#editButton',
                    description: '#paymentMethodsStepDescription',
                    cardTitle: '.internal-title',
                    accounts: '.all-space .cards-accounts',
                    accountsLink: '[data-tag-name="bbva-type-link"]',
                    accountsModal: {
                        properties: {root: 'bbva-transition-container'},
                        accountsTitle: '[text="Cuentas"]',
                        cardsAndAccounts: '[data-tag-name="bbva-list-card-spherica"]'
                    },
                    account: '.all-space .number'
                },
                termsAndConditions: {
                    properties: {root: '#termsAndConditions'},
                    title: '.header',
                    editSection: '[data-tag-name="bbva-type-link"]#editButton',
                    description: 'div.expandable-step-content [data-tag-name="bbva-type-text"]',
                    termsAndCondPDF: '#contractTermsandConditions .link',
                    termsofConditions: '.file-item',
                    termsofPaymentPDF: '#termsofPayment .link',
                    privacyNotice: '#privacyNotices .link',
                    declareInfoAsTrueChk: '#termsAndConditionsList .terms-checks:nth-child(1)',
                    declareInfoHelpText: '#termsAndConditionsList .message.info',
                    iveReadChk: '#termsAndConditionsList .terms-checks:nth-child(2)',
                    dataConcentChk: '#termsAndConditionsList .terms-checks:nth-child(3)',
                    termsofPaymentChk: '#termsAndConditionsList .terms-checks:nth-child(4)',
                    agreeReceiveEmailChk: '#termsAndConditionsList .terms-checks:nth-child(5)',
                    infoPanel: '.notification-message',
                    continueBtn: '#confirmTerms'
                },
                summary: {
                    personalSaving: {
                        properties: {root: '#personalizedSaving .expandable-step-summary'},
                        title: '[data-tag-name="bbva-type-text"]',
                        amountUSD: '[data-tag-name="bbva-type-amount"]',
                        convertionMXN: '[data-tag-name="bbva-list-simple-spherica"]#summaryConvertion',
                        time: '[data-tag-name="bbva-list-simple-spherica"]#summaryTime',
                        goal: '[data-tag-name="bbva-list-simple-spherica"]#summaryGoal',
                        frequency: '[data-tag-name="bbva-list-simple-spherica"]#summaryFrequency'
                    },
                    beneficiaries: {
                        properties: {root: '#beneficiariesStep .expandable-step-summary'},
                        benefOne: 'bbva-list-default:nth-of-type(1)',
                        benefTwo: 'bbva-list-default:nth-of-type(2)',
                        benefThree: 'bbva-list-default:nth-of-type(3)',
                        benefFour: 'bbva-list-default:nth-of-type(4)'
                    },
                    paymentMethod: '#paymentMethods .expandable-step-summary [data-tag-name="bbva-list-card-spherica"]',
                    termsAndConditions: '#termsAndConditions .expandable-step-summary bbva-list-multistep-check'
                },
                contractInsuranceBtn: '#confirmContract',
                tokenModal: CellsSignOperationModalSpherica,
                proactiveAssistance: {
                    properties: { root: '#managedHelpModal[visible], #managedHelpModal[visible]' },
                    helpModal: '#managedHelpModal[visible]',
                    exitModalCloseIcon: '#helpModalHeader button#btn-close',
                    helpQuestion: '#title-text',
                    paragraphOne: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-child(1)',
                    paragraphTwo: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-child(2)',
                    requestCallBtn: '[data-tag-name="relationship-models-proactive-assistance-mx-modal-footer"] #call-now',
                    scheduleCallBtn: '[data-tag-name="relationship-models-proactive-assistance-mx-modal-footer"] #schedule-call',
                    exitProcessBtn: '[data-tag-name="relationship-models-proactive-assistance-mx-modal-footer"] #exit-process',
                },
                proactiveAssistanceToast: {
                    properties: { root: 'relationship-models-proactive-assistance-mx-button-emergent, relationship-models-proactive-assistance-mx-button-emergent' },
                    toastContainer: '[data-tag-name="relationship-models-proactive-assistance-mx-button-emergent"]',
                    toastText: '[data-tag-name="bbva-type-text"]',
                    toastLink: '[data-tag-name="bbva-type-link"]'
                },
                errors: {
                    properties: {root: 'bbva-metasegura-errors-spherica'},
                    helpModal: '#alertModal',
                    modal: {
                        properties: {root: '#alertModal[visible]'},
                        exitBtn: '#closeModalError',
                        title: '#helpModalTitle',
                        rejectionTitle: '#title-text',
                        img: '[data-tag-name="bbva-clip-microillustration"]',
                        icon: '[data-tag-name="bbva-type-icon"]',
                        text: '[data-tag-name="bbva-type-text"]#text',
                        description: '[data-tag-name="bbva-type-text"]#description',
                        content: '#helpModalContent',
                        detailedInfo: '[data-tag-name="bbva-list-bullet"]',
                        acceptBtn: '.modal-footer [data-tag-name="bbva-button-default"]',
                        cancelBtn: '.modal-footer [data-tag-name="bbva-button-default"].footer-button.link'
                    }
                }
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'offer detail header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'offer detail icon':
                await this.offerDetail.img.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'offer detail desciption':
                await this.offerDetail.imgSubText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'characteristics title':
                await this.offerDetail.charTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'characteristics':
                await this.offerDetail.characteristics.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'benefits title':
                await this.offerDetail.benefitsTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'benefits':
                await this.offerDetail.benefits.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'what you should know panel':
                await this.offerDetail.whatYouSshouldKnowPanel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'what you should know link':
                await this.offerDetail.whatYouShouldKnowLink.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'considerations title':
                await this.offerDetail.considTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'considerations':
                await this.offerDetail.considerations.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'offer detail general conditions':
                await this.offerDetail.genCondSection.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'offer detail continue button':
                await this.offerDetail.continueBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'what you should know exit button':
                await this.offerDetail.whatYouShouldKnow.exitBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'what you should know icon':
                await this.offerDetail.whatYouShouldKnow.imgPanel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'goal in dollars section title':
                await this.offerDetail.whatYouShouldKnow.goalInDollars.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'how does it work question':
                await this.offerDetail.whatYouShouldKnow.goalInDollars.howDoesItWorkBtn.waitForDisplayed({timeout: config.wait.L});
                await this.offerDetail.whatYouShouldKnow.goalInDollars.howDoesItWorkBtn.click();
                break;
            case 'how does it work answer':
                await this.offerDetail.whatYouShouldKnow.goalInDollars.howDoesItWork.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'how to grow it question':
                await this.offerDetail.whatYouShouldKnow.goalInDollars.howToGrowItBtn.waitForDisplayed({timeout: config.wait.L});
                await this.offerDetail.whatYouShouldKnow.goalInDollars.howToGrowItBtn.click();
                break;
            case 'how to grow it answer':
                await this.offerDetail.whatYouShouldKnow.goalInDollars.howToGrowIt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'life insurance section title':
                await this.offerDetail.whatYouShouldKnow.lifeInsurance.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'since when question':
                await this.offerDetail.whatYouShouldKnow.lifeInsurance.sinceWhenBtn.waitForDisplayed({timeout: config.wait.L});
                await this.offerDetail.whatYouShouldKnow.lifeInsurance.sinceWhenBtn.click();
                break;
            case 'since when answer':
                await this.offerDetail.whatYouShouldKnow.lifeInsurance.sinceWhen.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'plan details section title':
                await this.offerDetail.whatYouShouldKnow.planDetails.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'what happens when question':
                await this.offerDetail.whatYouShouldKnow.planDetails.whatHappensBtn.waitForDisplayed({timeout: config.wait.L});
                await this.offerDetail.whatYouShouldKnow.planDetails.whatHappensBtn.click();
                break;
            case 'what happens when answer':
                await this.offerDetail.whatYouShouldKnow.planDetails.whatHappens.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'should i pay taxes question':
                await this.offerDetail.whatYouShouldKnow.planDetails.shouldIPayTaxesBtn.waitForDisplayed({timeout: config.wait.L});
                await this.offerDetail.whatYouShouldKnow.planDetails.shouldIPayTaxesBtn.click();
                break;
            case 'should i pay taxes answer':
                await this.offerDetail.whatYouShouldKnow.planDetails.shouldIPayTaxes.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'what you should know accept button':
                await this.offerDetail.whatYouShouldKnow.continueBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'questionnaire header':
                await this.questionnaire.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'questionnaire description':
                await this.questionnaire.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'questionnaire question':
                await this.questionnaire.question.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'questionnaire information message':
                await this.questionnaire.infoMsg.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'diabetes option':
                if (value !== '') {
                    if (value === 'disabled') {
                        await this.questionnaire.diabetesOption.waitForAttribute({
                            attribute: 'aria-disabled',
                            value: 'true',
                            timeout: config.wait.M
                        });
                    }
                } else {
                    await this.questionnaire.diabetesOption.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'cancer option':
                if (value !== '') {
                    if (value === 'disabled') {
                        await this.questionnaire.cancerOption.waitForAttribute({
                            attribute: 'aria-disabled',
                            value: 'true',
                            timeout: config.wait.M
                        });
                    }
                } else {
                    await this.questionnaire.cancerOption.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'heart disease option':
                if (value !== '') {
                    if (value === 'disabled') {
                        await this.questionnaire.heartOption.waitForAttribute({
                            attribute: 'aria-disabled',
                            value: 'true',
                            timeout: config.wait.M
                        });
                    }
                } else {
                    await this.questionnaire.heartOption.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'emphysema option':
                if (value !== '') {
                    if (value === 'disabled') {
                        await this.questionnaire.lungsOption.waitForAttribute({
                            attribute: 'aria-disabled',
                            value: 'true',
                            timeout: config.wait.M
                        });
                    }
                } else {
                    await this.questionnaire.lungsOption.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'hepatic option':
                if (value !== '') {
                    if (value === 'disabled') {
                        await this.questionnaire.kidneyOption.waitForAttribute({
                            attribute: 'aria-disabled',
                            value: 'true',
                            timeout: config.wait.M
                        });
                    }
                } else {
                    await this.questionnaire.kidneyOption.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'healty option':
                await this.questionnaire.healtyOption.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'questionnaire notification panel':
                await this.questionnaire.notifPanel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'questionnaire privacy notice':
                await this.questionnaire.privacyNotice.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'questionnaire privacy notice link':
                await this.questionnaire.privacyNoticeLink.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'questionnaire continue button':
                if (value !== '') {
                    if (value === 'enabled') {
                        await this.questionnaire.continueBtn.waitForEnabled({timeout: config.wait.M});
                    }
                } else {
                    await this.questionnaire.continueBtn.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'modal exit button':
                await this.errors.modal.exitBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal title':
                await this.errors.modal.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'rejection modal title':
                await this.errors.modal.rejectionTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal image':
                await this.errors.modal.img.scrollIntoView({block: 'center'});
                await this.errors.modal.img.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal icon':
                await this.errors.modal.icon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal text':
                await this.errors.modal.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal content':
                await this.errors.modal.content.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal description':
                await this.errors.modal.img.scrollIntoView();
                await this.errors.modal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal detailed information':
                await this.errors.modal.detailedInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'communication error exit button':
            case 'rejection modal exit button':
            case 'last try exit button':
            case 'modal retry button':
            case 'modal accept button':
                await this.errors.modal.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'help modal exit':
            case 'modal cancel button':
                await this.errors.modal.cancelBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation exit button':
                await this.quotation.exitBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation title':
                await this.quotation.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation how much title':
                await this.quotation.howMuch.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation description':
                await this.quotation.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation proposed minimum':
                if (value !== '') {
                    await this.quotation.minAmount.waitForText({text: value, exactMatch: false});
                } else {
                    await this.quotation.minAmount.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation proposed maximum':
                if (value !== '') {
                    if (value === 'limited') {
                        await this.quotation.maxAmount.waitForText({
                            text: global.user.offerUpperLimit,
                            exactMatch: false
                        });
                    } else {
                        await this.quotation.maxAmount.waitForText({text: value, exactMatch: false});
                    }
                } else {
                    await this.quotation.maxAmount.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation amount input':
                if (value !== '') {
                    if (value === 'empty') {
                        if ((await this.quotation.inputAmount.getValue()) === '') {
                            logger.info(`verifying value of ${this.quotation.inputAmount}`);
                        } else {
                            throw new Error(`${this.quotation.inputAmount} is not empty`);
                        }
                    } else {
                        if ((await this.quotation.inputAmount.getValue()) === value) {
                            logger.info(`Succesfull verification of value of ${this.quotation.inputAmount}`);
                        } else {
                            throw new Error(`Value "${value}" not found in ${this.quotation.inputAmount}`);
                        }
                    }
                } else {
                    await this.quotation.inputAmount.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation input subtext':
                await this.quotation.inputMsg.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation input error message':
                if (value === 'less') {
                    await this.quotation.inputError.waitForText({text: '6,000', exactMatch: false});
                } else if (value === 'more') {
                    await this.quotation.inputError.waitForText({text: '200,000', exactMatch: false});
                } else if (value === 'not multiple') {
                    await this.quotation.inputError.waitForText({text: '1,000', exactMatch: false});
                } else {
                    await this.quotation.inputError.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation currency convertion':
                if (value === 'correct exchange rate') {
                    await this.verifyExRateYearly();
                } else {
                    await this.quotation.currencyConv.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation how long title':
                await this.quotation.howLong.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation time label':
                if (value !== '') {
                    if (value === 'max') {
                        const max = await this.quotation.timeRangeMax.getText();
                        await this.quotation.timeLabel.waitForText({text: max, exactMatch: false});
                    } else {
                        await this.quotation.timeLabel.waitForText({text: value, exactMatch: false});
                    }
                } else {
                    await this.quotation.timeLabel.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation time range':
                await this.quotation.timeRange.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation time range knob':
                await this.quotation.knob.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'quotation time range minimum':
                if (value !== '') {
                    await this.quotation.timeRangeMin.waitForText({text: value, exactMatch: false});
                } else {
                    await this.quotation.timeRangeMin.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation time range maximum':
                if (value !== '') {
                    await this.quotation.timeRangeMax.waitForText({text: value, exactMatch: false});
                } else {
                    await this.quotation.timeRangeMax.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation monthly contribution':
                if (value === 'correct exchange rate') {
                    await this.verifyExRateMonthly();
                } else {
                    await this.quotation.monthlyCont.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'quotation continue button':
                await this.quotation.continueBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings title':
                await this.personalSaving.freqAndSummary.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings description':
                await this.personalSaving.freqAndSummary.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings goal title':
                await this.personalSaving.freqAndSummary.goalTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'contract period change button':
                await this.personalSaving.freqAndSummary.changeBtnFreq.changeBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings goal amount':
                await this.personalSaving.freqAndSummary.savingsUSD.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings goal text':
                await this.personalSaving.freqAndSummary.savingsText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings goal localized':
                await this.personalSaving.freqAndSummary.savingsLocalized.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings exchange rate':
                await this.personalSaving.freqAndSummary.currencyConv.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings contract period':
                await this.personalSaving.freqAndSummary.period.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings frequency title':
                await this.personalSaving.freqAndSummary.freqTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings frequency description':
                await this.personalSaving.freqAndSummary.freqDesc.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings monthly card':
                if (value === 'checked') {
                    await this.personalSaving.freqAndSummary.radioBtnMonthly.waitForAttribute({
                        attribute: 'aria-checked',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.personalSaving.freqAndSummary.cardMonthly.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'personal savings yearly card':
                if (value === 'yearly discount') {
                    await this.verifyYearlyDisc();
                } else {
                    await this.personalSaving.freqAndSummary.cardAnnually.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'personal savings anual info':
                await this.personalSaving.freqAndSummary.anualPayInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings payment info':
                await this.personalSaving.freqAndSummary.paymentInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive card title':
                await this.personalSaving.executiveCard.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive card icon':
                await this.personalSaving.executiveCard.icon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'applied executive code':
                await this.personalSaving.executiveCard.appliedCodeTitle.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            case 'executive card question':
                await this.personalSaving.executiveCard.titleQuestion.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'open executive code modal button':
                await this.personalSaving.executiveCard.openExecModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings panel':
                await this.personalSaving.panelCont.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'personal savings continue button':
                await this.personalSaving.continueBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive code header':
                await this.personalSaving.execCodeModal.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive code exit button':
                await this.personalSaving.execCodeModal.exitBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive code icon':
                await this.personalSaving.execCodeModal.icon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive code text':
                await this.personalSaving.execCodeModal.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive code input':
                await this.personalSaving.execCodeModal.input.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive code input message':
                await this.personalSaving.execCodeModal.inputMsg.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive code error message':
                await this.personalSaving.execCodeModal.errorMsg.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'executive code apply button':
                if (value === 'disabled') {
                    await this.personalSaving.execCodeModal.applyBtn.waitForAttribute({
                        attribute: 'aria-disabled',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.personalSaving.execCodeModal.applyBtn.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'executive code exit without code':
                await this.personalSaving.execCodeModal.exitWithNoCode.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiaries title':
                await this.beneficiaries.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiaries description':
                await this.beneficiaries.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiaries learn more button':
                await this.beneficiaries.learnMoreBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiaries list':
                await this.beneficiaries.beneficiariesList.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first beneficiary name':
                if (value === 'edited') {
                    await this.beneficiaries.benefOne.name.waitForText({
                        text: 'Edited User Successfully',
                        exactMatch: false
                    });
                } else {
                    await this.beneficiaries.benefOne.name.waitForDisplayed({
                        timeout: config.wait.L,
                        reverse: value === 'not visible'
                    });
                }
                break;
            case 'first beneficiary edit button':
                await this.beneficiaries.benefOne.editBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first beneficiary delete button':
                await this.beneficiaries.benefOne.deleteBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first beneficiary percentage':
                if (value !== '' && value !== 'not visible') {
                    await this.beneficiaries.benefOne.percentage.waitForText({text: value, exactMatch: false});
                } else {
                    await this.beneficiaries.benefOne.percentage.waitForDisplayed({
                        timeout: config.wait.L,
                        reverse: value === 'not visible'
                    });
                }
                break;
            case 'second beneficiary name':
                await this.beneficiaries.benefTwo.name.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'second beneficiary edit button':
                await this.beneficiaries.benefTwo.editBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'second beneficiary delete button':
                await this.beneficiaries.benefTwo.deleteBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'second beneficiary percentage':
                if (value !== '' && value !== 'not visible') {
                    await this.beneficiaries.benefTwo.percentage.waitForText({text: value, exactMatch: false});
                } else {
                    await this.beneficiaries.benefTwo.percentage.waitForDisplayed({
                        timeout: config.wait.L,
                        reverse: value === 'not visible'
                    });
                }
                break;
            case 'third beneficiary percentage':
                if (value !== '' && value !== 'not visible') {
                    await this.beneficiaries.benefThree.percentage.waitForText({text: value, exactMatch: false});
                } else {
                    await this.beneficiaries.benefThree.percentage.waitForDisplayed({
                        timeout: config.wait.L,
                        reverse: value === 'not visible'
                    });
                }
                break;
            case 'fourth beneficiary percentage':
                if (value !== '' && value !== 'not visible') {
                    await this.beneficiaries.benefFour.percentage.waitForText({text: value, exactMatch: false});
                } else {
                    await this.beneficiaries.benefFour.percentage.waitForDisplayed({
                        timeout: config.wait.L,
                        reverse: value === 'not visible'
                    });
                }
                break;
            case 'beneficiaries add button':
                await this.beneficiaries.addBeneficiaryBtn.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            case 'beneficiaries edit percentage button':
                await this.beneficiaries.editPercentageBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiaries continue button':
                await this.beneficiaries.continueBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiary input name':
                if (value === 'empty') {
                    if ((await this.addBeneficiary.inputName.getValue()) !== '') {
                        throw new Error(`${this.addBeneficiary.inputName} is not empty`);
                    }
                } else {
                    await this.addBeneficiary.inputName.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'beneficiary input lastname':
                if (value === 'empty') {
                    if ((await this.addBeneficiary.inputlastName.getValue()) !== '') {
                        throw new Error(`${this.addBeneficiary.inputlastName} is not empty`);
                    }
                } else {
                    await this.addBeneficiary.inputlastName.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'beneficiary input second lastname':
                if (value === 'empty') {
                    if ((await this.addBeneficiary.inputsecondLastName.getValue()) !== '') {
                        throw new Error(`${this.addBeneficiary.inputsecondLastName} is not empty`);
                    }
                } else {
                    await this.addBeneficiary.inputsecondLastName.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'beneficiary relationship':
                await this.addBeneficiary.relationship.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiary birthday':
                await this.addBeneficiary.birthDay.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiary same address':
                await this.addBeneficiary.sameAddress.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiary address':
                if (value === 'unmasked') {
                    await this.addBeneficiary.addres.waitForText({
                        text: 'San Luis Potosi',
                        exactMatch: false
                    });
                } else {
                    await this.addBeneficiary.addres.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'beneficiary new address':
                if (value === 'enabled') {
                    await this.addBeneficiary.newAdddress.waitForEnabled({timeout: config.wait.L});
                } else {
                    await this.addBeneficiary.newAdddress.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'beneficiary register address button':
                await this.addBeneficiary.registerAddressBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'beneficiary continue button':
                await this.addBeneficiary.continueBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentages exit button':
                await this.editPercentage.exitBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentages header':
                await this.editPercentage.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentages title':
                await this.editPercentage.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage pie':
                await this.editPercentage.percentagePie.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage alert':
                await this.editPercentage.percentageAlert.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage first beneficiary':
                await this.editPercentage.nameOne.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage first input':
                await this.editPercentage.inputOne.input.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage second beneficiary':
                await this.editPercentage.nameTwo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage second input':
                await this.editPercentage.inputTwo.input.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage third beneficiary':
                await this.editPercentage.nameThree.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage third input':
                await this.editPercentage.inputThree.input.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage fourth beneficiary':
                await this.editPercentage.nameFour.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage fourth input':
                await this.editPercentage.inputFour.input.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'edit percentage accept button':
                await this.editPercentage.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address exit button':
                await this.registerAddress.exitBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address street':
                await this.registerAddress.street.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address exterior number':
                await this.registerAddress.exteriorNum.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address interior number':
                await this.registerAddress.interiorNum.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address zip code':
                await this.registerAddress.zipCode.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address search button':
                await this.registerAddress.searchBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address colony':
                await this.registerAddress.colony.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address municipality':
                await this.registerAddress.municipality.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address state':
                await (await this.registerAddress.state.scrollIntoView()).waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address country':
                await (await this.registerAddress.country.scrollIntoView()).waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address continue button':
                await this.registerAddress.continueBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new address close button':
                await this.registerAddress.closeBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment method title':
                await this.paymentMethods.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment method description':
                await this.paymentMethods.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment method card title':
                await this.paymentMethods.cardTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment method accounts':
                await this.paymentMethods.accounts.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'payment method account':
                await this.paymentMethods.account.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'all payment methods accounts title':
                await this.paymentMethods.accountsModal.accountsTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'all payment methods cards and accounts':
                await this.paymentMethods.accountsModal.cardsAndAccounts.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions title':
                await this.termsAndConditions.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions description':
                await this.termsAndConditions.description.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions contract pdf':
                await this.termsAndConditions.termsofConditions.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions payment pdf':
                await this.termsAndConditions.termsofPaymentPDF.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions privacy notice':
                await this.termsAndConditions.privacyNotice.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'declare true info option':
                if (value !== '') {
                    await this.termsAndConditions.declareInfoAsTrueChk.waitForAttribute({
                        attribute: 'aria-checked',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.termsAndConditions.declareInfoAsTrueChk.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'declare info help':
                await this.termsAndConditions.declareInfoHelpText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'accept and read terms option':
                if (value !== '') {
                    await this.termsAndConditions.iveReadChk.waitForAttribute({
                        attribute: 'aria-checked',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.termsAndConditions.iveReadChk.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'accept data concent option':
                if (value !== '') {
                    await this.termsAndConditions.dataConcentChk.waitForAttribute({
                        attribute: 'aria-checked',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.termsAndConditions.dataConcentChk.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'accept payment conditions option':
                if (value !== '') {
                    await this.termsAndConditions.termsofPaymentChk.waitForAttribute({
                        attribute: 'aria-checked',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.termsAndConditions.termsofPaymentChk.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'accept receive email option':
                if (value !== '') {
                    await this.termsAndConditions.agreeReceiveEmailChk.waitForAttribute({
                        attribute: 'aria-checked',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.termsAndConditions.agreeReceiveEmailChk.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'terms and conditions info message':
                await this.termsAndConditions.infoPanel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms and conditions continue button':
                if (value === 'disabled') {
                    await this.termsAndConditions.continueBtn.waitForAttribute({
                        attribute: 'aria-disabled',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.termsAndConditions.continueBtn.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary montly contribution title':
                await this.summary.personalSaving.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary usd amount':
                await this.summary.personalSaving.amountUSD.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary amount mxn convertion':
                await this.summary.personalSaving.convertionMXN.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary saving time':
                await this.summary.personalSaving.time.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary goal':
                if (value === '6000') {
                    await this.summary.personalSaving.goal.waitForAttribute({
                        attribute: 'description',
                        value: '6,000 USD',
                        timeout: config.wait.M
                    });
                } else {
                    await this.summary.personalSaving.goal.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary saving frequency':
                if (value === 'anual') {
                    await this.summary.personalSaving.frequency.waitForAttribute({
                        attribute: 'description',
                        value: 'Anual',
                        timeout: config.wait.M
                    });
                } else {
                    await this.summary.personalSaving.frequency.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary first beneficiary':
                if (value === 'steve rogers carter') {
                    await this.summary.beneficiaries.benefOne.waitForAttribute({
                        attribute: 'heading',
                        value: 'Steve Rogers Carter',
                        timeout: config.wait.M
                    });
                } else if (value === 'father') {
                    await this.summary.beneficiaries.benefOne.waitForAttribute({
                        attribute: 'description',
                        value: 'Padre',
                        timeout: config.wait.M
                    });
                } else {
                    await this.summary.beneficiaries.benefOne.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary second beneficiary':
                if (value === 'sandra vazquez espinoza') {
                    await this.summary.beneficiaries.benefTwo.waitForAttribute({
                        attribute: 'heading',
                        value: 'Sandra Vazquez Espinoza',
                        timeout: config.wait.M
                    });
                } else if (value === 'mother') {
                    await this.summary.beneficiaries.benefTwo.waitForAttribute({
                        attribute: 'description',
                        value: 'Madre',
                        timeout: config.wait.M
                    });
                } else {
                    await this.summary.beneficiaries.benefTwo.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary third beneficiary':
                if (value === 'pedro gonzalez gutierrez') {
                    await this.summary.beneficiaries.benefThree.waitForAttribute({
                        attribute: 'heading',
                        value: 'Pedro Gonzalez Gutierrez',
                        timeout: config.wait.M
                    });
                } else if (value === 'spouse') {
                    await this.summary.beneficiaries.benefThree.waitForAttribute({
                        attribute: 'description',
                        value: 'Cónyuge',
                        timeout: config.wait.M
                    });
                } else {
                    await this.summary.beneficiaries.benefThree.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary fourth beneficiary':
                if (value === 'juan perez avila') {
                    await this.summary.beneficiaries.benefFour.waitForAttribute({
                        attribute: 'heading',
                        value: 'Juan Perez Avila',
                        timeout: config.wait.M
                    });
                } else if (value === 'concubinage') {
                    await this.summary.beneficiaries.benefFour.waitForAttribute({
                        attribute: 'description',
                        value: 'Concubinario',
                        timeout: config.wait.M
                    });
                } else {
                    await this.summary.beneficiaries.benefFour.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary payment method':
                if (value === 'changed card') {
                    await this.summary.paymentMethod.waitForAttribute({
                        attribute: 'card-title',
                        value: '0001CH1789',
                        timeout: config.wait.M
                    });
                } else {
                    await this.summary.paymentMethod.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary termns and conditions':
                await this.summary.termsAndConditions.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'insurance contract button':
                await this.contractInsuranceBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'token page header':
                await this.tokenModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'token page exit button':
                await this.tokenModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'token page image':
                await this.tokenModal.smsIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'token page text':
                await this.tokenModal.insertSmsLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'token page input token':
                await this.tokenModal.smsPasswordInputField.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'token page accept button':
                await this.tokenModal.smsContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'token page cancel button':
                await this.tokenModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'telephone icon':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sticky button':
                if(value === 'call me') {
                    await this.stickyCallMeBack.scrollIntoView();
                    await this.stickyCallMeBack.waitForText({text:'Quiero que me llame un asesor', exactMatch:false});
                } else {
                    await this.stickyCallMeBack.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'offer detail heading text':
                await this.offerDetail.imgSubText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive exit header':
                await this.proactiveAssistance.exitModalCloseIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive assistance help text':
                await this.proactiveAssistance.helpQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive assistance specialist text':
                await this.proactiveAssistance.paragraphOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive assistance call options text':
                await this.proactiveAssistance.paragraphTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive request call button':
                await this.proactiveAssistance.requestCallBtn.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value === 'not visible'
                });
                break;
            case 'proactive schedule call button':
                await this.proactiveAssistance.scheduleCallBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive exit process button':
                await this.proactiveAssistance.exitProcessBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive assistance toast':
                await this.proactiveAssistanceToast.__root.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive assistance toast text':
                await this.proactiveAssistanceToast.toastText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proactive assistance toast link':
                await this.proactiveAssistanceToast.toastLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeModalTooltip() {
        await (await this.closeTooltip.waitForClickable({timeout: config.wait.M})).click();
    }

    async closeCurrentStep() {
        await (await this.quotation.exitBtn.waitForDisplayed({timeout: config.wait.L})).click();
    }

    async exitProcessFromProactiveAssistance() {
        await this.proactiveAssistance.exitProcessBtn.waitForDisplayed({
            timeout: config.wait.L,
            errorMessage: 'Proactive assistance modal not visible.'
        });
        await this.proactiveAssistance.exitProcessBtn.click();
    }

    async exitOffer() {
        await this.goToStep({step: 'quotation'});
        await this.closeCurrentStep();
        await this.exitProcessFromProactiveAssistance();
    }

    async accessToCallMeBack(access) {
        switch (access) {
            case 'header':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                await this.telephoneIcon.click();
                break;
            case 'link':
                await this.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.XL
                });
                await this.stickyCallMeBack.waitForClickable({timeout: config.wait.M});
                await this.stickyCallMeBack.click();
                break;
            default:
                throw new Error(`The access '${access}' not found.`);
        }
    }

    async openPDF(pdfName) {
        switch (pdfName.toLowerCase()) {
            case 'general conditions':
                await (await this.offerDetail.generalConditions.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
        }
    }

    setCurrentModal(modal) {
        this.currentModal = modal;
    }

    setCurrentStep(step) {
        this.currentStep = step;
    }

    async continueProcess(step = this.currentStep) {
        const stepList = ['offerDetail', 'questionnaire', 'quotation', 'personalSaving', 'beneficiaries', 'paymentMethods', 'termsAndConditions', 'summary'];
        switch (step) {
            case 'paymentMethods':
                await this.choosePaymentAccount(global.user.accountNumbers[1]);
                break;
            default:
                await (await this[step].continueBtn.waitForClickable({timeout: config.wait.L})).click();
                await this.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.S,
                    timeoutToDisappear: config.wait.XL
                });
                this.setCurrentStep(stepList[stepList.indexOf(step) + 1]);
        }
        logger.info(`Moving to step "${this.currentStep}"`);
    }

    async showWYSKAnswers() {
        await (await this.offerDetail.whatYouShouldKnow.planDetails.shouldIPayTaxesBtn.waitForClickable({timeout: config.wait.L})).click();
        await (await this.offerDetail.whatYouShouldKnow.planDetails.whatHappensBtn.waitForClickable({timeout: config.wait.L})).click();
        await (await this.offerDetail.whatYouShouldKnow.lifeInsurance.sinceWhenBtn.waitForClickable({timeout: config.wait.L})).click();
        await (await this.offerDetail.whatYouShouldKnow.goalInDollars.howToGrowItBtn.waitForClickable({timeout: config.wait.L})).click();
        await (await this.offerDetail.whatYouShouldKnow.goalInDollars.howDoesItWorkBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async selectHealthOption(option = '') {
        let auxElement;
        switch (option) {
            case 'diabetes':
                auxElement = 'diabetesOption';
                break;
            case 'cancer':
                auxElement = 'cancerOption';
                break;
            case 'heart disease':
                auxElement = 'heartOption';
                break;
            case 'emphysema':
                auxElement = 'lungsOption';
                break;
            case 'hepatic':
                auxElement = 'kidneyOption';
                break;
            case 'healty':
                auxElement = 'healtyOption';
                break;
            default:
                throw new Error(`[ERR] The condition "${option}" is unknown. Cannot be processed.`);
        }
        await (await this.questionnaire[auxElement].waitForClickable({timeout: config.wait.L})).click();
        this.setCurrentModal('generic accept');
    }

    async inputGoal(amount) {
        await (await this.quotation.inputAmount.waitForClickable({timeout: config.wait.L})).setValue({value: amount});
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.S,
            timeoutToDisappear: config.wait.XL
        });
        await this.quotation.inputMsg.click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.S,
            timeoutToDisappear: config.wait.XL
        });
    }

    async choosePaymentFrequency(frequency = '') {
        let auxElement;
        switch (frequency) {
            case 'yearly':
                auxElement = 'cardAnnually';
                break;
            case 'monthly':
                auxElement = 'cardMonthly';
                break;
            default:
                throw new Error(`[ERR] The option ${frequency} is unknown. Cannot be selected.`);
        }
        await (await this.personalSaving.freqAndSummary[auxElement].waitForClickable({timeout: config.wait.L})).click();
    }

    async registerExecCode({code, invalidCode} = {}) {
        await (await this.personalSaving.execCodeModal.input.waitForClickable({timeout: config.wait.L})).setValue({value: code});
        if (invalidCode) {
            await this.personalSaving.execCodeModal.icon.click();
        }
    }

    async deleteExecutiveCode() {
        await (await this.personalSaving.executiveCard.openExecModal.waitForClickable({timeout: config.wait.L})).click();
    }

    async addBeneficiaries(heirs = 1) {
        if (heirs > 4) {
            throw new Error('Cannot add more than 4 beneficiaries');
        }
        for (let i = 0; i < heirs; i++) {
            await this.openModal('beneficiary');
            await this.fillBeneficiary(global.user.beneficiaries[i]);
            await this.closeDialog('beneficiary');
        }
    }

    async fillBeneficiary(beneficiary) {
        await (await this.addBeneficiary.inputName
            .waitForClickable({timeout: config.wait.L}))
            .setValue({value: beneficiary.name});
        await (await this.addBeneficiary.inputlastName
            .waitForClickable({timeout: config.wait.L}))
            .setValue({value: beneficiary.lastName});
        await (await this.addBeneficiary.inputsecondLastName
            .waitForClickable({timeout: config.wait.L}))
            .setValue({value: beneficiary.secondLastName});
        await this.selectRelationship(beneficiary.kinship);
        await this.fillBirthday(beneficiary.birthDay);
        if (beneficiary.newAddress) {
            await this.registerNewAddress();
            await this.fillNewAddress(beneficiary.address);
            await (await this.registerAddress.continueBtn.waitForClickable({timeout: config.wait.L})).click();
        }
    }

    async selectRelationship(option = '') {
        let kinship = '';
        switch (option) {
            case '0003':
            case 'spouse':
                kinship = '[value="0003"]';
                break;
            case '0004':
            case 'child':
                kinship = '[value="0004"]';
                break;
            case '0005':
            case 'concubine':
                kinship = '[value="0005"]';
                break;
            case '0006':
            case 'other':
                kinship = '[value="0006"]';
                break;
            case '0007':
            case 'father':
                kinship = '[value="0007"]';
                break;
            case '0008':
            case 'mother':
                kinship = '[value="0008"]';
                break;
            default:
                throw new Error(`[ERR] The option ${option} is unknown. Cannot be selected.`);
        }
        await this.addBeneficiary.relationship.selectOption({option: kinship});
    }

    async fillBirthday(birthday = '1999-04-15') {
        await (await this.addBeneficiary.birthDay.waitForEnabled({timeout: config.wait.L}))
            .sendKeys({keys: birthday.split('-').reverse().join('')});
    }

    async showAddress() {
        await (await this.addBeneficiary.showAddressBtn.waitForClickable({timeout: config.wait.L})).click();
        await this.fillOtp('11111111');
    }

    async enableNewAddressReg() {
        await (await this.addBeneficiary.newAdddress.waitForClickable({timeout: config.wait.L})).click();
    }

    async registerNewAddress() {
        await this.enableNewAddressReg();
        await (await this.addBeneficiary.registerAddressBtn.waitForClickable({timeout: config.wait.L})).click();
        await this.registerAddress.searchBtn.waitForAnimation({timeout: config.wait.L});
    }

    async fillNewAddress(address) {
        await (await this.registerAddress.street.waitForEnabled({timeout: config.wait.L})).setValue({value: address.street});
        await (await this.registerAddress.exteriorNum.waitForEnabled({timeout: config.wait.L})).setValue({value: address.outerN});
        await (await this.registerAddress.interiorNum.waitForEnabled({timeout: config.wait.L})).setValue({value: address.innerN});
        await (await this.registerAddress.zipCode.waitForEnabled({timeout: config.wait.L})).setValue({value: address.zipCode});
        await (await this.registerAddress.searchBtn.waitForClickable({timeout: config.wait.L})).click();
        await this.registerAddress.colony.selectOption({option: `[value="${address.colony}"]`});
    }

    async editFirstBeneficiary() {
        await (await this.beneficiaries.benefOne.editBtn.waitForClickable({timeout: config.wait.L})).click();
        await this.addBeneficiary.continueBtn.waitForAnimation({timeout: config.wait.L});
        await (await this.addBeneficiary.inputName.waitForClickable({timeout: config.wait.L})).setValue({value: 'Edited'});
        await (await this.addBeneficiary.inputlastName.waitForClickable({timeout: config.wait.L})).setValue({value: 'User'});
        await (await this.addBeneficiary.inputsecondLastName.waitForClickable({timeout: config.wait.L})).setValue({value: 'Successfully'});
        await this.closeDialog('beneficiary');
    }

    async deleteFirstBeneficiary() {
        await (await this.beneficiaries.benefOne.deleteBtn.waitForClickable({timeout: config.wait.L})).click();
        await this.closeDialog('generic accept');
    }

    async editPercentages(total) {
        const inputs = ['inputOne', 'inputTwo', 'inputThree', 'inputFour'];
        const end = (total > 100) ? 1 : 0;
        let j = 0;
        for (let i = 3; i > end; i--) {
            if (await this.editPercentage[inputs[i]].input.isDisplayed()) {
                await (await this.editPercentage[inputs[i]].input.waitForClickable({timeout: config.wait.L})).setValue({value: '1'});
                j++;
            }
        }
        if (total > 100) {
            await (await this.editPercentage[inputs[0]].input.waitForClickable({timeout: config.wait.L})).setValue({value: '97'});
            await (await this.editPercentage[inputs[1]].input.waitForClickable({timeout: config.wait.L})).setValue({value: `${total - j - 97}`});
        } else {
            await (await this.editPercentage[inputs[0]].input.waitForClickable({timeout: config.wait.L})).setValue({value: `${total - j}`});
        }
        await this.editPercentage.percentagePie.click();
    }

    async openMoreAccountsModal() {
        await (await this.paymentMethods.accountsLink.waitForClickable({timeout: config.wait.L})).click();
    }

    async choosePaymentAccount(accNumber = '') {
        try {
            await (await (await this.paymentMethods.account.elementByText({text: accNumber.slice(-5)})).waitForClickable({timeout: config.wait.L})).click();
        } catch (error) {
            logger.error(`There's no account with account number "${accNumber}". Selecting the first account that's available.`);
            await (await this.paymentMethods.account.waitForClickable({timeout: config.wait.L})).click();
        }
        this.setCurrentStep('termsAndConditions');
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.S,
            timeoutToDisappear: config.wait.XL
        });
    }

    async selectTermsAndConditionOptions() {
        await (await this.termsAndConditions.iveReadChk.waitForClickable({timeout: config.wait.L})).click();
        await (await this.termsAndConditions.dataConcentChk.waitForClickable({timeout: config.wait.L})).click();
        await (await this.termsAndConditions.termsofPaymentChk.waitForClickable({timeout: config.wait.L})).click();
    }

    async initializeInAppUpgrade() {
        await this.dataManager.execute({
            script: () => {
                this.closeSpinner();
            },
            args: []
        });
    }

    async initialize() {
        await this.metaSegura.execute({
            script: () => {
                this.setCheckboxDocument();
            },
            args: []
        });
    }

    async acceptAllTermsAndCondition() {
        await (await this.termsAndConditions.termsofConditions.waitForClickable({timeout: config.wait.L})).click();
        await this.initialize();
        await this.initializeInAppUpgrade();
        await (await this.termsAndConditions.iveReadChk.waitForClickable({timeout: config.wait.L})).click();
        await (await this.termsAndConditions.dataConcentChk.waitForClickable({timeout: config.wait.L})).click();
        await (await this.termsAndConditions.termsofPaymentChk.waitForClickable({timeout: config.wait.L})).click();
        await (await this.termsAndConditions.agreeReceiveEmailChk.waitForClickable({timeout: config.wait.L})).click();
        await (await this.termsAndConditions.declareInfoAsTrueChk.waitForClickable({timeout: config.wait.L})).click();
    }

    async openModal(modal) {
        switch (modal) {
            case 'what you should know':
                await (await this.offerDetail.whatYouShouldKnowLink
                    .waitForClickable({timeout: config.wait.L}))
                    .click();
                await (await this.offerDetail.whatYouShouldKnow.imgPanel
                    .waitForAnimation({timeout: config.wait.L}))
                    .waitForDisplayed({timeout: config.wait.L});
                this.setCurrentModal('whatYouShouldKnow');
                break;
            case 'privacy notice':
                if (this.currentStep === 'questionnaire') {
                    await (await this.questionnaire.privacyNoticeLink.waitForClickable({timeout: config.wait.L})).click();
                } else if (this.currentStep === 'termsAndConditions') {
                    await (await this.termsAndConditions.privacyNotice.waitForClickable({timeout: config.wait.L})).click();
                }
                this.setCurrentModal('');
                break;
            case 'executive code':
                await (await this.personalSaving.executiveCard.openExecModal.waitForClickable({timeout: config.wait.L})).click();
                await this.personalSaving.execCodeModal.text.waitForDisplayed({timeout: config.wait.L});
                this.setCurrentModal('executiveCode');
                break;
            case 'know more':
                await (await this.beneficiaries.learnMoreBtn.waitForClickable({timeout: config.wait.L})).click();
                await this.errors.helpModal.waitForAnimation({timeout: config.wait.L});
                await this.errors.modal.img.scrollIntoView();
                this.setCurrentModal('generic');
                break;
            case 'beneficiary':
                await (await this.beneficiaries.addBeneficiaryBtn.waitForClickable({timeout: config.wait.L})).click();
                await (await this.addBeneficiary.continueBtn
                    .waitForAnimation({timeout: config.wait.L}))
                    .waitForDisplayed({timeout: config.wait.L});
                this.setCurrentModal('beneficiary');
                break;
            case 'edit percentages':
                await (await this.beneficiaries.editPercentageBtn.waitForClickable({timeout: config.wait.L})).click();
                this.setCurrentModal('percentages');
                break;
            default:
                throw new Error(`[ERR] The option "${modal}" is unknown. Cannot be selected.`);
        }
        if (this.currentModal === 'generic') {
            await this.errors.modal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
            await this.errors.modal.acceptBtn.waitForAnimation({timeout: config.wait.L});
        }
    }

    async closeDialog(modal = this.currentModal) {
        switch (modal) {
            case 'whatYouShouldKnow':
                await (await this.offerDetail.whatYouShouldKnow.continueBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'executiveCode':
                await (await this.personalSaving.execCodeModal.applyBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'beneficiary':
                await (await this.addBeneficiary.continueBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'percentages':
                await (await this.editPercentage.acceptBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'generic accept':
                await (await this.errors.modal.acceptBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'generic':
                await (await this.errors.modal.exitBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                await (await this.errors.modal.acceptBtn.waitForClickable({timeout: config.wait.L})).click();
        }
        this.setCurrentModal('');
    }

    async goToStep({step, frequency = '', fillExecCode = false, heirs = 4} = {}) {
        switch (step.toLowerCase()) {
            case 'questionnaire':
                if (!this.currentStep) {
                    this.setCurrentStep('offerDetail');
                }
                if (this.currentStep === 'offerDetail') {
                    await this.continueProcess();
                }
                break;
            case 'quotation':
                await this.goToStep({step: 'questionnaire'});
                if (this.currentStep === 'questionnaire') {
                    await this.selectHealthOption('healty');
                    await this.continueProcess();
                }
                break;
            case 'personal savings':
                await this.goToStep({step: 'quotation'});
                if (this.currentStep === 'quotation') {
                    await this.continueProcess();
                    await this.personalSaving.freqAndSummary.title.waitForDisplayed({timeout: config.wait.XL});
                }
                break;
            case 'beneficiaries':
                await this.goToStep({step: 'personal savings'});
                if (this.currentStep === 'personalSaving') {
                    if (frequency === 'annualy') {
                        await this.choosePaymentFrequency(frequency);
                    }
                    if (fillExecCode) {
                        await this.openModal('executive code');
                        await this.registerExecCode(global.user.executiveCode);
                        await this.closeDialog();
                    }
                    await this.continueProcess();
                    await this.beneficiaries.addBeneficiaryBtn.waitForDisplayed({timeout: config.wait.XL});
                }
                break;
            case 'payment method':
                await this.goToStep({step: 'beneficiaries'});
                if (this.currentStep === 'beneficiaries') {
                    await this.addBeneficiaries(heirs);
                    await this.continueProcess();
                    await this.paymentMethods.accounts.waitForDisplayed({timeout: config.wait.XL});
                }
                break;
            case 'terms and conditions':
                await this.goToStep({step: 'payment method'});
                if (this.currentStep === 'paymentMethods') {
                    await this.continueProcess();
                    await this.termsAndConditions.description.waitForDisplayed({timeout: config.wait.L});
                }
                break;
            case 'summary':
                await this.goToStep({step: 'terms and conditions'});
                if (this.currentStep === 'termsAndConditions') {
                    await this.acceptAllTermsAndCondition();
                    await this.continueProcess();
                }
                break;
            default:
                throw new Error(`The step "${step}" is unknown. Cannot be processed.`);
        }
    }

    async getFirstEditLink(path) {
        const element = path.split('.').reduce((obj, key) => obj[key], this);
        return (await element.elements()).value[0];
    }

    async editSection(changes) {
        switch (changes.toLowerCase()) {
            case 'personal savings and goal': {
                const editLink = await this.getFirstEditLink('personalSaving.freqAndSummary.editSection');
                await (await (await editLink.waitForAnimation({timeout: config.wait.L})).waitForDisplayed({timeout: config.wait.M})).click();
                await this.personalSaving.freqAndSummary.description.waitForDisplayed({timeout: config.wait.L});
                await (await this.personalSaving.freqAndSummary.changeBtnFreq.changeBtn.waitForClickable({timeout: config.wait.L})).click();
                await this.quotation.description.scrollIntoView();
                await this.quotation.description.waitForDisplayed({timeout: config.wait.M});
                await this.inputGoal('6000');
                await this.continueProcess('quotation');
                await this.choosePaymentFrequency('yearly');
                await this.continueProcess();
                this.setCurrentStep('summary');
                break;
            }
            case 'beneficiaries options and percentages': {
                const editLink = await this.getFirstEditLink('beneficiaries.editSection');
                await (await (await editLink.waitForAnimation({timeout: config.wait.L})).waitForDisplayed({timeout: config.wait.M})).click();
                await this.beneficiaries.beneficiariesList.waitForDisplayed({timeout: config.wait.L});
                await this.deleteFirstBeneficiary();
                await this.addBeneficiaries(1);
                await this.continueProcess('beneficiaries');
                this.setCurrentStep('summary');
                break;
            }
            case 'payment method': {
                const editLink = await this.getFirstEditLink('paymentMethods.editSection');
                await (await (await editLink.waitForAnimation({timeout: config.wait.L})).waitForDisplayed({timeout: config.wait.M})).click();
                await this.paymentMethods.description.waitForDisplayed({timeout: config.wait.L});
                await this.choosePaymentAccount(global.user.accountNumbers[0]);
                this.setCurrentStep('summary');
                break;
            }
            default:
                throw new Error(`The changes "${changes}" are unknown. Cannot be processed.`);
        }
    }

    async finishContracting() {
        await (await this.contractInsuranceBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async verifyExRateYearly() {
        const inputAmount = +(await this.quotation.inputAmount.getValue()).replace(/[^\d.]/, '');
        const exchangeRatio = +(await this.quotation.currencyConv.getAttribute({name: 'amount'}));
        const amount = +(await this.quotation.currencyConvAmount.getAttribute({name: 'amount'}));
        if (Math.abs(amount - +(exchangeRatio * inputAmount).toFixed(2)) <= 5) {
            logger.info('The exchange rate was confirmed as correctly calculated');
        } else {
            throw new Error('The exchange rate has a deviation of more than $5 MXN');
        }
    }

    async verifyExRateMonthly() {
        const monthlyMXN = +(await this.quotation.monthlyMXN.getText()).replace(/[^\d.]/g, '');
        const exchangeRatio = +(await this.quotation.currencyConv.getAttribute({name: 'amount'}));
        const amount = +(await this.quotation.monthlyCont.getAttribute({name: 'amount'}));
        if (Math.abs(monthlyMXN - +(exchangeRatio * amount).toFixed(2)) <= 5) {
            logger.info('The exchange rate was confirmed as correctly calculated');
        } else {
            throw new Error('The exchange rate has a deviation of more than $5 MXN');
        }
    }

    async verifyYearlyDisc() {
        const monthlyPay = +(await this.personalSaving.freqAndSummary.cardMonthly.getAttribute({name: 'amount'}));
        const yearlyPay = +(await this.personalSaving.freqAndSummary.cardAnnually.getAttribute({name: 'amount'}));
        if (Math.abs(yearlyPay - monthlyPay * 11.5) <= 1) {
            logger.info('The discount is applied correctly');
        } else {
            throw new Error('The discount is not applied correctly');
        }
    }

    async retryModal(times) {
        this.setCurrentModal('generic');
        for (let i = 0; i < times; i++) {
            await this.errors.helpModal.waitForAnimation({timeout: config.wait.M});
            await (await this.errors.modal.acceptBtn.waitForClickable({timeout: config.wait.L})).click();
        }
    }

    async retryOperative(times) {
        this.setCurrentModal();
        for (let i = 0; i < times; i++) {
            await this.errors.helpModal.waitForDisplayed({timeout: config.wait.M});
            await this.errors.helpModal.waitForAnimation({timeout: config.wait.M});
            await Commands.pause({time: config.wait.S});
            await (await this.errors.modal.acceptBtn.waitForClickable({timeout: config.wait.L})).click();
            await this.fillOtp('11111111');
        }
    }

    async chooseMaxPeriod() {
        await (await this.quotation.knob.waitForClickable({timeout: config.wait.L})).dragAndDrop({
            target: {
                x: {
                    value: 490,
                    type: 'absolute'
                }
            }, duration: config.wait.S
        });
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.S,
            timeoutToDisappear: config.wait.XL
        });
    }
}

export default new OcMetasegura();

