import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('InvestAdvisoryPortfolio')
class InvestAdvisoryProductDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-investAdvisoryPortfolio[state="active"]',
            elements: {
                mainPage: '[data-tag-name="other-investment-origination-oc-investment-portfolio-mx"]',
                onboardingContainer: '[data-tag-name="bbva-transition-container"]#welcome-profile',
                onboardingButton: '[data-tag-name="bbva-transition-container"]#welcome-profile [data-tag-name="bbva-button-default"]#showProposalDetail',
                onboardingButtonClose: '[data-tag-name="bbva-transition-container"]#welcome-profile #btn-menu',
                profilingResultModal: {
                    properties: {
                        root: '[data-tag-name="bbva-transition-container"]#profiling-result'
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    profilingResult: {
                        properties: {
                            root: '[data-tag-name="other-investment-origination-oc-investment-portfolio-profiling-result-mx"]'
                        },
                        description: '[data-tag-name="bbva-type-text"][size="M"]',
                        link: '[data-tag-name="bbva-type-link"]#showProfilingAgain',
                        button: '[data-tag-name="bbva-button-default"]#showProposalDetail',
                    },
                },
                profilingTestModal: {
                    profilingTest: {
                        properties: {
                            root: '[data-tag-name="other-investment-origination-oc-investment-portfolio-test-profiling-mx"]'
                        },
                        header: 'div.header-modal [data-tag-name="bbva-header-main"]',
                        closeModalIcon: 'div.header-modal [data-tag-name="bbva-header-main"] button#btn-close',
                        btnBlueIcon: '#btn-blue-profiling',
                        callMeBackStickyLink: '#allStickyButtonLink',
                        maximumBlueButton: '#maximum #btn-blue-profiling',
                        multistep: {
                            properties: {
                                root: '[data-tag-name="bbva-expandable-multistep"]'
                            },
                            experienceStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"][step="1"]'
                                },
                                title: 'div.header [data-tag-name="bbva-core-heading"] span#headingLabel',
                                editLink: '[data-tag-name="bbva-type-link"]',
                                instruction: '[data-tag-name="bbva-type-text"][size="XS"][font-weight="500"]',
                                content: 'div.content',
                                option: '[data-tag-name="bbva-form-checkbox"][value="__OPTION__"]',
                                button: '[data-tag-name="bbva-button-default"]#step1',
                                disabledButton: '[data-tag-name="bbva-button-default"]#step1[disabled]'
                            },
                            amountStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"][step="2"]'
                                },
                                header: 'div.header',
                                editLink: '[data-tag-name="bbva-type-link"]',
                                content: 'div.content',
                                title: '[data-tag-name="bbva-type-text"]',
                                input: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] input',
                                button: '[data-tag-name="bbva-button-default"]#step2',
                                disabledButton: '[data-tag-name="bbva-button-default"]#step2[disabled]',
                                errorMessage: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] div.message.error [data-tag-name="bbva-notification-help"]'
                            },
                            termStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"][step="3"]'
                                },
                                content: 'div.content',
                                option: '[data-tag-name="bbva-form-radio-button"][value="__OPTION__"]',
                                button: '[data-tag-name="bbva-button-default"]#step3'
                            },
                            percentageStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"][step="4"]'
                                },
                                header: 'div.header',
                                editLink: '[data-tag-name="bbva-type-link"]',
                                content: 'div.content',
                                option: '[data-tag-name="bbva-form-radio-button"][value="__OPTION__"]',
                                button: '[data-tag-name="bbva-button-default"]#step4'
                            },
                            riskStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"][step="5"]'
                                },
                                header: 'div.header',
                                editLink: '[data-tag-name="bbva-type-link"]',
                                option: '[data-tag-name="bbva-form-radio-button"][value="__OPTION__"]',
                                button: '[data-tag-name="bbva-button-default"]#step5',
                                riskLabelText: 'div.summary div:nth-child(1) [data-tag-name="bbva-type-text"]:nth-child(2)',
                                attitudeLabel: 'div.summary div:nth-child(3) [data-tag-name="bbva-type-text"]:nth-child(2)',
                            },
                            performanceStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"][step="6"]'
                                },
                                content: 'div.content',
                                option: '[data-tag-name="bbva-form-radio-button"][value="__OPTION__"]',
                                button: '[data-tag-name="bbva-button-default"]#step6',
                                editLink: '[data-tag-name="bbva-type-link"]',
                            },
                            attitudeStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"][step="7"]'
                                },
                                option: '[data-tag-name="bbva-form-radio-button"][value="__OPTION__"]',
                                button: '[data-tag-name="bbva-button-default"]#step7'
                            },
                            finishButton: '[data-tag-name="bbva-button-default"][variant="positive"]'
                        },
                    },
                },
                proposalDetailContainer: {
                    properties: {
                        root: '[data-tag-name="bbva-transition-container"]#proposal-detail'
                    },
                    header: '[data-tag-name="bbva-header-main"] div.header [data-tag-name="bbva-type-text"]',
                    proposalDetail: {
                        properties: {
                            root: '[data-tag-name="other-investment-origination-oc-investment-portfolio-proposal-mx"]'
                        },
                        iconLink: '[data-tag-name="bbva-type-link"][variant="icon"]',
                        strategiesLabel: '[data-tag-name="bbva-type-text"][size="XL"][font-weight="500"]',
                        capitalPreservationLabel: 'div.panel:nth-child(11) div.content-wrapper div.label-wrapper [data-tag-name="bbva-type-text"].label',
                        flowGenerationLabel: 'div.panel:nth-child(15) div.content-wrapper div.label-wrapper [data-tag-name="bbva-type-text"].label',
                        capitalGrowthLabel: 'div.panel:nth-child(19) div.content-wrapper div.label-wrapper [data-tag-name="bbva-type-text"].label',
                        liquidezLabel: 'div.panel div.content-wrapper div.label-wrapper [data-tag-name="bbva-type-text"].label',
                        escenariosLink: '[data-tag-name="bbva-type-link"].future-link',
                        strategy: '[data-tag-name="bbva-type-link"]#__OPTION__',
                        button: '[data-tag-name="bbva-button-default"]#startHiring',
                        showGuide: '#showGuide',
                        share: '#share [data-tag-name="bbva-button-action"]'
                    },
                    backButton: '[data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',
                },
                futureProjectionsModal: [BbvaHelpModal, {
                    modifiers: '#future-projections',
                    additionalElements: {
                        closeModalIcon: '[data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',
                        description: '[data-tag-name="bbva-type-text"][size="S"][font-weight="300"]',
                        button: '[data-tag-name="bbva-button-default"].close-button',
                    }
                }],
                amountChange: [BbvaHelpModal, {
                    modifiers: '#amount-change',
                    additionalElements: {
                        title: '[data-tag-name="bbva-type-text"][size="3XL"]',
                        input: '[data-tag-name="bbva-form-input"].amount-change-input-padding [data-tag-name="bbva-form-amount"] input',
                        button: '[data-tag-name="bbva-button-default"].continue-button'
                    }
                }],
                strategyDetailModal: [BbvaHelpModal, {
                    modifiers: '#strategy-detail',
                    additionalElements: {
                        closeModalIcon: '[data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',
                        strategyDetailsLabel: '[data-tag-name="bbva-header-category"]:nth-child(3) [data-tag-name=bbva-core-heading] [data-tag-name="bbva-type-text"][size="S"]',
                        button: '[data-tag-name="bbva-button-default"].close-button',
                        fundLabel: '[data-tag-name="bbva-type-text"][size="L"][font-weight="500"]',
                        fundName: '#fund-description div.description [data-tag-name="bbva-type-text"][size="S"]:nth-child(2)',
                        fundKey: '#fund-name div.description [data-tag-name="bbva-type-text"][size="S"]:nth-child(2)',
                        capitalGrowthSquedule: '#fund-schedule div.description [data-tag-name="bbva-type-text"][size="S"][font-weight="500"]',
                        liquiditySquedule: '#fund-schedule',
                        mrDocument: '[data-tag-name="bbva-type-link"]#mr-document',
                        prDocument: '[data-tag-name="bbva-type-link"]#pr-document',
                        dcDocument: '[data-tag-name="bbva-type-link"]#dici-document',
                    }
                }],
                hiringFlow: {
                    properties: {
                        root: '[data-tag-name="other-investment-origination-oc-investment-portfolio-hiring-multistep-mx"]'
                    },
                    header: '[data-tag-name="bbva-transition-container"]#uno [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]#text',
                    buttonBlue: '[data-tag-name="bbva-transition-container"]#uno [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',
                    buttonExit: '[data-tag-name="bbva-transition-container"]#uno #headerMainMultistep #btn-menu',
                    multistep: {
                        properties: {
                            root: '[data-tag-name="bbva-expandable-multistep"]'
                        },
                        accountsStep: {
                            properties: {
                                root: '[data-tag-name="bbva-expandable-step"]#renderAssociatedAccountStep'
                            },
                            title: 'div.header [data-tag-name="bbva-core-heading"] span#headingLabel',
                            instruction: '[data-tag-name="bbva-type-text"][size="XS"].expandable-amount:nth-child(1)',
                            accountsLabel: '[data-tag-name="bbva-type-text"][font-weight="500"].expandable-amount.padding-top-default',
                            content: 'div.expandable-amount',
                            account: 'div#obtainAmount',
                            editAccount: '[data-tag-name="bbva-type-link"]#editButton',
                        },
                        termsAndConditionsStep: {
                            properties: {
                                root: '[data-tag-name="bbva-expandable-step"]#expandableTermsAndContiditions'
                            },
                            content: 'div.content',
                            obtainProfilingPDF: '#obtainProfilingPDF',
                            obtainContractPDF: '#obtainContractPDF',
                            reasonablenessLetter: '#reasonablenessLetter',
                            options:'[data-tag-name="bbva-form-checkbox"]',
                            option: '[data-tag-name="bbva-form-checkbox"][value="__OPTION__"]',
                            button: '[data-tag-name="bbva-button-default"]',
                            privacyLink: '[data-tag-name="bbva-type-link"]#privacyLink',
                            editConsult: '[data-tag-name="bbva-type-link"]#editButton',
                        },
                        callMeBackButton: '#callMeBackInvestHiringSticky, #allCompleteMultistepCallMeBack',
                        finishButton: '[data-tag-name="bbva-button-default"]#allCompleteButton',
                        notificationMessage: '[data-tag-name="bbva-notification-message"].render-confirm-message'
                    }
                },
                privacyModal: [BbvaHelpModal, {
                    modifiers: '#modalPrivacity',
                    additionalElements: {
                        button: '[data-tag-name="bbva-button-default"]',
                        content: '#helpModalContent'
                    }
                }],
                exitConfirmationModal: [BbvaHelpModal, {
                    modifiers: '[visible]#exitHelpModal',
                    additionalElements: {
                        header: '[data-tag-name="bbva-header-main"]',
                        buttonContinue: '[data-tag-name="bbva-button-default"]',
                        buttonReturn: '[data-tag-name="bbva-type-link"]'
                    }
                }],
                proactiveExitModal: [BbvaHelpModal, {
                    modifiers: '#managedHelpModal[visible], #managedHelpModal[visible]',
                    additionalElements: {
                        header: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                        exitModalCloseIcon: '[data-tag-name="bbva-header-main"]#helpModalHeader button#btn-close',
                        helpQuestion: '#title-text',
                        paragraphOne: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-of-type(1)',
                        paragraphTwo: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-of-type(2)',
                        requestCallBtn: '[data-tag-name="relationship-models-proactive-assistance-mx-modal-footer"] #call-now',
                        scheduleCallBtn: '[data-tag-name="relationship-models-proactive-assistance-mx-modal-footer"] #schedule-call',
                        exitProcessBtn: '[data-tag-name="relationship-models-proactive-assistance-mx-modal-footer"] #exit-process',
                    }
                }],
                hiringComplete: {
                    properties: {
                        root: '[data-tag-name="other-investment-origination-oc-investment-portfolio-hiring-complete-multistep-mx"]'
                    },
                    notificationMessage: '[data-tag-name="bbva-notification-message"]'
                },
                insufficientFundsModal: [BbvaHelpModal, {
                    modifiers: '[visible]#modal-insufficient-funds',
                    additionalElements: {
                        header: '[data-tag-name="bbva-header-main"]',
                        buttonContinue: '[data-tag-name="bbva-button-default"]'
                    }
                }],
                feedbackModalWarning: [BbvaHelpModal, {
                    modifiers: '[modal-type="warning"][visible]',
                    additionalElements: {
                        header: '[data-tag-name="bbva-header-main"]',
                        buttonPrimary: '[data-tag-name="bbva-button-default"]',
                        buttonSecondary: '[data-tag-name="bbva-type-link"]'
                    }
                }]
            },
            elementsSpherica: {
                mainPage: '[data-tag-name="other-investment-origination-oc-investment-portfolio-mx"]',
                profilingTestModal: {
                    profilingTest: {
                        closeModalIcon: '[data-tag-name="bbva-header-main"] #btn-menu',
                        multistep: {
                            experienceStepCompleted: '[data-tag-name="bbva-expandable-step"][step="1"][completed]',
                            experienceStepActive: '[data-tag-name="bbva-expandable-step"][step="1"][active]',
                            amountStepCompleted: '[data-tag-name="bbva-expandable-step"][step="2"][completed]',
                            riskStepCompleted: '[data-tag-name="bbva-expandable-step"][step="5"][completed]',
                            termStep: {
                                option: '[data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="__OPTION__"]',
                            },
                            percentageStep: {
                                option: '[data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="__OPTION__"]',
                            },
                            riskStep: {
                                option: '[data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="__OPTION__"]',
                            },
                            performanceStep: {
                                option: '[data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="__OPTION__"]',
                            },
                            attitudeStep: {
                                option: '[data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="__OPTION__"]',
                            },
                            experienceStep: {
                                instruction: '[data-tag-name="bbva-type-text"] span.text',
                            }
                        },
                    },
                },
                proposalDetailContainer: {
                    properties: {
                        root: '[data-tag-name="bbva-transition-container"]#proposal-detail'
                    },
                    proposalDetail: {
                        strategiesLabel: '.panel-container-strategy [data-tag-name="bbva-type-text"][size="L"]',
                        capitalPreservationLabel: '.content-wrapper:nth-child(4) .strategy-text',
                        flowGenerationLabel: '.content-wrapper:nth-child(7) .strategy-text',
                        capitalGrowthLabel: '.content-wrapper:nth-child(10) .strategy-text',
                        liquidezLabel: '.content-wrapper .strategy-text',
                        iconLink: '.edit-amount-link',
                        showGuide: '#showGuide',
                        share: '#share [data-tag-name="bbva-button-action"]'
                    }
                },
                hiringFlow: {
                    multistep: {
                        callMeBackButton: '#allCompleteMultistepCallMeBack',
                        notificationMessage: '.complete-confirm-text-top',
                        accountsStep: {
                            title: '.content-step .header #heading .text.lines',
                            instruction: '.padding-step-associated-account',
                            accountsLabel: '.padding-top-default.padding-bottom-title',
                            content: '.content-step'
                        },
                    },
                },
                hiringComplete: {
                    notificationMessage: '.render-confirm-message',
                    buttonShare: '[data-tag-name="bbva-button-row"] div#buttons span:nth-child(2) [data-tag-name="bbva-button-action"]',
                    buttonViewDocuments : '[data-tag-name="bbva-button-row"] div#buttons span:nth-child(1) [data-tag-name="bbva-button-action"]',
                },
                amountChange:
                [BbvaHelpModal, {
                    additionalElements: {
                        title: '.header-title-edit',
                        input: 'input',
                        button: '[data-tag-name="bbva-button-default"].continue-button'
                    }
                }],
                exitConfirmationModal: [BbvaHelpModal, {
                    additionalElements: {
                        buttonReturn: '[data-tag-name="bbva-button-default"][variant="link"]'
                    }
                }],
                futureProjectionsModal: [BbvaHelpModal, {
                    additionalElements: {
                        description: '.title-projections .text',
                    }
                }],
                feedbackModalWarning: [BbvaHelpModal, {
                    modifiers: '[modal-type="caution"][visible]',
                    additionalElements: {
                        buttonSecondary: '[data-tag-name="bbva-button-default"][variant="link"]',
                    }
                }],
                strategyDetailModal: [BbvaHelpModal, {
                    additionalElements: {
                        strategyDetailsLabel: '[data-tag-name="bbva-header-category"]:nth-child(3) [data-tag-name=bbva-core-heading] [data-tag-name="bbva-type-text"]',
                        liquidityLabel: '[data-tag-name="bbva-type-text"][size="XL"]',
                        fundLabel: '[data-tag-name="bbva-type-text"][size="XL"]',
                        fundName: '#fund-description .body-text',
                        fundKey: '#fund-name .body-text',
                        capitalGrowthSquedule: '#fund-schedule .body-text',
                        liquiditySquedule: '#fund-liquidity .body-text'
                    }
                }],
                privacyModal: [BbvaHelpModal, {
                    additionalElements: {
                        button: '#helpModalHeader #btn-close',
                        content: '#helpModalContent'
                    }
                }],
                modifyAmountModal: [BbvaHelpModal, {
                    modifiers: '#insufficientModal',
                    additionalElements: {
                        header: '[data-tag-name="bbva-header-main"]',
                        close: '#btn-close',
                        warningIcon: '#helpModalTitle .title-icon',
                        title: '#helpModalTitle #title-text',
                        text: '.padding-bottom-strategies',
                        input: '[data-tag-name="bbva-form-input"]',
                        inputError: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-notification-help"]',
                        notification: '[data-tag-name="bbva-notification-message"]',
                        continue: '.footer-button',
                    }
                }],
                unavailableOperationModal: [BbvaHelpModal, {
                    modifiers: '[modal-type="error"][visible]',
                    additionalElements: {
                        header: '[data-tag-name="bbva-header-main"]',
                        close: '#btn-close',
                        warningIcon: '#helpModalTitle .title-icon',
                        title: '#helpModalTitle #title-text',
                        text: '.content:nth-child(1) [data-tag-name="bbva-type-text"]',
                        exit: '[data-tag-name="bbva-button-default"]:not([variant="link"])',
                        call: '.footer-button.link'
                    }
                }],
            },
            requiredElements: [
                '__root'
            ]
        });
    }

    async startQuestionaire() {
        await (await this.onboardingButton.waitForDisplayed({timeout: config.wait.M})).click();
        await this.profilingTestModal.profilingTest.multistep.experienceStep.content.waitForDisplayed({timeout: config.wait.M});
    }

    async fillExperienceStep(executePreviousStep = true, check = '2') {
        if (executePreviousStep) {
            await this.startQuestionaire();
        }
        await (await (await this.profilingTestModal.profilingTest.multistep.experienceStep.option.specifySelector({placeholder: '__OPTION__', value: check})
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await this.profilingTestModal.profilingTest.multistep.experienceStep.button.waitForDisplayed({timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.multistep.experienceStep.button.scrollIntoView({block: 'nearest'});
        await this.profilingTestModal.profilingTest.multistep.experienceStep.button.click({ useActions: true });
        await this.profilingTestModal.profilingTest.multistep.amountStep.content.waitForDisplayed({timeout: config.wait.M});
    }

    async acceptSimplifiedProfile() {
        await (await this.profilingResultModal.profilingResult.button.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showguidepdf() {
        await (await this.proposalDetailContainer.proposalDetail.showGuide.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async sharePersonalizedProposal() {
        await (await this.proposalDetailContainer.proposalDetail.share.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async editAmountIconLink() {
        await (await this.proposalDetailContainer.proposalDetail.iconLink.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async clickProfilingPDF() {
        await (await this.hiringFlow.multistep.termsAndConditionsStep.obtainProfilingPDF.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async clickContractPDF() {
        await (await this.hiringFlow.multistep.termsAndConditionsStep.obtainContractPDF.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async clickReasonablenessLetter() {
        await (await this.hiringFlow.multistep.termsAndConditionsStep.reasonablenessLetter.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async checkAllExperienceOptions() {
        await this.profilingTestModal.profilingTest.multistep.experienceStep.content.waitForDisplayed({timeout: config.wait.L});
        for (let i = 1; i <= 6; i++) {
            await (await (await this.profilingTestModal.profilingTest.multistep.experienceStep.option
                .specifySelector({placeholder: '__OPTION__', value: i}))
                .waitForExist({timeout: config.wait.M}))
                .click();
        }
        await (await this.profilingTestModal.profilingTest.multistep.experienceStep.button.waitForDisplayed({timeout: config.wait.M})).click();
        await this.profilingTestModal.profilingTest.multistep.amountStep.content.waitForDisplayed({timeout: config.wait.M});
    }

    async fillAmountStep(executePreviousStep = true, amount = '20000') {
        if (executePreviousStep) {
            await this.fillExperienceStep();
        }
        const {amountStep} = this.profilingTestModal.profilingTest.multistep;
        await amountStep.input.waitForEnabled({timeout: config.wait.M});
        await amountStep.input.setValue(amount);
        await amountStep.input.execute({script: function () { this.blur(); }, args: []});
        await (await amountStep.title.waitForEnabled({timeout: config.wait.M})).click();
        await amountStep.button.scrollIntoView({block: 'center'});
        await (await amountStep.button.waitForClickable({timeout: config.wait.M})).click();
        await this.profilingTestModal.profilingTest.multistep.termStep.content.waitForDisplayed({timeout: config.wait.M});
    }

    async fillMinimunAmountStep(amount = '50') {
        await this.startQuestionaire();
        await this.fillExperienceStep(false, '1');
        await this.profilingTestModal.profilingTest.multistep.amountStep.input.waitForEnabled({timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.multistep.amountStep.input.setValue(amount);
        await (await this.profilingTestModal.profilingTest.multistep.amountStep.title.waitForEnabled({timeout: config.wait.M})).click();
    }

    async fillTermStep(executePreviousStep = true, radio = '2', continueStep = true) {
        if (executePreviousStep) {
            await this.fillAmountStep();
        }
        const {termStep} = this.profilingTestModal.profilingTest.multistep;
        await termStep.content.waitForDisplayed({timeout: config.wait.M});
        await termStep.__root.waitForDisplayed({timeout: config.wait.M});
        await (await termStep.option.specifySelector({placeholder: '__OPTION__', value: radio})
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        if (continueStep) {
            await termStep.button.scrollIntoView({block: 'nearest'});
            await (await termStep.button.waitForDisplayed({timeout: config.wait.M})).click({ useActions: true });

            await this.profilingTestModal.profilingTest.multistep.percentageStep.content.waitForDisplayed({timeout: config.wait.M});
        }
    }

    async fillPercentageStep(executePreviousStep = true, radio = '1') {
        if (executePreviousStep) {
            await this.fillTermStep();
        }
        await this.profilingTestModal.profilingTest.multistep.percentageStep.__root.waitForDisplayed({timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.multistep.percentageStep.__root.waitForAnimation({timeout: config.wait.M});
        await (await this.profilingTestModal.profilingTest.multistep.percentageStep.option.specifySelector({ placeholder: '__OPTION__', value: radio }).waitForDisplayed({ timeout: config.wait.M })).click();
        await this.profilingTestModal.profilingTest.multistep.percentageStep.button.scrollIntoView({ block: 'nearest' });
        await (await this.profilingTestModal.profilingTest.multistep.percentageStep.button.waitForDisplayed({ timeout: config.wait.M }))
            .click({ useActions: true });
    }

    async fillRiskStep(executePreviousStep = true, radio = '2') {
        if (executePreviousStep) {
            await this.fillPercentageStep();
        }
        await this.profilingTestModal.profilingTest.multistep.riskStep.__root.waitForDisplayed({timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.multistep.riskStep.__root.waitForAnimation({timeout: config.wait.M});
        await (await this.profilingTestModal.profilingTest.multistep.riskStep.option.specifySelector({placeholder: '__OPTION__', value: radio}).waitForClickable({timeout: config.wait.M})).click();
        await this.profilingTestModal.profilingTest.multistep.riskStep.button.scrollIntoView({block: 'nearest'});
        await (await (await this.profilingTestModal.profilingTest.multistep.riskStep.button.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({ useActions: true });
        await this.profilingTestModal.profilingTest.multistep.performanceStep.__root.waitForDisplayed({timeout: config.wait.M});
    }

    async fillPerformanceStep(executePreviousStep = true, radio = '2') {
        if (executePreviousStep) {
            await this.fillRiskStep();
        }
        await this.profilingTestModal.profilingTest.multistep.performanceStep.__root.waitForDisplayed({timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.multistep.performanceStep.__root.waitForAnimation({timeout: config.wait.M});
        await (await this.profilingTestModal.profilingTest.multistep.performanceStep.option.specifySelector({ placeholder: '__OPTION__', value: radio })
            .waitForDisplayed({ timeout: config.wait.M })).click();
        await this.profilingTestModal.profilingTest.multistep.performanceStep.button.scrollIntoView({ block: 'nearest' });
        await (await this.profilingTestModal.profilingTest.multistep.performanceStep.button.waitForDisplayed({ timeout: config.wait.M }))
            .click({ useActions: true });
    }

    async fillAttitudeStep(executePreviousStep = true, radio = '2') {
        if (executePreviousStep) {
            await this.fillPerformanceStep();
        }
        await this.profilingTestModal.profilingTest.multistep.attitudeStep.__root.waitForDisplayed({timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.multistep.attitudeStep.__root.waitForAnimation({timeout: config.wait.M});
        await (await this.profilingTestModal.profilingTest.multistep.attitudeStep.option.specifySelector({ placeholder: '__OPTION__', value: radio })
            .waitForDisplayed({ timeout: config.wait.M })).click();
        await this.profilingTestModal.profilingTest.multistep.attitudeStep.button.scrollIntoView({ block: 'nearest' });
        await (await this.profilingTestModal.profilingTest.multistep.attitudeStep.button.waitForDisplayed({ timeout: config.wait.M }))
            .click({ useActions: true });
        await this.profilingTestModal.profilingTest.multistep.finishButton.waitForDisplayed({ timeout: config.wait.M });
    }

    async editStep(step) {
        await this.profilingTestModal.profilingTest.header.scrollIntoView({block: 'center', timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.header.waitForDisplayed({timeout: config.wait.XL});
        if(this.isSpherica()){
            await this.waitForElementsExist(this.profilingTestModal.profilingTest.multistep[step].editLink);
            const editLink = (await this.profilingTestModal.profilingTest.multistep[step].editLink.elements()).value[0];
            await (await (await editLink.waitForAnimation({timeout: config.wait.M}))
                .waitForDisplayed({timeout: config.wait.M})).click();
        } else {
            await (await (await (await this.profilingTestModal.profilingTest.multistep[step].editLink).waitForAnimation({timeout: config.wait.M}))
                .waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async editOption(step, option) {
        await (await this.profilingTestModal.profilingTest.multistep[step].option.specifySelector({placeholder: '__OPTION__', value: option})
            .waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.profilingTestModal.profilingTest.multistep[step].button.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async exitProfiling() {
        await this.profilingTestModal.profilingTest.header.scrollIntoView({block: 'center', timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.header.waitForDisplayed({timeout: config.wait.M});
        await (await this.profilingTestModal.profilingTest.closeModalIcon.waitForDisplayed({timeout: config.wait.L})).click();
    }

    async exitProfilingWelcome() {
        await this.onboardingButtonClose.waitForDisplayed({timeout: config.wait.M});
        await this.onboardingButtonClose.click();
    }

    async sendQuestionnaire(executePreviousStep = true) {
        if (executePreviousStep) {
            await this.fillAttitudeStep();
        }
        await this.mainPage.execute({
            script: () => {
                this._INIPostStatusResponse = true;
                this._PDVPostStatusResponse = true;
            },
            args: []
        });
        await (await (await this.profilingTestModal.profilingTest.multistep.finishButton
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async acceptProfile(executePreviousStep = true) {
        if (executePreviousStep) {
            await this.sendQuestionnaire();
        }
        await this.profilingResultModal.profilingResult.button.scrollIntoView({ block: 'nearest' });
        await (await (await this.profilingResultModal.profilingResult.button.waitForDisplayed({ timeout: config.wait.M }))
            .waitForAnimation({ timeout: config.wait.M }))
            .click({ useActions: true });
    }

    async profileAgain() {
        await (await this.profilingResultModal.profilingResult.link.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
        await this.profilingTestModal.profilingTest.multistep.experienceStep.content.waitForDisplayed({timeout: config.wait.M});
    }

    async profileBlue() {
        await (await this.profilingResultModal.profilingResult.link.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.profilingTestModal.profilingTest.btnBlueIcon.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showInvestmentScenarios() {
        await (await this.proposalDetailContainer.proposalDetail.escenariosLink.waitForDisplayed({timeout: config.wait.M})).click();
        await this.futureProjectionsModal.additionalElements.description.waitForDisplayed({timeout: config.wait.M});
    }

    async closeInvestmentScenarios(closeElement) {
        switch (closeElement) {
            case 'header icon':
                await (await this.futureProjectionsModal.additionalElements.closeModalIcon.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'understood button':
                await (await this.futureProjectionsModal.additionalElements.button.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${closeElement} is not a valid element to close the investment scenarios`);
        }
        await this.proposalDetailContainer.header.waitForDisplayed({timeout: config.wait.M});
    }

    async editAmountIcon() {
        await (await this.proposalDetailContainer.proposalDetail.iconLink.waitForDisplayed({timeout: config.wait.M})).click();
        await this.amountChange.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
    }

    async editAmountFromProposal() {
        await this.amountChange.additionalElements.input.waitForEnabled({timeout: config.wait.M});
        if (!this.isSpherica()) {
            await this.amountChange.additionalElements.input.setValue('20000');
        }
        await (await this.amountChange.additionalElements.title.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.amountChange.additionalElements.button.waitForDisplayed({timeout: config.wait.M})).click();
        await this.proposalDetailContainer.header.waitForDisplayed({timeout: config.wait.M});
    }

    async showInvestmentStrategy(strategy) {
        await (await this.proposalDetailContainer.proposalDetail.strategy.specifySelector({placeholder: '__OPTION__', value: strategy})
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async closeStrategyDetail(closeElement) {
        switch (closeElement) {
            case 'header icon':
                await (await this.strategyDetailModal.additionalElements.closeModalIcon.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'understood button':
                await this.strategyDetailModal.additionalElements.button.scrollIntoView({block: 'center', timeout: config.wait.M});
                await (await this.strategyDetailModal.additionalElements.button.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${closeElement} is not a valid element to close the modal`);
        }
        await this.proposalDetailContainer.header.waitForDisplayed({timeout: config.wait.M});
    }

    async startHiringProcess() {
        await (await this.proposalDetailContainer.proposalDetail.button.waitForDisplayed({timeout: config.wait.M})).click();
        await this.hiringFlow.buttonExit.waitForDisplayed({timeout: config.wait.M});
        await this.hiringFlow.multistep.accountsStep.content.waitForDisplayed({timeout: config.wait.M});
    }

    async selectAccount() {
        await this.hiringFlow.multistep.accountsStep.content.waitForDisplayed({timeout: config.wait.M});
        await (await this.hiringFlow.multistep.accountsStep.account.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async acceptTermsConditions() {
        await this.checkTermsConditions();
        await (await this.hiringFlow.multistep.termsAndConditionsStep.button.waitForDisplayed({timeout: config.wait.M})).click();
        await this.hiringFlow.multistep.finishButton.waitForDisplayed({timeout: config.wait.M});
    }

    async viewPrivacyNotice(){
        await this.hiringFlow.multistep.termsAndConditionsStep.content.waitForDisplayed({timeout: config.wait.M});
        await this.checkTermsConditions();
        await (await this.hiringFlow.multistep.termsAndConditionsStep.privacyLink.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async viewTermsConditionsConsult(){
        await this.hiringFlow.multistep.termsAndConditionsStep.content.waitForDisplayed({timeout: config.wait.M});
        await this.checkTermsConditions();
        await (await this.hiringFlow.multistep.termsAndConditionsStep.button.waitForDisplayed({timeout: config.wait.M})).click();
        if(this.isSpherica()){
            await this.hiringFlow.multistep.finishButton.waitForClickable({timeout: config.wait.M});
            const editLink = (await this.hiringFlow.multistep.termsAndConditionsStep.editConsult.elements()).value[0];
            await (await editLink.waitForDisplayed({timeout: config.wait.M})).click();
        } else {
            await (await this.hiringFlow.multistep.termsAndConditionsStep.editConsult.waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async exitHiring() {
        await this.hiringFlow.multistep.termsAndConditionsStep.content.waitForDisplayed({timeout: config.wait.M});
        await this.checkTermsConditions();
        await (await this.hiringFlow.multistep.termsAndConditionsStep.button.waitForDisplayed({timeout: config.wait.M})).click();
        await this.exitHiringFromHeader();
    }

    async exitHiringFromHeader() {
        await (await this.hiringFlow.buttonExit.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async blueValidation(option) {
        if(option === 'proposal'){
            await this.profilingTestModal.profilingTest.__root.waitForDisplayed({timeout: config.wait.M});
            await (await this.profilingTestModal.profilingTest.maximumBlueButton.waitForDisplayed({timeout: config.wait.M})).click();
        }else{
            await (await this.hiringFlow.buttonBlue.waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async callMeBackValidation(accessFrom) {
        if (accessFrom === 'proposal') {
            await this.profilingTestModal.profilingTest.callMeBackStickyLink.waitForDisplayed({timeout: config.wait.M});
            await this.profilingTestModal.profilingTest.callMeBackStickyLink.click({ useActions: true });
        } else if (accessFrom === 'contract') {
            await this.hiringFlow.multistep.callMeBackButton.waitForDisplayed({timeout: config.wait.M});
            await this.hiringFlow.multistep.callMeBackButton.click();
        }
    }

    async changeAccountInResumen(){
        await this.hiringFlow.multistep.termsAndConditionsStep.content.waitForDisplayed({timeout: config.wait.M});
        await this.checkTermsConditions();
        await (await this.hiringFlow.multistep.termsAndConditionsStep.button.waitForDisplayed({timeout: config.wait.M})).click();
        if(this.isSpherica()){
            const editLink = (await this.hiringFlow.multistep.accountsStep.editAccount.elements()).value[0];
            await (await (await editLink.waitForAnimation({timeout: config.wait.M}))
                .waitForDisplayed({timeout: config.wait.M})).click();
        } else {
            await (await this.hiringFlow.multistep.accountsStep.editAccount.waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async checkTermsConditions() {
        await this.hiringFlow.multistep.termsAndConditionsStep.content.waitForDisplayed({timeout: config.wait.M});
        for (let index = 1; index < 5; index++) {
            await this.waitForElementsExist(this.hiringFlow.multistep.termsAndConditionsStep.options);
            await this.hiringFlow.multistep.termsAndConditionsStep.content.waitForDisplayed({timeout: config.wait.L});
            await this.hiringFlow.multistep.termsAndConditionsStep.option.specifySelector({placeholder: '__OPTION__', value: `accepted-${index}`})
                .waitForAnimation({timeout: config.wait.M});
            await (await this.hiringFlow.multistep.termsAndConditionsStep.option.specifySelector({placeholder: '__OPTION__', value: `accepted-${index}`})
                .waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async showConfirmationModal() {
        await (await this.hiringFlow.multistep.finishButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async confirmInvestmentHiring() {
        await this.onboardingContainer.execute({script: () => { this.removeAttribute('visible'); }, args: []});
        await this.fillOtp('11111111');
    }

    async clickViewDocuments() {
        await (await this.hiringComplete.buttonViewDocuments.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async reviewHiringDocuments() {
        await (await this.hiringComplete.buttonShare.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async finalizeProposedHiring(option, confirm = true, finish = true) {
        if(option.includes('complete')) {
            await this.fillQuestionnaire('traditional');
            await this.acceptProfile(false);
        }
        else {
            await this.acceptSimplifiedProfile();
        }

        await this.startHiringProcess();
        await this.selectAccount();
        await this.acceptTermsConditions();

        if(confirm) {
            await this.showConfirmationModal();
        }
        if (finish) {
            await this.confirmInvestmentHiring();
        }
    }

    async hiringSummary() {
        await this.acceptSimplifiedProfile();
        await this.startHiringProcess();
        await this.selectAccount();
        await this.acceptTermsConditions();
    }

    async selectBlueIcon() {
        await (await this.hiringFlow.buttonBlue.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async retryOperation() {
        await this.acceptProfile(false);
        for (let i = 0; i < 2; i++) {
            await (await (await this.unavailableOperationModal.additionalElements.exit.scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M}))
                .click();
            await this.acceptProfile(false);
        }
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'questionnaire resume label':
                await (await this.profilingTestModal.profilingTest.header.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'experience step title':
            case 'experience step title active':
            case 'experience resume label':
                if (this.isSpherica()) {
                    await this.profilingTestModal.profilingTest.multistep[`experienceStep${item.includes('active') ? 'Active' : 'Completed'}`].waitForDisplayed({timeout: config.wait.M});
                } else {
                    expect(await this.profilingTestModal.profilingTest.multistep.experienceStep.title.waitForText({text: 'Experiencia', timeout: config.wait.M}));
                }
                break;
            case 'your inversion label':
                if (this.isSpherica()) {
                    await this.profilingTestModal.profilingTest.multistep.amountStepCompleted.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.profilingTestModal.profilingTest.multistep.amountStep.header.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'your inversion finances':
                await this.profilingTestModal.profilingTest.multistep.percentageStep.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'preferences label':
                if (this.isSpherica()) {
                    await this.profilingTestModal.profilingTest.multistep.riskStepCompleted.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.profilingTestModal.profilingTest.multistep.riskStep.header.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'known profile button':
                await this.profilingTestModal.profilingTest.multistep.finishButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment result':
                await this.profilingResultModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment profile description':
                await this.profilingResultModal.profilingResult.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue with this profile button':
                await this.profilingResultModal.profilingResult.button.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'profile again link':
                await this.profilingResultModal.profilingResult.link.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'initial amount header':
                await this.profilingTestModal.profilingTest.multistep.amountStep.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'initial amount field':
                await this.profilingTestModal.profilingTest.multistep.amountStep.input.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'initial amount disabled button':
                await this.profilingTestModal.profilingTest.multistep.amountStep.disabledButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text input notification error':
                await this.profilingTestModal.profilingTest.multistep.amountStep.errorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'risk label':
            case 'risk label lower':
            case 'risk label moderate':
            case 'risk label high':
                await this.profilingTestModal.profilingTest.multistep.riskStep.riskLabelText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'attitude label':
            case 'attitude label keep me':
            case 'attitude label invest more':
                await this.profilingTestModal.profilingTest.multistep.riskStep.attitudeLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proposal detail header':
                await this.proposalDetailContainer.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'strategies label':
                await this.proposalDetailContainer.proposalDetail.strategiesLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'capital preservation label':
                await this.proposalDetailContainer.proposalDetail.capitalPreservationLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'flow generation label':
                await this.proposalDetailContainer.proposalDetail.flowGenerationLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'capital growth label':
                await this.proposalDetailContainer.proposalDetail.capitalGrowthLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidez label':
                await this.proposalDetailContainer.proposalDetail.liquidezLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'start hiring button':
                await this.proposalDetailContainer.proposalDetail.button.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'questionnaire invest header':
                await this.profilingTestModal.profilingTest.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'experience step instruction':
                await this.profilingTestModal.profilingTest.multistep.experienceStep.instruction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button disabled':
                await this.profilingTestModal.profilingTest.multistep.experienceStep.disabledButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest hiring header':
                await this.hiringFlow.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated account title':
                await this.hiringFlow.multistep.accountsStep.title.waitForText({text: 'Cuenta asociada', timeout: config.wait.M});
                break;
            case 'associated account instruction':
                await this.hiringFlow.multistep.accountsStep.instruction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account label':
                await this.hiringFlow.multistep.accountsStep.accountsLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount to invest label with new amount':
                await this.amountChange.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidity label':
                await this.strategyDetailModal.additionalElements.fundLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'strategy details label':
                await this.strategyDetailModal.additionalElements.strategyDetailsLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'capital growth fund name':
            case 'liquidity fund name':
                await this.strategyDetailModal.additionalElements.fundName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'capital growth fund key':
            case 'liquidity fund key':
                await this.strategyDetailModal.additionalElements.fundKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'capital growth fund schedule':
                await this.strategyDetailModal.additionalElements.capitalGrowthSquedule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidity fund schedule':
                await this.strategyDetailModal.additionalElements.liquiditySquedule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dc document':
                await this.strategyDetailModal.additionalElements.dcDocument.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'mr document':
                await this.strategyDetailModal.additionalElements.mrDocument.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'pr document':
                await this.strategyDetailModal.additionalElements.prDocument.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'privacy contract button':
                await this.privacyModal.additionalElements.button.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy contract content':
                await this.privacyModal.additionalElements.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions option':
                await this.hiringFlow.multistep.termsAndConditionsStep.option.specifySelector({placeholder: '__OPTION__', value: 'accepted-1'}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions option two':
                await this.hiringFlow.multistep.termsAndConditionsStep.option.specifySelector({placeholder: '__OPTION__', value: 'accepted-2'}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions button':
                await this.hiringFlow.multistep.termsAndConditionsStep.button.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal exit hiring header':
                await this.exitConfirmationModal.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal exit hiring continue':
                await this.exitConfirmationModal.additionalElements.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal exit hiring return':
                await this.exitConfirmationModal.additionalElements.buttonReturn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal screen':
                await this.proactiveExitModal.additionalElements.exitModalCloseIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal help question text':
                await this.proactiveExitModal.additionalElements.helpQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal advisor support text':
                await this.proactiveExitModal.additionalElements.paragraphOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal call options text':
                await this.proactiveExitModal.additionalElements.paragraphTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal request call button':
                await this.proactiveExitModal.additionalElements.requestCallBtn.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value === 'not visible',
                });
                break;
            case 'exit modal schedule call button':
                await this.proactiveExitModal.additionalElements.scheduleCallBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal leave process button':
                await this.proactiveExitModal.additionalElements.exitProcessBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring button':
                await this.hiringFlow.multistep.finishButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring notification':
                await this.hiringFlow.multistep.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring complete notification':
                await this.hiringComplete.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring complete button':
                await this.hiringComplete.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal select another account header':
                await this.insufficientFundsModal.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal select another account button':
                await this.insufficientFundsModal.additionalElements.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning operation header':
                await this.feedbackModalWarning.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning operation continue':
                await this.feedbackModalWarning.additionalElements.buttonPrimary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning operation return':
                await this.feedbackModalWarning.additionalElements.buttonSecondary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning title':
                await this.feedbackModalWarning.additionalElements.buttonSecondary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning exit':
                await this.feedbackModalWarning.additionalElements.buttonSecondary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify amount modal header':
                await (await this.modifyAmountModal.additionalElements.header.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify amount modal close':
                await this.modifyAmountModal.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify amount modal warning icon':
                await this.modifyAmountModal.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                await this.modifyAmountModal.additionalElements.warningIcon.waitForExist({timeout: config.wait.M});
                break;
            case 'modify amount modal title':
                await this.modifyAmountModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify amount modal text':
                await this.modifyAmountModal.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify amount modal input':
                await this.modifyAmountModal.additionalElements.input.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify amount modal input error':
                await this.modifyAmountModal.additionalElements.inputError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify amount modal notification':
                await this.modifyAmountModal.additionalElements.notification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify amount modal continue':
                await this.modifyAmountModal.additionalElements.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable operation modal header':
                await this.unavailableOperationModal.__root.scrollIntoView({block: 'center'});
                await this.unavailableOperationModal.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable operation modal close':
                await this.unavailableOperationModal.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable operation modal warning icon':
                await this.unavailableOperationModal.additionalElements.warningIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable operation modal title':
                await this.unavailableOperationModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable operation modal text':
                await this.unavailableOperationModal.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable operation modal exit':
                await this.unavailableOperationModal.additionalElements.exit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable operation modal call':
                await this.unavailableOperationModal.additionalElements.call.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async getProfile(option = 'conservative', skipWelcome = false, amount) {
        const profiles = {
            conservative: ['1', '1', '2', '2', '2', '2'],
            traditional: ['1', '1', '1', '1', '1', '1'],
            moderate: ['6', '2', '3', '4', '2', '2'],
            aggressive: ['6', '3', '1', '4', '3', '2']
        };
        const profile = profiles[option];
        if(!skipWelcome) {
            await this.startQuestionaire();
        }
        await this.fillExperienceStep(false, profile[0]);
        await this.fillAmountStep(false, amount);
        await this.fillTermStep(false, profile[1]);
        await this.fillPercentageStep(false, profile[2]);
        await this.fillRiskStep(false, profile[3]);
        await this.fillPerformanceStep(false, profile[4]);
        await this.fillAttitudeStep(false, profile[5]);
    }

    async fillQuestionnaire(profile, skipWelcome, amount) {
        await this.getProfile(profile, skipWelcome, amount);
        await this.sendQuestionnaire(false);
    }

    async completeProfiling(profile, option) {
        await this.fillQuestionnaire(profile);
        await this.acceptProfile(false);
        if(option) {
            if(option === 'edit') {
                await this.editAmountIcon();
                await this.editAmountFromProposal();
            }
            else {
                await this.startHiringProcess();
            }
        }
    }

    async completeProfilingAndReturn() {
        await this.fillQuestionnaire();
        await this.profileAgain();
    }

    async editAllProfilingSteps(option) {
        if(option === 'all') {
            await this.startQuestionaire();
            await this.fillExperienceStep(false, 1);
            await this.editStep('experienceStep');
            await this.fillExperienceStep(false, 2);

            await this.fillAmountStep(false);
            await this.editStep('amountStep');
            await this.fillAmountStep(false, '2500');

            await this.fillTermStep(false, 1);
            await this.fillPercentageStep(false, 2);
            await this.editStep('percentageStep');
            await this.fillPercentageStep(false, 1);

            await this.fillRiskStep(false, 2);
            await this.fillPerformanceStep(false, 2);
            await this.fillAttitudeStep(false, 2);
        }
        else {
            await this.getProfile();
            await this.editStep('experienceStep');
            await this.editOption('experienceStep', 4);
            await this.editStep('amountStep');
            await this.fillAmountStep(false, '500');
            await this.editStep('percentageStep');
            await this.editOption('percentageStep', 3);
            await this.editStep('riskStep');
            await this.editOption('riskStep', 3);
            await this.editOption('performanceStep', 1);
            await this.editOption('attitudeStep', 1);

            await this.sendQuestionnaire(false);
        }
    }

    async completeProfilingAndViewScenarios() {
        await this.completeProfiling();
        await this.showInvestmentScenarios();
        await this.closeInvestmentScenarios('header icon');
        await this.showInvestmentScenarios();
        await this.closeInvestmentScenarios(this.isSpherica() ? 'header icon' : 'understood button');
    }

    async completeProfilingAndBack() {
        await this.completeProfiling();
        await (await (await this.proposalDetailContainer.backButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({ useActions: true });
        await this.profilingResultModal.profilingResult.description.waitForDisplayed({timeout: config.wait.M});
    }

    async goBack() {
        await this.exitProfilingWelcome();
    }

    async completeProfilingAndSeeStrategies(option) {
        await this.completeProfiling();
        if(option === 'details') {
            await this.showInvestmentStrategy('strategy0');
            await this.closeStrategyDetail('header icon');
            await this.showInvestmentStrategy('strategy1');
            await this.closeStrategyDetail(this.isSpherica() ? 'header icon' : 'understood button');
            await this.showInvestmentStrategy('strategy2');
        } else {
            await this.showInvestmentStrategy('strategy0');
        }
    }

    async exitProfilingProcess(option) {
        switch (option) {
            case 'experience':
                await this.startQuestionaire();
                await this.fillExperienceStep(false, 1);
                break;
            case 'amount':
                await this.startQuestionaire();
                await this.fillExperienceStep(false, 1);
                await this.fillAmountStep(false);
                break;
            case 'success':
                await this.getProfile();
                break;
            default:
                throw new Error(`${option} is not a valid option to exit the profiling process`);
        }
        await this.exitProfiling();
    }

    async completeProfilingRiskLevel(option) {
        await this.startQuestionaire();
        await this.fillExperienceStep(false, '1');
        await this.fillAmountStep(false);
        await this.fillTermStep(false, '1');
        await this.fillPercentageStep(false, '2');
        const optNumberLevel = {
            'no losses': 1,
            'lower': 2,
            'moderate': 3,
            'high': 4
        };
        await this.fillRiskStep(false, optNumberLevel[option]);
        await this.fillPerformanceStep(false, '2');
        await this.fillAttitudeStep(false, '2');
    }

    async finalizeProfiling(option) {
        if (option) {
            switch (option) {
                case 'accepting':
                    await this.acceptProfile(false);
                    break;
                case option.includes('trying') && option:
                    await this.retryOperation();
                    break;
                default:
                    throw new Error(`The option is not correct, received: ${option}`);
            }
        }
    }

    async selectCMB(){
        await this.profilingTestModal.profilingTest.callMeBackStickyLink.waitForDisplayed({timeout: config.wait.M});
        await this.profilingTestModal.profilingTest.callMeBackStickyLink.click();
    }

    async selectCmbHiring() {
        await this.hiringFlow.multistep.callMeBackButton.waitForDisplayed({timeout: config.wait.M});
        await this.hiringFlow.multistep.callMeBackButton.click();
    }
}

export default new InvestAdvisoryProductDetail();
